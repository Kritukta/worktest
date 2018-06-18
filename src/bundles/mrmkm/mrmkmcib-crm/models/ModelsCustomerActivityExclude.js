/**
 * Models for CustomerActivityExclude container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
const defaultState = {
    get state() {
        return {
            inputSearch: '',
            customerSearchList: defaultValues.CustomerList,
            inputSearchManagedOnly: false,
            inputCustomer: defaultValues.Customer,
            inputComment: 'Прошу включить организацию в Холдинг',
            operationUuid: '',
            customerActivityExcludeValidationComment: null,
            customerActivityExcludeValidationCustomer: null,
            inputCustomerFetching: false,
            inputCustomerError: null,
            inputCustomerCachedDate: null,
            activitySave: defaultValues.boolean,
            activitySaveInProgress: false,
            activitySaveError: null,
            activityExcludeCreate: defaultValues.boolean,
            activityExcludeCreateFetching: false,
            activityExcludeCreateError: null,
            activityExcludeCreateCachedDate: null,
            customerSearchListFetching: false,
            customerSearchListError: null,
            customerSearchListCachedDate: null,
            isSearchError: false,
            customerSearchError: '',
            searchError: null,
            isVisibleErrorModalWindow: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsCustomerActivityExclude.js.map