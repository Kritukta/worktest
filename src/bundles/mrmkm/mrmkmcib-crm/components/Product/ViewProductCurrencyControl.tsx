/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    Text,
    View,
} from 'ufs-mobile-platform'

import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductCurrencyControl from "../../models/ModelsProductCurrencyControl"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductCurrencyControlStyles'


/*
 * UI stateless functional component "ProductCurrencyControl" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentCurrencyControlProduct: Models.LegalInfoProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductCurrencyControl: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductCurrencyControl'}>
        {}
        <Text testID='test-id-0631c7da-1113-6ed2-ae28-adeec3ab001e'>Component - ProductCurrencyControl</Text>
        {}
    </View>
)

export default ProductCurrencyControl