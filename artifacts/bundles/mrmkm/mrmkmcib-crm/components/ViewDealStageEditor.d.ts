import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor";
declare const ViewDealStageEditor: React.StatelessComponent<IProps>;
export interface IProps {
    testID: string;
    navigateBack: ModelsDealStageEditor.NO_PARAMS_VOID;
    performInputComment: ModelsDealStageEditor.PERFORM_INPUT_STRING;
    performInputStageEndDate: ModelsDealStageEditor.PERFORM_INPUT_DATE;
    performInputStageTerm: ModelsDealStageEditor.PERFORM_INPUT_STRING;
    performSaveStage: ModelsDealStageEditor.NO_PARAMS_VOID;
    isVisiblePopoverStagesEditorConfirm: boolean;
    performPopoverStagesEditorConfirmHide: ModelsDealStageEditor.NO_PARAMS_VOID;
    performPopoverStagesEditorConfirmShow: ModelsDealStageEditor.NO_PARAMS_VOID;
    performStagesEditorConfirmNext: ModelsDealStageEditor.NO_PARAMS_VOID;
    activePosition: number;
    isRoadMapShowOn: boolean;
    commentText: string;
    inputStageEndDate: Date | null;
    inputStageTerm: string;
    inputComment: string;
    stage: Models.DealStage;
    crmStage: Models.DealStage;
}
export default ViewDealStageEditor;
