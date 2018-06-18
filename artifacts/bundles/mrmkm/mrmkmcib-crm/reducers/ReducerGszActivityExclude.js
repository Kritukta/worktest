/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsGszActivityExclude from '../actions/ActionsGszActivityExclude';
import { defaultValues } from "../models/Models";
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude";
import * as util from '../common/Util';
const reducerGszActivityExclude = handleActions({
    // Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on search input switch changed.
    [actionsGszActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY]: (state, action) => {
        return Object.assign({}, state, { inputSearchManagedOnly: action.payload.value });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on search input changed.
    [actionsGszActivityExclude.PERFORM_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: action.payload.value });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to reset search parameters.
    [actionsGszActivityExclude.PERFORM_SEARCH_RESET]: (state, action) => {
        return Object.assign({}, state, { inputSearch: '', customerSearchList: defaultValues.CustomerList, customerSearchError: '' });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityExclude.PERFORM_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: state.inputSearch.replace(/\s+/g, " ") });
    },
    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityExclude.PERFORM_SEARCH_EXECUTE]: (state) => {
        return Object.assign({}, state, { searchInProgress: true, searchError: null });
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityExclude.PERFORM_SEARCH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { search: action.payload.data, searchInProgress: false, searchError: null });
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityExclude.PERFORM_SEARCH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: false, searchError: action.payload.error });
    },
    // Internal thunk used in "GszActivityExclude" container. Thunk used to perform search query validation and search type determination.
    [actionsGszActivityExclude.SEARCH_VALIDATE_SEARCH]: (state, action) => {
        return Object.assign({}, state, { isSearchError: state.inputSearch.length < 3, customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '' });
    },
    // Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: true, customerSearchListError: null });
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "GszActivityEzclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: false, customerSearchListError: action.payload.error });
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: action.payload.response.data, customerSearchListCachedDate: action.payload.response.cachedDate, customerSearchListFetching: false, customerSearchListError: null });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk used to show customer picker screen.
    [actionsGszActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on user input Customer field.
    [actionsGszActivityExclude.PERFORM_INPUT_CUSTOMER]: (state, action) => {
        return Object.assign({}, state, { inputCustomer: action.payload.customer, gszActivityExcludeValidationCustomer: util.gszActivityExcludeValidationCustomer(action.payload.customer, action.payload.currentUser) });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on user input Comment field.
    [actionsGszActivityExclude.PERFORM_INPUT_COMMENT]: (state, action) => {
        return Object.assign({}, state, { inputComment: action.payload.value });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk used to cancel changes.
    [actionsGszActivityExclude.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
    [actionsGszActivityExclude.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid() });
    },
    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
    [actionsGszActivityExclude.PERFORM_SAVE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { activitySaveInProgress: true, activitySaveError: null });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
    [actionsGszActivityExclude.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { activitySave: action.payload.data, activitySaveInProgress: false, activitySaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
    [actionsGszActivityExclude.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { activitySaveInProgress: false, activitySaveError: action.payload.error });
    },
    // Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
    [actionsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPostGszActivityExcludeCreate" started. Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
    [actionsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { activityExcludeCreateFetching: true, activityExcludeCreateError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPostGszActivityExcludeCreate". Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
    [actionsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { activityExcludeCreate: action.payload.response.data, activityExcludeCreateCachedDate: action.payload.response.cachedDate, activityExcludeCreateFetching: false, activityExcludeCreateError: null });
    },
    // Action dispatched on fetch failure in thunk "callPostGszActivityExcludeCreate". Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
    [actionsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { activityExcludeCreateFetching: false, activityExcludeCreateError: action.payload.error });
    },
    // Internal thunk used in "GszActivityExclude" container. Thunk used to confirm changes.
    [actionsGszActivityExclude.PERFORM_VALIDATE]: (state, action) => {
        return Object.assign({}, state, { gszActivityExcludeValidationComment: util.gszActivityExcludeValidationComment(state.inputComment, action.payload.currentUser), gszActivityExcludeValidationCustomer: util.gszActivityExcludeValidationCustomer(state.inputCustomer, action.payload.currentUser) });
    },
    // Thunk dispatched by "GszActivityExclude" screen. 
    [actionsGszActivityExclude.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched to reset container state to default values.
    [actionsGszActivityExclude.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsGszActivityExclude.initialState.state);
    },
    // Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched to change visible error modal.
    [actionsGszActivityExclude.PERFORM_CHANGE_VISIBLE_ERROR_MODAL]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalActivityError: action.payload.status });
    },
}, ModelsGszActivityExclude.initialState.state);
export default reducerGszActivityExclude;
//# sourceMappingURL=ReducerGszActivityExclude.js.map