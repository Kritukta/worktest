/*
 * Created by Gladkov E.N.
 */
import * as _ from 'lodash';
import { EnumsCrm } from 'mrmkmcib-crm';
import * as Converters from '../models/Converters';
import * as Utils from '../common/Util';
import * as actionsParentDealPicker from '../actions/ActionsParentDealPicker';
import * as thunkDealEditor from '../thunk/ThunkDealEditor';
import * as thunkParentDealPicker from '../thunk/ThunkParentDealPicker';
import { SplitPanelActions } from 'ufs-mobile-platform';
import * as Cache from '../modules/Cache';
import { Enums } from '../Enums';
export const navigateToParentDealCustomerListScreen = (mode) => (dispatch) => {
    dispatch(actionsParentDealPicker.navigateToParentDealCustomerListScreen());
    dispatch(thunkParentDealPicker.setParentDealPickerMode(mode));
    // Stop waiting for previous DealList response if any
    dispatch(thunkParentDealPicker.callGetParentDealDealListBreak());
    dispatch(thunkParentDealPicker.performParentDealCustomerListRefresh());
    // Navigate to ParentDealPicker, and hence
    // to it's first page EnumsCrm.NavigationContentParentDealPicker.CustomerPickerScreen
    dispatch(SplitPanelActions.pushContent(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker, Utils.getNavigationContentString(EnumsCrm.NavigationContentAppCrm.AppCRM_DealEditor)));
};
export const setParentDealPickerMode = (mode) => (dispatch) => {
    dispatch(actionsParentDealPicker.setParentDealPickerMode(mode));
};
export const callGetParentDealDealListBreak = () => (dispatch) => {
    dispatch(actionsParentDealPicker.callGetParentDealDealListBreak());
};
export const performParentDealCustomerListRefresh = () => (dispatch, getState) => {
    let state = getState();
    let parentDealCustomerList = state.user.mrmkmcibCRM.reducerAppCRM.customerManagedList;
    dispatch(actionsParentDealPicker.performParentDealCustomerListRefresh(parentDealCustomerList));
};
export const performParentDealCustomerListAppend = () => (dispatch, getState) => {
    let state = getState();
    let parentDealCustomerList = state.user.mrmkmcibCRM.reducerAppCRM.customerManagedList;
    dispatch(actionsParentDealPicker.performParentDealCustomerListRefresh(parentDealCustomerList));
};
export const performParentDealCustomerSearch = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performParentDealCustomerSearch());
    dispatch(thunkParentDealPicker.performSearch());
};
export const performParentDealCustomerInputSearch = (parentDealCustomerInputSearch) => (dispatch) => {
    dispatch(actionsParentDealPicker.performParentDealCustomerInputSearch(parentDealCustomerInputSearch));
};
export const performParentDealCustomerSearchModeDisable = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performParentDealCustomerSearchModeDisable());
};
export const performParentDealCustomerSearchModeEnable = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performParentDealCustomerSearchModeEnable());
};
export const performParentDealCustomerSelect = (parentDealCustomer) => (dispatch) => {
    dispatch(actionsParentDealPicker.performParentDealCustomerSelect(parentDealCustomer));
};
export const navigateToParentDealDealListScreen = (parentDealCustomer) => (dispatch, getState) => {
    if (getState().user.mrmkmcibCRM.reducerParentDealPicker.parentDealPickerMode === Enums.ParentDealPickerMode.Customer) {
        dispatch(thunkDealEditor.performInputCustomer(parentDealCustomer));
        dispatch(thunkDealEditor.performValidateForm(null));
        dispatch(thunkParentDealPicker.navigateBack());
    }
    else {
        dispatch(thunkParentDealPicker.performParentDealCustomerSelect(parentDealCustomer));
        dispatch(thunkParentDealPicker.callGetParentDealDealList(parentDealCustomer));
        dispatch(SplitPanelActions.pushContent(EnumsCrm.NavigationContentParentDealPicker.DealPickerScreen, Utils.getNavigationAppCrmDealEditorString(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker)));
        dispatch(actionsParentDealPicker.navigateToParentDealDealListScreen());
    }
};
export const performParentDealDealListRefresh = () => (dispatch, getState) => {
    let state = getState();
    let parentDealCustomer = state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealCustomer;
    dispatch(actionsParentDealPicker.performParentDealDealListRefresh());
    dispatch(thunkParentDealPicker.callGetParentDealDealList(parentDealCustomer));
};
export const callGetParentDealDealListClean = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.callGetParentDealDealListClean());
};
export const callGetParentDealDealListIgnore = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.callGetParentDealDealListIgnore());
};
export const callGetParentDealDealList = (parentDealCustomer) => (dispatch, getState) => {
    const reducerParentDealPicker = getState().user.mrmkmcibCRM.reducerParentDealPicker;
    const customerId = reducerParentDealPicker.parentDealCustomer.id;
    dispatch(actionsParentDealPicker.callGetParentDealDealList());
    if (!reducerParentDealPicker.isParentDealDealListRefreshInProgress) {
        dispatch(thunkParentDealPicker.callGetParentDealDealListClean());
        dispatch(actionsParentDealPicker.callGetParentDealDealListRequest());
        Utils.call(Utils.urlDealEditor.callGetParentDealDealList(getState(), reducerParentDealPicker, [
            { tag: EnumsCrm.CachePolicy.Disabled },
        ]), (response) => {
            if (getState().user.mrmkmcibCRM.reducerParentDealPicker.parentDealCustomer.id !== customerId) {
                // Ignore too old response for obsolete customerId.
                dispatch(thunkParentDealPicker.callGetParentDealDealListIgnore());
                return;
            }
            // Apply deal list response. No problem if applied multiple times for same customerId.
            dispatch(actionsParentDealPicker.callGetParentDealDealListSuccess(response));
        }, (error) => {
            dispatch(actionsParentDealPicker.callGetParentDealDealListFailure(error));
        }, Converters.RESPONSE_CALL_GET_PARENT_DEAL_DEAL_LIST, 'GET');
    }
};
export const performParentDealDealSelect = (parentDealDeal) => (dispatch) => {
    dispatch(actionsParentDealPicker.performParentDealDealSelect(parentDealDeal));
    dispatch(thunkDealEditor.performParentDealSet(parentDealDeal));
    dispatch(thunkParentDealPicker.navigateBack());
};
export const navigateBack = () => (dispatch) => {
    dispatch(actionsParentDealPicker.navigateBack());
    // Reset ParentDealPicker navigation stack
    dispatch(SplitPanelActions.popContent(Utils.getNavigationAppCrmDealEditorString(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker)));
    // Return back to DealEditor
    dispatch(thunkDealEditor.navigateBack());
};
export const performCustomerListRefresh = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.performCustomerListRefresh());
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.isParentDealCustomerSearchMode) {
        dispatch(thunkParentDealPicker.performSearch());
    }
    else {
        dispatch(thunkParentDealPicker.performCustomerManagedListRefresh());
    }
};
export const performCustomerManagedListRefreshExecute = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.performCustomerManagedListRefreshExecute());
};
export const performCustomerManagedListRefresh = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.customerListRefreshInProgress) {
        return;
    }
    dispatch(actionsParentDealPicker.performCustomerManagedListRefresh());
    if (!reducerState.customerListRefreshInProgress) {
        dispatch(thunkParentDealPicker.performCustomerManagedListRefreshExecute());
        // Dispatch thunk "refresh_callGetCustomerManagedList" synchronously.
        dispatch(thunkParentDealPicker.refresh_callGetCustomerManagedList());
    }
};
export const performCustomerManagedListRefreshSuccess = (data) => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerManagedListRefreshSuccess(data));
};
export const performCustomerManagedListRefreshFailure = (error) => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerManagedListRefreshFailure(error));
};
export const refresh_callGetCustomerManagedList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.customerManagedListFetching) {
        return;
    }
    dispatch(actionsParentDealPicker.refresh_callGetCustomerManagedList());
    if (!reducerState.customerManagedListFetching) {
        dispatch(actionsParentDealPicker.refresh_callGetCustomerManagedListRequest());
        Utils.call(Utils.urlParentDealPeaker.refresh_callGetCustomerManagedList(state, state.user.mrmkmcibCRM.reducerAppCRM, reducerState, [
            { tag: EnumsCrm.CachePolicy.Default },
            { tag: Utils.getAppCRMCustomerManagedListRequestRefreshString(EnumsCrm.AppCRMCustomerManagedListRequestRefresh.AppCRMCustomerManagedListRequestRefreshEnabled) }
        ]), (response) => {
            dispatch(actionsParentDealPicker.refresh_callGetCustomerManagedListSuccess(response));
            // Dispatch thunk "performCustomerManagedListRefreshSuccess" on fetch succeeded.
            dispatch(thunkParentDealPicker.performCustomerManagedListRefreshSuccess(true));
        }, (error) => {
            dispatch(actionsParentDealPicker.refresh_callGetCustomerManagedListFailure(error));
            // Dispatch thunk "performCustomerManagedListRefreshFailure" on fetch failure.
            dispatch(thunkParentDealPicker.performCustomerManagedListRefreshFailure(error));
        }, Converters.RESPONSE_PARENT_DEAL_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST, 'GET');
    }
};
export const performCustomerManagedListAppendExecute = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.performCustomerManagedListAppendExecute());
};
export const performCustomerManagedListAppend = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.customerListAppendInProgress) {
        return;
    }
    dispatch(actionsParentDealPicker.performCustomerManagedListAppend());
    if (!reducerState.customerListAppendInProgress) {
        dispatch(thunkParentDealPicker.performCustomerManagedListAppendExecute());
        // Dispatch thunk "append_callGetCustomerManagedList" synchronously.
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
        if (reducerState.customerManagedList.isCompleted == false) {
            dispatch(thunkParentDealPicker.append_callGetCustomerManagedList());
        }
        // Dispatch thunk "performCustomerManagedListAppendSuccess" synchronously.
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
        if (reducerState.customerManagedList.isCompleted == true) {
            dispatch(thunkParentDealPicker.performCustomerManagedListAppendSuccess(true));
        }
    }
};
export const performCustomerManagedListAppendSuccess = (data) => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerManagedListAppendSuccess(data));
};
export const performCustomerManagedListAppendFailure = (error) => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerManagedListAppendFailure(error));
};
export const append_callGetCustomerManagedList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.customerManagedListPageFetching) {
        return;
    }
    dispatch(actionsParentDealPicker.append_callGetCustomerManagedList());
    if (!reducerState.customerManagedListPageFetching) {
        dispatch(actionsParentDealPicker.append_callGetCustomerManagedListRequest());
        Utils.call(Utils.urlParentDealPeaker.append_callGetCustomerManagedList(state, state.user.mrmkmcibCRM.reducerAppCRM, reducerState, [{ tag: EnumsCrm.CachePolicy.Default }]), (response) => {
            dispatch(actionsParentDealPicker.append_callGetCustomerManagedListSuccess(response));
            // Dispatch thunk "append_customerManagedListConcat" on fetch succeeded.
            dispatch(thunkParentDealPicker.append_customerManagedListConcat());
        }, (error) => {
            dispatch(actionsParentDealPicker.append_callGetCustomerManagedListFailure(error));
            // Dispatch thunk "performCustomerManagedListAppendFailure" on fetch failure.
            dispatch(thunkParentDealPicker.performCustomerManagedListAppendFailure(error));
        }, Converters.RESPONSE_PARENT_DEAL_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST_PAGE, 'GET');
    }
};
export const append_customerManagedListConcat = () => (dispatch) => {
    dispatch(actionsParentDealPicker.append_customerManagedListConcat());
    // Dispatch thunk "performCustomerManagedListAppendSuccess" synchronously.
    dispatch(thunkParentDealPicker.performCustomerManagedListAppendSuccess(true));
};
export const performSearchModeEnable = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performSearchModeEnable());
    // Dispatch thunk "performSearchReset" synchronously.
    dispatch(thunkParentDealPicker.performSearchReset());
};
export const performSearchModeDisable = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performSearchModeDisable());
    // Dispatch thunk "performSearchReset" synchronously.
    dispatch(thunkParentDealPicker.performSearchReset());
};
export const performInputSearch = (value) => (dispatch) => {
    dispatch(actionsParentDealPicker.performInputSearch(value));
};
export const performSearchReset = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performSearchReset());
    // Dispatch thunk "performCustomerSearchListReset" synchronously.
    dispatch(thunkParentDealPicker.performCustomerSearchListReset());
};
export const performCustomerSearchListReset = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerSearchListReset());
};
export const performSearchExecute = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.performSearchExecute());
};
export const performSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.isParentDealCustomerSearchInProgress) {
        return;
    }
    dispatch(actionsParentDealPicker.performSearch());
    if (!reducerState.isParentDealCustomerSearchInProgress) {
        dispatch(thunkParentDealPicker.performSearchExecute());
        // Dispatch thunk "performCustomerSearchListReset" synchronously.
        dispatch(thunkParentDealPicker.performCustomerSearchListReset());
        // Dispatch thunk "search_validateSearch" synchronously.
        dispatch(thunkParentDealPicker.search_validateSearch());
    }
};
export const performSearchSuccess = (data) => (dispatch) => {
    dispatch(actionsParentDealPicker.performSearchSuccess(data));
};
export const performSearchFailure = (error) => (dispatch) => {
    dispatch(actionsParentDealPicker.performSearchFailure(error));
};
export const search_validateSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    dispatch(actionsParentDealPicker.search_validateSearch());
    // Dispatch thunk "performSearchFailure" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.isCustomerListSearchError == true) {
        dispatch(thunkParentDealPicker.performSearchFailure({
            type: EnumsCrm.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }));
    }
    // Dispatch thunk "search_callGetCustomerSearchList" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.isCustomerListSearchError == false) {
        dispatch(thunkParentDealPicker.search_callGetCustomerSearchList());
    }
};
export const search_callGetCustomerSearchList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.customerSearchListFetching) {
        return;
    }
    dispatch(actionsParentDealPicker.search_callGetCustomerSearchList());
    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsParentDealPicker.search_callGetCustomerSearchListRequest());
        Utils.call(Utils.urlParentDealPeaker.search_callGetCustomerSearchList(state, state.user.mrmkmcibCRM.reducerAppCRM, reducerState, [{ tag: EnumsCrm.CachePolicy.Disabled }]), (response) => {
            if (_.isEmpty(response.data.data) && reducerState.customerSearchType === EnumsCrm.CustomerSearchType.Account) {
                // Если поиск по маске AccountId не дал результатов
                let searchByIdError = {
                    type: EnumsCrm.ErrorType.Unknown,
                    message: 'Ничего не найдено по ID организации CRM',
                    code: '',
                    comment: 'Ничего не найдено по ID организации CRM'
                };
                dispatch(actionsParentDealPicker.search_callGetCustomerSearchListFailure(searchByIdError));
                dispatch(thunkParentDealPicker.performSearchFailure(searchByIdError));
                dispatch(thunkParentDealPicker.search_callGetCustomerSearchList());
            }
            else if (_.isEmpty(response.data.data)) {
                // if response body empty => Dispatch thunk "performSearchFailure" on fetch failure.
                const searchError = {
                    type: EnumsCrm.ErrorType.Unknown,
                    code: '',
                    message: 'Проверьте корректность запроса или выставленные фильтры.',
                    comment: 'Ничего не найдено.',
                };
                dispatch(actionsParentDealPicker.search_callGetCustomerSearchListFailure(searchError));
                // Dispatch thunk "performSearchFailure" on fetch failure.
                dispatch(thunkParentDealPicker.performSearchFailure(searchError));
                return;
            }
            else {
                // if response body not empty
                dispatch(actionsParentDealPicker.search_callGetCustomerSearchListSuccess(response));
                // Dispatch thunk "performSearchSuccess" on fetch succeeded.
                dispatch(thunkParentDealPicker.performSearchSuccess(true));
            }
        }, (error) => {
            dispatch(actionsParentDealPicker.search_callGetCustomerSearchListFailure(error));
            // Dispatch thunk "performSearchFailure" on fetch failure.
            dispatch(thunkParentDealPicker.performSearchFailure(error));
        }, Converters.RESPONSE_PARENT_DEAL_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST, 'GET');
    }
};
export const performCustomerSearchListAppendExecute = () => (dispatch, getState) => {
    dispatch(actionsParentDealPicker.performCustomerSearchListAppendExecute());
};
export const performCustomerSearchListAppend = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.searchAppendInProgress) {
        return;
    }
    dispatch(actionsParentDealPicker.performCustomerSearchListAppend());
    if (!reducerState.searchAppendInProgress) {
        dispatch(thunkParentDealPicker.performCustomerSearchListAppendExecute());
        // Dispatch thunk "searchAppend_callGetCustomerSearchListPage" synchronously.
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
        if (reducerState.parentDealCustomerSearchList.isCompleted == false) {
            dispatch(thunkParentDealPicker.searchAppend_callGetCustomerSearchListPage());
        }
        // Dispatch thunk "performCustomerSearchListAppendSuccess" synchronously.
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
        if (reducerState.parentDealCustomerSearchList.isCompleted == true) {
            dispatch(thunkParentDealPicker.performCustomerSearchListAppendSuccess(true));
        }
    }
};
export const performCustomerSearchListAppendSuccess = (data) => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerSearchListAppendSuccess(data));
};
export const performCustomerSearchListAppendFailure = (error) => (dispatch) => {
    dispatch(actionsParentDealPicker.performCustomerSearchListAppendFailure(error));
};
export const searchAppend_callGetCustomerSearchListPage = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.customerSearchListPageFetching) {
        return;
    }
    dispatch(actionsParentDealPicker.searchAppend_callGetCustomerSearchListPage());
    if (!reducerState.customerSearchListPageFetching) {
        dispatch(actionsParentDealPicker.searchAppend_callGetCustomerSearchListPageRequest());
        Utils.call(Utils.urlParentDealPeaker.searchAppend_callGetCustomerSearchListPage(state, state.user.mrmkmcibCRM.reducerAppCRM, reducerState, [{ tag: EnumsCrm.CachePolicy.Default }]), (response) => {
            dispatch(actionsParentDealPicker.searchAppend_callGetCustomerSearchListPageSuccess(response));
            // Dispatch thunk "searchAppend_customerSearchListConcat" on fetch succeeded.
            dispatch(thunkParentDealPicker.searchAppend_customerSearchListConcat());
        }, (error) => {
            dispatch(actionsParentDealPicker.searchAppend_callGetCustomerSearchListPageFailure(error));
            // Dispatch thunk "performCustomerSearchListAppendFailure" on fetch failure.
            dispatch(thunkParentDealPicker.performCustomerSearchListAppendFailure(error));
        }, Converters.RESPONSE_PARENT_DEAL_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE, 'GET');
    }
};
export const searchAppend_customerSearchListConcat = () => (dispatch) => {
    dispatch(actionsParentDealPicker.searchAppend_customerSearchListConcat());
    // Dispatch thunk "performCustomerSearchListAppendSuccess" synchronously.
    dispatch(thunkParentDealPicker.performCustomerSearchListAppendSuccess(true));
};
export const performContainerReset = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performContainerReset());
};
export const navigationLoaderAppCRMShow = () => (dispatch) => {
    dispatch(actionsParentDealPicker.navigationLoaderAppCRMShow());
};
export const navigationLoaderAppCRMHide = () => (dispatch) => {
    dispatch(actionsParentDealPicker.navigationLoaderAppCRMHide());
};
export const performCustomerListAppend = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerParentDealPicker;
    if (reducerState.isParentDealCustomerSearchMode) {
        dispatch(performCustomerSearchListAppend());
    }
    else {
        dispatch(performCustomerManagedListAppend());
    }
};
export const performRefreshBarHide = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performRefreshBarHide());
};
export const performRefreshBarShow = () => (dispatch) => {
    dispatch(actionsParentDealPicker.performRefreshBarShow());
};
export const performFlush = () => (dispatch) => {
    Cache.sessionResetTag({ tag: Utils.getAppCRMCustomerManagedListRequestRefreshString(EnumsCrm.AppCRMCustomerManagedListRequestRefresh.AppCRMCustomerManagedListRequestRefreshEnabled) });
    dispatch(actionsParentDealPicker.performFlush());
    dispatch(thunkParentDealPicker.performCustomerListRefresh());
};
//# sourceMappingURL=ThunkParentDealPicker.js.map