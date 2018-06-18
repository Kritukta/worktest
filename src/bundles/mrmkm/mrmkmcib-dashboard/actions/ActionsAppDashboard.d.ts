/**
 * Actions of AppDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-dashboard";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const INPUT_SHARE_POPOVER_SEARCH_REFRESH = "INPUT_SHARE_POPOVER_SEARCH_REFRESH";
export declare const INPUT_CURRENT_RECIPIENT_LIST_REFRESH = "INPUT_CURRENT_RECIPIENT_LIST_REFRESH";
export declare const INPUT_CURRENT_REPRESENTATION_REFRESH = "INPUT_CURRENT_REPRESENTATION_REFRESH";
export declare const INPUT_CURRENT_FILE_FORMAT_REFRESH = "INPUT_CURRENT_FILE_FORMAT_REFRESH";
export declare const NAVIGATE_TO_POPOVER_SHARE_BACK = "NAVIGATE_TO_POPOVER_SHARE_BACK";
export declare const NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = "NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN";
export declare const NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = "NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN";
export declare const NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = "NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN";
export declare const PERFORM_POPOVER_SHARE_SHOW = "APP_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_SHOW";
export declare const PERFORM_POPOVER_SHARE_HIDE = "APP_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_HIDE";
export declare const PERFORM_APPLICATION_INIT = "APP_DASHBOARD_CONTAINER_PERFORM_APPLICATION_INIT";
export declare const HANDLE_QLIK_ERROR = "APP_DASHBOARD_CONTAINER_HANDLE_QLIK_ERROR_FAILURE";
export declare const PERFORM_FIND_PERSON_LIST = "APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST";
export declare const PERFORM_FIND_PERSON_LIST_EXECUTE = "APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_EXECUTE";
export declare const PERFORM_FIND_PERSON_LIST_SUCCESS = "APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_SUCCESS";
export declare const PERFORM_FIND_PERSON_LIST_FAILURE = "APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_FAILURE";
export declare const PERFORM_SEND = "APP_DASHBOARD_CONTAINER_PERFORM_SEND";
export declare const PERFORM_ADD_PERSON_HISTORY_LIST = "APP_DASHBOARD_CONTAINER_PERFORM_ADD_PERSON_HISTORY_LIST";
export declare const PERFORM_CLEAR_PERSON_HISTORY_LIST = "APP_DASHBOARD_CONTAINER_PERFORM_CLEAR_PERSON_HISTORY_LIST";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST = "APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = "APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = "APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = "APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE";
export declare const PERFORM_PERSIST_PERSON_HISTORY_LIST = "APP_DASHBOARD_CONTAINER_PERFORM_PERSIST_PERSON_HISTORY_LIST";
export declare const FOUND_PERSON_LIST_CLEAR = "FOUND_PERSON_LIST_CLEAR";
export declare const CALL_QLIK_AVAILABILITY_CHECK = "APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK";
export declare const CALL_QLIK_AVAILABILITY_CHECK_REQUEST = "APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_REQUEST";
export declare const CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = "APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_SUCCESS";
export declare const CALL_QLIK_AVAILABILITY_CHECK_FAILURE = "APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_FAILURE";
export declare const SWAP_CONTEXT = "APP_DASHBOARD_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED = "APP_DASHBOARD_CONTAINER_PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED";
export declare const PERFORM_SEARCH_MODE_ENABLE = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_MODE_ENABLE";
export declare const PERFORM_SEARCH_MODE_DISABLE = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_MODE_DISABLE";
export declare const PERFORM_INPUT_SEARCH = "APP_DASHBOARD_CONTAINER_PERFORM_INPUT_SEARCH";
export declare const PERFORM_SEARCH_RESET = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_RESET";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_RESET = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_RESET";
export declare const PERFORM_SEARCH = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH";
export declare const PERFORM_SEARCH_EXECUTE = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_EXECUTE";
export declare const PERFORM_SEARCH_SUCCESS = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_SUCCESS";
export declare const PERFORM_SEARCH_FAILURE = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_FAILURE";
export declare const PERFORM_SEARCH_ABORT = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_ABORT";
export declare const SEARCH_VALIDATE_SEARCH = "APP_DASHBOARD_CONTAINER_SEARCH_VALIDATE_SEARCH";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = "APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = "APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = "APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = "APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT = "APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = "APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = "APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = "APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = "APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE";
export declare const SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = "APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT";
export declare const PERFORM_QLIK_EVENT = "APP_DASHBOARD_CONTAINER_PERFORM_QLIK_EVENT";
export declare const UNKNOWN_QLIK_EVENT = "APP_DASHBOARD_CONTAINER_UNKNOWN_QLIK_EVENT_FAILURE";
export declare const PERFORM_CUSTOMER_SELECT = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SELECT";
export declare const PERFORM_CUSTOMER_OPEN = "APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_OPEN";
export declare const PERFORM_SEARCH_HISTORY_LIST_CLEAR = "APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_HISTORY_LIST_CLEAR";
export declare const PERSIST_SEARCH_HISTORY_LIST = "APP_DASHBOARD_CONTAINER_PERSIST_SEARCH_HISTORY_LIST";
export declare const RECOVER_SEARCH_HISTORY_LIST = "APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST";
export declare const RECOVER_SEARCH_HISTORY_LIST_EXECUTE = "APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST_EXECUTE";
export declare const RECOVER_SEARCH_HISTORY_LIST_SUCCESS = "APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST_SUCCESS";
export declare const RECOVER_SEARCH_HISTORY_LIST_FAILURE = "APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST_FAILURE";
export declare const PERFORM_CONTAINER_RESET = "APP_DASHBOARD_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_UPDATE_SUP_PARAMETERS = "APP_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS";
export declare const PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = "APP_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS_FAILURE";
export declare const SET_CURRENT_QLIK_URL = "APP_DASHBOARD_CONTAINER_SET_CURRENT_QLICK_URL";
export declare const SET_POPOVER_SEARCH_SCREEN_SHOW = "APP_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_SHOW";
export declare const SET_POPOVER_SEARCH_SCREEN_HIDE = "APP_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_HIDE";
export declare const PERFORM_SELECTIONS_PARSE_FAILURE = "APP_DASHBOARD_CONTAINER_PERFORM_SELECTIONS_PARSE_FAILURE";
export declare const SET_QLIK_COOKIE = "APP_DASHBOARD_CONTAINER_SET_QLIK_COOKIE";
export declare const CALL_SEND_FILE = "APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_SEND";
export declare const CALL_SEND_FILE_EXECUTE = "APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_EXECUTE";
export declare const CALL_SEND_FILE_SUCCESS = "APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_SUCCESS";
export declare const CALL_SEND_FILE_FAILURE = "APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_FAILURE";
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update  inputSharePopoverSearch prop in popover.
 *
 */
export declare type INPUT_SHARE_POPOVER_SEARCH_REFRESH = {
    value: string;
};
export declare const inputSharePopoverSearchRefresh: (value: string) => Action<INPUT_SHARE_POPOVER_SEARCH_REFRESH>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate back in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_BACK = {};
export declare const navigateToPopoverShareBack: () => Action<NAVIGATE_TO_POPOVER_SHARE_BACK>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = {};
export declare const navigateToPopoverShareRecipientsScreen: () => Action<NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = {};
export declare const navigateToPopoverShareRepresentationScreen: () => Action<NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = {};
export declare const navigateToPopoverShareFormatScreen: () => Action<NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update pecipients prop in popover.
 *
 */
export declare type INPUT_CURRENT_RECIPIENT_LIST_REFRESH = {
    value: ModelsScheduler.PersonList;
    operation: Enums.Operation;
};
export declare const inputCurrentRecipientListRefresh: (value: ModelsScheduler.PersonList, operation: Enums.Operation) => Action<INPUT_CURRENT_RECIPIENT_LIST_REFRESH>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type INPUT_CURRENT_REPRESENTATION_REFRESH = {
    value: Enums.Representation;
    fileFormat: Enums.FileFormat;
};
export declare const inputCurrentRepresentationRefresh: (value: Enums.Representation, fileFormat: Enums.FileFormat) => Action<INPUT_CURRENT_REPRESENTATION_REFRESH>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update file format prop in popover.
 *
 */
export declare type INPUT_CURRENT_FILE_FORMAT_REFRESH = {
    value: Enums.FileFormat;
};
export declare const inputCurrentFormatRefresh: (value: Enums.FileFormat) => Action<INPUT_CURRENT_FILE_FORMAT_REFRESH>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_SHARE_SHOW = {};
export declare const performPopoverShareShow: () => Action<PERFORM_POPOVER_SHARE_SHOW>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_SHARE_HIDE = {};
export declare const performPopoverShareHide: () => Action<PERFORM_POPOVER_SHARE_HIDE>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to init Dashboard mobile application.
 *
 */
export declare type PERFORM_APPLICATION_INIT = {};
export declare const performApplicationInit: () => Action<PERFORM_APPLICATION_INIT>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched to handle Qlik error.
 *
 * @param {Error | null} error .
 */
export declare type HANDLE_QLIK_ERROR = {
    error: Error | null;
};
export declare const handleQlikError: (error: Error | null) => Action<HANDLE_QLIK_ERROR>;
/**
 * Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 *
 */
export declare type CALL_QLIK_AVAILABILITY_CHECK = {};
export declare const callQlikAvailabilityCheck: () => Action<CALL_QLIK_AVAILABILITY_CHECK>;
/**
 * Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 */
export declare type CALL_QLIK_AVAILABILITY_CHECK_REQUEST = {};
export declare const callQlikAvailabilityCheckRequest: () => Action<CALL_QLIK_AVAILABILITY_CHECK_REQUEST>;
export declare type CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = {};
export declare const callQlikAvailabilityCheckSuccess: () => Action<CALL_QLIK_AVAILABILITY_CHECK_SUCCESS>;
export declare type CALL_QLIK_AVAILABILITY_CHECK_FAILURE = {
    error: Error;
};
export declare const callQlikAvailabilityCheckFailure: (error: Error) => Action<CALL_QLIK_AVAILABILITY_CHECK_FAILURE>;
/**
 * Internal thunk used in "AppDashboard" container. Thunk chain dispatched to set context parameters.
 *
 * @param {ModelsApp.Employee} user .
 * @param {string} appBuildVersion .
 * @param {string} appServerUrl .
 * @param {string} appServerPath .
 */
export declare type SWAP_CONTEXT = {
    user: ModelsApp.Employee;
    appBuildVersion: string;
    appServerUrl: string;
    appServerPath: string;
};
export declare const swapContext: (user: ModelsApp.Employee, appBuildVersion: string, appServerUrl: string, appServerPath: string) => Action<SWAP_CONTEXT>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search mode changed.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED = {
    value: boolean;
};
export declare const performInputSearchCustomerManaged: (value: boolean) => Action<PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_SEARCH_MODE_ENABLE = {};
export declare const performSearchModeEnable: () => Action<PERFORM_SEARCH_MODE_ENABLE>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to exit search mode
 *
 */
export declare type PERFORM_SEARCH_MODE_DISABLE = {};
export declare const performSearchModeDisable: () => Action<PERFORM_SEARCH_MODE_DISABLE>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SEARCH = {
    value: string;
};
export declare const performInputSearch: (value: string) => Action<PERFORM_INPUT_SEARCH>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to reset search parameters.
 *
 */
export declare type PERFORM_SEARCH_RESET = {};
export declare const performSearchReset: () => Action<PERFORM_SEARCH_RESET>;
/**
 * Internal thunk used in "AppDashboard" container. Thunk chain used to reset search parameters.
 *
 */
export declare type PERFORM_CUSTOMER_SEARCH_LIST_RESET = {};
export declare const performCustomerSearchListReset: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_RESET>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
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
 * Action dispatched on abort in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to abort search.
 *
 */
export declare type PERFORM_SEARCH_ABORT = {};
export declare const performSearchAbort: () => Action<PERFORM_SEARCH_ABORT>;
/**
 * Internal thunk used in "AppDashboard" container. Thunk used to perform search query validation and search type determination.
 *
 */
export declare type SEARCH_VALIDATE_SEARCH = {};
export declare const search_validateSearch: () => Action<SEARCH_VALIDATE_SEARCH>;
/**
 * Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {};
export declare const search_callGetCustomerSearchList: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>;
/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {};
export declare const search_callGetCustomerSearchListRequest: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = {
    response: Response<ModelsCrm.CustomerList>;
};
export declare const search_callGetCustomerSearchListSuccess: (response: Response<ModelsCrm.CustomerList>) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = {
    error: Error;
};
export declare const search_callGetCustomerSearchListFailure: (error: Error) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT = {};
export declare const search_callGetCustomerSearchListAbort: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
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
 * Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 */
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = {};
export declare const searchAppend_callGetCustomerSearchListPage: () => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE>;
/**
 * Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 */
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = {};
export declare const searchAppend_callGetCustomerSearchListPageRequest: () => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = {
    response: Response<ModelsCrm.CustomerListPage>;
};
export declare const searchAppend_callGetCustomerSearchListPageSuccess: (response: Response<ModelsCrm.CustomerListPage>) => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = {
    error: Error;
};
export declare const searchAppend_callGetCustomerSearchListPageFailure: (error: Error) => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE>;
/**
 * Internal thunk used in "AppDashboard" container. Thunk chain used to concat next page and append customer search list.
 *
 */
export declare type SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = {};
export declare const searchAppend_customerSearchListConcat: () => Action<SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
 *
 * @param {Enums.QlikEventType} eventType .
 * @param {string} eventPayload .
 */
export declare type PERFORM_QLIK_EVENT = {
    message: Models.QlikMessage;
};
export declare const performQlikEvent: (message: Models.QlikMessage) => Action<PERFORM_QLIK_EVENT>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
 *
 * @param {Enums.QlikEventType} eventType .
 * @param {string} eventPayload .
 */
export declare type UNKNOWN_QLIK_EVENT = {
    message: Models.QlikMessage;
};
export declare const unknownQlikEvent: (message: Models.QlikMessage) => Action<UNKNOWN_QLIK_EVENT>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to open customer from search list.
 *
 * @param {ModelsCrm.Customer} customer .
 */
export declare type PERFORM_CUSTOMER_SELECT = {
    customer: ModelsCrm.Customer;
};
export declare const performCustomerSelect: (customer: ModelsCrm.Customer) => Action<PERFORM_CUSTOMER_SELECT>;
/**
 * Internal thunk used in "AppDashboard" container. Thunk chain used to open customer from search list.
 *
 * @param {ModelsCrm.Customer} customer .
 */
export declare type PERFORM_CUSTOMER_OPEN = {
    customer: ModelsCrm.Customer;
};
export declare const performCustomerOpen: (customer: ModelsCrm.Customer) => Action<PERFORM_CUSTOMER_OPEN>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear customer search history list.
 *
 */
export declare type PERFORM_SEARCH_HISTORY_LIST_CLEAR = {};
export declare const performSearchHistoryListClear: () => Action<PERFORM_SEARCH_HISTORY_LIST_CLEAR>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to persist search history list data.
 *
 */
export declare type PERSIST_SEARCH_HISTORY_LIST = {};
export declare const persistSearchHistoryList: () => Action<PERSIST_SEARCH_HISTORY_LIST>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
 *
 */
export declare type RECOVER_SEARCH_HISTORY_LIST = {};
export declare const recoverSearchHistoryList: () => Action<RECOVER_SEARCH_HISTORY_LIST>;
export declare type RECOVER_SEARCH_HISTORY_LIST_EXECUTE = {};
export declare const recoverSearchHistoryListExecute: () => Action<RECOVER_SEARCH_HISTORY_LIST_EXECUTE>;
export declare type RECOVER_SEARCH_HISTORY_LIST_SUCCESS = {
    data: Models.SearchHistoryList;
};
export declare const recoverSearchHistoryListSuccess: (data: Models.SearchHistoryList) => Action<RECOVER_SEARCH_HISTORY_LIST_SUCCESS>;
export declare type RECOVER_SEARCH_HISTORY_LIST_FAILURE = {
    error: Error;
};
export declare const recoverSearchHistoryListFailure: (error: Error) => Action<RECOVER_SEARCH_HISTORY_LIST_FAILURE>;
/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
export declare type PERFORM_UPDATE_SUP_PARAMETERS = {
    params: Models.SupParams;
};
export declare const performUpdateSupParameters: (params: Models.SupParams) => Action<PERFORM_UPDATE_SUP_PARAMETERS>;
export declare type PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = {
    error: Error;
};
export declare const performUpdateSupParametersFailure: (error: Error) => Action<PERFORM_UPDATE_SUP_PARAMETERS_FAILURE>;
/**
 * Thunk used to find people via OWA.
 *
 */
export declare type PERFORM_FIND_PERSON_LIST = {};
export declare const performFindPeople: () => Action<PERFORM_FIND_PERSON_LIST>;
export declare type PERFORM_FIND_PERSON_LIST_EXECUTE = {};
export declare const performFindPeopleExecute: () => Action<PERFORM_FIND_PERSON_LIST_EXECUTE>;
export declare type PERFORM_FIND_PERSON_LIST_SUCCESS = {
    data: ModelsScheduler.PersonList;
};
export declare const performFindPeopleSuccess: (data: ModelsScheduler.PersonList) => Action<PERFORM_FIND_PERSON_LIST_SUCCESS>;
export declare type PERFORM_FIND_PERSON_LIST_FAILURE = {
    error: Error;
};
export declare const performFindPeopleFailure: (error: Error) => Action<PERFORM_FIND_PERSON_LIST_FAILURE>;
export declare type FOUND_PERSON_LIST_CLEAR = {};
export declare const performFoundPeopleListClear: () => Action<FOUND_PERSON_LIST_CLEAR>;
export declare type PERFORM_ADD_PERSON_HISTORY_LIST = {
    data: ModelsScheduler.PersonList;
};
export declare const performAddPeopleHistoryList: (data: ModelsScheduler.PersonList) => Action<PERFORM_ADD_PERSON_HISTORY_LIST>;
export declare type PERFORM_CLEAR_PERSON_HISTORY_LIST = {};
export declare const performClearPeopleHistoryList: () => Action<PERFORM_CLEAR_PERSON_HISTORY_LIST>;
export declare type PERFORM_RECOVER_PERSON_HISTORY_LIST = {};
export declare const performRecoverPeopleHistoryList: () => Action<PERFORM_RECOVER_PERSON_HISTORY_LIST>;
export declare type PERFORM_PERSIST_PERSON_HISTORY_LIST = {};
export declare const performPersistPeopleHistoryList: () => Action<PERFORM_PERSIST_PERSON_HISTORY_LIST>;
export declare type PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = {};
export declare const performRecoverPeopleHistoryListExecute: () => Action<PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE>;
export declare type PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = {
    data: ModelsScheduler.PersonList;
};
export declare const performRecoverPeopleHistoryListSuccess: (data: ModelsScheduler.PersonList) => Action<PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS>;
export declare type PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = {
    error: Error;
};
export declare const performRecoverPeopleHistoryListFailure: (error: Error) => Action<PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE>;
export declare type PERFORM_SEND = {};
export declare const performSend: () => Action<PERFORM_SEND>;
export declare type CALL_SEND_FILE = {};
export declare const callSendFile: () => Action<CALL_SEND_FILE>;
export declare type CALL_SEND_FILE_EXECUTE = {};
export declare const callSendFileExecute: () => Action<CALL_SEND_FILE_EXECUTE>;
export declare type CALL_SEND_FILE_SUCCESS = {};
export declare const callSendFileSuccess: () => Action<CALL_SEND_FILE_SUCCESS>;
export declare type CALL_SEND_FILE_FAILURE = {
    error: Error;
};
export declare const callSendFileFailure: (error: Error) => Action<CALL_SEND_FILE_FAILURE>;
export declare type SET_CURRENT_QLIK_URL = {
    url: string | null;
};
export declare const setCurrentAppDashboardQlikUrl: (url: string | null) => Action<SET_CURRENT_QLIK_URL>;
/**
 * Thunk used to set isPopoverVisibleSearchScreen to true.
 */
export declare type SET_POPOVER_SEARCH_SCREEN_SHOW = {};
export declare const performPopoverSearchScreenShow: () => Action<SET_POPOVER_SEARCH_SCREEN_SHOW>;
/**
 * Thunk used to set isPopoverVisibleSearchScreen to false.
 */
export declare type SET_POPOVER_SEARCH_SCREEN_HIDE = {};
export declare const performPopoverSearchScreenHide: () => Action<SET_POPOVER_SEARCH_SCREEN_HIDE>;
/**
 * Thunk used to log Selections Parse Failure.
 */
export declare type PERFORM_SELECTIONS_PARSE_FAILURE = {
    error: Error;
};
export declare const performSelectionsParseFailure: (error: Error) => Action<PERFORM_SELECTIONS_PARSE_FAILURE>;
export declare type SET_QLIK_COOKIE = {
    cookie: string | null;
};
export declare const setQlikCookie: (cookie: string | null) => Action<SET_QLIK_COOKIE>;
