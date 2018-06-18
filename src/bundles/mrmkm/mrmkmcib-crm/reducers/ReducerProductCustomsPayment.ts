/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductCustomsPayment from '../actions/ActionsProductCustomsPayment'
import { Enums } from '../Enums'
import * as ModelsProductCustomsPayment from "../models/ModelsProductCustomsPayment"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductCustomsPayment = handleActions<ModelsProductCustomsPayment.IProductCustomsPaymentState> ({

  

}, ModelsProductCustomsPayment.initialState.state)

export default reducerProductCustomsPayment
