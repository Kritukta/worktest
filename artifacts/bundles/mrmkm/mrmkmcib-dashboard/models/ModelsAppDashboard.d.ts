/**
 * Models for AppDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-dashboard";
import Error from "../models/Error";
export interface IAppDashboardState {
    currentRecipientList: ModelsScheduler.PersonList;
    currentFileFormat: Enums.FileFormat;
    currentRepresentation: Enums.Representation;
    isVisiblePopoverShare: boolean;
    qlikError: Error | null;
    currentUser: ModelsApp.Employee;
    currentQlikMessage: Models.QlikMessage;
    isSearchMode: boolean;
    inputSearch: string;
    customerSearchType: Enums.CustomerSearchType;
    customerSearchError: string;
    isSearchError: boolean;
    currentSearchPage: number;
    customerSearchList: ModelsCrm.CustomerList;
    isSearchCustomerManaged: boolean;
    qlikAvailabilityCheck: boolean;
    qlikAvailabilityCheckFetching: boolean;
    qlikAvailabilityCheckError: Error | null;
    qlikAvailabilityCheckCachedDate: Date | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    customerSearchListFetching: boolean;
    customerSearchListError: Error | null;
    customerSearchListCachedDate: Date | null;
    searchAppend: boolean;
    searchAppendInProgress: boolean;
    searchAppendError: Error | null;
    customerSearchListPage: ModelsCrm.CustomerListPage;
    customerSearchListPageFetching: boolean;
    customerSearchListPageError: Error | null;
    customerSearchListPageCachedDate: Date | null;
    searchHistoryList: Models.SearchHistoryList;
    searchHistoryListInProgress: boolean;
    searchHistoryListError: Error | null;
    personHistoryList: ModelsScheduler.PersonList;
    personHistoryListInProgress: boolean;
    personHistoryListError: Error | null;
    foundPersonList: ModelsScheduler.PersonList;
    foundPersonListInProgress: boolean;
    foundPersonListError: Error | null;
    inputSharePopoverSearch: string;
    sendFetching: boolean;
    sendError: Error | null;
    sendSuccess: boolean;
    currentQlikUrl: string | null;
    qlikCookie: string | null;
    isPopoverVisibleSearchScreen: boolean;
    supParameters: Models.SupParams;
    appBuildVersion: string | null;
    appServerUrl: string | null;
    appServerPath: string | null;
    navigateBackData: ModelsApp.NavigateToEntity | null;
}
export declare const initialState: {
    readonly state: IAppDashboardState;
};
export interface PERFORM_SEND {
    (): void;
}
export interface INPUT_SHARE_POPOVER_SEARCH_REFRESH {
    (value: string): void;
}
export interface INPUT_CURRENT_RECIPIENT_LIST_REFRESH {
    (value: ModelsScheduler.Person, operation: Enums.Operation): void;
}
export interface INPUT_CURRENT_REPRESENTATION_REFRESH {
    (value: Enums.Representation): void;
}
export interface INPUT_CURRENT_FILE_FORMAT_REFRESH {
    (value: Enums.FileFormat): void;
}
export interface FOUND_PERSON_LIST_CLEAR {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_NAVIGATE_BACK {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_HIDE {
    (): void;
}
export interface PERFORM_APPLICATION_INIT {
    (): void;
}
export interface HANDLE_QLIK_ERROR {
    (error: Error | null): void;
}
export interface CALL_QLIK_AVAILABILITY_CHECK {
    (): void;
}
export interface SWAP_CONTEXT {
    (user: ModelsApp.Employee): void;
}
export interface PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED {
    (value: boolean): void;
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
export interface PERFORM_QLIK_EVENT {
    (message: Models.QlikMessage): void;
}
export interface PERFORM_CUSTOMER_SELECT {
    (customer: ModelsCrm.Customer): void;
}
export interface PERFORM_CUSTOMER_OPEN {
    (customer: ModelsCrm.Customer): void;
}
export interface PERFORM_SEARCH_HISTORY_LIST_CLEAR {
    (): void;
}
export interface PERSIST_SEARCH_HISTORY_LIST {
    (): void;
}
export interface RECOVER_SEARCH_HISTORY_LIST {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
