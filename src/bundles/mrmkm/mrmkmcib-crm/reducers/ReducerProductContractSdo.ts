/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductContractSdo from '../actions/ActionsProductContractSdo'
import { Enums } from '../Enums'
import * as ModelsProductContractSdo from "../models/ModelsProductContractSdo"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductContractSdo = handleActions<ModelsProductContractSdo.IProductContractSdoState> ({

  

}, ModelsProductContractSdo.initialState.state)

export default reducerProductContractSdo
