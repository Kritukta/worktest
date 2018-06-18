/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {Text, View,} from 'ufs-mobile-platform'

import Styles from './styles/ProductItemStyles'


/*
 * UI stateless functional component "ProductItem" used in "ProductList" screen. Product list row.
 */

export interface IProps {

    testID: string
}

const ProductItem: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductItem'}>
        {}
        <Text testID='test-id-368bdcd4-4a66-5e5a-2b77-6c7ca690182e'>Component - ProductItem</Text>
        {}
    </View>
)

export default ProductItem