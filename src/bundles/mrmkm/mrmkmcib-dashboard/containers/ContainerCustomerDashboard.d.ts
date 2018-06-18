import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models } from "mrmkmcib-dashboard";
import { Enums } from '../Enums';
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import * as ModelsCustomerDashboard from "../models/ModelsCustomerDashboard";
import Error from "../models/Error";
export interface IStateProps {
    currentRecipientList: ModelsScheduler.PersonList;
    currentFileFormat: Enums.FileFormat;
    currentRepresentation: Enums.Representation;
    isVisiblePopoverShare: boolean;
    currentCustomerManaged: ModelsCrm.CustomerManaged;
    currentUser: ModelsApp.Employee;
    currentQlikUrl: string | null;
    qlikCookie: string | null;
    currentQlikMessage: Models.QlikMessage;
    qlikError: Error | null;
    qlikAvailabilityCheck: boolean;
    qlikAvailabilityCheckFetching: boolean;
    qlikAvailabilityCheckError: Error | null;
    qlikAvailabilityCheckCachedDate: Date | null;
    personHistoryList: ModelsScheduler.PersonList;
    foundPersonList: ModelsScheduler.PersonList;
    foundPersonListInProgress: boolean;
    foundPersonListError: Error | null;
    inputSharePopoverSearch: string;
    sendFetching: boolean;
    sendError: Error | null;
    sendSuccess: boolean;
    isDashboardExpandedMode: boolean;
    isPopoverVisibleSearchScreen: boolean;
    isTrimmedTop: boolean;
    supParameters: Models.SupParams;
    navigateBackData: ModelsApp.NavigateToEntity | null;
}
export interface IDispatchProps {
    inputSharePopoverSearchRefresh: ModelsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH;
    inputCurrentRecipientListRefresh: ModelsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH;
    inputCurrentFileFormatRefresh: ModelsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH;
    inputCurrentRepresentationRefresh: ModelsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH;
    foundPersonListClear: ModelsCustomerDashboard.FOUND_PERSON_LIST_CLEAR;
    navigateToPopoverShareBack: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK;
    navigateToPopoverShareRecipientsScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS;
    navigateToPopoverShareRepresentationScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION;
    navigateToPopoverShareFormatScreen: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT;
    performPopoverShareShow: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW;
    performPopoverShareHide: ModelsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE;
    performApplicationInit: ModelsCustomerDashboard.PERFORM_APPLICATION_INIT;
    handleQlikError: ModelsCustomerDashboard.HANDLE_QLIK_ERROR;
    callQlikAvailabilityCheck: ModelsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK;
    performQlikEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT;
    performContainerReset: ModelsCustomerDashboard.PERFORM_CONTAINER_RESET;
    performSend: ModelsCustomerDashboard.PERFORM_SEND;
    navigateBack: ModelsCustomerDashboard.NAVIGATE_BACK;
}
export declare type ICustomerDashboardProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
