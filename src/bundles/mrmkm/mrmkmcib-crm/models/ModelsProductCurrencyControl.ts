/**
 * Models for ProductCurrencyControl container.
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
    get state(): IProductCurrencyControlState {
        return {


        }
    }
}

export interface IProductCurrencyControlState {


}

export const initialState = {
    get state(): IProductCurrencyControlState {
        return defaultState.state
    }
}
