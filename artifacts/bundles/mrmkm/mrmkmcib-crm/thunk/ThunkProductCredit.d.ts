import { Enums } from '../Enums';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import * as ModelState from "../models/Models";
import Response from "../models/Response";
export declare const performForecastEventsListFlush: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performChangeTab: (index: number, value: Enums.ProductCreditTab) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToPaymentScheduleScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateProductCreditBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched on user navigate back to deal screen.
 */
export declare const navigateProductCreditDealBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverForecastEventShow: (forecastEvent: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCancelEditForecastEvent: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSaveEditForecastEvent: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performForecastEventDelete: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performResetForecastEventEditForm: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performOpenForecastEventDetails: (forecastEvent: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performClearCurrentForecastEvent: () => (dispatch: Function) => void;
export declare const navigateToForecastEventDetails: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventEditForm: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverForecastEventHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventTypPickerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventFilterTypePickerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventFilterPeriodScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventType: (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventDate: (value: Date) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventPossibilityPickerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventPossibility: (value: number) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventCurrencyPickerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventCurrency: (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventSum: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFullRepayment: (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventEmail: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputForecastEventComment: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performForecastEventSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPostForecastEventGrantingCreate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callPostForecastEventRepaymentCreate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverFilterShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverFilterHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterForecastEventType: (value: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToPeriodTypeCustomScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterPeriodType: (value: Enums.ForecastPeriodType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterPeriodStart: (value: Date) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterPeriodEnd: (value: Date) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterApply: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterCustomDateApply: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterCreateEventPopupReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCustomerScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCallGetProductCovenantListCacheReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFillDefaultValuesAndShowCreateEventPopup: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterEventTypeReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterPeriodReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputCreatePopupEventValidation: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const forecastEventListFilter: (forecastEventList: Models.ForecastEventList) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performContainerReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshForecast: (isCacheEnable?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshForecastFailure: () => (dispatch: Function) => void;
export declare const performChangeVisiblePopoverCovenantStatusFilter: (status: boolean) => (dispatch: Function) => void;
export declare const performChangeVisiblePopoverCovenantPeriodFilter: (status: boolean) => (dispatch: Function) => void;
export declare const performChangeCovenantDateFilterValue: (value: Date) => (dispatch: Function) => void;
export declare const performChangeCheckStatusCreditCovenantPeriodFilterValueList: (filterValue: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export declare const performShowModalForecastEventGetListError: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 */
export declare const performHideModalForecastEventGetListError: () => (dispatch: Function) => void;
export declare const performHideModalForecastEventSaveError: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performChangeCheckStatusCreditCovenantStatusFilterValueList: (filterValue: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performApplyCovenantPeriodFilter: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performApplyCovenantStatusFilter: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCovenantListPage: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterCovenantList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCallGetCovenantList: (contractNumber: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetForecastEventList: (cachePolicy?: Enums.CachePolicy) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performShowModalForecastEventSaveError: () => (dispatch: Function) => void;
export declare const performPrognosticEventCreate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToPrognosticEventCreate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPrognosticEventUpdate: (event: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToPrognosticEventUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPrognosticEventDetail: (event: Models.ForecastEvent) => (dispatch: Function) => void;
export declare const navigateToPrognosticEventDetail: () => (dispatch: Function) => void;
export declare const performForecastEventCreate: () => (dispatch: Function) => void;
export declare const navigateToForecastEventCreate: () => (dispatch: Function) => void;
export declare const performForecastEventUpdate: (event: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToForecastEventUpdate: () => (dispatch: Function) => void;
export declare const performinputPaymentScheduleFilterOperCodeCred: (value: boolean) => (dispatch: Function) => void;
export declare const performinputPaymentScheduleFilterOperCodeProc: (value: boolean) => (dispatch: Function) => void;
export declare const performinputPaymentScheduleFilterOperCodeOther: (value: boolean) => (dispatch: Function) => void;
export declare const performinputPaymentScheduleFilterStatusExecPay: (value: boolean) => (dispatch: Function) => void;
export declare const performinputPaymentScheduleFilterStatusForPay: (value: boolean) => (dispatch: Function) => void;
export declare const performinputPaymentScheduleFilterStatusNotPay: (value: boolean) => (dispatch: Function) => void;
export declare const performInputPaymentScheduleFilterPeriodEnd: (value: Date) => (dispatch: Function) => void;
export declare const performPopoverPaymentSchedulePeriodSwitchDatePicker: (value: boolean) => (dispatch: Function) => void;
export declare const performInputPaymentScheduleFilterPeriodStart: (value: Date) => (dispatch: Function) => void;
export declare const performInputPaymentScheduleFilterPeriodStartApplied: (value: Date) => (dispatch: Function) => void;
export declare const performInputPaymentScheduleFilterPeriodEndApplied: (value: Date) => (dispatch: Function) => void;
export declare const performPopoverPaymentSchedulePeriodFilterHide: () => (dispatch: Function) => void;
export declare const performPopoverPaymentSchedulePeriodFilterShow: () => (dispatch: Function) => void;
export declare const performPopoverPaymentScheduleOperationTypeFilterHide: () => (dispatch: Function) => void;
export declare const performPopoverPaymentScheduleOperationTypeFilterShow: () => (dispatch: Function) => void;
export declare const performPopoverPaymentScheduleStatusFilterHide: () => (dispatch: Function) => void;
export declare const performPopoverPaymentScheduleStatusFilterShow: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" screen. Thunk dispatched to get forecast events.
 * @param { boolean } isInitial - flag state loading data
 * @param { Enums.CachePolicy } cachePolicy
 */
export declare const callGetPaymentScheduleList: (isInitial?: boolean, cachePolicy?: Enums.CachePolicy, isCacheEnable?: boolean, isLoadMore?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 *
 */
export declare const callGetPaymentScheduleListSuccess: (response: Response<Models.PaymentScheduleList>, isLoadMore: boolean, isInitial: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 *
 */
export declare const performSetPaymentScheduleList: (response: Response<Models.PaymentScheduleList>) => (dispatch: Function) => void;
/**
 *
 */
export declare const performSetPaymentScheduleListFiltered: (response: Response<Models.PaymentScheduleList>) => (dispatch: Function) => void;
export declare const performPaymentScheduleListFlush: () => (dispatch: Function) => void;
export declare const performPaymentScheduleFilterPeriodSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * /**
 * Thunk dispatched by "ProductCredit" container. Reset Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleFilterPeriodReset: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleFilterPeriodSetDefault: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Set date in filter period
 */
export declare const performPaymentScheduleFilterPeriodSet: (dateStart: Date, dateEnd: Date) => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Set date in filter period applied
 */
export declare const performPaymentScheduleFilterPeriodSetApplied: (dateStart: Date, dateEnd: Date) => (dispatch: Function) => void;
/**
 *
 */
export declare const performPaymentScheduleFilterOperationTypeSetApplied: () => (dispatch: Function) => void;
/**
 *
 */
export declare const performPaymentScheduleFilterStatusSetApplied: () => (dispatch: Function) => void;
export declare const performPaymentScheduleFilterOperationTypeSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPaymentScheduleFilterOperationTypeSetDefault: (operationTypesOps: string[]) => (dispatch: Function) => void;
export declare const performPaymentScheduleFilterOperationTypeReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleFilterStatusSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPaymentScheduleFilterStatusSetDefault: (operationStatusOps: string[]) => (dispatch: Function) => void;
export declare const performPaymentScheduleFilterStatusReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Обработчик функционала ГП "загрузить еще"
 */
export declare const performPaymentScheduleLoadMore: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Альтернативный сценарий "Запрошенный период слишком большой"
 * @param { Date } dateStart
 * @param { Date } dateEnd
 * @param { Date | null } dateStartDefault
 * @param { Date | null } dateEndDefault
 * @return void
 */
export declare const alternativeScenariosHandlerRequestedPeriodTooLarge: (dateStart: Date, dateEnd: Date, dateStartDefault: Date, dateEndDefault: Date) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleAlertShow: (paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage: string, paymentScheduleAlternativeScenariosTitle?: string) => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleAlertHide: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Handler alertView ok
 */
export declare const performPaymentScheduleAlertViewHandleOk: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Handler alertView ok
 */
export declare const performPaymentScheduleAlertViewHandleCancel: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleErrorShow: (paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType, paymentScheduleAlternativeScenariosMessage: string, paymentScheduleAlternativeScenariosTitle?: string) => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Remove forecast events from cache and execute performRefreshForecast
 */
export declare const performPaymentScheduleErrorHide: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Perform payment schedule list refresh.
 */
export declare const performPaymentScheduleListRefresh: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ProductCredit" container. Handler alertView ok
 */
export declare const performPaymentScheduleErrorViewHandleRepeat: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerOpen: (customer: Models.Customer) => (dispatch: Function) => void;
