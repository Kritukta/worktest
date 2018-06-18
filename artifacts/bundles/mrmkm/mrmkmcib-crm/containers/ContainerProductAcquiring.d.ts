/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsProductList from "../models/ModelsProductList";
import * as ModelsProductAcquiring from "../models/ModelsProductAcquiring";
export interface IStateProps {
    classifierDictionary: ModelsApp.ClassifierDictionary;
    currentCustomerManaged: Models.CustomerManaged;
    currentAcquiringProduct: Models.AcquiringProduct;
    currentExchangePerson: ModelsScheduler.Person;
}
export interface IDispatchProps {
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    navigateToAgreementListView: ModelsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW;
    navigateBackToViewProductAcquiring: ModelsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING;
}
export declare type IProductAcquiringProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
