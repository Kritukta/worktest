/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsDealEditor from '../actions/ActionsDealEditor';
import { defaultValues } from "../models/Models";
import { Enums } from '../Enums';
import * as ModelsDealEditor from "../models/ModelsDealEditor";
import * as util from '../common/Util';
const UNIVERSAL_DEAL = {
    parentId: '',
    name: 'SBRF_NKP_REQUEST_TYPE',
    value: 'Стандартная сделка',
    code: 'Универсальная'
};
const reducerDealEditor = handleActions({
    // Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
    [actionsDealEditor.NAVIGATE_TO_DEAL_EDITOR]: (state, action) => {
        return Object.assign({}, ModelsDealEditor.initialState.state, { isInitRoadMapNecessary: action.payload.isInitRoadMapNecessary, dealEditorMode: action.payload.mode, isRowBlocked: action.payload.mode == Enums.DealEditorMode.UpdateMode });
    },
    // Internal thunk used in "DealEditor" container. Thunk chain used to swap customer and user.
    [actionsDealEditor.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { isEditorMode: action.payload.isEditorMode, currentCustomerManaged: action.payload.customer, currentDeal: action.payload.deal, currentEditorStep: Enums.DealEditorStep.Main });
    },
    // Thunk dispatched to callPutDealInitRoadMap.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched to callPutDealInitRoadMapRequest.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST]: (state) => {
        return Object.assign({}, state, { dealInitRoadMapFetching: true });
    },
    // Thunk dispatched to callPutDealInitRoadMapRequestSuccess.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS]: (state) => {
        return Object.assign({}, state, { dealInitRoadMapFetching: false });
    },
    // Thunk dispatched to callPutDealInitRoadMapRequestFailure.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealInitRoadMapFetching: false, dealInitRoadMapError: action.payload.error });
    },
    // Thunk dispatched to performInitRoadMapFailure.
    [actionsDealEditor.PERFORM_INIT_ROAD_MAP_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealInitRoadMapError: action.payload.error });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to cancel changes.
    [actionsDealEditor.PERFORM_CANCEL]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
    [actionsDealEditor.PERFORM_NEXT]: (state) => {
        return Object.assign({}, state, { currentEditorStep: Enums.DealEditorStep.Extra });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
    [actionsDealEditor.PERFORM_SAVE]: (state, action) => {
        return Object.assign({}, state, { operationUuidCreate: action.payload.operationUuidCreate, operationUuidUpdate: action.payload.operationUuidUpdate });
    },
    [actionsDealEditor.PERFORM_CANCEL_SAVE_ERROR]: (state) => {
        return Object.assign({}, state, { dealSaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "DealEtitor" screen. Thunk used to confirm changes in Deal.
    [actionsDealEditor.PERFORM_SAVE_EXECUTE]: (state) => {
        return Object.assign({}, state, { dealSaveInProgress: true, dealSaveError: null });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "DealEtitor" screen. Thunk used to confirm changes in Deal.
    [actionsDealEditor.PERFORM_SAVE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealSave: action.payload.data, dealSaveInProgress: false, dealSaveError: null, operationUuidCreate: '', operationUuidUpdate: '' });
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "DealEtitor" screen. Thunk used to confirm changes in Deal.
    [actionsDealEditor.PERFORM_SAVE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealSaveInProgress: false, dealSaveError: action.payload.error });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap navigate back.
    [actionsDealEditor.NAVIGATE_BACK]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.NAVIGATE_BACK_EDITOR]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
    [actionsDealEditor.PERFORM_INPUT_CUSTOMER]: (state, action) => {
        return Object.assign({}, state, { currentCustomerManaged: action.payload.value });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
    [actionsDealEditor.PERFORM_INPUT_DESCRIPTION]: (state, action) => {
        return Object.assign({}, state, { inputDescription: action.payload.value });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Product field.
    [actionsDealEditor.NAVIGATE_TO_PRODUCT_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Product field.
    [actionsDealEditor.PERFORM_INPUT_PRODUCT]: (state, action) => {
        return Object.assign({}, state, { inputProduct: action.payload.value, salesMethodList: util.getDealSalesMethodList(state.inputProduct), inputSalesMethod: util.getDealSalesMethodList(state.inputProduct).data.length == 1 ? util.getDealSalesMethodList(state.inputProduct).data[0] : defaultValues.Classifier });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap SalesMethod field.
    [actionsDealEditor.NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.PERFORM_UPDATE_SALES_METHOD]: (state, action) => {
        return Object.assign({}, state, { inputSalesMethod: action.payload.value });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input SalesMethod field.
    [actionsDealEditor.PERFORM_INPUT_SALES_METHOD]: (state, action) => {
        return Object.assign({}, state, { inputSalesMethod: action.payload.value });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Currency field.
    [actionsDealEditor.NAVIGATE_TO_CURRENCY_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Currency field.
    [actionsDealEditor.PERFORM_INPUT_CURRENCY]: (state, action) => {
        return Object.assign({}, state, { inputCurrency: action.payload.value });
    },
    [actionsDealEditor.PERFORM_INPUT_SUM_STRING]: (state, action) => {
        return Object.assign({}, state, { inputSumString: action.payload.value });
    },
    [actionsDealEditor.PERFORM_INPUT_EQUIVALENT_SUM_STRING]: (state, action) => {
        return Object.assign({}, state, { inputEquivalentSumString: action.payload.value });
    },
    [actionsDealEditor.PERFORM_INPUT_TRANSFER_COMMISSION]: (state, action) => {
        return Object.assign({}, state, { inputTransferCommission: action.payload.value });
    },
    [actionsDealEditor.PERFORM_INPUT_STAFF_COUNT]: (state, action) => {
        return Object.assign({}, state, { inputStaffCount: action.payload.value });
    },
    [actionsDealEditor.PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING]: (state, action) => {
        return Object.assign({}, state, { inputEquivalentConversionRateString: action.payload.value });
    },
    [actionsDealEditor.PERFORM_SET_EQUIVALENT_RATE_MODE]: (state, action) => {
        return Object.assign({}, state, { isEquivalentRateMode: action.payload.value });
    },
    [actionsDealEditor.PERFORM_SET_PRODUCT_METHOD_MODE]: (state, action) => {
        return Object.assign({}, state, { isProductMethodEnabled: action.payload.isProductMethodEnabled });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input DealDate field.
    [actionsDealEditor.PERFORM_INPUT_DEAL_DATE]: (state, action) => {
        return Object.assign({}, state, { inputDealDate: action.payload.value });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap activity list.
    [actionsDealEditor.NAVIGATE_TO_ACTIVITY_LIST_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from Scope.
    [actionsDealEditor.PERFORM_ACTIVITY_LIST_APPEND]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND]: (state) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPutDealActivityAppend" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST]: (state) => {
        return Object.assign({}, state, { dealActivityAppendFetching: true, dealActivityAppendError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPutDealActivityAppend". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealActivityAppend: action.payload.response.data, dealActivityAppendCachedDate: action.payload.response.cachedDate, dealActivityAppendFetching: false, dealActivityAppendError: null });
    },
    // Action dispatched on fetch failure in thunk "callPutDealActivityAppend". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealActivityAppendFetching: false, dealActivityAppendError: action.payload.error });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from linked list.
    [actionsDealEditor.PERFORM_ACTIVITY_LIST_EXCLUDE]: (state, action) => {
        return Object.assign({}, state, { currentActivity: action.payload.activity });
    },
    // Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE]: (state) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPutDealActivityExclude" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST]: (state) => {
        return Object.assign({}, state, { dealActivityExcludeFetching: true, dealActivityExcludeError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callPutDealActivityExclude". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealActivityExclude: action.payload.response.data, dealActivityExcludeCachedDate: action.payload.response.cachedDate, dealActivityExcludeError: null });
    },
    // Action dispatched on fetch failure in thunk "callPutDealActivityExclude". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealActivityExcludeFetching: false, dealActivityExcludeError: action.payload.error });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched after activity list updated.
    [actionsDealEditor.PERFORM_SCOPE_CLEAR_AND_REFRESH]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to reset container state to default values.
    [actionsDealEditor.PERFORM_CONTAINER_RESET]: (state) => {
        return Object.assign({}, ModelsDealEditor.initialState.state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk chain used to navigate.
    [actionsDealEditor.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk chain used to save member list.
    [actionsDealEditor.PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, state.currentDeal, { memberList: action.payload.memberList }), inputTeam: action.payload.memberList });
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched save.
    [actionsDealEditor.CALL_POST_DEAL_CREATE]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "DealEditor" screen. Thunk dispatched save.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE]: (state) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST]: (state) => {
        return Object.assign({}, state, { dealUpdateFetching: true, dealUpdateError: null });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS]: (state) => {
        return Object.assign({}, state, { dealUpdateFetching: false, dealUpdateError: null });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealUpdateFetching: false, dealUpdateError: action.payload.error });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST]: (state) => {
        return Object.assign({}, state, { dealCreateFetching: true, dealCreateError: null });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { dealCreateFetching: false, dealCreateError: null, id: action.payload.id });
    },
    [actionsDealEditor.PERFORM_SET_DEAL_CREATION_MODE]: (state, action) => {
        return Object.assign({}, state, { dealCreationMode: action.payload.mode });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { dealCreateFetching: false, dealCreateError: action.payload.error });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.DEAL_CREATED]: (state) => {
        return Object.assign({}, state, { dealCreated: true });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.INITIAL_VALUES_FOR_DEAL_EDITOR]: (state, action) => {
        return Object.assign({}, state, { inputProduct: action.payload.deal.products && action.payload.deal.products.length && action.payload.deal.products[0].productClassifier || defaultValues.Classifier, inputSalesMethod: action.payload.deal.salesMethodClassifier || defaultValues.Classifier, inputDescription: action.payload.deal.title, inputSum: action.payload.deal.sum, inputAgentList: action.payload.deal.agentList || defaultValues.AgentList, inputCurrency: action.payload.deal.currency, inputDealDate: action.payload.deal.plannedFinishDate, currentDeal: action.payload.deal, inputSumString: util.convertNumberToString(action.payload.deal.sum), inputEquivalentSum: action.payload.deal.sumRur, inputEquivalentSumString: util.convertNumberToString(action.payload.deal.sumRur), inputEquivalentConversionRate: action.payload.deal.exchangeCourse, inputEquivalentConversionRateString: util.convertNumberToString(action.payload.deal.exchangeCourse), inputDealType: state.currentDeal.requestTypeClassifier && state.currentDeal.requestTypeClassifier.code ? state.currentDeal.requestTypeClassifier : UNIVERSAL_DEAL, inputStaffCount: state.currentDeal.salaryProjectDetails && state.currentDeal.salaryProjectDetails.staffCount ? `${state.currentDeal.salaryProjectDetails.staffCount}` : null, inputTransferCommission: state.currentDeal.salaryProjectDetails && state.currentDeal.salaryProjectDetails.fee ? `${state.currentDeal.salaryProjectDetails.fee}` : null, inputAttractionChannel: state.currentDeal.attractingChannel || defaultValues.Classifier, inputChance: state.currentDeal.probability ? `${state.currentDeal.probability}` : null, inputApplication: state.currentDeal.application || defaultValues.Classifier, applicationKkClassifierList: util.getApplicationKkClassifierList(action.payload.deal.salesMethodClassifier || defaultValues.Classifier, action.payload.classifierDictionary.SBRF_APPLICATION_KK) });
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.PERFORM_VALIDATE]: (state, action) => {
        return Object.assign({}, state, { isValid: action.payload.value });
    },
    // Action dispatched on thunk "performInputFilteredMethodClassifier" started. Thunk dispatched by "thunkDealEditor".
    [actionsDealEditor.PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER]: (state, action) => {
        return Object.assign({}, state, { inputFilteredMethodClassifier: action.payload.inputFilteredMethodClassifier });
    },
    // Action dispatched on thunk "performInputFilteredMethodClassifier" started. Thunk dispatched by "thunkDealEditor".
    [actionsDealEditor.CALL_GET_DEAL_REFRESH]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.CALL_GET_DEAL_REFRESH_REQUEST]: (state) => {
        return Object.assign({}, state, { currentDealFetching: true, currentDealError: null });
    },
    [actionsDealEditor.CALL_GET_DEAL_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { currentDeal: action.payload.response.data, currentDealFetching: false, currentDealError: null });
    },
    [actionsDealEditor.CALL_GET_DEAL_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { currentDealFetching: false, currentDealError: action.payload.error });
    },
    [actionsDealEditor.PERFORM_RETURN_TO_DEAL]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.PERFORM_TAP_ACTIVITY_DELETE]: (state, action) => {
        return Object.assign({}, state, { tapActivityDeleteId: action.payload.id });
    },
    [actionsDealEditor.GET_DEAL_ACTIVITY_LIST]: (state, action) => {
        return Object.assign({}, state, { activityList: action.payload.activityList, dealActivityExcludeFetching: false });
    },
    [actionsDealEditor.PERFORM_INPUT_SAVED_MODE]: (state, action) => {
        return Object.assign({}, state, { savedMode: action.payload.savedMode });
    },
    [actionsDealEditor.PREPARE_SALES_METHOD_CLASSIFIERS]: (state, action) => {
        return Object.assign({}, state, { salesMethodClassifiersList: action.payload.salesMethodClassifiersList });
    },
    [actionsDealEditor.PREPARE_PRODUCT_CLASSIFIERS]: (state, action) => {
        return Object.assign({}, state, { productClassifiersList: action.payload.productClassifiersList });
    },
    [actionsDealEditor.PREPARE_DEAL_LIST]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.PERFORM_INPUT_OPERUUID]: (state, action) => {
        return Object.assign({}, state, { activityOperUuid: action.payload.activityOperUuid });
    },
    [actionsDealEditor.PERFORM_NAVIGATION_BUTTON_DISABLED]: (state, action) => {
        return Object.assign({}, state, { isNavigationButtonDisabled: action.payload.isNavigationButtonDisabled });
    },
    [actionsDealEditor.PERFORM_SET_OWNER_FLAG]: (state, action) => {
        return Object.assign({}, state, { isOwner: action.payload.isOwner });
    },
    [actionsDealEditor.SET_VALIDATION_ERROR]: (state, action) => {
        return Object.assign({}, state, { validationError: action.payload.validationError });
    },
    [actionsDealEditor.NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.PERFORM_INPUT_DEAL_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputChance: ModelsDealEditor.initialState.state.inputChance, inputApplication: ModelsDealEditor.initialState.state.inputApplication, inputCurrency: ModelsDealEditor.initialState.state.inputCurrency, inputDealDate: ModelsDealEditor.initialState.state.inputDealDate, inputDescription: ModelsDealEditor.initialState.state.inputDescription, inputEquivalentConversionRateString: ModelsDealEditor.initialState.state.inputEquivalentConversionRateString, inputEquivalentSumString: ModelsDealEditor.initialState.state.inputEquivalentSumString, inputSumString: ModelsDealEditor.initialState.state.inputSumString, inputTeam: ModelsDealEditor.initialState.state.inputTeam, inputProduct: ModelsDealEditor.initialState.state.inputProduct, inputSalesMethod: ModelsDealEditor.initialState.state.inputSalesMethod, inputStaffCount: ModelsDealEditor.initialState.state.inputStaffCount, inputTransferCommission: ModelsDealEditor.initialState.state.inputTransferCommission, inputAttractionChannel: ModelsDealEditor.initialState.state.inputAttractionChannel, inputDealType: action.payload.inputDealType, validationError: null });
    },
    [actionsDealEditor.PERFORM_SHOW_ADDITIONAL_FIELDS]: (state) => {
        return Object.assign({}, state, { isAdditionalFieldsAvailable: true });
    },
    [actionsDealEditor.NAVIGATE_TO_AGENT_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    [actionsDealEditor.SHOW_CHANCE_POPOVER]: (state, action) => {
        return Object.assign({}, state, { isChancePopoverOpened: action.payload.isChancePopoverOpened });
    },
    [actionsDealEditor.SHOW_ATTRACTION_CHANNEL_POPOVER]: (state, action) => {
        return Object.assign({}, state, { isAttractionChannelPopoverOpened: action.payload.isAttractionChannelPopoverOpened });
    },
    [actionsDealEditor.PERFORM_SELECT_CHANCE]: (state, action) => {
        return Object.assign({}, state, { inputChance: action.payload.inputChance });
    },
    [actionsDealEditor.SHOW_APPLICATION_POPOVER]: (state, action) => {
        return Object.assign({}, state, { isApplicationPopoverOpened: action.payload.isApplicationPopoverOpened });
    },
    [actionsDealEditor.SHOW_SALES_METHOD_POPOVER]: (state, action) => {
        return Object.assign({}, state, { isSalesMethodPopoverOpened: action.payload.isSalesMethodPopoverOpened });
    },
    [actionsDealEditor.PERFORM_SELECT_APPLICATION]: (state, action) => {
        return Object.assign({}, state, { inputApplication: action.payload.inputApplication });
    },
    [actionsDealEditor.PERFORM_SELECT_SALES_METHOD]: (state, action) => {
        return Object.assign({}, state, { inputSalesMethod: action.payload.inputSalesMethod });
    },
    [actionsDealEditor.PERFORM_SELECT_ATTRACTION_CHANNEL]: (state, action) => {
        return Object.assign({}, state, { inputAttractionChannel: action.payload.inputAttractionChannel });
    },
    [actionsDealEditor.PREPARE_APPLICATION_KK_CLASSIFIER_LIST]: (state, action) => {
        return Object.assign({}, state, { applicationKkClassifierList: action.payload.applicationKkClassifierList });
    },
    [actionsDealEditor.PERFORM_PARENT_DEAL_SET]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, state.currentDeal, { parentDeal: action.payload.parentDeal }) });
    },
    [actionsDealEditor.PERFORM_SALES_CAMPAIGN_SET]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, state.currentDeal, { salesCampaign: action.payload.salesCampaign }) });
    },
    [actionsDealEditor.PERFORM_SAVE_AGENT_LIST]: (state, action) => {
        return Object.assign({}, state, { inputAgentList: action.payload.inputAgentList });
    },
}, ModelsDealEditor.initialState.state);
export default reducerDealEditor;
//# sourceMappingURL=ReducerDealEditor.js.map