/*
 * Created by Burnaev M.U.
 */

import React, { Component, PropTypes } from 'react'

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Styles from './styles/ViewCustomerActivityExcludeStyles'

import {
    Content,
    AuthForm,
    RootComponent,
    Sidebar,
    MenuSideTop,
    MenuSideBottom,
    MenuItem,
    Button,
    ButtonType,
    IconType,
    UFSProvider,
    AppContainer,
    SplitPanel,
    SplitPanelActions,
    AccessoryPanel,
    ContentPanel,
    NavigationBar,
    Page,
    H1,
    H2,
    Text,
    TableColumnAlignment,
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    TableColumn,
    Section,
    HorizontalRule,
    View,
    NavigationTextButton,
    NavigationFilterButton,
    NavigationIconButtonType,
    NavigationIconButton,
    NavigationBackButton,
    FileViewer,
    LeftPageHeader,
    CenterPageHeader,
    RightPageHeader,
    RadioButton,
    RadioGroup,
    Textarea,
    TextInput,
    NumberInput,
    MaskedInput,
    Header,
    Icon,
    KeyboardType,
    SysCalls,
    download,
    upload,
    get,
    post,
    syncGet,
    syncPost,
    File,
    ECM,
    FileType,
    PersistentType,
    Settings,
    Cookie,
    Authentication,
    AuthenticationStatus,
    AuthenticationType,
    Grid,
    Col,
    Row,
    Checkbox,
    Switch,
    Right,
    Center,
    Left,
    Clearfix,
    Video,
    TabSelector,
    OptionItem,
    SystemError,
    Loader,
    Popover,
    PopoverType,
    PopoverPosition,
    Workflow,
    WFBreadcrumbs,
    Log,
    LogLevel,
    SystemInfo,
    Label,
    Breadcrumbs,
    Hint,
    HintType,
    Panel,
    PanelType,
    PanelHeader,
    HintSwitch,
    Accordion,
    ComboBox,
    ProfileCell,
    Map as UFSMap,
    MapSource,
    RouteType,
    MapContent,
    MapControls,
    MapLocateButton,
    MapTrafficButton,
    MapZoomInButton,
    MapZoomOutButton,
    Marker,
    Geocoder,
    Modal,
    WebView,
} from 'ufs-mobile-platform'

import { defaultValues } from "../models/Models"

import {Enums as EnumsAppAll} from "mrmkmcib-app"
import * as util from '../common/Util'
import { EnumsApp } from "mrmkmcib-app"
import { Models as ModelsApp, ErrorModal, LoaderWithText, FullScreenError } from "mrmkmcib-app"
import {IFullScreenErrorProps} from "mrmkmcib-app"
import {getFullScreenError} from './shared/ViewFullScreenError'
import { EnumsCrm } from "mrmkmcib-crm"
import { Models as ModelsCrm } from "mrmkmcib-crm"
import { EnumsDirectory } from "mrmkmcib-directory"
import { Models as ModelsDirectory } from "mrmkmcib-directory"
import { EnumsKnowledgebase } from "mrmkmcib-knowledgebase"
import { Models as ModelsKnowledgebase } from "mrmkmcib-knowledgebase"
import { EnumsNews } from "mrmkmcib-news"
import { Models as ModelsNews } from "mrmkmcib-news"
import { EnumsNotice } from "mrmkmcib-notice"
import { Models as ModelsNotice } from "mrmkmcib-notice"
import { EnumsScheduler } from "mrmkmcib-scheduler"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models } from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import ContainerMemberList from "../containers/ContainerMemberList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"
import { SearchInput, } from 'mrmkmcib-ui'

const getRightViewPlaceholder = (): React.ReactElement<View>=> (
    <View testID = {`${new Date().getTime()}-07d9e53e-dc26-11e7-9296-cec278b6b50a`}
          style = {Styles.emptyRightView} />
)

import * as Utils from "../common/Util"

const getActivityExecutor = (props: IProps) => {
    const executor = props.currentCustomerManaged && props.currentCustomerManaged.memberList ? props.currentCustomerManaged.memberList.data.find((item: ModelsApp.Employee) => {
        return item.isGeneral
    }) : null
    if (executor) {
        return executor.fullName
    }
    return 'Нет'
}



const getActivityMemberList = (props:IProps):React.ReactElement<View> => (
<View style={Styles.memberListContent}>
    <View testID={`test-id-d331abfa-a8f9-11e7-abc4-cec278b6b50a`}
style={Styles.memberListViewTitle}>
        <Text testID={`test-id-c7e1e9e0-a8f9-11e7-abc4-cec278b6b50a`}
style={Styles.memberListTextTitle}>
            Команда задачи
        </Text>
    </View>
    <View style = {Styles.memberListViewPerson}>
        <Text testID={`test-id-activity-deatails-people-row-Agent`}
style={Styles.memberListTextPerson}>

{Array.isArray(props.inputMemberList.data) && props.inputMemberList.data.length > 0 ? 
    Utils.getActivityMemberListOutput(props.inputMemberList) : 
    Utils.getCustomerActivityExcludeExecutorName(props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                            props.currentCustomerManaged : props.currentCustomer, 'Нет')}
        </Text>
    </View>
    <View testID={`test-id-activity-deatails-people-row_6-Team`} style={Styles.memberListViewButton}>
    {
            props.currentCustomerManaged ? 
            null
        : 
            
            <Button testID={`test-id-activity-deatails-people-row_7-Team`}
                        onExecute={()=>props.navigateToMemberListScreenPage()} 
            >
                <Icon testID={`test-id-activity-deatails-people-row_8-Team`} type={IconType.MrmLink}/>
            </Button>
            
    }
    </View>
</View>
)


const getMainPage: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View | LoaderWithText | FullScreenError> => {
    if (props.activitySaveError && props.activitySaveError.code){
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityExclude',
            title: props.activitySaveError.comment,
            description: props.activitySaveError.message,
            onRefresh: props.callPostCustomerActivityExcludeCreate
        })
    }
    if (props.activitySaveInProgress) {
        return <View testID='test-id-97bebe99-ae8c-7fa1-5cac-d27629d1653e' style={Styles.LoaderWrapper}>
            <LoaderWithText text = 'Создание задачи' testID='test-id-0c09b8fe-e3c2-0f95-0645-cba644a2248c' />
        </View>
    }
    return (
        <View testID='test-id-334ef8ed-ce3f-724a-3e10-be83a247d82c' style={Styles.content}>
            <View testID='test-id-3bbff54d-84ad-8487-7e15-b13ee1357f88' style={Styles.content}>

                <View testID='test-id-beed3673-86a1-a6c3-db19-f9eb389ec60f' style={Styles.contentSectionCustomer}>
                    <View testID='test-id-1899ea6b-2b0e-6ccd-e192-9c58495f19eb' style={[Styles.selectCustomer, Styles.centered]}>
                        <View  testID='test-id-1899ea6b-2b0e-6ccd-e192-9c58495f19e1' style={Styles.fixedWidth}>
                            <Label testID='test-id-f5e758b6-85a8-32aa-eaa7-c41b6e0ecf88' header={''}
                                text={'Дочерняя организация'} block={true}>
                                <Text
                                    testID='test-id-24056b15-8033-ef02-a9e6-8a60b2991923'>{props.inputCustomer && (props.inputCustomer.id != null && props.inputCustomer.id != '') ?
                                    props.inputCustomer.name || props.inputCustomer.shortName
                                    : 'Выбрать'}
                                </Text>
                            </Label>
                        </View>
                        <Button testID='test-id-c7810747-5a5a-2ed1-6a00-e68796c713e3' onExecute={() => {
                                props.navigateToCustomerPickerScreen()
                            }}>
                                <Icon testID='test-id-053560ab-9f17-06dd-1ad4-74a01da76420' type={IconType.MrmLink} />
                        </Button>
                    </View>
                </View>
                {props.customerActivityExcludeValidationCustomer ?
                    <Text testID='test-id-317604e1-3dc7-0474-11fe-356b5dbac027' style={Styles.validationError}>
                        {props.customerActivityExcludeValidationCustomer}
                    </Text> :
                    null
                }
                <View testID='test-id-510d3a50-9a4b-6117-641b-78a48a0ddc3e' style={Styles.contentSectionCustomer}>
                        <Label testID='test-id-0c64d954-d97d-4cb1-067d-8e8f143423ae' header={''}
                            text={'Родительская организация'} block={true}>
                            <Text
                                testID='test-id-06d6de68-40a4-c36f-b11a-cbca24823b62'>{props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                                props.currentCustomerManaged.name || props.currentCustomerManaged.shortName :
                                props.currentCustomer.name || props.currentCustomer.shortName
                            }</Text>
                        </Label>
                </View>
                <View testID='test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1' style={Styles.contentSection}>
                    <Label testID='test-id-1f807d32-832e-56f3-fcd6-2c9fdc2a8afb' header={''} text={'Тип задачи'}
                        block={true}>
                        <Text testID='test-id-289732fb-a3c9-64d0-9e46-992d1cc13fe2'>{'Включение в организацию'}</Text>
                    </Label>
                </View>

                     {props.customerActivityExcludeValidationComment ?
                        <Text testID='test-id-e21ab1ef-8fb5-756c-e66f-97d943b012ea'
                             style={Styles.validationError}> {props.customerActivityExcludeValidationComment} </Text> : null}

                <View testID='test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1' style={Styles.contentSectionMeaning}> 
                                    <TextInput testID='test-id-fb09dbda-80b7-11e7-bb31-be2e44b06b34'
                                               value={props.inputComment || ""}
                                               label="Cуть"
                                               onChange={props.performInputComment}
                                               placeholder="Введите суть"
                                               maxLength = {1000}
                                    >
                                    </TextInput>
          
                </View>
                <View testID='c24893f0-e2e5-4e90-87d3-23e1ddeffed2' style={Styles.contentSection}>
                                  {
                                      getActivityMemberList (props)
                                  }
                </View>

            </View>
        </View>
    )
}



const renderCustomerSearchResults: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View | LoaderWithText> => {
    if (props.searchError){
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityWzcludeSearch',
            title: props.searchError.comment,
            description: props.searchError.message,
            onRefresh: props.performSearch
        })
    }
    if (props.searchInProgress) {
        return (<LoaderWithText text = 'Поиск компании'  testID='test-id-42f62b65-5448-e433-340a-f7db9ce46858'/>)
    }

    if (props.inputSearch == null || props.inputSearch === '') {
        return (
            <View testID='test-id-f367e7fa-724c-98c2-7b55-776756e22472' style={Styles.searchNotFoundTextWrapper}>
                <Text testID='test-id-6b0fd76b-ce3c-b1b0-6653-da537f09761e' style={Styles.searchNotFoundText}>
                    {'Поиск компании'}
                </Text>
            </View>
        )
    }

    if (props.inputSearch != null &&
        props.inputSearch !== '' &&
        (props.customerSearchList == null ||
         props.customerSearchList.data == null ||
         props.customerSearchList.data.length == 0)
        ) {
        return (
            <View testID='test-id-5be89e3d-217d-c281-0a78-d457906d17f3' style={Styles.searchNotFoundTextWrapper}>
                <Text testID='test-id-88e0787b-612f-a71b-5072-8ebcb607bd19' style={Styles.searchNotFoundText}>
                    {'Результатов не найдено'}
                </Text>
            </View>
        )
    }

    return (
        <Table testID='test-id-923579bb-837e-ea2f-0c10-7ac9ea19267f'>
            <TableBody testID='test-id-6c1843da-2248-1d71-7095-c70abc8baf73'>
                {props.customerSearchList.data.map((item: Models.Customer, index: number) => {
                    return (
                        <TableRow
                            testID='test-id-7bafd015-89ae-8510-5b81-4a70cd67116f'
                            key={`${index}-${item.id}`}
                            onClick={() => {
                                props.performInputCustomer(item)
                            }}
                        >
                            <TableCell testID='test-id-aa3ebdec-fb8e-9b78-daf8-c3381985e8f5'>
                                <View
                                    testID='test-id-08a5ff56-a3ab-c6ae-4383-9719281ad593'
                                    style={Styles.InlineWrapper}
                                >
                                    <View
                                        testID='test-id-49c04007-1b93-0b66-711a-cf8646ff7624'
                                        style={Styles.TopRow}
                                    >
                                        {item.role && item.role.value ?
                                            <View
                                                testID='test-id-6f350b63-254d-45c6-074b-373f1f768451'
                                                style={Styles.OrangeLabel}
                                            >
                                                <Text
                                                    testID='test-id-08820981-0f04-5113-16e8-41e14e9cef17'
                                                    style={Styles.OrangeLabelText}
                                                >
                                                    {Utils.getRoleString(item.role.value)}
                                                </Text>
                                            </View> :
                                            null
                                        }
                                        <Text
                                            testID='test-id-cf70d963-d60a-5958-e4f8-0914ee6a0377'
                                            style={Styles.OrgType}
                                        >
                                            {item.organizationType.value}
                                        </Text>
                                    </View>
                                    <View testID='test-id-4d8f6204-7de5-459d-9f50-8e3a389f7dbb'>
                                        <Text
                                            testID='test-id-5f9beaad-4ac0-905c-936b-1b9737b53e59'
                                            style={Styles.Name}
                                        >
                                            {item.name ? item.name : item.shortName}
                                        </Text>
                                    </View>
                                </View>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

const renderCustomerSearch: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-92ef4c16-11d5-88f2-709d-09914db0e9f2' style={Styles.content}>
            <View testID='test-id-7acd23fe-6e1d-fb9f-05c5-8fb3eebf06990980989' style={{height: 44, overflow: 'hidden'}}>
                <SearchInput
                    value={props.inputSearch}
                    placeholder={'Введите название'}
                    onChange={props.performInputSearch}
                    onCancel={props.performCancelSearchCustomer}
                    autoFocus={true}
                />
            </View>
            <View testID='test-id-bdfca03b-71c5-748c-87b3-f893bc0eaab2'>
                <Switch testID='test-id-8c0c2590-9aae-48b7-2de1-e4771f457dee'
                    checked={props.inputSearchManagedOnly}
                    label='Только мои клиенты'
                    onChange={() => props.performInputSearchManagedOnly(!props.inputSearchManagedOnly)}
                />
            </View>
            {renderCustomerSearchResults(props)}
        </View>
    )
}


/*
 * UI stateless functional component presenter for "CustomerActivityExclude" container.
 */

export interface IProps {
    inputMemberList: Models.MemberList,
    navigateToMemberListScreenPage: ModelsCustomerActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE,
    navigateToCustomerPickerScreen: ModelsCustomerActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsCustomerActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsCustomerActivityExclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsCustomerActivityExclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsCustomerActivityExclude.PERFORM_SEARCH,
    performInputCustomer: ModelsCustomerActivityExclude.PERFORM_INPUT_CUSTOMER,
    callGetCustomer: ModelsCustomerActivityExclude.CALL_GET_CUSTOMER,
    performInputComment: ModelsCustomerActivityExclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsCustomerActivityExclude.PERFORM_CANCEL,
    performSave: ModelsCustomerActivityExclude.PERFORM_SAVE,
    callPostCustomerActivityExcludeCreate: ModelsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE,
    navigateBack: ModelsCustomerActivityExclude.NAVIGATE_BACK,
    performContainerReset: ModelsCustomerActivityExclude.PERFORM_CONTAINER_RESET,
    performChangeDisplayErrorModalWindow: ModelsCustomerActivityExclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW,
    isVisibleErrorModalWindow: boolean,
    inputSearch: string,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    customerActivityExcludeValidationComment: string | null,
    customerActivityExcludeValidationCustomer: string | null,
    inputCustomerFetching: boolean,
    inputCustomerError: Error | null,
    inputCustomerCachedDate: Date | null,
    activitySave: boolean,
    activitySaveInProgress: boolean,
    activityExcludeCreate: boolean,
    activityExcludeCreateFetching: boolean,
    activityExcludeCreateError: Error | null,
    activityExcludeCreateCachedDate: Date | null,
    currentCustomerManaged: Models.CustomerManaged,
    currentCustomer: Models.Customer,
    performCancelSearchCustomer: ModelsCustomerActivityExclude.PERFORM_CANCEL_SEARCH_CUSTOMER,
    searchInProgress: boolean,
    searchError: Error | null,
    activitySaveError: Error | null,
    testID: string

}
const getLoader = (text: string = ""):React.ReactElement<LoaderWithText> => (
    <LoaderWithText
        text = {text}
        testID= {`test-id-${new Date().getTime()}`} />

)

const getCustomerNoFoundView = (): React.ReactElement<View> => (
    <View testID='test-id-226a67ea-d27e-11e7-8941-cec278b6b50a'
          style={Styles.customerNoFoundView}>
        <Text style={Styles.customerNoFoundText}
              testID="test-id-28312092-d27e-11e7-8941-cec278b6b50a">
            Результатов не найдено
        </Text>
    </View>
)

const _getRole = (role: string, organizationType: ModelsApp.Classifier) => (
    <View testID='test-id-b9af9fe5-1445-b866-95b8-992defb083e2' style={Styles.OrangeLabel}>
        <Text testID='test-id-4b9a9ed4-bb71-f215-0f70-9457bf2b9233'
              style={Styles.OrangeLabelText}>
            {util.getRoleByOrganizationTypeString(role,
                organizationType && organizationType.code ? organizationType.code : null)}
        </Text>
    </View>
)


const getSplitPanel = (props: IProps): React.ReactElement<SplitPanel> => (
    <SplitPanel testID='test-id-4a722a55-579a-b8fd-6c4d-ae8392037f9a'
                id={Utils.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View)}>
        <ContentPanel testID='test-id-8e4c9e18-f1d1-5131-d794-36a2553de83b' style={{ backgroundColor: '#fff' }}>
            <Page testID='test-id-650ce95c-dbf4-a690-1304-e24e7c01324c' scrollEnabled={false}
                  content={getMainPage(props)}>
                <LeftPageHeader testID='test-id-5ddc377f-801f-0093-db81-516539125c85'>
                    <NavigationTextButton testID='test-id-be9b408e-4bbf-edd1-0b37-e89f2a7226ba'
                                          title='Отмена'
                                          onExecute={props.performCancel}
                    />
                </LeftPageHeader>
                <CenterPageHeader testID='test-id-a6ad7c27-1c6a-a7b4-f30b-6610870da351'>
                    <H2 testID='test-id-3c074829-550d-7b44-c557-c46e1cb60e68'>{'Новая задача'}</H2>
                </CenterPageHeader>
                <RightPageHeader testID='test-id-b60a3238-0122-be44-f0c9-77a6d8a6c709'>
                    <NavigationTextButton testID='test-id-fb8945df-8ecf-c2b6-ce7c-d8c24871dece'
                                          title={'Добавить'}
                                          onExecute={props.performSave}
                    />
                </RightPageHeader>

                }
            </Page>
            <Page testID='test-id-8049b3b1-0883-39c9-9028-601694c68d6b'
                  scrollEnabled={false}
                  content={renderCustomerSearch(props)}>
                <LeftPageHeader testID='test-id-f74f6796-147b-11e8-b642-0ed5f89f718b' />
            </Page>

            <Page testID='test-id-8e1a9f7c-88a1-11e7-bb31-be2e44b06b34'
                  content={<ContainerMemberList testID='test-id-e0954b46-8d91-4b52-b478-a964c5389dd0'/>}
                  scrollEnabled={true}>
                <LeftPageHeader testID='test-id-57853448-88a3-11e7-bb31-be2e44b06b34' />
       
            </Page>
        </ContentPanel>
    </SplitPanel>
)

const ViewCustomerActivityExclude: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    <View testID='test-id-d2e01bcd-c82a-fdb1-35e4-cd5d3ee8496d' style={Styles.main}>
        {getSplitPanel(props)}
    </View>


)

export default ViewCustomerActivityExclude