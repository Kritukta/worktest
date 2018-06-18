/*
 * Created by Burnaev M.U.
 */
import { defaultValues } from "../models/Models";
import { EnumsApp, navigationExecutor, performNavigateBack, HistoryMobileApp, loaderCloseTimeout, } from "mrmkmcib-app";
import { EnumsScheduler, performActivityListRefresh, performInputActivity, } from "mrmkmcib-scheduler";
import { EnumsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsDeal from '../actions/ActionsDeal';
import * as actionsDealStage from '../actions/ActionDealStages';
import * as thunkDeal from '../thunk/ThunkDeal';
import * as thunkEmployee from '../thunk/ThunkEmployee';
import * as thunkAgentList from '../thunk/ThunkAgentList';
import * as thunkMemberList from '../thunk/ThunkMemberList';
import * as thunkAppCrm from '../thunk/ThunkAppCRM';
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as ThunkAgent from '../thunk/ThunkAgent';
import * as thunkDealStages from '../thunk/ThunkDealStages';
import { SplitPanelActions } from 'ufs-mobile-platform';
import * as Cache from '../modules/Cache';
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 */
const navigateToEmployeeScreen = (id, mode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(actionsDeal.navigateToEmployee(id));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Employee, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    // Dispatch thunk "navigateToEmployeeScreen" synchronously.
    dispatch(thunkEmployee.navigateToEmployeeScreen(id, true, mode));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 */
export const navigateToEmployee = (id) => (dispatch, getState) => {
    dispatch(navigateToEmployeeScreen(id, Enums.EmployeeMode.Deal));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 */
export const navigateToAgreementEmployee = (dealAgreement) => (dispatch, getState) => {
    if (dealAgreement.author && dealAgreement.author.id) {
        dispatch(navigateToEmployeeScreen(dealAgreement.author.id, Enums.EmployeeMode.DealAgreement));
    }
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 */
export const navigateEmployeeBackToDealAgreement = () => (dispatch, getState) => {
    dispatch(actionsDeal.navigateToAgreementScreen());
    dispatch(navigateEmployeeBackToDeal());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 */
export const navigateEmployeeBackToDeal = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(actionsDeal.navigateBackToDeal());
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to open Deal.
 */
export const navigateToParentDealScreen = (deal, dealMode, isEditDealEnable, customerId) => (dispatch) => {
    if (!deal.parentDeal) {
        return;
    }
    dispatch(actionsDeal.performDealRoutePush(deal, dealMode, isEditDealEnable));
    dispatch(thunkDeal.navigateToDealScreen(deal.parentDeal.id, dealMode, isEditDealEnable, customerId));
};
/**
 * Thunk dispatched by "Deal" screen. Thunk used to set Deal id
 *
 * @param {Models.Deal} deal
 */
export const performSetDeal = (deal) => (dispatch) => {
    dispatch(actionsDeal.performSetDeal(deal));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to open Deal.
 */
export const navigateToDealScreen = (dealId, dealMode, isEditDealEnable, customerId) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDeal;
    if (reducerState.currentDeal && reducerState.currentDeal.id === dealId) {
        return;
    }
    dispatch(actionsDeal.navigationLoaderShow(true));
    if (dealMode === Enums.DealMode.ForeignActivityList && customerId) {
        dispatch(thunkCustomer.getCustomerDataById(customerId));
    }
    else if (dealMode !== Enums.DealMode.DealActivityList) {
        dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_Deal, util.getNavigationString(Enums.Navigation.AppCRM)));
    }
    setTimeout(() => {
        if (dealMode !== EnumsCrm.DealMode.NavigationBack) {
            const currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
            const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
            dispatch(performActivityListRefresh(EnumsScheduler.SchedulerMode.Deal, defaultValues.Employee, Object.assign({}, defaultValues.Deal, { id: dealId }), customer, defaultValues.Agent));
        }
        dispatch(actionsDeal.navigateToDealScreen(dealId, dealMode || Enums.DealMode.CommonBack, isEditDealEnable));
        // Dispatch thunk "performRefresh" synchronously.
        if (dealMode === EnumsCrm.DealMode.NavigationBack) {
            dispatch(actionsDeal.swapContext(EnumsApp.NavigationType.AppNotice));
            dispatch(thunkDeal.performRefresh(dealId, customerId));
        }
        else {
            dispatch(thunkDeal.performRefresh());
        }
        dispatch(actionsDeal.navigationLoaderShow(false));
    }, loaderCloseTimeout);
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
 */
export const performRefresh = (dealId, customerId) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    if (reducerState.refreshInProgress) {
        return;
    }
    dispatch(actionsDeal.performRefresh());
    if (!reducerState.refreshInProgress) {
        dispatch(actionsDeal.performRefreshExecute());
        // Dispatch thunk "refresh_callGetDeal" synchronously.
        dispatch(thunkDeal.refresh_callGetDeal());
        dispatch(thunkDeal.refresh_callGetDealAgentList());
        dispatch(thunkDeal.refresh_callGetDealTracking());
        if (dealId && customerId) {
            dispatch(thunkCustomer.customer_callGetCustomerById(customerId));
        }
    }
};
export const refresh_performRefreshActivity = (dealId) => (dispatch, getState) => {
    let state = getState();
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    dispatch(performActivityListRefresh(EnumsScheduler.SchedulerMode.Deal, defaultValues.Employee, Object.assign({}, defaultValues.Deal, { id: dealId }), customer, defaultValues.Agent));
};
/*
 * Thunk dispatched by "AppCRM" container. Remove cache and execute performRefresh
 */
export const performRefreshForce = () => (dispatch, getState) => {
    Cache.sessionResetTag({ tag: util.getDealRequestRefreshString(Enums.DealRequestRefresh.DealRequestRefreshEnabled) });
    dispatch(actionsDeal.performFlush());
    dispatch(performRefresh());
};
export const performRefreshSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(actionsDeal.performRefreshSuccess(data));
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Deal_PerformRefreshSuccess));
    dispatch(thunkMemberList.performMemberListRefresh(defaultValues.Activity, reducerState.currentDeal, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, defaultValues.Gsz, defaultValues.Agent, true, Enums.MemberListMode.Deal));
};
export const performRefreshFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(actionsDeal.performRefreshFailure(error));
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, `Ошибка при загрузке данных о сделке: ${error.message}`));
};
/*
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 */
export const refresh_callGetDealAgentList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    if (reducerState.dealAgentListFetching) {
        return;
    }
    let operationId = reducerState.currentDealId;
    dispatch(actionsDeal.refresh_callGetDealAgentList());
    if (!reducerState.dealAgentListFetching) {
        dispatch(actionsDeal.refresh_callGetDealAgentListRequest());
        util.call(util.urlDeal.refresh_callGetDealAgentList(state, reducerState, [
            { tag: Enums.CachePolicy.Default },
            { tag: util.getDealRequestRefreshString(Enums.DealRequestRefresh.DealRequestRefreshEnabled) }
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            if (reducerState.currentDealId != operationId)
                return;
            dispatch(actionsDeal.refresh_callGetDealAgentListSuccess(response));
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            dispatch(thunkAgentList.performOpenAgentListScreen(reducerState.dealAgentList, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, reducerState.currentDeal, Enums.AgentListContextMode.Deal, Enums.AgentListAccessLevel.Read) //  Write is temporally disabled for 2018-1 release
            /*
              reducerState.currentDeal.isEditable && reducerState.isEditDealEnable
              ?   Enums.AgentListAccessLevel.Write
              :   Enums.AgentListAccessLevel.Read)*/
            );
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            if (reducerState.currentDealId != operationId)
                return;
            dispatch(actionsDeal.refresh_callGetDealAgentListFailure(error));
        }, Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_AGENT_LIST_TO_AGENT_LIST, 'GET');
    }
};
/*
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 */
export const refresh_callGetDealTracking = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    if (reducerState.dealAgentListFetching) {
        return;
    }
    let operationId = reducerState.currentDealId;
    dispatch(actionsDeal.refresh_callGetDealTracking());
    if (!reducerState.dealAgentListFetching) {
        dispatch(actionsDeal.refresh_callGetDealTrackingRequest());
        util.call(util.urlDeal.refresh_callGetDealTracking(state, reducerState, [
            { tag: Enums.CachePolicy.Default },
            { tag: util.getDealRequestRefreshString(Enums.DealRequestRefresh.DealRequestRefreshEnabled) }
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            if (reducerState.currentDealId != operationId)
                return;
            dispatch(actionsDeal.refresh_callGetDealTrackingSuccess(response));
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            if (reducerState.currentDealId != operationId)
                return;
            dispatch(actionsDeal.refresh_callGetDealTrackingFailure(error));
        }, Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TRACKING_TO_TRACKING, 'GET');
    }
};
export const setSupParameters = () => (dispatch, getState) => {
    let state = getState();
    let params = state.user.mrmkmcibCRM.reducerDealList.supParameters;
    if (params && params.DealApprovedStatusList) {
        dispatch(actionsDeal.setSupParameterDeal(params));
    }
};
/*
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 */
export const refresh_callGetDeal = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    if (reducerState.currentDealFetching) {
        return;
    }
    let operationId = reducerState.currentDealId;
    dispatch(actionsDeal.refresh_callGetDeal());
    if (!reducerState.currentDealFetching) {
        dispatch(actionsDeal.refresh_callGetDealRequest());
        util.call(util.urlDeal.refresh_callGetDeal(state, reducerState, [
            { tag: Enums.CachePolicy.Default },
            { tag: util.getRefreshDealAfterMemberListUpdateTagString(Enums.RefreshDealAfterMemberListUpdateTag.RefreshDealAfterMemberListUpdateEnabled) },
            { tag: util.getDealRequestRefreshString(Enums.DealRequestRefresh.DealRequestRefreshEnabled) }
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            if (reducerState.currentDealId != operationId)
                return;
            dispatch(thunkDeal.setSupParameters());
            dispatch(actionsDeal.refresh_callGetDealSuccess(response));
            // Dispatch thunk "performRefreshSuccess" on fetch succeeded.
            dispatch(thunkDeal.performRefreshSuccess(true));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDeal;
            if (reducerState.currentDealId !== operationId)
                return;
            dispatch(actionsDeal.refresh_callGetDealFailure(error));
            // Dispatch thunk "performRefreshFailure" on fetch failure.
            dispatch(thunkDeal.performRefreshFailure(error));
        }, Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod, state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary, state.user.mrmkmcibCRM.reducerAppCRM.currentUser, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged), 'GET');
    }
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 */
export const navigateToProductScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Products, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToProductScreen());
};
export const performExpandAgreementRow = (index) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(actionsDeal.performExpandAgreementRow(index));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 */
export const navigateToAgreementScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Agreement, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToAgreementScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 */
export const navigateToSolutionListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Solution, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToSolutionListScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 */
export const navigateToMemberListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    // Dispatch thunk "performMemberListRefresh" synchronously.
    dispatch(thunkMemberList.setEditingPermissionMemberList());
    dispatch(thunkMemberList.performMemberListRefresh(defaultValues.Activity, reducerState.currentDeal, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, defaultValues.Gsz, defaultValues.Agent, true, Enums.MemberListMode.Deal));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Members, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToMemberListScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to toggle extra info expand.
 */
export const performExtraInfoToggle = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(actionsDeal.performExtraInfoToggle());
};
export const performCloseDealAgentListScreen = () => (dispatch, getState) => {
    dispatch(HistoryMobileApp.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 */
export const navigateToAgentListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(HistoryMobileApp.pushContent({
        type: EnumsApp.HistoryMobileAppType.Deal,
        splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
        index: Enums.NavigationContentAppCrm.AppCRM_AgentList,
        data: Object.assign({}, defaultValues.HistoryMobileAppData, { deal: reducerState.currentDeal })
    }));
    /*
     * Сделка всегда привязана к клиенту и должна рассматриваться в контексте клиента
     */
    dispatch(thunkAgentList.performOpenAgentListScreen(reducerState.dealAgentList, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, reducerState.currentDeal, Enums.AgentListContextMode.Deal, Enums.AgentListAccessLevel.Read // Write is temporally disabled for 2018-1 release
    // reducerState.currentDeal.isEditable && reducerState.isEditDealEnable ? Enums.AgentListAccessLevel.Write : Enums.AgentListAccessLevel.Read
    ));
    dispatch(actionsDeal.navigateToAgentListScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to show deal comment list screen.
 */
export const navigateToCommentListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Comments, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToCommentListScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
 */
export const navigateToPhaseScreen = () => (dispatch, getState) => {
    let state = getState();
    dispatch(actionsDeal.navigationLoaderShow(true));
    dispatch(actionsDeal.performExpandScreen(true));
    dispatch(actionsDealStage.swapContext(state.user.mrmkmcibCRM.reducerDeal.currentDeal, state.user.mrmkmcibCRM.reducerDeal.dealCrmStages, state.user.mrmkmcibCRM.reducerDeal.isReadOnlyStages, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged));
    dispatch(thunkDealStages.navigateToDealStages());
    dispatch(actionsDeal.navigateToPhaseScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
 */
export const navigateToNonLegalMembersScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_DealNonLegalMemberList, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToNonLegalMembersScreen());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
 */
export const navigateToNonLegalMemberCard = (id) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    dispatch(ThunkAgent.performOpenAgentScreen(Object.assign({}, defaultValues.Agent, { id: id }), Object.assign({}, defaultValues.CustomerManaged), Enums.AgentMode.Watch, Enums.AgentContextMode.Deal_NonLegalMember));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_DealNonLegalMemberCard, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateToNonLegalMemberCard(id));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk dispatched on user input DealCloseResult field.
 */
export const performInputDealCloseResult = (value) => (dispatch, getState) => {
    dispatch(actionsDeal.performInputDealCloseResult(value));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
 */
export const performPhaseSwitch = (phase) => (dispatch, getState) => {
    dispatch(actionsDeal.performPhaseSwitch(phase));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
 */
export const performPhaseSelect = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.performPhaseSelect());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to close deal.
 */
export const performDealClose = () => (dispatch, getState) => {
    dispatch(actionsDeal.performDealClose());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to hide modal
 */
export const performModalPhaseSwitchQuestionHide = () => (dispatch, getState) => {
    dispatch(actionsDeal.performModalPhaseSwitchQuestionHide());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk used to hide modal
 */
export const performModalDealCloseResultHide = () => (dispatch, getState) => {
    dispatch(actionsDeal.performModalDealCloseResultHide());
};
export const navigateBackFromParent = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDeal;
    const prevDeal = reducerState.dealRoute[reducerState.dealRoute.length - 1];
    dispatch(actionsDeal.performDealRoutePop());
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    dispatch(performActivityListRefresh(EnumsScheduler.SchedulerMode.Deal, defaultValues.Employee, Object.assign({}, defaultValues.Deal, { id: prevDeal.deal.id }), customer, defaultValues.Agent));
    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
    dispatch(actionsDeal.navigationLoaderShow(true));
    setTimeout(() => {
        dispatch(actionsDeal.replaceDealData(prevDeal));
        dispatch(actionsDeal.navigationLoaderShow(false));
    }, loaderCloseTimeout);
};
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDeal;
    const currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    switch (reducerState.currentMode) {
        case (Enums.DealMode.NavigationBack): {
            dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
            dispatch(performNavigateBack());
            break;
        }
        case (Enums.DealMode.ForeignActivityList): {
            dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
            break;
        }
        case (Enums.DealMode.DealActivityList): {
            dispatch(HistoryMobileApp.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)))
                .then((content) => {
                if (content && content.payload && content.payload.activity) {
                    dispatch(performInputActivity(content.payload.activity.activityListContextMode, content.payload.activity.data, content.payload.activity.activityMode, content.payload.activity.activityContextMode));
                }
            });
            break;
        }
        case (Enums.DealMode.CommonBack):
        default: {
            dispatch(performActivityListRefresh(EnumsScheduler.SchedulerMode.Customer, Object.assign({}, defaultValues.Employee), Object.assign({}, defaultValues.Deal), customer, Object.assign({}, defaultValues.Agent)));
            dispatch(thunkAppCrm.navigateBack());
        }
    }
    dispatch(actionsDeal.navigateBack());
};
/*
 * Thunk dispatched by "Deal" screen.
 */
export const navigateDealBack = (collapseScreen = true) => (dispatch, getState) => {
    // reducerState.isDealExpandedMode
    if (collapseScreen) {
        dispatch(actionsDeal.performExpandScreen(false));
        dispatch(actionsDeal.navigationLoaderShow(false));
    }
    else {
        dispatch(actionsDeal.performExpandScreen(true));
    }
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.navigateDealBack());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk dispatched to show agreement popover.
 */
export const performPopoverAgreementShow = (data, popoverTarget) => (dispatch, getState) => {
    dispatch(actionsDeal.performPopoverAgreementShow(data, popoverTarget));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk dispatched to hide agreement popover.
 */
export const performPopoverAgreementHide = () => (dispatch, getState) => {
    dispatch(actionsDeal.performPopoverAgreementHide());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk dispatched to show agreement popover.
 */
export const performPopoverDecisionShow = (data, popoverTarget) => (dispatch, getState) => {
    dispatch(actionsDeal.performPopoverDecisionShow(data, popoverTarget));
};
/*
 * Thunk dispatched by "Deal" screen. Thunk dispatched to hide agreement popover.
 */
export const performPopoverDecisionHide = () => (dispatch, getState) => {
    dispatch(actionsDeal.performPopoverDecisionHide());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    dispatch(actionsDeal.performContainerReset());
};
export const performRefreshDealAfterMemberListUpdate = () => (dispatch, getState) => {
    Cache.sessionResetTagList([{ tag: util.getRefreshDealAfterMemberListUpdateTagString(Enums.RefreshDealAfterMemberListUpdateTag.RefreshDealAfterMemberListUpdateEnabled) }]);
    dispatch(thunkDeal.performRefresh());
};
export const performEditDeal = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_DealEditor, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)));
    dispatch(actionsDeal.performEditDeal());
};
export const navigateToDealAttachmentsScreen = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments, util.getNavigationString(Enums.Navigation.AppCRM)));
};
//# sourceMappingURL=ThunkDeal.js.map