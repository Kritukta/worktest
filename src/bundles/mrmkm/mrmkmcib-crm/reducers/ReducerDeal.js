/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsDeal from '../actions/ActionsDeal';
import { defaultValues } from "../models/Models";
import * as ModelsDeal from "../models/ModelsDeal";
import * as util from '../common/Util';
const reducerDeal = handleActions({
    // Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
    [actionsDeal.NAVIGATE_TO_EMPLOYEE]: (state, action) => {
        return Object.assign({}, state, { isDealExpandedMode: false });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to toggle DealExpandedMode.
    [actionsDeal.PERFORM_DEAL_EXPANDED_MODE_TOGGLE]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsDeal.NAVIGATION_LOADER_SHOW]: (state, action) => {
        return Object.assign({}, state, { navigationInProgress: action.payload.isVisible });
    },
    [actionsDeal.REPLACE_DEAL_DATA]: (state, action) => {
        return Object.assign({}, ModelsDeal.initialState.state, { dealRoute: state.dealRoute, currentDealId: action.payload.dealRoute.deal.id, isEditDealEnable: action.payload.dealRoute.isEditDealEnable, isDealExpandedMode: false, currentDeal: action.payload.dealRoute.deal, currentMode: action.payload.dealRoute.dealMode });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to open Deal.
    [actionsDeal.NAVIGATE_TO_DEAL_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsDeal.initialState.state, { dealRoute: state.dealRoute, currentDealId: action.payload.dealId, isEditDealEnable: action.payload.isEditDealEnable, isDealExpandedMode: false, isReadOnlyStages: true, currentDeal: defaultValues.Deal, currentMode: action.payload.dealMode });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to set Deal id
    [actionsDeal.PERFORM_SET_DEAL]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, defaultValues.Deal, action.payload.deal), currentDealId: action.payload.deal.id });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: true, refreshError: null });
    },
    // Action dispatched on success in thunk "performRefresh". Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { refresh: action.payload.data, refreshInProgress: false, refreshError: null });
    },
    [actionsDeal.PERFORM_DEAL_ROUTE_POP]: (state, action) => {
        const stack = [...state.dealRoute];
        stack.pop();
        return Object.assign({}, state, { currentDeal: stack.length === 0 ? defaultValues.Deal : state.currentDeal, dealRoute: stack });
    },
    [actionsDeal.PERFORM_DEAL_ROUTE_PUSH]: (state, action) => {
        return Object.assign({}, state, { dealRoute: [...state.dealRoute, {
                    deal: action.payload.deal,
                    dealMode: action.payload.dealMode,
                    isEditDealEnable: action.payload.isEditDealEnable
                }] });
    },
    [actionsDeal.SET_SUP_PARAMETER_DEAL]: (state, action) => {
        return Object.assign({}, state, { supParameters: action.payload.params });
    },
    [actionsDeal.PERFORM_EXPAND_AGREEMENT_ROW]: (state, action) => {
        return Object.assign({}, state, { expandedAgreementRowIndex: action.payload.index });
    },
    // Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: false, refreshError: action.payload.error });
    },
    // Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Fetch agent list with current deal Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "refresh_callGetDeal" started. Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_REQUEST]: (state, action) => {
        return Object.assign({}, state, { currentDealFetching: true, currentDealError: null });
    },
    // Action dispatched on network thunk chain "refresh_callGetDeal" started. Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { dealAgentListFetching: true, dealAgentListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentDeal: action.payload.response.data, currentDealCachedDate: action.payload.response.cachedDate, currentDealFetching: false, currentDealError: null });
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealAgentList: action.payload.response.data, dealAgentListCachedDate: action.payload.response.cachedDate, dealAgentListFetching: false, dealAgentListError: null });
    },
    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_REQUEST]: (state, action) => {
        return Object.assign({}, state, { dealCrmStages: defaultValues.EmptyList, dealCrmStagesFetching: true, dealCrmStagesError: null });
    },
    [actionsDeal.PERFORM_REFRESH_STAGES_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, state.currentDeal, { stages: action.payload.stageList }) });
    },
    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealCrmStages: action.payload.response.data, dealCrmStagesFetching: false, dealCrmStagesError: null });
    },
    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealCrmStagesFetching: false, dealCrmStagesError: action.payload.error });
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_FAILURE]: (state, action) => {
        return Object.assign({}, state, { currentDealFetching: false, currentDealError: action.payload.error });
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetDealAgentList". Thunk dispatched by "Deal" screen. Fetch agent list with current deal Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealAgentList: { data: [] }, dealAgentListFetching: false, dealAgentListError: action.payload.error });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_PRODUCT_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_AGREEMENT_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isDealExpandedMode: true });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.PERFORM_SET_EXPANDED_CONTENT_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isDealExpandedMode: action.payload.isExpanded });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_SOLUTION_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to toggle extra info expand.
    [actionsDeal.PERFORM_EXTRA_INFO_TOGGLE]: (state, action) => {
        return Object.assign({}, state, { isExtraInfoExpanded: !state.isExtraInfoExpanded });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_AGENT_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Thunk used to show deal comment list screen.
    [actionsDeal.NAVIGATE_TO_COMMENT_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
    [actionsDeal.NAVIGATE_TO_PHASE_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isDealExpandedMode: true });
    },
    // Thunk dispatched by "Deal" screen. Thunk dispatched on user input DealCloseResult field.
    [actionsDeal.PERFORM_INPUT_DEAL_CLOSE_RESULT]: (state, action) => {
        return Object.assign({}, state, { inputDealCloseResult: action.payload.value });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
    [actionsDeal.PERFORM_PHASE_SWITCH]: (state, action) => {
        return Object.assign({}, state, { currentDealPhase: action.payload.phase, isVisibleModalPhaseSwitchQuestion: !util.isDealPhaseLast(action.payload.phase), isVisibleModalDealCloseResult: util.isDealPhaseLast(action.payload.phase) });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
    [actionsDeal.PERFORM_PHASE_SELECT]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalPhaseSwitchQuestion: false });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to close deal.
    [actionsDeal.PERFORM_DEAL_CLOSE]: (state) => {
        return Object.assign({}, state, { currentDeal: defaultValues.Deal, currentDealId: '' });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to hide modal
    [actionsDeal.PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalPhaseSwitchQuestion: false });
    },
    // Thunk dispatched by "Deal" screen. Thunk used to hide modal
    [actionsDeal.PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalDealCloseResult: false });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_AGREEMENT_SHOW]: (state, action) => {
        return Object.assign({}, state, { agreementPopoverData: action.payload.data, agreementPopoverTarget: action.payload.popoverTarget });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_AGREEMENT_HIDE]: (state, action) => {
        return Object.assign({}, state, { agreementPopoverData: null, agreementPopoverTarget: null });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_DECISION_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverDecision: true, decisionPopoverData: action.payload.data, decisionPopoverTarget: action.payload.popoverTarget });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_DECISION_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverDecision: false });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.NAVIGATE_DEAL_BACK]: (state, action) => {
        return Object.assign({}, state, { isExtraInfoExpanded: false, expandedAgreementRowIndex: -1 });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.NAVIGATE_BACK_TO_DEAL_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen. Thunk dispatched to reset container state to default values.
    [actionsDeal.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsDeal.initialState.state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to set editor mode.
    [actionsDeal.PERFORM_DEAL_REFRESH_MODE]: (state, action) => {
        return Object.assign({}, state, { dealRefreshMode: action.payload.mode });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to set editor mode.
    [actionsDeal.PERFORM_EDIT_DEAL]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    // Thunk dispatched to save navigationType from state.mrmkmcibApp.reducerAuthorization.navigateBackData.navigationType.
    [actionsDeal.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { navigationType: action.payload.navigationType });
    },
    [actionsDeal.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state, { currentDeal: defaultValues.Deal });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isDealExpandedMode: true });
    },
    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN]: (state, action) => {
        return Object.assign({}, state, { isDealExpandedMode: false });
    },
}, ModelsDeal.initialState.state);
export default reducerDeal;
//# sourceMappingURL=ReducerDeal.js.map