/**
 * Models for AppCRM container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            currentUser: defaultValues.Employee,
            classifierDictionary: defaultValues.ClassifierDictionary,
            currentPage: 0,
            customerManagedList: defaultValues.CustomerManagedList,
            inputFilterOrganizationStructure: Enums.FilterOrganizationStructure.None,
            inputFilterMemberRole: Enums.FilterMemberRole.None,
            disabledFilterOrganizationStructureList: defaultValues.FilterOrganizationStructureList,
            disabledFilterMemberRoleList: defaultValues.FilterMemberRoleList,
            isSearchMode: false,
            inputSearch: '',
            customerSearchType: Enums.CustomerSearchType.Name,
            customerSearchError: '',
            isSearchError: false,
            currentSearchPage: 0,
            customerSearchList: defaultValues.CustomerList,
            refresh: defaultValues.boolean,
            refreshInProgress: false,
            refreshError: null,
            customerManagedListFetching: false,
            customerManagedListError: null,
            customerManagedListCachedDate: null,
            append: defaultValues.boolean,
            appendInProgress: false,
            appendError: null,
            customerManagedListPage: defaultValues.CustomerManagedListPage,
            customerManagedListPageFetching: false,
            customerManagedListPageError: null,
            customerManagedListPageCachedDate: null,
            search: defaultValues.boolean,
            searchInProgress: false,
            searchError: null,
            customerSearchListFetching: false,
            customerSearchListError: null,
            customerSearchListCachedDate: null,
            searchAppend: defaultValues.boolean,
            searchAppendInProgress: false,
            searchAppendError: null,
            customerSearchListPage: defaultValues.CustomerListPage,
            customerSearchListPageFetching: false,
            customerSearchListPageError: null,
            customerSearchListPageCachedDate: null,
            currentExchangePerson: defaultValues.Person,
            isRefreshBarVisible: false,
            appBuildVersion: null,
            appServerUrl: null,
            appServerPath: null,
            navigationInProgress: false,
            // TODO Describe AppCRM reducer state.
            isVisibleModalAppCRMError: false,
            currentDeal: defaultValues.ForecastDeal,
            customerOpenInProgress: false,
            navigationErrorMessage: null,
            navigateStartData: defaultValues.NavigateToEntity,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsAppCRM.js.map