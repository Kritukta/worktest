import React from 'react';
import { Models } from 'mrmkmcib-crm';
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker';
import Error from '../models/Error';
import { Enums } from '../Enums';
export interface IStateProps {
    currentDeal: Models.Deal;
    isParentDealCustomerSearchMode: boolean;
    isParentDealCustomerRefreshInProgress: boolean;
    isParentDealCustomerAppendInProgress: boolean;
    isParentDealCustomerSearchInProgress: boolean;
    isParentDealCustomerSearchAppendInProgress: boolean;
    parentDealCustomerSearchList: Models.CustomerManagedList;
    parentDealCustomerList: Models.CustomerManagedList;
    parentDealDealList: Models.DealList;
    parentDealCustomerInputSearch: string;
    isParentDealDealListRefreshInProgress: boolean;
    parentDealDealListFetchError: Error | null;
    customerManagedListCachedDate: Date | null;
    isRefreshBarVisible: boolean;
    parentDealPickerMode: Enums.ParentDealPickerMode;
    dealEditorMode: Enums.DealEditorMode | null;
}
export interface IDispatchProps {
    navigateBack: ModelsParentDealPicker.NAVIGATE_BACK;
    navigateToParentDealDealListScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN;
    navigateToParentDealCustomerListScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN;
    performParentDealDealSelect: ModelsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_SELECT;
    performParentDealCustomerSearchModeEnable: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE;
    performParentDealCustomerSearchModeDisable: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE;
    performParentDealCustomerListAppend: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_APPEND;
    performParentDealCustomerListRefresh: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH;
    performParentDealDealListRefresh: ModelsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH;
    performParentDealCustomerSearch: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH;
    performParentDealCustomerInputSearch: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH;
    performCustomerListAppend: ModelsParentDealPicker.PERFORM_CUSTOMER_LIST_APPEND;
    performFlush: ModelsParentDealPicker.PERFORM_FLUSH;
}
export declare type IParentDealPickerProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
