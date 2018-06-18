/**
 * ForecastEventEditor component.
 */
'use strict';
import React from 'react';
import Styles, { ContentPanelBackgroundColorPureObject } from './styles/ViewForecastEventEditorStyles';
import { Button, ButtonType, CenterPageHeader, Checkbox, Col, ContentPanel, DateInput, DateInputTypes, Grid, H2, Icon, IconType, KeyboardType, Label, LeftPageHeader, Modal, NavigationBackButton, NavigationTextButton, NumberInput, Page, Popover, PopoverPosition, PopoverType, RadioButton, RadioGroup, RightPageHeader, Row, SplitPanel, Text, Textarea, TextInput, View, } from 'ufs-mobile-platform';
import { TouchableOpacity, KeyboardAvoidingView } from 'mrmkmcib-ui';
import { Enums } from '../Enums';
import { LoaderWithText, } from 'mrmkmcib-app';
import { SelectClassifier as SelectClassifierCrm } from 'mrmkmcib-crm';
import * as Utils from '../common/Util';
import PopoverTarget from '../modules/PopoverTarget';
const creatableCreditTypes = [
    { code: 'ВЫДАЧА_K_Т' },
    { code: 'ГАШЕНИЕ_K_T' }
];
const editableCreditTypes = [
    { code: 'ВЫДАЧА_K_Т' },
    { code: 'ГАШЕНИЕ_K_T' },
    { code: 'ГАШЕНИЕ_П_K_T' }
];
const getEventTypeChoiceData = (props, filteredTypes) => {
    return {
        data: Utils.filterClassifierData(props.classifierDictionary.UFS_FC_EVENT_TYPE.data, filteredTypes)
    };
};
const Selector = (props) => {
    return (React.createElement(View, { testID: 'test-id-1', style: Styles.selectorWrap },
        React.createElement(TouchableOpacity, { onPress: () => props.onExecute(), activeOpacity: 1 },
            React.createElement(TextInput, { testID: 'test-id-2', label: props.label, hasError: props.hasError || false, errorText: props.errorText || '' }),
            React.createElement(View, { testID: 'test-id-3', style: Styles.selectorView },
                React.createElement(Text, { testID: 'test-id-4', style: Styles.selectorViewText }, props.value)),
            React.createElement(View, { testID: 'test-id-5', style: Styles.selectorIcon },
                React.createElement(Button, { testID: 'test-id-6', onExecute: () => { } },
                    React.createElement(Icon, { testID: 'test-id-7', disabled: true, type: props.icon })),
                props.popover ? props.popover : null))));
};
const forecastEventForm = (props) => {
    const rowForecastEventFullRepaymentNotice = (React.createElement(Row, { testID: 'test-id-1' },
        React.createElement(Col, { testID: 'test-id-2', xs: 12 },
            React.createElement(View, { testID: 'test-id-3', style: Styles.fullRepaymentNoticeContainer },
                React.createElement(Text, { testID: 'test-id-4', style: Styles.fullRepaymentText }, 'При полном досрочном погашении сумма рассчитывается автоматически.'),
                React.createElement(Text, { style: Styles.fullRepaymentTextPaddingTop, testID: 'test-id-5' }, 'Прогнозные события по договору будут пересчитаны.')))));
    const typeEvent = (React.createElement(Selector, { label: 'Тип события', value: props.inputForecastEventType && props.inputForecastEventType.value || 'Нет', onExecute: () => props.navigateToForecastTypeSelection(), icon: IconType.MrmLink, hasError: !!props.inputValidationForecastEventType, errorText: props.inputValidationForecastEventType || '' }));
    const isRepayment = !!(props.inputForecastEventType && props.inputForecastEventType.code === 'ГАШЕНИЕ_K_T');
    const isFullRepayment = (isRepayment && props.inputForecastEventFullRepayment);
    const fullRepayment = (React.createElement(View, { testID: 'test-id-1' },
        React.createElement(View, { testID: 'test-id-2', style: Styles.fullRepaymentWrapper },
            React.createElement(Checkbox, { testID: 'test-id-3', checked: props.inputForecastEventFullRepayment, label: 'Полное погашение', onChange: props.performForecastEventFormUpdateFullRepayment }))));
    const rowForecastSumAndCurrency = (React.createElement(Row, { testID: 'test-id-11' },
        React.createElement(Col, { testID: 'test-id-12', xs: 6 },
            React.createElement(View, { testID: 'test-id-1', style: Styles.forecastEventFieldWrapper },
                React.createElement(NumberInput, { testID: 'test-id-2', label: '\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430', value: props.inputForecastEventSum, hasError: !!props.inputValidationForecastEventSum, errorText: props.inputValidationForecastEventSum || '', onChange: (value) => { props.performForecastEventFormUpdateSum(value); } }))),
        isRepayment ?
            React.createElement(Col, { testID: 'test-id-f04fa9e0-00b7-4716-b39e-a1a15c75ff1b', xs: 6 }) :
            React.createElement(Col, { testID: 'test-id-6a723cdb-ea29-4ba5-a491-c536731f3b38', xs: 6 },
                React.createElement(Selector, { label: 'Валюта', value: props.inputForecastEventCurrency && props.inputForecastEventCurrency.value || 'RUB', onExecute: () => props.navigateToForecastCurrencySelection(), icon: IconType.MrmLink }))));
    const possibilityPopover = (React.createElement(View, { testID: 'test-id-74j12cfd-gh65-a905-4444-dc2123ft4fec' },
        React.createElement(Popover, { testID: 'test-id-141962be-2298-b155-5b7f-c45c92f93b12', target: PopoverTarget.getRef('editForecastEventPossibilitySelection'), opened: props.isVisibleForecastEventPossibilityPopover, onOutsideTap: props.performPopoverForecastEventFormPossibilitySelectionHide, type: PopoverType.NARROW, style: { height: 200 }, position: [PopoverPosition.BOTTOM] },
            React.createElement(SplitPanel, { testID: 'test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924', id: 'forecastEventEditPage' },
                React.createElement(ContentPanel, { testID: 'test-id-c2acf614-0097-d72f-73c3-9d6836a90252', style: { backgroundColor: '#fff' } },
                    React.createElement(Page, { testID: 'test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4', scrollEnabled: true, content: React.createElement(RadioGroup, { testID: 'test-id-43754701-34f0-b5ce-2185-71f2867a299f', value: String(props.inputForecastEventPossibility), onChange: (index, value) => {
                                const possibility = Number(value);
                                props.performForecastEventFormUpdatePossibility(possibility);
                            } },
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.1', label: '10%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.2', label: '20%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.3', label: '30%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.4', label: '40%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.5', label: '50%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.6', label: '60%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.7', label: '70%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.8', label: '80%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '0.9', label: '90%' }),
                            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', value: '1', label: '100%' })) })))),
        React.createElement(PopoverTarget, { testID: 'test-id-515ab097-750e-80bb-cf24-8619f9dc0b0e', refName: 'editForecastEventPossibilitySelection' })));
    return (React.createElement(View, { testID: 'test-id-1' },
        React.createElement(KeyboardAvoidingView, { behavior: 'position', contentContainerStyle: null, keyboardVerticalOffset: 50, style: null }, props.savingForecastEventInProgress ?
            React.createElement(View, { testID: 'test-id-2-wrapper', style: Styles.loaderWrapper },
                React.createElement(LoaderWithText, { testID: 'test-id-f8f9bc1f-b0b0-0d1f-4a6c-b65cdb714e7c', text: 'Создание прогнозного события' })) :
            React.createElement(Grid, { testID: 'test-id-2' },
                isFullRepayment ? rowForecastEventFullRepaymentNotice : null,
                React.createElement(Row, { testID: 'test-id-3' },
                    React.createElement(Col, { testID: 'test-id-4', xs: 0 },
                        React.createElement(View, { testID: 'test-id-5' },
                            React.createElement(Label, { testID: 'test-id-5', text: 'Клиент', header: '', block: true },
                                React.createElement(Text, { testID: 'test-id-5' }, props.currentCustomerManaged.name))))),
                React.createElement(Row, { testID: 'test-id-6' },
                    React.createElement(Col, { testID: 'test-id-7', xs: 6 }, typeEvent),
                    React.createElement(Col, { testID: 'test-id-7', xs: 6 }, isRepayment ? fullRepayment : null)),
                React.createElement(Row, { testID: 'test-id-8' },
                    React.createElement(Col, { testID: 'test-id-74j2331d-2vv4-a905-4444-dc2a3fet4fec', xs: 6 },
                        React.createElement(View, { testID: 'test-id-20', style: Styles.forecastEventFieldWrapper },
                            React.createElement(DateInput, { dateType: DateInputTypes.DAY_TIME_PICKER, format: 'dd.MM.yyyy', label: 'Дата события', locale: 'ru', onChange: props.performForecastEventFormUpdateDate, testID: 'test-id-1', value: props.inputForecastEventDate || new Date() }))),
                    React.createElement(Col, { testID: 'test-id-10', xs: 6 },
                        React.createElement(Selector, { label: 'Вероятность', value: props.inputForecastEventPossibility ? `${(Number(props.inputForecastEventPossibility) * 100).toFixed(0)}%` : 'Нет', onExecute: () => props.performPopoverForecastEventFormPossibilitySelectionShow(), icon: IconType.MrmArrowDown, popover: possibilityPopover }))),
                !props.inputForecastEventFullRepayment ? rowForecastSumAndCurrency : null,
                React.createElement(Row, { testID: 'test-id-19' },
                    React.createElement(Col, { testID: 'test-id-20', xs: 0 },
                        React.createElement(View, { testID: 'test-id-20', style: Styles.forecastEventFieldWrapper },
                            React.createElement(TextInput, { testID: 'test-id-21', value: props.inputForecastEventEmail, keyboardType: KeyboardType.Email, label: 'E-Mail \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439', placeholder: '\u0423\u043A\u0430\u0436\u0438\u0442\u0435 e-mail', hasError: !!props.inputValidationForecastEventEmail, errorText: props.inputValidationForecastEventEmail || '', onChange: (email) => props.performForecastEventFormUpdateEmail(email) })))),
                React.createElement(Row, { testID: 'test-id-22' },
                    React.createElement(Col, { testID: 'test-id-23', xs: 0 },
                        React.createElement(View, { testID: 'test-id-25', style: Styles.forecastEventFieldWrapper },
                            React.createElement(Textarea, { testID: 'test-id-26', value: props.inputForecastEventComment, label: '\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435', placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435', onChange: (comment) => props.performForecastEventFormUpdateComment(comment) }))))))));
};
const contentForecastEventForm = (props) => {
    const confirmDeletePopover = (React.createElement(View, { testID: `confirmDeletePopover` },
        React.createElement(Popover, { testID: 'test-id-1', target: PopoverTarget.getRef('confirmDeletePopoverRef'), opened: props.isVisibleForecastEventDeletePopover, onOutsideTap: props.performPopoverForecastEventDeleteHide, type: PopoverType.WIDE, style: { height: 160, width: 500 }, position: [PopoverPosition.TOP] },
            React.createElement(View, { testID: `refresh-bar-1-`, style: Styles.deletePopoverTextWrapper },
                React.createElement(Text, { testID: 'test-id-1', style: Styles.deletePopoverText }, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u043E\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435?")),
            React.createElement(View, { testID: `refresh-bar-4-`, style: Styles.deletePopoverItemWrapper },
                React.createElement(Button, { testID: 'qweqweqw', type: ButtonType.TEXT_RED, onExecute: props.performForecastEventDelete },
                    React.createElement(Text, { testID: `refresh-bar-5-` }, 'Да'))),
            React.createElement(View, { testID: `refresh-bar-4-`, style: Styles.deletePopoverItemWrapper },
                React.createElement(Button, { testID: 'qweqweqw', type: ButtonType.TEXT, onExecute: props.performPopoverForecastEventDeleteHide },
                    React.createElement(Text, { testID: `refresh-bar-5-` }, 'Нет'))))));
    const deleteButton = (React.createElement(View, { testID: `refresh-bar-1-`, style: Styles.deleteButton },
        React.createElement(View, { testID: `refresh-bar-4-`, style: Styles.deleteButtonWrapper },
            React.createElement(PopoverTarget, { testID: 'test-id-515ab097-750e-80bb-cf24-8619f9dc0b0e', refName: 'confirmDeletePopoverRef' }),
            React.createElement(Button, { testID: 'qweqweqw', type: ButtonType.TEXT_RED, onExecute: props.performPopoverForecastEventDeleteShow },
                React.createElement(Text, { testID: `refresh-bar-5-` }, 'Удалить событие')))));
    const errorView = (React.createElement(View, { style: Styles.createForecastEventErrorWrapper },
        React.createElement(View, { style: Styles.createForecastEventMessageBlock },
            React.createElement(Text, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f500e7940', style: Styles.createForecastEventMessageBlockHeader }, 'Ошибка'),
            React.createElement(Text, { testID: 'test-id-26eabd79-5001-60f7-c041-627f500e7040' }, props.savingForecastEventError && Utils.getForecastEventSaveErrorComment(props.savingForecastEventError))),
        React.createElement(View, { style: Styles.createForecastEventButtonWrapper },
            React.createElement(View, { style: Styles.createForecastEventButton },
                React.createElement(Button, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f500e7550', onExecute: props.performModalForecastEventSaveErrorHide, type: ButtonType.TEXT },
                    React.createElement(Text, { testID: 'test-id-26eabd79-0001-10f7-c141-627f501e7550' }, "OK"))),
            React.createElement(View, { style: [Styles.createForecastEventButton, Styles.createForecastEventButtonBorder] },
                React.createElement(Button, { testID: 'test-id-26eabd39-0001-6047-cf41-627f500e5940', onExecute: props.performForecastEventSaveRepeat, type: ButtonType.TEXT },
                    React.createElement(Text, { testID: 'test-id-26eabd79-0001-61f7-cf41-6271500a7550' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C"))))));
    return (React.createElement(View, { testID: 'test-id-1', style: Styles.forecastEventEditorFormWrapper },
        React.createElement(View, { testID: 'test-id-2', style: Styles.forecastEventEditorFormContainer }, forecastEventForm(props)),
        React.createElement(Modal, { animationType: 'slide', visible: props.isVisibleForecastEventModalSaveError, transparent: true, supportedOrientations: ['landscape'], onOrientationChange: () => { } },
            React.createElement(View, { style: Styles.createForecastEventPopoverWrapper }, errorView)),
        confirmDeletePopover,
        props.isEditableMode ? deleteButton : null));
};
// Страница: Создание прогнозного события
const PageForecastEventForm = (props) => {
    return (React.createElement(Page, { testID: 'test-id-0ec19627-1974-48ef-9f39-f865498a3d6c', scrollEnabled: true, content: contentForecastEventForm(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-9bcc8278-d093-4501-b2b5-7930bb352155' }, props.savingForecastEventInProgress ? React.createElement(View, null) :
            React.createElement(NavigationTextButton, { testID: 'test-id-8cfcc42a-bc51-4219-aaa3-3c1479d12b72', title: 'Отмена', onExecute: props.performForecastEventFormCancel })),
        React.createElement(CenterPageHeader, { testID: 'test-id-94cdc37f-9303-4b46-a831-f7adf7f6a03f' },
            React.createElement(H2, { testID: 'test-id-fea04b84-19fe-4f6f-8a76-3ad2eff41c96' }, props.isEditableMode ? 'Изменение прогнозного события' : 'Новое прогнозное событие')),
        React.createElement(RightPageHeader, { testID: 'test-id-a021f6d8-85b4-4667-809b-865c6f986a5d' }, props.savingForecastEventInProgress ? React.createElement(View, null) :
            React.createElement(NavigationTextButton, { testID: 'test-id-692f35ff-7762-4c15-8bfb-ee70081dbfb8', title: props.isEditableMode ? 'Сохранить' : 'Создать', onExecute: props.performForecastEventSave }))));
};
const contentForecastEventTypeSelection = (props) => {
    return (React.createElement(View, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', style: Styles.forecastEventEditorTypeSelectionWrapper },
        React.createElement(View, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea40300', style: Styles.forecastEventEditorTypeSelectionContainer },
            React.createElement(SelectClassifierCrm, { testID: 'test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8d', classifierList: props.isEditableMode ?
                    getEventTypeChoiceData(props, editableCreditTypes) :
                    getEventTypeChoiceData(props, creatableCreditTypes), performSelect: props.performForecastEventFormUpdateType, selectedCode: props.inputForecastEventType && props.inputForecastEventType.code }))));
};
// Страница: Выбор типа события
const PageForecastEventTypeSelection = (props) => {
    return (React.createElement(Page, { testID: 'test-id-9c5aaadb-4729-4182-6b5f-4c42777dbcec', scrollEnabled: false, content: contentForecastEventTypeSelection(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-672b006e-927d-da8c-167a-0ca21ea4b300' },
            React.createElement(NavigationBackButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: false, onClick: () => props.navigateBack() }),
            React.createElement(View, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', style: Styles.navigationBackButtonTextAdjustment },
                React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: props.isEditableMode ? 'Изменение события' : 'Создание события', onExecute: () => props.navigateBack() }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec' },
            React.createElement(H2, { testID: 'test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82' }, 'Выбор типа события'))));
};
const contentForecastEventCurrencySelection = (props) => {
    return (React.createElement(View, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', style: Styles.forecastEventEditorCurrencySelectionWrapper },
        React.createElement(View, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea40300', style: Styles.forecastEventEditorCurrencySelectionContainer },
            React.createElement(SelectClassifier, { testID: 'test-id-49bff0c1-fa34-2ea0-26c9-e3a48d2d5c45', classifierList: props.classifierDictionary.CURRENCY, performSelect: props.performForecastEventFormUpdateCurrency, selectedCode: props.inputForecastEventCurrency && props.inputForecastEventCurrency.code || props.currentDeal.currency.code }))));
};
// Страница: Редактирование прогнозного события
const PageCreditProductEditForecastEventCurrencySelection = (props) => {
    return (React.createElement(Page, { testID: 'test-id-9c5aaadb-4729-4182-6b5f-4c42777dbcec', scrollEnabled: true, content: contentForecastEventCurrencySelection(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-672b006e-927d-da8c-167a-0ca21ea4b300' },
            React.createElement(NavigationBackButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: false, onClick: () => props.navigateBack() }),
            React.createElement(View, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', style: Styles.navigationBackButtonTextAdjustment },
                React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: props.isEditableMode ? 'Изменение события' : 'Создание события', onExecute: () => props.navigateBack() }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec' },
            React.createElement(H2, { testID: 'test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82' }, 'Выбор валюты'))));
};
const SelectClassifier = ({ classifierList, selectedCode, testID, performSelect }) => (React.createElement(RadioGroup, { testID: 'test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979', value: selectedCode, onChange: (index, value) => performSelect(classifierList.data[index]) }, classifierList.data
    .map((classifierItem) => (React.createElement(RadioButton, { testID: `test-id-b915294d-16cc-bb9b-e848-89be70954ffe-${classifierItem.code}`, key: `radio-${classifierItem.code}`, value: classifierItem.code, label: `${classifierItem.value} (${classifierItem.code})` })))));
const ViewForecastEventEditor = (props) => {
    return (React.createElement(View, { testID: 'test-id-component-ForecastEventEditor', style: Styles.forecastEventEditorWrapper },
        React.createElement(SplitPanel, { testID: 'test-id-1', id: Utils.getNavigationAppCRMForecastEventEditor(Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm) },
            React.createElement(ContentPanel, { testID: 'test-id-2', style: ContentPanelBackgroundColorPureObject },
                PageForecastEventForm(props),
                PageForecastEventTypeSelection(props),
                PageCreditProductEditForecastEventCurrencySelection(props)))));
};
export default ViewForecastEventEditor;
//# sourceMappingURL=ViewForecastEventEditor.js.map