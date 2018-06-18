/**
 * Models for Deal container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp, Enums as EnumsAppAll} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"
import {Enums} from '../Enums'

export interface PERFORM_POPOVER_MEMBER_LIST_HIDE {
    (): void;
}

export interface PERFORM_POPOVER_MEMBER_LIST_SHOW {
    (): void;
}


const defaultState = {
    get state(): IDealState {
        return {

            isDealExpandedMode: false,  // State parameter displayed in "Deal" screen.
            isEditDealEnable: false,
            currentDeal: defaultValues.Deal,  // State parameter displayed in "Deal" screen.
            currentDealId: '',  // State parameter displayed in "Deal" screen.
            dealRoute: [],
            currentMode: Enums.DealMode.CommonBack,
            isExtraInfoExpanded: false,  // State parameter displayed in "Deal" screen.
            agreementPopoverData: null,
            agreementPopoverTarget: null,
            expandedAgreementRowIndex: -1,
            supParameters: {
                DealSalesMethod: '',
                DealApprovedStatusList: '',
                DealSalesMethodRoadMapStandard: '',
                DealSalesMethodRoadMapCredit: '',
            },
            isVisibleModalPhaseSwitchQuestion: false,  // State parameter displayed in "Deal" screen.
            isVisibleModalDealCloseResult: false,  // State parameter displayed in "Deal" screen.
            currentDealPhase: defaultValues.Classifier,  // State parameter displayed in "Deal" screen.
            inputDealCloseResult: defaultValues.Classifier,  // State parameter displayed in "Deal" screen.
            refresh: defaultValues.boolean,  // Result for "performRefresh" thunk.
            refreshInProgress: false,  // Progress indicator for thunk chain "performRefresh".
            refreshError: null,  // Error info for thunk chain "performRefresh".
            currentDealFetching: false,  // Fetching indicator for network thunk chain "refresh_callGetDeal".
            currentDealError: null,  // Network error info for thunk chain "refresh_callGetDeal".
            currentDealCachedDate: null,  // Response data cache date for network thunk chain "refresh_callGetDeal".
            isVisiblePopoverDecision: false,
            decisionPopoverData: null,
            decisionPopoverTarget: '',
            isReadOnlyStages: true,
            selectedStage: null,
            currentStageTab: 0,
            isVisiblePopoverClientRoadMapHelp: false,
            isVisiblePopoverClientRoadMap: false,
            //Список представителей по сделкуе
            dealAgentListFetching: false,
            dealAgentListError: null,
            dealAgentListCachedDate: null,
            dealAgentList: defaultValues.AgentList,
            dealCrmStages: defaultValues.EmptyList,
            dealCrmStagesFetching: false,
            dealCrmStagesError: null,
            dealRefreshMode:null,
            navigationInProgress: false,
            navigationType: null,
        }
    }
}

export interface IDealState {

    isDealExpandedMode: boolean,  // State parameter displayed in "Deal" screen.
    isEditDealEnable: boolean,
    currentDeal: Models.Deal,  // State parameter displayed in "Deal" screen.
    dealRoute: Array<Models.DealRoute>,
    currentDealId: string,  // State parameter displayed in "Deal" screen.
    currentMode: Enums.DealMode,
    isExtraInfoExpanded: boolean,  // State parameter displayed in "Deal" screen.
    agreementPopoverData: Models.DealAgreement | null,
    agreementPopoverTarget: string | null,
    expandedAgreementRowIndex: number,
    supParameters: ModelsApp.SupParamsDeal,
    isVisibleModalPhaseSwitchQuestion: boolean,  // State parameter displayed in "Deal" screen.
    isVisibleModalDealCloseResult: boolean,  // State parameter displayed in "Deal" screen.
    currentDealPhase: ModelsApp.Classifier,  // State parameter displayed in "Deal" screen.
    inputDealCloseResult: ModelsApp.Classifier,  // State parameter displayed in "Deal" screen.
    refresh: boolean,  // Result for "performRefresh" thunk.
    refreshInProgress: boolean,  // Progress indicator for thunk chain "performRefresh".
    navigationInProgress: boolean,
    refreshError: Error | null,  // Error info for thunk chain "performRefresh".
    currentDealFetching: boolean,  // Fetching indicator for network thunk chain "refresh_callGetDeal".
    currentDealError: Error | null,  // Network error info for thunk chain "refresh_callGetDeal".
    currentDealCachedDate: Date | null,  // Response data cache date for network thunk chain "refresh_callGetDeal".
    decisionPopoverData: Models.DealDecisionPopoverData | null,
    decisionPopoverTarget: string | null,
    isVisiblePopoverDecision: boolean,

    isReadOnlyStages: boolean,
    selectedStage: Models.DealStage | null,
    currentStageTab: number,
    isVisiblePopoverClientRoadMapHelp: boolean,
    isVisiblePopoverClientRoadMap: boolean,

    dealAgentListFetching: boolean,
    dealAgentListError: Error | null,
    dealAgentListCachedDate: Date | null,
    dealAgentList: Models.AgentList,
    dealCrmStages: Models.CrmStagesList,
    dealCrmStagesFetching: boolean,
    dealCrmStagesError: Error | null,
    dealRefreshMode: Enums.DealRefreshMode | null,
    navigationType: EnumsAppAll.NavigationType | null

}

export const initialState = {
    get state(): IDealState {
        return defaultState.state
    }
}

export interface EXPAND_AGREEMENT_ROW {
    (index: number): void;
}

export interface NAVIGATE_TO_EMPLOYEE {
    (id: string): void;
}

export interface NAVIGATE_TO_AGREEMENT_EMPLOYEE {
    (dealAgreement:Models.DealAgreement): void;
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

export interface  PERFORM_POPOVER_AGREEMENT_SHOW {
    (data: Models.DealAgreement, popoverTarget: string): void
}

export interface  PERFORM_POPOVER_AGREEMENT_HIDE {
    (): void
}

export interface  PERFORM_POPOVER_DECISION_SHOW {
    (data: Models.DealDecisionPopoverData, popoverTarget: string): void
}

export interface  PERFORM_POPOVER_DECISION_HIDE {
    (): void
}

export interface  PERFORM_POPOVER_DECISION_HIDE {
    (): void
}

export interface PERFORM_INPUT_DEAL_CLOSE_RESULT {
    (value: ModelsApp.Classifier): void;
}

export interface PERFORM_PHASE_SWITCH {
    (phase: ModelsApp.Classifier,): void;
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
