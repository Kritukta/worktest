/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsDealEditor from '../actions/ActionsDealEditor'
import {defaultValues} from "../models/Models"
import {Enums} from '../Enums'
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import {Models as ModelsApp} from "mrmkmcib-app"
import Action from "../models/Action"

import * as util from '../common/Util'

const UNIVERSAL_DEAL: ModelsApp.Classifier = {
    parentId: '',
    name:'SBRF_NKP_REQUEST_TYPE',
    value:'Стандартная сделка',
    code:'Универсальная'
}


const reducerDealEditor = handleActions<ModelsDealEditor.IDealEditorState>({

    // Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
    [actionsDealEditor.NAVIGATE_TO_DEAL_EDITOR]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.NAVIGATE_TO_DEAL_EDITOR>): ModelsDealEditor.IDealEditorState => {
        return {
            ...ModelsDealEditor.initialState.state,
            isInitRoadMapNecessary: action.payload.isInitRoadMapNecessary,
            dealEditorMode: action.payload.mode,
            isRowBlocked: action.payload.mode == Enums.DealEditorMode.UpdateMode
        }
    },

    // Internal thunk used in "DealEditor" container. Thunk chain used to swap customer and user.
    [actionsDealEditor.SWAP_CONTEXT]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.SWAP_CONTEXT>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isEditorMode: action.payload.isEditorMode,
            currentCustomerManaged: action.payload.customer,
            currentDeal: action.payload.deal,
            currentEditorStep: Enums.DealEditorStep.Main,
        }
    },


    // Thunk dispatched to callPutDealInitRoadMap.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched to callPutDealInitRoadMapRequest.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealInitRoadMapFetching: true,
        }
    },
    // Thunk dispatched to callPutDealInitRoadMapRequestSuccess.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_SUCCESS]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealInitRoadMapFetching: false,
        }
    },
    // Thunk dispatched to callPutDealInitRoadMapRequestFailure.
    [actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_PUT_DEAL_INIT_ROAD_MAP_REQUEST_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealInitRoadMapFetching: false,
            dealInitRoadMapError: action.payload.error
        }
    },
    // Thunk dispatched to performInitRoadMapFailure.
    [actionsDealEditor.PERFORM_INIT_ROAD_MAP_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INIT_ROAD_MAP_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealInitRoadMapError: action.payload.error
        }
    },


    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to cancel changes.
    [actionsDealEditor.PERFORM_CANCEL]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
    [actionsDealEditor.PERFORM_NEXT]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentEditorStep: Enums.DealEditorStep.Extra,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
    [actionsDealEditor.PERFORM_SAVE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SAVE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            operationUuidCreate: action.payload.operationUuidCreate,
            operationUuidUpdate: action.payload.operationUuidUpdate,
        }
    },

    [actionsDealEditor.PERFORM_CANCEL_SAVE_ERROR]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealSaveError: null,
        }
    },


    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "DealEtitor" screen. Thunk used to confirm changes in Deal.
    [actionsDealEditor.PERFORM_SAVE_EXECUTE]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealSaveInProgress: true,
            dealSaveError: null,
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "DealEtitor" screen. Thunk used to confirm changes in Deal.
    [actionsDealEditor.PERFORM_SAVE_SUCCESS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SAVE_SUCCESS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealSave: action.payload.data,
            dealSaveInProgress: false,
            dealSaveError: null,
            operationUuidCreate: '',
            operationUuidUpdate: '',
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "DealEtitor" screen. Thunk used to confirm changes in Deal.
    [actionsDealEditor.PERFORM_SAVE_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SAVE_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealSaveInProgress: false,
            dealSaveError: action.payload.error,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap navigate back.
    [actionsDealEditor.NAVIGATE_BACK]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    [actionsDealEditor.NAVIGATE_BACK_EDITOR]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

	// Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
	[actionsDealEditor.PERFORM_INPUT_CUSTOMER]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_CUSTOMER>): ModelsDealEditor.IDealEditorState => {
		return {
			...state,
			currentCustomerManaged: action.payload.value,
		}
	},

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
    [actionsDealEditor.PERFORM_INPUT_DESCRIPTION]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_DESCRIPTION>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputDescription: action.payload.value,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Product field.
    [actionsDealEditor.NAVIGATE_TO_PRODUCT_PICKER_SCREEN]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Product field.
    [actionsDealEditor.PERFORM_INPUT_PRODUCT]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_PRODUCT>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputProduct: action.payload.value,
            salesMethodList: util.getDealSalesMethodList(state.inputProduct),
            inputSalesMethod: util.getDealSalesMethodList(state.inputProduct).data.length == 1 ? util.getDealSalesMethodList(state.inputProduct).data[0] : defaultValues.Classifier,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap SalesMethod field.
    [actionsDealEditor.NAVIGATE_TO_SALES_METHOD_PICKER_SCREEN]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    [actionsDealEditor.PERFORM_UPDATE_SALES_METHOD]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_UPDATE_SALES_METHOD>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputSalesMethod:action.payload.value
        }
    },



    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input SalesMethod field.
    [actionsDealEditor.PERFORM_INPUT_SALES_METHOD]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_SALES_METHOD>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputSalesMethod: action.payload.value,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Currency field.
    [actionsDealEditor.NAVIGATE_TO_CURRENCY_PICKER_SCREEN]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Currency field.
    [actionsDealEditor.PERFORM_INPUT_CURRENCY]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_CURRENCY>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputCurrency: action.payload.value,
        }
    },


    [actionsDealEditor.PERFORM_INPUT_SUM_STRING]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_SUM_STRING>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputSumString: action.payload.value,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_EQUIVALENT_SUM_STRING]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_EQUIVALENT_SUM_STRING>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputEquivalentSumString: action.payload.value,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_TRANSFER_COMMISSION]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_TRANSFER_COMMISSION>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputTransferCommission: action.payload.value,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_STAFF_COUNT]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_STAFF_COUNT>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputStaffCount: action.payload.value,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_EQUIVALENT_CONVERSION_RATE_STRING>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputEquivalentConversionRateString: action.payload.value
        }
    },

    [actionsDealEditor.PERFORM_SET_EQUIVALENT_RATE_MODE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SET_EQUIVALENT_RATE_MODE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isEquivalentRateMode: action.payload.value
        }
    },

    [actionsDealEditor.PERFORM_SET_PRODUCT_METHOD_MODE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SET_PRODUCT_METHOD_MODE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isProductMethodEnabled: action.payload.isProductMethodEnabled
        }
    },


    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input DealDate field.
    [actionsDealEditor.PERFORM_INPUT_DEAL_DATE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_DEAL_DATE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputDealDate: action.payload.value,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap activity list.
    [actionsDealEditor.NAVIGATE_TO_ACTIVITY_LIST_SCREEN]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from Scope.
    [actionsDealEditor.PERFORM_ACTIVITY_LIST_APPEND]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPutDealActivityAppend" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_REQUEST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealActivityAppendFetching: true,
            dealActivityAppendError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPutDealActivityAppend". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_SUCCESS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealActivityAppend: action.payload.response.data,
            dealActivityAppendCachedDate: action.payload.response.cachedDate,
            dealActivityAppendFetching: false,
            dealActivityAppendError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPutDealActivityAppend". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_APPEND_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealActivityAppendFetching: false,
            dealActivityAppendError: action.payload.error,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from linked list.
    [actionsDealEditor.PERFORM_ACTIVITY_LIST_EXCLUDE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_ACTIVITY_LIST_EXCLUDE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentActivity: action.payload.activity,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPutDealActivityExclude" started. Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_REQUEST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealActivityExcludeFetching: true,
            dealActivityExcludeError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPutDealActivityExclude". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_SUCCESS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealActivityExclude: action.payload.response.data,
            dealActivityExcludeCachedDate: action.payload.response.cachedDate,
            dealActivityExcludeError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPutDealActivityExclude". Thunk dispatched by "DealEditor" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealActivityExcludeFetching: false,
            dealActivityExcludeError: action.payload.error,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched after activity list updated.
    [actionsDealEditor.PERFORM_SCOPE_CLEAR_AND_REFRESH]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched to reset container state to default values.
    [actionsDealEditor.PERFORM_CONTAINER_RESET]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...ModelsDealEditor.initialState.state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk chain used to navigate.
    [actionsDealEditor.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "DealEditor" screen. Thunk chain used to save member list.
    [actionsDealEditor.PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SAVE_MEMBER__LIST_IN_NEW_DEAL>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentDeal:{
                ...state.currentDeal,
                memberList:action.payload.memberList
            },
            inputTeam: action.payload.memberList
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched save.
    [actionsDealEditor.CALL_POST_DEAL_CREATE]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealEditor" screen. Thunk dispatched save.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealUpdateFetching: true,
            dealUpdateError: null,
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST_SUCCESS]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealUpdateFetching: false,
            dealUpdateError: null,
        }
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_PUT_DEAL_UPDATE_REQUEST_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealUpdateFetching: false,
            dealUpdateError: action.payload.error,
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealCreateFetching: true,
            dealCreateError: null,
        }
    },
    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST_SUCCESS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST_SUCCESS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealCreateFetching: false,
            dealCreateError: null,
            id:action.payload.id,
        }
    },
    [actionsDealEditor.PERFORM_SET_DEAL_CREATION_MODE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SET_DEAL_CREATION_MODE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealCreationMode:action.payload.mode
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_POST_DEAL_CREATE_REQUEST_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealCreateFetching: false,
            dealCreateError: action.payload.error,
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.DEAL_CREATED]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            dealCreated: true
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.INITIAL_VALUES_FOR_DEAL_EDITOR]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.INITIAL_VALUES_FOR_DEAL_EDITOR>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputProduct: action.payload.deal.products && action.payload.deal.products.length && action.payload.deal.products[0].productClassifier || defaultValues.Classifier,
            inputSalesMethod: action.payload.deal.salesMethodClassifier || defaultValues.Classifier,
            inputDescription: action.payload.deal.title,
            inputSum: action.payload.deal.sum,
            inputAgentList: action.payload.deal.agentList || defaultValues.AgentList,
            inputCurrency: action.payload.deal.currency,
            inputDealDate: action.payload.deal.plannedFinishDate,
            currentDeal:action.payload.deal,
            inputSumString: util.convertNumberToString(action.payload.deal.sum),
            inputEquivalentSum: action.payload.deal.sumRur,
            inputEquivalentSumString: util.convertNumberToString(action.payload.deal.sumRur),
            inputEquivalentConversionRate: action.payload.deal.exchangeCourse,
            inputEquivalentConversionRateString: util.convertNumberToString(action.payload.deal.exchangeCourse),
            inputDealType: state.currentDeal.requestTypeClassifier && state.currentDeal.requestTypeClassifier.code ? state.currentDeal.requestTypeClassifier : UNIVERSAL_DEAL,
            inputStaffCount: state.currentDeal.salaryProjectDetails && state.currentDeal.salaryProjectDetails.staffCount ? `${state.currentDeal.salaryProjectDetails.staffCount}` : null,
            inputTransferCommission: state.currentDeal.salaryProjectDetails && state.currentDeal.salaryProjectDetails.fee ? `${state.currentDeal.salaryProjectDetails.fee}` : null,
            inputAttractionChannel: state.currentDeal.attractingChannel || defaultValues.Classifier,
            inputChance: state.currentDeal.probability ? `${state.currentDeal.probability}` : null,
            inputApplication: state.currentDeal.application ||  defaultValues.Classifier,
            applicationKkClassifierList: util.getApplicationKkClassifierList(action.payload.deal.salesMethodClassifier || defaultValues.Classifier, action.payload.classifierDictionary.SBRF_APPLICATION_KK)
        }
    },

    // Action dispatched on network thunk chain "callPutAgentOccasionListUpdate" started. Thunk dispatched by "OccasionList" screen. Fetch put request.
    [actionsDealEditor.PERFORM_VALIDATE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_VALIDATE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isValid: action.payload.value
        }
    },

    // Action dispatched on thunk "performInputFilteredMethodClassifier" started. Thunk dispatched by "thunkDealEditor".
    [actionsDealEditor.PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_FILTERED_METHOD_CLASSIFIER>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputFilteredMethodClassifier: action.payload.inputFilteredMethodClassifier
        }
    },

    // Action dispatched on thunk "performInputFilteredMethodClassifier" started. Thunk dispatched by "thunkDealEditor".
    [actionsDealEditor.CALL_GET_DEAL_REFRESH]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    [actionsDealEditor.CALL_GET_DEAL_REFRESH_REQUEST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentDealFetching: true,
            currentDealError: null,
        }
    },

    [actionsDealEditor.CALL_GET_DEAL_REFRESH_SUCCESS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_GET_DEAL_REFRESH_SUCCESS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentDeal: action.payload.response.data,
            currentDealFetching: false,
            currentDealError: null,
        }
    },

    [actionsDealEditor.CALL_GET_DEAL_REFRESH_FAILURE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.CALL_GET_DEAL_REFRESH_FAILURE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentDealFetching: false,
            currentDealError: action.payload.error,
        }
    },

    [actionsDealEditor.PERFORM_RETURN_TO_DEAL]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

        [actionsDealEditor.PERFORM_TAP_ACTIVITY_DELETE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_TAP_ACTIVITY_DELETE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            tapActivityDeleteId:action.payload.id
        }
    },

    [actionsDealEditor.GET_DEAL_ACTIVITY_LIST]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.GET_DEAL_ACTIVITY_LIST>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            activityList: action.payload.activityList,
            dealActivityExcludeFetching: false,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_SAVED_MODE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_SAVED_MODE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            savedMode: action.payload.savedMode,
        }
    },

    [actionsDealEditor.PREPARE_SALES_METHOD_CLASSIFIERS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PREPARE_SALES_METHOD_CLASSIFIERS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            salesMethodClassifiersList: action.payload.salesMethodClassifiersList,
        }
    },

    [actionsDealEditor.PREPARE_PRODUCT_CLASSIFIERS]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PREPARE_PRODUCT_CLASSIFIERS>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            productClassifiersList: action.payload.productClassifiersList,
        }
    },

    [actionsDealEditor.PREPARE_DEAL_LIST]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_OPERUUID]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_OPERUUID>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            activityOperUuid: action.payload.activityOperUuid,
        }
    },

    [actionsDealEditor.PERFORM_NAVIGATION_BUTTON_DISABLED]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_NAVIGATION_BUTTON_DISABLED>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isNavigationButtonDisabled: action.payload.isNavigationButtonDisabled,
        }
    },

    [actionsDealEditor.PERFORM_SET_OWNER_FLAG]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SET_OWNER_FLAG>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isOwner: action.payload.isOwner,
        }
    },

    [actionsDealEditor.SET_VALIDATION_ERROR]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.SET_VALIDATION_ERROR>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            validationError: action.payload.validationError,
        }
    },

    [actionsDealEditor.NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.NAVIGATE_TO_DEAL_TYPE_PICKER_SCREEN>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    [actionsDealEditor.PERFORM_INPUT_DEAL_TYPE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_INPUT_DEAL_TYPE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputChance:ModelsDealEditor.initialState.state.inputChance,
            inputApplication:ModelsDealEditor.initialState.state.inputApplication,
            inputCurrency:ModelsDealEditor.initialState.state.inputCurrency,
            inputDealDate:ModelsDealEditor.initialState.state.inputDealDate,
            inputDescription:ModelsDealEditor.initialState.state.inputDescription,
            inputEquivalentConversionRateString:ModelsDealEditor.initialState.state.inputEquivalentConversionRateString,
            inputEquivalentSumString:ModelsDealEditor.initialState.state.inputEquivalentSumString,
            inputSumString:ModelsDealEditor.initialState.state.inputSumString,
            inputTeam:ModelsDealEditor.initialState.state.inputTeam,
            inputProduct:ModelsDealEditor.initialState.state.inputProduct,
            inputSalesMethod:ModelsDealEditor.initialState.state.inputSalesMethod,
            inputStaffCount: ModelsDealEditor.initialState.state.inputStaffCount,
            inputTransferCommission: ModelsDealEditor.initialState.state.inputTransferCommission,
            inputAttractionChannel: ModelsDealEditor.initialState.state.inputAttractionChannel,
            inputDealType: action.payload.inputDealType,
            validationError: null,

        }
    },

    [actionsDealEditor.PERFORM_SHOW_ADDITIONAL_FIELDS]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isAdditionalFieldsAvailable: true,
        }
    },

    [actionsDealEditor.NAVIGATE_TO_AGENT_PICKER_SCREEN]: (state: ModelsDealEditor.IDealEditorState): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
        }
    },

    [actionsDealEditor.SHOW_CHANCE_POPOVER]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.SHOW_CHANCE_POPOVER>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isChancePopoverOpened: action.payload.isChancePopoverOpened,
        }
    },

    [actionsDealEditor.SHOW_ATTRACTION_CHANNEL_POPOVER]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.SHOW_ATTRACTION_CHANNEL_POPOVER>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isAttractionChannelPopoverOpened: action.payload.isAttractionChannelPopoverOpened,
        }
    },

    [actionsDealEditor.PERFORM_SELECT_CHANCE]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SELECT_CHANCE>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputChance: action.payload.inputChance,
        }
    },

    [actionsDealEditor.SHOW_APPLICATION_POPOVER]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.SHOW_APPLICATION_POPOVER>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isApplicationPopoverOpened: action.payload.isApplicationPopoverOpened,
        }
    },

    [actionsDealEditor.SHOW_SALES_METHOD_POPOVER]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.SHOW_SALES_METHOD_POPOVER>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            isSalesMethodPopoverOpened: action.payload.isSalesMethodPopoverOpened,
        }
    },

    [actionsDealEditor.PERFORM_SELECT_APPLICATION]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SELECT_APPLICATION>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputApplication: action.payload.inputApplication,
        }
    },

    [actionsDealEditor.PERFORM_SELECT_SALES_METHOD]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SELECT_SALES_METHOD>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputSalesMethod: action.payload.inputSalesMethod,
        }
    },

    [actionsDealEditor.PERFORM_SELECT_ATTRACTION_CHANNEL]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SELECT_ATTRACTION_CHANNEL>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputAttractionChannel: action.payload.inputAttractionChannel,
        }
    },

    [actionsDealEditor.PREPARE_APPLICATION_KK_CLASSIFIER_LIST]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PREPARE_APPLICATION_KK_CLASSIFIER_LIST>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            applicationKkClassifierList: action.payload.applicationKkClassifierList,
        }
    },

    [actionsDealEditor.PERFORM_PARENT_DEAL_SET]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_PARENT_DEAL_SET>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentDeal:{
                ...state.currentDeal,
                parentDeal: action.payload.parentDeal,
            },
        }
    },

    [actionsDealEditor.PERFORM_SALES_CAMPAIGN_SET]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SALES_CAMPAIGN_SET>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            currentDeal:{
                ...state.currentDeal,
                salesCampaign: action.payload.salesCampaign,
            },
        }
    },

    [actionsDealEditor.PERFORM_SAVE_AGENT_LIST]: (state: ModelsDealEditor.IDealEditorState, action: Action<actionsDealEditor.PERFORM_SAVE_AGENT_LIST>): ModelsDealEditor.IDealEditorState => {
        return {
            ...state,
            inputAgentList: action.payload.inputAgentList,
        }
    },



}, ModelsDealEditor.initialState.state)

export default reducerDealEditor
