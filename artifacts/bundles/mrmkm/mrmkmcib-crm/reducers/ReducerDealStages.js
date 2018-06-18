import { handleActions } from "redux-actions";
import * as ModelsDealStages from '../models/ModelsDealStages';
import * as actionsDealStages from '../actions/ActionDealStages';
import * as util from "../common/Util";
import { defaultValues } from "../models/Models";
const reducerDealStages = handleActions({
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, state.currentDeal, { isRoadMapShow: action.payload.enabled }) });
    },
    // Thunk dispatched to setAccessStagesFlag.
    [actionsDealStages.SET_ACCESS_STAGES_FLAG]: (state, action) => {
        return Object.assign({}, state, { isAccessibleStages: action.payload.enabled });
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.PERFORM_ROAD_MAP_SWITCH_SUCCESS]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.PERFORM_ROAD_MAP_SWITCH_FAILURE]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.NAVIGATE_TO_STAGE_DETAILS]: (state, action) => {
        return Object.assign({}, state, { selectedStage: action.payload.stage, activePosition: action.payload.activePosition });
    },
    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE]: (state) => {
        return Object.assign({}, state, { isVisiblePopoverClientRoadMap: false });
    },
    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW]: (state) => {
        return Object.assign({}, state, { isVisiblePopoverClientRoadMap: true });
    },
    [actionsDealStages.PERFORM_CLIENT_ROADMAP_ACTIVATE]: (state) => {
        return Object.assign({}, state, { isReadOnlyStages: !state.isReadOnlyStages, isVisiblePopoverClientRoadMap: false });
    },
    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE]: (state) => {
        return Object.assign({}, state, { isVisiblePopoverClientRoadMapHelp: false });
    },
    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW]: (state) => {
        return Object.assign({}, state, { isVisiblePopoverClientRoadMap: false, isVisiblePopoverClientRoadMapHelp: true });
    },
    [actionsDealStages.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, ModelsDealStages.initialState.state, { currentDeal: action.payload.currentDeal, stageList: action.payload.currentDeal.stages || [], crmStages: action.payload.crmStages, progress: action.payload.currentDeal.progress || 0, system: action.payload.currentDeal.system, isReadOnlyStages: action.payload.isReadOnlyStages, currentCustomerManaged: action.payload.customer });
    },
    [actionsDealStages.PERFORM_REFRESH_STAGES_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { stageList: action.payload.stageList });
    },
    [actionsDealStages.PERFORM_REFRESH_STAGES_FAILURE]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.PERFORM_CHANGE_STAGE_TAB]: (state, action) => {
        return Object.assign({}, state, { currentStageTab: action.payload.index });
    },
    [actionsDealStages.NAVIGATE_TO_DEAL_STAGES]: (state, action) => {
        return Object.assign({}, state, { isReadOnlyStages: !state.currentDeal.isRoadMapShow, isStageListEnable: util.getStageListEnableFlag(state.currentDeal, action.payload.currentUser, action.payload.classifierDictionary) });
    },
    [actionsDealStages.NAVIGATE_BACK]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.NAVIGATE_BACK_WITH_RESET_DATA]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.NAVIGATE_TO_PREVIOUS_FORM]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.PERFORM_SAVE_STAGE]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.NAVIGATE_TO_ADDITIONAL_FIELDS]: (state, action) => {
        return Object.assign({}, state, { inputStage: action.payload.inputStage });
    },
    [actionsDealStages.RESET_CHECK_FLAGS]: (state) => {
        return Object.assign({}, state, { isSetMemberMonitoring: false, isSetMainCreditOfficer: false, isSetMainClientManager: false, isSetCurrency: false, isSetClientStageChanges: false, isSetCloseReason: false, isSetPlannedFinishDate: false, isErrorEnable: false, errorMessage: '', inputCurrency: null, inputDealDate: null, inputMainClientManager: null, inputMainCreditOfficer: null, inputMemberMonitoring: null, inputRejection: defaultValues.Classifier, inputMemberList: null, receivingInputParametersError: null, saveDealAdditionalFieldsError: null, dealStagesTrackingUpdateError: null, saveDealStageError: null, dealStageTrackingError: null, dealPossibleStageListError: null, dealHistoryStageListError: null, dealStagesUpdateError: null, dealUpdateError: null, currentDealError: null });
    },
    [actionsDealStages.CURRENT_STAGE_STATUS]: (state, action) => {
        return Object.assign({}, state, { currentStageStatus: {
                stageStatus: action.payload.stageStatus,
                isDisabled: action.payload.isDisabled,
                isSelected: action.payload.isSelected,
                history: action.payload.history,
                stageText: action.payload.stageText
            } });
    },
    [actionsDealStages.SET_SAVE_STAGE_ENABLE_FLAG]: (state, action) => {
        return Object.assign({}, state, { isSaveStageEnable: action.payload.isSaveStageEnable });
    },
    [actionsDealStages.PERFORM_SET_REJECTION]: (state, action) => {
        return Object.assign({}, state, { isRejection: action.payload.isRejection });
    },
    [actionsDealStages.PERFORM_INPUT_DEAL_DATE]: (state, action) => {
        return Object.assign({}, state, { inputDealDate: action.payload.value });
    },
    [actionsDealStages.PERFORM_INPUT_EQUIVALENT_SUM_STRING]: (state, action) => {
        return Object.assign({}, state, { inputEquivalentSumString: action.payload.value });
    },
    [actionsDealStages.PERFORM_INPUT_EQUIVALENT_SUM]: (state, action) => {
        return Object.assign({}, state, { inputEquivalentSum: action.payload.value });
    },
    [actionsDealStages.NAVIGATE_TO_CURRENCY_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER]: (state, action) => {
        return Object.assign({}, state, { isButtonPopoverOpenedMainClientManager: action.payload.isButtonPopoverOpenedMainClientManager });
    },
    [actionsDealStages.SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER]: (state, action) => {
        return Object.assign({}, state, { isButtonPopoverOpenedMainCreditOfficer: action.payload.isButtonPopoverOpenedMainCreditOfficer });
    },
    [actionsDealStages.SHOW_BUTTON_POPOVER_MEMBER_MONITORING]: (state, action) => {
        return Object.assign({}, state, { isButtonPopoverOpenedMemberMonitoring: action.payload.isButtonPopoverOpenedMemberMonitoring });
    },
    [actionsDealStages.SHOW_DEAL_STAGES_SAVE_POPOVER]: (state, action) => {
        return Object.assign({}, state, { isDealStagesSavePopoverOpened: action.payload.isDealStagesSavePopoverOpened });
    },
    [actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER]: (state, action) => {
        return Object.assign({}, state, { inputEmployeeSource: action.payload.employeeSource });
    },
    [actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER]: (state, action) => {
        return Object.assign({}, state, { inputEmployeeSource: action.payload.employeeSource });
    },
    [actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING]: (state, action) => {
        return Object.assign({}, state, { inputEmployeeSource: action.payload.employeeSource });
    },
    [actionsDealStages.PERFORM_INPUT_STRING]: (state, action) => {
        return Object.assign({}, state, { inputComment: action.payload.inputComment });
    },
    [actionsDealStages.PERFORM_INPUT_MAIN_CLIENT_MANAGER]: (state, action) => {
        return Object.assign({}, state, { inputMainClientManager: action.payload.inputMainClientManager });
    },
    [actionsDealStages.PERFORM_INPUT_MAIN_CREDIT_OFFICER]: (state, action) => {
        return Object.assign({}, state, { inputMainCreditOfficer: action.payload.inputMainCreditOfficer });
    },
    [actionsDealStages.PERFORM_INPUT_MEMBER_MONITORING]: (state, action) => {
        return Object.assign({}, state, { inputMemberMonitoring: action.payload.inputMemberMonitoring });
    },
    [actionsDealStages.PERFORM_INPUT_MEMBER_LIST]: (state, action) => {
        return Object.assign({}, state, { inputMemberList: action.payload.inputMemberList });
    },
    [actionsDealStages.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.PERFORM_INPUT_CURRENCY]: (state, action) => {
        return Object.assign({}, state, { inputCurrency: action.payload.value });
    },
    [actionsDealStages.PERFORM_SELECT_REJECTION]: (state, action) => {
        return Object.assign({}, state, { inputRejection: action.payload.inputRejection });
    },
    [actionsDealStages.PERFORM_VALIDATE_FORM]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG]: (state, action) => {
        return Object.assign({}, state, { isSaveAdditionalFieldsEnable: action.payload.isSaveAdditionalFieldsEnable });
    },
    [actionsDealStages.SHOW_ERROR]: (state, action) => {
        return Object.assign({}, state, { isErrorEnable: action.payload.isErrorEnable, errorMessage: action.payload.errorMessage });
    },
    [actionsDealStages.PREPARE_STAGE_CLASSIFIER_LIST]: (state, action) => {
        return Object.assign({}, state, { accessibleStageList: action.payload.accessibleStageList });
    },
    [actionsDealStages.PREPARE_STAGE_INPUT_DATA]: (state) => {
        return Object.assign({}, state, { inputStage: state.currentDeal.phaseClassifier });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_CHECKS]: (state, action) => {
        return Object.assign({}, state, util.performDealStageChecks(state, action.payload.inputStage, action.payload.currentUserId));
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE_EXECUTE]: (state) => {
        return Object.assign({}, state, { saveDealStageInProgress: true, saveDealStageError: null });
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE_SUCCESS]: (state) => {
        return Object.assign({}, state, { saveDealStageInProgress: false, saveDealStageError: null });
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { saveDealStageInProgress: false, saveDealStageError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE]: (state) => {
        return Object.assign({}, state, { saveDealAdditionalFieldsInProgress: true, saveDealAdditionalFieldsError: null });
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS]: (state) => {
        return Object.assign({}, state, { saveDealAdditionalFieldsInProgress: false, saveDealAdditionalFieldsError: null });
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE]: (state, action) => {
        return Object.assign({}, state, { saveDealAdditionalFieldsInProgress: false, saveDealAdditionalFieldsError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE]: (state) => {
        return Object.assign({}, state, { receivingInputParametersInProgress: true, receivingInputParametersError: null });
    },
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS]: (state) => {
        return Object.assign({}, state, { receivingInputParametersInProgress: false, receivingInputParametersError: null });
    },
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE]: (state, action) => {
        return Object.assign({}, state, { receivingInputParametersInProgress: false, receivingInputParametersError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_CURRENT_DEAL]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.CALL_GET_CURRENT_DEAL_EXECUTE]: (state) => {
        return Object.assign({}, state, { currentDealFetching: true, currentDealError: null });
    },
    [actionsDealStages.CALL_GET_CURRENT_DEAL_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentDeal: action.payload.currentDeal, currentDealFetching: false, currentDealError: null });
    },
    [actionsDealStages.CALL_GET_CURRENT_DEAL_FAILURE]: (state, action) => {
        return Object.assign({}, state, { currentDealFetching: true, currentDealError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealStageTrackingFetching: true, dealStageTrackingError: null });
    },
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealStageTracking: action.payload.dealStageTracking, dealStageTrackingFetching: false, dealStageTrackingError: null });
    },
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealStageTrackingFetching: false, dealStageTrackingError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_NEXT_STAGES]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.CALL_GET_NEXT_STAGES_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealPossibleStageListFetching: true, dealPossibleStageListError: null });
    },
    [actionsDealStages.CALL_GET_NEXT_STAGES_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealPossibleStageList: action.payload.dealPossibleStageList, dealPossibleStageListFetching: false, dealPossibleStageListError: null });
    },
    [actionsDealStages.CALL_GET_NEXT_STAGES_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealPossibleStageListFetching: false, dealPossibleStageListError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_HISTORY_STAGES]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealStages.CALL_GET_HISTORY_STAGES_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealHistoryStageListFetching: true, dealHistoryStageListError: null });
    },
    [actionsDealStages.CALL_GET_HISTORY_STAGES_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealHistoryStageList: action.payload.dealHistoryStageList, dealHistoryStageListFetching: false, dealHistoryStageListError: null });
    },
    [actionsDealStages.CALL_GET_HISTORY_STAGES_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealHistoryStageListFetching: false, dealHistoryStageListError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_PUT_DEAL_UPDATE]: (state) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid() });
    },
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealUpdateFetching: true, dealUpdateError: null });
    },
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_SUCCESS]: (state) => {
        return Object.assign({}, state, { dealUpdateFetching: false, dealUpdateError: null, operationUuid: null });
    },
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealUpdateFetching: false, dealUpdateError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE]: (state) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid() });
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealStagesUpdateFetching: true, dealStagesUpdateError: null });
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS]: (state) => {
        return Object.assign({}, state, { dealStagesUpdateFetching: false, dealStagesUpdateError: null, operationUuid: null });
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealStagesUpdateFetching: false, dealStagesUpdateError: action.payload.error });
    },
    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE]: (state) => {
        return Object.assign({}, state, { operationUuid: util.getRandomOperationUuid() });
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealStagesTrackingUpdateFetching: true, dealStagesTrackingUpdateError: null });
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS]: (state) => {
        return Object.assign({}, state, { dealStagesTrackingUpdateFetching: false, dealStagesTrackingUpdateError: null, operationUuid: null });
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealStagesTrackingUpdateFetching: false, dealStagesTrackingUpdateError: action.payload.error });
    },
}, ModelsDealStages.initialState.state);
export default reducerDealStages;
//# sourceMappingURL=ReducerDealStages.js.map