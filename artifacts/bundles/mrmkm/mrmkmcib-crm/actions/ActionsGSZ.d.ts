/**
 * Actions of GSZ container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const NAVIGATE_TO_GSZ_SCREEN = "GSZ_CONTAINER_NAVIGATE_TO_GSZ_SCREEN";
export declare const NAVIGATE_BACK_FROM_GSZ_SCREEN = "GSZ_CONTAINER_NAVIGATE_BACK_FROM_GSZ_SCREEN";
export declare const SET_CURRENT_GSZ_ID = "GSZ_CONTAINER_SET_CURRENT_GSZ_ID";
export declare const RESET_GSZ_NAVIGATION_HISTORY = "GSZ_CONTAINER_RESET_GSZ_NAVIGATION_HISTORY";
export declare const PERFORM_POPOVER_CHIEF_SHOW = "GSZ_CONTAINER_PERFORM_POPOVER_CHIEF_SHOW";
export declare const PERFORM_POPOVER_CHIEF_HIDE = "GSZ_CONTAINER_PERFORM_POPOVER_CHIEF_HIDE";
export declare const PERFORM_POPOVER_SORTING_SHOW = "GSZ_CONTAINER_PERFORM_POPOVER_SORTING_SHOW";
export declare const PERFORM_POPOVER_SORTING_HIDE = "GSZ_CONTAINER_PERFORM_POPOVER_SORTING_HIDE";
export declare const PERFORM_POPOVER_LIMITS_SHOW = "GSZ_CONTAINER_PERFORM_POPOVER_LIMITS_SHOW";
export declare const PERFORM_POPOVER_LIMITS_HIDE = "GSZ_CONTAINER_PERFORM_POPOVER_LIMITS_HIDE";
export declare const GSZ_LOADING_ERROR_MODAL_HIDE = "GSZ_LOADING_ERROR_MODAL_HIDE";
export declare const NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN = "GSZ_CONTAINER_NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN";
export declare const NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN = "GSZ_CONTAINER_NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN";
export declare const RESET_GSZ_ACTIVITY_CREATE_MODE = "GSZ_CONTAINER_RESET_GSZ_ACTIVITY_CREATE_MODE";
export declare const CLOSE_GSZ_ACTIVITY_PANEL = "GSZ_CONTAINER_CLOSE_GSZ_ACTIVITY_PANEL";
export declare const PERFORM_POPOVER_CURATOR_SHOW = "GSZ_CONTAINER_PERFORM_POPOVER_CURATOR_SHOW";
export declare const PERFORM_POPOVER_CURATOR_HIDE = "GSZ_CONTAINER_PERFORM_POPOVER_CURATOR_HIDE";
export declare const PERFORM_INPUT_SORTING_TYPE = "GSZ_CONTAINER_PERFORM_INPUT_SORTING_TYPE";
export declare const PERFORM_FLUSH_LIMITS = "GSZ_PERFORM_FLUSH_LIMITS";
export declare const PERFORM_REFRESH = "GSZ_CONTAINER_PERFORM_REFRESH";
export declare const PERFORM_REFRESH_EXECUTE = "GSZ_CONTAINER_PERFORM_REFRESH_EXECUTE";
export declare const PERFORM_REFRESH_SUCCESS = "GSZ_CONTAINER_PERFORM_REFRESH_SUCCESS";
export declare const PERFORM_REFRESH_FAILURE = "GSZ_CONTAINER_PERFORM_REFRESH_FAILURE";
export declare const REFRESH_CALL_GET_GSZ = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ";
export declare const REFRESH_CALL_GET_GSZ_REQUEST = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_REQUEST";
export declare const REFRESH_CALL_GET_GSZ_SUCCESS = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_SUCCESS";
export declare const REFRESH_CALL_GET_GSZ_FAILURE = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_FAILURE";
export declare const REFRESH_CALL_GET_GSZ_LIMIT = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT";
export declare const REFRESH_CALL_GET_GSZ_LIMIT_REQUEST = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_REQUEST";
export declare const REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS";
export declare const REFRESH_CALL_GET_GSZ_LIMIT_FAILURE = "GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_FAILURE";
export declare const PERFORM_POPOVER_BORROWER_LIST_SHOW = "GSZ_CONTAINER_PERFORM_POPOVER_BORROWER_LIST_SHOW";
export declare const PERFORM_POPOVER_BORROWER_LIST_HIDE = "GSZ_CONTAINER_PERFORM_POPOVER_BORROWER_LIST_HIDE";
export declare const PERFORM_INPUT_BORROWER_LIST_SEARCH = "GSZ_CONTAINER_PERFORM_INPUT_BORROWER_LIST_SEARCH";
export declare const NAVIGATE_TO_BORROWER_SCREEN = "GSZ_CONTAINER_NAVIGATE_TO_BORROWER_SCREEN";
export declare const NAVIGATE_BORROWER_LIST_BACK = "GSZ_CONTAINER_NAVIGATE_BORROWER_LIST_BACK";
export declare const PERFORM_INPUT_MEMBER_LIST_SEARCH = "GSZ_CONTAINER_PERFORM_INPUT_MEMBER_LIST_SEARCH";
export declare const PERFORM_MEMBER_LIST_SEARCH = "GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH";
export declare const PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE = "GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE";
export declare const PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE = "GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE";
export declare const PERFORM_CONTAINER_RESET = "GSZ_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_FLUSH = "GSZ_CONTAINER_PERFORM_FLUSH";
export declare const PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE = "PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE";
export declare const PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE = "PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE";
export declare const PERFORM_GSZ_REFRESH_PANEL_HIDE = "PERFORM_GSZ_REFRESH_PANEL_HIDE";
export declare const PERFORM_GSZ_REFRESH_PANEL_SHOW = "PERFORM_GSZ_REFRESH_PANEL_SHOW";
export declare const PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET = "GSZ_CONTAINER_PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET";
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to open GSZ.
 *
 * @param {string} gszId .
 */
export declare type NAVIGATE_TO_GSZ_SCREEN = {
    gszId: string;
};
export declare const navigateToGszScreen: (gszId: string) => Action<NAVIGATE_TO_GSZ_SCREEN>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to navigate back from GSZ screen.
 */
export declare type NAVIGATE_BACK_FROM_GSZ_SCREEN = {};
export declare const navigateBackFromGszScreen: () => Action<NAVIGATE_BACK_FROM_GSZ_SCREEN>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to set currentGszId.
 * @param {string} gszId .
 */
export declare type SET_CURRENT_GSZ_ID = {
    gszId: string;
};
export declare const setCurrentGszId: (gszId: string) => Action<SET_CURRENT_GSZ_ID>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to reset gszNavigationHistory.
 */
export declare type RESET_GSZ_NAVIGATION_HISTORY = {};
export declare const resetGszNavigationHistory: () => Action<RESET_GSZ_NAVIGATION_HISTORY>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_CHIEF_SHOW = {};
export declare const performPopoverChiefShow: () => Action<PERFORM_POPOVER_CHIEF_SHOW>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_CHIEF_HIDE = {};
export declare const performPopoverChiefHide: () => Action<PERFORM_POPOVER_CHIEF_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_SORTING_SHOW = {};
export declare const performPopoverSortingShow: () => Action<PERFORM_POPOVER_SORTING_SHOW>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_SORTING_HIDE = {};
export declare const performPopoverSortingHide: () => Action<PERFORM_POPOVER_SORTING_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_LIMITS_SHOW = {};
export declare const performPopoverLimitsShow: () => Action<PERFORM_POPOVER_LIMITS_SHOW>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_LIMITS_HIDE = {};
export declare const performPopoverLimitsHide: () => Action<PERFORM_POPOVER_LIMITS_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export declare type GSZ_LOADING_ERROR_MODAL_HIDE = {};
export declare const gszLoadingErrorModalHide: () => Action<GSZ_LOADING_ERROR_MODAL_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to include company to GSZ.
 *
 */
export declare type NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN = {};
export declare const navigateToGszActivityIncludeScreen: () => Action<NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to exclude company from GSZ.
 *
 */
export declare type NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN = {};
export declare const navigateToGszActivityExcludeScreen: () => Action<NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to reset gszActivityCreateMode.
 *
 */
export declare type RESET_GSZ_ACTIVITY_CREATE_MODE = {};
export declare const resetGszActivityCreateMode: () => Action<RESET_GSZ_ACTIVITY_CREATE_MODE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to close Gsz activity.
 *
 */
export declare type CLOSE_GSZ_ACTIVITY_PANEL = {};
export declare const closeGszActivityPanel: () => Action<CLOSE_GSZ_ACTIVITY_PANEL>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_CURATOR_SHOW = {};
export declare const performPopoverCuratorShow: () => Action<PERFORM_POPOVER_CURATOR_SHOW>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_CURATOR_HIDE = {};
export declare const performPopoverCuratorHide: () => Action<PERFORM_POPOVER_CURATOR_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on change current sorting type.
 *
 * @param {Enums.GszMemberListSortingType} value .
 */
export declare type PERFORM_INPUT_SORTING_TYPE = {
    value: Enums.GszMemberListSortingType;
};
export declare const performInputSortingType: (value: Enums.GszMemberListSortingType) => Action<PERFORM_INPUT_SORTING_TYPE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 *
 */
export declare type PERFORM_REFRESH = {};
export declare const performRefresh: () => Action<PERFORM_REFRESH>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 *
 */
export declare type PERFORM_FLUSH_LIMITS = {};
export declare const performFlushLimits: () => Action<PERFORM_FLUSH_LIMITS>;
export declare type PERFORM_REFRESH_EXECUTE = {};
export declare const performRefreshExecute: () => Action<PERFORM_REFRESH_EXECUTE>;
export declare type PERFORM_REFRESH_SUCCESS = {
    data: boolean;
};
export declare const performRefreshSuccess: (data: boolean) => Action<PERFORM_REFRESH_SUCCESS>;
export declare type PERFORM_REFRESH_FAILURE = {
    error: Error;
};
export declare const performRefreshFailure: (error: Error) => Action<PERFORM_REFRESH_FAILURE>;
/**
 * Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 *
 */
export declare type REFRESH_CALL_GET_GSZ = {};
export declare const refresh_callGetGsz: () => Action<REFRESH_CALL_GET_GSZ>;
/**
 * Action dispatched on network thunk chain "refresh_callGetGsz" started. Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 */
export declare type REFRESH_CALL_GET_GSZ_REQUEST = {};
export declare const refresh_callGetGszRequest: () => Action<REFRESH_CALL_GET_GSZ_REQUEST>;
export declare type REFRESH_CALL_GET_GSZ_SUCCESS = {
    response: Response<Models.Gsz>;
};
export declare const refresh_callGetGszSuccess: (response: Response<Models.Gsz>) => Action<REFRESH_CALL_GET_GSZ_SUCCESS>;
export declare type REFRESH_CALL_GET_GSZ_FAILURE = {
    error: Error;
};
export declare const refresh_callGetGszFailure: (error: Error) => Action<REFRESH_CALL_GET_GSZ_FAILURE>;
/**
 * Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 *
 */
export declare type REFRESH_CALL_GET_GSZ_LIMIT = {};
export declare const refresh_callGetGszLimit: () => Action<REFRESH_CALL_GET_GSZ_LIMIT>;
/**
 * Action dispatched on network thunk chain "refresh_callGetGszLimit" started. Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 */
export declare type REFRESH_CALL_GET_GSZ_LIMIT_REQUEST = {};
export declare const refresh_callGetGszLimitRequest: () => Action<REFRESH_CALL_GET_GSZ_LIMIT_REQUEST>;
export declare type REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS = {
    response: Response<Models.GszLimit>;
};
export declare const refresh_callGetGszLimitSuccess: (response: Response<Models.GszLimit>) => Action<REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS>;
export declare type REFRESH_CALL_GET_GSZ_LIMIT_FAILURE = {
    error: Error;
};
export declare const refresh_callGetGszLimitFailure: (error: Error) => Action<REFRESH_CALL_GET_GSZ_LIMIT_FAILURE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 * @param {Models.GszMember} value .
 */
export declare type PERFORM_POPOVER_BORROWER_LIST_SHOW = {
    value: Models.GszMember;
};
export declare const performPopoverBorrowerListShow: (value: Models.GszMember) => Action<PERFORM_POPOVER_BORROWER_LIST_SHOW>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_BORROWER_LIST_HIDE = {};
export declare const performPopoverBorrowerListHide: () => Action<PERFORM_POPOVER_BORROWER_LIST_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_BORROWER_LIST_SEARCH = {
    value: string;
};
export declare const performInputBorrowerListSearch: (value: string) => Action<PERFORM_INPUT_BORROWER_LIST_SEARCH>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
 *
 * @param {Models.Borrower} borrower .
 */
export declare type NAVIGATE_TO_BORROWER_SCREEN = {
    borrower: Models.Borrower;
};
export declare const navigateToBorrowerScreen: (borrower: Models.Borrower) => Action<NAVIGATE_TO_BORROWER_SCREEN>;
/**
 * Thunk dispatched by "GSZ" screen. Remove cache and execute performRefresh
 *
 */
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
 *
 */
export declare type NAVIGATE_BORROWER_LIST_BACK = {};
export declare const navigateBorrowerListBack: () => Action<NAVIGATE_BORROWER_LIST_BACK>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_MEMBER_LIST_SEARCH = {
    value: string;
};
export declare const performInputMemberListSearch: (value: string) => Action<PERFORM_INPUT_MEMBER_LIST_SEARCH>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to perform search query.
 *
 */
export declare type PERFORM_MEMBER_LIST_SEARCH = {};
export declare const performMemberListSearch: () => Action<PERFORM_MEMBER_LIST_SEARCH>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE = {};
export declare const performPopoverBorrowerListSearchModeEnable: () => Action<PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_GSZ_REFRESH_PANEL_HIDE = {};
export declare const performGszRefreshPanelHide: () => Action<PERFORM_GSZ_REFRESH_PANEL_HIDE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_GSZ_REFRESH_PANEL_SHOW = {};
export declare const performGszRefreshPanelShow: () => Action<PERFORM_GSZ_REFRESH_PANEL_SHOW>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE = {};
export declare const performPopoverBorrowerListSearchModeDisable: () => Action<PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export declare type PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE = {};
export declare const performMemberListSearchModeEnable: () => Action<PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to exit search mode
 *
 */
export declare type PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE = {};
export declare const performMemberListSearchModeDisable: () => Action<PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE>;
/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by 'GSZ' screen. Thunk dispatched on search mode disable.
 */
export declare type PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET = {};
export declare const performInputMemberListSearchReset: () => Action<PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET>;
