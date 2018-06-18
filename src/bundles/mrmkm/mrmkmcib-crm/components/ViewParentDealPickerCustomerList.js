/*
 * Created by Gladkov E.N.
 */
import React from 'react';
import Styles from './styles/ViewParentDealPickerCustomerListStyles';
import { Center, CenterPageHeader, ContentPanel, H2, LeftPageHeader, Loader, NavigationBackButton, NavigationIconButton, NavigationIconButtonType, NavigationTextButton, Page, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableRow, Text, View, } from 'ufs-mobile-platform';
import { defaultValues } from '../models/Models';
import { LoaderWithText, RefreshBar, } from 'mrmkmcib-app';
import { EnumsCrm } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
import * as Utils from '../common/Util';
import { SearchInput, KeyboardAvoidingView, RNTableView } from 'mrmkmcib-ui';
const searchClient = (props) => {
    if (props.isParentDealCustomerSearchMode) {
        props.performParentDealCustomerSearchModeDisable();
    }
    else {
        props.performParentDealCustomerSearchModeEnable();
    }
};
const _getRole = (role, organizationType) => (React.createElement(View, { testID: 'test-id-b9af9fe5-1445-b866-95b8-992defb083e2', style: Styles.OrangeLabel },
    React.createElement(Text, { testID: 'test-id-4b9a9ed4-bb71-f215-0f70-9457bf2b9233', style: Styles.OrangeLabelText }, Utils.getRoleByOrganizationTypeString(role, organizationType && organizationType.code ? organizationType.code : null))));
const renderRNTableRow = (props, item, sectionID, rowID, isParentDealCustomerSearchMode) => {
    if (item.id === 'showMoreButton') {
        return (React.createElement(View, null,
            React.createElement(Table, { testID: `ShowMoreButtonRow_1${item.id}` },
                React.createElement(TableBody, { testID: `ShowMoreButtonRow_2${item.id}` },
                    React.createElement(TableRow, { testID: `ShowMoreButtonRow_3${item.id}`, key: `ShowMoreButtonRow_${rowID}` },
                        React.createElement(TableCell, { testID: `ShowMoreButtonRow_4${item.id}` },
                            React.createElement(View, { testID: `ShowMoreButtonRow_5${item.id}`, style: Styles.ShowMoreWrapper },
                                React.createElement(View, { testID: `ShowMoreButtonRow_6${item.id}`, style: Styles.ShowMoreRow },
                                    React.createElement(NavigationTextButton, { testID: `ShowMoreButtonRow_7${item.id}`, title: 'Загрузить еще клиентов', onExecute: props.performCustomerListAppend.bind(null) })))))))));
    }
    return (React.createElement(View, null,
        React.createElement(Table, { testID: `_ClientListRow_1${item.id}` },
            React.createElement(TableBody, { testID: `_ClientListRow_2${item.id}` },
                React.createElement(TableRow, { testID: `_ClientListRow_3${item.id}`, key: item.id, onClick: props.navigateToParentDealDealListScreen.bind(null, item) },
                    React.createElement(TableCell, { testID: `_ClientListRow_4${item.id}` },
                        React.createElement(View, { testID: `_ClientListRow_5${item.id}`, style: Styles.InlineWrapper },
                            React.createElement(View, { testID: `_ClientListRow_6${item.id}`, style: Styles.flex },
                                React.createElement(View, { testID: `_ClientListRow_7${item.id}`, style: Styles.TopRow },
                                    item.role.value ? _getRole(item.role.value, item.organizationType) : null,
                                    React.createElement(Text, { testID: `_ClientListRow_8${item.id}`, numberOfLines: 2, style: Styles.OrgType }, item.organizationType.value)),
                                React.createElement(View, { testID: `_ClientListRow_9${item.id}`, style: Styles.BottomRow },
                                    React.createElement(Text, { testID: `_ClientListRow_10${item.id}`, style: Styles.Name }, item.name))))))))));
};
const renderRNTable = (props) => {
    let customerList = (props.isParentDealCustomerSearchMode ? props.parentDealCustomerSearchList.data : props.parentDealCustomerList.data).slice();
    if (customerList.length > 0 && !customerList.find((item) => item.id === 'showMoreButton')) {
        if ((!props.isParentDealCustomerSearchMode && props.parentDealCustomerList && !props.parentDealCustomerList.isCompleted) ||
            (props.isParentDealCustomerSearchMode && props.parentDealCustomerSearchList && !props.parentDealCustomerSearchList.isCompleted)) {
            customerList.push(Object.assign({}, defaultValues.CustomerManaged, { id: 'showMoreButton' }));
        }
    }
    if (props.isParentDealCustomerAppendInProgress || props.isParentDealCustomerSearchAppendInProgress) {
        customerList = customerList.filter((item) => item.id != 'showMoreButton');
    }
    return (React.createElement(View, { testID: 'test-id-f28d3cee-edee-8319-31c4-c1142b654b5a', style: Styles.flex },
        React.createElement(RNTableView, { testID: 'test-id-4aefd1b6-89a9-d7e7-0b1b-62e84dcb42de', items: customerList, rowHasChanged: (r1, r2) => {
                return r1 != r2;
            }, renderRow: (item, sectionID, rowID) => renderRNTableRow(props, item, sectionID, rowID, props.isParentDealCustomerSearchMode) })));
};
const getRefreshBar = (props) => {
    return (props.isRefreshBarVisible ?
        React.createElement(RefreshBar, { testID: 'test-id-fef43946', performRefresh: props.performFlush, date: props.customerManagedListCachedDate })
        :
            null);
};
const getTable = (props) => {
    if (props.isParentDealCustomerSearchMode) {
        if (props.isParentDealCustomerSearchInProgress) {
            return getLoader();
        }
        let error = null;
        if (!props.parentDealCustomerSearchList.isCompleted && props.parentDealCustomerSearchList.data && props.parentDealCustomerSearchList.data.length > 0) {
            error = 'Найдено слишком много записей. Уточните поисковый запрос';
        }
        return (React.createElement(View, { testID: 'test-id-719b3bc8-0426-e1e3-4e46-912d80077fbd', style: Styles.main },
            error ?
                React.createElement(View, { style: Styles.longListErrorTextWrapper },
                    React.createElement(Text, { testID: 'errorText', style: Styles.longListErrorText }, error)) :
                null,
            React.createElement(View, { testID: 'test-id-0d5afb25-98c5-1f24-6c8e-f3cfae84sfg7', style: Styles.searchContainer },
                renderRNTable(props),
                props.isParentDealCustomerSearchAppendInProgress ?
                    React.createElement(Center, { testID: 'test-id-f8f9bc1f-b0d0-0d1f-4a6c-b65cdb714e7c' },
                        React.createElement(LoaderWithText, { testID: 'test-id-f8f9bc1f-b0d0-0d1f-4a6c-b65cdb714e7c', text: 'Загрузка клиентов' })) :
                    null)));
    }
    if (props.isParentDealCustomerRefreshInProgress && props.parentDealCustomerList && props.parentDealCustomerList.data && props.parentDealCustomerList.data.length > 0) {
        return (React.createElement(View, { testID: 'test-id-206c6e20-8e31-1fb5-d44b-209e4d4bca49', style: Styles.main },
            props.isParentDealCustomerRefreshInProgress ? React.createElement(Center, { testID: 'test-id-f3efc702-6150-b2f5-b173-2a6df3b9c2e4' },
                React.createElement(Loader, { testID: 'test-id-f3efc702-6150-b2f5-b173-2a6df3b9c2e4' })) : null,
            renderRNTable(props)));
    }
    if (props.isParentDealCustomerRefreshInProgress) {
        return getLoader();
    }
    return (React.createElement(View, { testID: 'test-id-viewAppCRM-table-of-clients' },
        React.createElement(View, { testID: 'test-id-0d5afb25-98c5-1f24-6c8e-f3cfae84c2f7', style: Styles.container },
            renderRNTable(props),
            props.isParentDealCustomerAppendInProgress ? React.createElement(Center, { testID: 'test-id-cfd631c3-ef53-a099-3085-4bad73afbbbe' },
                React.createElement(Loader, { testID: 'test-id-cfd631c3-ef53-a099-3085-4bad73afbbbe' })) : null),
        getRefreshBar(props)));
};
const getTableContent = (props) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: [Styles.flex, Styles.maxHeightFull], keyboardVerticalOffset: 0, style: Styles.flex }, getTable(props)));
const getLeftPageHeader = (props) => {
    if (props.isParentDealCustomerSearchMode) {
        return (React.createElement(LeftPageHeader, { testID: 'test-id-68da025c-557a-0a1a-8408-0b7600ca435812123123' },
            React.createElement(View, { testID: 'test-id-68da025c-557a-0a1a-8408-0b7600ca4358', style: Styles.LeftPageHeaderContainer }, React.createElement(SearchInput, { value: props.parentDealCustomerInputSearch, placeholder: 'Название клиента', onChange: props.performParentDealCustomerInputSearch.bind(null), onReturnKeyPressed: props.performParentDealCustomerSearch.bind(null), onCancel: searchClient.bind(null, props), autoFocus: true, drawBottomBorder: true }))));
    }
    else {
        return (React.createElement(LeftPageHeader, { testID: 'test-id-471537c6-88eb-e661-4bae-ad02466c93d9' },
            React.createElement(NavigationBackButton, { testID: 'test-id-c4835204-55fd-87b4-e9fb-6d994a91bf13', title: false, onClick: props.navigateBack.bind(null) }),
            React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-ViewMemberList-3` },
                React.createElement(NavigationTextButton, { testID: `test-id-ViewMemberList-4`, title: props.dealEditorMode === Enums.DealEditorMode.CreateMode ? 'Новая сделка' : 'Редактирование сделки', onExecute: props.navigateBack.bind(null) }))));
    }
};
const getRightPageHeader = (props) => {
    if (props.isParentDealCustomerSearchMode) {
        return (React.createElement(RightPageHeader, { testID: 'test-id-a726b522-2a30-b014-3e71-f529198c7a83' }));
    }
    else {
        return (React.createElement(RightPageHeader, { testID: 'test-id-3be30542-8248-232a-1609-1ac78298a970' },
            React.createElement(NavigationIconButton, { testID: 'test-id-52f37e6f-4140-3e16-0e49-f9a4f1129710', type: NavigationIconButtonType.SEARCH, onExecute: searchClient.bind(null, props) })));
    }
};
const getCenterPageHeader = (props) => {
    if (props.isParentDealCustomerSearchMode) {
        return (React.createElement(CenterPageHeader, { testID: 'test-id-f0b5ad2b-f9bd-6a7d-e305-9008abeca791' }));
    }
    else {
        return (React.createElement(CenterPageHeader, { testID: 'test-id-0f266ce2-cb18-312f-39d2-60d8487c74a6' },
            React.createElement(H2, { testID: 'test-id-d4334e92-1315-7e66-28cc-d651604fd80e' }, `Выбор клиента${props.parentDealPickerMode === Enums.ParentDealPickerMode.ParentDeal ? ' для поиска родительской сделки' : ''}`)));
    }
};
const getLoader = () => (React.createElement(View, { testID: 'test-id-89efd0a3-7aba-8331-8a3a-036537f5755d', style: Styles.LoaderWrapper },
    React.createElement(LoaderWithText, { testID: 'test-id-305bcdca-9a8a-1b8e-6e18-f41bda5f8afe', text: 'Загрузка клиентов' })));
export const ViewParentDealPickerCustomerList = (props) => (React.createElement(View, { testID: 'test-id-7e4091cf-e232-26e9-99de-65c5d91e771b', style: Styles.LoaderWrapper },
    React.createElement(SplitPanel, { testID: 'test-id-fefefc4d-4ae6-904b-7205-79ff47de8227', id: Utils.getNavigationAppCrmDealEditorString(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker_CustomerList) },
        React.createElement(ContentPanel, { testID: 'test-id-ad7b37bf-81f9-f00e-1c0c-9351ce1de8f6', style: Styles.contentPanel },
            React.createElement(Page, { testID: 'test-id-a85684e0-8aa7-1c73-0e4c-14fa8c75fa64', scrollEnabled: false, content: getTableContent(props) },
                getLeftPageHeader(props),
                getCenterPageHeader(props),
                getRightPageHeader(props))))));
export default ViewParentDealPickerCustomerList;
//# sourceMappingURL=ViewParentDealPickerCustomerList.js.map