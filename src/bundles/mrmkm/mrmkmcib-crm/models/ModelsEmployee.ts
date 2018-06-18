/**
 * Models for Employee container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"
import {Enums} from '../Enums'

// TODO Describe models used in Employee actions and thunks.


const defaultState = {
    get state(): IEmployeeState {
        return {

            isExtendedMode: false,  // State parameter displayed in "Employee" screen.
            currentEmployeeId: '',  // State parameter displayed in "Employee" screen.
            currentEmployee: defaultValues.Employee,  // State parameter displayed in "Employee" screen.
            isVisiblePopoverPersonList: false,  // State parameter displayed in "Employee" screen.
            currentSubordinate: defaultValues.Employee,  // State parameter displayed in "Employee" screen.
            foundPeopleList: defaultValues.PersonList,  // Result for "performFindPeople" thunk.
            foundPeopleListInProgress: false,  // Progress indicator for thunk chain "performFindPeople".
            foundPeopleListError: null,  // Error info for thunk chain "performFindPeople".
            refresh: defaultValues.boolean,  // Result for "performRefresh" thunk.
            refreshInProgress: false,  // Progress indicator for thunk chain "performRefresh".
            refreshError: null,  // Error info for thunk chain "performRefresh".
            currentEmployeeFetching: false,  // Fetching indicator for network thunk chain "refresh_callGetEmployee".
            currentEmployeeError: null,  // Network error info for thunk chain "refresh_callGetEmployee".
            currentEmployeeCachedDate: null,  // Response data cache date for network thunk chain "refresh_callGetEmployee".
            customerList: defaultValues.CustomerList,  // Fetch result for "callGetCustomerList" thunk.
            customerListFetching: false,  // Fetching indicator for network thunk chain "callGetCustomerList".
            customerListError: null,  // Network error info for thunk chain "callGetCustomerList".
            customerListCachedDate: null,  // Response data cache date for network thunk chain "callGetCustomerList".
            subordinateList: defaultValues.MemberList,  // Fetch result for "callGetSubordinateList" thunk.
            subordinateListFetching: false,  // Fetching indicator for network thunk chain "callGetSubordinateList".
            subordinateListError: null,  // Network error info for thunk chain "callGetSubordinateList".
            subordinateListCachedDate: null,  // Response data cache date for network thunk chain "callGetSubordinateList".

            currentMode: Enums.EmployeeMode.CustomerManaged,
            employeeNavigationHistory: [],
            isVisiblePopoverSubordinate: false,
            isVisibleErrorModal: defaultValues.boolean,
            isEmployeeShedulerAvailable: true,
            isVisibleCertificateAlertPopover: false,
            isValidMailCertificate: null,
            currentEmployeeHead: defaultValues.Employee, // Fetch result for "callGetCurrentCustomerHead" thunk.
            currentEmployeeHeadFetching: false, // Fetching indicator for network thunk chain "callGetCurrentCustomerHead".
            currentEmployeeHeadError: null, // Network error info for thunk chain "callGetCurrentCustomerHead".
            currentEmployeeHeadCachedDate: null, // Response data cache date for network thunk chain "callGetCurrentCustomerHead".
            // TODO Describe Employee reducer state.


        }
    }
}

export interface IEmployeeState {

    isExtendedMode: boolean,  // State parameter displayed in "Employee" screen.
    currentEmployeeId: string,  // State parameter displayed in "Employee" screen.
    currentEmployee: ModelsApp.Employee,  // State parameter displayed in "Employee" screen.
    isVisiblePopoverPersonList: boolean,  // State parameter displayed in "Employee" screen.
    currentSubordinate: ModelsApp.Employee,  // State parameter displayed in "Employee" screen.
    foundPeopleList: ModelsScheduler.PersonList,  // Result for "performFindPeople" thunk.
    foundPeopleListInProgress: boolean,  // Progress indicator for thunk chain "performFindPeople".
    foundPeopleListError: Error | null,  // Error info for thunk chain "performFindPeople".
    refresh: boolean,  // Result for "performRefresh" thunk.
    refreshInProgress: boolean,  // Progress indicator for thunk chain "performRefresh".
    refreshError: Error | null,  // Error info for thunk chain "performRefresh".
    currentEmployeeFetching: boolean,  // Fetching indicator for network thunk chain "refresh_callGetEmployee".
    currentEmployeeError: Error | null,  // Network error info for thunk chain "refresh_callGetEmployee".
    currentEmployeeCachedDate: Date | null,  // Response data cache date for network thunk chain "refresh_callGetEmployee".
    customerList: Models.CustomerList,  // Fetch result for "callGetCustomerList" thunk.
    customerListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCustomerList".
    customerListError: Error | null,  // Network error info for thunk chain "callGetCustomerList".
    customerListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCustomerList".
    subordinateList: Models.MemberList,  // Fetch result for "callGetSubordinateList" thunk.
    subordinateListFetching: boolean,  // Fetching indicator for network thunk chain "callGetSubordinateList".
    subordinateListError: Error | null,  // Network error info for thunk chain "callGetSubordinateList".
    subordinateListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetSubordinateList".

    currentMode: Enums.EmployeeMode
    employeeNavigationHistory: ModelsApp.Employee[],
    isVisiblePopoverSubordinate: boolean,
    isVisibleErrorModal: boolean;
    isEmployeeShedulerAvailable: boolean;
    isVisibleCertificateAlertPopover: boolean;
    isValidMailCertificate: boolean | null;
    currentEmployeeHead: ModelsApp.Employee, // Fetch result for "callGetCurrentCustomerHead" thunk.
    currentEmployeeHeadFetching: boolean, // Fetching indicator for network thunk chain "callGetCurrentCustomerHead".
    currentEmployeeHeadError: Error | null, // Network error info for thunk chain "callGetCurrentCustomerHead".
    currentEmployeeHeadCachedDate: Date | null, // Response data cache date for network thunk chain "callGetCurrentCustomerHead".
    // TODO Describe Employee reducer state.


}

export const initialState = {
    get state(): IEmployeeState {
        return defaultState.state
    }
}


export interface PERFORM_SEND_EMAIL {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}

export interface PERFORM_SCHEDULER_OPEN {
    (): void;
}

export interface PERFORM_POPOVER_PERSON_LIST_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_PERSON_LIST_HIDE {
    (): void;
}

export interface PERFORM_FIND_PEOPLE {
    (): void;
}

export interface NAVIGATE_TO_EMPLOYEE_SCREEN {
    (employeeId: string, isExtendedMode: boolean, currentMode: Enums.EmployeeMode, historyAction?: Enums.EmployeeHistoryActions): void;
}

export interface NAVIGATE_TO_CUSTOMER_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_EMPLOYEE_SCREEN_BACK {
    (): void;
}

export interface PERFORM_REFRESH {
    (): void;
}

export interface REFRESH_CALL_GET_EMPLOYEE {
    (): void;
}

export interface CALL_GET_CUSTOMER_LIST {
    (): void;
}

export interface CALL_GET_SUBORDINATE_LIST {
    (): void;
}

export interface NAVIGATE_BACK {
    (): void;
}

export interface NAVIGATE_BACK_EMPLOYEE {
    (): void;
}

export interface PERFORM_POPOVER_SUBORDINATE_SHOW {
    (subordinate: ModelsApp.Employee): void;
}

export interface PERFORM_POPOVER_SUBORDINATE_HIDE {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface NAVIGATE_POPOVER_BACK {
    (): void;
}

export interface NAVIGATE_TO_ADDRESS_BOOK_EMPLOYEE {
    (employeeId: string): void;
}

export interface NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER {
    (person: ModelsScheduler.Person): void;
}

export interface PERFORM_PERSON_SELECT {
    (person: ModelsScheduler.Person): void;
}

export interface PERFORM_POPOVER_PERSON_LIST_SHOW {
    (): void;
}

export interface PERFORM_ERROR_MODAL_SHOW {
    (): void;
}

export interface PERFORM_ERROR_MODAL_HIDE {
    (): void;
}

export interface NAVIGATE_TO_CUSTOMER_SCREEN {
    (customerId: string): void;
}

export interface NAVIGATE_TO_EMAIL_SCREEN {
    (): void;
}

export interface PERFORM_CANCEL_REFRESH_ERROR {
    (): void;
}

export interface PERFORM_CANCEL_SUBORDINATE_LIST_ERROR {
    (): void;
}

export interface PERFORM_CANCEL_CUSTOMER_LIST_ERROR {
    (): void;
}

export interface PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE {
    (): void;
}

export interface PERFORM_CHECK_CERTIFICATE {
    (): void;
}

export interface PERFORM_CHECK_CERTIFICATE_SUCCESS {
    (): void;
}

export interface PERFORM_CHECK_CERTIFICATE_FAILED {
    (): void;
}
