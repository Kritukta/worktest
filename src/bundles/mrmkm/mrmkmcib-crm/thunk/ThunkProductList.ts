/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {Models as ModelsApp, navigationExecutor, EnumsApp, performNavigateBack} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'

import * as util from '../common/Util'

import * as actionsProductList from '../actions/ActionsProductList'
import * as actionsProduct from '../actions/ActionsProduct'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as actionsCustomer from '../actions/ActionsCustomer'

import {SplitPanelActions} from 'ufs-mobile-platform'
import * as _ from 'lodash'

/*
 * Thunk dispatched by "ProductList" screen. Thunk dispatched on user input Currency field.
 */
export const performInputCurrency = (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.performInputCurrency(value))


}
export const performChangeDisplayRefreshBarProductList = (value: boolean) => (dispatch: Function, getState: ()=> ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    dispatch(actionsProductList.performChangeDisplayRefreshBarProductList(value))

}
export const performInputEncumbrance = (value: Models.ProductEncumbrance) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    dispatch(actionsProductList.performInputEncumbrance (value))

}

/*
 * Internal thunk used in "ProductList" container. Thunk chain used to show modal.
 */
export const performModalProductShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.performModalProductShow())


}

/*
 * Thunk dispatched by "ProductList" screen. Thunk chain used to hide modal.
 */
export const performModalProductHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.performModalProductHide())


}

/*
 * Internal thunk used in "ProductList" container. Thunk chain used to navigate to product details screen.
 */
export const navigateToProduct = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    let reducerProduct = state.user.mrmkmcibCRM.reducerProduct

    let isActiveProductList = util.isActiveProductList(reducerCustomer.productListAgreementStatus)

    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMProductList.AppCRM_ProductContainer, util.getNavigationCRMProductListString(Enums.NavigationAppCRMProductList.AppCRM_ProductList)))


    dispatch(actionsProductList.navigateToProduct())


    // Dispatch thunk "callGetCardIndexList" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerProductList
    if (reducerState.currentProductListType == Enums.ProductType.PaymentAccountProduct &&
        reducerProduct.currentPaymentAccountProduct &&
        reducerProduct.currentPaymentAccountProduct.paymentAccountProduct &&
        reducerProduct.currentPaymentAccountProduct.paymentAccountProduct.isExistCardIndex) {
        dispatch(thunkProductPaymentAccount.callGetCardIndexList(false))
    }

    // Dispatch thunk "callGetOperationList" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerProductList
    if (reducerState.currentProductListType == Enums.ProductType.PaymentAccountProduct &&
        isActiveProductList) {
        dispatch(thunkProductPaymentAccount.callGetOperationList(false))
    }

    // Dispatch thunk "callGetProductVspInfo" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerProductList
    if (reducerState.currentProductListType == Enums.ProductType.PaymentAccountProduct) {
        dispatch(thunkProductPaymentAccount.callGetProductVspInfo())
    }

    if (reducerState.currentProductListType == Enums.ProductType.CreditProduct) {
        const contractNumber = reducerProduct.currentCreditProduct.creditProduct && 
                        reducerProduct.currentCreditProduct.creditProduct.contractNumber || ''

        dispatch(thunkProductCredit.performCallGetCovenantList(contractNumber))
        
    }
}

/*
 * Internal thunk used in "ProductList" container. Thunk chain used to navigate back from product.
 */
export const navigateProductListBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList
    let reducerCrm = state.user.mrmkmcibCRM.reducerProduct

    if (reducerCrm.productContextMode == Enums.ProductContextMode.Notice) {
        dispatch(thunkProduct.performContainerReset())
        dispatch(thunkCustomer.performContainerReset())
        dispatch(SplitPanelActions.resetAllSplitPanels())
        dispatch(performNavigateBack())
        return
    }


    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_ProductList)))


    dispatch(actionsProduct.performCreditProductReset())
    dispatch(actionsProductList.navigateProductListBack())


}

/*
 * Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
 */
export const navigateToProductListScreen = (productType: Enums.ProductType,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer
    
    dispatch (SplitPanelActions.pushContent (
        Enums.NavigationContentAppCrm.AppCRM_ProductList,
        util.getNavigationString (Enums.Navigation.AppCRM)
    ))

    dispatch (actionsProductList.navigateToProductListScreen (productType,))

    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerProductList
    
    const isActiveProductList = util.isActiveProductList (
        state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus
    )

    const eksErrorListProductList = util.getEksErrorProductList(reducerCustomer, productType, isActiveProductList)

    const errorProductList = util.getErrorProductList(reducerCustomer, productType, isActiveProductList)

    if (isActiveProductList == false &&
        (Array.isArray(eksErrorListProductList) && eksErrorListProductList.length == 0) &&
        errorProductList == null) {

        dispatch(thunkCustomer.updateProductListOperationUuid(productType, isActiveProductList)())

        state = getState()

        dispatch (thunkCustomer.performCallGetCachedRequestProductList (productType))

    } else {

        dispatch (thunkProductList.filterProductList (isActiveProductList))

    }
}

/*
 * Thunk dispatched by "ProductList" screen. Thunk used to open forecast event info screen.
 */
export const navigateToProductForecastEventInfoScreen = (event: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    dispatch (SplitPanelActions.pushContent (
        Enums.NavigationContentAppCrm.AppCRM_CreditProductForecastProductInfo,
        util.getNavigationString (Enums.Navigation.AppCRM)
    ))
    dispatch (actionsProductList.navigateToForecastProductInfoScreen (event))
}

/*
 * Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
 */
export const navigateToProductForecastDealInfoScreen = (deal: Models.ForecastDeal) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    dispatch (SplitPanelActions.pushContent (
        Enums.NavigationContentAppCrm.AppCRM_CreditProductForecastDealInfo,
        util.getNavigationString (Enums.Navigation.AppCRM)
    ))

    // Запрашиваем прогнозные события для страницы детальной сделки
    dispatch(thunkProductCredit.performRefreshForecast())

    dispatch (actionsProductList.navigateToProductForecastDealInfoScreen (deal))
}

/*
 * Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
 */
export const navigateProductForecastDealInfoScreenBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    dispatch (SplitPanelActions.popContent (util.getNavigationString (Enums.Navigation.AppCRM)))
    dispatch (actionsProductList.navigateProductForecastDealInfoScreenBack ())
}


export const performProductListModalAlertShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch (actionsProductList.performProductListModalAlertShow ())
}

// Thunk dispatch in "Customer" screen to hide product list modal alert
export const performProductListModalAlertHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch (actionsProductList.performProductListModalAlertHide ())
}
/*
 * Thunk dispatched by "ProductList" screen. Thunk used to filter product list screen.
 */
export const filterProductList = (isActiveProductList: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    const reducerCustomerState = state.user.mrmkmcibCRM.reducerCustomer

    const isCurrentProductListActive = util.isActiveProductList (
        state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus
    )
    if (isCurrentProductListActive  == isActiveProductList) {

        dispatch(actionsProductList.filterProductList())

        // Dispatch thunk "filterCreditActiveProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.CreditProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterCreditProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductList
            })) : dispatch(thunkProductList.filterCreditProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductList
            }))
        }

        // Dispatch thunk "filterBankGuaranteeProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.BankGuaranteeProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterBankGuaranteeProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductList
            })) : dispatch(thunkProductList.filterBankGuaranteeProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductList
            }))
        }

        // Dispatch thunk "filterCashManagementProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.CashManagementProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterCashManagementProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList
            })) : dispatch(thunkProductList.filterCashManagementProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList
            }))
        }

        // Dispatch thunk "filterPaymentAccountProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.PaymentAccountProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterPaymentAccountProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList
            })) : dispatch(thunkProductList.filterPaymentAccountProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList
            }))
        }

        // Dispatch thunk "filterCustomsPaymentProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.CustomsPaymentProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterCustomsPaymentProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList
            })) : dispatch(thunkProductList.filterCustomsPaymentProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList
            }))
        }

        // Dispatch thunk "filterPackageProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.PackageProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterPackageProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList
            })) : dispatch(thunkProductList.filterPackageProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList
            }))
        }

        // Dispatch thunk "filterTariffPlanProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.TariffPlanProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterTariffPlanProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList
            })) : dispatch(thunkProductList.filterTariffPlanProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList
            }))
        }

        // Dispatch thunk "filterDepositProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.DepositProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterDepositProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductList
            })) : dispatch(thunkProductList.filterDepositProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductList
            }))
        }

        // Dispatch thunk "filterContractSdoProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.ContractSdoProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterContractSdoProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductList
            })) : dispatch(thunkProductList.filterContractSdoProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductList
            }))
        }

        // Dispatch thunk "filterContractNsoProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.ContractNsoProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterContractNsoProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductList
            })) : dispatch(thunkProductList.filterContractNsoProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductList
            }))
        }

        // Dispatch thunk "filterCorporateCardProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.CorporateCardProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterCorporateCardProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductList
            })) : dispatch(thunkProductList.filterCorporateCardProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductList
            }))
        }

        // Dispatch thunk "filterEncashmentProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.EncashmentProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterEncashmentProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductList
            })) : dispatch(thunkProductList.filterEncashmentProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductList
            }))


        }

        // Dispatch thunk "filterSelfEncashmentProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.SelfEncashmentProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterSelfEncashmentProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductList
            })) : dispatch(thunkProductList.filterSelfEncashmentProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductList
            }))
        }

        // Dispatch thunk "filterCurrencyControlProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.CurrencyControlProduct) {
            dispatch(thunkProductList.filterCurrencyControlProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductList
            }))
        }

        // Dispatch thunk "filterAcquiringProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.AcquiringProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterAcquiringProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductList
            })) : dispatch(thunkProductList.filterAcquiringProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductList
            }))
        }

        // Dispatch thunk "filterDboProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.DboProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterDboProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductList
            })) : dispatch(thunkProductList.filterDboProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductList
            }))
        }

        // Dispatch thunk "filterContractConstructorProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.ContractConstructorProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterContractConstructorProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductList
            })) : dispatch(thunkProductList.filterContractConstructorProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductList
            }))
        }

        // Dispatch thunk "filterSalaryProductList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerProductList
        if (reducerState.currentProductListType == Enums.ProductType.SalaryProduct) {
            isActiveProductList ? dispatch(thunkProductList.filterSalaryProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductList
            })) : dispatch(thunkProductList.filterSalaryProductList({
                ...state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductList
            }))
        }
    }

}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterCreditProductList = (productList: Models.CreditProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterCreditProductList(productList,))

    dispatch(thunkCustomer.callGetForecastDealList())
}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterBankGuaranteeProductList = (productList: Models.CreditProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterBankGuaranteeProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterCashManagementProductList = (productList: Models.SettlementAgreementProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterCashManagementProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterPaymentAccountProductList = (productList: Models.SettlementAgreementProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterPaymentAccountProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterCustomsPaymentProductList = (productList: Models.SettlementAgreementProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterCustomsPaymentProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterPackageProductList = (productList: Models.SettlementAgreementProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterPackageProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterTariffPlanProductList = (productList: Models.SettlementAgreementProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterTariffPlanProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterDepositProductList = (productList: Models.DepositProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterDepositProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterContractSdoProductList = (productList: Models.DepositProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterContractSdoProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterContractNsoProductList = (productList: Models.DepositProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterContractNsoProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterCorporateCardProductList = (productList: Models.CorporateCardProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterCorporateCardProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterEncashmentProductList = (productList: Models.EncashmentContractProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterEncashmentProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterSelfEncashmentProductList = (productList: Models.EncashmentContractProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterSelfEncashmentProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterCurrencyControlProductList = (productList: Models.LegalInfoProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterCurrencyControlProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterAcquiringProductList = (productList: Models.AcquiringProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterAcquiringProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterDboProductList = (productList: Models.DboProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterDboProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterContractConstructorProductList = (productList: Models.UdboProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterContractConstructorProductList(productList,))


}

/*
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 */
export const filterSalaryProductList = (productList: Models.SalaryProductList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.filterSalaryProductList(productList,))


}

/*
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList


    dispatch(actionsProductList.performContainerReset())


}

/*
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
 */
export const performSetForecastDealsToCreditProducts = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let forecastDealList = state.user.mrmkmcibCRM.reducerCustomer.forecastDealList

    dispatch(actionsProductList.performSetForecastDealsToCreditProducts(forecastDealList))

}

