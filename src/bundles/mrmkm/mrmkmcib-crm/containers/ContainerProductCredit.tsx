/*
 * Created by Burnaev M.U.
 */

import React from 'react'
import {connect} from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsAppProductList from "../models/ModelsProductList";
import * as ModelsProductCredit from "../models/ModelsProductCredit"

import ViewProductCredit from '../components/ViewProductCredit'
import * as ModelState from "../models/Models"

import * as Utils from "../common/Util"


/*
 * Container "ProductCredit". Credit product detail information screen.
 */
class ContainerProductCredit extends React.Component<IProductCreditProps, any> {

    constructor(props: IProductCreditProps, context: any) {
        super(props, context);


    }

    public render() {
        return (

            <ViewProductCredit
                classifierDictionary={this.props.classifierDictionary}
                currentCreditProduct={this.props.currentCreditProduct}
                currentCustomerManaged={this.props.currentCustomerManaged}
                currentExchangePerson={this.props.currentExchangePerson}
                currentForecastEvent={this.props.currentForecastEvent}
                currentTab={this.props.currentTab}
                forecastEventList={this.props.forecastEventList}
                forecastEventListCachedDate={this.props.forecastEventListCachedDate}
                forecastEventListError={this.props.forecastEventListError}
                forecastEventListFetching={this.props.forecastEventListFetching}
                forecastEventListFiltered={this.props.forecastEventListFiltered}
                inputActiveFilterForecastEventType={this.props.inputActiveFilterForecastEventType}
                inputActiveFilterPeriodEnd={this.props.inputActiveFilterPeriodEnd}
                inputActiveFilterPeriodStart={this.props.inputActiveFilterPeriodStart}
                inputActiveFilterPeriodType={this.props.inputActiveFilterPeriodType}
                inputFilterForecastEventType={this.props.inputFilterForecastEventType}
                inputFilterPeriodEnd={this.props.inputFilterPeriodEnd}
                inputFilterPeriodStart={this.props.inputFilterPeriodStart}
                inputFilterPeriodType={this.props.inputFilterPeriodType}
                inputForecastEventComment={this.props.inputForecastEventComment}
                inputForecastEventCurrency={this.props.inputForecastEventCurrency}
                inputForecastEventDate={this.props.inputForecastEventDate}
                inputForecastEventEmail={this.props.inputForecastEventEmail}
                inputForecastEventPossibility={this.props.inputForecastEventPossibility}
                inputForecastEventSum={this.props.inputForecastEventSum}
                inputForecastEventType={this.props.inputForecastEventType}
                inputFullRepayment={this.props.inputFullRepayment}
                inputPaymentScheduleFilterOperCodeCred={this.props.inputPaymentScheduleFilterOperCodeCred}
                inputPaymentScheduleFilterOperCodeProc={this.props.inputPaymentScheduleFilterOperCodeProc}
                inputPaymentScheduleFilterOperCodeOther={this.props.inputPaymentScheduleFilterOperCodeOther}
				inputPaymentScheduleFilterOperCodeCredApplied={this.props.inputPaymentScheduleFilterOperCodeCredApplied}
				inputPaymentScheduleFilterOperCodeProcApplied={this.props.inputPaymentScheduleFilterOperCodeProcApplied}
				inputPaymentScheduleFilterOperCodeOtherApplied={this.props.inputPaymentScheduleFilterOperCodeOtherApplied}
				inputPaymentScheduleFilterOperCodeCredOld={this.props.inputPaymentScheduleFilterOperCodeCredOld}
				inputPaymentScheduleFilterOperCodeProcOld={this.props.inputPaymentScheduleFilterOperCodeProcOld}
				inputPaymentScheduleFilterOperCodeOtherOld={this.props.inputPaymentScheduleFilterOperCodeOtherOld}
                inputPaymentScheduleFilterPeriodEnd={this.props.inputPaymentScheduleFilterPeriodEnd}
                inputPaymentScheduleFilterPeriodStart={this.props.inputPaymentScheduleFilterPeriodStart}
                inputPaymentScheduleFilterPeriodEndApplied={this.props.inputPaymentScheduleFilterPeriodEndApplied}
                inputPaymentScheduleFilterPeriodStartApplied={this.props.inputPaymentScheduleFilterPeriodStartApplied}
				inputPaymentScheduleFilterPeriodEndOld={this.props.inputPaymentScheduleFilterPeriodEndOld}
				inputPaymentScheduleFilterPeriodStartOld={this.props.inputPaymentScheduleFilterPeriodStartOld}
                inputPaymentScheduleFilterStatusExecPay={this.props.inputPaymentScheduleFilterStatusExecPay}
                inputPaymentScheduleFilterStatusForPay={this.props.inputPaymentScheduleFilterStatusForPay}
                inputPaymentScheduleFilterStatusNotPay={this.props.inputPaymentScheduleFilterStatusNotPay}
				inputPaymentScheduleFilterStatusExecPayApplied={this.props.inputPaymentScheduleFilterStatusExecPayApplied}
				inputPaymentScheduleFilterStatusForPayApplied={this.props.inputPaymentScheduleFilterStatusForPayApplied}
				inputPaymentScheduleFilterStatusNotPayApplied={this.props.inputPaymentScheduleFilterStatusNotPayApplied}
				inputPaymentScheduleFilterStatusExecPayOld={this.props.inputPaymentScheduleFilterStatusExecPayOld}
				inputPaymentScheduleFilterStatusForPayOld={this.props.inputPaymentScheduleFilterStatusForPayOld}
				inputPaymentScheduleFilterStatusNotPayOld={this.props.inputPaymentScheduleFilterStatusNotPayOld}
                inputValidationForecastEventComment={this.props.inputValidationForecastEventComment}
                inputValidationForecastEventCurrency={this.props.inputValidationForecastEventCurrency}
                inputValidationForecastEventEmail={this.props.inputValidationForecastEventEmail}
                inputValidationForecastEventPossibility={this.props.inputValidationForecastEventPossibility}
                inputValidationForecastEventSumm={this.props.inputValidationForecastEventSumm}
                inputValidationForecastEventType={this.props.inputValidationForecastEventType}
                isModalForecastEventSaveErrorVisible={this.props.isModalForecastEventSaveErrorVisible}
                isVisiblePopoverFilter={this.props.isVisiblePopoverFilter}
                isVisiblePopoverForecastEvent={this.props.isVisiblePopoverForecastEvent}
                isVisiblePopoverPaymentScheduleOperationTypeFilter={this.props.isVisiblePopoverPaymentScheduleOperationTypeFilter}
                isVisiblePopoverPaymentSchedulePeriodFilter={this.props.isVisiblePopoverPaymentSchedulePeriodFilter}
                isVisiblePopoverPaymentScheduleStatusFilter={this.props.isVisiblePopoverPaymentScheduleStatusFilter}
                navigateBack={this.props.navigateBack}
                navigateProductCreditBack={this.props.navigateProductCreditBack}
                navigateProductCreditDealBack={this.props.navigateProductCreditDealBack}
                navigateProductListBack={this.props.navigateProductListBack}

                navigateToForecastEventCurrencyPickerScreen={this.props.navigateToForecastEventCurrencyPickerScreen}
                navigateToForecastEventFilterPeriodScreen={this.props.navigateToForecastEventFilterPeriodScreen}
                navigateToForecastEventFilterTypePickerScreen={this.props.navigateToForecastEventFilterTypePickerScreen}
                navigateToForecastEventPossibilityPickerScreen={this.props.navigateToForecastEventPossibilityPickerScreen}
                navigateToForecastEventTypPickerScreen={this.props.navigateToForecastEventTypPickerScreen}
                navigateToForecastScreen={this.props.navigateToForecastScreen}
                navigateToPaymentScheduleScreen={this.props.navigateToPaymentScheduleScreen}
                navigateToPeriodTypeCustomScreen={this.props.navigateToPeriodTypeCustomScreen}
                newForecastEventSaveError={this.props.newForecastEventSaveError}
                newForecastEventSaveInProgress={this.props.newForecastEventSaveInProgress}
                performCancelEditForecastEvent={this.props.performCancelEditForecastEvent}
                performChangeTab={this.props.performChangeTab}
                performContainerReset={this.props.performContainerReset}
                performCustomerOpen={this.props.performCustomerOpen}
                performFillDefaultValuesAndShowCreateEventPopup={this.props.performFillDefaultValuesAndShowCreateEventPopup}
                performFilterApply={this.props.performFilterApply}
                performFilterCreateEventPopupReset={this.props.performFilterCreateEventPopupReset}
                performFilterCustomDateApply={this.props.performFilterCustomDateApply}
                performFilterEventTypeReset={this.props.performFilterEventTypeReset}
                performFilterPeriodReset={this.props.performFilterPeriodReset}
                performFilterReset={this.props.performFilterReset}
                performForecastEventDelete={this.props.performForecastEventDelete}
                performForecastEventSave={this.props.performForecastEventSave}
                performForecastEventsListFlush={this.props.performForecastEventsListFlush}
                performHideModalForecastEventSaveError={this.props.performHideModalForecastEventSaveError}
                performInputFilterForecastEventType={this.props.performInputFilterForecastEventType}
                performInputFilterPeriodEnd={this.props.performInputFilterPeriodEnd}
                performInputFilterPeriodStart={this.props.performInputFilterPeriodStart}
                performInputFilterPeriodType={this.props.performInputFilterPeriodType}
                performInputForecastEventComment={this.props.performInputForecastEventComment}
                performInputForecastEventCurrency={this.props.performInputForecastEventCurrency}
                performInputForecastEventDate={this.props.performInputForecastEventDate}
                performInputForecastEventEmail={this.props.performInputForecastEventEmail}
                performInputForecastEventPossibility={this.props.performInputForecastEventPossibility}
                performInputForecastEventSum={this.props.performInputForecastEventSum}
                performInputForecastEventType={this.props.performInputForecastEventType}
                performInputFullRepayment={this.props.performInputFullRepayment}
                performinputPaymentScheduleFilterOperCodeCred={this.props.performinputPaymentScheduleFilterOperCodeCred}
                performinputPaymentScheduleFilterOperCodeProc={this.props.performinputPaymentScheduleFilterOperCodeProc}
                performinputPaymentScheduleFilterOperCodeOther={this.props.performinputPaymentScheduleFilterOperCodeOther}
                performInputPaymentScheduleFilterPeriodEnd={this.props.performInputPaymentScheduleFilterPeriodEnd}
                performInputPaymentScheduleFilterPeriodStart={this.props.performInputPaymentScheduleFilterPeriodStart}
                performinputPaymentScheduleFilterStatusExecPay={this.props.performinputPaymentScheduleFilterStatusExecPay}
                performinputPaymentScheduleFilterStatusForPay={this.props.performinputPaymentScheduleFilterStatusForPay}
                performinputPaymentScheduleFilterStatusNotPay={this.props.performinputPaymentScheduleFilterStatusNotPay}
                performPopoverFilterHide={this.props.performPopoverFilterHide}
                performPopoverFilterShow={this.props.performPopoverFilterShow}
                performPopoverForecastEventHide={this.props.performPopoverForecastEventHide}
                performPopoverForecastEventShow={this.props.performPopoverForecastEventShow}
                performPopoverPaymentScheduleOperationTypeFilterHide={this.props.performPopoverPaymentScheduleOperationTypeFilterHide}
                performPopoverPaymentScheduleOperationTypeFilterShow={this.props.performPopoverPaymentScheduleOperationTypeFilterShow}
                performPopoverPaymentSchedulePeriodFilterHide={this.props.performPopoverPaymentSchedulePeriodFilterHide}
                performPopoverPaymentSchedulePeriodFilterShow={this.props.performPopoverPaymentSchedulePeriodFilterShow}
                performPopoverPaymentSchedulePeriodSwitchDatePicker={this.props.performPopoverPaymentSchedulePeriodSwitchDatePicker}
                performPopoverPaymentScheduleStatusFilterHide={this.props.performPopoverPaymentScheduleStatusFilterHide}
                performPopoverPaymentScheduleStatusFilterShow={this.props.performPopoverPaymentScheduleStatusFilterShow}
                performRefreshForecast={this.props.performRefreshForecast}
                performRepeatForecastEventSave={this.props.performRepeatForecastEventSave}
                performSaveEditForecastEvent={this.props.performSaveEditForecastEvent}
                productContextMode={this.props.productContextMode}
                performOpenForecastEventDetails={this.props.performOpenForecastEventDetails}
                productListAgreementStatus={this.props.productListAgreementStatus}
                currentDeal={this.props.currentDeal}
                performCustomerOpenExecute={this.props.performCustomerOpenExecute}
                navigateToProductForecastEventInfoScreen={this.props.navigateToProductForecastEventInfoScreen}
                performForecastEventCreate={this.props.performForecastEventCreate}
                performForecastEventUpdate={this.props.performForecastEventUpdate}
                performPrognosticEventCreate={this.props.performPrognosticEventCreate}
                performPrognosticEventUpdate={this.props.performPrognosticEventUpdate}
                performPrognosticEventDetail={this.props.performPrognosticEventDetail}
                isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker={this.props.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker}
                testID={'test-id-container-ProductCredit'}

                covenantListFetching = {this.props.covenantListFetching}
                covenantListFetchingError = {this.props.covenantListFetchingError}
                navigateToCovenantListPage = {this.props.navigateToCovenantListPage}
                productCovenantList = {this.props.productCovenantList}
                performCallGetProductCovenantListCacheReset = {this.props.performCallGetProductCovenantListCacheReset}

                paymentScheduleList={this.props.paymentScheduleList}
                paymentScheduleListFiltered={this.props.paymentScheduleListFiltered}
                paymentScheduleListFetching={this.props.paymentScheduleListFetching}
                paymentScheduleListLoadMoreFetching={this.props.paymentScheduleListLoadMoreFetching}
                paymentScheduleListError={this.props.paymentScheduleListError}
                paymentScheduleListCachedDate={this.props.paymentScheduleListCachedDate}
                performPaymentScheduleListFlush={this.props.performPaymentScheduleListFlush}
                performPaymentScheduleFilterPeriodSave={this.props.performPaymentScheduleFilterPeriodSave}
                performPaymentScheduleFilterPeriodSetDefault={this.props.performPaymentScheduleFilterPeriodSetDefault}
                performPaymentScheduleFilterOperationTypeSave={this.props.performPaymentScheduleFilterOperationTypeSave}
                performPaymentScheduleFilterStatusSave={this.props.performPaymentScheduleFilterStatusSave}
                performPaymentScheduleLoadMore={this.props.performPaymentScheduleLoadMore}
                performPaymentScheduleAlertShow={this.props.performPaymentScheduleAlertShow}
                performPaymentScheduleAlertHide={this.props.performPaymentScheduleAlertHide}
                isVisiblePaymentScheduleRefreshModalAlert={this.props.isVisiblePaymentScheduleRefreshModalAlert}
                performPaymentScheduleFilterPeriodReset={this.props.performPaymentScheduleFilterPeriodReset}
                performPaymentScheduleFilterOperationTypeReset={this.props.performPaymentScheduleFilterOperationTypeReset}
                performPaymentScheduleFilterStatusReset={this.props.performPaymentScheduleFilterStatusReset}

                paymentScheduleAlternativeScenariosTitle={this.props.paymentScheduleAlternativeScenariosTitle}
                paymentScheduleAlternativeScenariosMessage={this.props.paymentScheduleAlternativeScenariosMessage}
                paymentScheduleAlertViewIsVisible={this.props.paymentScheduleAlertViewIsVisible}
                performPaymentScheduleAlertViewHandleOk={this.props.performPaymentScheduleAlertViewHandleOk}
                performPaymentScheduleAlertViewHandleCancel={this.props.performPaymentScheduleAlertViewHandleCancel}
                paymentScheduleAlternativeScenariosType={this.props.paymentScheduleAlternativeScenariosType}
                performPaymentScheduleErrorShow={this.props.performPaymentScheduleErrorShow}
                performPaymentScheduleErrorHide={this.props.performPaymentScheduleErrorHide}
                performPaymentScheduleListRefresh={this.props.performPaymentScheduleListRefresh}
                paymentScheduleErrorModalIsVisible={this.props.paymentScheduleErrorModalIsVisible}
                performPaymentScheduleErrorViewHandleRepeat={this.props.performPaymentScheduleErrorViewHandleRepeat}
            />
        )
    }
}

export interface IStateProps {
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCreditProduct: Models.CreditProduct,
    currentCustomerManaged: Models.CustomerManaged,
    currentExchangePerson: ModelsScheduler.Person,
    currentForecastEvent: Models.ForecastEvent,
    currentTab: Enums.ProductCreditTab,
    forecastEventList: Models.ForecastEventList,
    forecastEventListCachedDate: Date | null,
    forecastEventListError: Models.Error | null,
    forecastEventListFetching: boolean,
    forecastEventListFiltered: Models.ForecastEventList,
    inputActiveFilterForecastEventType: ModelsApp.Classifier | null,
    inputActiveFilterPeriodEnd: Date | null,
    inputActiveFilterPeriodStart: Date | null,
    inputActiveFilterPeriodType: Enums.ForecastPeriodType,
    inputFilterForecastEventType: ModelsApp.Classifier | null,
    inputFilterPeriodEnd: Date | null,
    inputFilterPeriodStart: Date | null,
    inputFilterPeriodType: Enums.ForecastPeriodType,
    inputForecastEventComment: string,
    inputForecastEventCurrency: ModelsApp.Classifier,
    inputForecastEventDate: Date | null,
    inputForecastEventEmail: string,
    inputForecastEventPossibility: number,
    inputForecastEventSum: string | null,
    inputForecastEventType: ModelsApp.Classifier | null,
    inputFullRepayment: boolean,
    inputPaymentScheduleFilterOperCodeCred: boolean,
    inputPaymentScheduleFilterOperCodeProc: boolean,
    inputPaymentScheduleFilterOperCodeOther: boolean,
	inputPaymentScheduleFilterOperCodeCredApplied: boolean,
	inputPaymentScheduleFilterOperCodeProcApplied: boolean,
	inputPaymentScheduleFilterOperCodeOtherApplied: boolean,
	inputPaymentScheduleFilterOperCodeCredOld: boolean,
	inputPaymentScheduleFilterOperCodeProcOld: boolean,
	inputPaymentScheduleFilterOperCodeOtherOld: boolean,
    inputPaymentScheduleFilterPeriodEnd: Date | null,
    inputPaymentScheduleFilterPeriodStart: Date | null,
    inputPaymentScheduleFilterPeriodEndApplied: Date | null,
    inputPaymentScheduleFilterPeriodStartApplied: Date | null,
	inputPaymentScheduleFilterPeriodEndOld: Date | null,
	inputPaymentScheduleFilterPeriodStartOld: Date | null,
    inputPaymentScheduleFilterStatusExecPay: boolean,
    inputPaymentScheduleFilterStatusForPay: boolean,
    inputPaymentScheduleFilterStatusNotPay: boolean,
	inputPaymentScheduleFilterStatusExecPayApplied: boolean,
	inputPaymentScheduleFilterStatusForPayApplied: boolean,
	inputPaymentScheduleFilterStatusNotPayApplied: boolean,
	inputPaymentScheduleFilterStatusExecPayOld: boolean,
	inputPaymentScheduleFilterStatusForPayOld: boolean,
	inputPaymentScheduleFilterStatusNotPayOld: boolean,
    inputValidationForecastEventComment: string | null,
    inputValidationForecastEventCurrency: string | null,
    inputValidationForecastEventEmail: string | null,
    inputValidationForecastEventPossibility: number | null,
    inputValidationForecastEventSumm: string | null,
    inputValidationForecastEventType: string | null,
    isModalForecastEventSaveErrorVisible: boolean,
    isVisiblePopoverFilter: boolean,
    isVisiblePopoverForecastEvent: boolean,
    isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: boolean,
    isVisiblePopoverPaymentScheduleOperationTypeFilter: boolean,
    isVisiblePopoverPaymentSchedulePeriodFilter: boolean,
    isVisiblePopoverPaymentScheduleStatusFilter: boolean,
    newForecastEventSaveError: Models.Error | null,
    newForecastEventSaveInProgress: boolean,
    productContextMode: Enums.ProductContextMode,

    covenantListFetching: boolean,
    covenantListFetchingError: Models.Error | null,
    productCovenantList: Models.ProductCovenantList,

    productListAgreementStatus: Enums.ProductListAgreementStatus,
    currentDeal: Models.ForecastDeal,
    paymentScheduleList: Models.PaymentScheduleList,
    paymentScheduleListFiltered: Models.PaymentScheduleList,
    paymentScheduleListFetching: boolean,
    paymentScheduleListLoadMoreFetching: boolean,
    paymentScheduleListError: Models.Error | null,
    paymentScheduleListCachedDate: Date | null,
    isVisiblePaymentScheduleRefreshModalAlert: boolean,
    paymentScheduleAlternativeScenariosTitle: string | null,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlertViewIsVisible: boolean,
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType | null,
    paymentScheduleErrorModalIsVisible:boolean,
}

export interface IDispatchProps {
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    navigateProductCreditBack: ModelsProductCredit.NAVIGATE_PRODUCT_CREDIT_BACK,
    navigateProductCreditDealBack: ModelsProductCredit.NAVIGATE_PRODUCT_CREDIT_DEAL_BACK,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,

    navigateToForecastEventCurrencyPickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN,
    navigateToForecastEventFilterPeriodCustomDateScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_CUSTOM_DATE_SCREEN,
    navigateToForecastEventFilterPeriodScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN,
    navigateToForecastEventFilterTypePickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN,
    navigateToForecastEventPossibilityPickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN,
    navigateToForecastEventTypPickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN,
    navigateToForecastScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_SCREEN,
    navigateToPaymentScheduleScreen: ModelsProductCredit.NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN,
    navigateToPeriodTypeCustomScreen: ModelsProductCredit.NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN,
    performCancelEditForecastEvent: ModelsProductCredit.PERFORM_CANCEL_EDIT_FORECAST_EVENT,
    performChangeTab: ModelsProductCredit.PERFORM_CHANGE_TAB,
    performContainerReset: ModelsProductCredit.PERFORM_CONTAINER_RESET,
    performFillDefaultValuesAndShowCreateEventPopup: ModelsProductCredit.PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP,
    performFilterApply: ModelsProductCredit.PERFORM_FILTER_APPLY,
    performFilterCreateEventPopupReset: ModelsProductCredit.PERFORM_CREATE_EVENT_POPUP_RESET,
    performFilterCustomDateApply: ModelsProductCredit.PERFORM_FILTER_CUSTOM_DATE_APPLY,
    performFilterEventTypeReset: ModelsProductCredit.PERFORM_FILTER_EVENT_TYPE_RESET,
    performFilterPeriodReset: ModelsProductCredit.PERFORM_FILTER_PERIOD_RESET,
    performFilterReset: ModelsProductCredit.PERFORM_FILTER_RESET,
    performForecastEventDelete: ModelsProductCredit.PERFORM_FORECAST_EVENT_DELETE,
    performForecastEventSave: ModelsProductCredit.PERFORM_FORECAST_EVENT_SAVE,
    performForecastEventsListFlush: ModelsProductCredit.PERFORM_FORECAST_EVENTS_LIST_FLUSH,
    performHideModalForecastEventSaveError: ModelsProductCredit.PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR,
    performInputFilterForecastEventType: ModelsProductCredit.PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE,
    performInputFilterPeriodEnd: ModelsProductCredit.PERFORM_INPUT_FILTER_PERIOD_END,
    performInputFilterPeriodStart: ModelsProductCredit.PERFORM_INPUT_FILTER_PERIOD_START,
    performInputFilterPeriodType: ModelsProductCredit.PERFORM_INPUT_FILTER_PERIOD_TYPE,
    performInputForecastEventComment: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_COMMENT,
    performInputForecastEventCurrency: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_CURRENCY,
    performInputForecastEventDate: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_DATE,
    performInputForecastEventEmail: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_EMAIL,
    performInputForecastEventPossibility: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY,
    performInputForecastEventSum: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_SUM,
    performInputForecastEventType: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_TYPE,
    performInputFullRepayment: ModelsProductCredit.PERFORM_INPUT_FULL_REPAYMENT,
    performinputPaymentScheduleFilterOperCodeCred: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT,
    performinputPaymentScheduleFilterOperCodeProc: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT,
    performinputPaymentScheduleFilterOperCodeOther: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT,
    performInputPaymentScheduleFilterPeriodEnd: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END,
    performInputPaymentScheduleFilterPeriodStart: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START,
    performinputPaymentScheduleFilterStatusExecPay: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID,
    performinputPaymentScheduleFilterStatusForPay: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY,
    performinputPaymentScheduleFilterStatusNotPay: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID,
    performPopoverFilterHide: ModelsProductCredit.PERFORM_POPOVER_FILTER_HIDE,
    performPopoverFilterShow: ModelsProductCredit.PERFORM_POPOVER_FILTER_SHOW,
    performPopoverForecastEventHide: ModelsProductCredit.PERFORM_POPOVER_FORECAST_EVENT_HIDE,
    performPopoverForecastEventShow: ModelsProductCredit.PERFORM_POPOVER_FORECAST_EVENT_SHOW,
    performPopoverPaymentScheduleOperationTypeFilterHide: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE,
    performPopoverPaymentScheduleOperationTypeFilterShow: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW,
    performPopoverPaymentSchedulePeriodFilterHide: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE,
    performPopoverPaymentSchedulePeriodFilterShow: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW,
    performPopoverPaymentSchedulePeriodSwitchDatePicker: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER,
    performPopoverPaymentScheduleStatusFilterHide: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE,
    performPopoverPaymentScheduleStatusFilterShow: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW,
    performRefreshForecast: ModelsProductCredit.PERFORM_REFRESH_FORECAST
    performRepeatForecastEventSave: ModelsProductCredit.PERFORM_REPEAT_FORECAST_EVENT_SAVE,

    navigateToCovenantListPage: ModelsProductCredit.PERFORM_NAVIGATE_TO_COVENANT_LIST_PAGE,
    performCallGetProductCovenantListCacheReset: ModelsProductCredit.PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET,


    performSaveEditForecastEvent: ModelsProductCredit.PERFORM_SAVE_EDIT_FORECAST_EVENT,
    performOpenForecastEventDetails: ModelsProductCredit.PERFORM_OPEN_FORECAST_EVENT_DETAILS,

    navigateToProductForecastEventInfo: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    performCustomerOpen: ModelsProductCredit.PERFORM_CUSTOMER_OPEN,
    performCustomerOpenExecute: ModelsAppCRM.PERFORM_CUSTOMER_OPEN_EXECUTE,
    navigateToProductForecastEventInfoScreen: ModelsAppProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN
    performPrognosticEventCreate: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_CREATE,
    performPrognosticEventUpdate: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_UPDATE,
    performPrognosticEventDetail: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_DETAIL,

    performForecastEventCreate: ModelsProductCredit.PERFORM_FORECAST_EVENT_CREATE,
    performForecastEventUpdate: ModelsProductCredit.PERFORM_FORECAST_EVENT_UPDATE,

    performPaymentScheduleListFlush: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH,
    performPaymentScheduleFilterPeriodSave: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE,
    performPaymentScheduleFilterPeriodSetDefault: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET,
    performPaymentScheduleFilterOperationTypeSave: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE,
    performPaymentScheduleFilterStatusSave: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE,
    performPaymentScheduleLoadMore: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_LOAD_MORE,
    performPaymentScheduleAlertHide: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE,
    performPaymentScheduleAlertShow: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW,
    performPaymentScheduleFilterPeriodReset: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET,
    performPaymentScheduleFilterOperationTypeReset: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_RESET,
    performPaymentScheduleFilterStatusReset: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_RESET,

    performPaymentScheduleAlertViewHandleOk: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK,
    performPaymentScheduleAlertViewHandleCancel: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL,
    performPaymentScheduleErrorShow: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW,
    performPaymentScheduleErrorHide: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE,
    performPaymentScheduleListRefresh: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH,
    performPaymentScheduleErrorViewHandleRepeat: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_VIEW_HANDLE_REPEAT,
}

export type IProductCreditProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
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
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        performChangeTab: (index: number, value: Enums.ProductCreditTab,) => {
            dispatch(thunkProductCredit.performChangeTab(index, value,))
        },
        navigateToForecastScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastScreen())
        },
        navigateToPaymentScheduleScreen: () => {
            dispatch(thunkProductCredit.navigateToPaymentScheduleScreen())
        },
        navigateProductCreditBack: () => {
            dispatch(thunkProductCredit.navigateProductCreditBack())
        },
        navigateProductCreditDealBack: () => {
            dispatch(thunkProductCredit.navigateProductCreditDealBack())
        },
        performPopoverForecastEventShow: (forecastEvent: Models.ForecastEvent,) => {
            dispatch(thunkProductCredit.performPopoverForecastEventShow(forecastEvent,))
        },
        performPopoverForecastEventHide: () => {
            dispatch(thunkProductCredit.performPopoverForecastEventHide())
        },
        performCustomerOpen: (customer: Models.Customer) => {
            dispatch(thunkProductCredit.performCustomerOpen(customer))
        },
        navigateToForecastEventFilterTypePickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventFilterTypePickerScreen())
        },
        navigateToForecastEventTypPickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventTypPickerScreen())
        },
        navigateToPeriodTypeCustomScreen: () => {
            dispatch(thunkProductCredit.navigateToPeriodTypeCustomScreen())
        },
        navigateToForecastEventFilterPeriodScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventFilterPeriodScreen())
        },
        performInputForecastEventType: (value: ModelsApp.Classifier) => {
            dispatch(thunkProductCredit.performInputForecastEventType(value))
        },
        performInputForecastEventDate: (value: Date | null) => {
            dispatch(thunkProductCredit.performInputForecastEventDate(value))
        },
        performInputCreatePopupEventValidation: () => {
            dispatch(thunkProductCredit.performInputCreatePopupEventValidation())
        },
        navigateToForecastEventPossibilityPickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventPossibilityPickerScreen())
        },
        performInputForecastEventPossibility: (value: number) => {
            dispatch(thunkProductCredit.performInputForecastEventPossibility(value))
        },
        navigateToForecastEventCurrencyPickerScreen: () => {
            dispatch(thunkProductCredit.navigateToForecastEventCurrencyPickerScreen())
        },
        performInputForecastEventCurrency: (value: ModelsApp.Classifier) => {
            dispatch(thunkProductCredit.performInputForecastEventCurrency(value))
        },
        performInputForecastEventSum: (value: string | null) => {
            dispatch(thunkProductCredit.performInputForecastEventSum(value))
        },
        performInputFullRepayment: (value: boolean) => {
            dispatch(thunkProductCredit.performInputFullRepayment(value))
        },
        performInputForecastEventEmail: (value: string) => {
            dispatch(thunkProductCredit.performInputForecastEventEmail(value))
        },
        performInputForecastEventComment: (value: string) => {
            dispatch(thunkProductCredit.performInputForecastEventComment(value))
        },
        performForecastEventsListFlush: () => {
            dispatch(thunkProductCredit.performForecastEventsListFlush())
        },
        performPopoverFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverFilterShow())
        },
        performPopoverFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverFilterHide())
        },
        performInputFilterForecastEventType: (value: ModelsApp.Classifier) => {
            dispatch(thunkProductCredit.performInputFilterForecastEventType(value))
        },
        performInputFilterPeriodType: (value: Enums.ForecastPeriodType) => {
            dispatch(thunkProductCredit.performInputFilterPeriodType(value))
        },
        performInputFilterPeriodStart: (value: Date | null) => {
            dispatch(thunkProductCredit.performInputFilterPeriodStart(value))
        },
        performInputFilterPeriodEnd: (value: Date | null) => {
            dispatch(thunkProductCredit.performInputFilterPeriodEnd(value))
        },
        performFilterCustomDateApply: () => {
            dispatch(thunkProductCredit.performFilterCustomDateApply())
        },
        performFilterApply: () => {
            dispatch(thunkProductCredit.performFilterApply())
        },
        performFillDefaultValuesAndShowCreateEventPopup: () => {
            dispatch(thunkProductCredit.performFillDefaultValuesAndShowCreateEventPopup())
        },
        performFilterCreateEventPopupReset: () => {
            dispatch(thunkProductCredit.performFilterCreateEventPopupReset())
        },
        performFilterReset: () => {
            dispatch(thunkProductCredit.performFilterReset())
        },
        performFilterPeriodReset: () => {
            dispatch(thunkProductCredit.performFilterPeriodReset())
        },
        performFilterEventTypeReset: () => {
            dispatch(thunkProductCredit.performFilterEventTypeReset())
        },
        performContainerReset: () => {
            dispatch(thunkProductCredit.performContainerReset())
        },
        navigateProductListBack: () => {
            dispatch(thunkProductList.navigateProductListBack())
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        },
        performRefreshForecast: () => {
            dispatch(thunkProductCredit.performRefreshForecast())
        },
        performHideModalForecastEventSaveError: () => {
            dispatch(thunkProductCredit.performHideModalForecastEventSaveError())
        },
        performCancelEditForecastEvent: () => {
            dispatch(thunkProductCredit.performCancelEditForecastEvent())
        },
        performSaveEditForecastEvent: () => {
            dispatch(thunkProductCredit.performSaveEditForecastEvent())
        },
        performForecastEventDelete: () => {
            dispatch(thunkProductCredit.performForecastEventDelete())
        },
        performOpenForecastEventDetails: (forecastEvent: Models.ForecastEvent) => {
            dispatch(thunkProductCredit.performOpenForecastEventDetails(forecastEvent))
        },
        performCustomerOpenExecute: (customer: Models.Customer) => {
            dispatch(thunkAppCRM.performCustomerOpenExecute(customer, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
        },
        navigateToProductForecastEventInfoScreen: (event: Models.ForecastEvent) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event))
        },

        performPrognosticEventCreate: () => {
            dispatch(thunkProductCredit.performPrognosticEventCreate())
        },
        performPrognosticEventUpdate: (event: Models.ForecastEvent) => {
            dispatch(thunkProductCredit.performPrognosticEventUpdate(event))
        },
        performPrognosticEventDetail: (event: Models.ForecastEvent) => {
            dispatch(thunkProductCredit.performPrognosticEventDetail(event))
        },

        performForecastEventCreate: () => {
            dispatch(thunkProductCredit.performForecastEventCreate())
        },
        performForecastEventUpdate: (event: Models.ForecastEvent) => {
            dispatch(thunkProductCredit.performForecastEventUpdate(event))
        },
        navigateToCovenantListPage: () => {
            dispatch(thunkProductCredit.navigateToCovenantListPage())
        },

        performPopoverPaymentScheduleOperationTypeFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleOperationTypeFilterHide())
        },
        performPopoverPaymentScheduleOperationTypeFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleOperationTypeFilterShow())
        },
        performPopoverPaymentSchedulePeriodFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodFilterHide())
        },
        performPopoverPaymentSchedulePeriodFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodFilterShow())
        },
        performPopoverPaymentScheduleStatusFilterHide: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleStatusFilterHide())
        },
        performPopoverPaymentScheduleStatusFilterShow: () => {
            dispatch(thunkProductCredit.performPopoverPaymentScheduleStatusFilterShow())
        },
        performInputPaymentScheduleFilterPeriodStart: (value: Date | null) => {
            dispatch(thunkProductCredit.performInputPaymentScheduleFilterPeriodStart(value))
        },
        performPopoverPaymentSchedulePeriodSwitchDatePicker: (value: boolean) => {
            dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodSwitchDatePicker(value))
        },
        performInputPaymentScheduleFilterPeriodEnd: (value: Date | null) => {
            dispatch(thunkProductCredit.performInputPaymentScheduleFilterPeriodEnd(value))
        },
        performinputPaymentScheduleFilterStatusExecPay: (value: boolean) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterStatusExecPay(value))
        },
        performinputPaymentScheduleFilterStatusNotPay: (value: boolean) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterStatusNotPay(value))
        },
        performinputPaymentScheduleFilterStatusForPay: (value: boolean) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterStatusForPay(value))
        },
        performinputPaymentScheduleFilterOperCodeOther: (value: boolean) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterOperCodeOther(value))
        },
        performinputPaymentScheduleFilterOperCodeProc: (value: boolean) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterOperCodeProc(value))
        },
        performinputPaymentScheduleFilterOperCodeCred: (value: boolean) => {
            dispatch(thunkProductCredit.performinputPaymentScheduleFilterOperCodeCred(value))
        },
        performPaymentScheduleListFlush: () => {
            dispatch(thunkProductCredit.performPaymentScheduleListFlush())
        },
        performPaymentScheduleFilterPeriodSave: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSave())
        },
        performPaymentScheduleFilterPeriodSetDefault: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetDefault())
        },
        performPaymentScheduleFilterOperationTypeSave: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeSave())
        },
        performPaymentScheduleFilterStatusSave: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterStatusSave())
        },
        performPaymentScheduleLoadMore: () => {
            dispatch(thunkProductCredit.performPaymentScheduleLoadMore())
        },
        performPaymentScheduleFilterPeriodReset: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodReset())
        },
        performPaymentScheduleFilterOperationTypeReset: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeReset())
        },
        performPaymentScheduleFilterStatusReset: () => {
            dispatch(thunkProductCredit.performPaymentScheduleFilterStatusReset())
        },
        performCallGetProductCovenantListCacheReset: () => {
            dispatch(thunkProductCredit.performCallGetProductCovenantListCacheReset())
        },
        performPaymentScheduleAlertViewHandleOk: () => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertViewHandleOk())
        },
        performPaymentScheduleAlertViewHandleCancel: () => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertViewHandleCancel())
        },
        performPaymentScheduleAlertShow: (
            paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
            paymentScheduleAlternativeScenariosMessage: string | null,
            paymentScheduleAlternativeScenariosTitle: string | null = null
        ) => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertShow(
                paymentScheduleAlternativeScenariosType,
                paymentScheduleAlternativeScenariosMessage,
                paymentScheduleAlternativeScenariosTitle
            ))
        },
        performPaymentScheduleAlertHide: () => {
            dispatch(thunkProductCredit.performPaymentScheduleAlertHide())
        },
        performPaymentScheduleErrorShow: (
            paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
            paymentScheduleAlternativeScenariosMessage: string | null,
            paymentScheduleAlternativeScenariosTitle: string | null = null
        ) => {
            dispatch(thunkProductCredit.performPaymentScheduleErrorShow(
                paymentScheduleAlternativeScenariosType,
                paymentScheduleAlternativeScenariosMessage,
                paymentScheduleAlternativeScenariosTitle
            ))
        },
        performPaymentScheduleErrorHide: () => {
            dispatch(thunkProductCredit.performPaymentScheduleErrorHide())
        },
        performPaymentScheduleListRefresh: () => {
            dispatch(thunkProductCredit.performPaymentScheduleListRefresh())
        },
        performPaymentScheduleErrorViewHandleRepeat: () => {
            dispatch(thunkProductCredit.performPaymentScheduleErrorViewHandleRepeat())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerProductCredit)
