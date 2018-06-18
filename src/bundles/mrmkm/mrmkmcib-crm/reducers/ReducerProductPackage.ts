/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductPackage from '../actions/ActionsProductPackage'
import { Enums } from '../Enums'
import * as ModelsProductPackage from "../models/ModelsProductPackage"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductPackage = handleActions<ModelsProductPackage.IProductPackageState> ({

  

}, ModelsProductPackage.initialState.state)

export default reducerProductPackage
