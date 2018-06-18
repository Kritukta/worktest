import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsCustomer from "../models/ModelsCustomer";
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor";
import { ModelsCustomerDashboard } from "mrmkmcib-dashboard";
import * as ModelsProductList from "../models/ModelsProductList";
import * as ModelsAgentList from "../models/ModelsAgentList";
import Error from "../models/Error";
export interface IStateProps {
    isVisibleProductListModalAlert: boolean;
    customerNavigationHistory: Models.CustomerHistory[];
    currentCustomerId: string;
    currentCustomer: Models.Customer;
    currentCustomerManaged: Models.CustomerManaged;
    isDashboardExpandedMode: boolean;
    isVisiblePopoverHolder: boolean;
    isVisiblePopoverCurator: boolean;
    isVisiblePopoverOccasionList: boolean;
    isVisiblePopoverNoteList: boolean;
    isVisiblePopoverProblemList: boolean;
    isVisibleModalActivityEditor: boolean;
    isVisibleModalPlanner: boolean;
    isVisibleModalEmailSend: boolean;
    isVisibleModalAssociateSearch: boolean;
    isSearchModeAffiliateList: boolean;
    inputSearchAffiliateList: string;
    affiliateSearchList: Models.CustomerList;
    currentTab: Enums.CustomerManagedTab;
    isVisiblePopoverOwner: boolean;
    currentOwner: Models.Owner;
    currentPopoverLimitItem: Enums.OldLimitItem;
    isVisiblePopoverLimit: boolean;
    limit: Models.Limit;
    limitFetching: boolean;
    limitError: Error | null;
    limitCachedDate: Date | null;
    limitOld: Models.LimitOld;
    limitOldFetching: boolean;
    limitOldError: Error | null;
    limitOldCachedDate: Date | null;
    creditActiveProductList: Models.CreditProductList;
    creditActiveProductListFetching: boolean;
    creditActiveProductListUpdating: boolean;
    creditActiveProductListError: Error | null;
    creditActiveProductListCachedDate: Date | null;
    creditCloseProductList: Models.CreditProductList;
    creditCloseProductListFetching: boolean;
    creditCloseProductListUpdating: boolean;
    creditCloseProductListError: Error | null;
    creditCloseProductListCachedDate: Date | null;
    depositActiveProductList: Models.DepositProductList;
    depositActiveProductListFetching: boolean;
    depositActiveProductListUpdating: boolean;
    depositActiveProductListError: Error | null;
    depositActiveProductListCachedDate: Date | null;
    depositCloseProductList: Models.DepositProductList;
    depositCloseProductListFetching: boolean;
    depositCloseProductListUpdating: boolean;
    depositCloseProductListError: Error | null;
    depositCloseProductListCachedDate: Date | null;
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList;
    settlementAgreementActiveProductListFetching: boolean;
    settlementAgreementActiveProductListUpdating: boolean;
    settlementAgreementActiveProductListError: Error | null;
    settlementAgreementActiveProductListCachedDate: Date | null;
    settlementAgreementCloseProductList: Models.SettlementAgreementProductList;
    settlementAgreementCloseProductListFetching: boolean;
    settlementAgreementCloseProductListUpdating: boolean;
    settlementAgreementCloseProductListError: Error | null;
    settlementAgreementCloseProductListCachedDate: Date | null;
    corporateCardActiveProductList: Models.CorporateCardProductList;
    corporateCardActiveProductListFetching: boolean;
    corporateCardActiveProductListUpdating: boolean;
    corporateCardActiveProductListError: Error | null;
    corporateCardActiveProductListCachedDate: Date | null;
    corporateCardCloseProductList: Models.CorporateCardProductList;
    corporateCardCloseProductListFetching: boolean;
    corporateCardCloseProductListUpdating: boolean;
    corporateCardCloseProductListError: Error | null;
    corporateCardCloseProductListCachedDate: Date | null;
    encashmentContractActiveProductList: Models.EncashmentContractProductList;
    encashmentContractActiveProductListFetching: boolean;
    encashmentContractActiveProductListUpdating: boolean;
    encashmentContractActiveProductListError: Error | null;
    encashmentContractActiveProductListCachedDate: Date | null;
    encashmentContractCloseProductList: Models.EncashmentContractProductList;
    encashmentContractCloseProductListFetching: boolean;
    encashmentContractCloseProductListUpdating: boolean;
    encashmentContractCloseProductListError: Error | null;
    encashmentContractCloseProductListCachedDate: Date | null;
    acquiringActiveProductList: Models.AcquiringProductList;
    acquiringActiveProductListFetching: boolean;
    acquiringActiveProductListUpdating: boolean;
    acquiringActiveProductListError: Error | null;
    acquiringActiveProductListCachedDate: Date | null;
    acquiringCloseProductList: Models.AcquiringProductList;
    acquiringCloseProductListFetching: boolean;
    acquiringCloseProductListUpdating: boolean;
    acquiringCloseProductListError: Error | null;
    acquiringCloseProductListCachedDate: Date | null;
    dboActiveProductList: Models.DboProductList;
    dboActiveProductListFetching: boolean;
    dboActiveProductListUpdating: boolean;
    dboActiveProductListError: Error | null;
    dboActiveProductListCachedDate: Date | null;
    dboCloseProductList: Models.DboProductList;
    dboCloseProductListFetching: boolean;
    dboCloseProductListUpdating: boolean;
    dboCloseProductListError: Error | null;
    dboCloseProductListCachedDate: Date | null;
    salaryActiveProductList: Models.SalaryProductList;
    salaryActiveProductListFetching: boolean;
    salaryActiveProductListUpdating: boolean;
    salaryActiveProductListError: Error | null;
    salaryActiveProductListCachedDate: Date | null;
    salaryCloseProductList: Models.SalaryProductList;
    salaryCloseProductListFetching: boolean;
    salaryCloseProductListUpdating: boolean;
    salaryCloseProductListError: Error | null;
    salaryCloseProductListCachedDate: Date | null;
    udboActiveProductList: Models.UdboProductList;
    udboActiveProductListFetching: boolean;
    udboActiveProductListUpdating: boolean;
    udboActiveProductListError: Error | null;
    udboActiveProductListCachedDate: Date | null;
    udboCloseProductList: Models.UdboProductList;
    udboCloseProductListFetching: boolean;
    udboCloseProductListUpdating: boolean;
    udboCloseProductListError: Error | null;
    udboCloseProductListCachedDate: Date | null;
    legalInfoProductList: Models.LegalInfoProductList;
    legalInfoProductListFetching: boolean;
    legalInfoProductListUpdating: boolean;
    legalInfoProductListError: Error | null;
    legalInfoProductListCachedDate: Date | null;
    creditActiveProductEksList: Models.CreditProductList;
    creditActiveProductEksListFetching: boolean;
    creditActiveProductEksListError: Error | null;
    creditActiveProductEksListCachedDate: Date | null;
    creditCloseProductEksList: Models.CreditProductList;
    creditCloseProductEksListFetching: boolean;
    creditCloseProductEksListError: Error | null;
    creditCloseProductEksListCachedDate: Date | null;
    settlementAgreementActiveProductEksList: Models.SettlementAgreementProductList;
    settlementAgreementActiveProductEksListFetching: boolean;
    settlementAgreementActiveProductEksListError: Error | null;
    settlementAgreementActiveProductEksListCachedDate: Date | null;
    settlementAgreementCloseProductEksList: Models.SettlementAgreementProductList;
    settlementAgreementCloseProductEksListFetching: boolean;
    settlementAgreementCloseProductEksListError: Error | null;
    settlementAgreementCloseProductEksListCachedDate: Date | null;
    depositActiveProductEksList: Models.DepositProductList;
    depositActiveProductEksListFetching: boolean;
    depositActiveProductEksListError: Error | null;
    depositActiveProductEksListCachedDate: Date | null;
    depositCloseProductEksList: Models.DepositProductList;
    depositCloseProductEksListFetching: boolean;
    depositCloseProductEksListError: Error | null;
    depositCloseProductEksListCachedDate: Date | null;
    corporateCardActiveProductEksList: Models.CorporateCardProductList;
    corporateCardActiveProductEksListFetching: boolean;
    corporateCardActiveProductEksListError: Error | null;
    corporateCardActiveProductEksListCachedDate: Date | null;
    corporateCardCloseProductEksList: Models.CorporateCardProductList;
    corporateCardCloseProductEksListFetching: boolean;
    corporateCardCloseProductEksListError: Error | null;
    corporateCardCloseProductEksListCachedDate: Date | null;
    encashmentContractActiveProductEksList: Models.EncashmentContractProductList;
    encashmentContractActiveProductEksListFetching: boolean;
    encashmentContractActiveProductEksListError: Error | null;
    encashmentContractActiveProductEksListCachedDate: Date | null;
    encashmentContractCloseProductEksList: Models.EncashmentContractProductList;
    encashmentContractCloseProductEksListFetching: boolean;
    encashmentContractCloseProductEksListError: Error | null;
    encashmentContractCloseProductEksListCachedDate: Date | null;
    acquiringActiveProductEksList: Models.AcquiringProductList;
    acquiringActiveProductEksListFetching: boolean;
    acquiringActiveProductEksListError: Error | null;
    acquiringActiveProductEksListCachedDate: Date | null;
    acquiringCloseProductEksList: Models.AcquiringProductList;
    acquiringCloseProductEksListFetching: boolean;
    acquiringCloseProductEksListError: Error | null;
    acquiringCloseProductEksListCachedDate: Date | null;
    dboActiveProductEksList: Models.DboProductList;
    dboActiveProductEksListFetching: boolean;
    dboActiveProductEksListError: Error | null;
    dboActiveProductEksListCachedDate: Date | null;
    dboCloseProductEksList: Models.DboProductList;
    dboCloseProductEksListFetching: boolean;
    dboCloseProductEksListError: Error | null;
    dboCloseProductEksListCachedDate: Date | null;
    udboActiveProductEksList: Models.UdboProductList;
    udboActiveProductEksListFetching: boolean;
    udboActiveProductEksListError: Error | null;
    udboActiveProductEksListCachedDate: Date | null;
    udboCloseProductEksList: Models.UdboProductList;
    udboCloseProductEksListFetching: boolean;
    udboCloseProductEksListError: Error | null;
    udboCloseProductEksListCachedDate: Date | null;
    salaryActiveProductEksList: Models.SalaryProductList;
    salaryActiveProductEksListFetching: boolean;
    salaryActiveProductEksListError: Error | null;
    salaryActiveProductEksListCachedDate: Date | null;
    salaryCloseProductEksList: Models.SalaryProductList;
    salaryCloseProductEksListFetching: boolean;
    salaryCloseProductEksListError: Error | null;
    salaryCloseProductEksListCachedDate: Date | null;
    legalInfoProductEksList: Models.LegalInfoProductList;
    legalInfoProductEksListFetching: boolean;
    legalInfoProductEksListError: Error | null;
    legalInfoProductEksListCachedDate: Date | null;
    isVisibleModalCustomerEditor: boolean;
    agentList: Models.AgentList;
    agentListFetching: boolean;
    agentListError: Error | null;
    agentListCacheDate: Date | null;
    productListAgreementStatus: Enums.ProductListAgreementStatus;
    currentRecipientList: ModelsScheduler.PersonList;
    currentFileFormat: Enums.FileFormat;
    currentRepresentation: Enums.Representation;
    isVisiblePopoverShare: boolean;
    personHistoryList: ModelsScheduler.PersonList;
    foundPersonList: ModelsScheduler.PersonList;
    foundPersonListInProgress: boolean;
    foundPersonListError: Error | null;
    inputSharePopoverSearch: string;
    sendFetching: boolean;
    sendError: Error | null;
    sendSuccess: boolean;
    currentUserAd: ModelsApp.UserAd;
    customerCachedDate: Date | null;
    isQlikLoggedIn: boolean;
    prognosticProductList: Models.ForecastDealList;
    prognosticProductListFetching: boolean;
    prognosticProductListError: Error | null;
    isVisiblePrognosticProductListModalAlert: boolean;
    customerFetching: boolean;
    customerError: Error | null;
    isActivityAccessError: boolean;
}
export interface IDispatchProps {
    performDashboardExpandedModeToggle: ModelsCustomer.PERFORM_DASHBOARD_EXPANDED_MODE_TOGGLE;
    performInputSearchAffiliateList: ModelsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST;
    performAffiliateListSearch: ModelsCustomer.PERFORM_AFFILIATE_LIST_SEARCH;
    performSearchAffiliateListEnable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE;
    performSearchAffiliateListDisable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE;
    performChangeTab: ModelsCustomer.PERFORM_CHANGE_TAB;
    performPopoverHolderShow: ModelsCustomer.PERFORM_POPOVER_HOLDER_SHOW;
    performPopoverHolderHide: ModelsCustomer.PERFORM_POPOVER_HOLDER_HIDE;
    performPopoverCuratorShow: ModelsCustomer.PERFORM_POPOVER_CURATOR_SHOW;
    performPopoverCuratorHide: ModelsCustomer.PERFORM_POPOVER_CURATOR_HIDE;
    performPopoverOccasionListShow: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_SHOW;
    performPopoverOccasionListHide: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_HIDE;
    performPopoverNoteListShow: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_SHOW;
    performPopoverNoteListHide: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_HIDE;
    performPopoverProblemListShow: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_SHOW;
    performPopoverProblemListHide: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_HIDE;
    performPopoverOwnerShow: ModelsCustomer.PERFORM_POPOVER_OWNER_SHOW;
    performPopoverOwnerHide: ModelsCustomer.PERFORM_POPOVER_OWNER_HIDE;
    performNavigateToOwnerScreen: ModelsCustomer.PERFORM_NAVIGATE_TO_OWNER_SCREEN;
    navigateToOwnerAgentScreen: ModelsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN;
    navigateToCustomerScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN;
    performRefresh: ModelsCustomer.PERFORM_REFRESH;
    performPopoverLimitHide: ModelsCustomer.PERFORM_POPOVER_LIMIT_HIDE;
    navigateToPopoverLimitItemScreen: ModelsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN;
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    navigatePopoverLimitBack: ModelsCustomer.NAVIGATE_POPOVER_LIMIT_BACK;
    callGetLimitNew: ModelsCustomer.CALL_GET_LIMIT_NEW;
    callGetLimitOld: ModelsCustomer.CALL_GET_LIMIT_OLD;
    performLimitShow: ModelsCustomer.PERFORM_LIMIT_SHOW;
    performProductTypeListRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH;
    performProductTypeListForceRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_FORCE_REFRESH;
    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST;
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST;
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST;
    performCallEksRequestProductList: ModelsCustomer.PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST;
    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN;
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN;
    navigateToCustomerActivityAccessScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN;
    navigateToOccasionListScreen: ModelsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN;
    performContainerReset: ModelsCustomer.PERFORM_CONTAINER_RESET;
    closeCustomerActivityPanel: ModelsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL;
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN;
    performAgentListCurrentModeRefresh: ModelsAgentList.PERFORM_AGENT_LIST_CURRENT_MODE_REFRESH;
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN;
    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    performFlush: ModelsCustomer.PERFORM_FLUSH;
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN;
    navigateToProductForecastDealInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN;
    navigateToProductForecastEventInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN;
    performInputProductListAgreementStatus: ModelsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS;
    performAgentListFlush: ModelsAgentList.PERFORM_FLUSH;
    inputSharePopoverSearchRefresh: ModelsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH;
    inputCurrentRecipientListRefresh: ModelsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH;
    inputCurrentFileFormatRefresh: ModelsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH;
    inputCurrentRepresentationRefresh: ModelsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH;
    foundPersonListClear: ModelsCustomerDashboard.FOUND_PERSON_LIST_CLEAR;
    navigateToPopoverShareBack: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK;
    navigateToPopoverShareRecipientsScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS;
    navigateToPopoverShareRepresentationScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION;
    navigateToPopoverShareFormatScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT;
    performPopoverShareShow: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW;
    performPopoverShareHide: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE;
    performSend: ModelsCustomerDashboard.PERFORM_SEND;
    performInit: ModelsCustomer.PERFORM_CUSTOMER_SCREEN_MOUNTED;
    shareDataRefresh: ModelsCustomerDashboard.SHARE_DATA_REFRESH;
    performQlikEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT;
    performRefreshBarHide: ModelsCustomer.PERFORM_REFRESH_BAR_HIDE;
    performProductListModalAlertShow: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW;
    performProductListModalAlertHide: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE;
    performPrognosticProductListModalAlertHide: ModelsCustomer.PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_HIDE;
    callGetForecastPrognosticDealList: ModelsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST;
    callGetAgentList: ModelsAgentList.CALL_GET_AGENT_LIST;
}
export declare type ICustomerProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: any;
export default _default;
