/**
 * Models for CustomerEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface ICustomerEditorState {
    currentCustomerManaged: Models.CustomerManaged;
    isVisibleModalCustomerEditor: boolean;
    currentEditorStep: Enums.CustomerEditorStep;
    isEditorMode: boolean;
    operationUuid: string;
    inputCountry: ModelsApp.Classifier;
    inputSubject: string;
    inputRegion: string;
    inputCity: string;
    inputSettlement: string;
    inputStreet: string;
    inputHouse: string;
    inputBuilding: string;
    inputBlock: string;
    inputFlat: string;
    customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode;
    customerSave: boolean;
    customerSaveInProgress: boolean;
    customerSaveError: Error | null;
    customerModifierId: Models.CustomerManaged;
    customerModifierIdFetching: boolean;
    customerModifierIdError: Error | null;
    customerModifierIdCachedDate: Date | null;
    customerUpdate: boolean;
    customerUpdateFetching: boolean;
    customerUpdateError: Error | null;
    customerUpdateCachedDate: Date | null;
    inputCountryValidationError: string | null;
    inputSubjectValidationError: string | null;
    inputRegionValidationError: string | null;
    inputCityValidationError: string | null;
    inputSettlementValidationError: string | null;
    inputStreetValidationError: string | null;
    inputHouseValidationError: string | null;
    inputBuildingValidationError: string | null;
    inputBlockValidationError: string | null;
    inputFlatValidationError: string | null;
}
export declare const initialState: {
    readonly state: ICustomerEditorState;
};
export interface PERFORM_CUSTOMER_EDITOR_SHOW {
    (customer: Models.CustomerManaged): void;
}
export interface SWAP_CONTEXT {
    (customer: Models.CustomerManaged, isEditorMode: boolean): void;
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
