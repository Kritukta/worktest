/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewCustomerActivityExcludeStyles';
import { Button, IconType, SplitPanel, ContentPanel, Page, H2, Text, Table, TableCell, TableRow, TableBody, View, NavigationTextButton, LeftPageHeader, CenterPageHeader, RightPageHeader, TextInput, Icon, Switch, Label, } from 'ufs-mobile-platform';
import * as util from '../common/Util';
import { LoaderWithText } from "mrmkmcib-app";
import { getFullScreenError } from './shared/ViewFullScreenError';
import { Enums } from '../Enums';
import ContainerMemberList from "../containers/ContainerMemberList";
import { SearchInput, } from 'mrmkmcib-ui';
const getRightViewPlaceholder = () => (React.createElement(View, { testID: `${new Date().getTime()}-07d9e53e-dc26-11e7-9296-cec278b6b50a`, style: Styles.emptyRightView }));
import * as Utils from "../common/Util";
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
            onRefresh: props.callPostCustomerActivityExcludeCreate
        });
    }
    if (props.activitySaveInProgress) {
        return React.createElement(View, { testID: 'test-id-97bebe99-ae8c-7fa1-5cac-d27629d1653e', style: Styles.LoaderWrapper },
            React.createElement(LoaderWithText, { text: '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438', testID: 'test-id-0c09b8fe-e3c2-0f95-0645-cba644a2248c' }));
    }
    return (React.createElement(View, { testID: 'test-id-334ef8ed-ce3f-724a-3e10-be83a247d82c', style: Styles.content },
        React.createElement(View, { testID: 'test-id-3bbff54d-84ad-8487-7e15-b13ee1357f88', style: Styles.content },
            React.createElement(View, { testID: 'test-id-beed3673-86a1-a6c3-db19-f9eb389ec60f', style: Styles.contentSectionCustomer },
                React.createElement(View, { testID: 'test-id-1899ea6b-2b0e-6ccd-e192-9c58495f19eb', style: [Styles.selectCustomer, Styles.centered] },
                    React.createElement(View, { testID: 'test-id-1899ea6b-2b0e-6ccd-e192-9c58495f19e1', style: Styles.fixedWidth },
                        React.createElement(Label, { testID: 'test-id-f5e758b6-85a8-32aa-eaa7-c41b6e0ecf88', header: '', text: 'Дочерняя организация', block: true },
                            React.createElement(Text, { testID: 'test-id-24056b15-8033-ef02-a9e6-8a60b2991923' }, props.inputCustomer && (props.inputCustomer.id != null && props.inputCustomer.id != '') ?
                                props.inputCustomer.name || props.inputCustomer.shortName
                                : 'Выбрать'))),
                    React.createElement(Button, { testID: 'test-id-c7810747-5a5a-2ed1-6a00-e68796c713e3', onExecute: () => {
                            props.navigateToCustomerPickerScreen();
                        } },
                        React.createElement(Icon, { testID: 'test-id-053560ab-9f17-06dd-1ad4-74a01da76420', type: IconType.MrmLink })))),
            props.customerActivityExcludeValidationCustomer ?
                React.createElement(Text, { testID: 'test-id-317604e1-3dc7-0474-11fe-356b5dbac027', style: Styles.validationError }, props.customerActivityExcludeValidationCustomer) :
                null,
            React.createElement(View, { testID: 'test-id-510d3a50-9a4b-6117-641b-78a48a0ddc3e', style: Styles.contentSectionCustomer },
                React.createElement(Label, { testID: 'test-id-0c64d954-d97d-4cb1-067d-8e8f143423ae', header: '', text: 'Родительская организация', block: true },
                    React.createElement(Text, { testID: 'test-id-06d6de68-40a4-c36f-b11a-cbca24823b62' }, props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                        props.currentCustomerManaged.name || props.currentCustomerManaged.shortName :
                        props.currentCustomer.name || props.currentCustomer.shortName))),
            React.createElement(View, { testID: 'test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1', style: Styles.contentSection },
                React.createElement(Label, { testID: 'test-id-1f807d32-832e-56f3-fcd6-2c9fdc2a8afb', header: '', text: 'Тип задачи', block: true },
                    React.createElement(Text, { testID: 'test-id-289732fb-a3c9-64d0-9e46-992d1cc13fe2' }, 'Включение в организацию'))),
            props.customerActivityExcludeValidationComment ?
                React.createElement(Text, { testID: 'test-id-e21ab1ef-8fb5-756c-e66f-97d943b012ea', style: Styles.validationError },
                    " ",
                    props.customerActivityExcludeValidationComment,
                    " ") : null,
            React.createElement(View, { testID: 'test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1', style: Styles.contentSectionMeaning },
                React.createElement(TextInput, { testID: 'test-id-fb09dbda-80b7-11e7-bb31-be2e44b06b34', value: props.inputComment || "", label: "C\u0443\u0442\u044C", onChange: props.performInputComment, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u0442\u044C", maxLength: 1000 })),
            React.createElement(View, { testID: 'c24893f0-e2e5-4e90-87d3-23e1ddeffed2', style: Styles.contentSection }, getActivityMemberList(props)))));
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
        return (React.createElement(LoaderWithText, { text: '\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438', testID: 'test-id-42f62b65-5448-e433-340a-f7db9ce46858' }));
    }
    if (props.inputSearch == null || props.inputSearch === '') {
        return (React.createElement(View, { testID: 'test-id-f367e7fa-724c-98c2-7b55-776756e22472', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-6b0fd76b-ce3c-b1b0-6653-da537f09761e', style: Styles.searchNotFoundText }, 'Поиск компании')));
    }
    if (props.inputSearch != null &&
        props.inputSearch !== '' &&
        (props.customerSearchList == null ||
            props.customerSearchList.data == null ||
            props.customerSearchList.data.length == 0)) {
        return (React.createElement(View, { testID: 'test-id-5be89e3d-217d-c281-0a78-d457906d17f3', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-88e0787b-612f-a71b-5072-8ebcb607bd19', style: Styles.searchNotFoundText }, 'Результатов не найдено')));
    }
    return (React.createElement(Table, { testID: 'test-id-923579bb-837e-ea2f-0c10-7ac9ea19267f' },
        React.createElement(TableBody, { testID: 'test-id-6c1843da-2248-1d71-7095-c70abc8baf73' }, props.customerSearchList.data.map((item, index) => {
            return (React.createElement(TableRow, { testID: 'test-id-7bafd015-89ae-8510-5b81-4a70cd67116f', key: `${index}-${item.id}`, onClick: () => {
                    props.performInputCustomer(item);
                } },
                React.createElement(TableCell, { testID: 'test-id-aa3ebdec-fb8e-9b78-daf8-c3381985e8f5' },
                    React.createElement(View, { testID: 'test-id-08a5ff56-a3ab-c6ae-4383-9719281ad593', style: Styles.InlineWrapper },
                        React.createElement(View, { testID: 'test-id-49c04007-1b93-0b66-711a-cf8646ff7624', style: Styles.TopRow },
                            item.role && item.role.value ?
                                React.createElement(View, { testID: 'test-id-6f350b63-254d-45c6-074b-373f1f768451', style: Styles.OrangeLabel },
                                    React.createElement(Text, { testID: 'test-id-08820981-0f04-5113-16e8-41e14e9cef17', style: Styles.OrangeLabelText }, Utils.getRoleString(item.role.value))) :
                                null,
                            React.createElement(Text, { testID: 'test-id-cf70d963-d60a-5958-e4f8-0914ee6a0377', style: Styles.OrgType }, item.organizationType.value)),
                        React.createElement(View, { testID: 'test-id-4d8f6204-7de5-459d-9f50-8e3a389f7dbb' },
                            React.createElement(Text, { testID: 'test-id-5f9beaad-4ac0-905c-936b-1b9737b53e59', style: Styles.Name }, item.name ? item.name : item.shortName))))));
        }))));
};
const renderCustomerSearch = (props) => {
    return (React.createElement(View, { testID: 'test-id-92ef4c16-11d5-88f2-709d-09914db0e9f2', style: Styles.content },
        React.createElement(View, { testID: 'test-id-7acd23fe-6e1d-fb9f-05c5-8fb3eebf06990980989', style: { height: 44, overflow: 'hidden' } },
            React.createElement(SearchInput, { value: props.inputSearch, placeholder: 'Введите название', onChange: props.performInputSearch, onCancel: props.performCancelSearchCustomer, autoFocus: true })),
        React.createElement(View, { testID: 'test-id-bdfca03b-71c5-748c-87b3-f893bc0eaab2' },
            React.createElement(Switch, { testID: 'test-id-8c0c2590-9aae-48b7-2de1-e4771f457dee', checked: props.inputSearchManagedOnly, label: '\u0422\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B', onChange: () => props.performInputSearchManagedOnly(!props.inputSearchManagedOnly) })),
        renderCustomerSearchResults(props)));
};
const getLoader = (text = "") => (React.createElement(LoaderWithText, { text: text, testID: `test-id-${new Date().getTime()}` }));
const getCustomerNoFoundView = () => (React.createElement(View, { testID: 'test-id-226a67ea-d27e-11e7-8941-cec278b6b50a', style: Styles.customerNoFoundView },
    React.createElement(Text, { style: Styles.customerNoFoundText, testID: "test-id-28312092-d27e-11e7-8941-cec278b6b50a" }, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
const _getRole = (role, organizationType) => (React.createElement(View, { testID: 'test-id-b9af9fe5-1445-b866-95b8-992defb083e2', style: Styles.OrangeLabel },
    React.createElement(Text, { testID: 'test-id-4b9a9ed4-bb71-f215-0f70-9457bf2b9233', style: Styles.OrangeLabelText }, util.getRoleByOrganizationTypeString(role, organizationType && organizationType.code ? organizationType.code : null))));
const getSplitPanel = (props) => (React.createElement(SplitPanel, { testID: 'test-id-4a722a55-579a-b8fd-6c4d-ae8392037f9a', id: Utils.getNavigationCustomerEditInIncludeExcludeOrganizationString(Enums.NavigationCustomerEditInIncludeExcludeOrganization.CustomerEditor_Exclude_View) },
    React.createElement(ContentPanel, { testID: 'test-id-8e4c9e18-f1d1-5131-d794-36a2553de83b', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-650ce95c-dbf4-a690-1304-e24e7c01324c', scrollEnabled: false, content: getMainPage(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-5ddc377f-801f-0093-db81-516539125c85' },
                React.createElement(NavigationTextButton, { testID: 'test-id-be9b408e-4bbf-edd1-0b37-e89f2a7226ba', title: '\u041E\u0442\u043C\u0435\u043D\u0430', onExecute: props.performCancel })),
            React.createElement(CenterPageHeader, { testID: 'test-id-a6ad7c27-1c6a-a7b4-f30b-6610870da351' },
                React.createElement(H2, { testID: 'test-id-3c074829-550d-7b44-c557-c46e1cb60e68' }, 'Новая задача')),
            React.createElement(RightPageHeader, { testID: 'test-id-b60a3238-0122-be44-f0c9-77a6d8a6c709' },
                React.createElement(NavigationTextButton, { testID: 'test-id-fb8945df-8ecf-c2b6-ce7c-d8c24871dece', title: 'Добавить', onExecute: props.performSave })),
            "}"),
        React.createElement(Page, { testID: 'test-id-8049b3b1-0883-39c9-9028-601694c68d6b', scrollEnabled: false, content: renderCustomerSearch(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-f74f6796-147b-11e8-b642-0ed5f89f718b' })),
        React.createElement(Page, { testID: 'test-id-8e1a9f7c-88a1-11e7-bb31-be2e44b06b34', content: React.createElement(ContainerMemberList, { testID: 'test-id-e0954b46-8d91-4b52-b478-a964c5389dd0' }), scrollEnabled: true },
            React.createElement(LeftPageHeader, { testID: 'test-id-57853448-88a3-11e7-bb31-be2e44b06b34' })))));
const ViewCustomerActivityExclude = (props) => (React.createElement(View, { testID: 'test-id-d2e01bcd-c82a-fdb1-35e4-cd5d3ee8496d', style: Styles.main }, getSplitPanel(props)));
export default ViewCustomerActivityExclude;
//# sourceMappingURL=ViewCustomerActivityExclude.js.map