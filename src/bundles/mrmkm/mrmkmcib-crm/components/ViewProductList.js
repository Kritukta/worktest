/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewProductListStyles';
import { AccessoryPanel, Button, CenterPageHeader, ContentPanel, Checkbox, H2, Icon, IconType, Label, LeftPageHeader, Loader, NavigationBackButton, NavigationTextButton, Page, Panel, PanelType, RadioButton, RadioGroup, SplitPanel, SumText, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, Text, View, HintIcon, } from 'ufs-mobile-platform';
import { defaultValues } from "../models/Models";
import { AlertView, RefreshBar } from "mrmkmcib-app";
import { Enums } from '../Enums';
import * as Utils from "../common/Util";
import ContainerProduct from '../containers/ContainerProduct';
import * as _ from 'lodash';
const orderCurrencyProductList = ["RUR", "USD", "EUR"];
const PLACEHOLDER = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA);
const formatDate = (date, format = 'DD.MM.YYYY') => date ? date.formattedString(format) : PLACEHOLDER;
const checkCurrencyStatus = (props, currency) => ((props.inputCurrency.code == "") ||
    (currency && (currency.code == props.inputCurrency.code)));
const filterByCurrencyInput = (props, currency) => ((props.inputCurrency.code == '') || (currency ? (currency.code == props.inputCurrency.code) : false));
const filterByEncumbranceInput = (props, product) => ((props.inputEncumbranceList && Array.isArray(props.inputEncumbranceList.data) &&
    props.inputEncumbranceList.data.length) ? (props.inputEncumbranceList.data.reduce((pass, encumbrance) => {
    switch (true) {
        /**
         * Encumbrance filter is not strict, so at list one condition should be met
         */
        // - If restriction filter is on restriction list should not be empty
        case (encumbrance.type == Enums.ProductEncumbranceType.ProductRestrictionList):
            return pass || (Array.isArray(product.restrictionList.data) && (product.restrictionList.data.length > 0));
        // - If card index filter is on card index flag should be true
        case (encumbrance.type == Enums.ProductEncumbranceType.ProductCardIndexList):
            return pass || product.isExistCardIndex;
        default: return pass;
    }
}, false)) : true);
const defaultSum = {
    sum: null,
    currency: null,
    label: '',
};
const defaultProductTableCell = ({
    type: Enums.ProductTableCellType.None,
    key: '',
    sum: null,
    data: null,
    options: null,
    subtitle: null,
    onPress: null,
});
/**
 * Product List View Templates
 */
const TableContentProductList = (props) => {
    const body = getProductListRows(props);
    const tableHeadContent = getProductListColumns(props).map((header, index) => (React.createElement(TableColumn, { testID: `test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47-${header.name}`, key: `ProductList column ${index}`, align: header.type == Enums.ProductTableCellType.Sum ? TableColumnAlignment.RIGHT : TableColumnAlignment.LEFT, width: getProductListColumnWidth(props)[index] },
        React.createElement(Text, { testID: 'test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76', numberOfLines: 2, ellipsizeMode: 'tail' }, header.name))));
    return (React.createElement(Table, { noPaddings: true, style: Styles.productListTable, key: 'CustomerTableProductList', testID: 'test-id-6d780177-50ce-159e-8f9b-68557c1943b2' },
        React.createElement(TableHead, { style: Styles.productListTableHead, testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7' }, tableHeadContent),
        React.createElement(TableBody, { testID: 'test-id-c3142ae1-666e-b550-de2f-0662330b1d1f' }, body)));
};
const getDetailsButton = (method) => (React.createElement(Button, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599', onExecute: () => method() },
    React.createElement(Icon, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea600', disabled: true, type: IconType.MrmLink })));
const getSumTextField = (money, label = "", currency, block = false) => {
    return money ? (React.createElement(SumText, { testID: 'test-id-5f8de28a-bafe-ab3c-5ed0-0f6cf06139a4', currency: currency ? currency.code : "", value: money })) : (React.createElement(Label, { testID: 'test-id-def45b68-ca93-4ead-ac94-5261fdd99e36', header: '', text: label, block: block },
        React.createElement(Text, { testID: 'test-id-def45b68-ca93-4ead-ac94-5261fdd99e36' }, PLACEHOLDER)));
};
const renderProductTableCellContent = (cell) => {
    switch (cell.type) {
        case Enums.ProductTableCellType.Empty: return (React.createElement(View, { testID: `test-id-empty-content-${cell.key}` }));
        case Enums.ProductTableCellType.Text: return (cell.data ? (React.createElement(View, { testID: `test-id-product-cell-content-wrapper-${cell.key}`, key: `product-cell-content-wrapper-${cell.key}`, style: Styles.productCellView },
            React.createElement(Text, { testID: `test-id-product-text-${cell.key}`, style: Styles.productCellText }, cell.data))) : null);
        case Enums.ProductTableCellType.Date: return (cell.data ? (React.createElement(View, { testID: `test-id-product-cell-content-wrapper-${cell.key}`, key: `product-cell-content-wrapper-${cell.key}`, style: Styles.productCellView },
            React.createElement(Text, { testID: `test-id-product-date-text-${cell.key}`, style: Styles.productCellText }, cell.data))) : null);
        case Enums.ProductTableCellType.Sum: return (cell.sum ? (React.createElement(View, { testID: `test-id-product-cell-content-wrapper-${cell.key}`, key: `product-cell-content-wrapper-${cell.key}`, style: Styles.productCellView }, getSumTextField(cell.sum.sum, cell.sum.label, cell.sum.currency, false))) : null);
        case Enums.ProductTableCellType.Subtitled: return (cell.data ? (React.createElement(View, { testID: `test-id-${cell.key}-subtitled-view`, key: `${cell.key}-subtitled-view`, style: Styles.productCellViewSubtitled },
            React.createElement(Text, { testID: `test-id-${cell.key}-title-text`, key: `${cell.key}-title-text`, style: Styles.paymentAccountRowText }, cell.data),
            cell.options ? (React.createElement(Text, { testID: `test-id-${cell.key}-options-text`, key: `${cell.key}-options-text`, style: Styles.paymentAccountSubtitle }, cell.options)) : null,
            cell.subtitle ? (React.createElement(Text, { testID: `test-id-${cell.key}-subtitle-text`, key: `${cell.key}-subtitle-text`, style: [Styles.regularFont16, Styles.contractNumberTextColor] }, cell.subtitle)) : null)) : null);
        case Enums.ProductTableCellType.Callback: return (React.createElement(View, { testID: `test-id-${cell.key}-chevron-view`, key: `${cell.key}-chevron-view`, style: Styles.productCellChevron }, getDetailsButton(cell.onPress || (() => { }))));
        default: return null;
    }
};
const rowNeedsFix = (row) => {
    switch (row.type) {
        case Enums.ProductType.ContractConstructorProduct:
        case Enums.ProductType.ContractSdoProduct:
        case Enums.ProductType.SalaryProduct:
        case Enums.ProductType.DboProduct:
        case Enums.ProductType.BankGuaranteeProduct:
        case Enums.ProductType.PackageProduct: return true;
        default: return false;
    }
};
const rowHeight = (row) => {
    switch (row.type) {
        case Enums.ProductType.TariffPlanProduct: return 64;
        default: return 44;
    }
};
const tableViewBugFixtureStyle = (row, index, list) => ((row && rowNeedsFix(row) && index == 0) ? Styles.ufsTableViewPaddingFix : {});
const renderProductTableRow = (row, index, list) => (row == null ? null : (React.createElement(TableRow, { testID: `test-id-product-table-row-${row.key}-${index}`, key: `product-table-row-${row.key}-${index}`, onClick: row.onPress, style: Styles.productListTableRow }, row.cellList.map((cell) => (React.createElement(TableCell, { testID: `test-id-product-cell-${cell.key}`, key: `product-cell-${cell.key}`, style: Styles.productListTableCell }, renderProductTableCellContent(cell)))))));
const renderProductListCurrencyGroupFixture = (key, columns) => (React.createElement(TableRow, { key: `${key}-fixture-row`, testID: `test-id-${key}-fixture-row`, style: Styles.tableViewBugFixtureRow }, columns.map((title, index) => (React.createElement(TableCell, { key: `${key}-fixture-cell-${index}`, testID: `test-id-${key}-fixture-cell-${index}`, style: Styles.tableViewBugFixture },
    React.createElement(View, { key: `${key}-fixture-cell-view-${index}`, testID: `test-id-${key}-fixture-cell-view-${index}` }))))));
const renderProductListCurrencyGroupSpacer = (key, columns) => (React.createElement(TableRow, { testID: `test-id-${key}-spacer-row`, key: `${key}-spacer-row` }, columns.map((title, index) => (React.createElement(TableCell, { key: `${key}-spacer-cell-${index}`, testID: `test-id-${key}-spacer-cell-${index}`, style: [
        Styles.spacer,
        (index == 0) ? Styles.spacerLeft : {},
        (index == columns.length - 1) ? Styles.spacerRight : {}
    ] },
    React.createElement(View, { key: `${key}-spacer-cell-view-${index}`, testID: `test-id-${key}-spacer-cell-view-${index}` }))))));
const renderProductListCurrencyGroupHeader = (key, columns, sum, currency, index, groupList) => ([index ? renderProductListCurrencyGroupSpacer(key, columns) : null,
    React.createElement(TableRow, { testID: `test-id-${key}-currency-group-header-row`, key: `${key}-currency-group-header-row`, style: [Styles.productListTableRow] },
        React.createElement(TableCell, { testID: `test-id-${key}-currency-code-cell`, style: [Styles.productListTableCell,], key: `${key}-currency-code-cell` },
            React.createElement(Text, { testID: `test-id-${key}-currency-code`, key: `${key}-currency-code`, style: Styles.sectionHeader }, sum == null ? currency && currency.code || PLACEHOLDER :
                `Всего ${currency && currency.code || PLACEHOLDER}`)),
        React.createElement(TableCell, { testID: `test-id-${key}-currency-value-cell`, style: Styles.productListTableCell, key: `${key}-currency-value-cell` },
            React.createElement(Text, { testID: `test-id-${key}-currency-value`, key: `${key}-currency-value`, style: Styles.sectionHeader }, sum == null ? '' : `${sum.sumString(3, ' ', 2)} ${currency && currency.code || PLACEHOLDER}`)),
        columns.slice(2).map((title, index) => (React.createElement(TableCell, { key: `${key}-currency-group-empty-cell-${index}`, testID: `test-id-${key}-currency-group-empty-cell-${index}` }))))
]);
const TOTAL_WIDTH = 640;
const getTableRelativeWidth = (widthList) => {
    const percentList = widthList.map((width) => (Math.round(((parseInt(width) || 0) / TOTAL_WIDTH) * 100)));
    const diff = 100 - percentList.reduce((sum, width) => (sum + width), 0);
    percentList[0] += diff;
    return percentList.map((width) => (`${width}%`));
};
/**
 * Product List View data generation
 */
/**
 * Acquiring List data
 */
const columnAcquiringProductList = getTableRelativeWidth(['290', '202', '104', '44']);
const headerAcquiringProductList = ([
    { name: "Номер договора" },
    { name: "Количество\nтерминалов" },
    { name: "Дата заключения договора" },
    { name: "" },
]);
const keyAcquiringProductList = (product, index) => (`acquiring-product-${product.id || index}`);
const renderAcquiringProductList = (props) => (Array.isArray(props.currentAcquiringProductList && props.currentAcquiringProductList.data) ? (props.currentAcquiringProductList.data.map((product, index) => ((product.acquiringProduct == null) ? null : ({
    type: product.productType,
    key: keyAcquiringProductList(product.acquiringProduct, index),
    onPress: () => props.performAcquiringProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyAcquiringProductList(product.acquiringProduct, index)}-contract-number`, data: `${product.acquiringProduct.contractNumber || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyAcquiringProductList(product.acquiringProduct, index)}-terminals-count`, data: `${product.acquiringProduct.terminalsCount || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyAcquiringProductList(product.acquiringProduct, index)}-open-date`, data: formatDate(product.acquiringProduct.openDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyAcquiringProductList(product.acquiringProduct, index)}-details`, onPress: () => props.performAcquiringProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Cash Management List data
 */
const columnCashManagementProductList = getTableRelativeWidth(['240', '256', '100', '44']);
const headerCashManagementProductList = ([
    { name: "Номер договора/соглашения" },
    { name: 'Тариф' },
    { name: 'Дата окончания договора' },
    { name: '' },
]);
const keyCashManagementProductList = (product, index) => (`cash-management-product-${product.id || index}`);
const renderCashManagementProductList = (props) => (Array.isArray(props.currentCashManagementProductList && props.currentAcquiringProductList.data) ? (props.currentCashManagementProductList.data.map((product, index) => ((product.cashManagementProduct == null) ? null : ({
    type: product.productType,
    key: keyCashManagementProductList(product.cashManagementProduct, index),
    onPress: () => props.performCashManagementProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCashManagementProductList(product.cashManagementProduct, index)}-contract-number`, data: `${product.cashManagementProduct.contractNumber || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCashManagementProductList(product.cashManagementProduct, index)}-tariff-name`, data: `${product.cashManagementProduct.tariffName || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyCashManagementProductList(product.cashManagementProduct, index)}-end-date`, data: formatDate(product.cashManagementProduct.contractEndDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyCashManagementProductList(product.cashManagementProduct, index)}-details`, onPress: () => props.performCashManagementProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Bank Guarantee List data
 */
const columnBankGuaranteeProductList = getTableRelativeWidth(['238', '190', '20', '100', '44']);
const headerBankGuaranteeProductList = ([
    { name: "Тип гарантии" },
    { name: "Сумма гарантии", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания гарантии" },
    { name: "" },
]);
const keyBankGuaranteeProductList = (product, index) => (`bank-guarantee-product-${product.id || index}`);
const renderBankGuaranteeProductList = (props) => (Array.isArray(props.currentBankGuaranteeProductList && props.currentAcquiringProductList.data) ? (props.currentBankGuaranteeProductList.data.map((product, index) => ((product.bankGuaranteeProduct == null) ? null : ({
    type: product.productType,
    key: keyBankGuaranteeProductList(product.bankGuaranteeProduct, index),
    onPress: () => props.performBankGuaranteeProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyBankGuaranteeProductList(product.bankGuaranteeProduct, index)}-type`, data: `${product.bankGuaranteeProduct.type || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyBankGuaranteeProductList(product.bankGuaranteeProduct, index)}-sum`, data: product.bankGuaranteeProduct ?
                Utils.getBalanceString(product.bankGuaranteeProduct.sum, product.bankGuaranteeProduct.currencyClassifier)
                : PLACEHOLDER }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keyBankGuaranteeProductList(product.bankGuaranteeProduct, index)}-empty` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyBankGuaranteeProductList(product.bankGuaranteeProduct, index)}-end-date`, data: formatDate(product.bankGuaranteeProduct.endDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyBankGuaranteeProductList(product.bankGuaranteeProduct, index)}-details`, onPress: () => props.performBankGuaranteeProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Contract Constructor List data
 */
const columnContractConstructorProductList = getTableRelativeWidth(['320', '276', '44']);
const headerContractConstructorProductList = ([
    { name: 'Номер договора' },
    { name: 'Дата заключения договора' },
    { name: '' }
]);
const keyContractConstructorProductList = (product, index) => (`contract-constructor-product-${product.id || index}`);
const renderContractConstructorProductList = (props) => (Array.isArray(props.currentContractConstructorProductList && props.currentContractConstructorProductList.data) ? (props.currentContractConstructorProductList.data.map((product, index) => ((product.udboProduct == null) ? null : ({
    type: product.productType,
    key: keyContractConstructorProductList(product.udboProduct, index),
    onPress: () => props.performContractConstructorProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyContractConstructorProductList(product.udboProduct, index)}-contract-number`, data: `${product.udboProduct.contractNum || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyContractConstructorProductList(product.udboProduct, index)}-start-date`, data: formatDate(product.udboProduct.startDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyContractConstructorProductList(product.udboProduct, index)}-details`, onPress: () => props.performContractConstructorProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Contract Nso List data
 */
const columnContractNsoProductList = getTableRelativeWidth(['263', '183', '40', '110', '44']);
const headerContractNsoProductList = ([
    { name: "Название продукта" },
    { name: "Неснижаемый остаток", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата закрытия сделки" },
    { name: "" },
]);
const keyContractNsoProductList = (product, index) => (`contract-nso-product-${product.id || index}`);
const renderContractNsoProductList = (props) => (Array.isArray(props.currentContractNsoProductList && props.currentContractNsoProductList.data) ? (props.currentContractNsoProductList.data
    .filter((product, index) => (filterByCurrencyInput(props, product.contractNSO &&
    product.contractNSO.currencyClassifier
    ? product.contractNSO.currencyClassifier
    : defaultValues.Classifier)))
    .map((product, index) => ((product.contractNSO == null) ? null : ({
    type: product.productType,
    key: keyContractNsoProductList(product.contractNSO, index),
    onPress: () => props.performContractNsoProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyContractNsoProductList(product.contractNSO, index)}-deposit-type`, data: `${product.contractNSO.depositTypeClassifier &&
                product.contractNSO.depositTypeClassifier.value ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyContractNsoProductList(product.contractNSO, index)}-deposit-amount`, data: product.contractNSO && Utils.getBalanceString(product.contractNSO.depositAmount, product.contractNSO.currencyClassifier) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keyContractNsoProductList(product.contractNSO, index)}-empty` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyContractNsoProductList(product.contractNSO, index)}-period-end-date`, data: formatDate(product.contractNSO.dealPeriodEndDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyContractNsoProductList(product.contractNSO, index)}-details`, onPress: () => props.performContractNsoProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Contract Sdo List data
 */
const columnContractSdoProductList = getTableRelativeWidth(['270', '210', '116', '44']);
const headerContractSdoProductList = ([
    { name: "Название продукта" },
    { name: "Валюта" },
    { name: "Статус договора СДО" },
    { name: "" },
]);
const keyContractSdoProductList = (product, index) => (`contract-sdo-product-${product.id || index}`);
const renderContractSdoProductList = (props) => (Array.isArray(props.currentContractSdoProductList && props.currentContractSdoProductList.data) ? (props.currentContractSdoProductList.data
    .filter((product, index) => (filterByCurrencyInput(props, product.contractSDO &&
    product.contractSDO.currencyClassifier
    ? product.contractSDO.currencyClassifier
    : defaultValues.Classifier)))
    .map((product, index) => ((product.contractSDO == null) ? null : ({
    type: product.productType,
    key: keyContractSdoProductList(product.contractSDO, index),
    onPress: () => props.performContractSdoProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyContractSdoProductList(product.contractSDO, index)}-deposit-type`, data: `${product.contractSDO.depositTypeClassifier &&
                product.contractSDO.depositTypeClassifier.value ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyContractSdoProductList(product.contractSDO, index)}-currency`, data: `${product.contractSDO.currencyClassifier &&
                product.contractSDO.currencyClassifier.code ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyContractSdoProductList(product.contractSDO, index)}-status`, data: `${product.contractSDO.dealStatusDesc || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyContractSdoProductList(product.contractSDO, index)}-details`, onPress: () => props.performContractSdoProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Corporate Card List data
 */
const columnCorporateCardProductList = getTableRelativeWidth(['240', '276', '80', '44']);
const headerCorporateCardProductList = ([
    { name: "Номер карты" },
    { name: "Вид карты" },
    { name: "Срок действия" },
    { name: "" },
]);
const keyCorporateCardProductList = (product, index) => (`corporate-card-product-${product.id || index}`);
const renderCorporateCardProductList = (props) => (Array.isArray(props.currentCorporateCardProductList && props.currentCorporateCardProductList.data) ? (props.currentCorporateCardProductList.data.map((product, index) => ((product.corporateCardProduct == null) ? null : ({
    type: product.productType,
    key: keyCorporateCardProductList(product.corporateCardProduct, index),
    onPress: () => props.performCorporateCardProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCorporateCardProductList(product.corporateCardProduct, index)}-card-number`, data: product.corporateCardProduct.cardNumber ? `*${product.corporateCardProduct.cardNumber.substr(-4)}` : PLACEHOLDER }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCorporateCardProductList(product.corporateCardProduct, index)}-type`, data: `${product.corporateCardProduct.typeClassifier &&
                product.corporateCardProduct.typeClassifier.value ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyCorporateCardProductList(product.corporateCardProduct, index)}-end-date`, data: formatDate(product.corporateCardProduct.endDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyCorporateCardProductList(product.corporateCardProduct, index)}-details`, onPress: () => props.performCorporateCardProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Customs Payment List data
 */
const columnCustomsPaymentProductList = getTableRelativeWidth(['297', '233', '110']);
const headerCustomsPaymentProductList = ([
    { name: "Счёт подключения услуги" },
    { name: "Номер доп. соглашения" },
    { name: "Дата доп. соглашения" },
]);
const keyCustomsPaymentProductList = (product, index) => (`custom-payment-product-${product.id || index}`);
const renderCustomsPaymentProductList = (props) => (Array.isArray(props.currentCustomsPaymentProductList && props.currentCustomsPaymentProductList.data) ? (props.currentCustomsPaymentProductList.data.map((product, index) => ((product.customsPaymentProduct == null) ? null : ({
    type: product.productType,
    key: keyCustomsPaymentProductList(product.customsPaymentProduct, index),
    onPress: () => { },
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCustomsPaymentProductList(product.customsPaymentProduct, index)}-account`, data: `${product.customsPaymentProduct.account || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCustomsPaymentProductList(product.customsPaymentProduct, index)}-additional-contract-number`, data: `${product.customsPaymentProduct.additionalContractNumber || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyCustomsPaymentProductList(product.customsPaymentProduct, index)}-additional-contract-date`, data: formatDate(product.customsPaymentProduct.additionalContractDate) })]
}))).map(renderProductTableRow)) : []);
/**
 * Dbo List data
 */
const columnDboProductList = getTableRelativeWidth(['270', '218', '108', '44']);
const headerDboProductList = ([
    { name: "Система ДБО" },
    { name: "Статус договора ДБО" },
    { name: "Дата заключения договора" },
    { name: "" },
]);
const keyDboProductList = (product, index) => (`dbo-product-${product.id || index}`);
const renderDboProductList = (props) => (Array.isArray(props.currentDboProductList && props.currentDboProductList.data) ? (props.currentDboProductList.data.map((product, index) => ((product.dboProduct == null) ? null : ({
    type: product.productType,
    key: keyDboProductList(product.dboProduct, index),
    onPress: () => props.performDboProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyDboProductList(product.dboProduct, index)}-system`, data: `${product.dboProduct.systemClassifier &&
                product.dboProduct.systemClassifier.value ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyDboProductList(product.dboProduct, index)}-status`, 
            /* TODO: Provide correct product list status */
            data: `${product.dboProduct.status || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyDboProductList(product.dboProduct, index)}-open-date`, data: formatDate(product.dboProduct.openDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyDboProductList(product.dboProduct, index)}-details`, onPress: () => props.performDboProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Encashment List data
 */
const columnEncashmentProductList = getTableRelativeWidth(['350', '146', '100', '44']);
const headerEncashmentProductList = ([
    { name: "Вид услуги" },
    { name: "Статус договора" },
    { name: "Дата окончания договора" },
    { name: "" },
]);
const keyEncashmentProductList = (product, index) => (`encashment-product-${product.id || index}`);
const renderEncashmentProductList = (props) => (Array.isArray(props.currentEncashmentProductList && props.currentEncashmentProductList.data) ? (props.currentEncashmentProductList.data.map((product, index) => ((product.encashmentContractProduct == null) ? null : ({
    type: product.productType,
    key: keyEncashmentProductList(product.encashmentContractProduct, index),
    onPress: () => props.performEncashmentProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyEncashmentProductList(product.encashmentContractProduct, index)}-type`, data: `${product.encashmentContractProduct.agreementType || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyEncashmentProductList(product.encashmentContractProduct, index)}-status`, 
            /* TODO: Provide correct product list status */
            data: `${product.encashmentContractProduct.currentStatus || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyEncashmentProductList(product.encashmentContractProduct, index)}-end-date`, data: formatDate(product.encashmentContractProduct.finishDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyEncashmentProductList(product.encashmentContractProduct, index)}-details`, onPress: () => props.performEncashmentProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Package List data
 */
const columnPackageProductList = getTableRelativeWidth(['320', '276', '44']);
const headerPackageProductList = ([
    { name: "Название пакета услуг" },
    { name: "Дата окончания" },
    { name: "" },
]);
const keyPackageProductList = (product, index) => (`package-product-${product.startDate && product.startDate.getTime() || index}-${product.endDate && product.endDate.getTime() || index}`);
const renderPackageProductList = (props) => (Array.isArray(props.currentPackageProductList && props.currentPackageProductList.data) ? (props.currentPackageProductList.data.map((product, index) => ((product.packageProduct == null) ? null : ({
    type: product.productType,
    key: keyPackageProductList(product.packageProduct, index),
    onPress: () => props.performPackageProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyPackageProductList(product.packageProduct, index)}-name`, data: `${product.packageProduct.name || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyPackageProductList(product.packageProduct, index)}-end-date`, data: formatDate(product.packageProduct.endDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyPackageProductList(product.packageProduct, index)}-details`, onPress: () => props.performPackageProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Salary List data
 */
const columnSalaryProductList = getTableRelativeWidth(['290', '180', '124', '44']);
const headerSalaryProductList = ([
    { name: "Номер договора" },
    { name: "Плановое количество получателей" },
    { name: "Общая численность зарплатных карт" },
    { name: "" },
]);
const keySalaryProductList = (product, index) => (`salary-product-${product.id || index}`);
const renderSalaryProductList = (props) => (Array.isArray(props.currentSalaryProductList && props.currentSalaryProductList.data) ? (props.currentSalaryProductList.data.map((product, index) => ((product.salaryProduct == null) ? null : ({
    type: product.productType,
    key: keySalaryProductList(product.salaryProduct, index),
    onPress: () => props.performSalaryProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keySalaryProductList(product.salaryProduct, index)}-number`, data: `${product.salaryProduct.number || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keySalaryProductList(product.salaryProduct, index)}-employees-amount`, data: `${product.salaryProduct.employeesCount &&
                product.salaryProduct.employeesCount.sumString() || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keySalaryProductList(product.salaryProduct, index)}-cards-amount`, data: `${product.salaryProduct.totalCards &&
                product.salaryProduct.totalCards.sumString() || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keySalaryProductList(product.salaryProduct, index)}-details`, onPress: () => props.performSalaryProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Self Encashment List data
 */
const columnSelfEncashmentProductList = getTableRelativeWidth(['271', '185', '40', '100', '44']);
const headerSelfEncashmentProductList = ([
    { name: "Вид услуги" },
    { name: "Среднемесячные обороты", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания договора" },
    { name: "" },
]);
const keySelfEncashmentProductList = (product, index) => (`self-encashment-product-` + index +
    `${product.agreementNumber}`);
const renderSelfEncashmentProductList = (props) => (Array.isArray(props.currentSelfEncashmentProductList && props.currentSelfEncashmentProductList.data) ? (props.currentSelfEncashmentProductList.data.map((product, index) => ((product.selfEncashmentContractProduct == null) ? null : ({
    type: product.productType,
    key: `${keySelfEncashmentProductList(product.selfEncashmentContractProduct, index + new Date().getTime())}-productType`,
    onPress: () => props.performSelfEncashmentProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keySelfEncashmentProductList(product.selfEncashmentContractProduct, index + new Date().getTime())}-type`, data: `${product.selfEncashmentContractProduct.agreementType || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keySelfEncashmentProductList(product.selfEncashmentContractProduct, index + new Date().getTime())}-mounthTurn`, data: product.selfEncashmentContractProduct && Utils.getBalanceString(product.selfEncashmentContractProduct.mounthTurn, product.selfEncashmentContractProduct.currencyClassifier) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keySelfEncashmentProductList(product.selfEncashmentContractProduct, index + new Date().getTime())}-emptyCell` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keySelfEncashmentProductList(product.selfEncashmentContractProduct, index + new Date().getTime())}-end-date`, data: product.selfEncashmentContractProduct.finishDate ?
                formatDate(product.selfEncashmentContractProduct.finishDate) :
                PLACEHOLDER }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keySelfEncashmentProductList(product.selfEncashmentContractProduct, index + new Date().getTime())}-detailsProduct`, onPress: () => props.performSelfEncashmentProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Tariff Plan List data
 */
const columnTariffPlanProductList = getTableRelativeWidth(['350', '146', '100', '44']);
const headerTariffPlanProductList = ([
    { name: "Название тарифного плана" },
    { name: "Тип тарифного плана" },
    { name: "Дата окончания" },
    { name: "" },
]);
const keyTariffPlanProductList = (product, index) => (`tariff-plan-product-${new Date().getTime()}-` +
    `${product.startDate && product.startDate.getTime() || index}-` +
    `${product.endDate && product.endDate.getTime() || index}-` +
    `${product.name || PLACEHOLDER}`);
const renderTariffPlanProductList = (props) => (Array.isArray(props.currentTariffPlanProductList && props.currentTariffPlanProductList.data) ? (props.currentTariffPlanProductList.data.compact().map((product, index) => ((product.tariffPlanProduct == null) ? null : ({
    type: product.productType,
    key: keyTariffPlanProductList(product.tariffPlanProduct, index),
    onPress: () => props.performTariffPlanProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyTariffPlanProductList(product.tariffPlanProduct, index)}-name`, data: `${product.tariffPlanProduct.name || PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyTariffPlanProductList(product.tariffPlanProduct, index)}-type`, data: `${product.tariffPlanProduct.typeClassifier &&
                product.tariffPlanProduct.typeClassifier.value ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyTariffPlanProductList(product.tariffPlanProduct, index)}-end-date`, data: formatDate(product.tariffPlanProduct.endDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyTariffPlanProductList(product.tariffPlanProduct, index)}-details`, onPress: () => props.performTariffPlanProductShow(product) })]
}))).map(renderProductTableRow)) : []);
/**
 * Credit List data
 */
const columnCreditProductList = getTableRelativeWidth(['255', '187', '40', '90', '44']);
const headerCreditProductList = ([
    { name: "Название продукта\nНомер договора" },
    { name: "Полная сумма задолжности", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания" },
    { name: "" },
]);
const keyCreditProductList = (product, index) => (`credit-product-${product.id || index}`);
const keyGroupCreditProductList = (group, index) => (`credit-group-${group.currencyClassifier && group.currencyClassifier.code}-${index}`);
const getCreditProductRow = (props, product, index) => ((product.creditProduct == null) ? null : ({
    type: product.productType,
    key: keyCreditProductList(product.creditProduct, index),
    onPress: () => props.performCreditProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Subtitled, key: `${keyCreditProductList(product.creditProduct, index)}-type`, data: `${product.creditProduct.nameClassifier &&
                product.creditProduct.nameClassifier.value ||
                PLACEHOLDER}`, subtitle: `${product.creditProduct.contractNumber ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyCreditProductList(product.creditProduct, index)}-debt-sum`, data: product.creditProduct && Utils.getBalanceString(product.creditProduct.debtSum, product.creditProduct.currencyClassifier) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keyCreditProductList(product.creditProduct, index)}-empty` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyCreditProductList(product.creditProduct, index)}-close-date`, data: formatDate(product.creditProduct.closeDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyCreditProductList(product.creditProduct, index)}-details`, onPress: () => props.performCreditProductShow(product) })]
}));
const filterCreditProductList = (props) => (Array.isArray(props.currentCreditProductList && props.currentCreditProductList.data) ? (Object.assign({}, props.currentCreditProductList, { data: props.currentCreditProductList.data.filter(({ creditProduct }) => (
    // 1. Only credit products
    (creditProduct != null) &&
        // 2. Filtered by currency
        filterByCurrencyInput(props, creditProduct.currencyClassifier))) })) : defaultValues.CreditProductList);
const getSortedCreditProductList = (productList) => (Array.isArray(productList.data) ? (Object.assign({}, productList, { data: productList.data.sort(($1, $2) => (($1.creditProduct && (typeof $1.creditProduct.debtSum == 'number')) &&
        ($2.creditProduct && (typeof $2.creditProduct.debtSum == 'number')) ? ($2.creditProduct.debtSum - $1.creditProduct.debtSum) : 0)) })) : productList);
const getCreditCurrencyGroupList = (props) => {
    const productList = getSortedCreditProductList(filterCreditProductList(props));
    return Utils.filterSortedCurrencyList(props.currencyList, Utils.extractCreditCurrencyList(productList)).data.map((currencyClassifier) => {
        const productCreditList = Utils.filterCreditProductListByCurrency(productList, currencyClassifier);
        return (Object.assign({}, defaultValues.GroupCurrencyProductData, { productCreditList,
            currencyClassifier, summa: Utils.sumCreditProductListByCurrency(productCreditList) }));
    });
};
const renderCreditProductList = (props) => (_.flatten(getCreditCurrencyGroupList(props).map((currencyCredit, index, groupList) => (renderProductListCurrencyGroupHeader(keyGroupDepositProductList(currencyCredit, index), columnCreditProductList, currencyCredit.summa, currencyCredit.currencyClassifier, index, groupList).concat(currencyCredit.productCreditList.data.map((product, index) => (getCreditProductRow(props, product, index))).map(renderProductTableRow))))));
/**
 * Deposit List data
 */
const columnDepositProductList = getTableRelativeWidth(['273', '193', '40', '90', '44']);
const headerDepositProductList = ([
    { name: "Название депозита" },
    { name: "Текущий остаток", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата окончания" },
    { name: "" },
]);
const keyDepositProductList = (product, index) => (`deposit-product-${product.acctId || index}`);
const keyGroupDepositProductList = (group, index) => (`deposit-group-${group.currencyClassifier && group.currencyClassifier.code}-${index}`);
const getDepositProductRow = (props, product, index) => ((product.depositProduct == null) ? null : ({
    type: product.productType,
    key: keyDepositProductList(product.depositProduct, index),
    onPress: () => props.performDepositProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyDepositProductList(product.depositProduct, index)}-type`, data: `${product.depositProduct.depositTypeClassifier &&
                product.depositProduct.depositTypeClassifier.value ||
                PLACEHOLDER}` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyDepositProductList(product.depositProduct, index)}-deposit-amount-rest`, data: product.depositProduct && Utils.getBalanceString(product.depositProduct.depositAmountRest, product.depositProduct.currencyClassifier) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keyDepositProductList(product.depositProduct, index)}-empty` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyDepositProductList(product.depositProduct, index)}-deal-period-end`, data: formatDate(product.depositProduct.dealPeriodEndDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyDepositProductList(product.depositProduct, index)}-details`, onPress: () => props.performDepositProductShow(product) })]
}));
const filterDepositProductList = (props) => (Array.isArray(props.currentDepositProductList && props.currentDepositProductList.data) ? (Object.assign({}, props.currentDepositProductList, { data: props.currentDepositProductList.data.filter(({ depositProduct }) => (
    // 1. Only deposit products
    (depositProduct != null) &&
        // 2. Filtered by currency
        filterByCurrencyInput(props, depositProduct.currencyClassifier))) })) : defaultValues.DepositProductList);
const getSortedDepositProductList = (productList) => (Array.isArray(productList.data) ? (Object.assign({}, productList, { data: productList.data.sort(($1, $2) => (($1.depositProduct && (typeof $1.depositProduct.depositAmountRest == 'number')) &&
        ($2.depositProduct && (typeof $2.depositProduct.depositAmountRest == 'number')) ? ($2.depositProduct.depositAmountRest - $1.depositProduct.depositAmountRest) : 0)) })) : productList);
const getDepositCurrencyGroupList = (props) => {
    const productList = getSortedDepositProductList(filterDepositProductList(props));
    return Utils.filterSortedCurrencyList(props.currencyList, Utils.extractDepositCurrencyList(productList)).data.map((currencyClassifier) => {
        const productDepositList = Utils.filterDepositProductListByCurrency(productList, currencyClassifier);
        return (Object.assign({}, defaultValues.GroupCurrencyProductData, { productDepositList,
            currencyClassifier, summa: Utils.sumDepositProductListByCurrency(productDepositList) }));
    });
};
const renderDepositProductList = (props) => (_.flatten(getDepositCurrencyGroupList(props).map((currencyDeposit, index, groupList) => (renderProductListCurrencyGroupHeader(keyGroupDepositProductList(currencyDeposit, index), columnDepositProductList, currencyDeposit.summa, currencyDeposit.currencyClassifier, index, null).concat(currencyDeposit.productDepositList.data.map((product, index) => (getDepositProductRow(props, product, index))).map(renderProductTableRow))))));
/**
 * Payment Account List data
 */
const columnClosePaymentAccountProductList = (['53%', '25%', '15%', '7%']);
const headerClosePaymentAccountProductList = ([
    { name: "Номер счёта" },
    { name: "Дата закрытия" },
    { name: "" },
    { name: "" },
]);
const filterClosePaymentAccountProductList = (props) => (Array.isArray(props.currentPaymentAccountProductList && props.currentPaymentAccountProductList.data) ? (Object.assign({}, props.currentPaymentAccountProductList, { data: props.currentPaymentAccountProductList.data.filter(({ paymentAccountProduct }) => (
    // 1. Only payment account products
    (paymentAccountProduct != null) &&
        // 2. Filtered by currency
        (filterByCurrencyInput(props, paymentAccountProduct.currencyClassifier)))) })) : defaultValues.SettlementAgreementProductList);
const getClosePaymentAccountProductRow = (props, product, index) => ((product.paymentAccountProduct == null) ? null : ({
    type: product.productType,
    key: keyPaymentAccountProductList(product.paymentAccountProduct, index),
    onPress: () => props.performPaymentAccountProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Subtitled, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-title`, data: `${product.paymentAccountProduct.accountNumber &&
                product.paymentAccountProduct.accountNumber.formatAccountNumber() ||
                PLACEHOLDER}`, options: `${([
                product.paymentAccountProduct.isExistCardIndex ? 'Картотека' : null,
                product.paymentAccountProduct.restrictionList.data.length ? 'Ограничения' : null
            ]).compact().join('     ')}` || null }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-closeDate`, data: formatDate(product.paymentAccountProduct.closeDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-empty` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-details`, onPress: () => props.performPaymentAccountProductShow(product) })]
}));
const getClosePaymentAccountCurrencyGroupList = (props) => {
    const productList = filterActivePaymentAccountProductList(props);
    return Utils.filterSortedCurrencyList(props.currencyList, Utils.extractPaymentAccountCurrencyList(productList)).data.map((currencyClassifier) => {
        const productPaymentAccountList = Utils.filterPaymentAccountProductListByCurrency(productList, currencyClassifier);
        return (Object.assign({}, defaultValues.GroupCurrencyProductData, { productPaymentAccountList,
            currencyClassifier, summa: Utils.sumPaymentAccountProductListByCurrency(productPaymentAccountList) }));
    });
};
const columnActivePaymentAccountProductList = (['37%', '34%', '7%', '15%', '7%']);
const headerActivePaymentAccountProductList = ([
    { name: "Номер счёта" },
    { name: "Текущий остаток", type: Enums.ProductTableCellType.Sum },
    { name: "" },
    { name: "Дата последней операции" },
    { name: "" },
]);
const filterActivePaymentAccountProductList = (props) => (Array.isArray(props.currentPaymentAccountProductList && props.currentPaymentAccountProductList.data) ? (Object.assign({}, props.currentPaymentAccountProductList, { data: props.currentPaymentAccountProductList.data.filter(({ paymentAccountProduct }) => (
    // 1. Only payment account products
    (paymentAccountProduct != null) &&
        // 2. Filtered by currency
        (filterByCurrencyInput(props, paymentAccountProduct.currencyClassifier)) &&
        // 3. Filtered by Encumbrance type
        (filterByEncumbranceInput(props, paymentAccountProduct)))) })) : defaultValues.SettlementAgreementProductList);
const keyGroupPaymentAccountProductList = (group, index) => (`payment-account-group-${group.currencyClassifier && group.currencyClassifier.code}-${index}`);
const keyPaymentAccountProductList = (product, index) => (`payment-account-product-${product.accountId || index}`);
const getActivePaymentAccountProductRow = (props, product, index) => ((product.paymentAccountProduct == null) ? null : ({
    type: product.productType,
    key: keyPaymentAccountProductList(product.paymentAccountProduct, index),
    onPress: () => props.performPaymentAccountProductShow(product),
    cellList: [Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Subtitled, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-title`, data: `${product.paymentAccountProduct.accountNumber &&
                product.paymentAccountProduct.accountNumber.formatAccountNumber() ||
                PLACEHOLDER}`, options: `${([
                product.paymentAccountProduct.isExistCardIndex ? 'Картотека' : null,
                product.paymentAccountProduct.restrictionList.data.length ? 'Ограничения' : null
            ]).compact().join('     ')}` || null }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Text, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-type`, data: product.paymentAccountProduct && Utils.getBalanceString(product.paymentAccountProduct.curBalance, product.paymentAccountProduct.currencyClassifier) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Empty, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-empty` }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Date, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-last-operation`, data: formatDate(product.paymentAccountProduct.lastActionDate) }), Object.assign({}, defaultProductTableCell, { type: Enums.ProductTableCellType.Callback, key: `${keyPaymentAccountProductList(product.paymentAccountProduct, index)}-details`, onPress: () => props.performPaymentAccountProductShow(product) })]
}));
const getActivePaymentAccountCurrencyGroupList = (props) => {
    const productList = filterActivePaymentAccountProductList(props);
    return Utils.filterSortedCurrencyList(props.currencyList, Utils.extractPaymentAccountCurrencyList(productList)).data.map((currencyClassifier) => {
        const productPaymentAccountList = Utils.filterPaymentAccountProductListByCurrency(productList, currencyClassifier);
        return (Object.assign({}, defaultValues.GroupCurrencyProductData, { productPaymentAccountList,
            currencyClassifier, summa: Utils.sumPaymentAccountProductListByCurrency(productPaymentAccountList) }));
    });
};
const renderPaymentAccountProductList = (props) => (_.flatten((Utils.isActiveProductList(props.productListAgreementStatus) ?
    getActivePaymentAccountCurrencyGroupList(props) :
    getClosePaymentAccountCurrencyGroupList(props)).map((currencyPaymentAccount, index, groupList) => {
    const currencyPaymentAccountSorted = Utils.sortProductPaymentAccountList(currencyPaymentAccount);
    if (Utils.isActiveProductList(props.productListAgreementStatus)) {
        return renderProductListCurrencyGroupHeader(keyGroupPaymentAccountProductList(currencyPaymentAccountSorted, index), columnActivePaymentAccountProductList, currencyPaymentAccountSorted.summa, currencyPaymentAccountSorted.currencyClassifier, index, groupList).concat(currencyPaymentAccountSorted.productPaymentAccountList.data.map((product, index) => (getActivePaymentAccountProductRow(props, product, index))).map(renderProductTableRow));
    }
    else {
        return renderProductListCurrencyGroupHeader(keyGroupPaymentAccountProductList(currencyPaymentAccountSorted, index), columnClosePaymentAccountProductList, null, currencyPaymentAccountSorted.currencyClassifier, index, groupList).concat(currencyPaymentAccountSorted.productPaymentAccountList.data.map((product, index) => (getClosePaymentAccountProductRow(props, product, index))).map(renderProductTableRow));
    }
})));
/**
 * Currency Control List data
 */
const columnCurrencyControlProductList = ([]);
const headerCurrencyControlProductList = ([]);
const keyCurrencyControlProductList = (index) => ('');
const renderCurrencyControlProductList = (props) => ([]);
/**
 * Render methods mapping
 */
const headerDefault = ([]);
const getProductListColumns = (props) => {
    const type = props.currentProductListType;
    switch (type) {
        case Enums.ProductType.AcquiringProduct: return headerAcquiringProductList;
        case Enums.ProductType.BankGuaranteeProduct: return headerBankGuaranteeProductList;
        case Enums.ProductType.CashManagementProduct: return headerCashManagementProductList;
        case Enums.ProductType.ContractConstructorProduct: return headerContractConstructorProductList;
        case Enums.ProductType.ContractNsoProduct: return headerContractNsoProductList;
        case Enums.ProductType.ContractSdoProduct: return headerContractSdoProductList;
        case Enums.ProductType.CorporateCardProduct: return headerCorporateCardProductList;
        case Enums.ProductType.CreditProduct: return headerCreditProductList;
        case Enums.ProductType.CurrencyControlProduct: return headerCurrencyControlProductList;
        case Enums.ProductType.CustomsPaymentProduct: return headerCustomsPaymentProductList;
        case Enums.ProductType.DboProduct: return headerDboProductList;
        case Enums.ProductType.DepositProduct: return headerDepositProductList;
        case Enums.ProductType.EncashmentProduct: return headerEncashmentProductList;
        case Enums.ProductType.PackageProduct: return headerPackageProductList;
        case Enums.ProductType.PaymentAccountProduct: return Utils.isActiveProductList(props.productListAgreementStatus)
            ? headerActivePaymentAccountProductList
            : headerClosePaymentAccountProductList;
        case Enums.ProductType.SalaryProduct: return headerSalaryProductList;
        case Enums.ProductType.SelfEncashmentProduct: return headerSelfEncashmentProductList;
        case Enums.ProductType.TariffPlanProduct: return headerTariffPlanProductList;
        case Enums.ProductType.None:
        default: return headerDefault;
    }
};
const columnDefault = ([]);
const getProductListColumnWidth = (props) => {
    switch (props.currentProductListType) {
        case Enums.ProductType.PaymentAccountProduct:
            return Utils.isActiveProductList(props.productListAgreementStatus)
                ? columnActivePaymentAccountProductList
                : columnClosePaymentAccountProductList;
        case Enums.ProductType.CreditProduct: return columnCreditProductList;
        case Enums.ProductType.CashManagementProduct: return columnCashManagementProductList;
        case Enums.ProductType.AcquiringProduct: return columnAcquiringProductList;
        case Enums.ProductType.BankGuaranteeProduct: return columnBankGuaranteeProductList;
        case Enums.ProductType.ContractConstructorProduct: return columnContractConstructorProductList;
        case Enums.ProductType.ContractNsoProduct: return columnContractNsoProductList;
        case Enums.ProductType.ContractSdoProduct: return columnContractSdoProductList;
        case Enums.ProductType.CorporateCardProduct: return columnCorporateCardProductList;
        case Enums.ProductType.CurrencyControlProduct: return columnCurrencyControlProductList;
        case Enums.ProductType.CustomsPaymentProduct: return columnCustomsPaymentProductList;
        case Enums.ProductType.DboProduct: return columnDboProductList;
        case Enums.ProductType.DepositProduct: return columnDepositProductList;
        case Enums.ProductType.EncashmentProduct: return columnEncashmentProductList;
        case Enums.ProductType.PackageProduct: return columnPackageProductList;
        case Enums.ProductType.SalaryProduct: return columnSalaryProductList;
        case Enums.ProductType.SelfEncashmentProduct: return columnSelfEncashmentProductList;
        case Enums.ProductType.TariffPlanProduct: return columnTariffPlanProductList;
        case Enums.ProductType.None:
        default: return columnDefault;
    }
};
const renderDefaultProductList = (props) => ([]);
const getProductListRows = (props) => {
    const type = props.currentProductListType;
    const productKey = `current${Enums.ProductType[type]}List`;
    switch (type) {
        case Enums.ProductType.AcquiringProduct: return renderAcquiringProductList(props);
        case Enums.ProductType.BankGuaranteeProduct: return renderBankGuaranteeProductList(props);
        case Enums.ProductType.CashManagementProduct: return renderCashManagementProductList(props);
        case Enums.ProductType.ContractConstructorProduct: return renderContractConstructorProductList(props);
        case Enums.ProductType.ContractNsoProduct: return renderContractNsoProductList(props);
        case Enums.ProductType.ContractSdoProduct: return renderContractSdoProductList(props);
        case Enums.ProductType.CorporateCardProduct: return renderCorporateCardProductList(props);
        case Enums.ProductType.CustomsPaymentProduct: return renderCustomsPaymentProductList(props);
        case Enums.ProductType.DboProduct: return renderDboProductList(props);
        case Enums.ProductType.EncashmentProduct: return renderEncashmentProductList(props);
        case Enums.ProductType.PackageProduct: return renderPackageProductList(props);
        case Enums.ProductType.SalaryProduct: return renderSalaryProductList(props);
        case Enums.ProductType.SelfEncashmentProduct: return renderSelfEncashmentProductList(props);
        case Enums.ProductType.TariffPlanProduct: return renderTariffPlanProductList(props);
        case Enums.ProductType.CreditProduct: return renderCreditProductList(props);
        case Enums.ProductType.DepositProduct: return renderDepositProductList(props);
        case Enums.ProductType.PaymentAccountProduct: return renderPaymentAccountProductList(props);
        case Enums.ProductType.CurrencyControlProduct:
        case Enums.ProductType.None:
        default: return renderDefaultProductList(props);
    }
};
const getFetchingProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? props.creditActiveProductListFetching
                    : props.creditCloseProductListFetching;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? props.depositActiveProductListFetching
                    : props.depositCloseProductListFetching;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductListFetching
                : props.corporateCardCloseProductListFetching;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? props.encashmentContractActiveProductListFetching
                    : props.encashmentContractCloseProductListFetching;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductListFetching;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductListFetching
                : props.acquiringCloseProductListFetching;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListFetching
                : props.dboCloseProductListFetching;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListFetching
                : props.udboCloseProductListFetching;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListFetching
                : props.salaryCloseProductListFetching;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? props.settlementAgreementActiveProductListFetching
                    : props.settlementAgreementCloseProductListFetching;
            }
        default: return false;
    }
};
const getErrorProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? props.creditActiveProductListError
                    : props.creditCloseProductListError;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? props.depositActiveProductListError
                    : props.depositCloseProductListError;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductListError
                : props.corporateCardCloseProductListError;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? props.encashmentContractActiveProductListError
                    : props.encashmentContractCloseProductListError;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductListError;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductListError
                : props.acquiringCloseProductListError;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListError
                : props.dboCloseProductListError;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListError
                : props.udboCloseProductListError;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListError
                : props.salaryCloseProductListError;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? props.settlementAgreementActiveProductListError
                    : props.settlementAgreementCloseProductListError;
            }
        default: return null;
    }
};
const getEksFetchingProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? props.creditActiveProductEksListFetching
                    : props.creditCloseProductEksListFetching;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? props.depositActiveProductEksListFetching
                    : props.depositCloseProductEksListFetching;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductEksListFetching
                : props.corporateCardCloseProductEksListFetching;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? props.encashmentContractActiveProductEksListFetching
                    : props.encashmentContractCloseProductEksListFetching;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductEksListFetching;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductEksListFetching
                : props.acquiringCloseProductEksListFetching;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductEksListFetching
                : props.dboCloseProductEksListFetching;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductEksListFetching
                : props.udboCloseProductEksListFetching;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductEksListFetching
                : props.salaryCloseProductEksListFetching;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? props.settlementAgreementActiveProductEksListFetching
                    : props.settlementAgreementCloseProductEksListFetching;
            }
        default: return false;
    }
};
const getEksErrorProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case Enums.ProductType.CreditProduct === productType: {
            return props.currentCreditProductList.eksErrorList;
        }
        case Enums.ProductType.BankGuaranteeProduct === productType: {
            return props.currentBankGuaranteeProductList.eksErrorList;
        }
        case Enums.ProductType.DepositProduct === productType: {
            return props.currentDepositProductList.eksErrorList;
        }
        case Enums.ProductType.ContractSdoProduct === productType: {
            return props.currentContractSdoProductList.eksErrorList;
        }
        case Enums.ProductType.ContractNsoProduct === productType: {
            return props.currentContractNsoProductList.eksErrorList;
        }
        case Enums.ProductType.CashManagementProduct === productType: {
            return props.currentCashManagementProductList.eksErrorList;
        }
        case Enums.ProductType.PaymentAccountProduct === productType: {
            return props.currentPaymentAccountProductList.eksErrorList;
        }
        case Enums.ProductType.TariffPlanProduct === productType: {
            return props.currentTariffPlanProductList.eksErrorList;
        }
        case Enums.ProductType.CustomsPaymentProduct === productType: {
            return props.currentCustomsPaymentProductList.eksErrorList;
        }
        case Enums.ProductType.PackageProduct === productType: {
            return props.currentPackageProductList.eksErrorList;
        }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return props.currentCorporateCardProductList.eksErrorList;
        }
        case Enums.ProductType.SelfEncashmentProduct === productType: {
            return props.currentSelfEncashmentProductList.eksErrorList;
        }
        case Enums.ProductType.EncashmentProduct === productType: {
            return props.currentEncashmentProductList.eksErrorList;
        }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.currentCurrencyControlProductList.eksErrorList;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return props.currentAcquiringProductList.eksErrorList;
        }
        case Enums.ProductType.DboProduct === productType: {
            return props.currentDboProductList.eksErrorList;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return props.currentContractConstructorProductList.eksErrorList;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return props.currentSalaryProductList.eksErrorList;
        }
        default: return [];
    }
};
const getProductListStatus = (props) => {
    const type = props.currentProductListType;
    let isActiveProductList = Utils.isActiveProductList(props.productListAgreementStatus);
    return {
        fetching: getFetchingProductList(props, type, isActiveProductList),
        eksErrorList: getEksErrorProductList(props, type, isActiveProductList),
        eksListFetching: getEksFetchingProductList(props, type, isActiveProductList),
        error: getErrorProductList(props, type, isActiveProductList),
    };
};
/**
 * Subviews
 */
const getErrorPanel = (performRefresh, codeError = "Ошибка получения списка продуктов", errorMessage = 'Не удалось загрузить данные о продукте. Попробуйте снова или обратитесь в службу поддержки.', product) => (React.createElement(View, { testID: 'test-id-error-panel-container', style: Styles.productListErrorPanelContainer, key: 'error-panel-container' },
    React.createElement(Panel, { testID: 'test-id-978b1ec0-737d-2f05-48fa-918dfc7585a4', type: PanelType.WARNING_BOX, header: codeError, headerMedia: React.createElement(Button, { testID: 'test-id-a67b9a4b-d551-0e73-a354-39e3b77740e6', onExecute: () => performRefresh() },
            React.createElement(Text, { testID: 'test-id-29020205-e280-db5f-d922-51cef6dc4bb8' }, "Повторить запрос")), hasIcon: true },
        React.createElement(View, { testID: 'test-id-79bd5f70-9489-0d6a-c1ef-7d9f1a86c1d2', key: "errorPanelMessage", style: Styles.errorProductListView }, Array.isArray(errorMessage) && errorMessage.length > 0 ?
            (React.createElement(Text, { key: `Error Product Item Text`, numberOfLines: 40, testID: `test-id-74b37660-9361-4981-a50a-509d6f424ef0`, style: Styles.productTypeFetchError }, "Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки")) :
            (React.createElement(Text, { key: "Error Placement list", numberOfLines: 40, testID: 'test-id-74b37660-9361-4981-a50a-509d6f424ef0', style: Styles.productTypeFetchError }, errorMessage))))));
const getLoader = () => (React.createElement(View, { testID: 'test-id-loader-container', key: 'loader-container', style: Styles.loaderContainerView },
    React.createElement(Loader, { testID: 'test-id-loader' })));
const getProductContentPanel = (props) => {
    return (React.createElement(View, { testID: 'test-id-06b599bd-ebcd-34b7-6e72-8db37da5154e', style: Styles.productContentWithFilterList },
        React.createElement(SplitPanel, { testID: 'test-id-afcc7381-a9c5-50ed-3ab4-8c849eff8805', id: Utils.getNavigationCRMProductListString(Enums.NavigationAppCRMProductList.AppCRM_ProductListWithFilterList) },
            React.createElement(ContentPanel, { testID: 'test-id-4e1c9727-ac82-d757-9c32-18c513d0d82d', style: { backgroundColor: '#fff' } },
                React.createElement(Page, { testID: 'test-id-8581a110-ed6a-45da-506f-55f8812b996b', scrollEnabled: false, content: getContentPanelContent(props) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-8698471c-0ac7-f3ef-e87f-08b5e8649f25' },
                        React.createElement(NavigationBackButton, { testID: "test-id-c5fb1ff3-15e3-e36e-847f-35512bf6916a", title: false, onClick: props.navigateBack }),
                        React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-6733441e-5687-0000-167a-0ca21ea4b300" },
                            React.createElement(NavigationTextButton, { testID: "test-id-c5fb1ff3-0000-e36e-847f-35512bf6916a", title: 'Продукты', onExecute: props.navigateBack }))),
                    React.createElement(CenterPageHeader, { testID: 'test-id-945ddf6c-91a8-3427-873b-2b7e96296cf3' },
                        React.createElement(H2, { testID: 'test-id-5839caf4-5e0e-a69d-5a71-5b0b6c1c4404' }, Utils.getProductListTypeName(props.currentProductListType))))),
            React.createElement(AccessoryPanel, { testID: 'test-id-8ec9a53c-4c2d-9982-c984-6e83fbc45805' },
                React.createElement(Page, { testID: 'test-id-ecc9f8bc-a752-535d-9d61-07c196408c77', content: getAccessoryPanelContent(props, getProductListStatus(props)) }, getAccessoryPanelPageHeader(props)))),
        props.isVisibleModalProduct ?
            React.createElement(ContainerProduct, { testID: 'test-id-1378c9e3-07eb-849b-4593-51dbc97e2d62' }) : null));
};
const filterableProductTypeList = [
    Enums.ProductType.CreditProduct,
    Enums.ProductType.DepositProduct,
    Enums.ProductType.BankGuaranteeProduct,
    Enums.ProductType.PaymentAccountProduct,
    Enums.ProductType.ContractSdoProduct,
    Enums.ProductType.ContractNsoProduct,
];
const getAccessoryPanelPageHeader = (props) => ((filterableProductTypeList.indexOf(props.currentProductListType) != -1) ? (React.createElement(CenterPageHeader, { testID: 'test-id-accessoty-panel-center-page-header' },
    React.createElement(H2, { testID: 'test-id-accessoty-panel-title' }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B"))) : (React.createElement(LeftPageHeader, { testID: 'test-id-empty-left-page-header' })));
const getAccessoryPanelContent = (props, status) => ((filterableProductTypeList.indexOf(props.currentProductListType) != -1) ? (React.createElement(View, { testID: 'test-id-0ecd9afc-2bd4-9cb2-2398-18223bae3852', style: Styles.productListFilterBar },
    Array.isArray(props.currencyList.data) && (props.currencyList.data.length > 0) && getProductCurrencyContent(props),
    ((props.currentProductListType == Enums.ProductType.PaymentAccountProduct) &&
        Array.isArray(props.encumbranceList.data) && props.encumbranceList.data.length > 0 ? (React.createElement(View, { testID: 'test-id-encumbrance-filter-container', style: Styles.encumbranceFilterContainer },
        React.createElement(View, { style: Styles.cardIndexRestrictionFilterWrapper },
            React.createElement(Text, { testID: 'test-id-encumbrance-filter-title', style: Styles.filterTitle }, "\u041A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F"),
            React.createElement(HintIcon, { testID: "baf6df9e-c512-11e7-abc4-cec278b6b50a", text: '\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F - \u0444\u0430\u043A\u0442\u043E\u0440\u044B, \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u044E \u0443\u0441\u043B\u0443\u0433 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0420\u041A\u041E.\\n\u041A\u0430\u0440\u0442\u043E\u0442\u0435\u043A\u0430 - \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043F\u043E \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441\u043E \u0441\u0447\u0435\u0442\u0430, \u043E\u0436\u0438\u0434\u0430\u044E\u0449\u0438\u0445 \u0430\u043A\u0446\u0435\u043F\u0442\u0430 / \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0432 \u0441\u0440\u043E\u043A.' })),
        props.encumbranceList.data.map((item, index) => (React.createElement(Checkbox, { key: `encumbrance-filter-${item.type}-${index}`, testID: `test-id-encumbrance-filter-${item.type}-${index}`, checked: Array.isArray(props.inputEncumbranceList.data) ? (props.inputEncumbranceList.data.find((encumbrance) => (encumbrance.type == item.type)) != undefined) : false, label: item.name, onChange: () => props.performInputEncumbrance(item) }))))) : null))) : (React.createElement(View, { testID: 'test-id-empty-filters' })));
const getProductCurrencyContent = (props) => (React.createElement(View, { testID: 'test-id-79f6272b-83e9-c492-122b-89fe66c63afa' },
    React.createElement(Text, { testID: 'test-id-encumbrance-filter-title', style: Styles.filterTitle }, "\u0412\u0430\u043B\u044E\u0442\u044B"),
    React.createElement(RadioGroup, { testID: 'test-id-23d5e5cd-da16-e690-92ba-ee81054a8659', value: props.inputCurrency && props.inputCurrency.code ? props.inputCurrency.code : "ProductCurrencyList", onChange: (index) => (props.performInputCurrency((index > 0) ? props.currencyList.data[index - 1] : defaultValues.Classifier)) },
        React.createElement(RadioButton, { testID: 'test-id-0d7abe87-c39c-665a-87a2-82d454120c3c', key: "ProductCurrencyList", value: "ProductCurrencyList", label: "Все" }),
        props.currencyList.data.map((currency, index) => (React.createElement(RadioButton, { testID: 'test-id-7b8a69f5-9f41-551a-8be8-0418f8e5e027', key: `Currency Item ${currency.code}-${index}`, value: currency.code, label: currency.code }))))));
const refreshProductList = (props) => {
    props.performCallGetForceRequestProductList(props.currentProductListType);
};
const getContentPanelContent = (props) => {
    const UNDEFINED = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED);
    const statusProductList = getProductListStatus(props);
    const refresh = (statusProductList.fetching ||
        statusProductList.eksListFetching) ||
        (statusProductList.error && statusProductList.error.code) ? null : (React.createElement(RefreshBar, { key: 'refreshBarCustomerProductList', testID: 'test-id-1995612a-eac4-11e7-80c1-9a214cf093ae', title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C', performRefresh: props.performProductListModalAlertShow, date: props.bhCachedDate || new Date() }));
    const content = (statusProductList.eksListFetching || statusProductList.fetching) ? (getLoader()) : props.pollingError ? (getErrorPanel(() => props.performCallEksRequestProductList(props.currentProductListType, props.productListAgreementStatus), 'Ошибка загрузки продуктов', props.pollingError.message, statusProductList)) : (statusProductList.error &&
        (statusProductList.error.comment ||
            statusProductList.error.message ||
            statusProductList.error.code)) ? (getErrorPanel(() => props.performCallGetUncachedRequestProductList(props.currentProductListType), undefined, statusProductList.error.comment || statusProductList.error.message || undefined, statusProductList)) : (Array.isArray(statusProductList.eksErrorList) && statusProductList.eksErrorList.length) ? (getErrorPanel(() => props.performCallEksRequestProductList(props.currentProductListType, props.productListAgreementStatus), 'Ошибка загрузки продуктов', statusProductList.eksErrorList, statusProductList)) : ([TableContentProductList(props),
        refresh]);
    return (React.createElement(View, { style: Styles.productListPage },
        React.createElement(View, { style: Styles.productListTitleView, testID: "test-id-0ec01456-f16e-11e7-8c3f-9a214cf093ae" },
            React.createElement(Label, { testID: 'test-id-productListSubtitle', text: 'Клиент', block: false, header: '' },
                React.createElement(Text, { testID: 'test-id-productListTitle', key: 'productListNameCustomerTitle' }, `«${props.currentCustomerManaged.name ||
                    props.currentCustomerManaged.shortName ||
                    PLACEHOLDER}»`))),
        React.createElement(Text, { style: Styles.productListTextAgreementStatus, testID: "test-id-productListTextTypeProduct", key: 'productListTextTypeProduct' }, `${Utils.getAgreementStatusNameProductList(props.productListAgreementStatus)}`),
        content));
};
const getSplitPanelProductList = (props) => {
    return (React.createElement(SplitPanel, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000000', id: Utils.getNavigationCRMProductListString(Enums.NavigationAppCRMProductList.AppCRM_ProductList) },
        React.createElement(ContentPanel, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000001', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { scrollEnabled: false, content: getProductContentPanel(props), testID: 'test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000000' },
                React.createElement(LeftPageHeader, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000002' })),
            React.createElement(Page, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-111222000000', scrollEnabled: false, content: React.createElement(ContainerProduct, { testID: 'test-id-aab07f50-7bac-a77a-3a78-9c6924cebe16' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-00d835c7-cf66-d3ab-bac7-111222000000' })))));
};
const alertViewMessage = ('Вы уверены, что хотите обновить данные по продуктам?\n' +
    'Процесс займёт длительное время. ' +
    'Вы можете продолжить работу в приложении и вернуться к данной странице позднее.');
const alertView = (props) => (React.createElement(AlertView, { testID: 'test-id-product-list-alert-view', ok: () => refreshProductList(props), cancel: props.performProductListModalAlertHide, title: 'Внимание', message: Utils.productListAlertViewMessage, isVisible: props.isVisibleProductListModalAlert }));
const ViewProductList = (props) => (React.createElement(View, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-e17b7b000007', style: Styles.main },
    getSplitPanelProductList(props),
    alertView(props)));
export default ViewProductList;
//# sourceMappingURL=ViewProductList.js.map