import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from 'mrmkmcib-crm';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
import * as ModelsDealEditor from '../models/ModelsDealEditor';
import * as ModelsDealList from '../models/ModelsDealList';
import Error from '../models/Error';
export interface IStateProps {
    currentTab: Enums.DealListTab;
    currentUser: ModelsApp.Employee;
    isVisiblePopoverFilter: boolean;
    dealOpenedList: Models.DealList;
    dealClosedList: Models.DealList;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    infoMessage: string | null;
    isCreateDealEnable: boolean;
    isButtonCreateVisible: boolean;
    isEditDealEnable: boolean;
    filtersEditorOpened: Models.DealListFilter | null;
    filtersEditorClosed: Models.DealListFilter | null;
    filtersActiveOpened: Models.DealListFilter | null;
    filtersActiveClosed: Models.DealListFilter | null;
    filteredStagesList: ModelsApp.ClassifierList;
    filteredCurrencyList: ModelsApp.ClassifierList;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    dealListPageCachedDate: Date | null;
    startAnimation: boolean;
}
export interface IDispatchProps {
    performChangeTab: ModelsDealList.PERFORM_CHANGE_TAB;
    performInputFilterValue: ModelsDealList.PERFORM_INPUT_FILTER_VALUE;
    filterPopoverNavigateToStage: ModelsDealList.NAVIGATE_IN_POPOVER;
    filterPopoverNavigateToRole: ModelsDealList.NAVIGATE_IN_POPOVER;
    filterPopoverNavigateToProduct: ModelsDealList.NAVIGATE_IN_POPOVER;
    filterPopoverNavigateToCurrency: ModelsDealList.NAVIGATE_IN_POPOVER;
    filterPopoverNavigateToDateFrom: ModelsDealList.NAVIGATE_IN_POPOVER;
    filterPopoverNavigateToDateTo: ModelsDealList.NAVIGATE_IN_POPOVER;
    filterPopoverNavigateBack: ModelsDealList.NAVIGATE_POPOVER_BACK;
    performFilterUnSelectProduct: ModelsDealList.PERFORM_CLASSIFIER_SELECTION;
    performFilterSelectProduct: ModelsDealList.PERFORM_CLASSIFIER_SELECTION;
    performFilterSelectStage: ModelsDealList.PERFORM_CLASSIFIER_SELECTION;
    performFilterSelectRole: ModelsDealList.PERFORM_CLASSIFIER_SELECTION;
    performFilterSelectCurrency: ModelsDealList.PERFORM_CLASSIFIER_SELECTION;
    performFilterSelectDateFrom: ModelsDealList.PERFORM_DATE_SELECTION;
    performFilterSelectDateTo: ModelsDealList.PERFORM_DATE_SELECTION;
    performPopoverFilterShow: ModelsDealList.PERFORM_POPOVER_FILTER_SHOW;
    performPopoverFilterHide: ModelsDealList.PERFORM_POPOVER_FILTER_HIDE;
    performFilterApply: ModelsDealList.PERFORM_FILTER_APPLY;
    performFilterReset: ModelsDealList.PERFORM_FILTER_RESET;
    performDealListRefresh: ModelsDealList.PERFORM_DEAL_LIST_REFRESH;
    performDealListFlush: ModelsDealList.PERFORM_DEAL_LIST_REFRESH;
    performDealCreate: ModelsDealList.PERFORM_DEAL_CREATE;
    performContainerReset: ModelsDealList.PERFORM_CONTAINER_RESET;
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR;
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    navigateToDealListSearchScreen: ModelsDealList.NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN;
}
export declare type IDealListProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
