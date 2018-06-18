/**
 * Models for Deal container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp, Enums as EnumsAppAll } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
import { Enums } from '../Enums';
export interface PERFORM_POPOVER_MEMBER_LIST_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_MEMBER_LIST_SHOW {
    (): void;
}
export interface IDealState {
    isDealExpandedMode: boolean;
    isEditDealEnable: boolean;
    currentDeal: Models.Deal;
    dealRoute: Array<Models.DealRoute>;
    currentDealId: string;
    currentMode: Enums.DealMode;
    isExtraInfoExpanded: boolean;
    agreementPopoverData: Models.DealAgreement | null;
    agreementPopoverTarget: string | null;
    expandedAgreementRowIndex: number;
    supParameters: ModelsApp.SupParamsDeal;
    isVisibleModalPhaseSwitchQuestion: boolean;
    isVisibleModalDealCloseResult: boolean;
    currentDealPhase: ModelsApp.Classifier;
    inputDealCloseResult: ModelsApp.Classifier;
    refresh: boolean;
    refreshInProgress: boolean;
    navigationInProgress: boolean;
    refreshError: Error | null;
    currentDealFetching: boolean;
    currentDealError: Error | null;
    currentDealCachedDate: Date | null;
    decisionPopoverData: Models.DealDecisionPopoverData | null;
    decisionPopoverTarget: string | null;
    isVisiblePopoverDecision: boolean;
    isReadOnlyStages: boolean;
    selectedStage: Models.DealStage | null;
    currentStageTab: number;
    isVisiblePopoverClientRoadMapHelp: boolean;
    isVisiblePopoverClientRoadMap: boolean;
    dealAgentListFetching: boolean;
    dealAgentListError: Error | null;
    dealAgentListCachedDate: Date | null;
    dealAgentList: Models.AgentList;
    dealCrmStages: Models.CrmStagesList;
    dealCrmStagesFetching: boolean;
    dealCrmStagesError: Error | null;
    dealRefreshMode: Enums.DealRefreshMode | null;
    navigationType: EnumsAppAll.NavigationType | null;
}
export declare const initialState: {
    readonly state: IDealState;
};
export interface EXPAND_AGREEMENT_ROW {
    (index: number): void;
}
export interface NAVIGATE_TO_EMPLOYEE {
    (id: string): void;
}
export interface NAVIGATE_TO_AGREEMENT_EMPLOYEE {
    (dealAgreement: Models.DealAgreement): void;
}
export interface NAVIGATE_TO_DEAL_SCREEN {
    (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean): void;
}
export interface NAVIGATE_TO_DEAL_PARENT_SCREEN {
    (deal: Models.Deal, dealMode: Enums.DealMode, isEditDealEnable: boolean): void;
}
export interface PERFORM_REFRESH {
    (): void;
}
export interface REFRESH_CALL_GET_DEAL {
    (): void;
}
export interface NAVIGATE_TO_PRODUCT_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_AGREEMENT_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_SOLUTION_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_MEMBER_LIST_SCREEN {
    (): void;
}
export interface PERFORM_EXTRA_INFO_TOGGLE {
    (): void;
}
export interface NAVIGATE_TO_AGENT_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_COMMENT_LIST_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_PHASE_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_NON_LEGAL_MEMBER_CARD {
    (id: string): void;
}
export interface PERFORM_POPOVER_AGREEMENT_SHOW {
    (data: Models.DealAgreement, popoverTarget: string): void;
}
export interface PERFORM_POPOVER_AGREEMENT_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_DECISION_SHOW {
    (data: Models.DealDecisionPopoverData, popoverTarget: string): void;
}
export interface PERFORM_POPOVER_DECISION_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_DECISION_HIDE {
    (): void;
}
export interface PERFORM_INPUT_DEAL_CLOSE_RESULT {
    (value: ModelsApp.Classifier): void;
}
export interface PERFORM_PHASE_SWITCH {
    (phase: ModelsApp.Classifier): void;
}
export interface PERFORM_PHASE_SELECT {
    (): void;
}
export interface PERFORM_DEAL_CLOSE {
    (): void;
}
export interface PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE {
    (): void;
}
export interface PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE {
    (): void;
}
export interface NAVIGATE_BACK {
    (): void;
}
export interface NAVIGATE_DEAL_BACK {
    (collapseScreen?: boolean): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_EDIT_DEAL {
    (): void;
}
