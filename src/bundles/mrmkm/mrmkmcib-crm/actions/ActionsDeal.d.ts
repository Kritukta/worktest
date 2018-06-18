/**
 * Actions of Deal container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums as EnumsAppAll } from "mrmkmcib-app";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const NAVIGATE_TO_EMPLOYEE = "DEAL_CONTAINER_NAVIGATE_TO_EMPLOYEE";
export declare const PERFORM_SET_DEAL = "DEAL_CONTAINER_PERFORM_SET_DEAL";
export declare const PERFORM_DEAL_EXPANDED_MODE_TOGGLE = "DEAL_CONTAINER_PERFORM_DEAL_EXPANDED_MODE_TOGGLE";
export declare const PERFORM_FLUSH = "DEAL_CONTAINER_PERFORM_DEAL_FLUSH";
export declare const NAVIGATE_TO_DEAL_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_DEAL_SCREEN";
export declare const REPLACE_DEAL_DATA = "DEAL_CONTAINER_REPLACE_DEAL_DATA";
export declare const NAVIGATION_LOADER_SHOW = "DEAL_CONTAINER_NAVIGATION_LOADER_SHOW";
export declare const PERFORM_REFRESH = "DEAL_CONTAINER_PERFORM_REFRESH";
export declare const PERFORM_REFRESH_EXECUTE = "DEAL_CONTAINER_PERFORM_REFRESH_EXECUTE";
export declare const PERFORM_REFRESH_SUCCESS = "DEAL_CONTAINER_PERFORM_REFRESH_SUCCESS";
export declare const PERFORM_REFRESH_STAGES_SUCCESS = "DEAL_CONTAINER_PERFORM_REFRESH_STAGES_SUCCESS";
export declare const PERFORM_REFRESH_FAILURE = "DEAL_CONTAINER_PERFORM_REFRESH_FAILURE";
export declare const PERFORM_EXPAND_AGREEMENT_ROW = "DEAL_CONTAINER_PERFORM_EXPAND_AGREEMENT_ROW";
export declare const REFRESH_CALL_GET_DEAL = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL";
export declare const REFRESH_CALL_GET_DEAL_REQUEST = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_REQUEST";
export declare const REFRESH_CALL_GET_DEAL_SUCCESS = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_SUCCESS";
export declare const REFRESH_CALL_GET_DEAL_FAILURE = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_FAILURE";
export declare const NAVIGATE_TO_PRODUCT_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_PRODUCT_SCREEN";
export declare const NAVIGATE_TO_AGREEMENT_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_AGREEMENT_SCREEN";
export declare const PERFORM_SET_EXPANDED_CONTENT_SCREEN = "DEAL_CONTAINER_PERFORM_SET_EXPANDED_CONTENT_SCREEN";
export declare const NAVIGATE_TO_SOLUTION_LIST_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_SOLUTION_LIST_SCREEN";
export declare const NAVIGATE_TO_MEMBER_LIST_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN";
export declare const PERFORM_EXTRA_INFO_TOGGLE = "DEAL_CONTAINER_PERFORM_EXTRA_INFO_TOGGLE";
export declare const NAVIGATE_TO_AGENT_LIST_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_AGENT_LIST_SCREEN";
export declare const NAVIGATE_TO_COMMENT_LIST_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_COMMENT_LIST_SCREEN";
export declare const NAVIGATE_TO_PHASE_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_PHASE_SCREEN";
export declare const NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN";
export declare const NAVIGATE_TO_NON_LEGAL_MEMBER_CARD = "DEAL_CONTAINER_NAVIGATE_TO_NON_LEGAL_MEMBER_CARD";
export declare const PERFORM_INPUT_DEAL_CLOSE_RESULT = "DEAL_CONTAINER_PERFORM_INPUT_DEAL_CLOSE_RESULT";
export declare const PERFORM_PHASE_SWITCH = "DEAL_CONTAINER_PERFORM_PHASE_SWITCH";
export declare const PERFORM_PHASE_SELECT = "DEAL_CONTAINER_PERFORM_PHASE_SELECT";
export declare const PERFORM_DEAL_ROUTE_POP = "DEAL_CONTAINER_PERFORM_DEAL_ROUTE_POP";
export declare const PERFORM_DEAL_ROUTE_PUSH = "DEAL_CONTAINER_PERFORM_DEAL_ROUTE_PUSH";
export declare const SET_SUP_PARAMETER_DEAL = "DEAL_CONTAINER_SET_SUP_PARAMETER_DEAL";
export declare const PERFORM_DEAL_CLOSE = "DEAL_CONTAINER_PERFORM_DEAL_CLOSE";
export declare const PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE = "DEAL_CONTAINER_PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE";
export declare const PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE = "DEAL_CONTAINER_PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE";
export declare const NAVIGATE_DEAL_BACK = "DEAL_CONTAINER_NAVIGATE_DEAL_BACK";
export declare const NAVIGATE_BACK_TO_DEAL_SCREEN = "DEAL_CONTAINER_NAVIGATE_BACK_TO_DEAL_SCREEN";
export declare const PERFORM_CONTAINER_RESET = "DEAL_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_POPOVER_AGREEMENT_HIDE = "DEAL_CONTAINER_PERFORM_POPOVER_AGREEMENT_HIDE";
export declare const PERFORM_POPOVER_AGREEMENT_SHOW = "DEAL_CONTAINER_PERFORM_POPOVER_AGREEMENT_SHOW";
export declare const PERFORM_POPOVER_DECISION_HIDE = "DEAL_CONTAINER_PERFORM_POPOVER_DECISION_HIDE";
export declare const PERFORM_POPOVER_DECISION_SHOW = "DEAL_CONTAINER_PERFORM_POPOVER_DECISION_SHOW";
export declare const REFRESH_CALL_GET_DEAL_AGENT_LIST = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST";
export declare const REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST";
export declare const REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS";
export declare const REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE";
export declare const REFRESH_CALL_GET_DEAL_TRACKING = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING";
export declare const REFRESH_CALL_GET_DEAL_TRACKING_REQUEST = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING_REQUEST";
export declare const REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS";
export declare const REFRESH_CALL_GET_DEAL_TRACKING_FAILURE = "DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING_FAILURE";
export declare const PERFORM_DEAL_REFRESH_MODE = "PERFORM_DEAL_REFRESH_MODE";
export declare const PERFORM_EDIT_DEAL = "PERFORM_EDIT_DEAL";
export declare const SWAP_CONTEXT = "DEAL_CONTAINER_SWAP_CONTEXT";
export declare const NAVIGATE_BACK = "DEAL_CONTAINER_NAVIGATE_BACK";
export declare const NAVIGATE_TO_STAGE_DETAILS = "DEAL_CONTAINER_NAVIGATE_TO_STAGE_DETAILS";
export declare const PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE = "DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE";
export declare const PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW = "DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW";
export declare const PERFORM_CLIENT_ROADMAP_ACTIVATE = "DEAL_CONTAINER_PERFORM_CLIENT_ROADMAP_ACTIVATE";
export declare const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE = "DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE";
export declare const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW = "DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW";
export declare const PERFORM_CHANGE_STAGE_TAB = "DEAL_CONTAINER_PERFORM_CHANGE_STAGE_TAB";
export declare const NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN = "DEAL_CONTAINER_NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN";
export declare const NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN = "DEAL_CONTAINER_NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN";
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 *
 * @param {string} id .
 */
export declare type NAVIGATE_TO_EMPLOYEE = {
    id: string;
};
export declare const navigateToEmployee: (id: string) => Action<NAVIGATE_TO_EMPLOYEE>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to set Deal id
 *
 * @param {Models.Deal} deal
 */
export declare type PERFORM_SET_DEAL = {
    deal: Models.Deal;
};
export declare const performSetDeal: (deal: ModelsCrm.Deal) => Action<PERFORM_SET_DEAL>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to toggle DealExpandedMode.
 *
 */
export declare type PERFORM_DEAL_EXPANDED_MODE_TOGGLE = {};
export declare const performDealExpandedModeToggle: () => Action<PERFORM_DEAL_EXPANDED_MODE_TOGGLE>;
export declare type NAVIGATION_LOADER_SHOW = {
    isVisible: boolean;
};
export declare const navigationLoaderShow: (isVisible: boolean) => Action<NAVIGATION_LOADER_SHOW>;
export declare type REPLACE_DEAL_DATA = {
    dealRoute: Models.DealRoute;
};
export declare const replaceDealData: (dealRoute: ModelsCrm.DealRoute) => Action<REPLACE_DEAL_DATA>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to open Deal.
 *
 * @param {string} dealId .
 */
export declare type NAVIGATE_TO_DEAL_SCREEN = {
    dealId: string;
    dealMode: Enums.DealMode;
    isEditDealEnable: boolean;
};
export declare const navigateToDealScreen: (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean) => Action<NAVIGATE_TO_DEAL_SCREEN>;
export declare type PERFORM_DEAL_ROUTE_PUSH = {
    deal: Models.Deal;
    dealMode: Enums.DealMode;
    isEditDealEnable: boolean;
};
export declare const performDealRoutePush: (deal: ModelsCrm.Deal, dealMode: Enums.DealMode, isEditDealEnable: boolean) => Action<PERFORM_DEAL_ROUTE_PUSH>;
/**
 * Thunk dispatched to set all sup parameters for deals.
 *
 */
export declare type SET_SUP_PARAMETER_DEAL = {
    params: ModelsApp.SupParamsDeal;
};
export declare const setSupParameterDeal: (params: ModelsApp.SupParamsDeal) => Action<SET_SUP_PARAMETER_DEAL>;
export declare type PERFORM_DEAL_ROUTE_POP = {};
export declare const performDealRoutePop: () => Action<PERFORM_DEAL_ROUTE_POP>;
/**
 * Thunk dispatched by "Customer" screen. Thunk used to flush cache by any kind customer data and request it again.
 *
 */
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
 *
 */
export declare type PERFORM_REFRESH = {};
export declare const performRefresh: () => Action<PERFORM_REFRESH>;
export declare type PERFORM_REFRESH_EXECUTE = {};
export declare const performRefreshExecute: () => Action<PERFORM_REFRESH_EXECUTE>;
export declare type PERFORM_REFRESH_STAGES_SUCCESS = {
    stageList: Array<Models.DealStage>;
};
export declare const performRefreshStagesSuccess: (stageList: ModelsCrm.DealStage[]) => Action<PERFORM_REFRESH_STAGES_SUCCESS>;
export declare type PERFORM_REFRESH_SUCCESS = {
    data: boolean;
};
export declare const performRefreshSuccess: (data: boolean) => Action<PERFORM_REFRESH_SUCCESS>;
export declare type PERFORM_REFRESH_FAILURE = {
    error: Error;
};
export declare const performRefreshFailure: (error: Error) => Action<PERFORM_REFRESH_FAILURE>;
/**
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 */
export declare type REFRESH_CALL_GET_DEAL = {};
export declare const refresh_callGetDeal: () => Action<REFRESH_CALL_GET_DEAL>;
export declare type REFRESH_CALL_GET_DEAL_TRACKING = {};
export declare const refresh_callGetDealTracking: () => Action<REFRESH_CALL_GET_DEAL_TRACKING>;
export declare type REFRESH_CALL_GET_DEAL_TRACKING_REQUEST = {};
export declare const refresh_callGetDealTrackingRequest: () => Action<REFRESH_CALL_GET_DEAL_TRACKING_REQUEST>;
export declare type REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS = {
    response: Response<Models.CrmStagesList>;
};
export declare const refresh_callGetDealTrackingSuccess: (response: Response<ModelsCrm.CrmStagesList>) => Action<REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS>;
export declare type REFRESH_CALL_GET_DEAL_TRACKING_FAILURE = {
    error: Error;
};
export declare const refresh_callGetDealTrackingFailure: (error: Error) => Action<REFRESH_CALL_GET_DEAL_TRACKING_FAILURE>;
/**
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 */
export declare type REFRESH_CALL_GET_DEAL_AGENT_LIST = {};
export declare const refresh_callGetDealAgentList: () => Action<REFRESH_CALL_GET_DEAL_AGENT_LIST>;
/**
 * Action dispatched on network thunk chain "refresh_callGetDeal" started. Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 */
export declare type REFRESH_CALL_GET_DEAL_REQUEST = {};
export declare const refresh_callGetDealRequest: () => Action<REFRESH_CALL_GET_DEAL_REQUEST>;
/**
 * Action dispatched on network thunk chain "refresh_callGetDealAgentListRequest" started. Thunk dispatched by "Deal" screen. Fetch agent list with current deal Id.
 */
export declare type REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST = {};
export declare const refresh_callGetDealAgentListRequest: () => Action<REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST>;
export declare type REFRESH_CALL_GET_DEAL_SUCCESS = {
    response: Response<Models.Deal>;
};
export declare const refresh_callGetDealSuccess: (response: Response<ModelsCrm.Deal>) => Action<REFRESH_CALL_GET_DEAL_SUCCESS>;
export declare type REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS = {
    response: Response<Models.AgentList>;
};
export declare const refresh_callGetDealAgentListSuccess: (response: Response<ModelsCrm.AgentList>) => Action<REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS>;
export declare type REFRESH_CALL_GET_DEAL_FAILURE = {
    error: Error;
};
export declare const refresh_callGetDealFailure: (error: Error) => Action<REFRESH_CALL_GET_DEAL_FAILURE>;
export declare type REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE = {
    error: Error;
};
export declare const refresh_callGetDealAgentListFailure: (error: Error) => Action<REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_PRODUCT_SCREEN = {};
export declare const navigateToProductScreen: () => Action<NAVIGATE_TO_PRODUCT_SCREEN>;
export declare type PERFORM_EXPAND_AGREEMENT_ROW = {
    index: number;
};
export declare const performExpandAgreementRow: (index: number) => Action<PERFORM_EXPAND_AGREEMENT_ROW>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_AGREEMENT_SCREEN = {};
export declare const navigateToAgreementScreen: () => Action<NAVIGATE_TO_AGREEMENT_SCREEN>;
export declare type PERFORM_SET_EXPANDED_CONTENT_SCREEN = {
    isExpanded: boolean;
};
export declare const performExpandScreen: (isExpanded: boolean) => Action<PERFORM_SET_EXPANDED_CONTENT_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_SOLUTION_LIST_SCREEN = {};
export declare const navigateToSolutionListScreen: () => Action<NAVIGATE_TO_SOLUTION_LIST_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_MEMBER_LIST_SCREEN = {};
export declare const navigateToMemberListScreen: () => Action<NAVIGATE_TO_MEMBER_LIST_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to toggle extra info expand.
 *
 */
export declare type PERFORM_EXTRA_INFO_TOGGLE = {};
export declare const performExtraInfoToggle: () => Action<PERFORM_EXTRA_INFO_TOGGLE>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_AGENT_LIST_SCREEN = {};
export declare const navigateToAgentListScreen: () => Action<NAVIGATE_TO_AGENT_LIST_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal comment list screen.
 *
 */
export declare type NAVIGATE_TO_COMMENT_LIST_SCREEN = {};
export declare const navigateToCommentListScreen: () => Action<NAVIGATE_TO_COMMENT_LIST_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
 *
 */
export declare type NAVIGATE_TO_PHASE_SCREEN = {};
export declare const navigateToPhaseScreen: () => Action<NAVIGATE_TO_PHASE_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal non legal members screen.
 *
 */
export declare type NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN = {};
export declare const navigateToNonLegalMembersScreen: () => Action<NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal non legal member card screen.
 *
 */
export declare type NAVIGATE_TO_NON_LEGAL_MEMBER_CARD = {};
export declare const navigateToNonLegalMemberCard: (id: string) => Action<NAVIGATE_TO_NON_LEGAL_MEMBER_CARD>;
/**
 * Thunk dispatched by "Deal" screen. Thunk dispatched on user input DealCloseResult field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_DEAL_CLOSE_RESULT = {
    value: ModelsApp.Classifier;
};
export declare const performInputDealCloseResult: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_DEAL_CLOSE_RESULT>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
 *
 * @param {ModelsApp.Classifier} phase .
 */
export declare type PERFORM_PHASE_SWITCH = {
    phase: ModelsApp.Classifier;
};
export declare const performPhaseSwitch: (phase: ModelsApp.Classifier) => Action<PERFORM_PHASE_SWITCH>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
 *
 */
export declare type PERFORM_PHASE_SELECT = {};
export declare const performPhaseSelect: () => Action<PERFORM_PHASE_SELECT>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to close deal.
 *
 */
export declare type PERFORM_DEAL_CLOSE = {};
export declare const performDealClose: () => Action<PERFORM_DEAL_CLOSE>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to hide modal
 *
 */
export declare type PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE = {};
export declare const performModalPhaseSwitchQuestionHide: () => Action<PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE>;
/**
 * Thunk dispatched by "Deal" screen. Thunk used to hide modal
 *
 */
export declare type PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE = {};
export declare const performModalDealCloseResultHide: () => Action<PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE>;
/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export declare type NAVIGATE_DEAL_BACK = {};
export declare const navigateDealBack: () => Action<NAVIGATE_DEAL_BACK>;
/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export declare type NAVIGATE_BACK_TO_DEAL_SCREEN = {};
export declare const navigateBackToDeal: () => Action<NAVIGATE_BACK_TO_DEAL_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export declare type PERFORM_POPOVER_DECISION_SHOW = {
    data: Models.DealDecisionPopoverData;
    popoverTarget: string;
};
export declare const performPopoverDecisionShow: (data: ModelsCrm.DealDecisionPopoverData, popoverTarget: string) => Action<PERFORM_POPOVER_DECISION_SHOW>;
/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export declare type PERFORM_POPOVER_DECISION_HIDE = {};
export declare const performPopoverDecisionHide: () => Action<PERFORM_POPOVER_DECISION_HIDE>;
/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export declare type PERFORM_POPOVER_AGREEMENT_SHOW = {
    data: Models.DealAgreement;
    popoverTarget: string;
};
export declare const performPopoverAgreementShow: (data: ModelsCrm.DealAgreement, popoverTarget: string) => Action<PERFORM_POPOVER_AGREEMENT_SHOW>;
/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export declare type PERFORM_POPOVER_AGREEMENT_HIDE = {};
export declare const performPopoverAgreementHide: () => Action<PERFORM_POPOVER_AGREEMENT_HIDE>;
/**
 * Thunk dispatched by "Deal" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
export declare type PERFORM_DEAL_REFRESH_MODE = {
    mode: Enums.DealRefreshMode | null;
};
export declare const performDealRefreshMode: (mode: Enums.DealRefreshMode | null) => Action<PERFORM_DEAL_REFRESH_MODE>;
export declare type PERFORM_EDIT_DEAL = {};
export declare const performEditDeal: () => Action<PERFORM_EDIT_DEAL>;
/**
 * Thunk dispatched by "Deal" screen.
 * Thunk dispatched to save navigationType from state.mrmkmcibApp.reducerAuthorization.navigateBackData.navigationType.
 *
 * @param {EnumsAppAll.NavigationType} navigationType .
 */
export declare type SWAP_CONTEXT = {
    navigationType: EnumsAppAll.NavigationType;
};
export declare const swapContext: (navigationType: EnumsAppAll.NavigationType) => Action<SWAP_CONTEXT>;
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN = {};
export declare const navigateToDealAttachmentsScreen: () => Action<NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN = {};
export declare const navigateBackFromDealAttachmentsScreen: () => Action<NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN>;
