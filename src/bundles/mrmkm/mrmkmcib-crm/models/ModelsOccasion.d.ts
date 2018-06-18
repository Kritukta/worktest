/**
 * Models for Occasion container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
export interface IOccasionState {
    errorValidationList: number[];
    currentOccasion: Models.Occasion;
    occasionMode: Enums.OccasionMode;
    inputOccasionType: ModelsApp.Classifier | null;
    inputDate: Date | null;
    inputNoYear: boolean;
    inputComment: string;
    occasionContextMode: Enums.OccasionContextMode;
}
export declare const initialState: {
    readonly state: IOccasionState;
};
export interface PERFORM_SAVE {
    (): void;
}
export interface PERFORM_VALIDATE {
    (): void;
}
export interface PERFORM_CANCEL {
    (): void;
}
export interface NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_INPUT_OCCASION_TYPE {
    (value: ModelsApp.Classifier): void;
}
export interface PERFORM_INPUT_DATE {
    (value: Date | null): void;
}
export interface PERFORM_INPUT_NO_YEAR {
    (value: boolean): void;
}
export interface PERFORM_INPUT_COMMENT {
    (value: string): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface NAVIGATE_TO_OCCASION_CREATE_SCREEN {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW {
    (value: boolean): void;
}
