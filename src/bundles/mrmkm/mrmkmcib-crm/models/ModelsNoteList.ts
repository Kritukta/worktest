/**
 * Models for NoteList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums} from "../Enums"
import Error from "../models/Error"
import { StringIterator } from "../../../node_modules/@types/lodash/index";
// TODO Describe models used in NoteList actions and thunks.


const defaultState = {
    get state(): INoteListState {
        return {

            currentAgent: defaultValues.Agent,  // State parameter displayed in "NoteList" screen. CurrentAgent is not equals '' if note list opened for agent, else showing customer note list.
            currentCustomerManaged: defaultValues.CustomerManaged,  // State parameter displayed in "NoteList" screen. 
            noteList: defaultValues.NoteList,  // State parameter displayed in "NoteList" screen. 
            inputNoteList: defaultValues.NoteList,
            currentNoteIndex: null,  // State parameter displayed in "NoteList" screen.
            currentNote: defaultValues.Note,  // State parameter displayed in "NoteList" screen.
            isEditorMode: false,  // State parameter displayed in "NoteList" screen.
            noteListDeletePanel: [],
            isExpandedMode: false,
            noteListSaveError: null,
            isModified: false,
            noteListSaveInProgress: false,
            operationUuid: '',
            noteListAccessLevel: Enums.NoteListAccessLevel.Read,
            noteListContextMode: Enums.NoteListContextMode.None,
            isVisibleNoteListErrorModalWindow: false,
            // TODO Describe NoteList reducer state.


        }
    }
}

export interface INoteListState {
    currentAgent: Models.Agent,  // State parameter displayed in "NoteList" screen. CurrentAgent is not equals '' if note list opened for agent, else showing customer note list.
    currentCustomerManaged: Models.CustomerManaged,  // State parameter displayed in "NoteList" screen. 
    noteList: Models.NoteList,  // State parameter displayed in "NoteList" screen. 
    inputNoteList: Models.NoteList,
    currentNoteIndex: number | null,  // State parameter displayed in "NoteList" screen.
    currentNote: Models.Note,  // State parameter displayed in "NoteList" screen. 
    isEditorMode: boolean,  // State parameter displayed in "NoteList" screen.
    noteListDeletePanel: Models.Note[], // Сет флагов открытия строки для подтверждения удаления
    operationUuid: string,
    isExpandedMode: boolean,
    
    noteListSaveError: Error | null,
    isModified: boolean,
    noteListSaveInProgress: boolean,
    noteListAccessLevel: Enums.NoteListAccessLevel,
    noteListContextMode: Enums.NoteListContextMode,
    isVisibleNoteListErrorModalWindow: boolean,


    // TODO Describe NoteList reducer state.


}

export const initialState = {
    get state(): INoteListState {
        return defaultState.state
    }
}


export interface PERFORM_SAVE {
    (): void;
}

export interface PERFORM_SAVE_NOTE {
    (): void;
}

export interface PERFORM_EDIT {
    (): void;
}

export interface PERFORM_EDIT_NOTE {
    (): void;
}

export interface PERFORM_CANCEL {
    (): void;
}

export interface NAVIGATE_TO_NOTE_LIST_SCREEN {
    (agent: Models.Agent, customerManaged: Models.CustomerManaged,): void;
}

export interface PERFORM_NOTE_ADD {
    (): void;
}

export type PERFORM_NOTE_DELETE =  (note: Models.Note) => void;

export interface NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN {
    (index: number | null): void;
}

export interface NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN {
    (): void;
}

export interface NAVIGATE_BACK {
    (): void;
}

export interface NAVIGATE_BACK_NOTE {
    (): void;
}

export interface PERFORM_NOTE_UPDATE {
    (text: string, type: ModelsApp.Classifier | null,): void;
}

export interface PERFORM_NOTE_TEXT_UPDATE {
    (text: string): void;
}

export interface PERFORM_NOTE_TYPE_UPDATE {
    (type: ModelsApp.Classifier | null): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface NAVIGATE_TO_VIEW_NOTE {
    (note: Models.Note):void;
}

export type PERFORM_CLOSE_NOTE_DELETE_PANEL = (note: Models.Note) => void;

export type PERFORM_OPEN_NOTE_DELETE_PANEL = (note: Models.Note) => void;

export interface RETURN_TO_PREVIOUS_NAVIGATION_AREA {
    (): void;
}

export interface CAP {
    (noteList: Models.NoteList): void;
}

export interface NAVIGATE_TO_NOTE_SCREEN {
    (note: Models.Note): void;
}

export interface NAVIGATE_TO_NOTE_CREATE_SCREEN {
    (): void;
}

export interface PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL {
    (): void;
}

