/**
 * Created by RomanovAM on 22.11.17.
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"



const defaultState = {
    get state(): INoteState {
        return {
            isEditorMode: false,
            currentNote: defaultValues.Note,
            inputNoteType: defaultValues.Classifier,
            inputText: '',
        }
    }
}

export interface INoteState {
    isEditorMode: boolean,
    currentNote: Models.Note
    inputNoteType: ModelsApp.Classifier,
    inputText: string,
}

export const initialState = {
    get state(): INoteState {
        return defaultState.state
    }
}

export interface PERFORM_CANCEL {
    (): void;
}

export interface PERFORM_SAVE {
    (): void;
}

export interface PERFORM_EDIT {
    (): void;
}

export interface NAVIGATE_NOTE_BACK {
    (): void;
}

export interface PERFORM_NOTE_TEXT_UPDATE {
    (text: string): void;
}

export interface NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN {
    (): void;
}