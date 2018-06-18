/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkDealAttachments from '../thunk/ThunkDealAttachments'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import {defaultValues} from "../models/Models"
import {EnumsApp, Enums as EnumsAppAll} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsDealAttachments from '../models/ModelsDealAttachments'
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewDeal from '../components/ViewDeal'
import * as ModelState from "../models/Models"


/*
 * Container "Deal". Deal card screen.
 */
class ContainerDeal extends React.Component<IDealProps, any> {

    constructor(props: IDealProps, context: any) {
        super(props, context);
    }

    componentDidMount() {

    }

    render() {
        return (
            <ViewDeal testID={'test-id-container-Deal'}

                      navigateToEmployee={this.props.navigateToEmployee}
                      navigateToAgreementEmployee={this.props.navigateToAgreementEmployee}
                      navigateToDealScreen={this.props.navigateToDealScreen}
                      navigateToParentDealScreen={this.props.navigateToParentDealScreen}
                      performRefresh={this.props.performRefresh}
                      refresh_callGetDeal={this.props.refresh_callGetDeal}
                      navigateToProductScreen={this.props.navigateToProductScreen}
                      navigateToAgreementScreen={this.props.navigateToAgreementScreen}
                      navigateToSolutionListScreen={this.props.navigateToSolutionListScreen}
                      navigateToMemberListScreen={this.props.navigateToMemberListScreen}
                      performExtraInfoToggle={this.props.performExtraInfoToggle}
                      navigateToAgentListScreen={this.props.navigateToAgentListScreen}
                      navigateToCommentListScreen={this.props.navigateToCommentListScreen}
                      navigateToPhaseScreen={this.props.navigateToPhaseScreen}
                      navigateToNonLegalMembersScreen={this.props.navigateToNonLegalMembersScreen}
                      navigateToNonLegalMemberCard={this.props.navigateToNonLegalMemberCard}
                      navigateToDealEditor={this.props.navigateToDealEditor}
                      performInputDealCloseResult={this.props.performInputDealCloseResult}
                      performPhaseSwitch={this.props.performPhaseSwitch}
                      performPhaseSelect={this.props.performPhaseSelect}
                      performDealClose={this.props.performDealClose}
                      performModalPhaseSwitchQuestionHide={this.props.performModalPhaseSwitchQuestionHide}
                      performModalDealCloseResultHide={this.props.performModalDealCloseResultHide}
                      navigateDealBack={this.props.navigateDealBack}
                      performContainerReset={this.props.performContainerReset}
                      performPopoverAgreementHide={this.props.performPopoverAgreementHide}
                      performPopoverAgreementShow={this.props.performPopoverAgreementShow}
                      performCustomerOpen={this.props.performCustomerOpen}
                      performPopoverDecisionHide={this.props.performPopoverDecisionHide}
                      performPopoverDecisionShow={this.props.performPopoverDecisionShow}
                      navigateBack={this.props.navigateBack}
                      navigateBackFromParent={this.props.navigateBackFromParent}

                      isDealExpandedMode={this.props.isDealExpandedMode}
                      isEditDealEnable={this.props.isEditDealEnable}
                      agreementPopoverData={this.props.agreementPopoverData}
                      agreementPopoverTarget={this.props.agreementPopoverTarget}
                      decisionPopoverData={this.props.decisionPopoverData}
                      decisionPopoverTarget={this.props.decisionPopoverTarget}
                      isVisiblePopoverDecision={this.props.isVisiblePopoverDecision}

                      expandedAgreementRowIndex={this.props.expandedAgreementRowIndex}
                      performExpandAgreementRow={this.props.performExpandAgreementRow}
                      approvedStatuses={this.props.approvedStatuses}
                      currentDeal={this.props.currentDeal}
                      currentDealId={this.props.currentDealId}
                      dealRoute={this.props.dealRoute}
                      currentMode={this.props.currentMode}
                      isExtraInfoExpanded={this.props.isExtraInfoExpanded}
                      isVisibleModalPhaseSwitchQuestion={this.props.isVisibleModalPhaseSwitchQuestion}
                      isVisibleModalDealCloseResult={this.props.isVisibleModalDealCloseResult}
                      currentDealPhase={this.props.currentDealPhase}
                      inputDealCloseResult={this.props.inputDealCloseResult}
                      refresh={this.props.refresh}
                      refreshInProgress={this.props.refreshInProgress}
                      navigationInProgress={this.props.navigationInProgress}
                      refreshError={this.props.refreshError}
                      currentDealFetching={this.props.currentDealFetching}
                      currentDealError={this.props.currentDealError}
                      currentDealCachedDate={this.props.currentDealCachedDate}
                      performRefreshForce={this.props.performRefreshForce}

                      isReadOnlyStages={this.props.isReadOnlyStages}
                      navigateToStageDetails={this.props.navigateToStageDetails}

                      currentStageTab={this.props.currentStageTab}
                      selectedStage={this.props.selectedStage}
                      performChangeStageTab={this.props.performChangeStageTab}

                      performPopoverClientRoadMapHelpShow={this.props.performPopoverClientRoadMapHelpShow}
                      performPopoverClientRoadMapHelpHide={this.props.performPopoverClientRoadMapHelpHide}
                      isVisiblePopoverClientRoadMapHelp={this.props.isVisiblePopoverClientRoadMapHelp}
                      performClientRoadMapActivate={this.props.performClientRoadMapActivate}
                      performClientRoadMapNext={this.props.performClientRoadMapNext}

                      performPopoverClientRoadMapShow={this.props.performPopoverClientRoadMapShow}
                      performPopoverClientRoadMapHide={this.props.performPopoverClientRoadMapHide}
                      isVisiblePopoverClientRoadMap={this.props.isVisiblePopoverClientRoadMap}

                      dealAgentListFetching={this.props.dealAgentListFetching}
                      dealAgentListError={this.props.dealAgentListError}
                      dealAgentListCachedDate={this.props.dealAgentListCachedDate}
                      dealAgentList={this.props.dealAgentList}

                      dealCrmStages={this.props.dealCrmStages}
                      dealCrmStagesFetching={this.props.dealCrmStagesFetching}
                      dealCrmStagesError={this.props.dealCrmStagesError}

                      classifierDictionary={this.props.classifierDictionary}
                      currentCustomerManaged={this.props.currentCustomerManaged}
                      currentUser={this.props.currentUser}
                      agentList={this.props.agentList}
                      agentListFetching={this.props.agentListFetching}
                      agentListError={this.props.agentListError}
                      navigationType={this.props.navigationType}
                      navigateToDealAttachmentsScreen={this.props.navigateToDealAttachmentsScreen}

                      dealAttachments={this.props.dealAttachments}
                      dealAttachmentsError={this.props.dealAttachmentsError}
                      performRefreshAttachmentsList={this.props.performRefreshAttachmentsList}
                      dealAttachmentsFetching={this.props.dealAttachmentsFetching}
            >
            </ViewDeal>
        )
    }
}

export interface IStateProps {

    isDealExpandedMode: boolean,
    isEditDealEnable: boolean,
    currentDeal: Models.Deal,
    currentDealId: string,
    dealRoute: Array<Models.DealRoute>,
    currentMode: Enums.DealMode,
    isExtraInfoExpanded: boolean,
    agreementPopoverData: Models.DealAgreement | null,
    agreementPopoverTarget: string | null,
    expandedAgreementRowIndex: number,
    approvedStatuses: string,
    decisionPopoverData: Models.DealDecisionPopoverData | null,
    decisionPopoverTarget: string | null,
    isVisiblePopoverDecision: boolean,
    isVisibleModalPhaseSwitchQuestion: boolean,
    isVisibleModalDealCloseResult: boolean,
    currentDealPhase: ModelsApp.Classifier,
    inputDealCloseResult: ModelsApp.Classifier,
    refresh: boolean,
    refreshInProgress: boolean,
    navigationInProgress: boolean,
    refreshError: Error | null,
    currentDealFetching: boolean,
    currentDealError: Error | null,
    currentDealCachedDate: Date | null,

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentUser: ModelsApp.Employee,
    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    dealCrmStages: Models.CrmStagesList,
    dealCrmStagesFetching: boolean,
    dealCrmStagesError: Error | null,

    isReadOnlyStages: boolean
    currentStageTab: number
    selectedStage: Models.DealStage | null
    isVisiblePopoverClientRoadMapHelp: boolean
    isVisiblePopoverClientRoadMap: boolean

    dealAgentListFetching: boolean,
    dealAgentListError: Error | null,
    dealAgentListCachedDate: Date | null,
    dealAgentList: Models.AgentList,
    navigationType: EnumsAppAll.NavigationType | null,

    dealAttachments: Models.IDealAttachmentList,
    dealAttachmentsError: Models.Error | null,
    dealAttachmentsFetching: boolean,
}

export interface IDispatchProps {

    navigateToEmployee: ModelsDeal.NAVIGATE_TO_EMPLOYEE,
    navigateToAgreementEmployee: ModelsDeal.NAVIGATE_TO_AGREEMENT_EMPLOYEE,
    navigateToDealScreen: ModelsDeal.NAVIGATE_TO_DEAL_SCREEN,
    navigateToParentDealScreen: ModelsDeal.NAVIGATE_TO_DEAL_PARENT_SCREEN,
    performRefresh: ModelsDeal.PERFORM_REFRESH,
    performRefreshForce: ModelsDeal.PERFORM_REFRESH,
    performRefreshAttachmentsList: ModelsDealAttachments.PERFORM_REFRESH_ATTACHMENTS_LIST,
    refresh_callGetDeal: ModelsDeal.REFRESH_CALL_GET_DEAL,
    navigateToProductScreen: ModelsDeal.NAVIGATE_TO_PRODUCT_SCREEN,
    navigateToAgreementScreen: ModelsDeal.NAVIGATE_TO_AGREEMENT_SCREEN,
    navigateToSolutionListScreen: ModelsDeal.NAVIGATE_TO_SOLUTION_LIST_SCREEN,
    navigateToMemberListScreen: ModelsDeal.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performExtraInfoToggle: ModelsDeal.PERFORM_EXTRA_INFO_TOGGLE,
    navigateToAgentListScreen: ModelsDeal.NAVIGATE_TO_AGENT_LIST_SCREEN,
    navigateToCommentListScreen: ModelsDeal.NAVIGATE_TO_COMMENT_LIST_SCREEN,
    navigateToPhaseScreen: ModelsDeal.NAVIGATE_TO_PHASE_SCREEN,
    navigateToNonLegalMembersScreen: ModelsDeal.NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN,
    navigateToNonLegalMemberCard: ModelsDeal.NAVIGATE_TO_NON_LEGAL_MEMBER_CARD,
    performInputDealCloseResult: ModelsDeal.PERFORM_INPUT_DEAL_CLOSE_RESULT,
    performPhaseSwitch: ModelsDeal.PERFORM_PHASE_SWITCH,
    performPhaseSelect: ModelsDeal.PERFORM_PHASE_SELECT,
    performDealClose: ModelsDeal.PERFORM_DEAL_CLOSE,
    performModalPhaseSwitchQuestionHide: ModelsDeal.PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE,
    performModalDealCloseResultHide: ModelsDeal.PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE,
    navigateDealBack: ModelsDeal.NAVIGATE_DEAL_BACK,
    performContainerReset: ModelsDeal.PERFORM_CONTAINER_RESET,
    performPopoverAgreementShow:ModelsDeal.PERFORM_POPOVER_AGREEMENT_SHOW,
    performPopoverAgreementHide:ModelsDeal.PERFORM_POPOVER_AGREEMENT_HIDE,
    performExpandAgreementRow: ModelsDeal.EXPAND_AGREEMENT_ROW,
    performPopoverDecisionShow: ModelsDeal.PERFORM_POPOVER_DECISION_SHOW,
    performPopoverDecisionHide: ModelsDeal.PERFORM_POPOVER_DECISION_HIDE,
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performChangeStageTab: ModelsAppCRM.PERFORM_CHANGE_STAGE_TAB,
    performPopoverClientRoadMapHelpShow: ModelsAppCRM.PERFORM_POPOVER_CLIENT_ROAD_MAP_HELP_SHOW,
    performPopoverClientRoadMapHelpHide: ModelsAppCRM.PERFORM_POPOVER_CLIENT_ROAD_MAP_HELP_HIDE,
    performClientRoadMapActivate: ModelsAppCRM.PERFORM_POPOVER_CLIENT_ROAD_MAP_ACTIVATE,
    performPopoverClientRoadMapShow: ModelsAppCRM.PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW,
    performPopoverClientRoadMapHide: ModelsAppCRM.PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE,
    navigateToStageDetails: ModelsAppCRM.NAVIGATE_TO_STAGE_DETAILS,
    performClientRoadMapNext: ModelsAppCRM.PERFORM_POPOVER_CLIENT_ROAD_MAP_ACTIVATE,
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    navigateBackFromParent: ModelsDeal.NAVIGATE_BACK,
    navigateToDealAttachmentsScreen: ModelsDeal.NAVIGATE_BACK,
}

export type IDealProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState):IStateProps {
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
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateToEmployee: ( id: string ) => {
            dispatch ( thunkDeal.navigateToEmployee ( id ) )
        },
        navigateToAgreementEmployee: ( dealAgreement:Models.DealAgreement ) => {
            dispatch ( thunkDeal.navigateToAgreementEmployee ( dealAgreement ) )
        },
        navigateToDealScreen: ( dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean ) => {
            dispatch ( thunkDeal.navigateToDealScreen ( dealId, dealMode, isEditDealEnable ) )
        },
        navigateToParentDealScreen: ( deal: Models.Deal, dealMode: Enums.DealMode, isEditDealEnable: boolean ) => {
            dispatch ( thunkDeal.navigateToParentDealScreen ( deal, dealMode, isEditDealEnable ) )
        },
        performRefresh: () => {
            dispatch ( thunkDeal.performRefresh () )
        },
        performRefreshForce: () => {
            dispatch ( thunkDeal.performRefreshForce () )
        },

        refresh_callGetDeal: () => {
            dispatch ( thunkDeal.refresh_callGetDeal () )
        },
        navigateToProductScreen: () => {
            dispatch ( thunkDeal.navigateToProductScreen () )
        },
        navigateToAgreementScreen: () => {
            dispatch ( thunkDeal.navigateToAgreementScreen () )
        },
        performExpandAgreementRow: ( index: number ) => {
            dispatch ( thunkDeal.performExpandAgreementRow ( index ))
        },
        navigateToSolutionListScreen: () => {
            dispatch(thunkDeal.navigateToSolutionListScreen())
        },
        navigateToMemberListScreen: () => {
            dispatch(thunkDeal.navigateToMemberListScreen())
        },
        performExtraInfoToggle: () => {
            dispatch(thunkDeal.performExtraInfoToggle())
        },
        navigateToAgentListScreen: () => {
            dispatch(thunkDeal.navigateToAgentListScreen())
        },
        navigateToCommentListScreen: () => {
            dispatch(thunkDeal.navigateToCommentListScreen())
        },
        navigateToPhaseScreen: () => {
            dispatch(thunkDeal.navigateToPhaseScreen())
        },
        navigateToNonLegalMembersScreen: () => {
            dispatch(thunkDeal.navigateToNonLegalMembersScreen())
        },
        navigateToNonLegalMemberCard: (id:string) => {
            dispatch(thunkDeal.navigateToNonLegalMemberCard(id))
        },
        performInputDealCloseResult: (value: ModelsApp.Classifier) => {
            dispatch(thunkDeal.performInputDealCloseResult(value))
        },
        performPhaseSwitch: (phase: ModelsApp.Classifier,) => {
            dispatch(thunkDeal.performPhaseSwitch(phase,))
        },
        performPhaseSelect: () => {
            dispatch(thunkDeal.performPhaseSelect())
        },
        performDealClose: () => {
            dispatch(thunkDeal.performDealClose())
        },
        performModalPhaseSwitchQuestionHide: () => {
            dispatch(thunkDeal.performModalPhaseSwitchQuestionHide())
        },
        performModalDealCloseResultHide: () => {
            dispatch(thunkDeal.performModalDealCloseResultHide())
        },
        navigateDealBack: (collapseScreen: boolean = true) => {
            dispatch(thunkDeal.navigateDealBack(collapseScreen))
        },
        performContainerReset: () => {
            dispatch(thunkDeal.performContainerReset())
        },
        performPopoverAgreementShow: (data: Models.DealAgreement, popoverTarget: string) => {
            dispatch(thunkDeal.performPopoverAgreementShow(data, popoverTarget))
        },
        performPopoverAgreementHide: () => {
            dispatch(thunkDeal.performPopoverAgreementHide())
        },
        performPopoverDecisionShow: (data: Models.DealDecisionPopoverData, popoverTarget: string) => {
            dispatch(thunkDeal.performPopoverDecisionShow(data, popoverTarget))
        },
        performPopoverDecisionHide: () => {
            dispatch(thunkDeal.performPopoverDecisionHide())
        },
        performCustomerOpen: (customerId: string) => {
            dispatch(thunkAppCRM.performCustomerOpen(customerId))
        },
        navigateBack: () => {
            dispatch(thunkDeal.navigateBack())
        },
        navigateBackFromParent: () => {
            dispatch(thunkDeal.navigateBackFromParent())
        },
        navigateToDealEditor: (deal: Models.Deal, mode: Enums.DealEditorMode, agentList: Models.AgentList | null) => {
            dispatch(thunkDealEditor.navigateToDealEditor(deal,mode,agentList))
        },
        navigateToDealAttachmentsScreen: () => {
            dispatch(thunkDeal.navigateToDealAttachmentsScreen())
        },

        performRefreshAttachmentsList: () => {
            dispatch(thunkDealAttachments.performRefreshAttachmentsList())
        },
    }
}


export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDeal)
