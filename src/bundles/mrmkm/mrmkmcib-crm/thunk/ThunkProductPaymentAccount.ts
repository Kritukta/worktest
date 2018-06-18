/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"
import {supParamNames} from 'mrmkmcib-app'

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsProductPaymentAccount from '../actions/ActionsProductPaymentAccount'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'

import {SplitPanelActions} from 'ufs-mobile-platform'


import * as Cache from '../modules/Cache'


/*
 * Thunk dispatched by "ProductPaymentAccount" screen. (Deprecated)Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTab = (index: number, value: Enums.ProductPaymentAccountTab,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performChangeTab(index, value,))


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 */
export const performInputSumMin = (value: number | null, applyFilter: boolean = false) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    dispatch(actionsProductPaymentAccount.performInputSumMin(value))

    if (applyFilter) {

        dispatch (thunkProductPaymentAccount.performFilterApply ())

    }

}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 */
export const performInputSumMax = (value: number | null, applyFilter: boolean = false) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    dispatch(actionsProductPaymentAccount.performInputSumMax(value))

    if (applyFilter) {

        dispatch (thunkProductPaymentAccount.performFilterApply ())
        
    }

}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
 */
export const performPopoverFilterShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performPopoverFilterShow())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
 */
export const performPopoverFilterHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performPopoverFilterHide())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 */
export const performInputOperationType = (value: Enums.OperationType, applyFilter: boolean = false) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    dispatch(actionsProductPaymentAccount.performInputOperationType(value))

    if (applyFilter) {

        dispatch (thunkProductPaymentAccount.performFilterApply ())
        
    }

}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to show popover.
 */
export const performPopoverPeriodTypeShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performPopoverPeriodTypeShow())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk chain used to hide popover.
 */
export const performPopoverPeriodTypeHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performPopoverPeriodTypeHide())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input field value.
 */
export const performInputPeriodType = (value: Enums.PeriodType) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performInputPeriodType(value))


    // Dispatch thunk "navigateToPeriodTypeCustomScreen" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
    if (value == Enums.PeriodType.Custom) {
        dispatch(thunkProductPaymentAccount.navigateToPeriodTypeCustomScreen())
    }

    // Dispatch thunk "operationListFilter" synchronously. 


    dispatch(thunkProductPaymentAccount.operationListFilter())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodStart field.
 */
export const performInputFilterPeriodStart = (value: Date | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performInputFilterPeriodStart(value))


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user input FilterPeriodEnd field.
 */
export const performInputFilterPeriodEnd = (value: Date | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performInputFilterPeriodEnd(value))


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to change filter period.
 */
export const performFilterApply = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performFilterApply())


    // Dispatch thunk "operationListFilter" synchronously. 


    dispatch(thunkProductPaymentAccount.operationListFilter())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset filter period.
 */
export const performFilterReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performFilterReset())


    // Dispatch thunk "operationListFilter" synchronously. 


    dispatch(thunkProductPaymentAccount.operationListFilter())


}

/*
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched to filter operation list.
 */
export const operationListFilter = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.operationListFilter())


}

/*
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user select custom period type.
 */
export const navigateToPeriodTypeCustomScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount




    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentOperationListPeriod.OperationListCustomPeriod,
        util.getNavigationOperationPeriodTypeString(Enums.NavigationAppCRMOperationListFilter.OperationListPeriod)))


    dispatch(actionsProductPaymentAccount.navigateToPeriodTypeCustomScreen())


}

/*
 * Internal thunk used in "ProductPaymentAccount" container. Thunk dispatched on user navigate back.
 */
export const navigatePeriodTypeCustomBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.navigatePeriodTypeCustomBack())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch operation list.
 */
export const callGetOperationList = (isForceRequest: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    let ttl = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().CacheEksPolicyMaxTTL]

    let statusRequestMaxPeriod = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().StatusRequestMaxPeriod])

    if (reducerState.operationListFetching &&
        reducerState.operationList.pollingStatus != Enums.ProductPollingStatus.InProgress) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id

    dispatch(actionsProductPaymentAccount.callGetOperationList())

    dispatch(actionsProductPaymentAccount.callGetOperationListRequest())

    util.call<Models.PaymentAccountProductOperationList, void>(
        util.urlProductPaymentAccount.callGetOperationList(state, reducerState, isForceRequest, ttl, [{tag: Enums.CachePolicy.Default}, {

            tag: Enums.CacheContext.PaymentAccountOperationList,
            contextId: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct &&
                state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct.accountId || ''

        }]),

        (response: Response<Models.PaymentAccountProductOperationList>) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
            if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) {
                return
            }

            dispatch(actionsProductPaymentAccount.callGetOperationListSuccess(response))

            dispatch(thunkProductPaymentAccount.clearOperationListCache ())

            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

            if (reducerState.operationList.pollingStatus == Enums.ProductPollingStatus.InProgress) {

                setTimeout(()=> {
                    state = getState()

                    reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

                    if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) {
                        return
                    }

                    dispatch(thunkProductPaymentAccount.callGetOperationList (false))}, statusRequestMaxPeriod)

            }

            dispatch(thunkProductPaymentAccount.operationListFilter())


        },

        (error: Error) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
            if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) return

            dispatch(actionsProductPaymentAccount.callGetOperationListFailure(error))


        },

        Converters.RESPONSE_PRODUCT_PAYMENT_ACCOUNT_CALL_GET_OPERATION_LIST_TO_PAYMENT_ACCOUNT_PRODUCT_OPERATION_LIST,

        'GET'
    )

}


export const getPaymentAccountCardIndexList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    let reducerPaymentAccount = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct

    if (reducerPaymentAccount &&
        reducerPaymentAccount.paymentAccountProduct &&
        reducerPaymentAccount.paymentAccountProduct.isExistCardIndex) {
        dispatch(thunkProductPaymentAccount.callGetCardIndexList(false))
    }

}
export const performUpdateOperationListResetCache = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct

    dispatch (actionsProductPaymentAccount.performUpdateCardIndexListResetCache())

    dispatch(thunkProductPaymentAccount.clearOperationListCache())

    dispatch(thunkProductPaymentAccount.callGetOperationList(true))

}
export const performUpdateCardIndexListResetCache = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct

    dispatch (actionsProductPaymentAccount.performUpdateCardIndexListResetCache())

    dispatch(thunkProductPaymentAccount.clearCardIndexListCache())

    dispatch(thunkProductPaymentAccount.callGetCardIndexList(true))

}
/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export const callGetCardIndexList = (isForceRequest: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    if (reducerState.cardIndexListFetching &&
        reducerState.cardIndexList.pollingStatus != Enums.ProductPollingStatus.InProgress) {
        return
    }
    let ttl = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().CacheEksPolicyMaxTTL]

    let statusRequestMaxPeriod = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().StatusRequestMaxPeriod])

    let operationId = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id

    dispatch(actionsProductPaymentAccount.callGetCardIndexList())

    dispatch(actionsProductPaymentAccount.callGetCardIndexListRequest())

    util.call<Models.PaymentAccountProductCardIndexList, void>(
        util.urlProductPaymentAccount.callGetCardIndexList(state, reducerState, isForceRequest, ttl, [{tag: Enums.CachePolicy.Default}, {

            tag: Enums.CacheContext.PaymentAccountCardIndexList,
            contextId: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct &&
                state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct.accountId || ''

        }]),

        (response: Response<Models.PaymentAccountProductCardIndexList>) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
            if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) {
                return
            }

            dispatch(actionsProductPaymentAccount.callGetCardIndexListSuccess(response))
            dispatch(thunkProductPaymentAccount.clearCardIndexListCache ())

            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

            if (reducerState.cardIndexList.pollingStatus == Enums.ProductPollingStatus.InProgress) {

                setTimeout(()=>{
                    state = getState()

                    reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

                    if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) {
                        return
                    }

                    dispatch(thunkProductPaymentAccount.callGetCardIndexList (false))

                }, statusRequestMaxPeriod)

            }

        },

        (error: Error) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
            if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) return

            dispatch(actionsProductPaymentAccount.callGetCardIndexListFailure(error))


        },

        Converters.RESPONSE_PRODUCT_PAYMENT_ACCOUNT_CALL_GET_CARD_INDEX_LIST_TO_PAYMENT_ACCOUNT_PRODUCT_CARD_INDEX_LIST,

        'GET'
    )
}

export const clearOperationListCache = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    if ((reducerState.operationList.pollingStatus != Enums.ProductPollingStatus.Success) || (reducerState.operationList.eksErrorList.length > 0)) {
        Cache.sessionResetTag({

            tag: Enums.CacheContext.PaymentAccountOperationList,
            contextId: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct &&
                state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct.accountId || ''

        })
    }

    dispatch (actionsProductPaymentAccount.clearOperationListCache())

}

export const clearCardIndexListCache = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount

    Cache.sessionResetTag({

        tag: Enums.CacheContext.PaymentAccountCardIndexList,
        contextId: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct &&
            state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct.accountId || ''

    })

    dispatch (actionsProductPaymentAccount.clearCardIndexListCache())

}


/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Fetch CardIndex list.
 */
export const callGetProductVspInfo = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount


    if (reducerState.productVspInfoFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id





    dispatch(actionsProductPaymentAccount.callGetProductVspInfo())


    if (!reducerState.productVspInfoFetching) {
        dispatch(actionsProductPaymentAccount.callGetProductVspInfoRequest())

        util.call<Models.PaymentAccountProductVspInfo, void>(
            util.urlProductPaymentAccount.callGetProductVspInfo(state, reducerState, [{tag: Enums.CachePolicy.Default}]),

            (response: Response<Models.PaymentAccountProductVspInfo>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
                if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) return

                dispatch(actionsProductPaymentAccount.callGetProductVspInfoSuccess(response))
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount
                if (state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct.paymentAccountProduct!.id != operationId) return

                dispatch(actionsProductPaymentAccount.callGetProductVspInfoFailure(error))


            },

            Converters.RESPONSE_PRODUCT_PAYMENT_ACCOUNT_CALL_GET_PRODUCT_VSP_INFO_PAYMENT_ACCOUNT_PRODUCT_PRODUCT_VSP_INFO,

            'GET'
        )
    }
}
/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 */
export const navigateToRestrictionListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount



    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_RestrictionList,
        util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard)))


    dispatch(actionsProductPaymentAccount.navigateToRestrictionListScreen())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 */
export const navigateToCardIndexListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount



    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_CardIndexList,
        util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard)))


    dispatch(actionsProductPaymentAccount.navigateToCardIndexListScreen())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 */
export const navigateToTariffScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount



    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_TariffList,
        util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard)))


    dispatch(actionsProductPaymentAccount.navigateToTariffScreen())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 */
export const navigateToVspInfoScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount



    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_VSPService,
        util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard)))


    dispatch(actionsProductPaymentAccount.navigateToVspInfoScreen())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 */
export const navigateToOperationListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount



    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_OperationList,
        util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard)))


    dispatch(actionsProductPaymentAccount.navigateToOperationListScreen())


    // Dispatch thunk "operationListFilter" synchronously. 


    dispatch(thunkProductPaymentAccount.operationListFilter())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to navigate.
 */
export const navigateToDashboardScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount



    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccount_Dashboard,
        util.getNavigationContentProductPaymentAccountCard(Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard)))


    dispatch(actionsProductPaymentAccount.navigateToDashboardScreen())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched on user navigate back to ProductPaymentAccount screen.
 */
export const navigateProductPaymentAccountBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount




    dispatch(SplitPanelActions.popContent(util.getNavigationContentProductPaymentAccountCard(
        Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard
    )))


    dispatch(actionsProductPaymentAccount.navigateProductPaymentAccountBack())


}

/*
 * Thunk dispatched by "ProductPaymentAccount" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductPaymentAccount





    dispatch(actionsProductPaymentAccount.performContainerReset())


}
