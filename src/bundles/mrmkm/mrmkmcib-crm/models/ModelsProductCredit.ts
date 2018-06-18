/**
 * Models for ProductCredit container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Enums} from '../Enums'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import * as util from '../common/Util'

const defaultState = {
    get state(): IProductCreditState {
            return {
            currentForecastDealId: '',
            currentForecastEvent: defaultValues.ForecastEvent, // State parameter displayed in "ProductCredit" screen.
            currentTab: Enums.ProductCreditTab.Forecast, // State parameter displayed in "ProductCredit" screen.
            forecastDealList: defaultValues.ForecastDealList,
            forecastDealListError: null,
            forecastDealListFetching: false,
            forecastError: null,
            forecastEventList: defaultValues.ForecastEventList,
            forecastEventListCachedDate: null,
            forecastEventListError: null,
            forecastEventListFetching: false,
            forecastEventListFiltered: defaultValues.ForecastEventList, // State parameter displayed in "ProductCredit" screen.
            forecastFetching: false,
            forecastList: defaultValues.ForecastEventList,
            inputActiveFilterForecastEventType: null, // State parameter displayed in "ProductCredit" screen.
            inputActiveFilterPeriodEnd: null, // State parameter displayed in "ProductCredit" screen.
            inputActiveFilterPeriodStart: null, // State parameter displayed in "ProductCredit" screen.
            inputActiveFilterPeriodType: Enums.ForecastPeriodType.CreditFinish, // State parameter displayed in "ProductCredit" screen.
            inputFilterForecastEventType: null, // State parameter displayed in "ProductCredit" screen.
            inputFilterPeriodEnd: null, // State parameter displayed in "ProductCredit" screen.
            inputFilterPeriodStart: null, // State parameter displayed in "ProductCredit" screen.
            inputFilterPeriodType: Enums.ForecastPeriodType.CreditFinish, // State parameter displayed in "ProductCredit" screen.
            inputForecastEventComment: '', // State parameter displayed in "ProductCredit" screen.
            inputForecastEventCurrency: defaultValues.Classifier, // State parameter displayed in "ProductCredit" screen.
            inputForecastEventDate: new Date(), // State parameter displayed in "ProductCredit" screen.
            inputForecastEventEmail: '', // State parameter displayed in "ProductCredit" screen.
            inputForecastEventPossibility: 0, // State parameter displayed in "ProductCredit" screen.
            inputForecastEventSum: null, // State parameter displayed in "ProductCredit" screen.
            inputForecastEventType: null, // State parameter displayed in "ProductCredit" screen.
            inputFullRepayment: false, // State parameter displayed in "ProductCredit" screen.
            inputPaymentScheduleFilterOperCodeCred: true, // Страница "График платежей", фильтр "Тип операции", опция "Погашение долга"
            inputPaymentScheduleFilterOperCodeProc: true, // Страница "График платежей", фильтр "Тип операции", опция "Погашение процентов"
            inputPaymentScheduleFilterOperCodeOther: true, // Страница "График платежей", фильтр "Тип операции", опция "Прочие платежи"
			inputPaymentScheduleFilterOperCodeCredApplied: true, // Страница "График платежей", фильтр "Тип операции", опция "Погашение долга"
			inputPaymentScheduleFilterOperCodeProcApplied: true, // Страница "График платежей", фильтр "Тип операции", опция "Погашение процентов"
			inputPaymentScheduleFilterOperCodeOtherApplied: true, // Страница "График платежей", фильтр "Тип операции", опция "Прочие платежи"
			inputPaymentScheduleFilterOperCodeCredOld: true, // Страница "График платежей", фильтр "Тип операции", опция "Погашение долга"
			inputPaymentScheduleFilterOperCodeProcOld: true, // Страница "График платежей", фильтр "Тип операции", опция "Погашение процентов"
			inputPaymentScheduleFilterOperCodeOtherOld: true, // Страница "График платежей", фильтр "Тип операции", опция "Прочие платежи"
            inputPaymentScheduleFilterPeriodEnd: null, // Страница "График платежей", фильтр "Период", окончание периода
            inputPaymentScheduleFilterPeriodStart: null, // Страница "График платежей", фильтр "Период", начало периода
            inputPaymentScheduleFilterPeriodEndApplied: null, // Страница "График платежей", фильтр "Период", окончание периода
            inputPaymentScheduleFilterPeriodStartApplied: null, // Страница "График платежей", фильтр "Период", начало периода
			inputPaymentScheduleFilterPeriodEndOld: null, // Страница "График платежей", фильтр "Период", окончание периода
			inputPaymentScheduleFilterPeriodStartOld: null, // Страница "График платежей", фильтр "Период", начало периода
            inputPaymentScheduleFilterStatusExecPay: true, // Страница "График платежей", фильтр "Статус", опция "Не оплачено"
            inputPaymentScheduleFilterStatusForPay: true, // Страница "График платежей", фильтр "Статус", опция "К оплате"
            inputPaymentScheduleFilterStatusNotPay: true, // Страница "График платежей", фильтр "Статус", опция "Исполнено"
			inputPaymentScheduleFilterStatusExecPayApplied: true, // Страница "График платежей", фильтр "Статус", опция "Не оплачено"
			inputPaymentScheduleFilterStatusForPayApplied: true, // Страница "График платежей", фильтр "Статус", опция "К оплате"
			inputPaymentScheduleFilterStatusNotPayApplied: true, // Страница "График платежей", фильтр "Статус", опция "Исполнено"
			inputPaymentScheduleFilterStatusExecPayOld: true, // Страница "График платежей", фильтр "Статус", опция "Не оплачено"
			inputPaymentScheduleFilterStatusForPayOld: true, // Страница "График платежей", фильтр "Статус", опция "К оплате"
			inputPaymentScheduleFilterStatusNotPayOld: true, // Страница "График платежей", фильтр "Статус", опция "Исполнено"
            inputValidationForecastEventComment: null, // State parameter displayed in "ProductCredit" screen.
            inputValidationForecastEventCurrency: null,
            inputValidationForecastEventEmail: null, // State parameter displayed in "ProductCredit" screen.
            inputValidationForecastEventPossibility: null,
            inputValidationForecastEventSumm: null,
            inputValidationForecastEventType: null,
            isModalForecastEventSaveErrorVisible: false, // State parameter displayed in "ProductCredit" screen.
            isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: true, // Страница "График платежей", фильтр "Период", true - активен верхний DatePicker
            isVisiblePopoverFilter: false, // State parameter displayed in "ProductCredit" screen.
            isVisiblePopoverForecastEvent: false, // State parameter displayed in "ProductCredit" screen.
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
            covenantAppliedPeriodFilterValueList:{data: []},
            covenantPeriodFilterValueList: {data: []},
            covenantStatusFilterValueList: {data: []},
            covenantAppliedStatusFilterValueList: {data: []},
            covenantDateFilterValue: new Date(),
            productCachedDateCovenantList: null,
            filteredProductCovenantList: {data: []},
            productCovenantList: {data: []},

            forecastEventEditSaveInProgress: false,
            paymentScheduleList: defaultValues.PaymentScheduleList, // // State parameter used in "PaymentSchedule" screen
            paymentScheduleListCachedDate: null, // State parameter used in "PaymentSchedule" screen
            paymentScheduleListFetching: false, // State parameter used in "PaymentSchedule" screen
            paymentScheduleListFetchingFailure: null, // State parameter used in "PaymentSchedule" screen
            paymentScheduleListFetchingSuccess:null, // State parameter used in "PaymentSchedule" screen
            paymentScheduleListLoadMoreFetching: false,
            paymentScheduleListError: null,
            paymentScheduleListFiltered: defaultValues.PaymentScheduleList,
            isVisiblePaymentScheduleRefreshModalAlert: false,

            paymentScheduleAlternativeScenariosTitle: null,
            paymentScheduleAlternativeScenariosMessage: null,
            paymentScheduleAlertViewIsVisible: false,
            paymentScheduleErrorModalIsVisible: false,
            paymentScheduleAlternativeScenariosType: null,
        }
    }
}

export interface IProductCreditState {
    filteredProductCovenantList: Models.ProductCovenantList,
    productCovenantList: Models.ProductCovenantList,
    productCachedDateCovenantList: Date | null,
    covenantDateFilterValue: Date | null,
    isVisiblePopoverCovenantPeriodFilter: boolean,
    isVisiblePopoverCovenantStatusFilter: boolean,
    covenantPeriodFilterValueList: ModelsApp.ClassifierList,
    covenantStatusFilterValueList: ModelsApp.ClassifierList,
    covenantAppliedPeriodFilterValueList: ModelsApp.ClassifierList,
    covenantAppliedStatusFilterValueList: ModelsApp.ClassifierList,
    isCheckCovenantStatusFilterDisrupted: boolean,
    isCheckCovenantStatusFilterDone: boolean,
    isCheckCovenantStatusFilterNoDeadLine: boolean,

    covenantListFetching: boolean,
    covenantListFetchingError: Models.Error | null,
    currentForecastDealId: string,
    currentForecastEvent: Models.ForecastEvent, // State parameter displayed in "ProductCredit" screen.
    currentTab: Enums.ProductCreditTab, // State parameter displayed in "ProductCredit" screen.
    forecastDealList: Models.ForecastDealList,
    forecastDealListError: Models.Error | null,
    forecastDealListFetching: boolean,
    forecastError: Models.Error | null,
    forecastEventList: Models.ForecastEventList, // State parameter displayed in "ProductCredit" screen.
    forecastEventListCachedDate: Date | null,
    forecastEventListError: Models.Error | null,
    forecastEventListFetching: boolean,
    forecastEventListFiltered: Models.ForecastEventList, // State parameter displayed in "ProductCredit" screen.
    forecastFetching: boolean,
    forecastList: Models.ForecastEventList,
    inputActiveFilterForecastEventType: ModelsApp.Classifier | null, // State parameter displayed in "ProductCredit" screen.
    inputActiveFilterPeriodEnd: Date | null, // State parameter displayed in "ProductCredit" screen.
    inputActiveFilterPeriodStart: Date | null, // State parameter displayed in "ProductCredit" screen.
    inputActiveFilterPeriodType: Enums.ForecastPeriodType, // State parameter displayed in "ProductCredit" screen.
    inputFilterForecastEventType: ModelsApp.Classifier | null, // State parameter displayed in "ProductCredit" screen.
    inputFilterPeriodEnd: Date | null, // State parameter displayed in "ProductCredit" screen.
    inputFilterPeriodStart: Date | null, // State parameter displayed in "ProductCredit" screen.
    inputFilterPeriodType: Enums.ForecastPeriodType, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventComment: string, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventCurrency: ModelsApp.Classifier, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventDate: Date | null, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventEmail: string, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventPossibility: number, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventSum: string | null, // State parameter displayed in "ProductCredit" screen.
    inputForecastEventType: ModelsApp.Classifier | null, // State parameter displayed in "ProductCredit" screen.
    inputFullRepayment: boolean, // State parameter displayed in "ProductCredit" screen.
    inputPaymentScheduleFilterOperCodeCred: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Погашение долга"
    inputPaymentScheduleFilterOperCodeProc: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Погашение процентов"
    inputPaymentScheduleFilterOperCodeOther: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Прочие платежи"
	inputPaymentScheduleFilterOperCodeCredApplied: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Погашение долга"
	inputPaymentScheduleFilterOperCodeProcApplied: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Погашение процентов"
	inputPaymentScheduleFilterOperCodeOtherApplied: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Прочие платежи"
	inputPaymentScheduleFilterOperCodeCredOld: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Погашение долга"
	inputPaymentScheduleFilterOperCodeProcOld: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Погашение процентов"
	inputPaymentScheduleFilterOperCodeOtherOld: boolean, // Страница "График платежей", фильтр "Тип операции", опция "Прочие платежи"
    inputPaymentScheduleFilterPeriodEnd: Date | null, // Страница "График платежей", фильтр "Период", окончание периода
    inputPaymentScheduleFilterPeriodStart: Date | null, // Страница "График платежей", фильтр "Период", начало периода
    inputPaymentScheduleFilterPeriodEndApplied: Date | null, // Страница "График платежей", фильтр "Период", окончание периода
    inputPaymentScheduleFilterPeriodStartApplied: Date | null, // Страница "График платежей", фильтр "Период", начало периода
	inputPaymentScheduleFilterPeriodEndOld: Date | null, // Страница "График платежей", фильтр "Период", окончание периода
	inputPaymentScheduleFilterPeriodStartOld: Date | null, // Страница "График платежей", фильтр "Период", начало периода
    inputPaymentScheduleFilterStatusExecPay: boolean, // Страница "График платежей", фильтр "Статус", опция "Не оплачено"
    inputPaymentScheduleFilterStatusForPay: boolean, // Страница "График платежей", фильтр "Статус", опция "К оплате"
    inputPaymentScheduleFilterStatusNotPay: boolean, // Страница "График платежей", фильтр "Статус", опция "Исполнено"
	inputPaymentScheduleFilterStatusExecPayApplied: boolean, // Страница "График платежей", фильтр "Статус", опция "Не оплачено"
	inputPaymentScheduleFilterStatusForPayApplied: boolean, // Страница "График платежей", фильтр "Статус", опция "К оплате"
	inputPaymentScheduleFilterStatusNotPayApplied: boolean, // Страница "График платежей", фильтр "Статус", опция "Исполнено"
	inputPaymentScheduleFilterStatusExecPayOld: boolean, // Страница "График платежей", фильтр "Статус", опция "Не оплачено"
	inputPaymentScheduleFilterStatusForPayOld: boolean, // Страница "График платежей", фильтр "Статус", опция "К оплате"
	inputPaymentScheduleFilterStatusNotPayOld: boolean, // Страница "График платежей", фильтр "Статус", опция "Исполнено"
    inputValidationForecastEventComment: string | null, // State parameter displayed in "ProductCredit" screen.
    inputValidationForecastEventCurrency: string | null,
    inputValidationForecastEventEmail: string | null, // State parameter displayed in "ProductCredit" screen.
    inputValidationForecastEventPossibility: number | null,
    inputValidationForecastEventSumm: string | null,
    inputValidationForecastEventType: string | null,
    isModalForecastEventSaveErrorVisible: boolean, // State parameter displayed in "ProductCredit" screen.
    isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: boolean,
    isVisiblePopoverFilter: boolean, // State parameter displayed in "ProductCredit" screen.
    isVisiblePopoverForecastEvent: boolean, // State parameter displayed in "ProductCredit" screen.
    isVisiblePopoverPaymentScheduleOperationTypeFilter: boolean,
    isVisiblePopoverPaymentSchedulePeriodFilter: boolean,
    isVisiblePopoverPaymentScheduleStatusFilter: boolean,
    newForecastEventSaveError: Models.Error | null,
    newForecastEventSaveInProgress: boolean,
    forecastEventEditSaveInProgress: boolean,
    paymentScheduleList: Models.PaymentScheduleList, // // State parameter used in "PaymentSchedule" screen
    paymentScheduleListCachedDate: Date | null, // State parameter used in "PaymentSchedule" screen
    paymentScheduleListFetching: boolean, // State parameter used in "PaymentSchedule" screen
    paymentScheduleListFetchingFailure: Models.Error | null, // State parameter used in "PaymentSchedule" screen
    paymentScheduleListFetchingSuccess: Models.Error | null, // State parameter used in "PaymentSchedule" screen
    paymentScheduleListLoadMoreFetching: boolean,
    paymentScheduleListError: Models.Error | null,
    paymentScheduleListFiltered: Models.PaymentScheduleList,
    isVisiblePaymentScheduleRefreshModalAlert: boolean,
    paymentScheduleAlternativeScenariosTitle: string | null,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlertViewIsVisible: boolean,
    paymentScheduleErrorModalIsVisible: boolean,
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType | null
}

export const initialState = {
    get state(): IProductCreditState {
        return defaultState.state
    }
}

export type FORECAST_EVENT_LIST_FILTER = (forecastEventList: Models.ForecastEventList,) => void;
export type NAVIGATE_PRODUCT_CREDIT_BACK = () => void;
export type NAVIGATE_PRODUCT_CREDIT_DEAL_BACK = () => void;
export type NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN = () => void;
export type NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_CUSTOM_DATE_SCREEN = () => void;
export type NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN = () => void;
export type NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN = () => void;
export type NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN = () => void;
export type NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN = () => void;
export type NAVIGATE_TO_FORECAST_SCREEN = () => void;
export type PERFORM_CANCEL_EDIT_FORECAST_EVENT = () => void;
export type PERFORM_SAVE_EDIT_FORECAST_EVENT = () => void;
export type NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN = () => void;
export type NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = () => void;
export type PERFORM_CHANGE_TAB = (index: number, value: Enums.ProductCreditTab,) => void;
export type PERFORM_CONTAINER_RESET = () => void;
export type PERFORM_CREATE_EVENT_POPUP_RESET = () => void;
export type PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP = () => void;
export type PERFORM_FILTER_APPLY = () => void;
export type PERFORM_FILTER_CUSTOM_DATE_APPLY = () => void;
export type PERFORM_FILTER_EVENT_TYPE_RESET = () => void;
export type PERFORM_FILTER_PERIOD_RESET = () => void;
export type PERFORM_FILTER_RESET = () => void;
export type PERFORM_FORECAST_EVENT_SAVE = () => void;
export type PERFORM_FORECAST_EVENTS_LIST_FLUSH= () => void;
export type PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR = () => void;
export type PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR = () => void;
export type PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE = (value: ModelsApp.Classifier) => void;
export type PERFORM_INPUT_FILTER_PERIOD_END = (value: Date | null) => void;
export type PERFORM_INPUT_FILTER_PERIOD_START = (value: Date | null) => void;
export type PERFORM_INPUT_FILTER_PERIOD_TYPE = (value: Enums.ForecastPeriodType) => void;
export type PERFORM_INPUT_FORECAST_EVENT_COMMENT = (value: string) => void;
export type PERFORM_INPUT_FORECAST_EVENT_CURRENCY = (value: ModelsApp.Classifier) => void;
export type PERFORM_INPUT_FORECAST_EVENT_DATE = (value: Date | null) => void;
export type PERFORM_INPUT_FORECAST_EVENT_EMAIL = (value: string) => void;
export type PERFORM_INPUT_FORECAST_EVENT_FILTER_PERIOD_TYPE = (value: Enums.ForecastPeriodType) => void;
export type PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY = (value: number) => void;
export type PERFORM_INPUT_FORECAST_EVENT_SUM = (value: string | null) => void;
export type PERFORM_INPUT_FORECAST_EVENT_TYPE = (value: ModelsApp.Classifier) => void;
export type PERFORM_INPUT_FULL_REPAYMENT = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID = (value: boolean) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END = (value: Date | null) => void;
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START = (value: Date | null) => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER = (value: boolean) => void;
export type PERFORM_POPOVER_FILTER_HIDE = () => void;
export type PERFORM_POPOVER_FILTER_SHOW = () => void;
export type PERFORM_POPOVER_FORECAST_EVENT_HIDE = () => void;
export type PERFORM_POPOVER_FORECAST_EVENT_SHOW = (forecastEvent: Models.ForecastEvent,) => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE = () => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW = () => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE = () => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW = () => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE = () => void;
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW = () => void;
export type PERFORM_REFRESH_FORECAST = () => void;
export type PERFORM_REPEAT_FORECAST_EVENT_SAVE = () => void;

export type PERFORM_NAVIGATE_TO_COVENANT_LIST_PAGE = () => void;

export type PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER = (value: boolean) => void;
export type PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER = (value: boolean) => void;
export type PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE = (value: Date | null) => void;

export type PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER = (value: ModelsApp.Classifier) => void;
export type PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER = (value: ModelsApp.Classifier) => void;

export type PERFORM_APPLY_COVENANT_STATUS_FILTER = () => void;
export type PERFORM_APPLY_COVENANT_PERIOD_FILTER = () => void;

export type PERFORM_CALL_GET_PRODUCT_COVENANT_LIST = (contractNumber: string) => void;

export type PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET = () => void;
export type PERFORM_FORECAST_EVENT_DELETE = () => void;
export type PERFORM_OPEN_FORECAST_EVENT_DETAILS = (forecastEvent: Models.ForecastEvent,) => void;
export type PERFORM_CLEAR_CURRENT_FORECAST_EVENT = () => void;
export type PERFORM_CUSTOMER_OPEN_EXECUTE = (customer: Models.Customer) => void;

export type PERFORM_FORECAST_EVENT_CREATE = () => void;
export type PERFORM_FORECAST_EVENT_UPDATE = (event: Models.ForecastEvent) => void;
export type PERFORM_PROGNOSTIC_EVENT_CREATE = () => void;
export type PERFORM_PROGNOSTIC_EVENT_UPDATE = (event: Models.ForecastEvent) => void;
export type PERFORM_PROGNOSTIC_EVENT_DETAIL = (event: Models.ForecastEvent) => void;
export type PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_LOAD_MORE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW = () => void;
export type PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_RESET = () => void;
export type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_RESET = () => void;

export type NAVIGATE_TO_CUSTOMER_SCREEN = () => void;
export type PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW = (
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlternativeScenariosTitle: string | null
) => void;
export type PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK = () => void;
export type PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL = () => void;
export type PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW = (
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlternativeScenariosTitle: string | null
) => void;
export type PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE = () => void;
export type PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH = () => void;
export type PERFORM_PAYMENT_SCHEDULE_ERROR_VIEW_HANDLE_REPEAT = () => void;
export type PERFORM_CUSTOMER_OPEN = (customer: Models.Customer) => void;
