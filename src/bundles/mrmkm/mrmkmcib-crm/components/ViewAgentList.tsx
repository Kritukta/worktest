/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewAgentListStyles'

import { ErrorModal } from 'mrmkmcib-app'

import {
    Button,
    ButtonType,
    Center,
    AccessoryPanel,
    CenterPageHeader,
    ContentPanel,
    NavigationIconButton,
    NavigationIconButtonType,
    H2,
    Icon,
    IconType,
    KeyboardType,
    TableCell,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    ProfileCell,
    RadioButton,
    PopoverType,
    PopoverPosition,
    Popover,
    RadioGroup,
    RightPageHeader,
    SplitPanel,
    Table,
    TableBody,
    TableRow,
    Text,
    TextInput,
    View,
} from 'ufs-mobile-platform'

import {defaultValues} from "../models/Models"
import {Models as ModelsApp, LoaderWithText} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import Error from "../models/Error"

import PopoverTarget from '../modules/PopoverTarget'
import ContainerAgent from '../containers/ContainerAgent'
import * as Utils from '../common/Util'
import {ProfileRow, SearchInput, ActionProfileRow} from 'mrmkmcib-ui'

const CONTACT_TYPE_CLASS_NAME = 'SBRF_CONTACT_TYPE_GROUP'
const MAIN_CONTACT_VALUE = 'Основной контакт'
const MAIN_CONTACT_CLASS = {classifierName: CONTACT_TYPE_CLASS_NAME, code: 'Main Contact', value: MAIN_CONTACT_VALUE,}
const BASIC_CONTACT_CLASS = {classifierName: CONTACT_TYPE_CLASS_NAME, code: 'Employee', value: 'Сотрудник',}
const getAgentListAddMenuContent = (props: IProps): React.ReactElement<View> => {
    switch(props.agentListContextMode){
        case Enums.AgentListContextMode.Deal: {
            return (
                <View testID='test-id-getMemberAddMenuContent-View-1'
                      style={Styles.agentListAddMenuContent}>
                    <Button testID='test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2'
                            type={ButtonType.TEXT}
                            onExecute={()=>
                                props.performOpenAgentScreen(defaultValues.Agent, Enums.AgentMode.Create, Utils.getAgentContextMode(props.agentListContextMode))}>
                        <Text testID='test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2-TEXT'>
                            {`Создать представителя `}
                        </Text>
                    </Button>
                </View>)
        }
        default:{
            return (
                <View testID='test-id-getMemberAddMenuContent-View-1d'
                      style={Styles.agentListAddMenuContent}>
                    <Button testID='test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-1d'
                            type={ButtonType.TEXT}
                            onExecute={props.navigateToAgentSearchScreen}>
                        <Text testID='test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-1-TEXTd'>{`Искать представителя `}</Text>
                    </Button>
                    <Button testID='test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2d'
                            type={ButtonType.TEXT}
                            onExecute={()=>
                                props.performOpenAgentScreen(defaultValues.Agent, Enums.AgentMode.Create, Utils.getAgentContextMode(props.agentListContextMode))}>
                        <Text testID='test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2-TEXTd'>
                            {`Создать представителя `}
                        </Text>
                    </Button>
                </View>
            )
        }
    }
}

const isVisibleAgentAccessDenied = (props: IProps, agent: Models.Agent): boolean =>{
    if (props.agentListContextMode == Enums.AgentListContextMode.Activity ||
        props.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
        props.agentListContextMode == Enums.AgentListContextMode.NewEditActivity){
        return false
    }
    return agent.accessLevel == Enums.AgentAccessLevel.Denied
}

const getAgentListWatchModeContent = (props: IProps): React.ReactElement<View> => {
    return <View style = {Styles.main}
                 testID="test-id-d0b6d4ae-fc50-11e7-8450-fea9aa178066">
                <Table noPaddings = {true}
                       key = "AgentListMainTable"
                       testID='test-id-07f4172b-b7d8-62df-d791-6bd5980d29dd'
                       underlined={true}>
                    <TableBody testID='test-id-64fc8583-8fc4-b99a-adf1-07c73278e2d3'>
                            {Utils.sortAgentList(props.inputAgentList)
                                .map((agent: Models.Agent, index: number): React.ReactElement<TableRow> => (
                                    <ProfileRow
                                        testID={ `test-id-20437c9d-1fff-c423-bec0-13fe4b0cc302_${index}` }
                                        key={ index.toString() }
                                        onRowPress={ () => {
                                            props.performOpenAgentScreen(agent, Enums.AgentMode.Watch, Utils.getAgentContextMode(props.agentListContextMode)) }
                                        }
                                        personInitials={ Utils.getAgentInitials(agent) }
                                        hasCrown={ agent.isPrincipal }
                                        fullName={ agent.fullName || Utils.getFullNameRepresentation(agent)  || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED) }
                                        isBlocked={ false }
                                        isAccessDenied={ isVisibleAgentAccessDenied(props, agent) }
                                        jobOrPositionTitle={ Utils.getAgentCustomerPositionByAgentListContext(props.currentCustomerManaged, agent, props.agentListContextMode) }
                                        underlined={ false }
                                        child={null} />
                                ))
                            }
                    </TableBody>
                </Table>
            </View>
}


const getPrincipalPicker = (props: IProps): React.ReactElement<Table> => (
    <Table  noPaddings = {true}
            testID='test-id-getAgentListEdit-table'
            underlined={true}>
        <TableBody testID='test-id-getAgentListEdit-tableBody'>
        {
            Utils.sortAgentList(props.inputAgentList)
            .map((agent: Models.Agent, key: number): React.ReactElement<TableRow> =>
                <TableRow testID="" key = {key}
                          onClick = {()=> props.performAgentListPrincipal(agent.id, !agent.isPrincipal)}>
                    <TableCell testID="test-id-64bd6a66-e7be-11e7-80c1-9a214cf093ae">
                        <View style = {Styles.agentListAvatarRow}
                              testID="test-id-0adc359e-e7ec-11e7-80c1-9a214cf093ae">
                            <View style={Styles.principalPickerView}
                                  testID='test-id-dd3ae036-5175-8ac2-2473-ad3f8dbdd0f9'>
                                    {
                                    agent.isPrincipal ? (
                                        <View testID="test-id-6abf8b56-e7be-11e7-80c1-9a214cf093ae"
                                              style = {Styles.buttonCrownView}>
                                            <Button testID="test-id-a6de38ce-f2c4-11e7-8c3f-9a214cf093ae">
                                            <Icon testID='test-id-2ed626d0-5409-04f1-aba8-b0c0e377b2be'
                                              type={IconType.MrmCrown}/>
                                            </Button>
                                        </View>) : (
                                        <View testID='test-id-d78bbcdb-ff2d-37d3-2dd7-b55bb2f334e4'
                                              style={Styles.CircleGrey} />)
                                }
                            </View>
                            <View testID='test-id-2ec9b3a5-4b74-c6b3-b575-2f72fdbbbb92' style={Styles.avatarWrapper}>
                                <View testID='test-id-be6479aa-f8bf-e2fb-e700-fb9db280e4f0' style={Styles.avatar}>
                                    <Text testID='test-id-7b3a7ce6-92ae-8c41-ef20-887ddbe4dd41'
                                          style={Styles.avatarLabel}>{Utils.getAgentInitials(agent)}</Text>
                                </View>
                            </View>
                            <View testID='test-id-3a262f1f-f9e4-bbf2-56a3-bcc73d9646ff' style={Styles.avatarSubtitle}>
                                <Text testID='test-id-5c969bf5-9bbc-b9e2-6dbd-535d43f33b67'
                                      style={Styles.avatarFullName}>{agent.fullName}</Text>
                                <Text testID='test-id-5437e292-0bbd-787c-1a78-8c5e82361fbb'
                                      style={Styles.avatarSubtitleLabel}>{Utils.getAgentCustomerPosition(props.currentCustomerManaged, agent)}</Text>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>
            )
        }
        </TableBody>
    </Table>
)

const deleteButton = (onClick: () => void) => (
    <View testID='test-id-56297dbb-8820-3c03-19da-f5699019b348'
          style={Styles.deleteButton}>
        <Button testID='test-id-04d1cffe-4501-aeb6-894c-f45f1ee15662'
                type={ButtonType.DEFAULT}
                onExecute={onClick}>
            <Text testID='test-id-faadeac4-845d-e549-4c98-728bbb5ee1e8'
                  style={Styles.deleteButtonText}>{'Удалить'}</Text>
        </Button>
    </View>
)

const getAgentListActionButtonList = (props: IProps): React.ReactElement<View> | null => {

    if (props.agentListAccessLevel == Enums.AgentListAccessLevel.Read) {
        return null
    }
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity:{

            return <View style = {Styles.activityAgentListActionListView}>
                        <Button testID='test-id-73e632b2-e664-11e7-80c1-9a214cf093ae'
                                type={ButtonType.TEXT}
                                onExecute={props.navigateToAgentSearchScreen}>
                            <Text testID='test-id-6db30bd6-e664-11e7-80c1-9a214cf093ae'>
                                Добавить
                            </Text>
                        </Button>
                    </View>
        }
        case Enums.AgentListContextMode.Deal:
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal:{

            return <View style = {Styles.activityAgentListActionListView}>
                <NavigationIconButton
                    testID='test-id-61559aa0-d2af-0ebd-9831-3d32c5fbca96'
                    type={NavigationIconButtonType.ADD}
                    onExecute={props.navigateToAgentSearchScreen} />
            </View>
        }
        case Enums.AgentListContextMode.Customer: {
            return <View testID='test-id-165a1a00-e4fc-11e7-80c1-9a214cf093ae'
                         style = {Styles.customerAgentListActionListView}>
                <Button testID='test-id-3491ab68-9aa2-396a-23b1-130d244c4acf'
                        type={ButtonType.TEXT}
                        onExecute={() => props.navigateToPrincipalPickerScreen()}>
                    {props.inputAgentList && Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length > 0 ?
                        <Text  testID='test-id-eebe2909-6369-316d-5e29-f2e3ed85fa12'>
                            Выбор главного
                        </Text> : null }
                </Button>
                <PopoverTarget testID='test-id-19347c4e-8114-8f56-e56d-1111ca8af123'
                               refName={'addAgentMenu'}>
                    <Button testID='test-id-2e7b2cbe-e65f-11e7-80c1-9a214cf093ae'
                            type={ButtonType.TEXT}
                            onExecute={props.performMenuAgentAddShow}>
                        <Text testID='test-id-3611ad36-e65f-11e7-80c1-9a214cf093ae'>
                            Добавить
                        </Text>
                    </Button>
                </PopoverTarget>
            </View>
        }
        default: return null
    }

}
const getLeftNavigationButtonTitle = (agentListContextMode: Enums.AgentListContextMode): string => {
    switch (agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity:
        {
            return "Задача"
        }
        case Enums.AgentListContextMode.Customer:
        {
            return "Клиент"
        }
        case Enums.AgentListContextMode.Deal:
        {
            return "Сделка"
        }
        default: return ""
    }
}

const getLeftNavigationButtonWatchMode =
    (props:IProps): React.ReactElement<NavigationBackButton> | Array<React.ReactElement<NavigationBackButton>> => {

    return [<NavigationBackButton key={'agentListLeftNavigationBackButtonWatchMode'}
                        title={false}
                        testID='test-id-45y45hhy-67ij8k-98krjh-6879k-797mmbb'
                        onClick={props.performCloseAgentListScreen}/>,
            <View key={'agentListLeftNavigationViewButtonWatchMode'}
                  style={Styles.navigationBackButtonTextAdjustment}
                  testID="test-id-dd33sd1e-5687-0000-167a-0ca21eddf300">
                <NavigationTextButton
                    testID="test-id-c5fb1ff3-0000-e36e-847f-3df1sdsdsdd16a"
                    title={getLeftNavigationButtonTitle(props.agentListContextMode)}
                    onExecute={props.performCloseAgentListScreen}
                />
            </View>
           ]
}
const getLeftNavigationButtonEditMode = (props:IProps): React.ReactElement<NavigationTextButton | NavigationBackButton>  => {
    switch(props.agentListMode) {
        case Enums.AgentListMode.Watch: {
            return (
                    <NavigationBackButton key = '72c8d27a-e4c2-11e7-80c1-9a214cf093ae'
                          testID='test-id-6b2ab164-e4c2-11e7-80c1-9a214cf093ae'
                          title={false}
                          onClick={props.performCloseAgentListScreen} />)
        }
        default: {
            return <NavigationTextButton testID='test-id-9d50c17a-d127-0e88-e788-f70407067fd1'
                      title={'Отмена'}
                      onExecute={props.performCancel}/>
        }
    }
}
const getLeftNavigationButton = (props:IProps) => {
    switch (true) {

        case props.agentListMode == Enums.AgentListMode.Edit: {
            return getLeftNavigationButtonEditMode(props)
        }
        case props.agentListMode == Enums.AgentListMode.Watch: {
            return getLeftNavigationButtonWatchMode(props)
        }
    }
}

const getAgentListEditModeContent = (props: IProps): React.ReactElement<View> => (
        <View testID='test-id-4041b5809'>
            {getAgentListActionButtonList(props)}
            <Table noPaddings = {true}
                   testID='test-id-getAgentListEdit-table'
                   underlined={true}>
                <TableBody  testID='test-id-getAgentListEdit-tableBody'>
                    {
                        Utils.sortAgentList(props.inputAgentList)
                            .map((agent: Models.Agent, key: number) => {
                            const jobTitle = Utils.getAgentCustomerPositionByAgentListContext(props.currentCustomerManaged, agent, props.agentListContextMode)
                            return (<ActionProfileRow
                                key={`test-id-member-list-ActionProfileRow-row-key-${agent.id}${key}`}
                                onOpenDeletePanel = {()=> props.performOpenAgentDeletePanel(agent)}
                                onCancel = {() => props.performCloseAgentDeletePanel(agent)}
                                isDeletePanelOpened = {props.agentListOpenedDeletePanel.some((agentDeletePanel: Models.Agent) => {
                                   return agentDeletePanel.id === agent.id
                                })}
                                avatarInitials={Utils.getAgentInitials(agent)}
                                isDisabled={agent.isPrincipal}
                                isGeneral={agent.isPrincipal}
                                isBlocked={agent.isBlocked}
                                onExecute={()=>props.performAgentDelete(agent)}
                                infoTitle= {agent.fullName || Utils.getFullNameRepresentation(agent)  || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED)}
                                infoSubTitle={`${jobTitle}${agent.isPrincipal ? ' (Основной контакт)' : ''}`}
                                infoSubTitleStyle={Styles.avatarSubtitleLabel}
                            />)
                        })
                    }
                </TableBody>
            </Table>
            {getErrorModalWindow(props)}
    </View>
)
const getPlaceholderSeachAgent = (props:IProps): React.ReactElement<View> => {
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity:{
            return <View style={Styles.SearchAgentPlaceholderView}
                         testID="test-id-9396ceea-bf96-11e7-abc4-cec278b6b50a">
                        <Text testID='test-id-9883be04-bf96-11e7-abc4-cec278b6b50a'
                              style={Styles.SearchPlaceholderText}>
                                {props.agentSearchList &&
                                Array.isArray(props.agentSearchList.data) &&
                                props.agentSearchList.data.length == 0 ?
                                    'У клиента не добавлено ни одного представителя. ' +
                                    'Перейдите в карточку клиента и добавьте представителей' :
                                    'Поиск представителя по ФИО'
                                }
                        </Text>
                    </View>
        }
        default: {
            return <View testID="test-id-c9d5270e-bf91-11e7-abc4-cec278b6b50a"
                         style={Styles.SearchAgentPlaceholderView}>
                    <Text testID='test-id-getSearchAgentFormContentedf9c3ad-c2fe-4711-4bac-dbfb55cdfxxc'
                          style={Styles.SearchPlaceholderText}>
                        {'Поиск представителя по ФИО'}
                    </Text>
                  </View>
        }
    }
}
const getPlaceholderEmptyResult = (props: IProps): React.ReactElement<View> => {
    switch (props.agentListContextMode) {
        default: {
            return <View testID="test-id-7518b172-bf96-11e7-abc4-cec278b6b50a"
                         style={Styles.SearchAgentPlaceholderView}>
                <Text testID='test-id-7d9b1326-bf96-11e7-abc4-cec278b6b50a'
                      style={Styles.SearchPlaceholderText}>
                    Ничего не найдено
                </Text>
            </View>
        }
    }
}
const getAgentListLoaderMessage = (props: IProps): string => {
    if (props.agentListFetching) return 'Получение списка представителей'
    if (props.agentListSaveInProgress) return 'Сохранение изменений списка представителей'
    if (props.agentSearchListFetching) return 'Поиск представителей'
    return ''
}
const getLoader = (props:IProps): React.ReactElement<LoaderWithText> => (
    <LoaderWithText text = {getAgentListLoaderMessage(props)}
                    testID={`test-id-agentSearchListFetching-${getAgentListLoaderMessage(props)}`}/>
)
const getSearchAgentFormContent = (props : IProps): React.ReactElement<View | Table | LoaderWithText> => {
    if(props.agentSearchListFetching){
        return getLoader(props)
    }
    const isListEmpty: boolean = props.agentSearchList == null ||
        props.agentSearchList.data == null ||
        Utils.filterAgentSearchList(props.inputAgentList,props.agentSearchList,
            props.searchAgentStringRequest, props.agentListContextMode).length === 0
    return (
        props.searchAgentStringRequest == '' || props.searchAgentStringRequest == null
        ? (
            getPlaceholderSeachAgent(props)
        ) :
        props.searchAgentStringRequest != '' && props.searchAgentStringRequest != null && isListEmpty
        ? (
            getPlaceholderEmptyResult(props)
        ) :
        <Table testID='test-id-eebd5176-8232-16de-76a2-270dc3e3f9eb'
               underlined={false}>
            <TableBody testID='test-id-8da407c9-035f-b3b9-39cd-68daadb41afe'>
                {
                    Utils.filterAgentSearchList(props.inputAgentList,props.agentSearchList, props.searchAgentStringRequest, props.agentListContextMode)
                        .map((agent: Models.Agent, key: number) => (
                        <TableRow testID='test-id-80f41524-b796-dade-28ef-492743254f18' key={key}
                                  style = {{paddingLeft: 30}}
                                onClick={() => {
                                    props.performAgentSearchListSelect(agent)
                                }}>
                            <ProfileCell testID='test-id-df2a7938-94a2-4c28-5cbb-77c76e4f04c3'
                                         title={agent.fullName || Utils.getFullNameRepresentation(agent) || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED)}
                                         subtitle={Utils.getAgentCustomerPosition(props.currentCustomerManaged, agent)}
                                         hasArrow={false}
                            />
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

const getSearchAgentForm = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-a75808e3-f6a3-603c-43c8-36aa812081bf' style = {Styles.searchAgentView}>
        <SearchInput
            value={props.inputAgentSearch}
            placeholder={'Фамилия Имя Отчество'}
            onCancel={props.performCancelSearchAgent}
            autoFocus={true}
            onReturnKeyPressed={ props.callGetAgentSearchList }
            keyboardType={KeyboardType.Email}
            onChange={props.performInputAgentSearch}
        />
        {getSearchAgentFormContent(props)}
        {getErrorModalWindow(props)}
    </View>
)






const getAgentRelationType = (list: Models.AgentCustomerPositionList, currentCustomerId: string) => {
    let relationType = list.data.find((client: Models.AgentCustomerPosition) => {
        return client.customerId == currentCustomerId
    })

    return relationType && relationType.customerRelations && relationType.customerRelations.value || ''
}

export interface ISelectClassifierProps {
    performSelect: { (value: ModelsApp.Classifier,): void },
    classifierList: ModelsApp.ClassifierList
    testID: string,
    selectedCode: string | undefined,
}

const SelectClassifier: React.StatelessComponent<ISelectClassifierProps> = (props: ISelectClassifierProps) => {

    // Рендеринг строки (RadioButton для RadioGroup)
    const getRoleLines = (classifierList: ModelsApp.ClassifierList) =>
        classifierList.data
            .map((item: ModelsApp.Classifier) =>
                <RadioButton testID='test-id-dc9b53a8-7604-f51c-fd12-844c27620cb9' key={`radio-${item.code}`}
                             value={item.code}
                             label={item.value}
                />
            )


    // ClassifierList отсортированный в алфавитном порядке по полю value
    const alphabeticallySortedListOfRoles: ModelsApp.ClassifierList = Utils.sortClassifierListByValueField(props.classifierList)

    return (
        <RadioGroup testID='test-id-0e898ff5-e409-f523-2265-dfe6b1dbbc52'
                    value={props.selectedCode}
                    onChange={(index, value) =>
                        props.performSelect(alphabeticallySortedListOfRoles.data[index])
                    }
        >
            {getRoleLines(alphabeticallySortedListOfRoles)}
        </RadioGroup>
    )
}


/*
 * UI stateless functional component presenter for "AgentList" container.
 */

export interface IProps {


    performAgentDelete: ModelsAgentList.PERFORM_AGENT_DELETE,
    navigateToPrincipalPickerScreen: ModelsAgentList.NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN,
    performAgentListPrincipal: ModelsAgentList.PERFORM_AGENT_LIST_PRINCIPAL,
    performOpenAgentScreen: ModelsAgent.PERFORM_OPEN_AGENT_SCREEN,

    performInputAgentSearch: ModelsAgentList.PERFORM_INPUT_AGENT_SEARCH,
    performAgentSearchListSelect: ModelsAgentList.PERFORM_AGENT_SEARCH_LIST_SELECT,

    navigateToAgentSearchScreen: ModelsAgentList.NAVIGATE_TO_AGENT_SEARCH_SCREEN,
    performMenuAgentAddShow: ModelsAgentList.PERFORM_MENU_AGENT_ADD_SHOW,
    performMenuAgentAddHide: ModelsAgentList.PERFORM_MENU_AGENT_ADD_HIDE,
    performSave: ModelsAgentList.PERFORM_SAVE,
    searchAgentStringRequest: string,

    performEdit: ModelsAgentList.PERFORM_EDIT,
    performCancel: ModelsAgentList.PERFORM_CANCEL,
    navigateBack: ModelsAgentList.NAVIGATE_BACK,


    agentListContextMode: Enums.AgentListContextMode,
    agentListMode: Enums.AgentListMode,
    inputAgentSearch: string,


    inputAgentRole: ModelsApp.Classifier | null,
    isVisiblePopoverMenu: boolean,

    refreshInProgress: boolean,
    refreshError: Error | null,
    inputAgentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    agentListCachedDate: Date | null,

    agentSearchList: Models.AgentList,
    agentSearchListFetching: boolean,
    agentSearchListError: Error | null,
    agentSearchListCachedDate: Date | null,
    isVisibleAgentListErrorModalWindow: boolean,
    agentListSaveInProgress: boolean,
    agentListSaveError: Error | null,

    classifierDictionary: ModelsApp.ClassifierDictionary,
    testID: string,
    performOpenAgentDeletePanel: ModelsAgentList.PERFORM_OPEN_AGENT_DELETE_PANEL,
    performCloseAgentDeletePanel: ModelsAgentList.PERFORM_CLOSE_AGENT_DELETE_PANEL,
    agentListOpenedDeletePanel: Models.Agent[],
    performPopoverAddHide: ModelsAgentList.PERFORM_POPOVER_ADD_HIDE,
    performCloseAgentListScreen: ModelsAgentList.PERFORM_CLOSE_AGENT_LIST_SCREEN,
    currentCustomerManaged: Models.CustomerManaged | null,
    agentListAccessLevel: Enums.AgentListAccessLevel,
    performCancelSearchAgent: ModelsAgentList.PERFORM_CANCEL_SEARCH_AGENT,
    performSelectAgentJobPosition: ModelsAgentList.PERFORM_SELECT_AGENT_JOB_POSITION,
    performInputAgentJobPosition: ModelsAgentList.PERFORM_INPUT_AGENT_JOB_POSITION,
    inputAgentJobPosition: string,
    callGetAgentSearchList: ModelsAgentList.CALL_GET_AGENT_SEARCH_LIST,
    performChangeDisplayAgentListErrorModalWindow: ModelsAgentList.PERFORM_CHANGE_AGENT_LIST_ERROR_MODAL_WINDOW,
}
const titleAgentListPage = (props:IProps): string  => {
    let title: string = ""
    if (props.agentListMode == Enums.AgentListMode.Edit) {
        return 'Изменение списка представителей'
    }
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity: {
            return "Представители задачи"

        }
        case Enums.AgentListContextMode.Deal:
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal:{
            return "Представители"

        }
        default: {
           return  "Представители клиента"
        }
    }
}


const getRightNavigationButton = (props:IProps): React.ReactElement<NavigationTextButton> | null => {
    switch (true) {
        case props.agentListAccessLevel == Enums.AgentListAccessLevel.Read: {
            return null
        }
        case (( props.agentListContextMode === Enums.AgentListContextMode.Activity ||
                props.agentListContextMode === Enums.AgentListContextMode.Scheduler ||
                props.agentListContextMode === Enums.AgentListContextMode.NewEditActivity ||
                props.agentListContextMode === Enums.AgentListContextMode.Deal ||
                props.agentListContextMode === Enums.AgentListContextMode.NewDeal ||
                props.agentListContextMode === Enums.AgentListContextMode.EditDeal) &&
             (Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length == 0)): {
            return null
        }
        case props.agentListMode == Enums.AgentListMode.Watch: {
            return <NavigationTextButton testID='test-id-9d50c17a-d127-0e88-e788-f70407067fd1'
                                         title={'Изменить'}
                                         onExecute={props.performEdit}/>
        }
        case props.agentListMode == Enums.AgentListMode.Edit: {
            return <NavigationTextButton testID='test-id-74cdb471-fcc8-6438-dfc6-abcab509eb1b'
                                         title={'Готово '}
                                         onExecute={props.performSave}/>
        }
        default: return null
    }
}
const getErrorAgentListModalWindow = (props: IProps): Models.ErrorModalWindow => {

    if (props.agentListSaveError) {
        return {
            title: "Произошла ошибка при сохранении списка представителей",
            cancel: props.performChangeDisplayAgentListErrorModalWindow,
            repeat: () => props.performSave(),
            cacheDate: new Date(),
            message: props.agentListSaveError ?
                props.agentListSaveError.message || props.agentListSaveError.comment
                : 'Попробуйте снова или обратитесь в службу поддержки.',
        }
    }

    if (props.agentSearchListError) {
        return {
            title: "Произошла ошибка при поиске представителей",
            cancel: props.performChangeDisplayAgentListErrorModalWindow,
            repeat: () => props.callGetAgentSearchList(),
            cacheDate: new Date(),
            message: props.agentSearchListError ?
                props.agentSearchListError.message || props.agentSearchListError.comment
                : 'Попробуйте снова или обратитесь в службу поддержки.',
        }
    }

    return defaultValues.ErrorModalWindow
}
const getErrorModalWindow = (props: IProps): React.ReactElement<ErrorModal> => {
    const agentListErrorModal: Models.ErrorModalWindow = getErrorAgentListModalWindow(props)

    return (<ErrorModal
        key = {`getErrorModalWindow-${agentListErrorModal.title}-${agentListErrorModal.message}`}
        testID={ `test-id-modal-error-activity-card-${new Date().getTime()}` }
        isVisible={props.isVisibleAgentListErrorModalWindow}
        titleText={agentListErrorModal.title || "Произошла ошибка"}
        messageText={ agentListErrorModal.message || "Попробуйте снова или обратитесь в службу поддержки."}
        isCacheDateMessageVisible = {false}
        cancel={()=> agentListErrorModal.cancel(false)}

        repeat={() => agentListErrorModal.repeat()}

        cacheDate={agentListErrorModal.cacheDate || new Date()}/>)
}
const isLoadingAgentList = (props: IProps): boolean => {
    return props.agentListFetching || props.agentListSaveInProgress
}
const getAgentListContent = (props:IProps): React.ReactElement<View | Table | LoaderWithText>  => {

    if (isLoadingAgentList(props)) {
        return getLoader(props)
    }
    switch (true) {
        case props.agentListMode == Enums.AgentListMode.Watch: {
            return getAgentListWatchModeContent(props)
        }
        case (( props.agentListContextMode == Enums.AgentListContextMode.Activity ||
                props.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
                props.agentListContextMode  == Enums.AgentListContextMode.NewEditActivity ||
                props.agentListContextMode === Enums.AgentListContextMode.Deal ||
                props.agentListContextMode  == Enums.AgentListContextMode.NewDeal ||
                props.agentListContextMode  == Enums.AgentListContextMode.EditDeal) &&
             (Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length == 0)):{
            return  getSearchAgentForm(props)
        }
        case props.agentListMode == Enums.AgentListMode.Edit: {
            return getAgentListEditModeContent(props)
        }
        default: return <View  testID="test-id-d3c3f690-e4c7-11e7-80c1-9a214cf093ae"/>
    }
}

const getAgentNavigationBar = (props: IProps): Array<React.ReactElement<LeftPageHeader> |
    React.ReactElement<RightPageHeader> |
    React.ReactElement<CenterPageHeader>> => {
    if (
      (
        props.agentListContextMode === Enums.AgentListContextMode.Activity
				|| props.agentListContextMode === Enums.AgentListContextMode.Scheduler
				|| props.agentListContextMode === Enums.AgentListContextMode.NewEditActivity
				|| props.agentListContextMode === Enums.AgentListContextMode.Deal
        // || props.agentListContextMode === Enums.AgentListContextMode.NewDeal
        // || props.agentListContextMode === Enums.AgentListContextMode.EditDeal
      ) &&
        (Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length == 0)) {
        return []
    }
    return [<LeftPageHeader key={`LeftPageHeader${new Date().getTime()}`}
                            testID='test-id-78f03c44-678c-22fd-e31c-b596930d19a6'>
                {getLeftNavigationButton(props)}
            </LeftPageHeader>,
            <CenterPageHeader key={`CenterPageHeader${new Date().getTime()}`}
                              testID='test-id-05c5db28-e4e0-11e7-80c1-9a214cf093ae'>
                <H2 testID="test-id-cad802be-ea36-11e7-80c1-9a214cf093ae">
                    {titleAgentListPage(props)}
                </H2>
            </CenterPageHeader>,
            <RightPageHeader key={`RightPageHeader${new Date().getTime()}`}
                             testID='test-id-75b628f0-4056-e30a-686f-f1735a8340e4'>
                {getRightNavigationButton(props)}
            </RightPageHeader>]
}
const getPositionListContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const tablePositionListRows = (props: IProps) => (
        props.classifierDictionary.SBRF_CONT_JOB_TITLE.data
            .filter((item: ModelsApp.Classifier): boolean =>
                item.value.toLowerCase().includes(props.inputAgentJobPosition.toLowerCase()))
            .map((item: ModelsApp.Classifier) => (
                <TableRow testID='test-id-f2b822ee-94f9-0a7e-70fb-13e162ac7d20'
                          key={`${item.code}`}
                          onClick={() => props.performSelectAgentJobPosition(item.value) }>
                    <TableCell testID='test-id-88d74346-e44e-a14f-696f-e0bf018430f0'>
                        <View testID='test-id-70115b33-0434-b82e-622f-c69c87933f9e'
                              style={Styles.positionTextView}>
                            <Text testID='test-id-2acffd5a-fe9e-d9cd-5e9c-e7d3c1945dd0'
                                  style={Styles.positionTextValue}>
                                {item.value}
                            </Text>
                        </View>
                    </TableCell>
                </TableRow>))
    )
    return <Table
        testID='test-id-d4df1f96-cec2-213e-03a6-2abdad21c388'>
        <TableBody testID='test-id-d4df1f96-cec2-213e-03a6-2abdad21c388'>
            {props.inputAgentJobPosition.length > 0 ?
                <TableRow testID='test-id-f2b822ee-94f9-0a7e-70fb-13e162ac7d20'
                          onClick={() => props.performSelectAgentJobPosition(props.inputAgentJobPosition) }>
                    <TableCell testID='test-id-88d74346-e44e-a14f-696f-e0bf018430f0'>
                        <View testID='test-id-92641820-a024-4db8-59b8-751bc7c5216f'
                              style={Styles.positionViewWrapper}>
                                <Text testID='test-id-2acffd5a-fe9e-d9cd-5e9c-e7d3c1945dd0'
                                      style={Styles.positionTextValue}>
                                    {props.inputAgentJobPosition}
                                </Text>
                        </View>
                    </TableCell>
                </TableRow> : null }
            {tablePositionListRows(props)}
        </TableBody>
    </Table>
}
const getAccesoryPanel = (props: IProps) => (

    props.agentListContextMode != Enums.AgentListContextMode.NewEditActivity &&
    props.agentListContextMode != Enums.AgentListContextMode.Activity &&
    props.agentListContextMode != Enums.AgentListContextMode.Scheduler &&
    props.agentListContextMode != Enums.AgentListContextMode.NewDeal &&
    props.agentListContextMode != Enums.AgentListContextMode.EditDeal ?
        <AccessoryPanel testID='test-agent-list-AccessoryPanel'>
           <Page testID='test-id-743053e2-2372-11e8-b467-0ed5f89f718b'
                 content={<View testID="test-id-7eb665e0-2372-11e8-b467-0ed5f89f718b"/>} />
        </AccessoryPanel> : <View testID="test-id-df4246da-2373-11e8-b467-0ed5f89f718b"/>
)
const getJobList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-516dea8e-a8de-a49d-356d-bb97c689dd3e'>
            <View testID='test-id-fee6c84e-dfe4-11e7-80c1-9a214cf093ae'
                  style = {Styles.agentSearchFieldView} >
                <SearchInput
                    value={props.inputAgentJobPosition}
                    placeholder={"Введите должность"}
                    autoFocus={true}
                    onCancel={(): void =>{  props.navigateBack()}}
                    onChange={(position: string): void => props.performInputAgentJobPosition(position)}
                />
            </View>
            <View testID="test-id-f5ad1f30-dfe4-11e7-80c1-9a214cf093ae"
                  style={Styles.agentPositionListView}>
                {getPositionListContent(props)}
            </View>
        </View>
    )
}

const ViewAgentList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
             <SplitPanel testID='test-id-7c5807c4-76f6-6281-9c06-31d0314f6e81'
                        id={Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen)}>
                <ContentPanel testID='test-id-f3ec3c78-c0cd-ccee-7e63-9cb2216ffe18' style={{backgroundColor: '#fff'}}>
                    <Page testID='test-id-2d9b3bdb-b878-461a-becc-7cc27ffb6abd'
                        scrollEnabled={true}
                        content={getAgentListContent(props)}>

                        {getAgentNavigationBar(props)}
                    </Page>
                    <Page testID='test-id-0f056e3c-e100-0681-f28c-fda9611c38fb'
                        scrollEnabled={true}
                        content={getPrincipalPicker(props)}>
                        <LeftPageHeader testID='test-id-6694e5a8-9253-ae81-bf2a-768317565da3'>
                            <NavigationBackButton testID='test-id-6694e5a8-9253-ae81-bf2a-768317565db1'
                                                title={false}
                                                onClick={props.navigateBack}/>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-6694e5a8-9253-ae81-bf2a-768317565db2'>
                            <H2 testID='test-id-6694e5a8-9253-ae81-bf2a-768317565db3'>Выбор главного</H2>
                        </CenterPageHeader>
                    </Page>

                    <Page testID='test-id-621e2c6f-1f90-7717-f4df-e11814d5729e' scrollEnabled={true}
                        content={getSearchAgentForm(props)}>
                        <LeftPageHeader testID='test-id-51f060be-e099-8018-a3cf-c05a1b71690c'/>
                    </Page>
                    <Page testID='test-id-34d44ffd-1783-fba3-c029-ad81422bda8a'
                        scrollEnabled={false}
                        content={getJobList(props)}>
                            <CenterPageHeader testID='test-id-97681e66-94e1-0f00-2e58-edb7336814a9'>
                                <H2 testID='test-id-97681e66-94e1-0f00-2e58-edb7336814a9'>
                                    Дожность представителя
                                </H2>
                            </CenterPageHeader>
                    </Page>

                </ContentPanel>
                {getAccesoryPanel(props)}
                <Popover testID='test-id-13466acf-6f4b-511b-62ss-7173c406b719'
                         target={PopoverTarget.getRef('addAgentMenu')}
                         opened={props.isVisiblePopoverMenu}
                         onOutsideTap={props.performPopoverAddHide}
                         type={PopoverType.NARROW}
                         position={[PopoverPosition.BOTTOM]}>
                    {getAgentListAddMenuContent(props)}
                </Popover>
            </SplitPanel>
)

export default ViewAgentList
