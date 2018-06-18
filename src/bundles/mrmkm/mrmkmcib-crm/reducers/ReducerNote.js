/**
 * Created by RomanovAM on 22.11.17.
 */
import { handleActions } from 'redux-actions';
import * as actionsNote from '../actions/ActionsNote';
import * as ModelsNote from "../models/ModelsNote";
import { defaultValues } from "../models/Models";
const reducerNoteList = handleActions({
    [actionsNote.NAVIGATE_TO_NOTE_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsNote.initialState.state, { currentNote: action.payload.note });
    },
    [actionsNote.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsNote.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: false });
    },
    [actionsNote.PERFORM_UPDATE_CURRENT_NOTE_STATE]: (state, action) => {
        return Object.assign({}, state, { currentNote: Object.assign({}, state.currentNote, { type: action.payload.type, text: action.payload.text, id: action.payload.id, isChanged: true }) });
    },
    [actionsNote.PERFORM_EDIT_VIEW]: (state, action) => {
        return Object.assign({}, state, { inputNoteType: action.payload.note.type || {
                parentId: null,
                name: '',
                value: '',
                code: ''
            }, inputText: action.payload.note.text, isEditorMode: true });
    },
    [actionsNote.NAVIGATE_NOTE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsNote.PERFORM_NOTE_TEXT_UPDATE]: (state, action) => {
        return Object.assign({}, state, { currentNote: Object.assign({}, state.currentNote, { text: action.payload.text }), inputText: action.payload.text });
    },
    [actionsNote.PERFORM_INPUT_NOTE_TYPE]: (state, action) => {
        return Object.assign({}, state, { currentNote: Object.assign({}, state.currentNote, { type: action.payload.noteType }), inputNoteType: action.payload.noteType });
    },
    [actionsNote.NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsNote.NAVIGATE_TO_NOTE_CREATE_SCREEN]: (state, action) => {
        return Object.assign({}, state, { currentNote: defaultValues.Note, inputOccasionType: {
                parentId: null,
                name: '',
                value: '',
                code: ''
            }, inputText: '', isEditorMode: true });
    },
}, ModelsNote.initialState.state);
export default reducerNoteList;
//# sourceMappingURL=ReducerNote.js.map