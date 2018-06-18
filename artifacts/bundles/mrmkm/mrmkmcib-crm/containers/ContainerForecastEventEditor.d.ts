/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsProductCredit from "../models/ModelsProductCredit";
import * as ModelsForecastEventEditor from '../models/ModelsForecastEventEditor';
export interface IStateProps {
    contextMode: Enums.ForecastEventEditorContextMode;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentDeal: Models.ForecastDeal;
    currentExchangePerson: ModelsScheduler.Person;
    currentForecastEvent: Models.ForecastEvent;
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
export interface IDispatchProps {
    navigateBack: ModelsForecastEventEditor.NAVIGATE_BACK;
    navigateBackToProductCredit: ModelsProductCredit.NAVIGATE_PRODUCT_CREDIT_BACK;
    navigateToForecastCurrencySelection: ModelsForecastEventEditor.NAVIGATE_TO_FORECAST_CURRENCY_SELECTION;
    navigateToForecastTypeSelection: ModelsForecastEventEditor.NAVIGATE_TO_FORECAST_TYPE_SELECTION;
    performForecastEventDelete: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_DELETE;
    performForecastEventFormCancel: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_CANCEL;
    performForecastEventFormInit: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_INIT;
    performForecastEventFormLoad: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_LOAD;
    performForecastEventFormReset: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_RESET;
    performForecastEventFormUpdateComment: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT;
    performForecastEventFormUpdateCurrency: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY;
    performForecastEventFormUpdateDate: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE;
    performForecastEventFormUpdateEmail: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL;
    performForecastEventFormUpdateFullRepayment: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT;
    performForecastEventFormUpdatePossibility: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY;
    performForecastEventFormUpdateSum: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM;
    performForecastEventFormUpdateType: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE;
    performForecastEventFormValidate: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_VALIDATE;
    performForecastEventSave: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_SAVE;
    performForecastEventSaveRepeat: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_SAVE_REPEAT;
    performModalForecastEventSaveErrorHide: ModelsForecastEventEditor.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE;
    performModalForecastEventSaveErrorShow: ModelsForecastEventEditor.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW;
    performPopoverForecastEventDeleteHide: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE;
    performPopoverForecastEventDeleteShow: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW;
    performPopoverForecastEventFormPossibilitySelectionHide: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE;
    performPopoverForecastEventFormPossibilitySelectionShow: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW;
}
export declare type IForecastEventEditorProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
