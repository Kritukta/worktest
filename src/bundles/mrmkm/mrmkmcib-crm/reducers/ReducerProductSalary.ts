/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductSalary from '../actions/ActionsProductSalary'
import { Enums } from '../Enums'
import * as ModelsProductSalary from "../models/ModelsProductSalary"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductSalary = handleActions<ModelsProductSalary.IProductSalaryState> ({

  

}, ModelsProductSalary.initialState.state)

export default reducerProductSalary
