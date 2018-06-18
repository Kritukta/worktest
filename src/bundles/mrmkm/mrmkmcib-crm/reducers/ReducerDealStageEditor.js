/*
 * Created by Topchy A
 */
import { handleActions } from 'redux-actions';
import * as actionsDealStageEditor from '../actions/ActionsDealStageEditor';
import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor";
import moment from 'moment';
const reducerDealEditor = handleActions({
    // Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
    [actionsDealStageEditor.NAVIGATE_TO_DEAL_STAGE_EDITOR]: (state, action) => {
        return Object.assign({}, ModelsDealStageEditor.initialState.state, { currentDeal: action.payload.currentDeal, commentText: action.payload.crmStage.comment || '', inputStageEndDate: action.payload.crmStage.end && new Date(action.payload.crmStage.end.date), inputStageTerm: '' + action.payload.stage.durationEstimate, isRoadMapShowOn: action.payload.isRoadMapShow, stage: action.payload.stage, crmStage: action.payload.crmStage, activePosition: action.payload.activePosition });
    },
    [actionsDealStageEditor.PERFORM_INPUT_COMMENT]: (state, action) => {
        return Object.assign({}, state, { inputComment: action.payload.value });
    },
    [actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverStagesEditorConfirm: false });
    },
    [actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverStagesEditorConfirm: true });
    },
    [actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_NEXT]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsDealStageEditor.PERFORM_INPUT_END_DATE]: (state, action) => {
        const startDate = (state.stage.start && state.stage.start.date) || new Date();
        return Object.assign({}, state, { inputStageTerm: '' + moment(action.payload.value).diff(startDate, 'days'), inputStageEndDate: action.payload.value });
    },
    [actionsDealStageEditor.PERFORM_INPUT_TERM]: (state, action) => {
        const startDate = (state.stage.start && state.stage.start.date) || new Date();
        return Object.assign({}, state, { inputStageEndDate: moment(startDate).add(action.payload.value, 'days').toDate(), inputStageTerm: action.payload.value });
    },
    [actionsDealStageEditor.CALL_PUT_DEAL_STAGE_UPDATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { dealStageSaving: true });
    },
    [actionsDealStageEditor.CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealStageSaving: false });
    },
    [actionsDealStageEditor.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealStageSaving: false, dealStageSavingError: action.payload.error });
    },
}, ModelsDealStageEditor.initialState.state);
export default reducerDealEditor;
//# sourceMappingURL=ReducerDealStageEditor.js.map