/**
 * Actions of AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums as EnumsCrmAll, Models } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const SWAP_CONTEXT = "APP_CRM_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_APPLICATION_INIT = "APP_CRM_CONTAINER_PERFORM_APPLICATION_INIT";
export declare const PERFORM_CUSTOMER_LIST_REFRESH = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_LIST_REFRESH";
export declare const PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE = "APP_CRM_CONTAINER_PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE";
export declare const PERFORM_INPUT_FILTER_MEMBER_ROLE = "APP_CRM_CONTAINER_PERFORM_INPUT_FILTER_MEMBER_ROLE";
export declare const VALIDATE_FILTER_LIST = "APP_CRM_CONTAINER_VALIDATE_FILTER_LIST";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = "APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = "APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = "APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = "APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = "APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = "APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = "APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = "APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE";
export declare const APPEND_CUSTOMER_MANAGED_LIST_CONCAT = "APP_CRM_CONTAINER_APPEND_CUSTOMER_MANAGED_LIST_CONCAT";
export declare const PERFORM_SEARCH_MODE_ENABLE = "APP_CRM_CONTAINER_PERFORM_SEARCH_MODE_ENABLE";
export declare const PERFORM_SEARCH_MODE_DISABLE = "APP_CRM_CONTAINER_PERFORM_SEARCH_MODE_DISABLE";
export declare const PERFORM_INPUT_SEARCH = "APP_CRM_CONTAINER_PERFORM_INPUT_SEARCH";
export declare const PERFORM_SEARCH_RESET = "APP_CRM_CONTAINER_PERFORM_SEARCH_RESET";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_RESET = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_RESET";
export declare const PERFORM_SEARCH = "APP_CRM_CONTAINER_PERFORM_SEARCH";
export declare const PERFORM_SEARCH_EXECUTE = "APP_CRM_CONTAINER_PERFORM_SEARCH_EXECUTE";
export declare const PERFORM_SEARCH_SUCCESS = "APP_CRM_CONTAINER_PERFORM_SEARCH_SUCCESS";
export declare const PERFORM_SEARCH_FAILURE = "APP_CRM_CONTAINER_PERFORM_SEARCH_FAILURE";
export declare const SEARCH_VALIDATE_SEARCH = "APP_CRM_CONTAINER_SEARCH_VALIDATE_SEARCH";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = "APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = "APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = "APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = "APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = "APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = "APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = "APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = "APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE";
export declare const SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = "APP_CRM_CONTAINER_SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT";
export declare const PERFORM_CUSTOMER_OPEN = "APP_CRM_CONTAINER_PERFORM_CUSTOMER_OPEN";
export declare const PERFORM_GSZ_OPEN = "APP_CRM_CONTAINER_PERFORM_GSZ_OPEN";
export declare const PERFORM_DEAL_OPEN = "APP_CRM_CONTAINER_PERFORM_DEAL_OPEN";
export declare const NAVIGATE_BACK = "APP_CRM_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_CONTAINER_RESET = "APP_CRM_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_FLUSH = "APP_CRM_CONTAINER_PERFORM_FLUSH";
export declare const PERFORM_REFRESH_BAR_HIDE = "APP_CRM_CONTAINER_PERFORM_REFRESH_BAR_HIDE";
export declare const PERFORM_SEARCH_TYPE_CHANGE = "APP_CRM_CONTAINER_PERFORM_SEARCH_TYPE_CHANGE";
export declare const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = "APP_CRM_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM";
export declare const NAVIGATION_LOADER_APP_CRM_SHOW = "APP_CRM_CONTAINER_NAVIGATION_LOADER_APP_CRM_SHOW";
export declare const NAVIGATION_LOADER_APP_CRM_HIDE = "APP_CRM_CONTAINER_NAVIGATION_LOADER_APP_CRM_HIDE";
export declare const PERFORM_SET_NAVIGATION_IN_PROGRESS = "APP_CRM_CONTAINER_PERFORM_SET_NAVIGATION_IN_PROGRESS";
/**
 * Internal thunk used in "AppCRM" container. Thunk chain dispatched to set context parameters.
 *
 * @param {ModelsApp.Employee} user .
 * @param {ModelsApp.ClassifierDictionary} classifierDictionary .
 * @param {string} appBuildVersion .
 * @param {string} appServerUrl .
 * @param {string} appServerPath .
 */
export declare type SWAP_CONTEXT = {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentExchangePerson: ModelsScheduler.Person;
    user: ModelsApp.Employee;
    appBuildVersion: string;
    appServerUrl: string;
    appServerPath: string;
};
export declare const swapContext: (user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary, currentExchangePerson: ModelsScheduler.Person, appBuildVersion: string, appServerUrl: string, appServerPath: string) => Action<SWAP_CONTEXT>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to init CRM mobile application.
 *
 */
export declare type PERFORM_APPLICATION_INIT = {};
export declare const performApplicationInit: () => Action<PERFORM_APPLICATION_INIT>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to reload current list.
 *
 */
export declare type PERFORM_CUSTOMER_LIST_REFRESH = {};
export declare const performCustomerListRefresh: () => Action<PERFORM_CUSTOMER_LIST_REFRESH>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current organizational structure filter.
 *
 * @param {Enums.FilterOrganizationStructure} value .
 */
export declare type PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE = {
    value: Enums.FilterOrganizationStructure;
};
export declare const performInputFilterOrganizationStructure: (value: EnumsCrmAll.FilterOrganizationStructure) => Action<PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current member role filter.
 *
 * @param {Enums.FilterMemberRole} value .
 */
export declare type PERFORM_INPUT_FILTER_MEMBER_ROLE = {
    value: Enums.FilterMemberRole;
};
export declare const performInputFilterMemberRole: (value: EnumsCrmAll.FilterMemberRole) => Action<PERFORM_INPUT_FILTER_MEMBER_ROLE>;
/**
 * Internal thunk used in "AppCRM" container. Thunk dispatched on change filter to disable not valid filter values.
 *
 */
export declare type VALIDATE_FILTER_LIST = {};
export declare const validateFilterList: () => Action<VALIDATE_FILTER_LIST>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
 *
 */
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = {};
export declare const performCustomerManagedListRefresh: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = {};
export declare const performCustomerManagedListRefreshExecute: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = {
    data: boolean;
};
export declare const performCustomerManagedListRefreshSuccess: (data: boolean) => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS>;
export declare type PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = {
    data: boolean;
};
export declare const performChangeDisplayErrorModalAppCRM: (data: boolean) => Action<PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = {
    error: Error;
};
export declare const performCustomerManagedListRefreshFailure: (error: Error) => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE>;
/**
 * Internal thunk used in "AppCRM" container. Fetch customer list current page.
 *
 */
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = {};
export declare const refresh_callGetCustomerManagedList: () => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST>;
/**
 * Thunk dispatched by "AppCRM" screen. Remove cache and execute performRefresh
 *
 */
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
export declare type PERFORM_REFRESH_BAR_HIDE = {};
export declare const performRefreshBarHide: () => Action<PERFORM_REFRESH_BAR_HIDE>;
/**
 * Action dispatched on network thunk chain "refresh_callGetCustomerManagedList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page.
 */
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {};
export declare const refresh_callGetCustomerManagedListRequest: () => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST>;
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = {
    response: Response<Models.CustomerManagedList>;
};
export declare const refresh_callGetCustomerManagedListSuccess: (response: Response<Models.CustomerManagedList>) => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>;
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = {
    error: Error;
};
export declare const refresh_callGetCustomerManagedListFailure: (error: Error) => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 *
 */
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND = {};
export declare const performCustomerManagedListAppend: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = {};
export declare const performCustomerManagedListAppendExecute: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = {
    data: boolean;
};
export declare const performCustomerManagedListAppendSuccess: (data: boolean) => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = {
    error: Error;
};
export declare const performCustomerManagedListAppendFailure: (error: Error) => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE>;
/**
 * Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 *
 */
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = {};
export declare const append_callGetCustomerManagedList: () => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST>;
/**
 * Action dispatched on network thunk chain "append_callGetCustomerManagedList" started. Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 */
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {};
export declare const append_callGetCustomerManagedListRequest: () => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST>;
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = {
    response: Response<Models.CustomerManagedListPage>;
};
export declare const append_callGetCustomerManagedListSuccess: (response: Response<Models.CustomerManagedListPage>) => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>;
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = {
    error: Error;
};
export declare const append_callGetCustomerManagedListFailure: (error: Error) => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>;
/**
 * Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer list.
 *
 */
export declare type APPEND_CUSTOMER_MANAGED_LIST_CONCAT = {};
export declare const append_customerManagedListConcat: () => Action<APPEND_CUSTOMER_MANAGED_LIST_CONCAT>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_SEARCH_MODE_ENABLE = {};
export declare const performSearchModeEnable: () => Action<PERFORM_SEARCH_MODE_ENABLE>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to exit search mode
 *
 */
export declare type PERFORM_SEARCH_MODE_DISABLE = {};
export declare const performSearchModeDisable: () => Action<PERFORM_SEARCH_MODE_DISABLE>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SEARCH = {
    value: string;
};
export declare const performInputSearch: (value: string) => Action<PERFORM_INPUT_SEARCH>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to reset search parameters.
 *
 */
export declare type PERFORM_SEARCH_RESET = {};
export declare const performSearchReset: () => Action<PERFORM_SEARCH_RESET>;
/**
 * Internal thunk used in "AppCRM" container. Thunk chain used to reset search parameters.
 *
 */
export declare type PERFORM_CUSTOMER_SEARCH_LIST_RESET = {};
export declare const performCustomerSearchListReset: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_RESET>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
 *
 */
export declare type PERFORM_SEARCH = {};
export declare const performSearch: () => Action<PERFORM_SEARCH>;
export declare type PERFORM_SEARCH_EXECUTE = {};
export declare const performSearchExecute: () => Action<PERFORM_SEARCH_EXECUTE>;
export declare type PERFORM_SEARCH_SUCCESS = {
    data: boolean;
};
export declare const performSearchSuccess: (data: boolean) => Action<PERFORM_SEARCH_SUCCESS>;
export declare type PERFORM_SEARCH_FAILURE = {
    error: Error;
};
export declare const performSearchFailure: (error: Error) => Action<PERFORM_SEARCH_FAILURE>;
/**
 * Internal thunk used in "AppCRM" container. Thunk used to perform search query validation and search type determination.
 *
 */
export declare type SEARCH_VALIDATE_SEARCH = {};
export declare const search_validateSearch: () => Action<SEARCH_VALIDATE_SEARCH>;
/**
 * Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 *
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {};
export declare const search_callGetCustomerSearchList: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>;
/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {};
export declare const search_callGetCustomerSearchListRequest: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = {
    response: Response<Models.CustomerList>;
};
export declare const search_callGetCustomerSearchListSuccess: (response: Response<Models.CustomerList>) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = {
    error: Error;
};
export declare const search_callGetCustomerSearchListFailure: (error: Error) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
 *
 */
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND = {};
export declare const performCustomerSearchListAppend: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = {};
export declare const performCustomerSearchListAppendExecute: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = {
    data: boolean;
};
export declare const performCustomerSearchListAppendSuccess: (data: boolean) => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = {
    error: Error;
};
export declare const performCustomerSearchListAppendFailure: (error: Error) => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE>;
/**
 * Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 *
 */
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = {};
export declare const searchAppend_callGetCustomerSearchListPage: () => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE>;
/**
 * Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 */
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = {};
export declare const searchAppend_callGetCustomerSearchListPageRequest: () => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = {
    response: Response<Models.CustomerListPage>;
};
export declare const searchAppend_callGetCustomerSearchListPageSuccess: (response: Response<Models.CustomerListPage>) => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = {
    error: Error;
};
export declare const searchAppend_callGetCustomerSearchListPageFailure: (error: Error) => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE>;
/**
 * Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer search list.
 *
 */
export declare type SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = {};
export declare const searchAppend_customerSearchListConcat: () => Action<SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open customer screen.
 *
 * @param {string} customerId .
 */
export declare type PERFORM_CUSTOMER_OPEN = {
    customerId: string;
};
export declare const performCustomerOpen: (customerId: string) => Action<PERFORM_CUSTOMER_OPEN>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open GSZ screen.
 *
 * @param {string} gszId .
 */
export declare type PERFORM_GSZ_OPEN = {
    gszId: string;
};
export declare const performGszOpen: (gszId: string) => Action<PERFORM_GSZ_OPEN>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open Deal screen.
 *
 * @param {string} dealId .
 */
export declare type PERFORM_DEAL_OPEN = {
    dealId: string;
};
export declare const performDealOpen: (dealId: string) => Action<PERFORM_DEAL_OPEN>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk used to navigate back in CRM mobile application.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to change searchType value in state.
 *
 */
export declare type PERFORM_SEARCH_TYPE_CHANGE = {
    customerSearchType: EnumsCrmAll.CustomerSearchType;
};
export declare const performSearchTypeChange: (customerSearchType: EnumsCrmAll.CustomerSearchType) => Action<PERFORM_SEARCH_TYPE_CHANGE>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to show loader on CRM page.
 *
 */
export declare type NAVIGATION_LOADER_APP_CRM_SHOW = {};
export declare const navigationLoaderAppCRMShow: () => Action<NAVIGATION_LOADER_APP_CRM_SHOW>;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide loader on CRM page.
 *
 */
export declare type NAVIGATION_LOADER_APP_CRM_HIDE = {};
export declare const navigationLoaderAppCRMHide: () => Action<NAVIGATION_LOADER_APP_CRM_HIDE>;
export declare type PERFORM_SET_NAVIGATION_IN_PROGRESS = {
    customerOpenInProgress: boolean;
};
export declare const performSetCustomerOpenInProgress: (customerOpenInProgress: boolean) => Action<PERFORM_SET_NAVIGATION_IN_PROGRESS>;
