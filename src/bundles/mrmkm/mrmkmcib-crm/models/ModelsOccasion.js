/**
 * Models for Occasion container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in Occasion actions and thunks.
const defaultState = {
    get state() {
        return {
            currentOccasion: defaultValues.Occasion,
            inputOccasionType: null,
            inputDate: null,
            inputNoYear: false,
            inputComment: '',
            occasionContextMode: Enums.OccasionContextMode.None,
            errorValidationList: [],
            occasionMode: Enums.OccasionMode.None,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsOccasion.js.map