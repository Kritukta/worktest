/**
 * Actions of CustomerEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_CUSTOMER_EDITOR_SHOW = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_CUSTOMER_EDITOR_SHOW';
export const SWAP_CONTEXT = 'CUSTOMER_EDITOR_CONTAINER_SWAP_CONTEXT';
export const PERFORM_CANCEL = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_CANCEL';
export const PERFORM_NEXT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_NEXT';
export const PERFORM_SAVE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE';
export const PERFORM_SAVE_EXECUTE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_EXECUTE';
export const PERFORM_SAVE_SUCCESS = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_SUCCESS';
export const PERFORM_SAVE_FAILURE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE';
export const CALL_GET_CUSTOMER_MODIFIER_ID = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID';
export const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST';
export const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS';
export const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = 'CUSTOMER_EDITOR_CONTAINER_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE';
export const CALL_PUT_CUSTOMER_UPDATE = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE';
export const CALL_PUT_CUSTOMER_UPDATE_REQUEST = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_REQUEST';
export const CALL_PUT_CUSTOMER_UPDATE_SUCCESS = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_SUCCESS';
export const CALL_PUT_CUSTOMER_UPDATE_FAILURE = 'CUSTOMER_EDITOR_CONTAINER_CALL_PUT_CUSTOMER_UPDATE_FAILURE';
export const NAVIGATE_TO_COUNTRY_PICKER_SCREEN = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_COUNTRY_PICKER_SCREEN';
export const PERFORM_INPUT_COUNTRY = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_COUNTRY';
export const PERFORM_INPUT_SUBJECT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_SUBJECT';
export const PERFORM_INPUT_REGION = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_REGION';
export const PERFORM_INPUT_CITY = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_CITY';
export const PERFORM_INPUT_SETTLEMENT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_SETTLEMENT';
export const PERFORM_INPUT_STREET = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_STREET';
export const PERFORM_INPUT_HOUSE = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_HOUSE';
export const PERFORM_INPUT_BUILDING = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_BUILDING';
export const PERFORM_INPUT_BLOCK = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_BLOCK';
export const PERFORM_INPUT_FLAT = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_INPUT_FLAT';
export const NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN';
export const NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN';
export const CLOSE_CUSTOMER_ACTIVITY_PANEL = 'CUSTOMER_EDITOR_CONTAINER_CLOSE_CUSTOMER_ACTIVITY_PANEL';
export const NAVIGATE_CUSTOMER_EDITOR_BACK = 'CUSTOMER_EDITOR_CONTAINER_NAVIGATE_CUSTOMER_EDITOR_BACK';
export const PERFORM_CONTAINER_RESET = 'CUSTOMER_EDITOR_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_VALIDATE = 'CUSTOMER_EDITOR_PERFORM_VALIDATE';
export const performCustomerEditorShow = (customer) => ({
    type: PERFORM_CUSTOMER_EDITOR_SHOW,
    payload: {
        customer: customer,
    }
});
export const swapContext = (customer, isEditorMode) => ({
    type: SWAP_CONTEXT,
    payload: {
        customer: customer,
        isEditorMode: isEditorMode,
    }
});
export const performCancel = () => ({
    type: PERFORM_CANCEL,
    payload: {}
});
export const performNext = () => ({
    type: PERFORM_NEXT,
    payload: {}
});
export const performSave = (operationUuidSave) => ({
    type: PERFORM_SAVE,
    payload: {
        operationUuidSave: operationUuidSave,
    }
});
export const performSaveExecute = () => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
});
export const performValidate = () => ({
    type: PERFORM_VALIDATE,
    payload: {}
});
export const performSaveSuccess = (data) => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data
    }
});
export const performSaveFailure = (error) => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
});
export const callGetCustomerModifierId = () => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID,
    payload: {}
});
export const callGetCustomerModifierIdRequest = () => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST,
    payload: {}
});
export const callGetCustomerModifierIdSuccess = (response) => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetCustomerModifierIdFailure = (error) => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE,
    payload: {
        error: error
    }
});
export const callPutCustomerUpdate = () => ({
    type: CALL_PUT_CUSTOMER_UPDATE,
    payload: {}
});
export const callPutCustomerUpdateRequest = () => ({
    type: CALL_PUT_CUSTOMER_UPDATE_REQUEST,
    payload: {}
});
export const callPutCustomerUpdateSuccess = (response) => ({
    type: CALL_PUT_CUSTOMER_UPDATE_SUCCESS,
    payload: {
        response: response
    }
});
export const callPutCustomerUpdateFailure = (error) => ({
    type: CALL_PUT_CUSTOMER_UPDATE_FAILURE,
    payload: {
        error: error
    }
});
export const navigateToCountryPickerScreen = () => ({
    type: NAVIGATE_TO_COUNTRY_PICKER_SCREEN,
    payload: {}
});
export const performInputCountry = (value) => ({
    type: PERFORM_INPUT_COUNTRY,
    payload: {
        value: value,
    }
});
export const performInputSubject = (value) => ({
    type: PERFORM_INPUT_SUBJECT,
    payload: {
        value: value,
    }
});
export const performInputRegion = (value) => ({
    type: PERFORM_INPUT_REGION,
    payload: {
        value: value,
    }
});
export const performInputCity = (value) => ({
    type: PERFORM_INPUT_CITY,
    payload: {
        value: value,
    }
});
export const performInputSettlement = (value) => ({
    type: PERFORM_INPUT_SETTLEMENT,
    payload: {
        value: value,
    }
});
export const performInputStreet = (value) => ({
    type: PERFORM_INPUT_STREET,
    payload: {
        value: value,
    }
});
export const performInputHouse = (value) => ({
    type: PERFORM_INPUT_HOUSE,
    payload: {
        value: value,
    }
});
export const performInputBuilding = (value) => ({
    type: PERFORM_INPUT_BUILDING,
    payload: {
        value: value,
    }
});
export const performInputBlock = (value) => ({
    type: PERFORM_INPUT_BLOCK,
    payload: {
        value: value,
    }
});
export const performInputFlat = (value) => ({
    type: PERFORM_INPUT_FLAT,
    payload: {
        value: value,
    }
});
export const navigateToCustomerActivityIncludeScreen = () => ({
    type: NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    payload: {}
});
export const navigateToCustomerActivityExcludeScreen = () => ({
    type: NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    payload: {}
});
export const closeCustomerActivityPanel = () => ({
    type: CLOSE_CUSTOMER_ACTIVITY_PANEL,
    payload: {}
});
export const navigateCustomerEditorBack = () => ({
    type: NAVIGATE_CUSTOMER_EDITOR_BACK,
    payload: {}
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
//# sourceMappingURL=ActionsCustomerEditor.js.map