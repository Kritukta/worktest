import React from 'react';
import { Models } from "mrmkmcib-crm";
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import * as ModelsAppCRM from "../../models/ModelsAppCRM";
import * as ModelsProductList from "../../models/ModelsProductList";
import * as ModelsProductAcquiring from "../../models/ModelsProductAcquiring";
export interface IProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentAcquiringProduct: Models.AcquiringProduct;
    currentExchangePerson: ModelsScheduler.Person;
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    navigateToAgreementListView: ModelsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW;
    navigateBackToViewProductAcquiring: ModelsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING;
    testID: string;
}
declare const ProductAcquiring: React.StatelessComponent<IProps>;
export default ProductAcquiring;
