/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewAgentListStyles';
import { ErrorModal } from 'mrmkmcib-app';
import { Button, ButtonType, AccessoryPanel, CenterPageHeader, ContentPanel, NavigationIconButton, NavigationIconButtonType, H2, Icon, IconType, KeyboardType, TableCell, LeftPageHeader, NavigationBackButton, NavigationTextButton, Page, ProfileCell, RadioButton, PopoverType, PopoverPosition, Popover, RadioGroup, RightPageHeader, SplitPanel, Table, TableBody, TableRow, Text, View, } from 'ufs-mobile-platform';
import { defaultValues } from "../models/Models";
import { LoaderWithText } from "mrmkmcib-app";
import { Enums } from '../Enums';
import PopoverTarget from '../modules/PopoverTarget';
import * as Utils from '../common/Util';
import { ProfileRow, SearchInput, ActionProfileRow } from 'mrmkmcib-ui';
const CONTACT_TYPE_CLASS_NAME = 'SBRF_CONTACT_TYPE_GROUP';
const MAIN_CONTACT_VALUE = 'Основной контакт';
const MAIN_CONTACT_CLASS = { classifierName: CONTACT_TYPE_CLASS_NAME, code: 'Main Contact', value: MAIN_CONTACT_VALUE, };
const BASIC_CONTACT_CLASS = { classifierName: CONTACT_TYPE_CLASS_NAME, code: 'Employee', value: 'Сотрудник', };
const getAgentListAddMenuContent = (props) => {
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Deal: {
            return (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-1', style: Styles.agentListAddMenuContent },
                React.createElement(Button, { testID: 'test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2', type: ButtonType.TEXT, onExecute: () => props.performOpenAgentScreen(defaultValues.Agent, Enums.AgentMode.Create, Utils.getAgentContextMode(props.agentListContextMode)) },
                    React.createElement(Text, { testID: 'test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2-TEXT' }, `Создать представителя `))));
        }
        default: {
            return (React.createElement(View, { testID: 'test-id-getMemberAddMenuContent-View-1d', style: Styles.agentListAddMenuContent },
                React.createElement(Button, { testID: 'test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-1d', type: ButtonType.TEXT, onExecute: props.navigateToAgentSearchScreen },
                    React.createElement(Text, { testID: 'test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-1-TEXTd' }, `Искать представителя `)),
                React.createElement(Button, { testID: 'test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2d', type: ButtonType.TEXT, onExecute: () => props.performOpenAgentScreen(defaultValues.Agent, Enums.AgentMode.Create, Utils.getAgentContextMode(props.agentListContextMode)) },
                    React.createElement(Text, { testID: 'test-id-getAgentListAddMenuContent-BUTTON-SELECT-Deal-2-TEXTd' }, `Создать представителя `))));
        }
    }
};
const isVisibleAgentAccessDenied = (props, agent) => {
    if (props.agentListContextMode == Enums.AgentListContextMode.Activity ||
        props.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
        props.agentListContextMode == Enums.AgentListContextMode.NewEditActivity) {
        return false;
    }
    return agent.accessLevel == Enums.AgentAccessLevel.Denied;
};
const getAgentListWatchModeContent = (props) => {
    return React.createElement(View, { style: Styles.main, testID: "test-id-d0b6d4ae-fc50-11e7-8450-fea9aa178066" },
        React.createElement(Table, { noPaddings: true, key: "AgentListMainTable", testID: 'test-id-07f4172b-b7d8-62df-d791-6bd5980d29dd', underlined: true },
            React.createElement(TableBody, { testID: 'test-id-64fc8583-8fc4-b99a-adf1-07c73278e2d3' }, Utils.sortAgentList(props.inputAgentList)
                .map((agent, index) => (React.createElement(ProfileRow, { testID: `test-id-20437c9d-1fff-c423-bec0-13fe4b0cc302_${index}`, key: index.toString(), onRowPress: () => {
                    props.performOpenAgentScreen(agent, Enums.AgentMode.Watch, Utils.getAgentContextMode(props.agentListContextMode));
                }, personInitials: Utils.getAgentInitials(agent), hasCrown: agent.isPrincipal, fullName: agent.fullName || Utils.getFullNameRepresentation(agent) || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED), isBlocked: false, isAccessDenied: isVisibleAgentAccessDenied(props, agent), jobOrPositionTitle: Utils.getAgentCustomerPositionByAgentListContext(props.currentCustomerManaged, agent, props.agentListContextMode), underlined: false, child: null }))))));
};
const getPrincipalPicker = (props) => (React.createElement(Table, { noPaddings: true, testID: 'test-id-getAgentListEdit-table', underlined: true },
    React.createElement(TableBody, { testID: 'test-id-getAgentListEdit-tableBody' }, Utils.sortAgentList(props.inputAgentList)
        .map((agent, key) => React.createElement(TableRow, { testID: "", key: key, onClick: () => props.performAgentListPrincipal(agent.id, !agent.isPrincipal) },
        React.createElement(TableCell, { testID: "test-id-64bd6a66-e7be-11e7-80c1-9a214cf093ae" },
            React.createElement(View, { style: Styles.agentListAvatarRow, testID: "test-id-0adc359e-e7ec-11e7-80c1-9a214cf093ae" },
                React.createElement(View, { style: Styles.principalPickerView, testID: 'test-id-dd3ae036-5175-8ac2-2473-ad3f8dbdd0f9' }, agent.isPrincipal ? (React.createElement(View, { testID: "test-id-6abf8b56-e7be-11e7-80c1-9a214cf093ae", style: Styles.buttonCrownView },
                    React.createElement(Button, { testID: "test-id-a6de38ce-f2c4-11e7-8c3f-9a214cf093ae" },
                        React.createElement(Icon, { testID: 'test-id-2ed626d0-5409-04f1-aba8-b0c0e377b2be', type: IconType.MrmCrown })))) : (React.createElement(View, { testID: 'test-id-d78bbcdb-ff2d-37d3-2dd7-b55bb2f334e4', style: Styles.CircleGrey }))),
                React.createElement(View, { testID: 'test-id-2ec9b3a5-4b74-c6b3-b575-2f72fdbbbb92', style: Styles.avatarWrapper },
                    React.createElement(View, { testID: 'test-id-be6479aa-f8bf-e2fb-e700-fb9db280e4f0', style: Styles.avatar },
                        React.createElement(Text, { testID: 'test-id-7b3a7ce6-92ae-8c41-ef20-887ddbe4dd41', style: Styles.avatarLabel }, Utils.getAgentInitials(agent)))),
                React.createElement(View, { testID: 'test-id-3a262f1f-f9e4-bbf2-56a3-bcc73d9646ff', style: Styles.avatarSubtitle },
                    React.createElement(Text, { testID: 'test-id-5c969bf5-9bbc-b9e2-6dbd-535d43f33b67', style: Styles.avatarFullName }, agent.fullName),
                    React.createElement(Text, { testID: 'test-id-5437e292-0bbd-787c-1a78-8c5e82361fbb', style: Styles.avatarSubtitleLabel }, Utils.getAgentCustomerPosition(props.currentCustomerManaged, agent))))))))));
const deleteButton = (onClick) => (React.createElement(View, { testID: 'test-id-56297dbb-8820-3c03-19da-f5699019b348', style: Styles.deleteButton },
    React.createElement(Button, { testID: 'test-id-04d1cffe-4501-aeb6-894c-f45f1ee15662', type: ButtonType.DEFAULT, onExecute: onClick },
        React.createElement(Text, { testID: 'test-id-faadeac4-845d-e549-4c98-728bbb5ee1e8', style: Styles.deleteButtonText }, 'Удалить'))));
const getAgentListActionButtonList = (props) => {
    if (props.agentListAccessLevel == Enums.AgentListAccessLevel.Read) {
        return null;
    }
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity: {
            return React.createElement(View, { style: Styles.activityAgentListActionListView },
                React.createElement(Button, { testID: 'test-id-73e632b2-e664-11e7-80c1-9a214cf093ae', type: ButtonType.TEXT, onExecute: props.navigateToAgentSearchScreen },
                    React.createElement(Text, { testID: 'test-id-6db30bd6-e664-11e7-80c1-9a214cf093ae' }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
        }
        case Enums.AgentListContextMode.Deal:
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal: {
            return React.createElement(View, { style: Styles.activityAgentListActionListView },
                React.createElement(NavigationIconButton, { testID: 'test-id-61559aa0-d2af-0ebd-9831-3d32c5fbca96', type: NavigationIconButtonType.ADD, onExecute: props.navigateToAgentSearchScreen }));
        }
        case Enums.AgentListContextMode.Customer: {
            return React.createElement(View, { testID: 'test-id-165a1a00-e4fc-11e7-80c1-9a214cf093ae', style: Styles.customerAgentListActionListView },
                React.createElement(Button, { testID: 'test-id-3491ab68-9aa2-396a-23b1-130d244c4acf', type: ButtonType.TEXT, onExecute: () => props.navigateToPrincipalPickerScreen() }, props.inputAgentList && Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length > 0 ?
                    React.createElement(Text, { testID: 'test-id-eebe2909-6369-316d-5e29-f2e3ed85fa12' }, "\u0412\u044B\u0431\u043E\u0440 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E") : null),
                React.createElement(PopoverTarget, { testID: 'test-id-19347c4e-8114-8f56-e56d-1111ca8af123', refName: 'addAgentMenu' },
                    React.createElement(Button, { testID: 'test-id-2e7b2cbe-e65f-11e7-80c1-9a214cf093ae', type: ButtonType.TEXT, onExecute: props.performMenuAgentAddShow },
                        React.createElement(Text, { testID: 'test-id-3611ad36-e65f-11e7-80c1-9a214cf093ae' }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
        }
        default: return null;
    }
};
const getLeftNavigationButtonTitle = (agentListContextMode) => {
    switch (agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity:
            {
                return "Задача";
            }
        case Enums.AgentListContextMode.Customer:
            {
                return "Клиент";
            }
        case Enums.AgentListContextMode.Deal:
            {
                return "Сделка";
            }
        default: return "";
    }
};
const getLeftNavigationButtonWatchMode = (props) => {
    return [React.createElement(NavigationBackButton, { key: 'agentListLeftNavigationBackButtonWatchMode', title: false, testID: 'test-id-45y45hhy-67ij8k-98krjh-6879k-797mmbb', onClick: props.performCloseAgentListScreen }),
        React.createElement(View, { key: 'agentListLeftNavigationViewButtonWatchMode', style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-dd33sd1e-5687-0000-167a-0ca21eddf300" },
            React.createElement(NavigationTextButton, { testID: "test-id-c5fb1ff3-0000-e36e-847f-3df1sdsdsdd16a", title: getLeftNavigationButtonTitle(props.agentListContextMode), onExecute: props.performCloseAgentListScreen }))
    ];
};
const getLeftNavigationButtonEditMode = (props) => {
    switch (props.agentListMode) {
        case Enums.AgentListMode.Watch: {
            return (React.createElement(NavigationBackButton, { key: '72c8d27a-e4c2-11e7-80c1-9a214cf093ae', testID: 'test-id-6b2ab164-e4c2-11e7-80c1-9a214cf093ae', title: false, onClick: props.performCloseAgentListScreen }));
        }
        default: {
            return React.createElement(NavigationTextButton, { testID: 'test-id-9d50c17a-d127-0e88-e788-f70407067fd1', title: 'Отмена', onExecute: props.performCancel });
        }
    }
};
const getLeftNavigationButton = (props) => {
    switch (true) {
        case props.agentListMode == Enums.AgentListMode.Edit: {
            return getLeftNavigationButtonEditMode(props);
        }
        case props.agentListMode == Enums.AgentListMode.Watch: {
            return getLeftNavigationButtonWatchMode(props);
        }
    }
};
const getAgentListEditModeContent = (props) => (React.createElement(View, { testID: 'test-id-4041b5809' },
    getAgentListActionButtonList(props),
    React.createElement(Table, { noPaddings: true, testID: 'test-id-getAgentListEdit-table', underlined: true },
        React.createElement(TableBody, { testID: 'test-id-getAgentListEdit-tableBody' }, Utils.sortAgentList(props.inputAgentList)
            .map((agent, key) => {
            const jobTitle = Utils.getAgentCustomerPositionByAgentListContext(props.currentCustomerManaged, agent, props.agentListContextMode);
            return (React.createElement(ActionProfileRow, { key: `test-id-member-list-ActionProfileRow-row-key-${agent.id}${key}`, onOpenDeletePanel: () => props.performOpenAgentDeletePanel(agent), onCancel: () => props.performCloseAgentDeletePanel(agent), isDeletePanelOpened: props.agentListOpenedDeletePanel.some((agentDeletePanel) => {
                    return agentDeletePanel.id === agent.id;
                }), avatarInitials: Utils.getAgentInitials(agent), isDisabled: agent.isPrincipal, isGeneral: agent.isPrincipal, isBlocked: agent.isBlocked, onExecute: () => props.performAgentDelete(agent), infoTitle: agent.fullName || Utils.getFullNameRepresentation(agent) || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED), infoSubTitle: `${jobTitle}${agent.isPrincipal ? ' (Основной контакт)' : ''}`, infoSubTitleStyle: Styles.avatarSubtitleLabel }));
        }))),
    getErrorModalWindow(props)));
const getPlaceholderSeachAgent = (props) => {
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity: {
            return React.createElement(View, { style: Styles.SearchAgentPlaceholderView, testID: "test-id-9396ceea-bf96-11e7-abc4-cec278b6b50a" },
                React.createElement(Text, { testID: 'test-id-9883be04-bf96-11e7-abc4-cec278b6b50a', style: Styles.SearchPlaceholderText }, props.agentSearchList &&
                    Array.isArray(props.agentSearchList.data) &&
                    props.agentSearchList.data.length == 0 ?
                    'У клиента не добавлено ни одного представителя. ' +
                        'Перейдите в карточку клиента и добавьте представителей' :
                    'Поиск представителя по ФИО'));
        }
        default: {
            return React.createElement(View, { testID: "test-id-c9d5270e-bf91-11e7-abc4-cec278b6b50a", style: Styles.SearchAgentPlaceholderView },
                React.createElement(Text, { testID: 'test-id-getSearchAgentFormContentedf9c3ad-c2fe-4711-4bac-dbfb55cdfxxc', style: Styles.SearchPlaceholderText }, 'Поиск представителя по ФИО'));
        }
    }
};
const getPlaceholderEmptyResult = (props) => {
    switch (props.agentListContextMode) {
        default: {
            return React.createElement(View, { testID: "test-id-7518b172-bf96-11e7-abc4-cec278b6b50a", style: Styles.SearchAgentPlaceholderView },
                React.createElement(Text, { testID: 'test-id-7d9b1326-bf96-11e7-abc4-cec278b6b50a', style: Styles.SearchPlaceholderText }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"));
        }
    }
};
const getAgentListLoaderMessage = (props) => {
    if (props.agentListFetching)
        return 'Получение списка представителей';
    if (props.agentListSaveInProgress)
        return 'Сохранение изменений списка представителей';
    if (props.agentSearchListFetching)
        return 'Поиск представителей';
    return '';
};
const getLoader = (props) => (React.createElement(LoaderWithText, { text: getAgentListLoaderMessage(props), testID: `test-id-agentSearchListFetching-${getAgentListLoaderMessage(props)}` }));
const getSearchAgentFormContent = (props) => {
    if (props.agentSearchListFetching) {
        return getLoader(props);
    }
    const isListEmpty = props.agentSearchList == null ||
        props.agentSearchList.data == null ||
        Utils.filterAgentSearchList(props.inputAgentList, props.agentSearchList, props.searchAgentStringRequest, props.agentListContextMode).length === 0;
    return (props.searchAgentStringRequest == '' || props.searchAgentStringRequest == null
        ? (getPlaceholderSeachAgent(props)) :
        props.searchAgentStringRequest != '' && props.searchAgentStringRequest != null && isListEmpty
            ? (getPlaceholderEmptyResult(props)) :
            React.createElement(Table, { testID: 'test-id-eebd5176-8232-16de-76a2-270dc3e3f9eb', underlined: false },
                React.createElement(TableBody, { testID: 'test-id-8da407c9-035f-b3b9-39cd-68daadb41afe' }, Utils.filterAgentSearchList(props.inputAgentList, props.agentSearchList, props.searchAgentStringRequest, props.agentListContextMode)
                    .map((agent, key) => (React.createElement(TableRow, { testID: 'test-id-80f41524-b796-dade-28ef-492743254f18', key: key, style: { paddingLeft: 30 }, onClick: () => {
                        props.performAgentSearchListSelect(agent);
                    } },
                    React.createElement(ProfileCell, { testID: 'test-id-df2a7938-94a2-4c28-5cbb-77c76e4f04c3', title: agent.fullName || Utils.getFullNameRepresentation(agent) || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.UNDEFINED), subtitle: Utils.getAgentCustomerPosition(props.currentCustomerManaged, agent), hasArrow: false })))))));
};
const getSearchAgentForm = (props) => (React.createElement(View, { testID: 'test-id-a75808e3-f6a3-603c-43c8-36aa812081bf', style: Styles.searchAgentView },
    React.createElement(SearchInput, { value: props.inputAgentSearch, placeholder: 'Фамилия Имя Отчество', onCancel: props.performCancelSearchAgent, autoFocus: true, onReturnKeyPressed: props.callGetAgentSearchList, keyboardType: KeyboardType.Email, onChange: props.performInputAgentSearch }),
    getSearchAgentFormContent(props),
    getErrorModalWindow(props)));
const getAgentRelationType = (list, currentCustomerId) => {
    let relationType = list.data.find((client) => {
        return client.customerId == currentCustomerId;
    });
    return relationType && relationType.customerRelations && relationType.customerRelations.value || '';
};
const SelectClassifier = (props) => {
    // Рендеринг строки (RadioButton для RadioGroup)
    const getRoleLines = (classifierList) => classifierList.data
        .map((item) => React.createElement(RadioButton, { testID: 'test-id-dc9b53a8-7604-f51c-fd12-844c27620cb9', key: `radio-${item.code}`, value: item.code, label: item.value }));
    // ClassifierList отсортированный в алфавитном порядке по полю value
    const alphabeticallySortedListOfRoles = Utils.sortClassifierListByValueField(props.classifierList);
    return (React.createElement(RadioGroup, { testID: 'test-id-0e898ff5-e409-f523-2265-dfe6b1dbbc52', value: props.selectedCode, onChange: (index, value) => props.performSelect(alphabeticallySortedListOfRoles.data[index]) }, getRoleLines(alphabeticallySortedListOfRoles)));
};
const titleAgentListPage = (props) => {
    let title = "";
    if (props.agentListMode == Enums.AgentListMode.Edit) {
        return 'Изменение списка представителей';
    }
    switch (props.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity: {
            return "Представители задачи";
        }
        case Enums.AgentListContextMode.Deal:
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal: {
            return "Представители";
        }
        default: {
            return "Представители клиента";
        }
    }
};
const getRightNavigationButton = (props) => {
    switch (true) {
        case props.agentListAccessLevel == Enums.AgentListAccessLevel.Read: {
            return null;
        }
        case ((props.agentListContextMode === Enums.AgentListContextMode.Activity ||
            props.agentListContextMode === Enums.AgentListContextMode.Scheduler ||
            props.agentListContextMode === Enums.AgentListContextMode.NewEditActivity ||
            props.agentListContextMode === Enums.AgentListContextMode.Deal ||
            props.agentListContextMode === Enums.AgentListContextMode.NewDeal ||
            props.agentListContextMode === Enums.AgentListContextMode.EditDeal) &&
            (Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length == 0)):
            {
                return null;
            }
        case props.agentListMode == Enums.AgentListMode.Watch: {
            return React.createElement(NavigationTextButton, { testID: 'test-id-9d50c17a-d127-0e88-e788-f70407067fd1', title: 'Изменить', onExecute: props.performEdit });
        }
        case props.agentListMode == Enums.AgentListMode.Edit: {
            return React.createElement(NavigationTextButton, { testID: 'test-id-74cdb471-fcc8-6438-dfc6-abcab509eb1b', title: 'Готово ', onExecute: props.performSave });
        }
        default: return null;
    }
};
const getErrorAgentListModalWindow = (props) => {
    if (props.agentListSaveError) {
        return {
            title: "Произошла ошибка при сохранении списка представителей",
            cancel: props.performChangeDisplayAgentListErrorModalWindow,
            repeat: () => props.performSave(),
            cacheDate: new Date(),
            message: props.agentListSaveError ?
                props.agentListSaveError.message || props.agentListSaveError.comment
                : 'Попробуйте снова или обратитесь в службу поддержки.',
        };
    }
    if (props.agentSearchListError) {
        return {
            title: "Произошла ошибка при поиске представителей",
            cancel: props.performChangeDisplayAgentListErrorModalWindow,
            repeat: () => props.callGetAgentSearchList(),
            cacheDate: new Date(),
            message: props.agentSearchListError ?
                props.agentSearchListError.message || props.agentSearchListError.comment
                : 'Попробуйте снова или обратитесь в службу поддержки.',
        };
    }
    return defaultValues.ErrorModalWindow;
};
const getErrorModalWindow = (props) => {
    const agentListErrorModal = getErrorAgentListModalWindow(props);
    return (React.createElement(ErrorModal, { key: `getErrorModalWindow-${agentListErrorModal.title}-${agentListErrorModal.message}`, testID: `test-id-modal-error-activity-card-${new Date().getTime()}`, isVisible: props.isVisibleAgentListErrorModalWindow, titleText: agentListErrorModal.title || "Произошла ошибка", messageText: agentListErrorModal.message || "Попробуйте снова или обратитесь в службу поддержки.", isCacheDateMessageVisible: false, cancel: () => agentListErrorModal.cancel(false), repeat: () => agentListErrorModal.repeat(), cacheDate: agentListErrorModal.cacheDate || new Date() }));
};
const isLoadingAgentList = (props) => {
    return props.agentListFetching || props.agentListSaveInProgress;
};
const getAgentListContent = (props) => {
    if (isLoadingAgentList(props)) {
        return getLoader(props);
    }
    switch (true) {
        case props.agentListMode == Enums.AgentListMode.Watch: {
            return getAgentListWatchModeContent(props);
        }
        case ((props.agentListContextMode == Enums.AgentListContextMode.Activity ||
            props.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
            props.agentListContextMode == Enums.AgentListContextMode.NewEditActivity ||
            props.agentListContextMode === Enums.AgentListContextMode.Deal ||
            props.agentListContextMode == Enums.AgentListContextMode.NewDeal ||
            props.agentListContextMode == Enums.AgentListContextMode.EditDeal) &&
            (Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length == 0)):
            {
                return getSearchAgentForm(props);
            }
        case props.agentListMode == Enums.AgentListMode.Edit: {
            return getAgentListEditModeContent(props);
        }
        default: return React.createElement(View, { testID: "test-id-d3c3f690-e4c7-11e7-80c1-9a214cf093ae" });
    }
};
const getAgentNavigationBar = (props) => {
    if ((props.agentListContextMode === Enums.AgentListContextMode.Activity
        || props.agentListContextMode === Enums.AgentListContextMode.Scheduler
        || props.agentListContextMode === Enums.AgentListContextMode.NewEditActivity
        || props.agentListContextMode === Enums.AgentListContextMode.Deal
    // || props.agentListContextMode === Enums.AgentListContextMode.NewDeal
    // || props.agentListContextMode === Enums.AgentListContextMode.EditDeal
    ) &&
        (Array.isArray(props.inputAgentList.data) && props.inputAgentList.data.length == 0)) {
        return [];
    }
    return [React.createElement(LeftPageHeader, { key: `LeftPageHeader${new Date().getTime()}`, testID: 'test-id-78f03c44-678c-22fd-e31c-b596930d19a6' }, getLeftNavigationButton(props)),
        React.createElement(CenterPageHeader, { key: `CenterPageHeader${new Date().getTime()}`, testID: 'test-id-05c5db28-e4e0-11e7-80c1-9a214cf093ae' },
            React.createElement(H2, { testID: "test-id-cad802be-ea36-11e7-80c1-9a214cf093ae" }, titleAgentListPage(props))),
        React.createElement(RightPageHeader, { key: `RightPageHeader${new Date().getTime()}`, testID: 'test-id-75b628f0-4056-e30a-686f-f1735a8340e4' }, getRightNavigationButton(props))];
};
const getPositionListContent = (props) => {
    const tablePositionListRows = (props) => (props.classifierDictionary.SBRF_CONT_JOB_TITLE.data
        .filter((item) => item.value.toLowerCase().includes(props.inputAgentJobPosition.toLowerCase()))
        .map((item) => (React.createElement(TableRow, { testID: 'test-id-f2b822ee-94f9-0a7e-70fb-13e162ac7d20', key: `${item.code}`, onClick: () => props.performSelectAgentJobPosition(item.value) },
        React.createElement(TableCell, { testID: 'test-id-88d74346-e44e-a14f-696f-e0bf018430f0' },
            React.createElement(View, { testID: 'test-id-70115b33-0434-b82e-622f-c69c87933f9e', style: Styles.positionTextView },
                React.createElement(Text, { testID: 'test-id-2acffd5a-fe9e-d9cd-5e9c-e7d3c1945dd0', style: Styles.positionTextValue }, item.value)))))));
    return React.createElement(Table, { testID: 'test-id-d4df1f96-cec2-213e-03a6-2abdad21c388' },
        React.createElement(TableBody, { testID: 'test-id-d4df1f96-cec2-213e-03a6-2abdad21c388' },
            props.inputAgentJobPosition.length > 0 ?
                React.createElement(TableRow, { testID: 'test-id-f2b822ee-94f9-0a7e-70fb-13e162ac7d20', onClick: () => props.performSelectAgentJobPosition(props.inputAgentJobPosition) },
                    React.createElement(TableCell, { testID: 'test-id-88d74346-e44e-a14f-696f-e0bf018430f0' },
                        React.createElement(View, { testID: 'test-id-92641820-a024-4db8-59b8-751bc7c5216f', style: Styles.positionViewWrapper },
                            React.createElement(Text, { testID: 'test-id-2acffd5a-fe9e-d9cd-5e9c-e7d3c1945dd0', style: Styles.positionTextValue }, props.inputAgentJobPosition)))) : null,
            tablePositionListRows(props)));
};
const getAccesoryPanel = (props) => (props.agentListContextMode != Enums.AgentListContextMode.NewEditActivity &&
    props.agentListContextMode != Enums.AgentListContextMode.Activity &&
    props.agentListContextMode != Enums.AgentListContextMode.Scheduler &&
    props.agentListContextMode != Enums.AgentListContextMode.NewDeal &&
    props.agentListContextMode != Enums.AgentListContextMode.EditDeal ?
    React.createElement(AccessoryPanel, { testID: 'test-agent-list-AccessoryPanel' },
        React.createElement(Page, { testID: 'test-id-743053e2-2372-11e8-b467-0ed5f89f718b', content: React.createElement(View, { testID: "test-id-7eb665e0-2372-11e8-b467-0ed5f89f718b" }) })) : React.createElement(View, { testID: "test-id-df4246da-2373-11e8-b467-0ed5f89f718b" }));
const getJobList = (props) => {
    return (React.createElement(View, { testID: 'test-id-516dea8e-a8de-a49d-356d-bb97c689dd3e' },
        React.createElement(View, { testID: 'test-id-fee6c84e-dfe4-11e7-80c1-9a214cf093ae', style: Styles.agentSearchFieldView },
            React.createElement(SearchInput, { value: props.inputAgentJobPosition, placeholder: "Введите должность", autoFocus: true, onCancel: () => { props.navigateBack(); }, onChange: (position) => props.performInputAgentJobPosition(position) })),
        React.createElement(View, { testID: "test-id-f5ad1f30-dfe4-11e7-80c1-9a214cf093ae", style: Styles.agentPositionListView }, getPositionListContent(props))));
};
const ViewAgentList = (props) => (React.createElement(SplitPanel, { testID: 'test-id-7c5807c4-76f6-6281-9c06-31d0314f6e81', id: Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen) },
    React.createElement(ContentPanel, { testID: 'test-id-f3ec3c78-c0cd-ccee-7e63-9cb2216ffe18', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-2d9b3bdb-b878-461a-becc-7cc27ffb6abd', scrollEnabled: true, content: getAgentListContent(props) }, getAgentNavigationBar(props)),
        React.createElement(Page, { testID: 'test-id-0f056e3c-e100-0681-f28c-fda9611c38fb', scrollEnabled: true, content: getPrincipalPicker(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-6694e5a8-9253-ae81-bf2a-768317565da3' },
                React.createElement(NavigationBackButton, { testID: 'test-id-6694e5a8-9253-ae81-bf2a-768317565db1', title: false, onClick: props.navigateBack })),
            React.createElement(CenterPageHeader, { testID: 'test-id-6694e5a8-9253-ae81-bf2a-768317565db2' },
                React.createElement(H2, { testID: 'test-id-6694e5a8-9253-ae81-bf2a-768317565db3' }, "\u0412\u044B\u0431\u043E\u0440 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E"))),
        React.createElement(Page, { testID: 'test-id-621e2c6f-1f90-7717-f4df-e11814d5729e', scrollEnabled: true, content: getSearchAgentForm(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-51f060be-e099-8018-a3cf-c05a1b71690c' })),
        React.createElement(Page, { testID: 'test-id-34d44ffd-1783-fba3-c029-ad81422bda8a', scrollEnabled: false, content: getJobList(props) },
            React.createElement(CenterPageHeader, { testID: 'test-id-97681e66-94e1-0f00-2e58-edb7336814a9' },
                React.createElement(H2, { testID: 'test-id-97681e66-94e1-0f00-2e58-edb7336814a9' }, "\u0414\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044F")))),
    getAccesoryPanel(props),
    React.createElement(Popover, { testID: 'test-id-13466acf-6f4b-511b-62ss-7173c406b719', target: PopoverTarget.getRef('addAgentMenu'), opened: props.isVisiblePopoverMenu, onOutsideTap: props.performPopoverAddHide, type: PopoverType.NARROW, position: [PopoverPosition.BOTTOM] }, getAgentListAddMenuContent(props))));
export default ViewAgentList;
//# sourceMappingURL=ViewAgentList.js.map