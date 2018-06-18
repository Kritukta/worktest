/// <reference types="react-native" />
import React from 'react';
import * as ModelsAppDashboard from "../../models/ModelsAppDashboard";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-dashboard";
import { Models as CRMModels } from "mrmkmcib-crm";
import { Enums } from '../../Enums';
import Error from "../../models/Error";
export declare const AgentCircle: (props: {
    firstName: string | null;
    lastName: string | null;
    testID: string;
}) => React.ReactElement<React.ViewStatic>;
export interface IProps {
    inputSharePopoverSearch: string;
    isRepresentationVisible: boolean;
    isVisiblePopoverShare: boolean;
    currentFileFormat: Enums.FileFormat;
    currentCustomerManaged: CRMModels.CustomerManaged;
    currentRepresentation: Enums.Representation;
    currentRecipientList: ModelsScheduler.PersonList;
    personHistoryList: ModelsScheduler.PersonList;
    foundPersonList: ModelsScheduler.PersonList;
    performPopoverShareShow: ModelsAppDashboard.PERFORM_POPOVER_SHARE_SHOW;
    performPopoverShareHide: ModelsAppDashboard.PERFORM_POPOVER_SHARE_HIDE;
    navigateToPopoverShareFormatScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT;
    navigateToPopoverShareRepresentationScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION;
    navigateToPopoverShareRecipientsScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS;
    navigateToPopoverShareBack: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK;
    inputSharePopoverSearchRefresh: ModelsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH;
    inputCurrentFileFormatRefresh: ModelsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH;
    inputCurrentRecipientListRefresh: ModelsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH;
    inputCurrentRepresentationRefresh: ModelsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH;
    foundPersonListClear: ModelsAppDashboard.FOUND_PERSON_LIST_CLEAR;
    performSend: ModelsAppDashboard.PERFORM_SEND;
    sendError: Error | null;
    sendSuccess: boolean;
    fromOutside: boolean;
    testID: string;
    isPopoverVisibleSearchScreen: boolean;
    isDashboardExpandedMode: boolean;
    sendFetching: boolean;
    supParameters: Models.SupParams;
}
declare const ShareDataView: React.StatelessComponent<IProps>;
export default ShareDataView;
