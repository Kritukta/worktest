/**
 * Actions of Agent container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_SEND_EMAIL = "AGENT_CONTAINER_PERFORM_SEND_EMAIL";
export declare const PERFORM_SCHEDULER_OPEN = "AGENT_CONTAINER_PERFORM_SCHEDULER_OPEN";
export declare const PERFORM_INPUT_FIRST_NAME = "AGENT_CONTAINER_PERFORM_INPUT_FIRST_NAME";
export declare const PERFORM_INPUT_LAST_NAME = "AGENT_CONTAINER_PERFORM_INPUT_LAST_NAME";
export declare const PERFORM_INPUT_MIDDLE_NAME = "AGENT_CONTAINER_PERFORM_INPUT_MIDDLE_NAME";
export declare const NAVIGATE_TO_JOB_PICKER_SCREEN = "AGENT_CONTAINER_NAVIGATE_TO_JOB_PICKER_SCREEN";
export declare const PERFORM_INPUT_JOB_POSITION = "AGENT_CONTAINER_PERFORM_INPUT_JOB_POSITION";
export declare const PERFORM_INPUT_SEARCH_JOB_POSITION = "AGENT_CONTAINER_PERFORM_INPUT_SEARCH_JOB_POSITION";
export declare const PERFORM_CLOSE_AGENT_SCREEN = "AGENT_CONTAINER_PERFORM_CLOSE_AGENT_SCREEN";
export declare const PERFORM_SET_AGENT_PANEL_CURRENT_PAGE = "AGENT_CONTAINER_PERFORM_SET_AGENT_PANEL_CURRENT_PAGE";
export declare const PERFORM_INPUT_WORK_PHONE = "AGENT_CONTAINER_PERFORM_INPUT_WORK_PHONE";
export declare const PERFORM_INPUT_MOBILE_PHONE = "AGENT_CONTAINER_PERFORM_INPUT_MOBILE_PHONE";
export declare const PERFORM_INPUT_EMAIL = "AGENT_CONTAINER_PERFORM_INPUT_EMAIL";
export declare const PERFORM_INPUT_BIRTHDAY = "AGENT_CONTAINER_PERFORM_INPUT_BIRTHDAY";
export declare const PERFORM_INPUT_GENDER = "AGENT_CONTAINER_PERFORM_INPUT_GENDER";
export declare const NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN = "AGENT_CONTAINER_NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN";
export declare const PERFORM_INPUT_RELATION_TYPE = "AGENT_CONTAINER_PERFORM_INPUT_RELATION_TYPE";
export declare const PERFORM_INPUT_COMMENT = "AGENT_CONTAINER_PERFORM_INPUT_COMMENT";
export declare const PERFORM_VALIDATE = "AGENT_CONTAINER_PERFORM_VALIDATE";
export declare const CALL_POST_AGENT_CREATE = "AGENT_CONTAINER_CALL_POST_AGENT_CREATE";
export declare const CALL_POST_AGENT_CREATE_REQUEST = "AGENT_CONTAINER_CALL_POST_AGENT_CREATE_REQUEST";
export declare const CALL_POST_AGENT_CREATE_SUCCESS = "AGENT_CONTAINER_CALL_POST_AGENT_CREATE_SUCCESS";
export declare const CALL_POST_AGENT_CREATE_FAILURE = "AGENT_CONTAINER_CALL_POST_AGENT_CREATE_FAILURE";
export declare const CALL_GET_AGENT_MODIFIER_ID = "AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID";
export declare const CALL_GET_AGENT_MODIFIER_ID_REQUEST = "AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_REQUEST";
export declare const CALL_GET_AGENT_MODIFIER_ID_SUCCESS = "AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_SUCCESS";
export declare const CALL_GET_AGENT_MODIFIER_ID_FAILURE = "AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_FAILURE";
export declare const CALL_PUT_AGENT_UPDATE = "AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE";
export declare const CALL_PUT_AGENT_UPDATE_REQUEST = "AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_REQUEST";
export declare const CALL_PUT_AGENT_UPDATE_SUCCESS = "AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_SUCCESS";
export declare const CALL_PUT_AGENT_UPDATE_FAILURE = "AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_FAILURE";
export declare const PERFORM_EDIT = "AGENT_CONTAINER_PERFORM_EDIT";
export declare const PERFORM_GRANT_ACCESS_TO_AGENT = "AGENT_CONTAINER_PERFORM_GRANT_ACCESS_TO_AGENT";
export declare const PERFORM_INPUT_AGENT = "AGENT_CONTAINER_PERFORM_INPUT_AGENT";
export declare const PERFORM_CANCEL = "AGENT_CONTAINER_PERFORM_CANCEL";
export declare const NAVIGATE_TO_NOTE_LIST = "AGENT_CONTAINER_NAVIGATE_TO_NOTE_LIST";
export declare const NAVIGATE_TO_NOTE_EDIT_LIST = "NAVIGATE_TO_NOTE_EDIT_LIST";
export declare const NAVIGATE_TO_AGENT_COMMENT = "NAVIGATE_TO_AGENT_COMMENT";
export declare const PERFORM_CHANGE_TAB = "AGENT_CONTAINER_PERFORM_CHANGE_TAB";
export declare const CALL_GET_AGENT = "AGENT_CONTAINER_CALL_GET_AGENT";
export declare const CALL_GET_AGENT_REQUEST = "AGENT_CONTAINER_CALL_GET_AGENT_REQUEST";
export declare const CALL_GET_AGENT_SUCCESS = "AGENT_CONTAINER_CALL_GET_AGENT_SUCCESS";
export declare const CALL_GET_AGENT_FAILURE = "AGENT_CONTAINER_CALL_GET_AGENT_FAILURE";
export declare const NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN = "AGENT_CONTAINER_NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN";
export declare const NAVIGATE_BACK = "AGENT_CONTAINER_NAVIGATE_BACK";
export declare const NAVIGATE_TO_MEMBER_LIST = "AGENT_CONTAINER_NAVIGATE_TO_MEMBER_LIST";
export declare const PERFORM_CONTAINER_RESET = "AGENT_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_INPUT_AGENT_OCCASION_LIST = "AGENT_CONTAINER_PERFORM_INPUT_AGENT_OCCASION_LIST";
export declare const CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA = "AGENT_CONTAINER_CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA";
export declare const PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW = "AGENT_CONTAINER_PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW";
export declare const PERFORM_UPDATE_CURRENT_AGENT = "AGENT_CONTAINER_PERFORM_UPDATE_CURRENT_AGENT";
export declare const PERFORM_FLUSH_AGENT = "AGENT_CONTAINER_PERFORM_FLUSH_AGENT";
export declare const PERFORM_INPUT_AGENT_NOTE_LIST = "AGENT_CONTAINER_PERFORM_INPUT_AGENT_NOTE_LIST";
export declare const PERFORM_SET_AGENT_COMMENT_EDIT_STATUS = "AGENT_CONTAINER_PERFORM_SET_AGENT_COMMENT_EDIT_STATUS";
export declare const PERFORM_CHANGE_AGENT_COMMENT = "AGENT_CONTAINTER_PERFORM_CHANGE_AGENT_COMMENT";
/**
 * Thunk dispatched by "Agent" screen. Thunk used to set current agent panel page.
 *
 * @param {Enums.AgentPanelPage}
 *
 */
export declare type PERFORM_SET_AGENT_PANEL_CURRENT_PAGE = {
    value: Enums.AgentPanelPage;
};
export declare const performSetAgentPanelCurrentPage: (value: Enums.AgentPanelPage) => Action<PERFORM_SET_AGENT_PANEL_CURRENT_PAGE>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to remove cache for agent.
 *
 */
export declare type PERFORM_FLUSH_AGENT = {};
export declare const performFlushAgent: () => Action<PERFORM_FLUSH_AGENT>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to send Email to agent address.
 *
 */
export declare type PERFORM_SEND_EMAIL = {};
export declare const performSendEmail: () => Action<PERFORM_SEND_EMAIL>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to show agent scheduler.
 *
 */
export declare type PERFORM_SCHEDULER_OPEN = {};
export declare const performSchedulerOpen: () => Action<PERFORM_SCHEDULER_OPEN>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input FirstName field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_FIRST_NAME = {
    value: string;
};
export declare const performInputFirstName: (value: string) => Action<PERFORM_INPUT_FIRST_NAME>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input LastName field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_LAST_NAME = {
    value: string;
};
export declare const performInputLastName: (value: string) => Action<PERFORM_INPUT_LAST_NAME>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input MiddleName field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_MIDDLE_NAME = {
    value: string;
};
export declare const performInputMiddleName: (value: string) => Action<PERFORM_INPUT_MIDDLE_NAME>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user tap Job field.
 *
 */
export declare type NAVIGATE_TO_JOB_PICKER_SCREEN = {};
export declare const navigateToJobPickerScreen: () => Action<NAVIGATE_TO_JOB_PICKER_SCREEN>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Job field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_JOB_POSITION = {
    value: string;
};
export declare const performInputJobPosition: (value: string) => Action<PERFORM_INPUT_JOB_POSITION>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Job field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SEARCH_JOB_POSITION = {
    value: string;
};
export declare const performInputSearchJobPosition: (value: string) => Action<PERFORM_INPUT_SEARCH_JOB_POSITION>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input WorkPhone field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_WORK_PHONE = {
    value: string;
};
export declare const performInputWorkPhone: (value: string) => Action<PERFORM_INPUT_WORK_PHONE>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input MobilePhone field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_MOBILE_PHONE = {
    value: string;
};
export declare const performInputMobilePhone: (value: string) => Action<PERFORM_INPUT_MOBILE_PHONE>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Email field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_EMAIL = {
    value: string;
};
export declare const performInputEmail: (value: string) => Action<PERFORM_INPUT_EMAIL>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Birthday field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_BIRTHDAY = {
    value: Date | null;
};
export declare const performInputBirthday: (value: Date) => Action<PERFORM_INPUT_BIRTHDAY>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Gender field.
 *
 * @param {Models.GenderList} value .
 */
export declare type PERFORM_INPUT_GENDER = {
    value: Enums.GenderList;
};
export declare const performInputGender: (value: Enums.GenderList) => Action<PERFORM_INPUT_GENDER>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user tap RelationType field.
 *
 */
export declare type NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN = {};
export declare const navigateToRelationTypePickerScreen: () => Action<NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input RelationType field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_RELATION_TYPE = {
    value: ModelsApp.Classifier;
};
export declare const performInputRelationType: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_RELATION_TYPE>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_COMMENT = {
    value: string;
};
export declare const performInputComment: (value: string) => Action<PERFORM_INPUT_COMMENT>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export declare type PERFORM_CHANGE_AGENT_COMMENT = {
    value: string;
};
export declare const performChangeAgentComment: (value: string) => Action<PERFORM_CHANGE_AGENT_COMMENT>;
/**
 * Internal thunk used in "Agent" container. Thunk used to exit from agent screen.
 *
 */
export declare type PERFORM_CLOSE_AGENT_SCREEN = {};
export declare const performCloseAgentScreen: () => Action<PERFORM_CLOSE_AGENT_SCREEN>;
/**
 * Internal thunk used in "Agent" container. Thunk used to validate agent fields.
 *
 * @param {number[]}
 */
export declare type PERFORM_VALIDATE = {
    list: number[];
};
export declare const performValidate: (list: number[]) => Action<PERFORM_VALIDATE>;
/**
 * Thunk dispatched by "Agent" screen. Fetch post request.
 *
 */
export declare type CALL_POST_AGENT_CREATE = {};
export declare const callPostAgentCreate: () => Action<CALL_POST_AGENT_CREATE>;
/**
 * Action dispatched on network thunk chain "callPostAgentCreate" started. Thunk dispatched by "Agent" screen. Fetch post request.
 */
export declare type CALL_POST_AGENT_CREATE_REQUEST = {};
export declare const callPostAgentCreateRequest: () => Action<CALL_POST_AGENT_CREATE_REQUEST>;
export declare type CALL_POST_AGENT_CREATE_SUCCESS = {
    response: Response<Models.ResponsePostPutRequest>;
};
export declare const callPostAgentCreateSuccess: (response: Response<ModelsCrm.ResponsePostPutRequest>) => Action<CALL_POST_AGENT_CREATE_SUCCESS>;
export declare type CALL_POST_AGENT_CREATE_FAILURE = {
    error: Error;
};
export declare const callPostAgentCreateFailure: (error: Error) => Action<CALL_POST_AGENT_CREATE_FAILURE>;
/**
 * Thunk dispatched by "Agent" screen. Fetch put request.
 *
 * @param {Models.Agent}
 */
export declare type PERFORM_UPDATE_CURRENT_AGENT = {
    agent: Models.Agent;
};
export declare const performUpdateCurrentAgent: (agent: ModelsCrm.Agent) => Action<PERFORM_UPDATE_CURRENT_AGENT>;
/**
 * Thunk dispatched by "Agent" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_AGENT_UPDATE = {};
export declare const callPutAgentUpdate: () => Action<CALL_PUT_AGENT_UPDATE>;
/**
 * Action dispatched on network thunk chain "callPostAgentUpdate" started. Thunk dispatched by "Agent" screen. Fetch put request.
 */
export declare type CALL_PUT_AGENT_UPDATE_REQUEST = {};
export declare const callPutAgentUpdateRequest: () => Action<CALL_PUT_AGENT_UPDATE_REQUEST>;
export declare type CALL_PUT_AGENT_UPDATE_SUCCESS = {
    response: Response<Models.ResponsePostPutRequest>;
};
export declare const callPutAgentUpdateSuccess: (response: Response<ModelsCrm.ResponsePostPutRequest>) => Action<CALL_PUT_AGENT_UPDATE_SUCCESS>;
export declare type CALL_PUT_AGENT_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutAgentUpdateFailure: (error: Error) => Action<CALL_PUT_AGENT_UPDATE_FAILURE>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to enter create mode.
 *
 * @param {Enums.AgentAccessLevel}
 */
export declare type PERFORM_GRANT_ACCESS_TO_AGENT = {
    value: Enums.AgentAccessLevel;
};
export declare const performGrantAccessToAgent: (value: Enums.AgentAccessLevel) => Action<PERFORM_GRANT_ACCESS_TO_AGENT>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to enter editor mode.
 *
 */
export declare type PERFORM_EDIT = {};
export declare const performEdit: () => Action<PERFORM_EDIT>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to cancel changes.
 *
 *  @param {Models.Agent}
 *  @param {Models.CustomerManaged}
 */
export declare type PERFORM_CANCEL = {
    agent: ModelsCrm.Agent;
    customerManaged: ModelsCrm.CustomerManaged;
};
export declare const performCancel: (agent: ModelsCrm.Agent, customerManaged: ModelsCrm.CustomerManaged) => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to change status need update agent note list.
 *
 * @param {boolean}
 */
export declare type CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA = {
    value: boolean;
};
export declare const changeStatusNeedUpdateAgentPersonData: (value: boolean) => Action<CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to input agent note list.
 *
 * @param {Models.NoteList}.
 *
 */
export declare type PERFORM_INPUT_AGENT_NOTE_LIST = {
    noteList: Models.NoteList;
};
export declare const performInputAgentNoteList: (noteList: ModelsCrm.NoteList) => Action<PERFORM_INPUT_AGENT_NOTE_LIST>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to input agent occasion list.
 *
 * @param {Models.OccasionList}.
 *
 */
export declare type PERFORM_INPUT_AGENT_OCCASION_LIST = {
    occasionList: Models.OccasionList;
};
export declare const performInputAgentOccasionList: (occasionList: ModelsCrm.OccasionList) => Action<PERFORM_INPUT_AGENT_OCCASION_LIST>;
/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_NOTE_LIST = {};
export declare const navigateToNoteList: () => Action<NAVIGATE_TO_NOTE_LIST>;
/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate edit comment.
 * @param {boolean}
 *
 */
export declare type PERFORM_SET_AGENT_COMMENT_EDIT_STATUS = {
    status: boolean;
};
export declare const performSetAgentCommentEditStatus: (status: boolean) => Action<PERFORM_SET_AGENT_COMMENT_EDIT_STATUS>;
/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate member list screen.
 *
 */
export declare type NAVIGATE_TO_MEMBER_LIST = {};
export declare const navigateToMemberList: () => Action<NAVIGATE_TO_MEMBER_LIST>;
/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate Comment view.
 *
 */
export declare type NAVIGATE_TO_AGENT_COMMENT = {};
export declare const navigateToAgentComment: () => Action<NAVIGATE_TO_AGENT_COMMENT>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to input agent data.
 *
 * @param {Models.Agent}}
 * @param {Models.CustomerManaged}
 * @param {Enums.AgentMode}
 * @param {Enums.AgentContextMode}
 */
export declare type PERFORM_INPUT_AGENT = {
    agent: Models.Agent;
    currentCustomerManaged: Models.CustomerManaged;
    agentMode: Enums.AgentMode;
    agentContextMode: Enums.AgentContextMode;
};
export declare const performInputAgent: (agent: ModelsCrm.Agent, currentCustomerManaged: ModelsCrm.CustomerManaged, agentMode: Enums.AgentMode, agentContextMode: Enums.AgentContextMode) => Action<PERFORM_INPUT_AGENT>;
/**
 * Thunk dispatched by "Agent" screen to change display error model agent.
 *
 * @param {boolean}
 */
export declare type PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW = {
    value: boolean;
};
export declare const performChangeDisplayAgentErrorModalWindow: (value: boolean) => Action<PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW>;
/**
 * Thunk dispatched by "Agent" screen. Fetch current agent.
 *
 */
export declare type CALL_GET_AGENT = {};
export declare const callGetAgent: () => Action<CALL_GET_AGENT>;
/**
 * Action dispatched on network thunk chain "callGetAgent" started. Thunk dispatched by "Agent" screen. Fetch current agent.
 */
export declare type CALL_GET_AGENT_REQUEST = {};
export declare const callGetAgentRequest: () => Action<CALL_GET_AGENT_REQUEST>;
export declare type CALL_GET_AGENT_SUCCESS = {
    response: Response<Models.Agent>;
};
export declare const callGetAgentSuccess: (response: Response<ModelsCrm.Agent>) => Action<CALL_GET_AGENT_SUCCESS>;
export declare type CALL_GET_AGENT_FAILURE = {
    error: Error;
};
export declare const callGetAgentFailure: (error: Error) => Action<CALL_GET_AGENT_FAILURE>;
/**
 * Thunk dispatched by "Agent" screen. Thunk used to show agent customers screen.
 *
 */
export declare type NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN = {};
export declare const navigateToAgentCustomerPositionListScreen: () => Action<NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN>;
/**
 * Thunk dispatched by "Agent" screen.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
