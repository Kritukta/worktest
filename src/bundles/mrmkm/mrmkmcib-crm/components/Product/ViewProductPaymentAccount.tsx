/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    CenterPageHeader,
    ContentPanel,
    H2,
    NavigationTextButton,
    Page,
    RightPageHeader,
    SplitPanel,
    View,
} from 'ufs-mobile-platform'
import {Models} from "mrmkmcib-crm"

import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductPaymentAccountStyles'


import * as util from '../../common/Util'


/*
 * UI stateless functional component "ProductPaymentAccount" used in "Product" screen. (Deprecated) Product details component.
 */

export interface IProps {
    currentCustomerManaged: Models.CustomerManaged,
    data: Models.SettlementAgreementProduct,
    onTapClose: ModelsProduct.PERFORM_HIDE_PRODUCT,

    testID: string
}

const ProductPaymentAccount: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductPaymentAccount'}>
        {}
        <SplitPanel testID='test-id-88366530-6fa5-e5b5-a8a6-7b5097ea1e43' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-0ecd4aee-471c-4038-0ea9-851118fe2875' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-c8a1e252-2b1e-441b-2384-ca90e6f403ad' scrollEnabled={true}
                      content={<View testID='test-id-c8a1e252-2b1e-441b-2384-ca90e6f403ad'></View>}>
                    <RightPageHeader testID='test-id-d95b00e5-c6d2-e0f7-247f-c6944eef5f40'>
                        <NavigationTextButton testID='test-id-491c5c5e-b927-b09f-fb9d-71f50c44eb8b' title={"Готово"}
                                              onExecute={props.onTapClose}/>
                    </RightPageHeader>
                    <CenterPageHeader testID='test-id-893967dd-c715-9894-e297-62752498f894'>
                        <H2 testID='test-id-cb853c64-21eb-5815-0331-18bb31f4321b'>{util.getProductTypeName(props.data.productType)}</H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductPaymentAccount