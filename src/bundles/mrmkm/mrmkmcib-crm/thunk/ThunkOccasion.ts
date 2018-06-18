/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Error from "../models/Error"

import * as util from '../common/Util'
import * as Utils from '../common/Util'

import * as actionsOccasion from '../actions/ActionsOccasion'

import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'

import {SplitPanelActions} from 'ufs-mobile-platform'




export const performOpenOccasionScreen = (occasion: Models.Occasion,
                                        occasionMode: Enums.OccasionMode,
                                        occasionContextMode: Enums.OccasionContextMode) =>
    (dispatch: Function, getState: () => ModelState.IRootState): void => {

        let state = getState()
        let reducerState = state.user.mrmkmcibCRM.reducerOccasion

        dispatch(actionsOccasion.performOpenOccasionScreen(occasionMode, occasionContextMode))

        dispatch(actionsOccasion.performInputOccasion(occasion))


}
export const performCloseOccasionScreen = (occasionContextMode: Enums.OccasionContextMode) =>
    (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsOccasion.performCloseOccasionScreen())

    switch (occasionContextMode){
        case Enums.OccasionContextMode.OccasionList: {

            dispatch(thunkOccasionList.navigateBack())

            break;
        }

    }


    dispatch(performContainerReset())
}

/*
 * Thunk dispatched by "Occasion" screen. Thunk used to confirm changes in Occasion.
 */
export const performSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion
    let reducerOccasionListState = state.user.mrmkmcibCRM.reducerOccasionList

    // validation
    dispatch(thunkOccasion.performValidate())

    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerOccasion

    if (Array.isArray(reducerState.errorValidationList) &&
        reducerState.errorValidationList.length > 0) {
        return
    }

    let updatedOccasion = {
        id: reducerState.currentOccasion.id || "",
        modId: reducerState.currentOccasion.modId ,
        date: reducerState.inputDate,
        type: reducerState.inputOccasionType,
        comment: reducerState.inputComment,
        isAnnual: reducerState.inputNoYear,
        isChanged: true,
    }

    let inputOccasionList: Models.OccasionList = reducerOccasionListState.inputOccasionList

    if (reducerState.occasionMode == Enums.OccasionMode.Edit) {
        dispatch(thunkOccasionList.performUpdateOccasionList(
            {data: [...inputOccasionList.data
                .filter((occasionState: Models.Occasion):boolean => reducerState.currentOccasion.id != occasionState.id), updatedOccasion]}))
    } else {

        dispatch(thunkOccasionList.performUpdateOccasionList(
            {data: [...inputOccasionList.data, updatedOccasion]}))
    }

    state = getState()

    dispatch(performCloseOccasionScreen(reducerState.occasionContextMode))
}
export const performChangeDisplayOccasionErrorModalWindow = (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsOccasion.performChangeDisplayOccasionErrorModalWindow(value))
}

/*
 * Internal thunk used in "Occasion" container. Thunk used to confirm changes in Occasion.
 */
export const performValidate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion

    let errorValidationList: number[] = []


    if (!(reducerState.inputOccasionType)) {
        errorValidationList.push(Enums.OccasionValidationAttribute.Type)
    }


    if (!reducerState.inputDate) {
        errorValidationList.push(Enums.OccasionValidationAttribute.Date)
    }

    dispatch(actionsOccasion.performValidate(errorValidationList))

}

/*
 * Thunk dispatched by "Occasion" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion

    // Dispatch thunk "navigateBack" synchronously.

    if (reducerState.occasionMode == Enums.OccasionMode.Edit) {

        dispatch(actionsOccasion.performCancel())

    } else {

        dispatch(thunkOccasionList.navigateBack())

        dispatch(performContainerReset())
    }







}

/*
 * Thunk dispatched by "Occasion" screen. Thunk used to show occasion type picker screen.
 */
export const navigateToOccasionTypePickerScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion


    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentOccasionCard.OccasionTypeList,
        Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionScreen)))


    dispatch(actionsOccasion.navigateToOccasionTypePickerScreen())


}

/*
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion type field.
 */
export const performInputOccasionType = (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion
    dispatch(actionsOccasion.performInputOccasionType(value))

    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerOccasion
    dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionScreen)))

}

/*
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input occasion date field.
 */
export const performInputDate = (value: Date | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion



    dispatch(actionsOccasion.performInputDate(value))

    state = getState()
    dispatch(performValidate())

}

/*
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input NoYear field.
 */
export const performInputNoYear = (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion


    dispatch(actionsOccasion.performInputNoYear(value))


}

/*
 * Thunk dispatched by "Occasion" screen. Thunk dispatched on user input comment field.
 */
export const performInputComment = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion


    dispatch(actionsOccasion.performInputComment(value))


}

/*
 * Thunk dispatched by "Occasion" screen. Thunk used to navigate back.
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion

    dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionScreen)))

    dispatch(actionsOccasion.navigateBack())

}



/*
 * Thunk dispatched by "Occasion" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion


    dispatch(actionsOccasion.performContainerReset())


}

/*
 * Thunk dispatched by "OccasionList" screen. Thunk used to enter editor mode.
 */
export const performEdit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerOccasion

    dispatch(actionsOccasion.performEdit())
}


