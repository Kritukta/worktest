/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import { H1, OptionItem, TabSelector, Text, View, } from 'ufs-mobile-platform'
import { ContainerDealList, Models } from "mrmkmcib-crm"
import { Enums } from '../../Enums'

import * as ModelsAppCRM from "../../models/ModelsAppCRM"

import * as ModelsCustomer from "../../models/ModelsCustomer"

import * as ModelsCustomerEditor from "../../models/ModelsCustomerEditor"

import * as ModelsProductList from "../../models/ModelsProductList"

import * as ModelsAgentList from "../../models/ModelsAgentList"
import Error from "../../models/Error"

import Styles from './styles/CustomerHoldingManagedStyles'
import {Breadcrumbs} from 'mrmkmcib-ui'

import CustomerManagedTabMain from './CustomerManagedTabMain'
import CustomerManagedTabOwnerList from './CustomerManagedTabOwnerList'
import { ContainerCustomerDashboard } from 'mrmkmcib-dashboard'


const getMappedHistory = (hierarchy: any) => {

    const history = hierarchy.map((item: any, i: number) => {
        return { title: item.name, key: item.id, accessible: true, testID: `test-id-getMappedHistory-${item.id}` }
    })

    return history
}

const getBreadCrumbs = (props: IProps) => {
    if (props.customerManaged.hierarchy && props.customerManaged.hierarchy.length === 0) {
        return null
    } else {

        return (
            <View testID='test-id-f4593c8d-55fc-07c7-9643-1652e40c7cde' style={Styles.Breadcrumbs}>
                <Breadcrumbs onTap={(id) => {
                    props.performCustomerOpen(id, Enums.CustomerMode.SameType)
                }} items={getMappedHistory(props.customerManaged.hierarchy)} />
            </View>
        )
    }
}

const getTabSelector = (props: IProps) => {
    return (
        <TabSelector
            testID='test-id-cf4af0be-d2dc-37d4-4f6d-3ee5e7eced8a'
            style={Styles.TabSelector}
            value={props.currentTab.toString()}
            onChange={(index: number, value: string, ) => {
                props.performChangeTab(index, parseInt(value))
            }}
        >
            <OptionItem
                testID='test-id-3584520c-5bb8-d94b-3a75-ebfddda8d437'
                value={Enums.CustomerManagedTab.Main.toString()}
                title='Основное' />
            {
                (props.customerManaged.category.code != 'Conglomerate') ?
                    <OptionItem
                        testID='test-id-f51a93ad-4118-6045-fd9d-d121c7d44f6f'
                        value={Enums.CustomerManagedTab.DealList.toString()}
                        title='Сделки' /> :
                    null
            }
            <OptionItem
                testID='test-id-b67a2509-2050-ab14-d0dd-f9ea6fd98d25'
                value={Enums.CustomerManagedTab.Dashboard.toString()}
                title='Аналитика' />
        </TabSelector>
    )
}

const getTabContent = (props: IProps) => {

    const currentTab = props.currentTab

    switch (currentTab) {
        case Enums.CustomerManagedTab.Main:
            const withHierarchy = props.customerManaged.hierarchy && props.customerManaged.hierarchy.length > 0
            return (
                <View
                    testID='test-id-486ba13b-fdba-d833-70c1-5534c5886080'
                    style={withHierarchy ? Styles.fixedHeightSmall : Styles.fixedHeight}>
                    <CustomerManagedTabMain testID='test-id-ab167d97-eec7-4522-1904-a6991a622cd0' {...props} />
                </View>
            )
        case Enums.CustomerManagedTab.DealList:
            return <View testID='test-id-77e6d053-ef8f-9084-9bc0-bb558ad341ca' style={Styles.DealListWrapper}>
                        <ContainerDealList testID='test-id-86696e6d-ed6b-360b-2c0d-e1745f7b270e' />
                    </View>

        case Enums.CustomerManagedTab.OwnerList:
            return <CustomerManagedTabOwnerList testID='test-id-2de6d1f6-6687-cdb3-f914-cb7f1e773db8'  {...props} />
        case Enums.CustomerManagedTab.Dashboard:
            return  <View testID='test-id-486ba13b-fdba-d833-70c1-5534c5886093' style={[Styles.dashboardContainer]}>
                        <ContainerCustomerDashboard testID='test-id-e2018616-fbda-963b-54ff-2d6a52ea6003' />
                    </View>
        default:
            return <CustomerManagedTabMain testID='test-id-42478c26-f096-ad36-a72a-8009c9051e01'  {...props} />
    }
}

const getHeader = (props: IProps) => {
    const isConglomerate = props.currentCustomerManaged.category.code == 'Conglomerate'
    return (
        <View
            testID='test-id-66815dae-0aed-5323-28f9-8398c9436302'
            style={Styles.Header}>
            <H1
                testID='test-id-6d6a7159-f8a8-e5fa-605c-ec04bb5cec6e'
                numberOfLines={3}>
                {props.customerManaged.name}
            </H1>
            <Text
                testID='test-id-4f0296ed-8c56-2fc0-fe22-e6854b03b66b'
                style={Styles.OrganizationType}>
                {
                    isConglomerate ?
                        'Конгломерат' :
                        props.customerManaged.organizationType.value
                }
            </Text>
        </View>
    )
}

const getContent = (props: IProps) => {
    if (!props.isDashboardExpandedMode) {
        return (
            <View testID='test-id-4afd34fa-b729-4218-ce75-8497c0a00a5f'>
                {getBreadCrumbs(props)}
                {getHeader(props)}
                <View
                    testID='test-id-cefef517-838f-c442-55a2-a89d36da6050'
                    style={Styles.TabWrapper}>
                        {getTabSelector(props)}
                </View>
            </View>
        )
    }
}


/*
 * UI stateless functional component "CustomerHoldingManaged" used in "Customer" screen. Component render holding info.
 */

export interface IProps {

    productListAgreementStatus: Enums.ProductListAgreementStatus,
    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    navigateToOccasionListScreen: ModelsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN,
    closeCustomerActivityPanel: ModelsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL,
    customerManaged: Models.CustomerManaged,
    isDashboardExpandedMode: boolean,
    navigateToOwnerAgentScreen: ModelsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN,
    isVisibleModalCustomerEditor: boolean,
    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW,
    currentPopoverLimitItem: Enums.OldLimitItem,
    isVisiblePopoverLimit: boolean,
    performLimitShow: ModelsCustomer.PERFORM_LIMIT_SHOW,
    performPopoverLimitHide: ModelsCustomer.PERFORM_POPOVER_LIMIT_HIDE,
    navigateToPopoverLimitItemScreen: ModelsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN,
    navigatePopoverLimitBack: ModelsCustomer.NAVIGATE_POPOVER_LIMIT_BACK,
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
    navigateToCustomerScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN,
    callGetLimitNew: ModelsCustomer.CALL_GET_LIMIT_NEW,
    callGetLimitOld: ModelsCustomer.CALL_GET_LIMIT_OLD,
    performProductTypeListRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH,
    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,

    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    currentCustomerId: string,
    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    isVisiblePopoverHolder: boolean,
    isVisiblePopoverCurator: boolean,
    isVisiblePopoverOccasionList: boolean,
    isVisiblePopoverNoteList: boolean,
    isVisiblePopoverProblemList: boolean,
    isVisiblePopoverOwner: boolean,
    isVisibleModalActivityEditor: boolean,
    isVisibleModalPlanner: boolean,
    isVisibleModalEmailSend: boolean,
    isVisibleModalAssociateSearch: boolean,
    inputSearchAffiliateList: string,
    isSearchModeAffiliateList: boolean,
    affiliateSearchList: Models.CustomerList,
    performInputSearchAffiliateList: ModelsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST,
    performInputProductListAgreementStatus: ModelsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS,
    performAffiliateListSearch: ModelsCustomer.PERFORM_AFFILIATE_LIST_SEARCH,
    performSearchAffiliateListEnable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE,
    performSearchAffiliateListDisable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE,
    currentTab: Enums.CustomerManagedTab,
    customerFetching: boolean,
    customerError: Error | null,
    limitOld: Models.LimitOld,
    limitOldFetching: boolean,
    limitOldError: Error | null,
    limitOldCachedDate: Date | null,
    limit: Models.Limit,
    limitFetching: boolean,
    limitError: Error | null,
    limitCachedDate: Date | null,

    // START CREDIT model product list
    creditActiveProductList: Models.CreditProductList,
    creditActiveProductListFetching: boolean,
    creditActiveProductListUpdating: boolean,
    creditActiveProductListError: Error | null,
    creditActiveProductListCachedDate: Date | null,

    creditCloseProductList: Models.CreditProductList,
    creditCloseProductListFetching: boolean,
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
    legalInfoProductListFetching: boolean,
    legalInfoProductListError: Error | null,
    legalInfoProductListCachedDate: Date | null,

    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    currentOwner: Models.Owner,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    performAgentListCurrentModeRefresh: ModelsAgentList.PERFORM_AGENT_LIST_CURRENT_MODE_REFRESH,
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN,
    performFlush: ModelsCustomer.PERFORM_FLUSH,
    performAgentListFlush: ModelsAgentList.PERFORM_FLUSH,
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    testID: string,
    callGetAgentList: ModelsAgentList.CALL_GET_AGENT_LIST,
}

const CustomerHoldingManaged: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View
        testID={'test-id-component-CustomerHoldingManaged'}
        style={
            props.currentTab === Enums.CustomerManagedTab.DealList ?
                Styles.mainNoPaddingBottom :
                Styles.main
        }
    >
        {getContent(props)}
        {getTabContent(props)}
    </View>
)

export default CustomerHoldingManaged
