/**
 * Actions of OccasionList container.
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





export const PERFORM_EDIT = 'OCCASION_LIST_CONTAINER_PERFORM_EDIT'

export const PERFORM_CANCEL = 'OCCASION_LIST_CONTAINER_PERFORM_CANCEL'

export const NAVIGATE_BACK = 'OCCASION_LIST_CONTAINER_NAVIGATE_BACK'

export const PERFORM_DELETE_OCCASION = 'OCCASION_LIST_CONTAINER_PERFORM_DELETE_OCCASION'

export const CALL_UPDATE_REQUEST_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_CALL_UPDATE_REQUEST_OCCASION_LIST'

export const CALL_UPDATE_FAILURE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_CALL_UPDATE_FAILURE_OCCASION_LIST'

export const PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS'

export const PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS'

export const PERFORM_OPEN_OCCASION_LIST_SCREEN = 'OCCASION_LIST_CONTAINER_PERFORM_OPEN_OCCASION_LIST_SCREEN'

export const PERFORM_CONTAINER_RESET = 'OCCASION_LIST_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION'

export const PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW = 'OCCASION_LIST_CONTAINER_PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW'

export const CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST'

export const PERFORM_UPDATE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_PERFORM_UPDATE_OCCASION_LIST'

export const PERFORM_SAVE_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_PERFORM_SAVE_OCCASION_LIST'

export const PERFORM_INPUT_OCCASION_LIST = 'OCCASION_LIST_CONTAINER_PERFORM_INPUT_OCCASION_LIST'

export const PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL = 'OCCASION_LIST_CONTAINER_PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL'


/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to confirm changes in occasion list.
 *
 */
export type PERFORM_SAVE_OCCASION_LIST = {}
export const performSaveOccasionList = (): Action<PERFORM_SAVE_OCCASION_LIST> => ({
    type: PERFORM_SAVE_OCCASION_LIST,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to send request to update occasion list.
 *
 */
export type CALL_UPDATE_REQUEST_OCCASION_LIST = {}
export const callUpdateRequestOccasionList = (): Action<CALL_UPDATE_REQUEST_OCCASION_LIST> => ({
    type: CALL_UPDATE_REQUEST_OCCASION_LIST,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to set success update occasion list.
 *
 * @param {Models.Agent}
 */
export type PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS = {agent: Models.Agent}
export const performUpdateAgentOccasionListSuccess = (agent: Models.Agent): Action<PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS> => ({
    type: PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS,
    payload: {agent}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to set success update occasion list.
 *
 *  * @param {Models.CustomerManaged}
 */
export type PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS = {customer: Models.CustomerManaged}
export const performUpdateCustomerOccasionListSuccess = (customer: Models.CustomerManaged): Action<PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS> => ({
    type: PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS,
    payload: {customer}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to set error at updating occasion list.
 *
 */
export type CALL_UPDATE_FAILURE_OCCASION_LIST = {error: Models.Error}
export const callUpdateFailureOccasionList = (error: Models.Error): Action<CALL_UPDATE_FAILURE_OCCASION_LIST> => ({
    type: CALL_UPDATE_FAILURE_OCCASION_LIST,
    payload: {error}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to input occasion list.
 *
 * @param {Models.OccasionList}
 */
export type PERFORM_INPUT_OCCASION_LIST = {occasionList: Models.OccasionList}
export const performInputOccasionList = (occasionList: Models.OccasionList): Action<PERFORM_INPUT_OCCASION_LIST> => ({
    type: PERFORM_INPUT_OCCASION_LIST,
    payload: {occasionList}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to update occasion list.
 *
 * @param {Models.OccasionList}
 */
export type PERFORM_UPDATE_OCCASION_LIST = {occasionList: Models.OccasionList}
export const performUpdateOccasionList = (occasionList: Models.OccasionList): Action<PERFORM_UPDATE_OCCASION_LIST> => ({
    type: PERFORM_UPDATE_OCCASION_LIST,
    payload: {occasionList}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "OccasionList" screen. Thunk used to confirm changes in occasion list.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "Occasion" screen. Thunk dispatched to change display error modal.
 *
 * @param {boolean}
 */
export type PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW = {value: boolean}
export const performChangeDisplayOccasionListErrorModalWindow = (value: boolean): Action<PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW> => ({
    type: PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW,
    payload: {value}
})

/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to enter editor mode.
 *
 */
export type PERFORM_EDIT = {}
export const performEdit = (): Action<PERFORM_EDIT> => ({
    type: PERFORM_EDIT,
    payload: { }
})


/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to navigate back on Occasion List Screen
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})




/**
 * Thunk dispatched by "OccasionList" screen. Thunk used to delete Occasion.
 *
 */
export type PERFORM_DELETE_OCCASION = {}
export const performDeleteOccasion = (): Action<PERFORM_DELETE_OCCASION> => ({
    type: PERFORM_DELETE_OCCASION,
    payload: {}
})




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
export type PERFORM_OPEN_OCCASION_LIST_SCREEN = {
    occasionListContextMode: Enums.OccasionListContextMode,
    occasionListAccessLevel: Enums.OccasionListAccessLevel,
    agent: Models.Agent | null,
    customer: Models.CustomerManaged | null}
export const performOpenOccasionListScreen = (occasionListContextMode: Enums.OccasionListContextMode,
                                             occasionListAccessLevel: Enums.OccasionListAccessLevel,
                                             agent: Models.Agent | null,
                                             customer: Models.CustomerManaged | null): Action<PERFORM_OPEN_OCCASION_LIST_SCREEN> => ({
    type: PERFORM_OPEN_OCCASION_LIST_SCREEN,
    payload: {
        occasionListContextMode,
        occasionListAccessLevel,
        agent,
        customer,
    }
})



/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to update occasion list with menu option.
 *
 * @param {string[]}
 */
export type PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION = {occasionListWithMenuOption: string []}
export const performUpdateOccasionListWithMenuOption = (occasionListWithMenuOption: string[]): Action<PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION> => ({
    type: PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION,
    payload: {
        occasionListWithMenuOption,
    }
})

/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to change status need update occasion list.
 *
 * @param {boolean}
 */
export type CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST= {value: boolean}
export const changeStatusNeedUpdateOccasionList = (value: boolean): Action<CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST> => ({
    type: CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST,
    payload: {
        value,
    }
})

/**
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to change Occasion List access level.
 *
 * @param {Enums.OccasionListAccessLevel}
 */
export type PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL= {value: Enums.OccasionListAccessLevel}
export const performSetOccasionListAccessLevel = (value: Enums.OccasionListAccessLevel): Action<PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL> => ({
    type: PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL,
    payload: {
        value,
    }
})
