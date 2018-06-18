/**
 * Actions of OccasionList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
export declare const PERFORM_EDIT = "OCCASION_LIST_CONTAINER_PERFORM_EDIT";
export declare const PERFORM_CANCEL = "OCCASION_LIST_CONTAINER_PERFORM_CANCEL";
export declare const NAVIGATE_BACK = "OCCASION_LIST_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_DELETE_OCCASION = "OCCASION_LIST_CONTAINER_PERFORM_DELETE_OCCASION";
export declare const CALL_UPDATE_REQUEST_OCCASION_LIST = "OCCASION_LIST_CONTAINER_CALL_UPDATE_REQUEST_OCCASION_LIST";
export declare const CALL_UPDATE_FAILURE_OCCASION_LIST = "OCCASION_LIST_CONTAINER_CALL_UPDATE_FAILURE_OCCASION_LIST";
export declare const PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS = "OCCASION_LIST_CONTAINER_PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS";
export declare const PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS = "OCCASION_LIST_CONTAINER_PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS";
export declare const PERFORM_OPEN_OCCASION_LIST_SCREEN = "OCCASION_LIST_CONTAINER_PERFORM_OPEN_OCCASION_LIST_SCREEN";
export declare const PERFORM_CONTAINER_RESET = "OCCASION_LIST_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION = "OCCASION_LIST_CONTAINER_PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION";
export declare const PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW = "OCCASION_LIST_CONTAINER_PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW";
export declare const CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST = "OCCASION_LIST_CONTAINER_CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST";
export declare const PERFORM_UPDATE_OCCASION_LIST = "OCCASION_LIST_CONTAINER_PERFORM_UPDATE_OCCASION_LIST";
export declare const PERFORM_SAVE_OCCASION_LIST = "OCCASION_LIST_CONTAINER_PERFORM_SAVE_OCCASION_LIST";
export declare const PERFORM_INPUT_OCCASION_LIST = "OCCASION_LIST_CONTAINER_PERFORM_INPUT_OCCASION_LIST";
export declare const PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL = "OCCASION_LIST_CONTAINER_PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL";
export declare type PERFORM_SAVE_OCCASION_LIST = {};
export declare const performSaveOccasionList: () => Action<PERFORM_SAVE_OCCASION_LIST>;
export declare type CALL_UPDATE_REQUEST_OCCASION_LIST = {};
export declare const callUpdateRequestOccasionList: () => Action<CALL_UPDATE_REQUEST_OCCASION_LIST>;
export declare type PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS = {
    agent: Models.Agent;
};
export declare const performUpdateAgentOccasionListSuccess: (agent: ModelsCrm.Agent) => Action<PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS>;
export declare type PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS = {
    customer: Models.CustomerManaged;
};
export declare const performUpdateCustomerOccasionListSuccess: (customer: ModelsCrm.CustomerManaged) => Action<PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS>;
export declare type CALL_UPDATE_FAILURE_OCCASION_LIST = {
    error: Models.Error;
};
export declare const callUpdateFailureOccasionList: (error: ModelsCrm.Error) => Action<CALL_UPDATE_FAILURE_OCCASION_LIST>;
export declare type PERFORM_INPUT_OCCASION_LIST = {
    occasionList: Models.OccasionList;
};
export declare const performInputOccasionList: (occasionList: ModelsCrm.OccasionList) => Action<PERFORM_INPUT_OCCASION_LIST>;
export declare type PERFORM_UPDATE_OCCASION_LIST = {
    occasionList: Models.OccasionList;
};
export declare const performUpdateOccasionList: (occasionList: ModelsCrm.OccasionList) => Action<PERFORM_UPDATE_OCCASION_LIST>;
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
export declare type PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW = {
    value: boolean;
};
export declare const performChangeDisplayOccasionListErrorModalWindow: (value: boolean) => Action<PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to enter editor mode.
 *
 */
export declare type PERFORM_EDIT = {};
export declare const performEdit: () => Action<PERFORM_EDIT>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to navigate back on Occasion List Screen
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to delete Occasion.
 *
 */
export declare type PERFORM_DELETE_OCCASION = {};
export declare const performDeleteOccasion: () => Action<PERFORM_DELETE_OCCASION>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to show member list.
 *
 * @param {Models.Agent} agent.
 * @param {Models.CustomerManaged} customerManaged.
 * @param {Enums.OccasionListContextMode}.
 * @param {Enums.OccasionNavigationMode}.
 * @param {Models.Agent}.
 * @param {Models.CustomerManaged}.
 */
export declare type PERFORM_OPEN_OCCASION_LIST_SCREEN = {
    occasionListContextMode: Enums.OccasionListContextMode;
    occasionListAccessLevel: Enums.OccasionListAccessLevel;
    agent: Models.Agent | null;
    customer: Models.CustomerManaged | null;
};
export declare const performOpenOccasionListScreen: (occasionListContextMode: Enums.OccasionListContextMode, occasionListAccessLevel: Enums.OccasionListAccessLevel, agent: ModelsCrm.Agent | null, customer: ModelsCrm.CustomerManaged | null) => Action<PERFORM_OPEN_OCCASION_LIST_SCREEN>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to update occasion list with menu option.
 *
 * @param {string[]}
 */
export declare type PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION = {
    occasionListWithMenuOption: string[];
};
export declare const performUpdateOccasionListWithMenuOption: (occasionListWithMenuOption: string[]) => Action<PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to change status need update occasion list.
 *
 * @param {boolean}
 */
export declare type CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST = {
    value: boolean;
};
export declare const changeStatusNeedUpdateOccasionList: (value: boolean) => Action<CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST>;
/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to change Occasion List access level.
 *
 * @param {Enums.OccasionListAccessLevel}
 */
export declare type PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL = {
    value: Enums.OccasionListAccessLevel;
};
export declare const performSetOccasionListAccessLevel: (value: Enums.OccasionListAccessLevel) => Action<PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL>;
