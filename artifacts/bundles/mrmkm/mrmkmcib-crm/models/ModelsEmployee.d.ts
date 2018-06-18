/**
 * Models for Employee container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
import { Enums } from '../Enums';
export interface IEmployeeState {
    isExtendedMode: boolean;
    currentEmployeeId: string;
    currentEmployee: ModelsApp.Employee;
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
    isVisibleCertificateAlertPopover: boolean;
    isValidMailCertificate: boolean | null;
    currentEmployeeHead: ModelsApp.Employee;
    currentEmployeeHeadFetching: boolean;
    currentEmployeeHeadError: Error | null;
    currentEmployeeHeadCachedDate: Date | null;
}
export declare const initialState: {
    readonly state: IEmployeeState;
};
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
