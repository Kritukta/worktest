/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {Models as ModelsApp, navigationExecutor, EnumsApp, supParamNames} from 'mrmkmcib-app'
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"

import * as Cache from '../modules/Cache'
import * as Converters from "../models/Converters"
import {SplitPanelActions} from 'ufs-mobile-platform'
import * as util from '../common/Util'

import * as actionsDealList from '../actions/ActionsDealList'
import * as thunkDealList from '../thunk/ThunkDealList'


/*
 * Thunk dispatched by "AppCRM" container. Remove cache and execute performRefresh
 */
export const performFlush = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    Cache.sessionResetTag({tag: util.getDealListRequestRefreshString(Enums.DealListRequestRefresh.DealListRequestRefreshEnabled)})
    dispatch(actionsDealList.performFlush())
    dispatch(performDealListRefresh())
}

export const getSupParameters = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let param = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration

    if(param && (param[supParamNames().DealSalesMethod] ||
        param[supParamNames().DealApprovedStatusList] ||
        param[supParamNames().DealSalesMethodRoadMapStandard] ||
        param[supParamNames().DealSalesMethodRoadMapCredit])){

        dispatch(actionsDealList.setSupParameterDeal({
            DealSalesMethod: param[supParamNames().DealSalesMethod],
            DealApprovedStatusList: param[supParamNames().DealApprovedStatusList],
            DealSalesMethodRoadMapStandard: param[supParamNames().DealSalesMethodRoadMapStandard],
            DealSalesMethodRoadMapCredit: param[supParamNames().DealSalesMethodRoadMapCredit],
        }))
    }

}

export const performFilterSelectStage = (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(performInputFilterValue({
        ...filterData,
        stage: value
    }, currentTab))
}

export const performFilterSelectRole = (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(performInputFilterValue({
        ...filterData,
        role: value
    }, currentTab))

}

export const performFilterSelectCurrency = (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(performInputFilterValue({
        ...filterData,
        currency: value
    }, currentTab))

}

export const performFilterSelectDateFrom = (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: Date) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    value.setHours(0,0,0,0)

    dispatch(performInputFilterValue({
        ...filterData,
        dateFrom: value
    }, currentTab))

}


export const performFilterSelectDateTo = (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: Date) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    value.setHours(0,0,0,0)

    dispatch(performInputFilterValue({
        ...filterData,
        dateTo: value
    }, currentTab))

}

/*
 * Thunk dispatched by "DealList" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTab = (index: number, value: Enums.DealListTab,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.performChangeTab(index, value,))


}


/*
 * Thunk dispatched by "DealList" screen. Thunk chain used to show popover.
 */
export const performPopoverFilterShow = (currentTab:Enums.DealListTab) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.performPopoverFilterShow(currentTab))


}

/*
 * Thunk dispatched by "DealList" screen. Thunk chain used to hide popover.
 */
export const performPopoverFilterHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.performPopoverFilterHide())


}

/*
 * Thunk dispatched by "DealList" screen. Thunk dispatched to change filter period.
 */
export const performFilterApply = (currentTab:Enums.DealListTab) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.performFilterApply(currentTab))

    dispatch(performDealListRefresh())

}

/*
 * Thunk dispatched by "DealList" screen. Thunk dispatched to reset filter period.
 */
export const performFilterReset = (currentTab:Enums.DealListTab) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.performFilterReset(currentTab))

    dispatch(performDealListRefresh())

}

export const filterPopoverNavigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState ()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList

    dispatch(actionsDealList.filterPopoverNavigateBack())

    dispatch(SplitPanelActions.popContent(util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

export const performFilterSelectProduct = ( currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    const products = filterData.products || {data:[]}

    dispatch(performInputFilterValue({
        ...filterData,
        products: {data: [ ...products.data, value]}
    }, currentTab))
}

export const performFilterUnSelectProduct = ( currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    const products = (filterData.products || {data:[]}).data.reduce(
        (acc:Array<ModelsApp.Classifier>,e:ModelsApp.Classifier) => {
            if ( value.code !== e.code ) {
                acc.push(e)
            }
            return acc
        }, []
    )

    dispatch(performInputFilterValue({
        ...filterData,
        products: {data: products}
    }, currentTab))
}

export const performInputFilterValue = (value: Models.DealListFilter, currentTab:Enums.DealListTab) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.performInputFilterValue(value, currentTab))
}

export const filterPopoverNavigateToStage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.filterPopoverNavigateToStage())


    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationPopoverContentDealListFilters.DealListFilters_Stage,
        util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

export const filterPopoverNavigateToRole = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState ()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.filterPopoverNavigateToRole())


    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationPopoverContentDealListFilters.DealListFilters_Role,
        util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

export const filterPopoverNavigateToProduct = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.filterPopoverNavigateToProduct())



    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationPopoverContentDealListFilters.DealListFilters_Product,
        util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

export const filterPopoverNavigateToCurrency = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.filterPopoverNavigateToCurrency())



    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationPopoverContentDealListFilters.DealListFilters_Currency,
        util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

export const filterPopoverNavigateToDateFrom = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.filterPopoverNavigateToDateFrom())


    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationPopoverContentDealListFilters.DealListFilters_DateFrom,
        util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

export const filterPopoverNavigateToDateTo = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.filterPopoverNavigateToDateTo())


    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationPopoverContentDealListFilters.DealListFilters_DateTo,
        util.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)))


}

/*
 * Thunk dispatched by "DealList" screen. Thunk chain used to load all pages for deal list.
 */
export const performDealListRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    if (reducerState.refreshInProgress) {
        return
    }


    dispatch(actionsDealList.performDealListRefresh())


    if (!reducerState.refreshInProgress) {
        dispatch(actionsDealList.performDealListRefreshExecute())


        // Dispatch thunk "refresh_callGetDealList" synchronously. 
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerDealList

        if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != '') {
            dispatch(thunkDealList.refresh_callGetDealList())
        }

        // Dispatch thunk "performDealListRefreshFailure" synchronously. 
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerDealList

        if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id == '') {
            dispatch(thunkDealList.performDealListRefreshFailure({
                type: Enums.ErrorType.Unknown,
                message: 'Просмотр списка сделок не возможен',
                code: '',
                comment: 'Текущий пользователь не найден в команде клиента.'
            }))
        }


    }


}

export const performDealListRefreshSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()

    dispatch(actionsDealList.performDealListRefreshSuccess(data))


    dispatch(thunkDealList.dealListReduce(state.user.mrmkmcibCRM.reducerAppCRM.currentUser))
    dispatch(thunkDealList.catchDealListReady())

}



export const performDealListRefreshFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsDealList.performDealListRefreshFailure(error))
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep))
}

/*
 * Internal thunk used in "DealList" container. Fetch activity list current page.
 */
export const refresh_callGetDealList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    if (reducerState.dealListPageFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id


    dispatch(actionsDealList.refresh_callGetDealList())


    if (!reducerState.dealListPageFetching) {
        dispatch(actionsDealList.refresh_callGetDealListRequest())

        util.call<Models.DealListPage, void>(
            util.urlDealList.refresh_callGetDealList(state, reducerState, [{tag: Enums.CachePolicy.Default},
                            {tag: util.getDealListRequestRefreshString(Enums.DealListRequestRefresh.DealListRequestRefreshEnabled)}]),

            (response: Response<Models.DealListPage>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerDealList
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(thunkDealList.getSupParameters())
                dispatch(actionsDealList.refresh_callGetDealListSuccess(response))


                // Dispatch thunk "refresh_dealListConcat" on fetch succeeded. 


                dispatch(thunkDealList.refresh_dealListConcat())

            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerDealList
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsDealList.refresh_callGetDealListFailure(error))


                // Dispatch thunk "performDealListRefreshFailure" on fetch failure. 


                dispatch(thunkDealList.performDealListRefreshFailure(error))

                //step
                dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке сделок клиента'))


            },

            Converters.RESPONSE_DEAL_LIST_REFRESH_CALL_GET_DEAL_LIST_TO_DEAL_LIST_PAGE(
                state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod,
                state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
                state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
                state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged),

            'GET'
        )
    }
}

/*
 * Internal thunk used in "DealList" container. Thunk chain used to concat next page and append deal list.
 */
export const refresh_dealListConcat = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList


    dispatch(actionsDealList.refresh_dealListConcat())


    // Dispatch thunk "performDealListRefreshSuccess" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerDealList
    if (reducerState.dealListPage.isLast == true) {
        dispatch(thunkDealList.performDealListRefreshSuccess(true))
    }

    // Dispatch thunk "refresh_callGetDealList" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerDealList
    if (reducerState.dealListPage.isLast == false && reducerState.dealListPageError == null) {
        dispatch(thunkDealList.refresh_callGetDealList())
    }

}

/*
 * Internal thunk used in "DealList" container. Perform filter deal list and count all categories.
 */
export const dealListReduce = (currentUser: ModelsApp.Employee) => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    const state: ModelState.IRootState = getState()

    const status: Models.DealListInfo = util.dealCreateStatus(
        state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    )

    dispatch(actionsDealList.dealListReduce(
        currentUser,
        status.infoMessage,
        status.isCreateDealEnable,
        status.isEditDealEnable,
        status.isButtonCreateVisible
    ))
}

/*
 * Thunk dispatched by "DealList" screen. Thunk chain used to create new deal.
 */
export const performDealCreate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.performDealCreate())


}

/*
 * Thunk dispatched by "DealList" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsDealList.performContainerReset())


}

export const startRowAnimation = (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsDealList.startRowAnimation(value))
}

export const catchDealListReady = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealList
    if(reducerState.dealListPageFetching == false) {
        dispatch(navigationExecutor(EnumsApp.NavigationStep.Deal_TabOpenSuccess))
    }
}
