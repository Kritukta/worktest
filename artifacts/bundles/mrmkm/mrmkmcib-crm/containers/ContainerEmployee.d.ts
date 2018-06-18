/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsDirectory } from "mrmkmcib-directory";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsGSZ from "../models/ModelsGSZ";
import * as ModelsEmployee from "../models/ModelsEmployee";
import Error from "../models/Error";
export interface IStateProps {
    isExtendedMode: boolean;
    currentEmployeeId: string;
    currentEmployee: ModelsApp.Employee;
    currentAuthCustomer: ModelsApp.Employee;
    isVisiblePopoverPersonList: boolean;
    currentSubordinate: ModelsApp.Employee;
    foundPeopleList: ModelsScheduler.PersonList;
    foundPeopleListInProgress: boolean;
    foundPeopleListError: Error | null;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    currentEmployeeFetching: boolean;
    currentEmployeeError: Error | null;
    currentEmployeeCachedDate: Date | null;
    customerList: Models.CustomerList;
    customerListFetching: boolean;
    customerListError: Error | null;
    customerListCachedDate: Date | null;
    subordinateList: Models.MemberList;
    subordinateListFetching: boolean;
    subordinateListError: Error | null;
    subordinateListCachedDate: Date | null;
    currentMode: Enums.EmployeeMode;
    employeeNavigationHistory: ModelsApp.Employee[];
    isVisiblePopoverSubordinate: boolean;
    isVisibleErrorModal: boolean;
    isEmployeeShedulerAvailable: boolean;
    selectedIndex: number | null;
    isVisibleCertificateAlertPopover: boolean;
    currentEmployeeHead: ModelsApp.Employee;
    currentEmployeeHeadFetching: boolean;
    currentEmployeeHeadError: Error | null;
    currentEmployeeHeadCachedDate: Date | null;
}
export interface IDispatchProps {
    performSendEmail: ModelsEmployee.PERFORM_SEND_EMAIL;
    performSchedulerOpen: ModelsEmployee.PERFORM_SCHEDULER_OPEN;
    performPopoverPersonListHide: ModelsEmployee.PERFORM_POPOVER_PERSON_LIST_HIDE;
    performFindPeople: ModelsEmployee.PERFORM_FIND_PEOPLE;
    navigateToEmployeeScreen: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_SCREEN;
    navigateToCustomerListScreen: ModelsEmployee.NAVIGATE_TO_CUSTOMER_LIST_SCREEN;
    performRefresh: ModelsEmployee.PERFORM_REFRESH;
    refresh_callGetEmployee: ModelsEmployee.REFRESH_CALL_GET_EMPLOYEE;
    callGetCustomerList: ModelsEmployee.CALL_GET_CUSTOMER_LIST;
    callGetSubordinateList: ModelsEmployee.CALL_GET_SUBORDINATE_LIST;
    navigateBack: ModelsEmployee.NAVIGATE_BACK;
    navigateBackEmployee: ModelsEmployee.NAVIGATE_BACK_EMPLOYEE;
    performPopoverSubordinateShow: ModelsEmployee.PERFORM_POPOVER_SUBORDINATE_SHOW;
    performPopoverSubordinateHide: ModelsEmployee.PERFORM_POPOVER_SUBORDINATE_HIDE;
    performContainerReset: ModelsEmployee.PERFORM_CONTAINER_RESET;
    performNavigateToAddressBookEmployee: ModelsEmployee.NAVIGATE_TO_ADDRESS_BOOK_EMPLOYEE;
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    performCustomerOpenWithResetPanel: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    navigatePopoverBack: ModelsEmployee.NAVIGATE_POPOVER_BACK;
    navigateToPersonContainerPopover: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER;
    navigateToCustomerScreen: ModelsDirectory.NAVIGATE_TO_CUSTOMER_SCREEN;
    navigateToEmailScreen: ModelsEmployee.NAVIGATE_TO_EMAIL_SCREEN;
    performPersonSelect: ModelsEmployee.PERFORM_PERSON_SELECT;
    performFlush: ModelsEmployee.PERFORM_FLUSH;
    navigateEmployeeScreenBack: ModelsEmployee.NAVIGATE_EMPLOYEE_SCREEN_BACK;
    navigateEmployeeScreenBackToDeal: ModelsEmployee.NAVIGATE_EMPLOYEE_SCREEN_BACK;
    navigateEmployeeScreenBackToDealAgreement: ModelsEmployee.NAVIGATE_BACK;
    performPopoverPersonListShow: ModelsEmployee.PERFORM_POPOVER_PERSON_LIST_SHOW;
    performErrorModalShow: ModelsEmployee.PERFORM_ERROR_MODAL_SHOW;
    performErrorModalHide: ModelsEmployee.PERFORM_ERROR_MODAL_HIDE;
    performCancelRefreshError: ModelsEmployee.PERFORM_CANCEL_REFRESH_ERROR;
    performCancelSubordinateListError: ModelsEmployee.PERFORM_CANCEL_SUBORDINATE_LIST_ERROR;
    performCancelCustomerListError: ModelsEmployee.PERFORM_CANCEL_CUSTOMER_LIST_ERROR;
    performCertificateAlertPopoverHide: ModelsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE;
    performPopoverChiefHide: ModelsGSZ.PERFORM_POPOVER_CHIEF_HIDE;
    performPopoverCuratorHide: ModelsGSZ.PERFORM_POPOVER_CURATOR_HIDE;
}
export declare type IEmployeeProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
