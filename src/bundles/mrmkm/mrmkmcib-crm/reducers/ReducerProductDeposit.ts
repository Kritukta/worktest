/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductDeposit from '../actions/ActionsProductDeposit'
import { Enums } from '../Enums'
import * as ModelsProductDeposit from "../models/ModelsProductDeposit"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductDeposit = handleActions<ModelsProductDeposit.IProductDepositState> ({

  

}, ModelsProductDeposit.initialState.state)

export default reducerProductDeposit
