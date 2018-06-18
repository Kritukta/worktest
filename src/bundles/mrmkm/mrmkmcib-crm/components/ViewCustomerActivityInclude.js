/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewCustomerActivityIncludeStyles';
import { Button, IconType, SplitPanel, ContentPanel, Page, H2, Text, Table, TableCell, TableRow, TableBody, View, NavigationTextButton, LeftPageHeader, CenterPageHeader, RightPageHeader, TextInput, Icon, Switch, Label, } from 'ufs-mobile-platform';
import * as util from '../common/Util';
import { LoaderWithText } from "mrmkmcib-app";
import { Enums } from '../Enums';
import ContainerMemberList from "../containers/ContainerMemberList";
import { getFullScreenError } from './shared/ViewFullScreenError';
import { SearchInput } from 'mrmkmcib-ui';
import * as Utils from "../common/Util";
const getRightViewPlaceholder = () => (React.createElement(View, { testID: `${new Date().getTime()}-07d9e53e-dc26-11e7-9296-cec278b6b50a`, style: Styles.emptyRightView }));
const getActivityExecutor = (props) => {
    const executor = props.currentCustomerManaged && props.currentCustomerManaged.memberList ? props.currentCustomerManaged.memberList.data.find((item) => {
        return item.isGeneral;
    }) : null;
    if (executor) {
        return executor.fullName;
    }
    return 'Нет';
};
const getActivityMemberList = (props) => (React.createElement(View, { style: Styles.memberListContent },
    React.createElement(View, { testID: `test-id-d331abfa-a8f9-11e7-abc4-cec278b6b50a`, style: Styles.memberListViewTitle },
        React.createElement(Text, { testID: `test-id-c7e1e9e0-a8f9-11e7-abc4-cec278b6b50a`, style: Styles.memberListTextTitle }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0438")),
    React.createElement(View, { style: Styles.memberListViewPerson },
        React.createElement(Text, { testID: `test-id-activity-deatails-people-row-Agent`, style: Styles.memberListTextPerson }, Array.isArray(props.inputMemberList.data) && props.inputMemberList.data.length > 0 ?
            Utils.getActivityMemberListOutput(props.inputMemberList) :
            Utils.getCustomerActivityExcludeExecutorName(props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                props.currentCustomerManaged : props.currentCustomer, 'Нет'))),
    React.createElement(View, { testID: `test-id-activity-deatails-people-row_6-Team`, style: Styles.memberListViewButton }, props.currentCustomerManaged ?
        null
        :
            React.createElement(Button, { testID: `test-id-activity-deatails-people-row_7-Team`, onExecute: () => props.navigateToMemberListScreenPage() },
                React.createElement(Icon, { testID: `test-id-activity-deatails-people-row_8-Team`, type: IconType.MrmLink })))));
const getMainPage = (props) => {
    if (props.activitySaveError && props.activitySaveError.code) {
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityExclude',
            title: props.activitySaveError.comment,
            description: props.activitySaveError.message,
            onRefresh: props.callPostCustomerActivityIncludeCreate
        });
    }
    if (props.activitySaveInProgress) {
        return React.createElement(LoaderWithText, { text: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438', testID: 'test-id-f82e0e82-78f6-b439-7c6e-667471cd7f66' });
    }
    if (props.inputCustomerFetching) {
        return React.createElement(LoaderWithText, { text: '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432', testID: 'test-id-8bb74f2c-8cce-1cbe-77da-525403868c9a' });
    }
    return (React.createElement(View, { testID: 'test-id-85891f9c-3392-4008-9a77-29df14d182f1', style: Styles.content },
        React.createElement(View, { testID: 'test-id-5420f8d9-98b4-a34d-49d3-89d5170fbd80', style: Styles.contentSectionCustomer },
            React.createElement(View, { testID: 'test-id-9241c500-6476-f256-d539-ec89a0d11893', style: [Styles.selectCustomer, Styles.centered] },
                React.createElement(View, { testID: 'test-id-5420f8d9-98b4-a34d-49d3-89d5170fbd801', style: Styles.fixedWidth },
                    React.createElement(Label, { testID: 'test-id-d0600b9f-aa21-6e71-5445-d6aa8d2063ef', header: '', text: 'Родительская организация', block: true },
                        React.createElement(Text, { testID: 'test-id-00eaeafa-6b03-6e59-049e-b73f14d3cfa9' }, props.inputCustomer && (props.inputCustomer.id != null && props.inputCustomer.id != '') ?
                            props.inputCustomer.name || props.inputCustomer.shortName
                            : 'Выбрать'))),
                React.createElement(Button, { testID: 'test-id-e05f973f-36f9-fd78-2ebc-ab4f584127b0', onExecute: () => {
                        props.navigateToCustomerPickerScreen();
                    } },
                    React.createElement(Icon, { testID: 'test-id-d957d53c-ec52-e532-5116-6b508f27359d', type: IconType.MrmLink })))),
        props.customerActivityIncludeValidationCustomer ?
            React.createElement(Text, { testID: 'test-id-919e2407-8d8d-16c2-f03b-b07a59af51f8', style: Styles.validationError }, props.customerActivityIncludeValidationCustomer) : null,
        React.createElement(View, { testID: 'test-id-f9054051-2a1d-03db-6158-0542ba2b25a4', style: Styles.contentSection },
            React.createElement(Label, { testID: 'test-id-b0a147c1-6b55-2de5-beb6-b203db97b120', header: '', text: 'Дочерняя организация', block: true },
                React.createElement(Text, { testID: 'test-id-a0564233-2a74-2fdf-6051-08f6ef8f702c' }, props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                    props.currentCustomerManaged.name || props.currentCustomerManaged.shortName :
                    props.currentCustomer.name || props.currentCustomer.shortName))),
        React.createElement(View, { testID: 'test-id-e4474026-cd38-e1f7-ac52-a64d21255e86', style: Styles.contentSection },
            React.createElement(Label, { testID: 'test-id-30cac6ef-3222-751e-9e7d-e12e8bddd283', header: '', text: 'Тип задачи', block: true },
                React.createElement(Text, { testID: 'test-id-12b6c205-92f6-9856-9048-2cf2191bffe2' }, 'Включение в организацию'))),
        React.createElement(View, { testID: 'test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1', style: Styles.contentSectionMeaning },
            React.createElement(TextInput, { testID: 'test-id-fb09dbda-80b7-11e7-bb31-be2e44b06b34', value: props.inputComment || "", label: "C\u0443\u0442\u044C", onChange: props.performInputComment, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u0442\u044C", maxLength: 1000 })),
        React.createElement(View, { testID: 'c24893f0-e2e5-4e90-87d3-23e1ddeffed2', style: Styles.contentSection }, getActivityMemberList(props))));
};
const renderCustomerSearchResults = (props) => {
    if (props.searchError) {
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityWzcludeSearch',
            title: props.searchError.comment,
            description: props.searchError.message,
            onRefresh: props.performSearch
        });
    }
    if (props.searchInProgress) {
        return (React.createElement(LoaderWithText, { text: '\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438', testID: 'test-id-1866ce35-7a6d-227f-1a2f-a59b0df9486e' }));
    }
    if (props.inputSearch == null || props.inputSearch === '') {
        return (React.createElement(View, { testID: 'test-id-3a78c10f-5889-9ae5-a749-2f6daae4951b', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-dd8c1231-318b-5e47-b9c1-988310b2eef9', style: Styles.searchNotFoundText }, 'Поиск компании')));
    }
    if (props.inputSearch != null &&
        props.inputSearch !== '' &&
        (props.customerSearchList == null ||
            props.customerSearchList.data == null ||
            props.customerSearchList.data.length == 0)) {
        return (React.createElement(View, { testID: 'test-id-479f1987-d780-7ac1-7928-8812cd99b3c3', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-b9035366-eaa3-e7e1-3f6d-d76866a736aa', style: Styles.searchNotFoundText }, 'Результатов не найдено')));
    }
    return (React.createElement(Table, { testID: 'test-id-91af6387-68d7-879a-cdcd-ebd2811ae7fa' },
        React.createElement(TableBody, { testID: 'test-id-a2fc54e0-0427-ef11-fb34-413e4254f07f' }, props.customerSearchList.data.map((item, index) => {
            return (React.createElement(TableRow, { testID: 'test-id-7a745ad9-805d-9b2d-f66b-fbde67dcbd17', key: `${index}-${item.id}`, onClick: () => {
                    props.performInputCustomer(item);
                } },
                React.createElement(TableCell, { testID: 'test-id-41ba211f-e268-8df9-e9d6-183fa4a6c0a9' },
                    React.createElement(View, { testID: 'test-id-def8bc70-a95a-4ccf-636c-b37be920fdf0', style: Styles.InlineWrapper },
                        React.createElement(View, { testID: 'test-id-e16adb9d-9e2d-d6c0-e52e-a8da719c4e4b', style: Styles.TopRow },
                            item.role && item.role.value ?
                                React.createElement(View, { testID: 'test-id-55e8b7af-1bcb-819c-2a0b-47e9db8e8d21', style: Styles.OrangeLabel },
                                    React.createElement(Text, { testID: 'test-id-2c4acece-9706-cbad-5c15-3b21f51315db', style: Styles.OrangeLabelText }, Utils.getRoleString(item.role.value))) :
                                null,
                            React.createElement(Text, { testID: 'test-id-e0f3d196-9b0b-4a18-fa7b-0a431677feb7', style: Styles.OrgType }, item.organizationType.value)),
                        React.createElement(View, { testID: 'test-id-0e5b7c85-9729-cd05-1556-254665d092ce' },
                            React.createElement(Text, { testID: 'test-id-29309392-941f-45ad-7315-bf83c858fc2b', style: Styles.Name }, item.name))))));
        }))));
};
const renderCustomerSearch = (props) => {
    return (React.createElement(View, { testID: 'test-id-e683f41a-780c-3dd0-3f5f-4e9baae74c8e', style: Styles.content },
        React.createElement(View, { testID: 'test-id-7acd23fe-6e1d-fb9f-05c5-8fb3eebf0699', style: { height: 44, overflow: 'hidden' } },
            React.createElement(SearchInput, { value: props.inputSearch, placeholder: 'Введите название', onChange: props.performInputSearch, onCancel: props.performCancelSearchCustomer, autoFocus: true })),
        React.createElement(View, { testID: 'test-id-b5123b8c-b81a-e095-22b5-c8f532d014d2' },
            React.createElement(Switch, { testID: 'test-id-2e3d3094-a314-09a2-6fdf-cecba5fb486c', checked: props.inputSearchManagedOnly, label: '\u0422\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B', onChange: () => props.performInputSearchManagedOnly(!props.inputSearchManagedOnly) })),
        renderCustomerSearchResults(props)));
};
const getLoader = (text = "") => (React.createElement(LoaderWithText, { text: text, testID: `test-id-${new Date().getTime()}` }));
const getCustomerNoFoundView = () => (React.createElement(View, { testID: 'test-id-226a67ea-d27e-11e7-8941-cec278b6b50a', style: Styles.customerNoFoundView },
    React.createElement(Text, { style: Styles.customerNoFoundText, testID: "test-id-28312092-d27e-11e7-8941-cec278b6b50a" }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
const _getRole = (role, organizationType) => (React.createElement(View, { testID: 'test-id-b9af9fe5-1445-b866-95b8-992defb083e2', style: Styles.OrangeLabel },
    React.createElement(Text, { testID: 'test-id-4b9a9ed4-bb71-f215-0f70-9457bf2b9233', style: Styles.OrangeLabelText }, util.getRoleByOrganizationTypeString(role, organizationType && organizationType.code ? organizationType.code : null))));
const getSplitPanel = (props) => (React.createElement(SplitPanel, { testID: 'test-id-dc788b07-f5c9-e445-0936-8936be8c2c13', id: Utils.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Include_View) },
    React.createElement(ContentPanel, { testID: 'test-id-2bc9932c-5762-aba3-44dc-546fd4416db3', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-a1a03b7d-cf4e-dc46-9fd7-e6605a20456e', scrollEnabled: true, content: getMainPage(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-ab00c385-fb89-eed5-59a4-8ec4add566fb' },
                React.createElement(NavigationTextButton, { testID: 'test-id-29901923-be17-475c-f199-dc9730577177', title: '\u041E\u0442\u043C\u0435\u043D\u0430', onExecute: props.performCancel })),
            React.createElement(CenterPageHeader, { testID: 'test-id-9862ba42-bd7c-9aa5-27d2-31f3b31e2d8c' },
                React.createElement(H2, { testID: 'test-id-2c61c8b0-6cae-c325-dab2-3913b3c17b1a' }, 'Новая задача')),
            React.createElement(RightPageHeader, { testID: 'test-id-bb67cf53-8752-c845-29a7-53362b8f3aa9' },
                React.createElement(NavigationTextButton, { testID: 'test-id-b351b42a-1ee2-7084-e49e-e8384a801ab5', title: 'Добавить', onExecute: props.performSave })),
            "}"),
        React.createElement(Page, { testID: 'test-id-891c141b-bfca-b59f-923a-331e5b4d1696', scrollEnabled: false, content: renderCustomerSearch(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-c2cdfb78-25d1-1c2b-bdfc-f25c11ab940b' })),
        React.createElement(Page, { testID: 'test-id-8e1a9f7c-88a1-11e7-bb31-be2e44b06b34', content: React.createElement(ContainerMemberList, { testID: 'test-id-e0954b46-8d91-4b52-b478-a964c5389dd0' }), scrollEnabled: true },
            React.createElement(LeftPageHeader, { testID: 'test-id-57853448-88a3-11e7-bb31-be2e44b06b34' })))));
const ViewCustomerActivityInclude = (props) => (React.createElement(View, { testID: 'test-id-02274499-e57e-d251-d441-2233b8a0df9f', style: Styles.main }, getSplitPanel(props)));
export default ViewCustomerActivityInclude;
//# sourceMappingURL=ViewCustomerActivityInclude.js.map