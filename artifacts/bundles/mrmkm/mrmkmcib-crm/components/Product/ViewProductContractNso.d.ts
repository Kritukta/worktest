import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models, Enums } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../../models/ModelsAppCRM";
import * as ModelsProductList from "../../models/ModelsProductList";
export interface IProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentContractNsoProduct: Models.DepositProduct;
    currentExchangePerson: ModelsScheduler.Person;
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    productListAgreementStatus: Enums.ProductListAgreementStatus;
    testID: string;
    productContextMode: Enums.ProductContextMode;
}
declare const ProductContractNso: React.StatelessComponent<IProps>;
export default ProductContractNso;
