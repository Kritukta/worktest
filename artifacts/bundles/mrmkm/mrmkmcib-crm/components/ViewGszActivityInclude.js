/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewGszActivityIncludeStyles';
import { Button, IconType, SplitPanel, ContentPanel, Page, H2, Text, TextInput, Table, TableCell, TableRow, TableBody, View, NavigationTextButton, LeftPageHeader, CenterPageHeader, RightPageHeader, Icon, Switch, Label, } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
import ContainerMemberList from '../containers/ContainerMemberList';
import { SearchInput } from 'mrmkmcib-ui';
import { LoaderWithText } from 'mrmkmcib-app';
import { getFullScreenError } from './shared/ViewFullScreenError';
import * as Utils from "../common/Util";
import { _getLock } from './ViewAppCRM';
const getMainPage = (props) => {
    if (props.activitySaveInProgress) {
        return React.createElement(LoaderWithText, { testID: "test-id-05d17c94-d4ff-11e7-9296-cec278b6b50a", text: "Создание задачи" });
    }
    if (props.activitySaveError && props.activitySaveError.code) {
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityInclude',
            title: props.activitySaveError.comment,
            description: props.activitySaveError.message,
            onRefresh: props.callPostGszActivityIncludeCreate
        });
    }
    return (React.createElement(View, { testID: 'test-id-2c1a9325-f803-ce67-daf9-5a9c1195434e', style: Styles.content },
        React.createElement(View, { testID: 'test-id-21cc9f67-b7c1-212c-9f0b-783db04cd38e', style: Styles.contentSection },
            React.createElement(View, { testID: 'test-id-b8a77d89-a4fd-9272-752f-f3ea254667b0', style: Styles.selectCustomer },
                React.createElement(Label, { testID: 'test-id-144ef903-421c-cb3a-f6ba-1b235a1b8f79', header: '', text: 'Компания', block: true },
                    React.createElement(Text, { testID: 'test-id-e08a598d-0c05-98ac-8a57-35941e494ee6' }, props.inputCustomer && (props.inputCustomer.id != null && props.inputCustomer.id != '') ?
                        props.inputCustomer.name || props.inputCustomer.shortName
                        : 'Выбрать')),
                React.createElement(Button, { testID: 'test-id-3b9acce3-3b72-47a1-0e12-9d6743ffe8e0', onExecute: () => {
                        props.navigateToCustomerPickerScreen();
                    } },
                    React.createElement(Icon, { testID: 'test-id-f8e688e3-fa09-4dd7-0a5d-5bd4a7f60c2a', type: IconType.MrmLink })))),
        props.gszActivityIncludeValidationCustomer ? React.createElement(Text, { testID: 'test-id-efb84fcd-563e-9597-040e-19f62739a6b0', style: Styles.validationError }, props.gszActivityIncludeValidationCustomer) : null,
        React.createElement(View, { testID: 'test-id-c447c70b-e78f-6a20-e1ae-88767361bac7', style: Styles.contentSection },
            React.createElement(Label, { testID: 'test-id-e9222b89-d187-6c05-21bb-2280b8e69b84', header: '', text: 'ГСЗ', block: true },
                React.createElement(Text, { testID: 'test-id-aa7d0114-b762-20f8-4412-4cddb88a1e98' }, props.currentGsz.name || 'Нет данных'))),
        React.createElement(View, { testID: 'test-id-14ae1116-c07d-9ea8-4673-ff727fd39e49', style: Styles.contentSection },
            React.createElement(Label, { testID: 'test-id-25df6e56-855b-03a6-f440-4f433cc59e92', header: '', text: 'Тип задачи', block: true },
                React.createElement(Text, { testID: 'test-id-7c519fef-faf5-41c4-47fa-55aebd1ed185' }, 'Задача на включение компании в ГСЗ'))),
        React.createElement(View, { testID: 'test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1', style: Styles.contentSectionMeaning },
            React.createElement(TextInput, { testID: 'test-id-fb09dbda-80b7-11e7-bb31-be2e44b06b34', value: props.inputComment || "", label: "C\u0443\u0442\u044C", onChange: props.performInputComment, placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u0442\u044C", maxLength: 1000 })),
        props.gszActivityIncludeValidationComment ? React.createElement(Text, { testID: 'test-id-669bcf04-c0f0-4d10-89cc-826d6a152eb0', style: Styles.validationError },
            " ",
            props.gszActivityIncludeValidationComment,
            " ") : null,
        React.createElement(View, { testID: 'test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1', style: Styles.contentSectionTeam }, renderActivityExecutor(props))));
};
const getActivityMemberList = (props) => (React.createElement(View, { style: Styles.memberListContent },
    React.createElement(View, { testID: `test-id-d331abfa-a8f9-11e7-abc4-cec278b6b50a`, style: Styles.memberListViewTitle },
        React.createElement(Text, { testID: `test-id-c7e1e9e0-a8f9-11e7-abc4-cec278b6b50a`, style: Styles.memberListTextTitle }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0438")),
    React.createElement(View, { style: Styles.memberListViewPerson },
        React.createElement(Text, { testID: `test-id-activity-deatails-people-row-Agent`, style: Styles.memberListTextPerson }, Array.isArray(props.memberList.data) && props.memberList.data.length > 0 ?
            Utils.getActivityMemberListOutput(props.memberList) :
            Utils.getCustomerActivityIncludeExecutorName(props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                props.currentCustomerManaged : props.currentCustomerManaged, 'Нет'))),
    props.currentGsz &&
        props.currentGsz.curator &&
        props.currentGsz.curator.id ?
        React.createElement(View, { testID: `test-id-activity-deatails-people-row_6-Team`, style: Styles.memberListViewSpace })
        :
            React.createElement(View, { testID: `test-id-activity-deatails-people-row_6-Team`, style: Styles.memberListViewButton },
                React.createElement(Button, { testID: `test-id-activity-deatails-people-row_7-Team`, onExecute: () => props.navigateToMemberListScreen() },
                    React.createElement(Icon, { testID: `test-id-activity-deatails-people-row_8-Team`, type: IconType.MrmLink })))));
const renderActivityExecutor = (props) => {
    let executorName = props.currentGsz &&
        props.currentGsz.curator &&
        props.currentGsz.curator.id ?
        Utils.getFullNameRepresentation(props.currentGsz.curator) : null;
    if (executorName == null && (props.memberList != null && props.memberList.data != null && props.memberList.data.length > 0)) {
        return getActivityMemberList(props);
    }
    else {
        return (React.createElement(View, { style: Styles.memberListContent },
            React.createElement(View, { testID: `test-id-d331abfa-a8f9-11e7-abc4-cec278b6b50a`, style: Styles.memberListViewTitle },
                React.createElement(Text, { testID: `test-id-c7e1e9e0-a8f9-11e7-abc4-cec278b6b50a`, style: Styles.memberListTextTitle }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437\u0430\u0434\u0430\u0447\u0438")),
            React.createElement(View, { style: Styles.memberListViewPerson },
                React.createElement(Text, { testID: `test-id-activity-deatails-people-row-Agent`, style: Styles.memberListTextPerson }, props.currentGsz &&
                    props.currentGsz.curator &&
                    props.currentGsz.curator.id ? `${executorName} - главный исполнитель` : 'Нет данных')),
            props.currentGsz &&
                props.currentGsz.curator &&
                props.currentGsz.curator.id ?
                React.createElement(View, { testID: `test-id-activity-deatails-people-row_6-Team`, style: Styles.memberListViewSpace })
                :
                    React.createElement(View, { testID: `test-id-activity-deatails-people-row_6-Team`, style: Styles.memberListViewButton },
                        React.createElement(Button, { testID: `test-id-activity-deatails-people-row_7-Team`, onExecute: () => props.navigateToMemberListScreen() },
                            React.createElement(Icon, { testID: `test-id-activity-deatails-people-row_8-Team`, type: IconType.MrmLink })))));
    }
};
const renderCustomerSearchResults = (props) => {
    if (props.searchError) {
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityIncludeSearch',
            title: props.searchError.comment,
            description: props.searchError.message,
            onRefresh: props.performSearch
        });
    }
    if (props.searchInProgress) {
        return (React.createElement(View, { testID: 'test-id-52763627-944d-d9d8-2995-05e655eae7d6', style: Styles.searchNotFoundTextWrapper },
            React.createElement(LoaderWithText, { text: '\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432', testID: 'test-id-4b9e58ad-53f7-c97d-01e8-45b491b49bbc' })));
    }
    if (props.inputSearch == null || props.inputSearch === '') {
        return (React.createElement(View, { testID: 'test-id-545e9ce6-3801-02e2-9a1d-445a5b221d28', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-9376005d-b24a-3955-48ef-edd9fe3dbb61', style: Styles.searchNotFoundText }, 'Поиск компании')));
    }
    if (props.inputSearch != null &&
        props.inputSearch !== '' &&
        (props.customerSearchList == null ||
            props.inputSearch.length < 3 ||
            props.customerSearchList.data == null ||
            props.customerSearchList.data.length == 0)) {
        return (React.createElement(View, { testID: 'test-id-dd729ec3-fe41-9b47-0e7c-6bc5416cc97c', style: Styles.searchNotFoundTextWrapper },
            React.createElement(Text, { testID: 'test-id-19fccdb4-90af-a78e-373f-cfd7d2b879a2', style: Styles.searchNotFoundText }, 'Результатов не найдено')));
    }
    return (React.createElement(Table, { testID: 'test-id-f238e017-1fc6-605e-88bf-aac9a025be6c' },
        React.createElement(TableBody, { testID: 'test-id-09545684-0623-0abb-96de-0b92b086985f' }, props.customerSearchList.data.map((item, index) => {
            return (React.createElement(TableRow, { testID: 'test-id-685b1204-1f2a-4fdc-2f5a-d7bd29d3606c', key: `${index}-${item.id}`, onClick: () => {
                    props.performInputCustomer(item);
                } },
                React.createElement(TableCell, { testID: 'test-id-c0aa8a14-0cad-87b6-f95a-970e88203945' },
                    React.createElement(View, { testID: 'test-id-50735f5d-329c-5ea9-1493-2a260dc0bc84', style: Styles.InlineWrapper },
                        React.createElement(View, { testID: 'test-id-f909d716-bf5d-0c10-df12-1f3602f092f5', style: Styles.TopRow },
                            Utils.userInMemberTeam(props.currentUser, item) ? null : _getLock(),
                            item.role && item.role.value ?
                                React.createElement(View, { testID: 'test-id-f9b7d92b-249f-f8bf-62d8-149863f8b45e', style: Styles.OrangeLabel },
                                    React.createElement(Text, { testID: 'test-id-f658cb68-9d3d-d64b-2fb6-abd2de319cb6', style: Styles.OrangeLabelText }, Utils.getRoleString(item.role.value))) :
                                null,
                            React.createElement(Text, { testID: 'test-id-939ed3d7-7531-cbe1-b16d-337ffdb29572', style: Styles.OrgType }, item.organizationType.value)),
                        React.createElement(View, { testID: 'test-id-6beebf91-c368-40de-9746-a15fc8d478fe' },
                            React.createElement(Text, { testID: 'test-id-fc5fd1f6-0032-f6cc-d994-3ed964013559', style: Styles.Name }, item.name))))));
        }))));
};
const renderCustomerSearch = (props) => {
    return (React.createElement(View, { testID: 'test-id-bdc2dd4a-372c-04a7-39db-22e8de44b98f', style: Styles.content },
        React.createElement(View, { testID: 'test-id-2cbd5c80-16f6-3b65-bea5-42b1d84a610b', style: props.inputSearch.length > 0 && props.inputSearch.length < 3
                ? Styles.searchInputFilterFieldViewError
                : Styles.searchInputFilterFieldView },
            React.createElement(SearchInput, { value: props.inputSearch, placeholder: 'Введите название', autoFocus: true, onCancel: props.performCancelSearchCustomer, error: props.inputSearch.length && props.inputSearch.length < 3 ? "Введите не менее 3-х символов" : '', onChange: props.performInputSearch })),
        React.createElement(View, { testID: 'test-id-d5b51b35-d8de-1a9c-c8f6-70d56274c5f3' },
            React.createElement(Switch, { testID: 'test-id-8f811cad-ac53-f040-2424-738bc45f6d6a', checked: props.inputSearchManagedOnly, label: '\u0422\u043E\u043B\u044C\u043A\u043E \u043C\u043E\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B', onChange: () => props.performInputSearchManagedOnly(!props.inputSearchManagedOnly) })),
        React.createElement(View, { style: Styles.SearchResultHeight }, renderCustomerSearchResults(props))));
};
const ViewGszActivityInclude = (props) => (React.createElement(View, { testID: 'test-id-a22088c7-faf8-0951-ec18-67025949db5e', style: Styles.main },
    React.createElement(SplitPanel, { testID: 'test-id-e4eff12f-3782-7a8b-2178-fdb9dffea2fd', id: Utils.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Include_View) },
        React.createElement(ContentPanel, { testID: 'test-id-e4fc9dba-13cf-a8df-0a5f-2aa4e011422c', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-bf71c132-85e2-e935-dae2-856c3b40a2d2', scrollEnabled: true, content: getMainPage(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-9c17d479-7f91-1c9b-9853-25c53947d1c7' }, props.activitySaveInProgress == false ? React.createElement(NavigationTextButton, { testID: 'test-id-478d9ffe-7816-ebd9-255c-56139873e4a1', title: '\u041E\u0442\u043C\u0435\u043D\u0430', onExecute: props.performCancel }) : null),
                React.createElement(CenterPageHeader, { testID: 'test-id-6a70c2ac-e1f2-09ef-9474-de122ec6f7c2' },
                    React.createElement(H2, { testID: 'test-id-a2242a65-e84e-613e-fa1e-fd0df76e4f18' }, 'Новая задача')),
                React.createElement(RightPageHeader, { testID: 'test-id-5e1c02d7-fe38-8fa4-1e38-15b2840d00b7' }, props.activitySaveInProgress == false ?
                    React.createElement(NavigationTextButton, { testID: 'test-id-ed1df66d-8d47-8c1b-fffa-464a0406547c', title: 'Добавить', onExecute: props.performSave }) : null),
                "}"),
            React.createElement(Page, { testID: 'test-id-1b093b2b-505c-c7d6-2da6-18dc6f09014f', scrollEnabled: false, content: renderCustomerSearch(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-d575489a-e61f-149c-4017-f82d3411647d' })),
            React.createElement(Page, { testID: 'test-id-65806ee7-6b65-4ad6-99a6-bef9ds7aec21', scrollEnabled: false, content: React.createElement(ContainerMemberList, { testID: 'test-id-s5806ee7-6b65-4ad6-99a6-bef9d87bec21' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-0ce1df85-8ad9-45s1-b796-2f85d38dgc0c' }))))));
export default ViewGszActivityInclude;
//# sourceMappingURL=ViewGszActivityInclude.js.map