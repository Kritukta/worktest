/**
 * Actions of Employee container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
export const PERFORM_SEND_EMAIL = 'EMPLOYEE_CONTAINER_PERFORM_SEND_EMAIL';
export const PERFORM_SCHEDULER_OPEN = 'EMPLOYEE_CONTAINER_PERFORM_SCHEDULER_OPEN';
export const PERFORM_POPOVER_PERSON_LIST_SHOW = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_PERSON_LIST_SHOW';
export const PERFORM_POPOVER_PERSON_LIST_HIDE = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_PERSON_LIST_HIDE';
export const PERFORM_FIND_PEOPLE = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE';
export const PERFORM_FIND_PEOPLE_EXECUTE = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_EXECUTE';
export const PERFORM_FIND_PEOPLE_SUCCESS = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_SUCCESS';
export const PERFORM_FIND_PEOPLE_FAILURE = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_FAILURE';
export const NAVIGATE_TO_EMPLOYEE_SCREEN = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_EMPLOYEE_SCREEN';
export const NAVIGATE_TO_CUSTOMER_LIST_SCREEN = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_CUSTOMER_LIST_SCREEN';
export const PERFORM_REFRESH = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH';
export const PERFORM_REFRESH_EXECUTE = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH_EXECUTE';
export const PERFORM_REFRESH_SUCCESS = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH_SUCCESS';
export const PERFORM_REFRESH_FAILURE = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH_FAILURE';
export const REFRESH_CALL_GET_EMPLOYEE = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE';
export const REFRESH_CALL_GET_EMPLOYEE_REQUEST = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_REQUEST';
export const REFRESH_CALL_GET_EMPLOYEE_SUCCESS = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_SUCCESS';
export const REFRESH_CALL_GET_EMPLOYEE_FAILURE = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_FAILURE';
export const CALL_GET_CUSTOMER_LIST = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST';
export const CALL_GET_CUSTOMER_LIST_REQUEST = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_REQUEST';
export const CALL_GET_CUSTOMER_LIST_SUCCESS = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_SUCCESS';
export const CALL_GET_CUSTOMER_LIST_FAILURE = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_FAILURE';
export const CALL_GET_SUBORDINATE_LIST = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST';
export const CALL_GET_SUBORDINATE_LIST_REQUEST = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_REQUEST';
export const CALL_GET_SUBORDINATE_LIST_SUCCESS = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_SUCCESS';
export const CALL_GET_SUBORDINATE_LIST_FAILURE = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_FAILURE';
export const NAVIGATE_BACK = 'EMPLOYEE_CONTAINER_NAVIGATE_BACK';
export const NAVIGATE_BACK_EMPLOYEE = 'EMPLOYEE_CONTAINER_NAVIGATE_BACK_EMPLOYEE';
export const PERFORM_POPOVER_SUBORDINATE_SHOW = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_SUBORDINATE_SHOW';
export const PERFORM_POPOVER_SUBORDINATE_HIDE = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_SUBORDINATE_HIDE';
export const PERFORM_CONTAINER_RESET = 'EMPLOYEE_CONTAINER_PERFORM_CONTAINER_RESET';
export const NAVIGATE_POPOVER_BACK = 'EMPLOYEE_CONTAINER_NAVIGATE_POPOVER_BACK';
export const NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER';
export const PERFORM_PERSON_SELECT = 'EMPLOYEE_CONTAINER_PERFORM_PERSON_SELECT';
export const NAVIGATE_EMPLOYEE_SCREEN_BACK = 'EMPLOYEE_CONTAINER_NAVIGATE_EMPLOYEE_SCREEN_BACK';
export const PERFORM_FLUSH = 'EMPLOYEE_CONTAINER_PERFORM_FLUSH';
export const PERFORM_POPOVER_SUBORDINATE_PHONES_HIDE = 'PERFORM_POPOVER_SUBORDINATE_PHONES_HIDE';
export const PERFORM_POPOVER_SUBORDINATE_PHONES_SHOW = 'PERFORM_POPOVER_SUBORDINATE_PHONES_SHOW';
export const PERFORM_ERROR_MODAL_SHOW = 'PERFORM_ERROR_MODAL_SHOW';
export const PERFORM_ERROR_MODAL_HIDE = 'PERFORM_ERROR_MODAL_HIDE';
export const SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE = 'SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE';
export const NAVIGATE_TO_EMAIL_SCREEN = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_EMAIL_SCREEN';
export const PERFORM_CANCEL_REFRESH_ERROR = 'EMPLOYEE_CONTAINER_PERFORM_CANCEL_REFRESH_ERROR';
export const PERFORM_CANCEL_SUBORDINATE_LIST_ERROR = 'EMPLOYEE_CONTAINER_PERFORM_CANCEL_SUBORDINATE_LIST_ERROR';
export const PERFORM_CANCEL_CUSTOMER_LIST_ERROR = 'EMPLOYEE_CONTAINER_PERFORM_CANCEL_CUSTOMER_LIST_ERROR';
export const PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW = 'EMPLOYEE_CONTAINER_PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW';
export const PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE = 'EMPLOYEE_CONTAINER_PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE';
export const PERFORM_CHECK_CERTIFICATE = 'EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE';
export const PERFORM_CHECK_CERTIFICATE_SUCCESS = 'EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE_SUCCESS';
export const PERFORM_CHECK_CERTIFICATE_FAILED = 'EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE_FAILED';
export const CALL_GET_EMPLOYEE_HEAD = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD';
export const CALL_GET_EMPLOYEE_HEAD_REQUEST = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_REQUEST';
export const CALL_GET_EMPLOYEE_HEAD_SUCCESS = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_SUCCESS';
export const CALL_GET_EMPLOYEE_HEAD_FAILURE = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_FAILURE';
export const performFlush = () => ({
    type: PERFORM_FLUSH,
    payload: {}
});
export const performSendEmail = () => ({
    type: PERFORM_SEND_EMAIL,
    payload: {}
});
export const performSchedulerOpen = () => ({
    type: PERFORM_SCHEDULER_OPEN,
    payload: {}
});
export const performPopoverPersonListShow = () => ({
    type: PERFORM_POPOVER_PERSON_LIST_SHOW,
    payload: {}
});
export const performPopoverPersonListHide = () => ({
    type: PERFORM_POPOVER_PERSON_LIST_HIDE,
    payload: {}
});
export const performFindPeople = () => ({
    type: PERFORM_FIND_PEOPLE,
    payload: {}
});
export const performFindPeopleExecute = () => ({
    type: PERFORM_FIND_PEOPLE_EXECUTE,
    payload: {}
});
export const performFindPeopleSuccess = (data) => ({
    type: PERFORM_FIND_PEOPLE_SUCCESS,
    payload: {
        data: data
    }
});
export const performFindPeopleFailure = (error) => ({
    type: PERFORM_FIND_PEOPLE_FAILURE,
    payload: {
        error: error
    }
});
export const navigateToEmployeeScreen = (employeeId, isExtendedMode, currentMode, historyAction = Enums.EmployeeHistoryActions.Push) => ({
    type: NAVIGATE_TO_EMPLOYEE_SCREEN,
    payload: {
        employeeId: employeeId,
        isExtendedMode: isExtendedMode,
        currentMode: currentMode,
        historyAction: historyAction
    }
});
export const navigateToCustomerListScreen = () => ({
    type: NAVIGATE_TO_CUSTOMER_LIST_SCREEN,
    payload: {}
});
export const performRefresh = () => ({
    type: PERFORM_REFRESH,
    payload: {}
});
export const performRefreshExecute = () => ({
    type: PERFORM_REFRESH_EXECUTE,
    payload: {}
});
export const performRefreshSuccess = (data) => ({
    type: PERFORM_REFRESH_SUCCESS,
    payload: {
        data: data
    }
});
export const performRefreshFailure = (error) => ({
    type: PERFORM_REFRESH_FAILURE,
    payload: {
        error: error
    }
});
export const refresh_callGetEmployee = () => ({
    type: REFRESH_CALL_GET_EMPLOYEE,
    payload: {}
});
export const refresh_callGetEmployeeRequest = () => ({
    type: REFRESH_CALL_GET_EMPLOYEE_REQUEST,
    payload: {}
});
export const refresh_callGetEmployeeSuccess = (response) => ({
    type: REFRESH_CALL_GET_EMPLOYEE_SUCCESS,
    payload: {
        response: response
    }
});
export const refresh_callGetEmployeeFailure = (error) => ({
    type: REFRESH_CALL_GET_EMPLOYEE_FAILURE,
    payload: {
        error: error
    }
});
export const callGetCustomerList = () => ({
    type: CALL_GET_CUSTOMER_LIST,
    payload: {}
});
export const callGetCustomerListRequest = () => ({
    type: CALL_GET_CUSTOMER_LIST_REQUEST,
    payload: {}
});
export const callGetCustomerListSuccess = (response) => ({
    type: CALL_GET_CUSTOMER_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetCustomerListFailure = (error) => ({
    type: CALL_GET_CUSTOMER_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const callGetSubordinateList = () => ({
    type: CALL_GET_SUBORDINATE_LIST,
    payload: {}
});
export const callGetSubordinateListRequest = () => ({
    type: CALL_GET_SUBORDINATE_LIST_REQUEST,
    payload: {}
});
export const callGetSubordinateListSuccess = (response) => ({
    type: CALL_GET_SUBORDINATE_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetSubordinateListFailure = (error) => ({
    type: CALL_GET_SUBORDINATE_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const navigateBackEmployee = () => ({
    type: NAVIGATE_BACK_EMPLOYEE,
    payload: {}
});
export const performPopoverSubordinateShow = (subordinate) => ({
    type: PERFORM_POPOVER_SUBORDINATE_SHOW,
    payload: {
        subordinate: subordinate,
    }
});
export const performPopoverSubordinateHide = () => ({
    type: PERFORM_POPOVER_SUBORDINATE_HIDE,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const navigatePopoverBack = () => ({
    type: NAVIGATE_POPOVER_BACK,
    payload: {}
});
export const navigateEmployeeScreenBack = () => ({
    type: NAVIGATE_EMPLOYEE_SCREEN_BACK,
    payload: {}
});
export const navigateToPersonContainerPopover = () => ({
    type: NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER,
    payload: {}
});
export const performPersonSelect = (person) => ({
    type: PERFORM_PERSON_SELECT,
    payload: {
        person: person
    }
});
export const performErrorModalShow = () => ({
    type: PERFORM_ERROR_MODAL_SHOW,
    payload: {}
});
export const performCertificateAlertPopoverShow = () => ({
    type: PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW,
    payload: {}
});
export const performCertificateAlertPopoverHide = () => ({
    type: PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE,
    payload: {}
});
export const performErrorModalHide = () => ({
    type: PERFORM_ERROR_MODAL_HIDE,
    payload: {}
});
export const setEmployeeShedulerAvailabilityFalse = () => ({
    type: SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE,
    payload: {}
});
export const navigateToEmailScreen = () => ({
    type: NAVIGATE_TO_EMAIL_SCREEN,
    payload: {}
});
export const performCancelRefreshError = () => ({
    type: PERFORM_CANCEL_REFRESH_ERROR,
    payload: {}
});
export const performCancelSubordinateListError = () => ({
    type: PERFORM_CANCEL_SUBORDINATE_LIST_ERROR,
    payload: {}
});
export const performCancelCustomerListError = () => ({
    type: PERFORM_CANCEL_CUSTOMER_LIST_ERROR,
    payload: {}
});
export const performCheckCertificate = () => ({
    type: PERFORM_CHECK_CERTIFICATE,
    payload: {}
});
export const performCheckCertificateSuccess = () => ({
    type: PERFORM_CHECK_CERTIFICATE_SUCCESS,
    payload: {}
});
export const performCheckCertificateFailed = () => ({
    type: PERFORM_CHECK_CERTIFICATE_FAILED,
    payload: {}
});
export const callGetEmployeeHead = () => ({
    type: CALL_GET_EMPLOYEE_HEAD,
    payload: {}
});
export const callGetEmployeeHeadRequest = () => ({
    type: CALL_GET_EMPLOYEE_HEAD_REQUEST,
    payload: {}
});
export const callGetEmployeeHeadSuccess = (response) => ({
    type: CALL_GET_EMPLOYEE_HEAD_SUCCESS,
    payload: {
        response,
    }
});
export const callGetEmployeeHeadFailure = (error) => ({
    type: CALL_GET_EMPLOYEE_HEAD_FAILURE,
    payload: {
        error,
    }
});
//# sourceMappingURL=ActionsEmployee.js.map