/*
 * Created by Burnaev M.U.
 */
import * as actionsProduct from '../actions/ActionsProduct';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProductCredit from './ThunkProductCredit';
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to hide product details.
 */
export const performHideProduct = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performHideProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCreditProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performCreditProductShow(value));
    // Dispatch thunk "navigateToProduct" synchronously.
    dispatch(thunkProductList.navigateToProduct());
    dispatch(thunkProductCredit.forecastEventListFilter(value.creditProduct.forecastEventList));
    dispatch(thunkProductCredit.performRefreshForecast());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to update product credit details.
 */
export const performCurrentCreditProductRefresh = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    let currentCreditProduct = reducerState.currentCreditProduct.creditProduct;
    let currentCreditId = currentCreditProduct && currentCreditProduct.id;
    let creditProductList = state.user.mrmkmcibCRM.reducerProductList.currentCreditProductList.data;
    let newCurrentCredit = creditProductList.find((credit) => {
        return Boolean(credit.creditProduct && credit.creditProduct.id == currentCreditId);
    });
    if (newCurrentCredit) {
        dispatch(actionsProduct.performCreditProductShow(newCurrentCredit));
    }
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performBankGuaranteeProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performBankGuaranteeProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCashManagementProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performCashManagementProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performPaymentAccountProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performPaymentAccountProductShow(value));
    // Dispatch thunk "navigateToProduct" synchronously. 
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCustomsPaymentProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performCustomsPaymentProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performPackageProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performPackageProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performTariffPlanProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performTariffPlanProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performDepositProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performDepositProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performContractSdoProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performContractSdoProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performContractNsoProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performContractNsoProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCorporateCardProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performCorporateCardProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performEncashmentProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performEncashmentProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performSelfEncashmentProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performSelfEncashmentProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCurrencyControlProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performCurrencyControlProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performAcquiringProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performAcquiringProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performDboProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performDboProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performContractConstructorProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performContractConstructorProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performSalaryProductShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performSalaryProductShow(value));
    dispatch(thunkProductList.navigateToProduct());
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched on change product status filter.
 */
export const inputProductStatus = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.inputProductStatus(value));
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched on change currency filter.
 */
export const inputCurrency = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.inputCurrency(value));
};
/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.performContainerReset());
};
export const navigateToProductFromPush = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    dispatch(actionsProduct.navigateToProductFromPush());
};
//# sourceMappingURL=ThunkProduct.js.map