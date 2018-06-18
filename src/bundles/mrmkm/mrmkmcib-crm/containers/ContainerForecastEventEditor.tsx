import React from 'react'
import {connect} from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkForecastEventEditor from '../thunk/ThunkForecastEventEditor'

import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsAppProductList from "../models/ModelsProductList";
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsForecastEventEditor from '../models/ModelsForecastEventEditor';
import ViewForecastEventEditor from '../components/ViewForecastEventEditor'
import * as ModelState from "../models/Models"


/*
 * Container "ForecastEventEditor".
 */
class ContainerForecastEventEditor extends React.Component<IForecastEventEditorProps, any> {

    constructor(props: IForecastEventEditorProps, context: any) {
        super(props, context);
    }

    public componentDidMount() {
        this.props.performForecastEventFormInit()
    }

    public render() {
        return (
            <ViewForecastEventEditor
                contextMode={this.props.contextMode}
                classifierDictionary={this.props.classifierDictionary}
                currentCustomerManaged={this.props.currentCustomerManaged}
                currentDeal={this.props.currentDeal}
                currentExchangePerson={this.props.currentExchangePerson}
                currentForecastEvent={this.props.currentForecastEvent}
                inputForecastEventComment={this.props.inputForecastEventComment}
                inputForecastEventCurrency={this.props.inputForecastEventCurrency}
                inputForecastEventDate={this.props.inputForecastEventDate}
                inputForecastEventEmail={this.props.inputForecastEventEmail}
                inputForecastEventFullRepayment={this.props.inputForecastEventFullRepayment}
                inputForecastEventPossibility={this.props.inputForecastEventPossibility}
                inputForecastEventSum={this.props.inputForecastEventSum}
                inputForecastEventType={this.props.inputForecastEventType}
                inputValidationForecastEventComment={this.props.inputValidationForecastEventComment}
                inputValidationForecastEventCurrency={this.props.inputValidationForecastEventCurrency}
                inputValidationForecastEventEmail={this.props.inputValidationForecastEventEmail}
                inputValidationForecastEventPossibility={this.props.inputValidationForecastEventPossibility}
                inputValidationForecastEventSum={this.props.inputValidationForecastEventSum}
                inputValidationForecastEventType={this.props.inputValidationForecastEventType}
                isEditableMode={this.props.isEditableMode}
                isValidForecastEventForm={this.props.isValidForecastEventForm}
                isVisibleForecastEventDeletePopover={this.props.isVisibleForecastEventDeletePopover}
                isVisibleForecastEventPossibilityPopover={this.props.isVisibleForecastEventPossibilityPopover}
                isVisibleForecastEventModalSaveError={this.props.isVisibleForecastEventModalSaveError} 
                navigateBack={this.props.navigateBack}
                navigateBackToProductCredit={this.props.navigateBackToProductCredit}
                navigateToForecastCurrencySelection={this.props.navigateToForecastCurrencySelection}
                navigateToForecastTypeSelection={this.props.navigateToForecastTypeSelection}
                performForecastEventDelete={this.props.performForecastEventDelete}
                performForecastEventFormCancel={this.props.performForecastEventFormCancel}
                performForecastEventFormInit={this.props.performForecastEventFormInit}
                performForecastEventFormLoad={this.props.performForecastEventFormLoad}
                performForecastEventFormReset={this.props.performForecastEventFormReset}
                performForecastEventFormUpdateComment={this.props.performForecastEventFormUpdateComment}
                performForecastEventFormUpdateCurrency={this.props.performForecastEventFormUpdateCurrency}
                performForecastEventFormUpdateDate={this.props.performForecastEventFormUpdateDate}
                performForecastEventFormUpdateEmail={this.props.performForecastEventFormUpdateEmail}
                performForecastEventFormUpdateFullRepayment={this.props.performForecastEventFormUpdateFullRepayment}
                performForecastEventFormUpdatePossibility={this.props.performForecastEventFormUpdatePossibility}
                performForecastEventFormUpdateSum={this.props.performForecastEventFormUpdateSum}
                performForecastEventFormUpdateType={this.props.performForecastEventFormUpdateType}
                performForecastEventFormValidate={this.props.performForecastEventFormValidate}
                performForecastEventSave={this.props.performForecastEventSave}
                performForecastEventSaveRepeat={this.props.performForecastEventSaveRepeat}
                performModalForecastEventSaveErrorHide={this.props.performModalForecastEventSaveErrorHide}
                performModalForecastEventSaveErrorShow={this.props.performModalForecastEventSaveErrorShow}
                performPopoverForecastEventDeleteHide={this.props.performPopoverForecastEventDeleteHide}
                performPopoverForecastEventDeleteShow={this.props.performPopoverForecastEventDeleteShow}
                performPopoverForecastEventFormPossibilitySelectionHide={this.props.performPopoverForecastEventFormPossibilitySelectionHide}
                performPopoverForecastEventFormPossibilitySelectionShow={this.props.performPopoverForecastEventFormPossibilitySelectionShow}
                savingForecastEventError={this.props.savingForecastEventError}
                savingForecastEventInProgress={this.props.savingForecastEventInProgress}
                testID={'test-id-container-ForecastEventEditor'}
            />
        )
    }
}

export interface IStateProps {
    contextMode: Enums.ForecastEventEditorContextMode,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentDeal: Models.ForecastDeal,
    currentExchangePerson: ModelsScheduler.Person,
    currentForecastEvent: Models.ForecastEvent,
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

export interface IDispatchProps {
    navigateBack: ModelsForecastEventEditor.NAVIGATE_BACK,
    navigateBackToProductCredit: ModelsProductCredit.NAVIGATE_PRODUCT_CREDIT_BACK,
    navigateToForecastCurrencySelection: ModelsForecastEventEditor.NAVIGATE_TO_FORECAST_CURRENCY_SELECTION,
    navigateToForecastTypeSelection: ModelsForecastEventEditor.NAVIGATE_TO_FORECAST_TYPE_SELECTION,
    performForecastEventDelete: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_DELETE,
    performForecastEventFormCancel: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_CANCEL,
    performForecastEventFormInit: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_INIT,
    performForecastEventFormLoad: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_LOAD,
    performForecastEventFormReset: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_RESET,
    performForecastEventFormUpdateComment: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT,
    performForecastEventFormUpdateCurrency: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY,
    performForecastEventFormUpdateDate: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE,
    performForecastEventFormUpdateEmail: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL,
    performForecastEventFormUpdateFullRepayment: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT,
    performForecastEventFormUpdatePossibility: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY,
    performForecastEventFormUpdateSum: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM,
    performForecastEventFormUpdateType: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE,
    performForecastEventFormValidate: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_VALIDATE,
    performForecastEventSave: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_SAVE,
    performForecastEventSaveRepeat: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_SAVE_REPEAT,
    performModalForecastEventSaveErrorHide:ModelsForecastEventEditor.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE,
    performModalForecastEventSaveErrorShow: ModelsForecastEventEditor.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW,
    performPopoverForecastEventDeleteHide: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE,
    performPopoverForecastEventDeleteShow: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW,
    performPopoverForecastEventFormPossibilitySelectionHide: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE,
    performPopoverForecastEventFormPossibilitySelectionShow: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW,
}

export type IForecastEventEditorProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        contextMode: state.user.mrmkmcibCRM.reducerForecastEventEditor.contextMode,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentDeal: state.user.mrmkmcibCRM.reducerProductList.currentDeal,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
        currentForecastEvent: state.user.mrmkmcibCRM.reducerProductCredit.currentForecastEvent,
        inputForecastEventComment: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventComment,
        inputForecastEventCurrency: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventCurrency,
        inputForecastEventDate: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventDate,
        inputForecastEventEmail: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventEmail,
        inputForecastEventFullRepayment: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventFullRepayment,
        inputForecastEventPossibility: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventPossibility,
        inputForecastEventSum: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventSum,
        inputForecastEventType: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputForecastEventType,
        inputValidationForecastEventComment: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputValidationForecastEventComment,
        inputValidationForecastEventCurrency: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputValidationForecastEventCurrency,
        inputValidationForecastEventEmail: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputValidationForecastEventEmail,
        inputValidationForecastEventPossibility: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputValidationForecastEventPossibility,
        inputValidationForecastEventSum: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputValidationForecastEventSum,
        inputValidationForecastEventType: state.user.mrmkmcibCRM.reducerForecastEventEditor.inputValidationForecastEventType,
        isEditableMode: state.user.mrmkmcibCRM.reducerForecastEventEditor.isEditableMode,
        isValidForecastEventForm: state.user.mrmkmcibCRM.reducerForecastEventEditor.isValidForecastEventForm,
        isVisibleForecastEventDeletePopover: state.user.mrmkmcibCRM.reducerForecastEventEditor.isVisibleForecastEventDeletePopover,
        isVisibleForecastEventPossibilityPopover: state.user.mrmkmcibCRM.reducerForecastEventEditor.isVisibleForecastEventPossibilityPopover,
        isVisibleForecastEventModalSaveError: state.user.mrmkmcibCRM.reducerForecastEventEditor.isVisibleForecastEventModalSaveError,
        savingForecastEventError: state.user.mrmkmcibCRM.reducerForecastEventEditor.savingForecastEventError,
        savingForecastEventInProgress: state.user.mrmkmcibCRM.reducerForecastEventEditor.savingForecastEventInProgress
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        navigateBack: () => {
            dispatch(thunkForecastEventEditor.navigateBack())
        },
        navigateBackToProductCredit: () => {
            dispatch(thunkForecastEventEditor.navigateBackToProductCredit())
        },
        navigateToForecastCurrencySelection: () => {
            dispatch(thunkForecastEventEditor.navigateToForecastCurrencySelection())
        },
        navigateToForecastTypeSelection: () => {
            dispatch(thunkForecastEventEditor.navigateToForecastTypeSelection())
        },
        performForecastEventDelete: () => {
            dispatch(thunkForecastEventEditor.performForecastEventDelete())
        },
        performForecastEventFormCancel: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormCancel())
        },
        performForecastEventFormInit: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormInit())
        },
        performForecastEventFormLoad: (event: Models.ForecastEvent) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormLoad(event))
        },
        performForecastEventFormReset: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormReset())
        },
        performForecastEventFormUpdateComment: (comment: string) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateComment(comment))
        },
        performForecastEventFormUpdateCurrency: (currency: ModelsApp.Classifier) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateCurrency(currency))
        },
        performForecastEventFormUpdateDate: (date: Date) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateDate(date))
        },
        performForecastEventFormUpdateEmail: (email: string) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateEmail(email))
        },
        performForecastEventFormUpdateFullRepayment: (value: boolean) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateFullRepayment(value))
        },
        performForecastEventFormUpdatePossibility: (possibility: number) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdatePossibility(possibility))
        },
        performForecastEventFormUpdateSum: (sum: string) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateSum(sum))
        },
        performForecastEventFormUpdateType: (type: ModelsApp.Classifier) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateType(type))
        },
        performForecastEventFormValidate: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormValidate())
        },
        performForecastEventSave: () => {
            dispatch(thunkForecastEventEditor.performForecastEventSave())
        },
        performForecastEventSaveRepeat: () => {
            dispatch(thunkForecastEventEditor.performForecastEventSaveRepeat())
        },
        performModalForecastEventSaveErrorHide: () => {
            dispatch(thunkForecastEventEditor.performModalForecastEventSaveErrorHide())
        },
        performModalForecastEventSaveErrorShow: () => {
            dispatch(thunkForecastEventEditor.performModalForecastEventSaveErrorShow())
        },
        performPopoverForecastEventDeleteHide: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventDeleteHide())
        },
        performPopoverForecastEventDeleteShow: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventDeleteShow())
        },
        performPopoverForecastEventFormPossibilitySelectionHide: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionHide())
        },
        performPopoverForecastEventFormPossibilitySelectionShow: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionShow())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerForecastEventEditor)
