/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import { defaultValues } from "../models/Models";
import * as actionsCustomerDashboard from '../actions/ActionsCustomerDashboard';
import * as ModelsCustomerDashboard from "../models/ModelsCustomerDashboard";
import * as util from '../common/Util';
const reducerCustomerDashboard = handleActions({
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to clear foundPersonList prop.
    [actionsCustomerDashboard.FOUND_PERSON_LIST_CLEAR]: (state, action) => {
        return Object.assign({}, state, { foundPersonList: { data: [] } });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update shareData prop.
    [actionsCustomerDashboard.SHARE_DATA_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentQlikMessage: action.payload.message });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update recipients prop.
    [actionsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH]: (state, action) => {
        return Object.assign({}, state, { inputSharePopoverSearch: action.payload.value });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update recipients prop.
    [actionsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentRecipientList: action.payload.value });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update representation prop.
    [actionsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentRepresentation: action.payload.value });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update fileFormat prop.
    [actionsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentFileFormat: action.payload.value });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate recipients page in popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate format file page in popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
    [actionsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverShare: true });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to hide popover.
    [actionsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverShare: false, sendSuccess: false, sendFetching: false, sendError: null, currentRecipientList: { data: [] }, foundPersonList: { data: [] }, inputSharePopoverSearch: '' });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on analytics tab open.
    [actionsCustomerDashboard.PERFORM_APPLICATION_INIT]: (state, action) => {
        return Object.assign({}, state, { currentRecipientList: { data: [] }, inputSharePopoverSearch: '' });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched to handle Qlik error.
    [actionsCustomerDashboard.HANDLE_QLIK_ERROR]: (state, action) => {
        return Object.assign({}, state, { qlikError: action.payload.error });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_REQUEST]: (state, action) => {
        return Object.assign({}, state, { qlikAvailabilityCheckFetching: true, qlikAvailabilityCheckError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callQlikAvailabilityCheck". Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { qlikAvailabilityCheck: action.payload.response.data, qlikAvailabilityCheckCachedDate: action.payload.response.cachedDate, qlikAvailabilityCheckFetching: false, qlikAvailabilityCheckError: null });
    },
    // Action dispatched on fetch failure in thunk "callQlikAvailabilityCheck". Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_FAILURE]: (state, action) => {
        return Object.assign({}, state, { qlikAvailabilityCheckFetching: false, qlikAvailabilityCheckError: action.payload.error, qlikError: action.payload.error });
    },
    // Internal thunk used in "CustomerDashboard" container. Thunk chain dispatched to set context parameters.
    [actionsCustomerDashboard.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { currentCustomerManaged: Object.assign({}, action.payload.customerManaged), currentUser: Object.assign({}, action.payload.user) });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
    [actionsCustomerDashboard.PERFORM_QLIK_EVENT]: (state, action) => {
        return Object.assign({}, state, { currentQlikMessage: action.payload.message });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
    [actionsCustomerDashboard.UNKNOWN_QLIK_EVENT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomerDashboard.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsCustomerDashboard.initialState.state);
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set sup parametersto state .
    [actionsCustomerDashboard.PERFORM_UPDATE_SUP_PARAMETERS]: (state, action) => {
        return Object.assign({}, state, { supParameters: action.payload.params });
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to set qlik url value.
    [actionsCustomerDashboard.SET_CURRENT_QLIK_URL]: (state, action) => {
        return Object.assign({}, state, { currentQlikUrl: action.payload.url });
    },
    [actionsCustomerDashboard.PERFORM_ADD_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state, { personHistoryList: util.personHistoryListAppend(state.personHistoryList, action.payload.data) });
    },
    [actionsCustomerDashboard.PERFORM_CLEAR_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state, { personHistoryList: defaultValues.personHistoryList });
    },
    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { personHistoryListInProgress: true, personHistoryListError: null });
    },
    // Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to recover search history list data.
    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { personHistoryList: action.payload.data, personHistoryListInProgress: false, personHistoryListError: null });
    },
    // Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to recover search history list data.
    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { personHistoryListInProgress: false, personHistoryListError: action.payload.error });
    },
    [actionsCustomerDashboard.PERFORM_PERSIST_PERSON_HISTORY_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "performFindPeople" started. Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { foundPersonListInProgress: true, foundPersonListError: null });
    },
    // Action dispatched on success in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { foundPersonList: action.payload.data, foundPersonListInProgress: false, foundPersonListError: null });
    },
    // Action dispatched on failure in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { foundPersonListInProgress: false, foundPersonListError: action.payload.error });
    },
    // Thunk used to send data to nprinting.
    [actionsCustomerDashboard.PERFORM_SEND]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsCustomerDashboard.CALL_SEND_FILE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "performSend" started.
    [actionsCustomerDashboard.CALL_SEND_FILE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { sendSuccess: false, sendFetching: true, sendError: null });
    },
    // Action dispatched on success in thunk "performSend".
    [actionsCustomerDashboard.CALL_SEND_FILE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { sendSuccess: true, sendFetching: false, sendError: null });
    },
    // Action dispatched on failure in thunk "performSend".
    [actionsCustomerDashboard.CALL_SEND_FILE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { sendSuccess: false, sendFetching: false, sendError: action.payload.error });
    },
    // Action dispatched by "CustomerDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to true.
    [actionsCustomerDashboard.SET_POPOVER_SEARCH_SCREEN_SHOW]: (state, action) => {
        return Object.assign({}, state, { isPopoverVisibleSearchScreen: true });
    },
    // Action dispatched by "CustomerDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to false.
    [actionsCustomerDashboard.SET_POPOVER_SEARCH_SCREEN_HIDE]: (state, action) => {
        return Object.assign({}, state, { isPopoverVisibleSearchScreen: false });
    },
    // Action dispatched to cut top on QlikView.
    [actionsCustomerDashboard.SET_TRIMMED_TOP]: (state, action) => {
        return Object.assign({}, state, { isTrimmedTop: action.payload.value });
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik cookie value.
    [actionsCustomerDashboard.SET_QLIK_COOKIE]: (state, action) => {
        return Object.assign({}, state, { qlikCookie: action.payload.cookie });
    },
}, ModelsCustomerDashboard.initialState.state);
export default reducerCustomerDashboard;
//# sourceMappingURL=ReducerCustomerDashboard.js.map