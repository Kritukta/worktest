/**
 * Models for CustomerActivityExclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface ICustomerActivityExcludeState {
    isVisibleErrorModalWindow: boolean;
    inputSearch: string;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    customerActivityExcludeValidationComment: string | null;
    customerActivityExcludeValidationCustomer: string | null;
    inputCustomerFetching: boolean;
    inputCustomerError: Error | null;
    inputCustomerCachedDate: Date | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityExcludeCreate: boolean;
    activityExcludeCreateFetching: boolean;
    activityExcludeCreateError: Error | null;
    activityExcludeCreateCachedDate: Date | null;
    customerSearchListFetching: boolean;
    customerSearchListError: Error | null;
    customerSearchListCachedDate: Date | null;
    isSearchError: boolean;
    searchError: Error | null;
    customerSearchError: string;
}
export declare const initialState: {
    readonly state: ICustomerActivityExcludeState;
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
export interface FILTER_CUSTOMER_LIST {
    (inputSearch: string, inputSearchManagedOnly: boolean, currentCustomerManaged: Models.CustomerManaged): void;
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
export interface CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE {
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
export interface PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW {
    (): void;
}
export interface PERFORM_CANCEL_SEARCH_CUSTOMER {
    (): void;
}
export interface PERFORM_INPUT_ACTIVITY_SEARCH_CUSTOMER_NAME {
    (value: string): void;
}
export interface PERFORM_CANCEL_INPUT_ACTIVITY_SEARCH_CUSTOMER_NAME {
    (): void;
}
export interface PERFORM_CHANGE_DISPLAY_ERROR_MODEL_ACTIVITY {
    (): void;
}
export interface PERFORM_CALL_GET_ACTIVITY_CUSTOMER_LIST_NEXT_PAGE {
    (): void;
}
