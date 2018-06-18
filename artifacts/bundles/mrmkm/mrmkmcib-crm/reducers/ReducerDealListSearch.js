/*
 * Created by Vladykin A.S.
 */
import { handleActions } from 'redux-actions';
import * as actionsDealListSearch from '../actions/ActionsDealListSearch';
import * as ModelsDealListSearch from '../models/ModelsDealListSearch';
import * as util from '../common/Util';
const reducerDealListSearch = handleActions({
    // Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search page open.
    [actionsDealListSearch.SWAP_CONTEXT]: (state, action) => {
        return Object.assign({}, state, { dealOpenedList: action.payload.dealOpenedList, dealClosedList: action.payload.dealClosedList });
    },
    // Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
    [actionsDealListSearch.PERFORM_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { inputSearch: action.payload.value, dealSearchOpenedList: util.getDealSearchList(state.dealOpenedList, action.payload.value), dealSearchClosedList: util.getDealSearchList(state.dealClosedList, action.payload.value) });
    },
    // Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search mode exit.
    [actionsDealListSearch.PERFORM_INPUT_RESET]: (state) => {
        return Object.assign({}, state, { inputSearch: '' });
    },
}, ModelsDealListSearch.initialState.state);
export default reducerDealListSearch;
//# sourceMappingURL=ReducerDealListSearch.js.map