/**
 * Actions of ProductPaymentAccount container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_CHANGE_TAB = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_CHANGE_TAB';
export const PERFORM_INPUT_SUM_MIN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_SUM_MIN';
export const PERFORM_INPUT_SUM_MAX = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_SUM_MAX';
export const PERFORM_POPOVER_FILTER_SHOW = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_FILTER_SHOW';
export const PERFORM_POPOVER_FILTER_HIDE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_FILTER_HIDE';
export const PERFORM_INPUT_OPERATION_TYPE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_OPERATION_TYPE';
export const PERFORM_POPOVER_PERIOD_TYPE_SHOW = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_PERIOD_TYPE_SHOW';
export const PERFORM_POPOVER_PERIOD_TYPE_HIDE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_POPOVER_PERIOD_TYPE_HIDE';
export const PERFORM_INPUT_PERIOD_TYPE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_PERIOD_TYPE';
export const PERFORM_INPUT_FILTER_PERIOD_START = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_START';
export const PERFORM_INPUT_FILTER_PERIOD_END = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_INPUT_FILTER_PERIOD_END';
export const PERFORM_FILTER_APPLY = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_FILTER_APPLY';
export const PERFORM_FILTER_RESET = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_FILTER_RESET';
export const OPERATION_LIST_FILTER = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_OPERATION_LIST_FILTER';
export const NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN';
export const NAVIGATE_PERIOD_TYPE_CUSTOM_BACK = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_PERIOD_TYPE_CUSTOM_BACK';
export const CALL_GET_OPERATION_LIST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST';
export const CALL_GET_OPERATION_LIST_REQUEST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_REQUEST';
export const CALL_GET_OPERATION_LIST_SUCCESS = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_SUCCESS';
export const CALL_GET_OPERATION_LIST_FAILURE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_OPERATION_LIST_FAILURE';
export const CALL_GET_CARD_INDEX_LIST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST';
export const CALL_GET_CARD_INDEX_LIST_REQUEST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_REQUEST';
export const CALL_GET_CARD_INDEX_LIST_SUCCESS = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_SUCCESS';
export const CALL_GET_CARD_INDEX_LIST_FAILURE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_LIST_FAILURE';
export const CALL_GET_CARD_INDEX_EKS_LIST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST';
export const CALL_GET_CARD_INDEX_EKS_LIST_REQUEST = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_REQUEST';
export const CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS';
export const CALL_GET_CARD_INDEX_EKS_LIST_FAILURE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_CARD_INDEX_EKS_LIST_FAILURE';
export const NAVIGATE_TO_RESTRICTION_LIST_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_RESTRICTION_LIST_SCREEN';
export const NAVIGATE_TO_CARD_INDEX_LIST_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_CARD_INDEX_LIST_SCREEN';
export const NAVIGATE_TO_TARIFF_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_TARIFF_SCREEN';
export const NAVIGATE_TO_VSP_INFO_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_VSP_INFO_SCREEN';
export const NAVIGATE_TO_OPERATION_LIST_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_OPERATION_LIST_SCREEN';
export const NAVIGATE_TO_DASHBOARD_SCREEN = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_TO_DASHBOARD_SCREEN';
export const NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK';
export const PERFORM_CONTAINER_RESET = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_CONTAINER_RESET';
export const CLEAR_CARD_INDEX_LIST_CACHE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CLEAR_CARD_INDEX_LIST_CACHE';
export const CLEAR_OPERATION_LIST_CACHE = 'PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CLEAR_OPERATION_LIST_CACHE';
export const CALL_GET_PRODUCT_VSP_INFO = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO";
export const CALL_GET_PRODUCT_VSP_INFO_REQUEST = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_REQUEST";
export const CALL_GET_PRODUCT_VSP_INFO_SUCCESS = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_SUCCESS";
export const CALL_GET_PRODUCT_VSP_INFO_FAILURE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_CALL_GET_PRODUCT_VSP_INFO_FAILURE";
export const PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE";
export const PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE = "PRODUCT_PAYMENT_ACCOUNT_CONTAINER_PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE";
export const performChangeTab = (index, value) => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index: index,
        value: value,
    }
});
export const performInputSumMin = (value) => ({
    type: PERFORM_INPUT_SUM_MIN,
    payload: {
        value: value,
    }
});
export const performInputSumMax = (value) => ({
    type: PERFORM_INPUT_SUM_MAX,
    payload: {
        value: value,
    }
});
export const performPopoverFilterShow = () => ({
    type: PERFORM_POPOVER_FILTER_SHOW,
    payload: {}
});
export const performPopoverFilterHide = () => ({
    type: PERFORM_POPOVER_FILTER_HIDE,
    payload: {}
});
export const performInputOperationType = (value) => ({
    type: PERFORM_INPUT_OPERATION_TYPE,
    payload: {
        value: value,
    }
});
export const performPopoverPeriodTypeShow = () => ({
    type: PERFORM_POPOVER_PERIOD_TYPE_SHOW,
    payload: {}
});
export const performPopoverPeriodTypeHide = () => ({
    type: PERFORM_POPOVER_PERIOD_TYPE_HIDE,
    payload: {}
});
export const performInputPeriodType = (value) => ({
    type: PERFORM_INPUT_PERIOD_TYPE,
    payload: {
        value: value,
    }
});
export const performInputFilterPeriodStart = (value) => ({
    type: PERFORM_INPUT_FILTER_PERIOD_START,
    payload: {
        value: value,
    }
});
export const performInputFilterPeriodEnd = (value) => ({
    type: PERFORM_INPUT_FILTER_PERIOD_END,
    payload: {
        value: value,
    }
});
export const performFilterApply = () => ({
    type: PERFORM_FILTER_APPLY,
    payload: {}
});
export const performFilterReset = () => ({
    type: PERFORM_FILTER_RESET,
    payload: {}
});
export const operationListFilter = () => ({
    type: OPERATION_LIST_FILTER,
    payload: {}
});
export const navigateToPeriodTypeCustomScreen = () => ({
    type: NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN,
    payload: {}
});
export const navigatePeriodTypeCustomBack = () => ({
    type: NAVIGATE_PERIOD_TYPE_CUSTOM_BACK,
    payload: {}
});
export const callGetOperationList = () => ({
    type: CALL_GET_OPERATION_LIST,
    payload: {}
});
export const performUpdateOperationListResetCache = () => ({
    type: PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE,
    payload: {}
});
export const performUpdateCardIndexListResetCache = () => ({
    type: PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE,
    payload: {}
});
export const callGetOperationListRequest = () => ({
    type: CALL_GET_OPERATION_LIST_REQUEST,
    payload: {}
});
export const callGetOperationListSuccess = (response) => ({
    type: CALL_GET_OPERATION_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetOperationListFailure = (error) => ({
    type: CALL_GET_OPERATION_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const callGetCardIndexEksList = () => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST,
    payload: {}
});
export const callGetCardIndexEksListRequest = () => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST_REQUEST,
    payload: {}
});
export const callGetCardIndexEksListSuccess = (response) => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetCardIndexEksListFailure = (error) => ({
    type: CALL_GET_CARD_INDEX_EKS_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const callGetCardIndexList = () => ({
    type: CALL_GET_CARD_INDEX_LIST,
    payload: {}
});
export const callGetCardIndexListRequest = () => ({
    type: CALL_GET_CARD_INDEX_LIST_REQUEST,
    payload: {}
});
export const callGetCardIndexListSuccess = (response) => ({
    type: CALL_GET_CARD_INDEX_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetCardIndexListFailure = (error) => ({
    type: CALL_GET_CARD_INDEX_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const callGetProductVspInfo = () => ({
    type: CALL_GET_PRODUCT_VSP_INFO,
    payload: {}
});
export const callGetProductVspInfoRequest = () => ({
    type: CALL_GET_PRODUCT_VSP_INFO_REQUEST,
    payload: {}
});
export const callGetProductVspInfoSuccess = (response) => ({
    type: CALL_GET_PRODUCT_VSP_INFO_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetProductVspInfoFailure = (error) => ({
    type: CALL_GET_PRODUCT_VSP_INFO_FAILURE,
    payload: {
        error: error
    }
});
export const navigateToRestrictionListScreen = () => ({
    type: NAVIGATE_TO_RESTRICTION_LIST_SCREEN,
    payload: {}
});
export const navigateToCardIndexListScreen = () => ({
    type: NAVIGATE_TO_CARD_INDEX_LIST_SCREEN,
    payload: {}
});
export const navigateToTariffScreen = () => ({
    type: NAVIGATE_TO_TARIFF_SCREEN,
    payload: {}
});
export const navigateToVspInfoScreen = () => ({
    type: NAVIGATE_TO_VSP_INFO_SCREEN,
    payload: {}
});
export const navigateToOperationListScreen = () => ({
    type: NAVIGATE_TO_OPERATION_LIST_SCREEN,
    payload: {}
});
export const navigateToDashboardScreen = () => ({
    type: NAVIGATE_TO_DASHBOARD_SCREEN,
    payload: {}
});
export const navigateProductPaymentAccountBack = () => ({
    type: NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const clearCardIndexListCache = () => ({
    type: CLEAR_CARD_INDEX_LIST_CACHE,
    payload: {}
});
export const clearOperationListCache = () => ({
    type: CLEAR_OPERATION_LIST_CACHE,
    payload: {}
});
//# sourceMappingURL=ActionsProductPaymentAccount.js.map