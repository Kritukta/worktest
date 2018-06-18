/**
 * Models for MemberList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in MemberList actions and thunks.
const defaultState = {
    get state() {
        return {
            currentActivity: defaultValues.Activity,
            currentDeal: defaultValues.Deal,
            currentGsz: defaultValues.Gsz,
            currentCustomerManaged: defaultValues.CustomerManaged,
            memberList: defaultValues.MemberList,
            isEditorMode: false,
            isExpandedMode: false,
            isVisiblePopoverAdd: false,
            inputMemberSearch: '',
            inputMemberSearchSelected: defaultValues.Employee,
            inputMemberRole: defaultValues.Classifier,
            memberSearchList: defaultValues.MemberList,
            memberSearchListFetching: false,
            memberSearchListError: null,
            memberSearchListCachedDate: null,
            currentAgent: defaultValues.Agent,
            memberListSaveInProgress: false,
            memberListSaveError: null,
            customerModifierIdError: null,
            customerModifierIdFetching: false,
            customerModifierId: defaultValues.CustomerManaged,
            customerModifierIdCachedDate: null,
            memberListUpdateFetching: false,
            memberListUpdateError: null,
            memberListUpdate: false,
            memberListSave: false,
            isSelectEmployeeLocalSearch: false,
            memberListUpdateCachedDate: null,
            operationUuid: '',
            currentMode: Enums.MemberListMode.Activity,
            memberSearchListLocal: defaultValues.MemberList,
            inputMemberSearchLocal: '',
            inputEmployeeSource: Enums.MemberListEmployeeSource.Employee,
            isEditorEnabled: true,
            currentDealMemberListFetching: false,
            currentDealMemberListError: null,
            isEditingMemberList: true,
            isProfile: false,
            supParameters: '',
            isMemberListEdited: false,
            isDealCardOwner: true,
            // TODO Describe MemberList reducer state.
            activityMemberListFetching: false,
            activityMemberListError: null,
            customerForActivityFetching: false,
            customerForActivityError: null,
            isLocalSearch: true,
            isValidSearchString: true,
            isSearchCompleted: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsMemberList.js.map