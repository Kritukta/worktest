/**
 * Actions of NoteList container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_SAVE = 'NOTE_LIST_CONTAINER_PERFORM_SAVE';
export const PERFORM_EDIT = 'NOTE_LIST_CONTAINER_PERFORM_EDIT';
export const PERFORM_CANCEL = 'NOTE_LIST_CONTAINER_PERFORM_CANCEL';
export const NAVIGATE_TO_NOTE_LIST_SCREEN = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_NOTE_LIST_SCREEN';
export const PERFORM_NOTE_ADD = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_ADD';
export const PERFORM_NOTE_DELETE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_DELETE';
export const NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN';
export const NAVIGATE_BACK = 'NOTE_LIST_CONTAINER_NAVIGATE_BACK';
export const PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL = 'NOTE_LIST_CONTAINER_PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL';
export const PERFORM_NOTE_UPDATE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_UPDATE';
export const PERFORM_CONTAINER_RESET = 'NOTE_LIST_CONTAINER_PERFORM_CONTAINER_RESET';
export const NAVIGATE_TO_VIEW_NOTE = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_VIEW_NOTE';
export const PERFORM_EDIT_NOTE = 'NOTE_LIST_CONTAINER_PERFORM_EDIT_NOTE';
export const PERFORM_NOTE_TEXT_UPDATE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_TEXT_UPDATE';
export const NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN';
export const PERFORM_NOTE_TYPE_UPDATE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_TYPE_UPDATE';
export const NAVIGATE_BACK_NOTE = 'NOTE_LIST_CONTAINER_NAVIGATE_BACK_NOTE';
export const PERFORM_SAVE_NOTE = 'NOTE_LIST_CONTAINER_PERFORM_SAVE_NOTE';
export const PERFORM_CLOSE_NOTE_DELETE_PANEL = 'NOTE_LIST_CONTAINER_PERFORM_CLOSE_NOTE_DELETE_PANEL';
export const RETURN_TO_PREVIOUS_NAVIGATION_AREA = 'NOTE_LIST_CONTAINER_RETURN_TO_PREVIOUS_NAVIGATION_AREA';
export const CLEAR_STATE = 'NOTE_LIST_CONTAINER_CLEAR_STATE';
export const NOTE_CAP = 'NOTE_CAP';
export const PERFORM_REFRESH_NOTE_LIST_STATE = 'NOTE_LIST_CONTAINER_PERFORM_REFRESH_NOTE_LIST_STATE';
export const CALL_PUT_AGENT_NOTE_LIST_UPDATE = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE';
export const CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST';
export const CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS';
export const CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE';
export const PERFORM_SAVE_SUCCESS = 'NOTE_LIST_CONTAINER_PERFORM_SAVE_SUCCESS';
export const PERFORM_SAVE_FAILURE = 'NOTE_LIST_CONTAINER_PERFORM_SAVE_FAILURE';
export const CALL_GET_AGENT = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT';
export const CALL_GET_AGENT_REQUEST = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT_REQUEST';
export const CALL_GET_AGENT_SUCCESS = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT_SUCCESS';
export const CALL_GET_AGENT_FAILURE = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT_FAILURE';
export const PERFORM_OPEN_NOTE_DELETE_PANEL = 'NOTE_LIST_CONTAINER_PERFORM_OPEN_NOTE_DELETE_PANEL';
export const performSaveNote = (noteList) => ({
    type: PERFORM_SAVE_NOTE,
    payload: {
        noteList: noteList
    }
});
export const performChangeVisibleNoteListErrorModal = (status) => ({
    type: PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL,
    payload: {
        status
    }
});
export const performEditNote = () => ({
    type: PERFORM_EDIT_NOTE,
    payload: {}
});
export const performOpenNoteDeletePanel = (note) => ({
    type: PERFORM_OPEN_NOTE_DELETE_PANEL,
    payload: {
        note
    }
});
export const navigateToViewNotes = (note) => ({
    type: NAVIGATE_TO_VIEW_NOTE,
    payload: {
        note,
    }
});
export const performNoteAdd = () => ({
    type: PERFORM_NOTE_ADD,
    payload: {}
});
export const navigateToNoteTypePickerScreen = (index) => ({
    type: NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN,
    payload: {
        index: index,
    }
});
export const navigateToCurrentNoteTypePickerScreen = () => ({
    type: NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    payload: {}
});
export const navigateBackNote = () => ({
    type: NAVIGATE_BACK_NOTE,
    payload: {}
});
export const performNoteUpdate = (text, type) => ({
    type: PERFORM_NOTE_UPDATE,
    payload: {
        text: text,
        type: type,
    }
});
export const performNoteTextUpdate = (text) => ({
    type: PERFORM_NOTE_TEXT_UPDATE,
    payload: {
        text: text
    }
});
export const performNoteTypeUpdate = (type) => ({
    type: PERFORM_NOTE_TYPE_UPDATE,
    payload: {
        type: type
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const performEdit = (noteList) => ({
    type: PERFORM_EDIT,
    payload: {
        noteList: noteList
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
export const returnToPreviousNavigationArea = () => ({
    type: RETURN_TO_PREVIOUS_NAVIGATION_AREA,
    payload: {}
});
export const clearState = () => ({
    type: CLEAR_STATE,
    payload: {}
});
export const performCloseNoteDeletePanel = (note) => ({
    type: PERFORM_CLOSE_NOTE_DELETE_PANEL,
    payload: { note }
});
export const performNoteDelete = (note) => ({
    type: PERFORM_NOTE_DELETE,
    payload: {
        note,
    }
});
export const navigateToNoteListScreen = (noteList, agent, customerManaged, noteListContextMode, noteListAccessLevel) => ({
    type: NAVIGATE_TO_NOTE_LIST_SCREEN,
    payload: {
        agent,
        noteListAccessLevel,
        noteListContextMode,
        customerManaged,
        noteList
    }
});
export const CAP = (noteList) => ({
    type: NOTE_CAP,
    payload: {
        noteList: noteList,
    }
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const performRefreshNoteListState = (noteList) => ({
    type: PERFORM_REFRESH_NOTE_LIST_STATE,
    payload: {
        noteList: noteList,
    }
});
export const callPutAgentNoteListUpdate = () => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE,
    payload: {}
});
export const callPutAgentNoteListUpdateRequest = () => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST,
    payload: {}
});
export const callPutAgentNoteListUpdateSuccess = (response) => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS,
    payload: {
        response: response
    }
});
export const callPutAgentNoteListUpdateFailure = (error) => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE,
    payload: {
        error: error
    }
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
export const callGetAgent = () => ({
    type: CALL_GET_AGENT,
    payload: {}
});
export const callGetAgentRequest = () => ({
    type: CALL_GET_AGENT_REQUEST,
    payload: {}
});
export const callGetAgentSuccess = (response) => ({
    type: CALL_GET_AGENT_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetAgentFailure = (error) => ({
    type: CALL_GET_AGENT_FAILURE,
    payload: {
        error: error
    }
});
//# sourceMappingURL=ActionsNoteList.js.map