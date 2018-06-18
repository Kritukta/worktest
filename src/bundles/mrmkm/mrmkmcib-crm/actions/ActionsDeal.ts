/**
 * Actions of Deal container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {Enums as EnumsAppAll, EnumsApp} from "mrmkmcib-app"
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




export const NAVIGATE_TO_EMPLOYEE = 'DEAL_CONTAINER_NAVIGATE_TO_EMPLOYEE'
export const PERFORM_SET_DEAL = 'DEAL_CONTAINER_PERFORM_SET_DEAL'

export const PERFORM_DEAL_EXPANDED_MODE_TOGGLE = 'DEAL_CONTAINER_PERFORM_DEAL_EXPANDED_MODE_TOGGLE'
export const PERFORM_FLUSH = 'DEAL_CONTAINER_PERFORM_DEAL_FLUSH'
export const NAVIGATE_TO_DEAL_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_DEAL_SCREEN'
export const REPLACE_DEAL_DATA = 'DEAL_CONTAINER_REPLACE_DEAL_DATA'
export const NAVIGATION_LOADER_SHOW = 'DEAL_CONTAINER_NAVIGATION_LOADER_SHOW'

export const PERFORM_REFRESH = 'DEAL_CONTAINER_PERFORM_REFRESH'
export const PERFORM_REFRESH_EXECUTE = 'DEAL_CONTAINER_PERFORM_REFRESH_EXECUTE'
export const PERFORM_REFRESH_SUCCESS = 'DEAL_CONTAINER_PERFORM_REFRESH_SUCCESS'
export const PERFORM_REFRESH_STAGES_SUCCESS = 'DEAL_CONTAINER_PERFORM_REFRESH_STAGES_SUCCESS'
export const PERFORM_REFRESH_FAILURE = 'DEAL_CONTAINER_PERFORM_REFRESH_FAILURE'
export const PERFORM_EXPAND_AGREEMENT_ROW = 'DEAL_CONTAINER_PERFORM_EXPAND_AGREEMENT_ROW'

export const REFRESH_CALL_GET_DEAL = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL'
export const REFRESH_CALL_GET_DEAL_REQUEST = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_REQUEST'
export const REFRESH_CALL_GET_DEAL_SUCCESS = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_SUCCESS'
export const REFRESH_CALL_GET_DEAL_FAILURE = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_FAILURE'

export const NAVIGATE_TO_PRODUCT_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_PRODUCT_SCREEN'

export const NAVIGATE_TO_AGREEMENT_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_AGREEMENT_SCREEN'
export const PERFORM_SET_EXPANDED_CONTENT_SCREEN = 'DEAL_CONTAINER_PERFORM_SET_EXPANDED_CONTENT_SCREEN'


export const NAVIGATE_TO_SOLUTION_LIST_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_SOLUTION_LIST_SCREEN'

export const NAVIGATE_TO_MEMBER_LIST_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN'

export const PERFORM_EXTRA_INFO_TOGGLE = 'DEAL_CONTAINER_PERFORM_EXTRA_INFO_TOGGLE'

export const NAVIGATE_TO_AGENT_LIST_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_AGENT_LIST_SCREEN'

export const NAVIGATE_TO_COMMENT_LIST_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_COMMENT_LIST_SCREEN'

export const NAVIGATE_TO_PHASE_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_PHASE_SCREEN'

export const NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN'

export const NAVIGATE_TO_NON_LEGAL_MEMBER_CARD = 'DEAL_CONTAINER_NAVIGATE_TO_NON_LEGAL_MEMBER_CARD'

export const PERFORM_INPUT_DEAL_CLOSE_RESULT = 'DEAL_CONTAINER_PERFORM_INPUT_DEAL_CLOSE_RESULT'

export const PERFORM_PHASE_SWITCH = 'DEAL_CONTAINER_PERFORM_PHASE_SWITCH'

export const PERFORM_PHASE_SELECT = 'DEAL_CONTAINER_PERFORM_PHASE_SELECT'

export const PERFORM_DEAL_ROUTE_POP = 'DEAL_CONTAINER_PERFORM_DEAL_ROUTE_POP'
export const PERFORM_DEAL_ROUTE_PUSH = 'DEAL_CONTAINER_PERFORM_DEAL_ROUTE_PUSH'
export const SET_SUP_PARAMETER_DEAL = 'DEAL_CONTAINER_SET_SUP_PARAMETER_DEAL'
export const PERFORM_DEAL_CLOSE = 'DEAL_CONTAINER_PERFORM_DEAL_CLOSE'

export const PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE = 'DEAL_CONTAINER_PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE'

export const PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE = 'DEAL_CONTAINER_PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE'

export const NAVIGATE_DEAL_BACK = 'DEAL_CONTAINER_NAVIGATE_DEAL_BACK'

export const NAVIGATE_BACK_TO_DEAL_SCREEN = 'DEAL_CONTAINER_NAVIGATE_BACK_TO_DEAL_SCREEN'

export const PERFORM_CONTAINER_RESET = 'DEAL_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_POPOVER_AGREEMENT_HIDE = 'DEAL_CONTAINER_PERFORM_POPOVER_AGREEMENT_HIDE'
export const PERFORM_POPOVER_AGREEMENT_SHOW = 'DEAL_CONTAINER_PERFORM_POPOVER_AGREEMENT_SHOW'

export const PERFORM_POPOVER_DECISION_HIDE = 'DEAL_CONTAINER_PERFORM_POPOVER_DECISION_HIDE'
export const PERFORM_POPOVER_DECISION_SHOW = 'DEAL_CONTAINER_PERFORM_POPOVER_DECISION_SHOW'

export const REFRESH_CALL_GET_DEAL_AGENT_LIST = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST'

export const REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST'

export const REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS'

export const REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE'

export const REFRESH_CALL_GET_DEAL_TRACKING = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING'


export const REFRESH_CALL_GET_DEAL_TRACKING_REQUEST = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING_REQUEST'

export const REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS'

export const REFRESH_CALL_GET_DEAL_TRACKING_FAILURE = 'DEAL_CONTAINER_REFRESH_CALL_GET_DEAL_TRACKING_FAILURE'


export const PERFORM_DEAL_REFRESH_MODE = 'PERFORM_DEAL_REFRESH_MODE'

export const PERFORM_EDIT_DEAL = 'PERFORM_EDIT_DEAL'

export const SWAP_CONTEXT = 'DEAL_CONTAINER_SWAP_CONTEXT'

export const NAVIGATE_BACK = 'DEAL_CONTAINER_NAVIGATE_BACK'

export const NAVIGATE_TO_STAGE_DETAILS = 'DEAL_CONTAINER_NAVIGATE_TO_STAGE_DETAILS'
export const PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE = 'DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE'
export const PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW = 'DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW'
export const PERFORM_CLIENT_ROADMAP_ACTIVATE = 'DEAL_CONTAINER_PERFORM_CLIENT_ROADMAP_ACTIVATE'
export const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE = 'DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE'
export const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW = 'DEAL_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW'
export const PERFORM_CHANGE_STAGE_TAB = 'DEAL_CONTAINER_PERFORM_CHANGE_STAGE_TAB'
export const NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN = 'DEAL_CONTAINER_NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN'
export const NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN = 'DEAL_CONTAINER_NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN'

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
 *
 * @param {string} id .
 */
export type NAVIGATE_TO_EMPLOYEE = { id: string }
export const navigateToEmployee = (id: string): Action<NAVIGATE_TO_EMPLOYEE> => ({
    type: NAVIGATE_TO_EMPLOYEE,
    payload: {
        id,
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to set Deal id
 *
 * @param {Models.Deal} deal
 */
export type PERFORM_SET_DEAL = {deal: Models.Deal}
export const performSetDeal = (deal: Models.Deal): Action<PERFORM_SET_DEAL> => ({
    type: PERFORM_SET_DEAL,
    payload: {
        deal,
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to toggle DealExpandedMode.
 *
 */
export type PERFORM_DEAL_EXPANDED_MODE_TOGGLE = {}
export const performDealExpandedModeToggle = (): Action<PERFORM_DEAL_EXPANDED_MODE_TOGGLE> => ({
    type: PERFORM_DEAL_EXPANDED_MODE_TOGGLE,
    payload: {}
})

export type NAVIGATION_LOADER_SHOW = {isVisible: boolean}
export const navigationLoaderShow = (isVisible: boolean): Action<NAVIGATION_LOADER_SHOW> => ({
    type: NAVIGATION_LOADER_SHOW,
    payload: {
        isVisible: isVisible,
    }
})


export type REPLACE_DEAL_DATA = { dealRoute: Models.DealRoute}
export const replaceDealData = (dealRoute: Models.DealRoute): Action<REPLACE_DEAL_DATA> => ({
    type: REPLACE_DEAL_DATA,
    payload: {
        dealRoute: dealRoute,
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to open Deal.
 *
 * @param {string} dealId .
 */
export type NAVIGATE_TO_DEAL_SCREEN = { dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean}
export const navigateToDealScreen = (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean): Action<NAVIGATE_TO_DEAL_SCREEN> => ({
    type: NAVIGATE_TO_DEAL_SCREEN,
    payload: {
        dealId: dealId,
        dealMode: dealMode,
        isEditDealEnable: isEditDealEnable,
    }
})


export type PERFORM_DEAL_ROUTE_PUSH = { deal: Models.Deal, dealMode: Enums.DealMode, isEditDealEnable: boolean}
export const performDealRoutePush = (deal: Models.Deal, dealMode: Enums.DealMode, isEditDealEnable: boolean): Action<PERFORM_DEAL_ROUTE_PUSH> => ({
    type: PERFORM_DEAL_ROUTE_PUSH,
    payload: {
        deal: deal,
        dealMode: dealMode,
        isEditDealEnable: isEditDealEnable,
    }
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


export type PERFORM_DEAL_ROUTE_POP = {}
export const performDealRoutePop = (): Action<PERFORM_DEAL_ROUTE_POP> => ({
    type: PERFORM_DEAL_ROUTE_POP,
    payload: {}
})

/**
 * Thunk dispatched by "Customer" screen. Thunk used to flush cache by any kind customer data and request it again.
 *
 */
export type PERFORM_FLUSH = {}
export const performFlush = (): Action<PERFORM_FLUSH> => ({
    type: PERFORM_FLUSH,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
 *
 */
export type PERFORM_REFRESH = {}
export const performRefresh = (): Action<PERFORM_REFRESH> => ({
    type: PERFORM_REFRESH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
 */
export type PERFORM_REFRESH_EXECUTE = {}
export const performRefreshExecute = (): Action<PERFORM_REFRESH_EXECUTE> => ({
    type: PERFORM_REFRESH_EXECUTE,
    payload: {}
})


export type PERFORM_REFRESH_STAGES_SUCCESS = {stageList: Array<Models.DealStage>}
export const performRefreshStagesSuccess = (stageList: Array<Models.DealStage>): Action<PERFORM_REFRESH_STAGES_SUCCESS> => ({
    type: PERFORM_REFRESH_STAGES_SUCCESS,
    payload: {
        stageList
    }
})
/*
 * Action dispatched on success in thunk "performRefresh". Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_REFRESH_SUCCESS = { data: boolean }
export const performRefreshSuccess = (data: boolean): Action<PERFORM_REFRESH_SUCCESS> => ({
    type: PERFORM_REFRESH_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_REFRESH_FAILURE = { error: Error }
export const performRefreshFailure = (error: Error): Action<PERFORM_REFRESH_FAILURE> => ({
    type: PERFORM_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 */
export type REFRESH_CALL_GET_DEAL = {}
export const refresh_callGetDeal = (): Action<REFRESH_CALL_GET_DEAL> => ({
    type: REFRESH_CALL_GET_DEAL,
    payload: {}
})

export type REFRESH_CALL_GET_DEAL_TRACKING = {}
export const refresh_callGetDealTracking = (): Action<REFRESH_CALL_GET_DEAL_TRACKING> => ({
    type: REFRESH_CALL_GET_DEAL_TRACKING,
    payload: {}
})

export type REFRESH_CALL_GET_DEAL_TRACKING_REQUEST = {}
export const refresh_callGetDealTrackingRequest = (): Action<REFRESH_CALL_GET_DEAL_TRACKING_REQUEST> => ({
    type: REFRESH_CALL_GET_DEAL_TRACKING_REQUEST,
    payload: {}
})


export type REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS = {response: Response<Models.CrmStagesList>}
export const refresh_callGetDealTrackingSuccess = (response: Response<Models.CrmStagesList>): Action<REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS> => ({
    type: REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS,
    payload: {
        response: response
    }
})



export type REFRESH_CALL_GET_DEAL_TRACKING_FAILURE = {error: Error}
export const refresh_callGetDealTrackingFailure = (error: Error): Action<REFRESH_CALL_GET_DEAL_TRACKING_FAILURE> => ({
    type: REFRESH_CALL_GET_DEAL_TRACKING_FAILURE,
    payload: {error: error}
})
/**
 * Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 */
export type REFRESH_CALL_GET_DEAL_AGENT_LIST = {}
export const refresh_callGetDealAgentList = (): Action<REFRESH_CALL_GET_DEAL_AGENT_LIST> => ({
    type: REFRESH_CALL_GET_DEAL_AGENT_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "refresh_callGetDeal" started. Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 */
export type REFRESH_CALL_GET_DEAL_REQUEST = {}
export const refresh_callGetDealRequest = (): Action<REFRESH_CALL_GET_DEAL_REQUEST> => ({
    type: REFRESH_CALL_GET_DEAL_REQUEST,
    payload: {}
})
/**
 * Action dispatched on network thunk chain "refresh_callGetDealAgentListRequest" started. Thunk dispatched by "Deal" screen. Fetch agent list with current deal Id.
 */
export type REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST = {}
export const refresh_callGetDealAgentListRequest = (): Action<REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST> => ({
    type: REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 * @param {Models.Deal} response Data received by fetch.
 */
export type REFRESH_CALL_GET_DEAL_SUCCESS = { response: Response<Models.Deal> }
export const refresh_callGetDealSuccess = (response: Response<Models.Deal>): Action<REFRESH_CALL_GET_DEAL_SUCCESS> => ({
    type: REFRESH_CALL_GET_DEAL_SUCCESS,
    payload: {
        response: response
    }
})
/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 * @param {Models.Deal} response Data received by fetch.
 */
export type REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS = { response: Response<Models.AgentList> }
export const refresh_callGetDealAgentListSuccess = (response: Response<Models.AgentList>): Action<REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS> => ({
    type: REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_DEAL_FAILURE = { error: Error }
export const refresh_callGetDealFailure = (error: Error): Action<REFRESH_CALL_GET_DEAL_FAILURE> => ({
    type: REFRESH_CALL_GET_DEAL_FAILURE,
    payload: {
        error: error
    }
})
/*
 * Action dispatched on fetch failure in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE = { error: Error }
export const refresh_callGetDealAgentListFailure = (error: Error): Action<REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE> => ({
    type: REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_PRODUCT_SCREEN = {}
export const navigateToProductScreen = (): Action<NAVIGATE_TO_PRODUCT_SCREEN> => ({
    type: NAVIGATE_TO_PRODUCT_SCREEN,
    payload: {}
})


export type PERFORM_EXPAND_AGREEMENT_ROW = {index: number}
export const performExpandAgreementRow = (index: number): Action<PERFORM_EXPAND_AGREEMENT_ROW> => ({
    type: PERFORM_EXPAND_AGREEMENT_ROW,
    payload: {
        index: index
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_AGREEMENT_SCREEN = {}
export const navigateToAgreementScreen = (): Action<NAVIGATE_TO_AGREEMENT_SCREEN> => ({
    type: NAVIGATE_TO_AGREEMENT_SCREEN,
    payload: {}
})


export type PERFORM_SET_EXPANDED_CONTENT_SCREEN = {isExpanded: boolean}
export const performExpandScreen = (isExpanded: boolean): Action<PERFORM_SET_EXPANDED_CONTENT_SCREEN> => ({
    type: PERFORM_SET_EXPANDED_CONTENT_SCREEN,
    payload: {isExpanded:isExpanded}
})
/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_SOLUTION_LIST_SCREEN = {}
export const navigateToSolutionListScreen = (): Action<NAVIGATE_TO_SOLUTION_LIST_SCREEN> => ({
    type: NAVIGATE_TO_SOLUTION_LIST_SCREEN,
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

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to toggle extra info expand.
 *
 */
export type PERFORM_EXTRA_INFO_TOGGLE = {}
export const performExtraInfoToggle = (): Action<PERFORM_EXTRA_INFO_TOGGLE> => ({
    type: PERFORM_EXTRA_INFO_TOGGLE,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_AGENT_LIST_SCREEN = {}
export const navigateToAgentListScreen = (): Action<NAVIGATE_TO_AGENT_LIST_SCREEN> => ({
    type: NAVIGATE_TO_AGENT_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal comment list screen.
 *
 */
export type NAVIGATE_TO_COMMENT_LIST_SCREEN = {}
export const navigateToCommentListScreen = (): Action<NAVIGATE_TO_COMMENT_LIST_SCREEN> => ({
    type: NAVIGATE_TO_COMMENT_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
 *
 */
export type NAVIGATE_TO_PHASE_SCREEN = {}
export const navigateToPhaseScreen = (): Action<NAVIGATE_TO_PHASE_SCREEN> => ({
    type: NAVIGATE_TO_PHASE_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal non legal members screen.
 *
 */
export type NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN = {}
export const navigateToNonLegalMembersScreen = (): Action<NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN> => ({
    type: NAVIGATE_TO_NON_LEGAL_MEMBERS_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to show deal non legal member card screen.
 *
 */
export type NAVIGATE_TO_NON_LEGAL_MEMBER_CARD = {}
export const navigateToNonLegalMemberCard = (id: string): Action<NAVIGATE_TO_NON_LEGAL_MEMBER_CARD> => ({
    type: NAVIGATE_TO_NON_LEGAL_MEMBER_CARD,
    payload: {
        id: id
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk dispatched on user input DealCloseResult field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_DEAL_CLOSE_RESULT = { value: ModelsApp.Classifier }
export const performInputDealCloseResult = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_DEAL_CLOSE_RESULT> => ({
    type: PERFORM_INPUT_DEAL_CLOSE_RESULT,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
 *
 * @param {ModelsApp.Classifier} phase .
 */
export type PERFORM_PHASE_SWITCH = { phase: ModelsApp.Classifier, }
export const performPhaseSwitch = (phase: ModelsApp.Classifier,): Action<PERFORM_PHASE_SWITCH> => ({
    type: PERFORM_PHASE_SWITCH,
    payload: {
        phase: phase,
    }
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
 *
 */
export type PERFORM_PHASE_SELECT = {}
export const performPhaseSelect = (): Action<PERFORM_PHASE_SELECT> => ({
    type: PERFORM_PHASE_SELECT,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to close deal.
 *
 */
export type PERFORM_DEAL_CLOSE = {}
export const performDealClose = (): Action<PERFORM_DEAL_CLOSE> => ({
    type: PERFORM_DEAL_CLOSE,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to hide modal
 *
 */
export type PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE = {}
export const performModalPhaseSwitchQuestionHide = (): Action<PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE> => ({
    type: PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk used to hide modal
 *
 */
export type PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE = {}
export const performModalDealCloseResultHide = (): Action<PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE> => ({
    type: PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export type NAVIGATE_DEAL_BACK = {}
export const navigateDealBack = (): Action<NAVIGATE_DEAL_BACK> => ({
    type: NAVIGATE_DEAL_BACK,
    payload: {}
})



/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export type NAVIGATE_BACK_TO_DEAL_SCREEN = {}
export const navigateBackToDeal = (): Action<NAVIGATE_BACK_TO_DEAL_SCREEN> => ({
    type: NAVIGATE_BACK_TO_DEAL_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export type PERFORM_POPOVER_DECISION_SHOW = {data: Models.DealDecisionPopoverData, popoverTarget: string}
export const performPopoverDecisionShow = (data: Models.DealDecisionPopoverData, popoverTarget: string): Action<PERFORM_POPOVER_DECISION_SHOW> => ({
    type: PERFORM_POPOVER_DECISION_SHOW,
    payload: {
        data,
        popoverTarget
    }
})

/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export type PERFORM_POPOVER_DECISION_HIDE = {}
export const performPopoverDecisionHide = (): Action<PERFORM_POPOVER_DECISION_HIDE> => ({
    type: PERFORM_POPOVER_DECISION_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export type PERFORM_POPOVER_AGREEMENT_SHOW = {data: Models.DealAgreement, popoverTarget: string}
export const performPopoverAgreementShow = (data: Models.DealAgreement, popoverTarget: string): Action<PERFORM_POPOVER_AGREEMENT_SHOW> => ({
    type: PERFORM_POPOVER_AGREEMENT_SHOW,
    payload: {
        data,
        popoverTarget
    }
})

/**
 * Thunk dispatched by "Deal" screen.
 *
 */
export type PERFORM_POPOVER_AGREEMENT_HIDE = {}
export const performPopoverAgreementHide = (): Action<PERFORM_POPOVER_AGREEMENT_HIDE> => ({
    type: PERFORM_POPOVER_AGREEMENT_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

export type PERFORM_DEAL_REFRESH_MODE = {mode: Enums.DealRefreshMode | null}
export const performDealRefreshMode = (mode: Enums.DealRefreshMode | null): Action<PERFORM_DEAL_REFRESH_MODE> => ({
    type: PERFORM_DEAL_REFRESH_MODE,
    payload: {
        mode:mode,
    }
})

export type PERFORM_EDIT_DEAL = {}
export const performEditDeal = (): Action<PERFORM_EDIT_DEAL> => ({
    type: PERFORM_EDIT_DEAL,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen.
 * Thunk dispatched to save navigationType from state.mrmkmcibApp.reducerAuthorization.navigateBackData.navigationType.
 *
 * @param {EnumsAppAll.NavigationType} navigationType .
 */
export type SWAP_CONTEXT = { navigationType: EnumsAppAll.NavigationType }
export const swapContext = (navigationType: EnumsAppAll.NavigationType): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        navigationType: navigationType
    }
})

export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN = {}
export const navigateToDealAttachmentsScreen = (): Action<NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN> => ({
    type: NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 *
 */
export type NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN = {}
export const navigateBackFromDealAttachmentsScreen = (): Action<NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN> => ({
    type: NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN,
    payload: {}
})
