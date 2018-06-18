/// <reference types="react-redux" />
import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsDealStageEditor from "../models/ModelsDealStageEditor";
export interface IStateProps {
    activePosition: number;
    isRoadMapShowOn: boolean;
    isVisiblePopoverStagesEditorConfirm: boolean;
    commentText: string;
    inputStageEndDate: Date | null;
    inputStageTerm: string;
    inputComment: string;
    stage: Models.DealStage;
    crmStage: Models.DealStage;
}
export interface IDispatchProps {
    performPopoverStagesEditorConfirmHide: ModelsDealStageEditor.NO_PARAMS_VOID;
    performPopoverStagesEditorConfirmShow: ModelsDealStageEditor.NO_PARAMS_VOID;
    performStagesEditorConfirmNext: ModelsDealStageEditor.NO_PARAMS_VOID;
    navigateBack: ModelsDealStageEditor.NO_PARAMS_VOID;
    performInputComment: ModelsDealStageEditor.PERFORM_INPUT_STRING;
    performInputStageEndDate: ModelsDealStageEditor.PERFORM_INPUT_DATE;
    performInputStageTerm: ModelsDealStageEditor.PERFORM_INPUT_STRING;
    performSaveStage: ModelsDealStageEditor.NO_PARAMS_VOID;
}
export declare type IDealStageEditorProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
