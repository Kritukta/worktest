/*
 * Created by Burnaev M.U.
 */
import { Enums } from '../Enums';
import { supParamNames } from "mrmkmcib-app";
import { SplitPanelActions } from 'ufs-mobile-platform';
import * as actionsProductCredit from '../actions/ActionsProductCredit';
import * as Cache from '../modules/Cache';
import * as Converters from "../models/Converters";
import * as ModelState from "../models/Models";
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as thunkProductCredit from '../thunk/ThunkProductCredit';
import * as thunkForecastEventEditor from '../thunk/ThunkForecastEventEditor';
import * as util from '../common/Util';
const CREDIT_COVENANT_LIST_SESSION_TAG = 'CREDIT_COVENANT_LIST_SESSION_TAG';
const DEFAULT_TIMEOUT_SRV_LEGAL_REPAYMENT_SCHEDULE = 60000;
const DEFAULT_OFFSET_VALUE_DAYS = 365;
const DEFAULT_RECORDS_COUNT = 1000;
/*
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performForecastEventsListFlush = () => (dispatch, getState) => {
    Cache.sessionResetTag({ tag: util.getForecastEventsRequestRefreshString(Enums.ForecastEventsListRequestRefresh.ForecastEventsListRequestRefreshEnabled) });
    dispatch(actionsProductCredit.performFirecastEventsListFlush());
    dispatch(performRefreshForecast(false));
    dispatch(thunkProductCredit.performHideModalForecastEventGetListError());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTab = (index, value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performChangeTab(index, value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
 */
export const navigateToForecastScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductForecastPage, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
    dispatch(actionsProductCredit.navigateToForecastScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to payment schedule screen.
 */
export const navigateToPaymentScheduleScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductPaymentSchedule, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
    dispatch(actionsProductCredit.navigateToPaymentScheduleScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back.
 */
export const navigateProductCreditBack = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
    dispatch(thunkForecastEventEditor.performForecastEventFormReset());
    dispatch(actionsProductCredit.navigateProductCreditBack());
};
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back to deal screen.
 */
export const navigateProductCreditDealBack = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct)));
    dispatch(actionsProductCredit.navigateProductCreditDealBack());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performPopoverForecastEventShow = (forecastEvent) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performPopoverForecastEventShow(forecastEvent));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performCancelEditForecastEvent = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.navigateProductCreditBack());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performSaveEditForecastEvent = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.navigateProductCreditBack());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performForecastEventDelete = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performForecastEventDelete());
    dispatch(thunkProductCredit.navigateProductCreditBack());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performResetForecastEventEditForm = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performResetForecastEventEditForm());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performOpenForecastEventDetails = (forecastEvent) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.navigateToForecastEventDetails());
    dispatch(actionsProductCredit.performOpenForecastEventDetails(forecastEvent));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk used to clear currentForecastEvent.
 */
export const performClearCurrentForecastEvent = () => (dispatch) => {
    dispatch(actionsProductCredit.performClearCurrentForecastEvent());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const navigateToForecastEventDetails = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductEventDetailsPage, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const navigateToForecastEventEditForm = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductEventEditPage, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 */
export const performPopoverForecastEventHide = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performPopoverForecastEventHide());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 */
export const navigateToForecastEventTypPickerScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_EventTypeChoice, util.getNavigationContentCreditProductCreatePopup(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent)));
    dispatch(actionsProductCredit.navigateToForecastEventTypPickerScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 */
export const navigateToForecastEventFilterTypePickerScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_EventType, util.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter)));
    dispatch(actionsProductCredit.navigateToForecastEventFilterTypePickerScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 */
export const navigateToForecastEventFilterPeriodScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_PeriodChoice, util.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter)));
    dispatch(actionsProductCredit.navigateToForecastEventFilterPeriodScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputForecastEventType = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentCreditProductCreatePopup(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent)));
    dispatch(actionsProductCredit.performInputForecastEventType(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputForecastEventDate = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputForecastEventDate(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
 */
export const navigateToForecastEventPossibilityPickerScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_EventPossibilityChoice, util.getNavigationContentCreditProductCreatePopup(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent)));
    dispatch(actionsProductCredit.navigateToForecastEventPossibilityPickerScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputForecastEventPossibility = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentCreditProductCreatePopup(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent)));
    dispatch(actionsProductCredit.performInputForecastEventPossibility(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user tap Currency field.
 */
export const navigateToForecastEventCurrencyPickerScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_EventCurrencyChoice, util.getNavigationContentCreditProductCreatePopup(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent)));
    dispatch(actionsProductCredit.navigateToForecastEventCurrencyPickerScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input Currency field.
 */
export const performInputForecastEventCurrency = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentCreditProductCreatePopup(Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent)));
    dispatch(actionsProductCredit.performInputForecastEventCurrency(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputForecastEventSum = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputForecastEventSum(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputFullRepayment = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputFullRepayment(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputForecastEventEmail = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputForecastEventEmail(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputForecastEventComment = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputForecastEventComment(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to save forecast event.
 */
export const performForecastEventSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputCreatePopupEventValidation());
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    if (!(reducerState.inputValidationForecastEventType ||
        reducerState.inputValidationForecastEventComment ||
        reducerState.inputValidationForecastEventPossibility ||
        reducerState.inputValidationForecastEventCurrency ||
        reducerState.inputValidationForecastEventEmail ||
        reducerState.inputValidationForecastEventSumm)) {
        dispatch(actionsProductCredit.performPopoverForecastEventHide());
        dispatch(actionsProductCredit.performForecastEventSave());
        switch (reducerState.inputForecastEventType && reducerState.inputForecastEventType.code) {
            case 'ГАШЕНИЕ_K_T':
                dispatch(thunkProductCredit.callPostForecastEventRepaymentCreate());
                break;
            case 'ВЫДАЧА_K_Т':
                dispatch(thunkProductCredit.callPostForecastEventGrantingCreate());
                break;
            default:
                break;
        }
    }
};
/*
 * Thunk dispatched by "callPostForecastEventCreate"
 */
export const callPostForecastEventGrantingCreate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct;
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId;
    if (!forecastDealId) {
        return;
    }
    if (reducerState.newForecastEventSaveInProgress) {
        return;
    }
    dispatch(actionsProductCredit.callPostForecastEventCreate());
    dispatch(actionsProductCredit.callPostForecastEventCreateRequest());
    util.call(util.urlProductCredit.callPostForecastEventGrantingCreate(state, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        dispatch(actionsProductCredit.callPostForecastEventCreateSuccess());
        dispatch(thunkProductCredit.performFilterCreateEventPopupReset());
        dispatch(thunkProductCredit.callGetForecastEventList(Enums.CachePolicy.Disabled));
    }, (error) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        dispatch(actionsProductCredit.callPostForecastEventCreateFailure(error));
        dispatch(thunkProductCredit.performShowModalForecastEventSaveError());
    }, Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN, 'POST', { 'Content-type': 'application/json; charset=UTF-8' }, Converters.RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_GRANTING_FROM_FORECAST_EVENT_REQUEST, {
        forecastDealId,
        plannedEventDate: reducerState.inputForecastEventDate,
        eventType: reducerState.inputForecastEventType,
        currency: reducerState.inputForecastEventCurrency,
        forecastSum: reducerState.inputForecastEventSum,
        possibility: reducerState.inputForecastEventPossibility,
        comment: reducerState.inputForecastEventComment,
        customer: currentUser,
        email: reducerState.inputForecastEventEmail
    });
};
/*
 * Thunk dispatched by "callPostForecastEventCreate"
 */
export const callPostForecastEventRepaymentCreate = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct;
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId;
    if (!forecastDealId) {
        return;
    }
    if (reducerState.newForecastEventSaveInProgress) {
        return;
    }
    dispatch(actionsProductCredit.callPostForecastEventCreate());
    dispatch(actionsProductCredit.callPostForecastEventCreateRequest());
    util.call(util.urlProductCredit.callPostForecastEventRepaymentCreate(state, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        dispatch(actionsProductCredit.callPostForecastEventCreateSuccess());
        dispatch(thunkProductCredit.performFilterCreateEventPopupReset());
        dispatch(thunkProductCredit.callGetForecastEventList(Enums.CachePolicy.Disabled));
    }, (error) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        dispatch(actionsProductCredit.callPostForecastEventCreateFailure(error));
        dispatch(thunkProductCredit.performShowModalForecastEventSaveError());
    }, Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN, 'POST', { 'Content-type': 'application/json; charset=UTF-8' }, Converters.RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_REPAYMENT_FROM_FORECAST_EVENT_REQUEST, {
        forecastDealId,
        earlyPayDate: reducerState.inputForecastEventDate,
        isAllPay: reducerState.inputFullRepayment,
        currency: reducerState.inputForecastEventCurrency,
        forecastSum: reducerState.inputForecastEventSum,
        possibility: reducerState.inputForecastEventPossibility,
        customer: currentUser,
        email: reducerState.inputForecastEventEmail,
        comment: reducerState.inputForecastEventComment
    });
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
 */
export const performPopoverFilterShow = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performPopoverFilterShow());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
 */
export const performPopoverFilterHide = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performPopoverFilterHide());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputFilterForecastEventType = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter)));
    dispatch(actionsProductCredit.performInputFilterForecastEventType(value));
};
/*
 * Internal thunk used in "ProductCredit" container. Thunk dispatched on user select custom period type.
 */
export const navigateToPeriodTypeCustomScreen = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_PeriodCustomDateChoice, util.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter)));
    dispatch(actionsProductCredit.navigateToPeriodTypeCustomScreen());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputFilterPeriodType = (value) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    if (value === reducerState.inputFilterPeriodType && reducerState.inputFilterPeriodType !== Enums.ForecastPeriodType.Custom) {
        return;
    }
    dispatch(actionsProductCredit.performInputFilterPeriodType(value));
    // Dispatch thunk "navigateToPeriodTypeCustomScreen" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    if (value === Enums.ForecastPeriodType.Custom) {
        dispatch(thunkProductCredit.navigateToPeriodTypeCustomScreen());
    }
    else {
        dispatch(SplitPanelActions.popContent(util.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter)));
    }
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodStart field.
 */
export const performInputFilterPeriodStart = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputFilterPeriodStart(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodEnd field.
 */
export const performInputFilterPeriodEnd = (value) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputFilterPeriodEnd(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
 */
export const performFilterApply = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performFilterApply());
    // Dispatch thunk "forecastEventListFilter" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.forecastEventListFilter(state.user.mrmkmcibCRM.reducerProductCredit.forecastEventList));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
 */
export const performFilterCustomDateApply = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter, util.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter)));
    dispatch(actionsProductCredit.performFilterCustomDateApply());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 */
export const performFilterReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performFilterReset());
    // Dispatch thunk "forecastEventListFilter" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.forecastEventListFilter(state.user.mrmkmcibCRM.reducerProductCredit.forecastEventList));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 */
export const performFilterCreateEventPopupReset = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performFilterCreateEventPopupReset());
    dispatch(actionsProductCredit.performHideModalForecastEventSaveError());
};
export const navigateToCustomerScreen = () => (dispatch, getState) => {
    const state = getState();
    const currentCustomerManaged = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    dispatch(thunkCustomer.navigateToCustomerScreen(currentCustomerManaged, Enums.CustomerMode.NavigationBack, Enums.ShowCustomer.Show));
};
export const performCallGetProductCovenantListCacheReset = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM;
    const organization = state.user.mrmkmcibCRM &&
        state.user.mrmkmcibCRM.reducerCustomer &&
        state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged || null;
    const contractNumber = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct &&
        state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct &&
        state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct.contractNumber || '';
    Cache.sessionResetTag({ tag: CREDIT_COVENANT_LIST_SESSION_TAG, contextId: `${organization && organization.id}-${contractNumber}` });
    dispatch(thunkProductCredit.performCallGetCovenantList(contractNumber));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 */
export const performFillDefaultValuesAndShowCreateEventPopup = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const reducerAppCrm = state.user.mrmkmcibCRM.reducerAppCRM;
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct;
    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser;
    dispatch(actionsProductCredit.performInputForecastEventEmail(currentUser.email));
    dispatch(actionsProductCredit.performInputForecastEventPossibility(1));
    if (currentCreditProduct && currentCreditProduct.currencyClassifier) {
        dispatch(actionsProductCredit.performInputForecastEventCurrency(currentCreditProduct.currencyClassifier));
    }
    dispatch(actionsProductCredit.performPopoverForecastEventShow(ModelState.defaultValues.ForecastEvent));
    dispatch(actionsProductCredit.performFillDefaultValuesAndShowCreateEventPopup());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 */
export const performFilterEventTypeReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performFilterEventTypeReset());
    // Dispatch thunk "forecastEventListFilter" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.forecastEventListFilter(state.user.mrmkmcibCRM.reducerProductCredit.forecastEventList));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 */
export const performFilterPeriodReset = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performFilterPeriodReset());
    // Dispatch thunk "forecastEventListFilter" synchronously.
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.forecastEventListFilter(state.user.mrmkmcibCRM.reducerProductCredit.forecastEventList));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
 */
export const performInputCreatePopupEventValidation = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performInputCreatePopupEventValidation());
};
/*
 * Internal thunk used in "ProductCredit" container. Thunk dispatched to filter forecast event list.
 */
export const forecastEventListFilter = (forecastEventList) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.forecastEventListFilter(forecastEventList));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performContainerReset());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
 */
export const performRefreshForecast = (isCacheEnable = true) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    let dealListError = state.user.mrmkmcibCRM.reducerCustomer.forecastDealListError;
    let dealListFetching = state.user.mrmkmcibCRM.reducerCustomer.forecastDealListFetching;
    const operationTypesOps = (state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleFilterTypeOps]).split("#") || ['cred', 'proc', 'other'];
    const operationStatusOps = (state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleFilterStatusOps]).split("#") || ['notPay', 'forPay', 'execPay'];
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct;
    // Ставим дефолтные значения для фильтров ГП
    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetDefault());
    dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeSetDefault(operationTypesOps));
    dispatch(thunkProductCredit.performPaymentScheduleFilterStatusSetDefault(operationStatusOps));
    // Load payment Shedule list
    dispatch(thunkProductCredit.callGetPaymentScheduleList(true, Enums.CachePolicy.Disabled, isCacheEnable, false));
    if (reducerState.forecastFetching || dealListFetching) {
        return;
    }
    if (dealListError) {
        dispatch(thunkCustomer.callGetForecastDealList());
    }
    dispatch(actionsProductCredit.performRefreshForecast());
    dispatch(actionsProductCredit.performRefreshForecastExecute());
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dealListError = state.user.mrmkmcibCRM.reducerCustomer.forecastDealListError;
    dealListFetching = state.user.mrmkmcibCRM.reducerCustomer.forecastDealListFetching;
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId;
    if (!dealListError && !dealListFetching) {
        if (!forecastDealId) {
            dispatch(actionsProductCredit.callGetForecastEventListReset());
            dispatch(actionsProductCredit.performRefreshForecastSuccess());
            return;
        }
        dispatch(actionsProductCredit.performSetCurrentForecastDealId(forecastDealId));
        dispatch(thunkProductCredit.callGetForecastEventList());
    }
    else {
        dispatch(actionsProductCredit.performRefreshForecastFailure());
    }
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state on failure
 */
export const performRefreshForecastFailure = () => (dispatch) => {
    dispatch(actionsProductCredit.performRefreshForecastFailure());
};
export const performChangeVisiblePopoverCovenantStatusFilter = (status) => (dispatch) => {
    dispatch(actionsProductCredit.performChangeVisiblePopoverCovenantStatusFilter(status));
};
export const performChangeVisiblePopoverCovenantPeriodFilter = (status) => (dispatch) => {
    dispatch(actionsProductCredit.performChangeVisiblePopoverCovenantPeriodFilter(status));
};
export const performChangeCovenantDateFilterValue = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performChangeCovenantDateFilterValue(value));
    dispatch(thunkProductCredit.performFilterCovenantList());
};
export const performChangeCheckStatusCreditCovenantPeriodFilterValueList = (filterValue) => (dispatch, getState) => {
    let state = getState();
    let covenantPeriodFilterValueList = state.user.mrmkmcibCRM.reducerProductCredit.covenantPeriodFilterValueList || [];
    if (Array.isArray(covenantPeriodFilterValueList) && covenantPeriodFilterValueList.find((statusFilter) => statusFilter.code == filterValue.code) == undefined) {
        covenantPeriodFilterValueList = { data: [...covenantPeriodFilterValueList, filterValue] };
    }
    else {
        covenantPeriodFilterValueList = { data: covenantPeriodFilterValueList.data
                .filter((setFilterValue) => setFilterValue.code != filterValue.code) };
    }
    dispatch(actionsProductCredit.performChangeCheckStatusCreditCovenantPeriodFilterValueList(covenantPeriodFilterValueList));
};
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export const performShowModalForecastEventGetListError = () => (dispatch) => {
    dispatch(actionsProductCredit.performShowModalForecastEventGetListError());
};
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export const performHideModalForecastEventGetListError = () => (dispatch) => {
    dispatch(actionsProductCredit.performHideModalForecastEventGetListError());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export const performHideModalForecastEventSaveError = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
};
export const performChangeCheckStatusCreditCovenantStatusFilterValueList = (filterValue) => (dispatch, getState) => {
    let state = getState();
    let covenantStatusFilterValueList = state.user.mrmkmcibCRM.reducerProductCredit.covenantStatusFilterValueList || [];
    const covenantAppliedStatusFilterValueList = state.user.mrmkmcibCRM.reducerProductCredit.covenantAppliedStatusFilterValueList;
    if (Array.isArray(covenantStatusFilterValueList) && covenantStatusFilterValueList.find((setFilterValue) => {
        return setFilterValue.code == filterValue.code;
    }) == undefined) {
        covenantStatusFilterValueList = { data: [...covenantStatusFilterValueList, filterValue] };
    }
    else {
        covenantStatusFilterValueList = { data: covenantStatusFilterValueList.data
                .filter((setFilterValue) => setFilterValue.code != filterValue.code) };
    }
    dispatch(actionsProductCredit.performChangeCheckStatusCreditCovenantStatusFilterValueList(covenantStatusFilterValueList));
};
export const performApplyCovenantPeriodFilter = () => (dispatch, getState) => {
    let state = getState();
    let covenantPeriodFilterValueList = state.user.mrmkmcibCRM.reducerProductCredit.covenantPeriodFilterValueList;
    dispatch(actionsProductCredit.performApplyCovenantPeriodFilter({ data: covenantPeriodFilterValueList.data
            .sort((a, b) => Number(a.code) - Number(b.code)) }));
    dispatch(thunkProductCredit.performChangeVisiblePopoverCovenantPeriodFilter(false));
    dispatch(thunkProductCredit.performFilterCovenantList());
};
export const performApplyCovenantStatusFilter = () => (dispatch, getState) => {
    let state = getState();
    let covenantStatusFilterValueList = state.user.mrmkmcibCRM.reducerProductCredit.covenantStatusFilterValueList;
    dispatch(actionsProductCredit.performApplyCovenantStatusFilter({ data: covenantStatusFilterValueList.data
            .sort((a, b) => Number(a.code) - Number(b.code)) }));
    dispatch(thunkProductCredit.performChangeVisiblePopoverCovenantStatusFilter(false));
    dispatch(thunkProductCredit.performFilterCovenantList());
};
export const navigateToCovenantListPage = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProduct;
    let contractNumber = '';
    if (reducerState.currentProductType == Enums.ProductType.CreditProduct) {
        contractNumber = reducerState.currentCreditProduct.creditProduct
            ? reducerState.currentCreditProduct.creditProduct.contractNumber || ''
            : '';
    }
    else if (reducerState.currentProductType == Enums.ProductType.BankGuaranteeProduct) {
        contractNumber = reducerState.currentCreditProduct.bankGuaranteeProduct
            ? reducerState.currentCreditProduct.bankGuaranteeProduct.contractNumber || ''
            : '';
    }
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductCovenantList, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
    const covenantPeriodFilterValueList = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SPRGS_COVENANT_PERIOD;
    const covenantStatusFilterValueList = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SPRGS_COVENANT_STATUS;
    dispatch(actionsProductCredit.performChangeCheckStatusCreditCovenantPeriodFilterValueList(covenantPeriodFilterValueList));
    dispatch(actionsProductCredit.performChangeCheckStatusCreditCovenantStatusFilterValueList(covenantStatusFilterValueList));
    dispatch(actionsProductCredit.performApplyCovenantStatusFilter(covenantStatusFilterValueList));
    dispatch(actionsProductCredit.performApplyCovenantPeriodFilter(covenantPeriodFilterValueList));
};
export const performFilterCovenantList = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const productCovenantList = reducerState.productCovenantList &&
        Array.isArray(reducerState.productCovenantList.data) ? reducerState.productCovenantList.data : [];
    const datePeriod = reducerState.covenantDateFilterValue;
    const filterPeriodListValue = reducerState.covenantAppliedPeriodFilterValueList;
    const statusPeriodListValue = reducerState.covenantAppliedStatusFilterValueList;
    const filteredProductCovenantList = productCovenantList.filter((covenant) => {
        let filteredStatus = true;
        if (Array.isArray(covenant.historyList) &&
            covenant.historyList.data.find((historyValue) => ((datePeriod && datePeriod.getMonth()) == (historyValue.dateFact ? historyValue.dateFact.getMonth() : null))) == undefined) {
            filteredStatus = false;
        }
        if (Array.isArray(statusPeriodListValue.data) && filterPeriodListValue.data.length > 0 && statusPeriodListValue.data
            .find((statusFilter) => {
            const historyList = Array.isArray(covenant.historyList.data) ? covenant.historyList : { data: [] };
            return statusFilter.value == util.getProductCreditCovenantStatus(datePeriod, historyList);
        }) == undefined) {
            filteredStatus = false;
        }
        if (Array.isArray(filterPeriodListValue.data) && statusPeriodListValue.data.length > 0 && filterPeriodListValue.data
            .find((periodFilter) => {
            return periodFilter.value == covenant.periodicalValue;
        }) == undefined) {
            filteredStatus = false;
        }
        return filteredStatus;
    });
    dispatch(actionsProductCredit.performFilterCovenantList({ data: filteredProductCovenantList }));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get covenent list.
 */
export const performCallGetCovenantList = (contractNumber) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const organization = state.user.mrmkmcibCRM &&
        state.user.mrmkmcibCRM.reducerCustomer &&
        state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged || null;
    let operationId = contractNumber;
    if (reducerState.covenantListFetching) {
        return;
    }
    dispatch(actionsProductCredit.callGetCovenantList());
    util.call(util.urlProductCredit.callGetCovenantList(state, organization, contractNumber, [
        { tag: Enums.CachePolicy.Default },
        { tag: CREDIT_COVENANT_LIST_SESSION_TAG,
            contextId: `${organization && organization.id}-${contractNumber}` }
    ]), (response) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        if (operationId != contractNumber)
            return false;
        dispatch(actionsProductCredit.callGetCovenantListSuccess(response, state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SPRGS_COVENANT_PERIOD, state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary.SPRGS_COVENANT_STATUS));
        state = getState();
        dispatch(thunkProductCredit.performFilterCovenantList());
    }, (error) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        if (operationId != contractNumber)
            return false;
        dispatch(actionsProductCredit.callGetCovenantListFailure(error));
    }, Converters.RESPONSE_CALL_GET_PRODUCT_COVENANT_LIST, 'GET');
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export const callGetForecastEventList = (cachePolicy = Enums.CachePolicy.Default) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    if (reducerState.forecastEventListFetching) {
        return;
    }
    dispatch(actionsProductCredit.callGetForecastEventList());
    dispatch(actionsProductCredit.callGetForecastEventListRequest());
    util.call(util.urlProductCredit.callGetForecastEventList(state, reducerState, [
        { tag: cachePolicy },
        { tag: util.getForecastEventsRequestRefreshString(Enums.ForecastEventsListRequestRefresh.ForecastEventsListRequestRefreshEnabled) }
    ]), (response) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        dispatch(actionsProductCredit.callGetForecastEventListSuccess(response));
        dispatch(actionsProductCredit.performRefreshForecastSuccess());
    }, (error) => {
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
        dispatch(actionsProductCredit.callGetForecastEventListFailure(error));
        dispatch(actionsProductCredit.performRefreshForecastFailure());
        dispatch(actionsProductCredit.performShowModalForecastEventSaveError());
    }, Converters.RESPONSE_CREDIT_CALL_GET_FORECAST_EVENT_LIST_TO_FORECAST_EVENT_LIST, 'GET');
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export const performShowModalForecastEventSaveError = () => (dispatch) => {
    dispatch(actionsProductCredit.performShowModalForecastEventSaveError());
};
// Prognostic Create
export const performPrognosticEventCreate = () => (dispatch, getState) => {
    const contextMode = Enums.ForecastEventEditorContextMode.PrognosticEventList;
    dispatch(thunkProductCredit.navigateToPrognosticEventCreate());
    dispatch(thunkForecastEventEditor.performForecastEventSetContextMode(contextMode));
    dispatch(actionsProductCredit.performPrognosticEventCreate());
};
export const navigateToPrognosticEventCreate = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProductCreatePage, util.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct)));
};
// Prognostic Update
export const performPrognosticEventUpdate = (event) => (dispatch, getState) => {
    const contextMode = Enums.ForecastEventEditorContextMode.PrognosticEventDetail;
    dispatch(thunkProductCredit.navigateToPrognosticEventUpdate());
    dispatch(thunkForecastEventEditor.performForecastEventSetContextMode(contextMode));
    dispatch(actionsProductCredit.performPrognosticEventUpdate(event));
};
export const navigateToPrognosticEventUpdate = () => (dispatch, getState) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProductUpdatePage, util.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct)));
};
// Prognostic Detail
export const performPrognosticEventDetail = (event) => (dispatch) => {
    dispatch(thunkProductCredit.navigateToPrognosticEventDetail());
    dispatch(actionsProductCredit.performPrognosticEventDetail(event));
};
export const navigateToPrognosticEventDetail = () => (dispatch) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProductDetailPage, util.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct)));
};
// Forecast Create
export const performForecastEventCreate = () => (dispatch) => {
    const contextMode = Enums.ForecastEventEditorContextMode.ForecastEventList;
    dispatch(thunkProductCredit.navigateToForecastEventCreate());
    dispatch(thunkForecastEventEditor.performForecastEventSetContextMode(contextMode));
    dispatch(actionsProductCredit.performForecastEventCreate());
};
export const navigateToForecastEventCreate = () => (dispatch) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductEventCreatePage, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
};
// Forecast Update
export const performForecastEventUpdate = (event) => (dispatch, getState) => {
    const contextMode = Enums.ForecastEventEditorContextMode.ForecastEventDetail;
    dispatch(thunkProductCredit.navigateToForecastEventUpdate());
    dispatch(thunkForecastEventEditor.performForecastEventSetContextMode(contextMode));
    dispatch(actionsProductCredit.performForecastEventUpdate(event));
};
export const navigateToForecastEventUpdate = () => (dispatch) => {
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProductEventEditPage, util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performinputPaymentScheduleFilterOperCodeCred = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performinputPaymentScheduleFilterOperCodeCred(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performinputPaymentScheduleFilterOperCodeProc = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performinputPaymentScheduleFilterOperCodeProc(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performinputPaymentScheduleFilterOperCodeOther = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performinputPaymentScheduleFilterOperCodeOther(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performinputPaymentScheduleFilterStatusExecPay = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performinputPaymentScheduleFilterStatusExecPay(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performinputPaymentScheduleFilterStatusForPay = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performinputPaymentScheduleFilterStatusForPay(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performinputPaymentScheduleFilterStatusNotPay = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performinputPaymentScheduleFilterStatusNotPay(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputPaymentScheduleFilterPeriodEnd = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performInputPaymentScheduleFilterPeriodEnd(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switched between datepickers.
 */
export const performPopoverPaymentSchedulePeriodSwitchDatePicker = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentSchedulePeriodSwitchDatePicker(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputPaymentScheduleFilterPeriodStart = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performInputPaymentScheduleFilterPeriodStart(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputPaymentScheduleFilterPeriodStartApplied = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performInputPaymentScheduleFilterPeriodStartApplied(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
 */
export const performInputPaymentScheduleFilterPeriodEndApplied = (value) => (dispatch) => {
    dispatch(actionsProductCredit.performInputPaymentScheduleFilterPeriodEndApplied(value));
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Период" filter.
 */
export const performPopoverPaymentSchedulePeriodFilterHide = () => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentSchedulePeriodFilterHide());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Период" filter.
 */
export const performPopoverPaymentSchedulePeriodFilterShow = () => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentSchedulePeriodFilterShow());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Тип операции" filter.
 */
export const performPopoverPaymentScheduleOperationTypeFilterHide = () => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentScheduleOperationTypeFilterHide());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Тип операции" filter.
 */
export const performPopoverPaymentScheduleOperationTypeFilterShow = () => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentScheduleOperationTypeFilterShow());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Статус" filter.
 */
export const performPopoverPaymentScheduleStatusFilterHide = () => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentScheduleStatusFilterHide());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Статус" filter.
 */
export const performPopoverPaymentScheduleStatusFilterShow = () => (dispatch) => {
    dispatch(actionsProductCredit.performPopoverPaymentScheduleStatusFilterShow());
};
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 * @param { boolean } isInitial - flag state loading data
 * @param { Enums.CachePolicy } cachePolicy
 */
export const callGetPaymentScheduleList = (isInitial = false, cachePolicy = Enums.CachePolicy.Disabled, isCacheEnable = true, isLoadMore = false) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    if (reducerState.paymentScheduleListFetching) {
        return;
    }
    dispatch(actionsProductCredit.callGetPaymentScheduleList());
    dispatch(actionsProductCredit.callGetPaymentScheduleListRequest());
    if (isInitial) {
        dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(reducerState.inputPaymentScheduleFilterPeriodStart, reducerState.inputPaymentScheduleFilterPeriodEnd));
        dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(reducerState.inputPaymentScheduleFilterPeriodStart, reducerState.inputPaymentScheduleFilterPeriodEnd));
    }
    state = getState();
    reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    let operationsTypes = [];
    if (reducerState.inputPaymentScheduleFilterOperCodeCredApplied) {
        operationsTypes.push("cred");
    }
    if (reducerState.inputPaymentScheduleFilterOperCodeProcApplied) {
        operationsTypes.push("proc");
    }
    if (reducerState.inputPaymentScheduleFilterOperCodeOtherApplied) {
        operationsTypes.push("other");
    }
    let operationStatuses = [];
    if (reducerState.inputPaymentScheduleFilterStatusExecPayApplied) {
        operationStatuses.push("execPay");
    }
    if (reducerState.inputPaymentScheduleFilterStatusForPayApplied) {
        operationStatuses.push("forPay");
    }
    if (reducerState.inputPaymentScheduleFilterStatusNotPayApplied) {
        operationStatuses.push("notPay");
    }
    const filters = {
        cache: isCacheEnable,
        dBegin: reducerState.inputPaymentScheduleFilterPeriodStartApplied || reducerState.inputPaymentScheduleFilterPeriodStart,
        dEnd: reducerState.inputPaymentScheduleFilterPeriodEndApplied || reducerState.inputPaymentScheduleFilterPeriodEnd,
        operationsTypes,
        operationStatuses
    };
    util.call(util.urlProductCredit.callGetPaymentScheduleList(state, reducerState, [
        { tag: cachePolicy },
        { tag: util.getPaymentScheduleRequestRefreshString(Enums.PaymentScheduleListRequestRefresh.PaymentScheduleListRequestRefreshEnabled) }
    ]), (response) => {
        dispatch(thunkProductCredit.callGetPaymentScheduleListSuccess(response, isLoadMore, isInitial));
        dispatch(actionsProductCredit.performRefreshForecastSuccess());
    }, (error) => {
        switch (error.code) {
            case 'TIMEOUT': {
                dispatch(thunkProductCredit.performPaymentScheduleErrorShow(Enums.paymentScheduleAlternativeScenariosType.TimeoutResponseReceived, util.paymentScheduleListLoadErrorTimeout));
                break;
            }
            default: {
                dispatch(thunkProductCredit.performPaymentScheduleErrorShow(Enums.paymentScheduleAlternativeScenariosType.UpdateDataTeсhnicalError, util.paymentScheduleListLoadErrorOther));
                break;
            }
        }
        dispatch(actionsProductCredit.callGetPaymentScheduleListFailure(error));
        dispatch(actionsProductCredit.performRefreshForecastFailure());
    }, Converters.RESPONSE_CREDIT_CALL_GET_PAYMENT_SCHEDULE_LIST_TO_PAYMENT_SCHEDULE_LIST, 'POST', { 'Content-type': 'application/json; charset=UTF-8' }, Converters.RESPONSE_CREDIT_CALL_GET_PAYMENT_SCHEDULE_LIST_TO_PAYMENT_SCHEDULE_DATA_LIST, Object.assign({}, filters));
};
/**
 *
 */
export const callGetPaymentScheduleListSuccess = (response, isLoadMore, isInitial) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const newListLength = response.data.data.length;
    dispatch(actionsProductCredit.callGetPaymentScheduleListSuccess(response));
    const paymentScheduleMaxRecords = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleMaxRecords]) || DEFAULT_RECORDS_COUNT;
    if (newListLength > paymentScheduleMaxRecords) {
        // альтернативный сценарий "Запрошенный период слишком большой"
        dispatch(thunkProductCredit.alternativeScenariosHandlerRequestedPeriodTooLarge(reducerState.inputPaymentScheduleFilterPeriodStartApplied || new Date(), reducerState.inputPaymentScheduleFilterPeriodEndApplied || new Date(), reducerState.inputPaymentScheduleFilterPeriodStartApplied || new Date(), reducerState.inputPaymentScheduleFilterPeriodEndApplied || new Date()));
        if (isInitial) {
            dispatch(thunkProductCredit.performSetPaymentScheduleList(response));
            const currentDate = new Date();
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(firstDayOfMonth, lastDayOfMonth));
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(firstDayOfMonth, lastDayOfMonth));
            const filteredList = Object.assign({}, response, { data: {
                    data: response.data.data.filter(item => item.operDate && +item.operDate > +firstDayOfMonth && +item.operDate < +lastDayOfMonth)
                } });
            dispatch(thunkProductCredit.performSetPaymentScheduleListFiltered(filteredList));
        }
        else {
            const startDate = reducerState.inputPaymentScheduleFilterPeriodStartOld;
            const endDate = reducerState.inputPaymentScheduleFilterPeriodEndOld;
            const statusExecPay = reducerState.inputPaymentScheduleFilterStatusExecPayOld;
            const statusForPay = reducerState.inputPaymentScheduleFilterStatusForPayOld;
            const statusNotPay = reducerState.inputPaymentScheduleFilterStatusNotPayOld;
            const operationProc = reducerState.inputPaymentScheduleFilterOperCodeProc;
            const operationCred = reducerState.inputPaymentScheduleFilterOperCodeCred;
            const operationOther = reducerState.inputPaymentScheduleFilterOperCodeOther;
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(startDate, endDate));
            dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(startDate, endDate));
            dispatch(performinputPaymentScheduleFilterOperCodeProc(operationProc));
            dispatch(performinputPaymentScheduleFilterOperCodeCred(operationCred));
            dispatch(performinputPaymentScheduleFilterOperCodeOther(operationOther));
            dispatch(performPaymentScheduleFilterOperationTypeSetApplied());
            dispatch(performinputPaymentScheduleFilterStatusExecPay(statusExecPay));
            dispatch(performinputPaymentScheduleFilterStatusForPay(statusForPay));
            dispatch(performinputPaymentScheduleFilterStatusNotPay(statusNotPay));
            dispatch(performPaymentScheduleFilterStatusSetApplied());
        }
    }
    else {
        if (isLoadMore === true) {
            // альтернативный сценарий "Все платежи уже получены"
            const currentListLength = reducerState.paymentScheduleListFiltered.data.length;
            if (currentListLength === newListLength) {
                // Устанавливаем в фильтр старые значения
                const inputPaymentScheduleFilterPeriodEnd = reducerState.inputPaymentScheduleFilterPeriodEnd;
                const inputPaymentScheduleFilterPeriodStart = reducerState.inputPaymentScheduleFilterPeriodStart;
                if (inputPaymentScheduleFilterPeriodEnd) {
                    let dateIntermediate = new Date(inputPaymentScheduleFilterPeriodEnd);
                    dateIntermediate.setFullYear(dateIntermediate.getFullYear() - 1);
                    const dateEnd = new Date(dateIntermediate);
                    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(inputPaymentScheduleFilterPeriodStart, dateEnd));
                    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(inputPaymentScheduleFilterPeriodStart, dateEnd));
                }
                dispatch(thunkProductCredit.performPaymentScheduleAlertShow(Enums.paymentScheduleAlternativeScenariosType.AllPaymentsAlreadyBeenReceived, util.alertViewMessagePaymentScheduleAllPaymentsAlreadyBeenReceived, util.alertViewTitlePaymentScheduleCouldNotDisplayData));
            }
        }
        // dispatch(actionsProductCredit.callGetPaymentScheduleListSuccess(response))
        let startDate = null;
        if (isInitial) {
            dispatch(thunkProductCredit.performSetPaymentScheduleList(response));
            const firstNotExecPay = response.data.data.find(item => !!(item.status && item.status.toString() !== Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.execPay].toString() && item.operDate));
            if (firstNotExecPay) {
                startDate = firstNotExecPay.operDate;
                dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(startDate, reducerState.inputPaymentScheduleFilterPeriodEnd));
                dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(startDate, reducerState.inputPaymentScheduleFilterPeriodEnd));
                const filteredList = Object.assign({}, response, { data: {
                        data: response.data.data.filter((item2) => item2.operDate && startDate && +item2.operDate >= +startDate)
                    } });
                dispatch(thunkProductCredit.performSetPaymentScheduleListFiltered(filteredList));
            }
        }
        if (startDate === null) {
            dispatch(thunkProductCredit.performSetPaymentScheduleListFiltered(response));
        }
    }
};
/**
 *
 */
export const performSetPaymentScheduleList = (response) => (dispatch) => {
    dispatch(actionsProductCredit.performSetPaymentScheduleList(response));
};
/**
 *
 */
export const performSetPaymentScheduleListFiltered = (response) => (dispatch) => {
    dispatch(actionsProductCredit.performSetPaymentScheduleListFiltered(response));
};
/*
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleListFlush = () => (dispatch) => {
    Cache.sessionResetTag({ tag: util.getPaymentScheduleRequestRefreshString(Enums.PaymentScheduleListRequestRefresh.PaymentScheduleListRequestRefreshEnabled) });
    dispatch(actionsProductCredit.performPaymentScheduleListFlush());
    dispatch(thunkProductCredit.performPaymentScheduleAlertHide());
    dispatch(performRefreshForecast(false));
};
/*
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleFilterPeriodSave = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(actionsProductCredit.performPaymentScheduleFilterPeriodSave());
    // Устанавливаем новую дату в компонент Text у фильтра периода
    if (reducerState.inputPaymentScheduleFilterPeriodStart && reducerState.inputPaymentScheduleFilterPeriodEnd) {
        dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(reducerState.inputPaymentScheduleFilterPeriodStart, reducerState.inputPaymentScheduleFilterPeriodEnd));
    }
    // Скрываем Popover с фильтром
    dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodFilterHide());
    // Заново отсылаем запрос на получение данных ГП
    dispatch(thunkProductCredit.callGetPaymentScheduleList());
};
/**
 * /**
 * Thunk dispatched by "ProductCredit" container. Reset Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleFilterPeriodReset = () => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterPeriodReset());
    // Скрываем Popover с фильтром
    dispatch(thunkProductCredit.performPopoverPaymentSchedulePeriodFilterHide());
    // Устанавливаем дефолтные значения периода
    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetDefault());
    // Заново отсылаем запрос на получение данных ГП
    dispatch(thunkProductCredit.callGetPaymentScheduleList(true));
};
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleFilterPeriodSetDefault = () => (dispatch, getState) => {
    const state = getState();
    const offsetBegin = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleOffsetBegin]) || DEFAULT_OFFSET_VALUE_DAYS;
    const offsetEnd = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleOffsetEnd]) || DEFAULT_OFFSET_VALUE_DAYS;
    const dateIntermediate = new Date();
    const currentDay = dateIntermediate.getDate();
    const dateEnd = new Date(dateIntermediate);
    dateEnd.setDate(currentDay + offsetEnd);
    const dateStart = new Date(dateIntermediate);
    dateStart.setDate(currentDay - offsetBegin);
    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(dateStart, dateEnd));
    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(dateStart, dateEnd));
};
/**
 * Thunk dispatched by "ProductCredit" container. Set date in filter period
 */
export const performPaymentScheduleFilterPeriodSet = (dateStart, dateEnd) => (dispatch) => {
    if (dateStart && dateEnd) {
        dispatch(actionsProductCredit.performPaymentScheduleFilterPeriodSet(dateStart, dateEnd));
    }
};
/**
 * Thunk dispatched by "ProductCredit" container. Set date in filter period applied
 */
export const performPaymentScheduleFilterPeriodSetApplied = (dateStart, dateEnd) => (dispatch) => {
    if (dateStart && dateEnd) {
        dispatch(thunkProductCredit.performInputPaymentScheduleFilterPeriodStartApplied(dateStart));
        dispatch(thunkProductCredit.performInputPaymentScheduleFilterPeriodEndApplied(dateEnd));
    }
};
/**
 *
 */
export const performPaymentScheduleFilterOperationTypeSetApplied = () => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterOperationTypeSetApplied());
};
/**
 *
 */
export const performPaymentScheduleFilterStatusSetApplied = () => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterStatusSetApplied());
};
/*
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleFilterOperationTypeSave = () => (dispatch, getState) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterOperationTypeSave());
    dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeSetApplied());
    // Скрываем Popover с фильтром
    dispatch(thunkProductCredit.performPopoverPaymentScheduleOperationTypeFilterHide());
    // Заново отсылаем запрос на получение данных ГП
    dispatch(thunkProductCredit.callGetPaymentScheduleList());
};
/*
 * Thunk dispatched by "ProductCredit" container. Reset data for operation type filter
 */
export const performPaymentScheduleFilterOperationTypeSetDefault = (operationTypesOps) => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterOperationTypeSetDefault(operationTypesOps));
};
/*
 * Thunk dispatched by "ProductCredit" container. Reset data for operation type filter
 */
export const performPaymentScheduleFilterOperationTypeReset = () => (dispatch, getState) => {
    const state = getState();
    const operationTypesOps = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleFilterTypeOps].split("#") || ['cred', 'proc', 'other'];
    dispatch(thunkProductCredit.performPaymentScheduleFilterOperationTypeSetDefault(operationTypesOps));
    // Скрываем Popover с фильтром
    dispatch(thunkProductCredit.performPopoverPaymentScheduleOperationTypeFilterHide());
    // Заново отсылаем запрос на получение данных ГП
    dispatch(thunkProductCredit.callGetPaymentScheduleList());
};
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleFilterStatusSave = () => (dispatch, getState) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterStatusSave());
    dispatch(thunkProductCredit.performPaymentScheduleFilterStatusSetApplied());
    // Скрываем Popover с фильтром
    dispatch(thunkProductCredit.performPopoverPaymentScheduleStatusFilterHide());
    // Заново отсылаем запрос на получение данных ГП
    dispatch(thunkProductCredit.callGetPaymentScheduleList());
};
/*
 * Thunk dispatched by "ProductCredit" container. Reset data for operation status filter
 */
export const performPaymentScheduleFilterStatusSetDefault = (operationStatusOps) => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleFilterStatusSetDefault(operationStatusOps));
};
/*
 * Thunk dispatched by "ProductCredit" container. Reset data for operation status filter
 */
export const performPaymentScheduleFilterStatusReset = () => (dispatch, getState) => {
    const state = getState();
    const operationStatusOps = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().PaymentScheduleFilterStatusOps].split("#") || ['notPay', 'forPay', 'execPay'];
    dispatch(thunkProductCredit.performPaymentScheduleFilterStatusSetDefault(operationStatusOps));
    // Скрываем Popover с фильтром
    dispatch(thunkProductCredit.performPopoverPaymentScheduleStatusFilterHide());
    // Заново отсылаем запрос на получение данных ГП
    dispatch(thunkProductCredit.callGetPaymentScheduleList());
};
/**
 * Обработчик функционала ГП "загрузить еще"
 */
export const performPaymentScheduleLoadMore = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    const inputPaymentScheduleFilterPeriodEnd = reducerState.inputPaymentScheduleFilterPeriodEndApplied;
    const inputPaymentScheduleFilterPeriodStart = reducerState.inputPaymentScheduleFilterPeriodStartApplied ?
        reducerState.inputPaymentScheduleFilterPeriodStartApplied : new Date();
    if (inputPaymentScheduleFilterPeriodEnd) {
        let dateIntermediate = new Date(inputPaymentScheduleFilterPeriodEnd);
        dateIntermediate.setFullYear(dateIntermediate.getFullYear() + 1);
        const dateEnd = new Date(dateIntermediate);
        dispatch(actionsProductCredit.performPaymentScheduleLoadMore());
        dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(inputPaymentScheduleFilterPeriodStart, dateEnd));
        dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(inputPaymentScheduleFilterPeriodStart, dateEnd));
        // Заново отсылаем запрос на получение данных ГП
        dispatch(thunkProductCredit.callGetPaymentScheduleList(false, Enums.CachePolicy.Disabled, true, true)); // Индикатор работы этого запроса -- paymentScheduleListFetching.
    }
};
/**
 * Альтернативный сценарий "Запрошенный период слишком большой"
 * @param { Date } dateStart
 * @param { Date } dateEnd
 * @param { Date | null } dateStartDefault
 * @param { Date | null } dateEndDefault
 * @return void
 */
export const alternativeScenariosHandlerRequestedPeriodTooLarge = (dateStart, dateEnd, dateStartDefault, dateEndDefault) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerProductCredit;
    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSet(dateStartDefault, dateEndDefault));
    dispatch(thunkProductCredit.performPaymentScheduleFilterPeriodSetApplied(dateStartDefault, dateEndDefault));
    // выводим сообщение
    dispatch(thunkProductCredit.performPaymentScheduleAlertShow(Enums.paymentScheduleAlternativeScenariosType.RequestPeriodTooLong, util.alertViewMessagePaymentScheduleRequestPeriodTooLong(dateStart, dateEnd), util.alertViewTitlePaymentScheduleCouldNotDisplayData));
};
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleAlertShow = (paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle = null) => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleAlertShow(paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle));
};
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleAlertHide = () => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleAlertHide());
};
/**
 * Thunk dispatched by "ProductCredit" container. Handler alertView ok
 */
export const performPaymentScheduleAlertViewHandleOk = () => (dispatch, getState) => {
    const state = getState();
    const paymentScheduleAlternativeScenariosType = state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlternativeScenariosType;
    dispatch(actionsProductCredit.performPaymentScheduleAlertViewHandleOk());
    switch (paymentScheduleAlternativeScenariosType) {
        case Enums.paymentScheduleAlternativeScenariosType.Refresh:
            dispatch(thunkProductCredit.performPaymentScheduleListFlush());
        case Enums.paymentScheduleAlternativeScenariosType.RequestPeriodTooLong:
            dispatch(thunkProductCredit.performPaymentScheduleAlertHide());
        case Enums.paymentScheduleAlternativeScenariosType.AllPaymentsAlreadyBeenReceived:
            dispatch(thunkProductCredit.performPaymentScheduleAlertHide());
    }
};
/**
 * Thunk dispatched by "ProductCredit" container. Handler alertView ok
 */
export const performPaymentScheduleAlertViewHandleCancel = () => (dispatch, getState) => {
    const state = getState();
    const paymentScheduleAlternativeScenariosType = state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlternativeScenariosType;
    switch (paymentScheduleAlternativeScenariosType) {
        case Enums.paymentScheduleAlternativeScenariosType.Refresh:
            dispatch(thunkProductCredit.performPaymentScheduleAlertHide());
    }
};
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleErrorShow = (paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle = null) => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleErrorShow(paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage, paymentScheduleAlternativeScenariosTitle));
};
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export const performPaymentScheduleErrorHide = () => (dispatch) => {
    dispatch(actionsProductCredit.performPaymentScheduleErrorHide());
};
/**
 * Thunk dispatched by "ProductCredit" container. Perform payment schedule list refresh.
 */
export const performPaymentScheduleListRefresh = () => (dispatch) => {
    dispatch(thunkProductCredit.performPaymentScheduleErrorHide());
    dispatch(thunkProductCredit.callGetPaymentScheduleList());
    dispatch(actionsProductCredit.performPaymentScheduleListRefresh());
};
/**
 * Thunk dispatched by "ProductCredit" container. Handler alertView ok
 */
export const performPaymentScheduleErrorViewHandleRepeat = () => (dispatch, getState) => {
    const state = getState();
    const paymentScheduleAlternativeScenariosType = state.user.mrmkmcibCRM.reducerProductCredit.paymentScheduleAlternativeScenariosType;
    dispatch(actionsProductCredit.performPaymentScheduleErrorViewHandleRepeat());
};
/*
 * Thunk dispatched by "ProductCredit" screen. Thunk used to navigate to Customer.
 */
export const performCustomerOpen = (customer) => (dispatch) => {
    dispatch(thunkProductCredit.navigateToCustomerScreen());
    dispatch(actionsProductCredit.performCustomerOpen());
};
//# sourceMappingURL=ThunkProductCredit.js.map