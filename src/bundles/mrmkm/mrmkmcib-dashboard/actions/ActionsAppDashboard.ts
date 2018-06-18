/**
 * Actions of AppDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-dashboard"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

export const INPUT_SHARE_POPOVER_SEARCH_REFRESH = 'INPUT_SHARE_POPOVER_SEARCH_REFRESH'

export const INPUT_CURRENT_RECIPIENT_LIST_REFRESH = 'INPUT_CURRENT_RECIPIENT_LIST_REFRESH'

export const INPUT_CURRENT_REPRESENTATION_REFRESH = 'INPUT_CURRENT_REPRESENTATION_REFRESH'

export const INPUT_CURRENT_FILE_FORMAT_REFRESH = 'INPUT_CURRENT_FILE_FORMAT_REFRESH'

export const NAVIGATE_TO_POPOVER_SHARE_BACK = 'NAVIGATE_TO_POPOVER_SHARE_BACK'

export const NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN'

export const NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN'

export const NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN'

export const PERFORM_POPOVER_SHARE_SHOW = 'APP_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_SHOW'

export const PERFORM_POPOVER_SHARE_HIDE = 'APP_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_HIDE'

export const PERFORM_APPLICATION_INIT = 'APP_DASHBOARD_CONTAINER_PERFORM_APPLICATION_INIT'

export const HANDLE_QLIK_ERROR = 'APP_DASHBOARD_CONTAINER_HANDLE_QLIK_ERROR_FAILURE'

export const PERFORM_FIND_PERSON_LIST = 'APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST'
export const PERFORM_FIND_PERSON_LIST_EXECUTE = 'APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_EXECUTE'
export const PERFORM_FIND_PERSON_LIST_SUCCESS = 'APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_SUCCESS'
export const PERFORM_FIND_PERSON_LIST_FAILURE = 'APP_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_FAILURE'

export const PERFORM_SEND = 'APP_DASHBOARD_CONTAINER_PERFORM_SEND'

export const PERFORM_ADD_PERSON_HISTORY_LIST = 'APP_DASHBOARD_CONTAINER_PERFORM_ADD_PERSON_HISTORY_LIST'
export const PERFORM_CLEAR_PERSON_HISTORY_LIST = 'APP_DASHBOARD_CONTAINER_PERFORM_CLEAR_PERSON_HISTORY_LIST'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST = 'APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = 'APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = 'APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = 'APP_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE'
export const PERFORM_PERSIST_PERSON_HISTORY_LIST = 'APP_DASHBOARD_CONTAINER_PERFORM_PERSIST_PERSON_HISTORY_LIST'

export const FOUND_PERSON_LIST_CLEAR = 'FOUND_PERSON_LIST_CLEAR'

export const CALL_QLIK_AVAILABILITY_CHECK = 'APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK'
export const CALL_QLIK_AVAILABILITY_CHECK_REQUEST = 'APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_REQUEST'
export const CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = 'APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_SUCCESS'
export const CALL_QLIK_AVAILABILITY_CHECK_FAILURE = 'APP_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_FAILURE'

export const SWAP_CONTEXT = 'APP_DASHBOARD_CONTAINER_SWAP_CONTEXT'

export const PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED = 'APP_DASHBOARD_CONTAINER_PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED'

export const PERFORM_SEARCH_MODE_ENABLE = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_MODE_ENABLE'

export const PERFORM_SEARCH_MODE_DISABLE = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_MODE_DISABLE'

export const PERFORM_INPUT_SEARCH = 'APP_DASHBOARD_CONTAINER_PERFORM_INPUT_SEARCH'

export const PERFORM_SEARCH_RESET = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_RESET'

export const PERFORM_CUSTOMER_SEARCH_LIST_RESET = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_RESET'

export const PERFORM_SEARCH = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH'
export const PERFORM_SEARCH_EXECUTE = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_EXECUTE'
export const PERFORM_SEARCH_SUCCESS = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_SUCCESS'
export const PERFORM_SEARCH_FAILURE = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_FAILURE'
export const PERFORM_SEARCH_ABORT = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_ABORT'

export const SEARCH_VALIDATE_SEARCH = 'APP_DASHBOARD_CONTAINER_SEARCH_VALIDATE_SEARCH'

export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT = 'APP_DASHBOARD_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT'

export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE'

export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = 'APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = 'APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = 'APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = 'APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE'

export const SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = 'APP_DASHBOARD_CONTAINER_SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT'

export const PERFORM_QLIK_EVENT = 'APP_DASHBOARD_CONTAINER_PERFORM_QLIK_EVENT'
export const UNKNOWN_QLIK_EVENT = 'APP_DASHBOARD_CONTAINER_UNKNOWN_QLIK_EVENT_FAILURE'

export const PERFORM_CUSTOMER_SELECT = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_SELECT'

export const PERFORM_CUSTOMER_OPEN = 'APP_DASHBOARD_CONTAINER_PERFORM_CUSTOMER_OPEN'

export const PERFORM_SEARCH_HISTORY_LIST_CLEAR = 'APP_DASHBOARD_CONTAINER_PERFORM_SEARCH_HISTORY_LIST_CLEAR'

export const PERSIST_SEARCH_HISTORY_LIST = 'APP_DASHBOARD_CONTAINER_PERSIST_SEARCH_HISTORY_LIST'

export const RECOVER_SEARCH_HISTORY_LIST = 'APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST'
export const RECOVER_SEARCH_HISTORY_LIST_EXECUTE = 'APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST_EXECUTE'
export const RECOVER_SEARCH_HISTORY_LIST_SUCCESS = 'APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST_SUCCESS'
export const RECOVER_SEARCH_HISTORY_LIST_FAILURE = 'APP_DASHBOARD_CONTAINER_RECOVER_SEARCH_HISTORY_LIST_FAILURE'

export const PERFORM_CONTAINER_RESET = 'APP_DASHBOARD_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_UPDATE_SUP_PARAMETERS = 'APP_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS'
export const PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = 'APP_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS_FAILURE'

export const SET_CURRENT_QLIK_URL = 'APP_DASHBOARD_CONTAINER_SET_CURRENT_QLICK_URL'

export const SET_POPOVER_SEARCH_SCREEN_SHOW = 'APP_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_SHOW'
export const SET_POPOVER_SEARCH_SCREEN_HIDE = 'APP_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_HIDE'

export const PERFORM_SELECTIONS_PARSE_FAILURE = 'APP_DASHBOARD_CONTAINER_PERFORM_SELECTIONS_PARSE_FAILURE'

export const SET_QLIK_COOKIE = 'APP_DASHBOARD_CONTAINER_SET_QLIK_COOKIE'

export const CALL_SEND_FILE = 'APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_SEND'
export const CALL_SEND_FILE_EXECUTE = 'APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_EXECUTE'
export const CALL_SEND_FILE_SUCCESS = 'APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_SUCCESS'
export const CALL_SEND_FILE_FAILURE = 'APP_DASHBOARD_CONTAINER_CALL_SEND_FILE_FAILURE'

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update  inputSharePopoverSearch prop in popover.
 *
 */
export type INPUT_SHARE_POPOVER_SEARCH_REFRESH = {value: string}
export const inputSharePopoverSearchRefresh = (value: string): Action<INPUT_SHARE_POPOVER_SEARCH_REFRESH> => ({
    type: INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    payload: {value: value}
})


/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate back in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_BACK = {}
export const navigateToPopoverShareBack = (): Action<NAVIGATE_TO_POPOVER_SHARE_BACK> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = {}
export const navigateToPopoverShareRecipientsScreen = (): Action<NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN,
    payload: {}
})


/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = {}
export const navigateToPopoverShareRepresentationScreen = (): Action<NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = {}
export const navigateToPopoverShareFormatScreen = (): Action<NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update pecipients prop in popover.
 *
 */
export type INPUT_CURRENT_RECIPIENT_LIST_REFRESH = {value: ModelsScheduler.PersonList, operation: Enums.Operation}
export const inputCurrentRecipientListRefresh = (value: ModelsScheduler.PersonList, operation: Enums.Operation): Action<INPUT_CURRENT_RECIPIENT_LIST_REFRESH> => ({
    type: INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    payload: {
        value: value,
        operation: operation
    }
})


/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type INPUT_CURRENT_REPRESENTATION_REFRESH = {value: Enums.Representation, fileFormat: Enums.FileFormat}
export const inputCurrentRepresentationRefresh = (value: Enums.Representation, fileFormat: Enums.FileFormat): Action<INPUT_CURRENT_REPRESENTATION_REFRESH> => ({
    type: INPUT_CURRENT_REPRESENTATION_REFRESH,
    payload: {value, fileFormat}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update file format prop in popover.
 *
 */
export type INPUT_CURRENT_FILE_FORMAT_REFRESH = {value: Enums.FileFormat}
export const inputCurrentFormatRefresh = (value: Enums.FileFormat): Action<INPUT_CURRENT_FILE_FORMAT_REFRESH> => ({
    type: INPUT_CURRENT_FILE_FORMAT_REFRESH,
    payload: {value: value}
})


/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_SHARE_SHOW = {}
export const performPopoverShareShow = (): Action<PERFORM_POPOVER_SHARE_SHOW> => ({
    type: PERFORM_POPOVER_SHARE_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_SHARE_HIDE = {}
export const performPopoverShareHide = (): Action<PERFORM_POPOVER_SHARE_HIDE> => ({
    type: PERFORM_POPOVER_SHARE_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to init Dashboard mobile application.
 *
 */
export type PERFORM_APPLICATION_INIT = {}
export const performApplicationInit = (): Action<PERFORM_APPLICATION_INIT> => ({
    type: PERFORM_APPLICATION_INIT,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched to handle Qlik error.
 *
 * @param {Error | null} error .
 */
export type HANDLE_QLIK_ERROR = { error: Error | null }
export const handleQlikError = (error: Error | null): Action<HANDLE_QLIK_ERROR> => ({
    type: HANDLE_QLIK_ERROR,
    payload: {
        error: error,
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 *
 */
export type CALL_QLIK_AVAILABILITY_CHECK = {}
export const callQlikAvailabilityCheck = (): Action<CALL_QLIK_AVAILABILITY_CHECK> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 */
export type CALL_QLIK_AVAILABILITY_CHECK_REQUEST = {}
export const callQlikAvailabilityCheckRequest = (): Action<CALL_QLIK_AVAILABILITY_CHECK_REQUEST> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callQlikAvailabilityCheck". Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = { }
export const callQlikAvailabilityCheckSuccess = (): Action<CALL_QLIK_AVAILABILITY_CHECK_SUCCESS> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_SUCCESS,
    payload: {}
})

/*
 * Action dispatched on fetch failure in thunk "callQlikAvailabilityCheck". Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_QLIK_AVAILABILITY_CHECK_FAILURE = { error: Error }
export const callQlikAvailabilityCheckFailure = (error: Error): Action<CALL_QLIK_AVAILABILITY_CHECK_FAILURE> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "AppDashboard" container. Thunk chain dispatched to set context parameters.
 *
 * @param {ModelsApp.Employee} user .
 * @param {string} appBuildVersion .
 * @param {string} appServerUrl .
 * @param {string} appServerPath .
 */
export type SWAP_CONTEXT = {
    user: ModelsApp.Employee,
    appBuildVersion: string,
    appServerUrl: string,
    appServerPath: string,
}

export const swapContext = (user: ModelsApp.Employee, appBuildVersion: string, appServerUrl: string, appServerPath: string): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        user,
        appBuildVersion,
        appServerUrl,
        appServerPath,
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search mode changed.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED = { value: boolean }
export const performInputSearchCustomerManaged = (value: boolean): Action<PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED> => ({
    type: PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_SEARCH_MODE_ENABLE = {}
export const performSearchModeEnable = (): Action<PERFORM_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_SEARCH_MODE_ENABLE,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to exit search mode
 *
 */
export type PERFORM_SEARCH_MODE_DISABLE = {}
export const performSearchModeDisable = (): Action<PERFORM_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_SEARCH_MODE_DISABLE,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search input changed.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_SEARCH = { value: string }
export const performInputSearch = (value: string): Action<PERFORM_INPUT_SEARCH> => ({
    type: PERFORM_INPUT_SEARCH,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to reset search parameters.
 *
 */
export type PERFORM_SEARCH_RESET = {}
export const performSearchReset = (): Action<PERFORM_SEARCH_RESET> => ({
    type: PERFORM_SEARCH_RESET,
    payload: {}
})

/**
 * Internal thunk used in "AppDashboard" container. Thunk chain used to reset search parameters.
 *
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_RESET = {}
export const performCustomerSearchListReset = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_RESET> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
 *
 */
export type PERFORM_SEARCH = {}
export const performSearch = (): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
 */
export type PERFORM_SEARCH_EXECUTE = {}
export const performSearchExecute = (): Action<PERFORM_SEARCH_EXECUTE> => ({
    type: PERFORM_SEARCH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_SEARCH_SUCCESS = { data: boolean }
export const performSearchSuccess = (data: boolean): Action<PERFORM_SEARCH_SUCCESS> => ({
    type: PERFORM_SEARCH_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_SEARCH_FAILURE = { error: Error }
export const performSearchFailure = (error: Error): Action<PERFORM_SEARCH_FAILURE> => ({
    type: PERFORM_SEARCH_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Action dispatched on abort in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to abort search.
 *
 */
export type PERFORM_SEARCH_ABORT = {}
export const performSearchAbort = (): Action<PERFORM_SEARCH_ABORT> => ({
    type: PERFORM_SEARCH_ABORT,
    payload: {}
})

/**
 * Internal thunk used in "AppDashboard" container. Thunk used to perform search query validation and search type determination.
 *
 */
export type SEARCH_VALIDATE_SEARCH = {}
export const search_validateSearch = (): Action<SEARCH_VALIDATE_SEARCH> => ({
    type: SEARCH_VALIDATE_SEARCH,
    payload: {}
})

/**
 * Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {}
export const search_callGetCustomerSearchList = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {}
export const search_callGetCustomerSearchListRequest = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 * @param {ModelsCrm.CustomerList} response Data received by fetch.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = { response: Response<ModelsCrm.CustomerList> }
export const search_callGetCustomerSearchListSuccess = (response: Response<ModelsCrm.CustomerList>): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = { error: Error }
export const search_callGetCustomerSearchListFailure = (error: Error): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE,
    payload: {
        error: error
    }
})

/*
 * Action dispatched on abort in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT = {}
export const search_callGetCustomerSearchListAbort = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
 *
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND = {}
export const performCustomerSearchListAppend = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performCustomerSearchListAppend" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = {}
export const performCustomerSearchListAppendExecute = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = { data: boolean }
export const performCustomerSearchListAppendSuccess = (data: boolean): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = { error: Error }
export const performCustomerSearchListAppendFailure = (error: Error): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = {}
export const searchAppend_callGetCustomerSearchListPage = (): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = {}
export const searchAppend_callGetCustomerSearchListPageRequest = (): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 * @param {ModelsCrm.CustomerListPage} response Data received by fetch.
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = { response: Response<ModelsCrm.CustomerListPage> }
export const searchAppend_callGetCustomerSearchListPageSuccess = (response: Response<ModelsCrm.CustomerListPage>): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = { error: Error }
export const searchAppend_callGetCustomerSearchListPageFailure = (error: Error): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "AppDashboard" container. Thunk chain used to concat next page and append customer search list.
 *
 */
export type SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = {}
export const searchAppend_customerSearchListConcat = (): Action<SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT> => ({
    type: SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
 *
 * @param {Enums.QlikEventType} eventType .
 * @param {string} eventPayload .
 */
export type PERFORM_QLIK_EVENT = { message: Models.QlikMessage }
export const performQlikEvent = (message: Models.QlikMessage): Action<PERFORM_QLIK_EVENT> => ({
    type: PERFORM_QLIK_EVENT,
    payload: {
        message: message,
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
 *
 * @param {Enums.QlikEventType} eventType .
 * @param {string} eventPayload .
 */
export type UNKNOWN_QLIK_EVENT = { message: Models.QlikMessage }
export const unknownQlikEvent = (message: Models.QlikMessage): Action<UNKNOWN_QLIK_EVENT> => ({
    type: UNKNOWN_QLIK_EVENT,
    payload: {
        message: message,
    }
})


/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to open customer from search list.
 *
 * @param {ModelsCrm.Customer} customer .
 */
export type PERFORM_CUSTOMER_SELECT = { customer: ModelsCrm.Customer, }
export const performCustomerSelect = (customer: ModelsCrm.Customer,): Action<PERFORM_CUSTOMER_SELECT> => ({
    type: PERFORM_CUSTOMER_SELECT,
    payload: {
        customer: customer,
    }
})

/**
 * Internal thunk used in "AppDashboard" container. Thunk chain used to open customer from search list.
 *
 * @param {ModelsCrm.Customer} customer .
 */
export type PERFORM_CUSTOMER_OPEN = { customer: ModelsCrm.Customer }
export const performCustomerOpen = (customer: ModelsCrm.Customer): Action<PERFORM_CUSTOMER_OPEN> => ({
    type: PERFORM_CUSTOMER_OPEN,
    payload: {
        customer: customer,
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear customer search history list.
 *
 */
export type PERFORM_SEARCH_HISTORY_LIST_CLEAR = {}
export const performSearchHistoryListClear = (): Action<PERFORM_SEARCH_HISTORY_LIST_CLEAR> => ({
    type: PERFORM_SEARCH_HISTORY_LIST_CLEAR,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to persist search history list data.
 *
 */
export type PERSIST_SEARCH_HISTORY_LIST = {}
export const persistSearchHistoryList = (): Action<PERSIST_SEARCH_HISTORY_LIST> => ({
    type: PERSIST_SEARCH_HISTORY_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
 *
 */
export type RECOVER_SEARCH_HISTORY_LIST = {}
export const recoverSearchHistoryList = (): Action<RECOVER_SEARCH_HISTORY_LIST> => ({
    type: RECOVER_SEARCH_HISTORY_LIST,
    payload: {}
})

/*
 * Action dispatched on thunk chain "recoverSearchHistoryList" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
 */
export type RECOVER_SEARCH_HISTORY_LIST_EXECUTE = {}
export const recoverSearchHistoryListExecute = (): Action<RECOVER_SEARCH_HISTORY_LIST_EXECUTE> => ({
    type: RECOVER_SEARCH_HISTORY_LIST_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
 *
 * @param {Models.SearchHistoryList} data Result data of thunk chain.
 */
export type RECOVER_SEARCH_HISTORY_LIST_SUCCESS = { data: Models.SearchHistoryList }
export const recoverSearchHistoryListSuccess = (data: Models.SearchHistoryList): Action<RECOVER_SEARCH_HISTORY_LIST_SUCCESS> => ({
    type: RECOVER_SEARCH_HISTORY_LIST_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type RECOVER_SEARCH_HISTORY_LIST_FAILURE = { error: Error }
export const recoverSearchHistoryListFailure = (error: Error): Action<RECOVER_SEARCH_HISTORY_LIST_FAILURE> => ({
    type: RECOVER_SEARCH_HISTORY_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})


export type PERFORM_UPDATE_SUP_PARAMETERS = {params: Models.SupParams}
export const performUpdateSupParameters = (params: Models.SupParams): Action<PERFORM_UPDATE_SUP_PARAMETERS> => ({
    type: PERFORM_UPDATE_SUP_PARAMETERS,
    payload: {
        params: params
    }
})

export type PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = { error: Error }
export const performUpdateSupParametersFailure = ( error: Error ): Action<PERFORM_UPDATE_SUP_PARAMETERS_FAILURE> => ({
    type: PERFORM_UPDATE_SUP_PARAMETERS_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk used to find people via OWA.
 *
 */
export type PERFORM_FIND_PERSON_LIST = {}
export const performFindPeople = (): Action<PERFORM_FIND_PERSON_LIST> => ({
    type: PERFORM_FIND_PERSON_LIST,
    payload: {}
})

/*
 *  Thunk used to find people via OWA.
 */
export type PERFORM_FIND_PERSON_LIST_EXECUTE = {}
export const performFindPeopleExecute = (): Action<PERFORM_FIND_PERSON_LIST_EXECUTE> => ({
    type: PERFORM_FIND_PERSON_LIST_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performFindPeople". Thunk used to find people via OWA.
 *
 * @param {ModelsScheduler.PersonList} data Result data of thunk chain.
 */
export type PERFORM_FIND_PERSON_LIST_SUCCESS = { data: ModelsScheduler.PersonList }
export const performFindPeopleSuccess = (data: ModelsScheduler.PersonList): Action<PERFORM_FIND_PERSON_LIST_SUCCESS> => ({
    type: PERFORM_FIND_PERSON_LIST_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performFindPeople". Thunk used to find people via OWA.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_FIND_PERSON_LIST_FAILURE = { error: Error }
export const performFindPeopleFailure = (error: Error): Action<PERFORM_FIND_PERSON_LIST_FAILURE> => ({
    type: PERFORM_FIND_PERSON_LIST_FAILURE,
    payload: {
        error: error
    }
})

/*
 * Action dispatched on failure in thunk "performFindPeople". Thunk used to find people via OWA.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type FOUND_PERSON_LIST_CLEAR = {}
export const performFoundPeopleListClear = (): Action<FOUND_PERSON_LIST_CLEAR> => ({
    type: FOUND_PERSON_LIST_CLEAR,
    payload: {}
})

/*
 * Акции для работы со списком сохраненных почтовых адресов
 */
export type PERFORM_ADD_PERSON_HISTORY_LIST = { data: ModelsScheduler.PersonList }
export const performAddPeopleHistoryList = (data: ModelsScheduler.PersonList): Action<PERFORM_ADD_PERSON_HISTORY_LIST> => ({
    type: PERFORM_ADD_PERSON_HISTORY_LIST,
    payload:{
        data: data,
    }
})
export type PERFORM_CLEAR_PERSON_HISTORY_LIST = {}
export const performClearPeopleHistoryList = (): Action<PERFORM_CLEAR_PERSON_HISTORY_LIST> => ({
    type: PERFORM_CLEAR_PERSON_HISTORY_LIST,
    payload:{}
})

export type PERFORM_RECOVER_PERSON_HISTORY_LIST = {}
export const performRecoverPeopleHistoryList = (): Action<PERFORM_RECOVER_PERSON_HISTORY_LIST> => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST,
    payload:{}
})

export type PERFORM_PERSIST_PERSON_HISTORY_LIST = {}
export const performPersistPeopleHistoryList = (): Action<PERFORM_PERSIST_PERSON_HISTORY_LIST> => ({
    type: PERFORM_PERSIST_PERSON_HISTORY_LIST,
    payload:{}
})

export type PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = {}
export const performRecoverPeopleHistoryListExecute = (): Action<PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE> => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE,
    payload: {}
})

export type PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = { data: ModelsScheduler.PersonList }
export const performRecoverPeopleHistoryListSuccess = (data: ModelsScheduler.PersonList): Action<PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS> => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS,
    payload: {
        data: data
    }
})

export type PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = { error: Error }
export const performRecoverPeopleHistoryListFailure = (error: Error): Action<PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE> => ({
    type: PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE,
    payload: {
        error: error
    }
})


/*
 * Thunk used to send file.
 */
export type PERFORM_SEND = {}
export const performSend = (): Action<PERFORM_SEND> => ({
    type: PERFORM_SEND,
    payload: {}
})

export type CALL_SEND_FILE = {}
export const callSendFile = (): Action<CALL_SEND_FILE> => ({
    type: CALL_SEND_FILE,
    payload: {}
})

export type CALL_SEND_FILE_EXECUTE = {}
export const callSendFileExecute = (): Action<CALL_SEND_FILE_EXECUTE> => ({
    type: CALL_SEND_FILE_EXECUTE,
    payload: {}
})

export type CALL_SEND_FILE_SUCCESS = {}
export const callSendFileSuccess = (): Action<CALL_SEND_FILE_SUCCESS> => ({
    type: CALL_SEND_FILE_SUCCESS,
    payload: {}
})

/*
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type CALL_SEND_FILE_FAILURE = { error: Error }
export const callSendFileFailure = (error: Error): Action<CALL_SEND_FILE_FAILURE> => ({
    type: CALL_SEND_FILE_FAILURE,
    payload: {
        error: error
    }
})

export type SET_CURRENT_QLIK_URL = {url: string | null}
export const setCurrentAppDashboardQlikUrl = (url: string | null): Action<SET_CURRENT_QLIK_URL> => ({
    type: SET_CURRENT_QLIK_URL,
    payload: {url}
})

/**
 * Thunk used to set isPopoverVisibleSearchScreen to true.
 */
export type SET_POPOVER_SEARCH_SCREEN_SHOW = {}
export const performPopoverSearchScreenShow = (): Action<SET_POPOVER_SEARCH_SCREEN_SHOW> => ({
    type: SET_POPOVER_SEARCH_SCREEN_SHOW,
    payload: {}
})

/**
 * Thunk used to set isPopoverVisibleSearchScreen to false.
 */
export type SET_POPOVER_SEARCH_SCREEN_HIDE = {}
export const performPopoverSearchScreenHide = (): Action<SET_POPOVER_SEARCH_SCREEN_HIDE> => ({
    type: SET_POPOVER_SEARCH_SCREEN_HIDE,
    payload: {}
})

/**
 * Thunk used to log Selections Parse Failure.
 */
export type PERFORM_SELECTIONS_PARSE_FAILURE = { error: Error }
export const performSelectionsParseFailure = (error: Error): Action<PERFORM_SELECTIONS_PARSE_FAILURE> => ({
    type: PERFORM_SELECTIONS_PARSE_FAILURE,
    payload: {
        error: error
    }
})

export type SET_QLIK_COOKIE = {cookie: string | null}
export const setQlikCookie = (cookie: string | null): Action<SET_QLIK_COOKIE> => ({
    type: SET_QLIK_COOKIE,
    payload: {
        cookie
    }
})



