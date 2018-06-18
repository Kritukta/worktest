/**
 * Actions of DealList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_CHANGE_TAB = "DEAL_LIST_CONTAINER_PERFORM_CHANGE_TAB";
export declare const PERFORM_INPUT_FILTER_VALUE = "DEAL_LIST_CONTAINER_PERFORM_INPUT_FILTER_VALUE";
export declare const PERFORM_POPOVER_FILTER_SHOW = "DEAL_LIST_CONTAINER_PERFORM_POPOVER_FILTER_SHOW";
export declare const PERFORM_POPOVER_FILTER_HIDE = "DEAL_LIST_CONTAINER_PERFORM_POPOVER_FILTER_HIDE";
export declare const PERFORM_FILTER_APPLY = "DEAL_LIST_CONTAINER_PERFORM_FILTER_APPLY";
export declare const SET_SUP_PARAMETER_DEAL = "DEAL_LIST_CONTAINER_SET_SUP_PARAMETER_DEAL";
export declare const PERFORM_FILTER_RESET = "DEAL_LIST_CONTAINER_PERFORM_FILTER_RESET";
export declare const PERFORM_DEAL_LIST_REFRESH = "DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH";
export declare const PERFORM_DEAL_LIST_REFRESH_EXECUTE = "DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_EXECUTE";
export declare const PERFORM_DEAL_LIST_REFRESH_SUCCESS = "DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_SUCCESS";
export declare const PERFORM_DEAL_LIST_REFRESH_FAILURE = "DEAL_LIST_CONTAINER_PERFORM_DEAL_LIST_REFRESH_FAILURE";
export declare const REFRESH_CALL_GET_DEAL_LIST = "DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST";
export declare const REFRESH_CALL_GET_DEAL_LIST_REQUEST = "DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_REQUEST";
export declare const REFRESH_CALL_GET_DEAL_LIST_SUCCESS = "DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_SUCCESS";
export declare const REFRESH_CALL_GET_DEAL_LIST_FAILURE = "DEAL_LIST_CONTAINER_REFRESH_CALL_GET_DEAL_LIST_FAILURE";
export declare const REFRESH_DEAL_LIST_CONCAT = "DEAL_LIST_CONTAINER_REFRESH_DEAL_LIST_CONCAT";
export declare const DEAL_LIST_REDUCE = "DEAL_LIST_CONTAINER_DEAL_LIST_REDUCE";
export declare const PERFORM_DEAL_CREATE = "DEAL_LIST_CONTAINER_PERFORM_DEAL_CREATE";
export declare const PERFORM_FLUSH = "DEAL_LIST_PERFORM_FLUSH";
export declare const PERFORM_CONTAINER_RESET = "DEAL_LIST_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_NEW_DEAL_LIST_UPDATE = "PERFORM_NEW_DEAL_LIST_UPDATE";
export declare const FILTER_POPOVER_NAVIGATE_BACK = "FILTER_POPOVER_NAVIGATE_BACK";
export declare const FILTER_POPOVER_NAVIGATE_TO_DATE_TO = "FILTER_POPOVER_NAVIGATE_TO_DATE_TO";
export declare const FILTER_POPOVER_NAVIGATE_TO_DATE_FROM = "FILTER_POPOVER_NAVIGATE_TO_DATE_FROM";
export declare const FILTER_POPOVER_NAVIGATE_TO_CURRENCY = "FILTER_POPOVER_NAVIGATE_TO_CURRENCY";
export declare const FILTER_POPOVER_NAVIGATE_TO_PRODUCT = "FILTER_POPOVER_NAVIGATE_TO_PRODUCT";
export declare const FILTER_POPOVER_NAVIGATE_TO_ROLE = "FILTER_POPOVER_NAVIGATE_TO_ROLE";
export declare const FILTER_POPOVER_NAVIGATE_TO_STAGE = "FILTER_POPOVER_NAVIGATE_TO_STAGE";
export declare const START_ROW_ANIMATION = "DEAL_LIST_CONTAINER_START_ROW_ANIMATION";
export declare const SET_SUP_PARAMETER_SALES_METHOD = "DEAL_LIST_CONTAINER_SET_SUP_PARAMETER_SALES_METHOD";
/**
 * Thunk dispatched by "Customer" screen. Thunk used to flush cache by any kind customer data and request it again.
 *
 */
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
export declare type SET_SUP_PARAMETER_SALES_METHOD = {
    value: string;
};
export declare const setSupParameterSalesMethod: (value: string) => Action<SET_SUP_PARAMETER_SALES_METHOD>;
/**
 * Thunk dispatched by "DealList" screen. Thunk chain dispatched on tab selector change current tab.
 *§
 * @param {number} index .
 * @param {Enums.DealListTab} value .
 */
export declare type PERFORM_CHANGE_TAB = {
    index: number;
    value: Enums.DealListTab;
};
export declare const performChangeTab: (index: number, value: Enums.DealListTab) => Action<PERFORM_CHANGE_TAB>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched on user input FilterPeriodStart field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_FILTER_VALUE = {
    value: Models.DealListFilter;
    currentTab: Enums.DealListTab;
};
export declare const performInputFilterValue: (value: Models.DealListFilter, currentTab: Enums.DealListTab) => Action<PERFORM_INPUT_FILTER_VALUE>;
/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to show popover.
 *
 */
export declare type PERFORM_POPOVER_FILTER_SHOW = {
    currentTab: Enums.DealListTab;
};
export declare const performPopoverFilterShow: (currentTab: Enums.DealListTab) => Action<PERFORM_POPOVER_FILTER_SHOW>;
/**
 * Thunk dispatched to set all sup parameters for deals.
 *
 */
export declare type SET_SUP_PARAMETER_DEAL = {
    params: ModelsApp.SupParamsDeal;
};
export declare const setSupParameterDeal: (params: ModelsApp.SupParamsDeal) => Action<SET_SUP_PARAMETER_DEAL>;
/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to hide popover.
 *
 */
export declare type PERFORM_POPOVER_FILTER_HIDE = {};
export declare const performPopoverFilterHide: () => Action<PERFORM_POPOVER_FILTER_HIDE>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type PERFORM_FILTER_APPLY = {
    currentTab: Enums.DealListTab;
};
export declare const performFilterApply: (currentTab: Enums.DealListTab) => Action<PERFORM_FILTER_APPLY>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_TO_DATE_TO = {};
export declare const filterPopoverNavigateToDateTo: () => Action<FILTER_POPOVER_NAVIGATE_TO_DATE_TO>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_TO_DATE_FROM = {};
export declare const filterPopoverNavigateToDateFrom: () => Action<FILTER_POPOVER_NAVIGATE_TO_DATE_FROM>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_TO_CURRENCY = {};
export declare const filterPopoverNavigateToCurrency: () => Action<FILTER_POPOVER_NAVIGATE_TO_CURRENCY>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_TO_PRODUCT = {};
export declare const filterPopoverNavigateToProduct: () => Action<FILTER_POPOVER_NAVIGATE_TO_PRODUCT>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_TO_ROLE = {};
export declare const filterPopoverNavigateToRole: () => Action<FILTER_POPOVER_NAVIGATE_TO_ROLE>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_TO_STAGE = {};
export declare const filterPopoverNavigateToStage: () => Action<FILTER_POPOVER_NAVIGATE_TO_STAGE>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 *
 */
export declare type FILTER_POPOVER_NAVIGATE_BACK = {};
export declare const filterPopoverNavigateBack: () => Action<FILTER_POPOVER_NAVIGATE_BACK>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to reset filter period.
 *
 */
export declare type PERFORM_FILTER_RESET = {
    currentTab: Enums.DealListTab;
};
export declare const performFilterReset: (currentTab: Enums.DealListTab) => Action<PERFORM_FILTER_RESET>;
/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
 *
 */
export declare type PERFORM_DEAL_LIST_REFRESH = {};
export declare const performDealListRefresh: () => Action<PERFORM_DEAL_LIST_REFRESH>;
export declare type PERFORM_DEAL_LIST_REFRESH_EXECUTE = {};
export declare const performDealListRefreshExecute: () => Action<PERFORM_DEAL_LIST_REFRESH_EXECUTE>;
export declare type PERFORM_DEAL_LIST_REFRESH_SUCCESS = {
    data: boolean;
};
export declare const performDealListRefreshSuccess: (data: boolean) => Action<PERFORM_DEAL_LIST_REFRESH_SUCCESS>;
export declare type PERFORM_DEAL_LIST_REFRESH_FAILURE = {
    error: Error;
};
export declare const performDealListRefreshFailure: (error: Error) => Action<PERFORM_DEAL_LIST_REFRESH_FAILURE>;
/**
 * Internal thunk used in "DealList" container. Fetch activity list current page.
 *
 */
export declare type REFRESH_CALL_GET_DEAL_LIST = {};
export declare const refresh_callGetDealList: () => Action<REFRESH_CALL_GET_DEAL_LIST>;
/**
 * Action dispatched on network thunk chain "refresh_callGetDealList" started. Internal thunk used in "DealList" container. Fetch activity list current page.
 */
export declare type REFRESH_CALL_GET_DEAL_LIST_REQUEST = {};
export declare const refresh_callGetDealListRequest: () => Action<REFRESH_CALL_GET_DEAL_LIST_REQUEST>;
export declare type REFRESH_CALL_GET_DEAL_LIST_SUCCESS = {
    response: Response<Models.DealListPage>;
};
export declare const refresh_callGetDealListSuccess: (response: Response<Models.DealListPage>) => Action<REFRESH_CALL_GET_DEAL_LIST_SUCCESS>;
export declare type REFRESH_CALL_GET_DEAL_LIST_FAILURE = {
    error: Error;
};
export declare const refresh_callGetDealListFailure: (error: Error) => Action<REFRESH_CALL_GET_DEAL_LIST_FAILURE>;
/**
 * Internal thunk used in "DealList" container. Thunk chain used to concat next page and append deal list.
 *
 */
export declare type REFRESH_DEAL_LIST_CONCAT = {};
export declare const refresh_dealListConcat: () => Action<REFRESH_DEAL_LIST_CONCAT>;
/**
 * Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
 *
 * @param {ModelsApp.Employee} currentUser .
 */
export declare type DEAL_LIST_REDUCE = {
    currentUser: ModelsApp.Employee;
    infoMessage: string | null;
    isCreateDealEnable: boolean;
    isEditDealEnable: boolean;
    isButtonCreateVisible: boolean;
};
export declare const dealListReduce: (currentUser: ModelsApp.Employee, infoMessage: string | null, isCreateDealEnable: boolean, isEditDealEnable: boolean, isButtonCreateVisible: boolean) => Action<DEAL_LIST_REDUCE>;
/**
 * Thunk dispatched by "DealList" screen. Thunk chain used to create new deal.
 *
 */
export declare type PERFORM_DEAL_CREATE = {};
export declare const performDealCreate: () => Action<PERFORM_DEAL_CREATE>;
/**
 * Thunk dispatched by "DealList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
export declare type START_ROW_ANIMATION = {
    value: boolean;
};
export declare const startRowAnimation: (value: boolean) => Action<START_ROW_ANIMATION>;
export declare type PERFORM_NEW_DEAL_LIST_UPDATE = {
    dealList: Models.DealList;
};
export declare const performNewDealListUpdate: (dealList: Models.DealList) => Action<PERFORM_NEW_DEAL_LIST_UPDATE>;
