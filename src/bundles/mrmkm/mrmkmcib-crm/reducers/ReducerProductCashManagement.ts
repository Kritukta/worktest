/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductCashManagement from '../actions/ActionsProductCashManagement'
import { Enums } from '../Enums'
import * as ModelsProductCashManagement from "../models/ModelsProductCashManagement"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductCashManagement = handleActions<ModelsProductCashManagement.IProductCashManagementState> ({

  

}, ModelsProductCashManagement.initialState.state)

export default reducerProductCashManagement
