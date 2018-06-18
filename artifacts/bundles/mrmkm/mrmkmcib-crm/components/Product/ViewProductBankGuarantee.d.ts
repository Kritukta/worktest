import React from 'react';
import { Models, Enums } from "mrmkmcib-crm";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import * as ModelsAppCRM from "../../models/ModelsAppCRM";
import * as ModelsProductList from "../../models/ModelsProductList";
export interface IProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentBankGuaranteeProduct: Models.CreditProduct;
    currentExchangePerson: ModelsScheduler.Person;
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    testID: string;
    productContextMode: Enums.ProductContextMode;
}
declare const ProductBankGuarantee: React.StatelessComponent<IProps>;
export default ProductBankGuarantee;
