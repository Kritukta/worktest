/**
 * Actions of Limit container.
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


export const PERFORM_CHANGE_TAB = 'LIMIT_CONTAINER_PERFORM_CHANGE_TAB'

export const PERFORM_CHANGE_TOTAL_TAB = 'LIMIT_CONTAINER_PERFORM_CHANGE_TOTAL_TAB'

export const PERFORM_CONTAINER_RESET = 'LIMIT_CONTAINER_PERFORM_CONTAINER_RESET'


/**
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.LimitTab} value .
 */
export type PERFORM_CHANGE_TAB = { index: number, value: Enums.LimitTab, }
export const performChangeTab = (index: number, value: Enums.LimitTab,): Action<PERFORM_CHANGE_TAB> => ({
    type: PERFORM_CHANGE_TAB,
    payload: {
        index: index,
        value: value,
    }
})

/**
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.LimitTotalTab} value .
 */
export type PERFORM_CHANGE_TOTAL_TAB = { index: number, value: Enums.LimitTotalTab, }
export const performChangeTotalTab = (index: number, value: Enums.LimitTotalTab,): Action<PERFORM_CHANGE_TOTAL_TAB> => ({
    type: PERFORM_CHANGE_TOTAL_TAB,
    payload: {
        index: index,
        value: value,
    }
})

/**
 * Thunk dispatched by "Limit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})
