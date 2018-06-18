/**
 * Models for Customer container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface ICustomerState {
    creditActiveProductList: Models.CreditProductList;
    creditActiveProductListFetching: boolean;
    creditActiveProductListError: Error | null;
    creditActiveProductListUpdating: boolean;
    creditActiveProductListCachedDate: Date | null;
    creditActiveProductListOperationUuid: string;
    creditCloseProductList: Models.CreditProductList;
    creditCloseProductListFetching: boolean;
    creditCloseProductListError: Error | null;
    creditCloseProductListUpdating: boolean;
    creditCloseProductListCachedDate: Date | null;
    creditCloseProductListOperationUuid: string;
    depositActiveProductList: Models.DepositProductList;
    depositActiveProductListFetching: boolean;
    depositActiveProductListError: Error | null;
    depositActiveProductListUpdating: boolean;
    depositActiveProductListCachedDate: Date | null;
    depositActiveProductListOperationUuid: string;
    depositCloseProductList: Models.DepositProductList;
    depositCloseProductListFetching: boolean;
    depositCloseProductListError: Error | null;
    depositCloseProductListUpdating: boolean;
    depositCloseProductListCachedDate: Date | null;
    depositCloseProductListOperationUuid: string;
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList;
    settlementAgreementActiveProductListFetching: boolean;
    settlementAgreementActiveProductListUpdating: boolean;
    settlementAgreementActiveProductListError: Error | null;
    settlementAgreementActiveProductListCachedDate: Date | null;
    settlementAgreementActiveProductListOperationUuid: string;
    settlementAgreementCloseProductList: Models.SettlementAgreementProductList;
    settlementAgreementCloseProductListFetching: boolean;
    settlementAgreementCloseProductListUpdating: boolean;
    settlementAgreementCloseProductListError: Error | null;
    settlementAgreementCloseProductListCachedDate: Date | null;
    settlementAgreementCloseProductListOperationUuid: string;
    corporateCardActiveProductList: Models.CorporateCardProductList;
    corporateCardActiveProductListFetching: boolean;
    corporateCardActiveProductListUpdating: boolean;
    corporateCardActiveProductListError: Error | null;
    corporateCardActiveProductListCachedDate: Date | null;
    corporateCardActiveProductListOperationUuid: string;
    corporateCardCloseProductList: Models.CorporateCardProductList;
    corporateCardCloseProductListFetching: boolean;
    corporateCardCloseProductListUpdating: boolean;
    corporateCardCloseProductListError: Error | null;
    corporateCardCloseProductListCachedDate: Date | null;
    corporateCardCloseProductListOperationUuid: string;
    encashmentContractActiveProductList: Models.EncashmentContractProductList;
    encashmentContractActiveProductListFetching: boolean;
    encashmentContractActiveProductListUpdating: boolean;
    encashmentContractActiveProductListError: Error | null;
    encashmentContractActiveProductListCachedDate: Date | null;
    encashmentContractActiveProductListOperationUuid: string;
    encashmentContractCloseProductList: Models.EncashmentContractProductList;
    encashmentContractCloseProductListFetching: boolean;
    encashmentContractCloseProductListUpdating: boolean;
    encashmentContractCloseProductListError: Error | null;
    encashmentContractCloseProductListCachedDate: Date | null;
    encashmentContractCloseProductListOperationUuid: string;
    acquiringActiveProductList: Models.AcquiringProductList;
    acquiringActiveProductListFetching: boolean;
    acquiringActiveProductListUpdating: boolean;
    acquiringActiveProductListError: Error | null;
    acquiringActiveProductListCachedDate: Date | null;
    acquiringActiveProductListOperationUuid: string;
    acquiringCloseProductList: Models.AcquiringProductList;
    acquiringCloseProductListFetching: boolean;
    acquiringCloseProductListUpdating: boolean;
    acquiringCloseProductListError: Error | null;
    acquiringCloseProductListCachedDate: Date | null;
    acquiringCloseProductListOperationUuid: string;
    dboActiveProductList: Models.DboProductList;
    dboActiveProductListFetching: boolean;
    dboActiveProductListUpdating: boolean;
    dboActiveProductListError: Error | null;
    dboActiveProductListCachedDate: Date | null;
    dboActiveProductListOperationUuid: string;
    dboCloseProductList: Models.DboProductList;
    dboCloseProductListFetching: boolean;
    dboCloseProductListUpdating: boolean;
    dboCloseProductListError: Error | null;
    dboCloseProductListCachedDate: Date | null;
    dboCloseProductListOperationUuid: string;
    salaryActiveProductList: Models.SalaryProductList;
    salaryActiveProductListFetching: boolean;
    salaryActiveProductListUpdating: boolean;
    salaryActiveProductListError: Error | null;
    salaryActiveProductListCachedDate: Date | null;
    salaryActiveProductListOperationUuid: string;
    salaryCloseProductList: Models.SalaryProductList;
    salaryCloseProductListFetching: boolean;
    salaryCloseProductListUpdating: boolean;
    salaryCloseProductListError: Error | null;
    salaryCloseProductListCachedDate: Date | null;
    salaryCloseProductListOperationUuid: string;
    udboActiveProductList: Models.UdboProductList;
    udboActiveProductListFetching: boolean;
    udboActiveProductListUpdating: boolean;
    udboActiveProductListError: Error | null;
    udboActiveProductListCachedDate: Date | null;
    udboActiveProductListOperationUuid: string;
    udboCloseProductList: Models.UdboProductList;
    udboCloseProductListFetching: boolean;
    udboCloseProductListUpdating: boolean;
    udboCloseProductListError: Error | null;
    udboCloseProductListCachedDate: Date | null;
    udboCloseProductListOperationUuid: string;
    legalInfoProductList: Models.LegalInfoProductList;
    legalInfoProductListFetching: boolean;
    legalInfoProductListUpdating: boolean;
    legalInfoProductListError: Error | null;
    legalInfoProductListCachedDate: Date | null;
    legalInfoProductListOperationUuid: string;
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
    isActivityCreateMode: boolean;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    customer: Models.CustomerUnknown;
    customerFetching: boolean;
    customerError: Error | null;
    customerCachedDate: Date | null;
    currentMode: Enums.CustomerMode;
    limit: Models.Limit;
    limitFetching: boolean;
    limitError: Error | null;
    limitCachedDate: Date | null;
    limitOld: Models.LimitOld;
    limitOldFetching: boolean;
    limitOldError: Error | null;
    limitOldCachedDate: Date | null;
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
    productListAgreementStatus: Enums.ProductListAgreementStatus;
    isVisibleProductListModalAlert: boolean;
    forecastDealList: Models.ForecastDealList;
    forecastDealListFetching: boolean;
    forecastDealListError: Models.Error | null;
    isActivityAccessMode: boolean;
    agentContextMode: Enums.AgentContextMode;
    customerNavigationHistory: Models.CustomerHistory[];
    operationUuid: string;
    prognosticProductList: Models.ForecastDealList;
    prognosticProductListFetching: boolean;
    prognosticProductListError: Error | null;
    isVisiblePrognosticProductListModalAlert: boolean;
    currentEvent: Models.ForecastEvent;
    isActivityAccessError: boolean;
}
export declare const initialState: {
    readonly state: ICustomerState;
};
export interface PERFORM_DASHBOARD_EXPANDED_MODE_TOGGLE {
    (): void;
}
export interface PERFORM_INPUT_SEARCH_AFFILIATE_LIST {
    (search: string): void;
}
export interface PERFORM_AFFILIATE_LIST_SEARCH {
    (): void;
}
export interface PERFORM_SEARCH_AFFILIATE_LIST_ENABLE {
    (): void;
}
export interface PERFORM_SEARCH_AFFILIATE_LIST_DISABLE {
    (): void;
}
export interface PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS {
    (value: Enums.ProductListAgreementStatus): void;
}
export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.CustomerManagedTab): void;
}
export interface PERFORM_POPOVER_HOLDER_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_HOLDER_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_CURATOR_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_CURATOR_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_OCCASION_LIST_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_OCCASION_LIST_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_NOTE_LIST_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_NOTE_LIST_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_PROBLEM_LIST_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_PROBLEM_LIST_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_OWNER_SHOW {
    (owner: Models.Owner): void;
}
export interface PERFORM_POPOVER_OWNER_HIDE {
    (): void;
}
export interface PERFORM_NAVIGATE_TO_OWNER_SCREEN {
    (owner: Models.Owner, customerMode: Enums.CustomerMode): void;
}
export interface NAVIGATE_TO_OWNER_AGENT_SCREEN {
    (agent: Models.Agent, AgentContextMode?: Enums.AgentContextMode): void;
}
export interface NAVIGATE_TO_CUSTOMER_SCREEN {
    (customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer): void;
}
export interface PERFORM_REFRESH {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}
export interface PERFORM_POPOVER_LIMIT_HIDE {
    (): void;
}
export interface NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN {
    (item: Enums.OldLimitItem): void;
}
export interface NAVIGATE_POPOVER_LIMIT_BACK {
    (): void;
}
export interface CALL_GET_LIMIT_NEW {
    (refresh: boolean): void;
}
export interface CALL_GET_LIMIT_OLD {
    (refresh: boolean): void;
}
export interface PERFORM_LIMIT_SHOW {
    (): void;
}
export interface PERFORM_PRODUCT_TYPE_LIST_REFRESH {
    (): void;
}
export interface PERFORM_PRODUCT_TYPE_LIST_FORCE_REFRESH {
    (): void;
}
export interface PERFORM_CALL_GET_REQUEST_PRODUCT_LIST {
    (type: Enums.ProductType): void;
}
export interface PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST {
    (type: Enums.ProductType, productListStatus: Enums.ProductListAgreementStatus): void;
}
export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_ACCESS_SCREEN {
    (): void;
}
export interface CLOSE_CUSTOMER_ACTIVITY_PANEL {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface NAVIGATE_TO_AGENT_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}
export interface PERFORM_CUSTOMER_SCREEN_MOUNTED {
    (): void;
}
export interface NAVIGATE_TO_OCCASION_LIST_SCREEN {
    (): void;
}
export interface PERFORM_REFRESH_BAR_HIDE {
    (): void;
}
export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW {
    (): void;
}
export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE {
    (): void;
}
export interface PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_HIDE {
    (): void;
}
export interface CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST {
    (): void;
}
export interface NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN {
    (event: Models.ForecastEvent): void;
}
