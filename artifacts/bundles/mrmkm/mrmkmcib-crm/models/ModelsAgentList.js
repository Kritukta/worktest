/**
 * Models for AgentList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in AgentList actions and thunks.
const defaultState = {
    get state() {
        return {
            currentDeal: null,
            currentCustomerManaged: null,
            agentListMode: Enums.AgentListMode.None,
            agentListContextMode: Enums.AgentListContextMode.None,
            inputAgentSearch: '',
            inputAgentSearchSelected: defaultValues.Agent,
            inputAgentRole: null,
            operationUuid: '',
            agentListFetching: false,
            agentListFetchingError: null,
            agentList: defaultValues.AgentList,
            inputAgentList: defaultValues.AgentList,
            agentListCachedDate: null,
            agentSearchList: defaultValues.AgentList,
            agentSearchListFetching: false,
            agentSearchListError: null,
            agentSearchListCachedDate: null,
            agentListSaveInProgress: false,
            agentListSaveError: null,
            isEditedDeal: false,
            agentListAccessLevel: Enums.AgentListAccessLevel.None,
            inputAgentJobPosition: '',
            selectedAgentJobPosition: '',
            isVisiblePopoverMenu: false,
            hasChangedAgentList: false,
            isVisibleAgentListErrorModalWindow: false,
            searchAgentStringRequest: '',
            agentListOpenedDeletePanel: [],
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsAgentList.js.map