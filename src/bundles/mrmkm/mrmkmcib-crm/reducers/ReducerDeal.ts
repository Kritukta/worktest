/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsDeal from '../actions/ActionsDeal'
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

import * as util from '../common/Util'


const reducerDeal = handleActions<ModelsDeal.IDealState>({

    // Thunk dispatched by "Deal" screen. Thunk chain used to navogate to employee.
    [actionsDeal.NAVIGATE_TO_EMPLOYEE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_EMPLOYEE>): ModelsDeal.IDealState => {
        return {
            ...state,
            isDealExpandedMode: false,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to toggle DealExpandedMode.
    [actionsDeal.PERFORM_DEAL_EXPANDED_MODE_TOGGLE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_DEAL_EXPANDED_MODE_TOGGLE>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },


    [actionsDeal.NAVIGATION_LOADER_SHOW]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATION_LOADER_SHOW>): ModelsDeal.IDealState => {
        return {
            ...state,
            navigationInProgress: action.payload.isVisible,
        }
    },

    [actionsDeal.REPLACE_DEAL_DATA]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REPLACE_DEAL_DATA>): ModelsDeal.IDealState => {
        return {
            ...ModelsDeal.initialState.state,
            dealRoute: state.dealRoute,
            currentDealId: action.payload.dealRoute.deal.id,
            isEditDealEnable: action.payload.dealRoute.isEditDealEnable,
            isDealExpandedMode: false,
            currentDeal: action.payload.dealRoute.deal,
            currentMode: action.payload.dealRoute.dealMode
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to open Deal.
    [actionsDeal.NAVIGATE_TO_DEAL_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_DEAL_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...ModelsDeal.initialState.state,
            dealRoute: state.dealRoute,
            currentDealId: action.payload.dealId,
            isEditDealEnable: action.payload.isEditDealEnable,
            isDealExpandedMode: false,
            isReadOnlyStages: true,
            currentDeal: defaultValues.Deal,
            currentMode: action.payload.dealMode
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to set Deal id
    [actionsDeal.PERFORM_SET_DEAL]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_SET_DEAL>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDeal: {
                ...defaultValues.Deal,
                ...action.payload.deal,
            },
            currentDealId: action.payload.deal.id,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_REFRESH>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH_EXECUTE]: (state: ModelsDeal.IDealState, action: Action<void>): ModelsDeal.IDealState => {
        return {
            ...state,
            refreshInProgress: true,
            refreshError: null,
        }
    },
    // Action dispatched on success in thunk "performRefresh". Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH_SUCCESS]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_REFRESH_SUCCESS>): ModelsDeal.IDealState => {
        return {
            ...state,
            refresh: action.payload.data,
            refreshInProgress: false,
            refreshError: null,
        }
    },

    [actionsDeal.PERFORM_DEAL_ROUTE_POP]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_DEAL_ROUTE_POP>): ModelsDeal.IDealState => {
        const stack = [...state.dealRoute]
        stack.pop()
        return {
            ...state,
            currentDeal: stack.length === 0 ? defaultValues.Deal : state.currentDeal,
            dealRoute: stack,
        }
    },

    [actionsDeal.PERFORM_DEAL_ROUTE_PUSH]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_DEAL_ROUTE_PUSH>): ModelsDeal.IDealState => {
        return {
            ...state,
           dealRoute: [...state.dealRoute, {
                deal: action.payload.deal,
                dealMode: action.payload.dealMode,
                isEditDealEnable: action.payload.isEditDealEnable
            }],
        }
    },

    [actionsDeal.SET_SUP_PARAMETER_DEAL]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.SET_SUP_PARAMETER_DEAL>): ModelsDeal.IDealState => {
        return {
            ...state,
            supParameters: action.payload.params,
        }
    },

    [actionsDeal.PERFORM_EXPAND_AGREEMENT_ROW]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_EXPAND_AGREEMENT_ROW>): ModelsDeal.IDealState => {
        return {
            ...state,
            expandedAgreementRowIndex: action.payload.index,
        }
    },
    // Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "Deal" screen. Thunk chain used to load Deal data.
    [actionsDeal.PERFORM_REFRESH_FAILURE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_REFRESH_FAILURE>): ModelsDeal.IDealState => {
        return {
            ...state,
            refreshInProgress: false,
            refreshError: action.payload.error,
        }
    },

    // Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Deal" screen. Fetch agent list with current deal Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },


    // Thunk dispatched by "Deal" screen.
    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },


    // Action dispatched on network thunk chain "refresh_callGetDeal" started. Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_REQUEST]: (state: ModelsDeal.IDealState, action: Action<void>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDealFetching: true,
            currentDealError: null,
        }
    },
    // Action dispatched on network thunk chain "refresh_callGetDeal" started. Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_REQUEST]: (state: ModelsDeal.IDealState, action: Action<void>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealAgentListFetching: true,
            dealAgentListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_SUCCESS]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_SUCCESS>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDeal: action.payload.response.data,
            currentDealCachedDate: action.payload.response.cachedDate,
            currentDealFetching: false,
            currentDealError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_SUCCESS>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealAgentList: action.payload.response.data,
            dealAgentListCachedDate: action.payload.response.cachedDate,
            dealAgentListFetching: false,
            dealAgentListError: null,
        }
    },

    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_REQUEST]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_REQUEST>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealCrmStages: defaultValues.EmptyList,
            dealCrmStagesFetching: true,
            dealCrmStagesError: null,
        }
    },


    [actionsDeal.PERFORM_REFRESH_STAGES_SUCCESS]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_REFRESH_STAGES_SUCCESS>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDeal: {
                ...state.currentDeal,
                stages: action.payload.stageList
            },

        }
    },

    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_SUCCESS>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealCrmStages: action.payload.response.data,
            dealCrmStagesFetching: false,
            dealCrmStagesError: null,
        }
    },
    [actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_FAILURE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_TRACKING_FAILURE>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealCrmStagesFetching: false,
            dealCrmStagesError: action.payload.error,
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetDeal". Thunk dispatched by "Deal" screen. Fetch currentDealId with current Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_FAILURE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_FAILURE>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDealFetching: false,
            currentDealError: action.payload.error,
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetDealAgentList". Thunk dispatched by "Deal" screen. Fetch agent list with current deal Id.
    [actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.REFRESH_CALL_GET_DEAL_AGENT_LIST_FAILURE>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealAgentList: {data: []},
            dealAgentListFetching: false,
            dealAgentListError: action.payload.error,
        }
    },


    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_PRODUCT_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_PRODUCT_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_AGREEMENT_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_AGREEMENT_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
            isDealExpandedMode: true,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.PERFORM_SET_EXPANDED_CONTENT_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_SET_EXPANDED_CONTENT_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
            isDealExpandedMode: action.payload.isExpanded,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_SOLUTION_LIST_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_SOLUTION_LIST_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_MEMBER_LIST_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to toggle extra info expand.
    [actionsDeal.PERFORM_EXTRA_INFO_TOGGLE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_EXTRA_INFO_TOGGLE>): ModelsDeal.IDealState => {
        return {
            ...state,
            isExtraInfoExpanded: !state.isExtraInfoExpanded,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_AGENT_LIST_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_AGENT_LIST_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to show deal comment list screen.
    [actionsDeal.NAVIGATE_TO_COMMENT_LIST_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_COMMENT_LIST_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to show deal phase screen.
    [actionsDeal.NAVIGATE_TO_PHASE_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_PHASE_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
            isDealExpandedMode: true,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk dispatched on user input DealCloseResult field.
    [actionsDeal.PERFORM_INPUT_DEAL_CLOSE_RESULT]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_INPUT_DEAL_CLOSE_RESULT>): ModelsDeal.IDealState => {
        return {
            ...state,
            inputDealCloseResult: action.payload.value,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
    [actionsDeal.PERFORM_PHASE_SWITCH]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_PHASE_SWITCH>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDealPhase: action.payload.phase,
            isVisibleModalPhaseSwitchQuestion: !util.isDealPhaseLast(action.payload.phase),
            isVisibleModalDealCloseResult: util.isDealPhaseLast(action.payload.phase),
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to switch deal phase.
    [actionsDeal.PERFORM_PHASE_SELECT]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_PHASE_SELECT>): ModelsDeal.IDealState => {
        return {
            ...state,
            isVisibleModalPhaseSwitchQuestion: false,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to close deal.
    [actionsDeal.PERFORM_DEAL_CLOSE]: (state: ModelsDeal.IDealState): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDeal: defaultValues.Deal,
            currentDealId: '',
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to hide modal
    [actionsDeal.PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_MODAL_PHASE_SWITCH_QUESTION_HIDE>): ModelsDeal.IDealState => {
        return {
            ...state,
            isVisibleModalPhaseSwitchQuestion: false,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk used to hide modal
    [actionsDeal.PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_MODAL_DEAL_CLOSE_RESULT_HIDE>): ModelsDeal.IDealState => {
        return {
            ...state,
            isVisibleModalDealCloseResult: false,
        }
    },

    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_AGREEMENT_SHOW]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_POPOVER_AGREEMENT_SHOW>): ModelsDeal.IDealState => {
        return {
            ...state,
            agreementPopoverData: action.payload.data,
            agreementPopoverTarget: action.payload.popoverTarget,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_AGREEMENT_HIDE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_POPOVER_AGREEMENT_HIDE>): ModelsDeal.IDealState => {
        return {
            ...state,
            agreementPopoverData: null,
            agreementPopoverTarget: null,
        }
    },

    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_DECISION_SHOW]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_POPOVER_DECISION_SHOW>): ModelsDeal.IDealState => {
        return {
            ...state,
            isVisiblePopoverDecision: true,
            decisionPopoverData: action.payload.data,
            decisionPopoverTarget: action.payload.popoverTarget,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDeal.PERFORM_POPOVER_DECISION_HIDE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_POPOVER_AGREEMENT_HIDE>): ModelsDeal.IDealState => {
        return {
            ...state,
            isVisiblePopoverDecision: false,
        }
    },

    // Thunk dispatched by "Deal" screen.
    [actionsDeal.NAVIGATE_DEAL_BACK]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_DEAL_BACK>): ModelsDeal.IDealState => {
        return {
            ...state,
            isExtraInfoExpanded: false,
            expandedAgreementRowIndex: -1,
        }
    },

    // Thunk dispatched by "Deal" screen.
    [actionsDeal.NAVIGATE_BACK_TO_DEAL_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_BACK_TO_DEAL_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk dispatched to reset container state to default values.
    [actionsDeal.PERFORM_CONTAINER_RESET]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_CONTAINER_RESET>): ModelsDeal.IDealState => {
        return {
            ...ModelsDeal.initialState.state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to set editor mode.
    [actionsDeal.PERFORM_DEAL_REFRESH_MODE]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_DEAL_REFRESH_MODE>): ModelsDeal.IDealState => {
        return {
            ...state,
            dealRefreshMode:action.payload.mode
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to set editor mode.
    [actionsDeal.PERFORM_EDIT_DEAL]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.PERFORM_EDIT_DEAL>): ModelsDeal.IDealState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Deal" screen.
    // Thunk dispatched to save navigationType from state.mrmkmcibApp.reducerAuthorization.navigateBackData.navigationType.
    [actionsDeal.SWAP_CONTEXT]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.SWAP_CONTEXT>): ModelsDeal.IDealState => {
        return {
            ...state,
            navigationType: action.payload.navigationType
        }
    },
    [actionsDeal.NAVIGATE_BACK]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_BACK>): ModelsDeal.IDealState => {
        return {
            ...state,
            currentDeal: defaultValues.Deal,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_TO_DEAL_ATTACHMENTS_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
            isDealExpandedMode: true,
        }
    },

    // Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
    [actionsDeal.NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN]: (state: ModelsDeal.IDealState, action: Action<actionsDeal.NAVIGATE_BACK_FROM_DEAL_ATTACHMENTS_SCREEN>): ModelsDeal.IDealState => {
        return {
            ...state,
            isDealExpandedMode: false,
        }
    },




}, ModelsDeal.initialState.state)

export default reducerDeal
