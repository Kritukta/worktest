/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsCustomerEditor from '../actions/ActionsCustomerEditor';
import { Enums } from '../Enums';
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor";
import { defaultValues } from '../models/Models';
import * as util from '../common/Util';
const reducerCustomerEditor = handleActions({
    // Thunk dispatched by "CustomerEditor" screen. Thunk chain used to show customer editor.
    [actionsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalCustomerEditor: true });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk chain used to validate customer editor.
    [actionsCustomerEditor.PERFORM_VALIDATE]: (state, action) => {
        return Object.assign({}, state, util.customerEditorAddressValidator(state));
    },
    // Internal thunk used in "CustomerEditor" container. Thunk chain used to swap customer and user.
    [actionsCustomerEditor.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: action.payload.isEditorMode, currentCustomerManaged: action.payload.customer, currentEditorStep: Enums.CustomerEditorStep.Address, inputBlock: action.payload.customer.address && action.payload.customer.address.block ? action.payload.customer.address.block : '', inputBuilding: action.payload.customer.address && action.payload.customer.address.building ? action.payload.customer.address.building : '', inputCity: action.payload.customer.address && action.payload.customer.address.city ? action.payload.customer.address.city : '', inputCountry: action.payload.customer.address && action.payload.customer.address.country ? action.payload.customer.address.country : defaultValues.Classifier, inputFlat: action.payload.customer.address && action.payload.customer.address.flat ? action.payload.customer.address.flat : '', inputHouse: action.payload.customer.address && action.payload.customer.address.house ? action.payload.customer.address.house : '', inputRegion: action.payload.customer.address && action.payload.customer.address.region ? action.payload.customer.address.region : '', inputSettlement: action.payload.customer.address && action.payload.customer.address.settlement ? action.payload.customer.address.settlement : '', inputStreet: action.payload.customer.address && action.payload.customer.address.street ? action.payload.customer.address.street : '', inputSubject: action.payload.customer.address && action.payload.customer.address.subject ? action.payload.customer.address.subject : '', inputCountryValidationError: null, inputSubjectValidationError: null, inputRegionValidationError: null, inputCityValidationError: null, inputSettlementValidationError: null, inputStreetValidationError: null, inputHouseValidationError: null, inputBuildingValidationError: null, inputBlockValidationError: null, inputFlatValidationError: null });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to cancel changes.
    [actionsCustomerEditor.PERFORM_CANCEL]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalCustomerEditor: false });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
    [actionsCustomerEditor.PERFORM_NEXT]: (state, action) => {
        return Object.assign({}, state, { currentEditorStep: Enums.CustomerEditorStep.View });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
    [actionsCustomerEditor.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { currentEditorStep: Enums.CustomerEditorStep.View, operationUuid: action.payload.operationUuidSave });
    },
    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
    [actionsCustomerEditor.PERFORM_SAVE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { customerSaveInProgress: true, customerSaveError: null });
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
    [actionsCustomerEditor.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSave: action.payload.data, customerSaveInProgress: false, customerSaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
    [actionsCustomerEditor.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSaveInProgress: false, customerSaveError: action.payload.error });
    },
    // Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
    [actionsCustomerEditor.CALL_GET_CUSTOMER_MODIFIER_ID]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
    [actionsCustomerEditor.CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerModifierIdFetching: true, customerModifierIdError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
    [actionsCustomerEditor.CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerModifierId: action.payload.response.data, customerModifierIdCachedDate: action.payload.response.cachedDate, customerModifierIdFetching: false, customerModifierIdError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
    [actionsCustomerEditor.CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerModifierIdFetching: false, customerModifierIdError: action.payload.error });
    },
    // Thunk dispatched by "CustomerEditor" screen. Fetch put request.
    [actionsCustomerEditor.CALL_PUT_CUSTOMER_UPDATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPutCustomerUpdate" started. Thunk dispatched by "CustomerEditor" screen. Fetch put request.
    [actionsCustomerEditor.CALL_PUT_CUSTOMER_UPDATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerUpdateFetching: true, customerUpdateError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPutCustomerUpdate". Thunk dispatched by "CustomerEditor" screen. Fetch put request.
    [actionsCustomerEditor.CALL_PUT_CUSTOMER_UPDATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerUpdate: action.payload.response.data, customerUpdateCachedDate: action.payload.response.cachedDate, customerUpdateFetching: false, customerUpdateError: null, isEditorMode: false });
    },
    // Action dispatched on fetch failure in thunk "callPutCustomerUpdate". Thunk dispatched by "CustomerEditor" screen. Fetch put request.
    [actionsCustomerEditor.CALL_PUT_CUSTOMER_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerUpdateFetching: false, customerUpdateError: action.payload.error });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user tap Country field.
    [actionsCustomerEditor.NAVIGATE_TO_COUNTRY_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Country field.
    [actionsCustomerEditor.PERFORM_INPUT_COUNTRY]: (state, action) => {
        return Object.assign({}, state, { inputCountry: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Subject field.
    [actionsCustomerEditor.PERFORM_INPUT_SUBJECT]: (state, action) => {
        return Object.assign({}, state, { inputSubject: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Region field.
    [actionsCustomerEditor.PERFORM_INPUT_REGION]: (state, action) => {
        return Object.assign({}, state, { inputRegion: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input City field.
    [actionsCustomerEditor.PERFORM_INPUT_CITY]: (state, action) => {
        return Object.assign({}, state, { inputCity: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Settlement field.
    [actionsCustomerEditor.PERFORM_INPUT_SETTLEMENT]: (state, action) => {
        return Object.assign({}, state, { inputSettlement: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Street field.
    [actionsCustomerEditor.PERFORM_INPUT_STREET]: (state, action) => {
        return Object.assign({}, state, { inputStreet: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input House field.
    [actionsCustomerEditor.PERFORM_INPUT_HOUSE]: (state, action) => {
        return Object.assign({}, state, { inputHouse: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Building field.
    [actionsCustomerEditor.PERFORM_INPUT_BUILDING]: (state, action) => {
        return Object.assign({}, state, { inputBuilding: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Block field.
    [actionsCustomerEditor.PERFORM_INPUT_BLOCK]: (state, action) => {
        return Object.assign({}, state, { inputBlock: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Flat field.
    [actionsCustomerEditor.PERFORM_INPUT_FLAT]: (state, action) => {
        return Object.assign({}, state, { inputFlat: action.payload.value });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk chain used to include company to Customer.
    [actionsCustomerEditor.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN]: (state, action) => {
        return Object.assign({}, state, { customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode.Include });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk chain used to exclude company from Customer.
    [actionsCustomerEditor.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN]: (state, action) => {
        return Object.assign({}, state, { customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode.Exclude });
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk chain used to close Gsz activity.
    [actionsCustomerEditor.CLOSE_CUSTOMER_ACTIVITY_PANEL]: (state, action) => {
        return Object.assign({}, state, { customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode.None });
    },
    // Thunk dispatched by "CustomerEditor" screen.
    [actionsCustomerEditor.NAVIGATE_CUSTOMER_EDITOR_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomerEditor.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsCustomerEditor.initialState.state);
    },
}, ModelsCustomerEditor.initialState.state);
export default reducerCustomerEditor;
//# sourceMappingURL=ReducerCustomerEditor.js.map