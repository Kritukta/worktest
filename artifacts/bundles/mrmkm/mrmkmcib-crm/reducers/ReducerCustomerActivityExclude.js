/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsCustomerActivityExclude from '../actions/ActionsCustomerActivityExclude';
import { defaultValues } from "../models/Models";
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude";
import * as util from '../common/Util';
const reducerCustomerActivityExclude = handleActions({
    // Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Activity" screen. Thunk used to change display error model activity.
    [actionsCustomerActivityExclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleErrorModalWindow: action.payload.value });
    },
    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityExclude.PERFORM_SEARCH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: true, searchError: null });
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityExclude.PERFORM_SEARCH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: false, searchError: action.payload.error });
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: true, customerSearchListError: null, searchError: null });
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: action.payload.response.data, customerSearchListCachedDate: action.payload.response.cachedDate, customerSearchListFetching: false, customerSearchListError: null, searchError: null });
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: false, customerSearchListError: action.payload.error });
    },
    // Internal thunk used in "CustomerActivityInclude" container. Thunk used to perform search query validation and search type determination.
    [actionsCustomerActivityExclude.SEARCH_VALIDATE_SEARCH]: (state, action) => {
        return Object.assign({}, state, { isSearchError: state.inputSearch.length < 3, customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '' });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to show customer picker screen.
    [actionsCustomerActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on search input switch changed.
    [actionsCustomerActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY]: (state, action) => {
        return Object.assign({}, state, { inputSearchManagedOnly: action.payload.value });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on search input changed.
    [actionsCustomerActivityExclude.PERFORM_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: action.payload.value });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to reset search parameters.
    [actionsCustomerActivityExclude.PERFORM_SEARCH_RESET]: (state, action) => {
        return Object.assign({}, state, { inputSearch: '', customerSearchList: defaultValues.CustomerList });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search.
    [actionsCustomerActivityExclude.PERFORM_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: state.inputSearch.replace(/\s+/g, " "), customerSearchList: defaultValues.CustomerList });
    },
    // Internal thunk used in "CustomerActivityExclude" container. Thunk chain used to perform search.
    [actionsCustomerActivityExclude.FILTER_CUSTOMER_LIST]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: util.customerActivityExcludeFilterCustomerList(action.payload.inputSearch, action.payload.inputSearchManagedOnly, action.payload.currentCustomerManaged, action.payload.currentCustomer) });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on user input Customer field.
    [actionsCustomerActivityExclude.PERFORM_INPUT_CUSTOMER]: (state, action) => {
        return Object.assign({}, state, { inputCustomer: action.payload.customer });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetCustomer" started. Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER_REQUEST]: (state, action) => {
        return Object.assign({}, state, { inputCustomerFetching: true, inputCustomerError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { inputCustomer: action.payload.response.data, inputCustomerCachedDate: action.payload.response.cachedDate, inputCustomerFetching: false, inputCustomerError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER_FAILURE]: (state, action) => {
        return Object.assign({}, state, { inputCustomerFetching: false, inputCustomerError: action.payload.error });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on user input Comment field.
    [actionsCustomerActivityExclude.PERFORM_INPUT_COMMENT]: (state, action) => {
        return Object.assign({}, state, { inputComment: action.payload.value });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to cancel changes.
    [actionsCustomerActivityExclude.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid() });
    },
    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { activitySaveInProgress: true, activitySaveError: null });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { activitySave: action.payload.data, activitySaveInProgress: false, activitySaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { activitySaveInProgress: false, activitySaveError: action.payload.error });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPostCustomerActivityExcludeCreate" started. Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { activityExcludeCreateFetching: true, activityExcludeCreateError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPostCustomerActivityExcludeCreate". Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { activityExcludeCreate: action.payload.response.data, activityExcludeCreateCachedDate: action.payload.response.cachedDate, activityExcludeCreateFetching: false, activityExcludeCreateError: null });
    },
    // Action dispatched on fetch failure in thunk "callPostCustomerActivityExcludeCreate". Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { activityExcludeCreateFetching: false, activityExcludeCreateError: action.payload.error });
    },
    // Internal thunk used in "CustomerActivityExclude" container. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_VALIDATE]: (state, action) => {
        return Object.assign({}, state, { customerActivityExcludeValidationComment: util.customerActivityExcludeValidationComment(state.inputComment, action.payload.currentUser), customerActivityExcludeValidationCustomer: util.customerActivityExcludeValidationCustomer(state.inputCustomer, action.payload.currentUser, action.payload.currentCustomerManaged, action.payload.currentCustomer) });
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. 
    [actionsCustomerActivityExclude.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomerActivityExclude.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsCustomerActivityExclude.initialState.state);
    },
}, ModelsCustomerActivityExclude.initialState.state);
export default reducerCustomerActivityExclude;
//# sourceMappingURL=ReducerCustomerActivityExclude.js.map