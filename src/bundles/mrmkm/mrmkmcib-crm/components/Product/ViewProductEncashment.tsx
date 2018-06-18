/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    CenterPageHeader,
    Col,
    ContentPanel,
    Grid,
    H2,
    HorizontalRule,
    Label,
    NavigationBackButton,
    LeftPageHeader,
    NavigationTextButton,
    Page,
    RightPageHeader,
    Row,
    SplitPanel,
    Text,
    View,
} from 'ufs-mobile-platform'

import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductEncashmentStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {encashmentContractProduct} = props.currentEncashmentProduct;
    const xsSize = 12
    return encashmentContractProduct ?
        <View testID='test-id-4c0c9823-8df7-0d19-c97a-452d3e240f61' style={Styles.borderBox}><Grid
            testID='test-id-4c0c9823-8df7-0d19-c97a-452d3e240f61'>
            <Row testID='test-id-8900f293-2e78-0d3a-f4ec-facbf443af76'>
                <Col testID='test-id-c5e8e4d8-22d9-a57e-b173-28af67c39dcf' xs={xsSize}>
                    <View testID="test-id-57ed876c-c91e-11e7-abc4-cec278b6b50a"
                          style = {Styles.clientProduct}>
                            <Label testID='test-id-6916a636-7487-0359-ead9-6e5b51350e4d'
                                   header={''}
                                   text={'Клиент'}
                                   block={true}>
                                <Text testID='test-id-6916a636-7487-0359-ead9-6e5b51350e4d'
                                      style={Styles.productText}>
                                    {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                                </Text>
                            </Label>
                    </View>
                </Col>
            </Row>
            <View
                testID="test-id-6773df92-c91e-11e7-abc4-cec278b6b50a"
                style = {Styles.horizontalLineView}>
                    <HorizontalRule testID='test-id-49c97105-11c1-b68b-453d-0559bdc3711c'/>
            </View>
            <Row testID='test-id-aa65ab83-68b9-1acc-11a9-48db17d3eb5c'>
                <Col testID='test-id-fd6618f0-28f1-382d-7e16-528d8849dfb0' xs={xsSize / 2}>
                    <Label testID='test-id-b02f8a17-4f33-6317-f410-4a292a0634b6'
                           header={''}
                           text={'Вид услуги'}
                           block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-a78ef0fd-6995-5f54-993d-101bae287102'>
                                {encashmentContractProduct.agreementType || placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-4a3c888e-c2ed-4633-476f-718f61f2bce5' xs={xsSize / 2}>
                    <Label testID='test-id-2e94eb32-c9ae-f2e6-b83a-c8aa676bdf66' header={''}
                           text={'Кол-во операций за предшествующий мес.'} block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-6b936452-dd35-5045-a04e-43e0d71b0e89'>
                                {encashmentContractProduct.lastMonthTransCount != null ?
                                    encashmentContractProduct.lastMonthTransCount.sumString()
                                    : placeholder}
                        </Text>
                    </Label>
                </Col>
            </Row>
            <View
                testID="test-id-7429cefe-c91e-11e7-abc4-cec278b6b50a"
                style = {Styles.horizontalLineView}>
                    <HorizontalRule testID='test-id-49c97105-11c1-b68b-453d-0559bdc3711c'/>
            </View>
            <Row testID='test-id-5e9775b4-1901-8752-8790-afe4ff80068e'>
                <Col testID='test-id-af099787-5eb5-d815-25a4-40239f39deb7' xs={xsSize/4}>
                    <Label testID='test-id-cd6833e0-7b85-80b8-45bf-fa8fec07406a' header={''} text={'Номер договора'}
                           block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-09c95daa-05f4-2e7d-470a-3b36c27c519a'>
                            {encashmentContractProduct.agreementNumber || placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-8aae526e-8217-1808-d53a-c41e264b5750' xs={xsSize/4}>
                    <Label testID='test-id-3580bf1a-c130-29de-5c8b-5863f644bac0' header={''} text={'Статус договора'}
                           block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-7621b234-90be-745a-d675-a40f75b2bd82'>
                            {encashmentContractProduct.currentStatus || placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-f8e7a22f-90b0-b101-92dd-4c7e07bb8488' xs={xsSize / 4}>
                    <Label testID='test-id-1e5b05ad-65d4-97b2-6ba5-d96a617a8dc4' header={''} text={'Дата заключения договора'}
                           block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-0185b6a4-9571-afe9-610f-a616baa5be6e'>
                            {encashmentContractProduct.signedDate
                                ? encashmentContractProduct.signedDate.formattedString()
                                : placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-5226276c-05f5-ddcd-5b7a-4878a1739926' xs={xsSize / 4}>
                    <Label testID='test-id-33d27f6f-1522-f84a-ce6c-ae4dee2c6dd4'
                           header={''}
                           text={'Дата окончания договора'}
                           block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-7daee8f4-b6f2-9883-c5e3-81a673db3bf8'>
                            {encashmentContractProduct.finishDate
                                ? encashmentContractProduct.finishDate.formattedString()
                                : placeholder}
                        </Text>
                    </Label>
                </Col>
            </Row>
        </Grid>
        </View> : <View testID='test-id-608b90a6-9819-cfeb-9660-a1ff3c0c8352'></View>
}


/*
 * UI stateless functional component "ProductEncashment" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentEncashmentProduct: Models.EncashmentContractProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductEncashment: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductEncashment'}>
        {}
        <SplitPanel testID='test-id-8100009c-35db-4957-e6cb-6032c600967d' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-6af048d7-3071-0c7c-c516-bc1306732ac6' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-0b741d52-3406-08fb-5fc7-963933e96cd7' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-0a501734-c204-11e7-abc4-cec278b6b50a'>
                       <NavigationBackButton key={'EncashmentProductListNavButtonBack'}
                                                      testID='test-id-fe90d460-c203-11e7-abc4-cec278b6b50a'
                                                      title={false}
                                                      onClick={props.navigateProductListBack}/>
                        <View key={'EncashmentProductListNavButtonBackView'}
                              style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-f3021906-c203-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-f8ba99fe-c203-11e7-abc4-cec278b6b50a"
                                title={util.getProductListTypeName(props.currentEncashmentProduct.productType)}
                                onExecute={props.navigateProductListBack}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-39919c47-b80c-c7e8-cf68-15bda3ce35be'>
                        <H2 testID='test-id-c937b6ba-33dd-57fc-3e56-7639a4295a0b'>
                            { util.getProductTypeName (props.currentEncashmentProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductEncashment