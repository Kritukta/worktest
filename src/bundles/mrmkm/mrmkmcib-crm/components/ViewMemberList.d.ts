import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import * as ModelsMemberList from "../models/ModelsMemberList";
import Error from "../models/Error";
export interface ITeamMemberAvatarProps extends ModelsApp.Employee {
    testID: string;
}
export interface ITeamMemberInfoProps {
    data: ModelsApp.Employee;
    props: IProps;
    testID: string;
}
export interface ISelectClassifierProps {
    performSelect: {
        (value: ModelsApp.Classifier): void;
    };
    classifierList: ModelsApp.ClassifierList;
    testID: string;
    selectedCode: string | undefined;
}
export interface IProps {
    performMemberListRefresh: ModelsMemberList.PERFORM_MEMBER_LIST_REFRESH;
    performEdit: ModelsMemberList.PERFORM_EDIT;
    performCancel: ModelsMemberList.PERFORM_CANCEL;
    performPopoverAddShow: ModelsMemberList.PERFORM_POPOVER_ADD_SHOW;
    performPopoverAddHide: ModelsMemberList.PERFORM_POPOVER_ADD_HIDE;
    navigateToMemberSearchScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_SEARCH_SCREEN;
    navigateToMemberSearchLocalScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN;
    performInputMemberSearch: ModelsMemberList.PERFORM_INPUT_MEMBER_SEARCH;
    callGetMemberSearchList: ModelsMemberList.CALL_GET_MEMBER_SEARCH_LIST;
    performMemberSearchListSelect: ModelsMemberList.PERFORM_MEMBER_SEARCH_LIST_SELECT;
    navigateToMemberRolePickerScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN;
    performMemberRoleSelect: ModelsMemberList.PERFORM_MEMBER_ROLE_SELECT;
    navigateToMemberListScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    performSave: ModelsMemberList.PERFORM_SAVE;
    performMemberDelete: ModelsMemberList.PERFORM_MEMBER_DELETE;
    performMemberActionMenuSwitch: ModelsMemberList.PERFORM_MEMBER_ACTION_MENU_SWITCH;
    navigateBack: ModelsMemberList.NAVIGATE_BACK;
    performNavigateToMemberScreen: ModelsMemberList.PERFORM_NAVIGATE_TO_MEMBER_SCREEN;
    performContainerReset: ModelsMemberList.PERFORM_CONTAINER_RESET;
    currentActivity: ModelsScheduler.Activity;
    currentDeal: Models.Deal;
    currentGsz: Models.Gsz;
    currentCustomerManaged: Models.CustomerManaged;
    memberList: Models.MemberList;
    isEditorMode: boolean;
    isVisiblePopoverAdd: boolean;
    isEditorEnabled: boolean;
    isExpandedMode: boolean;
    inputMemberSearch: string;
    isValidSearchString: boolean;
    isSearchCompleted: boolean;
    inputMemberSearchSelected: ModelsApp.Employee;
    inputMemberRole: ModelsApp.Classifier;
    memberSearchList: Models.MemberList;
    memberSearchListFetching: boolean;
    memberSearchListError: Error | null;
    memberSearchListCachedDate: Date | null;
    inputEmployeeSource: Enums.MemberListEmployeeSource;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    navigateMemberListScreenBack: ModelsMemberList.NAVIGATE_MEMBER_LIST_SCREEN_BACK;
    swapContextMemberListToActivity: ModelsMemberList.SWAP_CONTEXT_MEMBER_LIST_TO_ACTIVITY;
    currentMode: Enums.MemberListMode;
    navigateSearchMemberListScreenBack: ModelsMemberList.NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK;
    performInputMemberSearchLocal: ModelsMemberList.PERFORM_INPUT_MEMBER_SEARCH_LOCAL;
    memberSearchListLocal: Models.MemberList;
    performInputEmployeeSource: ModelsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE;
    performInputEmployeeSourceActivity: ModelsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE_ACTYVITY;
    inputMemberSearchLocal: string;
    isSelectEmployeeLocalSearch: boolean;
    navigateToSelectMemberIsGeneralScreen: ModelsMemberList.NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN;
    performSelectGeneralMember: ModelsMemberList.PERFORM_GENERAL_MEMBER_SELECT;
    memberListSaveInProgress: boolean;
    memberListSaveError: Error | null;
    isEditingMemberList: boolean;
    customerForActivityError: Error | null;
    customerForActivityFetching: boolean;
    testID: string;
    isDealCardOwner: boolean;
    isLocalSearch: boolean;
    performResetAndReturn: ModelsMemberList.PERFORM_RESET_AND_RETURN;
    performCancelSaveMemberListError: ModelsMemberList.PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR;
    performSearch: ModelsMemberList.PERFORM_SEARCH;
    navigateBackFromMembersSearchPage: ModelsMemberList.NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE;
}
declare const ViewMemberList: React.StatelessComponent<IProps>;
export default ViewMemberList;
