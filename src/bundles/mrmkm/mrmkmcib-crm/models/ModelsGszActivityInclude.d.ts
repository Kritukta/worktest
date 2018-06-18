/**
 * Models for GszActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IGszActivityIncludeState {
    isVisibleModalActivityError: boolean;
    inputSearch: string;
    customerSearchError: string;
    isSearchError: boolean;
    customerSearchList: Models.CustomerList;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    gszActivityIncludeValidationComment: string | null;
    gszActivityIncludeValidationCustomer: string | null;
    search: boolean;
    searchInProgress: boolean;
    searchError: Error | null;
    customerSearchListFetching: boolean;
    customerSearchListError: Error | null;
    customerSearchListCachedDate: Date | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityIncludeCreate: boolean;
    activityIncludeCreateFetching: boolean;
    activityIncludeCreateError: Error | null;
    activityIncludeCreateCachedDate: Date | null;
}
export declare const initialState: {
    readonly state: IGszActivityIncludeState;
};
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
export interface PERFORM_INPUT_COMMENT {
    (value: string): void;
}
export interface PERFORM_CANCEL {
    (): void;
}
export interface PERFORM_SAVE {
    (): void;
}
export interface CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE {
    (): void;
}
export interface PERFORM_VALIDATE {
    (currentUser: ModelsApp.Employee): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}
export interface PERFORM_CANCEL_SEARCH_CUSTOMER {
    (): void;
}
export interface PERFORM_CHANGE_VISIBLE_ERROR_MODAL {
    (status: boolean): void;
}
