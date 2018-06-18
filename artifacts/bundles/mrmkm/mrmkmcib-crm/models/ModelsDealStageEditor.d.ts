/**
 * Models for DealStageEditor container.
 *
 * @author Topchy A
 * @see
 */
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IDealStageEditorState {
    dealStageSaving: boolean;
    dealStageSavingError: Error | null;
    isRoadMapShowOn: boolean;
    isVisiblePopoverStagesEditorConfirm: boolean;
    currentDeal: Models.Deal;
    activePosition: number;
    commentText: string;
    inputStageEndDate: Date | null;
    inputStageTerm: string;
    inputComment: string;
    stage: Models.DealStage;
    crmStage: Models.DealStage;
}
export declare const initialState: {
    readonly state: IDealStageEditorState;
};
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
