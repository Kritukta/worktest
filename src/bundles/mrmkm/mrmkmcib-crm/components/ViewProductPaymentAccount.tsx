/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'

import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import Styles from './styles/ViewProductPaymentAccountStyles'

import moment from 'moment'

import {
    Content,
    AuthForm,
    RootComponent,
    Sidebar,
    HintIcon,
    MenuSideTop,
    MenuSideBottom,
    MenuItem,
    Button,
    ButtonType,
    IconType,
    UFSProvider,
    AppContainer,
    SplitPanel,
    SplitPanelActions,
    AccessoryPanel,
    ContentPanel,
    NavigationBar,
    Page,
    H1,
    H2,
    Text,
    TableColumnAlignment,
    Table,
    TableCell,
    TableRow,
    TableBody,
    TableHead,
    TableColumn,
    Section,
    HorizontalRule,
    View,
    NavigationTextButton,
    NavigationFilterButton,
    NavigationIconButtonType,
    NavigationIconButton,
    NavigationBackButton,
    FileViewer,
    LeftPageHeader,
    CenterPageHeader,
    RightPageHeader,
    RadioButton,
    RadioGroup,
    Textarea,
    TextInput,
    NumberInput,
    MaskedInput,
    Header,
    Icon,
    KeyboardType,
    SysCalls,
    download,
    upload,
    get,
    post,
    syncGet,
    syncPost,
    File,
    ECM,
    FileType,
    PersistentType,
    Settings,
    Cookie,
    Authentication,
    AuthenticationStatus,
    AuthenticationType,
    Grid,
    Col,
    Row,
    Checkbox,
    Switch,
    Right,
    Center,
    Left,
    Clearfix,
    Video,
    TabSelector,
    OptionItem,
    SystemError,
    Loader,
    Popover,
    PopoverType,
    PopoverPosition,
    Workflow,
    WFBreadcrumbs,
    Log,
    LogLevel,
    SystemInfo,
    Label,
    Breadcrumbs,
    Hint,
    HintType,
    Panel,
    PanelType,
    PanelHeader,
    HintSwitch,
    Accordion,
    ComboBox,
    ProfileCell,
    Map as UFSMap,
    MapSource,
    RouteType,
    MapContent,
    MapControls,
    MapLocateButton,
    MapTrafficButton,
    MapZoomInButton,
    MapZoomOutButton,
    Marker,
    Geocoder,
    Modal,
    WebView,
} from 'ufs-mobile-platform'

import {defaultValues} from "../models/Models"
import {EnumsApp, FullScreenError} from "mrmkmcib-app"
import {Models as ModelsApp,  RefreshBar } from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"


import * as Util from '../common/Util'
import {SumText} from 'ufs-mobile-platform'
import PopoverTarget from '../modules/PopoverTarget'
import {DatePicker} from 'mrmkmcib-ui'

import {LoaderWithText} from "mrmkmcib-app"

const PLACEHOLDER = Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA)
const XS_SIZE = 12
const formatDate = (date: Date | null, format: string = 'DD.MM.YYYY'): string => date ? date.formattedString(format) : PLACEHOLDER

const getProductPaymentAccountPrivilegeList = (privilegeList: Models.PaymentAccountProductPrivilegeList): React.ReactElement<View> => (
    <View testID="test-id-f7d0ad78-d58e-11e7-9296-cec278b6b50a">
        <View testID='test-id-44123d7f-6af1-fc7c-0d36-9f2695d5e7f5-hr' style={Styles.hrContainer}>
            <HorizontalRule testID='test-id-68684fb2-8361-11e7-bb31-be2e44b06b34'/>
        </View>
        <View testID='test-id-44123d7f-6af1-fc7c-0d36-9f2695d5e7f5' style={Styles.tariffListTitleView}>
            <Text testID='test-id-44123d7f-6af1-fc7c-0d36-9f2695d5e7f5' style={Styles.boldSubCaption}>Льготы</Text>
        </View>
        {Array.isArray(privilegeList.data) && privilegeList.data.length > 0 ?
        <Table testID='test-id-bfc195dc-24e2-ffe5-08d7-2f9d003ad259'>
            <TableHead testID='test-id-6059fe23-7c65-ea60-f3ee-3098d285dcdc'>
                <TableColumn testID='test-id-1b8a3baf-f29a-8596-b704-25d34c9c59d2' width="17%">
                    <Text testID='test-id-590d8e9e-b9e1-5cde-60dc-2a3843e0d327'>Дата начала</Text>
                </TableColumn>
                <TableColumn testID='test-id-0512243b-c509-e4c6-c984-3b945dd1c94a' width="17%">
                    <Text testID='test-id-df2d269a-cfaa-ff66-c8ef-a724471efacf'>Дата окончания</Text>
                </TableColumn>
                <TableColumn testID='test-id-468b6801-35fb-19f2-034a-dbcc385cd012' width="66%">
                    <Text testID='test-id-d1316eb0-cf57-5931-a915-d4ed25ef8572'>Льгота</Text>
                </TableColumn>
            </TableHead>
            <TableBody testID='test-id-98ca1fa3-9639-6c34-7b5f-9ff35e657f35'>
            {privilegeList.data.map((item: Models.Privilege, index: number): React.ReactElement<TableRow> => (
                <TableRow testID='test-id-b6698cfd-9228-d4ab-1692-5398662fdb9a' key={`Privilege Row ${index}`}>
                    <TableCell testID='test-id-91fbdec3-9206-4ffe-cf9e-b78355ae377c'><Text
                        testID='test-id-91fbdec3-9206-4ffe-cf9e-b78355ae377c'
                        style={Styles.privilegeRowText}>{item.startDate ? item.startDate.formattedString() : PLACEHOLDER}</Text></TableCell>
                    <TableCell testID='test-id-40295b49-a5b5-410c-f378-09074ba72e98'><Text
                        testID='test-id-40295b49-a5b5-410c-f378-09074ba72e98'
                        style={Styles.privilegeRowText}>{item.endDate ? item.endDate.formattedString() : PLACEHOLDER}</Text></TableCell>
                    <TableCell testID='test-id-36122e44-68b4-06f3-8103-69922926c5a5'><Text
                        testID='test-id-36122e44-68b4-06f3-8103-69922926c5a5'
                        style={Styles.privilegeRowText}>{item.name || PLACEHOLDER}</Text></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table> :
        <View style = {Styles.noRestrictionView}
            testID="test-id-3ff9ce30-da4f-11e7-9296-cec278b6b50a" >
            <Text style = {Styles.noRestrictionText}
                  testID="test-id-062571dc-da4f-11e7-9296-cec278b6b50a">
                {PLACEHOLDER}
            </Text>
        </View>}

    </View>
)

const getProductPaymentAccountRestrictionList = (restrictionList: Models.PaymentAccountProductRestrictionList, currencyClassifier: ModelsApp.Classifier): React.ReactElement<TableRow>[] => (
    Array.isArray(restrictionList.data) ? (
        restrictionList.data.compact().map((item: Models.ProductPaymentAccountRestriction, index: number): React.ReactElement<TableRow> => (
            <TableRow testID='test-id-443704be-8e66-5b6e-4152-caf49fa0f997' key={`Restriction Row ${index}`}>
                <TableCell testID='test-id-c3fc9f8e-c9a5-326f-737b-0dc77427969a'>
                    <Text testID='test-id-9221a1a1-5ed0-a9e2-5541-5595ed4839f4'>
                        {item.type || PLACEHOLDER}
                    </Text>
                    <Text
                        style = {Styles.restrictionSumText}
                        testID={`${index}-${item.sum}-${currencyClassifier.code}-'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328`}>
                        { item.sum != null ? `${item.sum.sumString()} ${currencyClassifier.code}` : PLACEHOLDER }
                    </Text>
                </TableCell>
                <TableCell testID='test-id-c50fee6c-8455-a129-2ad9-afd590bf51a8'><Text
                    testID='test-id-c50fee6c-8455-a129-2ad9-afd590bf51a8'>{item.startDate ? formatDate(item.startDate) : PLACEHOLDER}</Text></TableCell>
                <TableCell testID='test-id-a5530a1b-56ee-2c37-8d52-a14a19cb358d'><Text
                    testID='test-id-a5530a1b-56ee-2c37-8d52-a14a19cb358d'>{item.annotation || PLACEHOLDER}</Text></TableCell>
            </TableRow>
        ))
    ) : []
)

const getProductPaymentAccountCardIndexList = (cardIndexList: Models.PaymentAccountProductCardIndexList): React.ReactElement<TableRow>[][] => {

    let currencyViewList: any[] = [];
    let resSummaViewList: any[] = [];
    let debtViewList: any[] = [];
    let outputViewList: any[] = [];
    cardIndexList.data.compact().map((item: Models.PaymentAccountProductCardIndex, index: number): any => {
        const newTableRow = {}
        const accountInfoList = item.accountInfoList
        accountInfoList.map((cardIndexInfo: Models.PaymentAccountProductCardIndexInfo, key: number) => {
            currencyViewList.push(
                <View testID={`test-id-5a0e0734-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}
                      key={`ViewCurrency-${index}-${key}`} style={Styles.cardIndexViewCell}>
                    <View key =  {`test-id-4c582f2a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}
                          testID = {`test-id-4c582f2a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}>
                        <Text key = {`test-id-dab7a9aa-9b61-1fa0-9e3f-2a8ef1587528-${index}-${key}`}
                              style = {Styles.cardIndexCurrencyTextRow}
                              testID = {`test-id-dab7a9aa-9b61-1fa0-9e3f-2a8ef1587528-${index}-${key}`}>
                            {cardIndexInfo.currency && cardIndexInfo.currency.code || PLACEHOLDER}
                        </Text>
                    </View>
                    {key + 1 < accountInfoList.length
                    ? <View style={Styles.borderCardIndexLine}
                            key = {`test-id-91996e3f-30ac-f747-4293-6dcb515a90f5${index}-${key}`}
                            testID = {`test-id-91996e3f-30ac-f747-4293-6dcb515a90f5${index}-${key}`}>
                                <HorizontalRule
                                    key = {`test-id-${index}-3402040e-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`}
                                    testID = {`test-id-${index}-3402040e-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`}/>
                    </View>
                    : null}
            </View>)
            resSummaViewList.push(
                <View testID={`test-id-a57f2100-c902-11e7-abc4-cec278b6b50a-${index}-${key}`}
                                        key={`ViewSumma-${index}-${key}`} style={Styles.cardIndexViewCell}>
                    <View testID={`test-id-3938fe56-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}
                          key = {`test-id-3938fe56-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}
                          style={Styles.cardIndexSummaViewCell}>
                        <Text key ={`test-id-db10cf98-c886-11e7-abc4-cec278b6b50a-${index}-${key}`}
                              testID = {`test-id-db10cf98-c886-11e7-abc4-cec278b6b50a-${index}-${key}`}
                              style={Styles.cardIndexCurrencyTextRow}>
                                {cardIndexInfo.sum
                                ? cardIndexInfo.sum.sumString()
                                : PLACEHOLDER}
                        </Text>
                    </View>
                    {key + 1 < accountInfoList.length ?
                    <View style={Styles.borderCardIndexLine}
                          key = {`test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}`}
                          testID = {`test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}`}>
                            <HorizontalRule key = {`test-id-${index}-2d113dc2-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`}
                                            testID = {`test-id-${index}-2d113dc2-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`}/>
                    </View>
                    : null}
            </View>)
            debtViewList.push(
                <View testID={`test-id-b812e0ae-c902-11e7-abc4-cec278b6b50a-${index}-${key}`}
                      key={`ViewRest-${index}-${key}`} style={Styles.cardIndexViewCell}>
                    <View key = {`test-id-4258fa4a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}
                          testID = {`test-id-4258fa4a-8723-11e7-bb31-be2e44b06b34-${index}-${key}`}
                          style = {Styles.cardIndexPaymentRestViewCell}>
                        <Text
                            key = {`test-id-60598fb0-c886-11e7-abc4-cec278b6b50a-${index}-${key}`}
                            style = {Styles.cardIndexCurrencyTextRow}
                            testID = {`test-id-60598fb0-c886-11e7-abc4-cec278b6b50a-${index}-${key}`}>
                            {cardIndexInfo.paymentRest
                                ? cardIndexInfo.paymentRest.sumString()
                                : PLACEHOLDER}
                        </Text>
                    </View>
                    {key + 1 < accountInfoList.length ?
                    <View key = {`test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}`}
                          style={Styles.borderCardIndexLine}
                          testID={`test-id-91996e3f-30ac-f747-4293-6dcb515a90f5-${index}-${key}`}>
                            <HorizontalRule
                                key = {`test-id-${index}-2662a092-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`}
                                testID = {`test-id-${index}-2662a092-c8fb-11e7-abc4-cec278b6b50a-${key}${index}`}/>
                    </View> : null}
            </View>)
        })
        outputViewList.push({
            name: item.name,
            currencyList: currencyViewList,
            summaList: resSummaViewList,
            debtList: debtViewList,
        })

        currencyViewList = [];

        debtViewList     = [];

        resSummaViewList = [];
    })
    return outputViewList.map((item: any, index: number): any => (
        <TableRow testID={`test-id-d5d993d9-9cd7-3f24-7974-abf09a322365-${index}`}
                  key={`Card Index Row ${index}`}>
            <TableCell
                testID={`test-id-02343ed0-5470-9d2e-b76c-f1665f7f71d3-${index}`}>
                <Text style={Styles.cardIndexNameTextRow}
                      testID={`test-id-02343ed0-5470-9d2e-b76c-f1665f7f71d3-${index}`}>{item.name}</Text>
            </TableCell>
            <TableCell testID={`test-id-dab7a9aa-9b61-1fa0-9e3f-2a8ef1587528-${index}`}
                       style={Styles.cardIndexCell}>
                <View testID={`ebeb9144-8723-11e7-bb31-be2e44b06b34-${index}`}
                      style={Styles.cardIndexViewCell}>{item.currencyList}</View>
            </TableCell>
            <TableCell testID={`test-id-31177b13-413c-64f5-fbe8-24f9b0baa93c-${index}`} style={Styles.cardIndexCell}>
                <View testID={`f83f9e40-8723-11e7-bb31-be2e44b06b34-${index}`}
                      style={Styles.cardIndexViewCell}>{item.summaList}</View>
            </TableCell>
            <TableCell testID={`test-id-8eff27a7-e33b-77fc-c442-1528ed8f7e14-${index}`} style={Styles.cardIndexCell}>
                <View testID={`fce3804c-8723-11e7-bb31-be2e44b06b34-${index}`}
                      style={Styles.cardIndexViewCell}>{item.debtList}</View>
            </TableCell>
        </TableRow>))

}

const getPaymentAccountGeneralInfoView = (props: IProps, paymentAccountProduct: Models.SubPaymentAccountProduct): React.ReactElement<View> => (
    paymentAccountProduct ? (
        <View testID='test-id-da88ed6b-a011-bda5-f444-f66658c0dd38' style={Styles.generalInfoContainer}>
            <Grid testID='test-id-04f1ffda-5da0-92e4-4114-884ea3bb263d'>
                <View testID={ 'test-id-payment-account-info-hr-1' } style={ Styles.labelHrContainer }>
                    <HorizontalRule testID='test-id-13cbe25d-63f7-2a4c-1d1d-309bad0e5785'/>
                </View>
                <Row testID='test-id-3b069535-16cc-3a78-d570-d87a559715fb'>
                    <Col testID='test-id-fe540db9-55dc-4715-0aed-03d2afab399e' xs={XS_SIZE / 3}>
                        { getSumTextField (paymentAccountProduct.curBalance, "Текущий остаток", paymentAccountProduct.currencyClassifier, true, false) }
                    </Col>
                    <Col testID='test-id-cf322e63-87bd-2de3-f0c7-14a412bc8119' xs={XS_SIZE / 3}>
                        <View testID="test-id-c59ede60-db38-11e7-9296-cec278b6b50a"
                            style ={Styles.planBalanceView}>
                            <View testID='test-id-abf649b2-db38-11e7-9296-cec278b6b50a'>
                            { getSumTextField (paymentAccountProduct.planBalance,
                                "Плановый остаток",
                                paymentAccountProduct.currencyClassifier, false, false) }
                            </View>
                            <View style = {Styles.planBalanceHintView}
                                  testID='test-id-c59ede60-db38-11e7-9296-cec278b6b50a'>
                                <HintIcon testID="baf6df9e-c512-11e7-abc4-cec278b6b50a"
                                      text='Сумма текущего остатка и доступного лимита овердрафта за вычетом картотеки и ограничений'/>
                            </View>
                        </View>
                    </Col>
                    <Col testID='test-id-d13fea34-5a86-d94f-14dd-5cdf0220f511' xs={XS_SIZE / 3}>
                        { /*getSumTextField(paymentAccountProduct.minBalance, "Неснижаемый остаток", paymentAccountProduct.currencyClassifier, true, false)*/ }
                    </Col>
                </Row>
                <View testID={ 'test-id-payment-account-info-hr-2' } style={ Styles.sumTextHrContainer }>
                    <HorizontalRule testID='test-id-d42d01e7-828a-1b99-84f1-4a1eb4b3ff37'/>
                </View>
                <Row testID='test-id-49667dbf-7359-e46a-2d71-59b38ba0fc76'>
                    <Col testID='test-id-fcfb4ba8-b061-ee6d-5b15-d0a743f21049' xs={XS_SIZE / 3}>
                        <Label testID='test-id-a7bc800f-56f2-0159-780e-cbca48d2c03a' header={''}
                               text={'Дата открытия счета'} block={true}>
                            <Text
                                testID='test-id-f864993a-df93-3204-a856-c7fcb7df32cd'>
                                {paymentAccountProduct.openDate ? paymentAccountProduct.openDate.formattedString() : PLACEHOLDER}
                            </Text>
                        </Label>
                    </Col>
                    {paymentAccountProduct.closeDate ?
                        <Col testID='test-id-fcfb4ba8-b061-ee6d-5b15-d0a743f21049' xs={XS_SIZE / 3}>
                            <Label testID='test-id-a7bc800f-56f2-0159-780e-cbca48d2c03a' header={''}
                                   text={'Дата закрытия счета'} block={true}>
                                <Text
                                    testID='test-id-f864993a-df93-3204-a856-c7fcb7df32cd'>
                                    {paymentAccountProduct.closeDate ? paymentAccountProduct.closeDate.formattedString() : PLACEHOLDER}
                                </Text>
                            </Label>
                        </Col> : null}
                    <Col testID='test-id-44f13062-2d81-7772-2f61-f14593eee705' xs={XS_SIZE / 3}>
                        <Label testID='test-id-42da423b-305e-9661-d69b-58336562ec46' header={''} text={'Номер договора'}
                               block={true}>
                            <Text
                                testID='test-id-599dea25-eb62-c6aa-12c1-481e707765ab'>
                                {paymentAccountProduct.contractNumber || PLACEHOLDER}
                            </Text>
                        </Label>
                    </Col>
                </Row>
            </Grid>
        </View>
    ) : (<View testID='test-id-90967f98-e5a8-8299-86a5-60e8689263a1'/>)
)
const getCacheView = (bhCachedDate: Date | null, performUpdate: Function): React.ReactElement<RefreshBar> => (
    <RefreshBar key = {`RefreshBarProductList${bhCachedDate ? bhCachedDate.getTime() : new Date().getTime()}`}
                testID='test-id-86ae35aa-f5d9-11e7-8c3f-9a214cf093ae'
                title = 'Обновить'
                performRefresh={()=> performUpdate()}
                date={bhCachedDate || new Date()}/>
)
const getPaymentAccountRestrictionListView = (restrictionList: Models.PaymentAccountProductRestrictionList | null, currencyClassifier: ModelsApp.Classifier): React.ReactElement<View> => (
    restrictionList ? (
        <View testID='test-id-ea49e819-f5e0-8e75-22ca-e322ebdb8860' style={Styles.restrictionListContainer}>
            <Table testID='test-id-416b1a68-a73c-7a73-737c-44a5c3cc945e'>
                <TableHead testID='test-id-968a969c-0e2e-9121-83d3-91aebc96bfa8'>
                    <TableColumn testID='test-id-901a54a4-bf61-2fd7-5132-bfce205d0ef5' width="35%">
                            <Text
                                testID='test-id-606898b0-ef1b-175d-4489-e3e1da6a8a3d-typeRestriction'>{"Вид ограничения\nОбщая сумма"}</Text>
                    </TableColumn>
                    <TableColumn testID='test-id-9e7b2dac-c297-a87b-14a2-0f95b85daca0' width="17%">
                        <Text testID='test-id-8b5b8d48-e266-388d-9fd2-178eff4e7500'>Дата начала действия</Text>
                    </TableColumn>
                    <TableColumn testID='test-id-790b429e-707b-309d-3d6d-b86a3c3e24ab' width="48%">
                        <Text testID='test-id-836b1369-20d2-81df-ce93-90fe5325fe65'>{"Основание"}</Text>
                    </TableColumn>
                </TableHead>
                <TableBody testID='test-id-66de8124-4579-57b1-6636-defd4b8b6daa'>
                    {getProductPaymentAccountRestrictionList(restrictionList, currencyClassifier)}
                </TableBody>
            </Table>
        </View>
    ) : ( <View testID='test-id-8ea651b6-d1e5-8801-4826-789de5c4fe0e'/> )
)
const getProductErrorPanel = (title: string, description: string, onRefresh: ()=> void) => (
    <FullScreenError testID={'test-id-7632026b-bfb0-4022-a001-236164d8b6e2'}
        title = {title}
        description = {description}
        onRefresh={onRefresh}
    />
)
const getPaymentAccountCardIndexListView = (props: IProps, cardIndexList: Models.PaymentAccountProductCardIndexList | null): React.ReactElement<View> => (
    props.cardIndexListError === null ? (
        <View testID='test-id-dc86baf2-99b8-a776-9442-7d535143c912' style={Styles.cardCardIndexListContainer}>
            {props.cardIndexListFetching || cardIndexList === null ? getLoader("Загрузка картотеки") :
            <View testID="test-id-cd805cf0-e009-11e7-80c1-9a214cf093ae"
                  style = {Styles.paymentAccountCardIndexListWrapper}>
                <View style = {Styles.paymentAccountCardIndexListContent}
                      testID="test-id-d90fa3dc-e009-11e7-80c1-9a214cf093ae">
                  <View testID="test-id-c9f99f2c-c909-11e7-abc4-cec278b6b50a"
                      style={Styles.cardIndexPaymentAccountView}>
                    <Hint
                        style = {Styles.cardIndexHint}
                        testID="test-id-2de334aa-c908-11e7-abc4-cec278b6b50a"
                        type={HintType.NEWBIE}
                        text = {"Картотека №1 - расчетные документы, ожидающие акцепта для оплаты. " +
                                "Картотека №2 - расчетные документы,не оплаченные в срок."}
                    />
                 </View>
                 <Table style = {Styles.tableCardIndexList}     testID='test-id-fe269557-9d32-cb0a-6ba9-489aa3f7a184'>
                    <TableHead testID='test-id-e46903c6-4488-d82a-7f1d-fcfd9baf9ee0'>
                        <TableColumn testID='test-id-821d769b-dc42-5a4d-6de5-320a5ff66968' width="29%">
                        </TableColumn>
                        <TableColumn testID='test-id-97ba0f6f-cef4-f2ef-9764-bef42b48d142' width="7%">
                            <Text testID='test-id-42f81b95-ae6b-1a73-ba98-1ea3eadc026b'>Валюта</Text>
                        </TableColumn>
                        <TableColumn testID='test-id-d8ebc513-b41a-e64a-d0b5-5285630a958f' width="31%"
                                     align={TableColumnAlignment.RIGHT}>
                            <Text testID='test-id-04225ce5-a82b-3a8b-ab62-16c904478f3b'>Общая сумма</Text>
                        </TableColumn>
                        <TableColumn testID='test-id-a5467725-ece9-c602-4d5d-b74a016a48fe' width="33%"
                                     align={TableColumnAlignment.RIGHT}>
                            <Text testID='test-id-4ed461f6-ad7e-14a3-6ef0-cddcc50d985f'>Не оплачено</Text>
                        </TableColumn>
                    </TableHead>
                    <TableBody testID='test-id-a2f3c70b-4cc3-883b-5fa7-45b5f6fcf427'>
                        {getProductPaymentAccountCardIndexList(cardIndexList)}
                    </TableBody>
                </Table>
            </View>
            {getCacheView(props.cardIndexListCachedDate, props.performUpdateCardIndexListResetCache)}
          </View>}
        </View>
    ) : getProductErrorPanel("Ошибка при получении картотеки продукта", props.cardIndexListError.message, props.performUpdateCardIndexListResetCache)
)

const getPaymentAccountTarrifView = (privilegeList: Models.PaymentAccountProductPrivilegeList | null, packageProduct: Models.SubPackageProduct, tariff: Models.SubTariffPlanProduct): React.ReactElement<View> => (
    <View testID='test-id-efaad548-ecb9-41a5-b5cf-d5f46ea7adfc' style={Styles.tariffListContainer}>
        <View testID='test-id-d26c8434-835f-11e7-bb31-be2e44b06b34' style={Styles.borderBox}><Text
            testID='test-id-db68b440-835f-11e7-bb31-be2e44b06b34' style={Styles.boldSubCaption}>Тарифы</Text></View>
        <View testID='test-id-1b789941-3d77-fb99-7180-6abf536c33b8' style={Styles.generalInfoContainer}>
            <Grid testID='test-id-a3cdeb2a-e8ba-4a07-c91a-f9030f0a3d8b'>
                <Row testID='test-id-a78fb3b5-aae6-b5ef-724b-1d6e7779a852'>
                    <Col testID='test-id-b76e03a9-c7a5-e1f1-d7ae-ecf9bb38d666' xs={XS_SIZE / 3}>
                        <Label testID='test-id-19cafe9d-fd1c-10f2-ef15-4d175a78785b' header={''}
                               text={'Стандартный тарифный план'} block={true}>
                            <Text testID='test-id-b97f281f-0483-9bc9-c19a-d8c230ecc668'
                                  style={Styles.tariffNameText}>{tariff.name || PLACEHOLDER}</Text>
                        </Label>
                    </Col>
                    <Col testID='test-id-ab1fc8b6-5fa6-bee1-6a03-201efdae3d54' xs={XS_SIZE / 3}>
                        <Label testID='test-id-4ea969f0-0d59-7173-1892-1b430b8cd2e1' header={''}
                               text={'Дата начала действия'} block={true}>
                            <Text testID='test-id-1a0b42be-1096-a282-e235-ab3ce8d6e4ea'
                                  style={Styles.tariffStartDateText}>{tariff.startDate && tariff.startDate.formattedString() || PLACEHOLDER}</Text>
                        </Label>
                    </Col>
                    <Col testID='test-id-2e0b70e1-4c9a-e576-10fc-4fcffed618de' xs={XS_SIZE / 3}>
                        <Label testID='test-id-b68a7abd-eb09-59c7-be5f-7fd6a801b96b' header={''}
                               text={'Дата окончания действия'} block={true}>
                            <Text testID='test-id-57b87e91-7174-7f28-9838-5377535bd1af'
                                  style={Styles.tariffEndDateText}>{tariff.endDate && tariff.endDate.formattedString() || PLACEHOLDER}</Text>
                        </Label>
                    </Col>
                </Row>
                <Row testID='test-id-cdde1067-4e9f-9921-2469-a2a699d96d87'>
                    <Col testID='test-id-144f1052-0476-224a-e0bc-43cd97cca56b' xs={XS_SIZE / 3}>
                        <View style={Styles.gridCell}>
                            <Label testID='test-id-5fcdc656-a5d6-9d5d-c6cc-5d619f5205dd' header={''}
                                   text={'Пакет услуг'} block={true}>
                                <Text testID='test-id-bac270a3-7fda-6847-b8d8-6f3517115709'
                                      style={Styles.packageNameText}>{packageProduct.name || PLACEHOLDER}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-6699a5a3-5024-4efa-9748-5492a7ee0381' xs={XS_SIZE / 3}>
                        <View style={Styles.gridCell}>
                            <Label testID='test-id-576d6f1c-bad8-9e08-74ba-e7bb58408efe' header={''}
                                   text={'Дата начала действия'} block={true}>
                                <Text testID='test-id-ace5be82-fc07-382b-d4ac-9ab639d17e53'
                                      style={Styles.packageDateStartText}>{packageProduct.startDate && packageProduct.startDate.formattedString() || PLACEHOLDER}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-35ffacdf-4df6-f4ec-c654-85e0d055ec25' xs={XS_SIZE / 3}>
                        <View style={Styles.gridCell}>
                            <Label testID='test-id-36d419ff-462f-6938-7308-dd6167fc7e7d' header={''}
                                   text={'Дата окончания действия'} block={true}>
                                <Text testID='test-id-6c3ad7d0-f824-a209-ba0a-2f5df4e46296'
                                      style={Styles.packageDateEndText}>{packageProduct.endDate && packageProduct.endDate.formattedString() || PLACEHOLDER}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>
            </Grid>
        </View>
        {privilegeList && Array.isArray(privilegeList.data) && privilegeList.data.length > 0
            ? getProductPaymentAccountPrivilegeList(privilegeList)
            : null
        }
    </View>
)

const getPaymentAccountVspServiceView = (props: IProps, vspInfo: Models.PaymentAccountProductVspInfo | null): React.ReactElement<View> => (
    props.currentPaymentAccountProduct.paymentAccountProduct && vspInfo ? (
        <View testID='test-id-8bb30553-4869-fa2f-d45d-f7a8d15181f1' style={Styles.vspInfoContainer}>
            <Grid testID='test-id-5a4f21b4-e493-2078-50b7-1b285f4d1a36'>
                <Row testID='test-id-fa9f7dc8-021f-b285-8148-f8d502e50dc5'>
                    <Col testID='test-id-b24fcc68-4b67-8f02-d45d-0746d9e19cb4' xs={ XS_SIZE / 2 }>
                        <Label testID='test-id-07545425-0fca-0cfc-b023-19dc57fcdc29' header={''}
                               text={'Наименование ВСП'} block={true}>
                            <Text
                                testID='test-id-e24f801d-de94-f175-392f-451556bb893d'>{vspInfo.name || PLACEHOLDER}</Text>
                        </Label>
                    </Col>
                    <Col testID='test-id-c43a624f-f9ac-aea3-5fca-b88bc1bf680f' xs={ XS_SIZE / 3 }>
                        <Label testID='test-id-86d10b86-a70d-783f-d14d-b75e3421646c' header={''} text={'Номер ВСП'}
                               block={true}>
                            <Text
                                testID='test-id-141082f6-eaad-8086-f05e-72cdd6233502'>{
                                        `${props.currentPaymentAccountProduct.paymentAccountProduct.regionId}-${props.currentPaymentAccountProduct.paymentAccountProduct.agencyId}-${props.currentPaymentAccountProduct.paymentAccountProduct.branchId}`
                                        }</Text>
                        </Label>
                    </Col>
                </Row>
                <Row testID='test-id-3a6bc98f-6c29-fe86-2bf6-7d454bc3c8fd'>
                    <Col testID='test-id-8c156c29-038b-f5bd-6bb8-9ddb10f760aa' xs={ XS_SIZE / 2 }>
                        <View style={Styles.gridCell}>
                            <Label testID='test-id-14e7096b-0cd7-aba8-acb6-f64b55686280' header={''} text={'Адрес ВСП'}
                                   block={true}>
                                <Text
                                    testID='test-id-de9252cf-a023-862b-fe5f-fda4d3bad996'>{vspInfo.address || PLACEHOLDER}</Text>
                            </Label>
                        </View>
                    </Col>
                    <Col testID='test-id-d8fcabc9-8b2f-327e-8fe8-fb63a6219ecd' xs={ XS_SIZE / 3 }>
                        <View style={Styles.gridCell}>
                            <Label testID='test-id-60302e20-1bd1-ab83-4d1a-aca446ba6b2b' header={''}
                                   text={'Ответственный по счету'} block={true}>
                                <Text
                                    testID='test-id-2be2e8b2-5e39-5f1a-a378-db49494365b5'>{props.currentPaymentAccountProduct.paymentAccountProduct.accountResp || PLACEHOLDER}</Text>
                            </Label>
                        </View>
                    </Col>
                </Row>
            </Grid>
        </View>
    ) : ( <View testID='test-id-3ec077ab-a0b5-0a98-9b38-8c5e1ee96c9f'/> )
)

const getSumTextField = (money: number | null, label: string = "", currency: ModelsApp.Classifier = defaultValues.Classifier, block = false, isSmall = true): React.ReactElement<View> => (
    
    (money == null) || isNaN (money) ? (
        
        <Label
            testID={`test-id-8ff741e0-6488-6a44-22d0-8b01678f84cf-${money}-${label}`}
            header={''}
            text={label}
            block={block}
        >
            <Text
                testID={`test-id-8ff741e0-6488-6a44-22d0-8b01678f84cf-${money}-${label}`}
                style={ isSmall ? {} : Styles.sumTextPlaceholder }
            >
                {PLACEHOLDER}
            </Text>
        </Label>
    
    ) : (
        
        <SumText
            small={isSmall}
            testID={`test-id-70d52bb9-3819-9238-62ab-3e70c16450d4-${money}-${label}`}
            block={block}
            label={label}
            currency={currency.code}
            value={money}
        />

    )

)


const operationId = (operation: Models.PaymentAccountProductOperation, perfix: string = '', postfix: string = ''): string => (
    `${ perfix ? `${ perfix }-` : '' }${

        operation && operation.date ? operation.date.toISOString () : (new Date()).toISOString()

    }-${

        operation && operation.sum || 0

    }${ postfix ? `-${ postfix }` : '' }`
)

const getPaymentAccountOperationListRows = (props: IProps, operationList: Models.PaymentAccountProductOperationList): Array<React.ReactElement<TableRow>> => (
    Array.isArray(operationList.data) ? (
        operationList.data.compact().map((operation: Models.PaymentAccountProductOperation, index: number): React.ReactElement<TableRow> => (
            <TableRow testID={ operationId (operation, 'test-id', 'row') } key={ operationId (operation, 'row') }>
                <TableCell testID={ operationId (operation, 'test-id', 'datetime') } key={ operationId (operation, 'cell-datetime') }>
                    <Text
                        testID={ operationId (operation, 'test-id', 'date-text') }
                        key={ operationId (operation, 'text-date') }
                        style={ Styles.operationDateText }
                    >
                        { operation.date ? operation.date.formattedString() : PLACEHOLDER }
                    </Text>
                    <Text
                        testID={ operationId (operation, 'test-id', 'time-text') }
                        key={ operationId (operation, 'text-time') }
                        style={ Styles.operationTimeText }
                    >    
                        {operation.date ? operation.date.formattedString('HH:mm') : PLACEHOLDER}
                    </Text>
                </TableCell>
                <TableCell testID={ operationId (operation, 'test-id', 'target') } key={ operationId (operation, 'cell-target') }>
                    <Text
                        testID={ operationId (operation, 'test-id', 'target-text') }
                        style={ Styles.operationTargetText }
                    >
                        { operation.correspondent || PLACEHOLDER }
                    </Text>
                </TableCell>
                <TableCell testID={ operationId (operation, 'test-id', 'purpose') } key={ operationId (operation, 'cell-purpose') }>
                    <Text
                        testID={ operationId (operation, 'test-id', 'purpose-text') }
                        style={ Styles.operationPurposeText }
                    >
                        { operation.purpose || PLACEHOLDER }
                    </Text>
                </TableCell>
                <TableCell testID={operationId(operation, 'test-id', 'sum')} key={operationId(operation, 'cell-sum')}
                    style={Styles.sumTextRight}>
                    {
                        operation.sum ? (

                            <View
                                testID={operationId(operation, 'test-id', 'sum-text-container')}
                                key={operationId(operation, '', 'sum-text-container')}
                                style={ Styles.sumTextContainer }>

                                <Text
                                    testID={operationId(operation, 'test-id', 'sum-text')}
                                    key={operationId(operation, '', 'sum-text')}
                                    style={Styles.sumText}>

                                    {
                                        `${ operation.sum.sumString (3, ' ', 2) }${
                                            operation.currency && ` ${ operation.currency.code }` || ''
                                        }`
                                    }
                                </Text>
                            </View>

                        ) : (

                                <View testID={operationId(operation, 'test-id', 'no-sum-view')}>
                                    <Text
                                        testID={operationId(operation, 'test-id', 'no-sum-text')}
                                        style={Styles.operationNoSumText}
                                    >
                                        {PLACEHOLDER}
                                    </Text>
                                </View>

                            )
                    }
                </TableCell>
            </TableRow>
        ))
    ) : []
)

const OPERATION_PERIOD_FILTER_POPOVER = 'OPERATION_PERIOD_FILTER_POPOVER'
const OPERATION_LIST_FILTER_POPOVER = 'OPERATION_LIST_FILTER_POPOVER'
const OPERATION_LEDGER_SIDE_FILTER_POPOVER = 'OPERATION_LEDGER_SIDE_FILTER_POPOVER'

const periodTypeStringValue = (type: Enums.PeriodType): string => {
    switch (type) {
        case Enums.PeriodType.Last5Days:
            return 'Last5Days'
        case Enums.PeriodType.Last10Days:
            return 'Last10Days'
        case Enums.PeriodType.Last15Days:
            return 'Last15Days'
        case Enums.PeriodType.Last30Days:
            return 'Last30Days'
        case Enums.PeriodType.Custom:
        default:
            return 'Custom'
    }
}

const getPeriodFilterRadioGroup = (props: IProps): React.ReactElement<RadioGroup> => (
    <RadioGroup testID='test-id-43754701-34f0-b5ce-2185-71f2867a299f'
                onChange={
                    (index: number) => {
                        switch (index) {
                            case 0:
                                props.performInputPeriodType(Enums.PeriodType.Last5Days);
                                break
                            case 1:
                                props.performInputPeriodType(Enums.PeriodType.Last10Days);
                                break
                            case 2:
                                props.performInputPeriodType(Enums.PeriodType.Last15Days);
                                break
                            case 3:
                                props.performInputPeriodType(Enums.PeriodType.Last30Days);
                                break
                            case 4:
                            default:
                                props.performInputPeriodType(Enums.PeriodType.Custom);
                                break
                        }
                    }
                }
    >
        <RadioButton testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                     key={periodTypeStringValue(Enums.PeriodType.Last5Days)}
                     value={periodTypeStringValue(Enums.PeriodType.Last5Days)}
                     label={getPeriodTypeName(props, Enums.PeriodType.Last5Days)}
        />
        <RadioButton testID='test-id-1ca68470-28e9-3c66-a8af-7f280a307de5'
                     key={periodTypeStringValue(Enums.PeriodType.Last10Days)}
                     value={periodTypeStringValue(Enums.PeriodType.Last10Days)}
                     label={getPeriodTypeName(props, Enums.PeriodType.Last10Days)}
        />
        <RadioButton testID='test-id-82aa0b82-586b-bd18-b990-0a04938fc0f5'
                     key={periodTypeStringValue(Enums.PeriodType.Last15Days)}
                     value={periodTypeStringValue(Enums.PeriodType.Last15Days)}
                     label={getPeriodTypeName(props, Enums.PeriodType.Last15Days)}
        />
        <RadioButton testID='test-id-e873b2c5-dab7-6073-f426-c510cf4416aa'
                     key={periodTypeStringValue(Enums.PeriodType.Last30Days)}
                     value={periodTypeStringValue(Enums.PeriodType.Last30Days)}
                     label={getPeriodTypeName(props, Enums.PeriodType.Last30Days)}
        />
        <RadioButton testID='test-id-40d4d34a-7fe1-0eba-0e6e-5ce0a6a64951'
                     key={periodTypeStringValue(Enums.PeriodType.Custom)}
                     value={periodTypeStringValue(Enums.PeriodType.Custom)}
                     label={'Другой период'}
        />
    </RadioGroup>
)

const OPERATION_TYPE_LIST: Array<Enums.OperationType> = [Enums.OperationType.DebtAndCredit, Enums.OperationType.Debt, Enums.OperationType.Credit]
const getOperationTypeLable = (type: Enums.OperationType | null): string => {
    switch (type) {
        case Enums.OperationType.DebtAndCredit:
            return 'Все'
        case Enums.OperationType.Credit:
            return 'Расход'
        case Enums.OperationType.Debt:
            return 'Приход'
        default:
            return PLACEHOLDER
    }
}

const getOperationTypeString = (type: Enums.OperationType): string => {
    switch (type) {
        case Enums.OperationType.DebtAndCredit:
            return 'DebtAndCredit'
        case Enums.OperationType.Debt:
            return 'Debt'
        case Enums.OperationType.Credit:
            return 'Credit'
        default:
            return PLACEHOLDER
    }
}

const getPeriodTypeName = (props: IProps, type: Enums.PeriodType): string => {
    switch (type) {
        case Enums.PeriodType.Last5Days:
            return 'Последние 5 дней'
        case Enums.PeriodType.Last10Days:
            return 'Последние 10 дней'
        case Enums.PeriodType.Last15Days:
            return 'Последние 15 дней'
        case Enums.PeriodType.Last30Days:
            return 'Последние 30 дней'
        case Enums.PeriodType.Custom:
            return (props.inputFilterPeriodStart && props.inputFilterPeriodEnd ?
                `${ props.inputFilterPeriodStart } - ${ props.inputFilterPeriodEnd }` : '')

        default:
            return PLACEHOLDER
    }
}

const getOperationListFilterContent = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-9a05291a-1098-6487-c14b-b5f89a3a55a0'>
        <View testID='test-id-92b4b66d-e4cc-a284-0749-799ef5f68dd4'>
            <RadioGroup testID='test-id-a20b8b70-1871-a12f-aca8-1af2315b7a0f'
                        value={getOperationTypeString(props.inputOperationType)}
                        onChange={
                            (index: number): void => OPERATION_TYPE_LIST[index] &&
                                props.performInputOperationType(OPERATION_TYPE_LIST[index])
                        }
            >
                <RadioButton testID='test-id-82875e85-185e-28db-ff7f-18866ae98575'
                             key={getOperationTypeString(Enums.OperationType.DebtAndCredit)}
                             value={getOperationTypeString(Enums.OperationType.DebtAndCredit)}
                             label={getOperationTypeLable(Enums.OperationType.DebtAndCredit)}
                />
                <RadioButton testID='test-id-64921f9b-8c41-a96b-f3ef-0ff511eedd66'
                             key={getOperationTypeString(Enums.OperationType.Debt)}
                             value={getOperationTypeString(Enums.OperationType.Debt)}
                             label={getOperationTypeLable(Enums.OperationType.Debt)}
                />
                <RadioButton testID='test-id-cd63f480-ca16-2489-1a40-95c4152122f4'
                             key={getOperationTypeString(Enums.OperationType.Credit)}
                             value={getOperationTypeString(Enums.OperationType.Credit)}
                             label={getOperationTypeLable(Enums.OperationType.Credit)}
                />
            </RadioGroup>
        </View>
        <View testID='test-id-fb9d2501-9dd0-0e6e-57d2-be0c4a1df694'>
            <NumberInput testID='test-id-69adcdfb-7fc6-bac1-f1e5-f6301f3e7e65'
                         fractionalDigitsCount={3}
                         value={`${ props.inputSumMin || props.filterSumMin || '' }`}
                         maxLength={12}
                         currency={'RUR'}
                         label={'Сумма операции от'}
                         onChange={(value: string): void => props.performInputSumMin(parseInt(value))}
            />
            <NumberInput testID='test-id-7252483c-e236-43f4-7f8f-55f25207a01d'
                         fractionalDigitsCount={3}
                         value={`${ props.inputSumMax || props.filterSumMax || '' }`}
                         maxLength={12}
                         currency={'RUR'}
                         label={'Сумма операции до'}
                         onChange={(value: string): void => props.performInputSumMax(parseInt(value))}
            />
        </View>
    </View>
)

interface PaymentAccountOperationListFilterItem {
    name: string;
    label: string;
    value: Enums.OperationType | number | null;
    clear: () => void;
}

const getOperationListFilterSet = (props: IProps): Array<PaymentAccountOperationListFilterItem> => (
    ([{

        name: 'CurrentOperationSumMin',
        label: props.filterSumMin ? `от ${ props.filterSumMin.sumString() } RUB` : '',
        value: props.filterSumMin,
        clear: () => props.performInputSumMin (null, true),

    }, {

        name: 'CurrentOperationSumMax',
        label: props.filterSumMax ? `до ${ props.filterSumMax.sumString() } RUB` : '',
        value: props.filterSumMax,
        clear: () => props.performInputSumMax (null, true),

    }, {

        name: 'CurrentOperationType',
        label: getOperationTypeLable(props.filterOperationType) || '',
        value: (props.filterOperationType == Enums.OperationType.DebtAndCredit) ? null : props.filterOperationType,
        clear: () => props.performInputOperationType (Enums.OperationType.DebtAndCredit, true),

    }]).compact().filter((filterItem: PaymentAccountOperationListFilterItem): boolean => (

        filterItem.value != null

    ))
)

const getPaymentAccountOperationListFilter = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-41dfb85e-13c8-73a8-6a9d-aa936ad22aeb' style={Styles.filterValueView}>
        <PopoverTarget testID='test-id-464a7268-5245-be7d-72f0-c03401938235' refName={OPERATION_LIST_FILTER_POPOVER}>
            <NavigationFilterButton
                testID='test-id-operation-list-filter-button'
                onExecute={props.performPopoverFilterShow}
                count={ getOperationListFilterSet(props).length }
            />
        </PopoverTarget>
    </View>
)
const getLoader = (text: string = ""):React.ReactElement<LoaderWithText> => (
    <LoaderWithText
        text = {text}
        testID= {`test-id-${new Date().getTime()}`} />

)
const getPaymentAccountOperationListView = (props: IProps): React.ReactElement<View> => (

    props.currentPaymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct ? (

        <View testID='test-id-3d0b72df-1abc-3b77-e943-b9179e7689d8' style={ Styles.operationListView }>
            {props.operationListFetching ? getLoader("Загрузка истории операций") :
            <View testID="test-id-166812c2-e006-11e7-80c1-9a214cf093ae"
                  style = {Styles.paymentAccountOperationListWrapper}>
                <View style = {Styles.paymentAccountOperationListContent}
                      testID="test-id-e98463b0-e009-11e7-80c1-9a214cf093ae">
                    <View testID='test-id-f75ea7e3-d0a7-48ed-15af-35e40a4fc55e' style={ Styles.filterDescription }>
                        <Text testID='test-id-1010ea86-a0ef-2905-5c86-0e448fb703dd' style={ Styles.filterDescriptionText }>
                            { 'Список содержит 50 последних операций' }
                        </Text>
                    </View>
                    {getOperationListFilterSet(props).length ? (

                        <View testID='test-id-filter-bar' style={ Styles.filterBar }>
                            {
                                getOperationListFilterSet(props).filter((filterItem: PaymentAccountOperationListFilterItem): boolean => (

                                    filterItem.label ? true : false

                                )).map((filterItem: PaymentAccountOperationListFilterItem, index: number): React.ReactElement<View> => (

                                    <View
                                        testID={ `test-id-${ filterItem.name }-label` }
                                        key={ `label-${ filterItem.name }` }
                                        style={ Styles.operationListFilterLabel }
                                    >
                                        <Text
                                            testID={ `test-id-${ filterItem.name }-label-title` }
                                            style={ Styles.operationListFilterLabelText }
                                        >
                                            { filterItem.label }
                                        </Text>
                                        <Button testID={ `test-id-${ filterItem.name }-button` } onExecute={ filterItem.clear }>
                                            <Icon testID={ `test-id-${ filterItem.name }-clear` } disabled type={ IconType.MrmClear }/>
                                        </Button>
                                    </View>

                                ))
                            }
                        </View>

                    ) : null
                }
                <View testID='test-id-baed7120-5c8b-18e6-b5f0-0eefc2447e0c' style={ Styles.operationListTableView }>
                    <Table testID='test-id-3af90293-687f-c83e-d7c1-7d5e81ff40a9' style={Styles.operationListTable}>
                        <TableHead testID='test-id-861bc896-957b-de9f-915c-d530b5e4fbf9'>
                            <TableColumn testID='test-id-96385f77-c3d0-6577-ec7f-93138a658b77' key={'Operation datetime'}
                                         width={'15%'}>
                                <Text testID='test-id-53e49565-fc0a-97fd-8fb0-0d22eaaba34f'>
                                    { 'Дата и время\nоперации' }
                                </Text>
                            </TableColumn>
                            <TableColumn testID='test-id-0bcc5902-b653-e67c-7d00-00f704656ef8' key={'Operation account'}
                                         width={'30%'}>
                                <Text testID='test-id-f1680fb3-f15a-4238-1745-b148a3a06be1'>Корреспондент</Text>
                            </TableColumn>
                            <TableColumn testID='test-id-d86a9980-017a-7909-a07d-5912406214ea' key={'Operation purpose'}
                                         width={'27%'}>
                                <Text testID='test-id-bfe1dd6b-057c-aa61-ce4f-783946733f7c'>Назначение платежа</Text>
                            </TableColumn>
                            <TableColumn testID='test-id-5fda1c5f-4ef1-759e-b4d4-f363c86b5d36' key={'Operation sum'}
                                width={'28%'} align={TableColumnAlignment.RIGHT}>
                                <Text testID='test-id-9ac7145c-65c7-77ef-3baa-0768ee7deab7'>Сумма операции</Text>
                            </TableColumn>
                        </TableHead>
                        <TableBody testID='test-id-69867829-bd45-0f8f-4d9f-b820039a2fe7'>
                            { getPaymentAccountOperationListRows (props, props.operationFilteredList) }
                        </TableBody>
                    </Table>
                </View>
                </View>
            {getCacheView(props.operationListCachedDate, props.performUpdateOperationListResetCache)}

            <Popover testID='test-id-215d0c15-d7e6-f239-d6e7-c4b5932d6434'
                target={PopoverTarget.getRef(OPERATION_LIST_FILTER_POPOVER)}
                opened={props.isVisiblePopoverFilter}
                onOutsideTap={props.performPopoverFilterHide}
                type={PopoverType.WIDE}
                style={{ height: 400, width: 400 }}
                position={[PopoverPosition.BOTTOM]}>

                <View testID={'test-id-operation-list-filter-popover'} style={Styles.operationListFilterView}>
                    <SplitPanel testID='test-id-f442b5f4-3e93-d2ae-0110-843a75cb55c4' id={
                        Util.getNavigationOperationPeriodTypeString(
                            Enums.NavigationAppCRMOperationListFilter.OperationListFilter
                        )}
                    >
                        <ContentPanel testID='test-id-operationListFilter' style={{ backgroundColor: '#fff' }}>
                            <Page testID='test-id-bccc1e52-9021-ec53-68e3-4064c14cd36d' scrollEnabled={true}
                                content={getOperationListFilterContent(props)}>
                                <LeftPageHeader testID='test-id-4d1755a4-cdee-eabe-df23-275cff66f899'>
                                    <NavigationTextButton testID='test-id-72e7b143-ec9a-4e7a-c7cb-ef5f3e2c935d'
                                        title={'Сбросить'}
                                        onExecute={() => props.performFilterReset()} />
                                </LeftPageHeader>
                                <CenterPageHeader testID='test-id-b1e24ee2-7c43-d1a0-9f71-75639160e70e'>
                                    <H2 testID='test-id-b1e24ee2-7c43-d1a0-9f71-75639160e70e'>Фильтры операций</H2>
                                </CenterPageHeader>
                                <RightPageHeader testID='test-id-8e54ea57-2328-4d66-b511-0be14e0f6532'>
                                    <NavigationTextButton testID='test-id-9015595f-3cc0-a58a-5b25-0e86e1abf1b1'
                                        title={'Применить'}
                                        onExecute={() => props.performFilterApply()} />
                                </RightPageHeader>
                            </Page>
                        </ContentPanel>
                    </SplitPanel>
                </View>
            </Popover>
            </View>}
        </View>

    ) : (

        <View testID='test-id-cbf78b2a-6ef7-e947-e20e-828f05ba6b01'/>

    )

)


interface stringListReduction {
    string: string;
    itemsLeft: number;
}

const LABEL_LENGTH_LIMIT: number = 90
const getReducedListLabel = (reduction: stringListReduction, limit: number = LABEL_LENGTH_LIMIT): string => (
    reduction.string.ellipsis(limit) + (reduction.itemsLeft ? ` (еще ${ reduction.itemsLeft })` : '')
)

const getListLabel = (list: Array<string>, limit: number = LABEL_LENGTH_LIMIT): string => getReducedListLabel(
    list.reduce((reduction: stringListReduction, item: string, index: number, items: Array<string>): stringListReduction => (
        (reduction.string.length < limit) ? ({

            string: reduction.string ? ([reduction.string, item]).join(', ') : item,
            itemsLeft: items.length - index - 1,

        }) : reduction
    ), {

        string: '',
        itemsLeft: list.length,

    }), limit
)

const getRestrictionListLabel = (restrictionList: Models.PaymentAccountProductRestrictionList): string => (
    // props.currentPaymentAccountProduct &&
    // props.currentPaymentAccountProduct.paymentAccountProduct &&
    // props.currentPaymentAccountProduct.paymentAccountProduct.restrictionList &&
    restrictionList &&
    getListLabel(
        // props.currentPaymentAccountProduct.paymentAccountProduct.restrictionList.data.map (
        restrictionList.data.map(
            (item: Models.ProductPaymentAccountRestriction): string => item.annotation || ''
        ), LABEL_LENGTH_LIMIT
    ) || Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA)
)

const getCardIndexListLabel = (cardIndexList: Models.PaymentAccountProductCardIndexList): string => (
    cardIndexList &&
    getListLabel(
        cardIndexList.data.map(
            (item: Models.PaymentAccountProductCardIndex): string => item.name
        ), LABEL_LENGTH_LIMIT
    ) || Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA)
)

const getTariffLabel = (tariff: Models.SubTariffPlanProduct): string => (
    tariff &&
    // tarrif && [tarrif.name, tarrif.packageName,] ||
    [
        tariff.name,
    ].join(', ') ||
    Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA)
)

const getVSPServiceLabel = (productVspInfo: Models.PaymentAccountProductVspInfo | null): string => (
    productVspInfo && productVspInfo.name ||
    Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA)
)

const getOperationListLabel = (props: IProps): string => {
    const operationList: Array<Models.PaymentAccountProductOperation> =
        props.operationFilteredList && props.operationFilteredList.data || []

    const sortedByDate: Array<Models.PaymentAccountProductOperation> = operationList.compact().sort(
        ($1: Models.PaymentAccountProductOperation, $2: Models.PaymentAccountProductOperation): number => (
            ($1.date && $2.date) ? ($1.date.isBefore($2.date) ? -1 : 1) : 0
        )
    )

    const lastOperation: Models.PaymentAccountProductOperation | null = sortedByDate && sortedByDate.pop() || null
    return lastOperation && lastOperation.date && `последняя операция от ${

        lastOperation.date.formattedString()

    }` || Util.getPlaceholderStringRepresentation(Util.UndefinedValuesPlaceholder.NO_DATA)
}


interface PaymentAccountDetailListItem {

    isHighlighted: boolean;
    isFetching: boolean;
    navigate: () => void;
    repeat: () => void;
    title: string;
    value: string;
    error: Error | null;
    eksErrorList: Models.EksError[] | null,
    isDisabled: boolean,
    key: string;

}

const paymentAccountDetailCellStyle = (isFetching: boolean): number => isFetching ? Styles.listItemFetching : Styles.detailListItemCell
const getPaymentAccountDetailListItemView = ({ isHighlighted, isDisabled, isFetching, navigate, repeat, title, value, error, key, eksErrorList, }: PaymentAccountDetailListItem): React.ReactElement<TableRow> => (

    <TableRow testID={ `test-id-${ key }${title}-row` } key={ `${title}-${ key }-row` } onClick={ error ? repeat : ()=> { !isFetching && !isDisabled && navigate()} }>
        <TableCell testID={`test-id-${title}-${key}-cell`} style={ Styles.detailListItemCell }>
            <View
                testID={ `test-id-${title}-${ key }-container` }
                key={`${title}-${key }-container`}
                style={[
                    Styles.paymentAccountDetailsTableRow,
                    isFetching ? Styles.paymentAccountDetailsTableRowFetching : {},
                ]}>

                <View testID={ `test-id-${title}-${ key }-title-view` } key={ `${title}-${ key }-title-view` }
                      style={ Styles.paymentAccountProductTitleView }>
                    <Text testID={ `test-id-${title}-${ key }-title` } key={ `${title}-${ key }-title` }
                        style={[ Styles.paymentAccountProductTitle, isHighlighted ? Styles.redColorText : {} ]}>

                        { title }
                    </Text>
                    {

                        error || eksErrorList ? (

                            <Text
                                testID={ `test-id-${ key }-error` }
                                key={ `${ key }-error` }
                                style={ Styles.productDetailListItemFetchError }
                                numberOfLines={ 1 }
                                ellipsizeMode={ 'tail' }>

                                { eksErrorList ? Util.getProductListItemErrorText(null)
                                               : Util.getProductListItemErrorText(error)
                                }
                            </Text>

                        ) : null

                    }
                </View>
                <View testID={ `test-id-${ key }-value-view` } style={ Styles.paymentAccountDetailsLabel }>
                    {
                        isFetching ? (

                            <Text testID={ `test-id-${ key }-is-fetching` } key={ `${ key }-is-fetching` }
                                style={ Styles.productDetailListItemFetchingText }>

                                { Util.productListItemFetching }
                            </Text>

                        ) : (error || eksErrorList ? (

                            Util.isClientNotFoundInEksSystem(error) == false ?
                                <NavigationIconButton
                                    testID={ `test-id-${ key }-refresh-button` }
                                key={ `${ key }-refresh-button` }
                                type={ NavigationIconButtonType.REFRESH }
                                onExecute={ repeat }/>
                            : null

                        ) : ([(

                            <View
                                testID={ `test-id-${ key }-details-view` }
                                key={ `${ key }-details-view` }
                                style={ Styles.paymentAccountProductTitleView }>

                                <Text
                                    testID={ `test-id-${ key }-value` }
                                    key={ `${ key }-value` }
                                    numberOfLines={ 1 }
                                    style={ Styles.paymentAccountDetailsLabelText }
                                    ellipsizeMode={ 'tail' }>

                                    { value }
                                </Text>
                            </View>

                        ), (

                            <Button
                                testID={ `test-id-${ key }-nav-button` }
                                disabled={isDisabled}
                                key={ `${ key }-nav-button` }
                                onExecute={ navigate }>

                                <Icon testID={ `test-id-${ key }-nav-icon` } disabled type={ IconType.MrmLink }/>
                            </Button>

                        )]))
                    }
                </View>
            </View>
        </TableCell>
    </TableRow>

)


const getCommonInfoPaymentAccountProduct = (props: IProps,
                                            productRestrictionList: Models.PaymentAccountProductRestrictionList,
                                            productTariff: Models.SubTariffPlanProduct,
                                            productVspInfo: Models.PaymentAccountProductVspInfo | null,
                                            productPrivilegeList: Models.PaymentAccountProductPrivilegeList | null,
                                            productPackage: Models.SubPackageProduct): React.ReactElement<View> => (
    
    (props.currentPaymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct) ? (

        <View testID='test-id-3ecb8f24-d8a8-ae70-06d6-0bf8c664dd9b' style={ Styles.paymentAccountInfoView }>
            <View testID='test-id-6889949b-3b49-5c01-3b29-3d75fa7b4e4b' style={Styles.generalInfoTextView}>
                <Label testID='test-id-42da423b-305e-9661-d69b-58336562ec46' header={''} text={'Клиент'} block={true}>
                    <Text testID='test-id-cdf04264-49d1-6ce8-96ba-de088716c8e4'
                          style={Styles.generalInfoTextValue}>
                        {Util.displayCustomerWithLegalForm(props.currentCustomerManaged)}
                    </Text>
                </Label>
            </View>
            <View testID='test-id-847dbdfb-2562-6707-024b-64ecec1446b7' style={Styles.generalInfoTextView}>
                <Label testID='test-id-42da423b-305e-9661-d69b-58336562ec46' header={''} text={'Номер счета'} block={true}>
                    <Text testID='test-id-0d38edd7-7083-17e7-04ad-2ce8689fc244' style={Styles.generalInfoTextValue}>
                        {
                            props.currentPaymentAccountProduct.paymentAccountProduct.accountNumber &&
                            props.currentPaymentAccountProduct.paymentAccountProduct.accountNumber.formatAccountNumber() ||
                            PLACEHOLDER
                        }
                    </Text>
                </Label>

            </View>
            { getPaymentAccountGeneralInfoView (props, props.currentPaymentAccountProduct.paymentAccountProduct) }
            <View testID='test-id-ba7566aa-7d5e-9035-63ec-fceef26babc6' style={Styles.mainTableContainer}>
                <View style={Styles.hr}/>
                <Table testID='test-id-6b08f46a-4ee5-b770-3b83-9000e322f34b' style={Styles.mainTable}>
                    <TableBody testID='test-id-88cff8be-1067-1ff5-0be2-2bc5c4a151d2'>
                        {[
                            productRestrictionList &&
                            Array.isArray(productRestrictionList.data) &&
                            productRestrictionList.data.length > 0 ? {

                                isHighlighted: true,
                                isFetching: false,
                                navigate: props.navigateToRestrictionListScreen,
                                repeat: () => {
                                },
                                title: 'Ограничения',
                                value: getRestrictionListLabel(productRestrictionList),
                                error: null,
                                isDisabled: false,
                                eksErrorList: null,
                                key: 'restriction-list-item',

                            } : null,
                            props.cardIndexListFetching ||
                            (props.cardIndexList &&
                            props.currentPaymentAccountProduct.paymentAccountProduct.isExistCardIndex &&
                            ((Array.isArray(props.cardIndexList.data)
                            && props.cardIndexList.data.length > 0) ||
                            (Array.isArray(props.cardIndexList.eksErrorList)
                            && props.cardIndexList.eksErrorList.length > 0) ||
                            (props.cardIndexListError != null))) ? {

                                isHighlighted: true,
                                isFetching: props.cardIndexListFetching,
                                navigate: props.navigateToCardIndexListScreen,
                                repeat: props.getPaymentAccountCardIndexList,
                                title: 'Картотеки',
                                eksErrorList: (
                                    Array.isArray(props.cardIndexList.eksErrorList) &&
                                    props.cardIndexList.eksErrorList.length > 0
                                        ? props.cardIndexList.eksErrorList
                                        : null),
                                isDisabled: false,
                                value: getCardIndexListLabel(props.cardIndexList),
                                error: props.cardIndexListError,
                                key: 'card-index-list-item',

                            } : null, {

                                isHighlighted: false,
                                isFetching: false,
                                navigate: props.navigateToTariffScreen,
                                repeat: () => {
                                },
                                title: 'Тарифы',
                                value: getTariffLabel(productTariff),
                                error: null,
                                isDisabled: !productTariff.name  &&
                                            !productPackage.name &&
                                            !(productPrivilegeList &&
                                              Array.isArray(productPrivilegeList.data) &&
                                              productPrivilegeList.data.length>0),
                                eksErrorList: null,
                                key: 'tariff-item',

                            }, {

                                isHighlighted: false,
                                isFetching: props.productVspInfoFetching,
                                navigate: props.navigateToVspInfoScreen,
                                repeat: props.callGetProductVspInfo,
                                title: 'ВСП обслуживания',
                                eksErrorList: null,
                                isDisabled: !(productVspInfo &&
                                (productVspInfo.name ||
                                 productVspInfo.address ||
                                 props.currentPaymentAccountProduct.paymentAccountProduct.accountResp ||
                                 props.currentPaymentAccountProduct.paymentAccountProduct.regionId ||
                                 props.currentPaymentAccountProduct.paymentAccountProduct.branchId ||
                                 props.currentPaymentAccountProduct.paymentAccountProduct.agencyId)),
                                value: getVSPServiceLabel(productVspInfo),
                                error: props.productVspInfoFetchingError,
                                key: 'vsp-services-item',

                            }, Util.isActiveProductList(props.productListAgreementStatus) ? {

                                isHighlighted: false,
                                isFetching: props.operationListFetching,
                                navigate: props.navigateToOperationListScreen,
                                repeat: () => props.callGetOperationList(false),
                                title: 'История операций',
                                eksErrorList: props.operationList &&
                                              Array.isArray(props.operationList.eksErrorList) &&
                                              props.operationList.eksErrorList.length > 0 ?
                                                props.operationList.eksErrorList : null,
                                isDisabled: checkDisabledStatus(props),
                                value: getOperationListLabel(props),
                                error: props.operationListError,
                                key: 'operation-list-item',
                            } : null,
                        ].map((item: PaymentAccountDetailListItem, index: number): React.ReactElement<TableRow> | null =>
                            item ? getPaymentAccountDetailListItemView({...item, key: `${index}${item.key}`}) : null )
                        }
                    </TableBody>
                </Table>
            </View>
        </View>
    
    ) : ( <View testID='test-id-5d770604-a8c4-e46a-4da2-b3939d793595'/> )

)

const checkDisabledStatus = (props: IProps) => {
    
    if (!props.operationFilteredList.data || props.operationFilteredList.data.length === 0) {
        
        return true
    }

    return false
}

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const productRestrictionList = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.restrictionList || defaultValues.testDataPaymentAccountRestrictionList
    const productPackage = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.package || defaultValues.SubPackageProduct
    const privilegeList = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.privilegeList || null
    const productTariff = props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.tariff || defaultValues.SubTariffPlanProduct
    return props.currentPaymentAccountProduct ? (
        <View testID='test-id-e2f67c96-4335-e4a7-fcdd-8c15d866464c' style={Styles.heightWindow}>
            <SplitPanel testID='test-id-c87049f5-47b1-542c-cc09-e88b8e25fba4'
                        id={Util.getNavigationContentProductPaymentAccountCard(
                            Enums.NavigationContentProductPaymentAccountCard.AppCRM_PaymentAccountCard
                        )}>
                <ContentPanel testID='test-id-23e84b65-7b54-13fc-c388-531edd3eee95' style={{backgroundColor: 'white'}}>
                    <Page testID='test-id-29ed2987-4b3a-26e9-0834-f5f02fb8bd5b' scrollEnabled={ false }
                          content={getCommonInfoPaymentAccountProduct(props, productRestrictionList, productTariff, props.productVspInfo, privilegeList, productPackage)}>
                        <LeftPageHeader testID='test-id-45276c8a-aa81-3f67-cd35-a4fc1fb89b38'>
                            <NavigationBackButton key={"ProductListRestrictionListNavBackButton"}
                                                  testID='test-id-2b74733e-c848-11e7-abc4-cec278b6b50a'
                                                  title={false}
                                                  onClick={()=> props.navigateProductListBack()}/>
                            <View key={"ProductListRestrictionListNavBackButtonView"}
                                  style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-239089a0-c848-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-27a125d6-c848-11e7-abc4-cec278b6b50a"
                                    title={props.productContextMode == EnumsCrm.ProductContextMode.Notice ? 'Уведомления' : Util.getProductListTypeName(props.currentPaymentAccountProduct.productType)}
                                    onExecute={props.navigateProductListBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-ee275ce2-b6d8-f9d1-8c67-18ee5ced691c'>
                            <H2 testID='test-id-b2942611-aa6b-0441-9115-8b762c1a890b'>Расчётный счет</H2>
                        </CenterPageHeader>
                    </Page>
                    <Page testID='test-id-ab5ed485-376b-e480-a863-8d6416648184' scrollEnabled={true}
                          content={getPaymentAccountRestrictionListView(productRestrictionList, props.currentPaymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct && props.currentPaymentAccountProduct.paymentAccountProduct.currencyClassifier || defaultValues.Classifier)}>
                        <LeftPageHeader testID='test-id-b2f91e1f-a9b0-af94-1607-d95e17ed6b79'>
                            <NavigationBackButton key={"ProductListRestrictionListNavBackButton"}
                                                  testID='test-id-0b1a2c5a-c848-11e7-abc4-cec278b6b50a'
                                                  title={false}
                                                  onClick={()=> props.navigateProductPaymentAccountBack()}/>
                            <View key={"ProductListRestrictionListNavBackButtonView"}
                                  style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-0575e9a6-c848-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-00cb9d10-c848-11e7-abc4-cec278b6b50a"
                                    title={Util.getProductTypeName(props.currentPaymentAccountProduct.productType)}
                                    onExecute={props.navigateProductPaymentAccountBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-f3cada65-8d4a-4387-833b-d1114262ecc2'>
                            <H2 testID='test-id-3e0cad7d-2c2d-f6f9-575a-da5f0f9a549f'>Ограничения</H2>
                        </CenterPageHeader>
                    </Page>
                    <Page testID='test-id-5402a790-752b-015d-f247-20cb42b316de' scrollEnabled={false}
                          content={getPaymentAccountCardIndexListView(props, props.cardIndexList)}>
                        <LeftPageHeader testID='test-id-ce622d2c-5710-0abb-307c-f50082e3ea70'>
                            <NavigationBackButton key={"ProductListCardIndexListNavBackButton"}
                                                  testID='test-id-c22cb300-c847-11e7-abc4-cec278b6b50a'
                                                  title={false}
                                                  onClick={()=> props.navigateProductPaymentAccountBack()}/>
                            <View key={"ProductListCardIndexListNavBackButtonView"} style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-be00e0e4-c847-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-d35c6350-c847-11e7-abc4-cec278b6b50a"
                                    title={Util.getProductTypeName(props.currentPaymentAccountProduct.productType)}
                                    onExecute={props.navigateProductPaymentAccountBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-98d2392a-8852-13f5-ad82-5c0daaa36412'>
                            <H2 testID='test-id-d566154a-a094-c97e-2fdf-7028bbf0f092'>Картотеки</H2>
                        </CenterPageHeader>
                    </Page>
                    <Page testID='test-id-6b86d7e8-e6e6-d2bc-1dc4-3937001ad08d' scrollEnabled={true}
                          content={getPaymentAccountTarrifView(privilegeList, productPackage, productTariff)}>
                        <LeftPageHeader testID='test-id-4ab0b97a-c784-11e7-abc4-cec278b6b50a'>
                            <NavigationBackButton key={"ProductListTariffListNavBackButton"}
                                                  testID='test-id-cf371d78-e3e3-f28a-4052-5f2e8f42095f'
                                                  title={false}
                                                  onClick={()=> props.navigateProductPaymentAccountBack()}/>
                            <View key={"ProductListTariffListNavBackButtonView"} style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-57ea2a4a-c784-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-5c6168e0-c784-11e7-abc4-cec278b6b50a"
                                    title={Util.getProductTypeName(props.currentPaymentAccountProduct.productType)}
                                    onExecute={props.navigateProductPaymentAccountBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-a51d72e9-ebc4-6f18-589f-c3ad3b29e8dd'>
                            <H2 testID='test-id-1d1951a8-8fc0-ba6e-4cca-a81b17ebff58'>Тарифы</H2>
                        </CenterPageHeader>
                    </Page>
                    <Page testID='test-id-9d8f4fc6-a127-de33-4ba6-84df88b51278' scrollEnabled={true}
                          content={getPaymentAccountVspServiceView(props, props.productVspInfo)}>
                        <LeftPageHeader testID='test-id-1fd9dfcc-0e4c-94f0-7b97-ab872be68569'>
                            <NavigationBackButton key={"ProductListVSPNavBackButton"}
                                                  testID='test-id-cf371d78-e3e3-f28a-4052-5f2e8f42095f'
                                                  title={false}
                                                  onClick={()=> props.navigateProductPaymentAccountBack()}/>
                            <View key={"ProductListVSPNavBackButtonView"} style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-0ac57acc-c846-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-06993c18-c846-11e7-abc4-cec278b6b50a"
                                    title={Util.getProductTypeName(props.currentPaymentAccountProduct.productType)}
                                    onExecute={props.navigateProductPaymentAccountBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-c27454c0-6b5f-7acf-af16-c7b93375b453'>
                            <H2 testID='test-id-f8b60a74-49bb-7c5f-9cc4-567f525676ff'>ВСП обслуживания</H2>
                        </CenterPageHeader>
                    </Page>
                    <Page testID='test-id-5e0a84bb-05a9-5b24-cd13-9cbeea6b1694' scrollEnabled={false}
                          content={getPaymentAccountOperationListView(props)}>
                        <LeftPageHeader testID='test-id-b2a63555-b233-f762-1479-38fd848a9975'>
                            <NavigationBackButton key={"ProductListHistoryOperationListNavBackButton"}
                                                  testID='test-id-a0fb9afc-c847-11e7-abc4-cec278b6b50a'
                                                  title={false}
                                                  onClick={()=> props.navigateProductPaymentAccountBack()}/>
                            <View key={"ProductListHistoryOperationListNavBackButtonView"}
                                  style={Styles.navigationBackButtonTextAdjustment}
                                  testID="test-id-98429028-c847-11e7-abc4-cec278b6b50a">
                                <NavigationTextButton
                                    testID="test-id-9d51a572-c847-11e7-abc4-cec278b6b50a"
                                    title={Util.getProductTypeName(props.currentPaymentAccountProduct.productType)}
                                    onExecute={props.navigateProductPaymentAccountBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-b9c2ea4d-2b03-e927-ade1-34797beb744d'>
                            <H2 testID='test-id-0979b0f9-29cb-b472-62c5-f91b6b413c3f'>История операций</H2>
                        </CenterPageHeader>
                        <RightPageHeader testID='test-id-e7d33941-4cb6-6324-d3b9-112ce4423dda'>
                            {getPaymentAccountOperationListFilter(props)}
                        </RightPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        </View>) : ( <View testID='test-id-70d57a28-90bd-fdb9-2264-0085c772b124'/>)
}


/*
 * UI stateless functional component presenter for "ProductPaymentAccount" container.
 */

export interface IProps {
    performChangeTab: ModelsProductPaymentAccount.PERFORM_CHANGE_TAB,
    performInputSumMin: ModelsProductPaymentAccount.PERFORM_INPUT_SUM_MIN,
    performInputSumMax: ModelsProductPaymentAccount.PERFORM_INPUT_SUM_MAX,
    performPopoverFilterShow: ModelsProductPaymentAccount.PERFORM_POPOVER_FILTER_SHOW,
    performPopoverFilterHide: ModelsProductPaymentAccount.PERFORM_POPOVER_FILTER_HIDE,
    performInputOperationType: ModelsProductPaymentAccount.PERFORM_INPUT_OPERATION_TYPE,
    performPopoverPeriodTypeShow: ModelsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_SHOW,
    performPopoverPeriodTypeHide: ModelsProductPaymentAccount.PERFORM_POPOVER_PERIOD_TYPE_HIDE,
    performInputPeriodType: ModelsProductPaymentAccount.PERFORM_INPUT_PERIOD_TYPE,
    performInputFilterPeriodStart: ModelsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_START,
    performInputFilterPeriodEnd: ModelsProductPaymentAccount.PERFORM_INPUT_FILTER_PERIOD_END,
    performFilterApply: ModelsProductPaymentAccount.PERFORM_FILTER_APPLY,
    performFilterReset: ModelsProductPaymentAccount.PERFORM_FILTER_RESET,
    callGetOperationList: ModelsProductPaymentAccount.CALL_GET_OPERATION_LIST,
    getPaymentAccountCardIndexList: ModelsProductPaymentAccount.CALL_GET_CARD_INDEX_LIST,
    callGetProductVspInfo: ModelsProductPaymentAccount.CALL_GET_PRODUCT_VSP_INFO,
    navigateToRestrictionListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_RESTRICTION_LIST_SCREEN,
    navigateToCardIndexListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_CARD_INDEX_LIST_SCREEN,
    navigateToTariffScreen: ModelsProductPaymentAccount.NAVIGATE_TO_TARIFF_SCREEN,
    navigateToVspInfoScreen: ModelsProductPaymentAccount.NAVIGATE_TO_VSP_INFO_SCREEN,
    navigateToOperationListScreen: ModelsProductPaymentAccount.NAVIGATE_TO_OPERATION_LIST_SCREEN,
    navigateToDashboardScreen: ModelsProductPaymentAccount.NAVIGATE_TO_DASHBOARD_SCREEN,
    navigateProductPaymentAccountBack: ModelsProductPaymentAccount.NAVIGATE_PRODUCT_PAYMENT_ACCOUNT_BACK,
    performContainerReset: ModelsProductPaymentAccount.PERFORM_CONTAINER_RESET,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    currentTab: Enums.ProductPaymentAccountTab,
    inputSumMin: number | null,
    inputSumMax: number | null,
    isVisiblePopoverFilter: boolean,
    inputOperationType: Enums.OperationType,
    isVisiblePopoverPeriodType: boolean,
    inputPeriodType: Enums.PeriodType,
    inputFilterPeriodStart: Date | null,
    inputFilterPeriodEnd: Date | null,
    filterSumMin: number | null,
    filterSumMax: number | null,
    filterOperationType: Enums.OperationType,
    operationFilteredList: Models.PaymentAccountProductOperationList,
    operationList: Models.PaymentAccountProductOperationList,
    operationListFetching: boolean,
    operationListError: Error | null,
    operationListCachedDate: Date | null,
    cardIndexList: Models.PaymentAccountProductCardIndexList,
    cardIndexListFetching: boolean,
    cardIndexListError: Error | null,
    cardIndexListCachedDate: Date | null,
    currentCustomerManaged: Models.CustomerManaged,
    currentPaymentAccountProduct: Models.SettlementAgreementProduct,
    productVspInfo: Models.PaymentAccountProductVspInfo | null,
    productVspInfoFetching: boolean,
    productVspInfoFetchingError: Error | null,
    testID: string,
    productContextMode: Enums.ProductContextMode,
    productListAgreementStatus: Enums.ProductListAgreementStatus,
    performUpdateOperationListResetCache: ModelsProductPaymentAccount.PERFORM_UPDATE_OPERATION_LIST_RESET_CACHE,
    performUpdateCardIndexListResetCache: ModelsProductPaymentAccount.PERFORM_UPDATE_CARD_INDEX_LIST_RESET_CACHE,
}

const ViewProductPaymentAccount: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    <View testID='test-id-70fa9894-086d-7e72-9767-211b3afd6f20' style={Styles.main}>
        {getContentPanelContent(props)}
    </View>


)

export default ViewProductPaymentAccount