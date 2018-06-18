/**
 * Actions of GszActivityExclude container.
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


export const NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_NAVIGATE_TO_CUSTOMER_PICKER_SCREEN'

export const NAVIGATE_TO_MEMBER_LIST_SCREEN = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN'

export const PERFORM_INPUT_SEARCH_MANAGED_ONLY = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_INPUT_SEARCH_MANAGED_ONLY'

export const PERFORM_INPUT_SEARCH = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_INPUT_SEARCH'

export const PERFORM_SEARCH_RESET = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SEARCH_RESET'
export const PERFORM_SEARCH_EXECUTE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SEARCH_EXECUTE'
export const PERFORM_SEARCH_SUCCESS = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SEARCH_SUCCESS'
export const PERFORM_SEARCH_FAILURE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SEARCH_FAILURE'
export const SEARCH_VALIDATE_SEARCH = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_SEARCH_VALIDATE_SEARCH'
export const PERFORM_SEARCH = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SEARCH'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE'

export const FILTER_CUSTOMER_LIST = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_FILTER_CUSTOMER_LIST'

export const PERFORM_INPUT_CUSTOMER = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_INPUT_CUSTOMER'

export const PERFORM_INPUT_COMMENT = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_INPUT_COMMENT'

export const PERFORM_CANCEL = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_CANCEL'

export const PERFORM_SAVE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SAVE'
export const PERFORM_SAVE_EXECUTE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SAVE_EXECUTE'
export const PERFORM_SAVE_SUCCESS = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SAVE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_SAVE_FAILURE'

export const CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE'
export const CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST'
export const CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_SUCCESS = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_SUCCESS'
export const CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FAILURE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FAILURE'

export const PERFORM_VALIDATE = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_VALIDATE'

export const NAVIGATE_BACK = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_NAVIGATE_BACK'

export const PERFORM_CONTAINER_RESET = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_CHANGE_VISIBLE_ERROR_MODAL = 'GSZ_ACTIVITY_EXCLUDE_CONTAINER_PERFORM_CHANGE_VISIBLE_ERROR_MODAL'

/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to show customer picker screen.
 *
 */
export type NAVIGATE_TO_CUSTOMER_PICKER_SCREEN = {}
export const navigateToCustomerPickerScreen = (): Action<NAVIGATE_TO_CUSTOMER_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    payload: {}
})
/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to show member list screen.
 *
 */
export type NAVIGATE_TO_MEMBER_LIST_SCREEN = {}
export const navigateToMemberListScreen = (): Action<NAVIGATE_TO_MEMBER_LIST_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN,
    payload: {}
})
/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on search input switch changed.
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
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on search input changed.
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
 * Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to reset search parameters.
 *
 */
export type PERFORM_SEARCH_RESET = {}
export const performSearchReset = (): Action<PERFORM_SEARCH_RESET> => ({
    type: PERFORM_SEARCH_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search.
 *
 */
export type PERFORM_SEARCH = {}
export const performSearch = (): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {}
})


/**
 * Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {}
export const search_callGetCustomerSearchList = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {}
export const search_callGetCustomerSearchListRequest = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
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
 * Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
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
 * Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
 */
export type PERFORM_SEARCH_EXECUTE = {}
export const performSearchExecute = (): Action<PERFORM_SEARCH_EXECUTE> => ({
    type: PERFORM_SEARCH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSearch". Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
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
 * Action dispatched on failure in thunk "performSearch". Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search query.
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
 * Internal thunk used in "GszActivityExclude" container. Thunk used to perform search query validation and search type determination.
 *
 */
export type SEARCH_VALIDATE_SEARCH = {}
export const search_validateSearch = (): Action<SEARCH_VALIDATE_SEARCH> => ({
    type: SEARCH_VALIDATE_SEARCH,
    payload: {}
})

/**
 * Internal thunk used in "GszActivityExclude" container. Thunk chain used to perform search.
 *
 * @param {string} inputSearch .
 * @param {boolean} inputSearchManagedOnly .
 * @param {Models.Gsz} currentGsz .
 */
export type FILTER_CUSTOMER_LIST = { inputSearch: string, inputSearchManagedOnly: boolean, currentGsz: Models.Gsz, }
export const filterCustomerList = (inputSearch: string, inputSearchManagedOnly: boolean, currentGsz: Models.Gsz,): Action<FILTER_CUSTOMER_LIST> => ({
    type: FILTER_CUSTOMER_LIST,
    payload: {
        inputSearch: inputSearch,
        inputSearchManagedOnly: inputSearchManagedOnly,
        currentGsz: currentGsz,
    }
})

/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on user input Customer field.
 *
 * @param {Models.Customer} customer
 * @param {ModelsApp.Employee} currentUser
 */
export type PERFORM_INPUT_CUSTOMER = { customer: Models.Customer, currentUser: ModelsApp.Employee }
export const performInputCustomer = (customer: Models.Customer, currentUser: ModelsApp.Employee): Action<PERFORM_INPUT_CUSTOMER> => ({
    type: PERFORM_INPUT_CUSTOMER,
    payload: {
        customer: customer,
        currentUser
    }
})

/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on user input Comment field.
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
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
 *
 */
export type PERFORM_SAVE = {}
export const performSave = (): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
 */
export type PERFORM_SAVE_EXECUTE = {}
export const performSaveExecute = (): Action<PERFORM_SAVE_EXECUTE> => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
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
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
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
 * Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
 *
 */
export type CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE = {}
export const callPostGszActivityExcludeCreate = (): Action<CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE> => ({
    type: CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPostGszActivityExcludeCreate" started. Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
 */
export type CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST = {}
export const callPostGszActivityExcludeCreateRequest = (): Action<CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST> => ({
    type: CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPostGszActivityExcludeCreate". Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_SUCCESS = { response: Response<boolean> }
export const callPostGszActivityExcludeCreateSuccess = (response: Response<boolean>): Action<CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_SUCCESS> => ({
    type: CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPostGszActivityExcludeCreate". Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FAILURE = { error: Error }
export const callPostGszActivityExcludeCreateFailure = (error: Error): Action<CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FAILURE> => ({
    type: CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "GszActivityExclude" container. Thunk used to confirm changes.
 *
 * @param {ModelsApp.Employee} currentUser .
 */
export type PERFORM_VALIDATE = { currentUser: ModelsApp.Employee, }
export const performValidate = (currentUser: ModelsApp.Employee,): Action<PERFORM_VALIDATE> => ({
    type: PERFORM_VALIDATE,
    payload: {
        currentUser: currentUser,
    }
})

/**
 * Thunk dispatched by "GszActivityExclude" screen.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})


/**
 * Internal thunk used in "GszActivityExclude" container. Thunk used to change visible of error modal.
 *
 * @param {boolean} status
 */
export type PERFORM_CHANGE_VISIBLE_ERROR_MODAL = { status: boolean }
export const performChangeVisibleErrorModal = (status: boolean): Action<PERFORM_CHANGE_VISIBLE_ERROR_MODAL> => ({
    type: PERFORM_CHANGE_VISIBLE_ERROR_MODAL,
    payload: {
       status
    }
})