/**
 * Models for AppDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-dashboard"
import Error from "../models/Error"


// TODO Describe models used in AppDashboard actions and thunks.


const defaultState = {
    get state(): IAppDashboardState {
        return {
            qlikAvailabilityCheckFetching: true,
            currentRecipientList: defaultValues.PersonList, // State parameter displayed in "AppDashboard" screen.
            currentFileFormat: Enums.FileFormat.Excel, // State parameter displayed in "AppDashboard" screen.
            currentRepresentation: Enums.Representation.Slides,  // State parameter displayed in "AppDashboard" screen.
            isVisiblePopoverShare: false,  // State parameter displayed in "AppDashboard" screen.
            qlikError: null,  // State parameter displayed in "AppDashboard" screen.
            currentUser: defaultValues.Employee,  // State parameter displayed in "AppDashboard" screen.
            currentQlikMessage: defaultValues.QlikMessage,  // State parameter displayed in "CustomerDashboard" screen.
            isSearchMode: false,  // State parameter displayed in "AppDashboard" screen. 
            inputSearch: '',  // State parameter displayed in "AppDashboard" screen. 
            customerSearchType: 0,  // State parameter displayed in "AppDashboard" screen. 
            customerSearchError: '',  // State parameter displayed in "AppDashboard" screen. 
            isSearchError: false,  // State parameter displayed in "AppDashboard" screen. 
            currentSearchPage: 0,  // State parameter displayed in "AppDashboard" screen. 
            customerSearchList: defaultValues.CustomerList,  // State parameter displayed in "AppDashboard" screen. 
            isSearchCustomerManaged: true, // State parameter displayed in "AppDashboard" screen. Search only managed customers.
            qlikAvailabilityCheck: defaultValues.boolean,  // Fetch result for "callQlikAvailabilityCheck" thunk.
            qlikAvailabilityCheckError: null,  // Network error info for thunk chain "callQlikAvailabilityCheck".
            qlikAvailabilityCheckCachedDate: null,  // Response data cache date for network thunk chain "callQlikAvailabilityCheck".
            search: defaultValues.boolean,  // Result for "performSearch" thunk.
            searchInProgress: false,  // Progress indicator for thunk chain "performSearch".
            searchError: null,  // Error info for thunk chain "performSearch".
            customerSearchListFetching: false,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
            customerSearchListError: null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
            customerSearchListCachedDate: null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
            searchAppend: defaultValues.boolean,  // Result for "performCustomerSearchListAppend" thunk.
            searchAppendInProgress: false,  // Progress indicator for thunk chain "performCustomerSearchListAppend".
            searchAppendError: null,  // Error info for thunk chain "performCustomerSearchListAppend".
            customerSearchListPage: defaultValues.CustomerListPage,  // Fetch result for "searchAppend_callGetCustomerSearchListPage" thunk.
            customerSearchListPageFetching: false,  // Fetching indicator for network thunk chain "searchAppend_callGetCustomerSearchListPage".
            customerSearchListPageError: null,  // Network error info for thunk chain "searchAppend_callGetCustomerSearchListPage".
            customerSearchListPageCachedDate: null,  // Response data cache date for network thunk chain "searchAppend_callGetCustomerSearchListPage".
            searchHistoryList: defaultValues.SearchHistoryList,  // Result for "recoverSearchHistoryList" thunk.
            searchHistoryListInProgress: false,  // Progress indicator for thunk chain "recoverSearchHistoryList".
            searchHistoryListError: null,  // Error info for thunk chain "recoverSearchHistoryList".
            personHistoryList: defaultValues.PersonList,
            personHistoryListInProgress: false,
            personHistoryListError: null,
            foundPersonList: defaultValues.PersonList,  // Result for "performFindPeople" thunk.
            foundPersonListInProgress: false,  // Progress indicator for thunk chain "performFindPeople".
            foundPersonListError: null,  // Error info for thunk chain "performFindPeople".
            inputSharePopoverSearch: '', // State parameter displayed in "AppDashboard" screen.
            sendFetching: false, // State parameter displayed in "AppDashboard" screen.
            sendError: null,// State parameter displayed in "AppDashboard" screen.
            sendSuccess: false,// State parameter displayed in "AppDashboard" screen.
            currentQlikUrl: null,// State parameter for addition to url
            qlikCookie: null, // Cookie to header qlik.
            isPopoverVisibleSearchScreen: false,// State parameter. true when current screen of Popover is Search
            supParameters: defaultValues.SupParams,
            
            appBuildVersion: null, // AppMRMKMCIB version
            appServerUrl: null, // AppMRMKMCIB server URL
            appServerPath: null, // AppMRMKMCIB server app URL path
            navigateBackData: null,
            // TODO Describe AppDashboard reducer state.


        }
    }
}

export interface IAppDashboardState {
    currentRecipientList: ModelsScheduler.PersonList,
    currentFileFormat: Enums.FileFormat, //State parameter displayed in "AppDashboard" screen.
    currentRepresentation: Enums.Representation, // State parameter displayed in "AppDashboard" screen.
    isVisiblePopoverShare: boolean,  // State parameter displayed in "AppDashboard" screen. 
    qlikError: Error | null,  // State parameter displayed in "AppDashboard" screen.
    currentUser: ModelsApp.Employee,  // State parameter displayed in "AppDashboard" screen. 
    currentQlikMessage: Models.QlikMessage,  // State parameter displayed in "AppDashboard" screen.
    isSearchMode: boolean,  // State parameter displayed in "AppDashboard" screen. 
    inputSearch: string,  // State parameter displayed in "AppDashboard" screen. 
    customerSearchType: Enums.CustomerSearchType,  // State parameter displayed in "AppDashboard" screen.
    customerSearchError: string,  // State parameter displayed in "AppDashboard" screen. 
    isSearchError: boolean,  // State parameter displayed in "AppDashboard" screen. 
    currentSearchPage: number,  // State parameter displayed in "AppDashboard" screen. 
    customerSearchList: ModelsCrm.CustomerList,  // State parameter displayed in "AppDashboard" screen. 
    isSearchCustomerManaged: boolean,  // State parameter displayed in "AppDashboard" screen. Search only managed customers.
    qlikAvailabilityCheck: boolean,  // Fetch result for "callQlikAvailabilityCheck" thunk.
    qlikAvailabilityCheckFetching: boolean,  // Fetching indicator for network thunk chain "callQlikAvailabilityCheck".
    qlikAvailabilityCheckError: Error | null,  // Network error info for thunk chain "callQlikAvailabilityCheck".
    qlikAvailabilityCheckCachedDate: Date | null,  // Response data cache date for network thunk chain "callQlikAvailabilityCheck".
    search: boolean,  // Result for "performSearch" thunk.
    searchInProgress: boolean,  // Progress indicator for thunk chain "performSearch".
    searchError: Error | null,  // Error info for thunk chain "performSearch".
    customerSearchListFetching: boolean,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
    customerSearchListError: Error | null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
    customerSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
    searchAppend: boolean,  // Result for "performCustomerSearchListAppend" thunk.
    searchAppendInProgress: boolean,  // Progress indicator for thunk chain "performCustomerSearchListAppend".
    searchAppendError: Error | null,  // Error info for thunk chain "performCustomerSearchListAppend".
    customerSearchListPage: ModelsCrm.CustomerListPage,  // Fetch result for "searchAppend_callGetCustomerSearchListPage" thunk.
    customerSearchListPageFetching: boolean,  // Fetching indicator for network thunk chain "searchAppend_callGetCustomerSearchListPage".
    customerSearchListPageError: Error | null,  // Network error info for thunk chain "searchAppend_callGetCustomerSearchListPage".
    customerSearchListPageCachedDate: Date | null,  // Response data cache date for network thunk chain "searchAppend_callGetCustomerSearchListPage".
    searchHistoryList: Models.SearchHistoryList,  // Result for "recoverSearchHistoryList" thunk.
    searchHistoryListInProgress: boolean,  // Progress indicator for thunk chain "recoverSearchHistoryList".
    searchHistoryListError: Error | null,  // Error info for thunk chain "recoverSearchHistoryList".
    personHistoryList: ModelsScheduler.PersonList,
    personHistoryListInProgress: boolean,
    personHistoryListError: Error | null,
    foundPersonList: ModelsScheduler.PersonList,  // Result for "performFindPeople" thunk.
    foundPersonListInProgress: boolean,  // Progress indicator for thunk chain "performFindPeople".
    foundPersonListError: Error | null,  // Error info for thunk chain "performFindPeople".
    inputSharePopoverSearch: string, // State parameter displayed in "AppDashboard" screen.
    sendFetching: boolean, // State parameter displayed in "AppDashboard" screen.
    sendError: Error | null, // State parameter displayed in "AppDashboard" screen.
    sendSuccess: boolean, // State parameter displayed in "AppDashboard" screen.
    currentQlikUrl: string | null,// State parameter for addition to url
    qlikCookie: string | null, // Cookie to header qlik.
    isPopoverVisibleSearchScreen: boolean,// State parameter. true when current screen of Popover is Search
    supParameters: Models.SupParams,

    appBuildVersion: string | null, // AppMRMKMCIB version
    appServerUrl: string | null, // AppMRMKMCIB server URL
    appServerPath: string | null, // AppMRMKMCIB server app URL path
    navigateBackData: ModelsApp.NavigateToEntity | null,

    // TODO Describe AppDashboard reducer state.


}

export const initialState = {
    get state(): IAppDashboardState {
        return defaultState.state
    }
}

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
    (user: ModelsApp.Employee,): void;
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
    (customer: ModelsCrm.Customer,): void;
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
