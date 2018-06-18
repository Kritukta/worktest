/**
 * Models for ParentDealPicker container.
 *
 * @author Gladkov E.N.
 */
import { Models } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
import Error from '../models/Error';
export interface IParentDealPickerState {
    currentPage: number;
    customerManagedList: Models.CustomerManagedList;
    customerSearchType: Enums.CustomerSearchType;
    customerSearchError: string;
    isCustomerListSearchError: boolean;
    currentSearchPage: number;
    customerListRefreshInProgress: boolean;
    customerManagedListFetching: boolean;
    customerManagedListError: Error | null;
    customerManagedListCachedDate: Date | null;
    customerListAppendInProgress: boolean;
    customerManagedListPage: Models.CustomerManagedListPage;
    customerManagedListPageFetching: boolean;
    customerManagedListPageError: Error | null;
    customerManagedListPageCachedDate: Date | null;
    customerSearchListFetching: boolean;
    searchAppendInProgress: boolean;
    customerSearchListPage: Models.CustomerManagedListPage;
    customerSearchListPageFetching: boolean;
    customerSearchListPageError: Error | null;
    customerSearchListPageCachedDate: Date | null;
    isRefreshBarVisible: boolean;
    currentDeal: Models.Deal;
    isParentDealCustomerSearchMode: boolean;
    isParentDealCustomerRefreshInProgress: boolean;
    isParentDealCustomerAppendInProgress: boolean;
    isParentDealCustomerSearchInProgress: boolean;
    isParentDealCustomerSearchAppendInProgress: boolean;
    parentDealCustomer: Models.CustomerManaged;
    parentDealCustomerList: Models.CustomerManagedList;
    parentDealCustomerSearchList: Models.CustomerManagedList;
    parentDealCustomerInputSearch: string;
    isParentDealDealListRefreshInProgress: boolean;
    parentDealDealListFetchError: Error | null;
    parentDealDealList: Models.DealList;
    parentDealPickerMode: Enums.ParentDealPickerMode;
}
export declare const initialState: {
    readonly state: IParentDealPickerState;
};
export interface NAVIGATE_BACK {
    (): void;
}
export interface NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN {
    (parentDealCustomer: Models.CustomerManaged): void;
}
export interface PERFORM_PARENT_DEAL_DEAL_SELECT {
    (parentDealDeal: Models.Deal): void;
}
export interface PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE {
    (): void;
}
export interface PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH {
    (): void;
}
export interface PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE {
    (): void;
}
export interface PERFORM_PARENT_DEAL_CUSTOMER_SEARCH {
    (): void;
}
export interface PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH {
    (parentDealCustomerInputSearch: string): void;
}
export interface NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN {
    (mode: Enums.ParentDealPickerMode): void;
}
export interface PERFORM_PARENT_DEAL_CUSTOMER_LIST_APPEND {
    (): void;
}
export interface PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH {
    (): void;
}
export interface PERFORM_CUSTOMER_LIST_APPEND {
    (): void;
}
export interface PERFORM_CUSTOMER_SEARCH_LIST_APPEND {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}
export interface PERFORM_REFRESH_BAR_HIDE {
    (): void;
}
