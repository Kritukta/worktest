/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkDealEditor from '../thunk/ThunkDealEditor';
import * as thunkDeal from '../thunk/ThunkDeal';
import * as thunkDealAttachments from '../thunk/ThunkDealAttachments';
import ViewDeal from '../components/ViewDeal';
/*
 * Container "Deal". Deal card screen.
 */
class ContainerDeal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewDeal, { testID: 'test-id-container-Deal', navigateToEmployee: this.props.navigateToEmployee, navigateToAgreementEmployee: this.props.navigateToAgreementEmployee, navigateToDealScreen: this.props.navigateToDealScreen, navigateToParentDealScreen: this.props.navigateToParentDealScreen, performRefresh: this.props.performRefresh, refresh_callGetDeal: this.props.refresh_callGetDeal, navigateToProductScreen: this.props.navigateToProductScreen, navigateToAgreementScreen: this.props.navigateToAgreementScreen, navigateToSolutionListScreen: this.props.navigateToSolutionListScreen, navigateToMemberListScreen: this.props.navigateToMemberListScreen, performExtraInfoToggle: this.props.performExtraInfoToggle, navigateToAgentListScreen: this.props.navigateToAgentListScreen, navigateToCommentListScreen: this.props.navigateToCommentListScreen, navigateToPhaseScreen: this.props.navigateToPhaseScreen, navigateToNonLegalMembersScreen: this.props.navigateToNonLegalMembersScreen, navigateToNonLegalMemberCard: this.props.navigateToNonLegalMemberCard, navigateToDealEditor: this.props.navigateToDealEditor, performInputDealCloseResult: this.props.performInputDealCloseResult, performPhaseSwitch: this.props.performPhaseSwitch, performPhaseSelect: this.props.performPhaseSelect, performDealClose: this.props.performDealClose, performModalPhaseSwitchQuestionHide: this.props.performModalPhaseSwitchQuestionHide, performModalDealCloseResultHide: this.props.performModalDealCloseResultHide, navigateDealBack: this.props.navigateDealBack, performContainerReset: this.props.performContainerReset, performPopoverAgreementHide: this.props.performPopoverAgreementHide, performPopoverAgreementShow: this.props.performPopoverAgreementShow, performCustomerOpen: this.props.performCustomerOpen, performPopoverDecisionHide: this.props.performPopoverDecisionHide, performPopoverDecisionShow: this.props.performPopoverDecisionShow, navigateBack: this.props.navigateBack, navigateBackFromParent: this.props.navigateBackFromParent, isDealExpandedMode: this.props.isDealExpandedMode, isEditDealEnable: this.props.isEditDealEnable, agreementPopoverData: this.props.agreementPopoverData, agreementPopoverTarget: this.props.agreementPopoverTarget, decisionPopoverData: this.props.decisionPopoverData, decisionPopoverTarget: this.props.decisionPopoverTarget, isVisiblePopoverDecision: this.props.isVisiblePopoverDecision, expandedAgreementRowIndex: this.props.expandedAgreementRowIndex, performExpandAgreementRow: this.props.performExpandAgreementRow, approvedStatuses: this.props.approvedStatuses, currentDeal: this.props.currentDeal, currentDealId: this.props.currentDealId, dealRoute: this.props.dealRoute, currentMode: this.props.currentMode, isExtraInfoExpanded: this.props.isExtraInfoExpanded, isVisibleModalPhaseSwitchQuestion: this.props.isVisibleModalPhaseSwitchQuestion, isVisibleModalDealCloseResult: this.props.isVisibleModalDealCloseResult, currentDealPhase: this.props.currentDealPhase, inputDealCloseResult: this.props.inputDealCloseResult, refresh: this.props.refresh, refreshInProgress: this.props.refreshInProgress, navigationInProgress: this.props.navigationInProgress, refreshError: this.props.refreshError, currentDealFetching: this.props.currentDealFetching, currentDealError: this.props.currentDealError, currentDealCachedDate: this.props.currentDealCachedDate, performRefreshForce: this.props.performRefreshForce, isReadOnlyStages: this.props.isReadOnlyStages, navigateToStageDetails: this.props.navigateToStageDetails, currentStageTab: this.props.currentStageTab, selectedStage: this.props.selectedStage, performChangeStageTab: this.props.performChangeStageTab, performPopoverClientRoadMapHelpShow: this.props.performPopoverClientRoadMapHelpShow, performPopoverClientRoadMapHelpHide: this.props.performPopoverClientRoadMapHelpHide, isVisiblePopoverClientRoadMapHelp: this.props.isVisiblePopoverClientRoadMapHelp, performClientRoadMapActivate: this.props.performClientRoadMapActivate, performClientRoadMapNext: this.props.performClientRoadMapNext, performPopoverClientRoadMapShow: this.props.performPopoverClientRoadMapShow, performPopoverClientRoadMapHide: this.props.performPopoverClientRoadMapHide, isVisiblePopoverClientRoadMap: this.props.isVisiblePopoverClientRoadMap, dealAgentListFetching: this.props.dealAgentListFetching, dealAgentListError: this.props.dealAgentListError, dealAgentListCachedDate: this.props.dealAgentListCachedDate, dealAgentList: this.props.dealAgentList, dealCrmStages: this.props.dealCrmStages, dealCrmStagesFetching: this.props.dealCrmStagesFetching, dealCrmStagesError: this.props.dealCrmStagesError, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentUser: this.props.currentUser, agentList: this.props.agentList, agentListFetching: this.props.agentListFetching, agentListError: this.props.agentListError, navigationType: this.props.navigationType, navigateToDealAttachmentsScreen: this.props.navigateToDealAttachmentsScreen, dealAttachments: this.props.dealAttachments, dealAttachmentsError: this.props.dealAttachmentsError, performRefreshAttachmentsList: this.props.performRefreshAttachmentsList, dealAttachmentsFetching: this.props.dealAttachmentsFetching }));
    }
}
function mapStateToProps(state) {
    return {
        isDealExpandedMode: state.user.mrmkmcibCRM.reducerDeal.isDealExpandedMode,
        isEditDealEnable: state.user.mrmkmcibCRM.reducerDeal.isEditDealEnable,
        currentDeal: state.user.mrmkmcibCRM.reducerDeal.currentDeal,
        currentDealId: state.user.mrmkmcibCRM.reducerDeal.currentDealId,
        dealRoute: state.user.mrmkmcibCRM.reducerDeal.dealRoute,
        currentMode: state.user.mrmkmcibCRM.reducerDeal.currentMode,
        isExtraInfoExpanded: state.user.mrmkmcibCRM.reducerDeal.isExtraInfoExpanded,
        agreementPopoverData: state.user.mrmkmcibCRM.reducerDeal.agreementPopoverData,
        agreementPopoverTarget: state.user.mrmkmcibCRM.reducerDeal.agreementPopoverTarget,
        expandedAgreementRowIndex: state.user.mrmkmcibCRM.reducerDeal.expandedAgreementRowIndex,
        approvedStatuses: state.user.mrmkmcibCRM.reducerDeal.supParameters.DealApprovedStatusList,
        isVisibleModalPhaseSwitchQuestion: state.user.mrmkmcibCRM.reducerDeal.isVisibleModalPhaseSwitchQuestion,
        isVisibleModalDealCloseResult: state.user.mrmkmcibCRM.reducerDeal.isVisibleModalDealCloseResult,
        currentDealPhase: state.user.mrmkmcibCRM.reducerDeal.currentDealPhase,
        inputDealCloseResult: state.user.mrmkmcibCRM.reducerDeal.inputDealCloseResult,
        refresh: state.user.mrmkmcibCRM.reducerDeal.refresh,
        refreshInProgress: state.user.mrmkmcibCRM.reducerDeal.refreshInProgress,
        refreshError: state.user.mrmkmcibCRM.reducerDeal.refreshError,
        currentDealFetching: state.user.mrmkmcibCRM.reducerDeal.currentDealFetching,
        currentDealError: state.user.mrmkmcibCRM.reducerDeal.currentDealError,
        currentDealCachedDate: state.user.mrmkmcibCRM.reducerDeal.currentDealCachedDate,
        decisionPopoverData: state.user.mrmkmcibCRM.reducerDeal.decisionPopoverData,
        decisionPopoverTarget: state.user.mrmkmcibCRM.reducerDeal.decisionPopoverTarget,
        isVisiblePopoverDecision: state.user.mrmkmcibCRM.reducerDeal.isVisiblePopoverDecision,
        navigationInProgress: state.user.mrmkmcibCRM.reducerDeal.navigationInProgress,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
        agentList: state.user.mrmkmcibCRM.reducerAgentList.agentList,
        agentListFetching: state.user.mrmkmcibCRM.reducerAgentList.agentListFetching,
        agentListError: state.user.mrmkmcibCRM.reducerAgentList.agentListFetchingError,
        isReadOnlyStages: state.user.mrmkmcibCRM.reducerDeal.isReadOnlyStages,
        currentStageTab: state.user.mrmkmcibCRM.reducerDeal.currentStageTab,
        selectedStage: state.user.mrmkmcibCRM.reducerDeal.selectedStage,
        isVisiblePopoverClientRoadMapHelp: state.user.mrmkmcibCRM.reducerDeal.isVisiblePopoverClientRoadMapHelp,
        isVisiblePopoverClientRoadMap: state.user.mrmkmcibCRM.reducerDeal.isVisiblePopoverClientRoadMap,
        dealAgentListFetching: state.user.mrmkmcibCRM.reducerDeal.dealAgentListFetching,
        dealAgentListError: state.user.mrmkmcibCRM.reducerDeal.dealAgentListError,
        dealAgentListCachedDate: state.user.mrmkmcibCRM.reducerDeal.dealAgentListCachedDate,
        dealAgentList: state.user.mrmkmcibCRM.reducerDeal.dealAgentList,
        dealCrmStages: state.user.mrmkmcibCRM.reducerDeal.dealCrmStages,
        dealCrmStagesFetching: state.user.mrmkmcibCRM.reducerDeal.dealCrmStagesFetching,
        dealCrmStagesError: state.user.mrmkmcibCRM.reducerDeal.dealCrmStagesError,
        navigationType: state.user.mrmkmcibCRM.reducerDeal.navigationType,
        dealAttachments: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachments,
        dealAttachmentsError: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachmentsError,
        dealAttachmentsFetching: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachmentsFetching,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToEmployee: (id) => {
            dispatch(thunkDeal.navigateToEmployee(id));
        },
        navigateToAgreementEmployee: (dealAgreement) => {
            dispatch(thunkDeal.navigateToAgreementEmployee(dealAgreement));
        },
        navigateToDealScreen: (dealId, dealMode, isEditDealEnable) => {
            dispatch(thunkDeal.navigateToDealScreen(dealId, dealMode, isEditDealEnable));
        },
        navigateToParentDealScreen: (deal, dealMode, isEditDealEnable) => {
            dispatch(thunkDeal.navigateToParentDealScreen(deal, dealMode, isEditDealEnable));
        },
        performRefresh: () => {
            dispatch(thunkDeal.performRefresh());
        },
        performRefreshForce: () => {
            dispatch(thunkDeal.performRefreshForce());
        },
        refresh_callGetDeal: () => {
            dispatch(thunkDeal.refresh_callGetDeal());
        },
        navigateToProductScreen: () => {
            dispatch(thunkDeal.navigateToProductScreen());
        },
        navigateToAgreementScreen: () => {
            dispatch(thunkDeal.navigateToAgreementScreen());
        },
        performExpandAgreementRow: (index) => {
            dispatch(thunkDeal.performExpandAgreementRow(index));
        },
        navigateToSolutionListScreen: () => {
            dispatch(thunkDeal.navigateToSolutionListScreen());
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkDeal.navigateToMemberListScreen());
        },
        performExtraInfoToggle: () => {
            dispatch(thunkDeal.performExtraInfoToggle());
        },
        navigateToAgentListScreen: () => {
            dispatch(thunkDeal.navigateToAgentListScreen());
        },
        navigateToCommentListScreen: () => {
            dispatch(thunkDeal.navigateToCommentListScreen());
        },
        navigateToPhaseScreen: () => {
            dispatch(thunkDeal.navigateToPhaseScreen());
        },
        navigateToNonLegalMembersScreen: () => {
            dispatch(thunkDeal.navigateToNonLegalMembersScreen());
        },
        navigateToNonLegalMemberCard: (id) => {
            dispatch(thunkDeal.navigateToNonLegalMemberCard(id));
        },
        performInputDealCloseResult: (value) => {
            dispatch(thunkDeal.performInputDealCloseResult(value));
        },
        performPhaseSwitch: (phase) => {
            dispatch(thunkDeal.performPhaseSwitch(phase));
        },
        performPhaseSelect: () => {
            dispatch(thunkDeal.performPhaseSelect());
        },
        performDealClose: () => {
            dispatch(thunkDeal.performDealClose());
        },
        performModalPhaseSwitchQuestionHide: () => {
            dispatch(thunkDeal.performModalPhaseSwitchQuestionHide());
        },
        performModalDealCloseResultHide: () => {
            dispatch(thunkDeal.performModalDealCloseResultHide());
        },
        navigateDealBack: (collapseScreen = true) => {
            dispatch(thunkDeal.navigateDealBack(collapseScreen));
        },
        performContainerReset: () => {
            dispatch(thunkDeal.performContainerReset());
        },
        performPopoverAgreementShow: (data, popoverTarget) => {
            dispatch(thunkDeal.performPopoverAgreementShow(data, popoverTarget));
        },
        performPopoverAgreementHide: () => {
            dispatch(thunkDeal.performPopoverAgreementHide());
        },
        performPopoverDecisionShow: (data, popoverTarget) => {
            dispatch(thunkDeal.performPopoverDecisionShow(data, popoverTarget));
        },
        performPopoverDecisionHide: () => {
            dispatch(thunkDeal.performPopoverDecisionHide());
        },
        performCustomerOpen: (customerId) => {
            dispatch(thunkAppCRM.performCustomerOpen(customerId));
        },
        navigateBack: () => {
            dispatch(thunkDeal.navigateBack());
        },
        navigateBackFromParent: () => {
            dispatch(thunkDeal.navigateBackFromParent());
        },
        navigateToDealEditor: (deal, mode, agentList) => {
            dispatch(thunkDealEditor.navigateToDealEditor(deal, mode, agentList));
        },
        navigateToDealAttachmentsScreen: () => {
            dispatch(thunkDeal.navigateToDealAttachmentsScreen());
        },
        performRefreshAttachmentsList: () => {
            dispatch(thunkDealAttachments.performRefreshAttachmentsList());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDeal);
//# sourceMappingURL=ContainerDeal.js.map