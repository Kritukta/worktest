import React from 'react';
import { Enums } from '../../Enums';
import * as ModelsProduct from "../../models/ModelsProduct";
export interface IProps {
    status: Enums.ProductStatus;
    currency: Enums.Currency;
    onTapStatus: ModelsProduct.INPUT_PRODUCT_STATUS;
    onTapCurrency: ModelsProduct.INPUT_CURRENCY;
    testID: string;
}
declare const ProductFilter: React.StatelessComponent<IProps>;
export default ProductFilter;
