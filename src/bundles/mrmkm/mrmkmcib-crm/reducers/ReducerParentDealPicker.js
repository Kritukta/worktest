/*
 * Created by Gladkov E.N.
 */
import { handleActions } from 'redux-actions';
import * as actionsParentDealPicker from '../actions/ActionsParentDealPicker';
import { defaultValues } from "../models/Models";
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker';
import { EnumsCrm as Enums } from 'mrmkmcib-crm';
import * as Utils from '../common/Util';
const reducerParentDealPicker = handleActions({
    [actionsParentDealPicker.SET_PARENT_DEAL_PICKER_MODE]: (state, action) => {
        return Object.assign({}, state, { parentDealPickerMode: action.payload.mode });
    },
    [actionsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN]: (state) => {
        return Object.assign({}, state, { isRefreshBarVisible: true });
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state, { parentDealCustomerList: action.payload.parentDealCustomerList });
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SELECT]: (state, action) => {
        return Object.assign({}, state, { parentDealCustomer: action.payload.parentDealCustomer, isParentDealCustomerSearchMode: false });
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE]: (state) => {
        return Object.assign({}, state, { isParentDealCustomerSearchMode: true, parentDealCustomerInputSearch: '', parentDealCustomerSearchList: Utils.parentDealPickerCustomerSearchListFilter(state.parentDealCustomerList, '') });
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE]: (state) => {
        return Object.assign({}, state, { isParentDealCustomerSearchMode: false });
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { parentDealCustomerInputSearch: action.payload.parentDealCustomerInputSearch });
    },
    [actionsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN]: (state) => {
        return Object.assign({}, state, { parentDealDealList: { data: [] } });
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST]: (state) => {
        return Object.assign({}, state, { isParentDealDealListRefreshInProgress: true, parentDealDealListFetchError: null });
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { parentDealDealList: {
                data: action.payload.response.data.data || [],
            }, isParentDealDealListRefreshInProgress: false, parentDealDealListFetchError: null });
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { isParentDealDealListRefreshInProgress: false, parentDealDealListFetchError: action.payload.error });
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK]: (state) => {
        return Object.assign({}, state, { isParentDealDealListRefreshInProgress: false, parentDealDealListFetchError: null });
    },
    [actionsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_SELECT]: (state, action) => {
        return Object.assign({}, state, { currentDeal: Object.assign({}, state.currentDeal, { parentDeal: action.payload.parentDealDeal }) });
    },
    [actionsParentDealPicker.NAVIGATE_BACK]: (state) => {
        return Object.assign({}, state, { isParentDealCustomerSearchMode: false });
    },
    [actionsParentDealPicker.PERFORM_FLUSH]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_LIST_REFRESH]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH]: (state) => {
        return Object.assign({}, state, { currentPage: 0, customerManagedList: defaultValues.CustomerManagedList });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE]: (state) => {
        return Object.assign({}, state, { customerListRefreshInProgress: true, refreshError: null, isRefreshBarVisible: false });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { refresh: action.payload.data, customerListRefreshInProgress: false, refreshError: null, isRefreshBarVisible: true });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerListRefreshInProgress: false, refreshError: action.payload.error, isRefreshBarVisible: true, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.PERFORM_REFRESH_BAR_HIDE]: (state) => {
        return Object.assign({}, state, { isRefreshBarVisible: false });
    },
    [actionsParentDealPicker.PERFORM_REFRESH_BAR_SHOW]: (state) => {
        return Object.assign({}, state, { isRefreshBarVisible: true });
    },
    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state) => {
        return Object.assign({}, state, { customerManagedListFetching: true, customerManagedListError: null });
    },
    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerManagedList: action.payload.response.data, customerManagedListCachedDate: action.payload.response.cachedDate, customerManagedListFetching: false, customerManagedListError: null });
    },
    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerManagedListFetching: false, customerManagedListError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND]: (state) => {
        return Object.assign({}, state, { currentPage: state.currentPage + 1 });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE]: (state) => {
        return Object.assign({}, state, { customerListAppendInProgress: true, appendError: null });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { append: action.payload.data, customerListAppendInProgress: false, appendError: null });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerListAppendInProgress: false, appendError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state) => {
        return Object.assign({}, state, { customerManagedListPageFetching: true, customerManagedListPageError: null });
    },
    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerManagedListPage: action.payload.response.data, customerManagedListPageCachedDate: action.payload.response.cachedDate, customerManagedListPageFetching: false, customerManagedListPageError: null });
    },
    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerManagedListPageFetching: false, customerManagedListPageError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.APPEND_CUSTOMER_MANAGED_LIST_CONCAT]: (state) => {
        return Object.assign({}, state, { customerManagedList: Object.assign({}, state.customerManagedList, { data: state.customerManagedList.data.concat(state.customerManagedListPage.data), isCompleted: state.customerManagedListPage.isLast == true }) });
    },
    [actionsParentDealPicker.PERFORM_SEARCH_MODE_ENABLE]: (state) => {
        return Object.assign({}, state, { isSearchMode: true });
    },
    [actionsParentDealPicker.PERFORM_SEARCH_MODE_DISABLE]: (state) => {
        return Object.assign({}, state, { isSearchMode: false });
    },
    [actionsParentDealPicker.PERFORM_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { parentDealCustomerInputSearch: action.payload.value });
    },
    [actionsParentDealPicker.PERFORM_SEARCH_RESET]: (state) => {
        return Object.assign({}, state, { parentDealCustomerInputSearch: '', customerSearchType: Enums.CustomerSearchType.Name });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_RESET]: (state) => {
        return Object.assign({}, state, { currentSearchPage: 0, parentDealCustomerSearchList: defaultValues.CustomerManagedList, customerSearchError: '' });
    },
    [actionsParentDealPicker.PERFORM_SEARCH]: (state) => {
        return Object.assign({}, state, { parentDealCustomerInputSearch: state.parentDealCustomerInputSearch.trim() });
    },
    [actionsParentDealPicker.PERFORM_SEARCH_EXECUTE]: (state) => {
        return Object.assign({}, state, { isParentDealCustomerSearchInProgress: true, searchError: null });
    },
    [actionsParentDealPicker.PERFORM_SEARCH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { search: action.payload.data, isParentDealCustomerSearchInProgress: false, searchError: null });
    },
    [actionsParentDealPicker.PERFORM_SEARCH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { isParentDealCustomerSearchInProgress: false, searchError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.SEARCH_VALIDATE_SEARCH]: (state) => {
        return Object.assign({}, state, { isCustomerListSearchError: state.parentDealCustomerInputSearch.length < 3, customerSearchError: state.parentDealCustomerInputSearch.length < 3 ? 'Введите не менее 3-х символов' : '', customerSearchType: Utils.getCustomerSearchType(state.parentDealCustomerInputSearch) });
    },
    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state) => {
        return Object.assign({}, state, { customerSearchListFetching: true, customerSearchListError: null });
    },
    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { parentDealCustomerSearchList: action.payload.response.data, customerSearchListCachedDate: action.payload.response.cachedDate, customerSearchListFetching: false, customerSearchListError: null });
    },
    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: false, customerSearchListError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND]: (state) => {
        return Object.assign({}, state, { currentSearchPage: state.currentSearchPage + 1 });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE]: (state) => {
        return Object.assign({}, state, { searchAppendInProgress: true, searchAppendError: null });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { searchAppend: action.payload.data, searchAppendInProgress: false, searchAppendError: null });
    },
    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchAppendInProgress: false, searchAppendError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE]: (state) => {
        return Object.assign({}, state);
    },
    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST]: (state) => {
        return Object.assign({}, state, { customerSearchListPageFetching: true, customerSearchListPageError: null });
    },
    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPage: action.payload.response.data, customerSearchListPageCachedDate: action.payload.response.cachedDate, customerSearchListPageFetching: false, customerSearchListPageError: null });
    },
    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPageFetching: false, customerSearchListPageError: action.payload.error, isVisibleModalParentDealPickerError: true });
    },
    [actionsParentDealPicker.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT]: (state) => {
        return Object.assign({}, state, { parentDealCustomerSearchList: Object.assign({}, state.parentDealCustomerSearchList, { data: state.parentDealCustomerSearchList.data.concat(state.customerSearchListPage.data), isCompleted: state.customerSearchListPage.isLast == true }) });
    },
}, ModelsParentDealPicker.initialState.state);
export default reducerParentDealPicker;
//# sourceMappingURL=ReducerParentDealPicker.js.map