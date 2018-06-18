/**
 * Models for OccasionList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from "../Enums";
// TODO Describe models used in OccasionList actions and thunks.
const defaultState = {
    get state() {
        return {
            occasionListMode: Enums.OccasionListMode.Watch,
            occasionListContextMode: Enums.OccasionListContextMode.None,
            occasionListAccessLevel: Enums.OccasionListAccessLevel.Read,
            hasChangedOccasionList: false,
            occasionListWithMenuOption: [],
            isVisibleOccasionListErrorModalWindow: false,
            occasionList: defaultValues.OccasionList,
            inputOccasionList: defaultValues.OccasionList,
            occasionListUpdateInProgress: false,
            occasionListUpdateError: null,
            currentAgent: null,
            currentCustomer: null,
            operationUuid: '',
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsOccasionList.js.map