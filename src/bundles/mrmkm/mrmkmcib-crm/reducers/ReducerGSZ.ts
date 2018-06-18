/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsGSZ from '../actions/ActionsGSZ'
import {defaultValues} from '../models/Models'
import * as ModelsGSZ from '../models/ModelsGSZ'
import Action from '../models/Action'

import * as util from '../common/Util'
import {Enums} from '../Enums'


const reducerGSZ = handleActions<ModelsGSZ.IGSZState>({

    // Thunk dispatched by "GSZ" screen. Thunk used to open GSZ.
    [actionsGSZ.NAVIGATE_TO_GSZ_SCREEN]: (
        state: ModelsGSZ.IGSZState,
        action: Action<actionsGSZ.NAVIGATE_TO_GSZ_SCREEN>
    ): ModelsGSZ.IGSZState => {
        return {
            ...ModelsGSZ.initialState.state,
            currentGszId: action.payload.gszId,
            currentGsz: defaultValues.Gsz,
            gszNavigationHistory: util.doGszToHistoryAction(
                Enums.HistoryActions.Push,
                [...state.gszNavigationHistory],
                action.payload.gszId
            )
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk used to navigate back from GSZ screen.
    [actionsGSZ.NAVIGATE_BACK_FROM_GSZ_SCREEN]: (state: ModelsGSZ.IGSZState): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszNavigationHistory: util.doGszToHistoryAction(
                Enums.HistoryActions.Pop,
                [...state.gszNavigationHistory],
                ''
            )
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk used to set currentGszId.
    [actionsGSZ.SET_CURRENT_GSZ_ID]: (
        state: ModelsGSZ.IGSZState,
        action: Action<actionsGSZ.SET_CURRENT_GSZ_ID>
    ): ModelsGSZ.IGSZState => {
        return {
            ...state,
            currentGszId: action.payload.gszId,
            currentGsz: defaultValues.Gsz,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk used to reset gszNavigationHistory.
    [actionsGSZ.RESET_GSZ_NAVIGATION_HISTORY]: (state: ModelsGSZ.IGSZState): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszNavigationHistory: []
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_CHIEF_SHOW]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_CHIEF_SHOW>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverChief: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_CHIEF_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_CHIEF_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverChief: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_LIMITS_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_LIMITS_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverLimits: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_LIMITS_SHOW]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_LIMITS_SHOW>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverLimits: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_SORTING_SHOW]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_SORTING_SHOW>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverSorting: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_SORTING_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_SORTING_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverSorting: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszLoadingErrorModalIsVisible: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to include company to GSZ.
    [actionsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isActivityCreateMode: true,
			gszActivityCreateMode: Enums.GSZActivityCreateMode.Include,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to exclude company from GSZ.
    [actionsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isActivityCreateMode: true,
			gszActivityCreateMode: Enums.GSZActivityCreateMode.Exclude,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to reset gszActivityCreateMode.
    [actionsGSZ.RESET_GSZ_ACTIVITY_CREATE_MODE]: (state: ModelsGSZ.IGSZState): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszActivityCreateMode: Enums.GSZActivityCreateMode.None,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to close Gsz activity.
    [actionsGSZ.CLOSE_GSZ_ACTIVITY_PANEL]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.CLOSE_GSZ_ACTIVITY_PANEL>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isActivityCreateMode: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_CURATOR_SHOW]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_CURATOR_SHOW>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverCurator: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_CURATOR_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_CURATOR_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverCurator: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk dispatched on change current sorting type.
    [actionsGSZ.PERFORM_INPUT_SORTING_TYPE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_INPUT_SORTING_TYPE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            inputSortingType: action.payload.value,
            currentGsz: state.currentGsz /* TODO util.gszMemberListSort(state.currentGsz, action.payload.value) */,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_REFRESH>): ModelsGSZ.IGSZState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH_EXECUTE]: (state: ModelsGSZ.IGSZState, action: Action<void>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            refreshInProgress: true,
            refreshError: null,
        }
    },
    // Action dispatched on success in thunk "performRefresh". Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH_SUCCESS]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_REFRESH_SUCCESS>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            refresh: action.payload.data,
            refreshInProgress: false,
            refreshError: null,
        }
    },
    // Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH_FAILURE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_REFRESH_FAILURE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            refreshInProgress: false,
            refreshError: action.payload.error,
        }
    },

    // Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.REFRESH_CALL_GET_GSZ>): ModelsGSZ.IGSZState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "refresh_callGetGsz" started. Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_REQUEST]: (state: ModelsGSZ.IGSZState, action: Action<void>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            currentGszFetching: true,
            currentGszError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetGsz". Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_SUCCESS]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.REFRESH_CALL_GET_GSZ_SUCCESS>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            currentGsz: action.payload.response.data,
            currentGszCachedDate: action.payload.response.cachedDate,
            currentGszFetching: false,
            currentGszError: null,
            gszLoadingErrorModalIsVisible: false
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetGsz". Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_FAILURE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.REFRESH_CALL_GET_GSZ_FAILURE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            currentGszFetching: false,
            currentGszError: action.payload.error,
            gszLoadingErrorModalIsVisible: true
        }
    },

    // Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT>): ModelsGSZ.IGSZState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.PERFORM_FLUSH_LIMITS]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_FLUSH_LIMITS>): ModelsGSZ.IGSZState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "refresh_callGetGszLimit" started. Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_REQUEST]: (state: ModelsGSZ.IGSZState, action: Action<void>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszLimitFetching: true,
            gszLimitError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetGszLimit". Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszLimit: action.payload.response.data,
            gszLimitCachedDate: action.payload.response.cachedDate,
            gszLimitFetching: false,
            gszLimitError: null
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetGszLimit". Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_FAILURE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_FAILURE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            gszLimitFetching: false,
            gszLimitError: action.payload.error,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            currentGszMember: action.payload.value,
            borrowerFilteredList: action.payload.value.borrowerList,
            inputBorrowerListSearch: '',
            isVisiblePopoverBorrowerList: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isVisiblePopoverBorrowerList: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
    [actionsGSZ.PERFORM_INPUT_BORROWER_LIST_SEARCH]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_INPUT_BORROWER_LIST_SEARCH>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            inputBorrowerListSearch: action.payload.value,
            borrowerFilteredList: util.borrowerListSearch(state.currentGszMember.borrowerList, action.payload.value),
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
    [actionsGSZ.NAVIGATE_TO_BORROWER_SCREEN]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.NAVIGATE_TO_BORROWER_SCREEN>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            currentBorrower: action.payload.borrower,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
    [actionsGSZ.NAVIGATE_BORROWER_LIST_BACK]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.NAVIGATE_BORROWER_LIST_BACK>): ModelsGSZ.IGSZState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
    [actionsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            inputMemberListSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to perform search query.
    [actionsGSZ.PERFORM_MEMBER_LIST_SEARCH]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_MEMBER_LIST_SEARCH>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            memberSearchList: {data: util.searchGszMemberList(state.currentGsz.memberList, state.inputMemberListSearch)},
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_GSZ_REFRESH_PANEL_HIDE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_GSZ_REFRESH_PANEL_HIDE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isRefreshBarActive: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_GSZ_REFRESH_PANEL_SHOW]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_GSZ_REFRESH_PANEL_SHOW>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isRefreshBarActive: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isPopoverBorrowerListSearchActive: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isPopoverBorrowerListSearchActive: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isMemberListSearchMode: true,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk chain used to exit search mode
    [actionsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE>): ModelsGSZ.IGSZState => {
        return {
            ...state,
            isMemberListSearchMode: false,
        }
    },

    // Thunk dispatched by "GSZ" screen. Thunk dispatched to reset container state to default values.
    [actionsGSZ.PERFORM_CONTAINER_RESET]: (state: ModelsGSZ.IGSZState, action: Action<actionsGSZ.PERFORM_CONTAINER_RESET>): ModelsGSZ.IGSZState => {
        return {
            ...ModelsGSZ.initialState.state,
        }
    },

    // Thunk dispatched by 'GSZ' screen. Thunk dispatched on search mode exit.
    [actionsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET]: (
        state: ModelsGSZ.IGSZState
    ): ModelsGSZ.IGSZState => {
        return {
            ...state,
            inputMemberListSearch: ''
        }
    },


}, ModelsGSZ.initialState.state)

export default reducerGSZ
