/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsDealList from '../actions/ActionsDealList'
import {defaultValues} from "../models/Models"
import * as ModelsDealList from "../models/ModelsDealList"
import Action from "../models/Action"

import * as util from '../common/Util'
import {Enums} from '../Enums'


const reducerDealList = handleActions<ModelsDealList.IDealListState>({

    // Thunk dispatched by "DealList" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsDealList.PERFORM_CHANGE_TAB]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_CHANGE_TAB>): ModelsDealList.IDealListState => {
        return {
            ...state,
            inputSearch: '',
            currentTab: action.payload.value,
        }
    },

    // Thunk dispatched by "DealList" screen. Thunk dispatched on user input FilterPeriodStart field.
    [actionsDealList.PERFORM_INPUT_FILTER_VALUE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_INPUT_FILTER_VALUE>): ModelsDealList.IDealListState => {
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return {
                ...state,
                filtersEditorClosed: action.payload.value
            }
        }
        return {
            ...state,
            filtersEditorOpened: action.payload.value
        }
    },

    // Thunk dispatched by "DealList" screen. Thunk chain used to show popover.
    [actionsDealList.PERFORM_POPOVER_FILTER_SHOW]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_POPOVER_FILTER_SHOW>): ModelsDealList.IDealListState => {

        const emptyFilters = {...defaultValues.DealListFilter}

        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return {
                ...state,
                filteredCurrencyList: util.fillDealFilterCurrencyList(util.getDealClosedList(state.dealList, emptyFilters)),
                isVisiblePopoverFilter: true,
                filtersEditorClosed: state.filtersActiveClosed,
            }
        }
        return {
            ...state,
            filteredCurrencyList: util.fillDealFilterCurrencyList(util.getDealOpenedList(state.dealList, emptyFilters)),
            isVisiblePopoverFilter: true,
            filtersEditorOpened: state.filtersActiveOpened,
        }
    },

    // Thunk dispatched by "DealList" screen. Thunk chain used to hide popover.
    [actionsDealList.PERFORM_POPOVER_FILTER_HIDE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_POPOVER_FILTER_HIDE>): ModelsDealList.IDealListState => {
        return {
            ...state,
            isVisiblePopoverFilter: false,
        }
    },

    // Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
    [actionsDealList.PERFORM_FILTER_APPLY]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_FILTER_APPLY>): ModelsDealList.IDealListState => {
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return {
                ...state,
                filtersActiveClosed: state.filtersEditorClosed
            }
        }
        return {
            ...state,
            filtersActiveOpened: state.filtersEditorOpened
        }
    },

    [actionsDealList.SET_SUP_PARAMETER_DEAL]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.SET_SUP_PARAMETER_DEAL>): ModelsDealList.IDealListState => {
        return {
            ...state,
            supParameters: action.payload.params,
        }
    },

    // Thunk dispatched by "DealList" screen. Thunk dispatched to reset filter period.
    [actionsDealList.PERFORM_FILTER_RESET]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_FILTER_RESET>): ModelsDealList.IDealListState => {
        if (action.payload.currentTab === Enums.DealListTab.DealClosedList) {
            return {
                ...state,
                filtersActiveClosed: {...defaultValues.DealListFilter}
            }
        }
        return {
            ...state,
            filtersActiveOpened: {...defaultValues.DealListFilter}
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_BACK]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_BACK>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    [actionsDealList.PERFORM_FLUSH]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_FLUSH>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_DATE_TO]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_TO_DATE_TO>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_DATE_FROM]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_TO_DATE_FROM>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_CURRENCY]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_TO_CURRENCY>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_PRODUCT]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_TO_PRODUCT>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_ROLE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_TO_ROLE>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen.
    [actionsDealList.FILTER_POPOVER_NAVIGATE_TO_STAGE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.FILTER_POPOVER_NAVIGATE_TO_STAGE>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },


    // Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_DEAL_LIST_REFRESH>): ModelsDealList.IDealListState => {
        return {
            ...ModelsDealList.initialState.state,
            filtersActiveClosed: state.filtersActiveClosed,
            filtersActiveOpened: state.filtersActiveOpened,
            currentTab: state.currentTab,
            currentPage: 0,
        }
    },

    // Action dispatched on thunk chain "performDealListRefresh" started. Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH_EXECUTE]: (state: ModelsDealList.IDealListState, action: Action<void>): ModelsDealList.IDealListState => {
        return {
            ...state,
            refreshInProgress: true,
            refreshError: null,
        }
    },
    // Action dispatched on success in thunk "performDealListRefresh". Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH_SUCCESS]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_DEAL_LIST_REFRESH_SUCCESS>): ModelsDealList.IDealListState => {
        return {
            ...state,
            refresh: action.payload.data,
            refreshInProgress: false,
            refreshError: null,
        }
    },
    // Action dispatched on failure in thunk "performDealListRefresh". Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
    [actionsDealList.PERFORM_DEAL_LIST_REFRESH_FAILURE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_DEAL_LIST_REFRESH_FAILURE>): ModelsDealList.IDealListState => {
        return {
            ...state,
            refreshInProgress: false,
            refreshError: action.payload.error,
        }
    },

    // Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.REFRESH_CALL_GET_DEAL_LIST>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "refresh_callGetDealList" started. Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST_REQUEST]: (state: ModelsDealList.IDealListState, action: Action<void>): ModelsDealList.IDealListState => {
        return {
            ...state,
            dealListPageFetching: true,
            dealListPageError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetDealList". Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST_SUCCESS]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.REFRESH_CALL_GET_DEAL_LIST_SUCCESS>): ModelsDealList.IDealListState => {
        return {
            ...state,
            dealListPage: action.payload.response.data,
            dealListPageCachedDate: action.payload.response.cachedDate,
            dealListPageFetching: false,
            dealListPageError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetDealList". Internal thunk used in "DealList" container. Fetch activity list current page.
    [actionsDealList.REFRESH_CALL_GET_DEAL_LIST_FAILURE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.REFRESH_CALL_GET_DEAL_LIST_FAILURE>): ModelsDealList.IDealListState => {
        return {
            ...state,
            dealListPageFetching: false,
            dealListPageError: action.payload.error,
        }
    },

    // Internal thunk used in "DealList" container. Thunk chain used to concat next page and append deal list.
    [actionsDealList.REFRESH_DEAL_LIST_CONCAT]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.REFRESH_DEAL_LIST_CONCAT>): ModelsDealList.IDealListState => {
        return {
            ...state,
            currentPage: state.currentPage + 1,
            dealList: {...state.dealList, data: state.dealList.data.concat(state.dealListPage.data)},
        }
    },

    // Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
    [actionsDealList.DEAL_LIST_REDUCE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.DEAL_LIST_REDUCE>): ModelsDealList.IDealListState => {
        const emptyFilters = {...defaultValues.DealListFilter}
        return {
            ...state,
            filteredStagesList: util.fillDealFilterStageList( state.dealList.data),
            filteredCurrencyList: util.fillDealFilterCurrencyList(
                state.currentTab === Enums.DealListTab.DealClosedList ?
                    util.getDealClosedList(state.dealList, emptyFilters) :
                    util.getDealOpenedList(state.dealList, emptyFilters)),
            infoMessage: action.payload.infoMessage,
            isCreateDealEnable: action.payload.isCreateDealEnable,
            isButtonCreateVisible: action.payload.isButtonCreateVisible,
            isEditDealEnable: action.payload.isEditDealEnable,
            dealOpenedList: util.getDealOpenedList(state.dealList, state.filtersActiveOpened || emptyFilters),
            dealClosedList: util.getDealClosedList(state.dealList, state.filtersActiveClosed || emptyFilters),
        }


    },

    // Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
    [actionsDealList.PERFORM_NEW_DEAL_LIST_UPDATE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_NEW_DEAL_LIST_UPDATE>): ModelsDealList.IDealListState => {
        return {
            ...state,
            dealOpenedList: action.payload.dealList
        }
    },


    // Thunk dispatched by "DealList" screen. Thunk chain used to create new deal.
    [actionsDealList.PERFORM_DEAL_CREATE]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_DEAL_CREATE>): ModelsDealList.IDealListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealList" screen. Thunk dispatched to reset container state to default values.
    [actionsDealList.PERFORM_CONTAINER_RESET]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.PERFORM_CONTAINER_RESET>): ModelsDealList.IDealListState => {
        return {
            ...state,
            ...ModelsDealList.initialState.state,
        }
    },

    [actionsDealList.START_ROW_ANIMATION]: (state: ModelsDealList.IDealListState, action: Action<actionsDealList.START_ROW_ANIMATION>): ModelsDealList.IDealListState => {
        return {
            ...state,
            startAnimation: action.payload.value
        }
    },


}, ModelsDealList.initialState.state)

export default reducerDealList
