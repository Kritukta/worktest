/**
 * Reducers of ForecastEventEditor container.
 */
import {handleActions} from 'redux-actions'
import * as actionsForecastEvent from '../actions/ActionsForecastEventEditor'
import * as ModelsForecastEventEditor from "../models/ModelsForecastEventEditor"
import Action from "../models/Action"
import * as util from '../common/Util'
import {defaultValues} from "../models/Models"

const reducerForecastEventEditor = handleActions<ModelsForecastEventEditor.IForecastEventEditorState>({

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_REQUEST]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_REQUEST>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: true,
            savingForecastEventError: null

        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_SUCCESS]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_SUCCESS>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: false
        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_FAILURE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_CREATE_FAILURE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: false,
            savingForecastEventError: action.payload.error
        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_REQUEST]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_REQUEST>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: true,
            savingForecastEventError: null

        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: false
        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_FAILURE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_UPDATE_FAILURE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: false,
            savingForecastEventError: action.payload.error
        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_REQUEST]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_REQUEST>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: true,
            savingForecastEventError: null

        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_SUCCESS]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_SUCCESS>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: false
        }
    },

    [actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_FAILURE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.CALL_POST_FORECAST_EVENT_DELETE_FAILURE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            savingForecastEventInProgress: false,
            savingForecastEventError: action.payload.error
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_DELETE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_DELETE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_CANCEL]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_CANCEL>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_INIT]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_INIT>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventEmail: action.payload.email
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_LOAD]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_LOAD>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            ...action.payload.data,
            isEditableMode: true,
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_RESET]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_RESET>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...ModelsForecastEventEditor.initialState.state
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET]: (state: ModelsForecastEventEditor.IForecastEventEditorState): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventCurrency: defaultValues.ForecastEvent.currency
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventComment: action.payload.comment
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventCurrency: action.payload.currency
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventDate: action.payload.date
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventEmail: action.payload.email
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventFullRepayment: action.payload.isFullRepayment,
            inputValidationForecastEventCurrency: null,
            inputValidationForecastEventSum: null,
            inputValidationForecastEventType: null,
            inputForecastEventCurrency: ModelsForecastEventEditor.initialState.state.inputForecastEventCurrency,
            inputForecastEventSum: ModelsForecastEventEditor.initialState.state.inputForecastEventSum,
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventPossibility: action.payload.possibility
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventSum: action.payload.sum
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            inputForecastEventType: action.payload.type

        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_VALIDATE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_FORM_VALIDATE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            ...action.payload.inputValidation
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_SAVE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_SAVE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state
        }
    },

    [actionsForecastEvent.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            isVisibleForecastEventModalSaveError: false
        }
    },

    [actionsForecastEvent.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            isVisibleForecastEventModalSaveError: true
        }
    },

    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            isVisibleForecastEventDeletePopover: false
        }
    },

    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            isVisibleForecastEventDeletePopover: true
        }
    },

    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            isVisibleForecastEventPossibilityPopover: false
        }
    },

    [actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            isVisibleForecastEventPossibilityPopover: true
        }
    },

    [actionsForecastEvent.PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE]: (state: ModelsForecastEventEditor.IForecastEventEditorState, action: Action<actionsForecastEvent.PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE>): ModelsForecastEventEditor.IForecastEventEditorState => {
        return {
            ...state,
            contextMode: action.payload.contextMode
        }
    },

}, ModelsForecastEventEditor.initialState.state)

export default reducerForecastEventEditor
