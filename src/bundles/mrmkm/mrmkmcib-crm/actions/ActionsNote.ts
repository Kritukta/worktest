/**
 * Created by RomanovAM on 22.11.17.
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

export const NAVIGATE_TO_NOTE_SCREEN = 'CONTAINER_NOTE_NAVIGATE_TO_NOTE_SCREEN'
export const PERFORM_CANCEL = 'CONTAINER_NOTE_PERFORM_CANCEL'
export const PERFORM_SAVE = 'CONTAINER_NOTE_PERFORM_SAVE'
export const PERFORM_UPDATE_CURRENT_NOTE_STATE = 'CONTAINER_NOTE_PERFORM_UPDATE_CURRENT_NOTE_STATE'
export const PERFORM_EDIT_VIEW = 'CONTAINER_NOTE_PERFORM_EDIT_VIEW'
export const NAVIGATE_NOTE_BACK = 'CONTAINER_NOTE_NAVIGATE_NOTE_BACK'
export const PERFORM_NOTE_TEXT_UPDATE = 'CONTAINER_NOTE_PERFORM_NOTE_TEXT_UPDATE'
export const NAVIGATE_TO_NOTE_CREATE_SCREEN = 'CONTAINER_NOTE_NAVIGATE_TO_NOTE_CREATE_SCREEN'
export const NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = 'CONTAINER_NOTE_NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN'
export const PERFORM_INPUT_NOTE_TYPE = 'CONTAINER_NOTE_PERFORM_INPUT_NOTE_TYPE'

export type NAVIGATE_TO_NOTE_SCREEN = {note: Models.Note}
export const navigateToNoteScreen = (note: Models.Note): Action<NAVIGATE_TO_NOTE_SCREEN> => ({
    type: NAVIGATE_TO_NOTE_SCREEN,
    payload: {
        note: note,
    }
})

export type NAVIGATE_TO_NOTE_CREATE_SCREEN = {}
export const navigateToNoteCreateScreen = (): Action<NAVIGATE_TO_NOTE_CREATE_SCREEN> => ({
    type: NAVIGATE_TO_NOTE_CREATE_SCREEN,
    payload: {}
})

export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

export type PERFORM_SAVE = {}
export const performSave = (): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {}
})

export type PERFORM_UPDATE_CURRENT_NOTE_STATE = {type: ModelsApp.Classifier, text: string, id: string}
export const performUpdateCurrentNoteState = (type: ModelsApp.Classifier, text: string, id:string): Action<PERFORM_UPDATE_CURRENT_NOTE_STATE> => ({
    type: PERFORM_UPDATE_CURRENT_NOTE_STATE,
    payload: {
        type: type,
        text: text,
        id: id,
    }
})

export type PERFORM_EDIT_VIEW = {note : Models.Note}
export const performEdit = (note : Models.Note): Action<PERFORM_EDIT_VIEW> => ({
    type: PERFORM_EDIT_VIEW,
    payload: {
        note: note
    }
})

export type NAVIGATE_NOTE_BACK = {}
export const navigateNoteBack = (): Action<NAVIGATE_NOTE_BACK> => ({
    type: NAVIGATE_NOTE_BACK,
    payload: {}
})

export type PERFORM_NOTE_TEXT_UPDATE = {text: string }
export const performNoteTextUpdate = (text: string ): Action<PERFORM_NOTE_TEXT_UPDATE> => ({
    type: PERFORM_NOTE_TEXT_UPDATE,
    payload: {
        text: text
    }
})

export type NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN = {}
export const navigateToCurrentNoteTypePickerScreen = (): Action<NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CURRENT_NOTE_TYPE_PICKER_SCREEN,
    payload: {
    }
})

export type PERFORM_INPUT_NOTE_TYPE = {noteType: ModelsApp.Classifier}
export const performInputNoteType = (noteType: ModelsApp.Classifier): Action<PERFORM_INPUT_NOTE_TYPE> => ({
    type: PERFORM_INPUT_NOTE_TYPE,
    payload: {
        noteType: noteType,
    }
})

