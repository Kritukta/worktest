/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewMemberListStyles';
import { Button, ButtonType, CenterPageHeader, ContentPanel, H2, Icon, IconType, KeyboardType, LeftPageHeader, NavigationBackButton, NavigationIconButton, NavigationIconButtonType, NavigationTextButton, Page, RadioButton, RadioGroup, RightPageHeader, SplitPanel, Table, TableBody, Popover, PopoverPosition, PopoverType, Text, View, } from 'ufs-mobile-platform';
import { LoaderWithText, FullScreenError } from "mrmkmcib-app";
import { Enums } from '../Enums';
import PopoverTarget from '../modules/PopoverTarget';
import ContainerEmployee from '../containers/ContainerEmployee';
import { SwipeableItem, KeyboardAvoidingView } from 'mrmkmcib-ui';
import * as util from '../common/Util';
import { ProfileRow, SearchInput, ActionProfileRow } from 'mrmkmcib-ui';
/*
 * [DUMB] Dumb компоненты
 */
// Кнопка "Удалить"
// TODO: <Icon testID='test-id-447b66e5-7426-06e8-7f63-7f02530bf332' type={IconType.MrmTrash} />
const deleteButton = (index, props) => (React.createElement(View, { testID: 'test-id-cc2b829c-22fa-af25-fcf4-86d5fd53c721', style: Styles.deleteButtonWrapper },
    React.createElement(Button, { testID: 'test-id-141b3cf7-ec3e-1605-bc5d-8f84338f8ce5', onExecute: () => {
            props.performMemberDelete(index);
        } },
        React.createElement(Icon, { testID: 'test-id-f6848852-fc08-0d7b-0e7a-c7e3187773d3', type: IconType.MrmTrash }))));
// Аватар: серый круг с инициалами
const TeamMemberAvatar = (item) => {
    return (React.createElement(View, { testID: 'test-id-cff2504e-e416-3272-4a93-f399cf7db7ce', style: Styles.avatar },
        React.createElement(Text, { testID: 'test-id-eb7fccb5-9e85-6136-53bc-535e2d5a2312', style: Styles.avatarLabel }, util.getAgentInitials(item))));
};
// Текстовая информация TeamMember'a: ФИО, должность, статус блокировки
const TeamMemberInfo = (item) => {
    const employeeJobTitleAndBlockStatusStyle = item.data.isBlocked ? [Styles.employeeJobTitleAndBlockStatusText, Styles.isBlocked] : Styles.employeeJobTitleAndBlockStatusText;
    let jobTitleAndBlockStatus = '';
    switch (item.props.currentMode) {
        case Enums.MemberListMode.Agent: {
            jobTitleAndBlockStatus = item.data.isBlocked ? `${item.data.positionName || 'Не определено '} '(Блокирован)'` : '(' + (item.data.positionName || 'Не определено ') + ')';
            break;
        }
        default: {
            const splitter = (item.data.role && item.data.role.value && item.data.role.value != '') ? ', ' : '';
            jobTitleAndBlockStatus = item.data.isBlocked ? '(' + item.data.role.value + splitter + 'Блокирован)' : '(' + item.data.role.value + ')';
            break;
        }
    }
    return (React.createElement(View, { testID: 'test-id-215b5fe4-6e37-a748-16f8-69df95e57cc0', style: Styles.teamMemberInfoViewWrapper },
        React.createElement(View, { testID: 'test-id-2868b994-e1f3-f0c9-90e4-843f657a8e75', style: Styles.employeeNameInitialsWrapper },
            React.createElement(Text, { testID: 'test-id-c76c9896-5c59-88a4-8bf2-ba7a9ce48b75', style: Styles.emplyeeNameInitialsText }, item.data.fullName)),
        React.createElement(Text, { testID: 'test-id-e9e11172-eb87-a169-f581-d467c4449053', style: employeeJobTitleAndBlockStatusStyle }, jobTitleAndBlockStatus)));
};
const getSearchContent = (props) => {
    const isListEmpty = props.memberSearchList == null || props.memberSearchList.data == null || props.memberSearchList.data.length === 0;
    if (props.memberSearchListFetching) {
        return (React.createElement(View, { testID: 'test-id-c47b62a6-cb48-8df3-8f7f-3fbc92adbc55', style: Styles.loaderContainer },
            React.createElement(LoaderWithText, { testID: 'test-id-0825b00e-7f2a-848e-3337-db1437e8938b', text: 'Загрузка сотрудников' })));
    }
    if (!props.memberSearchListFetching && isListEmpty && props.isSearchCompleted && props.isValidSearchString) {
        return (React.createElement(View, { style: Styles.isListEmptyTableCellContainer },
            React.createElement(Text, { testID: 'test-id-e0dfc3ad-c2fe-4767-4bac-krjegq333', style: Styles.SearchPlaceholderText }, 'Результатов не найдено')));
    }
    if (!props.memberSearchListFetching && !props.isSearchCompleted && !props.isValidSearchString) {
        return (React.createElement(View, { style: Styles.isListEmptyTableCellContainer },
            React.createElement(Text, { testID: 'test-id-e0dfc3ad-c2fe-4767-4bac-krjegq333', style: Styles.SearchPlaceholderText }, 'Введено менее 3 символов. Уточните критерии поиска.')));
    }
    if (!props.memberSearchListFetching && isListEmpty && (props.inputMemberSearch === '' || props.inputMemberSearch === null)) {
        const searchText = (props.currentMode === Enums.MemberListMode.DealStageMainCreditOfficer ||
            props.currentMode === Enums.MemberListMode.Deal) ? 'Поиск сотрудника по ФИО' : 'Поиск сотрудника по ФИО или роли';
        return (React.createElement(View, { testID: 'test-id-e0dfc3ad-c2fe-4767-4bac-krjegq111', style: Styles.isListEmptyTableCellContainer },
            React.createElement(Text, { testID: 'test-id-e0dfc3ad-c2fe-4767-4bac-dbfb55cdfxxc', style: Styles.SearchPlaceholderText }, searchText)));
    }
    if (!props.memberSearchList) {
        return (React.createElement(View, { testID: 'test-id-edf9c3ad-c2fe-4767-4bac-dbfb55cdf26c-blank' }));
    }
    return (React.createElement(Table, { testID: 'test-id-c47b62a6-cb48-8df3-8f7f-3fbc92adbc86', style: Styles.flex, underlined: false },
        React.createElement(TableBody, { testID: 'test-id-e079c3ad-c2fe-4767-4bac-dbfb55c8326c' }, getMemberListSearchContentList(props))));
};
const TeamMemberSearchForm = (props) => (React.createElement(View, { testID: 'test-id-0e2d23ba-38da-cf67-70c7-4d7ed5960894', style: Styles.teamMemberSearchFormView },
    React.createElement(SearchInput, { value: props.value, placeholder: props.placeholder, onCancel: props.performInputCancel, keyboardType: props.keyboardType, error: props.error, onChange: props.onChange, autoFocus: true, drawBottomBorder: true, onReturnKeyPressed: props.performSearch })));
/*
 * [/DUMB] Dumb компоненты
 */
/*
 * [CONTENT] Генераторы контента
 */
// Список TeamMembers в режиме просмотра
const getTeamPersonListContent = (props) => {
    if (!props.memberList || !props.memberList.data || props.memberList.data.length === 0) {
        return (React.createElement(View, { testID: 'test-id-8c874bf0-28b0-5bbe-fbf7-2baf8edc85df' }));
    }
    else {
        return (React.createElement(View, { testID: 'test-id-aaa74bf0-28b0-5bbe-fbf7-2baf8edc85df' }, getTeamPersonListContentRows(props.memberList.data, props)));
    }
};
const getMemberListSearchContentList = (props) => {
    return getMemberListSearchContentRows(props.memberSearchList.data, props);
};
const getMemberListSearchContainer = (props) => (React.createElement(KeyboardAvoidingView, { behavior: 'padding', contentContainerStyle: [Styles.flex, Styles.maxHeightFull], keyboardVerticalOffset: 0, style: Styles.flex }, getMemberListSearchContent(props)));
// Список TeamMembers в режиме поиска
const getMemberListSearchContent = (props) => {
    //TODO то есть, если команды нет, то искать не надо?
    if (props.inputEmployeeSource == Enums.MemberListEmployeeSource.CustomerManaged) {
        return (React.createElement(View, { testID: 'test-id-4468c46f-5bce-745e-4e71-dbd4833fc8a8' },
            React.createElement(Table, { testID: 'test-id-cxxb62a6-cb48-8df3-8f7f-3fbc92adbc86', style: Styles.flex, underlined: true },
                React.createElement(TableBody, { testID: 'test-id-e0xxc3ad-c2fe-4767-4bac-dbfb55c8326c' }, getMemberListSearchContentList(props)))));
    }
    const placeholder = props.currentMode === Enums.MemberListMode.DealStageMainCreditOfficer ? '' : 'Фамилия Имя Отчество';
    return (React.createElement(View, { testID: 'test-id-0168c46f-5bce-745e-4e71-dbd4833fc8a8', style: Styles.flex },
        React.createElement(TeamMemberSearchForm, { testID: 'test-id-bf921ee2-b100-03dd-bebe-340e0f0d4e3b', onChange: props.performInputMemberSearch, placeholder: placeholder, performInputCancel: props.performResetAndReturn, error: props.memberSearchListError ? props.memberSearchListError.message : null, keyboardType: KeyboardType.Email, value: props.inputMemberSearch, performSearch: props.performSearch }),
        getSearchContent(props)));
};
// Список TeamMembers в режиме локального поиска
const getMemberListSearchContentLocal = (props) => {
    const isListEmpty = props.memberSearchListLocal == null || props.memberSearchListLocal.data == null || props.memberSearchListLocal.data.length == 0;
    let content = null;
    if (props.inputMemberSearchLocal != '' && props.inputMemberSearchLocal != null && isListEmpty) {
        content = (React.createElement(View, { style: Styles.emptySearchText },
            React.createElement(Text, { testID: 'test-id-getMemberListSearchContentLocal-c2fe-4711-4bac-rbsawe', style: Styles.SearchPlaceholderText }, 'Результатов не найдено')));
    }
    if ((props.inputMemberSearchLocal == '' || props.inputMemberSearchLocal == null) && !content) {
        content = (React.createElement(View, { style: Styles.emptySearchText },
            React.createElement(Text, { testID: 'test-id-getMemberListSearchContentLocal-c2fe-4711-4bac-dbfb55cdfxxc', style: Styles.SearchPlaceholderText }, 'Поиск сотрудника по ФИО или роли')));
    }
    return (React.createElement(View, { testID: 'test-id-0168c46f-5bce-745e-4e71-ddf4833fc8a8' },
        React.createElement(TeamMemberSearchForm, { testID: 'test-id-bf921df2-b100-03dd-bebe-340e0f0d4e3b', onChange: props.performInputMemberSearchLocal, placeholder: 'Фамилия Имя Отчество', performInputCancel: props.performResetAndReturn, error: null, keyboardType: KeyboardType.Email, value: props.inputMemberSearchLocal }),
        content ? content
            :
                props.isSelectEmployeeLocalSearch
                    ?
                        React.createElement(Table, { testID: 'test-id-getMemberListSearchContentLocal-table', style: Styles.flex, underlined: true },
                            React.createElement(TableBody, { testID: 'test-id-getMemberListSearchContentLocal-TableBody' }, getMemberListSearchContentRows(props.memberSearchListLocal.data, props)))
                    :
                        getExpandedMemberList(props.memberSearchListLocal.data, props)));
};
const getMemberAddMenuContent = (props) => {
    switch (props.currentMode) {
        case Enums.MemberListMode.CustomerActivityAddOrganization:
        case Enums.MemberListMode.CustomerActivityRemoveOrganization:
        case Enums.MemberListMode.CustomerActivityRemoveGSZ:
        case Enums.MemberListMode.CustomerActivityAddGSZ:
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.Deal: {
            return (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-1', style: Styles.memberAddMenuContentContainer },
                React.createElement(View, { style: Styles.memberAddMenuContentContainerBorderButton },
                    React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1', type: ButtonType.TEXT, onExecute: () => {
                            props.performInputEmployeeSource(Enums.MemberListEmployeeSource.CustomerManaged);
                        } },
                        React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-1-TEXT' }, 'Добавить из команды клиента'))),
                React.createElement(View, { style: Styles.memberAddMenuContentContainerButton },
                    React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2', type: ButtonType.TEXT, onExecute: () => {
                            props.performInputEmployeeSource(Enums.MemberListEmployeeSource.Employee);
                        } },
                        React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Deal-2-TEXT' }, `Искать в общем списке `)))));
        }
        case Enums.MemberListMode.Activity: {
            return (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-Activity-1', style: Styles.memberAddMenuContentContainer },
                React.createElement(View, { style: Styles.memberAddMenuContentContainerBorderButton },
                    React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Activity-1', type: ButtonType.TEXT, onExecute: props.performInputEmployeeSourceActivity },
                        React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Activity-1-TEXT' }, 'Добавить из команды клиента'))),
                React.createElement(View, { style: Styles.memberAddMenuContentContainerButton },
                    React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Activity-2', type: ButtonType.TEXT, onExecute: () => {
                            props.performInputEmployeeSource(Enums.MemberListEmployeeSource.Employee);
                        } },
                        React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Activity-2-TEXT' }, 'Искать в общем списке')))));
        }
        case Enums.MemberListMode.Agent: {
            return (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-AgentView-1', style: { justifyContent: 'center', alignItems: 'center' } },
                React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Agent-2', type: ButtonType.TEXT, onExecute: () => {
                        props.performInputEmployeeSource(Enums.MemberListEmployeeSource.Employee);
                    } },
                    React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-Agent-2-TEXT' }, 'Искать в общем списке'))));
        }
        case Enums.MemberListMode.CustomerManaged: {
            return (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-CustomerManagedView-1', style: { justifyContent: 'center', alignItems: 'center' } },
                React.createElement(Button, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-CustomerManaged-2', type: ButtonType.TEXT, onExecute: () => {
                        props.performInputEmployeeSource(Enums.MemberListEmployeeSource.Employee);
                    } },
                    React.createElement(Text, { testID: 'test-id-getMemberAddMenuContent-BUTTON-SELECT-CustomerManaged-2-TEXT' }, 'Искать в общем списке'))));
        }
        default: {
            return React.createElement(View, { testID: 'test-id-134ssacf-6f4b-51fb-62ss-7173c406b719' });
        }
    }
};
const getMemberListEditableContentExpandedModeMenu = (props) => {
    switch (props.currentMode) {
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.Deal: {
            return (React.createElement(View, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-DEAL-1', style: Styles.buttonSelectMainContainer },
                React.createElement(Button, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-BUTTON-SELECT-MAIN', type: ButtonType.TEXT, onExecute: props.navigateToSelectMemberIsGeneralScreen },
                    React.createElement(Text, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-BUTTON-SELECT-MAIN-TEXT' }, 'Выбрать владельца карточки сделки')),
                React.createElement(PopoverTarget, { testID: 'test-id-19347c4e-8d04-8f56-e56d-2226ca8af123', refName: 'addMemberMenu' },
                    React.createElement(NavigationIconButton, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-BUTTON-ADD-ICON', type: NavigationIconButtonType.ADD, onExecute: props.performPopoverAddShow }))));
        }
        case Enums.MemberListMode.CustomerActivityAddOrganization:
        case Enums.MemberListMode.CustomerActivityRemoveOrganization:
        case Enums.MemberListMode.CustomerActivityAddGSZ:
        case Enums.MemberListMode.CustomerActivityRemoveGSZ:
        case Enums.MemberListMode.Activity: {
            return (React.createElement(View, { testID: 'test-id-d6a24b06-adb7-11e7-abc4-cec278b6b50a-ActivityMemberList', style: Styles.navigationActivityMemberList },
                React.createElement(View, { testID: "test-id-43adb9c8-d451-11e7-9296-cec278b6b50a", style: Styles.activityMemberListPage }, props.memberList &&
                    Array.isArray(props.memberList.data) &&
                    props.memberList.data.length > 1
                    ? React.createElement(Button, { testID: 'test-id-2a9d93fa-d450-11e7-9296-cec278b6b50a', type: ButtonType.TEXT, onExecute: props.navigateToSelectMemberIsGeneralScreen },
                        React.createElement(Text, { style: Styles.addMainPersonInTeam, testID: 'test-id-237e42b8-d450-11e7-9296-cec278b6b50a' }, `Выбрать главного исполнителя`))
                    : null),
                React.createElement(View, { testID: "test-id-4ea015ec-d451-11e7-9296-cec278b6b50a", style: Styles.activityAddMemberInTeam }, props.currentCustomerManaged &&
                    props.currentCustomerManaged.id != '' ?
                    React.createElement(PopoverTarget, { testID: 'test-id-be8017c4-adb7-11e7-abc4-cec278b6b50a-ActivityMemberList', refName: 'addMemberMenu' },
                        React.createElement(NavigationIconButton, { testID: 'test-id-c31d5ec2-adb7-11e7-abc4-cec278b6b50a-ActivityMemberList', type: NavigationIconButtonType.ADD, onExecute: props.performPopoverAddShow }))
                    : React.createElement(NavigationIconButton, { testID: 'test-id-c31d5ec2-adb7-11e7-abc4-cec278b6b50a-ActivityMemberList', type: NavigationIconButtonType.ADD, onExecute: () => props.performInputEmployeeSource(Enums.MemberListEmployeeSource.Employee) }))));
        }
        case Enums.MemberListMode.CustomerManaged: {
            return (React.createElement(View, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-CustomerManaged-1' },
                React.createElement(View, { style: { height: 44, justifyContent: 'flex-end', flexDirection: 'row', marginRight: 10 } },
                    React.createElement(PopoverTarget, { testID: 'test-id-19347c4e-8d04-8f56-e56d-2226ca8af123CustomerManaged', refName: 'addMemberMenu' },
                        React.createElement(NavigationIconButton, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-BCustomerManagedUTTON-ADD-ICON', type: NavigationIconButtonType.ADD, onExecute: props.performPopoverAddShow })))));
        }
        case Enums.MemberListMode.Agent: {
            return (React.createElement(View, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-Agent-1' },
                React.createElement(View, { style: { height: 44, justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20 } },
                    React.createElement(PopoverTarget, { testID: 'test-id-19347c4e-8d04-8f56-e56d-2226ca8af123', refName: 'addMemberMenu' },
                        React.createElement(NavigationIconButton, { testID: 'test-id-getMemberListEditableContentExpendedModeMenu-AgentBUTTON-ADD-ICON', type: NavigationIconButtonType.ADD, onExecute: props.performPopoverAddShow })))));
        }
        default: {
            return null;
        }
    }
};
// Список TeamMembers в режиме редактирования
const getMemberListEditableContent = (props) => {
    if (props.isExpandedMode) {
        if (props.memberListSaveInProgress) {
            return (React.createElement(View, { style: Styles.loaderContainer },
                React.createElement(LoaderWithText, { text: 'Сохранение списка сотрудников...', testID: "test-id-9e090ee1-c60f53\u043A\u0443-24\u0435\u043A" })));
        }
        if (props.memberListSaveError) {
            return (React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: props.memberListSaveError && props.memberListSaveError.comment && props.memberListSaveError.comment !== ''
                    ? props.memberListSaveError.comment
                    : 'Техническая ошибка.', description: props.memberListSaveError && props.memberListSaveError.message && props.memberListSaveError.message !== ''
                    ? props.memberListSaveError.message
                    : 'Пожалуйста, обратитесь в службу сопровождения.', onRefresh: props.performSave }));
        }
        if (props.customerForActivityFetching) {
            return (React.createElement(View, { style: Styles.loaderContainer },
                React.createElement(LoaderWithText, { text: 'Загрузка данных по клиенту...', testID: "test-id-9e090ee1-24\u04402-524\u0440\u043F2" })));
        }
        if (props.customerForActivityError) {
            return (React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: props.customerForActivityError && props.customerForActivityError.comment && props.customerForActivityError.comment !== ''
                    ? props.customerForActivityError.comment
                    : 'Техническая ошибка.', description: props.customerForActivityError && props.customerForActivityError.message && props.customerForActivityError.message !== ''
                    ? props.customerForActivityError.message
                    : 'Пожалуйста, обратитесь в службу сопровождения.', onRefresh: props.performInputEmployeeSourceActivity }));
        }
        return (React.createElement(View, { testID: 'test-id-5c9ef763-b2a7-ae35-17ca-8e79d6adec39', style: { flex: 1, flexDirection: 'column' } },
            getMemberListEditableContentExpandedModeMenu(props),
            !props.memberList || !props.memberList.data || props.memberList.data.length === 0 ?
                React.createElement(View, { testID: 'test-id-f72b033f-9aca-c990-3fa8-27aad08e4fzz', style: Styles.noTeamFoundView },
                    React.createElement(Text, { testID: 'test-id-f72b033f-9aca-c990-3fa8-27aaddde4fzz' }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"))
                :
                    getExpandedEditableMemberList(props.memberList.data, props)));
    }
    if (!props.memberList || !props.memberList.data || props.memberList.data.length === 0) {
        return (React.createElement(View, { testID: 'test-id-f72b033f-9aca-c990-3fa8-27aad08e4f5b' }));
    }
    return (React.createElement(View, { testID: 'test-id-5c9ef763-b2a7-ae35-17ca-8e79d6adec39', style: { flex: 1, flexDirection: 'column' } }, getTeamPersonListEditableContentRows(props.memberList.data, props)));
};
const SelectClassifier = (props) => {
    // Рендеринг строки (RadioButton для RadioGroup)
    const getRoleLines = (classifierList) => classifierList.data
        .map((item) => React.createElement(RadioButton, { testID: 'test-id-07ddb4bc-aca2-2e83-6569-c2409a7157fe', key: `radio-${item.code}`, value: item.code, label: item.value }));
    // ClassifierList отсортированный в алфавитном порядке по полю value
    const alphabeticallySortedListOfRoles = util.sortClassifierListByValueField(props.classifierList);
    return (React.createElement(RadioGroup, { testID: 'test-id-287b5d0d-55a1-fec9-b9e2-09bfbe184cb3', value: props.selectedCode, onChange: (index, value) => props.performSelect(alphabeticallySortedListOfRoles.data[index]) }, getRoleLines(alphabeticallySortedListOfRoles)));
};
// Строка для списка TeamMembers в режиме просмотра
const getTeamPersonListContentRows = (memberList, props) => (React.createElement(View, null, memberList.map((item, i) => {
    return (React.createElement(View, { key: i.toString(), testID: 'test-id-a924407d-f7d4-c3da-ae7d-168a261cc8fc', style: Styles.RowUnderlined },
        React.createElement(View, { style: Styles.RowUnderlinedInner, testID: 'test-id-382b34f7-8e8a-1b11-60ed-0031f6aaf4f5' },
            React.createElement(View, { testID: 'test-id-382b34f7-8e8a-1b11-60ed-0031f6c1f4f5', style: Styles.avatarWrapper },
                React.createElement(TeamMemberAvatar, Object.assign({ testID: 'test-id-fe4b46f2-00a2-c023-b86a-4708fffd9d2a' }, item)),
                item.isGeneral ? (React.createElement(View, { testID: 'test-id-d78aacde-ff2d-37d3-28d0-b55bb00334e4', style: Styles.CrownWrapper },
                    React.createElement(Icon, { testID: 'test-id-2ed626d0-5409-04f1-aba8-b0c0e377b2be', type: IconType.MrmCrown }))) : null),
            React.createElement(View, { testID: 'test-id-ab6f43ff-28f9-8fb3-8624-c31a3e68ee32', style: [Styles.teamMemberInfoViewWrapper, Styles.teamMemberInfoViewMarginWrapper] },
                React.createElement(TeamMemberInfo, { testID: 'test-id-65146ee7-27e1-cf60-7a8e-5956039b3d62', data: item, props: props })),
            React.createElement(View, { testID: 'test-id-184dd70d-fa1a-2fc5-2064-c0ba38600f43', style: Styles.RowUnderlinedCenter },
                React.createElement(Button, { testID: 'test-id-066dde19-07ff-7023-7144-f2159b11d936', onExecute: () => props.performNavigateToMemberScreen(item.id) },
                    React.createElement(Icon, { testID: 'test-id-d548333c-e63e-e0cd-9179-6ac055ab3800', disabled: true, type: IconType.MrmLink }))))));
})));
// Строка для списка TeamMembers в режиме поиска
const getMemberListSearchContentRows = (memberSearchList, props) => {
    return memberSearchList
        .map((item, index) => (React.createElement(ProfileRow, { testID: 'test-id-20437c9d-1fff-c423-bec0-13fe4b0cc302', key: index.toString(), onInfoPress: () => props.performNavigateToMemberScreen(item.id), onRowPress: () => props.performMemberSearchListSelect(item), personInitials: util.getAgentInitials(item), hasCrown: item.isGeneral, fullName: item.fullName || util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.UNDEFINED), isBlocked: item.isBlocked, isAccessDenied: false, jobOrPositionTitle: getBottomText(item, index, props), underlined: false, child: null })));
};
// Строка для списка TeamMembers в режиме редактирования
const getTeamPersonListEditableContentRows = (memberList, props) => {
    return memberList.map((item, i) => swipableRow(item, i, props));
};
const swipableRow = (item, i, props) => (React.createElement(SwipeableItem, { testID: 'test-id-20437c9d-1fff-c423-bec0-13fe4b0cc302', isRightActionMenuOpen: false, rightActionMenu: deleteButton(i, props), onRightActionMenuOpen: (isOpen) => {
    }, onToggleRight: () => {
    }, onPress: () => {
    }, key: `teamPersonListEditableContentRow_${i}` },
    React.createElement(View, { testID: 'test-id-a924407d-f7d4-c3da-ae7d-168a261cc8fc', style: Styles.swipeableRow },
        React.createElement(View, { testID: 'test-id-382b34f7-8e8a-1b11-60ed-0031f6c1f4f5', style: Styles.avatarWrapper },
            React.createElement(TeamMemberAvatar, Object.assign({ testID: 'test-id-fe4b46f2-00a2-c023-b86a-4708fffd9d2a' }, item)),
            item.isGeneral ? (React.createElement(View, { testID: 'test-id-d78aacde-ff2d-37d3-28d0-b55bb00334e4', style: Styles.CrownWrapper },
                React.createElement(Icon, { testID: 'test-id-2ed626d0-5409-04f1-aba8-b0c0e377b2be', type: IconType.MrmCrown }))) : null),
        React.createElement(View, { testID: 'test-id-ab6f43ff-28f9-8fb3-8624-c31a3e68ee32', style: [Styles.teamMemberInfoViewWrapper, Styles.teamMemberInfoViewMarginWrapper] },
            React.createElement(TeamMemberInfo, { testID: 'test-id-65146ee7-27e1-cf60-7a8e-5956039b3d62', data: item, props: props })))));
const getExpandedMemberList = (memberList, props) => {
    let loaderText = 'клиенту';
    switch (props.currentMode) {
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.Deal: {
            loaderText = 'сделке';
            break;
        }
        case Enums.MemberListMode.Activity: {
            loaderText = 'задаче';
            break;
        }
    }
    if (props.memberListSaveInProgress) {
        return (React.createElement(View, { testID: 'test-id-5c9ef763-b2a7-ae35-17ca-8df9ddfdfdec39', style: Styles.memberListSaveLoaderContainer },
            React.createElement(LoaderWithText, { text: `Сохранение изменений по ${loaderText}`, testID: 'test-id-5cdfdff763-b2a7-ae35-17ca-8e79ddfdfdec39' })));
    }
    if (props.memberListSaveError) {
        return (React.createElement(FullScreenError, { testID: 'test-id-7632026b-wvwv-5gvv-a001-rfqeq', title: props.memberListSaveError && props.memberListSaveError.comment && props.memberListSaveError.comment !== ''
                ? props.memberListSaveError.comment
                : 'Техническая ошибка.', description: props.memberListSaveError && props.memberListSaveError.message && props.memberListSaveError.message !== ''
                ? props.memberListSaveError.message
                : 'Пожалуйста, обратитесь в службу сопровождения.', onRefresh: props.performSave }));
    }
    return (React.createElement(View, { testID: 'test-id-getExpandedMemberRows-tableContainer-43grq3rq', style: Styles.flex },
        React.createElement(Table, { testID: 'test-id-getExpandedMemberRows-table', style: Styles.flex, underlined: true },
            React.createElement(TableBody, { testID: 'test-id-getExpandedMemberRows-tableBody' }, memberList.map((item, index) => (React.createElement(ProfileRow, { testID: 'test-id-20437c9d-1fff-c423-bec0-13fe4b0cc302', key: index.toString(), onInfoPress: () => props.performNavigateToMemberScreen(item.id), onRowPress: () => props.performNavigateToMemberScreen(item.id), personInitials: util.getAgentInitials(item), hasCrown: item.isGeneral, fullName: item.fullName || util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.UNDEFINED), isBlocked: item.isBlocked, isAccessDenied: false, jobOrPositionTitle: getBottomText(item, index, props), underlined: false, child: null })))))));
};
const getBottomText = (item, i, props) => {
    switch (props.currentMode) {
        case Enums.MemberListMode.Agent: {
            return item.isBlocked ? `${item.positionName || 'Не определено'}, блокирован` : (item.positionName || 'Не определено');
        }
        case Enums.MemberListMode.Activity: {
            const memberRole = item.jobTitle || null;
            const isMemberGeneral = item.isGeneral ? "главный исполнитель" : null;
            const isMemberBlock = item.isBlocked ? "блокирован" : null;
            return [memberRole, isMemberGeneral, isMemberBlock]
                .filter((item) => item != null)
                .join(", ");
        }
        default: {
            return `${props.isLocalSearch
                ? item.role && item.role.value || ''
                : item.jobTitle || ''}${item.isGeneral && props.isDealCardOwner
                ? ', ВКС'
                : ''}${item.isBlocked
                ? ', блокирован'
                : ''}`;
        }
    }
};
const getExpandedEditableMemberList = (memberList, props) => (React.createElement(Table, { testID: 'test-id-getExpandedEditableMemberList-table', style: Styles.flex, underlined: true },
    React.createElement(TableBody, { testID: 'test-id-v-tableBody' }, memberList.map((item, i) => (React.createElement(ActionProfileRow, { key: `test-id-member-list-ActionProfileRow-row-key-${item.id || i}`, avatarInitials: util.getAgentInitials(item), isDisabled: item.isGeneral, isGeneral: item.isGeneral, isBlocked: item.isBlocked, onExecute: () => { props.performMemberDelete(i); }, infoTitle: item.fullName || util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.UNDEFINED), infoSubTitle: getBottomText(item, i, props), infoSubTitleStyle: item.isBlocked ? Styles.bottomRowTextBlocked : Styles.bottomRowText }))))));
const BackButtonHeader = (key, callback, title) => React.createElement(LeftPageHeader, { testID: `test-id-ViewMemberList-1-${key}` },
    React.createElement(NavigationBackButton, { testID: `test-id-ViewMemberList-2-${key}`, title: false, onClick: callback }),
    React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: `test-id-ViewMemberList-3-${key}` },
        React.createElement(NavigationTextButton, { testID: `test-id-ViewMemberList-4-${key}`, title: title, onExecute: callback })));
/*
 * [/CONTENT] Генераторы контента
 */
/*
 * [PAGES] СТРАНИЦЫ
 * для использования в ContentPanel
 */
const getLeftNavigationHeader = (props) => {
    if (props.currentMode == Enums.MemberListMode.Activity) {
        return BackButtonHeader('LeftPageHeaderMemberListActivity', props.navigateMemberListScreenBack, 'Задача');
    }
    if (props.currentMode == Enums.MemberListMode.Gsz) {
        return BackButtonHeader('LeftPageHeaderMemberListGsz', props.navigateMemberListScreenBack, ' ');
    }
    if (props.currentMode == Enums.MemberListMode.Deal || props.currentMode == Enums.MemberListMode.DealEditor) {
        return BackButtonHeader('LeftPageHeaderMemberListDeal', props.navigateMemberListScreenBack, 'Сделка');
    }
    if (props.currentMode == Enums.MemberListMode.CustomerManaged) {
        return BackButtonHeader('LeftPageHeaderMemberListCustomerManaged', props.navigateMemberListScreenBack, 'Клиент');
    }
    if (props.currentMode == Enums.MemberListMode.Agent) {
        return BackButtonHeader('LeftPageHeaderMemberListAgent', props.navigateMemberListScreenBack, 'Представитель');
    }
    if (props.currentMode == Enums.MemberListMode.CustomerActivityAddOrganization) {
        return BackButtonHeader('LeftPageHeaderMemberListActivity', props.navigateMemberListScreenBack, 'Задача');
    }
    if (props.currentMode == Enums.MemberListMode.CustomerActivityRemoveOrganization) {
        return BackButtonHeader('LeftPageHeaderMemberListActivity', props.navigateMemberListScreenBack, 'Задача');
    }
    if (props.currentMode == Enums.MemberListMode.CustomerActivityAddGSZ) {
        return BackButtonHeader('LeftPageHeaderMemberListActivity', props.navigateMemberListScreenBack, 'Задача');
    }
    if (props.currentMode == Enums.MemberListMode.CustomerActivityRemoveGSZ) {
        return BackButtonHeader('LeftPageHeaderMemberListActivity', props.navigateMemberListScreenBack, 'Задача');
    }
    return (React.createElement(LeftPageHeader, { testID: `test-id-ViewMemberList-LeftPageHeader-Empty` }));
};
// Страница #0: список команды клиента
const PageViewListMembers = (props) => {
    const getPageTitleMemberList = (props) => {
        if (props.currentMode == Enums.MemberListMode.Activity ||
            props.currentMode == Enums.MemberListMode.CustomerActivityAddGSZ ||
            props.currentMode == Enums.MemberListMode.CustomerActivityRemoveGSZ) {
            return 'задачи';
        }
        if (props.currentMode == Enums.MemberListMode.Deal ||
            props.currentMode == Enums.MemberListMode.DealEditor ||
            props.currentMode == Enums.MemberListMode.DealStageMainClientManager ||
            props.currentMode == Enums.MemberListMode.DealStageMainCreditOfficer ||
            props.currentMode == Enums.MemberListMode.DealStageMemberMonitoring) {
            return 'сделки';
        }
        if (props.currentMode == Enums.MemberListMode.Agent) {
            return 'представителя';
        }
        return 'клиента';
    };
    if (props.isEditorMode) {
        // Редактирование команды в режиме подробной информации
        if (props.isExpandedMode) {
            return (React.createElement(Page, { testID: 'test-id-e2cf98ce-bd0b-d8cd-38d7-6ef253845dc2', scrollEnabled: true, content: getMemberListEditableContent(props) },
                BackButtonHeader('LeftPageHeaderMemberList', props.performCancel, 'Команда'),
                React.createElement(CenterPageHeader, { testID: 'test-id-399e76bc-8f86-8c9c-272d-c48784629dce' },
                    React.createElement(H2, { testID: 'test-id-1b0f5543-ee44-793a-3d97-b5a80e2ee732' }, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B")),
                React.createElement(RightPageHeader, { testID: 'test-id-24a7d10d-00b3-ab57-25a0-f4c324d6ab42' },
                    React.createElement(NavigationTextButton, { testID: 'test-id-208e8bca-6c9f-e2e4-55ef-7e54865977ed', title: '\u0413\u043E\u0442\u043E\u0432\u043E', onExecute: props.performSave }))));
        }
        // Список членов команды в режиме редактирования
        return (React.createElement(Page, { testID: 'test-id-e2cf98ce-bd0b-d8cd-38d7-6ef253845dc2', scrollEnabled: true, content: getMemberListEditableContent(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-9d834a94-56e5-4813-836a-284318e55a98' },
                React.createElement(NavigationTextButton, { testID: 'test-id-208e8bca-6c9f-e2e4-55ef-7e54865977ed', title: '\u0413\u043E\u0442\u043E\u0432\u043E', onExecute: props.performSave })),
            React.createElement(CenterPageHeader, { testID: 'test-id-399e76bc-8f86-8c9c-272d-c48784629dce' },
                React.createElement(H2, { testID: 'test-id-1b0f5543-ee44-793a-3d97-b5a80e2ee732' }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")),
            React.createElement(RightPageHeader, { testID: 'test-id-24a7d10d-00b3-ab57-25a0-f4c324d6ab42' },
                React.createElement(NavigationIconButton, { testID: 'test-id-93d6e8d2-8d14-fcb4-050c-be6b209c5e87', type: NavigationIconButtonType.ADD, onExecute: props.navigateToMemberSearchScreen }))));
    }
    // Список членов команды в режиме просмотра
    return (React.createElement(Page, { testID: 'test-id-1046169a-5234-a509-71b9-ab64566a7b7e', scrollEnabled: true, content: props.isExpandedMode ? getExpandedMemberList(props.memberList.data, props) : getTeamPersonListContent(props) },
        getLeftNavigationHeader(props),
        React.createElement(CenterPageHeader, { testID: 'test-id-e8d7f7e8-1b20-fcd8-0102-7c341de55f63' },
            React.createElement(H2, { testID: 'test-id-7bb14479-e74c-3630-fd55-aafdac31d20c' }, `Команда ${getPageTitleMemberList(props)}`)),
        React.createElement(RightPageHeader, { testID: 'test-id-0c51abfd-82aa-cd18-da87-f5ade5cbcd60' },
            props.currentMode == Enums.MemberListMode.Activity || props.currentMode == Enums.MemberListMode.Deal ||
                props.currentMode == Enums.MemberListMode.DealEditor || props.currentMode == Enums.MemberListMode.Agent ||
                props.currentMode == Enums.MemberListMode.CustomerManaged ? React.createElement(NavigationIconButton, { testID: 'test-id-93d6e8d2-8d14-fcb4-050c-be6b209c5e87', type: NavigationIconButtonType.SEARCH, onExecute: () => { props.navigateToMemberSearchLocalScreen(Enums.MemberListEmployeeSource.MemberList, false); } }) : null,
            props.isEditorEnabled ? React.createElement(NavigationTextButton, { testID: 'test-id-93db0152-3356-49fa-f43a-17d05fd83d42', title: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C', onExecute: props.performEdit }) : null)));
};
// Страница #1: просмотр деталей члена команды клиента
const PageViewMemberDetails = (props) => (React.createElement(Page, { testID: 'test-id-54462012-742a-a1a2-0a82-2d4113498c7a', scrollEnabled: true, content: React.createElement(ContainerEmployee, { testID: 'test-id-f73263a2-bad4-d038-9a9b-965605a54d86' }) }, props.currentMode == Enums.MemberListMode.Agent ||
    props.currentMode == Enums.MemberListMode.CustomerManaged ||
    props.currentMode == Enums.MemberListMode.Activity
    ? React.createElement(LeftPageHeader, { testID: 'test-id-aPageViewMemberDetails-LeftPageHeader' })
    : (React.createElement(LeftPageHeader, { testID: 'test-id-a5dd121d-1daf-06f4-c6dd-ac2b043a472d' },
        React.createElement(NavigationBackButton, { testID: 'test-id-eea6d541-690e-dc51-6d69-dcc699fc6d9b', title: false, onClick: props.navigateBack })))));
// Страница #4: поиск члена в MemberList в двух вариантах - с добавлением в команду и без
const PageLocalSearchMembersListScreen = (props) => (React.createElement(Page, { testID: 'test-id-fa869d0d-7ce5-2e36-6f83-c80555f7dezz', scrollEnabled: true, content: getMemberListSearchContentLocal(props) },
    React.createElement(LeftPageHeader, { testID: 'test-id-850205db-ee11-081e-3828-a934ce3404b8' })));
const PageSelectMemberIsGeneralTitle = (currentMode) => {
    switch (currentMode) {
        case Enums.MemberListMode.Deal: return 'Выберите ВКС';
        case Enums.MemberListMode.DealEditor: return 'Выберите ВКС';
        case Enums.MemberListMode.Activity: return 'Выберите главного исполнителя';
        default: return "Выберите";
    }
};
// Страница #5: Выбор главного
const PageSelectMemberIsGeneral = (props) => (React.createElement(Page, { testID: 'test-id-fa869d0d-7ce5-2e36-6f83-c805\u044B\u0432f7zzzz', scrollEnabled: true, content: getPageSelectMemberIsGeneralContent(props) },
    BackButtonHeader('LeftPageHeaderMemberIsGeneral', props.navigateBack, 'Изменение команды '),
    React.createElement(CenterPageHeader, { testID: 'test-id-zz0205db-ee11-081e-3828-a934cell04b8' },
        React.createElement(H2, { testID: 'test-id-zz712dcd-59af-3fcf-91b1-cd5a9d519f11' }, PageSelectMemberIsGeneralTitle(props.currentMode)))));
const getPageSelectMemberIsGeneralContent = (props) => (React.createElement(Table, { testID: 'test-id-getPageSelectMemberIsGeneralContent-table', style: Styles.flex, underlined: true },
    React.createElement(TableBody, { testID: 'test-id-getPageSelectMemberIsGeneralContent-table-body' }, props.memberList.data.map((item, index) => (React.createElement(ProfileRow, { testID: 'test-id-20437c9d-1fff-c423-bec0-13fe4b0cc302', key: index.toString(), onInfoPress: () => props.performNavigateToMemberScreen(item.id), onRowPress: () => props.performSelectGeneralMember(index), personInitials: util.getAgentInitials(item), hasCrown: item.isGeneral, fullName: item.fullName || util.getPlaceholderStringRepresentation(util.UndefinedValuesPlaceholder.UNDEFINED), isBlocked: item.isBlocked, isAccessDenied: false, jobOrPositionTitle: getBottomText(item, index, props), underlined: false, child: null }))))));
const getPageSearchMembersNavigation = (props) => {
    switch (props.inputEmployeeSource) {
        case Enums.MemberListEmployeeSource.CustomerManaged: {
            return ([BackButtonHeader('LeftPageHeaderMemberSearch1', props.navigateBackFromMembersSearchPage, 'Назад'),
                React.createElement(CenterPageHeader, { key: '2', testID: 'test-id-850205db-ee11-081e-3828-a934cell04b8' },
                    React.createElement(H2, { testID: 'test-id-c2712dcd-59af-3fcf-91b1-cd5a9d519f11' }, "\u0412\u044B\u0431\u043E\u0440 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0438\u0437 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")),
                React.createElement(RightPageHeader, { key: '3', testID: 'test-id-7af2cb33-44bc-3b53-d1e6-e331a587788d' },
                    React.createElement(NavigationIconButton, { testID: 'test-id-1a9c0e8b-8ba5-1945-ce46-7e969ll28dff', type: NavigationIconButtonType.SEARCH, onExecute: () => { props.navigateToMemberSearchLocalScreen(Enums.MemberListEmployeeSource.CustomerManaged, true); } }))
            ]);
        }
        default: {
            return (React.createElement(LeftPageHeader, { testID: 'test-id-850205db-ee11-081e-3828-a934ce3404b8' }));
        }
    }
};
// Страница #2: добавление/поиск члена в команду клиента
const PageSearchMembers = (props) => (React.createElement(Page, { testID: 'test-id-fa869d0d-7ce5-2e36-6f83-c80555f7deea', scrollEnabled: true, content: getMemberListSearchContainer(props) }, getPageSearchMembersNavigation(props)));
const PageSearchMembersForDealStage = (props) => (React.createElement(Page, { testID: 'test-id-fa869d0d-7ce5-2e36-6f83-c80555f7deea-forDealStage', scrollEnabled: true, content: 
    //FIXME проверить верстку на предмет избыточности вложенных View
    React.createElement(View, { style: Styles.memberListSearchContentContainer },
        React.createElement(View, { style: Styles.maxWidthFull }, getMemberListSearchContainer(props))) }, getPageSearchMembersNavigation(props)));
const getRoleClassifierValues = (props) => {
    switch (props.currentMode) {
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.Deal: {
            if (props.currentDeal.requestTypeClassifier && props.currentDeal.requestTypeClassifier.code == 'KK') {
                return props.classifierDictionary.KK_SALE_TEAM_ROLES;
            }
            return props.classifierDictionary.UNIVERSAL_SALE_TEAM_ROLES;
        }
        case Enums.MemberListMode.CustomerActivityAddOrganization:
        case Enums.MemberListMode.CustomerActivityRemoveOrganization:
        case Enums.MemberListMode.CustomerActivityAddGSZ:
        case Enums.MemberListMode.CustomerActivityRemoveGSZ:
        case Enums.MemberListMode.Activity: {
            return props.classifierDictionary.SBRF_ACTION_ROLE;
        }
        default: {
            return props.classifierDictionary.FINS_COVERAGE_ROLE_TYPE;
        }
    }
};
// Страница #3: Назначение роли добавляемому члену команды
const PageSetMemberRole = (props) => (React.createElement(Page, { testID: 'test-id-3111b9c8-6c60-9ede-d4a6-6980c27a51db', scrollEnabled: true, content: React.createElement(SelectClassifier, { testID: 'test-id-f03ca78f-a34a-3fb8-c5fb-3e2701a7ab53', classifierList: getRoleClassifierValues(props), performSelect: props.performMemberRoleSelect, selectedCode: props.inputMemberRole && props.inputMemberRole.code }) },
    BackButtonHeader('LeftPageHeaderMemberListRole1', props.navigateBack, ' '),
    React.createElement(CenterPageHeader, { testID: 'test-id-1ab9ab55-8e8f-0adc-4f5a-c8c847d76ab4' },
        React.createElement(H2, { testID: 'test-id-c2712dcd-59af-3fcf-91b1-cd5a9d519f92' }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C")),
    React.createElement(RightPageHeader, { testID: 'test-id-7af2cb33-44bc-3b53-d1e6-e331a587788d' })));
const ViewMemberList = (props) => (React.createElement(View, { testID: 'test-id-97beb151-c637-c48f-1a49-e31e8a801a02', style: Styles.flex },
    React.createElement(SplitPanel, { testID: 'test-id-17faf817-7cfd-c99b-7c92-8d88bc59c52e', id: util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_MemberList) },
        React.createElement(ContentPanel, { testID: 'test-id-2e60b7ff-2561-ba53-49de-fa227752d8e4', style: { backgroundColor: '#fff' } },
            props.currentMode == Enums.MemberListMode.DealStageMemberMonitoring ||
                props.currentMode == Enums.MemberListMode.DealStageMainCreditOfficer ||
                props.currentMode == Enums.MemberListMode.DealStageMainClientManager
                ? PageSearchMembersForDealStage(props)
                : PageViewListMembers(props),
            PageViewMemberDetails(props),
            PageSearchMembers(props),
            PageSetMemberRole(props),
            PageLocalSearchMembersListScreen(props),
            PageSelectMemberIsGeneral(props))),
    React.createElement(Popover, { testID: 'test-id-13466acf-6f4b-51fb-62ss-7173c406b719Agent', target: PopoverTarget.getRef('addMemberMenu'), opened: props.isVisiblePopoverAdd, onOutsideTap: () => {
            props.performPopoverAddHide();
        }, type: PopoverType.NARROW, position: [PopoverPosition.BOTTOM] }, getMemberAddMenuContent(props))));
export default ViewMemberList;
//# sourceMappingURL=ViewMemberList.js.map