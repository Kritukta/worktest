import * as ModelState from "../models/Models";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Error from "../models/Error";
export declare const performChangeVisibleNoteListErrorModal: (status: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performEdit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performOpenNoteDeletePanel: (note: Models.Note) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCancel: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPutAgentNoteListUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const returnToPreviousNavigationArea: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const clearState: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCloseNoteDeletePanel: (note: Models.Note) => (dispatch: Function) => void;
export declare const performNoteDelete: (note: Models.Note) => (dispatch: Function) => void;
export declare const navigateToNoteListScreen: (noteList: Models.NoteList, agent: Models.Agent, customerManaged: Models.CustomerManaged, noteListContextMode: Enums.NoteListContextMode, noteListAccessLevel: Enums.NoteListAccessLevel) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const CAP: (noteList: Models.NoteList) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshNoteListState: (noteList: Models.NoteList) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
