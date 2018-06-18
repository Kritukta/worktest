/**
 * Models for CustomerActivityInclude container.
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
            inputComment: 'Прошу включить организацию в Холдинг',
            operationUuid: '',
            customerActivityIncludeValidationComment: null,
            customerActivityIncludeValidationCustomer: null,
            search: defaultValues.boolean,
            searchInProgress: false,
            searchError: null,
            customerSearchListFetching: false,
            customerSearchListError: null,
            customerSearchListCachedDate: null,
            inputCustomerFetching: false,
            inputCustomerError: null,
            inputCustomerCachedDate: null,
            activitySave: defaultValues.boolean,
            activitySaveInProgress: false,
            activitySaveError: null,
            activityIncludeCreate: defaultValues.boolean,
            activityIncludeCreateFetching: false,
            activityIncludeCreateError: null,
            activityIncludeCreateCachedDate: null,
            isVisibleErrorModalWindow: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsCustomerActivityInclude.js.map