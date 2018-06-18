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
import * as ModelsProductDbo from "../../models/ModelsProductDbo"
import * as ModelsProduct from "../../models/ModelsProduct"

import Styles from './styles/ProductDboStyles'


import * as util from '../../common/Util'

const getProductSystemDboSpadBankClient = (props: IProps): React.ReactElement<Grid> => {
    const placeholder = 'Нет данных'
    const {dboProduct} = props.currentDboProduct;
    const authorizedPersonList = dboProduct && Array.isArray(dboProduct.authorizedPerson)
        ? dboProduct.authorizedPerson
            .map((value: string, index: number): React.ReactElement<Text> | null =>
                <Text
                    key = {`authorizedPerson-${index}`}
                    style={Styles.authorizedPersonText}
                    testID={`${index}-test-id-0844645f-67e2-bc9e-d64e-8c4ad40ef9ed-${index}`}>
                    {value}
                </Text>)
        : []

    const xsSize = 12
    return <Grid
        testID='test-id-bad4c5ed-8f03-7bf8-de68-8b0df7a6c303'>
        <Row testID='test-id-9af814da-c8f3-2d7f-33fd-01b92e957e5a'>
            <Col testID='test-id-9fafd00e-b4e1-4bbf-076d-08e2abc29a77' xs={xsSize}>
                <View testID="test-id-b8ed50f5-4965-4085-8472-b2782d689618"
                      style = {Styles.clientProduct}>
                    <Label testID='test-id-91376d1c-4ecd-462b-8f2f-a934ada20385' header={''} text={'Клиент'} block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-5831b51f-e988-4326-bdf2-977fb4eac771'>
                            {util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <Row testID='test-id-5db8e7ba-f784-11e7-8c3f-9a214cf093ae'>
            <Col testID='test-id-d4c73f2e-c09e-5869-84fb-c45481f6eed0' xs={xsSize}>
                <View testID="test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c"
                      style = {Styles.nameSystem}>
                    <Label testID='test-id-0e308f6f-c806-f36c-3845-7d4a05a2663a' header={''} text={'Система ДБО'}
                           block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-061650b1-f4bc-4373-f438-eec3791182b4'>
                            {dboProduct &&
                            dboProduct.systemClassifier.value ||
                            placeholder}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-59dfc884-f784-11e7-8c3f-9a214cf093ae"
            style = {Styles.horizontalLineView}>
            <HorizontalRule testID='test-id-5370743a-f784-11e7-8c3f-9a214cf093ae'/>
        </View>
        <Row testID='test-id-6a0ba9b2-f784-11e7-8c3f-9a214cf093ae'>
            {dboProduct &&
             dboProduct.lastActionDate ? <Col testID='test-id-86f4fcd4a-f784-11e7-8c3f-9a214cf093ae'
                 xs={xsSize / 4}>
                <Label testID='test-id-7416b23a-f784-11e7-8c3f-9a214cf093ae'
                       header={''} text={'Дата последней операции'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-78fc64a2-f784-11e7-8c3f-9a214cf093ae'>
                        {dboProduct &&
                         dboProduct.lastActionDate &&
                         dboProduct.lastActionDate.formattedString() ||
                         placeholder}
                    </Text>
                </Label>
            </Col> : null}
            <Col testID='test-id-a203c404-c20e-11e7-abc4-cec278b6b50a' xs={xsSize / 4}>
                <Label testID='test-id-a6dc83c6-c20e-11e7-abc4-cec278b6b50a'
                       header={''}
                       text={'Дата приостановления'} block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-abfa69cc-c20e-11e7-abc4-cec278b6b50a'>
                        {dboProduct &&
                        dboProduct.stopDate &&
                        dboProduct.stopDate.formattedString() ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
        <View
            testID="test-id-9361ada5-3d86-42e2-aa2c-3d8d657ff633"
            style = {Styles.horizontalLineView}>
            <HorizontalRule testID='test-id-02f4fa36-c20e-11e7-abc4-cec278b6b50a'/>
        </View>
        <Row testID='test-id-c063d0b0-9fa9-fc67-963e-e234162dd0a5'>
            <Col testID='test-id-839f5028-c20e-11e7-abc4-cec278b6b50a'
                 xs={xsSize / 4}>
                <Label testID='test-id-7ed8d546-c20e-11e7-abc4-cec278b6b50a'
                       header={''} text={'Номер договора'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-88aecbd4-c20e-11e7-abc4-cec278b6b50a'>
                        {dboProduct && dboProduct.number || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-9b9af2a5-8cca-9546-5cba-7d9ef603b2d8'
                 xs={xsSize / 4}>
                <Label testID='test-id-fd95c377-f409-4dff-a0eb-8f46562e71dd'
                       header={''}
                       text={'Статус договора'}
                       block={true}>
                    <Text
                        style={dboProduct && dboProduct.isActiveAgreement == false ? Styles.dboStatusClose : {}}
                        testID='test-id-66fa283d-edca-0e10-487d-de3df76e8658'>
                        {dboProduct &&
                        dboProduct.status ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-87a356d2-ab06-86f0-998e-021a8632c585' xs={xsSize / 4}>
                <Label testID='test-id-8176a1ef-7d3f-50fc-8c80-363509be9513' header={''}
                       text={'Дата заключения договора'} block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-ba6269ef-fcbf-ef11-c89b-02680015ebc6'>
                        {dboProduct &&
                        dboProduct.openDate &&
                        dboProduct.openDate.formattedString() ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-a203c404-c20e-11e7-abc4-cec278b6b50a' xs={xsSize / 4}>
                <Label testID='test-id-a6dc83c6-c20e-11e7-abc4-cec278b6b50a'
                       header={''}
                       text={'Дата расторжения'} block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-abfa69cc-c20e-11e7-abc4-cec278b6b50a'>
                        {dboProduct &&
                        dboProduct.endDate &&
                        dboProduct.endDate.formattedString() ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
        </Row>
        {   authorizedPersonList.length > 0
            ?  <View
                testID="test-id-7c0e7cc4-f094-4477-9e7c-94d9c44abce9"
                style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-b6508759-5b76-8fb6-c410-0429250e117a'/>
            </View>
            : null
        }
        {   authorizedPersonList.length > 0 ?
            <Row testID='test-id-099717e1-a688-fbca-f88a-fc7920b7d2ab'>
                <Col testID='test-id-c2cf3dec-e1f1-245e-98e1-099d8cbf76fe' xs={xsSize}>
                    <Text
                        style={Styles.authorizedPersonTitle}
                        testID='test-id-f3a78565-97a9-6aee-c08d-6e62f52f2691'>
                        {'Список уполномоченных лиц'}
                    </Text>
                    {authorizedPersonList}
                </Col>
            </Row>
            : null
        }
    </Grid>

}
const getProductSystemDboSbbol = (props: IProps): React.ReactElement<Grid> => {
    const placeholder = 'Нет данных'
    const {dboProduct} = props.currentDboProduct;
    const authorizedPersonList = dboProduct && Array.isArray(dboProduct.authorizedPerson)
        ? dboProduct.authorizedPerson
            .map((value: string, index: number): React.ReactElement<Text> | null =>
                <Text
                    key = {`authorizedPerson-${index}`}
                    style={Styles.authorizedPersonText}
                    testID={`${index}-test-id-0844645f-67e2-bc9e-d64e-8c4ad40ef9ed-${index}`}>
                    {value}
                </Text>)
        : []

    const xsSize = 12
    return <Grid
        testID='test-id-bad4c5ed-8f03-7bf8-de68-8b0df7a6c303'>
        <Row testID='test-id-9af814da-c8f3-2d7f-33fd-01b92e957e5a'>
            <Col testID='test-id-9fafd00e-b4e1-4bbf-076d-08e2abc29a77' xs={xsSize}>
                <View testID="test-id-b8ed50f5-4965-4085-8472-b2782d689618"
                      style = {Styles.clientProduct}>
                    <Label testID='test-id-91376d1c-4ecd-462b-8f2f-a934ada20385' header={''} text={'Клиент'} block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-5831b51f-e988-4326-bdf2-977fb4eac771'>
                            {props.currentCustomerManaged.name ||
                            props.currentCustomerManaged.shortName       ||
                            placeholder}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <Row testID='test-id-6df671fe-c644-e838-9360-34c6cc927afe'>
            <Col testID='test-id-d4c73f2e-c09e-5869-84fb-c45481f6eed0' xs={xsSize}>
                <View testID="test-id-7489843e-97a6-4be9-9c81-3b6449ccdf6c"
                      style = {Styles.nameSystem}>
                    <Label testID='test-id-0e308f6f-c806-f36c-3845-7d4a05a2663a' header={''} text={'Система ДБО'}
                           block={true}>
                        <Text
                            style={Styles.productText}
                            testID='test-id-061650b1-f4bc-4373-f438-eec3791182b4'>
                            {dboProduct &&
                            dboProduct.systemClassifier.value ||
                            placeholder}
                        </Text>
                    </Label>
                </View>
            </Col>
        </Row>
        <View
            testID="test-id-9361ada5-3d86-42e2-aa2c-3d8d657ff633"
            style = {Styles.horizontalLineView}>
            <HorizontalRule testID='test-id-02f4fa36-c20e-11e7-abc4-cec278b6b50a'/>
        </View>
        <Row testID='test-id-c063d0b0-9fa9-fc67-963e-e234162dd0a5'>
            <Col testID='test-id-839f5028-c20e-11e7-abc4-cec278b6b50a'
                 xs={xsSize / 4}>
                <Label testID='test-id-7ed8d546-c20e-11e7-abc4-cec278b6b50a'
                       header={''} text={'Номер договора'}
                       block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-88aecbd4-c20e-11e7-abc4-cec278b6b50a'>
                        {dboProduct && dboProduct.number || placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-9b9af2a5-8cca-9546-5cba-7d9ef603b2d8'
                 xs={xsSize / 4}>
                <Label testID='test-id-fd95c377-f409-4dff-a0eb-8f46562e71dd'
                       header={''}
                       text={'Статус договора'}
                       block={true}>
                    <Text
                        style={dboProduct && dboProduct.isActiveAgreement == false ? Styles.dboStatusClose : {}}
                        testID='test-id-66fa283d-edca-0e10-487d-de3df76e8658'>
                        {dboProduct &&
                        dboProduct.status ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
            <Col testID='test-id-87a356d2-ab06-86f0-998e-021a8632c585' xs={xsSize / 4}>
                <Label testID='test-id-8176a1ef-7d3f-50fc-8c80-363509be9513' header={''}
                       text={'Дата заключения договора'} block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-ba6269ef-fcbf-ef11-c89b-02680015ebc6'>
                        {dboProduct &&
                        dboProduct.openDate &&
                        dboProduct.openDate.formattedString() ||
                        placeholder}
                    </Text>
                </Label>
            </Col>
            {dboProduct &&
             dboProduct.endDate ? <Col testID='test-id-a203c404-c20e-11e7-abc4-cec278b6b50a' xs={xsSize / 4}>
                <Label testID='test-id-a6dc83c6-c20e-11e7-abc4-cec278b6b50a'
                       header={''}
                       text={'Дата расторжения'} block={true}>
                    <Text
                        style={Styles.productText}
                        testID='test-id-abfa69cc-c20e-11e7-abc4-cec278b6b50a'>
                        {dboProduct &&
                        dboProduct.endDate &&
                        dboProduct.endDate.formattedString() ||
                        placeholder}
                    </Text>
                </Label>
            </Col> : null }
        </Row>
        {   authorizedPersonList.length > 0
            ?  <View
                testID="test-id-7c0e7cc4-f094-4477-9e7c-94d9c44abce9"
                style = {Styles.horizontalLineView}>
                <HorizontalRule testID='test-id-b6508759-5b76-8fb6-c410-0429250e117a'/>
            </View>
            : null
        }
        {   authorizedPersonList.length > 0 ?
            <Row testID='test-id-099717e1-a688-fbca-f88a-fc7920b7d2ab'>
                <Col testID='test-id-c2cf3dec-e1f1-245e-98e1-099d8cbf76fe' xs={xsSize}>
                    <Text
                        style={Styles.authorizedPersonTitle}
                        testID='test-id-f3a78565-97a9-6aee-c08d-6e62f52f2691'>
                        {'Список уполномоченных лиц'}
                    </Text>
                    {authorizedPersonList}
                </Col>
            </Row>
            : null
        }
    </Grid>
}
const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    return <View testID='test-id-bad4c5ed-8f03-7bf8-de68-8b0df7a6c303'
                 style={Styles.borderBox}>
        {(props.currentDboProduct &&
          props.currentDboProduct.dboProduct &&
          props.currentDboProduct.dboProduct.systemClassifier &&
          (props.currentDboProduct.dboProduct.systemClassifier.code == 'spad' ||
           props.currentDboProduct.dboProduct.systemClassifier.code == 'bank_client'))
            ? getProductSystemDboSpadBankClient(props) : getProductSystemDboSbbol(props)}
           </View>

}


/*
 * UI stateless functional component "ProductDbo" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentDboProduct: Models.DboProduct,
    currentExchangePerson: ModelsScheduler.Person,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    testID: string

}

const ProductDbo: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-ProductDbo'}>
        {}
        <SplitPanel testID='test-id-2964d978-1b56-41ad-f3a2-59ecdab86761' id={"ProductAcquiring"}>
            <ContentPanel testID='test-id-d78a0016-b3d3-5d0e-398c-bdafafce7854' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-1fb71519-3e89-526c-4097-0aef1a07c5dc' scrollEnabled={true}
                      content={getContentPanelContent(props)}>
                    <LeftPageHeader testID='test-id-9cd65911-7a7f-b1a7-8749-2849ceeb5099'>
                        <NavigationBackButton key={"ProductListDBONavBackButton"}
                                              testID='test-id-1c0014ee-c217-11e7-abc4-cec278b6b50a' title={false}
                                              onClick={()=> props.navigateProductListBack()}/>
                        <View key={"ProductListDBOTextBackButton"} style={Styles.navigationBackButtonTextAdjustment}
                              testID="test-id-279000da-c217-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID="test-id-2c4f99d2-c217-11e7-abc4-cec278b6b50a"
                                title={util.getProductListTypeName(props.currentDboProduct.productType)}
                                onExecute={props.navigateProductListBack}
                            />
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-0ecc1548-93ed-8323-f179-f91f41f8a8be'>
                        <H2 testID='test-id-3f575b82-c7c7-bd5d-b3fb-4473a7a1f00b'>
                            { util.getProductTypeName (props.currentDboProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
        {}
    </View>
)

export default ProductDbo