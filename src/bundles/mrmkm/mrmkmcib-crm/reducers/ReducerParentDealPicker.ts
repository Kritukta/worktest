/*
 * Created by Gladkov E.N.
 */


import {handleActions} from 'redux-actions';
import * as actionsParentDealPicker from '../actions/ActionsParentDealPicker'
import {defaultValues} from "../models/Models"
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker'
import Action from '../models/Action'
import {EnumsCrm as Enums} from 'mrmkmcib-crm'
import * as Utils from '../common/Util'


const reducerParentDealPicker = handleActions<ModelsParentDealPicker.IParentDealPickerState>({

	[actionsParentDealPicker.SET_PARENT_DEAL_PICKER_MODE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.SET_PARENT_DEAL_PICKER_MODE>): ModelsParentDealPicker.IParentDealPickerState => {
		return {
			...state,
			parentDealPickerMode: action.payload.mode,
		}
	},

    [actionsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isRefreshBarVisible: true,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerList: action.payload.parentDealCustomerList,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SELECT]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SELECT>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomer: action.payload.parentDealCustomer,
            isParentDealCustomerSearchMode: false,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealCustomerSearchMode: true,
            parentDealCustomerInputSearch: '',
            parentDealCustomerSearchList: Utils.parentDealPickerCustomerSearchListFilter(state.parentDealCustomerList, ''),
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealCustomerSearchMode: false,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerInputSearch: action.payload.parentDealCustomerInputSearch,
        }
    },

    [actionsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealDealList: { data: [] },
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealDealListRefreshInProgress: true,
            parentDealDealListFetchError: null,
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealDealList: {
                data: action.payload.response.data.data || [],
            },
            isParentDealDealListRefreshInProgress: false,
            parentDealDealListFetchError: null,
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealDealListRefreshInProgress: false,
            parentDealDealListFetchError: action.payload.error,
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealDealListRefreshInProgress: false,
            parentDealDealListFetchError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_SELECT]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_SELECT>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            currentDeal:{
                ...state.currentDeal,
                parentDeal: action.payload.parentDealDeal,
            },
        }
    },

    [actionsParentDealPicker.NAVIGATE_BACK]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealCustomerSearchMode: false,
        }
    },










    [actionsParentDealPicker.PERFORM_FLUSH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_LIST_REFRESH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            currentPage: 0,
            customerManagedList: defaultValues.CustomerManagedList,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerListRefreshInProgress: true,
            refreshError: null,
            isRefreshBarVisible: false
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            refresh: action.payload.data,
            customerListRefreshInProgress: false,
            refreshError: null,
            isRefreshBarVisible: true
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerListRefreshInProgress: false,
            refreshError: action.payload.error,
            isRefreshBarVisible: true,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.PERFORM_REFRESH_BAR_HIDE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isRefreshBarVisible: false
        }
    },

    [actionsParentDealPicker.PERFORM_REFRESH_BAR_SHOW]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isRefreshBarVisible: true
        }
    },

    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedListFetching: true,
            customerManagedListError: null,
        }
    },

    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedList: action.payload.response.data,
            customerManagedListCachedDate: action.payload.response.cachedDate,
            customerManagedListFetching: false,
            customerManagedListError: null,
        }
    },

    [actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedListFetching: false,
            customerManagedListError: action.payload.error,
            isVisibleModalParentDealPickerError: true,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            currentPage: state.currentPage + 1,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerListAppendInProgress: true,
            appendError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            append: action.payload.data,
            customerListAppendInProgress: false,
            appendError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerListAppendInProgress: false,
            appendError: action.payload.error,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedListPageFetching: true,
            customerManagedListPageError: null,
        }
    },

    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedListPage: action.payload.response.data,
            customerManagedListPageCachedDate: action.payload.response.cachedDate,
            customerManagedListPageFetching: false,
            customerManagedListPageError: null,
        }
    },

    [actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedListPageFetching: false,
            customerManagedListPageError: action.payload.error,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.APPEND_CUSTOMER_MANAGED_LIST_CONCAT]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerManagedList: {
                ...state.customerManagedList,
                data: state.customerManagedList.data.concat(state.customerManagedListPage.data),
                isCompleted: state.customerManagedListPage.isLast == true
            },
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH_MODE_ENABLE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isSearchMode: true,
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH_MODE_DISABLE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isSearchMode: false,
        }
    },

    [actionsParentDealPicker.PERFORM_INPUT_SEARCH]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_INPUT_SEARCH>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerInputSearch: action.payload.value,
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH_RESET]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerInputSearch: '',
            customerSearchType: Enums.CustomerSearchType.Name,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_RESET]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            currentSearchPage: 0,
            parentDealCustomerSearchList: defaultValues.CustomerManagedList,
            customerSearchError: '',
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerInputSearch: state.parentDealCustomerInputSearch.trim(),
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH_EXECUTE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealCustomerSearchInProgress: true,
            searchError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_SEARCH_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            search: action.payload.data,
            isParentDealCustomerSearchInProgress: false,
            searchError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_SEARCH_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_SEARCH_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isParentDealCustomerSearchInProgress: false,
            searchError: action.payload.error,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.SEARCH_VALIDATE_SEARCH]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            isCustomerListSearchError: state.parentDealCustomerInputSearch.length < 3,
            customerSearchError: state.parentDealCustomerInputSearch.length < 3 ? 'Введите не менее 3-х символов' : '',
            customerSearchType: Utils.getCustomerSearchType(state.parentDealCustomerInputSearch),
        }
    },

    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerSearchListFetching: true,
            customerSearchListError: null,
        }
    },

    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerSearchList: action.payload.response.data,
            customerSearchListCachedDate: action.payload.response.cachedDate,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },

    [actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: action.payload.error,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            currentSearchPage: state.currentSearchPage + 1,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            searchAppendInProgress: true,
            searchAppendError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            searchAppend: action.payload.data,
            searchAppendInProgress: false,
            searchAppendError: null,
        }
    },

    [actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            searchAppendInProgress: false,
            searchAppendError: action.payload.error,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
        }
    },

    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerSearchListPageFetching: true,
            customerSearchListPageError: null,
        }
    },

    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerSearchListPage: action.payload.response.data,
            customerSearchListPageCachedDate: action.payload.response.cachedDate,
            customerSearchListPageFetching: false,
            customerSearchListPageError: null,
        }
    },

    [actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE]: (state: ModelsParentDealPicker.IParentDealPickerState, action: Action<actionsParentDealPicker.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE>): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            customerSearchListPageFetching: false,
            customerSearchListPageError: action.payload.error,
            isVisibleModalParentDealPickerError: true
        }
    },

    [actionsParentDealPicker.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT]: (state: ModelsParentDealPicker.IParentDealPickerState): ModelsParentDealPicker.IParentDealPickerState => {
        return {
            ...state,
            parentDealCustomerSearchList: {
                ...state.parentDealCustomerSearchList,
                data: state.parentDealCustomerSearchList.data.concat(state.customerSearchListPage.data),
                isCompleted: state.customerSearchListPage.isLast == true
            },
        }
    },

}, ModelsParentDealPicker.initialState.state)

export default reducerParentDealPicker
