import * as ModelState from "../models/Models";
export declare const navigateToDealStageEditor: (activePosition: number) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputComment: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performValidateForm: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputStageEndDate: (value: Date) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverStagesEditorConfirmHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverStagesEditorConfirmShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performStagesEditorConfirmNext: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputStageTerm: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveStage: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
