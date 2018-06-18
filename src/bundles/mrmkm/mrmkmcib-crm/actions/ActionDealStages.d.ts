import Action from '../models/Action';
import { Models } from 'mrmkmcib-crm';
import Error from '../models/Error';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from "../Enums";
export declare const CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE = "DEAL_STAGE_CONTAINER_CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE";
export declare const PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED = "DEAL_STAGE_CONTAINER_PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED";
export declare const CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST = "DEAL_STAGE_CONTAINER_CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST";
export declare const CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS = "DEAL_STAGE_CONTAINER_CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS";
export declare const PERFORM_ROAD_MAP_SWITCH_SUCCESS = "DEAL_STAGE_CONTAINER_PERFORM_ROAD_MAP_SWITCH_SUCCESS";
export declare const PERFORM_ROAD_MAP_SWITCH_FAILURE = "DEAL_STAGE_CONTAINER_PERFORM_ROAD_MAP_SWITCH_FAILURE";
export declare const CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS = "DEAL_EDITOR_CONTAINER_CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS";
export declare const NAVIGATE_TO_STAGE_DETAILS = "DEAL_STAGE_CONTAINER_NAVIGATE_TO_STAGE_DETAILS";
export declare const SWAP_CONTEXT = "DEAL_STAGE_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE = "DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE";
export declare const PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW = "DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW";
export declare const PERFORM_CLIENT_ROADMAP_ACTIVATE = "DEAL_STAGE_CONTAINER_PERFORM_CLIENT_ROADMAP_ACTIVATE";
export declare const PERFORM_CLIENT_ROADMAP_NEXT = "DEAL_STAGE_CONTAINER_PERFORM_CLIENT_ROADMAP_NEXT";
export declare const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE = "DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE";
export declare const PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW = "DEAL_STAGE_CONTAINER_PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW";
export declare const PERFORM_CHANGE_STAGE_TAB = "DEAL_STAGE_CONTAINER_PERFORM_CHANGE_STAGE_TAB";
export declare const NAVIGATE_BACK = "DEAL_STAGES_CONTAINER_NAVIGATE_BACK";
export declare const NAVIGATE_BACK_WITH_RESET_DATA = "DEAL_STAGES_CONTAINER_NAVIGATE_BACK_WITH_RESET_DATA";
export declare const NAVIGATE_TO_DEAL_STAGES = "DEAL_STAGES_CONTAINER_NAVIGATE_TO_DEAL_STAGES";
export declare const PERFORM_RECEIVING_INPUT_PARAMETERS = "DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS";
export declare const PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE = "DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE";
export declare const PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS = "DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS";
export declare const PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE = "DEAL_STAGES_CONTAINER_PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE";
export declare const PERFORM_SAVE_DEAL_STAGE = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE";
export declare const PERFORM_SAVE_DEAL_STAGE_EXECUTE = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE_EXECUTE";
export declare const PERFORM_SAVE_DEAL_STAGE_SUCCESS = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE_SUCCESS";
export declare const PERFORM_SAVE_DEAL_STAGE_FAILURE = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_STAGE_FAILURE";
export declare const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS";
export declare const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE";
export declare const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS";
export declare const PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE";
export declare const SET_ACCESS_STAGES_FLAG = "DEAL_STAGES_CONTAINER_SET_ACCESS_STAGES_FLAG";
export declare const CALL_GET_CURRENT_DEAL = "DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL";
export declare const CALL_GET_CURRENT_DEAL_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL_EXECUTE";
export declare const CALL_GET_CURRENT_DEAL_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL_SUCCESS";
export declare const CALL_GET_CURRENT_DEAL_FAILURE = "DEAL_STAGES_CONTAINER_CALL_GET_CURRENT_DEAL_FAILURE";
export declare const CALL_GET_DEAL_STAGE_TRACKING = "DEAL_STAGES_CONTAINER_CALL_GET_STAGE_TRACKING";
export declare const CALL_GET_DEAL_STAGE_TRACKING_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_GET_DEAL_STAGE_TRACKING_EXECUTE";
export declare const CALL_GET_DEAL_STAGE_TRACKING_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_GET_DEAL_STAGE_TRACKING_SUCCESS";
export declare const CALL_GET_DEAL_STAGE_TRACKING_FAILURE = "DEAL_STAGES_CONTAINER_CALL_GET_DEAL_STAGE_TRACKING_FAILURE";
export declare const PERFORM_REFRESH_STAGES_SUCCESS = "DEAL_STAGES_CONTAINER_PERFORM_REFRESH_STAGES_SUCCESS";
export declare const PERFORM_REFRESH_STAGES_FAILURE = "DEAL_STAGES_CONTAINER_PERFORM_REFRESH_STAGES_FAILURE";
export declare const CALL_GET_NEXT_STAGES = "DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES";
export declare const CALL_GET_NEXT_STAGES_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES_EXECUTE";
export declare const CALL_GET_NEXT_STAGES_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES_SUCCESS";
export declare const CALL_GET_NEXT_STAGES_FAILURE = "DEAL_STAGES_CONTAINER_CALL_GET_NEXT_STAGES_FAILURE";
export declare const CALL_GET_HISTORY_STAGES = "DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES";
export declare const CALL_GET_HISTORY_STAGES_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES_EXECUTE";
export declare const CALL_GET_HISTORY_STAGES_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES_SUCCESS";
export declare const CALL_GET_HISTORY_STAGES_FAILURE = "DEAL_STAGES_CONTAINER_CALL_GET_HISTORY_STAGES_FAILURE";
export declare const CALL_PUT_DEAL_STAGES_UPDATE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE";
export declare const CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE";
export declare const CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS";
export declare const CALL_PUT_DEAL_STAGES_UPDATE_FAILURE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_UPDATE_FAILURE";
export declare const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE";
export declare const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE";
export declare const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS";
export declare const CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE";
export declare const CALL_PUT_DEAL_UPDATE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE";
export declare const CALL_PUT_DEAL_UPDATE_EXECUTE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE_EXECUTE";
export declare const CALL_PUT_DEAL_UPDATE_SUCCESS = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE_SUCCESS";
export declare const CALL_PUT_DEAL_UPDATE_FAILURE = "DEAL_STAGES_CONTAINER_CALL_PUT_DEAL_UPDATE_FAILURE";
export declare const NAVIGATE_TO_PREVIOUS_FORM = "DEAL_STAGES_CONTAINER_NAVIGATE_TO_PREVIOUS_FORM";
export declare const PERFORM_SAVE_STAGE = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_STAGE";
export declare const NAVIGATE_TO_ADDITIONAL_FIELDS = "DEAL_STAGES_CONTAINER_NAVIGATE_TO_ADDITIONAL_FIELDS";
export declare const PERFORM_INPUT_DEAL_DATE = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_DEAL_DATE";
export declare const PERFORM_SELECT_REJECTION = "DEAL_STAGES_CONTAINER_PERFORM_SELECT_REJECTION";
export declare const PREPARE_STAGE_CLASSIFIER_LIST = "DEAL_STAGES_CONTAINER_PREPARE_STAGE_CLASSIFIER_LIST";
export declare const PREPARE_STAGE_INPUT_DATA = "DEAL_STAGES_CONTAINER_PREPARE_STAGE_INPUT_DATA";
export declare const PERFORM_SET_REJECTION = "DEAL_STAGES_CONTAINER_PERFORM_SET_REJECTION";
export declare const PERFORM_SAVE_RESULTS_CHECKS = "DEAL_STAGES_CONTAINER_PERFORM_SAVE_RESULTS_CHECKS";
export declare const SHOW_ERROR = "DEAL_STAGES_CONTAINER_SHOW_ERROR";
export declare const SET_SAVE_STAGE_ENABLE_FLAG = "DEAL_STAGES_CONTAINER_SET_SAVE_STAGE_ENABLE_FLAG";
export declare const PERFORM_CHECKS = "DEAL_STAGES_CONTAINER_PERFORM_CHECKS";
export declare const CURRENT_STAGE_STATUS = "DEAL_STAGES_CONTAINER_CURRENT_STAGE_STATUS";
export declare const RESET_CHECK_FLAGS = "DEAL_STAGES_CONTAINER_RESET_CHECK_FLAGS";
export declare const PERFORM_VALIDATE_FORM = "DEAL_STAGES_CONTAINER_PERFORM_VALIDATE_FORM";
export declare const SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG = "DEAL_STAGES_CONTAINER_SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG";
export declare const PERFORM_INPUT_EQUIVALENT_SUM_STRING = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_EQUIVALENT_SUM_STRING";
export declare const PERFORM_INPUT_EQUIVALENT_SUM = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_EQUIVALENT_SUM";
export declare const NAVIGATE_TO_CURRENCY_PICKER_SCREEN = "DEAL_STAGES_CONTAINER_NAVIGATE_TO_CURRENCY_PICKER_SCREEN";
export declare const PERFORM_INPUT_CURRENCY = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_CURRENCY";
export declare const SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER = "DEAL_STAGES_CONTAINER_SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER";
export declare const SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER = "DEAL_STAGES_CONTAINER_SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER";
export declare const SHOW_BUTTON_POPOVER_MEMBER_MONITORING = "DEAL_STAGES_CONTAINER_SHOW_BUTTON_POPOVER_MEMBER_MONITORING";
export declare const SHOW_DEAL_STAGES_SAVE_POPOVER = "DEAL_STAGES_CONTAINER_SHOW_DEAL_STAGES_SAVE_POPOVER";
export declare const NAVIGATE_TO_MEMBER_LIST_SCREEN = "DEAL_STAGES_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN";
export declare const PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER";
export declare const PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER";
export declare const PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING";
export declare const PERFORM_INPUT_MAIN_CLIENT_MANAGER = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_MAIN_CLIENT_MANAGER";
export declare const PERFORM_INPUT_MAIN_CREDIT_OFFICER = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_MAIN_CREDIT_OFFICER";
export declare const PERFORM_INPUT_MEMBER_MONITORING = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_MEMBER_MONITORING";
export declare const PERFORM_INPUT_MEMBER_LIST = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_MEMBER_LIST";
export declare const PERFORM_INPUT_STRING = "DEAL_STAGES_CONTAINER_PERFORM_INPUT_STRING";
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performChangeStageTab
 *
 * @param { number } index .
 */
export declare type PERFORM_CHANGE_STAGE_TAB = {
    index: number;
};
export declare const performChangeStageTab: (index: number) => Action<PERFORM_CHANGE_STAGE_TAB>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapHelpShow
 */
export declare type PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW = {};
export declare const performPopoverClientRoadMapHelpShow: () => Action<PERFORM_POPOVER_CLIENT_ROADMAP_HELP_SHOW>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapHelpHide
 */
export declare type PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE = {};
export declare const performPopoverClientRoadMapHelpHide: () => Action<PERFORM_POPOVER_CLIENT_ROADMAP_HELP_HIDE>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealRoadMapSwitchUpdate
 */
export declare type CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE = {};
export declare const callPutDealRoadMapSwitchUpdate: () => Action<CALL_PUT_DEAL_ROAD_MAP_SWITCH_UPDATE>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealUpdateRoadMapStatus
 *
 * @param { boolean } enabled .
 */
export declare type CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS = {
    enabled: boolean;
};
export declare const callPutDealUpdateRoadMapStatus: (enable: boolean) => Action<CALL_PUT_DEAL_UPDATE_ROAD_MAP_STATUS>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performRoadMapSwitchButtonDisabled
 *
 * @description включить или выключить активность переключения режима показа ДК
 *
 * @param { boolean } disabled .
 */
export declare type PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED = {
    disabled: boolean;
};
export declare const performRoadMapSwitchButtonDisabled: (disabled: boolean) => Action<PERFORM_ROAD_MAP_SWITCH_BUTTON_DISABLED>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealRoadMapSwitchRequest
 */
export declare type CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST = {};
export declare const callPutDealRoadMapSwitchRequest: () => Action<CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * callPutDealRoadMapSwitchRequestSuccess
 */
export declare type CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS = {};
export declare const callPutDealRoadMapSwitchRequestSuccess: () => Action<CALL_PUT_DEAL_ROAD_MAP_SWITCH_REQUEST_SUCCESS>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performSaveRoadMapSwitchSuccess
 */
export declare type PERFORM_ROAD_MAP_SWITCH_SUCCESS = {};
export declare const performSaveRoadMapSwitchSuccess: () => Action<PERFORM_ROAD_MAP_SWITCH_SUCCESS>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performSaveRoadMapSwitchFailure
 *
 * @param { Error } error .
 */
export declare type PERFORM_ROAD_MAP_SWITCH_FAILURE = {
    error: Error;
};
export declare const performSaveRoadMapSwitchFailure: (error: Error) => Action<PERFORM_ROAD_MAP_SWITCH_FAILURE>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performClientRoadMapActivate
 */
export declare type PERFORM_CLIENT_ROADMAP_ACTIVATE = {};
export declare const performClientRoadMapActivate: () => Action<PERFORM_CLIENT_ROADMAP_ACTIVATE>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performClientRoadMapNext
 */
export declare type PERFORM_CLIENT_ROADMAP_NEXT = {};
export declare const performClientRoadMapNext: () => Action<PERFORM_CLIENT_ROADMAP_NEXT>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapShow
 */
export declare type PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW = {};
export declare const performPopoverClientRoadMapShow: () => Action<PERFORM_POPOVER_CLIENT_ROAD_MAP_SHOW>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * performPopoverClientRoadMapHide
 */
export declare type PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE = {};
export declare const performPopoverClientRoadMapHide: () => Action<PERFORM_POPOVER_CLIENT_ROAD_MAP_HIDE>;
/**
 * @author Topchiy Aleksey <avtopchiy.out@sberbank.ru>
 *
 * navigateToStageDetails
 *
 * @param { Models.DealStage } stage - стадия.
 * @param { number } activePosition - позиция активной стадии (меньше 0 - раньше текущей, 0 - текущая, больше 0 - больше текущей).
 */
export declare type NAVIGATE_TO_STAGE_DETAILS = {
    stage: Models.DealStage;
    activePosition: number;
};
export declare const navigateToStageDetails: (stage: Models.DealStage, activePosition: number) => Action<NAVIGATE_TO_STAGE_DETAILS>;
/**
 * Thunk dispatched to set read only or accessible stages list.
 *
 */
export declare type SET_ACCESS_STAGES_FLAG = {
    enabled: boolean;
};
export declare const setAccessStagesFlag: (enabled: boolean) => Action<SET_ACCESS_STAGES_FLAG>;
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
export declare type SWAP_CONTEXT = {
    currentDeal: Models.Deal;
    crmStages: Models.CrmStagesList;
    isReadOnlyStages: boolean;
    customer: Models.CustomerManaged;
};
export declare const swapContext: (currentDeal: Models.Deal, crmStages: Models.CrmStagesList, isReadOnlyStages: boolean, customer: Models.CustomerManaged) => Action<SWAP_CONTEXT>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToDealStages
 */
export declare type NAVIGATE_TO_DEAL_STAGES = {
    currentUser: ModelsApp.Employee;
    classifierDictionary: ModelsApp.ClassifierDictionary;
};
export declare const navigateToDealStages: (currentUser: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary) => Action<NAVIGATE_TO_DEAL_STAGES>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateBack
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateBackWithResetData
 */
export declare type NAVIGATE_BACK_WITH_RESET_DATA = {};
export declare const navigateBackWithResetData: () => Action<NAVIGATE_BACK_WITH_RESET_DATA>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToPreviousForm
 */
export declare type NAVIGATE_TO_PREVIOUS_FORM = {};
export declare const navigateToPreviousForm: () => Action<NAVIGATE_TO_PREVIOUS_FORM>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveStage
 */
export declare type PERFORM_SAVE_STAGE = {};
export declare const performSaveStage: () => Action<PERFORM_SAVE_STAGE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToAdditionalFields
 *
 * @param { ModelsApp.Classifier } inputStage .
 */
export declare type NAVIGATE_TO_ADDITIONAL_FIELDS = {
    inputStage: ModelsApp.Classifier;
};
export declare const navigateToAdditionalFields: (inputStage: ModelsApp.Classifier) => Action<NAVIGATE_TO_ADDITIONAL_FIELDS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * resetCheckFlags
 */
export declare type RESET_CHECK_FLAGS = {};
export declare const resetCheckFlags: () => Action<RESET_CHECK_FLAGS>;
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
export declare type CURRENT_STAGE_STATUS = {
    stageStatus: Enums.StageStatus;
    isDisabled: boolean;
    isSelected: boolean;
    history: Models.HistoryStage;
    stageText: string;
};
export declare const currentStageStatus: (stageStatus: Enums.StageStatus, isDisabled: boolean, isSelected: boolean, history: Models.HistoryStage, stageText: string) => Action<CURRENT_STAGE_STATUS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * setSaveStageEnableFlag
 *
 * @param { Mboolean } isSaveStageEnable .
 */
export declare type SET_SAVE_STAGE_ENABLE_FLAG = {
    isSaveStageEnable: boolean;
};
export declare const setSaveStageEnableFlag: (isSaveStageEnable: boolean) => Action<SET_SAVE_STAGE_ENABLE_FLAG>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSetRejection
 *
 * @param { boolean } isRejection .
 */
export declare type PERFORM_SET_REJECTION = {
    isRejection: boolean;
};
export declare const performSetRejection: (isRejection: boolean) => Action<PERFORM_SET_REJECTION>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputDealDate
 *
 * @param { Date | null } value .
 */
export declare type PERFORM_INPUT_DEAL_DATE = {
    value: Date | null;
};
export declare const performInputDealDate: (value: Date | null) => Action<PERFORM_INPUT_DEAL_DATE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEquivalentSumString
 *
 * @param { string | null } value .
 */
export declare type PERFORM_INPUT_EQUIVALENT_SUM_STRING = {
    value: string | null;
};
export declare const performInputEquivalentSumString: (value: string | null) => Action<PERFORM_INPUT_EQUIVALENT_SUM_STRING>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEquivalentSum
 *
 * @param { number | null } value .
 */
export declare type PERFORM_INPUT_EQUIVALENT_SUM = {
    value: number | null;
};
export declare const performInputEquivalentSum: (value: number | null) => Action<PERFORM_INPUT_EQUIVALENT_SUM>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToCurrencyPickerScreen
 */
export declare type NAVIGATE_TO_CURRENCY_PICKER_SCREEN = {};
export declare const navigateToCurrencyPickerScreen: () => Action<NAVIGATE_TO_CURRENCY_PICKER_SCREEN>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showButtonPopoverMainClientManager
 *
 * @param { boolean } isButtonPopoverOpenedMainClientManager .
 */
export declare type SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER = {
    isButtonPopoverOpenedMainClientManager: boolean;
};
export declare const showButtonPopoverMainClientManager: (isButtonPopoverOpenedMainClientManager: boolean) => Action<SHOW_BUTTON_POPOVER_MAIN_CLIENT_MANAGER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showButtonPopoverMainCreditOfficer
 *
 * @param { boolean } isButtonPopoverOpenedMainCreditOfficer .
 */
export declare type SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER = {
    isButtonPopoverOpenedMainCreditOfficer: boolean;
};
export declare const showButtonPopoverMainCreditOfficer: (isButtonPopoverOpenedMainCreditOfficer: boolean) => Action<SHOW_BUTTON_POPOVER_MAIN_CREDIT_OFFICER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showButtonPopoverMemberMonitoring
 *
 * @param { boolean } isButtonPopoverOpenedMemberMonitoring .
 */
export declare type SHOW_BUTTON_POPOVER_MEMBER_MONITORING = {
    isButtonPopoverOpenedMemberMonitoring: boolean;
};
export declare const showButtonPopoverMemberMonitoring: (isButtonPopoverOpenedMemberMonitoring: boolean) => Action<SHOW_BUTTON_POPOVER_MEMBER_MONITORING>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showDealStagesSavePopover
 *
 * @param { boolean } isDealStagesSavePopoverOpened .
 */
export declare type SHOW_DEAL_STAGES_SAVE_POPOVER = {
    isDealStagesSavePopoverOpened: boolean;
};
export declare const showDealStagesSavePopover: (isDealStagesSavePopoverOpened: boolean) => Action<SHOW_DEAL_STAGES_SAVE_POPOVER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEmployeeSourceMainClientManager
 *
 * @param { Enums.MemberListEmployeeSource } employeeSource .
 */
export declare type PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER = {
    employeeSource: Enums.MemberListEmployeeSource;
};
export declare const performInputEmployeeSourceMainClientManager: (employeeSource: Enums.MemberListEmployeeSource) => Action<PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CLIENT_MANAGER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEmployeeSourceMainCreditOfficer
 *
 * @param { Enums.MemberListEmployeeSource } employeeSource .
 */
export declare type PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER = {
    employeeSource: Enums.MemberListEmployeeSource;
};
export declare const performInputEmployeeSourceMainCreditOfficer: (employeeSource: Enums.MemberListEmployeeSource) => Action<PERFORM_INPUT_EMPLOYEE_SOURCE_MAIN_CREDIN_OFFICER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputEmployeeSourceMemberMonitoring
 *
 * @param { Enums.MemberListEmployeeSource } employeeSource .
 */
export declare type PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING = {
    employeeSource: Enums.MemberListEmployeeSource;
};
export declare const performInputEmployeeSourceMemberMonitoring: (employeeSource: Enums.MemberListEmployeeSource) => Action<PERFORM_INPUT_EMPLOYEE_SOURCE_MEMBER_MONITORING>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputComment
 *
 * @param { string } inputComment .
 */
export declare type PERFORM_INPUT_STRING = {
    inputComment: string;
};
export declare const performInputComment: (inputComment: string) => Action<PERFORM_INPUT_STRING>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMainClientManager
 *
 * @param { ModelsApp.Employee } inputMainClientManager .
 */
export declare type PERFORM_INPUT_MAIN_CLIENT_MANAGER = {
    inputMainClientManager: ModelsApp.Employee;
};
export declare const performInputMainClientManager: (inputMainClientManager: ModelsApp.Employee) => Action<PERFORM_INPUT_MAIN_CLIENT_MANAGER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMainCreditOfficer
 *
 * @param { ModelsApp.Employee } inputMainCreditOfficer .
 */
export declare type PERFORM_INPUT_MAIN_CREDIT_OFFICER = {
    inputMainCreditOfficer: ModelsApp.Employee;
};
export declare const performInputMainCreditOfficer: (inputMainCreditOfficer: ModelsApp.Employee) => Action<PERFORM_INPUT_MAIN_CREDIT_OFFICER>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMemberMonitoring
 *
 * @param { ModelsApp.Employee } inputMemberMonitoring .
 */
export declare type PERFORM_INPUT_MEMBER_MONITORING = {
    inputMemberMonitoring: ModelsApp.Employee;
};
export declare const performInputMemberMonitoring: (inputMemberMonitoring: ModelsApp.Employee) => Action<PERFORM_INPUT_MEMBER_MONITORING>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputMemberList
 *
 * @param { Models.MemberList } inputMemberList .
 */
export declare type PERFORM_INPUT_MEMBER_LIST = {
    inputMemberList: Models.MemberList;
};
export declare const performInputMemberList: (inputMemberList: Models.MemberList) => Action<PERFORM_INPUT_MEMBER_LIST>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * navigateToMemberListScreen
 */
export declare type NAVIGATE_TO_MEMBER_LIST_SCREEN = {};
export declare const navigateToMemberListScreen: () => Action<NAVIGATE_TO_MEMBER_LIST_SCREEN>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performInputCurrency
 *
 * @param { ModelsApp.Classifier } value .
 */
export declare type PERFORM_INPUT_CURRENCY = {
    value: ModelsApp.Classifier;
};
export declare const performInputCurrency: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_CURRENCY>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSelectRejection
 *
 * @param { ModelsApp.Classifier } inputRejection .
 */
export declare type PERFORM_SELECT_REJECTION = {
    inputRejection: ModelsApp.Classifier;
};
export declare const performSelectRejection: (inputRejection: ModelsApp.Classifier) => Action<PERFORM_SELECT_REJECTION>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performValidateForm
 */
export declare type PERFORM_VALIDATE_FORM = {};
export declare const performValidateForm: () => Action<PERFORM_VALIDATE_FORM>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * setSaveAdditionalFildsEnableFlag
 *
 * @param { boolean } isSaveAdditionalFieldsEnable .
 */
export declare type SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG = {
    isSaveAdditionalFieldsEnable: boolean;
};
export declare const setSaveAdditionalFildsEnableFlag: (isSaveAdditionalFieldsEnable: boolean) => Action<SET_SAVE_ADDITIONAL_FILDS_ENABLE_FLAG>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * showError
 *
 * @param { boolean } isErrorEnable .
 *
 * @param { string } errorMessage .
 */
export declare type SHOW_ERROR = {
    isErrorEnable: boolean;
    errorMessage: string;
};
export declare const showError: (isErrorEnable: boolean, errorMessage: string) => Action<SHOW_ERROR>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * prepareStageClassifierList
 *
 * @param { ModelsApp.ClassifierList } accessibleStageList .
 */
export declare type PREPARE_STAGE_CLASSIFIER_LIST = {
    accessibleStageList: ModelsApp.ClassifierList;
};
export declare const prepareStageClassifierList: (accessibleStageList: ModelsApp.ClassifierList) => Action<PREPARE_STAGE_CLASSIFIER_LIST>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * prepareStageInputData
 */
export declare type PREPARE_STAGE_INPUT_DATA = {};
export declare const prepareStageInputData: () => Action<PREPARE_STAGE_INPUT_DATA>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performChecks
 *
 * @param { ModelsApp.Classifier } inputStage .
 * @param { string } currentUserId .
 */
export declare type PERFORM_CHECKS = {
    inputStage: ModelsApp.Classifier;
    currentUserId: string;
};
export declare const performChecks: (inputStage: ModelsApp.Classifier, currentUserId: string) => Action<PERFORM_CHECKS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStage
 */
export declare type PERFORM_SAVE_DEAL_STAGE = {};
export declare const performSaveDealStage: () => Action<PERFORM_SAVE_DEAL_STAGE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStageExecute
 */
export declare type PERFORM_SAVE_DEAL_STAGE_EXECUTE = {};
export declare const performSaveDealStageExecute: () => Action<PERFORM_SAVE_DEAL_STAGE_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStageSuccess
 */
export declare type PERFORM_SAVE_DEAL_STAGE_SUCCESS = {};
export declare const performSaveDealStageSuccess: () => Action<PERFORM_SAVE_DEAL_STAGE_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealStageFailure
 *
 * @param { Error } error .
 */
export declare type PERFORM_SAVE_DEAL_STAGE_FAILURE = {
    error: Error;
};
export declare const performSaveDealStageFailure: (error: Error) => Action<PERFORM_SAVE_DEAL_STAGE_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFields
 */
export declare type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS = {};
export declare const performSaveDealAdditionalFields: () => Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFieldsExecute
 */
export declare type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE = {};
export declare const performSaveDealAdditionalFieldsExecute: () => Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFieldsSuccess
 */
export declare type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS = {};
export declare const performSaveDealAdditionalFieldsSuccess: () => Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performSaveDealAdditionalFieldsFailure
 *
 * @param { Error } error .
 */
export declare type PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE = {
    error: Error;
};
export declare const performSaveDealAdditionalFieldsFailure: (error: Error) => Action<PERFORM_SAVE_DEAL_ADDITIONAL_FIELDS_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParameters
 */
export declare type PERFORM_RECEIVING_INPUT_PARAMETERS = {};
export declare const performReceivingInputParameters: () => Action<PERFORM_RECEIVING_INPUT_PARAMETERS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParametersExecute
 */
export declare type PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE = {};
export declare const performReceivingInputParametersExecute: () => Action<PERFORM_RECEIVING_INPUT_PARAMETERS_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParametersSuccess
 */
export declare type PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS = {};
export declare const performReceivingInputParametersSuccess: () => Action<PERFORM_RECEIVING_INPUT_PARAMETERS_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performReceivingInputParametersFailure
 *
 * @param { Error } error .
 */
export declare type PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE = {
    error: Error;
};
export declare const performReceivingInputParametersFailure: (error: Error) => Action<PERFORM_RECEIVING_INPUT_PARAMETERS_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDeal
 */
export declare type CALL_GET_CURRENT_DEAL = {};
export declare const callGetCurrentDeal: () => Action<CALL_GET_CURRENT_DEAL>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDealExecute
 */
export declare type CALL_GET_CURRENT_DEAL_EXECUTE = {};
export declare const callGetCurrentDealExecute: () => Action<CALL_GET_CURRENT_DEAL_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDealSuccess
 *
 * @param { Models.Deal } currentDeal .
 */
export declare type CALL_GET_CURRENT_DEAL_SUCCESS = {
    currentDeal: Models.Deal;
};
export declare const callGetCurrentDealSuccess: (currentDeal: Models.Deal) => Action<CALL_GET_CURRENT_DEAL_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetCurrentDealFailure
 *
 * @param { Error } error .
 */
export declare type CALL_GET_CURRENT_DEAL_FAILURE = {
    error: Error;
};
export declare const callGetCurrentDealFailure: (error: Error) => Action<CALL_GET_CURRENT_DEAL_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTracking
 */
export declare type CALL_GET_DEAL_STAGE_TRACKING = {};
export declare const callGetDealStageTracking: () => Action<CALL_GET_DEAL_STAGE_TRACKING>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTrackingExecute
 */
export declare type CALL_GET_DEAL_STAGE_TRACKING_EXECUTE = {};
export declare const callGetDealStageTrackingExecute: () => Action<CALL_GET_DEAL_STAGE_TRACKING_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performRefreshStagesSuccess
 *
 * @param { Array<Models.DealStage> } stageList .
 */
export declare type PERFORM_REFRESH_STAGES_SUCCESS = {
    stageList: Array<Models.DealStage>;
};
export declare const performRefreshStagesSuccess: (stageList: Models.DealStage[]) => Action<PERFORM_REFRESH_STAGES_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * performRefreshStagesFailure
 *
 * @param { Error } error .
 */
export declare type PERFORM_REFRESH_STAGES_FAILURE = {
    error: Error;
};
export declare const performRefreshStagesFailure: (error: Error) => Action<PERFORM_REFRESH_STAGES_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTrackingSuccess
 *
 * @param { Models.DealStageTracking } dealStageTracking .
 */
export declare type CALL_GET_DEAL_STAGE_TRACKING_SUCCESS = {
    dealStageTracking: Models.DealStageTracking;
};
export declare const callGetDealStageTrackingSuccess: (dealStageTracking: Models.DealStageTracking) => Action<CALL_GET_DEAL_STAGE_TRACKING_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetDealStageTrackingFailure
 *
 * @param { Error } error .
 */
export declare type CALL_GET_DEAL_STAGE_TRACKING_FAILURE = {
    error: Error;
};
export declare const callGetDealStageTrackingFailure: (error: Error) => Action<CALL_GET_DEAL_STAGE_TRACKING_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStages
 */
export declare type CALL_GET_NEXT_STAGES = {};
export declare const callGetNextStages: () => Action<CALL_GET_NEXT_STAGES>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStagesExecute
 */
export declare type CALL_GET_NEXT_STAGES_EXECUTE = {};
export declare const callGetNextStagesExecute: () => Action<CALL_GET_NEXT_STAGES_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStagesSuccess
 *
 * @param { Models.DealPossibleStageList } dealPossibleStageList .
 */
export declare type CALL_GET_NEXT_STAGES_SUCCESS = {
    dealPossibleStageList: Models.DealPossibleStageList;
};
export declare const callGetNextStagesSuccess: (dealPossibleStageList: Models.DealPossibleStageList) => Action<CALL_GET_NEXT_STAGES_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetNextStagesFailure
 *
 * @param { Error } error .
 */
export declare type CALL_GET_NEXT_STAGES_FAILURE = {
    error: Error;
};
export declare const callGetNextStagesFailure: (error: Error) => Action<CALL_GET_NEXT_STAGES_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStages
 */
export declare type CALL_GET_HISTORY_STAGES = {};
export declare const callGetHistoryStages: () => Action<CALL_GET_HISTORY_STAGES>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStagesExecute
 */
export declare type CALL_GET_HISTORY_STAGES_EXECUTE = {};
export declare const callGetHistoryStagesExecute: () => Action<CALL_GET_HISTORY_STAGES_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStagesSuccess
 *
 * @param { Models.DealHistoryStageList } dealHistoryStageList .
 */
export declare type CALL_GET_HISTORY_STAGES_SUCCESS = {
    dealHistoryStageList: Models.DealHistoryStageList;
};
export declare const callGetHistoryStagesSuccess: (dealHistoryStageList: Models.DealHistoryStageList) => Action<CALL_GET_HISTORY_STAGES_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callGetHistoryStagesFailure
 *
 * @param { Error } error .
 */
export declare type CALL_GET_HISTORY_STAGES_FAILURE = {
    error: Error;
};
export declare const callGetHistoryStagesFailure: (error: Error) => Action<CALL_GET_HISTORY_STAGES_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdate
 */
export declare type CALL_PUT_DEAL_UPDATE = {};
export declare const callPutDealUpdate: () => Action<CALL_PUT_DEAL_UPDATE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdateExecute
 */
export declare type CALL_PUT_DEAL_UPDATE_EXECUTE = {};
export declare const callPutDealUpdateExecute: () => Action<CALL_PUT_DEAL_UPDATE_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdateSuccess
 */
export declare type CALL_PUT_DEAL_UPDATE_SUCCESS = {};
export declare const callPutDealUpdateSuccess: () => Action<CALL_PUT_DEAL_UPDATE_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealUpdateFailure
 *
 * @param { Error } error .
 */
export declare type CALL_PUT_DEAL_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutDealUpdateFailure: (error: Error) => Action<CALL_PUT_DEAL_UPDATE_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdate
 */
export declare type CALL_PUT_DEAL_STAGES_UPDATE = {};
export declare const callPutDealStagesUpdate: () => Action<CALL_PUT_DEAL_STAGES_UPDATE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdateExecute
 */
export declare type CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE = {};
export declare const callPutDealStagesUpdateExecute: () => Action<CALL_PUT_DEAL_STAGES_UPDATE_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdateSuccess
 */
export declare type CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS = {};
export declare const callPutDealStagesUpdateSuccess: () => Action<CALL_PUT_DEAL_STAGES_UPDATE_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStagesUpdateFailure
 *
 * @param { Error } error .
 */
export declare type CALL_PUT_DEAL_STAGES_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutDealStagesUpdateFailure: (error: Error) => Action<CALL_PUT_DEAL_STAGES_UPDATE_FAILURE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdate
 */
export declare type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE = {};
export declare const callPutDealStageTrackingUpdate: () => Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdateExecute
 */
export declare type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE = {};
export declare const callPutDealStageTrackingUpdateExecute: () => Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_EXECUTE>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdateSuccess
 */
export declare type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS = {};
export declare const callPutDealStageTrackingUpdateSuccess: () => Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_SUCCESS>;
/**
 * @author Romanov Andrey <amromanov.out@sberbank.ru>
 *
 * callPutDealStageTrackingUpdateFailure
 *
 * @param { Error } error .
 */
export declare type CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutDealStageTrackingUpdateFailure: (error: Error) => Action<CALL_PUT_DEAL_STAGES_TRACKING_UPDATE_FAILURE>;
