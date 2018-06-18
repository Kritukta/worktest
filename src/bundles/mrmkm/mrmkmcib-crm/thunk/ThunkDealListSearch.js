/*
 * Created by Vladykin A.S.
 */
import { Enums } from '../Enums';
import { SplitPanelActions } from 'ufs-mobile-platform';
import * as util from '../common/Util';
import * as actionsDealListSearch from '../actions/ActionsDealListSearch';
import * as thunkDealListSearch from '../thunk/ThunkDealListSearch';
export const navigateToDealListSearchScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerDealList = state.user.mrmkmcibCRM.reducerDealList;
    const dealOpenedList = reducerDealList.dealOpenedList;
    const dealClosedList = reducerDealList.dealClosedList;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentCustomer.DealListSearch, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)));
    dispatch(thunkDealListSearch.swapContext(dealOpenedList, dealClosedList));
};
export const swapContext = (dealOpenedList, dealClosedList) => (dispatch) => {
    dispatch(actionsDealListSearch.swapContext(dealOpenedList, dealClosedList));
};
export const navigateBackToDealListScreen = () => (dispatch) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)));
    dispatch(thunkDealListSearch.performInputReset());
};
/*
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value) => (dispatch) => {
    dispatch(actionsDealListSearch.performInputSearch(value));
};
/*
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input reset.
 */
export const performInputReset = () => (dispatch) => {
    dispatch(actionsDealListSearch.performInputReset());
};
//# sourceMappingURL=ThunkDealListSearch.js.map