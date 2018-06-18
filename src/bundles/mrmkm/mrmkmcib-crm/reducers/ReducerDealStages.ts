
import {handleActions} from "redux-actions"
import * as ModelsDealStages from '../models/ModelsDealStages'
import * as actionsDealStages from '../actions/ActionDealStages'
import Action from "../models/Action"
import * as util from "../common/Util"
import {defaultValues} from "../models/Models"

const reducerDealStages = handleActions<ModelsDealStages.IDealStagesState>({


    [actionsDealStages.CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS]: (state: ModelsDealStages.IDealStagesState,
                                                               action: Action<actionsDealStages.CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS>):
                                                                ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            currentDeal: {
                ...state.currentDeal,
                isRoadMapShow: action.payload.enabled
            }
        }
    },
    // Thunk dispatched to setAccessStagesFlag.
    [actionsDealStages.SET_ACCESS_STAGES_FLAG]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SET_ACCESS_STAGES_FLAG>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isAccessibleStages: action.payload.enabled
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.PERFORM_ROAD_MAP_SWITCH_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "Deal" screen.
    [actionsDealStages.PERFORM_ROAD_MAP_SWITCH_FAILURE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.NAVIGATE_TO_STAGE_DETAILS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.NAVIGATE_TO_STAGE_DETAILS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            selectedStage: action.payload.stage,
            activePosition: action.payload.activePosition,

    }
    },

    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isVisiblePopoverClientRoadMap: false,
        }
    },

    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isVisiblePopoverClientRoadMap: true,
        }
    },


    [actionsDealStages.PERFORM_CLIENT_ROADMAP_ACTIVATE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isReadOnlyStages: !state.isReadOnlyStages,
            isVisiblePopoverClientRoadMap: false,
        }
    },


    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isVisiblePopoverClientRoadMapHelp: false,
        }
    },

    [actionsDealStages.PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isVisiblePopoverClientRoadMap: false,
            isVisiblePopoverClientRoadMapHelp: true,
        }
    },

    [actionsDealStages.SWAP_CONTEXT]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SWAP_CONTEXT>): ModelsDealStages.IDealStagesState => {
        return {
            ...ModelsDealStages.initialState.state,
            currentDeal: action.payload.currentDeal,
            stageList: action.payload.currentDeal.stages || [],
            crmStages: action.payload.crmStages,
            progress: action.payload.currentDeal.progress || 0,
            system: action.payload.currentDeal.system,
            isReadOnlyStages: action.payload.isReadOnlyStages,
            currentCustomerManaged:action.payload.customer,
        }
    },

    [actionsDealStages.PERFORM_REFRESH_STAGES_SUCCESS]: (state: ModelsDealStages.IDealStagesState,
                                                         action: Action<actionsDealStages.PERFORM_REFRESH_STAGES_SUCCESS>): ModelsDealStages.IDealStagesState => {

        return {
            ...state,
            stageList: action.payload.stageList,
        }

    },

    [actionsDealStages.PERFORM_REFRESH_STAGES_FAILURE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state
        }
    },

    [actionsDealStages.PERFORM_CHANGE_STAGE_TAB]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_CHANGE_STAGE_TAB>): ModelsDealStages.IDealStagesState => {

        return {
            ...state,
            currentStageTab: action.payload.index,
        }
    },


    [actionsDealStages.NAVIGATE_TO_DEAL_STAGES]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.NAVIGATE_TO_DEAL_STAGES>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isReadOnlyStages: !state.currentDeal.isRoadMapShow,
            isStageListEnable: util.getStageListEnableFlag(state.currentDeal,action.payload.currentUser, action.payload.classifierDictionary),
        }
    },

    [actionsDealStages.NAVIGATE_BACK]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },

    [actionsDealStages.NAVIGATE_BACK_WITH_RESET_DATA]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },


    [actionsDealStages.NAVIGATE_TO_PREVIOUS_FORM]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },

    [actionsDealStages.PERFORM_SAVE_STAGE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },

    [actionsDealStages.NAVIGATE_TO_ADDITIONAL_FIELDS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.NAVIGATE_TO_ADDITIONAL_FIELDS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputStage: action.payload.inputStage
        }
    },

    [actionsDealStages.RESET_CHECK_FLAGS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isSetMemberMonitoring: false,
            isSetMainCreditOfficer: false,
            isSetMainClientManager: false,
            isSetCurrency: false,
            isSetClientStageChanges: false,
            isSetCloseReason: false,
            isSetPlannedFinishDate: false,
            isErrorEnable: false,
            errorMessage: '',
            inputCurrency: null,
            inputDealDate: null,
            inputMainClientManager: null,
            inputMainCreditOfficer: null,
            inputMemberMonitoring: null,
            inputRejection: defaultValues.Classifier,
            inputMemberList: null,
            receivingInputParametersError: null,
            saveDealAdditionalFieldsError: null,
            dealStagesTrackingUpdateError: null,
            saveDealStageError: null,
            dealStageTrackingError: null,
            dealPossibleStageListError: null,
            dealHistoryStageListError:  null,
            dealStagesUpdateError:   null,
            dealUpdateError: null,
            currentDealError: null,
        }
    },



    [actionsDealStages.CURRENT_STAGE_STATUS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CURRENT_STAGE_STATUS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            currentStageStatus:{
                stageStatus: action.payload.stageStatus,
                isDisabled: action.payload.isDisabled,
                isSelected: action.payload.isSelected,
                history: action.payload.history,
                stageText: action.payload.stageText
            },
        }
    },

    [actionsDealStages.SET_SAVE_STAGE_ENABLE_FLAG]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SET_SAVE_STAGE_ENABLE_FLAG>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isSaveStageEnable: action.payload.isSaveStageEnable
        }
    },

    [actionsDealStages.PERFORM_SET_REJECTION]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_SET_REJECTION>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isRejection: action.payload.isRejection
        }
    },
    [actionsDealStages.PERFORM_INPUT_DEAL_DATE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_DEAL_DATE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputDealDate: action.payload.value,
        }
    },
    [actionsDealStages.PERFORM_INPUT_EQUIVALENT_SUM_STRING]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_EQUIVALENT_SUM_STRING>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputEquivalentSumString: action.payload.value,
        }
    },
    [actionsDealStages.PERFORM_INPUT_EQUIVALENT_SUM]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_EQUIVALENT_SUM>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputEquivalentSum: action.payload.value,
        }
    },
    [actionsDealStages.NAVIGATE_TO_CURRENCY_PICKER_SCREEN]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isButtonPopoverOpenedMainClientManager: action.payload.isButtonPopoverOpenedMainClientManager
        }
    },
    [actionsDealStages.SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isButtonPopoverOpenedMainCreditOfficer: action.payload.isButtonPopoverOpenedMainCreditOfficer
        }
    },
    [actionsDealStages.SHOW_BUTTON_POPOVER_MEMBER_MONITORING]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SHOW_BUTTON_POPOVER_MEMBER_MONITORING>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isButtonPopoverOpenedMemberMonitoring: action.payload.isButtonPopoverOpenedMemberMonitoring
        }
    },
    [actionsDealStages.SHOW_DEAL_STAGES_SAVE_POPOVER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SHOW_DEAL_STAGES_SAVE_POPOVER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isDealStagesSavePopoverOpened: action.payload.isDealStagesSavePopoverOpened
        }
    },
    [actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputEmployeeSource: action.payload.employeeSource
        }
    },
    [actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputEmployeeSource: action.payload.employeeSource
        }
    },
    [actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputEmployeeSource: action.payload.employeeSource
        }
    },
    [actionsDealStages.PERFORM_INPUT_STRING]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_STRING>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputComment: action.payload.inputComment
        }
    },
    [actionsDealStages.PERFORM_INPUT_MAIN_CLIENT_MANAGER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_MAIN_CLIENT_MANAGER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputMainClientManager: action.payload.inputMainClientManager
        }
    },

    [actionsDealStages.PERFORM_INPUT_MAIN_CREDIT_OFFICER]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_MAIN_CREDIT_OFFICER>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputMainCreditOfficer: action.payload.inputMainCreditOfficer
        }
    },

    [actionsDealStages.PERFORM_INPUT_MEMBER_MONITORING]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_MEMBER_MONITORING>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputMemberMonitoring: action.payload.inputMemberMonitoring
        }
    },

    [actionsDealStages.PERFORM_INPUT_MEMBER_LIST]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_MEMBER_LIST>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputMemberList: action.payload.inputMemberList
        }
    },

    [actionsDealStages.NAVIGATE_TO_MEMBER_LIST_SCREEN]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },

    [actionsDealStages.PERFORM_INPUT_CURRENCY]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_INPUT_CURRENCY>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputCurrency: action.payload.value,
        }
    },
    [actionsDealStages.PERFORM_SELECT_REJECTION]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_SELECT_REJECTION>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputRejection: action.payload.inputRejection,
        }
    },
    [actionsDealStages.PERFORM_VALIDATE_FORM]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isSaveAdditionalFieldsEnable:action.payload.isSaveAdditionalFieldsEnable
        }
    },
    [actionsDealStages.SHOW_ERROR]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.SHOW_ERROR>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            isErrorEnable: action.payload.isErrorEnable,
            errorMessage: action.payload.errorMessage
        }
    },

    [actionsDealStages.PREPARE_STAGE_CLASSIFIER_LIST]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PREPARE_STAGE_CLASSIFIER_LIST>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            accessibleStageList: action.payload.accessibleStageList,
        }
    },

    [actionsDealStages.PREPARE_STAGE_INPUT_DATA]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            inputStage: state.currentDeal.phaseClassifier,
        }
    },

//----------------------------------------------------------------------------------------------------------------------

    [actionsDealStages.PERFORM_CHECKS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_CHECKS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            ...util.performDealStageChecks(state, action.payload.inputStage, action.payload.currentUserId)
        }
    },

//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            saveDealStageInProgress: true,
            saveDealStageError: null,
        }
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            saveDealStageInProgress: false,
            saveDealStageError: null,
        }
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_STAGE_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_SAVE_DEAL_STAGE_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            saveDealStageInProgress: false,
            saveDealStageError: action.payload.error
        }
    },

//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            saveDealAdditionalFieldsInProgress: true,
            saveDealAdditionalFieldsError: null,
        }
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            saveDealAdditionalFieldsInProgress: false,
            saveDealAdditionalFieldsError: null,
        }
    },
    [actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            saveDealAdditionalFieldsInProgress: false,
            saveDealAdditionalFieldsError: action.payload.error
        }
    },


//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            receivingInputParametersInProgress: true,
            receivingInputParametersError: null,
        }
    },
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            receivingInputParametersInProgress: false,
            receivingInputParametersError: null,
        }
    },
    [actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            receivingInputParametersInProgress: false,
            receivingInputParametersError: action.payload.error
        }
    },

    //----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_CURRENT_DEAL]: (state: ModelsDealStages.IDealStagesState,): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.CALL_GET_CURRENT_DEAL_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            currentDealFetching: true,
            currentDealError: null,
        }
    },
    [actionsDealStages.CALL_GET_CURRENT_DEAL_SUCCESS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_CURRENT_DEAL_SUCCESS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            currentDeal: action.payload.currentDeal,
            currentDealFetching: false,
            currentDealError: null,
        }
    },
    [actionsDealStages.CALL_GET_CURRENT_DEAL_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_CURRENT_DEAL_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            currentDealFetching: true,
            currentDealError: action.payload.error,
        }
    },


//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING]: (state: ModelsDealStages.IDealStagesState,): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStageTrackingFetching: true,
            dealStageTrackingError: null,
        }
    },
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_SUCCESS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_SUCCESS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,

            dealStageTracking: action.payload.dealStageTracking,
            dealStageTrackingFetching: false,
            dealStageTrackingError: null,
        }
    },
    [actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_DEAL_STAGE_TRACKING_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStageTrackingFetching: false,
            dealStageTrackingError: action.payload.error
        }
    },
//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_NEXT_STAGES]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.CALL_GET_NEXT_STAGES_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealPossibleStageListFetching: true,
            dealPossibleStageListError: null,
        }
    },
    [actionsDealStages.CALL_GET_NEXT_STAGES_SUCCESS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_NEXT_STAGES_SUCCESS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealPossibleStageList: action.payload.dealPossibleStageList,
            dealPossibleStageListFetching: false,
            dealPossibleStageListError: null,
        }
    },
    [actionsDealStages.CALL_GET_NEXT_STAGES_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_NEXT_STAGES_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealPossibleStageListFetching: false,
            dealPossibleStageListError: action.payload.error
        }
    },
//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_GET_HISTORY_STAGES]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
        }
    },
    [actionsDealStages.CALL_GET_HISTORY_STAGES_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealHistoryStageListFetching: true,
            dealHistoryStageListError: null,
        }
    },
    [actionsDealStages.CALL_GET_HISTORY_STAGES_SUCCESS]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_HISTORY_STAGES_SUCCESS>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealHistoryStageList: action.payload.dealHistoryStageList,
            dealHistoryStageListFetching: false,
            dealHistoryStageListError: null,
        }
    },
    [actionsDealStages.CALL_GET_HISTORY_STAGES_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_GET_HISTORY_STAGES_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealHistoryStageListFetching: false,
            dealHistoryStageListError: action.payload.error
        }
    },
//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_PUT_DEAL_UPDATE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid()
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealUpdateFetching: true,
            dealUpdateError: null,
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealUpdateFetching: false,
            dealUpdateError: null,
            operationUuid: null,
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_UPDATE_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_PUT_DEAL_UPDATE_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealUpdateFetching: false,
            dealUpdateError:  action.payload.error,
        }
    },

//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid()
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStagesUpdateFetching: true,
            dealStagesUpdateError: null,
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStagesUpdateFetching: false,
            dealStagesUpdateError: null,
            operationUuid: null,
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_PUT_DEAL_STAGES_UPDATE_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStagesUpdateFetching: false,
            dealStagesUpdateError:  action.payload.error,
        }
    },
//----------------------------------------------------------------------------------------------------------------------
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid()
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStagesTrackingUpdateFetching: true,
            dealStagesTrackingUpdateError: null,
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS]: (state: ModelsDealStages.IDealStagesState): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStagesTrackingUpdateFetching: false,
            dealStagesTrackingUpdateError: null,
            operationUuid: null,
        }
    },
    [actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE]: (state: ModelsDealStages.IDealStagesState, action: Action<actionsDealStages.CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE>): ModelsDealStages.IDealStagesState => {
        return {
            ...state,
            dealStagesTrackingUpdateFetching: false,
            dealStagesTrackingUpdateError:  action.payload.error,
        }
    },
//----------------------------------------------------------------------------------------------------------------------
}, ModelsDealStages.initialState.state)


export default reducerDealStages
