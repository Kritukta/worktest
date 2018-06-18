/**
 * Actions of NoteList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_SAVE = "NOTE_LIST_CONTAINER_PERFORM_SAVE";
export declare const PERFORM_EDIT = "NOTE_LIST_CONTAINER_PERFORM_EDIT";
export declare const PERFORM_CANCEL = "NOTE_LIST_CONTAINER_PERFORM_CANCEL";
export declare const NAVIGATE_TO_NOTE_LIST_SCREEN = "NOTE_LIST_CONTAINER_NAVIGATE_TO_NOTE_LIST_SCREEN";
export declare const PERFORM_NOTE_ADD = "NOTE_LIST_CONTAINER_PERFORM_NOTE_ADD";
export declare const PERFORM_NOTE_DELETE = "NOTE_LIST_CONTAINER_PERFORM_NOTE_DELETE";
export declare const NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN = "NOTE_LIST_CONTAINER_NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN";
export declare const NAVIGATE_BACK = "NOTE_LIST_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL = "NOTE_LIST_CONTAINER_PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL";
export declare const PERFORM_NOTE_UPDATE = "NOTE_LIST_CONTAINER_PERFORM_NOTE_UPDATE";
export declare const PERFORM_CONTAINER_RESET = "NOTE_LIST_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const NAVIGATE_TO_VIEW_NOTE = "NOTE_LIST_CONTAINER_NAVIGATE_TO_VIEW_NOTE";
export declare const PERFORM_EDIT_NOTE = "NOTE_LIST_CONTAINER_PERFORM_EDIT_NOTE";
export declare const PERFORM_NOTE_TEXT_UPDATE = "NOTE_LIST_CONTAINER_PERFORM_NOTE_TEXT_UPDATE";
export declare const NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = "NOTE_LIST_CONTAINER_NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN";
export declare const PERFORM_NOTE_TYPE_UPDATE = "NOTE_LIST_CONTAINER_PERFORM_NOTE_TYPE_UPDATE";
export declare const NAVIGATE_BACK_NOTE = "NOTE_LIST_CONTAINER_NAVIGATE_BACK_NOTE";
export declare const PERFORM_SAVE_NOTE = "NOTE_LIST_CONTAINER_PERFORM_SAVE_NOTE";
export declare const PERFORM_CLOSE_NOTE_DELETE_PANEL = "NOTE_LIST_CONTAINER_PERFORM_CLOSE_NOTE_DELETE_PANEL";
export declare const RETURN_TO_PREVIOUS_NAVIGATION_AREA = "NOTE_LIST_CONTAINER_RETURN_TO_PREVIOUS_NAVIGATION_AREA";
export declare const CLEAR_STATE = "NOTE_LIST_CONTAINER_CLEAR_STATE";
export declare const NOTE_CAP = "NOTE_CAP";
export declare const PERFORM_REFRESH_NOTE_LIST_STATE = "NOTE_LIST_CONTAINER_PERFORM_REFRESH_NOTE_LIST_STATE";
export declare const CALL_PUT_AGENT_NOTE_LIST_UPDATE = "NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE";
export declare const CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST = "NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST";
export declare const CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS = "NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS";
export declare const CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE = "NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE";
export declare const PERFORM_SAVE_SUCCESS = "NOTE_LIST_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "NOTE_LIST_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const CALL_GET_AGENT = "NOTE_LIST_CONTAINER_CALL_GET_AGENT";
export declare const CALL_GET_AGENT_REQUEST = "NOTE_LIST_CONTAINER_CALL_GET_AGENT_REQUEST";
export declare const CALL_GET_AGENT_SUCCESS = "NOTE_LIST_CONTAINER_CALL_GET_AGENT_SUCCESS";
export declare const CALL_GET_AGENT_FAILURE = "NOTE_LIST_CONTAINER_CALL_GET_AGENT_FAILURE";
export declare const PERFORM_OPEN_NOTE_DELETE_PANEL = "NOTE_LIST_CONTAINER_PERFORM_OPEN_NOTE_DELETE_PANEL";
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 *
 */
export declare type PERFORM_SAVE_NOTE = {
    noteList: Models.NoteList;
};
export declare const performSaveNote: (noteList: ModelsCrm.NoteList) => Action<PERFORM_SAVE_NOTE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
 *
 * @param {boolean}
 */
export declare type PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL = {
    status: boolean;
};
export declare const performChangeVisibleNoteListErrorModal: (status: boolean) => Action<PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
 *
 */
export declare type PERFORM_EDIT_NOTE = {};
export declare const performEditNote: () => Action<PERFORM_EDIT_NOTE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to open delete panel of note.
 *
 * @param {Models.Note}
 */
export declare type PERFORM_OPEN_NOTE_DELETE_PANEL = {
    note: Models.Note;
};
export declare const performOpenNoteDeletePanel: (note: ModelsCrm.Note) => Action<PERFORM_OPEN_NOTE_DELETE_PANEL>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to show notes view.
 *
 * @param {Models.Note} agent .
 */
export declare type NAVIGATE_TO_VIEW_NOTE = {
    note: Models.Note;
};
export declare const navigateToViewNotes: (note: ModelsCrm.Note) => Action<NAVIGATE_TO_VIEW_NOTE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to add new note.
 *
 */
export declare type PERFORM_NOTE_ADD = {};
export declare const performNoteAdd: () => Action<PERFORM_NOTE_ADD>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
 *
 * @param {number | null} index .
 */
export declare type NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN = {
    index: number | null;
};
export declare const navigateToNoteTypePickerScreen: (index: number | null) => Action<NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
 *
 * @param {number | null} index .
 */
export declare type NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = {};
export declare const navigateToCurrentNoteTypePickerScreen: () => Action<NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN>;
export declare type NAVIGATE_BACK_NOTE = {};
export declare const navigateBackNote: () => Action<NAVIGATE_BACK_NOTE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to update note.
 *
 * @param {string} text .
 * @param {ModelsApp.Classifier | null} type .
 */
export declare type PERFORM_NOTE_UPDATE = {
    text: string;
    type: ModelsApp.Classifier | null;
};
export declare const performNoteUpdate: (text: string, type: ModelsApp.Classifier | null) => Action<PERFORM_NOTE_UPDATE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to update note text.
 *
 * @param {string} text .
 */
export declare type PERFORM_NOTE_TEXT_UPDATE = {
    text: string;
};
export declare const performNoteTextUpdate: (text: string) => Action<PERFORM_NOTE_TEXT_UPDATE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to update note type.
 *
 * @param {ModelsApp.Classifier | null} type .
 */
export declare type PERFORM_NOTE_TYPE_UPDATE = {
    type: ModelsApp.Classifier | null;
};
export declare const performNoteTypeUpdate: (type: ModelsApp.Classifier | null) => Action<PERFORM_NOTE_TYPE_UPDATE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to enter editor mode.
 *
 */
export declare type PERFORM_EDIT = {
    noteList: Models.NoteList;
};
export declare const performEdit: (noteList: ModelsCrm.NoteList) => Action<PERFORM_EDIT>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 *
 */
export declare type PERFORM_SAVE = {};
export declare const performSave: () => Action<PERFORM_SAVE>;
export declare type RETURN_TO_PREVIOUS_NAVIGATION_AREA = {};
export declare const returnToPreviousNavigationArea: () => Action<RETURN_TO_PREVIOUS_NAVIGATION_AREA>;
export declare type CLEAR_STATE = {};
export declare const clearState: () => Action<CLEAR_STATE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to del note.
 *
 * @param {Models.Note}
 */
export declare type PERFORM_CLOSE_NOTE_DELETE_PANEL = {
    note: Models.Note;
};
export declare const performCloseNoteDeletePanel: (note: ModelsCrm.Note) => Action<PERFORM_CLOSE_NOTE_DELETE_PANEL>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to delete note.
 *
 * @param {Models.Note} index .
 */
export declare type PERFORM_NOTE_DELETE = {
    note: Models.Note;
};
export declare const performNoteDelete: (note: ModelsCrm.Note) => Action<PERFORM_NOTE_DELETE>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to show member list.
 *
 * @param {Models.NoteList}
 * @param {Models.Agent} agent .
 * @param {Models.CustomerManaged} customerManaged .
 * @param {Enums.NoteListContextMode}
 * @param {Enums.NoteListAccessLevel}
 */
export declare type NAVIGATE_TO_NOTE_LIST_SCREEN = {
    noteList: Models.NoteList;
    agent: Models.Agent;
    customerManaged: Models.CustomerManaged;
    noteListContextMode: Enums.NoteListContextMode;
    noteListAccessLevel: Enums.NoteListAccessLevel;
};
export declare const navigateToNoteListScreen: (noteList: ModelsCrm.NoteList, agent: ModelsCrm.Agent, customerManaged: ModelsCrm.CustomerManaged, noteListContextMode: Enums.NoteListContextMode, noteListAccessLevel: Enums.NoteListAccessLevel) => Action<NAVIGATE_TO_NOTE_LIST_SCREEN>;
export declare type NOTE_CAP = {
    noteList: Models.NoteList;
};
export declare const CAP: (noteList: ModelsCrm.NoteList) => Action<NOTE_CAP>;
/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
export declare type PERFORM_REFRESH_NOTE_LIST_STATE = {
    noteList: Models.NoteList;
};
export declare const performRefreshNoteListState: (noteList: ModelsCrm.NoteList) => Action<PERFORM_REFRESH_NOTE_LIST_STATE>;
/**
 * Thunk dispatched by "NoteList" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_AGENT_NOTE_LIST_UPDATE = {};
export declare const callPutAgentNoteListUpdate: () => Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE>;
/**
 * Action dispatched on network thunk chain "callPutAgentNoteListUpdate" started. Thunk dispatched by "NoteList" screen. Fetch put request.
 */
export declare type CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST = {};
export declare const callPutAgentNoteListUpdateRequest: () => Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST>;
export declare type CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS = {
    response: Response<Models.ResponsePostPutRequest>;
};
export declare const callPutAgentNoteListUpdateSuccess: (response: Response<ModelsCrm.ResponsePostPutRequest>) => Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS>;
export declare type CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutAgentNoteListUpdateFailure: (error: Error) => Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
};
export declare const performSaveSuccess: (data: boolean) => Action<PERFORM_SAVE_SUCCESS>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
export declare type CALL_GET_AGENT = {};
export declare const callGetAgent: () => Action<CALL_GET_AGENT>;
export declare type CALL_GET_AGENT_REQUEST = {};
export declare const callGetAgentRequest: () => Action<CALL_GET_AGENT_REQUEST>;
export declare type CALL_GET_AGENT_SUCCESS = {
    response: Response<Models.Agent>;
};
export declare const callGetAgentSuccess: (response: Response<ModelsCrm.Agent>) => Action<CALL_GET_AGENT_SUCCESS>;
export declare type CALL_GET_AGENT_FAILURE = {
    error: Error;
};
export declare const callGetAgentFailure: (error: Error) => Action<CALL_GET_AGENT_FAILURE>;
