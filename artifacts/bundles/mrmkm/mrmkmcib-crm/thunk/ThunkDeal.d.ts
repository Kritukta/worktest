import * as ModelState from "../models/Models";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Error from "../models/Error";
export declare const navigateToEmployee: (id: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToAgreementEmployee: (dealAgreement: Models.DealAgreement) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateEmployeeBackToDealAgreement: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateEmployeeBackToDeal: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToParentDealScreen: (deal: Models.Deal, dealMode: Enums.DealMode, isEditDealEnable: boolean, customerId?: string) => (dispatch: Function) => void;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to set Deal id
 *
 * @param {Models.Deal} deal
 */
export declare const performSetDeal: (deal: Models.Deal) => (dispatch: Function) => void;
export declare const navigateToDealScreen: (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean, customerId?: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefresh: (dealId?: string, customerId?: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_performRefreshActivity: (dealId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshForce: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_callGetDealAgentList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_callGetDealTracking: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const setSupParameters: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_callGetDeal: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToProductScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performExpandAgreementRow: (index: number) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToAgreementScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToSolutionListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToMemberListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performExtraInfoToggle: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCloseDealAgentListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToAgentListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCommentListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToPhaseScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToNonLegalMembersScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToNonLegalMemberCard: (id: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputDealCloseResult: (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPhaseSwitch: (phase: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPhaseSelect: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performDealClose: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performModalPhaseSwitchQuestionHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performModalDealCloseResultHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBackFromParent: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateDealBack: (collapseScreen?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverAgreementShow: (data: Models.DealAgreement, popoverTarget: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverAgreementHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverDecisionShow: (data: Models.DealDecisionPopoverData, popoverTarget: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverDecisionHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performContainerReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshDealAfterMemberListUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performEditDeal: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToDealAttachmentsScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
