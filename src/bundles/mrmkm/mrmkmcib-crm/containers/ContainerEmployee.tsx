/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory, navigateToCustomerScreen} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewEmployee from '../components/ViewEmployee'
import * as ModelState from "../models/Models"


/*
 * Container "Employee". Employee card screen.
 */
class ContainerEmployee extends React.Component<IEmployeeProps, any> {

    constructor(props: IEmployeeProps, context: any) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        return (
            <ViewEmployee testID={'test-id-container-Employee'}
						  performPopoverChiefHide={this.props.performPopoverChiefHide}
						  performPopoverCuratorHide={this.props.performPopoverCuratorHide}
                          performSendEmail={this.props.performSendEmail}
                          performSchedulerOpen={this.props.performSchedulerOpen}
                          performPopoverPersonListHide={this.props.performPopoverPersonListHide}
                          performFindPeople={this.props.performFindPeople}
                          navigateToEmployeeScreen={this.props.navigateToEmployeeScreen}
                          navigateToCustomerListScreen={this.props.navigateToCustomerListScreen}
                          performRefresh={this.props.performRefresh}
                          refresh_callGetEmployee={this.props.refresh_callGetEmployee}
                          callGetCustomerList={this.props.callGetCustomerList}
                          callGetSubordinateList={this.props.callGetSubordinateList}
                          navigateBack={this.props.navigateBack}
                          navigateEmployeeScreenBackToDeal={this.props.navigateEmployeeScreenBackToDeal}
                          navigateEmployeeScreenBackToDealAgreement={this.props.navigateEmployeeScreenBackToDealAgreement}
                          navigateBackEmployee={this.props.navigateBackEmployee}
                          performPopoverSubordinateShow={this.props.performPopoverSubordinateShow}
                          performPopoverSubordinateHide={this.props.performPopoverSubordinateHide}
                          performContainerReset={this.props.performContainerReset}
                          performCancelRefreshError={this.props.performCancelRefreshError}
                          performCancelSubordinateListError={this.props.performCancelSubordinateListError}
                          performCancelCustomerListError={this.props.performCancelCustomerListError}

                          performCustomerOpen={this.props.performCustomerOpen}
                          performCustomerOpenWithResetPanel={this.props.performCustomerOpenWithResetPanel}
                          currentMode={this.props.currentMode}
                          employeeNavigationHistory={this.props.employeeNavigationHistory}
                          performNavigateToAddressBookEmployee={this.props.performNavigateToAddressBookEmployee}

                          isExtendedMode={this.props.isExtendedMode}
                          currentEmployeeId={this.props.currentEmployeeId}
                          currentEmployee={this.props.currentEmployee}
                          currentAuthCustomer={this.props.currentAuthCustomer}
                          isVisiblePopoverPersonList={this.props.isVisiblePopoverPersonList}
                          currentSubordinate={this.props.currentSubordinate}
                          foundPeopleList={this.props.foundPeopleList}
                          foundPeopleListInProgress={this.props.foundPeopleListInProgress}
                          foundPeopleListError={this.props.foundPeopleListError}
                          refresh={this.props.refresh}
                          refreshInProgress={this.props.refreshInProgress}
                          refreshError={this.props.refreshError}
                          currentEmployeeFetching={this.props.currentEmployeeFetching}
                          navigateEmployeeScreenBack={this.props.navigateEmployeeScreenBack}
                          currentEmployeeError={this.props.currentEmployeeError}
                          performFlush={this.props.performFlush}
                          currentEmployeeCachedDate={this.props.currentEmployeeCachedDate}
                          customerList={this.props.customerList}
                          customerListFetching={this.props.customerListFetching}
                          customerListError={this.props.customerListError}
                          customerListCachedDate={this.props.customerListCachedDate}
                          subordinateList={this.props.subordinateList}
                          subordinateListFetching={this.props.subordinateListFetching}
                          subordinateListError={this.props.subordinateListError}
                          subordinateListCachedDate={this.props.subordinateListCachedDate}
                          navigatePopoverBack={this.props.navigatePopoverBack}
                          navigateToPersonContainerPopover={this.props.navigateToPersonContainerPopover}
                          navigateToCustomerScreen={this.props.navigateToCustomerScreen}
                          navigateToEmailScreen={this.props.navigateToEmailScreen}
                          performPersonSelect={this.props.performPersonSelect}
                          performPopoverPersonListShow={this.props.performPopoverPersonListShow}
                          isVisiblePopoverSubordinate={this.props.isVisiblePopoverSubordinate}
                          isVisibleErrorModal={this.props.isVisibleErrorModal}
                          performErrorModalShow={this.props.performErrorModalShow}
                          performErrorModalHide={this.props.performErrorModalHide}
                          isEmployeeShedulerAvailable={this.props.isEmployeeShedulerAvailable}
                          selectedIndex={this.props.selectedIndex}
                          performCertificateAlertPopoverHide={this.props.performCertificateAlertPopoverHide}
                          isVisibleCertificateAlertPopover={this.props.isVisibleCertificateAlertPopover}
                          currentEmployeeHead={this.props.currentEmployeeHead}
                          currentEmployeeHeadFetching={this.props.currentEmployeeHeadFetching}
                          currentEmployeeHeadError={this.props.currentEmployeeHeadError}
                          currentEmployeeHeadCachedDate={this.props.currentEmployeeHeadCachedDate}
            >
            </ViewEmployee>
        )
    }
}

export interface IStateProps {

    isExtendedMode: boolean,
    currentEmployeeId: string,
    currentEmployee: ModelsApp.Employee,
    currentAuthCustomer: ModelsApp.Employee,
    isVisiblePopoverPersonList: boolean,
    currentSubordinate: ModelsApp.Employee,
    foundPeopleList: ModelsScheduler.PersonList,
    foundPeopleListInProgress: boolean,
    foundPeopleListError: Error | null,
    refresh: boolean,
    refreshInProgress: boolean,
    refreshError: Error | null,
    currentEmployeeFetching: boolean,
    currentEmployeeError: Error | null,
    currentEmployeeCachedDate: Date | null,
    customerList: Models.CustomerList,
    customerListFetching: boolean,
    customerListError: Error | null,
    customerListCachedDate: Date | null,
    subordinateList: Models.MemberList,
    subordinateListFetching: boolean,
    subordinateListError: Error | null,
    subordinateListCachedDate: Date | null,
    currentMode: Enums.EmployeeMode,
    employeeNavigationHistory: ModelsApp.Employee[],
    isVisiblePopoverSubordinate: boolean,
    isVisibleErrorModal: boolean,
    isEmployeeShedulerAvailable: boolean,
    selectedIndex: number | null,
    isVisibleCertificateAlertPopover: boolean,
    currentEmployeeHead: ModelsApp.Employee,
    currentEmployeeHeadFetching: boolean,
    currentEmployeeHeadError: Error | null,
    currentEmployeeHeadCachedDate: Date | null,
}

export interface IDispatchProps {

    performSendEmail: ModelsEmployee.PERFORM_SEND_EMAIL,
    performSchedulerOpen: ModelsEmployee.PERFORM_SCHEDULER_OPEN,
    performPopoverPersonListHide: ModelsEmployee.PERFORM_POPOVER_PERSON_LIST_HIDE,
    performFindPeople: ModelsEmployee.PERFORM_FIND_PEOPLE,
    navigateToEmployeeScreen: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_SCREEN,
    navigateToCustomerListScreen: ModelsEmployee.NAVIGATE_TO_CUSTOMER_LIST_SCREEN,
    performRefresh: ModelsEmployee.PERFORM_REFRESH,
    refresh_callGetEmployee: ModelsEmployee.REFRESH_CALL_GET_EMPLOYEE,
    callGetCustomerList: ModelsEmployee.CALL_GET_CUSTOMER_LIST,
    callGetSubordinateList: ModelsEmployee.CALL_GET_SUBORDINATE_LIST,
    navigateBack: ModelsEmployee.NAVIGATE_BACK,
    navigateBackEmployee: ModelsEmployee.NAVIGATE_BACK_EMPLOYEE,
    performPopoverSubordinateShow: ModelsEmployee.PERFORM_POPOVER_SUBORDINATE_SHOW,
    performPopoverSubordinateHide: ModelsEmployee.PERFORM_POPOVER_SUBORDINATE_HIDE,
    performContainerReset: ModelsEmployee.PERFORM_CONTAINER_RESET,

    performNavigateToAddressBookEmployee: ModelsEmployee.NAVIGATE_TO_ADDRESS_BOOK_EMPLOYEE,
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performCustomerOpenWithResetPanel: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    navigatePopoverBack: ModelsEmployee.NAVIGATE_POPOVER_BACK,
    navigateToPersonContainerPopover: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER,
    navigateToCustomerScreen: ModelsDirectory.NAVIGATE_TO_CUSTOMER_SCREEN,
    navigateToEmailScreen: ModelsEmployee.NAVIGATE_TO_EMAIL_SCREEN,
    performPersonSelect: ModelsEmployee.PERFORM_PERSON_SELECT,
    performFlush: ModelsEmployee.PERFORM_FLUSH,
    navigateEmployeeScreenBack: ModelsEmployee.NAVIGATE_EMPLOYEE_SCREEN_BACK,
    navigateEmployeeScreenBackToDeal: ModelsEmployee.NAVIGATE_EMPLOYEE_SCREEN_BACK,
    navigateEmployeeScreenBackToDealAgreement: ModelsEmployee.NAVIGATE_BACK;
    performPopoverPersonListShow: ModelsEmployee.PERFORM_POPOVER_PERSON_LIST_SHOW,

    performErrorModalShow: ModelsEmployee.PERFORM_ERROR_MODAL_SHOW;
    performErrorModalHide: ModelsEmployee.PERFORM_ERROR_MODAL_HIDE;
    performCancelRefreshError: ModelsEmployee.PERFORM_CANCEL_REFRESH_ERROR;
    performCancelSubordinateListError: ModelsEmployee.PERFORM_CANCEL_SUBORDINATE_LIST_ERROR;
    performCancelCustomerListError: ModelsEmployee.PERFORM_CANCEL_CUSTOMER_LIST_ERROR;
    performCertificateAlertPopoverHide: ModelsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE;
	performPopoverChiefHide: ModelsGSZ.PERFORM_POPOVER_CHIEF_HIDE,
	performPopoverCuratorHide: ModelsGSZ.PERFORM_POPOVER_CURATOR_HIDE,
}

export type IEmployeeProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
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
        selectedIndex:state.selectedIndex,
        currentEmployeeHead: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHead,
        currentEmployeeHeadFetching: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHeadFetching,
        currentEmployeeHeadError: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHeadError,
        currentEmployeeHeadCachedDate: state.user.mrmkmcibCRM.reducerEmployee.currentEmployeeHeadCachedDate,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performSendEmail: () => {
            dispatch(thunkEmployee.performSendEmail())
        },
        performSchedulerOpen: () => {
            dispatch(thunkEmployee.performSchedulerOpen())
        },
        performPopoverPersonListHide: () => {
            dispatch(thunkEmployee.performPopoverPersonListHide())
        },
        performFindPeople: () => {
            dispatch(thunkEmployee.performFindPeople())
        },
        navigateToEmployeeScreen: (employeeId: string, isExtendedMode: boolean, currentMode: Enums.EmployeeMode, historyAction: Enums.EmployeeHistoryActions = Enums.EmployeeHistoryActions.Push) => {
            dispatch(thunkEmployee.navigateToEmployeeScreen(employeeId, isExtendedMode, currentMode, historyAction))
        },
        navigateToCustomerListScreen: () => {
            dispatch(thunkEmployee.navigateToCustomerListScreen())
        },
        performRefresh: () => {
            dispatch(thunkEmployee.performRefresh())
        },
        refresh_callGetEmployee: () => {
            dispatch(thunkEmployee.refresh_callGetEmployee())
        },
        callGetCustomerList: () => {
            dispatch(thunkEmployee.callGetCustomerList())
        },
        callGetSubordinateList: () => {
            dispatch(thunkEmployee.callGetSubordinateList())
        },
        navigateBack: () => {
            dispatch(thunkEmployee.navigateBack())
        },
        navigateEmployeeScreenBackToDeal: () => {
            dispatch(thunkDeal.navigateEmployeeBackToDeal())
        },
        navigateEmployeeScreenBackToDealAgreement: () => {
            dispatch(thunkDeal.navigateEmployeeBackToDealAgreement())
        },
        navigateBackEmployee: () => {
            dispatch(thunkEmployee.navigateBackEmployee())
        },
        performFlush: () => {
            dispatch(thunkEmployee.performFlush())
        },
        navigateEmployeeScreenBack: () => {
            dispatch(thunkEmployee.navigateEmployeeScreenBack())
        },
        performPopoverSubordinateShow: (subordinate: ModelsApp.Employee) => {
            dispatch(thunkEmployee.performPopoverSubordinateShow(subordinate))
        },
        performPopoverSubordinateHide: () => {
            dispatch(thunkEmployee.performPopoverSubordinateHide())
        },
        performNavigateToAddressBookEmployee: (employeeId: string) => {
            dispatch(thunkEmployee.performNavigateToAddressBookEmployee(employeeId))
        },
        performContainerReset: () => {
            dispatch(thunkEmployee.performContainerReset())
        },
        performCustomerOpen: (customerId: string) => {
            dispatch(thunkAppCRM.performCustomerOpen(customerId))
        },
        navigateToCustomerScreen: (customerId: string) => {
            dispatch(navigateToCustomerScreen(customerId))
        },
        navigateToEmailScreen: () => {
            dispatch(thunkEmployee.navigateToEmailScreen())
        },
        navigatePopoverBack: () => {
            dispatch(thunkEmployee.navigatePopoverBack())
        },
        navigateToPersonContainerPopover: (person :ModelsScheduler.Person) =>{
            dispatch(thunkEmployee.navigateToPersonContainerPopover(person))
        },
        performPersonSelect: (person :ModelsScheduler.Person) =>{
            dispatch(thunkEmployee.performPersonSelect(person))
        },
        performPopoverPersonListShow: () => {
            dispatch(thunkEmployee.performPopoverPersonListShow())
        },
        performErrorModalShow: () => {
            dispatch(thunkEmployee.performErrorModalShow())
        },
        performErrorModalHide: () => {
            dispatch(thunkEmployee.performErrorModalHide())
        },
        performCustomerOpenWithResetPanel: (customerId: string, customerMode?: Enums.CustomerMode) => {
            dispatch(thunkAppCRM.performCustomerOpenWithResetPanel(customerId, customerMode))
        },
        performCancelRefreshError: () => {
            dispatch(thunkEmployee.performCancelRefreshError())
        },
        performCancelSubordinateListError: () => {
            dispatch(thunkEmployee.performCancelSubordinateListError())
        },
        performCancelCustomerListError: () => {
            dispatch(thunkEmployee.performCancelCustomerListError())
        },
        performCertificateAlertPopoverHide: () => {
            dispatch(thunkEmployee.performCertificateAlertPopoverHide())
        },
		performPopoverChiefHide: () => {
			dispatch(thunkGSZ.performPopoverChiefHide())
		},
		performPopoverCuratorHide: () => {
			dispatch(thunkGSZ.performPopoverCuratorHide())
		},
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerEmployee)
