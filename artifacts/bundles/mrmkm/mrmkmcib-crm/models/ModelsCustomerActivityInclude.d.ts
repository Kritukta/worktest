/**
 * Models for CustomerActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface ICustomerActivityIncludeState {
    inputSearch: string;
    customerSearchError: string;
    isSearchError: boolean;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    customerActivityIncludeValidationComment: string | null;
    customerActivityIncludeValidationCustomer: string | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    customerSearchListFetching: boolean;
    customerSearchListError: Error | null;
    customerSearchListCachedDate: Date | null;
    inputCustomerFetching: boolean;
    inputCustomerError: Error | null;
    inputCustomerCachedDate: Date | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityIncludeCreate: boolean;
    activityIncludeCreateFetching: boolean;
    activityIncludeCreateError: Error | null;
    activityIncludeCreateCachedDate: Date | null;
    isVisibleErrorModalWindow: boolean;
}
export declare const initialState: {
    readonly state: ICustomerActivityIncludeState;
};
export interface NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE {
    (): void;
}
export interface NAVIGATE_TO_CUSTOMER_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_INPUT_SEARCH_MANAGED_ONLY {
    (value: boolean): void;
}
export interface PERFORM_INPUT_SEARCH {
    (value: string): void;
}
export interface PERFORM_SEARCH_RESET {
    (): void;
}
export interface PERFORM_SEARCH {
    (): void;
}
export interface SEARCH_VALIDATE_SEARCH {
    (): void;
}
export interface SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST {
    (): void;
}
export interface PERFORM_INPUT_CUSTOMER {
    (customer: Models.Customer): void;
}
export interface CALL_GET_CUSTOMER {
    (): void;
}
export interface PERFORM_INPUT_COMMENT {
    (value: string): void;
}
export interface PERFORM_CANCEL {
    (): void;
}
export interface PERFORM_SAVE {
    (): void;
}
export interface CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE {
    (): void;
}
export interface PERFORM_VALIDATE {
    (currentUser: ModelsApp.Employee, currentCustomerManaged: Models.CustomerManaged): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_CANCEL_SEARCH_CUSTOMER {
    (): void;
}
export interface PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW {
    (): void;
}
