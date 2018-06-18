/**
 * Actions of AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {
    EnumsCrm,
    Enums as EnumsCrmAll,
    Models,
} from "mrmkmcib-crm"
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


export const SWAP_CONTEXT = 'APP_CRM_CONTAINER_SWAP_CONTEXT'

export const PERFORM_APPLICATION_INIT = 'APP_CRM_CONTAINER_PERFORM_APPLICATION_INIT'

export const PERFORM_CUSTOMER_LIST_REFRESH = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_LIST_REFRESH'

export const PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE = 'APP_CRM_CONTAINER_PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE'

export const PERFORM_INPUT_FILTER_MEMBER_ROLE = 'APP_CRM_CONTAINER_PERFORM_INPUT_FILTER_MEMBER_ROLE'

export const VALIDATE_FILTER_LIST = 'APP_CRM_CONTAINER_VALIDATE_FILTER_LIST'

export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH'
export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE'
export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS'
export const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE'

export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = 'APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST'
export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = 'APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST'
export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = 'APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS'
export const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = 'APP_CRM_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE'

export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND'
export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE'
export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS'
export const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE'

export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = 'APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST'
export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = 'APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST'
export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = 'APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS'
export const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = 'APP_CRM_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE'

export const APPEND_CUSTOMER_MANAGED_LIST_CONCAT = 'APP_CRM_CONTAINER_APPEND_CUSTOMER_MANAGED_LIST_CONCAT'

export const PERFORM_SEARCH_MODE_ENABLE = 'APP_CRM_CONTAINER_PERFORM_SEARCH_MODE_ENABLE'

export const PERFORM_SEARCH_MODE_DISABLE = 'APP_CRM_CONTAINER_PERFORM_SEARCH_MODE_DISABLE'

export const PERFORM_INPUT_SEARCH = 'APP_CRM_CONTAINER_PERFORM_INPUT_SEARCH'

export const PERFORM_SEARCH_RESET = 'APP_CRM_CONTAINER_PERFORM_SEARCH_RESET'

export const PERFORM_CUSTOMER_SEARCH_LIST_RESET = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_RESET'

export const PERFORM_SEARCH = 'APP_CRM_CONTAINER_PERFORM_SEARCH'
export const PERFORM_SEARCH_EXECUTE = 'APP_CRM_CONTAINER_PERFORM_SEARCH_EXECUTE'
export const PERFORM_SEARCH_SUCCESS = 'APP_CRM_CONTAINER_PERFORM_SEARCH_SUCCESS'
export const PERFORM_SEARCH_FAILURE = 'APP_CRM_CONTAINER_PERFORM_SEARCH_FAILURE'

export const SEARCH_VALIDATE_SEARCH = 'APP_CRM_CONTAINER_SEARCH_VALIDATE_SEARCH'

export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = 'APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = 'APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = 'APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS'
export const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = 'APP_CRM_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE'

export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS'
export const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE'

export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = 'APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = 'APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = 'APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS'
export const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = 'APP_CRM_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE'

export const SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = 'APP_CRM_CONTAINER_SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT'

export const PERFORM_CUSTOMER_OPEN = 'APP_CRM_CONTAINER_PERFORM_CUSTOMER_OPEN'

export const PERFORM_GSZ_OPEN = 'APP_CRM_CONTAINER_PERFORM_GSZ_OPEN'

export const PERFORM_DEAL_OPEN = 'APP_CRM_CONTAINER_PERFORM_DEAL_OPEN'

export const NAVIGATE_BACK = 'APP_CRM_CONTAINER_NAVIGATE_BACK'

export const PERFORM_CONTAINER_RESET = 'APP_CRM_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_FLUSH = 'APP_CRM_CONTAINER_PERFORM_FLUSH'

export const PERFORM_REFRESH_BAR_HIDE = 'APP_CRM_CONTAINER_PERFORM_REFRESH_BAR_HIDE'

export const PERFORM_SEARCH_TYPE_CHANGE = 'APP_CRM_CONTAINER_PERFORM_SEARCH_TYPE_CHANGE'

export const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = 'APP_CRM_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM'
export const NAVIGATION_LOADER_APP_CRM_SHOW = 'APP_CRM_CONTAINER_NAVIGATION_LOADER_APP_CRM_SHOW'

export const NAVIGATION_LOADER_APP_CRM_HIDE = 'APP_CRM_CONTAINER_NAVIGATION_LOADER_APP_CRM_HIDE'

export const PERFORM_SET_NAVIGATION_IN_PROGRESS = 'APP_CRM_CONTAINER_PERFORM_SET_NAVIGATION_IN_PROGRESS'

/**
 * Internal thunk used in "AppCRM" container. Thunk chain dispatched to set context parameters.
 *
 * @param {ModelsApp.Employee} user .
 * @param {ModelsApp.ClassifierDictionary} classifierDictionary .
 * @param {string} appBuildVersion .
 * @param {string} appServerUrl .
 * @param {string} appServerPath .
 */
export type SWAP_CONTEXT = {
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentExchangePerson: ModelsScheduler.Person,
    user: ModelsApp.Employee,
    appBuildVersion: string,
    appServerUrl: string,
    appServerPath: string,
}
export const swapContext = (user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary,
    currentExchangePerson: ModelsScheduler.Person, appBuildVersion: string, appServerUrl: string, appServerPath: string): Action<SWAP_CONTEXT> => ({

    type: SWAP_CONTEXT,
    payload: {
        classifierDictionary,
        currentExchangePerson,
        user,
        appBuildVersion,
        appServerUrl,
        appServerPath,
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to init CRM mobile application.
 *
 */
export type PERFORM_APPLICATION_INIT = {}
export const performApplicationInit = (): Action<PERFORM_APPLICATION_INIT> => ({
    type: PERFORM_APPLICATION_INIT,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to reload current list.
 *
 */
export type PERFORM_CUSTOMER_LIST_REFRESH = {}
export const performCustomerListRefresh = (): Action<PERFORM_CUSTOMER_LIST_REFRESH> => ({
    type: PERFORM_CUSTOMER_LIST_REFRESH,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current organizational structure filter.
 *
 * @param {Enums.FilterOrganizationStructure} value .
 */
export type PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE = { value: Enums.FilterOrganizationStructure }
export const performInputFilterOrganizationStructure = (value: Enums.FilterOrganizationStructure): Action<PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE> => ({
    type: PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current member role filter.
 *
 * @param {Enums.FilterMemberRole} value .
 */
export type PERFORM_INPUT_FILTER_MEMBER_ROLE = { value: Enums.FilterMemberRole }
export const performInputFilterMemberRole = (value: Enums.FilterMemberRole): Action<PERFORM_INPUT_FILTER_MEMBER_ROLE> => ({
    type: PERFORM_INPUT_FILTER_MEMBER_ROLE,
    payload: {
        value: value,
    }
})

/**
 * Internal thunk used in "AppCRM" container. Thunk dispatched on change filter to disable not valid filter values.
 *
 */
export type VALIDATE_FILTER_LIST = {}
export const validateFilterList = (): Action<VALIDATE_FILTER_LIST> => ({
    type: VALIDATE_FILTER_LIST,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
 *
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = {}
export const performCustomerManagedListRefresh = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performCustomerManagedListRefresh" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = {}
export const performCustomerManagedListRefreshExecute = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performCustomerManagedListRefresh". Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = { data: boolean }
export const performCustomerManagedListRefreshSuccess = (data: boolean): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS,
    payload: {
        data: data
    }
})
/*
 * Action dispatched on success in thunk "performChangeDisplayErrorModalAppCRM". Thunk dispatched by "AppCRM" screen. Thunk used to chage error modal visibility
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = { data: boolean }
export const performChangeDisplayErrorModalAppCRM = (data: boolean): Action<PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM> => ({
    type: PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performCustomerManagedListRefresh". Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = { error: Error }
export const performCustomerManagedListRefreshFailure = (error: Error): Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "AppCRM" container. Fetch customer list current page.
 *
 */
export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = {}
export const refresh_callGetCustomerManagedList = (): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST,
    payload: {}
})
/**
 * Thunk dispatched by "AppCRM" screen. Remove cache and execute performRefresh
 *
 */
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

/**
 * Action dispatched on network thunk chain "refresh_callGetCustomerManagedList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page.
 */
export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {}
export const refresh_callGetCustomerManagedListRequest = (): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetCustomerManagedList". Internal thunk used in "AppCRM" container. Fetch customer list current page.
 *
 * @param {Models.CustomerManagedList} response Data received by fetch.
 */
export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = { response: Response<Models.CustomerManagedList> }
export const refresh_callGetCustomerManagedListSuccess = (response: Response<Models.CustomerManagedList>): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "refresh_callGetCustomerManagedList". Internal thunk used in "AppCRM" container. Fetch customer list current page.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = { error: Error }
export const refresh_callGetCustomerManagedListFailure = (error: Error): Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE> => ({
    type: REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 *
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND = {}
export const performCustomerManagedListAppend = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performCustomerManagedListAppend" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = {}
export const performCustomerManagedListAppendExecute = (): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performCustomerManagedListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = { data: boolean }
export const performCustomerManagedListAppendSuccess = (data: boolean): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performCustomerManagedListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = { error: Error }
export const performCustomerManagedListAppendFailure = (error: Error): Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE> => ({
    type: PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 *
 */
export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = {}
export const append_callGetCustomerManagedList = (): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "append_callGetCustomerManagedList" started. Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 */
export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {}
export const append_callGetCustomerManagedListRequest = (): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "append_callGetCustomerManagedList". Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 *
 * @param {Models.CustomerManagedListPage} response Data received by fetch.
 */
export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = { response: Response<Models.CustomerManagedListPage> }
export const append_callGetCustomerManagedListSuccess = (response: Response<Models.CustomerManagedListPage>): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "append_callGetCustomerManagedList". Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = { error: Error }
export const append_callGetCustomerManagedListFailure = (error: Error): Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE> => ({
    type: APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer list.
 *
 */
export type APPEND_CUSTOMER_MANAGED_LIST_CONCAT = {}
export const append_customerManagedListConcat = (): Action<APPEND_CUSTOMER_MANAGED_LIST_CONCAT> => ({
    type: APPEND_CUSTOMER_MANAGED_LIST_CONCAT,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to enter search mode
 *
 */
export type PERFORM_SEARCH_MODE_ENABLE = {}
export const performSearchModeEnable = (): Action<PERFORM_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_SEARCH_MODE_ENABLE,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to exit search mode
 *
 */
export type PERFORM_SEARCH_MODE_DISABLE = {}
export const performSearchModeDisable = (): Action<PERFORM_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_SEARCH_MODE_DISABLE,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on search input changed.
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
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to reset search parameters.
 *
 */
export type PERFORM_SEARCH_RESET = {}
export const performSearchReset = (): Action<PERFORM_SEARCH_RESET> => ({
    type: PERFORM_SEARCH_RESET,
    payload: {}
})

/**
 * Internal thunk used in "AppCRM" container. Thunk chain used to reset search parameters.
 *
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_RESET = {}
export const performCustomerSearchListReset = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_RESET> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
 *
 */
export type PERFORM_SEARCH = {}
export const performSearch = (): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
 */
export type PERFORM_SEARCH_EXECUTE = {}
export const performSearchExecute = (): Action<PERFORM_SEARCH_EXECUTE> => ({
    type: PERFORM_SEARCH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSearch". Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
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
 * Action dispatched on failure in thunk "performSearch". Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
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
 * Internal thunk used in "AppCRM" container. Thunk used to perform search query validation and search type determination.
 *
 */
export type SEARCH_VALIDATE_SEARCH = {}
export const search_validateSearch = (): Action<SEARCH_VALIDATE_SEARCH> => ({
    type: SEARCH_VALIDATE_SEARCH,
    payload: {}
})

/**
 * Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {}
export const search_callGetCustomerSearchList = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 */
export type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {}
export const search_callGetCustomerSearchListRequest = (): Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST> => ({
    type: SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
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
 * Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
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
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
 *
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND = {}
export const performCustomerSearchListAppend = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performCustomerSearchListAppend" started. Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
 */
export type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = {}
export const performCustomerSearchListAppendExecute = (): Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE> => ({
    type: PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
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
 * Action dispatched on failure in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
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
 * Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 *
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = {}
export const searchAppend_callGetCustomerSearchListPage = (): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = {}
export const searchAppend_callGetCustomerSearchListPageRequest = (): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 *
 * @param {Models.CustomerListPage} response Data received by fetch.
 */
export type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = { response: Response<Models.CustomerListPage> }
export const searchAppend_callGetCustomerSearchListPageSuccess = (response: Response<Models.CustomerListPage>): Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS> => ({
    type: SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
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
 * Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer search list.
 *
 */
export type SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = {}
export const searchAppend_customerSearchListConcat = (): Action<SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT> => ({
    type: SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open customer screen.
 *
 * @param {string} customerId .
 */
export type PERFORM_CUSTOMER_OPEN = { customerId: string }
export const performCustomerOpen = (customerId: string): Action<PERFORM_CUSTOMER_OPEN> => ({
    type: PERFORM_CUSTOMER_OPEN,
    payload: {
        customerId: customerId,
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open GSZ screen.
 *
 * @param {string} gszId .
 */
export type PERFORM_GSZ_OPEN = { gszId: string }
export const performGszOpen = (gszId: string): Action<PERFORM_GSZ_OPEN> => ({
    type: PERFORM_GSZ_OPEN,
    payload: {
        gszId: gszId,
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open Deal screen.
 *
 * @param {string} dealId .
 */
export type PERFORM_DEAL_OPEN = { dealId: string }
export const performDealOpen = (dealId: string): Action<PERFORM_DEAL_OPEN> => ({
    type: PERFORM_DEAL_OPEN,
    payload: {
        dealId: dealId,
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk used to navigate back in CRM mobile application.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to change searchType value in state.
 *
 */
export type PERFORM_SEARCH_TYPE_CHANGE = { customerSearchType: EnumsCrmAll.CustomerSearchType }
export const performSearchTypeChange = (customerSearchType: EnumsCrmAll.CustomerSearchType): Action<PERFORM_SEARCH_TYPE_CHANGE> => ({
    type: PERFORM_SEARCH_TYPE_CHANGE,
    payload: {
        customerSearchType: customerSearchType,
    }
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to show loader on CRM page.
 *
 */
export type NAVIGATION_LOADER_APP_CRM_SHOW = {}
export const navigationLoaderAppCRMShow = (): Action<NAVIGATION_LOADER_APP_CRM_SHOW> => ({
    type: NAVIGATION_LOADER_APP_CRM_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide loader on CRM page.
 *
 */
export type NAVIGATION_LOADER_APP_CRM_HIDE = {}
export const navigationLoaderAppCRMHide = (): Action<NAVIGATION_LOADER_APP_CRM_HIDE> => ({
    type: NAVIGATION_LOADER_APP_CRM_HIDE,
    payload: {}
})

export type PERFORM_SET_NAVIGATION_IN_PROGRESS = { customerOpenInProgress: boolean }
export const performSetCustomerOpenInProgress = (customerOpenInProgress: boolean): Action<PERFORM_SET_NAVIGATION_IN_PROGRESS> => ({
    type: PERFORM_SET_NAVIGATION_IN_PROGRESS,
    payload: {
        customerOpenInProgress,
    }
})
