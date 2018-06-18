
import Action from '../models/Action'
import {Models} from 'mrmkmcib-crm'
import Error from '../models/Error'
import {Models as ModelsApp} from "mrmkmcib-app";
import {Enums} from "../Enums"


export const CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE = 'DEAL_STAGE_CONTAINER_CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE'
export const PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED = 'DEAL_STAGE_CONTAINER_PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED'
export const CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST = 'DEAL_STAGE_CONTAINER_CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST'
export const CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS = 'DEAL_STAGE_CONTAINER_CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS'
export const PERFORM_ROAD_MAP_SWITCH_SUCCESS = 'DEAL_STAGE_CONTAINER_PERFORM_ROAD_MAP_SWITCH_SUCCESS'
export const PERFORM_ROAD_MAP_SWITCH_FAILURE = 'DEAL_STAGE_CONTAINER_PERFORM_ROAD_MAP_SWITCH_FAILURE'
export const CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS = 'DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS'

export const NAVIGATE_TO_STAGE_DETAILS = 'DEAL_STAGE_CONTAINER_NAVIGATE_TO_STAGE_DETAILS'
export const SWAP_CONTEXT = 'DEAL_STAGE_CONTAINER_SWAP_CONTEXT'
export const PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE = 'DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE'
export const PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW = 'DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW'
export const PERFORM_CLIENT_ROADMAP_ACTIVATE = 'DEAL_STAGE_CONTAINER_PERFORM_CLIENT_ROADMAP_ACTIVATE'
export const PERFORM_CLIENT_ROADMAP_NEXT = 'DEAL_STAGE_CONTAINER_PERFORM_CLIENT_ROADMAP_NEXT'
export const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE = 'DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE'
export const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW = 'DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW'
export const PERFORM_CHANGE_STAGE_TAB = 'DEAL_STAGE_CONTAINER_PERFORM_CHANGE_STAGE_TAB'


export const NAVIGATE_BACK = 'DEAL_STAGES_CONTAINER_NAVIGATE_BACK'
export const NAVIGATE_BACK_WITH_RESET_DATA = 'DEAL_STAGES_CONTAINER_NAVIGATE_BACK_WITH_RESET_DATA'
export const NAVIGATE_TO_DEAL_STAGES = 'DEAL_STAGES_CONTAINER_NAVIGATE_TO_DEAL_STAGES'
export const PERFORM_RECEIVING_INPUT_PARAMETERS = 'DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS'
export const PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE = 'DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE'
export const PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS = 'DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS'
export const PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE = 'DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE'


export const PERFORM_SAVE_DEAL_STAGE = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE'
export const PERFORM_SAVE_DEAL_STAGE_EXECUTE = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE_EXECUTE'
export const PERFORM_SAVE_DEAL_STAGE_SUCCESS = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE_SUCCESS'
export const PERFORM_SAVE_DEAL_STAGE_FAILURE = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE_FAILURE'
export const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS'
export const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE'
export const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS'
export const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE'

export const SET_ACCESS_STAGES_FLAG = 'DEAL_STAGES_CONTAINER_SET_ACCESS_STAGES_FLAG'
export const CALL_GET_CURRENT_DEAL = 'DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL'
export const CALL_GET_CURRENT_DEAL_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL_EXECUTE'
export const CALL_GET_CURRENT_DEAL_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL_SUCCESS'
export const CALL_GET_CURRENT_DEAL_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL_FAILURE'
export const CALL_GET_DEAL_STAGE_TRACKING = 'DEAL_STAGES_CONTAINER_CALL_GET_STAGE_TRACKING'
export const CALL_GET_DEAL_STAGE_TRACKING_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_GET_DEAL_STAGE_TRACKING_EXECUTE'
export const CALL_GET_DEAL_STAGE_TRACKING_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_GET_DEAL_STAGE_TRACKING_SUCCESS'
export const CALL_GET_DEAL_STAGE_TRACKING_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_GET_DEAL_STAGE_TRACKING_FAILURE'
export const PERFORM_REFRESH_STAGES_SUCCESS = 'DEAL_STAGES_CONTAINER_PERFORM_REFRESH_STAGES_SUCCESS'
export const PERFORM_REFRESH_STAGES_FAILURE = 'DEAL_STAGES_CONTAINER_PERFORM_REFRESH_STAGES_FAILURE'
export const CALL_GET_NEXT_STAGES = 'DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES'
export const CALL_GET_NEXT_STAGES_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES_EXECUTE'
export const CALL_GET_NEXT_STAGES_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES_SUCCESS'
export const CALL_GET_NEXT_STAGES_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES_FAILURE'
export const CALL_GET_HISTORY_STAGES = 'DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES'
export const CALL_GET_HISTORY_STAGES_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES_EXECUTE'
export const CALL_GET_HISTORY_STAGES_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES_SUCCESS'
export const CALL_GET_HISTORY_STAGES_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES_FAILURE'
export const CALL_PUT_DEAL_STAGES_UPDATE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE'
export const CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE'
export const CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS'
export const CALL_PUT_DEAL_STAGES_UPDATE_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE_FAILURE'
export const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE'
export const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE'
export const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS'
export const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE'
export const CALL_PUT_DEAL_UPDATE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE'
export const CALL_PUT_DEAL_UPDATE_EXECUTE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE_EXECUTE'
export const CALL_PUT_DEAL_UPDATE_SUCCESS = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE_SUCCESS'
export const CALL_PUT_DEAL_UPDATE_FAILURE = 'DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE_FAILURE'
export const NAVIGATE_TO_PREVIOUS_FORM = 'DEAL_STAGES_CONTAINER_NAVIGATE_TO_PREVIOUS_FORM'
export const PERFORM_SAVE_STAGE = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_STAGE'
export const NAVIGATE_TO_ADDITIONAL_FIELDS = 'DEAL_STAGES_CONTAINER_NAVIGATE_TO_ADDITIONAL_FIELDS'
export const PERFORM_INPUT_DEAL_DATE = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_DEAL_DATE'
export const PERFORM_SELECT_REJECTION = 'DEAL_STAGES_CONTAINER_PERFORM_SELECT_REJECTION'
export const PREPARE_STAGE_CLASSIFIER_LIST = 'DEAL_STAGES_CONTAINER_PREPARE_STAGE_CLASSIFIER_LIST'
export const PREPARE_STAGE_INPUT_DATA = 'DEAL_STAGES_CONTAINER_PREPARE_STAGE_INPUT_DATA'
export const PERFORM_SET_REJECTION = 'DEAL_STAGES_CONTAINER_PERFORM_SET_REJECTION'
export const PERFORM_SAVE_RESULTS_CHECKS = 'DEAL_STAGES_CONTAINER_PERFORM_SAVE_RESULTS_CHECKS'
export const SHOW_ERROR = 'DEAL_STAGES_CONTAINER_SHOW_ERROR'
export const SET_SAVE_STAGE_ENABLE_FLAG = 'DEAL_STAGES_CONTAINER_SET_SAVE_STAGE_ENABLE_FLAG'
export const PERFORM_CHECKS = 'DEAL_STAGES_CONTAINER_PERFORM_CHECKS'
export const CURRENT_STAGE_STATUS = 'DEAL_STAGES_CONTAINER_CURRENT_STAGE_STATUS'

export const RESET_CHECK_FLAGS = 'DEAL_STAGES_CONTAINER_RESET_CHECK_FLAGS'
export const PERFORM_VALIDATE_FORM = 'DEAL_STAGES_CONTAINER_PERFORM_VALIDATE_FORM'
export const SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG = 'DEAL_STAGES_CONTAINER_SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG'
export const PERFORM_INPUT_EQUIVALENT_SUM_STRING = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_EQUIVALENT_SUM_STRING'
export const PERFORM_INPUT_EQUIVALENT_SUM = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_EQUIVALENT_SUM'
export const NAVIGATE_TO_CURRENCY_PICKER_SCREEN = 'DEAL_STAGES_CONTAINER_NAVIGATE_TO_CURRENCY_PICKER_SCREEN'
export const PERFORM_INPUT_CURRENCY = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_CURRENCY'
export const SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER = 'DEAL_STAGES_CONTAINER_SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER'
export const SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER = 'DEAL_STAGES_CONTAINER_SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER'
export const SHOW_BUTTON_POPOVER_MEMBER_MONITORING = 'DEAL_STAGES_CONTAINER_SHOW_BUTTON_POPOVER_MEMBER_MONITORING'
export const SHOW_DEAL_STAGES_SAVE_POPOVER = 'DEAL_STAGES_CONTAINER_SHOW_DEAL_STAGES_SAVE_POPOVER'

export const NAVIGATE_TO_MEMBER_LIST_SCREEN = 'DEAL_STAGES_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN'
export const PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER'
export const PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER'
export const PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING'
export const PERFORM_INPUT_MAIN_CLIENT_MANAGER = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_MAIN_CLIENT_MANAGER'
export const PERFORM_INPUT_MAIN_CREDIT_OFFICER = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_MAIN_CREDIT_OFFICER'
export const PERFORM_INPUT_MEMBER_MONITORING = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_MEMBER_MONITORING'
export const PERFORM_INPUT_MEMBER_LIST = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_MEMBER_LIST'
export const PERFORM_INPUT_STRING = 'DEAL_STAGES_CONTAINER_PERFORM_INPUT_STRING'

/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performChangeStageTab
 *
 * @param { number } index .
 */
export type PERFORM_CHANGE_STAGE_TAB = {index: number}
export const performChangeStageTab = (index: number): Action<PERFORM_CHANGE_STAGE_TAB> => ({
    type: PERFORM_CHANGE_STAGE_TAB,
    payload: {index:index}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapHelpShow
 */
export type PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW = {}
export const performPopoverClientRoadMapHelpShow = (): Action<PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW> => ({
    type: PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapHelpHide
 */
export type PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE = {}
export const performPopoverClientRoadMapHelpHide = (): Action<PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE> => ({
    type: PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealRoadMapSwitchUpdate
 */
export type CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE = {}
export const callPutDealRoadMapSwitchUpdate = (): Action<CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE> => ({
    type: CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealUpdateRoadMapStatus
 *
 * @param { boolean } enabled .
 */
export type CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS = {enabled: boolean}
export const callPutDealUpdateRoadMapStatus = (enable: boolean): Action<CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS> => ({
    type: CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS,
    payload: {
        enabled: enable
    }
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performRoadMapSwitchButtonDisabled
 *
 * @description включить или выключить активность переключения режима показа ДК
 *
 * @param { boolean } disabled .
 */
export type PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED = { disabled: boolean}
export const performRoadMapSwitchButtonDisabled = (disabled: boolean): Action<PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED> => ({
    type: PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED,
    payload: {disabled: disabled}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealRoadMapSwitchRequest
 */
export type CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST = {}
export const callPutDealRoadMapSwitchRequest = (): Action<CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST> => ({
    type: CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealRoadMapSwitchRequestSuccess
 */
export type CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS = {}
export const callPutDealRoadMapSwitchRequestSuccess = (): Action<CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS> => ({
    type: CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performSaveRoadMapSwitchSuccess
 */
export type PERFORM_ROAD_MAP_SWITCH_SUCCESS = {}
export const performSaveRoadMapSwitchSuccess = (): Action<PERFORM_ROAD_MAP_SWITCH_SUCCESS> => ({
    type: PERFORM_ROAD_MAP_SWITCH_SUCCESS,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performSaveRoadMapSwitchFailure
 *
 * @param { Error } error .
 */
export type PERFORM_ROAD_MAP_SWITCH_FAILURE = {error: Error}
export const performSaveRoadMapSwitchFailure = (error: Error): Action<PERFORM_ROAD_MAP_SWITCH_FAILURE> => ({
    type: PERFORM_ROAD_MAP_SWITCH_FAILURE,
    payload: {error: error}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performClientRoadMapActivate
 */
export type PERFORM_CLIENT_ROADMAP_ACTIVATE = {}
export const performClientRoadMapActivate = (): Action<PERFORM_CLIENT_ROADMAP_ACTIVATE> => ({
    type: PERFORM_CLIENT_ROADMAP_ACTIVATE,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performClientRoadMapNext
 */
export type PERFORM_CLIENT_ROADMAP_NEXT = {}
export const performClientRoadMapNext = (): Action<PERFORM_CLIENT_ROADMAP_NEXT> => ({
    type: PERFORM_CLIENT_ROADMAP_NEXT,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapShow
 */
export type PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW = {}
export const performPopoverClientRoadMapShow = (): Action<PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW> => ({
    type: PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapHide
 */
export type PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE = {}
export const performPopoverClientRoadMapHide = (): Action<PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE> => ({
    type: PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE,
    payload: {}
})
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * navigateToStageDetails
 *
 * @param { Models.DealStage } stage - стадия.
 * @param { number } activePosition - позиция активной стадии (меньше 0 - раньше текущей, 0 - текущая, больше 0 - больше текущей).
 */
export type NAVIGATE_TO_STAGE_DETAILS = {stage:Models.DealStage, activePosition: number}
export const navigateToStageDetails = (stage:Models.DealStage, activePosition: number): Action<NAVIGATE_TO_STAGE_DETAILS> => ({
    type: NAVIGATE_TO_STAGE_DETAILS,
    payload: {stage:stage, activePosition: activePosition}
})
/**
 * Thunk dispatched to set read only or accessible stages list.
 *
 */
export type SET_ACCESS_STAGES_FLAG = {enabled: boolean}
export const setAccessStagesFlag = (enabled: boolean): Action<SET_ACCESS_STAGES_FLAG> => ({
    type: SET_ACCESS_STAGES_FLAG,
    payload: { enabled: enabled}
})


/**
 * @param {Models.Deal} currentDeal сделка.
 * @param {Models.CrmStagesList} crmStages стадии сделки
 * @param isReadOnlyStages - включен или нет показ ДК клиенту.
 */
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * swapContext
 *
 * @param {Models.Deal} currentDeal - сделка.
 * @param {Models.CrmStagesList} crmStages - стадии сделки
 * @param {boolean} isReadOnlyStages - включен или нет показ ДК клиенту.
 * @param {Models.CustomerManaged} customer
 */
export type SWAP_CONTEXT = { currentDeal: Models.Deal, crmStages: Models.CrmStagesList,  isReadOnlyStages: boolean, customer: Models.CustomerManaged }
export const swapContext = ( currentDeal: Models.Deal, crmStages: Models.CrmStagesList,  isReadOnlyStages: boolean, customer: Models.CustomerManaged  ): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        currentDeal: currentDeal,
        crmStages: crmStages,
        isReadOnlyStages: isReadOnlyStages,
        customer:customer
    },
})
//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToDealStages
 */
export type NAVIGATE_TO_DEAL_STAGES = {currentUser: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary }
export const navigateToDealStages = (currentUser: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary): Action<NAVIGATE_TO_DEAL_STAGES> => ({
    type: NAVIGATE_TO_DEAL_STAGES,
    payload: {
        currentUser: currentUser,
        classifierDictionary: classifierDictionary
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateBack
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateBackWithResetData
 */
export type NAVIGATE_BACK_WITH_RESET_DATA = {}
export const navigateBackWithResetData = (): Action<NAVIGATE_BACK_WITH_RESET_DATA> => ({
    type: NAVIGATE_BACK_WITH_RESET_DATA,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToPreviousForm
 */
export type NAVIGATE_TO_PREVIOUS_FORM = {}
export const navigateToPreviousForm = (): Action<NAVIGATE_TO_PREVIOUS_FORM> => ({
    type: NAVIGATE_TO_PREVIOUS_FORM,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveStage
 */
export type PERFORM_SAVE_STAGE = {}
export const performSaveStage = (): Action<PERFORM_SAVE_STAGE> => ({
    type: PERFORM_SAVE_STAGE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToAdditionalFields
 *
 * @param { ModelsApp.Classifier } inputStage .
 */
export type NAVIGATE_TO_ADDITIONAL_FIELDS = {inputStage: ModelsApp.Classifier}
export const navigateToAdditionalFields = (inputStage: ModelsApp.Classifier): Action<NAVIGATE_TO_ADDITIONAL_FIELDS> => ({
    type: NAVIGATE_TO_ADDITIONAL_FIELDS,
    payload: {
        inputStage: inputStage
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * resetCheckFlags
 */
export type RESET_CHECK_FLAGS = {}
export const resetCheckFlags = (): Action<RESET_CHECK_FLAGS> => ({
    type: RESET_CHECK_FLAGS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * currentStageStatus
 *
 * @param { Enums.StageStatus } stageStatus .
 * @param { boolean } isDisabled .
 * @param { boolean } isSelected .
 * @param { Models.HistoryStage} history .
 * @param { string } stageText .
 */
export type CURRENT_STAGE_STATUS = {stageStatus: Enums.StageStatus, isDisabled: boolean, isSelected:boolean, history: Models.HistoryStage, stageText: string}
export const currentStageStatus = (stageStatus: Enums.StageStatus, isDisabled: boolean, isSelected:boolean, history: Models.HistoryStage, stageText: string): Action<CURRENT_STAGE_STATUS> => ({
    type: CURRENT_STAGE_STATUS,
    payload: {
        stageStatus: stageStatus,
        isDisabled: isDisabled,
        isSelected: isSelected,
        history: history,
        stageText: stageText,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * setSaveStageEnableFlag
 *
 * @param { Mboolean } isSaveStageEnable .
 */
export type SET_SAVE_STAGE_ENABLE_FLAG = {isSaveStageEnable: boolean}
export const setSaveStageEnableFlag = (isSaveStageEnable: boolean): Action<SET_SAVE_STAGE_ENABLE_FLAG> => ({
    type: SET_SAVE_STAGE_ENABLE_FLAG,
    payload: {
        isSaveStageEnable: isSaveStageEnable
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSetRejection
 *
 * @param { boolean } isRejection .
 */
export type PERFORM_SET_REJECTION = {isRejection: boolean}
export const performSetRejection = (isRejection: boolean): Action<PERFORM_SET_REJECTION> => ({
    type: PERFORM_SET_REJECTION,
    payload: {
        isRejection: isRejection
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputDealDate
 *
 * @param { Date | null } value .
 */
export type PERFORM_INPUT_DEAL_DATE = { value: Date | null }
export const performInputDealDate = (value: Date | null): Action<PERFORM_INPUT_DEAL_DATE> => ({
    type: PERFORM_INPUT_DEAL_DATE,
    payload: {
        value: value,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEquivalentSumString
 *
 * @param { string | null } value .
 */
export type PERFORM_INPUT_EQUIVALENT_SUM_STRING = { value: string | null }
export const performInputEquivalentSumString = (value: string | null): Action<PERFORM_INPUT_EQUIVALENT_SUM_STRING> => ({
    type: PERFORM_INPUT_EQUIVALENT_SUM_STRING,
    payload: {
        value: value,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEquivalentSum
 *
 * @param { number | null } value .
 */
export type PERFORM_INPUT_EQUIVALENT_SUM = { value: number | null }
export const performInputEquivalentSum = (value: number | null): Action<PERFORM_INPUT_EQUIVALENT_SUM> => ({
    type: PERFORM_INPUT_EQUIVALENT_SUM,
    payload: {
        value: value,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToCurrencyPickerScreen
 */
export type NAVIGATE_TO_CURRENCY_PICKER_SCREEN = {}
export const navigateToCurrencyPickerScreen = (): Action<NAVIGATE_TO_CURRENCY_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CURRENCY_PICKER_SCREEN,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showButtonPopoverMainClientManager
 *
 * @param { boolean } isButtonPopoverOpenedMainClientManager .
 */
export type SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER = {isButtonPopoverOpenedMainClientManager: boolean}
export const showButtonPopoverMainClientManager = (isButtonPopoverOpenedMainClientManager: boolean): Action<SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER> => ({
    type: SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER,
    payload: {
        isButtonPopoverOpenedMainClientManager:isButtonPopoverOpenedMainClientManager
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showButtonPopoverMainCreditOfficer
 *
 * @param { boolean } isButtonPopoverOpenedMainCreditOfficer .
 */
export type SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER = {isButtonPopoverOpenedMainCreditOfficer: boolean}
export const showButtonPopoverMainCreditOfficer = (isButtonPopoverOpenedMainCreditOfficer: boolean): Action<SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER> => ({
    type: SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER,
    payload: {
        isButtonPopoverOpenedMainCreditOfficer:isButtonPopoverOpenedMainCreditOfficer
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showButtonPopoverMemberMonitoring
 *
 * @param { boolean } isButtonPopoverOpenedMemberMonitoring .
 */
export type SHOW_BUTTON_POPOVER_MEMBER_MONITORING = {isButtonPopoverOpenedMemberMonitoring: boolean}
export const showButtonPopoverMemberMonitoring = (isButtonPopoverOpenedMemberMonitoring: boolean): Action<SHOW_BUTTON_POPOVER_MEMBER_MONITORING> => ({
    type: SHOW_BUTTON_POPOVER_MEMBER_MONITORING,
    payload: {
        isButtonPopoverOpenedMemberMonitoring:isButtonPopoverOpenedMemberMonitoring
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showDealStagesSavePopover
 *
 * @param { boolean } isDealStagesSavePopoverOpened .
 */
export type SHOW_DEAL_STAGES_SAVE_POPOVER = {isDealStagesSavePopoverOpened: boolean}
export const showDealStagesSavePopover = (isDealStagesSavePopoverOpened: boolean): Action<SHOW_DEAL_STAGES_SAVE_POPOVER> => ({
    type: SHOW_DEAL_STAGES_SAVE_POPOVER,
    payload: {
        isDealStagesSavePopoverOpened:isDealStagesSavePopoverOpened
    }
})

/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEmployeeSourceMainClientManager
 *
 * @param { Enums.MemberListEmployeeSource } employeeSource .
 */
export type PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER = { employeeSource: Enums.MemberListEmployeeSource }
export const performInputEmployeeSourceMainClientManager = (employeeSource: Enums.MemberListEmployeeSource): Action<PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER> => ({
    type: PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER,
    payload: {
        employeeSource: employeeSource
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEmployeeSourceMainCreditOfficer
 *
 * @param { Enums.MemberListEmployeeSource } employeeSource .
 */
export type PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER = { employeeSource: Enums.MemberListEmployeeSource }
export const performInputEmployeeSourceMainCreditOfficer = (employeeSource: Enums.MemberListEmployeeSource): Action<PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER> => ({
    type: PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER,
    payload: {
        employeeSource: employeeSource
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEmployeeSourceMemberMonitoring
 *
 * @param { Enums.MemberListEmployeeSource } employeeSource .
 */
export type PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING = { employeeSource: Enums.MemberListEmployeeSource }
export const performInputEmployeeSourceMemberMonitoring = (employeeSource: Enums.MemberListEmployeeSource): Action<PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING> => ({
    type: PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING,
    payload: {
        employeeSource: employeeSource
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputComment
 *
 * @param { string } inputComment .
 */
export type PERFORM_INPUT_STRING = { inputComment: string }
export const performInputComment = (inputComment: string): Action<PERFORM_INPUT_STRING> => ({
    type: PERFORM_INPUT_STRING,
    payload: {
        inputComment: inputComment
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMainClientManager
 *
 * @param { ModelsApp.Employee } inputMainClientManager .
 */
export type PERFORM_INPUT_MAIN_CLIENT_MANAGER = { inputMainClientManager: ModelsApp.Employee }
export const performInputMainClientManager = (inputMainClientManager:  ModelsApp.Employee): Action<PERFORM_INPUT_MAIN_CLIENT_MANAGER> => ({
    type: PERFORM_INPUT_MAIN_CLIENT_MANAGER,
    payload: {
        inputMainClientManager: inputMainClientManager
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMainCreditOfficer
 *
 * @param { ModelsApp.Employee } inputMainCreditOfficer .
 */
export type PERFORM_INPUT_MAIN_CREDIT_OFFICER = { inputMainCreditOfficer: ModelsApp.Employee }
export const performInputMainCreditOfficer = (inputMainCreditOfficer:  ModelsApp.Employee): Action<PERFORM_INPUT_MAIN_CREDIT_OFFICER> => ({
    type: PERFORM_INPUT_MAIN_CREDIT_OFFICER,
    payload: {
        inputMainCreditOfficer: inputMainCreditOfficer
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMemberMonitoring
 *
 * @param { ModelsApp.Employee } inputMemberMonitoring .
 */
export type PERFORM_INPUT_MEMBER_MONITORING = { inputMemberMonitoring: ModelsApp.Employee }
export const performInputMemberMonitoring = (inputMemberMonitoring:  ModelsApp.Employee): Action<PERFORM_INPUT_MEMBER_MONITORING> => ({
    type: PERFORM_INPUT_MEMBER_MONITORING,
    payload: {
        inputMemberMonitoring: inputMemberMonitoring
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMemberList
 *
 * @param { Models.MemberList } inputMemberList .
 */
export type PERFORM_INPUT_MEMBER_LIST = { inputMemberList: Models.MemberList }
export const performInputMemberList = (inputMemberList: Models.MemberList): Action<PERFORM_INPUT_MEMBER_LIST> => ({
    type: PERFORM_INPUT_MEMBER_LIST,
    payload: {
        inputMemberList: inputMemberList
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToMemberListScreen
 */
export type NAVIGATE_TO_MEMBER_LIST_SCREEN = {}
export const navigateToMemberListScreen = (): Action<NAVIGATE_TO_MEMBER_LIST_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputCurrency
 *
 * @param { ModelsApp.Classifier } value .
 */
export type PERFORM_INPUT_CURRENCY = { value: ModelsApp.Classifier }
export const performInputCurrency = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_CURRENCY> => ({
    type: PERFORM_INPUT_CURRENCY,
    payload: {
        value: value,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSelectRejection
 *
 * @param { ModelsApp.Classifier } inputRejection .
 */
export type PERFORM_SELECT_REJECTION = { inputRejection: ModelsApp.Classifier }
export const performSelectRejection = (inputRejection: ModelsApp.Classifier): Action<PERFORM_SELECT_REJECTION> => ({
    type: PERFORM_SELECT_REJECTION,
    payload: {
        inputRejection: inputRejection,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performValidateForm
 */
export type PERFORM_VALIDATE_FORM = {}
export const performValidateForm = (): Action<PERFORM_VALIDATE_FORM> => ({
    type: PERFORM_VALIDATE_FORM,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * setSaveAdditionalFildsEnableFlag
 *
 * @param { boolean } isSaveAdditionalFieldsEnable .
 */
export type SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG = {isSaveAdditionalFieldsEnable: boolean}
export const setSaveAdditionalFildsEnableFlag = (isSaveAdditionalFieldsEnable: boolean): Action<SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG> => ({
    type: SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG,
    payload: {
        isSaveAdditionalFieldsEnable:isSaveAdditionalFieldsEnable
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showError
 *
 * @param { boolean } isErrorEnable .
 *
 * @param { string } errorMessage .
 */
export type SHOW_ERROR = { isErrorEnable: boolean, errorMessage: string }
export const showError = (isErrorEnable: boolean, errorMessage: string): Action<SHOW_ERROR> => ({
    type: SHOW_ERROR,
    payload: {
        isErrorEnable: isErrorEnable,
        errorMessage: errorMessage,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * prepareStageClassifierList
 *
 * @param { ModelsApp.ClassifierList } accessibleStageList .
 */
export type PREPARE_STAGE_CLASSIFIER_LIST = { accessibleStageList: ModelsApp.ClassifierList }
export const prepareStageClassifierList = (accessibleStageList: ModelsApp.ClassifierList): Action<PREPARE_STAGE_CLASSIFIER_LIST> => ({
    type: PREPARE_STAGE_CLASSIFIER_LIST,
    payload: {
        accessibleStageList: accessibleStageList,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * prepareStageInputData
 */
export type PREPARE_STAGE_INPUT_DATA = {}
export const prepareStageInputData = (): Action<PREPARE_STAGE_INPUT_DATA> => ({
    type: PREPARE_STAGE_INPUT_DATA,
    payload: {}
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performChecks
 *
 * @param { ModelsApp.Classifier } inputStage .
 * @param { string } currentUserId .
 */
export type PERFORM_CHECKS = {inputStage: ModelsApp.Classifier,currentUserId: string}
export const performChecks = (inputStage: ModelsApp.Classifier,currentUserId: string): Action<PERFORM_CHECKS> => ({
    type: PERFORM_CHECKS,
    payload: {
        inputStage:inputStage,
        currentUserId:currentUserId
    }
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStage
 */
export type PERFORM_SAVE_DEAL_STAGE = {}
export const performSaveDealStage = (): Action<PERFORM_SAVE_DEAL_STAGE> => ({
    type: PERFORM_SAVE_DEAL_STAGE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStageExecute
 */
export type PERFORM_SAVE_DEAL_STAGE_EXECUTE = {}
export const performSaveDealStageExecute = (): Action<PERFORM_SAVE_DEAL_STAGE_EXECUTE> => ({
    type: PERFORM_SAVE_DEAL_STAGE_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStageSuccess
 */
export type PERFORM_SAVE_DEAL_STAGE_SUCCESS = {}
export const performSaveDealStageSuccess = (): Action<PERFORM_SAVE_DEAL_STAGE_SUCCESS> => ({
    type: PERFORM_SAVE_DEAL_STAGE_SUCCESS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStageFailure
 *
 * @param { Error } error .
 */
export type PERFORM_SAVE_DEAL_STAGE_FAILURE = { error: Error }
export const performSaveDealStageFailure = ( error: Error ): Action<PERFORM_SAVE_DEAL_STAGE_FAILURE> => ({
    type: PERFORM_SAVE_DEAL_STAGE_FAILURE,
    payload: {
        error: error
    }
})
//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFields
 */
export type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS = {}
export const performSaveDealAdditionalFields = (): Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS> => ({
    type: PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFieldsExecute
 */
export type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE = {}
export const performSaveDealAdditionalFieldsExecute = (): Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE> => ({
    type: PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFieldsSuccess
 */
export type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS = {}
export const performSaveDealAdditionalFieldsSuccess = (): Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS> => ({
    type: PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFieldsFailure
 *
 * @param { Error } error .
 */
export type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE = { error: Error }
export const performSaveDealAdditionalFieldsFailure = ( error: Error ): Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE> => ({
    type: PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE,
    payload: {
        error: error
    }
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParameters
 */
export type PERFORM_RECEIVING_INPUT_PARAMETERS = {}
export const performReceivingInputParameters = (): Action<PERFORM_RECEIVING_INPUT_PARAMETERS> => ({
    type: PERFORM_RECEIVING_INPUT_PARAMETERS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParametersExecute
 */
export type PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE = {}
export const performReceivingInputParametersExecute = (): Action<PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE> => ({
    type: PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParametersSuccess
 */
export type PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS = {}
export const performReceivingInputParametersSuccess = (): Action<PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS> => ({
    type: PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParametersFailure
 *
 * @param { Error } error .
 */
export type PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE = { error: Error }
export const performReceivingInputParametersFailure = ( error: Error ): Action<PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE> => ({
    type: PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE,
    payload: {
        error: error
    }
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDeal
 */
export type CALL_GET_CURRENT_DEAL = {}
export const callGetCurrentDeal = (): Action<CALL_GET_CURRENT_DEAL> => ({
    type: CALL_GET_CURRENT_DEAL,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDealExecute
 */
export type CALL_GET_CURRENT_DEAL_EXECUTE = {}
export const callGetCurrentDealExecute = (): Action<CALL_GET_CURRENT_DEAL_EXECUTE> => ({
    type: CALL_GET_CURRENT_DEAL_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDealSuccess
 *
 * @param { Models.Deal } currentDeal .
 */
export type CALL_GET_CURRENT_DEAL_SUCCESS = {currentDeal: Models.Deal}
export const callGetCurrentDealSuccess = (currentDeal: Models.Deal): Action<CALL_GET_CURRENT_DEAL_SUCCESS> => ({
    type: CALL_GET_CURRENT_DEAL_SUCCESS,
    payload: {
        currentDeal: currentDeal
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDealFailure
 *
 * @param { Error } error .
 */
export type CALL_GET_CURRENT_DEAL_FAILURE = { error: Error }
export const callGetCurrentDealFailure = ( error: Error ): Action<CALL_GET_CURRENT_DEAL_FAILURE> => ({
    type: CALL_GET_CURRENT_DEAL_FAILURE,
    payload: {
        error: error
    }
})
//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTracking
 */
export type CALL_GET_DEAL_STAGE_TRACKING = {}
export const callGetDealStageTracking = (): Action<CALL_GET_DEAL_STAGE_TRACKING> => ({
    type: CALL_GET_DEAL_STAGE_TRACKING,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTrackingExecute
 */
export type CALL_GET_DEAL_STAGE_TRACKING_EXECUTE = {}
export const callGetDealStageTrackingExecute = (): Action<CALL_GET_DEAL_STAGE_TRACKING_EXECUTE> => ({
    type: CALL_GET_DEAL_STAGE_TRACKING_EXECUTE,
    payload: {}
})


/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performRefreshStagesSuccess
 *
 * @param { Array<Models.DealStage> } stageList .
 */
export type PERFORM_REFRESH_STAGES_SUCCESS = {stageList: Array<Models.DealStage>}
export const performRefreshStagesSuccess = (stageList: Array<Models.DealStage>): Action<PERFORM_REFRESH_STAGES_SUCCESS> => ({
    type: PERFORM_REFRESH_STAGES_SUCCESS,
    payload: {
        stageList,
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performRefreshStagesFailure
 *
 * @param { Error } error .
 */
export type PERFORM_REFRESH_STAGES_FAILURE = { error: Error }
export const performRefreshStagesFailure = ( error: Error ): Action<PERFORM_REFRESH_STAGES_FAILURE> => ({
    type: PERFORM_REFRESH_STAGES_FAILURE,
    payload: {
        error: error
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTrackingSuccess
 *
 * @param { Models.DealStageTracking } dealStageTracking .
 */
export type CALL_GET_DEAL_STAGE_TRACKING_SUCCESS = {dealStageTracking: Models.DealStageTracking}
export const callGetDealStageTrackingSuccess = (dealStageTracking: Models.DealStageTracking): Action<CALL_GET_DEAL_STAGE_TRACKING_SUCCESS> => ({
    type: CALL_GET_DEAL_STAGE_TRACKING_SUCCESS,
    payload: {
        dealStageTracking: dealStageTracking
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTrackingFailure
 *
 * @param { Error } error .
 */
export type CALL_GET_DEAL_STAGE_TRACKING_FAILURE = { error: Error }
export const callGetDealStageTrackingFailure = ( error: Error ): Action<CALL_GET_DEAL_STAGE_TRACKING_FAILURE> => ({
    type: CALL_GET_DEAL_STAGE_TRACKING_FAILURE,
    payload: {
        error: error
    }
})
//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStages
 */
export type CALL_GET_NEXT_STAGES = {}
export const callGetNextStages = (): Action<CALL_GET_NEXT_STAGES> => ({
    type: CALL_GET_NEXT_STAGES,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStagesExecute
 */
export type CALL_GET_NEXT_STAGES_EXECUTE = {}
export const callGetNextStagesExecute = (): Action<CALL_GET_NEXT_STAGES_EXECUTE> => ({
    type: CALL_GET_NEXT_STAGES_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStagesSuccess
 *
 * @param { Models.DealPossibleStageList } dealPossibleStageList .
 */
export type CALL_GET_NEXT_STAGES_SUCCESS = {dealPossibleStageList: Models.DealPossibleStageList}
export const callGetNextStagesSuccess = (dealPossibleStageList: Models.DealPossibleStageList): Action<CALL_GET_NEXT_STAGES_SUCCESS> => ({
    type: CALL_GET_NEXT_STAGES_SUCCESS,
    payload: {
        dealPossibleStageList: dealPossibleStageList
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStagesFailure
 *
 * @param { Error } error .
 */
export type CALL_GET_NEXT_STAGES_FAILURE = { error: Error }
export const callGetNextStagesFailure = ( error: Error ): Action<CALL_GET_NEXT_STAGES_FAILURE> => ({
    type: CALL_GET_NEXT_STAGES_FAILURE,
    payload: {
        error: error
    }
})
//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStages
 */
export type CALL_GET_HISTORY_STAGES = {}
export const callGetHistoryStages = (): Action<CALL_GET_HISTORY_STAGES> => ({
    type: CALL_GET_HISTORY_STAGES,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStagesExecute
 */
export type CALL_GET_HISTORY_STAGES_EXECUTE = {}
export const callGetHistoryStagesExecute = (): Action<CALL_GET_HISTORY_STAGES_EXECUTE> => ({
    type: CALL_GET_HISTORY_STAGES_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStagesSuccess
 *
 * @param { Models.DealHistoryStageList } dealHistoryStageList .
 */
export type CALL_GET_HISTORY_STAGES_SUCCESS = {dealHistoryStageList: Models.DealHistoryStageList}
export const callGetHistoryStagesSuccess = (dealHistoryStageList: Models.DealHistoryStageList): Action<CALL_GET_HISTORY_STAGES_SUCCESS> => ({
    type: CALL_GET_HISTORY_STAGES_SUCCESS,
    payload: {
        dealHistoryStageList: dealHistoryStageList
    }
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStagesFailure
 *
 * @param { Error } error .
 */
export type CALL_GET_HISTORY_STAGES_FAILURE = { error: Error }
export const callGetHistoryStagesFailure = ( error: Error ): Action<CALL_GET_HISTORY_STAGES_FAILURE> => ({
    type: CALL_GET_HISTORY_STAGES_FAILURE,
    payload: {
        error: error
    }
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdate
 */
export type CALL_PUT_DEAL_UPDATE = {}
export const callPutDealUpdate = (): Action<CALL_PUT_DEAL_UPDATE> => ({
    type: CALL_PUT_DEAL_UPDATE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdateExecute
 */
export type CALL_PUT_DEAL_UPDATE_EXECUTE = {}
export const callPutDealUpdateExecute = (): Action<CALL_PUT_DEAL_UPDATE_EXECUTE> => ({
    type: CALL_PUT_DEAL_UPDATE_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdateSuccess
 */
export type CALL_PUT_DEAL_UPDATE_SUCCESS = {}
export const callPutDealUpdateSuccess = (): Action<CALL_PUT_DEAL_UPDATE_SUCCESS> => ({
    type: CALL_PUT_DEAL_UPDATE_SUCCESS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdateFailure
 *
 * @param { Error } error .
 */
export type CALL_PUT_DEAL_UPDATE_FAILURE = { error: Error }
export const callPutDealUpdateFailure = ( error: Error ): Action<CALL_PUT_DEAL_UPDATE_FAILURE> => ({
    type: CALL_PUT_DEAL_UPDATE_FAILURE,
    payload: {
        error: error
    }
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdate
 */
export type CALL_PUT_DEAL_STAGES_UPDATE = {}
export const callPutDealStagesUpdate = (): Action<CALL_PUT_DEAL_STAGES_UPDATE> => ({
    type: CALL_PUT_DEAL_STAGES_UPDATE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdateExecute
 */
export type CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE = {}
export const callPutDealStagesUpdateExecute = (): Action<CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE> => ({
    type: CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdateSuccess
 */
export type CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS = {}
export const callPutDealStagesUpdateSuccess = (): Action<CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS> => ({
    type: CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdateFailure
 *
 * @param { Error } error .
 */
export type CALL_PUT_DEAL_STAGES_UPDATE_FAILURE = { error: Error }
export const callPutDealStagesUpdateFailure = ( error: Error ): Action<CALL_PUT_DEAL_STAGES_UPDATE_FAILURE> => ({
    type: CALL_PUT_DEAL_STAGES_UPDATE_FAILURE,
    payload: {
        error: error
    }
})

//----------------------------------------------------------------------------------------------------------------------
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdate
 */
export type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE = {}
export const callPutDealStageTrackingUpdate = (): Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE> => ({
    type: CALL_PUT_DEAL_STAGES_TRACKING_UPDATE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdateExecute
 */
export type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE = {}
export const callPutDealStageTrackingUpdateExecute = (): Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE> => ({
    type: CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdateSuccess
 */
export type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS = {}
export const callPutDealStageTrackingUpdateSuccess = (): Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS> => ({
    type: CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS,
    payload: {}
})
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdateFailure
 *
 * @param { Error } error .
 */
export type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE = { error: Error }
export const callPutDealStageTrackingUpdateFailure = ( error: Error ): Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE> => ({
    type: CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE,
    payload: {
        error: error
    }
})