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
    SumText,
    View,
} from 'ufs-mobile-platform'

import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Models, Enums, EnumsCrm} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductContractNso from "../../models/ModelsProductContractNso"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductContractNsoStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {contractNSO} = props.currentContractNsoProduct;
    const xsSize = 12

    const NO_DATA_LABEL = (title: string): React.ReactElement<Label> => (
        <Label
            testID={`${title}-test-id-09189384-0843-2a58-4e48-5be2f0e50f30`}
            header={''}
            block={true}
            text={title}>
            <Text
                style={Styles.productText}
                testID={`${title}-'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328`}>
                { placeholder }
            </Text>
        </Label>
    )

    return contractNSO ? <View testID='test-id-e5226363-3c99-5b73-d9ab-3d6645feacb2' style={Styles.borderBox}><Grid
        testID='test-id-e5226363-3c99-5b73-d9ab-3d6645feacb2'>
        <Row testID='test-id-e9311ed7-3742-7e2f-3b3b-c3b285675b2b'>
            <Col testID='test-id-5c956f89-b83c-3d5e-e166-dfb9831f410d' xs={xsSize}>
                <View testID="test-id-501e292e-c90f-11e7-abc4-cec278b6b50a"
                      style = {Styles.clientProduct}>
                    <Label testID='test-id-38e23571-714c-a41b-0b96-e5af5e6324ef'
                       header={''}
                       text={'Клиент'}
                           block={true}>
                        <Text
                            testID='test-id-38e23571-714c-a41b-0b96-e5af5e6324ef'>
                            {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <Row testID='test-id-579cddae-c5ee-11e7-abc4-cec278b6b50a'>
            <Col testID='test-id-9445059b-c4e7-c7c0-c0a6-c3f44fb03e47' xs={xsSize}>
                <View testID="test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c"
                      style = {Styles.nameProduct}>
                        <Label
                            testID='test-id-b278ba92-f96f-f326-8e65-81117d98a84b'
                            header={''}
                            text={'Название продукта'}
                            block={true}>
                            <Text
                                style = {Styles.nameProduct}
                                testID='test-id-589ea063-708d-9948-1982-0eb638085ef0'>
                                {
                                    contractNSO.depositTypeClassifier
                                        ? contractNSO.depositTypeClassifier.value
                                        : placeholder
                                }
                            </Text>
                        </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-486347d0-c90c-11e7-abc4-cec278b6b50a"
            style = {Styles.horizontalLineView}>
            <HorizontalRule
                        testID='test-id-9b7f8bb6-c5ee-11e7-abc4-cec278b6b50a'/>
        </View>
        <Row testID='test-id-0f724eb1-28a6-7960-8d86-d7fa0a6f6a4b'>
            <Col testID='test-id-34d7cd83-bb85-70f3-8d37-b9377fbf72e7' xs={xsSize / 3}>
                {contractNSO.rate != null ?
                    <SumText
                    label='Ставка'
                    testID='test-id-a9af462c-495f-dbbc-8b0d-4d38e609de7e'
                    value={Number(contractNSO.rate)}
                    small={false}
                    currency={" %"}/> : NO_DATA_LABEL("Ставка")
                }
            </Col>
            <Col testID='test-id-34d7cd83-bb85-70f3-8d37-b9377fbf72e7' xs={xsSize / 3}>
                {contractNSO.depositAmount != null ?
                    <SumText
                        label='Неснижаемый остаток'
                        testID='test-id-a9af462c-495f-dbbc-8b0d-4d38e609de7e'
                        value={Number(contractNSO.depositAmount)}
                        small={false}
                        currency={contractNSO.currencyClassifier
                            ? contractNSO.currencyClassifier.code
                            : placeholder}/> : NO_DATA_LABEL("Неснижаемый остаток")
                }
            </Col>
        </Row>
        <Row testID='test-id-5a5c0ce8-604d-57f6-cfe3-5dcef29c7d40'>
            <Col testID='test-id-abcc5694-e6c3-0761-2c94-2b8116dc9cd1' xs={xsSize / 3}>
                <View testID="test-id-c2fa5a1e-c912-11e7-abc4-cec278b6b50a"
                      style={Styles.dealPeriodDurationView}>
                        <Label testID='test-id-838a4e00-24f8-57bc-7dd1-d865bbda9865'
                           header={''}
                           text={'Срок (дней)'}
                           block={true}>
                            <Text style={Styles.productText}
                                  testID='test-id-c3f09776-6f14-9bd9-cdcf-7da15c45197b'>
                                    {
                                        contractNSO.dealPeriodDuration != null
                                            ? contractNSO.dealPeriodDuration
                                            : placeholder
                                    }
                            </Text>
                        </Label>
                </View>
            </Col>
            <Col testID='test-id-8dc74193-4caf-45c6-815c-3848273fdfa9' xs={xsSize / 3}>
                <View testID="test-id-cb727eb0-c912-11e7-abc4-cec278b6b50a"
                      style={Styles.dealPeriodStartDateView}>
                        <Label testID='test-id-ca02ae89-a398-3d54-06f7-ef14f798aa48' header={''} text={'Дата открытия сделки'}
                               block={true}>
                                <Text style={Styles.productText}
                                      testID='test-id-01db6632-99fb-3d32-5c20-08dd24bf5665'>
                                        {
                                            contractNSO &&
                                            contractNSO.dealPeriodStartDate
                                                ? contractNSO.dealPeriodStartDate.formattedString()
                                                : placeholder
                                        }
                                </Text>
                        </Label>
                </View>
            </Col>
            <Col testID='test-id-8df3c330-ce98-a1d9-ff7f-9ed42a92dc9d' xs={xsSize / 3}>
                <View testID="test-id-d18fefc6-c912-11e7-abc4-cec278b6b50a"
                      style={Styles.dealPeriodEndDateView}>
                        <Label testID='test-id-abe41039-7a65-3216-661f-c275cb5b76bc' header={''}
                               text={'Дата закрытия сделки'}
                               block={true}>
                                <Text style={Styles.productText}
                                      testID='test-id-65d2216a-ccda-fe0e-2263-0b6c62f0d827'>
                                        {
                                            contractNSO && contractNSO.dealPeriodEndDate
                                                ? contractNSO.dealPeriodEndDate.formattedString()
                                                : placeholder
                                        }
                                </Text>
                        </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-629119ac-c90c-11e7-abc4-cec278b6b50a"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-c5fac285-2713-531a-d296-e3cdef3217'/>
        </View>
        <Row testID='test-id-ef9f1f4f-aa3b-cbd7-87a6-5196d4fcc81f'>
            <Col testID='test-id-3ee2b525-0684-cc4d-5caf-d5ed29b90681' xs={xsSize / 3}>
                <Label testID='test-id-da924507-ca8d-7bba-273c-d031099950d5'
                       header={''}
                       text={'Номер счета'}
                       block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-fb285ae0-4776-beb0-26eb-1a6cd58bbcbd'>
                                {contractNSO.acctId &&
                                contractNSO.acctId.formatAccountNumber() ||
                                placeholder}
                        </Text>
                </Label>
            </Col>
            <Col testID='test-id-411c9d79-5c8d-3eb1-c666-e4b4b3b10ed0' xs={xsSize / 3}>
                <Label testID='test-id-7e5fcf1f-233b-87af-6548-16a6eaa51632' header={''}
                       text={'Номер ВСП, где открыт счет'}
                       block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-8566cf33-1c83-e8ad-fdd5-14419c980dbf'>
                            {contractNSO.bankInfo || placeholder}
                        </Text>
                </Label>
            </Col>
            {util.isActiveProductList(props.productListAgreementStatus) == false
                ? <Col testID='test-id-4fe3f219-039a-130e-3b05-39f30acad578' xs={xsSize / 3}>
                        <Label testID='test-id-2ae72cef-79cb-7afc-c685-fcd9d29bcbd5'
                               header={''}
                               text={'Дата закрытия счета'}
                               block={true}>
                                <Text   style={Styles.productText}
                                        testID='test-id-6825ec2b-d98a-8f32-8a29-fd119d8e976d'>
                                        {
                                            contractNSO.depAccCloseDate
                                                ? contractNSO.depAccCloseDate.formattedString()
                                                : placeholder
                                        }
                                </Text>
                        </Label>
                  </Col>
                : null}
        </Row>
        <View
            testID="test-id-75a34fd8-c90c-11e7-abc4-cec278b6b50a"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-1012d0f5-3f94-c3b3-dd40-542cdd93d864'/>
        </View>
        <Row testID='test-id-bf7475a6-125f-c192-d946-6c3b16f237f0'>
            <Col testID='test-id-b273385d-4ae5-dd66-08ce-38438248a60d' xs={xsSize / 3}>
                <Label testID='test-id-56b503e8-3c5e-18b1-b595-5332e6585cec'
                       header={''}
                       text={'Номер договора НСО'}
                       block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-b2f7df61-0414-413f-681a-3a2e5d36f19d'>
                                {contractNSO.dealNum || placeholder}
                        </Text>
                </Label>
            </Col>
            <Col testID='test-id-d20aa037-13f5-4b27-ee51-cb30d1c72099' xs={xsSize / 3}>
                <Label testID='test-id-482ca369-4dc9-5f65-8bf9-4b1dd17372bc'
                       header={''}
                       text={'Статус договора НСО'}
                       block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-1640c08b-e3ee-5a89-4e71-2aeaeaa00258'>
                               {contractNSO.dealStatusDesc || placeholder}
                        </Text>
                </Label>
            </Col>
            <Col testID='test-id-7be2b30f-cc77-2901-2365-4927e9f02e07' xs={xsSize / 3}>
                <Label testID='test-id-e6b5ac8b-ac3c-cd96-e5c9-0c75ffc835d3'
                       header={''}
                       text={'Дата заключения договора НСО'}
                       block={true}>
                        <Text style={Styles.productText}
                              testID='test-id-e5696241-c0b1-6d79-45ce-7fa6ae9b36a9'>
                              {
                                contractNSO && contractNSO.planStartDate
                                    ? contractNSO.planStartDate.formattedString()
                                    : placeholder
                              }
                        </Text>
                </Label>
            </Col>
        </Row>
    </Grid>
    </View> : <View testID='test-id-dbf2adf7-7d1f-cefd-3b5f-1ec7daf38e4f'></View>
}


/*
 * UI stateless functional component "ProductContractNso" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentContractNsoProduct: Models.DepositProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    productListAgreementStatus: Enums.ProductListAgreementStatus,
    testID: string,
    productContextMode: Enums.ProductContextMode,

}

const ProductContractNso: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductContractNso'}>
        {}
        <SplitPanel testID='test-id-c548bf4d-91e0-88e9-bc70-19539f2fedc0' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-dfaa3aa2-904d-855c-7dd3-916377112b04' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-b62f4088-4d80-ffa2-5aa6-3655830eb371' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-1cdd17d2-c5f4-11e7-abc4-cec278b6b50a'>
                        <NavigationBackButton key={"ProductListNSONavBackButton"}
                                              testID='test-id-24a31ab6-c5f4-11e7-abc4-cec278b6b50a' title={false}
                                              onClick={()=> props.navigateProductListBack()}/>
                        <View key={"ProductListNSOTextBackButton"} style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-29521558-c5f4-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-fa881844-c5f3-11e7-abc4-cec278b6b50a"
                                title={props.productContextMode == EnumsCrm.ProductContextMode.Notice ? 'Уведомления' : util.getProductListTypeName(props.currentContractNsoProduct.productType)}
                                onExecute={props.navigateProductListBack}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-7c4dc911-4868-b2b3-9ab0-0804ae3b5276'>
                        <H2 testID='test-id-839c2bf7-d780-2eca-7fb2-1f1b0ae266bd'>
                            { util.getProductTypeName (props.currentContractNsoProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductContractNso