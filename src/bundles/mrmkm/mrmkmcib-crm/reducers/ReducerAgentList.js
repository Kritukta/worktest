/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsAgentList from '../actions/ActionsAgentList';
import { Enums } from '../Enums';
import * as ModelsAgentList from "../models/ModelsAgentList";
import * as util from '../common/Util';
const reducerAgentList = handleActions({
    // Thunk dispatched by "AgentList" screen. Refresh current agent list.
    [actionsAgentList.PERFORM_OPEN_AGENT_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsAgentList.initialState.state, { agentListMode: Enums.AgentListMode.Watch, agentListContextMode: action.payload.agentListContextMode, agentListAccessLevel: action.payload.agentListAccessLevel, currentDeal: action.payload.currentDeal, currentCustomerManaged: action.payload.customerManaged });
    },
    // Thunk dispatched by "AgentList" screen to input agent list.
    [actionsAgentList.PERFORM_INPUT_AGENT_LIST]: (state, action) => {
        return Object.assign({}, state, { agentList: action.payload.agentList, inputAgentList: action.payload.agentList });
    },
    // Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetAgentList" started. Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { agentListFetching: true, agentListFetchingError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { agentList: action.payload.response.data, agentListCachedDate: action.payload.response.cachedDate, agentListFetching: false, agentListFetchingError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetAgentList". Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
    [actionsAgentList.CALL_GET_AGENT_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { agentListFetching: false, agentListFetchingError: action.payload.error });
    },
    // Action dispatched on fetch failure in thunk "performPopoverAddShow". Thunk dispatched by "AgentList" screen. Thunk chain used to show add popover..
    [actionsAgentList.PERFORM_POPOVER_ADD_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverAdd: true });
    },
    // Action dispatched on fetch failure in thunk "performPopoverAddShow". Thunk dispatched by "AgentList" screen. Thunk chain used to hide add popover..
    [actionsAgentList.PERFORM_POPOVER_ADD_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverMenu: false });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to show agent list.
    [actionsAgentList.NAVIGATE_TO_AGENT_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to check access to editor mode.
    [actionsAgentList.SET_EDITOR_ENABLED]: (state, action) => {
        return Object.assign({}, state, { isEditorEnabled: action.payload.isEditorEnabled });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to show principal picker screen.
    [actionsAgentList.NAVIGATE_TO_PRINCIPAL_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set agent list principal.
    [actionsAgentList.PERFORM_AGENT_LIST_PRINCIPAL]: (state, action) => {
        return Object.assign({}, state, { hasChangedAgentList: true, inputAgentList: util.agentListPrincipal(state.inputAgentList, action.payload.agentId, action.payload.isPrincipal) });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to show agent search screen.
    [actionsAgentList.NAVIGATE_TO_AGENT_SEARCH_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isVisibleMenuAgentAdd: false });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to show agent create screen.
    [actionsAgentList.NAVIGATE_TO_AGENT_CREATE_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AgentList" screen. Thunk dispatched on agent search input changed.
    [actionsAgentList.PERFORM_INPUT_AGENT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputAgentSearch: action.payload.value, searchAgentStringRequest: '', operationUuid: util.getRandomOperationUuid() });
    },
    // Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state, { searchAgentStringRequest: state.inputAgentSearch });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to show agent position page screen.
    [actionsAgentList.NAVIGATE_TO_AGENT_POSITION_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetAgentSearchList" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { agentSearchListFetching: true, agentSearchListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgentSearchList". Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { agentSearchList: action.payload.response.data, agentSearchListCachedDate: action.payload.response.cachedDate, agentListFetching: false, agentSearchListFetching: false, agentSearchListError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetAgentSearchList". Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
    [actionsAgentList.CALL_GET_AGENT_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { agentListFetching: false, agentSearchListFetching: false, agentSearchListError: action.payload.error });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
    [actionsAgentList.PERFORM_AGENT_SEARCH_LIST_SELECT]: (state, action) => {
        return Object.assign({}, state, { inputAgentSearchSelected: action.payload.agent });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_SELECT_AGENT_JOB_POSITION]: (state, action) => {
        return Object.assign({}, state, { selectedAgentJobPosition: action.payload.position });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_INPUT_AGENT_JOB_POSITION]: (state, action) => {
        return Object.assign({}, state, { inputAgentJobPosition: action.payload.position });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_CLOSE_AGENT_DELETE_PANEL]: (state, action) => {
        return Object.assign({}, state, { agentListOpenedDeletePanel: state.agentListOpenedDeletePanel
                .filter((agentDeletePanel) => agentDeletePanel.id !== action.payload.agent.id) });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
    [actionsAgentList.PERFORM_AGENT_DELETE]: (state, action) => {
        return Object.assign({}, state, { hasChangedAgentList: true, inputAgentList: { data: state.inputAgentList.data
                    .filter((stateAgent) => stateAgent.id !== action.payload.agent.id) }, agentListOpenedDeletePanel: state.agentListOpenedDeletePanel
                .filter((agentDeletePanel) => agentDeletePanel.id !== action.payload.agent.id) });
    },
    // Internal thunk used in "AgentList" container. Thunk used to add or update agent.
    [actionsAgentList.PERFORM_UPDATE_AGENT_LIST]: (state, action) => {
        return Object.assign({}, state, { inputAgentList: action.payload.agentList, hasChangedAgentList: true });
    },
    // Internal thunk used in "AgentList" container. Thunk used to open delete panel of agent 
    [actionsAgentList.PERFORM_OPEN_AGENT_DELETE_PANEL]: (state, action) => {
        return Object.assign({}, state, { agentListOpenedDeletePanel: [...state.agentListOpenedDeletePanel, action.payload.agent] });
    },
    // Thunk dispatched by "AgentList" screen. Thunk chain used to show popover.
    [actionsAgentList.PERFORM_MENU_AGENT_ADD_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverMenu: true });
    },
    // Thunk dispatched by "AgentList" screen. Thunk chain used to exit search agent page and clear search agent text.
    [actionsAgentList.PERFORM_CANCEL_SEARCH_AGENT]: (state, action) => {
        return Object.assign({}, state, { inputAgentSearch: '', searchAgentStringRequest: '' });
    },
    // Thunk dispatched by "AgentList" screen. Thunk chain used to hide popover.
    [actionsAgentList.PERFORM_MENU_AGENT_ADD_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverMenu: false });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid(), agentListMode: Enums.AgentListMode.Watch });
    },
    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { agentListSaveInProgress: true, agentListSaveError: null });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { agentListSave: action.payload.data, agentListSaveInProgress: false, agentListSaveError: null, currentDeal: action.payload.currentDeal, isEditedDeal: action.payload.currentDeal ? true : false });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
    [actionsAgentList.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { agentListSaveInProgress: false, agentListSaveError: action.payload.error });
    },
    // Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerModifierIdFetching: true, customerModifierIdError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerModifierId: action.payload.response.data, customerModifierIdCachedDate: action.payload.response.cachedDate, customerModifierIdFetching: false, customerModifierIdError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "AgentList" container. Fetch current customer modifier Id.
    [actionsAgentList.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerModifierIdFetching: false, customerModifierIdError: action.payload.error });
    },
    // Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetAgentListModifierId" started. Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_REQUEST]: (state, action) => {
        return Object.assign({}, state, { agentListModifierIdFetching: true, agentListModifierIdError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetAgentListModifierId". Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { agentListModifierId: action.payload.response.data, agentListModifierIdCachedDate: action.payload.response.cachedDate, agentListModifierIdFetching: false, agentListModifierIdError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetAgentListModifierId". Thunk dispatched by "AgentList" screen. Fetch current customer agent list modifier Id.
    [actionsAgentList.CALL_GET_AGENT_LIST_MODIFIER_ID_FAILURE]: (state, action) => {
        return Object.assign({}, state, { agentListModifierIdFetching: false, agentListModifierIdError: action.payload.error });
    },
    // Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPutCustomerAgentListUpdate" started. Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerAgentListUpdateFetching: true, customerAgentListUpdateError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPutCustomerAgentListUpdate". Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerAgentListUpdate: action.payload.response.data, customerAgentListUpdateCachedDate: action.payload.response.cachedDate, customerAgentListUpdateFetching: false, customerAgentListUpdateError: null });
    },
    // Action dispatched on fetch failure in thunk "callPutCustomerAgentListUpdate". Thunk dispatched by "AgentList" screen. Fetch put request.
    [actionsAgentList.CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerAgentListUpdateFetching: false, customerAgentListUpdateError: action.payload.error });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to enter editor mode.
    [actionsAgentList.PERFORM_EDIT]: (state, action) => {
        return Object.assign({}, state, { agentListMode: Enums.AgentListMode.Edit });
    },
    // Thunk dispatched by "AgentList" screen. Thunk used to cancel changes.
    [actionsAgentList.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state, { agentListMode: Enums.AgentListMode.Watch, inputAgentList: state.agentList, hasChangedAgentList: false });
    },
    // Thunk dispatched by "AgentList" screen.
    [actionsAgentList.PERFORM_CHANGE_VISIBLE_AGENT_LIST_ERROR_MODAL_WINDOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleAgentListErrorModalWindow: action.payload.status });
    },
    // Thunk dispatched by "AgentList" screen. 
    [actionsAgentList.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AgentList" screen.
    [actionsAgentList.PERFORM_CLOSE_AGENT_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state, { agentList: state.inputAgentList });
    },
    // Thunk dispatched by "AgentList" screen. Thunk dispatched to reset container state to default values.
    [actionsAgentList.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsAgentList.initialState.state);
    },
    [actionsAgentList.CALL_PUT_DEAL_AGENT_LIST_UPDATE]: (state) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid() });
    },
    [actionsAgentList.CALL_GET_DEAL_REFRESH]: (state) => {
        return Object.assign({}, state);
    },
}, ModelsAgentList.initialState.state);
export default reducerAgentList;
//# sourceMappingURL=ReducerAgentList.js.map