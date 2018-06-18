/**
 * Actions of ParentDealPicker container.
 *
 * @author Gladkov E.N.
 */
import { Models } from 'mrmkmcib-crm';
import Action from '../models/Action';
import Response from '../models/Response';
import Error from '../models/Error';
import { Enums } from '../Enums';
export declare const NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN = "PARENT_DEAL_CONTAINER_NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN";
export declare const PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH";
export declare const PERFORM_PARENT_DEAL_CUSTOMER_SELECT = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SELECT";
export declare const PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE";
export declare const PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE";
export declare const PERFORM_PARENT_DEAL_CUSTOMER_SEARCH = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_SEARCH";
export declare const PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH";
export declare const NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN = "PARENT_DEAL_CONTAINER_NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN";
export declare const PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE";
export declare const CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK = "PARENT_DEAL_CONTAINER_CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK";
export declare const PERFORM_PARENT_DEAL_DEAL_SELECT = "PARENT_DEAL_CONTAINER_PERFORM_PARENT_DEAL_DEAL_SELECT";
export declare const NAVIGATE_BACK = "PARENT_DEAL_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_CUSTOMER_LIST_REFRESH = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_LIST_REFRESH";
export declare const PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE = "PARENT_DEAL_CONTAINER_PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE";
export declare const PERFORM_INPUT_FILTER_MEMBER_ROLE = "PARENT_DEAL_CONTAINER_PERFORM_INPUT_FILTER_MEMBER_ROLE";
export declare const VALIDATE_FILTER_LIST = "PARENT_DEAL_CONTAINER_VALIDATE_FILTER_LIST";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = "PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = "PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = "PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS";
export declare const REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = "PARENT_DEAL_CONTAINER_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS";
export declare const PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = "PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = "PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = "PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS";
export declare const APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = "PARENT_DEAL_CONTAINER_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE";
export declare const APPEND_CUSTOMER_MANAGED_LIST_CONCAT = "PARENT_DEAL_CONTAINER_APPEND_CUSTOMER_MANAGED_LIST_CONCAT";
export declare const PERFORM_SEARCH_MODE_ENABLE = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_MODE_ENABLE";
export declare const PERFORM_SEARCH_MODE_DISABLE = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_MODE_DISABLE";
export declare const PERFORM_INPUT_SEARCH = "PARENT_DEAL_CONTAINER_PERFORM_INPUT_SEARCH";
export declare const PERFORM_SEARCH_RESET = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_RESET";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_RESET = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_RESET";
export declare const PERFORM_SEARCH = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH";
export declare const PERFORM_SEARCH_EXECUTE = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_EXECUTE";
export declare const PERFORM_SEARCH_SUCCESS = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_SUCCESS";
export declare const PERFORM_SEARCH_FAILURE = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_FAILURE";
export declare const SEARCH_VALIDATE_SEARCH = "PARENT_DEAL_CONTAINER_SEARCH_VALIDATE_SEARCH";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = "PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = "PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = "PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS";
export declare const SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = "PARENT_DEAL_CONTAINER_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS";
export declare const PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = "PARENT_DEAL_CONTAINER_PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = "PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = "PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = "PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS";
export declare const SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = "PARENT_DEAL_CONTAINER_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE";
export declare const SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = "PARENT_DEAL_CONTAINER_SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT";
export declare const PERFORM_CONTAINER_RESET = "PARENT_DEAL_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_FLUSH = "PARENT_DEAL_CONTAINER_PERFORM_FLUSH";
export declare const PERFORM_REFRESH_BAR_HIDE = "PARENT_DEAL_CONTAINER_PERFORM_REFRESH_BAR_HIDE";
export declare const PERFORM_REFRESH_BAR_SHOW = "PARENT_DEAL_CONTAINER_PERFORM_REFRESH_BAR_SHOW";
export declare const PERFORM_SEARCH_TYPE_CHANGE = "PARENT_DEAL_CONTAINER_PERFORM_SEARCH_TYPE_CHANGE";
export declare const PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = "PARENT_DEAL_CONTAINER_PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM";
export declare const NAVIGATION_LOADER_APP_CRM_SHOW = "PARENT_DEAL_CONTAINER_NAVIGATION_LOADER_APP_CRM_SHOW";
export declare const NAVIGATION_LOADER_APP_CRM_HIDE = "PARENT_DEAL_CONTAINER_NAVIGATION_LOADER_APP_CRM_HIDE";
export declare const PERFORM_SET_NAVIGATION_IN_PROGRESS = "PARENT_DEAL_CONTAINER_PERFORM_SET_NAVIGATION_IN_PROGRESS";
export declare const SET_PARENT_DEAL_PICKER_MODE = "PARENT_DEAL_CONTAINER_SET_PARENT_DEAL_PICKER_MODE";
export declare type SET_PARENT_DEAL_PICKER_MODE = {
    mode: Enums.ParentDealPickerMode;
};
export declare const setParentDealPickerMode: (mode: Enums.ParentDealPickerMode) => Action<SET_PARENT_DEAL_PICKER_MODE>;
export declare type NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN = {};
export declare const navigateToParentDealCustomerListScreen: () => Action<NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN>;
export declare type PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH = {
    parentDealCustomerList: Models.CustomerManagedList;
};
export declare const performParentDealCustomerListRefresh: (parentDealCustomerList: Models.CustomerManagedList) => Action<PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH>;
export declare type PERFORM_PARENT_DEAL_CUSTOMER_SELECT = {
    parentDealCustomer: Models.CustomerManaged;
};
export declare const performParentDealCustomerSelect: (parentDealCustomer: Models.CustomerManaged) => Action<PERFORM_PARENT_DEAL_CUSTOMER_SELECT>;
export declare type PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE = {};
export declare const performParentDealCustomerSearchModeDisable: () => Action<PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE>;
export declare type PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE = {};
export declare const performParentDealCustomerSearchModeEnable: () => Action<PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE>;
export declare type PERFORM_PARENT_DEAL_CUSTOMER_SEARCH = {};
export declare const performParentDealCustomerSearch: () => Action<PERFORM_PARENT_DEAL_CUSTOMER_SEARCH>;
export declare type PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH = {
    parentDealCustomerInputSearch: string;
};
export declare const performParentDealCustomerInputSearch: (parentDealCustomerInputSearch: string) => Action<PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH>;
export declare type NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN = {};
export declare const navigateToParentDealDealListScreen: () => Action<NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN>;
export declare type PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH = {};
export declare const performParentDealDealListRefresh: () => Action<PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST = {};
export declare const callGetParentDealDealList: () => Action<CALL_GET_PARENT_DEAL_DEAL_LIST>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN = {};
export declare const callGetParentDealDealListClean: () => Action<CALL_GET_PARENT_DEAL_DEAL_LIST_CLEAN>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST = {};
export declare const callGetParentDealDealListRequest: () => Action<CALL_GET_PARENT_DEAL_DEAL_LIST_REQUEST>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS = {
    response: Response<Models.DealList>;
};
export declare const callGetParentDealDealListSuccess: (response: Response<Models.DealList>) => Action<CALL_GET_PARENT_DEAL_DEAL_LIST_SUCCESS>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE = {
    error: Models.Error;
};
export declare const callGetParentDealDealListFailure: (error: Models.Error) => Action<CALL_GET_PARENT_DEAL_DEAL_LIST_FAILURE>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE = {};
export declare const callGetParentDealDealListIgnore: () => Action<CALL_GET_PARENT_DEAL_DEAL_LIST_IGNORE>;
export declare type CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK = {};
export declare const callGetParentDealDealListBreak: () => Action<CALL_GET_PARENT_DEAL_DEAL_LIST_BREAK>;
export declare type PERFORM_PARENT_DEAL_DEAL_SELECT = {
    parentDealDeal: Models.Deal;
};
export declare const performParentDealDealSelect: (parentDealDeal: Models.Deal) => Action<PERFORM_PARENT_DEAL_DEAL_SELECT>;
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
export declare type PERFORM_CUSTOMER_LIST_REFRESH = {};
export declare const performCustomerListRefresh: () => Action<PERFORM_CUSTOMER_LIST_REFRESH>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH = {};
export declare const performCustomerManagedListRefresh: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE = {};
export declare const performCustomerManagedListRefreshExecute: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_EXECUTE>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS = {
    data: boolean;
};
export declare const performCustomerManagedListRefreshSuccess: (data: boolean) => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_SUCCESS>;
export declare type PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM = {
    data: boolean;
};
export declare const performChangeDisplayErrorModalAppCRM: (data: boolean) => Action<PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE = {
    error: Error;
};
export declare const performCustomerManagedListRefreshFailure: (error: Error) => Action<PERFORM_CUSTOMER_MANAGED_LIST_REFRESH_FAILURE>;
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST = {};
export declare const refresh_callGetCustomerManagedList: () => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST>;
export declare type PERFORM_FLUSH = {};
export declare const performFlush: () => Action<PERFORM_FLUSH>;
export declare type PERFORM_REFRESH_BAR_HIDE = {};
export declare const performRefreshBarHide: () => Action<PERFORM_REFRESH_BAR_HIDE>;
export declare type PERFORM_REFRESH_BAR_SHOW = {};
export declare const performRefreshBarShow: () => Action<PERFORM_REFRESH_BAR_SHOW>;
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {};
export declare const refresh_callGetCustomerManagedListRequest: () => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST>;
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = {
    response: Response<Models.CustomerManagedList>;
};
export declare const refresh_callGetCustomerManagedListSuccess: (response: Response<Models.CustomerManagedList>) => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>;
export declare type REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = {
    error: Error;
};
export declare const refresh_callGetCustomerManagedListFailure: (error: Error) => Action<REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND = {};
export declare const performCustomerManagedListAppend: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE = {};
export declare const performCustomerManagedListAppendExecute: () => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_EXECUTE>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS = {
    data: boolean;
};
export declare const performCustomerManagedListAppendSuccess: (data: boolean) => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_SUCCESS>;
export declare type PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE = {
    error: Error;
};
export declare const performCustomerManagedListAppendFailure: (error: Error) => Action<PERFORM_CUSTOMER_MANAGED_LIST_APPEND_FAILURE>;
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST = {};
export declare const append_callGetCustomerManagedList: () => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST>;
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST = {};
export declare const append_callGetCustomerManagedListRequest: () => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_REQUEST>;
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS = {
    response: Response<Models.CustomerManagedListPage>;
};
export declare const append_callGetCustomerManagedListSuccess: (response: Response<Models.CustomerManagedListPage>) => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_SUCCESS>;
export declare type APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE = {
    error: Error;
};
export declare const append_callGetCustomerManagedListFailure: (error: Error) => Action<APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_FAILURE>;
export declare type APPEND_CUSTOMER_MANAGED_LIST_CONCAT = {};
export declare const append_customerManagedListConcat: () => Action<APPEND_CUSTOMER_MANAGED_LIST_CONCAT>;
export declare type PERFORM_SEARCH_MODE_ENABLE = {};
export declare const performSearchModeEnable: () => Action<PERFORM_SEARCH_MODE_ENABLE>;
export declare type PERFORM_SEARCH_MODE_DISABLE = {};
export declare const performSearchModeDisable: () => Action<PERFORM_SEARCH_MODE_DISABLE>;
export declare type PERFORM_INPUT_SEARCH = {
    value: string;
};
export declare const performInputSearch: (value: string) => Action<PERFORM_INPUT_SEARCH>;
export declare type PERFORM_SEARCH_RESET = {};
export declare const performSearchReset: () => Action<PERFORM_SEARCH_RESET>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_RESET = {};
export declare const performCustomerSearchListReset: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_RESET>;
export declare type PERFORM_SEARCH = {};
export declare const performSearch: () => Action<PERFORM_SEARCH>;
export declare type PERFORM_SEARCH_EXECUTE = {};
export declare const performSearchExecute: () => Action<PERFORM_SEARCH_EXECUTE>;
export declare type PERFORM_SEARCH_SUCCESS = {
    data: boolean;
};
export declare const performSearchSuccess: (data: boolean) => Action<PERFORM_SEARCH_SUCCESS>;
export declare type PERFORM_SEARCH_FAILURE = {
    error: Error;
};
export declare const performSearchFailure: (error: Error) => Action<PERFORM_SEARCH_FAILURE>;
export declare type SEARCH_VALIDATE_SEARCH = {};
export declare const search_validateSearch: () => Action<SEARCH_VALIDATE_SEARCH>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST = {};
export declare const search_callGetCustomerSearchList: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST = {};
export declare const search_callGetCustomerSearchListRequest: () => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS = {
    response: Response<Models.CustomerManagedList>;
};
export declare const search_callGetCustomerSearchListSuccess: (response: Response<Models.CustomerManagedList>) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>;
export declare type SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE = {
    error: Error;
};
export declare const search_callGetCustomerSearchListFailure: (error: Error) => Action<SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND = {};
export declare const performCustomerSearchListAppend: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE = {};
export declare const performCustomerSearchListAppendExecute: () => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS = {
    data: boolean;
};
export declare const performCustomerSearchListAppendSuccess: (data: boolean) => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS>;
export declare type PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE = {
    error: Error;
};
export declare const performCustomerSearchListAppendFailure: (error: Error) => Action<PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE = {};
export declare const searchAppend_callGetCustomerSearchListPage: () => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST = {};
export declare const searchAppend_callGetCustomerSearchListPageRequest: () => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS = {
    response: Response<Models.CustomerManagedListPage>;
};
export declare const searchAppend_callGetCustomerSearchListPageSuccess: (response: Response<Models.CustomerManagedListPage>) => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS>;
export declare type SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE = {
    error: Error;
};
export declare const searchAppend_callGetCustomerSearchListPageFailure: (error: Error) => Action<SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE>;
export declare type SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT = {};
export declare const searchAppend_customerSearchListConcat: () => Action<SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT>;
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
export declare type NAVIGATION_LOADER_APP_CRM_SHOW = {};
export declare const navigationLoaderAppCRMShow: () => Action<NAVIGATION_LOADER_APP_CRM_SHOW>;
export declare type NAVIGATION_LOADER_APP_CRM_HIDE = {};
export declare const navigationLoaderAppCRMHide: () => Action<NAVIGATION_LOADER_APP_CRM_HIDE>;
