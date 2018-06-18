/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkGSZ from '../thunk/ThunkGSZ';
import * as thunkDeal from '../thunk/ThunkDeal';
import * as thunkEmployee from '../thunk/ThunkEmployee';
import { navigateToCustomerScreen } from "mrmkmcib-directory";
import { Enums } from '../Enums';
import ViewEmployee from '../components/ViewEmployee';
/*
 * Container "Employee". Employee card screen.
 */
class ContainerEmployee extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewEmployee, { testID: 'test-id-container-Employee', performPopoverChiefHide: this.props.performPopoverChiefHide, performPopoverCuratorHide: this.props.performPopoverCuratorHide, performSendEmail: this.props.performSendEmail, performSchedulerOpen: this.props.performSchedulerOpen, performPopoverPersonListHide: this.props.performPopoverPersonListHide, performFindPeople: this.props.performFindPeople, navigateToEmployeeScreen: this.props.navigateToEmployeeScreen, navigateToCustomerListScreen: this.props.navigateToCustomerListScreen, performRefresh: this.props.performRefresh, refresh_callGetEmployee: this.props.refresh_callGetEmployee, callGetCustomerList: this.props.callGetCustomerList, callGetSubordinateList: this.props.callGetSubordinateList, navigateBack: this.props.navigateBack, navigateEmployeeScreenBackToDeal: this.props.navigateEmployeeScreenBackToDeal, navigateEmployeeScreenBackToDealAgreement: this.props.navigateEmployeeScreenBackToDealAgreement, navigateBackEmployee: this.props.navigateBackEmployee, performPopoverSubordinateShow: this.props.performPopoverSubordinateShow, performPopoverSubordinateHide: this.props.performPopoverSubordinateHide, performContainerReset: this.props.performContainerReset, performCancelRefreshError: this.props.performCancelRefreshError, performCancelSubordinateListError: this.props.performCancelSubordinateListError, performCancelCustomerListError: this.props.performCancelCustomerListError, performCustomerOpen: this.props.performCustomerOpen, performCustomerOpenWithResetPanel: this.props.performCustomerOpenWithResetPanel, currentMode: this.props.currentMode, employeeNavigationHistory: this.props.employeeNavigationHistory, performNavigateToAddressBookEmployee: this.props.performNavigateToAddressBookEmployee, isExtendedMode: this.props.isExtendedMode, currentEmployeeId: this.props.currentEmployeeId, currentEmployee: this.props.currentEmployee, currentAuthCustomer: this.props.currentAuthCustomer, isVisiblePopoverPersonList: this.props.isVisiblePopoverPersonList, currentSubordinate: this.props.currentSubordinate, foundPeopleList: this.props.foundPeopleList, foundPeopleListInProgress: this.props.foundPeopleListInProgress, foundPeopleListError: this.props.foundPeopleListError, refresh: this.props.refresh, refreshInProgress: this.props.refreshInProgress, refreshError: this.props.refreshError, currentEmployeeFetching: this.props.currentEmployeeFetching, navigateEmployeeScreenBack: this.props.navigateEmployeeScreenBack, currentEmployeeError: this.props.currentEmployeeError, performFlush: this.props.performFlush, currentEmployeeCachedDate: this.props.currentEmployeeCachedDate, customerList: this.props.customerList, customerListFetching: this.props.customerListFetching, customerListError: this.props.customerListError, customerListCachedDate: this.props.customerListCachedDate, subordinateList: this.props.subordinateList, subordinateListFetching: this.props.subordinateListFetching, subordinateListError: this.props.subordinateListError, subordinateListCachedDate: this.props.subordinateListCachedDate, navigatePopoverBack: this.props.navigatePopoverBack, navigateToPersonContainerPopover: this.props.navigateToPersonContainerPopover, navigateToCustomerScreen: this.props.navigateToCustomerScreen, navigateToEmailScreen: this.props.navigateToEmailScreen, performPersonSelect: this.props.performPersonSelect, performPopoverPersonListShow: this.props.performPopoverPersonListShow, isVisiblePopoverSubordinate: this.props.isVisiblePopoverSubordinate, isVisibleErrorModal: this.props.isVisibleErrorModal, performErrorModalShow: this.props.performErrorModalShow, performErrorModalHide: this.props.performErrorModalHide, isEmployeeShedulerAvailable: this.props.isEmployeeShedulerAvailable, selectedIndex: this.props.selectedIndex, performCertificateAlertPopoverHide: this.props.performCertificateAlertPopoverHide, isVisibleCertificateAlertPopover: this.props.isVisibleCertificateAlertPopover, currentEmployeeHead: this.props.currentEmployeeHead, currentEmployeeHeadFetching: this.props.currentEmployeeHeadFetching, currentEmployeeHeadError: this.props.currentEmployeeHeadError, currentEmployeeHeadCachedDate: this.props.currentEmployeeHeadCachedDate }));
    }
}
function mapStateToProps(state) {
    return {
        isExtendedMode: state.user.mrmkmcibCRM.reducerEmployee.isExtendedMode,
        currentEmployeeId: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeId,
        currentEmployee: state.user.mrmkmcibCRM.reducerEmployee.currentEmployee,
        currentAuthCustomer: state.user.mrmkmcibApp.reducerAuthorization.currentUser,
        isVisiblePopoverPersonList: state.user.mrmkmcibCRM.reducerEmployee.isVisiblePopoverPersonList,
        currentSubordinate: state.user.mrmkmcibCRM.reducerEmployee.currentSubordinate,
        foundPeopleList: state.user.mrmkmcibCRM.reducerEmployee.foundPeopleList,
        foundPeopleListInProgress: state.user.mrmkmcibCRM.reducerEmployee.foundPeopleListInProgress,
        foundPeopleListError: state.user.mrmkmcibCRM.reducerEmployee.foundPeopleListError,
        refresh: state.user.mrmkmcibCRM.reducerEmployee.refresh,
        refreshInProgress: state.user.mrmkmcibCRM.reducerEmployee.refreshInProgress,
        refreshError: state.user.mrmkmcibCRM.reducerEmployee.refreshError,
        currentEmployeeFetching: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeFetching,
        currentEmployeeError: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeError,
        currentEmployeeCachedDate: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeCachedDate,
        customerList: state.user.mrmkmcibCRM.reducerEmployee.customerList,
        customerListFetching: state.user.mrmkmcibCRM.reducerEmployee.customerListFetching,
        customerListError: state.user.mrmkmcibCRM.reducerEmployee.customerListError,
        customerListCachedDate: state.user.mrmkmcibCRM.reducerEmployee.customerListCachedDate,
        subordinateList: state.user.mrmkmcibCRM.reducerEmployee.subordinateList,
        subordinateListFetching: state.user.mrmkmcibCRM.reducerEmployee.subordinateListFetching,
        subordinateListError: state.user.mrmkmcibCRM.reducerEmployee.subordinateListError,
        subordinateListCachedDate: state.user.mrmkmcibCRM.reducerEmployee.subordinateListCachedDate,
        currentMode: state.user.mrmkmcibCRM.reducerEmployee.currentMode,
        employeeNavigationHistory: state.user.mrmkmcibCRM.reducerEmployee.employeeNavigationHistory,
        isVisiblePopoverSubordinate: state.user.mrmkmcibCRM.reducerEmployee.isVisiblePopoverSubordinate,
        isVisibleErrorModal: state.user.mrmkmcibCRM.reducerEmployee.isVisibleErrorModal,
        isEmployeeShedulerAvailable: state.user.mrmkmcibCRM.reducerEmployee.isEmployeeShedulerAvailable,
        isVisibleCertificateAlertPopover: state.user.mrmkmcibCRM.reducerEmployee.isVisibleCertificateAlertPopover,
        selectedIndex: state.selectedIndex,
        currentEmployeeHead: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHead,
        currentEmployeeHeadFetching: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHeadFetching,
        currentEmployeeHeadError: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHeadError,
        currentEmployeeHeadCachedDate: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHeadCachedDate,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performSendEmail: () => {
            dispatch(thunkEmployee.performSendEmail());
        },
        performSchedulerOpen: () => {
            dispatch(thunkEmployee.performSchedulerOpen());
        },
        performPopoverPersonListHide: () => {
            dispatch(thunkEmployee.performPopoverPersonListHide());
        },
        performFindPeople: () => {
            dispatch(thunkEmployee.performFindPeople());
        },
        navigateToEmployeeScreen: (employeeId, isExtendedMode, currentMode, historyAction = Enums.EmployeeHistoryActions.Push) => {
            dispatch(thunkEmployee.navigateToEmployeeScreen(employeeId, isExtendedMode, currentMode, historyAction));
        },
        navigateToCustomerListScreen: () => {
            dispatch(thunkEmployee.navigateToCustomerListScreen());
        },
        performRefresh: () => {
            dispatch(thunkEmployee.performRefresh());
        },
        refresh_callGetEmployee: () => {
            dispatch(thunkEmployee.refresh_callGetEmployee());
        },
        callGetCustomerList: () => {
            dispatch(thunkEmployee.callGetCustomerList());
        },
        callGetSubordinateList: () => {
            dispatch(thunkEmployee.callGetSubordinateList());
        },
        navigateBack: () => {
            dispatch(thunkEmployee.navigateBack());
        },
        navigateEmployeeScreenBackToDeal: () => {
            dispatch(thunkDeal.navigateEmployeeBackToDeal());
        },
        navigateEmployeeScreenBackToDealAgreement: () => {
            dispatch(thunkDeal.navigateEmployeeBackToDealAgreement());
        },
        navigateBackEmployee: () => {
            dispatch(thunkEmployee.navigateBackEmployee());
        },
        performFlush: () => {
            dispatch(thunkEmployee.performFlush());
        },
        navigateEmployeeScreenBack: () => {
            dispatch(thunkEmployee.navigateEmployeeScreenBack());
        },
        performPopoverSubordinateShow: (subordinate) => {
            dispatch(thunkEmployee.performPopoverSubordinateShow(subordinate));
        },
        performPopoverSubordinateHide: () => {
            dispatch(thunkEmployee.performPopoverSubordinateHide());
        },
        performNavigateToAddressBookEmployee: (employeeId) => {
            dispatch(thunkEmployee.performNavigateToAddressBookEmployee(employeeId));
        },
        performContainerReset: () => {
            dispatch(thunkEmployee.performContainerReset());
        },
        performCustomerOpen: (customerId) => {
            dispatch(thunkAppCRM.performCustomerOpen(customerId));
        },
        navigateToCustomerScreen: (customerId) => {
            dispatch(navigateToCustomerScreen(customerId));
        },
        navigateToEmailScreen: () => {
            dispatch(thunkEmployee.navigateToEmailScreen());
        },
        navigatePopoverBack: () => {
            dispatch(thunkEmployee.navigatePopoverBack());
        },
        navigateToPersonContainerPopover: (person) => {
            dispatch(thunkEmployee.navigateToPersonContainerPopover(person));
        },
        performPersonSelect: (person) => {
            dispatch(thunkEmployee.performPersonSelect(person));
        },
        performPopoverPersonListShow: () => {
            dispatch(thunkEmployee.performPopoverPersonListShow());
        },
        performErrorModalShow: () => {
            dispatch(thunkEmployee.performErrorModalShow());
        },
        performErrorModalHide: () => {
            dispatch(thunkEmployee.performErrorModalHide());
        },
        performCustomerOpenWithResetPanel: (customerId, customerMode) => {
            dispatch(thunkAppCRM.performCustomerOpenWithResetPanel(customerId, customerMode));
        },
        performCancelRefreshError: () => {
            dispatch(thunkEmployee.performCancelRefreshError());
        },
        performCancelSubordinateListError: () => {
            dispatch(thunkEmployee.performCancelSubordinateListError());
        },
        performCancelCustomerListError: () => {
            dispatch(thunkEmployee.performCancelCustomerListError());
        },
        performCertificateAlertPopoverHide: () => {
            dispatch(thunkEmployee.performCertificateAlertPopoverHide());
        },
        performPopoverChiefHide: () => {
            dispatch(thunkGSZ.performPopoverChiefHide());
        },
        performPopoverCuratorHide: () => {
            dispatch(thunkGSZ.performPopoverCuratorHide());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerEmployee);
//# sourceMappingURL=ContainerEmployee.js.map