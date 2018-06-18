/**
 * Models for CustomerActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


const defaultState = {
    get state(): ICustomerActivityIncludeState {
        return {

            inputSearch: '',  // State parameter displayed in "CustomerActivityInclude" screen. 
            customerSearchError: '',  // State parameter displayed in "CustomerActivityInclude" screen. 
            isSearchError: false,  // State parameter displayed in "CustomerActivityInclude" screen. 
            customerSearchList: defaultValues.CustomerList,  // State parameter displayed in "CustomerActivityInclude" screen. 
            inputSearchManagedOnly: false,  // State parameter displayed in "CustomerActivityInclude" screen. 
            inputCustomer: defaultValues.Customer,  // State parameter displayed in "CustomerActivityInclude" screen. 
            inputComment: 'Прошу включить организацию в Холдинг',  // State parameter displayed in "CustomerActivityInclude" screen. 
            operationUuid: '',  // State parameter displayed in "CustomerActivityInclude" screen. 
            customerActivityIncludeValidationComment: null,  // State parameter displayed in "CustomerActivityInclude" screen. 
            customerActivityIncludeValidationCustomer: null,  // State parameter displayed in "CustomerActivityInclude" screen. 
            search: defaultValues.boolean,  // Result for "performSearch" thunk.
            searchInProgress: false,  // Progress indicator for thunk chain "performSearch".
            searchError: null,  // Error info for thunk chain "performSearch".
            customerSearchListFetching: false,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
            customerSearchListError: null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
            customerSearchListCachedDate: null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
            inputCustomerFetching: false,  // Fetching indicator for network thunk chain "callGetCustomer".
            inputCustomerError: null,  // Network error info for thunk chain "callGetCustomer".
            inputCustomerCachedDate: null,  // Response data cache date for network thunk chain "callGetCustomer".
            activitySave: defaultValues.boolean,  // Result for "performSave" thunk.
            activitySaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            activitySaveError: null,  // Error info for thunk chain "performSave".
            activityIncludeCreate: defaultValues.boolean,  // Fetch result for "callPostCustomerActivityIncludeCreate" thunk.
            activityIncludeCreateFetching: false,  // Fetching indicator for network thunk chain "callPostCustomerActivityIncludeCreate".
            activityIncludeCreateError: null,  // Network error info for thunk chain "callPostCustomerActivityIncludeCreate".
            activityIncludeCreateCachedDate: null,  // Response data cache date for network thunk chain "callPostCustomerActivityIncludeCreate".
            isVisibleErrorModalWindow: false,

            // TODO Describe CustomerActivityInclude reducer state.


        }
    }
}

export interface ICustomerActivityIncludeState {

    inputSearch: string,  // State parameter displayed in "CustomerActivityInclude" screen. 
    customerSearchError: string,  // State parameter displayed in "CustomerActivityInclude" screen. 
    isSearchError: boolean,  // State parameter displayed in "CustomerActivityInclude" screen. 
    customerSearchList: Models.CustomerList,  // State parameter displayed in "CustomerActivityInclude" screen. 
    inputSearchManagedOnly: boolean,  // State parameter displayed in "CustomerActivityInclude" screen. 
    inputCustomer: Models.Customer,  // State parameter displayed in "CustomerActivityInclude" screen. 
    inputComment: string,  // State parameter displayed in "CustomerActivityInclude" screen. 
    operationUuid: string,  // State parameter displayed in "CustomerActivityInclude" screen. 
    customerActivityIncludeValidationComment: string | null,  // State parameter displayed in "CustomerActivityInclude" screen. 
    customerActivityIncludeValidationCustomer: string | null,  // State parameter displayed in "CustomerActivityInclude" screen. 
    search: boolean,  // Result for "performSearch" thunk.
    searchInProgress: boolean,  // Progress indicator for thunk chain "performSearch".
    searchError: Error | null,  // Error info for thunk chain "performSearch".
    customerSearchListFetching: boolean,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
    customerSearchListError: Error | null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
    customerSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
    inputCustomerFetching: boolean,  // Fetching indicator for network thunk chain "callGetCustomer".
    inputCustomerError: Error | null,  // Network error info for thunk chain "callGetCustomer".
    inputCustomerCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCustomer".
    activitySave: boolean,  // Result for "performSave" thunk.
    activitySaveInProgress: boolean,  // Progress indicator for thunk chain "performSave".
    activitySaveError: Error | null,  // Error info for thunk chain "performSave".
    activityIncludeCreate: boolean,  // Fetch result for "callPostCustomerActivityIncludeCreate" thunk.
    activityIncludeCreateFetching: boolean,  // Fetching indicator for network thunk chain "callPostCustomerActivityIncludeCreate".
    activityIncludeCreateError: Error | null,  // Network error info for thunk chain "callPostCustomerActivityIncludeCreate".
    activityIncludeCreateCachedDate: Date | null,  // Response data cache date for network thunk chain "callPostCustomerActivityIncludeCreate".
    isVisibleErrorModalWindow: boolean,

    // TODO Describe CustomerActivityInclude reducer state.


}

export const initialState = {
    get state(): ICustomerActivityIncludeState {
        return defaultState.state
    }
}

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
    (currentUser: ModelsApp.Employee, currentCustomerManaged: Models.CustomerManaged,): void;
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