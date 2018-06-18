/**
 * Models for GszActivityExclude container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


const defaultState = {
    get state(): IGszActivityExcludeState {
        return {

            inputSearch: '',  // State parameter displayed in "GszActivityExclude" screen. 
            customerSearchError: '',  // State parameter displayed in "GszActivityExclude" screen. 
            isSearchError: false,  // State parameter displayed in "GszActivityExclude" screen. 
            customerSearchListError: null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
            customerSearchListCachedDate: null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
            customerSearchList: defaultValues.CustomerList,  // State parameter displayed in "GszActivityExclude" screen. 
            inputSearchManagedOnly: false,  // State parameter displayed in "GszActivityExclude" screen. 
            inputCustomer: defaultValues.Customer,  // State parameter displayed in "GszActivityExclude" screen. 
            inputComment: 'Прошу исключить организацию из состава ГСЗ',  // State parameter displayed in "GszActivityExclude" screen. 
            operationUuid: '',  // State parameter displayed in "GszActivityExclude" screen. 
            gszActivityExcludeValidationComment: null,  // State parameter displayed in "GszActivityExclude" screen. 
            gszActivityExcludeValidationCustomer: null,  // State parameter displayed in "GszActivityExclude" screen. 
            activitySave: defaultValues.boolean,  // Result for "performSave" thunk.
            activitySaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            activitySaveError: null,  // Error info for thunk chain "performSave".
            activityExcludeCreate: defaultValues.boolean,  // Fetch result for "callPostGszActivityExcludeCreate" thunk.
            activityExcludeCreateFetching: false,  // Fetching indicator for network thunk chain "callPostGszActivityExcludeCreate".
            activityExcludeCreateError: null,  // Network error info for thunk chain "callPostGszActivityExcludeCreate".
            activityExcludeCreateCachedDate: null,  // Response data cache date for network thunk chain "callPostGszActivityExcludeCreate".
            isVisibleModalActivityError: false,
            searchError: null,  // Error info for thunk chain "performSearch".
            searchInProgress: false,  // Progress indicator for thunk chain "performSearch".
            customerSearchListFetching: false,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".


            // TODO Describe GszActivityExclude reducer state.


        }
    }
}

export interface IGszActivityExcludeState {
    isVisibleModalActivityError: boolean,
    customerSearchList: Models.CustomerList,  // State parameter displayed in "GszActivityInclude" screen. 
    isSearchError: boolean,  // State parameter displayed in "GszActivityExclude" screen. 
    customerSearchError: string,  // State parameter displayed in "GszActivityExclude" screen. 
    inputSearch: string,  // State parameter displayed in "GszActivityExclude" screen. 
    inputSearchManagedOnly: boolean,  // State parameter displayed in "GszActivityExclude" screen. 
    inputCustomer: Models.Customer,  // State parameter displayed in "GszActivityExclude" screen. 
    inputComment: string,  // State parameter displayed in "GszActivityExclude" screen. 
    operationUuid: string,  // State parameter displayed in "GszActivityExclude" screen. 
    gszActivityExcludeValidationComment: string | null,  // State parameter displayed in "GszActivityExclude" screen. 
    gszActivityExcludeValidationCustomer: string | null,  // State parameter displayed in "GszActivityExclude" screen. 
    activitySave: boolean,  // Result for "performSave" thunk.
    activitySaveInProgress: boolean,  // Progress indicator for thunk chain "performSave".
    activitySaveError: Error | null,  // Error info for thunk chain "performSave".
    activityExcludeCreate: boolean,  // Fetch result for "callPostGszActivityExcludeCreate" thunk.
    activityExcludeCreateFetching: boolean,  // Fetching indicator for network thunk chain "callPostGszActivityExcludeCreate".
    activityExcludeCreateError: Error | null,  // Network error info for thunk chain "callPostGszActivityExcludeCreate".
    activityExcludeCreateCachedDate: Date | null,  // Response data cache date for network thunk chain "callPostGszActivityExcludeCreate".
    searchError: Error | null,  // Error info for thunk chain "performSearch".
    searchInProgress: boolean,  // Progress indicator for thunk chain "performSearch".
    customerSearchListFetching: boolean,  // Fetching indicator for network thunk chain "search_callGetCustomerSearchList".
    customerSearchListError: Error | null,  // Network error info for thunk chain "search_callGetCustomerSearchList".
    customerSearchListCachedDate: Date | null,  // Response data cache date for network thunk chain "search_callGetCustomerSearchList".
    // TODO Describe GszActivityExclude reducer state.


}

export const initialState = {
    get state(): IGszActivityExcludeState {
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
    (inputSearch: string, inputSearchManagedOnly: boolean, currentGsz: Models.Gsz,): void;
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
export interface PERFORM_CHAGNE_VISIBLE_ERROR_MODAL {
    (status: boolean): void;
}