/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductCurrencyControl from '../actions/ActionsProductCurrencyControl'
import { Enums } from '../Enums'
import * as ModelsProductCurrencyControl from "../models/ModelsProductCurrencyControl"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductCurrencyControl = handleActions<ModelsProductCurrencyControl.IProductCurrencyControlState> ({

  

}, ModelsProductCurrencyControl.initialState.state)

export default reducerProductCurrencyControl
