/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsLimit from '../actions/ActionsLimit'
import * as ModelsLimit from "../models/ModelsLimit"
import Action from "../models/Action"


const reducerLimit = handleActions<ModelsLimit.ILimitState>({

    // Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsLimit.PERFORM_CHANGE_TAB]: (state: ModelsLimit.ILimitState, action: Action<actionsLimit.PERFORM_CHANGE_TAB>): ModelsLimit.ILimitState => {
        return {
            ...state,
            currentTab: action.payload.value,
        }
    },

    // Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsLimit.PERFORM_CHANGE_TOTAL_TAB]: (state: ModelsLimit.ILimitState, action: Action<actionsLimit.PERFORM_CHANGE_TOTAL_TAB>): ModelsLimit.ILimitState => {
        return {
            ...state,
            currentTotalTab: action.payload.value,
        }
    },

    // Thunk dispatched by "Limit" screen. Thunk dispatched to reset container state to default values.
    [actionsLimit.PERFORM_CONTAINER_RESET]: (state: ModelsLimit.ILimitState, action: Action<actionsLimit.PERFORM_CONTAINER_RESET>): ModelsLimit.ILimitState => {
        return {
            ...ModelsLimit.initialState.state,
        }
    },


}, ModelsLimit.initialState.state)

export default reducerLimit
