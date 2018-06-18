import { Enums } from '../Enums';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import * as ModelState from "../models/Models";
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const navigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const navigateBackToProductCredit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const navigateToForecastTypeSelection: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const navigateToForecastCurrencySelection: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const performForecastEventFormCancel: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to init form.
 */
export declare const performForecastEventFormInit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to load form.
 */
export declare const performForecastEventFormLoad: (event: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to reset form.
 */
export declare const performForecastEventFormReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to reset currency input.
 */
export declare const performForecastEventFormCurrencyReset: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {string} comment.
 */
export declare const performForecastEventFormUpdateComment: (comment: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {ModelsApp.Classifier} currency.
 */
export declare const performForecastEventFormUpdateCurrency: (currency: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {Date} date.
 */
export declare const performForecastEventFormUpdateDate: (date: Date) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {string} email.
 */
export declare const performForecastEventFormUpdateEmail: (email: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.  Thunk dispatched on change full repayment
 *
 * @param {boolean} isFullRepayment.
 */
export declare const performForecastEventFormUpdateFullRepayment: (isFullRepayment: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {number} possibility.
 */
export declare const performForecastEventFormUpdatePossibility: (possibility: number) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {string} sum.
 */
export declare const performForecastEventFormUpdateSum: (sum: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {ModelsApp.Classifier} type.
 */
export declare const performForecastEventFormUpdateType: (type: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to reset form.
 * Валидация полей формы создания прогнозного события
 * | Тип: Выдача | Тип: Погашение | Поле                           |
 * | ✅          | ✅             | Тип события                     |
 * | ❌          | ❌             | Дата события                    |
 * | ❌          | ❌             | Вероятность события             |
 * | ❌          | ❌             | Полное погашение                |
 * | ❌          | ❌             | Примечание при полном погашении |
 * | ❌          | ❌             | Валюта                          |
 * | ✅          | ✅             | Сумма                           |
 * | ✅          | ✅             | E-Mail                          |
 * | ❌          | ❌             | Примечания                      |
 */
export declare const performForecastEventFormValidate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performForecastEventSave: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "callPostForecastEventCreate"
 */
export declare const callPostForecastEventRepaymentCreate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "callPostForecastEventCreate"
 */
export declare const callPostForecastEventGrantingCreate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "callPostForecastEventUpdate"
 */
export declare const callPostForecastEventUpdate: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to delete forecast event.
 */
export declare const performForecastEventDelete: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "callPostForecastEventDelete"
 */
export declare const callPostForecastEventDelete: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to repeat to save forecast event.
 */
export declare const performForecastEventSaveRepeat: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const performModalForecastEventSaveErrorHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export declare const performModalForecastEventSaveErrorShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 */
export declare const performPopoverForecastEventDeleteHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 */
export declare const performPopoverForecastEventDeleteShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to show popover.
 */
export declare const performPopoverForecastEventFormPossibilitySelectionHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to show popover.
 */
export declare const performPopoverForecastEventFormPossibilitySelectionShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "ForecastEventEditor" screen. Set context mode for ForecastEventEditor screen.
 *
 * @param {Enums.ForecastEventEditorContextMode} contextMode.
 */
export declare const performForecastEventSetContextMode: (contextMode: Enums.ForecastEventEditorContextMode) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
