/*
 * Created by Burnaev M.U.
 */
import * as _ from 'lodash';
import { EnumsCrm, isCustomerHolder } from "mrmkmcib-crm";
import { EnumsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { defaultValues } from "../models/Models";
import * as Converters from "../models/Converters";
import * as util from '../common/Util';
import * as actionsDealEditor from '../actions/ActionsDealEditor';
import * as actionDealList from '../actions/ActionsDealList';
import * as thunkDealEditor from '../thunk/ThunkDealEditor';
import * as thunkDealList from '../thunk/ThunkDealList';
import * as thunkDeal from '../thunk/ThunkDeal';
import * as thunkMemberList from '../thunk/ThunkMemberList';
import * as thunkClassifier from '../thunk/ThunkSelectClassifierWithSearch';
import { SplitPanelActions } from 'ufs-mobile-platform';
import { performUnBoundActivityFromDeal as performActivityExclude, performActivityListRefresh, performActivityListRefreshCacheReset } from "mrmkmcib-scheduler";
import * as Cache from '../modules/Cache';
import * as thunkAgentList from "./ThunkAgentList";
/*
 * Thunk dispatched by "DealEditor" screen. Thunk chain used to show deal editor.
 */
export const navigateToDealEditor = (deal, mode, agentList) => (dispatch, getState) => {
    let state = getState();
    const editableDeal = Object.assign({}, deal, { agentList: agentList });
    let reducerDeal = state.user.mrmkmcibCRM.reducerDeal;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    dispatch(actionsDealEditor.navigateToDealEditor(editableDeal, mode, util.isInitRoadMapNecessary(reducerDeal)));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_DealEditor, util.getNavigationString(Enums.Navigation.AppCRM)));
    // Dispatch thunk "swapContext" synchronously.
    state = getState();
    dispatch(thunkDealEditor.swapContext(state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, editableDeal, Enums.DealEditorMode.UpdateMode == mode));
    if (mode == Enums.DealEditorMode.CreateMode) {
        dispatch(performActivityListRefreshCacheReset(EnumsScheduler.SchedulerMode.Deal, Object.assign({}, state.user.mrmkmcibApp.reducerAuthorization.currentUser), Object.assign({}, defaultValues.Deal), customer, Object.assign({}, defaultValues.Agent), EnumsScheduler.SchedulerMode.NewDeal));
    }
    if (mode == Enums.DealEditorMode.UpdateMode) {
        dispatch(performActivityListRefreshCacheReset(EnumsScheduler.SchedulerMode.Deal, Object.assign({}, state.user.mrmkmcibApp.reducerAuthorization.currentUser), Object.assign({}, reducerDeal.currentDeal), customer, Object.assign({}, defaultValues.Agent), EnumsScheduler.SchedulerMode.DealEditorActivityList));
        dispatch(thunkDealEditor.initialValuesForDealEditor(editableDeal));
    }
    dispatch(thunkDealEditor.prepareProductClassifiers());
    dispatch(thunkDealEditor.prepareSalesMethodClassifiers());
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.initial));
};
export const initialValuesForDealEditor = (deal) => (dispatch, getState) => {
    let state = getState();
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(actionsDealEditor.initialValuesForDealEditor(deal, classifierDictionary));
};
export const prepareProductClassifiers = () => (dispatch, getState) => {
    let state = getState();
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(actionsDealEditor.prepareProductClassifiers(util.getClassifierUniqueValuesByCode(classifierDictionary.DEAL_PRODUCT_SALE_METHOD)));
};
export const prepareSalesMethodClassifiers = () => (dispatch, getState) => {
    let state = getState();
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(actionsDealEditor.prepareSalesMethodClassifiers(util.getClassifierUniqueValuesByCode(classifierDictionary.DEAL_SALE_METHOD)));
};
/*
 * Internal thunk used in "DealEditor" container. Thunk chain used to swap customer and user.
 */
export const swapContext = (customer, deal, isEditorMode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(actionsDealEditor.swapContext(customer, util.getDealWithUser(deal, currentUser, classifierDictionary.SALES_TEAM_ROLE), isEditorMode));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to cancel changes.
 */
export const performCancel = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    if (reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode) {
        dispatch(performActivityListRefresh(EnumsScheduler.SchedulerMode.Customer, Object.assign({}, defaultValues.Employee), Object.assign({}, defaultValues.Deal), customer, Object.assign({}, defaultValues.Agent)));
    }
    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
    dispatch(actionsDealEditor.performCancel());
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to go to next step.
 */
export const performNext = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrmDealEditor.AppCRM_DealEditor_AdditionalStep, util.getNavigationString(Enums.Navigation.AppCRM_DealEditor_Form)));
    dispatch(actionsDealEditor.performNext());
};
export const performSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let reducerStateDeal = state.user.mrmkmcibCRM.reducerDeal;
    let operationUuidCreate = '';
    let operationUuidUpdate = '';
    if (reducerState.dealSaveInProgress) {
        return;
    }
    // диспатчим режим сохранения и создаём operationUuid (в reducer)
    operationUuidCreate = util.getRandomOperationUuid();
    operationUuidUpdate = util.getRandomOperationUuid();
    dispatch(actionsDealEditor.performSave(reducerState.operationUuidCreate
        ? reducerState.operationUuidCreate
        : operationUuidCreate, reducerState.operationUuidUpdate
        ? reducerState.operationUuidUpdate
        : operationUuidUpdate));
    if (!reducerState.dealSaveInProgress) {
        dispatch(actionsDealEditor.performSaveExecute()); //устанавливаем флаги начала сохранения
        if (reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode) {
            dispatch(thunkDealEditor.callPostDealCreate()); // сетевой запрос на создание сделки
        }
        if (reducerState.dealEditorMode == Enums.DealEditorMode.UpdateMode) {
            dispatch(thunkDealEditor.callPutDealUpdate()); // сетевой запрос на редактирование сделки
        }
    }
};
export const performCancelSaveError = () => (dispatch) => {
    dispatch(actionsDealEditor.performCancelSaveError());
};
export const perforSetDealCreationMode = (mode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.perforSetDealCreationMode(mode));
};
export const prepareDealList = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let currentDeal = state.user.mrmkmcibCRM.reducerDealEditor.currentDeal;
    let currentDealList = state.user.mrmkmcibCRM.reducerDealList.dealOpenedList;
    if (reducerState.dealEditorMode == Enums.DealEditorMode.UpdateMode) {
        currentDeal = state.user.mrmkmcibCRM.reducerDeal.currentDeal;
    }
    dispatch(actionDealList.performNewDealListUpdate({
        data: [currentDeal].concat(currentDealList.data)
    }));
    dispatch(actionsDealEditor.prepareDealList());
};
export const callPostDealCreate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let accountId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId;
    if (reducerState.dealCreateFetching) {
        return;
    }
    dispatch(actionsDealEditor.callPostDealCreate());
    dispatch(actionsDealEditor.performNavigationButtonDisabled(true));
    if (!reducerState.dealCreateFetching) {
        dispatch(actionsDealEditor.callPostDealCreateRequest());
        util.call(util.urlDealEditor.callPostDealCreate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
            dispatch(actionsDealEditor.callPostDealCreateRequestSuccess(response.data));
            dispatch(thunkDealEditor.callGetDealRefresh());
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
            dispatch(actionsDealEditor.performNavigationButtonDisabled(false));
            dispatch(actionsDealEditor.callPostDealCreateRequestFailure(error));
            dispatch(actionsDealEditor.performSaveFailure(error));
        }, Converters.RESPONSE_DEAL_CREATE_CALL_POST_TO_ID, 'POST', { 'Content-type': 'application/json; charset=UTF-8', 'operUid': reducerState.operationUuidCreate }, Converters.REQUEST_DEAL_CREATE_CALL_POST_DEAL_CREATE_FROM_DEAL_EDITOR_UPDATE_REQUEST, {
            operationUuid: reducerState.operationUuid,
            accountId: accountId,
            title: reducerState.inputDescription,
            productClassifier: reducerState.inputProduct,
            salesMethodClassifier: reducerState.inputSalesMethod,
            requestType: reducerState.inputDealType,
            application: reducerState.inputApplication &&
                reducerState.inputApplication.code
                ? reducerState.inputApplication
                : null
        });
    }
};
export const callGetDealRefresh = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.currentDealFetching) {
        return;
    }
    dispatch(actionsDealEditor.callGetDealRefresh());
    if (!reducerState.currentDealFetching) {
        dispatch(actionsDealEditor.callGetDealRefreshRequest());
        util.call(util.urlDealEditor.callGetDealRefresh(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
            dispatch(actionsDealEditor.callGetDealRefreshSuccess(response));
            if (reducerState.dealCreated) {
                dispatch(thunkDealEditor.prepareDealList());
                dispatch(thunkDealEditor.performCancel());
                dispatch(actionsDealEditor.performNavigationButtonDisabled(false));
                dispatch(thunkDealList.startRowAnimation(true));
            }
            else
                dispatch(thunkDealEditor.callPutDealUpdate()); // заканчиваем создание сделки путём редактирования
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
            dispatch(actionsDealEditor.callGetDealRefreshFailure(error));
            dispatch(actionsDealEditor.performNavigationButtonDisabled(false));
            dispatch(actionsDealEditor.performSaveFailure(error));
        }, Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod, state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary, state.user.mrmkmcibCRM.reducerAppCRM.currentUser, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged), 'GET');
    }
};
export const callPutDealUpdate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let accountId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId;
    let currentDeal = state.user.mrmkmcibCRM.reducerDealEditor.currentDeal;
    if (reducerState.dealUpdateFetching) {
        return;
    }
    dispatch(actionsDealEditor.callPutDealUpdate());
    dispatch(actionsDealEditor.performNavigationButtonDisabled(true));
    if (!reducerState.dealUpdateFetching) {
        dispatch(actionsDealEditor.callPutDealUpdateRequest());
        util.call(util.urlDealEditor.callPutDealUpdate(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
            dispatch(actionsDealEditor.callPutDealUpdateRequestSuccess());
            if (reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode) {
                if (reducerState.activityList.data.length < 1) {
                    dispatch(actionsDealEditor.dealCreated());
                    state = getState();
                    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                    dispatch(thunkDealEditor.callGetDealRefresh());
                    /*TODO отключение функционала в рамках релиза 2018-1
                    if ( reducerState.isInitRoadMapNecessary) {
                        dispatch ( thunkDealEditor.callPutDealInitRoadMap () )
                    }*/
                }
                else {
                    dispatch(thunkDealEditor.performInputOperUuid());
                    dispatch(thunkDealEditor.callPutDealActivityAppend(reducerState.activityList.data.length - 1));
                }
            }
            if (reducerState.dealEditorMode == Enums.DealEditorMode.UpdateMode) {
                dispatch(actionsDealEditor.performNavigationButtonDisabled(false));
                dispatch(thunkDealEditor.performReturnToDeal()); // сетевой запрос на редактирование сделки
            }
        }, (error) => {
            state = getState();
            reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
            dispatch(actionsDealEditor.callPutDealUpdateRequestSFailure(error));
            dispatch(actionsDealEditor.performNavigationButtonDisabled(false));
            dispatch(actionsDealEditor.performSaveFailure(error));
        }, Converters.RESPONSE_DEAL_UPDATE_CALL_PUT_TO_BOOLEAN, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8',
            'operUid': reducerState.operationUuidUpdate
        }, Converters.REQUEST_DEAL_UPDATE_CALL_PUT_DEAL_UPDATE_FROM_DEAL_EDITOR_UPDATE_REQUEST, {
            operationUuid: reducerState.operationUuid,
            accountId: accountId,
            currentDeal: reducerState.currentDeal,
            title: reducerState.inputDescription,
            productClassifier: reducerState.inputProduct,
            salesMethodClassifier: reducerState.inputSalesMethod,
            id: currentDeal.id,
            modId: currentDeal.modId,
            team: reducerState.inputTeam,
            agents: reducerState.inputAgentList,
            currencyClassifier: reducerState.inputCurrency,
            sumInCurrency: reducerState.inputSumString
                ? `${util.convertStringToNumber(reducerState.inputSumString)}`
                : null,
            sumInCurrencyEkv: reducerState.inputEquivalentSumString && reducerState.inputSumString
                ? `${util.convertStringToNumber(reducerState.inputEquivalentSumString)}`
                : null,
            plannedFinishDate: reducerState.inputDealDate
                ? reducerState.inputDealDate
                : null,
            requestType: reducerState.inputDealType,
            utilization: reducerState.inputApplication && reducerState.inputApplication.code
                ? reducerState.inputApplication
                : null,
            probability: reducerState.inputChance
                ? +reducerState.inputChance
                : null,
            staffCount: reducerState.inputStaffCount
                ? +reducerState.inputStaffCount
                : null,
            comm: reducerState.inputTransferCommission
                ? util.convertStringToNumber(reducerState.inputTransferCommission)
                : null,
            attractingChannel: reducerState.inputAttractionChannel && reducerState.inputAttractionChannel.code
                ? reducerState.inputAttractionChannel
                : null,
        });
    }
};
export const callPutDealInitRoadMap = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.dealInitRoadMapFetching) {
        return;
    }
    dispatch(actionsDealEditor.callPutDealInitRoadMap());
    if (!reducerState.dealInitRoadMapFetching) {
        dispatch(actionsDealEditor.callPutDealInitRoadMapRequest());
        util.call(util.urlDealEditor.callPutDealInitRoadMap(state, reducerState, [
            { tag: Enums.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(actionsDealEditor.callPutDealInitRoadMapRequestSuccess());
            dispatch(thunkDealEditor.callGetDealRefresh());
        }, (error) => {
            dispatch(actionsDealEditor.callPutDealInitRoadMapRequestFailure(error));
            dispatch(actionsDealEditor.performInitRoadMapFailure(error));
        }, Converters.RESPONSE_DEAL_INIT_ROAD_MAP_TO_ID, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8'
        }, Converters.REQUEST_DEAL_INIT_ROAD_MAP_FROM_DEAL_INIT_ROAD_MAP_REQUEST, {
            id: reducerState.id || reducerState.currentDeal.id,
        });
    }
};
export const performNavigationButtonDisabled = (isNavigationButtonDisabled) => (dispatch) => {
    dispatch(actionsDealEditor.performNavigationButtonDisabled(isNavigationButtonDisabled));
};
export const performReturnToDeal = () => (dispatch) => {
    Cache.sessionResetTagList([
        {
            tag: util.getRefreshDealAfterMemberListUpdateTagString(Enums.RefreshDealAfterMemberListUpdateTag.RefreshDealAfterMemberListUpdateEnabled)
        }
    ]);
    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
    dispatch(thunkDeal.performRefresh());
    dispatch(actionsDealEditor.performReturnToDeal());
};
export const callPostDealCreateRequestSuccess = (id) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.callPostDealCreateRequestSuccess(id));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap navigate back.
 */
export const navigateBack = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.navigateBack());
};
export const navigateBackEditor = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM_DealEditor)));
    dispatch(SplitPanelActions.popAccessory(util.getNavigationString(Enums.Navigation.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.navigateBackEditor());
};
export const performInputCustomer = (value) => (dispatch) => {
    dispatch(actionsDealEditor.performInputCustomer(value));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Description field.
 */
export const performInputDescription = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performInputDescription(value));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.inputDescription));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Product field.
 */
export const navigateToProductPickerScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.isRowBlocked) {
        return;
    }
    const classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(thunkClassifier.navigateToClassifier(reducerState.productClassifiersList, reducerState.inputProduct.code, Enums.ClassifierMode.DealEditor_Product));
    dispatch(actionsDealEditor.navigateToProductPickerScreen());
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Product field.
 */
export const performInputProduct = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.performInputProduct(value));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.inputProduct));
};
export const performInputFilteredMethodClassifier = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performInputFilteredMethodClassifier(value));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap SalesMethod field.
 */
export const navigateToSalesMethodPickerScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.isRowBlocked || !reducerState.isProductMethodEnabled) {
        return;
    }
    const classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    let methodList = util.getMethodByProduct(reducerState.inputProduct, classifiers.DEAL_SALE_METHOD, classifiers.DEAL_PRODUCT_SALE_METHOD);
    let warningMessage = null;
    const isCreditMethodContained = util.checkForCreditMethod(methodList);
    if ((reducerState.currentCustomerManaged.troubleGroup.code == 'Black Zone' ||
        reducerState.currentCustomerManaged.troubleGroup.code == 'Red Zone' ||
        reducerState.currentCustomerManaged.isTempBlockedForOppty) &&
        isCreditMethodContained && methodList.data.length > 1) {
        methodList = util.deleteCreditMethod(methodList);
        warningMessage = util.getMethodClassifierWarningMessage(reducerState.currentCustomerManaged.troubleGroup.code);
    }
    dispatch(thunkClassifier.navigateToClassifier(methodList, reducerState.inputSalesMethod.code, Enums.ClassifierMode.DealEditor_SalesMethod, warningMessage));
    dispatch(actionsDealEditor.navigateToSalesMethodPickerScreen());
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input SalesMethod field.
 */
export const performInputSalesMethod = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.performInputSalesMethod(value));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.inputSalesMethod));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap Currency field.
 */
export const navigateToCurrencyPickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(thunkClassifier.navigateToClassifier(util.getSortedCurrencyList(classifiers.CURRENCY), reducerState.inputCurrency && reducerState.inputCurrency.code || '', Enums.ClassifierMode.DealEditor_Currency));
    dispatch(actionsDealEditor.navigateToCurrencyPickerScreen());
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Currency field.
 */
export const performInputCurrency = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.performInputCurrency(value));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.inputCurrency));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input Sum field.
 */
export const performInputSumString = (value) => (dispatch) => {
    dispatch(actionsDealEditor.performInputSumString(value));
    dispatch(thunkDealEditor.performValidateForm(Enums.ValidateForm.inputSum));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input EquivalentSum field.
 */
export const performInputEquivalentSumString = (value) => (dispatch) => {
    dispatch(actionsDealEditor.performInputEquivalentSumString(value));
    dispatch(thunkDealEditor.performValidateForm(Enums.ValidateForm.inputEquivalentSum));
};
export const performInputTransferCommission = (value) => (dispatch) => {
    dispatch(actionsDealEditor.performInputTransferCommission(value));
};
export const performInputStaffCount = (value) => (dispatch) => {
    dispatch(actionsDealEditor.performInputStaffCount(value));
};
/*
 * Thunk dispatched by "thunkDealEditor". Thunk dispatched on user input EquivalentRate field.
 */
export const performInputEquivalentConversionRateString = (value) => (dispatch) => {
    dispatch(actionsDealEditor.performInputEquivalentConversionRateString(value));
    dispatch(thunkDealEditor.performValidateForm(Enums.ValidateForm.inputEquivalentConversionRate));
};
export const performInputSavedMode = (savedMode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performInputSavedMode(savedMode));
};
export const performSetOwnerFlag = (isOwner) => (dispatch) => {
    dispatch(actionsDealEditor.performSetOwnerFlag(isOwner));
};
export const performValidateForm = (validateMode, validateType) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    const savedMode = reducerState.savedMode;
    const currentUser = state.user.mrmkmcibApp.reducerAuthorization.currentUser;
    // *********** Проверка на владельца карточки сделки
    if (validateType === Enums.ValidateFormType.initial) {
        dispatch(thunkDealEditor.performSetOwnerFlag(util.checkForOwner(currentUser, reducerState.currentDeal.memberList)));
    }
    // *********** Пересчёт полей Сумма, Эквивалентная сумма, Курс пересчёта
    if (validateMode) {
        if (validateMode === Enums.ValidateForm.inputSum) {
            switch (savedMode) {
                case Enums.ValidateForm.inputSum:
                    dispatch(thunkDealEditor.performInputSavedMode(Enums.ValidateForm.inputSum));
                    break;
                case Enums.ValidateForm.inputEquivalentConversionRate:
                    if (reducerState.isEquivalentRateMode) {
                        dispatch(actionsDealEditor.performInputEquivalentSumString(util.convertNumberToString(util.getEquivalentSum(util.convertStringToNumber(reducerState.inputSumString), util.convertStringToNumber(reducerState.inputEquivalentConversionRateString)))));
                        state = getState();
                        reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                        dispatch(actionsDealEditor.performInputEquivalentSumString(reducerState.inputEquivalentSumString));
                        dispatch(thunkDealEditor.performInputSavedMode(Enums.ValidateForm.inputEquivalentConversionRate));
                    }
                    break;
                case Enums.ValidateForm.inputEquivalentSum:
                    if (reducerState.isEquivalentRateMode) {
                        dispatch(actionsDealEditor.performInputEquivalentConversionRateString(util.convertNumberToString(util.getEquivalentConversionRate(util.convertStringToNumber(reducerState.inputSumString), util.convertStringToNumber(reducerState.inputEquivalentSumString)))));
                        state = getState();
                        reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                        dispatch(actionsDealEditor.performInputEquivalentConversionRateString(reducerState.inputEquivalentConversionRateString));
                        dispatch(thunkDealEditor.performInputSavedMode(Enums.ValidateForm.inputEquivalentSum));
                    }
                    break;
            }
        }
        else if (validateMode === Enums.ValidateForm.inputEquivalentSum) {
            if (reducerState.isEquivalentRateMode) {
                dispatch(actionsDealEditor.performInputEquivalentConversionRateString(util.convertNumberToString(util.getEquivalentConversionRate(util.convertStringToNumber(reducerState.inputSumString), util.convertStringToNumber(reducerState.inputEquivalentSumString)))));
                state = getState();
                reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                dispatch(actionsDealEditor.performInputEquivalentConversionRateString(reducerState.inputEquivalentConversionRateString));
                dispatch(thunkDealEditor.performInputSavedMode(Enums.ValidateForm.inputEquivalentSum));
            }
        }
        else if (validateMode === Enums.ValidateForm.inputEquivalentConversionRate) {
            if (reducerState.isEquivalentRateMode) {
                dispatch(actionsDealEditor.performInputEquivalentSumString(util.convertNumberToString(util.getEquivalentSum(util.convertStringToNumber(reducerState.inputSumString), util.convertStringToNumber(reducerState.inputEquivalentConversionRateString)))));
                state = getState();
                reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                dispatch(actionsDealEditor.performInputEquivalentSumString(reducerState.inputEquivalentSumString));
                dispatch(thunkDealEditor.performInputSavedMode(Enums.ValidateForm.inputEquivalentConversionRate));
            }
        }
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if ((reducerState.inputSumString === null || util.convertStringToNumber(reducerState.inputSumString) === 0) && (reducerState.inputEquivalentSumString !== null)) {
        dispatch(actionsDealEditor.performInputEquivalentConversionRateString('0'));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    const classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    if (validateType === Enums.ValidateFormType.initial || validateType === Enums.ValidateFormType.inputCurrency) {
        // *********** Предзаполнение поля Валюта
        if (reducerState.inputCurrency && !reducerState.inputCurrency.code) {
            dispatch(thunkDealEditor.performInputCurrency(util.getRurClassifier(classifiers.CURRENCY)));
        }
        // *********** Включение полей Эквивалент в рублях и Курс пересчёта эквивалента
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
        if (reducerState.inputCurrency && reducerState.inputCurrency.code && reducerState.inputCurrency.code !== 'RUR') {
            if (!reducerState.isEquivalentRateMode) {
                dispatch(thunkDealEditor.performSetEquivalentRateMode(true));
            }
        }
        else if (reducerState.isEquivalentRateMode) {
            dispatch(thunkDealEditor.performSetEquivalentRateMode(false));
            dispatch(thunkDealEditor.performInputEquivalentSumString(null));
            dispatch(thunkDealEditor.performInputEquivalentConversionRateString(null));
            dispatch(thunkDealEditor.performInputEquivalentSumString(null));
            dispatch(thunkDealEditor.performInputEquivalentConversionRateString(null));
        }
    }
    if (validateType === Enums.ValidateFormType.initial || validateType === Enums.ValidateFormType.inputProduct || validateType === Enums.ValidateFormType.inputSalesMethod) {
        // ********** Разблокировка и заполнение поля Метод продаж в зависимости от поля Продукт
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
        if (reducerState.inputProduct.name) {
            if (reducerState.inputSalesMethod.name) {
                if (reducerState.inputFilteredMethodClassifier.data.length > 1) {
                    if (!reducerState.isProductMethodEnabled) {
                        dispatch(thunkDealEditor.performSetProductMethodMode(true));
                    }
                }
                else {
                    state = getState();
                    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                    dispatch(thunkDealEditor.performInputFilteredMethodClassifier(util.getMethodByProduct(reducerState.inputProduct, classifiers.DEAL_SALE_METHOD, classifiers.DEAL_PRODUCT_SALE_METHOD)));
                    state = getState();
                    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                    if (reducerState.inputFilteredMethodClassifier.data.length > 1) {
                        if (!reducerState.isProductMethodEnabled) {
                            dispatch(thunkDealEditor.performSetProductMethodMode(true));
                        }
                    }
                    else {
                        if (reducerState.isProductMethodEnabled) {
                            dispatch(thunkDealEditor.performSetProductMethodMode(false));
                        }
                    }
                }
            }
            else {
                state = getState();
                reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                dispatch(thunkDealEditor.performInputFilteredMethodClassifier(util.getMethodByProduct(reducerState.inputProduct, classifiers.DEAL_SALE_METHOD, classifiers.DEAL_PRODUCT_SALE_METHOD)));
                state = getState();
                reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                if (reducerState.inputFilteredMethodClassifier.data.length > 1) {
                    if (!reducerState.isProductMethodEnabled) {
                        dispatch(thunkDealEditor.performSetProductMethodMode(true));
                    }
                }
                else {
                    dispatch(thunkDealEditor.performUpdateSalesMethod(reducerState.inputFilteredMethodClassifier.data[0]));
                    dispatch(thunkDealEditor.performSetProductMethodMode(false));
                }
            }
        }
        else {
            if (reducerState.isProductMethodEnabled) {
                dispatch(thunkDealEditor.performSetProductMethodMode(false));
            }
        }
    }
    // ********** проверка на наличие ошибок
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.currentCustomerManaged.troubleGroup.code === 'Red Zone' ||
        reducerState.currentCustomerManaged.troubleGroup.code === 'Black Zone' ||
        reducerState.currentCustomerManaged.isTempBlockedForOppty) {
        switch (true) {
            case reducerState.inputSalesMethod.value === 'Кредитный':
                dispatch(thunkDealEditor.setValidationError(util.getValidationError(reducerState.currentCustomerManaged.troubleGroup.code, Enums.dealEditorValidationError.InputSalesMethod)));
                break;
            case reducerState.inputDealType.code == 'KK':
                dispatch(thunkDealEditor.setValidationError(util.getValidationError(reducerState.currentCustomerManaged.troubleGroup.code, Enums.dealEditorValidationError.InputDealType)));
                break;
            default: dispatch(thunkDealEditor.setValidationError(null));
        }
    }
    else {
        dispatch(thunkDealEditor.setValidationError(null));
    }
    // ********** Блокировка/разблокировка кнопки Сохранить
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (util._get(reducerState, 'inputDealType.code') === 'KK' &&
        util._get(reducerState, 'inputSalesMethod.code') &&
        (util._get(reducerState, 'applicationKkClassifierList.data.length') && util._get(reducerState, 'inputApplication.value') ||
            !util._get(reducerState, 'applicationKkClassifierList.data.length')) && reducerState.inputDescription && !reducerState.validationError) {
        if (!reducerState.isValid) {
            dispatch(thunkDealEditor.performValidate(true));
        }
    }
    else if (reducerState.inputDealType &&
        reducerState.inputDealType.value == 'Стандартная сделка' &&
        reducerState.inputProduct &&
        reducerState.inputProduct.value &&
        reducerState.inputSalesMethod &&
        reducerState.inputSalesMethod.value &&
        reducerState.inputDescription &&
        !reducerState.validationError) {
        if (!reducerState.isValid) {
            dispatch(thunkDealEditor.performValidate(true));
        }
    }
    else if (reducerState.isValid) {
        dispatch(thunkDealEditor.performValidate(false));
    }
    dispatch(actionsDealEditor.performValidateForm());
};
export const setValidationError = (validationError) => (dispatch, getState) => {
    dispatch(actionsDealEditor.setValidationError(validationError));
};
export const performUpdateSalesMethod = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performUpdateSalesMethod(value));
};
export const performSetProductMethodMode = (isProductMethodEnabled) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performSetProductMethodMode(isProductMethodEnabled));
};
export const performSetEquivalentRateMode = (isEquivalentRateMode) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performSetEquivalentRateMode(isEquivalentRateMode));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user input DealDate field.
 */
export const performInputDealDate = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performInputDealDate(util.prepareDate(value)));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.inputDealDate));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user tap activity list.
 */
export const navigateToActivityListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    if (reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode) {
        dispatch(performActivityListRefreshCacheReset(EnumsScheduler.SchedulerMode.NewDeal, Object.assign({}, state.user.mrmkmcibApp.reducerAuthorization.currentUser), Object.assign({}, defaultValues.Deal), customer, Object.assign({}, defaultValues.Agent), EnumsScheduler.SchedulerMode.NewDeal));
    }
    else {
        dispatch(performActivityListRefreshCacheReset(EnumsScheduler.SchedulerMode.DealEditorActivityList, Object.assign({}, state.user.mrmkmcibApp.reducerAuthorization.currentUser), Object.assign({}, reducerState.currentDeal), customer, Object.assign({}, defaultValues.Agent), EnumsScheduler.SchedulerMode.DealEditorActivityList));
    }
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealEditor.DealEditorActivity, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.navigateToActivityListScreen());
};
export const getDealActivityList = (activityList) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.getDealActivityList(activityList));
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from Scope.
 */
export const performActivityListAppend = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performActivityListAppend());
    if (reducerState.activityList.data.length < 1) {
        dispatch(actionsDealEditor.dealCreated());
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
        dispatch(thunkDealEditor.callGetDealRefresh());
    }
    dispatch(thunkDealEditor.performInputOperUuid());
    dispatch(thunkDealEditor.callPutDealActivityAppend(reducerState.activityList.data.length - 1));
};
export const performInputOperUuid = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (_.isNull(reducerState.activityOperUuid)) {
        dispatch(actionsDealEditor.performInputOperUuid(util.prepareActivityUuid(reducerState.activityList)));
    }
    else {
        dispatch(actionsDealEditor.performInputOperUuid(null));
    }
};
/*
 * Thunk dispatched by "DealEditor" screen. Fetch put request.
 */
export const callPutDealActivityAppend = (index) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.dealActivityAppendFetching) {
        return;
    }
    dispatch(actionsDealEditor.callPutDealActivityAppend());
    if (!reducerState.dealActivityAppendFetching) {
        dispatch(actionsDealEditor.callPutDealActivityAppendRequest());
        util.call(util.urlDealEditor.callPutDealActivityAppend(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            dispatch(actionsDealEditor.callPutDealActivityAppendSuccess(response));
            if (index > 0) {
                dispatch(thunkDealEditor.callPutDealActivityAppend(index - 1));
            }
            else {
                dispatch(thunkDealEditor.performInputOperUuid());
                dispatch(actionsDealEditor.dealCreated());
                state = getState();
                reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
                dispatch(thunkDealEditor.callGetDealRefresh());
            }
        }, (error) => {
            dispatch(actionsDealEditor.callPutDealActivityAppendFailure(error));
            dispatch(actionsDealEditor.performNavigationButtonDisabled(false));
            dispatch(actionsDealEditor.performSaveFailure(error));
        }, Converters.RESPONSE_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_APPEND_TO_BOOLEAN, 'PUT', {
            'Content-type': 'application/json; charset=UTF-8',
            'operUid': reducerState.activityOperUuid &&
                reducerState.activityOperUuid[reducerState.activityList.data[index].id]
        }, Converters.REQUEST_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_APPEND_FROM_DEAL_ACTIVITY_APPEND_REQUEST, { activity: reducerState.activityList.data[index], dealId: reducerState.currentDeal.id });
    }
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched on user pick Activity from linked list.
 */
export const performActivityListExclude = (activity) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performActivityListExclude(activity));
    if (reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode) {
        dispatch(performActivityExclude(activity));
    }
    else if (reducerState.dealEditorMode == Enums.DealEditorMode.UpdateMode) {
        dispatch(thunkDealEditor.callPutDealActivityExclude());
    }
};
/*
 * Thunk dispatched by "DealEditor" screen. Fetch put request.
 */
export const callPutDealActivityExclude = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.dealActivityExcludeFetching) {
        return;
    }
    dispatch(actionsDealEditor.callPutDealActivityExclude());
    if (!reducerState.dealActivityExcludeFetching) {
        dispatch(actionsDealEditor.callPutDealActivityExcludeRequest());
        util.call(util.urlDealEditor.callPutDealActivityExclude(state, reducerState, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            dispatch(actionsDealEditor.callPutDealActivityExcludeSuccess(response));
            dispatch(thunkDealEditor.performScopeClearAndRefresh());
        }, (error) => {
            dispatch(actionsDealEditor.callPutDealActivityExcludeFailure(error));
        }, Converters.RESPONSE_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_TO_BOOLEAN, 'PUT', { 'Content-type': 'application/json; charset=UTF-8' }, Converters.REQUEST_DEAL_EDITOR_CALL_PUT_DEAL_ACTIVITY_EXCLUDE_FROM_DEAL_ACTIVITY_EXCLUDE_REQUEST, { activity: reducerState.currentActivity });
    }
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched after activity list updated.
 */
export const performScopeClearAndRefresh = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    const customer = Object.assign({}, defaultValues.Customer, { id: currentCustomerManaged.id, name: currentCustomerManaged.name, shortName: currentCustomerManaged.shortName, organizationType: currentCustomerManaged.organizationType });
    dispatch(performActivityListRefreshCacheReset(EnumsScheduler.SchedulerMode.DealEditorActivityList, Object.assign({}, state.user.mrmkmcibApp.reducerAuthorization.currentUser), Object.assign({}, reducerState.currentDeal), customer, Object.assign({}, defaultValues.Agent), EnumsScheduler.SchedulerMode.DealEditorActivityList));
    dispatch(actionsDealEditor.performScopeClearAndRefresh());
};
/*
 * Thunk dispatched by "DealEditor" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performContainerReset());
};
/*
 * Thunk dispatched by "Deal" screen. Thunk chain used to navigate.
 */
export const navigateToMemberListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    // Dispatch thunk "performMemberListRefresh" synchronously.
    dispatch(thunkMemberList.performMemberListRefresh(defaultValues.Activity, reducerState.currentDeal, state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, defaultValues.Gsz, defaultValues.Agent, true, Enums.MemberListMode.DealEditor));
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealEditor.DealEditor_Members, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.navigateToMemberListScreen());
};
export const performSaveMemberListInNewDeal = (memberList) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performSaveMemberListInNewDeal(memberList));
};
export const performValidate = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performValidate(value));
};
export const performTapActivityDelete = (id) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    dispatch(actionsDealEditor.performTapActivityDelete(id));
};
export const navigateToDealTypePickerScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    if (reducerState.isRowBlocked) {
        return;
    }
    dispatch(thunkClassifier.navigateToClassifier(util.getDealTypeClassifierList(), reducerState.inputDealType.code, Enums.ClassifierMode.DealEditor_DealType));
    dispatch(actionsDealEditor.navigateToDealTypePickerScreen());
};
export const performInputDealType = (dealType) => (dispatch) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)));
    dispatch(actionsDealEditor.performInputDealType(dealType));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.inputDealType));
};
export const performShowAdditionalFields = () => (dispatch) => {
    dispatch(actionsDealEditor.performShowAdditionalFields());
};
export const navigateToAgentListScreen = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealEditor;
    let reducerStateAppCRM = state.user.mrmkmcibCRM.reducerAppCRM;
    let currentUser = reducerStateAppCRM.currentUser;
    const currentCustomer = reducerState.currentCustomerManaged;
    const isHolderForCustomer = isCustomerHolder(currentCustomer, currentUser);
    /*
    const agentListAccessLevel = isHolderForCustomer ?
        Enums.AgentListAccessLevel.Write :
        Enums.AgentListAccessLevel.Read FIXME: отключено редактирование списка представителей в карточке сделки в 2018-1 */
    dispatch(actionsDealEditor.navigateToAgentListScreen());
    dispatch(thunkAgentList.performOpenAgentListScreen(reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode
        ? reducerState.currentCustomerManaged.agentList
        : reducerState.currentDeal.agentList || defaultValues.AgentList, reducerState.currentCustomerManaged, null, reducerState.dealEditorMode == Enums.DealEditorMode.CreateMode
        ? Enums.AgentListContextMode.NewDeal
        : Enums.AgentListContextMode.EditDeal, Enums.AgentListAccessLevel.Read //agentListAccessLevel
    ));
    dispatch(SplitPanelActions.pushContent(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_AgentsPicker, util.getNavigationContentString(EnumsCrm.NavigationContentAppCrm.AppCRM_DealEditor)));
};
export const showChancePopover = (isChancePopoverOpened) => (dispatch) => {
    dispatch(actionsDealEditor.showChancePopover(isChancePopoverOpened));
};
export const showAttractionChannelPopover = (isAttractionChannelPopoverOpened) => (dispatch) => {
    dispatch(actionsDealEditor.showAttractionChannelPopover(isAttractionChannelPopoverOpened));
};
export const showApplicationPopover = (isApplicationPopoverOpened) => (dispatch) => {
    dispatch(actionsDealEditor.showApplicationPopover(isApplicationPopoverOpened));
};
export const showSalesMethodPopover = (isSalesMethodPopoverOpened) => (dispatch) => {
    dispatch(actionsDealEditor.showSalesMethodPopover(isSalesMethodPopoverOpened));
};
export const performSelectChance = (inputChance) => (dispatch) => {
    dispatch(thunkDealEditor.showChancePopover(false));
    dispatch(actionsDealEditor.performSelectChance(inputChance || null));
};
export const performSelectApplication = (value) => (dispatch) => {
    dispatch(thunkDealEditor.showApplicationPopover(false));
    dispatch(actionsDealEditor.performSelectApplication(value));
    dispatch(thunkDealEditor.performValidateForm(null, Enums.ValidateFormType.selectApplication));
};
export const prepareApplicationKkClassifierList = (value) => (dispatch, getState) => {
    let state = getState();
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary;
    dispatch(actionsDealEditor.prepareApplicationKkClassifierList(util.getApplicationKkClassifierList(value, classifierDictionary.SBRF_APPLICATION_KK)));
};
export const performSelectSalesMethod = (value) => (dispatch) => {
    dispatch(thunkDealEditor.showSalesMethodPopover(false));
    dispatch(thunkDealEditor.prepareApplicationKkClassifierList(value));
    dispatch(thunkDealEditor.performSelectApplication(defaultValues.Classifier));
    dispatch(actionsDealEditor.performSelectSalesMethod(value));
};
export const performSelectAttractionChannel = (value) => (dispatch) => {
    dispatch(thunkDealEditor.showAttractionChannelPopover(false));
    dispatch(actionsDealEditor.performSelectAttractionChannel(value));
};
export const performParentDealSet = (parentDeal) => (dispatch) => {
    dispatch(actionsDealEditor.performParentDealSet(parentDeal));
};
export const performSalesCampaignSet = (salesCampaign) => (dispatch) => {
    dispatch(actionsDealEditor.performSalesCampaignSet(salesCampaign));
};
export const performSaveAgentList = (inputAgentList) => (dispatch) => {
    dispatch(actionsDealEditor.performSaveAgentList(inputAgentList));
};
//# sourceMappingURL=ThunkDealEditor.js.map