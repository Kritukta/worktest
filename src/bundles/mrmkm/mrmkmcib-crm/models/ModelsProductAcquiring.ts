/**
 * Models for ProductAcquiring container.
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
    get state(): IProductAcquiringState {
        return {

        }
    }
}

export interface IProductAcquiringState {

}

export const initialState = {
    get state(): IProductAcquiringState {
        return defaultState.state
    }
}

export interface NAVIGATE_TO_AGREEMENT_LIST_VIEW {
    (): void;
}

export interface NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING {
    (): void;
}