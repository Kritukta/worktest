/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsProductCredit from "../models/ModelsProductCredit";
import * as ModelsAppProductList from "../models/ModelsProductList";
import Error from "../models/Error";
export interface IStateProps {
    currentUser: ModelsApp.Employee;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentPage: number;
    customerManagedList: Models.CustomerManagedList;
    inputFilterOrganizationStructure: Enums.FilterOrganizationStructure;
    inputFilterMemberRole: Enums.FilterMemberRole;
    disabledFilterOrganizationStructureList: Models.FilterOrganizationStructureList;
    disabledFilterMemberRoleList: Models.FilterMemberRoleList;
    isSearchMode: boolean;
    inputSearch: string;
    customerSearchType: Enums.CustomerSearchType;
    customerSearchError: string;
    isSearchError: boolean;
    currentSearchPage: number;
    customerSearchList: Models.CustomerList;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    append: boolean;
    appendInProgress: boolean;
    appendError: Error | null;
    customerManagedListPage: Models.CustomerManagedListPage;
    customerManagedListPageFetching: boolean;
    customerManagedListPageError: Error | null;
    customerManagedListPageCachedDate: Date | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    searchAppend: boolean;
    searchAppendInProgress: boolean;
    searchAppendError: Error | null;
    customerManagedListCachedDate: Date | null;
    isRefreshBarVisible: boolean;
    currentCustomer: Models.Customer;
    currentCustomerManaged: Models.CustomerManaged;
    refreshCustomerInProgress: boolean;
    isVisibleModalAppCRMError: boolean;
    navigationInProgress: boolean;
    currentDeal: Models.ForecastDeal;
    navigationErrorMessage: string | null;
    navigateStartData: ModelsApp.NavigateToEntity;
    isNavigation: boolean;
}
export interface IDispatchProps {
    performApplicationInit: ModelsAppCRM.PERFORM_APPLICATION_INIT;
    performCustomerListRefresh: ModelsAppCRM.PERFORM_CUSTOMER_LIST_REFRESH;
    performInputFilterOrganizationStructure: ModelsAppCRM.PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE;
    performInputFilterMemberRole: ModelsAppCRM.PERFORM_INPUT_FILTER_MEMBER_ROLE;
    performCustomerManagedListRefresh: ModelsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH;
    performCustomerManagedListAppend: ModelsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND;
    append_callGetCustomerManagedList: ModelsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST;
    performSearchModeEnable: ModelsAppCRM.PERFORM_SEARCH_MODE_ENABLE;
    performSearchModeDisable: ModelsAppCRM.PERFORM_SEARCH_MODE_DISABLE;
    performInputSearch: ModelsAppCRM.PERFORM_INPUT_SEARCH;
    performSearchReset: ModelsAppCRM.PERFORM_SEARCH_RESET;
    performSearch: ModelsAppCRM.PERFORM_SEARCH;
    performCustomerSearchListAppend: ModelsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND;
    performCustomerOpenExecute: ModelsAppCRM.PERFORM_CUSTOMER_OPEN_EXECUTE;
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN;
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    performContainerReset: ModelsAppCRM.PERFORM_CONTAINER_RESET;
    performFlush: ModelsAppCRM.PERFORM_FLUSH;
    performRefreshBarHide: ModelsAppCRM.PERFORM_REFRESH_BAR_HIDE;
    performCustomerFlush: ModelsAppCRM.PERFORM_FLUSH;
    performChangeDisplayErrorModalAppCRM: ModelsAppCRM.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM;
    performCustomerListAppend: ModelsAppCRM.PERFORM_CUSTOMER_LIST_APPEND;
    navigateToProductForecastEventInfoScreen: ModelsAppProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN;
    performPrognosticEventEdit: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_CREATE;
    performCustomerOpenOnce: ModelsAppCRM.PERFORM_CUSTOMER_OPEN_ONCE;
    performNavigateBack: ModelsAppCRM.PERFORM_NAVIGATE_BACK;
    performNavigationReload: ModelsAppCRM.PERFORM_NAVIGATION_RELOAD;
}
export declare type IAppCRMProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
