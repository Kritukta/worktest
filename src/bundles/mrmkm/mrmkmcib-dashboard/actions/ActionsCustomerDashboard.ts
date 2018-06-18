/**
 * Actions of CustomerDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-dashboard"
import {Enums} from '../Enums'
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

export const INPUT_SHARE_POPOVER_SEARCH_REFRESH = 'INPUT_SHARE_POPOVER_SEARCH_REFRESH'

export const INPUT_CURRENT_RECIPIENT_LIST_REFRESH = 'INPUT_CURRENT_RECIPIENT_LIST_REFRESH'

export const INPUT_CURRENT_REPRESENTATION_REFRESH = 'INPUT_CURRENT_REPRESENTATION_REFRESH'

export const INPUT_CURRENT_FILE_FORMAT_REFRESH = 'INPUT_CURRENT_FILE_FORMAT_REFRESH'

export const SHARE_DATA_REFRESH = 'SHARE_DATA_REFRESH'

export const NAVIGATE_TO_POPOVER_SHARE_BACK = 'NAVIGATE_TO_POPOVER_SHARE_BACK'

export const NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN'

export const NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN'

export const NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = 'NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN'

export const PERFORM_POPOVER_SHARE_SHOW = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_SHOW'

export const PERFORM_POPOVER_SHARE_HIDE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_POPOVER_SHARE_HIDE'

export const PERFORM_APPLICATION_INIT = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_APPLICATION_INIT'

export const HANDLE_QLIK_ERROR = 'CUSTOMER_DASHBOARD_CONTAINER_HANDLE_QLIK_ERROR_FAILURE'


export const PERFORM_FIND_PERSON_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST'
export const PERFORM_FIND_PERSON_LIST_EXECUTE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_EXECUTE'
export const PERFORM_FIND_PERSON_LIST_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_SUCCESS'
export const PERFORM_FIND_PERSON_LIST_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_FIND_PERSON_LIST_FAILURE'

export const PERFORM_SEND = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_SEND'

export const PERFORM_ADD_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_ADD_PERSON_HISTORY_LIST'
export const PERFORM_CLEAR_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_CLEAR_PERSON_HISTORY_LIST'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS'
export const PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE'
export const PERFORM_PERSIST_PERSON_HISTORY_LIST = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_PERSIST_PERSON_HISTORY_LIST'

export const FOUND_PERSON_LIST_CLEAR = 'FOUND_PERSON_LIST_CLEAR'

export const CALL_QLIK_AVAILABILITY_CHECK = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK'
export const CALL_QLIK_AVAILABILITY_CHECK_REQUEST = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_REQUEST'
export const CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_SUCCESS'
export const CALL_QLIK_AVAILABILITY_CHECK_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_QLIK_AVAILABILITY_CHECK_FAILURE'

export const SWAP_CONTEXT = 'CUSTOMER_DASHBOARD_CONTAINER_SWAP_CONTEXT'

export const PERFORM_QLIK_EVENT = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_QLIK_EVENT'

export const UNKNOWN_QLIK_EVENT = 'CUSTOMER_DASHBOARD_CONTAINER_UNKNOWN_QLIK_EVENT_FAILURE'

export const PERFORM_CONTAINER_RESET = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_UPDATE_SUP_PARAMETERS = 'CUSTOMER_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS'
export const PERFORM_UPDATE_SUP_PARAMETERS_FAILURE = 'CUSTOMER_DASHBOARD_PERFORM_UPDATE_SUP_PARAMETERS_FAILURE'

export const SET_CURRENT_QLIK_URL = 'CUSTOMER_DASHBOARD_CONTAINER_SET_CURRENT_QLIK_URL'

export const SET_POPOVER_SEARCH_SCREEN_SHOW = 'CUSTOMER_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_SHOW'
export const SET_POPOVER_SEARCH_SCREEN_HIDE = 'CUSTOMER_DASHBOARD_CONTAINER_SET_POPOVER_SEARCH_SCREEN_HIDE'

export const SET_TRIMMED_TOP = 'CUSTOMER_DASHBOARD_CONTAINER_SET_TRIMMED_TOP'

export const PERFORM_SELECTIONS_PARSE_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_PERFORM_SELECTIONS_PARSE_FAILURE'

export const SET_QLIK_COOKIE = 'CUSTOMER_DASHBOARD_CONTAINER_SET_QLIK_COOKIE'

export const CALL_SEND_FILE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_SEND'
export const CALL_SEND_FILE_EXECUTE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_EXECUTE'
export const CALL_SEND_FILE_SUCCESS = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_SUCCESS'
export const CALL_SEND_FILE_FAILURE = 'CUSTOMER_DASHBOARD_CONTAINER_CALL_SEND_FILE_FAILURE'


/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update  currentQlikMessage  prop in popover.
 *
 */
export type SHARE_DATA_REFRESH = {message: Models.QlikMessage}
export const shareDataRefresh = (message: Models.QlikMessage): Action<SHARE_DATA_REFRESH> => ({
    type: SHARE_DATA_REFRESH,
    payload: {
        message: message,
    }
})


/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update  inputSharePopoverSearch prop in popover.
 *
 */
export type INPUT_SHARE_POPOVER_SEARCH_REFRESH = {value: string}
export const inputSharePopoverSearchRefresh = (value: string): Action<INPUT_SHARE_POPOVER_SEARCH_REFRESH> => ({
    type: INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    payload: {value: value}
})


/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate back in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_BACK = {}
export const navigateToPopoverShareBack = (): Action<NAVIGATE_TO_POPOVER_SHARE_BACK> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN = {}
export const navigateToPopoverShareRecipientsScreen = (): Action<NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN,
    payload: {}
})


/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN = {}
export const navigateToPopoverShareRepresentationScreen = (): Action<NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN = {}
export const navigateToPopoverShareFormatScreen = (): Action<NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN> => ({
    type: NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update pecipients prop in popover.
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
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 *
 */
export type INPUT_CURRENT_REPRESENTATION_REFRESH = {value: Enums.Representation}
export const inputCurrentRepresentationRefresh = (value: Enums.Representation): Action<INPUT_CURRENT_REPRESENTATION_REFRESH> => ({
    type: INPUT_CURRENT_REPRESENTATION_REFRESH,
    payload: {value: value}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update file format prop in popover.
 *
 */
export type INPUT_CURRENT_FILE_FORMAT_REFRESH = {value: Enums.FileFormat}
export const inputCurrentFormatRefresh = (value: Enums.FileFormat): Action<INPUT_CURRENT_FILE_FORMAT_REFRESH> => ({
    type: INPUT_CURRENT_FILE_FORMAT_REFRESH,
    payload: {value: value}
})



/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_SHARE_SHOW = {}
export const performPopoverShareShow = (): Action<PERFORM_POPOVER_SHARE_SHOW> => ({
    type: PERFORM_POPOVER_SHARE_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_SHARE_HIDE = {}
export const performPopoverShareHide = (): Action<PERFORM_POPOVER_SHARE_HIDE> => ({
    type: PERFORM_POPOVER_SHARE_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on analytics tab open.
 *
 */
export type PERFORM_APPLICATION_INIT = {}
export const performApplicationInit = (): Action<PERFORM_APPLICATION_INIT> => ({
    type: PERFORM_APPLICATION_INIT,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched to handle Qlik error.
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
 * Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
 *
 */
export type CALL_QLIK_AVAILABILITY_CHECK = {}
export const callQlikAvailabilityCheck = (): Action<CALL_QLIK_AVAILABILITY_CHECK> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
 */
export type CALL_QLIK_AVAILABILITY_CHECK_REQUEST = {}
export const callQlikAvailabilityCheckRequest = (): Action<CALL_QLIK_AVAILABILITY_CHECK_REQUEST> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callQlikAvailabilityCheck". Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_QLIK_AVAILABILITY_CHECK_SUCCESS = { response: Response<boolean> }
export const callQlikAvailabilityCheckSuccess = (response: Response<boolean>): Action<CALL_QLIK_AVAILABILITY_CHECK_SUCCESS> => ({
    type: CALL_QLIK_AVAILABILITY_CHECK_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callQlikAvailabilityCheck". Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
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
 * Internal thunk used in "CustomerDashboard" container. Thunk chain dispatched to set context parameters.
 *
 * @param {ModelsCrm.CustomerManaged} customerManaged .
 * @param {ModelsApp.Employee} user .
 */
export type SWAP_CONTEXT = { customerManaged: ModelsCrm.CustomerManaged, user: ModelsApp.Employee, }
export const swapContext = (customerManaged: ModelsCrm.CustomerManaged, user: ModelsApp.Employee,): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        customerManaged: customerManaged,
        user: user,
    }
})

/**
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
 *
 * @param {Enums.QlikEventType} eventType .
 * @param {string} eventPayload .
 */
export type PERFORM_QLIK_EVENT = {message: Models.QlikMessage }
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
 * Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})


export type PERFORM_UPDATE_SUP_PARAMETERS = {params: Models.SupParams}
export const performUpdateSupParameters = (params:Models.SupParams): Action<PERFORM_UPDATE_SUP_PARAMETERS> => ({
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
 * Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to set current qlik url on analytics tab on customer screen.
 *
 */
export type SET_CURRENT_QLIK_URL = {url: string | null}
export const setCurrentCustomerDashboardQlikUrl = (url: string | null): Action<SET_CURRENT_QLIK_URL> => ({
    type: SET_CURRENT_QLIK_URL,
    payload: {url}
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


/**
 * Thunk used to send file.
 *
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

export type CALL_SEND_FILE_FAILURE = { error: Error }
export const callSendFileFailure = (error: Error): Action<CALL_SEND_FILE_FAILURE> => ({
    type: CALL_SEND_FILE_FAILURE,
    payload: {
        error: error
    }
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
 * Thunk used to cut Top of QlikView.
 */
export type SET_TRIMMED_TOP = { value: boolean }
export const setTrimmedTop = (value: boolean): Action<SET_TRIMMED_TOP> => ({
    type: SET_TRIMMED_TOP,
    payload: {
        value: value
    }
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
