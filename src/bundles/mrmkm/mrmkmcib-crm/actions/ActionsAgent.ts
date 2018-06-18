/**
 * Actions of Agent container.
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


export const PERFORM_SEND_EMAIL = 'AGENT_CONTAINER_PERFORM_SEND_EMAIL'

export const PERFORM_SCHEDULER_OPEN = 'AGENT_CONTAINER_PERFORM_SCHEDULER_OPEN'

export const PERFORM_INPUT_FIRST_NAME = 'AGENT_CONTAINER_PERFORM_INPUT_FIRST_NAME'

export const PERFORM_INPUT_LAST_NAME = 'AGENT_CONTAINER_PERFORM_INPUT_LAST_NAME'

export const PERFORM_INPUT_MIDDLE_NAME = 'AGENT_CONTAINER_PERFORM_INPUT_MIDDLE_NAME'

export const NAVIGATE_TO_JOB_PICKER_SCREEN = 'AGENT_CONTAINER_NAVIGATE_TO_JOB_PICKER_SCREEN'

export const PERFORM_INPUT_JOB_POSITION = 'AGENT_CONTAINER_PERFORM_INPUT_JOB_POSITION'

export const PERFORM_INPUT_SEARCH_JOB_POSITION = 'AGENT_CONTAINER_PERFORM_INPUT_SEARCH_JOB_POSITION'

export const PERFORM_CLOSE_AGENT_SCREEN = 'AGENT_CONTAINER_PERFORM_CLOSE_AGENT_SCREEN'

export const PERFORM_SET_AGENT_PANEL_CURRENT_PAGE = 'AGENT_CONTAINER_PERFORM_SET_AGENT_PANEL_CURRENT_PAGE'

export const PERFORM_INPUT_WORK_PHONE = 'AGENT_CONTAINER_PERFORM_INPUT_WORK_PHONE'

export const PERFORM_INPUT_MOBILE_PHONE = 'AGENT_CONTAINER_PERFORM_INPUT_MOBILE_PHONE'

export const PERFORM_INPUT_EMAIL = 'AGENT_CONTAINER_PERFORM_INPUT_EMAIL'

export const PERFORM_INPUT_BIRTHDAY = 'AGENT_CONTAINER_PERFORM_INPUT_BIRTHDAY'

export const PERFORM_INPUT_GENDER = 'AGENT_CONTAINER_PERFORM_INPUT_GENDER'

export const NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN = 'AGENT_CONTAINER_NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN'

export const PERFORM_INPUT_RELATION_TYPE = 'AGENT_CONTAINER_PERFORM_INPUT_RELATION_TYPE'

export const PERFORM_INPUT_COMMENT = 'AGENT_CONTAINER_PERFORM_INPUT_COMMENT'


export const PERFORM_VALIDATE = 'AGENT_CONTAINER_PERFORM_VALIDATE'

export const CALL_POST_AGENT_CREATE = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE'
export const CALL_POST_AGENT_CREATE_REQUEST = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE_REQUEST'
export const CALL_POST_AGENT_CREATE_SUCCESS = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE_SUCCESS'
export const CALL_POST_AGENT_CREATE_FAILURE = 'AGENT_CONTAINER_CALL_POST_AGENT_CREATE_FAILURE'

export const CALL_GET_AGENT_MODIFIER_ID = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID'
export const CALL_GET_AGENT_MODIFIER_ID_REQUEST = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_REQUEST'
export const CALL_GET_AGENT_MODIFIER_ID_SUCCESS = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_SUCCESS'
export const CALL_GET_AGENT_MODIFIER_ID_FAILURE = 'AGENT_CONTAINER_CALL_GET_AGENT_MODIFIER_ID_FAILURE'

export const CALL_PUT_AGENT_UPDATE = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE'
export const CALL_PUT_AGENT_UPDATE_REQUEST = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_REQUEST'
export const CALL_PUT_AGENT_UPDATE_SUCCESS = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_SUCCESS'
export const CALL_PUT_AGENT_UPDATE_FAILURE = 'AGENT_CONTAINER_CALL_PUT_AGENT_UPDATE_FAILURE'

export const PERFORM_EDIT = 'AGENT_CONTAINER_PERFORM_EDIT'

export const PERFORM_GRANT_ACCESS_TO_AGENT = 'AGENT_CONTAINER_PERFORM_GRANT_ACCESS_TO_AGENT'

export const PERFORM_INPUT_AGENT = 'AGENT_CONTAINER_PERFORM_INPUT_AGENT'

export const PERFORM_CANCEL = 'AGENT_CONTAINER_PERFORM_CANCEL'

export const NAVIGATE_TO_NOTE_LIST = 'AGENT_CONTAINER_NAVIGATE_TO_NOTE_LIST'

export const NAVIGATE_TO_NOTE_EDIT_LIST = 'NAVIGATE_TO_NOTE_EDIT_LIST'

export const NAVIGATE_TO_AGENT_COMMENT = 'NAVIGATE_TO_AGENT_COMMENT'

export const PERFORM_CHANGE_TAB = 'AGENT_CONTAINER_PERFORM_CHANGE_TAB'


export const CALL_GET_AGENT = 'AGENT_CONTAINER_CALL_GET_AGENT'
export const CALL_GET_AGENT_REQUEST = 'AGENT_CONTAINER_CALL_GET_AGENT_REQUEST'
export const CALL_GET_AGENT_SUCCESS = 'AGENT_CONTAINER_CALL_GET_AGENT_SUCCESS'
export const CALL_GET_AGENT_FAILURE = 'AGENT_CONTAINER_CALL_GET_AGENT_FAILURE'

export const NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN = 'AGENT_CONTAINER_NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN'

export const NAVIGATE_BACK = 'AGENT_CONTAINER_NAVIGATE_BACK'


export const NAVIGATE_TO_MEMBER_LIST = 'AGENT_CONTAINER_NAVIGATE_TO_MEMBER_LIST'

export const PERFORM_CONTAINER_RESET = 'AGENT_CONTAINER_PERFORM_CONTAINER_RESET'


export const PERFORM_INPUT_AGENT_OCCASION_LIST = 'AGENT_CONTAINER_PERFORM_INPUT_AGENT_OCCASION_LIST'

export const CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA = 'AGENT_CONTAINER_CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA'
export const PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW = 'AGENT_CONTAINER_PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW'

export const PERFORM_UPDATE_CURRENT_AGENT =  'AGENT_CONTAINER_PERFORM_UPDATE_CURRENT_AGENT'

export const PERFORM_FLUSH_AGENT =  'AGENT_CONTAINER_PERFORM_FLUSH_AGENT'

export const PERFORM_INPUT_AGENT_NOTE_LIST = 'AGENT_CONTAINER_PERFORM_INPUT_AGENT_NOTE_LIST'

export const PERFORM_SET_AGENT_COMMENT_EDIT_STATUS = 'AGENT_CONTAINER_PERFORM_SET_AGENT_COMMENT_EDIT_STATUS'

export const PERFORM_CHANGE_AGENT_COMMENT = 'AGENT_CONTAINTER_PERFORM_CHANGE_AGENT_COMMENT'
/**
 * Thunk dispatched by "Agent" screen. Thunk used to set current agent panel page.
 *
 * @param {Enums.AgentPanelPage}
 *
 */
export type PERFORM_SET_AGENT_PANEL_CURRENT_PAGE = {value: Enums.AgentPanelPage}
export const performSetAgentPanelCurrentPage = (value: Enums.AgentPanelPage): Action<PERFORM_SET_AGENT_PANEL_CURRENT_PAGE> => ({
    type: PERFORM_SET_AGENT_PANEL_CURRENT_PAGE,
    payload: {value}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to remove cache for agent.
 *
 */
export type PERFORM_FLUSH_AGENT = {}
export const performFlushAgent = (): Action<PERFORM_FLUSH_AGENT> => ({
    type: PERFORM_FLUSH_AGENT,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to send Email to agent address.
 *
 */
export type PERFORM_SEND_EMAIL = {}
export const performSendEmail = (): Action<PERFORM_SEND_EMAIL> => ({
    type: PERFORM_SEND_EMAIL,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to show agent scheduler.
 *
 */
export type PERFORM_SCHEDULER_OPEN = {}
export const performSchedulerOpen = (): Action<PERFORM_SCHEDULER_OPEN> => ({
    type: PERFORM_SCHEDULER_OPEN,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input FirstName field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_FIRST_NAME = { value: string }
export const performInputFirstName = (value: string): Action<PERFORM_INPUT_FIRST_NAME> => ({
    type: PERFORM_INPUT_FIRST_NAME,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input LastName field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_LAST_NAME = { value: string }
export const performInputLastName = (value: string): Action<PERFORM_INPUT_LAST_NAME> => ({
    type: PERFORM_INPUT_LAST_NAME,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input MiddleName field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_MIDDLE_NAME = { value: string }
export const performInputMiddleName = (value: string): Action<PERFORM_INPUT_MIDDLE_NAME> => ({
    type: PERFORM_INPUT_MIDDLE_NAME,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user tap Job field.
 *
 */
export type NAVIGATE_TO_JOB_PICKER_SCREEN = {}
export const navigateToJobPickerScreen = (): Action<NAVIGATE_TO_JOB_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_JOB_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Job field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_JOB_POSITION = { value: string}
export const performInputJobPosition = (value: string): Action<PERFORM_INPUT_JOB_POSITION> => ({
    type: PERFORM_INPUT_JOB_POSITION,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Job field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_SEARCH_JOB_POSITION = { value: string}
export const performInputSearchJobPosition = (value: string): Action<PERFORM_INPUT_SEARCH_JOB_POSITION> => ({
    type: PERFORM_INPUT_SEARCH_JOB_POSITION,
    payload: {
        value: value,
    }
})
/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input WorkPhone field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_WORK_PHONE = { value: string, }
export const performInputWorkPhone = (value: string,): Action<PERFORM_INPUT_WORK_PHONE> => ({
    type: PERFORM_INPUT_WORK_PHONE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input MobilePhone field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_MOBILE_PHONE = { value: string, }
export const performInputMobilePhone = (value: string,): Action<PERFORM_INPUT_MOBILE_PHONE> => ({
    type: PERFORM_INPUT_MOBILE_PHONE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Email field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_EMAIL = { value: string }
export const performInputEmail = (value: string): Action<PERFORM_INPUT_EMAIL> => ({
    type: PERFORM_INPUT_EMAIL,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Birthday field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_BIRTHDAY = { value: Date | null }
export const performInputBirthday = (value: Date | null): Action<PERFORM_INPUT_BIRTHDAY> => ({
    type: PERFORM_INPUT_BIRTHDAY,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Gender field.
 *
 * @param {Models.GenderList} value .
 */
export type PERFORM_INPUT_GENDER = { value: Enums.GenderList }
export const performInputGender = (value: Enums.GenderList): Action<PERFORM_INPUT_GENDER> => ({
    type: PERFORM_INPUT_GENDER,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user tap RelationType field.
 *
 */
export type NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN = {}
export const navigateToRelationTypePickerScreen = (): Action<NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input RelationType field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_RELATION_TYPE = { value: ModelsApp.Classifier }
export const performInputRelationType = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_RELATION_TYPE> => ({
    type: PERFORM_INPUT_RELATION_TYPE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_COMMENT = { value: string }
export const performInputComment = (value: string): Action<PERFORM_INPUT_COMMENT> => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export type PERFORM_CHANGE_AGENT_COMMENT = { value: string }
export const performChangeAgentComment = (value: string): Action<PERFORM_CHANGE_AGENT_COMMENT> => ({
    type: PERFORM_CHANGE_AGENT_COMMENT,
    payload: {
        value: value,
    }
})



/**
 * Internal thunk used in "Agent" container. Thunk used to exit from agent screen.
 *
 */
export type PERFORM_CLOSE_AGENT_SCREEN = {}
export const performCloseAgentScreen = (): Action<PERFORM_CLOSE_AGENT_SCREEN> => ({
    type: PERFORM_CLOSE_AGENT_SCREEN,
    payload: {}
})


/**
 * Internal thunk used in "Agent" container. Thunk used to validate agent fields.
 *
 * @param {number[]}
 */
export type PERFORM_VALIDATE = {list: number[]}
export const performValidate = (list: number[]): Action<PERFORM_VALIDATE> => ({
    type: PERFORM_VALIDATE,
    payload: {list}
})

/**
 * Thunk dispatched by "Agent" screen. Fetch post request.
 *
 */
export type CALL_POST_AGENT_CREATE = {}
export const callPostAgentCreate = (): Action<CALL_POST_AGENT_CREATE> => ({
    type: CALL_POST_AGENT_CREATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPostAgentCreate" started. Thunk dispatched by "Agent" screen. Fetch post request.
 */
export type CALL_POST_AGENT_CREATE_REQUEST = {}
export const callPostAgentCreateRequest = (): Action<CALL_POST_AGENT_CREATE_REQUEST> => ({
    type: CALL_POST_AGENT_CREATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPostAgentCreate". Thunk dispatched by "Agent" screen. Fetch post request.
 * @param {Response<Models.ResponsePostPutRequest>}
 *
 */
export type CALL_POST_AGENT_CREATE_SUCCESS = {response: Response<Models.ResponsePostPutRequest>}
export const callPostAgentCreateSuccess = (response: Response<Models.ResponsePostPutRequest>):
    Action<CALL_POST_AGENT_CREATE_SUCCESS> => ({
    type: CALL_POST_AGENT_CREATE_SUCCESS,
    payload: {
        response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPostAgentCreate". Thunk dispatched by "Agent" screen. Fetch post request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_POST_AGENT_CREATE_FAILURE = { error: Error }
export const callPostAgentCreateFailure = (error: Error): Action<CALL_POST_AGENT_CREATE_FAILURE> => ({
    type: CALL_POST_AGENT_CREATE_FAILURE,
    payload: {
        error: error
    }
})


/**
 * Thunk dispatched by "Agent" screen. Fetch put request.
 *
 * @param {Models.Agent}
 */
export type PERFORM_UPDATE_CURRENT_AGENT = {agent: Models.Agent}
export const performUpdateCurrentAgent = (agent: Models.Agent): Action<PERFORM_UPDATE_CURRENT_AGENT> => ({
    type: PERFORM_UPDATE_CURRENT_AGENT,
    payload: {agent}
})


/**
 * Thunk dispatched by "Agent" screen. Fetch put request.
 *
 */
export type CALL_PUT_AGENT_UPDATE = {}
export const callPutAgentUpdate = (): Action<CALL_PUT_AGENT_UPDATE> => ({
    type: CALL_PUT_AGENT_UPDATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPostAgentUpdate" started. Thunk dispatched by "Agent" screen. Fetch put request.
 */
export type CALL_PUT_AGENT_UPDATE_REQUEST = {}
export const callPutAgentUpdateRequest = (): Action<CALL_PUT_AGENT_UPDATE_REQUEST> => ({
    type: CALL_PUT_AGENT_UPDATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPostAgentUpdate". Thunk dispatched by "Agent" screen. Fetch put request.
 * @param {Response<Models.ResponsePostPutRequest>}
 * 
 */
export type CALL_PUT_AGENT_UPDATE_SUCCESS = {response: Response<Models.ResponsePostPutRequest>}
export const callPutAgentUpdateSuccess = (response: Response<Models.ResponsePostPutRequest>): Action<CALL_PUT_AGENT_UPDATE_SUCCESS> => ({
    type: CALL_PUT_AGENT_UPDATE_SUCCESS,
    payload: {response}
})

/*
 * Action dispatched on fetch failure in thunk "callPostAgentUpdate". Thunk dispatched by "Agent" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_AGENT_UPDATE_FAILURE = { error: Error }
export const callPutAgentUpdateFailure = (error: Error): Action<CALL_PUT_AGENT_UPDATE_FAILURE> => ({
    type: CALL_PUT_AGENT_UPDATE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to enter create mode.
 *
 * @param {Enums.AgentAccessLevel}
 */
export type PERFORM_GRANT_ACCESS_TO_AGENT = {value: Enums.AgentAccessLevel}
export const performGrantAccessToAgent= (value: Enums.AgentAccessLevel): Action<PERFORM_GRANT_ACCESS_TO_AGENT> => ({
    type: PERFORM_GRANT_ACCESS_TO_AGENT,
    payload: {value}
})



/**
 * Thunk dispatched by "Agent" screen. Thunk used to enter editor mode.
 *
 */
export type PERFORM_EDIT = {}
export const performEdit = (): Action<PERFORM_EDIT> => ({
    type: PERFORM_EDIT,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to cancel changes.
 *
 *  @param {Models.Agent}
 *  @param {Models.CustomerManaged}
 */
export type PERFORM_CANCEL = {agent: ModelsCrm.Agent, customerManaged: ModelsCrm.CustomerManaged}
export const performCancel = (agent: ModelsCrm.Agent, customerManaged: ModelsCrm.CustomerManaged): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {agent, customerManaged}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to change status need update agent note list.
 *
 * @param {boolean}
 */
export type CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA = {value: boolean}
export const changeStatusNeedUpdateAgentPersonData = (value: boolean): Action<CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA> => ({
    type: CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA,
    payload: {value}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk used to input agent note list.
 *
 * @param {Models.NoteList}.
 *
 */
export type PERFORM_INPUT_AGENT_NOTE_LIST = {noteList: Models.NoteList}
export const performInputAgentNoteList = (noteList: Models.NoteList): Action<PERFORM_INPUT_AGENT_NOTE_LIST> => ({
    type: PERFORM_INPUT_AGENT_NOTE_LIST,
    payload: {noteList}
})
/**
 * Thunk dispatched by "Agent" screen. Thunk used to input agent occasion list.
 *
 * @param {Models.OccasionList}.
 *
 */
export type PERFORM_INPUT_AGENT_OCCASION_LIST = {occasionList: Models.OccasionList}
export const performInputAgentOccasionList = (occasionList: Models.OccasionList): Action<PERFORM_INPUT_AGENT_OCCASION_LIST> => ({
    type: PERFORM_INPUT_AGENT_OCCASION_LIST,
    payload: {occasionList}
})
/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_NOTE_LIST = {}
export const navigateToNoteList = (): Action<NAVIGATE_TO_NOTE_LIST> => ({
    type: NAVIGATE_TO_NOTE_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate edit comment.
 * @param {boolean}
 *
 */
export type PERFORM_SET_AGENT_COMMENT_EDIT_STATUS = {status: boolean}
export const performSetAgentCommentEditStatus = (status: boolean): Action<PERFORM_SET_AGENT_COMMENT_EDIT_STATUS> => ({
    type: PERFORM_SET_AGENT_COMMENT_EDIT_STATUS,
    payload: { status}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate member list screen.
 *
 */
export type NAVIGATE_TO_MEMBER_LIST = {}
export const navigateToMemberList = (): Action<NAVIGATE_TO_MEMBER_LIST> => ({
    type: NAVIGATE_TO_MEMBER_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk chain used to navigate Comment view.
 *
 */
export type NAVIGATE_TO_AGENT_COMMENT = {}
export const navigateToAgentComment = (): Action<NAVIGATE_TO_AGENT_COMMENT> => ({
    type: NAVIGATE_TO_AGENT_COMMENT,
    payload: {
    }
})


/**
 * Thunk dispatched by "Agent" screen. Thunk used to input agent data.
 *
 * @param {Models.Agent}}
 * @param {Models.CustomerManaged}
 * @param {Enums.AgentMode}
 * @param {Enums.AgentContextMode}
 */
export type PERFORM_INPUT_AGENT = {
    agent: Models.Agent,
    currentCustomerManaged: Models.CustomerManaged,
    agentMode: Enums.AgentMode,
    agentContextMode: Enums.AgentContextMode}
export const performInputAgent = (agent: Models.Agent,
                                  currentCustomerManaged: Models.CustomerManaged,
                                  agentMode: Enums.AgentMode,
                                  agentContextMode: Enums.AgentContextMode): Action<PERFORM_INPUT_AGENT> => ({
    type: PERFORM_INPUT_AGENT,
    payload: {
        agent,
        currentCustomerManaged,
        agentMode,
        agentContextMode
    }
})

/**
 * Thunk dispatched by "Agent" screen to change display error model agent.
 *
 * @param {boolean}
 */
export type PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW = {value: boolean}
export const performChangeDisplayAgentErrorModalWindow = (value: boolean): Action<PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW> => ({
    type: PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW,
    payload: {value}
})

/**
 * Thunk dispatched by "Agent" screen. Fetch current agent.
 *
 */
export type CALL_GET_AGENT = {}
export const callGetAgent = (): Action<CALL_GET_AGENT> => ({
    type: CALL_GET_AGENT,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetAgent" started. Thunk dispatched by "Agent" screen. Fetch current agent.
 */
export type CALL_GET_AGENT_REQUEST = {}
export const callGetAgentRequest = (): Action<CALL_GET_AGENT_REQUEST> => ({
    type: CALL_GET_AGENT_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetAgent". Thunk dispatched by "Agent" screen. Fetch current agent.
 *
 * @param {Response<Models.Agent>} response Data received by fetch.
 */
export type CALL_GET_AGENT_SUCCESS = { response: Response<Models.Agent> }
export const callGetAgentSuccess = (response: Response<Models.Agent>): Action<CALL_GET_AGENT_SUCCESS> => ({
    type: CALL_GET_AGENT_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetAgent". Thunk dispatched by "Agent" screen. Fetch current agent.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_AGENT_FAILURE = { error: Error }
export const callGetAgentFailure = (error: Error): Action<CALL_GET_AGENT_FAILURE> => ({
    type: CALL_GET_AGENT_FAILURE,
    payload: {
        error: error
    }
})



/**
 * Thunk dispatched by "Agent" screen. Thunk used to show agent customers screen.
 *
 */
export type NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN = {}
export const navigateToAgentCustomerPositionListScreen = (): Action<NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "Agent" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})
