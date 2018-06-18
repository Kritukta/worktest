/**
 * Models for NoteList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from "../Enums";
// TODO Describe models used in NoteList actions and thunks.
const defaultState = {
    get state() {
        return {
            currentAgent: defaultValues.Agent,
            currentCustomerManaged: defaultValues.CustomerManaged,
            noteList: defaultValues.NoteList,
            inputNoteList: defaultValues.NoteList,
            currentNoteIndex: null,
            currentNote: defaultValues.Note,
            isEditorMode: false,
            noteListDeletePanel: [],
            isExpandedMode: false,
            noteListSaveError: null,
            isModified: false,
            noteListSaveInProgress: false,
            operationUuid: '',
            noteListAccessLevel: Enums.NoteListAccessLevel.Read,
            noteListContextMode: Enums.NoteListContextMode.None,
            isVisibleNoteListErrorModalWindow: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsNoteList.js.map