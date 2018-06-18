/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {Text, View,} from 'ufs-mobile-platform'
import {Enums} from '../../Enums'

import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductFilterStyles'


/*
 * UI stateless functional component "ProductFilter" used in "Product" screen. Product screen filter component.
 */

export interface IProps {
    status: Enums.ProductStatus,
    currency: Enums.Currency,
    onTapStatus: ModelsProduct.INPUT_PRODUCT_STATUS,
    onTapCurrency: ModelsProduct.INPUT_CURRENCY,

    testID: string
}

const ProductFilter: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductFilter'}>
        {}
        <Text testID='test-id-6ca3c0d1-1003-3700-baa2-6885440ce75c'>Component - ProductFilter</Text>
        {}
    </View>
)

export default ProductFilter