/**
 * Models for ParentDealPicker container.
 *
 * @author Gladkov E.N.
 */

import {defaultValues} from './Models'
import {Models} from 'mrmkmcib-crm'
import {Enums} from '../Enums'
import Error from '../models/Error'


const defaultState = {
    get state(): IParentDealPickerState {
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
        }
    }
}

export interface IParentDealPickerState {
    currentPage: number,
    customerManagedList: Models.CustomerManagedList,
    customerSearchType: Enums.CustomerSearchType,
    customerSearchError: string,
    isCustomerListSearchError: boolean,
    currentSearchPage: number,
    customerListRefreshInProgress: boolean,
    customerManagedListFetching: boolean,
    customerManagedListError: Error | null,
    customerManagedListCachedDate: Date | null,
    customerListAppendInProgress: boolean,
    customerManagedListPage: Models.CustomerManagedListPage,
    customerManagedListPageFetching: boolean,
    customerManagedListPageError: Error | null,
    customerManagedListPageCachedDate: Date | null,
    customerSearchListFetching: boolean,
    searchAppendInProgress: boolean,
    customerSearchListPage: Models.CustomerManagedListPage,
    customerSearchListPageFetching: boolean,
    customerSearchListPageError: Error | null,
    customerSearchListPageCachedDate: Date | null,
    isRefreshBarVisible: boolean,

    currentDeal: Models.Deal,
    isParentDealCustomerSearchMode: boolean,
    isParentDealCustomerRefreshInProgress: boolean,
    isParentDealCustomerAppendInProgress: boolean,
    isParentDealCustomerSearchInProgress: boolean,
    isParentDealCustomerSearchAppendInProgress: boolean,
    parentDealCustomer: Models.CustomerManaged,
    parentDealCustomerList: Models.CustomerManagedList,
    parentDealCustomerSearchList: Models.CustomerManagedList,
    parentDealCustomerInputSearch: string,
    isParentDealDealListRefreshInProgress: boolean,
    parentDealDealListFetchError: Error | null,
    parentDealDealList: Models.DealList,
	parentDealPickerMode: Enums.ParentDealPickerMode,
}

export const initialState = {
    get state(): IParentDealPickerState {
        return defaultState.state
    }
}


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

