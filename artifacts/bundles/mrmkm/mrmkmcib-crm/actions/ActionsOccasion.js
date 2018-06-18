/**
 * Actions of Occasion container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_SAVE_EXECUTE = 'OCCASION_CONTAINER_PERFORM_SAVE_EXECUTE';
export const PERFORM_SAVE_SUCCESS = 'OCCASION_CONTAINER_PERFORM_SAVE_SUCCESS';
export const PERFORM_SAVE_FAILURE = 'OCCASION_CONTAINER_PERFORM_SAVE_FAILURE';
export const PERFORM_VALIDATE = 'OCCASION_CONTAINER_PERFORM_VALIDATE';
export const PERFORM_CANCEL = 'OCCASION_CONTAINER_PERFORM_CANCEL';
export const NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN = 'OCCASION_CONTAINER_NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN';
export const PERFORM_INPUT_OCCASION_TYPE = 'OCCASION_CONTAINER_PERFORM_INPUT_OCCASION_TYPE';
export const PERFORM_INPUT_DATE = 'OCCASION_CONTAINER_PERFORM_INPUT_DATE';
export const PERFORM_INPUT_NO_YEAR = 'OCCASION_CONTAINER_PERFORM_INPUT_NO_YEAR';
export const PERFORM_INPUT_COMMENT = 'OCCASION_CONTAINER_PERFORM_INPUT_COMMENT';
export const NAVIGATE_BACK = 'OCCASION_CONTAINER_NAVIGATE_NAVIGATE_BACK';
export const NAVIGATE_TO_OCCASION_SCREEN = 'OCCASION_CONTAINER_NAVIGATE_TO_OCCASION_SCREEN';
export const PERFORM_OPEN_OCCASION_SCREEN = 'OCCASION_CONTAINER_PERFORM_OPEN_OCCASION_SCREEN';
export const PERFORM_CLOSE_OCCASION_SCREEN = 'OCCASION_CONTAINER_PERFORM_CLOSE_OCCASION_SCREEN';
export const PERFORM_INPUT_OCCASION = 'OCCASION_CONTAINER_PERFORM_INPUT_OCCASION';
export const PERFORM_CONTAINER_RESET = 'OCCASION_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_EDIT = 'OCCASION_CONTAINER_PERFORM_EDIT';
export const PERFORM_UPDATE_CURRENT_OCCASION_STATE = 'OCCASION_CONTAINER_PERFORM_UPDATE_CURRENT_OCCASION_STATE';
export const PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW = 'OCCASION_CONTAINER_PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW';
export const performChangeDisplayOccasionErrorModalWindow = (value) => ({
    type: PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW,
    payload: { value }
});
export const performCloseOccasionScreen = () => ({
    type: PERFORM_CLOSE_OCCASION_SCREEN,
    payload: {}
});
export const performOpenOccasionScreen = (occasionMode, occasionContextMode) => ({
    type: PERFORM_OPEN_OCCASION_SCREEN,
    payload: { occasionMode, occasionContextMode }
});
export const performInputOccasion = (occasion) => ({
    type: PERFORM_INPUT_OCCASION,
    payload: { occasion }
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
export const performValidate = (validationErrorList) => ({
    type: PERFORM_VALIDATE,
    payload: { validationErrorList }
});
export const performCancel = () => ({
    type: PERFORM_CANCEL,
    payload: {}
});
export const navigateToOccasionTypePickerScreen = () => ({
    type: NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN,
    payload: {}
});
export const performInputOccasionType = (value) => ({
    type: PERFORM_INPUT_OCCASION_TYPE,
    payload: {
        value: value,
    }
});
export const performInputDate = (value) => ({
    type: PERFORM_INPUT_DATE,
    payload: {
        value: value,
    }
});
export const performInputNoYear = (value) => ({
    type: PERFORM_INPUT_NO_YEAR,
    payload: {
        value: value,
    }
});
export const performInputComment = (value) => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value,
    }
});
export const performEdit = () => ({
    type: PERFORM_EDIT,
    payload: {}
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const navigateToOccasionScreen = (occasion) => ({
    type: NAVIGATE_TO_OCCASION_SCREEN,
    payload: {
        occasion: occasion,
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsOccasion.js.map