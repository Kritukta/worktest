/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsMemberList from '../actions/ActionsMemberList';
import { defaultValues } from "../models/Models";
import * as ModelsMemberList from "../models/ModelsMemberList";
import * as util from '../common/Util';
const reducerMemberList = handleActions({
    // Thunk dispatched by "MemberList" screen. Refresh current member list.
    [actionsMemberList.PERFORM_MEMBER_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentActivity: action.payload.currentActivity, currentDeal: action.payload.currentDeal, currentGsz: action.payload.currentGsz, currentMode: action.payload.currentMode, currentAgent: action.payload.currentAgent, inputEmployeeSource: action.payload.inputEmployeeSource, currentCustomerManaged: action.payload.currentCustomerManaged, isEditorEnabled: true, memberListSaveError: null, customerForActivityError: null, isExpandedMode: action.payload.isExpandedMode });
    },
    // Internal thunk used in "MemberList" container. Thunk chain dispatched to set context parameters.
    [actionsMemberList.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { memberList: { data: action.payload.memberList.data.slice().sort((a, b) => {
                    if (a.isGeneral > b.isGeneral)
                        return -1;
                    if (a.isGeneral < b.isGeneral)
                        return 1;
                    return 0;
                }) } });
    },
    [actionsMemberList.PERFROM_SET_EDITOR_ENABLED]: (state, action) => {
        return Object.assign({}, state, { isEditorEnabled: action.payload.isEnabled });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to enter editor mode.
    [actionsMemberList.PERFORM_EDIT]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: true });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to cancel changes.
    [actionsMemberList.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: false });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to show add menu.
    [actionsMemberList.PERFORM_POPOVER_ADD_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverAdd: true });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
    [actionsMemberList.PERFORM_POPOVER_ADD_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverAdd: false });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to set employee mode.
    [actionsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE]: (state, action) => {
        return Object.assign({}, state, { inputEmployeeSource: action.payload.employeeSource });
    },
    [actionsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
    [actionsMemberList.PERFROM_SET_MEMBER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state, { memberSearchList: action.payload.data });
    },
    [actionsMemberList.PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH]: (state, action) => {
        return Object.assign({}, state, { isSelectEmployeeLocalSearch: action.payload.isSelectEmployeeLocalSearch, inputEmployeeSource: action.payload.employeeSource });
    },
    [actionsMemberList.PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY]: (state, action) => {
        return Object.assign({}, state, { memberSearchList: defaultValues.MemberList, memberSearchListLocal: defaultValues.MemberList });
    },
    [actionsMemberList.NAVIGATE_TO_MEMBER_SEARCH_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverAdd: false, inputMemberSearch: '', inputMemberSearchLocal: '' });
    },
    [actionsMemberList.NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearch: '', inputMemberSearchLocal: '' });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to set local search results.
    [actionsMemberList.FILTER_MEMBER_LIST_SEARCH_LOCAL]: (state, action) => {
        return Object.assign({}, state, { memberSearchListLocal: action.payload.memberList });
    },
    // Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
    [actionsMemberList.PERFORM_INPUT_MEMBER_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearch: action.payload.value, isSearchCompleted: false });
    },
    // Thunk dispatched by "MemberList" screen. Thunk dispatched on member search local input changed.
    [actionsMemberList.PERFORM_INPUT_MEMBER_SEARCH_LOCAL]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearchLocal: action.payload.value });
    },
    // Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetMemberSearchList" started. Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { memberSearchListFetching: true, memberSearchListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetMemberSearchList". Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { memberSearchList: action.payload.memberSearchList, memberSearchListCachedDate: action.payload.cachedDate, memberSearchListFetching: false, memberSearchListError: null, isSearchCompleted: true });
    },
    [actionsMemberList.PERFORM_RESET_MEMBER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state, { memberSearchList: defaultValues.MemberList });
    },
    // Action dispatched on fetch failure in thunk "callGetMemberSearchList". Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { memberSearchListFetching: false, memberSearchListError: action.payload.error });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
    [actionsMemberList.PERFORM_MEMBER_SEARCH_LIST_SELECT]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearchSelected: action.payload.member });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to show member role picker screen.
    [actionsMemberList.NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state, { inputMemberRole: defaultValues.Classifier });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
    [actionsMemberList.PERFORM_MEMBER_ROLE_SELECT]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearch: '', inputMemberSearchLocal: '', inputMemberRole: action.payload.role, memberList: util.memberListAdd(state.memberList, state.inputMemberSearchSelected, action.payload.role, state.currentMode) /* User classifier SALES_TEAM_ROLE. */ });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
    [actionsMemberList.PERFORM_GENERAL_MEMBER_SELECT]: (state, action) => {
        return Object.assign({}, state, { memberList: util.memberListGeneralSelect(state.memberList, action.payload.index) /* User classifier SALES_TEAM_ROLE. */ });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to show member list.
    [actionsMemberList.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearch: '', inputMemberSearchLocal: '' });
    },
    [actionsMemberList.NAVIGATE_MEMBER_LIST_SCREEN_BACK]: (state, action) => {
        return Object.assign({}, state, { isMemberListEdited: false });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to confirm changes in member list.
    [actionsMemberList.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid(), isEditorMode: false, isMemberListEdited: true });
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to delete Member.
    [actionsMemberList.PERFORM_MEMBER_DELETE]: (state, action) => {
        return Object.assign({}, state, { memberList: util.memberListDelete(state.memberList, action.payload.index) });
    },
    // Thunk dispatched by "MemberList" screen. Thunk chain used to set item action menu state.
    [actionsMemberList.PERFORM_MEMBER_ACTION_MENU_SWITCH]: (state, action) => {
        return Object.assign({}, state, { memberList: util.memberActionMenuSwitch(state.memberList, action.payload.id, action.payload.isLeftActionMenuOpen, action.payload.isRightActionMenuOpen) /* TODO Set item action menu state */ });
    },
    // Thunk dispatched by "MemberList" screen. 
    [actionsMemberList.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "MemberList" screen. Thunk chain used to show team member screen.
    [actionsMemberList.PERFORM_NAVIGATE_TO_MEMBER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "MemberList" screen. Thunk dispatched to reset container state to default values.
    [actionsMemberList.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsMemberList.initialState.state);
    },
    [actionsMemberList.PERFORM_SAVE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { memberListSaveInProgress: true, memberListSaveError: null });
    },
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerModifierIdFetching: true, customerModifierIdError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerModifierId: action.payload.response.data, customerModifierIdCachedDate: action.payload.response.cachedDate, customerModifierIdFetching: false, customerModifierIdError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerModifierIdFetching: false, customerModifierIdError: action.payload.error });
    },
    // Action dispatched on fetch succeeded in thunk "callPutMemberListUpdate". Thunk dispatched by "MemberList" screen. Fetch put request.
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { memberListUpdate: action.payload.response.data, memberListUpdateCachedDate: action.payload.response.cachedDate, memberListUpdateFetching: false, memberListUpdateError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
    [actionsMemberList.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { memberListSaveInProgress: false, memberListSaveError: action.payload.error });
    },
    // Action dispatched on network thunk chain "callPutMemberListUpdate" started. Thunk dispatched by "MemberList" screen. Fetch put request.
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { memberListUpdateFetching: true, memberListUpdateError: null });
    },
    // Action dispatched on fetch failure in thunk "callPutMemberListUpdate". Thunk dispatched by "MemberList" screen. Fetch put request.
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { memberListUpdateFetching: false, memberListUpdateError: action.payload.error });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
    [actionsMemberList.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { memberListSave: action.payload.data, memberListSaveInProgress: false, memberListSaveError: null });
    },
    // Action dispatched on thunk "callGetDealMemberListRefresh" started. Thunk dispatched by "thunkMemberList".
    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST]: (state, action) => {
        return Object.assign({}, state, { currentDealMemberListFetching: true, currentDealMemberListError: null });
    },
    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentDeal: action.payload.response.data, currentDealMemberListFetching: false, currentDealMemberListError: null });
    },
    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { currentDealMemberListFetching: false, currentDealMemberListError: action.payload.error });
    },
    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { activityMemberListFetching: true, activityMemberListError: null });
    },
    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { activityMemberListFetching: false, activityMemberListError: null });
    },
    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { activityMemberListFetching: false, activityMemberListError: action.payload.error });
    },
    [actionsMemberList.SET_EDITING_PERMISSION_MEMBER_LIST]: (state, action) => {
        return Object.assign({}, state, { isEditingMemberList: action.payload.isEditingMemberList, isEditorEnabled: action.payload.isEditingMemberList });
    },
    [actionsMemberList.SET_INFO_BUTTON_FLAG]: (state, action) => {
        return Object.assign({}, state, { isProfile: action.payload.flag });
    },
    [actionsMemberList.PERFORM_RESET_AND_RETURN]: (state, action) => {
        return Object.assign({}, state, { inputMemberSearch: '', inputMemberSearchLocal: '' });
    },
    [actionsMemberList.GET_SUP_PARAMETERS]: (state, action) => {
        return Object.assign({}, state, { supParameters: action.payload.value });
    },
    [actionsMemberList.PERFORM_SET_DEAL_CARD_OWNER]: (state, action) => {
        return Object.assign({}, state, { isDealCardOwner: action.payload.isDealCardOwner });
    },
    [actionsMemberList.SET_LOCAL_SEARCH_FLAG]: (state, action) => {
        return Object.assign({}, state, { isLocalSearch: action.payload.isLocalSearch });
    },
    [actionsMemberList.PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR]: (state, action) => {
        return Object.assign({}, state, { memberListSaveError: null, customerForActivityError: null });
    },
    [actionsMemberList.PERFORM_SAVE_ACTIVITY_MEMBER_LIST]: (state, action) => {
        return Object.assign({}, state, { currentActivity: Object.assign({}, state.currentActivity, { memberList: state.memberList }) });
    },
    [actionsMemberList.PERFORM_SEARCH]: (state, action) => {
        return Object.assign({}, state, { isValidSearchString: action.payload.isValidSearchString });
    },
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY]: (state) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST]: (state) => {
        return Object.assign({}, state, { customerForActivityFetching: true, customerForActivityError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentCustomerManaged: action.payload.response.data, customerForActivityFetching: false, customerForActivityError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerForActivityFetching: false, customerForActivityError: action.payload.error });
    },
    [actionsMemberList.NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE]: (state, action) => {
        return Object.assign({}, state);
    },
}, ModelsMemberList.initialState.state);
export default reducerMemberList;
//# sourceMappingURL=ReducerMemberList.js.map