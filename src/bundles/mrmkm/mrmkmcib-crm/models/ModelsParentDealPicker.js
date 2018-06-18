/**
 * Models for ParentDealPicker container.
 *
 * @author Gladkov E.N.
 */
import { defaultValues } from './Models';
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            currentPage: 0,
            customerManagedList: defaultValues.CustomerManagedList,
            customerSearchType: Enums.CustomerSearchType.Name,
            customerSearchError: '',
            isCustomerListSearchError: false,
            currentSearchPage: 0,
            customerListRefreshInProgress: false,
            customerManagedListFetching: false,
            customerManagedListError: null,
            customerManagedListCachedDate: null,
            customerListAppendInProgress: false,
            customerManagedListPage: defaultValues.CustomerManagedListPage,
            customerManagedListPageFetching: false,
            customerManagedListPageError: null,
            customerManagedListPageCachedDate: null,
            customerSearchListFetching: false,
            searchAppendInProgress: false,
            customerSearchListPage: defaultValues.CustomerManagedListPage,
            customerSearchListPageFetching: false,
            customerSearchListPageError: null,
            customerSearchListPageCachedDate: null,
            isRefreshBarVisible: false,
            currentDeal: defaultValues.Deal,
            isParentDealCustomerSearchMode: false,
            isParentDealCustomerRefreshInProgress: false,
            isParentDealCustomerAppendInProgress: false,
            isParentDealCustomerSearchInProgress: false,
            isParentDealCustomerSearchAppendInProgress: false,
            parentDealCustomer: defaultValues.CustomerManaged,
            parentDealCustomerList: defaultValues.CustomerManagedList,
            parentDealCustomerSearchList: defaultValues.CustomerManagedList,
            parentDealCustomerInputSearch: '',
            isParentDealDealListRefreshInProgress: false,
            parentDealDealListFetchError: null,
            parentDealDealList: defaultValues.DealList,
            parentDealPickerMode: Enums.ParentDealPickerMode.Customer,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsParentDealPicker.js.map