/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsProductPaymentAccount from '../actions/ActionsProductPaymentAccount';
import { Enums } from '../Enums';
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount";
import * as util from '../common/Util';
import { defaultValues } from '../models/Models';
const reducerProductPaymentAccount = handleActions({
    // Thunk dispatched by "ProductPaymentAccount" screen. (Deprecated)Thunk chain dispatched on tab selector change current tab.
    [actionsProductPaymentAccount.PERFORM_CHANGE_TAB]: (state, action) => {
        return Object.assign({}, state, { currentTab: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_SUM_MIN]: (state, action) => {
        return Object.assign({}, state, { inputSumMin: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_SUM_MAX]: (state, action) => {
        return Object.assign({}, state, { inputSumMax: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_FILTER_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: true });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_FILTER_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_OPERATION_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputOperationType: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverPeriodType: true });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
    [actionsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverPeriodType: false });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
    [actionsProductPaymentAccount.PERFORM_INPUT_PERIOD_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputPeriodType: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodStart field.
    [actionsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_START]: (state, action) => {
        return Object.assign({}, state, { inputFilterPeriodStart: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodEnd field.
    [actionsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_END]: (state, action) => {
        return Object.assign({}, state, { inputFilterPeriodEnd: action.payload.value });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to change filter period.
    [actionsProductPaymentAccount.PERFORM_FILTER_APPLY]: (state, action) => {
        return Object.assign({}, state, { filterSumMin: state.inputSumMin, filterSumMax: state.inputSumMax, filterOperationType: state.inputOperationType, isVisiblePopoverPeriodType: false });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset filter period.
    [actionsProductPaymentAccount.PERFORM_FILTER_RESET]: (state, action) => {
        return Object.assign({}, state, { inputOperationType: Enums.OperationType.DebtAndCredit, filterOperationType: Enums.OperationType.DebtAndCredit, inputSumMin: null, inputSumMax: null, filterSumMin: null, filterSumMax: null });
    },
    // Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched to filter operation list.
    [actionsProductPaymentAccount.OPERATION_LIST_FILTER]: (state, action) => {
        return Object.assign({}, state, { operationFilteredList: util.operationListFilter(state.operationList, state.inputFilterPeriodStart, state.inputFilterPeriodEnd, state.inputPeriodType, state.filterOperationType, state.filterSumMin, state.filterSumMax) });
    },
    // Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user select custom period type.
    [actionsProductPaymentAccount.NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user navigate back.
    [actionsProductPaymentAccount.NAVIGATE_PERIOD_TYPE_CUSTOM_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch update card index list reset cache.
    [actionsProductPaymentAccount.PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch update card index list reset cache.
    [actionsProductPaymentAccount.PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetOperationList" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { operationListFetching: true, operationListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetOperationList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { operationList: action.payload.response.data, operationListCachedDate: action.payload.response.data.bhCachedDate, operationListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus), operationListError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetOperationList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
    [actionsProductPaymentAccount.CALL_GET_OPERATION_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { operationList: Object.assign({}, defaultValues.PaymentAccountProductOperationList, { pollingStatus: Enums.ProductPollingStatus.Error }), operationListFetching: false, operationListError: action.payload.error });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { cardIndexEksListFetching: true, cardIndexEksListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { cardIndexEksList: action.payload.response.data, cardIndexEksListCachedDate: action.payload.response.data.bhCachedDate, cardIndexEksListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus), cardIndexEksListError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_EKS_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { cardIndexList: Object.assign({}, defaultValues.PaymentAccountProductCardIndexList, { pollingStatus: Enums.ProductPollingStatus.Error }), cardIndexEksListFetching: false, cardIndexEksListError: action.payload.error });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { cardIndexListFetching: true, cardIndexListError: null });
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_REQUEST]: (state, action) => {
        return Object.assign({}, state, { productVspInfoFetching: true, productVspInfoFetchingError: null });
    },
    // Action dispatched on network thunk chain "callGetProductVspInfo" started. Thunk dispatched by "ProductPaymentAccount" screen. Fetch ProductVspInfo.
    [actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { productVspInfoFetching: false, productVspInfo: Object.assign({}, action.payload.response.data) });
    },
    // Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO_FAILURE]: (state, action) => {
        return Object.assign({}, state, { productVspInfoFetchingError: action.payload.error, productVspInfoFetching: false });
    },
    // Action dispatched on fetch succeeded in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { cardIndexList: action.payload.response.data, cardIndexListCachedDate: action.payload.response.cachedDate, cardIndexListFetching: util.isPollingStatusInProgress(action.payload.response.data.pollingStatus), cardIndexListError: null });
    },
    // Action dispatched on fetch failure in thunk "callGetCardIndexList". Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
    [actionsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { cardIndexList: Object.assign({}, defaultValues.PaymentAccountProductCardIndexList, { pollingStatus: Enums.ProductPollingStatus.Error }), cardIndexListCachedDate: new Date(), cardIndexListFetching: false, cardIndexListError: action.payload.error });
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_RESTRICTION_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_CARD_INDEX_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_TARIFF_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_VSP_INFO_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_OPERATION_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
    [actionsProductPaymentAccount.NAVIGATE_TO_DASHBOARD_SCREEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user navigate back to ProductPaymentAccount screen.
    [actionsProductPaymentAccount.NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset container state to default values.
    [actionsProductPaymentAccount.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsProductPaymentAccount.initialState.state);
    },
    // Internal thunk used in "ProductPaymentAccount" container. Clear all network cache for operation list if pollign status is not success or eksErrorList is not empty.
    [actionsProductPaymentAccount.CLEAR_OPERATION_LIST_CACHE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Internal thunk used in "ProductPaymentAccount" container. Clear all network cache for card index list if pollign status is not success or eksErrorList is not empty.
    [actionsProductPaymentAccount.CLEAR_CARD_INDEX_LIST_CACHE]: (state, action) => {
        return Object.assign({}, state);
    },
}, ModelsProductPaymentAccount.initialState.state);
export default reducerProductPaymentAccount;
//# sourceMappingURL=ReducerProductPaymentAccount.js.map