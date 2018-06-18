/**
 * Actions of CustomerDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const INPUT_SHARE_POPOVER_SEARCH_REFRESH = 'INPUT_SHARE_POPOVER_SEARCH_REFRESH';
export const INPUT_CURRENT_RECIPIENT_LIST_REFRESH = 'INPUT_CURRENT_RECIPIENT_LIST_REFRESH';
export const INPUT_CURRENT_REPRESENTATION_REFRESH = 'INPUT_CURRENT_REPRESENTATION_REFRESH';
export const INPUT_CURRENT_FILE_FORMAT_REFRESH = 'INPUT_CURRENT_FILE_FORMAT_REFRESH';
export const SHARE_DATA_REFRESH = 'SHARE_DATA_REFRESH';
export const NAVIGATE_TO_POPOVER_SHARE_BACK = 'NAVIGATE_TO_POPOVER_SHARE_BACK';
export const NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN';
export const NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN';
export const NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN';
export const PERFORM_POPOVER_SHARE_SHOW = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_SHOW';
export const PERFORM_POPOVER_SHARE_HIDE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_HIDE';
export const PERFORM_APPLICATION_INIT = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_APPLICATION_INIT';
export const HANDLE_QLIK_ERROR = 'CUSTOMER_DASHBOARD_CONTAINER_HANDLE_QLIK_ERROR_FAILURE';
export const PERFORM_FIND_PERSON_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST';
export const PERFORM_FIND_PERSON_LIST_EXECUTE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_EXECUTE';
export const PERFORM_FIND_PERSON_LIST_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_SUCCESS';
export const PERFORM_FIND_PERSON_LIST_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_FAILURE';
export const PERFORM_SEND = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_SEND';
export const PERFORM_ADD_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_ADD_PERSON_HISTORY_LIST';
export const PERFORM_CLEAR_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_CLEAR_PERSON_HISTORY_LIST';
export const PERFORM_RECOVER_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST';
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE';
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS';
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE';
export const PERFORM_PERSIST_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_PERSIST_PERSON_HISTORY_LIST';
export const FOUND_PERSON_LIST_CLEAR = 'FOUND_PERSON_LIST_CLEAR';
export const CALL_QLIK_AVAILABILITY_CHECK = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK';
export const CALL_QLIK_AVAILABILITY_CHECK_REQUEST = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_REQUEST';
export const CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_SUCCESS';
export const CALL_QLIK_AVAILABILITY_CHECK_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_FAILURE';
export const SWAP_CONTEXT = 'CUSTOMER_DASHBOARD_CONTAINER_SWAP_CONTEXT';
export const PERFORM_QLIK_EVENT = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_QLIK_EVENT';
export const UNKNOWN_QLIK_EVENT = 'CUSTOMER_DASHBOARD_CONTAINER_UNKNOWN_QLIK_EVENT_FAILURE';
export const PERFORM_CONTAINER_RESET = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_UPDATE_SUP_PARAMETERS = 'CUSTOMER_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS';
export const PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = 'CUSTOMER_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS_FAILURE';
export const SET_CURRENT_QLIK_URL = 'CUSTOMER_DASHBOARD_CONTAINER_SET_CURRENT_QLIK_URL';
export const SET_POPOVER_SEARCH_SCREEN_SHOW = 'CUSTOMER_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_SHOW';
export const SET_POPOVER_SEARCH_SCREEN_HIDE = 'CUSTOMER_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_HIDE';
export const SET_TRIMMED_TOP = 'CUSTOMER_DASHBOARD_CONTAINER_SET_TRIMMED_TOP';
export const PERFORM_SELECTIONS_PARSE_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_SELECTIONS_PARSE_FAILURE';
export const SET_QLIK_COOKIE = 'CUSTOMER_DASHBOARD_CONTAINER_SET_QLIK_COOKIE';
export const CALL_SEND_FILE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_SEND';
export const CALL_SEND_FILE_EXECUTE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_EXECUTE';
export const CALL_SEND_FILE_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_SUCCESS';
export const CALL_SEND_FILE_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_FAILURE';
export const shareDataRefresh = (message) => ({
    type: SHARE_DATA_REFRESH,
    payload: {
        message: message,
    }
});
export const inputSharePopoverSearchRefresh = (value) => ({
    type: INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    payload: { value: value }
});
export const navigateToPopoverShareBack = () => ({
    type: NAVIGATE_TO_POPOVER_SHARE_BACK,
    payload: {}
});
export const navigateToPopoverShareRecipientsScreen = () => ({
    type: NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN,
    payload: {}
});
export const navigateToPopoverShareRepresentationScreen = () => ({
    type: NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN,
    payload: {}
});
export const navigateToPopoverShareFormatScreen = () => ({
    type: NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN,
    payload: {}
});
export const inputCurrentRecipientListRefresh = (value, operation) => ({
    type: INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    payload: {
        value: value,
        operation: operation
    }
});
export const inputCurrentRepresentationRefresh = (value) => ({
    type: INPUT_CURRENT_REPRESENTATION_REFRESH,
    payload: { value: value }
});
export const inputCurrentFormatRefresh = (value) => ({
    type: INPUT_CURRENT_FILE_FORMAT_REFRESH,
    payload: { value: value }
});
export const performPopoverShareShow = () => ({
    type: PERFORM_POPOVER_SHARE_SHOW,
    payload: {}
});
export const performPopoverShareHide = () => ({
    type: PERFORM_POPOVER_SHARE_HIDE,
    payload: {}
});
export const performApplicationInit = () => ({
    type: PERFORM_APPLICATION_INIT,
    payload: {}
});
export const handleQlikError = (error) => ({
    type: HANDLE_QLIK_ERROR,
    payload: {
        error: error,
    }
});
export const callQlikAvailabilityCheck = () => ({
    type: CALL_QLIK_AVAILABILITY_CHECK,
    payload: {}
});
export const callQlikAvailabilityCheckRequest = () => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_REQUEST,
    payload: {}
});
export const callQlikAvailabilityCheckSuccess = (response) => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_SUCCESS,
    payload: {
        response: response
    }
});
export const callQlikAvailabilityCheckFailure = (error) => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_FAILURE,
    payload: {
        error: error
    }
});
export const swapContext = (customerManaged, user) => ({
    type: SWAP_CONTEXT,
    payload: {
        customerManaged: customerManaged,
        user: user,
    }
});
export const performQlikEvent = (message) => ({
    type: PERFORM_QLIK_EVENT,
    payload: {
        message: message,
    }
});
export const unknownQlikEvent = (message) => ({
    type: UNKNOWN_QLIK_EVENT,
    payload: {
        message: message,
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const performUpdateSupParameters = (params) => ({
    type: PERFORM_UPDATE_SUP_PARAMETERS,
    payload: {
        params: params
    }
});
export const performUpdateSupParametersFailure = (error) => ({
    type: PERFORM_UPDATE_SUP_PARAMETERS_FAILURE,
    payload: {
        error: error
    }
});
export const setCurrentCustomerDashboardQlikUrl = (url) => ({
    type: SET_CURRENT_QLIK_URL,
    payload: { url }
});
export const performFindPeople = () => ({
    type: PERFORM_FIND_PERSON_LIST,
    payload: {}
});
export const performFindPeopleExecute = () => ({
    type: PERFORM_FIND_PERSON_LIST_EXECUTE,
    payload: {}
});
export const performFindPeopleSuccess = (data) => ({
    type: PERFORM_FIND_PERSON_LIST_SUCCESS,
    payload: {
        data: data
    }
});
export const performFindPeopleFailure = (error) => ({
    type: PERFORM_FIND_PERSON_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const performFoundPeopleListClear = () => ({
    type: FOUND_PERSON_LIST_CLEAR,
    payload: {}
});
export const performAddPeopleHistoryList = (data) => ({
    type: PERFORM_ADD_PERSON_HISTORY_LIST,
    payload: {
        data: data,
    }
});
export const performClearPeopleHistoryList = () => ({
    type: PERFORM_CLEAR_PERSON_HISTORY_LIST,
    payload: {}
});
export const performRecoverPeopleHistoryList = () => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST,
    payload: {}
});
export const performPersistPeopleHistoryList = () => ({
    type: PERFORM_PERSIST_PERSON_HISTORY_LIST,
    payload: {}
});
export const performRecoverPeopleHistoryListExecute = () => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE,
    payload: {}
});
export const performRecoverPeopleHistoryListSuccess = (data) => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS,
    payload: {
        data: data
    }
});
export const performRecoverPeopleHistoryListFailure = (error) => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const performSend = () => ({
    type: PERFORM_SEND,
    payload: {}
});
export const callSendFile = () => ({
    type: CALL_SEND_FILE,
    payload: {}
});
export const callSendFileExecute = () => ({
    type: CALL_SEND_FILE_EXECUTE,
    payload: {}
});
export const callSendFileSuccess = () => ({
    type: CALL_SEND_FILE_SUCCESS,
    payload: {}
});
export const callSendFileFailure = (error) => ({
    type: CALL_SEND_FILE_FAILURE,
    payload: {
        error: error
    }
});
export const performPopoverSearchScreenShow = () => ({
    type: SET_POPOVER_SEARCH_SCREEN_SHOW,
    payload: {}
});
export const performPopoverSearchScreenHide = () => ({
    type: SET_POPOVER_SEARCH_SCREEN_HIDE,
    payload: {}
});
export const setTrimmedTop = (value) => ({
    type: SET_TRIMMED_TOP,
    payload: {
        value: value
    }
});
export const performSelectionsParseFailure = (error) => ({
    type: PERFORM_SELECTIONS_PARSE_FAILURE,
    payload: {
        error: error
    }
});
export const setQlikCookie = (cookie) => ({
    type: SET_QLIK_COOKIE,
    payload: {
        cookie
    }
});
//# sourceMappingURL=ActionsCustomerDashboard.js.map