/**
 * Created by RomanovAM on 22.11.17.
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
export declare const NAVIGATE_TO_NOTE_SCREEN = "CONTAINER_NOTE_NAVIGATE_TO_NOTE_SCREEN";
export declare const PERFORM_CANCEL = "CONTAINER_NOTE_PERFORM_CANCEL";
export declare const PERFORM_SAVE = "CONTAINER_NOTE_PERFORM_SAVE";
export declare const PERFORM_UPDATE_CURRENT_NOTE_STATE = "CONTAINER_NOTE_PERFORM_UPDATE_CURRENT_NOTE_STATE";
export declare const PERFORM_EDIT_VIEW = "CONTAINER_NOTE_PERFORM_EDIT_VIEW";
export declare const NAVIGATE_NOTE_BACK = "CONTAINER_NOTE_NAVIGATE_NOTE_BACK";
export declare const PERFORM_NOTE_TEXT_UPDATE = "CONTAINER_NOTE_PERFORM_NOTE_TEXT_UPDATE";
export declare const NAVIGATE_TO_NOTE_CREATE_SCREEN = "CONTAINER_NOTE_NAVIGATE_TO_NOTE_CREATE_SCREEN";
export declare const NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = "CONTAINER_NOTE_NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN";
export declare const PERFORM_INPUT_NOTE_TYPE = "CONTAINER_NOTE_PERFORM_INPUT_NOTE_TYPE";
export declare type NAVIGATE_TO_NOTE_SCREEN = {
    note: Models.Note;
};
export declare const navigateToNoteScreen: (note: ModelsCrm.Note) => Action<NAVIGATE_TO_NOTE_SCREEN>;
export declare type NAVIGATE_TO_NOTE_CREATE_SCREEN = {};
export declare const navigateToNoteCreateScreen: () => Action<NAVIGATE_TO_NOTE_CREATE_SCREEN>;
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
export declare type PERFORM_SAVE = {};
export declare const performSave: () => Action<PERFORM_SAVE>;
export declare type PERFORM_UPDATE_CURRENT_NOTE_STATE = {
    type: ModelsApp.Classifier;
    text: string;
    id: string;
};
export declare const performUpdateCurrentNoteState: (type: ModelsApp.Classifier, text: string, id: string) => Action<PERFORM_UPDATE_CURRENT_NOTE_STATE>;
export declare type PERFORM_EDIT_VIEW = {
    note: Models.Note;
};
export declare const performEdit: (note: ModelsCrm.Note) => Action<PERFORM_EDIT_VIEW>;
export declare type NAVIGATE_NOTE_BACK = {};
export declare const navigateNoteBack: () => Action<NAVIGATE_NOTE_BACK>;
export declare type PERFORM_NOTE_TEXT_UPDATE = {
    text: string;
};
export declare const performNoteTextUpdate: (text: string) => Action<PERFORM_NOTE_TEXT_UPDATE>;
export declare type NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = {};
export declare const navigateToCurrentNoteTypePickerScreen: () => Action<NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN>;
export declare type PERFORM_INPUT_NOTE_TYPE = {
    noteType: ModelsApp.Classifier;
};
export declare const performInputNoteType: (noteType: ModelsApp.Classifier) => Action<PERFORM_INPUT_NOTE_TYPE>;
