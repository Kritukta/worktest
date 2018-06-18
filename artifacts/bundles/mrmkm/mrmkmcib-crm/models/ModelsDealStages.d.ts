import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IDealStagesState {
    currentStageStatus: ICurrentStageStatus;
    currentDeal: Models.Deal;
    currentCustomerManaged: Models.CustomerManaged;
    stageList: Array<Models.DealStage>;
    selectedStage: Models.DealStage;
    isAccessibleStages: boolean;
    crmStages: Models.CrmStagesList;
    activePosition: number;
    progress: number;
    system: string | null;
    isInputDealDateEnable: boolean;
    inputRejection: ModelsApp.Classifier;
    inputCurrency: ModelsApp.Classifier | null;
    inputEquivalentSumString: string | null;
    inputEquivalentSum: number | null;
    accessibleStageList: ModelsApp.ClassifierList;
    isReadOnlyStages: boolean;
    isRejection: boolean;
    currentStageTab: number;
    inputDealDate: Date | null;
    isVisiblePopoverClientRoadMapHelp: boolean;
    isVisiblePopoverClientRoadMap: boolean;
    receivingInputParametersInProgress: boolean;
    receivingInputParametersError: Error | null;
    saveDealAdditionalFieldsInProgress: boolean;
    saveDealAdditionalFieldsError: Error | null;
    dealStagesTrackingUpdateFetching: boolean;
    dealStagesTrackingUpdateError: Error | null;
    saveDealStageInProgress: boolean;
    saveDealStageError: Error | null;
    isErrorEnable: boolean;
    isSaveStageEnable: boolean;
    inputEmployeeSource: Enums.MemberListEmployeeSource;
    dealStageTracking: ModelsCrm.DealStageTracking;
    dealStageTrackingFetching: boolean;
    dealStageTrackingError: Error | null;
    dealPossibleStageList: ModelsCrm.DealPossibleStageList;
    dealPossibleStageListFetching: boolean;
    dealPossibleStageListError: Error | null;
    dealHistoryStageList: ModelsCrm.DealHistoryStageList;
    dealHistoryStageListFetching: boolean;
    dealHistoryStageListError: Error | null;
    dealStagesUpdateFetching: boolean;
    dealStagesUpdateError: Error | null;
    dealUpdateFetching: boolean;
    dealUpdateError: Error | null;
    currentDealFetching: boolean;
    currentDealError: Error | null;
    inputStage: ModelsApp.Classifier;
    errorMessage: string;
    mainErrorMessage: string;
    secondaryErrorMessage: string;
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
    inputMemberList: Models.MemberList | null;
    inputComment: string;
    isStageListEnable: boolean;
    operationUuid: string | null;
}
export interface ICurrentStageStatus {
    stageStatus: Enums.StageStatus;
    isDisabled: boolean;
    isSelected: boolean;
    history: Models.HistoryStage;
    stageText: string;
}
export declare const initialCurrentStageStatus: {
    stageStatus: Enums.StageStatus;
    isDisabled: boolean;
    isSelected: boolean;
    history: Models.HistoryStage;
    stageText: string;
};
export interface IDealStageChecksValues {
    isSetMainClientManager: boolean;
    isSetMainCreditOfficer: boolean;
    isSetMemberMonitoring: boolean;
    isSetPlannedFinishDate: boolean;
    isSetCloseReason: boolean;
    isSetCurrency: boolean;
    isSetClientStageChanges: boolean;
    isErrorEnable: boolean;
    errorMessage: string;
}
export interface IDealStageChecksErrors {
    mainErrorMessage: string;
    secondaryErrorMessage: string;
}
export declare const initialState: {
    readonly state: IDealStagesState;
};
export interface NO_PARAMS_VOID {
    (): void;
}
export interface NAVIGATE_TO_STAGE_DETAILS {
    (stage: Models.DealStage, activePosition: number): void;
}
export interface NAVIGATE_TO_STAGE_EDITOR {
    (activePosition: number): void;
}
export interface PERFORM_CHANGE_STAGE_TAB {
    (index: number): void;
}
export interface PERFORM_OPEN_MEMBER_LIST_POPOVER {
    (memberListMode: Enums.OpenMemberListPopover): void;
}
export interface PERFORM_RECEIVING_INPUT_PARAMETERS {
    (): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface NAVIGATE_BACK_WITH_RESET_DATA {
    (): void;
}
export interface NAVIGATE_TO_PREVIOUS_FORM {
    (): void;
}
export interface PERFORM_SAVE_STAGE {
    (): void;
}
export interface NAVIGATE_TO_ADDITIONAL_FIELDS {
    (stage: ModelsApp.Classifier): void;
}
export interface PERFORM_INPUT_STRING {
    (value: string): void;
}
export interface PERFORM_INPUT_DEAL_DATE {
    (value: Date | null): void;
}
export interface PERFORM_SELECT_REJECTION {
    (value: ModelsApp.Classifier): void;
}
export interface PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS {
    (): void;
}
export interface PERFORM_INPUT_EQUIVALENT_SUM_STRING {
    (value: string | null): void;
}
export interface NAVIGATE_TO_CURRENCY_PICKER_SCREEN {
    (): void;
}
export interface SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER {
    (isButtonPopoverOpenedMainClientManager: boolean): void;
}
export interface SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER {
    (isButtonPopoverOpenedMainCreditOfficer: boolean): void;
}
export interface SHOW_BUTTON_POPOVER_MEMBER_MONITORING {
    (isButtonPopoverOpenedMemberMonitoring: boolean): void;
}
export interface SHOW_DEAL_STAGES_SAVE_POPOVER {
    (isDealStagesSavePopoverOpened: boolean): void;
}
export interface PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER {
    (value: Enums.MemberListEmployeeSource): void;
}
export interface PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIT_OFFICER {
    (value: Enums.MemberListEmployeeSource): void;
}
export interface PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING {
    (value: Enums.MemberListEmployeeSource): void;
}
export interface PERFORM_SAVE_DEAL_STAGE {
    (): void;
}
export interface NAVIGATE_TO_PREVIOUS_FORM {
    (): void;
}
export interface PERFORM_SAVE_STAGE {
    (): void;
}
export interface ON_SAVE_DEAL_STAGE_BUTTON_TAP {
    (): void;
}
export interface NAVIGATE_TO_ADDITIONAL_FIELDS {
    (stage: ModelsApp.Classifier): void;
}
