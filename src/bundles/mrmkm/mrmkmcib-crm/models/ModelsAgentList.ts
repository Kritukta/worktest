/**
 * Models for AgentList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"



// TODO Describe models used in AgentList actions and thunks.


const defaultState = {
    get state(): IAgentListState {
        return {
            currentDeal: null,  // State parameter displayed in "AgentList" screen.
            currentCustomerManaged: null,  // State parameter displayed in "AgentList" screen.
            agentListMode: Enums.AgentListMode.None,  // State parameter displayed in "AgentList" screen.
            agentListContextMode: Enums.AgentListContextMode.None,
            inputAgentSearch: '',  // State parameter displayed in "AgentList" screen.
            inputAgentSearchSelected: defaultValues.Agent,  // State parameter displayed in "AgentList" screen.
            inputAgentRole: null,  // State parameter displayed in "AgentList" screen.
            operationUuid: '',  // State parameter displayed in "AgentList" screen.
            agentListFetching: false,  // Progress indicator for thunk chain "performAgentListRefresh".
            agentListFetchingError: null,  // Error info for thunk chain "performAgentListRefresh".
            agentList: defaultValues.AgentList,  // Fetch result for "callGetAgentList" thunk.
            inputAgentList: defaultValues.AgentList,
            agentListCachedDate: null,  // Response data cache date for network thunk chain "callGetAgentList".
            agentSearchList: defaultValues.AgentList,  // Fetch result for "callGetAgentSearchList" thunk.
            agentSearchListFetching: false,  // Fetching indicator for network thunk chain "callGetAgentSearchList".
            agentSearchListError: null,  // Network error info for thunk chain "callGetAgentSearchList".
            agentSearchListCachedDate: null,  // Response data cache date for network thunk chain "callGetAgentSearchList".

            agentListSaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            agentListSaveError: null,  // Error info for thunk chain "performSave".
            isEditedDeal: false,
            agentListAccessLevel: Enums.AgentListAccessLevel.None,
            inputAgentJobPosition: '',
            selectedAgentJobPosition: '',
            isVisiblePopoverMenu: false,
            hasChangedAgentList: false,
            isVisibleAgentListErrorModalWindow: false,
            searchAgentStringRequest: '',
            agentListOpenedDeletePanel: [],
            // TODO Describe AgentList reducer state.


        }
    }
}

export interface IAgentListState {
    agentListOpenedDeletePanel: Models.Agent[],
    searchAgentStringRequest: string,
    currentDeal: Models.Deal | null,  // State parameter displayed in "AgentList" screen.
    currentCustomerManaged: Models.CustomerManaged | null,  // State parameter displayed in "AgentList" screen.
    inputAgentJobPosition: string,
    selectedAgentJobPosition: string,
    agentListMode: Enums.AgentListMode,  // State parameter displayed in "AgentList" screen.
    agentListContextMode: Enums.AgentListContextMode,  // State parameter displayed in "AgentList" screen.
    agentListAccessLevel: Enums.AgentListAccessLevel,
    inputAgentSearch: string,  // State parameter displayed in "AgentList" screen.
    inputAgentSearchSelected: Models.Agent,  // State parameter displayed in "AgentList" screen.
    inputAgentRole: ModelsApp.Classifier | null,  // State parameter displayed in "AgentList" screen.
    operationUuid: string,  // State parameter displayed in "AgentList" screen.
    agentListFetchingError: Error | null,  // Error info for thunk chain "performAgentListRefresh".
    agentList: Models.AgentList,  // Fetch result for "callGetAgentList" thunk.
    inputAgentList: Models.AgentList,
    agentListFetching: boolean,  // Fetching indicator for network thunk chain "callGetAgentList".
    agentListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAgentList".
    agentSearchList: Models.AgentList,  // Fetch result for "callGetAgentSearchList" thunk.
    agentSearchListFetching: boolean,  // Fetching indicator for network thunk chain "callGetAgentSearchList".
    agentSearchListError: Error | null,  // Network error info for thunk chain "callGetAgentSearchList".
    agentSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetAgentSearchList".

    agentListSaveInProgress: boolean,  // Progress indicator for thunk chain "performSave".
    agentListSaveError: Error | null,  // Error info for thunk chain "performSave".
    isEditedDeal: boolean,
    isVisiblePopoverMenu: boolean,
    hasChangedAgentList: boolean,
    isVisibleAgentListErrorModalWindow: boolean,
    // TODO Describe AgentList reducer state.


}

export const initialState = {
    get state(): IAgentListState {
        return defaultState.state
    }
}


export interface PERFORM_AGENT_LIST_REFRESH {
    (activity: ModelsScheduler.Activity, deal: Models.Deal,
     customerManaged: Models.CustomerManaged,
     mode: Enums.AgentListContextMode): void;
}

export interface CALL_GET_AGENT_LIST {
    (customerId: string): void;
}

export interface AGENT_LIST_REDUCE {
    (currentUser: ModelsApp.Employee,): void;
}

export interface NAVIGATE_TO_AGENT_LIST_SCREEN {
    (activity: ModelsScheduler.Activity, deal: Models.Deal, customerManaged: Models.CustomerManaged, mode: Enums.AgentListContextMode, isExpandedMode: boolean,): void;
}

export interface SET_EDITOR_ENABLED {
    (isEditorEnabled: boolean): void;
}

export type PERFORM_AGENT_DELETE = (agent: Models.Agent) => void;

export interface NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN {
    (): void;
}

export interface PERFORM_AGENT_LIST_PRINCIPAL {
    (agentId: string, isPrincipal: boolean,): void;
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
    (role: ModelsApp.Classifier,): void;
}

export interface MERGE_AGENT {
    (agent: Models.Agent,): void;
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

export interface NAVIGATE_BACK { (): void;}

export interface PERFORM_CLOSE_AGENT_LIST_SCREEN {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface  SWAP_CONTEXT_AGENT_LIST_TO_ACTIVITY {
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

export type PERFORM_OPEN_AGENT_DELETE_PANEL = (agent: Models.Agent) => void;
export type PERFORM_CLOSE_AGENT_DELETE_PANEL = (agent: Models.Agent) => void;


export type PERFORM_AGENT_LIST_SCREEN_INIT = () => void;
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
