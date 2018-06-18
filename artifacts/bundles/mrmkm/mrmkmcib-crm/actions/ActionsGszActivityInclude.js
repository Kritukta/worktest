/**
 * Actions of GszActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_CUSTOMER_PICKER_SCREEN';
export const NAVIGATE_TO_MEMBER_LIST_SCREEN = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN';
export const PERFORM_INPUT_SEARCH_MANAGED_ONLY = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH_MANAGED_ONLY';
export const PERFORM_INPUT_SEARCH = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH';
export const PERFORM_SEARCH_RESET = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_RESET';
export const PERFORM_SEARCH = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH';
export const PERFORM_SEARCH_EXECUTE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_EXECUTE';
export const PERFORM_SEARCH_SUCCESS = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_SUCCESS';
export const PERFORM_SEARCH_FAILURE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_FAILURE';
export const SEARCH_VALIDATE_SEARCH = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_VALIDATE_SEARCH';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS';
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE';
export const PERFORM_INPUT_CUSTOMER = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_CUSTOMER';
export const PERFORM_INPUT_COMMENT = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_COMMENT';
export const PERFORM_CANCEL = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CANCEL';
export const PERFORM_SAVE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE';
export const PERFORM_SAVE_EXECUTE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_EXECUTE';
export const PERFORM_SAVE_SUCCESS = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_SUCCESS';
export const PERFORM_SAVE_FAILURE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_FAILURE';
export const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE';
export const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST';
export const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS';
export const CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE';
export const PERFORM_VALIDATE = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_VALIDATE';
export const NAVIGATE_BACK = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_BACK';
export const PERFORM_CONTAINER_RESET = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_CHANGE_VISIBLE_ERROR_MODAL = 'GSZ_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CHANGE_VISIBLE_ERROR_MODAL';
export const navigateToCustomerPickerScreen = () => ({
    type: NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    payload: {}
});
export const navigateToMemberListScreen = () => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN,
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
export const performInputCustomer = (customer, currentUser) => ({
    type: PERFORM_INPUT_CUSTOMER,
    payload: {
        customer: customer,
        currentUser,
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
export const callPostGszActivityIncludeCreate = () => ({
    type: CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE,
    payload: {}
});
export const callPostGszActivityIncludeCreateRequest = () => ({
    type: CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST,
    payload: {}
});
export const callPostGszActivityIncludeCreateSuccess = (response) => ({
    type: CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS,
    payload: {
        response: response
    }
});
export const callPostGszActivityIncludeCreateFailure = (error) => ({
    type: CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE,
    payload: {
        error: error
    }
});
export const performValidate = (currentUser) => ({
    type: PERFORM_VALIDATE,
    payload: {
        currentUser: currentUser,
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
export const performChangeVisibleErrorModal = (status) => ({
    type: PERFORM_CHANGE_VISIBLE_ERROR_MODAL,
    payload: {
        status
    }
});
//# sourceMappingURL=ActionsGszActivityInclude.js.map