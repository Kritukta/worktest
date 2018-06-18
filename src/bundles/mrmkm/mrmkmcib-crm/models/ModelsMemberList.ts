/**
 * Models for MemberList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Error from "../models/Error"



// TODO Describe models used in MemberList actions and thunks.


const defaultState = {
    get state(): IMemberListState {
        return {
            currentActivity: defaultValues.Activity,  // State parameter displayed in "MemberList" screen. CurrentActivity id is not equals '' if occasion list opened for Activity.
            currentDeal: defaultValues.Deal,  // State parameter displayed in "MemberList" screen. CurrentDeal id is not equals '' if occasion list opened for Deal.
            currentGsz: defaultValues.Gsz,  // State parameter displayed in "MemberList" screen. CurrentGsz id is not equals '' if occasion list opened for Gsz.
            currentCustomerManaged: defaultValues.CustomerManaged,  // State parameter displayed in "MemberList" screen. 
            memberList: defaultValues.MemberList,  // State parameter displayed in "MemberList" screen. 
            isEditorMode: false,  // State parameter displayed in "MemberList" screen.
            isExpandedMode: false,
            isVisiblePopoverAdd: false,  // State parameter displayed in "MemberList" screen. 
            inputMemberSearch: '',  // State parameter displayed in "MemberList" screen. 
            inputMemberSearchSelected: defaultValues.Employee,  // State parameter displayed in "MemberList" screen. 
            inputMemberRole: defaultValues.Classifier,  // State parameter displayed in "MemberList" screen. 
            memberSearchList: defaultValues.MemberList,  // Fetch result for "callGetMemberSearchList" thunk.
            memberSearchListFetching: false,  // Fetching indicator for network thunk chain "callGetMemberSearchList".
            memberSearchListError: null,  // Network error info for thunk chain "callGetMemberSearchList".
            memberSearchListCachedDate: null,  // Response data cache date for network thunk chain "callGetMemberSearchList".

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
            supParameters:'',
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
        }
    }
}

export interface IMemberListState {

    currentActivity: ModelsScheduler.Activity,  // State parameter displayed in "MemberList" screen. CurrentActivity id is not equals '' if occasion list opened for Activity.
    currentDeal: Models.Deal,  // State parameter displayed in "MemberList" screen. CurrentDeal id is not equals '' if occasion list opened for Deal.
    currentGsz: Models.Gsz,  // State parameter displayed in "MemberList" screen. CurrentGsz id is not equals '' if occasion list opened for Gsz.
    currentCustomerManaged: Models.CustomerManaged,  // State parameter displayed in "MemberList" screen. 
    memberList: Models.MemberList,  // State parameter displayed in "MemberList" screen. 
    isEditorMode: boolean,  // State parameter displayed in "MemberList" screen.
    isExpandedMode: boolean, // wide screen mode in "MemberList" screen.
    isVisiblePopoverAdd: boolean,  // State parameter displayed in "MemberList" screen. 
    inputMemberSearch: string,  // State parameter displayed in "MemberList" screen. 
    inputMemberSearchSelected: ModelsApp.Employee,  // State parameter displayed in "MemberList" screen. 
    inputMemberRole: ModelsApp.Classifier,  // State parameter displayed in "MemberList" screen. 
    memberSearchList: Models.MemberList,  // Fetch result for "callGetMemberSearchList" thunk.
    memberSearchListFetching: boolean,  // Fetching indicator for network thunk chain "callGetMemberSearchList".
    memberSearchListError: Error | null,  // Network error info for thunk chain "callGetMemberSearchList".
    memberSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetMemberSearchList".

    currentAgent: Models.Agent, //Представитель, команду которого рассматривают как источник данных в компоненте
    memberListSaveInProgress: boolean,
    customerModifierIdFetching: boolean,
    memberListSaveError: Error | null, 
    customerModifierIdError: Error | null, 
    memberListUpdateError: Error | null, 
    customerModifierId: Models.CustomerManaged,
    memberListUpdate: boolean,
    memberListSave: boolean,
    customerModifierIdCachedDate: Date | null,
    memberListUpdateCachedDate: Date | null,
    memberListUpdateFetching: boolean,
    operationUuid: string,
    currentMode: Enums.MemberListMode,
    isSelectEmployeeLocalSearch: boolean,
    memberSearchListLocal: Models.MemberList,
    inputMemberSearchLocal: string,
    inputEmployeeSource: Enums.MemberListEmployeeSource,
    isEditorEnabled: boolean,
    currentDealMemberListFetching: boolean,
    currentDealMemberListError: Error | null,
    isEditingMemberList: boolean,
    isProfile:boolean,
    supParameters: string,
    isMemberListEdited: boolean,
    isDealCardOwner: boolean,
    // TODO Describe MemberList reducer state.
    activityMemberListFetching: boolean,
    activityMemberListError: Error | null,
    customerForActivityFetching: boolean,
    customerForActivityError: Error | null,
    isLocalSearch: boolean,
    isValidSearchString: boolean,
    isSearchCompleted: boolean,
}

export const initialState = {
    get state(): IMemberListState {
        return defaultState.state
    }
}


export interface PERFORM_MEMBER_LIST_REFRESH {
    (currentActivity: ModelsScheduler.Activity, currentDeal: Models.Deal, currentCustomerManaged: Models.CustomerManaged): void;
}

export interface SWAP_CONTEXT {
    (memberList: Models.MemberList,): void;
}

export interface PERFORM_EDIT {
    (): void;
}

export interface PERFORM_CANCEL {
    (): void;
}

export interface PERFORM_POPOVER_ADD_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_ADD_HIDE {
    (): void;
}

export interface NAVIGATE_TO_MEMBER_SEARCH_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN {
    (employeeSource: Enums.MemberListEmployeeSource, isSelectEmployeeLocalSearch: boolean): void;
}

export interface NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK {
    (): void;
}

export interface PERFORM_INPUT_MEMBER_SEARCH {
    (value: string): void;
}

export interface CALL_GET_MEMBER_SEARCH_LIST {
    (): void;
}

export interface PERFORM_MEMBER_SEARCH_LIST_SELECT {
    (member: ModelsApp.Employee): void;
}

export interface NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN {
    (): void;
}

export interface PERFORM_MEMBER_ROLE_SELECT {
    (role: ModelsApp.Classifier,): void;
}

export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}

export interface PERFORM_SAVE {
    (): void;
}

export interface PERFORM_MEMBER_DELETE {
    (index: number,): void;
}

export interface PERFORM_MEMBER_ACTION_MENU_SWITCH {
    (id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean,): void;
}

export interface NAVIGATE_BACK {
    (): void;
}

export interface PERFORM_NAVIGATE_TO_MEMBER_SCREEN {
    (memberId: string): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface NAVIGATE_GSZ_ACTIVITY_INCLUDE_EXCLUDE_BACK {
    (): void;
}

export interface NAVIGATE_MEMBER_LIST_SCREEN_BACK {
    (): void;
}

export interface NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN {
    (): void;
}

export interface SWAP_CONTEXT_MEMBER_LIST_TO_ACTIVITY {
    (memberList: Models.MemberList): void;
}

export interface PERFORM_INPUT_MEMBER_SEARCH_LOCAL {
    (value: string): void;
}

export interface PERFORM_INPUT_EMPLOYEE_SOURCE {
    (value: Enums.MemberListEmployeeSource): void;
}

export interface PERFORM_INPUT_EMPLOYEE_SOURCE_ACTYVITY {
    (): void;
}

export interface PERFORM_GENERAL_MEMBER_SELECT {
    (index: number): void;
}

export interface PERFORM_RESET_AND_RETURN {
    (): void;
}

export interface PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR {
    (): void;
}

export interface PERFORM_SEARCH {
    (): void;
}

export interface NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE {
    (): void;
}
