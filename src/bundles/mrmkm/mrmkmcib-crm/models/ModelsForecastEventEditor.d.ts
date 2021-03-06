import { Models as ModelsApp } from 'mrmkmcib-app';
import { Models } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
export interface IForecastEventEditorState {
    contextMode: Enums.ForecastEventEditorContextMode;
    inputForecastEventComment: string;
    inputForecastEventCurrency: ModelsApp.Classifier;
    inputForecastEventDate: Date;
    inputForecastEventEmail: string;
    inputForecastEventFullRepayment: boolean;
    inputForecastEventPossibility: number;
    inputForecastEventSum: string;
    inputForecastEventType: ModelsApp.Classifier | null;
    inputValidationForecastEventComment: string | null;
    inputValidationForecastEventCurrency: string | null;
    inputValidationForecastEventEmail: string | null;
    inputValidationForecastEventPossibility: number | null;
    inputValidationForecastEventSum: string | null;
    inputValidationForecastEventType: string | null;
    isEditableMode: boolean;
    isValidForecastEventForm: boolean;
    isVisibleForecastEventDeletePopover: boolean;
    isVisibleForecastEventPossibilityPopover: boolean;
    isVisibleForecastEventModalSaveError: boolean;
    savingForecastEventError: Models.Error | null;
    savingForecastEventInProgress: boolean;
}
export declare const initialState: {
    readonly state: IForecastEventEditorState;
};
export declare type NAVIGATE_BACK = () => void;
export declare type NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = () => void;
export declare type NAVIGATE_TO_FORECAST_TYPE_SELECTION = () => void;
export declare type PERFORM_FORECAST_EVENT_DELETE = () => void;
export declare type PERFORM_FORECAST_EVENT_FORM_CANCEL = () => void;
export declare type PERFORM_FORECAST_EVENT_FORM_INIT = () => void;
export declare type PERFORM_FORECAST_EVENT_FORM_LOAD = (event: Models.ForecastEvent) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_RESET = () => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = (comment: string) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = (currency: ModelsApp.Classifier) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = (date: Date) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = (email: string) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = (value: boolean) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = (possibility: number) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = (sum: string) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = (type: ModelsApp.Classifier) => void;
export declare type PERFORM_FORECAST_EVENT_FORM_VALIDATE = () => void;
export declare type PERFORM_FORECAST_EVENT_SAVE = () => void;
export declare type PERFORM_FORECAST_EVENT_SAVE_REPEAT = () => void;
export declare type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = () => void;
export declare type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = () => void;
export declare type PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = () => void;
export declare type PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = () => void;
export declare type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = () => void;
export declare type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = () => void;
