/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewAppCRMStyles';
import { AccessoryPanel, Button, Center, CenterPageHeader, ContentPanel, H2, Icon, IconType, LeftPageHeader, Loader, NavigationIconButton, NavigationIconButtonType, NavigationTextButton, NavigationBackButton, Page, Panel, PanelType, RadioButton, RadioGroup, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableRow, Text, View, } from 'ufs-mobile-platform';
import { defaultValues } from "../models/Models";
import { LoaderWithText, RefreshBar } from "mrmkmcib-app";
import { Enums } from '../Enums';
import * as Utils from "../common/Util";
import ContainerAgent from '../containers/ContainerAgent';
import ContainerAgentList from '../containers/ContainerAgentList';
import ContainerCustomer from '../containers/ContainerCustomer';
import ContainerGSZ from '../containers/ContainerGSZ';
import ContainerProductList from '../containers/ContainerProductList';
import ContainerDeal from '../containers/ContainerDeal';
import ContainerDealEditor from '../containers/ContainerDealEditor';
import ContainerLimit from '../containers/ContainerLimit';
import ContainerProduct from '../containers/ContainerProduct';
import ContainerProductCredit from '../containers/ContainerProductCredit';
import ContainerDealAttachments from '../containers/ContainerDealAttachments';
import { ErrorModal } from 'mrmkmcib-app';
import ContainerOccasionList from '../containers/ContainerOccasionList';
import { SearchInput, IconView, KeyboardAvoidingView, RNTableView } from 'mrmkmcib-ui';
const searchClient = (props) => {
    if (props.isSearchMode) {
        props.performSearchModeDisable();
    }
    else {
        props.performSearchModeEnable();
    }
};
const _getRole = (role, organizationType) => (React.createElement(View, { testID: 'test-id-b9af9fe5-1445-b866-95b8-992defb083e2', style: Styles.OrangeLabel },
    React.createElement(Text, { testID: 'test-id-4b9a9ed4-bb71-f215-0f70-9457bf2b9233', style: Styles.OrangeLabelText }, Utils.getRoleByOrganizationTypeString(role, organizationType && organizationType.code ? organizationType.code : null))));
export const _getLock = () => (React.createElement(View, { testID: 'test-id-4891fdbb-c491-b05b-1485-dd70ed87cef6', style: Styles.Lock },
    React.createElement(IconView, { testID: 'test-id-4891fdbb-c491-b05b-1485-dd70ed87cef6-icon', type: 'lock', disabled: false })));
const _renderTableRows = (props) => {
    let customerList = (props.isSearchMode ? props.customerSearchList.data : props.customerManagedList.data).slice();
    if (customerList.length > 0 && !customerList.find(item => item.id == 'showMoreButton')) {
        customerList.push(Object.assign({}, defaultValues.Customer, { id: 'showMoreButton' }));
    }
    let resultList = customerList.map((item, i) => {
        if (item.id === 'showMoreButton') {
            return (React.createElement(TableRow, { testID: 'test-id-05a057da-c97e-875d-ad37-049225f4706b', key: `ShowMoreButtonRow_${i}` },
                React.createElement(TableCell, { testID: 'test-id-140c9351-e035-bcb4-3ab8-ae1de2fda9f3' },
                    React.createElement(View, { testID: 'test-id-59c08134-963c-ab12-8b16-eff1874357fd', style: Styles.InlineWrapper },
                        React.createElement(View, { testID: 'test-id-f73cc935-14fa-396c-6161-2433f63c7651', style: Styles.ShowMoreRow },
                            React.createElement(Button, { testID: 'test-id-dd31b152-702e-509c-0763-b761613c7c5e', onExecute: () => {
                                    props.isSearchMode ? props.performCustomerSearchListAppend() : props.performCustomerManagedListAppend();
                                } },
                                React.createElement(Text, { testID: 'test-id-f1c824ae-478a-5c99-105f-d9496faa7421' }, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435")))))));
        }
        return (React.createElement(TableRow, { testID: 'test-id-8d288c9c-4bf2-5632-c46d-fa94a675e1a9', key: item.id, onClick: () => {
                props.performCustomerOpenOnce(item);
            } },
            React.createElement(TableCell, { testID: 'test-id-f8dc75d8-12c2-c66f-f925-21c7879e1170' },
                React.createElement(View, { testID: 'test-id-acc355de-c017-bb99-d3e6-5783966e066a', style: Styles.InlineWrapper },
                    React.createElement(View, { testID: 'test-id-fec09652-c37a-be96-d2c5-59eff6dc6649', style: Styles.flex },
                        React.createElement(View, { testID: 'test-id-a73c35e4-3135-c5a5-99c6-417ae6f1f308', style: Styles.TopRow },
                            Utils.userInMemberTeam(props.currentUser, item) ? null : _getLock(),
                            item.role.value ? _getRole(item.role.value, item.organizationType) : null,
                            React.createElement(Text, { testID: 'test-id-1b960aa4-01b5-1e26-693e-6498408109be', style: Styles.OrgType }, Utils.getOrganizationTypeValue(item.organizationType && item.organizationType.value, item.category && item.category.code))),
                        React.createElement(View, { testID: 'test-id-c0f2cccf-21a4-d54a-5171-9cdf7f88f05b', style: Styles.BottomRow },
                            React.createElement(Text, { testID: 'test-id-b1a004a6-c8fd-c4dd-8448-78c0ba337398', style: Styles.Name }, item.name))),
                    React.createElement(Icon, { testID: 'test-id-3afb07b7-a6d6-65b4-fb67-921c18904667', disabled: true, type: IconType.MrmLink })))));
    });
    return resultList;
};
const renderRNTableRow = (props, item, sectionID, rowID, isSearchMode) => {
    if (item.id === 'showMoreButton') {
        if (isSearchMode) {
            return (
            // если результатов поиска меньше 10 => не отображать кнопку "Загрузить еще"
            props.customerSearchList.data.length > 9 ?
                React.createElement(Table, { testID: `ShowMoreButtonRow_1${item.id}` },
                    React.createElement(TableBody, { testID: `ShowMoreButtonRow_2${item.id}` },
                        React.createElement(TableRow, { testID: `ShowMoreButtonRow_3${item.id}`, key: `ShowMoreButtonRow_${rowID}` },
                            React.createElement(TableCell, { testID: `ShowMoreButtonRow_4${item.id}` },
                                React.createElement(View, { testID: `ShowMoreButtonRow_5${item.id}`, style: Styles.ShowMoreWrapper },
                                    React.createElement(View, { testID: `ShowMoreButtonRow_6${item.id}`, style: Styles.ShowMoreRow },
                                        React.createElement(NavigationTextButton, { testID: `ShowMoreButtonRow_7${item.id}`, title: 'Загрузить еще клиентов', onExecute: props.performCustomerListAppend }))))))) :
                null);
        }
        return (React.createElement(Table, { testID: `ShowMoreButtonRow_1${item.id}` },
            React.createElement(TableBody, { testID: `ShowMoreButtonRow_2${item.id}` },
                React.createElement(TableRow, { testID: `ShowMoreButtonRow_3${item.id}`, key: `ShowMoreButtonRow_${rowID}` },
                    React.createElement(TableCell, { testID: `ShowMoreButtonRow_4${item.id}` },
                        React.createElement(View, { testID: `ShowMoreButtonRow_5${item.id}`, style: Styles.ShowMoreWrapper },
                            React.createElement(View, { testID: `ShowMoreButtonRow_6${item.id}`, style: Styles.ShowMoreRow },
                                React.createElement(NavigationTextButton, { testID: `ShowMoreButtonRow_7${item.id}`, title: 'Загрузить еще клиентов', onExecute: props.performCustomerListAppend }))))))));
    }
    return (React.createElement(Table, { testID: `_ClientListRow_1${item.id}` },
        React.createElement(TableBody, { testID: `_ClientListRow_2${item.id}` },
            React.createElement(TableRow, { testID: `_ClientListRow_3${item.id}`, key: item.id, onClick: () => {
                    props.performCustomerOpenOnce(item);
                } },
                React.createElement(TableCell, { testID: `_ClientListRow_4${item.id}` },
                    React.createElement(View, { testID: `_ClientListRow_5${item.id}`, style: [Styles.InlineWrapper, { maxHeight: 50 }] },
                        React.createElement(View, { testID: `_ClientListRow_6${item.id}`, style: Styles.flex },
                            React.createElement(View, { testID: `_ClientListRow_7${item.id}`, style: [Styles.TopRow, { minHeight: 18 }] },
                                Utils.userInMemberTeam(props.currentUser, item) ? null : _getLock(),
                                item.role.value ? _getRole(item.role.value, item.organizationType) : null,
                                React.createElement(Text, { testID: `_ClientListRow_8${item.id}`, numberOfLines: 2, style: Styles.OrgType }, Utils.getOrganizationTypeValue(item.organizationType && item.organizationType.value, item.category && item.category.code))),
                            React.createElement(View, { testID: `_ClientListRow_9${item.id}`, style: Styles.BottomRow },
                                React.createElement(Text, { testID: `_ClientListRow_10${item.id}`, style: Styles.Name }, item.name))),
                        React.createElement(View, { testID: 'test-id-3afb07b7-a6d6-65b4-fb67-921c18904667', style: Styles.TableRowIconWrapper },
                            React.createElement(Button, { testID: `_ClientListRow_11${item.id}`, onExecute: () => {
                                    props.performCustomerOpenOnce(item);
                                } },
                                React.createElement(Icon, { testID: `_ClientListRow_12${item.id}`, type: IconType.MrmLink })))))))));
};
const renderRNTable = (props) => {
    let customerList = (props.isSearchMode ? props.customerSearchList.data : props.customerManagedList.data).slice();
    if (customerList.length > 0 && !customerList.find(item => item.id == 'showMoreButton')) {
        if ((!props.isSearchMode &&
            props.customerManagedList &&
            !props.customerManagedList.isCompleted) ||
            (props.isSearchMode &&
                !props.customerSearchList.isCompleted)) {
            customerList.push(Object.assign({}, defaultValues.Customer, { id: 'showMoreButton' }));
        }
    }
    if (props.appendInProgress || props.searchAppendInProgress) {
        customerList = customerList.filter(item => item.id != 'showMoreButton');
    }
    return (React.createElement(View, { testID: 'test-id-f28d3cee-edee-8319-31c4-c1142b654b5a', style: { flex: 1 } },
        React.createElement(RNTableView, { testID: 'test-id-4aefd1b6-89a9-d7e7-0b1b-62e84dcb42de', items: customerList, rowHasChanged: (r1, r2) => {
                return r1 != r2;
            }, renderRow: (item, sectionID, rowID) => renderRNTableRow(props, item, sectionID, rowID, props.isSearchMode) })));
};
const getRefreshBar = (props) => {
    if (!props.isRefreshBarVisible) {
        return null;
    }
    return (React.createElement(RefreshBar, { testID: 'test-id-fef43946', performRefresh: props.performFlush, date: props.customerManagedListCachedDate }));
};
/**
 * FIXME когда платформенная таблица оживет, заменить RNTableView на вызов newsList
 * @param props
 */
const getTable = (props) => {
    if (props.isSearchMode) {
        if (props.searchInProgress) {
            return getLoader();
        }
        //UFO-23992
        let error = null;
        if (!props.customerSearchList.isCompleted && props.customerSearchList.data && props.customerSearchList.data.length > 0) {
            error = 'Найдено слишком много записей. Уточните поисковый запрос';
        }
        return (React.createElement(View, { testID: 'test-id-719b3bc8-0426-e1e3-4e46-912d80077fbd', style: Styles.main },
            error ?
                React.createElement(View, { style: Styles.longListErrorTextWrapper },
                    React.createElement(Text, { testID: 'errorText', style: Styles.longListErrorText }, error)) :
                null,
            React.createElement(View, { testID: 'test-id-0d5afb25-98c5-1f24-6c8e-f3cfae84sfg7', style: Styles.searchContainer },
                renderRNTable(props),
                props.searchAppendInProgress ?
                    React.createElement(Center, { testID: 'test-id-f8f9bc1f-b0d0-0d1f-4a6c-b65cdb714e7c' },
                        React.createElement(LoaderWithText, { testID: 'test-id-f8f9bc1f-b0d0-0d1f-4a6c-b65cdb714e7c', text: 'Загрузка клиентов' })) :
                    null)));
    }
    if (props.refreshInProgress && props.customerManagedList && props.customerManagedList.data && props.customerManagedList.data.length > 0) {
        return (React.createElement(View, { testID: 'test-id-206c6e20-8e31-1fb5-d44b-209e4d4bca49', style: Styles.main },
            props.refreshInProgress ? React.createElement(Center, { testID: 'test-id-f3efc702-6150-b2f5-b173-2a6df3b9c2e4' },
                React.createElement(Loader, { testID: 'test-id-f3efc702-6150-b2f5-b173-2a6df3b9c2e4' })) : null,
            renderRNTable(props)));
    }
    if (props.refreshInProgress) {
        return getLoader();
    }
    return (React.createElement(View, { testID: 'test-id-viewAppCRM-table-of-clients' },
        React.createElement(View, { testID: 'test-id-0d5afb25-98c5-1f24-6c8e-f3cfae84c2f7', style: Styles.container },
            renderRNTable(props),
            props.appendInProgress ? React.createElement(Center, { testID: 'test-id-cfd631c3-ef53-a099-3085-4bad73afbbbe' },
                React.createElement(Loader, { testID: 'test-id-cfd631c3-ef53-a099-3085-4bad73afbbbe' })) : null),
        getRefreshBar(props)));
};
const getTableContent = (props) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: { flex: 1, maxHeight: 740 }, keyboardVerticalOffset: 0, style: { flex: 1 } }, getTable(props)));
const mapRoleValueToState = (val) => {
    switch (val) {
        case 0:
            return 4;
        case 1:
            return 3;
        case 2:
            return 2;
        case 3:
            return 1;
        default:
            return 4;
    }
};
const mapRoleStateToValue = (val) => {
    switch (val) {
        case 1:
            return '3';
        case 2:
            return '2';
        case 3:
            return '1';
        case 4:
            return '0';
        default:
            return '0';
    }
};
const activeFilterOrganizationStructure = (organizationStructure, memberRole) => {
    switch (memberRole) {
        case 4:
            switch (organizationStructure) {
                case 0:
                    return { org: [], role: [] };
                case 1:
                    return { org: [], role: [Enums.FilterMemberRole.KM] };
                case 2:
                    return { org: [], role: [Enums.FilterMemberRole.GKM] };
                case 3:
                    return { org: [], role: [Enums.FilterMemberRole.GKM] };
                case 5:
                    return { org: [], role: [Enums.FilterMemberRole.KM, Enums.FilterMemberRole.Curator_CA] };
                default:
                    return { org: [], role: [] };
            }
        case 1:
            switch (organizationStructure) {
                case 0:
                    return { org: [Enums.FilterOrganizationStructure.Conglomerate], role: [] };
                case 1:
                    return { org: [], role: [Enums.FilterMemberRole.KM] };
                case 2:
                    return { org: [], role: [Enums.FilterMemberRole.GKM] };
                case 3:
                    return { org: [], role: [Enums.FilterMemberRole.GKM] };
                case 5:
                    return { org: [], role: [Enums.FilterMemberRole.KM] };
                default:
                    return { org: [], role: [] };
            }
        case 3:
            switch (organizationStructure) {
                case 0:
                    return { org: [Enums.FilterOrganizationStructure.Account, Enums.FilterOrganizationStructure.Branch], role: [] };
                case 1:
                    return { org: [Enums.FilterOrganizationStructure.Account, Enums.FilterOrganizationStructure.Branch], role: [Enums.FilterMemberRole.KM] };
                case 2:
                    return { org: [], role: [] };
                case 3:
                    return { org: [], role: [] };
                case 5:
                    return { org: [], role: [Enums.FilterMemberRole.KM, Enums.FilterMemberRole.Curator_CA] };
                default:
                    return { org: [], role: [] };
            }
        case 2:
            switch (organizationStructure) {
                case 0:
                    return { org: [Enums.FilterOrganizationStructure.Holding, Enums.FilterOrganizationStructure.Conglomerate], role: [] };
                case 1:
                    return { org: [], role: [] };
                case 2:
                    return { org: [Enums.FilterOrganizationStructure.Holding], role: [Enums.FilterMemberRole.GKM] };
                case 3:
                    return { org: [Enums.FilterOrganizationStructure.Holding], role: [Enums.FilterMemberRole.GKM] };
                case 5:
                    return { org: [], role: [] };
                default:
                    return { org: [], role: [] };
            }
        default:
            return { org: [], role: [] };
    }
};
const isDisabled = (current, organizationStructure, memberRole, isOrganisation) => {
    const filtersRule = activeFilterOrganizationStructure(organizationStructure, memberRole);
    if (isOrganisation) {
        let rule = filtersRule && filtersRule.org && filtersRule.org.find((item) => (item === current));
        return !!rule;
    }
    else {
        let rule = filtersRule && filtersRule.role && filtersRule.role.find((item) => (item === current));
        return !!rule;
    }
};
const getClientsFilters = (props) => (React.createElement(View, { testID: 'test-id-0e30deeb-75a5-163b-e152-cb82e454f307' },
    React.createElement(RadioGroup, { testID: 'test-id-c0016bbd-5788-d068-15b0-bbbbeb3c4dc7', value: String(props.inputFilterOrganizationStructure), disabled: props.refreshInProgress, onChange: (index, val) => {
            props.performInputFilterOrganizationStructure(Utils.getEnumFilterOrganizationStructure(val));
        } },
        React.createElement(RadioButton, { testID: 'test-id-a0ced8a6-588a-06d6-ac78-ee2bb09a6b3d', value: '0', label: '\u0412\u0441\u0435 \u0442\u0438\u043F\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432', disabled: isDisabled(0, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, true) }),
        React.createElement(RadioButton, { testID: 'test-id-dd9d10a4-f762-11e7-8c3f-9a214cf093ae', value: '5', label: '\u041A\u043E\u043D\u0433\u043B\u043E\u043C\u0435\u0440\u0430\u0442\u044B', disabled: isDisabled(5, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, true) }),
        React.createElement(RadioButton, { testID: 'test-id-9bfacca7-f65b-22b3-7e2c-789071091636', value: '1', label: '\u0425\u043E\u043B\u0434\u0438\u043D\u0433\u0438', disabled: isDisabled(1, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, true) }),
        React.createElement(RadioButton, { testID: 'test-id-e3e84a59-74c2-65fc-0f91-81bf343c6fd9', value: '2', label: '\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430', disabled: isDisabled(2, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, true) }),
        React.createElement(RadioButton, { testID: 'test-id-585a5520-74c9-4de7-743c-e2d71fdb325e', value: '3', label: '\u0424\u0438\u043B\u0438\u0430\u043B\u044B', disabled: isDisabled(3, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, true) })),
    React.createElement(View, { testID: 'test-id-d6df023c-f388-3c5e-ac92-4416781169b0', style: Styles.Spacer }),
    React.createElement(RadioGroup, { testID: 'test-id-d9bda5b2-0abc-2d09-96bd-01f7a370860e', value: mapRoleStateToValue(props.inputFilterMemberRole), disabled: props.refreshInProgress, onChange: (val) => {
            props.performInputFilterMemberRole(mapRoleValueToState(val));
        } },
        React.createElement(RadioButton, { testID: 'test-id-dced4b8e-1577-e038-fc36-34604a47c5e8', value: '0', label: '\u0412\u0441\u0435 \u0440\u043E\u043B\u0438', disabled: isDisabled(4, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, false) }),
        React.createElement(RadioButton, { testID: 'test-id-615ff315-eac0-c4fb-e8af-c7d030d82281', value: '1', label: '\u0413\u041A\u041C', disabled: isDisabled(3, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, false) }),
        React.createElement(RadioButton, { testID: 'test-id-b86d6798-44d8-d746-9da6-7bed4bba3671', value: '2', label: '\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440', disabled: isDisabled(2, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, false) }),
        React.createElement(RadioButton, { testID: 'test-id-a65963e9-89f0-5161-d205-779c7ac1290a', value: '3', label: '\u041A\u0443\u0440\u0430\u0442\u043E\u0440 \u0426\u0410', disabled: isDisabled(1, props.inputFilterOrganizationStructure, props.inputFilterMemberRole, false) }))));
const getLeftPageHeader = (props) => {
    if (props.isSearchMode) {
        return (React.createElement(LeftPageHeader, { testID: 'test-id-68da025c-557a-0a1a-8408-0b7600ca435812123123' },
            React.createElement(View, { testID: 'test-id-68da025c-557a-0a1a-8408-0b7600ca4358', style: Styles.LeftPageHeaderContainer },
                React.createElement(SearchInput, { value: props.inputSearch, placeholder: 'Название клиента', onChange: props.performInputSearch, onReturnKeyPressed: props.performSearch, onCancel: () => {
                        searchClient(props);
                    }, autoFocus: true, drawBottomBorder: true }))));
    }
    else {
        return (React.createElement(LeftPageHeader, { testID: 'test-id-471537c6-88eb-e661-4bae-ad02466c93d9' }));
    }
};
const getRightPageHeader = (props) => {
    if (props.isSearchMode) {
        return (React.createElement(RightPageHeader, { testID: 'test-id-a726b522-2a30-b014-3e71-f529198c7a83' }));
    }
    else {
        return (React.createElement(RightPageHeader, { testID: 'test-id-3be30542-8248-232a-1609-1ac78298a970' },
            React.createElement(NavigationIconButton, { testID: 'test-id-52f37e6f-4140-3e16-0e49-f9a4f1129710', type: NavigationIconButtonType.SEARCH, onExecute: () => {
                    searchClient(props);
                } })));
    }
};
const getCenterPageHeader = (props) => {
    if (props.isSearchMode) {
        return (React.createElement(CenterPageHeader, { testID: 'test-id-f0b5ad2b-f9bd-6a7d-e305-9008abeca791' }));
    }
    else {
        return (React.createElement(CenterPageHeader, { testID: 'test-id-0f266ce2-cb18-312f-39d2-60d8487c74a6' },
            React.createElement(H2, { testID: 'test-id-d4334e92-1315-7e66-28cc-d651604fd80e' }, "\u041C\u043E\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B")));
    }
};
const getLoader = () => (React.createElement(View, { testID: 'test-id-89efd0a3-7aba-8331-8a3a-036537f5755d', style: Styles.LoaderWrapper },
    React.createElement(LoaderWithText, { testID: 'test-id-305bcdca-9a8a-1b8e-6e18-f41bda5f8afe', text: 'Загрузка клиентов' })));
// const getLoader = () => (
//     <KeyboardAvoidingView behavior={'position'}
//                           contentContainerStyle={{flex: 1, maxHeight: 740}}
//                           keyboardVerticalOffset={0}
//                           style={{flex: 1}}>
//         <View style={Styles.LoaderKeyboardWrapper}>
//             <Loader testID='test-id-305bcdca-9a8a-1b8e-6e18-f41bda5f8afe' />
//         </View>
//     </KeyboardAvoidingView>
//
// )
const getErrorText = (props) => {
    if (props.refreshError) {
        return props.refreshError;
    }
    if (props.searchError) {
        return props.searchError;
    }
    if (props.searchAppendError) {
        return props.searchAppendError;
    }
    if (props.appendError) {
        return props.appendError;
    }
    return { comment: 'комментарий', message: 'сообщение' };
};
const getErrorStyle = (props) => {
    if ((props.isSearchMode && props.customerSearchList.data.length == 0) || (!props.isSearchMode && props.customerManagedList.data.length == 0)) {
        return Styles.ErrorWrapperCenter;
    }
    return Styles.ErrorWrapper;
};
const getSearchErrorTitle = (props) => {
    if (props.customerSearchError) {
        return '';
    }
    else {
        return props.searchError && props.searchError.comment ? props.searchError.comment : 'Не удалось загрузить данные';
    }
};
const getErrorModalProps = (props) => {
    if (props.isSearchMode) {
        if (props.searchError) {
            return {
                title: getSearchErrorTitle(props),
                cancel: props.performChangeDisplayErrorModalAppCRM,
                repeat: props.performSearch,
                cacheDate: null,
                message: props.searchError && props.searchError.message ? props.searchError.message : '',
            };
        }
        if (props.searchAppendError) {
            return {
                title: props.searchError && props.searchAppendError.comment ? props.searchAppendError.comment : 'Не удалось загрузить данные',
                cancel: props.performChangeDisplayErrorModalAppCRM,
                repeat: props.performSearch,
                cacheDate: null,
                message: props.searchAppendError && props.searchAppendError.message ? props.searchAppendError.message : ''
            };
        }
        return {
            title: "Не удалось загрузить данные",
            cancel: props.performChangeDisplayErrorModalAppCRM,
            repeat: () => { },
            cacheDate: null,
            message: "Не удалось загрузить данные"
        };
    }
    if (props.refreshError) {
        return {
            title: "Не удалось загрузить данные",
            cancel: props.performChangeDisplayErrorModalAppCRM,
            repeat: props.performCustomerManagedListRefresh,
            cacheDate: null,
            message: props.refreshError && props.refreshError.message ? props.refreshError.message : '',
        };
    }
    if (props.appendError) {
        return {
            title: "Не удалось загрузить данные",
            cancel: props.performChangeDisplayErrorModalAppCRM,
            repeat: props.performCustomerManagedListRefresh,
            cacheDate: null,
            message: props.appendError && props.appendError.message ? props.appendError.message : ''
        };
    }
    return defaultValues.ErrorModalWindow;
};
const getErrorModalWindow = (props) => {
    const errorModalProps = getErrorModalProps(props);
    return (React.createElement(ErrorModal, { testID: `test-id-modal-error-activity-card-${new Date().getTime()}`, isVisible: props.isVisibleModalAppCRMError, titleText: errorModalProps.title || "Произошла ошибка", messageText: errorModalProps.message || "Попробуйте снова или обратитесь в службу поддержки.", cancel: () => errorModalProps.cancel(), repeat: () => errorModalProps.repeat(props), cacheDate: errorModalProps.cacheDate || new Date() }));
};
const getNavigationErrorView = (props) => {
    return (React.createElement(View, { testID: 'test-id-38c5bab1-8fb5-4411-91b3-c243adc48837', style: Styles.errorContainer },
        React.createElement(View, { testID: 'test-id-d75fce09-95e5-401b-9a9c-b269c53f288b', style: Styles.innerWrapper },
            React.createElement(SplitPanel, { testID: 'test-id-86f33bdc-0926-4ed1-926b-f1eaad2dec4a', id: 'mainTabHolderDetailView-d6559395-08fb-4ae0-9bd4-444c9f5c331b' },
                React.createElement(ContentPanel, { testID: 'test-id-a2e69dee-f65f-41a4-b067-62ca2c09fca4', style: { backgroundColor: '#fff' } },
                    React.createElement(Page, { testID: 'test-id-bce4bbb4-ab95-451d-901e-699013642f9b', scrollEnabled: false, content: React.createElement(View, null,
                            React.createElement(Panel, { testID: 'test-id-92262660-dbca-4cb2-932f-a6c8debcb496', type: PanelType.WARNING_BOX, header: props.navigationErrorMessage || '', headerMedia: React.createElement(Button, { testID: 'test-id-8468cb6c-3489-4b65-9f8b-b579ca99c7d', onExecute: props.performNavigationReload },
                                    React.createElement(Text, { testID: 'test-id-45fb80be-7b84-4c27-bb1e-6f25932019bc' }, 'Повторить')), hasIcon: true },
                                React.createElement(View, { testID: 'test-id-670e915a-184d-4b4a-9b96-e3755e86726b', style: Styles.flex }))) },
                        React.createElement(CenterPageHeader, { testID: 'test-id-c306ef59-7d36-408a-a123-7dc94cb84953' },
                            React.createElement(H2, { testID: 'test-id-17472da8-7ef3-42cf-8a3f-2626bee46a75' }, Utils.navigationErrorTitle(props.navigateStartData))),
                        React.createElement(LeftPageHeader, { testID: 'test-id-58f5d113-3cdd-49f2-8c6b-91ae4fa1778e' },
                            React.createElement(NavigationBackButton, { testID: 'test-id-8f899630-feaf-438c-80ab-bfe582720b30', title: false, onClick: props.performNavigateBack }),
                            React.createElement(NavigationTextButton, { testID: 'test-id-8f899630-feaf-438c-80ab-bfe582720b30', title: 'Уведомления', onExecute: props.performNavigateBack }))))))));
};
const getMainPage = (props) => (React.createElement(View, { testID: 'test-id-7e4091cf-e232-26e9-99de-65c5d91e771b', style: Styles.LoaderWrapper },
    React.createElement(SplitPanel, { testID: 'test-id-fefefc4d-4ae6-904b-7205-79ff47de8227', id: Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_CustomerList) },
        React.createElement(ContentPanel, { testID: 'test-id-ad7b37bf-81f9-f00e-1c0c-9351ce1de8f6', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-a85684e0-8aa7-1c73-0e4c-14fa8c75fa64', scrollEnabled: false, content: getTableContent(props) },
                getLeftPageHeader(props),
                getCenterPageHeader(props),
                getRightPageHeader(props))),
        React.createElement(AccessoryPanel, { testID: 'test-id-509cc737-8ac6-ef62-4062-85c0ad0ed6b5' },
            React.createElement(Page, { testID: 'test-id-de26f131-b554-e1b7-e383-9736d5b34391', content: getClientsFilters(props) },
                React.createElement(CenterPageHeader, { testID: 'test-id-1551b9b5-811e-cf96-23e5-a88ae4c10a10' },
                    React.createElement(H2, { testID: 'test-id-e394ec3c-c4fb-f9bc-2261-c218e7f947d2' }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B"))))),
    props.isVisibleModalAppCRMError ? getErrorModalWindow(props) : null));
const getKeyboardAvoidingContainer = (child) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: { flex: 1, maxHeight: 740 }, keyboardVerticalOffset: 0, style: { flex: 1 } }, child));
const ViewAppCRM = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-98867497862308473092' },
    props.navigationInProgress &&
        React.createElement(View, { testID: 'test-id-45b79a4d-56b4-4458-92b1-906d20547623', style: Styles.loaderWrapper },
            React.createElement(LoaderWithText, { testID: 'test-id-05de89c8-49f7-4097-b7af-4d84947505e2', text: 'Загрузка данных' })),
    (props.navigationErrorMessage != null && props.isNavigation) && getNavigationErrorView(props),
    React.createElement(View, { style: Styles.mainContainer, testID: 'test-id-98867497862308473092' },
        React.createElement(SplitPanel, { id: Utils.getNavigationString(Enums.Navigation.AppCRM), testID: 'test-id-89743987230947823' },
            React.createElement(ContentPanel, { style: { backgroundColor: '#fff' }, testID: 'test-id-2387652389870893274' },
                React.createElement(Page, { scrollEnabled: false, content: getMainPage(props), testID: 'test-id-908273876234234' }),
                React.createElement(Page, { scrollEnabled: false, content: React.createElement(ContainerCustomer, { testID: 'test-id-27f7b899-972b-0aef-091f-8271c27a0c0d' }), testID: 'test-id-98672398470239784' },
                    React.createElement(LeftPageHeader, { testID: 'test-id-983674598634052' })),
                React.createElement(Page, { scrollEnabled: false, content: React.createElement(ContainerGSZ, { testID: 'test-id-27f7b899-972b-0aef-097f-8271c17a0c0d' }), testID: 'test-id-8937836249823764' },
                    React.createElement(LeftPageHeader, { testID: 'test-id-29023989309375' })),
                React.createElement(Page, { testID: 'test-id-27f7b899-972b-0aef-097f-8271c27a0c0d', scrollEnabled: false, content: React.createElement(ContainerProductList, { testID: 'test-id-27f7b899-972b-0aef-097f-8271c27a0c0d' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-129c6e63-ee9b-de28-3e74-28d462475f2e' })),
                React.createElement(Page, { testID: 'test-id-4a2f67c2-89e6-d693-6195-151980eb44c2', scrollEnabled: false, content: React.createElement(ContainerDeal, { testID: 'test-id-4a2f67c2-89e6-d693-6195-151980eb44c2' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-db6a2c42-1765-434d-8d31-12f3e196e2e8' })),
                React.createElement(Page, { testID: 'test-id-c0f61764-8f12-ac07-0295-7ffd0e3ca06e', scrollEnabled: false, content: React.createElement(ContainerDealEditor, { testID: 'test-id-c0f61764-8f12-ac07-0295-7ffd0e3ca06e' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-7dce0a3d-2092-4862-b71c-f794398a8cb5' })),
                React.createElement(Page, { testID: 'test-id-df09aa68-db58-1cb3-326d-a2c7803431a5', scrollEnabled: false, content: React.createElement(ContainerLimit, { testID: 'test-id-df09aa68-db58-1cb3-326d-a2c7803431a5' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-29023989333309375' })),
                React.createElement(Page, { testID: 'test-id-ViewActivity-ContainerOccasionList-Page', scrollEnabled: false, content: React.createElement(SplitPanel, { id: 'ViewActivity-ContainerOccasionList-Page-SplitPanel', testID: 'test-id-89743987230947823' },
                        React.createElement(ContentPanel, { style: { backgroundColor: '#fff' }, testID: 'test-id-2387652389870893274' },
                            React.createElement(Page, { scrollEnabled: false, content: React.createElement(View, { style: Styles.OccasionContainerView, testID: 'test-id-ViewActivity-Activity' },
                                    React.createElement(ContainerOccasionList, { testID: 'test-id-ViewCustomer-ContainerOccasionList' })), testID: 'test-id-908273876234234' }))) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ViewActivity-ContainerOccasionList-LeftPageHeader' })),
                React.createElement(Page, { testID: 'test-id-4a2f67c2-89e6-d693-6195-151980eb44478', scrollEnabled: false, content: React.createElement(ContainerProduct, { testID: 'test-id-1378c9e3-07eb-849b-4593-51dbc97e2d62' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-4a2f675c2-89e6-d693-6195-1544478' })),
                React.createElement(Page, { testID: 'test-id-ViewCustomer-ContainerAgentList-Page', scrollEnabled: false, content: getKeyboardAvoidingContainer(React.createElement(ContainerAgentList, { testID: 'test-id-ViewCustomer-ContainerAgentList' })) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-ViewCustomer-ContainerAgentList-LeftPageHeader' })),
                React.createElement(Page, { testID: 'test-id-20ec4251-eb73-ed23-a743-734f8b743202', scrollEnabled: false, content: React.createElement(ContainerAgent, { testID: 'test-id-20ec4251-eb73-ed23-a743-734f8b743202' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-0dc9dbf9-a0cf-762b-d6e6-86ed8e70b291' })),
                React.createElement(Page, { testID: 'test-id-ww4251-eew13-a743-8b743202', scrollEnabled: false, content: React.createElement(ContainerDealAttachments, { testID: 'test-id-20ec4251-eb73-ed23-a743-734f8b743202' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-0dc9dbf9-a0cf-762b-d6e6-86ed8e70b291' })),
                React.createElement(Page, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-111222000040', scrollEnabled: false, content: React.createElement(ContainerProductCredit, { testID: 'test-id-0d3835c7-cf66-d3ab-bac7-111222000010' }) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-00d835c7-cf66-d3ab-bac7-111222000000' })))))));
export default ViewAppCRM;
//# sourceMappingURL=ViewAppCRM.js.map