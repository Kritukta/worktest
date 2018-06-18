/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkAgentList from '../thunk/ThunkAgentList';
import { thunkCustomerDashboard } from 'mrmkmcib-dashboard';
import { Enums } from '../Enums';
import ViewCustomer from '../components/ViewCustomer';
/*
 * Container "Customer". Customer card screen. Current user managed customer and locked customer.
 */
class ContainerCustomer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performInit();
    }
    render() {
        return (React.createElement(ViewCustomer, { testID: 'test-id-container-Customer', performInputProductListAgreementStatus: this.props.performInputProductListAgreementStatus, performDashboardExpandedModeToggle: this.props.performDashboardExpandedModeToggle, performInputSearchAffiliateList: this.props.performInputSearchAffiliateList, performAffiliateListSearch: this.props.performAffiliateListSearch, performSearchAffiliateListEnable: this.props.performSearchAffiliateListEnable, performSearchAffiliateListDisable: this.props.performSearchAffiliateListDisable, performChangeTab: this.props.performChangeTab, performPopoverHolderShow: this.props.performPopoverHolderShow, performPopoverHolderHide: this.props.performPopoverHolderHide, performPopoverCuratorShow: this.props.performPopoverCuratorShow, performPopoverCuratorHide: this.props.performPopoverCuratorHide, performPopoverOccasionListShow: this.props.performPopoverOccasionListShow, performPopoverOccasionListHide: this.props.performPopoverOccasionListHide, performPopoverNoteListShow: this.props.performPopoverNoteListShow, performPopoverNoteListHide: this.props.performPopoverNoteListHide, performPopoverProblemListShow: this.props.performPopoverProblemListShow, performPopoverProblemListHide: this.props.performPopoverProblemListHide, performPopoverOwnerShow: this.props.performPopoverOwnerShow, performPopoverOwnerHide: this.props.performPopoverOwnerHide, performNavigateToOwnerScreen: this.props.performNavigateToOwnerScreen, navigateToOwnerAgentScreen: this.props.navigateToOwnerAgentScreen, navigateToCustomerScreen: this.props.navigateToCustomerScreen, navigateToMemberListScreen: this.props.navigateToMemberListScreen, performPopoverLimitHide: this.props.performPopoverLimitHide, navigateToPopoverLimitItemScreen: this.props.navigateToPopoverLimitItemScreen, navigatePopoverLimitBack: this.props.navigatePopoverLimitBack, callGetLimitNew: this.props.callGetLimitNew, callGetLimitOld: this.props.callGetLimitOld, performLimitShow: this.props.performLimitShow, performProductTypeListRefresh: this.props.performProductTypeListRefresh, performProductTypeListForceRefresh: this.props.performProductTypeListForceRefresh, performCallGetUncachedRequestProductList: this.props.performCallGetUncachedRequestProductList, performCallGetCachedRequestProductList: this.props.performCallGetCachedRequestProductList, performCallGetForceRequestProductList: this.props.performCallGetForceRequestProductList, navigateToCustomerActivityIncludeScreen: this.props.navigateToCustomerActivityIncludeScreen, navigateToCustomerActivityExcludeScreen: this.props.navigateToCustomerActivityExcludeScreen, navigateToCustomerActivityAccessScreen: this.props.navigateToCustomerActivityAccessScreen, navigateToOccasionListScreen: this.props.navigateToOccasionListScreen, closeCustomerActivityPanel: this.props.closeCustomerActivityPanel, performContainerReset: this.props.performContainerReset, performCustomerOpen: this.props.performCustomerOpen, performGszOpen: this.props.performGszOpen, performCustomerEditorShow: this.props.performCustomerEditorShow, navigateBack: this.props.navigateBack, navigateToProductListScreen: this.props.navigateToProductListScreen, navigateToProductForecastDealInfoScreen: this.props.navigateToProductForecastDealInfoScreen, navigateToProductForecastEventInfoScreen: this.props.navigateToProductForecastEventInfoScreen, customerNavigationHistory: this.props.customerNavigationHistory, currentCustomerId: this.props.currentCustomerId, currentCustomer: this.props.currentCustomer, currentCustomerManaged: this.props.currentCustomerManaged, isDashboardExpandedMode: this.props.isDashboardExpandedMode, isVisiblePopoverHolder: this.props.isVisiblePopoverHolder, isVisiblePopoverCurator: this.props.isVisiblePopoverCurator, isVisiblePopoverOccasionList: this.props.isVisiblePopoverOccasionList, isVisiblePopoverNoteList: this.props.isVisiblePopoverNoteList, isVisiblePopoverProblemList: this.props.isVisiblePopoverProblemList, isVisibleModalActivityEditor: this.props.isVisibleModalActivityEditor, isVisibleModalPlanner: this.props.isVisibleModalPlanner, isVisibleModalEmailSend: this.props.isVisibleModalEmailSend, isVisibleModalAssociateSearch: this.props.isVisibleModalAssociateSearch, isSearchModeAffiliateList: this.props.isSearchModeAffiliateList, inputSearchAffiliateList: this.props.inputSearchAffiliateList, affiliateSearchList: this.props.affiliateSearchList, currentTab: this.props.currentTab, isVisiblePopoverOwner: this.props.isVisiblePopoverOwner, currentOwner: this.props.currentOwner, currentPopoverLimitItem: this.props.currentPopoverLimitItem, isVisiblePopoverLimit: this.props.isVisiblePopoverLimit, customerFetching: this.props.customerFetching, customerError: this.props.customerError, limit: this.props.limit, limitFetching: this.props.limitFetching, limitError: this.props.limitError, limitCachedDate: this.props.limitCachedDate, limitOld: this.props.limitOld, limitOldFetching: this.props.limitOldFetching, limitOldError: this.props.limitOldError, limitOldCachedDate: this.props.limitOldCachedDate, creditActiveProductList: this.props.creditActiveProductList, creditActiveProductListFetching: this.props.creditActiveProductListFetching, creditActiveProductListError: this.props.creditActiveProductListError, creditActiveProductListUpdating: this.props.creditActiveProductListUpdating, creditActiveProductListCachedDate: this.props.creditActiveProductListCachedDate, creditCloseProductList: this.props.creditCloseProductList, creditCloseProductListFetching: this.props.creditCloseProductListFetching, creditCloseProductListError: this.props.creditCloseProductListError, creditCloseProductListUpdating: this.props.creditCloseProductListUpdating, creditCloseProductListCachedDate: this.props.creditCloseProductListCachedDate, depositActiveProductList: this.props.depositActiveProductList, depositActiveProductListFetching: this.props.depositActiveProductListFetching, depositActiveProductListUpdating: this.props.depositActiveProductListUpdating, depositActiveProductListError: this.props.depositActiveProductListError, depositActiveProductListCachedDate: this.props.depositActiveProductListCachedDate, depositCloseProductList: this.props.depositCloseProductList, depositCloseProductListFetching: this.props.depositCloseProductListFetching, depositCloseProductListUpdating: this.props.depositCloseProductListUpdating, depositCloseProductListError: this.props.depositCloseProductListError, depositCloseProductListCachedDate: this.props.depositCloseProductListCachedDate, settlementAgreementActiveProductList: this.props.settlementAgreementActiveProductList, settlementAgreementActiveProductListFetching: this.props.settlementAgreementActiveProductListFetching, settlementAgreementActiveProductListError: this.props.settlementAgreementActiveProductListError, settlementAgreementActiveProductListUpdating: this.props.settlementAgreementActiveProductListUpdating, settlementAgreementActiveProductListCachedDate: this.props.settlementAgreementActiveProductListCachedDate, settlementAgreementCloseProductList: this.props.settlementAgreementCloseProductList, settlementAgreementCloseProductListFetching: this.props.settlementAgreementCloseProductListFetching, settlementAgreementCloseProductListError: this.props.settlementAgreementCloseProductListError, settlementAgreementCloseProductListUpdating: this.props.settlementAgreementCloseProductListUpdating, settlementAgreementCloseProductListCachedDate: this.props.settlementAgreementCloseProductListCachedDate, corporateCardActiveProductList: this.props.corporateCardActiveProductList, corporateCardActiveProductListFetching: this.props.corporateCardActiveProductListFetching, corporateCardActiveProductListError: this.props.corporateCardActiveProductListError, corporateCardActiveProductListUpdating: this.props.corporateCardActiveProductListUpdating, corporateCardActiveProductListCachedDate: this.props.corporateCardActiveProductListCachedDate, corporateCardCloseProductList: this.props.corporateCardCloseProductList, corporateCardCloseProductListFetching: this.props.corporateCardCloseProductListFetching, corporateCardCloseProductListError: this.props.corporateCardCloseProductListError, corporateCardCloseProductListUpdating: this.props.corporateCardCloseProductListUpdating, corporateCardCloseProductListCachedDate: this.props.corporateCardCloseProductListCachedDate, encashmentContractActiveProductList: this.props.encashmentContractActiveProductList, encashmentContractActiveProductListFetching: this.props.encashmentContractActiveProductListFetching, encashmentContractActiveProductListError: this.props.encashmentContractActiveProductListError, encashmentContractActiveProductListUpdating: this.props.encashmentContractActiveProductListUpdating, encashmentContractActiveProductListCachedDate: this.props.encashmentContractActiveProductListCachedDate, encashmentContractCloseProductList: this.props.encashmentContractCloseProductList, encashmentContractCloseProductListFetching: this.props.encashmentContractCloseProductListFetching, encashmentContractCloseProductListError: this.props.encashmentContractCloseProductListError, encashmentContractCloseProductListUpdating: this.props.encashmentContractCloseProductListUpdating, encashmentContractCloseProductListCachedDate: this.props.encashmentContractCloseProductListCachedDate, acquiringActiveProductList: this.props.acquiringActiveProductList, acquiringActiveProductListFetching: this.props.acquiringActiveProductListFetching, acquiringActiveProductListError: this.props.acquiringActiveProductListError, acquiringActiveProductListUpdating: this.props.acquiringActiveProductListUpdating, acquiringActiveProductListCachedDate: this.props.acquiringActiveProductListCachedDate, acquiringCloseProductList: this.props.acquiringCloseProductList, acquiringCloseProductListFetching: this.props.acquiringCloseProductListFetching, acquiringCloseProductListError: this.props.acquiringCloseProductListError, acquiringCloseProductListUpdating: this.props.acquiringCloseProductListUpdating, acquiringCloseProductListCachedDate: this.props.acquiringCloseProductListCachedDate, dboActiveProductList: this.props.dboActiveProductList, dboActiveProductListFetching: this.props.dboActiveProductListFetching, dboActiveProductListError: this.props.dboActiveProductListError, dboActiveProductListUpdating: this.props.dboActiveProductListUpdating, dboActiveProductListCachedDate: this.props.dboActiveProductListCachedDate, dboCloseProductList: this.props.dboCloseProductList, dboCloseProductListFetching: this.props.dboCloseProductListFetching, dboCloseProductListError: this.props.dboCloseProductListError, dboCloseProductListUpdating: this.props.dboCloseProductListUpdating, dboCloseProductListCachedDate: this.props.dboCloseProductListCachedDate, salaryActiveProductList: this.props.salaryActiveProductList, salaryActiveProductListFetching: this.props.salaryActiveProductListFetching, salaryActiveProductListError: this.props.salaryActiveProductListError, salaryActiveProductListUpdating: this.props.salaryActiveProductListUpdating, salaryActiveProductListCachedDate: this.props.salaryActiveProductListCachedDate, salaryCloseProductList: this.props.salaryCloseProductList, salaryCloseProductListFetching: this.props.salaryCloseProductListFetching, salaryCloseProductListError: this.props.salaryCloseProductListError, salaryCloseProductListUpdating: this.props.salaryCloseProductListUpdating, salaryCloseProductListCachedDate: this.props.salaryCloseProductListCachedDate, udboActiveProductList: this.props.udboActiveProductList, udboActiveProductListFetching: this.props.udboActiveProductListFetching, udboActiveProductListError: this.props.udboActiveProductListError, udboActiveProductListUpdating: this.props.udboActiveProductListUpdating, udboActiveProductListCachedDate: this.props.udboActiveProductListCachedDate, udboCloseProductList: this.props.udboCloseProductList, udboCloseProductListFetching: this.props.udboCloseProductListFetching, udboCloseProductListError: this.props.udboCloseProductListError, udboCloseProductListUpdating: this.props.udboCloseProductListUpdating, udboCloseProductListCachedDate: this.props.udboCloseProductListCachedDate, performFlush: this.props.performFlush, legalInfoProductList: this.props.legalInfoProductList, legalInfoProductListFetching: this.props.legalInfoProductListFetching, legalInfoProductListUpdating: this.props.legalInfoProductListUpdating, legalInfoProductListError: this.props.legalInfoProductListError, legalInfoProductListCachedDate: this.props.legalInfoProductListCachedDate, creditActiveProductEksList: this.props.creditActiveProductEksList, creditActiveProductEksListFetching: this.props.creditActiveProductEksListFetching, creditActiveProductEksListError: this.props.creditActiveProductEksListError, creditActiveProductEksListCachedDate: this.props.creditActiveProductEksListCachedDate, performCallEksRequestProductList: this.props.performCallEksRequestProductList, creditCloseProductEksList: this.props.creditCloseProductEksList, creditCloseProductEksListFetching: this.props.creditCloseProductEksListFetching, creditCloseProductEksListError: this.props.creditCloseProductEksListError, creditCloseProductEksListCachedDate: this.props.creditCloseProductEksListCachedDate, settlementAgreementActiveProductEksList: this.props.settlementAgreementActiveProductEksList, settlementAgreementActiveProductEksListFetching: this.props.settlementAgreementActiveProductEksListFetching, settlementAgreementActiveProductEksListError: this.props.settlementAgreementActiveProductEksListError, settlementAgreementActiveProductEksListCachedDate: this.props.settlementAgreementActiveProductEksListCachedDate, settlementAgreementCloseProductEksList: this.props.settlementAgreementCloseProductEksList, settlementAgreementCloseProductEksListFetching: this.props.settlementAgreementCloseProductEksListFetching, settlementAgreementCloseProductEksListError: this.props.settlementAgreementCloseProductEksListError, settlementAgreementCloseProductEksListCachedDate: this.props.settlementAgreementCloseProductEksListCachedDate, depositActiveProductEksList: this.props.depositActiveProductEksList, depositActiveProductEksListFetching: this.props.depositActiveProductEksListFetching, depositActiveProductEksListError: this.props.depositActiveProductEksListError, depositActiveProductEksListCachedDate: this.props.depositActiveProductEksListCachedDate, depositCloseProductEksList: this.props.depositCloseProductEksList, depositCloseProductEksListFetching: this.props.depositCloseProductEksListFetching, depositCloseProductEksListError: this.props.depositCloseProductEksListError, depositCloseProductEksListCachedDate: this.props.depositCloseProductEksListCachedDate, corporateCardActiveProductEksList: this.props.corporateCardActiveProductEksList, corporateCardActiveProductEksListFetching: this.props.corporateCardActiveProductEksListFetching, corporateCardActiveProductEksListError: this.props.corporateCardActiveProductEksListError, corporateCardActiveProductEksListCachedDate: this.props.corporateCardActiveProductEksListCachedDate, corporateCardCloseProductEksList: this.props.corporateCardCloseProductEksList, corporateCardCloseProductEksListFetching: this.props.corporateCardCloseProductEksListFetching, corporateCardCloseProductEksListError: this.props.corporateCardCloseProductEksListError, corporateCardCloseProductEksListCachedDate: this.props.corporateCardCloseProductEksListCachedDate, encashmentContractActiveProductEksList: this.props.encashmentContractActiveProductEksList, encashmentContractActiveProductEksListFetching: this.props.encashmentContractActiveProductEksListFetching, encashmentContractActiveProductEksListError: this.props.encashmentContractActiveProductEksListError, encashmentContractActiveProductEksListCachedDate: this.props.encashmentContractActiveProductEksListCachedDate, encashmentContractCloseProductEksList: this.props.encashmentContractCloseProductEksList, encashmentContractCloseProductEksListFetching: this.props.encashmentContractCloseProductEksListFetching, encashmentContractCloseProductEksListError: this.props.encashmentContractCloseProductEksListError, encashmentContractCloseProductEksListCachedDate: this.props.encashmentContractCloseProductEksListCachedDate, acquiringActiveProductEksList: this.props.acquiringActiveProductEksList, acquiringActiveProductEksListFetching: this.props.acquiringActiveProductEksListFetching, acquiringActiveProductEksListError: this.props.acquiringActiveProductEksListError, acquiringActiveProductEksListCachedDate: this.props.acquiringActiveProductEksListCachedDate, acquiringCloseProductEksList: this.props.acquiringCloseProductEksList, acquiringCloseProductEksListFetching: this.props.acquiringCloseProductEksListFetching, acquiringCloseProductEksListError: this.props.acquiringCloseProductEksListError, acquiringCloseProductEksListCachedDate: this.props.acquiringCloseProductEksListCachedDate, legalInfoProductEksList: this.props.legalInfoProductEksList, legalInfoProductEksListFetching: this.props.legalInfoProductEksListFetching, legalInfoProductEksListError: this.props.legalInfoProductEksListError, legalInfoProductEksListCachedDate: this.props.legalInfoProductEksListCachedDate, dboActiveProductEksList: this.props.dboActiveProductEksList, dboActiveProductEksListFetching: this.props.dboActiveProductEksListFetching, dboActiveProductEksListError: this.props.dboActiveProductEksListError, dboActiveProductEksListCachedDate: this.props.dboActiveProductEksListCachedDate, dboCloseProductEksList: this.props.dboCloseProductEksList, dboCloseProductEksListFetching: this.props.dboCloseProductEksListFetching, dboCloseProductEksListError: this.props.dboCloseProductEksListError, dboCloseProductEksListCachedDate: this.props.dboCloseProductEksListCachedDate, udboActiveProductEksList: this.props.udboActiveProductEksList, udboActiveProductEksListFetching: this.props.udboActiveProductEksListFetching, udboActiveProductEksListError: this.props.udboActiveProductEksListError, udboActiveProductEksListCachedDate: this.props.udboActiveProductEksListCachedDate, udboCloseProductEksList: this.props.udboCloseProductEksList, udboCloseProductEksListFetching: this.props.udboCloseProductEksListFetching, udboCloseProductEksListError: this.props.udboCloseProductEksListError, udboCloseProductEksListCachedDate: this.props.udboCloseProductEksListCachedDate, salaryActiveProductEksList: this.props.salaryActiveProductEksList, salaryActiveProductEksListFetching: this.props.salaryActiveProductEksListFetching, salaryActiveProductEksListError: this.props.salaryActiveProductEksListError, salaryActiveProductEksListCachedDate: this.props.salaryActiveProductEksListCachedDate, salaryCloseProductEksList: this.props.salaryCloseProductEksList, salaryCloseProductEksListFetching: this.props.salaryCloseProductEksListFetching, salaryCloseProductEksListError: this.props.salaryCloseProductEksListError, salaryCloseProductEksListCachedDate: this.props.salaryCloseProductEksListCachedDate, isVisibleModalCustomerEditor: this.props.isVisibleModalCustomerEditor, navigateToAgentListScreen: this.props.navigateToAgentListScreen, performAgentListCurrentModeRefresh: this.props.performAgentListCurrentModeRefresh, performAgentListFlush: this.props.performAgentListFlush, agentList: this.props.agentList, agentListFetching: this.props.agentListFetching, agentListError: this.props.agentListError, agentListCacheDate: this.props.agentListCacheDate, productListAgreementStatus: this.props.productListAgreementStatus, inputSharePopoverSearchRefresh: this.props.inputSharePopoverSearchRefresh, inputCurrentRecipientListRefresh: this.props.inputCurrentRecipientListRefresh, inputCurrentFileFormatRefresh: this.props.inputCurrentFileFormatRefresh, inputCurrentRepresentationRefresh: this.props.inputCurrentRepresentationRefresh, navigateToPopoverShareBack: this.props.navigateToPopoverShareBack, navigateToPopoverShareRecipientsScreen: this.props.navigateToPopoverShareRecipientsScreen, navigateToPopoverShareRepresentationScreen: this.props.navigateToPopoverShareRepresentationScreen, navigateToPopoverShareFormatScreen: this.props.navigateToPopoverShareFormatScreen, performPopoverShareShow: this.props.performPopoverShareShow, performPopoverShareHide: this.props.performPopoverShareHide, performSend: this.props.performSend, currentRecipientList: this.props.currentRecipientList, currentFileFormat: this.props.currentFileFormat, currentRepresentation: this.props.currentRepresentation, isVisiblePopoverShare: this.props.isVisiblePopoverShare, personHistoryList: this.props.personHistoryList, foundPersonList: this.props.foundPersonList, foundPersonListInProgress: this.props.foundPersonListInProgress, foundPersonListError: this.props.foundPersonListError, inputSharePopoverSearch: this.props.inputSharePopoverSearch, foundPersonListClear: this.props.foundPersonListClear, sendFetching: this.props.sendFetching, sendError: this.props.sendError, sendSuccess: this.props.sendSuccess, shareDataRefresh: this.props.shareDataRefresh, performQlikEvent: this.props.performQlikEvent, performRefreshBarHide: this.props.performRefreshBarHide, currentUserAd: this.props.currentUserAd, performProductListModalAlertShow: this.props.performProductListModalAlertShow, performProductListModalAlertHide: this.props.performProductListModalAlertHide, isVisibleProductListModalAlert: this.props.isVisibleProductListModalAlert, prognosticProductList: this.props.prognosticProductList, prognosticProductListFetching: this.props.prognosticProductListFetching, prognosticProductListError: this.props.prognosticProductListError, isVisiblePrognosticProductListModalAlert: this.props.isVisiblePrognosticProductListModalAlert, performPrognosticProductListModalAlertHide: this.props.performPrognosticProductListModalAlertHide, callGetForecastPrognosticDealList: this.props.callGetForecastPrognosticDealList, customerCachedDate: this.props.customerCachedDate, callGetAgentList: this.props.callGetAgentList, isQlikLoggedIn: this.props.isQlikLoggedIn, isActivityAccessError: this.props.isActivityAccessError }));
    }
}
function mapStateToProps(state) {
    return {
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,
        customerNavigationHistory: state.user.mrmkmcibCRM.reducerCustomer.customerNavigationHistory,
        currentCustomerId: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        isDashboardExpandedMode: state.user.mrmkmcibCRM.reducerCustomer.isDashboardExpandedMode,
        isVisiblePopoverHolder: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverHolder,
        isVisiblePopoverCurator: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverCurator,
        isVisiblePopoverOccasionList: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverOccasionList,
        isVisiblePopoverNoteList: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverNoteList,
        isVisiblePopoverProblemList: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverProblemList,
        isVisibleModalActivityEditor: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalActivityEditor,
        isVisibleModalPlanner: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalPlanner,
        isVisibleModalEmailSend: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalEmailSend,
        isVisibleModalAssociateSearch: state.user.mrmkmcibCRM.reducerCustomer.isVisibleModalAssociateSearch,
        isSearchModeAffiliateList: state.user.mrmkmcibCRM.reducerCustomer.isSearchModeAffiliateList,
        inputSearchAffiliateList: state.user.mrmkmcibCRM.reducerCustomer.inputSearchAffiliateList,
        affiliateSearchList: state.user.mrmkmcibCRM.reducerCustomer.affiliateSearchList,
        currentTab: state.user.mrmkmcibCRM.reducerCustomer.currentTab,
        isVisiblePopoverOwner: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverOwner,
        currentOwner: state.user.mrmkmcibCRM.reducerCustomer.currentOwner,
        currentPopoverLimitItem: state.user.mrmkmcibCRM.reducerCustomer.currentPopoverLimitItem,
        isVisiblePopoverLimit: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePopoverLimit,
        customerFetching: state.user.mrmkmcibCRM.reducerCustomer.customerFetching,
        customerError: state.user.mrmkmcibCRM.reducerCustomer.customerError,
        limit: state.user.mrmkmcibCRM.reducerCustomer.limit,
        limitFetching: state.user.mrmkmcibCRM.reducerCustomer.limitFetching,
        limitError: state.user.mrmkmcibCRM.reducerCustomer.limitError,
        limitCachedDate: state.user.mrmkmcibCRM.reducerCustomer.limitCachedDate,
        limitOld: state.user.mrmkmcibCRM.reducerCustomer.limitOld,
        limitOldFetching: state.user.mrmkmcibCRM.reducerCustomer.limitOldFetching,
        limitOldError: state.user.mrmkmcibCRM.reducerCustomer.limitOldError,
        limitOldCachedDate: state.user.mrmkmcibCRM.reducerCustomer.limitOldCachedDate,
        //START CREDIT product list state
        creditActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductList,
        creditActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListFetching,
        creditActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListError,
        creditActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListUpdating,
        creditActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListCachedDate,
        creditCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductList,
        creditCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListFetching,
        creditCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListUpdating,
        creditCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListError,
        creditCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListCachedDate,
        //END CREDIT product list state
        //START DEPOSIT product list state
        depositActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductList,
        depositActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListFetching,
        depositActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListUpdating,
        depositActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListError,
        depositActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListCachedDate,
        depositCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductList,
        depositCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListFetching,
        depositCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListUpdating,
        depositCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListError,
        depositCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListCachedDate,
        //END DEPOSIT product list state
        //START SETTLEMENT_AGREEMENT product list state
        settlementAgreementActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList,
        settlementAgreementActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListFetching,
        settlementAgreementActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListUpdating,
        settlementAgreementActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListError,
        settlementAgreementActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListCachedDate,
        settlementAgreementCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList,
        settlementAgreementCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListFetching,
        settlementAgreementCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListUpdating,
        settlementAgreementCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListError,
        settlementAgreementCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListCachedDate,
        //END SETTLEMENT_AGREEMENT product list state
        //START CORPORATE_CARD product list state
        corporateCardActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductList,
        corporateCardActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListFetching,
        corporateCardActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListUpdating,
        corporateCardActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListError,
        corporateCardActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListCachedDate,
        corporateCardCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductList,
        corporateCardCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListFetching,
        corporateCardCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListUpdating,
        corporateCardCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListError,
        corporateCardCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListCachedDate,
        //END CORPORATE_CARD product list state
        //START ENCASHMENT_CONTRACT product list state
        encashmentContractActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductList,
        encashmentContractActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListFetching,
        encashmentContractActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListUpdating,
        encashmentContractActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListError,
        encashmentContractActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListCachedDate,
        encashmentContractCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductList,
        encashmentContractCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListFetching,
        encashmentContractCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListUpdating,
        encashmentContractCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListError,
        encashmentContractCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListCachedDate,
        //END ENCASHMENT_CONTRACT product list state
        //START DBO product list state
        dboActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductList,
        dboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListFetching,
        dboActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListUpdating,
        dboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListError,
        dboActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListCachedDate,
        dboCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductList,
        dboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListFetching,
        dboCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListUpdating,
        dboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListError,
        dboCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListCachedDate,
        //END DBO product list state
        //START ACQUIRING product list state
        acquiringActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductList,
        acquiringActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListFetching,
        acquiringActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListUpdating,
        acquiringActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListError,
        acquiringActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListCachedDate,
        acquiringCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductList,
        acquiringCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListFetching,
        acquiringCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListUpdating,
        acquiringCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListError,
        acquiringCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListCachedDate,
        //END ACQUIRING product list state
        //START SALARY product list state
        salaryActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductList,
        salaryActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListFetching,
        salaryActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListUpdating,
        salaryActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListError,
        salaryActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListCachedDate,
        salaryCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductList,
        salaryCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListFetching,
        salaryCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListUpdating,
        salaryCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListError,
        salaryCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListCachedDate,
        //END SALARY product list state
        //START UDBO product list state
        udboActiveProductList: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductList,
        udboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListFetching,
        udboActiveProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListUpdating,
        udboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListError,
        udboActiveProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListCachedDate,
        udboCloseProductList: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductList,
        udboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListFetching,
        udboCloseProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListUpdating,
        udboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListError,
        udboCloseProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListCachedDate,
        //END UDBO product list state
        legalInfoProductList: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductList,
        legalInfoProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListFetching,
        legalInfoProductListUpdating: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListUpdating,
        legalInfoProductListError: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListError,
        legalInfoProductListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListCachedDate,
        creditActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksList,
        creditActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListFetching,
        creditActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListError,
        creditActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListCachedDate,
        creditCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksList,
        creditCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListFetching,
        creditCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListError,
        creditCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListCachedDate,
        settlementAgreementActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksList,
        settlementAgreementActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListFetching,
        settlementAgreementActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListError,
        settlementAgreementActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListCachedDate,
        settlementAgreementCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksList,
        settlementAgreementCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListFetching,
        settlementAgreementCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListError,
        settlementAgreementCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListCachedDate,
        depositActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksList,
        depositActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListFetching,
        depositActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListError,
        depositActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListCachedDate,
        depositCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksList,
        depositCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListFetching,
        depositCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListError,
        depositCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListCachedDate,
        corporateCardActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksList,
        corporateCardActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListFetching,
        corporateCardActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListError,
        corporateCardActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListCachedDate,
        corporateCardCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksList,
        corporateCardCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListFetching,
        corporateCardCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListError,
        corporateCardCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListCachedDate,
        encashmentContractActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksList,
        encashmentContractActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListFetching,
        encashmentContractActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListError,
        encashmentContractActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListCachedDate,
        encashmentContractCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksList,
        encashmentContractCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListFetching,
        encashmentContractCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListError,
        encashmentContractCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListCachedDate,
        acquiringActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksList,
        acquiringActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListFetching,
        acquiringActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListError,
        acquiringActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListCachedDate,
        acquiringCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksList,
        acquiringCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListFetching,
        acquiringCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListError,
        acquiringCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListCachedDate,
        dboActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksList,
        dboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListFetching,
        dboActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListError,
        dboActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListCachedDate,
        dboCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksList,
        dboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListFetching,
        dboCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListError,
        dboCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListCachedDate,
        udboActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksList,
        udboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListFetching,
        udboActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListError,
        udboActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListCachedDate,
        udboCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksList,
        udboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListFetching,
        udboCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListError,
        udboCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListCachedDate,
        salaryActiveProductEksList: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksList,
        salaryActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListFetching,
        salaryActiveProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListError,
        salaryActiveProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListCachedDate,
        salaryCloseProductEksList: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksList,
        salaryCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListFetching,
        salaryCloseProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListError,
        salaryCloseProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListCachedDate,
        legalInfoProductEksList: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksList,
        legalInfoProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListFetching,
        legalInfoProductEksListError: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListError,
        legalInfoProductEksListCachedDate: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListCachedDate,
        isVisibleModalCustomerEditor: state.user.mrmkmcibCRM.reducerCustomerEditor.isVisibleModalCustomerEditor,
        agentList: state.user.mrmkmcibCRM.reducerAgentList.agentList,
        agentListFetching: state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
        agentListError: state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
        agentListCacheDate: state.user.mrmkmcibCRM.reducerAgentList.agentListCachedDate,
        currentRecipientList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRecipientList,
        currentFileFormat: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentFileFormat,
        currentRepresentation: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRepresentation,
        isVisiblePopoverShare: state.user.mrmkmcibDashboard.reducerCustomerDashboard.isVisiblePopoverShare,
        personHistoryList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.personHistoryList,
        foundPersonList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonList,
        foundPersonListInProgress: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonListInProgress,
        foundPersonListError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonListError,
        inputSharePopoverSearch: state.user.mrmkmcibDashboard.reducerCustomerDashboard.inputSharePopoverSearch,
        sendFetching: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendFetching,
        sendError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendError,
        sendSuccess: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendSuccess,
        currentUserAd: state.user.mrmkmcibApp.reducerAuthorization.currentUserAd,
        isVisibleProductListModalAlert: state.user.mrmkmcibCRM.reducerCustomer.isVisibleProductListModalAlert,
        prognosticProductList: state.user.mrmkmcibCRM.reducerCustomer.prognosticProductList,
        prognosticProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.prognosticProductListFetching,
        prognosticProductListError: state.user.mrmkmcibCRM.reducerCustomer.prognosticProductListError,
        isVisiblePrognosticProductListModalAlert: state.user.mrmkmcibCRM.reducerCustomer.isVisiblePrognosticProductListModalAlert,
        customerCachedDate: state.user.mrmkmcibCRM.reducerCustomer.customerCachedDate,
        isQlikLoggedIn: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentQlikMessage.payload.generateFileParameters,
        isActivityAccessError: state.user.mrmkmcibCRM.reducerCustomer.isActivityAccessError,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performCallGetForceRequestProductList: (type) => {
            dispatch(thunkCustomer.performCallGetForceRequestProductList(type));
        },
        performCallGetCachedRequestProductList: (type) => {
            dispatch(thunkCustomer.performCallGetCachedRequestProductList(type));
        },
        performCallGetUncachedRequestProductList: (type) => {
            dispatch(thunkCustomer.performCallGetUncachedRequestProductList(type));
        },
        performInputProductListAgreementStatus: (value) => {
            dispatch(thunkCustomer.performInputProductAgreementStatus(value));
        },
        performDashboardExpandedModeToggle: () => {
            dispatch(thunkCustomer.performDashboardExpandedModeToggle());
        },
        performInputSearchAffiliateList: (search) => {
            dispatch(thunkCustomer.performInputSearchAffiliateList(search));
        },
        performAffiliateListSearch: () => {
            dispatch(thunkCustomer.performAffiliateListSearch());
        },
        performSearchAffiliateListEnable: () => {
            dispatch(thunkCustomer.performSearchAffiliateListEnable());
        },
        performSearchAffiliateListDisable: () => {
            dispatch(thunkCustomer.performSearchAffiliateListDisable());
        },
        performChangeTab: (index, value) => {
            dispatch(thunkCustomer.performChangeTab(index, value));
        },
        performPopoverHolderShow: () => {
            dispatch(thunkCustomer.performPopoverHolderShow());
        },
        performPopoverHolderHide: () => {
            dispatch(thunkCustomer.performPopoverHolderHide());
        },
        performPopoverCuratorShow: () => {
            dispatch(thunkCustomer.performPopoverCuratorShow());
        },
        performPopoverCuratorHide: () => {
            dispatch(thunkCustomer.performPopoverCuratorHide());
        },
        navigateToAgentListScreen: () => {
            dispatch(thunkCustomer.navigateToAgentListScreen());
        },
        performPopoverOccasionListShow: () => {
            dispatch(thunkCustomer.performPopoverOccasionListShow());
        },
        performFlush: () => {
            dispatch(thunkCustomer.performFlush());
        },
        performPopoverOccasionListHide: () => {
            dispatch(thunkCustomer.performPopoverOccasionListHide());
        },
        performPopoverNoteListShow: () => {
            dispatch(thunkCustomer.performPopoverNoteListShow());
        },
        performPopoverNoteListHide: () => {
            dispatch(thunkCustomer.performPopoverNoteListHide());
        },
        performPopoverProblemListShow: () => {
            dispatch(thunkCustomer.performPopoverProblemListShow());
        },
        performPopoverProblemListHide: () => {
            dispatch(thunkCustomer.performPopoverProblemListHide());
        },
        performPopoverOwnerShow: (owner) => {
            dispatch(thunkCustomer.performPopoverOwnerShow(owner));
        },
        performPopoverOwnerHide: () => {
            dispatch(thunkCustomer.performPopoverOwnerHide());
        },
        performNavigateToOwnerScreen: (owner, customerMode) => {
            dispatch(thunkCustomer.performNavigateToOwnerScreen(owner, customerMode));
        },
        navigateToOwnerAgentScreen: (agent, AgentContextMode) => {
            dispatch(thunkCustomer.navigateToOwnerAgentScreen(agent, AgentContextMode));
        },
        navigateToCustomerScreen: (customer, customerMode, showCustomer) => {
            dispatch(thunkCustomer.navigateToCustomerScreen(customer, customerMode || Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show));
        },
        performAgentListFlush: () => {
            dispatch(thunkAgentList.performFlush());
        },
        performPopoverLimitHide: () => {
            dispatch(thunkCustomer.performPopoverLimitHide());
        },
        navigateToPopoverLimitItemScreen: (item) => {
            dispatch(thunkCustomer.navigateToPopoverLimitItemScreen(item));
        },
        navigatePopoverLimitBack: () => {
            dispatch(thunkCustomer.navigatePopoverLimitBack());
        },
        callGetLimitNew: (refresh = false) => {
            dispatch(thunkCustomer.callGetLimitNew(refresh));
        },
        callGetLimitOld: (refresh = false) => {
            dispatch(thunkCustomer.callGetLimitOld(refresh));
        },
        performLimitShow: () => {
            dispatch(thunkCustomer.performLimitShow());
        },
        performProductTypeListRefresh: () => {
            dispatch(thunkCustomer.performProductTypeListRefresh());
        },
        performProductTypeListForceRefresh: () => {
            dispatch(thunkCustomer.performProductTypeListForceRefresh());
        },
        navigateToCustomerActivityIncludeScreen: () => {
            dispatch(thunkCustomer.navigateToCustomerActivityIncludeScreen());
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkCustomer.navigateToMemberListScreen());
        },
        navigateToCustomerActivityExcludeScreen: () => {
            dispatch(thunkCustomer.navigateToCustomerActivityExcludeScreen());
        },
        navigateToCustomerActivityAccessScreen: () => {
            dispatch(thunkCustomer.navigateToCustomerActivityAccessScreen());
        },
        closeCustomerActivityPanel: () => {
            dispatch(thunkCustomer.closeCustomerActivityPanel());
        },
        performContainerReset: () => {
            dispatch(thunkCustomer.performContainerReset());
        },
        navigateToOccasionListScreen: () => {
            dispatch(thunkCustomer.navigateToOccasionListScreen());
        },
        performCustomerOpen: (customerId, customerMode) => {
            dispatch(thunkAppCRM.performCustomerOpen(customerId, customerMode));
        },
        performGszOpen: () => {
            dispatch(thunkAppCRM.performGszOpen());
        },
        performCallEksRequestProductList: (productType, productListAgreementStatus) => dispatch(thunkCustomer.performCallEksRequestProductList(productType, productListAgreementStatus)),
        performCustomerEditorShow: (customer) => {
            dispatch(thunkCustomerEditor.performCustomerEditorShow(customer));
        },
        navigateBack: () => {
            dispatch(thunkCustomer.navigateBackHistoryMobileApp());
        },
        navigateToProductListScreen: (productType) => {
            dispatch(thunkProductList.navigateToProductListScreen(productType));
        },
        navigateToProductForecastDealInfoScreen: (deal) => {
            dispatch(thunkProductList.navigateToProductForecastDealInfoScreen(deal));
        },
        navigateToProductForecastEventInfoScreen: (event) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event));
        },
        inputSharePopoverSearchRefresh: (value) => {
            dispatch(thunkCustomerDashboard.inputSharePopoverSearchRefresh(value));
        },
        inputCurrentRecipientListRefresh: (value, operation) => {
            dispatch(thunkCustomerDashboard.inputCurrentRecipientListRefresh(value, operation));
        },
        inputCurrentFileFormatRefresh: (value) => {
            dispatch(thunkCustomerDashboard.inputCurrentFileFormatRefresh(value));
        },
        inputCurrentRepresentationRefresh: (value) => {
            dispatch(thunkCustomerDashboard.inputCurrentRepresentationRefresh(value));
        },
        foundPersonListClear: () => {
            dispatch(thunkCustomerDashboard.foundPersonListClear());
        },
        navigateToPopoverShareBack: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareBack());
        },
        navigateToPopoverShareRecipientsScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareRecipientsScreen());
        },
        navigateToPopoverShareRepresentationScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareRepresentationScreen());
        },
        navigateToPopoverShareFormatScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareFormatScreen());
        },
        performPopoverShareShow: () => {
            dispatch(thunkCustomerDashboard.performPopoverShareShow());
        },
        performPopoverShareHide: () => {
            dispatch(thunkCustomerDashboard.performPopoverShareHide());
        },
        performSend: () => {
            dispatch(thunkCustomerDashboard.performSend());
        },
        performInit: () => {
            dispatch(thunkCustomer.performInit());
        },
        shareDataRefresh: (message) => {
            dispatch(thunkCustomerDashboard.shareDataRefresh(message));
        },
        performQlikEvent: (message) => {
            dispatch(thunkCustomerDashboard.performQlikEvent(message));
        },
        performRefreshBarHide: () => {
            dispatch(thunkCustomer.performRefreshBarHide());
        },
        performProductListModalAlertShow: () => {
            dispatch(thunkCustomer.performProductListModalAlertShow());
        },
        performProductListModalAlertHide: () => {
            dispatch(thunkCustomer.performProductListModalAlertHide());
        },
        callGetAgentList: (id) => {
            dispatch(thunkAgentList.callGetAgentList(id));
        },
        performPrognosticProductListModalAlertHide: () => {
            dispatch(thunkCustomer.performPrognosticProductListModalAlertHide());
        },
        callGetForecastPrognosticDealList: () => {
            dispatch(thunkCustomer.callGetForecastPrognosticDealList());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCustomer);
//# sourceMappingURL=ContainerCustomer.js.map