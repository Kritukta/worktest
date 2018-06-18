/**
 * Models for ProductCashManagement container.
 *
 * @author Voropaev D.N.
 * @see
 */

import { defaultValues } from "./Models"
import { Models as ModelsApp } from "mrmkmcib-app"
import { Enums } from '../Enums'
import { Models } from "mrmkmcib-crm"

import * as util from '../common/Util'

const defaultState = {
    get state(): IProductCashManagementState {
        return {


        }
    }
}

export interface IProductCashManagementState {


}

export const initialState = {
    get state(): IProductCashManagementState {
        return defaultState.state
    }
}
