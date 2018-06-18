/**
 * Actions of Employee container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_SEND_EMAIL = "EMPLOYEE_CONTAINER_PERFORM_SEND_EMAIL";
export declare const PERFORM_SCHEDULER_OPEN = "EMPLOYEE_CONTAINER_PERFORM_SCHEDULER_OPEN";
export declare const PERFORM_POPOVER_PERSON_LIST_SHOW = "EMPLOYEE_CONTAINER_PERFORM_POPOVER_PERSON_LIST_SHOW";
export declare const PERFORM_POPOVER_PERSON_LIST_HIDE = "EMPLOYEE_CONTAINER_PERFORM_POPOVER_PERSON_LIST_HIDE";
export declare const PERFORM_FIND_PEOPLE = "EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE";
export declare const PERFORM_FIND_PEOPLE_EXECUTE = "EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_EXECUTE";
export declare const PERFORM_FIND_PEOPLE_SUCCESS = "EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_SUCCESS";
export declare const PERFORM_FIND_PEOPLE_FAILURE = "EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_FAILURE";
export declare const NAVIGATE_TO_EMPLOYEE_SCREEN = "EMPLOYEE_CONTAINER_NAVIGATE_TO_EMPLOYEE_SCREEN";
export declare const NAVIGATE_TO_CUSTOMER_LIST_SCREEN = "EMPLOYEE_CONTAINER_NAVIGATE_TO_CUSTOMER_LIST_SCREEN";
export declare const PERFORM_REFRESH = "EMPLOYEE_CONTAINER_PERFORM_REFRESH";
export declare const PERFORM_REFRESH_EXECUTE = "EMPLOYEE_CONTAINER_PERFORM_REFRESH_EXECUTE";
export declare const PERFORM_REFRESH_SUCCESS = "EMPLOYEE_CONTAINER_PERFORM_REFRESH_SUCCESS";
export declare const PERFORM_REFRESH_FAILURE = "EMPLOYEE_CONTAINER_PERFORM_REFRESH_FAILURE";
export declare const REFRESH_CALL_GET_EMPLOYEE = "EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE";
export declare const REFRESH_CALL_GET_EMPLOYEE_REQUEST = "EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_REQUEST";
export declare const REFRESH_CALL_GET_EMPLOYEE_SUCCESS = "EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_SUCCESS";
export declare const REFRESH_CALL_GET_EMPLOYEE_FAILURE = "EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_FAILURE";
export declare const CALL_GET_CUSTOMER_LIST = "EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST";
export declare const CALL_GET_CUSTOMER_LIST_REQUEST = "EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_REQUEST";
export declare const CALL_GET_CUSTOMER_LIST_SUCCESS = "EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_SUCCESS";
export declare const CALL_GET_CUSTOMER_LIST_FAILURE = "EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_FAILURE";
export declare const CALL_GET_SUBORDINATE_LIST = "EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST";
export declare const CALL_GET_SUBORDINATE_LIST_REQUEST = "EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_REQUEST";
export declare const CALL_GET_SUBORDINATE_LIST_SUCCESS = "EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_SUCCESS";
export declare const CALL_GET_SUBORDINATE_LIST_FAILURE = "EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_FAILURE";
export declare const NAVIGATE_BACK = "EMPLOYEE_CONTAINER_NAVIGATE_BACK";
export declare const NAVIGATE_BACK_EMPLOYEE = "EMPLOYEE_CONTAINER_NAVIGATE_BACK_EMPLOYEE";
export declare const PERFORM_POPOVER_SUBORDINATE_SHOW = "EMPLOYEE_CONTAINER_PERFORM_POPOVER_SUBORDINATE_SHOW";
export declare const PERFORM_POPOVER_SUBORDINATE_HIDE = "EMPLOYEE_CONTAINER_PERFORM_POPOVER_SUBORDINATE_HIDE";
export declare const PERFORM_CONTAINER_RESET = "EMPLOYEE_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const NAVIGATE_POPOVER_BACK = "EMPLOYEE_CONTAINER_NAVIGATE_POPOVER_BACK";
export declare const NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER = "EMPLOYEE_CONTAINER_NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER";
export declare const PERFORM_PERSON_SELECT = "EMPLOYEE_CONTAINER_PERFORM_PERSON_SELECT";
export declare const NAVIGATE_EMPLOYEE_SCREEN_BACK = "EMPLOYEE_CONTAINER_NAVIGATE_EMPLOYEE_SCREEN_BACK";
export declare const PERFORM_FLUSH = "EMPLOYEE_CONTAINER_PERFORM_FLUSH";
export declare const PERFORM_POPOVER_SUBORDINATE_PHONES_HIDE = "PERFORM_POPOVER_SUBORDINATE_PHONES_HIDE";
export declare const PERFORM_POPOVER_SUBORDINATE_PHONES_SHOW = "PERFORM_POPOVER_SUBORDINATE_PHONES_SHOW";
export declare const PERFORM_ERROR_MODAL_SHOW = "PERFORM_ERROR_MODAL_SHOW";
export declare const PERFORM_ERROR_MODAL_HIDE = "PERFORM_ERROR_MODAL_HIDE";
export declare const SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE = "SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE";
export declare const NAVIGATE_TO_EMAIL_SCREEN = "EMPLOYEE_CONTAINER_NAVIGATE_TO_EMAIL_SCREEN";
export declare const PERFORM_CANCEL_REFRESH_ERROR = "EMPLOYEE_CONTAINER_PERFORM_CANCEL_REFRESH_ERROR";
export declare const PERFORM_CANCEL_SUBORDINATE_LIST_ERROR = "EMPLOYEE_CONTAINER_PERFORM_CANCEL_SUBORDINATE_LIST_ERROR";
export declare const PERFORM_CANCEL_CUSTOMER_LIST_ERROR = "EMPLOYEE_CONTAINER_PERFORM_CANCEL_CUSTOMER_LIST_ERROR";
export declare const PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW = "EMPLOYEE_CONTAINER_PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW";
export declare const PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE = "EMPLOYEE_CONTAINER_PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE";
export declare const PERFORM_CHECK_CERTIFICATE = "EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE";
export declare const PERFORM_CHECK_CERTIFICATE_SUCCESS = "EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE_SUCCESS";
export declare const PERFORM_CHECK_CERTIFICATE_FAILED = "EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE_FAILED";
export declare const CALL_GET_EMPLOYEE_HEAD = "EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD";
export declare const CALL_GET_EMPLOYEE_HEAD_REQUEST = "EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_REQUEST";
export declare const CALL_GET_EMPLOYEE_HEAD_SUCCESS = "EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_SUCCESS";
export declare const CALL_GET_EMPLOYEE_HEAD_FAILURE = "EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_FAILURE";
/**
 * Thunk dispatched by "Employee" screen. Fetch current employee with cache flushed.
 *
 */
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
/**
 * Thunk dispatched by "Employee" screen. Thunk used to send Email to employee address.
 *
 */
export declare type PERFORM_SEND_EMAIL = {};
export declare const performSendEmail: () => Action<PERFORM_SEND_EMAIL>;
/**
 * Thunk dispatched by "Employee" screen. Thunk used to show employee scheduler.
 *
 */
export declare type PERFORM_SCHEDULER_OPEN = {};
export declare const performSchedulerOpen: () => Action<PERFORM_SCHEDULER_OPEN>;
/**
 * Internal thunk used in "Employee" container. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_PERSON_LIST_SHOW = {};
export declare const performPopoverPersonListShow: () => Action<PERFORM_POPOVER_PERSON_LIST_SHOW>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_PERSON_LIST_HIDE = {};
export declare const performPopoverPersonListHide: () => Action<PERFORM_POPOVER_PERSON_LIST_HIDE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
 *
 */
export declare type PERFORM_FIND_PEOPLE = {};
export declare const performFindPeople: () => Action<PERFORM_FIND_PEOPLE>;
export declare type PERFORM_FIND_PEOPLE_EXECUTE = {};
export declare const performFindPeopleExecute: () => Action<PERFORM_FIND_PEOPLE_EXECUTE>;
export declare type PERFORM_FIND_PEOPLE_SUCCESS = {
    data: ModelsScheduler.PersonList;
};
export declare const performFindPeopleSuccess: (data: ModelsScheduler.PersonList) => Action<PERFORM_FIND_PEOPLE_SUCCESS>;
export declare type PERFORM_FIND_PEOPLE_FAILURE = {
    error: Error;
};
export declare const performFindPeopleFailure: (error: Error) => Action<PERFORM_FIND_PEOPLE_FAILURE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk used to open Employee.
 *
 * @param {string} employeeId .
 * @param {boolean} isExtendedMode .
 */
export declare type NAVIGATE_TO_EMPLOYEE_SCREEN = {
    employeeId: string;
    isExtendedMode: boolean;
    currentMode: Enums.EmployeeMode;
    historyAction: Enums.EmployeeHistoryActions;
};
export declare const navigateToEmployeeScreen: (employeeId: string, isExtendedMode: boolean, currentMode: Enums.EmployeeMode, historyAction?: Enums.EmployeeHistoryActions) => Action<NAVIGATE_TO_EMPLOYEE_SCREEN>;
/**
 * Thunk dispatched by "Employee" screen. Thunk used to open Employee customer list scnreen.
 *
 */
export declare type NAVIGATE_TO_CUSTOMER_LIST_SCREEN = {};
export declare const navigateToCustomerListScreen: () => Action<NAVIGATE_TO_CUSTOMER_LIST_SCREEN>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
 *
 */
export declare type PERFORM_REFRESH = {};
export declare const performRefresh: () => Action<PERFORM_REFRESH>;
export declare type PERFORM_REFRESH_EXECUTE = {};
export declare const performRefreshExecute: () => Action<PERFORM_REFRESH_EXECUTE>;
export declare type PERFORM_REFRESH_SUCCESS = {
    data: boolean;
};
export declare const performRefreshSuccess: (data: boolean) => Action<PERFORM_REFRESH_SUCCESS>;
export declare type PERFORM_REFRESH_FAILURE = {
    error: Error;
};
export declare const performRefreshFailure: (error: Error) => Action<PERFORM_REFRESH_FAILURE>;
/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 *
 */
export declare type REFRESH_CALL_GET_EMPLOYEE = {};
export declare const refresh_callGetEmployee: () => Action<REFRESH_CALL_GET_EMPLOYEE>;
/**
 * Action dispatched on network thunk chain "refresh_callGetEmployee" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 */
export declare type REFRESH_CALL_GET_EMPLOYEE_REQUEST = {};
export declare const refresh_callGetEmployeeRequest: () => Action<REFRESH_CALL_GET_EMPLOYEE_REQUEST>;
export declare type REFRESH_CALL_GET_EMPLOYEE_SUCCESS = {
    response: Response<ModelsApp.Employee>;
};
export declare const refresh_callGetEmployeeSuccess: (response: Response<ModelsApp.Employee>) => Action<REFRESH_CALL_GET_EMPLOYEE_SUCCESS>;
export declare type REFRESH_CALL_GET_EMPLOYEE_FAILURE = {
    error: Error;
};
export declare const refresh_callGetEmployeeFailure: (error: Error) => Action<REFRESH_CALL_GET_EMPLOYEE_FAILURE>;
/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 *
 */
export declare type CALL_GET_CUSTOMER_LIST = {};
export declare const callGetCustomerList: () => Action<CALL_GET_CUSTOMER_LIST>;
/**
 * Action dispatched on network thunk chain "callGetCustomerList" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 */
export declare type CALL_GET_CUSTOMER_LIST_REQUEST = {};
export declare const callGetCustomerListRequest: () => Action<CALL_GET_CUSTOMER_LIST_REQUEST>;
export declare type CALL_GET_CUSTOMER_LIST_SUCCESS = {
    response: Response<Models.CustomerList>;
};
export declare const callGetCustomerListSuccess: (response: Response<ModelsCrm.CustomerList>) => Action<CALL_GET_CUSTOMER_LIST_SUCCESS>;
export declare type CALL_GET_CUSTOMER_LIST_FAILURE = {
    error: Error;
};
export declare const callGetCustomerListFailure: (error: Error) => Action<CALL_GET_CUSTOMER_LIST_FAILURE>;
/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 *
 */
export declare type CALL_GET_SUBORDINATE_LIST = {};
export declare const callGetSubordinateList: () => Action<CALL_GET_SUBORDINATE_LIST>;
/**
 * Action dispatched on network thunk chain "callGetSubordinateList" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 */
export declare type CALL_GET_SUBORDINATE_LIST_REQUEST = {};
export declare const callGetSubordinateListRequest: () => Action<CALL_GET_SUBORDINATE_LIST_REQUEST>;
export declare type CALL_GET_SUBORDINATE_LIST_SUCCESS = {
    response: Response<Models.MemberList>;
};
export declare const callGetSubordinateListSuccess: (response: Response<ModelsCrm.MemberList>) => Action<CALL_GET_SUBORDINATE_LIST_SUCCESS>;
export declare type CALL_GET_SUBORDINATE_LIST_FAILURE = {
    error: Error;
};
export declare const callGetSubordinateListFailure: (error: Error) => Action<CALL_GET_SUBORDINATE_LIST_FAILURE>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type NAVIGATE_BACK_EMPLOYEE = {};
export declare const navigateBackEmployee: () => Action<NAVIGATE_BACK_EMPLOYEE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to show popover.
 *
 * @param {ModelsApp.Employee} subordinate .
 */
export declare type PERFORM_POPOVER_SUBORDINATE_SHOW = {
    subordinate: ModelsApp.Employee;
};
export declare const performPopoverSubordinateShow: (subordinate: ModelsApp.Employee) => Action<PERFORM_POPOVER_SUBORDINATE_SHOW>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_SUBORDINATE_HIDE = {};
export declare const performPopoverSubordinateHide: () => Action<PERFORM_POPOVER_SUBORDINATE_HIDE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type NAVIGATE_POPOVER_BACK = {};
export declare const navigatePopoverBack: () => Action<NAVIGATE_POPOVER_BACK>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type NAVIGATE_EMPLOYEE_SCREEN_BACK = {};
export declare const navigateEmployeeScreenBack: () => Action<NAVIGATE_EMPLOYEE_SCREEN_BACK>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER = {};
export declare const navigateToPersonContainerPopover: () => Action<NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type PERFORM_PERSON_SELECT = {
    person: ModelsScheduler.Person;
};
export declare const performPersonSelect: (person: ModelsScheduler.Person) => Action<PERFORM_PERSON_SELECT>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to show error modal.
 *
 */
export declare type PERFORM_ERROR_MODAL_SHOW = {};
export declare const performErrorModalShow: () => Action<PERFORM_ERROR_MODAL_SHOW>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW = {};
export declare const performCertificateAlertPopoverShow: () => Action<PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW>;
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export declare type PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE = {};
export declare const performCertificateAlertPopoverHide: () => Action<PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide error modal.
 *
 */
export declare type PERFORM_ERROR_MODAL_HIDE = {};
export declare const performErrorModalHide: () => Action<PERFORM_ERROR_MODAL_HIDE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to set isEmployeeShedulerAvailable to false.
 *
 */
export declare type SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE = {};
export declare const setEmployeeShedulerAvailabilityFalse: () => Action<SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE>;
/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to navigate to email screen.
 *
 */
export declare type NAVIGATE_TO_EMAIL_SCREEN = {};
export declare const navigateToEmailScreen: () => Action<NAVIGATE_TO_EMAIL_SCREEN>;
export declare type PERFORM_CANCEL_REFRESH_ERROR = {};
export declare const performCancelRefreshError: () => Action<PERFORM_CANCEL_REFRESH_ERROR>;
export declare type PERFORM_CANCEL_SUBORDINATE_LIST_ERROR = {};
export declare const performCancelSubordinateListError: () => Action<PERFORM_CANCEL_SUBORDINATE_LIST_ERROR>;
export declare type PERFORM_CANCEL_CUSTOMER_LIST_ERROR = {};
export declare const performCancelCustomerListError: () => Action<PERFORM_CANCEL_CUSTOMER_LIST_ERROR>;
export declare type PERFORM_CHECK_CERTIFICATE = {};
export declare const performCheckCertificate: () => Action<PERFORM_CHECK_CERTIFICATE>;
export declare type PERFORM_CHECK_CERTIFICATE_SUCCESS = {};
export declare const performCheckCertificateSuccess: () => Action<PERFORM_CHECK_CERTIFICATE_SUCCESS>;
export declare type PERFORM_CHECK_CERTIFICATE_FAILED = {};
export declare const performCheckCertificateFailed: () => Action<PERFORM_CHECK_CERTIFICATE_FAILED>;
/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 *
 */
export declare type CALL_GET_EMPLOYEE_HEAD = {};
export declare const callGetEmployeeHead: () => Action<CALL_GET_EMPLOYEE_HEAD>;
/**
 * Action dispatched on network thunk chain "callGetEmployeeHead" started. Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 */
export declare type CALL_GET_EMPLOYEE_HEAD_REQUEST = {};
export declare const callGetEmployeeHeadRequest: () => Action<CALL_GET_EMPLOYEE_HEAD_REQUEST>;
/**
 * Action dispatched on fetch succeeded in thunk "callGetEmployeeHead". Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 *
 * @param {ModelsApp.Employee} response Data received by fetch.
 */
export declare type CALL_GET_EMPLOYEE_HEAD_SUCCESS = {
    response: Response<ModelsApp.Employee>;
};
export declare const callGetEmployeeHeadSuccess: (response: Response<ModelsApp.Employee>) => Action<CALL_GET_EMPLOYEE_HEAD_SUCCESS>;
/**
 * Action dispatched on fetch failure in thunk "callGetEmployeeHead". Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export declare type CALL_GET_EMPLOYEE_HEAD_FAILURE = {
    error: Error;
};
export declare const callGetEmployeeHeadFailure: (error: Error) => Action<CALL_GET_EMPLOYEE_HEAD_FAILURE>;
