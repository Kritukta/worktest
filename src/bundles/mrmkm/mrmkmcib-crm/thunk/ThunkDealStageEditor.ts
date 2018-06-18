/*
 * Created by Topchy A
 */

import * as ModelState from "../models/Models"

import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"
import {defaultValues} from "../models/Models"
import * as Converters from "../models/Converters"

import * as util from '../common/Util'
import * as actionsStageEditor from '../actions/ActionsDealStageEditor'

import * as thunkDealStageEditor from '../thunk/ThunkDealStageEditor'
import * as thunkDealStages from '../thunk/ThunkDealStages'
import {SplitPanelActions} from 'ufs-mobile-platform'
import moment from 'moment'
/*
 * Thunk dispatched by "DealStageEditor" screen. Thunk chain used to show deal editor.
 */
export const navigateToDealStageEditor = (activePosition: number) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()

    const reducerState = state.user.mrmkmcibCRM.reducerDealStages
    const clientRoadMapStage = reducerState.selectedStage
    const currentCrmStages = clientRoadMapStage.crmStages || []
    const activeStage = reducerState.currentDeal.phaseClassifier

    const currentDealCrmStage = currentCrmStages.find(
        (stage:Models.DealStage) => stage.stage.value === activeStage.value) ||
        currentCrmStages[currentCrmStages.length-1] ||
        defaultValues.dealStage

    const deal = {
        ...reducerState.currentDeal,
        stages:reducerState.stageList,
    }

    dispatch(actionsStageEditor.navigateToDealStageEditor(clientRoadMapStage, currentDealCrmStage,
        !reducerState.isReadOnlyStages, activePosition, deal ))

    dispatch(
        SplitPanelActions.pushContent(
            Enums.NavigationContentDealStage.StageEditor,
            util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
        )
    )
}


export const performSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerDealStageEditor
    const selectedCrmStage = reducerState.crmStage

    if (reducerState.dealStageSaving) {
        return
    }
    const crmStage = reducerState.crmStage
    const now = moment()
    const updatedComment = reducerState.inputComment ? `${util.getAgentNameInitials(state.user.mrmkmcibCRM.reducerAppCRM.currentUser)} (${now.format('HH:mm:ss Z, DD.MM.YYYY')}):
${reducerState.inputComment}

${crmStage.comment}` : crmStage.comment || ''

    crmStage.comment = updatedComment
    crmStage.durationEstimate = +reducerState.inputStageTerm
    crmStage.end && (crmStage.end.date = reducerState.inputStageEndDate || new Date())

    const startDate = (selectedCrmStage.start && selectedCrmStage.start.date) || new Date()
    const termDiff = moment(reducerState.inputStageEndDate || new Date()).diff( startDate, 'days')

    dispatch( thunkDealStages.performRefreshSelectedStage(crmStage))

    let selectedStagePassed:boolean = false

    const followUpStages = reducerState.currentDeal.stages && reducerState.currentDeal.stages.reduce(
        (acc: Array<Models.DealStage>, stage:Models.DealStage) => {

            stage.crmStages && stage.crmStages.reduce(
                (accInternal: Array<Models.DealStage>, stageInternal:Models.DealStage) => {

                    if (selectedStagePassed) {
                        accInternal.push ( stageInternal )
                    } else if (stageInternal.stage.value === selectedCrmStage.stage.value) {
                        selectedStagePassed = true
                    }
                    return accInternal
                },acc)

            return acc
    }, [])


    dispatch(actionsStageEditor.callPutDealStageUpdateRequest())

    util.call<boolean, Models.DealStageEditorUpdateRequest>(
        util.urlDealEditor.callPutDealStageUpdate(state, reducerState,
            [
                {tag: Enums.CachePolicy.Disabled},
            ]
        ),

        (response: Response<boolean>) => {

            dispatch(actionsStageEditor.callPutDealStageUpdateSuccess())
            dispatch(thunkDealStages.performRefreshStages())
        },

        (error: Error) => {

            // dispatch(actionsStageEditor.performNavigationButtonDisabled(false))
            // dispatch(actionsStageEditor.callPutDealStageUpdateFailure(error))
            dispatch(actionsStageEditor.performSaveFailure(error))
        },

        Converters.RESPONSE_DEAL_STAGE_CARD_UPDATE_REQUEST,

        'PUT',

        {'Content-type': 'application/json; charset=UTF-8'},

        Converters.REQUEST_DEAL_STAGE_CARD_UPDATE_FROM_STAGE_CARD_UPDATE_REQUEST,

        {
            dealId: reducerState.currentDeal.id,
            termDiff: termDiff,
            updatedStage: {
                stage: reducerState.stage,
                crmStage: crmStage,
                comment: updatedComment,
                endDate: reducerState.inputStageEndDate || new Date(),
                order: reducerState.stage.order,
                },
            followUpStages: followUpStages || [],
        }
    )



}


/*
 * Thunk dispatched by "DealStageEditor" screen. Thunk dispatched on user tap navigate back.
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor

    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)))

    // dispatch(actionsDealEditor.navigateBack())
}


/*
 * Thunk dispatched by "DealStageEditor" screen. Thunk dispatched on user input Comment field.
 */
export const performInputComment = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStageEditor

    dispatch(actionsStageEditor.performInputComment(value))

    dispatch(thunkDealStageEditor.performValidateForm())
}

export const performValidateForm = () =>  (dispatch: Function, getState: () => ModelState.IRootState): void => {

}
/*
 * Thunk dispatched by "DealStageEditor" screen. Thunk dispatched on user input Date field.
 */
export const performInputStageEndDate = (value: Date) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStageEditor

    dispatch(actionsStageEditor.performInputEndDate(value))

    dispatch(thunkDealStageEditor.performValidateForm())
}


export const performPopoverStagesEditorConfirmHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsStageEditor.performPopoverStagesEditorConfirmHide())

}

export const performPopoverStagesEditorConfirmShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsStageEditor.performPopoverStagesEditorConfirmShow())

}

export const  performStagesEditorConfirmNext = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsStageEditor.performStagesEditorConfirmNext())

    dispatch(
        SplitPanelActions.pushContent(
            Enums.NavigationContentAppCrmDealConfirmSaveStagePopover.AppCrmDealRoadMapPopover_YesDoIt,
            util.getNavigationContentStringDealConfirmSaveStagePopover(
                Enums.NavigationContentAppCrmDealConfirmSaveStagePopover.AppCrmDealRoadMapPopover_Zero))
    )

}

/*
 * Thunk dispatched by "DealStageEditor" screen. Thunk dispatched on user input Term field.
 */
export const performInputStageTerm = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealStageEditor

    dispatch(actionsStageEditor.performInputTerm(value))

    dispatch(thunkDealStageEditor.performValidateForm())
}

/*
 * Thunk dispatched by "DealStageEditor" screen. Thunk dispatched to clear container state.
 */
export const performSaveStage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsStageEditor.performPopoverStagesEditorConfirmHide())
    dispatch(thunkDealStageEditor.performSave())

    dispatch(
        SplitPanelActions.popContent(
            util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage)
        )
    )

    dispatch( thunkDealStages.performRefreshStages())

}
