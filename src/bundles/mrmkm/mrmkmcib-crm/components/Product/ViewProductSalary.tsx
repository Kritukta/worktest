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
    NavigationBackButton,
    HorizontalRule,
    Label,
    NavigationTextButton,
    Page,
    LeftPageHeader,
    RightPageHeader,
    Row,
    SumText,
    SplitPanel,
    Text,
    View,
} from 'ufs-mobile-platform'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductSalary from "../../models/ModelsProductSalary"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductSalaryStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {salaryProduct} = props.currentSalaryProduct;
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
    return salaryProduct ? <View testID='test-id-56895fd3-4f42-8e46-98dd-d6e75a41fb1d' style={Styles.borderBox}><Grid
        testID='test-id-56895fd3-4f42-8e46-98dd-d6e75a41fb1d'>
        <Row testID='test-id-62dc97c3-c760-22a7-e18e-f56fce92b14e'>
            <Col testID='test-id-d9109fd1-4556-8531-f103-049601e6ec9a' xs={xsSize}>
                <View testID="test-id-4163f0de-c91f-11e7-abc4-cec278b6b50a"
                      style = {Styles.clientProduct}>
                    <Label  testID='test-id-b55042ac-69bd-8158-2122-b934cc1aad01'
                            header={''}
                            text={'Клиент'}
                            block={true}>
                        <Text
                            testID='test-id-b55042ac-69bd-8158-2122-b934cc1aad01'>
                            {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-00a0816e-c930-11e7-abc4-cec278b6b50a"
            style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-511c2bac-4e22-163a-41bf-3493e8fa6223'/>
        </View>
        <Row testID='test-id-9bfa918d-410f-1292-a714-8b44d6aa127e'>
            <Col testID='test-id-1bc8ba10-34dd-976c-c8a6-fb4918696a16' xs={xsSize / 4}>
                <Label testID='test-id-f0a787ad-77a4-a1d5-34a3-bde0a846f77b' header={''}
                       text={'Плановое количество получателей'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-9f92ccf7-3f04-7edd-3e5b-8be7619a0121'>
                            {salaryProduct.employeesCount != null
                                ? salaryProduct.employeesCount.sumString()
                                : placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-f359d323-339f-e3ea-1567-857c3e19f6d8' xs={xsSize / 4}>
                <Label testID='test-id-d51a925a-df4f-6c10-0581-731439f4815b' header={''}
                       text={'Общая численность зарплатных карт'} block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-6328138b-46e0-d1a9-3fe4-5d993d97c479'>
                            {salaryProduct.totalCards != null
                                ? salaryProduct.totalCards.sumString()
                                : placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-4b03d976-fbc3-ab42-3c79-5bb72dead680' xs={xsSize/2}>
                { salaryProduct.totalSum != null ?
                    <SumText
                        testID='test-id-44b1347e-630a-6769-119d-48400aeacd5e'
                        value={Number(salaryProduct.totalSum)}
                        label={'Планируемая сумма зачислений в месяц'}
                        small={false}
                        currency={"RUR"}
                    /> : NO_DATA_LABEL('Планируемая сумма зачислений в месяц')
                }
            </Col>
        </Row>
        <HorizontalRule testID='test-id-1e5e70f5-336b-017d-b47e-b0d238922ae4'/>
        <Row testID='test-id-8fc10d45-a9ad-cf18-eedd-2864d1991134'>
            <Col testID='test-id-c3bd8354-0d16-b9ca-c884-f106a8aac6f8' xs={xsSize/4}>
                <Label testID='test-id-dff4a58d-93f4-1873-2447-a33bd604393c'
                       header={''} text={'Номер договора'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-8cca2fe7-cd2a-a8aa-3a54-db5837d99cf3'>
                        {salaryProduct.number || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-a74f0d72-5cf7-12a0-d54a-df1e5deb63bd' xs={xsSize/4}>
                <Label testID='test-id-e7de4f21-2e3d-9f0c-839d-8b79ab094c01'
                       header={''}
                       text={'Статус договора'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-ae6059eb-8667-5938-acb3-23a5973dd69e'>
                        {salaryProduct.status || placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
    </Grid>
    </View> : <View testID='test-id-260aa1c5-baf4-e0f3-c7af-46dfe7d26c7c'></View>
}


/*
 * UI stateless functional component "ProductSalary" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentSalaryProduct: Models.SalaryProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductSalary: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductSalary'}>
        {}
        <SplitPanel testID='test-id-9b839218-16bd-b113-3048-4d51ee9d8583' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-55937c26-7c9a-ada4-b1fc-affe4e8fcd62' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-3b3aed9c-ed1d-4b28-7d99-f899c04425a8' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-2dc234dd-3ed7-8181-42dd-80b5faf97fbc'>
                        <NavigationBackButton key={"ProductSalaryNavBackButton"}
                                              testID='test-id-a224ee58-83ba-630b-18af-0a35d73697ba' title={false}
                                              onClick={props.navigateProductListBack}/>
                        <View key={"ProductSalaryNavBackText"} style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-5523d6cc-c2f1-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-5a5ba75a-c2f1-11e7-abc4-cec278b6b50a"
                                title={util.getProductListTypeName(props.currentSalaryProduct.productType)}
                                onExecute={()=> props.navigateProductListBack()}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-a34b0a0a-0624-17bd-7ce4-9d856c183bc8'>
                        <H2 testID='test-id-f5cb8e24-c7eb-1f5f-edf9-65fd875a9b97'>
                            { util.getProductTypeName (props.currentSalaryProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductSalary