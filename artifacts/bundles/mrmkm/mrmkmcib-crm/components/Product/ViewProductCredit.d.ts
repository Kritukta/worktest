import React from 'react';
import { Models } from "mrmkmcib-crm";
import * as ModelsProduct from "../../models/ModelsProduct";
export interface IProps {
    currentCustomerManaged: Models.CustomerManaged;
    data: Models.CreditProduct;
    onTapClose: ModelsProduct.PERFORM_HIDE_PRODUCT;
    testID: string;
}
declare const ProductCredit: React.StatelessComponent<IProps>;
export default ProductCredit;
