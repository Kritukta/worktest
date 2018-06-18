/**
 * Models for ForecastEventEditor container.
 *
 */
import {defaultValues} from './Models'
import {Models as ModelsApp} from 'mrmkmcib-app'
import {Models} from 'mrmkmcib-crm'
import {Enums} from '../Enums'

const defaultState = {
    get state(): IForecastEventEditorState {
        return {
            contextMode: Enums.ForecastEventEditorContextMode.None,
            inputForecastEventComment: '',
            inputForecastEventCurrency: defaultValues.Classifier,
            inputForecastEventDate: new Date(),
            inputForecastEventEmail: '',
            inputForecastEventFullRepayment: false,
            inputForecastEventPossibility: 1,
            inputForecastEventSum: '',
            inputForecastEventType: null,
            inputValidationForecastEventComment: null,
            inputValidationForecastEventCurrency: null,
            inputValidationForecastEventEmail: null,
            inputValidationForecastEventPossibility: null,
            inputValidationForecastEventSum: null,
            inputValidationForecastEventType: null,
            isEditableMode: false,
            isValidForecastEventForm: false,
            isVisibleForecastEventDeletePopover: false,
            isVisibleForecastEventPossibilityPopover: false,
            isVisibleForecastEventModalSaveError: false,
            savingForecastEventError: null,
            savingForecastEventInProgress: false,
        }
    }
}

export interface IForecastEventEditorState {
    contextMode: Enums.ForecastEventEditorContextMode,
    inputForecastEventComment: string,
    inputForecastEventCurrency: ModelsApp.Classifier,
    inputForecastEventDate: Date,
    inputForecastEventEmail: string,
    inputForecastEventFullRepayment: boolean,
    inputForecastEventPossibility: number,
    inputForecastEventSum: string,
    inputForecastEventType: ModelsApp.Classifier | null,
    inputValidationForecastEventComment: string | null,
    inputValidationForecastEventCurrency: string | null,
    inputValidationForecastEventEmail: string | null,
    inputValidationForecastEventPossibility: number | null,
    inputValidationForecastEventSum: string | null,
    inputValidationForecastEventType: string | null,
    isEditableMode: boolean,
    isValidForecastEventForm: boolean,
    isVisibleForecastEventDeletePopover: boolean,
    isVisibleForecastEventPossibilityPopover: boolean,
    isVisibleForecastEventModalSaveError: boolean,
    savingForecastEventError: Models.Error | null,
    savingForecastEventInProgress: boolean,
}

export const initialState = {
    get state(): IForecastEventEditorState {
        return defaultState.state
    }
}

export type NAVIGATE_BACK = () => void;
export type NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = () => void;
export type NAVIGATE_TO_FORECAST_TYPE_SELECTION = () => void;
export type PERFORM_FORECAST_EVENT_DELETE = () => void;
export type PERFORM_FORECAST_EVENT_FORM_CANCEL = () => void;
export type PERFORM_FORECAST_EVENT_FORM_INIT = () => void;
export type PERFORM_FORECAST_EVENT_FORM_LOAD = (event: Models.ForecastEvent) => void;
export type PERFORM_FORECAST_EVENT_FORM_RESET = () => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = (comment: string) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = (currency: ModelsApp.Classifier) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = (date: Date) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = (email: string) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = (value: boolean) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = (possibility: number) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = (sum: string) => void;
export type PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = (type: ModelsApp.Classifier) => void;
export type PERFORM_FORECAST_EVENT_FORM_VALIDATE = () => void;
export type PERFORM_FORECAST_EVENT_SAVE = () => void;
export type PERFORM_FORECAST_EVENT_SAVE_REPEAT = () => void;
export type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = () => void;
export type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = () => void;
export type PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = () => void;
export type PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = () => void;
export type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = () => void;
export type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = () => void;
