/*
 * Created by Burnaev M.U.
 */
import { defaultValues } from "../models/Models";
import { EnumsApp, performNavigateToEntity, swapAppContext, supParamNames, performNavigateBack } from 'mrmkmcib-app';
import { EnumsScheduler } from "mrmkmcib-scheduler";
import { EnumsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsAppDashboard from '../actions/ActionsAppDashboard';
import { SplitPanelActions, Cookie, Settings, } from 'ufs-mobile-platform';
import * as thunkAppDashboard from '../thunk/ThunkAppDashboard';
import { OWAService } from 'mrmkmcib-ui';
import { Base64 } from 'js-base64';
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update inputSharePopoverSearch prop.
 */
export const inputSharePopoverSearchRefresh = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.inputSharePopoverSearchRefresh(value));
    let lastInput = reducerState.inputSharePopoverSearch;
    setTimeout(() => {
        if (getState().user.mrmkmcibDashboard.reducerAppDashboard.inputSharePopoverSearch.length >= 3) {
            dispatch(thunkAppDashboard.performFindPeople());
        }
    }, 2000);
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update recipients prop.
 */
export const inputCurrentRecipientListRefresh = (value, operation) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    let initialList = state.user.mrmkmcibDashboard.reducerAppDashboard.currentRecipientList;
    if (operation == Enums.Operation.Add) {
        let resultList = util.personListAdd(initialList, value);
        dispatch(actionsAppDashboard.inputCurrentRecipientListRefresh(resultList, operation));
    }
    if (operation == Enums.Operation.Remove) {
        let resultList = util.personListRemove(initialList, value);
        dispatch(actionsAppDashboard.inputCurrentRecipientListRefresh(resultList, operation));
    }
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear foundPersonList prop.
 */
export const foundPersonListClear = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performFoundPeopleListClear());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update representation prop. Switch current default file format
 */
export const inputCurrentRepresentationRefresh = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    const fileFormat = reducerState.currentFileFormat === Enums.FileFormat.PDF ? reducerState.currentFileFormat :
        (value === Enums.Representation.List ? Enums.FileFormat.Excel : Enums.FileFormat.PowerPoint);
    dispatch(actionsAppDashboard.inputCurrentRepresentationRefresh(value, fileFormat));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to update fileFormat prop.
 */
export const inputCurrentFileFormatRefresh = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.inputCurrentFormatRefresh(value));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate back in popover.
 */
export const navigateToPopoverShareBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(SplitPanelActions.popContent(Enums.SharePopoverNavigation.Main));
    dispatch(actionsAppDashboard.navigateToPopoverShareBack());
    dispatch(actionsAppDashboard.performPopoverSearchScreenHide());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate recipients page in popover.
 */
export const navigateToPopoverShareRecipientsScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(SplitPanelActions.pushContent(Enums.SharePopoverNavigation.Recipients, Enums.SharePopoverNavigation.Main.toString()));
    dispatch(actionsAppDashboard.navigateToPopoverShareRecipientsScreen());
    dispatch(actionsAppDashboard.performPopoverSearchScreenShow());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
 */
export const navigateToPopoverShareRepresentationScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(SplitPanelActions.pushContent(Enums.SharePopoverNavigation.Representation, Enums.SharePopoverNavigation.Main.toString()));
    dispatch(actionsAppDashboard.navigateToPopoverShareRepresentationScreen());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate file format page in popover.
 */
export const navigateToPopoverShareFormatScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(SplitPanelActions.pushContent(Enums.SharePopoverNavigation.Format, Enums.SharePopoverNavigation.Main.toString()));
    dispatch(actionsAppDashboard.navigateToPopoverShareFormatScreen());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
 */
export const performPopoverShareShow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performPopoverShareShow());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to hide popover.
 */
export const performPopoverShareHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (!reducerState.sendFetching) {
        dispatch(actionsAppDashboard.performPopoverShareHide());
        dispatch(actionsAppDashboard.performPopoverSearchScreenHide());
    }
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to init Dashboard mobile application.
 */
export const performApplicationInit = () => (dispatch, getState) => {
    dispatch(performContainerReset());
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(thunkAppDashboard.performUpdateSupParameters());
    dispatch(actionsAppDashboard.performApplicationInit());
    // Dispatch thunk "swapContext" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(thunkAppDashboard.swapContext(state.user.mrmkmcibApp.reducerAuthorization.currentUser, state.user.mrmkmcibApp.reducerAppMRMKMCIB.appBuildVersion, state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerUrl, state.user.mrmkmcibApp.reducerAppMRMKMCIB.appServerPath));
    // Dispatch thunk "recoverSearchHistoryList" synchronously.
    dispatch(thunkAppDashboard.recoverSearchHistoryList());
    dispatch(thunkAppDashboard.performRecoverPeopleHistoryList());
    dispatch(swapAppContext(EnumsApp.App.Dashboard));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched to handle Qlik error.
 */
export const handleQlikError = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.handleQlikError(error));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
 */
export const callQlikAuth = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (util.QLIK_CERTIFICATE_VERIFICATION) {
        dispatch(thunkAppDashboard.verifyCertificate());
    }
    dispatch(actionsAppDashboard.callQlikAvailabilityCheck());
    state = getState();
    reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    Cookie.get((cookies) => {
        const data = getQlikCookieData(cookies);
        const cookieString = util.getCookieString(data);
        const qlikAuthUrl = util.getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters);
        fetch(qlikAuthUrl).then((response) => {
            const sudirAuthUrl = response._bodyText.match(/\("(https.*)"\)/m);
            dispatch(actionsAppDashboard.setQlikCookie(util.getCookieString(data)));
            const cookie = response.headers.get("set-cookie") + ";" +
                cookieString + ";";
            if (Array.isArray(sudirAuthUrl) && sudirAuthUrl.length > 0) {
                fetch(sudirAuthUrl[1], { headers: { Cookie: cookie } })
                    .then((res) => {
                    state = getState();
                    dispatch(actionsAppDashboard.callQlikAvailabilityCheckSuccess());
                }).catch((error) => {
                    state = getState();
                    dispatch(actionsAppDashboard.callQlikAvailabilityCheckSuccess());
                });
            }
            else {
                state = getState();
                dispatch(actionsAppDashboard.callQlikAvailabilityCheckSuccess());
            }
        }).catch((error) => {
            dispatch(actionsAppDashboard.callQlikAvailabilityCheckFailure(error));
        });
    });
};
/*
 * Internal thunk used in "AppDashboard" container. Thunk chain dispatched to set context parameters.
 */
export const swapContext = (user, appBuildVersion, appServerUrl, appServerPath) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.swapContext(user, appBuildVersion, appServerUrl, appServerPath));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search mode changed.
 */
export const performInputSearchCustomerManaged = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performInputSearchCustomerManaged(value));
    // Dispatch thunk "performSearch" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.inputSearch.length >= 3) {
        dispatch(thunkAppDashboard.performSearch());
    }
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to enter search mode
 */
export const performSearchModeEnable = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performSearchModeEnable());
    // Dispatch thunk "performSearchReset" synchronously.
    dispatch(thunkAppDashboard.performSearchReset());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to exit search mode
 */
export const performSearchModeDisable = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performSearchModeDisable());
    // Dispatch thunk "performSearchReset" synchronously.
    dispatch(thunkAppDashboard.performSearchReset());
    // abort search
    dispatch(actionsAppDashboard.performSearchAbort());
    dispatch(actionsAppDashboard.search_callGetCustomerSearchListAbort());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search input changed.
 */
export const performInputSearch = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performInputSearch(value));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to reset search parameters.
 */
export const performSearchReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performSearchReset());
    // Dispatch thunk "performCustomerSearchListReset" synchronously.
    dispatch(thunkAppDashboard.performCustomerSearchListReset());
};
/*
 * Internal thunk used in "AppDashboard" container. Thunk chain used to reset search parameters.
 */
export const performCustomerSearchListReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performCustomerSearchListReset());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
 */
export const performSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.searchInProgress) {
        return;
    }
    dispatch(actionsAppDashboard.performSearch());
    if (!reducerState.searchInProgress) {
        dispatch(actionsAppDashboard.performSearchExecute());
        // Dispatch thunk "performCustomerSearchListReset" synchronously.
        dispatch(thunkAppDashboard.performCustomerSearchListReset());
        // Dispatch thunk "search_validateSearch" synchronously.
        dispatch(thunkAppDashboard.search_validateSearch());
        /* TODO Perform JS Promise and handle success and failure or dispatch performSearchSuccess and performSearchFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkAppDashboard.performSearchSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkAppDashboard.performSearchFailure(null)) */
    }
};
export const performSearchSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performSearchSuccess(data));
};
export const performSearchFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performSearchFailure(error));
};
/*
 * Internal thunk used in "AppDashboard" container. Thunk used to perform search query validation and search type determination.
 */
export const search_validateSearch = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.search_validateSearch());
    // Dispatch thunk "performSearchFailure" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.isSearchError == true) {
        dispatch(thunkAppDashboard.performSearchFailure({
            type: Enums.ErrorType.Unknown,
            message: reducerState.customerSearchError,
            code: '',
            comment: reducerState.customerSearchError
        }));
    }
    // Dispatch thunk "search_callGetCustomerSearchList" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.isSearchError == false) {
        dispatch(thunkAppDashboard.search_callGetCustomerSearchList());
    }
};
/*
 * Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 */
export const search_callGetCustomerSearchList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    let operationId = reducerState.inputSearch;
    if (reducerState.customerSearchListFetching) {
        return;
    }
    dispatch(actionsAppDashboard.search_callGetCustomerSearchList());
    if (!reducerState.customerSearchListFetching) {
        dispatch(actionsAppDashboard.search_callGetCustomerSearchListRequest());
        util.call(util.urlAppDashboard.search_callGetCustomerSearchList(state, reducerState, [{ tag: Enums.CachePolicy.Default }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
            if (reducerState.inputSearch != operationId) {
                return;
            }
            if (!response.data.data.length) {
                const searchError = {
                    type: Enums.ErrorType.Unknown,
                    code: '',
                    message: 'Проверьте корректность запроса.',
                    comment: 'Ничего не найдено.',
                };
                dispatch(actionsAppDashboard.search_callGetCustomerSearchListFailure(searchError));
                dispatch(thunkAppDashboard.performSearchFailure(searchError));
                return;
            }
            else {
                // if response body not empty
                dispatch(actionsAppDashboard.search_callGetCustomerSearchListSuccess(response));
                // Dispatch thunk "performSearchSuccess" on fetch succeeded.
                dispatch(thunkAppDashboard.performSearchSuccess(true));
            }
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
            if (reducerState.inputSearch != operationId) {
                return;
            }
            dispatch(actionsAppDashboard.search_callGetCustomerSearchListFailure(error));
            // Dispatch thunk "performSearchFailure" on fetch failure.
            dispatch(thunkAppDashboard.performSearchFailure(error));
        }, Converters.RESPONSE_APP_DASHBOARD_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST, 'GET');
    }
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
 */
export const performCustomerSearchListAppend = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.searchAppendInProgress) {
        return;
    }
    dispatch(actionsAppDashboard.performCustomerSearchListAppend());
    if (!reducerState.searchAppendInProgress) {
        dispatch(actionsAppDashboard.performCustomerSearchListAppendExecute());
        // Dispatch thunk "searchAppend_callGetCustomerSearchListPage" synchronously.
        state = getState();
        reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
        if (reducerState.customerSearchList.isCompleted == false) {
            dispatch(thunkAppDashboard.searchAppend_callGetCustomerSearchListPage());
        }
        // Dispatch thunk "performCustomerSearchListAppendSuccess" synchronously.
        state = getState();
        reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
        if (reducerState.customerSearchList.isCompleted == true) {
            dispatch(thunkAppDashboard.performCustomerSearchListAppendSuccess(true));
        }
        /* TODO Perform JS Promise and handle success and failure or dispatch performCustomerSearchListAppendSuccess and performCustomerSearchListAppendFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkAppDashboard.performCustomerSearchListAppendSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkAppDashboard.performCustomerSearchListAppendFailure(null)) */
    }
};
export const performCustomerSearchListAppendSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performCustomerSearchListAppendSuccess(data));
};
export const performCustomerSearchListAppendFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performCustomerSearchListAppendFailure(error));
};
/*
 * Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
 */
export const searchAppend_callGetCustomerSearchListPage = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.customerSearchListPageFetching) {
        return;
    }
    dispatch(actionsAppDashboard.searchAppend_callGetCustomerSearchListPage());
    if (!reducerState.customerSearchListPageFetching) {
        dispatch(actionsAppDashboard.searchAppend_callGetCustomerSearchListPageRequest());
        util.call(util.urlAppDashboard.searchAppend_callGetCustomerSearchListPage(state, reducerState, [{ tag: Enums.CachePolicy.Default }]), (response) => {
            dispatch(actionsAppDashboard.searchAppend_callGetCustomerSearchListPageSuccess(response));
            // Dispatch thunk "searchAppend_customerSearchListConcat" on fetch succeeded.
            dispatch(thunkAppDashboard.searchAppend_customerSearchListConcat());
        }, (error) => {
            dispatch(actionsAppDashboard.searchAppend_callGetCustomerSearchListPageFailure(error));
            // Dispatch thunk "performCustomerSearchListAppendFailure" on fetch failure.
            dispatch(thunkAppDashboard.performCustomerSearchListAppendFailure(error));
        }, Converters.RESPONSE_APP_DASHBOARD_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE, 'GET');
    }
};
/*
 * Internal thunk used in "AppDashboard" container. Thunk chain used to concat next page and append customer search list.
 */
export const searchAppend_customerSearchListConcat = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.searchAppend_customerSearchListConcat());
    // Dispatch thunk "performCustomerSearchListAppendSuccess" synchronously.
    dispatch(thunkAppDashboard.performCustomerSearchListAppendSuccess(true));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
 */
export const performQlikEvent = (message) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.currentRepresentation !== 0) {
        message.payload.defaultFileFormat = Enums.FileFormat.Excel;
    }
    dispatch(actionsAppDashboard.performQlikEvent(message));
    //let mess = JSON.parse(eventPayload)
    const navigateBackData = Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.AppDashboard, qlikUrl: message.payload.currentUrl });
    switch (message.type) {
        case Enums.QlikEventType.GlobalClientSearch: {
            dispatch(performSearchModeEnable());
            dispatch(setCurrentAppDashboardQlikUrl(message.payload.qlikUrl));
            break;
        }
        case Enums.QlikEventType.OpenDealCard: {
            // TODO убрать константы в id
            dispatch(performNavigateToEntity(Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.CustomerDeal, customer: Object.assign({}, defaultValues.CustomerUnknown, { id: message.payload.customerId || '' }), deal: Object.assign({}, defaultValues.Deal, { id: message.payload.dealId || '' }), dealMode: EnumsCrm.DealMode.NavigationBack }), navigateBackData)); // '1-CHCFSE9' 100 KM
            break;
        }
        case Enums.QlikEventType.OpenClientCardProductsTab: {
            dispatch(performNavigateToEntity(Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.CustomerProducts, customer: Object.assign({}, defaultValues.CustomerUnknown, { id: message.payload.customerId || '' }), customerMode: EnumsCrm.CustomerMode.NavigationBack }), navigateBackData));
            break;
        }
        case Enums.QlikEventType.OpenClientCardAnalyticsTab: {
            dispatch(performNavigateToEntity(Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.CustomerDashboard, customer: Object.assign({}, defaultValues.CustomerUnknown, { id: message.payload.customerId || '' }), customerMode: EnumsCrm.CustomerMode.NavigationBack, qlikUrl: message.payload.qlikUrl }), navigateBackData));
            break;
        }
        case Enums.QlikEventType.OpenClientCardActivity: {
            dispatch(performNavigateToEntity(Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.Activity, customer: Object.assign({}, defaultValues.CustomerManaged, { id: message.payload.customerId || '' }), activity: Object.assign({}, defaultValues.Activity, { id: message.payload.activityId }), isPrimary: false, customerMode: EnumsCrm.CustomerMode.NavigationBack, activityContextMode: EnumsScheduler.ActivityContextMode.Notice }), navigateBackData)); // '1-CHCFSE9' 100 KM
            break;
        }
        case Enums.QlikEventType.SearchLineOnFocus: {
            break;
        }
        case Enums.QlikEventType.SearchLineOnBlur: {
            break;
        }
        case Enums.QlikEventType.ThrowError: {
            dispatch(handleQlikError({
                type: Enums.ErrorType.QlikError,
                code: 'QlikSenseMashupError',
                message: util.qlikErrorMessages.QlikSenseMashupError,
                comment: util.getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters),
            }));
            break;
        }
        case Enums.QlikEventType.Printing: {
            //FIXME отключение функционала в рамках релиза 2018-1
            // dispatch(performPopoverShareShow())
            break;
        }
        // открытие стартовой страницы Qlik
        case Enums.QlikEventType.mainKpi: {
            dispatch(setCurrentAppDashboardQlikUrl(null));
            break;
        }
        default: {
            dispatch(actionsAppDashboard.unknownQlikEvent(message));
        }
    }
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to open customer from search list.
 */
export const performCustomerSelect = (customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performCustomerSelect(customer));
    // Dispatch thunk "persistSearchHistoryList" synchronously.
    dispatch(thunkAppDashboard.persistSearchHistoryList());
    // Dispatch thunk "performSearchModeDisable" synchronously.
    dispatch(thunkAppDashboard.performSearchModeDisable());
    // Dispatch thunk "performCustomerOpen" synchronously.
    dispatch(thunkAppDashboard.performCustomerOpen(customer));
};
/*
 * Internal thunk used in "AppDashboard" container. Thunk chain used to open customer from search list.
 */
export const performCustomerOpen = (customer) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    // alert( customer.id + ' ' +  performNavigateToEntity )
    dispatch(performNavigateToEntity(Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.CustomerDashboard, customer: Object.assign({}, defaultValues.CustomerUnknown, { id: customer ? customer.id : '' }), customerMode: EnumsCrm.CustomerMode.NavigationBack, qlikUrl: reducerState.currentQlikUrl }), Object.assign({}, defaultValues.NavigateToEntity, { navigationType: EnumsApp.NavigationType.AppDashboard, qlikUrl: reducerState.currentQlikUrl })));
    dispatch(actionsAppDashboard.performCustomerOpen(customer));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear customer search history list.
 */
export const performSearchHistoryListClear = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performSearchHistoryListClear());
    // Dispatch thunk "persistSearchHistoryList" synchronously.
    dispatch(thunkAppDashboard.persistSearchHistoryList());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to persist search history list data.
 */
export const persistSearchHistoryList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    util.persistSearchHistoryListToStorage(reducerState.searchHistoryList);
    dispatch(actionsAppDashboard.persistSearchHistoryList());
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
 */
export const recoverSearchHistoryList = () => (dispatch, getState) => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.searchHistoryListInProgress) {
        return;
    }
    dispatch(actionsAppDashboard.recoverSearchHistoryList());
    reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    if (!reducerState.searchHistoryListInProgress) {
        dispatch(actionsAppDashboard.recoverSearchHistoryListExecute());
        util.recoverSearchHistoryListFromStorage()
            .then((data) => {
            // Success thunk chain resolve.
            dispatch(thunkAppDashboard.recoverSearchHistoryListSuccess(data));
        })
            .catch((error) => {
            dispatch(thunkAppDashboard.recoverSearchHistoryListFailure(error));
        });
        /* TODO Perform JS Promise and handle success and failure or dispatch recoverSearchHistoryListSuccess and recoverSearchHistoryListFailure later in thunk chain.

        // Success thunk chain resolve.
        dispatch(thunkAppDashboard.recoverSearchHistoryListSuccess(null))

        // Failure thunk chain resolve.
        dispatch(thunkAppDashboard.recoverSearchHistoryListFailure(null)) */
    }
};
export const recoverSearchHistoryListSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.recoverSearchHistoryListSuccess(data));
};
export const recoverSearchHistoryListFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.recoverSearchHistoryListFailure(error));
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performContainerReset());
};
export const performUpdateSupParameters = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    Settings
        .get([
        supParamNames().DashboardKmURL,
        supParamNames().DashboardChiefURL,
        supParamNames().dashboardExportAccessMode
    ])
        .then((resolve) => {
        const params = Converters.CONVERT_SUP_PARAMETERS(resolve);
        dispatch(actionsAppDashboard.performUpdateSupParameters(params));
        // Dispatch thunk "callQlikAvailabilityCheck" synchronously.
        state = getState();
        dispatch(thunkAppDashboard.callQlikAuth());
    })
        .catch((error) => {
        dispatch(actionsAppDashboard.performUpdateSupParametersFailure(Object.assign({}, defaultValues.Error)));
        // Dispatch thunk "callQlikAvailabilityCheck" synchronously.
    });
};
/*
 * Thunk used to find people via OWA.
 */
export const performFindPeople = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.foundPersonListInProgress) {
        return;
    }
    dispatch(actionsAppDashboard.performFindPeople());
    if (!reducerState.foundPersonListInProgress) {
        dispatch(actionsAppDashboard.performFindPeopleExecute());
    }
    OWAService.findPeople(reducerState.inputSharePopoverSearch)
        .then((response) => {
        const resp = {
            data: response.Items.map((item) => {
                return Converters.CONVERT_OWA_FOUND_PEOPLE_ITEM(item);
            })
        };
        dispatch(thunkAppDashboard.performFindPeopleSuccess(resp));
    })
        .catch((error) => {
        dispatch(thunkAppDashboard.performFindPeopleFailure(Object.assign({}, defaultValues.Error)));
    });
    // }
};
export const performFindPeopleSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performFindPeopleSuccess(data));
};
export const performFindPeopleFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performFindPeopleFailure(error));
};
export const performPersistPeopleHistoryList = () => (dispatch, getState) => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    util.persistPeopleHistoryListToStorage(reducerState.personHistoryList);
    dispatch(actionsAppDashboard.performPersistPeopleHistoryList());
};
export const performRecoverPeopleHistoryList = () => (dispatch, getState) => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    if (reducerState.personHistoryListInProgress) {
        return;
    }
    dispatch(actionsAppDashboard.performRecoverPeopleHistoryList());
    reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    if (!reducerState.personHistoryListInProgress) {
        dispatch(actionsAppDashboard.recoverSearchHistoryListExecute());
        util.recoverPeopleHistoryListFromStorage()
            .then((data) => {
            // Success thunk chain resolve.
            dispatch(thunkAppDashboard.performRecoverPeopleHistoryListSuccess(data));
        })
            .catch((error) => {
            dispatch(thunkAppDashboard.performRecoverPeopleHistoryListFailure(error));
        });
    }
};
export const performRecoverPeopleHistoryListSuccess = (data) => (dispatch, getState) => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performRecoverPeopleHistoryListSuccess(data));
};
export const performRecoverPeopleHistoryListFailure = (error) => (dispatch, getState) => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performRecoverPeopleHistoryListFailure(error));
};
/*
 * Thunk used to send file.
 */
export const performSend = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    const initiatorEmail = state.user.mrmkmcibScheduler.reducerAppScheduler.currentExchangePerson.email;
    // Check Qlik service availability
    dispatch(thunkAppDashboard.callQlikAuth());
    if (getState().user.mrmkmcibDashboard.reducerAppDashboard.sendFetching) {
        return;
    }
    if (reducerState.qlikAvailabilityCheckError != null) {
        return;
    }
    dispatch(actionsAppDashboard.performSend());
    state = getState();
    reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.performAddPeopleHistoryList(reducerState.currentRecipientList));
    dispatch(performPersistPeopleHistoryList());
    let body;
    const emailList = [];
    reducerState.currentRecipientList.data.map(item => { emailList.push(item.email); });
    try {
        state = getState();
        reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
        // парсим поле "generateFileParameters"
        const generateFileParameters = Converters.CONVERT_QLICK_MESSAGE_TO_QLIK_PARAMETERS(reducerState.currentQlikMessage.payload.generateFileParameters);
        // записываем выбранный формат файла в поле "outputFormat"
        generateFileParameters.NPReportPOSTParameters.config.outputFormat = Converters.CONVERT_FILE_FORMAT_FROM_ENUM_TO_STRING(reducerState.currentFileFormat);
        generateFileParameters.NPReportPOSTParameters.initiatorEmail = initiatorEmail;
        generateFileParameters.NPReportPOSTParameters.currentRepresentation = reducerState.currentRepresentation ? reducerState.currentRepresentation : Enums.Representation.Slides;
        // переводим selectionsParsed в строку
        const selections = Base64.encode(JSON.stringify(generateFileParameters));
        body = {
            exportFilters: selections,
            emailList
        };
        dispatch(callSendFile(body));
    }
    catch (error) {
        dispatch(actionsAppDashboard.performSelectionsParseFailure(error));
    }
};
export const callSendFile = (body) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    dispatch(actionsAppDashboard.callSendFile());
    dispatch(actionsAppDashboard.callSendFileExecute());
    util.call(util.urlAppDashboard.sendFile(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
        dispatch(actionsAppDashboard.callSendFileSuccess());
    }, (error) => {
        dispatch(actionsAppDashboard.callSendFileFailure(error));
    }, Converters.POST_PREFORM_SEND_TO_BOOLEAN, 'POST', { 'Content-type': 'application/json; charset=UTF-8' }, Converters.REQUEST_DASHBOARD_CALL_POST_PERFORM_SEND, body);
};
/*
 * Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik url value.
 */
export const setCurrentAppDashboardQlikUrl = (url) => (dispatch, getState) => {
    dispatch(actionsAppDashboard.setCurrentAppDashboardQlikUrl(url));
};
const getQlikCookieData = (cookies) => {
    if (Array.isArray(cookies) && cookies.length) {
        return cookies.filter((cookie) => cookie.Name === 'X-Qlik-Session' ||
            cookie.Name === 'PD-S-SESSION-ID' ||
            cookie.Name === 'PD-ID');
    }
    else {
        return null;
    }
};
export const navigateBack = () => (dispatch, getState) => {
    dispatch(performNavigateBack());
};
export const verifyCertificate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard;
    const isCertifacateImported = state.user.mrmkmcibScheduler.reducerAppScheduler.currentExchangePerson.id != '';
    if (!isCertifacateImported) {
        dispatch(handleQlikError({
            type: Enums.ErrorType.QlikSenseCertMobileAppError,
            code: 'QlikSenseCertMobileAppError',
            message: util.qlikErrorMessages.QlikSenseCertificateError,
            comment: util.getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters),
        }));
    }
};
//# sourceMappingURL=ThunkAppDashboard.js.map