/**
 * Actions of NoteList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"


export const PERFORM_SAVE = 'NOTE_LIST_CONTAINER_PERFORM_SAVE'

export const PERFORM_EDIT = 'NOTE_LIST_CONTAINER_PERFORM_EDIT'

export const PERFORM_CANCEL = 'NOTE_LIST_CONTAINER_PERFORM_CANCEL'

export const NAVIGATE_TO_NOTE_LIST_SCREEN = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_NOTE_LIST_SCREEN'

export const PERFORM_NOTE_ADD = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_ADD'

export const PERFORM_NOTE_DELETE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_DELETE'

export const NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN'

export const NAVIGATE_BACK = 'NOTE_LIST_CONTAINER_NAVIGATE_BACK'

export const PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL = 'NOTE_LIST_CONTAINER_PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL'

export const PERFORM_NOTE_UPDATE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_UPDATE'

export const PERFORM_CONTAINER_RESET = 'NOTE_LIST_CONTAINER_PERFORM_CONTAINER_RESET'

export const NAVIGATE_TO_VIEW_NOTE = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_VIEW_NOTE'

export const PERFORM_EDIT_NOTE = 'NOTE_LIST_CONTAINER_PERFORM_EDIT_NOTE'

export  const PERFORM_NOTE_TEXT_UPDATE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_TEXT_UPDATE'

export  const NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = 'NOTE_LIST_CONTAINER_NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN'

export  const PERFORM_NOTE_TYPE_UPDATE = 'NOTE_LIST_CONTAINER_PERFORM_NOTE_TYPE_UPDATE'

export  const NAVIGATE_BACK_NOTE = 'NOTE_LIST_CONTAINER_NAVIGATE_BACK_NOTE'

export  const PERFORM_SAVE_NOTE = 'NOTE_LIST_CONTAINER_PERFORM_SAVE_NOTE'

export const PERFORM_CLOSE_NOTE_DELETE_PANEL = 'NOTE_LIST_CONTAINER_PERFORM_CLOSE_NOTE_DELETE_PANEL'

export const RETURN_TO_PREVIOUS_NAVIGATION_AREA = 'NOTE_LIST_CONTAINER_RETURN_TO_PREVIOUS_NAVIGATION_AREA'

export const CLEAR_STATE = 'NOTE_LIST_CONTAINER_CLEAR_STATE'

export const NOTE_CAP = 'NOTE_CAP'

export const PERFORM_REFRESH_NOTE_LIST_STATE = 'NOTE_LIST_CONTAINER_PERFORM_REFRESH_NOTE_LIST_STATE'

export const CALL_PUT_AGENT_NOTE_LIST_UPDATE = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE'

export const CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST'

export const CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS'

export const CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE = 'NOTE_LIST_CONTAINER_CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE'

export const PERFORM_SAVE_SUCCESS = 'NOTE_LIST_CONTAINER_PERFORM_SAVE_SUCCESS'

export const PERFORM_SAVE_FAILURE = 'NOTE_LIST_CONTAINER_PERFORM_SAVE_FAILURE'

export const CALL_GET_AGENT = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT'

export const CALL_GET_AGENT_REQUEST = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT_REQUEST'

export const CALL_GET_AGENT_SUCCESS = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT_SUCCESS'

export const CALL_GET_AGENT_FAILURE = 'NOTE_LIST_CONTAINER_CALL_GET_AGENT_FAILURE'

export const PERFORM_OPEN_NOTE_DELETE_PANEL = 'NOTE_LIST_CONTAINER_PERFORM_OPEN_NOTE_DELETE_PANEL'


/**
 * Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 *
 */
export type PERFORM_SAVE_NOTE = {noteList:Models.NoteList}
export const performSaveNote = (noteList:Models.NoteList): Action<PERFORM_SAVE_NOTE> => ({
    type: PERFORM_SAVE_NOTE,
    payload: {
        noteList:noteList
    }
})




/**
 * Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
 *
 * @param {boolean}
 */
export type PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL = {status: boolean}
export const performChangeVisibleNoteListErrorModal = (status: boolean): Action<PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL> => ({
    type: PERFORM_CHANGE_VISIBLE_NOTE_LIST_ERROR_MODAL,
    payload: {
        status
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk used to enter note editor mode.
 *
 */
export type PERFORM_EDIT_NOTE = {}
export const performEditNote = (): Action<PERFORM_EDIT_NOTE> => ({
    type: PERFORM_EDIT_NOTE,
    payload: {
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk used to open delete panel of note.
 *
 * @param {Models.Note}
 */
export type PERFORM_OPEN_NOTE_DELETE_PANEL = {note: Models.Note}
export const performOpenNoteDeletePanel = (note: Models.Note): Action<PERFORM_OPEN_NOTE_DELETE_PANEL> => ({
    type: PERFORM_OPEN_NOTE_DELETE_PANEL,
    payload: {
        note
    }
})



/**
 * Thunk dispatched by "NoteList" screen. Thunk used to show notes view.
 *
 * @param {Models.Note} agent .
 */
export type NAVIGATE_TO_VIEW_NOTE = {note:Models.Note  }
export const navigateToViewNotes = (note:Models.Note ): Action<NAVIGATE_TO_VIEW_NOTE> => ({
    type: NAVIGATE_TO_VIEW_NOTE,
    payload: {
        note,
    }
})


/**
 * Thunk dispatched by "NoteList" screen. Thunk used to add new note.
 *
 */
export type PERFORM_NOTE_ADD = {}
export const performNoteAdd = (): Action<PERFORM_NOTE_ADD> => ({
    type: PERFORM_NOTE_ADD,
    payload: {}
})



/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
 *
 * @param {number | null} index .
 */
export type NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN = { index: number | null }
export const navigateToNoteTypePickerScreen = (index: number | null): Action<NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_NOTE_TYPE_PICKER_SCREEN,
    payload: {
        index: index,
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap Note type field.
 *
 * @param {number | null} index .
 */
export type NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = {}
export const navigateToCurrentNoteTypePickerScreen = (): Action<NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    payload: {
    }
})



export type NAVIGATE_BACK_NOTE = {}
export const navigateBackNote = (): Action<NAVIGATE_BACK_NOTE> => ({
    type: NAVIGATE_BACK_NOTE,
    payload: {
    }
})
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to update note.
 *
 * @param {string} text .
 * @param {ModelsApp.Classifier | null} type .
 */
export type PERFORM_NOTE_UPDATE = { text: string, type: ModelsApp.Classifier | null, }
export const performNoteUpdate = (text: string, type: ModelsApp.Classifier | null,): Action<PERFORM_NOTE_UPDATE> => ({
    type: PERFORM_NOTE_UPDATE,
    payload: {
        text: text,
        type: type,
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk used to update note text.
 *
 * @param {string} text .
 */
export type PERFORM_NOTE_TEXT_UPDATE = {text: string }
export const performNoteTextUpdate = (text: string ): Action<PERFORM_NOTE_TEXT_UPDATE> => ({
    type: PERFORM_NOTE_TEXT_UPDATE,
    payload: {
        text: text
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk used to update note type.
 *
 * @param {ModelsApp.Classifier | null} type .
 */
export type PERFORM_NOTE_TYPE_UPDATE = {type: ModelsApp.Classifier | null }
export const performNoteTypeUpdate = (type: ModelsApp.Classifier | null, ): Action<PERFORM_NOTE_TYPE_UPDATE> => ({
    type: PERFORM_NOTE_TYPE_UPDATE,
    payload: {
        type: type
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

//****************************************
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to enter editor mode.
 *
 */
export type PERFORM_EDIT = {noteList:Models.NoteList}
export const performEdit = (noteList:Models.NoteList): Action<PERFORM_EDIT> => ({
    type: PERFORM_EDIT,
    payload: {
        noteList:noteList
    }
})
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {
    }
})
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 *
 */
export type PERFORM_SAVE = {}
export const performSave = (): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {}
})

export type RETURN_TO_PREVIOUS_NAVIGATION_AREA = {}
export const returnToPreviousNavigationArea = (): Action<RETURN_TO_PREVIOUS_NAVIGATION_AREA> => ({
    type: RETURN_TO_PREVIOUS_NAVIGATION_AREA,
    payload: {}
})

export type CLEAR_STATE = {}
export const clearState = (): Action<CLEAR_STATE> => ({
    type: CLEAR_STATE,
    payload: {}
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk used to del note.
 *
 * @param {Models.Note}
 */
export type PERFORM_CLOSE_NOTE_DELETE_PANEL = {note: Models.Note}
export const performCloseNoteDeletePanel = (note: Models.Note): Action<PERFORM_CLOSE_NOTE_DELETE_PANEL> => ({
    type: PERFORM_CLOSE_NOTE_DELETE_PANEL,
    payload: {note}
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk used to delete note.
 *
 * @param {Models.Note} index .
 */
export type PERFORM_NOTE_DELETE = {note:Models.Note }
export const performNoteDelete = (note:Models.Note): Action<PERFORM_NOTE_DELETE> => ({
    type: PERFORM_NOTE_DELETE,
    payload: {
        note,
    }
})
/**
 * Thunk dispatched by "NoteList" screen. Thunk used to show member list.
 *
 * @param {Models.NoteList}
 * @param {Models.Agent} agent .
 * @param {Models.CustomerManaged} customerManaged .
 * @param {Enums.NoteListContextMode}
 * @param {Enums.NoteListAccessLevel}
 */
export type NAVIGATE_TO_NOTE_LIST_SCREEN = { noteList: Models.NoteList, agent: Models.Agent,
    customerManaged: Models.CustomerManaged,
    noteListContextMode: Enums.NoteListContextMode,
    noteListAccessLevel: Enums.NoteListAccessLevel}
export const navigateToNoteListScreen = (noteList: Models.NoteList,
                                         agent: Models.Agent,
                                         customerManaged: Models.CustomerManaged,
                                         noteListContextMode: Enums.NoteListContextMode,
                                         noteListAccessLevel: Enums.NoteListAccessLevel): Action<NAVIGATE_TO_NOTE_LIST_SCREEN> => ({
    type: NAVIGATE_TO_NOTE_LIST_SCREEN,
    payload: {
        agent,
        noteListAccessLevel,
        noteListContextMode,
        customerManaged,
        noteList
    }
})

export type NOTE_CAP = { noteList: Models.NoteList}
export const CAP = (noteList: Models.NoteList): Action<NOTE_CAP> => ({
    type: NOTE_CAP,
    payload: {
        noteList: noteList,
    }
})

/**
 * Thunk dispatched by "NoteList" screen. Thunk dispatched on user tap back.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

export type PERFORM_REFRESH_NOTE_LIST_STATE = {noteList: Models.NoteList}
export const performRefreshNoteListState = (noteList: Models.NoteList): Action<PERFORM_REFRESH_NOTE_LIST_STATE> => ({
    type: PERFORM_REFRESH_NOTE_LIST_STATE,
    payload: {
        noteList: noteList,
    }
})


/**
 * Thunk dispatched by "NoteList" screen. Fetch put request.
 *
 */
export type CALL_PUT_AGENT_NOTE_LIST_UPDATE = {}
export const callPutAgentNoteListUpdate = (): Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE> => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPutAgentNoteListUpdate" started. Thunk dispatched by "NoteList" screen. Fetch put request.
 */
export type CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST = {}
export const callPutAgentNoteListUpdateRequest = (): Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST> => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPutAgentNoteListUpdate". Thunk dispatched by "NoteList" screen. Fetch put request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS = { response: Response<Models.ResponsePostPutRequest>}
export const callPutAgentNoteListUpdateSuccess = (response: Response<Models.ResponsePostPutRequest>): Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS> => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPutAgentNoteListUpdate". Thunk dispatched by "NoteList" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE = { error: Error }
export const callPutAgentNoteListUpdateFailure = (error: Error): Action<CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE> => ({
    type: CALL_PUT_AGENT_NOTE_LIST_UPDATE_FAILURE,
    payload: {
        error: error
    }
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_SAVE_SUCCESS = { data: boolean }
export const performSaveSuccess = (data: boolean): Action<PERFORM_SAVE_SUCCESS> => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "NoteList" screen. Thunk used to confirm changes in note list.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_SAVE_FAILURE = { error: Error }
export const performSaveFailure = (error: Error): Action<PERFORM_SAVE_FAILURE> => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
})

export type CALL_GET_AGENT = {}
export const callGetAgent = (): Action<CALL_GET_AGENT> => ({
    type: CALL_GET_AGENT,
    payload: {}
})


export type CALL_GET_AGENT_REQUEST = {}
export const callGetAgentRequest = (): Action<CALL_GET_AGENT_REQUEST> => ({
    type: CALL_GET_AGENT_REQUEST,
    payload: {}
})


export type CALL_GET_AGENT_SUCCESS = { response: Response<Models.Agent> }
export const callGetAgentSuccess = (response: Response<Models.Agent>): Action<CALL_GET_AGENT_SUCCESS> => ({
    type: CALL_GET_AGENT_SUCCESS,
    payload: {
        response: response
    }
})


export type CALL_GET_AGENT_FAILURE = { error: Error }
export const callGetAgentFailure = (error: Error): Action<CALL_GET_AGENT_FAILURE> => ({
    type: CALL_GET_AGENT_FAILURE,
    payload: {
        error: error
    }
})

