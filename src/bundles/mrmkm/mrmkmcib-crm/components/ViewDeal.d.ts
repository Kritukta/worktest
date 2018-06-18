import React from 'react';
import { Models as ModelsApp, Enums as EnumsAppAll } from 'mrmkmcib-app';
import { Models } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
import * as ModelsDeal from '../models/ModelsDeal';
import * as ModelsDealEditor from '../models/ModelsDealEditor';
import * as ModelsDealStage from '../models/ModelsDealStages';
import * as ModelsDealAttachments from '../models/ModelsDealAttachments';
import Error from '../models/Error';
export interface ICellProps {
    testID: string;
    header: string;
    body: string;
}
export interface IProps {
    navigateToEmployee: ModelsDeal.NAVIGATE_TO_EMPLOYEE;
    navigateToAgreementEmployee: ModelsDeal.NAVIGATE_TO_AGREEMENT_EMPLOYEE;
    navigateToDealScreen: ModelsDeal.NAVIGATE_TO_DEAL_SCREEN;
    navigateToParentDealScreen: ModelsDeal.NAVIGATE_TO_DEAL_PARENT_SCREEN;
    performRefresh: ModelsDeal.PERFORM_REFRESH;
    performRefreshForce: ModelsDeal.PERFORM_REFRESH;
    refresh_callGetDeal: ModelsDeal.REFRESH_CALL_GET_DEAL;
    navigateToProductScreen: ModelsDeal.NAVIGATE_TO_PRODUCT_SCREEN;
    navigateToAgreementScreen: ModelsDeal.NAVIGATE_TO_AGREEMENT_SCREEN;
    navigateToSolutionListScreen: ModelsDeal.NAVIGATE_TO_SOLUTION_LIST_SCREEN;
    navigateToMemberListScreen: ModelsDeal.NAVIGATE_TO_MEMBER_LIST_SCREEN;
    performExtraInfoToggle: ModelsDeal.PERFORM_EXTRA_INFO_TOGGLE;
    navigateToAgentListScreen: ModelsDeal.NAVIGATE_TO_AGENT_LIST_SCREEN;
    navigateToCommentListScreen: ModelsDeal.NAVIGATE_TO_COMMENT_LIST_SCREEN;
    navigateToPhaseScreen: ModelsDeal.NAVIGATE_TO_PHASE_SCREEN;
    navigateToNonLegalMembersScreen: ModelsDeal.NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN;
    navigateToNonLegalMemberCard: ModelsDeal.NAVIGATE_TO_NON_LEGAL_MEMBER_CARD;
    performInputDealCloseResult: ModelsDeal.PERFORM_INPUT_DEAL_CLOSE_RESULT;
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR;
    performPopoverAgreementShow: ModelsDeal.PERFORM_POPOVER_AGREEMENT_SHOW;
    performPopoverAgreementHide: ModelsDeal.PERFORM_POPOVER_AGREEMENT_HIDE;
    performPopoverDecisionShow: ModelsDeal.PERFORM_POPOVER_DECISION_SHOW;
    performPopoverDecisionHide: ModelsDeal.PERFORM_POPOVER_DECISION_HIDE;
    performPhaseSwitch: ModelsDeal.PERFORM_PHASE_SWITCH;
    performPhaseSelect: ModelsDeal.PERFORM_PHASE_SELECT;
    performDealClose: ModelsDeal.PERFORM_DEAL_CLOSE;
    performModalPhaseSwitchQuestionHide: ModelsDeal.PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE;
    performModalDealCloseResultHide: ModelsDeal.PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE;
    navigateDealBack: ModelsDeal.NAVIGATE_DEAL_BACK;
    performContainerReset: ModelsDeal.PERFORM_CONTAINER_RESET;
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    navigateBack: ModelsDeal.NAVIGATE_BACK;
    navigateBackFromParent: ModelsDeal.NAVIGATE_BACK;
    isDealExpandedMode: boolean;
    isEditDealEnable: boolean;
    currentDeal: Models.Deal;
    currentDealId: string;
    dealRoute: Array<Models.DealRoute>;
    currentMode: Enums.DealMode;
    isExtraInfoExpanded: boolean;
    agreementPopoverData: Models.DealAgreement | null;
    agreementPopoverTarget: string | null;
    expandedAgreementRowIndex: number;
    approvedStatuses: string;
    performExpandAgreementRow: ModelsDeal.EXPAND_AGREEMENT_ROW;
    decisionPopoverData: Models.DealDecisionPopoverData | null;
    decisionPopoverTarget: string | null;
    isVisiblePopoverDecision: boolean;
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
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentUser: ModelsApp.Employee;
    agentList: Models.AgentList;
    agentListFetching: boolean;
    agentListError: Error | null;
    dealAgentListFetching: boolean;
    dealAgentListError: Error | null;
    dealAgentListCachedDate: Date | null;
    dealAgentList: Models.AgentList;
    dealCrmStages: Models.CrmStagesList;
    dealCrmStagesFetching: boolean;
    dealCrmStagesError: Error | null;
    navigationType: EnumsAppAll.NavigationType | null;
    navigateToDealAttachmentsScreen: ModelsDeal.NAVIGATE_BACK;
    dealAttachments: Models.IDealAttachmentList;
    dealAttachmentsError: Models.Error | null;
    dealAttachmentsFetching: boolean;
    performRefreshAttachmentsList: ModelsDealAttachments.PERFORM_REFRESH_ATTACHMENTS_LIST;
    isReadOnlyStages: boolean;
    navigateToStageDetails: ModelsDealStage.NAVIGATE_TO_STAGE_DETAILS;
    currentStageTab: number;
    selectedStage: Models.DealStage | null;
    performChangeStageTab: ModelsDealStage.PERFORM_CHANGE_STAGE_TAB;
    performPopoverClientRoadMapHelpShow: ModelsDealStage.NO_PARAMS_VOID;
    performPopoverClientRoadMapHelpHide: ModelsDealStage.NO_PARAMS_VOID;
    isVisiblePopoverClientRoadMapHelp: boolean;
    performClientRoadMapActivate: ModelsDealStage.NO_PARAMS_VOID;
    performClientRoadMapNext: ModelsDealStage.NO_PARAMS_VOID;
    performPopoverClientRoadMapShow: ModelsDealStage.NO_PARAMS_VOID;
    performPopoverClientRoadMapHide: ModelsDealStage.NO_PARAMS_VOID;
    isVisiblePopoverClientRoadMap: boolean;
    testID: string;
}
declare const ViewDeal: React.StatelessComponent<IProps>;
export default ViewDeal;