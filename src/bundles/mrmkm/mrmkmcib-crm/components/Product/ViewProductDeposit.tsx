/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    CenterPageHeader,
    Col,
    SumText,
    LeftPageHeader,
    ContentPanel,
    Grid,
    NavigationBackButton,
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

import { Models, Enums, EnumsCrm } from "mrmkmcib-crm"
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"

import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductDeposit from "../../models/ModelsProductDeposit"

import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductDepositStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const { depositProduct } = props.currentDepositProduct;
    const xsSize = 12
    const NO_DATA_LABEL = (title: string): React.ReactElement<Label> => (
        <Label
            testID={`${title}-test-id-68419292-c924-11e7-abc4-cec278b6b50a`}
            header={''}
            block={true}
            text={title}>
            <Text
                testID={`${title}-'test-id-65170a48-c924-11e7-abc4-cec278b6b50a`}>
                { placeholder }
            </Text>
        </Label>
    )
    return depositProduct ? <View testID='test-id-55aadd77-14d9-a5ef-4678-c91c07e612ee' style={Styles.borderBox}><Grid
        testID='test-id-55aadd77-14d9-a5ef-4678-c91c07e612ee'>
        <Row testID='test-id-63288d51-69e9-dc4b-1989-33f886bc7635'>
            <Col testID='test-id-352877a4-f798-1278-88d0-2542d4264338' xs={xsSize}>
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
        <Row testID='test-id-a0b67c03-cfb2-3817-4454-a5fe3ce0fc99'>
            <Col testID='test-id-863ccafa-4a4e-23c3-2b78-e854ab06d34f' xs={xsSize}>
                <View testID="test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c"
                      style = {Styles.nameProduct}>
                    <Label testID='test-id-33c9273b-86ca-3838-0dbe-f8e4ad45cfd6' header={''} text={'Название депозита'}
                           block={true}>
                        <Text
                            testID='test-id-d22c6156-abe8-07e8-04e7-6e93d6b99178'>
                            {depositProduct.depositTypeClassifier
                                ? depositProduct.depositTypeClassifier.value
                                : placeholder}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-7a24b018-cf04-4df7-91cd-51a169f8bea7"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-c62422fb-d927-0a02-f1ae-896b531dc486'/>
        </View>
        <Row testID='test-id-c072b6d9-6dcc-fc56-f22f-4766d3e4e3c8'>
            <Col testID='test-id-7b9da3d6-d4d2-5959-7bc4-5911e0931e12'
                 xs={xsSize / 3}>
                {depositProduct.rate != null ?
                    <SumText label={'Ставка'}
                             small={false}
                             testID='test-id-21fd7b2e-b7ac-e847-0a99-d27788765308'
                             value={Number(depositProduct.rate)}
                             currency={" %"}>
                    </SumText> : NO_DATA_LABEL('Ставка')
                }
            </Col>
            <Col testID='test-id-de1dc7e4-6e4d-7620-bcf2-1e3891c5fbf7'
                 xs={xsSize / 3}>
                {depositProduct.depositAmount != null ?
                    <SumText label={'Сумма'}
                             small={false}
                             testID='test-id-465dd26e-f793-a72b-a477-b45644186782'
                             value={Number(depositProduct.depositAmount)}
                             currency={depositProduct.currencyClassifier.code}>
                    </SumText> : NO_DATA_LABEL('Сумма')
                }
            </Col>
            <Col testID='test-id-45b74289-86bb-cda9-3e99-e1a6209151eb'
                 xs={xsSize / 3}>
                {depositProduct.depositAmountRest != null ?
                    <SumText
                        small={false}
                        label={'Текущий остаток'}
                        testID='test-id-837dec3a-cd14-c99b-16a8-49e815cdd917'
                        value={Number(depositProduct.depositAmountRest)}
                        currency={depositProduct.currencyClassifier.code}>
                    </SumText> : NO_DATA_LABEL('Текущий остаток')
                }
            </Col>
        </Row>
        <Row testID='test-id-17d634a9-1b19-90df-2149-9c931fa64e16'>
            <Col testID='test-id-e9530bd6-706d-fd1d-b811-ba706ce956c8'
                 xs={xsSize / 3}>
                <View testID="test-id-0f4efad2-c753-43e8-84e2-2da85325692c"
                      style={Styles.dealPeriodDurationView}>
                        <Label testID='test-id-20f58fbc-c21a-11e7-abc4-cec278b6b50a'
                               header={''}
                               text={'Срок(дней)'}
                               block={true}>
                            <Text
                                testID='test-id-1d2efe40-c21a-11e7-abc4-cec278b6b50a'>
                                {depositProduct.dealPeriodDuration != null
                                    ? depositProduct.dealPeriodDuration
                                    : placeholder}
                            </Text>
                        </Label>
                </View>
            </Col>
            <Col testID='test-id-197e6d80-c21a-11e7-abc4-cec278b6b50a'
                 xs={xsSize / 3}>
                <View testID="test-id-2e058a76-e454-4eab-b84b-3562776d047e"
                      style={Styles.dealPeriodStartDateView}>
                        <Label testID='test-id-13e7899c-c21a-11e7-abc4-cec278b6b50a'
                               header={''}
                               text={'Дата начала'}
                               block={true}>
                            <Text
                                testID='test-id-1062ee60-c21a-11e7-abc4-cec278b6b50a'>
                                    {depositProduct.dealPeriodStartDate &&
                                    depositProduct.dealPeriodStartDate.formattedString() ||
                                    placeholder}
                            </Text>
                        </Label>
                </View>
            </Col>
            <Col testID='test-id-85a9c5a4-c21a-11e7-abc4-cec278b6b50a'
                 xs={xsSize / 3}>
                <View testID="test-id-17cdcd94-9850-4735-b5e3-7a83ccd425f2"
                      style={Styles.dealPeriodEndDateView}>
                        <Label testID='test-id-81daa8a8-c21a-11e7-abc4-cec278b6b50a'
                               header={''}
                               text={'Дата окончания'}
                               block={true}>
                            <Text
                                testID='test-id-7c592800-c21a-11e7-abc4-cec278b6b50a'>
                                    {depositProduct.dealPeriodEndDate &&
                                    depositProduct.dealPeriodEndDate.formattedString() ||
                                    placeholder}
                            </Text>
                        </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-57278f53-bccb-4f70-97e5-da0b5f2ceb8a"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-5d558261-d82a-4a87-b3d7-f89df7ab0010'/>
        </View>
        <Row testID='test-id-17d634a9-1b19-90df-2149-9c931fa64e16'>
            <Col testID='test-id-e9530bd6-706d-fd1d-b811-ba706ce956c8'
                 xs={xsSize / 3}>
                <Label testID='test-id-fff22110-9168-d315-6c0c-a0a3b4393fde'
                       header={''}
                       text={'Номер счета'}
                       block={true}>
                    <Text
                        testID='test-id-74af88ce-b741-c99c-f1c0-aaf698547f89'>
                        {depositProduct.acctId || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-a840a6ed-bd9d-e0cc-24ca-739b9907c655'
                 xs={xsSize / 3}>
                <Label testID='test-id-52535f28-3474-f869-f116-3bda47db5c5b'
                       header={''}
                       text={'Номер ВСП, где открыт счет'}
                       block={true}>
                    <Text
                        testID='test-id-8f0404e3-a3eb-2335-e895-76a09692a9b2'>
                        {depositProduct.bankInfo || placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
        <View
            testID="test-id-7a77ef78-789c-4318-b8a5-86ceb88ea2e5"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-6ed74e2f-5c45-757e-7003-8d5bb479a10b'/>
        </View>
        <Row testID='test-id-5cadd520-6f1d-f925-d680-bf04bb8b0db8'>
            <Col testID='test-id-9a5cd4dd-e493-bf2b-9757-9784d71a3fd1'
                 xs={xsSize/3}>
                <Label testID='test-id-e555ac2c-28db-2053-4697-bd37631b53f9'
                       header={''}
                       text={'Номер договора'}
                       block={true}>
                    <Text
                        testID='test-id-0c8783e0-bb50-bb59-b30f-55e874dfc6d6'>
                        {depositProduct.dealNum || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-13547109-f415-2fb2-a595-46ae28de0959'
                 xs={xsSize/3}>
                <Label testID='test-id-a11be7d0-2d8e-04a5-a741-c7a39c2db6f6'
                       header={''}
                       text={'Статус договора'}
                       block={true}>
                    <Text
                        testID='test-id-371910a0-10be-7bd5-e619-7738996a61e9'>
                        {depositProduct.dealStatusDesc || placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
    </Grid>
    </View> : <View testID='test-id-7c268719-4df7-b65e-f122-46e95323c558'></View>
}


/*
 * UI stateless functional component "ProductDeposit" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentDepositProduct: Models.DepositProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string,
    productContextMode: Enums.ProductContextMode,

}

const ViewProductDeposit: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductDeposit'}>
        {}
        <SplitPanel testID='test-id-0e881736-aaa0-685f-1cc1-3d2c8c23171d' id={"ProductDeposit"}>
            <ContentPanel testID='test-id-7a94060b-ac14-14f9-2894-48df9c6ab3dd' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-8bbbb9ab-651e-e3b6-8b63-1e8811d45033' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-ebc78ad8-c21a-11e7-abc4-cec278b6b50a'>
                        <NavigationBackButton key={"DepositProductListNavBackButton"}
                                              testID='test-id-d7c9b154-c216-11e7-abc4-cec278b6b50a'
                                              title={false}
                                              onClick={props.navigateProductListBack}/>
                            <View key={"DepositProductListNavBackButtonView"}
                                  style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-ef379802-c21a-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-d2419496-c21a-11e7-abc4-cec278b6b50a"
                                    title={props.productContextMode == EnumsCrm.ProductContextMode.Notice ? 'Уведомления' : util.getProductListTypeName(props.currentDepositProduct.productType)}
                                    onExecute={props.navigateProductListBack}
                                />
                            </View>

                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-565f1f60-c022-b835-caa5-7f96d4769ff9'>
                        <H2 testID='test-id-590dc326-a104-7d66-d3f0-93dca5ac16ec'>
                            { util.getProductTypeName (props.currentDepositProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ViewProductDeposit