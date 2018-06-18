/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsAgentList from '../actions/ActionsAgentList'
import {defaultValues} from "../models/Models"
import {Enums} from '../Enums'
import * as ModelsAgentList from "../models/ModelsAgentList"
import Action from "../models/Action"
import { Models } from 'mrmkmcib-crm'
import * as util from '../common/Util'
import * as ModelsDealStages from "../models/ModelsDealStages";
import * as actionsDealStages from "../actions/ActionDealStages";




const reducerAgentList = handleActions<ModelsAgentList.IAgentListState>({

    // Thunk dispatched by "AgentList" screen. Refresh current agent list.
    [actionsAgentList.PERFORM_OPEN_AGENT_LIST_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_OPEN_AGENT_LIST_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...ModelsAgentList.initialState.state,
						agentListMode: Enums.AgentListMode.Watch,
            agentListContextMode: action.payload.agentListContextMode,
            agentListAccessLevel: action.payload.agentListAccessLevel,
            currentDeal: action.payload.currentDeal,
            currentCustomerManaged: action.payload.customerManaged,

        }
    },
    // Thunk dispatched by "AgentList" screen to input agent list.
    [actionsAgentList.PERFORM_INPUT_AGENT_LIST]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_INPUT_AGENT_LIST>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentList: action.payload.agentList,
            inputAgentList: action.payload.agentList,
        }
    },

    // Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_LIST>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetAgentList" started. Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST_REQUEST]: (state: ModelsAgentList.IAgentListState, action: Action<void>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListFetching: true,
            agentListFetchingError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST_SUCCESS]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_LIST_SUCCESS>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentList: action.payload.response.data,
            agentListCachedDate: action.payload.response.cachedDate,
            agentListFetching: false,
            agentListFetchingError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST_FAILURE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_LIST_FAILURE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListFetching: false,
            agentListFetchingError: action.payload.error,
        }
    },
    // Action dispatched on fetch failure in thunk "performPopoverAddShow". Thunk dispatched by "AgentList" screen. Thunk chain used to show add popover..
    [actionsAgentList.PERFORM_POPOVER_ADD_SHOW]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_POPOVER_ADD_SHOW>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isVisiblePopoverAdd: true
        }
    },
    // Action dispatched on fetch failure in thunk "performPopoverAddShow". Thunk dispatched by "AgentList" screen. Thunk chain used to hide add popover..
    [actionsAgentList.PERFORM_POPOVER_ADD_HIDE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_POPOVER_ADD_HIDE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isVisiblePopoverMenu: false
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to show agent list.
    [actionsAgentList.NAVIGATE_TO_AGENT_LIST_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.NAVIGATE_TO_AGENT_LIST_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to check access to editor mode.
    [actionsAgentList.SET_EDITOR_ENABLED]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.SET_EDITOR_ENABLED>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isEditorEnabled: action.payload.isEditorEnabled,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to show principal picker screen.
    [actionsAgentList.NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to set agent list principal.
    [actionsAgentList.PERFORM_AGENT_LIST_PRINCIPAL]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_AGENT_LIST_PRINCIPAL>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            hasChangedAgentList: true,
            inputAgentList: util.agentListPrincipal(state.inputAgentList, action.payload.agentId, action.payload.isPrincipal),
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to show agent search screen.
    [actionsAgentList.NAVIGATE_TO_AGENT_SEARCH_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.NAVIGATE_TO_AGENT_SEARCH_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isVisibleMenuAgentAdd: false,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to show agent create screen.
    [actionsAgentList.NAVIGATE_TO_AGENT_CREATE_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.NAVIGATE_TO_AGENT_CREATE_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk dispatched on agent search input changed.
    [actionsAgentList.PERFORM_INPUT_AGENT_SEARCH]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_INPUT_AGENT_SEARCH>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            inputAgentSearch: action.payload.value,
            searchAgentStringRequest: '',
            operationUuid: util.getRandomOperationUuid(),
        }
    },

    // Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_SEARCH_LIST>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            searchAgentStringRequest: state.inputAgentSearch,
        }
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to show agent position page screen.
    [actionsAgentList.NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetAgentSearchList" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_REQUEST]: (state: ModelsAgentList.IAgentListState, action: Action<void>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentSearchListFetching: true,
            agentSearchListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgentSearchList". Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_SUCCESS]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_SUCCESS>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentSearchList: action.payload.response.data,
            agentSearchListCachedDate: action.payload.response.cachedDate,
            agentListFetching: false,
            agentSearchListFetching: false,
            agentSearchListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAgentSearchList". Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_FAILURE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_FAILURE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListFetching: false,
            agentSearchListFetching: false,
            agentSearchListError: action.payload.error,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
    [actionsAgentList.PERFORM_AGENT_SEARCH_LIST_SELECT]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_AGENT_SEARCH_LIST_SELECT>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            inputAgentSearchSelected: action.payload.agent,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_SELECT_AGENT_JOB_POSITION]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_SELECT_AGENT_JOB_POSITION>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            selectedAgentJobPosition: action.payload.position,
        }
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_INPUT_AGENT_JOB_POSITION]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_INPUT_AGENT_JOB_POSITION>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            inputAgentJobPosition: action.payload.position,
        }
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_CLOSE_AGENT_DELETE_PANEL]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_CLOSE_AGENT_DELETE_PANEL>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListOpenedDeletePanel: state.agentListOpenedDeletePanel
                .filter((agentDeletePanel: Models.Agent): boolean => agentDeletePanel.id !== action.payload.agent.id),
        }
    },

     // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
     [actionsAgentList.PERFORM_AGENT_DELETE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_AGENT_DELETE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            hasChangedAgentList: true,
            inputAgentList: {data: state.inputAgentList.data
                .filter((stateAgent: Models.Agent): boolean => stateAgent.id !== action.payload.agent.id)},
            agentListOpenedDeletePanel: state.agentListOpenedDeletePanel
                .filter((agentDeletePanel: Models.Agent): boolean => agentDeletePanel.id !== action.payload.agent.id),
        }
    },
    

    
    
    // Internal thunk used in "AgentList" container. Thunk used to add or update agent.
    [actionsAgentList.PERFORM_UPDATE_AGENT_LIST]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_UPDATE_AGENT_LIST>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            inputAgentList: action.payload.agentList,
            hasChangedAgentList: true,
        }
    },

  // Internal thunk used in "AgentList" container. Thunk used to open delete panel of agent 
  [actionsAgentList.PERFORM_OPEN_AGENT_DELETE_PANEL]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_OPEN_AGENT_DELETE_PANEL>): ModelsAgentList.IAgentListState => {
    return {
            ...state,
            agentListOpenedDeletePanel: [...state.agentListOpenedDeletePanel, action.payload.agent],
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk chain used to show popover.
    [actionsAgentList.PERFORM_MENU_AGENT_ADD_SHOW]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_MENU_AGENT_ADD_SHOW>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isVisiblePopoverMenu: true,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk chain used to exit search agent page and clear search agent text.
    [actionsAgentList.PERFORM_CANCEL_SEARCH_AGENT]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_CANCEL_SEARCH_AGENT>): ModelsAgentList.IAgentListState =>{
        return {
            ...state,
            inputAgentSearch: '',
            searchAgentStringRequest: '',
        }
    },
    // Thunk dispatched by "AgentList" screen. Thunk chain used to hide popover.
    [actionsAgentList.PERFORM_MENU_AGENT_ADD_HIDE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_MENU_AGENT_ADD_HIDE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isVisiblePopoverMenu: false,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_SAVE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
            agentListMode: Enums.AgentListMode.Watch,
        }
    },

    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE_EXECUTE]: (state: ModelsAgentList.IAgentListState, action: Action<void>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListSaveInProgress: true,
            agentListSaveError: null,
        }
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE_SUCCESS]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_SAVE_SUCCESS>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListSave: action.payload.data,
            agentListSaveInProgress: false,
            agentListSaveError: null,
            currentDeal: action.payload.currentDeal,
            isEditedDeal: action.payload.currentDeal ? true : false
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE_FAILURE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_SAVE_FAILURE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListSaveInProgress: false,
            agentListSaveError: action.payload.error,
        }
    },

    // Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST]: (state: ModelsAgentList.IAgentListState, action: Action<void>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            customerModifierIdFetching: true,
            customerModifierIdError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            customerModifierId: action.payload.response.data,
            customerModifierIdCachedDate: action.payload.response.cachedDate,
            customerModifierIdFetching: false,
            customerModifierIdError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            customerModifierIdFetching: false,
            customerModifierIdError: action.payload.error,
        }
    },

    // Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetAgentListModifierId" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST]: (state: ModelsAgentList.IAgentListState, action: Action<void>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListModifierIdFetching: true,
            agentListModifierIdError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgentListModifierId". Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListModifierId: action.payload.response.data,
            agentListModifierIdCachedDate: action.payload.response.cachedDate,
            agentListModifierIdFetching: false,
            agentListModifierIdError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetAgentListModifierId". Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListModifierIdFetching: false,
            agentListModifierIdError: action.payload.error,
        }
    },

    // Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPutCustomerAgentListUpdate" started. Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST]: (state: ModelsAgentList.IAgentListState, action: Action<void>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            customerAgentListUpdateFetching: true,
            customerAgentListUpdateError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPutCustomerAgentListUpdate". Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            customerAgentListUpdate: action.payload.response.data,
            customerAgentListUpdateCachedDate: action.payload.response.cachedDate,
            customerAgentListUpdateFetching: false,
            customerAgentListUpdateError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPutCustomerAgentListUpdate". Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            customerAgentListUpdateFetching: false,
            customerAgentListUpdateError: action.payload.error,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to enter editor mode.
    [actionsAgentList.PERFORM_EDIT]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_EDIT>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListMode: Enums.AgentListMode.Edit,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk used to cancel changes.
    [actionsAgentList.PERFORM_CANCEL]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_CANCEL>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentListMode: Enums.AgentListMode.Watch,
            inputAgentList: state.agentList,
            hasChangedAgentList: false,
        }
    },
    // Thunk dispatched by "AgentList" screen.
    [actionsAgentList.PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            isVisibleAgentListErrorModalWindow: action.payload.status,
        }
    },

    // Thunk dispatched by "AgentList" screen. 
    [actionsAgentList.NAVIGATE_BACK]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.NAVIGATE_BACK>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AgentList" screen.
    [actionsAgentList.PERFORM_CLOSE_AGENT_LIST_SCREEN]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_CLOSE_AGENT_LIST_SCREEN>): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            agentList: state.inputAgentList,
        }
    },

    // Thunk dispatched by "AgentList" screen. Thunk dispatched to reset container state to default values.
    [actionsAgentList.PERFORM_CONTAINER_RESET]: (state: ModelsAgentList.IAgentListState, action: Action<actionsAgentList.PERFORM_CONTAINER_RESET>): ModelsAgentList.IAgentListState => {
        return {
            ...ModelsAgentList.initialState.state,
        }
    },
    [actionsAgentList.CALL_PUT_DEAL_AGENT_LIST_UPDATE]: (state: ModelsAgentList.IAgentListState): ModelsAgentList.IAgentListState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid()
        }
    },
    [actionsAgentList.CALL_GET_DEAL_REFRESH]: (state: ModelsAgentList.IAgentListState): ModelsAgentList.IAgentListState => {
        return {
            ...state,
        }
    },
}, ModelsAgentList.initialState.state)

export default reducerAgentList
