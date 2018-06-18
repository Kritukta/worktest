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
import { Enums } from "mrmkmcib-crm"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductTariffPlan from "../../models/ModelsProductTariffPlan"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductTariffPlanStyles'


import * as util from '../../common/Util'

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных'
    const {tariffPlanProduct} = props.currentTariffPlanProduct;
    const xsSize = 12
    return <View testID='test-id-6b014ba9-74e8-aef2-7f54-57eeb29b5c2f' style={Styles.borderBox}>
        {tariffPlanProduct && <Grid testID='test-id-5bbd665e-d8ba-11e7-9296-cec278b6b50a'>
            {util.isActiveProductList(props.productListAgreementStatus) == false ?
                <Row testID='test-id-573ae7aa-d8ba-11e7-9296-cec278b6b50a'>
                    <Col testID='test-id-4fc4a4f2-d8ba-11e7-9296-cec278b6b50a'
                         xs={xsSize}>
                        <View testID="test-id-47c6ce6a-d8ba-11e7-9296-cec278b6b50a"
                              style = {Styles.closedProductView}>
                            <Text testID='test-id-a97ed7f0-d8bb-11e7-9296-cec278b6b50a'
                                  style = {Styles.closedProductText}>
                                Продукт закрыт
                            </Text>
                        </View>
                    </Col>
                </Row> : null}
            <Row testID='test-id-013b9b55-33f9-320f-b67f-0c26745999c2'>
                <Col testID='test-id-e9a2f464-16b9-ac62-eec9-809007935a19'
                     xs={xsSize}>
                    <View testID="test-id-ef6a2b78-c927-11e7-abc4-cec278b6b50a"
                          style = {Styles.clientProduct}>
                        <Label testID='test-id-e146e658-c927-11e7-abc4-cec278b6b50a'
                               header={''}
                               text={'Клиент'}
                               block={true}>
                            <Text
                                testID='test-id-e5978924-c927-11e7-abc4-cec278b6b50a'>
                                {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                            </Text>
                        </Label>
                    </View>
                </Col>
            </Row>
            <Row testID='test-id-7c2e905d-eb17-cd3a-0673-ae768225c5b9'>
                <Col testID='test-id-76c4f43f-8d96-fef9-2432-381cb1a1c756' xs={xsSize}>
                    <View testID="test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c"
                          style = {Styles.nameProduct}>
                            <Label testID='test-id-635ff3cc-9c8a-5fe8-725a-f1777cfc89e7'
                                   header={''} text={'Название тарифного плана'}
                                   block={true}>
                                <Text
                                    testID='test-id-ec5de321-94a7-0ed5-dc56-d60e2b133026'>
                                    {tariffPlanProduct.name || placeholder}
                                </Text>
                            </Label>
                    </View>
                </Col>
            </Row>
            <View
                testID="test-id-b300aeb8-c928-11e7-abc4-cec278b6b50a"
                style = {Styles.horizontalLineView}>
                    <HorizontalRule testID='test-id-fad79588-aa9e-bc3c-977e-ed7141f6dae9'/>
            </View>
            <Row testID='test-id-a6359e29-2a60-6141-3d10-814f27bb264e'>
                <Col testID='test-id-bdc17e7a-6c03-057f-90cc-f14436d0ed88'
                     xs={xsSize / 3}>
                    <Label testID='test-id-d37e47f5-13bd-83db-7e1f-472954dc1fde'
                           header={''}
                           text={'Тип тарифного плана'}
                           block={true}>
                        <Text
                            testID='test-id-a3102d97-4bac-4be3-d39a-82f922f74a7d'>
                            {tariffPlanProduct.typeClassifier &&
                            tariffPlanProduct.typeClassifier.value ||
                            placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-3bfc1c34-74ab-0196-5948-76cc56a9862e' xs={xsSize / 4}>
                    <Label testID='test-id-9d5ed16c-cf78-c6f5-ed34-2f85f7cf323f'
                           header={''}
                           text={'Дата начала'}
                           block={true}>
                        <Text
                            testID='test-id-011a4676-f73c-fa9f-e886-10d108c79df7'>
                            {tariffPlanProduct.startDate  &&
                            tariffPlanProduct.startDate.formattedString() ||
                            placeholder}
                        </Text>
                    </Label>
                </Col>
                <Col testID='test-id-152b65f9-9875-6e30-1b42-688a34ee41c8' xs={xsSize / 4}>
                    <Label testID='test-id-0461ad88-5a32-1c41-c97d-ff2c1dd693a2'
                           header={''}
                           text={'Дата окончания'}
                           block={true}>
                        <Text
                            testID='test-id-94d5e6df-1d9b-1b29-60d9-19337b38d9f9'>
                            {tariffPlanProduct.endDate &&
                            tariffPlanProduct.endDate.formattedString() ||
                            placeholder}
                        </Text>
                    </Label>
                </Col>
            </Row>
        </Grid>}
    </View>

}


/*
 * UI stateless functional component "ProductTariffPlan" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentTariffPlanProduct: Models.SettlementAgreementProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    productListAgreementStatus: Enums.ProductListAgreementStatus,

    testID: string

}

const ProductTariffPlan: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductTariffPlan'}>
        {}
        <SplitPanel testID='test-id-f0091be6-1c8a-b5b7-40df-78512918ffd1' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-a530185c-35d2-c71f-16c5-043b456ca85c' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-ebd7cfb1-fc52-dc20-bf2d-f87673daac44' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-7d78c0b2-c92a-11e7-abc4-cec278b6b50a'>
                        <NavigationBackButton key={"TarifProductListNavBackButton"}
                                              testID='test-id-81bd3748-c92a-11e7-abc4-cec278b6b50a'
                                              title={false}
                                              onClick={()=> props.navigateProductListBack()}/>
                        <View key={"TarifProductListTextBackButton"} style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-29521558-c5f4-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-874a1640-c92a-11e7-abc4-cec278b6b50a"
                                title={'Тарифные планы'}
                                onExecute={props.navigateProductListBack}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-5b88f526-4615-e950-a9e8-c9ed75329680'>
                        <H2 testID='test-id-5d36ce78-48d2-75f0-362c-aca801878b50'>
                            { util.getProductTypeName (props.currentTariffPlanProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductTariffPlan