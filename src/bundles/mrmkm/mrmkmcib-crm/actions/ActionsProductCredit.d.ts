/**
 * Actions of ProductCredit container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const CALL_GET_FORECAST_DEAL_LIST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST";
export declare const CALL_GET_FORECAST_DEAL_LIST_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST_FAILURE";
export declare const CALL_GET_FORECAST_DEAL_LIST_REQUEST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST_REQUEST";
export declare const CALL_GET_FORECAST_DEAL_LIST_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST_SUCCESS";
export declare const CALL_GET_FORECAST_EVENT_LIST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST";
export declare const CALL_GET_FORECAST_EVENT_LIST_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_FAILURE";
export declare const CALL_GET_FORECAST_EVENT_LIST_REQUEST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_REQUEST";
export declare const CALL_GET_FORECAST_EVENT_LIST_RESET = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_RESET";
export declare const CALL_GET_FORECAST_EVENT_LIST_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_SUCCESS";
export declare const CALL_POST_FORECAST_EVENT_CREATE = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE";
export declare const CALL_POST_FORECAST_EVENT_CREATE_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_FAILURE";
export declare const CALL_POST_FORECAST_EVENT_CREATE_REQUEST = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REQUEST";
export declare const CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_SUCCESS";
export declare const FORECAST_EVENT_LIST_FILTER = "PRODUCT_CREDIT_CONTAINER_FORECAST_EVENT_LIST_FILTER";
export declare const NAVIGATE_PRODUCT_CREDIT_BACK = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_PRODUCT_CREDIT_BACK";
export declare const NAVIGATE_PRODUCT_CREDIT_DEAL_BACK = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_PRODUCT_CREDIT_DEAL_BACK";
export declare const NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN";
export declare const NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN";
export declare const NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN";
export declare const NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN";
export declare const NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN";
export declare const NAVIGATE_TO_FORECAST_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_SCREEN";
export declare const NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN";
export declare const NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN = "PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN";
export declare const PERFORM_CHANGE_TAB = "PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_TAB";
export declare const PERFORM_CONTAINER_RESET = "PRODUCT_CREDIT_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_CREATE_EVENT_POPUP_RESET = "PRODUCT_CREDIT_CREATE_EVENT_POPUP_RESET";
export declare const PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP = "PRODUCT_CREDIT_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP";
export declare const PERFORM_FILTER_APPLY = "PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_APPLY";
export declare const PERFORM_FILTER_CUSTOM_DATE_APPLY = "PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_CUSTOM_DATE_APPLY";
export declare const PERFORM_FILTER_EVENT_TYPE_RESET = "PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_EVENT_TYPE_RESET";
export declare const PERFORM_FILTER_PERIOD_RESET = "PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_PERIOD_RESET";
export declare const PERFORM_FILTER_RESET = "PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_RESET";
export declare const PERFORM_FORECAST_EVENT_SAVE = "PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_SAVE";
export declare const PERFORM_FORECAST_EVENTS_LIST_FLUSH = "PRODUCT_CREDIT_CONTAINER_FORECAST_EVENT_LIST_PERFORM_FORECAST_EVENTS_FLUSH";
export declare const PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION = "PRODUCT_CREDIT_CREATE_POPUP_VALIDATION";
export declare const PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE";
export declare const PERFORM_INPUT_FILTER_PERIOD_END = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_END";
export declare const PERFORM_INPUT_FILTER_PERIOD_START = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_START";
export declare const PERFORM_INPUT_FILTER_PERIOD_TYPE = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_TYPE";
export declare const PERFORM_INPUT_FORECAST_EVENT_COMMENT = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_COMMENT";
export declare const PERFORM_INPUT_FORECAST_EVENT_CURRENCY = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_CURRENCY";
export declare const PERFORM_INPUT_FORECAST_EVENT_DATE = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_DATE";
export declare const PERFORM_INPUT_FORECAST_EVENT_EMAIL = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_EMAIL";
export declare const PERFORM_INPUT_FORECAST_EVENT_FILTER_PERIOD_TYPE = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_FILTER_PERIOD_TYPE";
export declare const PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY";
export declare const PERFORM_INPUT_FORECAST_EVENT_SUM = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_SUM";
export declare const PERFORM_INPUT_FORECAST_EVENT_TYPE = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_TYPE";
export declare const PERFORM_INPUT_FULL_REPAYMENT = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FULL_REPAYMENT";
export declare const PERFORM_POPOVER_FILTER_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FILTER_HIDE";
export declare const PERFORM_POPOVER_FILTER_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FILTER_SHOW";
export declare const PERFORM_POPOVER_FORECAST_EVENT_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_HIDE";
export declare const PERFORM_POPOVER_FORECAST_EVENT_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_SHOW";
export declare const PERFORM_REFRESH_FORECAST = "PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST";
export declare const PERFORM_REFRESH_FORECAST_EXECUTE = "PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST_EXECUTE";
export declare const PERFORM_REFRESH_FORECAST_FAILURE = "PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST_FAILURE";
export declare const PERFORM_REFRESH_FORECAST_SUCCESS = "PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST_SUCCESS";
export declare const PERFORM_SET_CURRENT_FORECAST_DEAL_ID = "PRODUCT_CREDIT_CONTAINER_PERFORM_SET_CURRENT_FORECAST_DEAL_ID";
export declare const PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR = "PRODUCT_CREDIT_CONTAINER_PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR";
export declare const PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR = "PRODUCT_CREDIT_CONTAINER_PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR";
export declare const CALL_GET_COVENANT_LIST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_COVENANT_LIST";
export declare const CALL_GET_COVENANT_LIST_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_GET_COVENANT_LIST_SUCCESS";
export declare const CALL_GET_COVENANT_LIST_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_GET_COVENANT_LIST_FAILURE";
export declare const PERFORM_FILTER_PRODUCT_COVENANT_LIST = "PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_PRODUCT_COVENANT_LIST";
export declare const PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER = "PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER";
export declare const PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER = "PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER";
export declare const PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST = "PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST";
export declare const PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST = "PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST";
export declare const PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE";
export declare const PERFORM_APPLY_COVENANT_PERIOD_FILTER = "PRODUCT_CREDIT_CONTAINER_PERFORM_APPLY_COVENANT_PERIOD_FILTER";
export declare const PERFORM_APPLY_COVENANT_STATUS_FILTER = "PRODUCT_CREDIT_CONTAINER_PERFORM_APPLY_COVENANT_STATUS_FILTER";
export declare const CALL_POST_FORECAST_EVENT_EDIT_SAVE = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE";
export declare const CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST";
export declare const CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS";
export declare const CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE";
export declare const CALL_POST_FORECAST_EVENT_REMOVE = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE";
export declare const CALL_POST_FORECAST_EVENT_REMOVE_REQUEST = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE_REQUEST";
export declare const CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS";
export declare const CALL_POST_FORECAST_EVENT_REMOVE_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE_FAILURE";
export declare const PERFORM_FORECAST_EVENT_DELETE = "PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_DELETE";
export declare const PERFORM_OPEN_FORECAST_EVENT_DETAILS = "PRODUCT_CREDIT_CONTAINER_PERFORM_OPEN_FORECAST_EVENT_DETAILS";
export declare const PERFORM_EDIT_FORECAST_EVENT = "PRODUCT_CREDIT_PERFORM_EDIT_FORECAST_EVENT";
export declare const PERFORM_FILL_FORECAST_EVENT_EDIT_FORM = "PRODUCT_CREDIT_PERFORM_FILL_FORECAST_EVENT_EDIT_FORM";
export declare const PERFORM_CLEAR_CURRENT_FORECAST_EVENT = "PRODUCT_CREDIT_CONTAINER_PERFORM_CLEAR_CURRENT_FORECAST_EVENT";
export declare const PERFORM_CUSTOMER_OPEN = "PRODUCT_CREDIT_CONTAINER_PERFORM_CUSTOMER_OPEN";
export declare const NAVIGATE_TO_FORECAST_EVENT_CREATE_PAGE = "PRODUCT_CREDIT_NAVIGATE_TO_FORECAST_EVENT_CREATE_PAGE";
export declare const PERFORM_RESET_FORECAST_EVENT_EDIT_FORM = "PRODUCT_CREDIT_PERFORM_RESET_FORECAST_EVENT_EDIT_FORM";
export declare const PERFORM_FORECAST_EVENT_CREATE = "PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_CREATE";
export declare const PERFORM_FORECAST_EVENT_UPDATE = "PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_UPDATE";
export declare const PERFORM_PROGNOSTIC_EVENT_CREATE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PROGNOSTIC_EVENT_CREATE";
export declare const PERFORM_PROGNOSTIC_EVENT_UPDATE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PROGNOSTIC_EVENT_UPDATE";
export declare const PERFORM_PROGNOSTIC_EVENT_DETAIL = "PRODUCT_CREDIT_CONTAINER_PERFORM_PROGNOSTIC_EVENT_DETAIL";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED";
export declare const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED = "PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED";
export declare const PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER = "PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER";
export declare const CALL_GET_PAYMENT_SCHEDULE_LIST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST";
export declare const CALL_GET_PAYMENT_SCHEDULE_LIST_RESET = "PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_RESET";
export declare const CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST = "PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST";
export declare const CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS = "PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS";
export declare const CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE = "PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE";
export declare const PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FLUSH";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE";
export declare const PERFORM_PAYMENT_SCHEDULE_LOAD_MORE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_LOAD_MORE";
export declare const PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW";
export declare const PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE";
export declare const PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE = "PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT";
export declare const PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT";
export declare const PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW";
export declare const PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE";
export declare const PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK";
export declare const PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL";
export declare const PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW";
export declare const PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE";
export declare const PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH";
export declare const PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT = "PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT";
export declare const PERFORM_SET_PAYMENT_SCHEDULE_LIST = "PRODUCT_CREDIT_CONTAINER_PERFORM_SET_PAYMENT_SCHEDULE_LIST";
export declare const PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED = "PRODUCT_CREDIT_CONTAINER_PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED";
/**
 *
 */
export declare type PERFORM_SET_PAYMENT_SCHEDULE_LIST = {
    response: Response<Models.PaymentScheduleList>;
};
export declare const performSetPaymentScheduleList: (response: Response<ModelsCrm.PaymentScheduleList>) => Action<PERFORM_SET_PAYMENT_SCHEDULE_LIST>;
/**
 *
 */
export declare type PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED = {
    response: Response<Models.PaymentScheduleList>;
};
export declare const performSetPaymentScheduleListFiltered: (response: Response<ModelsCrm.PaymentScheduleList>) => Action<PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED>;
/**
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED = {};
export declare const performPaymentScheduleFilterOperationTypeSetApplied: () => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED>;
/**
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED = {};
export declare const performPaymentScheduleFilterStatusSetApplied: () => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER = {
    value: boolean;
};
export declare const performPopoverPaymentSchedulePeriodSwitchDatePicker: (value: boolean) => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START = {
    value: Date | null;
};
export declare const performInputPaymentScheduleFilterPeriodStart: (value: Date | null) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END = {
    value: Date | null;
};
export declare const performInputPaymentScheduleFilterPeriodEnd: (value: Date | null) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED = {
    value: Date | null;
};
export declare const performInputPaymentScheduleFilterPeriodStartApplied: (value: Date | null) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED = {
    value: Date | null;
};
export declare const performInputPaymentScheduleFilterPeriodEndApplied: (value: Date | null) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID = {
    value: boolean;
};
export declare const performinputPaymentScheduleFilterStatusNotPay: (value: boolean) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY = {
    value: boolean;
};
export declare const performinputPaymentScheduleFilterStatusForPay: (value: boolean) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID = {
    value: boolean;
};
export declare const performinputPaymentScheduleFilterStatusExecPay: (value: boolean) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT = {
    value: boolean;
};
export declare const performinputPaymentScheduleFilterOperCodeOther: (value: boolean) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT = {
    value: boolean;
};
export declare const performinputPaymentScheduleFilterOperCodeProc: (value: boolean) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT = {
    value: boolean;
};
export declare const performinputPaymentScheduleFilterOperCodeCred: (value: boolean) => Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Период" filter.
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW = {};
export declare const performPopoverPaymentSchedulePeriodFilterShow: () => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Период" filter.
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE = {};
export declare const performPopoverPaymentSchedulePeriodFilterHide: () => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Тип операции" filter.
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW = {};
export declare const performPopoverPaymentScheduleOperationTypeFilterShow: () => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Тип операции" filter.
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE = {};
export declare const performPopoverPaymentScheduleOperationTypeFilterHide: () => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Статус" filter.
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW = {};
export declare const performPopoverPaymentScheduleStatusFilterShow: () => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Статус" filter.
 */
export declare type PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE = {};
export declare const performPopoverPaymentScheduleStatusFilterHide: () => Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to payment schedule screen.
 */
export declare type NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN = {};
export declare const navigateToPaymentScheduleScreen: () => Action<NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN>;
export declare const PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR = "PRODUCT_CREDIT_CONTAINER_PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR";
export declare const PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR = "PRODUCT_CREDIT_CONTAINER_PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR";
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_FORECAST_EVENTS_LIST_FLUSH = {};
export declare const performFirecastEventsListFlush: () => Action<PERFORM_FORECAST_EVENTS_LIST_FLUSH>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *  @param {Models.CovenantList}
 *
 */
export declare type PERFORM_FILTER_PRODUCT_COVENANT_LIST = {
    covenantList: Models.ProductCovenantList;
};
export declare const performFilterCovenantList: (covenantList: ModelsCrm.ProductCovenantList) => Action<PERFORM_FILTER_PRODUCT_COVENANT_LIST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get covenant list.
 *
 */
export declare type CALL_GET_COVENANT_LIST = {};
export declare const callGetCovenantList: () => Action<CALL_GET_COVENANT_LIST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change visible popover of credit covenant filter.
 * @param {boolean}
 */
export declare type PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER = {
    value: boolean;
};
export declare const performChangeVisiblePopoverCovenantPeriodFilter: (value: boolean) => Action<PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change visible popover of credit covenant filter.
 * @param {boolean}
 *
 */
export declare type PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER = {
    value: boolean;
};
export declare const performChangeVisiblePopoverCovenantStatusFilter: (value: boolean) => Action<PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change visible popover of credit covenant filter.
 * @param {date | null}
 */
export declare type PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE = {
    value: Date | null;
};
export declare const performChangeCovenantDateFilterValue: (value: Date | null) => Action<PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export declare type PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST = {
    valueList: ModelsApp.ClassifierList;
};
export declare const performChangeCheckStatusCreditCovenantPeriodFilterValueList: (valueList: ModelsApp.ClassifierList) => Action<PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export declare type PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST = {
    valueList: ModelsApp.ClassifierList;
};
export declare const performChangeCheckStatusCreditCovenantStatusFilterValueList: (valueList: ModelsApp.ClassifierList) => Action<PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export declare type PERFORM_APPLY_COVENANT_PERIOD_FILTER = {
    valueList: ModelsApp.ClassifierList;
};
export declare const performApplyCovenantPeriodFilter: (valueList: ModelsApp.ClassifierList) => Action<PERFORM_APPLY_COVENANT_PERIOD_FILTER>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export declare type PERFORM_APPLY_COVENANT_STATUS_FILTER = {
    valueList: ModelsApp.ClassifierList;
};
export declare const performApplyCovenantStatusFilter: (valueList: ModelsApp.ClassifierList) => Action<PERFORM_APPLY_COVENANT_STATUS_FILTER>;
/**
 * Action dispatched on fetch succeeded in thunk "callGetForecastEventList". Fetch forecast list.
 *
 * @param {Models.ForecastEventList} response Data received by fetch.
 * @param {ModelsApp.ClassifierList}
 * @param {ModelsApp.ClassifierList}
 */
export declare type CALL_GET_COVENANT_LIST_SUCCESS = {
    response: Response<Models.ProductCovenantList>;
    periodFilterValueList: ModelsApp.ClassifierList;
    statusFilterValueList: ModelsApp.ClassifierList;
};
export declare const callGetCovenantListSuccess: (response: Response<ModelsCrm.ProductCovenantList>, periodFilterValueList: ModelsApp.ClassifierList, statusFilterValueList: ModelsApp.ClassifierList) => Action<CALL_GET_COVENANT_LIST_SUCCESS>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 * @param {Models.Error} .
 */
export declare type CALL_GET_COVENANT_LIST_FAILURE = {
    error: Models.Error;
};
export declare const callGetCovenantListFailure: (error: ModelsCrm.Error) => Action<CALL_GET_COVENANT_LIST_FAILURE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.ProductCreditTab} value .
 */
export declare type PERFORM_CHANGE_TAB = {
    index: number;
    value: Enums.ProductCreditTab;
};
export declare const performChangeTab: (index: number, value: Enums.ProductCreditTab) => Action<PERFORM_CHANGE_TAB>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
 *
 */
export declare type NAVIGATE_TO_FORECAST_SCREEN = {};
export declare const navigateToForecastScreen: () => Action<NAVIGATE_TO_FORECAST_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back.
 *
 */
export declare type NAVIGATE_PRODUCT_CREDIT_BACK = {};
export declare const navigateProductCreditBack: () => Action<NAVIGATE_PRODUCT_CREDIT_BACK>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back to deal screen.
 *
 */
export declare type NAVIGATE_PRODUCT_CREDIT_DEAL_BACK = {};
export declare const navigateProductCreditDealBack: () => Action<NAVIGATE_PRODUCT_CREDIT_DEAL_BACK>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 *
 * @param {Models.ForecastEvent} forecastEvent .
 */
export declare type PERFORM_POPOVER_FORECAST_EVENT_SHOW = {
    forecastEvent: Models.ForecastEvent;
};
export declare const performPopoverForecastEventShow: (forecastEvent: ModelsCrm.ForecastEvent) => Action<PERFORM_POPOVER_FORECAST_EVENT_SHOW>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_FORECAST_EVENT_HIDE = {};
export declare const performPopoverForecastEventHide: () => Action<PERFORM_POPOVER_FORECAST_EVENT_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION = {};
export declare const performInputCreatePopupEventValidation: () => Action<PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export declare type NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN = {};
export declare const navigateToForecastEventTypPickerScreen: () => Action<NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export declare type NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN = {};
export declare const navigateToForecastEventFilterTypePickerScreen: () => Action<NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_TYPE = {
    value: ModelsApp.Classifier;
};
export declare const performInputForecastEventType: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_FORECAST_EVENT_TYPE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_DATE = {
    value: Date | null;
};
export declare const performInputForecastEventDate: (value: Date | null) => Action<PERFORM_INPUT_FORECAST_EVENT_DATE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export declare type NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN = {};
export declare const navigateToForecastEventPossibilityPickerScreen: () => Action<NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export declare type NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN = {};
export declare const navigateToForecastEventFilterPeriodScreen: () => Action<NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.ForecastEventPossibility} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY = {
    value: number;
};
export declare const performInputForecastEventPossibility: (value: number) => Action<PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user tap Currency field.
 *
 */
export declare type NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN = {};
export declare const navigateToForecastEventCurrencyPickerScreen: () => Action<NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input Currency field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_CURRENCY = {
    value: ModelsApp.Classifier;
};
export declare const performInputForecastEventCurrency: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_FORECAST_EVENT_CURRENCY>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_SUM = {
    value: string | null;
};
export declare const performInputForecastEventSum: (value: string | null) => Action<PERFORM_INPUT_FORECAST_EVENT_SUM>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export declare type PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP = {};
export declare const performFillDefaultValuesAndShowCreateEventPopup: () => Action<PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export declare type PERFORM_CREATE_EVENT_POPUP_RESET = {};
export declare const performFilterCreateEventPopupReset: () => Action<PERFORM_CREATE_EVENT_POPUP_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {boolean} value .
 */
export declare type PERFORM_INPUT_FULL_REPAYMENT = {
    value: boolean;
};
export declare const performInputFullRepayment: (value: boolean) => Action<PERFORM_INPUT_FULL_REPAYMENT>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_EMAIL = {
    value: string;
};
export declare const performInputForecastEventEmail: (value: string) => Action<PERFORM_INPUT_FORECAST_EVENT_EMAIL>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_FORECAST_EVENT_COMMENT = {
    value: string;
};
export declare const performInputForecastEventComment: (value: string) => Action<PERFORM_INPUT_FORECAST_EVENT_COMMENT>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to save forecast event.
 *
 */
export declare type PERFORM_FORECAST_EVENT_SAVE = {};
export declare const performForecastEventSave: () => Action<PERFORM_FORECAST_EVENT_SAVE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_FILTER_SHOW = {};
export declare const performPopoverFilterShow: () => Action<PERFORM_POPOVER_FILTER_SHOW>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_FILTER_HIDE = {};
export declare const performPopoverFilterHide: () => Action<PERFORM_POPOVER_FILTER_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE = {
    value: ModelsApp.Classifier;
};
export declare const performInputFilterForecastEventType: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE>;
/**
 * Internal thunk used in "ProductCredit" container. Thunk dispatched on user select custom period type.
 *
 */
export declare type NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = {};
export declare const navigateToPeriodTypeCustomScreen: () => Action<NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.ForecastPeriodType} value .
 */
export declare type PERFORM_INPUT_FILTER_PERIOD_TYPE = {
    value: Enums.ForecastPeriodType;
};
export declare const performInputFilterPeriodType: (value: Enums.ForecastPeriodType) => Action<PERFORM_INPUT_FILTER_PERIOD_TYPE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodStart field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_FILTER_PERIOD_START = {
    value: Date | null;
};
export declare const performInputFilterPeriodStart: (value: Date | null) => Action<PERFORM_INPUT_FILTER_PERIOD_START>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodEnd field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_FILTER_PERIOD_END = {
    value: Date | null;
};
export declare const performInputFilterPeriodEnd: (value: Date | null) => Action<PERFORM_INPUT_FILTER_PERIOD_END>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
 *
 */
export declare type PERFORM_FILTER_APPLY = {};
export declare const performFilterApply: () => Action<PERFORM_FILTER_APPLY>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
 *
 */
export declare type PERFORM_FILTER_CUSTOM_DATE_APPLY = {};
export declare const performFilterCustomDateApply: () => Action<PERFORM_FILTER_CUSTOM_DATE_APPLY>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 *
 */
export declare type PERFORM_FILTER_RESET = {};
export declare const performFilterReset: () => Action<PERFORM_FILTER_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 *
 */
export declare type PERFORM_FILTER_EVENT_TYPE_RESET = {};
export declare const performFilterEventTypeReset: () => Action<PERFORM_FILTER_EVENT_TYPE_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 *
 */
export declare type PERFORM_FILTER_PERIOD_RESET = {};
export declare const performFilterPeriodReset: () => Action<PERFORM_FILTER_PERIOD_RESET>;
/**
 * Internal thunk used in "ProductCredit" container. Thunk dispatched to filter forecast event list.
 *
 * @param {Models.ForecastEventList} forecastEventList .
 */
export declare type FORECAST_EVENT_LIST_FILTER = {
    forecastEventList: Models.ForecastEventList;
};
export declare const forecastEventListFilter: (forecastEventList: ModelsCrm.ForecastEventList) => Action<FORECAST_EVENT_LIST_FILTER>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE = {};
export declare const callPostForecastEventCreate: () => Action<CALL_POST_FORECAST_EVENT_CREATE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE_REQUEST = {};
export declare const callPostForecastEventCreateRequest: () => Action<CALL_POST_FORECAST_EVENT_CREATE_REQUEST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = {};
export declare const callPostForecastEventCreateSuccess: () => Action<CALL_POST_FORECAST_EVENT_CREATE_SUCCESS>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type CALL_POST_FORECAST_EVENT_CREATE_FAILURE = {
    error: Models.Error;
};
export declare const callPostForecastEventCreateFailure: (error: ModelsCrm.Error) => Action<CALL_POST_FORECAST_EVENT_CREATE_FAILURE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type CALL_GET_FORECAST_EVENT_LIST = {};
export declare const callGetForecastEventList: () => Action<CALL_GET_FORECAST_EVENT_LIST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request event list.
 *
 */
export declare type CALL_GET_FORECAST_EVENT_LIST_RESET = {};
export declare const callGetForecastEventListReset: () => Action<CALL_GET_FORECAST_EVENT_LIST_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request event list.
 *
 */
export declare type CALL_GET_FORECAST_EVENT_LIST_REQUEST = {};
export declare const callGetForecastEventListRequest: () => Action<CALL_GET_FORECAST_EVENT_LIST_REQUEST>;
/**
 * Action dispatched on fetch succeeded in thunk "callGetForecastEventList". Fetch forecast list.
 *
 * @param {Models.ForecastEventList} response Data received by fetch.
 */
export declare type CALL_GET_FORECAST_EVENT_LIST_SUCCESS = {
    response: Response<Models.ForecastEventList>;
};
export declare const callGetForecastEventListSuccess: (response: Response<ModelsCrm.ForecastEventList>) => Action<CALL_GET_FORECAST_EVENT_LIST_SUCCESS>;
/**
 * Action dispatched on fetch succeeded in thunk "callGetForecastEventList". Fetch forecast list.
 * @param {Error} error Description of error while receiving data by fetch.
 */
export declare type CALL_GET_FORECAST_EVENT_LIST_FAILURE = {
    error: Error;
};
export declare const callGetForecastEventListFailure: (error: Error) => Action<CALL_GET_FORECAST_EVENT_LIST_FAILURE>;
/**
 * Thunk dispatched by "Product Credit" screen. Thunk chain used to update event list.
 *
 */
export declare type PERFORM_REFRESH_FORECAST = {};
export declare const performRefreshForecast: () => Action<PERFORM_REFRESH_FORECAST>;
export declare type PERFORM_REFRESH_FORECAST_EXECUTE = {};
export declare const performRefreshForecastExecute: () => Action<PERFORM_REFRESH_FORECAST_EXECUTE>;
export declare type PERFORM_REFRESH_FORECAST_SUCCESS = {};
export declare const performRefreshForecastSuccess: () => Action<PERFORM_REFRESH_FORECAST_SUCCESS>;
export declare type PERFORM_REFRESH_FORECAST_FAILURE = {};
export declare const performRefreshForecastFailure: () => Action<PERFORM_REFRESH_FORECAST_FAILURE>;
export declare type PERFORM_SET_CURRENT_FORECAST_DEAL_ID = {
    dealId: string;
};
export declare const performSetCurrentForecastDealId: (dealId: string) => Action<PERFORM_SET_CURRENT_FORECAST_DEAL_ID>;
export declare type PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR = {};
export declare const performShowModalForecastEventSaveError: () => Action<PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR>;
export declare type PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR = {};
export declare const performHideModalForecastEventSaveError: () => Action<PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR>;
export declare type PERFORM_EDIT_FORECAST_EVENT = {};
export declare const performEditForecastEvent: () => Action<PERFORM_EDIT_FORECAST_EVENT>;
export declare type PERFORM_FILL_FORECAST_EVENT_EDIT_FORM = {};
export declare const performFillForecastEventEditForm: () => Action<PERFORM_FILL_FORECAST_EVENT_EDIT_FORM>;
export declare type CALL_POST_FORECAST_EVENT_EDIT_SAVE = {};
export declare const callPostForecastEventEditSave: () => Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE>;
export declare type CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST = {};
export declare const callPostForecastEventEditSaveRequest: () => Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST>;
export declare type CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS = {};
export declare const callPostForecastEventEditSaveSuccess: () => Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS>;
export declare type CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE = {
    error: Error;
};
export declare const callPostForecastEventEditSaveFailure: (error: Error) => Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE>;
export declare type CALL_POST_FORECAST_EVENT_REMOVE = {};
export declare const callPostForecastEventRemove: () => Action<CALL_POST_FORECAST_EVENT_REMOVE>;
export declare type CALL_POST_FORECAST_EVENT_REMOVE_REQUEST = {};
export declare const callPostForecastEventRemoveRequest: () => Action<CALL_POST_FORECAST_EVENT_REMOVE_REQUEST>;
export declare type CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS = {};
export declare const callPostForecastEventRemoveSuccess: () => Action<CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS>;
export declare type CALL_POST_FORECAST_EVENT_REMOVE_FAILURE = {
    error: Error;
};
export declare const callPostForecastEventRemoveFailure: (error: Error) => Action<CALL_POST_FORECAST_EVENT_REMOVE_FAILURE>;
export declare type PERFORM_FORECAST_EVENT_DELETE = {};
export declare const performForecastEventDelete: () => Action<PERFORM_FORECAST_EVENT_DELETE>;
/**
 * Action dispatched on failure in thunk "performOpenForecastEventDetails". Thunk dispatched by "Product Credit" screen.
 *
 * @param {Models.ForecastEvent} forecastEvent
 */
export declare type PERFORM_OPEN_FORECAST_EVENT_DETAILS = {
    forecastEvent: Models.ForecastEvent;
};
export declare const performOpenForecastEventDetails: (forecastEvent: ModelsCrm.ForecastEvent) => Action<PERFORM_OPEN_FORECAST_EVENT_DETAILS>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to clear currentForecastEvent.
 *
 */
export declare type PERFORM_CLEAR_CURRENT_FORECAST_EVENT = {};
export declare const performClearCurrentForecastEvent: () => Action<PERFORM_CLEAR_CURRENT_FORECAST_EVENT>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to navigate to customer screen.
 *
 */
export declare type PERFORM_CUSTOMER_OPEN = {};
export declare const performCustomerOpen: () => Action<PERFORM_CUSTOMER_OPEN>;
export declare type PERFORM_RESET_FORECAST_EVENT_EDIT_FORM = {};
export declare const performResetForecastEventEditForm: () => Action<PERFORM_RESET_FORECAST_EVENT_EDIT_FORM>;
export declare type PERFORM_PROGNOSTIC_EVENT_CREATE = {};
export declare const performPrognosticEventCreate: () => Action<PERFORM_PROGNOSTIC_EVENT_CREATE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request payement schedule list.
 */
export declare type CALL_GET_PAYMENT_SCHEDULE_LIST = {};
export declare const callGetPaymentScheduleList: () => Action<CALL_GET_PAYMENT_SCHEDULE_LIST>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset payement schedule state to default values.
 */
export declare type CALL_GET_PAYMENT_SCHEDULE_LIST_RESET = {};
export declare const callGetPaymentScheduleListReset: () => Action<CALL_GET_PAYMENT_SCHEDULE_LIST_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request payement schedule list.
 */
export declare type CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST = {};
export declare const callGetPaymentScheduleListRequest: () => Action<CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST>;
/**
 * Action dispatched on fetch succeeded in thunk "callGetPaymentScheduleList". Fetch payment schedule list.
 * @param {Models.PaymentScheduleList} response Data received by fetch.
 */
export declare type CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS = {
    response: Response<Models.PaymentScheduleList>;
};
export declare const callGetPaymentScheduleListSuccess: (response: Response<ModelsCrm.PaymentScheduleList>) => Action<CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS>;
/**
 * Action dispatched on fetch succeeded in thunk "callGetPaymentScheduleList". Fetch payment schedule list.
 * @param {Error} error Description of error while receiving data by fetch.
 */
export declare type CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE = {
    error: Error;
};
export declare const callGetPaymentScheduleListFailure: (error: Error) => Action<CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH = {};
export declare const performPaymentScheduleListFlush: () => Action<PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE = {};
export declare const performPaymentScheduleFilterPeriodSave: () => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET = {
    valueDateStart: Date | null;
    valueDateEnd: Date | null;
};
export declare const performPaymentScheduleFilterPeriodSet: (valueDateStart: Date | null, valueDateEnd: Date | null) => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE = {};
export declare const performPaymentScheduleFilterOperationTypeSave: () => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE = {};
export declare const performPaymentScheduleFilterStatusSave: () => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_LOAD_MORE = {};
export declare const performPaymentScheduleLoadMore: () => Action<PERFORM_PAYMENT_SCHEDULE_LOAD_MORE>;
/**
 * Internal thunk used in "Customer" container to show product list modal alert
 */
export declare type PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW = {};
export declare const performPaymentScheduleRefreshAlertShow: () => Action<PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW>;
/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export declare type PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE = {};
export declare const performPaymentScheduleRefreshAlertHide: () => Action<PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE>;
/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export declare type PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE = {};
export declare const performRefreshPaymentScheduleExecute: () => Action<PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to update Forecast/Prognostic event.
 *
 * @param {Models.ForecastEvent} event
 */
export declare type PERFORM_PROGNOSTIC_EVENT_UPDATE = {
    event: Models.ForecastEvent;
};
export declare const performPrognosticEventUpdate: (event: ModelsCrm.ForecastEvent) => Action<PERFORM_PROGNOSTIC_EVENT_UPDATE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to prognostic event view.
 *
 * @param {Models.ForecastEvent} event
 */
export declare type PERFORM_PROGNOSTIC_EVENT_DETAIL = {
    event: Models.ForecastEvent;
};
export declare const performPrognosticEventDetail: (event: ModelsCrm.ForecastEvent) => Action<PERFORM_PROGNOSTIC_EVENT_DETAIL>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to create event view.
 *
 */
export declare type PERFORM_FORECAST_EVENT_CREATE = {};
export declare const performForecastEventCreate: () => Action<PERFORM_FORECAST_EVENT_CREATE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to update event view.
 *
 * @param {Models.ForecastEvent} event
 */
export declare type PERFORM_FORECAST_EVENT_UPDATE = {
    event: Models.ForecastEvent;
};
export declare const performForecastEventUpdate: (event: ModelsCrm.ForecastEvent) => Action<PERFORM_FORECAST_EVENT_UPDATE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET = {};
export declare const performPaymentScheduleFilterPeriodReset: () => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT = {
    operationTypeOps: Array<string>;
};
export declare const performPaymentScheduleFilterOperationTypeSetDefault: (operationTypeOps: string[]) => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT>;
/**
 * Action dispatched on failure in thunk "performShowModalForecastEventGetListError". Thunk dispatched by "Product Credit" screen.
 *
 */
export declare type PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR = {};
export declare const performShowModalForecastEventGetListError: () => Action<PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT = {
    operationStatusOps: Array<string>;
};
export declare const performPaymentScheduleFilterStatusSetDefault: (operationStatusOps: string[]) => Action<PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT>;
/**
 * Internal thunk used in "Customer" container to show modal alert in payment schedule
 * @param { Enums.paymentScheduleAlternativeScenariosType } paymentScheduleAlternativeScenariosType
 * @param { string | null } paymentScheduleAlternativeScenariosTitle
 * @param { string | null } paymentScheduleAlternativeScenariosMessage
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW = {
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType;
    paymentScheduleAlternativeScenariosTitle: string | null;
    paymentScheduleAlternativeScenariosMessage: string | null;
};
export declare const performPaymentScheduleAlertShow: (paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage: string | null, paymentScheduleAlternativeScenariosTitle: string | null) => Action<PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW>;
/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE = {};
export declare const performPaymentScheduleAlertHide: () => Action<PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK = {};
export declare const performPaymentScheduleAlertViewHandleOk: () => Action<PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK>;
/**
 * Internal thunk used in "Customer" container to show product list modal alert
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL = {};
export declare const performPaymentScheduleAlertViewHandleCancel: () => Action<PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL>;
/**
 * Internal thunk used in "Customer" container to show product list modal alert
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW = {
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType;
    paymentScheduleAlternativeScenariosTitle: string | null;
    paymentScheduleAlternativeScenariosMessage: string | null;
};
export declare const performPaymentScheduleErrorShow: (paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage: string | null, paymentScheduleAlternativeScenariosTitle: string | null) => Action<PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW>;
/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE = {};
export declare const performPaymentScheduleErrorHide: () => Action<PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE>;
/**
 * Thunk dispatched by "ProductCredit" screen. Perform payment schedule list refresh.
 */
export declare type PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH = {};
export declare const performPaymentScheduleListRefresh: () => Action<PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH>;
/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export declare type PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT = {};
export declare const performPaymentScheduleErrorViewHandleRepeat: () => Action<PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT>;
export declare type PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR = {};
export declare const performHideModalForecastEventGetListError: () => Action<PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR>;
