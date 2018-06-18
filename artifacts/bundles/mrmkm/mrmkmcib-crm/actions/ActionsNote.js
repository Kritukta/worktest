/**
 * Created by RomanovAM on 22.11.17.
 */
export const NAVIGATE_TO_NOTE_SCREEN = 'CONTAINER_NOTE_NAVIGATE_TO_NOTE_SCREEN';
export const PERFORM_CANCEL = 'CONTAINER_NOTE_PERFORM_CANCEL';
export const PERFORM_SAVE = 'CONTAINER_NOTE_PERFORM_SAVE';
export const PERFORM_UPDATE_CURRENT_NOTE_STATE = 'CONTAINER_NOTE_PERFORM_UPDATE_CURRENT_NOTE_STATE';
export const PERFORM_EDIT_VIEW = 'CONTAINER_NOTE_PERFORM_EDIT_VIEW';
export const NAVIGATE_NOTE_BACK = 'CONTAINER_NOTE_NAVIGATE_NOTE_BACK';
export const PERFORM_NOTE_TEXT_UPDATE = 'CONTAINER_NOTE_PERFORM_NOTE_TEXT_UPDATE';
export const NAVIGATE_TO_NOTE_CREATE_SCREEN = 'CONTAINER_NOTE_NAVIGATE_TO_NOTE_CREATE_SCREEN';
export const NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = 'CONTAINER_NOTE_NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN';
export const PERFORM_INPUT_NOTE_TYPE = 'CONTAINER_NOTE_PERFORM_INPUT_NOTE_TYPE';
export const navigateToNoteScreen = (note) => ({
    type: NAVIGATE_TO_NOTE_SCREEN,
    payload: {
        note: note,
    }
});
export const navigateToNoteCreateScreen = () => ({
    type: NAVIGATE_TO_NOTE_CREATE_SCREEN,
    payload: {}
});
export const performCancel = () => ({
    type: PERFORM_CANCEL,
    payload: {}
});
export const performSave = () => ({
    type: PERFORM_SAVE,
    payload: {}
});
export const performUpdateCurrentNoteState = (type, text, id) => ({
    type: PERFORM_UPDATE_CURRENT_NOTE_STATE,
    payload: {
        type: type,
        text: text,
        id: id,
    }
});
export const performEdit = (note) => ({
    type: PERFORM_EDIT_VIEW,
    payload: {
        note: note
    }
});
export const navigateNoteBack = () => ({
    type: NAVIGATE_NOTE_BACK,
    payload: {}
});
export const performNoteTextUpdate = (text) => ({
    type: PERFORM_NOTE_TEXT_UPDATE,
    payload: {
        text: text
    }
});
export const navigateToCurrentNoteTypePickerScreen = () => ({
    type: NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    payload: {}
});
export const performInputNoteType = (noteType) => ({
    type: PERFORM_INPUT_NOTE_TYPE,
    payload: {
        noteType: noteType,
    }
});
//# sourceMappingURL=ActionsNote.js.map