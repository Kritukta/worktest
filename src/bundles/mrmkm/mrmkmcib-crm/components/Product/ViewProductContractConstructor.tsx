/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    CenterPageHeader,
    Col,
    NavigationBackButton,
    LeftPageHeader,
    ContentPanel,
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
import { Models, EnumsCrm} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductContractConstructor from "../../models/ModelsProductContractConstructor"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductContractConstructorStyles'

import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = util.getPlaceholderStringRepresentation (util.UndefinedValuesPlaceholder.NO_DATA)
    const noExists = util.getPlaceholderStringRepresentation (util.UndefinedValuesPlaceholder.NO)
    const {udboProduct} = props.currentContractConstructorProduct
    const attachedProductList = udboProduct ? udboProduct.attachedProducts
    .map((value: Models.SubUdboProduct_AttachedProduct, index: number): React.ReactElement<Text> | null =>
        value.productType ?
            <Text
                key = {`bindProductList${index}`}
                style={Styles.bindProductListText}
                testID={`${index}-test-id-0844645f-67e2-bc9e-d64e-8c4ad40ef9ed-${index}`}>
                {value.productType}
            </Text>
        : null)
    .compact() : null

    const xsSize = 12

    return udboProduct ? <View testID='test-id-a50310e5-3d30-cb26-f89d-f6e355e0d75d' style={Styles.borderBox}><Grid
        testID='test-id-a50310e5-3d30-cb26-f89d-f6e355e0d75d'>
        <Row testID='test-id-dffc53a3-e4ba-9ec7-5b0a-250828e6896b'>
            <Col testID='test-id-8af7731c-c408-c048-2999-965a377c8566' xs={xsSize}>
                <View testID="test-id-c0467807-2a67-4714-bf8e-5d8019479d0a"
                      style = {Styles.clientProduct}>
                        <Label
                                testID='test-id-df428f1a-ec2e-687d-fd29-a6685f790fb1'
                                header={''} text={'Клиент'}
                                block={true}>
                            <Text  ellipsizeMode="tail"
                                   style={Styles.productText}
                                   numberOfLines={1}
                                   testID="test-id-df428f1a-ec2e-687d-fd29-a6685f790fb1">
                                {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                            </Text>
                        </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-5bcabe5a-52f5-4a2d-ba61-3b57b4820c2c"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-e39b1b79-c7c7-5b07-f65a-ba8201f570be'/>
        </View>
        <Row testID='test-id-29dc998f-44b8-b09a-8e3c-5dc37e763fd2'>
            <Col testID='test-id-cf71fe4d-ae23-25a7-48e7-aef0be7799d4' xs={xsSize/3}>
                <Label testID='test-id-befa7dd1-dad3-651b-5020-24f434e94c0a' header={''} text={'Номер договора'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-2d3b3e07-fce6-d6f9-2ffa-6ee70f267f58'>
                        {udboProduct.contractNum || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-7780b941-051c-2805-568a-242c9dee22c1' xs={xsSize/3}>
                <Label testID='test-id-f1530f3c-2c80-3086-6b26-36fecae75494' header={''} text={'Дата заключения договора'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-d8ae8095-a0db-f541-0257-d254cacfe400'>
                        {udboProduct.startDate &&
                        udboProduct.startDate.formattedString() ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
        <View
            testID="test-id-70afd035-1907-40d7-b5a9-82e6bfc2cbba"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-e39b1b79-c7c7-5b07-f65a-ba8201f570be'/>
        </View>
        <Row testID='test-id-b5fcb024-6e04-b35b-f8ca-0be4809262d6'>
            <Col testID='test-id-056d420b-b774-9c48-bbbd-c8f61697d800' xs={xsSize}>
                <Text
                    style={Styles.bindProductListTitle}
                    testID='test-id-2db290d6-c33b-f8e7-59a0-324b9e67d242'>
                    {'Подключенные продукты/услуги'}
                </Text>
                {attachedProductList && attachedProductList.length > 0 ? attachedProductList : noExists}
            </Col>
        </Row>
    </Grid>
    </View> : <View testID='test-id-c2c37b5d-0f56-45b4-dc87-025d18f005ad'></View>
}


/*
 * UI stateless functional component "ProductContractConstructor" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentContractConstructorProduct: Models.UdboProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductContractConstructor: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductContractConstructor'}>
        {}
        <SplitPanel testID='test-id-96622085-19b0-1331-c3f2-6754df7d9f48' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-72982c2e-edd9-b68a-af1e-6defcf405952' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-4c2f17c4-45ba-84f5-27c4-36299f1cd136' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-97b0ea5e-c448-11e7-abc4-cec278b6b50a'>
                        <NavigationBackButton key={"ProductListConstructorNavBackButton"}
                                              testID='test-id-ab908cc8-c448-11e7-abc4-cec278b6b50a' title={false}
                                              onClick={()=> props.navigateProductListBack()}/>
                        <View key={"ProductListConstructorNavBackButtonView"} style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-b0053f74-c448-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-0cc7e222-c217-11e7-abc4-cec278b6b50a"
                                title={util.getProductListTypeName (props.currentContractConstructorProduct.productType)}
                                onExecute={props.navigateProductListBack}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-2dfb1143-3d9a-789d-23c6-dc7f296c927a'>
                        <H2 testID='test-id-524574ef-95aa-0118-ad56-7b6fea1946d7'>
                            { util.getProductTypeName (props.currentContractConstructorProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductContractConstructor