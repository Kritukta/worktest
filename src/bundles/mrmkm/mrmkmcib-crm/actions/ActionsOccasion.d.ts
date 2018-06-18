/**
 * Actions of Occasion container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Error from "../models/Error";
export declare const PERFORM_SAVE_EXECUTE = "OCCASION_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const PERFORM_SAVE_SUCCESS = "OCCASION_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "OCCASION_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const PERFORM_VALIDATE = "OCCASION_CONTAINER_PERFORM_VALIDATE";
export declare const PERFORM_CANCEL = "OCCASION_CONTAINER_PERFORM_CANCEL";
export declare const NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN = "OCCASION_CONTAINER_NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN";
export declare const PERFORM_INPUT_OCCASION_TYPE = "OCCASION_CONTAINER_PERFORM_INPUT_OCCASION_TYPE";
export declare const PERFORM_INPUT_DATE = "OCCASION_CONTAINER_PERFORM_INPUT_DATE";
export declare const PERFORM_INPUT_NO_YEAR = "OCCASION_CONTAINER_PERFORM_INPUT_NO_YEAR";
export declare const PERFORM_INPUT_COMMENT = "OCCASION_CONTAINER_PERFORM_INPUT_COMMENT";
export declare const NAVIGATE_BACK = "OCCASION_CONTAINER_NAVIGATE_NAVIGATE_BACK";
export declare const NAVIGATE_TO_OCCASION_SCREEN = "OCCASION_CONTAINER_NAVIGATE_TO_OCCASION_SCREEN";
export declare const PERFORM_OPEN_OCCASION_SCREEN = "OCCASION_CONTAINER_PERFORM_OPEN_OCCASION_SCREEN";
export declare const PERFORM_CLOSE_OCCASION_SCREEN = "OCCASION_CONTAINER_PERFORM_CLOSE_OCCASION_SCREEN";
export declare const PERFORM_INPUT_OCCASION = "OCCASION_CONTAINER_PERFORM_INPUT_OCCASION";
export declare const PERFORM_CONTAINER_RESET = "OCCASION_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_EDIT = "OCCASION_CONTAINER_PERFORM_EDIT";
export declare const PERFORM_UPDATE_CURRENT_OCCASION_STATE = "OCCASION_CONTAINER_PERFORM_UPDATE_CURRENT_OCCASION_STATE";
export declare const PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW = "OCCASION_CONTAINER_PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW";
export declare type PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW = {
    value: boolean;
};
export declare const performChangeDisplayOccasionErrorModalWindow: (value: boolean) => Action<PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW>;
export declare type PERFORM_CLOSE_OCCASION_SCREEN = {};
export declare const performCloseOccasionScreen: () => Action<PERFORM_CLOSE_OCCASION_SCREEN>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
 *
 * @param {Enums.OccasionMode}
 * @param {Enums.OccasionContextMode}
 */
export declare type PERFORM_OPEN_OCCASION_SCREEN = {
    occasionMode: Enums.OccasionMode;
    occasionContextMode: Enums.OccasionContextMode;
};
export declare const performOpenOccasionScreen: (occasionMode: Enums.OccasionMode, occasionContextMode: Enums.OccasionContextMode) => Action<PERFORM_OPEN_OCCASION_SCREEN>;
export declare type PERFORM_INPUT_OCCASION = {
    occasion: Models.Occasion;
};
export declare const performInputOccasion: (occasion: ModelsCrm.Occasion) => Action<PERFORM_INPUT_OCCASION>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
};
export declare const performSaveSuccess: (data: boolean) => Action<PERFORM_SAVE_SUCCESS>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
/**
 * Internal thunk used in "Occasion" container. Thunk used to confirm changes in Occasion.
 *
 * @param {number[]}
 */
export declare type PERFORM_VALIDATE = {
    validationErrorList: number[];
};
export declare const performValidate: (validationErrorList: number[]) => Action<PERFORM_VALIDATE>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk used to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk used to show occasion type picker screen.
 *
 */
export declare type NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN = {};
export declare const navigateToOccasionTypePickerScreen: () => Action<NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion type field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_OCCASION_TYPE = {
    value: ModelsApp.Classifier;
};
export declare const performInputOccasionType: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_OCCASION_TYPE>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion date field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_DATE = {
    value: Date | null;
};
export declare const performInputDate: (value: Date | null) => Action<PERFORM_INPUT_DATE>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input NoYear field.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_NO_YEAR = {
    value: boolean;
};
export declare const performInputNoYear: (value: boolean) => Action<PERFORM_INPUT_NO_YEAR>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input comment field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_COMMENT = {
    value: string;
};
export declare const performInputComment: (value: string) => Action<PERFORM_INPUT_COMMENT>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk used to set occasion edit mode.
 *
 */
export declare type PERFORM_EDIT = {};
export declare const performEdit: () => Action<PERFORM_EDIT>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk used to show occasion details.
 *
 * @param {Models.Occasion} occasion .
 */
export declare type NAVIGATE_TO_OCCASION_SCREEN = {
    occasion: Models.Occasion;
};
export declare const navigateToOccasionScreen: (occasion: ModelsCrm.Occasion) => Action<NAVIGATE_TO_OCCASION_SCREEN>;
/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
