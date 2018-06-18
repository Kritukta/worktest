/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import * as thunkMemberList from '../thunk/ThunkMemberList'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsMemberList from "../models/ModelsMemberList"
import Error from "../models/Error"

import ViewMemberList from '../components/ViewMemberList'
import * as ModelState from "../models/Models"


/*
 * Container "MemberList". Member list screen.
 */
class ContainerMemberList extends React.Component<IMemberListProps, any> {

    constructor(props: IMemberListProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewMemberList testID={'test-id-container-MemberList'}

                            performMemberListRefresh={this.props.performMemberListRefresh}
                            performEdit={this.props.performEdit}
                            performCancel={this.props.performCancel}
                            performPopoverAddShow={this.props.performPopoverAddShow}
                            performPopoverAddHide={this.props.performPopoverAddHide}
                            navigateToMemberSearchScreen={this.props.navigateToMemberSearchScreen}
                            performInputMemberSearch={this.props.performInputMemberSearch}
                            callGetMemberSearchList={this.props.callGetMemberSearchList}
                            performMemberSearchListSelect={this.props.performMemberSearchListSelect}
                            navigateToMemberRolePickerScreen={this.props.navigateToMemberRolePickerScreen}
                            performMemberRoleSelect={this.props.performMemberRoleSelect}
                            navigateToMemberListScreen={this.props.navigateToMemberListScreen}
                            performSave={this.props.performSave}
                            performMemberDelete={this.props.performMemberDelete}
                            performMemberActionMenuSwitch={this.props.performMemberActionMenuSwitch}
                            navigateBack={this.props.navigateBack}
                            performNavigateToMemberScreen={this.props.performNavigateToMemberScreen}
                            performContainerReset={this.props.performContainerReset}
                            performSearch={this.props.performSearch}
                            performCancelSaveMemberListError={this.props.performCancelSaveMemberListError}
                            isValidSearchString={this.props.isValidSearchString}
                            isSearchCompleted={this.props.isSearchCompleted}
                            customerForActivityError={this.props.customerForActivityError}
                            customerForActivityFetching={this.props.customerForActivityFetching}

                            isEditorEnabled = {this.props.isEditorEnabled}
                            currentMode = {this.props.currentMode}
                            memberListSaveInProgress = {this.props.memberListSaveInProgress}
                            memberListSaveError = {this.props.memberListSaveError}
                            navigateToSelectMemberIsGeneralScreen = {this.props.navigateToSelectMemberIsGeneralScreen}
                            currentActivity={this.props.currentActivity}
                            currentDeal={this.props.currentDeal}
                            currentGsz={this.props.currentGsz}
                            currentCustomerManaged={this.props.currentCustomerManaged}
                            memberList={this.props.memberList}
                            isEditorMode={this.props.isEditorMode}
                            isExpandedMode={this.props.isExpandedMode}
                            isVisiblePopoverAdd={this.props.isVisiblePopoverAdd}
                            inputMemberSearch={this.props.inputMemberSearch}
                            inputMemberSearchSelected={this.props.inputMemberSearchSelected}
                            inputMemberRole={this.props.inputMemberRole}
                            memberSearchList={this.props.memberSearchList}
                            memberSearchListFetching={this.props.memberSearchListFetching}
                            isSelectEmployeeLocalSearch={this.props.isSelectEmployeeLocalSearch}
                            memberSearchListError={this.props.memberSearchListError}
                            memberSearchListCachedDate={this.props.memberSearchListCachedDate}
                            navigateMemberListScreenBack={this.props.navigateMemberListScreenBack}
                            performSelectGeneralMember={this.props.performSelectGeneralMember}
                            swapContextMemberListToActivity={this.props.swapContextMemberListToActivity}
                            navigateSearchMemberListScreenBack={this.props.navigateSearchMemberListScreenBack}
                            memberSearchListLocal={this.props.memberSearchListLocal}
                            navigateToMemberSearchLocalScreen={this.props.navigateToMemberSearchLocalScreen}
                            inputMemberSearchLocal={this.props.inputMemberSearchLocal}
                            performInputMemberSearchLocal={this.props.performInputMemberSearchLocal}
                            inputEmployeeSource={this.props.inputEmployeeSource}
                            performInputEmployeeSource={this.props.performInputEmployeeSource}
                            performInputEmployeeSourceActivity={this.props.performInputEmployeeSourceActivity}
                            isEditingMemberList={this.props.isEditingMemberList}
                            performResetAndReturn={this.props.performResetAndReturn}
                            isDealCardOwner={this.props.isDealCardOwner}
                            navigateBackFromMembersSearchPage={this.props.navigateBackFromMembersSearchPage}
                            isLocalSearch={this.props.isLocalSearch}
                            classifierDictionary={this.props.classifierDictionary}>
            </ViewMemberList>
        )
    }
}

export interface IStateProps {

    currentActivity: ModelsScheduler.Activity,
    currentDeal: Models.Deal,
    currentCustomerManaged: Models.CustomerManaged,
    memberList: Models.MemberList,
    isEditorMode: boolean,
    isExpandedMode: boolean,
    isVisiblePopoverAdd: boolean,
    inputMemberSearch: string,
    inputMemberSearchSelected: ModelsApp.Employee,
    inputMemberRole: ModelsApp.Classifier,
    memberSearchList: Models.MemberList,
    memberSearchListFetching: boolean,
    memberSearchListError: Error | null,
    memberSearchListCachedDate: Date | null,
    currentGsz: Models.Gsz,

    currentMode: Enums.MemberListMode,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    memberSearchListLocal: Models.MemberList,
    inputEmployeeSource: Enums.MemberListEmployeeSource,
    inputMemberSearchLocal: string,
    isSelectEmployeeLocalSearch: boolean,
    isSearchCompleted: boolean,

    isEditorEnabled: boolean,
    memberListSaveInProgress: boolean,
    memberListSaveError: Error | null,
    isEditingMemberList: boolean,
    customerForActivityError: Error | null,
    customerForActivityFetching: boolean,
    isDealCardOwner: boolean,
    isLocalSearch: boolean,
    isValidSearchString: boolean,
}

export interface IDispatchProps {
    performMemberListRefresh: ModelsMemberList.PERFORM_MEMBER_LIST_REFRESH,
    performEdit: ModelsMemberList.PERFORM_EDIT,
    performCancel: ModelsMemberList.PERFORM_CANCEL,
    performPopoverAddShow: ModelsMemberList.PERFORM_POPOVER_ADD_SHOW,
    performPopoverAddHide: ModelsMemberList.PERFORM_POPOVER_ADD_HIDE,
    navigateToMemberSearchScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_SEARCH_SCREEN,
    performInputMemberSearch: ModelsMemberList.PERFORM_INPUT_MEMBER_SEARCH,
    callGetMemberSearchList: ModelsMemberList.CALL_GET_MEMBER_SEARCH_LIST,
    performMemberSearchListSelect: ModelsMemberList.PERFORM_MEMBER_SEARCH_LIST_SELECT,
    navigateToMemberRolePickerScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN,
    performMemberRoleSelect: ModelsMemberList.PERFORM_MEMBER_ROLE_SELECT,
    navigateToMemberListScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performSave: ModelsMemberList.PERFORM_SAVE,
    performMemberDelete: ModelsMemberList.PERFORM_MEMBER_DELETE,
    performMemberActionMenuSwitch: ModelsMemberList.PERFORM_MEMBER_ACTION_MENU_SWITCH,
    navigateBack: ModelsMemberList.NAVIGATE_BACK,
    performNavigateToMemberScreen: ModelsMemberList.PERFORM_NAVIGATE_TO_MEMBER_SCREEN,
    performContainerReset: ModelsMemberList.PERFORM_CONTAINER_RESET,
    navigateMemberListScreenBack: ModelsMemberList.NAVIGATE_MEMBER_LIST_SCREEN_BACK,
    swapContextMemberListToActivity: ModelsMemberList.SWAP_CONTEXT_MEMBER_LIST_TO_ACTIVITY,
    navigateSearchMemberListScreenBack: ModelsMemberList.NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK,
    navigateToMemberSearchLocalScreen: ModelsMemberList.NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN,
    performInputMemberSearchLocal: ModelsMemberList.PERFORM_INPUT_MEMBER_SEARCH_LOCAL,
    performInputEmployeeSource: ModelsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE,
    performInputEmployeeSourceActivity:  ModelsMemberList.PERFORM_INPUT_EMPLOYEE_SOURCE_ACTYVITY,
    navigateToSelectMemberIsGeneralScreen: ModelsMemberList.NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN,
    performSelectGeneralMember: ModelsMemberList.PERFORM_GENERAL_MEMBER_SELECT,
    performResetAndReturn:  ModelsMemberList.PERFORM_RESET_AND_RETURN,
    performCancelSaveMemberListError: ModelsMemberList.PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR,
    navigateBackFromMembersSearchPage: ModelsMemberList.NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE,
    performSearch: ModelsMemberList.PERFORM_SEARCH,
}

export type IMemberListProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        currentActivity: state.user.mrmkmcibCRM.reducerMemberList.currentActivity,
        currentDeal: state.user.mrmkmcibCRM.reducerMemberList.currentDeal,
        currentGsz: state.user.mrmkmcibCRM.reducerMemberList.currentGsz,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerMemberList.currentCustomerManaged,

        memberList: state.user.mrmkmcibCRM.reducerMemberList.memberList,
        isEditorMode: state.user.mrmkmcibCRM.reducerMemberList.isEditorMode,
        isExpandedMode: state.user.mrmkmcibCRM.reducerMemberList.isExpandedMode,
        isVisiblePopoverAdd: state.user.mrmkmcibCRM.reducerMemberList.isVisiblePopoverAdd,
        inputMemberSearch: state.user.mrmkmcibCRM.reducerMemberList.inputMemberSearch,
        inputMemberSearchLocal: state.user.mrmkmcibCRM.reducerMemberList.inputMemberSearchLocal,
        memberSearchListLocal: state.user.mrmkmcibCRM.reducerMemberList.memberSearchListLocal,
        inputMemberSearchSelected: state.user.mrmkmcibCRM.reducerMemberList.inputMemberSearchSelected,
        inputMemberRole: state.user.mrmkmcibCRM.reducerMemberList.inputMemberRole,
        memberSearchList: state.user.mrmkmcibCRM.reducerMemberList.memberSearchList,
        memberSearchListFetching: state.user.mrmkmcibCRM.reducerMemberList.memberSearchListFetching,
        memberSearchListError: state.user.mrmkmcibCRM.reducerMemberList.memberSearchListError,
        memberSearchListCachedDate: state.user.mrmkmcibCRM.reducerMemberList.memberSearchListCachedDate,
        isValidSearchString: state.user.mrmkmcibCRM.reducerMemberList.isValidSearchString,
        isSearchCompleted: state.user.mrmkmcibCRM.reducerMemberList.isSearchCompleted,

        memberListSaveInProgress: state.user.mrmkmcibCRM.reducerMemberList.memberListSaveInProgress,
        memberListSaveError: state.user.mrmkmcibCRM.reducerMemberList.memberListSaveError,
        customerForActivityError: state.user.mrmkmcibCRM.reducerMemberList.customerForActivityError,
        customerForActivityFetching: state.user.mrmkmcibCRM.reducerMemberList.customerForActivityFetching,

        isEditorEnabled: state.user.mrmkmcibCRM.reducerMemberList.isEditorEnabled,
        currentMode: state.user.mrmkmcibCRM.reducerMemberList.currentMode,
        inputEmployeeSource: state.user.mrmkmcibCRM.reducerMemberList.inputEmployeeSource,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        isSelectEmployeeLocalSearch: state.user.mrmkmcibCRM.reducerMemberList.isSelectEmployeeLocalSearch,
        isEditingMemberList: state.user.mrmkmcibCRM.reducerMemberList.isEditingMemberList,
        isDealCardOwner: state.user.mrmkmcibCRM.reducerMemberList.isDealCardOwner,
        isLocalSearch: state.user.mrmkmcibCRM.reducerMemberList.isLocalSearch,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        swapContextMemberListToActivity:(memberList: Models.MemberList)=>
        {
            dispatch(thunkMemberList.swapContextMemberListToActivity(memberList))
        },
        performMemberListRefresh: (currentActivity: ModelsScheduler.Activity, currentDeal: Models.Deal, currentCustomerManaged: Models.CustomerManaged, currentGsz: Models.Gsz, currentAgent: Models.Agent,isExpandedMode : boolean, currentMode: Enums.MemberListMode) => {
            dispatch(thunkMemberList.performMemberListRefresh(currentActivity, currentDeal, currentCustomerManaged, currentGsz, currentAgent, isExpandedMode, currentMode))
        },
        performEdit: () => {
            dispatch(thunkMemberList.performEdit())
        },
        performCancel: () => {
            dispatch(thunkMemberList.performCancel())
        },
        performPopoverAddShow: () => {
            dispatch(thunkMemberList.performPopoverAddShow())
        },
        performPopoverAddHide: () => {
            dispatch(thunkMemberList.performPopoverAddHide())
        },
        navigateToMemberSearchScreen: () => {
            dispatch(thunkMemberList.navigateToMemberSearchScreen())
        },
        performInputMemberSearch: (value: string) => {
            dispatch(thunkMemberList.performInputMemberSearch(value))
        },
        performInputMemberSearchLocal: (value: string) => {
            dispatch(thunkMemberList.performInputMemberSearchLocal(value))
        },
        callGetMemberSearchList: () => {
            dispatch(thunkMemberList.callGetMemberSearchList())
        },
        performMemberSearchListSelect: (member: ModelsApp.Employee) => {
            dispatch(thunkMemberList.performMemberSearchListSelect(member))
        },
        navigateToMemberRolePickerScreen: () => {
            dispatch(thunkMemberList.navigateToMemberRolePickerScreen())
        },
        performMemberRoleSelect: (role: ModelsApp.Classifier,) => {
            dispatch(thunkMemberList.performMemberRoleSelect(role,))
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkMemberList.navigateToMemberListScreen())
        },
        navigateToMemberSearchLocalScreen: (employeeSource: Enums.MemberListEmployeeSource, isSelectEmployeeLocalSearch: boolean) => {
            dispatch(thunkMemberList.navigateToMemberSearchLocalScreen(employeeSource,isSelectEmployeeLocalSearch))
        },
        performSave: () => {
            dispatch(thunkMemberList.performSave())
        },
        performMemberDelete: (index: number,) => {
            dispatch(thunkMemberList.performMemberDelete(index,))
        },
        performMemberActionMenuSwitch: (id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean,) => {
            dispatch(thunkMemberList.performMemberActionMenuSwitch(id, isLeftActionMenuOpen, isRightActionMenuOpen,))
        },
        navigateBack: () => {
            dispatch(thunkMemberList.navigateBack())
        },
        performNavigateToMemberScreen: (memberId: string) => {
            dispatch(thunkMemberList.performNavigateToMemberScreen(memberId))
        },
        performInputEmployeeSource: (inputEmployeeSource: Enums.MemberListEmployeeSource) => {
            dispatch(thunkMemberList.performInputEmployeeSource(inputEmployeeSource))
        },
        performInputEmployeeSourceActivity: () => {
            dispatch(thunkMemberList.performInputEmployeeSourceActivity())
        },
        performContainerReset: () => {
            dispatch(thunkMemberList.performContainerReset())
        },
        navigateMemberListScreenBack: () => {
            dispatch(thunkMemberList.navigateMemberListScreenBack())
        },
        navigateSearchMemberListScreenBack: () => {
            dispatch(thunkMemberList.navigateSearchMemberListScreenBack())
        },
        performSelectGeneralMember: (index: number) => {
            dispatch(thunkMemberList.performSelectGeneralMember(index))
        },
        navigateToSelectMemberIsGeneralScreen: () => {
            dispatch(thunkMemberList.navigateToSelectMemberIsGeneralScreen())
        },
        performResetAndReturn: () => {
            dispatch(thunkMemberList.performResetAndReturn())
        },
        navigateBackFromMembersSearchPage: () => {
            dispatch(thunkMemberList.navigateBackFromMembersSearchPage())
        },
        performSearch: () => {
            dispatch(thunkMemberList.performSearch())
        },
        performCancelSaveMemberListError: () => {
            dispatch(thunkMemberList.performCancelSaveMemberListError())
        },

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerMemberList)