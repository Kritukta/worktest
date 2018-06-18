/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductSelfEncashment from '../actions/ActionsProductSelfEncashment'
import { Enums } from '../Enums'
import * as ModelsProductSelfEncashment from "../models/ModelsProductSelfEncashment"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductSelfEncashment = handleActions<ModelsProductSelfEncashment.IProductSelfEncashmentState> ({

  

}, ModelsProductSelfEncashment.initialState.state)

export default reducerProductSelfEncashment
