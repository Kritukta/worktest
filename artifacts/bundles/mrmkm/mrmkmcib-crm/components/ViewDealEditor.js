/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewDealEditorStyles';
import { AccessoryPanel, Button, CenterPageHeader, ContentPanel, DateInput, DateInputTypes, H2, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, NavigationTextButton, NumberInput, Page, Popover, PopoverPosition, PopoverType, ProfileCell, RadioButton, RadioGroup, RightPageHeader, SplitPanel, Table, TableBody, TableCell, TableRow, Text, View, Loader, ButtonType, Textarea } from 'ufs-mobile-platform';
import moment from 'moment';
import { FullScreenError, LoaderWithText } from "mrmkmcib-app";
import { ContainerActivity } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import ContainerMemberList from '../containers/ContainerMemberList';
import ContainerEmployee from '../containers/ContainerEmployee';
import ContainerParentDealPicker from '../containers/ContainerParentDealPicker';
import ContainerCampaignPicker from '../containers/ContainerCampaignPicker';
import ContainerAgentList from '../containers/ContainerAgentList';
import * as Utils from "../common/Util";
import PopoverTarget from '../modules/PopoverTarget';
import { ContainerScope, EnumsScheduler, } from "mrmkmcib-scheduler";
import { SwipeableItem, IconRedMinus, IconView } from 'mrmkmcib-ui';
import ContainerSelectClassifierWithSearch from './shared/containers/ContainerSelectClassifierWithSearch';
const CHANCE_LIST = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100',];
const ERROR_MESSAGE = 'Ошибка при обращении к шлюзу ЕФС';
const NO_DATA = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA);
const NO = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO);
const isSalesMethodSingleValue = (props) => props.salesMethodList.data.length === 1;
const disabledSalesMethodAttr = (isSalesMethodSingle) => {
    if (isSalesMethodSingle) {
        return { disabled: true };
    }
    return {};
};
const getLoader = (text) => {
    return (React.createElement(View, { testID: 'test-id-9993cebc-db4e-9b67-a9de-6dc7b1842288', style: Styles.getDealEditorContentContainer },
        React.createElement(LoaderWithText, { text: text, testID: "test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a" })));
};
const getErrorScreen = (error, onRefresh) => (React.createElement(View, { testID: 'test-id-7632026b-245gt-4022-a001-54trf22', style: Styles.getDealEditorContentContainer },
    React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: error && error.comment && error.comment !== ''
            ? error.comment
            : 'Техническая ошибка.', description: error && error.message && error.message !== ''
            ? error.message
            : 'Пожалуйста, обратитесь в службу сопровождения.', onRefresh: onRefresh })));
const isStandartDeal = (props) => {
    return props.inputDealType && props.inputDealType.value === 'Стандартная сделка';
};
const isCreditDeal = (props) => {
    return props.inputDealType && props.inputDealType.code === 'KK';
};
const getTeamPersonListContentRows = (memberList) => {
    return memberList.map((item, i) => {
        return (React.createElement(TableRow, { testID: 'test-id-5b7df9f3-5d3d-8143-6866-1e340b40f48c', key: `teamPersonListContentRow_${i}`, onClick: () => { } },
            React.createElement(ProfileCell, { testID: 'test-id-648b036f-7a1b-54ac-3951-5e26fceff972', title: item.fullName, subtitle: item.jobTitle, hasArrow: true })));
    });
};
const getTeamPersonListContent = (props) => {
    if (!props.currentDeal.memberList || props.currentDeal.memberList.data.length === 0) {
        return (React.createElement(View, { testID: 'test-id-205dc7ef-a51b-8763-5088-0f01c2bfe9ee' }));
    }
    return (React.createElement(Table, { testID: 'test-id-f0c35897-4605-e679-fc05-90f7650adc67', style: Styles.flex, underlined: false },
        React.createElement(TableBody, { testID: 'test-id-66872edd-4d67-cc9d-bb00-d66f7d773d31' }, getTeamPersonListContentRows(props.currentDeal.memberList.data))));
};
const truncateTo = (str, maxLength) => ('' + str).length > maxLength ? str.substr(0, maxLength) + '...' : str;
const classifier = (cl) => cl && cl.value || '';
const moreCount = (array) => array.length > 1 ? ` (еще ${array.length - 1})` : '';
const memberListLine = (memberList) => {
    if (memberList == null || memberList.data == null || memberList.data.length == 0) {
        return NO_DATA;
    }
    const main = memberList.data.find((member) => member.isGeneral) || memberList.data[0];
    return truncateTo([
        [Utils.getAgentNameInitials(main), classifier(main.role)].join(' - '),
        (main.isGeneral ? ', ВКС' : '')
    ].join('') + (main.isBlocked ? ', Блокирован' : ''), 48) + moreCount(memberList.data);
};
export const SelectClassifier = (props) => (React.createElement(Page, { testID: 'test-id-bec3822a-ec44-9f33-c078-a44186f36f0b', scrollEnabled: true, content: React.createElement(View, { testID: 'test-id-bec3822a-ec44-9f33-c078-a44186f36f0b', style: Styles.marginTopBottom20 },
        React.createElement(RadioGroup, { testID: 'test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979', value: props.selectedCode, onChange: (index, value) => props.performSelect(props.classifierList.data[index]) }, props.classifierList.data.map((e, i) => React.createElement(RadioButton, { testID: 'test-id-b915294d-16cc-bb9b-e848-89be70954ffe', key: `radio-${e.code}-${i}`, value: e.code, label: props.codeText
                ? `${e.value}`
                : `${e.code} (${e.value})` })))) }, props.navigateBack
    ? [React.createElement(LeftPageHeader, { key: 'LeftPageHeader', testID: 'test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f' },
            React.createElement(NavigationBackButton, { key: 'NavigationBackButton', testID: 'test-id-bec4a269-fee7-73aa-6dbb-42bbbbec3e09', title: false, onClick: props.navigateBack })),
        React.createElement(CenterPageHeader, { key: 'CenterPageHeader', testID: 'test-id-05e1fbbd-6557-1330-c538-530817c9af4e' },
            React.createElement(H2, { key: 'H2', testID: 'test-id-dcf9baaa-d613-5d0a-3ee3-dfa88e6b3aa6' }, props.pageName
                ? props.pageName
                : 'Выбор значения классификатора'))
    ]
    : React.createElement(LeftPageHeader, { testID: 'test-id-b25f4dd2-0996-13c9-45fd-3c0d3ed9703f1' })));
const dealAndTaskAssociateMain = (props) => (React.createElement(View, { testID: 'test-id-yew-0996-grty-45fd-45tr7y', style: Styles.flex }, props.dealActivityExcludeFetching
    ? getLoader('Сохранение изменений по сделке...')
    : props.dealActivityExcludeError
        ? getErrorScreen(props.dealActivityExcludeError, props.performSave)
        : dealAndTaskAssociate(props)));
const dealAndTaskAssociate = (props) => (React.createElement(View, { style: Styles.dealAndTaskAssociateContainer },
    React.createElement(View, { style: Styles.flex },
        React.createElement(Table, { style: Styles.tableMargins, testID: 'test-id-e203b1d6-b03b-b9cc-f574-5ca661a71f08', underlined: false },
            React.createElement(TableBody, { testID: 'test-id-c7b00501-edb7-20d0-8192-b8a360974636' },
                dealActivityList(props),
                React.createElement(TableRow, { testID: 'test-id-34GG-6W-57EJE-59ee-4eff', key: `dealActivityListLast`, onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-4142c7f1-f6dc-3aad-a7b4-c748dccec771', style: Styles.tableCellDirection },
                        React.createElement(View, { style: Styles.dealAndTaskAssociateContainerNote },
                            React.createElement(Text, { testID: 'test-id-5h4yew-8865-gtwgq-uiykfd-4gtwff', style: Styles.font16 }, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443 \u0441\u043F\u0440\u0430\u0432\u0430 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \"\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0441\u043E \u0441\u0434\u0435\u043B\u043A\u043E\u0439\"")))))))));
const deleteButton = (props, i, activity) => (React.createElement(View, { style: Styles.deleteButtonContainer },
    React.createElement(View, { style: Styles.deleteButton },
        React.createElement(Button, { type: ButtonType.TEXT, testID: 'test-id-432e8c6f-4644-895c-a1ec-quwiyt452', onExecute: () => { props.performTapActivityDelete(Enums.SwipeableRowEmptyId.EmptyId); } },
            React.createElement(Text, { testID: 'test-id-432e8c6f-4644-895c-a1ec-6harggs' }, ' Отмена '))),
    React.createElement(View, { style: Styles.deleteButton },
        React.createElement(Button, { type: ButtonType.TEXT_RED, testID: 'test-id-432e8c6f-4644-895c-a1ec-90676fb0043e1213', onExecute: () => { props.performActivityListExclude(activity); } },
            React.createElement(Text, { testID: 'test-id-432e8c6f-4644-895c-a1ec-90676fb0043e121311' }, ' Удалить ')))));
const getActivityListItemView = (props, item) => {
    const dueDateMoment = item.dueDate ? moment(item.dueDate) : null;
    const dueDateString = dueDateMoment ? dueDateMoment.format('DD.MM.YYYY') : 'Дата не определена';
    const isCurrentActivity = props.currentActivity.id == item.id;
    const isUnaccessable = item.accessLevel == Enums.ActivityAccessLevel.NoTeamMember;
    return (React.createElement(View, { style: Styles.getActivityListItemViewContainer },
        React.createElement(View, { style: Styles.getActivityListItemViewUp },
            React.createElement(View, { style: Styles.getActivityListItemViewIconContainer },
                React.createElement(View, { style: Styles.getActivityListItemViewIcon }, [
                    isUnaccessable ? (React.createElement(View, { testID: `test-id-activity-${item.id}-icon-access-icon`, key: `activity-${item.id}-lock-icon`, style: Styles.activityCellIcon },
                        React.createElement(IconView, { testID: `test-id-activity-${item.id}-lock-icon`, type: 'lock', disabled: false }))) : (item.urgency == Enums.ActivityUrgency.Overdue) || (item.urgency == Enums.ActivityUrgency.Urgent) ? (React.createElement(View, { testID: `test-id-activity-${item.id}-icon-urgency-icon`, key: `activity-${item.id}-bell-icon-red`, style: Styles.activityCellIcon },
                        React.createElement(IconView, { testID: `test-id-activity-${item.id}-bell-icon-red`, type: 'bell-red', disabled: false }))) : (item.urgency == Enums.ActivityUrgency.Nearest) ? (React.createElement(View, { testID: `test-id-activity-${item.id}-icon-urgency-icon`, key: `activity-${item.id}-bell-icon-orange`, style: Styles.activityCellIcon },
                        React.createElement(IconView, { testID: `test-id-activity-${item.id}-bell-icon-orange`, type: 'bell-orange', disabled: false }))) : null,
                    (item.isPinned == true) ? (React.createElement(View, { testID: `test-id-activity-${item.id}-icon-pin-icon`, key: `activity-${item.id}-bell-icon-red`, style: Styles.activityCellIcon },
                        React.createElement(IconView, { testID: `test-id-activity-${item.id}-bell-icon-red`, type: 'pin', disabled: false }))) : null
                ]),
                React.createElement(View, { style: Styles.getActivityListItemViewDescriptionContainer },
                    React.createElement(View, { testID: `test-id-0dcf7831-237c-38d2-34aa-58baace0faa3-${item.id}`, style: Styles.activityCellRowView },
                        React.createElement(Text, { testID: `test-id-26a24451-6b35-ed45-ded4-ddf5e8cb3476-${item.id}`, style: [
                                Styles.activityCellRowText,
                                !isUnaccessable && (item.urgency == Enums.ActivityUrgency.Overdue) ? (Styles.overdueActivityCellRowText) : {}
                            ], ellipsizeMode: "tail", numberOfLines: 1 }, item.customer && item.customer.name || `Задача #${item.id}`)),
                    React.createElement(View, { testID: `test-id-770ea34d-549c-cf32-411d-23b66d25c3bf-${item.id}`, style: Styles.activityCellRowView },
                        React.createElement(Text, { testID: `test-id-c1e9c160-53eb-2123-ff97-2d72f9fad088-${item.id}`, ellipsizeMode: "tail", numberOfLines: 1, style: [Styles.activityDescription, isCurrentActivity ? Styles.currentActivityDescription : {}] }, item.description)))),
            React.createElement(View, { style: Styles.getActivityListItemViewSource },
                React.createElement(View, { testID: `test-id-activity-cell-${item.id}-labels`, style: Styles.activityLabels }, ([
                    item.source,
                    item.type ? item.type.value : 'Тип не определён'
                ]).map((label, index, labels) => (renderLabel(label, `${item.id}-${index}`, (index == (labels.length - 1)))))),
                React.createElement(View, { testID: `test-id-6313aee7-fd1e-bc2d-2681-cc708e58fda0-${item.id}`, style: Styles.activityDate },
                    React.createElement(Text, { testID: `test-id-1086ef11-03a1-83ec-cb5f-ad22bc7fdf03-${item.id}`, style: [Styles.activityDateText, isCurrentActivity ? Styles.currentActivityDateText : {}] }, dueDateString))))));
};
export const renderLabel = (label, key, isLast = false) => (label ? (React.createElement(View, { key: `labelView-${label}`, testID: `test-id-activity-label-view-${key}`, style: [Styles.activityCellFooterLabel, isLast ? Styles.activityCellFooterLastLavbel : {}] },
    React.createElement(Text, { key: `labelText-${key}`, testID: `test-id-activity-label-text-${key}`, ellipsizeMode: "tail", numberOfLines: 1, style: Styles.activityCellFooterLabelText }, label.ellipsis(25)))) : null);
const dealActivityList = (props) => props.activityList.data.map((activity, i) => (React.createElement(TableRow, { testID: 'test-id-34GG-6W-57EJE-59ee-4eff', key: `dealActivityList${i}`, onClick: () => { } },
    React.createElement(TableCell, { testID: 'test-id-4142c7f1-f6dc-3aad-a7b4-c748dccec771', style: Styles.tableCellDirection },
        React.createElement(View, { style: Styles.dealActivityListCellContainer },
            React.createElement(View, { style: Styles.dealActivityListRedMinus },
                React.createElement(IconRedMinus, { testID: 'test-id-d82c3ee2-75h-dea5-5d6f-kjere', onPress: () => { props.performTapActivityDelete(activity.id); } })),
            React.createElement(View, { style: Styles.occasionTableCellView },
                React.createElement(SwipeableItem, { testID: 'test-id-c9205b42-b7d1-a6ba-e0a8-62295fa37890', isLeftActionMenuOpen: false, isRightActionMenuOpen: props.tapActivityDeleteId == activity.id ? true : false, leftActionMenu: React.createElement(View, null), rightActionMenu: deleteButton(props, i, activity), onLeftActionMenuOpen: () => { }, onRightActionMenuOpen: () => { props.performTapActivityDelete(Enums.SwipeableRowEmptyId.EmptyId); }, onToggleLeft: () => { }, onToggleRight: () => { }, onPress: () => { }, disableSwipe: false }, getActivityListItemView(props, activity))))))));
const getDealCreatedScreen = (props) => (React.createElement(View, { style: Styles.getDealEditorContentContainer },
    React.createElement(Text, { testID: 'test-id-7e443784-wergweg-86b6-67b7-54tr', style: Styles.colorText }, "\u0421\u0434\u0435\u043B\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430!")));
const getDealEditorContent = (props) => (props.dealSaveInProgress
    ? React.createElement(View, { style: Styles.getDealEditorContentContainer },
        React.createElement(Loader, { testID: 'test-id-9e090ee1-c60f-c0ca-2bef-etgerhytj' }),
        props.dealEditorMode == Enums.DealEditorMode.UpdateMode
            ? React.createElement(Text, { testID: 'test-id-werg3-c60f-c0ca-2bef-4354gw' }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u043F\u043E \u0441\u0434\u0435\u043B\u043A\u0435...")
            : props.dealEditorMode == Enums.DealEditorMode.CreateMode
                ? React.createElement(Text, { testID: 'test-id-53gqq-c60f-c0ca-2bef-46yhwds' }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438...")
                : null)
    : props.dealSaveError
        ? React.createElement(FullScreenError, { testID: 'test-id-7632026b-bfb0-4022-a001-34wgwe', title: props.dealSaveError && props.dealSaveError.comment && props.dealSaveError.comment !== ''
                ? props.dealSaveError.comment
                : ERROR_MESSAGE, description: props.dealSaveError && props.dealSaveError.message && props.dealSaveError.message !== ''
                ? props.dealSaveError.message
                : null, onRefresh: props.performSave })
        : getDealEditorScreen1(props));
const isCustomerEditable = (props) => (props.dealEditorMode === Enums.DealEditorMode.CreateMode || classifier(props.currentDeal.phaseClassifier) === '01.Ввод данных');
const getDealEditorScreen1 = (props) => (React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-iuewhwi234', style: Styles.flex },
    props.validationError
        ? React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-2431efvqe', style: Styles.validationErrorContainer },
            React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-2431efvqe', style: Styles.validationErrorBox },
                React.createElement(Text, { testID: 'test-id-9596a436-e524-bdd4-5261-35tgwevq', style: Styles.validationErrorText }, props.validationError.message)))
        : null,
    React.createElement(Table, { style: Styles.TableStyles, testID: 'test-id-7fa962c1-8865-69a1-992b-4r5t6y' },
        React.createElement(TableBody, { testID: 'test-id-ccd610e3-0bd7-3ca2-f115-7u8i9o' },
            React.createElement(TableRow, { style: Styles.TableRowStyles, testID: 'test-id-34672e5d-289c-420b-8ae1-ecb3f58360b8', selectable: true, onClick: () => { } },
                React.createElement(TableCell, { testID: 'test-id-4f9eac05-c310-43dc-9686-064cc8656cf3', style: Styles.tableCell },
                    React.createElement(View, { testID: 'test-id-0e6b6b45-6198-41f8-b106-0bb372049b0a', style: Styles.flex },
                        React.createElement(Label, { testID: 'test-id-d95cc49e-d83c-4a50-8ada-9fc8eb0337c5', header: '', text: 'Клиент', block: false },
                            React.createElement(Text, { testID: 'test-id-13b78076-2b0f-4bfe-bab7-37b88c64bca3' }, props.currentCustomerManaged.name))),
                    React.createElement(View, { style: [Styles.iconContainer, Styles.addedIconContainerStyles] },
                        React.createElement(View, { style: Styles.buttonIconContainer },
                            React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-3gg-wtw', disabled: true, type: IconType.MrmLink }))))),
            React.createElement(TableRow, { style: props.isRowBlocked ? Styles.TableRowStyles : {}, testID: 'test-id-f322e041-f11d-18cb-5d6f-g2ggfy', selectable: true, onClick: () => {
                    props.navigateToDealTypePickerScreen();
                } },
                React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-35h-452gg', style: Styles.tableCell },
                    React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-jh53-k8j32q', style: Styles.flex },
                        React.createElement(Label, { testID: 'test-id-3f74f332-1425-4f51-jw54h-htgwg', header: '', text: 'Тип сделки', block: false },
                            React.createElement(Text, { testID: 'test-id-theva-085a-079e-jee-jeivkw' }, props.inputDealType && props.inputDealType.value
                                ? props.inputDealType.value
                                : NO))),
                    React.createElement(View, { style: [Styles.iconContainer, Styles.addedIconContainerStyles] },
                        React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-qge-5hqwr', disabled: props.isRowBlocked, onExecute: () => {
                                props.navigateToDealTypePickerScreen();
                            } },
                            React.createElement(Icon, { testID: 'test-id-5jhwwb-eqetab6-web-hearg-wrt', type: IconType.MrmLink }))))))),
    getDealEditorRows(props)));
const getDealEditorRows = (props) => (React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-db7f53022d6d' }, isStandartDeal(props)
    ? getStandardDealContent(props)
    : isCreditDeal(props)
        ? getCreditdDealContent(props)
        : props.isEditorMode
            ? getStandardDealContent(props)
            : null));
const getStandardDealContent = (props) => (React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-db7f53022d6d' },
    React.createElement(Table, { style: Styles.TableStyles, testID: 'test-id-7fa962c1-8865-69a1-992b-419ef7ddf5a4' },
        React.createElement(TableBody, { testID: 'test-id-7fa962c1-8865-69a1-992b-419ef7ddf5a4' },
            React.createElement(TableRow, { style: props.isRowBlocked ? Styles.TableRowStyles : {}, testID: 'test-id-f322e041-f11d-18cb-5d6f-10f91a93751c', selectable: true, onClick: () => {
                    props.navigateToProductPickerScreen();
                } },
                React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-7d70fbfdf10e', style: Styles.tableCell },
                    React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-f37e20b8bbb8', style: Styles.flex },
                        React.createElement(Label, { testID: 'test-id-3f74f332-1425-4f51-0949-c7e10f5642aa', header: '', text: 'Продукт', block: false },
                            React.createElement(Text, { testID: 'test-id-29d8f7f4-085a-079e-a812-dcf6aba0d194' }, props.inputProduct && props.inputProduct.value
                                ? props.inputProduct.value
                                : NO))),
                    React.createElement(View, { style: [Styles.iconContainer, Styles.addedIconContainerStyles] },
                        React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', disabled: props.isRowBlocked, onExecute: () => {
                                props.navigateToProductPickerScreen();
                            } },
                            React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-hearg-retj', type: IconType.MrmLink }))))))),
    props.inputProduct.value || props.isEditorMode
        ? getVariableStandardDealContent(props)
        : null));
const getVariableStandardDealContent = (props) => (React.createElement(View, { testID: 'test-id-etbyh-e524-124-5261-243rt', style: Styles.flex },
    React.createElement(Table, { style: Styles.TableStyles, testID: 'test-id-7fa962c1-8865-69a1-992b-419ef7ddf5a4' },
        React.createElement(TableBody, { testID: 'test-id-ccd610e3-0bd7-3ca2-f115-tsrhh' },
            React.createElement(TableRow, { style: props.isRowBlocked ? Styles.TableRowStyles : {}, testID: 'test-id-2932bb73-6cad-14f6-5c7b-588f7c1c4064', selectable: true, onClick: props.navigateToSalesMethodPickerScreen },
                React.createElement(TableCell, { testID: 'test-id-c667e619-1097-2fd7-f44d-00d8fb9002b9', style: Styles.tableCell },
                    React.createElement(View, { testID: 'test-id-998fbaf5-d8ae-185c-ca60-cff8ad8a7a1b', style: Styles.flex },
                        React.createElement(Label, { testID: 'test-id-8345d832-bcb2-d9b6-20af-20e2506e1c1a', header: '', text: 'Метод продаж', block: isSalesMethodSingleValue(props) },
                            React.createElement(Text, { testID: 'test-id-bac5fee5-5fb1-3914-d769-7b30b48dbf77' }, props.inputSalesMethod && props.inputSalesMethod.value
                                ? props.inputSalesMethod.value
                                : NO))),
                    props.isProductMethodEnabled
                        ? React.createElement(View, { style: [Styles.iconContainer, Styles.addedIconContainerStyles] },
                            React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', disabled: props.isRowBlocked, onExecute: props.navigateToSalesMethodPickerScreen },
                                React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmLink })))
                        : React.createElement(View, { style: [Styles.iconContainer, Styles.addedIconContainerStyles] }))))),
    React.createElement(Textarea, { testID: 'test-id-6655bac1-3158-4f52-wef-24fwrqf', value: props.inputDescription, label: '\u0421\u0443\u0442\u044C', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u0442\u044C', onChange: props.performInputDescription, maxLength: 600 }),
    React.createElement(View, { style: Styles.sumRowContainer },
        React.createElement(View, { style: Styles.numberInputContainer },
            React.createElement(NumberInput, { testID: 'test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4', fractionalDigitsCount: 5, label: '\u0421\u0443\u043C\u043C\u0430 \u0432 \u0442\u044B\u0441\u044F\u0447\u0430\u0445', maxLength: 28, value: props.inputSumString || '', onChange: (value) => props.performInputSumString(value) })),
        React.createElement(View, { style: Styles.flex },
            React.createElement(Table, { style: [Styles.TableStyles, Styles.TableStylesAdd], testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq' },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                            props.navigateToCurrencyPickerScreen();
                        } },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.tableCell },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: [Styles.flex, Styles.paddings] },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Валюта', block: false },
                                    React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputCurrency && props.inputCurrency.code
                                        ? props.inputCurrency.code
                                        : NO_DATA))),
                            React.createElement(View, { style: [Styles.iconContainer, Styles.addedIconContainerStyles] },
                                React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                        props.navigateToCurrencyPickerScreen();
                                    } },
                                    React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmLink }))))))))),
    props.isEquivalentRateMode
        ?
            React.createElement(View, { style: [Styles.sumRowContainer] },
                React.createElement(View, { style: Styles.equivalentSumWidth },
                    React.createElement(NumberInput, { testID: 'test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4', fractionalDigitsCount: 5, label: '\u042D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442 \u0442\u044B\u0441. \u0440\u0443\u0431.', maxLength: 28, value: props.inputEquivalentSumString || '', onChange: (value) => props.performInputEquivalentSumString(value) })),
                React.createElement(View, { style: Styles.conversionRate },
                    React.createElement(NumberInput, { testID: 'test-id-e58807e1-a663-bc61-aa3b-91e18ac836f4', fractionalDigitsCount: 4, label: '\u041A\u0443\u0440\u0441 \u043F\u0435\u0440\u0435\u0441\u0447\u0451\u0442\u0430 \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442\u0430', maxLength: 28, value: props.inputEquivalentConversionRateString || '', onChange: (value) => props.performInputEquivalentConversionRateString(value), currency: 'RUR' })))
        : null,
    React.createElement(View, { style: Styles.chanceAndDateFildsContainer },
        React.createElement(View, { style: Styles.chanceTableContainer },
            React.createElement(Table, { style: Styles.chanceTableMargins, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq', underlined: false },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                            props.showChancePopover(true);
                        } },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.chanceTableCall },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.chanceLabelContainer },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Вероятность', block: false },
                                    React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputChance !== null
                                        ? `${props.inputChance} %`
                                        : NO_DATA))),
                            React.createElement(View, { style: Styles.chancePopoverContainer },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `deal_editor_chance` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                            props.showChancePopover(true);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('deal_editor_chance'), opened: props.isChancePopoverOpened, onOutsideTap: () => {
                                        props.showChancePopover(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.TOP] }, getChancePopoverContent(props)))))))),
        React.createElement(View, { style: Styles.dateContainer },
            React.createElement(DateInput, { testID: 'test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg', value: props.inputDealDate || undefined, label: "\u041F\u043B\u0430\u043D\u043E\u0432\u0430\u044F \u0434\u0430\u0442\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0434\u0435\u043B\u043A\u0438", format: 'dd.MM.yyyy', locale: 'ru', placeholder: '\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433', dateType: DateInputTypes.DAY_PICKER, min: Utils.getDate(), onChange: (e) => props.performInputDealDate(e) }))),
    React.createElement(Table, { style: Styles.tableActivity, testID: 'test-id-wrthjm-asdfhsr-4c9b-thweyje-354wtgw' },
        React.createElement(TableBody, { testID: 'test-id-6hh-kejre-4c9b-j56hg-fgd' },
            React.createElement(TableRow, { testID: 'test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf', selectable: true, onClick: () => {
                    props.navigateToMemberListScreen();
                } },
                React.createElement(TableCell, { testID: 'test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw', style: Styles.tableCellMargins },
                    React.createElement(View, { style: Styles.memberListContainer },
                        React.createElement(Text, { testID: 'test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8', style: Styles.font16 }, 'Команда сделки'),
                        React.createElement(View, { style: Styles.noteTeam },
                            React.createElement(Text, { style: Styles.noteFont, testID: 'test-id-8a37e81d-b564-a372-e80d-8997cff87f6a' }, `${memberListLine(props.currentDeal.memberList)}`),
                            React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: () => {
                                    props.navigateToMemberListScreen();
                                } },
                                React.createElement(Icon, { testID: 'test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb', disabled: true, type: IconType.MrmLink })))))))),
    props.isOwner
        ? React.createElement(Table, { style: Styles.tableActivity, testID: 'test-id-sdb-sdbf-4c9b-sdfb-5gerg' },
            React.createElement(TableBody, { testID: 'test-id-6hh-dfgsn-sdfb-dfb-jdn' },
                React.createElement(TableRow, { testID: 'test-id-hmsf-dfgnsn-ghmdn-uyrrm-strnrym', selectable: true, onClick: () => {
                        props.navigateToActivityListScreen();
                    } },
                    React.createElement(TableCell, { testID: 'test-id-kfugb-illss-snfn-aerhh-dkdss', style: Styles.tableCellMargins },
                        React.createElement(View, { style: Styles.memberListContainer },
                            React.createElement(Text, { testID: 'test-id-5kjetyh-b343-zxzdbfr54-erthj-hreyher', style: Styles.font16 }, 'Связанные задачи'),
                            React.createElement(View, { style: Styles.noteTeam },
                                React.createElement(Text, { testID: 'test-id-8a37e81d-yuyuj566-43taafg-sgdfhr4-785643hh' }, Utils.getRelatedActivitiesCount(props.activityList)),
                                React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                        props.navigateToActivityListScreen();
                                    } },
                                    React.createElement(Icon, { testID: 'test-id-krje-51f3-jetyje-jerh-34faegw', disabled: true, type: IconType.MrmLink }))))))))
        : null,
    (props.inputProduct &&
        props.inputProduct.value == 'Зарплатные проекты') &&
        props.currentDeal.salaryProjectDetails &&
        (props.currentDeal.salaryProjectDetails.fee ||
            props.currentDeal.salaryProjectDetails.staffCount) &&
        !props.isAdditionalFieldsAvailable
        ? getTransferCommissionAndNumberOfEmployeesFields(props)
        : null,
    props.isAdditionalFieldsAvailable
        ? getAdditionalFields(props)
        : getAdditionalFieldsButton(props)));
const getChancePopoverContent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-a5c9b50082e51eddd4', id: 'ApplicationPopoverContent' },
    React.createElement(ContentPanel, { testID: 'test-id-edfc37ecd986f1d65f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { content: React.createElement(View, { testID: 'test-id-43etg', style: Styles.chancePopoverContentContainer },
                React.createElement(RadioGroup, { testID: 'test-id-9052b0979', value: props.inputChance || undefined, onChange: (index, value) => props.performSelectChance(value) }, CHANCE_LIST.map((e) => (React.createElement(RadioButton, { testID: 'test-id-b9152954ffe', key: `radio-${e}`, value: e, label: `${e} %` }))))), testID: 'test-id-a5c9b50082e51eddd4457' }))));
const getAttractionChannelPopoverContent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-a5c9b50082e51eddd4', id: 'deal_editor_attraction_channel' },
    React.createElement(ContentPanel, { testID: 'test-id-edfc37ecd986f1d65f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-a5c9b50082e51eddd4457', content: React.createElement(View, { testID: 'test-id-43etg', style: Styles.chancePopoverContentContainer },
                React.createElement(RadioGroup, { testID: 'test-id-9052b0979', value: props.inputAttractionChannel.code || undefined, onChange: (index) => props.performSelectAttractionChannel(props.classifierDictionary.SBRF_ATTR_CHANNEL_PICK_LIST.data[index]) }, props.classifierDictionary.SBRF_ATTR_CHANNEL_PICK_LIST.data.map((element, index) => (React.createElement(RadioButton, { testID: 'test-id-b9152954ffe', key: `radio-${element.code}-${index}`, value: element.code, label: `${element.value}` }))))) }))));
const getApplicationPopoverContent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-a5c9b50082e51eddd4', id: 'ApplicationPopoverContent' },
    React.createElement(ContentPanel, { testID: 'test-id-edfc37ecd986f1d65f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { content: React.createElement(View, { testID: 'test-id-reff1q-435t', style: Styles.chancePopoverContentContainer },
                React.createElement(RadioGroup, { testID: 'test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979', value: props.inputApplication.code, onChange: (index, value) => props.performSelectApplication(props.applicationKkClassifierList.data[index]) }, props.applicationKkClassifierList.data.map((e, i) => React.createElement(RadioButton, { testID: 'test-id-b915294d-16cc-bb9b-e848-y53hh2', key: `radio-${e.code}-${i}`, value: e.code, label: e.value })))), testID: 'test-id-a5c9b50082e51eddd4457' }))));
const getSalesMethodPopoverContent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-a5c9b50082e51eddd4', id: 'ApplicationPopoverContent' },
    React.createElement(ContentPanel, { testID: 'test-id-edfc37ecd986f1d65f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { content: React.createElement(View, { testID: 'test-id-34546hg', style: Styles.chancePopoverContentContainer },
                React.createElement(RadioGroup, { testID: 'test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979', value: props.inputSalesMethod.code, onChange: (index, value) => props.performSelectSalesMethod(props.classifierDictionary.DEAL_SALE_METHOD_KK.data[index]) }, props.classifierDictionary.DEAL_SALE_METHOD_KK.data.map((e, i) => React.createElement(RadioButton, { testID: 'test-id-b915294d-16cc-bb9b-e848-4ff333v', key: `radio-${e.code}-${i}`, value: e.code, label: e.value })))), testID: 'test-id-a5c9b50082e51eddd4457' }))));
const getAdditionalFields = (props) => (React.createElement(View, { testID: 'test-id-etbyh-qegrg-124-5261-qqree', style: Styles.flexAdditional },
    React.createElement(Table, { style: Styles.tableActivity, testID: 'test-id-wrthjm-asdfhsr-4c9b-thweyje-354wtgw' },
        React.createElement(TableBody, { testID: 'test-id-6hh-kejre-4c9b-j56hg-fgd' },
            isStandartDeal(props) ?
                React.createElement(TableRow, { testID: 'test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf', selectable: true, onClick: () => {
                        props.navigateToAgentListScreen();
                    } },
                    React.createElement(TableCell, { testID: 'test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw', style: Styles.tableCellMargins },
                        React.createElement(View, { style: Styles.memberListContainer },
                            React.createElement(Text, { testID: 'test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8', style: Styles.font16 }, 'Представители'),
                            React.createElement(View, { style: Styles.noteTeam },
                                props.inputAgentList.data.length > 0
                                    ? React.createElement(Text, { style: Styles.noteFont, testID: 'test-id-8a37e81d-b564-a372-e80d-8997cff87f6a' }, Utils.agentListLine(props.inputAgentList, props.currentCustomerManaged))
                                    : React.createElement(Text, { style: Styles.noteFont, testID: 'test-id-8a37e81d-b564-a372-e80d-8997cff87f6a' }, "\u041D\u0435\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0435\u0439"),
                                React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: () => {
                                        props.navigateToAgentListScreen();
                                    } },
                                    React.createElement(Icon, { testID: 'test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb', disabled: true, type: IconType.MrmLink })))))) :
                null,
            React.createElement(TableRow, { testID: 'test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf', selectable: true },
                React.createElement(TableCell, { testID: 'test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw', style: Styles.tableCellMargins },
                    React.createElement(View, { style: Styles.memberListContainer },
                        React.createElement(Text, { testID: 'test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8', style: Styles.font16 }, 'Родительская сделка'),
                        React.createElement(View, { style: Styles.noteTeam },
                            React.createElement(Text, { style: Styles.noteFont, testID: 'test-id-8a37e81d-b564-a372-e80d-8997cff87f6a' }, props.currentDeal.parentDeal && props.currentDeal.parentDeal.id ? props.currentDeal.parentDeal.id : NO_DATA),
                            React.createElement(View, { style: Styles.emptyView }))))),
            React.createElement(TableRow, { testID: 'test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf', selectable: true },
                React.createElement(TableCell, { testID: 'test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw', style: Styles.tableCellMargins },
                    React.createElement(View, { style: Styles.memberListContainer },
                        React.createElement(Text, { testID: 'test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8', style: Styles.font16 }, 'Кампания'),
                        React.createElement(View, { style: Styles.noteTeam },
                            React.createElement(Text, { style: Styles.noteFont, testID: 'test-id-8a37e81d-b564-a372-e80d-8997cff87f6a' }, props.currentDeal.salesCampaign.name || 'Нет данных'),
                            React.createElement(View, { style: Styles.emptyView }))))))),
    props.inputProduct && props.inputProduct.value == 'Зарплатные проекты'
        ? getSalaryFields(props)
        : null));
const getSalaryFields = (props) => (React.createElement(View, { testID: 'test-id-7fa962c1-ehe-hgqe-q34gq-2fwc' },
    getTransferCommissionAndNumberOfEmployeesFields(props),
    React.createElement(View, { style: Styles.chanceAndDateFildsContainer },
        React.createElement(View, { style: Styles.attractionChannelContainer },
            React.createElement(Table, { testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq', noPaddings: true, underlined: false },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                            props.showAttractionChannelPopover(true);
                        } },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.chanceTableCall },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.chanceLabelContainer },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Канал привлечения', block: false },
                                    React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputAttractionChannel && props.inputAttractionChannel.value
                                        ? `${props.inputAttractionChannel.value}`
                                        : 'Нет'))),
                            React.createElement(View, { style: Styles.chancePopoverContainer },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `deal_editor_attraction_channel` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                            props.showAttractionChannelPopover(true);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('deal_editor_attraction_channel'), opened: props.isAttractionChannelPopoverOpened, onOutsideTap: () => {
                                        props.showAttractionChannelPopover(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.TOP] }, getAttractionChannelPopoverContent(props)))))))),
        React.createElement(View, { style: Styles.territorialCoverageContainer },
            React.createElement(Table, { style: {}, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq', noPaddings: true, underlined: false },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { style: Styles.TableRowStyles, testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: [Styles.chanceTableCall, Styles.chanceTableCallTerritorialCoverageContainer] },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.chanceLabelContainer },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Территориальный охват', block: false },
                                    React.createElement(Text, { numberOfLines: 1, ellipsizeMode: 'tail', testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.currentDeal.territorialCoverage
                                        ? props.currentDeal.territorialCoverage.length > 27
                                            ? `${props.currentDeal.territorialCoverage.substring(0, 27)}...`
                                            : `${props.currentDeal.territorialCoverage}`
                                        : 'Нет'))),
                            React.createElement(View, { style: Styles.chancePopoverContainer },
                                React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', disabled: true },
                                    React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', disabled: true, type: IconType.MrmArrowDown })))))))))));
const getTransferCommissionAndNumberOfEmployeesFields = (props) => (React.createElement(View, { style: [Styles.sumRowContainer] },
    React.createElement(View, { style: Styles.equivalentSumWidth },
        React.createElement(NumberInput, { testID: 'test-id-e58807e1e18ac836f4', fractionalDigitsCount: 2, label: '\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0437\u0430 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435,%', maxLength: 15, value: Utils.convertNumberToString(props.inputTransferCommission) || '', onChange: (value) => props.performInputTransferCommission(value), currency: '%' })),
    React.createElement(View, { style: Styles.conversionRate },
        React.createElement(NumberInput, { testID: 'test-id-e58807e118ac836f4', fractionalDigitsCount: 0, label: '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0432 \u0441\u0434\u0435\u043B\u043A\u0435', maxLength: 5, value: props.inputStaffCount || '', onChange: (value) => props.performInputStaffCount(value) }))));
const getAdditionalFieldsButton = (props) => (React.createElement(View, { style: Styles.additionalFieldsButton },
    React.createElement(Button, { type: ButtonType.TEXT, testID: 'test-id-432e8c6f-4644-895c-qwrg-rqegqg', onExecute: () => { props.performShowAdditionalFields(); } },
        React.createElement(Text, { testID: 'test-id-432e8c6f-4644-qr-a1ec-qregq' }, 'Показать дополнительные поля'))));
const getCreditdDealContent = (props) => (React.createElement(View, { testID: 'test-id-9596a436-e524-bdd4-5261-guweyfqu' },
    React.createElement(View, { style: Styles.chanceAndDateFildsContainer },
        React.createElement(View, { style: Styles.chanceTableContainer },
            React.createElement(Table, { style: Styles.chanceTableMargins, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq', underlined: false },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { style: props.isRowBlocked ? Styles.TableRowStyles : {}, testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                            props.showSalesMethodPopover(!props.isRowBlocked);
                        } },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.chanceTableCall },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.chanceLabelContainer },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Метод продаж', block: false },
                                    React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputSalesMethod && props.inputSalesMethod.value
                                        ? props.inputSalesMethod.value
                                        : NO))),
                            React.createElement(View, { style: Styles.chancePopoverContainer },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `deal_editor_sales_method` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', disabled: props.isRowBlocked, onExecute: () => {
                                            props.showSalesMethodPopover(!props.isRowBlocked);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('deal_editor_sales_method'), opened: props.isSalesMethodPopoverOpened, onOutsideTap: () => {
                                        props.showSalesMethodPopover(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.BOTTOM] }, getSalesMethodPopoverContent(props)))))))),
        React.createElement(View, { style: Styles.chanceTableContainer },
            React.createElement(Table, { style: Styles.chanceTableMargins, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq', underlined: false },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', style: !!props.inputSalesMethod.value ? {} : [Styles.TableRowStyles, { marginLeft: 0 }], selectable: true, onClick: () => {
                            props.inputSalesMethod.value ? props.showApplicationPopover(true) : null;
                        } },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: [Styles.chanceTableCall, { backGroundColor: '#ff0000' }] },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.chanceLabelContainer },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Применение', block: false },
                                    React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputApplication && props.inputApplication.value
                                        ? props.inputApplication.value
                                        : NO))),
                            React.createElement(View, { style: Styles.chancePopoverContainer },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `deal_editor_application` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', disabled: !props.inputSalesMethod.value, onExecute: () => {
                                            props.inputSalesMethod.value ? props.showApplicationPopover(true) : null;
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('deal_editor_application'), opened: props.isApplicationPopoverOpened, onOutsideTap: () => {
                                        props.showApplicationPopover(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.BOTTOM] }, getApplicationPopoverContent(props))))))))),
    React.createElement(Textarea, { testID: 'test-id-6655bac1-3158-4f52-wef-24fwrqf', value: props.inputDescription, label: '\u0421\u0443\u0442\u044C', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u0442\u044C', onChange: props.performInputDescription, maxLength: 600 }),
    React.createElement(View, { style: Styles.chanceAndDateFildsContainer },
        React.createElement(View, { style: Styles.chanceTableContainer },
            React.createElement(Table, { style: Styles.chanceTableMargins, testID: 'test-id-7fa962c1-ehe-69a1-992b-245ytq', underlined: false },
                React.createElement(TableBody, { testID: 'test-id-ccd610e3-wehjw-3ca2-f115-tsrhh' },
                    React.createElement(TableRow, { testID: 'test-id-f322e041-f11d-18cb-5d6f-yjhwe', selectable: true, onClick: () => {
                            props.showChancePopover(true);
                        } },
                        React.createElement(TableCell, { testID: 'test-id-e3f3f84c-01c2-2684-28e2-hwerwh', style: Styles.chanceTableCall },
                            React.createElement(View, { testID: 'test-id-51618691-6e11-aa18-471a-wqh3', style: Styles.chanceLabelContainer },
                                React.createElement(Label, { testID: 'test-id-54640430-7a86-6d47-8767-yu6k5q', header: '', text: 'Вероятность', block: false },
                                    React.createElement(Text, { testID: 'test-id-ee5653ba-ccd9-256a-588f-67jhs' }, props.inputChance !== null
                                        ? `${props.inputChance} %`
                                        : NO_DATA))),
                            React.createElement(View, { style: Styles.chancePopoverContainer },
                                React.createElement(PopoverTarget, { testID: 'test-id-e56d-2226ca8af123', refName: `deal_editor_chance` },
                                    React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                            props.showChancePopover(true);
                                        } },
                                        React.createElement(Icon, { testID: 'test-id-5jhwwb-eab6-562b-tueh3-3ede', type: IconType.MrmArrowDown }))),
                                React.createElement(Popover, { testID: 'test-id-13466acf-decisionPopover', target: PopoverTarget.getRef('deal_editor_chance'), opened: props.isChancePopoverOpened, onOutsideTap: () => {
                                        props.showChancePopover(false);
                                    }, type: PopoverType.WIDE, style: Styles.chancePopoverSize, position: [PopoverPosition.TOP] }, getChancePopoverContent(props)))))))),
        React.createElement(View, { style: Styles.dateContainer },
            React.createElement(DateInput, { testID: 'test-id-8ddb88d2-03ff-4c9b-8fd3-4354ethjhg', value: props.inputDealDate || undefined, label: "\u041F\u043B\u0430\u043D\u043E\u0432\u0430\u044F \u0434\u0430\u0442\u0430 \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0434\u0435\u043B\u043A\u0438", format: 'dd.MM.yyyy', locale: 'ru', placeholder: '\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433', dateType: DateInputTypes.DAY_PICKER, min: Utils.getDate(), onChange: (e) => props.performInputDealDate(e) }))),
    React.createElement(Table, { style: Styles.tableActivity, testID: 'test-id-wrthjm-asdfhsr-4c9b-thweyje-354wtgw' },
        React.createElement(TableBody, { testID: 'test-id-6hh-kejre-4c9b-j56hg-fgd' },
            React.createElement(TableRow, { testID: 'test-id-6thwrh-eryjf-mfdgn-sfgjns-hmdf', selectable: true, onClick: () => {
                    props.navigateToMemberListScreen();
                } },
                React.createElement(TableCell, { testID: 'test-id-ytewehw-jhshts-4c9b-tkjhs-hwegw', style: Styles.tableCellMargins },
                    React.createElement(View, { style: Styles.memberListContainer },
                        React.createElement(Text, { testID: 'test-id-d7e25fa0-b343-fbe6-0adc-e14010f5f4c8', style: Styles.font16 }, 'Команда сделки'),
                        React.createElement(View, { style: Styles.noteTeam },
                            React.createElement(Text, { style: Styles.noteFont, testID: 'test-id-8a37e81d-b564-a372-e80d-8997cff87f6a' }, `${memberListLine(props.currentDeal.memberList)}`),
                            React.createElement(Button, { testID: 'test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e', onExecute: () => {
                                    props.navigateToMemberListScreen();
                                } },
                                React.createElement(Icon, { testID: 'test-id-f10d5aed-51f3-0ff2-0fcd-7f12099ce5cb', disabled: true, type: IconType.MrmLink })))))))),
    props.isOwner
        ? React.createElement(Table, { style: Styles.tableActivity, testID: 'test-id-sdb-sdbf-4c9b-sdfb-5gerg' },
            React.createElement(TableBody, { testID: 'test-id-6hh-dfgsn-sdfb-dfb-jdn' },
                React.createElement(TableRow, { testID: 'test-id-hmsf-dfgnsn-ghmdn-uyrrm-strnrym', selectable: true, onClick: () => {
                        props.navigateToActivityListScreen();
                    } },
                    React.createElement(TableCell, { testID: 'test-id-kfugb-illss-snfn-aerhh-dkdss', style: Styles.tableCellMargins },
                        React.createElement(View, { style: Styles.memberListContainer },
                            React.createElement(Text, { testID: 'test-id-5kjetyh-b343-zxzdbfr54-erthj-hreyher', style: Styles.font16 }, 'Связанные задачи'),
                            React.createElement(View, { style: Styles.noteTeam },
                                React.createElement(Text, { testID: 'test-id-8a37e81d-yuyuj566-43taafg-sgdfhr4-785643hh' }, Utils.getRelatedActivitiesCount(props.activityList)),
                                React.createElement(Button, { testID: 'test-id-jerdf-gtwhw-a2fc-8jre-6yhgwerg', onExecute: () => {
                                        props.navigateToActivityListScreen();
                                    } },
                                    React.createElement(Icon, { testID: 'test-id-krje-51f3-jetyje-jerh-34faegw', disabled: true, type: IconType.MrmLink }))))))))
        : null,
    props.isAdditionalFieldsAvailable ? getAdditionalFields(props) : getAdditionalFieldsButton(props)));
/*
 * UI stateless functional component presenter for "DealEditor" container.
 */
const ViewDealEditor = (props) => (React.createElement(View, { testID: 'test-id-ac8dc389-ea0d-f1db-17f2-e22332338b96', style: Styles.main },
    React.createElement(SplitPanel, { testID: 'test-id-e4de6a42-c7d0-7a11-ce02-d9096d06a9fd', id: Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor) },
        React.createElement(ContentPanel, { testID: 'test-id-58ea65e1-b6b5-9b76-5b8b-cdf253effcef', style: { backgroundColor: '#fff' } },
            React.createElement(Page, { testID: 'test-id-f5294a17-f936-79ee-ed90-442d316b9c50', scrollEnabled: true, content: getDealEditorContent(props) },
                React.createElement(LeftPageHeader, { testID: 'test-id-8bea8159-986d-6497-4d51-2565ff0cb225' }, props.dealSaveInProgress
                    ? React.createElement(Text, { style: Styles.buttonLeft, testID: 'test-id-jkejw-8c46-wytu-5c5b-5whgq' }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C")
                    : React.createElement(View, { testID: 'test-id-61c4a477-a5a6-1ce8-eb5a-13rqegwev', style: Styles.navigationButtonPaddings },
                        React.createElement(NavigationTextButton, { testID: 'test-id-61c4a477-a5a6-1ce8-eb5a-b6aef18a043f', title: 'Отменить', onExecute: props.performCancel }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-d4902b53-d496-e793-6fbe-565b27482aad' }, props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                    ? React.createElement(H2, { testID: 'test-id-6e2fddd6-b5e2-b160-99e5-wRTHRRH' }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                    : props.dealEditorMode == Enums.DealEditorMode.CreateMode
                        ? React.createElement(H2, { testID: 'test-id-6e2fddd6-b5e2-b160-99e5-fdhrnj' }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                        : null),
                React.createElement(RightPageHeader, { testID: 'test-id-8621039b-8270-bee4-8e77-e40aab62c6b0' }, props.isValid && !props.isNavigationButtonDisabled && !props.dealSaveError
                    ? props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                        ? React.createElement(NavigationTextButton, { testID: 'test-id-b4138dad-8c46-d6f1-5c5b-erhwrhw', title: 'Готово', onExecute: props.performSave })
                        : props.dealEditorMode == Enums.DealEditorMode.CreateMode
                            ? React.createElement(NavigationTextButton, { testID: 'test-id-b4138dad-8c46-d6f1-5c5b-47adaf0d9e56', title: 'Создать', onExecute: props.performSave })
                            : null
                    : props.dealEditorMode == Enums.DealEditorMode.UpdateMode
                        ? React.createElement(Text, { style: Styles.button, testID: 'test-id-trwwqq-8c46-d6f1-5c5b-4ethgq' }, "\u0413\u043E\u0442\u043E\u0432\u043E")
                        : props.dealEditorMode == Enums.DealEditorMode.CreateMode
                            ? React.createElement(Text, { style: Styles.button, testID: 'test-id-jkejw-8c46-wytu-5c5b-5whgq' }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            : null)),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-4f13-7f666b0a6b70', scrollEnabled: false, content: React.createElement(ContainerSelectClassifierWithSearch, { testID: 'test-id-b775a680-9dcc-26f5-6d1f-0fccd44be8b5' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-54635jye' })),
            React.createElement(Page, { testID: 'test-id-272d1bdd-04b6-fa7c-be49-2300c05330ef', scrollEnabled: false, content: React.createElement(ContainerSelectClassifierWithSearch, { testID: 'test-id-08e018c4-e0e3-6295-ad08-ae42d4c9af1a' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qerhtrj-986d-yrht-4d51-3grfwf' })),
            React.createElement(Page, { testID: 'test-id-0c4ca2ff-erg-3gaa-sdh55-54gwg', scrollEnabled: false, content: React.createElement(ContainerSelectClassifierWithSearch, { testID: 'test-id-546uerd-454-ejr-56hg-8jhsd' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-345yg-986d-sdgg44-4d51-wswsdf11' })),
            React.createElement(Page, { scrollEnabled: false, testID: 'test-id-page-member-deal-view-43trn', content: React.createElement(View, { style: Styles.containerCap },
                    React.createElement(ContainerMemberList, { testID: 'test-id-viewDeal-page-list-employee-regfn' })) },
                React.createElement(LeftPageHeader, { testID: 'test-id-e89cdccf-6264-9c29-f6ed-d3aa1f91c4b9-rythgs' })),
            React.createElement(Page, { scrollEnabled: true, testID: 'test-id-page-member-deal-f3qwfq-2ewff', content: React.createElement(View, { style: Styles.containerCap }, dealAndTaskAssociateMain(props)) },
                React.createElement(LeftPageHeader, { testID: 'test-id-9d834a94-56e5-asfsfbn-836a-6gqff' },
                    React.createElement(NavigationBackButton, { testID: 'test-id-ddy45hhy-gfsgdb-98kddh-6879k-imtyrd', title: false, onClick: props.navigateBack }),
                    React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-bnajn-5687-0000-167a-4gegae" },
                        React.createElement(NavigationTextButton, { testID: "test-id-c5fb1ff3-0000-e36e-847f-9jergrqgh", title: 'Сделка', onExecute: props.navigateBack }))),
                React.createElement(CenterPageHeader, { testID: 'test-id-399e76bc-8f86-8c9c-272d-htyjaeqt3' },
                    React.createElement(H2, { testID: 'test-id-1b0f5543-ee44-793a-3d97-7875r6jehrwergnj' }, "\u0421\u0432\u044F\u0437\u044B\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u0441\u043E \u0441\u0434\u0435\u043B\u043A\u043E\u0439"))),
            React.createElement(Page, { testID: 'test-id-43fqfq-erg-f678-dealEditor', scrollEnabled: true, content: React.createElement(ContainerEmployee, { testID: 'test-id-viewDeal-page-one-34qf-employee' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-g435h3-c95a-f678-dealEditor' })),
            React.createElement(Page, { testID: 'test-id-24fe9594-aff6-11e7-abc4-cec278b6b50a', scrollEnabled: false, content: React.createElement(ContainerActivity, { instanceType: EnumsScheduler.SchedulerMode.DealEditorActivityList, testID: 'test-id-212d2f5c-aff6-11e7-abc4-cec278b6b50a' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-1a770e62-aff6-11e7-abc4-cec278b6b50a' })),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-3eteg', scrollEnabled: false, content: React.createElement(ContainerSelectClassifierWithSearch, { testID: 'test-id-WRAE-ewgra-26f5-6d1f-jfssba' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-54635jye' })),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-3ete2' // page Enums.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker
                , scrollEnabled: false, content: React.createElement(ContainerParentDealPicker, { testID: 'test-id-WRAE-ewgra-26f5-6d1f-jfssba1' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-54635jye12' })),
            React.createElement(Page, { testID: 'test-id-d9133974-6159-0bf3-ree-3eteg' // page Enums.NavigationContentDealEditor.AppCRM_DealEditor_CampaignPicker
                , scrollEnabled: false, content: React.createElement(ContainerCampaignPicker, { testID: 'test-id-WRAE-ewgra-26f5-6d1f-jfssba1' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-yrht-4d51-54635jye12' })),
            React.createElement(Page, { testID: 'test-id-d9133974-243grt-qerqr-q3rq-24fqgv', scrollEnabled: false, content: React.createElement(ContainerAgentList, { testID: 'activity-popover-select-agentList-picker' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-qrethwry-986d-theaaaq-4d51-37yhqpiguhq' }))),
        React.createElement(AccessoryPanel, { testID: 'test-id-2bd14d9c-4944-b922-d51d-b9cb1016775e' },
            React.createElement(Page, { testID: 'test-id-763926ad-26c1-2f3e-cfa2-346f60476136', content: React.createElement(ContainerScope, { instanceType: EnumsScheduler.SchedulerMode.DealEditorActivityList, testID: 'test-id-a4b8eb68-bc83-d6d5-b901-6d81055fce2133' }) },
                React.createElement(LeftPageHeader, { testID: 'test-id-8bea8159-986d-6497-4d51-2565ff0cb225' })),
            React.createElement(Page, { testID: 'test-id-763926ad-26c1-2f3e-cfa2-346f60476136', content: React.createElement(View, { testID: 'test-id-763926ad-26c1-2f3e-cfa2-346f60476136' }) })))));
export default ViewDealEditor;
//# sourceMappingURL=ViewDealEditor.js.map