import React from 'react';
import * as ModelsDealStages from '../models/ModelsDealStages';
import { Models } from 'mrmkmcib-crm';
import Error from "../models/Error";
import { Models as ModelsApp } from "mrmkmcib-app";
export interface IStateProps {
    currentDeal: Models.Deal;
    stageList: Array<Models.DealStage>;
    selectedStage: Models.DealStage;
    isAccessibleStages: boolean;
    activePosition: number;
    crmStages: Models.CrmStagesList;
    progress: number;
    system: string | null;
    isReadOnlyStages: boolean;
    currentStageTab: number;
    isVisiblePopoverClientRoadMapHelp: boolean;
    isVisiblePopoverClientRoadMap: boolean;
    receivingInputParametersInProgress: boolean;
    inputDealDate: Date | null;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    isInputDealDateEnable: boolean;
    isRejection: boolean;
    isSaveStageEnable: boolean;
    inputRejection: ModelsApp.Classifier;
    inputCurrency: ModelsApp.Classifier | null;
    inputEquivalentSumString: string | null;
    accessibleStageList: ModelsApp.ClassifierList;
    dealPossibleStageList: Models.DealPossibleStageList;
    inputStage: ModelsApp.Classifier;
    isErrorEnable: boolean;
    receivingInputParametersError: Error | null;
    dealHistoryStageList: Models.DealHistoryStageList;
    dealStageTracking: Models.DealStageTracking;
    saveDealAdditionalFieldsInProgress: boolean;
    saveDealAdditionalFieldsError: Error | null;
    saveDealStageInProgress: boolean;
    currentStageStatus: ModelsDealStages.ICurrentStageStatus;
    errorMessage: string;
    isSetMainClientManager: boolean;
    isSetMainCreditOfficer: boolean;
    isSetMemberMonitoring: boolean;
    isSetPlannedFinishDate: boolean;
    isSetCloseReason: boolean;
    isSetCurrency: boolean;
    isSetClientStageChanges: boolean;
    isSaveAdditionalFieldsEnable: boolean;
    isButtonPopoverOpenedMainClientManager: boolean;
    isButtonPopoverOpenedMainCreditOfficer: boolean;
    isButtonPopoverOpenedMemberMonitoring: boolean;
    isDealStagesSavePopoverOpened: boolean;
    inputMainClientManager: ModelsApp.Employee | null;
    inputMainCreditOfficer: ModelsApp.Employee | null;
    inputMemberMonitoring: ModelsApp.Employee | null;
    inputComment: string;
    isStageListEnable: boolean;
    saveDealStageError: Error | null;
}
export interface IDispatchProps {
    navigateToStageDetails: ModelsDealStages.NAVIGATE_TO_STAGE_DETAILS;
    navigateToStageEditor: ModelsDealStages.NAVIGATE_TO_STAGE_EDITOR;
    performChangeStageTab: ModelsDealStages.PERFORM_CHANGE_STAGE_TAB;
    performInputDealDate: ModelsDealStages.PERFORM_INPUT_DEAL_DATE;
    performSelectRejection: ModelsDealStages.PERFORM_SELECT_REJECTION;
    performPopoverClientRoadMapHelpShow: ModelsDealStages.NO_PARAMS_VOID;
    performPopoverClientRoadMapHelpHide: ModelsDealStages.NO_PARAMS_VOID;
    performClientRoadMapActivate: ModelsDealStages.NO_PARAMS_VOID;
    performClientRoadMapNext: ModelsDealStages.NO_PARAMS_VOID;
    performInputEquivalentSumString: ModelsDealStages.PERFORM_INPUT_EQUIVALENT_SUM_STRING;
    navigateToCurrencyPickerScreen: ModelsDealStages.NAVIGATE_TO_CURRENCY_PICKER_SCREEN;
    performPopoverClientRoadMapShow: ModelsDealStages.NO_PARAMS_VOID;
    performPopoverClientRoadMapHide: ModelsDealStages.NO_PARAMS_VOID;
    performReceivingInputParameters: ModelsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS;
    navigateBack: ModelsDealStages.NAVIGATE_BACK;
    navigateBackWithResetData: ModelsDealStages.NAVIGATE_BACK_WITH_RESET_DATA;
    performSaveStage: ModelsDealStages.PERFORM_SAVE_STAGE;
    navigateToAdditionalFields: ModelsDealStages.NAVIGATE_TO_ADDITIONAL_FIELDS;
    performSaveDealAdditionalFields: ModelsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS;
    performSaveDealStage: ModelsDealStages.PERFORM_SAVE_DEAL_STAGE;
    showButtonPopoverMainClientManager: ModelsDealStages.SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER;
    showButtonPopoverMainCreditOfficer: ModelsDealStages.SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER;
    showButtonPopoverMemberMonitoring: ModelsDealStages.SHOW_BUTTON_POPOVER_MEMBER_MONITORING;
    performInputEmployeeSourceMainClientManager: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER;
    performInputEmployeeSourceMainCreditOfficer: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIT_OFFICER;
    performInputEmployeeSourceMemberMonitoring: ModelsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING;
    onSaveDealStageButtonTap: ModelsDealStages.ON_SAVE_DEAL_STAGE_BUTTON_TAP;
    showDealStagesSavePopover: ModelsDealStages.SHOW_DEAL_STAGES_SAVE_POPOVER;
    performInputComment: ModelsDealStages.PERFORM_INPUT_STRING;
    navigateToPreviousForm: ModelsDealStages.NAVIGATE_TO_PREVIOUS_FORM;
}
export declare type IDealStagesProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
