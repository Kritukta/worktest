/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewDealEditorStyles'

import {
    AccessoryPanel,
    Button,
    CenterPageHeader,
    ContentPanel,
    DateInput,
    DateInputTypes,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    NavigationBackButton,
    NavigationTextButton,
    NumberInput,
    Page,
    Popover,
    PopoverPosition,
    PopoverType,
    ProfileCell,
    RadioButton,
    RadioGroup,
    RightPageHeader,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    View,
    Loader,
    Panel,
    PanelType,
    ButtonType,
    Textarea
} from 'ufs-mobile-platform'
import moment from 'moment'
import {
    Models as ModelsApp,
    FullScreenError,
    LoaderWithText
} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Models as ModelsScheduler, ContainerActivity} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsParentDealPicker from "../models/ModelsParentDealPicker"
import * as ModelsCampaignPicker from "../models/ModelsCampaignPicker"
import Error from "../models/Error"
import ContainerMemberList from '../containers/ContainerMemberList'
import ContainerEmployee from '../containers/ContainerEmployee'
import ContainerParentDealPicker from '../containers/ContainerParentDealPicker'
import ContainerCampaignPicker from '../containers/ContainerCampaignPicker'
import ContainerAgentList from '../containers/ContainerAgentList'

import * as Utils from "../common/Util"
import PopoverTarget from '../modules/PopoverTarget'
import {
    ContainerScope,
    EnumsScheduler,
} from "mrmkmcib-scheduler"
import {SwipeableItem, IconRedMinus,IconView} from 'mrmkmcib-ui'
import ContainerSelectClassifierWithSearch from './shared/containers/ContainerSelectClassifierWithSearch'

const CHANCE_LIST: Array<string> = ['10','20','30','40','50','60','70','80','90','100',]
const ERROR_MESSAGE = 'Ошибка при обращении к шлюзу ЕФС'
const NO_DATA: string = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA)
const NO: string = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO)
const isSalesMethodSingleValue = (props: IProps): boolean => props.salesMethodList.data.length === 1

const disabledSalesMethodAttr = (isSalesMethodSingle: boolean) => {
    if (isSalesMethodSingle) {
        return {disabled: true}
    }
    return {}
}

const getLoader: React.StatelessComponent<string> = (text: string): React.ReactElement<View> => {
    return (
        <View testID='test-id-9993cebc-db4e-9b67-a9de-6dc7b1842288' style={Styles.getDealEditorContentContainer}>
            <LoaderWithText text= {text}
                            testID="test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a" />
        </View>
    )
}

const getErrorScreen = (error: Error | null, onRefresh:{(): void}): React.ReactElement<View> => (
    <View testID='test-id-7632026b-245gt-4022-a001-54trf22' style={Styles.getDealEditorContentContainer}>
        <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-34wgwe'}
                         title={
                             error && error.comment && error.comment !== ''
                                 ?  error.comment
                                 :  'Техническая ошибка.'
                         }
                         description={
                             error && error.message && error.message !== ''
                                 ?  error.message
                                 :  'Пожалуйста, обратитесь в службу сопровождения.'
                         }
                         onRefresh={onRefresh}
        />
    </View>
)

const isStandartDeal = (props: IProps): boolean => {
    return props.inputDealType && props.inputDealType.value === 'Стандартная сделка'
}

const isCreditDeal = (props: IProps): boolean => {
    return props.inputDealType && props.inputDealType.code === 'KK'
}

const getTeamPersonListContentRows = (memberList: Array<ModelsApp.Employee>) => {
    return memberList.map((item: ModelsApp.Employee, i: number) => {
        return (
            <TableRow testID='test-id-5b7df9f3-5d3d-8143-6866-1e340b40f48c' key={`teamPersonListContentRow_${i}`}
                      onClick={() => {}}>
                <ProfileCell testID='test-id-648b036f-7a1b-54ac-3951-5e26fceff972'
                             title={item.fullName}
                             subtitle={item.jobTitle}
                             hasArrow={true}/>
            </TableRow>
        )
    })
}

const getTeamPersonListContent = (props: IProps) => {
    if (!props.currentDeal.memberList || props.currentDeal.memberList.data.length === 0) {
        return (
            <View testID='test-id-205dc7ef-a51b-8763-5088-0f01c2bfe9ee'/>
        )
    }

    return (
        <Table testID='test-id-f0c35897-4605-e679-fc05-90f7650adc67' style={Styles.flex} underlined={false}>
            <TableBody testID='test-id-66872edd-4d67-cc9d-bb00-d66f7d773d31'>
                {getTeamPersonListContentRows(props.currentDeal.memberList.data)}
            </TableBody>
        </Table>
    )
}

const truncateTo = (str: string, maxLength: number): string => ('' + str).length > maxLength ? str.substr(0, maxLength) + '...' : str
const classifier = (cl:ModelsApp.Classifier | null | undefined):string => cl && cl.value || ''
const moreCount = (array: Array<any>): string => array.length > 1 ? ` (еще ${array.length - 1})` : ''
const memberListLine = (memberList: Models.MemberList): string => {
    if (memberList == null || memberList.data == null || memberList.data.length == 0) {
        return NO_DATA
    }
    const main = memberList.data.find( (member:ModelsApp.Employee) => member.isGeneral) || memberList.data[0]

    return truncateTo([
                [Utils.getAgentNameInitials(main), classifier(main.role)].join(' - '),
                (main.isGeneral ? ', ВКС' : '')
           ].join('') + (main.isBlocked ? ', Блокирован' : ''),
           48
    ) + moreCount(memberList.data)
}

export interface ISelectClassifierProps {
    performSelect: { (value: ModelsApp.Classifier,): void },
    classifierList: ModelsApp.ClassifierList
    selectedCode: string | undefined,
    testID: string,
    navigateBack?: { (): void },
    pageName?:string,
    codeText?: boolean,
}

export const SelectClassifier = (props: ISelectClassifierProps) => (
    <Page testID='test-id-bec3822a-ec44-9f33-c078-a44186f36f0b' scrollEnabled={true}
          content={<View testID='test-id-bec3822a-ec44-9f33-c078-a44186f36f0b'
                         style={Styles.marginTopBottom20}>
              <RadioGroup testID='test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979'
                          value={props.selectedCode}
                          onChange={(index, value) => props.performSelect(props.classifierList.data[index])}>
                  {props.classifierList.data.map((e: ModelsApp.Classifier, i:number) => <RadioButton
                      testID='test-id-b915294d-16cc-bb9b-e848-89be70954ffe' key={`radio-${e.code}-${i}`}
                      value={e.code}
                      label={props.codeText
                                ?   `${e.value}`
                                :   `${e.code} (${e.value})`
                      }
                  />)}
              </RadioGroup>
          </View>}>
        {props.navigateBack
            ?   [   <LeftPageHeader
                        key={'LeftPageHeader'}
                        testID='test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f'>
                        <NavigationBackButton
                            key={'NavigationBackButton'}
                            testID='test-id-bec4a269-fee7-73aa-6dbb-42bbbbec3e09'
                            title={false}
                            onClick={props.navigateBack}/>
                    </LeftPageHeader>,
                    <CenterPageHeader
                        key={'CenterPageHeader'}
                        testID='test-id-05e1fbbd-6557-1330-c538-530817c9af4e'>
                        <H2
                            key={'H2'}
                            testID='test-id-dcf9baaa-d613-5d0a-3ee3-dfa88e6b3aa6'>
                            {
                                props.pageName
                                    ? props.pageName
                                    : 'Выбор значения классификатора'
                            }
                        </H2>
                </CenterPageHeader>
                ]
            : <LeftPageHeader testID='test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f1'/>}
    </Page>
)

const dealAndTaskAssociateMain: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-yew-0996-grty-45fd-45tr7y' style={Styles.flex}>
        {
            props.dealActivityExcludeFetching
            ?   getLoader('Сохранение изменений по сделке...')
            :   props.dealActivityExcludeError
                ?   getErrorScreen(props.dealActivityExcludeError,props.performSave)
                :   dealAndTaskAssociate(props)
        }
    </View>
)

const dealAndTaskAssociate: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.dealAndTaskAssociateContainer}>
        <View style={Styles.flex}>
            <Table style={Styles.tableMargins}
                   testID='test-id-e203b1d6-b03b-b9cc-f574-5ca661a71f08'
                   underlined={false}>
                <TableBody testID='test-id-c7b00501-edb7-20d0-8192-b8a360974636'>
                    {dealActivityList(props)}
                    <TableRow testID='test-id-34GG-6W-57EJE-59ee-4eff'
                              key={`dealActivityListLast`}
                              onClick={() => {}}>
                        <TableCell testID='test-id-4142c7f1-f6dc-3aad-a7b4-c748dccec771'
                                   style={Styles.tableCellDirection}>
                            <View style={Styles.dealAndTaskAssociateContainerNote}>
                                <Text testID='test-id-5h4yew-8865-gtwgq-uiykfd-4gtwff'
                                      style={Styles.font16}>
                                    Откройте задачу справа и нажмите "Связать со сделкой"
                                </Text>
                            </View>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </View>
    </View>
)

const deleteButton = (props: IProps, i: number,activity: ModelsScheduler.Activity): React.ReactElement<Button> => (
    <View style={Styles.deleteButtonContainer}>
        <View style={Styles.deleteButton}>
            <Button type={ButtonType.TEXT}
                    testID='test-id-432e8c6f-4644-895c-a1ec-quwiyt452'
                    onExecute={()=>{props.performTapActivityDelete(Enums.SwipeableRowEmptyId.EmptyId)}}>
                <Text  testID='test-id-432e8c6f-4644-895c-a1ec-6harggs' >
                    {' Отмена '}
                </Text>
            </Button>
        </View>
        <View style={Styles.deleteButton}>
            <Button type={ButtonType.TEXT_RED}
                    testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e1213'
                    onExecute={()=>{props.performActivityListExclude(activity)}}>
                <Text  testID='test-id-432e8c6f-4644-895c-a1ec-90676fb0043e121311' >
                    {' Удалить '}
                </Text>
            </Button>
        </View>
    </View>
)

const getActivityListItemView: React.StatelessComponent<IProps> = (props: IProps, item: ModelsScheduler.Activity ): React.ReactElement<View> => {

        const dueDateMoment: moment.Moment | null = item.dueDate ? moment (item.dueDate) : null
        const dueDateString: string = dueDateMoment ? dueDateMoment.format ('DD.MM.YYYY') : 'Дата не определена'
        const isCurrentActivity: boolean = props.currentActivity.id == item.id
        const isUnaccessable: boolean = item.accessLevel == Enums.ActivityAccessLevel.NoTeamMember

    return (
        <View style={Styles.getActivityListItemViewContainer}>
            <View style={Styles.getActivityListItemViewUp}>
                <View style={Styles.getActivityListItemViewIconContainer}>
                    <View style={Styles.getActivityListItemViewIcon}>
                        {[
                            isUnaccessable ? (

                                <View
                                    testID={ `test-id-activity-${item.id}-icon-access-icon` }
                                    key={ `activity-${item.id}-lock-icon` }
                                    style={ Styles.activityCellIcon }
                                >
                                    <IconView
                                        testID={ `test-id-activity-${item.id}-lock-icon` }
                                        type={ 'lock' }
                                        disabled={ false }
                                    />
                                </View>

                            ) : (item.urgency == Enums.ActivityUrgency.Overdue) || (item.urgency == Enums.ActivityUrgency.Urgent) ? (

                                <View
                                    testID={ `test-id-activity-${item.id}-icon-urgency-icon` }
                                    key={ `activity-${item.id}-bell-icon-red` }
                                    style={ Styles.activityCellIcon }
                                >
                                    <IconView
                                        testID={ `test-id-activity-${item.id}-bell-icon-red` }
                                        type={ 'bell-red' }
                                        disabled={ false }
                                    />
                                </View>

                            ) : (item.urgency == Enums.ActivityUrgency.Nearest) ? (

                                <View
                                    testID={ `test-id-activity-${item.id}-icon-urgency-icon` }
                                    key={ `activity-${item.id}-bell-icon-orange` }
                                    style={ Styles.activityCellIcon }
                                >
                                    <IconView
                                        testID={ `test-id-activity-${item.id}-bell-icon-orange` }
                                        type={ 'bell-orange' }
                                        disabled={ false }
                                    />
                                </View>

                            ) : null,

                            (item.isPinned == true) ? (

                                <View
                                    testID={ `test-id-activity-${item.id}-icon-pin-icon` }
                                    key={ `activity-${item.id}-bell-icon-red` }
                                    style={ Styles.activityCellIcon }
                                >
                                    <IconView
                                        testID={ `test-id-activity-${item.id}-bell-icon-red` }
                                        type={ 'pin' }
                                        disabled={ false }
                                    />
                                </View>

                            ) : null
                        ]}
                    </View>
                    <View style={Styles.getActivityListItemViewDescriptionContainer}>
                        <View testID={`test-id-0dcf7831-237c-38d2-34aa-58baace0faa3-${item.id}`}
                              style={ Styles.activityCellRowView }>
                            <Text
                                testID={ `test-id-26a24451-6b35-ed45-ded4-ddf5e8cb3476-${ item.id }` }
                                style={[
                                    Styles.activityCellRowText,
                                    !isUnaccessable && (item.urgency == Enums.ActivityUrgency.Overdue) ? (
                                        Styles.overdueActivityCellRowText
                                    ) : {}
                                ]}
                                ellipsizeMode={ "tail" }
                                numberOfLines={ 1 }
                            >
                                { item.customer && item.customer.name || `Задача #${ item.id }` }
                            </Text>
                        </View>
                        <View testID={`test-id-770ea34d-549c-cf32-411d-23b66d25c3bf-${item.id}`} style={ Styles.activityCellRowView }>
                            <Text
                                testID={`test-id-c1e9c160-53eb-2123-ff97-2d72f9fad088-${item.id}`}
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                style={[ Styles.activityDescription, isCurrentActivity ? Styles.currentActivityDescription : {} ]}
                            >
                                { item.description }
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.getActivityListItemViewSource}>
                    <View testID={`test-id-activity-cell-${item.id}-labels`}
                          style={ Styles.activityLabels }>
                        {
                            ([
                                item.source,
                                item.type ? item.type.value : 'Тип не определён'
                            ]).map ((label: string, index: number, labels: Array<string>): React.ReactElement<View> | null => (
                                renderLabel (label, `${item.id}-${index}`, (index == (labels.length - 1)))
                            ))
                        }
                    </View>
                    <View testID={`test-id-6313aee7-fd1e-bc2d-2681-cc708e58fda0-${item.id}`}
                          style={ Styles.activityDate }>
                        <Text testID={`test-id-1086ef11-03a1-83ec-cb5f-ad22bc7fdf03-${item.id}`}
                              style={[ Styles.activityDateText, isCurrentActivity ? Styles.currentActivityDateText : {} ]}>
                            { dueDateString }
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export const renderLabel = (label: string, key: string, isLast: boolean = false) => (
    label ? (
        <View key={`labelView-${ label }`}
              testID={`test-id-activity-label-view-${ key }`}
              style={[ Styles.activityCellFooterLabel, isLast ? Styles.activityCellFooterLastLavbel : {} ]}>
            <Text key={`labelText-${ key }`}
                  testID={`test-id-activity-label-text-${ key }`}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  style={Styles.activityCellFooterLabelText}>
                { label.ellipsis (25) }
            </Text>
        </View>
    ) : null
)


const dealActivityList = (props: IProps): Array<React.ReactElement<TableRow>> => props.activityList.data.map(
    (activity: ModelsScheduler.Activity, i: number): React.ReactElement<TableRow> => (
        <TableRow testID='test-id-34GG-6W-57EJE-59ee-4eff'
                  key={`dealActivityList${ i }`}
                  onClick={() => {}}>
            <TableCell testID='test-id-4142c7f1-f6dc-3aad-a7b4-c748dccec771'
                       style={Styles.tableCellDirection}>
                <View style={Styles.dealActivityListCellContainer}>
                    <View style={Styles.dealActivityListRedMinus}>
                        <IconRedMinus testID='test-id-d82c3ee2-75h-dea5-5d6f-kjere'
                                      onPress={()=>{props.performTapActivityDelete(activity.id)}}/>
                    </View>
                    <View style={Styles.occasionTableCellView}>
                        <SwipeableItem testID='test-id-c9205b42-b7d1-a6ba-e0a8-62295fa37890'

                                       isLeftActionMenuOpen={false}
                                       isRightActionMenuOpen={props.tapActivityDeleteId == activity.id ? true: false}

                                       leftActionMenu={<View/>}
                                       rightActionMenu={deleteButton(props, i,activity)}

                                       onLeftActionMenuOpen={()=>{}}
                                       onRightActionMenuOpen={()=>{props.performTapActivityDelete(Enums.SwipeableRowEmptyId.EmptyId)}}

                                       onToggleLeft={()=>{}}
                                       onToggleRight={()=>{}}

                                       onPress={()=>{}}

                                       disableSwipe={false}>
                            {getActivityListItemView(props, activity)}
                        </SwipeableItem>
                    </View>
                </View>
            </TableCell>
        </TableRow>
    )
)


const getDealCreatedScreen = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.getDealEditorContentContainer}>
        <Text testID='test-id-7e443784-wergweg-86b6-67b7-54tr'
              style={Styles.colorText}>
            Сделка создана!
        </Text>
    </View>
)



const getDealEditorContent = (props: IProps): React.ReactElement<View> => (
    props.dealSaveInProgress
        ?   <View style={Styles.getDealEditorContentContainer}>
                <Loader testID='test-id-9e090ee1-c60f-c0ca-2bef-etgerhytj'/>
                {
                    props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                    ?   <Text testID='test-id-werg3-c60f-c0ca-2bef-4354gw'>
                            Сохранение изменений по сделке...
                        </Text>
                    :   props.dealEditorMode == Enums.DealEditorMode.CreateMode
                        ?   <Text testID='test-id-53gqq-c60f-c0ca-2bef-46yhwds'>
                                Создание сделки...
                            </Text>
                        :   null
                }
            </View>
        :   props.dealSaveError
            ?   <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-34wgwe'}
                                  title={
                                      props.dealSaveError && props.dealSaveError.comment && props.dealSaveError.comment !== ''
                                      ? props.dealSaveError.comment
                                      : ERROR_MESSAGE
                                  }
                                  description={
                                      props.dealSaveError && props.dealSaveError.message && props.dealSaveError.message !== ''
                                      ? props.dealSaveError.message
                                      : null
                                  }
                                  onRefresh={props.performSave}
                />
            :   getDealEditorScreen1(props)
)

const isCustomerEditable = (props: IProps) => (
	props.dealEditorMode === Enums.DealEditorMode.CreateMode || classifier(props.currentDeal.phaseClassifier) === '01.Ввод данных'
)

const getDealEditorScreen1 =  (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-9596a436-e524-bdd4-5261-iuewhwi234'
          style={Styles.flex}>
        {
            props.validationError
                ?   <View testID='test-id-9596a436-e524-bdd4-5261-2431efvqe'
                          style={Styles.validationErrorContainer}>
                        <View  testID='test-id-9596a436-e524-bdd4-5261-2431efvqe'
                               style={Styles.validationErrorBox} >
                            <Text testID='test-id-9596a436-e524-bdd4-5261-35tgwevq'
                                  style={Styles.validationErrorText}>
                                {
                                    props.validationError.message
                                }
                            </Text>
                        </View>
                    </View>
                :   null
            }
        <Table style={Styles.TableStyles}
               testID='test-id-7fa962c1-8865-69a1-992b-4r5t6y'>
            <TableBody testID='test-id-ccd610e3-0bd7-3ca2-f115-7u8i9o'>
                <TableRow style={Styles.TableRowStyles}
                          testID='test-id-34672e5d-289c-420b-8ae1-ecb3f58360b8'
                          selectable={true}
						  onClick={()=>{}}>
					<TableCell testID='test-id-4f9eac05-c310-43dc-9686-064cc8656cf3'
							   style={Styles.tableCell}>
						<View testID='test-id-0e6b6b45-6198-41f8-b106-0bb372049b0a'
							  style={Styles.flex}>
							<Label testID='test-id-d95cc49e-d83c-4a50-8ada-9fc8eb0337c5'
								   header={''}
								   text={'Клиент'}
								   block={false}>
								<Text   testID='test-id-13b78076-2b0f-4bfe-bab7-37b88c64bca3'>
									{
										props.currentCustomerManaged.name
									}
								</Text>
							</Label>
						</View>
                        <View style={[Styles.iconContainer,Styles.addedIconContainerStyles]}>
                            <View style={Styles.buttonIconContainer}>
                                <Icon testID='test-id-5jhwwb-eab6-562b-3gg-wtw'
                                      disabled={true}
                                      type={IconType.MrmLink}/>
                            </View>
                        </View>
					</TableCell>
				</TableRow>
                <TableRow style={props.isRowBlocked ? Styles.TableRowStyles : {}}
                          testID='test-id-f322e041-f11d-18cb-5d6f-g2ggfy'
                          selectable={true}
                          onClick={() => {
                              props.navigateToDealTypePickerScreen()
                          }}>
                    <TableCell testID='test-id-e3f3f84c-01c2-2684-35h-452gg'
                               style={Styles.tableCell}>
                        <View testID='test-id-51618691-6e11-aa18-jh53-k8j32q'
                              style={Styles.flex}>
                            <Label testID='test-id-3f74f332-1425-4f51-jw54h-htgwg'
                                   header={''}
                                   text={'Тип сделки'}
                                   block={false}>
                                <Text   testID='test-id-theva-085a-079e-jee-jeivkw'>
                                    {
                                        props.inputDealType && props.inputDealType.value
                                            ? props.inputDealType.value
                                            : NO
                                    }
                                </Text>
                            </Label>
                        </View>
                        <View style={[Styles.iconContainer,Styles.addedIconContainerStyles]}>
                            <Button testID='test-id-jerdf-gtwhw-a2fc-qge-5hqwr'
                                    disabled={props.isRowBlocked}
                                    onExecute={() => {
                                        props.navigateToDealTypePickerScreen()
                                    }}>
                                <Icon testID='test-id-5jhwwb-eqetab6-web-hearg-wrt'
                                      type={IconType.MrmLink}/>
                            </Button>
                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        {
            getDealEditorRows(props)
        }
    </View>
)

const getDealEditorRows: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-9596a436-e524-bdd4-5261-db7f53022d6d'>
        {
            isStandartDeal(props)
            ?   getStandardDealContent(props)
            :   isCreditDeal(props)
                ?   getCreditdDealContent(props)
                :   props.isEditorMode
                    ?   getStandardDealContent(props)
                    :   null
        }
    </View>
)

const getStandardDealContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-9596a436-e524-bdd4-5261-db7f53022d6d'>
        <Table style={Styles.TableStyles}
               testID='test-id-7fa962c1-8865-69a1-992b-419ef7ddf5a4'>
            <TableBody testID='test-id-7fa962c1-8865-69a1-992b-419ef7ddf5a4'>
                <TableRow style={props.isRowBlocked ? Styles.TableRowStyles : {}}
                          testID='test-id-f322e041-f11d-18cb-5d6f-10f91a93751c'
                          selectable={true}
                          onClick={() => {
                              props.navigateToProductPickerScreen()
                          }}>
                    <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-7d70fbfdf10e'
                               style={Styles.tableCell}>
                        <View testID='test-id-51618691-6e11-aa18-471a-f37e20b8bbb8'
                              style={Styles.flex}>
                            <Label testID='test-id-3f74f332-1425-4f51-0949-c7e10f5642aa'
                                   header={''}
                                   text={'Продукт'}
                                   block={false}>
                                <Text   testID='test-id-29d8f7f4-085a-079e-a812-dcf6aba0d194'>
                                    {
                                        props.inputProduct && props.inputProduct.value
                                            ? props.inputProduct.value
                                            : NO
                                    }
                                </Text>
                            </Label>
                        </View>
                        <View style={[Styles.iconContainer,Styles.addedIconContainerStyles]}>
                            <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                    disabled={props.isRowBlocked}
                                    onExecute={() => {
                                        props.navigateToProductPickerScreen()
                                    }}>
                                <Icon testID='test-id-5jhwwb-eab6-562b-hearg-retj'
                                      type={IconType.MrmLink}/>
                            </Button>
                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        {
            props.inputProduct.value || props.isEditorMode
            ?   getVariableStandardDealContent(props)
            :   null
        }
    </View>
)

const getVariableStandardDealContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-etbyh-e524-124-5261-243rt'
          style={Styles.flex}>
        <Table style={Styles.TableStyles}
               testID='test-id-7fa962c1-8865-69a1-992b-419ef7ddf5a4'>
            <TableBody testID='test-id-ccd610e3-0bd7-3ca2-f115-tsrhh'>
                <TableRow style={props.isRowBlocked ? Styles.TableRowStyles : {}}
                          testID='test-id-2932bb73-6cad-14f6-5c7b-588f7c1c4064'
                          selectable={true}
                          onClick={
                              props.navigateToSalesMethodPickerScreen
                          }>
                    <TableCell testID='test-id-c667e619-1097-2fd7-f44d-00d8fb9002b9'
                               style={Styles.tableCell}>
                        <View testID='test-id-998fbaf5-d8ae-185c-ca60-cff8ad8a7a1b'
                              style={Styles.flex}>
                            <Label testID='test-id-8345d832-bcb2-d9b6-20af-20e2506e1c1a'
                                   header={''}
                                   text={'Метод продаж'}
                                   block={isSalesMethodSingleValue(props)}>
                                <Text   testID='test-id-bac5fee5-5fb1-3914-d769-7b30b48dbf77'>
                                    {
                                        props.inputSalesMethod && props.inputSalesMethod.value
                                            ? props.inputSalesMethod.value
                                            : NO
                                    }
                                </Text>
                            </Label>
                        </View>
                        {
                            props.isProductMethodEnabled
                            ?   <View style={[Styles.iconContainer,Styles.addedIconContainerStyles]}>
                                    <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                            disabled={props.isRowBlocked}
                                            onExecute={
                                                props.navigateToSalesMethodPickerScreen
                                            }>
                                        <Icon   testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                type={IconType.MrmLink}/>
                                    </Button>
                                </View>
                            :   <View style={[Styles.iconContainer,Styles.addedIconContainerStyles]}/>
                        }
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <Textarea
            testID='test-id-6655bac1-3158-4f52-wef-24fwrqf'
            value={props.inputDescription}
            label='Суть'
            placeholder='Введите суть'
            onChange={props.performInputDescription}
            maxLength={600}
        />
        <View style={Styles.sumRowContainer}>
            <View style={Styles.numberInputContainer}>
                <NumberInput testID='test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4'
                             fractionalDigitsCount={5}
                             label='Сумма в тысячах'
                             maxLength={28}
                             value={props.inputSumString || ''}
                             onChange={(value: string): void => props.performInputSumString(value)}
                />
            </View>
            <View style={Styles.flex}>
                <Table style={[Styles.TableStyles,Styles.TableStylesAdd]}
                       testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}
                                  onClick={() => {
                                      props.navigateToCurrencyPickerScreen()
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={Styles.tableCell}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={[Styles.flex,Styles.paddings]}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Валюта'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputCurrency && props.inputCurrency.code
                                                    ? props.inputCurrency.code
                                                    : NO_DATA
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={[Styles.iconContainer,Styles.addedIconContainerStyles]}>
                                    <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                            onExecute={() => {
                                                props.navigateToCurrencyPickerScreen()
                                            }}>
                                        <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                              type={IconType.MrmLink}/>
                                    </Button>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
        </View>
        {
            props.isEquivalentRateMode
                ?

                <View style={[Styles.sumRowContainer]}>
                    <View style={Styles.equivalentSumWidth}>
                        <NumberInput testID='test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4'
                                     fractionalDigitsCount={5}
                                     label='Эквивалент тыс. руб.'
                                     maxLength={28}
                                     value={props.inputEquivalentSumString || ''}
                                     onChange={(value: string): void => props.performInputEquivalentSumString(value)}
                        />
                    </View>
                    <View style={Styles.conversionRate}>
                        <NumberInput testID='test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4'
                                     fractionalDigitsCount={4}
                                     label='Курс пересчёта эквивалента'
                                     maxLength={28}
                                     value={props.inputEquivalentConversionRateString || ''}
                                     onChange={(value: string): void => props.performInputEquivalentConversionRateString(value)}
                                     currency='RUR'


                        />
                    </View>
                </View>
                : null
        }
        <View style={Styles.chanceAndDateFildsContainer}>
            <View style={Styles.chanceTableContainer}>
                <Table style={Styles.chanceTableMargins}
                       testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'
                       underlined={false}>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}
                                  onClick={() => {
                                      props.showChancePopover(true)
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={Styles.chanceTableCall}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.chanceLabelContainer}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Вероятность'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputChance !== null
                                                    ? `${props.inputChance} %`
                                                    : NO_DATA
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.chancePopoverContainer}>
                                    <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`deal_editor_chance`} >
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                onExecute={() => {
                                                    props.showChancePopover(true)
                                                }}>
                                            <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                  type={IconType.MrmArrowDown}/>
                                        </Button>
                                    </PopoverTarget>
                                    <Popover testID='test-id-13466acf-decisionPopover'
                                             target={PopoverTarget.getRef ('deal_editor_chance')}
                                             opened={props.isChancePopoverOpened}
                                             onOutsideTap={() => {
                                                 props.showChancePopover(false)
                                             }}
                                             type={PopoverType.WIDE}
                                             style={Styles.chancePopoverSize}
                                             position={[ PopoverPosition.TOP ]}>
                                        {
                                            getChancePopoverContent(props)
                                        }
                                    </Popover>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
            <View style={Styles.dateContainer}>
                <DateInput testID='test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg'
                           value={props.inputDealDate || undefined}
                           label="Плановая дата заключения сделки"
                           format='dd.MM.yyyy'
                           locale='ru'
                           placeholder='дд.мм.гггг'
                           dateType={DateInputTypes.DAY_PICKER}
                           min={Utils.getDate()}
                           onChange={(e: Date | null) => props.performInputDealDate(e)}/>
            </View>
        </View>
        <Table style={Styles.tableActivity}
               testID='test-id-wrthjm-asdfhsr-4c9b-thweyje-354wtgw'>
            <TableBody testID='test-id-6hh-kejre-4c9b-j56hg-fgd'>
                <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                          selectable={true}
                          onClick={() => {
                              props.navigateToMemberListScreen()
                          }}>
                    <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                               style={Styles.tableCellMargins}>
                        <View style={Styles.memberListContainer}>
                            <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                  style={Styles.font16}>{'Команда сделки'}
                            </Text>
                            <View style={Styles.noteTeam}>
                                <Text
                                    style={Styles.noteFont}
                                    testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'>{`${memberListLine(props.currentDeal.memberList)}`}
                                </Text>
                                <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                        onExecute={() => {
                                            props.navigateToMemberListScreen()
                                        }}>
                                    <Icon testID='test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb' disabled type={IconType.MrmLink}/>
                                </Button>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        {
            props.isOwner
                ?   <Table style={Styles.tableActivity}
                           testID='test-id-sdb-sdbf-4c9b-sdfb-5gerg'>
                <TableBody testID='test-id-6hh-dfgsn-sdfb-dfb-jdn'>
                    <TableRow testID='test-id-hmsf-dfgnsn-ghmdn-uyrrm-strnrym'
                              selectable={true}
                              onClick={() => {
                                  props.navigateToActivityListScreen()
                              }}>
                        <TableCell testID='test-id-kfugb-illss-snfn-aerhh-dkdss'
                                   style={Styles.tableCellMargins}>
                            <View style={Styles.memberListContainer}>
                                <Text testID='test-id-5kjetyh-b343-zxzdbfr54-erthj-hreyher'
                                      style={Styles.font16}>{'Связанные задачи'}
                                </Text>
                                <View style={Styles.noteTeam}>
                                    <Text testID='test-id-8a37e81d-yuyuj566-43taafg-sgdfhr4-785643hh'>
                                        {Utils.getRelatedActivitiesCount(props.activityList)}
                                    </Text>
                                    <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                            onExecute={() => {
                                                props.navigateToActivityListScreen()
                                            }}>
                                        <Icon testID='test-id-krje-51f3-jetyje-jerh-34faegw'
                                              disabled
                                              type={IconType.MrmLink}/>
                                    </Button>
                                </View>
                            </View>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
                : null
        }
        {
            (
                props.inputProduct &&
                props.inputProduct.value == 'Зарплатные проекты'
            ) &&
            props.currentDeal.salaryProjectDetails &&
            (
                props.currentDeal.salaryProjectDetails.fee ||
                props.currentDeal.salaryProjectDetails.staffCount
            ) &&
            !props.isAdditionalFieldsAvailable
            ?   getTransferCommissionAndNumberOfEmployeesFields(props)
            :   null
        }
        {
            props.isAdditionalFieldsAvailable
            ?   getAdditionalFields(props)
            :   getAdditionalFieldsButton(props)
        }
    </View>
)

const getChancePopoverContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
        <SplitPanel testID='test-id-a5c9b50082e51eddd4'
                    id={'ApplicationPopoverContent'}>
            <ContentPanel testID='test-id-edfc37ecd986f1d65f' style={{backgroundColor: '#fff'}}>
                <Page content={
                    <View testID='test-id-43etg'
                          style={Styles.chancePopoverContentContainer}>
                        <RadioGroup testID='test-id-9052b0979'
                                    value={props.inputChance || undefined}
                                    onChange={(index, value) => props.performSelectChance(value)}>
                            {CHANCE_LIST.map((e: string | undefined) => (
                                <RadioButton
                                    testID='test-id-b9152954ffe' key={`radio-${e}`}
                                    value={e}
                                    label={`${e} %`}/>
                            ))}
                        </RadioGroup>
                    </View>
                }
                      testID='test-id-a5c9b50082e51eddd4457'/>
            </ContentPanel>
        </SplitPanel>
)

const getAttractionChannelPopoverContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (

    <SplitPanel testID='test-id-a5c9b50082e51eddd4'
                id={'deal_editor_attraction_channel'}>
        <ContentPanel testID='test-id-edfc37ecd986f1d65f' style={{backgroundColor: '#fff'}}>
            <Page testID='test-id-a5c9b50082e51eddd4457'
                  content={
                <View testID='test-id-43etg'
                      style={Styles.chancePopoverContentContainer}>
                    <RadioGroup testID='test-id-9052b0979'
                                value={props.inputAttractionChannel.code || undefined}
                                onChange={(index) => props.performSelectAttractionChannel(props.classifierDictionary.SBRF_ATTR_CHANNEL_PICK_LIST.data[index])}>
                        {props.classifierDictionary.SBRF_ATTR_CHANNEL_PICK_LIST.data.map((element: ModelsApp.Classifier, index: number) => (
                            <RadioButton
                                testID='test-id-b9152954ffe' key={`radio-${element.code}-${index}`}
                                value={element.code}
                                label={`${element.value}`}/>
                        ))}
                    </RadioGroup>
                </View>
             }/>
        </ContentPanel>
    </SplitPanel>
)

const getApplicationPopoverContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <SplitPanel testID='test-id-a5c9b50082e51eddd4'
                id={'ApplicationPopoverContent'}>
        <ContentPanel testID='test-id-edfc37ecd986f1d65f' style={{backgroundColor: '#fff'}}>
            <Page content={
                <View testID='test-id-reff1q-435t'
                      style={Styles.chancePopoverContentContainer}>
                    <RadioGroup testID='test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979'
                                value={props.inputApplication.code}
                                onChange={(index, value) => props.performSelectApplication(props.applicationKkClassifierList.data[index])}>
                        {props.applicationKkClassifierList.data.map((e: ModelsApp.Classifier, i:number) => <RadioButton
                            testID='test-id-b915294d-16cc-bb9b-e848-y53hh2' key={`radio-${e.code}-${i}`}
                            value={e.code}
                            label={e.value}
                        />)}
                    </RadioGroup>
                </View>
            }
                  testID='test-id-a5c9b50082e51eddd4457'/>
        </ContentPanel>
    </SplitPanel>
)

const getSalesMethodPopoverContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
        <SplitPanel testID='test-id-a5c9b50082e51eddd4'
                    id={'ApplicationPopoverContent'}>
            <ContentPanel testID='test-id-edfc37ecd986f1d65f' style={{backgroundColor: '#fff'}}>
                <Page content={
                    <View testID='test-id-34546hg'
                          style={Styles.chancePopoverContentContainer}>
                        <RadioGroup testID='test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979'
                                    value={props.inputSalesMethod.code}
                                    onChange={(index, value) => props.performSelectSalesMethod(props.classifierDictionary.DEAL_SALE_METHOD_KK.data[index])}>
                            {props.classifierDictionary.DEAL_SALE_METHOD_KK.data.map((e: ModelsApp.Classifier, i:number) => <RadioButton
                                testID='test-id-b915294d-16cc-bb9b-e848-4ff333v' key={`radio-${e.code}-${i}`}
                                value={e.code}
                                label={e.value}
                            />)}
                        </RadioGroup>
                    </View>
                }
                      testID='test-id-a5c9b50082e51eddd4457'/>
            </ContentPanel>
        </SplitPanel>
)

const getAdditionalFields: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View  testID='test-id-etbyh-qegrg-124-5261-qqree'
           style={Styles.flexAdditional}>
        <Table style={Styles.tableActivity}
               testID='test-id-wrthjm-asdfhsr-4c9b-thweyje-354wtgw'>
            <TableBody testID='test-id-6hh-kejre-4c9b-j56hg-fgd'>
                {
                    isStandartDeal(props) ?
                        <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                                  selectable={true}
                                  onClick={() => {
                                      props.navigateToAgentListScreen()
                                  }}
                        >
                            <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                                       style={Styles.tableCellMargins}>
                                <View style={Styles.memberListContainer}>
                                    <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                          style={Styles.font16}>{'Представители'}
                                    </Text>
                                    <View style={Styles.noteTeam}>
                                        {
                                            props.inputAgentList.data.length > 0
                                            ?   <Text
                                                    style={Styles.noteFont}
                                                    testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'>
                                                    {
                                                        Utils.agentListLine(props.inputAgentList, props.currentCustomerManaged)
                                                    }
                                                </Text>
                                            :   <Text
                                                    style={Styles.noteFont}
                                                    testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'
                                                >
                                                    Нет представителей
                                                </Text>
                                        }

                                        <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                                onExecute={() => {
                                                    props.navigateToAgentListScreen()
                                                }}>
                                            <Icon testID='test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb' disabled type={IconType.MrmLink}/>
                                        </Button>
                                    </View>
                                </View>
                            </TableCell>
                        </TableRow> :
                        null
                }
                {/* TODO: не используется до следующего релиза (потом удалить то что ниже)
                <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                          selectable={true}
                          onClick={() => props.navigateToParentDealPickerScreen(Enums.ParentDealPickerMode.ParentDeal)}>
                    <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                               style={Styles.tableCellMargins}>
                        <View style={Styles.memberListContainer}>
                            <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                  style={Styles.font16}>{'Родительская сделка'}
                            </Text>
                            <View style={Styles.noteTeam}>
                                <Text
                                    style={Styles.noteFont}
                                    testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'
                                >
                                    {props.currentDeal.parentDeal ? props.currentDeal.parentDeal.id : `Выберите сделку`}
                                </Text>
                                <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                        onExecute={() => props.navigateToParentDealPickerScreen(Enums.ParentDealPickerMode.ParentDeal)}>
                                    <Icon testID='test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb' disabled type={IconType.MrmLink}/>
                                </Button>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>*/}
                <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                          selectable={true}
                >
                    <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                               style={Styles.tableCellMargins}>
                        <View style={Styles.memberListContainer}>
                            <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                  style={Styles.font16}>{'Родительская сделка'}
                            </Text>
                            <View style={Styles.noteTeam}>
                                <Text
                                    style={Styles.noteFont}
                                    testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'
                                >
                                    {props.currentDeal.parentDeal && props.currentDeal.parentDeal.id ? props.currentDeal.parentDeal.id : NO_DATA}
                                </Text>
                                <View style={Styles.emptyView}/>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>
                {/* TODO: не используется до следующего релиза (потом удалить то что ниже)
                <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                    selectable={true}
                    onClick={props.navigateToCampaignPickerScreen.bind(null)}
                    >
                    <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                        style={Styles.tableCellMargins}
                        >
                        <View style={Styles.memberListContainer}>
                            <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                style={Styles.font16}>{'Кампания'}
                            </Text>
                            <View style={Styles.noteTeam}>
                                <Text style={Styles.noteFont}
                                      testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'
                                >
                                    {props.currentDeal.salesCampaign.name || `Выберите кампанию продаж`}
                                </Text>
                                <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                    onExecute={props.navigateToCampaignPickerScreen.bind(null)}
                                    >
                                    <Icon testID='test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb' disabled type={IconType.MrmLink}/>
                                </Button>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>*/}
                <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                          selectable={true}
                >
                    <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                               style={Styles.tableCellMargins}
                    >
                        <View style={Styles.memberListContainer}>
                            <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                  style={Styles.font16}>{'Кампания'}
                            </Text>
                            <View style={Styles.noteTeam}>
                                <Text style={Styles.noteFont}
                                      testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'
                                >
                                    {props.currentDeal.salesCampaign.name || 'Нет данных'}
                                </Text>
                                <View style={Styles.emptyView}/>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        {
            props.inputProduct && props.inputProduct.value == 'Зарплатные проекты'
            ?   getSalaryFields(props)
            :   null
        }
    </View>
)

const getSalaryFields: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-7fa962c1-ehe-hgqe-q34gq-2fwc'>
        {
            getTransferCommissionAndNumberOfEmployeesFields(props)
        }
        <View style={Styles.chanceAndDateFildsContainer}>
            <View style={Styles.attractionChannelContainer}>
                <Table testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'
                       noPaddings={true}
                       underlined={false}>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}
                                  onClick={() => {
                                      props.showAttractionChannelPopover(true)
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={Styles.chanceTableCall}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.chanceLabelContainer}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Канал привлечения'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputAttractionChannel && props.inputAttractionChannel.value
                                                    ? `${props.inputAttractionChannel.value}`
                                                    : 'Нет'
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.chancePopoverContainer}>
                                    <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`deal_editor_attraction_channel`} >
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                onExecute={() => {
                                                    props.showAttractionChannelPopover(true)
                                                }}>
                                            <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                  type={IconType.MrmArrowDown}/>
                                        </Button>
                                    </PopoverTarget>
                                    <Popover testID='test-id-13466acf-decisionPopover'
                                             target={PopoverTarget.getRef ('deal_editor_attraction_channel')}
                                             opened={props.isAttractionChannelPopoverOpened}
                                             onOutsideTap={() => {
                                                 props.showAttractionChannelPopover(false)
                                             }}
                                             type={PopoverType.WIDE}
                                             style={Styles.chancePopoverSize}
                                             position={[ PopoverPosition.TOP ]}>
                                        {
                                            getAttractionChannelPopoverContent(props)
                                        }
                                    </Popover>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
            <View style={Styles.territorialCoverageContainer}>
                <Table style={{}}
                       testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'
                       noPaddings={true}
                       underlined={false}>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow style={Styles.TableRowStyles}
                                  testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={[Styles.chanceTableCall,Styles.chanceTableCallTerritorialCoverageContainer]}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.chanceLabelContainer}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Территориальный охват'}
                                           block={false}>
                                        <Text   numberOfLines={ 1 }
                                                ellipsizeMode={ 'tail' }
                                                testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.currentDeal.territorialCoverage
                                                    ? props.currentDeal.territorialCoverage.length > 27
                                                    ?`${props.currentDeal.territorialCoverage.substring(0, 27)}...`
                                                    :`${props.currentDeal.territorialCoverage}`
                                                    : 'Нет'
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.chancePopoverContainer}>
                                    <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                            disabled={true}>
                                        <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                              disabled={true}
                                              type={IconType.MrmArrowDown}/>
                                    </Button>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
        </View>
    </View>
)

const getTransferCommissionAndNumberOfEmployeesFields: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={[Styles.sumRowContainer]}>
        <View style={Styles.equivalentSumWidth}>
            <NumberInput testID='test-id-e58807e1e18ac836f4'
                         fractionalDigitsCount={2}
                         label='Комиссия за перечисление,%'
                         maxLength={15}
                         value={Utils.convertNumberToString(props.inputTransferCommission) || ''}
                         onChange={(value: string): void => props.performInputTransferCommission(value)}
                         currency='%'
            />
        </View>
        <View style={Styles.conversionRate}>
            <NumberInput testID='test-id-e58807e118ac836f4'
                         fractionalDigitsCount={0}
                         label='Количество сотрудников в сделке'
                         maxLength={5}
                         value={props.inputStaffCount || ''}
                         onChange={(value: string): void => props.performInputStaffCount(value)}
            />
        </View>
    </View>
)

const getAdditionalFieldsButton: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.additionalFieldsButton}>
        <Button type={ButtonType.TEXT}
                testID='test-id-432e8c6f-4644-895c-qwrg-rqegqg'
                onExecute={()=>{props.performShowAdditionalFields()}}>
            <Text  testID='test-id-432e8c6f-4644-qr-a1ec-qregq' >
                {'Показать дополнительные поля'}
            </Text>
        </Button>
    </View>
)



const getCreditdDealContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-9596a436-e524-bdd4-5261-guweyfqu'>
        <View style={Styles.chanceAndDateFildsContainer}>
            <View style={Styles.chanceTableContainer}>
                <Table style={Styles.chanceTableMargins}
                       testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'
                       underlined={false}>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow style={props.isRowBlocked ? Styles.TableRowStyles : {}}
                                  testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}
                                  onClick={() => {
                                      props.showSalesMethodPopover(!props.isRowBlocked)
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={Styles.chanceTableCall}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.chanceLabelContainer}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Метод продаж'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputSalesMethod && props.inputSalesMethod.value
                                                    ? props.inputSalesMethod.value
                                                    : NO
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.chancePopoverContainer}>
                                    <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`deal_editor_sales_method`} >
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                disabled={props.isRowBlocked}
                                                onExecute={() => {
                                                    props.showSalesMethodPopover(!props.isRowBlocked)
                                                }}>
                                            <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                  type={IconType.MrmArrowDown}/>
                                        </Button>
                                    </PopoverTarget>
                                    <Popover testID='test-id-13466acf-decisionPopover'
                                             target={PopoverTarget.getRef ('deal_editor_sales_method')}
                                             opened={props.isSalesMethodPopoverOpened}
                                             onOutsideTap={() => {
                                                 props.showSalesMethodPopover(false)
                                             }}
                                             type={PopoverType.WIDE}
                                             style={Styles.chancePopoverSize}
                                             position={[ PopoverPosition.BOTTOM ]}>
                                        {
                                            getSalesMethodPopoverContent(props)
                                        }
                                    </Popover>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
            <View style={Styles.chanceTableContainer}>
                <Table style={Styles.chanceTableMargins}
                       testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'
                       underlined={false}>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  style={!!props.inputSalesMethod.value ? {} : [Styles.TableRowStyles,{marginLeft: 0}] }
                                  selectable={true}
                                  onClick={() => {
                                      props.inputSalesMethod.value ? props.showApplicationPopover(true) : null
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={[Styles.chanceTableCall,{backGroundColor:'#ff0000'}]}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.chanceLabelContainer}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Применение'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputApplication && props.inputApplication.value
                                                    ? props.inputApplication.value
                                                    : NO
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.chancePopoverContainer}>
                                    <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`deal_editor_application`} >
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                disabled={!props.inputSalesMethod.value}
                                                onExecute={() => {
                                                    props.inputSalesMethod.value ? props.showApplicationPopover(true) : null
                                                }}>

                                                <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                      type={IconType.MrmArrowDown}/>

                                        </Button>
                                    </PopoverTarget>
                                    <Popover testID='test-id-13466acf-decisionPopover'
                                             target={PopoverTarget.getRef ('deal_editor_application')}
                                             opened={props.isApplicationPopoverOpened}
                                             onOutsideTap={() => {
                                                 props.showApplicationPopover(false)
                                             }}
                                             type={PopoverType.WIDE}
                                             style={Styles.chancePopoverSize}
                                             position={[ PopoverPosition.BOTTOM ]}>
                                        {
                                            getApplicationPopoverContent(props)
                                        }
                                    </Popover>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
        </View>
        <Textarea
            testID='test-id-6655bac1-3158-4f52-wef-24fwrqf'
            value={props.inputDescription}
            label='Суть'
            placeholder='Введите суть'
            onChange={props.performInputDescription}
            maxLength={600}
        />
        <View style={Styles.chanceAndDateFildsContainer}>
            <View style={Styles.chanceTableContainer}>
                <Table style={Styles.chanceTableMargins}
                       testID='test-id-7fa962c1-ehe-69a1-992b-245ytq'
                       underlined={false}>
                    <TableBody testID='test-id-ccd610e3-wehjw-3ca2-f115-tsrhh'>
                        <TableRow testID='test-id-f322e041-f11d-18cb-5d6f-yjhwe'
                                  selectable={true}
                                  onClick={() => {
                                      props.showChancePopover(true)
                                  }}>
                            <TableCell testID='test-id-e3f3f84c-01c2-2684-28e2-hwerwh'
                                       style={Styles.chanceTableCall}>
                                <View testID='test-id-51618691-6e11-aa18-471a-wqh3'
                                      style={Styles.chanceLabelContainer}>
                                    <Label testID='test-id-54640430-7a86-6d47-8767-yu6k5q'
                                           header={''}
                                           text={'Вероятность'}
                                           block={false}>
                                        <Text   testID='test-id-ee5653ba-ccd9-256a-588f-67jhs'>
                                            {
                                                props.inputChance !== null
                                                    ? `${props.inputChance} %`
                                                    : NO_DATA
                                            }
                                        </Text>
                                    </Label>
                                </View>
                                <View style={Styles.chancePopoverContainer}>
                                    <PopoverTarget testID='test-id-e56d-2226ca8af123' refName={`deal_editor_chance`} >
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                onExecute={() => {
                                                    props.showChancePopover(true)
                                                }}>
                                            <Icon testID='test-id-5jhwwb-eab6-562b-tueh3-3ede'
                                                  type={IconType.MrmArrowDown}/>
                                        </Button>
                                    </PopoverTarget>
                                    <Popover testID='test-id-13466acf-decisionPopover'
                                             target={PopoverTarget.getRef ('deal_editor_chance')}
                                             opened={props.isChancePopoverOpened}
                                             onOutsideTap={() => {
                                                 props.showChancePopover(false)
                                             }}
                                             type={PopoverType.WIDE}
                                             style={Styles.chancePopoverSize}
                                             position={[ PopoverPosition.TOP ]}>
                                        {
                                            getChancePopoverContent(props)
                                        }
                                    </Popover>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
            <View style={Styles.dateContainer}>
                <DateInput testID='test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg'
                           value={props.inputDealDate || undefined}
                           label="Плановая дата заключения сделки"
                           format='dd.MM.yyyy'
                           locale='ru'
                           placeholder='дд.мм.гггг'
                           dateType={DateInputTypes.DAY_PICKER}
                           min={Utils.getDate()}
                           onChange={(e: Date | null) => props.performInputDealDate(e)}/>
            </View>
        </View>
        <Table style={Styles.tableActivity}
               testID='test-id-wrthjm-asdfhsr-4c9b-thweyje-354wtgw'>
            <TableBody testID='test-id-6hh-kejre-4c9b-j56hg-fgd'>
                <TableRow testID='test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf'
                          selectable={true}
                          onClick={() => {
                              props.navigateToMemberListScreen()
                          }}>
                    <TableCell testID='test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw'
                               style={Styles.tableCellMargins}>
                        <View style={Styles.memberListContainer}>
                            <Text testID='test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8'
                                  style={Styles.font16}>{'Команда сделки'}
                            </Text>
                            <View style={Styles.noteTeam}>
                                <Text
                                    style={Styles.noteFont}
                                    testID='test-id-8a37e81d-b564-a372-e80d-8997cff87f6a'>{`${memberListLine(props.currentDeal.memberList)}`}
                                </Text>
                                <Button testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                        onExecute={() => {
                                            props.navigateToMemberListScreen()
                                        }}>
                                    <Icon testID='test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb' disabled type={IconType.MrmLink}/>
                                </Button>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        {
            props.isOwner
                ?   <Table style={Styles.tableActivity}
                           testID='test-id-sdb-sdbf-4c9b-sdfb-5gerg'>
                    <TableBody testID='test-id-6hh-dfgsn-sdfb-dfb-jdn'>
                        <TableRow testID='test-id-hmsf-dfgnsn-ghmdn-uyrrm-strnrym'
                                  selectable={true}
                                  onClick={() => {
                                      props.navigateToActivityListScreen()
                                  }}>
                            <TableCell testID='test-id-kfugb-illss-snfn-aerhh-dkdss'
                                       style={Styles.tableCellMargins}>
                                <View style={Styles.memberListContainer}>
                                    <Text testID='test-id-5kjetyh-b343-zxzdbfr54-erthj-hreyher'
                                          style={Styles.font16}>{'Связанные задачи'}
                                    </Text>
                                    <View style={Styles.noteTeam}>
                                        <Text testID='test-id-8a37e81d-yuyuj566-43taafg-sgdfhr4-785643hh'>
                                            {Utils.getRelatedActivitiesCount(props.activityList)}
                                        </Text>
                                        <Button testID='test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg'
                                                onExecute={() => {
                                                    props.navigateToActivityListScreen()
                                                }}>
                                            <Icon testID='test-id-krje-51f3-jetyje-jerh-34faegw'
                                                  disabled
                                                  type={IconType.MrmLink}/>
                                        </Button>
                                    </View>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                : null
        }
        {
            props.isAdditionalFieldsAvailable ? getAdditionalFields(props) : getAdditionalFieldsButton(props)
        }
    </View>
)

/*
 * UI stateless functional component presenter for "DealEditor" container.
 */

const ViewDealEditor: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-ac8dc389-ea0d-f1db-17f2-e22332338b96'
          style={Styles.main}>
        <SplitPanel testID='test-id-e4de6a42-c7d0-7a11-ce02-d9096d06a9fd'
                    id={Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)}>
            <ContentPanel testID='test-id-58ea65e1-b6b5-9b76-5b8b-cdf253effcef'
                          style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-f5294a17-f936-79ee-ed90-442d316b9c50'
                      scrollEnabled={true}
                      content={getDealEditorContent(props)}>
                    <LeftPageHeader testID='test-id-8bea8159-986d-6497-4d51-2565ff0cb225'>
                        {
                            props.dealSaveInProgress
                                ?   <Text style={Styles.buttonLeft}
                                          testID='test-id-jkejw-8c46-wytu-5c5b-5whgq'>
                                        Отменить
                                    </Text>
                                :   <View testID='test-id-61c4a477-a5a6-1ce8-eb5a-13rqegwev'
                                          style={Styles.navigationButtonPaddings}>
                                        <NavigationTextButton   testID='test-id-61c4a477-a5a6-1ce8-eb5a-b6aef18a043f'
                                                                title={'Отменить'}
                                                                onExecute={props.performCancel}/>
                                    </View>
                        }
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-d4902b53-d496-e793-6fbe-565b27482aad'>
                        {
                            props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                                ? <H2 testID='test-id-6e2fddd6-b5e2-b160-99e5-wRTHRRH'>Редактирование сделки</H2>
                                : props.dealEditorMode == Enums.DealEditorMode.CreateMode
                                    ? <H2 testID='test-id-6e2fddd6-b5e2-b160-99e5-fdhrnj'>Создание сделки</H2>
                                    : null
                        }
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-8621039b-8270-bee4-8e77-e40aab62c6b0'>
                        {
                            props.isValid && !props.isNavigationButtonDisabled && !props.dealSaveError
                                ? props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                                    ? <NavigationTextButton testID='test-id-b4138dad-8c46-d6f1-5c5b-erhwrhw'
                                                            title={'Готово'}
                                                            onExecute={props.performSave}/>
                                    : props.dealEditorMode == Enums.DealEditorMode.CreateMode
                                        ? <NavigationTextButton testID='test-id-b4138dad-8c46-d6f1-5c5b-47adaf0d9e56'
                                                                title={'Создать'}
                                                                onExecute={props.performSave}/>
                                        : null
                                : props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                                    ?   <Text   style={Styles.button}
                                                testID='test-id-trwwqq-8c46-d6f1-5c5b-4ethgq'>
                                            Готово
                                        </Text>
                                    :   props.dealEditorMode == Enums.DealEditorMode.CreateMode
                                        ?   <Text style={Styles.button}
                                                  testID='test-id-jkejw-8c46-wytu-5c5b-5whgq'>
                                                Создать
                                            </Text>
                                        :   null
                        }
                    </RightPageHeader>
                </Page>

                <Page testID='test-id-d9133974-6159-0bf3-4f13-7f666b0a6b70'
                      scrollEnabled={false}
                      content={
                          <ContainerSelectClassifierWithSearch testID='test-id-b775a680-9dcc-26f5-6d1f-0fccd44be8b5'/>
                      }>
                    <LeftPageHeader testID='test-id-qrethwry-986d-yrht-4d51-54635jye'/>
                </Page>

                <Page testID='test-id-272d1bdd-04b6-fa7c-be49-2300c05330ef'
                      scrollEnabled={false}
                      content={
                          <ContainerSelectClassifierWithSearch testID='test-id-08e018c4-e0e3-6295-ad08-ae42d4c9af1a'/>
                        }>
                    <LeftPageHeader testID='test-id-qerhtrj-986d-yrht-4d51-3grfwf'/>
                </Page>

                <Page testID='test-id-0c4ca2ff-erg-3gaa-sdh55-54gwg'
                      scrollEnabled={false}
                      content={
                          <ContainerSelectClassifierWithSearch testID='test-id-546uerd-454-ejr-56hg-8jhsd'/>
                        }>
                    <LeftPageHeader testID='test-id-345yg-986d-sdgg44-4d51-wswsdf11'/>
                </Page>

                <Page scrollEnabled={false}
                      testID='test-id-page-member-deal-view-43trn'
                      content={
                          <View style={Styles.containerCap}>
                              <ContainerMemberList testID='test-id-viewDeal-page-list-employee-regfn'/>
                          </View>
                      }>
                    <LeftPageHeader testID='test-id-e89cdccf-6264-9c29-f6ed-d3aa1f91c4b9-rythgs'/>
                </Page>

                <Page scrollEnabled={true}
                      testID='test-id-page-member-deal-f3qwfq-2ewff'
                      content={
                          <View style={Styles.containerCap}>
                            {dealAndTaskAssociateMain(props)}
                          </View>}>
                    <LeftPageHeader testID='test-id-9d834a94-56e5-asfsfbn-836a-6gqff'>
                        <NavigationBackButton  testID='test-id-ddy45hhy-gfsgdb-98kddh-6879k-imtyrd'
                                               title={false}
                                               onClick={props.navigateBack}/>
                        <View style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-bnajn-5687-0000-167a-4gegae">
                            <NavigationTextButton
                                testID="test-id-c5fb1ff3-0000-e36e-847f-9jergrqgh"
                                title={'Сделка'}
                                onExecute={props.navigateBack}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-399e76bc-8f86-8c9c-272d-htyjaeqt3'>
                        <H2 testID='test-id-1b0f5543-ee44-793a-3d97-7875r6jehrwergnj'>Связывание задач со сделкой</H2>
                    </CenterPageHeader>
                </Page>

                <Page testID='test-id-43fqfq-erg-f678-dealEditor'
                      scrollEnabled={true}
                      content={
                          <ContainerEmployee testID='test-id-viewDeal-page-one-34qf-employee'/>
                      }>
                    <LeftPageHeader testID='test-id-g435h3-c95a-f678-dealEditor'/>
                </Page>
                <Page testID='test-id-24fe9594-aff6-11e7-abc4-cec278b6b50a'
                      scrollEnabled={false}
                      content={
                          <ContainerActivity instanceType={EnumsScheduler.SchedulerMode.DealEditorActivityList}
                                             testID='test-id-212d2f5c-aff6-11e7-abc4-cec278b6b50a'/>
                      }>
                    <LeftPageHeader testID='test-id-1a770e62-aff6-11e7-abc4-cec278b6b50a'/>
                </Page>
                <Page testID='test-id-d9133974-6159-0bf3-ree-3eteg'
                      scrollEnabled={false}
                      content={
                          <ContainerSelectClassifierWithSearch testID='test-id-WRAE-ewgra-26f5-6d1f-jfssba'/>
                      }>
                    <LeftPageHeader testID='test-id-qrethwry-986d-yrht-4d51-54635jye'/>
                </Page>
                <Page testID='test-id-d9133974-6159-0bf3-ree-3ete2' // page Enums.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker
                      scrollEnabled={false}
                      content={<ContainerParentDealPicker testID='test-id-WRAE-ewgra-26f5-6d1f-jfssba1'/>}
                      >
                    <LeftPageHeader testID='test-id-qrethwry-986d-yrht-4d51-54635jye12'/>
                </Page>
                <Page testID='test-id-d9133974-6159-0bf3-ree-3eteg' // page Enums.NavigationContentDealEditor.AppCRM_DealEditor_CampaignPicker
                      scrollEnabled={false}
                      content={<ContainerCampaignPicker testID='test-id-WRAE-ewgra-26f5-6d1f-jfssba1'/>}
                      >
                    <LeftPageHeader testID='test-id-qrethwry-986d-yrht-4d51-54635jye12'/>
                </Page>
                <Page testID='test-id-d9133974-243grt-qerqr-q3rq-24fqgv'
                      scrollEnabled={false}
                      content={<ContainerAgentList testID='activity-popover-select-agentList-picker'/>}>
                    <LeftPageHeader testID='test-id-qrethwry-986d-theaaaq-4d51-37yhqpiguhq'/>
                </Page>
            </ContentPanel>
            <AccessoryPanel testID='test-id-2bd14d9c-4944-b922-d51d-b9cb1016775e'>
                <Page testID='test-id-763926ad-26c1-2f3e-cfa2-346f60476136'
                      content={
                        <ContainerScope
                            instanceType={EnumsScheduler.SchedulerMode.DealEditorActivityList}
                            testID='test-id-a4b8eb68-bc83-d6d5-b901-6d81055fce2133'/>
                        }>
                    <LeftPageHeader testID='test-id-8bea8159-986d-6497-4d51-2565ff0cb225'/>
                </Page>

                <Page testID='test-id-763926ad-26c1-2f3e-cfa2-346f60476136'
                      content={<View testID='test-id-763926ad-26c1-2f3e-cfa2-346f60476136'/>}>
                </Page>
            </AccessoryPanel>
        </SplitPanel>
    </View>
)

export interface IProps {
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR,
    navigateToMemberListScreen:ModelsDealEditor.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    navigateBack: ModelsDealEditor.NAVIGATE_BACK,
    navigateBackEditor: ModelsDealEditor.NAVIGATE_BACK_EDITOR,
    navigateToProductPickerScreen: ModelsDealEditor.NAVIGATE_TO_PRODUCT_PICKER_SCREEN,
    navigateToSalesMethodPickerScreen: ModelsDealEditor.NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN,
    navigateToCurrencyPickerScreen: ModelsDealEditor.NAVIGATE_TO_CURRENCY_PICKER_SCREEN,
    navigateToActivityListScreen: ModelsDealEditor.NAVIGATE_TO_ACTIVITY_LIST_SCREEN,
    performCancel: ModelsDealEditor.PERFORM_CANCEL,
    performNext: ModelsDealEditor.PERFORM_NEXT,
    performSave: ModelsDealEditor.PERFORM_SAVE,
    performInputDescription: ModelsDealEditor.PERFORM_INPUT_DESCRIPTION,
    performInputProduct: ModelsDealEditor.PERFORM_INPUT_PRODUCT,
    performInputSalesMethod: ModelsDealEditor.PERFORM_INPUT_SALES_METHOD,
    performInputCurrency: ModelsDealEditor.PERFORM_INPUT_CURRENCY,
    performInputSumString: ModelsDealEditor.PERFORM_INPUT_SUM_STRING,
    performInputEquivalentSumString: ModelsDealEditor.PERFORM_INPUT_EQUIVALENT_SUM_STRING,
    performInputEquivalentConversionRateString: ModelsDealEditor.PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING,
    performInputTransferCommission: ModelsDealEditor.PERFORM_INPUT_TRANSFER_COMMISSION,
    performInputStaffCount: ModelsDealEditor.PERFORM_INPUT_STAFF_COUNT,
    performInputDealDate: ModelsDealEditor.PERFORM_INPUT_DEAL_DATE,
    performActivityListAppend: ModelsDealEditor.PERFORM_ACTIVITY_LIST_APPEND,
    callPutDealActivityAppend: ModelsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND,
    performActivityListExclude: ModelsDealEditor.PERFORM_ACTIVITY_LIST_EXCLUDE,
    callPutDealActivityExclude: ModelsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE,
    performScopeClearAndRefresh: ModelsDealEditor.PERFORM_SCOPE_CLEAR_AND_REFRESH,
    performContainerReset: ModelsDealEditor.PERFORM_CONTAINER_RESET,
    performTapActivityDelete: ModelsDealEditor.PERFORM_TAP_ACTIVITY_DELETE,
    navigateToDealTypePickerScreen: ModelsDealEditor.NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN,
    performShowAdditionalFields: ModelsDealEditor.PERFORM_SHOW_ADDITIONAL_FIELDS,
    navigateToCampaignPickerScreen: ModelsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN,
    navigateToParentDealPickerScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN,
    navigateToAgentListScreen: ModelsDealEditor.NAVIGATE_TO_AGENT_PICKER_SCREEN,
    showChancePopover: ModelsDealEditor.SHOW_CHANCE_POPOVER,
    showAttractionChannelPopover: ModelsDealEditor.SHOW_ATTRACTION_CHANNEL_POPOVER,
    performSelectChance:  ModelsDealEditor.PERFORM_SELECT_CHANCE,
    showApplicationPopover: ModelsDealEditor.SHOW_APPLICATION_POPOVER,
    performSelectApplication:  ModelsDealEditor.PERFORM_SELECT_APPLICATION,
    showSalesMethodPopover: ModelsDealEditor.SHOW_SALES_METHOD_POPOVER,
    performCancelSaveError: ModelsDealEditor.PERFORM_CANCEL_SAVE_ERROR,
    performSelectAttractionChannel: ModelsDealEditor.PERFORM_SELECT_ATTRACTION_CHANNEL,
    performSelectSalesMethod: ModelsDealEditor.PERFORM_SELECT_SALES_METHOD,
    currentCustomerManaged: Models.CustomerManaged,
    currentDeal: Models.Deal,
    currentEditorStep: Enums.DealEditorStep,
    isEditorMode: boolean,
    isRowBlocked: boolean,
    inputDescription: string,
    inputProduct: ModelsApp.Classifier,
    inputAttractionChannel: ModelsApp.Classifier,
    inputDealType: ModelsApp.Classifier,
    salesMethodList: ModelsApp.ClassifierList,
    inputSalesMethod: ModelsApp.Classifier,
    inputCurrency: ModelsApp.Classifier | null,
    inputSumString: string | null,
    inputApplication: ModelsApp.Classifier,
    inputEquivalentSumString: string | null,
    inputDealDate: Date | null,
    activityList: ModelsScheduler.ActivityList,
    currentActivity: ModelsScheduler.Activity,
    dealActivityAppend: boolean,
    dealActivityAppendFetching: boolean,
    dealActivityAppendError: Error | null,
    dealActivityAppendCachedDate: Date | null,
    dealActivityExclude: boolean,
    dealActivityExcludeFetching: boolean,
    dealActivityExcludeError: Error | null,
    dealActivityExcludeCachedDate: Date | null,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    dealSaveInProgress: boolean,
    dealSaveError: Error | null,
    testID: string,
    dealCreated: boolean,
    dealEditorMode: Enums.DealEditorMode | null,
    isValid:boolean,
    isEquivalentRateMode: boolean,
    inputEquivalentConversionRateString: string | null,
    isProductMethodEnabled: boolean,
    inputTeam: Models.MemberList,
    tapActivityDeleteId: string | Enums.SwipeableRowEmptyId,
    isNavigationButtonDisabled: boolean,
    isOwner: boolean,
    validationError: Error | null,
    isAdditionalFieldsAvailable: boolean,
    isChancePopoverOpened: boolean,
    inputChance: string | null,
    isApplicationPopoverOpened: boolean,
    isSalesMethodPopoverOpened: boolean,
    isAttractionChannelPopoverOpened: boolean,
    inputTransferCommission: string | null,
    inputStaffCount: string | null,
    inputAgentList: Models.AgentList,
    applicationKkClassifierList:  ModelsApp.ClassifierList,
}

export default ViewDealEditor
