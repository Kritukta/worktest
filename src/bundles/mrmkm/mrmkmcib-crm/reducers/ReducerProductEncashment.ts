/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductEncashment from '../actions/ActionsProductEncashment'
import { Enums } from '../Enums'
import * as ModelsProductEncashment from "../models/ModelsProductEncashment"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductEncashment = handleActions<ModelsProductEncashment.IProductEncashmentState> ({

  

}, ModelsProductEncashment.initialState.state)

export default reducerProductEncashment
