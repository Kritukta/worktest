/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsAgent from '../actions/ActionsAgent'
import {defaultValues} from "../models/Models"
import * as ModelsAgent from "../models/ModelsAgent"
import Action from "../models/Action"

import * as util from '../common/Util'

import {Enums} from '../Enums'

const reducerAgent = handleActions<ModelsAgent.IAgentState>({

    // Thunk dispatched by "Agent" screen. Thunk used to send Email to agent address.
    [actionsAgent.PERFORM_SEND_EMAIL]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_SEND_EMAIL>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk used to show agent scheduler.
    [actionsAgent.PERFORM_SCHEDULER_OPEN]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_SCHEDULER_OPEN>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk used to set current agent panel page.
    [actionsAgent.PERFORM_SET_AGENT_PANEL_CURRENT_PAGE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_SET_AGENT_PANEL_CURRENT_PAGE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentPanelCurrentPage: action.payload.value,
        }
    },


    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input FirstName field.
    [actionsAgent.PERFORM_INPUT_FIRST_NAME]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_FIRST_NAME>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputFirstName: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input LastName field.
    [actionsAgent.PERFORM_INPUT_LAST_NAME]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_LAST_NAME>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputLastName: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input MiddleName field.
    [actionsAgent.PERFORM_INPUT_MIDDLE_NAME]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_MIDDLE_NAME>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputMiddleName: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user tap Job field.
    [actionsAgent.NAVIGATE_TO_JOB_PICKER_SCREEN]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_TO_JOB_PICKER_SCREEN>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user select job position.
    [actionsAgent.PERFORM_INPUT_JOB_POSITION]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_JOB_POSITION>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputJobPosition: action.payload.value,

        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input search field to find the position.
    [actionsAgent.PERFORM_INPUT_SEARCH_JOB_POSITION]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_SEARCH_JOB_POSITION>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputSearchJobPosition: action.payload.value,

        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input WorkPhone field.
    [actionsAgent.PERFORM_INPUT_WORK_PHONE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_WORK_PHONE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputWorkPhone: util.agentWorkPhoneFormat(action.payload.value),
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input MobilePhone field.
    [actionsAgent.PERFORM_INPUT_MOBILE_PHONE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_MOBILE_PHONE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputMobilePhone: util.agentMobilePhoneFormat(action.payload.value),
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input Email field.
    [actionsAgent.PERFORM_INPUT_EMAIL]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_EMAIL>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputEmail: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input Birthday field.
    [actionsAgent.PERFORM_INPUT_BIRTHDAY]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_BIRTHDAY>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputBirthday: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input Gender field.
    [actionsAgent.PERFORM_INPUT_GENDER]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_GENDER>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputGender: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user tap RelationType field.
    [actionsAgent.NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_TO_RELATION_TYPE_PICKER_SCREEN>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk dispatched on tap back button.
    [actionsAgent.PERFORM_CLOSE_AGENT_SCREEN]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_CLOSE_AGENT_SCREEN>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input RelationType field.
    [actionsAgent.PERFORM_INPUT_RELATION_TYPE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_RELATION_TYPE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputRelationType: action.payload.value,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched on user input Comment field.
    [actionsAgent.PERFORM_INPUT_COMMENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_COMMENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputComment: action.payload.value,
        }
    },

    // Internal thunk used in "Agent" container. Thunk used to confirm changes in agent.
    [actionsAgent.PERFORM_VALIDATE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_VALIDATE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentValidationErrorList: action.payload.list
        }
    },
    // Thunk dispatched by "Agent" screen. Fetch post request.
    [actionsAgent.PERFORM_FLUSH_AGENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_FLUSH_AGENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Fetch post request.
    [actionsAgent.PERFORM_UPDATE_CURRENT_AGENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_UPDATE_CURRENT_AGENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
            currentAgent: action.payload.agent,
        }
    },

    // Thunk dispatched by "Agent" screen. Fetch post request.
    [actionsAgent.CALL_POST_AGENT_CREATE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_POST_AGENT_CREATE>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPostAgentCreate" started. Thunk dispatched by "Agent" screen. Fetch post request.
    [actionsAgent.CALL_POST_AGENT_CREATE_REQUEST]: (state: ModelsAgent.IAgentState, action: Action<void>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentCreateFetching: true,
            isVisibleAgentErrorModalWindow: false,
            agentCreateError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPostAgentCreate". Thunk dispatched by "Agent" screen. Fetch post request.
    [actionsAgent.CALL_POST_AGENT_CREATE_SUCCESS]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_POST_AGENT_CREATE_SUCCESS>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentCreateFetching: false,
            agentCreateError: null,
            currentAgentCachedDate: action.payload.response.cachedDate,
            currentAgent:{...state.currentAgent, ...action.payload.response.data},
        }
    },
    // Action dispatched on fetch failure in thunk "callPostAgentCreate". Thunk dispatched by "Agent" screen. Fetch post request.
    [actionsAgent.CALL_POST_AGENT_CREATE_FAILURE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_POST_AGENT_CREATE_FAILURE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentCreateFetching: false,
            isVisibleAgentErrorModalWindow: true,
            agentCreateError: action.payload.error,

        }
    },

    // Thunk dispatched by "Agent" screen. Navigate to agent member list.
    [actionsAgent.NAVIGATE_TO_MEMBER_LIST]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_TO_MEMBER_LIST>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Agent" screen to change display error modal agent.
    [actionsAgent.PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_CHANGE_DISPLAY_AGENT_ERROR_MODAL_WINDOW>): ModelsAgent.IAgentState => {
        return {
            ...state,
            isVisibleAgentErrorModalWindow: action.payload.value,
        }
    },
    // Thunk dispatched by "Agent" screen. Fetch put request.
    [actionsAgent.CALL_PUT_AGENT_UPDATE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_PUT_AGENT_UPDATE>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPostAgentUpdate" started. Thunk dispatched by "Agent" screen. Fetch put request.
    [actionsAgent.CALL_PUT_AGENT_UPDATE_REQUEST]: (state: ModelsAgent.IAgentState, action: Action<void>): ModelsAgent.IAgentState => {
        return {
            ...state,
            isVisibleAgentErrorModalWindow: false,
            agentUpdateFetching: true,
            agentUpdateError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPostAgentUpdate". Thunk dispatched by "Agent" screen. Fetch put request.
    [actionsAgent.CALL_PUT_AGENT_UPDATE_SUCCESS]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_PUT_AGENT_UPDATE_SUCCESS>): ModelsAgent.IAgentState => {
        return {
            ...state,
            currentAgentCachedDate:  action.payload.response.cachedDate,
            currentAgent: {...state.currentAgent, ...action.payload.response.data},
            agentMode: Enums.AgentMode.Watch,
            hasChangedAgentOccasionList: false,
            hasChangedAgentNoteList: false,
            hasChangedAgentPersonData: false,
            agentUpdateFetching: false,
            agentUpdateError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPostAgentUpdate". Thunk dispatched by "Agent" screen. Fetch put request.
    [actionsAgent.CALL_PUT_AGENT_UPDATE_FAILURE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_PUT_AGENT_UPDATE_FAILURE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentUpdateFetching: false,
            isVisibleAgentErrorModalWindow: true,
            agentUpdateError: action.payload.error,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk used to enter create mode.
    [actionsAgent.PERFORM_INPUT_AGENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_AGENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
            currentAgent: action.payload.agent,
            agentMode: action.payload.agentMode,
            agentContextMode: action.payload.agentContextMode,
            currentCustomerManaged: action.payload.currentCustomerManaged,
            inputFirstName: action.payload.agent.firstName   || "",
            inputMiddleName: action.payload.agent.middleName || "",
            inputLastName: action.payload.agent.lastName     || "",
            inputJobPosition: util.getAgentCustomerPosition(action.payload.currentCustomerManaged, action.payload.agent),
            inputMobilePhone: util.getMobilePhone(action.payload.agent.phoneList),
            inputWorkPhone: util.getWorkPhone(action.payload.agent.phoneList),
            inputEmail: action.payload.agent.email || "",
            inputBirthday: action.payload.agent.birthday,
            inputGender: action.payload.agent.gender,
            inputComment: action.payload.agent.comment,
            inputNoteList: action.payload.agent.noteList,
            inputMemberList: action.payload.agent.memberList,
            inputOccasionList: action.payload.agent.occasionList,
            inputRelationType: util.getAgentCustomerRelations(action.payload.agent, action.payload.currentCustomerManaged.id),
            hasChangedAgentOccasionList: false,
            hasChangedAgentNoteList: false,
            hasChangedAgentPersonData: false,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk used to change status need update agent person data.
    [actionsAgent.CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CHANGE_STATUS_NEED_UPDATE_AGENT_PERSON_DATA>): ModelsAgent.IAgentState => {
        return {
            ...state,
            hasChangedAgentPersonData: action.payload.value,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk used to enter editor mode.
    [actionsAgent.PERFORM_EDIT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_EDIT>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentMode: Enums.AgentMode.Edit,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk used to input agent note list.
    [actionsAgent.PERFORM_INPUT_AGENT_NOTE_LIST]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_AGENT_NOTE_LIST>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputNoteList: action.payload.noteList,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk used to input agent occasion list.
    [actionsAgent.PERFORM_INPUT_AGENT_OCCASION_LIST]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_INPUT_AGENT_OCCASION_LIST>): ModelsAgent.IAgentState => {
        return {
            ...state,
            inputOccasionList: action.payload.occasionList,
        }
    },
    // Thunk dispatched by "Agent" screen. Thunk used to cancel changes.
    [actionsAgent.PERFORM_CANCEL]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_CANCEL>): ModelsAgent.IAgentState => {
        return {
            ...state,
            agentMode: Enums.AgentMode.Watch,
            hasChangedAgentPersonData: false,
            hasChangedAgentNoteList: false,
            hasChangedAgentOccasionList: false,
            inputFirstName: action.payload.agent.firstName   || "",
            inputMiddleName: action.payload.agent.middleName || "",
            inputLastName: action.payload.agent.lastName     || "",
            inputJobPosition: util.getAgentCustomerPosition(action.payload.customerManaged, action.payload.agent),
            inputMobilePhone: util.getMobilePhone(action.payload.agent.phoneList),
            inputWorkPhone: util.getWorkPhone(action.payload.agent.phoneList),
            inputEmail: action.payload.agent.email || "",
            inputBirthday: action.payload.agent.birthday,
            inputGender: action.payload.agent.gender,
            inputComment: action.payload.agent.comment,
            inputOccasionList: action.payload.agent.occasionList,
            inputNoteList: action.payload.agent.noteList,
            inputMemberList: action.payload.agent.memberList,
            inputRelationType: util.getAgentCustomerRelations(action.payload.agent, action.payload.customerManaged.id)
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk chain used to navigate.
    [actionsAgent.NAVIGATE_TO_NOTE_LIST]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_TO_NOTE_LIST>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk chain used to navigate Comment view.
    [actionsAgent.NAVIGATE_TO_AGENT_COMMENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_TO_AGENT_COMMENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk chain used to navigate Comment view.
    [actionsAgent.PERFORM_SET_AGENT_COMMENT_EDIT_STATUS]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_SET_AGENT_COMMENT_EDIT_STATUS>): ModelsAgent.IAgentState => {
        return {
            ...state,
            isCommentEdit: action.payload.status,
        }
    },
    // Thunk dispatched by "Agent" screen. Fetch current agent.
    [actionsAgent.CALL_GET_AGENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_GET_AGENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },
    // Action dispatched on grant access to agent card
    [actionsAgent.PERFORM_GRANT_ACCESS_TO_AGENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_GRANT_ACCESS_TO_AGENT>): ModelsAgent.IAgentState => {
        return {
            ...state,
            currentAgent: {...state.currentAgent, accessLevel: action.payload.value},
        }
    },
    // Action dispatched on network thunk chain "callGetAgent" started. Thunk dispatched by "Agent" screen. Fetch current agent.
    [actionsAgent.CALL_GET_AGENT_REQUEST]: (state: ModelsAgent.IAgentState, action: Action<void>): ModelsAgent.IAgentState => {
        return {
            ...state,
            currentAgentFetching: true,
            isVisibleAgentErrorModalWindow: false,
            currentAgentError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgent". Thunk dispatched by "Agent" screen. Fetch current agent.
    [actionsAgent.CALL_GET_AGENT_SUCCESS]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_GET_AGENT_SUCCESS>): ModelsAgent.IAgentState => {
        return {
            ...state,
            currentAgent: action.payload.response.data,
            currentAgentCachedDate: action.payload.response.cachedDate,
            currentAgentFetching: false,
            currentAgentError: null,
            hasChangedAgentNoteList: false,
            hasChangedAgentPersonData: false,
            hasChangedAgentOccasionList: false,

        }
    },
    // Action dispatched on fetch failure in thunk "callGetAgent". Thunk dispatched by "Agent" screen. Fetch current agent.
    [actionsAgent.CALL_GET_AGENT_FAILURE]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.CALL_GET_AGENT_FAILURE>): ModelsAgent.IAgentState => {
        return {
            ...state,
            currentAgentFetching: false,
            isVisibleAgentErrorModalWindow: true,
            currentAgentError: action.payload.error,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk used to show agent customers screen.
    [actionsAgent.NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_TO_AGENT_CUSTOMER_POSITION_LIST_SCREEN>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Agent" screen.
    [actionsAgent.PERFORM_CHANGE_AGENT_COMMENT]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_CHANGE_AGENT_COMMENT  >): ModelsAgent.IAgentState => {
        return {
            ...state,
            newAgentComment: action.payload.value,
        }
    },


    // Thunk dispatched by "Agent" screen. 
    [actionsAgent.NAVIGATE_BACK]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.NAVIGATE_BACK>): ModelsAgent.IAgentState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Agent" screen. Thunk dispatched to reset container state to default values.
    [actionsAgent.PERFORM_CONTAINER_RESET]: (state: ModelsAgent.IAgentState, action: Action<actionsAgent.PERFORM_CONTAINER_RESET>): ModelsAgent.IAgentState => {
        return {
            ...ModelsAgent.initialState.state,
        }
    },


}, ModelsAgent.initialState.state)

export default reducerAgent
