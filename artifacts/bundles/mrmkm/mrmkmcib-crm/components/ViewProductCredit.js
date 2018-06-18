'use strict';
/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles, { ContentPanelBackgroundColorPureObject, PaymentScheduleStyles, StylesUFSPir28, } from './styles/ViewProductCreditStyles';
import { Button, ButtonType, Center, CenterPageHeader, Checkbox, Col, ContentPanel, Grid, H2, HorizontalRule, Icon, IconType, KeyboardType, Label, LeftPageHeader, Loader, NavigationBackButton, NavigationFilterButton, NavigationIconButton, NavigationIconButtonType, NavigationTextButton, NumberInput, Page, Popover, PopoverPosition, PopoverType, RadioButton, RadioGroup, RightPageHeader, Row, SplitPanel, StyleSheet, SumText, Table, TableBody, TableCell, TableColumn, TableColumnAlignment, TableHead, TableRow, Text, Textarea, TextInput, View, } from 'ufs-mobile-platform';
import { DatePicker, TouchableOpacity, } from 'mrmkmcib-ui';
import { AlertView, DateRangePicker, ErrorModal, ExtendedTable, ExtendedTableCell, LoaderWithText, RefreshBar, } from 'mrmkmcib-app';
import { ContainerForecastEventEditor, SelectClassifier as SelectClassifierCrm, } from 'mrmkmcib-crm';
import { Enums } from '../Enums';
import * as Utils from '../common/Util';
import PopoverTarget from '../modules/PopoverTarget';
import PopoverSingle from '../modules/PopoverSingle';
import ContainerProductCovenantList from '../containers/ContainerProductCovenantList';
// Глобалки для указания поповеру target и position
let pTarget = 'createForecastEventPopover';
let pPosition = [PopoverPosition.BOTTOM];
const PLACEHOLDER = 'Нет данных';
const LOADING_TEXT = 'Загрузка...';
const ERROR_MESSAGE = 'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.';
const ERROR_MESSAGE_DEAL = 'Не удалось загрузить данные по прогнозным сделкам. Попробуйте снова или обратитесь в службу поддержки.';
const editableCreditTypes = ['ВЫДАЧА_K_Т', 'ГАШЕНИЕ_K_T', 'ГАШЕНИЕ_П_K_T'];
const generatedID = Utils.getRandomOperationUuid();
const getEventTypeChoiceData = (props) => {
    return {
        data: Utils.filterClassifierData(props.classifierDictionary.UFS_FC_EVENT_TYPE.data, [
            { code: 'ВЫДАЧА_K_Т' },
            { code: 'ГАШЕНИЕ_K_T' }
        ])
    };
};
const getForecastEventTypeChoice = (props) => {
    return (React.createElement(SelectClassifierCrm, { testID: 'test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8d', classifierList: getEventTypeChoiceData(props), performSelect: props.performInputForecastEventType, selectedCode: props.inputForecastEventType && props.inputForecastEventType.code }));
};
const LabeledText = ({ block = true, ellipsizeMode = 'tail', // По умолчанию длинный текст обрезается и добавляются ... в конец текста
label, numberOfLines = 1, // По умолчанию текст в одну строку
testID, text = PLACEHOLDER, }) => (React.createElement(Label, { testID: `${testID}_LTVPC_L`, header: '', text: label, block: block },
    React.createElement(Text, { testID: `${testID}_LTVPC_T`, ellipsizeMode: ellipsizeMode, numberOfLines: numberOfLines }, text || PLACEHOLDER // На случай, если придёт text = null
    )));
const GridCellContent = ({ children, testID }) => (React.createElement(View, { testID: `${testID}_GCC_V`, style: StylesUFSPir28.GridRowHideExtraMargins }, children));
const FieldTextWithPaddingsInGridCell = (fieldProps) => (React.createElement(GridCellContent, { testID: `${fieldProps.testID}_FTWPIGC_GCC` },
    React.createElement(View, { testID: `${fieldProps.testID}__FTWPIGC_V`, style: Styles.baseTextInTableCellAdjustments },
        React.createElement(LabeledText, { label: fieldProps.label, testID: `${fieldProps.testID}_FTWPIGC_LT`, text: fieldProps.text }))));
const FieldTextInGridCell = (fieldProps) => (React.createElement(GridCellContent, { testID: `${fieldProps.testID}_FTIGC` },
    React.createElement(LabeledText, { label: fieldProps.label, testID: `${fieldProps.testID}_FTIGC_LT`, text: fieldProps.text })));
const FieldSumTextInGridCell = (fieldProps) => (React.createElement(GridCellContent, { testID: `${fieldProps.testID}_FTIGC` },
    React.createElement(SumText, { label: fieldProps.label, testID: `${fieldProps.testID}_ST`, value: Number(fieldProps.text), small: false, currency: fieldProps.currency
            ? fieldProps.currency
            : '' })));
export const GridRowHorizontalRule = () => (React.createElement(Row, { testID: 'test-id-5509ff44-5b5f-0f14-3289-a44978ddf3e4' },
    React.createElement(Col, { xs: 12, testID: 'test-id-6609ff44-5b5f-0f14-3289-a44978ddf3e4' },
        React.createElement(View, { style: [
                StylesUFSPir28.GridRowHideExtraMargins,
                { marginTop: -15 }
            ] },
            React.createElement(HorizontalRule, { testID: 'test-id-7709ff44-5b5f-0f14-3289-a44978ddf3e4' })))));
const SelectClassifier = ({ classifierList, selectedCode, testID, performSelect }) => (React.createElement(RadioGroup, { testID: 'test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979', value: selectedCode, onChange: (index, value) => performSelect(classifierList.data[index]) }, classifierList.data
    .map((classifierItem) => (React.createElement(RadioButton, { testID: `test-id-b915294d-16cc-bb9b-e848-89be70954ffe-${classifierItem.code}`, key: `radio-${classifierItem.code}`, value: classifierItem.code, label: `${classifierItem.value} (${classifierItem.code})` })))));
const getForecastEventCurrencyChoice = (props) => {
    return (React.createElement(SelectClassifier, { testID: 'test-id-49bff0c1-fa34-2ea0-26c9-e3a48d2d5c45', classifierList: props.classifierDictionary.CURRENCY, performSelect: props.performInputForecastEventCurrency, selectedCode: props.inputForecastEventCurrency && props.inputForecastEventCurrency.code }));
};
const getForecastEventPossibility = (props) => {
    return (React.createElement(RadioGroup, { testID: 'test-id-43754701-34f0-b5ce-2185-71f2867a299f', onChange: (index, value) => {
            const possibility = Number(value);
            props.performInputForecastEventPossibility(possibility);
        }, value: String(props.inputForecastEventPossibility) },
        React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-possibility-25', value: '0.25', label: '25%' }),
        React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-possibility-50', value: '0.5', label: '50%' }),
        React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-possibility-75', value: '0.75', label: '75%' }),
        React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-possibility-100', value: '1', label: '100%' })));
};
const getForecastEventCreatePage = (props) => {
    let eventSum = '';
    if (props.inputForecastEventSum != null) {
        eventSum = props.inputForecastEventSum;
    }
    // Вывод ошибок под кастомными non-UFS полями
    const showError = (errorText) => (React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: [Styles.fieldErrorView, { flex: 1, flexDirection: 'row' }] },
        React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.fieldErrorText }, errorText)));
    // Поле 'Тип события'
    const rowForecastEventType = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: innerProps.navigateToForecastEventTypPickerScreen },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { style: Styles.tableCellInnerRowView },
                React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: [StylesUFSPir28.removeTableCellMargins, Styles.pseudoInputFieldView] },
                    React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.pseudoInputWithChevron },
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-5555-dc2a3ea63fec', style: [Styles.ChevronBottomVerticalAlign, Styles.CommonChevronWidth] },
                            React.createElement(Button, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: innerProps.navigateToForecastEventTypPickerScreen },
                                React.createElement(Icon, { testID: 'test-id-62430323-f434-184b-3541-ebec8a7d717d', disabled: true, type: IconType.MrmLink }))),
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputDataWrapper },
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputLabel },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: !!props.inputValidationForecastEventType ? Styles.fieldErrorLabel : Styles.captionText }, 'Тип события')),
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputValue },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.baseText }, innerProps.inputForecastEventType && innerProps.inputForecastEventType.value)))),
                    props.inputValidationForecastEventType && showError(props.inputValidationForecastEventType))))));
    // Поле 'Дата события'
    const rowForecastEventDate = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec' },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: [Styles.main, StylesUFSPir28.removeTableCellMargins] },
                React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: [Styles.main, Styles.pseudoInputDataWrapper] },
                    React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputLabel },
                        React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.captionText }, 'Дата события')),
                    React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.nonViewComponentsAdjustments },
                        React.createElement(DatePicker, { testID: 'test-id-4386ea03-6271-1700-d5ec-f93073722e18', date: innerProps.inputForecastEventDate && new Date(innerProps.inputForecastEventDate) || new Date(), mode: 'date', onDateChange: (date) => innerProps.performInputForecastEventDate(date), label: ' ', icon: IconType.MrmCalendar, drawDateInsteadOfLabel: true })))))));
    // Поле 'Вероятность'
    const rowForecastEventPossibility = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: innerProps.navigateToForecastEventPossibilityPickerScreen },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { style: Styles.tableCellInnerRowView },
                React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: [StylesUFSPir28.removeTableCellMargins, Styles.pseudoInputFieldView] },
                    React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.pseudoInputWithChevron },
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-5555-dc2a3ea63fec', style: [Styles.ChevronBottomVerticalAlign, Styles.CommonChevronWidth] },
                            React.createElement(Button, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: innerProps.navigateToForecastEventPossibilityPickerScreen },
                                React.createElement(Icon, { testID: 'test-id-62430323-f434-184b-3541-ebec8a7d717d', disabled: true, type: IconType.MrmLink }))),
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputDataWrapper },
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputLabel },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.captionText }, 'Вероятность')),
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputValue },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.baseText }, Utils.eventPossibilityStringValue(innerProps.inputForecastEventPossibility))))))))));
    // Поле 'Валюта'
    const rowForecastEventCurrency = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: innerProps.navigateToForecastEventCurrencyPickerScreen },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { style: Styles.tableCellInnerRowView },
                React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: [StylesUFSPir28.removeTableCellMargins, Styles.pseudoInputFieldView] },
                    React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.pseudoInputWithChevron },
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-5555-dc2a3ea63fec', style: [Styles.ChevronBottomVerticalAlign, Styles.CommonChevronWidth] },
                            React.createElement(Button, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: innerProps.navigateToForecastEventCurrencyPickerScreen },
                                React.createElement(Icon, { testID: 'test-id-62430323-f434-184b-3541-ebec8a7d717d', disabled: true, type: IconType.MrmLink }))),
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputDataWrapper },
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputLabel },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.captionText }, 'Валюта')),
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputValue },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.baseText }, innerProps.inputForecastEventCurrency && innerProps.inputForecastEventCurrency.code || '')))))))));
    // Поле 'Прогнозная сумма'
    const rowForecastEventSum = (innerProps) => {
        const validationErrorSummText = typeof props.inputValidationForecastEventSumm === 'string' ? props.inputValidationForecastEventSumm : undefined;
        return (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec' },
            React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                React.createElement(View, { style: Styles.tableCellInnerRowView },
                    React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: StylesUFSPir28.removeTableCellMargins },
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: Styles.pseudoInputDataWrapper },
                            React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63gec', style: Styles.leftMarginForTextInput },
                                React.createElement(NumberInput, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', fractionalDigitsCount: 0, value: eventSum, label: 'Прогнозная сумма', maxLength: 24, hasError: !!validationErrorSummText, errorText: validationErrorSummText, onChange: (value) => {
                                        innerProps.performInputForecastEventSum(value);
                                    } }))))))));
    };
    // Поле 'E-mail для отправки уведомлений'
    const rowForecastEventEmail = (innerProps) => {
        const validationEmailErrorText = typeof props.inputValidationForecastEventEmail === 'string' ? props.inputValidationForecastEventEmail : undefined;
        return (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec' },
            React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                React.createElement(View, { style: Styles.tableCellInnerRowView },
                    React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: StylesUFSPir28.removeTableCellMargins },
                        React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: [Styles.pseudoInputDataWrapper, Styles.leftMarginForEmail] },
                            React.createElement(TextInput, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', value: innerProps.inputForecastEventEmail, keyboardType: KeyboardType.Email, label: 'E-Mail \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439', placeholder: '', hasError: !!validationEmailErrorText, errorText: validationEmailErrorText, onChange: innerProps.performInputForecastEventEmail })))))));
    };
    // Поле 'Полное погашение'
    const rowForecastEventFullRepayment = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec' },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: StylesUFSPir28.removeTableCellMargins },
                React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea63fec', style: StylesUFSPir28.nonViewComponentsAdjustmentsForCheckBox },
                    React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: innerProps.inputFullRepayment, label: 'Полное погашение', onChange: innerProps.performInputFullRepayment }))))));
    // Поле 'Инфо' для случая полного погашения кредита
    const rowForecastEventFullRepaymentNotice = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', style: [Styles.rowForecastEventFullRepaymentNoticeTableRow] },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: StylesUFSPir28.removeTableCellMargins },
                React.createElement(View, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e' },
                    React.createElement(View, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', style: Styles.FullRepaymentEditContainer },
                        React.createElement(Text, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', style: Styles.FullRepaymentText }, 'При полном досрочном погашении сумма рассчитывается автоматически.'),
                        React.createElement(Text, { style: Styles.FullRepaymentTextPaddingTop, testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e' }, 'Прогнозные события по договору будут пересчитаны.')))))));
    // Поле 'Примечания'
    const rowForecastEventComments = (innerProps) => (React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec' },
        React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
            React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: [StylesUFSPir28.removeTableCellMargins] },
                React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-7777-dc2a3ea65fec', style: Styles.nonViewComponentsAdjustments },
                    React.createElement(Textarea, { testID: 'test-id-70860aad-29f4-a905-7777-dc2a3ea64fec', value: innerProps.inputForecastEventComment, label: 'Примечания', placeholder: '', onChange: innerProps.performInputForecastEventComment }))))));
    /* Логика показа или скрытия полей формы создания прогнозного события

    | Тип: Выдача | Тип: Погашение | Полное погашение | Поле                            |
    | ✅          | ✅            | ✅               | Тип события                     |
    | ✅          | ✅            | ✅               | Дата события                    |
    | ✅          | ✅            | ✅               | Вероятность события             |
    | ❌          | ✅            | ✅               | Полное погашение                |
    | ❌          | ❌            | ✅               | Примечание при полном погашении |
    | ✅          | ❌            | ❌               | Валюта                          |
    | ✅          | ✅            | ❌               | Сумма                           |
    | ✅          | ✅            | ✅               | E-Mail                          |
    | ✅          | ❌            | ❌               | Примечания                      |
    */
    const isRepayment = !!(props.inputForecastEventType && props.inputForecastEventType.code === 'ГАШЕНИЕ_K_T');
    const isFullRepayment = (isRepayment && props.inputFullRepayment);
    const isNotFullRepayment = (isRepayment && !props.inputFullRepayment);
    const isTypeUndefined = !props.inputForecastEventType;
    const isGrantingOrUndefined = (props.inputForecastEventType &&
        props.inputForecastEventType.code === 'ВЫДАЧА_K_Т') || isTypeUndefined;
    return (React.createElement(View, { style: StylesUFSPir28.removeTableRightMargin },
        React.createElement(Table, { testID: 'test-id-7086098d-29f4-a905-1111-dc2a3ea63fec' },
            React.createElement(TableBody, { testID: 'test-id-7086098d-29f4-2222-078e-dc2a3ea63fec' },
                rowForecastEventType(props),
                rowForecastEventDate(props),
                rowForecastEventPossibility(props),
                isRepayment && rowForecastEventFullRepayment(props),
                isFullRepayment && rowForecastEventFullRepaymentNotice(props),
                (isGrantingOrUndefined) && rowForecastEventCurrency(props),
                (isGrantingOrUndefined || isNotFullRepayment) && rowForecastEventSum(props),
                rowForecastEventEmail(props),
                isGrantingOrUndefined && rowForecastEventComments(props)))));
};
const getForecastEventDisplayPage = (props) => {
    const placeholder = 'Нет данных';
    return (React.createElement(View, { testID: 'test-id-aaaabbbb-c102-e8dc-78f9-9a5fedc174b9', style: Styles.main },
        React.createElement(Table, { testID: 'test-id-7086098d-29f4-a905-1111-dc2a3ea63fec' },
            React.createElement(TableBody, { testID: 'test-id-7086098d-29f4-2222-078e-dc2a3ea63fec' },
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Дата события', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.plannedEventDate != null ? Utils.format.date(props.currentForecastEvent.plannedEventDate) : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Вероятность', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.possibility != null ?
                                    Utils.eventPossibilityStringValue(props.currentForecastEvent.possibility) : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Валюта', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.currency != null ? props.currentForecastEvent.currency.code : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Прогнозная сумма', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.forecastSum != null ? parseFloat('' + props.currentForecastEvent.forecastSum) : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Исполненная сумма', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, '0' /*FIXME убрать хардкод, пока не знаю, где брать значение*/))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Дата создания события', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.eventCreationDate != null ? Utils.format.date(props.currentForecastEvent.eventCreationDate) : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Номер кредитного договора', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent && props.currentForecastEvent.productNum ? props.currentForecastEvent.productNum : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'E-mail для отправки уведомлений', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.email != null ? props.currentForecastEvent.email : placeholder))))),
                React.createElement(TableRow, { testID: 'test-id-7086098d-29f4-a905-3333-dc2a3ea63fec', onClick: () => { } },
                    React.createElement(TableCell, { testID: 'test-id-7086098d-29f4-a905-4444-dc2a3ea63fec' },
                        React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.editPopoverTypeRow },
                            React.createElement(Label, { testID: 'test-id-c2f20078-ae8b-4392-8376-8757d27ea140', text: 'Примечания', block: false, header: 'q' },
                                React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' }, props.currentForecastEvent.comment != null ? props.currentForecastEvent.comment : '')))))))));
};
const getForecastFilterEventDateType = (props) => {
    return (React.createElement(View, { testID: 'test-id-43754701-34f0-b5ce-2185-71f2867a290f', style: Styles.forecastFilterContentWrapper },
        React.createElement(RadioGroup, { testID: 'test-id-43754701-34f0-b5ce-2185-71f2867a299f', value: props.inputFilterPeriodType.toString(), onChange: (index) => {
                switch (index) {
                    case 0: {
                        props.performInputFilterPeriodType(Enums.ForecastPeriodType.CreditFinish);
                        break;
                    }
                    case 1: {
                        props.performInputFilterPeriodType(Enums.ForecastPeriodType.Next30Days);
                        break;
                    }
                    case 2: {
                        props.performInputFilterPeriodType(Enums.ForecastPeriodType.Next60Days);
                        break;
                    }
                    case 3: {
                        props.performInputFilterPeriodType(Enums.ForecastPeriodType.Next90Days);
                        break;
                    }
                    case 4: {
                        props.performInputFilterPeriodType(Enums.ForecastPeriodType.Next180Days);
                        break;
                    }
                    case 5: {
                        props.performInputFilterPeriodType(Enums.ForecastPeriodType.Custom);
                        break;
                    }
                }
            } },
            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-period-credit-finish', value: Enums.ForecastPeriodType.CreditFinish.toString(), label: Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.CreditFinish) }),
            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-period-next-30', value: Enums.ForecastPeriodType.Next30Days.toString(), label: Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next30Days) }),
            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-period-next-60', value: Enums.ForecastPeriodType.Next60Days.toString(), label: Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next60Days) }),
            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-period-next-90', value: Enums.ForecastPeriodType.Next90Days.toString(), label: Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next90Days) }),
            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-period-next-180', value: Enums.ForecastPeriodType.Next180Days.toString(), label: Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next180Days) }),
            React.createElement(RadioButton, { testID: 'test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358', key: 'key-period-custom-period', value: Enums.ForecastPeriodType.Custom.toString(), label: props.inputFilterPeriodType === Enums.ForecastPeriodType.Custom && props.inputFilterPeriodStart && props.inputFilterPeriodEnd && `${Utils.format.date(props.inputFilterPeriodStart)} - ${Utils.format.date(props.inputFilterPeriodEnd)}`
                    || Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Custom) }))));
};
const getForecastFilterEventType = (props) => {
    return (React.createElement(View, { testID: 'test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8a', style: Styles.forecastFilterContentWrapper },
        React.createElement(SelectClassifierCrm, { testID: 'test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8d', classifierList: getEventTypeChoiceData(props), performSelect: props.performInputFilterForecastEventType, selectedCode: props.inputFilterForecastEventType && props.inputFilterForecastEventType.code })));
};
const getForecastFilterEventCustomDate = (props) => (React.createElement(DateRangePicker, { testID: 'test-id-4386ea03-6271-1700-d5ec-f93073722e18', mode: 'date', valueStart: props.inputFilterPeriodStart || new Date(), onChangeStart: props.performInputFilterPeriodStart, labelStart: 'Начало', valueEnd: props.inputFilterPeriodEnd || new Date(), onChangeEnd: props.performInputFilterPeriodEnd, labelEnd: 'Конец' }));
const getForecastFilterDisplayPage = (props) => {
    return (React.createElement(View, { testID: 'test-id-aaaabbbb-c102-e8dc-78f9-9a5fedc174b9', style: Styles.forecastFilterContentWrapper },
        React.createElement(View, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e' },
            React.createElement(View, { testID: 'test-id-0a8edb0d-233c-7bb1-c932-50e9134cfdae', style: Styles.forecastFilterDisplayPageRowWrapper },
                React.createElement(View, { testID: 'test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5', style: Styles.forecastFilterDisplayPagePeriodHeaderWrapper },
                    React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec', style: Styles.forecastFilterDisplayPageRowHeaderText }, 'Период')),
                React.createElement(View, { testID: 'test-id-7cceadc9d-95c9-400f-a9aa-117a0c6282d3', style: Styles.forecastFilterDisplayPageRowValueWrapper },
                    React.createElement(View, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec', style: Styles.forecastFilterDisplayPageRowValue },
                        React.createElement(Text, { testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec', style: Styles.forecastFilterDisplayPageRowValueText }, props.inputFilterPeriodType === Enums.ForecastPeriodType.Custom && props.inputFilterPeriodStart && props.inputFilterPeriodEnd
                            && `${Utils.format.date(props.inputFilterPeriodStart)} - ${Utils.format.date(props.inputFilterPeriodEnd)}`
                            || Utils.eventFilterPeriodStringValue(props.inputFilterPeriodType))),
                    React.createElement(View, { style: Styles.forecastFilterDisplayPageButton, testID: 'test-id-7086098d-29f4-a905-078e-dc2a3ea63fec' },
                        React.createElement(Button, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: () => { props.navigateToForecastEventFilterPeriodScreen(); } },
                            React.createElement(Icon, { testID: 'test-id-62430323-f434-184b-3541-ebec8a7d717d', disabled: true, type: IconType.MrmLink })))))),
        React.createElement(View, { testID: 'test-id-b3636761-02e0-4c22-b2a5-194ea477b5f7' },
            React.createElement(View, { testID: 'test-id-e9773b0b-9b55-475c-8072-fcbbbb17de70', style: Styles.forecastFilterDisplayPageRowWrapper },
                React.createElement(View, { testID: 'test-id-deb83b16-3e42-4e4a-867e-96d9f4adc93a', style: Styles.forecastFilterDisplayPageTypeHeaderWrapper },
                    React.createElement(Text, { testID: 'test-id106af9bc-9711-424e-9f2e-1d452a811f9d', style: Styles.forecastFilterDisplayPageRowHeaderText }, 'Тип события')),
                React.createElement(View, { testID: 'test-id-9ec196e8-e62e-41b8-8d94-030f713fb720', style: Styles.forecastFilterDisplayPageRowValueWrapper },
                    React.createElement(View, { testID: 'test-id-a0a83aaf-23cb-4571-9313-33ea729db871', style: Styles.forecastFilterDisplayPageRowValue },
                        React.createElement(Text, { testID: 'test-id809dcea5-ac95-42f5-b6a1-3a28ae56edcc', style: Styles.forecastFilterDisplayPageRowValueText }, props.inputFilterForecastEventType && props.inputFilterForecastEventType.value)),
                    React.createElement(View, { style: Styles.forecastFilterDisplayPageButton, testID: 'test-id-4c13aaf0-4145-4e74-8304-ab744c716160' },
                        React.createElement(Button, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: () => { props.navigateToForecastEventFilterTypePickerScreen(); } },
                            React.createElement(Icon, { testID: 'test-id-62430323-f434-184b-3541-ebec8a7d717d', disabled: true, type: IconType.MrmLink }))))))));
};
const getForecastEventActiveFilters = (props) => {
    const countActiveFilters = [];
    if (props.inputActiveFilterPeriodType !== Enums.ForecastPeriodType.CreditFinish) {
        countActiveFilters.push({
            key: 'key-filter-tag-period',
            label: props.inputActiveFilterPeriodType === Enums.ForecastPeriodType.Custom && props.inputActiveFilterPeriodStart && props.inputActiveFilterPeriodEnd ? `${Utils.format.date(props.inputActiveFilterPeriodStart)} - ${Utils.format.date(props.inputActiveFilterPeriodEnd)}` : Utils.eventFilterPeriodStringValue(props.inputActiveFilterPeriodType),
            onClick: () => props.performFilterPeriodReset()
        });
    }
    if (props.inputActiveFilterForecastEventType) {
        countActiveFilters.push({
            key: 'key-filter-tag-type',
            label: props.inputActiveFilterForecastEventType.value,
            onClick: () => props.performFilterEventTypeReset()
        });
    }
    return countActiveFilters;
};
const getForecastEventFilter = (props) => {
    return (React.createElement(View, { testID: 'test-id-aaaabbbb-c102-e8dc-78f9-9a5fcde174b9', style: Styles.main },
        React.createElement(SplitPanel, { testID: 'test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9', id: Utils.getNavigationContentCreditForecastEventFilterPopup(Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter) },
            React.createElement(ContentPanel, { testID: 'test-id-03049819-1a36-ae91-a7d5-7de341988c2d', style: Styles.forecastEventFilter },
                React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getForecastFilterDisplayPage(props) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-38bb8a3f-da31-af7f-2057-f50a28736747' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6', title: 'Сбросить', onExecute: props.performFilterReset })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                        React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af' }, 'Фильтры событий')),
                    React.createElement(RightPageHeader, { testID: 'test-id-38bb8a3f-da31-af7f-2057-f50a28736747' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6', title: 'Применить', onExecute: props.performFilterApply }))),
                React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getForecastFilterEventDateType(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                        React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af' }, 'Период'))),
                React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getForecastFilterEventCustomDate(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                        React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af' }, 'Выбор периода')),
                    React.createElement(RightPageHeader, { testID: 'test-id-38bb8a3f-da31-af7f-2057-f50a28736747' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6', title: 'Готово', onExecute: props.performFilterCustomDateApply }))),
                React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getForecastFilterEventType(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                        React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af' }, 'Тип события')))))));
};
const getForecastEventPopupData = (props) => {
    const popoverKey = Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent;
    const displayForecastEventContent = (React.createElement(View, { testID: 'test-id-aaaabbbb-c102-e8dc-78f9-9a5fcde174b9', style: Styles.main },
        React.createElement(SplitPanel, { testID: 'test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9', id: Utils.getNavigationContentCreditProductCreatePopup(popoverKey) /*FIXME: non-unique id*/ },
            React.createElement(ContentPanel, { testID: 'test-id-03049819-1a36-ae91-a7d5-7de341988c2d', style: ContentPanelBackgroundColorPureObject },
                React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getForecastEventDisplayPage(props) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-38bb8a3f-da31-af7f-2057-f50a28736747' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6', title: 'Отмена', onExecute: props.performPopoverForecastEventHide })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                        React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af', numberOfLines: 1 }, props.currentForecastEvent.eventType && props.currentForecastEvent.eventType.value.ellipsis(30))))))));
    const newForecastEventForm = (React.createElement(View, { style: Styles.main },
        React.createElement(SplitPanel, { testID: 'test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9', id: Utils.getNavigationContentCreditProductCreatePopup(popoverKey) /*FIXME: non-unique id*/ },
            React.createElement(ContentPanel, { testID: 'test-id-03049819-1a36-ae91-a7d5-7de341988c2d', style: ContentPanelBackgroundColorPureObject },
                React.createElement(Page, { testID: 'test-id-9e1a8410-1b14-b74c-726a-78e11934d75d', scrollEnabled: true, content: getForecastEventCreatePage(props) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-38bb8a3f-da31-af7f-2057-f50a28736747' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6', title: 'Отмена', onExecute: props.performFilterCreateEventPopupReset })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec' },
                        React.createElement(H2, { testID: 'test-id-02250251-9402-e2e8-7319-2c18681420af' }, 'Новое событие')),
                    React.createElement(RightPageHeader, { testID: 'test-id-38bb8a3f-da31-af7f-2057-f50a28736747' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6', title: 'Готово', onExecute: props.performForecastEventSave }))),
                React.createElement(Page, { testID: 'test-id-977caa31-b65f-8c12-6bf3-52e43010821c', scrollEnabled: true, content: getForecastEventTypeChoice(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7' },
                        React.createElement(H2, { testID: 'test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7' }, 'Тип события'))),
                React.createElement(Page, { testID: 'test-id-977caa31-b65f-8c12-6bf3-52e43010821c', scrollEnabled: true, content: getForecastEventPossibility(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7' },
                        React.createElement(H2, { testID: 'test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7' }, 'Вероятность'))),
                React.createElement(Page, { testID: 'test-id-977caa31-bccc-8c12-6bf3-52e43010821c', scrollEnabled: true, content: getForecastEventCurrencyChoice(props) },
                    React.createElement(CenterPageHeader, { testID: 'test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7' },
                        React.createElement(H2, { testID: 'test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7' }, 'Валюта')))))));
    // FIXME временное решение для демо, надо по-другому определять наличие текущего форекаста
    if (props.currentForecastEvent.plannedEventDate != null) {
        return displayForecastEventContent;
    }
    else {
        return newForecastEventForm;
    }
};
/**
 * Страница продукта "Кредит"
 *
 * @param props Все свойства типа IProps (ниже), который приходят во ViewProductCredit
 *
 */
const getPageCreditProductContent = (props) => {
    const placeholder = 'Нет данных';
    const { creditProduct } = props.currentCreditProduct;
    const NO_DATA_LABEL = (title) => (React.createElement(Label, { testID: `${title}-test-id-09189384-0843-2a58-4e48-5be2f0e50f30`, header: '', block: true, text: title },
        React.createElement(Text, { testID: `${title}-'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328` }, placeholder)));
    // Поля 'Клиент' и 'Название продукта'
    // INFO: между ними отступ 20px
    const fieldClientNameAndProductName = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(View, { style: Styles.fieldClientNameAndProductNameBottomAndTopMargins },
            React.createElement(Label, { testID: 'test-id-df2f6035-1a20-73dd-d6b0-811eae86909d', header: '', text: 'Клиент', block: true },
                React.createElement(Text, { testID: 'test-id-d1289c55-94a9-0a36-9292-e1e03d85f6cd' }, Utils.displayCustomerWithLegalForm(innerProps.currentCustomerManaged)))),
        React.createElement(View, null,
            React.createElement(Label, { testID: 'test-id-df2f6035-1a20-73dd-d6b0-811eae86909d', header: '', text: 'Название продукта', block: true },
                React.createElement(Text, { testID: 'test-id-d1289c55-94a9-0a36-9292-e1e03d85f6cd' }, creditProduct && creditProduct.nameClassifier && creditProduct.nameClassifier.value ? creditProduct.nameClassifier.value : placeholder)))));
    // Поле 'Ставка'
    const fieldProductRate = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(Label, { testID: 'test-id-5935f79f-bee6-da0a-c888-a86c3533987e', header: '', text: 'Ставка', block: true },
            React.createElement(Text, { testID: 'test-id-c7e7dbad-39ec-78e2-8edf-70098257402c' }, creditProduct && creditProduct.rate ? `${creditProduct.rate} %` : placeholder))));
    // Поле 'Срок'
    const fieldProductTerm = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(Label, { testID: 'test-id-09189384-0843-2a58-4e48-5be2f0e50f30', header: '', text: 'Срок (дней)', block: true },
            React.createElement(Text, { testID: 'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328' }, creditProduct && creditProduct.term ? (`${creditProduct.term} `) : (`${placeholder}`)))));
    // Поле 'Сумма кредита'
    const fieldProductSum = (innerProps) => (creditProduct && creditProduct.sum != null ?
        React.createElement(SumText, { label: '\u0421\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430', testID: 'test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca', value: Number(creditProduct.sum), small: false, currency: creditProduct && creditProduct.currencyClassifier ? creditProduct.currencyClassifier.code : placeholder })
        : NO_DATA_LABEL('Сумма кредита'));
    // Поле 'Осталось погасить (основной долг и просрочка)'
    const fieldProductDebtSum = (innerProps) => (creditProduct && creditProduct.debtSum != null ?
        React.createElement(SumText, { label: "\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438", testID: 'test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca', value: Number(creditProduct.debtSum), small: false, currency: creditProduct && creditProduct.currencyClassifier ? creditProduct.currencyClassifier.code : placeholder })
        : NO_DATA_LABEL('Осталось погасить(основной долг и просрочка)'));
    // Поле 'Дата договора'
    const fieldProductContractOpenDate = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(Label, { testID: 'test-id-75ef73bc-2ba1-35ca-5300-e3821040994c', header: '', text: 'Дата договора', block: true },
            React.createElement(Text, { testID: 'test-id-66ae4589-faa2-36ec-a507-13b140c466c9' }, creditProduct && creditProduct.openDate && Utils.format.date(creditProduct.openDate) || placeholder))));
    // Поле 'Дата окончания'
    const fieldProductContractCloseDate = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(Label, { testID: 'test-id-dcb82a30-2e0a-0747-ec9e-e301ed2ebc10', header: '', text: 'Дата окончания', block: true },
            React.createElement(Text, { testID: 'test-id-487a4e29-3c3e-0b4e-d07c-3c8c40366e6d' }, creditProduct && creditProduct.closeDate && Utils.format.date(creditProduct.closeDate) || placeholder))));
    // Поле 'Номер договора'
    const fieldProductContractNumber = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(Label, { testID: 'test-id-b5f6c4b2-c63e-eec6-c240-906d3548e1a2', header: '', text: 'Номер договора', block: true },
            React.createElement(Text, { testID: 'test-id-5db4903a-5e75-d0a3-f539-78a2c8e1659c' }, creditProduct && creditProduct.contractNumber || placeholder))));
    // Поле 'Статус договора'
    const fieldProductContractStatus = (innerProps) => (React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
        React.createElement(Label, { testID: 'test-id-b5f6c4b2-c63e-eec6-c240-906d3548e1a2', header: '', text: 'Статус договора', block: true },
            React.createElement(Text, { testID: 'test-id-5db4903a-5e75-d0a3-f539-78a2c8e1659c' }, creditProduct && creditProduct.status ? Utils.productCreditStatus(creditProduct.status) : placeholder))));
    // Поле 'Прогнозирование событий по кредиту' в статусе 'Загрузка'
    const renderBottomLoader = (innerProps) => (React.createElement(View, { testID: 'test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b', style: [
            Styles.fieldBottomInfoRowView,
            StylesUFSPir28.fieldBottomInfoRowView,
            Styles.fetchForecatEventsBackgroundColor,
            Styles.renderBottomLoader,
        ] },
        React.createElement(View, { style: Styles.renderBottomLoaderTextWrapper },
            React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: Styles.fetchForecatEventsLoadingText }, 'Загрузка...')),
        React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: Styles.main },
            React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: [Styles.baseText, Styles.baseTextInTableCellAdjustments] }, 'Прогнозирование событий по кредиту'))));
    // Поле 'Прогнозирование событий по кредиту' в случае ошибки загрузки прогнозных событий.
    // INFO: Свёрстано таблицей для кликабельности всей строки
    const renderBottomError = (innerProps) => (React.createElement(View, { testID: 'test-id-20fa97dc-44d8-0e19-cccc-0751cf903e0b', style: [Styles.fieldBottomInfoRowView, StylesUFSPir28.fieldBottomInfoRowView] },
        React.createElement(Table, { testID: 'test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b' },
            React.createElement(TableBody, { testID: 'test-id-20fa97ab-44d8-0e19-ce7b-0751cf903e0b' },
                React.createElement(TableRow, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b', onClick: props.performRefreshForecast },
                    React.createElement(TableCell, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b' },
                        React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: [Styles.CreditLinkRow, Styles.productCovenantTableCellView] },
                            React.createElement(View, { style: Styles.bottomError },
                                React.createElement(NavigationIconButton, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599', type: NavigationIconButtonType.REFRESH, onExecute: props.performRefreshForecast })),
                            React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: Styles.main },
                                React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: [Styles.baseText, { marginBottom: 4, marginTop: 10 }] }, 'Прогнозирование событий по кредиту'),
                                React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: [Styles.fetchForecatEventsErrorText, { marginBottom: 14 }] }, 'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.')))))))));
    // Поле 'Прогнозирование событий по кредиту' в случае успешной загрузки прогнозных событий.
    // INFO: Свёрстано таблицей для кликабельности всей строки
    const renderBottomInfoRow = (innerProps) => (React.createElement(View, { testID: 'test-id-20fa97dc-44d8-0e19-cccc-0751cf903e0b', style: [Styles.fieldBottomInfoRowView, StylesUFSPir28.fieldBottomInfoRowView] },
        React.createElement(Table, { testID: 'test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b' },
            React.createElement(TableBody, { testID: 'test-id-20fa97ab-44d8-0e19-ce7b-0751cf903e0b' },
                React.createElement(TableRow, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b', onClick: () => innerProps.navigateToForecastScreen() },
                    React.createElement(TableCell, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b' },
                        React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: Styles.CreditLinkRow },
                            React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: [Styles.renderBottomInfoRowMainTextViewWidth, Styles.baseTextInTableCellAdjustments] },
                                React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: Styles.baseText }, 'Прогнозирование событий по кредиту')),
                            React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: Styles.CreditLinkRowDelimiter }),
                            React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: Styles.CreditLinkRowInfo },
                                React.createElement(Text, { testID: 'test-id-20fa97bb-aad8-0bb9-ce7b-0751cf903e0b', ellipsizeMode: 'tail', style: Styles.CreditLinkRowInfoText }, Utils.getEarlyForecastEventInfo(props.forecastEventList))),
                            React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b', style: Styles.CommonChevronWidth },
                                React.createElement(Button, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599', onExecute: () => innerProps.navigateToForecastScreen() },
                                    React.createElement(Icon, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a7333ea600', disabled: true, type: IconType.MrmLink }))))))))));
    return creditProduct ? (React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', style: Styles.creditProductPageMainViewPaddings },
        React.createElement(Grid, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' },
            React.createElement(Row, { testID: 'test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f' },
                React.createElement(Col, { xs: 12, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' }, fieldClientNameAndProductName(props))),
            React.createElement(Row, { testID: 'test-id-3309ff44-5b5f-0f14-3289-a44978ddf3e4' },
                React.createElement(Col, { xs: 12, testID: 'test-id-4409ff44-5b5f-0f14-3289-a44978ddf3e4' },
                    React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
                        React.createElement(HorizontalRule, { testID: 'test-id-aa09ff44-5b5f-0f14-3289-a44978ddf3e4' })))),
            React.createElement(Row, { testID: 'test-id-fb794bcb-615b-fbce-3593-a23b19fd9624' },
                React.createElement(Col, { xs: 2, testID: 'test-id-e358e512-bc8f-7c14-d377-0da0f64aa226' }, fieldProductRate(props)),
                React.createElement(Col, { xs: 2, testID: 'test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b' }, fieldProductTerm(props)),
                React.createElement(Col, { xs: 4, testID: 'test-id-398137b1-33db-8e27-ff58-abd5bcdde762' }, fieldProductSum(props)),
                React.createElement(Col, { xs: 4, testID: 'test-id-398137b1-33db-8e27-ff58-abd5bcdde762' }, fieldProductDebtSum(props))),
            React.createElement(Row, { testID: 'test-id-5509ff44-5b5f-0f14-3289-a44978ddf3e4' },
                React.createElement(Col, { xs: 12, testID: 'test-id-6609ff44-5b5f-0f14-3289-a44978ddf3e4' },
                    React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
                        React.createElement(HorizontalRule, { testID: 'test-id-7709ff44-5b5f-0f14-3289-a44978ddf3e4' })))),
            React.createElement(Row, { testID: 'test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476' },
                React.createElement(Col, { xs: 2, testID: 'test-id-074204b3-1fde-5e11-70b1-2abe122d91ff' }, fieldProductContractOpenDate(props)),
                React.createElement(Col, { xs: 2, testID: 'test-id-7b862656-701b-d2a2-908e-21da8d427f98' }, fieldProductContractCloseDate(props)),
                React.createElement(Col, { xs: 4, testID: 'test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118' }, fieldProductContractNumber(props)),
                React.createElement(Col, { xs: 4, testID: 'test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118' }, fieldProductContractStatus(props))),
            creditProduct.isActiveAgreement ?
                (React.createElement(Row, { testID: 'test-id-d6fafdfe-1e22-4b9f-66d5-f0ab4e716ce1' },
                    React.createElement(Col, { xs: 12, testID: 'test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b' },
                        React.createElement(View, { style: StylesUFSPir28.GridRowHideExtraMargins },
                            props.forecastEventListFetching ? renderBottomLoader(props) : null,
                            props.forecastEventListError ? renderBottomError(props) : null,
                            !props.forecastEventListFetching && !props.forecastEventListError ? renderBottomInfoRow(props) : null)))) : null))) :
        (React.createElement(View, { testID: 'test-id-26eabd79-731a-60f7-cf41-627f501e7747' }));
};
/**
 * Страница "График платежей"
 *
 * @param pageProps Все свойства типа IProps (ниже), который приходят во ViewProductCredit
 * @param pageTitle Заголовок страницы
 *
 * Примечание: фукнкция без типов, надо вернуть чистую ноду Page, иначе фон заголовка будет серый
 * Даже JSX.Element вернуть не получается
 */
const PageCreditProductPaymentSchedule = (pageProps, pageTitle) => {
    const testID = 'test-id-26eabd70-0101-61f7-cf41-62777788874733';
    const paymentScheduleListFiltered = pageProps.paymentScheduleListFiltered;
    const inputsPaymentScheduleFilterOperationType = {
        inputPaymentScheduleFilterOperCodeCred: pageProps.inputPaymentScheduleFilterOperCodeCred,
        inputPaymentScheduleFilterOperCodeProc: pageProps.inputPaymentScheduleFilterOperCodeProc,
        inputPaymentScheduleFilterOperCodeOther: pageProps.inputPaymentScheduleFilterOperCodeOther,
    };
    const inputsPaymentScheduleFilterStatus = {
        inputPaymentScheduleFilterStatusNotPay: pageProps.inputPaymentScheduleFilterStatusNotPay,
        inputPaymentScheduleFilterStatusForPay: pageProps.inputPaymentScheduleFilterStatusForPay,
        inputPaymentScheduleFilterStatusExecPay: pageProps.inputPaymentScheduleFilterStatusExecPay,
    };
    const performPaymentScheduleAlertViewHandleOk = Utils.isHandlerFunctionOk(pageProps.paymentScheduleAlternativeScenariosType) ?
        pageProps.performPaymentScheduleAlertViewHandleOk : null;
    const performPaymentScheduleAlertViewHandleCancel = Utils.isHandlerFunctionCancel(pageProps.paymentScheduleAlternativeScenariosType) ?
        pageProps.performPaymentScheduleAlertViewHandleCancel : null;
    const performPaymentScheduleErrorViewHandleRepeat = Utils.isHandlerFunctionRepeat(pageProps.paymentScheduleAlternativeScenariosType) ?
        pageProps.performPaymentScheduleErrorViewHandleRepeat : null;
    /**
     * Верхний блок страницы. Содержание: клиент, название продукта и номер договора
     */
    const blockInfo = () => {
        const { creditProduct } = pageProps.currentCreditProduct;
        // Клиент
        const creditProductClientName = pageProps.currentCustomerManaged && pageProps.currentCustomerManaged.name;
        // Название продукта
        const creditProductName = creditProduct && creditProduct.nameClassifier && creditProduct.nameClassifier.value;
        // Номер договора
        const creditProductContractNumber = creditProduct && creditProduct.contractNumber || null;
        // ID клиента
        const creditProductClienID = pageProps.currentCustomerManaged && pageProps.currentCustomerManaged.id;
        return (React.createElement(View, { testID: 'blockInfo_View', style: PaymentScheduleStyles.infoBlockViewWrapper },
            React.createElement(Grid, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid` },
                React.createElement(Row, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1` },
                    React.createElement(Col, { xs: 12, testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col` },
                        React.createElement(View, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col`, style: PaymentScheduleStyles.infoBlockViewWrapperViewGridRow },
                            React.createElement(FieldTextWithPaddingsInGridCell, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell`, label: '\u041A\u043B\u0438\u0435\u043D\u0442', text: creditProductClientName }),
                            React.createElement(View, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell_View`, style: PaymentScheduleStyles.infoBlockViewFieldTextWithPaddingsInGridCel },
                                React.createElement(Button, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell_Button`, onExecute: () => pageProps.performCustomerOpen(pageProps.currentCustomerManaged) },
                                    React.createElement(Icon, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell_Button_Icon`, type: IconType.MrmInfo }))))))),
            React.createElement(View, { style: Styles.WrapperHeader },
                React.createElement(View, { style: Styles.ProductName },
                    React.createElement(FieldTextWithPaddingsInGridCell, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col1_FieldTextWithPaddingsInGridCell`, label: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430', text: creditProductName })),
                React.createElement(View, { style: Styles.ContractNumber },
                    React.createElement(FieldTextWithPaddingsInGridCell, { testID: `${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col2_FieldTextWithPaddingsInGridCell`, label: '\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430', text: creditProductContractNumber })))));
    };
    /**
     * Сплошное подчеркивание от края до края
     */
    const blockHr = () => (React.createElement(View, { testID: 'test-id-e358e512-bc8f-7c14-d377-0da0f64aa226', style: PaymentScheduleStyles.horizontalLineFullWidth }));
    /**
     * Блок фильтров "Период", "Тип операции" и "Статус"
     */
    const blockFilters = () => {
        /**
         * Фильтр "Период"
         */
        const filterPeriod = () => (React.createElement(View, { testID: `${testID}_PSF_View`, style: PaymentScheduleStyles.filterBlockWrapper },
            React.createElement(TouchableOpacity, { onPress: pageProps.performPopoverPaymentSchedulePeriodFilterShow, activeOpacity: 1 },
                React.createElement(View, { testID: `${testID}_PSF_View_View`, style: PaymentScheduleStyles.filterLabelWrapper },
                    React.createElement(Text, { testID: `${testID}_PSF_View_View_Text`, style: Styles.GreyLabel }, 'Период')),
                React.createElement(View, { testID: `${testID}_PSF_TableCellContent`, style: PaymentScheduleStyles.filterBlockTableCellContent },
                    React.createElement(View, { testID: `${testID}_PSF_TCellContent_View`, style: PaymentScheduleStyles.filterBlockTableValue },
                        React.createElement(Text, { testID: `${testID}_PSF_TCellContent_View_Text`, style: Styles.baseText }, pageProps.inputPaymentScheduleFilterPeriodStartApplied &&
                            pageProps.inputPaymentScheduleFilterPeriodEndApplied &&
                            [
                                Utils.format.date(pageProps.inputPaymentScheduleFilterPeriodStartApplied),
                                Utils.format.date(pageProps.inputPaymentScheduleFilterPeriodEndApplied)
                            ].join(' - '))),
                    React.createElement(View, { testID: `${testID}_PSF_TCellContent_View2`, style: PaymentScheduleStyles.filterBlockTableIcon },
                        React.createElement(PopoverTarget, { testID: `${testID}_PSF_TCellContent_View2_PTarget`, refName: 'PaymentScheduleFilterPeriod_PopoverTarget' },
                            React.createElement(View, null,
                                React.createElement(Button, { testID: `${testID}_PSF_TCellContent_View2_PTarget_Button`, onExecute: pageProps.performPopoverPaymentSchedulePeriodFilterShow },
                                    React.createElement(Icon, { testID: `${testID}_PSF_TCellContent_View2_PTarget_Button_Icon`, type: IconType.MrmCalendar })))))))));
        /**
         * Фильтр "Тип операции"
         */
        const filterType = () => (React.createElement(View, { testID: `${testID}_PSF_View`, style: PaymentScheduleStyles.filterBlockWrapper },
            React.createElement(TouchableOpacity, { onPress: pageProps.performPopoverPaymentScheduleOperationTypeFilterShow, activeOpacity: 1 },
                React.createElement(View, { testID: `${testID}_PSF_View_View`, style: PaymentScheduleStyles.filterLabelWrapper },
                    React.createElement(Text, { testID: `${testID}_PSF_View_View_Text`, style: Styles.GreyLabel }, 'Тип операции')),
                React.createElement(View, { testID: `${testID}_PSF_TableCellContent`, style: PaymentScheduleStyles.filterBlockTableCellContent },
                    React.createElement(View, { testID: `${testID}_PSF_TCellContent_View`, style: PaymentScheduleStyles.filterBlockTableValue },
                        React.createElement(Text, { testID: `${testID}_PSF_TCellContent_View_Text`, style: Styles.baseText }, Utils.getPaymentScheduleFilterTypeText(pageProps.inputPaymentScheduleFilterOperCodeOtherApplied, pageProps.inputPaymentScheduleFilterOperCodeProcApplied, pageProps.inputPaymentScheduleFilterOperCodeCredApplied))),
                    React.createElement(View, { testID: `${testID}_PSF_TCellContent_View2`, style: PaymentScheduleStyles.filterBlockTableIcon },
                        React.createElement(PopoverTarget, { testID: `${testID}_PSF_TCellContent_View2_PTarget`, refName: `PaymentScheduleFilterOperationType_PopoverTarget` },
                            React.createElement(View, null,
                                React.createElement(Button, { testID: `${testID}_PSF_TCellContent_View2_PTarget_Button`, onExecute: pageProps.performPopoverPaymentScheduleOperationTypeFilterShow },
                                    React.createElement(Icon, { testID: `${testID}_PSF_TCellContent_View2_PTarget_Button_Icon`, type: IconType.MrmArrowDown })))))))));
        /**
         * Фильтр "Статус"
         */
        const filterStatus = () => (React.createElement(View, { testID: `${testID}_PSF_View`, style: PaymentScheduleStyles.filterBlockWrapper },
            React.createElement(TouchableOpacity, { onPress: pageProps.performPopoverPaymentScheduleStatusFilterShow, activeOpacity: 1 },
                React.createElement(View, { testID: `${testID}_PSF_View_View`, style: PaymentScheduleStyles.filterLabelWrapper },
                    React.createElement(Text, { testID: `${testID}_PSF_View_View_Text`, style: Styles.GreyLabel }, 'Статус')),
                React.createElement(View, { testID: `${testID}_PSF_TableCellContent`, style: PaymentScheduleStyles.filterBlockTableCellContent },
                    React.createElement(View, { testID: `${testID}_PSF_TCellContent_View`, style: PaymentScheduleStyles.filterBlockTableValue },
                        React.createElement(Text, { testID: `${testID}_PSF_TCellContent_View_Text`, style: Styles.baseText }, Utils.getPaymentScheduleFilterStatusText(pageProps.inputPaymentScheduleFilterStatusExecPayApplied, pageProps.inputPaymentScheduleFilterStatusForPayApplied, pageProps.inputPaymentScheduleFilterStatusNotPayApplied))),
                    React.createElement(View, { testID: `${testID}_PSF_TCellContent_View2`, style: PaymentScheduleStyles.filterBlockTableIcon },
                        React.createElement(PopoverTarget, { testID: `${testID}_PSF_TCellContent_View2_PTarget`, refName: 'PaymentScheduleFilterStatus_PopoverTarget' },
                            React.createElement(View, null,
                                React.createElement(Button, { testID: `${testID}_PSF_TCellContent_View2_PTarget_Button`, onExecute: pageProps.performPopoverPaymentScheduleStatusFilterShow },
                                    React.createElement(Icon, { testID: `${testID}_PSF_TCellContent_View2_PTarget_Button_Icon`, type: IconType.MrmArrowDown })))))))));
        /**
         * Контент блока фильтров
         */
        return (React.createElement(View, { testID: `${testID}_PaymentScheduleFiltersBlock_View`, style: PaymentScheduleStyles.filtersBlock },
            filterPeriod(),
            filterType(),
            filterStatus()));
    };
    /**
     * Блок таблицы с данными графика платежей
     */
    const blockTable = () => {
        const tableRowsGenerate = (list) => {
            let tableRows = list.data.map((item, index) => (React.createElement(TableRow, { key: `${index}`, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50bbbb' },
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' },
                    React.createElement(View, { testID: 'stub', style: PaymentScheduleStyles.operDateTableCell },
                        React.createElement(Text, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd', style: Styles.baseText }, item.operDate != null ? Utils.format.date(item.operDate) : PLACEHOLDER))),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' }),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' },
                    React.createElement(View, { testID: 'stub', style: PaymentScheduleStyles.operNameTableCell },
                        React.createElement(Text, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd', style: Styles.baseText }, item.operName != null ? item.operName : PLACEHOLDER),
                        item.operCode === Enums.ProductCreditPaymentScheduleOperCode.proc ? // Если 'Погашение процентов'
                            React.createElement(Text, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd', style: [Styles.sumCaptionText, PaymentScheduleStyles.operNameTableCellText] }, item.chargeBegin != null && item.chargeEnd != null ?
                                `c ${Utils.format.date(item.chargeBegin)} по ${Utils.format.date(item.chargeEnd)}` : PLACEHOLDER) : null)),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' }),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' },
                    React.createElement(View, { style: [
                            StylesUFSPir28.calculatedTopMarginForSumTextInsideTableCell,
                            StylesUFSPir28.removeBottomMarginOfSumText,
                            PaymentScheduleStyles.operSumTableCell,
                        ] },
                        React.createElement(SumText, { testID: 'test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca', value: Number(item.operSum), small: false, block: true, currency: 'RUB' }))),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' }),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc' },
                    React.createElement(View, { testID: 'stub', style: PaymentScheduleStyles.statusTableCell },
                        React.createElement(Text, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd', style: [Styles.baseText,
                                item.status != null && item.status.toString() == Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.notPay].toString() ?
                                    { color: '#dc4a46' } :
                                    { color: '#000000' }
                            ] }, item.status != null ? Utils.getPaymentScheduleStatusName(item.status.toString()) : null))))));
            const getLoaderWithinTableRow = () => (React.createElement(View, { style: PaymentScheduleStyles.LoaderWithinTableRow, testID: 'test-id-26eabd70-0101-61f7-cf41-627f501e7747-01' },
                React.createElement(Loader, { testID: 'test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-03' })));
            const getLoadMoreButton = () => (React.createElement(View, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-08', style: PaymentScheduleStyles.loadMorePaymentsButtonWrapper },
                React.createElement(Button, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-06', type: ButtonType.TEXT, onExecute: () => { pageProps.performPaymentScheduleLoadMore(); } },
                    React.createElement(Text, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-07' }, 'Загрузить еще платежи'))));
            // Последняя строка таблицы (скроллится вместе с таблицей):
            // - кнопка LoadMore (Загрузить еще платежи),
            // - Loader.
            tableRows.push(React.createElement(TableRow, { key: tableRows.length.toString(), testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50bbbb' },
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-01' }),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-02' }),
                React.createElement(ExtendedTableCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-03' }, pageProps.paymentScheduleListLoadMoreFetching ?
                    getLoaderWithinTableRow() :
                    getLoadMoreButton())));
            return tableRows;
        }; // tableRowsGenerate()
        const dataTable = () => {
            return (React.createElement(ExtendedTable, { testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7', style: PaymentScheduleStyles.tableHeight },
                React.createElement(TableHead, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', style: PaymentScheduleStyles.tableHeadHeight },
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '138' },
                        React.createElement(Text, { testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7' }, 'Дата операции')),
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '20' }),
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '370' /*'355'*/ },
                        React.createElement(Text, { testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7' }, 'Тип операции')),
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '20' }),
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '214' },
                        React.createElement(Text, { testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7' }, 'Сумма')),
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '20' }),
                    React.createElement(TableColumn, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b', width: '138' },
                        React.createElement(Text, { testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7' }, 'Статус'))),
                React.createElement(TableBody, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8c' }, tableRowsGenerate(paymentScheduleListFiltered))));
        }; // dataTable()
        return dataTable();
    }; // blockTable()
    /**
     * Контент страницы "График платежей"
     */
    const pageContent = () => {
        const popoverFilterPeriod = () => (React.createElement(SplitPanel, { testID: 'test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924', id: 'paymentSchedulePeriodFilterSplitPanelId' },
            React.createElement(ContentPanel, { testID: 'test-id-c2acf614-0097-d72f-73c3-9d6836a90252', style: PaymentScheduleStyles.popoverContentPanel },
                React.createElement(Page, { testID: 'test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4', scrollEnabled: true, content: React.createElement(View, { style: Styles.main },
                        React.createElement(Text, { testID: `${testID}_PSF_View_View_Text`, style: [Styles.GreyLabel, PaymentScheduleStyles.datePickerGrayLabelAdjustments] }, 'Дата «с»'),
                        React.createElement(DatePicker, { testID: 'test-id-4386ea03-6271-1700-d5ec-f93073722e18', label: 'Дата «с»', date: pageProps.inputPaymentScheduleFilterPeriodStart, mode: 'date', isExpanded: pageProps.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker, onDateChange: (date) => pageProps.performInputPaymentScheduleFilterPeriodStart(date), onClickIcon: () => pageProps.performPopoverPaymentSchedulePeriodSwitchDatePicker(true), icon: IconType.MrmCalendar, drawDateInsteadOfLabel: true }),
                        React.createElement(Text, { testID: `${testID}_PSF_View_View_Text`, style: [Styles.GreyLabel, PaymentScheduleStyles.datePickerGrayLabelAdjustments] }, 'Дата «по»'),
                        React.createElement(DatePicker, { testID: 'test-id-4386ea03-6271-1700-d5ec-f93073722e18', label: 'Дата «по»', date: pageProps.inputPaymentScheduleFilterPeriodEnd, mode: 'date', isExpanded: !pageProps.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker, onDateChange: (date) => pageProps.performInputPaymentScheduleFilterPeriodEnd(date), onClickIcon: () => pageProps.performPopoverPaymentSchedulePeriodSwitchDatePicker(false), icon: IconType.MrmCalendar, drawDateInsteadOfLabel: true })) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-e136773b-3284-2a76-a8fc-01673fb8624c' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: 'Сбросить', onExecute: () => { pageProps.performPaymentScheduleFilterPeriodReset(); } })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300' },
                        React.createElement(H2, { testID: 'test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82' }, 'Выбор периода')),
                    React.createElement(RightPageHeader, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: 'Применить', onExecute: () => { pageProps.performPaymentScheduleFilterPeriodSave(); } }))))));
        const popoverFilterOperationType = () => (React.createElement(SplitPanel, { testID: 'test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924', id: 'paymentScheduleOperationTypeFilterSplitPanelId' },
            React.createElement(ContentPanel, { testID: 'test-id-c2acf614-0097-d72f-73c3-9d6836a90252', style: PaymentScheduleStyles.popoverContentPanel },
                React.createElement(Page, { testID: 'test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4', scrollEnabled: false, content: React.createElement(View, { style: Styles.main },
                        React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: pageProps.inputPaymentScheduleFilterOperCodeCred, label: 'Погашение кредита', disabled: Utils.isDisabledCheckboxPaymentScheduleFilter(inputsPaymentScheduleFilterOperationType, 'inputPaymentScheduleFilterOperCodeCred'), onChange: pageProps.performinputPaymentScheduleFilterOperCodeCred }),
                        React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: pageProps.inputPaymentScheduleFilterOperCodeProc, label: 'Погашение процентов', disabled: Utils.isDisabledCheckboxPaymentScheduleFilter(inputsPaymentScheduleFilterOperationType, 'inputPaymentScheduleFilterOperCodeProc'), onChange: pageProps.performinputPaymentScheduleFilterOperCodeProc }),
                        React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: pageProps.inputPaymentScheduleFilterOperCodeOther, label: 'Прочие платежи', disabled: Utils.isDisabledCheckboxPaymentScheduleFilter(inputsPaymentScheduleFilterOperationType, 'inputPaymentScheduleFilterOperCodeOther'), onChange: pageProps.performinputPaymentScheduleFilterOperCodeOther })) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-e136773b-3284-2a76-a8fc-01673fb8624c12' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b30012', title: 'Сбросить', onExecute: () => { pageProps.performPaymentScheduleFilterOperationTypeReset(); } })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300' },
                        React.createElement(H2, { testID: 'test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82' }, 'Тип операции')),
                    React.createElement(RightPageHeader, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: 'Применить', onExecute: () => { pageProps.performPaymentScheduleFilterOperationTypeSave(); } }))))));
        const popoverFilterStatus = () => (React.createElement(SplitPanel, { testID: 'test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924', id: 'paymentScheduleStatusFilterSplitPanelId' },
            React.createElement(ContentPanel, { testID: 'test-id-c2acf614-0097-d72f-73c3-9d6836a90252', style: PaymentScheduleStyles.popoverContentPanel },
                React.createElement(Page, { testID: 'test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4', scrollEnabled: false, content: React.createElement(View, { style: Styles.main },
                        React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: pageProps.inputPaymentScheduleFilterStatusNotPay, label: 'Не оплачено', disabled: Utils.isDisabledCheckboxPaymentScheduleFilter(inputsPaymentScheduleFilterStatus, 'inputPaymentScheduleFilterStatusNotPay'), onChange: pageProps.performinputPaymentScheduleFilterStatusNotPay }),
                        React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: pageProps.inputPaymentScheduleFilterStatusForPay, label: 'К оплате', disabled: Utils.isDisabledCheckboxPaymentScheduleFilter(inputsPaymentScheduleFilterStatus, 'inputPaymentScheduleFilterStatusForPay'), onChange: pageProps.performinputPaymentScheduleFilterStatusForPay }),
                        React.createElement(Checkbox, { testID: 'test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e', checked: pageProps.inputPaymentScheduleFilterStatusExecPay, label: 'Исполнено', disabled: Utils.isDisabledCheckboxPaymentScheduleFilter(inputsPaymentScheduleFilterStatus, 'inputPaymentScheduleFilterStatusExecPay'), onChange: pageProps.performinputPaymentScheduleFilterStatusExecPay })) },
                    React.createElement(LeftPageHeader, { testID: 'test-id-e136773b-3284-2a76-a8fc-01673fb8624c' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: 'Сбросить', onExecute: () => { pageProps.performPaymentScheduleFilterStatusReset(); } })),
                    React.createElement(CenterPageHeader, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300' },
                        React.createElement(H2, { testID: 'test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82' }, 'Статус')),
                    React.createElement(RightPageHeader, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300' },
                        React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: 'Применить', onExecute: () => { pageProps.performPaymentScheduleFilterStatusSave(); } }))))));
        const getLoader = () => (React.createElement(LoaderWithText, { text: 'Загрузка данных...', testID: 'test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-03' }));
        const getNoData = () => (React.createElement(View, { testID: 'test-id-26eabd70-0101-61f7-cf41-627f501e7747-05', style: Styles.noDataView },
            React.createElement(Center, { testID: 'test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-06' },
                React.createElement(Text, { testID: 'test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-07', style: Styles.noDataText }, 'Ничего не найдено, попробуйте изменить фильтры.'))));
        return (React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' },
            React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', style: [
                    Styles.pageHeigthWithNavbarAndRefreshBar,
                    PaymentScheduleStyles.paymemtSchedulePageMainViewPaddings
                ] },
                blockInfo() // Блок информации
            ,
                blockHr() // Горизонтальная линия
            ,
                blockFilters() // Блок фильтров
            ,
                (pageProps.paymentScheduleListFetching && !pageProps.paymentScheduleListLoadMoreFetching) ?
                    getLoader() :
                    (pageProps.paymentScheduleListFiltered.data.length === 0) ?
                        getNoData() :
                        blockTable() // Блок таблицы с данными
            ),
            React.createElement(RefreshBar, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', performRefresh: () => pageProps.performPaymentScheduleAlertShow(Enums.paymentScheduleAlternativeScenariosType.Refresh, Utils.alertViewMessagePaymentScheduleRefresh, null), date: pageProps.paymentScheduleListCachedDate, title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C' }),
            React.createElement(PopoverSingle, { popoverName: `PaymentScheduleFilterPeriod_PopoverTarget`, testID: 'test-id-141962be-2298-b155-5b7f-c45c92f93700', target: PopoverTarget.getRef('PaymentScheduleFilterPeriod_PopoverTarget'), opened: pageProps.isVisiblePopoverPaymentSchedulePeriodFilter, onOutsideTap: pageProps.performPopoverPaymentSchedulePeriodFilterHide, type: PopoverType.WIDE, style: PaymentScheduleStyles.popoverPeriodFilter, position: [PopoverPosition.BOTTOM] }, popoverFilterPeriod()),
            React.createElement(PopoverSingle, { popoverName: `PaymentScheduleFilterOperationType_PopoverTarget`, testID: 'test-id-141962be-2298-b155-5b7f-c45c92f93800', target: PopoverTarget.getRef(`PaymentScheduleFilterOperationType_PopoverTarget`), opened: pageProps.isVisiblePopoverPaymentScheduleOperationTypeFilter, onOutsideTap: pageProps.performPopoverPaymentScheduleOperationTypeFilterHide, type: PopoverType.WIDE, style: PaymentScheduleStyles.popoverOperationTypeFilter, position: [PopoverPosition.BOTTOM] }, popoverFilterOperationType()),
            React.createElement(PopoverSingle, { popoverName: `PaymentScheduleFilterStatus_PopoverTarget`, testID: 'test-id-141962be-2298-b155-5b7f-c45c92f93900', target: PopoverTarget.getRef('PaymentScheduleFilterStatus_PopoverTarget'), opened: pageProps.isVisiblePopoverPaymentScheduleStatusFilter, onOutsideTap: pageProps.performPopoverPaymentScheduleStatusFilterHide, type: PopoverType.WIDE, style: PaymentScheduleStyles.popoverStatusFilter, position: [PopoverPosition.BOTTOM] }, popoverFilterStatus()),
            React.createElement(AlertView, { testID: 'test-id-product-сredit-payment-schedule-alert-view', ok: performPaymentScheduleAlertViewHandleOk, cancel: performPaymentScheduleAlertViewHandleCancel, title: pageProps.paymentScheduleAlternativeScenariosTitle, message: pageProps.paymentScheduleAlternativeScenariosMessage, isVisible: pageProps.paymentScheduleAlertViewIsVisible }),
            React.createElement(ErrorModal, { testID: 'test-id-payment-schedule-modal-error', isVisible: pageProps.paymentScheduleErrorModalIsVisible, titleText: pageProps.paymentScheduleAlternativeScenariosTitle, messageText: pageProps.paymentScheduleAlternativeScenariosMessage, cancel: pageProps.performPaymentScheduleErrorHide, repeat: pageProps.performPaymentScheduleListRefresh, cacheDate: new Date() })));
    }; // pageContent()
    return (React.createElement(Page, { testID: 'test-id-021ac066-bc71-7f63-31ee-723e9a76e0a9', scrollEnabled: false, content: pageContent() },
        React.createElement(LeftPageHeader, { testID: 'test-id-672b006e-927d-da8c-167a-0ca21ea4b300' },
            React.createElement(NavigationBackButton, { testID: 'test-id-aaabccd3-2343-636e-0000-e14e0e80c044', title: false, onClick: pageProps.navigateProductCreditBack }),
            React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: 'test-id-6733441e-5687-0000-167a-0ca21ea4b300' },
                React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-5687-0000-167a-0ca21ea4b300', title: 'Кредит', onExecute: pageProps.navigateProductCreditBack }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec' },
            React.createElement(H2, { testID: 'test-id-6fc1df7a-8cff-746a-0fef-654a99497922' }, pageTitle))));
}; // PageCreditProductPaymentSchedule()
const COVENANT_TITLE = 'Мониторинг исполнения ковенантов';
const getFetchingCreditCovenantListTableRow = (props) => (React.createElement(TableRow, { testID: 'test-id-adf47e58-3c2a-47cd-a4a2-4b8a9f9a274d' },
    React.createElement(ExtendedTableCell, { testID: 'test-id-8ba5904f-675e-4168-b071-2df6c989dc65' },
        React.createElement(View, { testID: 'test-id-48de7a15-4340-4ab0-8ab2-dd3afeca154a', style: Styles.creditObjectClickableRowWrapper },
            React.createElement(Text, { testID: 'test-id-4b2e4b7b-9cab-4441-a734-87190093b341', style: Styles.creditObjectClickableRowText }, COVENANT_TITLE),
            React.createElement(View, { style: Styles.creditObjectLoaderTextWrapper },
                React.createElement(Text, { testID: 'test-id-585abaaf-3880-493f-a257-c5eb818de5e0', style: Styles.creditObjectLoadingText }, LOADING_TEXT))))));
const getErrorCreditCovenantListTableRow = (props) => (React.createElement(TableRow, { testID: 'test-id-a059430c-8e15-4380-93ab-470f866f606f', onClick: props.performCallGetProductCovenantListCacheReset },
    React.createElement(ExtendedTableCell, { testID: 'test-id-c8c379e2-913c-4b2e-9cf1-706447c95c81' },
        React.createElement(View, { testID: 'test-id-20986f24-adc3-4c89-a8a3-3de6cb03ec1b', style: Styles.creditObjectClickableButtonWrapper },
            React.createElement(View, { style: Styles.creditObjectClickableButton },
                React.createElement(NavigationIconButton, { testID: 'test-id-373faa99-5fc2-4d91-a809-16a57f682566', type: NavigationIconButtonType.REFRESH, onExecute: props.performCallGetProductCovenantListCacheReset })),
            React.createElement(View, { testID: 'test-id-482f07c0-8f54-4376-a463-9b6b7731019e', style: Styles.creditObjectErrorWrapper },
                React.createElement(Text, { testID: 'test-id-2f329d63-5d74-451b-a10d-1a17e6250541', style: [Styles.baseText, Styles.textWithErrorBelow] }, COVENANT_TITLE),
                React.createElement(Text, { testID: 'test-id-ebd04700-b92f-494b-b957-b7f11171998b', style: Styles.creditObjectErrorText }, ERROR_MESSAGE))))));
const getCreditCovenantListTableRow = (props) => {
    const isExistProductCovenantList = Array.isArray(props.productCovenantList.data) &&
        props.productCovenantList.data.length != 0;
    const isCovenantHasDeadLineTime = Array.isArray(props.productCovenantList.data) ?
        props.productCovenantList.data.find((covenant) => (Utils.getProductCreditCovenantStatus(new Date(), covenant.historyList) == 'Нарушено')) != undefined
        : false;
    return (React.createElement(TableRow, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b', onClick: props.navigateToCovenantListPage },
        React.createElement(ExtendedTableCell, { testID: 'test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b' },
            React.createElement(View, { testID: 'test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b', style: Styles.productCovenantTableCellView },
                isExistProductCovenantList ? React.createElement(Button, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599', onExecute: props.navigateToCovenantListPage },
                    React.createElement(Icon, { testID: 'test-id-4fa17fe7-3a12-0e93-0c79-c2a7333ea600', disabled: true, type: IconType.MrmLink })) : null,
                React.createElement(View, { testID: 'test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b', style: Styles.covenantRestrictionView }, isCovenantHasDeadLineTime ?
                    React.createElement(Text, { testID: 'test-id-20fa97bb-aad8-0bb9-ce7b-0751cf903e0b', ellipsizeMode: 'tail', style: Styles.productCreditCovenantRedStatusValue }, 'Есть нарушенные') :
                    React.createElement(Text, { testID: 'test-id-20fa97bb-aad8-0bb9-ce7b-0751cf903e0b', ellipsizeMode: 'tail', style: Styles.CreditLinkRowInfoText }, isExistProductCovenantList ? '' : 'Нет данных')),
                React.createElement(Text, { testID: 'test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b', style: [
                        Styles.baseText,
                        Styles.baseTextInTableCellAdjustments,
                        Styles.covenantTableCellText
                    ] }, COVENANT_TITLE)))));
};
/**
 * Страница "Кредит"
 *
 * @param pageProps Все свойства типа IProps (ниже), который приходят во ViewProductCredit
 * @param pageTitle Заголовок страницы
 *
 * Примечание: фукнкция без типов, надо вернуть чистую ноду Page, иначе фон заголовка будет серый
 * Даже JSX.Element вернуть не получается
 */
const PageCreditProductInfo = (pageProps, pageTitle) => {
    const ContentPageCreditProductInfo = (contentProps) => {
        const { creditProduct } = contentProps.currentCreditProduct;
        const creditProductClientName = contentProps.currentCustomerManaged && contentProps.currentCustomerManaged.name;
        const creditProductName = creditProduct && creditProduct.nameClassifier && creditProduct.nameClassifier.value;
        const creditProductRate = creditProduct && creditProduct.rate && (creditProduct.rate.toString() + ' %') || PLACEHOLDER;
        const creditProductTerm = creditProduct && creditProduct.term && creditProduct.term.toString() || PLACEHOLDER;
        const creditProductSum = creditProduct && creditProduct.sum && creditProduct.sum.toString() || PLACEHOLDER;
        const creditProductCurrency = creditProduct && creditProduct.currencyClassifier && creditProduct.currencyClassifier.code || PLACEHOLDER;
        const creditProductDebt = creditProduct && creditProduct.debtSum && creditProduct.debtSum.toString() || null;
        const creditProductOpenDate = creditProduct && creditProduct.openDate && Utils.format.date(creditProduct.openDate) || PLACEHOLDER;
        const creditProductCloseDate = creditProduct && creditProduct.closeDate && Utils.format.date(creditProduct.closeDate) || PLACEHOLDER;
        const creditProductContractNumber = creditProduct && creditProduct.contractNumber || null;
        const creditProdcutContractStatus = creditProduct && creditProduct.status && Utils.productCreditStatus(creditProduct.status) || PLACEHOLDER;
        const ForecastEventsClickableStatusRowPageCreditProductInfo = ({ forecastEventList, forecastEventListError, forecastEventListFetching, forecastEventListFiltered, paymentScheduleList, paymentScheduleListError, paymentScheduleListFetching, paymentScheduleListFiltered, navigateToForecastScreen = () => { }, performRefreshForecast = () => { } }) => {
            const PAYMENT_SCHEDULE_TITLE = 'График платежей';
            const PaymentScheduleClickableRowInLoadingState = (React.createElement(TableRow, { testID: 'test-id-f9e371ff-b00f-4dbf-8b6c-52ba69164964' },
                React.createElement(ExtendedTableCell, { testID: 'test-id-5ebfa13d-1d9b-4d81-831a-994efa5d844e' },
                    React.createElement(View, { testID: 'test-id-a11ded27-7a5b-4ccc-80c6-b42ffd22875c', style: Styles.creditObjectClickableRowWrapper },
                        React.createElement(Text, { testID: 'test-id-dc29808a-63d8-4a80-9301-efb82f0d25e9', style: Styles.creditObjectClickableRowText }, PAYMENT_SCHEDULE_TITLE),
                        React.createElement(View, { style: Styles.creditObjectLoaderTextWrapper },
                            React.createElement(Text, { testID: 'test-id-764c1028-f6bf-4143-9288-d7a62367ed81', style: Styles.creditObjectLoadingText }, LOADING_TEXT))))));
            const PaymentScheduleClickableRowInErrorState = (React.createElement(TableRow, { testID: 'test-id-15e9260b-1817-4e24-8618-3abe69502dd4', onClick: contentProps.performForecastEventsListFlush },
                React.createElement(ExtendedTableCell, { testID: 'test-id-3f0cfda9-1327-42ad-9beb-a66bc6a03261' },
                    React.createElement(View, { testID: 'test-id-f9c972a8-1efa-4475-baaf-5dae72fb26b2', style: Styles.creditObjectClickableButtonWrapperInErrorState },
                        React.createElement(View, { style: Styles.creditObjectClickableButton },
                            React.createElement(NavigationIconButton, { testID: 'test-id-b2471f01-bc94-4555-a53c-79d3f1dde052', type: NavigationIconButtonType.REFRESH, onExecute: contentProps.performForecastEventsListFlush })),
                        React.createElement(View, { testID: 'test-id-7ae9ecd9-e8ef-442b-ab3f-a2371831cb68', style: Styles.creditObjectErrorWrapper },
                            React.createElement(Text, { testID: 'test-id-9aa5e35b-49e2-4c06-8450-b53605535fc5', style: [Styles.baseText, Styles.textWithErrorBelow] }, PAYMENT_SCHEDULE_TITLE),
                            React.createElement(Text, { testID: 'test-id-f8daf9ac-68a4-4f02-80c5-d8de70fafef4', style: Styles.creditObjectErrorText }, ERROR_MESSAGE))))));
            const PaymentScheduleClickableRowInSuccessState = () => {
                const paymentScheduleInfo = Utils.getEarlyPaymentScheduleInfo(paymentScheduleList);
                return (React.createElement(TableRow, { testID: 'test-id-7ac6cf4b-16a8-44b8-acbb-a1e4475ff539', onClick: paymentScheduleInfo !== 'Нет данных' ? contentProps.navigateToPaymentScheduleScreen : undefined },
                    React.createElement(ExtendedTableCell, { testID: 'test-id-97cbe7f8-8ab0-484c-b735-1db8aa648452' },
                        React.createElement(View, { testID: 'test-id-7d39a3b4-3d04-4760-829e-51d3f7561384', style: Styles.creditObjectClickableButtonWrapper },
                            paymentScheduleInfo !== 'Нет данных' ?
                                React.createElement(Button, { testID: 'test-id-8d0de8dc-f3d3-4f19-b6da-015fe2a15221', onExecute: contentProps.navigateToPaymentScheduleScreen },
                                    React.createElement(Icon, { testID: 'test-id-f4c151ef-adff-4f87-b48f-6e92d9efeb9d', disabled: true, type: IconType.MrmLink })) :
                                React.createElement(View, { testID: 'test-id-765c77c7-48e9-40cd-aa8f-ec660998a34a', style: Styles.emptyView }),
                            React.createElement(View, { testID: 'test-id-2eeefd8b-5620-432e-874c-3dab36332ef0', style: Styles.creditObjectClickableRowInSuccessWrapper },
                                React.createElement(Text, { testID: 'test-id-069dfee7-3abe-49a8-996b-f506487171c1', ellipsizeMode: 'tail', style: paymentScheduleInfo === 'Есть неоплаченные' ?
                                        Styles.creditObjectLinkRowInfoTextRed :
                                        Styles.creditObjectLinkRowInfoText }, paymentScheduleInfo)),
                            React.createElement(Text, { testID: 'test-id-a0a96c06-2f72-4eae-a2cb-3b808a52123b', style: [
                                    Styles.baseText,
                                    Styles.baseTextInTableCellAdjustments,
                                    Styles.forecastEventsClickableRowInSuccessText,
                                ] }, PAYMENT_SCHEDULE_TITLE)))));
            };
            const FORECAST_EVENT_TITLE = 'Прогнозные события';
            const ForecastEventsClickableRowInLoadingState = (React.createElement(TableRow, { testID: 'test-id-8e8d4e18-f9d0-4d44-a4c3-e1eaf95080b4' },
                React.createElement(ExtendedTableCell, { testID: 'test-id-5e8ff276-468a-4e74-9f83-a54365e15c17' },
                    React.createElement(View, { testID: 'test-id-0d8818c5-9d97-4a6f-ba6b-aad978a8c049', style: Styles.creditObjectClickableRowWrapper },
                        React.createElement(Text, { testID: 'test-id-9a45af2a-bf9a-4ae7-8ca4-0b262ff34f90', style: Styles.creditObjectClickableRowText }, FORECAST_EVENT_TITLE),
                        React.createElement(View, { style: Styles.creditObjectLoaderTextWrapper },
                            React.createElement(Text, { testID: 'test-id-557f0357-deb3-4a71-9be0-ed68d40f8668', style: Styles.creditObjectLoadingText }, LOADING_TEXT))))));
            const ForecastEventsClickableRowInErrorState = (React.createElement(TableRow, { testID: 'test-id-15e9260b-1817-4e24-8618-3abe69502dd4', onClick: performRefreshForecast },
                React.createElement(ExtendedTableCell, { testID: 'test-id-26173eae-201f-4033-a389-109e390f1df1' },
                    React.createElement(View, { testID: 'test-id-a6b5ff7d-cfb6-4fea-9bde-363fcc362578', style: Styles.creditObjectClickableButtonWrapperInErrorState },
                        React.createElement(View, { style: Styles.creditObjectClickableButton },
                            React.createElement(NavigationIconButton, { testID: 'test-id-be52a66e-f8cd-44c8-b172-2e793da323c0', type: NavigationIconButtonType.REFRESH, onExecute: performRefreshForecast })),
                        React.createElement(View, { testID: 'test-id-9d55b680-2b3b-4419-84ee-521f8e8646f2', style: Styles.creditObjectErrorWrapper },
                            React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: [Styles.baseText, Styles.textWithErrorBelow] }, FORECAST_EVENT_TITLE),
                            React.createElement(Text, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: Styles.creditObjectErrorText }, creditProduct && creditProduct.forecastDealId
                                ? ERROR_MESSAGE
                                : ERROR_MESSAGE_DEAL))))));
            const ForecastEventsClickableRowInSuccessState = (React.createElement(TableRow, { testID: 'test-id-aee80811-81a2-4ddb-a375-e051b80efbaf', onClick: navigateToForecastScreen },
                React.createElement(ExtendedTableCell, { testID: 'test-id-1f22c12c-fd50-4923-87fc-9b1d6ddcc30c' },
                    React.createElement(View, { testID: 'test-id-24aba0eb-e758-4023-80fe-5bd19c6290cf', style: Styles.creditObjectClickableButtonWrapper },
                        React.createElement(Button, { testID: 'test-id-614fca26-e044-4aaa-9315-af1b9fd4b74d', onExecute: navigateToForecastScreen },
                            React.createElement(Icon, { testID: 'test-id-5e28ed4a-6ec2-42c9-a3aa-1ba94bb26469', disabled: true, type: IconType.MrmLink })),
                        React.createElement(View, { testID: 'test-id-223a4f94-69ac-4fd4-a9c7-545e3aaf6103', style: Styles.creditObjectClickableRowInSuccessWrapper },
                            React.createElement(Text, { testID: 'test-id-f82cbce2-cb10-4340-947d-17a6c016bdbb', ellipsizeMode: 'tail', style: Styles.creditObjectLinkRowInfoText }, Utils.getEarlyForecastEventInfo(forecastEventList))),
                        React.createElement(Text, { testID: 'test-id-4ccb256f-bf51-49dd-b902-c96ab5cdc904', style: [
                                Styles.baseText,
                                Styles.baseTextInTableCellAdjustments,
                                Styles.forecastEventsClickableRowInSuccessText,
                            ] }, FORECAST_EVENT_TITLE)))));
            return (React.createElement(View, { testID: 'test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b', style: Styles.contentPageCreditProductInfoWrapper },
                React.createElement(Table, { testID: 'test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b', noPaddings: true },
                    React.createElement(TableBody, { testID: 'test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b' }, paymentScheduleListFetching
                        ? PaymentScheduleClickableRowInLoadingState
                        : paymentScheduleListError
                            ? PaymentScheduleClickableRowInErrorState
                            : PaymentScheduleClickableRowInSuccessState()))));
        };
        return (React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' },
            React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', style: [
                    Styles.pageHeigthWithNavbarAndRefreshBar,
                    Styles.creditProductPageMainViewPaddings
                ] },
                React.createElement(Grid, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' },
                    React.createElement(Row, { testID: 'test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f' },
                        React.createElement(Col, { xs: 12, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041A\u043B\u0438\u0435\u043D\u0442', text: creditProductClientName }))),
                    React.createElement(Row, { testID: 'test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f' },
                        React.createElement(Col, { xs: 12, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430', text: creditProductName }))),
                    React.createElement(GridRowHorizontalRule, null),
                    React.createElement(Row, { testID: 'test-id-fb794bcb-615b-fbce-3593-a23b19fd9624' },
                        React.createElement(Col, { xs: 2, testID: 'test-id-e358e512-bc8f-7c14-d377-0da0f64aa226' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0421\u0442\u0430\u0432\u043A\u0430', text: creditProductRate })),
                        React.createElement(Col, { xs: 2, testID: 'test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0421\u0440\u043E\u043A (\u0434\u043D\u0435\u0439)', text: creditProductTerm })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-398137b1-33db-8e27-ff58-abd5bcdde762' },
                            React.createElement(FieldSumTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0421\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430', text: creditProductSum, currency: creditProductCurrency })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-398137b1-33db-8e27-ff58-abd5bcdde762' },
                            React.createElement(FieldSumTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438', text: creditProductDebt, currency: creditProductCurrency }))),
                    React.createElement(GridRowHorizontalRule, null),
                    React.createElement(Row, { testID: 'test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476' },
                        React.createElement(Col, { xs: 2, testID: 'test-id-074204b3-1fde-5e11-70b1-2abe122d91ff' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0414\u0430\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430', text: creditProductOpenDate })),
                        React.createElement(Col, { xs: 2, testID: 'test-id-7b862656-701b-d2a2-908e-21da8d427f98' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F', text: creditProductCloseDate })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430', text: creditProductContractNumber })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0421\u0442\u0430\u0442\u0443\u0441 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430', text: creditProdcutContractStatus })))),
                creditProduct && creditProduct.isActiveAgreement ?
                    React.createElement(ForecastEventsClickableStatusRowPageCreditProductInfo, { forecastEventList: contentProps.forecastEventList, forecastEventListError: contentProps.forecastEventListError, forecastEventListFetching: contentProps.forecastEventListFetching, forecastEventListFiltered: contentProps.forecastEventListFiltered, paymentScheduleList: contentProps.paymentScheduleList, paymentScheduleListError: contentProps.paymentScheduleListError, paymentScheduleListFetching: contentProps.paymentScheduleListFetching, paymentScheduleListFiltered: contentProps.paymentScheduleListFiltered, navigateToForecastScreen: contentProps.navigateToForecastScreen, performRefreshForecast: contentProps.performRefreshForecast })
                    : null),
            React.createElement(RefreshBar, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C', performRefresh: contentProps.performForecastEventsListFlush, date: contentProps.forecastEventListCachedDate })));
    }; // end of const ContentPageCreditProductInfo: React.StatelessComponent<IProps> = (contentProps: IProps): React.ReactElement<View>
    return (React.createElement(Page, { testID: 'test-id-021ac066-bc71-7f63-31ee-723e9a76e0a9', scrollEnabled: false, content: ContentPageCreditProductInfo(pageProps) },
        React.createElement(LeftPageHeader, { testID: 'test-id-672b006e-927d-da8c-167a-0ca21ea4b300' },
            React.createElement(NavigationBackButton, { testID: 'test-id-aaabccd3-2343-636e-0000-e14e0e80c044', title: false, onClick: pageProps.navigateProductListBack }),
            React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: 'test-id-6733441e-5687-0000-167a-0ca21ea4b300' },
                React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-5687-0000-167a-0ca21ea4b300', title: 'Кредиты', onExecute: pageProps.navigateProductListBack }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec' },
            React.createElement(H2, { testID: 'test-id-6fc1df7a-8cff-746a-0fef-654a99497922' }, pageTitle))));
};
// Страница #2: Прогнозные события (Tabbed)
const PageCreditProductForecastEventList = (props) => {
    const contentCreditProductForecastEventList = (props) => {
        const placeholder = 'Нет данных';
        const tableRowGenerator = (list) => {
            return list.data.map((item, index) => (React.createElement(TableRow, { testID: 'test-id-733b0c85-6ea1-5c09-6f03-21274ebe2be6', key: `Product List Row ${index}`, onClick: () => {
                    pTarget = `displayForecastEventPopover_${index}`;
                    pPosition = [PopoverPosition.LEFT];
                    props.performOpenForecastEventDetails(item);
                } },
                React.createElement(TableCell, { testID: 'test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658' },
                    React.createElement(View, { style: StylesUFSPir28.tableCellInternalBaseTextWrapper },
                        React.createElement(Text, { testID: 'test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658', style: Styles.baseText }, item.plannedEventDate != null ? Utils.format.date(item.plannedEventDate) : placeholder))),
                React.createElement(TableCell, { testID: 'test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658' },
                    React.createElement(View, { style: StylesUFSPir28.tableCellInternalBaseTextWrapper },
                        React.createElement(Text, { testID: 'test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658', style: [Styles.baseText, Styles.additionalSpaceBetweenColumns], numberOfLines: 2, ellipsizeMode: 'tail' }, item.eventType.value))),
                React.createElement(TableCell, { testID: 'test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658' }, item && item.forecastSum && item.currency && item.currency.code ?
                    (React.createElement(View, { style: StylesUFSPir28.removeBottomMarginOfTableCell },
                        React.createElement(View, { style: [StylesUFSPir28.calculatedTopMarginForSumTextInsideTableCell, StylesUFSPir28.removeBottomMarginOfSumText] },
                            React.createElement(SumText, { testID: 'test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca', value: item.forecastSum, small: false, block: true, currency: item.currency && item.currency.code })))) :
                    (React.createElement(View, { style: StylesUFSPir28.tableCellInternalBaseTextWrapper },
                        React.createElement(Text, { testID: 'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328', style: Styles.baseText }, placeholder)))),
                React.createElement(TableCell, { testID: 'test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658' },
                    React.createElement(View, { style: [StylesUFSPir28.removeTableCellMargins, Styles.chevronTableCell] },
                        React.createElement(PopoverTarget, { testID: `test-id-515ab097-750e-80bb-cf24-8619f9dcbb0e_${index}`, refName: `displayForecastEventPopover_${index}` },
                            React.createElement(Button, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: () => {
                                    pTarget = `displayForecastEventPopover_${index}`;
                                    pPosition = [PopoverPosition.LEFT];
                                    props.performOpenForecastEventDetails(item);
                                } },
                                React.createElement(Icon, { testID: 'test-id-62430323-f434-184b-3541-ebec8a7d717d', type: IconType.MrmArrowDown }))))))));
        };
        const activeFilters = getForecastEventActiveFilters(props);
        const dynamicTableHeightStyleDependsOnFilterTagsVisibility = activeFilters.length ?
            StyleSheet.create({ tableHeight: { height: 740 - 44 - 44 - 40 - 60 } }) :
            StyleSheet.create({ tableHeight: { height: 740 - 44 - 44 - 60 } });
        const contentView = (React.createElement(View, { testID: 'test-id-26eabd79-0001-60f7-cf41-6233331e7747' },
            React.createElement(View, { testID: 'test-id-26eabd79-0001-60f7-cf41-6233331e7747', style: Styles.pageHeigthWithNavbarAndRefreshBar },
                React.createElement(View, { style: Styles.LinkContainer, testID: 'test-id-26eabd79-0001-60f7-cf41-627f501e7747' },
                    React.createElement(Button, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f501e7747', type: ButtonType.TEXT, onExecute: () => props.performForecastEventCreate(), title: '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u043E\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u0435' }),
                    React.createElement(PopoverTarget, { testID: 'test-id-515ab097-750e-80bb-cf24-8619f9dcbb0e', refName: 'createForecastEventPopover', style: Styles.popoverIndent })),
                activeFilters.length ?
                    React.createElement(View, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f501e7747', style: Styles.activeFiltersWrapper }, activeFilters.map((tagElement, index) => {
                        return (React.createElement(View, { testID: 'test-id-79187cdf-b502-4a26-1783-12769b9cf70c', style: Styles.operationListFilterLabel, key: tagElement.key },
                            React.createElement(Text, { testID: 'test-id-631a2aeb-5437-2a86-3090-2f519e7868b5', style: Styles.operationListFilterLabelText }, tagElement.label),
                            React.createElement(Button, { testID: 'test-id-a99b7de8-9077-a3ba-eacd-1aa8a3c40dd6', onExecute: () => tagElement.onClick() },
                                React.createElement(Icon, { testID: 'test-id-b5691a74-427b-8ac5-1017-6fdde30cdf12', disabled: true, type: IconType.MrmClear }))));
                    })) :
                    null,
                React.createElement(View, { style: Styles.hideRightMargin20AndScrolling },
                    React.createElement(Table, { testID: 'test-id-6d780177-50ce-159e-8f9b-68557c1943b3', style: dynamicTableHeightStyleDependsOnFilterTagsVisibility.tableHeight },
                        React.createElement(TableHead, { testID: 'test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7', style: StylesUFSPir28.tableHeadHeight },
                            React.createElement(TableColumn, { testID: 'test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47', align: TableColumnAlignment.LEFT, width: '338' },
                                React.createElement(Text, { testID: 'test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76' }, 'Дата события')),
                            React.createElement(TableColumn, { testID: 'test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47', align: TableColumnAlignment.LEFT, width: '310' },
                                React.createElement(Text, { testID: 'test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76', numberOfLines: 2, ellipsizeMode: 'tail' }, 'Тип события')),
                            React.createElement(TableColumn, { testID: 'test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47', align: TableColumnAlignment.RIGHT, width: '246' },
                                React.createElement(Text, { testID: 'test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76', numberOfLines: 2, ellipsizeMode: 'tail' }, 'Прогнозная сумма')),
                            React.createElement(TableColumn, { testID: 'test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47', align: TableColumnAlignment.CENTER, width: '44' },
                                React.createElement(Text, { testID: 'test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76', numberOfLines: 2, ellipsizeMode: 'tail' }, ''))),
                        props.forecastEventListFiltered.data.length > 0 && (React.createElement(TableBody, { testID: 'test-id-c3142ae1-666e-b550-de2f-0662330b1d1f' }, tableRowGenerator(props.forecastEventListFiltered)))),
                    props.forecastEventListFiltered.data.length === 0 && (React.createElement(View, { testID: 'test-id-36485f3e-bbb7-4c4b-ab2b-f1b44faa91df', style: Styles.searchNotFoundTextWrapper },
                        React.createElement(Text, { testID: 'test-id-417c7cde-c151-4bda-8384-4519491e5d79', style: Styles.searchNotFoundText }, 'Результатов не найдено'))))),
            React.createElement(RefreshBar, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', performRefresh: props.performForecastEventsListFlush, date: props.forecastEventListCachedDate })));
        const errorView = (React.createElement(View, { style: Styles.createForecastEventErrorWrapper },
            React.createElement(View, { style: Styles.createForecastEventMessageBlock },
                React.createElement(Text, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f500e7940', style: Styles.createForecastEventMessageBlockHeader }, 'Ошибка'),
                React.createElement(Text, { testID: 'test-id-26eabd79-5001-60f7-c041-627f500e7040' },
                    props.newForecastEventSaveError && props.newForecastEventSaveError.code
                        && Utils.getForecastEventSaveErrorComment(props.newForecastEventSaveError),
                    (props.newForecastEventSaveError &&
                        (props.newForecastEventSaveError.code ||
                            props.newForecastEventSaveError.message ||
                            props.newForecastEventSaveError.comment) &&
                        Utils.getForecastEventSaveErrorComment(props.newForecastEventSaveError)) || (props.forecastEventListError &&
                        (props.forecastEventListError.code ||
                            props.forecastEventListError.message ||
                            props.forecastEventListError.comment) &&
                        Utils.getForecastEventSaveErrorComment(props.forecastEventListError)))),
            React.createElement(View, { style: Styles.createForecastEventButtonWrapper },
                React.createElement(View, { style: Styles.createForecastEventButton },
                    React.createElement(Button, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f500e7550', onExecute: () => props.performFilterCreateEventPopupReset(), type: ButtonType.TEXT },
                        React.createElement(Text, { testID: 'test-id-26eabd79-0001-10f7-c141-627f501e7550' }, "OK"))),
                React.createElement(View, { style: [Styles.createForecastEventButton, Styles.createForecastEventButtonBorder] },
                    React.createElement(Button, { testID: 'test-id-26eabd39-0001-6047-cf41-627f500e5940', onExecute: () => props.performRepeatForecastEventSave(), type: ButtonType.TEXT },
                        React.createElement(Text, { testID: 'test-id-26eabd79-0001-61f7-cf41-6271500a7550' }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C"))))));
        return (React.createElement(View, { testID: 'test-id-26eabd79-0001-60f7-cf41-627f501e7747' },
            props.newForecastEventSaveInProgress ?
                React.createElement(View, { style: Styles.createForecastEventLoader, testID: 'test-id-26eabd70-0101-61f7-cf41-627f501e7747' },
                    React.createElement(View, { testID: 'test-id-26eabd70-0101-61f7-cf41-627f501e7747', style: Styles.contentCenter },
                        React.createElement(LoaderWithText, { text: 'Создание события...', testID: 'test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a' }))) :
                null,
            props.forecastEventListFetching ?
                React.createElement(View, { style: Styles.createForecastEventLoader, testID: 'test-id-26eabd70-0101-61f7-cf41-627f501e7747' },
                    React.createElement(View, { testID: 'test-id-26eabd70-0101-61f7-cf41-627f501e7747', style: Styles.contentCenter },
                        React.createElement(LoaderWithText, { text: 'Загрузка данных...', testID: 'test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a' }))) :
                null,
            !props.newForecastEventSaveError &&
                !props.newForecastEventSaveInProgress &&
                !props.forecastEventListFetching
                ? contentView
                : null,
            React.createElement(View, { testID: 'test-id-bbb962be-2298-b155-5b7f-c45c92f93b10' },
                React.createElement(Popover, { testID: 'test-id-141962be-2298-b155-5b7f-c45c92f93b10', target: PopoverTarget.getRef(pTarget), opened: props.isVisiblePopoverForecastEvent, onOutsideTap: props.performFilterCreateEventPopupReset, type: PopoverType.WIDE, style: { height: 600 }, position: pPosition }, getForecastEventPopupData(props))),
            React.createElement(View, { testID: 'test-id-bbb962be-2298-b155-5b7f-c45c92f93b10' },
                React.createElement(Popover, { testID: 'test-id-141962be-2298-b155-5b7f-c45c92f93b10', target: PopoverTarget.getRef('displayForecastFilterPopover'), opened: props.isVisiblePopoverFilter, onOutsideTap: props.performPopoverFilterHide, type: PopoverType.WIDE, style: { height: 400 }, position: [PopoverPosition.BOTTOM] }, getForecastEventFilter(props)))));
    };
    return (React.createElement(Page, { testID: 'test-id-9c5aaadb-4729-4182-6b5f-4c42777dbcec', scrollEnabled: false, content: contentCreditProductForecastEventList(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-672b006e-927d-da8c-167a-0ca21ea4b300' },
            React.createElement(NavigationBackButton, { testID: 'test-id-aaabccd3-a6e1-636e-0000-e14e0e80c044', title: false, onClick: () => props.navigateProductCreditBack() }),
            React.createElement(View, { testID: 'test-id-3456011e-927d-0000-167a-0ca21ea4b300', style: Styles.navigationBackButtonTextAdjustment },
                React.createElement(NavigationTextButton, { testID: 'test-id-6720011e-927d-0000-167a-0ca21ea4b300', title: 'Кредит', onExecute: () => props.navigateProductCreditBack() }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec' },
            React.createElement(H2, { testID: 'test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82' }, 'Прогнозные события')),
        React.createElement(RightPageHeader, { testID: 'test-id-9f012344c-55de-aea8-d6f8-35ecd6c0d697' },
            React.createElement(View, { testID: 'test-id-9f444344c-55de-aea8-d6f8-35ecd6c0d697', style: Styles.rightPageHeaderPaddings },
                React.createElement(PopoverTarget, { testID: `test-id-515ab097-750e-80bb-cf24-8619f9dcbb0e`, refName: `displayForecastFilterPopover` },
                    React.createElement(NavigationFilterButton, { testID: 'test-id-f9df7204-5d43-71bd-f917-86fc3f027293', onExecute: props.performPopoverFilterShow, count: getForecastEventActiveFilters(props).length }))))));
};
// Страница: информация о прогнозном событии
const PageCreditProductForecastEventDetail = (props, performFunc, navigateBack) => {
    const contentCreditProductForecastEventDetail = (contentProps) => {
        const creditProductClientName = contentProps.currentCustomerManaged && contentProps.currentCustomerManaged.name;
        const currentEvent = contentProps.currentForecastEvent;
        const eventDate = currentEvent.plannedEventDate && currentEvent.plannedEventDate.formattedString() || '';
        const possibility = Utils.eventPossibilityStringValue(currentEvent.possibility);
        const sum = currentEvent.forecastSum ? String(currentEvent.forecastSum) : '';
        const currency = currentEvent.currency && currentEvent.currency.value;
        const createdDate = currentEvent.eventCreationDate && currentEvent.eventCreationDate.formattedString() || '';
        return (React.createElement(View, { testID: 'test-id-1' },
            React.createElement(View, { testID: 'test-id-2', style: [
                    Styles.pageHeigthWithNavbarAndRefreshBar,
                    Styles.creditProductPageMainViewPaddings
                ] },
                React.createElement(Grid, { testID: 'test-id-3' },
                    React.createElement(Row, { testID: 'test-id-4' },
                        React.createElement(Col, { xs: 12, testID: 'test-id-5' },
                            React.createElement(View, { testID: 'directionRow', style: Styles.DirectionRow },
                                React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-6', label: '\u041A\u043B\u0438\u0435\u043D\u0442', text: creditProductClientName }),
                                React.createElement(View, { testID: 'info', style: Styles.ButtonInfoWrapper },
                                    React.createElement(Button, { testID: `test-id-info-button`, key: `info-button`, onExecute: () => contentProps.performCustomerOpenExecute(contentProps.currentCustomerManaged) },
                                        React.createElement(Icon, { testID: `test-id-info`, key: `info`, disabled: true, type: IconType.MrmInfo })))))),
                    React.createElement(GridRowHorizontalRule, null),
                    React.createElement(Row, { testID: 'test-id-7' },
                        React.createElement(Col, { xs: 2, testID: 'test-id-8' },
                            React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-9', label: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F', text: eventDate })),
                        React.createElement(Col, { xs: 2, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u044C', text: possibility })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(FieldSumTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430', text: sum, currency: currency })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(FieldSumTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0418\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430', text: '0', currency: currency }))),
                    React.createElement(GridRowHorizontalRule, null),
                    React.createElement(Row, { testID: 'test-id-fb794bcb-615b-fbce-3593-a23b19fd9624' },
                        React.createElement(Col, { xs: 4, testID: 'test-id-e358e512-bc8f-7c14-d377-0da0f64aa226' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u043E\u0431\u044B\u0442\u0438\u044F', text: createdDate })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041D\u043E\u043C\u0435\u0440 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430', text: currentEvent.productNum || 'Нет данных' })),
                        React.createElement(Col, { xs: 4, testID: 'test-id-398137b1-33db-8e27-ff58-abd5bcdde762' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: 'E-mail \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439', text: currentEvent.email }))),
                    React.createElement(GridRowHorizontalRule, null),
                    React.createElement(Row, { testID: 'test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476' },
                        React.createElement(Col, { xs: 12, testID: 'test-id-074204b3-1fde-5e11-70b1-2abe122d91ff' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F', text: currentEvent.comment })))))));
    };
    const updateButton = (React.createElement(RightPageHeader, { testID: 'test-id-8' },
        React.createElement(NavigationTextButton, { testID: 'test-id-9', title: 'Изменить', onExecute: () => performFunc(props.currentForecastEvent) })));
    return (React.createElement(Page, { testID: 'test-id-1', scrollEnabled: true, content: contentCreditProductForecastEventDetail(props) },
        React.createElement(LeftPageHeader, { testID: 'test-id-2' },
            React.createElement(NavigationBackButton, { testID: 'test-id-3', title: false, onClick: () => navigateBack() }),
            React.createElement(View, { testID: 'test-id-4', style: Styles.navigationBackButtonTextAdjustment },
                React.createElement(NavigationTextButton, { testID: 'test-id-5', title: 'Прогнозный продукт', onExecute: () => navigateBack() }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-6' },
            React.createElement(H2, { testID: 'test-id-7' }, props.currentForecastEvent.eventType.value))));
};
// Строка вывода прогнозного события в таблице
const productTableCell = (item, contentProps) => {
    return (React.createElement(TableRow, { key: item.id, testID: 'test-id-1', onClick: () => contentProps.performPrognosticEventDetail(item) },
        React.createElement(TableCell, { testID: 'test-id-2', style: Styles.PrognosticTableCell },
            React.createElement(View, { testID: 'test-id-3', style: Styles.PrognosticDateCell },
                React.createElement(Text, { testID: 'test-id-4', style: Styles.PrognosticCellText }, item.plannedEventDate ? item.plannedEventDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '')),
            React.createElement(View, { testID: 'test-id-5', style: Styles.PrognosticTypeCell },
                React.createElement(Text, { testID: 'test-id-6', style: Styles.PrognosticCellText }, item.eventType.value)),
            React.createElement(View, { testID: 'test-id-7', style: Styles.PrognosticSumCell },
                React.createElement(SumText, { testID: 'test-id-8', value: Number(item.forecastSum), currency: item.currency.value, block: true, small: false })),
            React.createElement(View, { testID: 'test-id-9', style: Styles.PrognosticShevronCell },
                React.createElement(Button, { testID: `test-id-${item.id}-chevron-button`, key: `${item.id}-chevron-button`, onExecute: () => contentProps.performPrognosticEventDetail(item) },
                    React.createElement(Icon, { testID: `test-id-${item.id}-chevron`, key: `${item.id}-chevron`, disabled: true, type: IconType.MrmLink }))))));
};
// Страница: информация о сделке
const PagePrognosticDealInfo = (pageProps, pageTitle) => {
    const ContentPagePrognosticDealInfo = (contentProps) => {
        const currentPrognosticDeal = contentProps.currentDeal;
        const placeholder = 'Нет данных';
        const prognosticDealClientName = contentProps.currentCustomerManaged && contentProps.currentCustomerManaged.name;
        const prognosticDealCurrency = currentPrognosticDeal.currency.value || null;
        const prognosticDealType = currentPrognosticDeal.productType.value || null;
        const prognosticDealDateBegin = currentPrognosticDeal.dateBegin ? Utils.format.date(new Date(currentPrognosticDeal.dateBegin)) : placeholder;
        const prognosticProductsRendered = [];
        contentProps.forecastEventListFiltered.data.map((item, index) => {
            prognosticProductsRendered.push(productTableCell(item, contentProps));
        });
        return (React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' },
            React.createElement(View, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', style: [
                    Styles.pageHeigthWithNavbarAndRefreshBar,
                    Styles.creditProductPageWrapper
                ] },
                React.createElement(Grid, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2' },
                    React.createElement(Row, { testID: 'test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f' },
                        React.createElement(Col, { xs: 12, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(View, { testID: 'directionRow', style: Styles.DirectionRow },
                                React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u041A\u043B\u0438\u0435\u043D\u0442', text: prognosticDealClientName }),
                                React.createElement(View, { testID: 'info', style: Styles.ButtonInfoWrapper },
                                    React.createElement(Button, { testID: `test-id-info-button`, key: `info-button`, onExecute: () => contentProps.performCustomerOpenExecute(contentProps.currentCustomerManaged) },
                                        React.createElement(Icon, { testID: `test-id-info`, key: `info`, disabled: true, type: IconType.MrmInfo })))))),
                    React.createElement(Row, { testID: 'test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f' },
                        React.createElement(Col, { xs: 12, testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84' },
                            React.createElement(FieldTextWithPaddingsInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0412\u0438\u0434 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430', text: prognosticDealType }))),
                    React.createElement(GridRowHorizontalRule, null),
                    React.createElement(Row, { testID: 'test-id-fb794bcb-615b-fbce-3593-a23b19fd9624' },
                        React.createElement(Col, { xs: 4, testID: 'test-id-e358e512-bc8f-7c14-d377-0da0f64aa226' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F', text: prognosticDealDateBegin })),
                        React.createElement(Col, { xs: 2, testID: 'test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b' },
                            React.createElement(FieldTextInGridCell, { testID: 'test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84', label: '\u0412\u0430\u043B\u044E\u0442\u0430', text: prognosticDealCurrency })))),
                React.createElement(View, { testID: 'rule', style: Styles.Rule }),
                React.createElement(View, { testID: 'header-view', style: Styles.WrapperHeader },
                    React.createElement(Text, { testID: 'headertable', style: Styles.TableHeader }, "\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u044B\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F"),
                    React.createElement(View, { testID: 'info', style: Styles.ButtonPlusWrapper },
                        React.createElement(Button, { testID: `test-id-plus-button`, key: `plus-button`, onExecute: pageProps.performPrognosticEventCreate },
                            React.createElement(Icon, { testID: `test-id-plus`, key: `plus`, disabled: true, type: IconType.MrmPlus })))),
                React.createElement(View, { testID: 'table', style: { flex: 1 } },
                    React.createElement(View, { testID: 'header', style: Styles.PrognosticDealsTableHeader },
                        React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a21qaf093ae', style: Styles.PrognosticDateCell },
                            React.createElement(Text, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9q214af093a0', style: Styles.PrognosticTableHeaderText }, "\u0414\u0430\u0442\u0430 \u0441\u043E\u0431\u044B\u0442\u0438\u044F")),
                        React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a21waf093ae', style: Styles.PrognosticTypeCell },
                            React.createElement(Text, { testID: 'test-id-1a9a9066-eaf2-11e0-80c1-9a214rf093ae', style: Styles.PrognosticTableHeaderText }, "\u0422\u0438\u043F \u0441\u043E\u0431\u044B\u0442\u0438\u044F")),
                        React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe', style: Styles.PrognosticSumCell },
                            React.createElement(Text, { testID: 'test-id-1a9a1066-eaf2-11e0-80c1-9a214ag093ae', style: Styles.PrognosticTableHeaderText }, "\u041F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430")),
                        React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe', style: Styles.PrognosticShevronCell })),
                    React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe', style: Styles.progonosticDealListWrapper },
                        React.createElement(Table, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f19', noPaddings: true, style: Styles.TablePrognosticProducts },
                            React.createElement(TableHead, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f19', style: Styles.HideDefaultHeader }),
                            React.createElement(TableBody, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f00' }, pageProps.forecastEventListFetching ?
                                React.createElement(View, { style: Styles.createForecastEventLoader, testID: 'test-id-1' },
                                    React.createElement(View, { testID: 'test-id-2', style: Styles.contentCenter },
                                        React.createElement(LoaderWithText, { text: 'Загрузка данных...', testID: 'test-id-3' }))) :
                                prognosticProductsRendered))))),
            React.createElement(RefreshBar, { testID: 'test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2', performRefresh: pageProps.performForecastEventsListFlush, date: pageProps.forecastEventListCachedDate })));
    };
    return (React.createElement(Page, { testID: 'test-id-cb9cbbef-a35e-4c46-8252-98039277b12e', scrollEnabled: false, content: React.createElement(ContentPagePrognosticDealInfo, Object.assign({}, pageProps)) },
        React.createElement(LeftPageHeader, { testID: 'test-id-09f9ffcc-79e7-4ab4-a2db-b9e869455ab6' },
            React.createElement(NavigationBackButton, { testID: 'fa4735a9-5593-46f3-8135-d1d2bed38c30', title: false, onClick: pageProps.navigateBack }),
            React.createElement(View, { style: Styles.navigationBackButtonTextAdjustment, testID: 'test-id-fb4af253-06e8-4a2a-b933-4190e0283e16' },
                React.createElement(NavigationTextButton, { testID: 'test-id-558ee189-7659-41d1-baf9-aa63f1f88e1b', title: 'Прогнозные продукты', onExecute: pageProps.navigateBack }))),
        React.createElement(CenterPageHeader, { testID: 'test-id-80fe8a44-044b-4725-a39f-c6fa1aee5f08' },
            React.createElement(H2, { testID: 'test-id-65f495a8-f0cb-4de1-93ed-30b8496e83c6' }, pageTitle))));
};
// Страница: Создание прогнозного события
const PageCreditProductForecastEventCreate = (props) => (React.createElement(Page, { testID: 'test-id-1', scrollEnabled: false, content: React.createElement(ContainerForecastEventEditor, null) },
    React.createElement(LeftPageHeader, { testID: 'test-id-2' })));
// Страница: Редактирование прогнозного события
const PageCreditProductForecastEventUpdate = (props) => (React.createElement(Page, { testID: 'test-id-1', scrollEnabled: false, content: React.createElement(ContainerForecastEventEditor, null) },
    React.createElement(LeftPageHeader, { testID: 'test-id-2' })));
const getPageProductCovenantList = (props) => (React.createElement(Page, { testID: "test-id-870d038c-195b-11e8-accf-0ed5f89f718b", content: React.createElement(ContainerProductCovenantList, { testID: 'testID-CustomerProductCreditCovenantList' }) },
    React.createElement(LeftPageHeader, { testID: 'test-id-9030ca5c-1951-11e8-accf-0ed5f89f718b' },
        React.createElement(NavigationBackButton, { testID: 'test-id-7e19ec54-195b-11e8-accf-0ed5f89f718b', title: false, onClick: () => props.navigateProductCreditBack() }),
        React.createElement(View, { testID: 'test-id-69367a50-195b-11e8-accf-0ed5f89f718b', style: Styles.navigationBackButtonTextAdjustment },
            React.createElement(NavigationTextButton, { testID: 'test-id-7a8bb5cc-195b-11e8-accf-0ed5f89f718b', title: 'Кредит', onExecute: () => props.navigateProductCreditBack() }))),
    React.createElement(CenterPageHeader, { testID: 'test-id-75fec8a0-195b-11e8-accf-0ed5f89f718b' },
        React.createElement(H2, { testID: 'test-id-672590bc0-195b-11e8-accf-0ed5f89f718b' }, 'Мониторинг исполнения ковенантов'))));
const ViewProductCredit = (props) => {
    const openedCredit = (React.createElement(SplitPanel, { testID: 'test-id-892a3e4a-cb89-833d-a1c1-a427160c08ed', id: Utils.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct) },
        React.createElement(ContentPanel, { testID: 'test-id-6ae991e8-ee21-de4d-bcfb-b5438452cd5e', style: ContentPanelBackgroundColorPureObject },
            PageCreditProductInfo(props, 'Кредит'),
            PageCreditProductForecastEventList(props),
            PageCreditProductForecastEventDetail(props, props.performForecastEventUpdate, props.navigateProductCreditBack),
            PageCreditProductForecastEventCreate(props),
            PageCreditProductForecastEventUpdate(props),
            PageCreditProductPaymentSchedule(props, 'График платежей'),
            getPageProductCovenantList(props))));
    const prognosticCredit = (React.createElement(SplitPanel, { testID: 'test-id-e5267041-1a60-485e-a484-cbbbbac0baca', id: Utils.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct) },
        React.createElement(ContentPanel, { testID: 'test-id-54e831ce-0682-4527-adc1-0148c342078f', style: ContentPanelBackgroundColorPureObject },
            PagePrognosticDealInfo(props, `${props.currentDeal && props.currentDeal.productType.value} (прогноз)`),
            PageCreditProductForecastEventDetail(props, props.performPrognosticEventUpdate, props.navigateProductCreditDealBack),
            PageCreditProductForecastEventCreate(props),
            PageCreditProductForecastEventUpdate(props))));
    return (React.createElement(View, { style: Styles.productCreditWrapper, testID: 'test-id-0f91be91-2d2b-4801-ab54-ebd02df75c71' }, props.productListAgreementStatus === Enums.ProductListAgreementStatus.Prognostic ? prognosticCredit : openedCredit));
};
export default ViewProductCredit;
{
    // @TODO: Ковенанта. Перенос функционала в релиз 2018-3
    // contentProps.covenantListFetching
    //     ? getFetchingCreditCovenantListTableRow(contentProps)
    //     : contentProps.covenantListFetchingError
    //         ? getErrorCreditCovenantListTableRow(contentProps)
    //         : getCreditCovenantListTableRow(contentProps)
}
{
    // @TODO: Прогнозные события. Перенос функционала в релиз 2018-3
    // forecastEventListFetching
    //     ? ForecastEventsClickableRowInLoadingState
    //     : forecastEventListError || (creditProduct && !creditProduct.forecastDealId)
    //         ? ForecastEventsClickableRowInErrorState
    //         : ForecastEventsClickableRowInSuccessState
}
//# sourceMappingURL=ViewProductCredit.js.map