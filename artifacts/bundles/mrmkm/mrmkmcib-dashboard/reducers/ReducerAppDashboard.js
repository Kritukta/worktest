/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsAppDashboard from '../actions/ActionsAppDashboard';
import { defaultValues } from "../models/Models";
import { EnumsCrm } from "mrmkmcib-crm";
import * as ModelsAppDashboard from "../models/ModelsAppDashboard";
import * as util from '../common/Util';
const reducerAppDashboard = handleActions({
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear foundPersonList prop.
    [actionsAppDashboard.FOUND_PERSON_LIST_CLEAR]: (state, action) => {
        return Object.assign({}, state, { foundPersonList: { data: [] } });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update recipients prop.
    [actionsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH]: (state, action) => {
        return Object.assign({}, state, { inputSharePopoverSearch: action.payload.value });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update recipients prop.
    [actionsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentRecipientList: action.payload.value });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update representation prop.
    [actionsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentRepresentation: action.payload.value, currentFileFormat: action.payload.fileFormat });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update fileFormat prop.
    [actionsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentFileFormat: action.payload.value });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate recipients page in popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate format file page in popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
    [actionsAppDashboard.PERFORM_POPOVER_SHARE_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverShare: true });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to hide popover.
    [actionsAppDashboard.PERFORM_POPOVER_SHARE_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverShare: false, sendSuccess: false, sendFetching: false, sendError: null, currentRecipientList: { data: [] }, foundPersonList: { data: [] }, inputSharePopoverSearch: '' });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to init Dashboard mobile application.
    [actionsAppDashboard.PERFORM_APPLICATION_INIT]: (state, action) => {
        return Object.assign({}, state, { currentRecipientList: { data: [] }, inputSharePopoverSearch: '' });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched to handle Qlik error.
    [actionsAppDashboard.HANDLE_QLIK_ERROR]: (state, action) => {
        return Object.assign({}, state, { qlikError: action.payload.error });
    },
    // Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_REQUEST]: (state, action) => {
        return Object.assign({}, state, { qlikAvailabilityCheckFetching: true, qlikAvailabilityCheckError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callQlikAvailabilityCheck". Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { qlikAvailabilityCheck: true, qlikAvailabilityCheckCachedDate: new Date(), qlikAvailabilityCheckFetching: false, qlikAvailabilityCheckError: null });
    },
    // Action dispatched on fetch failure in thunk "callQlikAvailabilityCheck". Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_FAILURE]: (state, action) => {
        return Object.assign({}, state, { qlikAvailabilityCheckFetching: false, qlikAvailabilityCheckError: action.payload.error, qlikError: action.payload.error });
    },
    // Internal thunk used in "AppDashboard" container. Thunk chain dispatched to set context parameters.
    [actionsAppDashboard.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { currentUser: Object.assign({}, action.payload.user), appBuildVersion: action.payload.appBuildVersion, appServerUrl: action.payload.appServerUrl, appServerPath: action.payload.appServerPath });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search mode changed.
    [actionsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED]: (state, action) => {
        return Object.assign({}, state, { isSearchCustomerManaged: action.payload.value });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to enter search mode
    [actionsAppDashboard.PERFORM_SEARCH_MODE_ENABLE]: (state, action) => {
        return Object.assign({}, state, { isSearchMode: true });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to exit search mode
    [actionsAppDashboard.PERFORM_SEARCH_MODE_DISABLE]: (state, action) => {
        return Object.assign({}, state, { isSearchMode: false });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search input changed.
    [actionsAppDashboard.PERFORM_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: action.payload.value });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to reset search parameters.
    [actionsAppDashboard.PERFORM_SEARCH_RESET]: (state, action) => {
        return Object.assign({}, state, { inputSearch: '', customerSearchType: EnumsCrm.CustomerSearchType.Name });
    },
    // Internal thunk used in "AppDashboard" container. Thunk chain used to reset search parameters.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_RESET]: (state, action) => {
        return Object.assign({}, state, { currentSearchPage: 0, customerSearchList: defaultValues.CustomerList, customerSearchError: '' });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: state.inputSearch.trim() });
    },
    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: true, searchError: null });
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { search: action.payload.data, searchInProgress: false, searchError: null });
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: false, searchError: action.payload.error });
    },
    // Action dispatched on abort search. Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform abort search.
    [actionsAppDashboard.PERFORM_SEARCH_ABORT]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: false, searchError: null });
    },
    // Internal thunk used in "AppDashboard" container. Thunk used to perform search query validation and search type determination.
    [actionsAppDashboard.SEARCH_VALIDATE_SEARCH]: (state, action) => {
        return Object.assign({}, state, { isSearchError: state.inputSearch.length < 3, customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '', customerSearchType: util.getCustomerSearchType(state.inputSearch) });
    },
    // Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: true, customerSearchListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: action.payload.response.data, customerSearchListCachedDate: action.payload.response.cachedDate, customerSearchListFetching: false, customerSearchListError: null });
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: false, customerSearchListError: action.payload.error });
    },
    // Action dispatched on abort search in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: false, customerSearchListError: null });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND]: (state, action) => {
        return Object.assign({}, state, { currentSearchPage: state.currentSearchPage + 1 });
    },
    // Action dispatched on thunk chain "performCustomerSearchListAppend" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { searchAppendInProgress: true, searchAppendError: null });
    },
    // Action dispatched on success in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { searchAppend: action.payload.data, searchAppendInProgress: false, searchAppendError: null });
    },
    // Action dispatched on failure in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchAppendInProgress: false, searchAppendError: action.payload.error });
    },
    // Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPageFetching: true, customerSearchListPageError: null });
    },
    // Action dispatched on fetch succeeded in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPage: action.payload.response.data, customerSearchListPageCachedDate: action.payload.response.cachedDate, customerSearchListPageFetching: false, customerSearchListPageError: null });
    },
    // Action dispatched on fetch failure in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPageFetching: false, customerSearchListPageError: action.payload.error });
    },
    // Internal thunk used in "AppDashboard" container. Thunk chain used to concat next page and append customer search list.
    [actionsAppDashboard.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: Object.assign({}, state.customerSearchList, { data: state.customerSearchList.data.concat(state.customerSearchListPage.data), isCompleted: state.customerSearchListPage.isLast == true }) });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
    [actionsAppDashboard.PERFORM_QLIK_EVENT]: (state, action) => {
        return Object.assign({}, state, { currentQlikMessage: action.payload.message, currentFileFormat: action.payload.message.payload.defaultFileFormat });
    },
    [actionsAppDashboard.UNKNOWN_QLIK_EVENT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to open customer from search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SELECT]: (state, action) => {
        return Object.assign({}, state, { searchHistoryList: util.searchHistoryListAppend(state.searchHistoryList, action.payload.customer) });
    },
    [actionsAppDashboard.PERFORM_ADD_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state, { personHistoryList: util.personHistoryListAppend(state.personHistoryList, action.payload.data) });
    },
    [actionsAppDashboard.PERFORM_CLEAR_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state, { personHistoryList: defaultValues.personHistoryList });
    },
    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { personHistoryListInProgress: true, personHistoryListError: null });
    },
    // Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { personHistoryList: action.payload.data, personHistoryListInProgress: false, personHistoryListError: null });
    },
    // Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { personHistoryListInProgress: false, personHistoryListError: action.payload.error });
    },
    [actionsAppDashboard.PERFORM_PERSIST_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Internal thunk used in "AppDashboard" container. Thunk chain used to open customer from search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_OPEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear customer search history list.
    [actionsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR]: (state, action) => {
        return Object.assign({}, state, { searchHistoryList: defaultValues.SearchHistoryList });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to persist search history list data.
    [actionsAppDashboard.PERSIST_SEARCH_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "recoverSearchHistoryList" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { searchHistoryListInProgress: true, searchHistoryListError: null });
    },
    // Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { searchHistoryList: action.payload.data, searchHistoryListInProgress: false, searchHistoryListError: null });
    },
    // Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchHistoryListInProgress: false, searchHistoryListError: action.payload.error });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to reset container state to default values.
    [actionsAppDashboard.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsAppDashboard.initialState.state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set sup parametersto state .
    [actionsAppDashboard.PERFORM_UPDATE_SUP_PARAMETERS]: (state, action) => {
        return Object.assign({}, state, { supParameters: action.payload.params });
    },
    // Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "performFindPeople" started. Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { foundPersonListInProgress: true, foundPersonListError: null });
    },
    // Action dispatched on success in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { foundPersonList: action.payload.data, foundPersonListInProgress: false, foundPersonListError: null });
    },
    // Action dispatched on failure in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { foundPersonListInProgress: false, foundPersonListError: action.payload.error });
    },
    // Thunk used to send data to nprinting.
    [actionsAppDashboard.PERFORM_SEND]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsAppDashboard.CALL_SEND_FILE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "performSend" started.
    [actionsAppDashboard.CALL_SEND_FILE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { sendSuccess: false, sendFetching: true, sendError: null });
    },
    // Action dispatched on success in thunk "performSend".
    [actionsAppDashboard.CALL_SEND_FILE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { sendSuccess: true, sendFetching: false, sendError: null });
    },
    // Action dispatched on failure in thunk "performSend".
    [actionsAppDashboard.CALL_SEND_FILE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { sendSuccess: false, sendFetching: false, sendError: action.payload.error });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik url value.
    [actionsAppDashboard.SET_CURRENT_QLIK_URL]: (state, action) => {
        return Object.assign({}, state, { currentQlikUrl: action.payload.url });
    },
    // Action dispatched by "AppDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to true.
    [actionsAppDashboard.SET_POPOVER_SEARCH_SCREEN_SHOW]: (state, action) => {
        return Object.assign({}, state, { isPopoverVisibleSearchScreen: true });
    },
    // Action dispatched by "AppDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to false.
    [actionsAppDashboard.SET_POPOVER_SEARCH_SCREEN_HIDE]: (state, action) => {
        return Object.assign({}, state, { isPopoverVisibleSearchScreen: false });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik cookie value.
    [actionsAppDashboard.SET_QLIK_COOKIE]: (state, action) => {
        return Object.assign({}, state, { qlikCookie: action.payload.cookie });
    },
}, ModelsAppDashboard.initialState.state);
export default reducerAppDashboard;
//# sourceMappingURL=ReducerAppDashboard.js.map