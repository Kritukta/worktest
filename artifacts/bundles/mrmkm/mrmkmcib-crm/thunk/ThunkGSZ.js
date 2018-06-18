/*
 * Created by Burnaev M.U.
 */
import { Enums } from '../Enums';
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as Cache from '../modules/Cache';
import * as actionsGSZ from '../actions/ActionsGSZ';
import * as thunkGSZ from '../thunk/ThunkGSZ';
import * as thunkAppCrm from '../thunk/ThunkAppCRM';
import * as thunkEmployee from '../thunk/ThunkEmployee';
import { SplitPanelActions } from 'ufs-mobile-platform';
import { EnumsApp, navigationExecutor } from "mrmkmcib-app";
/*
 * Thunk dispatched by "GSZ" screen. Thunk used to open GSZ.
 * @param {string} gszId .
 */
export const navigateToGszScreen = (gszId) => (dispatch) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_GSZ, util.getNavigationString(Enums.Navigation.AppCRM)));
    dispatch(actionsGSZ.navigateToGszScreen(gszId));
    // Dispatch thunk "performRefresh" synchronously.
    dispatch(thunkGSZ.performRefresh());
};
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to navigate back from GSZ screen
 */
export const navigateBackFromGszScreen = () => (dispatch, getState) => {
    dispatch(actionsGSZ.navigateBackFromGszScreen());
    dispatch(thunkAppCrm.navigateBack());
    let state = getState();
    let gszNavigationHistory = state.user.mrmkmcibCRM.reducerGSZ.gszNavigationHistory;
    if (gszNavigationHistory.length > 0) {
        dispatch(thunkGSZ.setCurrentGszId(gszNavigationHistory[gszNavigationHistory.length - 1].gszId));
    }
    else {
        dispatch(thunkGSZ.resetGszNavigationHistory());
    }
};
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to set currentGszId
 * @param {string} gszId
 */
export const setCurrentGszId = (gszId) => (dispatch) => {
    dispatch(actionsGSZ.setCurrentGszId(gszId));
    dispatch(thunkGSZ.performRefresh());
};
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to reset gszNavigationHistory
 */
export const resetGszNavigationHistory = () => (dispatch) => {
    dispatch(actionsGSZ.resetGszNavigationHistory());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverChiefShow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverChiefShow());
    // Dispatch thunk "navigateToEmployeeScreen" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    if (reducerState.currentGsz.chief != null) {
        dispatch(SplitPanelActions.pushContent(Enums.NavigationContentGsz.Chief, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
        dispatch(thunkEmployee.navigateToEmployeeScreen(reducerState.currentGsz.chief.id, true, Enums.EmployeeMode.GszChief));
    }
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to open customer screen.
 */
export const performCustomerOpen = (customerId) => (dispatch, getState) => {
    // exit search mode
    dispatch(performMemberListSearchModeDisable());
    dispatch(performPopoverBorrowerListHide());
    dispatch(thunkAppCrm.performCustomerOpen(customerId));
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 */
export const performPopoverChiefHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverChiefHide());
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverSortingShow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverSortingShow());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 */
export const performPopoverSortingHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverSortingHide());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 */
export const gszLoadingErrorModalHide = (withPopContent = false) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    if (withPopContent) {
        dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
    }
    dispatch(actionsGSZ.gszLoadingErrorModalHide());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverLimitsShow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverLimitsShow());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 */
export const performPopoverLimitsHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverLimitsHide());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to include company to GSZ.
 */
export const navigateToGszActivityIncludeScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    switch (reducerState.gszActivityCreateMode) {
        case Enums.GSZActivityCreateMode.Exclude: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
            dispatch(actionsGSZ.navigateToGszActivityIncludeScreen());
            let state = getState();
            let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
            if (reducerState.gszActivityCreateMode !== Enums.GSZActivityCreateMode.Exclude) {
                setTimeout(() => {
                    dispatch(SplitPanelActions.pushContent(Enums.NavigationGSZInIncludeExcludeOrganization.GSZ_Include_View, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
                }, 1000);
            }
            break;
        }
        case Enums.GSZActivityCreateMode.Include: {
            break;
        }
        case Enums.GSZActivityCreateMode.None: {
            dispatch(SplitPanelActions.pushContent(Enums.NavigationGSZInIncludeExcludeOrganization.GSZ_Include_View, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
            dispatch(actionsGSZ.navigateToGszActivityIncludeScreen());
            break;
        }
    }
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to exclude company from GSZ.
 */
export const navigateToGszActivityExcludeScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    switch (reducerState.gszActivityCreateMode) {
        case Enums.GSZActivityCreateMode.Include: {
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
            dispatch(actionsGSZ.navigateToGszActivityExcludeScreen());
            let state = getState();
            let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
            if (reducerState.gszActivityCreateMode !== Enums.GSZActivityCreateMode.Include) {
                setTimeout(() => {
                    dispatch(SplitPanelActions.pushContent(Enums.NavigationGSZInIncludeExcludeOrganization.GSZ_Exclude_View, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
                }, 1000);
            }
            break;
        }
        case Enums.GSZActivityCreateMode.Exclude: {
            break;
        }
        case Enums.GSZActivityCreateMode.None: {
            dispatch(SplitPanelActions.pushContent(Enums.NavigationGSZInIncludeExcludeOrganization.GSZ_Exclude_View, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
            dispatch(actionsGSZ.navigateToGszActivityExcludeScreen());
            break;
        }
    }
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to reset gszActivityCreateMode.
 */
export const resetGszActivityCreateMode = () => (dispatch) => {
    dispatch(actionsGSZ.resetGszActivityCreateMode());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to close Gsz activity.
 */
export const closeGszActivityPanel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.closeGszActivityPanel());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverCuratorShow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverCuratorShow());
    // Dispatch thunk "navigateToEmployeeScreen" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    if (reducerState.currentGsz.curator != null) {
        dispatch(SplitPanelActions.pushContent(Enums.NavigationContentGsz.Curator, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
        dispatch(thunkEmployee.navigateToEmployeeScreen(reducerState.currentGsz.curator.id, true, Enums.EmployeeMode.GszCurator));
    }
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 */
export const performPopoverCuratorHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverCuratorHide());
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on change current sorting type.
 */
export const performInputSortingType = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performInputSortingType(value));
    // hide popover
    dispatch(performPopoverSortingHide());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to load GSZ data.
 */
export const performRefresh = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    if (reducerState.currentGszFetching) {
        return;
    }
    dispatch(actionsGSZ.performRefresh());
    if (!reducerState.currentGszFetching) {
        dispatch(actionsGSZ.performRefreshExecute());
        // Dispatch thunk "refresh_callGetGsz" synchronously.
        dispatch(thunkGSZ.refresh_callGetGsz());
    }
};
export const performRefreshSuccess = (data) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performRefreshSuccess(data));
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Gsz_PerformRefreshSuccess));
};
export const performRefreshFailure = (error) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performRefreshFailure(error));
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, `Ошибка при получении карточки ГСЗ: ${error.message}.${error.comment}`));
};
/*
 * Thunk dispatched by "GSZ" screen. Remove cache and execute performRefresh
 */
export const performFlush = () => (dispatch, getState) => {
    Cache.sessionResetTag({ tag: util.getGSZRequestRefreshString(Enums.GSZRequestRefresh.GSZRequestRefreshEnabled) });
    dispatch(actionsGSZ.performFlush());
    dispatch(thunkGSZ.performRefresh());
};
/*
 * Thunk dispatched by "GSZ" screen. Remove cache and refresh the limits
 */
export const performFlushLimits = () => (dispatch, getState) => {
    Cache.sessionResetTag({ tag: util.getGSZRequestRefreshString(Enums.GSZRequestRefresh.GSZRequestRefreshEnabled) });
    dispatch(actionsGSZ.performFlushLimits());
    dispatch(thunkGSZ.refresh_callGetGszLimit());
};
/*
 * Thunk dispatched by "GSZ" screen. Fetch Gsz with current Id.
 */
export const refresh_callGetGsz = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    if (reducerState.currentGszFetching) {
        return;
    }
    let operationId = reducerState.currentGszId;
    if (!reducerState.currentGszFetching) {
        dispatch(actionsGSZ.refresh_callGetGszRequest());
        // Reset split panel, to avoid navigation bags
        dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)));
        util.call(util.urlGSZ.refresh_callGetGsz(state, reducerState, [{ tag: Enums.CachePolicy.Default }, { tag: util.getGSZRequestRefreshString(Enums.GSZRequestRefresh.GSZRequestRefreshEnabled) }]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGSZ;
            if (reducerState.currentGszId != operationId)
                return;
            dispatch(actionsGSZ.refresh_callGetGszSuccess(response));
            // Dispatch thunk "refresh_callGetGszLimit" on fetch succeeded.
            dispatch(thunkGSZ.refresh_callGetGszLimit());
            dispatch(thunkGSZ.performGszRefreshPanelShow());
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGSZ;
            if (reducerState.currentGszId != operationId)
                return;
            Converters.CONVERT_ERROR_GSZ(error);
            dispatch(actionsGSZ.refresh_callGetGszFailure(error));
            // Dispatch thunk "performRefreshFailure" on fetch failure.
            dispatch(thunkGSZ.performRefreshFailure(error));
        }, Converters.RESPONSE_GSZ_REFRESH_CALL_GET_GSZ_TO_GSZ, 'GET');
    }
};
/*
 * Thunk dispatched by "GSZ" screen. Fetch Gsz limit information.
 */
export const refresh_callGetGszLimit = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    if (reducerState.gszLimitFetching) {
        return;
    }
    let operationId = reducerState.currentGszId;
    dispatch(actionsGSZ.refresh_callGetGszLimit());
    if (!reducerState.gszLimitFetching) {
        dispatch(actionsGSZ.refresh_callGetGszLimitRequest());
        let gszURL = reducerState.currentGsz.isNsl === true ?
            util.urlGSZ.refresh_callGetGszLimitNew(state, reducerState, [{ tag: Enums.CachePolicy.Default }, { tag: util.getGSZRequestRefreshString(Enums.GSZRequestRefresh.GSZRequestRefreshEnabled) }]) :
            util.urlGSZ.refresh_callGetGszLimit(state, reducerState, [{ tag: Enums.CachePolicy.Default }, { tag: util.getGSZRequestRefreshString(Enums.GSZRequestRefresh.GSZRequestRefreshEnabled) }]);
        util.call(gszURL, (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGSZ;
            if (reducerState.currentGszId != operationId)
                return;
            dispatch(actionsGSZ.refresh_callGetGszLimitSuccess(response));
            // Dispatch thunk "performRefreshSuccess" on fetch succeeded.
            dispatch(thunkGSZ.performRefreshSuccess(true));
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerGSZ;
            if (reducerState.currentGszId != operationId)
                return;
            Converters.CONVERT_ERROR_GSZ(error);
            dispatch(actionsGSZ.refresh_callGetGszLimitFailure(error));
            // Dispatch thunk "performRefreshFailure" on fetch failure.
            dispatch(thunkGSZ.performRefreshFailure(error));
        }, Converters.RESPONSE_GSZ_REFRESH_CALL_GET_GSZ_LIMIT_TO_GSZ_LIMIT, 'GET');
    }
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverBorrowerListShow = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverBorrowerListShow(value));
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performGszRefreshPanelHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performGszRefreshPanelHide());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performGszRefreshPanelShow = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performGszRefreshPanelShow());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverBorrowerListSearchModeEnable = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverBorrowerListSearchModeEnable());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to show popover.
 */
export const performPopoverBorrowerListSearchModeDisable = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverBorrowerListSearchModeDisable());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to hide popover.
 */
export const performPopoverBorrowerListHide = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performPopoverBorrowerListHide());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
 */
export const performInputBorrowerListSearch = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performInputBorrowerListSearch(value));
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
 */
export const navigateToBorrowerScreen = (borrower) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmGszBorrowers.AppCRM_GSZ_BorrowersDetails, util.getNavigationPopoverString(Enums.NavigationContentAppCrmGszBorrowers.AppCRM_GSZ_Borrowers)));
    dispatch(actionsGSZ.navigateToBorrowerScreen(borrower));
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk used to open borrower screen.
 */
export const navigateBorrowerListBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.navigateBorrowerListBack());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk dispatched on search input changed.
 */
export const performInputMemberListSearch = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerGSZ;
    dispatch(actionsGSZ.performInputMemberListSearch(value));
    // Dispatch thunk "performMemberListSearch" synchronously.
    dispatch(thunkGSZ.performMemberListSearch());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to perform search query.
 */
export const performMemberListSearch = () => (dispatch) => {
    dispatch(actionsGSZ.performMemberListSearch());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to enter search mode
 */
export const performMemberListSearchModeEnable = () => (dispatch) => {
    dispatch(actionsGSZ.performMemberListSearchModeEnable());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to exit search mode
 */
export const performMemberListSearchModeDisable = () => (dispatch) => {
    dispatch(actionsGSZ.performMemberListSearchModeDisable());
    dispatch(thunkGSZ.performInputMemberListSearchReset());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch) => {
    dispatch(actionsGSZ.performContainerReset());
};
/*
 * Thunk dispatched by "GSZ" screen. Thunk chain used to disable search mode and hide popover.
 */
export const performPopoverBorrowerListCancel = () => (dispatch) => {
    dispatch(thunkGSZ.performPopoverBorrowerListSearchModeDisable());
    dispatch(thunkGSZ.performPopoverBorrowerListHide());
};
/*
 * Thunk dispatched by 'GSZ' screen. Thunk dispatched on search input reset.
 */
export const performInputMemberListSearchReset = () => (dispatch) => {
    dispatch(actionsGSZ.performInputMemberListSearchReset());
};
//# sourceMappingURL=ThunkGSZ.js.map