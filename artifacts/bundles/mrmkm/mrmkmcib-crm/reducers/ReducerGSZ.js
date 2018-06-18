/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsGSZ from '../actions/ActionsGSZ';
import { defaultValues } from '../models/Models';
import * as ModelsGSZ from '../models/ModelsGSZ';
import * as util from '../common/Util';
import { Enums } from '../Enums';
const reducerGSZ = handleActions({
    // Thunk dispatched by "GSZ" screen. Thunk used to open GSZ.
    [actionsGSZ.NAVIGATE_TO_GSZ_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsGSZ.initialState.state, { currentGszId: action.payload.gszId, currentGsz: defaultValues.Gsz, gszNavigationHistory: util.doGszToHistoryAction(Enums.HistoryActions.Push, [...state.gszNavigationHistory], action.payload.gszId) });
    },
    // Thunk dispatched by "GSZ" screen. Thunk used to navigate back from GSZ screen.
    [actionsGSZ.NAVIGATE_BACK_FROM_GSZ_SCREEN]: (state) => {
        return Object.assign({}, state, { gszNavigationHistory: util.doGszToHistoryAction(Enums.HistoryActions.Pop, [...state.gszNavigationHistory], '') });
    },
    // Thunk dispatched by "GSZ" screen. Thunk used to set currentGszId.
    [actionsGSZ.SET_CURRENT_GSZ_ID]: (state, action) => {
        return Object.assign({}, state, { currentGszId: action.payload.gszId, currentGsz: defaultValues.Gsz });
    },
    // Thunk dispatched by "GSZ" screen. Thunk used to reset gszNavigationHistory.
    [actionsGSZ.RESET_GSZ_NAVIGATION_HISTORY]: (state) => {
        return Object.assign({}, state, { gszNavigationHistory: [] });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_CHIEF_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverChief: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_CHIEF_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverChief: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_LIMITS_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverLimits: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_LIMITS_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverLimits: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_SORTING_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverSorting: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_SORTING_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverSorting: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE]: (state, action) => {
        return Object.assign({}, state, { gszLoadingErrorModalIsVisible: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to include company to GSZ.
    [actionsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isActivityCreateMode: true, gszActivityCreateMode: Enums.GSZActivityCreateMode.Include });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to exclude company from GSZ.
    [actionsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isActivityCreateMode: true, gszActivityCreateMode: Enums.GSZActivityCreateMode.Exclude });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to reset gszActivityCreateMode.
    [actionsGSZ.RESET_GSZ_ACTIVITY_CREATE_MODE]: (state) => {
        return Object.assign({}, state, { gszActivityCreateMode: Enums.GSZActivityCreateMode.None });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to close Gsz activity.
    [actionsGSZ.CLOSE_GSZ_ACTIVITY_PANEL]: (state, action) => {
        return Object.assign({}, state, { isActivityCreateMode: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_CURATOR_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverCurator: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_CURATOR_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverCurator: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk dispatched on change current sorting type.
    [actionsGSZ.PERFORM_INPUT_SORTING_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputSortingType: action.payload.value, currentGsz: state.currentGsz /* TODO util.gszMemberListSort(state.currentGsz, action.payload.value) */ });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: true, refreshError: null });
    },
    // Action dispatched on success in thunk "performRefresh". Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { refresh: action.payload.data, refreshInProgress: false, refreshError: null });
    },
    // Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
    [actionsGSZ.PERFORM_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: false, refreshError: action.payload.error });
    },
    // Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "refresh_callGetGsz" started. Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_REQUEST]: (state, action) => {
        return Object.assign({}, state, { currentGszFetching: true, currentGszError: null });
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetGsz". Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentGsz: action.payload.response.data, currentGszCachedDate: action.payload.response.cachedDate, currentGszFetching: false, currentGszError: null, gszLoadingErrorModalIsVisible: false });
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetGsz". Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_FAILURE]: (state, action) => {
        return Object.assign({}, state, { currentGszFetching: false, currentGszError: action.payload.error, gszLoadingErrorModalIsVisible: true });
    },
    // Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.PERFORM_FLUSH_LIMITS]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "refresh_callGetGszLimit" started. Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_REQUEST]: (state, action) => {
        return Object.assign({}, state, { gszLimitFetching: true, gszLimitError: null });
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetGszLimit". Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { gszLimit: action.payload.response.data, gszLimitCachedDate: action.payload.response.cachedDate, gszLimitFetching: false, gszLimitError: null });
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetGszLimit". Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
    [actionsGSZ.REFRESH_CALL_GET_GSZ_LIMIT_FAILURE]: (state, action) => {
        return Object.assign({}, state, { gszLimitFetching: false, gszLimitError: action.payload.error });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW]: (state, action) => {
        return Object.assign({}, state, { currentGszMember: action.payload.value, borrowerFilteredList: action.payload.value.borrowerList, inputBorrowerListSearch: '', isVisiblePopoverBorrowerList: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverBorrowerList: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
    [actionsGSZ.PERFORM_INPUT_BORROWER_LIST_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputBorrowerListSearch: action.payload.value, borrowerFilteredList: util.borrowerListSearch(state.currentGszMember.borrowerList, action.payload.value) });
    },
    // Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
    [actionsGSZ.NAVIGATE_TO_BORROWER_SCREEN]: (state, action) => {
        return Object.assign({}, state, { currentBorrower: action.payload.borrower });
    },
    // Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
    [actionsGSZ.NAVIGATE_BORROWER_LIST_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
    [actionsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputMemberListSearch: action.payload.value });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to perform search query.
    [actionsGSZ.PERFORM_MEMBER_LIST_SEARCH]: (state, action) => {
        return Object.assign({}, state, { memberSearchList: { data: util.searchGszMemberList(state.currentGsz.memberList, state.inputMemberListSearch) } });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_GSZ_REFRESH_PANEL_HIDE]: (state, action) => {
        return Object.assign({}, state, { isRefreshBarActive: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_GSZ_REFRESH_PANEL_SHOW]: (state, action) => {
        return Object.assign({}, state, { isRefreshBarActive: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE]: (state, action) => {
        return Object.assign({}, state, { isPopoverBorrowerListSearchActive: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE]: (state, action) => {
        return Object.assign({}, state, { isPopoverBorrowerListSearchActive: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
    [actionsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE]: (state, action) => {
        return Object.assign({}, state, { isMemberListSearchMode: true });
    },
    // Thunk dispatched by "GSZ" screen. Thunk chain used to exit search mode
    [actionsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE]: (state, action) => {
        return Object.assign({}, state, { isMemberListSearchMode: false });
    },
    // Thunk dispatched by "GSZ" screen. Thunk dispatched to reset container state to default values.
    [actionsGSZ.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsGSZ.initialState.state);
    },
    // Thunk dispatched by 'GSZ' screen. Thunk dispatched on search mode exit.
    [actionsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH_RESET]: (state) => {
        return Object.assign({}, state, { inputMemberListSearch: '' });
    },
}, ModelsGSZ.initialState.state);
export default reducerGSZ;
//# sourceMappingURL=ReducerGSZ.js.map