/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'

import * as actionsProduct from '../actions/ActionsProduct'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductCredit from './ThunkProductCredit'

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to hide product details.
 */
export const performHideProduct = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performHideProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCreditProductShow = (value: Models.CreditProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performCreditProductShow(value,))


    // Dispatch thunk "navigateToProduct" synchronously.

        dispatch(thunkProductList.navigateToProduct())
        dispatch(thunkProductCredit.forecastEventListFilter(value.creditProduct!.forecastEventList))
        dispatch(thunkProductCredit.performRefreshForecast())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to update product credit details.
 */
export const performCurrentCreditProductRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct

    let currentCreditProduct = reducerState.currentCreditProduct.creditProduct

    let currentCreditId = currentCreditProduct && currentCreditProduct.id
    let creditProductList = state.user.mrmkmcibCRM.reducerProductList.currentCreditProductList.data

    let newCurrentCredit: Models.CreditProduct | undefined = creditProductList.find((credit: Models.CreditProduct) => {
        return Boolean(credit.creditProduct && credit.creditProduct.id == currentCreditId)
    })

    if (newCurrentCredit){
        dispatch(actionsProduct.performCreditProductShow(newCurrentCredit))
    }


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performBankGuaranteeProductShow = (value: Models.CreditProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performBankGuaranteeProductShow(value,))


    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCashManagementProductShow = (value: Models.SettlementAgreementProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performCashManagementProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())

}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performPaymentAccountProductShow = (value: Models.SettlementAgreementProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performPaymentAccountProductShow(value,))


    // Dispatch thunk "navigateToProduct" synchronously. 


    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCustomsPaymentProductShow = (value: Models.SettlementAgreementProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performCustomsPaymentProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performPackageProductShow = (value: Models.SettlementAgreementProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performPackageProductShow(value,))


    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performTariffPlanProductShow = (value: Models.SettlementAgreementProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performTariffPlanProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performDepositProductShow = (value: Models.DepositProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performDepositProductShow(value,))


    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performContractSdoProductShow = (value: Models.DepositProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performContractSdoProductShow(value,))


    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performContractNsoProductShow = (value: Models.DepositProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performContractNsoProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCorporateCardProductShow = (value: Models.CorporateCardProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performCorporateCardProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performEncashmentProductShow = (value: Models.EncashmentContractProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performEncashmentProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performSelfEncashmentProductShow = (value: Models.EncashmentContractProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performSelfEncashmentProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performCurrencyControlProductShow = (value: Models.LegalInfoProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performCurrencyControlProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performAcquiringProductShow = (value: Models.AcquiringProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performAcquiringProductShow(value,))


    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performDboProductShow = (value: Models.DboProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performDboProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performContractConstructorProductShow = (value: Models.UdboProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performContractConstructorProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 */
export const performSalaryProductShow = (value: Models.SalaryProduct,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performSalaryProductShow(value,))

    dispatch(thunkProductList.navigateToProduct())


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched on change product status filter.
 */
export const inputProductStatus = (value: Enums.ProductStatus) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.inputProductStatus(value))


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched on change currency filter.
 */
export const inputCurrency = (value: Enums.Currency) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.inputCurrency(value))


}

/*
 * Thunk dispatched by "Product" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.performContainerReset())


}

export const navigateToProductFromPush = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct


    dispatch(actionsProduct.navigateToProductFromPush())


}