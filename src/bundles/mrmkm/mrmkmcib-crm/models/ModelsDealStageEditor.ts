/**
 * Models for DealStageEditor container.
 *
 * @author Topchy A
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


// TODO Describe models used in DealStageEditor actions and thunks.


const defaultState = {
    get state(): IDealStageEditorState {
        return {
            dealStageSaving: false,
            dealStageSavingError: null,
            isVisiblePopoverStagesEditorConfirm: false,
            isRoadMapShowOn:false,
            currentDeal: defaultValues.Deal,
            activePosition: -1,
            commentText: '',
            inputStageEndDate: new Date(),
            inputStageTerm: '',
            inputComment: '',
            stage: {...defaultValues.dealStage},
            crmStage: {...defaultValues.dealStage},

            // TODO Describe DealStageEditor reducer state.
        }
    }
}

export interface IDealStageEditorState {

    dealStageSaving: boolean
    dealStageSavingError: Error | null

    isRoadMapShowOn: boolean
    isVisiblePopoverStagesEditorConfirm: boolean

    currentDeal: Models.Deal
    activePosition: number

    commentText: string
    inputStageEndDate: Date | null
    inputStageTerm: string
    inputComment: string
    stage: Models.DealStage
    crmStage: Models.DealStage
    // TODO Describe DealStageEditor reducer state.


}

export const initialState = {
    get state(): IDealStageEditorState {
        return defaultState.state
    }
}

export interface NO_PARAMS_VOID {
    (): void;
}

export interface PERFORM_INPUT_STRING {
    (value: string): void;
}

export interface PERFORM_INPUT_DATE {
    (value: Date): void;
}

export interface PERFORM_INPUT_NUMBER {
    (value: number): void;
}

export interface NAVIGATE_TO_DEAL_STAGE_EDITOR {
    (stage: Models.Deal, crmStage: Models.CrmStage, isRoadMapShow: boolean): void;
}

export interface SWAP_CONTEXT {
    (): void;
}

