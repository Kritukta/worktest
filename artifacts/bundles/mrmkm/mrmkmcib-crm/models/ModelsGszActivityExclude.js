/**
 * Models for GszActivityExclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
const defaultState = {
    get state() {
        return {
            inputSearch: '',
            customerSearchError: '',
            isSearchError: false,
            customerSearchListError: null,
            customerSearchListCachedDate: null,
            customerSearchList: defaultValues.CustomerList,
            inputSearchManagedOnly: false,
            inputCustomer: defaultValues.Customer,
            inputComment: 'Прошу исключить организацию из состава ГСЗ',
            operationUuid: '',
            gszActivityExcludeValidationComment: null,
            gszActivityExcludeValidationCustomer: null,
            activitySave: defaultValues.boolean,
            activitySaveInProgress: false,
            activitySaveError: null,
            activityExcludeCreate: defaultValues.boolean,
            activityExcludeCreateFetching: false,
            activityExcludeCreateError: null,
            activityExcludeCreateCachedDate: null,
            isVisibleModalActivityError: false,
            searchError: null,
            searchInProgress: false,
            customerSearchListFetching: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsGszActivityExclude.js.map