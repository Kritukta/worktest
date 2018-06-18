/// <reference types="react-redux" />
import React from "react";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from "../Enums";
import { Models } from "mrmkmcib-crm";
import * as ModelsAgent from "../models/ModelsAgent";
import * as ModelsAgentList from "../models/ModelsAgentList";
import Error from "../models/Error";
export interface IStateProps {
    agentListContextMode: Enums.AgentListContextMode;
    agentListMode: Enums.AgentListMode;
    isVisibleAgentListErrorModalWindow: boolean;
    inputAgentSearch: string;
    inputAgentRole: ModelsApp.Classifier | null;
    searchAgentStringRequest: string;
    refreshInProgress: boolean;
    refreshError: Error | null;
    inputAgentList: Models.AgentList;
    agentListFetching: boolean;
    agentListError: Error | null;
    agentListCachedDate: Date | null;
    agentSearchList: Models.AgentList;
    agentSearchListFetching: boolean;
    agentSearchListError: Error | null;
    agentSearchListCachedDate: Date | null;
    agentListSaveInProgress: boolean;
    agentListSaveError: Error | null;
    isVisiblePopoverMenu: boolean;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: ModelsCrm.CustomerManaged | null;
    agentListAccessLevel: Enums.AgentListAccessLevel;
    inputAgentJobPosition: string;
    agentListOpenedDeletePanel: Models.Agent[];
}
export interface IDispatchProps {
    performOpenAgentDeletePanel: ModelsAgentList.PERFORM_OPEN_AGENT_DELETE_PANEL;
    performCloseAgentDeletePanel: ModelsAgentList.PERFORM_CLOSE_AGENT_DELETE_PANEL;
    performSelectAgentJobPosition: ModelsAgentList.PERFORM_SELECT_AGENT_JOB_POSITION;
    performInputAgentJobPosition: ModelsAgentList.PERFORM_INPUT_AGENT_JOB_POSITION;
    navigateToAgentSearchScreen: ModelsAgentList.NAVIGATE_TO_AGENT_SEARCH_SCREEN;
    performAgentDelete: ModelsAgentList.PERFORM_AGENT_DELETE;
    navigateToPrincipalPickerScreen: ModelsAgentList.NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN;
    performAgentListPrincipal: ModelsAgentList.PERFORM_AGENT_LIST_PRINCIPAL;
    performInputAgentSearch: ModelsAgentList.PERFORM_INPUT_AGENT_SEARCH;
    performAgentSearchListSelect: ModelsAgentList.PERFORM_AGENT_SEARCH_LIST_SELECT;
    performMenuAgentAddShow: ModelsAgentList.PERFORM_MENU_AGENT_ADD_SHOW;
    performMenuAgentAddHide: ModelsAgentList.PERFORM_MENU_AGENT_ADD_HIDE;
    performSave: ModelsAgentList.PERFORM_SAVE;
    performEdit: ModelsAgentList.PERFORM_EDIT;
    performCancel: ModelsAgentList.PERFORM_CANCEL;
    navigateBack: ModelsAgentList.NAVIGATE_BACK;
    performCloseAgentListScreen: ModelsAgentList.PERFORM_CLOSE_AGENT_LIST_SCREEN;
    performOpenAgentScreen: ModelsAgent.PERFORM_OPEN_AGENT_SCREEN;
    performPopoverAddHide: ModelsAgentList.PERFORM_POPOVER_ADD_HIDE;
    performInit: ModelsAgentList.PERFORM_AGENT_LIST_SCREEN_INIT;
    performCancelSearchAgent: ModelsAgentList.PERFORM_CANCEL_SEARCH_AGENT;
    performChangeDisplayAgentListErrorModalWindow: ModelsAgentList.PERFORM_CHANGE_AGENT_LIST_ERROR_MODAL_WINDOW;
    callGetAgentSearchList: ModelsAgentList.CALL_GET_AGENT_SEARCH_LIST;
}
export declare type IAgentListProps = IStateProps & IDispatchProps & {
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
