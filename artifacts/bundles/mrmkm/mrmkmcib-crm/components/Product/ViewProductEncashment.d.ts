import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../../models/ModelsAppCRM";
import * as ModelsProductList from "../../models/ModelsProductList";
export interface IProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentEncashmentProduct: Models.EncashmentContractProduct;
    currentExchangePerson: ModelsScheduler.Person;
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    testID: string;
}
declare const ProductEncashment: React.StatelessComponent<IProps>;
export default ProductEncashment;
