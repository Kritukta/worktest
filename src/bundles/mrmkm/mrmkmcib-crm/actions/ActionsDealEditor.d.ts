/**
 * Actions of DealEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsDealEditor from "../models/ModelsDealEditor";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const NAVIGATE_TO_DEAL_EDITOR = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_DEAL_EDITOR";
export declare const SWAP_CONTEXT = "DEAL_EDITOR_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_CANCEL = "DEAL_EDITOR_CONTAINER_PERFORM_CANCEL";
export declare const PERFORM_NEXT = "DEAL_EDITOR_CONTAINER_PERFORM_NEXT";
export declare const PERFORM_SAVE = "DEAL_EDITOR_CONTAINER_PERFORM_SAVE";
export declare const NAVIGATE_BACK = "DEAL_EDITOR_CONTAINER_NAVIGATE_BACK";
export declare const NAVIGATE_BACK_EDITOR = "DEAL_EDITOR_CONTAINER_NAVIGATE_BACK_EDITOR";
export declare const PERFORM_INPUT_CUSTOMER = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_CUSTOMER";
export declare const PERFORM_INPUT_DESCRIPTION = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_DESCRIPTION";
export declare const NAVIGATE_TO_PRODUCT_PICKER_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_PRODUCT_PICKER_SCREEN";
export declare const PERFORM_INPUT_PRODUCT = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_PRODUCT";
export declare const NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN";
export declare const PERFORM_INPUT_SALES_METHOD = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_SALES_METHOD";
export declare const NAVIGATE_TO_CURRENCY_PICKER_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_CURRENCY_PICKER_SCREEN";
export declare const PERFORM_INPUT_CURRENCY = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_CURRENCY";
export declare const PERFORM_INPUT_DEAL_DATE = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_DEAL_DATE";
export declare const NAVIGATE_TO_ACTIVITY_LIST_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_ACTIVITY_LIST_SCREEN";
export declare const NAVIGATE_TO_MEMBER_LIST_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN";
export declare const PERFORM_ACTIVITY_LIST_APPEND = "DEAL_EDITOR_CONTAINER_PERFORM_ACTIVITY_LIST_APPEND";
export declare const CALL_PUT_DEAL_ACTIVITY_APPEND = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND";
export declare const CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST";
export declare const CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS";
export declare const CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE";
export declare const PERFORM_ACTIVITY_LIST_EXCLUDE = "DEAL_EDITOR_CONTAINER_PERFORM_ACTIVITY_LIST_EXCLUDE";
export declare const CALL_PUT_DEAL_ACTIVITY_EXCLUDE = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE";
export declare const CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST";
export declare const CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS";
export declare const CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE";
export declare const PERFORM_SCOPE_CLEAR_AND_REFRESH = "DEAL_EDITOR_CONTAINER_PERFORM_SCOPE_CLEAR_AND_REFRESH";
export declare const PERFORM_CONTAINER_RESET = "DEAL_EDITOR_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL = "DEAL_EDITOR_CONTAINER_PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL";
export declare const PERFORM_SAVE_EXECUTE = "DEAL_EDITOR_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const CALL_POST_DEAL_CREATE = "DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE";
export declare const CALL_POST_DEAL_CREATE_REQUEST = "DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE_REQUEST";
export declare const CALL_PUT_DEAL_UPDATE = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE";
export declare const CALL_PUT_DEAL_UPDATE_REQUEST = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_REQUEST";
export declare const CALL_POST_DEAL_CREATE_REQUEST_SUCCESS = "DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE_REQUEST_SUCCESS";
export declare const CALL_POST_DEAL_CREATE_REQUEST_FAILURE = "DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE_REQUEST_FAILURE";
export declare const PERFORM_SAVE_SUCCESS = "DEAL_EDITOR_CONTAINER_PERFORM_SAVE_SUCCESS";
export declare const PERFORM_SAVE_FAILURE = "DEAL_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE";
export declare const CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS";
export declare const CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE";
export declare const DEAL_CREATED = "DEAL_EDITOR_CONTAINER_DEAL_CREATED";
export declare const INITIAL_VALUES_FOR_DEAL_EDITOR = "DEAL_EDITOR_CONTAINER_INITIAL_VALUES_FOR_DEAL_EDITOR";
export declare const PERFORM_VALIDATE = "DEAL_EDITOR_CONTAINER_PERFORM_VALIDATE";
export declare const PERFORM_SET_EQUIVALENT_RATE_MODE = "DEAL_EDITOR_CONTAINER_PERFORM_SET_EQUIVALENT_RATE_MODE";
export declare const PERFORM_VALIDATE_FORM = "DEAL_EDITOR_CONTAINER_PERFORM_VALIDATE_FORM";
export declare const PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER";
export declare const PERFORM_SET_PRODUCT_METHOD_MODE = "DEAL_EDITOR_CONTAINER_PERFORM_SET_PRODUCT_METHOD_MODE";
export declare const PERFORM_UPDATE_SALES_METHOD = "DEAL_EDITOR_CONTAINER_PERFORM_UPDATE_SALES_METHOD";
export declare const PERFORM_SET_DEAL_CREATION_MODE = "DEAL_EDITOR_CONTAINER_PERFORM_SET_DEAL_CREATION_MODE";
export declare const CALL_GET_DEAL_REFRESH = "DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH";
export declare const CALL_GET_DEAL_REFRESH_REQUEST = "DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH_REQUEST";
export declare const CALL_GET_DEAL_REFRESH_SUCCESS = "DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH_SUCCESS";
export declare const CALL_GET_DEAL_REFRESH_FAILURE = "DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH_FAILURE";
export declare const PERFORM_RETURN_TO_DEAL = "DEAL_EDITOR_CONTAINER_PERFORM_RETURN_TO_DEAL";
export declare const PERFORM_TAP_ACTIVITY_DELETE = "DEAL_EDITOR_CONTAINER_PERFORM_TAP_ACTIVITY_DELETE";
export declare const GET_DEAL_ACTIVITY_LIST = "DEAL_EDITOR_CONTAINER_GET_DEAL_ACTIVITY_LIST";
export declare const PERFORM_INPUT_SAVED_MODE = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_SAVED_MODE";
export declare const PERFORM_INPUT_SUM_STRING = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_SUM_STRING";
export declare const PERFORM_INPUT_EQUIVALENT_SUM_STRING = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_EQUIVALENT_SUM_STRING";
export declare const PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING";
export declare const PREPARE_PRODUCT_CLASSIFIERS = "DEAL_EDITOR_CONTAINER_PREPARE_PRODUCT_CLASSIFIERS";
export declare const PREPARE_SALES_METHOD_CLASSIFIERS = "DEAL_EDITOR_CONTAINER_PREPARE_SALES_METHOD_CLASSIFIERS";
export declare const PREPARE_DEAL_LIST = "DEAL_EDITOR_CONTAINER_PREPARE_DEAL_LIST";
export declare const PERFORM_INPUT_OPERUUID = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_OPERUUID";
export declare const PERFORM_NAVIGATION_BUTTON_DISABLED = "DEAL_EDITOR_CONTAINER_PERFORM_NAVIGATION_BUTTON_DISABLED";
export declare const PERFORM_SET_OWNER_FLAG = "DEAL_EDITOR_CONTAINER_PERFORM_SET_OWNER_FLAG";
export declare const SET_VALIDATION_ERROR = "DEAL_EDITOR_CONTAINER_SET_VALIDATION_ERROR";
export declare const PERFORM_CANCEL_SAVE_ERROR = "DEAL_EDITOR_CONTAINER_PERFORM_CANCEL_SAVE_ERROR";
export declare const NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN";
export declare const PERFORM_INPUT_DEAL_TYPE = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_DEAL_TYPE";
export declare const PERFORM_SHOW_ADDITIONAL_FIELDS = "DEAL_EDITOR_CONTAINER_PERFORM_SHOW_ADDITIONAL_FIELDS";
export declare const PERFORM_SALES_CAMPAIGN_SET = "DEAL_EDITOR_CONTAINER_PERFORM_CAMPAIGN_SET";
export declare const NAVIGATE_TO_AGENT_PICKER_SCREEN = "DEAL_EDITOR_CONTAINER_NAVIGATE_TO_AGENT_PICKER_SCREEN";
export declare const SHOW_CHANCE_POPOVER = "DEAL_EDITOR_CONTAINER_SHOW_CHANCE_POPOVER";
export declare const PERFORM_SELECT_CHANCE = "DEAL_EDITOR_CONTAINER_PERFORM_SELECT_CHANCE";
export declare const SHOW_APPLICATION_POPOVER = "DEAL_EDITOR_CONTAINER_SHOW_APPLICATION_POPOVER";
export declare const SHOW_SALES_METHOD_POPOVER = "DEAL_EDITOR_CONTAINER_SHOW_SALES_METHOD_POPOVER";
export declare const PERFORM_SELECT_APPLICATION = "DEAL_EDITOR_CONTAINER_PERFORM_SELECT_APPLICATION";
export declare const PERFORM_SELECT_SALES_METHOD = "DEAL_EDITOR_CONTAINER_PERFORM_SELECT_SALES_METHOD";
export declare const PREPARE_APPLICATION_KK_CLASSIFIER_LIST = "DEAL_EDITOR_CONTAINER_PREPARE_APPLICATION_KK_CLASSIFIER_LIST";
export declare const PERFORM_PARENT_DEAL_SET = "DEAL_EDITOR_CONTAINER_PERFORM_PARENT_DEAL_SET";
export declare const PERFORM_INPUT_TRANSFER_COMMISSION = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_TRANSFER_COMMISSION";
export declare const PERFORM_INPUT_STAFF_COUNT = "DEAL_EDITOR_CONTAINER_PERFORM_INPUT_STAFF_COUNT";
export declare const SHOW_ATTRACTION_CHANNEL_POPOVER = "DEAL_EDITOR_CONTAINER_SHOW_ATTRACTION_CHANNEL_POPOVER";
export declare const PERFORM_SELECT_ATTRACTION_CHANNEL = "DEAL_EDITOR_CONTAINER_PERFORM_SELECT_ATTRACTION_CHANNEL";
export declare const PERFORM_SAVE_AGENT_LIST = "DEAL_EDITOR_CONTAINER_PERFORM_SAVE_AGENT_LIST";
/**
 * Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
 *
 * @param {Models.Deal} deal .
 * @param {Enums.DealEditorMode} mode - режим (создание, редактирование и т.п.) .
 * @param isInitRoadMapNecessary - необходимость создания дорожной карты стадий клиента .
 */
export declare type NAVIGATE_TO_DEAL_EDITOR = {
    deal: Models.Deal;
    mode: Enums.DealEditorMode;
    isInitRoadMapNecessary: boolean;
};
export declare const navigateToDealEditor: (deal: ModelsCrm.Deal, mode: Enums.DealEditorMode, isInitRoadMapNecessary: boolean) => Action<NAVIGATE_TO_DEAL_EDITOR>;
/**
 * Internal thunk used in "DealEditor" container. Thunk chain used to swap customer and user.
 *
 * @param {Models.CustomerManaged} customer .
 * @param {Models.Deal} deal .
 * @param {boolean} isEditorMode .
 */
export declare type SWAP_CONTEXT = {
    customer: Models.CustomerManaged;
    deal: Models.Deal;
    isEditorMode: boolean;
};
export declare const swapContext: (customer: ModelsCrm.CustomerManaged, deal: ModelsCrm.Deal, isEditorMode: boolean) => Action<SWAP_CONTEXT>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched to confirm road map init request done.
 *
 */
export declare const CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS";
export declare type CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS = {};
export declare const callPutDealInitRoadMapRequestSuccess: () => Action<CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS>;
/**
 * Thunk dispatched to road map init request fail.
 *
 */
export declare const CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE";
export declare type CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE = {
    error: Error;
};
export declare const callPutDealInitRoadMapRequestFailure: (error: Error) => Action<CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE>;
/**
 * Thunk dispatched to road map init request was sent.
 *
 */
export declare const CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST";
export declare type CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST = {};
export declare const callPutDealInitRoadMapRequest: () => Action<CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST>;
/**
 * Thunk dispatched to road map init request prepare.
 *
 */
export declare const CALL_PUT_DEAL_INIT_ROAD_MAP = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP";
export declare type CALL_PUT_DEAL_INIT_ROAD_MAP = {};
export declare const callPutDealInitRoadMap: () => Action<CALL_PUT_DEAL_INIT_ROAD_MAP>;
/**
 * Thunk dispatched to road map init fail.
 *
 */
export declare const PERFORM_INIT_ROAD_MAP_FAILURE = "DEAL_EDITOR_CONTAINER_PERFORM_INIT_ROAD_MAP_FAILURE";
export declare type PERFORM_INIT_ROAD_MAP_FAILURE = {
    error: Error;
};
export declare const performInitRoadMapFailure: (error: Error) => Action<PERFORM_INIT_ROAD_MAP_FAILURE>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
 *
 */
export declare type PERFORM_NEXT = {};
export declare const performNext: () => Action<PERFORM_NEXT>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
 *
 */
export declare type PERFORM_SAVE = {
    operationUuidCreate: string;
    operationUuidUpdate: string;
};
export declare const performSave: (operationUuidCreate: string, operationUuidUpdate: string) => Action<PERFORM_SAVE>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap navigate back.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
export declare type NAVIGATE_BACK_EDITOR = {};
export declare const navigateBackEditor: () => Action<NAVIGATE_BACK_EDITOR>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Customer field.
 *
 * @param {Models.CustomerManaged} value .
 */
export declare type PERFORM_INPUT_CUSTOMER = {
    value: Models.CustomerManaged;
};
export declare const performInputCustomer: (value: ModelsCrm.CustomerManaged) => Action<PERFORM_INPUT_CUSTOMER>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_DESCRIPTION = {
    value: string;
};
export declare const performInputDescription: (value: string) => Action<PERFORM_INPUT_DESCRIPTION>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Product field.
 *
 */
export declare type NAVIGATE_TO_PRODUCT_PICKER_SCREEN = {};
export declare const navigateToProductPickerScreen: () => Action<NAVIGATE_TO_PRODUCT_PICKER_SCREEN>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Product field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_PRODUCT = {
    value: ModelsApp.Classifier;
};
export declare const performInputProduct: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_PRODUCT>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap SalesMethod field.
 *
 */
export declare type NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN = {};
export declare const navigateToSalesMethodPickerScreen: () => Action<NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input SalesMethod field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_SALES_METHOD = {
    value: ModelsApp.Classifier;
};
export declare const performInputSalesMethod: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_SALES_METHOD>;
export declare type PERFORM_UPDATE_SALES_METHOD = {
    value: ModelsApp.Classifier;
};
export declare const performUpdateSalesMethod: (value: ModelsApp.Classifier) => Action<PERFORM_UPDATE_SALES_METHOD>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Currency field.
 *
 */
export declare type NAVIGATE_TO_CURRENCY_PICKER_SCREEN = {};
export declare const navigateToCurrencyPickerScreen: () => Action<NAVIGATE_TO_CURRENCY_PICKER_SCREEN>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Currency field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_CURRENCY = {
    value: ModelsApp.Classifier;
};
export declare const performInputCurrency: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_CURRENCY>;
export declare type PERFORM_INPUT_SUM_STRING = {
    value: string | null;
};
export declare const performInputSumString: (value: string | null) => Action<PERFORM_INPUT_SUM_STRING>;
export declare type PERFORM_INPUT_EQUIVALENT_SUM_STRING = {
    value: string | null;
};
export declare const performInputEquivalentSumString: (value: string | null) => Action<PERFORM_INPUT_EQUIVALENT_SUM_STRING>;
export declare type PERFORM_INPUT_TRANSFER_COMMISSION = {
    value: string | null;
};
export declare const performInputTransferCommission: (value: string | null) => Action<PERFORM_INPUT_TRANSFER_COMMISSION>;
export declare type PERFORM_INPUT_STAFF_COUNT = {
    value: string | null;
};
export declare const performInputStaffCount: (value: string | null) => Action<PERFORM_INPUT_STAFF_COUNT>;
export declare type PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING = {
    value: string | null;
};
export declare const performInputEquivalentConversionRateString: (value: string | null) => Action<PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING>;
/**
 * Thunk dispatched by "thunkDealEditor". Thunk dispatched validation result.
 *
 * @param {number | null} value .
 */
export declare type PERFORM_SET_EQUIVALENT_RATE_MODE = {
    value: boolean;
};
export declare const performSetEquivalentRateMode: (value: boolean) => Action<PERFORM_SET_EQUIVALENT_RATE_MODE>;
export declare type PERFORM_SET_PRODUCT_METHOD_MODE = {
    isProductMethodEnabled: boolean;
};
export declare const performSetProductMethodMode: (isProductMethodEnabled: boolean) => Action<PERFORM_SET_PRODUCT_METHOD_MODE>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input DealDate field.
 *
 * @param {Date | null} value .
 */
export declare type PERFORM_INPUT_DEAL_DATE = {
    value: Date | null;
};
export declare const performInputDealDate: (value: Date | null) => Action<PERFORM_INPUT_DEAL_DATE>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap activity list.
 *
 */
export declare type NAVIGATE_TO_ACTIVITY_LIST_SCREEN = {};
export declare const navigateToActivityListScreen: () => Action<NAVIGATE_TO_ACTIVITY_LIST_SCREEN>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from Scope.
 *
 * @param {ModelsScheduler.Activity} activity .
 */
export declare type PERFORM_ACTIVITY_LIST_APPEND = {};
export declare const performActivityListAppend: () => Action<PERFORM_ACTIVITY_LIST_APPEND>;
/**
 * Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_DEAL_ACTIVITY_APPEND = {};
export declare const callPutDealActivityAppend: () => Action<CALL_PUT_DEAL_ACTIVITY_APPEND>;
/**
 * Action dispatched on network thunk chain "callPutDealActivityAppend" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
 */
export declare type CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST = {};
export declare const callPutDealActivityAppendRequest: () => Action<CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST>;
export declare type CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPutDealActivityAppendSuccess: (response: Response<boolean>) => Action<CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS>;
export declare type CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE = {
    error: Error;
};
export declare const callPutDealActivityAppendFailure: (error: Error) => Action<CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from linked list.
 *
 * @param {ModelsScheduler.Activity} activity .
 */
export declare type PERFORM_ACTIVITY_LIST_EXCLUDE = {
    activity: ModelsScheduler.Activity;
};
export declare const performActivityListExclude: (activity: ModelsScheduler.Activity) => Action<PERFORM_ACTIVITY_LIST_EXCLUDE>;
/**
 * Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_DEAL_ACTIVITY_EXCLUDE = {};
export declare const callPutDealActivityExclude: () => Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE>;
/**
 * Action dispatched on network thunk chain "callPutDealActivityExclude" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
 */
export declare type CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST = {};
export declare const callPutDealActivityExcludeRequest: () => Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST>;
export declare type CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPutDealActivityExcludeSuccess: (response: Response<boolean>) => Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS>;
export declare type CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE = {
    error: Error;
};
export declare const callPutDealActivityExcludeFailure: (error: Error) => Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched after activity list updated.
 *
 */
export declare type PERFORM_SCOPE_CLEAR_AND_REFRESH = {};
export declare const performScopeClearAndRefresh: () => Action<PERFORM_SCOPE_CLEAR_AND_REFRESH>;
/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export declare type NAVIGATE_TO_MEMBER_LIST_SCREEN = {};
export declare const navigateToMemberListScreen: () => Action<NAVIGATE_TO_MEMBER_LIST_SCREEN>;
export declare type PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL = {
    memberList: Models.MemberList;
};
export declare const performSaveMemberListInNewDeal: (memberList: ModelsCrm.MemberList) => Action<PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL>;
export declare type PERFORM_SAVE_EXECUTE = {};
export declare const performSaveExecute: () => Action<PERFORM_SAVE_EXECUTE>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
};
export declare const performSaveSuccess: (data: boolean) => Action<PERFORM_SAVE_SUCCESS>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
export declare type CALL_POST_DEAL_CREATE = {};
export declare const callPostDealCreate: () => Action<CALL_POST_DEAL_CREATE>;
export declare type CALL_POST_DEAL_CREATE_REQUEST = {};
export declare const callPostDealCreateRequest: () => Action<CALL_POST_DEAL_CREATE_REQUEST>;
export declare type CALL_POST_DEAL_CREATE_REQUEST_SUCCESS = {
    id: string;
};
export declare const callPostDealCreateRequestSuccess: (id: string) => Action<CALL_POST_DEAL_CREATE_REQUEST_SUCCESS>;
export declare type PERFORM_SET_DEAL_CREATION_MODE = {
    mode: Enums.DealCreationMode;
};
export declare const perforSetDealCreationMode: (mode: Enums.DealCreationMode) => Action<PERFORM_SET_DEAL_CREATION_MODE>;
export declare type CALL_POST_DEAL_CREATE_REQUEST_FAILURE = {
    error: Models.Error;
};
export declare const callPostDealCreateRequestFailure: (error: ModelsCrm.Error) => Action<CALL_POST_DEAL_CREATE_REQUEST_FAILURE>;
export declare type CALL_PUT_DEAL_UPDATE = {};
export declare const callPutDealUpdate: () => Action<CALL_PUT_DEAL_UPDATE>;
export declare type CALL_PUT_DEAL_UPDATE_REQUEST = {};
export declare const callPutDealUpdateRequest: () => Action<CALL_PUT_DEAL_UPDATE_REQUEST>;
export declare type CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS = {};
export declare const callPutDealUpdateRequestSuccess: () => Action<CALL_PUT_DEAL_UPDATE_REQUEST>;
export declare type CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE = {
    error: Models.Error;
};
export declare const callPutDealUpdateRequestSFailure: (error: ModelsCrm.Error) => Action<CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE>;
export declare type DEAL_CREATED = {};
export declare const dealCreated: () => Action<DEAL_CREATED>;
export declare type INITIAL_VALUES_FOR_DEAL_EDITOR = {
    deal: Models.Deal;
    classifierDictionary: ModelsApp.ClassifierDictionary;
};
export declare const initialValuesForDealEditor: (deal: ModelsCrm.Deal, classifierDictionary: ModelsApp.ClassifierDictionary) => Action<INITIAL_VALUES_FOR_DEAL_EDITOR>;
export declare type PERFORM_VALIDATE = {
    value: boolean;
};
export declare const performValidate: (value: boolean) => Action<PERFORM_VALIDATE>;
export declare type PERFORM_VALIDATE_FORM = {};
export declare const performValidateForm: () => Action<PERFORM_VALIDATE_FORM>;
export declare type PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER = {
    inputFilteredMethodClassifier: ModelsApp.ClassifierList;
};
export declare const performInputFilteredMethodClassifier: (inputFilteredMethodClassifier: ModelsApp.ClassifierList) => Action<PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER>;
export declare type CALL_GET_DEAL_REFRESH = {};
export declare const callGetDealRefresh: () => Action<CALL_GET_DEAL_REFRESH>;
export declare type CALL_GET_DEAL_REFRESH_REQUEST = {};
export declare const callGetDealRefreshRequest: () => Action<CALL_GET_DEAL_REFRESH_REQUEST>;
export declare type CALL_GET_DEAL_REFRESH_SUCCESS = {
    response: Response<Models.Deal>;
};
export declare const callGetDealRefreshSuccess: (response: Response<ModelsCrm.Deal>) => Action<CALL_GET_DEAL_REFRESH_SUCCESS>;
export declare type CALL_GET_DEAL_REFRESH_FAILURE = {
    error: Error;
};
export declare const callGetDealRefreshFailure: (error: Error) => Action<CALL_GET_DEAL_REFRESH_FAILURE>;
export declare type PERFORM_RETURN_TO_DEAL = {};
export declare const performReturnToDeal: () => Action<PERFORM_RETURN_TO_DEAL>;
export declare type PERFORM_TAP_ACTIVITY_DELETE = {
    id: string;
};
export declare const performTapActivityDelete: (id: string) => Action<PERFORM_TAP_ACTIVITY_DELETE>;
export declare type GET_DEAL_ACTIVITY_LIST = {
    activityList: ModelsScheduler.ActivityList;
};
export declare const getDealActivityList: (activityList: ModelsScheduler.ActivityList) => Action<GET_DEAL_ACTIVITY_LIST>;
export declare type PERFORM_INPUT_SAVED_MODE = {
    savedMode: Enums.ValidateForm;
};
export declare const performInputSavedMode: (savedMode: Enums.ValidateForm) => Action<PERFORM_INPUT_SAVED_MODE>;
export declare type PREPARE_PRODUCT_CLASSIFIERS = {
    productClassifiersList: ModelsApp.ClassifierList;
};
export declare const prepareProductClassifiers: (productClassifiersList: ModelsApp.ClassifierList) => Action<PREPARE_PRODUCT_CLASSIFIERS>;
export declare type PREPARE_SALES_METHOD_CLASSIFIERS = {
    salesMethodClassifiersList: ModelsApp.ClassifierList;
};
export declare const prepareSalesMethodClassifiers: (salesMethodClassifiersList: ModelsApp.ClassifierList) => Action<PREPARE_SALES_METHOD_CLASSIFIERS>;
export declare type PREPARE_DEAL_LIST = {};
export declare const prepareDealList: () => Action<PREPARE_DEAL_LIST>;
export declare type PERFORM_INPUT_OPERUUID = {
    activityOperUuid: ModelsDealEditor.ActivityOperUuid | null;
};
export declare const performInputOperUuid: (activityOperUuid: ModelsDealEditor.ActivityOperUuid | null) => Action<PERFORM_INPUT_OPERUUID>;
export declare type PERFORM_NAVIGATION_BUTTON_DISABLED = {
    isNavigationButtonDisabled: boolean;
};
export declare const performNavigationButtonDisabled: (isNavigationButtonDisabled: boolean) => Action<PERFORM_NAVIGATION_BUTTON_DISABLED>;
export declare type PERFORM_SET_OWNER_FLAG = {
    isOwner: boolean;
};
export declare const performSetOwnerFlag: (isOwner: boolean) => Action<PERFORM_SET_OWNER_FLAG>;
export declare type PERFORM_CANCEL_SAVE_ERROR = {};
export declare const performCancelSaveError: () => Action<PERFORM_CANCEL_SAVE_ERROR>;
export declare type SET_VALIDATION_ERROR = {
    validationError: Error | null;
};
export declare const setValidationError: (validationError: Error | null) => Action<SET_VALIDATION_ERROR>;
export declare type NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN = {};
export declare const navigateToDealTypePickerScreen: () => Action<NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN>;
export declare type PERFORM_INPUT_DEAL_TYPE = {
    inputDealType: ModelsApp.Classifier;
};
export declare const performInputDealType: (inputDealType: ModelsApp.Classifier) => Action<PERFORM_INPUT_DEAL_TYPE>;
export declare type PERFORM_SHOW_ADDITIONAL_FIELDS = {};
export declare const performShowAdditionalFields: () => Action<PERFORM_SHOW_ADDITIONAL_FIELDS>;
export declare type PERFORM_SALES_CAMPAIGN_SET = {
    salesCampaign: Models.SalesCampaign;
};
export declare const performSalesCampaignSet: (salesCampaign: ModelsCrm.SalesCampaign) => Action<PERFORM_SALES_CAMPAIGN_SET>;
export declare type NAVIGATE_TO_AGENT_PICKER_SCREEN = {};
export declare const navigateToAgentListScreen: () => Action<NAVIGATE_TO_AGENT_PICKER_SCREEN>;
export declare type SHOW_CHANCE_POPOVER = {
    isChancePopoverOpened: boolean;
};
export declare const showChancePopover: (isChancePopoverOpened: boolean) => Action<SHOW_CHANCE_POPOVER>;
export declare type SHOW_ATTRACTION_CHANNEL_POPOVER = {
    isAttractionChannelPopoverOpened: boolean;
};
export declare const showAttractionChannelPopover: (isAttractionChannelPopoverOpened: boolean) => Action<SHOW_ATTRACTION_CHANNEL_POPOVER>;
export declare type PERFORM_SELECT_CHANCE = {
    inputChance: string | null;
};
export declare const performSelectChance: (inputChance: string | null) => Action<PERFORM_SELECT_CHANCE>;
export declare type SHOW_APPLICATION_POPOVER = {
    isApplicationPopoverOpened: boolean;
};
export declare const showApplicationPopover: (isApplicationPopoverOpened: boolean) => Action<SHOW_APPLICATION_POPOVER>;
export declare type SHOW_SALES_METHOD_POPOVER = {
    isSalesMethodPopoverOpened: boolean;
};
export declare const showSalesMethodPopover: (isSalesMethodPopoverOpened: boolean) => Action<SHOW_SALES_METHOD_POPOVER>;
export declare type PERFORM_SELECT_APPLICATION = {
    inputApplication: ModelsApp.Classifier;
};
export declare const performSelectApplication: (inputApplication: ModelsApp.Classifier) => Action<PERFORM_SELECT_APPLICATION>;
export declare type PREPARE_APPLICATION_KK_CLASSIFIER_LIST = {
    applicationKkClassifierList: ModelsApp.ClassifierList;
};
export declare const prepareApplicationKkClassifierList: (applicationKkClassifierList: ModelsApp.ClassifierList) => Action<PREPARE_APPLICATION_KK_CLASSIFIER_LIST>;
export declare type PERFORM_SELECT_SALES_METHOD = {
    inputSalesMethod: ModelsApp.Classifier;
};
export declare const performSelectSalesMethod: (inputSalesMethod: ModelsApp.Classifier) => Action<PERFORM_SELECT_SALES_METHOD>;
export declare type PERFORM_SELECT_ATTRACTION_CHANNEL = {
    inputAttractionChannel: ModelsApp.Classifier;
};
export declare const performSelectAttractionChannel: (inputAttractionChannel: ModelsApp.Classifier) => Action<PERFORM_SELECT_ATTRACTION_CHANNEL>;
export declare type PERFORM_PARENT_DEAL_SET = {
    parentDeal: Models.Deal;
};
export declare const performParentDealSet: (parentDeal: ModelsCrm.Deal) => Action<PERFORM_PARENT_DEAL_SET>;
export declare type PERFORM_SAVE_AGENT_LIST = {
    inputAgentList: Models.AgentList;
};
export declare const performSaveAgentList: (inputAgentList: ModelsCrm.AgentList) => Action<PERFORM_SAVE_AGENT_LIST>;
