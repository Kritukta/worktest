import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsProductList from "../models/ModelsProductList";
export interface IStateProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentTariffPlanProduct: Models.SettlementAgreementProduct;
    currentExchangePerson: ModelsScheduler.Person;
    productListAgreementStatus: Enums.ProductListAgreementStatus;
}
export interface IDispatchProps {
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
}
export declare type IProductTariffPlanProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
