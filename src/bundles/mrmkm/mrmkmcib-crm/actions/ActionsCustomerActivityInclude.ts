/**
 * Actions of CustomerActivityInclude container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

export const NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE'

export const NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_TO_CUSTOMER_PICKER_SCREEN'

export const PERFORM_INPUT_SEARCH_MANAGED_ONLY = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH_MANAGED_ONLY'

export const PERFORM_INPUT_SEARCH = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_SEARCH'

export const PERFORM_SEARCH_RESET = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_RESET'

export const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW = "CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW"
export const PERFORM_SEARCH = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH'
export const PERFORM_SEARCH_EXECUTE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_EXECUTE'
export const PERFORM_SEARCH_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_SUCCESS'
export const PERFORM_SEARCH_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SEARCH_FAILURE'

export const SEARCH_VALIDATE_SEARCH = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_VALIDATE_SEARCH'

export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE'

export const PERFORM_INPUT_CUSTOMER = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_CUSTOMER'

export const CALL_GET_CUSTOMER = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER'
export const CALL_GET_CUSTOMER_REQUEST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_REQUEST'
export const CALL_GET_CUSTOMER_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_SUCCESS'
export const CALL_GET_CUSTOMER_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_GET_CUSTOMER_FAILURE'

export const PERFORM_INPUT_COMMENT = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_INPUT_COMMENT'

export const PERFORM_CANCEL = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CANCEL'

export const PERFORM_SAVE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE'
export const PERFORM_SAVE_EXECUTE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_EXECUTE'
export const PERFORM_SAVE_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_SAVE_FAILURE'

export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE'
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST'
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS'
export const CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE'

export const PERFORM_VALIDATE = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_VALIDATE'

export const NAVIGATE_BACK = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_NAVIGATE_BACK'

export const PERFORM_CONTAINER_RESET = 'CUSTOMER_ACTIVITY_INCLUDE_CONTAINER_PERFORM_CONTAINER_RESET'

/**
 * Internal thunk used in "Activity" container. Thunk chain used to change display error model activity card.
 *
 */
export type PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW = {value: boolean}

export const performChangeDisplayErrorModalWindow = (value: boolean): Action<PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW> => ({
    type: PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW,
    payload: {value}
})
/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to show customer picker screen.
 *
 */
export type NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = {}
export const navigateToCustomerPickerScreen = (): Action<NAVIGATE_TO_CUSTOMER_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    payload: {}
})

export type NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE = {}
export const navigateToMemberListScreenPage = (): Action<NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE> => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN_PAGE,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input switch changed.
 *
 * @param {boolean} value .
 */
export type PERFORM_INPUT_SEARCH_MANAGED_ONLY = { value: boolean }
export const performInputSearchManagedOnly = (value: boolean): Action<PERFORM_INPUT_SEARCH_MANAGED_ONLY> => ({
    type: PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input changed.
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
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to reset search parameters.
 *
 */
export type PERFORM_SEARCH_RESET = {}
export const performSearchReset = (): Action<PERFORM_SEARCH_RESET> => ({
    type: PERFORM_SEARCH_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
 *
 */
export type PERFORM_SEARCH = {}
export const performSearch = (): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
 */
export type PERFORM_SEARCH_EXECUTE = {}
export const performSearchExecute = (): Action<PERFORM_SEARCH_EXECUTE> => ({
    type: PERFORM_SEARCH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSearch". Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
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
 * Action dispatched on failure in thunk "performSearch". Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
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
 * Internal thunk used in "CustomerActivityInclude" container. Thunk used to perform search query validation and search type determination.
 *
 */
export type SEARCH_VALIDATE_SEARCH = {}
export const search_validateSearch = (): Action<SEARCH_VALIDATE_SEARCH> => ({
    type: SEARCH_VALIDATE_SEARCH,
    payload: {}
})

/**
 * Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {}
export const search_callGetCustomerSearchList = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {}
export const search_callGetCustomerSearchListRequest = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
 *
 * @param {Models.CustomerList} response Data received by fetch.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = { response: Response<Models.CustomerList> }
export const search_callGetCustomerSearchListSuccess = (response: Response<Models.CustomerList>): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
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

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Customer field.
 *
 * @param {Models.Customer} customer .
 */
export type PERFORM_INPUT_CUSTOMER = { customer: Models.Customer }
export const performInputCustomer = (customer: Models.Customer): Action<PERFORM_INPUT_CUSTOMER> => ({
    type: PERFORM_INPUT_CUSTOMER,
    payload: {
        customer: customer,
    }
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 *
 */
export type CALL_GET_CUSTOMER = {}
export const callGetCustomer = (): Action<CALL_GET_CUSTOMER> => ({
    type: CALL_GET_CUSTOMER,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetCustomer" started. Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 */
export type CALL_GET_CUSTOMER_REQUEST = {}
export const callGetCustomerRequest = (): Action<CALL_GET_CUSTOMER_REQUEST> => ({
    type: CALL_GET_CUSTOMER_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 *
 * @param {Models.Customer} response Data received by fetch.
 */
export type CALL_GET_CUSTOMER_SUCCESS = { response: Response<Models.Customer> }
export const callGetCustomerSuccess = (response: Response<Models.Customer>): Action<CALL_GET_CUSTOMER_SUCCESS> => ({
    type: CALL_GET_CUSTOMER_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CUSTOMER_FAILURE = { error: Error }
export const callGetCustomerFailure = (error: Error): Action<CALL_GET_CUSTOMER_FAILURE> => ({
    type: CALL_GET_CUSTOMER_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Comment field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_COMMENT = { value: string }
export const performInputComment = (value: string): Action<PERFORM_INPUT_COMMENT> => ({
    type: PERFORM_INPUT_COMMENT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
 *
 */
export type PERFORM_SAVE = {}
export const performSave = (): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
 */
export type PERFORM_SAVE_EXECUTE = {}
export const performSaveExecute = (): Action<PERFORM_SAVE_EXECUTE> => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_SAVE_SUCCESS = { data: boolean }
export const performSaveSuccess = (data: boolean): Action<PERFORM_SAVE_SUCCESS> => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_SAVE_FAILURE = { error: Error }
export const performSaveFailure = (error: Error): Action<PERFORM_SAVE_FAILURE> => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 *
 */
export type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE = {}
export const callPostCustomerActivityIncludeCreate = (): Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE> => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPostCustomerActivityIncludeCreate" started. Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 */
export type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST = {}
export const callPostCustomerActivityIncludeCreateRequest = (): Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST> => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPostCustomerActivityIncludeCreate". Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS = { response: Response<boolean> }
export const callPostCustomerActivityIncludeCreateSuccess = (response: Response<boolean>): Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS> => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPostCustomerActivityIncludeCreate". Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE = { error: Error }
export const callPostCustomerActivityIncludeCreateFailure = (error: Error): Action<CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE> => ({
    type: CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "CustomerActivityInclude" container. Thunk used to confirm changes.
 *
 * @param {ModelsApp.Employee} currentUser .
 * @param {Models.CustomerManaged} currentCustomerManaged .
 */
export type PERFORM_VALIDATE = { currentUser: ModelsApp.Employee, currentCustomerManaged: Models.CustomerManaged, currentCustomer: Models.Customer}
export const performValidate = (currentUser: ModelsApp.Employee, currentCustomerManaged: Models.CustomerManaged,currentCustomer: Models.Customer): Action<PERFORM_VALIDATE> => ({
    type: PERFORM_VALIDATE,
    payload: {
        currentUser: currentUser,
        currentCustomerManaged: currentCustomerManaged,
        currentCustomer:currentCustomer
    }
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})
