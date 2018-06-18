/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductDbo from '../actions/ActionsProductDbo'
import { Enums } from '../Enums'
import * as ModelsProductDbo from "../models/ModelsProductDbo"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductDbo = handleActions<ModelsProductDbo.IProductDboState> ({

  

}, ModelsProductDbo.initialState.state)

export default reducerProductDbo
