/*
 * Created by Burnaev M.U.
 */
import { defaultValues } from "../models/Models";
import { Enums } from '../Enums';
import { performFlushActivityList } from "mrmkmcib-scheduler";
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsGszActivityInclude from '../actions/ActionsGszActivityInclude';
import * as thunkGSZ from '../thunk/ThunkGSZ';
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude';
import * as thunkMemberList from '../thunk/ThunkMemberList';
import { SplitPanelActions } from 'ufs-mobile-platform';
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to show customer picker screen.
 */
export const navigateToCustomerPickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoGSZExcludeIncludeView.IncludeExclude_ClientsSearch, util.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Include_View)));
    dispatch(actionsGszActivityInclude.navigateToCustomerPickerScreen());
};
export const performCancelSearchCustomer = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibScheduler.reducerActivity;
    dispatch(performInputSearch(""));
    dispatch(navigateBack());
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on search input switch changed.
 */
export const performInputSearchManagedOnly = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performInputSearchManagedOnly(value));
    // Dispatch thunk "performInputSearch" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(thunkGszActivityInclude.performInputSearch(reducerState.inputSearch));
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performInputSearch(value));
    if (value.length < 3) {
        return;
    }
    // Dispatch thunk "performSearch" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    let lastInput = reducerState.inputSearch;
    setTimeout(() => {
        if (lastInput == getState().user.mrmkmcibCRM.reducerGszActivityInclude.inputSearch) {
            dispatch(thunkGszActivityInclude.performSearch());
        }
    }, 2000);
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to reset search parameters.
 */
export const performSearchReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performSearchReset());
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to perform search query.
 */
export const performSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (reducerState.searchInProgress) {
        return;
    }
    dispatch(actionsGszActivityInclude.performSearch());
    if (!reducerState.searchInProgress) {
        dispatch(actionsGszActivityInclude.performSearchExecute());
        // Dispatch thunk "search_validateSearch" synchronously. 
        dispatch(thunkGszActivityInclude.search_validateSearch());
        /* TODO Perform JS Promise and handle success and failure or dispatch performSearchSuccess and performSearchFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkGszActivityInclude.performSearchSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkGszActivityInclude.performSearchFailure(null)) */
    }
};
export const performSearchSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performSearchSuccess(data));
};
export const performSearchFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performSearchFailure(error));
};
/*
 * Internal thunk used in "GszActivityInclude" container. Thunk used to perform search query validation and search type determination.
 */
export const search_validateSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.search_validateSearch());
    // Dispatch thunk "performSearchFailure" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (reducerState.isSearchError == true) {
        dispatch(thunkGszActivityInclude.performSearchFailure({
            type: Enums.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }));
    }
    // Dispatch thunk "search_callGetCustomerSearchList" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (reducerState.isSearchError == false) {
        dispatch(thunkGszActivityInclude.search_callGetCustomerSearchList());
    }
};
/*
 * Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
 */
export const search_callGetCustomerSearchList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (reducerState.customerSearchListFetching) {
        return;
    }
    let operationId = state.user.mrmkmcibCRM.reducerGSZ.currentGszId;
    dispatch(actionsGszActivityInclude.search_callGetCustomerSearchList());
    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsGszActivityInclude.search_callGetCustomerSearchListRequest());
        util.call(util.urlGszActivityInclude.search_callGetCustomerSearchList(state, reducerState, [{ tag: Enums.CachePolicy.Default }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
            if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId)
                return;
            dispatch(actionsGszActivityInclude.search_callGetCustomerSearchListSuccess(response));
            // Dispatch thunk "performSearchSuccess" on fetch succeeded. 
            dispatch(thunkGszActivityInclude.performSearchSuccess(true));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
            if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId)
                return;
            dispatch(actionsGszActivityInclude.search_callGetCustomerSearchListFailure(error));
            // Dispatch thunk "performSearchFailure" on fetch failure. 
            dispatch(thunkGszActivityInclude.performSearchFailure(error));
        }, Converters.RESPONSE_GSZ_ACTIVITY_INCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST, 'GET');
    }
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on user input Customer field.
 */
export const performInputCustomer = (customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    dispatch(actionsGszActivityInclude.performInputCustomer(customer, currentUser));
    dispatch(thunkGszActivityInclude.navigateBack());
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on user input Comment field.
 */
export const performInputComment = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performInputComment(value));
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
    dispatch(thunkMemberList.performContainerReset());
    dispatch(actionsGszActivityInclude.performCancel());
    dispatch(thunkGSZ.resetGszActivityCreateMode());
    dispatch(performContainerReset());
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk used to confirm changes.
 */
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (reducerState.activitySaveInProgress) {
        return;
    }
    dispatch(actionsGszActivityInclude.performSave());
    if (!reducerState.activitySaveInProgress) {
        dispatch(actionsGszActivityInclude.performSaveExecute());
        // Dispatch thunk "performValidate" synchronously. 
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
        dispatch(thunkGszActivityInclude.performValidate(state.user.mrmkmcibCRM.reducerAppCRM.currentUser));
        /* TODO Perform JS Promise and handle success and failure or dispatch performSaveSuccess and performSaveFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkGszActivityInclude.performSaveSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkGszActivityInclude.performSaveFailure(null)) */
    }
};
export const performSaveSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performSaveSuccess(data));
    // Dispatch thunk "closeGszActivityPanel" on success. 
    dispatch(thunkGSZ.closeGszActivityPanel());
};
export const performSaveFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performSaveFailure(error));
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
 */
export const callPostGszActivityIncludeCreate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    let reducerGsz = state.user.mrmkmcibCRM.reducerGSZ;
    if (reducerState.activityIncludeCreateFetching) {
        return;
    }
    let operationId = state.user.mrmkmcibCRM.reducerGSZ.currentGszId;
    let reducerMemberList = state.user.mrmkmcibCRM.reducerMemberList;
    dispatch(thunkGszActivityInclude.performChangeVisibleErrorModal(false));
    dispatch(actionsGszActivityInclude.callPostGszActivityIncludeCreate());
    if (!reducerState.activityIncludeCreateFetching) {
        dispatch(actionsGszActivityInclude.callPostGszActivityIncludeCreateRequest());
        util.call(util.urlGszActivityInclude.callPostGszActivityIncludeCreate(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
            if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId)
                return;
            dispatch(actionsGszActivityInclude.callPostGszActivityIncludeCreateSuccess(response));
            // Dispatch thunk "performSaveSuccess" on fetch succeeded. 
            dispatch(thunkGszActivityInclude.performCancel());
            dispatch(thunkGszActivityInclude.performSaveSuccess(true));
            dispatch(performFlushActivityList(true));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
            if (state.user.mrmkmcibCRM.reducerGSZ.currentGszId != operationId)
                return;
            dispatch(actionsGszActivityInclude.callPostGszActivityIncludeCreateFailure(error));
            // Dispatch thunk "performSaveFailure" on fetch failure. 
            dispatch(thunkGszActivityInclude.performSaveFailure(error));
            dispatch(thunkGszActivityInclude.performChangeVisibleErrorModal(true));
        }, Converters.RESPONSE_GSZ_ACTIVITY_INCLUDE_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_TO_BOOLEAN, 'POST', { 'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid }, Converters.REQUEST_GSZ_ACTIVITY_INCLUDE_CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FROM_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST, {
            operationUuid: reducerState.operationUuid,
            comment: reducerState.inputComment,
            memberList: reducerGsz != null &&
                reducerGsz.currentGsz != null &&
                reducerGsz.currentGsz.curator != null ?
                { data: [reducerGsz.currentGsz.curator] } :
                (reducerMemberList.memberList &&
                    Array.isArray(reducerMemberList.memberList.data) &&
                    reducerMemberList.memberList.data.length > 0 ?
                    reducerMemberList.memberList : defaultValues.MemberList),
            clientId: reducerState.inputCustomer.id,
            gszId: state.user.mrmkmcibCRM.reducerGSZ.currentGsz.id
        });
    }
};
/*
 * Internal thunk used in "GszActivityInclude" container. Thunk used to confirm changes.
 */
export const performValidate = (currentUser) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performValidate(currentUser));
    // Dispatch thunk "performSaveFailure" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (reducerState.gszActivityIncludeValidationComment || reducerState.gszActivityIncludeValidationCustomer) {
        dispatch(thunkGszActivityInclude.performSaveFailure(defaultValues.Error));
    }
    // Dispatch thunk "callPostGszActivityIncludeCreate" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    if (!(reducerState.gszActivityIncludeValidationComment || reducerState.gszActivityIncludeValidationCustomer)) {
        dispatch(thunkGszActivityInclude.callPostGszActivityIncludeCreate());
    }
};
/*
 * Thunk dispatched by "GszActivityInclude" screen.
 */
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(SplitPanelActions.popContent(util.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Include_View)));
    dispatch(actionsGszActivityInclude.navigateBack());
};
/*
 * Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGszActivityInclude;
    dispatch(actionsGszActivityInclude.performContainerReset());
};
export const navigateToMemberListScreen = () => (dispatch, getState) => {
    let state = getState();
    let gszReducerState = state.user.mrmkmcibCRM.reducerGSZ;
    let reducerMemberList = state.user.mrmkmcibCRM.reducerMemberList.memberList;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoExcludeIncludeView.IncludeExclude_MemberList, util.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Include_View)));
    dispatch(thunkMemberList.performContainerReset());
    dispatch(thunkMemberList.performMemberListRefresh(Object.assign({}, defaultValues.Activity, { memberList: reducerMemberList }), defaultValues.Deal, defaultValues.CustomerManaged, gszReducerState.currentGsz, defaultValues.Agent, true, Enums.MemberListMode.CustomerActivityAddGSZ));
    dispatch(actionsGszActivityInclude.navigateToMemberListScreen());
};
export const performChangeVisibleErrorModal = (status) => (dispatch) => {
    dispatch(actionsGszActivityInclude.performChangeVisibleErrorModal(status));
};
//# sourceMappingURL=ThunkGszActivityInclude.js.map