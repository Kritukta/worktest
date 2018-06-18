/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsAppCRM from '../actions/ActionsAppCRM'
import {defaultValues} from "../models/Models"
import {Enums} from '../Enums'
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import Action from "../models/Action"

import * as util from '../common/Util'
import * as actionsCustomer from "../actions/ActionsCustomer";
import * as ModelsCustomer from "../models/ModelsCustomer";


const reducerAppCRM = handleActions<ModelsAppCRM.IAppCRMState>({

    // Internal thunk used in "AppCRM" container. Thunk chain dispatched to set context parameters.
    [actionsAppCRM.SWAP_CONTEXT]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SWAP_CONTEXT>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            classifierDictionary: {...action.payload.classifierDictionary},
            currentExchangePerson: action.payload.currentExchangePerson,
            currentUser: action.payload.user,
            appBuildVersion: action.payload.appBuildVersion,
            appServerUrl: action.payload.appServerUrl,
            appServerPath: action.payload.appServerPath,
            isRefreshBarVisible: true
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to init CRM mobile application.
    [actionsAppCRM.PERFORM_APPLICATION_INIT]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_APPLICATION_INIT>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide/show error modal
    [actionsAppCRM.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            isVisibleModalAppCRMError: action.payload.data
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to reload current list.
    [actionsAppCRM.PERFORM_CUSTOMER_LIST_REFRESH]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_LIST_REFRESH>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current organizational structure filter.
    [actionsAppCRM.PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            inputFilterOrganizationStructure: action.payload.value,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current member role filter.
    [actionsAppCRM.PERFORM_INPUT_FILTER_MEMBER_ROLE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_INPUT_FILTER_MEMBER_ROLE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            inputFilterMemberRole: action.payload.value,
        }
    },

    // Internal thunk used in "AppCRM" container. Thunk dispatched on change filter to disable not valid filter values.
    [actionsAppCRM.VALIDATE_FILTER_LIST]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.VALIDATE_FILTER_LIST>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            disabledFilterOrganizationStructureList: defaultValues.FilterOrganizationStructureList /* TODO utils.getNotValidFilterOrganizationStructureList(state.inputFilterOrganizationStructure, state.inputFilterMemberRole) */,
            disabledFilterMemberRoleList: defaultValues.FilterMemberRoleList /* TODO utils.getNotValidFilterMemberRoleList(state.inputFilterOrganizationStructure, state.inputFilterMemberRole) */,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            currentPage: 0,
            customerManagedList: defaultValues.CustomerManagedList,
        }
    },

    // Action dispatched on thunk chain "performCustomerManagedListRefresh" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            refreshInProgress: true,
            refreshError: null,
            isRefreshBarVisible: false
        }
    },
    // Action dispatched on success in thunk "performCustomerManagedListRefresh". Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            refresh: action.payload.data,
            refreshInProgress: false,
            refreshError: null,
            isRefreshBarVisible: true
        }
    },
    // Action dispatched on failure in thunk "performCustomerManagedListRefresh". Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            refreshInProgress: false,
            refreshError: action.payload.error,
            isRefreshBarVisible: true,
            isVisibleModalAppCRMError: true
        }
    },

    [actionsAppCRM.PERFORM_REFRESH_BAR_HIDE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_REFRESH_BAR_HIDE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            isRefreshBarVisible: false
        }
    },

    // Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "refresh_callGetCustomerManagedList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedListFetching: true,
            customerManagedListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetCustomerManagedList". Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedList: action.payload.response.data,
            customerManagedListCachedDate: action.payload.response.cachedDate,
            customerManagedListFetching: false,
            customerManagedListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetCustomerManagedList". Internal thunk used in "AppCRM" container. Fetch customer list current page.
    [actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedListFetching: false,
            customerManagedListError: action.payload.error,
            isVisibleModalAppCRMError: true,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            currentPage: state.currentPage + 1,
        }
    },

    // Action dispatched on thunk chain "performCustomerManagedListAppend" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            appendInProgress: true,
            appendError: null,
        }
    },
    // Action dispatched on success in thunk "performCustomerManagedListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            append: action.payload.data,
            appendInProgress: false,
            appendError: null,
        }
    },
    // Action dispatched on failure in thunk "performCustomerManagedListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
    [actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            appendInProgress: false,
            appendError: action.payload.error,
            isVisibleModalAppCRMError: true
        }
    },

    // Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "append_callGetCustomerManagedList" started. Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedListPageFetching: true,
            customerManagedListPageError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "append_callGetCustomerManagedList". Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedListPage: action.payload.response.data,
            customerManagedListPageCachedDate: action.payload.response.cachedDate,
            customerManagedListPageFetching: false,
            customerManagedListPageError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "append_callGetCustomerManagedList". Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
    [actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedListPageFetching: false,
            customerManagedListPageError: action.payload.error,
            isVisibleModalAppCRMError: true
        }
    },

    // Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer list.
    [actionsAppCRM.APPEND_CUSTOMER_MANAGED_LIST_CONCAT]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.APPEND_CUSTOMER_MANAGED_LIST_CONCAT>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerManagedList: {
                ...state.customerManagedList,
                data: state.customerManagedList.data.concat(state.customerManagedListPage.data),
                isCompleted: state.customerManagedListPage.isLast == true
            },
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to enter search mode
    [actionsAppCRM.PERFORM_SEARCH_MODE_ENABLE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH_MODE_ENABLE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            isSearchMode: true,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to exit search mode
    [actionsAppCRM.PERFORM_SEARCH_MODE_DISABLE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH_MODE_DISABLE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            isSearchMode: false,
            searchInProgress:false,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched on search input changed.
    [actionsAppCRM.PERFORM_INPUT_SEARCH]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_INPUT_SEARCH>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            inputSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to reset search parameters.
    [actionsAppCRM.PERFORM_SEARCH_RESET]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH_RESET>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            inputSearch: '',
            customerSearchType: Enums.CustomerSearchType.Name,
        }
    },

    // Internal thunk used in "AppCRM" container. Thunk chain used to reset search parameters.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_RESET]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_RESET>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            currentSearchPage: 0,
            customerSearchList: defaultValues.CustomerList,
            customerSearchError: '',
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            inputSearch: state.inputSearch.trim(),
        }
    },

    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH_EXECUTE]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            searchInProgress: true,
            searchError: null,
        }
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            search: action.payload.data,
            searchInProgress: false,
            searchError: null,
        }
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
    [actionsAppCRM.PERFORM_SEARCH_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            searchInProgress: false,
            searchError: action.payload.error,
            isVisibleModalAppCRMError: true
        }
    },

    // Internal thunk used in "AppCRM" container. Thunk used to perform search query validation and search type determination.
    [actionsAppCRM.SEARCH_VALIDATE_SEARCH]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_VALIDATE_SEARCH>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            isSearchError: state.inputSearch.length < 3,
            customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '',
            customerSearchType: util.getCustomerSearchType(state.inputSearch),
        }
    },

    // Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchListFetching: true,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchList: action.payload.response.data,
            customerSearchListCachedDate: action.payload.response.cachedDate,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: action.payload.error,
            isVisibleModalAppCRMError: true
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            currentSearchPage: state.currentSearchPage + 1,
        }
    },

    // Action dispatched on thunk chain "performCustomerSearchListAppend" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            searchAppendInProgress: true,
            searchAppendError: null,
        }
    },
    // Action dispatched on success in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            searchAppend: action.payload.data,
            searchAppendInProgress: false,
            searchAppendError: null,
        }
    },
    // Action dispatched on failure in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            searchAppendInProgress: false,
            searchAppendError: action.payload.error,
            isVisibleModalAppCRMError: true
        }
    },

    // Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST]: (state: ModelsAppCRM.IAppCRMState, action: Action<void>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchListPageFetching: true,
            customerSearchListPageError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchListPage: action.payload.response.data,
            customerSearchListPageCachedDate: action.payload.response.cachedDate,
            customerSearchListPageFetching: false,
            customerSearchListPageError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
    [actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchListPageFetching: false,
            customerSearchListPageError: action.payload.error,
            isVisibleModalAppCRMError: true
        }
    },

    // Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer search list.
    [actionsAppCRM.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchList: {
                ...state.customerSearchList,
                data: state.customerSearchList.data.concat(state.customerSearchListPage.data),
                isCompleted: state.customerSearchListPage.isLast == true
            },
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to open customer screen.
    [actionsAppCRM.PERFORM_CUSTOMER_OPEN]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CUSTOMER_OPEN>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to open GSZ screen.
    [actionsAppCRM.PERFORM_GSZ_OPEN]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_GSZ_OPEN>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk chain used to open Deal screen.
    [actionsAppCRM.PERFORM_DEAL_OPEN]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_DEAL_OPEN>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk used to navigate back in CRM mobile application.
    [actionsAppCRM.NAVIGATE_BACK]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.NAVIGATE_BACK>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            isRefreshBarVisible: true
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to reset container state to default values.
    [actionsAppCRM.PERFORM_CONTAINER_RESET]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_CONTAINER_RESET>): ModelsAppCRM.IAppCRMState => {
        return {
            ...ModelsAppCRM.initialState.state,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to change searchType value in state.
    [actionsAppCRM.PERFORM_SEARCH_TYPE_CHANGE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SEARCH_TYPE_CHANGE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerSearchType: action.payload.customerSearchType,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to show loader on CRM page.
    [actionsAppCRM.NAVIGATION_LOADER_APP_CRM_SHOW]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.NAVIGATION_LOADER_APP_CRM_SHOW>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            navigationInProgress: true,
        }
    },

    // Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide loader on CRM page.
    [actionsAppCRM.NAVIGATION_LOADER_APP_CRM_HIDE]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.NAVIGATION_LOADER_APP_CRM_HIDE>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            navigationInProgress: false,
        }
    },

    [actionsAppCRM.PERFORM_SET_NAVIGATION_IN_PROGRESS]: (state: ModelsAppCRM.IAppCRMState, action: Action<actionsAppCRM.PERFORM_SET_NAVIGATION_IN_PROGRESS>): ModelsAppCRM.IAppCRMState => {
        return {
            ...state,
            customerOpenInProgress: action.payload.customerOpenInProgress,
        }
    },

}, ModelsAppCRM.initialState.state)

export default reducerAppCRM
