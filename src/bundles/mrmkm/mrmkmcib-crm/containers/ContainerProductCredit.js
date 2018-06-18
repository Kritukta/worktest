/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProductCredit from '../thunk/ThunkProductCredit';
import { Enums } from '../Enums';
import ViewProductCredit from '../components/ViewProductCredit';
/*
 * Container "ProductCredit". Credit product detail information screen.
 */
class ContainerProductCredit extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductCredit, { classifierDictionary: this.props.classifierDictionary, currentCreditProduct: this.props.currentCreditProduct, currentCustomerManaged: this.props.currentCustomerManaged, currentExchangePerson: this.props.currentExchangePerson, currentForecastEvent: this.props.currentForecastEvent, currentTab: this.props.currentTab, forecastEventList: this.props.forecastEventList, forecastEventListCachedDate: this.props.forecastEventListCachedDate, forecastEventListError: this.props.forecastEventListError, forecastEventListFetching: this.props.forecastEventListFetching, forecastEventListFiltered: this.props.forecastEventListFiltered, inputActiveFilterForecastEventType: this.props.inputActiveFilterForecastEventType, inputActiveFilterPeriodEnd: this.props.inputActiveFilterPeriodEnd, inputActiveFilterPeriodStart: this.props.inputActiveFilterPeriodStart, inputActiveFilterPeriodType: this.props.inputActiveFilterPeriodType, inputFilterForecastEventType: this.props.inputFilterForecastEventType, inputFilterPeriodEnd: this.props.inputFilterPeriodEnd, inputFilterPeriodStart: this.props.inputFilterPeriodStart, inputFilterPeriodType: this.props.inputFilterPeriodType, inputForecastEventComment: this.props.inputForecastEventComment, inputForecastEventCurrency: this.props.inputForecastEventCurrency, inputForecastEventDate: this.props.inputForecastEventDate, inputForecastEventEmail: this.props.inputForecastEventEmail, inputForecastEventPossibility: this.props.inputForecastEventPossibility, inputForecastEventSum: this.props.inputForecastEventSum, inputForecastEventType: this.props.inputForecastEventType, inputFullRepayment: this.props.inputFullRepayment, inputPaymentScheduleFilterOperCodeCred: this.props.inputPaymentScheduleFilterOperCodeCred, inputPaymentScheduleFilterOperCodeProc: this.props.inputPaymentScheduleFilterOperCodeProc, inputPaymentScheduleFilterOperCodeOther: this.props.inputPaymentScheduleFilterOperCodeOther, inputPaymentScheduleFilterOperCodeCredApplied: this.props.inputPaymentScheduleFilterOperCodeCredApplied, inputPaymentScheduleFilterOperCodeProcApplied: this.props.inputPaymentScheduleFilterOperCodeProcApplied, inputPaymentScheduleFilterOperCodeOtherApplied: this.props.inputPaymentScheduleFilterOperCodeOtherApplied, inputPaymentScheduleFilterOperCodeCredOld: this.props.inputPaymentScheduleFilterOperCodeCredOld, inputPaymentScheduleFilterOperCodeProcOld: this.props.inputPaymentScheduleFilterOperCodeProcOld, inputPaymentScheduleFilterOperCodeOtherOld: this.props.inputPaymentScheduleFilterOperCodeOtherOld, inputPaymentScheduleFilterPeriodEnd: this.props.inputPaymentScheduleFilterPeriodEnd, inputPaymentScheduleFilterPeriodStart: this.props.inputPaymentScheduleFilterPeriodStart, inputPaymentScheduleFilterPeriodEndApplied: this.props.inputPaymentScheduleFilterPeriodEndApplied, inputPaymentScheduleFilterPeriodStartApplied: this.props.inputPaymentScheduleFilterPeriodStartApplied, inputPaymentScheduleFilterPeriodEndOld: this.props.inputPaymentScheduleFilterPeriodEndOld, inputPaymentScheduleFilterPeriodStartOld: this.props.inputPaymentScheduleFilterPeriodStartOld, inputPaymentScheduleFilterStatusExecPay: this.props.inputPaymentScheduleFilterStatusExecPay, inputPaymentScheduleFilterStatusForPay: this.props.inputPaymentScheduleFilterStatusForPay, inputPaymentScheduleFilterStatusNotPay: this.props.inputPaymentScheduleFilterStatusNotPay, inputPaymentScheduleFilterStatusExecPayApplied: this.props.inputPaymentScheduleFilterStatusExecPayApplied, inputPaymentScheduleFilterStatusForPayApplied: this.props.inputPaymentScheduleFilterStatusForPayApplied, inputPaymentScheduleFilterStatusNotPayApplied: this.props.inputPaymentScheduleFilterStatusNotPayApplied, inputPaymentScheduleFilterStatusExecPayOld: this.props.inputPaymentScheduleFilterStatusExecPayOld, inputPaymentScheduleFilterStatusForPayOld: this.props.inputPaymentScheduleFilterStatusForPayOld, inputPaymentScheduleFilterStatusNotPayOld: this.props.inputPaymentScheduleFilterStatusNotPayOld, inputValidationForecastEventComment: this.props.inputValidationForecastEventComment, inputValidationForecastEventCurrency: this.props.inputValidationForecastEventCurrency, inputValidationForecastEventEmail: this.props.inputValidationForecastEventEmail, inputValidationForecastEventPossibility: this.props.inputValidationForecastEventPossibility, inputValidationForecastEventSumm: this.props.inputValidationForecastEventSumm, inputValidationForecastEventType: this.props.inputValidationForecastEventType, isModalForecastEventSaveErrorVisible: this.props.isModalForecastEventSaveErrorVisible, isVisiblePopoverFilter: this.props.isVisiblePopoverFilter, isVisiblePopoverForecastEvent: this.props.isVisiblePopoverForecastEvent, isVisiblePopoverPaymentScheduleOperationTypeFilter: this.props.isVisiblePopoverPaymentScheduleOperationTypeFilter, isVisiblePopoverPaymentSchedulePeriodFilter: this.props.isVisiblePopoverPaymentSchedulePeriodFilter, isVisiblePopoverPaymentScheduleStatusFilter: this.props.isVisiblePopoverPaymentScheduleStatusFilter, navigateBack: this.props.navigateBack, navigateProductCreditBack: this.props.navigateProductCreditBack, navigateProductCreditDealBack: this.props.navigateProductCreditDealBack, navigateProductListBack: this.props.navigateProductListBack, navigateToForecastEventCurrencyPickerScreen: this.props.navigateToForecastEventCurrencyPickerScreen, navigateToForecastEventFilterPeriodScreen: this.props.navigateToForecastEventFilterPeriodScreen, navigateToForecastEventFilterTypePickerScreen: this.props.navigateToForecastEventFilterTypePickerScreen, navigateToForecastEventPossibilityPickerScreen: this.props.navigateToForecastEventPossibilityPickerScreen, navigateToForecastEventTypPickerScreen: this.props.navigateToForecastEventTypPickerScreen, navigateToForecastScreen: this.props.navigateToForecastScreen, navigateToPaymentScheduleScreen: this.props.navigateToPaymentScheduleScreen, navigateToPeriodTypeCustomScreen: this.props.navigateToPeriodTypeCustomScreen, newForecastEventSaveError: this.props.newForecastEventSaveError, newForecastEventSaveInProgress: this.props.newForecastEventSaveInProgress, performCancelEditForecastEvent: this.props.performCancelEditForecastEvent, performChangeTab: this.props.performChangeTab, performContainerReset: this.props.performContainerReset, performCustomerOpen: this.props.performCustomerOpen, performFillDefaultValuesAndShowCreateEventPopup: this.props.performFillDefaultValuesAndShowCreateEventPopup, performFilterApply: this.props.performFilterApply, performFilterCreateEventPopupReset: this.props.performFilterCreateEventPopupReset, performFilterCustomDateApply: this.props.performFilterCustomDateApply, performFilterEventTypeReset: this.props.performFilterEventTypeReset, performFilterPeriodReset: this.props.performFilterPeriodReset, performFilterReset: this.props.performFilterReset, performForecastEventDelete: this.props.performForecastEventDelete, performForecastEventSave: this.props.performForecastEventSave, performForecastEventsListFlush: this.props.performForecastEventsListFlush, performHideModalForecastEventSaveError: this.props.performHideModalForecastEventSaveError, performInputFilterForecastEventType: this.props.performInputFilterForecastEventType, performInputFilterPeriodEnd: this.props.performInputFilterPeriodEnd, performInputFilterPeriodStart: this.props.performInputFilterPeriodStart, performInputFilterPeriodType: this.props.performInputFilterPeriodType, performInputForecastEventComment: this.props.performInputForecastEventComment, performInputForecastEventCurrency: this.props.performInputForecastEventCurrency, performInputForecastEventDate: this.props.performInputForecastEventDate, performInputForecastEventEmail: this.props.performInputForecastEventEmail, performInputForecastEventPossibility: this.props.performInputForecastEventPossibility, performInputForecastEventSum: this.props.performInputForecastEventSum, performInputForecastEventType: this.props.performInputForecastEventType, performInputFullRepayment: this.props.performInputFullRepayment, performinputPaymentScheduleFilterOperCodeCred: this.props.performinputPaymentScheduleFilterOperCodeCred, performinputPaymentScheduleFilterOperCodeProc: this.props.performinputPaymentScheduleFilterOperCodeProc, performinputPaymentScheduleFilterOperCodeOther: this.props.performinputPaymentScheduleFilterOperCodeOther, performInputPaymentScheduleFilterPeriodEnd: this.props.performInputPaymentScheduleFilterPeriodEnd, performInputPaymentScheduleFilterPeriodStart: this.props.performInputPaymentScheduleFilterPeriodStart, performinputPaymentScheduleFilterStatusExecPay: this.props.performinputPaymentScheduleFilterStatusExecPay, performinputPaymentScheduleFilterStatusForPay: this.props.performinputPaymentScheduleFilterStatusForPay, performinputPaymentScheduleFilterStatusNotPay: this.props.performinputPaymentScheduleFilterStatusNotPay, performPopoverFilterHide: this.props.performPopoverFilterHide, performPopoverFilterShow: this.props.performPopoverFilterShow, performPopoverForecastEventHide: this.props.performPopoverForecastEventHide, performPopoverForecastEventShow: this.props.performPopoverForecastEventShow, performPopoverPaymentScheduleOperationTypeFilterHide: this.props.performPopoverPaymentScheduleOperationTypeFilterHide, performPopoverPaymentScheduleOperationTypeFilterShow: this.props.performPopoverPaymentScheduleOperationTypeFilterShow, performPopoverPaymentSchedulePeriodFilterHide: this.props.performPopoverPaymentSchedulePeriodFilterHide, performPopoverPaymentSchedulePeriodFilterShow: this.props.performPopoverPaymentSchedulePeriodFilterShow, performPopoverPaymentSchedulePeriodSwitchDatePicker: this.props.performPopoverPaymentSchedulePeriodSwitchDatePicker, performPopoverPaymentScheduleStatusFilterHide: this.props.performPopoverPaymentScheduleStatusFilterHide, performPopoverPaymentScheduleStatusFilterShow: this.props.performPopoverPaymentScheduleStatusFilterShow, performRefreshForecast: this.props.performRefreshForecast, performRepeatForecastEventSave: this.props.performRepeatForecastEventSave, performSaveEditForecastEvent: this.props.performSaveEditForecastEvent, productContextMode: this.props.productContextMode, performOpenForecastEventDetails: this.props.performOpenForecastEventDetails, productListAgreementStatus: this.props.productListAgreementStatus, currentDeal: this.props.currentDeal, performCustomerOpenExecute: this.props.performCustomerOpenExecute, navigateToProductForecastEventInfoScreen: this.props.navigateToProductForecastEventInfoScreen, performForecastEventCreate: this.props.performForecastEventCreate, performForecastEventUpdate: this.props.performForecastEventUpdate, performPrognosticEventCreate: this.props.performPrognosticEventCreate, performPrognosticEventUpdate: this.props.performPrognosticEventUpdate, performPrognosticEventDetail: this.props.performPrognosticEventDetail, isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: this.props.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker, testID: 'test-id-container-ProductCredit', covenantListFetching: this.props.covenantListFetching, covenantListFetchingError: this.props.covenantListFetchingError, navigateToCovenantListPage: this.props.navigateToCovenantListPage, productCovenantList: this.props.productCovenantList, performCallGetProductCovenantListCacheReset: this.props.performCallGetProductCovenantListCacheReset, paymentScheduleList: this.props.paymentScheduleList, paymentScheduleListFiltered: this.props.paymentScheduleListFiltered, paymentScheduleListFetching: this.props.paymentScheduleListFetching, paymentScheduleListLoadMoreFetching: this.props.paymentScheduleListLoadMoreFetching, paymentScheduleListError: this.props.paymentScheduleListError, paymentScheduleListCachedDate: this.props.paymentScheduleListCachedDate, performPaymentScheduleListFlush: this.props.performPaymentScheduleListFlush, performPaymentScheduleFilterPeriodSave: this.props.performPaymentScheduleFilterPeriodSave, performPaymentScheduleFilterPeriodSetDefault: this.props.performPaymentScheduleFilterPeriodSetDefault, performPaymentScheduleFilterOperationTypeSave: this.props.performPaymentScheduleFilterOperationTypeSave, performPaymentScheduleFilterStatusSave: this.props.performPaymentScheduleFilterStatusSave, performPaymentScheduleLoadMore: this.props.performPaymentScheduleLoadMore, performPaymentScheduleAlertShow: this.props.performPaymentScheduleAlertShow, performPaymentScheduleAlertHide: this.props.performPaymentScheduleAlertHide, isVisiblePaymentScheduleRefreshModalAlert: this.props.isVisiblePaymentScheduleRefreshModalAlert, performPaymentScheduleFilterPeriodReset: this.props.performPaymentScheduleFilterPeriodReset, performPaymentScheduleFilterOperationTypeReset: this.props.performPaymentScheduleFilterOperationTypeReset, performPaymentScheduleFilterStatusReset: this.props.performPaymentScheduleFilterStatusReset, paymentScheduleAlternativeScenariosTitle: this.props.paymentScheduleAlternativeScenariosTitle, paymentScheduleAlternativeScenariosMessage: this.props.paymentScheduleAlternativeScenariosMessage, paymentScheduleAlertViewIsVisible: this.props.paymentScheduleAlertViewIsVisible, performPaymentScheduleAlertViewHandleOk: this.props.performPaymentScheduleAlertViewHandleOk, performPaymentScheduleAlertViewHandleCancel: this.props.performPaymentScheduleAlertViewHandleCancel, paymentScheduleAlternativeScenariosType: this.props.paymentScheduleAlternativeScenariosType, performPaymentScheduleErrorShow: this.props.performPaymentScheduleErrorShow, performPaymentScheduleErrorHide: this.props.performPaymentScheduleErrorHide, performPaymentScheduleListRefresh: this.props.performPaymentScheduleListRefresh, paymentScheduleErrorModalIsVisible: this.props.paymentScheduleErrorModalIsVisible, performPaymentScheduleErrorViewHandleRepeat: this.props.performPaymentScheduleErrorViewHandleRepeat }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCreditProduct: state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
        currentForecastEvent: state.user.mrmkmcibCRM.reducerProductCredit.currentForecastEvent,
        currentTab: state.user.mrmkmcibCRM.reducerProductCredit.currentTab,
        forecastEventList: state.user.mrmkmcibCRM.reducerProductCredit.forecastEventList,
        forecastEventListCachedDate: state.user.mrmkmcibCRM.reducerProductCredit.forecastEventListCachedDate,
        forecastEventListError: state.user.mrmkmcibCRM.reducerProductCredit.forecastEventListError ||
            state.user.mrmkmcibCRM.reducerCustomer.forecastDealListError,
        forecastEventListFetching: state.user.mrmkmcibCRM.reducerProductCredit.forecastEventListFetching ||
            state.user.mrmkmcibCRM.reducerCustomer.forecastDealListFetching,
        forecastEventListFiltered: state.user.mrmkmcibCRM.reducerProductCredit.forecastEventListFiltered,
        inputActiveFilterForecastEventType: state.user.mrmkmcibCRM.reducerProductCredit.inputActiveFilterForecastEventType,
        inputActiveFilterPeriodEnd: state.user.mrmkmcibCRM.reducerProductCredit.inputActiveFilterPeriodEnd,
        inputActiveFilterPeriodStart: state.user.mrmkmcibCRM.reducerProductCredit.inputActiveFilterPeriodStart,
        inputActiveFilterPeriodType: state.user.mrmkmcibCRM.reducerProductCredit.inputActiveFilterPeriodType,
        inputFilterForecastEventType: state.user.mrmkmcibCRM.reducerProductCredit.inputFilterForecastEventType,
        inputFilterPeriodEnd: state.user.mrmkmcibCRM.reducerProductCredit.inputFilterPeriodEnd,
        inputFilterPeriodStart: state.user.mrmkmcibCRM.reducerProductCredit.inputFilterPeriodStart,
        inputFilterPeriodType: state.user.mrmkmcibCRM.reducerProductCredit.inputFilterPeriodType,
        inputForecastEventComment: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventComment,
        inputForecastEventCurrency: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventCurrency,
        inputForecastEventDate: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventDate,
        inputForecastEventEmail: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventEmail,
        inputForecastEventPossibility: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventPossibility,
        inputForecastEventSum: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventSum,
        inputForecastEventType: state.user.mrmkmcibCRM.reducerProductCredit.inputForecastEventType,
        inputFullRepayment: state.user.mrmkmcibCRM.reducerProductCredit.inputFullRepayment,
        inputPaymentScheduleFilterOperCodeCred: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeCred,
        inputPaymentScheduleFilterOperCodeProc: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeProc,
        inputPaymentScheduleFilterOperCodeOther: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeOther,
        inputPaymentScheduleFilterOperCodeCredApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeCredApplied,
        inputPaymentScheduleFilterOperCodeProcApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeProcApplied,
        inputPaymentScheduleFilterOperCodeOtherApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeOtherApplied,
        inputPaymentScheduleFilterOperCodeCredOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeCredOld,
        inputPaymentScheduleFilterOperCodeProcOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeProcOld,
        inputPaymentScheduleFilterOperCodeOtherOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterOperCodeOtherOld,
        inputPaymentScheduleFilterPeriodEnd: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterPeriodEnd,
        inputPaymentScheduleFilterPeriodStart: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterPeriodStart,
        inputPaymentScheduleFilterPeriodEndApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterPeriodEndApplied,
        inputPaymentScheduleFilterPeriodStartApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterPeriodStartApplied,
        inputPaymentScheduleFilterPeriodEndOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterPeriodEndOld,
        inputPaymentScheduleFilterPeriodStartOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterPeriodStartOld,
        inputPaymentScheduleFilterStatusExecPay: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusExecPay,
        inputPaymentScheduleFilterStatusForPay: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusForPay,
        inputPaymentScheduleFilterStatusNotPay: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusNotPay,
        inputPaymentScheduleFilterStatusExecPayApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusExecPayApplied,
        inputPaymentScheduleFilterStatusForPayApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusForPayApplied,
        inputPaymentScheduleFilterStatusNotPayApplied: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusNotPayApplied,
        inputPaymentScheduleFilterStatusExecPayOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusExecPayOld,
        inputPaymentScheduleFilterStatusForPayOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusForPayOld,
        inputPaymentScheduleFilterStatusNotPayOld: state.user.mrmkmcibCRM.reducerProductCredit.inputPaymentScheduleFilterStatusNotPayOld,
        inputValidationForecastEventComment: state.user.mrmkmcibCRM.reducerProductCredit.inputValidationForecastEventComment,
        inputValidationForecastEventCurrency: state.user.mrmkmcibCRM.reducerProductCredit.inputValidationForecastEventCurrency,
        inputValidationForecastEventEmail: state.user.mrmkmcibCRM.reducerProductCredit.inputValidationForecastEventEmail,
        inputValidationForecastEventPossibility: state.user.mrmkmcibCRM.reducerProductCredit.inputValidationForecastEventPossibility,
        inputValidationForecastEventSumm: state.user.mrmkmcibCRM.reducerProductCredit.inputValidationForecastEventSumm,
        inputValidationForecastEventType: state.user.mrmkmcibCRM.reducerProductCredit.inputValidationForecastEventType,
        isModalForecastEventSaveErrorVisible: state.user.mrmkmcibCRM.reducerProductCredit.isModalForecastEventSaveErrorVisible,
        isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: state.user.mrmkmcibCRM.reducerProductCredit.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker,
        isVisiblePopoverFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverFilter,
        isVisiblePopoverForecastEvent: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverForecastEvent,
        isVisiblePopoverPaymentScheduleOperationTypeFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverPaymentScheduleOperationTypeFilter,
        isVisiblePopoverPaymentSchedulePeriodFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverPaymentSchedulePeriodFilter,
        isVisiblePopoverPaymentScheduleStatusFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverPaymentScheduleStatusFilter,
        newForecastEventSaveError: state.user.mrmkmcibCRM.reducerProductCredit.newForecastEventSaveError,
        newForecastEventSaveInProgress: state.user.mrmkmcibCRM.reducerProductCredit.newForecastEventSaveInProgress,
        covenantListFetching: state.user.mrmkmcibCRM.reducerProductCredit.covenantListFetching,
        covenantListFetchingError: state.user.mrmkmcibCRM.reducerProductCredit.covenantListFetchingError,
        productCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.productCovenantList,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode,
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,
        currentDeal: state.user.mrmkmcibCRM.reducerProductList.currentDeal,
        paymentScheduleList: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleList,
        paymentScheduleListFiltered: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleListFiltered,
        paymentScheduleListFetching: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleListFetching,
        paymentScheduleListLoadMoreFetching: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleListLoadMoreFetching,
        paymentScheduleListError: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleListError,
        paymentScheduleListCachedDate: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleListCachedDate,
        isVisiblePaymentScheduleRefreshModalAlert: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePaymentScheduleRefreshModalAlert,
        paymentScheduleAlternativeScenariosTitle: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlternativeScenariosTitle,
        paymentScheduleAlternativeScenariosMessage: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlternativeScenariosMessage,
        paymentScheduleAlertViewIsVisible: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlertViewIsVisible,
        paymentScheduleAlternativeScenariosType: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlternativeScenariosType,
        paymentScheduleErrorModalIsVisible: state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleErrorModalIsVisible,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performChangeTab: (index, value) => {
            dispatch(thunkProductCredit.performChangeTab(index, value));
        },
        navigateToForecastScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastScreen());
        },
        navigateToPaymentScheduleScreen: () => {
            dispatch(thunkProductCredit.navigateToPaymentScheduleScreen());
        },
        navigateProductCreditBack: () => {
            dispatch(thunkProductCredit.navigateProductCreditBack());
        },
        navigateProductCreditDealBack: () => {
            dispatch(thunkProductCredit.navigateProductCreditDealBack());
        },
        performPopoverForecastEventShow: (forecastEvent) => {
            dispatch(thunkProductCredit.performPopoverForecastEventShow(forecastEvent));
        },
        performPopoverForecastEventHide: () => {
            dispatch(thunkProductCredit.performPopoverForecastEventHide());
        },
        performCustomerOpen: (customer) => {
            dispatch(thunkProductCredit.performCustomerOpen(customer));
        },
        navigateToForecastEventFilterTypePickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventFilterTypePickerScreen());
        },
        navigateToForecastEventTypPickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventTypPickerScreen());
        },
        navigateToPeriodTypeCustomScreen: () => {
            dispatch(thunkProductCredit.navigateToPeriodTypeCustomScreen());
        },
        navigateToForecastEventFilterPeriodScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventFilterPeriodScreen());
        },
        performInputForecastEventType: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventType(value));
        },
        performInputForecastEventDate: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventDate(value));
        },
        performInputCreatePopupEventValidation: () => {
            dispatch(thunkProductCredit.performInputCreatePopupEventValidation());
        },
        navigateToForecastEventPossibilityPickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventPossibilityPickerScreen());
        },
        performInputForecastEventPossibility: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventPossibility(value));
        },
        navigateToForecastEventCurrencyPickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventCurrencyPickerScreen());
        },
        performInputForecastEventCurrency: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventCurrency(value));
        },
        performInputForecastEventSum: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventSum(value));
        },
        performInputFullRepayment: (value) => {
            dispatch(thunkProductCredit.performInputFullRepayment(value));
        },
        performInputForecastEventEmail: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventEmail(value));
        },
        performInputForecastEventComment: (value) => {
            dispatch(thunkProductCredit.performInputForecastEventComment(value));
        },
        performForecastEventsListFlush: () => {
            dispatch(thunkProductCredit.performForecastEventsListFlush());
        },
        performPopoverFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverFilterShow());
        },
        performPopoverFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverFilterHide());
        },
        performInputFilterForecastEventType: (value) => {
            dispatch(thunkProductCredit.performInputFilterForecastEventType(value));
        },
        performInputFilterPeriodType: (value) => {
            dispatch(thunkProductCredit.performInputFilterPeriodType(value));
        },
        performInputFilterPeriodStart: (value) => {
            dispatch(thunkProductCredit.performInputFilterPeriodStart(value));
        },
        performInputFilterPeriodEnd: (value) => {
            dispatch(thunkProductCredit.performInputFilterPeriodEnd(value));
        },
        performFilterCustomDateApply: () => {
            dispatch(thunkProductCredit.performFilterCustomDateApply());
        },
        performFilterApply: () => {
            dispatch(thunkProductCredit.performFilterApply());
        },
        performFillDefaultValuesAndShowCreateEventPopup: () => {
            dispatch(thunkProductCredit.performFillDefaultValuesAndShowCreateEventPopup());
        },
        performFilterCreateEventPopupReset: () => {
            dispatch(thunkProductCredit.performFilterCreateEventPopupReset());
        },
        performFilterReset: () => {
            dispatch(thunkProductCredit.performFilterReset());
        },
        performFilterPeriodReset: () => {
            dispatch(thunkProductCredit.performFilterPeriodReset());
        },
        performFilterEventTypeReset: () => {
            dispatch(thunkProductCredit.performFilterEventTypeReset());
        },
        performContainerReset: () => {
            dispatch(thunkProductCredit.performContainerReset());
        },
        navigateProductListBack: () => {
            dispatch(thunkProductList.navigateProductListBack());
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
        performRefreshForecast: () => {
            dispatch(thunkProductCredit.performRefreshForecast());
        },
        performHideModalForecastEventSaveError: () => {
            dispatch(thunkProductCredit.performHideModalForecastEventSaveError());
        },
        performCancelEditForecastEvent: () => {
            dispatch(thunkProductCredit.performCancelEditForecastEvent());
        },
        performSaveEditForecastEvent: () => {
            dispatch(thunkProductCredit.performSaveEditForecastEvent());
        },
        performForecastEventDelete: () => {
            dispatch(thunkProductCredit.performForecastEventDelete());
        },
        performOpenForecastEventDetails: (forecastEvent) => {
            dispatch(thunkProductCredit.performOpenForecastEventDetails(forecastEvent));
        },
        performCustomerOpenExecute: (customer) => {
            dispatch(thunkAppCRM.performCustomerOpenExecute(customer, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show));
        },
        navigateToProductForecastEventInfoScreen: (event) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event));
        },
        performPrognosticEventCreate: () => {
            dispatch(thunkProductCredit.performPrognosticEventCreate());
        },
        performPrognosticEventUpdate: (event) => {
            dispatch(thunkProductCredit.performPrognosticEventUpdate(event));
        },
        performPrognosticEventDetail: (event) => {
            dispatch(thunkProductCredit.performPrognosticEventDetail(event));
        },
        performForecastEventCreate: () => {
            dispatch(thunkProductCredit.performForecastEventCreate());
        },
        performForecastEventUpdate: (event) => {
            dispatch(thunkProductCredit.performForecastEventUpdate(event));
        },
        navigateToCovenantListPage: () => {
            dispatch(thunkProductCredit.navigateToCovenantListPage());
        },
        performPopoverPaymentScheduleOperationTypeFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleOperationTypeFilterHide());
        },
        performPopoverPaymentScheduleOperationTypeFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleOperationTypeFilterShow());
        },
        performPopoverPaymentSchedulePeriodFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodFilterHide());
        },
        performPopoverPaymentSchedulePeriodFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodFilterShow());
        },
        performPopoverPaymentScheduleStatusFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleStatusFilterHide());
        },
        performPopoverPaymentScheduleStatusFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleStatusFilterShow());
        },
        performInputPaymentScheduleFilterPeriodStart: (value) => {
            dispatch(thunkProductCredit.performInputPaymentScheduleFilterPeriodStart(value));
        },
        performPopoverPaymentSchedulePeriodSwitchDatePicker: (value) => {
            dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodSwitchDatePicker(value));
        },
        performInputPaymentScheduleFilterPeriodEnd: (value) => {
            dispatch(thunkProductCredit.performInputPaymentScheduleFilterPeriodEnd(value));
        },
        performinputPaymentScheduleFilterStatusExecPay: (value) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterStatusExecPay(value));
        },
        performinputPaymentScheduleFilterStatusNotPay: (value) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterStatusNotPay(value));
        },
        performinputPaymentScheduleFilterStatusForPay: (value) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterStatusForPay(value));
        },
        performinputPaymentScheduleFilterOperCodeOther: (value) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterOperCodeOther(value));
        },
        performinputPaymentScheduleFilterOperCodeProc: (value) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterOperCodeProc(value));
        },
        performinputPaymentScheduleFilterOperCodeCred: (value) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterOperCodeCred(value));
        },
        performPaymentScheduleListFlush: () => {
            dispatch(thunkProductCredit.performPaymentScheduleListFlush());
        },
        performPaymentScheduleFilterPeriodSave: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSave());
        },
        performPaymentScheduleFilterPeriodSetDefault: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetDefault());
        },
        performPaymentScheduleFilterOperationTypeSave: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeSave());
        },
        performPaymentScheduleFilterStatusSave: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterStatusSave());
        },
        performPaymentScheduleLoadMore: () => {
            dispatch(thunkProductCredit.performPaymentScheduleLoadMore());
        },
        performPaymentScheduleFilterPeriodReset: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodReset());
        },
        performPaymentScheduleFilterOperationTypeReset: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeReset());
        },
        performPaymentScheduleFilterStatusReset: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterStatusReset());
        },
        performCallGetProductCovenantListCacheReset: () => {
            dispatch(thunkProductCredit.performCallGetProductCovenantListCacheReset());
        },
        performPaymentScheduleAlertViewHandleOk: () => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertViewHandleOk());
        },
        performPaymentScheduleAlertViewHandleCancel: () => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertViewHandleCancel());
        },
        performPaymentScheduleAlertShow: (paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle = null) => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertShow(paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle));
        },
        performPaymentScheduleAlertHide: () => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertHide());
        },
        performPaymentScheduleErrorShow: (paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle = null) => {
            dispatch(thunkProductCredit.performPaymentScheduleErrorShow(paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle));
        },
        performPaymentScheduleErrorHide: () => {
            dispatch(thunkProductCredit.performPaymentScheduleErrorHide());
        },
        performPaymentScheduleListRefresh: () => {
            dispatch(thunkProductCredit.performPaymentScheduleListRefresh());
        },
        performPaymentScheduleErrorViewHandleRepeat: () => {
            dispatch(thunkProductCredit.performPaymentScheduleErrorViewHandleRepeat());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductCredit);
//# sourceMappingURL=ContainerProductCredit.js.map