import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import * as ModelState from "../models/Models";
import Error from "../models/Error";
import { Enums } from "../Enums";
import Response from "../models/Response";
export declare const remapDealStages: (history: Models.HistoryStage[], trackingList: Models.Tracking[], currentPhaseClassifier: ModelsApp.Classifier) => Models.DealStage[];
export declare const setAccessStagesFlag: (enabled: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToDealStages: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const prepareStageInputData: () => (dispatch: Function) => void;
export declare const prepareStageClassifierList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBack: () => (dispatch: Function) => void;
export declare const navigateBackWithResetData: () => (dispatch: Function) => void;
export declare const navigateToPreviousForm: () => (dispatch: Function) => void;
export declare const performSaveStage: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const onSaveDealStageButtonTap: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToAdditionalFields: (stage: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const resetCheckFlags: () => (dispatch: Function) => void;
export declare const currentStageStatus: (stageStatus: Enums.StageStatus, isDisabled: boolean, isSelected: boolean, history: Models.HistoryStage, stageText: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const setSaveStageEnableFlag: (isSaveStageEnable: boolean) => (dispatch: Function) => void;
export declare const showError: (isErrorEnable: boolean, errorMessage: string) => (dispatch: Function) => void;
export declare const performSetRejection: (isRejectin: boolean) => (dispatch: Function) => void;
export declare const performInputDealDate: (value: Date | null) => (dispatch: Function) => void;
export declare const performInputEquivalentSumString: (value: string | null) => (dispatch: Function) => void;
export declare const performInputEquivalentSum: (value: number | null) => (dispatch: Function) => void;
export declare const navigateToCurrencyPickerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const showButtonPopoverMainClientManager: (isButtonPopoverOpenedMainClientManager: boolean) => (dispatch: Function) => void;
export declare const showButtonPopoverMainCreditOfficer: (isButtonPopoverOpenedMainCreditOfficer: boolean) => (dispatch: Function) => void;
export declare const showButtonPopoverMemberMonitoring: (isButtonPopoverOpenedMemberMonitoring: boolean) => (dispatch: Function) => void;
export declare const showDealStagesSavePopover: (isDealStagesSavePopoverOpened: boolean) => (dispatch: Function) => void;
export declare const performInputEmployeeSourceMainClientManager: (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function) => void;
export declare const performInputEmployeeSourceMainCreditOfficer: (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function) => void;
export declare const performInputEmployeeSourceMemberMonitoring: (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function) => void;
export declare const performInputComment: (inputComment: string) => (dispatch: Function) => void;
export declare const performInputMainClientManager: (inputMainClientManager: ModelsApp.Employee) => (dispatch: Function) => void;
export declare const performInputMainCreditOfficer: (inputMainCreditOfficer: ModelsApp.Employee) => (dispatch: Function) => void;
export declare const performInputMemberMonitoring: (inputMemberMonitoring: ModelsApp.Employee) => (dispatch: Function) => void;
export declare const performInputMemberList: (inputMember: ModelsApp.Employee) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToMemberListScreen: (mode: Enums.MemberListMode) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputCurrency: (value: ModelsApp.Classifier) => (dispatch: Function) => void;
export declare const performSelectRejection: (inputRejection: ModelsApp.Classifier) => (dispatch: Function) => void;
export declare const performValidateForm: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const setSaveAdditionalFildsEnableFlag: (isSaveAdditionalFieldsEnable: boolean) => (dispatch: Function) => void;
export declare const performChecks: (stage: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveDealAdditionalFields: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveDealAdditionalFieldsExecute: () => (dispatch: Function) => void;
export declare const performSaveDealAdditionalFieldsSuccess: () => (dispatch: Function) => void;
export declare const performSaveDealAdditionalFieldsFailure: (error: Error) => (dispatch: Function) => void;
export declare const performSaveDealStage: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveDealStageExecute: () => (dispatch: Function) => void;
export declare const performSaveDealStageSuccess: () => (dispatch: Function) => void;
export declare const performSaveDealStageFailure: (error: Error) => (dispatch: Function) => void;
export declare const performReceivingInputParameters: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshStagesSuccess: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshStagesFailure: (error: Error) => (dispatch: Function) => void;
export declare const performRefreshSelectedStage: (crmStage: Models.DealStage) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshStages: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performReceivingInputParametersExecute: () => (dispatch: Function) => void;
export declare const performReceivingInputParametersSuccess: () => (dispatch: Function) => void;
export declare const performReceivingInputParametersFailure: (error: Error) => (dispatch: Function) => void;
export declare const callGetCurrentDeal: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetCurrentDealExecute: () => (dispatch: Function) => void;
export declare const callGetCurrentDealSuccess: (currentDeal: Response<Models.Deal>) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetCurrentDealFailure: (error: Error) => (dispatch: Function) => void;
export declare const callGetStageTracking: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetDealStageTrackingExecute: () => (dispatch: Function) => void;
export declare const callGetDealStageTrackingSuccess: (dealStageTracking: Response<Models.DealStageTracking>) => (dispatch: Function) => void;
export declare const callGetDealStageTrackingFailure: (error: Error) => (dispatch: Function) => void;
export declare const callGetNextStages: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetNextStagesExecute: () => (dispatch: Function) => void;
export declare const callGetNextStagesSuccess: (dealPossibleStageList: Response<Models.DealPossibleStageList>) => (dispatch: Function) => void;
export declare const callGetNextStagesFailure: (error: Error) => (dispatch: Function) => void;
export declare const callGetHistoryStages: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetHistoryStagesExecute: () => (dispatch: Function) => void;
export declare const callGetHistoryStagesSuccess: (dealHistoryStageList: Response<Models.DealHistoryStageList>) => (dispatch: Function) => void;
export declare const callGetHistoryStagesFailure: (error: Error) => (dispatch: Function) => void;
export declare const callPutDealUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPutDealUpdateExecute: () => (dispatch: Function) => void;
export declare const callPutDealUpdateSuccess: () => (dispatch: Function) => void;
export declare const callPutDealUpdateFailure: (error: Error) => (dispatch: Function) => void;
export declare const callPutDealStagesUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPutDealStagesUpdateExecute: () => (dispatch: Function) => void;
export declare const callPutDealStagesUpdateSuccess: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPutDealStagesUpdateFailure: (error: Error) => (dispatch: Function) => void;
export declare const callPutDealStageTrackingUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPutDealStageTrackingUpdateExecute: () => (dispatch: Function) => void;
export declare const callPutDealStageTrackingUpdateSuccess: () => (dispatch: Function) => void;
export declare const callPutDealStageTrackingUpdateFailure: (error: Error) => (dispatch: Function) => void;
export declare const navigateToStageDetails: (stage: Models.DealStage, activePosition: number) => (dispatch: Function) => void;
export declare const performClientRoadMapNext: () => (dispatch: Function) => void;
export declare const performPopoverClientRoadMapShow: () => (dispatch: Function) => void;
export declare const performPopoverClientRoadMapHide: () => (dispatch: Function) => void;
export declare const performChangeStageTab: (index: number) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverClientRoadMapHelpShow: () => (dispatch: Function) => void;
export declare const performPopoverClientRoadMapHelpHide: () => (dispatch: Function) => void;
export declare const performClientRoadMapActivate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPutDealRoadMapSwitch: (enable: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
