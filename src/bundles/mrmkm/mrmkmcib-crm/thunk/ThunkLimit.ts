/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {Enums} from '../Enums'

import * as actionsLimit from '../actions/ActionsLimit'




/*
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTab = (index: number, value: Enums.LimitTab,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerLimit





    dispatch(actionsLimit.performChangeTab(index, value,))


}

/*
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTotalTab = (index: number, value: Enums.LimitTotalTab,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerLimit





    dispatch(actionsLimit.performChangeTotalTab(index, value,))


}

/*
 * Thunk dispatched by "Limit" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerLimit





    dispatch(actionsLimit.performContainerReset())


}
