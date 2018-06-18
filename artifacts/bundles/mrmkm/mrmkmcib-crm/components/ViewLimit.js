/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewLimitStyles';
import { AccessoryPanel, Button, CenterPageHeader, ContentPanel, H1, H2, LeftPageHeader, Loader, NavigationBackButton, OptionItem, Page, Panel, PanelType, SplitPanel, SumText, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, TabSelector, Text, View, } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
const getErrorStyle = (props) => {
    if (props.limitError) {
        return Styles.ErrorWrapperCenter;
    }
    return Styles.ErrorWrapper;
};
const getErrorPanel = (props) => (React.createElement(View, { testID: 'test-id-6e45aaa5-457b-320a-89b9-3dc6b476fb27', style: getErrorStyle(props) },
    React.createElement(Panel, { testID: 'test-id-f3e17f48-b802-d22e-34c1-913103d04856', type: PanelType.WARNING_BOX, header: 'Данные о структуре лимитов не получены', headerMedia: React.createElement(Button, { testID: 'test-id-305c2113-9e29-f94f-51ef-4b0e7f940403', onExecute: () => {
                // props.performRefresh
            } },
            React.createElement(Text, { testID: 'test-id-cc0f0c72-9a83-bd2a-9f38-02c94eb5c29a' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441")), hasIcon: true },
        React.createElement(View, { testID: 'test-id-1b59b13e-e454-53f0-ba3a-10cbf044b441', style: Styles.ErrorWrapper },
            React.createElement(Text, { testID: 'test-id-266db576-b77d-e657-0a34-a6a7a9fc7f08' }, props.limitError && props.limitError.comment),
            React.createElement(Text, { testID: 'test-id-b8af10cc-ba17-704e-9cca-ec978d595b90' }, props.limitError && props.limitError.message)))));
const _renderRow = (label, value, currency, textRender = PlainText) => (React.createElement(TableRow, { testID: 'test-id-39a942ad-cc2f-7e77-9dcf-64409f15ecb0', key: label },
    React.createElement(TableCell, { testID: 'test-id-463c96b7-0fbf-68a9-53ac-e99833639676' },
        React.createElement(View, { testID: 'test-id-733a0934-126c-0de0-7b62-4f4dd3880118', style: Styles.CenteredRow }, textRender(label))),
    React.createElement(TableCell, { testID: 'test-id-3f97e4f0-3ce2-2bd2-c563-68498c8de11b' },
        React.createElement(View, { testID: 'test-id-7730b3cd-3b25-93b3-e1d5-6e7c5604e4dc', style: Styles.RightAligned }, value !== undefined && value !== null ? React.createElement(SumText, { testID: 'test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca', value: value, currency: currency && currency.code || '' }) :
            React.createElement(Text, { testID: 'test-id-82e1cb69-1668-a6a2-918d-08e770f17158' }, 'Нет данных')))));
const PlainText = (a) => React.createElement(Text, { testID: 'test-id-465c98b8-b788-1160-005c-33dea8f52283', style: Styles.plain }, a);
const BoldText = (a) => React.createElement(Text, { testID: 'test-id-f29b8d29-55e7-1f63-1d4e-ae4196512d92', style: Styles.bold }, a);
const RedText = (a) => React.createElement(Text, { testID: 'test-id-315c8825-0e2f-abf9-cd31-ad83b79c4fee', style: Styles.red }, a);
const RedBoldText = (a) => React.createElement(Text, { testID: 'test-id-4a22d850-7583-1ea8-48b6-65f33934e5b0', style: Styles.boldRed }, a);
const detectFirstLineLabel = (props) => {
    if (props.currentTab == Enums.LimitTab.Used) {
        return 'Прогнозное использование совокупного лимита';
    }
    if (props.currentTab == Enums.LimitTab.Unused) {
        return 'Неиспользованный совокупный лимит';
    }
    if (props.currentTab == Enums.LimitTab.Total) {
        if (props.currentTotalTab == Enums.LimitTotalTab.Estimated) {
            return 'Расчетное значение совокупного лимита';
        }
        return 'Утвержденное значение совокупного лимита';
    }
    return '';
};
const detectLimitRow = (currentTotalTab, currentTab, limit) => {
    if (currentTab == Enums.LimitTab.Used) {
        return limit.used;
    }
    if (currentTab == Enums.LimitTab.Unused) {
        return limit.unused;
    }
    if (currentTab == Enums.LimitTab.Total) {
        if (currentTotalTab == Enums.LimitTotalTab.Estimated) {
            return limit.total;
        }
        return limit.totalApproved;
    }
    return limit.total;
};
const _renderRows = (props) => {
    const limit = detectLimitRow(props.currentTotalTab, props.currentTab, props.limit);
    return ([_renderRow(detectFirstLineLabel(props), limit.amount, props.limit.currency, limit.amount && limit.amount < 0 ? RedBoldText : BoldText),
        _renderRow('На риск по текущей деятельности', limit.operationalRisk, props.limit.currency),
        _renderRow('На унифицированные операции', limit.unifiedTransactions, props.limit.currency),
        _renderRow('На проектное финансирование', limit.projectFinancing, props.limit.currency),
        _renderRow('На безрисковые операции', limit.risklessTransactions, props.limit.currency),
        _renderRow('На стратегический риск', limit.strategicRisk, props.limit.currency),
        _renderRow('На риск торгуемых операций', limit.tradeRiskTransactions, props.limit.currency),
        _renderRow('На портфельный риск', limit.portfolioRisk, props.limit.currency),
    ]);
};
const getTabSelectorValue = (value) => {
    switch (value) {
        case 0:
            return 'Total';
        case 1:
            return 'Used';
        case 2:
            return 'Unused';
        default:
            return 'Total';
    }
};
const getTotalTabSelectorValue = (value) => {
    switch (value) {
        case 0:
            return 'Approved';
        case 1:
            return 'Estimated';
        default:
            return 'Approved';
    }
};
const getTable = (props) => (React.createElement(View, { testID: 'test-id-cda75cdc-53c1-80f4-388c-c7e684c9d4f3', style: Styles.Container },
    React.createElement(View, { testID: 'test-id-b788fb4a-7b8a-3d2f-dbb1-7f1c482afd31', style: Styles.TabSelectorWrapper },
        React.createElement(TabSelector, { testID: 'test-id-a9a23b80-5f2c-e624-42e4-2045ac9151f1', style: Styles.TabSelectorWide, value: getTabSelectorValue(props.currentTab), onChange: (index) => {
                props.performChangeTab(index, index);
            } },
            React.createElement(OptionItem, { testID: 'test-id-0c5fcef0-382d-e893-cc9a-02e4150b7696', value: 'Total', title: '\u0421\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u044B\u0439' }),
            React.createElement(OptionItem, { testID: 'test-id-a4519f4b-06ec-547d-0f85-46b03e72d023', value: 'Used', title: '\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435' }),
            React.createElement(OptionItem, { testID: 'test-id-eda4eb0a-b7e0-f3dd-a7cf-065df9d8248c', value: 'Unused', title: '\u041D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439' }))),
    props.currentTab == Enums.LimitTab.Total ?
        React.createElement(View, { testID: 'test-id-55f714d2-c7d1-686a-289c-da2032443fcd', style: Styles.TabSelectorWrapper },
            React.createElement(TabSelector, { testID: 'test-id-c9c8638d-a6e1-636e-7dd0-e14e0e80c044', style: Styles.TabSelector, value: getTotalTabSelectorValue(props.currentTotalTab), onChange: (index) => {
                    props.performChangeTotalTab(index, index);
                } },
                React.createElement(OptionItem, { testID: 'test-id-42670174-66e8-dc38-17b4-b6f36263fd77', value: 'Approved', title: '\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043D\u044B\u0439' }),
                React.createElement(OptionItem, { testID: 'test-id-4bf65a19-17c4-1ef2-e2dd-273809207fe7', value: 'Estimated', title: '\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439' }))) : null,
    props.limitError ? getErrorPanel(props) : null,
    props.limitFetching ?
        React.createElement(View, { testID: 'test-id-74a6ec66-892c-9aca-d391-387f855150cd', style: Styles.LoaderWrapper },
            React.createElement(Loader, { testID: 'test-id-74a6ec66-892c-9aca-d391-387f855150cd' })) : (React.createElement(Table, { testID: 'test-id-91839084-fb24-20d3-ca2a-40272f0d4ef3' },
        React.createElement(TableHead, { testID: 'test-id-eef5fb9a-d82a-050d-200e-1a23a9813e86' },
            React.createElement(TableColumn, { testID: 'test-id-bd390db3-9379-b007-f26d-112b578e2dfa', width: '70%' },
                React.createElement(Text, { testID: 'test-id-9c37a0bd-8f5b-ec6d-8bc9-fe062ebf3016' }, "\u041B\u0438\u043C\u0438\u0442")),
            React.createElement(TableColumn, { testID: 'test-id-50dc7e53-4f3b-fa87-a4f6-a78950901634', align: TableColumnAlignment.RIGHT },
                React.createElement(Text, { testID: 'test-id-a707fc92-591e-8314-48bc-9fc7a0428240' }, "\u0421\u0443\u043C\u043C\u0430 \u043B\u0438\u043C\u0438\u0442\u0430 \u0432 \u0440\u0443\u0431\u043B\u044F\u0445"))),
        React.createElement(TableBody, { testID: 'test-id-a01bc14f-cdab-1d81-c1bb-11e6fc11fe6d' }, _renderRows(props))))));
const getContent = (props) => (React.createElement(View, { testID: 'test-id-42d3fd8e-3971-b228-f95e-d4b224fc983e', style: Styles.main },
    React.createElement(View, { testID: 'test-id-419eaf28-bd0b-ea0f-aed2-c00d32b0db9b', style: Styles.Header },
        React.createElement(H1, { testID: 'test-id-475f2749-4db6-f338-6a04-ddc26c5a9434' }, props.currentCustomerManaged.name),
        React.createElement(Text, { testID: 'test-id-1e204b8b-f5fe-7e11-388c-eb5399d2a93e', style: Styles.SmallGrey }, props.currentCustomerManaged.organizationType.value)),
    React.createElement(View, { testID: 'test-id-0f410bb1-5a5f-dc61-28d3-512cbed6d111', style: Styles.TabWrapper }, getTable(props))));
const panel = (props) => (React.createElement(View, { testID: 'test-id-8b280437-85ce-de55-ef7e-a87843dc0e66', style: Styles.PanelContainer },
    React.createElement(SplitPanel, { testID: 'test-id-f1eac1f3-8b35-0afd-077b-3a2e63cf5a4d', id: 'limitsPanel' },
        React.createElement(ContentPanel, { testID: 'test-id-740fc8af-f970-cdca-3e3a-241368e1417e' },
            React.createElement(Page, { testID: 'test-id-b58b52cd-f930-da89-9bde-0fa7d4f9c5d5', scrollEnabled: false, content: getContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-e2a828a1-7ad2-8aaa-fdf4-2513812a82ee' },
                    React.createElement(NavigationBackButton, { testID: 'test-id-41f6f18e-f447-8577-b60f-4ce13252fed1', title: false, onClick: props.navigateBack })),
                React.createElement(CenterPageHeader, { testID: 'test-id-d1a124eb-0a60-f5c8-bad9-1d0f1fc8e09d' },
                    React.createElement(H2, { testID: 'test-id-39f95248-5b66-2198-fb49-1caa721be5ba' }, "\u041B\u0438\u043C\u0438\u0442\u044B (\u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430)")))),
        React.createElement(AccessoryPanel, { testID: 'test-id-9ea7c4a2-80bb-7b84-3cb9-4f809a01faa1' },
            React.createElement(Page, { testID: 'test-id-e44a523f-5a81-d5c9-03a3-319705ed6517', content: React.createElement(View, { testID: 'test-id-e44a523f-5a81-d5c9-03a3-319705ed6517' }) })))));
const ViewLimit = (props) => (panel(props));
export default ViewLimit;
//# sourceMappingURL=ViewLimit.js.map