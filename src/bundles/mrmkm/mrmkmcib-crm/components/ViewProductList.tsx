/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewProductListStyles'

import {
    AccessoryPanel,
    Button,
    ButtonType,
    CenterPageHeader,
    ContentPanel,
    Checkbox,
    H2,
    Icon,
    IconType,
    Label,
    Center,
    TabSelector,
    OptionItem,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    RadioButton,
    RadioGroup,
    SplitPanel,
    SumText,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableColumnAlignment,
    TableHead,
    TableRow,
    Text,
    View,
    HintIcon,
} from 'ufs-mobile-platform'

import {defaultValues} from "../models/Models"
import {Models as ModelsApp, AlertView, RefreshBar} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import Error from "../models/Error"

import * as Utils from "../common/Util"
import ContainerProduct from '../containers/ContainerProduct'
import * as _ from 'lodash'
import moment from 'moment'

const orderCurrencyProductList = ["RUR", "USD", "EUR"]
const PLACEHOLDER = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA)
const formatDate = (date: Date | null, format: string = 'DD.MM.YYYY'): string => date ? date.formattedString(format) : PLACEHOLDER

const checkCurrencyStatus = (props: IProps, currency: ModelsApp.Classifier): boolean => (
    (props.inputCurrency.code == "") ||
    (currency && (currency.code == props.inputCurrency.code))
)

const filterByCurrencyInput = (props: IProps, currency: ModelsApp.Classifier): boolean => (
    (props.inputCurrency.code == '') || (
        currency ? ( currency.code == props.inputCurrency.code ) : false
    )
)

const filterByEncumbranceInput = (props: IProps, product: Models.SubPaymentAccountProduct): boolean => (
    (props.inputEncumbranceList && Array.isArray (props.inputEncumbranceList.data) &&
        props.inputEncumbranceList.data.length) ? (

        props.inputEncumbranceList.data.reduce ((pass: boolean, encumbrance: Models.ProductEncumbrance) => {
            switch (true) {

                /**
                 * Encumbrance filter is not strict, so at list one condition should be met
                 */

                // - If restriction filter is on restriction list should not be empty
                case (encumbrance.type == Enums.ProductEncumbranceType.ProductRestrictionList):
                    return pass || (Array.isArray (product.restrictionList.data) && (
                        product.restrictionList.data.length > 0
                ))
                
                // - If card index filter is on card index flag should be true
                case (encumbrance.type == Enums.ProductEncumbranceType.ProductCardIndexList):
                    return pass || product.isExistCardIndex

                default: return pass
            
            }

        }, false)

    ) : true
)



interface ProductSumValue {
    sum: number | null;
    currency: ModelsApp.Classifier | null;
    label: string;
}

const defaultSum: ProductSumValue = {
    sum: null,
    currency: null,
    label: '',
}

interface IProductTableCell {
    type: Enums.ProductTableCellType;
    key: string;
    data: string | null;
    sum: ProductSumValue | null;
    options: string | null;
    subtitle: string | null;
    onPress: (() => void) | null;
}

const defaultProductTableCell: IProductTableCell = ({
    type: Enums.ProductTableCellType.None,
    key: '',
    sum: null,
    data: null,
    options: null,
    subtitle: null,
    onPress: null,
})

interface IProductTableRow {
    type: Enums.ProductType;
    key: string;
    onPress: () => void;
    cellList: Array<IProductTableCell>;
}

/**
 * Product List View Templates
 */

const TableContentProductList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Table> => {
    const body = getProductListRows(props)

    const tableHeadContent = getProductListColumns(props).map(
        (header: Models.ProductHeaderTable, index: number): React.ReactElement<View> => (
            <TableColumn
                testID={ `test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47-${ header.name }` }
                key={`ProductList column ${ index }`}
                align={header.type == Enums.ProductTableCellType.Sum ? TableColumnAlignment.RIGHT : TableColumnAlignment.LEFT}
                width={getProductListColumnWidth(props)[index]}>

                <Text
                    testID='test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76'
                    numberOfLines={2}
                    ellipsizeMode={'tail'}>

                    {header.name}
                </Text>
            </TableColumn>
        )
    )

    return (
            <Table noPaddings = {true}
                   style = {Styles.productListTable}
                   key = 'CustomerTableProductList'
                   testID='test-id-6d780177-50ce-159e-8f9b-68557c1943b2'>
                <TableHead style = {Styles.productListTableHead}
                           testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'>
                    {tableHeadContent}
                </TableHead>
                <TableBody  testID='test-id-c3142ae1-666e-b550-de2f-0662330b1d1f'>
                    {body}
                </TableBody>
            </Table>
    )
}

const getDetailsButton: React.StatelessComponent<() => void> = (method: () => void): React.ReactElement<Button> => (
    <Button testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599' onExecute={() => method()}>
        <Icon testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea600' disabled type={IconType.MrmLink}/>
    </Button>
)

const getSumTextField = (money: number | null, label: string = "", currency: ModelsApp.Classifier | null, block = false) => {
    return money ? (
        <SumText
            testID='test-id-5f8de28a-bafe-ab3c-5ed0-0f6cf06139a4'
            currency={currency ? currency.code : ""}
            value={money}/>

    ) : (
        <Label
            testID='test-id-def45b68-ca93-4ead-ac94-5261fdd99e36'
            header={''}
            text={label}
            block={block}>

            <Text testID='test-id-def45b68-ca93-4ead-ac94-5261fdd99e36'>
                {PLACEHOLDER}
            </Text>
        </Label>
    )
}

const renderProductTableCellContent = (cell: IProductTableCell): React.ReactElement<View> | null => {
    switch (cell.type) {

        case Enums.ProductTableCellType.Empty: return (
            <View testID={ `test-id-empty-content-${ cell.key }` }/>
        )

        case Enums.ProductTableCellType.Text: return (
            cell.data ? (
                <View
                    testID={ `test-id-product-cell-content-wrapper-${ cell.key }` }
                    key={ `product-cell-content-wrapper-${ cell.key }` }
                    style={ Styles.productCellView }>
                    <Text
                        testID={ `test-id-product-text-${ cell.key }` }
                        style={ Styles.productCellText }>
                        { cell.data }
                    </Text>
                </View>
            ) : null
        )

        case Enums.ProductTableCellType.Date: return (
            cell.data ? (
                <View
                    testID={ `test-id-product-cell-content-wrapper-${ cell.key }` }
                    key={ `product-cell-content-wrapper-${ cell.key }` }
                    style={ Styles.productCellView }>
                    <Text
                        testID={ `test-id-product-date-text-${ cell.key }` }
                        style={ Styles.productCellText }>
                        { cell.data }
                    </Text>
                </View>
            ) : null
        )

        case Enums.ProductTableCellType.Sum: return (
            cell.sum ? (
                <View
                    testID={ `test-id-product-cell-content-wrapper-${ cell.key }` }
                    key={ `product-cell-content-wrapper-${ cell.key }` }
                    style={ Styles.productCellView }>
                    { getSumTextField (cell.sum.sum, cell.sum.label, cell.sum.currency, false) }
                </View>
            ) : null
        )

        case Enums.ProductTableCellType.Subtitled: return (
            cell.data ? (
                <View
                    testID={ `test-id-${ cell.key }-subtitled-view` }
                    key={ `${ cell.key }-subtitled-view` }
                    style={ Styles.productCellViewSubtitled }>

                    <Text
                        testID={ `test-id-${ cell.key }-title-text` }
                        key={ `${ cell.key }-title-text` }
                        style={ Styles.paymentAccountRowText }>
                        
                        { cell.data }
                    </Text>
                    {
                        cell.options ? (    

                            <Text
                                testID={ `test-id-${ cell.key }-options-text` }
                                key={ `${ cell.key }-options-text` }
                                style={ Styles.paymentAccountSubtitle }>
                                
                                { cell.options }
                            </Text>

                        ) : null
                    }
                    {
                        cell.subtitle ? (

                            <Text
                                testID={ `test-id-${ cell.key }-subtitle-text` }
                                key={ `${ cell.key }-subtitle-text` }
                                style={[ Styles.regularFont16, Styles.contractNumberTextColor ]}>

                                { cell.subtitle }
                            </Text>

                        ) : null
                    }
                </View>
            ) : null
        )

        case Enums.ProductTableCellType.Callback: return (
            <View
                testID={ `test-id-${ cell.key }-chevron-view` }
                key={ `${ cell.key }-chevron-view` }
                style={ Styles.productCellChevron }>

                { getDetailsButton (cell.onPress || (() => {})) }
            </View>
        )

        default: return null

    }
}

const rowNeedsFix = (row: IProductTableRow): boolean => {
    switch (row.type) {
        case Enums.ProductType.ContractConstructorProduct:
        case Enums.ProductType.ContractSdoProduct:
        case Enums.ProductType.SalaryProduct:
        case Enums.ProductType.DboProduct:
        case Enums.ProductType.BankGuaranteeProduct:
        case Enums.ProductType.PackageProduct: return true
        default: return false
    }
}

const rowHeight = (row: IProductTableRow): number => {
    switch (row.type) {
        case Enums.ProductType.TariffPlanProduct: return 64
        default: return 44
    }
}

const tableViewBugFixtureStyle = (row: IProductTableRow | null, index: number, list: Array<IProductTableRow | null>): number | null => (
    (row && rowNeedsFix (row) && index == 0) ? Styles.ufsTableViewPaddingFix : {}
)

const renderProductTableRow = (row: IProductTableRow | null, index: number, list: Array<IProductTableRow | null>): React.ReactElement<TableRow> | null => (
    row == null ? null : (

        <TableRow
            testID={ `test-id-product-table-row-${ row.key }-${ index }` }
            key={ `product-table-row-${ row.key }-${ index }` }
            onClick={ row.onPress }
            style = {Styles.productListTableRow}>
            {
                row.cellList.map ((cell: IProductTableCell): React.ReactElement<TableCell> => (

                    <TableCell
                        testID={ `test-id-product-cell-${ cell.key }` }
                        key={ `product-cell-${ cell.key }` }
                        style={Styles.productListTableCell}>
                        {
                            renderProductTableCellContent (cell)
                        }
                    </TableCell>

                ))
            }
        </TableRow>

    )
)

const renderProductListCurrencyGroupFixture = (key: string, columns: Array<string>): React.ReactElement<TableRow> => (
    <TableRow
        key={ `${ key }-fixture-row` }
        testID={ `test-id-${ key }-fixture-row` }
        style={ Styles.tableViewBugFixtureRow }>

        {
            columns.map ((title: string, index: number): React.ReactElement<TableCell> => (
                <TableCell
                    key={ `${ key }-fixture-cell-${ index }` }
                    testID={ `test-id-${ key }-fixture-cell-${ index }` }
                    style={ Styles.tableViewBugFixture }>
                    
                    <View
                        key={ `${ key }-fixture-cell-view-${ index }` }
                        testID={ `test-id-${ key }-fixture-cell-view-${ index }` }/>
                </TableCell> 
            ))
        }
    </TableRow>
)

const renderProductListCurrencyGroupSpacer = (key: string, columns: Array<string>): React.ReactElement<TableRow> => (
    <TableRow testID={ `test-id-${ key }-spacer-row` } key={ `${ key }-spacer-row` }>
        {
            columns.map ((title: string, index: number): React.ReactElement<TableCell> => (
                <TableCell
                    key={ `${ key }-spacer-cell-${ index }` }
                    testID={ `test-id-${ key }-spacer-cell-${ index }` }
                    style={[
                        Styles.spacer,
                        (index == 0) ? Styles.spacerLeft : {},
                        (index == columns.length - 1) ? Styles.spacerRight : {}
                    ]}>
                    
                    <View
                        key={ `${ key }-spacer-cell-view-${ index }` }
                        testID={ `test-id-${ key }-spacer-cell-view-${ index }` }/>
                </TableCell> 
            ))
        }
    </TableRow>
)

const renderProductListCurrencyGroupHeader = (key: string, columns: Array<string>,
    sum: number | null, currency: ModelsApp.Classifier, index: number,
    groupList: Array<Models.GroupCurrencyProductData> | null): Array<React.ReactElement<TableRow> | null> => (
        [index ? renderProductListCurrencyGroupSpacer (key, columns) : null,
        <TableRow
            testID={ `test-id-${ key }-currency-group-header-row` }
            key={ `${ key }-currency-group-header-row` }
            style={[Styles.productListTableRow]}>
            <TableCell
                testID={ `test-id-${ key }-currency-code-cell` }
                style = {[Styles.productListTableCell,]}
                key={ `${ key }-currency-code-cell` }>

                <Text
                    testID={ `test-id-${ key }-currency-code` }
                    key={ `${ key }-currency-code` }
                    style={ Styles.sectionHeader }>

                    { sum == null ?  currency && currency.code || PLACEHOLDER :
                        `Всего ${ currency && currency.code || PLACEHOLDER }` }
                </Text>
            </TableCell>
            <TableCell
                testID={ `test-id-${ key }-currency-value-cell` }
                style = {Styles.productListTableCell}
                key={ `${ key }-currency-value-cell` }>

                <Text
                    testID={ `test-id-${ key }-currency-value` }
                    key={ `${ key }-currency-value` }
                    style={ Styles.sectionHeader }>

                    { sum == null ? '' : `${ sum.sumString (3, ' ', 2) } ${ currency && currency.code || PLACEHOLDER }` }
                </Text>
            </TableCell>
            {
                columns.slice (2).map ((title: string, index: number): React.ReactElement<TableCell> => (
                    <TableCell
                        key={ `${ key }-currency-group-empty-cell-${ index }` }
                        testID={ `test-id-${ key }-currency-group-empty-cell-${ index }` }/>
                ))
            }
        </TableRow>
        ]
)


const TOTAL_WIDTH = 640
const getTableRelativeWidth = (widthList: Array<string>): Array<string> => {

    const percentList = widthList.map ((width: string): number => (
        Math.round (((parseInt (width) || 0) / TOTAL_WIDTH) * 100)
    ))

    const diff = 100 - percentList.reduce ((sum, width) => (sum + width), 0)
    percentList[ 0 ] += diff

    return percentList.map ((width: number): string => (`${ width }%`))

}

/**
 * Product List View data generation
 */

/**
 * Acquiring List data
 */

const columnAcquiringProductList: Array<string> = getTableRelativeWidth (['290', '202', '104', '44'])
const headerAcquiringProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Номер договора" },
    { name: "Количество\nтерминалов" },
    { name: "Дата заключения договора" },
    { name: "" },
])

const keyAcquiringProductList = (product: Models.SubAcquiringProduct, index: number): string => (
    `acquiring-product-${ product.id || index }`
)

const renderAcquiringProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentAcquiringProductList && props.currentAcquiringProductList.data) ? (

        props.currentAcquiringProductList.data.map ((product: Models.AcquiringProduct, index: number): IProductTableRow | null => (
            (product.acquiringProduct == null) ? null : ({

                type: product.productType,
                key: keyAcquiringProductList (product.acquiringProduct, index),
                onPress: () => props.performAcquiringProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyAcquiringProductList (product.acquiringProduct, index) }-contract-number`,
                    data: `${ product.acquiringProduct.contractNumber || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyAcquiringProductList (product.acquiringProduct, index) }-terminals-count`,
                    data: `${ product.acquiringProduct.terminalsCount || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyAcquiringProductList (product.acquiringProduct, index) }-open-date`,
                    data: formatDate(product.acquiringProduct.openDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyAcquiringProductList (product.acquiringProduct, index) }-details`,
                    onPress: () => props.performAcquiringProductShow (product),

                }]

            })
        )).map (renderProductTableRow)

    ) : []
)

/**
 * Cash Management List data
 */

const columnCashManagementProductList: Array<string> = getTableRelativeWidth (['240', '256', '100', '44'])
const headerCashManagementProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Номер договора/соглашения" },
    { name: 'Тариф' },
    { name: 'Дата окончания договора' },
    { name: '' },
])

const keyCashManagementProductList = (product: Models.SubCashManagementProduct, index: number): string => (
    `cash-management-product-${ product.id || index }`
)

const renderCashManagementProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentCashManagementProductList && props.currentAcquiringProductList.data) ? (

        props.currentCashManagementProductList.data.map ((product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (
            (product.cashManagementProduct == null) ? null : ({

                type: product.productType,
                key: keyCashManagementProductList (product.cashManagementProduct, index),
                onPress: () => props.performCashManagementProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyCashManagementProductList (product.cashManagementProduct, index) }-contract-number`,
                    data: `${ product.cashManagementProduct.contractNumber || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,
                    
                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyCashManagementProductList (product.cashManagementProduct, index) }-tariff-name`,
                    data: `${ product.cashManagementProduct.tariffName || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyCashManagementProductList (product.cashManagementProduct, index) }-end-date`,
                    data: formatDate(product.cashManagementProduct.contractEndDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyCashManagementProductList (product.cashManagementProduct, index) }-details`,
                    onPress: () => props.performCashManagementProductShow (product),

                }]

            })
        )).map (renderProductTableRow)

    ) : []
)

/**
 * Bank Guarantee List data
 */

const columnBankGuaranteeProductList: Array<string> = getTableRelativeWidth (['238', '190','20','100', '44'])
const headerBankGuaranteeProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Тип гарантии" },
    { name: "Сумма гарантии", type: Enums.ProductTableCellType.Sum},
    { name: "" },
    { name: "Дата окончания гарантии" },
    { name: "" },
])

const keyBankGuaranteeProductList = (product: Models.SubBankGuaranteeProduct, index: number): string => (
    `bank-guarantee-product-${ product.id || index }`
)

const renderBankGuaranteeProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentBankGuaranteeProductList && props.currentAcquiringProductList.data) ? (

        props.currentBankGuaranteeProductList.data.map ((product: Models.CreditProduct, index: number): IProductTableRow | null => (
            (product.bankGuaranteeProduct == null) ? null : ({

                type: product.productType,
                key: keyBankGuaranteeProductList (product.bankGuaranteeProduct, index),
                onPress: () => props.performBankGuaranteeProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyBankGuaranteeProductList (product.bankGuaranteeProduct, index) }-type`,
                    data: `${ product.bankGuaranteeProduct.type || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyBankGuaranteeProductList (product.bankGuaranteeProduct, index) }-sum`,
                    data: product.bankGuaranteeProduct ?
                        Utils.getBalanceString (product.bankGuaranteeProduct.sum,product.bankGuaranteeProduct.currencyClassifier)
                        : PLACEHOLDER
                }, { ...defaultProductTableCell,
                    
                    type: Enums.ProductTableCellType.Empty,
                    key: `${ keyBankGuaranteeProductList (product.bankGuaranteeProduct, index) }-empty`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyBankGuaranteeProductList (product.bankGuaranteeProduct, index) }-end-date`,
                    data: formatDate(product.bankGuaranteeProduct.endDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyBankGuaranteeProductList (product.bankGuaranteeProduct, index) }-details`,
                    onPress: () => props.performBankGuaranteeProductShow (product),

                }]

            })
        )).map (renderProductTableRow)

    ) : []

)

/**
 * Contract Constructor List data
 */

const columnContractConstructorProductList: Array<string> = getTableRelativeWidth (['320', '276', '44'])
const headerContractConstructorProductList: Array<Models.ProductHeaderTable> = ([
    { name: 'Номер договора' },
    { name: 'Дата заключения договора' },
    { name: '' }
])

const keyContractConstructorProductList = (product: Models.SubUdboProduct, index: number): string => (
    `contract-constructor-product-${ product.id || index }`
)

const renderContractConstructorProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentContractConstructorProductList && props.currentContractConstructorProductList.data) ? (

        props.currentContractConstructorProductList.data.map ((product: Models.UdboProduct, index: number): IProductTableRow | null => (
            (product.udboProduct == null) ? null : ({

                type: product.productType,
                key: keyContractConstructorProductList (product.udboProduct, index),
                onPress: () => props.performContractConstructorProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyContractConstructorProductList (product.udboProduct, index) }-contract-number`,
                    data: `${ product.udboProduct.contractNum || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyContractConstructorProductList (product.udboProduct, index) }-start-date`,
                    data: formatDate(product.udboProduct.startDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyContractConstructorProductList (product.udboProduct, index) }-details`,
                    onPress: () => props.performContractConstructorProductShow (product),

                }]

            })
        )).map (renderProductTableRow)

    ) : []

)

/**
 * Contract Nso List data
 */

const columnContractNsoProductList: Array<string> = getTableRelativeWidth (['263', '183', '40', '110', '44'])
const headerContractNsoProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Название продукта" },
    { name: "Неснижаемый остаток", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата закрытия сделки" },
    { name: "" },
])

const keyContractNsoProductList = (product: Models.SubContractNSOProduct, index: number): string => (
    `contract-nso-product-${ product.id || index }`
)


const renderContractNsoProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentContractNsoProductList && props.currentContractNsoProductList.data) ? (

        props.currentContractNsoProductList.data
            .filter((product: Models.DepositProduct, index: number): boolean => (
                filterByCurrencyInput (props, product.contractNSO &&
                product.contractNSO.currencyClassifier
                    ? product.contractNSO.currencyClassifier
                    : defaultValues.Classifier)
            ))
            .map ((product: Models.DepositProduct, index: number): IProductTableRow | null => (
            (product.contractNSO == null) ? null : ({

                type: product.productType,
                key: keyContractNsoProductList (product.contractNSO, index),
                onPress: () => props.performContractNsoProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyContractNsoProductList (product.contractNSO, index) }-deposit-type`,
                    data: `${
                        product.contractNSO.depositTypeClassifier &&
                        product.contractNSO.depositTypeClassifier.value ||
                        PLACEHOLDER
                    }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyContractNsoProductList (product.contractNSO, index) }-deposit-amount`,
                    data: product.contractNSO && Utils.getBalanceString (
                        product.contractNSO.depositAmount,
                        product.contractNSO.currencyClassifier
                    ),

                }, { ...defaultProductTableCell,
                    
                    type: Enums.ProductTableCellType.Empty,
                    key: `${ keyContractNsoProductList (product.contractNSO, index) }-empty`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyContractNsoProductList (product.contractNSO, index) }-period-end-date`,
                    data: formatDate(product.contractNSO.dealPeriodEndDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyContractNsoProductList (product.contractNSO, index) }-details`,
                    onPress: () => props.performContractNsoProductShow (product),

                }]

            })
        )).map (renderProductTableRow)

    ) : []

)

/**
 * Contract Sdo List data
 */

const columnContractSdoProductList: Array<string> = getTableRelativeWidth (['270', '210', '116', '44'])
const headerContractSdoProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Название продукта" },
    { name: "Валюта" },
    { name: "Статус договора СДО" },
    { name: "" },
])

const keyContractSdoProductList = (product: Models.SubContractNSOProduct, index: number): string => (
    `contract-sdo-product-${ product.id || index }`
)

const renderContractSdoProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentContractSdoProductList && props.currentContractSdoProductList.data) ? (

        props.currentContractSdoProductList.data
            .filter((product: Models.DepositProduct, index: number): boolean => (
             filterByCurrencyInput (props, product.contractSDO &&
                            product.contractSDO.currencyClassifier
                            ? product.contractSDO.currencyClassifier
                            : defaultValues.Classifier)
            ))
            .map ((product: Models.DepositProduct, index: number): IProductTableRow | null => (
            (product.contractSDO == null)  ? null : ({

                type: product.productType,
                key: keyContractSdoProductList (product.contractSDO, index),
                onPress: () => props.performContractSdoProductShow (product),
                    cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyContractSdoProductList (product.contractSDO, index) }-deposit-type`,
                    data: `${
                        product.contractSDO.depositTypeClassifier &&
                        product.contractSDO.depositTypeClassifier.value ||
                        PLACEHOLDER
                    }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyContractSdoProductList (product.contractSDO, index) }-currency`,
                    data: `${
                        product.contractSDO.currencyClassifier &&
                        product.contractSDO.currencyClassifier.code ||
                        PLACEHOLDER
                    }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyContractSdoProductList (product.contractSDO, index) }-status`,
                    data: `${ product.contractSDO.dealStatusDesc || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyContractSdoProductList (product.contractSDO, index) }-details`,
                    onPress: () => props.performContractSdoProductShow (product),

                }]

            })
        )).map (renderProductTableRow)

    ) : []
)

/**
 * Corporate Card List data
 */

const columnCorporateCardProductList: Array<string> = getTableRelativeWidth (['240', '276', '80', '44'])
const headerCorporateCardProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Номер карты" },
    { name: "Вид карты" },
    { name: "Срок действия" },
    { name: "" },
])

const keyCorporateCardProductList = (product: Models.SubCorporateCardProduct, index: number): string => (
    `corporate-card-product-${ product.id || index }`
)

const renderCorporateCardProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentCorporateCardProductList && props.currentCorporateCardProductList.data) ? (

        props.currentCorporateCardProductList.data.map ((product: Models.CorporateCardProduct, index: number): IProductTableRow | null => (
            (product.corporateCardProduct == null) ? null : ({

                type: product.productType,
                key: keyCorporateCardProductList (product.corporateCardProduct, index),
                onPress: () => props.performCorporateCardProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyCorporateCardProductList (product.corporateCardProduct, index) }-card-number`,
                    data:  product.corporateCardProduct.cardNumber ? `*${product.corporateCardProduct.cardNumber.substr(-4)}` : PLACEHOLDER ,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyCorporateCardProductList (product.corporateCardProduct, index) }-type`,
                    data: `${
                        product.corporateCardProduct.typeClassifier &&
                        product.corporateCardProduct.typeClassifier.value ||
                        PLACEHOLDER
                    }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyCorporateCardProductList (product.corporateCardProduct, index) }-end-date`,
                    data: formatDate(product.corporateCardProduct.endDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyCorporateCardProductList (product.corporateCardProduct, index) }-details`,
                    onPress: () => props.performCorporateCardProductShow (product),

                }]
            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Customs Payment List data
 */

const columnCustomsPaymentProductList: Array<string> = getTableRelativeWidth (['297', '233', '110'])
const headerCustomsPaymentProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Счёт подключения услуги" },
    { name: "Номер доп. соглашения" },
    { name: "Дата доп. соглашения" },
])

const keyCustomsPaymentProductList = (product: Models.SubCustomsPaymentProduct, index: number): string => (
    `custom-payment-product-${ product.id || index }`
)

const renderCustomsPaymentProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentCustomsPaymentProductList && props.currentCustomsPaymentProductList.data) ? (

        props.currentCustomsPaymentProductList.data.map ((product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (
            (product.customsPaymentProduct == null) ? null : ({

                type: product.productType,
                key: keyCustomsPaymentProductList (product.customsPaymentProduct, index),
                onPress: () => {},
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyCustomsPaymentProductList (product.customsPaymentProduct, index) }-account`,
                    data: `${ product.customsPaymentProduct.account || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyCustomsPaymentProductList (product.customsPaymentProduct, index) }-additional-contract-number`,
                    data: `${ product.customsPaymentProduct.additionalContractNumber || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyCustomsPaymentProductList (product.customsPaymentProduct, index) }-additional-contract-date`,
                    data: formatDate(product.customsPaymentProduct.additionalContractDate),

                }]

            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Dbo List data
 */

const columnDboProductList: Array<string> = getTableRelativeWidth (['270', '218', '108', '44'])
const headerDboProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Система ДБО" },
    { name: "Статус договора ДБО" },
    { name: "Дата заключения договора" },
    { name: "" },
])

const keyDboProductList = (product: Models.SubDboProduct, index: number): string => (
    `dbo-product-${ product.id || index }`
)

const renderDboProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentDboProductList && props.currentDboProductList.data) ? (

        props.currentDboProductList.data.map ((product: Models.DboProduct, index: number): IProductTableRow | null => (
            (product.dboProduct == null) ? null : ({

                type: product.productType,
                key: keyDboProductList (product.dboProduct, index),
                onPress: () => props.performDboProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyDboProductList (product.dboProduct, index) }-system`,
                    data: `${
                        product.dboProduct.systemClassifier &&
                        product.dboProduct.systemClassifier.value ||
                        PLACEHOLDER
                    }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyDboProductList (product.dboProduct, index) }-status`,
                    /* TODO: Provide correct product list status */
                    data: `${ product.dboProduct.status || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyDboProductList (product.dboProduct, index) }-open-date`,
                    data: formatDate(product.dboProduct.openDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyDboProductList (product.dboProduct, index) }-details`,
                    onPress: () => props.performDboProductShow (product),

                }]

            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Encashment List data
 */

const columnEncashmentProductList: Array<string> = getTableRelativeWidth (['350', '146', '100', '44'])
const headerEncashmentProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Вид услуги" },
    { name: "Статус договора" },
    { name: "Дата окончания договора" },
    { name: "" },
])

const keyEncashmentProductList = (product: Models.SubEncashmentContractProduct, index: number): string => (
    `encashment-product-${ product.id || index }`
)

const renderEncashmentProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentEncashmentProductList && props.currentEncashmentProductList.data) ? (

        props.currentEncashmentProductList.data.map ((product: Models.EncashmentContractProduct, index: number): IProductTableRow | null => (
            (product.encashmentContractProduct == null) ? null : ({

                type: product.productType,
                key: keyEncashmentProductList (product.encashmentContractProduct, index),
                onPress: () => props.performEncashmentProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyEncashmentProductList (product.encashmentContractProduct, index) }-type`,
                    data: `${ product.encashmentContractProduct.agreementType || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyEncashmentProductList (product.encashmentContractProduct, index) }-status`,
                    /* TODO: Provide correct product list status */
                    data: `${ product.encashmentContractProduct.currentStatus || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyEncashmentProductList (product.encashmentContractProduct, index) }-end-date`,
                    data: formatDate(product.encashmentContractProduct.finishDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyEncashmentProductList (product.encashmentContractProduct, index) }-details`,
                    onPress: () => props.performEncashmentProductShow (product),

                }]

            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Package List data
 */

const columnPackageProductList: Array<string> = getTableRelativeWidth (['320', '276', '44'])
const headerPackageProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Название пакета услуг" },
    { name: "Дата окончания" },
    { name: "" },
])

const keyPackageProductList = (product: Models.SubPackageProduct, index: number): string => (
    `package-product-${
        product.startDate && product.startDate.getTime () || index
    }-${
        product.endDate && product.endDate.getTime () || index
    }`
)

const renderPackageProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentPackageProductList && props.currentPackageProductList.data) ? (

        props.currentPackageProductList.data.map ((product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (
            (product.packageProduct == null) ? null : ({

                type: product.productType,
                key: keyPackageProductList (product.packageProduct, index),
                onPress: () => props.performPackageProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyPackageProductList (product.packageProduct, index) }-name`,
                    data: `${ product.packageProduct.name || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyPackageProductList (product.packageProduct, index) }-end-date`,
                    data: formatDate(product.packageProduct.endDate),

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyPackageProductList (product.packageProduct, index) }-details`,
                    onPress: () => props.performPackageProductShow (product),

                }]

            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Salary List data
 */

const columnSalaryProductList: Array<string> = getTableRelativeWidth (['290', '180', '124', '44'])
const headerSalaryProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Номер договора" },
    { name: "Плановое количество получателей" },
    { name: "Общая численность зарплатных карт" },
    { name: "" },
])

const keySalaryProductList = (product: Models.SubSalaryProduct, index: number): string => (
    `salary-product-${ product.id || index }`
)

const renderSalaryProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentSalaryProductList && props.currentSalaryProductList.data) ? (

        props.currentSalaryProductList.data.map ((product: Models.SalaryProduct, index: number): IProductTableRow | null => (
            (product.salaryProduct == null) ? null : ({

                type: product.productType,
                key: keySalaryProductList (product.salaryProduct, index),
                onPress: () => props.performSalaryProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keySalaryProductList (product.salaryProduct, index) }-number`,
                    data: `${ product.salaryProduct.number || PLACEHOLDER }`,

                },{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keySalaryProductList (product.salaryProduct, index) }-employees-amount`,
                    data: `${ product.salaryProduct.employeesCount && 
                              product.salaryProduct.employeesCount.sumString() || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keySalaryProductList (product.salaryProduct, index) }-cards-amount`,
                    data: `${ product.salaryProduct.totalCards && 
                              product.salaryProduct.totalCards.sumString() || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keySalaryProductList (product.salaryProduct, index) }-details`,
                    onPress: () => props.performSalaryProductShow (product),

                }]

            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Self Encashment List data
 */

const columnSelfEncashmentProductList: Array<string> = getTableRelativeWidth (['271', '185', '40', '100', '44'])
const headerSelfEncashmentProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Вид услуги" },
    { name: "Среднемесячные обороты", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания договора" },
    { name: "" },
])

const keySelfEncashmentProductList = (product: Models.SubSelfEncashmentContractProduct, index: number): string => (
    `self-encashment-product-` + index +
        `${product.agreementNumber}`
)

const renderSelfEncashmentProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray (props.currentSelfEncashmentProductList && props.currentSelfEncashmentProductList.data) ? (

        props.currentSelfEncashmentProductList.data.map ((product: Models.EncashmentContractProduct, index: number): IProductTableRow | null => (
            (product.selfEncashmentContractProduct == null) ? null : ({

                type: product.productType,
                key: `${ keySelfEncashmentProductList (product.selfEncashmentContractProduct,
                    index + new Date().getTime()) }-productType`,
                onPress: () => props.performSelfEncashmentProductShow (product),
                cellList: [{ ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keySelfEncashmentProductList (product.selfEncashmentContractProduct, 
                        index + new Date().getTime()) }-type`,
                    data: `${ product.selfEncashmentContractProduct.agreementType || PLACEHOLDER }`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keySelfEncashmentProductList (product.selfEncashmentContractProduct, 
                        index + new Date().getTime()) }-mounthTurn`,
                    data: product.selfEncashmentContractProduct && Utils.getBalanceString (
                        product.selfEncashmentContractProduct.mounthTurn,
                        product.selfEncashmentContractProduct.currencyClassifier
                    ),

                }, { ...defaultProductTableCell,
                    
                    type: Enums.ProductTableCellType.Empty,
                    key: `${ keySelfEncashmentProductList (product.selfEncashmentContractProduct, 
                        index + new Date().getTime()) }-emptyCell`,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keySelfEncashmentProductList (product.selfEncashmentContractProduct, index + new Date().getTime()) }-end-date`,
                    data: product.selfEncashmentContractProduct.finishDate ?
                        formatDate(product.selfEncashmentContractProduct.finishDate) :
                        PLACEHOLDER,

                }, { ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keySelfEncashmentProductList (product.selfEncashmentContractProduct, 
                        index + new Date().getTime() ) }-detailsProduct`,
                    onPress: () => props.performSelfEncashmentProductShow (product),

                }]

            })

        )).map (renderProductTableRow)

    ) : []
)

/**
 * Tariff Plan List data
 */

const columnTariffPlanProductList: Array<string> = getTableRelativeWidth (['350', '146', '100', '44'])
const headerTariffPlanProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Название тарифного плана" },
    { name: "Тип тарифного плана" },
    { name: "Дата окончания" },
    { name: "" },
])

const keyTariffPlanProductList = (product: Models.SubTariffPlanProduct, index: number): string => (
    `tariff-plan-product-${new Date().getTime()}-` +
    `${product.startDate && product.startDate.getTime () || index}-` +
    `${product.endDate && product.endDate.getTime () || index}-` +
    `${product.name || PLACEHOLDER}`
)

const renderTariffPlanProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (
    Array.isArray(props.currentTariffPlanProductList && props.currentTariffPlanProductList.data) ? (
        props.currentTariffPlanProductList.data.compact().map((product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (
            (product.tariffPlanProduct == null) ? null : ({

                type: product.productType,
                key: keyTariffPlanProductList(product.tariffPlanProduct, index),
                onPress: () => props.performTariffPlanProductShow(product),
                cellList: [{
                    ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyTariffPlanProductList(product.tariffPlanProduct, index) }-name`,
                    data: `${ product.tariffPlanProduct.name || PLACEHOLDER }`,

                }, {
                    ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Text,
                    key: `${ keyTariffPlanProductList(product.tariffPlanProduct, index) }-type`,
                    data: `${
                    product.tariffPlanProduct.typeClassifier &&
                    product.tariffPlanProduct.typeClassifier.value ||
                    PLACEHOLDER
                        }`,

                }, {
                    ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Date,
                    key: `${ keyTariffPlanProductList(product.tariffPlanProduct, index) }-end-date`,
                    data: formatDate(product.tariffPlanProduct.endDate),

                }, {
                    ...defaultProductTableCell,

                    type: Enums.ProductTableCellType.Callback,
                    key: `${ keyTariffPlanProductList(product.tariffPlanProduct, index) }-details`,
                    onPress: () => props.performTariffPlanProductShow(product),

                }]

            })

        )).map(renderProductTableRow)

    ) : []
)

/**
 * Credit List data
 */

const columnCreditProductList: Array<string> = getTableRelativeWidth (['255', '187', '40', '90', '44'])
const headerCreditProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Название продукта\nНомер договора" },
    { name: "Полная сумма задолжности", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания" },
    { name: "" },
])

const keyCreditProductList = (product: Models.SubCreditProduct, index: number): string => (
    `credit-product-${ product.id || index }`
)

const keyGroupCreditProductList = (group: Models.GroupCurrencyProductData, index: number): string => (
    `credit-group-${ group.currencyClassifier && group.currencyClassifier.code }-${ index }`
)

const getCreditProductRow = (props: IProps, product: Models.CreditProduct, index: number): IProductTableRow | null => (

    (product.creditProduct == null) ? null : ({

        type: product.productType,
        key: keyCreditProductList (product.creditProduct, index),
        onPress: () => props.performCreditProductShow (product),
        cellList: [{ ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Subtitled,
            key: `${ keyCreditProductList (product.creditProduct, index) }-type`,
            data: `${
                product.creditProduct.nameClassifier &&
                product.creditProduct.nameClassifier.value ||
                PLACEHOLDER
            }`,

            subtitle: `${
                product.creditProduct.contractNumber ||
                PLACEHOLDER
            }`

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Text,
            key: `${ keyCreditProductList (product.creditProduct, index) }-debt-sum`,
            data: product.creditProduct && Utils.getBalanceString (
                product.creditProduct.debtSum,
                product.creditProduct.currencyClassifier
            ),

        }, { ...defaultProductTableCell,
            
            type: Enums.ProductTableCellType.Empty,
            key: `${ keyCreditProductList (product.creditProduct, index) }-empty`,

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Date,
            key: `${ keyCreditProductList (product.creditProduct, index) }-close-date`,
            data: formatDate(product.creditProduct.closeDate),

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Callback,
            key: `${ keyCreditProductList (product.creditProduct, index) }-details`,
            onPress: () => props.performCreditProductShow (product),

        }]

    })

)

const filterCreditProductList = (props: IProps): Models.CreditProductList => (
    Array.isArray (props.currentCreditProductList && props.currentCreditProductList.data) ? ({
        
        ...props.currentCreditProductList,
        data: props.currentCreditProductList.data.filter (({ creditProduct }: Models.CreditProduct): boolean => (
            
            // 1. Only credit products
            (creditProduct != null) &&
            
            // 2. Filtered by currency
            filterByCurrencyInput (props, creditProduct.currencyClassifier)

        ))
    }) : defaultValues.CreditProductList
)

const getSortedCreditProductList = (productList: Models.CreditProductList): Models.CreditProductList => (
    Array.isArray (productList.data) ? ({ ...productList,
        data: productList.data.sort (($1: Models.CreditProduct, $2: Models.CreditProduct): number => (
            ($1.creditProduct && (typeof $1.creditProduct.debtSum == 'number')) && 
            ($2.creditProduct && (typeof $2.creditProduct.debtSum == 'number')) ? (
                $2.creditProduct.debtSum - $1.creditProduct.debtSum
            ) : 0
        ))
    }) : productList
)

const getCreditCurrencyGroupList = (props: IProps): Array<Models.GroupCurrencyProductData> => {
    
    const productList: Models.CreditProductList = getSortedCreditProductList (filterCreditProductList (props))
    return Utils.filterSortedCurrencyList (

        props.currencyList,
        Utils.extractCreditCurrencyList (productList)
    
    ).data.map ((currencyClassifier: ModelsApp.Classifier): Models.GroupCurrencyProductData => {
        
        const productCreditList = Utils.filterCreditProductListByCurrency (
            productList, currencyClassifier
        )

        return ({
        
            ...defaultValues.GroupCurrencyProductData,
            productCreditList,
            currencyClassifier,

            summa: Utils.sumCreditProductListByCurrency (productCreditList),

        })

    })

}

const renderCreditProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (

    _.flatten (getCreditCurrencyGroupList (props).map (

        (currencyCredit: Models.GroupCurrencyProductData, index: number, groupList: Array<Models.GroupCurrencyProductData>): Array<React.ReactElement<TableRow> | null> => (
    
            renderProductListCurrencyGroupHeader (
            
                keyGroupDepositProductList (currencyCredit, index),
                columnCreditProductList,
                currencyCredit.summa,
                currencyCredit.currencyClassifier,
                index,
                groupList, // FIXME: remove this param, after UFS bug will be fixed
            
            ).concat (currencyCredit.productCreditList.data.map (

                (product: Models.CreditProduct, index: number): IProductTableRow | null => (
                    getCreditProductRow (props, product, index)
                )).map (renderProductTableRow)

            )

        )

    ))

)

/**
 * Deposit List data
 */

const columnDepositProductList: Array<string> = getTableRelativeWidth (['273', '193', '40', '90', '44'])
const headerDepositProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Название депозита" },
    { name: "Текущий остаток", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания" },
    { name: "" },
])

const keyDepositProductList = (product: Models.SubDepositProduct, index: number): string => (
    `deposit-product-${ product.acctId || index }`
)

const keyGroupDepositProductList = (group: Models.GroupCurrencyProductData, index: number): string => (
    `deposit-group-${ group.currencyClassifier && group.currencyClassifier.code }-${ index }`
)

const getDepositProductRow = (props: IProps, product: Models.DepositProduct, index: number): IProductTableRow | null => (

    (product.depositProduct == null) ? null : ({

        type: product.productType,
        key: keyDepositProductList (product.depositProduct, index),
        onPress: () => props.performDepositProductShow (product),
        cellList: [{ ...defaultProductTableCell,

            type:Enums.ProductTableCellType.Text,
            key: `${ keyDepositProductList (product.depositProduct, index) }-type`,
            data: `${
                product.depositProduct.depositTypeClassifier &&
                product.depositProduct.depositTypeClassifier.value ||
                PLACEHOLDER
            }`,

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Text,
            key: `${ keyDepositProductList (product.depositProduct, index) }-deposit-amount-rest`,
            data: product.depositProduct && Utils.getBalanceString (
                product.depositProduct.depositAmountRest,
                product.depositProduct.currencyClassifier
            ),

        }, { ...defaultProductTableCell,
            
            type: Enums.ProductTableCellType.Empty,
            key: `${ keyDepositProductList (product.depositProduct, index) }-empty`,

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Date,
            key: `${ keyDepositProductList (product.depositProduct, index) }-deal-period-end`,
            data: formatDate(product.depositProduct.dealPeriodEndDate),

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Callback,
            key: `${ keyDepositProductList (product.depositProduct, index) }-details`,
            onPress: () => props.performDepositProductShow (product),

        }]

    })

)

const filterDepositProductList = (props: IProps): Models.DepositProductList => (
    Array.isArray (props.currentDepositProductList && props.currentDepositProductList.data) ? ({
        
        ...props.currentDepositProductList,
        data: props.currentDepositProductList.data.filter (({ depositProduct }: Models.DepositProduct): boolean => (
            
            // 1. Only deposit products
            (depositProduct != null) &&
            
            // 2. Filtered by currency
            filterByCurrencyInput (props, depositProduct.currencyClassifier)

        ))
    }) : defaultValues.DepositProductList
)

const getSortedDepositProductList = (productList: Models.DepositProductList): Models.DepositProductList => (
    Array.isArray (productList.data) ? ({ ...productList,
        data: productList.data.sort (($1: Models.DepositProduct, $2: Models.DepositProduct): number => (
            ($1.depositProduct && (typeof $1.depositProduct.depositAmountRest == 'number')) && 
            ($2.depositProduct && (typeof $2.depositProduct.depositAmountRest == 'number')) ? (
                $2.depositProduct.depositAmountRest - $1.depositProduct.depositAmountRest
            ) : 0
        ))
    }) : productList
)

const getDepositCurrencyGroupList = (props: IProps): Array<Models.GroupCurrencyProductData> => {

    const productList: Models.DepositProductList = getSortedDepositProductList (filterDepositProductList (props))
    return Utils.filterSortedCurrencyList (

        props.currencyList,
        Utils.extractDepositCurrencyList (productList)
    
    ).data.map ((currencyClassifier: ModelsApp.Classifier): Models.GroupCurrencyProductData => {
        
        const productDepositList = Utils.filterDepositProductListByCurrency (
            productList,
            currencyClassifier
        )

        return ({
        
            ...defaultValues.GroupCurrencyProductData,
            productDepositList,
            currencyClassifier,

            summa: Utils.sumDepositProductListByCurrency (productDepositList),

        })

    })

}

const renderDepositProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (

    _.flatten (getDepositCurrencyGroupList (props).map (

        (currencyDeposit: Models.GroupCurrencyProductData, index: number, groupList: Array<Models.GroupCurrencyProductData>): Array<React.ReactElement<TableRow> | null> => (
    
            renderProductListCurrencyGroupHeader (
            
                keyGroupDepositProductList (currencyDeposit, index),
                columnDepositProductList,
                currencyDeposit.summa,
                currencyDeposit.currencyClassifier,
                index,
                null, // FIXME: remove this param, after UFS bug will be fixed
            
            ).concat (currencyDeposit.productDepositList.data.map (

                (product: Models.DepositProduct, index: number): IProductTableRow | null => (
                    getDepositProductRow (props, product, index)
                )).map (renderProductTableRow)

            )

        )

    ))

)

/**
 * Payment Account List data
 */

const columnClosePaymentAccountProductList: Array<string> = (['53%', '25%', '15%', '7%'])
const headerClosePaymentAccountProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Номер счёта" },
    { name: "Дата закрытия" },
    { name: "" },
    { name: "" },
])

const filterClosePaymentAccountProductList = (props: IProps): Models.SettlementAgreementProductList => (
    Array.isArray (props.currentPaymentAccountProductList && props.currentPaymentAccountProductList.data) ? ({

        ...props.currentPaymentAccountProductList,
        data: props.currentPaymentAccountProductList.data.filter (({ paymentAccountProduct }: Models.SettlementAgreementProduct): boolean => (

            // 1. Only payment account products
            (paymentAccountProduct != null) &&

            // 2. Filtered by currency
            (filterByCurrencyInput (props, paymentAccountProduct.currencyClassifier))

        ))
    }) : defaultValues.SettlementAgreementProductList
)
const getClosePaymentAccountProductRow = (props: IProps, product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (

    (product.paymentAccountProduct == null) ? null : ({

        type: product.productType,
        key: keyPaymentAccountProductList (product.paymentAccountProduct, index),
        onPress: () => props.performPaymentAccountProductShow (product),
        cellList: [{ ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Subtitled,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-title`,
            data: `${

            product.paymentAccountProduct.accountNumber &&
            product.paymentAccountProduct.accountNumber.formatAccountNumber () ||
            PLACEHOLDER

                }`,

            options: `${([

                product.paymentAccountProduct.isExistCardIndex ? 'Картотека' : null,
                product.paymentAccountProduct.restrictionList.data.length ? 'Ограничения' : null

            ]).compact ().join ('     ')}` || null

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Date,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-closeDate`,
            data: formatDate(product.paymentAccountProduct.closeDate),
        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Empty,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-empty`,

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Callback,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-details`,
            onPress: () => props.performPaymentAccountProductShow (product),

        }]

    })

)
const   getClosePaymentAccountCurrencyGroupList = (props: IProps): Array<Models.GroupCurrencyProductData> => {

    const productList: Models.SettlementAgreementProductList = filterActivePaymentAccountProductList (props)

    return Utils.filterSortedCurrencyList (

        props.currencyList,
        Utils.extractPaymentAccountCurrencyList (productList)

    ).data.map ((currencyClassifier: ModelsApp.Classifier): Models.GroupCurrencyProductData => {

        const productPaymentAccountList = Utils.filterPaymentAccountProductListByCurrency (
            productList,
            currencyClassifier
        )

        return ({

            ...defaultValues.GroupCurrencyProductData,
            productPaymentAccountList,
            currencyClassifier,

            summa: Utils.sumPaymentAccountProductListByCurrency (productPaymentAccountList),

        })

    })

}

const columnActivePaymentAccountProductList: Array<string> = (['37%', '34%', '7%', '15%', '7%'])
const headerActivePaymentAccountProductList: Array<Models.ProductHeaderTable> = ([
    { name: "Номер счёта" },
    { name: "Текущий остаток", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата последней операции" },
    { name: "" },
])

const filterActivePaymentAccountProductList = (props: IProps): Models.SettlementAgreementProductList => (
    Array.isArray (props.currentPaymentAccountProductList && props.currentPaymentAccountProductList.data) ? ({

        ...props.currentPaymentAccountProductList,
        data: props.currentPaymentAccountProductList.data.filter (({ paymentAccountProduct }: Models.SettlementAgreementProduct): boolean => (

            // 1. Only payment account products
            (paymentAccountProduct != null) &&

            // 2. Filtered by currency
            (filterByCurrencyInput (props, paymentAccountProduct.currencyClassifier)) &&

            // 3. Filtered by Encumbrance type

            (filterByEncumbranceInput (props, paymentAccountProduct))

        ))
    }) : defaultValues.SettlementAgreementProductList
)

const keyGroupPaymentAccountProductList = (group: Models.GroupCurrencyProductData, index: number): string => (
    `payment-account-group-${ group.currencyClassifier && group.currencyClassifier.code }-${ index }`
)

const keyPaymentAccountProductList = (product: Models.SubPaymentAccountProduct, index: number): string => (
    `payment-account-product-${ product.accountId || index }`
)

const getActivePaymentAccountProductRow = (props: IProps, product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (

    (product.paymentAccountProduct == null) ? null : ({

        type: product.productType,
        key: keyPaymentAccountProductList (product.paymentAccountProduct, index),
        onPress: () => props.performPaymentAccountProductShow (product),
        cellList: [{ ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Subtitled,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-title`,
            data: `${

                product.paymentAccountProduct.accountNumber &&
                product.paymentAccountProduct.accountNumber.formatAccountNumber () ||
                PLACEHOLDER

            }`,

            options: `${([

                product.paymentAccountProduct.isExistCardIndex ? 'Картотека' : null,
                product.paymentAccountProduct.restrictionList.data.length ? 'Ограничения' : null
            
            ]).compact ().join ('     ')}` || null

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Text,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-type`,
            data: product.paymentAccountProduct && Utils.getBalanceString (
                product.paymentAccountProduct.curBalance,
                product.paymentAccountProduct.currencyClassifier
            ),

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Empty,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-empty`,

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Date,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-last-operation`,
            data: formatDate(product.paymentAccountProduct.lastActionDate),

        }, { ...defaultProductTableCell,

            type: Enums.ProductTableCellType.Callback,
            key: `${ keyPaymentAccountProductList (product.paymentAccountProduct, index) }-details`,
            onPress: () => props.performPaymentAccountProductShow (product),

        }]

    })

)


const getActivePaymentAccountCurrencyGroupList = (props: IProps): Array<Models.GroupCurrencyProductData> => {
        
    const productList: Models.SettlementAgreementProductList = filterActivePaymentAccountProductList (props)

    return Utils.filterSortedCurrencyList (

        props.currencyList,
        Utils.extractPaymentAccountCurrencyList (productList)
    
    ).data.map ((currencyClassifier: ModelsApp.Classifier): Models.GroupCurrencyProductData => {
        
        const productPaymentAccountList = Utils.filterPaymentAccountProductListByCurrency (
            productList,
            currencyClassifier
        )

        return ({
        
            ...defaultValues.GroupCurrencyProductData,
            productPaymentAccountList,
            currencyClassifier,

            summa: Utils.sumPaymentAccountProductListByCurrency (productPaymentAccountList),

        })

    })

}

const renderPaymentAccountProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => (

    _.flatten ((Utils.isActiveProductList(props.productListAgreementStatus) ?
        getActivePaymentAccountCurrencyGroupList (props) :
        getClosePaymentAccountCurrencyGroupList  (props)).map (

        (currencyPaymentAccount: Models.GroupCurrencyProductData, index: number, groupList: Array<Models.GroupCurrencyProductData>): Array<React.ReactElement<TableRow> | null> => {
			const currencyPaymentAccountSorted = Utils.sortProductPaymentAccountList(currencyPaymentAccount)
			if (Utils.isActiveProductList(props.productListAgreementStatus))
            {
                return renderProductListCurrencyGroupHeader(
                            keyGroupPaymentAccountProductList(currencyPaymentAccountSorted, index),
                            columnActivePaymentAccountProductList,
                            currencyPaymentAccountSorted.summa,
                            currencyPaymentAccountSorted.currencyClassifier,
                            index,
                            groupList, // FIXME: remove this param, after UFS bug will be fixed

                        ).concat(currencyPaymentAccountSorted.productPaymentAccountList.data.map(
                            (product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (
                                getActivePaymentAccountProductRow(props, product, index)
                            )).map(renderProductTableRow)
                        )
            } else {
                return renderProductListCurrencyGroupHeader(
                            keyGroupPaymentAccountProductList(currencyPaymentAccountSorted, index),
                            columnClosePaymentAccountProductList,
                            null,
                            currencyPaymentAccountSorted.currencyClassifier,
                            index,
                            groupList, // FIXME: remove this param, after UFS bug will be fixed

                        ).concat(currencyPaymentAccountSorted.productPaymentAccountList.data.map(
                            (product: Models.SettlementAgreementProduct, index: number): IProductTableRow | null => (
                                getClosePaymentAccountProductRow(props, product, index)
                            )).map(renderProductTableRow)
                        )
            }


        }

    ))

)

/**
 * Currency Control List data
 */

const columnCurrencyControlProductList: Array<string> = ([])
const headerCurrencyControlProductList: Array<Models.ProductHeaderTable> = ([])
const keyCurrencyControlProductList = (index: number): string => ('')
const renderCurrencyControlProductList = (props: IProps): Array<React.ReactElement<TableRow> | null> => ([])


/**
 * Render methods mapping
 */

const headerDefault: Array<Models.ProductHeaderTable> = ([])
const getProductListColumns = (props: IProps): Models.ProductHeaderTable[] => {
    const type: number = props.currentProductListType
    switch (type) {
        case Enums.ProductType.AcquiringProduct: return headerAcquiringProductList
        case Enums.ProductType.BankGuaranteeProduct: return headerBankGuaranteeProductList
        case Enums.ProductType.CashManagementProduct: return headerCashManagementProductList
        case Enums.ProductType.ContractConstructorProduct: return headerContractConstructorProductList
        case Enums.ProductType.ContractNsoProduct: return headerContractNsoProductList
        case Enums.ProductType.ContractSdoProduct: return headerContractSdoProductList
        case Enums.ProductType.CorporateCardProduct: return headerCorporateCardProductList
        case Enums.ProductType.CreditProduct: return headerCreditProductList
        case Enums.ProductType.CurrencyControlProduct: return headerCurrencyControlProductList
        case Enums.ProductType.CustomsPaymentProduct: return headerCustomsPaymentProductList
        case Enums.ProductType.DboProduct: return headerDboProductList
        case Enums.ProductType.DepositProduct: return headerDepositProductList
        case Enums.ProductType.EncashmentProduct: return headerEncashmentProductList
        case Enums.ProductType.PackageProduct: return headerPackageProductList
        case Enums.ProductType.PaymentAccountProduct: return Utils.isActiveProductList(props.productListAgreementStatus)
                                                                ? headerActivePaymentAccountProductList
                                                                : headerClosePaymentAccountProductList
        case Enums.ProductType.SalaryProduct: return headerSalaryProductList
        case Enums.ProductType.SelfEncashmentProduct: return headerSelfEncashmentProductList
        case Enums.ProductType.TariffPlanProduct: return headerTariffPlanProductList
        case Enums.ProductType.None: default: return headerDefault
    }
}

const columnDefault: Array<string> = ([])
const getProductListColumnWidth = (props: IProps): Array<string> => {
    switch (props.currentProductListType) {
        case Enums.ProductType.PaymentAccountProduct:
            return Utils.isActiveProductList(props.productListAgreementStatus)
                ? columnActivePaymentAccountProductList
                : columnClosePaymentAccountProductList
        case Enums.ProductType.CreditProduct: return columnCreditProductList
        case Enums.ProductType.CashManagementProduct: return columnCashManagementProductList
        case Enums.ProductType.AcquiringProduct: return columnAcquiringProductList
        case Enums.ProductType.BankGuaranteeProduct: return columnBankGuaranteeProductList
        case Enums.ProductType.ContractConstructorProduct: return columnContractConstructorProductList
        case Enums.ProductType.ContractNsoProduct: return columnContractNsoProductList
        case Enums.ProductType.ContractSdoProduct: return columnContractSdoProductList
        case Enums.ProductType.CorporateCardProduct: return columnCorporateCardProductList
        case Enums.ProductType.CurrencyControlProduct: return columnCurrencyControlProductList
        case Enums.ProductType.CustomsPaymentProduct: return columnCustomsPaymentProductList
        case Enums.ProductType.DboProduct: return columnDboProductList
        case Enums.ProductType.DepositProduct: return columnDepositProductList
        case Enums.ProductType.EncashmentProduct: return columnEncashmentProductList
        case Enums.ProductType.PackageProduct: return columnPackageProductList
        case Enums.ProductType.SalaryProduct: return columnSalaryProductList
        case Enums.ProductType.SelfEncashmentProduct: return columnSelfEncashmentProductList
        case Enums.ProductType.TariffPlanProduct: return columnTariffPlanProductList
        case Enums.ProductType.None: default: return columnDefault
    }
}

const renderDefaultProductList = (props: IProps): Array<React.ReactElement<TableRow>> => ([])
const getProductListRows = (props: IProps): Array<React.ReactElement<TableRow> | null> => {
    const type: number = props.currentProductListType
    const productKey: keyof IProps = `current${ Enums.ProductType[type] }List` as keyof IProps
    switch (type) {

        case Enums.ProductType.AcquiringProduct: return renderAcquiringProductList (props)
        case Enums.ProductType.BankGuaranteeProduct: return renderBankGuaranteeProductList (props)
        case Enums.ProductType.CashManagementProduct: return renderCashManagementProductList (props)
        case Enums.ProductType.ContractConstructorProduct: return renderContractConstructorProductList (props)
        case Enums.ProductType.ContractNsoProduct: return renderContractNsoProductList (props)
        case Enums.ProductType.ContractSdoProduct: return renderContractSdoProductList (props)
        case Enums.ProductType.CorporateCardProduct: return renderCorporateCardProductList (props)
        case Enums.ProductType.CustomsPaymentProduct: return renderCustomsPaymentProductList (props)
        case Enums.ProductType.DboProduct: return renderDboProductList (props)
        case Enums.ProductType.EncashmentProduct: return renderEncashmentProductList (props)
        case Enums.ProductType.PackageProduct: return renderPackageProductList (props)
        case Enums.ProductType.SalaryProduct: return renderSalaryProductList (props)
        case Enums.ProductType.SelfEncashmentProduct: return renderSelfEncashmentProductList (props)
        case Enums.ProductType.TariffPlanProduct: return renderTariffPlanProductList (props)
        case Enums.ProductType.CreditProduct: return renderCreditProductList (props)
        case Enums.ProductType.DepositProduct: return renderDepositProductList (props)
        case Enums.ProductType.PaymentAccountProduct: return renderPaymentAccountProductList (props)
        case Enums.ProductType.CurrencyControlProduct:
        case Enums.ProductType.None:
        default: return renderDefaultProductList (props)
    }
}

const getFetchingProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): boolean => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
        Enums.ProductType.BankGuaranteeProduct === productType)  : {
            return isActiveProductList ? props.creditActiveProductListFetching
                                       : props.creditCloseProductListFetching
        }
        case (Enums.ProductType.DepositProduct === productType ||
        Enums.ProductType.ContractNsoProduct === productType ||
        Enums.ProductType.ContractSdoProduct === productType)  : {
            return isActiveProductList ? props.depositActiveProductListFetching
                                       : props.depositCloseProductListFetching
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
            return isActiveProductList ? props.corporateCardActiveProductListFetching
                                       : props.corporateCardCloseProductListFetching
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
        Enums.ProductType.SelfEncashmentProduct === productType)  : {
            return isActiveProductList ? props.encashmentContractActiveProductListFetching
                                       : props.encashmentContractCloseProductListFetching
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return props.legalInfoProductListFetching
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return isActiveProductList ? props.acquiringActiveProductListFetching
                                       : props.acquiringCloseProductListFetching
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListFetching
                                       : props.dboCloseProductListFetching
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListFetching
                                       : props.udboCloseProductListFetching
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListFetching
                                       : props.salaryCloseProductListFetching
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
        Enums.ProductType.PaymentAccountProduct       === productType ||
        Enums.ProductType.PackageProduct              === productType ||
        Enums.ProductType.TariffPlanProduct           === productType ||
        Enums.ProductType.CustomsPaymentProduct       === productType)  : {
            return isActiveProductList ? props.settlementAgreementActiveProductListFetching
                                       : props.settlementAgreementCloseProductListFetching
        }
        default: return false
    }
}
const getErrorProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): Error | null=>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
        Enums.ProductType.BankGuaranteeProduct === productType)  : {
            return isActiveProductList ? props.creditActiveProductListError
                                       : props.creditCloseProductListError
        }
        case (Enums.ProductType.DepositProduct === productType ||
        Enums.ProductType.ContractNsoProduct === productType ||
        Enums.ProductType.ContractSdoProduct === productType)  : {
            return isActiveProductList ? props.depositActiveProductListError
                                       : props.depositCloseProductListError
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
            return isActiveProductList ? props.corporateCardActiveProductListError
                                       : props.corporateCardCloseProductListError
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
        Enums.ProductType.SelfEncashmentProduct === productType)  : {
            return isActiveProductList ? props.encashmentContractActiveProductListError
                                       : props.encashmentContractCloseProductListError
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return props.legalInfoProductListError
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return isActiveProductList ? props.acquiringActiveProductListError
                                       : props.acquiringCloseProductListError
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListError
                                       : props.dboCloseProductListError
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListError
                                       : props.udboCloseProductListError
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListError
                                       : props.salaryCloseProductListError
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
        Enums.ProductType.PaymentAccountProduct === productType ||
        Enums.ProductType.PackageProduct === productType ||
        Enums.ProductType.TariffPlanProduct === productType ||
        Enums.ProductType.CustomsPaymentProduct === productType)  : {
            return isActiveProductList ? props.settlementAgreementActiveProductListError
                                       : props.settlementAgreementCloseProductListError
        }
        default: return null
    }
}
const getEksFetchingProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): boolean=>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
        Enums.ProductType.BankGuaranteeProduct === productType)  : {
            return isActiveProductList ? props.creditActiveProductEksListFetching
                                       : props.creditCloseProductEksListFetching
        }
        case (Enums.ProductType.DepositProduct === productType ||
        Enums.ProductType.ContractNsoProduct === productType ||
        Enums.ProductType.ContractSdoProduct === productType)  : {
            return isActiveProductList ? props.depositActiveProductEksListFetching
                                       : props.depositCloseProductEksListFetching
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
            return isActiveProductList ? props.corporateCardActiveProductEksListFetching
                                       : props.corporateCardCloseProductEksListFetching
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
        Enums.ProductType.SelfEncashmentProduct === productType)  : {
            return isActiveProductList ? props.encashmentContractActiveProductEksListFetching
                                       : props.encashmentContractCloseProductEksListFetching
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return props.legalInfoProductEksListFetching
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return isActiveProductList ? props.acquiringActiveProductEksListFetching
                                       : props.acquiringCloseProductEksListFetching
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductEksListFetching
                                       : props.dboCloseProductEksListFetching
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductEksListFetching
                                       : props.udboCloseProductEksListFetching
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductEksListFetching
                                       : props.salaryCloseProductEksListFetching
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
        Enums.ProductType.PaymentAccountProduct === productType ||
        Enums.ProductType.PackageProduct === productType ||
        Enums.ProductType.TariffPlanProduct === productType ||
        Enums.ProductType.CustomsPaymentProduct === productType)  : {
            return isActiveProductList ? props.settlementAgreementActiveProductEksListFetching
                                       : props.settlementAgreementCloseProductEksListFetching
        }
        default: return false
    }
}

const getEksErrorProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): Models.EksError[] =>
{
    switch (true) {
        case Enums.ProductType.CreditProduct === productType : {
            return  props.currentCreditProductList.eksErrorList
        }

        case Enums.ProductType.BankGuaranteeProduct === productType: {
            return props.currentBankGuaranteeProductList.eksErrorList
        }

        case Enums.ProductType.DepositProduct === productType :{
            return props.currentDepositProductList.eksErrorList
        }

        case Enums.ProductType.ContractSdoProduct === productType:{
            return props.currentContractSdoProductList.eksErrorList
        }

        case Enums.ProductType.ContractNsoProduct === productType: {
            return props.currentContractNsoProductList.eksErrorList
        }
        case Enums.ProductType.CashManagementProduct === productType:{
            return props.currentCashManagementProductList.eksErrorList
        }

        case Enums.ProductType.PaymentAccountProduct === productType: {
            return props.currentPaymentAccountProductList.eksErrorList
        }

        case Enums.ProductType.TariffPlanProduct === productType: {
            return props.currentTariffPlanProductList.eksErrorList
        }

        case Enums.ProductType.CustomsPaymentProduct === productType: {
            return props.currentCustomsPaymentProductList.eksErrorList
        }

        case Enums.ProductType.PackageProduct === productType: {
            return props.currentPackageProductList.eksErrorList
        }

        case Enums.ProductType.CorporateCardProduct === productType : {
            return props.currentCorporateCardProductList.eksErrorList
        }
        case Enums.ProductType.SelfEncashmentProduct === productType: {
            return  props.currentSelfEncashmentProductList.eksErrorList
        }
        case Enums.ProductType.EncashmentProduct === productType: {
            return props.currentEncashmentProductList.eksErrorList
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return  props.currentCurrencyControlProductList.eksErrorList
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return props.currentAcquiringProductList.eksErrorList
        }
        case Enums.ProductType.DboProduct === productType: {
            return  props.currentDboProductList.eksErrorList
        }

        case Enums.ProductType.ContractConstructorProduct === productType: {
            return  props.currentContractConstructorProductList.eksErrorList
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return props.currentSalaryProductList.eksErrorList
        }
        default: return []
    }
}

const getProductListStatus = (props: IProps): Models.ProductListStatus => {
    const type: number = props.currentProductListType
    let isActiveProductList = Utils.isActiveProductList(props.productListAgreementStatus)
    return {
        fetching: getFetchingProductList(props, type, isActiveProductList),
        eksErrorList: getEksErrorProductList(props, type, isActiveProductList),
        eksListFetching: getEksFetchingProductList(props, type, isActiveProductList),
        error: getErrorProductList(props, type, isActiveProductList),
    }
}


/**
 * Subviews
 */

const getErrorPanel = (performRefresh: Function,
                       codeError: string = "Ошибка получения списка продуктов",
                       errorMessage: Models.EksError[] | string = 'Не удалось загрузить данные о продукте. Попробуйте снова или обратитесь в службу поддержки.',
                       product: Models.ProductListStatus) => (
    <View
        testID={ 'test-id-error-panel-container' }
        style={ Styles.productListErrorPanelContainer }
        key={ 'error-panel-container' }>

        <Panel
            testID='test-id-978b1ec0-737d-2f05-48fa-918dfc7585a4'
            type={PanelType.WARNING_BOX}
            header={codeError}
            headerMedia={
                    <Button testID='test-id-a67b9a4b-d551-0e73-a354-39e3b77740e6'
                        onExecute={()=>performRefresh()}>
                        <Text testID='test-id-29020205-e280-db5f-d922-51cef6dc4bb8'>{"Повторить запрос"}</Text>
                    </Button>
            }
            hasIcon>
            <View
                testID='test-id-79bd5f70-9489-0d6a-c1ef-7d9f1a86c1d2'
                key="errorPanelMessage"
                style={Styles.errorProductListView}>
                {
                    Array.isArray(errorMessage) && errorMessage.length > 0 ?
                        (<Text
                                key={`Error Product Item Text`}
                                numberOfLines = {40}
                                testID={`test-id-74b37660-9361-4981-a50a-509d6f424ef0`}
                                style={Styles.productTypeFetchError}>
                                {"Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки"}
                        </Text>) :
                        (<Text
                                key="Error Placement list"
                                numberOfLines = {40}
                                testID='test-id-74b37660-9361-4981-a50a-509d6f424ef0'
                                style={Styles.productTypeFetchError}>
                                {errorMessage}
                        </Text>)

                }
            </View>
        </Panel>
    </View>
)

const getLoader = () => (
    <View
        testID='test-id-loader-container'
        key='loader-container'
        style={ Styles.loaderContainerView }>

        <Loader testID='test-id-loader'/>
    </View>

)

const getProductContentPanel: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-06b599bd-ebcd-34b7-6e72-8db37da5154e' style={Styles.productContentWithFilterList}>
            <SplitPanel testID='test-id-afcc7381-a9c5-50ed-3ab4-8c849eff8805'
                        id={Utils.getNavigationCRMProductListString(Enums.NavigationAppCRMProductList.AppCRM_ProductListWithFilterList)}>
                <ContentPanel testID='test-id-4e1c9727-ac82-d757-9c32-18c513d0d82d'
                              style={{ backgroundColor: '#fff' }}>
                    <Page testID='test-id-8581a110-ed6a-45da-506f-55f8812b996b'
                          scrollEnabled={ false }
                          content={getContentPanelContent (props) }>
                        <LeftPageHeader testID='test-id-8698471c-0ac7-f3ef-e87f-08b5e8649f25'>
                            <NavigationBackButton
                                testID="test-id-c5fb1ff3-15e3-e36e-847f-35512bf6916a"
                                title={false}
                                onClick={props.navigateBack}
                            />
                            <View
                                style={Styles.navigationBackButtonTextAdjustment}
                                testID="test-id-6733441e-5687-0000-167a-0ca21ea4b300"
                            >
                                <NavigationTextButton
                                    testID="test-id-c5fb1ff3-0000-e36e-847f-35512bf6916a"
                                    title={'Продукты'}
                                    onExecute={props.navigateBack}
                                />
                            </View>
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-945ddf6c-91a8-3427-873b-2b7e96296cf3'>
                            <H2 testID='test-id-5839caf4-5e0e-a69d-5a71-5b0b6c1c4404'>
                                {Utils.getProductListTypeName(props.currentProductListType)}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                </ContentPanel>
                <AccessoryPanel testID='test-id-8ec9a53c-4c2d-9982-c984-6e83fbc45805'>
                    <Page
                        testID='test-id-ecc9f8bc-a752-535d-9d61-07c196408c77'
                        content={getAccessoryPanelContent(props, getProductListStatus(props))}>

                        { getAccessoryPanelPageHeader (props) }
                    </Page>
                </AccessoryPanel>
            </SplitPanel>
            {props.isVisibleModalProduct ?
                <ContainerProduct testID='test-id-1378c9e3-07eb-849b-4593-51dbc97e2d62'/> : null}
        </View>
    )
}

const filterableProductTypeList: Array<Enums.ProductType> = [
    Enums.ProductType.CreditProduct,
    Enums.ProductType.DepositProduct,
    Enums.ProductType.BankGuaranteeProduct,
    Enums.ProductType.PaymentAccountProduct,
    Enums.ProductType.ContractSdoProduct,
    Enums.ProductType.ContractNsoProduct,
]

const getAccessoryPanelPageHeader: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<CenterPageHeader> => (
    (filterableProductTypeList.indexOf (props.currentProductListType) != -1) ? (

        <CenterPageHeader testID={ 'test-id-accessoty-panel-center-page-header' }>
            <H2 testID={ 'test-id-accessoty-panel-title' }>Фильтры</H2>
        </CenterPageHeader>
    
    ) : (

        <LeftPageHeader testID={ 'test-id-empty-left-page-header' }/>

    )
)

const getAccessoryPanelContent: React.StatelessComponent<IProps> = (props: IProps, status: Enums.ProductListAgreementStatus): React.ReactElement<View> => (
    (filterableProductTypeList.indexOf (props.currentProductListType) != -1) ? (

        <View testID='test-id-0ecd9afc-2bd4-9cb2-2398-18223bae3852' style={ Styles.productListFilterBar }>
            { Array.isArray(props.currencyList.data) && (props.currencyList.data.length > 0) && getProductCurrencyContent (props) }
            {
                (
                    (props.currentProductListType == Enums.ProductType.PaymentAccountProduct) &&
                    Array.isArray (props.encumbranceList.data) && props.encumbranceList.data.length > 0 ? (

                        <View testID={ 'test-id-encumbrance-filter-container' } style={ Styles.encumbranceFilterContainer }>
                            <View style={Styles.cardIndexRestrictionFilterWrapper}>
                                <Text testID={ 'test-id-encumbrance-filter-title' } style={ Styles.filterTitle }>
                                    Картотеки и ограничения
                                </Text>
                                <HintIcon
                                    testID="baf6df9e-c512-11e7-abc4-cec278b6b50a"
                                    text='Ограничения - факторы, препятствующие оказанию услуг по договору РКО.\nКартотека - очередь платежных документов по списанию средств со счета, ожидающих акцепта / не исполненных в срок.'
                                />
                            </View>
                            {

                                props.encumbranceList.data.map ((item: Models.ProductEncumbrance,index: number): React.ReactElement<Checkbox> => (

                                    <Checkbox
                                        key={ `encumbrance-filter-${ item.type }-${index}` }
                                        testID={ `test-id-encumbrance-filter-${ item.type }-${index}` }
                                        checked={

                                            Array.isArray (props.inputEncumbranceList.data) ? (
                                                
                                                props.inputEncumbranceList.data.find ((encumbrance: Models.ProductEncumbrance): boolean => (

                                                    encumbrance.type == item.type

                                                )) != undefined

                                            ) : false
                                        
                                        }
                                        label={ item.name }
                                        onChange={ () => props.performInputEncumbrance (item) }
                                    />

                                ))

                            }
                        </View>

                    ) : null
                )
            }
        </View>

    ) : (

        <View testID={ 'test-id-empty-filters' }/>

    )
)

const getProductCurrencyContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-79f6272b-83e9-c492-122b-89fe66c63afa'>
        <Text testID={ 'test-id-encumbrance-filter-title' } style={ Styles.filterTitle }>Валюты</Text>
        <RadioGroup
            testID='test-id-23d5e5cd-da16-e690-92ba-ee81054a8659'
            value={props.inputCurrency && props.inputCurrency.code ? props.inputCurrency.code : "ProductCurrencyList"}
            onChange={ (index: number) => (
                props.performInputCurrency (
                    (index > 0) ? props.currencyList.data[index - 1] : defaultValues.Classifier
                )
            ) }>

            <RadioButton
                testID='test-id-0d7abe87-c39c-665a-87a2-82d454120c3c'
                key={"ProductCurrencyList"}
                value={"ProductCurrencyList"}
                label={"Все"}/>

            {
                props.currencyList.data.map((currency: ModelsApp.Classifier, index: number): React.ReactElement<RadioButton> => (
                    <RadioButton
                        testID='test-id-7b8a69f5-9f41-551a-8be8-0418f8e5e027'
                        key={`Currency Item ${currency.code}-${index}`}
                        value={currency.code}
                        label={currency.code}/>
                ))
            }
        </RadioGroup>
    </View>
)

const refreshProductList = (props: IProps) => {
    props.performCallGetForceRequestProductList (props.currentProductListType)
}

const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const UNDEFINED = Utils.getPlaceholderStringRepresentation (Utils.UndefinedValuesPlaceholder.UNDEFINED)
    const statusProductList = getProductListStatus (props)
    const refresh = (statusProductList.fetching ||
        statusProductList.eksListFetching) ||
        (statusProductList.error && statusProductList.error.code) ? null : (
            <RefreshBar key = {'refreshBarCustomerProductList'}
                        testID='test-id-1995612a-eac4-11e7-80c1-9a214cf093ae'
                        title = 'Обновить'
                        performRefresh={props.performProductListModalAlertShow}
                        date={props.bhCachedDate || new Date()}/>
    )
    const content = (statusProductList.eksListFetching || statusProductList.fetching) ? (
        
        getLoader()
        
    ) : props.pollingError ? (

        getErrorPanel (()=>
            props.performCallEksRequestProductList (props.currentProductListType,
                props.productListAgreementStatus), 'Ошибка загрузки продуктов',
                props.pollingError.message, statusProductList)

    ) : (statusProductList.error &&
            (statusProductList.error.comment ||
            statusProductList.error.message ||
            statusProductList.error.code)) ? (

        getErrorPanel (() => props.performCallGetUncachedRequestProductList (props.currentProductListType),
                undefined,
                statusProductList.error.comment || statusProductList.error.message || undefined,
                statusProductList)

        ) : (Array.isArray(statusProductList.eksErrorList) && statusProductList.eksErrorList.length) ? (

        getErrorPanel (()=> props.performCallEksRequestProductList(props.currentProductListType,
            props.productListAgreementStatus), 'Ошибка загрузки продуктов',
            statusProductList.eksErrorList,
            statusProductList)

    ) : (

            [TableContentProductList (props),
            refresh]
    )



    return (
        <View style={ Styles.productListPage }>
            <View style = {Styles.productListTitleView}
                  testID="test-id-0ec01456-f16e-11e7-8c3f-9a214cf093ae">
                    <Label testID={ 'test-id-productListSubtitle' }
                           text={'Клиент'}
                           block={false}
                           header={''} >
                        <Text testID={ 'test-id-productListTitle' }

                              key={ 'productListNameCustomerTitle' }>
                                { `«${props.currentCustomerManaged.name ||
                                  props.currentCustomerManaged.shortName ||
                                  PLACEHOLDER}»`}
                        </Text>
                    </Label>
            </View>
            <Text
                style={Styles.productListTextAgreementStatus}
                testID="test-id-productListTextTypeProduct"
                key={ 'productListTextTypeProduct' }>
                {`${Utils.getAgreementStatusNameProductList(props.productListAgreementStatus)}`}
            </Text>

            {content}


        </View>
    )
}

/* END - View ProductList additional imports and module code. */

/*
 * UI stateless functional component presenter for "ProductList" container.
 */

export interface IProps {
    performInputCurrency: ModelsProductList.PERFORM_INPUT_CURRENCY,
    performInputEncumbrance: ModelsProductList.PERFORM_INPUT_ENCUMBRANCE,
    performModalProductHide: ModelsProductList.PERFORM_MODAL_PRODUCT_HIDE,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToProductForecastDealInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    navigateToProductForecastEventInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    performContainerReset: ModelsProductList.PERFORM_CONTAINER_RESET,
    performChangeDisplayRefreshBarProductList: ModelsProductList.PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST,
    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,

    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

    performAcquiringProductShow: ModelsProduct.PERFORM_ACQUIRING_PRODUCT_SHOW,
    performCreditProductShow: ModelsProduct.PERFORM_CREDIT_PRODUCT_SHOW,
    performBankGuaranteeProductShow: ModelsProduct.PERFORM_BANK_GUARANTEE_PRODUCT_SHOW,
    performCashManagementProductShow: ModelsProduct.PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW,
    performPaymentAccountProductShow: ModelsProduct.PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW,
    performCustomsPaymentProductShow: ModelsProduct.PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW,
    performPackageProductShow: ModelsProduct.PERFORM_PACKAGE_PRODUCT_SHOW,
    performTariffPlanProductShow: ModelsProduct.PERFORM_TARIFF_PLAN_PRODUCT_SHOW,
    performDepositProductShow: ModelsProduct.PERFORM_DEPOSIT_PRODUCT_SHOW,
    performContractSdoProductShow: ModelsProduct.PERFORM_CONTRACT_SDO_PRODUCT_SHOW,
    performContractNsoProductShow: ModelsProduct.PERFORM_CONTRACT_NSO_PRODUCT_SHOW,
    performCorporateCardProductShow: ModelsProduct.PERFORM_CORPORATE_CARD_PRODUCT_SHOW,
    performEncashmentProductShow: ModelsProduct.PERFORM_ENCASHMENT_PRODUCT_SHOW,
    performSelfEncashmentProductShow: ModelsProduct.PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW,
    performCurrencyControlProductShow: ModelsProduct.PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW,
    performDboProductShow: ModelsProduct.PERFORM_DBO_PRODUCT_SHOW,
    performContractConstructorProductShow: ModelsProduct.PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW,
    performSalaryProductShow: ModelsProduct.PERFORM_SALARY_PRODUCT_SHOW,
    performProductListModalAlertShow: ModelsProductList.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW,
    performProductListModalAlertHide: ModelsProductList.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,

    performCallEksRequestProductList: ModelsCustomer.PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST,
    pollingError: Error | null,
    bhCachedDate: Date | null,
    currencyList: ModelsApp.ClassifierList,
    encumbranceList: Models.ProductEncumbranceList,
    inputCurrency: ModelsApp.Classifier,
    inputEncumbranceList: Models.ProductEncumbranceList,
    isVisibleModalProduct: boolean,
    currentProductListType: Enums.ProductType,
    currentCreditProductList: Models.CreditProductList,
    currentBankGuaranteeProductList: Models.CreditProductList,
    currentCashManagementProductList: Models.SettlementAgreementProductList,
    currentPaymentAccountProductList: Models.SettlementAgreementProductList,
    currentCustomsPaymentProductList: Models.SettlementAgreementProductList,
    currentPackageProductList: Models.SettlementAgreementProductList,
    currentTariffPlanProductList: Models.SettlementAgreementProductList,
    currentDepositProductList: Models.DepositProductList,
    currentContractSdoProductList: Models.DepositProductList,
    currentContractNsoProductList: Models.DepositProductList,
    currentCorporateCardProductList: Models.CorporateCardProductList,
    currentEncashmentProductList: Models.EncashmentContractProductList,
    currentSelfEncashmentProductList: Models.EncashmentContractProductList,
    currentCurrencyControlProductList: Models.LegalInfoProductList,
    currentAcquiringProductList: Models.AcquiringProductList,
    currentDboProductList: Models.DboProductList,
    currentContractConstructorProductList: Models.UdboProductList,
    currentSalaryProductList: Models.SalaryProductList,
    currentCustomerManaged: Models.CustomerManaged,

    creditActiveProductEksListFetching: boolean,
    creditCloseProductEksListFetching: boolean,

    settlementAgreementActiveProductEksListFetching: boolean,
    settlementAgreementCloseProductEksListFetching: boolean,

    depositActiveProductEksListFetching: boolean,
    depositCloseProductEksListFetching: boolean,

    corporateCardActiveProductEksListFetching: boolean,
    corporateCardCloseProductEksListFetching: boolean,

    encashmentContractActiveProductEksListFetching: boolean,
    encashmentContractCloseProductEksListFetching: boolean,

    acquiringActiveProductEksListFetching: boolean,
    acquiringCloseProductEksListFetching: boolean,

    dboActiveProductEksListFetching: boolean,
    dboCloseProductEksListFetching: boolean,

    udboActiveProductEksListFetching: boolean,
    udboCloseProductEksListFetching: boolean,

    salaryActiveProductEksListFetching: boolean,
    salaryCloseProductEksListFetching: boolean,

    legalInfoProductEksListFetching: boolean,

    creditActiveProductListFetching: boolean,
    creditCloseProductListFetching: boolean,

    creditActiveProductListError: Error | null,
    creditCloseProductListError: Error | null,

    depositActiveProductListFetching: boolean,
    depositCloseProductListFetching: boolean,

    depositActiveProductListError: Error | null,
    depositCloseProductListError: Error | null,

    settlementAgreementActiveProductListFetching: boolean,
    settlementAgreementActiveProductListError: Error | null,

    settlementAgreementCloseProductListFetching: boolean,
    settlementAgreementCloseProductListError: Error | null,

    encashmentContractActiveProductListFetching: boolean,
    encashmentContractCloseProductListFetching: boolean,

    encashmentContractActiveProductListError: Error | null,
    encashmentContractCloseProductListError: Error | null,

    corporateCardActiveProductListFetching: boolean,
    corporateCardCloseProductListFetching: boolean,

    corporateCardActiveProductListError: Error | null,
    corporateCardCloseProductListError: Error | null,

    acquiringActiveProductListFetching: boolean,
    acquiringCloseProductListFetching: boolean,

    acquiringActiveProductListError: Error | null,
    acquiringCloseProductListError: Error | null,
    
    dboActiveProductListFetching: boolean,
    dboCloseProductListFetching: boolean,

    dboActiveProductListError: Error | null,
    dboCloseProductListError: Error | null,

    salaryActiveProductListFetching: boolean,
    salaryCloseProductListFetching: boolean,

    salaryActiveProductListError: Error | null,
    salaryCloseProductListError: Error | null,

    udboActiveProductListFetching: boolean,
    udboCloseProductListFetching: boolean,

    udboActiveProductListError: Error | null,
    udboCloseProductListError: Error | null,
    
    legalInfoProductListFetching: boolean,
    legalInfoProductListError: Error | null,

    productListAgreementStatus: Enums.ProductListAgreementStatus,
    testID: string,

    isVisibleRefreshBar: boolean,
    isVisibleProductListModalAlert: boolean,
    currentDeal: Models.ForecastDeal,
    currentEvent: Models.ForecastEvent
    
}
const getSplitPanelProductList = (props:IProps) => {
    return  (
        <SplitPanel
            testID='test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000000'
            id={Utils.getNavigationCRMProductListString(Enums.NavigationAppCRMProductList.AppCRM_ProductList)}
        >
            <ContentPanel
                testID='test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000001'
                style={{backgroundColor: '#fff'}}>
                <Page
                    scrollEnabled={false} content={getProductContentPanel(props)}
                    testID='test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000000'>
                    <LeftPageHeader testID='test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000002'/>
                </Page>
                <Page
                    testID='test-id-0d3835c7-cf66-d3ab-bac7-111222000000'
                    scrollEnabled={false}
                    content={<ContainerProduct testID='test-id-aab07f50-7bac-a77a-3a78-9c6924cebe16'/>}>
                    <LeftPageHeader testID='test-id-00d835c7-cf66-d3ab-bac7-111222000000'/>
                </Page>
            </ContentPanel>
        </SplitPanel>
    )
}

const alertViewMessage: string = (
    'Вы уверены, что хотите обновить данные по продуктам?\n' +
    'Процесс займёт длительное время. ' +
    'Вы можете продолжить работу в приложении и вернуться к данной странице позднее.'
)

const alertView = (props: IProps): React.ReactElement<View> => (
    <AlertView
        testID={ 'test-id-product-list-alert-view' }
        ok={ () => refreshProductList (props) }
        cancel={ props.performProductListModalAlertHide }
        title={ 'Внимание' }
        message={ Utils.productListAlertViewMessage }
        isVisible={ props.isVisibleProductListModalAlert }
        />
)

const ViewProductList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    <View testID='test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000007' style={Styles.main}>
        { getSplitPanelProductList (props) }
        { alertView (props) }
    </View>



)

export default ViewProductList