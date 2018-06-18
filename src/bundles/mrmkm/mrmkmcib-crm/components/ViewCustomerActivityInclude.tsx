/*
 * Created by Burnaev M.U.
 */

import React, { Component, PropTypes } from 'react'

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Styles from './styles/ViewCustomerActivityIncludeStyles'

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
import { Models as ModelsApp, ErrorModal, LoaderWithText, FullScreenError} from "mrmkmcib-app"
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
import {getFullScreenError} from './shared/ViewFullScreenError'

import { SearchInput } from 'mrmkmcib-ui'
import * as Utils from "../common/Util"


const getRightViewPlaceholder = (): React.ReactElement<View>=> (
    <View testID = {`${new Date().getTime()}-07d9e53e-dc26-11e7-9296-cec278b6b50a`}
          style = {Styles.emptyRightView} />
)

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


const getMainPage: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<LoaderWithText | View | FullScreenError> => {
    if (props.activitySaveError && props.activitySaveError.code){
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityExclude',
            title: props.activitySaveError.comment,
            description: props.activitySaveError.message,
            onRefresh: props.callPostCustomerActivityIncludeCreate
        })
    }
    if (props.activitySaveInProgress) {
        return <LoaderWithText text = 'Создание задачи' testID='test-id-f82e0e82-78f6-b439-7c6e-667471cd7f66' />

    }
    if (props.inputCustomerFetching) {
        return <LoaderWithText text = 'Загрузка списка клиентов' testID='test-id-8bb74f2c-8cce-1cbe-77da-525403868c9a' />

    }
    return (
        <View testID='test-id-85891f9c-3392-4008-9a77-29df14d182f1' style={Styles.content}>
                    <View testID='test-id-5420f8d9-98b4-a34d-49d3-89d5170fbd80' style={Styles.contentSectionCustomer}>
                <View testID='test-id-9241c500-6476-f256-d539-ec89a0d11893' style={[Styles.selectCustomer, Styles.centered]}>
                    <View testID='test-id-5420f8d9-98b4-a34d-49d3-89d5170fbd801' style={Styles.fixedWidth}>
                        <Label testID='test-id-d0600b9f-aa21-6e71-5445-d6aa8d2063ef' header={''}
                            text={'Родительская организация'} block={true}>
                            <Text
                                testID='test-id-00eaeafa-6b03-6e59-049e-b73f14d3cfa9'>{props.inputCustomer && (props.inputCustomer.id != null && props.inputCustomer.id != '') ?
                                    props.inputCustomer.name || props.inputCustomer.shortName
                                    : 'Выбрать'}
                            </Text>
                        </Label>
                    </View>
                    <Button testID='test-id-e05f973f-36f9-fd78-2ebc-ab4f584127b0' onExecute={() => {
                        props.navigateToCustomerPickerScreen()
                    }}>
                        <Icon testID='test-id-d957d53c-ec52-e532-5116-6b508f27359d' type={IconType.MrmLink} />
                    </Button>
                </View>
            </View>
            {props.customerActivityIncludeValidationCustomer ?
                <Text testID='test-id-919e2407-8d8d-16c2-f03b-b07a59af51f8'
                    style={Styles.validationError}>{props.customerActivityIncludeValidationCustomer}</Text> : null}
            <View testID='test-id-f9054051-2a1d-03db-6158-0542ba2b25a4' style={Styles.contentSection}>
                <Label testID='test-id-b0a147c1-6b55-2de5-beb6-b203db97b120' header={''} text={'Дочерняя организация'}
                    block={true}>
                    <Text
                        testID='test-id-a0564233-2a74-2fdf-6051-08f6ef8f702c'>{props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                            props.currentCustomerManaged.name || props.currentCustomerManaged.shortName :
                            props.currentCustomer.name || props.currentCustomer.shortName
                        }</Text>
                </Label>
            </View>
            <View testID='test-id-e4474026-cd38-e1f7-ac52-a64d21255e86' style={Styles.contentSection}>
                <Label testID='test-id-30cac6ef-3222-751e-9e7d-e12e8bddd283' header={''} text={'Тип задачи'}
                    block={true}>
                    <Text testID='test-id-12b6c205-92f6-9856-9048-2cf2191bffe2'>{'Включение в организацию'}</Text>
                </Label>
            </View>
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
        
    )
}

const renderCustomerSearchResults: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View | LoaderWithText | FullScreenError> => {
    if (props.searchError){
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityWzcludeSearch',
            title: props.searchError.comment,
            description: props.searchError.message,
            onRefresh: props.performSearch
        })
    }
    if (props.searchInProgress) {
        return (<LoaderWithText text = 'Поиск компании' testID='test-id-1866ce35-7a6d-227f-1a2f-a59b0df9486e' />)
    }
    if (props.inputSearch == null || props.inputSearch === '') {
        return (
            <View testID='test-id-3a78c10f-5889-9ae5-a749-2f6daae4951b' style={Styles.searchNotFoundTextWrapper}>
                <Text testID='test-id-dd8c1231-318b-5e47-b9c1-988310b2eef9' style={Styles.searchNotFoundText}>
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
            <View testID='test-id-479f1987-d780-7ac1-7928-8812cd99b3c3' style={Styles.searchNotFoundTextWrapper}>
                <Text testID='test-id-b9035366-eaa3-e7e1-3f6d-d76866a736aa' style={Styles.searchNotFoundText}>
                    {'Результатов не найдено'}
                </Text>
            </View>
        )
    }
    return (
        <Table testID='test-id-91af6387-68d7-879a-cdcd-ebd2811ae7fa'>
            <TableBody testID='test-id-a2fc54e0-0427-ef11-fb34-413e4254f07f'>
                {props.customerSearchList.data.map((item: Models.Customer, index: number) => {
                    return (
                        <TableRow
                            testID='test-id-7a745ad9-805d-9b2d-f66b-fbde67dcbd17'
                            key={`${index}-${item.id}`}
                            onClick={() => {
                                props.performInputCustomer(item)
                            }}
                        >
                            <TableCell testID='test-id-41ba211f-e268-8df9-e9d6-183fa4a6c0a9'>
                                <View
                                    testID='test-id-def8bc70-a95a-4ccf-636c-b37be920fdf0'
                                    style={Styles.InlineWrapper}
                                >
                                    <View
                                        testID='test-id-e16adb9d-9e2d-d6c0-e52e-a8da719c4e4b'
                                        style={Styles.TopRow}
                                    >
                                        {item.role && item.role.value ?
                                            <View
                                                testID='test-id-55e8b7af-1bcb-819c-2a0b-47e9db8e8d21'
                                                style={Styles.OrangeLabel}
                                            >
                                                <Text
                                                    testID='test-id-2c4acece-9706-cbad-5c15-3b21f51315db'
                                                    style={Styles.OrangeLabelText}
                                                >
                                                    {Utils.getRoleString(item.role.value)}
                                                </Text>
                                            </View> :
                                            null
                                        }
                                        <Text
                                            testID='test-id-e0f3d196-9b0b-4a18-fa7b-0a431677feb7'
                                            style={Styles.OrgType}
                                        >
                                            {item.organizationType.value}
                                        </Text>
                                    </View>
                                    <View testID='test-id-0e5b7c85-9729-cd05-1556-254665d092ce'>
                                        <Text
                                            testID='test-id-29309392-941f-45ad-7315-bf83c858fc2b'
                                            style={Styles.Name}
                                        >
                                            {item.name}
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
        <View testID='test-id-e683f41a-780c-3dd0-3f5f-4e9baae74c8e' style={Styles.content}>
            <View testID='test-id-7acd23fe-6e1d-fb9f-05c5-8fb3eebf0699' style={{ height: 44, overflow: 'hidden' }}>
                <SearchInput
                    value={props.inputSearch}
                    placeholder={'Введите название'}
                    onChange={props.performInputSearch}
                    onCancel={props.performCancelSearchCustomer}
                    autoFocus={true}
                />
            </View>
            <View testID='test-id-b5123b8c-b81a-e095-22b5-c8f532d014d2'>
                <Switch testID='test-id-2e3d3094-a314-09a2-6fdf-cecba5fb486c'
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
 * UI stateless functional component presenter for "CustomerActivityInclude" container.
 */

export interface IProps {
    inputMemberList: Models.MemberList,
    navigateToMemberListScreenPage: ModelsCustomerActivityInclude.NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE,
    navigateToCustomerPickerScreen: ModelsCustomerActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsCustomerActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsCustomerActivityInclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsCustomerActivityInclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsCustomerActivityInclude.PERFORM_SEARCH,
    performInputCustomer: ModelsCustomerActivityInclude.PERFORM_INPUT_CUSTOMER,
    callGetCustomer: ModelsCustomerActivityInclude.CALL_GET_CUSTOMER,
    performInputComment: ModelsCustomerActivityInclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsCustomerActivityInclude.PERFORM_CANCEL,
    performSave: ModelsCustomerActivityInclude.PERFORM_SAVE,
    callPostCustomerActivityIncludeCreate: ModelsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE,
    navigateBack: ModelsCustomerActivityInclude.NAVIGATE_BACK,
    performContainerReset: ModelsCustomerActivityInclude.PERFORM_CONTAINER_RESET,
    performChangeDisplayErrorModalWindow: ModelsCustomerActivityInclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW,
    inputSearch: string,
    customerSearchError: string,
    isSearchError: boolean,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    customerActivityIncludeValidationComment: string | null,
    customerActivityIncludeValidationCustomer: string | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    inputCustomerFetching: boolean,
    inputCustomerError: Error | null,
    inputCustomerCachedDate: Date | null,
    activitySave: boolean,
    activitySaveInProgress: boolean,
    activitySaveError: Error | null,
    activityIncludeCreate: boolean,
    activityIncludeCreateFetching: boolean,
    activityIncludeCreateError: Error | null,
    activityIncludeCreateCachedDate: Date | null,
    currentCustomerManaged: Models.CustomerManaged,
    currentCustomer: Models.Customer,
    testID: string,
    isVisibleErrorModalWindow: boolean,
    performCancelSearchCustomer: ModelsCustomerActivityInclude.PERFORM_CANCEL_SEARCH_CUSTOMER,
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

const getSplitPanel = (props:IProps): React.ReactElement<View> =>(
    <SplitPanel testID='test-id-dc788b07-f5c9-e445-0936-8936be8c2c13'
                id={Utils.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View)}>
        <ContentPanel testID='test-id-2bc9932c-5762-aba3-44dc-546fd4416db3' style={{ backgroundColor: '#fff' }}>
            <Page testID='test-id-a1a03b7d-cf4e-dc46-9fd7-e6605a20456e' scrollEnabled={true}
                  content={getMainPage(props)}>
                <LeftPageHeader testID='test-id-ab00c385-fb89-eed5-59a4-8ec4add566fb'>
                    <NavigationTextButton testID='test-id-29901923-be17-475c-f199-dc9730577177'
                                          title='Отмена'
                                          onExecute={props.performCancel}
                    />
                </LeftPageHeader>
                <CenterPageHeader testID='test-id-9862ba42-bd7c-9aa5-27d2-31f3b31e2d8c'>
                    <H2 testID='test-id-2c61c8b0-6cae-c325-dab2-3913b3c17b1a'>{'Новая задача'}</H2>
                </CenterPageHeader>
                <RightPageHeader testID='test-id-bb67cf53-8752-c845-29a7-53362b8f3aa9'>
                    <NavigationTextButton testID='test-id-b351b42a-1ee2-7084-e49e-e8384a801ab5'
                                          title={'Добавить'}
                                          onExecute={props.performSave}
                    />
                </RightPageHeader>
                }
            </Page>
            <Page testID='test-id-891c141b-bfca-b59f-923a-331e5b4d1696' scrollEnabled={false}
                  content={renderCustomerSearch(props)}>
                <LeftPageHeader testID='test-id-c2cdfb78-25d1-1c2b-bdfc-f25c11ab940b' />
            </Page>
            <Page testID='test-id-8e1a9f7c-88a1-11e7-bb31-be2e44b06b34'
                  content={<ContainerMemberList testID='test-id-e0954b46-8d91-4b52-b478-a964c5389dd0'/>}
                  scrollEnabled={true}>
                <LeftPageHeader testID='test-id-57853448-88a3-11e7-bb31-be2e44b06b34' />
       
            </Page>
        </ContentPanel>
    </SplitPanel>
)
const ViewCustomerActivityInclude: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    <View testID='test-id-02274499-e57e-d251-d441-2233b8a0df9f' style={Styles.main}>
        {getSplitPanel(props)}
    </View>

)

export default ViewCustomerActivityInclude