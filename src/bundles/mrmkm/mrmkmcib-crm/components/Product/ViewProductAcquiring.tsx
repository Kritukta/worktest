/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    CenterPageHeader,
    Col,
    ContentPanel,
    NavigationBackButton,
    Grid,
    H2,
    HorizontalRule,
    LeftPageHeader,
    Label,
    NavigationTextButton,
    Page,
    RightPageHeader,
    Row,
    SplitPanel,
    Text,
    View,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Button,
    Icon,
    IconType,
    TableHead,
    TableColumn,
} from 'ufs-mobile-platform'

import { Models } from "mrmkmcib-crm"
import { Enums } from '../../Enums'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"

import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsProductAcquiring from "../../models/ModelsProductAcquiring"

import Styles from './styles/ProductAcquiringStyles'

import * as util from '../../common/Util'

const getProductAcquiringPageContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View
        testID={ 'test-id-product-acquiring-view' }
        style={ Styles.pageContainer }>
        <SplitPanel
            testID={'test-id-product-acquiring-split-panel'}
            id={ util.getNavigationProductAcquiringIdString (Enums.NavigationProductAcquiring.AppCRM_Acquiring) }>
            <ContentPanel testID={'test-id-product-acquiring-content'}>
                <Page
                    testID={ 'test-id-product-acquiring-main-page' }
                    content={ getContentPanelContent (props) }
                    scrollEnabled={ false }>

                    <LeftPageHeader testID='test-id-4e01b5d4-c92d-11e7-abc4-cec278b6b50a'>
                        <NavigationBackButton
                            key={"AcquiringProductListNavBackButton"}
                            testID='test-id-44b2849a-c92d-11e7-abc4-cec278b6b50a'
                            title={false}
                            onClick={ props.navigateProductListBack }/>
                        <View
                            key={"AcquiringProductListTextBackButton"}
                            style={Styles.navigationBackButtonTextAdjustment}
                            testID="test-id-3bc7bfa8-c92d-11e7-abc4-cec278b6b50a">
                            <NavigationTextButton
                                testID={ "test-id-acquiring-product-list-back-button" }
                                title={ util.getProductListTypeName(props.currentAcquiringProduct.productType) }
                                onExecute={ props.navigateProductListBack }/>
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-26783952-a34c-8df8-1c32-889bad24c21a'>
                        <H2 testID='test-id-d813f482-3642-8541-1a69-e86c4091f876'>
                            { util.getProductTypeName (props.currentAcquiringProduct.productType) }
                        </H2>
                    </CenterPageHeader>
                </Page>
                <Page
                    testID={'test-id-product-acquiring-details-page'}
                    content={ getProductAcquiringAgreementListView (props) }
                    scrollEnabled={ false }>
                    <LeftPageHeader testID='test-id-agreement-list-left-page-header'>
                        <NavigationBackButton
                            key={ 'agreement-list-back-button' }
                            testID={ 'test-id-agreement-list-back-button' }
                            title={ false }
                            onClick={ props.navigateProductListBack }/>
                        <View
                            key={ 'agreement-list-back-button-title-view' }
                            style={ Styles.navigationBackButtonTextAdjustment }
                            testID={ 'test-id-agreement-list-back-button-title-view' }>
                            <NavigationTextButton
                                testID={ 'test-id-agreement-list-back-button-title' }
                                title={ 'Договор эквайринга' }
                                onExecute={ props.navigateBackToViewProductAcquiring }/>
                        </View>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-26783952-a34c-8df8-1c32-889bad24c21a'>
                        <H2 testID='test-id-d813f482-3642-8541-1a69-e86c4091f876'>
                            { 'Дополнительные соглашения' }
                        </H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
    </View>
)

const placeholder = util.getPlaceholderStringRepresentation (util.UndefinedValuesPlaceholder.NO_DATA)
const xsSize = 12

const getProductAcquiringAgreementListView = (props: IProps): React.ReactElement<View> => (
    <View testID={'test-id-product-acquiring-agreement-list-page'} style={ Styles.page }>
        <Table testID={'test-id-product-acquiring-agreement-list'} style={ Styles.agreementListTable }>
            <TableHead testID={'test-id-product-acquiring-agreement-list-head'}>
                <TableColumn testID={'test-id-product-acquiring-agreement-list-head-number'} width={'34%'}>
                    <Text testID={'test-id-product-acquiring-agreement-list-head-number-text'}>
                        {'Номер доп. соглашения'}
                    </Text>
                </TableColumn>
                <TableColumn testID={'test-id-product-acquiring-agreement-list-head-type'} width={'66%'}>
                    <Text testID={'test-id-product-acquiring-agreement-list-head-type-text'}>
                        {'Тип доп. соглашения'}
                    </Text>
                </TableColumn>
            </TableHead>
            <TableBody testID={'test-id-product-acquiring-agreement-list-body'}>
                {
                    props.currentAcquiringProduct &&
                    props.currentAcquiringProduct.acquiringProduct &&
                    Array.isArray (props.currentAcquiringProduct.acquiringProduct.additionalContractList) &&
                    props.currentAcquiringProduct.acquiringProduct.additionalContractList.map (
                        (agreement: Models.ProductAcquiring_AdditionalContract): React.ReactElement<TableRow> => (
                            <TableRow
                                testID={`test-id-agreement-list-item-${ agreement.number }`}
                                key={`product-agreement-list-item-${ agreement.number }`}>
                                <TableCell
                                    testID={`test-id-greement-list-item-number-${ agreement.number }`}
                                    style={ Styles.agreementListItemCell }>
                                    <View
                                        testID={ `test-id-greement-list-item-number-view-${ agreement.number }` }
                                        style={ Styles.agreementListItemView }>
                                        <Text
                                            testID={`test-id-greement-list-item-number-text-${ agreement.number }`}
                                            style={ Styles.agreementListItemText }>
                                            { agreement.number }
                                        </Text>
                                    </View>
                                </TableCell>
                                <TableCell
                                    testID={`test-id-agreement-list-item-type-${ agreement.number }`}
                                    style={ Styles.agreementListItemCell }>
                                    <View
                                        testID={ `test-id-greement-list-item-type-view-${ agreement.number }` }
                                        style={ Styles.agreementListItemView }>
                                        <Text
                                            testID={`test-id-greement-list-item-type-text-${ agreement.number }`}
                                            style={ Styles.agreementListItemText }>
                                            { agreement.typeClassifier &&
                                              agreement.typeClassifier.value ||
                                              placeholder }
                                        </Text>
                                    </View>
                                </TableCell>
                              </TableRow>
                        )
                    ) || []
                }
            </TableBody>
        </Table>
    </View>
)

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const { acquiringProduct } = props.currentAcquiringProduct
    const additionalAgreementAmount = acquiringProduct &&
        Array.isArray (acquiringProduct.additionalContractList) &&
        acquiringProduct.additionalContractList.length || 0

    return (
        <View testID='test-id-da284d4a-9154-efde-a824-1e36e9c7ca35' style={ Styles.page }>
            <View testID={ 'test-id-acquiring-main-info' }
                style={ Styles.mainInfoGreedContainer }>
                <Grid testID='test-id-95d05b32-67ff-b5ea-f136-d46b53bee294'>
                    <Row testID='test-id-fa3d7dda-9daa-28d7-fcf2-cd096c2ea8c7'>
                        <Col testID='test-id-6610a861-c18e-14dc-a7a3-19d26be54f3a' xs={xsSize}>
                            <View testID="test-id-ef6a2b78-c927-11e7-abc4-cec278b6b50a"
                                    style = {Styles.clientProduct}>
                                <Label testID='test-id-deb56d68-c929-11e7-abc4-cec278b6b50a'
                                        header={''}
                                        text={'Клиент'}
                                        block={true}>
                                    <Text
                                        testID='test-id-e270936a-c929-11e7-abc4-cec278b6b50a'>
                                        {
                                            util.displayCustomerWithLegalForm(props.currentCustomerManaged)
                                        }
                                    </Text>
                                </Label>
                            </View>
                        </Col>
                    </Row>
                    <View
                        testID="test-id-643c83ea-c92a-11e7-abc4-cec278b6b50a"
                        style = {Styles.horizontalLineView}>
                            <HorizontalRule testID='test-id-92bf8587-bee1-9d84-2735-50e199e134c8'/>
                    </View>
                    <Row testID='test-id-c8d00e49-c752-7f25-17a5-47a4a8116d7f'>
                        <Col testID='test-id-5bd78c45-0dd1-f148-76bc-0e9202a1c865' xs={xsSize}>
                            <Label testID='test-id-8fff2b93-8d10-5d9c-e065-80a2d73c2574' header={''}
                                    text={'Количество терминалов'} block={true}>
                                <Text
                                    testID='test-id-11026032-eef8-e8f8-3c02-a7dac3514bce'>
                                    {acquiringProduct &&
                                    acquiringProduct.terminalsCount != null
                                                                    ? acquiringProduct.terminalsCount
                                                                    : placeholder}
                                </Text>
                            </Label>
                        </Col>
                    </Row>
                    <View
                        testID="test-id-f5ce1d6e-c92a-11e7-abc4-cec278b6b50a"
                        style = {Styles.horizontalLineView}>
                        <HorizontalRule testID='test-id-07c06fae-c92b-11e7-ac37-cec278b6b50a'/>
                    </View>
                    <Row testID='test-id-2bb1e4b5-09eb-cccb-529e-cde974b48c0f'>
                        <Col testID='test-id-ce38b728-fb11-b7ea-e124-18ea990cf477' xs={xsSize / 4}>
                            <Label testID='test-id-134e212a-9ed3-7f5f-3ce8-b7c77ff0f0c1'
                                    header={ '' }
                                    text={ 'Номер договора' }
                                    block={ true }>
                                <Text
                                    testID='test-id-f5e22304-0f2e-979b-a0d1-d866b9fefa65'>
                                    {
                                        acquiringProduct &&
                                        acquiringProduct.contractNumber ||
                                        placeholder
                                    }
                                </Text>
                            </Label>
                        </Col>
                        <Col testID='test-id-47aff976-e802-58a8-326f-6b41649d5a31' xs={xsSize / 4}>
                            <Label testID='test-id-73742495-7611-b5a2-edc0-628a6cacdd62' header={''}
                                    text={'Статус договора'} block={true}>
                                <Text
                                    testID='test-id-78b06c5c-346d-c135-2ca5-b7df4bd4cd52'>
                                    {
                                        acquiringProduct && acquiringProduct.statusClassifier &&
                                        acquiringProduct.statusClassifier.value ||
                                        placeholder
                                    }
                                </Text>
                            </Label>
                        </Col>
                        <Col testID='test-id-c8b20c64-4eb1-3183-cf9a-0e574d723f8b' xs={xsSize / 4}>
                            <Label testID='test-id-57c49e93-9588-01e9-ad19-e3f6836b155a' header={''}
                                    text={'Дата заключения договора'} block={true}>
                                <Text
                                    testID='test-id-84ea410d-785a-d581-c025-c58ede5d65e0'>
                                    {
                                        acquiringProduct &&
                                        acquiringProduct.openDate &&
                                        acquiringProduct.openDate.formattedString() ||
                                        placeholder
                                    }
                                </Text>
                            </Label>
                        </Col>
                    </Row>
                </Grid>
            </View>
            <View
                testID={ 'test-id-acquiring-agreement-list-link-container' }
                style={ Styles.agreementListLinkContainer }>
                <Table testID={'test-id-acquiring-agreement-list-link'}>
                    <TableBody testID={'test-id-acquiring-agreement-list-link-body'}>
                        <TableRow testID={'test-id-acquiring-agreement-list-link-row'}
                            onClick={
                                additionalAgreementAmount ? props.navigateToAgreementListView : () => {}
                            }>
                            <TableCell
                                testID={'test-id-acquiring-agreement-list-link-cell'}
                                style={ Styles.agreementListLinkCell }>
                                <View
                                    testID={'test-id-acquiring-agreement-list-link-view'}
                                    style={ Styles.agreementListLink }>
                                    <Text
                                        testID={'test-id-acquiring-agreement-list-link-title'}
                                        style={ Styles.agreementListLinkTitle }>
                                        { 'Дополнительные соглашения' }
                                    </Text>
                                    <Text
                                        testID={'test-id-acquiring-agreement-list-link-amount'}
                                        style={ Styles.agreementListLinkValue }>
                                        { additionalAgreementAmount }
                                    </Text>
                                    <Button
                                        testID={'test-id-acquiring-agreement-list-link-button'}
                                        disabled={ !additionalAgreementAmount }
                                        onExecute={
                                            additionalAgreementAmount ? props.navigateToAgreementListView : () => {}
                                        }>
                                        <Icon
                                            testID={'test-id-acquiring-agreement-list-link-icon'}
                                            disabled={ !additionalAgreementAmount }
                                            type={ IconType.MrmLink }/>
                                    </Button>
                                </View>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
            <View
                testID='test-id-c561205f-eb67-4371-14ac-6bcf74e115ca'
                style={ Styles.comissionList }>
                <Text
                    style={Styles.commisionTitle}
                    testID='test-id-57f5d2ce-c92c-11e7-abc4-cec278b6b50a'>
                    {'Коммисии'}
                </Text>
                {
                    acquiringProduct &&
                    Array.isArray (acquiringProduct.commissionList) &&
                    acquiringProduct.commissionList.map ((commission: string, index: number) => (
                        <Text
                            style={Styles.commisionText}
                            testID={ `test-id-commission-list-item-${ commission }-${ index }` }
                            key={ `commission-list-item-${ commission }-${ index }` }>
                        { commission }
                        </Text>
                    )) || (
                        <Text
                            style={Styles.commisionText}
                            testID={'test-id-empty-commission-list'}>
                            { placeholder }
                        </Text>
                    )
                }
            </View>
        </View>
    )
}


/*
 * UI stateless functional component "ProductAcquiring" used in "Product" screen. Product details component.
 */

export interface IProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentAcquiringProduct: Models.AcquiringProduct,
    currentExchangePerson: ModelsScheduler.Person,
    
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    navigateToAgreementListView: ModelsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW,
    navigateBackToViewProductAcquiring: ModelsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING,

    testID: string
}

const ProductAcquiring: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={ Styles.main } testID={ 'test-id-component-ProductAcquiring' }>
        <SplitPanel testID='test-id-16178c2e-d40c-fd82-ce8e-26dbaaae99eb' id={ "ProductAcquiring" }>
            <ContentPanel testID='test-id-274f18ef-8a16-f4a6-0fe9-9553c1f8081f' style={{ backgroundColor: '#fff' }}>
                <Page
                    testID='test-id-b636a347-34f8-251b-8da0-a5f178fbe16a'
                    scrollEnabled={false}
                    content={ getProductAcquiringPageContent(props) }>
                    <LeftPageHeader testID={'test-id-dummy-left-page-header'}/>
                </Page>
            </ContentPanel>
        </SplitPanel>
    </View>
)

export default ProductAcquiring