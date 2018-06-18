/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductTariffPlan from '../actions/ActionsProductTariffPlan'
import { Enums } from '../Enums'
import * as ModelsProductTariffPlan from "../models/ModelsProductTariffPlan"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductTariffPlan = handleActions<ModelsProductTariffPlan.IProductTariffPlanState> ({

  

}, ModelsProductTariffPlan.initialState.state)

export default reducerProductTariffPlan
