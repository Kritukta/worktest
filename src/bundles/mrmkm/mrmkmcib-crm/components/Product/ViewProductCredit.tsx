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
    NavigationTextButton,
    Page,
    RightPageHeader,
    Row,
    SplitPanel,
    Text,
    View,
} from 'ufs-mobile-platform'
import {Models} from "mrmkmcib-crm"

import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductCreditStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {creditProduct} = props.data;
    const xsSize = 6
    return creditProduct ? <View testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' style={Styles.borderBox}><Grid
        testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
        <Row testID='test-id-84ecc390-2ddb-1321-81f7-3c759f4ca2fb'>
            <Col testID='test-id-daa94b45-e797-baab-9141-7f6a43f747ff' xs={xsSize}>
                <View testID='test-id-9e4a9cc1-b015-a4a1-9fa2-9b54e4d463b9'><Text
                    testID='test-id-9e4a9cc1-b015-a4a1-9fa2-9b54e4d463b9'
                    style={Styles.caption}>{props.currentCustomerManaged.shortName || placeholder}</Text></View>
            </Col>
        </Row>
        <Row testID='test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f'>
            <Col testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' xs={xsSize}>
                <Label testID='test-id-df2f6035-1a20-73dd-d6b0-811eae86909d' header={''} text={'Название продукта'}
                       block={true}>
                    <Text
                        testID='test-id-d1289c55-94a9-0a36-9292-e1e03d85f6cd'>{creditProduct.nameClassifier ? creditProduct.nameClassifier.value : placeholder}</Text>
                </Label>
            </Col>
        </Row>
        <HorizontalRule testID='test-id-aa09ff44-5b5f-0f14-3289-a44978ddf3e4'/>
        <Row testID='test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476'>
            <Col testID='test-id-074204b3-1fde-5e11-70b1-2abe122d91ff' xs={xsSize / 3}>
                <Label testID='test-id-75ef73bc-2ba1-35ca-5300-e3821040994c' header={''} text={'Дата заключения'}
                       block={true}>
                    <Text
                        testID='test-id-66ae4589-faa2-36ec-a507-13b140c466c9'>{creditProduct.openDate || placeholder}</Text>
                </Label>
            </Col>
            <Col testID='test-id-6fd8048d-24e5-7d78-7149-d58c3187a5d1' xs={xsSize / 3}>
                <Label testID='test-id-88b932a6-61dd-aafe-30a3-71f6e1306659' header={''} text={'Тип карты'}
                       block={true}>
                    <Text
                        testID='test-id-a18d25bb-ea9f-6321-ba90-5e165b0df78b'>{creditProduct.term || placeholder}</Text>
                </Label>
            </Col>
            <Col testID='test-id-7b862656-701b-d2a2-908e-21da8d427f98' xs={xsSize / 3}>
                <Label testID='test-id-dcb82a30-2e0a-0747-ec9e-e301ed2ebc10' header={''} text={'Дата окончания'}
                       block={true}>
                    <Text
                        testID='test-id-487a4e29-3c3e-0b4e-d07c-3c8c40366e6d'>{creditProduct.closeDate || placeholder}</Text>
                </Label>
            </Col>
        </Row>
        <Row testID='test-id-fb794bcb-615b-fbce-3593-a23b19fd9624'>
            <Col testID='test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b' xs={xsSize / 3}>
                <Label testID='test-id-09189384-0843-2a58-4e48-5be2f0e50f30' header={''}
                       text={'Полная сумма задолжности'} block={true}>
                    <Text
                        testID='test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328'>{creditProduct.debtSum || placeholder} {creditProduct.currencyClassifier ? creditProduct.currencyClassifier.code : placeholder}</Text>
                </Label>
            </Col>
            <Col testID='test-id-398137b1-33db-8e27-ff58-abd5bcdde762' xs={xsSize / 3}>
                <Label testID='test-id-4f6ec6c7-57ae-9e3d-b606-81d9621d066a' header={''} text={'Сумма кредита'}
                               block={true}>
                <Text
                    testID='test-id-f8472edd-563a-699a-cafd-5c2c2bec48e4'>{creditProduct.sum || placeholder} {creditProduct.currencyClassifier ? creditProduct.currencyClassifier.code : placeholder}</Text>

            </Label>
            </Col>
            <Col testID='test-id-e358e512-bc8f-7c14-d377-0da0f64aa226' xs={xsSize / 3}>
                <Label testID='test-id-5935f79f-bee6-da0a-c888-a86c3533987e' header={''} text={'Ставка'} block={true}>
                    <Text
                        testID='test-id-c7e7dbad-39ec-78e2-8edf-70098257402c'>{creditProduct.rate || placeholder}</Text>
                </Label>
            </Col>
        </Row>
        <HorizontalRule testID='test-id-dfa916d6-3f27-6269-d709-c7354abdd284'/>
        <Row testID='test-id-e7f3a5fc-e07f-37d6-836a-153ecf197fc7'>
            <Col testID='test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118' xs={xsSize}>
                <Label testID='test-id-b5f6c4b2-c63e-eec6-c240-906d3548e1a2' header={''} text={'Номер договора'}
                       block={true}>
                    <Text
                        testID='test-id-5db4903a-5e75-d0a3-f539-78a2c8e1659c'>{creditProduct.contractNumber || placeholder}</Text>
                </Label>
            </Col>
        </Row>
        <HorizontalRule testID='test-id-736e7634-0fa8-34f4-c815-baf70c1b37bd'/>
        <Row testID='test-id-d6fafdfe-1e22-4b9f-66d5-f0ab4e716ce1'>
            <Col testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b' xs={xsSize}>
                <Label testID='test-id-2c913e0e-a8b0-db68-95e0-6f8ebd17b428' header={''}
                       text={'Статус кредитного договора'} block={true}>
                    <Text
                        testID='test-id-1cfdcf3f-0662-a7bf-2dcf-27e0c2418413'>{creditProduct.status || placeholder}</Text>
                </Label>
            </Col>
        </Row>
    </Grid>
    </View> : <View testID='test-id-26eabd79-731a-60f7-cf41-627f501e7747'></View>
}


/*
 * UI stateless functional component "ProductCredit" used in "Product" screen. (Deprecated) Product details component.
 */

export interface IProps {
    currentCustomerManaged: Models.CustomerManaged,
    data: Models.CreditProduct,
    onTapClose: ModelsProduct.PERFORM_HIDE_PRODUCT,

    testID: string
}

const ProductCredit: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductCredit'}>
        {}
        <SplitPanel testID='test-id-892a3e4a-cb89-833d-a1c1-a427160c08ed' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-6ae991e8-ee21-de4d-bcfb-b5438452cd5e' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-021ac066-bc71-7f63-31ee-723e9a76e0a9' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <RightPageHeader testID='test-id-672b006e-927d-da8c-167a-0ca21ea4b300'>
                        <NavigationTextButton testID='test-id-cc2ebabf-0830-396c-fdd3-1f4c23dc7ac6' title={"Готово"}
                                              onExecute={props.onTapClose}/>
                    </RightPageHeader>
                    <CenterPageHeader testID='test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec'>
                        <H2 testID='test-id-6fc1df7a-8cff-746a-0fef-654a99497922'>{util.getProductTypeName(props.data.productType)}</H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductCredit