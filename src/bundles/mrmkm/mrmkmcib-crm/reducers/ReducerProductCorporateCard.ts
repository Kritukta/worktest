/*
 * Created by Voropaev D.N.
 */

import {handleActions} from 'redux-actions'

import * as actionsProductCorporateCard from '../actions/ActionsProductCorporateCard'
import { Enums } from '../Enums'
import * as ModelsProductCorporateCard from "../models/ModelsProductCorporateCard"
import Action from "../models/Action"

import * as Utils from '../common/Util'

const reducerProductCorporateCard = handleActions<ModelsProductCorporateCard.IProductCorporateCardState> ({

  

}, ModelsProductCorporateCard.initialState.state)

export default reducerProductCorporateCard
