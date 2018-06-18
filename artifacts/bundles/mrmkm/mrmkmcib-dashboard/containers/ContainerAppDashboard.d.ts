/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-dashboard";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import * as ModelsAppDashboard from "../models/ModelsAppDashboard";
import Error from "../models/Error";
export interface IStateProps {
    currentRecipientList: ModelsScheduler.PersonList;
    currentFileFormat: Enums.FileFormat;
    currentRepresentation: Enums.Representation;
    currentCustomerManaged: ModelsCrm.CustomerManaged;
    isVisiblePopoverShare: boolean;
    qlikError: Error | null;
    currentUser: ModelsApp.Employee;
    currentQlikMessage: Models.QlikMessage;
    isSearchMode: boolean;
    inputSearch: string;
    customerSearchType: Enums.CustomerSearchType;
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
    searchHistoryList: Models.SearchHistoryList;
    searchHistoryListInProgress: boolean;
    searchHistoryListError: Error | null;
    personHistoryList: ModelsScheduler.PersonList;
    foundPersonList: ModelsScheduler.PersonList;
    foundPersonListInProgress: boolean;
    foundPersonListError: Error | null;
    inputSharePopoverSearch: string;
    sendFetching: boolean;
    sendError: Error | null;
    sendSuccess: boolean;
    currentQlikUrl: string | null;
    qlikCookie: string | null;
    isPopoverVisibleSearchScreen: boolean;
    supParameters: Models.SupParams;
    navigateBackData: ModelsApp.NavigateToEntity | null;
}
export interface IDispatchProps {
    inputSharePopoverSearchRefresh: ModelsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH;
    inputCurrentRecipientListRefresh: ModelsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH;
    inputCurrentFileFormatRefresh: ModelsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH;
    inputCurrentRepresentationRefresh: ModelsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH;
    foundPersonListClear: ModelsAppDashboard.FOUND_PERSON_LIST_CLEAR;
    navigateToPopoverShareBack: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK;
    navigateToPopoverShareRecipientsScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS;
    navigateToPopoverShareRepresentationScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION;
    navigateToPopoverShareFormatScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT;
    performPopoverShareShow: ModelsAppDashboard.PERFORM_POPOVER_SHARE_SHOW;
    performPopoverShareHide: ModelsAppDashboard.PERFORM_POPOVER_SHARE_HIDE;
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
    performSend: ModelsAppDashboard.PERFORM_SEND;
    navigateBack: ModelsAppDashboard.NAVIGATE_BACK;
}
export declare type IAppDashboardProps = IStateProps & IDispatchProps & {
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
