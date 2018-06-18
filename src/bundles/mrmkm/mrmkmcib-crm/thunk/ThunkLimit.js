/*
 * Created by Burnaev M.U.
 */
import * as actionsLimit from '../actions/ActionsLimit';
/*
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTab = (index, value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerLimit;
    dispatch(actionsLimit.performChangeTab(index, value));
};
/*
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTotalTab = (index, value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerLimit;
    dispatch(actionsLimit.performChangeTotalTab(index, value));
};
/*
 * Thunk dispatched by "Limit" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerLimit;
    dispatch(actionsLimit.performContainerReset());
};
//# sourceMappingURL=ThunkLimit.js.map