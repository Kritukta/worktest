/*
 * Created by Burnaev M.U.
 */
import { defaultValues } from "../models/Models";
import { Enums } from '../Enums';
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsCustomerActivityExclude from '../actions/ActionsCustomerActivityExclude';
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor';
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude';
import * as thunkMemberList from '../thunk/ThunkMemberList';
import { SplitPanelActions } from 'ufs-mobile-platform';
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to show customer picker screen.
 */
export const navigateToCustomerPickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoExcludeIncludeView.IncludeExclude_ClientsSearch, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View)));
    dispatch(actionsCustomerActivityExclude.navigateToCustomerPickerScreen());
};
/*
 * Thunk dispatched by "Activity" screen. Thunk used to cancel search customer .
 */
export const performCancelSearchCustomer = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibScheduler.reducerActivity;
    dispatch(performInputSearch(""));
    dispatch(navigateBack());
};
export const getNavigationContentSchedulerActivity = (page) => {
    switch (page) {
        case Enums.NavigationActivityDetails.AppScheduler_ActivityMainScreen: return "AppScheduler_ActivityMainScreen";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityStatus: return "AppScheduler_ActivityStatus";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityResult: return "AppScheduler_ActivityResult";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityAgentList: return "AppScheduler_ActivityAgentList";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityMemberList: return "AppScheduler_ActivityMemberList";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityType: return "AppScheduler_ActivityType";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityPriority: return "AppScheduler_ActivityPriority";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityCustomer: return "AppScheduler_ActivityCustomer";
        case Enums.NavigationActivityDetails.AppScheduler_ActivityEmployee: return "AppScheduler_ActivityEmpoloyee";
        default: return "";
    }
};
/*
 * Thunk dispatched by "Activity" screen. Thunk dispatched on user tap field value.
 */
export const navigateToMemberListScreenPage = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    let reducerMemberList = state.user.mrmkmcibCRM.reducerMemberList.memberList;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationIntoExcludeIncludeView.IncludeExclude_MemberList, util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View)));
    dispatch(thunkMemberList.performMemberListRefresh(Object.assign({}, defaultValues.Activity, { memberList: reducerMemberList }), defaultValues.Deal, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, defaultValues.Gsz, defaultValues.Agent, true, Enums.MemberListMode.CustomerActivityAddOrganization));
    dispatch(actionsCustomerActivityExclude.navigateToMemberListScreenPage());
};
export const swapMemberList = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View)));
};
/*
 * Thunk dispatched by "Activity" screen. Fetch show/hide error model activity .
 */
export const performChangeDisplayErrorModalWindow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibScheduler.reducerActivity;
    dispatch(actionsCustomerActivityExclude.performChangeDisplayErrorModalWindow(false));
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on search input switch changed.
 */
export const performInputSearchManagedOnly = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performInputSearchManagedOnly(value));
    // Dispatch thunk "performInputSearch" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(thunkCustomerActivityExclude.performInputSearch(reducerState.inputSearch));
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performInputSearch(value));
    // Dispatch thunk "performSearch" synchronously. 
    dispatch(thunkCustomerActivityExclude.performSearch());
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to reset search parameters.
 */
export const performSearchReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performSearchReset());
};
/*
 * Internal thunk used in "CustomerActivityExclude" container. Thunk used to perform search query validation and search type determination.
 */
export const search_validateSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.search_validateSearch());
    // Dispatch thunk "performSearchFailure" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (reducerState.isSearchError == true) {
        dispatch(thunkCustomerActivityExclude.performSearchFailure({
            type: Enums.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }));
    }
    // Dispatch thunk "search_callGetCustomerSearchList" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (reducerState.isSearchError == false) {
        dispatch(thunkCustomerActivityExclude.search_callGetCustomerSearchList());
    }
};
/*
 * Internal thunk used in "CustomerActivityExclude" container. Fetch customer list current page with search parameters.
 */
export const search_callGetCustomerSearchList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (reducerState.customerSearchListFetching) {
        return;
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id;
    dispatch(actionsCustomerActivityExclude.search_callGetCustomerSearchList());
    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsCustomerActivityExclude.search_callGetCustomerSearchListRequest());
        util.call(util.urlCustomerActivityExclude.search_callGetCustomerSearchList(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerActivityExclude.search_callGetCustomerSearchListSuccess(response));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerActivityExclude.search_callGetCustomerSearchListFailure(error));
            dispatch(actionsCustomerActivityExclude.performChangeDisplayErrorModalWindow(true));
            // Dispatch thunk "performSearchFailure" on fetch failure.
            dispatch(actionsCustomerActivityExclude.performSearchFailure(error));
        }, Converters.RESPONSE_CUSTOMER_ACTIVITY_INCLUDE_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST, 'GET');
    }
};
export const performSearchFailure = (error) => (dispatch, getState) => {
    dispatch(actionsCustomerActivityExclude.performSearchFailure(error));
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search.
 */
export const performSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performSearch());
    let lastInput = getState().user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearch;
    setTimeout(() => {
        if (lastInput == getState().user.mrmkmcibCRM.reducerCustomerActivityInclude.inputSearch) {
            dispatch(thunkCustomerActivityExclude.search_validateSearch());
        }
    }, 2000);
};
/*
 * Internal thunk used in "CustomerActivityExclude" container. Thunk chain used to perform search.
 */
export const filterCustomerList = (inputSearch, inputSearchManagedOnly, currentCustomerManaged, currentCustomer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.filterCustomerList(inputSearch, inputSearchManagedOnly, currentCustomerManaged, currentCustomer));
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on user input Customer field.
 */
export const performInputCustomer = (customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performInputCustomer(customer));
    // Dispatch thunk "callGetCustomer" synchronously. 
    dispatch(thunkCustomerActivityExclude.callGetCustomer());
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
 */
export const callGetCustomer = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (reducerState.inputCustomerFetching) {
        return;
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id;
    dispatch(actionsCustomerActivityExclude.callGetCustomer());
    if (!reducerState.inputCustomerFetching) {
        dispatch(actionsCustomerActivityExclude.callGetCustomerRequest());
        util.call(util.urlCustomerActivityExclude.callGetCustomer(state, reducerState, [{ tag: Enums.CachePolicy.Default }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerActivityExclude.callGetCustomerSuccess(response));
            // Dispatch thunk "navigateBack" on fetch succeeded. 
            dispatch(thunkCustomerActivityExclude.navigateBack());
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerActivityExclude.callGetCustomerFailure(error));
            dispatch(actionsCustomerActivityExclude.performChangeDisplayErrorModalWindow(true));
        }, Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_GET_CUSTOMER_TO_CUSTOMER, 'GET');
    }
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on user input Comment field.
 */
export const performInputComment = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performInputComment(value));
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(thunkCustomerEditor.closeCustomerActivityPanel());
    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.EditorContainer)));
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)));
    dispatch(actionsCustomerActivityExclude.performCancel());
    dispatch(thunkMemberList.performContainerReset());
    dispatch(performContainerReset());
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
 */
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (reducerState.activitySaveInProgress) {
        return;
    }
    dispatch(actionsCustomerActivityExclude.performSave());
    if (!reducerState.activitySaveInProgress) {
        dispatch(actionsCustomerActivityExclude.performSaveExecute());
        // Dispatch thunk "performValidate" synchronously. 
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
        dispatch(thunkCustomerActivityExclude.performValidate(state.user.mrmkmcibCRM.reducerAppCRM.currentUser, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, state.user.mrmkmcibCRM.reducerCustomer.currentCustomer));
        /* TODO Perform JS Promise and handle success and failure or dispatch performSaveSuccess and performSaveFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkCustomerActivityExclude.performSaveSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkCustomerActivityExclude.performSaveFailure(null)) */
    }
};
export const performSaveSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performSaveSuccess(data));
    // Dispatch thunk "closeCustomerActivityPanel" on success. 
    dispatch(thunkCustomerEditor.closeCustomerActivityPanel());
    dispatch(thunkCustomerActivityExclude.performContainerReset());
};
export const performSaveFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performSaveFailure(error));
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
 */
export const callPostCustomerActivityExcludeCreate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    const teamMemberList = (util.getCustomerActivityIncludeExecutor(state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged)) ?
        { data: [util.getCustomerActivityIncludeExecutor(state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged)] } :
        (state.user.mrmkmcibCRM.reducerMemberList.memberList) ?
            state.user.mrmkmcibCRM.reducerMemberList.memberList : defaultValues.MemberList;
    if (reducerState.activityExcludeCreateFetching) {
        return;
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id;
    dispatch(actionsCustomerActivityExclude.callPostCustomerActivityExcludeCreate());
    if (!reducerState.activityExcludeCreateFetching) {
        dispatch(actionsCustomerActivityExclude.callPostCustomerActivityExcludeCreateRequest());
        util.call(util.urlCustomerActivityExclude.callPostCustomerActivityExcludeCreate(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerActivityExclude.callPostCustomerActivityExcludeCreateSuccess(response));
            // Dispatch thunk "performSaveSuccess" on fetch succeeded. 
            dispatch(thunkCustomerActivityExclude.performSaveSuccess(true));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId)
                return;
            dispatch(actionsCustomerActivityExclude.callPostCustomerActivityExcludeCreateFailure(error));
            dispatch(actionsCustomerActivityExclude.performChangeDisplayErrorModalWindow(true));
            // Dispatch thunk "performSaveFailure" on fetch failure. 
            dispatch(thunkCustomerActivityExclude.performSaveFailure(error));
        }, Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN, 'POST', { 'Content-type': 'application/json; charset=UTF-8', 'operUid': reducerState.operationUuid }, Converters.REQUEST_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_FROM_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_REQUEST, {
            operationUuid: reducerState.operationUuid,
            parentAccountId: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != '' ? state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id : state.user.mrmkmcibCRM.reducerCustomer.currentCustomer.id,
            comment: reducerState.inputComment,
            memberList: teamMemberList,
            clientId: reducerState.inputCustomer.id
        });
    }
};
/*
 * Internal thunk used in "CustomerActivityExclude" container. Thunk used to confirm changes.
 */
export const performValidate = (currentUser, currentCustomerManaged, currentCustomer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performValidate(currentUser, currentCustomerManaged, currentCustomer));
    // Dispatch thunk "performSaveFailure" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (reducerState.customerActivityExcludeValidationComment || reducerState.customerActivityExcludeValidationCustomer) {
        dispatch(thunkCustomerActivityExclude.performSaveFailure(defaultValues.Error));
    }
    // Dispatch thunk "callPostCustomerActivityExcludeCreate" synchronously. 
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    if (!(reducerState.customerActivityExcludeValidationComment || reducerState.customerActivityExcludeValidationCustomer)) {
        dispatch(thunkCustomerActivityExclude.callPostCustomerActivityExcludeCreate());
    }
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen.
 */
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(SplitPanelActions.popContent(util.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View)));
    dispatch(actionsCustomerActivityExclude.navigateBack());
};
/*
 * Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomerActivityExclude;
    dispatch(actionsCustomerActivityExclude.performContainerReset());
};
//# sourceMappingURL=ThunkCustomerActivityExclude.js.map