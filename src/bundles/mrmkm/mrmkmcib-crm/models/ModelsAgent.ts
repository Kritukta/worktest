/**
 * Models for Agent container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler, Enums as EnumsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Error from "../models/Error"


// TODO Describe models used in Agent actions and thunks.


const defaultState = {
    get state(): IAgentState {
        return {

            currentAgent: defaultValues.Agent,  // State parameter displayed in "Agent" screen. 
            agentMode: Enums.AgentMode.None,  // State parameter displayed in "Agent" screen.
            inputFirstName: '',  // State parameter displayed in "Agent" screen. 
            inputLastName: '',  // State parameter displayed in "Agent" screen. 
            inputMiddleName: '',  // State parameter displayed in "Agent" screen. 
            inputJobPosition: '',  // State parameter displayed in "Agent" screen.
            inputSearchJobPosition: '',  // State parameter displayed in "Agent" screen.
            inputWorkPhone: null,  // State parameter displayed in "Agent" screen.
            inputMobilePhone: null,  // State parameter displayed in "Agent" screen.
            inputEmail: '',  // State parameter displayed in "Agent" screen. 
            inputBirthday: null,  // State parameter displayed in "Agent" screen. 
            inputGender: Enums.GenderList.None,  // State parameter displayed in "Agent" screen.
            inputRelationType: defaultValues.Classifier,  // State parameter displayed in "Agent" screen. 
            inputComment: '',  // State parameter displayed in "Agent" screen. 

            operationUuid: '',  // State parameter displayed in "Agent" screen. 

            agentCreateFetching: false,  // Fetching indicator for network thunk chain "callPostAgentCreate".
            agentCreateError: null,  // Network error info for thunk chain "callPostAgentCreate".
            currentAgentModifierId: defaultValues.Agent,  // Fetch result for "callGetAgentModifierId" thunk.
            currentAgentModifierIdFetching: false,  // Fetching indicator for network thunk chain "callGetAgentModifierId".
            currentAgentModifierIdError: null,  // Network error info for thunk chain "callGetAgentModifierId".
            currentAgentModifierIdCachedDate: null,  // Response data cache date for network thunk chain "callGetAgentModifierId".

            agentUpdateFetching: false,  // Fetching indicator for network thunk chain "callPostAgentUpdate".
            agentUpdateError: null,  // Network error info for thunk chain "callPostAgentUpdate".
            agentUpdateCachedDate: null,  // Response data cache date for network thunk chain "callPostAgentUpdate".

            currentAgentFetching: false,  // Fetching indicator for network thunk chain "callGetAgent".
            currentAgentError: null,  // Network error info for thunk chain "callGetAgent".
            currentAgentCachedDate: null,  // Response data cache date for network thunk chain "callGetAgent".

            currentCustomerManaged: defaultValues.CustomerManaged,

            agentContextMode: Enums.AgentContextMode.None,
            agentValidationErrorList: [],
            inputNoteList: {data: []},
            inputOccasionList: {data: []},
            hasChangedAgentPersonData: false,
            inputMemberList: null,
            isVisibleAgentErrorModalWindow: false,
            agentPanelCurrentPage: Enums.AgentPanelPage.None,
            isCommentEdit: false,
            newAgentComment: '',

        }
    }
}

export interface IAgentState {
    isCommentEdit: boolean,
    newAgentComment: string,
    agentValidationErrorList: number[],
    agentPanelCurrentPage: Enums.AgentPanelPage,
    currentAgent: Models.Agent,  // State parameter displayed in "Agent" screen.
    agentMode: Enums.AgentMode,  // State parameter displayed in "Agent" screen.
    inputFirstName: string,  // State parameter displayed in "Agent" screen.
    inputLastName: string,  // State parameter displayed in "Agent" screen.
    inputMiddleName: string,  // State parameter displayed in "Agent" screen.
    inputJobPosition: string,  // State parameter displayed in "Agent" screen.
    inputSearchJobPosition: string,  // State parameter displayed in "Agent" screen.
    inputWorkPhone: string | null,  // State parameter displayed in "Agent" screen.
    inputMobilePhone: string | null,  // State parameter displayed in "Agent" screen.
    inputEmail: string,  // State parameter displayed in "Agent" screen.
    inputBirthday: Date | null,  // State parameter displayed in "Agent" screen.
    inputGender: Enums.GenderList,  // State parameter displayed in "Agent" screen.
    inputRelationType: ModelsApp.Classifier,  // State parameter displayed in "Agent" screen.
    inputComment: string,  // State parameter displayed in "Agent" screen.
    inputNoteList: Models.NoteList,
    inputOccasionList: Models.OccasionList,
    inputMemberList: Models.MemberList | null,
    operationUuid: string,  // State parameter displayed in "Agent" screen.


    agentCreateFetching: boolean,  // Fetching indicator for network thunk chain "callPostAgentCreate".
    agentCreateError: Error | null,  // Network error info for thunk chain "callPostAgentCreate".

    currentAgentModifierId: Models.Agent,  // Fetch result for "callGetAgentModifierId" thunk.
    currentAgentModifierIdFetching: boolean,  // Fetching indicator for network thunk chain "callGetAgentModifierId".
    currentAgentModifierIdError: Error | null,  // Network error info for thunk chain "callGetAgentModifierId".
    currentAgentModifierIdCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAgentModifierId".

    agentUpdateFetching: boolean,  // Fetching indicator for network thunk chain "callPostAgentUpdate".
    agentUpdateError: Error | null,  // Network error info for thunk chain "callPostAgentUpdate".
    agentUpdateCachedDate: Date | null,  // Response data cache date for network thunk chain "callPostAgentUpdate".

    currentAgentFetching: boolean,  // Fetching indicator for network thunk chain "callGetAgent".
    currentAgentError: Error | null,  // Network error info for thunk chain "callGetAgent".
    currentAgentCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAgent".

    currentCustomerManaged: Models.CustomerManaged,
    agentContextMode: Enums.AgentContextMode,
    hasChangedAgentPersonData: boolean,
    isVisibleAgentErrorModalWindow: boolean,



}

export const initialState = {
    get state(): IAgentState {
        return defaultState.state
    }
}


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
    (value: string,): void;
}

export interface PERFORM_INPUT_MOBILE_PHONE {
    (value: string,): void;
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
    (activity: ModelsScheduler.Activity, mode : EnumsScheduler.ActivityMode): void;
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

export interface NAVIGATE_TO_AGENT_COMMENT {():void;}
export interface PERFORM_SET_AGENT_COMMENT_EDIT_STATUS {():void;}
export interface NAVIGATE_TO_MEMBER_LIST {():void;}
export interface NAVIGATE_TO_AGENT_EDIT_COMMENT {():void;}


export interface PERFORM_OPEN_AGENT_SCREEN {
    (agent: Models.Agent, agentMode: Enums.AgentMode, agentContextMode: Enums.AgentContextMode): void;
}

export interface CALL_GET_AGENT {
    (): void;
}

export interface AGENT_REDUCE {
    (currentUser: ModelsApp.Employee,): void;
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


export interface  PERFORM_OPEN_CUSTOMER_SCREEN {(customer: Models.AgentCustomerPosition): void}
