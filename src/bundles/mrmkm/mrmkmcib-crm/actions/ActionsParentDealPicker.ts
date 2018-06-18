/**
 * Actions of ParentDealPicker container.
 *
 * @author Gladkov E.N.
 */

import {Models} from 'mrmkmcib-crm'
import Action from '../models/Action'
import Response from '../models/Response'
import Error from '../models/Error'
import { Enums } from '../Enums'

export const NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN = 'PARENT_DEAL_CONTAINER_NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN'
export const PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH'
export const PERFORM_PARENT_DEAL_CUSTOMER_SELECT = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SELECT'
export const PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE'
export const PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE'
export const PERFORM_PARENT_DEAL_CUSTOMER_SEARCH = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SEARCH'
export const PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH'

export const NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN = 'PARENT_DEAL_CONTAINER_NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN'
export const PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH'
export const CALL_GET_PARENT_DEAL_DEAL_LIST = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST'
export const CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN'
export const CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST'
export const CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS'
export const CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE'
export const CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE'
export const CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK = 'PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK'
export const PERFORM_PARENT_DEAL_DEAL_SELECT = 'PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_DEAL_SELECT'

export const NAVIGATE_BACK = 'PARENT_DEAL_CONTAINER_NAVIGATE_BACK'

export const PERFORM_CUSTOMER_LIST_REFRESH = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_LIST_REFRESH'

export const PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE = 'PARENT_DEAL_CONTAINER_PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE'

export const PERFORM_INPUT_FILTER_MEMBER_ROLE = 'PARENT_DEAL_CONTAINER_PERFORM_INPUT_FILTER_MEMBER_ROLE'

export const VALIDATE_FILTER_LIST = 'PARENT_DEAL_CONTAINER_VALIDATE_FILTER_LIST'

export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH'
export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE'
export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS'
export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE'

export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = 'PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST'
export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = 'PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST'
export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = 'PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS'
export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = 'PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE'

export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND'
export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE'
export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS'
export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE'

export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = 'PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST'
export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = 'PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST'
export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = 'PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS'
export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = 'PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE'

export const APPEND_CUSTOMER_MANAGED_LIST_CONCAT = 'PARENT_DEAL_CONTAINER_APPEND_CUSTOMER_MANAGED_LIST_CONCAT'

export const PERFORM_SEARCH_MODE_ENABLE = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_MODE_ENABLE'

export const PERFORM_SEARCH_MODE_DISABLE = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_MODE_DISABLE'

export const PERFORM_INPUT_SEARCH = 'PARENT_DEAL_CONTAINER_PERFORM_INPUT_SEARCH'

export const PERFORM_SEARCH_RESET = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_RESET'

export const PERFORM_CUSTOMER_SEARCH_LIST_RESET = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_RESET'

export const PERFORM_SEARCH = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH'
export const PERFORM_SEARCH_EXECUTE = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_EXECUTE'
export const PERFORM_SEARCH_SUCCESS = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_SUCCESS'
export const PERFORM_SEARCH_FAILURE = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_FAILURE'

export const SEARCH_VALIDATE_SEARCH = 'PARENT_DEAL_CONTAINER_SEARCH_VALIDATE_SEARCH'

export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE'

export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = 'PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE'

export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = 'PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = 'PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = 'PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = 'PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE'

export const SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = 'PARENT_DEAL_CONTAINER_SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT'

export const PERFORM_CONTAINER_RESET = 'PARENT_DEAL_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_FLUSH = 'PARENT_DEAL_CONTAINER_PERFORM_FLUSH'

export const PERFORM_REFRESH_BAR_HIDE = 'PARENT_DEAL_CONTAINER_PERFORM_REFRESH_BAR_HIDE'
export const PERFORM_REFRESH_BAR_SHOW = 'PARENT_DEAL_CONTAINER_PERFORM_REFRESH_BAR_SHOW'

export const PERFORM_SEARCH_TYPE_CHANGE = 'PARENT_DEAL_CONTAINER_PERFORM_SEARCH_TYPE_CHANGE'

export const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = 'PARENT_DEAL_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM'
export const NAVIGATION_LOADER_APP_CRM_SHOW = 'PARENT_DEAL_CONTAINER_NAVIGATION_LOADER_APP_CRM_SHOW'

export const NAVIGATION_LOADER_APP_CRM_HIDE = 'PARENT_DEAL_CONTAINER_NAVIGATION_LOADER_APP_CRM_HIDE'

export const PERFORM_SET_NAVIGATION_IN_PROGRESS = 'PARENT_DEAL_CONTAINER_PERFORM_SET_NAVIGATION_IN_PROGRESS'
export const SET_PARENT_DEAL_PICKER_MODE = 'PARENT_DEAL_CONTAINER_SET_PARENT_DEAL_PICKER_MODE'

export type SET_PARENT_DEAL_PICKER_MODE = {mode: Enums.ParentDealPickerMode}
export const setParentDealPickerMode = (mode: Enums.ParentDealPickerMode): Action<SET_PARENT_DEAL_PICKER_MODE> => ({
	type: SET_PARENT_DEAL_PICKER_MODE,
	payload: {
	    mode,
    },
})

export type NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN = {}
export const navigateToParentDealCustomerListScreen = (): Action<NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN> => ({
    type: NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN,
    payload: {}
})

export type PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH = {parentDealCustomerList: Models.CustomerManagedList}
export const performParentDealCustomerListRefresh = (parentDealCustomerList: Models.CustomerManagedList): Action<PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH> => ({
    type: PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH,
    payload: {
        parentDealCustomerList,
    }
})

export type PERFORM_PARENT_DEAL_CUSTOMER_SELECT = {parentDealCustomer: Models.CustomerManaged}
export const performParentDealCustomerSelect = (parentDealCustomer: Models.CustomerManaged): Action<PERFORM_PARENT_DEAL_CUSTOMER_SELECT> => ({
    type: PERFORM_PARENT_DEAL_CUSTOMER_SELECT,
    payload: {
        parentDealCustomer
    }
})

export type PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE = {}
export const performParentDealCustomerSearchModeDisable = (): Action<PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE,
    payload: {}
})

export type PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE = {}
export const performParentDealCustomerSearchModeEnable = (): Action<PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE,
    payload: {}
})

export type PERFORM_PARENT_DEAL_CUSTOMER_SEARCH = {}
export const performParentDealCustomerSearch = (): Action<PERFORM_PARENT_DEAL_CUSTOMER_SEARCH> => ({
    type: PERFORM_PARENT_DEAL_CUSTOMER_SEARCH,
    payload: {}
})

export type PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH = {parentDealCustomerInputSearch: string}
export const performParentDealCustomerInputSearch = (parentDealCustomerInputSearch: string): Action<PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH> => ({
    type: PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH,
    payload: {
        parentDealCustomerInputSearch
    }
})

export type NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN = {}
export const navigateToParentDealDealListScreen = (): Action<NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN> => ({
    type: NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN,
    payload: {
    }
})

export type PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH = {}
export const performParentDealDealListRefresh = (): Action<PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH> => ({
    type: PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH,
    payload: {}
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST = {}
export const callGetParentDealDealList = (): Action<CALL_GET_PARENT_DEAL_DEAL_LIST> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST,
    payload: {}
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN = {}
export const callGetParentDealDealListClean = (): Action<CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN,
    payload: {}
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST = {}
export const callGetParentDealDealListRequest = (): Action<CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST,
    payload: {}
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS = {response: Response<Models.DealList>}
export const callGetParentDealDealListSuccess = (response: Response<Models.DealList>): Action<CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS,
    payload: {
        response,
    }
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE = {error: Models.Error}
export const callGetParentDealDealListFailure = (error: Models.Error): Action<CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE,
    payload: {
        error,
    }
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE = {}
export const callGetParentDealDealListIgnore = (): Action<CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE,
    payload: {}
})

export type CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK = {}
export const callGetParentDealDealListBreak = (): Action<CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK> => ({
    type: CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK,
    payload: {}
})

export type PERFORM_PARENT_DEAL_DEAL_SELECT = {parentDealDeal: Models.Deal}
export const performParentDealDealSelect = (parentDealDeal: Models.Deal): Action<PERFORM_PARENT_DEAL_DEAL_SELECT> => ({
    type: PERFORM_PARENT_DEAL_DEAL_SELECT,
    payload: {
        parentDealDeal
    }
})

export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

export type PERFORM_CUSTOMER_LIST_REFRESH = {}
export const performCustomerListRefresh = (): Action<PERFORM_CUSTOMER_LIST_REFRESH> => ({
    type: PERFORM_CUSTOMER_LIST_REFRESH,
    payload: {}
})

export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = {}
export const performCustomerManagedListRefresh = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH,
    payload: {}
})

export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = {}
export const performCustomerManagedListRefreshExecute = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE,
    payload: {}
})

export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = { data: boolean }
export const performCustomerManagedListRefreshSuccess = (data: boolean): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS,
    payload: {
        data: data
    }
})

export type PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = { data: boolean }
export const performChangeDisplayErrorModalAppCRM = (data: boolean): Action<PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM> => ({
    type: PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM,
    payload: {
        data: data
    }
})

export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = { error: Error }
export const performCustomerManagedListRefreshFailure = (error: Error): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = {}
export const refresh_callGetCustomerManagedList = (): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST,
    payload: {}
})

export type PERFORM_FLUSH = {}
export const performFlush = (): Action<PERFORM_FLUSH> => ({
    type: PERFORM_FLUSH,
    payload: {}
})

export type PERFORM_REFRESH_BAR_HIDE = {}
export const performRefreshBarHide = (): Action<PERFORM_REFRESH_BAR_HIDE> => ({
    type: PERFORM_REFRESH_BAR_HIDE,
    payload: {}
})

export type PERFORM_REFRESH_BAR_SHOW = {}
export const performRefreshBarShow = (): Action<PERFORM_REFRESH_BAR_SHOW> => ({
    type: PERFORM_REFRESH_BAR_SHOW,
    payload: {}
})

export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {}
export const refresh_callGetCustomerManagedListRequest = (): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST,
    payload: {}
})

export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = { response: Response<Models.CustomerManagedList> }
export const refresh_callGetCustomerManagedListSuccess = (response: Response<Models.CustomerManagedList>): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS,
    payload: {
        response: response
    }
})

export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = { error: Error }
export const refresh_callGetCustomerManagedListFailure = (error: Error): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE,
    payload: {
        error: error
    }
})

export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND = {}
export const performCustomerManagedListAppend = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND,
    payload: {}
})

export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = {}
export const performCustomerManagedListAppendExecute = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE,
    payload: {}
})

export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = { data: boolean }
export const performCustomerManagedListAppendSuccess = (data: boolean): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS,
    payload: {
        data: data
    }
})

export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = { error: Error }
export const performCustomerManagedListAppendFailure = (error: Error): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE,
    payload: {
        error: error
    }
})

export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = {}
export const append_callGetCustomerManagedList = (): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST,
    payload: {}
})

export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {}
export const append_callGetCustomerManagedListRequest = (): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST,
    payload: {}
})

export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = { response: Response<Models.CustomerManagedListPage> }
export const append_callGetCustomerManagedListSuccess = (response: Response<Models.CustomerManagedListPage>): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS,
    payload: {
        response: response
    }
})

export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = { error: Error }
export const append_callGetCustomerManagedListFailure = (error: Error): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE,
    payload: {
        error: error
    }
})

export type APPEND_CUSTOMER_MANAGED_LIST_CONCAT = {}
export const append_customerManagedListConcat = (): Action<APPEND_CUSTOMER_MANAGED_LIST_CONCAT> => ({
    type: APPEND_CUSTOMER_MANAGED_LIST_CONCAT,
    payload: {}
})

export type PERFORM_SEARCH_MODE_ENABLE = {}
export const performSearchModeEnable = (): Action<PERFORM_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_SEARCH_MODE_ENABLE,
    payload: {}
})

export type PERFORM_SEARCH_MODE_DISABLE = {}
export const performSearchModeDisable = (): Action<PERFORM_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_SEARCH_MODE_DISABLE,
    payload: {}
})

export type PERFORM_INPUT_SEARCH = { value: string }
export const performInputSearch = (value: string): Action<PERFORM_INPUT_SEARCH> => ({
    type: PERFORM_INPUT_SEARCH,
    payload: {
        value: value,
    }
})

export type PERFORM_SEARCH_RESET = {}
export const performSearchReset = (): Action<PERFORM_SEARCH_RESET> => ({
    type: PERFORM_SEARCH_RESET,
    payload: {}
})

export type PERFORM_CUSTOMER_SEARCH_LIST_RESET = {}
export const performCustomerSearchListReset = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_RESET> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_RESET,
    payload: {}
})

export type PERFORM_SEARCH = {}
export const performSearch = (): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {}
})

export type PERFORM_SEARCH_EXECUTE = {}
export const performSearchExecute = (): Action<PERFORM_SEARCH_EXECUTE> => ({
    type: PERFORM_SEARCH_EXECUTE,
    payload: {}
})

export type PERFORM_SEARCH_SUCCESS = { data: boolean }
export const performSearchSuccess = (data: boolean): Action<PERFORM_SEARCH_SUCCESS> => ({
    type: PERFORM_SEARCH_SUCCESS,
    payload: {
        data: data
    }
})

export type PERFORM_SEARCH_FAILURE = { error: Error }
export const performSearchFailure = (error: Error): Action<PERFORM_SEARCH_FAILURE> => ({
    type: PERFORM_SEARCH_FAILURE,
    payload: {
        error: error
    }
})

export type SEARCH_VALIDATE_SEARCH = {}
export const search_validateSearch = (): Action<SEARCH_VALIDATE_SEARCH> => ({
    type: SEARCH_VALIDATE_SEARCH,
    payload: {}
})

export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {}
export const search_callGetCustomerSearchList = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST,
    payload: {}
})

export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {}
export const search_callGetCustomerSearchListRequest = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST,
    payload: {}
})

export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = { response: Response<Models.CustomerManagedList> }
export const search_callGetCustomerSearchListSuccess = (response: Response<Models.CustomerManagedList>): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS,
    payload: {
        response: response
    }
})

export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = { error: Error }
export const search_callGetCustomerSearchListFailure = (error: Error): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE,
    payload: {
        error: error
    }
})

export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND = {}
export const performCustomerSearchListAppend = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    payload: {}
})

export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = {}
export const performCustomerSearchListAppendExecute = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE,
    payload: {}
})

export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = { data: boolean }
export const performCustomerSearchListAppendSuccess = (data: boolean): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS,
    payload: {
        data: data
    }
})

export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = { error: Error }
export const performCustomerSearchListAppendFailure = (error: Error): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE,
    payload: {
        error: error
    }
})

export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = {}
export const searchAppend_callGetCustomerSearchListPage = (): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE,
    payload: {}
})

export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = {}
export const searchAppend_callGetCustomerSearchListPageRequest = (): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST,
    payload: {}
})

export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = { response: Response<Models.CustomerManagedListPage> }
export const searchAppend_callGetCustomerSearchListPageSuccess = (response: Response<Models.CustomerManagedListPage>): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS,
    payload: {
        response: response
    }
})

export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = { error: Error }
export const searchAppend_callGetCustomerSearchListPageFailure = (error: Error): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE,
    payload: {
        error: error
    }
})

export type SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = {}
export const searchAppend_customerSearchListConcat = (): Action<SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT> => ({
    type: SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT,
    payload: {}
})

export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

export type NAVIGATION_LOADER_APP_CRM_SHOW = {}
export const navigationLoaderAppCRMShow = (): Action<NAVIGATION_LOADER_APP_CRM_SHOW> => ({
    type: NAVIGATION_LOADER_APP_CRM_SHOW,
    payload: {}
})

export type NAVIGATION_LOADER_APP_CRM_HIDE = {}
export const navigationLoaderAppCRMHide = (): Action<NAVIGATION_LOADER_APP_CRM_HIDE> => ({
    type: NAVIGATION_LOADER_APP_CRM_HIDE,
    payload: {}
})
