/**
 * Models for ForecastEventEditor container.
 *
 */
import { defaultValues } from './Models';
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            contextMode: Enums.ForecastEventEditorContextMode.None,
            inputForecastEventComment: '',
            inputForecastEventCurrency: defaultValues.Classifier,
            inputForecastEventDate: new Date(),
            inputForecastEventEmail: '',
            inputForecastEventFullRepayment: false,
            inputForecastEventPossibility: 1,
            inputForecastEventSum: '',
            inputForecastEventType: null,
            inputValidationForecastEventComment: null,
            inputValidationForecastEventCurrency: null,
            inputValidationForecastEventEmail: null,
            inputValidationForecastEventPossibility: null,
            inputValidationForecastEventSum: null,
            inputValidationForecastEventType: null,
            isEditableMode: false,
            isValidForecastEventForm: false,
            isVisibleForecastEventDeletePopover: false,
            isVisibleForecastEventPossibilityPopover: false,
            isVisibleForecastEventModalSaveError: false,
            savingForecastEventError: null,
            savingForecastEventInProgress: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsForecastEventEditor.js.map