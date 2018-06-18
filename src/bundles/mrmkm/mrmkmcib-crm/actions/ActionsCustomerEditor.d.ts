/**
 * Actions of CustomerEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_CUSTOMER_EDITOR_SHOW = "CUSTOMER_EDITOR_CONTAINER_PERFORM_CUSTOMER_EDITOR_SHOW";
export declare const SWAP_CONTEXT = "CUSTOMER_EDITOR_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_CANCEL = "CUSTOMER_EDITOR_CONTAINER_PERFORM_CANCEL";
export declare const PERFORM_NEXT = "CUSTOMER_EDITOR_CONTAINER_PERFORM_NEXT";
export declare const PERFORM_SAVE = "CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE";
export declare const PERFORM_SAVE_EXECUTE = "CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const PERFORM_SAVE_SUCCESS = "CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID = "CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = "CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = "CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = "CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE";
export declare const CALL_PUT_CUSTOMER_UPDATE = "CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE";
export declare const CALL_PUT_CUSTOMER_UPDATE_REQUEST = "CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_REQUEST";
export declare const CALL_PUT_CUSTOMER_UPDATE_SUCCESS = "CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_SUCCESS";
export declare const CALL_PUT_CUSTOMER_UPDATE_FAILURE = "CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_FAILURE";
export declare const NAVIGATE_TO_COUNTRY_PICKER_SCREEN = "CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_COUNTRY_PICKER_SCREEN";
export declare const PERFORM_INPUT_COUNTRY = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_COUNTRY";
export declare const PERFORM_INPUT_SUBJECT = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_SUBJECT";
export declare const PERFORM_INPUT_REGION = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_REGION";
export declare const PERFORM_INPUT_CITY = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_CITY";
export declare const PERFORM_INPUT_SETTLEMENT = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_SETTLEMENT";
export declare const PERFORM_INPUT_STREET = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_STREET";
export declare const PERFORM_INPUT_HOUSE = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_HOUSE";
export declare const PERFORM_INPUT_BUILDING = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_BUILDING";
export declare const PERFORM_INPUT_BLOCK = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_BLOCK";
export declare const PERFORM_INPUT_FLAT = "CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_FLAT";
export declare const NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN = "CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN";
export declare const NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN = "CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN";
export declare const CLOSE_CUSTOMER_ACTIVITY_PANEL = "CUSTOMER_EDITOR_CONTAINER_CLOSE_CUSTOMER_ACTIVITY_PANEL";
export declare const NAVIGATE_CUSTOMER_EDITOR_BACK = "CUSTOMER_EDITOR_CONTAINER_NAVIGATE_CUSTOMER_EDITOR_BACK";
export declare const PERFORM_CONTAINER_RESET = "CUSTOMER_EDITOR_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_VALIDATE = "CUSTOMER_EDITOR_PERFORM_VALIDATE";
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to show customer editor.
 *
 * @param {Models.CustomerManaged} customer .
 */
export declare type PERFORM_CUSTOMER_EDITOR_SHOW = {
    customer: Models.CustomerManaged;
};
export declare const performCustomerEditorShow: (customer: ModelsCrm.CustomerManaged) => Action<PERFORM_CUSTOMER_EDITOR_SHOW>;
/**
 * Internal thunk used in "CustomerEditor" container. Thunk chain used to swap customer and user.
 *
 * @param {Models.CustomerManaged} customer .
 * @param {boolean} isEditorMode .
 */
export declare type SWAP_CONTEXT = {
    customer: Models.CustomerManaged;
    isEditorMode: boolean;
};
export declare const swapContext: (customer: ModelsCrm.CustomerManaged, isEditorMode: boolean) => Action<SWAP_CONTEXT>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 *
 */
export declare type PERFORM_NEXT = {};
export declare const performNext: () => Action<PERFORM_NEXT>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 *
 * @param { string } operationUuidSave .
 */
export declare type PERFORM_SAVE = {
    operationUuidSave: string;
};
export declare const performSave: (operationUuidSave: string) => Action<PERFORM_SAVE>;
export declare type PERFORM_SAVE_EXECUTE = {};
export declare const performSaveExecute: () => Action<PERFORM_SAVE_EXECUTE>;
export declare type PERFORM_VALIDATE = {};
export declare const performValidate: () => Action<PERFORM_VALIDATE>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
};
export declare const performSaveSuccess: (data: boolean) => Action<PERFORM_SAVE_SUCCESS>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
/**
 * Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 *
 */
export declare type CALL_GET_CUSTOMER_MODIFIER_ID = {};
export declare const callGetCustomerModifierId: () => Action<CALL_GET_CUSTOMER_MODIFIER_ID>;
/**
 * Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 */
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = {};
export declare const callGetCustomerModifierIdRequest: () => Action<CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = {
    response: Response<Models.CustomerManaged>;
};
export declare const callGetCustomerModifierIdSuccess: (response: Response<ModelsCrm.CustomerManaged>) => Action<CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = {
    error: Error;
};
export declare const callGetCustomerModifierIdFailure: (error: Error) => Action<CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_CUSTOMER_UPDATE = {};
export declare const callPutCustomerUpdate: () => Action<CALL_PUT_CUSTOMER_UPDATE>;
/**
 * Action dispatched on network thunk chain "callPutCustomerUpdate" started. Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 */
export declare type CALL_PUT_CUSTOMER_UPDATE_REQUEST = {};
export declare const callPutCustomerUpdateRequest: () => Action<CALL_PUT_CUSTOMER_UPDATE_REQUEST>;
export declare type CALL_PUT_CUSTOMER_UPDATE_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPutCustomerUpdateSuccess: (response: Response<boolean>) => Action<CALL_PUT_CUSTOMER_UPDATE_SUCCESS>;
export declare type CALL_PUT_CUSTOMER_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutCustomerUpdateFailure: (error: Error) => Action<CALL_PUT_CUSTOMER_UPDATE_FAILURE>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user tap Country field.
 *
 */
export declare type NAVIGATE_TO_COUNTRY_PICKER_SCREEN = {};
export declare const navigateToCountryPickerScreen: () => Action<NAVIGATE_TO_COUNTRY_PICKER_SCREEN>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Country field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_COUNTRY = {
    value: ModelsApp.Classifier;
};
export declare const performInputCountry: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_COUNTRY>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Subject field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SUBJECT = {
    value: string;
};
export declare const performInputSubject: (value: string) => Action<PERFORM_INPUT_SUBJECT>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Region field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_REGION = {
    value: string;
};
export declare const performInputRegion: (value: string) => Action<PERFORM_INPUT_REGION>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input City field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_CITY = {
    value: string;
};
export declare const performInputCity: (value: string) => Action<PERFORM_INPUT_CITY>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Settlement field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_SETTLEMENT = {
    value: string;
};
export declare const performInputSettlement: (value: string) => Action<PERFORM_INPUT_SETTLEMENT>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Street field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_STREET = {
    value: string;
};
export declare const performInputStreet: (value: string) => Action<PERFORM_INPUT_STREET>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input House field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_HOUSE = {
    value: string;
};
export declare const performInputHouse: (value: string) => Action<PERFORM_INPUT_HOUSE>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Building field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_BUILDING = {
    value: string;
};
export declare const performInputBuilding: (value: string) => Action<PERFORM_INPUT_BUILDING>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Block field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_BLOCK = {
    value: string;
};
export declare const performInputBlock: (value: string) => Action<PERFORM_INPUT_BLOCK>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Flat field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_FLAT = {
    value: string;
};
export declare const performInputFlat: (value: string) => Action<PERFORM_INPUT_FLAT>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to include company to Customer.
 *
 */
export declare type NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN = {};
export declare const navigateToCustomerActivityIncludeScreen: () => Action<NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to exclude company from Customer.
 *
 */
export declare type NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN = {};
export declare const navigateToCustomerActivityExcludeScreen: () => Action<NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to close Gsz activity.
 *
 */
export declare type CLOSE_CUSTOMER_ACTIVITY_PANEL = {};
export declare const closeCustomerActivityPanel: () => Action<CLOSE_CUSTOMER_ACTIVITY_PANEL>;
/**
 * Thunk dispatched by "CustomerEditor" screen.
 *
 */
export declare type NAVIGATE_CUSTOMER_EDITOR_BACK = {};
export declare const navigateCustomerEditorBack: () => Action<NAVIGATE_CUSTOMER_EDITOR_BACK>;
/**
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
