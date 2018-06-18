/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewAgentStyles';
import { CompaniesRow, TouchableHighlight } from 'mrmkmcib-ui';
import { Button, ButtonType, CenterPageHeader, Col, ContentPanel, AccessoryPanel, DateInput, DateInputTypes, Grid, Icon, IconType, Label, LeftPageHeader, NavigationBackButton, NavigationTextButton, OptionItem, Page, RadioButton, RadioGroup, RightPageHeader, Row, SplitPanel, Table, TableBody, TableCell, TableRow, TabSelector, Text, TextInput, View, Textarea, H2, } from 'ufs-mobile-platform';
import { getFullScreenError } from './shared/ViewFullScreenError';
import { LoaderWithText, RefreshBar } from "mrmkmcib-app";
import { ContainerScope, ContainerActivity, EnumsScheduler } from 'mrmkmcib-scheduler';
import { Enums } from '../Enums';
import { defaultValues } from "../models/Models";
import * as Utils from '../common/Util';
import ContainerNoteList from '../containers/ContainerNoteList';
import ContainerEmployee from '../containers/ContainerEmployee';
import ContainerOccasionList from '../containers/ContainerOccasionList';
import { AgentCircle, ContainerMemberList } from 'mrmkmcib-crm';
import { SearchInput, IconView } from 'mrmkmcib-ui';
import { ErrorModal } from 'mrmkmcib-app';
const PLACEHOLDER = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA);
const NOT = Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO);
const EMPTY_CALLBACK = () => { };
const isEmailMode = (props) => {
    return props.agentContextMode === Enums.AgentContextMode.Email;
};
const renderLeftNavigationButton = (props) => {
    if (props.agentUpdateFetching) {
        return [];
    }
    switch (props.agentMode) {
        case Enums.AgentMode.Create:
        case Enums.AgentMode.Edit:
            return [React.createElement(NavigationTextButton, { key: "AgentNavCancelBarBackButton", testID: 'test-id-22a61eae-de66-11e7-80c1-9a214cf093ae', title: 'Отмена', onExecute: props.performCancel })];
        default:
            return [
                React.createElement(NavigationBackButton, { key: "AgentNavBarBackButton", testID: 'test-id-d0faa91deb1e4', onClick: props.performCancel, title: false }),
                React.createElement(View, { key: "AgentNavBarView", style: Styles.navigationBackButtonTextAdjustment, testID: "test-id-11931fca-e309-11e7-80c1-9a214cf093ae" },
                    React.createElement(NavigationTextButton, { key: 'occasionListNavBarText', title: Utils.getAgentLeftScreenNavigationTitleText(props.agentContextMode), testID: 'test-id-5fc800a7-4791-43b3-8f2c-8cfc821a7398', onExecute: props.performCancel }))
            ];
    }
};
const renderRightNavigationButton = (props) => {
    switch (true) {
        case (props.hasChangedAgentPersonData):
            return React.createElement(NavigationTextButton, { testID: 'test-id-1527d1a6-e32e-11e7-80c1-9a214cf093ae', title: 'Готово', onExecute: props.performSave });
        case (props.agentMode == Enums.AgentMode.Create):
            return React.createElement(NavigationTextButton, { testID: 'test-id-1db5c9d6-e32e-11e7-80c1-9a214cf093ae', title: 'Создать', onExecute: props.performSave });
        case (props.agentMode == Enums.AgentMode.Edit):
            return React.createElement(NavigationTextButton, { testID: 'test-id-1527d1a6-e32e-11e7-80c1-9a214cf093ae', title: 'Готово', onExecute: props.performSave });
        case props.agentMode === Enums.AgentMode.Watch &&
            !isEmailMode(props) &&
            props.currentAgent.accessLevel === Enums.AgentAccessLevel.MainTeamMember:
            return React.createElement(NavigationTextButton, { testID: 'test-id-ViewAgent-NavigationTextButton-9-ad11-7e4c-dc5526', title: 'Изменить', onExecute: props.performEdit });
        default: return null;
    }
};
const getErrorAgentModalWindow = (props) => {
    if (props.currentAgentError) {
        return {
            title: "Произошла ошибка при получении карточки представителя",
            cancel: props.performChangeDisplayAgentErrorModalWindow,
            repeat: () => props.performCallGetAgent(props.currentAgent),
            cacheDate: null,
            message: null,
        };
    }
    if (props.agentCreateError) {
        return {
            title: "Произошла ошибка при создании карточки представителя",
            cancel: props.performChangeDisplayAgentErrorModalWindow,
            repeat: props.performCallPostAgentCreate,
            cacheDate: null,
            message: props.agentCreateError && props.agentCreateError.message || props.agentCreateError.comment,
        };
    }
    if (props.agentUpdateError) {
        return {
            title: "Возникла ошибка при сохранении изменений по карточке представителя",
            cancel: props.performChangeDisplayAgentErrorModalWindow,
            repeat: props.performCallPutAgentUpdate,
            cacheDate: null,
            message: props.agentUpdateError && props.agentUpdateError.message || props.agentUpdateError.comment,
        };
    }
    return defaultValues.ErrorModalWindow;
};
const getErrorModalWindow = (props) => {
    const agentErrorModal = getErrorAgentModalWindow(props);
    return (React.createElement(ErrorModal, { key: `getErrorModalWindow-${agentErrorModal.title}-${agentErrorModal.message}`, testID: `test-id-modal-error-activity-card-${new Date().getTime()}`, isVisible: props.isVisibleAgentErrorModalWindow, titleText: agentErrorModal.title || "Произошла ошибка", messageText: agentErrorModal.message || "Попробуйте снова или обратитесь в службу поддержки.", cancel: () => agentErrorModal.cancel(false), repeat: () => agentErrorModal.repeat(), cacheDate: agentErrorModal.cacheDate || new Date() }));
};
const renderHeader = (props) => {
    /**
     * The following const should be replaced with correct props.agentViewMode logic
     */
    return [(React.createElement(CenterPageHeader, { key: 'AgentListCenterPageHeader', testID: 'test-id-ec71d6d7-9dd1-a091-c68c-9076a98206f7' },
            React.createElement(H2, { testID: 'test-id-ec71d6d7-9dd1-a091-c68c-9076a98206f7' }, props.currentAgent.accessLevel != Enums.AgentAccessLevel.Denied ? 'Карточка представителя' : 'Представитель'))), (React.createElement(LeftPageHeader, { key: 'AgentListLeftPageHeader', testID: 'test-id-a61d8dfe-bb1b-6c63-26d3-d74096628ba3' }, renderLeftNavigationButton(props))), (React.createElement(RightPageHeader, { key: 3, testID: 'test-id-9878baa7-84e2-d193-2d75-abb96b1afcaa' }, !getAgentLoadingText(props) ? renderRightNavigationButton(props) : null))];
};
const getAgentLoadingText = (props) => {
    switch (true) {
        case props.agentCreateFetching:
            return "Создание представителя";
        case props.agentUpdateFetching:
            return "Сохранение изменений по представителю";
        case props.currentAgentFetching:
            return "Загрузка карточки представителя";
        default:
            return "";
    }
};
const getLoader = (props) => (React.createElement(LoaderWithText, { text: getAgentLoadingText(props), testID: "test-id-45750788-db23-11e7-9296-cec278b6b50a" }));
const getAgentContent = (props) => {
    if (props.currentAgent &&
        props.currentAgent.accessLevel == Enums.AgentAccessLevel.Denied) {
        return [agentAccessDeniedContent(props)];
    }
    switch (props.agentMode) {
        case Enums.AgentMode.Watch: return [agentWatchModeContent(props), getErrorModalWindow(props)];
        case Enums.AgentMode.Edit:
        case Enums.AgentMode.Create: return [agentCreateEditModeContent(props), getErrorModalWindow(props)];
        default: return [];
    }
};
const getAgentScreenContent = (props) => (React.createElement(View, { testID: 'test-id-cfb37c4d-4c69-424e-25c8-7fd5b7e2d8b8', style: Styles.main }, props.currentAgentFetching ||
    props.agentUpdateFetching ||
    props.agentCreateFetching ||
    props.agentMode == Enums.AgentMode.None
    ?
        getLoader(props) : getAgentContent(props)));
const getAgentRelationType = (list, currentCustomerId) => {
    let relationType = list.data.find((client) => client.customerId == currentCustomerId);
    return relationType && relationType.customerRelations && relationType.customerRelations.value || '';
};
const getAgentPosition = (props) => (React.createElement(View, { style: Styles.TouchableRow, testID: "test-id-d6402ce8-dd94-11e7-9296-cec278b6b50a" },
    React.createElement(Text, { testID: 'test-id-86df538c-f1ac-d9c5-09d0-03670ff23383', style: Styles.agentPositionTextTitle }, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"),
    React.createElement(View, { testID: 'test-id-9c9469e7-182a-1966-ca96-0f67030a384d', style: Styles.TouchableRowChevron },
        React.createElement(Text, { testID: 'test-id-7249ab7b-173b-9402-b09e-40c5343db9ab', style: Styles.agentPositionTextValue }, props.inputJobPosition || PLACEHOLDER),
        React.createElement(Button, { testID: 'test-id-066dde19-07ff-7623-7144-f2159b11d936', onExecute: () => props.navigateToJobPickerScreen() },
            React.createElement(Icon, { testID: 'test-id-d548333c-e63e-e4cd-9179-6ac055ab3800', disabled: true, type: IconType.MrmLink })))));
const getAgentRelationTypeTableRow = (props) => (React.createElement(View, { style: Styles.TouchableRow, testID: "test-id-b1088f68-df26-11e7-80c1-9a214cf093ae" },
    React.createElement(Text, { testID: 'test-id-b5c8a92a-df26-11e7-80c1-9a214cf093ae', style: Styles.agentRelationTypeTextTitle }, "\u0422\u0438\u043F \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439"),
    React.createElement(View, { testID: 'test-id-b97da8f4-df26-11e7-80c1-9a214cf093ae', style: Styles.TouchableRowChevron },
        React.createElement(Text, { testID: 'test-id-c0139e6c-df26-11e7-80c1-9a214cf093ae', style: Styles.agentRelationTypeTextValue }, props.inputRelationType && props.inputRelationType.value || PLACEHOLDER),
        React.createElement(Button, { testID: 'test-id-c38f4a78-df26-11e7-80c1-9a214cf093ae', onExecute: () => props.navigateToRelationTypePickerScreen() },
            React.createElement(Icon, { testID: 'test-id-c71b9322-df26-11e7-80c1-9a214cf093ae', disabled: true, type: IconType.MrmLink })))));
const agentCreateEditModeContent = (props) => {
    let agentValidationFirstName = props.agentValidationErrorList
        .indexOf(Enums.AgentValidationAttribute.FirstName) > -1 ? Utils.getValidationgErrorText(Enums.AgentValidationAttribute.FirstName) : '';
    let agentValidationMiddleName = '';
    let agentValidationLastName = props.agentValidationErrorList
        .indexOf(Enums.AgentValidationAttribute.LastName) > -1 ? Utils.getValidationgErrorText(Enums.AgentValidationAttribute.LastName) : '';
    let agentValidationWorkPhone = props.agentValidationErrorList
        .indexOf(props.inputWorkPhone && props.inputWorkPhone[1] === "7"
        ? Enums.AgentValidationAttribute.WorkNumberWithSeven
        : Enums.AgentValidationAttribute.WorkNumber) > -1 ? Utils.getValidationgErrorText(props.inputWorkPhone && props.inputWorkPhone[1] === "7"
        ? Enums.AgentValidationAttribute.WorkNumberWithSeven
        : Enums.AgentValidationAttribute.WorkNumber) : '';
    let agentValidationMobilePhone = props.agentValidationErrorList
        .indexOf(props.inputMobilePhone && props.inputMobilePhone[1] === "7"
        ? Enums.AgentValidationAttribute.MobileNumber
        : Enums.AgentValidationAttribute.MobileNumberWithoutSeven) > -1 ? Utils.getValidationgErrorText(props.inputMobilePhone && props.inputMobilePhone[1] === "7"
        ? Enums.AgentValidationAttribute.MobileNumber
        : Enums.AgentValidationAttribute.MobileNumberWithoutSeven) : '';
    let agentValidationEmail = props.agentValidationErrorList
        .indexOf(Enums.AgentValidationAttribute.Email) > -1 ? Utils.getValidationgErrorText(Enums.AgentValidationAttribute.Email) : '';
    let agentValidationComment = props.agentValidationErrorList
        .indexOf(Enums.AgentValidationAttribute.Comment) > -1 ? Utils.getValidationgErrorText(Enums.AgentValidationAttribute.Comment) : '';
    let agentValidationBirthday = props.agentValidationErrorList
        .indexOf(Enums.AgentValidationAttribute.Birthday) > -1 ? Utils.getValidationgErrorText(Enums.AgentValidationAttribute.Birthday) : '';
    let agentValidationGender = props.agentValidationErrorList
        .indexOf(Enums.AgentValidationAttribute.Gender) > -1 ? Utils.getValidationgErrorText(Enums.AgentValidationAttribute.Gender) : '';
    return React.createElement(Grid, { key: 'test-id-9d6d7606-e0a9-11e7-80c1-9a214cf093ae11', testID: 'test-id-9d6d7606-e0a9-11e7-80c1-9a214cf093ae' },
        props.agentMode === Enums.AgentMode.Create ? React.createElement(Row, { testID: 'test-id-97717a04-e0a9-11e7-80c1-9a214cf093ae' },
            React.createElement(Col, { testID: 'test-id-352877a4-f798-1278-88d0-2542d4264338', xs: 12 },
                React.createElement(View, { style: Styles.agentCustomerView },
                    React.createElement(Label, { testID: 'test-id-a510e032-dd6b-11e7-9296-cec278b6b50a', header: '', text: 'Компания', block: true },
                        React.createElement(Text, { style: Styles.productText, testID: 'test-id-5831b51f-e988-4326-bdf2-977fb4eac771' }, props.currentCustomerManaged ?
                            (props.currentCustomerManaged.name ||
                                props.currentCustomerManaged.shortName) :
                            PLACEHOLDER))))) : null,
        React.createElement(Row, { testID: 'test-id-8e10988c-e0a9-11e7-80c1-9a214cf093ae' },
            React.createElement(Col, { testID: 'test-id-352877a4-f798-1278-88d0-2542d4264338', xs: 4 },
                React.createElement(TextInput, { testID: 'test-id-575a6baa-dd8f-11e7-9296-cec278b6b50a', placeholder: 'Введите фамилию', label: "Фамилия", value: props.inputLastName, hasError: agentValidationLastName.length > 0, errorText: agentValidationLastName, onChange: (lastName) => props.performInputLastName(lastName) })),
            React.createElement(Col, { testID: "test-id-38d89bf6-dd90-11e7-9296-cec278b6b50a", xs: 4 },
                React.createElement(TextInput, { testID: 'test-id-7482567d-391a-8dd2-17f0-0525c1d0c105', placeholder: 'Введите имя', label: "Имя", value: props.inputFirstName, hasError: agentValidationFirstName.length > 0, errorText: agentValidationFirstName, onChange: (firstName) => props.performInputFirstName(firstName) })),
            React.createElement(Col, { testID: "test-id-4325dad4-dd8f-11e7-9296-cec278b6b50a", xs: 4 },
                React.createElement(TextInput, { testID: 'test-id-53d087c6-dd8f-11e7-9296-cec278b6b50a', placeholder: 'Введите отчетство', label: "Отчество", value: props.inputMiddleName, hasError: agentValidationMiddleName.length > 0, errorText: agentValidationMiddleName, onChange: (middleName) => props.performInputMiddleName(middleName) }))),
        React.createElement(Row, { testID: 'test-id-abe98968-e0a9-11e7-80c1-9a214cf093ae' },
            React.createElement(Col, { testID: "test-id-6187986e-dd8f-11e7-9296-cec278b6b50a", xs: 6 },
                React.createElement(View, { style: Styles.agentGenderView },
                    React.createElement(Text, { style: Styles.agentGenderTextTitle, testID: "test-id-e7984564-df30-11e7-80c1-9a214cf093ae" }, "\u041F\u043E\u043B"),
                    React.createElement(TabSelector, { style: Styles.sexSelector, testID: 'test-id-664cea98-dd8f-11e7-9296-cec278b6b50a', label: 'Пол', value: String(props.inputGender), onChange: (value) => {
                            props.performInputGender(Utils.getGenderType(value));
                        } },
                        React.createElement(OptionItem, { testID: 'test-id-М', value: String(Enums.GenderList.Male), title: Utils.getGenderStringValue(Enums.GenderList.Male) }),
                        React.createElement(OptionItem, { testID: 'test-id-Ж', value: String(Enums.GenderList.Female), title: Utils.getGenderStringValue(Enums.GenderList.Female) })),
                    React.createElement(Text, { style: Styles.agentErrorGenderTextMessage, testID: "test-id-1a52e6ca-dff5-11e7-80c1-9a214cf093ae" }, agentValidationGender || ""))),
            React.createElement(Col, { testID: 'test-id-18c45540-dd8f-11e7-9296-cec278b6b50a', xs: 6 },
                React.createElement(DateInput, { testID: 'test-id-4386ea03-6271-1700-d5ec-f93073722e18', value: props.inputBirthday ? props.inputBirthday : undefined, label: '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F', format: 'dd.MM.yyyy', locale: 'ru', hasError: agentValidationBirthday.length > 0, errorText: agentValidationBirthday, max: new Date(), placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443', dateType: DateInputTypes.DATE_PICKER, onChange: (date) => props.performInputBirthday(date) }))),
        React.createElement(Row, { testID: 'test-id-e9bb62de-e0a9-11e7-80c1-9a214cf093ae' },
            React.createElement(Col, { testID: "test-id-e58d78c8-e0a9-11e7-80c1-9a214cf093ae", xs: 6 },
                React.createElement(TextInput, { testID: 'test-id-b32cbaef-0a97-fc5e-b62d-3ecf036f1cc8', placeholder: 'Введите телефон', label: "\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", value: props.inputWorkPhone || "", hasError: agentValidationWorkPhone.length > 0, errorText: agentValidationWorkPhone, onChange: (workPhone) => props.performInputWorkPhone(workPhone) })),
            React.createElement(Col, { testID: "test-id-f521776c-e0a9-11e7-80c1-9a214cf093ae", xs: 6 },
                React.createElement(TextInput, { testID: 'test-id-07e8fcb3-6af1-32ec-8f3c-c8b132b77ca8', placeholder: 'Введите телефон', label: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", value: props.inputMobilePhone || "", hasError: agentValidationMobilePhone.length > 0, errorText: agentValidationMobilePhone, onChange: (mobilePhone) => props.performInputMobilePhone(mobilePhone) }))),
        React.createElement(Row, { testID: "test-id-2694c224-dd92-11e7-9296-cec278b6b50a" },
            React.createElement(Col, { testID: "test-id-2e408440-dd92-11e7-9296-cec278b6b50a", xs: 12 },
                React.createElement(TextInput, { testID: 'test-id-1fe148b2-dd92-11e7-9296-cec278b6b50a', placeholder: 'Электронная почта', label: "Электронная почта", value: props.inputEmail, hasError: agentValidationEmail.length > 0, errorText: agentValidationEmail, onChange: (email) => props.performInputEmail(email) }))),
        React.createElement(Row, { testID: "test-id-abf40b12-e0aa-11e7-80c1-9a214cf093ae" },
            React.createElement(Col, { testID: "test-id-a5d53a12-e0aa-11e7-80c1-9a214cf093ae", xs: 12 },
                React.createElement(TextInput, { testID: 'test-id-af2ebb1c-779c-2460-a008-6280db219b66', placeholder: 'Введите комментарий', label: 'Комментарий', value: props.inputComment ? props.inputComment : '', hasError: agentValidationComment.length > 0, errorText: agentValidationComment, onChange: (comment) => props.performInputComment(comment) }))),
        React.createElement(Row, { testID: "test-id-c3868f8a-3d83-11e8-b467-0ed5f89f718b" },
            React.createElement(Col, { testID: "test-id-be3fa246-3d83-11e8-b467-0ed5f89f718b", xs: 12 },
                React.createElement(TouchableHighlight, { onPress: props.navigateToRelationTypePickerScreen, style: Styles.borderGridRowColLine }, getAgentRelationTypeTableRow(props)))),
        React.createElement(Row, { testID: "test-id-bab2358a-3d83-11e8-b467-0ed5f89f718b" },
            React.createElement(Col, { testID: "test-id-b674a250-3d83-11e8-b467-0ed5f89f718b", xs: 12 },
                React.createElement(TouchableHighlight, { onPress: props.navigateToJobPickerScreen, style: Styles.borderGridRowColLine }, getAgentPosition(props)))),
        React.createElement(Row, { testID: "test-id-abf40b12-e0aa-11e7-80c1-9a214cf093ae" },
            React.createElement(Col, { testID: "test-id-a5d53a12-e0aa-11e7-80c1-9a214cf093ae", xs: 12 },
                React.createElement(TouchableHighlight, { onPress: props.navigateToOccasionList, style: Styles.borderGridRowColLine }, getAgentOccasionList(props)))),
        React.createElement(Row, { testID: "test-id-b2801206-3d83-11e8-b467-0ed5f89f718b" },
            React.createElement(Col, { testID: "test-id-adebe5bc-3d83-11e8-b467-0ed5f89f718b", xs: 12 },
                React.createElement(TouchableHighlight, { onPress: props.navigateToNoteList, style: Styles.borderGridRowColLine }, getAgentNoticeList(props)))),
        props.agentMode == Enums.AgentMode.Edit ?
            React.createElement(Row, { testID: "test-id-aa62af20-3d83-11e8-b467-0ed5f89f718b" },
                React.createElement(Col, { testID: "test-id-a3e36446-3d83-11e8-b467-0ed5f89f718b", xs: 12 },
                    React.createElement(TouchableHighlight, { onPress: props.navigateToMemberList, style: Styles.borderGridRowColLine }, getAgentMemberList(props)))) : null);
};
const agentAccessDeniedContent = (props) => {
    return (React.createElement(View, { key: 'agentAccessDeniedContent', testID: 'test-id-53d96082-e7d3-11e7-80c1-9a214cf093ae' },
        React.createElement(View, { style: Styles.agentCircleView, testID: "test-id-ff80b1aa-e7de-11e7-80c1-9a214cf093ae" }, getHeader(props)),
        React.createElement(Table, { testID: 'test-id-4da21eca-e7d3-11e7-80c1-9a214cf093ae' },
            React.createElement(TableBody, { testID: 'test-id-585fef7c-e7d3-11e7-80c1-9a214cf093ae' },
                React.createElement(TableRow, { testID: 'test-id-1940ac7a-e7d6-11e7-80c1-9a214cf093ae' },
                    React.createElement(TableCell, { testID: 'test-id-0d0fad52-e7d6-11e7-80c1-9a214cf093ae' },
                        React.createElement(Label, { testID: 'test-id-a6f6cb8a8-e7d3-11e7-80c1-9a214cf093ae', header: '', block: true, text: 'Дата рождения' },
                            React.createElement(Text, { testID: 'test-id-74beb7ac-e7d3-11e7-80c1-9a214cf093ae' }, props.inputBirthday &&
                                props.inputBirthday.formattedString() ||
                                PLACEHOLDER))),
                    React.createElement(TableCell, { testID: 'test-id-7a7ff5ca-e7d3-11e7-80c1-9a214cf093ae' },
                        React.createElement(Label, { testID: 'test-id-80d318f8-e7d3-11e7-80c1-9a214cf093ae', header: '', block: true, text: 'Пол' },
                            React.createElement(Text, { testID: 'test-id-85a6f03e-e7d3-11e7-80c1-9a214cf093ae' }, Utils.getGenderStringValue(props.inputGender)))),
                    React.createElement(TableCell, { testID: 'test-id-89a0a3e2-e7d3-11e7-80c1-9a214cf093ae' },
                        React.createElement(Label, { testID: 'test-id-8d8a7186-e7d3-11e7-80c1-9a214cf093ae', header: '', text: 'Тип отношений', block: true },
                            React.createElement(Text, { testID: 'test-id-941257da-e7d3-11e7-80c1-9a214cf093ae' }, props.inputRelationType &&
                                props.inputRelationType.value ||
                                PLACEHOLDER)))),
                React.createElement(TableRow, { testID: 'test-id-fb19e4be-e7d5-11e7-80c1-9a214cf093ae', onClick: () => props.agentContextMode != Enums.AgentContextMode.Activity && props.performCreateActivityAccessRequest() },
                    React.createElement(TableCell, { testID: 'test-id-01c36150-e7d6-11e7-80c1-9a214cf093ae' }, props.agentContextMode == Enums.AgentContextMode.Activity ||
                        props.agentContextMode == Enums.AgentContextMode.Scheduler ?
                        React.createElement(Text, { testID: 'test-id-b29b0854-e4af-11e7-80c1-9a214cf093ae' }, `Для запроса доступа к карточке представителя необходимо перейти в карточку клиента «${props.currentCustomerManaged && props.currentCustomerManaged.name || ''}»`) :
                        React.createElement(Text, { style: Styles.createActivityAccessText, testID: 'test-id-b29b0854-e4af-11e7-80c1-9a214cf093ae' }, "Запросить доступ к полной информации")))))));
};
const getAgentOccasionList = (props) => (React.createElement(View, { style: Styles.TouchableRow, testID: "test-id-768457fc-dd94-11e7-9296-cec278b6b50a" },
    React.createElement(Text, { style: Styles.agentOccasionListText, testID: 'test-id-77d9509a-4878-15f0-70b0-1697efb5c7b6' }, 'Важные даты'),
    React.createElement(View, { testID: 'test-id-9e847bae-494c-c20b-06f4-4a0c0cc6ef6d', style: Styles.TouchableRowChevron },
        React.createElement(Text, { style: Styles.countTextValue, testID: 'test-id-5e349c1c-403d-967a-a9b0-c2f8440f831dm' }, props.inputOccasionList && Array.isArray(props.inputOccasionList.data) ?
            props.inputOccasionList.data.length : PLACEHOLDER),
        !isEmailMode(props) ?
            React.createElement(Button, { testID: 'test-id-44a9a682-0d79-d5b0-c0f5-66c88a259c6e', onExecute: () => props.navigateToOccasionList() },
                React.createElement(Icon, { testID: 'test-id-0e85ab2f-1bc6-e1b7-50c8-2e6d2845bfc9', disabled: true, type: IconType.MrmLink })) : React.createElement(View, { testID: 'test-id-c5d45cbe-db4e-11e7-9296-cec278b6b50a', style: Styles.EmptyChevron }))));
const getAgentComment = (props, validationCommentError) => (React.createElement(View, { testID: 'test-id-ViewAgent-ae843bba-db4e-11e7-9296-cec278b6b50a', style: Styles.touchableViewLabel },
    React.createElement(Label, { testID: 'test-id-ViewAgent-AgentInfoRow-AgentInfoRowSpecial1-Label-5thadsg-hej882-345heeg-06jhe-dgfn334', header: '', text: "Комментарий", block: true },
        React.createElement(Text, { numberOfLines: 1, style: Styles.agentCommentTextValue, testID: 'test-id-ViewAgent-57e87ecc-db4b-11e7-9296-cec278b6b50a' }, props.inputComment || '')),
    !isEmailMode(props) ? React.createElement(View, { testID: 'test-id-c5d45cbe-db4e-11e7-9296-cec278b6b50a', style: Styles.TouchableRowChevron },
        React.createElement(Button, { testID: 'test-id-25r-he-4hehwga-nebargrtrym', onExecute: props.navigateToAgentComment },
            React.createElement(Icon, { testID: 'test-id-8uhb-3rfg-wertyu-wdlfk', disabled: true, type: IconType.MrmLink }))) : React.createElement(View, { testID: 'test-id-c5d45cbe-db4e-11e7-9296-cec278b6b50a', style: Styles.EmptyChevron })));
const getAgentNoticeList = (props) => (React.createElement(View, { testID: 'test-id-ViewAgent-Text020r0u-gwe04453-5t56078i-06jhe-dfg443', style: Styles.TouchableRow },
    React.createElement(Text, { testID: 'test-id-ViewAgent-734jk-rqeh645-ghmfn189-7673wgh-082458gh', style: Styles.agentNoticeListText }, "\u0417\u0430\u043C\u0435\u0442\u043A\u0438"),
    React.createElement(View, { testID: 'test-id-ViewAgent-734jk-vfdhe764-gh8i7uhgwmfn189-afd54thgw4wy78ib842-eqeb13453', style: Styles.TouchableRowChevron },
        React.createElement(Text, { testID: 'test-id-ViewAgent-65748sldkmv-0549ytghfjcmx-152673tyfhcjm-afdb842-bhf6', style: Styles.countTextValue }, props.inputNoteList && Array.isArray(props.inputNoteList.data) ?
            props.inputNoteList.data.length : PLACEHOLDER),
        !isEmailMode(props) ?
            React.createElement(Button, { testID: 'test-id-ViewAgent-734jk-plknsd019283-5678qpeb-sdgh914-pklnwb913847', onExecute: () => props.navigateToNoteList() },
                React.createElement(Icon, { testID: 'test-id-ViewAgent-734jk-hjm492b-ghmfn189-afdb842-dasdfhs65wq', disabled: true, type: IconType.MrmLink })) : React.createElement(View, { testID: 'test-id-c5d45cbe-db4e-11e7-9296-cec278b6b50a', style: Styles.EmptyChevron }))));
const getAgentMemberList = (props) => (React.createElement(View, { style: Styles.TouchableRow, testID: "test-id-768457fc-dd94-11e7-9296-cec278b6b50a" },
    React.createElement(Text, { style: Styles.agentMemberListText, testID: 'test-id-77d9509a-4878-15f0-70b0-1697efb5c7b6' }, 'Доступ'),
    React.createElement(View, { testID: 'test-id-9e847bae-494c-c20b-06f4-4a0c0cc6ef6d', style: Styles.TouchableRowChevron },
        React.createElement(Text, { testID: `test-id-activity-deatails-people-row-Agent`, style: Styles.agentMemberTextTitle }, props.inputMemberList &&
            Array.isArray(props.inputMemberList.data) &&
            props.inputMemberList.data.length > 0
            ? Utils.getAgentMemberListOutput(props.inputMemberList)
            : NOT),
        !isEmailMode(props) ?
            React.createElement(Button, { testID: `test-id-activity-deatails-people-row_7-Agent`, onExecute: () => props.navigateToMemberList() },
                React.createElement(Icon, { testID: `test-id-activity-deatails-people-row_8-Agent`, type: IconType.MrmLink })) :
            React.createElement(View, { testID: 'test-id-c5d45cbe-db4e-11e7-9296-cec278b6b50a', style: Styles.EmptyChevron }))));
const getCacheInfoView = (props) => (React.createElement(RefreshBar, { key: 'refreshBarActivityList', testID: 'test-id-scope-activity-list-cache-refresh-view', performRefresh: () => props.performGetUncachedAgent(), date: props.currentAgentCachedDate || new Date() }));
const agentWatchModeContent = (props) => (React.createElement(View, { testID: 'test-id-0ab8a6e0-521a-4aa8-959e-b77bbaa262f2' },
    React.createElement(Page, { testID: 'test-id-bb3f4897-19e0-47b2-9752-c130f8018837', scrollEnabled: true, content: React.createElement(View, { style: Styles.agentCardView, key: `agentWatchModeContent-${props.currentAgent.id}-${props.currentAgent.fullName}` },
            React.createElement(View, { testID: 'test-id-0a614f2e-5c91-67da-08ae-4cabe2144817', style: Styles.agentCircleView }, getHeader(props)),
            React.createElement(Table, { noPaddings: false, style: Styles.agentCardTableWatchMode, testID: 'test-id-renderFoundPeopleList-2' },
                React.createElement(TableBody, { testID: 'test-id-renderFoundPeopleList-6' },
                    React.createElement(TableRow, { testID: "test-id-6dd8fa3e-db2a-11e7-9296-cec278b6b50a" },
                        React.createElement(TableCell, { testID: "test-id-828fab30-db2a-11e7-9296-cec278b6b50a" },
                            React.createElement(Label, { testID: 'test-id-ViewAgent-AgentInfoRow-Label-425yhteyq-t235g5t-lkjhr57i-be5g333g-453tgtf', header: '', text: "Рабочий телефон", block: true },
                                React.createElement(Text, { testID: 'test-id-ViewAgent-AgentInfoRow-Text-ssgrehjky543-ndyh74-lkgfds356-ndh78-rg4557766' }, props.inputWorkPhone || PLACEHOLDER))),
                        React.createElement(TableCell, { testID: "test-id-828fab30-db2a-11e7-9296-cec278b6b50a" },
                            React.createElement(Label, { testID: 'test-id-ViewAgent-AgentInfoRow-Label-5t6y-345tf-ljkg678-j8764-ij76ft', header: '', text: "Мобильный телефон", block: true },
                                React.createElement(Text, { testID: 'test-id-ViewAgent-AgentInfoRow-Text-5gt55w-45hh67uj-673u7-67u3hhn-43134' }, props.inputMobilePhone || PLACEHOLDER)))),
                    React.createElement(TableRow, { testID: "test-id-33b5dda4-db43-11e7-9296-cec278b6b50a" },
                        React.createElement(TableCell, { testID: "test-id-381c1f98-db43-11e7-9296-cec278b6b50a" }, props.inputEmail ?
                            React.createElement(View, null,
                                React.createElement(Text, { testID: "test-id-6d33aa54-e4bf-11e7-80c1-9a214cf093ae", style: Styles.emailTextTitle }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"),
                                React.createElement(Button, { testID: 'test-id-ViewAgent-b914e2c2-db54-11e7-9296-cec278b6b50a', onExecute: props.performSendEmail, type: ButtonType.TEXT },
                                    React.createElement(Text, { testID: 'test-id-2d35bcf8-e4b0-11e7-80c1-9a214cf093ae' }, `${props.inputEmail}`))) :
                            React.createElement(Label, { testID: 'test-id-ViewAgent-AgentInfoRow-Label-5t6y-345tf-ljkg678-j8764-ij76ft', header: '', text: "Электронная почта", block: true },
                                React.createElement(Text, { testID: 'test-id-ViewAgent-AgentInfoRow-Text-3ed4r5t6y-bvfer54-3rt653ef-5748yjteh-8765jdh' }, PLACEHOLDER))),
                        React.createElement(TableCell, { testID: "test-id-381c1f98-db43-11e7-9296-cec278b6b50a" },
                            React.createElement(Label, { testID: 'test-id-ViewAgent-AgentInfoRow-Col-Label-2grtu-wef424-4f3h6-5tg6yh-dfg443', header: '', text: "Тип отношений", block: true },
                                React.createElement(Text, { testID: 'test-id-ViewAgent-AgentInfoRow-Col-Label-Text-2grtu-wef424-4f3h6-06jh76655e-dfg443' }, props.inputRelationType &&
                                    props.inputRelationType.value ||
                                    PLACEHOLDER)))),
                    React.createElement(TableRow, { testID: "test-id-875a2796-db46-11e7-9296-cec278b6b50a" },
                        React.createElement(TableCell, { testID: "test-id-99b43fb2-db46-11e7-9296-cec278b6b50a" },
                            React.createElement(Label, { testID: 'test-id-b38dbddc-db46-11e7-9296-cec278b6b50a', header: '', text: "Дата рождения", block: true },
                                React.createElement(Text, { testID: 'test-id-c3a98976-db46-11e7-9296-cec278b6b50a' }, props.inputBirthday ?
                                    props.inputBirthday.formattedString() :
                                    PLACEHOLDER))),
                        React.createElement(TableCell, { testID: "test-id-9e6c9b4e-db46-11e7-9296-cec278b6b50a" },
                            React.createElement(Label, { testID: 'test-id-ViewAgent-AgentInfoRow-Col-Label-124wf0-543w-4f3h6-56h-5632gwg', header: '', text: "Пол", block: true },
                                React.createElement(Text, { testID: 'test-id-ViewAgent-AgentInfoRow-Col-Label-Text-2grtu-wef424-4f3h6-5tgb6yh8ik-mko0cvfgty' }, Utils.getGenderStringValue(props.inputGender))))),
                    React.createElement(TableRow, { onClick: !isEmailMode(props) ? props.navigateToAgentComment : EMPTY_CALLBACK, style: Styles.tableActionRow, testID: "test-id-6dd8fa3e-db2a-11e7-9296-cec278b6b50a" },
                        React.createElement(TableCell, { style: Styles.tableActionRow, testID: "test-id-6dd8fa3e-db2a-11e7-9296-cec278b6b50a" }, getAgentComment(props, ''))),
                    React.createElement(TableRow, { onClick: !isEmailMode(props) ? props.navigateToMemberList : EMPTY_CALLBACK, style: Styles.tableActionRow, testID: "test-id-6dd8fa3e-db2a-11e7-9296-cec278b6b50a" },
                        React.createElement(TableCell, { style: Styles.tableActionRow, testID: "test-id-6dd8fa3e-db2a-11e7-9296-cec278b6b50a" }, getAgentMemberList(props))),
                    React.createElement(TableRow, { onClick: !isEmailMode(props) ? props.navigateToOccasionList : EMPTY_CALLBACK, style: Styles.tableActionRow, testID: "test-id-492d0dbc-3d84-11e8-b467-0ed5f89f718b" },
                        React.createElement(TableCell, { style: Styles.tableActionRow, testID: "test-id-4f87672a-3d84-11e8-b467-0ed5f89f718b" }, getAgentOccasionList(props))),
                    React.createElement(TableRow, { onClick: !isEmailMode(props) ? props.navigateToNoteList : EMPTY_CALLBACK, style: Styles.tableActionRow, testID: "test-id-53f775f2-3d84-11e8-b467-0ed5f89f718b" },
                        React.createElement(TableCell, { style: Styles.tableActionRow, testID: "test-id-571f0650-3d84-11e8-b467-0ed5f89f718b" }, getAgentNoticeList(props))),
                    React.createElement(TableRow, { testID: "test-id-5b1a0782-3d84-11e8-b467-0ed5f89f718b" },
                        React.createElement(TableCell, { testID: "test-id-62604c5e-3d84-11e8-b467-0ed5f89f718b" },
                            React.createElement(Text, { style: Styles.agentCompanyListTextTitle, testID: 'test-id-5da48250-df35-11e7-80c1-9a214cf093ae' }, "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439"))),
                    props.currentAgent.customerPositionList.data
                        .map((item, key) => {
                        return (React.createElement(CompaniesRow, { key: `CompaniesRow_${key}${item.customerId}${Utils.getRandomOperationUuid()}`, company: item.company, legalForm: item.organizationType && Utils.overrideClassifierValue(item.organizationType.value) || PLACEHOLDER, onPress: () => props.performOpenCustomerScreen(item) }));
                    })))) }),
    !isEmailMode(props) ?
        getCacheInfoView(props) :
        null));
const AgentAccessTab = (props) => {
    if (props.currentAgent.accessLevel != Enums.AgentAccessLevel.Denied) {
        return (React.createElement(ContainerMemberList, { testID: 'test-id-AgentAccessTab-ContainerMemberList' }));
    }
    return (React.createElement(View, { testID: 'test-id-AgentAccessTab-View-Button', style: { height: 100, alignItems: 'center', justifyContent: 'center' } },
        React.createElement(Button, { type: ButtonType.CTA, testID: 'test-id-AgentAccessTab-Button', onExecute: props.performCreateActivityAccessRequest },
            React.createElement(Text, { testID: 'test-id-AgentAccessTab-Button-Text' }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"))));
};
const getFullScreenHeaderAttributes = (props) => (React.createElement(View, { style: Styles.agentInfoView },
    React.createElement(View, { testID: 'test-id-a6b47d7a-db1f-11e7-9296-cec278b6b50a', style: Styles.agentFullNameView },
        props.currentAgent.accessLevel == Enums.AgentAccessLevel.Denied ?
            React.createElement(IconView, { testID: `test-id-activity-lock-icon`, type: 'lock', disabled: false }) : null,
        React.createElement(Text, { testID: "test-id-71b5750e-db1d-11e7-9296-cec278b6b50a", style: Styles.agentFullNameText, numberOfLines: 2 }, `${props.inputLastName} ${props.inputFirstName} ${props.inputMiddleName}`))));
const getHeader = (props) => (React.createElement(View, { testID: 'test-id-b8d80ac4-fa08-6823-556a-f8a0b59495f9', style: Styles.headerAgentCircleView },
    React.createElement(AgentCircle, { testID: 'test-id-bd034a1b-5612-00db-b273-dfa7a54e71cb', firstName: props.currentAgent.firstName, lastName: props.currentAgent.lastName, isExpandedMode: true, hasCrown: props.currentCustomerManaged ?
            Utils.isMainContact(props.currentCustomerManaged, props.currentAgent) :
            false }),
    getFullScreenHeaderAttributes(props)));
const getPositionListContent = (props) => {
    const tablePositionListRows = (props) => (props.classifierDictionary.SBRF_CONT_JOB_TITLE.data
        .filter((item) => item.value.toLowerCase().includes(props.inputSearchJobPosition.toLowerCase()))
        .map((item) => (React.createElement(TableRow, { testID: 'test-id-f2b822ee-94f9-0a7e-70fb-13e162ac7d20', key: `${item.code}`, onClick: () => props.performInputJobPosition(item.value) },
        React.createElement(TableCell, { testID: 'test-id-88d74346-e44e-a14f-696f-e0bf018430f0' },
            React.createElement(View, { testID: 'test-id-92641820-a024-4db8-59b8-751bc7c5216f', style: Styles.positionViewWrapper },
                React.createElement(View, { testID: 'test-id-70115b33-0434-b82e-622f-c69c87933f9e', style: Styles.positionTextView },
                    React.createElement(Text, { testID: 'test-id-2acffd5a-fe9e-d9cd-5e9c-e7d3c1945dd0', style: Styles.positionTextValue }, item.value || PLACEHOLDER)),
                props.inputJobPosition == item.value ?
                    React.createElement(View, { testID: 'test-id-7577b344-90a8-b6b1-86c5-467d230b041b', style: Styles.memberListItemArrowWrapper },
                        React.createElement(Button, { testID: `test-id-ecaf3cfe-dfe1-11e7-80c1-9a214cf093ae`, onExecute: () => props.performInputJobPosition(item.value) },
                            React.createElement(Icon, { testID: 'test-id-e08f0002-6d88-2312-d89a-4e79bfa2b014', disabled: true, type: IconType.MrmDone }))) : null))))));
    return React.createElement(View, { testID: "test-id-902d2baa-0041-11e8-ba89-0ed5f89f718b" },
        React.createElement(Table, { testID: 'test-id-d4df1f96-cec2-213e-03a6-2abdad21c388' },
            React.createElement(TableBody, { testID: 'test-id-d4df1f96-cec2-213e-03a6-2abdad21c388' },
                props.inputSearchJobPosition.length > 0 ?
                    React.createElement(TableRow, { testID: 'test-id-f2b822ee-94f9-0a7e-70fb-13e162ac7d20', onClick: () => props.performInputJobPosition(props.inputSearchJobPosition) },
                        React.createElement(TableCell, { testID: 'test-id-88d74346-e44e-a14f-696f-e0bf018430f0' },
                            React.createElement(View, { testID: 'test-id-92641820-a024-4db8-59b8-751bc7c5216f', style: Styles.positionViewWrapper },
                                React.createElement(View, { testID: 'test-id-70115b33-0434-b82e-622f-c69c87933f9e', style: Styles.positionTextView },
                                    React.createElement(Text, { testID: 'test-id-2acffd5a-fe9e-d9cd-5e9c-e7d3c1945dd0', style: Styles.positionTextValue }, props.inputSearchJobPosition)),
                                React.createElement(View, { testID: 'test-id-7577b344-90a8-b6b1-86c5-467d230b041b', style: Styles.memberListItemArrowWrapper }, props.inputJobPosition == props.inputSearchJobPosition ?
                                    React.createElement(Button, { testID: `test-id-d9678e12-dfe1-11e7-80c1-9a214cf093ae`, onExecute: () => props.performInputJobPosition(props.inputSearchJobPosition) },
                                        React.createElement(Icon, { testID: 'test-id-e08f0002-6d88-2312-d89a-4e79bfa2b014', disabled: true, type: IconType.MrmDone })) : null)))) : null,
                tablePositionListRows(props))));
};
const getRelationTypeListContainer = (props) => {
    let classifier = props.classifierDictionary.SBRF_CONTACT_TYPE_GROUP;
    const getRoleLines = (classifierList) => classifierList.data
        .map((item) => React.createElement(RadioButton, { testID: 'test-id-1b7f9f8e-88a3-0921-b822-82fb2b8534ed', key: `radio-${item.code}`, value: item.code, label: item.value }));
    return (React.createElement(RadioGroup, { testID: 'test-id-9a1fb038-8dd8-5905-8ba2-34e734995059', value: props.inputRelationType.value, onChange: (index, value) => props.performInputRelationType(classifier.data[index]) }, getRoleLines(classifier)));
};
const setAgentComment = (props) => {
    if (props.agentUpdateFetching) {
        return React.createElement(LoaderWithText, { testID: "test-id-3594e506-2379-11e8-b467-0ed5f89f718c" });
    }
    if (props.agentUpdateError) {
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityExclude',
            title: props.agentUpdateError.comment,
            description: props.agentUpdateError.message,
            onRefresh: props.performCallPutAgentUpdate
        });
    }
    let agentValidationComment = '';
    return (React.createElement(Textarea, { testID: 'test-id-35ghh-8ki7lk-8lktrj-ashfs-qwefpoikj', value: props.isCommentEdit ? props.newAgentComment : props.inputComment, label: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', disabled: props.isCommentEdit == false, placeholder: '', onChange: (comment) => props.performInputComment(comment) }));
};
const getAgentCustomerCompanies = (props) => {
    return (React.createElement(View, null, props.currentAgent.customerPositionList.data.map((item, key) => (React.createElement(View, { testID: 'test-id-1b7f9f8e-88a3-d921-b0c2-82a02b8534ed', key: key, style: Styles.AgentCustomerPositionRow },
        React.createElement(View, { testID: 'test-id-1b709f8e-80a3-0921-b002-82002b8034ed', style: Styles.AgentCustomerPositionCompanyInfo },
            React.createElement(Text, { testID: 'test-id-1b7f9f8e-88a3-0921-b002-82002b8534ed', style: Styles.AgentCustomerPositionText }, item.company || PLACEHOLDER),
            React.createElement(Text, { testID: 'test-id-1b7f9f8e-88a3-0921-b002-bbbb2b0034ed', style: Styles.AgentCustomerPositionForm }, item.legalFormClassifier && item.legalFormClassifier.value ||
                Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA)),
            React.createElement(Text, { testID: 'test-id-1b7f9f8e-88a3-0921-b002-bbbc2b8534ed', style: Styles.AgentCustomerPositionText }, item.position || PLACEHOLDER)),
        React.createElement(View, { style: Styles.ChevronWrapper, testID: 'test-id-5437b29b-ba9d-787c-1a78-8c5e82361fbb' },
            React.createElement(Button, { testID: 'test-id-39577b99-a9bc-c2df-d01a-1c04fed350b2', type: ButtonType.DEFAULT, onExecute: () => props.performOpenCustomerScreen(item) },
                React.createElement(Icon, { testID: 'test-id-053560ab-9f17-06dd-1ad4-74a01da76420', type: IconType.MrmLink }))))))));
};
const getAgentAccessoryPanel = (props) => {
    if (props.agentContextMode == Enums.AgentContextMode.Scheduler ||
        props.agentContextMode == Enums.AgentContextMode.Email ||
        props.agentContextMode == Enums.AgentContextMode.Deal_NonLegalMember) {
        return React.createElement(View, { testID: 'test-id-ab29b474-3d8f-11e8-b467-0ed5f89f718b' });
    }
    if (props.currentAgentFetching) {
        return React.createElement(AccessoryPanel, { testID: 'test-id-24743bb4-2379-11e8-b467-0ed5f89f718b' },
            React.createElement(Page, { testID: "test-id-1fd025b4-2379-11e8-b467-0ed5f89f718b", content: React.createElement(LoaderWithText, { testID: "test-id-3594e506-2379-11e8-b467-0ed5f89f718b" }) }));
    }
    if (props.agentMode == Enums.AgentMode.Create) {
        return React.createElement(AccessoryPanel, { testID: 'test-id-24743bb4-2379-11e8-b467-0ed5f89f718b' },
            React.createElement(Page, { testID: "test-id-1fd025b4-2379-11e8-b467-0ed5f89f718b", content: React.createElement(View, { testID: "test-id-9bf80e4a-2379-11e8-b467-0ed5f89f718" }) }));
    }
    return React.createElement(AccessoryPanel, { testID: 'test-id-153a879c-f6fc-11e7-8c3f-9a214cf093ae' }, props.currentAgent.accessLevel != Enums.AgentAccessLevel.Denied ?
        React.createElement(ContainerScope, { instanceType: EnumsScheduler.SchedulerMode.Agent, testID: 'test-id-0f77e5ac-f6fc-11e7-8c3f-9a214cf093ae' })
        : React.createElement(View, { testID: "test-id-df185200-fb58-11e7-8c3f-9a214cf093ae" }));
};
const ViewAgent = (props) => (React.createElement(SplitPanel, { testID: 'test-id-1cb08f64-b5e0-16c4-7b4e-3fec9c7b6a64', id: Utils.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen) },
    React.createElement(ContentPanel, { testID: 'test-id-4976f257-0972-9d8a-3cd6-f56f6fa3d34f', style: { backgroundColor: '#fff' } },
        React.createElement(Page, { testID: 'test-id-aa24b6cb-cbf1-e19b-ba08-b91541ed5cb4', scrollEnabled: false, content: getAgentScreenContent(props) }, renderHeader(props)),
        React.createElement(Page, { testID: 'test-id-0364fc44-2b59-6d84-cb2b-b0ab602a1982', scrollEnabled: false, content: React.createElement(ContainerNoteList, { testID: 'test-id-0364fc44-2b59-6d84-cb2b-b0ab602a1982' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-61c283ea-cfa0-e961-506e-f4be908b7400jgv' })),
        React.createElement(Page, { testID: 'test-id-bbc2cc8d-8268-2ed4-e795-9e6c8866818b', scrollEnabled: false, content: React.createElement(ContainerOccasionList, { testID: 'test-id-bbc2cc8d-8268-2ed4-e795-9e6c8866818b' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-61c283ea-cfa0-e961-506e-f4be908b7400' })),
        React.createElement(Page, { testID: 'test-id-4cb2810e-50d0-2f60-b9f4-6b4137fb4056', scrollEnabled: true, content: getPositionListContent(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-61c283ea-cfa0-e961-506e-f4be908b7400' },
                React.createElement(SearchInput, { value: props.inputSearchJobPosition, placeholder: "Введите должность", autoFocus: true, onCancel: () => { props.navigateBack(); }, onChange: (position) => props.performInputSearchJobPosition(position) }))),
        React.createElement(Page, { testID: 'test-id-40562695-899a-13d2-4bfd-5bd78fb4d9d0', scrollEnabled: true, content: getRelationTypeListContainer(props) },
            React.createElement(CenterPageHeader, { testID: 'test-id-fe755d08-60c4-6411-7924-05292c79f93f' },
                React.createElement(H2, { testID: 'test-id-fe755d08-60c4-6411-7924-05292c79f93f' }, 'Выбор типа отношений'))),
        React.createElement(Page, { testID: 'test-id-40562695-899a-13d2-40fd-5bd70094d9d0', scrollEnabled: true, content: getAgentCustomerCompanies(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-61c283ea-cfa0-e961-dd6e-f400908bbb00' },
                React.createElement(NavigationBackButton, { testID: 'test-id-d0fb37f3-c6d2-3dde-3156-f3aa9ec0b1b4', title: false, onClick: props.navigateBack })),
            React.createElement(CenterPageHeader, { testID: 'test-id-fe755d08-60c4-6011-7924-05002c79f03f' },
                React.createElement(H2, { testID: 'test-id-fe005d08-60c4-6011-7924-05292c79f93f' }, 'Представитель компаний'))),
        React.createElement(Page, { testID: 'test-id-242qq-fdju-89ke-ehgh-5867eh', scrollEnabled: true, content: setAgentComment(props) },
            React.createElement(LeftPageHeader, { testID: 'test-id-rdhm-bburd-uoit-cbvmm-rewga' }, props.isCommentEdit
                ? React.createElement(NavigationTextButton, { onExecute: props.navigateBack, testID: 'test-id-wefg-NavigationTextButton-poiughj-987rfhj-xfgur-gbs', title: 'Отмена' })
                : React.createElement(NavigationBackButton, { testID: 'test-id-024t53-wgbar443-28541t1g-mjbww-qopkeg', title: false, onClick: props.navigateBack })),
            React.createElement(CenterPageHeader, { testID: 'test-id-mab-qvbnb-84hvav-elpknb-hgtnh' },
                React.createElement(H2, { testID: 'test-id-yuiujhw-kehg-ntue-nmir-qerv' }, props.isCommentEdit ? 'Изменение комментария' : 'Комментарий')),
            React.createElement(RightPageHeader, { testID: 'test-id-rgg-bvasf-qerbik-qerobi-orgwtu' }, props.currentAgent.accessLevel == Enums.AgentAccessLevel.MainTeamMember ?
                React.createElement(NavigationTextButton, { testID: 'test-id-wefg-NavigationTextButton-poiughj-987rfhj-xfgur-gbs', title: props.isCommentEdit ? 'Готово' : 'Изменить', onExecute: props.performSetAgentCommentEditStatus })
                : null)),
        React.createElement(Page, { testID: 'test-id-4cb2810e-50d0-2f60-b9f4-ContainerEmployee', scrollEnabled: true, content: React.createElement(ContainerEmployee, { testID: 'test-id-4cb2810e-50d0-2f60-b9f4-ContainerEmployee1' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-61c283ea-cfa0-e961-dd6e-ContainerEmployee' })),
        React.createElement(Page, { testID: 'test-id-6d1fd01c-aa9d-11e7-abc4-cec278b6b50a-ContainerActivity-Page', scrollEnabled: false, content: React.createElement(ContainerActivity, { instanceType: EnumsScheduler.SchedulerMode.Agent, testID: 'test-id-2b977f96-aa9d-11e7-abc4-cec278b6b50a-ContainerActivity' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-24c6b0c4-aa9d-11e7-abc4-cec278b6b50a-ContainerActivity-LeftPageHeader' })),
        React.createElement(Page, { testID: 'test-id-6d1fd01c-aa9d-11e7-abc4-cec278b6b50a-ContainerActivity-Page', scrollEnabled: false, content: React.createElement(ContainerMemberList, { testID: 'test-id-aaab2948-e9fb-11e7-80c1-9a214cf093ae-ContainerMemberList' }) },
            React.createElement(LeftPageHeader, { testID: 'test-id-b153b5e4-e9fb-11e7-80c1-9a214cf093ae-ContainerMemberList-LeftPageHeader' }))),
    getAgentAccessoryPanel(props)));
export default ViewAgent;
//# sourceMappingURL=ViewAgent.js.map