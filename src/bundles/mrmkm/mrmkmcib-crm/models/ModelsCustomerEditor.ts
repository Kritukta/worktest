/**
 * Models for CustomerEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


// TODO Describe models used in CustomerEditor actions and thunks.


const defaultState = {
    get state(): ICustomerEditorState {
        return {

            currentCustomerManaged: defaultValues.CustomerManaged,  // State parameter displayed in "CustomerEditor" screen.
            isVisibleModalCustomerEditor: false,  // State parameter displayed in "CustomerEditor" screen.
            currentEditorStep: Enums.CustomerEditorStep.Address,  // State parameter displayed in "CustomerEditor" screen.
            isEditorMode: false,  // State parameter displayed in "CustomerEditor" screen.
            operationUuid: '',  // State parameter displayed in "CustomerEditor" screen.
            inputCountry: defaultValues.Classifier,  // State parameter displayed in "CustomerEditor" screen.
            inputSubject: '',  // State parameter displayed in "CustomerEditor" screen.
            inputRegion: '',  // State parameter displayed in "CustomerEditor" screen.
            inputCity: '',  // State parameter displayed in "CustomerEditor" screen.
            inputSettlement: '',  // State parameter displayed in "CustomerEditor" screen.
            inputStreet: '',  // State parameter displayed in "CustomerEditor" screen.
            inputHouse: '',  // State parameter displayed in "CustomerEditor" screen.
            inputBuilding: '',  // State parameter displayed in "CustomerEditor" screen.
            inputBlock: '',  // State parameter displayed in "CustomerEditor" screen.
            inputFlat: '',  // State parameter displayed in "CustomerEditor" screen.
            customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode.None,  // State parameter displayed in "CustomerEditor" screen.
            customerSave: defaultValues.boolean,  // Result for "performSave" thunk.
            customerSaveInProgress: false,  // Progress indicator for thunk chain "performSave".
            customerSaveError: null,  // Error info for thunk chain "performSave".
            customerModifierId: defaultValues.CustomerManaged,  // Fetch result for "callGetCustomerModifierId" thunk.
            customerModifierIdFetching: false,  // Fetching indicator for network thunk chain "callGetCustomerModifierId".
            customerModifierIdError: null,  // Network error info for thunk chain "callGetCustomerModifierId".
            customerModifierIdCachedDate: null,  // Response data cache date for network thunk chain "callGetCustomerModifierId".
            customerUpdate: defaultValues.boolean,  // Fetch result for "callPutCustomerUpdate" thunk.
            customerUpdateFetching: false,  // Fetching indicator for network thunk chain "callPutCustomerUpdate".
            customerUpdateError: null,  // Network error info for thunk chain "callPutCustomerUpdate".
            customerUpdateCachedDate: null,  // Response data cache date for network thunk chain "callPutCustomerUpdate".

            inputCountryValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputSubjectValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputRegionValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputCityValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputSettlementValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputStreetValidationError:  null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputHouseValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputBuildingValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputBlockValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
            inputFlatValidationError: null,  // State parameter displayed in "CustomerEditor" screen. ValidationError

        }
    }
}

export interface ICustomerEditorState {

    currentCustomerManaged: Models.CustomerManaged,  // State parameter displayed in "CustomerEditor" screen.
    isVisibleModalCustomerEditor: boolean,  // State parameter displayed in "CustomerEditor" screen.
    currentEditorStep: Enums.CustomerEditorStep,  // State parameter displayed in "CustomerEditor" screen.
    isEditorMode: boolean,  // State parameter displayed in "CustomerEditor" screen.
    operationUuid: string,  // State parameter displayed in "CustomerEditor" screen.
    inputCountry: ModelsApp.Classifier,  // State parameter displayed in "CustomerEditor" screen.
    inputSubject: string,  // State parameter displayed in "CustomerEditor" screen.
    inputRegion: string,  // State parameter displayed in "CustomerEditor" screen.
    inputCity: string,  // State parameter displayed in "CustomerEditor" screen.
    inputSettlement: string,  // State parameter displayed in "CustomerEditor" screen.
    inputStreet: string,  // State parameter displayed in "CustomerEditor" screen.
    inputHouse: string,  // State parameter displayed in "CustomerEditor" screen.
    inputBuilding: string,  // State parameter displayed in "CustomerEditor" screen.
    inputBlock: string,  // State parameter displayed in "CustomerEditor" screen.
    inputFlat: string,  // State parameter displayed in "CustomerEditor" screen.
    customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode,  // State parameter displayed in "CustomerEditor" screen.
    customerSave: boolean,  // Result for "performSave" thunk.
    customerSaveInProgress: boolean,  // Progress indicator for thunk chain "performSave".
    customerSaveError: Error | null,  // Error info for thunk chain "performSave".
    customerModifierId: Models.CustomerManaged,  // Fetch result for "callGetCustomerModifierId" thunk.
    customerModifierIdFetching: boolean,  // Fetching indicator for network thunk chain "callGetCustomerModifierId".
    customerModifierIdError: Error | null,  // Network error info for thunk chain "callGetCustomerModifierId".
    customerModifierIdCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCustomerModifierId".
    customerUpdate: boolean,  // Fetch result for "callPutCustomerUpdate" thunk.
    customerUpdateFetching: boolean,  // Fetching indicator for network thunk chain "callPutCustomerUpdate".
    customerUpdateError: Error | null,  // Network error info for thunk chain "callPutCustomerUpdate".
    customerUpdateCachedDate: Date | null,  // Response data cache date for network thunk chain "callPutCustomerUpdate".

    inputCountryValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputSubjectValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputRegionValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputCityValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputSettlementValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputStreetValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputHouseValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputBuildingValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputBlockValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    inputFlatValidationError: string | null,  // State parameter displayed in "CustomerEditor" screen. ValidationError
    // TODO Describe CustomerEditor reducer state.


}

export const initialState = {
    get state(): ICustomerEditorState {
        return defaultState.state
    }
}


export interface PERFORM_CUSTOMER_EDITOR_SHOW {
    (customer: Models.CustomerManaged,): void;
}

export interface SWAP_CONTEXT {
    (customer: Models.CustomerManaged, isEditorMode: boolean,): void;
}

export interface PERFORM_CANCEL {
    (): void;
}

export interface PERFORM_NEXT {
    (): void;
}

export interface PERFORM_SAVE {
    (): void;
}

export interface CALL_GET_CUSTOMER_MODIFIER_ID {
    (): void;
}

export interface CALL_PUT_CUSTOMER_UPDATE {
    (): void;
}

export interface NAVIGATE_TO_COUNTRY_PICKER_SCREEN {
    (): void;
}

export interface PERFORM_INPUT_COUNTRY {
    (value: ModelsApp.Classifier): void;
}

export interface PERFORM_INPUT_SUBJECT {
    (value: string): void;
}

export interface PERFORM_INPUT_REGION {
    (value: string): void;
}

export interface PERFORM_INPUT_CITY {
    (value: string): void;
}

export interface PERFORM_INPUT_SETTLEMENT {
    (value: string): void;
}

export interface PERFORM_INPUT_STREET {
    (value: string): void;
}

export interface PERFORM_INPUT_HOUSE {
    (value: string): void;
}

export interface PERFORM_INPUT_BUILDING {
    (value: string): void;
}

export interface PERFORM_INPUT_BLOCK {
    (value: string): void;
}

export interface PERFORM_INPUT_FLAT {
    (value: string): void;
}

export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN {
    (): void;
}

export interface CLOSE_CUSTOMER_ACTIVITY_PANEL {
    (): void;
}

export interface NAVIGATE_CUSTOMER_EDITOR_BACK {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}