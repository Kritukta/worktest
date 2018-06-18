/*
 * Created by Burnaev M.U.
 */
import { performFlush, } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { defaultValues } from '../models/Models';
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsCustomerEditor from '../actions/ActionsCustomerEditor';
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor';
import { SplitPanelActions } from 'ufs-mobile-platform';
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to show customer editor.
 */
export const performCustomerEditorShow = (customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    //dispatch(SplitPanelActions.pushContent(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor_Form, util.getNavigationString(Enums.Navigation.AppCRM)))
    dispatch(actionsCustomerEditor.performCustomerEditorShow(customer));
    // Dispatch thunk "swapContext" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(thunkCustomerEditor.swapContext(state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.holder != null) && (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, state.user.mrmkmcibCRM.reducerAppCRM.currentUser.id == state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.holder.id)));
};
/*
 * Internal thunk used in "CustomerEditor" container. Thunk chain used to swap customer and user.
 */
export const swapContext = (customer, isEditorMode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.swapContext(customer, isEditorMode));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor)));
    dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor_Form)));
    dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
    dispatch(actionsCustomerEditor.performCancel());
    dispatch(performContainerReset());
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 */
export const performNext = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performValidate());
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    if (!(reducerState.inputBlockValidationError ||
        reducerState.inputBuildingValidationError ||
        reducerState.inputCityValidationError ||
        reducerState.inputCountryValidationError ||
        reducerState.inputFlatValidationError ||
        reducerState.inputHouseValidationError ||
        reducerState.inputRegionValidationError ||
        reducerState.inputSettlementValidationError ||
        reducerState.inputStreetValidationError ||
        reducerState.inputSubjectValidationError)) {
        dispatch(SplitPanelActions.pushContent(Enums.NavigationViewCustomerEditorStep.AppCRM_CustomerEditor_View, util.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor_Form)));
        dispatch(actionsCustomerEditor.performNext());
    }
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to go to next step.
 */
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    if (reducerState.customerSaveInProgress) {
        return;
    }
    const operationUuidSave = util.getRandomOperationUuid();
    dispatch(actionsCustomerEditor.performSave(operationUuidSave));
    if (!reducerState.customerSaveInProgress) {
        dispatch(actionsCustomerEditor.performSaveExecute());
        // Dispatch thunk "callGetCustomerModifierId" synchronously.
        dispatch(thunkCustomerEditor.callGetCustomerModifierId());
        /* TODO Perform JS Promise and handle success and failure or dispatch performSaveSuccess and performSaveFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkCustomerEditor.performSaveSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkCustomerEditor.performSaveFailure(null)) */
    }
};
/*
 * Internal thunk used in "CustomerEditor" container. Open Customer and refresh after customer`s data updated.
 */
export const performCustomerOpenAfterSaveSuccess = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    // hide CustomerEditor panel
    dispatch(performCancel());
    // refresh customer
    dispatch(performFlush());
};
export const performSaveSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performSaveSuccess(data));
    dispatch(performCustomerOpenAfterSaveSuccess());
};
export const performSaveFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performSaveFailure(error));
};
/*
 * Internal thunk used in "CustomerEditor" container. Fetch current customer modifier Id.
 */
export const callGetCustomerModifierId = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    if (reducerState.customerModifierIdFetching) {
        return;
    }
    let operationId = reducerState.currentCustomerManaged.id;
    dispatch(actionsCustomerEditor.callGetCustomerModifierId());
    if (!reducerState.customerModifierIdFetching) {
        dispatch(actionsCustomerEditor.callGetCustomerModifierIdRequest());
        util.call(util.urlCustomerEditor.callGetCustomerModifierId(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
            if (reducerState.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerEditor.callGetCustomerModifierIdSuccess(response));
            // Dispatch thunk "callPutCustomerUpdate" on fetch succeeded.
            dispatch(thunkCustomerEditor.callPutCustomerUpdate());
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
            if (reducerState.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerEditor.callGetCustomerModifierIdFailure(error));
            // Dispatch thunk "performSaveFailure" on fetch failure.
            dispatch(thunkCustomerEditor.performSaveFailure(error));
        }, Converters.RESPONSE_CUSTOMER_EDITOR_CALL_GET_CUSTOMER_MODIFIER_ID_TO_CUSTOMER_MANAGED, 'GET');
    }
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Fetch put request.
 */
export const callPutCustomerUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    if (reducerState.customerUpdateFetching) {
        return;
    }
    let operationId = reducerState.currentCustomerManaged.id;
    dispatch(actionsCustomerEditor.callPutCustomerUpdate());
    if (!reducerState.customerUpdateFetching) {
        dispatch(actionsCustomerEditor.callPutCustomerUpdateRequest());
        util.call(util.urlCustomerEditor.callPutCustomerUpdate(state, reducerState.currentCustomerManaged, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
            if (reducerState.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerEditor.callPutCustomerUpdateSuccess(response));
            // Dispatch thunk "performSaveSuccess" on fetch succeeded.
            dispatch(thunkCustomerEditor.performSaveSuccess(true));
        }, (error) => {
            // console.log('callPutCustomerUpdate - failure')
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
            if (reducerState.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerEditor.callPutCustomerUpdateFailure(error));
            // Dispatch thunk "performSaveFailure" on fetch failure.
            dispatch(thunkCustomerEditor.performSaveFailure(error));
        }, Converters.RESPONSE_CUSTOMER_EDITOR_CALL_PUT_CUSTOMER_UPDATE_TO_BOOLEAN, 'PUT', { 'Content-type': 'application/json; charset=UTF-8' }, Converters.REQUEST_CUSTOMER_EDITOR_CALL_PUT_CUSTOMER_UPDATE_FROM_CUSTOMER_UPDATE_REQUEST, {
            operationUuid: reducerState.operationUuid,
            modId: reducerState.customerModifierId.modId,
            name: reducerState.customerModifierId.name,
            id: reducerState.customerModifierId.id,
            address: Object.assign({}, defaultValues.Address, { region: reducerState.inputRegion, building: reducerState.inputBuilding, city: reducerState.inputCity, country: reducerState.inputCountry, id: reducerState.currentCustomerManaged.address ? reducerState.currentCustomerManaged.address.id : null, isActive: reducerState.currentCustomerManaged.address ? reducerState.currentCustomerManaged.address.isActive : null, isPrimary: reducerState.currentCustomerManaged.address ? reducerState.currentCustomerManaged.address.isPrimary : null, modId: reducerState.customerModifierId.address ? reducerState.customerModifierId.address.modId : 0, settlement: reducerState.inputSettlement, subject: reducerState.inputSubject, street: reducerState.inputStreet, type: reducerState.currentCustomerManaged.address ? reducerState.currentCustomerManaged.address.type : null, house: reducerState.inputHouse, block: reducerState.inputBlock, flat: reducerState.inputFlat })
        });
    }
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user tap Country field.
 */
export const navigateToCountryPickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationViewCustomerEditor.AppCRM_CustomerEditor_Country, util.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor)));
    dispatch(actionsCustomerEditor.navigateToCountryPickerScreen());
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Country field.
 */
export const performInputCountry = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputCountry(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Subject field.
 */
export const performInputSubject = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputSubject(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Region field.
 */
export const performInputRegion = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputRegion(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input City field.
 */
export const performInputCity = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputCity(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Settlement field.
 */
export const performInputSettlement = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputSettlement(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Street field.
 */
export const performInputStreet = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputStreet(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input House field.
 */
export const performInputHouse = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputHouse(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Building field.
 */
export const performInputBuilding = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputBuilding(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Block field.
 */
export const performInputBlock = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputBlock(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched on user input Flat field.
 */
export const performInputFlat = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performInputFlat(value));
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to include company to Customer.
 */
export const navigateToCustomerActivityIncludeScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    switch (reducerState.customerEditorActivityCreateMode) {
        case Enums.CustomerEditorActivityCreateMode.Exclude: {
            dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
            dispatch(actionsCustomerEditor.navigateToCustomerActivityIncludeScreen());
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
            if (reducerState.customerEditorActivityCreateMode !== Enums.CustomerEditorActivityCreateMode.Exclude) {
                setTimeout(() => {
                    dispatch(SplitPanelActions.pushContent(Enums.NavigationCustomerEditorIncludeExclude.AppCRM_CustomerEditor_Include, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
                }, 1000);
            }
            break;
        }
        case Enums.CustomerEditorActivityCreateMode.None: {
            dispatch(SplitPanelActions.pushContent(Enums.NavigationCustomerEditorIncludeExclude.AppCRM_CustomerEditor_Include, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
            dispatch(actionsCustomerEditor.navigateToCustomerActivityIncludeScreen());
            break;
        }
        case Enums.CustomerEditorActivityCreateMode.Include: {
            break;
        }
    }
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to exclude company from Customer.
 */
export const navigateToCustomerActivityExcludeScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    switch (reducerState.customerEditorActivityCreateMode) {
        case Enums.CustomerEditorActivityCreateMode.Include: {
            dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
            dispatch(actionsCustomerEditor.navigateToCustomerActivityExcludeScreen());
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
            if (reducerState.customerEditorActivityCreateMode !== Enums.CustomerEditorActivityCreateMode.Include) {
                setTimeout(() => {
                    dispatch(SplitPanelActions.pushContent(Enums.NavigationCustomerEditorIncludeExclude.AppCRM_CustomerEditor_Exclude, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
                }, 1000);
            }
            break;
        }
        case Enums.CustomerEditorActivityCreateMode.Exclude: {
            break;
        }
        case Enums.CustomerEditorActivityCreateMode.None: {
            dispatch(SplitPanelActions.pushContent(Enums.NavigationCustomerEditorIncludeExclude.AppCRM_CustomerEditor_Exclude, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
            dispatch(actionsCustomerEditor.navigateToCustomerActivityExcludeScreen());
            break;
        }
    }
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk chain used to close Gsz activity.
 */
export const closeCustomerActivityPanel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
    dispatch(actionsCustomerEditor.closeCustomerActivityPanel());
};
/*
 * Thunk dispatched by "CustomerEditor" screen.
 */
export const navigateCustomerEditorBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationiewCustomerEditorMainString(Enums.NavigationViewCustomerEditorMain.AppCRM_CustomerEditor)));
    dispatch(actionsCustomerEditor.navigateCustomerEditorBack());
};
/*
 * Thunk dispatched by "CustomerEditor" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerEditor;
    dispatch(actionsCustomerEditor.performContainerReset());
};
//# sourceMappingURL=ThunkCustomerEditor.js.map