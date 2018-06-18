/**
 * Actions of ProductPaymentAccount container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_CHANGE_TAB = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_CHANGE_TAB";
export declare const PERFORM_INPUT_SUM_MIN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_SUM_MIN";
export declare const PERFORM_INPUT_SUM_MAX = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_SUM_MAX";
export declare const PERFORM_POPOVER_FILTER_SHOW = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_FILTER_SHOW";
export declare const PERFORM_POPOVER_FILTER_HIDE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_FILTER_HIDE";
export declare const PERFORM_INPUT_OPERATION_TYPE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_OPERATION_TYPE";
export declare const PERFORM_POPOVER_PERIOD_TYPE_SHOW = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_PERIOD_TYPE_SHOW";
export declare const PERFORM_POPOVER_PERIOD_TYPE_HIDE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_PERIOD_TYPE_HIDE";
export declare const PERFORM_INPUT_PERIOD_TYPE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_PERIOD_TYPE";
export declare const PERFORM_INPUT_FILTER_PERIOD_START = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_START";
export declare const PERFORM_INPUT_FILTER_PERIOD_END = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_END";
export declare const PERFORM_FILTER_APPLY = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_FILTER_APPLY";
export declare const PERFORM_FILTER_RESET = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_FILTER_RESET";
export declare const OPERATION_LIST_FILTER = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_OPERATION_LIST_FILTER";
export declare const NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN";
export declare const NAVIGATE_PERIOD_TYPE_CUSTOM_BACK = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_PERIOD_TYPE_CUSTOM_BACK";
export declare const CALL_GET_OPERATION_LIST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST";
export declare const CALL_GET_OPERATION_LIST_REQUEST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_REQUEST";
export declare const CALL_GET_OPERATION_LIST_SUCCESS = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_SUCCESS";
export declare const CALL_GET_OPERATION_LIST_FAILURE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_FAILURE";
export declare const CALL_GET_CARD_INDEX_LIST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST";
export declare const CALL_GET_CARD_INDEX_LIST_REQUEST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_REQUEST";
export declare const CALL_GET_CARD_INDEX_LIST_SUCCESS = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_SUCCESS";
export declare const CALL_GET_CARD_INDEX_LIST_FAILURE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_FAILURE";
export declare const CALL_GET_CARD_INDEX_EKS_LIST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST";
export declare const CALL_GET_CARD_INDEX_EKS_LIST_REQUEST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_REQUEST";
export declare const CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS";
export declare const CALL_GET_CARD_INDEX_EKS_LIST_FAILURE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_FAILURE";
export declare const NAVIGATE_TO_RESTRICTION_LIST_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_RESTRICTION_LIST_SCREEN";
export declare const NAVIGATE_TO_CARD_INDEX_LIST_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_CARD_INDEX_LIST_SCREEN";
export declare const NAVIGATE_TO_TARIFF_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_TARIFF_SCREEN";
export declare const NAVIGATE_TO_VSP_INFO_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_VSP_INFO_SCREEN";
export declare const NAVIGATE_TO_OPERATION_LIST_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_OPERATION_LIST_SCREEN";
export declare const NAVIGATE_TO_DASHBOARD_SCREEN = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_DASHBOARD_SCREEN";
export declare const NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK";
export declare const PERFORM_CONTAINER_RESET = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const CLEAR_CARD_INDEX_LIST_CACHE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CLEAR_CARD_INDEX_LIST_CACHE";
export declare const CLEAR_OPERATION_LIST_CACHE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CLEAR_OPERATION_LIST_CACHE";
export declare const CALL_GET_PRODUCT_VSP_INFO = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO";
export declare const CALL_GET_PRODUCT_VSP_INFO_REQUEST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_REQUEST";
export declare const CALL_GET_PRODUCT_VSP_INFO_SUCCESS = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_SUCCESS";
export declare const CALL_GET_PRODUCT_VSP_INFO_FAILURE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_FAILURE";
export declare const PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE";
export declare const PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE";
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. (Deprecated)Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.ProductPaymentAccountTab} value .
 */
export declare type PERFORM_CHANGE_TAB = {
    index: number;
    value: Enums.ProductPaymentAccountTab;
};
export declare const performChangeTab: (index: number, value: Enums.ProductPaymentAccountTab) => Action<PERFORM_CHANGE_TAB>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export declare type PERFORM_INPUT_SUM_MIN = {
    value: number | null;
};
export declare const performInputSumMin: (value: number) => Action<PERFORM_INPUT_SUM_MIN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {number | null} value .
 */
export declare type PERFORM_INPUT_SUM_MAX = {
    value: number | null;
};
export declare const performInputSumMax: (value: number) => Action<PERFORM_INPUT_SUM_MAX>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_FILTER_SHOW = {};
export declare const performPopoverFilterShow: () => Action<PERFORM_POPOVER_FILTER_SHOW>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_FILTER_HIDE = {};
export declare const performPopoverFilterHide: () => Action<PERFORM_POPOVER_FILTER_HIDE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.OperationType} value .
 */
export declare type PERFORM_INPUT_OPERATION_TYPE = {
    value: Enums.OperationType;
};
export declare const performInputOperationType: (value: Enums.OperationType) => Action<PERFORM_INPUT_OPERATION_TYPE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_PERIOD_TYPE_SHOW = {};
export declare const performPopoverPeriodTypeShow: () => Action<PERFORM_POPOVER_PERIOD_TYPE_SHOW>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_PERIOD_TYPE_HIDE = {};
export declare const performPopoverPeriodTypeHide: () => Action<PERFORM_POPOVER_PERIOD_TYPE_HIDE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 *
 * @param {Enums.PeriodType} value .
 */
export declare type PERFORM_INPUT_PERIOD_TYPE = {
    value: Enums.PeriodType;
};
export declare const performInputPeriodType: (value: Enums.PeriodType) => Action<PERFORM_INPUT_PERIOD_TYPE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodStart field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_FILTER_PERIOD_START = {
    value: Date | null;
};
export declare const performInputFilterPeriodStart: (value: Date) => Action<PERFORM_INPUT_FILTER_PERIOD_START>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodEnd field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_FILTER_PERIOD_END = {
    value: Date | null;
};
export declare const performInputFilterPeriodEnd: (value: Date) => Action<PERFORM_INPUT_FILTER_PERIOD_END>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to change filter period.
 *
 */
export declare type PERFORM_FILTER_APPLY = {};
export declare const performFilterApply: () => Action<PERFORM_FILTER_APPLY>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset filter period.
 *
 */
export declare type PERFORM_FILTER_RESET = {};
export declare const performFilterReset: () => Action<PERFORM_FILTER_RESET>;
/**
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched to filter operation list.
 *
 */
export declare type OPERATION_LIST_FILTER = {};
export declare const operationListFilter: () => Action<OPERATION_LIST_FILTER>;
/**
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user select custom period type.
 *
 */
export declare type NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = {};
export declare const navigateToPeriodTypeCustomScreen: () => Action<NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN>;
/**
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user navigate back.
 *
 */
export declare type NAVIGATE_PERIOD_TYPE_CUSTOM_BACK = {};
export declare const navigatePeriodTypeCustomBack: () => Action<NAVIGATE_PERIOD_TYPE_CUSTOM_BACK>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 *
 */
export declare type CALL_GET_OPERATION_LIST = {};
export declare const callGetOperationList: () => Action<CALL_GET_OPERATION_LIST>;
/**
 * Action dispatched on network thunk chain "callGetOperationList" started. Thunk dispatched by "ProductPaymentAccount" screen..
 */
export declare type PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE = {};
export declare const performUpdateOperationListResetCache: () => Action<PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE>;
/**
* Action dispatched on network thunk chain "callGetCardIndexList" started. Thunk dispatched by "ProductPaymentAccount" screen..
*/
export declare type PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE = {};
export declare const performUpdateCardIndexListResetCache: () => Action<PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE>;
/**
 * Action dispatched on network thunk chain "callGetOperationList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 */
export declare type CALL_GET_OPERATION_LIST_REQUEST = {};
export declare const callGetOperationListRequest: () => Action<CALL_GET_OPERATION_LIST_REQUEST>;
export declare type CALL_GET_OPERATION_LIST_SUCCESS = {
    response: Response<Models.PaymentAccountProductOperationList>;
};
export declare const callGetOperationListSuccess: (response: Response<ModelsCrm.PaymentAccountProductOperationList>) => Action<CALL_GET_OPERATION_LIST_SUCCESS>;
export declare type CALL_GET_OPERATION_LIST_FAILURE = {
    error: Error;
};
export declare const callGetOperationListFailure: (error: Error) => Action<CALL_GET_OPERATION_LIST_FAILURE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 */
export declare type CALL_GET_CARD_INDEX_EKS_LIST = {};
export declare const callGetCardIndexEksList: () => Action<CALL_GET_CARD_INDEX_EKS_LIST>;
/**
 * Action dispatched on network thunk chain "callGetCardIndexList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export declare type CALL_GET_CARD_INDEX_EKS_LIST_REQUEST = {};
export declare const callGetCardIndexEksListRequest: () => Action<CALL_GET_CARD_INDEX_EKS_LIST_REQUEST>;
export declare type CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS = {
    response: Response<Models.PaymentAccountProductCardIndexList>;
};
export declare const callGetCardIndexEksListSuccess: (response: Response<ModelsCrm.PaymentAccountProductCardIndexList>) => Action<CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS>;
export declare type CALL_GET_CARD_INDEX_EKS_LIST_FAILURE = {
    error: Error;
};
export declare const callGetCardIndexEksListFailure: (error: Error) => Action<CALL_GET_CARD_INDEX_EKS_LIST_FAILURE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 *
 */
export declare type CALL_GET_CARD_INDEX_LIST = {};
export declare const callGetCardIndexList: () => Action<CALL_GET_CARD_INDEX_LIST>;
/**
 * Action dispatched on network thunk chain "callGetCardIndexList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export declare type CALL_GET_CARD_INDEX_LIST_REQUEST = {};
export declare const callGetCardIndexListRequest: () => Action<CALL_GET_CARD_INDEX_LIST_REQUEST>;
export declare type CALL_GET_CARD_INDEX_LIST_SUCCESS = {
    response: Response<Models.PaymentAccountProductCardIndexList>;
};
export declare const callGetCardIndexListSuccess: (response: Response<ModelsCrm.PaymentAccountProductCardIndexList>) => Action<CALL_GET_CARD_INDEX_LIST_SUCCESS>;
export declare type CALL_GET_CARD_INDEX_LIST_FAILURE = {
    error: Error;
};
export declare const callGetCardIndexListFailure: (error: Error) => Action<CALL_GET_CARD_INDEX_LIST_FAILURE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch VspInfo list.
 *
 */
export declare type CALL_GET_PRODUCT_VSP_INFO = {};
export declare const callGetProductVspInfo: () => Action<CALL_GET_PRODUCT_VSP_INFO>;
/**
 * Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export declare type CALL_GET_PRODUCT_VSP_INFO_REQUEST = {};
export declare const callGetProductVspInfoRequest: () => Action<CALL_GET_PRODUCT_VSP_INFO_REQUEST>;
export declare type CALL_GET_PRODUCT_VSP_INFO_SUCCESS = {
    response: Response<Models.PaymentAccountProductVspInfo>;
};
export declare const callGetProductVspInfoSuccess: (response: Response<ModelsCrm.PaymentAccountProductVspInfo>) => Action<CALL_GET_PRODUCT_VSP_INFO_SUCCESS>;
export declare type CALL_GET_PRODUCT_VSP_INFO_FAILURE = {
    error: Error;
};
export declare const callGetProductVspInfoFailure: (error: Error) => Action<CALL_GET_PRODUCT_VSP_INFO_FAILURE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export declare type NAVIGATE_TO_RESTRICTION_LIST_SCREEN = {};
export declare const navigateToRestrictionListScreen: () => Action<NAVIGATE_TO_RESTRICTION_LIST_SCREEN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export declare type NAVIGATE_TO_CARD_INDEX_LIST_SCREEN = {};
export declare const navigateToCardIndexListScreen: () => Action<NAVIGATE_TO_CARD_INDEX_LIST_SCREEN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export declare type NAVIGATE_TO_TARIFF_SCREEN = {};
export declare const navigateToTariffScreen: () => Action<NAVIGATE_TO_TARIFF_SCREEN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export declare type NAVIGATE_TO_VSP_INFO_SCREEN = {};
export declare const navigateToVspInfoScreen: () => Action<NAVIGATE_TO_VSP_INFO_SCREEN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export declare type NAVIGATE_TO_OPERATION_LIST_SCREEN = {};
export declare const navigateToOperationListScreen: () => Action<NAVIGATE_TO_OPERATION_LIST_SCREEN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 *
 */
export declare type NAVIGATE_TO_DASHBOARD_SCREEN = {};
export declare const navigateToDashboardScreen: () => Action<NAVIGATE_TO_DASHBOARD_SCREEN>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user navigate back to ProductPaymentAccount screen.
 *
 */
export declare type NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK = {};
export declare const navigateProductPaymentAccountBack: () => Action<NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK>;
/**
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "ProductPaymentAccount" container. Clear all network cache for card index list if pollign status is not success or eksErrorList is not empty.
 *
 */
export declare type CLEAR_CARD_INDEX_LIST_CACHE = {};
export declare const clearCardIndexListCache: () => Action<CLEAR_CARD_INDEX_LIST_CACHE>;
/**
 * Thunk dispatched by "ProductPaymentAccount" container. Clear all network cache for operation list if pollign status is not success or eksErrorList is not empty.
 *
 */
export declare type CLEAR_OPERATION_LIST_CACHE = {};
export declare const clearOperationListCache: () => Action<CLEAR_OPERATION_LIST_CACHE>;
