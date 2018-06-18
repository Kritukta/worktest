/**
 * Actions of DealList container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_CHANGE_TAB = 'DEAL_LIST_CONTAINER_PERFORM_CHANGE_TAB';
export const PERFORM_INPUT_FILTER_VALUE = 'DEAL_LIST_CONTAINER_PERFORM_INPUT_FILTER_VALUE';
export const PERFORM_POPOVER_FILTER_SHOW = 'DEAL_LIST_CONTAINER_PERFORM_POPOVER_FILTER_SHOW';
export const PERFORM_POPOVER_FILTER_HIDE = 'DEAL_LIST_CONTAINER_PERFORM_POPOVER_FILTER_HIDE';
export const PERFORM_FILTER_APPLY = 'DEAL_LIST_CONTAINER_PERFORM_FILTER_APPLY';
export const SET_SUP_PARAMETER_DEAL = 'DEAL_LIST_CONTAINER_SET_SUP_PARAMETER_DEAL';
export const PERFORM_FILTER_RESET = 'DEAL_LIST_CONTAINER_PERFORM_FILTER_RESET';
export const PERFORM_DEAL_LIST_REFRESH = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH';
export const PERFORM_DEAL_LIST_REFRESH_EXECUTE = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_EXECUTE';
export const PERFORM_DEAL_LIST_REFRESH_SUCCESS = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_SUCCESS';
export const PERFORM_DEAL_LIST_REFRESH_FAILURE = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_FAILURE';
export const REFRESH_CALL_GET_DEAL_LIST = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST';
export const REFRESH_CALL_GET_DEAL_LIST_REQUEST = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_REQUEST';
export const REFRESH_CALL_GET_DEAL_LIST_SUCCESS = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_SUCCESS';
export const REFRESH_CALL_GET_DEAL_LIST_FAILURE = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_FAILURE';
export const REFRESH_DEAL_LIST_CONCAT = 'DEAL_LIST_CONTAINER_REFRESH_DEAL_LIST_CONCAT';
export const DEAL_LIST_REDUCE = 'DEAL_LIST_CONTAINER_DEAL_LIST_REDUCE';
export const PERFORM_DEAL_CREATE = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_CREATE';
export const PERFORM_FLUSH = 'DEAL_LIST_PERFORM_FLUSH';
export const PERFORM_CONTAINER_RESET = 'DEAL_LIST_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_NEW_DEAL_LIST_UPDATE = 'PERFORM_NEW_DEAL_LIST_UPDATE';
export const FILTER_POPOVER_NAVIGATE_BACK = 'FILTER_POPOVER_NAVIGATE_BACK';
export const FILTER_POPOVER_NAVIGATE_TO_DATE_TO = 'FILTER_POPOVER_NAVIGATE_TO_DATE_TO';
export const FILTER_POPOVER_NAVIGATE_TO_DATE_FROM = 'FILTER_POPOVER_NAVIGATE_TO_DATE_FROM';
export const FILTER_POPOVER_NAVIGATE_TO_CURRENCY = 'FILTER_POPOVER_NAVIGATE_TO_CURRENCY';
export const FILTER_POPOVER_NAVIGATE_TO_PRODUCT = 'FILTER_POPOVER_NAVIGATE_TO_PRODUCT';
export const FILTER_POPOVER_NAVIGATE_TO_ROLE = 'FILTER_POPOVER_NAVIGATE_TO_ROLE';
export const FILTER_POPOVER_NAVIGATE_TO_STAGE = 'FILTER_POPOVER_NAVIGATE_TO_STAGE';
export const START_ROW_ANIMATION = 'DEAL_LIST_CONTAINER_START_ROW_ANIMATION';
export const SET_SUP_PARAMETER_SALES_METHOD = 'DEAL_LIST_CONTAINER_SET_SUP_PARAMETER_SALES_METHOD';
export const performFlush = () => ({
    type: PERFORM_FLUSH,
    payload: {}
});
export const setSupParameterSalesMethod = (value) => ({
    type: SET_SUP_PARAMETER_SALES_METHOD,
    payload: {
        value: value,
    }
});
export const performChangeTab = (index, value) => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index: index,
        value: value,
    }
});
export const performInputFilterValue = (value, currentTab) => ({
    type: PERFORM_INPUT_FILTER_VALUE,
    payload: {
        value: value,
        currentTab: currentTab,
    }
});
export const performPopoverFilterShow = (currentTab) => ({
    type: PERFORM_POPOVER_FILTER_SHOW,
    payload: { currentTab: currentTab }
});
export const setSupParameterDeal = (params) => ({
    type: SET_SUP_PARAMETER_DEAL,
    payload: { params: params }
});
export const performPopoverFilterHide = () => ({
    type: PERFORM_POPOVER_FILTER_HIDE,
    payload: {}
});
export const performFilterApply = (currentTab) => ({
    type: PERFORM_FILTER_APPLY,
    payload: { currentTab: currentTab }
});
export const filterPopoverNavigateToDateTo = () => ({
    type: FILTER_POPOVER_NAVIGATE_TO_DATE_TO,
    payload: {}
});
export const filterPopoverNavigateToDateFrom = () => ({
    type: FILTER_POPOVER_NAVIGATE_TO_DATE_FROM,
    payload: {}
});
export const filterPopoverNavigateToCurrency = () => ({
    type: FILTER_POPOVER_NAVIGATE_TO_CURRENCY,
    payload: {}
});
export const filterPopoverNavigateToProduct = () => ({
    type: FILTER_POPOVER_NAVIGATE_TO_PRODUCT,
    payload: {}
});
export const filterPopoverNavigateToRole = () => ({
    type: FILTER_POPOVER_NAVIGATE_TO_ROLE,
    payload: {}
});
export const filterPopoverNavigateToStage = () => ({
    type: FILTER_POPOVER_NAVIGATE_TO_STAGE,
    payload: {}
});
export const filterPopoverNavigateBack = () => ({
    type: FILTER_POPOVER_NAVIGATE_BACK,
    payload: {}
});
export const performFilterReset = (currentTab) => ({
    type: PERFORM_FILTER_RESET,
    payload: { currentTab: currentTab }
});
export const performDealListRefresh = () => ({
    type: PERFORM_DEAL_LIST_REFRESH,
    payload: {}
});
export const performDealListRefreshExecute = () => ({
    type: PERFORM_DEAL_LIST_REFRESH_EXECUTE,
    payload: {}
});
export const performDealListRefreshSuccess = (data) => ({
    type: PERFORM_DEAL_LIST_REFRESH_SUCCESS,
    payload: {
        data: data
    }
});
export const performDealListRefreshFailure = (error) => ({
    type: PERFORM_DEAL_LIST_REFRESH_FAILURE,
    payload: {
        error: error
    }
});
export const refresh_callGetDealList = () => ({
    type: REFRESH_CALL_GET_DEAL_LIST,
    payload: {}
});
export const refresh_callGetDealListRequest = () => ({
    type: REFRESH_CALL_GET_DEAL_LIST_REQUEST,
    payload: {}
});
export const refresh_callGetDealListSuccess = (response) => ({
    type: REFRESH_CALL_GET_DEAL_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const refresh_callGetDealListFailure = (error) => ({
    type: REFRESH_CALL_GET_DEAL_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const refresh_dealListConcat = () => ({
    type: REFRESH_DEAL_LIST_CONCAT,
    payload: {}
});
export const dealListReduce = (currentUser, infoMessage, isCreateDealEnable, isEditDealEnable, isButtonCreateVisible) => ({
    type: DEAL_LIST_REDUCE,
    payload: {
        currentUser: currentUser,
        infoMessage: infoMessage,
        isButtonCreateVisible: isButtonCreateVisible,
        isCreateDealEnable: isCreateDealEnable,
        isEditDealEnable: isEditDealEnable,
    }
});
export const performDealCreate = () => ({
    type: PERFORM_DEAL_CREATE,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const startRowAnimation = (value) => ({
    type: START_ROW_ANIMATION,
    payload: {
        value: value
    }
});
export const performNewDealListUpdate = (dealList) => ({
    type: PERFORM_NEW_DEAL_LIST_UPDATE,
    payload: {
        dealList: dealList
    }
});
//# sourceMappingURL=ActionsDealList.js.map