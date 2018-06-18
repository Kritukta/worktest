/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {Text, View,} from 'ufs-mobile-platform'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductCustomsPayment from "../../models/ModelsProductCustomsPayment"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductCustomsPaymentStyles'


/*
 * UI stateless functional component "ProductCustomsPayment" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductCustomsPayment: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductCustomsPayment'}>
        {}
        <Text testID='test-id-707f8aa3-c3f4-3645-c191-96492d66b6be'>Component - ProductCustomsPayment</Text>
        {}
    </View>
)

export default ProductCustomsPayment