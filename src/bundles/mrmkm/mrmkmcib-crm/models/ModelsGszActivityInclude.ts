/**
 * Models for GszActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"




const defaultState = {
    get state(): IGszActivityIncludeState {
        return {

            inputSearch: '',  // State parameter displayed in "GszActivityInclude" screen. 
            customerSearchError: '',  // State parameter displayed in "GszActivityInclude" screen. 
            isSearchError: false,  // State parameter displayed in "GszActivityInclude" screen. 
            customerSearchList: defaultValues.CustomerList,  // State parameter displayed in "GszActivityInclude" screen. 
            inputSearchManagedOnly: false,  // State parameter displayed in "GszActivityInclude" screen. 
            inputCustomer: defaultValues.Customer,  // State parameter displayed in "GszActivityInclude" screen. 
            inputComment: 'Прошу включить организацию в состав ГСЗ',  // State parameter displayed in "GszActivityInclude" screen.
            operationUuid: '',  // State parameter displayed in "GszActivityInclude" screen. 
            gszActivityIncludeValidationComment: null,  // State parameter displayed in "GszActivityInclude" screen. 
            gszActivityIncludeValidationCustomer: null,  // State parameter displayed in "GszActivityInclude" screen. 
            search: defaultValues.boolean,  // Result for "performSearch" thunk.
            searchInProgress: false,  // Progress indicator for thunk chain "performSearch".
            searchError: null,  // Error info for thunk chain "performSearch".
            customerSearchListFetching: false,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
            customerSearchListError: null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
            customerSearchListCachedDate: null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
            activitySave: defaultValues.boolean,  // Result for "performSave" thunk.
            activitySaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            activitySaveError: null,  // Error info for thunk chain "performSave".
            activityIncludeCreate: defaultValues.boolean,  // Fetch result for "callPostGszActivityIncludeCreate" thunk.
            activityIncludeCreateFetching: false,  // Fetching indicator for network thunk chain "callPostGszActivityIncludeCreate".
            activityIncludeCreateError: null,  // Network error info for thunk chain "callPostGszActivityIncludeCreate".
            activityIncludeCreateCachedDate: null,  // Response data cache date for network thunk chain "callPostGszActivityIncludeCreate".
            isVisibleModalActivityError: false,


            // TODO Describe GszActivityInclude reducer state.


        }
    }
}

export interface IGszActivityIncludeState {
    isVisibleModalActivityError: boolean,
    inputSearch: string,  // State parameter displayed in "GszActivityInclude" screen. 
    customerSearchError: string,  // State parameter displayed in "GszActivityInclude" screen. 
    isSearchError: boolean,  // State parameter displayed in "GszActivityInclude" screen. 
    customerSearchList: Models.CustomerList,  // State parameter displayed in "GszActivityInclude" screen. 
    inputSearchManagedOnly: boolean,  // State parameter displayed in "GszActivityInclude" screen. 
    inputCustomer: Models.Customer,  // State parameter displayed in "GszActivityInclude" screen. 
    inputComment: string,  // State parameter displayed in "GszActivityInclude" screen. 
    operationUuid: string,  // State parameter displayed in "GszActivityInclude" screen. 
    gszActivityIncludeValidationComment: string | null,  // State parameter displayed in "GszActivityInclude" screen. 
    gszActivityIncludeValidationCustomer: string | null,  // State parameter displayed in "GszActivityInclude" screen. 
    search: boolean,  // Result for "performSearch" thunk.
    searchInProgress: boolean,  // Progress indicator for thunk chain "performSearch".
    searchError: Error | null,  // Error info for thunk chain "performSearch".
    customerSearchListFetching: boolean,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
    customerSearchListError: Error | null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
    customerSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
    activitySave: boolean,  // Result for "performSave" thunk.
    activitySaveInProgress: boolean,  // Progress indicator for thunk chain "performSave".
    activitySaveError: Error | null,  // Error info for thunk chain "performSave".
    activityIncludeCreate: boolean,  // Fetch result for "callPostGszActivityIncludeCreate" thunk.
    activityIncludeCreateFetching: boolean,  // Fetching indicator for network thunk chain "callPostGszActivityIncludeCreate".
    activityIncludeCreateError: Error | null,  // Network error info for thunk chain "callPostGszActivityIncludeCreate".
    activityIncludeCreateCachedDate: Date | null,  // Response data cache date for network thunk chain "callPostGszActivityIncludeCreate".



    // TODO Describe GszActivityInclude reducer state.


}

export const initialState = {
    get state(): IGszActivityIncludeState {
        return defaultState.state
    }
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
    (currentUser: ModelsApp.Employee,): void;
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