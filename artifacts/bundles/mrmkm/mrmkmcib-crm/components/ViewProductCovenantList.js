/*
 *@author Voronov S.I.
 */
import React from 'react';
import { View, Label, Text, Grid, Col, Row, DateInput, TableColumn, Table, TableBody, TableColumnAlignment, TableRow, TableCell, TableHead, PopoverPosition, Checkbox, DateInputTypes, } from 'ufs-mobile-platform';
import * as Utils from '../common/Util';
import { RefreshBar, LoaderWithText } from 'mrmkmcib-app';
import Styles from './styles/ViewProductCovenantListStyles';
const PLACEHOLDER = 'Нет данных';
import { LabelWithPopover } from "mrmkmcib-app";
import { InfoButton } from "mrmkmcib-ui";
import { GridRowHorizontalRule } from './ViewProductCredit';
const getRefreshBar = (props) => (React.createElement(View, { testID: 'test-id-a5f92ddc-3320-11e8-b467-0ed5f89f718b', style: Styles.refreshBarView },
    React.createElement(RefreshBar, { testID: 'test-id-covenant-f7ae59c2-3132-29a9-12f8-8875109b1fc2', title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C', performRefresh: () => props.performCallGetProductCovenantListCacheReset(), date: props.productCachedDateCovenantList })));
const getLoader = (props) => (React.createElement(LoaderWithText, { text: 'Загрузка данных', testID: 'test-id-86b2305c-28ff-11e8-b467-0ed5f89f718b' }));
const getProductCovenantListTable = (props) => (React.createElement(Table, { style: Styles.tableCovenantList, testID: "test-id-132005a2-196d-11e8-accf-0ed5f89f718b" },
    React.createElement(TableHead, { testID: "test-id-190c1450-196e-11e8-accf-0ed5f89f718b" },
        React.createElement(TableColumn, { testID: 'test-id-11b546e0-196e-11e8-accf-0ed5f89f718b', align: TableColumnAlignment.LEFT, width: '130' },
            React.createElement(Text, { testID: 'test-id-0db554ea-196e-11e8-accf-0ed5f89f718b' }, 'Пункт договора')),
        React.createElement(TableColumn, { testID: 'test-id-09aa3c26-196e-11e8-accf-0ed5f89f718b', align: TableColumnAlignment.LEFT, width: '445' },
            React.createElement(Text, { testID: 'test-id-05ffda22-196e-11e8-accf-0ed5f89f718b' }, 'Суть условий')),
        React.createElement(TableColumn, { testID: 'test-id-02b9d002-196e-11e8-accf-0ed5f89f718b', align: TableColumnAlignment.LEFT, width: '160' },
            React.createElement(Text, { testID: 'test-id-ff808e8a-196d-11e8-accf-0ed5f89f718b' }, 'Периодичность\nБлижайшая дата')),
        React.createElement(TableColumn, { testID: 'test-id-fbbefd2c-196d-11e8-accf-0ed5f89f718b', align: TableColumnAlignment.LEFT },
            React.createElement(Text, { testID: 'test-id-f6f62234-196d-11e8-accf-0ed5f89f718b' }, 'Статус\nДата статуса'))),
    React.createElement(TableBody, { testID: "test-id-3e9525dc-196d-11e8-accf-0ed5f89f718b" }, props.filteredProductCovenantList && props.filteredProductCovenantList.data.map((covenant, index) => (React.createElement(TableRow, { key: `${covenant.id}-${index}`, testID: `test-id-a4abc14c-1a34-11e8-accf-0ed5f89f718b-${index}` },
        React.createElement(TableCell, { testID: `test-id-aafc57be-1a34-11e8-accf-0ed5f89f718b-${index}` },
            React.createElement(View, { style: Styles.productCovenantTableCellView },
                React.createElement(Text, { testID: `test-id-00ba8afe-1a35-11e8-accf-0ed5f89f718b-${index}` }, covenant.contractNumber))),
        React.createElement(TableCell, { testID: `test-id-b2e59eae-1a34-11e8-accf-0ed5f89f718b-${index}` },
            React.createElement(View, { style: Styles.productCovenantTableCellView },
                React.createElement(Text, { testID: `test-id-13fac82c-1a35-11e8-accf-0ed5f89f718b-${index}` }, covenant.name))),
        React.createElement(TableCell, { testID: `test-id-b6618ad4-1a34-11e8-accf-0ed5f89f718b-${index}` },
            React.createElement(View, { style: Styles.productCovenantTableCellView },
                React.createElement(Text, { style: Styles.productCreditCovenantPeriodicalValueText, testID: `test-id-23236f2a-1a35-11e8-accf-0ed5f89f718b-${index}` }, covenant.periodicalValue),
                React.createElement(Text, { style: Styles.covenantTableCellSmallText, testID: `test-id-2874d978-1a35-11e8-accf-0ed5f89f718b-${index}` }, covenant.schedule &&
                    covenant.schedule.dateNext &&
                    covenant.schedule.dateNext.formattedString()))),
        React.createElement(TableCell, { testID: `test-id-ba7bd052-1a34-11e8-accf-0ed5f89f718b-${index}` },
            React.createElement(View, { style: Styles.filterStatusValueView },
                React.createElement(Text, { style: Utils.getProductCreditCovenantStatus(props.covenantDateFilterValue, covenant.historyList) == 'Нарушено'
                        ? Styles.productCreditCovenantRedStatusValueText : Styles.productCreditCovenantStatusValueText, testID: `test-id-8533052c-1a35-11e8-accf-0ed5f89f718b-${index}` }, Utils.getProductCreditCovenantStatus(props.covenantDateFilterValue, covenant.historyList)),
                React.createElement(Text, { style: Styles.covenantTableCellSmallText, testID: `test-id-8cd239f6-1a35-11e8-accf-0ed5f89f718b-${index}` }, covenant.schedule &&
                    covenant.schedule.dateEnd &&
                    covenant.schedule.dateEnd.formattedString())))))))));
const getPopoverCheckBoxPeriodFilterList = (props) => {
    return React.createElement(View, null, props.classifierDictionary.SPRGS_COVENANT_PERIOD &&
        Array.isArray(props.classifierDictionary.SPRGS_COVENANT_PERIOD.data) ?
        props.classifierDictionary.SPRGS_COVENANT_PERIOD.data.map((filterPeriodValue, index) => {
            const checked = props.covenantPeriodFilterValueList.data
                .find((filterValue) => filterPeriodValue.code == filterValue.code) != undefined;
            return React.createElement(Checkbox, { testID: `test-id-0eef8008-1a0c-11e8-accf-0ed5f89f718b-${Utils.getRandomOperationUuid()}`, disabled: props.covenantPeriodFilterValueList.data.length == 1 && checked, key: `CheckBoxPeriodFilterItem-${filterPeriodValue.code}-${index}`, checked: checked, label: filterPeriodValue.value, onChange: () => props.performChangeCheckStatusCreditCovenantPeriodFilterValueList(filterPeriodValue) });
        }) : null);
};
const getPopoverCheckBoxStatusFilterList = (props) => (React.createElement(View, null, props.classifierDictionary.SPRGS_COVENANT_STATUS &&
    Array.isArray(props.classifierDictionary.SPRGS_COVENANT_STATUS.data) &&
    props.classifierDictionary.SPRGS_COVENANT_STATUS.data.map((filterStatusValue, index) => {
        const checked = Array.isArray(props.covenantStatusFilterValueList.data) &&
            props.covenantStatusFilterValueList.data
                .find((filterValue) => filterStatusValue.code == filterValue.code) != undefined;
        return React.createElement(Checkbox, { testID: `test-id-0eef8008-1a0c-11e8-accf-0ed5f89f718b-${Utils.getRandomOperationUuid()}`, disabled: Array.isArray(props.covenantStatusFilterValueList.data) && props.covenantStatusFilterValueList.data.length == 1 && checked, key: `CheckBoxStatusFilterItem-${filterStatusValue.code}-${index}`, checked: checked, label: filterStatusValue.value, onChange: () => props.performChangeCheckStatusCreditCovenantStatusFilterValueList(filterStatusValue) });
    })));
const getCovenantPeriodFilterPage = (props) => (React.createElement(LabelWithPopover, { textRightPageHeaderButton: 'Применить', onClickRightPageHeaderButton: props.performApplyCovenantPeriodFilter, disabledRightPageHeaderButton: Utils.isArrayClassifierEqual(props.covenantAppliedPeriodFilterValueList, props.covenantPeriodFilterValueList), positionPopoverList: [PopoverPosition.BOTTOM], popoverStyle: { height: 325 }, popoverPageContent: getPopoverCheckBoxPeriodFilterList(props), testID: 'test-id-13538f6c-19f9-11e8-accf-0ed5f89f718b', labelTitle: "Периодичность", labelText: (Array.isArray(props.covenantAppliedPeriodFilterValueList.data) &&
        (props.covenantAppliedPeriodFilterValueList.data.length == props.classifierDictionary.SPRGS_COVENANT_PERIOD.data.length))
        ? 'Все'
        : `${props.covenantAppliedPeriodFilterValueList.data[0] &&
            props.covenantAppliedPeriodFilterValueList.data[0].value} ${Utils.getCountProductCovenantFilterList(props.covenantAppliedPeriodFilterValueList)}` }));
const getCovenantStatusFilterPage = (props) => (React.createElement(LabelWithPopover, { textRightPageHeaderButton: 'Применить', positionPopoverList: [PopoverPosition.BOTTOM], popoverStyle: { height: 325 }, disabledRightPageHeaderButton: Utils.isArrayClassifierEqual(props.covenantAppliedStatusFilterValueList, props.covenantStatusFilterValueList), onClickRightPageHeaderButton: props.performApplyCovenantStatusFilter, popoverPageContent: getPopoverCheckBoxStatusFilterList(props), testID: 'test-id-13538f6c-19f9-11e8-accf-0ed5f89f718b', labelTitle: "Статус", labelText: (Array.isArray(props.covenantAppliedStatusFilterValueList.data) &&
        (props.covenantAppliedStatusFilterValueList.data.length == props.classifierDictionary.SPRGS_COVENANT_STATUS.data.length))
        ? 'Все'
        : `${Array.isArray(props.covenantAppliedStatusFilterValueList.data) &&
            props.covenantAppliedStatusFilterValueList.data[0] &&
            props.covenantAppliedStatusFilterValueList.data[0].value} ${Utils.getCountProductCovenantFilterList(props.covenantAppliedStatusFilterValueList)}` }));
const getClientProductInfo = (props, mapDateList) => (React.createElement(Grid, { testID: 'test-id-efc03ce0-195c-11e8-accf-0ed5f89f718b' },
    React.createElement(Row, { testID: 'test-id-e9d41540-195c-11e8-accf-0ed5f89f718b' },
        React.createElement(Col, { xs: 12, testID: 'test-id-e5975bea-195c-11e8-accf-0ed5f89f718b' },
            React.createElement(View, { style: Styles.customerCovenantListView },
                React.createElement(Label, { testID: 'test-id-32bd1388-195d-11e8-accf-0ed5f89f718b', header: '', text: "Клиент", block: false },
                    React.createElement(Text, { testID: 'test-id-2c576516-195d-11e8-accf-0ed5f89f718b', numberOfLines: 2 }, props.currentCustomerManaged &&
                        props.currentCustomerManaged.name ||
                        PLACEHOLDER // На случай, если придёт text = null
                    )),
                React.createElement(View, { style: Styles.customerInfoButtonView },
                    React.createElement(InfoButton, { testID: 'test-id-ea1ff618-ab98-11e7-abc4-cec278b6b50a', onPress: props.navigateToCustomerScreen }))))),
    React.createElement(Row, { testID: 'test-id-b2bbf644-1962-11e8-accf-0ed5f89f718b' },
        React.createElement(Col, { xs: 4, testID: 'test-id-b7e5f3b8-1962-11e8-accf-0ed5f89f718b' },
            React.createElement(Label, { testID: 'test-id-32bd1388-195d-11e8-accf-0ed5f89f718b', header: '', text: "Название продукта", block: false },
                React.createElement(Text, { testID: 'test-id-2c576516-195d-11e8-accf-0ed5f89f718b', numberOfLines: 1 }, props.currentCreditProduct &&
                    props.currentCreditProduct.creditProduct &&
                    props.currentCreditProduct.creditProduct.nameClassifier &&
                    props.currentCreditProduct.creditProduct.nameClassifier.value ||
                    PLACEHOLDER // На случай, если придёт text = null
                ))),
        React.createElement(Col, { xs: 4, testID: 'test-id-bbfbe12e-1962-11e8-accf-0ed5f89f718b' },
            React.createElement(Label, { testID: 'test-id-096bd2b6-1963-11e8-accf-0ed5f89f718b', header: '', text: "Номер договора", block: false },
                React.createElement(Text, { testID: 'test-id-0e05f194-1963-11e8-accf-0ed5f89f718b', numberOfLines: 1 }, props.currentCreditProduct &&
                    props.currentCreditProduct.creditProduct &&
                    props.currentCreditProduct.creditProduct.contractNumber ||
                    PLACEHOLDER)))),
    React.createElement(GridRowHorizontalRule, null),
    React.createElement(Row, { testID: "test-id-4c58287c-1963-11e8-accf-0ed5f89f718b" },
        React.createElement(Col, { xs: 4, testID: 'test-id-4c58287c-1963-11e8-accf-0ed5f89f718b' },
            React.createElement(View, { style: Styles.dateInputProductCovenantFilter },
                React.createElement(DateInput, { testID: 'test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg', value: props.covenantDateFilterValue || new Date(), format: 'MM.yyyy', min: new Date(Math.min.apply(null, mapDateList)), label: 'Период', locale: 'ru', dateType: DateInputTypes.MONTH_PICKER, max: new Date(), onChange: (date) => props.performChangeCovenantDateFilterValue(date) }))),
        React.createElement(Col, { xs: 4, testID: 'test-id-16bcfa94-19f9-11e8-accf-0ed5f89f718b' }, getCovenantPeriodFilterPage(props)),
        React.createElement(Col, { xs: 4, testID: 'test-id-16bcfa94-19f9-11e8-accf-0ed5f89f718b' }, getCovenantStatusFilterPage(props)))));
const ViewProductCovenantList = (props) => {
    const mapDateList = [];
    if (props.covenantListFetching) {
        return getLoader(props);
    }
    if (Array.isArray(props.productCovenantList.data)) {
        props.productCovenantList.data.map((item) => (item.historyList.data.map((history) => {
            history.dateFact && mapDateList.push(history.dateFact);
        })));
    }
    return React.createElement(View, { style: Styles.mainCreditCovenantListView, testID: "test-id-f38c578c-195c-11e8-accf-0ed5f89f718b" },
        React.createElement(View, { style: Styles.creditCovenantListView, testID: "test-id-f38c578c-195c-11e8-accf-0ed5f89f718b" }, getClientProductInfo(props, mapDateList)),
        getProductCovenantListTable(props),
        getRefreshBar(props));
};
export default ViewProductCovenantList;
//# sourceMappingURL=ViewProductCovenantList.js.map