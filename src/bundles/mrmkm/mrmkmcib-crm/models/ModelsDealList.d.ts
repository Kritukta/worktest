/**
 * Models for DealList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IDealListState {
    supParameters: ModelsApp.SupParamsDeal;
    currentTab: Enums.DealListTab;
    infoMessage: string | null;
    isButtonCreateVisible: boolean;
    isCreateDealEnable: boolean;
    isEditDealEnable: boolean;
    filtersEditorOpened: Models.DealListFilter | null;
    filtersEditorClosed: Models.DealListFilter | null;
    filtersActiveOpened: Models.DealListFilter | null;
    filtersActiveClosed: Models.DealListFilter | null;
    filteredStagesList: ModelsApp.ClassifierList;
    filteredCurrencyList: ModelsApp.ClassifierList;
    isVisiblePopoverFilter: boolean;
    currentPage: number;
    dealList: Models.DealList;
    dealOpenedList: Models.DealList;
    dealClosedList: Models.DealList;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    dealListPage: Models.DealListPage;
    dealListPageFetching: boolean;
    dealListPageError: Error | null;
    dealListPageCachedDate: Date | null;
    currentCustomerManaged: Models.CustomerManaged;
    startAnimation: boolean;
}
export declare const initialState: {
    readonly state: IDealListState;
};
export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.DealListTab): void;
}
export interface NAVIGATE_POPOVER_BACK {
    (): void;
}
export interface PERFORM_CLASSIFIER_SELECTION {
    (currentTab: Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier): void;
}
export interface PERFORM_DATE_SELECTION {
    (currentTab: Enums.DealListTab, filterData: Models.DealListFilter, value: Date): void;
}
export interface NAVIGATE_IN_POPOVER {
    (): void;
}
export interface PERFORM_INPUT_FILTER_VALUE {
    (value: Models.DealListFilter | null, currentTab: Enums.DealListTab): void;
}
export interface PERFORM_POPOVER_FILTER_SHOW {
    (currentTab: Enums.DealListTab): void;
}
export interface PERFORM_POPOVER_FILTER_HIDE {
    (): void;
}
export interface PERFORM_FILTER_APPLY {
    (currentTab: Enums.DealListTab): void;
}
export interface PERFORM_FILTER_RESET {
    (currentTab: Enums.DealListTab): void;
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
