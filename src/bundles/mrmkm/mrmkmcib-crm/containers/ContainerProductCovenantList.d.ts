import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models } from "mrmkmcib-crm";
import * as ModelsProductCredit from "../models/ModelsProductCredit";
export declare type IProductCovenantListProps = IStateProps & IDispatchProps & {
    testID: string;
};
export interface IStateProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCreditProduct: Models.CreditProduct;
    currentCustomerManaged: Models.CustomerManaged;
    isVisiblePopoverCovenantPeriodFilter: boolean;
    isVisiblePopoverCovenantStatusFilter: boolean;
    covenantPeriodFilterValueList: ModelsApp.ClassifierList;
    covenantStatusFilterValueList: ModelsApp.ClassifierList;
    covenantAppliedPeriodFilterValueList: ModelsApp.ClassifierList;
    covenantAppliedStatusFilterValueList: ModelsApp.ClassifierList;
    covenantDateFilterValue: Date | null;
    productCachedDateCovenantList: Date | null;
    filteredProductCovenantList: Models.ProductCovenantList;
    productCovenantList: Models.ProductCovenantList;
    covenantListFetching: boolean;
    covenantListFetchingError: Models.Error | null;
}
export interface IDispatchProps {
    performCallGetProductCovenantListCacheReset: ModelsProductCredit.PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET;
    performChangeVisiblePopoverCovenantPeriodFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER;
    performChangeVisiblePopoverCovenantStatusFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER;
    performChangeCheckStatusCreditCovenantPeriodFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER;
    performChangeCheckStatusCreditCovenantStatusFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER;
    performApplyCovenantPeriodFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_PERIOD_FILTER;
    performApplyCovenantStatusFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_STATUS_FILTER;
    performChangeCovenantDateFilterValue: ModelsProductCredit.PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE;
    navigateToCustomerScreen: ModelsProductCredit.NAVIGATE_TO_CUSTOMER_SCREEN;
}
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
