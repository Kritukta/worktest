/**
 * Models for NoteList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import { Enums } from "../Enums";
import Error from "../models/Error";
export interface INoteListState {
    currentAgent: Models.Agent;
    currentCustomerManaged: Models.CustomerManaged;
    noteList: Models.NoteList;
    inputNoteList: Models.NoteList;
    currentNoteIndex: number | null;
    currentNote: Models.Note;
    isEditorMode: boolean;
    noteListDeletePanel: Models.Note[];
    operationUuid: string;
    isExpandedMode: boolean;
    noteListSaveError: Error | null;
    isModified: boolean;
    noteListSaveInProgress: boolean;
    noteListAccessLevel: Enums.NoteListAccessLevel;
    noteListContextMode: Enums.NoteListContextMode;
    isVisibleNoteListErrorModalWindow: boolean;
}
export declare const initialState: {
    readonly state: INoteListState;
};
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
    (agent: Models.Agent, customerManaged: Models.CustomerManaged): void;
}
export interface PERFORM_NOTE_ADD {
    (): void;
}
export declare type PERFORM_NOTE_DELETE = (note: Models.Note) => void;
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
    (text: string, type: ModelsApp.Classifier | null): void;
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
    (note: Models.Note): void;
}
export declare type PERFORM_CLOSE_NOTE_DELETE_PANEL = (note: Models.Note) => void;
export declare type PERFORM_OPEN_NOTE_DELETE_PANEL = (note: Models.Note) => void;
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
