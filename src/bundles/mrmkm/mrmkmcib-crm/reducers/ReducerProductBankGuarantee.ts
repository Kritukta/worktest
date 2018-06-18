/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductBankGuarantee from '../actions/ActionsProductBankGuarantee'
import { Enums } from '../Enums'
import * as ModelsProductBankGuarantee from "../models/ModelsProductBankGuarantee"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductBankGuarantee = handleActions<ModelsProductBankGuarantee.IProductBankGuaranteeState> ({

  

}, ModelsProductBankGuarantee.initialState.state)

export default reducerProductBankGuarantee
