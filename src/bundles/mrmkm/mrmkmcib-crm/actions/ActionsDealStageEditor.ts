/**
 * Actions of DealStageEditor container.
 *
 * @author Topchy A
 * @see
 */


import {Models} from "mrmkmcib-crm"
import Action from "../models/Action"
import Error from "../models/Error"


export const NAVIGATE_TO_DEAL_STAGE_EDITOR = 'DEAL_STAGE_EDITOR_CONTAINER_NAVIGATE_TO_STAGE_EDITOR'
export const CALL_PUT_DEAL_STAGE_UPDATE_REQUEST = 'DEAL_STAGE_EDITOR_CONTAINER_CALL_PUT_DEAL_STAGE_UPDATE_REQUEST'
export const CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS = 'DEAL_STAGE_EDITOR_CONTAINER_CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE'
export const PERFORM_INPUT_TERM = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_TERM'
export const PERFORM_INPUT_COMMENT = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_COMMENT'
export const PERFORM_INPUT_END_DATE = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_END_DATE'
export const PERFORM_STAGE_EDITOR_CONFIRM_HIDE = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_HIDE'
export const PERFORM_STAGE_EDITOR_CONFIRM_SHOW ='DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_SHOW'
export const PERFORM_STAGE_EDITOR_CONFIRM_NEXT = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_NEXT'

/**
 * Thunk dispatched by "DealStageEditor" screen. Thunk chain used to show editor.
 *
 * @param {Models.DealStage} stage - выбранная стадия сделки.
 * @param {Models.DealStage} crmStage - выбранная стадия CRM.
 * @param isRoadMapShow - включен или нет показ ДК клиенту.
 * @param activePosition - позиция активной стадии (меньше 0 - раньше текущей, 0 - текущая, больше 0 - больше текущей).
 * @param {Models.Deal} currentDeal сделка.
 */
export type NAVIGATE_TO_DEAL_STAGE_EDITOR = { stage: Models.DealStage, crmStage: Models.DealStage, isRoadMapShow: boolean, activePosition: number, currentDeal: Models.Deal}
export const navigateToDealStageEditor = (stage: Models.DealStage, crmStage: Models.DealStage, isRoadMapShow: boolean, activePosition: number,currentDeal: Models.Deal): Action<NAVIGATE_TO_DEAL_STAGE_EDITOR> => ({
    type: NAVIGATE_TO_DEAL_STAGE_EDITOR,
    payload: {
        stage,
        crmStage,
        isRoadMapShow,
        activePosition,
        currentDeal,
    }
})

export type CALL_PUT_DEAL_STAGE_UPDATE_REQUEST = {}
export const callPutDealStageUpdateRequest = (): Action<CALL_PUT_DEAL_STAGE_UPDATE_REQUEST> => ({
    type: CALL_PUT_DEAL_STAGE_UPDATE_REQUEST,
    payload: {
    }
})



export type CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS = { }
export const callPutDealStageUpdateSuccess = (): Action<CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS> => ({
    type: CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS,
    payload: {
    }
})


export type PERFORM_INPUT_TERM = { value: string}
export const performInputTerm = ( value: string): Action<PERFORM_INPUT_TERM> => ({
    type: PERFORM_INPUT_TERM,
    payload: {
        value: value
    }
})


export type PERFORM_INPUT_COMMENT = {  value: string}
export const performInputComment = ( value: string): Action<PERFORM_INPUT_COMMENT> => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value
    }
})


export type PERFORM_INPUT_END_DATE = { value: Date}
export const performInputEndDate = (value: Date): Action<PERFORM_INPUT_END_DATE> => ({
    type: PERFORM_INPUT_END_DATE,
    payload: {
        value: value
    }
})

export type PERFORM_SAVE_FAILURE = { error: Error}
export const performSaveFailure = (error: Error): Action<PERFORM_SAVE_FAILURE> => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
})


export type PERFORM_STAGE_EDITOR_CONFIRM_HIDE = {}
export const performPopoverStagesEditorConfirmHide = (): Action<PERFORM_STAGE_EDITOR_CONFIRM_HIDE> => ({
    type: PERFORM_STAGE_EDITOR_CONFIRM_HIDE,
    payload: {}
})


export type PERFORM_STAGE_EDITOR_CONFIRM_SHOW = { }
export const performPopoverStagesEditorConfirmShow = (): Action<PERFORM_STAGE_EDITOR_CONFIRM_SHOW> => ({
    type: PERFORM_STAGE_EDITOR_CONFIRM_SHOW,
    payload: {}
})


export type PERFORM_STAGE_EDITOR_CONFIRM_NEXT = {}
export const performStagesEditorConfirmNext = (): Action<PERFORM_STAGE_EDITOR_CONFIRM_NEXT> => ({
    type: PERFORM_STAGE_EDITOR_CONFIRM_NEXT,
    payload: { }
})