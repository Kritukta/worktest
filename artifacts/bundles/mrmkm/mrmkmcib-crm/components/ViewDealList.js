/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewDealListStyles';
import { Button, Center, Checkbox, ContentPanel, LeftPageHeader, NavigationBackButton, CenterPageHeader, H2, NumberInput, Icon, IconType, Loader, NavigationIconButton, NavigationIconButtonType, Popover, PopoverPosition, PopoverType, NavigationFilterButton, NavigationTextButton, OptionItem, Page, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, TabSelector, Text, View, } from 'ufs-mobile-platform';
import { SelectClassifier } from 'mrmkmcib-crm';
import { RefreshBar, FullScreenError } from 'mrmkmcib-app';
import { Enums } from '../Enums';
import { defaultValues } from '../models/Models';
import * as utils from '../common/Util';
import { CONVERT_ERROR } from '../models/Converters';
import PopoverTarget from '../modules/PopoverTarget';
import { IconView, NavigationTextButtonDisabled, SelectDate, SelectDateRow, OpacityAnimatedView, } from 'mrmkmcib-ui';
const _tableColumns = (props) => ([
    props.currentCustomerManaged.isHolding ? `Предприятие\nСуть` : `Суть\nМоя роль`,
    props.currentTab === Enums.DealListTab.DealOpenedList ? `Стадия\nПлановое закрытие` : `Стадия\nФактическое закрытие`,
    `Сумма в тысячах\nПродукт`
]);
export const isCredit = (item) => (item.type === Enums.DealType.Credit);
const myRoleName = (deal) => ((deal.myRole && deal.myRole.value) || '');
const rowsMapper = (user) => ({
    search: (rows) => rows.map((item) => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: (item.roleClassifier ? utils.getRoleString(item.roleClassifier.value) : ' ') },
        second: { top: item.phaseClassifier.value, bottom: '' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    opened: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? utils.format.date(item.plannedFinishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    closed: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.finishDate ? utils.format.date(item.finishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    holdingSearch: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: (item.roleClassifier ? utils.getRoleString(item.roleClassifier.value) : ' ') },
        second: { top: item.phaseClassifier.value, bottom: '' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    holdingOpened: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? utils.format.date(item.plannedFinishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    holdingClosed: (rows) => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.finishDate ? utils.format.date(item.finishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    }))
});
const getErrorText = (props) => CONVERT_ERROR(props.refreshError);
const getErrorPanel = (props) => (React.createElement(View, { testID: 'test-id-702ea3b2-ad7d-c0a2-a144-2dec1ef2704e', style: Styles.ErrorWrapperCenter },
    React.createElement(FullScreenError, { testID: 'test-id-q3ergaeths-aht66-3hsd-wrths-43fqg', title: getErrorText(props).comment, description: getErrorText(props).message, onRefresh: props.performDealListRefresh })));
const TABS = { 0: 'Открытые', 1: 'Закрытые' };
const getFiltersEditorObject = (props) => (props.currentTab === Enums.DealListTab.DealClosedList ?
    props.filtersEditorClosed || Object.assign({}, defaultValues.DealListFilter) :
    props.filtersEditorOpened || Object.assign({}, defaultValues.DealListFilter));
const SelectClassifierMultiply = (props) => (React.createElement(Page, { testID: 'test-id-bec3186f36f0b', scrollEnabled: true, content: React.createElement(View, { testID: 'test-id-bec3824186f0b', style: { marginTop: 20, marginBottom: 20 } }, props.classifierList && props.classifierList.data ? props.classifierList.data.map((element, index) => React.createElement(Checkbox, { key: `select-multi-classifier-${element.code}-${index}`, testID: 'test-id-bec382186f36f0b', checked: props.selected && props.selected.data.findIndex(selectedElement => selectedElement.code === element.code) >= 0 || false, label: element.value, onChange: (checked) => checked ? props.performSelect(element) : props.performUnSelect(element) })) : React.createElement(Text, { testID: 'test-id-bec382186f3346f0b' }, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430")) }, props.navigateBack ? [
    React.createElement(LeftPageHeader, { testID: 'test-id-b2503f', key: 'left-header-1' },
        React.createElement(NavigationBackButton, { testID: 'test-id-bec4abbec3e09', title: false, onClick: props.navigateBack })),
    React.createElement(CenterPageHeader, { testID: 'test-id-0517c9af4e', key: 'center-header-3' },
        React.createElement(H2, { testID: 'test-id-dfa88e6aa6' }, "\u0412\u044B\u0431\u043E\u0440 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0430"))
] : React.createElement(LeftPageHeader, { testID: 'test-id-b25d3ed9703f1', key: 'left-header-2' })));
const BackButtonHeader = (key, callback, title) => (React.createElement(LeftPageHeader, { key: key, testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-1-${key}` },
    React.createElement(NavigationBackButton, { testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-2-${key}`, title: false, onClick: callback }),
    React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-3-${key}` },
        React.createElement(NavigationTextButton, { testID: `test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4-${key}`, title: title, onExecute: callback }))));
const getFilterPopoverContent = (props) => {
    const stage = getFiltersEditorObject(props).stage;
    const role = getFiltersEditorObject(props).role;
    return (React.createElement(View, { testID: 'test-id-33fe61cb-6bb3-4430-5343-ad43655e761a', style: Styles.main },
        React.createElement(SplitPanel, { testID: 'test-id-a5c9b50c-0009-e862-1d6c-b082e51eddd4', id: utils.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main) },
            React.createElement(ContentPanel, { testID: 'test-id-edfc37ed-e4c7-0f3f-dfd6-5cd986f1d65f', style: { backgroundColor: '#fff' } },
                React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: getFilterPopoverMainPage(props) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ee37c5e47' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-b867f8d92183', title: 'Сбросить', onExecute: () => props.performFilterReset(props.currentTab) })),
                    React.createElement(RightPageHeader, { testID: 'test-id-e0e37c5e47' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-10731c5b7b45', title: 'Применить', onExecute: () => props.performFilterApply(props.currentTab) })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-9ee54834d034ac' },
                        React.createElement(H2, { testID: 'test-id-57d12478cfb227959' }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B \u0441\u0434\u0435\u043B\u043E\u043A"))),
                React.createElement(Page, { testID: 'test-id-b1dc15fe93ddb750', scrollEnabled: true, content: React.createElement(SelectClassifier, { testID: 'test-id-b1dc15fe93ddb751', selectedCode: (getFiltersEditorObject(props).stage || { code: '' }).code, performSelect: (value) => props.performFilterSelectStage(props.currentTab, getFiltersEditorObject(props), value), classifierList: props.filteredStagesList }) },
                    "/>} >",
                    React.createElement(CenterPageHeader, { testID: 'test-id-05e1fbbd-650817c9af4e', key: 'center-header-33' },
                        React.createElement(H2, { testID: 'test-id-dcf9baaa-d6e3-dfa88e6aa6' }, "\u0412\u044B\u0431\u043E\u0440 \u0441\u0442\u0430\u0434\u0438\u0438"))),
                React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: React.createElement(SelectClassifier, { testID: 'test-id-b1dc15fe93ddb751', selectedCode: (getFiltersEditorObject(props).role || { code: '' }).code, performSelect: (value) => props.performFilterSelectRole(props.currentTab, getFiltersEditorObject(props), value), classifierList: props.classifierDictionary.SALES_TEAM_ROLE }) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-05e1fbbd-650817c9af4e', key: 'center-header-34' },
                        React.createElement(H2, { testID: 'test-id-dcf9baaa-d6e3-dfa88e6aa6' }, "\u0412\u044B\u0431\u043E\u0440 \u0440\u043E\u043B\u0438"))),
                React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: React.createElement(SelectClassifierMultiply, { testID: 'test-id-b1dc15fe93ddb751', selected: getFiltersEditorObject(props).products, performSelect: (value) => {
                            props.performFilterSelectProduct(props.currentTab, getFiltersEditorObject(props), value);
                        }, performUnSelect: (value) => {
                            props.performFilterUnSelectProduct(props.currentTab, getFiltersEditorObject(props), value);
                        }, classifierList: props.classifierDictionary.DEAL_PRODUCT_SALE_METHOD }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-b2503f', key: 'left-header-1' },
                        React.createElement(NavigationBackButton, { testID: 'test-id-bec4abbec3e09', title: false, onClick: props.filterPopoverNavigateBack })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-05e1fbbd-650817c9af4e', key: 'center-header-35' },
                        React.createElement(H2, { testID: 'test-id-dcf9baaa-d6e3-dfa88e6aa6' }, "\u0412\u044B\u0431\u043E\u0440 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432")),
                    React.createElement(RightPageHeader, { testID: 'test-id-e0e37c547' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-10731c7b45', title: 'Готово', onExecute: props.filterPopoverNavigateBack }))),
                React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: React.createElement(SelectClassifier, { testID: 'test-id-b1dc15fe93ddb751', selectedCode: (getFiltersEditorObject(props).currency || { name: '' }).name, performSelect: (value) => props.performFilterSelectCurrency(props.currentTab, getFiltersEditorObject(props), value), renderMode: Enums.ClassifierRenderMode.CodeWithValue, classifierList: props.filteredCurrencyList }) },
                    BackButtonHeader('filterBack', props.filterPopoverNavigateBack, 'Фильтры'),
                    React.createElement(CenterPageHeader, { testID: 'test-id-05e1fbbd-650817c9af4e', key: 'center-header-3' },
                        React.createElement(H2, { testID: 'test-id-dcf9baaa-d6e3-dfa88e6aa6' }, "\u0412\u044B\u0431\u043E\u0440 \u0432\u0430\u043B\u044E\u0442\u044B"))),
                React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: React.createElement(SelectDate, { onChange: (value) => props.performFilterSelectDateFrom(props.currentTab, getFiltersEditorObject(props), value), value: getFiltersEditorObject(props).dateFrom || null }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ee37c5e47' }, BackButtonHeader('filterDateFromLBack', props.filterPopoverNavigateBack, 'Фильтры')),
                    React.createElement(RightPageHeader, { testID: 'test-id-e0e37c5e47' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-10731c5b7b45', title: 'Готово', onExecute: props.filterPopoverNavigateBack })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-9ee54834d034ac' },
                        React.createElement(H2, { testID: 'test-id-57d12478cfb227959' }, "\u0412\u044B\u0431\u043E\u0440 \u0434\u0430\u0442\u044B \u043E\u0442"))),
                React.createElement(Page, { testID: 'test-id-b1dc19ae-def0-d965-4220-85fe93ddb750', scrollEnabled: true, content: React.createElement(SelectDate, { onChange: (value) => props.performFilterSelectDateTo(props.currentTab, getFiltersEditorObject(props), value), value: getFiltersEditorObject(props).dateTo || null }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ee37c5e47' }, BackButtonHeader('filterDateToLBack', props.filterPopoverNavigateBack, 'Фильтры')),
                    React.createElement(RightPageHeader, { testID: 'test-id-e0e37c5e47' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-10731c5b7b45', title: 'Готово', onExecute: props.filterPopoverNavigateBack })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-9ee54834d034ac' },
                        React.createElement(H2, { testID: 'test-id-57d12478cfb227959' }, "\u0412\u044B\u0431\u043E\u0440 \u0434\u0430\u0442\u044B \u0434\u043E")))))));
};
const SelectorRow = (props) => (React.createElement(View, { testID: 'test-id-182095a51', style: Styles.SelectorRowContainer },
    React.createElement(View, { style: Styles.SelectorRowLeft },
        React.createElement(Text, { style: Styles.CellTop, testID: 'test-id-2c3f5f2669' }, props.label)),
    React.createElement(View, { style: Styles.SelectorRowRight },
        props.value ? React.createElement(Text, { style: Styles.SelectorValText, testID: 'test-id-2c3f5f2669' }, props.value) : null,
        React.createElement(Button, { testID: 'test-id-6bb005-33391d', onExecute: props.onSelect },
            React.createElement(Icon, { testID: 'test-id-776c6059d30', disabled: true, type: IconType.MrmLink })))));
const getFilterPopoverMainPage = (props) => (React.createElement(View, { testID: 'test-id-5b6cca7b-a7c8-4e54-c232-58fa142ee7ad', style: Styles.main },
    props.currentTab !== Enums.DealListTab.DealClosedList ? (React.createElement(SelectorRow, { label: 'Стадия', value: utils.format.truncate((getFiltersEditorObject(props).stage || { value: '' }).value, 30), onSelect: props.filterPopoverNavigateToStage })) : null,
    React.createElement(SelectorRow, { label: 'Роль', value: (getFiltersEditorObject(props).role || { value: '' }).value, onSelect: props.filterPopoverNavigateToRole }),
    React.createElement(SelectorRow, { label: 'Продукты', value: `${(getFiltersEditorObject(props).products || { data: [] }).data.length || ''}`, onSelect: props.filterPopoverNavigateToProduct }),
    React.createElement(SelectorRow, { label: 'Валюта', value: (getFiltersEditorObject(props).currency || { code: '' }).code, onSelect: props.filterPopoverNavigateToCurrency }),
    React.createElement(NumberInput, { testID: 'test-id-182095a51', fractionalDigitsCount: 5, value: getFiltersEditorObject(props).sumFrom || '', maxLength: 15, currency: ' ', label: 'Сумма сделки от, тыс.', onChange: (value) => (props.performInputFilterValue(Object.assign({}, getFiltersEditorObject(props), { sumFrom: value }), props.currentTab)) }),
    React.createElement(NumberInput, { testID: 'test-id-182095a51', fractionalDigitsCount: 5, value: getFiltersEditorObject(props).sumTo || '', maxLength: 15, currency: ' ', label: 'Сумма сделки до, тыс.', onChange: (value) => (props.performInputFilterValue(Object.assign({}, getFiltersEditorObject(props), { sumTo: value }), props.currentTab)) }),
    React.createElement(SelectDateRow, { onPress: props.filterPopoverNavigateToDateFrom, value: getFiltersEditorObject(props).dateFrom, label: `${props.currentTab === Enums.DealListTab.DealOpenedList ? 'Плановая' : 'Фактическая'} дата от`, undefinedPlaceholder: '\u041D\u0435\u0442' }),
    React.createElement(SelectDateRow, { onPress: props.filterPopoverNavigateToDateTo, value: getFiltersEditorObject(props).dateTo, label: `${props.currentTab === Enums.DealListTab.DealOpenedList ? 'Плановая' : 'Фактическая'} дата до`, undefinedPlaceholder: '\u041D\u0435\u0442' })));
const renderFilterButton = (props) => (React.createElement(View, { testID: 'test-id-41dfb85e-13c8-73a8-6a9d-aa936ad22aeb', style: Styles.filterValueView },
    React.createElement(PopoverTarget, { testID: 'test-id-464a7268-5245-be7d-72f0-c03401938235', refName: 'dealListFilterButton' },
        React.createElement(NavigationFilterButton, { testID: 'test-id-operation-list-filter-button', onExecute: () => props.performPopoverFilterShow(props.currentTab), count: getActiveFiltersCount(props) })),
    React.createElement(Popover, { testID: 'test-id-13466acf-filterPopover', target: PopoverTarget.getRef('dealListFilterButton'), opened: props.isVisiblePopoverFilter, onOutsideTap: props.performPopoverFilterHide, type: PopoverType.WIDE, style: { height: 550, width: 375 }, position: [PopoverPosition.LEFT] }, getFilterPopoverContent(props))));
const getTable = (props) => (React.createElement(View, { testID: 'test-id-3e95b12e-d2e8-4af3-9a8a-73812fe5bcc5', style: Styles.TableAreaContainer },
    React.createElement(View, { testID: 'test-id-db967c54-02e9-98e8-d4c2-d17c072643c9', style: Styles.TableContainer },
        React.createElement(Center, { testID: 'test-id-3e367a58-f39c-c961-8896-bea1f7fd4da0' },
            React.createElement(View, { testID: 'test-id-3d60b9bb-a479-8709-7c78-d5802dbf9ce2', style: Styles.CreateDealContainer },
                React.createElement(View, { testID: 'test-id-608f9043-e8f8-f9ce-ea64-cfc81cc35e68', style: Styles.CreateDealLinkContainer }, props.isButtonCreateVisible ? (props.isCreateDealEnable ? React.createElement(NavigationTextButton, { testID: 'test-id-39e5b6eb-35c4-6468-b099-bac4c797eb1b', title: 'Создать сделку', onExecute: () => {
                        props.navigateToDealEditor(defaultValues.Deal, Enums.DealEditorMode.CreateMode, null);
                    } }) : React.createElement(NavigationTextButtonDisabled, { title: 'Создать сделку' })) : null),
                React.createElement(View, { testID: 'test-id-ae2f494d-314c-98e5-e00e-b2c59404f121', style: Styles.TabSelectorWrapper },
                    React.createElement(TabSelector, { testID: 'test-id-f71c6858-da8c-b1f0-eecc-a1f4af28d214', style: [Styles.TabSelector], value: TABS[props.currentTab || 0], onChange: (index) => {
                            props.performChangeTab(index, index);
                        } }, Object.keys(TABS).map(k => React.createElement(OptionItem, { testID: 'test-id-dafa9a03-2ae0-ce11-7073-d7924d0c17e0', key: `tab-${k}`, value: TABS[k], title: TABS[k] })))),
                React.createElement(View, { testID: 'test-id-323c88cf-479a-c59f-bd97-32d4e399cf5e', style: Styles.CreateDealSearchContainer },
                    React.createElement(View, { testID: 'test-id-124bf2a9-c9a5-a7c6-8138-72b78e96ce5a', style: Styles.flexRow },
                        React.createElement(NavigationIconButton, { testID: 'test-id-9c76ae59-a7d5-41db-3156-90685fd4cbd1', type: NavigationIconButtonType.SEARCH, onExecute: props.navigateToDealListSearchScreen }),
                        renderFilterButton(props))))),
        props.refreshInProgress || props.refreshError || !props.infoMessage ? null : React.createElement(View, { style: Styles.messageDealContainer },
            React.createElement(Text, { testID: 'test-id-View-Deal-List' }, props.infoMessage)),
        props.refreshInProgress ?
            React.createElement(View, { testID: 'test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d', style: Styles.LoaderWrapper },
                React.createElement(Loader, { testID: 'test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d' }),
                React.createElement(Text, { testID: 'test-id-544d3087b2183b0ade' }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u0434\u0435\u043B\u043E\u043A")) : (React.createElement(View, { testID: 'test-id-f02c825d7be630409d', style: Styles.TableWrapper },
            React.createElement(Table, { testID: 'test-id-fef887b7-8ca1-b57e-9e51-0ac5b2bbf409', style: Styles.TableCollapsedFix },
                React.createElement(TableHead, { testID: 'test-id-75635324-3667-0601-408a-5d5d93bfb8ab' },
                    React.createElement(TableColumn, { testID: 'test-id-25b8b2bf-0d0c-9d0e-c69c-ae70d4986321', key: `col-0`, width: '255' },
                        React.createElement(Text, { testID: 'test-id-e40a586f-40cf-eae5-a739-64895253353b' }, _tableColumns(props)[0])),
                    React.createElement(TableColumn, { testID: 'test-id-95b9a7a1-6bea-f82a-97a9-9d021ec7c742', key: `col-1`, width: '160' },
                        React.createElement(Text, { testID: 'test-id-a21fd416-1a88-b0cd-f14f-8141a6189b24' }, _tableColumns(props)[1])),
                    React.createElement(TableColumn, { testID: 'test-id-2a94a8f0a98338', align: TableColumnAlignment.RIGHT, key: `col-2`, width: '150' },
                        React.createElement(Text, { testID: 'test-id-55c5387aac602' }, _tableColumns(props)[2])),
                    React.createElement(TableColumn, { testID: 'test-id-b2a2154d-dbca-394f-c89f-7fef98f78e1f', key: `col-3`, width: '70' })),
                React.createElement(TableBody, { testID: 'test-id-3f58460f-5ed0-90e7-ed5d-ef9569bbc4ff' }, _renderTableRows(rows(props), props))),
            props.startAnimation ? _renderAnimatedRow(props) : null))),
    props.refreshError ? getErrorPanel(props) : (React.createElement(RefreshBar, { testID: 'test-id-fef45946', performRefresh: props.performDealListFlush, date: props.dealListPageCachedDate }))));
const _renderAnimatedRow = (props) => (React.createElement(OpacityAnimatedView, { testID: 'test-id-d2094a49-5efe-38df-9eb0-d0b168d241d5', style: Styles.animatedRow, value: 1, toValue: 0, delay: 8000, duration: 1000 },
    React.createElement(Text, { testID: 'test-id-d2094a49-5efe-38df-9eb0-43frqrf', style: Styles.animatedRowText }, 'Сделка создана!')));
const rows = (props) => {
    const mappedData = rowsMapper(props.currentUser);
    if (props.currentCustomerManaged.isHolding) {
        return props.currentTab === Enums.DealListTab.DealOpenedList ?
            mappedData.holdingOpened(props.dealOpenedList.data) :
            mappedData.holdingClosed(props.dealClosedList.data);
    }
    return props.currentTab === Enums.DealListTab.DealOpenedList ?
        mappedData.opened(props.dealOpenedList.data) :
        mappedData.closed(props.dealClosedList.data);
};
const _renderTableRows = (items, props, forSearch = false) => {
    return items.map((item, i) => (React.createElement(TableRow, { testID: `test-id-dealRow-${item.id}`, key: `dealRow-${i}-${item.id}`, onClick: () => {
            props.performDealOpen(item.id, Enums.DealMode.CommonBack, props.isEditDealEnable);
        } },
        React.createElement(TableCell, { testID: 'test-id-7f47b1bf-a832-8f23-4760-06d0c8267adf' },
            React.createElement(View, { style: Styles.CellContainer },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', numberOfLines: 3, ellipsizeMode: 'tail', style: Styles.CellTop }, item.first.top)),
                item.first.middle ? React.createElement(View, { testID: 'test-id-dcbf2a-df57719d0cb', style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellBottom }, item.first.middle)) : null,
                React.createElement(View, { style: Styles.CellBottomContainer },
                    item.isAccessible ? null : React.createElement(View, { style: Styles.LockContainer },
                        React.createElement(IconView, { type: 'lock', testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb345435345' })),
                    item.first.bottom ? React.createElement(View, { style: Styles.CellOrangeLabelContainer },
                        React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: Styles.CellOrangeLabelText }, item.first.bottom)) : null))),
        React.createElement(TableCell, { testID: 'test-id-91c77eca-162d-1faf-aef6-9880a87ce0a3' },
            React.createElement(View, { style: Styles.CellContainer },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellTop }, item.second.top)),
                React.createElement(View, { style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: Styles.CellBottom }, item.second.bottom)))),
        React.createElement(TableCell, { testID: 'test-id-7fce741d-31ca-09fd-cde7-8cfde477fb5f' },
            React.createElement(View, { style: Styles.CellContainerLast },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellTop }, item.third.top)),
                React.createElement(View, { style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb1', style: Styles.CellBottom }, item.third.bottom)))),
        React.createElement(TableCell, { testID: 'test-id-7fce7-8cfde477fb5f' },
            React.createElement(View, { testID: `test-id-dealRow-clickable-Icon${item.id}`, style: Styles.RowLinkContainer },
                React.createElement(Button, { testID: 'test-id-08e4caa-0f22edbfaa59ss', onExecute: () => {
                        props.performDealOpen(item.id, Enums.DealMode.CommonBack, props.isEditDealEnable);
                    } },
                    React.createElement(Icon, { testID: 'test-id-3f3e58f5-b2f755b5200b', type: IconType.MrmLink })))))));
};
const getActiveFiltersCount = (props) => {
    let count = 0;
    const filter = (props.currentTab === Enums.DealListTab.DealClosedList ?
        props.filtersActiveClosed || props.filtersEditorClosed || Object.assign({}, defaultValues.DealListFilter) :
        props.filtersActiveOpened || props.filtersEditorOpened || Object.assign({}, defaultValues.DealListFilter));
    if (filter) {
        if (filter.sumFrom || filter.sumTo) {
            ++count;
        }
        if (filter.dateFrom || filter.dateTo) {
            ++count;
        }
        if (filter.stage) {
            ++count;
        }
        if (filter.products && filter.products.data && filter.products.data.length) {
            ++count;
        }
        if (filter.currency) {
            ++count;
        }
        if (filter.role) {
            ++count;
        }
    }
    return count;
};
const ViewDealList = (props) => (React.createElement(View, { testID: 'test-id-View-Deal-List', style: Styles.main }, getTable(props)));
export default ViewDealList;
//# sourceMappingURL=ViewDealList.js.map