/**
 * Actions of CustomerEditor container.
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


export const PERFORM_CUSTOMER_EDITOR_SHOW = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_CUSTOMER_EDITOR_SHOW'

export const SWAP_CONTEXT = 'CUSTOMER_EDITOR_CONTAINER_SWAP_CONTEXT'

export const PERFORM_CANCEL = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_CANCEL'

export const PERFORM_NEXT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_NEXT'

export const PERFORM_SAVE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE'
export const PERFORM_SAVE_EXECUTE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_EXECUTE'
export const PERFORM_SAVE_SUCCESS = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE'

export const CALL_GET_CUSTOMER_MODIFIER_ID = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID'
export const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST'
export const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS'
export const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE'

export const CALL_PUT_CUSTOMER_UPDATE = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE'
export const CALL_PUT_CUSTOMER_UPDATE_REQUEST = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_REQUEST'
export const CALL_PUT_CUSTOMER_UPDATE_SUCCESS = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_SUCCESS'
export const CALL_PUT_CUSTOMER_UPDATE_FAILURE = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_FAILURE'

export const NAVIGATE_TO_COUNTRY_PICKER_SCREEN = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_COUNTRY_PICKER_SCREEN'

export const PERFORM_INPUT_COUNTRY = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_COUNTRY'

export const PERFORM_INPUT_SUBJECT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_SUBJECT'

export const PERFORM_INPUT_REGION = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_REGION'

export const PERFORM_INPUT_CITY = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_CITY'

export const PERFORM_INPUT_SETTLEMENT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_SETTLEMENT'

export const PERFORM_INPUT_STREET = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_STREET'

export const PERFORM_INPUT_HOUSE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_HOUSE'

export const PERFORM_INPUT_BUILDING = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_BUILDING'

export const PERFORM_INPUT_BLOCK = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_BLOCK'

export const PERFORM_INPUT_FLAT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_FLAT'

export const NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN'

export const NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN'

export const CLOSE_CUSTOMER_ACTIVITY_PANEL = 'CUSTOMER_EDITOR_CONTAINER_CLOSE_CUSTOMER_ACTIVITY_PANEL'

export const NAVIGATE_CUSTOMER_EDITOR_BACK = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_CUSTOMER_EDITOR_BACK'

export const PERFORM_CONTAINER_RESET = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_VALIDATE = 'CUSTOMER_EDITOR_PERFORM_VALIDATE'


/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to show customer editor.
 *
 * @param {Models.CustomerManaged} customer .
 */
export type PERFORM_CUSTOMER_EDITOR_SHOW = { customer: Models.CustomerManaged, }
export const performCustomerEditorShow = (customer: Models.CustomerManaged,): Action<PERFORM_CUSTOMER_EDITOR_SHOW> => ({
    type: PERFORM_CUSTOMER_EDITOR_SHOW,
    payload: {
        customer: customer,
    }
})

/**
 * Internal thunk used in "CustomerEditor" container. Thunk chain used to swap customer and user.
 *
 * @param {Models.CustomerManaged} customer .
 * @param {boolean} isEditorMode .
 */
export type SWAP_CONTEXT = { customer: Models.CustomerManaged, isEditorMode: boolean, }
export const swapContext = (customer: Models.CustomerManaged, isEditorMode: boolean,): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        customer: customer,
        isEditorMode: isEditorMode,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 *
 */
export type PERFORM_NEXT = {}
export const performNext = (): Action<PERFORM_NEXT> => ({
    type: PERFORM_NEXT,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 *
 * @param { string } operationUuidSave .
 */
export type PERFORM_SAVE = { operationUuidSave: string }
export const performSave = (operationUuidSave: string ): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {
        operationUuidSave: operationUuidSave,
    }
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 */
export type PERFORM_SAVE_EXECUTE = {}
export const performSaveExecute = (): Action<PERFORM_SAVE_EXECUTE> => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performNext". Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to validate before going to next step.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_VALIDATE = { }
export const performValidate = (): Action<PERFORM_VALIDATE> => ({
    type: PERFORM_VALIDATE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
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
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
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
 * Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 *
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID = {}
export const callGetCustomerModifierId = (): Action<CALL_GET_CUSTOMER_MODIFIER_ID> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = {}
export const callGetCustomerModifierIdRequest = (): Action<CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 *
 * @param {Models.CustomerManaged} response Data received by fetch.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = { response: Response<Models.CustomerManaged> }
export const callGetCustomerModifierIdSuccess = (response: Response<Models.CustomerManaged>): Action<CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = { error: Error }
export const callGetCustomerModifierIdFailure = (error: Error): Action<CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 *
 */
export type CALL_PUT_CUSTOMER_UPDATE = {}
export const callPutCustomerUpdate = (): Action<CALL_PUT_CUSTOMER_UPDATE> => ({
    type: CALL_PUT_CUSTOMER_UPDATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPutCustomerUpdate" started. Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 */
export type CALL_PUT_CUSTOMER_UPDATE_REQUEST = {}
export const callPutCustomerUpdateRequest = (): Action<CALL_PUT_CUSTOMER_UPDATE_REQUEST> => ({
    type: CALL_PUT_CUSTOMER_UPDATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPutCustomerUpdate". Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_PUT_CUSTOMER_UPDATE_SUCCESS = { response: Response<boolean> }
export const callPutCustomerUpdateSuccess = (response: Response<boolean>): Action<CALL_PUT_CUSTOMER_UPDATE_SUCCESS> => ({
    type: CALL_PUT_CUSTOMER_UPDATE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPutCustomerUpdate". Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_CUSTOMER_UPDATE_FAILURE = { error: Error }
export const callPutCustomerUpdateFailure = (error: Error): Action<CALL_PUT_CUSTOMER_UPDATE_FAILURE> => ({
    type: CALL_PUT_CUSTOMER_UPDATE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user tap Country field.
 *
 */
export type NAVIGATE_TO_COUNTRY_PICKER_SCREEN = {}
export const navigateToCountryPickerScreen = (): Action<NAVIGATE_TO_COUNTRY_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_COUNTRY_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Country field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_COUNTRY = { value: ModelsApp.Classifier }
export const performInputCountry = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_COUNTRY> => ({
    type: PERFORM_INPUT_COUNTRY,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Subject field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_SUBJECT = { value: string }
export const performInputSubject = (value: string): Action<PERFORM_INPUT_SUBJECT> => ({
    type: PERFORM_INPUT_SUBJECT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Region field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_REGION = { value: string }
export const performInputRegion = (value: string): Action<PERFORM_INPUT_REGION> => ({
    type: PERFORM_INPUT_REGION,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input City field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_CITY = { value: string }
export const performInputCity = (value: string): Action<PERFORM_INPUT_CITY> => ({
    type: PERFORM_INPUT_CITY,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Settlement field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_SETTLEMENT = { value: string }
export const performInputSettlement = (value: string): Action<PERFORM_INPUT_SETTLEMENT> => ({
    type: PERFORM_INPUT_SETTLEMENT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Street field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_STREET = { value: string }
export const performInputStreet = (value: string): Action<PERFORM_INPUT_STREET> => ({
    type: PERFORM_INPUT_STREET,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input House field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_HOUSE = { value: string }
export const performInputHouse = (value: string): Action<PERFORM_INPUT_HOUSE> => ({
    type: PERFORM_INPUT_HOUSE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Building field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_BUILDING = { value: string }
export const performInputBuilding = (value: string): Action<PERFORM_INPUT_BUILDING> => ({
    type: PERFORM_INPUT_BUILDING,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Block field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_BLOCK = { value: string }
export const performInputBlock = (value: string): Action<PERFORM_INPUT_BLOCK> => ({
    type: PERFORM_INPUT_BLOCK,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Flat field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_FLAT = { value: string }
export const performInputFlat = (value: string): Action<PERFORM_INPUT_FLAT> => ({
    type: PERFORM_INPUT_FLAT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to include company to Customer.
 *
 */
export type NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN = {}
export const navigateToCustomerActivityIncludeScreen = (): Action<NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN> => ({
    type: NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to exclude company from Customer.
 *
 */
export type NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN = {}
export const navigateToCustomerActivityExcludeScreen = (): Action<NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN> => ({
    type: NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to close Gsz activity.
 *
 */
export type CLOSE_CUSTOMER_ACTIVITY_PANEL = {}
export const closeCustomerActivityPanel = (): Action<CLOSE_CUSTOMER_ACTIVITY_PANEL> => ({
    type: CLOSE_CUSTOMER_ACTIVITY_PANEL,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen.
 *
 */
export type NAVIGATE_CUSTOMER_EDITOR_BACK = {}
export const navigateCustomerEditorBack = (): Action<NAVIGATE_CUSTOMER_EDITOR_BACK> => ({
    type: NAVIGATE_CUSTOMER_EDITOR_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})
