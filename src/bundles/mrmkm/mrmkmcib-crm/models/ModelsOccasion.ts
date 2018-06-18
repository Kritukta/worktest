/**
 * Models for Occasion container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"

import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"
import {Enums} from '../Enums'

// TODO Describe models used in Occasion actions and thunks.


const defaultState = {
    get state(): IOccasionState {
        return {

            currentOccasion: defaultValues.Occasion,  // State parameter displayed in "Occasion" screen. 

            inputOccasionType: null,  // State parameter displayed in "Occasion" screen.
            inputDate: null,  // State parameter displayed in "Occasion" screen. 
            inputNoYear: false,  // State parameter displayed in "Occasion" screen. 
            inputComment: '',  // State parameter displayed in "Occasion" screen. 
            occasionContextMode: Enums.OccasionContextMode.None,
            errorValidationList: [],
            occasionMode: Enums.OccasionMode.None,
            // TODO Describe Occasion reducer state.


        }
    }
}

export interface IOccasionState {
    errorValidationList: number[],
    currentOccasion: Models.Occasion,  // State parameter displayed in "Occasion" screen. 
    occasionMode: Enums.OccasionMode,
    inputOccasionType: ModelsApp.Classifier | null,  // State parameter displayed in "Occasion" screen.
    inputDate: Date | null,  // State parameter displayed in "Occasion" screen. 
    inputNoYear: boolean,  // State parameter displayed in "Occasion" screen. 
    inputComment: string,  // State parameter displayed in "Occasion" screen. 
    occasionContextMode: Enums.OccasionContextMode,
}

export const initialState = {
    get state(): IOccasionState {
        return defaultState.state
    }
}


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
    (value: boolean): void
}

