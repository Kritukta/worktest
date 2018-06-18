/**
 * Models for CustomerActivityExclude container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"




const defaultState = {
    get state(): ICustomerActivityExcludeState {
        return {

            inputSearch: '',  // State parameter displayed in "CustomerActivityExclude" screen. 
            customerSearchList: defaultValues.CustomerList,  // State parameter displayed in "CustomerActivityExclude" screen. 
            inputSearchManagedOnly: false,  // State parameter displayed in "CustomerActivityExclude" screen. 
            inputCustomer: defaultValues.Customer,  // State parameter displayed in "CustomerActivityExclude" screen. 
            inputComment: 'Прошу включить организацию в Холдинг',  // State parameter displayed in "CustomerActivityExclude" screen.
            operationUuid: '',  // State parameter displayed in "CustomerActivityExclude" screen. 
            customerActivityExcludeValidationComment: null,  // State parameter displayed in "CustomerActivityExclude" screen. 
            customerActivityExcludeValidationCustomer: null,  // State parameter displayed in "CustomerActivityExclude" screen. 
            inputCustomerFetching: false,  // Fetching indicator for network thunk chain "callGetCustomer".
            inputCustomerError: null,  // Network error info for thunk chain "callGetCustomer".
            inputCustomerCachedDate: null,  // Response data cache date for network thunk chain "callGetCustomer".
            activitySave: defaultValues.boolean,  // Result for "performSave" thunk.
            activitySaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            activitySaveError: null,  // Error info for thunk chain "performSave".
            activityExcludeCreate: defaultValues.boolean,  // Fetch result for "callPostCustomerActivityExcludeCreate" thunk.
            activityExcludeCreateFetching: false,  // Fetching indicator for network thunk chain "callPostCustomerActivityExcludeCreate".
            activityExcludeCreateError: null,  // Network error info for thunk chain "callPostCustomerActivityExcludeCreate".
            activityExcludeCreateCachedDate: null,  // Response data cache date for network thunk chain "callPostCustomerActivityExcludeCreate".

            customerSearchListFetching: false,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
            customerSearchListError: null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
            customerSearchListCachedDate: null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
            isSearchError: false,
            customerSearchError: '',  // State parameter displayed in "CustomerActivityExclude" screen.
            searchError: null,
            isVisibleErrorModalWindow: false, // State parameter displayed in "CustomerActivityExclude" screen.
            // TODO Describe CustomerActivityExclude reducer state.


        }
    }
}

export interface ICustomerActivityExcludeState {
    
    isVisibleErrorModalWindow: boolean, // State parameter displayed in "CustomerActivityExclude" screen.
    inputSearch: string,  // State parameter displayed in "CustomerActivityExclude" screen. 
    customerSearchList: Models.CustomerList,  // State parameter displayed in "CustomerActivityExclude" screen. 
    inputSearchManagedOnly: boolean,  // State parameter displayed in "CustomerActivityExclude" screen. 
    inputCustomer: Models.Customer,  // State parameter displayed in "CustomerActivityExclude" screen. 
    inputComment: string,  // State parameter displayed in "CustomerActivityExclude" screen. 
    operationUuid: string,  // State parameter displayed in "CustomerActivityExclude" screen. 
    customerActivityExcludeValidationComment: string | null,  // State parameter displayed in "CustomerActivityExclude" screen. 
    customerActivityExcludeValidationCustomer: string | null,  // State parameter displayed in "CustomerActivityExclude" screen. 
    inputCustomerFetching: boolean,  // Fetching indicator for network thunk chain "callGetCustomer".
    inputCustomerError: Error | null,  // Network error info for thunk chain "callGetCustomer".
    inputCustomerCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCustomer".
    activitySave: boolean,  // Result for "performSave" thunk.
    activitySaveInProgress: boolean,  // Progress indicator for thunk chain "performSave".
    activitySaveError: Error | null,  // Error info for thunk chain "performSave".
    activityExcludeCreate: boolean,  // Fetch result for "callPostCustomerActivityExcludeCreate" thunk.
    activityExcludeCreateFetching: boolean,  // Fetching indicator for network thunk chain "callPostCustomerActivityExcludeCreate".
    activityExcludeCreateError: Error | null,  // Network error info for thunk chain "callPostCustomerActivityExcludeCreate".
    activityExcludeCreateCachedDate: Date | null,  // Response data cache date for network thunk chain "callPostCustomerActivityExcludeCreate".

    customerSearchListFetching: boolean,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
    customerSearchListError: Error | null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
    customerSearchListCachedDate: Date| null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
    isSearchError: boolean,
    searchError: Error | null,
    customerSearchError: string,  // State parameter displayed in "CustomerActivityExclude" screen.
    // TODO Describe CustomerActivityExclude reducer state.


}

export const initialState = {
    get state(): ICustomerActivityExcludeState {
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

export interface FILTER_CUSTOMER_LIST {
    (inputSearch: string, inputSearchManagedOnly: boolean, currentCustomerManaged: Models.CustomerManaged,): void;
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
    (currentUser: ModelsApp.Employee, currentCustomerManaged: Models.CustomerManaged,): void;
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


export interface  PERFORM_CALL_GET_ACTIVITY_CUSTOMER_LIST_NEXT_PAGE {
    ():void
}