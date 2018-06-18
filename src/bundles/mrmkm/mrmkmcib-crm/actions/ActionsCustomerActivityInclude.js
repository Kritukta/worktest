/**
 * Actions of CustomerActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE';
export const NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_CUSTOMER_PICKER_SCREEN';
export const PERFORM_INPUT_SEARCH_MANAGED_ONLY = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH_MANAGED_ONLY';
export const PERFORM_INPUT_SEARCH = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH';
export const PERFORM_SEARCH_RESET = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_RESET';
export const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW";
export const PERFORM_SEARCH = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH';
export const PERFORM_SEARCH_EXECUTE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_EXECUTE';
export const PERFORM_SEARCH_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_SUCCESS';
export const PERFORM_SEARCH_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_FAILURE';
export const SEARCH_VALIDATE_SEARCH = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_VALIDATE_SEARCH';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE';
export const PERFORM_INPUT_CUSTOMER = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_CUSTOMER';
export const CALL_GET_CUSTOMER = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER';
export const CALL_GET_CUSTOMER_REQUEST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_REQUEST';
export const CALL_GET_CUSTOMER_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_SUCCESS';
export const CALL_GET_CUSTOMER_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_FAILURE';
export const PERFORM_INPUT_COMMENT = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_COMMENT';
export const PERFORM_CANCEL = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CANCEL';
export const PERFORM_SAVE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE';
export const PERFORM_SAVE_EXECUTE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_EXECUTE';
export const PERFORM_SAVE_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_SUCCESS';
export const PERFORM_SAVE_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_FAILURE';
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE';
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST';
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS';
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE';
export const PERFORM_VALIDATE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_VALIDATE';
export const NAVIGATE_BACK = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_BACK';
export const PERFORM_CONTAINER_RESET = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CONTAINER_RESET';
export const performChangeDisplayErrorModalWindow = (value) => ({
    type: PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW,
    payload: { value }
});
export const navigateToCustomerPickerScreen = () => ({
    type: NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    payload: {}
});
export const navigateToMemberListScreenPage = () => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE,
    payload: {}
});
export const performInputSearchManagedOnly = (value) => ({
    type: PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    payload: {
        value: value,
    }
});
export const performInputSearch = (value) => ({
    type: PERFORM_INPUT_SEARCH,
    payload: {
        value: value,
    }
});
export const performSearchReset = () => ({
    type: PERFORM_SEARCH_RESET,
    payload: {}
});
export const performSearch = () => ({
    type: PERFORM_SEARCH,
    payload: {}
});
export const performSearchExecute = () => ({
    type: PERFORM_SEARCH_EXECUTE,
    payload: {}
});
export const performSearchSuccess = (data) => ({
    type: PERFORM_SEARCH_SUCCESS,
    payload: {
        data: data
    }
});
export const performSearchFailure = (error) => ({
    type: PERFORM_SEARCH_FAILURE,
    payload: {
        error: error
    }
});
export const search_validateSearch = () => ({
    type: SEARCH_VALIDATE_SEARCH,
    payload: {}
});
export const search_callGetCustomerSearchList = () => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST,
    payload: {}
});
export const search_callGetCustomerSearchListRequest = () => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST,
    payload: {}
});
export const search_callGetCustomerSearchListSuccess = (response) => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const search_callGetCustomerSearchListFailure = (error) => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const performInputCustomer = (customer) => ({
    type: PERFORM_INPUT_CUSTOMER,
    payload: {
        customer: customer,
    }
});
export const callGetCustomer = () => ({
    type: CALL_GET_CUSTOMER,
    payload: {}
});
export const callGetCustomerRequest = () => ({
    type: CALL_GET_CUSTOMER_REQUEST,
    payload: {}
});
export const callGetCustomerSuccess = (response) => ({
    type: CALL_GET_CUSTOMER_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetCustomerFailure = (error) => ({
    type: CALL_GET_CUSTOMER_FAILURE,
    payload: {
        error: error
    }
});
export const performInputComment = (value) => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value,
    }
});
export const performCancel = () => ({
    type: PERFORM_CANCEL,
    payload: {}
});
export const performSave = () => ({
    type: PERFORM_SAVE,
    payload: {}
});
export const performSaveExecute = () => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
});
export const performSaveSuccess = (data) => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data
    }
});
export const performSaveFailure = (error) => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
});
export const callPostCustomerActivityIncludeCreate = () => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE,
    payload: {}
});
export const callPostCustomerActivityIncludeCreateRequest = () => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST,
    payload: {}
});
export const callPostCustomerActivityIncludeCreateSuccess = (response) => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS,
    payload: {
        response: response
    }
});
export const callPostCustomerActivityIncludeCreateFailure = (error) => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE,
    payload: {
        error: error
    }
});
export const performValidate = (currentUser, currentCustomerManaged, currentCustomer) => ({
    type: PERFORM_VALIDATE,
    payload: {
        currentUser: currentUser,
        currentCustomerManaged: currentCustomerManaged,
        currentCustomer: currentCustomer
    }
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsCustomerActivityInclude.js.map