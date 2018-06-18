/**
 * Actions of ProductCredit container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

export const CALL_GET_FORECAST_DEAL_LIST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST'
export const CALL_GET_FORECAST_DEAL_LIST_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST_FAILURE'
export const CALL_GET_FORECAST_DEAL_LIST_REQUEST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST_REQUEST'
export const CALL_GET_FORECAST_DEAL_LIST_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_DEAL_LIST_SUCCESS'

export const CALL_GET_FORECAST_EVENT_LIST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST'
export const CALL_GET_FORECAST_EVENT_LIST_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_FAILURE'
export const CALL_GET_FORECAST_EVENT_LIST_REQUEST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_REQUEST'
export const CALL_GET_FORECAST_EVENT_LIST_RESET = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_RESET'
export const CALL_GET_FORECAST_EVENT_LIST_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_FORECAST_EVENT_LIST_SUCCESS'

export const CALL_POST_FORECAST_EVENT_CREATE = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE'
export const CALL_POST_FORECAST_EVENT_CREATE_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_FAILURE'
export const CALL_POST_FORECAST_EVENT_CREATE_REQUEST = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REQUEST'
export const CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_SUCCESS'

export const FORECAST_EVENT_LIST_FILTER = 'PRODUCT_CREDIT_CONTAINER_FORECAST_EVENT_LIST_FILTER'

export const NAVIGATE_PRODUCT_CREDIT_BACK = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_PRODUCT_CREDIT_BACK'
export const NAVIGATE_PRODUCT_CREDIT_DEAL_BACK = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_PRODUCT_CREDIT_DEAL_BACK'
export const NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN'
export const NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN'
export const NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN'
export const NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN'
export const NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN'
export const NAVIGATE_TO_FORECAST_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_FORECAST_SCREEN'
export const NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN'
export const NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN = 'PRODUCT_CREDIT_CONTAINER_NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN'

export const PERFORM_CHANGE_TAB = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_TAB'

export const PERFORM_CONTAINER_RESET = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_CREATE_EVENT_POPUP_RESET = 'PRODUCT_CREDIT_CREATE_EVENT_POPUP_RESET'

export const PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP = 'PRODUCT_CREDIT_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP'

export const PERFORM_FILTER_APPLY = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_APPLY'
export const PERFORM_FILTER_CUSTOM_DATE_APPLY = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_CUSTOM_DATE_APPLY'
export const PERFORM_FILTER_EVENT_TYPE_RESET = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_EVENT_TYPE_RESET'
export const PERFORM_FILTER_PERIOD_RESET = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_PERIOD_RESET'
export const PERFORM_FILTER_RESET = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_RESET'

export const PERFORM_FORECAST_EVENT_SAVE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_SAVE'

export const PERFORM_FORECAST_EVENTS_LIST_FLUSH = 'PRODUCT_CREDIT_CONTAINER_FORECAST_EVENT_LIST_PERFORM_FORECAST_EVENTS_FLUSH'

export const PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION = 'PRODUCT_CREDIT_CREATE_POPUP_VALIDATION'

export const PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE'
export const PERFORM_INPUT_FILTER_PERIOD_END = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_END'
export const PERFORM_INPUT_FILTER_PERIOD_START = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_START'
export const PERFORM_INPUT_FILTER_PERIOD_TYPE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_TYPE'

export const PERFORM_INPUT_FORECAST_EVENT_COMMENT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_COMMENT'
export const PERFORM_INPUT_FORECAST_EVENT_CURRENCY = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_CURRENCY'
export const PERFORM_INPUT_FORECAST_EVENT_DATE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_DATE'
export const PERFORM_INPUT_FORECAST_EVENT_EMAIL = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_EMAIL'
export const PERFORM_INPUT_FORECAST_EVENT_FILTER_PERIOD_TYPE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_FILTER_PERIOD_TYPE'
export const PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY'
export const PERFORM_INPUT_FORECAST_EVENT_SUM = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_SUM'
export const PERFORM_INPUT_FORECAST_EVENT_TYPE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FORECAST_EVENT_TYPE'
export const PERFORM_INPUT_FULL_REPAYMENT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_FULL_REPAYMENT'

export const PERFORM_POPOVER_FILTER_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FILTER_HIDE'
export const PERFORM_POPOVER_FILTER_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FILTER_SHOW'

export const PERFORM_POPOVER_FORECAST_EVENT_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_HIDE'
export const PERFORM_POPOVER_FORECAST_EVENT_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_SHOW'

export const PERFORM_REFRESH_FORECAST = 'PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST'
export const PERFORM_REFRESH_FORECAST_EXECUTE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST_EXECUTE'
export const PERFORM_REFRESH_FORECAST_FAILURE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST_FAILURE'
export const PERFORM_REFRESH_FORECAST_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_FORECAST_SUCCESS'

export const PERFORM_SET_CURRENT_FORECAST_DEAL_ID = 'PRODUCT_CREDIT_CONTAINER_PERFORM_SET_CURRENT_FORECAST_DEAL_ID'

export const PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR = 'PRODUCT_CREDIT_CONTAINER_PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR'
export const PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR = 'PRODUCT_CREDIT_CONTAINER_PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR'



export const CALL_GET_COVENANT_LIST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_COVENANT_LIST'
export const CALL_GET_COVENANT_LIST_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_COVENANT_LIST_SUCCESS'
export const CALL_GET_COVENANT_LIST_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_COVENANT_LIST_FAILURE'


export const PERFORM_FILTER_PRODUCT_COVENANT_LIST = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FILTER_PRODUCT_COVENANT_LIST'

export const PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER'
export const PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER'



export const PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST'

export const PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST'

export const PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE'
export const PERFORM_APPLY_COVENANT_PERIOD_FILTER = 'PRODUCT_CREDIT_CONTAINER_PERFORM_APPLY_COVENANT_PERIOD_FILTER'
export const PERFORM_APPLY_COVENANT_STATUS_FILTER = 'PRODUCT_CREDIT_CONTAINER_PERFORM_APPLY_COVENANT_STATUS_FILTER'

export const CALL_POST_FORECAST_EVENT_EDIT_SAVE = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE'
export const CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST'
export const CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS'
export const CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE'

export const CALL_POST_FORECAST_EVENT_REMOVE = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE'
export const CALL_POST_FORECAST_EVENT_REMOVE_REQUEST = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE_REQUEST'
export const CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS'
export const CALL_POST_FORECAST_EVENT_REMOVE_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_POST_FORECAST_EVENT_REMOVE_FAILURE'

export const PERFORM_FORECAST_EVENT_DELETE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_DELETE'
export const PERFORM_OPEN_FORECAST_EVENT_DETAILS = 'PRODUCT_CREDIT_CONTAINER_PERFORM_OPEN_FORECAST_EVENT_DETAILS'
export const PERFORM_EDIT_FORECAST_EVENT = 'PRODUCT_CREDIT_PERFORM_EDIT_FORECAST_EVENT'
export const PERFORM_FILL_FORECAST_EVENT_EDIT_FORM = 'PRODUCT_CREDIT_PERFORM_FILL_FORECAST_EVENT_EDIT_FORM'
export const PERFORM_CLEAR_CURRENT_FORECAST_EVENT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CLEAR_CURRENT_FORECAST_EVENT'
export const PERFORM_CUSTOMER_OPEN = 'PRODUCT_CREDIT_CONTAINER_PERFORM_CUSTOMER_OPEN'

export const NAVIGATE_TO_FORECAST_EVENT_CREATE_PAGE = 'PRODUCT_CREDIT_NAVIGATE_TO_FORECAST_EVENT_CREATE_PAGE'
export const PERFORM_RESET_FORECAST_EVENT_EDIT_FORM = 'PRODUCT_CREDIT_PERFORM_RESET_FORECAST_EVENT_EDIT_FORM'

export const PERFORM_FORECAST_EVENT_CREATE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_CREATE'
export const PERFORM_FORECAST_EVENT_UPDATE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_FORECAST_EVENT_UPDATE'

export const PERFORM_PROGNOSTIC_EVENT_CREATE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PROGNOSTIC_EVENT_CREATE'
export const PERFORM_PROGNOSTIC_EVENT_UPDATE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PROGNOSTIC_EVENT_UPDATE'
export const PERFORM_PROGNOSTIC_EVENT_DETAIL = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PROGNOSTIC_EVENT_DETAIL'


export const PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE'
export const PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW'
export const PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE'
export const PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW'
export const PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE'
export const PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW'

export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED'
export const PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED = 'PRODUCT_CREDIT_CONTAINER_PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED'

export const PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER = 'PRODUCT_CREDIT_CONTAINER_PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER'

export const CALL_GET_PAYMENT_SCHEDULE_LIST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST'
export const CALL_GET_PAYMENT_SCHEDULE_LIST_RESET = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_RESET'
export const CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST'
export const CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS'
export const CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE = 'PRODUCT_CREDIT_CONTAINER_CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE'
export const PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FLUSH'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE'
export const PERFORM_PAYMENT_SCHEDULE_LOAD_MORE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_LOAD_MORE'
export const PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW'
export const PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE'
export const PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT'
export const PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT'
export const PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW'
export const PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE'
export const PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK'
export const PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL'
export const PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW'
export const PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE'
export const PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH'
export const PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT = 'PRODUCT_CREDIT_CONTAINER_PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT'
export const PERFORM_SET_PAYMENT_SCHEDULE_LIST = 'PRODUCT_CREDIT_CONTAINER_PERFORM_SET_PAYMENT_SCHEDULE_LIST'
export const PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED = 'PRODUCT_CREDIT_CONTAINER_PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED'

/**
 *
 */
export type PERFORM_SET_PAYMENT_SCHEDULE_LIST = { response: Response<Models.PaymentScheduleList> }
export const performSetPaymentScheduleList = (response: Response<Models.PaymentScheduleList>): Action<PERFORM_SET_PAYMENT_SCHEDULE_LIST> => ({
	type: PERFORM_SET_PAYMENT_SCHEDULE_LIST,
	payload: {
		response,
    },
})

/**
 *
 */
export type PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED = { response: Response<Models.PaymentScheduleList> }
export const performSetPaymentScheduleListFiltered = (response: Response<Models.PaymentScheduleList>): Action<PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED> => ({
	type: PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED,
	payload: {
		response,
	},
})

/**
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED = {}
export const performPaymentScheduleFilterOperationTypeSetApplied = (): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED> => ({
	type: PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED,
    payload: {},
})

/**
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED = {}
export const performPaymentScheduleFilterStatusSetApplied = (): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED> => ({
	type: PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED,
	payload: {},
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER = { value: boolean }
export const performPopoverPaymentSchedulePeriodSwitchDatePicker = (value: boolean): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START = { value: Date | null }
export const performInputPaymentScheduleFilterPeriodStart = (value: Date | null): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END = { value: Date | null }
export const performInputPaymentScheduleFilterPeriodEnd = (value: Date | null): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED = { value: Date | null }
export const performInputPaymentScheduleFilterPeriodStartApplied = (value: Date | null): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED = { value: Date | null }
export const performInputPaymentScheduleFilterPeriodEndApplied = (value: Date | null): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID = { value: boolean }
export const performinputPaymentScheduleFilterStatusNotPay = (value: boolean): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY = { value: boolean }
export const performinputPaymentScheduleFilterStatusForPay = (value: boolean): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID = { value: boolean }
export const performinputPaymentScheduleFilterStatusExecPay = (value: boolean): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT = { value: boolean }
export const performinputPaymentScheduleFilterOperCodeOther = (value: boolean): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT = { value: boolean }
export const performinputPaymentScheduleFilterOperCodeProc = (value: boolean): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user change checkbox in filter.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT = { value: boolean }
export const performinputPaymentScheduleFilterOperCodeCred = (value: boolean): Action<PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT> => ({
    type: PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT,
    payload: {
        value
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Период" filter.
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW = {}
export const performPopoverPaymentSchedulePeriodFilterShow = (): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Период" filter.
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE = {}
export const performPopoverPaymentSchedulePeriodFilterHide = (): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Тип операции" filter.
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW = {}
export const performPopoverPaymentScheduleOperationTypeFilterShow = (): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Тип операции" filter.
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE = {}
export const performPopoverPaymentScheduleOperationTypeFilterHide = (): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Статус" filter.
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW = {}
export const performPopoverPaymentScheduleStatusFilterShow = (): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Статус" filter.
 */
export type PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE = {}
export const performPopoverPaymentScheduleStatusFilterHide = (): Action<PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE> => ({
    type: PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to payment schedule screen.
 */
export type NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN = {}
export const navigateToPaymentScheduleScreen = (): Action<NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN> => ({
    type: NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN,
    payload: {}
})
export const PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR = 'PRODUCT_CREDIT_CONTAINER_PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR'
export const PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR = 'PRODUCT_CREDIT_CONTAINER_PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR'

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_FORECAST_EVENTS_LIST_FLUSH = {}
export const performFirecastEventsListFlush = (): Action<PERFORM_FORECAST_EVENTS_LIST_FLUSH> => ({
    type: PERFORM_FORECAST_EVENTS_LIST_FLUSH,
    payload: {}
})


/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *  @param {Models.CovenantList}
 *
 */
export type PERFORM_FILTER_PRODUCT_COVENANT_LIST = {covenantList: Models.ProductCovenantList}
export const performFilterCovenantList = (covenantList: Models.ProductCovenantList): Action<PERFORM_FILTER_PRODUCT_COVENANT_LIST> => ({
    type: PERFORM_FILTER_PRODUCT_COVENANT_LIST,
    payload: {covenantList}
})
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get covenant list.
 *
 */
export type CALL_GET_COVENANT_LIST = {}
export const callGetCovenantList = (): Action<CALL_GET_COVENANT_LIST> => ({
    type: CALL_GET_COVENANT_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change visible popover of credit covenant filter.
 * @param {boolean}
 */
export type PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER =  {value: boolean}
export const performChangeVisiblePopoverCovenantPeriodFilter = (value: boolean): Action<PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER> => ({
    type: PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER,
    payload: {value}
})


/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change visible popover of credit covenant filter.
 * @param {boolean}
 *
 */
export type PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER = {value: boolean}
export const performChangeVisiblePopoverCovenantStatusFilter = (value: boolean): Action<PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER> => ({
    type: PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER,
    payload: {value}
})


/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change visible popover of credit covenant filter.
 * @param {date | null}
 */
export type PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE = {value: Date | null}
export const performChangeCovenantDateFilterValue = (value: Date | null): Action<PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE> => ({
    type: PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE,
    payload: {value}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export type PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST= {valueList: ModelsApp.ClassifierList}
export const performChangeCheckStatusCreditCovenantPeriodFilterValueList= (valueList: ModelsApp.ClassifierList): Action<PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST> => ({
    type: PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST,
    payload: {valueList}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export type PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST= {valueList: ModelsApp.ClassifierList}
export const performChangeCheckStatusCreditCovenantStatusFilterValueList= (valueList: ModelsApp.ClassifierList): Action<PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST> => ({
    type: PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST,
    payload: {valueList}
})


/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export type PERFORM_APPLY_COVENANT_PERIOD_FILTER= {valueList: ModelsApp.ClassifierList}
export const performApplyCovenantPeriodFilter= (valueList: ModelsApp.ClassifierList): Action<PERFORM_APPLY_COVENANT_PERIOD_FILTER> => ({
    type: PERFORM_APPLY_COVENANT_PERIOD_FILTER,
    payload: {valueList}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change status of credit value covenant filter.
 * @param {ModelsApp.ClassifierList}
 */
export type PERFORM_APPLY_COVENANT_STATUS_FILTER = {valueList: ModelsApp.ClassifierList}
export const performApplyCovenantStatusFilter= (valueList: ModelsApp.ClassifierList): Action<PERFORM_APPLY_COVENANT_STATUS_FILTER> => ({
    type: PERFORM_APPLY_COVENANT_STATUS_FILTER,
    payload: {valueList}
})

/**
 * Action dispatched on fetch succeeded in thunk "callGetForecastEventList". Fetch forecast list.
 *
 * @param {Models.ForecastEventList} response Data received by fetch.
 * @param {ModelsApp.ClassifierList}
 * @param {ModelsApp.ClassifierList}
 */
export type CALL_GET_COVENANT_LIST_SUCCESS = { response: Response<Models.ProductCovenantList>,
    periodFilterValueList: ModelsApp.ClassifierList,
    statusFilterValueList: ModelsApp.ClassifierList}
export const callGetCovenantListSuccess = (
    response: Response<Models.ProductCovenantList>,
    periodFilterValueList: ModelsApp.ClassifierList,
    statusFilterValueList: ModelsApp.ClassifierList): Action<CALL_GET_COVENANT_LIST_SUCCESS> => ({
    type: CALL_GET_COVENANT_LIST_SUCCESS,
    payload: {
        response,
        periodFilterValueList,
        statusFilterValueList
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 * @param {Models.Error} .
 */
export type CALL_GET_COVENANT_LIST_FAILURE = { error: Models.Error}
export const callGetCovenantListFailure = (error: Models.Error): Action<CALL_GET_COVENANT_LIST_FAILURE> => ({
    type: CALL_GET_COVENANT_LIST_FAILURE,
    payload: {
        error: error
    }
})


/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.ProductCreditTab} value .
 */
export type PERFORM_CHANGE_TAB = { index: number, value: Enums.ProductCreditTab, }
export const performChangeTab = (index: number, value: Enums.ProductCreditTab,): Action<PERFORM_CHANGE_TAB> => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index,
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
 *
 */
export type NAVIGATE_TO_FORECAST_SCREEN = {}
export const navigateToForecastScreen = (): Action<NAVIGATE_TO_FORECAST_SCREEN> => ({
    type: NAVIGATE_TO_FORECAST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back.
 *
 */
export type NAVIGATE_PRODUCT_CREDIT_BACK = {}
export const navigateProductCreditBack = (): Action<NAVIGATE_PRODUCT_CREDIT_BACK> => ({
    type: NAVIGATE_PRODUCT_CREDIT_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back to deal screen.
 *
 */
export type NAVIGATE_PRODUCT_CREDIT_DEAL_BACK = {}
export const navigateProductCreditDealBack = (): Action<NAVIGATE_PRODUCT_CREDIT_DEAL_BACK> => ({
    type: NAVIGATE_PRODUCT_CREDIT_DEAL_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 *
 * @param {Models.ForecastEvent} forecastEvent .
 */
export type PERFORM_POPOVER_FORECAST_EVENT_SHOW = { forecastEvent: Models.ForecastEvent, }
export const performPopoverForecastEventShow = (forecastEvent: Models.ForecastEvent,): Action<PERFORM_POPOVER_FORECAST_EVENT_SHOW> => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_SHOW,
    payload: {
        forecastEvent,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_FORECAST_EVENT_HIDE = {}
export const performPopoverForecastEventHide = (): Action<PERFORM_POPOVER_FORECAST_EVENT_HIDE> => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION = {}
export const performInputCreatePopupEventValidation = (): Action<PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION> => ({
    type: PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export type NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN = {}
export const navigateToForecastEventTypPickerScreen = (): Action<NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export type NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN = {}
export const navigateToForecastEventFilterTypePickerScreen = (): Action<NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN,
    payload: {
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_TYPE = { value: ModelsApp.Classifier }
export const performInputForecastEventType = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_FORECAST_EVENT_TYPE> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_TYPE,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_DATE = { value: Date | null }
export const performInputForecastEventDate = (value: Date | null): Action<PERFORM_INPUT_FORECAST_EVENT_DATE> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_DATE,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export type NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN = {}
export const navigateToForecastEventPossibilityPickerScreen = (): Action<NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 *
 */
export type NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN = {}
export const navigateToForecastEventFilterPeriodScreen = (): Action<NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN> => ({
    type: NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN,
    payload: {
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.ForecastEventPossibility} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY = { value: number }
export const performInputForecastEventPossibility = (value: number): Action<PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user tap Currency field.
 *
 */
export type NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN = {}
export const navigateToForecastEventCurrencyPickerScreen = (): Action<NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input Currency field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_CURRENCY = { value: ModelsApp.Classifier }
export const performInputForecastEventCurrency = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_FORECAST_EVENT_CURRENCY> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_CURRENCY,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_SUM = { value: string | null }
export const performInputForecastEventSum = (value: string | null): Action<PERFORM_INPUT_FORECAST_EVENT_SUM> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_SUM,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export type PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP = {  }
export const performFillDefaultValuesAndShowCreateEventPopup = (): Action<PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP> => ({
    type: PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP,
    payload: {
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export type PERFORM_CREATE_EVENT_POPUP_RESET = {  }
export const performFilterCreateEventPopupReset = (): Action<PERFORM_CREATE_EVENT_POPUP_RESET> => ({
    type: PERFORM_CREATE_EVENT_POPUP_RESET,
    payload: {
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_FULL_REPAYMENT = { value: boolean }
export const performInputFullRepayment = (value: boolean): Action<PERFORM_INPUT_FULL_REPAYMENT> => ({
    type: PERFORM_INPUT_FULL_REPAYMENT,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_EMAIL = { value: string }
export const performInputForecastEventEmail = (value: string): Action<PERFORM_INPUT_FORECAST_EVENT_EMAIL> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_EMAIL,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_FORECAST_EVENT_COMMENT = { value: string }
export const performInputForecastEventComment = (value: string): Action<PERFORM_INPUT_FORECAST_EVENT_COMMENT> => ({
    type: PERFORM_INPUT_FORECAST_EVENT_COMMENT,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to save forecast event.
 *
 */
export type PERFORM_FORECAST_EVENT_SAVE = {}
export const performForecastEventSave = (): Action<PERFORM_FORECAST_EVENT_SAVE> => ({
    type: PERFORM_FORECAST_EVENT_SAVE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_FILTER_SHOW = {}
export const performPopoverFilterShow = (): Action<PERFORM_POPOVER_FILTER_SHOW> => ({
    type: PERFORM_POPOVER_FILTER_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_FILTER_HIDE = {}
export const performPopoverFilterHide = (): Action<PERFORM_POPOVER_FILTER_HIDE> => ({
    type: PERFORM_POPOVER_FILTER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE = { value: ModelsApp.Classifier }
export const performInputFilterForecastEventType = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE> => ({
    type: PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE,
    payload: {
        value,
    }
})

/**
 * Internal thunk used in "ProductCredit" container. Thunk dispatched on user select custom period type.
 *
 */
export type NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = {}
export const navigateToPeriodTypeCustomScreen = (): Action<NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN> => ({
    type: NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.ForecastPeriodType} value .
 */
export type PERFORM_INPUT_FILTER_PERIOD_TYPE = { value: Enums.ForecastPeriodType }
export const performInputFilterPeriodType = (value: Enums.ForecastPeriodType): Action<PERFORM_INPUT_FILTER_PERIOD_TYPE> => ({
    type: PERFORM_INPUT_FILTER_PERIOD_TYPE,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodStart field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_FILTER_PERIOD_START = { value: Date | null }
export const performInputFilterPeriodStart = (value: Date | null): Action<PERFORM_INPUT_FILTER_PERIOD_START> => ({
    type: PERFORM_INPUT_FILTER_PERIOD_START,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodEnd field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_FILTER_PERIOD_END = { value: Date | null }
export const performInputFilterPeriodEnd = (value: Date | null): Action<PERFORM_INPUT_FILTER_PERIOD_END> => ({
    type: PERFORM_INPUT_FILTER_PERIOD_END,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
 *
 */
export type PERFORM_FILTER_APPLY = {}
export const performFilterApply = (): Action<PERFORM_FILTER_APPLY> => ({
    type: PERFORM_FILTER_APPLY,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
 *
 */
export type PERFORM_FILTER_CUSTOM_DATE_APPLY = {}
export const performFilterCustomDateApply = (): Action<PERFORM_FILTER_CUSTOM_DATE_APPLY> => ({
    type: PERFORM_FILTER_CUSTOM_DATE_APPLY,
    payload: {
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 *
 */
export type PERFORM_FILTER_RESET = {}
export const performFilterReset = (): Action<PERFORM_FILTER_RESET> => ({
    type: PERFORM_FILTER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 *
 */
export type PERFORM_FILTER_EVENT_TYPE_RESET = {}
export const performFilterEventTypeReset = (): Action<PERFORM_FILTER_EVENT_TYPE_RESET> => ({
    type: PERFORM_FILTER_EVENT_TYPE_RESET,
    payload: {
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 *
 */
export type PERFORM_FILTER_PERIOD_RESET = {}
export const performFilterPeriodReset = (): Action<PERFORM_FILTER_PERIOD_RESET> => ({
    type: PERFORM_FILTER_PERIOD_RESET,
    payload: {
    }
})

/**
 * Internal thunk used in "ProductCredit" container. Thunk dispatched to filter forecast event list.
 *
 * @param {Models.ForecastEventList} forecastEventList .
 */
export type FORECAST_EVENT_LIST_FILTER = { forecastEventList: Models.ForecastEventList, }
export const forecastEventListFilter = (forecastEventList: Models.ForecastEventList,): Action<FORECAST_EVENT_LIST_FILTER> => ({
    type: FORECAST_EVENT_LIST_FILTER,
    payload: {
        forecastEventList,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE = {}
export const callPostForecastEventCreate = (): Action<CALL_POST_FORECAST_EVENT_CREATE> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE_REQUEST = {}
export const callPostForecastEventCreateRequest = (): Action<CALL_POST_FORECAST_EVENT_CREATE_REQUEST> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_REQUEST,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = {}
export const callPostForecastEventCreateSuccess = (): Action<CALL_POST_FORECAST_EVENT_CREATE_SUCCESS> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_SUCCESS,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type CALL_POST_FORECAST_EVENT_CREATE_FAILURE = { error: Models.Error}
export const callPostForecastEventCreateFailure = (error: Models.Error): Action<CALL_POST_FORECAST_EVENT_CREATE_FAILURE> => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_FAILURE,
    payload: {
        error
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type CALL_GET_FORECAST_EVENT_LIST = {}
export const callGetForecastEventList = (): Action<CALL_GET_FORECAST_EVENT_LIST> => ({
    type: CALL_GET_FORECAST_EVENT_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request event list.
 *
 */
export type CALL_GET_FORECAST_EVENT_LIST_RESET = {}
export const callGetForecastEventListReset = (): Action<CALL_GET_FORECAST_EVENT_LIST_RESET> => ({
    type: CALL_GET_FORECAST_EVENT_LIST_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request event list.
 *
 */
export type CALL_GET_FORECAST_EVENT_LIST_REQUEST = {}
export const callGetForecastEventListRequest = (): Action<CALL_GET_FORECAST_EVENT_LIST_REQUEST> => ({
    type: CALL_GET_FORECAST_EVENT_LIST_REQUEST,
    payload: {}
})

/**
 * Action dispatched on fetch succeeded in thunk "callGetForecastEventList". Fetch forecast list.
 *
 * @param {Models.ForecastEventList} response Data received by fetch.
 */
export type CALL_GET_FORECAST_EVENT_LIST_SUCCESS = { response: Response<Models.ForecastEventList> }
export const callGetForecastEventListSuccess = (response: Response<Models.ForecastEventList>): Action<CALL_GET_FORECAST_EVENT_LIST_SUCCESS> => ({
    type: CALL_GET_FORECAST_EVENT_LIST_SUCCESS,
    payload: {
        response
    }
})

/**
 * Action dispatched on fetch succeeded in thunk "callGetForecastEventList". Fetch forecast list.
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_FORECAST_EVENT_LIST_FAILURE = { error: Error }
export const callGetForecastEventListFailure = (error: Error): Action<CALL_GET_FORECAST_EVENT_LIST_FAILURE> => ({
    type: CALL_GET_FORECAST_EVENT_LIST_FAILURE,
    payload: {
        error
    }
})

/**
 * Thunk dispatched by "Product Credit" screen. Thunk chain used to update event list.
 *
 */
export type PERFORM_REFRESH_FORECAST = {}
export const performRefreshForecast = (): Action<PERFORM_REFRESH_FORECAST> => ({
    type: PERFORM_REFRESH_FORECAST,
    payload: {
    }
})

/*
 * Action dispatched on thunk chain "performRefreshForecast" started. Thunk dispatched by "Product Credit" screen. Thunk chain used to update forecast events list.
 */
export type PERFORM_REFRESH_FORECAST_EXECUTE = {}
export const performRefreshForecastExecute = (): Action<PERFORM_REFRESH_FORECAST_EXECUTE> => ({
    type: PERFORM_REFRESH_FORECAST_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performRefreshForecast". Thunk dispatched by "Product Credit" screen. Thunk chain used to update forecast events list.
 *
 * @param {Models.ForecastEventList} data Result data of thunk chain.
 */
export type PERFORM_REFRESH_FORECAST_SUCCESS = {}
export const performRefreshForecastSuccess = (): Action<PERFORM_REFRESH_FORECAST_SUCCESS> => ({
    type: PERFORM_REFRESH_FORECAST_SUCCESS,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performRefreshForecast". Thunk dispatched by "Product Credit" screen. Thunk chain used to update forecast events list.
 *
 */
export type PERFORM_REFRESH_FORECAST_FAILURE = {}
export const performRefreshForecastFailure = (): Action<PERFORM_REFRESH_FORECAST_FAILURE> => ({
    type: PERFORM_REFRESH_FORECAST_FAILURE,
    payload: {}
})


/*
 * Action dispatched on failure in thunk "performRefreshForecast". Thunk dispatched by "Product Credit" screen. Thunk chain used to update forecast events list.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_SET_CURRENT_FORECAST_DEAL_ID = { dealId: string }
export const performSetCurrentForecastDealId = (dealId: string): Action<PERFORM_SET_CURRENT_FORECAST_DEAL_ID> => ({
    type: PERFORM_SET_CURRENT_FORECAST_DEAL_ID,
    payload: {
        dealId
    }
})

/*
 * Action dispatched on failure in thunk "performShowModalForecastEventSaveError". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR = { }
export const performShowModalForecastEventSaveError = (): Action<PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR> => ({
    type: PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performHideModalForecastEventSaveError". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR = { }
export const performHideModalForecastEventSaveError = (): Action<PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR> => ({
    type: PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performEditForecastEvent". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_EDIT_FORECAST_EVENT = { }
export const performEditForecastEvent = (): Action<PERFORM_EDIT_FORECAST_EVENT> => ({
    type: PERFORM_EDIT_FORECAST_EVENT,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performEditForecastEvent". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_FILL_FORECAST_EVENT_EDIT_FORM = { }
export const performFillForecastEventEditForm = (): Action<PERFORM_FILL_FORECAST_EVENT_EDIT_FORM> => ({
    type: PERFORM_FILL_FORECAST_EVENT_EDIT_FORM,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventEditSave". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_EDIT_SAVE = {}
export const callPostForecastEventEditSave = (): Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE> => ({
    type: CALL_POST_FORECAST_EVENT_EDIT_SAVE,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventEditSaveRequest". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST = {}
export const callPostForecastEventEditSaveRequest = (): Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST> => ({
    type: CALL_POST_FORECAST_EVENT_EDIT_SAVE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventEditSaveSuccess". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS = {}
export const callPostForecastEventEditSaveSuccess = (): Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS> => ({
    type: CALL_POST_FORECAST_EVENT_EDIT_SAVE_SUCCESS,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventEditSaveFailure". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE = {error: Error}
export const callPostForecastEventEditSaveFailure = (error: Error): Action<CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE> => ({
    type: CALL_POST_FORECAST_EVENT_EDIT_SAVE_FAILURE,
    payload: {error}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventRemove". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_REMOVE = {}
export const callPostForecastEventRemove = (): Action<CALL_POST_FORECAST_EVENT_REMOVE> => ({
    type: CALL_POST_FORECAST_EVENT_REMOVE,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventRemoveRequest". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_REMOVE_REQUEST = {}
export const callPostForecastEventRemoveRequest = (): Action<CALL_POST_FORECAST_EVENT_REMOVE_REQUEST> => ({
    type: CALL_POST_FORECAST_EVENT_REMOVE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventRemoveSuccess". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS = {}
export const callPostForecastEventRemoveSuccess = (): Action<CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS> => ({
    type: CALL_POST_FORECAST_EVENT_REMOVE_SUCCESS,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "callPostForecastEventRemoveFailure". Thunk dispatched by "Product Credit" screen.
 *
 */
export type CALL_POST_FORECAST_EVENT_REMOVE_FAILURE = {error: Error}
export const callPostForecastEventRemoveFailure = (error: Error): Action<CALL_POST_FORECAST_EVENT_REMOVE_FAILURE> => ({
    type: CALL_POST_FORECAST_EVENT_REMOVE_FAILURE,
    payload: {error}
})

/*
 * Action dispatched on failure in thunk "performForecastEventDelete". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_FORECAST_EVENT_DELETE = {}
export const performForecastEventDelete = (): Action<PERFORM_FORECAST_EVENT_DELETE> => ({
    type: PERFORM_FORECAST_EVENT_DELETE,
    payload: {}
})

/**
 * Action dispatched on failure in thunk "performOpenForecastEventDetails". Thunk dispatched by "Product Credit" screen.
 *
 * @param {Models.ForecastEvent} forecastEvent
 */
export type PERFORM_OPEN_FORECAST_EVENT_DETAILS = {forecastEvent: Models.ForecastEvent}
export const performOpenForecastEventDetails = (forecastEvent: Models.ForecastEvent): Action<PERFORM_OPEN_FORECAST_EVENT_DETAILS> => ({
    type: PERFORM_OPEN_FORECAST_EVENT_DETAILS,
    payload: {
        forecastEvent
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to clear currentForecastEvent.
 *
 */
export type PERFORM_CLEAR_CURRENT_FORECAST_EVENT = {}
export const performClearCurrentForecastEvent = (): Action<PERFORM_CLEAR_CURRENT_FORECAST_EVENT> => ({
    type: PERFORM_CLEAR_CURRENT_FORECAST_EVENT,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to navigate to customer screen.
 *
 */
export type PERFORM_CUSTOMER_OPEN = {}
export const performCustomerOpen = (): Action<PERFORM_CUSTOMER_OPEN> => ({
    type: PERFORM_CUSTOMER_OPEN,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performOpenForecastEventDetails". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_RESET_FORECAST_EVENT_EDIT_FORM = { }
export const performResetForecastEventEditForm = (): Action<PERFORM_RESET_FORECAST_EVENT_EDIT_FORM> => ({
    type: PERFORM_RESET_FORECAST_EVENT_EDIT_FORM,
    payload: {}
})

/*
 * Thunk dispatched by "PrognosticDealInfo" screen. Thunk dispatched to open "Forecast Event" form (same form in "Prognostic Event")
 *
 */
export type PERFORM_PROGNOSTIC_EVENT_CREATE = { }
export const performPrognosticEventCreate = (): Action<PERFORM_PROGNOSTIC_EVENT_CREATE> => ({
    type: PERFORM_PROGNOSTIC_EVENT_CREATE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request payement schedule list.
 */
export type CALL_GET_PAYMENT_SCHEDULE_LIST = {}
export const callGetPaymentScheduleList = (): Action<CALL_GET_PAYMENT_SCHEDULE_LIST> => ({
    type: CALL_GET_PAYMENT_SCHEDULE_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset payement schedule state to default values.
 */
export type CALL_GET_PAYMENT_SCHEDULE_LIST_RESET = {}
export const callGetPaymentScheduleListReset = (): Action<CALL_GET_PAYMENT_SCHEDULE_LIST_RESET> => ({
    type: CALL_GET_PAYMENT_SCHEDULE_LIST_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get request payement schedule list.
 */
export type CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST = {}
export const callGetPaymentScheduleListRequest = (): Action<CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST> => ({
    type: CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST,
    payload: {}
})

/**
 * Action dispatched on fetch succeeded in thunk "callGetPaymentScheduleList". Fetch payment schedule list.
 * @param {Models.PaymentScheduleList} response Data received by fetch.
 */
export type CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS = { response: Response<Models.PaymentScheduleList>}
export const callGetPaymentScheduleListSuccess = (response: Response<Models.PaymentScheduleList>): Action<CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS> => ({
    type: CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS,
    payload: {
        response,
    }
})

/**
 * Action dispatched on fetch succeeded in thunk "callGetPaymentScheduleList". Fetch payment schedule list.
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE = { error: Error }
export const callGetPaymentScheduleListFailure = (error: Error): Action<CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE> => ({
    type: CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE,
    payload: {
        error
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH = {}
export const performPaymentScheduleListFlush = (): Action<PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH> => ({
    type: PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE = {}
export const performPaymentScheduleFilterPeriodSave = (): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET = { valueDateStart: Date | null, valueDateEnd: Date | null }
export const performPaymentScheduleFilterPeriodSet = (valueDateStart: Date | null, valueDateEnd: Date | null): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET,
    payload: {
        valueDateStart,
        valueDateEnd,
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE = {}
export const performPaymentScheduleFilterOperationTypeSave = (): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE = {}
export const performPaymentScheduleFilterStatusSave = (): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_LOAD_MORE = {}
export const performPaymentScheduleLoadMore = (): Action<PERFORM_PAYMENT_SCHEDULE_LOAD_MORE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_LOAD_MORE,
    payload: {}
})

/**
 * Internal thunk used in "Customer" container to show product list modal alert
 */
export type PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW = {}
export const performPaymentScheduleRefreshAlertShow = (): Action<PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW> => ({
    type: PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW,
    payload: {}
})

/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export type PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE = {}
export const performPaymentScheduleRefreshAlertHide = (): Action<PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE,
    payload: {}
})

/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export type PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE = {}
export const performRefreshPaymentScheduleExecute = (): Action<PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE> => ({
    type: PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to update Forecast/Prognostic event.
 *
 * @param {Models.ForecastEvent} event
 */
export type PERFORM_PROGNOSTIC_EVENT_UPDATE = {event: Models.ForecastEvent}
export const performPrognosticEventUpdate = (event: Models.ForecastEvent): Action<PERFORM_PROGNOSTIC_EVENT_UPDATE> => ({
    type: PERFORM_PROGNOSTIC_EVENT_UPDATE,
    payload: {
        event
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to prognostic event view.
 *
 * @param {Models.ForecastEvent} event
 */
export type PERFORM_PROGNOSTIC_EVENT_DETAIL = {event: Models.ForecastEvent}
export const performPrognosticEventDetail = (event: Models.ForecastEvent): Action<PERFORM_PROGNOSTIC_EVENT_DETAIL> => ({
    type: PERFORM_PROGNOSTIC_EVENT_DETAIL,
    payload: {
        event
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to create event view.
 *
 */
export type PERFORM_FORECAST_EVENT_CREATE = { }
export const performForecastEventCreate = (): Action<PERFORM_FORECAST_EVENT_CREATE> => ({
    type: PERFORM_FORECAST_EVENT_CREATE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to update event view.
 *
 * @param {Models.ForecastEvent} event
 */
export type PERFORM_FORECAST_EVENT_UPDATE = {event: Models.ForecastEvent}
export const performForecastEventUpdate = (event: Models.ForecastEvent): Action<PERFORM_FORECAST_EVENT_UPDATE> => ({
    type: PERFORM_FORECAST_EVENT_UPDATE,
    payload: {
        event
    }
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET = {}
export const performPaymentScheduleFilterPeriodReset = (): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT = {operationTypeOps: Array<string>}
export const performPaymentScheduleFilterOperationTypeSetDefault = (operationTypeOps: Array<string>): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT,
    payload: { operationTypeOps }
})
/**
 * Action dispatched on failure in thunk "performShowModalForecastEventGetListError". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR = { }
export const performShowModalForecastEventGetListError = (): Action<PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR> => ({
    type: PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT = {operationStatusOps: Array<string>}
export const performPaymentScheduleFilterStatusSetDefault = (operationStatusOps: Array<string>): Action<PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT> => ({
    type: PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT,
    payload: { operationStatusOps }
})

/**
 * Internal thunk used in "Customer" container to show modal alert in payment schedule
 * @param { Enums.paymentScheduleAlternativeScenariosType } paymentScheduleAlternativeScenariosType
 * @param { string | null } paymentScheduleAlternativeScenariosTitle
 * @param { string | null } paymentScheduleAlternativeScenariosMessage
 */
export type PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW = {
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
    paymentScheduleAlternativeScenariosTitle: string | null,
    paymentScheduleAlternativeScenariosMessage: string | null
 }
export const performPaymentScheduleAlertShow = (
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlternativeScenariosTitle: string | null,
): Action<PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW,
    payload: {
        paymentScheduleAlternativeScenariosType,
        paymentScheduleAlternativeScenariosTitle,
        paymentScheduleAlternativeScenariosMessage,
    }
})

/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export type PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE = {}
export const performPaymentScheduleAlertHide = (): Action<PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK = {}
export const performPaymentScheduleAlertViewHandleOk = (): Action<PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK,
    payload: {}
})

/**
 * Internal thunk used in "Customer" container to show product list modal alert
 */
export type PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL = {}
export const performPaymentScheduleAlertViewHandleCancel = (): Action<PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL,
    payload: {}
})

/**
 * Internal thunk used in "Customer" container to show product list modal alert
 */
export type PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW = {
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
    paymentScheduleAlternativeScenariosTitle: string | null,
    paymentScheduleAlternativeScenariosMessage: string | null
}

export const performPaymentScheduleErrorShow = (
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlternativeScenariosTitle: string | null,
): Action<PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW,
    payload: {
        paymentScheduleAlternativeScenariosType,
        paymentScheduleAlternativeScenariosTitle,
        paymentScheduleAlternativeScenariosMessage,
    }
})

/**
 * Internal thunk used in "Customer" container to hide product list modal alert
 */
export type PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE = {}
export const performPaymentScheduleErrorHide = (): Action<PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Perform payment schedule list refresh.
 */
export type PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH = {}
export const performPaymentScheduleListRefresh = (): Action<PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH> => ({
    type: PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH,
    payload: {}
})

/**
 * Thunk dispatched by "ProductCredit" screen. Fetch forecast events list with cache flushed.
 *
 */
export type PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT = {}
export const performPaymentScheduleErrorViewHandleRepeat = (): Action<PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT> => ({
    type: PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performShowModalForecastEventGetListError". Thunk dispatched by "Product Credit" screen.
 *
 */
export type PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR = {}
export const performHideModalForecastEventGetListError = (): Action<PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR> => ({
    type: PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR,
    payload: {}
})
