/**
 * Models for GszActivityInclude container.
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
            customerSearchList: defaultValues.CustomerList,
            inputSearchManagedOnly: false,
            inputCustomer: defaultValues.Customer,
            inputComment: 'Прошу включить организацию в состав ГСЗ',
            operationUuid: '',
            gszActivityIncludeValidationComment: null,
            gszActivityIncludeValidationCustomer: null,
            search: defaultValues.boolean,
            searchInProgress: false,
            searchError: null,
            customerSearchListFetching: false,
            customerSearchListError: null,
            customerSearchListCachedDate: null,
            activitySave: defaultValues.boolean,
            activitySaveInProgress: false,
            activitySaveError: null,
            activityIncludeCreate: defaultValues.boolean,
            activityIncludeCreateFetching: false,
            activityIncludeCreateError: null,
            activityIncludeCreateCachedDate: null,
            isVisibleModalActivityError: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsGszActivityInclude.js.map