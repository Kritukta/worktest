/**
 * Models for AgentList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAgentList from "../models/ModelsAgentList";
import Error from "../models/Error";
export interface IAgentListState {
    agentListOpenedDeletePanel: Models.Agent[];
    searchAgentStringRequest: string;
    currentDeal: Models.Deal | null;
    currentCustomerManaged: Models.CustomerManaged | null;
    inputAgentJobPosition: string;
    selectedAgentJobPosition: string;
    agentListMode: Enums.AgentListMode;
    agentListContextMode: Enums.AgentListContextMode;
    agentListAccessLevel: Enums.AgentListAccessLevel;
    inputAgentSearch: string;
    inputAgentSearchSelected: Models.Agent;
    inputAgentRole: ModelsApp.Classifier | null;
    operationUuid: string;
    agentListFetchingError: Error | null;
    agentList: Models.AgentList;
    inputAgentList: Models.AgentList;
    agentListFetching: boolean;
    agentListCachedDate: Date | null;
    agentSearchList: Models.AgentList;
    agentSearchListFetching: boolean;
    agentSearchListError: Error | null;
    agentSearchListCachedDate: Date | null;
    agentListSaveInProgress: boolean;
    agentListSaveError: Error | null;
    isEditedDeal: boolean;
    isVisiblePopoverMenu: boolean;
    hasChangedAgentList: boolean;
    isVisibleAgentListErrorModalWindow: boolean;
}
export declare const initialState: {
    readonly state: ModelsAgentList.IAgentListState;
};
export interface PERFORM_AGENT_LIST_REFRESH {
    (activity: ModelsScheduler.Activity, deal: Models.Deal, customerManaged: Models.CustomerManaged, mode: Enums.AgentListContextMode): void;
}
export interface CALL_GET_AGENT_LIST {
    (customerId: string): void;
}
export interface AGENT_LIST_REDUCE {
    (currentUser: ModelsApp.Employee): void;
}
export interface NAVIGATE_TO_AGENT_LIST_SCREEN {
    (activity: ModelsScheduler.Activity, deal: Models.Deal, customerManaged: Models.CustomerManaged, mode: Enums.AgentListContextMode, isExpandedMode: boolean): void;
}
export interface SET_EDITOR_ENABLED {
    (isEditorEnabled: boolean): void;
}
export declare type PERFORM_AGENT_DELETE = (agent: Models.Agent) => void;
export interface NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_AGENT_LIST_PRINCIPAL {
    (agentId: string, isPrincipal: boolean): void;
}
export interface NAVIGATE_TO_AGENT_SEARCH_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_AGENT_CREATE_SCREEN {
    (): void;
}
export interface PERFORM_INPUT_AGENT_SEARCH {
    (value: string): void;
}
export interface CALL_GET_AGENT_SEARCH_LIST {
    (): void;
}
export interface PERFORM_AGENT_SEARCH_LIST_SELECT {
    (agent: Models.Agent): void;
}
export interface NAVIGATE_TO_AGENT_ROLE_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_SELECT_AGENT_ROLE {
    (role: ModelsApp.Classifier): void;
}
export interface MERGE_AGENT {
    (agent: Models.Agent): void;
}
export interface PERFORM_MENU_AGENT_ADD_SHOW {
    (): void;
}
export interface PERFORM_MENU_AGENT_ADD_HIDE {
    (): void;
}
export interface PERFORM_SAVE {
    (): void;
}
export interface CALL_GET_CUSTOMER_MODIFIER_ID {
    (): void;
}
export interface CALL_GET_AGENT_LIST_MODIFIER_ID {
    (): void;
}
export interface CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE {
    (): void;
}
export interface PERFORM_EDIT {
    (): void;
}
export interface PERFORM_CANCEL {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface PERFORM_CLOSE_AGENT_LIST_SCREEN {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface SWAP_CONTEXT_AGENT_LIST_TO_ACTIVITY {
    (agentList: ModelsCrm.AgentList): void;
}
export interface PERFORM_AGENT_LIST_CURRENT_MODE_REFRESH {
    (): void;
}
export interface PERFORM_POPOVER_ADD_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_ADD_HIDE {
    (): void;
}
export declare type PERFORM_OPEN_AGENT_DELETE_PANEL = (agent: Models.Agent) => void;
export declare type PERFORM_CLOSE_AGENT_DELETE_PANEL = (agent: Models.Agent) => void;
export declare type PERFORM_AGENT_LIST_SCREEN_INIT = () => void;
export interface PERFORM_CANCEL_SEARCH_AGENT {
    (): void;
}
export interface PERFORM_INPUT_AGENT_JOB_POSITION {
    (value: string): void;
}
export interface PERFORM_SELECT_AGENT_JOB_POSITION {
    (value: string): void;
}
export interface PERFORM_CHANGE_AGENT_LIST_ERROR_MODAL_WINDOW {
    (): void;
}
export interface CALL_GET_AGENT_SEARCH_LIST {
    (): void;
}
