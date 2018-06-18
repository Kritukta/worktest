/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsDealList from '../actions/ActionsDealList';
import { defaultValues } from "../models/Models";
import * as ModelsDealList from "../models/ModelsDealList";
import * as util from '../common/Util';
import { Enums } from '../Enums';
const reducerDealList = handleActions({
    // Thunk dispatched by "DealList" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsDealList.PERFORM_CHANGE_TAB]: (state, action) => {
        return Object.assign({}, state, { inputSearch: '', currentTab: action.payload.value });
    },
    // Thunk dispatched by "DealList" screen. Thunk dispatched on user input FilterPeriodStart field.
    [actionsDealList.PERFORM_INPUT_FILTER_VALUE]: (state, action) => {
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return Object.assign({}, state, { filtersEditorClosed: action.payload.value });
        }
        return Object.assign({}, state, { filtersEditorOpened: action.payload.value });
    },
    // Thunk dispatched by "DealList" screen. Thunk chain used to show popover.
    [actionsDealList.PERFORM_POPOVER_FILTER_SHOW]: (state, action) => {
        const emptyFilters = Object.assign({}, defaultValues.DealListFilter);
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return Object.assign({}, state, { filteredCurrencyList: util.fillDealFilterCurrencyList(util.getDealClosedList(state.dealList, emptyFilters)), isVisiblePopoverFilter: true, filtersEditorClosed: state.filtersActiveClosed });
        }
        return Object.assign({}, state, { filteredCurrencyList: util.fillDealFilterCurrencyList(util.getDealOpenedList(state.dealList, emptyFilters)), isVisiblePopoverFilter: true, filtersEditorOpened: state.filtersActiveOpened });
    },
    // Thunk dispatched by "DealList" screen. Thunk chain used to hide popover.
    [actionsDealList.PERFORM_POPOVER_FILTER_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false });
    },
    // Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
    [actionsDealList.PERFORM_FILTER_APPLY]: (state, action) => {
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return Object.assign({}, state, { filtersActiveClosed: state.filtersEditorClosed });
        }
        return Object.assign({}, state, { filtersActiveOpened: state.filtersEditorOpened });
    },
    [actionsDealList.SET_SUP_PARAMETER_DEAL]: (state, action) => {
        return Object.assign({}, state, { supParameters: action.payload.params });
    },
    // Thunk dispatched by "DealList" screen. Thunk dispatched to reset filter period.
    [actionsDealList.PERFORM_FILTER_RESET]: (state, action) => {
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return Object.assign({}, state, { filtersActiveClosed: Object.assign({}, defaultValues.DealListFilter) });
        }
        return Object.assign({}, state, { filtersActiveOpened: Object.assign({}, defaultValues.DealListFilter) });
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsDealList.PERFORM_FLUSH]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_DATE_TO]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_DATE_FROM]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_CURRENCY]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_PRODUCT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_ROLE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_STAGE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, ModelsDealList.initialState.state, { filtersActiveClosed: state.filtersActiveClosed, filtersActiveOpened: state.filtersActiveOpened, currentTab: state.currentTab, currentPage: 0 });
    },
    // Action dispatched on thunk chain "performDealListRefresh" started. Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: true, refreshError: null });
    },
    // Action dispatched on success in thunk "performDealListRefresh". Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { refresh: action.payload.data, refreshInProgress: false, refreshError: null });
    },
    // Action dispatched on failure in thunk "performDealListRefresh". Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: false, refreshError: action.payload.error });
    },
    // Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "refresh_callGetDealList" started. Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { dealListPageFetching: true, dealListPageError: null });
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetDealList". Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealListPage: action.payload.response.data, dealListPageCachedDate: action.payload.response.cachedDate, dealListPageFetching: false, dealListPageError: null });
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetDealList". Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealListPageFetching: false, dealListPageError: action.payload.error });
    },
    // Internal thunk used in "DealList" container. Thunk chain used to concat next page and append deal list.
    [actionsDealList.REFRESH_DEAL_LIST_CONCAT]: (state, action) => {
        return Object.assign({}, state, { currentPage: state.currentPage + 1, dealList: Object.assign({}, state.dealList, { data: state.dealList.data.concat(state.dealListPage.data) }) });
    },
    // Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
    [actionsDealList.DEAL_LIST_REDUCE]: (state, action) => {
        const emptyFilters = Object.assign({}, defaultValues.DealListFilter);
        return Object.assign({}, state, { filteredStagesList: util.fillDealFilterStageList(state.dealList.data), filteredCurrencyList: util.fillDealFilterCurrencyList(state.currentTab === Enums.DealListTab.DealClosedList ?
                util.getDealClosedList(state.dealList, emptyFilters) :
                util.getDealOpenedList(state.dealList, emptyFilters)), infoMessage: action.payload.infoMessage, isCreateDealEnable: action.payload.isCreateDealEnable, isButtonCreateVisible: action.payload.isButtonCreateVisible, isEditDealEnable: action.payload.isEditDealEnable, dealOpenedList: util.getDealOpenedList(state.dealList, state.filtersActiveOpened || emptyFilters), dealClosedList: util.getDealClosedList(state.dealList, state.filtersActiveClosed || emptyFilters) });
    },
    // Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
    [actionsDealList.PERFORM_NEW_DEAL_LIST_UPDATE]: (state, action) => {
        return Object.assign({}, state, { dealOpenedList: action.payload.dealList });
    },
    // Thunk dispatched by "DealList" screen. Thunk chain used to create new deal.
    [actionsDealList.PERFORM_DEAL_CREATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealList" screen. Thunk dispatched to reset container state to default values.
    [actionsDealList.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, state, ModelsDealList.initialState.state);
    },
    [actionsDealList.START_ROW_ANIMATION]: (state, action) => {
        return Object.assign({}, state, { startAnimation: action.payload.value });
    },
}, ModelsDealList.initialState.state);
export default reducerDealList;
//# sourceMappingURL=ReducerDealList.js.map