/**
 * Models for AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IAppCRMState {
    currentUser: ModelsApp.Employee;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentPage: number;
    customerManagedList: Models.CustomerManagedList;
    inputFilterOrganizationStructure: Enums.FilterOrganizationStructure;
    inputFilterMemberRole: Enums.FilterMemberRole;
    disabledFilterOrganizationStructureList: Models.FilterOrganizationStructureList;
    disabledFilterMemberRoleList: Models.FilterMemberRoleList;
    isSearchMode: boolean;
    inputSearch: string;
    customerSearchType: Enums.CustomerSearchType;
    customerSearchError: string;
    isSearchError: boolean;
    currentSearchPage: number;
    customerSearchList: Models.CustomerList;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    customerManagedListFetching: boolean;
    customerManagedListError: Error | null;
    customerManagedListCachedDate: Date | null;
    append: boolean;
    appendInProgress: boolean;
    appendError: Error | null;
    customerManagedListPage: Models.CustomerManagedListPage;
    customerManagedListPageFetching: boolean;
    customerManagedListPageError: Error | null;
    customerManagedListPageCachedDate: Date | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    customerSearchListFetching: boolean;
    customerSearchListError: Error | null;
    customerSearchListCachedDate: Date | null;
    searchAppend: boolean;
    searchAppendInProgress: boolean;
    searchAppendError: Error | null;
    customerSearchListPage: Models.CustomerListPage;
    customerSearchListPageFetching: boolean;
    customerSearchListPageError: Error | null;
    customerSearchListPageCachedDate: Date | null;
    currentExchangePerson: ModelsScheduler.Person;
    isRefreshBarVisible: boolean;
    appBuildVersion: string | null;
    appServerUrl: string | null;
    appServerPath: string | null;
    navigationInProgress: boolean;
    isVisibleModalAppCRMError: boolean;
    currentDeal: Models.ForecastDeal;
    customerOpenInProgress: boolean;
    navigationErrorMessage: string | null;
    navigateStartData: ModelsApp.NavigateToEntity;
}
export declare const initialState: {
    readonly state: IAppCRMState;
};
export interface SWAP_CONTEXT {
    (user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary): void;
}
export interface PERFORM_APPLICATION_INIT {
    (): void;
}
export interface PERFORM_CUSTOMER_LIST_REFRESH {
    (): void;
}
export interface PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE {
    (value: Enums.FilterOrganizationStructure): void;
}
export interface PERFORM_INPUT_FILTER_MEMBER_ROLE {
    (value: Enums.FilterMemberRole): void;
}
export interface VALIDATE_FILTER_LIST {
    (): void;
}
export interface PERFORM_CUSTOMER_MANAGED_LIST_REFRESH {
    (): void;
}
export interface REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST {
    (): void;
}
export interface PERFORM_CUSTOMER_MANAGED_LIST_APPEND {
    (): void;
}
export interface APPEND_CALL_GET_CUSTOMER_MANAGED_LIST {
    (): void;
}
export interface APPEND_CUSTOMER_MANAGED_LIST_CONCAT {
    (): void;
}
export interface PERFORM_SEARCH_MODE_ENABLE {
    (): void;
}
export interface PERFORM_SEARCH_MODE_DISABLE {
    (): void;
}
export interface PERFORM_INPUT_SEARCH {
    (value: string): void;
}
export interface PERFORM_SEARCH_RESET {
    (): void;
}
export interface PERFORM_CUSTOMER_SEARCH_LIST_RESET {
    (): void;
}
export interface PERFORM_SEARCH {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}
export interface PERFORM_REFRESH_BAR_HIDE {
    (): void;
}
export interface SEARCH_VALIDATE_SEARCH {
    (): void;
}
export interface SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST {
    (): void;
}
export interface PERFORM_CUSTOMER_SEARCH_LIST_APPEND {
    (): void;
}
export interface SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE {
    (): void;
}
export interface SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT {
    (): void;
}
export interface PERFORM_CUSTOMER_OPEN {
    (customerId: string, customerMode?: Enums.CustomerMode): void;
}
export interface PERFORM_CHANGE_STAGE_TAB {
    (index: number): void;
}
export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_HELP_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_HELP_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_ACTIVATE {
    (): void;
}
export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE {
    (): void;
}
export interface NAVIGATE_TO_STAGE_DETAILS {
    (stage: Models.DealStage, activePosition: number): void;
}
export interface PERFORM_CUSTOMER_OPEN_EXECUTE {
    (customer: Models.Customer): void;
}
export interface PERFORM_GSZ_OPEN {
    (): void;
}
export interface PERFORM_DEAL_OPEN {
    (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM {
    (): void;
}
export interface PERFORM_CUSTOMER_LIST_APPEND {
    (): void;
}
export interface PERFORM_CUSTOMER_OPEN_ONCE {
    (customer: Models.Customer): void;
}
export interface PERFORM_NAVIGATE_BACK {
    (): void;
}
export interface PERFORM_NAVIGATION_RELOAD {
    (): void;
}
