/*
 * Created by Burnaev M.U.
 */
import * as _ from 'lodash'
import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"

import {
    EnumsApp,
    Models as ModelsApp,
    performAppOpen,
    navigationExecutor,
    HistoryMobileApp,
    swapAppContext,
    performNavigateBack,
    performNavigationReload,
    performNavigateToEntity,
} from 'mrmkmcib-app'

import {
    Models,
    EnumsCrm,
    Enums as EnumsCrmAll,
} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"
import * as Cache from '../modules/Cache'
import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsAppCRM from '../actions/ActionsAppCRM'
import * as actionsCustomer from '../actions/ActionsCustomer'


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import { navigateToCustomerScreen } from "mrmkmcib-directory";
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'

import {SplitPanelActions} from 'ufs-mobile-platform'

/*
 * Thunk dispatched by "AppCRM" container. Remove cache and execute performRefresh
 */
export const performFlush = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    Cache.sessionResetTag({tag: util.getAppCRMCustomerManagedListRequestRefreshString(Enums.AppCRMCustomerManagedListRequestRefresh.AppCRMCustomerManagedListRequestRefreshEnabled)})
    dispatch(actionsAppCRM.performFlush())
    dispatch(thunkAppCRM.performCustomerListRefresh())
}


export const performRefreshBarHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsAppCRM.performRefreshBarHide())
}

/*
 * Internal thunk used in "AppCRM" container. Thunk chain dispatched to set context parameters.
 */
export const swapContext = (user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary, currentExchangePerson: ModelsScheduler.Person, appBuildVersion: string, appServerUrl: string, appServerPath: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch (actionsAppCRM.swapContext (
        user,
        classifierDictionary,
        currentExchangePerson,
        appBuildVersion,
        appServerUrl,
        appServerPath,
    ))

}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to init CRM mobile application.
 */
export const performApplicationInit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performApplicationInit())

    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch (thunkAppCRM.swapContext (
        state.user.mrmkmcibApp.reducerAuthorization.currentUser,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.classifierDictionary,
        state.user.mrmkmcibScheduler.reducerAppScheduler.currentExchangePerson,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.appBuildVersion,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerUrl,
        state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerPath,
    ))

    dispatch(navigationExecutor(EnumsApp.NavigationStep.Crm_EmptyContainerInited))

    // Dispatch thunk "performCustomerListRefresh" synchronously.
    dispatch(actionsAppCRM.performSearchModeDisable())
    dispatch(actionsAppCRM.performInputSearch(''))
    dispatch(thunkAppCRM.performCustomerListRefresh())

    dispatch(swapAppContext(EnumsApp.App.CRM))

    if (reducerState.isSearchMode == false && reducerState.customerManagedList.data.length != 0) {
        // Для переходов на КК вызываем следующий шаг перехода (см. ThunkAuthorization.ts)
        dispatch(navigationExecutor(EnumsApp.NavigationStep.Crm_ApplicationInited))
    }

}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to reload current list.
 */
export const performCustomerListRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performCustomerListRefresh())


    // Dispatch thunk "performCustomerManagedListRefresh" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerAppCRM
    if (reducerState.isSearchMode == false) {
        dispatch(thunkAppCRM.performCustomerManagedListRefresh())
    }

    // Dispatch thunk "performSearch" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerAppCRM
    if (reducerState.isSearchMode == true) {
        dispatch(thunkAppCRM.performSearch())
    }

}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current organizational structure filter.
 */
export const performInputFilterOrganizationStructure = (value: Enums.FilterOrganizationStructure) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performInputFilterOrganizationStructure(value))


    // Dispatch thunk "validateFilterList" synchronously.


    dispatch(thunkAppCRM.validateFilterList())


    // Dispatch thunk "performCustomerListRefresh" synchronously.


    dispatch(thunkAppCRM.performCustomerListRefresh())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on change current member role filter.
 */
export const performInputFilterMemberRole = (value: Enums.FilterMemberRole) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performInputFilterMemberRole(value))


    // Dispatch thunk "validateFilterList" synchronously.


    dispatch(thunkAppCRM.validateFilterList())


    // Dispatch thunk "performCustomerListRefresh" synchronously.


    dispatch(thunkAppCRM.performCustomerListRefresh())


}

/*
 * Internal thunk used in "AppCRM" container. Thunk dispatched on change filter to disable not valid filter values.
 */
export const validateFilterList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.validateFilterList())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to update customer screen.
 */
export const performCustomerManagedListRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.refreshInProgress) {
        return
    }

    if (reducerState.isVisibleModalAppCRMError) {
        dispatch(actionsAppCRM.performChangeDisplayErrorModalAppCRM(false))
    }




    dispatch(actionsAppCRM.performCustomerManagedListRefresh())


    if (!reducerState.refreshInProgress) {
        dispatch(actionsAppCRM.performCustomerManagedListRefreshExecute())


        // Dispatch thunk "refresh_callGetCustomerManagedList" synchronously.


        dispatch(thunkAppCRM.refresh_callGetCustomerManagedList())





    }


}

export const performCustomerManagedListRefreshSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performCustomerManagedListRefreshSuccess(data))


}

export const performCustomerManagedListRefreshFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performCustomerManagedListRefreshFailure(error))
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep))


}

/*
 * Internal thunk used in "AppCRM" container. Fetch customer list current page.
 */
export const refresh_callGetCustomerManagedList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.customerManagedListFetching) {
        return
    }




    dispatch(actionsAppCRM.refresh_callGetCustomerManagedList())


    if (!reducerState.customerManagedListFetching) {
        dispatch(actionsAppCRM.refresh_callGetCustomerManagedListRequest())

        util.call<Models.CustomerManagedList, void>(
            util.urlAppCRM.refresh_callGetCustomerManagedList(state, reducerState, [{tag: Enums.CachePolicy.Default},{tag: util.getAppCRMCustomerManagedListRequestRefreshString(Enums.AppCRMCustomerManagedListRequestRefresh.AppCRMCustomerManagedListRequestRefreshEnabled)}]),

            (response: Response<Models.CustomerManagedList>) => {

                dispatch(actionsAppCRM.refresh_callGetCustomerManagedListSuccess(response))


                // Dispatch thunk "performCustomerManagedListRefreshSuccess" on fetch succeeded.


                dispatch(thunkAppCRM.performCustomerManagedListRefreshSuccess(true))

                // Для переходов на КК вызываем следующий шаг перехода (см. ThunkAuthorization.ts)
                dispatch(navigationExecutor(EnumsApp.NavigationStep.Crm_ApplicationInited))


            },

            (error: Error) => {

                dispatch(actionsAppCRM.refresh_callGetCustomerManagedListFailure(error))


                // Dispatch thunk "performCustomerManagedListRefreshFailure" on fetch failure.


                dispatch(thunkAppCRM.performCustomerManagedListRefreshFailure(error))


            },

            Converters.RESPONSE_APP_CRM_REFRESH_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 */
export const performCustomerManagedListAppend = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.appendInProgress) {
        return
    }




    dispatch(actionsAppCRM.performCustomerManagedListAppend())


    if (!reducerState.appendInProgress) {
        dispatch(actionsAppCRM.performCustomerManagedListAppendExecute())


        // Dispatch thunk "append_callGetCustomerManagedList" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerAppCRM

        if (reducerState.customerManagedList.isCompleted == false) {
            dispatch(thunkAppCRM.append_callGetCustomerManagedList())
        }

        // Dispatch thunk "performCustomerManagedListAppendSuccess" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerAppCRM

        if (reducerState.customerManagedList.isCompleted == true) {
            dispatch(thunkAppCRM.performCustomerManagedListAppendSuccess(true))
        }





    }


}

export const performCustomerManagedListAppendSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performCustomerManagedListAppendSuccess(data))


}

export const performCustomerManagedListAppendFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performCustomerManagedListAppendFailure(error))


}

/*
 * Thunk dispatched by "AppCRM" screen. Fetch customer list current page.
 */
export const append_callGetCustomerManagedList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.customerManagedListPageFetching) {
        return
    }




    dispatch(actionsAppCRM.append_callGetCustomerManagedList())


    if (!reducerState.customerManagedListPageFetching) {
        dispatch(actionsAppCRM.append_callGetCustomerManagedListRequest())

        util.call<Models.CustomerManagedListPage, void>(
            util.urlAppCRM.append_callGetCustomerManagedList(state, reducerState, [{tag: Enums.CachePolicy.Default}]),

            (response: Response<Models.CustomerManagedListPage>) => {

                dispatch(actionsAppCRM.append_callGetCustomerManagedListSuccess(response))


                // Dispatch thunk "append_customerManagedListConcat" on fetch succeeded.


                dispatch(thunkAppCRM.append_customerManagedListConcat())

                // step
                dispatch(navigationExecutor(EnumsApp.NavigationStep.CustomersList_Appended))


            },

            (error: Error) => {

                dispatch(actionsAppCRM.append_callGetCustomerManagedListFailure(error))


                // Dispatch thunk "performCustomerManagedListAppendFailure" on fetch failure.


                dispatch(thunkAppCRM.performCustomerManagedListAppendFailure(error))

                //step
                dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке следующей страницы списка клиентов'))


            },

            Converters.RESPONSE_APP_CRM_APPEND_CALL_GET_CUSTOMER_MANAGED_LIST_TO_CUSTOMER_MANAGED_LIST_PAGE,

            'GET'
        )
    }
}

/*
 * Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer list.
 */
export const append_customerManagedListConcat = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.append_customerManagedListConcat())


    // Dispatch thunk "performCustomerManagedListAppendSuccess" synchronously.


    dispatch(thunkAppCRM.performCustomerManagedListAppendSuccess(true))


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to enter search mode
 */
export const performSearchModeEnable = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performSearchModeEnable())


    // Dispatch thunk "performSearchReset" synchronously.


    dispatch(thunkAppCRM.performSearchReset())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to exit search mode
 */
export const performSearchModeDisable = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performSearchModeDisable())


    // Dispatch thunk "performSearchReset" synchronously.


    dispatch(thunkAppCRM.performSearchReset())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performInputSearch(value))

}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to reset search parameters.
 */
export const performSearchReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performSearchReset())


    // Dispatch thunk "performCustomerSearchListReset" synchronously.


    dispatch(thunkAppCRM.performCustomerSearchListReset())


}

/*
 * Internal thunk used in "AppCRM" container. Thunk chain used to reset search parameters.
 */
export const performCustomerSearchListReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performCustomerSearchListReset())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to perform search query.
 */
export const performSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.searchInProgress) {
        return
    }

    if (reducerState.isVisibleModalAppCRMError) {
        dispatch(actionsAppCRM.performChangeDisplayErrorModalAppCRM(false))
    }




    dispatch(actionsAppCRM.performSearch())


    if (!reducerState.searchInProgress) {
        dispatch(actionsAppCRM.performSearchExecute())


        // Dispatch thunk "performCustomerSearchListReset" synchronously.


        dispatch(thunkAppCRM.performCustomerSearchListReset())


        // Dispatch thunk "search_validateSearch" synchronously.


        dispatch(thunkAppCRM.search_validateSearch())





    }


}

export const performSearchSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performSearchSuccess(data))


}

export const performSearchFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performSearchFailure(error))


}

/*
 * Internal thunk used in "AppCRM" container. Thunk used to perform search query validation and search type determination.
 */
export const search_validateSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.search_validateSearch())


    // Dispatch thunk "performSearchFailure" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerAppCRM
    if (reducerState.isSearchError == true) {
        dispatch(thunkAppCRM.performSearchFailure({
            type: Enums.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }))
    }

    // Dispatch thunk "search_callGetCustomerSearchList" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerAppCRM
    if (reducerState.isSearchError == false) {
        dispatch(thunkAppCRM.search_callGetCustomerSearchList())
    }

}

/*
 * Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 */
export const search_callGetCustomerSearchList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    if (reducerState.customerSearchListFetching) {
        return
    }

    dispatch(actionsAppCRM.search_callGetCustomerSearchList())

    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsAppCRM.search_callGetCustomerSearchListRequest())

        util.call<Models.CustomerList, void>(

            util.urlAppCRM.search_callGetCustomerSearchList(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<Models.CustomerList>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerAppCRM
                // check - if we didn't cancel the search
                if (reducerState.searchInProgress === true) {
                    if (_.isEmpty(response.data.data) && reducerState.customerSearchType === EnumsCrm.CustomerSearchType.Account) {
                        // Если поиск по маске AccountId не дал результатов
                        let searchByIdError: Error = {
                            type: Enums.ErrorType.Unknown,
                            message: 'Ничего не найдено по ID организации CRM',
                            code: '',
                            comment: 'Ничего не найдено по ID организации CRM'
                        }
                        dispatch(thunkAppCRM.performSearchTypeChange(EnumsCrm.CustomerSearchType.Name))
                        dispatch(actionsAppCRM.search_callGetCustomerSearchListFailure(searchByIdError))
                        dispatch(thunkAppCRM.performSearchFailure(searchByIdError))
                        dispatch(thunkAppCRM.search_callGetCustomerSearchList())
                    } else if (_.isEmpty(response.data.data)) {
                        // if response body empty => Dispatch thunk "performSearchFailure" on fetch failure.
                        const searchError = {
                            type: Enums.ErrorType.Unknown,
                            code: '',
                            message: 'Проверьте корректность запроса или выставленные фильтры.',
                            comment: 'Ничего не найдено.',
                        }
                        dispatch(actionsAppCRM.search_callGetCustomerSearchListFailure(searchError))
                        // Dispatch thunk "performSearchFailure" on fetch failure.
                        dispatch(thunkAppCRM.performSearchFailure(searchError))
                        return
                    } else {
                        // if response body not empty
                        dispatch(actionsAppCRM.search_callGetCustomerSearchListSuccess(response))
                        // Dispatch thunk "performSearchSuccess" on fetch succeeded.
                        dispatch(thunkAppCRM.performSearchSuccess(true))
                    }
                }
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerAppCRM
                // check - if we didn't cancel the search
                if (reducerState.searchInProgress === true) {
                    dispatch(actionsAppCRM.search_callGetCustomerSearchListFailure(error))
                    // Dispatch thunk "performSearchFailure" on fetch failure.
                    dispatch(thunkAppCRM.performSearchFailure(error))
                }
            },

            Converters.RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer search list.
 */
export const performCustomerSearchListAppend = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.searchAppendInProgress) {
        return
    }




    dispatch(actionsAppCRM.performCustomerSearchListAppend())


    if (!reducerState.searchAppendInProgress) {
        dispatch(actionsAppCRM.performCustomerSearchListAppendExecute())


        // Dispatch thunk "searchAppend_callGetCustomerSearchListPage" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerAppCRM

        if (reducerState.customerSearchList.isCompleted == false) {
            dispatch(thunkAppCRM.searchAppend_callGetCustomerSearchListPage())
        }

        // Dispatch thunk "performCustomerSearchListAppendSuccess" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerAppCRM

        if (reducerState.customerSearchList.isCompleted == true) {
            dispatch(thunkAppCRM.performCustomerSearchListAppendSuccess(true))
        }





    }


}

export const performCustomerSearchListAppendSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performCustomerSearchListAppendSuccess(data))


}

export const performCustomerSearchListAppendFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performCustomerSearchListAppendFailure(error))


}

/*
 * Internal thunk used in "AppCRM" container. Fetch customer list current page with search parameters.
 */
export const searchAppend_callGetCustomerSearchListPage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM


    if (reducerState.customerSearchListPageFetching) {
        return
    }




    dispatch(actionsAppCRM.searchAppend_callGetCustomerSearchListPage())


    if (!reducerState.customerSearchListPageFetching) {
        dispatch(actionsAppCRM.searchAppend_callGetCustomerSearchListPageRequest())

        util.call<Models.CustomerListPage, void>(
            util.urlAppCRM.searchAppend_callGetCustomerSearchListPage(state, reducerState, [{tag: Enums.CachePolicy.Default}]),

            (response: Response<Models.CustomerListPage>) => {

                dispatch(actionsAppCRM.searchAppend_callGetCustomerSearchListPageSuccess(response))


                // Dispatch thunk "searchAppend_customerSearchListConcat" on fetch succeeded.


                dispatch(thunkAppCRM.searchAppend_customerSearchListConcat())


            },

            (error: Error) => {

                dispatch(actionsAppCRM.searchAppend_callGetCustomerSearchListPageFailure(error))


                // Dispatch thunk "performCustomerSearchListAppendFailure" on fetch failure.


                dispatch(thunkAppCRM.performCustomerSearchListAppendFailure(error))


            },

            Converters.RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE,

            'GET'
        )
    }
}

/*
 * Internal thunk used in "AppCRM" container. Thunk chain used to concat next page and append customer search list.
 */
export const searchAppend_customerSearchListConcat = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.searchAppend_customerSearchListConcat())


    // Dispatch thunk "performCustomerSearchListAppendSuccess" synchronously.


    dispatch(thunkAppCRM.performCustomerSearchListAppendSuccess(true))


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open customer screen.
 */
export const performCustomerOpenExecute = (customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer?: Enums.ShowCustomer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    if (customerMode != Enums.CustomerMode.SameType && !reducerState.customerOpenInProgress) {
        // Open CRM mobile application.
        dispatch(performAppOpen(EnumsApp.App.CRM))
    }
    //dispatch(performApplicationInit())
    dispatch(actionsAppCRM.performCustomerOpen(customer.id))
    // Dispatch thunk "navigateToCustomerScreen" synchronously.
    dispatch(thunkCustomer.navigateToCustomerScreen(customer, customerMode, showCustomer || Enums.ShowCustomer.Show))
}


export const performCustomerOpenOnce = (customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    if (reducerState.customerOpenInProgress || state.splitPanels.AppCRM && state.splitPanels.AppCRM.contentScenes[0] == Enums.NavigationContentAppCrm.AppCRM_Customer) {
        return
    }

    dispatch(thunkAppCRM.customerOpenInProgress())

    dispatch(thunkAppCRM.performNavigateToCustomerScreen(customer, customerMode, showCustomer))

}

export const customerOpenInProgress = () => (dispatch: Function): void => {
    dispatch(actionsAppCRM.performSetCustomerOpenInProgress(true))
}

export const resetCustomerOpenInProgress = () => (dispatch: Function): void => {
    dispatch(actionsAppCRM.performSetCustomerOpenInProgress(false))
}

export const performCustomerOpen = (customerId: string, customerMode?: Enums.CustomerMode) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(performCustomerOpenExecute({...defaultValues.Customer, id: customerId}, customerMode || Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
}

export const performCustomerPassBy = (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(performCustomerOpenExecute({...defaultValues.Customer, id: customerId}, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Hide))
}

const performCustomerInnerOpenExecute = (customerId: string, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM
    dispatch(actionsAppCRM.performCustomerOpen(customerId))
    dispatch(thunkCustomer.navigateToCustomerScreen({...defaultValues.Customer, id: customerId}, customerMode, showCustomer))
}

export const performCustomerInnerOpen = (customerId: string, customerMode?: Enums.CustomerMode) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(performCustomerInnerOpenExecute(customerId, customerMode || Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
}

export const performCustomerInnerPassBy = (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(performCustomerInnerOpenExecute(customerId, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Hide))
}

export const performCustomerOpenWithResetPanel = (customerId: string, customerMode?: Enums.CustomerMode) => (dispatch: Function): void => {
    dispatch(SplitPanelActions.resetSplitPanel(
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)
    ))
    dispatch(performNavigateToEntity({...defaultValues.NavigateToEntity,
        customerMode: customerMode || Enums.CustomerMode.CommonBack,
        navigationType: EnumsApp.NavigationType.Customer,
        customer: {
            ...defaultValues.Customer,
            id: customerId
        }}))
}

/*
 * Thunk dispatched by "ViewAppCRM" screen. Fetch show/hide error model activity .
 */
export const performChangeDisplayErrorModalAppCRM = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsAppCRM.performChangeDisplayErrorModalAppCRM(false))
}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open GSZ screen.
 */
export const performGszOpen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM
    let reducerCustomerState = state.user.mrmkmcibCRM.reducerCustomer

    let currentCustomerManagedId = reducerCustomerState.currentCustomerManaged.id
    let currentCustomerId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomer.id

    let currentCustomerManagedGszId = reducerCustomerState.currentCustomerManaged.gsz ?
        reducerCustomerState.currentCustomerManaged.gsz.id : ''
    let currentCustomerGszId = reducerCustomerState.currentCustomer.gsz ?
        reducerCustomerState.currentCustomer.gsz.id : ''

    let navigationGszId = state.user.mrmkmcibApp.reducerAuthorization.navigateToEntityData.gszId ?
        state.user.mrmkmcibApp.reducerAuthorization.navigateToEntityData.gszId : ''

    let gszId = ''
    if (currentCustomerManagedId) {
        gszId = currentCustomerManagedGszId
    } else if (currentCustomerId) {
        gszId = currentCustomerGszId
    } else if (navigationGszId) {
        gszId = navigationGszId
    }

    if (gszId) {

        // Open CRM mobile application.
        dispatch(performAppOpen(EnumsApp.App.CRM))


        dispatch(actionsAppCRM.performGszOpen(gszId))


        // Dispatch thunk "navigateToGszScreen" synchronously.


        dispatch(thunkGSZ.navigateToGszScreen(gszId))


        dispatch(thunkGszActivityInclude.performContainerReset())
        dispatch(thunkGszActivityExclude.performContainerReset())

        dispatch(SplitPanelActions.popAccessory(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)))

    }

}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to open Deal screen.
 */
export const performDealOpen = (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean, customerId?: string | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performDealOpen(dealId))

    // Dispatch thunk "navigateToDealScreen" synchronously.
    dispatch(thunkDeal.navigateToDealScreen(dealId, dealMode, isEditDealEnable, customerId))
}

export const performProductOpen = (
    productId: string,
    productType: Enums.ProductType,
    customer: Models.Customer,
    eksId: string
) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    let getProductFromPushData = {
        productId,
        productType,
        customerId: customer.id,
        eksId,
        isActive: true,
        isLast: false,
    }

    let customerManaged = {
        ...ModelState.defaultValues.CustomerManaged,
        id: customer.id,
        name: customer.name,
    }

    dispatch(actionsCustomer.customer_openCustomerManaged(customerManaged))

    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_Product, util.getNavigationString(Enums.Navigation.AppCRM)))
    dispatch(thunkCustomer.performGetProductFromPush(getProductFromPushData))





}



/*
 * Thunk dispatched by "AppCRM" screen. Thunk used to navigate back in CRM mobile application.
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)))

    dispatch(actionsAppCRM.navigateBack())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM





    dispatch(actionsAppCRM.performContainerReset())


}

/*
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to change searchType value in state.
 */
export const performSearchTypeChange = (customerSearchType: EnumsCrmAll.CustomerSearchType) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    dispatch(actionsAppCRM.performSearchTypeChange(customerSearchType))
}

export const performCustomerOpenFromPush = (customerId: string, customerMode?: Enums.CustomerMode) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(performCustomerOpenFromPushExecute(customerId, customerMode || Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
}

const performCustomerOpenFromPushExecute = (customerId: string, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(thunkCustomer.navigateToCustomerScreenFromPush())
}

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to show loader on CRM page.
 *
 */
export const navigationLoaderAppCRMShow = () => (dispatch: Function): void => {
    dispatch(actionsAppCRM.navigationLoaderAppCRMShow())
}

/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide loader on CRM page.
 *
 */
export const navigationLoaderAppCRMHide = () => (dispatch: Function): void => {
    dispatch(actionsAppCRM.navigationLoaderAppCRMHide())
}

/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 *
 */
export const performCustomerListAppend = () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAppCRM

    if (reducerState.isSearchMode) {
        dispatch(performCustomerSearchListAppend())
    } else {
        dispatch(performCustomerManagedListAppend())
    }
}

export const performNavigateBackFromPush = () => (dispatch: Function): void => {
    dispatch(performNavigateBack())
}

export const performNavigationReloadPush = () => (dispatch: Function): void => {
    dispatch(performNavigationReload())
}

export const performNavigateToCustomerScreen = (customer: Models.Customer, customerMode: Enums.CustomerMode, showCustomer: Enums.ShowCustomer) => (dispatch: Function): void => {

    dispatch(actionsAppCRM.performCustomerOpen(customer.id))
    dispatch(thunkCustomer.navigateToCustomerScreen(customer, customerMode, showCustomer || Enums.ShowCustomer.Show))

}
