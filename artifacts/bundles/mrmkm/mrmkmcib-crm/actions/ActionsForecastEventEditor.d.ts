/**
 * Actions of ForecastEventEditor container.
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Action from "../models/Action";
export declare const CALL_POST_FORECAST_EVENT_CREATE = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE";
export declare const CALL_POST_FORECAST_EVENT_CREATE_FAILURE = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_FAILURE";
export declare const CALL_POST_FORECAST_EVENT_CREATE_REQUEST = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_REQUEST";
export declare const CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_SUCCESS";
export declare const CALL_POST_FORECAST_EVENT_UPDATE = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE";
export declare const CALL_POST_FORECAST_EVENT_UPDATE_FAILURE = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_FAILURE";
export declare const CALL_POST_FORECAST_EVENT_UPDATE_REQUEST = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_REQUEST";
export declare const CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS";
export declare const CALL_POST_FORECAST_EVENT_DELETE = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE";
export declare const CALL_POST_FORECAST_EVENT_DELETE_FAILURE = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_FAILURE";
export declare const CALL_POST_FORECAST_EVENT_DELETE_REQUEST = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_REQUEST";
export declare const CALL_POST_FORECAST_EVENT_DELETE_SUCCESS = "FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_SUCCESS";
export declare const NAVIGATE_BACK = "FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_BACK";
export declare const NAVIGATE_BACK_TO_PRODUCT_CREDIT = "FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_BACK_TO_PRODUCT_CREDIT";
export declare const NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = "FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_TO_FORECAST_CURRENCY_SELECTION";
export declare const NAVIGATE_TO_FORECAST_TYPE_SELECTION = "FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_TO_FORECAST_TYPE_SELECTION";
export declare const PERFORM_FORECAST_EVENT_DELETE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_DELETE";
export declare const PERFORM_FORECAST_EVENT_FORM_CANCEL = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_CANCEL";
export declare const PERFORM_FORECAST_EVENT_FORM_INIT = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_INIT";
export declare const PERFORM_FORECAST_EVENT_FORM_LOAD = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_LOAD";
export declare const PERFORM_FORECAST_EVENT_FORM_RESET = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_RESET";
export declare const PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE_POPOVER = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE_POPOVER";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM";
export declare const PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE";
export declare const PERFORM_FORECAST_EVENT_FORM_VALIDATE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_VALIDATE";
export declare const PERFORM_FORECAST_EVENT_SAVE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_SAVE";
export declare const PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE";
export declare const PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW";
export declare const PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE";
export declare const PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW";
export declare const PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE";
export declare const PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW";
export declare const PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE = "FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE";
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE = {};
export declare const callPostForecastEventCreate: () => Action<CALL_POST_FORECAST_EVENT_CREATE>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE_REQUEST = {};
export declare const callPostForecastEventCreateRequest: () => Action<CALL_POST_FORECAST_EVENT_CREATE_REQUEST>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = {};
export declare const callPostForecastEventCreateSuccess: () => Action<CALL_POST_FORECAST_EVENT_CREATE_SUCCESS>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Models.Error} error.
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE_FAILURE = {
    error: Models.Error;
};
export declare const callPostForecastEventCreateFailure: (error: Models.Error) => Action<CALL_POST_FORECAST_EVENT_CREATE_FAILURE>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_UPDATE = {};
export declare const callPostForecastEventUpdate: () => Action<CALL_POST_FORECAST_EVENT_UPDATE>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_UPDATE_REQUEST = {};
export declare const callPostForecastEventUpdateRequest: () => Action<CALL_POST_FORECAST_EVENT_UPDATE_REQUEST>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS = {};
export declare const callPostForecastEventUpdateSuccess: () => Action<CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Models.Error} error
 */
export declare type CALL_POST_FORECAST_EVENT_UPDATE_FAILURE = {
    error: Models.Error;
};
export declare const callPostForecastEventUpdateFailure: (error: Models.Error) => Action<CALL_POST_FORECAST_EVENT_UPDATE_FAILURE>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_DELETE = {};
export declare const callPostForecastEventDelete: () => Action<CALL_POST_FORECAST_EVENT_DELETE>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_DELETE_REQUEST = {};
export declare const callPostForecastEventDeleteRequest: () => Action<CALL_POST_FORECAST_EVENT_DELETE_REQUEST>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_DELETE_SUCCESS = {};
export declare const callPostForecastEventDeleteSuccess: () => Action<CALL_POST_FORECAST_EVENT_DELETE_SUCCESS>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Models.Error} error
 */
export declare type CALL_POST_FORECAST_EVENT_DELETE_FAILURE = {
    error: Models.Error;
};
export declare const callPostForecastEventDeleteFailure: (error: Models.Error) => Action<CALL_POST_FORECAST_EVENT_DELETE_FAILURE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate back.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate back.
 *
 */
export declare type NAVIGATE_BACK_TO_PRODUCT_CREDIT = {};
export declare const navigateBackToProductCredit: () => Action<NAVIGATE_BACK_TO_PRODUCT_CREDIT>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate to type selection.
 *
 */
export declare type NAVIGATE_TO_FORECAST_TYPE_SELECTION = {};
export declare const navigateToForecastTypeSelection: () => Action<NAVIGATE_TO_FORECAST_TYPE_SELECTION>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on user navigate to currency selection.
 *
 */
export declare type NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = {};
export declare const navigateToForecastCurrencySelection: () => Action<NAVIGATE_TO_FORECAST_CURRENCY_SELECTION>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Thunk chain used to delete forecast event.
 *
 */
export declare type PERFORM_FORECAST_EVENT_DELETE = {};
export declare const performForecastEventDelete: () => Action<PERFORM_FORECAST_EVENT_DELETE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on cancelation of forecast event.
 *
 */
export declare type PERFORM_FORECAST_EVENT_FORM_CANCEL = {};
export declare const performForecastEventFormCancel: () => Action<PERFORM_FORECAST_EVENT_FORM_CANCEL>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to init form.
 *
 * @param {string} email
 */
export declare type PERFORM_FORECAST_EVENT_FORM_INIT = {
    email: string;
};
export declare const performForecastEventFormInit: (email: string) => Action<PERFORM_FORECAST_EVENT_FORM_INIT>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to load form.
 *
 * @param {Models.IForecastEventEditorForm} data
 */
export declare type PERFORM_FORECAST_EVENT_FORM_LOAD = {
    data: Models.IForecastEventEditorForm;
};
export declare const performForecastEventFormLoad: (data: Models.IForecastEventEditorForm) => Action<PERFORM_FORECAST_EVENT_FORM_LOAD>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to reset form.
 *
 */
export declare type PERFORM_FORECAST_EVENT_FORM_RESET = {};
export declare const performForecastEventFormReset: () => Action<PERFORM_FORECAST_EVENT_FORM_RESET>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to reset currency input.
 *
 */
export declare type PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET = {};
export declare const performForecastEventFormCurrencyReset: () => Action<PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on input a comment of forecast event.
 *
 * @param {string} comment.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = {
    comment: string;
};
export declare const performForecastEventFormUpdateComment: (comment: string) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on switch a currency of forecast event.
 *
 * @param {ModelsApp.Classifier} currency.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = {
    currency: ModelsApp.Classifier;
};
export declare const performForecastEventFormUpdateCurrency: (currency: ModelsApp.Classifier) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY>;
/**
 * Action dispatched by "ForecastEventEditor" screen.
 *
 * @param {Date} date.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = {
    date: Date;
};
export declare const performForecastEventFormUpdateDate: (date: Date) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on typing email
 *
 * @param {string} email.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = {
    email: string;
};
export declare const performForecastEventFormUpdateEmail: (email: string) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on change full repayment
 *
 * @param {boolean} value.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = {
    isFullRepayment: boolean;
};
export declare const performForecastEventFormUpdateFullRepayment: (isFullRepayment: boolean) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on typing email
 *
 * @param {number} possibility.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = {
    possibility: number;
};
export declare const performForecastEventFormUpdatePossibility: (possibility: number) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on typing a sum of forecast event.
 *
 * @param {string} sum.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = {
    sum: string;
};
export declare const performForecastEventFormUpdateSum: (sum: string) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action dispatched on switch a type of forecast event.
 *
 * @param {ModelsApp.Classifier} type.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = {
    type: ModelsApp.Classifier;
};
export declare const performForecastEventFormUpdateType: (type: ModelsApp.Classifier) => Action<PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to validate form.
 *
 * @param {Models.IForecastEventEditorFormVadidate} inputValidation.
 */
export declare type PERFORM_FORECAST_EVENT_FORM_VALIDATE = {
    inputValidation: Models.IForecastEventEditorFormVadidate;
};
export declare const performForecastEventFormValidate: (inputValidation: Models.IForecastEventEditorFormVadidate) => Action<PERFORM_FORECAST_EVENT_FORM_VALIDATE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Thunk chain used to save forecast event.
 *
 */
export declare type PERFORM_FORECAST_EVENT_SAVE = {};
export declare const performForecastEventSave: () => Action<PERFORM_FORECAST_EVENT_SAVE>;
export declare type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = {};
export declare const performModalForecastEventSaveErrorHide: () => Action<PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE>;
export declare type PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = {};
export declare const performModalForecastEventSaveErrorShow: () => Action<PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to accept popover.
 *
 */
export declare type PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = {};
export declare const performPopoverForecastEventDeleteHide: () => Action<PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to accept popover.
 *
 */
export declare type PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = {};
export declare const performPopoverForecastEventDeleteShow: () => Action<PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = {};
export declare const performPopoverForecastEventFormPossibilitySelectionHide: () => Action<PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Action chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = {};
export declare const performPopoverForecastEventFormPossibilitySelectionShow: () => Action<PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW>;
/**
 * Action dispatched by "ForecastEventEditor" screen. Set context mode for ForecastEventEditor screen.
 *
 * @param {Enums.ForecastEventEditorContextMode} contextMode.
 */
export declare type PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE = {
    contextMode: Enums.ForecastEventEditorContextMode;
};
export declare const performForecastEventSetContextMode: (contextMode: Enums.ForecastEventEditorContextMode) => Action<PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE>;
