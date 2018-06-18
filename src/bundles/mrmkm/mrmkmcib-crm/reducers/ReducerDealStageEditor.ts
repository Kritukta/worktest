/*
 * Created by Topchy A
 */

import {handleActions} from 'redux-actions';

import * as actionsDealStageEditor from '../actions/ActionsDealStageEditor'

import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor"
import Action from "../models/Action"
import moment from 'moment'


const reducerDealEditor = handleActions<ModelsDealStageEditor.IDealStageEditorState>({

    // Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
    [actionsDealStageEditor.NAVIGATE_TO_DEAL_STAGE_EDITOR]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                             action: Action<actionsDealStageEditor.NAVIGATE_TO_DEAL_STAGE_EDITOR>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...ModelsDealStageEditor.initialState.state,
            currentDeal: action.payload.currentDeal,
            commentText: action.payload.crmStage.comment || '',
            inputStageEndDate: action.payload.crmStage.end && new Date(action.payload.crmStage.end.date),
            inputStageTerm: '' + action.payload.stage.durationEstimate,
            isRoadMapShowOn: action.payload.isRoadMapShow,
            stage: action.payload.stage,
            crmStage: action.payload.crmStage,
            activePosition:  action.payload.activePosition,
        }
    },

    [actionsDealStageEditor.PERFORM_INPUT_COMMENT]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                             action: Action<actionsDealStageEditor.PERFORM_INPUT_COMMENT>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
            inputComment: action.payload.value,
        }
    },


    [actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_HIDE]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                         action: Action<actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_HIDE>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
            isVisiblePopoverStagesEditorConfirm: false,
        }
    },

    [actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_SHOW]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                     action: Action<actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_SHOW>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
            isVisiblePopoverStagesEditorConfirm: true,
        }
    },

    [actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_NEXT]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                     action: Action<actionsDealStageEditor.PERFORM_STAGE_EDITOR_CONFIRM_NEXT>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
        }
    },

    [actionsDealStageEditor.PERFORM_INPUT_END_DATE]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                     action: Action<actionsDealStageEditor.PERFORM_INPUT_END_DATE>): ModelsDealStageEditor.IDealStageEditorState => {
        const startDate = (state.stage.start && state.stage.start.date) || new Date()
        return {
            ...state,
            inputStageTerm: '' + moment(action.payload.value).diff(startDate, 'days'),
            inputStageEndDate: action.payload.value,
        }
    },

    [actionsDealStageEditor.PERFORM_INPUT_TERM]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                     action: Action<actionsDealStageEditor.PERFORM_INPUT_TERM>): ModelsDealStageEditor.IDealStageEditorState => {
        const startDate = (state.stage.start && state.stage.start.date) || new Date()
        return {
            ...state,
            inputStageEndDate: moment(startDate).add( action.payload.value, 'days' ).toDate(),
            inputStageTerm: action.payload.value,
        }
    },

    [actionsDealStageEditor.CALL_PUT_DEAL_STAGE_UPDATE_REQUEST]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                             action: Action<actionsDealStageEditor.CALL_PUT_DEAL_STAGE_UPDATE_REQUEST>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
            dealStageSaving: true
        }
    },

    [actionsDealStageEditor.CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                                  action: Action<actionsDealStageEditor.CALL_PUT_DEAL_STAGE_UPDATE_SUCCESS>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
            dealStageSaving: false
        }
    },

    [actionsDealStageEditor.PERFORM_SAVE_FAILURE]: (state: ModelsDealStageEditor.IDealStageEditorState,
                                                                  action: Action<actionsDealStageEditor.PERFORM_SAVE_FAILURE>): ModelsDealStageEditor.IDealStageEditorState => {

        return {
            ...state,
            dealStageSaving: false,
            dealStageSavingError: action.payload.error,
        }
    },


}, ModelsDealStageEditor.initialState.state)

export default reducerDealEditor
