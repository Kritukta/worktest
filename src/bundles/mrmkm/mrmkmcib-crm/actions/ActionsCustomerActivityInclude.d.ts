/**
 * Actions of CustomerActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE";
export declare const NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_CUSTOMER_PICKER_SCREEN";
export declare const PERFORM_INPUT_SEARCH_MANAGED_ONLY = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH_MANAGED_ONLY";
export declare const PERFORM_INPUT_SEARCH = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH";
export declare const PERFORM_SEARCH_RESET = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_RESET";
export declare const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW";
export declare const PERFORM_SEARCH = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH";
export declare const PERFORM_SEARCH_EXECUTE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_EXECUTE";
export declare const PERFORM_SEARCH_SUCCESS = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_SUCCESS";
export declare const PERFORM_SEARCH_FAILURE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_FAILURE";
export declare const SEARCH_VALIDATE_SEARCH = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_VALIDATE_SEARCH";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE";
export declare const PERFORM_INPUT_CUSTOMER = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_CUSTOMER";
export declare const CALL_GET_CUSTOMER = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER";
export declare const CALL_GET_CUSTOMER_REQUEST = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_REQUEST";
export declare const CALL_GET_CUSTOMER_SUCCESS = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_SUCCESS";
export declare const CALL_GET_CUSTOMER_FAILURE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_FAILURE";
export declare const PERFORM_INPUT_COMMENT = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_COMMENT";
export declare const PERFORM_CANCEL = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CANCEL";
export declare const PERFORM_SAVE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE";
export declare const PERFORM_SAVE_EXECUTE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const PERFORM_SAVE_SUCCESS = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE";
export declare const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST";
export declare const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS";
export declare const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE";
export declare const PERFORM_VALIDATE = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_VALIDATE";
export declare const NAVIGATE_BACK = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_CONTAINER_RESET = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CONTAINER_RESET";
/**
 * Internal thunk used in "Activity" container. Thunk chain used to change display error model activity card.
 *
 */
export declare type PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW = {
    value: boolean;
};
export declare const performChangeDisplayErrorModalWindow: (value: boolean) => Action<PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to show customer picker screen.
 *
 */
export declare type NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = {};
export declare const navigateToCustomerPickerScreen: () => Action<NAVIGATE_TO_CUSTOMER_PICKER_SCREEN>;
export declare type NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE = {};
export declare const navigateToMemberListScreenPage: () => Action<NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input switch changed.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_SEARCH_MANAGED_ONLY = {
    value: boolean;
};
export declare const performInputSearchManagedOnly: (value: boolean) => Action<PERFORM_INPUT_SEARCH_MANAGED_ONLY>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SEARCH = {
    value: string;
};
export declare const performInputSearch: (value: string) => Action<PERFORM_INPUT_SEARCH>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to reset search parameters.
 *
 */
export declare type PERFORM_SEARCH_RESET = {};
export declare const performSearchReset: () => Action<PERFORM_SEARCH_RESET>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
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
 * Internal thunk used in "CustomerActivityInclude" container. Thunk used to perform search query validation and search type determination.
 *
 */
export declare type SEARCH_VALIDATE_SEARCH = {};
export declare const search_validateSearch: () => Action<SEARCH_VALIDATE_SEARCH>;
/**
 * Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
 *
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {};
export declare const search_callGetCustomerSearchList: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>;
/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {};
export declare const search_callGetCustomerSearchListRequest: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = {
    response: Response<Models.CustomerList>;
};
export declare const search_callGetCustomerSearchListSuccess: (response: Response<ModelsCrm.CustomerList>) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = {
    error: Error;
};
export declare const search_callGetCustomerSearchListFailure: (error: Error) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Customer field.
 *
 * @param {Models.Customer} customer .
 */
export declare type PERFORM_INPUT_CUSTOMER = {
    customer: Models.Customer;
};
export declare const performInputCustomer: (customer: ModelsCrm.Customer) => Action<PERFORM_INPUT_CUSTOMER>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 *
 */
export declare type CALL_GET_CUSTOMER = {};
export declare const callGetCustomer: () => Action<CALL_GET_CUSTOMER>;
/**
 * Action dispatched on network thunk chain "callGetCustomer" started. Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 */
export declare type CALL_GET_CUSTOMER_REQUEST = {};
export declare const callGetCustomerRequest: () => Action<CALL_GET_CUSTOMER_REQUEST>;
export declare type CALL_GET_CUSTOMER_SUCCESS = {
    response: Response<Models.Customer>;
};
export declare const callGetCustomerSuccess: (response: Response<ModelsCrm.Customer>) => Action<CALL_GET_CUSTOMER_SUCCESS>;
export declare type CALL_GET_CUSTOMER_FAILURE = {
    error: Error;
};
export declare const callGetCustomerFailure: (error: Error) => Action<CALL_GET_CUSTOMER_FAILURE>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_COMMENT = {
    value: string;
};
export declare const performInputComment: (value: string) => Action<PERFORM_INPUT_COMMENT>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
 *
 */
export declare type PERFORM_SAVE = {};
export declare const performSave: () => Action<PERFORM_SAVE>;
export declare type PERFORM_SAVE_EXECUTE = {};
export declare const performSaveExecute: () => Action<PERFORM_SAVE_EXECUTE>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
};
export declare const performSaveSuccess: (data: boolean) => Action<PERFORM_SAVE_SUCCESS>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 *
 */
export declare type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE = {};
export declare const callPostCustomerActivityIncludeCreate: () => Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE>;
/**
 * Action dispatched on network thunk chain "callPostCustomerActivityIncludeCreate" started. Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 */
export declare type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST = {};
export declare const callPostCustomerActivityIncludeCreateRequest: () => Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST>;
export declare type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPostCustomerActivityIncludeCreateSuccess: (response: Response<boolean>) => Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS>;
export declare type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE = {
    error: Error;
};
export declare const callPostCustomerActivityIncludeCreateFailure: (error: Error) => Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE>;
/**
 * Internal thunk used in "CustomerActivityInclude" container. Thunk used to confirm changes.
 *
 * @param {ModelsApp.Employee} currentUser .
 * @param {Models.CustomerManaged} currentCustomerManaged .
 */
export declare type PERFORM_VALIDATE = {
    currentUser: ModelsApp.Employee;
    currentCustomerManaged: Models.CustomerManaged;
    currentCustomer: Models.Customer;
};
export declare const performValidate: (currentUser: ModelsApp.Employee, currentCustomerManaged: ModelsCrm.CustomerManaged, currentCustomer: ModelsCrm.Customer) => Action<PERFORM_VALIDATE>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
