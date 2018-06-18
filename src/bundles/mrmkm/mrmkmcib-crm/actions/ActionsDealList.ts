/**
 * Actions of DealList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"


export const PERFORM_CHANGE_TAB = 'DEAL_LIST_CONTAINER_PERFORM_CHANGE_TAB'

export const PERFORM_INPUT_FILTER_VALUE = 'DEAL_LIST_CONTAINER_PERFORM_INPUT_FILTER_VALUE'

export const PERFORM_POPOVER_FILTER_SHOW = 'DEAL_LIST_CONTAINER_PERFORM_POPOVER_FILTER_SHOW'

export const PERFORM_POPOVER_FILTER_HIDE = 'DEAL_LIST_CONTAINER_PERFORM_POPOVER_FILTER_HIDE'

export const PERFORM_FILTER_APPLY = 'DEAL_LIST_CONTAINER_PERFORM_FILTER_APPLY'
export const SET_SUP_PARAMETER_DEAL = 'DEAL_LIST_CONTAINER_SET_SUP_PARAMETER_DEAL'

export const PERFORM_FILTER_RESET = 'DEAL_LIST_CONTAINER_PERFORM_FILTER_RESET'

export const PERFORM_DEAL_LIST_REFRESH = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH'
export const PERFORM_DEAL_LIST_REFRESH_EXECUTE = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_EXECUTE'
export const PERFORM_DEAL_LIST_REFRESH_SUCCESS = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_SUCCESS'
export const PERFORM_DEAL_LIST_REFRESH_FAILURE = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_FAILURE'

export const REFRESH_CALL_GET_DEAL_LIST = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST'
export const REFRESH_CALL_GET_DEAL_LIST_REQUEST = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_REQUEST'
export const REFRESH_CALL_GET_DEAL_LIST_SUCCESS = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_SUCCESS'
export const REFRESH_CALL_GET_DEAL_LIST_FAILURE = 'DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_FAILURE'

export const REFRESH_DEAL_LIST_CONCAT = 'DEAL_LIST_CONTAINER_REFRESH_DEAL_LIST_CONCAT'

export const DEAL_LIST_REDUCE = 'DEAL_LIST_CONTAINER_DEAL_LIST_REDUCE'

export const PERFORM_DEAL_CREATE = 'DEAL_LIST_CONTAINER_PERFORM_DEAL_CREATE'
export const PERFORM_FLUSH = 'DEAL_LIST_PERFORM_FLUSH'

export const PERFORM_CONTAINER_RESET = 'DEAL_LIST_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_NEW_DEAL_LIST_UPDATE = 'PERFORM_NEW_DEAL_LIST_UPDATE'
export const FILTER_POPOVER_NAVIGATE_BACK = 'FILTER_POPOVER_NAVIGATE_BACK'
export const FILTER_POPOVER_NAVIGATE_TO_DATE_TO = 'FILTER_POPOVER_NAVIGATE_TO_DATE_TO'
export const FILTER_POPOVER_NAVIGATE_TO_DATE_FROM = 'FILTER_POPOVER_NAVIGATE_TO_DATE_FROM'
export const FILTER_POPOVER_NAVIGATE_TO_CURRENCY = 'FILTER_POPOVER_NAVIGATE_TO_CURRENCY'
export const FILTER_POPOVER_NAVIGATE_TO_PRODUCT = 'FILTER_POPOVER_NAVIGATE_TO_PRODUCT'
export const FILTER_POPOVER_NAVIGATE_TO_ROLE = 'FILTER_POPOVER_NAVIGATE_TO_ROLE'
export const FILTER_POPOVER_NAVIGATE_TO_STAGE = 'FILTER_POPOVER_NAVIGATE_TO_STAGE'
export const START_ROW_ANIMATION = 'DEAL_LIST_CONTAINER_START_ROW_ANIMATION'

export const SET_SUP_PARAMETER_SALES_METHOD = 'DEAL_LIST_CONTAINER_SET_SUP_PARAMETER_SALES_METHOD'
/**
 * Thunk dispatched by "Customer" screen. Thunk used to flush cache by any kind customer data and request it again.
 *
 */
export type PERFORM_FLUSH = {}
export const performFlush = (): Action<PERFORM_FLUSH> => ({
    type: PERFORM_FLUSH,
    payload: {}
})

export type SET_SUP_PARAMETER_SALES_METHOD = {value: string}
export const setSupParameterSalesMethod = (value: string): Action<SET_SUP_PARAMETER_SALES_METHOD> => ({
    type: SET_SUP_PARAMETER_SALES_METHOD,
    payload: {
        value: value,
    }
})


/**
 * Thunk dispatched by "DealList" screen. Thunk chain dispatched on tab selector change current tab.
 *§
 * @param {number} index .
 * @param {Enums.DealListTab} value .
 */
export type PERFORM_CHANGE_TAB = { index: number, value: Enums.DealListTab, }
export const performChangeTab = (index: number, value: Enums.DealListTab,): Action<PERFORM_CHANGE_TAB> => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index: index,
        value: value,
    }
})

/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched on user input FilterPeriodStart field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_FILTER_VALUE = { value: Models.DealListFilter, currentTab:Enums.DealListTab  }
export const performInputFilterValue = (value: Models.DealListFilter, currentTab:Enums.DealListTab): Action<PERFORM_INPUT_FILTER_VALUE> => ({
    type: PERFORM_INPUT_FILTER_VALUE,
    payload: {
        value: value,
        currentTab: currentTab,
    }
})

/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_FILTER_SHOW = {currentTab:Enums.DealListTab}
export const performPopoverFilterShow = (currentTab:Enums.DealListTab): Action<PERFORM_POPOVER_FILTER_SHOW> => ({
    type: PERFORM_POPOVER_FILTER_SHOW,
    payload: {currentTab:currentTab}
})

/**
 * Thunk dispatched to set all sup parameters for deals.
 *
 */
export type SET_SUP_PARAMETER_DEAL = {params: ModelsApp.SupParamsDeal}
export const setSupParameterDeal = (params: ModelsApp.SupParamsDeal): Action<SET_SUP_PARAMETER_DEAL> => ({
    type: SET_SUP_PARAMETER_DEAL,
    payload: { params: params}
})

/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_FILTER_HIDE = {}
export const performPopoverFilterHide = (): Action<PERFORM_POPOVER_FILTER_HIDE> => ({
    type: PERFORM_POPOVER_FILTER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type PERFORM_FILTER_APPLY = {currentTab:Enums.DealListTab}
export const performFilterApply = (currentTab:Enums.DealListTab): Action<PERFORM_FILTER_APPLY> => ({
    type: PERFORM_FILTER_APPLY,
    payload: { currentTab: currentTab}
})


/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_TO_DATE_TO = {}
export const filterPopoverNavigateToDateTo = (): Action<FILTER_POPOVER_NAVIGATE_TO_DATE_TO> => ({
    type: FILTER_POPOVER_NAVIGATE_TO_DATE_TO,
    payload: { }
})


/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_TO_DATE_FROM = {}
export const filterPopoverNavigateToDateFrom = (): Action<FILTER_POPOVER_NAVIGATE_TO_DATE_FROM> => ({
    type: FILTER_POPOVER_NAVIGATE_TO_DATE_FROM,
    payload: { }
})


/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_TO_CURRENCY = {}
export const filterPopoverNavigateToCurrency = (): Action<FILTER_POPOVER_NAVIGATE_TO_CURRENCY> => ({
    type: FILTER_POPOVER_NAVIGATE_TO_CURRENCY,
    payload: { }
})



/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_TO_PRODUCT = {}
export const filterPopoverNavigateToProduct = (): Action<FILTER_POPOVER_NAVIGATE_TO_PRODUCT> => ({
    type: FILTER_POPOVER_NAVIGATE_TO_PRODUCT,
    payload: { }
})



/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_TO_ROLE = {}
export const filterPopoverNavigateToRole = (): Action<FILTER_POPOVER_NAVIGATE_TO_ROLE> => ({
    type: FILTER_POPOVER_NAVIGATE_TO_ROLE,
    payload: { }
})


/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_TO_STAGE = {}
export const filterPopoverNavigateToStage = (): Action<FILTER_POPOVER_NAVIGATE_TO_STAGE> => ({
    type: FILTER_POPOVER_NAVIGATE_TO_STAGE,
    payload: { }
})


/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export type FILTER_POPOVER_NAVIGATE_BACK = {}
export const filterPopoverNavigateBack = (): Action<FILTER_POPOVER_NAVIGATE_BACK> => ({
    type: FILTER_POPOVER_NAVIGATE_BACK,
    payload: { }
})


/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to reset filter period.
 *
 */
export type PERFORM_FILTER_RESET = {currentTab:Enums.DealListTab}
export const performFilterReset = (currentTab:Enums.DealListTab): Action<PERFORM_FILTER_RESET> => ({
    type: PERFORM_FILTER_RESET,
    payload: {currentTab:currentTab}
})

/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
 *
 */
export type PERFORM_DEAL_LIST_REFRESH = {}
export const performDealListRefresh = (): Action<PERFORM_DEAL_LIST_REFRESH> => ({
    type: PERFORM_DEAL_LIST_REFRESH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performDealListRefresh" started. Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
 */
export type PERFORM_DEAL_LIST_REFRESH_EXECUTE = {}
export const performDealListRefreshExecute = (): Action<PERFORM_DEAL_LIST_REFRESH_EXECUTE> => ({
    type: PERFORM_DEAL_LIST_REFRESH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performDealListRefresh". Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_DEAL_LIST_REFRESH_SUCCESS = { data: boolean }
export const performDealListRefreshSuccess = (data: boolean): Action<PERFORM_DEAL_LIST_REFRESH_SUCCESS> => ({
    type: PERFORM_DEAL_LIST_REFRESH_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performDealListRefresh". Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_DEAL_LIST_REFRESH_FAILURE = { error: Error }
export const performDealListRefreshFailure = (error: Error): Action<PERFORM_DEAL_LIST_REFRESH_FAILURE> => ({
    type: PERFORM_DEAL_LIST_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "DealList" container. Fetch activity list current page.
 *
 */
export type REFRESH_CALL_GET_DEAL_LIST = {}
export const refresh_callGetDealList = (): Action<REFRESH_CALL_GET_DEAL_LIST> => ({
    type: REFRESH_CALL_GET_DEAL_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "refresh_callGetDealList" started. Internal thunk used in "DealList" container. Fetch activity list current page.
 */
export type REFRESH_CALL_GET_DEAL_LIST_REQUEST = {}
export const refresh_callGetDealListRequest = (): Action<REFRESH_CALL_GET_DEAL_LIST_REQUEST> => ({
    type: REFRESH_CALL_GET_DEAL_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetDealList". Internal thunk used in "DealList" container. Fetch activity list current page.
 *
 * @param {Models.DealListPage} response Data received by fetch.
 */
export type REFRESH_CALL_GET_DEAL_LIST_SUCCESS = { response: Response<Models.DealListPage> }
export const refresh_callGetDealListSuccess = (response: Response<Models.DealListPage>): Action<REFRESH_CALL_GET_DEAL_LIST_SUCCESS> => ({
    type: REFRESH_CALL_GET_DEAL_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "refresh_callGetDealList". Internal thunk used in "DealList" container. Fetch activity list current page.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_DEAL_LIST_FAILURE = { error: Error }
export const refresh_callGetDealListFailure = (error: Error): Action<REFRESH_CALL_GET_DEAL_LIST_FAILURE> => ({
    type: REFRESH_CALL_GET_DEAL_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Internal thunk used in "DealList" container. Thunk chain used to concat next page and append deal list.
 *
 */
export type REFRESH_DEAL_LIST_CONCAT = {}
export const refresh_dealListConcat = (): Action<REFRESH_DEAL_LIST_CONCAT> => ({
    type: REFRESH_DEAL_LIST_CONCAT,
    payload: {}
})

/**
 * Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
 *
 * @param {ModelsApp.Employee} currentUser .
 */
export type DEAL_LIST_REDUCE = { currentUser: ModelsApp.Employee, infoMessage: string|null, isCreateDealEnable: boolean, isEditDealEnable: boolean, isButtonCreateVisible: boolean}
export const dealListReduce = (currentUser: ModelsApp.Employee, infoMessage: string |null, isCreateDealEnable: boolean, isEditDealEnable: boolean, isButtonCreateVisible: boolean): Action<DEAL_LIST_REDUCE> => ({

    type: DEAL_LIST_REDUCE,
    payload: {
        currentUser: currentUser,
        infoMessage: infoMessage,
        isButtonCreateVisible: isButtonCreateVisible,
        isCreateDealEnable: isCreateDealEnable,
        isEditDealEnable: isEditDealEnable,
    }
})

/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to create new deal.
 *
 */
export type PERFORM_DEAL_CREATE = {}
export const performDealCreate = (): Action<PERFORM_DEAL_CREATE> => ({
    type: PERFORM_DEAL_CREATE,
    payload: {}
})

/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

export type START_ROW_ANIMATION = {value: boolean}
export const startRowAnimation = (value: boolean): Action<START_ROW_ANIMATION> => ({
    type: START_ROW_ANIMATION,
    payload: {
        value: value
    }
})


export type PERFORM_NEW_DEAL_LIST_UPDATE = {dealList: Models.DealList}
export const performNewDealListUpdate = (dealList: Models.DealList): Action<PERFORM_NEW_DEAL_LIST_UPDATE> => ({
    type: PERFORM_NEW_DEAL_LIST_UPDATE,
    payload: {
        dealList:dealList
    }
})

