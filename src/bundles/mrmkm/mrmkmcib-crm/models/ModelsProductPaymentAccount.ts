/**
 * Models for ProductPaymentAccount container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


// TODO Describe models used in ProductPaymentAccount actions and thunks.

export interface PERFORM_POPOVER_OPERATION_TYPE_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_OPERATION_TYPE_HIDE {
    (): void;
}


const defaultState = {
    get state(): IProductPaymentAccountState {
        return {

            currentTab: Enums.ProductPaymentAccountTab.Main,  // State parameter displayed in "ProductPaymentAccount" screen. (Deprecated)
            inputSumMin: null,  // State parameter displayed in "ProductPaymentAccount" screen. 
            inputSumMax: null,  // State parameter displayed in "ProductPaymentAccount" screen. 
            isVisiblePopoverFilter: false,  // State parameter displayed in "ProductPaymentAccount" screen. 
            inputOperationType: Enums.OperationType.DebtAndCredit,  // State parameter displayed in "ProductPaymentAccount" screen. 
            isVisiblePopoverPeriodType: false,  // State parameter displayed in "ProductPaymentAccount" screen. 
            inputPeriodType: Enums.PeriodType.Last5Days,  // State parameter displayed in "ProductPaymentAccount" screen. 
            inputFilterPeriodStart: null,  // State parameter displayed in "ProductPaymentAccount" screen. 
            inputFilterPeriodEnd: null,  // State parameter displayed in "ProductPaymentAccount" screen. 
            filterSumMin: null,  // State parameter displayed in "ProductPaymentAccount" screen. 
            filterSumMax: null,  // State parameter displayed in "ProductPaymentAccount" screen.
            filterOperationType: Enums.OperationType.DebtAndCredit, // State parameter displayed in "ProductPaymentAccount" screen.
            operationFilteredList: defaultValues.PaymentAccountProductOperationList,  // State parameter displayed in "ProductPaymentAccount" screen. 
            operationList: defaultValues.PaymentAccountProductOperationList,  // Fetch result for "callGetOperationList" thunk.
            operationListFetching: false,  // Fetching indicator for network thunk chain "callGetOperationList".
            operationListError: null,  // Network error info for thunk chain "callGetOperationList".
            operationListCachedDate: null,  // Response data cache date for network thunk chain "callGetOperationList".
            cardIndexList: defaultValues.PaymentAccountProductCardIndexList,  // Fetch result for "callGetCardIndexList" thunk.
            cardIndexListFetching: false,  // Fetching indicator for network thunk chain "callGetCardIndexList".
            cardIndexListError: null,  // Network error info for thunk chain "callGetCardIndexList".
            cardIndexListCachedDate: null,  // Response data cache date for network thunk chain "callGetCardIndexList".

            productVspInfoFetching: false, // Fetching indicator for network thunk chain "callGetProductVspInfo".
            productVspInfoFetchingError: null,  // Network error info for thunk chain "callGetProductVspInfo".
            productVspInfo: null, // Response data cache date for network thunk chain "callGetProductVspInfo".

            operationEksList: defaultValues.PaymentAccountProductOperationList,  // Fetch result for "callGetOperationList" thunk.
            operationEksListFetching: false,  // Fetching indicator for network thunk chain "callGetOperationList".
            operationEksListError: null,  // Network error info for thunk chain "callGetOperationList".
            operationEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetOperationList".
            
            cardIndexEksList: defaultValues.PaymentAccountProductCardIndexList,  // Fetch result for "callGetCardIndexList" thunk.
            cardIndexEksListFetching: false,  // Fetching indicator for network thunk chain "callGetCardIndexList".
            cardIndexEksListError: null,  // Network error info for thunk chain "callGetCardIndexList".
            cardIndexEksListCachedDate: null,  // Response data cache date for network thunk chain "callGetCardIndexList".
            // TODO Describe ProductPaymentAccount reducer state.

        }
    }
}

export interface IProductPaymentAccountState {

    currentTab: Enums.ProductPaymentAccountTab,  // State parameter displayed in "ProductPaymentAccount" screen. (Deprecated)
    inputSumMin: number | null,  // State parameter displayed in "ProductPaymentAccount" screen. 
    inputSumMax: number | null,  // State parameter displayed in "ProductPaymentAccount" screen. 
    isVisiblePopoverFilter: boolean,  // State parameter displayed in "ProductPaymentAccount" screen. 
    inputOperationType: Enums.OperationType,  // State parameter displayed in "ProductPaymentAccount" screen. 
    isVisiblePopoverPeriodType: boolean,  // State parameter displayed in "ProductPaymentAccount" screen. 
    inputPeriodType: Enums.PeriodType,  // State parameter displayed in "ProductPaymentAccount" screen. 
    inputFilterPeriodStart: Date | null,  // State parameter displayed in "ProductPaymentAccount" screen. 
    inputFilterPeriodEnd: Date | null,  // State parameter displayed in "ProductPaymentAccount" screen. 
    filterSumMin: number | null,  // State parameter displayed in "ProductPaymentAccount" screen. 
    filterSumMax: number | null,  // State parameter displayed in "ProductPaymentAccount" screen.
    filterOperationType: Enums.OperationType, // State parameter displayed in "ProductPaymentAccount" screen.
    operationFilteredList: Models.PaymentAccountProductOperationList,  // State parameter displayed in "ProductPaymentAccount" screen. 
    operationList: Models.PaymentAccountProductOperationList,  // Fetch result for "callGetOperationList" thunk.
    operationListFetching: boolean,  // Fetching indicator for network thunk chain "callGetOperationList".
    operationListError: Error | null,  // Network error info for thunk chain "callGetOperationList".
    operationListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetOperationList".
    cardIndexList: Models.PaymentAccountProductCardIndexList,  // Fetch result for "callGetCardIndexList" thunk.
    cardIndexListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCardIndexList".
    cardIndexListError: Error | null,  // Network error info for thunk chain "callGetCardIndexList".
    cardIndexListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCardIndexList".

    productVspInfoFetching: boolean,   // Fetching indicator for network thunk chain "callGetProductVspInfo".
    productVspInfoFetchingError: Error | null,  // Network error info for thunk chain "callGetProductVspInfo".
    productVspInfo: Models.PaymentAccountProductVspInfo | null, // Response data cache date for network thunk chain "callGetProductVspInfo".

    operationEksList: Models.PaymentAccountProductOperationList,  // Fetch result for "callGetOperationList" thunk.
    operationEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetOperationList".
    operationEksListError: Error | null,  // Network error info for thunk chain "callGetOperationList".
    operationEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetOperationList".
    
    cardIndexEksList: Models.PaymentAccountProductCardIndexList,  // Fetch result for "callGetCardIndexList" thunk.
    cardIndexEksListFetching: boolean,  // Fetching indicator for network thunk chain "callGetCardIndexList".
    cardIndexEksListError: Error | null,  // Network error info for thunk chain "callGetCardIndexList".
    cardIndexEksListCachedDate: Date | null,  // Response data cache date for network thunk chain "callGetCardIndexList".

    // TODO Describe ProductPaymentAccount reducer state.


}

export const initialState = {
    get state(): IProductPaymentAccountState {
        return defaultState.state
    }
}


export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.ProductPaymentAccountTab,): void;
}

export interface PERFORM_INPUT_SUM_MIN {
    (value: number | null, applyFilter?: boolean): void;
}

export interface PERFORM_INPUT_SUM_MAX {
    (value: number | null, applyFilter?: boolean): void;
}

export interface PERFORM_POPOVER_FILTER_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_FILTER_HIDE {
    (): void;
}

export interface PERFORM_INPUT_OPERATION_TYPE {
    (value: Enums.OperationType, applyFilter?: boolean): void;
}

export interface PERFORM_POPOVER_PERIOD_TYPE_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_PERIOD_TYPE_HIDE {
    (): void;
}

export interface PERFORM_INPUT_PERIOD_TYPE {
    (value: Enums.PeriodType): void;
}

export interface PERFORM_INPUT_FILTER_PERIOD_START {
    (value: Date | null): void;
}

export interface PERFORM_INPUT_FILTER_PERIOD_END {
    (value: Date | null): void;
}

export interface PERFORM_FILTER_APPLY {
    (): void;
}

export interface PERFORM_FILTER_RESET {
    (): void;
}

export interface OPERATION_LIST_FILTER {
    (): void;
}

export interface NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN {
    (): void;
}

export interface NAVIGATE_PERIOD_TYPE_CUSTOM_BACK {
    (): void;
}

export interface CALL_GET_OPERATION_LIST {
    (isForceRequest: boolean): void;
}

export interface CALL_GET_CARD_INDEX_LIST {
    (isForceRequest: boolean): void;
}

export interface CALL_GET_PRODUCT_VSP_INFO {
    (): void;
}

export interface NAVIGATE_TO_RESTRICTION_LIST_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_CARD_INDEX_LIST_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_TARIFF_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_VSP_INFO_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_OPERATION_LIST_SCREEN {
    (): void;
}

export interface NAVIGATE_TO_DASHBOARD_SCREEN {
    (): void;
}

export interface NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK {
    (): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE {
    (): void;
}

export interface PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE {
    (): void;
}