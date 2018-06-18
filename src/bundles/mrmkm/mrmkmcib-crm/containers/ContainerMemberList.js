/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkMemberList from '../thunk/ThunkMemberList';
import ViewMemberList from '../components/ViewMemberList';
/*
 * Container "MemberList". Member list screen.
 */
class ContainerMemberList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewMemberList, { testID: 'test-id-container-MemberList', performMemberListRefresh: this.props.performMemberListRefresh, performEdit: this.props.performEdit, performCancel: this.props.performCancel, performPopoverAddShow: this.props.performPopoverAddShow, performPopoverAddHide: this.props.performPopoverAddHide, navigateToMemberSearchScreen: this.props.navigateToMemberSearchScreen, performInputMemberSearch: this.props.performInputMemberSearch, callGetMemberSearchList: this.props.callGetMemberSearchList, performMemberSearchListSelect: this.props.performMemberSearchListSelect, navigateToMemberRolePickerScreen: this.props.navigateToMemberRolePickerScreen, performMemberRoleSelect: this.props.performMemberRoleSelect, navigateToMemberListScreen: this.props.navigateToMemberListScreen, performSave: this.props.performSave, performMemberDelete: this.props.performMemberDelete, performMemberActionMenuSwitch: this.props.performMemberActionMenuSwitch, navigateBack: this.props.navigateBack, performNavigateToMemberScreen: this.props.performNavigateToMemberScreen, performContainerReset: this.props.performContainerReset, performSearch: this.props.performSearch, performCancelSaveMemberListError: this.props.performCancelSaveMemberListError, isValidSearchString: this.props.isValidSearchString, isSearchCompleted: this.props.isSearchCompleted, customerForActivityError: this.props.customerForActivityError, customerForActivityFetching: this.props.customerForActivityFetching, isEditorEnabled: this.props.isEditorEnabled, currentMode: this.props.currentMode, memberListSaveInProgress: this.props.memberListSaveInProgress, memberListSaveError: this.props.memberListSaveError, navigateToSelectMemberIsGeneralScreen: this.props.navigateToSelectMemberIsGeneralScreen, currentActivity: this.props.currentActivity, currentDeal: this.props.currentDeal, currentGsz: this.props.currentGsz, currentCustomerManaged: this.props.currentCustomerManaged, memberList: this.props.memberList, isEditorMode: this.props.isEditorMode, isExpandedMode: this.props.isExpandedMode, isVisiblePopoverAdd: this.props.isVisiblePopoverAdd, inputMemberSearch: this.props.inputMemberSearch, inputMemberSearchSelected: this.props.inputMemberSearchSelected, inputMemberRole: this.props.inputMemberRole, memberSearchList: this.props.memberSearchList, memberSearchListFetching: this.props.memberSearchListFetching, isSelectEmployeeLocalSearch: this.props.isSelectEmployeeLocalSearch, memberSearchListError: this.props.memberSearchListError, memberSearchListCachedDate: this.props.memberSearchListCachedDate, navigateMemberListScreenBack: this.props.navigateMemberListScreenBack, performSelectGeneralMember: this.props.performSelectGeneralMember, swapContextMemberListToActivity: this.props.swapContextMemberListToActivity, navigateSearchMemberListScreenBack: this.props.navigateSearchMemberListScreenBack, memberSearchListLocal: this.props.memberSearchListLocal, navigateToMemberSearchLocalScreen: this.props.navigateToMemberSearchLocalScreen, inputMemberSearchLocal: this.props.inputMemberSearchLocal, performInputMemberSearchLocal: this.props.performInputMemberSearchLocal, inputEmployeeSource: this.props.inputEmployeeSource, performInputEmployeeSource: this.props.performInputEmployeeSource, performInputEmployeeSourceActivity: this.props.performInputEmployeeSourceActivity, isEditingMemberList: this.props.isEditingMemberList, performResetAndReturn: this.props.performResetAndReturn, isDealCardOwner: this.props.isDealCardOwner, navigateBackFromMembersSearchPage: this.props.navigateBackFromMembersSearchPage, isLocalSearch: this.props.isLocalSearch, classifierDictionary: this.props.classifierDictionary }));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        swapContextMemberListToActivity: (memberList) => {
            dispatch(thunkMemberList.swapContextMemberListToActivity(memberList));
        },
        performMemberListRefresh: (currentActivity, currentDeal, currentCustomerManaged, currentGsz, currentAgent, isExpandedMode, currentMode) => {
            dispatch(thunkMemberList.performMemberListRefresh(currentActivity, currentDeal, currentCustomerManaged, currentGsz, currentAgent, isExpandedMode, currentMode));
        },
        performEdit: () => {
            dispatch(thunkMemberList.performEdit());
        },
        performCancel: () => {
            dispatch(thunkMemberList.performCancel());
        },
        performPopoverAddShow: () => {
            dispatch(thunkMemberList.performPopoverAddShow());
        },
        performPopoverAddHide: () => {
            dispatch(thunkMemberList.performPopoverAddHide());
        },
        navigateToMemberSearchScreen: () => {
            dispatch(thunkMemberList.navigateToMemberSearchScreen());
        },
        performInputMemberSearch: (value) => {
            dispatch(thunkMemberList.performInputMemberSearch(value));
        },
        performInputMemberSearchLocal: (value) => {
            dispatch(thunkMemberList.performInputMemberSearchLocal(value));
        },
        callGetMemberSearchList: () => {
            dispatch(thunkMemberList.callGetMemberSearchList());
        },
        performMemberSearchListSelect: (member) => {
            dispatch(thunkMemberList.performMemberSearchListSelect(member));
        },
        navigateToMemberRolePickerScreen: () => {
            dispatch(thunkMemberList.navigateToMemberRolePickerScreen());
        },
        performMemberRoleSelect: (role) => {
            dispatch(thunkMemberList.performMemberRoleSelect(role));
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkMemberList.navigateToMemberListScreen());
        },
        navigateToMemberSearchLocalScreen: (employeeSource, isSelectEmployeeLocalSearch) => {
            dispatch(thunkMemberList.navigateToMemberSearchLocalScreen(employeeSource, isSelectEmployeeLocalSearch));
        },
        performSave: () => {
            dispatch(thunkMemberList.performSave());
        },
        performMemberDelete: (index) => {
            dispatch(thunkMemberList.performMemberDelete(index));
        },
        performMemberActionMenuSwitch: (id, isLeftActionMenuOpen, isRightActionMenuOpen) => {
            dispatch(thunkMemberList.performMemberActionMenuSwitch(id, isLeftActionMenuOpen, isRightActionMenuOpen));
        },
        navigateBack: () => {
            dispatch(thunkMemberList.navigateBack());
        },
        performNavigateToMemberScreen: (memberId) => {
            dispatch(thunkMemberList.performNavigateToMemberScreen(memberId));
        },
        performInputEmployeeSource: (inputEmployeeSource) => {
            dispatch(thunkMemberList.performInputEmployeeSource(inputEmployeeSource));
        },
        performInputEmployeeSourceActivity: () => {
            dispatch(thunkMemberList.performInputEmployeeSourceActivity());
        },
        performContainerReset: () => {
            dispatch(thunkMemberList.performContainerReset());
        },
        navigateMemberListScreenBack: () => {
            dispatch(thunkMemberList.navigateMemberListScreenBack());
        },
        navigateSearchMemberListScreenBack: () => {
            dispatch(thunkMemberList.navigateSearchMemberListScreenBack());
        },
        performSelectGeneralMember: (index) => {
            dispatch(thunkMemberList.performSelectGeneralMember(index));
        },
        navigateToSelectMemberIsGeneralScreen: () => {
            dispatch(thunkMemberList.navigateToSelectMemberIsGeneralScreen());
        },
        performResetAndReturn: () => {
            dispatch(thunkMemberList.performResetAndReturn());
        },
        navigateBackFromMembersSearchPage: () => {
            dispatch(thunkMemberList.navigateBackFromMembersSearchPage());
        },
        performSearch: () => {
            dispatch(thunkMemberList.performSearch());
        },
        performCancelSaveMemberListError: () => {
            dispatch(thunkMemberList.performCancelSaveMemberListError());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerMemberList);
//# sourceMappingURL=ContainerMemberList.js.map