/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsMemberList from '../actions/ActionsMemberList'
import {defaultValues} from "../models/Models"
import * as ModelsMemberList from "../models/ModelsMemberList"
import Action from "../models/Action"
import {Enums} from '../Enums'
import * as util from '../common/Util'


const reducerMemberList = handleActions<ModelsMemberList.IMemberListState>({

    // Thunk dispatched by "MemberList" screen. Refresh current member list.
    [actionsMemberList.PERFORM_MEMBER_LIST_REFRESH]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_MEMBER_LIST_REFRESH>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            currentActivity: action.payload.currentActivity,
            currentDeal: action.payload.currentDeal,
            currentGsz: action.payload.currentGsz,
            currentMode: action.payload.currentMode,
            currentAgent: action.payload.currentAgent,
            inputEmployeeSource: action.payload.inputEmployeeSource,
            currentCustomerManaged: action.payload.currentCustomerManaged,
            isEditorEnabled: true,
            memberListSaveError: null,
            customerForActivityError: null,
            isExpandedMode: action.payload.isExpandedMode,
        }
    },

    // Internal thunk used in "MemberList" container. Thunk chain dispatched to set context parameters.
    [actionsMemberList.SWAP_CONTEXT]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.SWAP_CONTEXT>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberList: {data:action.payload.memberList.data.slice().sort((a, b) => {
                if (a.isGeneral > b.isGeneral) return -1
                if (a.isGeneral < b.isGeneral) return 1

                return 0
            })},
        }
    },

    [actionsMemberList.PERFROM_SET_EDITOR_ENABLED]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFROM_SET_EDITOR_ENABLED>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isEditorEnabled: action.payload.isEnabled,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to enter editor mode.
    [actionsMemberList.PERFORM_EDIT]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_EDIT>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isEditorMode: true,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to cancel changes.
    [actionsMemberList.PERFORM_CANCEL]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_CANCEL>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isEditorMode: false,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to show add menu.
    [actionsMemberList.PERFORM_POPOVER_ADD_SHOW]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_POPOVER_ADD_SHOW>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isVisiblePopoverAdd: true,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
    [actionsMemberList.PERFORM_POPOVER_ADD_HIDE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_POPOVER_ADD_HIDE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isVisiblePopoverAdd: false,
        }
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to set employee mode.
    [actionsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputEmployeeSource: action.payload.employeeSource,
        }
    },
    [actionsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY]: (state: ModelsMemberList.IMemberListState): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
    [actionsMemberList.PERFROM_SET_MEMBER_SEARCH_LIST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFROM_SET_MEMBER_SEARCH_LIST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchList: action.payload.data,
        }
    },

    [actionsMemberList.PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isSelectEmployeeLocalSearch: action.payload.isSelectEmployeeLocalSearch,
            inputEmployeeSource: action.payload.employeeSource
        }
    },

    [actionsMemberList.PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchList: defaultValues.MemberList,
            memberSearchListLocal: defaultValues.MemberList,
        }
    },

    [actionsMemberList.NAVIGATE_TO_MEMBER_SEARCH_SCREEN]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_TO_MEMBER_SEARCH_SCREEN>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isVisiblePopoverAdd: false,
            inputMemberSearch:'',
            inputMemberSearchLocal:''
        }
    },

    [actionsMemberList.NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearch:'',
            inputMemberSearchLocal:''
        }
    },


    // Thunk dispatched by "MemberList" screen. Thunk used to set local search results.
    [actionsMemberList.FILTER_MEMBER_LIST_SEARCH_LOCAL]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.FILTER_MEMBER_LIST_SEARCH_LOCAL>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchListLocal: action.payload.memberList,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
    [actionsMemberList.PERFORM_INPUT_MEMBER_SEARCH]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_INPUT_MEMBER_SEARCH>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearch: action.payload.value,
            isSearchCompleted: false,
        }
    },
    // Thunk dispatched by "MemberList" screen. Thunk dispatched on member search local input changed.
    [actionsMemberList.PERFORM_INPUT_MEMBER_SEARCH_LOCAL]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_INPUT_MEMBER_SEARCH_LOCAL>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearchLocal: action.payload.value,
        }
    },

    // Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetMemberSearchList" started. Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_REQUEST]: (state: ModelsMemberList.IMemberListState, action: Action<void>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchListFetching: true,
            memberSearchListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetMemberSearchList". Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchList: action.payload.memberSearchList,
            memberSearchListCachedDate: action.payload.cachedDate,
            memberSearchListFetching: false,
            memberSearchListError: null,
            isSearchCompleted: true
        }
    },
    [actionsMemberList.PERFORM_RESET_MEMBER_SEARCH_LIST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_RESET_MEMBER_SEARCH_LIST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchList: defaultValues.MemberList
        }
    },

    // Action dispatched on fetch failure in thunk "callGetMemberSearchList". Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
    [actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_MEMBER_SEARCH_LIST_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberSearchListFetching: false,
            memberSearchListError: action.payload.error,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
    [actionsMemberList.PERFORM_MEMBER_SEARCH_LIST_SELECT]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_MEMBER_SEARCH_LIST_SELECT>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearchSelected: action.payload.member,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to show member role picker screen.
    [actionsMemberList.NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberRole: defaultValues.Classifier,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
    [actionsMemberList.PERFORM_MEMBER_ROLE_SELECT]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_MEMBER_ROLE_SELECT>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearch:'',
            inputMemberSearchLocal:'',
            inputMemberRole: action.payload.role,
            memberList: util.memberListAdd(state.memberList, state.inputMemberSearchSelected, action.payload.role, state.currentMode) /* User classifier SALES_TEAM_ROLE. */,
        }
    },
    // Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
    [actionsMemberList.PERFORM_GENERAL_MEMBER_SELECT]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_GENERAL_MEMBER_SELECT>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberList: util.memberListGeneralSelect(state.memberList, action.payload.index) /* User classifier SALES_TEAM_ROLE. */,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to show member list.
    [actionsMemberList.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_TO_MEMBER_LIST_SCREEN>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearch:'',
            inputMemberSearchLocal:''
        }
    },
    [actionsMemberList.NAVIGATE_MEMBER_LIST_SCREEN_BACK]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_MEMBER_LIST_SCREEN_BACK>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isMemberListEdited: false,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to confirm changes in member list.
    [actionsMemberList.PERFORM_SAVE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_SAVE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
            isEditorMode: false,
            isMemberListEdited: true,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk used to delete Member.
    [actionsMemberList.PERFORM_MEMBER_DELETE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_MEMBER_DELETE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberList: util.memberListDelete(state.memberList, action.payload.index),
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk chain used to set item action menu state.
    [actionsMemberList.PERFORM_MEMBER_ACTION_MENU_SWITCH]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_MEMBER_ACTION_MENU_SWITCH>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberList: util.memberActionMenuSwitch(state.memberList, action.payload.id, action.payload.isLeftActionMenuOpen, action.payload.isRightActionMenuOpen) /* TODO Set item action menu state */,
        }
    },

    // Thunk dispatched by "MemberList" screen. 
    [actionsMemberList.NAVIGATE_BACK]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_BACK>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk chain used to show team member screen.
    [actionsMemberList.PERFORM_NAVIGATE_TO_MEMBER_SCREEN]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_NAVIGATE_TO_MEMBER_SCREEN>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "MemberList" screen. Thunk dispatched to reset container state to default values.
    [actionsMemberList.PERFORM_CONTAINER_RESET]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_CONTAINER_RESET>): ModelsMemberList.IMemberListState => {
        return {
            ...ModelsMemberList.initialState.state,
        }
    },

    [actionsMemberList.PERFORM_SAVE_EXECUTE]: (state: ModelsMemberList.IMemberListState, action: Action<void>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListSaveInProgress: true,
            memberListSaveError: null, 
        }
    },

    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST]: (state: ModelsMemberList.IMemberListState, action: Action<void>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            customerModifierIdFetching: true,
            customerModifierIdError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            customerModifierId: action.payload.response.data,
            customerModifierIdCachedDate: action.payload.response.cachedDate,
            customerModifierIdFetching: false,
            customerModifierIdError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            customerModifierIdFetching: false,
            customerModifierIdError: action.payload.error,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPutMemberListUpdate". Thunk dispatched by "MemberList" screen. Fetch put request.
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListUpdate: action.payload.response.data,
            memberListUpdateCachedDate: action.payload.response.cachedDate,
            memberListUpdateFetching: false,
            memberListUpdateError: null,
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
    [actionsMemberList.PERFORM_SAVE_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_SAVE_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListSaveInProgress: false,
            memberListSaveError: action.payload.error,
        }
    },
    // Action dispatched on network thunk chain "callPutMemberListUpdate" started. Thunk dispatched by "MemberList" screen. Fetch put request.
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_REQUEST]: (state: ModelsMemberList.IMemberListState, action: Action<void>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListUpdateFetching: true,
            memberListUpdateError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPutMemberListUpdate". Thunk dispatched by "MemberList" screen. Fetch put request.
    [actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_MEMBER_LIST_UPDATE_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListUpdateFetching: false,
            memberListUpdateError: action.payload.error,
        }
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
    [actionsMemberList.PERFORM_SAVE_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_SAVE_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListSave: action.payload.data,
            memberListSaveInProgress: false,
            memberListSaveError: null,
        }
    },
    // Action dispatched on thunk "callGetDealMemberListRefresh" started. Thunk dispatched by "thunkMemberList".
    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            currentDealMemberListFetching: true,
            currentDealMemberListError: null,
        }
    },

    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            currentDeal: action.payload.response.data,
            currentDealMemberListFetching: false,
            currentDealMemberListError: null,
        }
    },

    [actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            currentDealMemberListFetching: false,
            currentDealMemberListError: action.payload.error,
        }
    },
    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            activityMemberListFetching: true,
            activityMemberListError: null,
        }
    },

    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            activityMemberListFetching: false,
            activityMemberListError: null,
        }
    },

    [actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            activityMemberListFetching: false,
            activityMemberListError: action.payload.error,
        }
    },

    [actionsMemberList.SET_EDITING_PERMISSION_MEMBER_LIST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.SET_EDITING_PERMISSION_MEMBER_LIST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isEditingMemberList: action.payload.isEditingMemberList,
            isEditorEnabled: action.payload.isEditingMemberList
        }
    },

    [actionsMemberList.SET_INFO_BUTTON_FLAG]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.SET_INFO_BUTTON_FLAG>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isProfile: action.payload.flag
        }
    },

    [actionsMemberList.PERFORM_RESET_AND_RETURN]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_RESET_AND_RETURN>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            inputMemberSearch:'',
            inputMemberSearchLocal:''
        }
    },
    [actionsMemberList.GET_SUP_PARAMETERS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.GET_SUP_PARAMETERS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            supParameters: action.payload.value,
        }
    },
    [actionsMemberList.PERFORM_SET_DEAL_CARD_OWNER]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_SET_DEAL_CARD_OWNER>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isDealCardOwner: action.payload.isDealCardOwner,
        }
    },
    [actionsMemberList.SET_LOCAL_SEARCH_FLAG]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.SET_LOCAL_SEARCH_FLAG>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isLocalSearch: action.payload.isLocalSearch,
        }
    },
    [actionsMemberList.PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            memberListSaveError: null,
            customerForActivityError: null,
        }
    },
    [actionsMemberList.PERFORM_SAVE_ACTIVITY_MEMBER_LIST]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_SAVE_ACTIVITY_MEMBER_LIST>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            currentActivity: {
                ...state.currentActivity,
                memberList: state.memberList
            }
        }
    },
    [actionsMemberList.PERFORM_SEARCH]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.PERFORM_SEARCH>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            isValidSearchString: action.payload.isValidSearchString
        }
    },

    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY]: (state: ModelsMemberList.IMemberListState): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST]: (state: ModelsMemberList.IMemberListState): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            customerForActivityFetching: true,
            customerForActivityError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            currentCustomerManaged: action.payload.response.data,
            customerForActivityFetching: false,
            customerForActivityError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
    [actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
            customerForActivityFetching: false,
            customerForActivityError: action.payload.error,
        }
    },

    [actionsMemberList.NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE]: (state: ModelsMemberList.IMemberListState, action: Action<actionsMemberList.NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE>): ModelsMemberList.IMemberListState => {
        return {
            ...state,
        }
    },



}, ModelsMemberList.initialState.state)

export default reducerMemberList
