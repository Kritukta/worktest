/**
 * Thunks of ForecastEventEditor container.
 */
import {SplitPanelActions} from 'ufs-mobile-platform'
import {Enums}  from '../Enums';
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import * as Cache from '../modules/Cache'
import * as Converters from "../models/Converters"
import * as ModelState from "../models/Models"
import * as ModelsForecastEventEditor from '../models/ModelsForecastEventEditor'
import * as actionsForecastEventEditor from '../actions/ActionsForecastEventEditor'
import * as thunkForecastEventEditor from '../thunk/ThunkForecastEventEditor'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as util from '../common/Util'
import Error from "../models/Error"
import Response from "../models/Response"

const FORECAST_EVENT_TYPE_GRANTING_CODE = 'ГАШЕНИЕ_K_T'
const FORECAST_EVENT_TYPE_REPAYMENT_CODE = 'ВЫДАЧА_K_Т'

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch (SplitPanelActions.popContent(
        util.getNavigationAppCRMForecastEventEditor(Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm)))

    dispatch(actionsForecastEventEditor.navigateBack())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const navigateBackToProductCredit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const contextMode = state.user.mrmkmcibCRM.reducerForecastEventEditor.contextMode

    switch(contextMode) {
        case Enums.ForecastEventEditorContextMode.PrognosticEventList:
        case Enums.ForecastEventEditorContextMode.PrognosticEventDetail:
            dispatch (SplitPanelActions.popContent(
                util.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct)))
            break
        case Enums.ForecastEventEditorContextMode.ForecastEventList:
        case Enums.ForecastEventEditorContextMode.ForecastEventDetail:
        default:
            dispatch (SplitPanelActions.popContent(
                util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)))
            break
    }

    dispatch(actionsForecastEventEditor.navigateBackToProductCredit())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const navigateToForecastTypeSelection = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorType,
        util.getNavigationAppCRMForecastEventEditor(Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm)
    ))

    dispatch(actionsForecastEventEditor.navigateToForecastTypeSelection())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const navigateToForecastCurrencySelection = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch (SplitPanelActions.pushContent(
        Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorCurrency,
        util.getNavigationAppCRMForecastEventEditor(Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm)
    ))

    dispatch(actionsForecastEventEditor.navigateToForecastCurrencySelection())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const performForecastEventFormCancel = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(thunkForecastEventEditor.navigateBackToProductCredit())
    dispatch(thunkForecastEventEditor.performForecastEventFormReset())

    dispatch(actionsForecastEventEditor.performForecastEventFormCancel())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to init form.
 */
export const performForecastEventFormInit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const currentEvent = state.user.mrmkmcibCRM.reducerProductCredit.currentForecastEvent
    const email = state.user.mrmkmcibCRM.reducerAppCRM.currentUser.email

    // Если редактируем ПС, подгружаем его атрибуты, в противном случаем загружаем значения по умолчанию
    if (currentEvent && currentEvent.email) {
        dispatch(thunkForecastEventEditor.performForecastEventFormLoad(currentEvent))
    } else {
        dispatch(actionsForecastEventEditor.performForecastEventFormInit(email))
    }
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to load form.
 */
export const performForecastEventFormLoad = (event: Models.ForecastEvent) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor
    const data: Models.IForecastEventEditorForm = {
        inputForecastEventComment: event.comment || reducerState.inputForecastEventComment,
        inputForecastEventCurrency: event.currency || reducerState.inputForecastEventCurrency,
        inputForecastEventDate: event.plannedEventDate || reducerState.inputForecastEventDate,
        inputForecastEventEmail: event.email || reducerState.inputForecastEventEmail,
        inputForecastEventPossibility: event.possibility || reducerState.inputForecastEventPossibility,
        inputForecastEventSum: '' + event.forecastSum || reducerState.inputForecastEventSum,
        inputForecastEventType: event.eventType || reducerState.inputForecastEventType,
    }

    dispatch(actionsForecastEventEditor.performForecastEventFormLoad(data))
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to reset form.
 */
export const performForecastEventFormReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormReset())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to reset currency input.
 */
export const performForecastEventFormCurrencyReset = () => (dispatch: Function): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormCurrencyReset())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {string} comment.
 */
export const performForecastEventFormUpdateComment = (comment: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateComment(comment))
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {ModelsApp.Classifier} currency.
 */
export const performForecastEventFormUpdateCurrency = (currency: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateCurrency(currency))
    dispatch(thunkForecastEventEditor.navigateBack())

}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {Date} date.
 */
export const performForecastEventFormUpdateDate = (date: Date) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateDate(date))
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {string} email.
 */
export const performForecastEventFormUpdateEmail = (email: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateEmail(email))
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.  Thunk dispatched on change full repayment
 *
 * @param {boolean} isFullRepayment.
 */
export const performForecastEventFormUpdateFullRepayment = (isFullRepayment: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateFullRepayment(isFullRepayment))
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {number} possibility.
 */
export const performForecastEventFormUpdatePossibility = (possibility: number) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdatePossibility(possibility))
    dispatch(thunkForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionHide())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {string} sum.
 */
export const performForecastEventFormUpdateSum = (sum: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateSum(sum))
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 * @param {ModelsApp.Classifier} type.
 */
export const performForecastEventFormUpdateType = (type: ModelsApp.Classifier) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor

    if (reducerState.inputForecastEventType && reducerState.inputForecastEventType.code === FORECAST_EVENT_TYPE_GRANTING_CODE) {
        dispatch(thunkForecastEventEditor.performForecastEventFormCurrencyReset())
    }

    dispatch(actionsForecastEventEditor.performForecastEventFormUpdateType(type))
    dispatch(thunkForecastEventEditor.navigateBack())
}

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
export const performForecastEventFormValidate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor
    const inputValidation: Models.IForecastEventEditorFormVadidate = {
        inputValidationForecastEventType: util.creditEventValidationType(reducerState.inputForecastEventType),
        inputValidationForecastEventPossibility: null, // always OK, т.к. предзаполнение
        inputValidationForecastEventCurrency: null, // always OK, т.к. предзаполнение
        inputValidationForecastEventSum: util.creditEventValidationSumm(reducerState.inputForecastEventSum),
        inputValidationForecastEventEmail: util.creditEventValidationEmail(reducerState.inputForecastEventEmail),
        isValidForecastEventForm: false,
    }

    if (reducerState.inputForecastEventFullRepayment) {
        inputValidation.inputValidationForecastEventSum = null
    }

    if (!(reducerState.inputValidationForecastEventComment ||
        reducerState.inputValidationForecastEventCurrency ||
        reducerState.inputValidationForecastEventEmail ||
        reducerState.inputValidationForecastEventPossibility ||
        reducerState.inputValidationForecastEventSum ||
        reducerState.inputValidationForecastEventType)) {
            inputValidation.isValidForecastEventForm = true
        }

    dispatch(actionsForecastEventEditor.performForecastEventFormValidate(inputValidation))
}

/*
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to save forecast event.
 */
export const performForecastEventSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(thunkForecastEventEditor.performForecastEventFormValidate())

    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor

    if (reducerState.isValidForecastEventForm) {

            dispatch(actionsForecastEventEditor.performForecastEventSave())

            if (!reducerState.isEditableMode) {
                // Создание ПС
                switch (reducerState.inputForecastEventType && reducerState.inputForecastEventType.code) {
                    case FORECAST_EVENT_TYPE_GRANTING_CODE:
                        dispatch(thunkForecastEventEditor.callPostForecastEventRepaymentCreate())
                        break

                    case FORECAST_EVENT_TYPE_REPAYMENT_CODE:
                        dispatch(thunkForecastEventEditor.callPostForecastEventGrantingCreate())
                        break

                    default:
                        break
                }
            } else {
                // Изменение ПС
                dispatch(thunkForecastEventEditor.callPostForecastEventUpdate())
            }

    }
}

/**
 * Thunk dispatched by "callPostForecastEventCreate"
 */
export const callPostForecastEventRepaymentCreate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor

    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId

    if (!forecastDealId) {
        return
    }

    dispatch(actionsForecastEventEditor.callPostForecastEventCreate())

    if (!reducerState.savingForecastEventInProgress) {

        dispatch(actionsForecastEventEditor.callPostForecastEventCreateRequest())

        util.call<boolean, Models.ForecastEventRepaymentCreateRequest>(
            util.urlProductCredit.callPostForecastEventRepaymentCreate(state, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                dispatch(actionsForecastEventEditor.callPostForecastEventCreateSuccess())
                dispatch(actionsForecastEventEditor.performForecastEventFormReset())
                dispatch(thunkProductCredit.callGetForecastEventList(Enums.CachePolicy.Disabled))
                dispatch(thunkForecastEventEditor.navigateBackToProductCredit())
            },

            (error: Error) => {
                const err = {...error}
                err.message = util.getForecastEventErrorMessage(error, Enums.ForecastEventErrorType.CreateError)

                dispatch(actionsForecastEventEditor.callPostForecastEventUpdateFailure(err))
                dispatch(actionsForecastEventEditor.performModalForecastEventSaveErrorShow())
            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_REPAYMENT_FROM_FORECAST_EVENT_REQUEST,

            {
                forecastDealId,
                earlyPayDate: reducerState.inputForecastEventDate,
                isAllPay: false, // в требованиях убрали пункт полного гашения
                currency: reducerState.inputForecastEventCurrency,
                forecastSum: reducerState.inputForecastEventSum,
                possibility: reducerState.inputForecastEventPossibility,
                customer: currentUser,
                email: reducerState.inputForecastEventEmail,
                comment: reducerState.inputForecastEventComment
            }
        )
    }
}

/**
 * Thunk dispatched by "callPostForecastEventCreate"
 */
export const callPostForecastEventGrantingCreate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor

    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId

    if (!forecastDealId) {
        return
    }

    dispatch(actionsForecastEventEditor.callPostForecastEventCreate())

    if (!reducerState.savingForecastEventInProgress) {

        dispatch(actionsForecastEventEditor.callPostForecastEventCreateRequest())


        util.call<boolean, Models.ForecastEventGrantingCreateRequest>(
            util.urlProductCredit.callPostForecastEventGrantingCreate(state, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                dispatch(actionsForecastEventEditor.callPostForecastEventCreateSuccess())
                dispatch(actionsForecastEventEditor.performForecastEventFormReset())
                dispatch(thunkProductCredit.callGetForecastEventList(Enums.CachePolicy.Disabled))
                dispatch(thunkForecastEventEditor.navigateBackToProductCredit())

            },

            (error: Error) => {
                const err = {...error}
                err.message = util.getForecastEventErrorMessage(error, Enums.ForecastEventErrorType.CreateError)

                dispatch(actionsForecastEventEditor.callPostForecastEventUpdateFailure(err))
                dispatch(actionsForecastEventEditor.performModalForecastEventSaveErrorShow())

            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_GRANTING_FROM_FORECAST_EVENT_REQUEST,

            {
                forecastDealId,
                plannedEventDate: reducerState.inputForecastEventDate,
                eventType: reducerState.inputForecastEventType,
                currency: reducerState.inputForecastEventCurrency,
                forecastSum: reducerState.inputForecastEventSum,
                possibility: reducerState.inputForecastEventPossibility,
                comment: reducerState.inputForecastEventComment,
                customer: currentUser,
                email: reducerState.inputForecastEventEmail
            }
        )
    }
}

/**
 * Thunk dispatched by "callPostForecastEventUpdate"
 */
export const callPostForecastEventUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor

    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct
    const currentEvent = state.user.mrmkmcibCRM.reducerProductCredit.currentForecastEvent
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId

    if (!forecastDealId) {
        return
    }

    dispatch(actionsForecastEventEditor.callPostForecastEventUpdate())

    if (reducerState.savingForecastEventInProgress) {

        dispatch(actionsForecastEventEditor.callPostForecastEventUpdateRequest())

        util.call<boolean, Models.ForecastEventUpdateRequest>(
            util.urlProductCredit.callPostForecastEventUpdate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                dispatch(actionsForecastEventEditor.callPostForecastEventUpdateSuccess())
                dispatch(actionsForecastEventEditor.performForecastEventFormReset())
                dispatch(thunkProductCredit.callGetForecastEventList(Enums.CachePolicy.Disabled))
                dispatch(thunkForecastEventEditor.navigateBackToProductCredit())

            },

            (error: Error) => {
                const err = {...error}
                err.message = util.getForecastEventErrorMessage(error, Enums.ForecastEventErrorType.UpdateError)

                dispatch(actionsForecastEventEditor.callPostForecastEventUpdateFailure(err))
                dispatch(actionsForecastEventEditor.performModalForecastEventSaveErrorShow())

            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_UPDATE_FROM_FORECAST_EVENT_REQUEST,

            {
                comment: reducerState.inputForecastEventComment,
                currency: reducerState.inputForecastEventCurrency,
                customer: currentUser,
                email: reducerState.inputForecastEventEmail,
                eventId: currentEvent.id,
                eventType: reducerState.inputForecastEventType,
                forecastDealId,
                forecastSum: reducerState.inputForecastEventSum,
                plannedEventDate: reducerState.inputForecastEventDate,
                possibility: reducerState.inputForecastEventPossibility
            }
        )
    }
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to delete forecast event.
 */
export const performForecastEventDelete = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(thunkForecastEventEditor.performPopoverForecastEventDeleteHide())
    dispatch(thunkForecastEventEditor.callPostForecastEventDelete())
    dispatch(actionsForecastEventEditor.performForecastEventDelete())
}

/**
 * Thunk dispatched by "callPostForecastEventDelete"
 */
export const callPostForecastEventDelete = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerForecastEventEditor

    const currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser
    const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct
    const currentEvent = state.user.mrmkmcibCRM.reducerProductCredit.currentForecastEvent
    const forecastDealId = currentCreditProduct && currentCreditProduct.forecastDealId

    if (!forecastDealId) {
        return
    }

    dispatch(actionsForecastEventEditor.callPostForecastEventDelete())

    if (reducerState.savingForecastEventInProgress) {

        dispatch(actionsForecastEventEditor.callPostForecastEventDeleteRequest())

        // одинаковая сигнатура вызова для удаления и изменения ПС
        util.call<boolean, Models.ForecastEventUpdateRequest>(
            util.urlProductCredit.callPostForecastEventDelete(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                dispatch(actionsForecastEventEditor.callPostForecastEventDeleteSuccess())
                dispatch(actionsForecastEventEditor.performForecastEventFormReset())
                dispatch(thunkProductCredit.callGetForecastEventList(Enums.CachePolicy.Disabled))
                dispatch(thunkForecastEventEditor.navigateBackToProductCredit())

            },

            (error: Error) => {
                const err = {...error}
                err.message = util.getForecastEventErrorMessage(error, Enums.ForecastEventErrorType.DeleteError)

                dispatch(actionsForecastEventEditor.callPostForecastEventUpdateFailure(err))
                dispatch(actionsForecastEventEditor.performModalForecastEventSaveErrorShow())

            },

            Converters.RESPONSE_CUSTOMER_ACTIVITY_EXCLUDE_CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_TO_BOOLEAN,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.RESPONSE_CREDIT_CALL_POST_FORECAST_EVENT_DELETE_FROM_FORECAST_EVENT_REQUEST,

            {
                comment: reducerState.inputForecastEventComment,
                currency: reducerState.inputForecastEventCurrency,
                customer: currentUser,
                email: reducerState.inputForecastEventEmail,
                eventId: currentEvent.id,
                eventType: reducerState.inputForecastEventType,
                forecastDealId,
                forecastSum: reducerState.inputForecastEventSum,
                plannedEventDate: reducerState.inputForecastEventDate,
                possibility: reducerState.inputForecastEventPossibility
            }
        )
    }
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to repeat to save forecast event.
 */
export const performForecastEventSaveRepeat = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(thunkForecastEventEditor.performModalForecastEventSaveErrorHide())
    dispatch(thunkForecastEventEditor.performForecastEventSave())
}


/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const performModalForecastEventSaveErrorHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performModalForecastEventSaveErrorHide())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 */
export const performModalForecastEventSaveErrorShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performModalForecastEventSaveErrorShow())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 */
export const performPopoverForecastEventDeleteHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performPopoverForecastEventDeleteHide())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen.
 *
 */
export const performPopoverForecastEventDeleteShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performPopoverForecastEventDeleteShow())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to show popover.
 */
export const performPopoverForecastEventFormPossibilitySelectionHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionHide())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Thunk chain used to show popover.
 */
export const performPopoverForecastEventFormPossibilitySelectionShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performPopoverForecastEventFormPossibilitySelectionShow())
}

/**
 * Thunk dispatched by "ForecastEventEditor" screen. Set context mode for ForecastEventEditor screen.
 *
 * @param {Enums.ForecastEventEditorContextMode} contextMode.
 */
export const performForecastEventSetContextMode = (contextMode: Enums.ForecastEventEditorContextMode) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsForecastEventEditor.performForecastEventSetContextMode(contextMode))
}
