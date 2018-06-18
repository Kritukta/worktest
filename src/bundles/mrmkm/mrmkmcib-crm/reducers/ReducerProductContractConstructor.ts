/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductContractConstructor from '../actions/ActionsProductContractConstructor'
import { Enums } from '../Enums'
import * as ModelsProductContractConstructor from "../models/ModelsProductContractConstructor"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductContractConstructor = handleActions<ModelsProductContractConstructor.IProductContractConstructorState> ({

  

}, ModelsProductContractConstructor.initialState.state)

export default reducerProductContractConstructor
