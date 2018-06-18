/**
 * Models for Agent container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler, Enums as EnumsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Error from "../models/Error";
export interface IAgentState {
    isCommentEdit: boolean;
    newAgentComment: string;
    agentValidationErrorList: number[];
    agentPanelCurrentPage: Enums.AgentPanelPage;
    currentAgent: Models.Agent;
    agentMode: Enums.AgentMode;
    inputFirstName: string;
    inputLastName: string;
    inputMiddleName: string;
    inputJobPosition: string;
    inputSearchJobPosition: string;
    inputWorkPhone: string | null;
    inputMobilePhone: string | null;
    inputEmail: string;
    inputBirthday: Date | null;
    inputGender: Enums.GenderList;
    inputRelationType: ModelsApp.Classifier;
    inputComment: string;
    inputNoteList: Models.NoteList;
    inputOccasionList: Models.OccasionList;
    inputMemberList: Models.MemberList | null;
    operationUuid: string;
    agentCreateFetching: boolean;
    agentCreateError: Error | null;
    currentAgentModifierId: Models.Agent;
    currentAgentModifierIdFetching: boolean;
    currentAgentModifierIdError: Error | null;
    currentAgentModifierIdCachedDate: Date | null;
    agentUpdateFetching: boolean;
    agentUpdateError: Error | null;
    agentUpdateCachedDate: Date | null;
    currentAgentFetching: boolean;
    currentAgentError: Error | null;
    currentAgentCachedDate: Date | null;
    currentCustomerManaged: Models.CustomerManaged;
    agentContextMode: Enums.AgentContextMode;
    hasChangedAgentPersonData: boolean;
    isVisibleAgentErrorModalWindow: boolean;
}
export declare const initialState: {
    readonly state: IAgentState;
};
export interface PERFORM_SEND_EMAIL {
    (): void;
}
export interface PERFORM_SCHEDULER_OPEN {
    (): void;
}
export interface PERFORM_INPUT_FIRST_NAME {
    (value: string): void;
}
export interface PERFORM_INPUT_LAST_NAME {
    (value: string): void;
}
export interface PERFORM_INPUT_MIDDLE_NAME {
    (value: string): void;
}
export interface NAVIGATE_TO_JOB_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_INPUT_JOB_POSITION {
    (value: string): void;
}
export interface PERFORM_INPUT_SEARCH_JOB_POSITION {
    (value: string): void;
}
export interface PERFORM_INPUT_WORK_PHONE {
    (value: string): void;
}
export interface PERFORM_INPUT_MOBILE_PHONE {
    (value: string): void;
}
export interface PERFORM_INPUT_EMAIL {
    (value: string): void;
}
export interface PERFORM_INPUT_BIRTHDAY {
    (value: Date | null): void;
}
export interface PERFORM_INPUT_GENDER {
    (value: Enums.GenderList): void;
}
export interface PERFORM_ACTIVITY_OPEN {
    (activity: ModelsScheduler.Activity, mode: EnumsScheduler.ActivityMode): void;
}
export interface NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_INPUT_RELATION_TYPE {
    (value: ModelsApp.Classifier): void;
}
export interface PERFORM_INPUT_COMMENT {
    (value: string): void;
}
export interface PERFORM_SAVE {
    (): void;
}
export interface PERFORM_VALIDATE {
    (): void;
}
export interface CALL_POST_AGENT_CREATE {
    (): void;
}
export interface CALL_GET_AGENT_MODIFIER_ID {
    (): void;
}
export interface CALL_POST_AGENT_UPDATE {
    (): void;
}
export interface PERFORM_EDIT {
    (): void;
}
export interface PERFORM_CANCEL {
    (): void;
}
export interface PERFORM_SAVE_AGENT_COMMENT {
    (): void;
}
export interface NAVIGATE_TO_OCCASION_LIST {
    (): void;
}
export interface NAVIGATE_TO_NOTE_LIST {
    (): void;
}
export interface NAVIGATE_TO_AGENT_COMMENT {
    (): void;
}
export interface PERFORM_SET_AGENT_COMMENT_EDIT_STATUS {
    (): void;
}
export interface NAVIGATE_TO_MEMBER_LIST {
    (): void;
}
export interface NAVIGATE_TO_AGENT_EDIT_COMMENT {
    (): void;
}
export interface PERFORM_OPEN_AGENT_SCREEN {
    (agent: Models.Agent, agentMode: Enums.AgentMode, agentContextMode: Enums.AgentContextMode): void;
}
export interface CALL_GET_AGENT {
    (): void;
}
export interface AGENT_REDUCE {
    (currentUser: ModelsApp.Employee): void;
}
export interface NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_BACK {
    (mode?: Enums.AgentContextMode): void;
}
export interface NAVIGATE_AGENT_LIST_BACK {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_AGENT_SCREEN_INIT {
    (): void;
}
export interface PERFORM_CREATE_ACTIIVTY_ACCESS_REQUEST {
    (): void;
}
export interface PERFORM_EXIT_AGENT_CARD {
    (): void;
}
export interface PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW {
    (value: boolean): void;
}
export interface PERFORM_CALL_POST_AGENT_CREATE {
    (): void;
}
export interface PERFORM_CALL_GET_AGENT {
    (agent: Models.Agent): void;
}
export interface PERFORM_CALL_PUT_AGENT_UPDATE {
    (): void;
}
export interface PERFORM_GET_UNCACHED_AGENT {
    (): void;
}
export interface PERFORM_OPEN_CUSTOMER_SCREEN {
    (customer: Models.AgentCustomerPosition): void;
}
