import React from 'react';
import * as ModelsProductCredit from '../models/ModelsProductCredit';
import { Models } from 'mrmkmcib-crm';
import { Models as ModelsApp } from 'mrmkmcib-app';
declare const ViewProductCovenantList: React.StatelessComponent<IProps>;
export interface IProps {
    testID: string;
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCreditProduct: Models.CreditProduct;
    currentCustomerManaged: Models.CustomerManaged;
    covenantListFetching: boolean;
    covenantListFetchingError: Models.Error | null;
    isVisiblePopoverCovenantPeriodFilter: boolean;
    isVisiblePopoverCovenantStatusFilter: boolean;
    performChangeVisiblePopoverCovenantPeriodFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER;
    performChangeVisiblePopoverCovenantStatusFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER;
    performChangeCovenantDateFilterValue: ModelsProductCredit.PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE;
    performChangeCheckStatusCreditCovenantPeriodFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER;
    performChangeCheckStatusCreditCovenantStatusFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER;
    covenantPeriodFilterValueList: ModelsApp.ClassifierList;
    covenantStatusFilterValueList: ModelsApp.ClassifierList;
    covenantAppliedPeriodFilterValueList: ModelsApp.ClassifierList;
    covenantAppliedStatusFilterValueList: ModelsApp.ClassifierList;
    performApplyCovenantPeriodFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_PERIOD_FILTER;
    performApplyCovenantStatusFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_STATUS_FILTER;
    covenantDateFilterValue: Date | null;
    productCachedDateCovenantList: Date | null;
    filteredProductCovenantList: Models.ProductCovenantList;
    productCovenantList: Models.ProductCovenantList;
    performCallGetProductCovenantListCacheReset: ModelsProductCredit.PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET;
    navigateToCustomerScreen: ModelsProductCredit.NAVIGATE_TO_CUSTOMER_SCREEN;
}
export default ViewProductCovenantList;
