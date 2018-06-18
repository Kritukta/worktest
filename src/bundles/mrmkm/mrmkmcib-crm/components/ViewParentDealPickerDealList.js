/*
 * Created by Gladkov E.N.
 */
import React from 'react';
const HEADER_TEXT = 'Выбор сделки';
const NAVIGATE_BACK_BUTTON_TEXT = 'Новая сделка';
const SHOW_CHECKED = true;
import Styles from './styles/ViewParentDealPickerDealListStyles';
import { Button, ContentPanel, LeftPageHeader, NavigationBackButton, CenterPageHeader, H2, Icon, IconType, Loader, NavigationTextButton, Page, Panel, PanelType, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, Text, View, } from 'ufs-mobile-platform';
import { EnumsCrm } from 'mrmkmcib-crm';
import * as Utils from '../common/Util';
import { KeyboardAvoidingView } from 'mrmkmcib-ui';
import { CONVERT_ERROR } from '../models/Converters';
const _tableColumns = (props) => ([
    `Суть`,
    `Стадия\nПлановое закрытие`,
    `Сумма в тысячах\nПродукт`
]);
export const isCredit = (item) => (item.type === EnumsCrm.DealType.Credit);
const myRoleName = (deal) => ((deal.myRole && deal.myRole.value) || '');
const getErrorText = (props) => CONVERT_ERROR(props.parentDealDealListFetchError);
const getErrorPanel = (props) => (React.createElement(View, { testID: 'test-id-702ea3b2-ad7d-c0a2-a144-2dec1ef2704e', style: Styles.ErrorWrapper },
    React.createElement(Panel, { testID: 'test-id-4f23e2b5-856b-7552-783e-8acc5e8a8fc4', type: PanelType.WARNING_BOX, header: 'Данные о сделках не получены', headerMedia: React.createElement(Button, { testID: 'test-id-2c42d9cc-23d1-2001-e938-5dc9b7ef673a', onExecute: props.performParentDealDealListRefresh.bind(null) },
            React.createElement(Text, { testID: 'test-id-19446d19-83a3-2b4a-5a4d-3afd2f0f2bab' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441")), hasIcon: true },
        React.createElement(View, { testID: 'test-id-b69c4705-4949-cf66-e257-9e320ecdf24d', style: Styles.ErrorWrapper },
            React.createElement(Text, { testID: 'test-id-938004d6-b8ec-979c-77d2-5ef9236ec96b' }, getErrorText(props).comment),
            React.createElement(Text, { testID: 'test-id-391449fa-83ff-26ee-b3d2-13c70d058f6f' }, getErrorText(props).message)))));
const getTable = (props) => (React.createElement(View, { style: Styles.TableAreaContainer },
    React.createElement(View, { testID: 'test-id-db967c54-02e9-98e8-d4c2-d17c072643c9', style: Styles.TableContainer }, props.parentDealDealListFetchError ?
        getErrorPanel(props)
        :
            props.isParentDealDealListRefreshInProgress ?
                (React.createElement(View, { testID: 'test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d', style: Styles.LoaderWrapper },
                    React.createElement(Loader, { testID: 'test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d' }),
                    React.createElement(Text, { testID: 'test-id-544d3087b2183b0ade' }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u0441\u0434\u0435\u043B\u043E\u043A")))
                :
                    (React.createElement(View, { testID: 'test-id-f02c825d7be630409d', style: Styles.TableWrapper },
                        React.createElement(Table, { testID: 'test-id-fef887b7-8ca1-b57e-9e51-0ac5b2bbf409', style: Styles.TableCollapsedFix },
                            React.createElement(TableHead, { testID: 'test-id-75635324-3667-0601-408a-5d5d93bfb8ab' },
                                React.createElement(TableColumn, { testID: 'test-id-25b8b2bf-0d0c-9d0e-c69c-ae70d4986321', key: `col-0`, width: '255' },
                                    React.createElement(Text, { testID: 'test-id-e40a586f-40cf-eae5-a739-64895253353b' }, _tableColumns(props)[0])),
                                React.createElement(TableColumn, { testID: 'test-id-95b9a7a1-6bea-f82a-97a9-9d021ec7c742', key: `col-1`, width: '160' },
                                    React.createElement(Text, { testID: 'test-id-a21fd416-1a88-b0cd-f14f-8141a6189b24' }, _tableColumns(props)[1])),
                                React.createElement(TableColumn, { testID: 'test-id-2a94a8f0a98338', align: TableColumnAlignment.RIGHT, key: `col-2`, width: '150' },
                                    React.createElement(Text, { testID: 'test-id-55c5387aac602' }, _tableColumns(props)[2])),
                                React.createElement(TableColumn, { testID: 'test-id-b2a2154d-dbca-394f-c89f-7fef98f78e1f', key: `col-3`, width: '70' })),
                            React.createElement(TableBody, { testID: 'test-id-3f58460f-5ed0-90e7-ed5d-ef9569bbc4ff' }, _renderTableRows(rows(props), props))))))));
const rows = (props) => {
    const mappedData = {
        opened: (rows) => rows.map(item => ({
            id: item.id,
            isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
            first: { top: item.title, bottom: myRoleName(item) },
            second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? Utils.format.date(item.plannedFinishDate) : '-' },
            third: { top: item.sum ? Utils.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: Utils.productLine(item) },
            deal: item,
        }))
    };
    return mappedData.opened(props.parentDealDealList.data);
};
const _renderTableRows = (items, props, forSearch = false) => {
    return items.map((item, i) => (React.createElement(TableRow, { testID: `test-id-dealRow-${item.id}`, key: `dealRow-${i}-${item.id}`, onClick: props.performParentDealDealSelect.bind(null, item.deal) },
        React.createElement(TableCell, { testID: 'test-id-7f47b1bf-a832-8f23-4760-06d0c8267adf' },
            React.createElement(View, { style: Styles.CellContainer },
                React.createElement(View, { testID: 'test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb', style: Styles.CellTopContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', numberOfLines: 3, ellipsizeMode: 'tail', style: Styles.CellTop }, item.first.top)),
                item.first.middle ? React.createElement(View, { testID: 'test-id-dcbf2a-df57719d0cb', style: Styles.CellBottomContainer },
                    React.createElement(Text, { testID: 'test-id-eb76dd52-90e2-adcb', style: Styles.CellBottom }, item.first.middle)) : null)),
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
        SHOW_CHECKED && props.currentDeal.parentDeal && props.currentDeal.parentDeal.id === item.deal.id ?
            React.createElement(TableCell, { testID: 'test-id-7fce7-8cfde477fb5f' },
                React.createElement(View, { testID: `test-id-dealRow-clickable-Icon${item.id}`, style: Styles.RowLinkContainer },
                    React.createElement(Button, { testID: 'test-id-08e4caa-0f22edbfaa59ss' },
                        React.createElement(Icon, { testID: 'test-id-3f3e58f5-b2f755b5200b', type: IconType.MrmDone }))))
            : null)));
};
const getTableContent = (props) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: [Styles.flex, Styles.maxHeightFull], keyboardVerticalOffset: 0, style: Styles.flex }, getTable(props)));
const getLeftPageHeader = (props) => {
    return (React.createElement(LeftPageHeader, { testID: 'test-id-471537c6-88eb-e661-4bae-ad02466c93d9' },
        React.createElement(NavigationBackButton, { testID: 'test-id-c4835204-55fd-87b4-e9fb-6d994a91bf13', title: false, onClick: props.navigateBack.bind(null) }),
        React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-ViewMemberList-3` },
            React.createElement(NavigationTextButton, { testID: `test-id-ViewMemberList-4`, title: NAVIGATE_BACK_BUTTON_TEXT, onExecute: props.navigateBack.bind(null) }))));
};
const getRightPageHeader = (props) => {
    return (React.createElement(RightPageHeader, { testID: 'test-id-3be30542-8248-232a-1609-1ac78298a970' }));
};
const getCenterPageHeader = (props) => {
    return (React.createElement(CenterPageHeader, { testID: 'test-id-0f266ce2-cb18-312f-39d2-60d8487c74a6' },
        React.createElement(H2, { testID: 'test-id-d4334e92-1315-7e66-28cc-d651604fd80e' }, HEADER_TEXT)));
};
export const ViewParentDealPickerDealList = (props) => (React.createElement(View, { testID: 'test-id-7e4091cf-e232-26e9-99de-65c5d91e771b', style: Styles.AppCRMLoaderWrapper },
    React.createElement(SplitPanel, { testID: 'test-id-fefefc4d-4ae6-904b-7205-79ff47de8227', id: Utils.getNavigationAppCrmDealEditorString(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker_DealList) },
        React.createElement(ContentPanel, { testID: 'test-id-ad7b37bf-81f9-f00e-1c0c-9351ce1de8f6', style: Styles.contentPanel },
            React.createElement(Page, { testID: 'test-id-a85684e0-8aa7-1c73-0e4c-14fa8c75fa64', scrollEnabled: true, content: getTableContent(props) },
                getLeftPageHeader(props),
                getCenterPageHeader(props),
                getRightPageHeader(props))))));
export default ViewParentDealPickerDealList;
//# sourceMappingURL=ViewParentDealPickerDealList.js.map