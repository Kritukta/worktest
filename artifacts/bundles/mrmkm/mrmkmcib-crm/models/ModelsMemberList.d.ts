/**
 * Models for MemberList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Error from "../models/Error";
export interface IMemberListState {
    currentActivity: ModelsScheduler.Activity;
    currentDeal: Models.Deal;
    currentGsz: Models.Gsz;
    currentCustomerManaged: Models.CustomerManaged;
    memberList: Models.MemberList;
    isEditorMode: boolean;
    isExpandedMode: boolean;
    isVisiblePopoverAdd: boolean;
    inputMemberSearch: string;
    inputMemberSearchSelected: ModelsApp.Employee;
    inputMemberRole: ModelsApp.Classifier;
    memberSearchList: Models.MemberList;
    memberSearchListFetching: boolean;
    memberSearchListError: Error | null;
    memberSearchListCachedDate: Date | null;
    currentAgent: Models.Agent;
    memberListSaveInProgress: boolean;
    customerModifierIdFetching: boolean;
    memberListSaveError: Error | null;
    customerModifierIdError: Error | null;
    memberListUpdateError: Error | null;
    customerModifierId: Models.CustomerManaged;
    memberListUpdate: boolean;
    memberListSave: boolean;
    customerModifierIdCachedDate: Date | null;
    memberListUpdateCachedDate: Date | null;
    memberListUpdateFetching: boolean;
    operationUuid: string;
    currentMode: Enums.MemberListMode;
    isSelectEmployeeLocalSearch: boolean;
    memberSearchListLocal: Models.MemberList;
    inputMemberSearchLocal: string;
    inputEmployeeSource: Enums.MemberListEmployeeSource;
    isEditorEnabled: boolean;
    currentDealMemberListFetching: boolean;
    currentDealMemberListError: Error | null;
    isEditingMemberList: boolean;
    isProfile: boolean;
    supParameters: string;
    isMemberListEdited: boolean;
    isDealCardOwner: boolean;
    activityMemberListFetching: boolean;
    activityMemberListError: Error | null;
    customerForActivityFetching: boolean;
    customerForActivityError: Error | null;
    isLocalSearch: boolean;
    isValidSearchString: boolean;
    isSearchCompleted: boolean;
}
export declare const initialState: {
    readonly state: IMemberListState;
};
export interface PERFORM_MEMBER_LIST_REFRESH {
    (currentActivity: ModelsScheduler.Activity, currentDeal: Models.Deal, currentCustomerManaged: Models.CustomerManaged): void;
}
export interface SWAP_CONTEXT {
    (memberList: Models.MemberList): void;
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
    (role: ModelsApp.Classifier): void;
}
export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}
export interface PERFORM_SAVE {
    (): void;
}
export interface PERFORM_MEMBER_DELETE {
    (index: number): void;
}
export interface PERFORM_MEMBER_ACTION_MENU_SWITCH {
    (id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean): void;
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
