/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsAppCRM from '../actions/ActionsAppCRM';
import { defaultValues } from "../models/Models";
import { Enums } from '../Enums';
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as util from '../common/Util';
const reducerAppCRM = handleActions({
    // Internal thunk used in "AppCRM" container. Thunk chain dispatched to set context parameters.
    [actionsAppCRM.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { classifierDictionary: Object.assign({}, action.payload.classifierDictionary), currentExchangePerson: action.payload.currentExchangePerson, currentUser: action.payload.user, appBuildVersion: action.payload.appBuildVersion, appServerUrl: action.payload.appServerUrl, appServerPath: action.payload.appServerPath, isRefreshBarVisible: true });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to init CRM mobile application.
    [actionsAppCRM.PERFORM_APPLICATION_INIT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide/show error modal
    [actionsAppCRM.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalAppCRMError: action.payload.data });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to reload current list.
    [actionsAppCRM.PERFORM_CUSTOMER_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current organizational structure filter.
    [actionsAppCRM.PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE]: (state, action) => {
        return Object.assign({}, state, { inputFilterOrganizationStructure: action.payload.value });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current member role filter.
    [actionsAppCRM.PERFORM_INPUT_FILTER_MEMBER_ROLE]: (state, action) => {
        return Object.assign({}, state, { inputFilterMemberRole: action.payload.value });
    },
    // Internal thunk used in "AppCRM" container. Thunk dispatched on change filter to disable not valid filter values.
    [actionsAppCRM.VALIDATE_FILTER_LIST]: (state, action) => {
        return Object.assign({}, state, { disabledFilterOrganizationStructureList: defaultValues.FilterOrganizationStructureList /* TODO utils.getNotValidFilterOrganizationStructureList(state.inputFilterOrganizationStructure, state.inputFilterMemberRole) */, disabledFilterMemberRoleList: defaultValues.FilterMemberRoleList /* TODO utils.getNotValidFilterMemberRoleList(state.inputFilterOrganizationStructure, state.inputFilterMemberRole) */ });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH]: (state, action) => {
        return Object.assign({}, state, { currentPage: 0, customerManagedList: defaultValues.CustomerManagedList });
    },
    // Action dispatched on thunk chain "performCustomerManagedListRefresh" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: true, refreshError: null, isRefreshBarVisible: false });
    },
    // Action dispatched on success in thunk "performCustomerManagedListRefresh". Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { refresh: action.payload.data, refreshInProgress: false, refreshError: null, isRefreshBarVisible: true });
    },
    // Action dispatched on failure in thunk "performCustomerManagedListRefresh". Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { refreshInProgress: false, refreshError: action.payload.error, isRefreshBarVisible: true, isVisibleModalAppCRMError: true });
    },
    [actionsAppCRM.PERFORM_REFRESH_BAR_HIDE]: (state, action) => {
        return Object.assign({}, state, { isRefreshBarVisible: false });
    },
    // Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "refresh_callGetCustomerManagedList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerManagedListFetching: true, customerManagedListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetCustomerManagedList". Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerManagedList: action.payload.response.data, customerManagedListCachedDate: action.payload.response.cachedDate, customerManagedListFetching: false, customerManagedListError: null });
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetCustomerManagedList". Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerManagedListFetching: false, customerManagedListError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND]: (state, action) => {
        return Object.assign({}, state, { currentPage: state.currentPage + 1 });
    },
    // Action dispatched on thunk chain "performCustomerManagedListAppend" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { appendInProgress: true, appendError: null });
    },
    // Action dispatched on success in thunk "performCustomerManagedListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { append: action.payload.data, appendInProgress: false, appendError: null });
    },
    // Action dispatched on failure in thunk "performCustomerManagedListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE]: (state, action) => {
        return Object.assign({}, state, { appendInProgress: false, appendError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "append_callGetCustomerManagedList" started. Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerManagedListPageFetching: true, customerManagedListPageError: null });
    },
    // Action dispatched on fetch succeeded in thunk "append_callGetCustomerManagedList". Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerManagedListPage: action.payload.response.data, customerManagedListPageCachedDate: action.payload.response.cachedDate, customerManagedListPageFetching: false, customerManagedListPageError: null });
    },
    // Action dispatched on fetch failure in thunk "append_callGetCustomerManagedList". Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerManagedListPageFetching: false, customerManagedListPageError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer list.
    [actionsAppCRM.APPEND_CUSTOMER_MANAGED_LIST_CONCAT]: (state, action) => {
        return Object.assign({}, state, { customerManagedList: Object.assign({}, state.customerManagedList, { data: state.customerManagedList.data.concat(state.customerManagedListPage.data), isCompleted: state.customerManagedListPage.isLast == true }) });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to enter search mode
    [actionsAppCRM.PERFORM_SEARCH_MODE_ENABLE]: (state, action) => {
        return Object.assign({}, state, { isSearchMode: true });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to exit search mode
    [actionsAppCRM.PERFORM_SEARCH_MODE_DISABLE]: (state, action) => {
        return Object.assign({}, state, { isSearchMode: false, searchInProgress: false, customerSearchListFetching: false, customerSearchListError: null });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched on search input changed.
    [actionsAppCRM.PERFORM_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: action.payload.value });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to reset search parameters.
    [actionsAppCRM.PERFORM_SEARCH_RESET]: (state, action) => {
        return Object.assign({}, state, { inputSearch: '', customerSearchType: Enums.CustomerSearchType.Name });
    },
    // Internal thunk used in "AppCRM" container. Thunk chain used to reset search parameters.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_RESET]: (state, action) => {
        return Object.assign({}, state, { currentSearchPage: 0, customerSearchList: defaultValues.CustomerList, customerSearchError: '' });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: state.inputSearch.trim() });
    },
    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: true, searchError: null });
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { search: action.payload.data, searchInProgress: false, searchError: null });
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchInProgress: false, searchError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Internal thunk used in "AppCRM" container. Thunk used to perform search query validation and search type determination.
    [actionsAppCRM.SEARCH_VALIDATE_SEARCH]: (state, action) => {
        return Object.assign({}, state, { isSearchError: state.inputSearch.length < 3, customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '', customerSearchType: util.getCustomerSearchType(state.inputSearch) });
    },
    // Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: true, customerSearchListError: null });
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: action.payload.response.data, customerSearchListCachedDate: action.payload.response.cachedDate, customerSearchListFetching: false, customerSearchListError: null });
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListFetching: false, customerSearchListError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND]: (state, action) => {
        return Object.assign({}, state, { currentSearchPage: state.currentSearchPage + 1 });
    },
    // Action dispatched on thunk chain "performCustomerSearchListAppend" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { searchAppendInProgress: true, searchAppendError: null });
    },
    // Action dispatched on success in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { searchAppend: action.payload.data, searchAppendInProgress: false, searchAppendError: null });
    },
    // Action dispatched on failure in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE]: (state, action) => {
        return Object.assign({}, state, { searchAppendInProgress: false, searchAppendError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPageFetching: true, customerSearchListPageError: null });
    },
    // Action dispatched on fetch succeeded in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPage: action.payload.response.data, customerSearchListPageCachedDate: action.payload.response.cachedDate, customerSearchListPageFetching: false, customerSearchListPageError: null });
    },
    // Action dispatched on fetch failure in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { customerSearchListPageFetching: false, customerSearchListPageError: action.payload.error, isVisibleModalAppCRMError: true });
    },
    // Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer search list.
    [actionsAppCRM.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT]: (state, action) => {
        return Object.assign({}, state, { customerSearchList: Object.assign({}, state.customerSearchList, { data: state.customerSearchList.data.concat(state.customerSearchListPage.data), isCompleted: state.customerSearchListPage.isLast == true }) });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to open customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_OPEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to open GSZ screen.
    [actionsAppCRM.PERFORM_GSZ_OPEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppCRM" screen. Thunk chain used to open Deal screen.
    [actionsAppCRM.PERFORM_DEAL_OPEN]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "AppCRM" screen. Thunk used to navigate back in CRM mobile application.
    [actionsAppCRM.NAVIGATE_BACK]: (state, action) => {
        return Object.assign({}, state, { isRefreshBarVisible: true });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to reset container state to default values.
    [actionsAppCRM.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsAppCRM.initialState.state);
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to change searchType value in state.
    [actionsAppCRM.PERFORM_SEARCH_TYPE_CHANGE]: (state, action) => {
        return Object.assign({}, state, { customerSearchType: action.payload.customerSearchType });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to show loader on CRM page.
    [actionsAppCRM.NAVIGATION_LOADER_APP_CRM_SHOW]: (state, action) => {
        return Object.assign({}, state, { navigationInProgress: true });
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide loader on CRM page.
    [actionsAppCRM.NAVIGATION_LOADER_APP_CRM_HIDE]: (state, action) => {
        return Object.assign({}, state, { navigationInProgress: false });
    },
    [actionsAppCRM.PERFORM_SET_NAVIGATION_IN_PROGRESS]: (state, action) => {
        return Object.assign({}, state, { customerOpenInProgress: action.payload.customerOpenInProgress });
    },
}, ModelsAppCRM.initialState.state);
export default reducerAppCRM;
//# sourceMappingURL=ReducerAppCRM.js.map