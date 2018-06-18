/**
 * Models for ProductDeposit container.
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
    get state(): IProductDepositState {
        return {


        }
    }
}

export interface IProductDepositState {


}

export const initialState = {
    get state(): IProductDepositState {
        return defaultState.state
    }
}
