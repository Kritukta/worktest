/**
 * Actions of AgentList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_OPEN_AGENT_LIST_SCREEN = "AGENT_LIST_CONTAINER_PERFORM_OPEN_AGENT_LIST_SCREEN";
export declare const PERFORM_INPUT_AGENT_LIST = "AGENT_LIST_CONTAINER_PERFORM_INPUT_AGENT_LIST";
export declare const CALL_GET_AGENT_LIST = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST";
export declare const CALL_GET_AGENT_LIST_REQUEST = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_REQUEST";
export declare const CALL_GET_AGENT_LIST_SUCCESS = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_SUCCESS";
export declare const CALL_GET_AGENT_LIST_FAILURE = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_FAILURE";
export declare const PERFORM_CANCEL_SEARCH_AGENT = "AGENT_LIST_CONTAINER_PERFORM_CANCEL_SEARCH_AGENT";
export declare const NAVIGATE_TO_AGENT_LIST_SCREEN = "AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_LIST_SCREEN";
export declare const NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN = "AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN";
export declare const PERFORM_SELECT_AGENT_JOB_POSITION = "AGENT_LIST_CONTAINER_PERFORM_SELECT_AGENT_JOB_POSITION";
export declare const PERFORM_INPUT_AGENT_JOB_POSITION = "AGENT_LIST_CONTAINER_PERFORM_INPUT_AGENT_JOB_POSITION";
export declare const SET_EDITOR_ENABLED = "AGENT_LIST_CONTAINER_SET_EDITOR_ENABLED";
export declare const PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW = "AGENT_LIST_CONTAINERPERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW";
export declare const NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN = "AGENT_LIST_CONTAINER_NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN";
export declare const PERFORM_AGENT_LIST_PRINCIPAL = "AGENT_LIST_CONTAINER_PERFORM_AGENT_LIST_PRINCIPAL";
export declare const NAVIGATE_TO_AGENT_SEARCH_SCREEN = "AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_SEARCH_SCREEN";
export declare const NAVIGATE_TO_AGENT_CREATE_SCREEN = "AGENT_LIST_CONTAINER_NAVIGATE_TO_AGENT_CREATE_SCREEN";
export declare const PERFORM_INPUT_AGENT_SEARCH = "AGENT_LIST_CONTAINER_PERFORM_INPUT_AGENT_SEARCH";
export declare const CALL_GET_AGENT_SEARCH_LIST = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST";
export declare const CALL_GET_AGENT_SEARCH_LIST_REQUEST = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST_REQUEST";
export declare const CALL_GET_AGENT_SEARCH_LIST_SUCCESS = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST_SUCCESS";
export declare const CALL_GET_AGENT_SEARCH_LIST_FAILURE = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_SEARCH_LIST_FAILURE";
export declare const PERFORM_AGENT_SEARCH_LIST_SELECT = "AGENT_LIST_CONTAINER_PERFORM_AGENT_SEARCH_LIST_SELECT";
export declare const PERFORM_UPDATE_AGENT_LIST = "AGENT_LIST_CONTAINER_PERFORM_UPDATE_AGENT_LIST";
export declare const PERFORM_OPEN_AGENT_DELETE_PANEL = "AGENT_LIST_CONTAINER_PERFORM_OPEN_AGENT_DELETE_PANEL";
export declare const PERFORM_MENU_AGENT_ADD_SHOW = "AGENT_LIST_CONTAINER_PERFORM_MENU_AGENT_ADD_SHOW";
export declare const PERFORM_MENU_AGENT_ADD_HIDE = "AGENT_LIST_CONTAINER_PERFORM_MENU_AGENT_ADD_HIDE";
export declare const PERFORM_SAVE = "AGENT_LIST_CONTAINER_PERFORM_SAVE";
export declare const PERFORM_SAVE_EXECUTE = "AGENT_LIST_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const PERFORM_SAVE_SUCCESS = "AGENT_LIST_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "AGENT_LIST_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID = "AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = "AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = "AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = "AGENT_LIST_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE";
export declare const CALL_GET_AGENT_LIST_MODIFIER_ID = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID";
export declare const CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST";
export declare const CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS";
export declare const CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE = "AGENT_LIST_CONTAINER_CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE";
export declare const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE = "AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE";
export declare const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST = "AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST";
export declare const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS = "AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS";
export declare const CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE = "AGENT_LIST_CONTAINER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE";
export declare const CALL_PUT_DEAL_AGENT_LIST_UPDATE = "AGENT_LIST_CONTAINER_CALL_PUT_DEAL_AGENT_LIST_UPDATE";
export declare const CALL_GET_DEAL_REFRESH = "AGENT_LIST_CONTAINER_CALL_GET_DEAL_REFRESH";
export declare const PERFORM_EDIT = "AGENT_LIST_CONTAINER_PERFORM_EDIT";
export declare const PERFORM_CANCEL = "AGENT_LIST_CONTAINER_PERFORM_CANCEL";
export declare const NAVIGATE_BACK = "AGENT_LIST_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_CONTAINER_RESET = "AGENT_LIST_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_CLOSE_AGENT_LIST_SCREEN = "AGENT_LIST_CONTAINER_PERFORM_CLOSE_AGENT_LIST_SCREEN";
export declare const PERFORM_POPOVER_ADD_HIDE = "AGENT_LIST_CONTAINER_PERFORM_POPOVER_ADD_HIDE";
export declare const PERFORM_POPOVER_ADD_SHOW = "AGENT_LIST_CONTAINER_PERFORM_POPOVER_ADD_SHOW";
export declare const PERFORM_FLUSH = "AGENT_LIST_CONTAINER_PERFORM_FLUSH";
export declare const PERFORM_AGENT_DELETE = "AGENT_LIST_CONTAINER_PERFORM_AGENT_DELETE";
export declare const PERFORM_CLOSE_AGENT_DELETE_PANEL = "AGENT_LIST_CONTAINER_PERFORM_CLOSE_AGENT_DELETE_PANEL";
/**
 * Thunk dispatched by "AgentList" screen. Refresh current agent list.
 *
 */
export declare type PERFORM_OPEN_AGENT_LIST_SCREEN = {
    customerManaged: Models.CustomerManaged;
    currentDeal: Models.Deal | null;
    agentListContextMode: Enums.AgentListContextMode;
    agentListAccessLevel: Enums.AgentListAccessLevel;
};
export declare const performOpenAgentListScreen: (customerManaged: ModelsCrm.CustomerManaged, currentDeal: ModelsCrm.Deal | null, agentListContextMode: Enums.AgentListContextMode, agentListAccessLevel: Enums.AgentListAccessLevel) => Action<PERFORM_OPEN_AGENT_LIST_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 *
 */
export declare type CALL_GET_AGENT_LIST = {};
export declare const callGetAgentList: () => Action<CALL_GET_AGENT_LIST>;
/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list with cache flushed.
 *
 */
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
/**
 * Action dispatched on network thunk chain "callGetAgentList" started. Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 */
export declare type CALL_GET_AGENT_LIST_REQUEST = {};
export declare const callGetAgentListRequest: () => Action<CALL_GET_AGENT_LIST_REQUEST>;
export declare type CALL_GET_AGENT_LIST_SUCCESS = {
    response: Response<Models.AgentList>;
};
export declare const callGetAgentListSuccess: (response: Response<ModelsCrm.AgentList>) => Action<CALL_GET_AGENT_LIST_SUCCESS>;
export declare type PERFORM_INPUT_AGENT_LIST = {
    agentList: Models.AgentList;
};
export declare const performInputAgentList: (agentList: ModelsCrm.AgentList) => Action<PERFORM_INPUT_AGENT_LIST>;
export declare type CALL_GET_AGENT_LIST_FAILURE = {
    error: Error;
};
export declare const callGetAgentListFailure: (error: Error) => Action<CALL_GET_AGENT_LIST_FAILURE>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show add menu.
 *
 */
export declare type PERFORM_POPOVER_ADD_SHOW = {};
export declare const performPopoverAddShow: () => Action<PERFORM_POPOVER_ADD_SHOW>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to hide add menu.
 *
 */
export declare type PERFORM_POPOVER_ADD_HIDE = {};
export declare const performPopoverAddHide: () => Action<PERFORM_POPOVER_ADD_HIDE>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent list.
 *
 * @param {ModelsScheduler.Activity} activity .
 * @param {Models.Deal} deal .
 * @param {Models.CustomerManaged} customerManaged .
 * @param {Enums.AgentListContextMode} mode .
 * @param {boolean} isExpandedMode .
 */
export declare type NAVIGATE_TO_AGENT_LIST_SCREEN = {};
export declare const navigateToAgentListScreen: () => Action<NAVIGATE_TO_AGENT_LIST_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to check access to editor mode.
 *
 * @param {boolean} isEditorEnabled .
 */
export declare type SET_EDITOR_ENABLED = {
    isEditorEnabled: boolean;
};
export declare const setEditorEnabled: (isEditorEnabled: boolean) => Action<SET_EDITOR_ENABLED>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show principal picker screen.
 *
 */
export declare type NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN = {};
export declare const navigateToPrincipalPickerScreen: () => Action<NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to set agent list principal.
 *
 * @param {string} agentId .
 * @param {boolean} isPrincipal .
 */
export declare type PERFORM_AGENT_LIST_PRINCIPAL = {
    agentId: string;
    isPrincipal: boolean;
};
export declare const performAgentListPrincipal: (agentId: string, isPrincipal: boolean) => Action<PERFORM_AGENT_LIST_PRINCIPAL>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent search screen.
 *
 */
export declare type NAVIGATE_TO_AGENT_SEARCH_SCREEN = {};
export declare const navigateToAgentSearchScreen: () => Action<NAVIGATE_TO_AGENT_SEARCH_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent create screen.
 *
 */
export declare type NAVIGATE_TO_AGENT_CREATE_SCREEN = {};
export declare const navigateToAgentCreateScreen: () => Action<NAVIGATE_TO_AGENT_CREATE_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk dispatched on agent search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_AGENT_SEARCH = {
    value: string;
};
export declare const performInputAgentSearch: (value: string) => Action<PERFORM_INPUT_AGENT_SEARCH>;
/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 *
 */
export declare type CALL_GET_AGENT_SEARCH_LIST = {};
export declare const callGetAgentSearchList: () => Action<CALL_GET_AGENT_SEARCH_LIST>;
/**
 * Action dispatched on network thunk chain "callGetAgentSearchList" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 */
export declare type CALL_GET_AGENT_SEARCH_LIST_REQUEST = {};
export declare const callGetAgentSearchListRequest: () => Action<CALL_GET_AGENT_SEARCH_LIST_REQUEST>;
export declare type CALL_GET_AGENT_SEARCH_LIST_SUCCESS = {
    response: Response<Models.AgentList>;
};
export declare const callGetAgentSearchListSuccess: (response: Response<ModelsCrm.AgentList>) => Action<CALL_GET_AGENT_SEARCH_LIST_SUCCESS>;
export declare type CALL_GET_AGENT_SEARCH_LIST_FAILURE = {
    error: Error;
};
export declare const callGetAgentSearchListFailure: (error: Error) => Action<CALL_GET_AGENT_SEARCH_LIST_FAILURE>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
 *
 * @param {boolean} .
 */
export declare type PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW = {
    status: boolean;
};
export declare const performChangeDisplayAgentListErrorModalWindow: (status: boolean) => Action<PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
 *
 * @param {Models.Agent} agent .
 */
export declare type PERFORM_AGENT_SEARCH_LIST_SELECT = {
    agent: Models.Agent;
};
export declare const performAgentSearchListSelect: (agent: ModelsCrm.Agent) => Action<PERFORM_AGENT_SEARCH_LIST_SELECT>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent position picker screen.
 *
 */
export declare type NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN = {};
export declare const navigateToAgentPositionListScreen: () => Action<NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to search position for new agent from search list.
 *
 * @param {string} position .
 */
export declare type PERFORM_INPUT_AGENT_JOB_POSITION = {
    position: string;
};
export declare const performInputAgentJobPosition: (position: string) => Action<PERFORM_INPUT_AGENT_JOB_POSITION>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent position from search list.
 *
 * @param {string} position .
 */
export declare type PERFORM_SELECT_AGENT_JOB_POSITION = {
    position: string;
};
export declare const performSelectAgentJobPosition: (position: string) => Action<PERFORM_SELECT_AGENT_JOB_POSITION>;
/**
 * Internal thunk used in "AgentList" container. Thunk used to add or update agent.
 *
 * @param {Models.AgentList}  .
 */
export declare type PERFORM_UPDATE_AGENT_LIST = {
    agentList: Models.AgentList;
};
export declare const performUpdateAgentList: (agentList: ModelsCrm.AgentList) => Action<PERFORM_UPDATE_AGENT_LIST>;
/**
 * Internal thunk used in "AgentList" container. Thunk used to add or update agent.
 *
 * @param {Models.Agent}  .
 */
export declare type PERFORM_AGENT_DELETE = {
    agent: Models.Agent;
};
export declare const performAgentDelete: (agent: ModelsCrm.Agent) => Action<PERFORM_AGENT_DELETE>;
/**
 * Internal thunk used in "AgentList" container. Thunk used to open agent delete panel.
 *
 * @param {Models.Agent}  .
 */
export declare type PERFORM_OPEN_AGENT_DELETE_PANEL = {
    agent: Models.Agent;
};
export declare const performOpenAgentDeletePanel: (agent: ModelsCrm.Agent) => Action<PERFORM_OPEN_AGENT_DELETE_PANEL>;
/**
 * Internal thunk used in "AgentList" container. Thunk used to close agent delete panel.
 *
 * @param {Models.Agent}  .
 */
export declare type PERFORM_CLOSE_AGENT_DELETE_PANEL = {
    agent: Models.Agent;
};
export declare const performCloseAgentDeletePanel: (agent: ModelsCrm.Agent) => Action<PERFORM_CLOSE_AGENT_DELETE_PANEL>;
export declare type PERFORM_CANCEL_SEARCH_AGENT = {};
export declare const performCancelSearchAgent: () => Action<PERFORM_CANCEL_SEARCH_AGENT>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_MENU_AGENT_ADD_SHOW = {};
export declare const performMenuAgentAddShow: () => Action<PERFORM_MENU_AGENT_ADD_SHOW>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_MENU_AGENT_ADD_HIDE = {};
export declare const performMenuAgentAddHide: () => Action<PERFORM_MENU_AGENT_ADD_HIDE>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
 *
 */
export declare type PERFORM_SAVE = {};
export declare const performSave: () => Action<PERFORM_SAVE>;
export declare type PERFORM_SAVE_EXECUTE = {};
export declare const performSaveExecute: () => Action<PERFORM_SAVE_EXECUTE>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
    currentDeal: Models.Deal | null;
};
export declare const performSaveSuccess: (data: boolean, currentDeal: ModelsCrm.Deal | null) => Action<PERFORM_SAVE_SUCCESS>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
/**
 * Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
 *
 */
export declare type CALL_GET_CUSTOMER_MODIFIER_ID = {};
export declare const callGetCustomerModifierId: () => Action<CALL_GET_CUSTOMER_MODIFIER_ID>;
/**
 * Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
 */
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = {};
export declare const callGetCustomerModifierIdRequest: () => Action<CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = {
    response: Response<Models.CustomerManaged>;
};
export declare const callGetCustomerModifierIdSuccess: (response: Response<ModelsCrm.CustomerManaged>) => Action<CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = {
    error: Error;
};
export declare const callGetCustomerModifierIdFailure: (error: Error) => Action<CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE>;
/**
 * Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
 *
 */
export declare type CALL_GET_AGENT_LIST_MODIFIER_ID = {};
export declare const callGetAgentListModifierId: () => Action<CALL_GET_AGENT_LIST_MODIFIER_ID>;
/**
 * Action dispatched on network thunk chain "callGetAgentListModifierId" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
 */
export declare type CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST = {};
export declare const callGetAgentListModifierIdRequest: () => Action<CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST>;
export declare type CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS = {
    response: Response<Models.AgentList>;
};
export declare const callGetAgentListModifierIdSuccess: (response: Response<ModelsCrm.AgentList>) => Action<CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS>;
export declare type CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE = {
    error: Error;
};
export declare const callGetAgentListModifierIdFailure: (error: Error) => Action<CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE>;
/**
 * Thunk dispatched by "AgentList" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE = {};
export declare const callPutCustomerAgentListUpdate: () => Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE>;
/**
 * Action dispatched on network thunk chain "callPutCustomerAgentListUpdate" started. Thunk dispatched by "AgentList" screen. Fetch put request.
 */
export declare type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST = {};
export declare const callPutCustomerAgentListUpdateRequest: () => Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST>;
export declare type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPutCustomerAgentListUpdateSuccess: (response: Response<boolean>) => Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS>;
export declare type CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutCustomerAgentListUpdateFailure: (error: Error) => Action<CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to enter editor mode.
 *
 */
export declare type PERFORM_EDIT = {};
export declare const performEdit: () => Action<PERFORM_EDIT>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk used to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "AgentList" screen.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "AgentList" screen.
 *
 */
export declare type PERFORM_CLOSE_AGENT_LIST_SCREEN = {};
export declare const performCloseAgentListScreen: () => Action<PERFORM_CLOSE_AGENT_LIST_SCREEN>;
/**
 * Thunk dispatched by "AgentList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealAgentListUpdate
 */
export declare type CALL_PUT_DEAL_AGENT_LIST_UPDATE = {};
export declare const callPutDealAgentListUpdate: () => Action<CALL_PUT_DEAL_AGENT_LIST_UPDATE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealRefresh
 */
export declare type CALL_GET_DEAL_REFRESH = {};
export declare const callGetDealRefresh: () => Action<CALL_GET_DEAL_REFRESH>;
