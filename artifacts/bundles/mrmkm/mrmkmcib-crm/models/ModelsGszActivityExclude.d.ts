/**
 * Models for GszActivityExclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IGszActivityExcludeState {
    isVisibleModalActivityError: boolean;
    customerSearchList: Models.CustomerList;
    isSearchError: boolean;
    customerSearchError: string;
    inputSearch: string;
    inputSearchManagedOnly: boolean;
    inputCustomer: Models.Customer;
    inputComment: string;
    operationUuid: string;
    gszActivityExcludeValidationComment: string | null;
    gszActivityExcludeValidationCustomer: string | null;
    activitySave: boolean;
    activitySaveInProgress: boolean;
    activitySaveError: Error | null;
    activityExcludeCreate: boolean;
    activityExcludeCreateFetching: boolean;
    activityExcludeCreateError: Error | null;
    activityExcludeCreateCachedDate: Date | null;
    searchError: Error | null;
    searchInProgress: boolean;
    customerSearchListFetching: boolean;
    customerSearchListError: Error | null;
    customerSearchListCachedDate: Date | null;
}
export declare const initialState: {
    readonly state: IGszActivityExcludeState;
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
    (inputSearch: string, inputSearchManagedOnly: boolean, currentGsz: Models.Gsz): void;
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
export interface CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE {
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
export interface PERFORM_CHAGNE_VISIBLE_ERROR_MODAL {
    (status: boolean): void;
}
