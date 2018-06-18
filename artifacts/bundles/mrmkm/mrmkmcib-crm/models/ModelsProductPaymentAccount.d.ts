/**
 * Models for ProductPaymentAccount container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface PERFORM_POPOVER_OPERATION_TYPE_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_OPERATION_TYPE_HIDE {
    (): void;
}
export interface IProductPaymentAccountState {
    currentTab: Enums.ProductPaymentAccountTab;
    inputSumMin: number | null;
    inputSumMax: number | null;
    isVisiblePopoverFilter: boolean;
    inputOperationType: Enums.OperationType;
    isVisiblePopoverPeriodType: boolean;
    inputPeriodType: Enums.PeriodType;
    inputFilterPeriodStart: Date | null;
    inputFilterPeriodEnd: Date | null;
    filterSumMin: number | null;
    filterSumMax: number | null;
    filterOperationType: Enums.OperationType;
    operationFilteredList: Models.PaymentAccountProductOperationList;
    operationList: Models.PaymentAccountProductOperationList;
    operationListFetching: boolean;
    operationListError: Error | null;
    operationListCachedDate: Date | null;
    cardIndexList: Models.PaymentAccountProductCardIndexList;
    cardIndexListFetching: boolean;
    cardIndexListError: Error | null;
    cardIndexListCachedDate: Date | null;
    productVspInfoFetching: boolean;
    productVspInfoFetchingError: Error | null;
    productVspInfo: Models.PaymentAccountProductVspInfo | null;
    operationEksList: Models.PaymentAccountProductOperationList;
    operationEksListFetching: boolean;
    operationEksListError: Error | null;
    operationEksListCachedDate: Date | null;
    cardIndexEksList: Models.PaymentAccountProductCardIndexList;
    cardIndexEksListFetching: boolean;
    cardIndexEksListError: Error | null;
    cardIndexEksListCachedDate: Date | null;
}
export declare const initialState: {
    readonly state: IProductPaymentAccountState;
};
export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.ProductPaymentAccountTab): void;
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
