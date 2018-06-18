/*
 * Created by Burnaev M.U.
 */
import { Enums } from '../Enums';
import { defaultValues } from "../models/Models";
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsOccasionList from '../actions/ActionsOccasionList';
import * as thunkAgent from '../thunk/ThunkAgent';
import * as thunkOccasionList from '../thunk/ThunkOccasionList';
import * as thunkOccasion from '../thunk/ThunkOccasion';
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import { SplitPanelActions } from 'ufs-mobile-platform';
import { EnumsApp, navigationExecutor, performNavigateBack, } from 'mrmkmcib-app';
export const performInit = () => (dispatch, getState) => {
    let state = getState();
    let navigationType = state.user.mrmkmcibApp.reducerAuthorization.navigateToEntityData.navigationType;
    if (navigationType != EnumsApp.NavigationType.None) {
        dispatch(navigationExecutor(EnumsApp.NavigationStep.OccasionList_ScreenMounted));
    }
};
export const performChangeDisplayOccasionListErrorModalWindow = (value) => (dispatch, getState) => {
    dispatch(actionsOccasionList.performChangeDisplayOccasionListErrorModalWindow(value));
};
/*
 * Thunk dispatched by "OccasionList" screen. Thunk used to confirm changes in occasion list.
 */
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    switch (reducerState.occasionListContextMode) {
        case Enums.OccasionListContextMode.Agent:
        case Enums.OccasionListContextMode.CustomerManaged: {
            if (reducerState.hasChangedOccasionList) {
                dispatch(thunkOccasionList.performCallOccasionListUpdate());
            }
            else {
                dispatch(actionsOccasionList.performSaveOccasionList());
            }
            break;
        }
        case Enums.OccasionListContextMode.NewEditCustomerManaged:
        case Enums.OccasionListContextMode.NewEditAgent: {
            dispatch(actionsOccasionList.performSaveOccasionList());
            break;
        }
    }
};
/*
 * Thunk dispatched by "OccasionListScreen" screen. Fetch put request.
 */
export const callUpdateRequestCustomerOccasionList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    let currentCustomer = state.user.mrmkmcibCRM.reducerOccasionList.currentCustomer;
    let operationId = currentCustomer && currentCustomer.id || "";
    util.call(util.urlCustomerEditor.callPutCustomerUpdate(state, Object.assign({}, defaultValues.CustomerManaged, currentCustomer), [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
        state = getState();
        currentCustomer = state.user.mrmkmcibCRM.reducerOccasionList.currentCustomer;
        if (currentCustomer && (currentCustomer.id != operationId))
            return;
        dispatch(thunkOccasionList.callUpdateSuccessOccasionList(response));
    }, (error) => {
        // console.log('callPutCustomerUpdate - failure')
        state = getState();
        currentCustomer = state.user.mrmkmcibCRM.reducerOccasionList.currentCustomer;
        if (currentCustomer && (currentCustomer.id != operationId))
            return;
        dispatch(thunkOccasionList.callUpdateFailureOccasionList(error));
    }, Converters.RESPONSE_CUSTOMER_CALL_PUT_CUSTOMER_OCCASION_LIST_UPDATE_REQUEST, 'PUT', { 'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid }, Converters.REQUEST_CUSTOMER_CALL_PUT_CUSTOMER_OCCASION_LIST_UPDATE_REQUEST, {
        id: currentCustomer && currentCustomer.id || "",
        name: currentCustomer ? currentCustomer.name || currentCustomer.shortName : '',
        modId: currentCustomer && currentCustomer.modId || 0,
        occasionList: reducerState.inputOccasionList,
    });
};
export const callUpdateSuccessOccasionList = (response) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(thunkOccasionList.performChangeDisplayOccasionListErrorModalWindow(false));
    switch (reducerState.occasionListContextMode) {
        case Enums.OccasionListContextMode.Agent: {
            dispatch(actionsOccasionList.performUpdateAgentOccasionListSuccess(Object.assign({}, reducerState.currentAgent, response.data)));
            dispatch(thunkAgent.performFlush());
            break;
        }
        case Enums.OccasionListContextMode.CustomerManaged: {
            dispatch(actionsOccasionList.performUpdateCustomerOccasionListSuccess(Object.assign({}, reducerState.currentCustomer, response.data)));
            break;
        }
    }
};
export const callUpdateFailureOccasionList = (error) => (dispatch, getState) => {
    dispatch(thunkOccasionList.performChangeDisplayOccasionListErrorModalWindow(true));
    dispatch(actionsOccasionList.callUpdateFailureOccasionList(error));
};
/*
 * Thunk dispatched by "Agent" screen. Fetch put request.
 */
export const callUpdateRequestAgentOccasionList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    let currentAgent = reducerState.currentAgent;
    let operationId = currentAgent ? currentAgent.id : '';
    dispatch(thunkAgent.performFlush());
    util.call(util.urlAgent.callPutAgentUpdate(state, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
        state = getState();
        currentAgent = state.user.mrmkmcibCRM.reducerOccasionList.currentAgent;
        if (currentAgent && (currentAgent.id != operationId))
            return;
        dispatch(thunkOccasionList.callUpdateSuccessOccasionList(response));
    }, (error) => {
        state = getState();
        currentAgent = state.user.mrmkmcibCRM.reducerOccasionList.currentAgent;
        if (currentAgent && currentAgent.id != operationId)
            return;
        dispatch(thunkOccasionList.callUpdateFailureOccasionList(error));
    }, Converters.AGENT_CREATE_UPDATE_REQUEST_RESPONSE, 'PUT', { 'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid }, Converters.REQUEST_AGENT_CALL_PUT_AGENT_OCCASION_LIST_UPDATE_REQUEST, {
        modId: currentAgent && currentAgent.modId || 0,
        id: currentAgent && currentAgent.id || "",
        firstName: currentAgent && currentAgent.firstName || "",
        lastName: currentAgent && currentAgent.lastName || "",
        middleName: currentAgent && currentAgent.middleName || "",
        workPhone: currentAgent ? util.getWorkPhone(currentAgent.phoneList) : "",
        mobilePhone: currentAgent ? util.getMobilePhone(currentAgent.phoneList) : "",
        email: currentAgent && currentAgent.email || "",
        birthday: currentAgent && currentAgent.birthday || new Date(),
        gender: currentAgent && currentAgent.gender || Enums.GenderList.None,
        comment: currentAgent && currentAgent.comment || '',
        noteList: currentAgent ? currentAgent.noteList : { data: [] },
        occasionList: reducerState.inputOccasionList,
        sexClassifierList: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SEX_MF,
    });
};
export const performCallOccasionListUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsOccasionList.callUpdateRequestOccasionList());
    switch (reducerState.occasionListContextMode) {
        case Enums.OccasionListContextMode.Agent: {
            dispatch(thunkOccasionList.callUpdateRequestAgentOccasionList());
            break;
        }
        case Enums.OccasionListContextMode.CustomerManaged: {
            dispatch(thunkOccasionList.callUpdateRequestCustomerOccasionList());
            break;
        }
    }
};
/*
 * Thunk dispatched by "OccasionList" screen. Thunk used to enter editor mode.
 */
export const performEdit = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsOccasionList.performEdit());
};
/*
 * Thunk dispatched by "OccasionList" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    if (reducerState.occasionListMode != Enums.OccasionListMode.Edit) {
        dispatch(thunkOccasionList.performCloseOccasionListScreen());
    }
    else {
        dispatch(actionsOccasionList.performCancel());
    }
};
export const performInputOccasionList = (occasionList) => (dispatch, getState) => {
    dispatch(actionsOccasionList.performInputOccasionList(occasionList));
};
/*
 * Thunk dispatched by "OccasionList" screen.
 */
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(SplitPanelActions.popContent(util.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionListScreen)));
    dispatch(actionsOccasionList.navigateBack());
};
export const performCloseOccasionListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    switch (reducerState.occasionListContextMode) {
        case Enums.OccasionListContextMode.Agent:
        case Enums.OccasionListContextMode.NewEditAgent: {
            dispatch(thunkAgent.performInputAgentOccasionList(reducerState.inputOccasionList));
            dispatch(thunkAgent.perfromCloseAgentOccasionListScreen(reducerState.currentAgent || defaultValues.Agent));
            break;
        }
        case Enums.OccasionListContextMode.CustomerManaged: {
            if (reducerState.hasChangedOccasionList) {
                dispatch(thunkCustomer.performCustomerCacheReset());
            }
            dispatch(thunkCustomer.performReturnToCustomerScreen(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)));
            break;
        }
        case Enums.OccasionListContextMode.Notice: {
            if (reducerState.hasChangedOccasionList) {
                dispatch(thunkCustomer.performCustomerCacheReset());
            }
            dispatch(thunkAppCRM.performContainerReset());
            dispatch(thunkCustomer.performContainerReset());
            dispatch(thunkAgent.performContainerReset());
            dispatch(SplitPanelActions.resetAllSplitPanels());
            dispatch(performNavigateBack());
            break;
        }
    }
    dispatch(performContainerReset());
};
export const performUpdateOccasionList = (occasionList) => (dispatch, getState) => {
    dispatch(changeStatusNeedUpdateOccasionList(true));
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    if (reducerState.occasionListMode != Enums.OccasionListMode.Edit) {
        dispatch(actionsOccasionList.performEdit());
    }
    dispatch(actionsOccasionList.performUpdateOccasionList(occasionList));
};
export const performOpenOccasionScreen = (occasion, occasionMode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    if (occasionMode != Enums.OccasionMode.Create &&
        reducerState.occasionListMode == Enums.OccasionListMode.Edit) {
        return;
    }
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentOccasionList.OccasionCard, util.getNavigationAppCrmString(Enums.NavigationAppCRM.OccasionListScreen)));
    let occasionContextMode = Enums.OccasionContextMode.OccasionList;
    dispatch(thunkOccasion.performOpenOccasionScreen(occasion, occasionMode, occasionContextMode));
};
export const performOpenOccasionListScreen = (occasionList, occasionListConfig) => (dispatch, getState) => {
    let state = getState();
    let { accessLevel, currentAgent, currentCustomer, contextMode } = occasionListConfig;
    let occasiontList = dispatch(actionsOccasionList.performOpenOccasionListScreen(contextMode, accessLevel, currentAgent, currentCustomer));
    dispatch(thunkOccasionList.performInputOccasionList(occasionList));
};
export const changeStatusNeedUpdateOccasionList = (hasChangedOccasionList) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsOccasionList.changeStatusNeedUpdateOccasionList(hasChangedOccasionList));
};
export const performDeleteOccasionWithMenuOption = (occasion) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    let updatedOccasionListWithMenuOption = Array.isArray(reducerState.occasionListWithMenuOption) ?
        reducerState.occasionListWithMenuOption
            .filter((occasionId) => occasionId != occasion.id) : [];
    dispatch(actionsOccasionList.performUpdateOccasionListWithMenuOption([...updatedOccasionListWithMenuOption]));
};
export const performAddOccasionWithMenuOption = (occasion) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsOccasionList.performUpdateOccasionListWithMenuOption([...reducerState.occasionListWithMenuOption, occasion.id]));
};
export const performDeleteOccasion = (occasion) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    let inputOccasionList = reducerState.inputOccasionList;
    let updatedOccasionList = inputOccasionList.data
        .filter((occasionState) => occasionState.id != occasion.id);
    let updatedOccasionListWithMenuOption = Array.isArray(reducerState.occasionListWithMenuOption) ?
        reducerState.occasionListWithMenuOption
            .filter((occasionId) => occasionId != occasion.id) : [];
    dispatch(actionsOccasionList.performDeleteOccasion());
    dispatch(thunkOccasionList.performUpdateOccasionList({ data: updatedOccasionList }));
    dispatch(actionsOccasionList.performUpdateOccasionListWithMenuOption(updatedOccasionListWithMenuOption));
};
export const openOccasionListPanel = () => (dispatch) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_OccasionList, util.getNavigationString(Enums.Navigation.AppCRM)));
};
/*
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerOccasionList;
    dispatch(actionsOccasionList.performContainerReset());
};
/*
 * Thunk dispatched by "OccasionList" screen. Thunk dispatched to change Occasion List access level.
 */
export const performSetOccasionListAccessLevel = (value) => (dispatch) => {
    dispatch(actionsOccasionList.performSetOccasionListAccessLevel(value));
};
//# sourceMappingURL=ThunkOccasionList.js.map