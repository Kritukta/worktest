/**
 * Actions of DealStageEditor container.
 *
 * @author Topchy A
 * @see
 */
export const NAVIGATE_TO_DEAL_STAGE_EDITOR = 'DEAL_STAGE_EDITOR_CONTAINER_NAVIGATE_TO_STAGE_EDITOR';
export const CALL_PUT_DEAL_STAGE_UPDATE_REQUEST = 'DEAL_STAGE_EDITOR_CONTAINER_CALL_PUT_DEAL_STAGE_UPDATE_REQUEST';
export const CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS = 'DEAL_STAGE_EDITOR_CONTAINER_CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS';
export const PERFORM_SAVE_FAILURE = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE';
export const PERFORM_INPUT_TERM = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_TERM';
export const PERFORM_INPUT_COMMENT = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_COMMENT';
export const PERFORM_INPUT_END_DATE = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_INPUT_END_DATE';
export const PERFORM_STAGE_EDITOR_CONFIRM_HIDE = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_HIDE';
export const PERFORM_STAGE_EDITOR_CONFIRM_SHOW = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_SHOW';
export const PERFORM_STAGE_EDITOR_CONFIRM_NEXT = 'DEAL_STAGE_EDITOR_CONTAINER_PERFORM_STAGE_EDITOR_CONFIRM_NEXT';
export const navigateToDealStageEditor = (stage, crmStage, isRoadMapShow, activePosition, currentDeal) => ({
    type: NAVIGATE_TO_DEAL_STAGE_EDITOR,
    payload: {
        stage,
        crmStage,
        isRoadMapShow,
        activePosition,
        currentDeal,
    }
});
export const callPutDealStageUpdateRequest = () => ({
    type: CALL_PUT_DEAL_STAGE_UPDATE_REQUEST,
    payload: {}
});
export const callPutDealStageUpdateSuccess = () => ({
    type: CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS,
    payload: {}
});
export const performInputTerm = (value) => ({
    type: PERFORM_INPUT_TERM,
    payload: {
        value: value
    }
});
export const performInputComment = (value) => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value
    }
});
export const performInputEndDate = (value) => ({
    type: PERFORM_INPUT_END_DATE,
    payload: {
        value: value
    }
});
export const performSaveFailure = (error) => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
});
export const performPopoverStagesEditorConfirmHide = () => ({
    type: PERFORM_STAGE_EDITOR_CONFIRM_HIDE,
    payload: {}
});
export const performPopoverStagesEditorConfirmShow = () => ({
    type: PERFORM_STAGE_EDITOR_CONFIRM_SHOW,
    payload: {}
});
export const performStagesEditorConfirmNext = () => ({
    type: PERFORM_STAGE_EDITOR_CONFIRM_NEXT,
    payload: {}
});
//# sourceMappingURL=ActionsDealStageEditor.js.map