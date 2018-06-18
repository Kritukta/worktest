/**
 * Actions of Occasion container.
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



export const PERFORM_SAVE_EXECUTE = 'OCCASION_CONTAINER_PERFORM_SAVE_EXECUTE'
export const PERFORM_SAVE_SUCCESS = 'OCCASION_CONTAINER_PERFORM_SAVE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'OCCASION_CONTAINER_PERFORM_SAVE_FAILURE'

export const PERFORM_VALIDATE = 'OCCASION_CONTAINER_PERFORM_VALIDATE'

export const PERFORM_CANCEL = 'OCCASION_CONTAINER_PERFORM_CANCEL'

export const NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN = 'OCCASION_CONTAINER_NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN'

export const PERFORM_INPUT_OCCASION_TYPE = 'OCCASION_CONTAINER_PERFORM_INPUT_OCCASION_TYPE'

export const PERFORM_INPUT_DATE = 'OCCASION_CONTAINER_PERFORM_INPUT_DATE'

export const PERFORM_INPUT_NO_YEAR = 'OCCASION_CONTAINER_PERFORM_INPUT_NO_YEAR'

export const PERFORM_INPUT_COMMENT = 'OCCASION_CONTAINER_PERFORM_INPUT_COMMENT'

export const NAVIGATE_BACK = 'OCCASION_CONTAINER_NAVIGATE_NAVIGATE_BACK'

export const NAVIGATE_TO_OCCASION_SCREEN = 'OCCASION_CONTAINER_NAVIGATE_TO_OCCASION_SCREEN'

export const PERFORM_OPEN_OCCASION_SCREEN = 'OCCASION_CONTAINER_PERFORM_OPEN_OCCASION_SCREEN'

export const PERFORM_CLOSE_OCCASION_SCREEN = 'OCCASION_CONTAINER_PERFORM_CLOSE_OCCASION_SCREEN'

export const PERFORM_INPUT_OCCASION = 'OCCASION_CONTAINER_PERFORM_INPUT_OCCASION'

export const PERFORM_CONTAINER_RESET = 'OCCASION_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_EDIT = 'OCCASION_CONTAINER_PERFORM_EDIT'

export const PERFORM_UPDATE_CURRENT_OCCASION_STATE = 'OCCASION_CONTAINER_PERFORM_UPDATE_CURRENT_OCCASION_STATE'

export const PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW = 'OCCASION_CONTAINER_PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW'


/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk dispatched to change display error modal.
 *
 * @param {boolean}
 */
export type PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW = {value: boolean}
export const performChangeDisplayOccasionErrorModalWindow = (value: boolean): Action<PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW> => ({
    type: PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW,
    payload: {value}
})
/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk dispatched on close screen.
 *
 */
export type PERFORM_CLOSE_OCCASION_SCREEN = {}
export const performCloseOccasionScreen = (): Action<PERFORM_CLOSE_OCCASION_SCREEN> => ({
    type: PERFORM_CLOSE_OCCASION_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
 *
 * @param {Enums.OccasionMode}
 * @param {Enums.OccasionContextMode}
 */
export type PERFORM_OPEN_OCCASION_SCREEN= {occasionMode: Enums.OccasionMode, occasionContextMode: Enums.OccasionContextMode}
export const performOpenOccasionScreen = (occasionMode: Enums.OccasionMode, occasionContextMode: Enums.OccasionContextMode): Action<PERFORM_OPEN_OCCASION_SCREEN> => ({
    type: PERFORM_OPEN_OCCASION_SCREEN,
    payload: {occasionMode, occasionContextMode}
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "Occasion" screen. Thunk used to input data in Occasion.
 *
 * @param {Models.Occasion}
 */
export type PERFORM_INPUT_OCCASION = {occasion: Models.Occasion}
export const performInputOccasion = (occasion: Models.Occasion): Action<PERFORM_INPUT_OCCASION> => ({
    type: PERFORM_INPUT_OCCASION,
    payload: {occasion}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
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
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
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

/**
 * Internal thunk used in "Occasion" container. Thunk used to confirm changes in Occasion.
 *
 * @param {number[]}
 */
export type PERFORM_VALIDATE = {validationErrorList: number[]}
export const performValidate = (validationErrorList: number[]): Action<PERFORM_VALIDATE> => ({
    type: PERFORM_VALIDATE,
    payload: {validationErrorList}
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk used to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk used to show occasion type picker screen.
 *
 */
export type NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN = {}
export const navigateToOccasionTypePickerScreen = (): Action<NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion type field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_OCCASION_TYPE = { value: ModelsApp.Classifier }
export const performInputOccasionType = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_OCCASION_TYPE> => ({
    type: PERFORM_INPUT_OCCASION_TYPE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion date field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_DATE = { value: Date | null }
export const performInputDate = (value: Date | null): Action<PERFORM_INPUT_DATE> => ({
    type: PERFORM_INPUT_DATE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input NoYear field.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_NO_YEAR = { value: boolean }
export const performInputNoYear = (value: boolean): Action<PERFORM_INPUT_NO_YEAR> => ({
    type: PERFORM_INPUT_NO_YEAR,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input comment field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_COMMENT = { value: string }
export const performInputComment = (value: string): Action<PERFORM_INPUT_COMMENT> => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value,
    }
})


/**
 * Thunk dispatched by "Occasion" screen. Thunk used to set occasion edit mode.
 *
 */
export type PERFORM_EDIT = {}
export const performEdit = (): Action<PERFORM_EDIT> => ({
    type: PERFORM_EDIT,
    payload: {}
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "Occasion" screen. Thunk used to show occasion details.
 *
 * @param {Models.Occasion} occasion .
 */
export type NAVIGATE_TO_OCCASION_SCREEN = { occasion: Models.Occasion}
export const navigateToOccasionScreen = (occasion: Models.Occasion): Action<NAVIGATE_TO_OCCASION_SCREEN> => ({
    type: NAVIGATE_TO_OCCASION_SCREEN,
    payload: {
        occasion: occasion,
    }
})


/**
 * Thunk dispatched by "Occasion" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})


