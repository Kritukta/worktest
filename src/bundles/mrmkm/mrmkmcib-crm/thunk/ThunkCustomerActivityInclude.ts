/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models, 
    appCrmSwapContext,
    performMemberListRefresh,
    performAgentListContainerReset,
    performMemberListContainerReset,
    EnumsCrm,
} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsCustomerActivityInclude from '../actions/ActionsCustomerActivityInclude'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkMemberList from '../thunk/ThunkMemberList'

import {SplitPanelActions} from 'ufs-mobile-platform'
import {Models as ModelsScheduler, EnumsScheduler} from "mrmkmcib-scheduler"



/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to show customer picker screen.
 */
export const navigateToCustomerPickerScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude




    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoExcludeIncludeView.IncludeExclude_ClientsSearch, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View)))


    dispatch(actionsCustomerActivityInclude.navigateToCustomerPickerScreen())


}

/*
 * Thunk dispatched by "Activity" screen. Thunk dispatched on user tap field value.
 */
export const navigateToMemberListScreenPage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    let reducerMemberList = state.user.mrmkmcibCRM.reducerMemberList.memberList

    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoExcludeIncludeView.IncludeExclude_MemberList,
        util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View)))

        dispatch(thunkMemberList.performMemberListRefresh(            
            {...defaultValues.Activity,memberList: reducerMemberList},
            defaultValues.Deal,
            state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
            defaultValues.Gsz,
            defaultValues.Agent,
            true,
            Enums.MemberListMode.CustomerActivityRemoveOrganization))

    dispatch(actionsCustomerActivityInclude.navigateToMemberListScreenPage())
}

export const swapMemberList = () => (dispatch: Function, getState: () => ModelState.IRootState) : void => {
    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View)))
}
/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input switch changed.
 */
export const performInputSearchManagedOnly = (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude





    dispatch(actionsCustomerActivityInclude.performInputSearchManagedOnly(value))


    // Dispatch thunk "performInputSearch" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(thunkCustomerActivityInclude.performInputSearch(reducerState.inputSearch))


}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude





    dispatch(actionsCustomerActivityInclude.performInputSearch(value))


    // Dispatch thunk "performSearch" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
    let lastInput = reducerState.inputSearch;
    setTimeout(() => {
        if (lastInput == getState().user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearch) {
            dispatch(thunkCustomerActivityInclude.performSearch())
        }
    }, 2000)

}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to reset search parameters.
 */
export const performSearchReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude





    dispatch(actionsCustomerActivityInclude.performSearchReset())


}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
 */
export const performSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    if (reducerState.searchInProgress) {
        return
    }




    dispatch(actionsCustomerActivityInclude.performSearch())


    if (!reducerState.searchInProgress) {
        dispatch(actionsCustomerActivityInclude.performSearchExecute())


        // Dispatch thunk "search_validateSearch" synchronously. 


        dispatch(thunkCustomerActivityInclude.search_validateSearch())




        /* TODO Perform JS Promise and handle success and failure or dispatch performSearchSuccess and performSearchFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkCustomerActivityInclude.performSearchSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkCustomerActivityInclude.performSearchFailure(null)) */


    }


}

export const performSearchSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(actionsCustomerActivityInclude.performSearchSuccess(data))


}

export const performSearchFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(actionsCustomerActivityInclude.performSearchFailure(error))


}

/*
 * Internal thunk used in "CustomerActivityInclude" container. Thunk used to perform search query validation and search type determination.
 */
export const search_validateSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude





    dispatch(actionsCustomerActivityInclude.search_validateSearch())


    // Dispatch thunk "performSearchFailure" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
    if (reducerState.isSearchError == true) {
        dispatch(thunkCustomerActivityInclude.performSearchFailure({
            type: Enums.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }))
    }

    // Dispatch thunk "search_callGetCustomerSearchList" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
    if (reducerState.isSearchError == false) {
        dispatch(thunkCustomerActivityInclude.search_callGetCustomerSearchList())
    }

}

/*
 * Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
 */
export const search_callGetCustomerSearchList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    if (reducerState.customerSearchListFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id





    dispatch(actionsCustomerActivityInclude.search_callGetCustomerSearchList())


    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsCustomerActivityInclude.search_callGetCustomerSearchListRequest())

        util.call<Models.CustomerList, void>(
            util.urlCustomerActivityInclude.search_callGetCustomerSearchList(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<Models.CustomerList>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsCustomerActivityInclude.search_callGetCustomerSearchListSuccess(response))


                // Dispatch thunk "performSearchSuccess" on fetch succeeded. 


                dispatch(thunkCustomerActivityInclude.performSearchSuccess(true))


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsCustomerActivityInclude.search_callGetCustomerSearchListFailure(error))

                dispatch(actionsCustomerActivityInclude.performChangeDisplayErrorModalWindow(true))
                // Dispatch thunk "performSearchFailure" on fetch failure. 


                dispatch(thunkCustomerActivityInclude.performSearchFailure(error))


            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Customer field.
 */
export const performInputCustomer = (customer: Models.Customer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude





    dispatch(actionsCustomerActivityInclude.performInputCustomer(customer))


    // Dispatch thunk "navigateBack" synchronously. 


    dispatch(thunkCustomerActivityInclude.navigateBack())


    // Dispatch thunk "callGetCustomer" synchronously.
    state = getState()
    dispatch(thunkCustomerActivityInclude.performValidate(state.user.mrmkmcibCRM.reducerAppCRM.currentUser, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, state.user.mrmkmcibCRM.reducerCustomer.currentCustomer))

    dispatch(thunkCustomerActivityInclude.callGetCustomer())


}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
 */
export const callGetCustomer = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    if (reducerState.inputCustomerFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id





    dispatch(actionsCustomerActivityInclude.callGetCustomer())


    if (!reducerState.inputCustomerFetching) {
        dispatch(actionsCustomerActivityInclude.callGetCustomerRequest())

        util.call<Models.Customer, void>(
            util.urlCustomerActivityInclude.callGetCustomer(state, reducerState, [{tag: Enums.CachePolicy.Default}]),

            (response: Response<Models.Customer>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsCustomerActivityInclude.callGetCustomerSuccess(response))


                // Dispatch thunk "navigateBack" on fetch succeeded. 


                dispatch(thunkCustomerActivityInclude.navigateBack())


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsCustomerActivityInclude.callGetCustomerFailure(error))

                dispatch(actionsCustomerActivityInclude.performChangeDisplayErrorModalWindow(true))

            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_CALL_GET_CUSTOMER_TO_CUSTOMER,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Comment field.
 */
export const performInputComment = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    dispatch(actionsCustomerActivityInclude.performInputComment(value))



}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    dispatch(thunkCustomerEditor.closeCustomerActivityPanel())

    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)))

    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)))
    
    dispatch(actionsCustomerActivityInclude.performCancel())

    dispatch(thunkMemberList.performContainerReset())
    
    dispatch(performContainerReset())


}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
 */
export const performSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    if (reducerState.activitySaveInProgress) {
        return
    }




    dispatch(actionsCustomerActivityInclude.performSave())


    if (!reducerState.activitySaveInProgress) {
        dispatch(actionsCustomerActivityInclude.performSaveExecute())


        // Dispatch thunk "performValidate" synchronously. 
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


        dispatch(thunkCustomerActivityInclude.performValidate(state.user.mrmkmcibCRM.reducerAppCRM.currentUser, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, state.user.mrmkmcibCRM.reducerCustomer.currentCustomer))




        /* TODO Perform JS Promise and handle success and failure or dispatch performSaveSuccess and performSaveFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkCustomerActivityInclude.performSaveSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkCustomerActivityInclude.performSaveFailure(null)) */


    }


}

export const performSaveSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(actionsCustomerActivityInclude.performSaveSuccess(data))


    // Dispatch thunk "closeCustomerActivityPanel" on success. 


    dispatch(thunkCustomerEditor.closeCustomerActivityPanel())

    dispatch(thunkCustomerActivityInclude.performContainerReset())

}

export const performSaveFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(actionsCustomerActivityInclude.performSaveFailure(error))


}

/*
 * Thunk dispatched by "Activity" screen. Fetch show/hide error model activity .
 */
export const performChangeDisplayErrorModalWindow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibScheduler.reducerActivity

    dispatch(actionsCustomerActivityInclude.performChangeDisplayErrorModalWindow(false))

}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
 */
export const callPostCustomerActivityIncludeCreate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude


    if (reducerState.activityIncludeCreateFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id





    dispatch(actionsCustomerActivityInclude.callPostCustomerActivityIncludeCreate())


    if (!reducerState.activityIncludeCreateFetching) {
        dispatch(actionsCustomerActivityInclude.callPostCustomerActivityIncludeCreateRequest())

        util.call<boolean, Models.CustomerActivityIncludeCreateRequest>(
            util.urlCustomerActivityInclude.callPostCustomerActivityIncludeCreate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsCustomerActivityInclude.callPostCustomerActivityIncludeCreateSuccess(response))


                // Dispatch thunk "performSaveSuccess" on fetch succeeded. 


                dispatch(thunkCustomerActivityInclude.performSaveSuccess(true))


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsCustomerActivityInclude.callPostCustomerActivityIncludeCreateFailure(error))

                dispatch(actionsCustomerActivityInclude.performChangeDisplayErrorModalWindow(true))
                // Dispatch thunk "performSaveFailure" on fetch failure. 


                dispatch(thunkCustomerActivityInclude.performSaveFailure(error))


            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_TO_BOOLEAN,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid},

            Converters.REQUEST_CUSTOMER_ACTIVITY_INCLUDE_CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FROM_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST,

            {
                operationUuid: reducerState.operationUuid,
                parentAccountId: reducerState.inputCustomer.id,
                comment: reducerState.inputComment,
                memberList: state.user.mrmkmcibCRM.reducerMemberList.memberList || defaultValues.MemberList,
                clientId: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != '' ? state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id : state.user.mrmkmcibCRM.reducerCustomer.currentCustomer.id,
            }
        )
    }
}

/*
 * Internal thunk used in "CustomerActivityInclude" container. Thunk used to confirm changes.
 */
export const performValidate = (currentUser: ModelsApp.Employee, currentCustomerManaged: Models.CustomerManaged, currentCustomer: Models.Customer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude





    dispatch(actionsCustomerActivityInclude.performValidate(currentUser, currentCustomerManaged, currentCustomer))


    // Dispatch thunk "performSaveFailure" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
    if (reducerState.customerActivityIncludeValidationComment || reducerState.customerActivityIncludeValidationCustomer) {
        dispatch(thunkCustomerActivityInclude.performSaveFailure(defaultValues.Error))
    }

    // Dispatch thunk "callPostCustomerActivityIncludeCreate" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude
    if (!(reducerState.customerActivityIncludeValidationComment || reducerState.customerActivityIncludeValidationCustomer)) {
        dispatch(thunkCustomerActivityInclude.callPostCustomerActivityIncludeCreate())
    }

}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. 
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View)))

    dispatch(actionsCustomerActivityInclude.navigateBack())

}

export const performCancelSearchCustomer = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(performInputSearch(""))

    dispatch(navigateBack())
}

/*
 * Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityInclude

    dispatch(actionsCustomerActivityInclude.performContainerReset())

}
