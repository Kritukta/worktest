/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewCustomerStyles'
import CustomerHoldingManaged from './Customer/CustomerHoldingManaged'
import CustomerManaged from './Customer/CustomerManaged'
import Customer from './Customer/Customer'
import {
    ShareDataView,
    ModelsCustomerDashboard,
} from 'mrmkmcib-dashboard'

import {
    AccessoryPanel,
    Button,
    CenterPageHeader,
    ContentPanel,
    H2,
    LeftPageHeader,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationBackButton,
    Page,
    RightPageHeader,
    SplitPanel,
    Text,
    View,
    Icon,
    IconType,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from 'ufs-mobile-platform'

import { Models } from 'mrmkmcib-crm'

import {
    Models as ModelsApp,
    LoaderWithText,
    RefreshBar,
    FullScreenError,
} from 'mrmkmcib-app'

import {
    Models as ModelsScheduler,
    ContainerScope,
    ContainerActivity,
    EnumsScheduler,
} from 'mrmkmcib-scheduler'


import { Enums } from '../Enums'

import * as ModelsAppCRM from '../models/ModelsAppCRM'
import * as ModelsCustomer from '../models/ModelsCustomer'
import * as ModelsCustomerEditor from '../models/ModelsCustomerEditor'
import * as ModelsProductList from '../models/ModelsProductList'
import * as ModelsAgentList from '../models/ModelsAgentList'
import Error from '../models/Error'
import ContainerMemberList from '../containers/ContainerMemberList'
import ContainerOccasionList from '../containers/ContainerOccasionList'
import ContainerEmployee from '../containers/ContainerEmployee'
import ContainerDealListSearch from '../containers/ContainerDealListSearch'

import {
    ICON_TYPES,
    IconItem,
    SearchInput,
    RNTableView,
    KeyboardAvoidingView,
} from 'mrmkmcib-ui'

import * as Utils from '../common/Util'

// получить имя клиента для вывода в заголовке в режиме развернутой вкладки аналитика
const getCustomerName = (props: IProps) => {
    const customer: Models.CustomerManaged | Models.Customer = props.currentCustomerManaged.id ? props.currentCustomerManaged : props.currentCustomer
    return (
        <View testID='test-id-dc1abff9-e688-6b0d-2a0d-b5233884d704' style={Styles.Header}>
            <Text testID='test-id-2ab3b072-3f56-7c97-0887-c74ef6c06958'
                style={Styles.HeaderTitle}>{customer.name}</Text>
            <Text testID='test-id-9cddfd24-2f21-0857-c118-cb56b2837dfb'
                style={Styles.HeaderOrganizationType}>{props.currentCustomerManaged.organizationType.value}</Text>
        </View>
    )
}

const getRefreshBar = (props: IProps) => {
    if (props.customerFetching) {
        return null
    }
    if (props.currentTab == Enums.CustomerManagedTab.DealList) {
        return null
    }

    if (!props.customerCachedDate) {
        return null
    }

    if (props.currentTab == Enums.CustomerManagedTab.ProductTypeList) {
        return null
    }

    if (props.currentTab == Enums.CustomerManagedTab.Dashboard) {
        return null
    }

    return (
        <RefreshBar
            testID='test-id-fef42946'
            date={props.customerCachedDate}
            performRefresh={props.performFlush} />
    )
}

const customerRow = (props: IProps, item: Models.Customer): React.ReactElement<View> => {
    return (
        <Table testID={`customerRow_1${item.id}`}>
            <TableBody testID={`customerRow_2${item.id}`}>
                <TableRow
                    testID={`customerRow_3${item.id}`}
                    key={item.id}
                    onClick={() => {
                        props.performCustomerOpen(item.id, Enums.CustomerMode.SameType)
                    }}>
                    <TableCell testID={`customerRow_4${item.id}`}>
                        <View
                            testID={`customerRow_5${item.id}`}
                            style={Styles.SearchResultRowWrapper}>
                            <View
                                testID={`customerRow_6${item.id}`}
                                style={Styles.flex}>
                                <View
                                    testID={`customerRow_7${item.id}`}
                                    style={Styles.TopRow}>
                                    {
                                        item.role.value ?
                                        <View
                                            testID={`customerRow_8${item.id}`}
                                            style={Styles.OrangeLabel}>
                                            <Text
                                                testID={`customerRow_9${item.id}`}
                                                style={Styles.OrangeLabelText}>
                                                {
                                                    Utils.getRoleString(item.role.value)
                                                }
                                            </Text>
                                        </View>
                                        : null
                                    }
                                    <Text
                                        testID={`customerRow_10${item.id}`}
                                        style={Styles.OrgType}>
                                        {
                                            item.organizationType.value
                                        }
                                    </Text>
                                </View>
                                <View testID={`customerRow_11${item.id}`}>
                                    <Text
                                        testID={`customerRow_11${item.id}`}
                                        style={Styles.Name}>
                                        {
                                            item.name || item.shortName
                                        }
                                    </Text>
                                </View>
                            </View>
                            <Button
                                testID={`customerRow_12${item.id}`}
                                onExecute={() => {
                                    props.performCustomerOpen(item.id, Enums.CustomerMode.SameType)
                                }}>
                                <Icon
                                    testID={`customerRow_13${item.id}`}
                                    type={IconType.MrmLink} />
                            </Button>
                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

const getAffiliateListSearchContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    let searchLocation = ''
    if (props.currentCustomerManaged.organizationType != null) {
        switch (props.currentCustomerManaged.organizationType.code) {
            case 'Account': {
                searchLocation = 'юр. лица'
                break
            }
            case 'Holding': {
                searchLocation = 'холдинга'
                break
            }
            case 'Branch': {
                searchLocation = 'филиала'
                break
            }
        }
    }
    return (
        <View testID='test-id-2ea92f3e-735e-b07d-1430-781960ef1f55'>
            {(props.inputSearchAffiliateList === '' || props.affiliateSearchList.data.length > 0) ?
                <View
                    testID='test-id-20015874-c4de-fca7-aad1-3922f51721c7'
                    style={(props.inputSearchAffiliateList === null || props.inputSearchAffiliateList === '') ?
                        Styles.searchNotFoundTextWrapperCentered :
                        Styles.searchNotFoundTextWrapper}>
                    <Text
                        testID='test-id-6e04ac9d-2b7d-a2fa-f3de-2eb5b35be631'
                        style={Styles.searchNotFoundText}>
                        {
                            `Поиск по составу ${searchLocation}`
                        }
                    </Text>
                    <Text
                        testID='test-id-5939d001-dd30-2055-ee7e-f47441c11548'
                        style={Styles.searchNotFoundTextBold}>
                        {
                            props.currentCustomerManaged.name || props.currentCustomerManaged.shortName
                        }
                    </Text>
                </View>
                :
                null
            }
            {
                (props.inputSearchAffiliateList !== '' && props.affiliateSearchList.data.length === 0) ?
                    <View
                        testID='test-id-f64126db-1146-1698-c2c9-f67358b2a223'
                        style={Styles.searchNotFoundTextWrapperCentered}>
                        <Text
                            testID='test-id-118f66cd-e95d-1308-61d4-8c8e0b4c7e0c'
                            style={Styles.searchNotFoundText}>
                            {
                                'Ничего не найдено'
                            }
                        </Text>
                    </View> :
                    <View
                        testID='test-id-f28d3cee-edee-8319-31c4-c1142b654b2a'
                        style={Styles.flex}>
                        <RNTableView
                            testID='test-id-4aefd1b6-89a9-d7e7-0b1b-62e84dcb12de'
                            items={props.affiliateSearchList.data}
                            rowHasChanged={(r1: any, r2: any) => {
                                return r1 !== r2
                            }}
                            renderRow={(item: any) => customerRow(props, item)} />
                    </View>
            }
        </View>
    )
}

const getCustomerContent = (props: IProps) => {
    if (props.isSearchModeAffiliateList) {
        return getAffiliateListSearchContent(props)
    }

    if (props.customerFetching) {
        return (
            <View
                testID='test-id-fef42946-c6db-4f77-469f-daa01c19eed9'
                style={Styles.LoaderWrapper}>
                <LoaderWithText
                    testID='test-id-be012551-8804-ec8c-99c5-a298d21a347d'
                    text={'Загрузка карточки клиента'}/>
            </View>
        )
    }

    if (props.currentCustomerManaged.id && props.currentCustomerManaged.id != '') {

        if (props.currentCustomerManaged.isHolding) {
            return (
                <View testID='test-id-c4078d0b-a150-fe44-a4fe-2ecfce45a8f7' style={Styles.main}>
                    <CustomerHoldingManaged testID='test-id-43716b04-167a-fa5c-e9d4-829e0498fdae'

                        customerManaged={props.currentCustomerManaged}
                        {...props}
                    />
                    {getRefreshBar(props)}
                </View>
            )
        } else {
            return (
                <View testID='test-id-09cb42ea-90a0-a8c3-3a66-ad2865cc7fca' style={Styles.FixedHeight}>
                    <CustomerManaged testID='test-id-c694701b-db82-19f7-30ed-c10863b65208'
                        customerManaged={props.currentCustomerManaged}
                        {...props}
                    />
                    {getRefreshBar(props)}
                </View>
            )
        }

    } else if (props.currentCustomer.id && props.currentCustomer.id != '') {
        return (
            <View testID='test-id-3f3ff2c0-f1f6-238f-0b6a-6a349f578b04' style={Styles.FixedHeight}>
                <Customer testID='test-id-7cde1c0c-1215-7e2c-f3ce-dfd42f244955'
                          customer={props.currentCustomer}

                          {...props}
                />
                {getRefreshBar(props)}
            </View>
        )
    }

    return (
        <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-236164d8b6e2'}
                         title={
                             props.customerError && props.customerError.comment && props.customerError.comment !== '' ?
                                 props.customerError.comment :
                                'Данные по клиенту не были получены'
                         }
                         description={
                             props.customerError && props.customerError.message && props.customerError.message !== '' ?
                                 props.customerError.message :
                                 null
                         }
                         onRefresh={() => props.performFlush()}
        />
    )
}
const getTypeOfClientForActivityList = (props: IProps) => {
    if (Utils.isCustomerCategoryConglomerate(props.currentCustomerManaged.category)) {
        return EnumsScheduler.SchedulerMode.Conglomerate
    }
    if (Utils.isTypeOrganizationHolding(props.currentCustomerManaged.organizationType)) {
        return EnumsScheduler.SchedulerMode.Holding
    }
    return EnumsScheduler.SchedulerMode.Customer
}
const getAccessoryContent = (props: IProps): React.ReactElement<View> => {

    if (props.currentCustomerManaged.id && props.currentCustomerManaged.id != '') {
        return (<AccessoryPanel testID='test-id-f511r5de-3c08-37ce-7827-mf3b9a88f9q1'>
                { !props.isActivityAccessError ?
                        <ContainerScope
                            instanceType={getTypeOfClientForActivityList(props)}
                            testID='test-id-e8dee869-d9c6-bb3a-d58a-1437049748q9'/> :
                    <View testID="aebc337a-d836-47fe-acf1-0b790c2d2e75" /> }
            </AccessoryPanel>
        )
    }

    return (
        <AccessoryPanel testID='test-id-f511r5de-3c08-37ce-7827-mf3b9a55f9q1'>
            {
                !props.isActivityAccessError ?
                    <Page
                        testID='test-id-77f3e0cb-641d-637f-97f7-1d3d65f722qa'
                        content={
                            props.currentCustomerManaged.id && props.currentCustomerManaged.id != '' ?
                                <LoaderWithText
                                    testID='test-id-be012551-8844-ec8c-99c5-a298d21a347d'
                                    text={'Загрузка'}
                                /> :
                                <View
                                    testID='test-id-be012551-8844-ec8c-99c5-a298d21a347d99'
                                />
                        }>
                    </Page> :
                    <View testID="aebc337a-d836-47fe-acf1-0b790c2d2e75" />
            }

        </AccessoryPanel>
    )
}

const getShareDataView = (props: IProps) => {
    return (
        <ShareDataView
            testID='test-id-c331d384-886c-f1df-fb71-75256c190518'
            isDashboardExpandedMode={props.isDashboardExpandedMode}
            fromOutside={true}
            isRepresentationVisible={false}
            {...props}
        />
    )
}

const toggleShareDataPopover = (props: IProps) => {
    if (props.isVisiblePopoverShare) {
        props.performPopoverShareHide()
    } else {
        props.performPopoverShareShow()
    }
}

const getLeftPageHeader = (props: IProps) => {
    if (props.isSearchModeAffiliateList) {
        return (
            <LeftPageHeader testID='test-id-68da025c-557a-0a1a-8408-0b7600ca435812123123'>
                    <SearchInput
                        value={props.inputSearchAffiliateList}
                        placeholder={'Поиск по наименованию'}
                        onChange={props.performInputSearchAffiliateList}
                        onCancel={props.performSearchAffiliateListDisable}
                        autoFocus={true}
                        drawBottomBorder={ true }
                    />
            </LeftPageHeader>
        )
    } else {
        return (
            <LeftPageHeader testID='test-id-d4d20e45-befb-ba01-0e41-64054f5963f4'>
                <NavigationBackButton
                    testID='test-id-e9cff21a-6e90-1586-3b68-d0349acda868'
                    title={false}
                    onClick={props.navigateBack} />
            </LeftPageHeader>
        )
    }
}

const getCenterPageHeader = (props: any) => {
    if (props.isSearchModeAffiliateList) {
        return (
            <CenterPageHeader testID='test-id-f0b5ad2b-f9bd-6a7d-e305-9008abeca791' />
        )
    } else {
        return (
            <CenterPageHeader testID='test-id-cf084ae4-c795-b554-48ee-142ca8d4d248'>
                {
                    props.isDashboardExpandedMode ?
                        getCustomerName(props) :
                        <H2 testID='test-id-fd3f3c0d-1219-f4b2-8ccf-98d32473aad1'>
                            Карточка клиента
                        </H2>
                }
            </CenterPageHeader>
        )
    }
}

const getRightPageHeader = (props: IProps) => {
    if (props.isSearchModeAffiliateList) {
        return (
            <RightPageHeader testID='test-id-a726b522-2a30-b014-3e71-f529198c7a83' />
        )
    } else {
        return (props.currentTab == Enums.CustomerManagedTab.Dashboard ?
            <RightPageHeader testID='test-id-2cfa8609-844b-5233-f591-e2dce031d010'>
                <IconItem
                    testID='test-id-8d0993b4-c860-72f1-4179-cde890351ce8'
                    type={props.isDashboardExpandedMode ? ICON_TYPES.RESIZE : ICON_TYPES.RESIZE_MAX}
                    onPress={() => props.performDashboardExpandedModeToggle()}
                />
                {/*FIXME отключение функционала в рамках релиза 2018-1*/}
            </RightPageHeader> :
            <RightPageHeader testID='test-id-2cfa8609-844b-5233-f591-e2dce031d010-refresh'>
                {/* <NavigationIconButton testID='test-id-0bf999f6-78e5-d46a-541e-0f6441e42140'
                type={NavigationIconButtonType.props.currentTab == Enums.CustomerManagedTab.DashboardREFRESH}
                onExecute={props.performFlush}

            /> */}
            </RightPageHeader>
        )
    }
}

const getAccessoryPanel = (props: IProps) => {
    return (
        !props.isDashboardExpandedMode ?
        getAccessoryContent(props) :
        <View testID='test-id-879a02ff-1c9a-aaa6-97c5-d35a48638745' />
    )
}

const getCustomerContentKeyboardAvoiding = (props: IProps): React.ReactElement<View> => (
    <KeyboardAvoidingView
        behavior={'padding'}
        contentContainerStyle={{flex: 1, maxHeight: 740}}
        keyboardVerticalOffset={0}
        style={{flex: 1}}>
        {getCustomerContent(props)}
    </KeyboardAvoidingView>
)

const getKeyboardAvoidingContainer = (child: React.ReactElement<View>): React.ReactElement<View> => (
    <KeyboardAvoidingView
        behavior={'padding'}
        contentContainerStyle={{flex: 1, maxHeight: 740}}
        keyboardVerticalOffset={0}
        style={{flex: 1}}>
        {child}
    </KeyboardAvoidingView>
)

/*
 * UI stateless functional component presenter for "Customer" container.
 */

export interface IProps {
    performInputProductListAgreementStatus: ModelsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS,
    performDashboardExpandedModeToggle: ModelsCustomer.PERFORM_DASHBOARD_EXPANDED_MODE_TOGGLE,
    performInputSearchAffiliateList: ModelsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST,
    performAffiliateListSearch: ModelsCustomer.PERFORM_AFFILIATE_LIST_SEARCH,
    performSearchAffiliateListEnable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE,
    performSearchAffiliateListDisable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE,
    performChangeTab: ModelsCustomer.PERFORM_CHANGE_TAB,
    performPopoverHolderShow: ModelsCustomer.PERFORM_POPOVER_HOLDER_SHOW,
    performPopoverHolderHide: ModelsCustomer.PERFORM_POPOVER_HOLDER_HIDE,
    performPopoverCuratorShow: ModelsCustomer.PERFORM_POPOVER_CURATOR_SHOW,
    performPopoverCuratorHide: ModelsCustomer.PERFORM_POPOVER_CURATOR_HIDE,
    performPopoverOccasionListShow: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_SHOW,
    performPopoverOccasionListHide: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_HIDE,
    performPopoverNoteListShow: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_SHOW,
    performPopoverNoteListHide: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_HIDE,
    performPopoverProblemListShow: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_SHOW,
    performPopoverProblemListHide: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_HIDE,
    performPopoverOwnerShow: ModelsCustomer.PERFORM_POPOVER_OWNER_SHOW,
    performPopoverOwnerHide: ModelsCustomer.PERFORM_POPOVER_OWNER_HIDE,
    performNavigateToOwnerScreen: ModelsCustomer.PERFORM_NAVIGATE_TO_OWNER_SCREEN,
    navigateToOwnerAgentScreen: ModelsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN,
    navigateToCustomerScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN,
    performPopoverLimitHide: ModelsCustomer.PERFORM_POPOVER_LIMIT_HIDE,
    navigateToPopoverLimitItemScreen: ModelsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN,
    navigatePopoverLimitBack: ModelsCustomer.NAVIGATE_POPOVER_LIMIT_BACK,
    callGetLimitNew: ModelsCustomer.CALL_GET_LIMIT_NEW,
    callGetLimitOld: ModelsCustomer.CALL_GET_LIMIT_OLD,
    performLimitShow: ModelsCustomer.PERFORM_LIMIT_SHOW,
    performProductTypeListRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH,
    performProductTypeListForceRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_FORCE_REFRESH,
    performFlush: ModelsCustomer.PERFORM_FLUSH,



    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallEksRequestProductList: ModelsCustomer.PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST,

    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    navigateToCustomerActivityAccessScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN,
    navigateToOccasionListScreen: ModelsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN,
    closeCustomerActivityPanel: ModelsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL,
    performContainerReset: ModelsCustomer.PERFORM_CONTAINER_RESET,
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN,

    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToProductForecastDealInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    performAgentListCurrentModeRefresh: ModelsAgentList.PERFORM_AGENT_LIST_CURRENT_MODE_REFRESH,


    customerNavigationHistory: Models.CustomerHistory[],
    currentCustomerId: string,
    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    isDashboardExpandedMode: boolean,
    isVisiblePopoverHolder: boolean,
    isVisiblePopoverCurator: boolean,
    isVisiblePopoverOccasionList: boolean,
    isVisiblePopoverNoteList: boolean,
    isVisiblePopoverProblemList: boolean,
    isVisibleModalActivityEditor: boolean,
    isVisibleModalPlanner: boolean,
    isVisibleModalEmailSend: boolean,
    isVisibleModalAssociateSearch: boolean,
    isSearchModeAffiliateList: boolean,
    inputSearchAffiliateList: string,
    affiliateSearchList: Models.CustomerList,
    currentTab: Enums.CustomerManagedTab,
    isVisiblePopoverOwner: boolean,
    currentOwner: Models.Owner,
    currentPopoverLimitItem: Enums.OldLimitItem,
    isVisiblePopoverLimit: boolean,
    limit: Models.Limit,
    limitFetching: boolean,
    limitError: Error | null,
    limitCachedDate: Date | null,
    limitOld: Models.LimitOld,
    limitOldFetching: boolean,
    limitOldError: Error | null,
    limitOldCachedDate: Date | null,
    currentUserAd: ModelsApp.UserAd,

    // START CREDIT model product list
    creditActiveProductList: Models.CreditProductList,
    creditActiveProductListFetching: boolean,
    creditActiveProductListUpdating: boolean,
    creditActiveProductListError: Error | null,
    creditActiveProductListCachedDate: Date | null,

    creditCloseProductList: Models.CreditProductList,
    creditCloseProductListFetching: boolean,
    creditCloseProductListUpdating: boolean,
    creditCloseProductListError: Error | null,
    creditCloseProductListCachedDate: Date | null,
    // END CREDIT model product list

    // START DEPOSIT model product list
    depositActiveProductList: Models.DepositProductList,
    depositActiveProductListFetching: boolean,
    depositActiveProductListUpdating: boolean,
    depositActiveProductListError: Error | null,
    depositActiveProductListCachedDate: Date | null,

    depositCloseProductList: Models.DepositProductList,
    depositCloseProductListFetching: boolean,
    depositCloseProductListUpdating: boolean,
    depositCloseProductListError: Error | null,
    depositCloseProductListCachedDate: Date | null,
    // END DEPOSIT model product list

    // START SETTLEMENT_AGREEMENT model product list
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductListFetching: boolean,
    settlementAgreementActiveProductListUpdating: boolean,
    settlementAgreementActiveProductListError: Error | null,
    settlementAgreementActiveProductListCachedDate: Date | null,

    settlementAgreementCloseProductList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductListFetching: boolean,
    settlementAgreementCloseProductListUpdating: boolean,
    settlementAgreementCloseProductListError: Error | null,
    settlementAgreementCloseProductListCachedDate: Date | null,
    // END SETTLEMENT_AGREEMENT model product list

    // START CORPORATE_CARD model product list
    corporateCardActiveProductList: Models.CorporateCardProductList,
    corporateCardActiveProductListFetching: boolean,
    corporateCardActiveProductListUpdating: boolean,
    corporateCardActiveProductListError: Error | null,
    corporateCardActiveProductListCachedDate: Date | null,

    corporateCardCloseProductList: Models.CorporateCardProductList,
    corporateCardCloseProductListFetching: boolean,
    corporateCardCloseProductListUpdating: boolean,
    corporateCardCloseProductListError: Error | null,
    corporateCardCloseProductListCachedDate: Date | null,
    // END CORPORATE_CARD model product list

    // START ENCASHMENT_CONTRACT model product list
    encashmentContractActiveProductList: Models.EncashmentContractProductList,
    encashmentContractActiveProductListFetching: boolean,
    encashmentContractActiveProductListUpdating: boolean,
    encashmentContractActiveProductListError: Error | null,
    encashmentContractActiveProductListCachedDate: Date | null,

    encashmentContractCloseProductList: Models.EncashmentContractProductList,
    encashmentContractCloseProductListFetching: boolean,
    encashmentContractCloseProductListUpdating: boolean,
    encashmentContractCloseProductListError: Error | null,
    encashmentContractCloseProductListCachedDate: Date | null,
    // END ENCASHMENT_CONTRACT model product list

    // START ACQUIRING model product list
    acquiringActiveProductList: Models.AcquiringProductList,
    acquiringActiveProductListFetching: boolean,
    acquiringActiveProductListUpdating: boolean,
    acquiringActiveProductListError: Error | null,
    acquiringActiveProductListCachedDate: Date | null,

    acquiringCloseProductList: Models.AcquiringProductList,
    acquiringCloseProductListFetching: boolean,
    acquiringCloseProductListUpdating: boolean,
    acquiringCloseProductListError: Error | null,
    acquiringCloseProductListCachedDate: Date | null,
    // END ACQUIRING model product list

    // START DBO model product list
    dboActiveProductList: Models.DboProductList,
    dboActiveProductListFetching: boolean,
    dboActiveProductListUpdating: boolean,
    dboActiveProductListError: Error | null,
    dboActiveProductListCachedDate: Date | null,

    dboCloseProductList: Models.DboProductList,
    dboCloseProductListFetching: boolean,
    dboCloseProductListUpdating: boolean,
    dboCloseProductListError: Error | null,
    dboCloseProductListCachedDate: Date | null,
    // END DBO model product list

    // START SALARY model product list
    salaryActiveProductList: Models.SalaryProductList,
    salaryActiveProductListFetching: boolean,
    salaryActiveProductListUpdating: boolean,
    salaryActiveProductListError: Error | null,
    salaryActiveProductListCachedDate: Date | null,

    salaryCloseProductList: Models.SalaryProductList,
    salaryCloseProductListFetching: boolean,
    salaryCloseProductListUpdating: boolean,
    salaryCloseProductListError: Error | null,
    salaryCloseProductListCachedDate: Date | null,
    // END SALARY model product list


    // START SALARY model product list
    udboActiveProductList: Models.UdboProductList,
    udboActiveProductListFetching: boolean,
    udboActiveProductListUpdating: boolean,
    udboActiveProductListError: Error | null,
    udboActiveProductListCachedDate: Date | null,

    udboCloseProductList: Models.UdboProductList,
    udboCloseProductListFetching: boolean,
    udboCloseProductListUpdating: boolean,
    udboCloseProductListError: Error | null,
    udboCloseProductListCachedDate: Date | null,
    // END SALARY model product list


    legalInfoProductList: Models.LegalInfoProductList,
    legalInfoProductListUpdating: boolean,
    legalInfoProductListFetching: boolean,
    legalInfoProductListError: Error | null,
    legalInfoProductListCachedDate: Date | null,


    creditActiveProductEksList: Models.CreditProductList,
    creditActiveProductEksListFetching: boolean,
    creditActiveProductEksListError: Error | null,
    creditActiveProductEksListCachedDate: Date | null,

    creditCloseProductEksList: Models.CreditProductList,
    creditCloseProductEksListFetching: boolean,
    creditCloseProductEksListError: Error | null,
    creditCloseProductEksListCachedDate: Date | null,

    settlementAgreementActiveProductEksList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductEksListFetching: boolean,
    settlementAgreementActiveProductEksListError: Error | null,
    settlementAgreementActiveProductEksListCachedDate: Date | null,

    settlementAgreementCloseProductEksList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductEksListFetching: boolean,
    settlementAgreementCloseProductEksListError: Error | null,
    settlementAgreementCloseProductEksListCachedDate: Date | null,


    depositActiveProductEksList: Models.DepositProductList,
    depositActiveProductEksListFetching: boolean,
    depositActiveProductEksListError: Error | null,
    depositActiveProductEksListCachedDate: Date | null,

    depositCloseProductEksList: Models.DepositProductList,
    depositCloseProductEksListFetching: boolean,
    depositCloseProductEksListError: Error | null,
    depositCloseProductEksListCachedDate: Date | null,

    corporateCardActiveProductEksList: Models.CorporateCardProductList,
    corporateCardActiveProductEksListFetching: boolean,
    corporateCardActiveProductEksListError: Error | null,
    corporateCardActiveProductEksListCachedDate: Date | null,

    corporateCardCloseProductEksList: Models.CorporateCardProductList,
    corporateCardCloseProductEksListFetching: boolean,
    corporateCardCloseProductEksListError: Error | null,
    corporateCardCloseProductEksListCachedDate: Date | null,

    encashmentContractActiveProductEksList: Models.EncashmentContractProductList,
    encashmentContractActiveProductEksListFetching: boolean,
    encashmentContractActiveProductEksListError: Error | null,
    encashmentContractActiveProductEksListCachedDate: Date | null,

    encashmentContractCloseProductEksList: Models.EncashmentContractProductList,
    encashmentContractCloseProductEksListFetching: boolean,
    encashmentContractCloseProductEksListError: Error | null,
    encashmentContractCloseProductEksListCachedDate: Date | null,

    acquiringActiveProductEksList: Models.AcquiringProductList,
    acquiringActiveProductEksListFetching: boolean,
    acquiringActiveProductEksListError: Error | null,
    acquiringActiveProductEksListCachedDate: Date | null,

    acquiringCloseProductEksList: Models.AcquiringProductList,
    acquiringCloseProductEksListFetching: boolean,
    acquiringCloseProductEksListError: Error | null,
    acquiringCloseProductEksListCachedDate: Date | null,

    dboActiveProductEksList: Models.DboProductList,
    dboActiveProductEksListFetching: boolean,
    dboActiveProductEksListError: Error | null,
    dboActiveProductEksListCachedDate: Date | null,

    dboCloseProductEksList: Models.DboProductList,
    dboCloseProductEksListFetching: boolean,
    dboCloseProductEksListError: Error | null,
    dboCloseProductEksListCachedDate: Date | null,

    udboActiveProductEksList: Models.UdboProductList,
    udboActiveProductEksListFetching: boolean,
    udboActiveProductEksListError: Error | null,
    udboActiveProductEksListCachedDate: Date | null,

    udboCloseProductEksList: Models.UdboProductList,
    udboCloseProductEksListFetching: boolean,
    udboCloseProductEksListError: Error | null,
    udboCloseProductEksListCachedDate: Date | null,

    salaryActiveProductEksList: Models.SalaryProductList,
    salaryActiveProductEksListFetching: boolean,
    salaryActiveProductEksListError: Error | null,
    salaryActiveProductEksListCachedDate: Date | null,

    salaryCloseProductEksList: Models.SalaryProductList,
    salaryCloseProductEksListFetching: boolean,
    salaryCloseProductEksListError: Error | null,
    salaryCloseProductEksListCachedDate: Date | null,

    legalInfoProductEksList: Models.LegalInfoProductList,
    legalInfoProductEksListFetching: boolean,
    legalInfoProductEksListError: Error | null,
    legalInfoProductEksListCachedDate: Date | null,

    isVisibleModalCustomerEditor: boolean,
    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    agentListCacheDate: Date | null,
    testID: string,
    productListAgreementStatus: Enums.ProductListAgreementStatus,
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN,
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performAgentListFlush: ModelsAgentList.PERFORM_FLUSH,

    // props for shareDataPopover
    personHistoryList: ModelsScheduler.PersonList,
    foundPersonList: ModelsScheduler.PersonList,
    foundPersonListInProgress: boolean,
    foundPersonListError: Error | null,
    inputSharePopoverSearch: string,
    sendFetching: boolean,
    sendError: Error | null,
    sendSuccess: boolean,
    performSend: ModelsCustomerDashboard.PERFORM_SEND,
    isVisiblePopoverShare: boolean,
    currentRecipientList: ModelsScheduler.PersonList,
    currentRepresentation: Enums.Representation,
    currentFileFormat: Enums.FileFormat,
    inputSharePopoverSearchRefresh: ModelsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    inputCurrentRecipientListRefresh: ModelsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    inputCurrentRepresentationRefresh: ModelsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH,
    inputCurrentFileFormatRefresh: ModelsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH,
    foundPersonListClear: ModelsCustomerDashboard.FOUND_PERSON_LIST_CLEAR,
    navigateToPopoverShareRecipientsScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS,
    navigateToPopoverShareRepresentationScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION,
    navigateToPopoverShareFormatScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT,
    navigateToPopoverShareBack: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK,
    performPopoverShareShow: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW,
    performPopoverShareHide: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE,
    shareDataRefresh: ModelsCustomerDashboard.SHARE_DATA_REFRESH,
    performQlikEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT,
    performRefreshBarHide: ModelsCustomer.PERFORM_REFRESH_BAR_HIDE,
    performProductListModalAlertShow: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW
    performProductListModalAlertHide: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,
    isVisibleProductListModalAlert: boolean,
    customerCachedDate: Date | null,
    // Prognostic products
    prognosticProductList: Models.ForecastDealList,
    prognosticProductListFetching: boolean,
    prognosticProductListError: Error | null,
    isVisiblePrognosticProductListModalAlert: boolean,
    performPrognosticProductListModalAlertHide: ModelsCustomer.PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_HIDE,
    callGetForecastPrognosticDealList: ModelsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST,
    navigateToProductForecastEventInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,

    callGetAgentList: ModelsAgentList.CALL_GET_AGENT_LIST,
    isQlikLoggedIn: boolean,
    customerFetching: boolean,
    customerError: Error | null,
    isActivityAccessError: boolean,

}
const ViewCustomer: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
    <SplitPanel testID='test-id-1911df3a-c3e8-dd93-91e6-79bc454ff288'
        id={Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)}>
        <ContentPanel testID='test-id-691ee770-2f30-8196-2380-6e5fe14f82ea' style={{ backgroundColor: '#fff' }}>
            <Page testID='test-id-c6099d61-1261-48a4-cd98-1946d3050f0f' scrollEnabled={false}
                content={getCustomerContentKeyboardAvoiding(props)}>
                {getLeftPageHeader(props)}
                {getCenterPageHeader(props)}
                {getRightPageHeader(props)}
            </Page>
            <Page testID='test-id-ViewCustomer-ContainerMemberList-Page' scrollEnabled={false}
                content={
                    getKeyboardAvoidingContainer(
                        <ContainerMemberList testID='test-id-ViewCustomer-ContainerMemberList' />
                    )
                }>
                <LeftPageHeader testID='test-id-ViewCustomer-ContainerMemberList-LeftPageHeader' />
            </Page>
            <Page testID='test-id-ViewActivity-ContainerActivity-Page' scrollEnabled={false}
                content={<ContainerActivity  instanceType={EnumsScheduler.SchedulerMode.Customer}
                                             testID='test-id-ViewCustomer-ContainerActivity' />}>
                <LeftPageHeader testID='test-id-ViewActivity-ContainerActivity-LeftPageHeader' />
            </Page>
            <Page testID='test-id-ViewActivity-ContainerOccasionList-Page' scrollEnabled={false}
                content={<ContainerOccasionList testID='test-id-ViewCustomer-ContainerOccasionList' />}>
                <LeftPageHeader testID='test-id-ViewActivity-ContainerOccasionList-LeftPageHeader' />
            </Page>
            <Page testID='test-id-ViewCustomer-EmployeeView-Page' scrollEnabled={false}
                content={<ContainerEmployee testID='test-id-ViewCustomer-ContainerEmployee' />}>
                <LeftPageHeader testID='test-id-ViewActivity-ContainerOccasionList-LeftPageHeader' />
            </Page>
            <Page testID='test-id-ViewCustomer-ContainerDealListSearch-Page' scrollEnabled={false}
                  content={<ContainerDealListSearch testID='test-id-ViewCustomer-ContainerDealListSearch' />}>
                <LeftPageHeader testID='test-id-ViewCustomer-ContainerDealListSearch-LeftPageHeader' />
            </Page>
        </ContentPanel>
        {getAccessoryPanel(props)}
    </SplitPanel>
)

/*{
    props.isQlikLoggedIn ?
        (
            <NavigationIconButton
                testID='test-id-4c72195d-a768-9b82-7c05-30658da40092'
                type={NavigationIconButtonType.SHARE}
                onExecute={() => {
                    {
                        getShareDataView(props)
                    }
                    toggleShareDataPopover(props)
                }}
            />
        ) :
        null
}*/
export default ViewCustomer
