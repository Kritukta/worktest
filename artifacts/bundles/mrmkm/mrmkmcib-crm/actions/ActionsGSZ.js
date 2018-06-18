/**
 * Actions of GSZ container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const NAVIGATE_TO_GSZ_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_GSZ_SCREEN';
export const NAVIGATE_BACK_FROM_GSZ_SCREEN = 'GSZ_CONTAINER_NAVIGATE_BACK_FROM_GSZ_SCREEN';
export const SET_CURRENT_GSZ_ID = 'GSZ_CONTAINER_SET_CURRENT_GSZ_ID';
export const RESET_GSZ_NAVIGATION_HISTORY = 'GSZ_CONTAINER_RESET_GSZ_NAVIGATION_HISTORY';
export const PERFORM_POPOVER_CHIEF_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_CHIEF_SHOW';
export const PERFORM_POPOVER_CHIEF_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_CHIEF_HIDE';
export const PERFORM_POPOVER_SORTING_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_SORTING_SHOW';
export const PERFORM_POPOVER_SORTING_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_SORTING_HIDE';
export const PERFORM_POPOVER_LIMITS_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_LIMITS_SHOW';
export const PERFORM_POPOVER_LIMITS_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_LIMITS_HIDE';
export const GSZ_LOADING_ERROR_MODAL_HIDE = 'GSZ_LOADING_ERROR_MODAL_HIDE';
export const NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN';
export const NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN';
export const RESET_GSZ_ACTIVITY_CREATE_MODE = 'GSZ_CONTAINER_RESET_GSZ_ACTIVITY_CREATE_MODE';
export const CLOSE_GSZ_ACTIVITY_PANEL = 'GSZ_CONTAINER_CLOSE_GSZ_ACTIVITY_PANEL';
export const PERFORM_POPOVER_CURATOR_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_CURATOR_SHOW';
export const PERFORM_POPOVER_CURATOR_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_CURATOR_HIDE';
export const PERFORM_INPUT_SORTING_TYPE = 'GSZ_CONTAINER_PERFORM_INPUT_SORTING_TYPE';
export const PERFORM_FLUSH_LIMITS = 'GSZ_PERFORM_FLUSH_LIMITS';
export const PERFORM_REFRESH = 'GSZ_CONTAINER_PERFORM_REFRESH';
export const PERFORM_REFRESH_EXECUTE = 'GSZ_CONTAINER_PERFORM_REFRESH_EXECUTE';
export const PERFORM_REFRESH_SUCCESS = 'GSZ_CONTAINER_PERFORM_REFRESH_SUCCESS';
export const PERFORM_REFRESH_FAILURE = 'GSZ_CONTAINER_PERFORM_REFRESH_FAILURE';
export const REFRESH_CALL_GET_GSZ = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ';
export const REFRESH_CALL_GET_GSZ_REQUEST = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_REQUEST';
export const REFRESH_CALL_GET_GSZ_SUCCESS = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_SUCCESS';
export const REFRESH_CALL_GET_GSZ_FAILURE = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_FAILURE';
export const REFRESH_CALL_GET_GSZ_LIMIT = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT';
export const REFRESH_CALL_GET_GSZ_LIMIT_REQUEST = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_REQUEST';
export const REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS';
export const REFRESH_CALL_GET_GSZ_LIMIT_FAILURE = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_FAILURE';
export const PERFORM_POPOVER_BORROWER_LIST_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_BORROWER_LIST_SHOW';
export const PERFORM_POPOVER_BORROWER_LIST_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_BORROWER_LIST_HIDE';
export const PERFORM_INPUT_BORROWER_LIST_SEARCH = 'GSZ_CONTAINER_PERFORM_INPUT_BORROWER_LIST_SEARCH';
export const NAVIGATE_TO_BORROWER_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_BORROWER_SCREEN';
export const NAVIGATE_BORROWER_LIST_BACK = 'GSZ_CONTAINER_NAVIGATE_BORROWER_LIST_BACK';
export const PERFORM_INPUT_MEMBER_LIST_SEARCH = 'GSZ_CONTAINER_PERFORM_INPUT_MEMBER_LIST_SEARCH';
export const PERFORM_MEMBER_LIST_SEARCH = 'GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH';
export const PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE = 'GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE';
export const PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE = 'GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE';
export const PERFORM_CONTAINER_RESET = 'GSZ_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_FLUSH = 'GSZ_CONTAINER_PERFORM_FLUSH';
export const PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE = 'PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE';
export const PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE = 'PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE';
export const PERFORM_GSZ_REFRESH_PANEL_HIDE = 'PERFORM_GSZ_REFRESH_PANEL_HIDE';
export const PERFORM_GSZ_REFRESH_PANEL_SHOW = 'PERFORM_GSZ_REFRESH_PANEL_SHOW';
export const PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET = 'GSZ_CONTAINER_PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET';
export const navigateToGszScreen = (gszId) => ({
    type: NAVIGATE_TO_GSZ_SCREEN,
    payload: {
        gszId: gszId,
    }
});
export const navigateBackFromGszScreen = () => ({
    type: NAVIGATE_BACK_FROM_GSZ_SCREEN,
    payload: {}
});
export const setCurrentGszId = (gszId) => ({
    type: SET_CURRENT_GSZ_ID,
    payload: {
        gszId: gszId
    }
});
export const resetGszNavigationHistory = () => ({
    type: RESET_GSZ_NAVIGATION_HISTORY,
    payload: {}
});
export const performPopoverChiefShow = () => ({
    type: PERFORM_POPOVER_CHIEF_SHOW,
    payload: {}
});
export const performPopoverChiefHide = () => ({
    type: PERFORM_POPOVER_CHIEF_HIDE,
    payload: {}
});
export const performPopoverSortingShow = () => ({
    type: PERFORM_POPOVER_SORTING_SHOW,
    payload: {}
});
export const performPopoverSortingHide = () => ({
    type: PERFORM_POPOVER_SORTING_HIDE,
    payload: {}
});
export const performPopoverLimitsShow = () => ({
    type: PERFORM_POPOVER_LIMITS_SHOW,
    payload: {}
});
export const performPopoverLimitsHide = () => ({
    type: PERFORM_POPOVER_LIMITS_HIDE,
    payload: {}
});
export const gszLoadingErrorModalHide = () => ({
    type: GSZ_LOADING_ERROR_MODAL_HIDE,
    payload: {}
});
export const navigateToGszActivityIncludeScreen = () => ({
    type: NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN,
    payload: {}
});
export const navigateToGszActivityExcludeScreen = () => ({
    type: NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN,
    payload: {}
});
export const resetGszActivityCreateMode = () => ({
    type: RESET_GSZ_ACTIVITY_CREATE_MODE,
    payload: {}
});
export const closeGszActivityPanel = () => ({
    type: CLOSE_GSZ_ACTIVITY_PANEL,
    payload: {}
});
export const performPopoverCuratorShow = () => ({
    type: PERFORM_POPOVER_CURATOR_SHOW,
    payload: {}
});
export const performPopoverCuratorHide = () => ({
    type: PERFORM_POPOVER_CURATOR_HIDE,
    payload: {}
});
export const performInputSortingType = (value) => ({
    type: PERFORM_INPUT_SORTING_TYPE,
    payload: {
        value: value,
    }
});
export const performRefresh = () => ({
    type: PERFORM_REFRESH,
    payload: {}
});
export const performFlushLimits = () => ({
    type: PERFORM_FLUSH_LIMITS,
    payload: {}
});
export const performRefreshExecute = () => ({
    type: PERFORM_REFRESH_EXECUTE,
    payload: {}
});
export const performRefreshSuccess = (data) => ({
    type: PERFORM_REFRESH_SUCCESS,
    payload: {
        data: data
    }
});
export const performRefreshFailure = (error) => ({
    type: PERFORM_REFRESH_FAILURE,
    payload: {
        error: error
    }
});
export const refresh_callGetGsz = () => ({
    type: REFRESH_CALL_GET_GSZ,
    payload: {}
});
export const refresh_callGetGszRequest = () => ({
    type: REFRESH_CALL_GET_GSZ_REQUEST,
    payload: {}
});
export const refresh_callGetGszSuccess = (response) => ({
    type: REFRESH_CALL_GET_GSZ_SUCCESS,
    payload: {
        response: response
    }
});
export const refresh_callGetGszFailure = (error) => ({
    type: REFRESH_CALL_GET_GSZ_FAILURE,
    payload: {
        error: error
    }
});
export const refresh_callGetGszLimit = () => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT,
    payload: {}
});
export const refresh_callGetGszLimitRequest = () => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT_REQUEST,
    payload: {}
});
export const refresh_callGetGszLimitSuccess = (response) => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS,
    payload: {
        response: response
    }
});
export const refresh_callGetGszLimitFailure = (error) => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT_FAILURE,
    payload: {
        error: error
    }
});
export const performPopoverBorrowerListShow = (value) => ({
    type: PERFORM_POPOVER_BORROWER_LIST_SHOW,
    payload: {
        value: value,
    }
});
export const performPopoverBorrowerListHide = () => ({
    type: PERFORM_POPOVER_BORROWER_LIST_HIDE,
    payload: {}
});
export const performInputBorrowerListSearch = (value) => ({
    type: PERFORM_INPUT_BORROWER_LIST_SEARCH,
    payload: {
        value: value,
    }
});
export const navigateToBorrowerScreen = (borrower) => ({
    type: NAVIGATE_TO_BORROWER_SCREEN,
    payload: {
        borrower: borrower,
    }
});
export const performFlush = () => ({
    type: PERFORM_FLUSH,
    payload: {}
});
export const navigateBorrowerListBack = () => ({
    type: NAVIGATE_BORROWER_LIST_BACK,
    payload: {}
});
export const performInputMemberListSearch = (value) => ({
    type: PERFORM_INPUT_MEMBER_LIST_SEARCH,
    payload: {
        value: value,
    }
});
export const performMemberListSearch = () => ({
    type: PERFORM_MEMBER_LIST_SEARCH,
    payload: {}
});
export const performPopoverBorrowerListSearchModeEnable = () => ({
    type: PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE,
    payload: {}
});
export const performGszRefreshPanelHide = () => ({
    type: PERFORM_GSZ_REFRESH_PANEL_HIDE,
    payload: {}
});
export const performGszRefreshPanelShow = () => ({
    type: PERFORM_GSZ_REFRESH_PANEL_SHOW,
    payload: {}
});
export const performPopoverBorrowerListSearchModeDisable = () => ({
    type: PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE,
    payload: {}
});
export const performMemberListSearchModeEnable = () => ({
    type: PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE,
    payload: {}
});
export const performMemberListSearchModeDisable = () => ({
    type: PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const performInputMemberListSearchReset = () => ({
    type: PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsGSZ.js.map