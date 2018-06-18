/**
 * Actions of DealEditor container.
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


export const NAVIGATE_TO_DEAL_EDITOR = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_DEAL_EDITOR'

export const SWAP_CONTEXT = 'DEAL_EDITOR_CONTAINER_SWAP_CONTEXT'

export const PERFORM_CANCEL = 'DEAL_EDITOR_CONTAINER_PERFORM_CANCEL'

export const PERFORM_NEXT = 'DEAL_EDITOR_CONTAINER_PERFORM_NEXT'

export const PERFORM_SAVE = 'DEAL_EDITOR_CONTAINER_PERFORM_SAVE'

export const NAVIGATE_BACK = 'DEAL_EDITOR_CONTAINER_NAVIGATE_BACK'

export const NAVIGATE_BACK_EDITOR = 'DEAL_EDITOR_CONTAINER_NAVIGATE_BACK_EDITOR'

export const PERFORM_INPUT_CUSTOMER = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_CUSTOMER'

export const PERFORM_INPUT_DESCRIPTION = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_DESCRIPTION'

export const NAVIGATE_TO_PRODUCT_PICKER_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_PRODUCT_PICKER_SCREEN'

export const PERFORM_INPUT_PRODUCT = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_PRODUCT'

export const NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN'

export const PERFORM_INPUT_SALES_METHOD = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_SALES_METHOD'

export const NAVIGATE_TO_CURRENCY_PICKER_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_CURRENCY_PICKER_SCREEN'

export const PERFORM_INPUT_CURRENCY = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_CURRENCY'

export const PERFORM_INPUT_DEAL_DATE = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_DEAL_DATE'

export const NAVIGATE_TO_ACTIVITY_LIST_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_ACTIVITY_LIST_SCREEN'

export const NAVIGATE_TO_MEMBER_LIST_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN'

export const PERFORM_ACTIVITY_LIST_APPEND = 'DEAL_EDITOR_CONTAINER_PERFORM_ACTIVITY_LIST_APPEND'

export const CALL_PUT_DEAL_ACTIVITY_APPEND = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND'
export const CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST'
export const CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS'
export const CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE'

export const PERFORM_ACTIVITY_LIST_EXCLUDE = 'DEAL_EDITOR_CONTAINER_PERFORM_ACTIVITY_LIST_EXCLUDE'

export const CALL_PUT_DEAL_ACTIVITY_EXCLUDE = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE'
export const CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST'
export const CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS'
export const CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE'

export const PERFORM_SCOPE_CLEAR_AND_REFRESH = 'DEAL_EDITOR_CONTAINER_PERFORM_SCOPE_CLEAR_AND_REFRESH'

export const PERFORM_CONTAINER_RESET = 'DEAL_EDITOR_CONTAINER_PERFORM_CONTAINER_RESET'
export const PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL = 'DEAL_EDITOR_CONTAINER_PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL'
export const PERFORM_SAVE_EXECUTE = 'DEAL_EDITOR_CONTAINER_PERFORM_SAVE_EXECUTE'
export const CALL_POST_DEAL_CREATE = 'DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE'
export const CALL_POST_DEAL_CREATE_REQUEST = 'DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE_REQUEST'
export const CALL_PUT_DEAL_UPDATE = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE'
export const CALL_PUT_DEAL_UPDATE_REQUEST = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_REQUEST'
export const CALL_POST_DEAL_CREATE_REQUEST_SUCCESS = 'DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE_REQUEST_SUCCESS'
export const CALL_POST_DEAL_CREATE_REQUEST_FAILURE = 'DEAL_EDITOR_CONTAINER_CALL_POST_DEAL_CREATE_REQUEST_FAILURE'
export const PERFORM_SAVE_SUCCESS = 'DEAL_EDITOR_CONTAINER_PERFORM_SAVE_SUCCESS'
export const PERFORM_SAVE_FAILURE = 'DEAL_EDITOR_CONTAINER_PERFORM_SAVE_FAILURE'
export const CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS'
export const CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE'
export const DEAL_CREATED = 'DEAL_EDITOR_CONTAINER_DEAL_CREATED'
export const INITIAL_VALUES_FOR_DEAL_EDITOR = 'DEAL_EDITOR_CONTAINER_INITIAL_VALUES_FOR_DEAL_EDITOR'
export const PERFORM_VALIDATE = 'DEAL_EDITOR_CONTAINER_PERFORM_VALIDATE'
export const PERFORM_SET_EQUIVALENT_RATE_MODE = 'DEAL_EDITOR_CONTAINER_PERFORM_SET_EQUIVALENT_RATE_MODE'
export const PERFORM_VALIDATE_FORM = 'DEAL_EDITOR_CONTAINER_PERFORM_VALIDATE_FORM'
export const PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER'
export const PERFORM_SET_PRODUCT_METHOD_MODE = 'DEAL_EDITOR_CONTAINER_PERFORM_SET_PRODUCT_METHOD_MODE'
export const PERFORM_UPDATE_SALES_METHOD = 'DEAL_EDITOR_CONTAINER_PERFORM_UPDATE_SALES_METHOD'
export const PERFORM_SET_DEAL_CREATION_MODE = 'DEAL_EDITOR_CONTAINER_PERFORM_SET_DEAL_CREATION_MODE'

export const CALL_GET_DEAL_REFRESH = 'DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH'
export const CALL_GET_DEAL_REFRESH_REQUEST = 'DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH_REQUEST'
export const CALL_GET_DEAL_REFRESH_SUCCESS = 'DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH_SUCCESS'
export const CALL_GET_DEAL_REFRESH_FAILURE = 'DEAL_EDITOR_CONTAINER_CALL_GET_DEAL_REFRESH_FAILURE'

export const PERFORM_RETURN_TO_DEAL = 'DEAL_EDITOR_CONTAINER_PERFORM_RETURN_TO_DEAL'
export const PERFORM_TAP_ACTIVITY_DELETE = 'DEAL_EDITOR_CONTAINER_PERFORM_TAP_ACTIVITY_DELETE'

export const GET_DEAL_ACTIVITY_LIST = 'DEAL_EDITOR_CONTAINER_GET_DEAL_ACTIVITY_LIST'
export const PERFORM_INPUT_SAVED_MODE = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_SAVED_MODE'
export const PERFORM_INPUT_SUM_STRING = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_SUM_STRING'
export const PERFORM_INPUT_EQUIVALENT_SUM_STRING = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_EQUIVALENT_SUM_STRING'
export const PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING'
export const PREPARE_PRODUCT_CLASSIFIERS = 'DEAL_EDITOR_CONTAINER_PREPARE_PRODUCT_CLASSIFIERS'
export const PREPARE_SALES_METHOD_CLASSIFIERS = 'DEAL_EDITOR_CONTAINER_PREPARE_SALES_METHOD_CLASSIFIERS'
export const PREPARE_DEAL_LIST = 'DEAL_EDITOR_CONTAINER_PREPARE_DEAL_LIST'
export const PERFORM_INPUT_OPERUUID = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_OPERUUID'
export const PERFORM_NAVIGATION_BUTTON_DISABLED = 'DEAL_EDITOR_CONTAINER_PERFORM_NAVIGATION_BUTTON_DISABLED'
export const PERFORM_SET_OWNER_FLAG = 'DEAL_EDITOR_CONTAINER_PERFORM_SET_OWNER_FLAG'
export const SET_VALIDATION_ERROR = 'DEAL_EDITOR_CONTAINER_SET_VALIDATION_ERROR'
export const PERFORM_CANCEL_SAVE_ERROR = 'DEAL_EDITOR_CONTAINER_PERFORM_CANCEL_SAVE_ERROR'
export const NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN'
export const PERFORM_INPUT_DEAL_TYPE = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_DEAL_TYPE'
export const PERFORM_SHOW_ADDITIONAL_FIELDS = 'DEAL_EDITOR_CONTAINER_PERFORM_SHOW_ADDITIONAL_FIELDS'


export const PERFORM_SALES_CAMPAIGN_SET = 'DEAL_EDITOR_CONTAINER_PERFORM_CAMPAIGN_SET'
export const NAVIGATE_TO_AGENT_PICKER_SCREEN = 'DEAL_EDITOR_CONTAINER_NAVIGATE_TO_AGENT_PICKER_SCREEN'
export const SHOW_CHANCE_POPOVER = 'DEAL_EDITOR_CONTAINER_SHOW_CHANCE_POPOVER'
export const PERFORM_SELECT_CHANCE = 'DEAL_EDITOR_CONTAINER_PERFORM_SELECT_CHANCE'
export const SHOW_APPLICATION_POPOVER = 'DEAL_EDITOR_CONTAINER_SHOW_APPLICATION_POPOVER'
export const SHOW_SALES_METHOD_POPOVER = 'DEAL_EDITOR_CONTAINER_SHOW_SALES_METHOD_POPOVER'
export const PERFORM_SELECT_APPLICATION = 'DEAL_EDITOR_CONTAINER_PERFORM_SELECT_APPLICATION'
export const PERFORM_SELECT_SALES_METHOD = 'DEAL_EDITOR_CONTAINER_PERFORM_SELECT_SALES_METHOD'
export const PREPARE_APPLICATION_KK_CLASSIFIER_LIST = 'DEAL_EDITOR_CONTAINER_PREPARE_APPLICATION_KK_CLASSIFIER_LIST'

export const PERFORM_PARENT_DEAL_SET = 'DEAL_EDITOR_CONTAINER_PERFORM_PARENT_DEAL_SET'
export const PERFORM_INPUT_TRANSFER_COMMISSION = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_TRANSFER_COMMISSION'
export const PERFORM_INPUT_STAFF_COUNT = 'DEAL_EDITOR_CONTAINER_PERFORM_INPUT_STAFF_COUNT'
export const SHOW_ATTRACTION_CHANNEL_POPOVER = 'DEAL_EDITOR_CONTAINER_SHOW_ATTRACTION_CHANNEL_POPOVER'
export const PERFORM_SELECT_ATTRACTION_CHANNEL = 'DEAL_EDITOR_CONTAINER_PERFORM_SELECT_ATTRACTION_CHANNEL'
export const PERFORM_SAVE_AGENT_LIST = 'DEAL_EDITOR_CONTAINER_PERFORM_SAVE_AGENT_LIST'

/**
 * Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
 *
 * @param {Models.Deal} deal .
 * @param {Enums.DealEditorMode} mode - режим (создание, редактирование и т.п.) .
 * @param isInitRoadMapNecessary - необходимость создания дорожной карты стадий клиента .
 */
export type NAVIGATE_TO_DEAL_EDITOR = { deal: Models.Deal , mode: Enums.DealEditorMode, isInitRoadMapNecessary: boolean}
export const navigateToDealEditor = ( deal: Models.Deal , mode: Enums.DealEditorMode, isInitRoadMapNecessary: boolean): Action<NAVIGATE_TO_DEAL_EDITOR> => ({
    type: NAVIGATE_TO_DEAL_EDITOR,
    payload: {
        deal: deal,
        mode: mode,
        isInitRoadMapNecessary: isInitRoadMapNecessary,
    }
})

/**
 * Internal thunk used in "DealEditor" container. Thunk chain used to swap customer and user.
 *
 * @param {Models.CustomerManaged} customer .
 * @param {Models.Deal} deal .
 * @param {boolean} isEditorMode .
 */
export type SWAP_CONTEXT = { customer: Models.CustomerManaged, deal: Models.Deal, isEditorMode: boolean, }
export const swapContext = (customer: Models.CustomerManaged, deal: Models.Deal, isEditorMode: boolean,): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        customer: customer,
        deal: deal,
        isEditorMode: isEditorMode,
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})





/**
 * Thunk dispatched to confirm road map init request done.
 *
 */
export const CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS'
export type CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS = {}
export const callPutDealInitRoadMapRequestSuccess = (): Action<CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS> => ({
    type: CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS,
    payload: { }
})

/**
 * Thunk dispatched to road map init request fail.
 *
 */
export const CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE'
export type CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE = {error: Error}
export const callPutDealInitRoadMapRequestFailure = (error: Error): Action<CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE> => ({
    type: CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE,
    payload: { error: error }
})


/**
 * Thunk dispatched to road map init request was sent.
 *
 */
export const CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST'
export type CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST = {}
export const callPutDealInitRoadMapRequest = (): Action<CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST> => ({
    type: CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST,
    payload: { }
})

/**
 * Thunk dispatched to road map init request prepare.
 *
 */
export const CALL_PUT_DEAL_INIT_ROAD_MAP = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_INIT_ROAD_MAP'
export type CALL_PUT_DEAL_INIT_ROAD_MAP = {}
export const callPutDealInitRoadMap = (): Action<CALL_PUT_DEAL_INIT_ROAD_MAP> => ({
    type: CALL_PUT_DEAL_INIT_ROAD_MAP,
    payload: { }
})


/**
 * Thunk dispatched to road map init fail.
 *
 */
export const PERFORM_INIT_ROAD_MAP_FAILURE = 'DEAL_EDITOR_CONTAINER_PERFORM_INIT_ROAD_MAP_FAILURE'
export type PERFORM_INIT_ROAD_MAP_FAILURE = {error: Error}
export const performInitRoadMapFailure = (error: Error): Action<PERFORM_INIT_ROAD_MAP_FAILURE> => ({
    type: PERFORM_INIT_ROAD_MAP_FAILURE,
    payload: { error: error}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
 *
 */
export type PERFORM_NEXT = {}
export const performNext = (): Action<PERFORM_NEXT> => ({
    type: PERFORM_NEXT,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
 *
 */
export type PERFORM_SAVE = {operationUuidCreate: string, operationUuidUpdate: string}
export const performSave = (operationUuidCreate: string, operationUuidUpdate: string): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {
        operationUuidCreate: operationUuidCreate,
        operationUuidUpdate: operationUuidUpdate
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap navigate back.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})
export type NAVIGATE_BACK_EDITOR = {}
export const navigateBackEditor = (): Action<NAVIGATE_BACK_EDITOR> => ({
    type: NAVIGATE_BACK_EDITOR,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Customer field.
 *
 * @param {Models.CustomerManaged} value .
 */
export type PERFORM_INPUT_CUSTOMER = { value: Models.CustomerManaged }
export const performInputCustomer = (value: Models.CustomerManaged): Action<PERFORM_INPUT_CUSTOMER> => ({
	type: PERFORM_INPUT_CUSTOMER,
	payload: {
		value,
	}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_DESCRIPTION = { value: string }
export const performInputDescription = (value: string): Action<PERFORM_INPUT_DESCRIPTION> => ({
    type: PERFORM_INPUT_DESCRIPTION,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Product field.
 *
 */
export type NAVIGATE_TO_PRODUCT_PICKER_SCREEN = {}
export const navigateToProductPickerScreen = (): Action<NAVIGATE_TO_PRODUCT_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_PRODUCT_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Product field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_PRODUCT = { value: ModelsApp.Classifier, }
export const performInputProduct = (value: ModelsApp.Classifier,): Action<PERFORM_INPUT_PRODUCT> => ({
    type: PERFORM_INPUT_PRODUCT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap SalesMethod field.
 *
 */
export type NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN = {}
export const navigateToSalesMethodPickerScreen = (): Action<NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input SalesMethod field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_SALES_METHOD = { value: ModelsApp.Classifier }
export const performInputSalesMethod = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_SALES_METHOD> => ({
    type: PERFORM_INPUT_SALES_METHOD,
    payload: {
        value: value,
    }
})

export type PERFORM_UPDATE_SALES_METHOD = { value: ModelsApp.Classifier }
export const performUpdateSalesMethod = (value: ModelsApp.Classifier): Action<PERFORM_UPDATE_SALES_METHOD> => ({
    type: PERFORM_UPDATE_SALES_METHOD,
    payload: {
        value: value,
    }
})



/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Currency field.
 *
 */
export type NAVIGATE_TO_CURRENCY_PICKER_SCREEN = {}
export const navigateToCurrencyPickerScreen = (): Action<NAVIGATE_TO_CURRENCY_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CURRENCY_PICKER_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Currency field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_CURRENCY = { value: ModelsApp.Classifier }
export const performInputCurrency = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_CURRENCY> => ({
    type: PERFORM_INPUT_CURRENCY,
    payload: {
        value: value,
    }
})


export type PERFORM_INPUT_SUM_STRING = { value: string | null }
export const performInputSumString = (value: string | null): Action<PERFORM_INPUT_SUM_STRING> => ({
    type: PERFORM_INPUT_SUM_STRING,
    payload: {
        value: value,
    }
})

export type PERFORM_INPUT_EQUIVALENT_SUM_STRING = { value: string | null }
export const performInputEquivalentSumString = (value: string | null): Action<PERFORM_INPUT_EQUIVALENT_SUM_STRING> => ({
    type: PERFORM_INPUT_EQUIVALENT_SUM_STRING,
    payload: {
        value: value,
    }
})

export type PERFORM_INPUT_TRANSFER_COMMISSION = { value: string | null }
export const performInputTransferCommission = (value: string | null): Action<PERFORM_INPUT_TRANSFER_COMMISSION> => ({
    type: PERFORM_INPUT_TRANSFER_COMMISSION,
    payload: {
        value: value,
    }
})

export type PERFORM_INPUT_STAFF_COUNT = { value: string | null }
export const performInputStaffCount = (value: string | null): Action<PERFORM_INPUT_STAFF_COUNT> => ({
    type: PERFORM_INPUT_STAFF_COUNT,
    payload: {
        value: value,
    }
})

export type PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING = { value: string | null }
export const performInputEquivalentConversionRateString = (value: string | null ): Action<PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING> => ({
    type: PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "thunkDealEditor". Thunk dispatched validation result.
 *
 * @param {number | null} value .
 */
export type PERFORM_SET_EQUIVALENT_RATE_MODE = { value: boolean }
export const performSetEquivalentRateMode = (value: boolean): Action<PERFORM_SET_EQUIVALENT_RATE_MODE> => ({
    type: PERFORM_SET_EQUIVALENT_RATE_MODE,
    payload: {
        value: value,
    }
})

export type PERFORM_SET_PRODUCT_METHOD_MODE = { isProductMethodEnabled: boolean }
export const performSetProductMethodMode = (isProductMethodEnabled: boolean): Action<PERFORM_SET_PRODUCT_METHOD_MODE> => ({
    type: PERFORM_SET_PRODUCT_METHOD_MODE,
    payload: {
        isProductMethodEnabled: isProductMethodEnabled,
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input DealDate field.
 *
 * @param {Date | null} value .
 */
export type PERFORM_INPUT_DEAL_DATE = { value: Date | null }
export const performInputDealDate = (value: Date | null): Action<PERFORM_INPUT_DEAL_DATE> => ({
    type: PERFORM_INPUT_DEAL_DATE,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap activity list.
 *
 */
export type NAVIGATE_TO_ACTIVITY_LIST_SCREEN = {}
export const navigateToActivityListScreen = (): Action<NAVIGATE_TO_ACTIVITY_LIST_SCREEN> => ({
    type: NAVIGATE_TO_ACTIVITY_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from Scope.
 *
 * @param {ModelsScheduler.Activity} activity .
 */
export type PERFORM_ACTIVITY_LIST_APPEND = { }
export const performActivityListAppend = (): Action<PERFORM_ACTIVITY_LIST_APPEND> => ({
    type: PERFORM_ACTIVITY_LIST_APPEND,
    payload: { }
})

/**
 * Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 */
export type CALL_PUT_DEAL_ACTIVITY_APPEND = {}
export const callPutDealActivityAppend = (): Action<CALL_PUT_DEAL_ACTIVITY_APPEND> => ({
    type: CALL_PUT_DEAL_ACTIVITY_APPEND,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPutDealActivityAppend" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
 */
export type CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST = {}
export const callPutDealActivityAppendRequest = (): Action<CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST> => ({
    type: CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPutDealActivityAppend". Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS = { response: Response<boolean> }
export const callPutDealActivityAppendSuccess = (response: Response<boolean>): Action<CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS> => ({
    type: CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPutDealActivityAppend". Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE = { error: Error }
export const callPutDealActivityAppendFailure = (error: Error): Action<CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE> => ({
    type: CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from linked list.
 *
 * @param {ModelsScheduler.Activity} activity .
 */
export type PERFORM_ACTIVITY_LIST_EXCLUDE = { activity: ModelsScheduler.Activity }
export const performActivityListExclude = (activity: ModelsScheduler.Activity): Action<PERFORM_ACTIVITY_LIST_EXCLUDE> => ({
    type: PERFORM_ACTIVITY_LIST_EXCLUDE,
    payload: {
        activity: activity,
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 */
export type CALL_PUT_DEAL_ACTIVITY_EXCLUDE = {}
export const callPutDealActivityExclude = (): Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE> => ({
    type: CALL_PUT_DEAL_ACTIVITY_EXCLUDE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callPutDealActivityExclude" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
 */
export type CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST = {}
export const callPutDealActivityExcludeRequest = (): Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST> => ({
    type: CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callPutDealActivityExclude". Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS = { response: Response<boolean> }
export const callPutDealActivityExcludeSuccess = (response: Response<boolean>): Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS> => ({
    type: CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPutDealActivityExclude". Thunk dispatched by "DealEditor" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE = { error: Error }
export const callPutDealActivityExcludeFailure = (error: Error): Action<CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE> => ({
    type: CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched after activity list updated.
 *
 */
export type PERFORM_SCOPE_CLEAR_AND_REFRESH = {}
export const performScopeClearAndRefresh = (): Action<PERFORM_SCOPE_CLEAR_AND_REFRESH> => ({
    type: PERFORM_SCOPE_CLEAR_AND_REFRESH,
    payload: {}
})

/**
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_MEMBER_LIST_SCREEN = {}
export const navigateToMemberListScreen = (): Action<NAVIGATE_TO_MEMBER_LIST_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN,
    payload: {}
})

export type PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL = {memberList:Models.MemberList}
export const performSaveMemberListInNewDeal = (memberList:Models.MemberList): Action<PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL> => ({
    type: PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL,
    payload: {
        memberList:memberList
    }
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "DealEditor" screen. Thunk used to confirm changes in Deal.
 */
export type PERFORM_SAVE_EXECUTE = {}
export const performSaveExecute = (): Action<PERFORM_SAVE_EXECUTE> => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
})

export type PERFORM_SAVE_SUCCESS = { data: boolean }
export const performSaveSuccess = (data: boolean): Action<PERFORM_SAVE_SUCCESS> => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data
    }
})

export type PERFORM_SAVE_FAILURE = { error: Error }
export const performSaveFailure = (error: Error): Action<PERFORM_SAVE_FAILURE> => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
})

export type CALL_POST_DEAL_CREATE = {}
export const callPostDealCreate = (): Action<CALL_POST_DEAL_CREATE> => ({
    type: CALL_POST_DEAL_CREATE,
    payload: {}
})

export type CALL_POST_DEAL_CREATE_REQUEST = {}
export const callPostDealCreateRequest = (): Action<CALL_POST_DEAL_CREATE_REQUEST> => ({
    type: CALL_POST_DEAL_CREATE_REQUEST,
    payload: {}
})

export type CALL_POST_DEAL_CREATE_REQUEST_SUCCESS = {id:string}
export const callPostDealCreateRequestSuccess = (id:string): Action<CALL_POST_DEAL_CREATE_REQUEST_SUCCESS> => ({
    type: CALL_POST_DEAL_CREATE_REQUEST_SUCCESS,
    payload: {
        id:id
    }
})

export type PERFORM_SET_DEAL_CREATION_MODE = {mode: Enums.DealCreationMode}
export const perforSetDealCreationMode = (mode: Enums.DealCreationMode): Action<PERFORM_SET_DEAL_CREATION_MODE> => ({
    type: PERFORM_SET_DEAL_CREATION_MODE,
    payload: {
        mode:mode
    }
})




export type CALL_POST_DEAL_CREATE_REQUEST_FAILURE = {error:Models.Error}
export const callPostDealCreateRequestFailure = (error:Models.Error): Action<CALL_POST_DEAL_CREATE_REQUEST_FAILURE> => ({
    type: CALL_POST_DEAL_CREATE_REQUEST_FAILURE,
    payload: {
        error:error
    }
})

export type CALL_PUT_DEAL_UPDATE = {}
export const callPutDealUpdate = (): Action<CALL_PUT_DEAL_UPDATE> => ({
    type: CALL_PUT_DEAL_UPDATE,
    payload: {}
})

export type CALL_PUT_DEAL_UPDATE_REQUEST = {}
export const callPutDealUpdateRequest = (): Action<CALL_PUT_DEAL_UPDATE_REQUEST> => ({
    type: CALL_PUT_DEAL_UPDATE_REQUEST,
    payload: {}
})

export type CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS = {}
export const callPutDealUpdateRequestSuccess = (): Action<CALL_PUT_DEAL_UPDATE_REQUEST> => ({
    type: CALL_PUT_DEAL_UPDATE_REQUEST,
    payload: {}
})

export type CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE = {error:Models.Error}
export const callPutDealUpdateRequestSFailure = (error:Models.Error): Action<CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE> => ({
    type: CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE,
    payload: {
        error:error
    }
})

export type DEAL_CREATED = {}
export const dealCreated = (): Action<DEAL_CREATED> => ({
    type: DEAL_CREATED,
    payload: {}
})

export type INITIAL_VALUES_FOR_DEAL_EDITOR = {deal: Models.Deal, classifierDictionary: ModelsApp.ClassifierDictionary}
export const initialValuesForDealEditor = (deal: Models.Deal, classifierDictionary: ModelsApp.ClassifierDictionary): Action<INITIAL_VALUES_FOR_DEAL_EDITOR> => ({
    type: INITIAL_VALUES_FOR_DEAL_EDITOR,
    payload: {
        deal,
        classifierDictionary,
    }
})

export type PERFORM_VALIDATE = {value: boolean}
export const performValidate = (value: boolean): Action<PERFORM_VALIDATE> => ({
    type: PERFORM_VALIDATE,
    payload: {
        value
    }
})

export type PERFORM_VALIDATE_FORM = {}
export const performValidateForm = (): Action<PERFORM_VALIDATE_FORM> => ({
    type: PERFORM_VALIDATE_FORM,
    payload: {}
})

export type PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER = {inputFilteredMethodClassifier:ModelsApp.ClassifierList}
export const performInputFilteredMethodClassifier = (inputFilteredMethodClassifier:ModelsApp.ClassifierList): Action<PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER> => ({
    type: PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER,
    payload: {
        inputFilteredMethodClassifier:inputFilteredMethodClassifier
    }
})

export type CALL_GET_DEAL_REFRESH = {}
export const callGetDealRefresh = (): Action<CALL_GET_DEAL_REFRESH> => ({
    type: CALL_GET_DEAL_REFRESH,
    payload: {}
})

export type CALL_GET_DEAL_REFRESH_REQUEST = {}
export const callGetDealRefreshRequest = (): Action<CALL_GET_DEAL_REFRESH_REQUEST> => ({
    type: CALL_GET_DEAL_REFRESH_REQUEST,
    payload: {}
})

export type CALL_GET_DEAL_REFRESH_SUCCESS = { response: Response<Models.Deal> }
export const callGetDealRefreshSuccess = (response: Response<Models.Deal>): Action<CALL_GET_DEAL_REFRESH_SUCCESS> => ({
    type: CALL_GET_DEAL_REFRESH_SUCCESS,
    payload: {
        response: response
    }
})

export type CALL_GET_DEAL_REFRESH_FAILURE = { error: Error }
export const callGetDealRefreshFailure = (error: Error): Action<CALL_GET_DEAL_REFRESH_FAILURE> => ({
    type: CALL_GET_DEAL_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

export type PERFORM_RETURN_TO_DEAL = {}
export const performReturnToDeal = (): Action<PERFORM_RETURN_TO_DEAL> => ({
    type: PERFORM_RETURN_TO_DEAL,
    payload: {}
})

export type PERFORM_TAP_ACTIVITY_DELETE = {id:string}
export const performTapActivityDelete = (id:string): Action<PERFORM_TAP_ACTIVITY_DELETE> => ({
    type: PERFORM_TAP_ACTIVITY_DELETE,
    payload: {
        id:id
    }
})

export type GET_DEAL_ACTIVITY_LIST = {activityList: ModelsScheduler.ActivityList}
export const getDealActivityList = (activityList: ModelsScheduler.ActivityList): Action<GET_DEAL_ACTIVITY_LIST> => ({
    type: GET_DEAL_ACTIVITY_LIST,
    payload: {
        activityList:activityList
    }
})

export type PERFORM_INPUT_SAVED_MODE = {savedMode: Enums.ValidateForm}
export const performInputSavedMode = (savedMode: Enums.ValidateForm): Action<PERFORM_INPUT_SAVED_MODE> => ({
    type: PERFORM_INPUT_SAVED_MODE,
    payload: {
        savedMode:savedMode
    }
})

export type PREPARE_PRODUCT_CLASSIFIERS = {productClassifiersList: ModelsApp.ClassifierList}
export const prepareProductClassifiers = (productClassifiersList: ModelsApp.ClassifierList): Action<PREPARE_PRODUCT_CLASSIFIERS> => ({
    type: PREPARE_PRODUCT_CLASSIFIERS,
    payload: {
        productClassifiersList: productClassifiersList,
    }
})

export type PREPARE_SALES_METHOD_CLASSIFIERS = {salesMethodClassifiersList: ModelsApp.ClassifierList}
export const prepareSalesMethodClassifiers = (salesMethodClassifiersList: ModelsApp.ClassifierList): Action<PREPARE_SALES_METHOD_CLASSIFIERS> => ({
    type: PREPARE_SALES_METHOD_CLASSIFIERS,
    payload: {
        salesMethodClassifiersList: salesMethodClassifiersList,
    }
})

export type PREPARE_DEAL_LIST = {}
export const prepareDealList = (): Action<PREPARE_DEAL_LIST> => ({
    type: PREPARE_DEAL_LIST,
    payload: {}
})

export type PERFORM_INPUT_OPERUUID = {activityOperUuid: ModelsDealEditor.ActivityOperUuid | null}
export const performInputOperUuid = (activityOperUuid: ModelsDealEditor.ActivityOperUuid | null): Action<PERFORM_INPUT_OPERUUID> => ({
    type: PERFORM_INPUT_OPERUUID,
    payload: {
        activityOperUuid: activityOperUuid,
    }
})

export type PERFORM_NAVIGATION_BUTTON_DISABLED = {isNavigationButtonDisabled: boolean}
export const performNavigationButtonDisabled = (isNavigationButtonDisabled: boolean): Action<PERFORM_NAVIGATION_BUTTON_DISABLED> => ({
    type: PERFORM_NAVIGATION_BUTTON_DISABLED,
    payload: {
        isNavigationButtonDisabled: isNavigationButtonDisabled,
    }
})

export type PERFORM_SET_OWNER_FLAG = {isOwner: boolean}
export const performSetOwnerFlag = (isOwner: boolean): Action<PERFORM_SET_OWNER_FLAG> => ({
    type: PERFORM_SET_OWNER_FLAG,
    payload: {
        isOwner: isOwner,
    }
})

export type PERFORM_CANCEL_SAVE_ERROR = {}
export const performCancelSaveError = (): Action<PERFORM_CANCEL_SAVE_ERROR> => ({
    type: PERFORM_CANCEL_SAVE_ERROR,
    payload: {}
})



export type SET_VALIDATION_ERROR = {validationError: Error | null}
export const setValidationError = (validationError: Error | null): Action<SET_VALIDATION_ERROR> => ({
    type: SET_VALIDATION_ERROR,
    payload: {
        validationError: validationError,
    }
})

export type NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN = {}
export const navigateToDealTypePickerScreen = (): Action<NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN,
    payload: {}
})

export type PERFORM_INPUT_DEAL_TYPE = {inputDealType: ModelsApp.Classifier}
export const performInputDealType = (inputDealType: ModelsApp.Classifier): Action<PERFORM_INPUT_DEAL_TYPE> => ({
    type: PERFORM_INPUT_DEAL_TYPE,
    payload: {
        inputDealType:inputDealType
    }
})

export type PERFORM_SHOW_ADDITIONAL_FIELDS = {}
export const performShowAdditionalFields = (): Action<PERFORM_SHOW_ADDITIONAL_FIELDS> => ({
    type: PERFORM_SHOW_ADDITIONAL_FIELDS,
    payload: {}
})

export type PERFORM_SALES_CAMPAIGN_SET = {salesCampaign: Models.SalesCampaign}
export const performSalesCampaignSet = (salesCampaign: Models.SalesCampaign): Action<PERFORM_SALES_CAMPAIGN_SET> => ({
    type: PERFORM_SALES_CAMPAIGN_SET,
    payload: {
        salesCampaign,
    }
})

export type NAVIGATE_TO_AGENT_PICKER_SCREEN = {}
export const navigateToAgentListScreen = (): Action<NAVIGATE_TO_AGENT_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_PICKER_SCREEN,
    payload: {}
})

export type SHOW_CHANCE_POPOVER = {isChancePopoverOpened: boolean}
export const showChancePopover = (isChancePopoverOpened: boolean): Action<SHOW_CHANCE_POPOVER> => ({
    type: SHOW_CHANCE_POPOVER,
    payload: {
        isChancePopoverOpened:isChancePopoverOpened
    }
})

export type SHOW_ATTRACTION_CHANNEL_POPOVER = {isAttractionChannelPopoverOpened: boolean}
export const showAttractionChannelPopover = (isAttractionChannelPopoverOpened: boolean): Action<SHOW_ATTRACTION_CHANNEL_POPOVER> => ({
    type: SHOW_ATTRACTION_CHANNEL_POPOVER,
    payload: {
        isAttractionChannelPopoverOpened:isAttractionChannelPopoverOpened
    }
})


export type PERFORM_SELECT_CHANCE = {inputChance: string | null}
export const performSelectChance = (inputChance: string | null): Action<PERFORM_SELECT_CHANCE> => ({
    type: PERFORM_SELECT_CHANCE,
    payload: {
        inputChance:inputChance
    }
})

export type SHOW_APPLICATION_POPOVER = {isApplicationPopoverOpened: boolean}
export const showApplicationPopover = (isApplicationPopoverOpened: boolean): Action<SHOW_APPLICATION_POPOVER> => ({
    type: SHOW_APPLICATION_POPOVER,
    payload: {
        isApplicationPopoverOpened:isApplicationPopoverOpened
    }
})

export type SHOW_SALES_METHOD_POPOVER = {isSalesMethodPopoverOpened: boolean}
export const showSalesMethodPopover = (isSalesMethodPopoverOpened: boolean): Action<SHOW_SALES_METHOD_POPOVER> => ({
    type: SHOW_SALES_METHOD_POPOVER,
    payload: {
        isSalesMethodPopoverOpened:isSalesMethodPopoverOpened
    }
})

export type PERFORM_SELECT_APPLICATION = {inputApplication: ModelsApp.Classifier}
export const performSelectApplication = (inputApplication: ModelsApp.Classifier): Action<PERFORM_SELECT_APPLICATION> => ({
    type: PERFORM_SELECT_APPLICATION,
    payload: {
        inputApplication:inputApplication
    }
})

export type PREPARE_APPLICATION_KK_CLASSIFIER_LIST = {applicationKkClassifierList:ModelsApp.ClassifierList}
export const prepareApplicationKkClassifierList = (applicationKkClassifierList:ModelsApp.ClassifierList): Action<PREPARE_APPLICATION_KK_CLASSIFIER_LIST> => ({
    type: PREPARE_APPLICATION_KK_CLASSIFIER_LIST,
    payload: {
        applicationKkClassifierList:applicationKkClassifierList
    }
})


export type PERFORM_SELECT_SALES_METHOD = {inputSalesMethod: ModelsApp.Classifier}
export const performSelectSalesMethod = (inputSalesMethod: ModelsApp.Classifier): Action<PERFORM_SELECT_SALES_METHOD> => ({
    type: PERFORM_SELECT_SALES_METHOD,
    payload: {
        inputSalesMethod:inputSalesMethod
    }
})

export type PERFORM_SELECT_ATTRACTION_CHANNEL = {inputAttractionChannel: ModelsApp.Classifier}
export const performSelectAttractionChannel = (inputAttractionChannel: ModelsApp.Classifier): Action<PERFORM_SELECT_ATTRACTION_CHANNEL> => ({
    type: PERFORM_SELECT_ATTRACTION_CHANNEL,
    payload: {
        inputAttractionChannel:inputAttractionChannel
    }
})

export type PERFORM_PARENT_DEAL_SET = {parentDeal: Models.Deal}
export const performParentDealSet = (parentDeal: Models.Deal): Action<PERFORM_PARENT_DEAL_SET> => ({
    type: PERFORM_PARENT_DEAL_SET,
    payload: {
        parentDeal,
    }
})

export type PERFORM_SAVE_AGENT_LIST = {inputAgentList: Models.AgentList}
export const performSaveAgentList = (inputAgentList: Models.AgentList): Action<PERFORM_SAVE_AGENT_LIST> => ({
    type: PERFORM_SAVE_AGENT_LIST,
    payload: {
        inputAgentList: inputAgentList,
    }
})

