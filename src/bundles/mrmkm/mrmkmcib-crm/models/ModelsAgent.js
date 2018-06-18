/**
 * Models for Agent container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in Agent actions and thunks.
const defaultState = {
    get state() {
        return {
            currentAgent: defaultValues.Agent,
            agentMode: Enums.AgentMode.None,
            inputFirstName: '',
            inputLastName: '',
            inputMiddleName: '',
            inputJobPosition: '',
            inputSearchJobPosition: '',
            inputWorkPhone: null,
            inputMobilePhone: null,
            inputEmail: '',
            inputBirthday: null,
            inputGender: Enums.GenderList.None,
            inputRelationType: defaultValues.Classifier,
            inputComment: '',
            operationUuid: '',
            agentCreateFetching: false,
            agentCreateError: null,
            currentAgentModifierId: defaultValues.Agent,
            currentAgentModifierIdFetching: false,
            currentAgentModifierIdError: null,
            currentAgentModifierIdCachedDate: null,
            agentUpdateFetching: false,
            agentUpdateError: null,
            agentUpdateCachedDate: null,
            currentAgentFetching: false,
            currentAgentError: null,
            currentAgentCachedDate: null,
            currentCustomerManaged: defaultValues.CustomerManaged,
            agentContextMode: Enums.AgentContextMode.None,
            agentValidationErrorList: [],
            inputNoteList: { data: [] },
            inputOccasionList: { data: [] },
            hasChangedAgentPersonData: false,
            inputMemberList: null,
            isVisibleAgentErrorModalWindow: false,
            agentPanelCurrentPage: Enums.AgentPanelPage.None,
            isCommentEdit: false,
            newAgentComment: '',
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsAgent.js.map