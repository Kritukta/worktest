/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductContractNso from '../actions/ActionsProductContractNso'
import { Enums } from '../Enums'
import * as ModelsProductContractNso from "../models/ModelsProductContractNso"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductContractNso = handleActions<ModelsProductContractNso.IProductContractNsoState> ({

  

}, ModelsProductContractNso.initialState.state)

export default reducerProductContractNso
