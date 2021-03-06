export const CALL_POST_FORECAST_EVENT_CREATE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE';
export const CALL_POST_FORECAST_EVENT_CREATE_FAILURE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_FAILURE';
export const CALL_POST_FORECAST_EVENT_CREATE_REQUEST = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_REQUEST';
export const CALL_POST_FORECAST_EVENT_CREATE_SUCCESS = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_CREATE_SUCCESS';
export const CALL_POST_FORECAST_EVENT_UPDATE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE';
export const CALL_POST_FORECAST_EVENT_UPDATE_FAILURE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_FAILURE';
export const CALL_POST_FORECAST_EVENT_UPDATE_REQUEST = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_REQUEST';
export const CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS';
export const CALL_POST_FORECAST_EVENT_DELETE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE';
export const CALL_POST_FORECAST_EVENT_DELETE_FAILURE = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_FAILURE';
export const CALL_POST_FORECAST_EVENT_DELETE_REQUEST = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_REQUEST';
export const CALL_POST_FORECAST_EVENT_DELETE_SUCCESS = 'FORECAST_EVENT_EDITOR_CONTAINER_CALL_POST_FORECAST_EVENT_DELETE_SUCCESS';
export const NAVIGATE_BACK = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_BACK';
export const NAVIGATE_BACK_TO_PRODUCT_CREDIT = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_BACK_TO_PRODUCT_CREDIT';
export const NAVIGATE_TO_FORECAST_CURRENCY_SELECTION = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_TO_FORECAST_CURRENCY_SELECTION';
export const NAVIGATE_TO_FORECAST_TYPE_SELECTION = 'FORECAST_EVENT_EDITOR_CONTAINER_NAVIGATE_TO_FORECAST_TYPE_SELECTION';
export const PERFORM_FORECAST_EVENT_DELETE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_DELETE';
export const PERFORM_FORECAST_EVENT_FORM_CANCEL = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_CANCEL';
export const PERFORM_FORECAST_EVENT_FORM_INIT = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_INIT';
export const PERFORM_FORECAST_EVENT_FORM_LOAD = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_LOAD';
export const PERFORM_FORECAST_EVENT_FORM_RESET = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_RESET';
export const PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE_POPOVER = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE_POPOVER';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM';
export const PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE';
export const PERFORM_FORECAST_EVENT_FORM_VALIDATE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_FORM_VALIDATE';
export const PERFORM_FORECAST_EVENT_SAVE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_SAVE';
export const PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE';
export const PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW';
export const PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE';
export const PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW';
export const PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE';
export const PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW';
export const PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE = 'FORECAST_EVENT_EDITOR_CONTAINER_PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE';
export const callPostForecastEventCreate = () => ({
    type: CALL_POST_FORECAST_EVENT_CREATE,
    payload: {}
});
export const callPostForecastEventCreateRequest = () => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_REQUEST,
    payload: {}
});
export const callPostForecastEventCreateSuccess = () => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_SUCCESS,
    payload: {}
});
export const callPostForecastEventCreateFailure = (error) => ({
    type: CALL_POST_FORECAST_EVENT_CREATE_FAILURE,
    payload: {
        error
    }
});
export const callPostForecastEventUpdate = () => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE,
    payload: {}
});
export const callPostForecastEventUpdateRequest = () => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE_REQUEST,
    payload: {}
});
export const callPostForecastEventUpdateSuccess = () => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE_SUCCESS,
    payload: {}
});
export const callPostForecastEventUpdateFailure = (error) => ({
    type: CALL_POST_FORECAST_EVENT_UPDATE_FAILURE,
    payload: {
        error
    }
});
export const callPostForecastEventDelete = () => ({
    type: CALL_POST_FORECAST_EVENT_DELETE,
    payload: {}
});
export const callPostForecastEventDeleteRequest = () => ({
    type: CALL_POST_FORECAST_EVENT_DELETE_REQUEST,
    payload: {}
});
export const callPostForecastEventDeleteSuccess = () => ({
    type: CALL_POST_FORECAST_EVENT_DELETE_SUCCESS,
    payload: {}
});
export const callPostForecastEventDeleteFailure = (error) => ({
    type: CALL_POST_FORECAST_EVENT_DELETE_FAILURE,
    payload: {
        error
    }
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
export const navigateBackToProductCredit = () => ({
    type: NAVIGATE_BACK_TO_PRODUCT_CREDIT,
    payload: {}
});
export const navigateToForecastTypeSelection = () => ({
    type: NAVIGATE_TO_FORECAST_TYPE_SELECTION,
    payload: {}
});
export const navigateToForecastCurrencySelection = () => ({
    type: NAVIGATE_TO_FORECAST_CURRENCY_SELECTION,
    payload: {}
});
export const performForecastEventDelete = () => ({
    type: PERFORM_FORECAST_EVENT_DELETE,
    payload: {}
});
export const performForecastEventFormCancel = () => ({
    type: PERFORM_FORECAST_EVENT_FORM_CANCEL,
    payload: {}
});
export const performForecastEventFormInit = (email) => ({
    type: PERFORM_FORECAST_EVENT_FORM_INIT,
    payload: {
        email
    }
});
export const performForecastEventFormLoad = (data) => ({
    type: PERFORM_FORECAST_EVENT_FORM_LOAD,
    payload: {
        data
    }
});
export const performForecastEventFormReset = () => ({
    type: PERFORM_FORECAST_EVENT_FORM_RESET,
    payload: {}
});
export const performForecastEventFormCurrencyReset = () => ({
    type: PERFORM_FORECAST_EVENT_FORM_CURRENCY_RESET,
    payload: {}
});
export const performForecastEventFormUpdateComment = (comment) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT,
    payload: {
        comment
    }
});
export const performForecastEventFormUpdateCurrency = (currency) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY,
    payload: {
        currency
    }
});
export const performForecastEventFormUpdateDate = (date) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE,
    payload: {
        date
    }
});
export const performForecastEventFormUpdateEmail = (email) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL,
    payload: {
        email
    }
});
export const performForecastEventFormUpdateFullRepayment = (isFullRepayment) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT,
    payload: {
        isFullRepayment
    }
});
export const performForecastEventFormUpdatePossibility = (possibility) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY,
    payload: {
        possibility
    }
});
export const performForecastEventFormUpdateSum = (sum) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM,
    payload: {
        sum
    }
});
export const performForecastEventFormUpdateType = (type) => ({
    type: PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE,
    payload: {
        type
    }
});
export const performForecastEventFormValidate = (inputValidation) => ({
    type: PERFORM_FORECAST_EVENT_FORM_VALIDATE,
    payload: {
        inputValidation
    }
});
export const performForecastEventSave = () => ({
    type: PERFORM_FORECAST_EVENT_SAVE,
    payload: {}
});
export const performModalForecastEventSaveErrorHide = () => ({
    type: PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE,
    payload: {}
});
export const performModalForecastEventSaveErrorShow = () => ({
    type: PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW,
    payload: {}
});
export const performPopoverForecastEventDeleteHide = () => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE,
    payload: {}
});
export const performPopoverForecastEventDeleteShow = () => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW,
    payload: {}
});
export const performPopoverForecastEventFormPossibilitySelectionHide = () => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE,
    payload: {}
});
export const performPopoverForecastEventFormPossibilitySelectionShow = () => ({
    type: PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW,
    payload: {}
});
export const performForecastEventSetContextMode = (contextMode) => ({
    type: PERFORM_FORECAST_EVENT_SET_CONTEXT_MODE,
    payload: {
        contextMode
    }
});
//# sourceMappingURL=ActionsForecastEventEditor.js.map