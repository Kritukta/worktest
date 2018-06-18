import React from 'react';
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsProductList from "../models/ModelsProductList";
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount";
import Error from "../models/Error";
export interface IStateProps {
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
    currentCustomerManaged: Models.CustomerManaged;
    currentPaymentAccountProduct: Models.SettlementAgreementProduct;
    productContextMode: Enums.ProductContextMode;
}
export interface IDispatchProps {
    performChangeTab: ModelsProductPaymentAccount.PERFORM_CHANGE_TAB;
    performInputSumMin: ModelsProductPaymentAccount.PERFORM_INPUT_SUM_MIN;
    performInputSumMax: ModelsProductPaymentAccount.PERFORM_INPUT_SUM_MAX;
    performPopoverFilterShow: ModelsProductPaymentAccount.PERFORM_POPOVER_FILTER_SHOW;
    performPopoverFilterHide: ModelsProductPaymentAccount.PERFORM_POPOVER_FILTER_HIDE;
    performInputOperationType: ModelsProductPaymentAccount.PERFORM_INPUT_OPERATION_TYPE;
    performPopoverPeriodTypeShow: ModelsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_SHOW;
    performPopoverPeriodTypeHide: ModelsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_HIDE;
    performInputPeriodType: ModelsProductPaymentAccount.PERFORM_INPUT_PERIOD_TYPE;
    performInputFilterPeriodStart: ModelsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_START;
    performInputFilterPeriodEnd: ModelsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_END;
    performFilterApply: ModelsProductPaymentAccount.PERFORM_FILTER_APPLY;
    performFilterReset: ModelsProductPaymentAccount.PERFORM_FILTER_RESET;
    callGetOperationList: ModelsProductPaymentAccount.CALL_GET_OPERATION_LIST;
    getPaymentAccountCardIndexList: ModelsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST;
    callGetProductVspInfo: ModelsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO;
    navigateToRestrictionListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_RESTRICTION_LIST_SCREEN;
    navigateToCardIndexListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_CARD_INDEX_LIST_SCREEN;
    navigateToTariffScreen: ModelsProductPaymentAccount.NAVIGATE_TO_TARIFF_SCREEN;
    navigateToVspInfoScreen: ModelsProductPaymentAccount.NAVIGATE_TO_VSP_INFO_SCREEN;
    navigateToOperationListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_OPERATION_LIST_SCREEN;
    navigateToDashboardScreen: ModelsProductPaymentAccount.NAVIGATE_TO_DASHBOARD_SCREEN;
    navigateProductPaymentAccountBack: ModelsProductPaymentAccount.NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK;
    performContainerReset: ModelsProductPaymentAccount.PERFORM_CONTAINER_RESET;
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    productListAgreementStatus: Enums.ProductListAgreementStatus;
    performUpdateOperationListResetCache: ModelsProductPaymentAccount.PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE;
    performUpdateCardIndexListResetCache: ModelsProductPaymentAccount.PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE;
}
export declare type IProductPaymentAccountProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
