/**
 * Models for ProductCredit container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            currentForecastDealId: '',
            currentForecastEvent: defaultValues.ForecastEvent,
            currentTab: Enums.ProductCreditTab.Forecast,
            forecastDealList: defaultValues.ForecastDealList,
            forecastDealListError: null,
            forecastDealListFetching: false,
            forecastError: null,
            forecastEventList: defaultValues.ForecastEventList,
            forecastEventListCachedDate: null,
            forecastEventListError: null,
            forecastEventListFetching: false,
            forecastEventListFiltered: defaultValues.ForecastEventList,
            forecastFetching: false,
            forecastList: defaultValues.ForecastEventList,
            inputActiveFilterForecastEventType: null,
            inputActiveFilterPeriodEnd: null,
            inputActiveFilterPeriodStart: null,
            inputActiveFilterPeriodType: Enums.ForecastPeriodType.CreditFinish,
            inputFilterForecastEventType: null,
            inputFilterPeriodEnd: null,
            inputFilterPeriodStart: null,
            inputFilterPeriodType: Enums.ForecastPeriodType.CreditFinish,
            inputForecastEventComment: '',
            inputForecastEventCurrency: defaultValues.Classifier,
            inputForecastEventDate: new Date(),
            inputForecastEventEmail: '',
            inputForecastEventPossibility: 0,
            inputForecastEventSum: null,
            inputForecastEventType: null,
            inputFullRepayment: false,
            inputPaymentScheduleFilterOperCodeCred: true,
            inputPaymentScheduleFilterOperCodeProc: true,
            inputPaymentScheduleFilterOperCodeOther: true,
            inputPaymentScheduleFilterOperCodeCredApplied: true,
            inputPaymentScheduleFilterOperCodeProcApplied: true,
            inputPaymentScheduleFilterOperCodeOtherApplied: true,
            inputPaymentScheduleFilterOperCodeCredOld: true,
            inputPaymentScheduleFilterOperCodeProcOld: true,
            inputPaymentScheduleFilterOperCodeOtherOld: true,
            inputPaymentScheduleFilterPeriodEnd: null,
            inputPaymentScheduleFilterPeriodStart: null,
            inputPaymentScheduleFilterPeriodEndApplied: null,
            inputPaymentScheduleFilterPeriodStartApplied: null,
            inputPaymentScheduleFilterPeriodEndOld: null,
            inputPaymentScheduleFilterPeriodStartOld: null,
            inputPaymentScheduleFilterStatusExecPay: true,
            inputPaymentScheduleFilterStatusForPay: true,
            inputPaymentScheduleFilterStatusNotPay: true,
            inputPaymentScheduleFilterStatusExecPayApplied: true,
            inputPaymentScheduleFilterStatusForPayApplied: true,
            inputPaymentScheduleFilterStatusNotPayApplied: true,
            inputPaymentScheduleFilterStatusExecPayOld: true,
            inputPaymentScheduleFilterStatusForPayOld: true,
            inputPaymentScheduleFilterStatusNotPayOld: true,
            inputValidationForecastEventComment: null,
            inputValidationForecastEventCurrency: null,
            inputValidationForecastEventEmail: null,
            inputValidationForecastEventPossibility: null,
            inputValidationForecastEventSumm: null,
            inputValidationForecastEventType: null,
            isModalForecastEventSaveErrorVisible: false,
            isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: true,
            isVisiblePopoverFilter: false,
            isVisiblePopoverForecastEvent: false,
            isVisiblePopoverPaymentScheduleOperationTypeFilter: false,
            isVisiblePopoverPaymentSchedulePeriodFilter: false,
            isVisiblePopoverPaymentScheduleStatusFilter: false,
            newForecastEventSaveError: null,
            newForecastEventSaveInProgress: false,
            covenantListFetching: false,
            covenantListFetchingError: null,
            isVisiblePopoverCovenantPeriodFilter: false,
            isVisiblePopoverCovenantStatusFilter: false,
            isCheckCovenantStatusFilterDisrupted: false,
            isCheckCovenantStatusFilterDone: false,
            isCheckCovenantStatusFilterNoDeadLine: false,
            covenantAppliedPeriodFilterValueList: { data: [] },
            covenantPeriodFilterValueList: { data: [] },
            covenantStatusFilterValueList: { data: [] },
            covenantAppliedStatusFilterValueList: { data: [] },
            covenantDateFilterValue: new Date(),
            productCachedDateCovenantList: null,
            filteredProductCovenantList: { data: [] },
            productCovenantList: { data: [] },
            forecastEventEditSaveInProgress: false,
            paymentScheduleList: defaultValues.PaymentScheduleList,
            paymentScheduleListCachedDate: null,
            paymentScheduleListFetching: false,
            paymentScheduleListFetchingFailure: null,
            paymentScheduleListFetchingSuccess: null,
            paymentScheduleListLoadMoreFetching: false,
            paymentScheduleListError: null,
            paymentScheduleListFiltered: defaultValues.PaymentScheduleList,
            isVisiblePaymentScheduleRefreshModalAlert: false,
            paymentScheduleAlternativeScenariosTitle: null,
            paymentScheduleAlternativeScenariosMessage: null,
            paymentScheduleAlertViewIsVisible: false,
            paymentScheduleErrorModalIsVisible: false,
            paymentScheduleAlternativeScenariosType: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsProductCredit.js.map