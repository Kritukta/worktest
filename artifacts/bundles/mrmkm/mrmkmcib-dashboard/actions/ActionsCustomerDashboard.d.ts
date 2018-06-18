/**
 * Actions of CustomerDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-dashboard";
import { Enums } from '../Enums';
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const INPUT_SHARE_POPOVER_SEARCH_REFRESH = "INPUT_SHARE_POPOVER_SEARCH_REFRESH";
export declare const INPUT_CURRENT_RECIPIENT_LIST_REFRESH = "INPUT_CURRENT_RECIPIENT_LIST_REFRESH";
export declare const INPUT_CURRENT_REPRESENTATION_REFRESH = "INPUT_CURRENT_REPRESENTATION_REFRESH";
export declare const INPUT_CURRENT_FILE_FORMAT_REFRESH = "INPUT_CURRENT_FILE_FORMAT_REFRESH";
export declare const SHARE_DATA_REFRESH = "SHARE_DATA_REFRESH";
export declare const NAVIGATE_TO_POPOVER_SHARE_BACK = "NAVIGATE_TO_POPOVER_SHARE_BACK";
export declare const NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = "NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN";
export declare const NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = "NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN";
export declare const NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = "NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN";
export declare const PERFORM_POPOVER_SHARE_SHOW = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_SHOW";
export declare const PERFORM_POPOVER_SHARE_HIDE = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_HIDE";
export declare const PERFORM_APPLICATION_INIT = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_APPLICATION_INIT";
export declare const HANDLE_QLIK_ERROR = "CUSTOMER_DASHBOARD_CONTAINER_HANDLE_QLIK_ERROR_FAILURE";
export declare const PERFORM_FIND_PERSON_LIST = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST";
export declare const PERFORM_FIND_PERSON_LIST_EXECUTE = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_EXECUTE";
export declare const PERFORM_FIND_PERSON_LIST_SUCCESS = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_SUCCESS";
export declare const PERFORM_FIND_PERSON_LIST_FAILURE = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_FAILURE";
export declare const PERFORM_SEND = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_SEND";
export declare const PERFORM_ADD_PERSON_HISTORY_LIST = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_ADD_PERSON_HISTORY_LIST";
export declare const PERFORM_CLEAR_PERSON_HISTORY_LIST = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_CLEAR_PERSON_HISTORY_LIST";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS";
export declare const PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE";
export declare const PERFORM_PERSIST_PERSON_HISTORY_LIST = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_PERSIST_PERSON_HISTORY_LIST";
export declare const FOUND_PERSON_LIST_CLEAR = "FOUND_PERSON_LIST_CLEAR";
export declare const CALL_QLIK_AVAILABILITY_CHECK = "CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK";
export declare const CALL_QLIK_AVAILABILITY_CHECK_REQUEST = "CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_REQUEST";
export declare const CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = "CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_SUCCESS";
export declare const CALL_QLIK_AVAILABILITY_CHECK_FAILURE = "CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_FAILURE";
export declare const SWAP_CONTEXT = "CUSTOMER_DASHBOARD_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_QLIK_EVENT = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_QLIK_EVENT";
export declare const UNKNOWN_QLIK_EVENT = "CUSTOMER_DASHBOARD_CONTAINER_UNKNOWN_QLIK_EVENT_FAILURE";
export declare const PERFORM_CONTAINER_RESET = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_UPDATE_SUP_PARAMETERS = "CUSTOMER_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS";
export declare const PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = "CUSTOMER_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS_FAILURE";
export declare const SET_CURRENT_QLIK_URL = "CUSTOMER_DASHBOARD_CONTAINER_SET_CURRENT_QLIK_URL";
export declare const SET_POPOVER_SEARCH_SCREEN_SHOW = "CUSTOMER_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_SHOW";
export declare const SET_POPOVER_SEARCH_SCREEN_HIDE = "CUSTOMER_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_HIDE";
export declare const SET_TRIMMED_TOP = "CUSTOMER_DASHBOARD_CONTAINER_SET_TRIMMED_TOP";
export declare const PERFORM_SELECTIONS_PARSE_FAILURE = "CUSTOMER_DASHBOARD_CONTAINER_PERFORM_SELECTIONS_PARSE_FAILURE";
export declare const SET_QLIK_COOKIE = "CUSTOMER_DASHBOARD_CONTAINER_SET_QLIK_COOKIE";
export declare const CALL_SEND_FILE = "CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_SEND";
export declare const CALL_SEND_FILE_EXECUTE = "CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_EXECUTE";
export declare const CALL_SEND_FILE_SUCCESS = "CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_SUCCESS";
export declare const CALL_SEND_FILE_FAILURE = "CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_FAILURE";
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update  currentQlikMessage  prop in popover.
 *
 */
export declare type SHARE_DATA_REFRESH = {
    message: Models.QlikMessage;
};
export declare const shareDataRefresh: (message: Models.QlikMessage) => Action<SHARE_DATA_REFRESH>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update  inputSharePopoverSearch prop in popover.
 *
 */
export declare type INPUT_SHARE_POPOVER_SEARCH_REFRESH = {
    value: string;
};
export declare const inputSharePopoverSearchRefresh: (value: string) => Action<INPUT_SHARE_POPOVER_SEARCH_REFRESH>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate back in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_BACK = {};
export declare const navigateToPopoverShareBack: () => Action<NAVIGATE_TO_POPOVER_SHARE_BACK>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = {};
export declare const navigateToPopoverShareRecipientsScreen: () => Action<NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = {};
export declare const navigateToPopoverShareRepresentationScreen: () => Action<NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = {};
export declare const navigateToPopoverShareFormatScreen: () => Action<NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update pecipients prop in popover.
 *
 */
export declare type INPUT_CURRENT_RECIPIENT_LIST_REFRESH = {
    value: ModelsScheduler.PersonList;
    operation: Enums.Operation;
};
export declare const inputCurrentRecipientListRefresh: (value: ModelsScheduler.PersonList, operation: Enums.Operation) => Action<INPUT_CURRENT_RECIPIENT_LIST_REFRESH>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export declare type INPUT_CURRENT_REPRESENTATION_REFRESH = {
    value: Enums.Representation;
};
export declare const inputCurrentRepresentationRefresh: (value: Enums.Representation) => Action<INPUT_CURRENT_REPRESENTATION_REFRESH>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update file format prop in popover.
 *
 */
export declare type INPUT_CURRENT_FILE_FORMAT_REFRESH = {
    value: Enums.FileFormat;
};
export declare const inputCurrentFormatRefresh: (value: Enums.FileFormat) => Action<INPUT_CURRENT_FILE_FORMAT_REFRESH>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_SHARE_SHOW = {};
export declare const performPopoverShareShow: () => Action<PERFORM_POPOVER_SHARE_SHOW>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_SHARE_HIDE = {};
export declare const performPopoverShareHide: () => Action<PERFORM_POPOVER_SHARE_HIDE>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on analytics tab open.
 *
 */
export declare type PERFORM_APPLICATION_INIT = {};
export declare const performApplicationInit: () => Action<PERFORM_APPLICATION_INIT>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched to handle Qlik error.
 *
 * @param {Error | null} error .
 */
export declare type HANDLE_QLIK_ERROR = {
    error: Error | null;
};
export declare const handleQlikError: (error: Error) => Action<HANDLE_QLIK_ERROR>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
 *
 */
export declare type CALL_QLIK_AVAILABILITY_CHECK = {};
export declare const callQlikAvailabilityCheck: () => Action<CALL_QLIK_AVAILABILITY_CHECK>;
/**
 * Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
 */
export declare type CALL_QLIK_AVAILABILITY_CHECK_REQUEST = {};
export declare const callQlikAvailabilityCheckRequest: () => Action<CALL_QLIK_AVAILABILITY_CHECK_REQUEST>;
export declare type CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = {
    response: Response<boolean>;
};
export declare const callQlikAvailabilityCheckSuccess: (response: Response<boolean>) => Action<CALL_QLIK_AVAILABILITY_CHECK_SUCCESS>;
export declare type CALL_QLIK_AVAILABILITY_CHECK_FAILURE = {
    error: Error;
};
export declare const callQlikAvailabilityCheckFailure: (error: Error) => Action<CALL_QLIK_AVAILABILITY_CHECK_FAILURE>;
/**
 * Internal thunk used in "CustomerDashboard" container. Thunk chain dispatched to set context parameters.
 *
 * @param {ModelsCrm.CustomerManaged} customerManaged .
 * @param {ModelsApp.Employee} user .
 */
export declare type SWAP_CONTEXT = {
    customerManaged: ModelsCrm.CustomerManaged;
    user: ModelsApp.Employee;
};
export declare const swapContext: (customerManaged: ModelsCrm.CustomerManaged, user: ModelsApp.Employee) => Action<SWAP_CONTEXT>;
/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
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
 * Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to reset container state to default values.
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
 * Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to set current qlik url on analytics tab on customer screen.
 *
 */
export declare type SET_CURRENT_QLIK_URL = {
    url: string | null;
};
export declare const setCurrentCustomerDashboardQlikUrl: (url: string) => Action<SET_CURRENT_QLIK_URL>;
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
/**
 * Thunk used to send file.
 *
 */
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
 * Thunk used to cut Top of QlikView.
 */
export declare type SET_TRIMMED_TOP = {
    value: boolean;
};
export declare const setTrimmedTop: (value: boolean) => Action<SET_TRIMMED_TOP>;
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
export declare const setQlikCookie: (cookie: string) => Action<SET_QLIK_COOKIE>;
