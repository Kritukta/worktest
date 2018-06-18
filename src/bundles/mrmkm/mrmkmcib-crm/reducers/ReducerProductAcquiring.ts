/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductAcquiring from '../actions/ActionsProductAcquiring'
import { Enums } from '../Enums'
import * as ModelsProductAcquiring from "../models/ModelsProductAcquiring"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductAcquiring = handleActions<ModelsProductAcquiring.IProductAcquiringState> ({

    // Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate to agreement list view.
    [actionsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW]: (state: ModelsProductAcquiring.IProductAcquiringState, action: Action<actionsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW>): ModelsProductAcquiring.IProductAcquiringState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate back to acquiring product view.
    [actionsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING]: (state: ModelsProductAcquiring.IProductAcquiringState, action: Action<actionsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING>): ModelsProductAcquiring.IProductAcquiringState => {
        return {
            ...state,
        }
    },

}, ModelsProductAcquiring.initialState.state)

export default reducerProductAcquiring
