/*
 * Created by Vladykin A.S.
 */

import {handleActions} from 'redux-actions';

import * as actionsDealListSearch from '../actions/ActionsDealListSearch'
import {defaultValues} from '../models/Models'
import * as ModelsDealListSearch from '../models/ModelsDealListSearch'
import Action from '../models/Action'

import * as util from '../common/Util'


const reducerDealListSearch = handleActions<ModelsDealListSearch.IDealListSearchState>({

    // Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search page open.
    [actionsDealListSearch.SWAP_CONTEXT]: (
        state: ModelsDealListSearch.IDealListSearchState,
        action: Action<actionsDealListSearch.SWAP_CONTEXT>
    ): ModelsDealListSearch.IDealListSearchState => {
        return {
            ...state,
            dealOpenedList: action.payload.dealOpenedList,
            dealClosedList: action.payload.dealClosedList,
        }
    },

    // Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
    [actionsDealListSearch.PERFORM_INPUT_SEARCH]: (
        state: ModelsDealListSearch.IDealListSearchState,
        action: Action<actionsDealListSearch.PERFORM_INPUT_SEARCH>
    ): ModelsDealListSearch.IDealListSearchState => {
        return {
            ...state,
            inputSearch: action.payload.value,
            dealSearchOpenedList: util.getDealSearchList(state.dealOpenedList, action.payload.value),
            dealSearchClosedList: util.getDealSearchList(state.dealClosedList, action.payload.value)
        }
    },

    // Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search mode exit.
    [actionsDealListSearch.PERFORM_INPUT_RESET]: (
        state: ModelsDealListSearch.IDealListSearchState
    ): ModelsDealListSearch.IDealListSearchState => {
        return {
            ...state,
            inputSearch: ''
        }
    },


}, ModelsDealListSearch.initialState.state)

export default reducerDealListSearch
