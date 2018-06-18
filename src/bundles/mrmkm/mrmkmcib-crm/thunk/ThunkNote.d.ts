/**
 * Created by RomanovAM on 22.11.17.
 */
import * as ModelState from "../models/Models";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
export declare const navigateToNoteScreen: (note: Models.Note) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToNoteCreateScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCancel: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performUpdateCurrentNoteState: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performEdit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateNoteBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performNoteTextUpdate: (text: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCurrentNoteTypePickerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputNoteType: (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
