/**
 * Actions of GSZ container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"


export const NAVIGATE_TO_GSZ_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_GSZ_SCREEN'

export const NAVIGATE_BACK_FROM_GSZ_SCREEN = 'GSZ_CONTAINER_NAVIGATE_BACK_FROM_GSZ_SCREEN'

export const SET_CURRENT_GSZ_ID = 'GSZ_CONTAINER_SET_CURRENT_GSZ_ID'

export const RESET_GSZ_NAVIGATION_HISTORY = 'GSZ_CONTAINER_RESET_GSZ_NAVIGATION_HISTORY'

export const PERFORM_POPOVER_CHIEF_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_CHIEF_SHOW'

export const PERFORM_POPOVER_CHIEF_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_CHIEF_HIDE'

export const PERFORM_POPOVER_SORTING_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_SORTING_SHOW'

export const PERFORM_POPOVER_SORTING_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_SORTING_HIDE'

export const PERFORM_POPOVER_LIMITS_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_LIMITS_SHOW'

export const PERFORM_POPOVER_LIMITS_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_LIMITS_HIDE'

export const GSZ_LOADING_ERROR_MODAL_HIDE = 'GSZ_LOADING_ERROR_MODAL_HIDE'

export const NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN'

export const NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN'

export const RESET_GSZ_ACTIVITY_CREATE_MODE = 'GSZ_CONTAINER_RESET_GSZ_ACTIVITY_CREATE_MODE'

export const CLOSE_GSZ_ACTIVITY_PANEL = 'GSZ_CONTAINER_CLOSE_GSZ_ACTIVITY_PANEL'

export const PERFORM_POPOVER_CURATOR_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_CURATOR_SHOW'

export const PERFORM_POPOVER_CURATOR_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_CURATOR_HIDE'

export const PERFORM_INPUT_SORTING_TYPE = 'GSZ_CONTAINER_PERFORM_INPUT_SORTING_TYPE'

export const PERFORM_FLUSH_LIMITS = 'GSZ_PERFORM_FLUSH_LIMITS'

export const PERFORM_REFRESH = 'GSZ_CONTAINER_PERFORM_REFRESH'
export const PERFORM_REFRESH_EXECUTE = 'GSZ_CONTAINER_PERFORM_REFRESH_EXECUTE'
export const PERFORM_REFRESH_SUCCESS = 'GSZ_CONTAINER_PERFORM_REFRESH_SUCCESS'
export const PERFORM_REFRESH_FAILURE = 'GSZ_CONTAINER_PERFORM_REFRESH_FAILURE'

export const REFRESH_CALL_GET_GSZ = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ'
export const REFRESH_CALL_GET_GSZ_REQUEST = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_REQUEST'
export const REFRESH_CALL_GET_GSZ_SUCCESS = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_SUCCESS'
export const REFRESH_CALL_GET_GSZ_FAILURE = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_FAILURE'

export const REFRESH_CALL_GET_GSZ_LIMIT = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT'
export const REFRESH_CALL_GET_GSZ_LIMIT_REQUEST = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_REQUEST'
export const REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS'
export const REFRESH_CALL_GET_GSZ_LIMIT_FAILURE = 'GSZ_CONTAINER_REFRESH_CALL_GET_GSZ_LIMIT_FAILURE'

export const PERFORM_POPOVER_BORROWER_LIST_SHOW = 'GSZ_CONTAINER_PERFORM_POPOVER_BORROWER_LIST_SHOW'

export const PERFORM_POPOVER_BORROWER_LIST_HIDE = 'GSZ_CONTAINER_PERFORM_POPOVER_BORROWER_LIST_HIDE'

export const PERFORM_INPUT_BORROWER_LIST_SEARCH = 'GSZ_CONTAINER_PERFORM_INPUT_BORROWER_LIST_SEARCH'

export const NAVIGATE_TO_BORROWER_SCREEN = 'GSZ_CONTAINER_NAVIGATE_TO_BORROWER_SCREEN'

export const NAVIGATE_BORROWER_LIST_BACK = 'GSZ_CONTAINER_NAVIGATE_BORROWER_LIST_BACK'

export const PERFORM_INPUT_MEMBER_LIST_SEARCH = 'GSZ_CONTAINER_PERFORM_INPUT_MEMBER_LIST_SEARCH'

export const PERFORM_MEMBER_LIST_SEARCH = 'GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH'

export const PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE = 'GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE'

export const PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE = 'GSZ_CONTAINER_PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE'

export const PERFORM_CONTAINER_RESET = 'GSZ_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_FLUSH = 'GSZ_CONTAINER_PERFORM_FLUSH'

export const PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE = 'PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE'

export const PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE = 'PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE'

export const PERFORM_GSZ_REFRESH_PANEL_HIDE = 'PERFORM_GSZ_REFRESH_PANEL_HIDE'

export const PERFORM_GSZ_REFRESH_PANEL_SHOW = 'PERFORM_GSZ_REFRESH_PANEL_SHOW'

export const PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET = 'GSZ_CONTAINER_PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET'

/**
 * Thunk dispatched by "GSZ" screen. Thunk used to open GSZ.
 *
 * @param {string} gszId .
 */
export type NAVIGATE_TO_GSZ_SCREEN = { gszId: string, }
export const navigateToGszScreen = (gszId: string,): Action<NAVIGATE_TO_GSZ_SCREEN> => ({
    type: NAVIGATE_TO_GSZ_SCREEN,
    payload: {
        gszId: gszId,
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk used to navigate back from GSZ screen.
 */
export type NAVIGATE_BACK_FROM_GSZ_SCREEN = {}
export const navigateBackFromGszScreen = (): Action<NAVIGATE_BACK_FROM_GSZ_SCREEN> => ({
    type: NAVIGATE_BACK_FROM_GSZ_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk used to set currentGszId.
 * @param {string} gszId .
 */
export type SET_CURRENT_GSZ_ID = {gszId: string}
export const setCurrentGszId = (gszId: string): Action<SET_CURRENT_GSZ_ID> => ({
    type: SET_CURRENT_GSZ_ID,
    payload: {
        gszId: gszId
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk used to reset gszNavigationHistory.
 */
export type RESET_GSZ_NAVIGATION_HISTORY = {}
export const resetGszNavigationHistory = (): Action<RESET_GSZ_NAVIGATION_HISTORY> => ({
    type: RESET_GSZ_NAVIGATION_HISTORY,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_CHIEF_SHOW = {}
export const performPopoverChiefShow = (): Action<PERFORM_POPOVER_CHIEF_SHOW> => ({
    type: PERFORM_POPOVER_CHIEF_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_CHIEF_HIDE = {}
export const performPopoverChiefHide = (): Action<PERFORM_POPOVER_CHIEF_HIDE> => ({
    type: PERFORM_POPOVER_CHIEF_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_SORTING_SHOW = {}
export const performPopoverSortingShow = (): Action<PERFORM_POPOVER_SORTING_SHOW> => ({
    type: PERFORM_POPOVER_SORTING_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_SORTING_HIDE = {}
export const performPopoverSortingHide = (): Action<PERFORM_POPOVER_SORTING_HIDE> => ({
    type: PERFORM_POPOVER_SORTING_HIDE,
    payload: {}
})


/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_LIMITS_SHOW = {}
export const performPopoverLimitsShow = (): Action<PERFORM_POPOVER_LIMITS_SHOW> => ({
    type: PERFORM_POPOVER_LIMITS_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_LIMITS_HIDE = {}
export const performPopoverLimitsHide = (): Action<PERFORM_POPOVER_LIMITS_HIDE> => ({
    type: PERFORM_POPOVER_LIMITS_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export type GSZ_LOADING_ERROR_MODAL_HIDE = {}
export const gszLoadingErrorModalHide = (): Action<GSZ_LOADING_ERROR_MODAL_HIDE> => ({
    type: GSZ_LOADING_ERROR_MODAL_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to include company to GSZ.
 *
 */
export type NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN = {}
export const navigateToGszActivityIncludeScreen = (): Action<NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN> => ({
    type: NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to exclude company from GSZ.
 *
 */
export type NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN = {}
export const navigateToGszActivityExcludeScreen = (): Action<NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN> => ({
    type: NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to reset gszActivityCreateMode.
 *
 */
export type RESET_GSZ_ACTIVITY_CREATE_MODE = {}
export const resetGszActivityCreateMode = (): Action<RESET_GSZ_ACTIVITY_CREATE_MODE> => ({
    type: RESET_GSZ_ACTIVITY_CREATE_MODE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to close Gsz activity.
 *
 */
export type CLOSE_GSZ_ACTIVITY_PANEL = {}
export const closeGszActivityPanel = (): Action<CLOSE_GSZ_ACTIVITY_PANEL> => ({
    type: CLOSE_GSZ_ACTIVITY_PANEL,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_CURATOR_SHOW = {}
export const performPopoverCuratorShow = (): Action<PERFORM_POPOVER_CURATOR_SHOW> => ({
    type: PERFORM_POPOVER_CURATOR_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_CURATOR_HIDE = {}
export const performPopoverCuratorHide = (): Action<PERFORM_POPOVER_CURATOR_HIDE> => ({
    type: PERFORM_POPOVER_CURATOR_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on change current sorting type.
 *
 * @param {Enums.GszMemberListSortingType} value .
 */
export type PERFORM_INPUT_SORTING_TYPE = { value: Enums.GszMemberListSortingType, }
export const performInputSortingType = (value: Enums.GszMemberListSortingType,): Action<PERFORM_INPUT_SORTING_TYPE> => ({
    type: PERFORM_INPUT_SORTING_TYPE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 *
 */
export type PERFORM_REFRESH = {}
export const performRefresh = (): Action<PERFORM_REFRESH> => ({
    type: PERFORM_REFRESH,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 *
 */
export type PERFORM_FLUSH_LIMITS = {}
export const performFlushLimits = (): Action<PERFORM_FLUSH_LIMITS> => ({
    type: PERFORM_FLUSH_LIMITS,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 */
export type PERFORM_REFRESH_EXECUTE = {}
export const performRefreshExecute = (): Action<PERFORM_REFRESH_EXECUTE> => ({
    type: PERFORM_REFRESH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performRefresh". Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_REFRESH_SUCCESS = { data: boolean }
export const performRefreshSuccess = (data: boolean): Action<PERFORM_REFRESH_SUCCESS> => ({
    type: PERFORM_REFRESH_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_REFRESH_FAILURE = { error: Error }
export const performRefreshFailure = (error: Error): Action<PERFORM_REFRESH_FAILURE> => ({
    type: PERFORM_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 *
 */
export type REFRESH_CALL_GET_GSZ = {}
export const refresh_callGetGsz = (): Action<REFRESH_CALL_GET_GSZ> => ({
    type: REFRESH_CALL_GET_GSZ,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "refresh_callGetGsz" started. Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 */
export type REFRESH_CALL_GET_GSZ_REQUEST = {}
export const refresh_callGetGszRequest = (): Action<REFRESH_CALL_GET_GSZ_REQUEST> => ({
    type: REFRESH_CALL_GET_GSZ_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetGsz". Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 *
 * @param {Models.Gsz} response Data received by fetch.
 */
export type REFRESH_CALL_GET_GSZ_SUCCESS = { response: Response<Models.Gsz> }
export const refresh_callGetGszSuccess = (response: Response<Models.Gsz>): Action<REFRESH_CALL_GET_GSZ_SUCCESS> => ({
    type: REFRESH_CALL_GET_GSZ_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "refresh_callGetGsz". Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_GSZ_FAILURE = { error: Error }
export const refresh_callGetGszFailure = (error: Error): Action<REFRESH_CALL_GET_GSZ_FAILURE> => ({
    type: REFRESH_CALL_GET_GSZ_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 *
 */
export type REFRESH_CALL_GET_GSZ_LIMIT = {}
export const refresh_callGetGszLimit = (): Action<REFRESH_CALL_GET_GSZ_LIMIT> => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "refresh_callGetGszLimit" started. Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 */
export type REFRESH_CALL_GET_GSZ_LIMIT_REQUEST = {}
export const refresh_callGetGszLimitRequest = (): Action<REFRESH_CALL_GET_GSZ_LIMIT_REQUEST> => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetGszLimit". Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 *
 * @param {Models.GszLimit} response Data received by fetch.
 */
export type REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS = { response: Response<Models.GszLimit> }
export const refresh_callGetGszLimitSuccess = (response: Response<Models.GszLimit>): Action<REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS> => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "refresh_callGetGszLimit". Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_GSZ_LIMIT_FAILURE = { error: Error }
export const refresh_callGetGszLimitFailure = (error: Error): Action<REFRESH_CALL_GET_GSZ_LIMIT_FAILURE> => ({
    type: REFRESH_CALL_GET_GSZ_LIMIT_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 *
 * @param {Models.GszMember} value .
 */
export type PERFORM_POPOVER_BORROWER_LIST_SHOW = { value: Models.GszMember, }
export const performPopoverBorrowerListShow = (value: Models.GszMember,): Action<PERFORM_POPOVER_BORROWER_LIST_SHOW> => ({
    type: PERFORM_POPOVER_BORROWER_LIST_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_BORROWER_LIST_HIDE = {}
export const performPopoverBorrowerListHide = (): Action<PERFORM_POPOVER_BORROWER_LIST_HIDE> => ({
    type: PERFORM_POPOVER_BORROWER_LIST_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_BORROWER_LIST_SEARCH = { value: string, }
export const performInputBorrowerListSearch = (value: string,): Action<PERFORM_INPUT_BORROWER_LIST_SEARCH> => ({
    type: PERFORM_INPUT_BORROWER_LIST_SEARCH,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
 *
 * @param {Models.Borrower} borrower .
 */
export type NAVIGATE_TO_BORROWER_SCREEN = { borrower: Models.Borrower }
export const navigateToBorrowerScreen = (borrower: Models.Borrower): Action<NAVIGATE_TO_BORROWER_SCREEN> => ({
    type: NAVIGATE_TO_BORROWER_SCREEN,
    payload: {
        borrower: borrower,
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Remove cache and execute performRefresh
 *
 */
export type PERFORM_FLUSH = {}
export const performFlush = (): Action<PERFORM_FLUSH> => ({
    type: PERFORM_FLUSH,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
 *
 */
export type NAVIGATE_BORROWER_LIST_BACK = {}
export const navigateBorrowerListBack = (): Action<NAVIGATE_BORROWER_LIST_BACK> => ({
    type: NAVIGATE_BORROWER_LIST_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_MEMBER_LIST_SEARCH = { value: string }
export const performInputMemberListSearch = (value: string): Action<PERFORM_INPUT_MEMBER_LIST_SEARCH> => ({
    type: PERFORM_INPUT_MEMBER_LIST_SEARCH,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to perform search query.
 *
 */
export type PERFORM_MEMBER_LIST_SEARCH = {}
export const performMemberListSearch = (): Action<PERFORM_MEMBER_LIST_SEARCH> => ({
    type: PERFORM_MEMBER_LIST_SEARCH,
    payload: {}
})


/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE = {}
export const performPopoverBorrowerListSearchModeEnable = (): Action<PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_GSZ_REFRESH_PANEL_HIDE = {}
export const performGszRefreshPanelHide = (): Action<PERFORM_GSZ_REFRESH_PANEL_HIDE> => ({
    type: PERFORM_GSZ_REFRESH_PANEL_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_GSZ_REFRESH_PANEL_SHOW = {}
export const performGszRefreshPanelShow = (): Action<PERFORM_GSZ_REFRESH_PANEL_SHOW> => ({
    type: PERFORM_GSZ_REFRESH_PANEL_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE = {}
export const performPopoverBorrowerListSearchModeDisable = (): Action<PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE,
    payload: {}
})


/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE = {}
export const performMemberListSearchModeEnable = (): Action<PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk chain used to exit search mode
 *
 */
export type PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE = {}
export const performMemberListSearchModeDisable = (): Action<PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE,
    payload: {}
})

/**
 * Thunk dispatched by "GSZ" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by 'GSZ' screen. Thunk dispatched on search mode disable.
 */
export type PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET = {}
export const performInputMemberListSearchReset = (): Action<PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET> => ({
    type: PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET,
    payload: {}
})
