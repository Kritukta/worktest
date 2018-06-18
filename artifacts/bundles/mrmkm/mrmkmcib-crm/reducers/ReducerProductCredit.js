/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsProductCredit from '../actions/ActionsProductCredit';
import { Enums } from '../Enums';
import * as ModelsProductCredit from '../models/ModelsProductCredit';
import * as ModelState from "../models/Models";
import * as util from '../common/Util';
import { defaultValues } from "../models/Models";
const reducerProductCredit = handleActions({
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperationTypeOtherRepayment: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperationTypeInterestRepayment: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
    [actionsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverCovenantStatusFilter: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
    [actionsProductCredit.PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE]: (state, action) => {
        return Object.assign({}, state, { covenantDateFilterValue: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to send get reqeust for product covenant list.
    [actionsProductCredit.CALL_GET_COVENANT_LIST]: (state, action) => {
        return Object.assign({}, state, { covenantListFetching: true, covenantListFetchingError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on call get covenant list success.
    [actionsProductCredit.CALL_GET_COVENANT_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { covenantListFetching: false, productCovenantList: action.payload.response.data, covenantDateFilterValue: new Date(), covenantPeriodFilterValueList: action.payload.periodFilterValueList, covenantStatusFilterValueList: action.payload.statusFilterValueList, covenantAppliedPeriodFilterValueList: action.payload.periodFilterValueList, covenantAppliedStatusFilterValueList: action.payload.statusFilterValueList, productCachedDateCovenantList: action.payload.response.cachedDate, covenantListFetchingError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to filter product covenant list
    [actionsProductCredit.PERFORM_FILTER_PRODUCT_COVENANT_LIST]: (state, action) => {
        return Object.assign({}, state, { filteredProductCovenantList: action.payload.covenantList });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on call get request covenant list failure.
    [actionsProductCredit.CALL_GET_COVENANT_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { covenantListFetching: false, covenantListFetchingError: action.payload.error });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
    [actionsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverCovenantPeriodFilter: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change check status of covenant filter value list.
    [actionsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER_VALUE_LIST]: (state, action) => {
        return Object.assign({}, state, { covenantStatusFilterValueList: action.payload.valueList });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to apply covenant filter.
    [actionsProductCredit.PERFORM_APPLY_COVENANT_PERIOD_FILTER]: (state, action) => {
        return Object.assign({}, state, { covenantAppliedPeriodFilterValueList: action.payload.valueList });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to apply covenant filter.
    [actionsProductCredit.PERFORM_APPLY_COVENANT_STATUS_FILTER]: (state, action) => {
        return Object.assign({}, state, { covenantAppliedStatusFilterValueList: action.payload.valueList });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperationTypeDebtRepayment: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to set update status of covenant filter.
    [actionsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER_VALUE_LIST]: (state, action) => {
        return Object.assign({}, state, { covenantPeriodFilterValueList: action.payload.valueList });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Статус" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusUnpaid: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Статус" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusPaid: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Статус" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusToPay: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched on tab selector change current tab.
    [actionsProductCredit.PERFORM_CHANGE_TAB]: (state, action) => {
        return Object.assign({}, state, { currentTab: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to forecast screen.
    [actionsProductCredit.NAVIGATE_TO_FORECAST_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate to payment schedule screen.
    [actionsProductCredit.NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back.
    [actionsProductCredit.NAVIGATE_PRODUCT_CREDIT_BACK]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: defaultValues.ForecastEvent });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back to deal screen.
    [actionsProductCredit.NAVIGATE_PRODUCT_CREDIT_DEAL_BACK]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: defaultValues.ForecastEvent });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
    [actionsProductCredit.PERFORM_POPOVER_FORECAST_EVENT_SHOW]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: action.payload.forecastEvent, isVisiblePopoverForecastEvent: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
    [actionsProductCredit.PERFORM_POPOVER_FORECAST_EVENT_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverForecastEvent: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
    [actionsProductCredit.NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
    [actionsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventType: action.payload.value, inputValidationForecastEventCurrency: null, inputValidationForecastEventEmail: null, inputValidationForecastEventPossibility: null, inputValidationForecastEventSumm: null, inputValidationForecastEventType: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_DATE]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventDate: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
    [actionsProductCredit.NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk used to show value picker screen.
    [actionsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventPossibility: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user tap Currency field.
    [actionsProductCredit.NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input Currency field.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_CURRENCY]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventCurrency: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_SUM]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventSum: action.payload.value, inputValidationForecastEventSumm: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FULL_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputFullRepayment: action.payload.value, inputValidationForecastEventEmail: null, inputValidationForecastEventSumm: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_EMAIL]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventEmail: action.payload.value, inputValidationForecastEventEmail: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FORECAST_EVENT_COMMENT]: (state, action) => {
        return Object.assign({}, state, { inputForecastEventComment: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to save forecast event.
    [actionsProductCredit.PERFORM_FORECAST_EVENT_SAVE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverForecastEvent: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover.
    [actionsProductCredit.PERFORM_POPOVER_FILTER_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover.
    [actionsProductCredit.PERFORM_POPOVER_FILTER_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputFilterForecastEventType: action.payload.value });
    },
    // Internal thunk used in "ProductCredit" container. Thunk dispatched on user select custom period type.
    [actionsProductCredit.NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input field value.
    [actionsProductCredit.PERFORM_INPUT_FILTER_PERIOD_TYPE]: (state, action) => {
        return Object.assign({}, state, { inputFilterPeriodType: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodStart field.
    [actionsProductCredit.PERFORM_INPUT_FILTER_PERIOD_START]: (state, action) => {
        return Object.assign({}, state, { inputFilterPeriodStart: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user input FilterPeriodEnd field.
    [actionsProductCredit.PERFORM_INPUT_FILTER_PERIOD_END]: (state, action) => {
        return Object.assign({}, state, { inputFilterPeriodEnd: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
    [actionsProductCredit.PERFORM_FILTER_CUSTOM_DATE_APPLY]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to change filter period.
    [actionsProductCredit.PERFORM_FILTER_APPLY]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false, inputActiveFilterPeriodType: state.inputFilterPeriodType, inputActiveFilterForecastEventType: state.inputFilterForecastEventType, inputActiveFilterPeriodStart: state.inputFilterPeriodStart, inputActiveFilterPeriodEnd: state.inputFilterPeriodEnd });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
    [actionsProductCredit.PERFORM_FILTER_RESET]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false, inputActiveFilterPeriodType: Enums.ForecastPeriodType.CreditFinish, inputActiveFilterForecastEventType: null, inputActiveFilterPeriodStart: new Date(), inputActiveFilterPeriodEnd: new Date(), inputFilterPeriodType: Enums.ForecastPeriodType.CreditFinish, inputFilterForecastEventType: null, inputFilterPeriodStart: new Date(), inputFilterPeriodEnd: new Date() });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
    [actionsProductCredit.PERFORM_FILTER_PERIOD_RESET]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false, inputActiveFilterPeriodType: Enums.ForecastPeriodType.CreditFinish, inputActiveFilterPeriodStart: new Date(), inputActiveFilterPeriodEnd: new Date(), inputFilterPeriodType: Enums.ForecastPeriodType.CreditFinish, inputFilterPeriodStart: new Date(), inputFilterPeriodEnd: new Date() });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
    [actionsProductCredit.PERFORM_CREATE_EVENT_POPUP_RESET]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverForecastEvent: false, inputValidationForecastEventComment: null, inputValidationForecastEventEmail: null, inputValidationForecastEventCurrency: null, inputValidationForecastEventSumm: null, inputValidationForecastEventPossibility: null, inputValidationForecastEventType: null, inputForecastEventType: null, inputForecastEventDate: null, inputForecastEventPossibility: 0, inputForecastEventCurrency: {
                parentId: '',
                name: '',
                value: '',
                code: ''
            }, inputForecastEventSum: null, inputFullRepayment: false, inputForecastEventEmail: '', inputForecastEventComment: '', newForecastEventSaveError: null, newForecastEventSaveInProgress: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to validate form fields of "Create new forecast event".
    [actionsProductCredit.PERFORM_INPUT_CREATE_POPUP_EVENT_VALIDATION]: (state, action) => {
        /* Валидация полей формы создания прогнозного события

        | Тип: Выдача | Тип: Погашение | Полное погашение | Поле                            |
        | ✅          | ✅            | ✅               | Тип события                     |
        | ❌          | ❌            | ❌               | Дата события                    |
        | ❌          | ❌            | ❌               | Вероятность события             |
        | ❌          | ❌            | ❌               | Полное погашение                |
        | ❌          | ❌            | ❌               | Примечание при полном погашении |
        | ❌          | ❌            | ❌               | Валюта                          |
        | ✅          | ✅            | ❌               | Сумма                           |
        | ✅          | ✅            | ✅               | E-Mail                          |
        | ❌          | ❌            | ❌               | Примечания                      |
        */
        const isFullReplayment = state.inputForecastEventType &&
            state.inputForecastEventType.code === 'ГАШЕНИЕ_K_T' && state.inputFullRepayment;
        const inputValidation = {
            inputValidationForecastEventType: util.creditEventValidationType(state.inputForecastEventType),
            inputValidationForecastEventPossibility: null,
            inputValidationForecastEventCurrency: null,
            inputValidationForecastEventSumm: !isFullReplayment ? util.creditEventValidationSumm(state.inputForecastEventSum) : null,
            inputValidationForecastEventEmail: util.creditEventValidationEmail(state.inputForecastEventEmail),
        };
        return Object.assign({}, state, inputValidation);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
    [actionsProductCredit.PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP]: (state, action) => {
        return state;
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
    [actionsProductCredit.PERFORM_FILTER_EVENT_TYPE_RESET]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverFilter: false, inputFilterForecastEventType: null, inputActiveFilterForecastEventType: null });
    },
    // Internal thunk used in "ProductCredit" container. Thunk dispatched to filter forecast event list.
    [actionsProductCredit.FORECAST_EVENT_LIST_FILTER]: (state, action) => {
        return Object.assign({}, state, { forecastEventListFiltered: util.forecastEventListFilter(action.payload.forecastEventList, state.inputFilterPeriodStart, state.inputFilterPeriodEnd, state.inputFilterPeriodType, state.inputFilterForecastEventType) });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset container state to default values.
    [actionsProductCredit.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsProductCredit.initialState.state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.CALL_GET_FORECAST_EVENT_LIST_REQUEST]: (state, action) => {
        return Object.assign({}, state, { forecastEventListFetching: true, forecastEventListError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.CALL_GET_FORECAST_EVENT_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { forecastEventList: action.payload.response.data, forecastEventListCachedDate: action.payload.response.cachedDate, forecastEventListFiltered: util.forecastEventListFilter(action.payload.response.data, state.inputFilterPeriodStart, state.inputFilterPeriodEnd, state.inputFilterPeriodType, state.inputFilterForecastEventType), forecastEventListFetching: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.CALL_GET_FORECAST_EVENT_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { forecastEventListError: action.payload.error, forecastEventListFetching: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.CALL_GET_FORECAST_EVENT_LIST_RESET]: (state, action) => {
        return Object.assign({}, state, { forecastEventList: { data: [] } });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fetching.
    [actionsProductCredit.PERFORM_REFRESH_FORECAST_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { forecastFetching: true, forecastError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status success.
    [actionsProductCredit.PERFORM_REFRESH_FORECAST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { forecastFetching: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_REFRESH_FORECAST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { forecastFetching: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.CALL_POST_FORECAST_EVENT_CREATE_REQUEST]: (state, action) => {
        return Object.assign({}, state, { newForecastEventSaveInProgress: true, newForecastEventSaveError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.CALL_POST_FORECAST_EVENT_CREATE_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { newForecastEventSaveInProgress: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.CALL_POST_FORECAST_EVENT_CREATE_FAILURE]: (state, action) => {
        return Object.assign({}, state, { newForecastEventSaveInProgress: false, newForecastEventSaveError: action.payload.error });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_SHOW_MODAL_FORECAST_EVENT_SAVE_ERROR]: (state, action) => {
        return Object.assign({}, state, { isModalForecastEventSaveErrorVisible: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR]: (state, action) => {
        return Object.assign({}, state, { isModalForecastEventSaveErrorVisible: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk show modal forecast get list error
    [actionsProductCredit.PERFORM_SHOW_MODAL_FORECAST_EVENT_GET_LIST_ERROR]: (state, action) => {
        return Object.assign({}, state, { isModalForecastEventGetListErrorVisible: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk hide modal forecast get list error
    [actionsProductCredit.PERFORM_HIDE_MODAL_FORECAST_EVENT_GET_LIST_ERROR]: (state, action) => {
        return Object.assign({}, state, { isModalForecastEventGetListErrorVisible: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_SET_CURRENT_FORECAST_DEAL_ID]: (state, action) => {
        return Object.assign({}, state, { currentForecastDealId: action.payload.dealId });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_FORECAST_EVENT_DELETE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_OPEN_FORECAST_EVENT_DETAILS]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: action.payload.forecastEvent });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_CLEAR_CURRENT_FORECAST_EVENT]: (state, action) => (Object.assign({}, state, { currentForecastEvent: ModelState.defaultValues.ForecastEvent })),
    // Thunk dispatched by "ProductCredit" screen. Thunk used to navigate to customer screen.
    [actionsProductCredit.PERFORM_CUSTOMER_OPEN]: (state) => (Object.assign({}, state)),
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_EDIT_FORECAST_EVENT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk set forecast status fail.
    [actionsProductCredit.PERFORM_RESET_FORECAST_EVENT_EDIT_FORM]: (state, action) => {
        return Object.assign({}, state, { inputEventEditEventType: null, inputEventEditEventDate: null, inputEventEditEventDatePopover: null, inputEventEditEventPossibility: null, inputEventEditEventSum: '', inputEventEditEventCurrency: undefined, inputEventEditEventEmail: '', inputEventEditEventComment: '' });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to create prognostic event.
    [actionsProductCredit.PERFORM_PROGNOSTIC_EVENT_CREATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to update prognostic event.
    [actionsProductCredit.PERFORM_PROGNOSTIC_EVENT_UPDATE]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: action.payload.event });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to prognostic event view.
    [actionsProductCredit.PERFORM_PROGNOSTIC_EVENT_DETAIL]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: action.payload.event });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to create forecast event.
    [actionsProductCredit.PERFORM_FORECAST_EVENT_CREATE]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain dispatched to update forecast event.
    [actionsProductCredit.PERFORM_FORECAST_EVENT_UPDATE]: (state, action) => {
        return Object.assign({}, state, { currentForecastEvent: action.payload.event });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Период" filter.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverPaymentSchedulePeriodFilter: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Период" filter.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterPeriodEnd: state.inputPaymentScheduleFilterPeriodEndApplied, inputPaymentScheduleFilterPeriodStart: state.inputPaymentScheduleFilterPeriodStartApplied, isVisiblePopoverPaymentSchedulePeriodFilter: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Период" filter.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverPaymentScheduleOperationTypeFilter: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Период" filter.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperCodeCred: state.inputPaymentScheduleFilterOperCodeCredApplied, inputPaymentScheduleFilterOperCodeProc: state.inputPaymentScheduleFilterOperCodeProcApplied, inputPaymentScheduleFilterOperCodeOther: state.inputPaymentScheduleFilterOperCodeOtherApplied, isVisiblePopoverPaymentScheduleOperationTypeFilter: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to hide popover with "Период" filter.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePopoverPaymentScheduleStatusFilter: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to show popover with "Период" filter.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusExecPay: state.inputPaymentScheduleFilterStatusExecPayApplied, inputPaymentScheduleFilterStatusForPay: state.inputPaymentScheduleFilterStatusForPayApplied, inputPaymentScheduleFilterStatusNotPay: state.inputPaymentScheduleFilterStatusNotPayApplied, isVisiblePopoverPaymentScheduleStatusFilter: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk chain used to switch between datepickers in "Пероид" filter popover.
    [actionsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER]: (state, action) => {
        return Object.assign({}, state, { isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperCodeOther: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperCodeProc: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperCodeCred: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Статус" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusNotPay: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Статус" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusExecPay: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Статус" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusForPay: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.CALL_GET_PAYMENT_SCHEDULE_LIST_REQUEST]: (state) => {
        return Object.assign({}, state, { paymentScheduleListFetching: true, paymentScheduleListError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.PERFORM_REFRESH_PAYMENT_SCHEDULE_EXECUTE]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleListFetching: true, paymentScheduleListError: null });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterPeriodStart: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterPeriodEnd: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START_APPLIED]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterPeriodStartApplied: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END_APPLIED]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterPeriodEndApplied: action.payload.value });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_SET_PAYMENT_SCHEDULE_LIST]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleList: action.payload.response.data });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_SET_PAYMENT_SCHEDULE_LIST_FILTERED]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleListFiltered: action.payload.response.data, inputPaymentScheduleFilterOperCodeCredOld: state.inputPaymentScheduleFilterOperCodeCredApplied, inputPaymentScheduleFilterOperCodeProcOld: state.inputPaymentScheduleFilterOperCodeProcApplied, inputPaymentScheduleFilterOperCodeOtherOld: state.inputPaymentScheduleFilterOperCodeOtherApplied, inputPaymentScheduleFilterPeriodEndOld: state.inputPaymentScheduleFilterPeriodEndApplied, inputPaymentScheduleFilterPeriodStartOld: state.inputPaymentScheduleFilterPeriodStartApplied, inputPaymentScheduleFilterStatusExecPayOld: state.inputPaymentScheduleFilterStatusExecPayApplied, inputPaymentScheduleFilterStatusForPayOld: state.inputPaymentScheduleFilterStatusForPayApplied, inputPaymentScheduleFilterStatusNotPayOld: state.inputPaymentScheduleFilterStatusNotPayApplied });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.CALL_GET_PAYMENT_SCHEDULE_LIST_SUCCESS]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleListCachedDate: action.payload.response.cachedDate, paymentScheduleListFetching: false, paymentScheduleListLoadMoreFetching: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.CALL_GET_PAYMENT_SCHEDULE_LIST_FAILURE]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleListError: action.payload.error, paymentScheduleListFetching: false, paymentScheduleListLoadMoreFetching: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.CALL_GET_PAYMENT_SCHEDULE_LIST_RESET]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleList: { data: [] } });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to reset filter period.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterPeriodStart: action.payload.valueDateStart, inputPaymentScheduleFilterPeriodEnd: action.payload.valueDateEnd });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisiblePaymentScheduleRefreshModalAlert: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched to fetch mode.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_REFRESH_ALERT_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisiblePaymentScheduleRefreshModalAlert: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_DEFAULT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperCodeOther: action.payload.operationTypeOps.indexOf('other') > -1, inputPaymentScheduleFilterOperCodeProc: action.payload.operationTypeOps.indexOf('proc') > -1, inputPaymentScheduleFilterOperCodeCred: action.payload.operationTypeOps.indexOf('cred') > -1, inputPaymentScheduleFilterOperCodeOtherApplied: action.payload.operationTypeOps.indexOf('other') > -1, inputPaymentScheduleFilterOperCodeProcApplied: action.payload.operationTypeOps.indexOf('proc') > -1, inputPaymentScheduleFilterOperCodeCredApplied: action.payload.operationTypeOps.indexOf('cred') > -1 });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_DEFAULT]: (state, action) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusNotPay: action.payload.operationStatusOps.indexOf('notPay') > -1, inputPaymentScheduleFilterStatusExecPay: action.payload.operationStatusOps.indexOf('execPay') > -1, inputPaymentScheduleFilterStatusForPay: action.payload.operationStatusOps.indexOf('forPay') > -1, inputPaymentScheduleFilterStatusNotPayApplied: action.payload.operationStatusOps.indexOf('notPay') > -1, inputPaymentScheduleFilterStatusExecPayApplied: action.payload.operationStatusOps.indexOf('execPay') > -1, inputPaymentScheduleFilterStatusForPayApplied: action.payload.operationStatusOps.indexOf('forPay') > -1 });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleAlternativeScenariosType: action.payload.paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosTitle: action.payload.paymentScheduleAlternativeScenariosTitle, paymentScheduleAlternativeScenariosMessage: action.payload.paymentScheduleAlternativeScenariosMessage, paymentScheduleAlertViewIsVisible: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE]: (state) => {
        return Object.assign({}, state, { paymentScheduleAlternativeScenariosType: null, paymentScheduleAlternativeScenariosTitle: null, paymentScheduleAlternativeScenariosMessage: null, paymentScheduleAlertViewIsVisible: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW]: (state, action) => {
        return Object.assign({}, state, { paymentScheduleAlternativeScenariosType: action.payload.paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosTitle: action.payload.paymentScheduleAlternativeScenariosTitle, paymentScheduleAlternativeScenariosMessage: action.payload.paymentScheduleAlternativeScenariosMessage, paymentScheduleErrorModalIsVisible: true });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE]: (state) => {
        return Object.assign({}, state, { paymentScheduleAlternativeScenariosType: null, paymentScheduleAlternativeScenariosTitle: null, paymentScheduleAlternativeScenariosMessage: null, paymentScheduleErrorModalIsVisible: false });
    },
    // Thunk dispatched by "ProductCredit" screen. Perform payment schedule list refresh.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH]: (state) => (Object.assign({}, state)),
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched after getting data.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_HANDLE_REPEAT]: (state) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on payment schedule load more.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_LOAD_MORE]: (state, action) => (Object.assign({}, state, { paymentScheduleListLoadMoreFetching: true })),
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SET_APPLIED]: (state) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterOperCodeCredApplied: state.inputPaymentScheduleFilterOperCodeCred, inputPaymentScheduleFilterOperCodeProcApplied: state.inputPaymentScheduleFilterOperCodeProc, inputPaymentScheduleFilterOperCodeOtherApplied: state.inputPaymentScheduleFilterOperCodeOther });
    },
    // Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user switch checkbox at "Тип операции" filter.
    [actionsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SET_APPLIED]: (state) => {
        return Object.assign({}, state, { inputPaymentScheduleFilterStatusExecPayApplied: state.inputPaymentScheduleFilterStatusExecPay, inputPaymentScheduleFilterStatusForPayApplied: state.inputPaymentScheduleFilterStatusForPay, inputPaymentScheduleFilterStatusNotPayApplied: state.inputPaymentScheduleFilterStatusNotPay });
    },
}, ModelsProductCredit.initialState.state);
export default reducerProductCredit;
//# sourceMappingURL=ReducerProductCredit.js.map