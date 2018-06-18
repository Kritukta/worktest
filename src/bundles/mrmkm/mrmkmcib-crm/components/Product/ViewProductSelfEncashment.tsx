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
    NavigationTextButton,
    Page,
    LeftPageHeader,
    SumText,
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
import * as ModelsProductSelfEncashment from "../../models/ModelsProductSelfEncashment"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductSelfEncashmentStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {selfEncashmentContractProduct} = props.currentSelfEncashmentProduct;
    const xsSize = 12
    const NO_DATA_LABEL = (title: string): React.ReactElement<Label> => (
        <Label
            testID={`${title}-test-id-e27d28ca-c922-11e7-abc4-cec278b6b50a`}
            header={''}
            block={true}
            text={title}>
            <Text
                testID={`${title}-'test-id-e69e8b1a-c922-11e7-abc4-cec278b6b50a`}>
                { placeholder }
            </Text>
        </Label>
    )
    return selfEncashmentContractProduct ?
        <View testID='test-id-19fd55a2-e9cb-5bc1-9b32-07308ddb3d74' style={Styles.borderBox}><Grid
            testID='test-id-19fd55a2-e9cb-5bc1-9b32-07308ddb3d74'>
            <Row testID='test-id-e35bd7e5-17ed-a00b-f7d4-6ce951addefe'>
                <Col testID='test-id-da24f53e-8b41-16ba-f901-5fee5f741149' xs={xsSize}>
                    <View testID="test-id-4163f0de-c91f-11e7-abc4-cec278b6b50a"
                          style = {Styles.clientProduct}>
                        <Label testID='test-id-6916a636-7487-0359-ead9-6e5b51350e4d'
                               header={''}
                               text={'Клиент'}
                               block={true}>
                            <Text testID='test-id-6916a636-7487-0359-ead9-6e5b51350e4d'>
                                {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                            </Text>
                        </Label>
                    </View>
                </Col>
            </Row>
            <View
                testID="test-id-6c3800ca-c91f-11e7-abc4-cec278b6b50a"
                style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-727357b4-c91f-11e7-abc4-cec278b6b50a'/>
            </View>
            <Row testID='test-id-b562b5a8-64ee-ba60-7b5c-40c069d00c6e'>
                <Col testID='test-id-ee6d6202-6154-2197-d60b-e53a3bfd2b27' xs={xsSize / 4}>
                    <Label testID='test-id-ea074bc4-162c-7d84-e9a5-12a265f32980' header={''}
                           text={'Вид услуги'} block={true}>
                        <Text
                            testID='test-id-d55465dd-feb3-9d38-c1d8-2366dbd67e3c'>
                            {selfEncashmentContractProduct.agreementType || placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-113ac8b8-ef6e-1f12-0c33-2375b24d809b' xs={xsSize / 4}>
                    {selfEncashmentContractProduct.mounthTurn != null ?
                        <SumText
                            label={'Среднемесячные обороты'}
                            small={false}
                            testID='test-id-292f40c8-c923-11e7-abc4-cec278b6b50a'
                            value={Number(selfEncashmentContractProduct.mounthTurn)}
                            currency={selfEncashmentContractProduct.currencyClassifier.code} />
                        : NO_DATA_LABEL("Среднемесячные обороты")
                    }
                </Col>
                <Col testID='test-id-fffd4c92-c6f2-393c-18ac-59a49e571b6b' xs={xsSize / 4}>
                    <Label testID='test-id-6c8b3b28-4a5e-a358-186d-52f3b517db4d' header={''}
                           text={'Дата начала действия'} block={true}>
                        <Text
                            testID='test-id-e8328662-76d7-e5f5-e313-2d135fef5a54'>
                            {selfEncashmentContractProduct.startDate &&
                             selfEncashmentContractProduct.startDate.formattedString() ||
                            placeholder}
                        </Text>
                    </Label>
                </Col>
            </Row>
            <View
                testID="test-id-700235fa-c923-11e7-abc4-cec278b6b50a"
                style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-d3cd69fd-2d7f-a74e-a88a-6b0c0915ea65'/>
            </View>
            <Row testID='test-id-6d690096-a042-940c-93b2-ebdcfb7d6eac'>
                <Col testID='test-id-c658488c-cbfb-9440-6524-d414264f63c9' xs={xsSize / 4}>
                    <Label testID='test-id-ad4546ed-ab6b-c2a5-e596-c7d9c51ca7ee'
                           header={''}
                           text={'Номер договора/соглашения'} block={true}>
                        <Text
                            testID='test-id-1381361d-4385-c32a-7a09-328cf0f53911'>
                            {selfEncashmentContractProduct.agreementNumber || placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-22dca31d-c22e-6bcc-b103-d925759ead45' xs={xsSize / 4}>
                    <Label testID='test-id-b49e4c3e-2dd8-c57f-ad6a-beb3c7d2cff9' header={''} text={'Дата заключения договора'}
                           block={true}>
                        <Text
                            testID='test-id-43e6e156-9421-6a63-b97e-700bd447cb04'>
                            {selfEncashmentContractProduct.signedDate &&
                            selfEncashmentContractProduct.signedDate.formattedString()
                            || placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-b76c08c9-23c5-a1ca-effc-8f0af8d0a23a' xs={xsSize / 4}>
                    <Label testID='test-id-0009d311-a4c1-49a1-9561-11fd7250429c' header={''} text={'Дата окончания договора'}
                           block={true}>
                        <Text
                            testID='test-id-c6edf0ea-1160-6ad9-5a73-7dcf0d969fe4'>
                            {selfEncashmentContractProduct.finishDate &&
                            selfEncashmentContractProduct.finishDate.formattedString()
                            || placeholder}
                        </Text>
                    </Label>
                </Col>
            </Row>
        </Grid>
        </View> : <View testID='test-id-4eaba506-e4f8-5395-f732-1e0cc58b5652'></View>
}


/*
 * UI stateless functional component "ProductSelfEncashment" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentSelfEncashmentProduct: Models.EncashmentContractProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductSelfEncashment: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductSelfEncashment'}>
        {}
        <SplitPanel testID='test-id-a36e0a1f-303d-5118-7188-040bfa997d84' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-cef18474-5691-4570-9c34-80b880399c59' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-2d0b1e18-fa18-59da-cc7e-c089c67eee31' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-ebc78ad8-c21a-11e7-abc4-cec278b6b50a'>
                        <NavigationBackButton key={"SelfEncashmentProductListNavBackButton"}
                                              testID='test-id-061eb1e4-c924-11e7-abc4-cec278b6b50a'
                                              title={false}
                                              onClick={()=> props.navigateProductListBack()}/>
                        <View key={"SelfEncashmentProductListNavBackButtonView"}
                              style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-f834331a-c923-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-f3b99672-c923-11e7-abc4-cec278b6b50a"
                                title={`${util.getProductListTypeName(props.currentSelfEncashmentProduct.productType).substring(0,14)}...`}
                                onExecute={props.navigateProductListBack}
                            />
                        </View>

                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-c30c65b8-c201-cf4a-bf6a-384f9da2f044'>
                        <H2 testID='test-id-0e673175-db60-3df6-96ca-a7d646b08a3c'>
                            { util.getProductTypeName (props.currentSelfEncashmentProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductSelfEncashment