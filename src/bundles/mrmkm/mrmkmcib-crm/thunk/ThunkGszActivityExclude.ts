/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {performFlushActivityList} from "mrmkmcib-scheduler"


import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as actionsGszActivityExclude from '../actions/ActionsGszActivityExclude'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'

import {SplitPanelActions} from 'ufs-mobile-platform'


/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to show customer picker screen.
 */
export const navigateToCustomerPickerScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoGSZExcludeIncludeView.IncludeExclude_ClientsSearch, util.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Exclude_View)))


    dispatch(actionsGszActivityExclude.navigateToCustomerPickerScreen())


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on search input switch changed.
 */
export const performInputSearchManagedOnly = (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.performInputSearchManagedOnly(value))


    // Dispatch thunk "performInputSearch" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    dispatch(thunkGszActivityExclude.performInputSearch(reducerState.inputSearch))


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.performInputSearch(value))
    if (value.length < 3) {
        return
    }

    // Dispatch thunk "performSearch" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
    let lastInput = reducerState.inputSearch;
    setTimeout(() => {
        if (lastInput == getState().user.mrmkmcibCRM.reducerGszActivityExclude.inputSearch) {
            dispatch(thunkGszActivityExclude.performSearch())
        }
    }, 2000)

}

export const performCancelSearchCustomer = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibScheduler.reducerActivity

    dispatch(performInputSearch(""))

    dispatch(navigateBack())

}
/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to reset search parameters.
 */
export const performSearchReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.performSearchReset())


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk chain used to perform search.
 */
export const performSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    if (reducerState.searchInProgress) {
        return
    }


    dispatch(actionsGszActivityExclude.performSearch())


    if (!reducerState.searchInProgress) {
        dispatch(actionsGszActivityExclude.performSearchExecute())

        dispatch(thunkGszActivityExclude.search_validateSearch())





    }
}

export const performSearchFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    dispatch(actionsGszActivityExclude.performSearchFailure(error))


}

export const search_validateSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.search_validateSearch())


    // Dispatch thunk "performSearchFailure" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
    if (reducerState.isSearchError == true) {
        dispatch(thunkGszActivityExclude.performSearchFailure({
            type: Enums.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }))
    }

    // Dispatch thunk "search_callGetCustomerSearchList" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
    if (reducerState.isSearchError == false) {
        dispatch(thunkGszActivityExclude.search_callGetCustomerSearchList())
    }

}


export const performSearchSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    dispatch(actionsGszActivityExclude.performSearchSuccess(data))


}




/*
 * Internal thunk used in "GszActivityExclude" container. Fetch customer list current page with search parameters.
 */
export const search_callGetCustomerSearchList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    
    if (reducerState.customerSearchListFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerGSZ.currentGszId


    dispatch(actionsGszActivityExclude.search_callGetCustomerSearchList())


    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsGszActivityExclude.search_callGetCustomerSearchListRequest())

        util.call<Models.CustomerList, void>(
            util.urlGszActivityExclude.search_callGetCustomerSearchList(state, reducerState, [{tag: Enums.CachePolicy.Default}]),

            (response: Response<Models.CustomerList>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
                if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId) return

                dispatch(actionsGszActivityExclude.search_callGetCustomerSearchListSuccess(response))


                // Dispatch thunk "performSearchSuccess" on fetch succeeded. 


                dispatch(thunkGszActivityExclude.performSearchSuccess(true))


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
                if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId) return

                dispatch(actionsGszActivityExclude.search_callGetCustomerSearchListFailure(error))


                // Dispatch thunk "performSearchFailure" on fetch failure. 


                dispatch(thunkGszActivityExclude.performSearchFailure(error))


            },

            Converters.RESPONSE_GSZ_ACTIVITY_EXCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST,

            'GET'
        )
    }
}


/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on user input Customer field.
 */
export const performInputCustomer = (customer: Models.Customer) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    
    dispatch(actionsGszActivityExclude.performInputCustomer(customer, currentUser))

    dispatch(thunkGszActivityExclude.navigateBack())


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched on user input Comment field.
 */
export const performInputComment = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.performInputComment(value))


    state = getState()
    dispatch(thunkGszActivityExclude.performValidate(state.user.mrmkmcibCRM.reducerAppCRM.currentUser))
}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)))

    dispatch(thunkMemberList.performContainerReset())

    dispatch(actionsGszActivityExclude.performCancel())

    dispatch(thunkGSZ.resetGszActivityCreateMode())


    dispatch(performContainerReset())


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk used to confirm changes.
 */
export const performSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    if (reducerState.activitySaveInProgress) {
        return
    }


    dispatch(actionsGszActivityExclude.performSave())


    if (!reducerState.activitySaveInProgress) {
        dispatch(actionsGszActivityExclude.performSaveExecute())


        // Dispatch thunk "performValidate" synchronously. 
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


        dispatch(thunkGszActivityExclude.performValidate(state.user.mrmkmcibCRM.reducerAppCRM.currentUser))


        /* TODO Perform JS Promise and handle success and failure or dispatch performSaveSuccess and performSaveFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkGszActivityExclude.performSaveSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkGszActivityExclude.performSaveFailure(null)) */


    }


}

export const performSaveSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    dispatch(actionsGszActivityExclude.performSaveSuccess(data))


    // Dispatch thunk "closeGszActivityPanel" on success. 

    dispatch(thunkGSZ.closeGszActivityPanel())

}

export const performSaveFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    dispatch(actionsGszActivityExclude.performSaveFailure(error))


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Fetch post request.
 */
export const callPostGszActivityExcludeCreate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude

    let reducerMemberList = state.user.mrmkmcibCRM.reducerMemberList

    let reducerGsz = state.user.mrmkmcibCRM.reducerGSZ

    if (reducerState.activityExcludeCreateFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerGSZ.currentGszId

    dispatch(actionsGszActivityExclude.callPostGszActivityExcludeCreate())

    dispatch(thunkGszActivityExclude.performChangeVisibleErrorModal(false))





    if (!reducerState.activityExcludeCreateFetching) {
        dispatch(actionsGszActivityExclude.callPostGszActivityExcludeCreateRequest())

        util.call<boolean, Models.GszActivityExcludeCreateRequest>(
            util.urlGszActivityExclude.callPostGszActivityExcludeCreate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                state = getState()



                reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


                if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId) return

                dispatch(actionsGszActivityExclude.callPostGszActivityExcludeCreateSuccess(response))


                // Dispatch thunk "performSaveSuccess" on fetch succeeded. 


                dispatch(thunkGszActivityExclude.performSaveSuccess(true))

                dispatch(performFlushActivityList(true))

                dispatch(thunkGszActivityExclude.performCancel())


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
                if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId) return

                dispatch(actionsGszActivityExclude.callPostGszActivityExcludeCreateFailure(error))


                // Dispatch thunk "performSaveFailure" on fetch failure. 


                dispatch(thunkGszActivityExclude.performSaveFailure(error))
                
           
                    

            },



            Converters.RESPONSE_GSZ_ACTIVITY_EXCLUDE_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8', 'operUid': reducerState.operationUuid},

            Converters.REQUEST_GSZ_ACTIVITY_EXCLUDE_CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE_FROM_GSZ_ACTIVITY_EXCLUDE_CREATE_REQUEST,
            {
                operationUuid: reducerState.operationUuid,
                comment: reducerState.inputComment,
                memberList: reducerGsz != null &&
                          reducerGsz.currentGsz != null &&
                          reducerGsz.currentGsz.curator ?
                          {data: [reducerGsz.currentGsz.curator]} :
                            (reducerMemberList.memberList &&
                            Array.isArray(reducerMemberList.memberList.data) &&
                            reducerMemberList.memberList.data.length > 0 ?
                            reducerMemberList.memberList :
                            defaultValues.MemberList),
                clientId: reducerState.inputCustomer.id,
                gszId: state.user.mrmkmcibCRM.reducerGSZ.currentGsz.id
            }
        )
    }
}

/*
 * Internal thunk used in "GszActivityExclude" container. Thunk used to confirm changes.
 */
export const performValidate = (currentUser: ModelsApp.Employee,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.performValidate(currentUser,))


    // Dispatch thunk "performSaveFailure" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
    if (reducerState.gszActivityExcludeValidationComment || reducerState.gszActivityExcludeValidationCustomer) {
        dispatch(thunkGszActivityExclude.performSaveFailure(defaultValues.Error))
    }

    // Dispatch thunk "callPostGszActivityExcludeCreate" synchronously. 
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude
    if (!(reducerState.gszActivityExcludeValidationComment || reducerState.gszActivityExcludeValidationCustomer)) {
        dispatch(thunkGszActivityExclude.callPostGszActivityExcludeCreate())
    }

}

/*
 * Thunk dispatched by "GszActivityExclude" screen. 
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(SplitPanelActions.popContent(util.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Exclude_View)))


    dispatch(actionsGszActivityExclude.navigateBack())


}

/*
 * Thunk dispatched by "GszActivityExclude" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityExclude


    dispatch(actionsGszActivityExclude.performContainerReset())


}

export const navigateToMemberListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let gszReducerState = state.user.mrmkmcibCRM.reducerGSZ

    let reducerMemberList = state.user.mrmkmcibCRM.reducerMemberList.memberList


    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoExcludeIncludeView.IncludeExclude_MemberList,
        util.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Exclude_View)))


    dispatch(thunkMemberList.performContainerReset())

    dispatch(thunkMemberList.performMemberListRefresh(
        {...defaultValues.Activity, memberList: reducerMemberList},
        defaultValues.Deal,
        defaultValues.CustomerManaged,
        gszReducerState.currentGsz, 
        defaultValues.Agent, 
        true,
        Enums.MemberListMode.CustomerActivityRemoveGSZ))



    dispatch(actionsGszActivityExclude.navigateToMemberListScreen())

}

export const performChangeVisibleErrorModal = (status: boolean) => (dispatch: Function): void => {

    dispatch(actionsGszActivityExclude.performChangeVisibleErrorModal(status))

}