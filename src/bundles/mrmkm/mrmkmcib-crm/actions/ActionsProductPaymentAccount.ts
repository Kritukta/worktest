/**
 * Actions of ProductPaymentAccount container.
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


export const PERFORM_CHANGE_TAB = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_CHANGE_TAB'

export const PERFORM_INPUT_SUM_MIN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_SUM_MIN'

export const PERFORM_INPUT_SUM_MAX = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_SUM_MAX'

export const PERFORM_POPOVER_FILTER_SHOW = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_FILTER_SHOW'

export const PERFORM_POPOVER_FILTER_HIDE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_FILTER_HIDE'

export const PERFORM_INPUT_OPERATION_TYPE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_OPERATION_TYPE'

export const PERFORM_POPOVER_PERIOD_TYPE_SHOW = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_PERIOD_TYPE_SHOW'

export const PERFORM_POPOVER_PERIOD_TYPE_HIDE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_PERIOD_TYPE_HIDE'

export const PERFORM_INPUT_PERIOD_TYPE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_PERIOD_TYPE'

export const PERFORM_INPUT_FILTER_PERIOD_START = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_START'

export const PERFORM_INPUT_FILTER_PERIOD_END = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_END'

export const PERFORM_FILTER_APPLY = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_FILTER_APPLY'

export const PERFORM_FILTER_RESET = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_FILTER_RESET'

export const OPERATION_LIST_FILTER = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_OPERATION_LIST_FILTER'

export const NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN'

export const NAVIGATE_PERIOD_TYPE_CUSTOM_BACK = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_PERIOD_TYPE_CUSTOM_BACK'

export const CALL_GET_OPERATION_LIST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST'
export const CALL_GET_OPERATION_LIST_REQUEST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_REQUEST'
export const CALL_GET_OPERATION_LIST_SUCCESS = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_SUCCESS'
export const CALL_GET_OPERATION_LIST_FAILURE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_FAILURE'

export const CALL_GET_CARD_INDEX_LIST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST'
export const CALL_GET_CARD_INDEX_LIST_REQUEST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_REQUEST'
export const CALL_GET_CARD_INDEX_LIST_SUCCESS = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_SUCCESS'
export const CALL_GET_CARD_INDEX_LIST_FAILURE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_FAILURE'


export const CALL_GET_CARD_INDEX_EKS_LIST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST'
export const CALL_GET_CARD_INDEX_EKS_LIST_REQUEST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_REQUEST'
export const CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS'
export const CALL_GET_CARD_INDEX_EKS_LIST_FAILURE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_FAILURE'

export const NAVIGATE_TO_RESTRICTION_LIST_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_RESTRICTION_LIST_SCREEN'

export const NAVIGATE_TO_CARD_INDEX_LIST_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_CARD_INDEX_LIST_SCREEN'

export const NAVIGATE_TO_TARIFF_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_TARIFF_SCREEN'

export const NAVIGATE_TO_VSP_INFO_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_VSP_INFO_SCREEN'

export const NAVIGATE_TO_OPERATION_LIST_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_OPERATION_LIST_SCREEN'

export const NAVIGATE_TO_DASHBOARD_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_DASHBOARD_SCREEN'

export const NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK'

export const PERFORM_CONTAINER_RESET = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_CONTAINER_RESET'

export const CLEAR_CARD_INDEX_LIST_CACHE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CLEAR_CARD_INDEX_LIST_CACHE'
export const CLEAR_OPERATION_LIST_CACHE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CLEAR_OPERATION_LIST_CACHE'

export const CALL_GET_PRODUCT_VSP_INFO = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO"
export const CALL_GET_PRODUCT_VSP_INFO_REQUEST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_REQUEST"
export const CALL_GET_PRODUCT_VSP_INFO_SUCCESS = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_SUCCESS"
export const CALL_GET_PRODUCT_VSP_INFO_FAILURE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_FAILURE"

export const PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE  = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE"

export const PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE  = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE"
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. (Deprecated)Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.ProductPaymentAccountTab} value .
 */
export type PERFORM_CHANGE_TAB = { index: number, value: Enums.ProductPaymentAccountTab, }
export const performChangeTab = (index: number, value: Enums.ProductPaymentAccountTab,): Action<PERFORM_CHANGE_TAB> => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index: index,
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export type PERFORM_INPUT_SUM_MIN = { value: number | null }
export const performInputSumMin = (value: number | null): Action<PERFORM_INPUT_SUM_MIN> => ({
    type: PERFORM_INPUT_SUM_MIN,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export type PERFORM_INPUT_SUM_MAX = { value: number | null }
export const performInputSumMax = (value: number | null): Action<PERFORM_INPUT_SUM_MAX> => ({
    type: PERFORM_INPUT_SUM_MAX,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_FILTER_SHOW = {}
export const performPopoverFilterShow = (): Action<PERFORM_POPOVER_FILTER_SHOW> => ({
    type: PERFORM_POPOVER_FILTER_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_FILTER_HIDE = {}
export const performPopoverFilterHide = (): Action<PERFORM_POPOVER_FILTER_HIDE> => ({
    type: PERFORM_POPOVER_FILTER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.OperationType} value .
 */
export type PERFORM_INPUT_OPERATION_TYPE = { value: Enums.OperationType }
export const performInputOperationType = (value: Enums.OperationType): Action<PERFORM_INPUT_OPERATION_TYPE> => ({
    type: PERFORM_INPUT_OPERATION_TYPE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_PERIOD_TYPE_SHOW = {}
export const performPopoverPeriodTypeShow = (): Action<PERFORM_POPOVER_PERIOD_TYPE_SHOW> => ({
    type: PERFORM_POPOVER_PERIOD_TYPE_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_PERIOD_TYPE_HIDE = {}
export const performPopoverPeriodTypeHide = (): Action<PERFORM_POPOVER_PERIOD_TYPE_HIDE> => ({
    type: PERFORM_POPOVER_PERIOD_TYPE_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.PeriodType} value .
 */
export type PERFORM_INPUT_PERIOD_TYPE = { value: Enums.PeriodType }
export const performInputPeriodType = (value: Enums.PeriodType): Action<PERFORM_INPUT_PERIOD_TYPE> => ({
    type: PERFORM_INPUT_PERIOD_TYPE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodStart field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_FILTER_PERIOD_START = { value: Date | null }
export const performInputFilterPeriodStart = (value: Date | null): Action<PERFORM_INPUT_FILTER_PERIOD_START> => ({
    type: PERFORM_INPUT_FILTER_PERIOD_START,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodEnd field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_FILTER_PERIOD_END = { value: Date | null }
export const performInputFilterPeriodEnd = (value: Date | null): Action<PERFORM_INPUT_FILTER_PERIOD_END> => ({
    type: PERFORM_INPUT_FILTER_PERIOD_END,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to change filter period.
 *
 */
export type PERFORM_FILTER_APPLY = {}
export const performFilterApply = (): Action<PERFORM_FILTER_APPLY> => ({
    type: PERFORM_FILTER_APPLY,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset filter period.
 *
 */
export type PERFORM_FILTER_RESET = {}
export const performFilterReset = (): Action<PERFORM_FILTER_RESET> => ({
    type: PERFORM_FILTER_RESET,
    payload: {}
})

/**
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched to filter operation list.
 *
 */
export type OPERATION_LIST_FILTER = {}
export const operationListFilter = (): Action<OPERATION_LIST_FILTER> => ({
    type: OPERATION_LIST_FILTER,
    payload: {}
})

/**
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user select custom period type.
 *
 */
export type NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = {}
export const navigateToPeriodTypeCustomScreen = (): Action<NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN> => ({
    type: NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN,
    payload: {}
})

/**
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user navigate back.
 *
 */
export type NAVIGATE_PERIOD_TYPE_CUSTOM_BACK = {}
export const navigatePeriodTypeCustomBack = (): Action<NAVIGATE_PERIOD_TYPE_CUSTOM_BACK> => ({
    type: NAVIGATE_PERIOD_TYPE_CUSTOM_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 *
 */
export type CALL_GET_OPERATION_LIST = {}
export const callGetOperationList = (): Action<CALL_GET_OPERATION_LIST> => ({
    type: CALL_GET_OPERATION_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetOperationList" started. Thunk dispatched by "ProductPaymentAccount" screen..
 */
export type PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE = {}
export const performUpdateOperationListResetCache = (): Action<PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE> => ({
    type: PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE,
    payload: {}
})

/**
* Action dispatched on network thunk chain "callGetCardIndexList" started. Thunk dispatched by "ProductPaymentAccount" screen..
*/
export type PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE = {}
export const performUpdateCardIndexListResetCache = (): Action<PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE> => ({
    type: PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetOperationList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 */
export type CALL_GET_OPERATION_LIST_REQUEST = {}
export const callGetOperationListRequest = (): Action<CALL_GET_OPERATION_LIST_REQUEST> => ({
    type: CALL_GET_OPERATION_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetOperationList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 *
 * @param {Models.PaymentAccountProductOperationList} response Data received by fetch.
 */
export type CALL_GET_OPERATION_LIST_SUCCESS = { response: Response<Models.PaymentAccountProductOperationList> }
export const callGetOperationListSuccess = (response: Response<Models.PaymentAccountProductOperationList>): Action<CALL_GET_OPERATION_LIST_SUCCESS> => ({
    type: CALL_GET_OPERATION_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetOperationList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_OPERATION_LIST_FAILURE = { error: Error }
export const callGetOperationListFailure = (error: Error): Action<CALL_GET_OPERATION_LIST_FAILURE> => ({
    type: CALL_GET_OPERATION_LIST_FAILURE,
    payload: {
        error: error
    }
})


/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 */
export type CALL_GET_CARD_INDEX_EKS_LIST = {}
export const callGetCardIndexEksList = (): Action<CALL_GET_CARD_INDEX_EKS_LIST> => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST,
    payload: {}
})
/**
 * Action dispatched on network thunk chain "callGetCardIndexList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export type CALL_GET_CARD_INDEX_EKS_LIST_REQUEST = {}
export const callGetCardIndexEksListRequest = (): Action<CALL_GET_CARD_INDEX_EKS_LIST_REQUEST> => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 * @param {Models.PaymentAccountProductCardIndexList} response Data received by fetch.
 */
export type CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS = { response: Response<Models.PaymentAccountProductCardIndexList> }
export const callGetCardIndexEksListSuccess = (response: Response<Models.PaymentAccountProductCardIndexList>): Action<CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS> => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CARD_INDEX_EKS_LIST_FAILURE = { error: Error }
export const callGetCardIndexEksListFailure = (error: Error): Action<CALL_GET_CARD_INDEX_EKS_LIST_FAILURE> => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST_FAILURE,
    payload: {
        error: error
    }
})


/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 */
export type CALL_GET_CARD_INDEX_LIST = {}
export const callGetCardIndexList = (): Action<CALL_GET_CARD_INDEX_LIST> => ({
    type: CALL_GET_CARD_INDEX_LIST,
    payload: {}
})
/**
 * Action dispatched on network thunk chain "callGetCardIndexList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export type CALL_GET_CARD_INDEX_LIST_REQUEST = {}
export const callGetCardIndexListRequest = (): Action<CALL_GET_CARD_INDEX_LIST_REQUEST> => ({
    type: CALL_GET_CARD_INDEX_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 * @param {Models.PaymentAccountProductCardIndexList} response Data received by fetch.
 */
export type CALL_GET_CARD_INDEX_LIST_SUCCESS = { response: Response<Models.PaymentAccountProductCardIndexList> }
export const callGetCardIndexListSuccess = (response: Response<Models.PaymentAccountProductCardIndexList>): Action<CALL_GET_CARD_INDEX_LIST_SUCCESS> => ({
    type: CALL_GET_CARD_INDEX_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CARD_INDEX_LIST_FAILURE = { error: Error }
export const callGetCardIndexListFailure = (error: Error): Action<CALL_GET_CARD_INDEX_LIST_FAILURE> => ({
    type: CALL_GET_CARD_INDEX_LIST_FAILURE,
    payload: {
        error: error
    }
})
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch VspInfo list.
 *
 */
export type CALL_GET_PRODUCT_VSP_INFO = {}
export const callGetProductVspInfo = (): Action<CALL_GET_PRODUCT_VSP_INFO> => ({
    type: CALL_GET_PRODUCT_VSP_INFO,
    payload: {}
})
/**
 * Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export type CALL_GET_PRODUCT_VSP_INFO_REQUEST = {}
export const callGetProductVspInfoRequest = (): Action<CALL_GET_PRODUCT_VSP_INFO_REQUEST> => ({
    type: CALL_GET_PRODUCT_VSP_INFO_REQUEST,
    payload: {}
})
/*
 * Action dispatched on fetch succeeded in thunk "callGetProductVspInfo". Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
 *
 * @param {Models.PaymentAccountProductVspService} response Data received by fetch.
 */
export type CALL_GET_PRODUCT_VSP_INFO_SUCCESS = { response: Response<Models.PaymentAccountProductVspInfo> }
export const callGetProductVspInfoSuccess = (response: Response<Models.PaymentAccountProductVspInfo>): Action<CALL_GET_PRODUCT_VSP_INFO_SUCCESS> => ({
    type: CALL_GET_PRODUCT_VSP_INFO_SUCCESS,
    payload: {
        response: response
    }
})
/*
 * Action dispatched on fetch failure in thunk "callGetProductVspInfo". Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_PRODUCT_VSP_INFO_FAILURE = { error: Error }
export const callGetProductVspInfoFailure = (error: Error): Action<CALL_GET_PRODUCT_VSP_INFO_FAILURE> => ({
    type: CALL_GET_PRODUCT_VSP_INFO_FAILURE,
    payload: {
        error: error
    }
})


/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export type NAVIGATE_TO_RESTRICTION_LIST_SCREEN = {}
export const navigateToRestrictionListScreen = (): Action<NAVIGATE_TO_RESTRICTION_LIST_SCREEN> => ({
    type: NAVIGATE_TO_RESTRICTION_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export type NAVIGATE_TO_CARD_INDEX_LIST_SCREEN = {}
export const navigateToCardIndexListScreen = (): Action<NAVIGATE_TO_CARD_INDEX_LIST_SCREEN> => ({
    type: NAVIGATE_TO_CARD_INDEX_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export type NAVIGATE_TO_TARIFF_SCREEN = {}
export const navigateToTariffScreen = (): Action<NAVIGATE_TO_TARIFF_SCREEN> => ({
    type: NAVIGATE_TO_TARIFF_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export type NAVIGATE_TO_VSP_INFO_SCREEN = {}
export const navigateToVspInfoScreen = (): Action<NAVIGATE_TO_VSP_INFO_SCREEN> => ({
    type: NAVIGATE_TO_VSP_INFO_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export type NAVIGATE_TO_OPERATION_LIST_SCREEN = {}
export const navigateToOperationListScreen = (): Action<NAVIGATE_TO_OPERATION_LIST_SCREEN> => ({
    type: NAVIGATE_TO_OPERATION_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export type NAVIGATE_TO_DASHBOARD_SCREEN = {}
export const navigateToDashboardScreen = (): Action<NAVIGATE_TO_DASHBOARD_SCREEN> => ({
    type: NAVIGATE_TO_DASHBOARD_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user navigate back to ProductPaymentAccount screen.
 *
 */
export type NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK = {}
export const navigateProductPaymentAccountBack = (): Action<NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK> => ({
    type: NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" container. Clear all network cache for card index list if pollign status is not success or eksErrorList is not empty.
 *
 */
export type CLEAR_CARD_INDEX_LIST_CACHE = {}
export const clearCardIndexListCache = (): Action<CLEAR_CARD_INDEX_LIST_CACHE> => ({
    type: CLEAR_CARD_INDEX_LIST_CACHE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductPaymentAccount" container. Clear all network cache for operation list if pollign status is not success or eksErrorList is not empty.
 *
 */
export type CLEAR_OPERATION_LIST_CACHE = {}
export const clearOperationListCache = (): Action<CLEAR_OPERATION_LIST_CACHE> => ({
    type: CLEAR_OPERATION_LIST_CACHE,
    payload: {}
})
