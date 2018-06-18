/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsOccasion from '../actions/ActionsOccasion'
import {defaultValues} from "../models/Models"
import * as ModelsOccasion from "../models/ModelsOccasion"
import Action from "../models/Action"


import {Enums} from "../Enums"
import * as util from '../common/Util'


const reducerOccasion = handleActions<ModelsOccasion.IOccasionState>({


    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_SAVE_EXECUTE]: (state: ModelsOccasion.IOccasionState, action: Action<void>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            occasionSaveInProgress: true,
            occasionSaveError: null,
        }
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_SAVE_SUCCESS]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_SAVE_SUCCESS>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            occasionSave: action.payload.data,
            occasionSaveInProgress: false,
            occasionSaveError: null,
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_SAVE_FAILURE]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_SAVE_FAILURE>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            occasionSaveInProgress: false,
            occasionSaveError: action.payload.error,
        }
    },

    // Internal thunk used in "Occasion" container. Thunk used to confirm changes in Occasion.
    [actionsOccasion.PERFORM_VALIDATE]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_VALIDATE>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            errorValidationList: action.payload.validationErrorList,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk used to cancel changes.
    [actionsOccasion.PERFORM_CANCEL]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_CANCEL>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            occasionMode: Enums.OccasionMode.Watch,
            inputOccasionType: state.currentOccasion.type,
            inputDate: state.currentOccasion.date,
            inputNoYear: state.currentOccasion.isAnnual,
            inputComment: state.currentOccasion.comment,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk used to show occasion type picker screen.
    [actionsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.NAVIGATE_TO_OCCASION_TYPE_PICKER_SCREEN>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion type field.
    [actionsOccasion.PERFORM_INPUT_OCCASION_TYPE]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_INPUT_OCCASION_TYPE>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            inputOccasionType: action.payload.value,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion date field.
    [actionsOccasion.PERFORM_INPUT_DATE]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_INPUT_DATE>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            inputDate: action.payload.value,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input NoYear field.
    [actionsOccasion.PERFORM_INPUT_NO_YEAR]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_INPUT_NO_YEAR>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            inputNoYear: action.payload.value,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk dispatched on user input comment field.
    [actionsOccasion.PERFORM_INPUT_COMMENT]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_INPUT_COMMENT>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            inputComment: action.payload.value,
        }
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to close occasion.
    [actionsOccasion.PERFORM_CLOSE_OCCASION_SCREEN]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_CLOSE_OCCASION_SCREEN>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
    [actionsOccasion.NAVIGATE_BACK]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.NAVIGATE_BACK>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk used to set context.
    [actionsOccasion.PERFORM_OPEN_OCCASION_SCREEN]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_OPEN_OCCASION_SCREEN>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            occasionMode: action.payload.occasionMode,
            occasionContextMode: action.payload.occasionContextMode,
        }
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
    [actionsOccasion.PERFORM_INPUT_OCCASION]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_INPUT_OCCASION>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            currentOccasion: action.payload.occasion,
            inputOccasionType:action.payload.occasion.type,
            inputDate: action.payload.occasion.date,
            inputNoYear:action.payload.occasion.isAnnual,
            inputComment:action.payload.occasion.comment,
        }
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to show occasion details.
    [actionsOccasion.NAVIGATE_TO_OCCASION_SCREEN]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.NAVIGATE_TO_OCCASION_SCREEN>): ModelsOccasion.IOccasionState => {
        return {
            ...ModelsOccasion.initialState.state,
            currentOccasion: action.payload.occasion,
        }
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to change visiable error modal window occasion.
    [actionsOccasion.PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_CHANGE_DISPLAY_OCCASION_ERROR_MODAL_WINDOW>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            isVisibleOccasionErrorModalWindow: action.payload.value,
        }
    },
    // Thunk dispatched by "Occasion" screen. Thunk used to set edit mode occasion.
    [actionsOccasion.PERFORM_EDIT]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.NAVIGATE_TO_OCCASION_SCREEN>): ModelsOccasion.IOccasionState => {
        return {
            ...state,
            occasionMode: Enums.OccasionMode.Edit,
        }
    },

    // Thunk dispatched by "Occasion" screen. Thunk dispatched to reset container state to default values.
    [actionsOccasion.PERFORM_CONTAINER_RESET]: (state: ModelsOccasion.IOccasionState, action: Action<actionsOccasion.PERFORM_CONTAINER_RESET>): ModelsOccasion.IOccasionState => {
        return {
            ...ModelsOccasion.initialState.state,
        }
    },

}, ModelsOccasion.initialState.state)

export default reducerOccasion
