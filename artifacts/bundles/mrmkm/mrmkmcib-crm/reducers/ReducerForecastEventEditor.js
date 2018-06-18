/**
 * Reducers of ForecastEventEditor container.
 */
import { handleActions } from 'redux-actions';
import * as actionsForecastEvent from '../actions/ActionsForecastEventEditor';
import * as ModelsForecastEventEditor from "../models/ModelsForecastEventEditor";
import { defaultValues } from "../models/Models";
const reducerForecastEventEditor = handleActions({
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: true, savingForecastEventError: null });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: false });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: false, savingForecastEventError: action.payload.error });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: true, savingForecastEventError: null });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: false });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: false, savingForecastEventError: action.payload.error });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: true, savingForecastEventError: null });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: false });
    },
    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { savingForecastEventInProgress: false, savingForecastEventError: action.payload.error });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_DELETE]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_CANCEL]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_INIT]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventEmail: action.payload.email });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_LOAD]: (state, action) => {
        return Object.assign({}, state, action.payload.data, { isEditableMode: true });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_RESET]: (state, action) => {
        return Object.assign({}, ModelsForecastEventEditor.initialState.state);
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET]: (state) => {
        return Object.assign({}, state, { inputForecastEventCurrency: defaultValues.ForecastEvent.currency });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventComment: action.payload.comment });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventCurrency: action.payload.currency });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventDate: action.payload.date });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventEmail: action.payload.email });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventFullRepayment: action.payload.isFullRepayment, inputValidationForecastEventCurrency: null, inputValidationForecastEventSum: null, inputValidationForecastEventType: null, inputForecastEventCurrency: ModelsForecastEventEditor.initialState.state.inputForecastEventCurrency, inputForecastEventSum: ModelsForecastEventEditor.initialState.state.inputForecastEventSum });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventPossibility: action.payload.possibility });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventSum: action.payload.sum });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventType: action.payload.type });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_VALIDATE]: (state, action) => {
        return Object.assign({}, state, action.payload.inputValidation);
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_SAVE]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsForecastEvent.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleForecastEventModalSaveError: false });
    },
    [actionsForecastEvent.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleForecastEventModalSaveError: true });
    },
    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleForecastEventDeletePopover: false });
    },
    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleForecastEventDeletePopover: true });
    },
    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleForecastEventPossibilityPopover: false });
    },
    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleForecastEventPossibilityPopover: true });
    },
    [actionsForecastEvent.PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE]: (state, action) => {
        return Object.assign({}, state, { contextMode: action.payload.contextMode });
    },
}, ModelsForecastEventEditor.initialState.state);
export default reducerForecastEventEditor;
//# sourceMappingURL=ReducerForecastEventEditor.js.map