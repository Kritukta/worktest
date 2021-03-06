import React from 'react';
import { Models } from "mrmkmcib-dashboard";
import * as ModelsAppDashboard from "../../models/ModelsAppDashboard";
import Error from "../../models/Error";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums as EnumsCrm, Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsDashboard } from "mrmkmcib-dashboard";
export interface IProps {
    performApplicationInit: ModelsAppDashboard.PERFORM_APPLICATION_INIT;
    handleQlikError: ModelsAppDashboard.HANDLE_QLIK_ERROR;
    performInputSearchCustomerManaged: ModelsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED;
    performSearchModeEnable: ModelsAppDashboard.PERFORM_SEARCH_MODE_ENABLE;
    performSearchModeDisable: ModelsAppDashboard.PERFORM_SEARCH_MODE_DISABLE;
    performInputSearch: ModelsAppDashboard.PERFORM_INPUT_SEARCH;
    performSearchReset: ModelsAppDashboard.PERFORM_SEARCH_RESET;
    performSearch: ModelsAppDashboard.PERFORM_SEARCH;
    performCustomerSearchListAppend: ModelsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND;
    performQlikEvent: ModelsAppDashboard.PERFORM_QLIK_EVENT;
    performCustomerSelect: ModelsAppDashboard.PERFORM_CUSTOMER_SELECT;
    performSearchHistoryListClear: ModelsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR;
    persistSearchHistoryList: ModelsAppDashboard.PERSIST_SEARCH_HISTORY_LIST;
    recoverSearchHistoryList: ModelsAppDashboard.RECOVER_SEARCH_HISTORY_LIST;
    performContainerReset: ModelsAppDashboard.PERFORM_CONTAINER_RESET;
    qlikError: Error | null;
    currentUser: ModelsApp.Employee;
    currentQlikMessage: Models.QlikMessage;
    isSearchMode: boolean;
    inputSearch: string;
    customerSearchType: EnumsCrm.CustomerSearchType;
    customerSearchError: string;
    isSearchError: boolean;
    currentSearchPage: number;
    customerSearchList: ModelsCrm.CustomerList;
    isSearchCustomerManaged: boolean;
    qlikAvailabilityCheck: boolean;
    qlikAvailabilityCheckFetching: boolean;
    qlikAvailabilityCheckError: Error | null;
    qlikAvailabilityCheckCachedDate: Date | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    searchAppend: boolean;
    searchAppendInProgress: boolean;
    searchAppendError: Error | null;
    searchHistoryList: ModelsDashboard.SearchHistoryList;
    searchHistoryListInProgress: boolean;
    searchHistoryListError: Error | null;
    testID: string;
}
declare const CustomerSearchList: React.StatelessComponent<IProps>;
export default CustomerSearchList;
