/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsLimit from '../actions/ActionsLimit';
import * as ModelsLimit from "../models/ModelsLimit";
const reducerLimit = handleActions({
    // Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsLimit.PERFORM_CHANGE_TAB]: (state, action) => {
        return Object.assign({}, state, { currentTab: action.payload.value });
    },
    // Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsLimit.PERFORM_CHANGE_TOTAL_TAB]: (state, action) => {
        return Object.assign({}, state, { currentTotalTab: action.payload.value });
    },
    // Thunk dispatched by "Limit" screen. Thunk dispatched to reset container state to default values.
    [actionsLimit.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsLimit.initialState.state);
    },
}, ModelsLimit.initialState.state);
export default reducerLimit;
//# sourceMappingURL=ReducerLimit.js.map