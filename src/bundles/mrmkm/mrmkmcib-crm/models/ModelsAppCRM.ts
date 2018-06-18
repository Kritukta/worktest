/**
 * Models for AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"

const defaultState = {
    get state(): IAppCRMState {
        return {

            currentUser: defaultValues.Employee,  // State parameter displayed in "AppCRM" screen. Scope is opened for current user currentCustomerManaged is null and currentEmployee is null.
            classifierDictionary: defaultValues.ClassifierDictionary,  // State parameter displayed in "AppCRM" screen. FR-4.21.2. External classifiers.
            currentPage: 0,  // State parameter displayed in "AppCRM" screen.
            customerManagedList: defaultValues.CustomerManagedList,  // State parameter displayed in "AppCRM" screen.
            inputFilterOrganizationStructure: Enums.FilterOrganizationStructure.None,  // State parameter displayed in "AppCRM" screen.
            inputFilterMemberRole: Enums.FilterMemberRole.None,  // State parameter displayed in "AppCRM" screen.
            disabledFilterOrganizationStructureList: defaultValues.FilterOrganizationStructureList,  // State parameter displayed in "AppCRM" screen.
            disabledFilterMemberRoleList: defaultValues.FilterMemberRoleList,  // State parameter displayed in "AppCRM" screen.
            isSearchMode: false,  // State parameter displayed in "AppCRM" screen.
            inputSearch: '',  // State parameter displayed in "AppCRM" screen.
            customerSearchType: Enums.CustomerSearchType.Name,  // State parameter displayed in "AppCRM" screen.
            customerSearchError: '',  // State parameter displayed in "AppCRM" screen.
            isSearchError: false,  // State parameter displayed in "AppCRM" screen.
            currentSearchPage: 0,  // State parameter displayed in "AppCRM" screen.
            customerSearchList: defaultValues.CustomerList,  // State parameter displayed in "AppCRM" screen.
            refresh: defaultValues.boolean,  // Result for "performCustomerManagedListRefresh" thunk.
            refreshInProgress: false,  // Progress indicator for thunk chain "performCustomerManagedListRefresh".
            refreshError: null,  // Error info for thunk chain "performCustomerManagedListRefresh".
            customerManagedListFetching: false,  // Fetching indicator for network thunk chain "refresh_callGetCustomerManagedList".
            customerManagedListError: null,  // Network error info for thunk chain "refresh_callGetCustomerManagedList".
            customerManagedListCachedDate: null,  // Response data cache date for network thunk chain "refresh_callGetCustomerManagedList".
            append: defaultValues.boolean,  // Result for "performCustomerManagedListAppend" thunk.
            appendInProgress: false,  // Progress indicator for thunk chain "performCustomerManagedListAppend".
            appendError: null,  // Error info for thunk chain "performCustomerManagedListAppend".
            customerManagedListPage: defaultValues.CustomerManagedListPage,  // Fetch result for "append_callGetCustomerManagedList" thunk.
            customerManagedListPageFetching: false,  // Fetching indicator for network thunk chain "append_callGetCustomerManagedList".
            customerManagedListPageError: null,  // Network error info for thunk chain "append_callGetCustomerManagedList".
            customerManagedListPageCachedDate: null,  // Response data cache date for network thunk chain "append_callGetCustomerManagedList".
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
            currentExchangePerson: defaultValues.Person, // Current Exchange user's personal data (e-mail, name, surename etc.)
            isRefreshBarVisible: false,

            appBuildVersion: null, // AppMRMKMCIB version
            appServerUrl: null, // AppMRMKMCIB server URL
            appServerPath: null, // AppMRMKMCIB server app URL path
            navigationInProgress: false,

            // TODO Describe AppCRM reducer state.
            isVisibleModalAppCRMError: false,
            currentDeal: defaultValues.ForecastDeal,

            customerOpenInProgress: false,
            navigationErrorMessage: null,
            navigateStartData: defaultValues.NavigateToEntity,

        }
    }
}

export interface IAppCRMState {

    currentUser: ModelsApp.Employee,  // State parameter displayed in "AppCRM" screen. Scope is opened for current user currentCustomerManaged is null and currentEmployee is null.
    classifierDictionary: ModelsApp.ClassifierDictionary,  // State parameter displayed in "AppCRM" screen. FR-4.21.2. External classifiers.
    currentPage: number,  // State parameter displayed in "AppCRM" screen.
    customerManagedList: Models.CustomerManagedList,  // State parameter displayed in "AppCRM" screen.
    inputFilterOrganizationStructure: Enums.FilterOrganizationStructure,  // State parameter displayed in "AppCRM" screen.
    inputFilterMemberRole: Enums.FilterMemberRole,  // State parameter displayed in "AppCRM" screen.
    disabledFilterOrganizationStructureList: Models.FilterOrganizationStructureList,  // State parameter displayed in "AppCRM" screen.
    disabledFilterMemberRoleList: Models.FilterMemberRoleList,  // State parameter displayed in "AppCRM" screen.
    isSearchMode: boolean,  // State parameter displayed in "AppCRM" screen.
    inputSearch: string,  // State parameter displayed in "AppCRM" screen.
    customerSearchType: Enums.CustomerSearchType,  // State parameter displayed in "AppCRM" screen.
    customerSearchError: string,  // State parameter displayed in "AppCRM" screen.
    isSearchError: boolean,  // State parameter displayed in "AppCRM" screen.
    currentSearchPage: number,  // State parameter displayed in "AppCRM" screen.
    customerSearchList: Models.CustomerList,  // State parameter displayed in "AppCRM" screen.
    refresh: boolean,  // Result for "performCustomerManagedListRefresh" thunk.
    refreshInProgress: boolean,  // Progress indicator for thunk chain "performCustomerManagedListRefresh".
    refreshError: Error | null,  // Error info for thunk chain "performCustomerManagedListRefresh".
    customerManagedListFetching: boolean,  // Fetching indicator for network thunk chain "refresh_callGetCustomerManagedList".
    customerManagedListError: Error | null,  // Network error info for thunk chain "refresh_callGetCustomerManagedList".
    customerManagedListCachedDate: Date | null,  // Response data cache date for network thunk chain "refresh_callGetCustomerManagedList".
    append: boolean,  // Result for "performCustomerManagedListAppend" thunk.
    appendInProgress: boolean,  // Progress indicator for thunk chain "performCustomerManagedListAppend".
    appendError: Error | null,  // Error info for thunk chain "performCustomerManagedListAppend".
    customerManagedListPage: Models.CustomerManagedListPage,  // Fetch result for "append_callGetCustomerManagedList" thunk.
    customerManagedListPageFetching: boolean,  // Fetching indicator for network thunk chain "append_callGetCustomerManagedList".
    customerManagedListPageError: Error | null,  // Network error info for thunk chain "append_callGetCustomerManagedList".
    customerManagedListPageCachedDate: Date | null,  // Response data cache date for network thunk chain "append_callGetCustomerManagedList".
    search: boolean,  // Result for "performSearch" thunk.
    searchInProgress: boolean,  // Progress indicator for thunk chain "performSearch".
    searchError: Error | null,  // Error info for thunk chain "performSearch".
    customerSearchListFetching: boolean,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
    customerSearchListError: Error | null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
    customerSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
    searchAppend: boolean,  // Result for "performCustomerSearchListAppend" thunk.
    searchAppendInProgress: boolean,  // Progress indicator for thunk chain "performCustomerSearchListAppend".
    searchAppendError: Error | null,  // Error info for thunk chain "performCustomerSearchListAppend".
    customerSearchListPage: Models.CustomerListPage,  // Fetch result for "searchAppend_callGetCustomerSearchListPage" thunk.
    customerSearchListPageFetching: boolean,  // Fetching indicator for network thunk chain "searchAppend_callGetCustomerSearchListPage".
    customerSearchListPageError: Error | null,  // Network error info for thunk chain "searchAppend_callGetCustomerSearchListPage".
    customerSearchListPageCachedDate: Date | null,  // Response data cache date for network thunk chain "searchAppend_callGetCustomerSearchListPage".
    currentExchangePerson: ModelsScheduler.Person,  // State parameter displayed in "ProductList" screen.
    isRefreshBarVisible: boolean,

    appBuildVersion: string | null, // AppMRMKMCIB version
    appServerUrl: string | null, // AppMRMKMCIB server URL
    appServerPath: string | null, // AppMRMKMCIB server app URL path
    navigationInProgress: boolean,

    // TODO Describe AppCRM reducer state.
    isVisibleModalAppCRMError: boolean,
    currentDeal: Models.ForecastDeal,

    customerOpenInProgress: boolean,
    navigationErrorMessage: string | null,
    navigateStartData: ModelsApp.NavigateToEntity,

}

export const initialState = {
    get state(): IAppCRMState {
        return defaultState.state
    }
}


export interface SWAP_CONTEXT {
    (user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary,): void;
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
    ( index: number ): void
}

export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_HELP_SHOW {
    (): void
}

export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_HELP_HIDE {
    (): void
}

export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_ACTIVATE {
    (): void
}

export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW {
    (): void
}

export interface PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE {
    (): void
}

export interface NAVIGATE_TO_STAGE_DETAILS {
    ( stage: Models.DealStage, activePosition: number ): void
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

export interface PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM { (): void; }

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
