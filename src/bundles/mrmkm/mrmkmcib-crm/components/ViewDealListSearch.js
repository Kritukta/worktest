/*
 * Created by Vladykin A.S.
 */
import React from 'react';
import Styles from './styles/ViewDealListSearchStyles';
import { Button, ContentPanel, LeftPageHeader, Icon, IconType, Page, SplitPanel, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, Text, View, } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
import * as util from '../common/Util';
import { SearchInput, IconView, } from 'mrmkmcib-ui';
import GSZStyles from './styles/ViewGSZStyles';
const _tableColumns = (props) => ([
    props.currentCustomerManaged.isHolding ? `Предприятие\nСуть` : `Суть\nМоя роль`,
    props.currentTab === Enums.DealListTab.DealOpenedList ? `Стадия\nПлановое закрытие` : `Стадия\nФактическое закрытие`,
    `Сумма в тысячах\nПродукт`
]);
const myRoleName = (deal) => ((deal.myRole && deal.myRole.value) || '');
const rowsMapper = (user) => ({
    search: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: (item.roleClassifier ? util.getRoleString(item.roleClassifier.value) : ' ') },
        second: { top: item.phaseClassifier.value, bottom: '' },
        third: { top: item.sum ? util.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: util.productLine(item) },
    })),
    opened: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? util.format.date(item.plannedFinishDate) : '-' },
        third: { top: item.sum ? util.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: util.productLine(item) },
    })),
    closed: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.finishDate ? util.format.date(item.finishDate) : '-' },
        third: { top: item.sum ? util.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: util.productLine(item) },
    })),
    holdingSearch: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: (item.roleClassifier ? util.getRoleString(item.roleClassifier.value) : ' ') },
        second: { top: item.phaseClassifier.value, bottom: '' },
        third: { top: item.sum ? util.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: util.productLine(item) },
    })),
    holdingOpened: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? util.format.date(item.plannedFinishDate) : '-' },
        third: { top: item.sum ? util.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: util.productLine(item) },
    })),
    holdingClosed: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.finishDate ? util.format.date(item.finishDate) : '-' },
        third: { top: item.sum ? util.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: util.productLine(item) },
    }))
});
const _renderTableRows = (items, props) => {
    return items.map((item, i) => (React.createElement(TableRow, { testID: `test-id-dealRow-${item.id}`, key: `dealRow-${i}-${item.id}`, onClick: () => {
            props.performDealOpen(item.id, Enums.DealMode.CommonBack, props.isEditDealEnable);
        } },
        React.createElement(TableCell, { testID: 'test-id-7f47b1bf-a832-8f23-4760-06d0c8267adf' },
            React.createElement(View, { testID: 'test-id-7f47b1bf-a832-8f23-4760-06d0c8267444', style: Styles.CellContainer },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', numberOfLines: 3, ellipsizeMode: 'tail', style: Styles.CellTop }, item.first.top)),
                item.first.middle ?
                    React.createElement(View, { testID: 'test-id-dcbf2a-df57719d0cb', style: Styles.CellBottomContainer },
                        React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellBottom }, item.first.middle)) :
                    null,
                React.createElement(View, { testID: 'test-id-7f47b1bf-a832-8f23-4760-06d0c82675df', style: Styles.CellBottomContainer },
                    item.isAccessible ?
                        null :
                        React.createElement(View, { testID: 'test-id-7f47b1bf-a832-8f23-4798-06d0c8267adf', style: Styles.LockContainer },
                            React.createElement(IconView, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb345435335', type: 'lock' })),
                    item.first.bottom ?
                        React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb345435ee5', style: Styles.CellOrangeLabelContainer },
                            React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: Styles.CellOrangeLabelText }, item.first.bottom)) :
                        null))),
        React.createElement(TableCell, { testID: 'test-id-91c77eca-162d-1faf-aef6-9880a87ce0a3' },
            React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-9155-5f457719d0cb345435ee5', style: Styles.CellContainer },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellTop }, item.second.top)),
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb345435ee1', style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: Styles.CellBottom }, item.second.bottom)))),
        React.createElement(TableCell, { testID: 'test-id-7fce741d-31ca-09fd-cde7-8cfde477fb5f' },
            React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457711230cb345435ee5', style: Styles.CellContainerLast },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellTop }, item.third.top)),
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb345435aa5', style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: Styles.CellBottom }, item.third.bottom)))),
        React.createElement(TableCell, { testID: 'test-id-7fce7-8cfde477fb5f' },
            React.createElement(View, { testID: `test-id-dealRow-clickable-Icon${item.id}`, style: Styles.RowLinkContainer },
                React.createElement(Button, { testID: 'test-id-08e4caa-0f22edbfaa59ss' },
                    React.createElement(Icon, { testID: 'test-id-3f3e58f5-b2f755b5200b', type: IconType.MrmLink })))))));
};
const getLeftPageHeader = (props) => {
    return (React.createElement(LeftPageHeader, { testID: 'test-id-d13a4579-257b-3890-623b-c7754fe180ef' },
        React.createElement(SearchInput, { value: props.inputSearch, onChange: props.performInputSearch, onCancel: props.navigateBackToDealListScreen, autoFocus: true, drawBottomBorder: true })));
};
const getContent = (props) => {
    let dealSearchList = props.currentTab === Enums.DealListTab.DealOpenedList ?
        props.dealSearchOpenedList :
        props.dealSearchClosedList;
    if (props.inputSearch == null || props.inputSearch === '') {
        return (React.createElement(View, { testID: 'test-id-a0dea6d7-3a11-8853-7318-d9f14b3ea9dc', style: GSZStyles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-d13a4579-257b-3890-623b-c7754fe377ef', style: GSZStyles.searchNotFoundText }, `Поиск ${props.currentTab === Enums.DealListTab.DealOpenedList
                ? 'открытых'
                : 'закрытых'} сделок по сути, продукту, сумме, компании, ID сделки в рамках клиента "${props.currentCustomerManaged.name}"`)));
    }
    if (dealSearchList.data.length == 0) {
        return (React.createElement(View, { testID: 'test-id-6761f191-c0cd-b8da-c4b5-400ace27a553', style: GSZStyles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-b38edd02-939f-2b71-c922-138198125d4f', style: GSZStyles.searchNotFoundText }, 'Результатов не найдено')));
    }
    return (React.createElement(View, { testID: 'test-id-353328a3-edd8-aa22-7cd7-ebfdbad3e345', style: Styles.SearchTableHeight },
        React.createElement(Table, { testID: 'test-id-64817bb9-f2ef-be1e-cfbd-b625a5c4a12e', style: Styles.TableCollapsedFix },
            React.createElement(TableHead, { testID: 'test-id-3927ac4e-e1e6-6866-1646-7791c4b59b2b' },
                React.createElement(TableColumn, { testID: 'test-id-25b8b2bf-0d0c-9d0e-c69c-ae70d4986321', key: `col-0`, width: '255' },
                    React.createElement(Text, { testID: 'test-id-e40a586f-40cf-eae5-a739-64895253353b' }, _tableColumns(props)[0])),
                React.createElement(TableColumn, { testID: 'test-id-95b9a7a1-6bea-f82a-97a9-9d021ec7c742', key: `col-1`, width: '160' },
                    React.createElement(Text, { testID: 'test-id-a21fd416-1a88-b0cd-f14f-8141a6189b24' }, _tableColumns(props)[1])),
                React.createElement(TableColumn, { testID: 'test-id-2a94a8f0a98338', align: TableColumnAlignment.RIGHT, key: `col-2`, width: '150' },
                    React.createElement(Text, { testID: 'test-id-55c5387aac602' }, _tableColumns(props)[2])),
                React.createElement(TableColumn, { testID: 'test-id-b2a2154d-dbca-394f-c89f-7fef98f78e1f', key: `col-3`, width: '70' })),
            React.createElement(TableBody, { testID: 'test-id-3e802948-4be6-e9c0-e4f7-5590c728d801' }, _renderTableRows(props.currentCustomerManaged.isHolding ?
                rowsMapper(props.currentUser).holdingSearch(dealSearchList.data) :
                rowsMapper(props.currentUser).search(dealSearchList.data), props)))));
};
const ViewDealListSearch = (props) => (React.createElement(SplitPanel, { testID: 'test-id-1911df3a-c3e8-dd93-91e6-33bc454ff288', id: 'ViewDealListSearch' },
    React.createElement(ContentPanel, { testID: 'test-id-691ee770-2f30-8196-2380-6e5fa14f85ea', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-c6099d61-1261-48a4-cd98-1946d3050f6f', scrollEnabled: false, content: getContent(props) }, getLeftPageHeader(props)))));
export default ViewDealListSearch;
//# sourceMappingURL=ViewDealListSearch.js.map