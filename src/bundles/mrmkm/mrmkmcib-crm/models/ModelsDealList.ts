/**
 * Models for DealList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"



// TODO Describe models used in DealList actions and thunks.


const defaultState = {
    get state(): IDealListState {
        return {
            supParameters: {
                DealSalesMethod: '',
                DealApprovedStatusList: '',
                DealSalesMethodRoadMapStandard: '',
                DealSalesMethodRoadMapCredit: '',
            },
            currentTab: Enums.DealListTab.DealOpenedList,  // State parameter displayed in "DealList" screen.
            filtersEditorOpened: null,
            filtersEditorClosed: null,
            filtersActiveOpened: null,
            filtersActiveClosed: null,
            filteredStagesList: defaultValues.ClassifierList,
            filteredCurrencyList:  defaultValues.ClassifierList,
            infoMessage: '',
            isButtonCreateVisible: true,
            isCreateDealEnable: false,
            isEditDealEnable: false,
            isVisiblePopoverFilter: false,  // State parameter displayed in "DealList" screen.
            currentPage: 0,  // Internal state parameter of "DealList" container.
            dealList: defaultValues.DealList,  // Internal state parameter of "DealList" container.
            dealOpenedList: defaultValues.DealList,  // State parameter displayed in "DealList" screen.
            dealClosedList: defaultValues.DealList,  // State parameter displayed in "DealList" screen.
            refresh: defaultValues.boolean,  // Result for "performDealListRefresh" thunk.
            refreshInProgress: false,  // Progress indicator for thunk chain "performDealListRefresh".
            refreshError: null,  // Error info for thunk chain "performDealListRefresh".
            dealListPage: defaultValues.DealListPage,  // Fetch result for "refresh_callGetDealList" thunk.
            dealListPageFetching: false,  // Fetching indicator for network thunk chain "refresh_callGetDealList".
            dealListPageError: null,  // Network error info for thunk chain "refresh_callGetDealList".
            dealListPageCachedDate: null,  // Response data cache date for network thunk chain "refresh_callGetDealList".

            currentCustomerManaged: defaultValues.CustomerManaged,
            startAnimation: false,

            // TODO Describe DealList reducer state.


        }
    }
}

export interface IDealListState {

    supParameters: ModelsApp.SupParamsDeal,
    currentTab: Enums.DealListTab,  // State parameter displayed in "DealList" screen.
    infoMessage: string | null,
    isButtonCreateVisible: boolean,
    isCreateDealEnable: boolean,
    isEditDealEnable: boolean,
    filtersEditorOpened: Models.DealListFilter | null,
    filtersEditorClosed: Models.DealListFilter | null,
    filtersActiveOpened: Models.DealListFilter | null,
    filtersActiveClosed: Models.DealListFilter | null,
    filteredStagesList: ModelsApp.ClassifierList,
    filteredCurrencyList: ModelsApp.ClassifierList,
    isVisiblePopoverFilter: boolean,  // State parameter displayed in "DealList" screen.
    currentPage: number,  // Internal state parameter of "DealList" container.
    dealList: Models.DealList,  // Internal state parameter of "DealList" container.
    dealOpenedList: Models.DealList,  // State parameter displayed in "DealList" screen.
    dealClosedList: Models.DealList,  // State parameter displayed in "DealList" screen.
    refresh: boolean,  // Result for "performDealListRefresh" thunk.
    refreshInProgress: boolean,  // Progress indicator for thunk chain "performDealListRefresh".
    refreshError: Error | null,  // Error info for thunk chain "performDealListRefresh".
    dealListPage: Models.DealListPage,  // Fetch result for "refresh_callGetDealList" thunk.
    dealListPageFetching: boolean,  // Fetching indicator for network thunk chain "refresh_callGetDealList".
    dealListPageError: Error | null,  // Network error info for thunk chain "refresh_callGetDealList".
    dealListPageCachedDate: Date | null,  // Response data cache date for network thunk chain "refresh_callGetDealList".

    currentCustomerManaged: Models.CustomerManaged,
    startAnimation: boolean,
    // TODO Describe DealList reducer state.


}

export const initialState = {
    get state(): IDealListState {
        return defaultState.state
    }
}

export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.DealListTab,): void;
}

export interface NAVIGATE_POPOVER_BACK {
    (): void;
}

export interface PERFORM_CLASSIFIER_SELECTION {
    (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier): void;
}

export interface PERFORM_DATE_SELECTION {
    (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: Date): void;
}

export interface NAVIGATE_IN_POPOVER {
    (): void;
}

export interface PERFORM_INPUT_FILTER_VALUE {
    (value: Models.DealListFilter | null, currentTab:Enums.DealListTab): void;
}

export interface PERFORM_POPOVER_FILTER_SHOW {
    (currentTab:Enums.DealListTab): void;
}

export interface PERFORM_POPOVER_FILTER_HIDE {
    (): void;
}

export interface PERFORM_FILTER_APPLY {
    (currentTab:Enums.DealListTab): void;
}

export interface PERFORM_FILTER_RESET {
    (currentTab:Enums.DealListTab): void;
}

export interface PERFORM_DEAL_LIST_REFRESH {
    (): void;
}

export interface PERFORM_DEAL_CREATE {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN {
    (): void;
}
