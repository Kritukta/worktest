/**
 * Created by RomanovAM on 22.11.17.
 */
import { defaultValues } from "./Models";
const defaultState = {
    get state() {
        return {
            isEditorMode: false,
            currentNote: defaultValues.Note,
            inputNoteType: defaultValues.Classifier,
            inputText: '',
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsNote.js.map