/**
 * Models for CustomerEditor container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in CustomerEditor actions and thunks.
const defaultState = {
    get state() {
        return {
            currentCustomerManaged: defaultValues.CustomerManaged,
            isVisibleModalCustomerEditor: false,
            currentEditorStep: Enums.CustomerEditorStep.Address,
            isEditorMode: false,
            operationUuid: '',
            inputCountry: defaultValues.Classifier,
            inputSubject: '',
            inputRegion: '',
            inputCity: '',
            inputSettlement: '',
            inputStreet: '',
            inputHouse: '',
            inputBuilding: '',
            inputBlock: '',
            inputFlat: '',
            customerEditorActivityCreateMode: Enums.CustomerEditorActivityCreateMode.None,
            customerSave: defaultValues.boolean,
            customerSaveInProgress: false,
            customerSaveError: null,
            customerModifierId: defaultValues.CustomerManaged,
            customerModifierIdFetching: false,
            customerModifierIdError: null,
            customerModifierIdCachedDate: null,
            customerUpdate: defaultValues.boolean,
            customerUpdateFetching: false,
            customerUpdateError: null,
            customerUpdateCachedDate: null,
            inputCountryValidationError: null,
            inputSubjectValidationError: null,
            inputRegionValidationError: null,
            inputCityValidationError: null,
            inputSettlementValidationError: null,
            inputStreetValidationError: null,
            inputHouseValidationError: null,
            inputBuildingValidationError: null,
            inputBlockValidationError: null,
            inputFlatValidationError: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsCustomerEditor.js.map