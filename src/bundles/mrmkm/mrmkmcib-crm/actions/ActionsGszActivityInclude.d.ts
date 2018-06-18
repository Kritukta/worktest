/**
 * Actions of GszActivityInclude container.
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
export declare const NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = "GSZ_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_CUSTOMER_PICKER_SCREEN";
export declare const NAVIGATE_TO_MEMBER_LIST_SCREEN = "GSZ_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN";
export declare const PERFORM_INPUT_SEARCH_MANAGED_ONLY = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH_MANAGED_ONLY";
export declare const PERFORM_INPUT_SEARCH = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH";
export declare const PERFORM_SEARCH_RESET = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_RESET";
export declare const PERFORM_SEARCH = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH";
export declare const PERFORM_SEARCH_EXECUTE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_EXECUTE";
export declare const PERFORM_SEARCH_SUCCESS = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_SUCCESS";
export declare const PERFORM_SEARCH_FAILURE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_FAILURE";
export declare const SEARCH_VALIDATE_SEARCH = "GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_VALIDATE_SEARCH";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = "GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = "GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = "GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE";
export declare const PERFORM_INPUT_CUSTOMER = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_CUSTOMER";
export declare const PERFORM_INPUT_COMMENT = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_COMMENT";
export declare const PERFORM_CANCEL = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CANCEL";
export declare const PERFORM_SAVE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE";
export declare const PERFORM_SAVE_EXECUTE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const PERFORM_SAVE_SUCCESS = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE";
export declare const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST = "GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST";
export declare const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS = "GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS";
export declare const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE";
export declare const PERFORM_VALIDATE = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_VALIDATE";
export declare const NAVIGATE_BACK = "GSZ_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_CONTAINER_RESET = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_CHANGE_VISIBLE_ERROR_MODAL = "GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CHANGE_VISIBLE_ERROR_MODAL";
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to show customer picker screen.
 *
 */
export declare type NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = {};
export declare const navigateToCustomerPickerScreen: () => Action<NAVIGATE_TO_CUSTOMER_PICKER_SCREEN>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to show member list screen.
 *
 */
export declare type NAVIGATE_TO_MEMBER_LIST_SCREEN = {};
export declare const navigateToMemberListScreen: () => Action<NAVIGATE_TO_MEMBER_LIST_SCREEN>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on search input switch changed.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_SEARCH_MANAGED_ONLY = {
    value: boolean;
};
export declare const performInputSearchManagedOnly: (value: boolean) => Action<PERFORM_INPUT_SEARCH_MANAGED_ONLY>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SEARCH = {
    value: string;
};
export declare const performInputSearch: (value: string) => Action<PERFORM_INPUT_SEARCH>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to reset search parameters.
 *
 */
export declare type PERFORM_SEARCH_RESET = {};
export declare const performSearchReset: () => Action<PERFORM_SEARCH_RESET>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to perform search query.
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
 * Internal thunk used in "GszActivityInclude" container. Thunk used to perform search query validation and search type determination.
 *
 */
export declare type SEARCH_VALIDATE_SEARCH = {};
export declare const search_validateSearch: () => Action<SEARCH_VALIDATE_SEARCH>;
/**
 * Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
 *
 */
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {};
export declare const search_callGetCustomerSearchList: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>;
/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
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
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on user input Customer field.
 *
 * @param {Models.Customer} customer .
 * @param {ModelsApp.Employee} currentUser
 */
export declare type PERFORM_INPUT_CUSTOMER = {
    customer: Models.Customer;
    currentUser: ModelsApp.Employee;
};
export declare const performInputCustomer: (customer: ModelsCrm.Customer, currentUser: ModelsApp.Employee) => Action<PERFORM_INPUT_CUSTOMER>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_COMMENT = {
    value: string;
};
export declare const performInputComment: (value: string) => Action<PERFORM_INPUT_COMMENT>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to confirm changes.
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
 * Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
 *
 */
export declare type CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE = {};
export declare const callPostGszActivityIncludeCreate: () => Action<CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE>;
/**
 * Action dispatched on network thunk chain "callPostGszActivityIncludeCreate" started. Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
 */
export declare type CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST = {};
export declare const callPostGszActivityIncludeCreateRequest: () => Action<CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST>;
export declare type CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPostGszActivityIncludeCreateSuccess: (response: Response<boolean>) => Action<CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS>;
export declare type CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE = {
    error: Error;
};
export declare const callPostGszActivityIncludeCreateFailure: (error: Error) => Action<CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE>;
/**
 * Internal thunk used in "GszActivityInclude" container. Thunk used to confirm changes.
 *
 * @param {ModelsApp.Employee} currentUser .
 */
export declare type PERFORM_VALIDATE = {
    currentUser: ModelsApp.Employee;
};
export declare const performValidate: (currentUser: ModelsApp.Employee) => Action<PERFORM_VALIDATE>;
/**
 * Thunk dispatched by "GszActivityInclude" screen.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Internal thunk used in "GszActivityInclude" container. Thunk used to change visible of error modal.
 *
 * @param {boolean} status
 */
export declare type PERFORM_CHANGE_VISIBLE_ERROR_MODAL = {
    status: boolean;
};
export declare const performChangeVisibleErrorModal: (status: boolean) => Action<PERFORM_CHANGE_VISIBLE_ERROR_MODAL>;
