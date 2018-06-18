/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsOccasion from '../actions/ActionsOccasion';
import * as ModelsOccasion from "../models/ModelsOccasion";
import { Enums } from "../Enums";
const reducerOccasion = handleActions({
    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_SAVE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { occasionSaveInProgress: true, occasionSaveError: null });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { occasionSave: action.payload.data, occasionSaveInProgress: false, occasionSaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { occasionSaveInProgress: false, occasionSaveError: action.payload.error });
    },
    // Internal thunk used in "Occasion" container. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_VALIDATE]: (state, action) => {
        return Object.assign({}, state, { errorValidationList: action.payload.validationErrorList });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to cancel changes.
    [actionsOccasion.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state, { occasionMode: Enums.OccasionMode.Watch, inputOccasionType: state.currentOccasion.type, inputDate: state.currentOccasion.date, inputNoYear: state.currentOccasion.isAnnual, inputComment: state.currentOccasion.comment });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to show occasion type picker screen.
    [actionsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion type field.
    [actionsOccasion.PERFORM_INPUT_OCCASION_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputOccasionType: action.payload.value });
    },
    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion date field.
    [actionsOccasion.PERFORM_INPUT_DATE]: (state, action) => {
        return Object.assign({}, state, { inputDate: action.payload.value });
    },
    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input NoYear field.
    [actionsOccasion.PERFORM_INPUT_NO_YEAR]: (state, action) => {
        return Object.assign({}, state, { inputNoYear: action.payload.value });
    },
    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input comment field.
    [actionsOccasion.PERFORM_INPUT_COMMENT]: (state, action) => {
        return Object.assign({}, state, { inputComment: action.payload.value });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to close occasion.
    [actionsOccasion.PERFORM_CLOSE_OCCASION_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
    [actionsOccasion.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to set context.
    [actionsOccasion.PERFORM_OPEN_OCCASION_SCREEN]: (state, action) => {
        return Object.assign({}, state, { occasionMode: action.payload.occasionMode, occasionContextMode: action.payload.occasionContextMode });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
    [actionsOccasion.PERFORM_INPUT_OCCASION]: (state, action) => {
        return Object.assign({}, state, { currentOccasion: action.payload.occasion, inputOccasionType: action.payload.occasion.type, inputDate: action.payload.occasion.date, inputNoYear: action.payload.occasion.isAnnual, inputComment: action.payload.occasion.comment });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to show occasion details.
    [actionsOccasion.NAVIGATE_TO_OCCASION_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsOccasion.initialState.state, { currentOccasion: action.payload.occasion });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to change visiable error modal window occasion.
    [actionsOccasion.PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleOccasionErrorModalWindow: action.payload.value });
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to set edit mode occasion.
    [actionsOccasion.PERFORM_EDIT]: (state, action) => {
        return Object.assign({}, state, { occasionMode: Enums.OccasionMode.Edit });
    },
    // Thunk dispatched by "Occasion" screen. Thunk dispatched to reset container state to default values.
    [actionsOccasion.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsOccasion.initialState.state);
    },
}, ModelsOccasion.initialState.state);
export default reducerOccasion;
//# sourceMappingURL=ReducerOccasion.js.map