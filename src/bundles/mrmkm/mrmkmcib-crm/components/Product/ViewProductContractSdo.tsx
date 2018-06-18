/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    CenterPageHeader,
    Col,
    ContentPanel,
    LeftPageHeader,
    NavigationBackButton,
    Grid,
    H2,
    HorizontalRule,
    Label,
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
import { Models, EnumsCrm, Enums} from "mrmkmcib-crm"

import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductContractSdo from "../../models/ModelsProductContractSdo"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductContractSdoStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {contractSDO} = props.currentContractSdoProduct;
    const xsSize = 12
    return contractSDO ? <View testID='test-id-24f911d6-c794-9c8f-b453-185050ffa6ce' style={Styles.borderBox}><Grid
        testID='test-id-24f911d6-c794-9c8f-b453-185050ffa6ce'>
        <Row testID='test-id-e66d8b8c-66fa-2627-9f55-c11a41096cc5'>
            <Col testID='test-id-6be6635b-b962-ca78-d005-9fb070e13cd0' xs={xsSize}>
                <View testID="test-id-2b8682f2-4d3d-4f7c-9ea5-c4bf85291419"
                      style = {Styles.clientProduct}>
                    <Label testID='test-id-252e3bc6-c218-11e7-abc4-cec278b6b50a' header={''} text={'Клиент'} block={true}>
                        <Text
                            testID='test-id-29f06eb8-c218-11e7-abc4-cec278b6b50a'>
                            {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <Row testID='test-id-d4f346c3-3958-3bd2-8b6f-283ea43e6a12'>
            <Col testID='test-id-3caf7ac2-8f28-0955-d327-04c36bf7f437' xs={xsSize}>
                <View testID="test-id-a011edcd-7fa3-4222-bb43-7bc93b1ab0f9"
                      style = {Styles.nameProduct}>
                        <Label testID='test-id-4fbc434b-7972-e7ad-e9ff-6c5b88614fa9'
                               header={''}
                               text={'Название продукта'}
                               block={true}>
                                    <Text
                                        testID='test-id-b3d6ab6f-eff8-f6c2-1f79-cab5c76df727'>
                                        {contractSDO.depositTypeClassifier ? contractSDO.depositTypeClassifier.value : placeholder}
                                    </Text>
                        </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-1a1744c0-2bc6-42a8-b569-575a09dd7aa6"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-4ed658e3-ec91-0dc8-c8db-0beb1cc25d54'/>
        </View>
        <Row testID='test-id-e0833d6e-a40e-4651-f348-13f42b7c687d'>
            <Col testID='test-id-53f98d1c-df9c-ef9d-8f67-f9382fbb8f06' xs={xsSize / 3}>
                <View testID="test-id-760514ac-0f7b-46b7-9455-caf92c482efd"
                      style={Styles.dealPeriodDurationView}>
                        <Label testID='test-id-587687f5-c26c-40e5-d813-f64e9ade4cc9'
                               header={''}
                               text={'Валюта'} block={true}>
                            <Text
                                testID='test-id-3ac879f7-62d8-72a8-a86c-f2b4b0e96ecd'>
                                {contractSDO.currencyClassifier ? contractSDO.currencyClassifier.value : placeholder}
                            </Text>
                        </Label>
                </View>
            </Col>
            <Col testID='test-id-0cc1f076-250f-95b0-ff37-958dbbd0b923' xs={xsSize / 3}>
                <View testID="test-id-4d8892d1-9981-439b-ac5e-433daa9b8b94"
                      style={Styles.dealPeriodDurationView}>
                        <Label testID='test-id-29b5da1a-fe00-3139-ce2f-54841dd1cf45'
                               header={''} text={'Дата открытия сделки'}
                               block={true}>
                            <Text
                                testID='test-id-b54e5da0-dbe3-d0b2-1c5f-b5a1123f5e44'>
                                {contractSDO.dealPeriodStartDate &&
                                contractSDO.dealPeriodStartDate.formattedString() ||
                                placeholder}
                            </Text>
                        </Label>
                </View>
            </Col>
            <Col testID='test-id-30adf493-874f-4a68-9775-f9ce9157d9bf' xs={xsSize / 3}>
                <View testID="test-id-c0e6aaae-f6e2-4b9e-9066-ee74e0a09ca3"
                      style={Styles.dealPeriodEndDateView}>
                    <Label testID='test-id-bea16a8a-7c1b-471c-9300-43a6099dcfd2' header={''}
                           text={'Дата закрытия сделки'}
                           block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-7c4e5870-ad0f-4548-a30d-666675361dc0'>
                            {
                                contractSDO && contractSDO.dealPeriodEndDate
                                    ? contractSDO.dealPeriodEndDate.formattedString()
                                    : placeholder
                            }
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-a4d30cb6-37e2-4d95-8259-b2c4b3bd1bb5"
            style = {Styles.horizontalLineView}>
            <HorizontalRule testID='test-id-f3b6cf08-be9c-4723-9aa7-1df75cd34ecf'/>
        </View>
        <Row testID='test-id-d36914b7-647a-4c15-b8c7-2a906b1fd110'>
            <Col testID='test-id-ac8b15a0-4728-461c-9256-1e37a0af2a51' xs={xsSize / 3}>
                <Label testID='test-id-a561cf37-5c47-4966-a19d-c1f8c8be68b7'
                       header={''}
                       text={'Номер счета'}
                       block={true}>
                    <Text style={Styles.productText}
                          testID='test-id-07a69b61-fac5-443f-8fc4-0812e48f3b1d'>
                        {contractSDO.acctId &&
                        contractSDO.acctId.formatAccountNumber() ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-7f704728-a532-4dfb-863e-f2e3da69b3ea' xs={xsSize / 3}>
                <Label testID='test-id-380ec330-f435-4805-947d-9248b4df21bd' header={''}
                       text={'Номер ВСП, где открыт счет'}
                       block={true}>
                    <Text style={Styles.productText}
                          testID='test-id-a350fb8b-46a9-48b8-a19c-b81f9f8cbdd5'>
                        {contractSDO.bankInfo || placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
        <View
            testID="test-id-595d6431-68a0-46c9-8125-1a4fbbb50405"
            style = {Styles.horizontalLineView}>
            <HorizontalRule testID='test-id-ffe7c8e9-b2d0-4bca-b563-bd6380095728'/>
        </View>
        <Row testID='test-id-41ffeb39-9082-42b9-b41a-4eb6b9881ce0'>
            <Col testID='test-id-cdb00da2-159f-4b74-b470-3d246b63fb7e' xs={xsSize / 3}>
                <Label testID='test-id-289aaf76-074c-433b-849b-d043725d4997'
                       header={''}
                       text={'Номер договора СДО'}
                       block={true}>
                    <Text style={Styles.productText}
                          testID='test-id-abfd7154-f29b-4876-ae72-f88baf3b48b3'>
                        {contractSDO.dealNum || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-4a0a9bf0-b449-4baf-9357-403618f4f830' xs={xsSize / 3}>
                <Label testID='test-id-4a0a9bf0-b449-4baf-9357-403618f4f830'
                       header={''}
                       text={'Статус договора СДО'}
                       block={true}>
                    <Text style={Styles.productText}
                          testID='test-id-bf1266bd-c020-4014-98b7-a4cbef36cfe9'>
                        {contractSDO.dealStatusDesc || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-4d25ff10-e89e-48f4-a0e2-b66adbd05ac5' xs={xsSize / 3}>
                <Label testID='test-id-fd9eaac7-7d84-44bc-83e3-8ecdcac8c85d'
                       header={''}
                       text={'Дата заключения договора СДО'}
                       block={true}>
                    <Text style={Styles.productText}
                          testID='test-id-1b34495a-aad5-4de9-b38d-16c656b181b3'>
                        {
                            contractSDO && contractSDO.planStartDate
                                ? contractSDO.planStartDate.formattedString()
                                : placeholder
                        }
                    </Text>
                </Label>
            </Col>
        </Row>
    </Grid>
    </View> : <View testID='test-id-6c35d684-0ad1-7296-f69e-6ec5b06e44d1'></View>
}


/*
 * UI stateless functional component "ProductContractSdo" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentContractSdoProduct: Models.DepositProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string,
    productContextMode: Enums.ProductContextMode,

}

const ProductContractSdo: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductContractSdo'}>
        {}
        <SplitPanel testID='test-id-579e3ba0-2476-97d3-8224-26f9a360d987' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-17e35e95-2fc8-bd94-203c-575227b6c940' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-5649e7ce-0e62-6977-830d-885e60728d08' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-22ee7b81-79fc-4c6a-788f-2a70797735f9'>
                        <NavigationBackButton key={"ProductListSdoNavBackButton"}
                                              testID='test-id-827c242e-c46f-11e7-abc4-cec278b6b50a' title={false}
                                              onClick={()=> props.navigateProductListBack()}/>
                                <View key={"ProductListSdoNavBackButtonView"}
                                      style={Styles.navigationBackButtonTextAdjustment}
                                      testID="test-id-7e880cca-c46f-11e7-abc4-cec278b6b50a">
                                    <NavigationTextButton
                                        testID="test-id-78b5a320-c46f-11e7-abc4-cec278b6b50a"
                                        title={props.productContextMode == EnumsCrm.ProductContextMode.Notice ? 'Уведомления' : util.getProductListTypeName(props.currentContractSdoProduct.productType)}
                                        onExecute={props.navigateProductListBack}
                                    />
                                </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-f1b62cd5-26ee-9fc0-106a-8b6078be6f9a'>
                        <H2 testID='test-id-4b23a8a2-8acd-8dfd-bfdb-2942558874e2'>
                            { util.getProductTypeName (props.currentContractSdoProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductContractSdo