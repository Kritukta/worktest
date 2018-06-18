/**
 * Actions of DealStageEditor container.
 *
 * @author Topchy A
 * @see
 */
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Error from "../models/Error";
export declare const NAVIGATE_TO_DEAL_STAGE_EDITOR = "DEAL_STAGE_EDITOR_CONTAINER_NAVIGATE_TO_STAGE_EDITOR";
export declare const CALL_PUT_DEAL_STAGE_UPDATE_REQUEST = "DEAL_STAGE_EDITOR_CONTAINER_CALL_PUT_DEAL_STAGE_UPDATE_REQUEST";
export declare const CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS = "DEAL_STAGE_EDITOR_CONTAINER_CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const PERFORM_INPUT_TERM = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_TERM";
export declare const PERFORM_INPUT_COMMENT = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_COMMENT";
export declare const PERFORM_INPUT_END_DATE = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_END_DATE";
export declare const PERFORM_STAGE_EDITOR_CONFIRM_HIDE = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_HIDE";
export declare const PERFORM_STAGE_EDITOR_CONFIRM_SHOW = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_SHOW";
export declare const PERFORM_STAGE_EDITOR_CONFIRM_NEXT = "DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_NEXT";
/**
 * Thunk dispatched by "DealStageEditor" screen. Thunk chain used to show editor.
 *
 * @param {Models.DealStage} stage - выбранная стадия сделки.
 * @param {Models.DealStage} crmStage - выбранная стадия CRM.
 * @param isRoadMapShow - включен или нет показ ДК клиенту.
 * @param activePosition - позиция активной стадии (меньше 0 - раньше текущей, 0 - текущая, больше 0 - больше текущей).
 * @param {Models.Deal} currentDeal сделка.
 */
export declare type NAVIGATE_TO_DEAL_STAGE_EDITOR = {
    stage: Models.DealStage;
    crmStage: Models.DealStage;
    isRoadMapShow: boolean;
    activePosition: number;
    currentDeal: Models.Deal;
};
export declare const navigateToDealStageEditor: (stage: Models.DealStage, crmStage: Models.DealStage, isRoadMapShow: boolean, activePosition: number, currentDeal: Models.Deal) => Action<NAVIGATE_TO_DEAL_STAGE_EDITOR>;
export declare type CALL_PUT_DEAL_STAGE_UPDATE_REQUEST = {};
export declare const callPutDealStageUpdateRequest: () => Action<CALL_PUT_DEAL_STAGE_UPDATE_REQUEST>;
export declare type CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS = {};
export declare const callPutDealStageUpdateSuccess: () => Action<CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS>;
export declare type PERFORM_INPUT_TERM = {
    value: string;
};
export declare const performInputTerm: (value: string) => Action<PERFORM_INPUT_TERM>;
export declare type PERFORM_INPUT_COMMENT = {
    value: string;
};
export declare const performInputComment: (value: string) => Action<PERFORM_INPUT_COMMENT>;
export declare type PERFORM_INPUT_END_DATE = {
    value: Date;
};
export declare const performInputEndDate: (value: Date) => Action<PERFORM_INPUT_END_DATE>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
export declare type PERFORM_STAGE_EDITOR_CONFIRM_HIDE = {};
export declare const performPopoverStagesEditorConfirmHide: () => Action<PERFORM_STAGE_EDITOR_CONFIRM_HIDE>;
export declare type PERFORM_STAGE_EDITOR_CONFIRM_SHOW = {};
export declare const performPopoverStagesEditorConfirmShow: () => Action<PERFORM_STAGE_EDITOR_CONFIRM_SHOW>;
export declare type PERFORM_STAGE_EDITOR_CONFIRM_NEXT = {};
export declare const performStagesEditorConfirmNext: () => Action<PERFORM_STAGE_EDITOR_CONFIRM_NEXT>;
