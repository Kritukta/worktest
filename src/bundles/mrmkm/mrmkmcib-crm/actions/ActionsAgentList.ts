/**
 * Actions of AgentList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
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


export const PERFORM_OPEN_AGENT_LIST_SCREEN = 'AGENT_LIST_CONTAINER_PERFORM_OPEN_AGENT_LIST_SCREEN'

export const PERFORM_INPUT_AGENT_LIST = 'AGENT_LIST_CONTAINER_PERFORM_INPUT_AGENT_LIST'


export const CALL_GET_AGENT_LIST = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST'
export const CALL_GET_AGENT_LIST_REQUEST = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_REQUEST'
export const CALL_GET_AGENT_LIST_SUCCESS = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_SUCCESS'
export const CALL_GET_AGENT_LIST_FAILURE = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_FAILURE'

export const PERFORM_CANCEL_SEARCH_AGENT = 'AGENT_LIST_CONTAINER_PERFORM_CANCEL_SEARCH_AGENT'
export const NAVIGATE_TO_AGENT_LIST_SCREEN = 'AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_LIST_SCREEN'
export const NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN = 'AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN'
export const PERFORM_SELECT_AGENT_JOB_POSITION = 'AGENT_LIST_CONTAINER_PERFORM_SELECT_AGENT_JOB_POSITION'

export const PERFORM_INPUT_AGENT_JOB_POSITION = 'AGENT_LIST_CONTAINER_PERFORM_INPUT_AGENT_JOB_POSITION'

export const SET_EDITOR_ENABLED = 'AGENT_LIST_CONTAINER_SET_EDITOR_ENABLED'

export const PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW = 'AGENT_LIST_CONTAINERPERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW'

export const NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN = 'AGENT_LIST_CONTAINER_NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN'

export const PERFORM_AGENT_LIST_PRINCIPAL = 'AGENT_LIST_CONTAINER_PERFORM_AGENT_LIST_PRINCIPAL'

export const NAVIGATE_TO_AGENT_SEARCH_SCREEN = 'AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_SEARCH_SCREEN'

export const NAVIGATE_TO_AGENT_CREATE_SCREEN = 'AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_CREATE_SCREEN'

export const PERFORM_INPUT_AGENT_SEARCH = 'AGENT_LIST_CONTAINER_PERFORM_INPUT_AGENT_SEARCH'

export const CALL_GET_AGENT_SEARCH_LIST = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST'
export const CALL_GET_AGENT_SEARCH_LIST_REQUEST = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST_REQUEST'
export const CALL_GET_AGENT_SEARCH_LIST_SUCCESS = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST_SUCCESS'
export const CALL_GET_AGENT_SEARCH_LIST_FAILURE = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST_FAILURE'

export const PERFORM_AGENT_SEARCH_LIST_SELECT = 'AGENT_LIST_CONTAINER_PERFORM_AGENT_SEARCH_LIST_SELECT'

export const PERFORM_UPDATE_AGENT_LIST = 'AGENT_LIST_CONTAINER_PERFORM_UPDATE_AGENT_LIST'

export const PERFORM_OPEN_AGENT_DELETE_PANEL = 'AGENT_LIST_CONTAINER_PERFORM_OPEN_AGENT_DELETE_PANEL'

export const PERFORM_MENU_AGENT_ADD_SHOW = 'AGENT_LIST_CONTAINER_PERFORM_MENU_AGENT_ADD_SHOW'

export const PERFORM_MENU_AGENT_ADD_HIDE = 'AGENT_LIST_CONTAINER_PERFORM_MENU_AGENT_ADD_HIDE'

export const PERFORM_SAVE = 'AGENT_LIST_CONTAINER_PERFORM_SAVE'
export const PERFORM_SAVE_EXECUTE = 'AGENT_LIST_CONTAINER_PERFORM_SAVE_EXECUTE'
export const PERFORM_SAVE_SUCCESS = 'AGENT_LIST_CONTAINER_PERFORM_SAVE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'AGENT_LIST_CONTAINER_PERFORM_SAVE_FAILURE'

export const CALL_GET_CUSTOMER_MODIFIER_ID = 'AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID'
export const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = 'AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST'
export const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = 'AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS'
export const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = 'AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE'

export const CALL_GET_AGENT_LIST_MODIFIER_ID = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID'
export const CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST'
export const CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS'
export const CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE = 'AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE'

export const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE = 'AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE'
export const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST = 'AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST'
export const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS = 'AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS'
export const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE = 'AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE'

export const CALL_PUT_DEAL_AGENT_LIST_UPDATE = 'AGENT_LIST_CONTAINER_CALL_PUT_DEAL_AGENT_LIST_UPDATE'
export const CALL_GET_DEAL_REFRESH = 'AGENT_LIST_CONTAINER_CALL_GET_DEAL_REFRESH'


export const PERFORM_EDIT = 'AGENT_LIST_CONTAINER_PERFORM_EDIT'

export const PERFORM_CANCEL = 'AGENT_LIST_CONTAINER_PERFORM_CANCEL'

export const NAVIGATE_BACK = 'AGENT_LIST_CONTAINER_NAVIGATE_BACK'

export const PERFORM_CONTAINER_RESET = 'AGENT_LIST_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_CLOSE_AGENT_LIST_SCREEN = 'AGENT_LIST_CONTAINER_PERFORM_CLOSE_AGENT_LIST_SCREEN'

export const PERFORM_POPOVER_ADD_HIDE = 'AGENT_LIST_CONTAINER_PERFORM_POPOVER_ADD_HIDE'

export const PERFORM_POPOVER_ADD_SHOW = 'AGENT_LIST_CONTAINER_PERFORM_POPOVER_ADD_SHOW'

export const PERFORM_FLUSH = 'AGENT_LIST_CONTAINER_PERFORM_FLUSH'

export const PERFORM_AGENT_DELETE = 'AGENT_LIST_CONTAINER_PERFORM_AGENT_DELETE'

export const PERFORM_CLOSE_AGENT_DELETE_PANEL = 'AGENT_LIST_CONTAINER_PERFORM_CLOSE_AGENT_DELETE_PANEL'
/**
 * Thunk dispatched by "AgentList" screen. Refresh current agent list.
 *
 */
export type PERFORM_OPEN_AGENT_LIST_SCREEN = {
    customerManaged: Models.CustomerManaged,
    currentDeal: Models.Deal | null,
    agentListContextMode: Enums.AgentListContextMode,
    agentListAccessLevel: Enums.AgentListAccessLevel}
export const performOpenAgentListScreen = ( customerManaged: Models.CustomerManaged,
                                            currentDeal: Models.Deal | null,
                                            agentListContextMode: Enums.AgentListContextMode,
                                            agentListAccessLevel: Enums.AgentListAccessLevel): Action<PERFORM_OPEN_AGENT_LIST_SCREEN> => ({
    type: PERFORM_OPEN_AGENT_LIST_SCREEN,
    payload: {
        customerManaged,
        currentDeal,
        agentListContextMode,
        agentListAccessLevel
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 *
 */
export type CALL_GET_AGENT_LIST = {}
export const callGetAgentList = (): Action<CALL_GET_AGENT_LIST> => ({
    type: CALL_GET_AGENT_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list with cache flushed.
 *
 */
export type PERFORM_FLUSH = {}
export const performFlush = (): Action<PERFORM_FLUSH> => ({
    type: PERFORM_FLUSH,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetAgentList" started. Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 */
export type CALL_GET_AGENT_LIST_REQUEST = {}
export const callGetAgentListRequest = (): Action<CALL_GET_AGENT_LIST_REQUEST> => ({
    type: CALL_GET_AGENT_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 *
 * @param {Models.AgentList} response Data received by fetch.
 */
export type CALL_GET_AGENT_LIST_SUCCESS = { response: Response<Models.AgentList> }
export const callGetAgentListSuccess = (response: Response<Models.AgentList>): Action<CALL_GET_AGENT_LIST_SUCCESS> => ({
    type: CALL_GET_AGENT_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen to input agent list.
 *
 * @param {Models.AgentList}
 */
export type PERFORM_INPUT_AGENT_LIST = { agentList: Models.AgentList }
export const performInputAgentList = (agentList: Models.AgentList): Action<PERFORM_INPUT_AGENT_LIST> => ({
    type: PERFORM_INPUT_AGENT_LIST,
    payload: {
        agentList
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_AGENT_LIST_FAILURE = { error: Error }
export const callGetAgentListFailure = (error: Error): Action<CALL_GET_AGENT_LIST_FAILURE> => ({
    type: CALL_GET_AGENT_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show add menu.
 *
 */
export type PERFORM_POPOVER_ADD_SHOW = {}
export const performPopoverAddShow = (): Action<PERFORM_POPOVER_ADD_SHOW> => ({
    type: PERFORM_POPOVER_ADD_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to hide add menu.
 *
 */
export type PERFORM_POPOVER_ADD_HIDE = {}
export const performPopoverAddHide = (): Action<PERFORM_POPOVER_ADD_HIDE> => ({
    type: PERFORM_POPOVER_ADD_HIDE,
    payload: {}
})


/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent list.
 *
 * @param {ModelsScheduler.Activity} activity .
 * @param {Models.Deal} deal .
 * @param {Models.CustomerManaged} customerManaged .
 * @param {Enums.AgentListContextMode} mode .
 * @param {boolean} isExpandedMode .
 */
export type NAVIGATE_TO_AGENT_LIST_SCREEN = { }
export const navigateToAgentListScreen = (): Action<NAVIGATE_TO_AGENT_LIST_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_LIST_SCREEN,
    payload: {
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to check access to editor mode.
 *
 * @param {boolean} isEditorEnabled .
 */
export type SET_EDITOR_ENABLED = { isEditorEnabled: boolean }
export const setEditorEnabled = (isEditorEnabled: boolean): Action<SET_EDITOR_ENABLED> => ({
    type: SET_EDITOR_ENABLED,
    payload: {
        isEditorEnabled: isEditorEnabled,
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show principal picker screen.
 *
 */
export type NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN = {}
export const navigateToPrincipalPickerScreen = (): Action<NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to set agent list principal.
 *
 * @param {string} agentId .
 * @param {boolean} isPrincipal .
 */
export type PERFORM_AGENT_LIST_PRINCIPAL = { agentId: string, isPrincipal: boolean, }
export const performAgentListPrincipal = (agentId: string, isPrincipal: boolean,): Action<PERFORM_AGENT_LIST_PRINCIPAL> => ({
    type: PERFORM_AGENT_LIST_PRINCIPAL,
    payload: {
        agentId: agentId,
        isPrincipal: isPrincipal,
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent search screen.
 *
 */
export type NAVIGATE_TO_AGENT_SEARCH_SCREEN = {}
export const navigateToAgentSearchScreen = (): Action<NAVIGATE_TO_AGENT_SEARCH_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_SEARCH_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent create screen.
 *
 */
export type NAVIGATE_TO_AGENT_CREATE_SCREEN = {}
export const navigateToAgentCreateScreen = (): Action<NAVIGATE_TO_AGENT_CREATE_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_CREATE_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk dispatched on agent search input changed.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_AGENT_SEARCH = { value: string }
export const performInputAgentSearch = (value: string): Action<PERFORM_INPUT_AGENT_SEARCH> => ({
    type: PERFORM_INPUT_AGENT_SEARCH,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 *
 */
export type CALL_GET_AGENT_SEARCH_LIST = {}
export const callGetAgentSearchList = (): Action<CALL_GET_AGENT_SEARCH_LIST> => ({
    type: CALL_GET_AGENT_SEARCH_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetAgentSearchList" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 */
export type CALL_GET_AGENT_SEARCH_LIST_REQUEST = {}
export const callGetAgentSearchListRequest = (): Action<CALL_GET_AGENT_SEARCH_LIST_REQUEST> => ({
    type: CALL_GET_AGENT_SEARCH_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetAgentSearchList". Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 *
 * @param {Models.AgentList} response Data received by fetch.
 */
export type CALL_GET_AGENT_SEARCH_LIST_SUCCESS = { response: Response<Models.AgentList> }
export const callGetAgentSearchListSuccess = (response: Response<Models.AgentList>): Action<CALL_GET_AGENT_SEARCH_LIST_SUCCESS> => ({
    type: CALL_GET_AGENT_SEARCH_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetAgentSearchList". Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_AGENT_SEARCH_LIST_FAILURE = { error: Error }
export const callGetAgentSearchListFailure = (error: Error): Action<CALL_GET_AGENT_SEARCH_LIST_FAILURE> => ({
    type: CALL_GET_AGENT_SEARCH_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
 *
 * @param {boolean} .
 */
export type PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW = { status: boolean }
export const performChangeDisplayAgentListErrorModalWindow = (status: boolean): Action<PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW> => ({
    type: PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW,
    payload: {
        status,
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
 *
 * @param {Models.Agent} agent .
 */
export type PERFORM_AGENT_SEARCH_LIST_SELECT = { agent: Models.Agent }
export const performAgentSearchListSelect = (agent: Models.Agent): Action<PERFORM_AGENT_SEARCH_LIST_SELECT> => ({
    type: PERFORM_AGENT_SEARCH_LIST_SELECT,
    payload: {
        agent: agent,
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent position picker screen.
 *
 */
export type NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN = {}
export const navigateToAgentPositionListScreen = (): Action<NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN,
    payload: {}
})


/**
 * Thunk dispatched by "AgentList" screen. Thunk used to search position for new agent from search list.
 *
 * @param {string} position .
 */
export type PERFORM_INPUT_AGENT_JOB_POSITION = { position: string }
export const performInputAgentJobPosition= (position: string): Action<PERFORM_INPUT_AGENT_JOB_POSITION> => ({
    type: PERFORM_INPUT_AGENT_JOB_POSITION,
    payload: {
        position
    }
})
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent position from search list.
 *
 * @param {string} position .
 */
export type PERFORM_SELECT_AGENT_JOB_POSITION = { position: string }
export const performSelectAgentJobPosition= (position: string): Action<PERFORM_SELECT_AGENT_JOB_POSITION> => ({
    type: PERFORM_SELECT_AGENT_JOB_POSITION,
    payload: {
        position
    }
})
/**
 * Internal thunk used in "AgentList" container. Thunk used to add or update agent.
 *
 * @param {Models.AgentList}  .
 */
export type PERFORM_UPDATE_AGENT_LIST = { agentList: Models.AgentList, }
export const performUpdateAgentList = (agentList: Models.AgentList,): Action<PERFORM_UPDATE_AGENT_LIST> => ({
    type: PERFORM_UPDATE_AGENT_LIST,
    payload: {
        agentList,
    }
})

/**
 * Internal thunk used in "AgentList" container. Thunk used to add or update agent.
 *
 * @param {Models.Agent}  .
 */
export type PERFORM_AGENT_DELETE = { agent: Models.Agent, }
export const performAgentDelete = (agent: Models.Agent,): Action<PERFORM_AGENT_DELETE> => ({
    type: PERFORM_AGENT_DELETE,
    payload: {
        agent,
    }
})

/**
 * Internal thunk used in "AgentList" container. Thunk used to open agent delete panel.
 *
 * @param {Models.Agent}  .
 */
export type PERFORM_OPEN_AGENT_DELETE_PANEL = { agent: Models.Agent, }
export const performOpenAgentDeletePanel = (agent: Models.Agent,): Action<PERFORM_OPEN_AGENT_DELETE_PANEL> => ({
    type: PERFORM_OPEN_AGENT_DELETE_PANEL,
    payload: {
        agent,
    }
})

/**
 * Internal thunk used in "AgentList" container. Thunk used to close agent delete panel.
 *
 * @param {Models.Agent}  .
 */
export type PERFORM_CLOSE_AGENT_DELETE_PANEL = { agent: Models.Agent, }
export const performCloseAgentDeletePanel = (agent: Models.Agent,): Action<PERFORM_CLOSE_AGENT_DELETE_PANEL> => ({
    type: PERFORM_CLOSE_AGENT_DELETE_PANEL,
    payload: {
        agent,
    }
})


export type PERFORM_CANCEL_SEARCH_AGENT = {}
export const performCancelSearchAgent = (): Action<PERFORM_CANCEL_SEARCH_AGENT> => ({
    type: PERFORM_CANCEL_SEARCH_AGENT,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_MENU_AGENT_ADD_SHOW = {}
export const performMenuAgentAddShow = (): Action<PERFORM_MENU_AGENT_ADD_SHOW> => ({
    type: PERFORM_MENU_AGENT_ADD_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_MENU_AGENT_ADD_HIDE = {}
export const performMenuAgentAddHide = (): Action<PERFORM_MENU_AGENT_ADD_HIDE> => ({
    type: PERFORM_MENU_AGENT_ADD_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
 *
 */
export type PERFORM_SAVE = {}
export const performSave = (): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
 */
export type PERFORM_SAVE_EXECUTE = {}
export const performSaveExecute = (): Action<PERFORM_SAVE_EXECUTE> => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_SAVE_SUCCESS = { data: boolean, currentDeal: Models.Deal | null }
export const performSaveSuccess = (data: boolean, currentDeal: Models.Deal | null): Action<PERFORM_SAVE_SUCCESS> => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data,
        currentDeal: currentDeal
    }
})

/*
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_SAVE_FAILURE = { error: Error }
export const performSaveFailure = (error: Error): Action<PERFORM_SAVE_FAILURE> => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
 *
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID = {}
export const callGetCustomerModifierId = (): Action<CALL_GET_CUSTOMER_MODIFIER_ID> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = {}
export const callGetCustomerModifierIdRequest = (): Action<CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
 *
 * @param {Models.CustomerManaged} response Data received by fetch.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = { response: Response<Models.CustomerManaged> }
export const callGetCustomerModifierIdSuccess = (response: Response<Models.CustomerManaged>): Action<CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = { error: Error }
export const callGetCustomerModifierIdFailure = (error: Error): Action<CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
 *
 */
export type CALL_GET_AGENT_LIST_MODIFIER_ID = {}
export const callGetAgentListModifierId = (): Action<CALL_GET_AGENT_LIST_MODIFIER_ID> => ({
    type: CALL_GET_AGENT_LIST_MODIFIER_ID,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetAgentListModifierId" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
 */
export type CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST = {}
export const callGetAgentListModifierIdRequest = (): Action<CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST> => ({
    type: CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetAgentListModifierId". Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
 *
 * @param {Models.AgentList} response Data received by fetch.
 */
export type CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS = { response: Response<Models.AgentList> }
export const callGetAgentListModifierIdSuccess = (response: Response<Models.AgentList>): Action<CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS> => ({
    type: CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetAgentListModifierId". Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE = { error: Error }
export const callGetAgentListModifierIdFailure = (error: Error): Action<CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE> => ({
    type: CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Fetch put request.
 *
 */
export type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE = {}
export const callPutCustomerAgentListUpdate = (): Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE> => ({
    type: CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPutCustomerAgentListUpdate" started. Thunk dispatched by "AgentList" screen. Fetch put request.
 */
export type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST = {}
export const callPutCustomerAgentListUpdateRequest = (): Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST> => ({
    type: CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPutCustomerAgentListUpdate". Thunk dispatched by "AgentList" screen. Fetch put request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS = { response: Response<boolean> }
export const callPutCustomerAgentListUpdateSuccess = (response: Response<boolean>): Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS> => ({
    type: CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPutCustomerAgentListUpdate". Thunk dispatched by "AgentList" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE = { error: Error }
export const callPutCustomerAgentListUpdateFailure = (error: Error): Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE> => ({
    type: CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to enter editor mode.
 *
 */
export type PERFORM_EDIT = {}
export const performEdit = (): Action<PERFORM_EDIT> => ({
    type: PERFORM_EDIT,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk used to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen.
 *
 */
export type PERFORM_CLOSE_AGENT_LIST_SCREEN = {}
export const performCloseAgentListScreen = (): Action<PERFORM_CLOSE_AGENT_LIST_SCREEN> => ({
    type: PERFORM_CLOSE_AGENT_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "AgentList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealAgentListUpdate
 */
export type CALL_PUT_DEAL_AGENT_LIST_UPDATE = {}
export const callPutDealAgentListUpdate = (): Action<CALL_PUT_DEAL_AGENT_LIST_UPDATE> => ({
    type: CALL_PUT_DEAL_AGENT_LIST_UPDATE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealRefresh
 */
export type CALL_GET_DEAL_REFRESH = {}
export const callGetDealRefresh = (): Action<CALL_GET_DEAL_REFRESH> => ({
    type: CALL_GET_DEAL_REFRESH,
    payload: {}
})