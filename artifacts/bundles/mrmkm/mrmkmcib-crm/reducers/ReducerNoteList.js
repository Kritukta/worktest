/*
 * Created by Burnaev M.U.
 */
import { handleActions } from "redux-actions";
import * as actionsNoteList from "../actions/ActionsNoteList";
import * as ModelsNoteList from "../models/ModelsNoteList";
import * as util from "../common/Util";
const reducerNoteList = handleActions({
    // Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
    [actionsNoteList.PERFORM_SAVE_NOTE]: (state, action) => {
        return Object.assign({}, state, { noteList: action.payload.noteList });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
    [actionsNoteList.PERFORM_EDIT_NOTE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
    [actionsNoteList.PERFORM_OPEN_NOTE_DELETE_PANEL]: (state, action) => {
        return Object.assign({}, state, { noteListDeletePanel: [...state.noteListDeletePanel, action.payload.note] });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to show notes view.
    [actionsNoteList.NAVIGATE_TO_VIEW_NOTE]: (state, action) => {
        return Object.assign({}, state, { currentNote: action.payload.note });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to add new note.
    [actionsNoteList.PERFORM_NOTE_ADD]: (state, action) => {
        return Object.assign({}, state, { currentNote: util.defaultNote });
    },
    // Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
    [actionsNoteList.NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state, { currentNoteIndex: action.payload.index });
    },
    // Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
    [actionsNoteList.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
    [actionsNoteList.NAVIGATE_BACK_NOTE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to update note.
    [actionsNoteList.PERFORM_NOTE_UPDATE]: (state, action) => {
        return Object.assign({}, state, { noteList: util.noteListUpdate(state.noteList, state.currentNoteIndex, action.payload.text, action.payload.type) });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to update note type.
    [actionsNoteList.PERFORM_NOTE_TYPE_UPDATE]: (state, action) => {
        return Object.assign({}, state, { currentNote: Object.assign({}, state.currentNote, { type: action.payload.type }) });
    },
    // Thunk dispatched by "NoteList" screen. Thunk dispatched to reset container state to default values.
    [actionsNoteList.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsNoteList.initialState.state);
    },
    //******************************************************************************************
    // Thunk dispatched by "NoteList" screen. Thunk used to enter editor mode.
    [actionsNoteList.PERFORM_EDIT]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: true, inputNoteList: action.payload.noteList });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to cancel changes.
    [actionsNoteList.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: false, inputNoteList: state.noteList, isModified: false });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
    [actionsNoteList.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { isModified: false, isEditorMode: false });
    },
    [actionsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL]: (state, action) => {
        return Object.assign({}, state, { isVisibleNoteListErrorModalWindow: action.payload.status });
    },
    [actionsNoteList.RETURN_TO_PREVIOUS_NAVIGATION_AREA]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsNoteList.CLEAR_STATE]: (state, action) => {
        return Object.assign({}, state, { noteList: {
                data: []
            } });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
    [actionsNoteList.PERFORM_CLOSE_NOTE_DELETE_PANEL]: (state, action) => {
        return Object.assign({}, state, { noteListDeletePanel: state.noteListDeletePanel.filter((note) => note.id !== (action.payload.note && action.payload.note.id)) });
    },
    // Thunk dispatched by "NoteList" screen. Thunk used to show member list.
    [actionsNoteList.NAVIGATE_TO_NOTE_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsNoteList.initialState.state, { currentAgent: action.payload.agent, currentCustomerManaged: action.payload.customerManaged, noteList: action.payload.agent.noteList, noteListContextMode: action.payload.noteListContextMode, noteListAccessLevel: action.payload.noteListAccessLevel, operationUuid: util.getRandomOperationUuid(), inputNoteList: action.payload.agent.noteList });
    },
    [actionsNoteList.NOTE_CAP]: (state, action) => {
        return Object.assign({}, ModelsNoteList.initialState.state, { noteList: action.payload.noteList, inputNoteList: action.payload.noteList });
    },
    // Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
    [actionsNoteList.PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL]: (state, action) => {
        return Object.assign({}, state, { isVisibleNoteListErrorModalWindow: action.payload.status });
    },
    [actionsNoteList.PERFORM_NOTE_DELETE]: (state, action) => {
        return Object.assign({}, state, { noteListDeletePanel: state.noteListDeletePanel.filter((note) => note.id !== (action.payload.note && action.payload.note.id)), isModified: true, inputNoteList: { data: state.inputNoteList.data.filter((note) => note.id !== (action.payload.note && action.payload.note.id)) } });
    },
    // Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
    [actionsNoteList.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsNoteList.PERFORM_REFRESH_NOTE_LIST_STATE]: (state, action) => {
        return Object.assign({}, state, { inputNoteList: action.payload.noteList, isEditorMode: true, isModified: true });
    },
    // Thunk dispatched by "NoteList" screen. Fetch put request.
    [actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPutAgentNoteListUpdate" started. Thunk dispatched by "NoteList" screen. Fetch put request.
    [actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { noteListSaveInProgress: true, noteListSaveError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPutAgentNoteListUpdate". Thunk dispatched by "NoteList" screen. Fetch put request.
    [actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentAgent: Object.assign({}, state.currentAgent, action.payload.response), noteListSaveInProgress: false, isEditorMode: false, isModified: false, noteListSaveError: null });
    },
    // Action dispatched on fetch failure in thunk "callPutCustomerNoteListUpdate". Thunk dispatched by "NoteList" screen. Fetch put request.
    [actionsNoteList.CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { noteListSaveInProgress: false, noteListSaveError: action.payload.error });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
    [actionsNoteList.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { noteListSave: action.payload.data, noteListSaveInProgress: false, noteListSaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
    [actionsNoteList.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { noteListSaveInProgress: false, noteListSaveError: action.payload.error });
    },
    // Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
    [actionsNoteList.CALL_GET_AGENT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
    [actionsNoteList.CALL_GET_AGENT_REQUEST]: (state, action) => {
        return Object.assign({}, state, { currentAgentFetching: true, currentAgentError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
    [actionsNoteList.CALL_GET_AGENT_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentAgentFetching: false, currentAgentError: null, currentAgent: action.payload.response.data, noteList: action.payload.response.data.noteList, oldNoteList: action.payload.response.data.noteList });
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "NoteList" container. Fetch current customer modifier Id.
    [actionsNoteList.CALL_GET_AGENT_FAILURE]: (state, action) => {
        return Object.assign({}, state, { currentAgentFetching: false, currentAgentError: action.payload.error });
    }
}, ModelsNoteList.initialState.state);
export default reducerNoteList;
//# sourceMappingURL=ReducerNoteList.js.map