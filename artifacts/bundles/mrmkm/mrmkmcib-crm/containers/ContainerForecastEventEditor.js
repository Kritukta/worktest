import React from 'react';
import { connect } from 'react-redux';
import * as thunkForecastEventEditor from '../thunk/ThunkForecastEventEditor';
import ViewForecastEventEditor from '../components/ViewForecastEventEditor';
/*
 * Container "ForecastEventEditor".
 */
class ContainerForecastEventEditor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performForecastEventFormInit();
    }
    render() {
        return (React.createElement(ViewForecastEventEditor, { contextMode: this.props.contextMode, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentDeal: this.props.currentDeal, currentExchangePerson: this.props.currentExchangePerson, currentForecastEvent: this.props.currentForecastEvent, inputForecastEventComment: this.props.inputForecastEventComment, inputForecastEventCurrency: this.props.inputForecastEventCurrency, inputForecastEventDate: this.props.inputForecastEventDate, inputForecastEventEmail: this.props.inputForecastEventEmail, inputForecastEventFullRepayment: this.props.inputForecastEventFullRepayment, inputForecastEventPossibility: this.props.inputForecastEventPossibility, inputForecastEventSum: this.props.inputForecastEventSum, inputForecastEventType: this.props.inputForecastEventType, inputValidationForecastEventComment: this.props.inputValidationForecastEventComment, inputValidationForecastEventCurrency: this.props.inputValidationForecastEventCurrency, inputValidationForecastEventEmail: this.props.inputValidationForecastEventEmail, inputValidationForecastEventPossibility: this.props.inputValidationForecastEventPossibility, inputValidationForecastEventSum: this.props.inputValidationForecastEventSum, inputValidationForecastEventType: this.props.inputValidationForecastEventType, isEditableMode: this.props.isEditableMode, isValidForecastEventForm: this.props.isValidForecastEventForm, isVisibleForecastEventDeletePopover: this.props.isVisibleForecastEventDeletePopover, isVisibleForecastEventPossibilityPopover: this.props.isVisibleForecastEventPossibilityPopover, isVisibleForecastEventModalSaveError: this.props.isVisibleForecastEventModalSaveError, navigateBack: this.props.navigateBack, navigateBackToProductCredit: this.props.navigateBackToProductCredit, navigateToForecastCurrencySelection: this.props.navigateToForecastCurrencySelection, navigateToForecastTypeSelection: this.props.navigateToForecastTypeSelection, performForecastEventDelete: this.props.performForecastEventDelete, performForecastEventFormCancel: this.props.performForecastEventFormCancel, performForecastEventFormInit: this.props.performForecastEventFormInit, performForecastEventFormLoad: this.props.performForecastEventFormLoad, performForecastEventFormReset: this.props.performForecastEventFormReset, performForecastEventFormUpdateComment: this.props.performForecastEventFormUpdateComment, performForecastEventFormUpdateCurrency: this.props.performForecastEventFormUpdateCurrency, performForecastEventFormUpdateDate: this.props.performForecastEventFormUpdateDate, performForecastEventFormUpdateEmail: this.props.performForecastEventFormUpdateEmail, performForecastEventFormUpdateFullRepayment: this.props.performForecastEventFormUpdateFullRepayment, performForecastEventFormUpdatePossibility: this.props.performForecastEventFormUpdatePossibility, performForecastEventFormUpdateSum: this.props.performForecastEventFormUpdateSum, performForecastEventFormUpdateType: this.props.performForecastEventFormUpdateType, performForecastEventFormValidate: this.props.performForecastEventFormValidate, performForecastEventSave: this.props.performForecastEventSave, performForecastEventSaveRepeat: this.props.performForecastEventSaveRepeat, performModalForecastEventSaveErrorHide: this.props.performModalForecastEventSaveErrorHide, performModalForecastEventSaveErrorShow: this.props.performModalForecastEventSaveErrorShow, performPopoverForecastEventDeleteHide: this.props.performPopoverForecastEventDeleteHide, performPopoverForecastEventDeleteShow: this.props.performPopoverForecastEventDeleteShow, performPopoverForecastEventFormPossibilitySelectionHide: this.props.performPopoverForecastEventFormPossibilitySelectionHide, performPopoverForecastEventFormPossibilitySelectionShow: this.props.performPopoverForecastEventFormPossibilitySelectionShow, savingForecastEventError: this.props.savingForecastEventError, savingForecastEventInProgress: this.props.savingForecastEventInProgress, testID: 'test-id-container-ForecastEventEditor' }));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateBack: () => {
            dispatch(thunkForecastEventEditor.navigateBack());
        },
        navigateBackToProductCredit: () => {
            dispatch(thunkForecastEventEditor.navigateBackToProductCredit());
        },
        navigateToForecastCurrencySelection: () => {
            dispatch(thunkForecastEventEditor.navigateToForecastCurrencySelection());
        },
        navigateToForecastTypeSelection: () => {
            dispatch(thunkForecastEventEditor.navigateToForecastTypeSelection());
        },
        performForecastEventDelete: () => {
            dispatch(thunkForecastEventEditor.performForecastEventDelete());
        },
        performForecastEventFormCancel: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormCancel());
        },
        performForecastEventFormInit: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormInit());
        },
        performForecastEventFormLoad: (event) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormLoad(event));
        },
        performForecastEventFormReset: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormReset());
        },
        performForecastEventFormUpdateComment: (comment) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateComment(comment));
        },
        performForecastEventFormUpdateCurrency: (currency) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateCurrency(currency));
        },
        performForecastEventFormUpdateDate: (date) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateDate(date));
        },
        performForecastEventFormUpdateEmail: (email) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateEmail(email));
        },
        performForecastEventFormUpdateFullRepayment: (value) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateFullRepayment(value));
        },
        performForecastEventFormUpdatePossibility: (possibility) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdatePossibility(possibility));
        },
        performForecastEventFormUpdateSum: (sum) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateSum(sum));
        },
        performForecastEventFormUpdateType: (type) => {
            dispatch(thunkForecastEventEditor.performForecastEventFormUpdateType(type));
        },
        performForecastEventFormValidate: () => {
            dispatch(thunkForecastEventEditor.performForecastEventFormValidate());
        },
        performForecastEventSave: () => {
            dispatch(thunkForecastEventEditor.performForecastEventSave());
        },
        performForecastEventSaveRepeat: () => {
            dispatch(thunkForecastEventEditor.performForecastEventSaveRepeat());
        },
        performModalForecastEventSaveErrorHide: () => {
            dispatch(thunkForecastEventEditor.performModalForecastEventSaveErrorHide());
        },
        performModalForecastEventSaveErrorShow: () => {
            dispatch(thunkForecastEventEditor.performModalForecastEventSaveErrorShow());
        },
        performPopoverForecastEventDeleteHide: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventDeleteHide());
        },
        performPopoverForecastEventDeleteShow: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventDeleteShow());
        },
        performPopoverForecastEventFormPossibilitySelectionHide: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionHide());
        },
        performPopoverForecastEventFormPossibilitySelectionShow: () => {
            dispatch(thunkForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionShow());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerForecastEventEditor);
//# sourceMappingURL=ContainerForecastEventEditor.js.map