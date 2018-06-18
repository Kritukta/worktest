/**
 * Actions of ForecastEventEditor container.
 */
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums}  from '../Enums';
import Action from "../models/Action"

export const CALL_POST_FORECAST_EVENT_CREATE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE'
export const CALL_POST_FORECAST_EVENT_CREATE_FAILURE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_FAILURE'
export const CALL_POST_FORECAST_EVENT_CREATE_REQUEST = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_REQUEST'
export const CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_SUCCESS'

export const CALL_POST_FORECAST_EVENT_UPDATE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE'
export const CALL_POST_FORECAST_EVENT_UPDATE_FAILURE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_FAILURE'
export const CALL_POST_FORECAST_EVENT_UPDATE_REQUEST = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_REQUEST'
export const CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS'

export const CALL_POST_FORECAST_EVENT_DELETE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE'
export const CALL_POST_FORECAST_EVENT_DELETE_FAILURE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_FAILURE'
export const CALL_POST_FORECAST_EVENT_DELETE_REQUEST = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_REQUEST'
export const CALL_POST_FORECAST_EVENT_DELETE_SUCCESS = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_SUCCESS'

export const NAVIGATE_BACK = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_BACK'
export const NAVIGATE_BACK_TO_PRODUCT_CREDIT = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_BACK_TO_PRODUCT_CREDIT'
export const NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_TO_FORECAST_CURRENCY_SELECTION'
export const NAVIGATE_TO_FORECAST_TYPE_SELECTION = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_TO_FORECAST_TYPE_SELECTION'

export const PERFORM_FORECAST_EVENT_DELETE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_DELETE'

export const PERFORM_FORECAST_EVENT_FORM_CANCEL = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_CANCEL'
export const PERFORM_FORECAST_EVENT_FORM_INIT = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_INIT'
export const PERFORM_FORECAST_EVENT_FORM_LOAD = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_LOAD'
export const PERFORM_FORECAST_EVENT_FORM_RESET = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_RESET'
export const PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET'

export const PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE_POPOVER = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE_POPOVER'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM'
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE'

export const PERFORM_FORECAST_EVENT_FORM_VALIDATE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_VALIDATE'

export const PERFORM_FORECAST_EVENT_SAVE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_SAVE'

export const PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE'
export const PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW'

export const PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE'
export const PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW'

export const PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE'
export const PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW'

export const PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE'

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE = {}
export const callPostForecastEventCreate = (): Action<CALL_POST_FORECAST_EVENT_CREATE> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE_REQUEST = {}
export const callPostForecastEventCreateRequest = (): Action<CALL_POST_FORECAST_EVENT_CREATE_REQUEST> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_REQUEST,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = {}
export const callPostForecastEventCreateSuccess = (): Action<CALL_POST_FORECAST_EVENT_CREATE_SUCCESS> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_SUCCESS,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Models.Error} error.
 */
export type CALL_POST_FORECAST_EVENT_CREATE_FAILURE = {error: Models.Error}
export const callPostForecastEventCreateFailure = (error: Models.Error): Action<CALL_POST_FORECAST_EVENT_CREATE_FAILURE> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_FAILURE,
    payload: {
        error
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_UPDATE = {}
export const callPostForecastEventUpdate = (): Action<CALL_POST_FORECAST_EVENT_UPDATE> => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_UPDATE_REQUEST = {}
export const callPostForecastEventUpdateRequest = (): Action<CALL_POST_FORECAST_EVENT_UPDATE_REQUEST> => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE_REQUEST,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS = {}
export const callPostForecastEventUpdateSuccess = (): Action<CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS> => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Models.Error} error
 */
export type CALL_POST_FORECAST_EVENT_UPDATE_FAILURE = {error: Models.Error}
export const callPostForecastEventUpdateFailure = (error: Models.Error): Action<CALL_POST_FORECAST_EVENT_UPDATE_FAILURE> => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE_FAILURE,
    payload: {
        error
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_DELETE = {}
export const callPostForecastEventDelete = (): Action<CALL_POST_FORECAST_EVENT_DELETE> => ({
    type: CALL_POST_FORECAST_EVENT_DELETE,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_DELETE_REQUEST = {}
export const callPostForecastEventDeleteRequest = (): Action<CALL_POST_FORECAST_EVENT_DELETE_REQUEST> => ({
    type: CALL_POST_FORECAST_EVENT_DELETE_REQUEST,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_DELETE_SUCCESS = {}
export const callPostForecastEventDeleteSuccess = (): Action<CALL_POST_FORECAST_EVENT_DELETE_SUCCESS> => ({
    type: CALL_POST_FORECAST_EVENT_DELETE_SUCCESS,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Models.Error} error
 */
export type CALL_POST_FORECAST_EVENT_DELETE_FAILURE = {error: Models.Error}
export const callPostForecastEventDeleteFailure = (error: Models.Error): Action<CALL_POST_FORECAST_EVENT_DELETE_FAILURE> => ({
    type: CALL_POST_FORECAST_EVENT_DELETE_FAILURE,
    payload: {
        error
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate back.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate back.
 *
 */
export type NAVIGATE_BACK_TO_PRODUCT_CREDIT = {}
export const navigateBackToProductCredit = (): Action<NAVIGATE_BACK_TO_PRODUCT_CREDIT> => ({
    type: NAVIGATE_BACK_TO_PRODUCT_CREDIT,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate to type selection.
 *
 */
export type NAVIGATE_TO_FORECAST_TYPE_SELECTION = {}
export const navigateToForecastTypeSelection = (): Action<NAVIGATE_TO_FORECAST_TYPE_SELECTION> => ({
    type: NAVIGATE_TO_FORECAST_TYPE_SELECTION,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate to currency selection.
 *
 */
export type NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = {}
export const navigateToForecastCurrencySelection = (): Action<NAVIGATE_TO_FORECAST_CURRENCY_SELECTION> => ({
    type: NAVIGATE_TO_FORECAST_CURRENCY_SELECTION,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Thunk chain used to delete forecast event.
 *
 */
export type PERFORM_FORECAST_EVENT_DELETE = {}
export const performForecastEventDelete = (): Action<PERFORM_FORECAST_EVENT_DELETE> => ({
    type: PERFORM_FORECAST_EVENT_DELETE,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on cancelation of forecast event.
 *
 */
export type PERFORM_FORECAST_EVENT_FORM_CANCEL = {}
export const performForecastEventFormCancel = (): Action<PERFORM_FORECAST_EVENT_FORM_CANCEL> => ({
    type: PERFORM_FORECAST_EVENT_FORM_CANCEL,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to init form.
 *
 * @param {string} email
 */
export type PERFORM_FORECAST_EVENT_FORM_INIT = {email: string}
export const performForecastEventFormInit = (email: string): Action<PERFORM_FORECAST_EVENT_FORM_INIT> => ({
    type: PERFORM_FORECAST_EVENT_FORM_INIT,
    payload: {
        email
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to load form.
 *
 * @param {Models.IForecastEventEditorForm} data
 */
export type PERFORM_FORECAST_EVENT_FORM_LOAD = {data: Models.IForecastEventEditorForm}
export const performForecastEventFormLoad = (data: Models.IForecastEventEditorForm): Action<PERFORM_FORECAST_EVENT_FORM_LOAD> => ({
    type: PERFORM_FORECAST_EVENT_FORM_LOAD,
    payload: {
        data
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to reset form.
 *
 */
export type PERFORM_FORECAST_EVENT_FORM_RESET = {}
export const performForecastEventFormReset = (): Action<PERFORM_FORECAST_EVENT_FORM_RESET> => ({
    type: PERFORM_FORECAST_EVENT_FORM_RESET,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to reset currency input.
 *
 */
export type PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET = {}
export const performForecastEventFormCurrencyReset = (): Action<PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET> => ({
    type: PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on input a comment of forecast event.
 *
 * @param {string} comment.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = {comment: string}
export const performForecastEventFormUpdateComment = (comment: string): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT,
    payload: {
        comment
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on switch a currency of forecast event.
 *
 * @param {ModelsApp.Classifier} currency.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = {currency: ModelsApp.Classifier}
export const performForecastEventFormUpdateCurrency = (currency: ModelsApp.Classifier): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY,
    payload: {
        currency
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Date} date.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = {date: Date}
export const performForecastEventFormUpdateDate = (date: Date): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE,
    payload: {
        date
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on typing email
 *
 * @param {string} email.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = {email: string}
export const performForecastEventFormUpdateEmail = (email: string): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL,
    payload: {
        email
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on change full repayment
 *
 * @param {boolean} value.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = {isFullRepayment: boolean}
export const performForecastEventFormUpdateFullRepayment = (isFullRepayment: boolean): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT,
    payload: {
        isFullRepayment
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on typing email
 *
 * @param {number} possibility.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = {possibility: number}
export const performForecastEventFormUpdatePossibility = (possibility: number): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY,
    payload: {
        possibility
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on typing a sum of forecast event.
 *
 * @param {string} sum.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = {sum: string}
export const performForecastEventFormUpdateSum = (sum: string): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM,
    payload: {
        sum
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on switch a type of forecast event.
 *
 * @param {ModelsApp.Classifier} type.
 */
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = {type: ModelsApp.Classifier}
export const performForecastEventFormUpdateType = (type: ModelsApp.Classifier): Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE> => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE,
    payload: {
        type
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to validate form.
 *
 * @param {Models.IForecastEventEditorFormVadidate} inputValidation.
 */
export type PERFORM_FORECAST_EVENT_FORM_VALIDATE = {inputValidation: Models.IForecastEventEditorFormVadidate}
export const performForecastEventFormValidate = (inputValidation: Models.IForecastEventEditorFormVadidate): Action<PERFORM_FORECAST_EVENT_FORM_VALIDATE> => ({
    type: PERFORM_FORECAST_EVENT_FORM_VALIDATE,
    payload: {
        inputValidation
    }
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Thunk chain used to save forecast event.
 *
 */
export type PERFORM_FORECAST_EVENT_SAVE = {}
export const performForecastEventSave = (): Action<PERFORM_FORECAST_EVENT_SAVE> => ({
    type: PERFORM_FORECAST_EVENT_SAVE,
    payload: {}
})

/*
 * Action dispatched by "ForecastEventEditor" screen. Thunk chain used to hide error modal.
 *
 */
export type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = { }
export const performModalForecastEventSaveErrorHide = (): Action<PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE> => ({
    type: PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE,
    payload: {}
})

/*
 * Action dispatched by "ForecastEventEditor" screen. Thunk chain used to show error modal.
 *
 */
export type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = { }
export const performModalForecastEventSaveErrorShow = (): Action<PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW> => ({
    type: PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to accept popover.
 *
 */
export type PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = {}
export const performPopoverForecastEventDeleteHide = (): Action<PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE> => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to accept popover.
 *
 */
export type PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = {}
export const performPopoverForecastEventDeleteShow = (): Action<PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW> => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to show popover.
 *
 */
export type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = {}
export const performPopoverForecastEventFormPossibilitySelectionHide = (): Action<PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE> => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to show popover.
 *
 */
export type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = {}
export const performPopoverForecastEventFormPossibilitySelectionShow = (): Action<PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW> => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW,
    payload: {}
})

/**
 * Action dispatched by "ForecastEventEditor" screen. Set context mode for ForecastEventEditor screen.
 *
 * @param {Enums.ForecastEventEditorContextMode} contextMode.
 */
export type PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE = {contextMode: Enums.ForecastEventEditorContextMode}
export const performForecastEventSetContextMode = (contextMode: Enums.ForecastEventEditorContextMode): Action<PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE> => ({
    type: PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE,
    payload: {
        contextMode
    }
})
