'use strict'
/*
 * Created by Burnaev M.U.
 */

import React from 'react';

import Styles, {
    ContentPanelBackgroundColorPureObject,
    PaymentScheduleStyles,
    StylesUFSPir28,
} from './styles/ViewProductCreditStyles';

import {
    Button,
    ButtonType,
    Center,
    CenterPageHeader,
    Checkbox,
    Col,
    ContentPanel,
    DateInput,
    DateInputTypes,
    Grid,
    H2,
    HorizontalRule,
    Icon,
    IconType,
    KeyboardType,
    Label,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationFilterButton,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    NumberInput,
    Page,
    Popover,
    PopoverPosition,
    PopoverType,
    RadioButton,
    RadioGroup,
    RightPageHeader,
    Row,
    SplitPanel,
    StyleSheet,
    SumText,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableColumnAlignment,
    TableHead,
    TableRow,
    Text,
    Textarea,
    TextInput,
    View,
} from 'ufs-mobile-platform';

import {
    DatePicker,
    InfoButton,
    TouchableOpacity,
} from 'mrmkmcib-ui';

import {
    AlertView,
    DateRangePicker,
    ErrorModal,
    ExtendedTable,
    ExtendedTableCell,
    LabelWithPopover,
    LoaderWithText,
    Models as ModelsApp,
    RefreshBar,
} from 'mrmkmcib-app';
import {
    ContainerForecastEventEditor,
    Models,
    SelectClassifier as SelectClassifierCrm,
} from 'mrmkmcib-crm';

import {defaultValues} from '../models/Models';
import {Models as ModelsScheduler} from 'mrmkmcib-scheduler';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
import * as ModelsProductCredit from '../models/ModelsProductCredit';
import * as ModelsProductList from '../models/ModelsProductList';
import {Enums} from '../Enums';
import * as Utils from '../common/Util';
import moment from 'moment';
import PopoverTarget from '../modules/PopoverTarget';
import PopoverSingle from '../modules/PopoverSingle';
import ContainerProductCovenantList from '../containers/ContainerProductCovenantList'

// Глобалки для указания поповеру target и position
let pTarget = 'createForecastEventPopover'
let pPosition = [PopoverPosition.BOTTOM]
const PLACEHOLDER = 'Нет данных'
const LOADING_TEXT = 'Загрузка...'
const ERROR_MESSAGE = 'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.'
const ERROR_MESSAGE_DEAL = 'Не удалось загрузить данные по прогнозным сделкам. Попробуйте снова или обратитесь в службу поддержки.'
const editableCreditTypes = ['ВЫДАЧА_K_Т', 'ГАШЕНИЕ_K_T', 'ГАШЕНИЕ_П_K_T']
const generatedID = Utils.getRandomOperationUuid()

const getEventTypeChoiceData = (props:IProps):ModelsApp.ClassifierList => {
    return {
        data: Utils.filterClassifierData(props.classifierDictionary.UFS_FC_EVENT_TYPE.data, [
            {code: 'ВЫДАЧА_K_Т'},
            {code: 'ГАШЕНИЕ_K_T'}
        ])
    }
}

const getForecastEventTypeChoice = (props:IProps) => {
    return (
        <SelectClassifierCrm
            testID='test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8d'
            classifierList={getEventTypeChoiceData(props)}
            performSelect={props.performInputForecastEventType}
            selectedCode={props.inputForecastEventType && props.inputForecastEventType.code}
        />
    )
}

interface ILabeledText {
    block?: boolean,
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',
    label: string,
    numberOfLines?: number,
    testID: string,
    text?: string | null,
}
const LabeledText: React.StatelessComponent<ILabeledText> = ({
    block = true,
    ellipsizeMode = 'tail', // По умолчанию длинный текст обрезается и добавляются ... в конец текста
    label,
    numberOfLines = 1, // По умолчанию текст в одну строку
    testID,
    text = PLACEHOLDER, // Если данных нет, то выводим плейсходер. Обычно это 'Нет данных'
}: ILabeledText): React.ReactElement<Page> => (
    <Label
        testID={`${testID}_LTVPC_L`}
        header={''}
        text={label}
        block={block} >
        <Text
            testID={`${testID}_LTVPC_T`}
            ellipsizeMode={ellipsizeMode}
            numberOfLines={numberOfLines} >
            {
                text || PLACEHOLDER // На случай, если придёт text = null
            }
        </Text>
    </Label>
)

interface IGridCellContent {
    children?: JSX.Element,
    testID: string,
}
const GridCellContent: React.StatelessComponent<IGridCellContent> = ({children, testID}: IGridCellContent): React.ReactElement<View> => (
    <View
        testID={`${testID}_GCC_V`}
        style={StylesUFSPir28.GridRowHideExtraMargins}>
        {
            children
        }
    </View>
)

const FieldTextWithPaddingsInGridCell: React.StatelessComponent<ILabeledText> = (fieldProps: ILabeledText): React.ReactElement<View> => (
    <GridCellContent
        testID={`${fieldProps.testID}_FTWPIGC_GCC`}>
        <View
            testID={`${fieldProps.testID}__FTWPIGC_V`}
            style={Styles.baseTextInTableCellAdjustments}>
            <LabeledText
                label={fieldProps.label}
                testID={`${fieldProps.testID}_FTWPIGC_LT`}
                text={fieldProps.text}/>
        </View>
    </GridCellContent>
)

const FieldTextInGridCell: React.StatelessComponent<ILabeledText> = (fieldProps: ILabeledText): React.ReactElement<View> => (
    <GridCellContent
        testID={`${fieldProps.testID}_FTIGC`}>
        <LabeledText
            label={fieldProps.label}
            testID={`${fieldProps.testID}_FTIGC_LT`}
            text={fieldProps.text}/>
    </GridCellContent>
)

interface IFieldSumTextInGridCell extends ILabeledText {
    currency?: string | null
}
const FieldSumTextInGridCell: React.StatelessComponent<IFieldSumTextInGridCell> = (fieldProps: IFieldSumTextInGridCell): React.ReactElement<View> => (
    <GridCellContent
        testID={`${fieldProps.testID}_FTIGC`}>
        <SumText
            label={fieldProps.label}
            testID={`${fieldProps.testID}_ST`}
            value={Number(fieldProps.text)}
            small={false}
            currency={
                fieldProps.currency
                    ? fieldProps.currency
                    : ''
            }/>
    </GridCellContent>
)

export const GridRowHorizontalRule = () => (
    <Row testID='test-id-5509ff44-5b5f-0f14-3289-a44978ddf3e4'>
        <Col xs={12}
             testID='test-id-6609ff44-5b5f-0f14-3289-a44978ddf3e4'>
            <View style={[
                StylesUFSPir28.GridRowHideExtraMargins,
                {marginTop: -15}
            ]}>
                <HorizontalRule testID='test-id-7709ff44-5b5f-0f14-3289-a44978ddf3e4'/>
            </View>
        </Col>
    </Row>
)
interface ISelectClassifierProps {
    classifierList: ModelsApp.ClassifierList;
    selectedCode: string | undefined;
    testID: string;
    performSelect(value: ModelsApp.Classifier): void;
}
const SelectClassifier: React.StatelessComponent<ISelectClassifierProps> = ({
    classifierList,
    selectedCode,
    testID,
    performSelect
}: ISelectClassifierProps) => (
    <RadioGroup
        testID='test-id-9054a30a-43d9-7150-d21e-c9b2b62b0979'
        value={selectedCode}
        onChange={
            (index: number, value: string) => performSelect(classifierList.data[index])
        } >
        {
            classifierList.data
                .map((classifierItem: ModelsApp.Classifier) => (
                    <RadioButton
                        testID={`test-id-b915294d-16cc-bb9b-e848-89be70954ffe-${classifierItem.code}`}
                        key={`radio-${classifierItem.code}`}
                        value={classifierItem.code}
                        label={`${classifierItem.value} (${classifierItem.code})`} />
                ))
        }
    </RadioGroup>
)

const getForecastEventCurrencyChoice = (props: IProps) => {
    return (
        <SelectClassifier
            testID='test-id-49bff0c1-fa34-2ea0-26c9-e3a48d2d5c45'
            classifierList={props.classifierDictionary.CURRENCY}
            performSelect={props.performInputForecastEventCurrency}
            selectedCode={props.inputForecastEventCurrency && props.inputForecastEventCurrency.code} />
    );
}

const getForecastEventPossibility = (props: IProps) => {

    return (
        <RadioGroup
            testID='test-id-43754701-34f0-b5ce-2185-71f2867a299f'
            onChange={(index: number, value: string) => {
                const possibility = Number(value)
                props.performInputForecastEventPossibility(possibility)
            }}
            value={String(props.inputForecastEventPossibility)}>
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={'key-possibility-25'}
                value={'0.25'}
                label={'25%'}
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={'key-possibility-50'}
                value={'0.5'}
                label={'50%'}
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={'key-possibility-75'}
                value={'0.75'}
                label={'75%'}
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={'key-possibility-100'}
                value={'1'}
                label={'100%'}
            />
        </RadioGroup>
    )
}

const getForecastEventCreatePage: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    let eventSum = ''
    if (props.inputForecastEventSum != null) {
        eventSum = props.inputForecastEventSum
    }

    // Вывод ошибок под кастомными non-UFS полями
    const showError: React.StatelessComponent<string> = (errorText: string): React.ReactElement<View> => (
        <View
            testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
            style={[Styles.fieldErrorView, {flex: 1, flexDirection: 'row'}]} >
            <Text
                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                style={Styles.fieldErrorText} >
                {errorText}
            </Text>
        </View>
    )

    // Поле 'Тип события'
    const rowForecastEventType: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow
            testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
            onClick={ innerProps.navigateToForecastEventTypPickerScreen } >
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View style={Styles.tableCellInnerRowView}>
                    <View
                        testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                        style={[StylesUFSPir28.removeTableCellMargins, Styles.pseudoInputFieldView]} >
                        <View
                            testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                            style={Styles.pseudoInputWithChevron} >
                            <View
                                testID='test-id-7086098d-29f4-a905-5555-dc2a3ea63fec'
                                style={[Styles.ChevronBottomVerticalAlign, Styles.CommonChevronWidth]} >
                                <Button
                                    testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                                    onExecute={innerProps.navigateToForecastEventTypPickerScreen} >
                                    <Icon
                                        testID='test-id-62430323-f434-184b-3541-ebec8a7d717d'
                                        disabled
                                        type={IconType.MrmLink}/>
                                </Button>
                            </View>
                            <View
                                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                style={Styles.pseudoInputDataWrapper} >
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                    style={Styles.pseudoInputLabel} >
                                    <Text
                                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                        style={!!props.inputValidationForecastEventType ? Styles.fieldErrorLabel : Styles.captionText} >
                                        {'Тип события'}
                                    </Text>
                                </View>
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                    style={Styles.pseudoInputValue} >
                                    <Text
                                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                        style={Styles.baseText} >
                                        {innerProps.inputForecastEventType && innerProps.inputForecastEventType.value}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        { props.inputValidationForecastEventType && showError(props.inputValidationForecastEventType) }
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );

    // Поле 'Дата события'
    const rowForecastEventDate: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'>
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View
                    testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                    style={[Styles.main, StylesUFSPir28.removeTableCellMargins]} >
                    <View
                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                        style={[Styles.main, Styles.pseudoInputDataWrapper]} >
                        <View
                            testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                            style={Styles.pseudoInputLabel} >
                            <Text
                                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                style={Styles.captionText} >
                                {'Дата события'}
                            </Text>
                        </View>
                        <View
                            testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                            style={Styles.nonViewComponentsAdjustments} >
                            <DatePicker
                                testID='test-id-4386ea03-6271-1700-d5ec-f93073722e18'
                                date={innerProps.inputForecastEventDate && new Date(innerProps.inputForecastEventDate) || new Date()}
                                mode={'date'}
                                onDateChange={(date: Date) => innerProps.performInputForecastEventDate(date)}
                                label={' '}
                                icon={IconType.MrmCalendar}
                                drawDateInsteadOfLabel={true}
                            />
                        </View>
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );

    // Поле 'Вероятность'
    const rowForecastEventPossibility: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow
            testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
            onClick={ innerProps.navigateToForecastEventPossibilityPickerScreen } >
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View style={Styles.tableCellInnerRowView}>
                    <View
                        testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                        style={[StylesUFSPir28.removeTableCellMargins, Styles.pseudoInputFieldView]} >
                        <View
                            testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                            style={Styles.pseudoInputWithChevron} >
                            <View
                                testID='test-id-7086098d-29f4-a905-5555-dc2a3ea63fec'
                                style={[Styles.ChevronBottomVerticalAlign, Styles.CommonChevronWidth]} >
                                <Button
                                    testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                                    onExecute={innerProps.navigateToForecastEventPossibilityPickerScreen} >
                                    <Icon
                                        testID='test-id-62430323-f434-184b-3541-ebec8a7d717d'
                                        disabled
                                        type={IconType.MrmLink}/>
                                </Button>
                            </View>
                            <View
                                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                style={Styles.pseudoInputDataWrapper} >
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                    style={Styles.pseudoInputLabel} >
                                    <Text
                                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                        style={Styles.captionText} >
                                        {'Вероятность'}
                                    </Text>
                                </View>
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                    style={Styles.pseudoInputValue} >
                                    <Text
                                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                        style={Styles.baseText} >
                                        {Utils.eventPossibilityStringValue(innerProps.inputForecastEventPossibility)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        { /*props.inputValidationForecastEventPossibility && showError(props.inputValidationForecastEventPossibility)*/ }
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );

    // Поле 'Валюта'
    const rowForecastEventCurrency: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow
            testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
            onClick={ innerProps.navigateToForecastEventCurrencyPickerScreen } >
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View style={Styles.tableCellInnerRowView}>
                    <View
                        testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                        style={[StylesUFSPir28.removeTableCellMargins, Styles.pseudoInputFieldView]} >
                        <View
                            testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                            style={Styles.pseudoInputWithChevron} >
                            <View
                                testID='test-id-7086098d-29f4-a905-5555-dc2a3ea63fec'
                                style={[Styles.ChevronBottomVerticalAlign, Styles.CommonChevronWidth]} >
                                <Button
                                    testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                                    onExecute={innerProps.navigateToForecastEventCurrencyPickerScreen} >
                                    <Icon
                                        testID='test-id-62430323-f434-184b-3541-ebec8a7d717d'
                                        disabled
                                        type={IconType.MrmLink}/>
                                </Button>
                            </View>
                            <View
                                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                style={Styles.pseudoInputDataWrapper} >
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                    style={Styles.pseudoInputLabel} >
                                    <Text
                                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                        style={Styles.captionText} >
                                        {'Валюта'}
                                    </Text>
                                </View>
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                    style={Styles.pseudoInputValue} >
                                    <Text
                                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                        style={Styles.baseText} >
                                        {innerProps.inputForecastEventCurrency && innerProps.inputForecastEventCurrency.code || ''}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        { /*props.inputValidationForecastEventCurrency && showError(props.inputValidationForecastEventCurrency) */}
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );



    // Поле 'Прогнозная сумма'
    const rowForecastEventSum: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => {

        const validationErrorSummText = typeof props.inputValidationForecastEventSumm === 'string' ? props.inputValidationForecastEventSumm : undefined

        return (
            <TableRow testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'>
                <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                    <View style={Styles.tableCellInnerRowView}>
                        <View
                            testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                            style={StylesUFSPir28.removeTableCellMargins} >
                            <View
                                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                style={Styles.pseudoInputDataWrapper} >
                                <View
                                    testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63gec'
                                    style={Styles.leftMarginForTextInput}>
                                    <NumberInput
                                        testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                        fractionalDigitsCount={0}
                                        value={eventSum}
                                        label={'Прогнозная сумма'}
                                        maxLength={24}
                                        hasError={!!validationErrorSummText}
                                        errorText={validationErrorSummText}
                                        onChange={(value) => {
                                            innerProps.performInputForecastEventSum(value)
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </TableCell>
            </TableRow>
        )
    }

    // Поле 'E-mail для отправки уведомлений'
    const rowForecastEventEmail: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => {

        const validationEmailErrorText = typeof props.inputValidationForecastEventEmail === 'string' ? props.inputValidationForecastEventEmail : undefined

        return (
            <TableRow testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'>
                <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                    <View style={Styles.tableCellInnerRowView}>
                        <View
                            testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                            style={StylesUFSPir28.removeTableCellMargins} >
                            <View
                                testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                                style={[Styles.pseudoInputDataWrapper, Styles.leftMarginForEmail]} >
                                <TextInput
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    value={innerProps.inputForecastEventEmail}
                                    keyboardType={KeyboardType.Email}
                                    label='E-Mail для отправки уведомлений'
                                    placeholder=''
                                    hasError={!!validationEmailErrorText}
                                    errorText={validationEmailErrorText}
                                    onChange={innerProps.performInputForecastEventEmail}
                                />
                            </View>
                        </View>
                    </View>
                </TableCell>
            </TableRow>
        )
    };

    // Поле 'Полное погашение'
    const rowForecastEventFullRepayment: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'>
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View
                    testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                    style={StylesUFSPir28.removeTableCellMargins} >
                    <View
                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea63fec'
                        style={StylesUFSPir28.nonViewComponentsAdjustmentsForCheckBox} >
                        <Checkbox
                            testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                            checked={innerProps.inputFullRepayment}
                            label={'Полное погашение'}
                            onChange={innerProps.performInputFullRepayment}
                        />
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );

    // Поле 'Инфо' для случая полного погашения кредита
    const rowForecastEventFullRepaymentNotice: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow
            testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
            style={[ Styles.rowForecastEventFullRepaymentNoticeTableRow ]} >
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View
                    testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                    style={StylesUFSPir28.removeTableCellMargins} >
                    <View testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'>
                        <View
                            testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                            style={Styles.FullRepaymentEditContainer} >
                            <Text
                                testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                style={Styles.FullRepaymentText} >
                                {'При полном досрочном погашении сумма рассчитывается автоматически.'}
                            </Text>
                            <Text
                                style={Styles.FullRepaymentTextPaddingTop}
                                testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e' >
                                {'Прогнозные события по договору будут пересчитаны.'}
                            </Text>
                        </View>
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );

    // Поле 'Примечания'
    const rowForecastEventComments: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<TableRow> => (
        <TableRow testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'>
            <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                <View
                    testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                    style={[StylesUFSPir28.removeTableCellMargins]} >
                    <View
                        testID='test-id-7086098d-29f4-a905-7777-dc2a3ea65fec'
                        style={Styles.nonViewComponentsAdjustments} >
                        <Textarea
                            testID='test-id-70860aad-29f4-a905-7777-dc2a3ea64fec'
                            value={innerProps.inputForecastEventComment}
                            label={'Примечания'}
                            placeholder={''}
                            onChange={innerProps.performInputForecastEventComment}
                        />
                    </View>
                </View>
            </TableCell>
        </TableRow>
    );


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
    const isRepayment: boolean = !!(props.inputForecastEventType && props.inputForecastEventType.code === 'ГАШЕНИЕ_K_T')
    const isFullRepayment: boolean = (isRepayment && props.inputFullRepayment)
    const isNotFullRepayment: boolean = (isRepayment && !props.inputFullRepayment)
    const isTypeUndefined: boolean = !props.inputForecastEventType
    const isGrantingOrUndefined: boolean = (props.inputForecastEventType &&
        props.inputForecastEventType.code === 'ВЫДАЧА_K_Т') || isTypeUndefined

    return (
        <View style={StylesUFSPir28.removeTableRightMargin}>
            <Table testID='test-id-7086098d-29f4-a905-1111-dc2a3ea63fec'>
                <TableBody testID='test-id-7086098d-29f4-2222-078e-dc2a3ea63fec'>
                    { rowForecastEventType(props) }
                    { rowForecastEventDate(props) }
                    { rowForecastEventPossibility(props) }
                    { isRepayment && rowForecastEventFullRepayment(props) }
                    { isFullRepayment && rowForecastEventFullRepaymentNotice(props)}
                    { (isGrantingOrUndefined) && rowForecastEventCurrency(props) }
                    { (isGrantingOrUndefined || isNotFullRepayment) && rowForecastEventSum(props) }
                    { rowForecastEventEmail(props) }
                    { isGrantingOrUndefined && rowForecastEventComments(props) }
                </TableBody>
            </Table>
        </View>
    )
}

const getForecastEventDisplayPage: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных';
    return (
        <View
            testID='test-id-aaaabbbb-c102-e8dc-78f9-9a5fedc174b9'
            style={Styles.main} >
            <Table testID='test-id-7086098d-29f4-a905-1111-dc2a3ea63fec'>
                <TableBody testID='test-id-7086098d-29f4-2222-078e-dc2a3ea63fec'>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Дата события'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {props.currentForecastEvent.plannedEventDate != null ? Utils.format.date(props.currentForecastEvent.plannedEventDate) : placeholder}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Вероятность'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {
                                            props.currentForecastEvent.possibility != null ?
                                                Utils.eventPossibilityStringValue(props.currentForecastEvent.possibility) : placeholder
                                        }
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Валюта'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {props.currentForecastEvent.currency != null ? props.currentForecastEvent.currency.code : placeholder}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Прогнозная сумма'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {props.currentForecastEvent.forecastSum != null ? parseFloat('' + props.currentForecastEvent.forecastSum) : placeholder}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Исполненная сумма'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {'0' /*FIXME убрать хардкод, пока не знаю, где брать значение*/}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Дата создания события'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {props.currentForecastEvent.eventCreationDate != null ? Utils.format.date(props.currentForecastEvent.eventCreationDate) : placeholder}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Номер кредитного договора'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        { props.currentForecastEvent && props.currentForecastEvent.productNum ? props.currentForecastEvent.productNum : placeholder}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'E-mail для отправки уведомлений'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {props.currentForecastEvent.email != null ? props.currentForecastEvent.email : placeholder}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        testID='test-id-7086098d-29f4-a905-3333-dc2a3ea63fec'
                        onClick={() => {/*  */}} >
                        <TableCell testID='test-id-7086098d-29f4-a905-4444-dc2a3ea63fec'>
                            <View
                                testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                                style={Styles.editPopoverTypeRow} >
                                <Label
                                    testID='test-id-c2f20078-ae8b-4392-8376-8757d27ea140'
                                    text={'Примечания'}
                                    block={false}
                                    header={'q'} >
                                    <Text testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                                        {props.currentForecastEvent.comment != null ? props.currentForecastEvent.comment : ''}
                                    </Text>
                                </Label>
                            </View>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </View>
    )
}


const getForecastFilterEventDateType = (props:IProps) => {

    return (
        <View testID='test-id-43754701-34f0-b5ce-2185-71f2867a290f'
        style={Styles.forecastFilterContentWrapper}>
        <RadioGroup
            testID='test-id-43754701-34f0-b5ce-2185-71f2867a299f'
            value={props.inputFilterPeriodType.toString()}
            onChange={ (index: number) => {
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
                }} >
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={ 'key-period-credit-finish' }
                value={ Enums.ForecastPeriodType.CreditFinish.toString() }
                label={ Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.CreditFinish) }
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={ 'key-period-next-30' }
                value={ Enums.ForecastPeriodType.Next30Days.toString() }
                label={ Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next30Days) }
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={ 'key-period-next-60' }
                value={ Enums.ForecastPeriodType.Next60Days.toString() }
                label={ Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next60Days) }
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={ 'key-period-next-90' }
                value={ Enums.ForecastPeriodType.Next90Days.toString() }
                label={ Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next90Days) }
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={ 'key-period-next-180' }
                value={ Enums.ForecastPeriodType.Next180Days.toString() }
                label={ Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Next180Days) }
            />
            <RadioButton
                testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                key={ 'key-period-custom-period' }
                value={ Enums.ForecastPeriodType.Custom.toString() }
                label={ props.inputFilterPeriodType === Enums.ForecastPeriodType.Custom && props.inputFilterPeriodStart && props.inputFilterPeriodEnd && `${Utils.format.date(props.inputFilterPeriodStart)} - ${Utils.format.date(props.inputFilterPeriodEnd)}`
                    || Utils.eventFilterPeriodStringValue(Enums.ForecastPeriodType.Custom) }
            />
        </RadioGroup>
        </View>
    )
}

const getForecastFilterEventType = (props:IProps) => {

    return (
        <View testID='test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8a'
        style={Styles.forecastFilterContentWrapper}>
        <SelectClassifierCrm
            testID='test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8d'
            classifierList={getEventTypeChoiceData(props)}
            performSelect={props.performInputFilterForecastEventType}
            selectedCode={props.inputFilterForecastEventType && props.inputFilterForecastEventType.code}
        />
        </View>
    )
}

const getForecastFilterEventCustomDate = (props:IProps): React.ReactElement<DateRangePicker> => (
    <DateRangePicker
        testID='test-id-4386ea03-6271-1700-d5ec-f93073722e18'
        mode={'date'}
        valueStart={props.inputFilterPeriodStart || new Date()}
        onChangeStart={props.performInputFilterPeriodStart}
        labelStart={'Начало'}
        valueEnd={props.inputFilterPeriodEnd || new Date()}
        onChangeEnd={props.performInputFilterPeriodEnd}
        labelEnd={'Конец'}
    />
)

const getForecastFilterDisplayPage: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View
            testID='test-id-aaaabbbb-c102-e8dc-78f9-9a5fedc174b9'
            style={Styles.forecastFilterContentWrapper} >
            <View testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'>
                <View
                    testID='test-id-0a8edb0d-233c-7bb1-c932-50e9134cfdae'
                    style={Styles.forecastFilterDisplayPageRowWrapper}>
                    <View
                        testID='test-id-c28dd924-1e3d-69dc-2be5-9b2bd2ccc7e5'
                        style={Styles.forecastFilterDisplayPagePeriodHeaderWrapper} >
                        <Text
                            testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'
                            style={Styles.forecastFilterDisplayPageRowHeaderText}>
                            {'Период'}
                        </Text>
                    </View>
                    <View
                        testID='test-id-7cceadc9d-95c9-400f-a9aa-117a0c6282d3'
                        style={Styles.forecastFilterDisplayPageRowValueWrapper}>
                        <View
                        testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'
                        style={Styles.forecastFilterDisplayPageRowValue}>
                            <Text
                                testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'
                                style={Styles.forecastFilterDisplayPageRowValueText}>
                                {props.inputFilterPeriodType === Enums.ForecastPeriodType.Custom && props.inputFilterPeriodStart && props.inputFilterPeriodEnd
                                && `${Utils.format.date(props.inputFilterPeriodStart)} - ${Utils.format.date(props.inputFilterPeriodEnd)}`
                                || Utils.eventFilterPeriodStringValue(props.inputFilterPeriodType)}
                            </Text>
                        </View>
                        <View style={Styles.forecastFilterDisplayPageButton} testID='test-id-7086098d-29f4-a905-078e-dc2a3ea63fec'>
                            <Button
                                testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                                onExecute={() => {props.navigateToForecastEventFilterPeriodScreen()}} >
                                <Icon
                                    testID='test-id-62430323-f434-184b-3541-ebec8a7d717d'
                                    disabled
                                    type={IconType.MrmLink}/>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
            <View testID='test-id-b3636761-02e0-4c22-b2a5-194ea477b5f7' >
                <View
                    testID='test-id-e9773b0b-9b55-475c-8072-fcbbbb17de70'
                    style={Styles.forecastFilterDisplayPageRowWrapper} >
                    <View
                        testID='test-id-deb83b16-3e42-4e4a-867e-96d9f4adc93a'
                        style={Styles.forecastFilterDisplayPageTypeHeaderWrapper} >
                        <Text
                            testID='test-id106af9bc-9711-424e-9f2e-1d452a811f9d'
                            style={Styles.forecastFilterDisplayPageRowHeaderText}>
                            {'Тип события'}
                        </Text>
                    </View>
                    <View
                        testID='test-id-9ec196e8-e62e-41b8-8d94-030f713fb720'
                        style={Styles.forecastFilterDisplayPageRowValueWrapper}>
                        <View
                            testID='test-id-a0a83aaf-23cb-4571-9313-33ea729db871'
                            style={Styles.forecastFilterDisplayPageRowValue}>
                            <Text
                                testID='test-id809dcea5-ac95-42f5-b6a1-3a28ae56edcc'
                                style={Styles.forecastFilterDisplayPageRowValueText}>
                                {props.inputFilterForecastEventType && props.inputFilterForecastEventType.value}
                            </Text>
                        </View>
                        <View style={Styles.forecastFilterDisplayPageButton} testID='test-id-4c13aaf0-4145-4e74-8304-ab744c716160'>
                            <Button
                                testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                                onExecute={() => {props.navigateToForecastEventFilterTypePickerScreen()}} >
                                <Icon
                                    testID='test-id-62430323-f434-184b-3541-ebec8a7d717d'
                                    disabled
                                    type={IconType.MrmLink}/>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

interface IForecastEventTagItem {
    key: string;
    label: string;
    onClick: () => void;
}

const getForecastEventActiveFilters = (props: IProps): IForecastEventTagItem[] => {

    const countActiveFilters = []
    if (props.inputActiveFilterPeriodType !== Enums.ForecastPeriodType.CreditFinish) {
        countActiveFilters.push({
            key: 'key-filter-tag-period',
            label: props.inputActiveFilterPeriodType === Enums.ForecastPeriodType.Custom && props.inputActiveFilterPeriodStart && props.inputActiveFilterPeriodEnd?`${Utils.format.date(props.inputActiveFilterPeriodStart)} - ${Utils.format.date(props.inputActiveFilterPeriodEnd)}`:Utils.eventFilterPeriodStringValue(props.inputActiveFilterPeriodType),
            onClick: () => props.performFilterPeriodReset()
        })
    }

    if (props.inputActiveFilterForecastEventType) {
        countActiveFilters.push({
            key: 'key-filter-tag-type',
            label: props.inputActiveFilterForecastEventType.value,
            onClick: () => props.performFilterEventTypeReset()
        })
    }

    return countActiveFilters
}

const getForecastEventFilter: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {


    return (
        <View
            testID='test-id-aaaabbbb-c102-e8dc-78f9-9a5fcde174b9'
            style={Styles.main} >
            <SplitPanel
                testID='test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9'
                id={Utils.getNavigationContentCreditForecastEventFilterPopup(
                    Enums.NavigationAppCRMCreditForecastEvent_Filter.AppCRM_Filter
                )}>
                <ContentPanel
                    testID='test-id-03049819-1a36-ae91-a7d5-7de341988c2d'
                    style={Styles.forecastEventFilter} >
                    <Page
                        testID='test-id-9e1a8410-1b14-b74c-726a-78e11934d75d'
                        scrollEnabled={true}
                        content={ getForecastFilterDisplayPage(props) } >
                        <LeftPageHeader testID='test-id-38bb8a3f-da31-af7f-2057-f50a28736747'>
                            <NavigationTextButton
                                testID='test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6'
                                title={'Сбросить'}
                                onExecute={props.performFilterReset}
                            />
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec'>
                            <H2 testID='test-id-02250251-9402-e2e8-7319-2c18681420af'>
                                {'Фильтры событий'}
                            </H2>
                        </CenterPageHeader>

                        <RightPageHeader testID='test-id-38bb8a3f-da31-af7f-2057-f50a28736747'>
                            <NavigationTextButton
                                testID='test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6'
                                title={'Применить'}
                                onExecute={props.performFilterApply}
                            />
                        </RightPageHeader>
                    </Page>
                    <Page
                        testID='test-id-9e1a8410-1b14-b74c-726a-78e11934d75d'
                        scrollEnabled={true}
                        content={ getForecastFilterEventDateType(props) } >
                        <CenterPageHeader testID='test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec'>
                            <H2 testID='test-id-02250251-9402-e2e8-7319-2c18681420af'>
                                {'Период'}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                    <Page
                        testID='test-id-9e1a8410-1b14-b74c-726a-78e11934d75d'
                        scrollEnabled={true}
                        content={ getForecastFilterEventCustomDate(props) } >
                        <CenterPageHeader testID='test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec'>
                            <H2 testID='test-id-02250251-9402-e2e8-7319-2c18681420af'>
                                {'Выбор периода'}
                            </H2>
                        </CenterPageHeader>

                        <RightPageHeader testID='test-id-38bb8a3f-da31-af7f-2057-f50a28736747'>
                            <NavigationTextButton
                                testID='test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6'
                                title={'Готово'}
                                onExecute={props.performFilterCustomDateApply}
                            />
                        </RightPageHeader>
                    </Page>
                    <Page
                        testID='test-id-9e1a8410-1b14-b74c-726a-78e11934d75d'
                        scrollEnabled={true}
                        content={ getForecastFilterEventType(props) } >
                        <CenterPageHeader testID='test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec'>
                            <H2 testID='test-id-02250251-9402-e2e8-7319-2c18681420af'>
                                {'Тип события'}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        </View>
    )
}

const getForecastEventPopupData: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    const popoverKey = Enums.NavigationAppCRMCreditProduct_CreateEventPopup.AppCRM_CreateEditEvent;

    const displayForecastEventContent = (
        <View
            testID='test-id-aaaabbbb-c102-e8dc-78f9-9a5fcde174b9'
            style={Styles.main} >
            <SplitPanel
                testID='test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9'
                id={Utils.getNavigationContentCreditProductCreatePopup(popoverKey) /*FIXME: non-unique id*/ } >
                <ContentPanel
                    testID='test-id-03049819-1a36-ae91-a7d5-7de341988c2d'
                    style={ContentPanelBackgroundColorPureObject} >
                    <Page
                        testID='test-id-9e1a8410-1b14-b74c-726a-78e11934d75d'
                        scrollEnabled={true}
                        content={getForecastEventDisplayPage(props)} >
                        <LeftPageHeader testID='test-id-38bb8a3f-da31-af7f-2057-f50a28736747'>
                            <NavigationTextButton
                                testID='test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6'
                                title={'Отмена'}
                                onExecute={props.performPopoverForecastEventHide} />
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec'>
                            <H2
                                testID='test-id-02250251-9402-e2e8-7319-2c18681420af'
                                numberOfLines={1}>
                                {props.currentForecastEvent.eventType && props.currentForecastEvent.eventType.value.ellipsis(30)}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        </View>
    );

    const newForecastEventForm = (
        <View style={Styles.main}>
            <SplitPanel
                testID='test-id-21694eb7-c102-e8dc-78f9-9a5fcde174b9'
                id={Utils.getNavigationContentCreditProductCreatePopup(popoverKey) /*FIXME: non-unique id*/ } >
                <ContentPanel
                    testID='test-id-03049819-1a36-ae91-a7d5-7de341988c2d'
                    style={ContentPanelBackgroundColorPureObject} >
                    <Page
                        testID='test-id-9e1a8410-1b14-b74c-726a-78e11934d75d'
                        scrollEnabled={true}
                        content={getForecastEventCreatePage(props)} >
                        <LeftPageHeader testID='test-id-38bb8a3f-da31-af7f-2057-f50a28736747'>
                            <NavigationTextButton
                                testID='test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6'
                                title={'Отмена'}
                                onExecute={ props.performFilterCreateEventPopupReset } />
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-76eaf397-2e82-53c8-ba87-f307e60b2dec'>
                            <H2 testID='test-id-02250251-9402-e2e8-7319-2c18681420af'>
                                {'Новое событие'}
                            </H2>
                        </CenterPageHeader>
                        <RightPageHeader testID='test-id-38bb8a3f-da31-af7f-2057-f50a28736747'>
                            <NavigationTextButton
                                testID='test-id-47e4336e-ea87-14c6-973e-0c0c7f4adea6'
                                title={'Готово'}
                                onExecute={props.performForecastEventSave}/>
                        </RightPageHeader>
                    </Page>
                    <Page
                        testID='test-id-977caa31-b65f-8c12-6bf3-52e43010821c'
                        scrollEnabled={true}
                        content={getForecastEventTypeChoice(props)} >
                        <CenterPageHeader
                            testID='test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7'>
                            <H2 testID='test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7'>
                                {'Тип события'}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                    <Page
                        testID='test-id-977caa31-b65f-8c12-6bf3-52e43010821c'
                        scrollEnabled={true}
                        content={getForecastEventPossibility(props)} >
                        <CenterPageHeader testID='test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7'>
                            <H2 testID='test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7'>
                                {'Вероятность'}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                    <Page
                        testID='test-id-977caa31-bccc-8c12-6bf3-52e43010821c'
                        scrollEnabled={true}
                        content={getForecastEventCurrencyChoice(props)} >
                        <CenterPageHeader testID='test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7'>
                            <H2 testID='test-id-21580919-1ad3-1c98-4b6c-b07cd7dd02b7'>
                                {'Валюта'}
                            </H2>
                        </CenterPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        </View>
    );

    // FIXME временное решение для демо, надо по-другому определять наличие текущего форекаста
    if (props.currentForecastEvent.plannedEventDate != null) {
        return displayForecastEventContent;
    } else {
        return newForecastEventForm;
    }
}

/**
 * Страница продукта "Кредит"
 *
 * @param props Все свойства типа IProps (ниже), который приходят во ViewProductCredit
 *
 */
const getPageCreditProductContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const placeholder = 'Нет данных';
    const {creditProduct} = props.currentCreditProduct;

    const NO_DATA_LABEL = (title: string): React.ReactElement<Label> => (
        <Label
            testID={`${title}-test-id-09189384-0843-2a58-4e48-5be2f0e50f30`}
            header={''}
            block={true}
            text={title}>
            <Text
                testID={`${title}-'test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328`}>
                { placeholder }
            </Text>
        </Label>
    )
    // Поля 'Клиент' и 'Название продукта'
    // INFO: между ними отступ 20px
    const fieldClientNameAndProductName: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <View style={Styles.fieldClientNameAndProductNameBottomAndTopMargins}>
                <Label
                    testID='test-id-df2f6035-1a20-73dd-d6b0-811eae86909d'
                    header={''}
                    text={'Клиент'}
                    block={true} >
                    <Text testID='test-id-d1289c55-94a9-0a36-9292-e1e03d85f6cd'>
                        {Utils.displayCustomerWithLegalForm(innerProps.currentCustomerManaged)}
                    </Text>
                </Label>
            </View>
            <View>
                <Label
                    testID='test-id-df2f6035-1a20-73dd-d6b0-811eae86909d'
                    header={''}
                    text={'Название продукта'}
                    block={true} >
                    <Text testID='test-id-d1289c55-94a9-0a36-9292-e1e03d85f6cd'>
                        {creditProduct && creditProduct.nameClassifier && creditProduct.nameClassifier.value ? creditProduct.nameClassifier.value : placeholder}
                    </Text>
                </Label>
            </View>
        </View>
    );

    // Поле 'Ставка'
    const fieldProductRate: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <Label
                testID='test-id-5935f79f-bee6-da0a-c888-a86c3533987e'
                header={''}
                text={'Ставка'}
                block={true} >
                <Text testID='test-id-c7e7dbad-39ec-78e2-8edf-70098257402c'>
                    {creditProduct && creditProduct.rate ? `${creditProduct.rate} %` : placeholder}
                </Text>
            </Label>
        </View>
    );

    // Поле 'Срок'
    const fieldProductTerm: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <Label
                testID='test-id-09189384-0843-2a58-4e48-5be2f0e50f30'
                header={''}
                text={'Срок (дней)'}
                block={true} >
                <Text testID='test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328'>
                    {creditProduct && creditProduct.term ? (
                            `${ creditProduct.term } `
                        ) : (
                            `${ placeholder }`
                        )}
                </Text>
            </Label>
        </View>
    );

    // Поле 'Сумма кредита'
    const fieldProductSum: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<SumText | Label> => (
        creditProduct && creditProduct.sum != null ?
            <SumText
                label='Сумма кредита'
                testID='test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca'
                value={Number(creditProduct.sum)}
                small={false}
                currency={creditProduct && creditProduct.currencyClassifier ? creditProduct.currencyClassifier.code : placeholder}/>
            : NO_DATA_LABEL('Сумма кредита')
    )
    // Поле 'Осталось погасить (основной долг и просрочка)'
    const fieldProductDebtSum: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        creditProduct && creditProduct.debtSum != null ?
            <SumText
                label="Полная сумма задолжности"
                testID='test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca'
                value={Number(creditProduct.debtSum)}
                small={false}
                currency={creditProduct && creditProduct.currencyClassifier ? creditProduct.currencyClassifier.code : placeholder} />
            : NO_DATA_LABEL('Осталось погасить(основной долг и просрочка)')
    )


    // Поле 'Дата договора'
    const fieldProductContractOpenDate: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <Label
                testID='test-id-75ef73bc-2ba1-35ca-5300-e3821040994c'
                header={''}
                text={'Дата договора'}
                block={true} >
                <Text testID='test-id-66ae4589-faa2-36ec-a507-13b140c466c9'>
                    {creditProduct && creditProduct.openDate && Utils.format.date(creditProduct.openDate) || placeholder}
                </Text>
            </Label>
        </View>
    );

    // Поле 'Дата окончания'
    const fieldProductContractCloseDate: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <Label
                testID='test-id-dcb82a30-2e0a-0747-ec9e-e301ed2ebc10'
                header={''}
                text={'Дата окончания'}
                block={true} >
                <Text testID='test-id-487a4e29-3c3e-0b4e-d07c-3c8c40366e6d'>
                    {creditProduct && creditProduct.closeDate && Utils.format.date(creditProduct.closeDate) || placeholder}
                </Text>
            </Label>
        </View>
    );

    // Поле 'Номер договора'
    const fieldProductContractNumber: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <Label
                testID='test-id-b5f6c4b2-c63e-eec6-c240-906d3548e1a2'
                header={''}
                text={'Номер договора'}
                block={true} >
                <Text testID='test-id-5db4903a-5e75-d0a3-f539-78a2c8e1659c'>
                    {creditProduct && creditProduct.contractNumber || placeholder}
                </Text>
            </Label>
        </View>
    );

    // Поле 'Статус договора'
    const fieldProductContractStatus: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View style={StylesUFSPir28.GridRowHideExtraMargins}>
            <Label
                testID='test-id-b5f6c4b2-c63e-eec6-c240-906d3548e1a2'
                header={''}
                text={'Статус договора'}
                block={true} >
                <Text testID='test-id-5db4903a-5e75-d0a3-f539-78a2c8e1659c'>
                    {creditProduct && creditProduct.status ? Utils.productCreditStatus(creditProduct.status) : placeholder}
                </Text>
            </Label>
        </View>
    );

    // Поле 'Прогнозирование событий по кредиту' в статусе 'Загрузка'
    const renderBottomLoader: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View
            testID='test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b'
            style={[
                Styles.fieldBottomInfoRowView,
                StylesUFSPir28.fieldBottomInfoRowView,
                Styles.fetchForecatEventsBackgroundColor,
                Styles.renderBottomLoader,
            ]} >
            <View style={Styles.renderBottomLoaderTextWrapper}>
                <Text
                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                    style={Styles.fetchForecatEventsLoadingText}>
                    {'Загрузка...'}
                </Text>
            </View>
            <View
                testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                style={Styles.main} >
                <Text
                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                    style={[Styles.baseText, Styles.baseTextInTableCellAdjustments]}>
                    {'Прогнозирование событий по кредиту'}
                </Text>
            </View>
        </View>
    )

    // Поле 'Прогнозирование событий по кредиту' в случае ошибки загрузки прогнозных событий.
    // INFO: Свёрстано таблицей для кликабельности всей строки
    const renderBottomError: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View
            testID='test-id-20fa97dc-44d8-0e19-cccc-0751cf903e0b'
            style={[Styles.fieldBottomInfoRowView, StylesUFSPir28.fieldBottomInfoRowView]} >
            <Table testID='test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b'>
                <TableBody testID='test-id-20fa97ab-44d8-0e19-ce7b-0751cf903e0b'>
                    <TableRow
                        testID='test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b'
                        onClick={props.performRefreshForecast} >
                        <TableCell testID='test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b'>
                            <View
                                testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                style={[Styles.CreditLinkRow, Styles.productCovenantTableCellView]} >
                                <View style={Styles.bottomError}>
                                    <NavigationIconButton
                                        testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599'
                                        type={NavigationIconButtonType.REFRESH}
                                        onExecute={props.performRefreshForecast} />
                                </View>
                                <View
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                    style={Styles.main} >
                                    <Text
                                        testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                                        style={[Styles.baseText, {marginBottom: 4, marginTop: 10}]}>
                                        {'Прогнозирование событий по кредиту'}
                                    </Text>
                                    <Text
                                        testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                                        style={[Styles.fetchForecatEventsErrorText, {marginBottom: 14}]}>
                                        {'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.'}
                                    </Text>
                                </View>
                            </View>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </View>
    );

    // Поле 'Прогнозирование событий по кредиту' в случае успешной загрузки прогнозных событий.
    // INFO: Свёрстано таблицей для кликабельности всей строки
    const renderBottomInfoRow: React.StatelessComponent<IProps> = (innerProps: IProps): React.ReactElement<View> => (
        <View
            testID='test-id-20fa97dc-44d8-0e19-cccc-0751cf903e0b'
            style={[Styles.fieldBottomInfoRowView, StylesUFSPir28.fieldBottomInfoRowView]} >
            <Table testID='test-id-20fa97dc-44d8-0e19-ce7b-0751cf903e0b'>
                <TableBody testID='test-id-20fa97ab-44d8-0e19-ce7b-0751cf903e0b'>
                    <TableRow
                        testID='test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b'
                        onClick={() => innerProps.navigateToForecastScreen()} >
                        <TableCell testID='test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b'>
                            <View
                                testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                style={Styles.CreditLinkRow}>
                                <View
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                    style={[Styles.renderBottomInfoRowMainTextViewWidth, Styles.baseTextInTableCellAdjustments]} >
                                    <Text
                                        testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                                        style={Styles.baseText}>
                                        {'Прогнозирование событий по кредиту'}
                                    </Text>
                                </View>
                                <View
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                    style={Styles.CreditLinkRowDelimiter} >
                                </View>
                                <View
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                    style={Styles.CreditLinkRowInfo} >
                                    <Text
                                        testID='test-id-20fa97bb-aad8-0bb9-ce7b-0751cf903e0b'
                                        ellipsizeMode={'tail'}
                                        style={Styles.CreditLinkRowInfoText} >
                                        {Utils.getEarlyForecastEventInfo(props.forecastEventList)}
                                    </Text>
                                </View>
                                <View
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b'
                                    style={Styles.CommonChevronWidth} >
                                    <Button
                                        testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599'
                                        onExecute={() => innerProps.navigateToForecastScreen()} >
                                        <Icon
                                            testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a7333ea600'
                                            disabled
                                            type={IconType.MrmLink}
                                        />
                                    </Button>
                                </View>
                            </View>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </View>
    );

    return creditProduct ? (
            <View
                testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                style={Styles.creditProductPageMainViewPaddings} >
                <Grid testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
                    <Row testID='test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f'>
                        <Col xs={12}
                             testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                            { fieldClientNameAndProductName(props) }
                        </Col>
                    </Row>
                    <Row testID='test-id-3309ff44-5b5f-0f14-3289-a44978ddf3e4'>
                        <Col xs={12}
                             testID='test-id-4409ff44-5b5f-0f14-3289-a44978ddf3e4'>
                            <View style={StylesUFSPir28.GridRowHideExtraMargins}>
                                <HorizontalRule testID='test-id-aa09ff44-5b5f-0f14-3289-a44978ddf3e4'/>
                            </View>
                        </Col>
                    </Row>
                    <Row testID='test-id-fb794bcb-615b-fbce-3593-a23b19fd9624'>
                        <Col xs={2}
                             testID='test-id-e358e512-bc8f-7c14-d377-0da0f64aa226'>
                            { fieldProductRate(props) }
                        </Col>
                        <Col xs={2}
                             testID='test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b'>
                            { fieldProductTerm(props) }
                        </Col>
                        <Col xs={4}
                             testID='test-id-398137b1-33db-8e27-ff58-abd5bcdde762'>
                            { fieldProductSum(props) }
                        </Col>
                        <Col xs={4}
                             testID='test-id-398137b1-33db-8e27-ff58-abd5bcdde762'>
                            { fieldProductDebtSum(props) }
                        </Col>
                    </Row>
                    <Row testID='test-id-5509ff44-5b5f-0f14-3289-a44978ddf3e4'>
                        <Col xs={12}
                             testID='test-id-6609ff44-5b5f-0f14-3289-a44978ddf3e4'>
                            <View style={StylesUFSPir28.GridRowHideExtraMargins}>
                                <HorizontalRule testID='test-id-7709ff44-5b5f-0f14-3289-a44978ddf3e4'/>
                            </View>
                        </Col>
                    </Row>
                    <Row testID='test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476'>
                        <Col xs={2}
                             testID='test-id-074204b3-1fde-5e11-70b1-2abe122d91ff'>
                            { fieldProductContractOpenDate(props) }
                        </Col>
                        <Col xs={2}
                             testID='test-id-7b862656-701b-d2a2-908e-21da8d427f98'>
                            { fieldProductContractCloseDate(props) }
                        </Col>
                        <Col xs={4}
                             testID='test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118'>
                            { fieldProductContractNumber(props) }
                        </Col>
                        <Col xs={4}
                             testID='test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118'>
                            { fieldProductContractStatus(props) }
                        </Col>
                    </Row>
                    {
                        creditProduct.isActiveAgreement ?
                            (<Row testID='test-id-d6fafdfe-1e22-4b9f-66d5-f0ab4e716ce1'>
                                <Col xs={12}
                                     testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b'>
                                    <View style={StylesUFSPir28.GridRowHideExtraMargins}>
                                        { props.forecastEventListFetching ? renderBottomLoader(props) : null }
                                        { props.forecastEventListError ? renderBottomError(props) : null }
                                        { !props.forecastEventListFetching && !props.forecastEventListError ? renderBottomInfoRow(props) : null }
                                    </View>
                                </Col>
                            </Row>) : null
                    }
                </Grid>
            </View>) :
        ( <View testID='test-id-26eabd79-731a-60f7-cf41-627f501e7747' /> );
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
const PageCreditProductPaymentSchedule = (pageProps: IProps, pageTitle: string) => {
    const testID = 'test-id-26eabd70-0101-61f7-cf41-62777788874733'
    const paymentScheduleListFiltered = pageProps.paymentScheduleListFiltered

    const inputsPaymentScheduleFilterOperationType = {
        inputPaymentScheduleFilterOperCodeCred: pageProps.inputPaymentScheduleFilterOperCodeCred,
        inputPaymentScheduleFilterOperCodeProc: pageProps.inputPaymentScheduleFilterOperCodeProc,
        inputPaymentScheduleFilterOperCodeOther: pageProps.inputPaymentScheduleFilterOperCodeOther,
    }

    const inputsPaymentScheduleFilterStatus = {
        inputPaymentScheduleFilterStatusNotPay: pageProps.inputPaymentScheduleFilterStatusNotPay,
        inputPaymentScheduleFilterStatusForPay: pageProps.inputPaymentScheduleFilterStatusForPay,
        inputPaymentScheduleFilterStatusExecPay: pageProps.inputPaymentScheduleFilterStatusExecPay,
    }


    const performPaymentScheduleAlertViewHandleOk = Utils.isHandlerFunctionOk(pageProps.paymentScheduleAlternativeScenariosType) ?
    pageProps.performPaymentScheduleAlertViewHandleOk : null

    const performPaymentScheduleAlertViewHandleCancel = Utils.isHandlerFunctionCancel(pageProps.paymentScheduleAlternativeScenariosType) ?
        pageProps.performPaymentScheduleAlertViewHandleCancel : null

    const performPaymentScheduleErrorViewHandleRepeat = Utils.isHandlerFunctionRepeat(pageProps.paymentScheduleAlternativeScenariosType) ?
        pageProps.performPaymentScheduleErrorViewHandleRepeat : null

    /**
     * Верхний блок страницы. Содержание: клиент, название продукта и номер договора
     */
    const blockInfo = () => {
        const {creditProduct} = pageProps.currentCreditProduct;

        // Клиент
        const creditProductClientName: string | null = pageProps.currentCustomerManaged && pageProps.currentCustomerManaged.name
        // Название продукта
        const creditProductName: string | null = creditProduct && creditProduct.nameClassifier && creditProduct.nameClassifier.value
        // Номер договора
        const creditProductContractNumber: string | null = creditProduct && creditProduct.contractNumber || null
        // ID клиента
        const creditProductClienID: string | null = pageProps.currentCustomerManaged && pageProps.currentCustomerManaged.id

        return (
            <View
                testID={'blockInfo_View'}
                style={PaymentScheduleStyles.infoBlockViewWrapper}>
                <Grid testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid`}>
                    <Row testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1`}>
                        <Col xs={12}
                            testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col`}>
                            <View
                                testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col`}
                                style={PaymentScheduleStyles.infoBlockViewWrapperViewGridRow}>
                                <FieldTextWithPaddingsInGridCell
                                    testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell`}
                                    label='Клиент'
                                    text={
                                        creditProductClientName
                                    } />
                                <View
                                    testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell_View`}
                                    style={PaymentScheduleStyles.infoBlockViewFieldTextWithPaddingsInGridCel}>
                                    <Button
                                        testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell_Button`}
                                        onExecute={
                                            () => pageProps.performCustomerOpen(pageProps.currentCustomerManaged)
                                        } >
                                        <Icon
                                            testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col_FieldTextWithPaddingsInGridCell_Button_Icon`}
                                            type={IconType.MrmInfo} />
                                    </Button>
                                </View>
                            </View>
                        </Col>
                    </Row>
                </Grid>
                <View style={Styles.WrapperHeader}>
                    <View style={Styles.ProductName}>
                        <FieldTextWithPaddingsInGridCell
                            testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col1_FieldTextWithPaddingsInGridCell`}
                            label='Название продукта'
                            text={
                                creditProductName
                            } />
                    </View>
                    <View style={Styles.ContractNumber}>
                        <FieldTextWithPaddingsInGridCell
                            testID={`${testID}_PaymentScheduleTopInfoBlock_View_Grid_Row1_Col2_FieldTextWithPaddingsInGridCell`}
                            label='Номер договора'
                            text={
                                creditProductContractNumber
                            } />
                    </View>
                </View>
            </View>
        )
    }

    /**
     * Сплошное подчеркивание от края до края
     */
    const blockHr = () => (
        <View
            testID='test-id-e358e512-bc8f-7c14-d377-0da0f64aa226'
            style={PaymentScheduleStyles.horizontalLineFullWidth} >
        </View>
    )

    /**
     * Блок фильтров "Период", "Тип операции" и "Статус"
     */
    const blockFilters = () => {
        /**
         * Фильтр "Период"
         */
        const filterPeriod = () => (
            <View
                testID={`${testID}_PSF_View`}
                style={PaymentScheduleStyles.filterBlockWrapper} >
                <TouchableOpacity onPress={pageProps.performPopoverPaymentSchedulePeriodFilterShow} activeOpacity={1}>
                    <View
                        testID={`${testID}_PSF_View_View`}
                        style={PaymentScheduleStyles.filterLabelWrapper}>
                        <Text
                            testID={`${testID}_PSF_View_View_Text`}
                            style={Styles.GreyLabel}>
                            {
                                'Период'
                            }
                        </Text>
                    </View>
                    <View
                        testID={`${testID}_PSF_TableCellContent`}
                        style={PaymentScheduleStyles.filterBlockTableCellContent} >
                        <View
                            testID={`${testID}_PSF_TCellContent_View`}
                            style={PaymentScheduleStyles.filterBlockTableValue}>
                            <Text
                                testID={`${testID}_PSF_TCellContent_View_Text`}
                                style={Styles.baseText}>
                                {
                                    pageProps.inputPaymentScheduleFilterPeriodStartApplied &&
                                    pageProps.inputPaymentScheduleFilterPeriodEndApplied &&
                                    [
                                        Utils.format.date(pageProps.inputPaymentScheduleFilterPeriodStartApplied),
                                        Utils.format.date(pageProps.inputPaymentScheduleFilterPeriodEndApplied)
                                    ].join(' - ')
                                }
                            </Text>
                        </View>
                        <View
                            testID={`${testID}_PSF_TCellContent_View2`}
                            style={PaymentScheduleStyles.filterBlockTableIcon}>
                            <PopoverTarget
                                testID={`${testID}_PSF_TCellContent_View2_PTarget`}
                                refName={'PaymentScheduleFilterPeriod_PopoverTarget'} >
                                <View>
                                    <Button
                                        testID={`${testID}_PSF_TCellContent_View2_PTarget_Button`}
                                        onExecute={
                                            pageProps.performPopoverPaymentSchedulePeriodFilterShow
                                        } >
                                        <Icon
                                            testID={`${testID}_PSF_TCellContent_View2_PTarget_Button_Icon`}
                                            type={IconType.MrmCalendar} />
                                    </Button>
                                </View>
                            </PopoverTarget>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )

        /**
         * Фильтр "Тип операции"
         */
        const filterType = () => (
            <View
                testID={`${testID}_PSF_View`}
                style={PaymentScheduleStyles.filterBlockWrapper} >
                <TouchableOpacity onPress={pageProps.performPopoverPaymentScheduleOperationTypeFilterShow} activeOpacity={1}>
                <View
                    testID={`${testID}_PSF_View_View`}
                    style={PaymentScheduleStyles.filterLabelWrapper}>
                    <Text
                        testID={`${testID}_PSF_View_View_Text`}
                        style={Styles.GreyLabel}>
                        {
                            'Тип операции'
                        }
                    </Text>
                </View>
                <View
                    testID={`${testID}_PSF_TableCellContent`}
                    style={PaymentScheduleStyles.filterBlockTableCellContent} >
                    <View
                        testID={`${testID}_PSF_TCellContent_View`}
                        style={PaymentScheduleStyles.filterBlockTableValue}>
                        <Text
                            testID={`${testID}_PSF_TCellContent_View_Text`}
                            style={Styles.baseText}>
                            {
                                Utils.getPaymentScheduleFilterTypeText(
                                    pageProps.inputPaymentScheduleFilterOperCodeOtherApplied,
                                    pageProps.inputPaymentScheduleFilterOperCodeProcApplied,
                                    pageProps.inputPaymentScheduleFilterOperCodeCredApplied,
                                )
                            }
                        </Text>
                    </View>
                    <View
                        testID={`${testID}_PSF_TCellContent_View2`}
                        style={PaymentScheduleStyles.filterBlockTableIcon}>
                        <PopoverTarget
                            testID={`${testID}_PSF_TCellContent_View2_PTarget`}
                            refName={`PaymentScheduleFilterOperationType_PopoverTarget`} >
                            <View>
                                <Button
                                    testID={`${testID}_PSF_TCellContent_View2_PTarget_Button`}
                                    onExecute={
                                        pageProps.performPopoverPaymentScheduleOperationTypeFilterShow
                                    } >
                                    <Icon
                                        testID={`${testID}_PSF_TCellContent_View2_PTarget_Button_Icon`}
                                        type={IconType.MrmArrowDown} />
                                </Button>
                            </View>
                        </PopoverTarget>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        )

        /**
         * Фильтр "Статус"
         */
        const filterStatus = () => (
            <View
                testID={`${testID}_PSF_View`}
                style={PaymentScheduleStyles.filterBlockWrapper} >
                <TouchableOpacity onPress={pageProps.performPopoverPaymentScheduleStatusFilterShow} activeOpacity={1}>
                <View
                    testID={`${testID}_PSF_View_View`}
                    style={PaymentScheduleStyles.filterLabelWrapper}>
                    <Text
                        testID={`${testID}_PSF_View_View_Text`}
                        style={Styles.GreyLabel}>
                        {
                            'Статус'
                        }
                    </Text>
                </View>
                <View
                    testID={`${testID}_PSF_TableCellContent`}
                    style={PaymentScheduleStyles.filterBlockTableCellContent} >
                    <View
                        testID={`${testID}_PSF_TCellContent_View`}
                        style={PaymentScheduleStyles.filterBlockTableValue}>
                        <Text
                            testID={`${testID}_PSF_TCellContent_View_Text`}
                            style={Styles.baseText}>
                            {
                                Utils.getPaymentScheduleFilterStatusText(
                                    pageProps.inputPaymentScheduleFilterStatusExecPayApplied,
                                    pageProps.inputPaymentScheduleFilterStatusForPayApplied,
                                    pageProps.inputPaymentScheduleFilterStatusNotPayApplied,
                                )
                            }
                        </Text>
                    </View>
                    <View
                        testID={`${testID}_PSF_TCellContent_View2`}
                        style={PaymentScheduleStyles.filterBlockTableIcon}>
                        <PopoverTarget
                            testID={`${testID}_PSF_TCellContent_View2_PTarget`}
                            refName={'PaymentScheduleFilterStatus_PopoverTarget'} >
                            <View>
                                <Button
                                    testID={`${testID}_PSF_TCellContent_View2_PTarget_Button`}
                                    onExecute={
                                        pageProps.performPopoverPaymentScheduleStatusFilterShow
                                    } >
                                    <Icon
                                        testID={`${testID}_PSF_TCellContent_View2_PTarget_Button_Icon`}
                                        type={IconType.MrmArrowDown} />
                                </Button>
                            </View>
                        </PopoverTarget>
                    </View>
                </View>
                </TouchableOpacity>
            </View>
        )

        /**
         * Контент блока фильтров
         */
        return (
            <View
                testID={`${testID}_PaymentScheduleFiltersBlock_View`}
                style={PaymentScheduleStyles.filtersBlock} >
                {
                    filterPeriod()
                }
                {
                    filterType()
                }
                {
                    filterStatus()
                }

            </View>
        )
    }

    /**
     * Блок таблицы с данными графика платежей
     */
    const blockTable = () => {

        const tableRowsGenerate = (list: Models.PaymentScheduleList): Array<React.ReactElement<TableRow>> => {
            let tableRows = list.data.map((item: Models.PaymentSchedule, index: number) => (
                <TableRow
                    key={`${index}`}
                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50bbbb'
                    >
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'>
                            <View
                                testID='stub'
                                style={PaymentScheduleStyles.operDateTableCell}>
                                <Text
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd'
                                    style={Styles.baseText}>
                                    {
                                        item.operDate != null ? Utils.format.date(item.operDate) : PLACEHOLDER
                                    }
                                </Text>
                            </View>
                        </ExtendedTableCell>
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'>
                        </ExtendedTableCell>
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'>
                            <View
                                testID='stub'
                                style={PaymentScheduleStyles.operNameTableCell}>
                                <Text
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd'
                                    style={Styles.baseText}>
                                    {
                                        item.operName != null ? item.operName : PLACEHOLDER
                                    }
                                </Text>
                                { item.operCode === Enums.ProductCreditPaymentScheduleOperCode.proc ? // Если 'Погашение процентов'
                                    <Text
                                        testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd'
                                        style={[Styles.sumCaptionText, PaymentScheduleStyles.operNameTableCellText]}>
                                        {
                                            item.chargeBegin != null &&  item.chargeEnd != null ?
                                                `c ${Utils.format.date(item.chargeBegin)} по ${Utils.format.date(item.chargeEnd)}` : PLACEHOLDER
                                        }
                                    </Text> : null
                                }
                            </View>
                        </ExtendedTableCell>
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'></ExtendedTableCell>
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'>
                            <View style = {[
                                    StylesUFSPir28.calculatedTopMarginForSumTextInsideTableCell,
                                    StylesUFSPir28.removeBottomMarginOfSumText,
                                    PaymentScheduleStyles.operSumTableCell,
                                ]}>
                                <SumText
                                    testID='test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca'
                                    value={Number(item.operSum)}
                                    small={false}
                                    block={true}
                                    currency={'RUB'} />
                            </View>
                        </ExtendedTableCell>
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'></ExtendedTableCell>
                        <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc'>
                            <View
                                testID='stub'
                                style={PaymentScheduleStyles.statusTableCell}>
                                <Text
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50abcd'
                                    style={[Styles.baseText,
                                        item.status != null && item.status.toString() == Enums.ProductCreditPaymentScheduleStatus[Enums.ProductCreditPaymentScheduleStatus.notPay].toString() ?
                                            { color: '#dc4a46' } :
                                            { color: '#000000' }
                                    ]}>
                                    {
                                        item.status != null ? Utils.getPaymentScheduleStatusName(item.status.toString()) : null
                                    }
                                </Text>
                            </View>
                        </ExtendedTableCell>
                </TableRow>
            ))

            const getLoaderWithinTableRow = (): React.ReactElement<View> => (
                <View
                    style={PaymentScheduleStyles.LoaderWithinTableRow}
                    testID='test-id-26eabd70-0101-61f7-cf41-627f501e7747-01'>
                        <Loader testID='test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-03' />
                </View>
            )

            const getLoadMoreButton = (): React.ReactElement<View> => (
                <View
                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-08'
                    style={PaymentScheduleStyles.loadMorePaymentsButtonWrapper}
                    >
                    <Button
                        testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-06'
                        type={ButtonType.TEXT}
                        onExecute={ () => { pageProps.performPaymentScheduleLoadMore() } }>
                        <Text testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-07'>
                            {
                                'Загрузить еще платежи'
                            }
                        </Text>
                    </Button>
                </View>
            )

            // Последняя строка таблицы (скроллится вместе с таблицей):
            // - кнопка LoadMore (Загрузить еще платежи),
            // - Loader.
            tableRows.push(
                <TableRow
                    key={tableRows.length.toString()}
                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50bbbb'
                    >
                    <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-01'/>
                    <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-02'/>
                    <ExtendedTableCell testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50cccc-03'>
                        {pageProps.paymentScheduleListLoadMoreFetching ?
                            getLoaderWithinTableRow() :
                            getLoadMoreButton()
                        }
                    </ExtendedTableCell>
                </TableRow>
            )
            return tableRows
        } // tableRowsGenerate()

        const dataTable = ():React.ReactElement<ExtendedTable>  => {
            return (
                <ExtendedTable
                    testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'
                    style={PaymentScheduleStyles.tableHeight}
                    >
                    <TableHead
                        testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                        style={PaymentScheduleStyles.tableHeadHeight}
                        >
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'138'}>
                            <Text testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'>{'Дата операции'}</Text>
                        </TableColumn>
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'20'}>
                        </TableColumn>
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'370'/*'355'*/}>
                            <Text testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'>{'Тип операции'}</Text>
                        </TableColumn>
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'20'}>
                        </TableColumn>
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'214'}>
                            <Text testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'>{'Сумма'}</Text>
                        </TableColumn>
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'20'}>
                        </TableColumn>
                        <TableColumn
                            testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8b'
                            width={'138'}>
                            <Text testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'>{'Статус'}</Text>
                        </TableColumn>
                    </TableHead>
                    <TableBody testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa8c'>
                        {tableRowsGenerate(paymentScheduleListFiltered)}
                    </TableBody>
                </ExtendedTable>
            )
        } // dataTable()

        return dataTable()

    } // blockTable()

    /**
     * Контент страницы "График платежей"
     */
    const pageContent = () => {

        const popoverFilterPeriod = () => (
            <SplitPanel
                testID='test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924'
                id={'paymentSchedulePeriodFilterSplitPanelId'} >
                <ContentPanel
                    testID='test-id-c2acf614-0097-d72f-73c3-9d6836a90252'
                    style={PaymentScheduleStyles.popoverContentPanel} >
                    <Page
                        testID='test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4'
                        scrollEnabled={true}
                        content={
                            <View style={Styles.main}>
                                <Text
                                    testID={`${testID}_PSF_View_View_Text`}
                                    style={[Styles.GreyLabel, PaymentScheduleStyles.datePickerGrayLabelAdjustments]}>
                                    {
                                        'Дата «с»'
                                    }
                                </Text>
                                <DatePicker
                                    testID='test-id-4386ea03-6271-1700-d5ec-f93073722e18'
                                    label={'Дата «с»'}
                                    date={pageProps.inputPaymentScheduleFilterPeriodStart}
                                    mode={'date'}
                                    isExpanded={pageProps.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker}
                                    onDateChange={ (date: Date) => pageProps.performInputPaymentScheduleFilterPeriodStart(date) }
                                    onClickIcon={
                                        () =>
                                            pageProps.performPopoverPaymentSchedulePeriodSwitchDatePicker(true)
                                    }
                                    icon={IconType.MrmCalendar}
                                    drawDateInsteadOfLabel={true}
                                />
                                <Text
                                    testID={`${testID}_PSF_View_View_Text`}
                                    style={[Styles.GreyLabel, PaymentScheduleStyles.datePickerGrayLabelAdjustments]}>
                                    {
                                        'Дата «по»'
                                    }
                                </Text>
                                <DatePicker
                                    testID='test-id-4386ea03-6271-1700-d5ec-f93073722e18'
                                    label={'Дата «по»'}
                                    date={pageProps.inputPaymentScheduleFilterPeriodEnd}
                                    mode={'date'}
                                    isExpanded={!pageProps.isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker}
                                    onDateChange={ (date: Date) => pageProps.performInputPaymentScheduleFilterPeriodEnd(date) }
                                    onClickIcon={
                                        () =>
                                            pageProps.performPopoverPaymentSchedulePeriodSwitchDatePicker(false)
                                    }
                                    icon={IconType.MrmCalendar}
                                    drawDateInsteadOfLabel={true}
                                />
                            </View>
                        }>
                        <LeftPageHeader testID='test-id-e136773b-3284-2a76-a8fc-01673fb8624c'>
                            <NavigationTextButton
                                testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                                title={'Сбросить'}
                                onExecute={() => { pageProps.performPaymentScheduleFilterPeriodReset() }}
                            />
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'>
                            <H2 testID='test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82'>
                                {'Выбор периода'}
                            </H2>
                        </CenterPageHeader>
                        <RightPageHeader testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'>
                            <NavigationTextButton
                                testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                                title={'Применить'}
                                onExecute={() => { pageProps.performPaymentScheduleFilterPeriodSave() }}
                            />
                        </RightPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        )
        const popoverFilterOperationType = () => (
            <SplitPanel
                testID='test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924'
                id={'paymentScheduleOperationTypeFilterSplitPanelId'} >
                <ContentPanel
                    testID='test-id-c2acf614-0097-d72f-73c3-9d6836a90252'
                    style={PaymentScheduleStyles.popoverContentPanel} >
                    <Page
                        testID='test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4'
                        scrollEnabled={false}
                        content={
                            <View style={Styles.main}>
                                <Checkbox
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    checked={pageProps.inputPaymentScheduleFilterOperCodeCred}
                                    label={'Погашение кредита'}
                                    disabled={
                                        Utils.isDisabledCheckboxPaymentScheduleFilter (
                                            inputsPaymentScheduleFilterOperationType,
                                            'inputPaymentScheduleFilterOperCodeCred',
                                        )
                                    }
                                    onChange={
                                        pageProps.performinputPaymentScheduleFilterOperCodeCred
                                    }
                                />
                                <Checkbox
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    checked={pageProps.inputPaymentScheduleFilterOperCodeProc}
                                    label={'Погашение процентов'}
                                    disabled={
                                        Utils.isDisabledCheckboxPaymentScheduleFilter (
                                            inputsPaymentScheduleFilterOperationType,
                                            'inputPaymentScheduleFilterOperCodeProc',
                                        )
                                    }
                                    onChange={
                                        pageProps.performinputPaymentScheduleFilterOperCodeProc
                                    }
                                />
                                <Checkbox
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    checked={pageProps.inputPaymentScheduleFilterOperCodeOther}
                                    label={'Прочие платежи'}
                                    disabled={
                                        Utils.isDisabledCheckboxPaymentScheduleFilter (
                                            inputsPaymentScheduleFilterOperationType,
                                            'inputPaymentScheduleFilterOperCodeOther',
                                        )
                                    }
                                    onChange={
                                        pageProps.performinputPaymentScheduleFilterOperCodeOther
                                    }
                                />
                            </View>
                        }>
                        <LeftPageHeader testID='test-id-e136773b-3284-2a76-a8fc-01673fb8624c12'>
                            <NavigationTextButton
                                testID='test-id-6720011e-927d-0000-167a-0ca21ea4b30012'
                                title={'Сбросить'}
                                onExecute={() => { pageProps.performPaymentScheduleFilterOperationTypeReset() }}
                            />
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'>
                            <H2 testID='test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82'>
                                {'Тип операции'}
                            </H2>
                        </CenterPageHeader>
                        <RightPageHeader testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'>
                            <NavigationTextButton
                                testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                                title={'Применить'}
                                onExecute={() => { pageProps.performPaymentScheduleFilterOperationTypeSave()  }}
                            />
                        </RightPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        )
        const popoverFilterStatus = () => (
            <SplitPanel
                testID='test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924'
                id={'paymentScheduleStatusFilterSplitPanelId'} >
                <ContentPanel
                    testID='test-id-c2acf614-0097-d72f-73c3-9d6836a90252'
                    style={PaymentScheduleStyles.popoverContentPanel} >
                    <Page
                        testID='test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4'
                        scrollEnabled={false}
                        content={
                            <View style={Styles.main}>
                                <Checkbox
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    checked={pageProps.inputPaymentScheduleFilterStatusNotPay}
                                    label={'Не оплачено'}
                                    disabled={
                                        Utils.isDisabledCheckboxPaymentScheduleFilter (
                                            inputsPaymentScheduleFilterStatus,
                                            'inputPaymentScheduleFilterStatusNotPay',
                                        )
                                    }
                                    onChange={
                                        pageProps.performinputPaymentScheduleFilterStatusNotPay
                                    }
                                />
                                <Checkbox
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    checked={pageProps.inputPaymentScheduleFilterStatusForPay}
                                    label={'К оплате'}
                                    disabled={
                                        Utils.isDisabledCheckboxPaymentScheduleFilter (
                                            inputsPaymentScheduleFilterStatus,
                                            'inputPaymentScheduleFilterStatusForPay',
                                        )
                                    }
                                    onChange={
                                        pageProps.performinputPaymentScheduleFilterStatusForPay
                                    }
                                />
                                <Checkbox
                                    testID='test-id-9c13e4a0-beb9-9a18-0801-231b70e3a29e'
                                    checked={pageProps.inputPaymentScheduleFilterStatusExecPay}
                                    label={'Исполнено'}
                                    disabled={
                                        Utils.isDisabledCheckboxPaymentScheduleFilter (
                                            inputsPaymentScheduleFilterStatus,
                                            'inputPaymentScheduleFilterStatusExecPay',
                                        )
                                    }
                                    onChange={
                                        pageProps.performinputPaymentScheduleFilterStatusExecPay
                                    }
                                />
                            </View>
                        }>
                        <LeftPageHeader testID='test-id-e136773b-3284-2a76-a8fc-01673fb8624c'>
                            <NavigationTextButton
                                testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                                title={'Сбросить'}
                                onExecute={() => { pageProps.performPaymentScheduleFilterStatusReset() }}
                            />
                        </LeftPageHeader>
                        <CenterPageHeader testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'>
                            <H2 testID='test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82'>
                                {'Статус'}
                            </H2>
                        </CenterPageHeader>
                        <RightPageHeader testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'>
                            <NavigationTextButton
                                testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                                title={'Применить'}
                                onExecute={() => { pageProps.performPaymentScheduleFilterStatusSave() }}
                            />
                        </RightPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        )

        const getLoader = (): React.ReactElement<LoaderWithText> => (
            <LoaderWithText
                text= {'Загрузка данных...'}
                testID='test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-03' />
        )

        const getNoData = (): React.ReactElement<View> => (
            <View
                testID='test-id-26eabd70-0101-61f7-cf41-627f501e7747-05'
                style={Styles.noDataView}
                >
                <Center testID='test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-06'>
                    <Text
                        testID='test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a-07'
                        style={Styles.noDataText}
                        >
                        {'Ничего не найдено, попробуйте изменить фильтры.'}
                    </Text>
                </Center>
            </View>
        )

        return (
            <View testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
                <View
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    style={[
                        Styles.pageHeigthWithNavbarAndRefreshBar,
                        PaymentScheduleStyles.paymemtSchedulePageMainViewPaddings
                    ]} >
                    {
                        blockInfo() // Блок информации
                    }
                    {
                        blockHr() // Горизонтальная линия
                    }
                    {
                        blockFilters() // Блок фильтров
                    }
                    {
                        (pageProps.paymentScheduleListFetching && !pageProps.paymentScheduleListLoadMoreFetching) ?
                            getLoader() :
                            (pageProps.paymentScheduleListFiltered.data.length === 0) ?
                                getNoData() :
                                blockTable() // Блок таблицы с данными
                    }
                </View>
                <RefreshBar
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    performRefresh={ () => pageProps.performPaymentScheduleAlertShow(
                        Enums.paymentScheduleAlternativeScenariosType.Refresh,
                        Utils.alertViewMessagePaymentScheduleRefresh,
                        null,
                    ) }
                    date={pageProps.paymentScheduleListCachedDate}
                    title='Обновить' />
                <PopoverSingle
                    popoverName={`PaymentScheduleFilterPeriod_PopoverTarget`}
                    testID='test-id-141962be-2298-b155-5b7f-c45c92f93700'
                    target={ PopoverTarget.getRef('PaymentScheduleFilterPeriod_PopoverTarget') }
                    opened={ pageProps.isVisiblePopoverPaymentSchedulePeriodFilter }
                    onOutsideTap={ pageProps.performPopoverPaymentSchedulePeriodFilterHide }
                    type={PopoverType.WIDE}
                    style={ PaymentScheduleStyles.popoverPeriodFilter}
                    position={[PopoverPosition.BOTTOM]} >
                    {
                        popoverFilterPeriod()
                    }
                </PopoverSingle>
                <PopoverSingle
                    popoverName={`PaymentScheduleFilterOperationType_PopoverTarget`}
                    testID='test-id-141962be-2298-b155-5b7f-c45c92f93800'
                    target={ PopoverTarget.getRef(`PaymentScheduleFilterOperationType_PopoverTarget`) }
                    opened={ pageProps.isVisiblePopoverPaymentScheduleOperationTypeFilter }
                    onOutsideTap={ pageProps.performPopoverPaymentScheduleOperationTypeFilterHide }
                    type={PopoverType.WIDE}
                    style={ PaymentScheduleStyles.popoverOperationTypeFilter }
                    position={[PopoverPosition.BOTTOM]} >
                    {
                        popoverFilterOperationType()
                    }
                </PopoverSingle>
                <PopoverSingle
                    popoverName={`PaymentScheduleFilterStatus_PopoverTarget`}
                    testID='test-id-141962be-2298-b155-5b7f-c45c92f93900'
                    target={ PopoverTarget.getRef('PaymentScheduleFilterStatus_PopoverTarget') }
                    opened={ pageProps.isVisiblePopoverPaymentScheduleStatusFilter }
                    onOutsideTap={ pageProps.performPopoverPaymentScheduleStatusFilterHide }
                    type={PopoverType.WIDE}
                    style={ PaymentScheduleStyles.popoverStatusFilter }
                    position={[PopoverPosition.BOTTOM]} >
                    {
                        popoverFilterStatus()
                    }
                </PopoverSingle>
                <AlertView
                    testID={ 'test-id-product-сredit-payment-schedule-alert-view' }
                    ok={ performPaymentScheduleAlertViewHandleOk }
                    cancel={ performPaymentScheduleAlertViewHandleCancel }
                    title={ pageProps.paymentScheduleAlternativeScenariosTitle }
                    message={ pageProps.paymentScheduleAlternativeScenariosMessage }
                    isVisible={ pageProps.paymentScheduleAlertViewIsVisible }
                />
                <ErrorModal
                    testID={ 'test-id-payment-schedule-modal-error' }
                    isVisible={ pageProps.paymentScheduleErrorModalIsVisible }
                    titleText={ pageProps.paymentScheduleAlternativeScenariosTitle }
                    messageText={ pageProps.paymentScheduleAlternativeScenariosMessage }
                    cancel={ pageProps.performPaymentScheduleErrorHide }
                    repeat={ pageProps.performPaymentScheduleListRefresh }
                    cacheDate={ new Date() }
                />
            </View>
        )
    } // pageContent()

    return (
        <Page
            testID='test-id-021ac066-bc71-7f63-31ee-723e9a76e0a9'
            scrollEnabled={false}
            content={
                pageContent()
            }>
            <LeftPageHeader testID='test-id-672b006e-927d-da8c-167a-0ca21ea4b300'>
                <NavigationBackButton
                    testID='test-id-aaabccd3-2343-636e-0000-e14e0e80c044'
                    title={false}
                    onClick={pageProps.navigateProductCreditBack}
                />
                <View
                    style={Styles.navigationBackButtonTextAdjustment}
                    testID='test-id-6733441e-5687-0000-167a-0ca21ea4b300' >
                    <NavigationTextButton
                        testID='test-id-6720011e-5687-0000-167a-0ca21ea4b300'
                        title={'Кредит'}
                        onExecute={pageProps.navigateProductCreditBack}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec'>
                <H2 testID='test-id-6fc1df7a-8cff-746a-0fef-654a99497922'>
                    {
                        pageTitle
                    }
                </H2>
            </CenterPageHeader>
        </Page>
    )
} // PageCreditProductPaymentSchedule()

const COVENANT_TITLE = 'Мониторинг исполнения ковенантов'
const getFetchingCreditCovenantListTableRow = (props:IProps): React.ReactElement<TableRow> => (
    <TableRow testID='test-id-adf47e58-3c2a-47cd-a4a2-4b8a9f9a274d'>
        <ExtendedTableCell testID='test-id-8ba5904f-675e-4168-b071-2df6c989dc65'>
            <View
                testID='test-id-48de7a15-4340-4ab0-8ab2-dd3afeca154a'
                style={Styles.creditObjectClickableRowWrapper}>
                <Text
                    testID='test-id-4b2e4b7b-9cab-4441-a734-87190093b341'
                    style={Styles.creditObjectClickableRowText}>
                    {COVENANT_TITLE}
                </Text>
                <View style={Styles.creditObjectLoaderTextWrapper}>
                    <Text
                        testID='test-id-585abaaf-3880-493f-a257-c5eb818de5e0'
                        style={Styles.creditObjectLoadingText}>
                        {LOADING_TEXT}
                    </Text>
                </View>
            </View>
        </ExtendedTableCell>
    </TableRow>
)
const getErrorCreditCovenantListTableRow = (props:IProps): React.ReactElement<TableRow> => (
    <TableRow
        testID='test-id-a059430c-8e15-4380-93ab-470f866f606f'
        onClick={props.performCallGetProductCovenantListCacheReset} >
        <ExtendedTableCell testID='test-id-c8c379e2-913c-4b2e-9cf1-706447c95c81'>
            <View
                testID='test-id-20986f24-adc3-4c89-a8a3-3de6cb03ec1b'
                style={Styles.creditObjectClickableButtonWrapper}>
                <View style={Styles.creditObjectClickableButton}>
                    <NavigationIconButton
                        testID='test-id-373faa99-5fc2-4d91-a809-16a57f682566'
                        type={NavigationIconButtonType.REFRESH}
                        onExecute={props.performCallGetProductCovenantListCacheReset} />
                </View>
                <View
                    testID='test-id-482f07c0-8f54-4376-a463-9b6b7731019e'
                    style={Styles.creditObjectErrorWrapper} >
                    <Text
                        testID='test-id-2f329d63-5d74-451b-a10d-1a17e6250541'
                        style={[Styles.baseText, Styles.textWithErrorBelow]}>
                        {COVENANT_TITLE}
                    </Text>
                    <Text
                        testID='test-id-ebd04700-b92f-494b-b957-b7f11171998b'
                        style={Styles.creditObjectErrorText}>
                        {
                           ERROR_MESSAGE
                        }
                    </Text>
                </View>
            </View>
        </ExtendedTableCell>
    </TableRow>
)
const getCreditCovenantListTableRow = (props: IProps): React.ReactElement<TableRow> | null=> {
    const isExistProductCovenantList = Array.isArray(props.productCovenantList.data) &&
        props.productCovenantList.data.length != 0

    const isCovenantHasDeadLineTime = Array.isArray(props.productCovenantList.data) ?
        props.productCovenantList.data.find((covenant: Models.ProductCovenant): boolean => (
            Utils.getProductCreditCovenantStatus(new Date(),covenant.historyList) == 'Нарушено')) != undefined
        : false
    return (<TableRow
            testID='test-id-20fa97aa-44d8-0e19-ce7b-0751cf903e0b'
            onClick={props.navigateToCovenantListPage} >
            <ExtendedTableCell testID='test-id-20fa97aa-44d8-0e19-ce7b-0751aaabbe0b'>
                <View
                    testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b'
                    style={Styles.productCovenantTableCellView}>
                    {isExistProductCovenantList ?  <Button
                        testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea599'
                        onExecute={props.navigateToCovenantListPage} >
                        <Icon
                            testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a7333ea600'
                            disabled
                            type={IconType.MrmLink}/>
                    </Button> : null}
                    <View
                        testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b'
                        style={Styles.covenantRestrictionView}>
                        {isCovenantHasDeadLineTime ?
                        <Text testID='test-id-20fa97bb-aad8-0bb9-ce7b-0751cf903e0b'
                            ellipsizeMode={'tail'}
                            style={Styles.productCreditCovenantRedStatusValue} >
                                {'Есть нарушенные'}
                        </Text> :
                        <Text testID='test-id-20fa97bb-aad8-0bb9-ce7b-0751cf903e0b'
                            ellipsizeMode={'tail'}
                            style={Styles.CreditLinkRowInfoText} >
                            {
                                isExistProductCovenantList ? '' : 'Нет данных'
                            }
                        </Text>}
                    </View>
                    <Text
                        testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b'
                        style={[
                            Styles.baseText,
                            Styles.baseTextInTableCellAdjustments,
                            Styles.covenantTableCellText
                        ]}>
                        {COVENANT_TITLE}
                    </Text>
                </View>
            </ExtendedTableCell>
        </TableRow>)
}
/**
 * Страница "Кредит"
 *
 * @param pageProps Все свойства типа IProps (ниже), который приходят во ViewProductCredit
 * @param pageTitle Заголовок страницы
 *
 * Примечание: фукнкция без типов, надо вернуть чистую ноду Page, иначе фон заголовка будет серый
 * Даже JSX.Element вернуть не получается
 */
const PageCreditProductInfo = (pageProps: IProps, pageTitle: string) => {

    const ContentPageCreditProductInfo: React.StatelessComponent<IProps> = (contentProps: IProps): React.ReactElement<View> => {

        const {creditProduct} = contentProps.currentCreditProduct;

        const creditProductClientName: string | null = contentProps.currentCustomerManaged && contentProps.currentCustomerManaged.name
        const creditProductName: string | null = creditProduct && creditProduct.nameClassifier && creditProduct.nameClassifier.value
        const creditProductRate: string | null = creditProduct && creditProduct.rate && (creditProduct.rate.toString() + ' %') || PLACEHOLDER
        const creditProductTerm: string | null = creditProduct && creditProduct.term && creditProduct.term.toString() || PLACEHOLDER
        const creditProductSum: string | null = creditProduct && creditProduct.sum && creditProduct.sum.toString() || PLACEHOLDER
        const creditProductCurrency: string | null = creditProduct && creditProduct.currencyClassifier && creditProduct.currencyClassifier.code || PLACEHOLDER
        const creditProductDebt: string | null = creditProduct && creditProduct.debtSum && creditProduct.debtSum.toString() || null
        const creditProductOpenDate: string | null = creditProduct && creditProduct.openDate && Utils.format.date(creditProduct.openDate) || PLACEHOLDER
        const creditProductCloseDate: string | null = creditProduct && creditProduct.closeDate && Utils.format.date(creditProduct.closeDate) || PLACEHOLDER
        const creditProductContractNumber: string | null = creditProduct && creditProduct.contractNumber || null
        const creditProdcutContractStatus: string | null = creditProduct && creditProduct.status && Utils.productCreditStatus(creditProduct.status) || PLACEHOLDER

        interface IForecastEventsClickableStatusRowPageCreditProductInfo {
            forecastEventList: Models.ForecastEventList,
            forecastEventListError: Models.Error | null,
            forecastEventListFetching: boolean,
            forecastEventListFiltered: Models.ForecastEventList,
            paymentScheduleList: Models.PaymentScheduleList,
            paymentScheduleListError: Models.Error | null,
            paymentScheduleListFetching: boolean,
            paymentScheduleListFiltered: Models.PaymentScheduleList,
            navigateToForecastScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_SCREEN,
            performRefreshForecast: ModelsProductCredit.PERFORM_REFRESH_FORECAST,
        }
        const ForecastEventsClickableStatusRowPageCreditProductInfo: React.StatelessComponent<IForecastEventsClickableStatusRowPageCreditProductInfo> = (
            {
                forecastEventList,
                forecastEventListError,
                forecastEventListFetching,
                forecastEventListFiltered,
                paymentScheduleList,
                paymentScheduleListError,
                paymentScheduleListFetching,
                paymentScheduleListFiltered,
                navigateToForecastScreen = () => {/**/},
                performRefreshForecast = () => {/**/}
            }: IForecastEventsClickableStatusRowPageCreditProductInfo
        ): React.ReactElement<View> => {

            const PAYMENT_SCHEDULE_TITLE = 'График платежей'
            const PaymentScheduleClickableRowInLoadingState: React.ReactElement<TableRow> = (
                <TableRow testID='test-id-f9e371ff-b00f-4dbf-8b6c-52ba69164964'>
                    <ExtendedTableCell testID='test-id-5ebfa13d-1d9b-4d81-831a-994efa5d844e'>
                        <View
                            testID='test-id-a11ded27-7a5b-4ccc-80c6-b42ffd22875c'
                            style={Styles.creditObjectClickableRowWrapper}>
                            <Text
                                testID='test-id-dc29808a-63d8-4a80-9301-efb82f0d25e9'
                                style={Styles.creditObjectClickableRowText}>
                                {PAYMENT_SCHEDULE_TITLE}
                            </Text>
                            <View style={Styles.creditObjectLoaderTextWrapper}>
                                <Text
                                    testID='test-id-764c1028-f6bf-4143-9288-d7a62367ed81'
                                    style={Styles.creditObjectLoadingText}>
                                    {LOADING_TEXT}
                                </Text>
                            </View>
                        </View>
                    </ExtendedTableCell>
                </TableRow>
            )

            const PaymentScheduleClickableRowInErrorState: JSX.Element = (
                <TableRow
                    testID='test-id-15e9260b-1817-4e24-8618-3abe69502dd4'
                    onClick={contentProps.performForecastEventsListFlush} >
                    <ExtendedTableCell testID='test-id-3f0cfda9-1327-42ad-9beb-a66bc6a03261'>
                        <View
                            testID='test-id-f9c972a8-1efa-4475-baaf-5dae72fb26b2'
                            style={Styles.creditObjectClickableButtonWrapperInErrorState}>
                            <View style={Styles.creditObjectClickableButton}>
                                <NavigationIconButton
                                    testID='test-id-b2471f01-bc94-4555-a53c-79d3f1dde052'
                                    type={NavigationIconButtonType.REFRESH}
                                    onExecute={contentProps.performForecastEventsListFlush} />
                            </View>
                            <View
                                testID='test-id-7ae9ecd9-e8ef-442b-ab3f-a2371831cb68'
                                style={Styles.creditObjectErrorWrapper} >
                                <Text
                                    testID='test-id-9aa5e35b-49e2-4c06-8450-b53605535fc5'
                                    style={[Styles.baseText, Styles.textWithErrorBelow]}>
                                    {PAYMENT_SCHEDULE_TITLE}
                                </Text>
                                <Text
                                    testID='test-id-f8daf9ac-68a4-4f02-80c5-d8de70fafef4'
                                    style={Styles.creditObjectErrorText}>
                                    {
                                        ERROR_MESSAGE
                                    }
                                </Text>
                            </View>
                        </View>
                    </ExtendedTableCell>
                </TableRow>
            )

            const PaymentScheduleClickableRowInSuccessState = (): JSX.Element => {
                const paymentScheduleInfo = Utils.getEarlyPaymentScheduleInfo(paymentScheduleList)
                return (
                    <TableRow
                        testID='test-id-7ac6cf4b-16a8-44b8-acbb-a1e4475ff539'
                        onClick={paymentScheduleInfo !== 'Нет данных' ? contentProps.navigateToPaymentScheduleScreen : undefined}>
                        <ExtendedTableCell testID='test-id-97cbe7f8-8ab0-484c-b735-1db8aa648452'>
                            <View
                                testID='test-id-7d39a3b4-3d04-4760-829e-51d3f7561384'
                                style={Styles.creditObjectClickableButtonWrapper}>
								{
									paymentScheduleInfo !== 'Нет данных' ?
										<Button
											testID='test-id-8d0de8dc-f3d3-4f19-b6da-015fe2a15221'
											onExecute={contentProps.navigateToPaymentScheduleScreen}>
											<Icon
												testID='test-id-f4c151ef-adff-4f87-b48f-6e92d9efeb9d'
												disabled
												type={IconType.MrmLink}
											/>
										</Button> :
										<View testID={'test-id-765c77c7-48e9-40cd-aa8f-ec660998a34a'}
                                              style={Styles.emptyView}
                                        />
								}
                                <View
                                    testID='test-id-2eeefd8b-5620-432e-874c-3dab36332ef0'
                                    style={Styles.creditObjectClickableRowInSuccessWrapper}>
                                    <Text
                                        testID='test-id-069dfee7-3abe-49a8-996b-f506487171c1'
                                        ellipsizeMode={'tail'}
                                        style={
                                            paymentScheduleInfo === 'Есть неоплаченные' ?
                                                Styles.creditObjectLinkRowInfoTextRed :
												Styles.creditObjectLinkRowInfoText
                                        }
                                    >
                                        {paymentScheduleInfo}
                                    </Text>
                                </View>
                                <Text
                                    testID='test-id-a0a96c06-2f72-4eae-a2cb-3b808a52123b'
                                    style={[
                                        Styles.baseText,
                                        Styles.baseTextInTableCellAdjustments,
                                        Styles.forecastEventsClickableRowInSuccessText,
                                    ]}>
                                    {PAYMENT_SCHEDULE_TITLE}
                                </Text>
                            </View>
                        </ExtendedTableCell>
                    </TableRow>
                )
            }

            const FORECAST_EVENT_TITLE = 'Прогнозные события'
            const ForecastEventsClickableRowInLoadingState: JSX.Element = (
                <TableRow testID='test-id-8e8d4e18-f9d0-4d44-a4c3-e1eaf95080b4'>
                    <ExtendedTableCell testID='test-id-5e8ff276-468a-4e74-9f83-a54365e15c17'>
                        <View
                            testID='test-id-0d8818c5-9d97-4a6f-ba6b-aad978a8c049'
                            style={Styles.creditObjectClickableRowWrapper}>
                            <Text
                                testID='test-id-9a45af2a-bf9a-4ae7-8ca4-0b262ff34f90'
                                style={Styles.creditObjectClickableRowText}>
                                {FORECAST_EVENT_TITLE}
                            </Text>
                            <View style={Styles.creditObjectLoaderTextWrapper}>
                                <Text
                                    testID='test-id-557f0357-deb3-4a71-9be0-ed68d40f8668'
                                    style={Styles.creditObjectLoadingText}>
                                    {LOADING_TEXT}
                                </Text>
                            </View>
                        </View>
                    </ExtendedTableCell>
                </TableRow>
            )

            const ForecastEventsClickableRowInErrorState: JSX.Element = (
                <TableRow
                    testID='test-id-15e9260b-1817-4e24-8618-3abe69502dd4'
                    onClick={performRefreshForecast} >
                    <ExtendedTableCell testID='test-id-26173eae-201f-4033-a389-109e390f1df1'>
                        <View
                            testID='test-id-a6b5ff7d-cfb6-4fea-9bde-363fcc362578'
                            style={Styles.creditObjectClickableButtonWrapperInErrorState}>
                            <View style={Styles.creditObjectClickableButton}>
                                <NavigationIconButton
                                    testID='test-id-be52a66e-f8cd-44c8-b172-2e793da323c0'
                                    type={NavigationIconButtonType.REFRESH}
                                    onExecute={performRefreshForecast} />
                            </View>
                            <View
                                testID='test-id-9d55b680-2b3b-4419-84ee-521f8e8646f2'
                                style={Styles.creditObjectErrorWrapper} >
                                <Text
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                                    style={[Styles.baseText, Styles.textWithErrorBelow]}>
                                    {FORECAST_EVENT_TITLE}
                                </Text>
                                <Text
                                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                                    style={Styles.creditObjectErrorText}>
                                    {
                                        creditProduct && creditProduct.forecastDealId
                                        ? ERROR_MESSAGE
                                        : ERROR_MESSAGE_DEAL
                                    }
                                </Text>
                            </View>
                        </View>
                    </ExtendedTableCell>
                </TableRow>
            )

            const ForecastEventsClickableRowInSuccessState: JSX.Element = (
                <TableRow
                    testID='test-id-aee80811-81a2-4ddb-a375-e051b80efbaf'
                    onClick={navigateToForecastScreen} >
                    <ExtendedTableCell testID='test-id-1f22c12c-fd50-4923-87fc-9b1d6ddcc30c'>
                        <View
                            testID='test-id-24aba0eb-e758-4023-80fe-5bd19c6290cf'
                            style={Styles.creditObjectClickableButtonWrapper}>
                            <Button
                                testID='test-id-614fca26-e044-4aaa-9315-af1b9fd4b74d'
                                onExecute={navigateToForecastScreen} >
                                <Icon
                                    testID='test-id-5e28ed4a-6ec2-42c9-a3aa-1ba94bb26469'
                                    disabled
                                    type={IconType.MrmLink}
                                />
                            </Button>
                            <View
                                testID='test-id-223a4f94-69ac-4fd4-a9c7-545e3aaf6103'
                                style={Styles.creditObjectClickableRowInSuccessWrapper}>
                                <Text
                                    testID='test-id-f82cbce2-cb10-4340-947d-17a6c016bdbb'
                                    ellipsizeMode={'tail'}
                                    style={Styles.creditObjectLinkRowInfoText} >
                                    {
                                        Utils.getEarlyForecastEventInfo(forecastEventList)
                                    }
                                </Text>
                            </View>
                            <Text
                                testID='test-id-4ccb256f-bf51-49dd-b902-c96ab5cdc904'
                                style={[
                                    Styles.baseText,
                                    Styles.baseTextInTableCellAdjustments,
                                    Styles.forecastEventsClickableRowInSuccessText,
                                ]}>
                                {FORECAST_EVENT_TITLE}
                            </Text>
                        </View>
                    </ExtendedTableCell>
                </TableRow>
            )

            return (
                <View
                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b'
                    style={Styles.contentPageCreditProductInfoWrapper}>
                    <Table
                        testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b'
                        noPaddings={true}>
                        <TableBody testID='test-id-20fa9720-44d8-0e19-ce7b-0751cf903e0b'>
                            {
                                // @TODO: Вывод плашки с ковенантой
                            }
                            {
                                paymentScheduleListFetching
                                    ? PaymentScheduleClickableRowInLoadingState
                                    : paymentScheduleListError
                                        ? PaymentScheduleClickableRowInErrorState
                                        : PaymentScheduleClickableRowInSuccessState()
                            }
                            {
                                // @TODO: Вывод плашки с прогнозными событиями
                            }
                        </TableBody>
                    </Table>
                </View>
            )
        }

        return (
            <View testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
                <View
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    style={[
                        Styles.pageHeigthWithNavbarAndRefreshBar,
                        Styles.creditProductPageMainViewPaddings
                    ]} >
                    <Grid testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
                        <Row testID='test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f'>
                            <Col xs={12}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <FieldTextWithPaddingsInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Клиент'
                                    text={
                                        creditProductClientName
                                    }/>
                            </Col>
                        </Row>
                        <Row testID='test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f'>
                            <Col xs={12}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <FieldTextWithPaddingsInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Название продукта'
                                    text={
                                        creditProductName
                                    } />
                            </Col>
                        </Row>
                        <GridRowHorizontalRule />
                        <Row testID='test-id-fb794bcb-615b-fbce-3593-a23b19fd9624'>
                            <Col xs={2}
                                 testID='test-id-e358e512-bc8f-7c14-d377-0da0f64aa226'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Ставка'
                                    text={
                                        creditProductRate
                                    } />
                            </Col>
                            <Col xs={2}
                                 testID='test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Срок (дней)'
                                    text={
                                        creditProductTerm
                                    } />
                            </Col>
                            <Col xs={4}
                                 testID='test-id-398137b1-33db-8e27-ff58-abd5bcdde762'>
                                <FieldSumTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Сумма кредита'
                                    text={
                                        creditProductSum
                                    }
                                    currency={
                                        creditProductCurrency
                                    }/>
                            </Col>
                            <Col xs={4}
                                 testID='test-id-398137b1-33db-8e27-ff58-abd5bcdde762'>
                                <FieldSumTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Полная сумма задолжности'
                                    text={
                                        creditProductDebt
                                    }
                                    currency={
                                        creditProductCurrency
                                    }/>
                            </Col>
                        </Row>
                        <GridRowHorizontalRule />
                        <Row testID='test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476'>
                            <Col xs={2}
                                 testID='test-id-074204b3-1fde-5e11-70b1-2abe122d91ff'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Дата договора'
                                    text={
                                        creditProductOpenDate
                                    } />
                            </Col>
                            <Col xs={2}
                                 testID='test-id-7b862656-701b-d2a2-908e-21da8d427f98'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Дата окончания'
                                    text={
                                        creditProductCloseDate
                                    } />
                            </Col>
                            <Col xs={4}
                                 testID='test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Номер договора'
                                    text={
                                        creditProductContractNumber
                                    } />
                            </Col>
                            <Col xs={4}
                                 testID='test-id-6e1482d9-f379-2fc4-caa0-fcc06bca1118'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Статус договора'
                                    text={
                                        creditProdcutContractStatus
                                    } />
                            </Col>
                        </Row>
                    </Grid>
                    {
                        creditProduct && creditProduct.isActiveAgreement ?
                            <ForecastEventsClickableStatusRowPageCreditProductInfo
                                forecastEventList={contentProps.forecastEventList}
                                forecastEventListError={contentProps.forecastEventListError}
                                forecastEventListFetching={contentProps.forecastEventListFetching}
                                forecastEventListFiltered={contentProps.forecastEventListFiltered}
                                paymentScheduleList={contentProps.paymentScheduleList}
                                paymentScheduleListError={contentProps.paymentScheduleListError}
                                paymentScheduleListFetching={contentProps.paymentScheduleListFetching}
                                paymentScheduleListFiltered={contentProps.paymentScheduleListFiltered}
                                navigateToForecastScreen={contentProps.navigateToForecastScreen}
                                performRefreshForecast={contentProps.performRefreshForecast}
                            />
                       : null
                    }
                </View>
                <RefreshBar
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    title = 'Обновить'
                    performRefresh={contentProps.performForecastEventsListFlush}
                    date={contentProps.forecastEventListCachedDate}/>
            </View>
        )
    } // end of const ContentPageCreditProductInfo: React.StatelessComponent<IProps> = (contentProps: IProps): React.ReactElement<View>

    return (
        <Page
            testID='test-id-021ac066-bc71-7f63-31ee-723e9a76e0a9'
            scrollEnabled={false}
            content={
                ContentPageCreditProductInfo(pageProps)
            }>
            <LeftPageHeader testID='test-id-672b006e-927d-da8c-167a-0ca21ea4b300'>
                <NavigationBackButton
                    testID='test-id-aaabccd3-2343-636e-0000-e14e0e80c044'
                    title={false}
                    onClick={pageProps.navigateProductListBack}
                />
                <View
                    style={Styles.navigationBackButtonTextAdjustment}
                    testID='test-id-6733441e-5687-0000-167a-0ca21ea4b300' >
                    <NavigationTextButton
                        testID='test-id-6720011e-5687-0000-167a-0ca21ea4b300'
                        title={'Кредиты'}
                        onExecute={pageProps.navigateProductListBack}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec'>
                <H2 testID='test-id-6fc1df7a-8cff-746a-0fef-654a99497922'>
                    {
                        pageTitle
                    }
                </H2>
            </CenterPageHeader>
        </Page>
    )
};

// Страница #2: Прогнозные события (Tabbed)
const PageCreditProductForecastEventList = (props: IProps) => {

    const contentCreditProductForecastEventList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
        const placeholder = 'Нет данных';

        const tableRowGenerator = (list: Models.ForecastEventList) => {

            return list.data.map((item: Models.ForecastEvent, index: number) => (
                <TableRow
                    testID='test-id-733b0c85-6ea1-5c09-6f03-21274ebe2be6'
                    key={ `Product List Row ${index}` }
                    onClick={ () => {
                        pTarget = `displayForecastEventPopover_${index}`
                        pPosition = [PopoverPosition.LEFT]
                        props.performOpenForecastEventDetails(item)
                    }} >
                    <TableCell testID='test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658'>
                        <View style={StylesUFSPir28.tableCellInternalBaseTextWrapper}>
                            <Text
                                testID='test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658'
                                style={Styles.baseText} >
                                {item.plannedEventDate != null ? Utils.format.date(item.plannedEventDate) : placeholder}
                            </Text>
                        </View>
                    </TableCell>
                    <TableCell testID='test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658'>
                        <View style={StylesUFSPir28.tableCellInternalBaseTextWrapper}>
                            <Text
                                testID='test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658'
                                style={[Styles.baseText, Styles.additionalSpaceBetweenColumns]}
                                numberOfLines={2}
                                ellipsizeMode={'tail'} >
                                {item.eventType.value}
                            </Text>
                        </View>
                    </TableCell>
                    <TableCell testID='test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658'>
                        { item && item.forecastSum && item.currency && item.currency.code ?
                            (
                              <View style={StylesUFSPir28.removeBottomMarginOfTableCell}>
                                <View style={[StylesUFSPir28.calculatedTopMarginForSumTextInsideTableCell, StylesUFSPir28.removeBottomMarginOfSumText]}>
                                  <SumText testID='test-id-cc1b7805-4ddd-a09d-c7c1-3f7c8df448ca'
                                           value={item.forecastSum}
                                           small={false}
                                           block={true}
                                           currency={item.currency && item.currency.code}
                                  />
                                </View>
                              </View>
                            ) :
                            (
                                <View style={StylesUFSPir28.tableCellInternalBaseTextWrapper}>
                                    <Text
                                        testID='test-id-ed8a852a-3b38-a667-8d1e-7f87febb0328'
                                        style={Styles.baseText} >
                                        { placeholder }
                                    </Text>
                                </View>
                            )
                        }
                    </TableCell>
                    <TableCell testID='test-id-a8f8fdb3-e6d6-e24a-b158-dbd773b9f658'>
                        <View style={[StylesUFSPir28.removeTableCellMargins, Styles.chevronTableCell]}>
                            <PopoverTarget
                                testID={`test-id-515ab097-750e-80bb-cf24-8619f9dcbb0e_${index}`}
                                refName={`displayForecastEventPopover_${index}`} >
                                <Button
                                    testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                                    onExecute={ () => {
                                        pTarget = `displayForecastEventPopover_${index}`
                                        pPosition = [PopoverPosition.LEFT]
                                        props.performOpenForecastEventDetails(item)
                                    }} >
                                    <Icon
                                        testID='test-id-62430323-f434-184b-3541-ebec8a7d717d'
                                        type={IconType.MrmArrowDown} />
                                </Button>
                            </PopoverTarget>
                        </View>
                    </TableCell>
                </TableRow>
            ));
        };

        const activeFilters = getForecastEventActiveFilters(props)

        const dynamicTableHeightStyleDependsOnFilterTagsVisibility = activeFilters.length ?
            StyleSheet.create({tableHeight: {height: 740-44-44-40-60}}) :
            StyleSheet.create({tableHeight: {height: 740-44-44-60}})

        const contentView = (
            <View testID='test-id-26eabd79-0001-60f7-cf41-6233331e7747'>
                <View
                    testID='test-id-26eabd79-0001-60f7-cf41-6233331e7747'
                    style={Styles.pageHeigthWithNavbarAndRefreshBar}>
                    <View
                        style={Styles.LinkContainer}
                        testID='test-id-26eabd79-0001-60f7-cf41-627f501e7747' >
                        <Button
                            testID='test-id-26eabd79-0001-60f7-cf41-627f501e7747'
                            type={ButtonType.TEXT}
                            onExecute={() => props.performForecastEventCreate()}
                            title='Создать прогнозное событие' />
                        <PopoverTarget
                            testID='test-id-515ab097-750e-80bb-cf24-8619f9dcbb0e'
                            refName={'createForecastEventPopover'}
                            style={Styles.popoverIndent} />
                    </View>
                    {
                        activeFilters.length ?
                            <View
                                testID='test-id-26eabd79-0001-60f7-cf41-627f501e7747'
                                style={Styles.activeFiltersWrapper}>
                                {
                                    activeFilters.map((tagElement, index) => {
                                        return (
                                            <View
                                                testID='test-id-79187cdf-b502-4a26-1783-12769b9cf70c'
                                                style={ Styles.operationListFilterLabel } key={tagElement.key} >
                                                <Text
                                                    testID='test-id-631a2aeb-5437-2a86-3090-2f519e7868b5'
                                                    style={ Styles.operationListFilterLabelText } >
                                                    { tagElement.label }
                                                </Text>
                                                <Button
                                                    testID='test-id-a99b7de8-9077-a3ba-eacd-1aa8a3c40dd6'
                                                    onExecute={ () => tagElement.onClick() } >
                                                    <Icon
                                                        testID='test-id-b5691a74-427b-8ac5-1017-6fdde30cdf12'
                                                        disabled type={ IconType.MrmClear } />
                                                </Button>
                                            </View>
                                        )
                                    })
                                }
                            </View> :
                            null
                    }
                    <View style={Styles.hideRightMargin20AndScrolling}>
                        <Table
                            testID='test-id-6d780177-50ce-159e-8f9b-68557c1943b3'
                            style={dynamicTableHeightStyleDependsOnFilterTagsVisibility.tableHeight}>
                            <TableHead
                                testID='test-id-93def862-c087-6d64-7d1b-ffcaef46aeb7'
                                style={StylesUFSPir28.tableHeadHeight}>
                                <TableColumn
                                    testID='test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47'
                                    align={TableColumnAlignment.LEFT}
                                    width={'338'} >
                                    <Text
                                        testID='test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76' >
                                        {'Дата события'}
                                    </Text>
                                </TableColumn>
                                <TableColumn
                                    testID='test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47'
                                    align={TableColumnAlignment.LEFT}
                                    width={'310'} >
                                    <Text
                                        testID='test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76'
                                        numberOfLines={2}
                                        ellipsizeMode={'tail'} >
                                        {'Тип события'}
                                    </Text>
                                </TableColumn>
                                <TableColumn
                                    testID='test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47'
                                    align={TableColumnAlignment.RIGHT}
                                    width={'246'} >
                                    <Text
                                        testID='test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76'
                                        numberOfLines={2}
                                        ellipsizeMode={'tail'} >
                                        {'Прогнозная сумма'}
                                    </Text>
                                </TableColumn>
                                <TableColumn
                                    testID='test-id-6619ce9e-0aa6-06ec-86b0-24e73fddcb47'
                                    align={TableColumnAlignment.CENTER}
                                    width={'44'} >
                                    <Text
                                        testID='test-id-d3ac58ae-a1b3-895f-f705-fee86fdd8d76'
                                        numberOfLines={2}
                                        ellipsizeMode={'tail'} >
                                        {''}
                                    </Text>
                                </TableColumn>
                            </TableHead>
                            {
                                props.forecastEventListFiltered.data.length > 0 && (
                                    <TableBody testID='test-id-c3142ae1-666e-b550-de2f-0662330b1d1f'>
                                        {tableRowGenerator(props.forecastEventListFiltered)}
                                    </TableBody>
                                )
                            }
                        </Table>
                        {
                            props.forecastEventListFiltered.data.length === 0 && (
                                <View
                                    testID='test-id-36485f3e-bbb7-4c4b-ab2b-f1b44faa91df'
                                    style={Styles.searchNotFoundTextWrapper}>
                                    <Text
                                        testID='test-id-417c7cde-c151-4bda-8384-4519491e5d79'
                                        style={Styles.searchNotFoundText}>
                                        {'Результатов не найдено'}
                                    </Text>
                                </View>
                            )
                        }
                    </View>
                </View>
                <RefreshBar
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    performRefresh={props.performForecastEventsListFlush}
                    date={props.forecastEventListCachedDate} />
            </View>
        )

        const errorView = (
            <View style={Styles.createForecastEventErrorWrapper}>
                <View style={Styles.createForecastEventMessageBlock}>
                    <Text testID='test-id-26eabd79-0001-60f7-cf41-627f500e7940'
                          style={Styles.createForecastEventMessageBlockHeader}>
                        {'Ошибка'}
                    </Text>
                    <Text testID='test-id-26eabd79-5001-60f7-c041-627f500e7040'>
                        {props.newForecastEventSaveError && props.newForecastEventSaveError.code
                        && Utils.getForecastEventSaveErrorComment(props.newForecastEventSaveError)}
                        {
                            (
                                props.newForecastEventSaveError &&
                                (
                                    props.newForecastEventSaveError.code ||
                                    props.newForecastEventSaveError.message ||
                                    props.newForecastEventSaveError.comment
                                ) &&
                                Utils.getForecastEventSaveErrorComment(props.newForecastEventSaveError)
                            ) || (
                                props.forecastEventListError &&
                                (
                                    props.forecastEventListError.code ||
                                    props.forecastEventListError.message ||
                                    props.forecastEventListError.comment
                                ) &&
                                Utils.getForecastEventSaveErrorComment(props.forecastEventListError)
                            )
                        }
                    </Text>
                </View>
                <View style={Styles.createForecastEventButtonWrapper}>
                    <View style={Styles.createForecastEventButton}>
                        <Button testID='test-id-26eabd79-0001-60f7-cf41-627f500e7550'
                                onExecute={() => props.performFilterCreateEventPopupReset()}
                                type={ButtonType.TEXT}>
                            <Text testID='test-id-26eabd79-0001-10f7-c141-627f501e7550'>OK</Text>
                        </Button>

                    </View>
                    <View style={[Styles.createForecastEventButton, Styles.createForecastEventButtonBorder]}>
                        <Button testID='test-id-26eabd39-0001-6047-cf41-627f500e5940'
                                onExecute={() => props.performRepeatForecastEventSave()}
                                type={ButtonType.TEXT}>
                            <Text testID='test-id-26eabd79-0001-61f7-cf41-6271500a7550'>Повторить</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )

        return (
            <View testID='test-id-26eabd79-0001-60f7-cf41-627f501e7747'>
                {
                    props.newForecastEventSaveInProgress ?
                        <View
                            style={Styles.createForecastEventLoader}
                            testID='test-id-26eabd70-0101-61f7-cf41-627f501e7747'>
                            <View
                                testID='test-id-26eabd70-0101-61f7-cf41-627f501e7747'
                                style={Styles.contentCenter}>
                                <LoaderWithText
                                    text= {'Создание события...'}
                                    testID='test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a' />
                            </View>
                        </View> :
                        null
                }
                {
                    props.forecastEventListFetching ?
                        <View
                            style={Styles.createForecastEventLoader}
                            testID='test-id-26eabd70-0101-61f7-cf41-627f501e7747'>
                            <View
                                testID='test-id-26eabd70-0101-61f7-cf41-627f501e7747'
                                style={Styles.contentCenter}>
                                <LoaderWithText
                                    text= {'Загрузка данных...'}
                                    testID='test-id-5b0e0c6e-d5b7-11e7-9296-cec275b6b50a' />
                            </View>
                        </View> :
                        null
                }
                {
                    !props.newForecastEventSaveError &&
                    !props.newForecastEventSaveInProgress &&
                    !props.forecastEventListFetching
                        ? contentView
                        : null
                }
                <View testID='test-id-bbb962be-2298-b155-5b7f-c45c92f93b10'>
                    <Popover
                        testID='test-id-141962be-2298-b155-5b7f-c45c92f93b10'
                        target={PopoverTarget.getRef(pTarget)}
                        opened={props.isVisiblePopoverForecastEvent}
                        onOutsideTap={ props.performFilterCreateEventPopupReset }
                        type={PopoverType.WIDE}
                        style={{height: 600}}
                        position={pPosition} >
                            {getForecastEventPopupData(props)}
                    </Popover>
                </View>
                <View testID='test-id-bbb962be-2298-b155-5b7f-c45c92f93b10'>
                    <Popover
                        testID='test-id-141962be-2298-b155-5b7f-c45c92f93b10'
                        target={PopoverTarget.getRef('displayForecastFilterPopover')}
                        opened={props.isVisiblePopoverFilter}
                        onOutsideTap={props.performPopoverFilterHide}
                        type={PopoverType.WIDE}
                        style={{ height: 400 }}
                        position={[PopoverPosition.BOTTOM]} >
                        { getForecastEventFilter(props) }
                    </Popover>
                </View>
            </View>
        );
    };

    return (
        <Page
            testID='test-id-9c5aaadb-4729-4182-6b5f-4c42777dbcec'
            scrollEnabled={false}
            content={contentCreditProductForecastEventList(props)} >
            <LeftPageHeader testID='test-id-672b006e-927d-da8c-167a-0ca21ea4b300'>
                <NavigationBackButton
                    testID='test-id-aaabccd3-a6e1-636e-0000-e14e0e80c044'
                    title={false}
                    onClick={() => props.navigateProductCreditBack()}
                />
                <View
                    testID='test-id-3456011e-927d-0000-167a-0ca21ea4b300'
                    style={Styles.navigationBackButtonTextAdjustment} >
                    <NavigationTextButton
                        testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                        title={'Кредит'}
                        onExecute={() => props.navigateProductCreditBack()}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec'>
                <H2 testID='test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82'>
                    {'Прогнозные события'}
                </H2>
            </CenterPageHeader>
            <RightPageHeader testID='test-id-9f012344c-55de-aea8-d6f8-35ecd6c0d697'>
                <View
                    testID='test-id-9f444344c-55de-aea8-d6f8-35ecd6c0d697'
                    style={Styles.rightPageHeaderPaddings} >
                    <PopoverTarget
                        testID={`test-id-515ab097-750e-80bb-cf24-8619f9dcbb0e`}
                        refName={`displayForecastFilterPopover`} >
                        <NavigationFilterButton
                            testID='test-id-f9df7204-5d43-71bd-f917-86fc3f027293'
                            onExecute={props.performPopoverFilterShow}
                            count={getForecastEventActiveFilters(props).length} >
                        </NavigationFilterButton>
                    </PopoverTarget>
                </View>
            </RightPageHeader>
        </Page>
    )
};

// Страница: информация о прогнозном событии
const PageCreditProductForecastEventDetail = (
    props: IProps,
    performFunc: Function,
    navigateBack: Function) => {

    const contentCreditProductForecastEventDetail: React.StatelessComponent<IProps> = (contentProps: IProps) => {
        const creditProductClientName: string | null = contentProps.currentCustomerManaged && contentProps.currentCustomerManaged.name
        const currentEvent: Models.ForecastEvent = contentProps.currentForecastEvent
        const eventDate: string = currentEvent.plannedEventDate && currentEvent.plannedEventDate.formattedString() || ''
        const possibility: string = Utils.eventPossibilityStringValue(currentEvent.possibility)
        const sum: string = currentEvent.forecastSum ? String(currentEvent.forecastSum) : ''
        const currency: string = currentEvent.currency && currentEvent.currency.value
        const createdDate: string = currentEvent.eventCreationDate && currentEvent.eventCreationDate.formattedString() || ''

        return (
            <View testID='test-id-1'>
                <View
                    testID='test-id-2'
                    style={[
                            Styles.pageHeigthWithNavbarAndRefreshBar,
                            Styles.creditProductPageMainViewPaddings
                        ]} >
                    <Grid testID='test-id-3'>
                        <Row testID='test-id-4'>
                            <Col xs={12}
                                 testID='test-id-5'>
                                 <View testID='directionRow' style={Styles.DirectionRow}>
                                    <FieldTextWithPaddingsInGridCell
                                        testID='test-id-6'
                                        label='Клиент'
                                        text={creditProductClientName} />
                                    <View
                                        testID='info'
                                        style={Styles.ButtonInfoWrapper}>
                                        <Button
                                            testID={`test-id-info-button`}
                                            key={`info-button`}
                                            onExecute={() => contentProps.performCustomerOpenExecute(contentProps.currentCustomerManaged)}>
                                            <Icon
                                                testID={`test-id-info`}
                                                key={`info`}
                                                disabled
                                                type={IconType.MrmInfo} />
                                        </Button>
                                    </View>
                                </View>
                            </Col>
                        </Row>
                        <GridRowHorizontalRule />
                        <Row testID='test-id-7'>
                            <Col xs={2}
                                 testID='test-id-8'>
                                <FieldTextWithPaddingsInGridCell
                                    testID='test-id-9'
                                    label='Дата события'
                                    text={eventDate} />
                            </Col>
                            <Col xs={2}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <FieldTextWithPaddingsInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Вероятность'
                                    text={possibility} />
                            </Col>
                            <Col xs={4}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <FieldSumTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Прогнозная сумма'
                                    text={sum}
                                    currency={currency}/>
                            </Col>
                            <Col xs={4}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <FieldSumTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Исполненная сумма'
                                    text={'0'}
                                    currency={currency}/>
                            </Col>
                        </Row>
                        <GridRowHorizontalRule />
                        <Row testID='test-id-fb794bcb-615b-fbce-3593-a23b19fd9624'>
                            <Col xs={4}
                                 testID='test-id-e358e512-bc8f-7c14-d377-0da0f64aa226'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Дата создания события'
                                    text={createdDate} />
                            </Col>
                            <Col xs={4}
                                 testID='test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Номер кредитного договора'
                                    text={currentEvent.productNum || 'Нет данных'} />
                            </Col>
                            <Col xs={4}
                                 testID='test-id-398137b1-33db-8e27-ff58-abd5bcdde762'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='E-mail для отправки уведомлений'
                                    text={currentEvent.email}/>
                            </Col>
                        </Row>
                        <GridRowHorizontalRule />
                        <Row testID='test-id-6a2c1959-0d6f-06f9-e5cc-77cc19740476'>
                            <Col xs={12}
                                 testID='test-id-074204b3-1fde-5e11-70b1-2abe122d91ff'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Примечания'
                                    text={currentEvent.comment} />
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </View>
        )
    }

    const updateButton: React.ReactElement<RightPageHeader> = (
        <RightPageHeader testID='test-id-8'>
            <NavigationTextButton
                testID='test-id-9'
                title={'Изменить'}
                onExecute={() => performFunc(props.currentForecastEvent)}
            />
        </RightPageHeader>
    )

    return (
        <Page
            testID='test-id-1'
            scrollEnabled={true}
            content={contentCreditProductForecastEventDetail(props)}>
            <LeftPageHeader testID='test-id-2'>
                <NavigationBackButton
                    testID='test-id-3'
                    title={false}
                    onClick={() => navigateBack()}
                />
                <View testID='test-id-4'
                    style={Styles.navigationBackButtonTextAdjustment}>
                    <NavigationTextButton
                        testID='test-id-5'
                        title={'Прогнозный продукт'}
                        onExecute={() => navigateBack()}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-6'>
                <H2 testID='test-id-7'>
                    {props.currentForecastEvent.eventType.value}
                </H2>
            </CenterPageHeader>
            {/* Перенос функционала в релиз 2018-3
            {(~editableCreditTypes.indexOf(props.currentForecastEvent.eventType.code)) ? updateButton : ''} */}
        </Page>
    )
};

// Строка вывода прогнозного события в таблице
const productTableCell = (item: Models.ForecastEvent, contentProps: IProps):  React.ReactElement<TableCell> => {
    return(
        <TableRow
            key={item.id}
            testID='test-id-1'
            onClick={ () => contentProps.performPrognosticEventDetail(item)}>
            <TableCell
                testID='test-id-2'
                style={Styles.PrognosticTableCell}>
                <View
                    testID='test-id-3'
                    style={Styles.PrognosticDateCell}>
                    <Text
                        testID='test-id-4'
                        style={Styles.PrognosticCellText}>
                        {item.plannedEventDate ? item.plannedEventDate.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'}) : ''}
                    </Text>
                </View>
                <View
                    testID='test-id-5'
                    style={Styles.PrognosticTypeCell}>
                    <Text
                        testID='test-id-6'
                        style={Styles.PrognosticCellText}>
                        {item.eventType.value}
                    </Text>
                </View>
                <View
                    testID='test-id-7'
                    style={Styles.PrognosticSumCell}>
                    <SumText
                        testID='test-id-8'
                        value={Number(item.forecastSum)}
                        currency={item.currency.value}
                        block={true}
                        small={false} />
                </View>
                <View
                    testID='test-id-9'
                    style={Styles.PrognosticShevronCell}>
                    <Button
                        testID={`test-id-${item.id}-chevron-button`}
                        key={`${item.id}-chevron-button`}
                        onExecute={() => contentProps.performPrognosticEventDetail(item)}>
                        <Icon
                            testID={`test-id-${item.id}-chevron`}
                            key={`${item.id}-chevron`}
                            disabled
                            type={IconType.MrmLink}/>
                    </Button>
                </View>
            </TableCell>
        </TableRow>
    )
}

// Страница: информация о сделке
const PagePrognosticDealInfo = (pageProps: IProps, pageTitle: string) => {

    const ContentPagePrognosticDealInfo: React.StatelessComponent<IProps> = (contentProps: IProps): React.ReactElement<View> => {

        const currentPrognosticDeal = contentProps.currentDeal;
        const placeholder = 'Нет данных'
        const prognosticDealClientName: string | null = contentProps.currentCustomerManaged && contentProps.currentCustomerManaged.name
        const prognosticDealCurrency: string | null = currentPrognosticDeal.currency.value || null
        const prognosticDealType: string | null = currentPrognosticDeal.productType.value || null
        const prognosticDealDateBegin: Date | string = currentPrognosticDeal.dateBegin ? Utils.format.date(new Date(currentPrognosticDeal.dateBegin)) : placeholder

        const prognosticProductsRendered: Array<React.ReactElement<TableCell>> = []
        contentProps.forecastEventListFiltered.data.map((item: Models.ForecastEvent, index: number) => {
            prognosticProductsRendered.push(productTableCell(item, contentProps))
        })

        return (
            <View testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
                <View
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    style={[
                        Styles.pageHeigthWithNavbarAndRefreshBar,
                        Styles.creditProductPageWrapper
                    ]} >
                    <Grid testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'>
                        <Row testID='test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f'>
                            <Col xs={12}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <View testID='directionRow' style={Styles.DirectionRow}>
                                    <FieldTextWithPaddingsInGridCell
                                        testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                        label='Клиент'
                                        text={
                                        prognosticDealClientName
                                    }/>
                                    <View testID='info' style={Styles.ButtonInfoWrapper}>
                                        <Button
                                            testID={ `test-id-info-button` }
                                            key={ `info-button` }
                                            onExecute={ () => contentProps.performCustomerOpenExecute(contentProps.currentCustomerManaged) }>
                                            <Icon
                                                testID={ `test-id-info` }
                                                key={ `info` }
                                                disabled
                                                type={ IconType.MrmInfo }/>
                                        </Button>
                                    </View>
                                </View>
                            </Col>
                        </Row>
                        <Row testID='test-id-0016da8d-6622-3a0a-5116-f20c3b1ff38f'>
                            <Col xs={12}
                                 testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'>
                                <FieldTextWithPaddingsInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Вид прогнозного продукта'
                                    text={
                                        prognosticDealType
                                    } />
                            </Col>
                        </Row>
                        <GridRowHorizontalRule />
                        <Row testID='test-id-fb794bcb-615b-fbce-3593-a23b19fd9624'>
                            <Col xs={4}
                                 testID='test-id-e358e512-bc8f-7c14-d377-0da0f64aa226'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Дата начала действия'
                                    text={
                                        prognosticDealDateBegin
                                    } />
                            </Col>
                            <Col xs={2}
                                 testID='test-id-4e0cfa5b-d6bf-c789-757f-9a90fee8cf8b'>
                                <FieldTextInGridCell
                                    testID='test-id-3df9c8fc-be19-8a6a-94d4-b07a9e50aa84'
                                    label='Валюта'
                                    text={
                                        prognosticDealCurrency
                                    } />
                            </Col>
                        </Row>
                    </Grid>
                    <View testID='rule' style={Styles.Rule} />
                    <View testID='header-view' style={Styles.WrapperHeader}>
                        <Text testID='headertable' style={Styles.TableHeader}>Прогнозные события</Text>
                        <View testID='info' style={Styles.ButtonPlusWrapper}>
                            <Button
                                testID={`test-id-plus-button`}
                                key={`plus-button`}
                                onExecute={pageProps.performPrognosticEventCreate}>
                                <Icon
                                    testID={`test-id-plus`}
                                    key={`plus`}
                                    disabled
                                    type={IconType.MrmPlus}/>
                            </Button>
                        </View>
                    </View>
                    <View testID='table' style={{flex: 1}}>
                        <View testID='header'
                        style={Styles.PrognosticDealsTableHeader}>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a21qaf093ae'
                                style={Styles.PrognosticDateCell}>
                                <Text
                                    testID='test-id-1a9a0066-eaf2-11e0-80c1-9q214af093a0'
                                    style={Styles.PrognosticTableHeaderText}>Дата события</Text>
                            </View>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a21waf093ae'
                                style={Styles.PrognosticTypeCell}>
                                <Text
                                    testID='test-id-1a9a9066-eaf2-11e0-80c1-9a214rf093ae'
                                    style={Styles.PrognosticTableHeaderText}>Тип события</Text>
                            </View>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe'
                                style={Styles.PrognosticSumCell}>
                                <Text
                                    testID='test-id-1a9a1066-eaf2-11e0-80c1-9a214ag093ae'
                                    style={Styles.PrognosticTableHeaderText}>Прогнозная сумма</Text>
                            </View>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe'
                                style={Styles.PrognosticShevronCell}>
                            </View>
                        </View>
                        <View
                            testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe'
                            style={Styles.progonosticDealListWrapper}>
                            <Table testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f19' noPaddings={true} style={Styles.TablePrognosticProducts}>
                                <TableHead testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f19' style={Styles.HideDefaultHeader} />
                                <TableBody testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f00'>
                                    {pageProps.forecastEventListFetching ?
                                    <View
                                        style={Styles.createForecastEventLoader}
                                        testID='test-id-1'>
                                        <View
                                            testID='test-id-2'
                                            style={Styles.contentCenter}>
                                            <LoaderWithText
                                                text= {'Загрузка данных...'}
                                                testID='test-id-3' />
                                        </View>
                                    </View> :
                                    prognosticProductsRendered}
                                </TableBody>
                            </Table>
                        </View>
                    </View>
                </View>
                <RefreshBar
                    testID='test-id-f7ae59c2-3132-29a9-12f8-8875109b1fc2'
                    performRefresh={pageProps.performForecastEventsListFlush}
                    date={pageProps.forecastEventListCachedDate} />
            </View>
        )
    }

    return (
        <Page
            testID='test-id-cb9cbbef-a35e-4c46-8252-98039277b12e'
            scrollEnabled={false}
            content={
                <ContentPagePrognosticDealInfo {...pageProps}/>
            }>
            <LeftPageHeader testID='test-id-09f9ffcc-79e7-4ab4-a2db-b9e869455ab6'>
                <NavigationBackButton
                    testID='fa4735a9-5593-46f3-8135-d1d2bed38c30'
                    title={false}
                    onClick={pageProps.navigateBack}
                />
                <View
                    style={Styles.navigationBackButtonTextAdjustment}
                    testID='test-id-fb4af253-06e8-4a2a-b933-4190e0283e16' >
                    <NavigationTextButton
                        testID='test-id-558ee189-7659-41d1-baf9-aa63f1f88e1b'
                        title={'Прогнозные продукты'}
                        onExecute={pageProps.navigateBack}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-80fe8a44-044b-4725-a39f-c6fa1aee5f08'>
                <H2 testID='test-id-65f495a8-f0cb-4de1-93ed-30b8496e83c6'>{pageTitle}</H2>
            </CenterPageHeader>
        </Page>
    )
};

// Страница: Создание прогнозного события
const PageCreditProductForecastEventCreate = (props: IProps) => (
    <Page
        testID='test-id-1'
        scrollEnabled={false}
        content={
            <ContainerForecastEventEditor />
        }>
        <LeftPageHeader testID='test-id-2' />
    </Page>
);

// Страница: Редактирование прогнозного события
const PageCreditProductForecastEventUpdate = (props: IProps) => (
    <Page
        testID='test-id-1'
        scrollEnabled={false}
        content={
            <ContainerForecastEventEditor />
        }>
        <LeftPageHeader testID='test-id-2' />
    </Page>
);



/*
 * UI stateless functional component presenter for 'ProductCredit' container.
 */
export interface IProps {
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCreditProduct: Models.CreditProduct,
    currentCustomerManaged: Models.CustomerManaged,
    currentExchangePerson: ModelsScheduler.Person,
    currentForecastEvent: Models.ForecastEvent,
    currentTab: Enums.ProductCreditTab,
    forecastEventList: Models.ForecastEventList,
    forecastEventListCachedDate: Date | null,
    forecastEventListError: Models.Error | null,
    forecastEventListFetching: boolean,
    forecastEventListFiltered: Models.ForecastEventList,
    inputActiveFilterForecastEventType: ModelsApp.Classifier | null,
    inputActiveFilterPeriodEnd: Date | null,
    inputActiveFilterPeriodStart: Date | null,
    inputActiveFilterPeriodType: Enums.ForecastPeriodType,
    inputFilterForecastEventType: ModelsApp.Classifier | null,
    inputFilterPeriodEnd: Date | null,
    inputFilterPeriodStart: Date | null,
    inputFilterPeriodType: Enums.ForecastPeriodType,
    inputForecastEventComment: string,
    inputForecastEventCurrency: ModelsApp.Classifier,
    inputForecastEventDate: Date | null,
    inputForecastEventEmail: string,
    inputForecastEventPossibility: number,
    inputForecastEventSum: string | null,
    inputForecastEventType: ModelsApp.Classifier | null,
    inputFullRepayment: boolean,
    inputPaymentScheduleFilterOperCodeCred: boolean,
    inputPaymentScheduleFilterOperCodeProc: boolean,
    inputPaymentScheduleFilterOperCodeOther: boolean,
	inputPaymentScheduleFilterOperCodeCredApplied: boolean,
	inputPaymentScheduleFilterOperCodeProcApplied: boolean,
	inputPaymentScheduleFilterOperCodeOtherApplied: boolean,
	inputPaymentScheduleFilterOperCodeCredOld: boolean,
	inputPaymentScheduleFilterOperCodeProcOld: boolean,
	inputPaymentScheduleFilterOperCodeOtherOld: boolean,
    inputPaymentScheduleFilterPeriodEnd: Date | null,
    inputPaymentScheduleFilterPeriodStart: Date | null,
    inputPaymentScheduleFilterPeriodEndApplied: Date | null,
    inputPaymentScheduleFilterPeriodStartApplied: Date | null,
	inputPaymentScheduleFilterPeriodEndOld: Date | null,
	inputPaymentScheduleFilterPeriodStartOld: Date | null,
    inputPaymentScheduleFilterStatusExecPay: boolean,
    inputPaymentScheduleFilterStatusForPay: boolean,
    inputPaymentScheduleFilterStatusNotPay: boolean,
	inputPaymentScheduleFilterStatusExecPayApplied: boolean,
	inputPaymentScheduleFilterStatusForPayApplied: boolean,
	inputPaymentScheduleFilterStatusNotPayApplied: boolean,
	inputPaymentScheduleFilterStatusExecPayOld: boolean,
	inputPaymentScheduleFilterStatusForPayOld: boolean,
	inputPaymentScheduleFilterStatusNotPayOld: boolean,
    inputValidationForecastEventComment: string | null,
    inputValidationForecastEventCurrency: string | null,
    inputValidationForecastEventEmail: string | null,
    inputValidationForecastEventPossibility: number | null,
    inputValidationForecastEventSumm: string | null,
    inputValidationForecastEventType: string | null,
    isModalForecastEventSaveErrorVisible: boolean,
    isPopoverPaymentSchedulePeriodFilterSelectedFromDatePicker: boolean,
    isVisiblePopoverFilter: boolean,
    isVisiblePopoverForecastEvent: boolean,
    isVisiblePopoverPaymentScheduleOperationTypeFilter: boolean,
    isVisiblePopoverPaymentSchedulePeriodFilter: boolean,
    isVisiblePopoverPaymentScheduleStatusFilter: boolean,
    isVisiblePaymentScheduleRefreshModalAlert: boolean,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    navigateProductCreditBack: ModelsProductCredit.NAVIGATE_PRODUCT_CREDIT_BACK,
    navigateProductCreditDealBack: ModelsProductCredit.NAVIGATE_PRODUCT_CREDIT_DEAL_BACK,
    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateToForecastEventCurrencyPickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_CURRENCY_PICKER_SCREEN,
    navigateToForecastEventFilterPeriodScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_PERIOD_SCREEN,
    navigateToForecastEventFilterTypePickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_FILTER_TYPE_PICKER_SCREEN,
    navigateToForecastEventPossibilityPickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_POSSIBILITY_PICKER_SCREEN,
    navigateToForecastEventTypPickerScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_EVENT_TYP_PICKER_SCREEN,
    navigateToForecastScreen: ModelsProductCredit.NAVIGATE_TO_FORECAST_SCREEN,
    navigateToPaymentScheduleScreen: ModelsProductCredit.NAVIGATE_TO_PAYMENT_SCHEDULE_SCREEN,
    navigateToPeriodTypeCustomScreen: ModelsProductCredit.NAVIGATE_TO_PERIOD_TYPE_CUSTOM_SCREEN,
    newForecastEventSaveError: Models.Error | null,
    newForecastEventSaveInProgress: boolean,
    performChangeTab: ModelsProductCredit.PERFORM_CHANGE_TAB,
    performContainerReset: ModelsProductCredit.PERFORM_CONTAINER_RESET,
    performCustomerOpen: ModelsProductCredit.PERFORM_CUSTOMER_OPEN,
    performFillDefaultValuesAndShowCreateEventPopup: ModelsProductCredit.PERFORM_FILL_DEFAULT_VALUES_AND_SHOW_CREATE_EVENT_POPUP,
    performFilterApply: ModelsProductCredit.PERFORM_FILTER_APPLY,
    performFilterCreateEventPopupReset: ModelsProductCredit.PERFORM_CREATE_EVENT_POPUP_RESET,
    performFilterCustomDateApply: ModelsProductCredit.PERFORM_FILTER_CUSTOM_DATE_APPLY,
    performFilterEventTypeReset: ModelsProductCredit.PERFORM_FILTER_RESET,
    performFilterPeriodReset: ModelsProductCredit.PERFORM_FILTER_PERIOD_RESET,
    performFilterReset: ModelsProductCredit.PERFORM_FILTER_RESET,
    performForecastEventSave: ModelsProductCredit.PERFORM_FORECAST_EVENT_SAVE,
    performForecastEventsListFlush: ModelsProductCredit.PERFORM_FORECAST_EVENTS_LIST_FLUSH,
    performHideModalForecastEventSaveError: ModelsProductCredit.PERFORM_HIDE_MODAL_FORECAST_EVENT_SAVE_ERROR,
    performInputFilterForecastEventType: ModelsProductCredit.PERFORM_INPUT_FILTER_FORECAST_EVENT_TYPE,
    performInputFilterPeriodEnd: ModelsProductCredit.PERFORM_INPUT_FILTER_PERIOD_END,
    performInputFilterPeriodStart: ModelsProductCredit.PERFORM_INPUT_FILTER_PERIOD_START,
    performInputFilterPeriodType: ModelsProductCredit.PERFORM_INPUT_FILTER_PERIOD_TYPE,
    performInputForecastEventComment: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_COMMENT,
    performInputForecastEventCurrency: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_CURRENCY,
    performInputForecastEventDate: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_DATE,
    performInputForecastEventEmail: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_EMAIL,
    performInputForecastEventPossibility: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_POSSIBILITY,
    performInputForecastEventSum: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_SUM,
    performInputForecastEventType: ModelsProductCredit.PERFORM_INPUT_FORECAST_EVENT_TYPE,
    performInputFullRepayment: ModelsProductCredit.PERFORM_INPUT_FULL_REPAYMENT,
    performinputPaymentScheduleFilterOperCodeCred: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_DEBT_REPAYMENT,
    performinputPaymentScheduleFilterOperCodeProc: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_INTEREST_REPAYMENT,
    performinputPaymentScheduleFilterOperCodeOther: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_OTHER_REPAYMENT,
    performInputPaymentScheduleFilterPeriodEnd: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_END,
    performInputPaymentScheduleFilterPeriodStart: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_PERIOD_START,
    performinputPaymentScheduleFilterStatusExecPay: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_PAID,
    performinputPaymentScheduleFilterStatusForPay: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_TO_PAY,
    performinputPaymentScheduleFilterStatusNotPay: ModelsProductCredit.PERFORM_INPUT_PAYMENT_SCHEDULE_FILTER_STATUS_UNPAID,
    performPopoverFilterHide: ModelsProductCredit.PERFORM_POPOVER_FILTER_HIDE,
    performPopoverFilterShow: ModelsProductCredit.PERFORM_POPOVER_FILTER_SHOW,
    performPopoverForecastEventHide: ModelsProductCredit.PERFORM_POPOVER_FORECAST_EVENT_HIDE,
    performPopoverForecastEventShow: ModelsProductCredit.PERFORM_POPOVER_FORECAST_EVENT_SHOW,
    performPopoverPaymentScheduleOperationTypeFilterHide: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_HIDE,
    performPopoverPaymentScheduleOperationTypeFilterShow: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_OPERATION_TYPE_FILTER_SHOW,
    performPopoverPaymentSchedulePeriodFilterHide: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_HIDE,
    performPopoverPaymentSchedulePeriodFilterShow: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SHOW,
    performPopoverPaymentSchedulePeriodSwitchDatePicker: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_PERIOD_FILTER_SWITCH_DATEPICKER,
    performPopoverPaymentScheduleStatusFilterHide: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_HIDE,
    performPopoverPaymentScheduleStatusFilterShow: ModelsProductCredit.PERFORM_POPOVER_PAYMENT_SCHEDULE_STATUS_FILTER_SHOW,
    performRefreshForecast: ModelsProductCredit.PERFORM_REFRESH_FORECAST,
    performRepeatForecastEventSave: ModelsProductCredit.PERFORM_REPEAT_FORECAST_EVENT_SAVE,

    performCancelEditForecastEvent: ModelsProductCredit.PERFORM_CANCEL_EDIT_FORECAST_EVENT,
    performSaveEditForecastEvent: ModelsProductCredit.PERFORM_SAVE_EDIT_FORECAST_EVENT,

    performForecastEventDelete: ModelsProductCredit.PERFORM_FORECAST_EVENT_DELETE,
    performOpenForecastEventDetails: ModelsProductCredit.PERFORM_OPEN_FORECAST_EVENT_DETAILS,

    performCustomerOpenExecute: ModelsProductCredit.PERFORM_CUSTOMER_OPEN_EXECUTE,
    navigateToProductForecastEventInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,

    productContextMode: Enums.ProductContextMode,
    productListAgreementStatus: Enums.ProductListAgreementStatus,
    currentDeal: Models.ForecastDeal,

    performForecastEventCreate: ModelsProductCredit.PERFORM_FORECAST_EVENT_CREATE,
    performForecastEventUpdate: ModelsProductCredit.PERFORM_FORECAST_EVENT_UPDATE,

    performPrognosticEventCreate: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_CREATE,
    performPrognosticEventUpdate: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_UPDATE,
    performPrognosticEventDetail: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_DETAIL,
    paymentScheduleList: Models.PaymentScheduleList,
    paymentScheduleListFiltered: Models.PaymentScheduleList,
    paymentScheduleListFetching: boolean,
    paymentScheduleListLoadMoreFetching: boolean,
    paymentScheduleListError: Models.Error | null,
    paymentScheduleListCachedDate: Date | null,
    performPaymentScheduleListFlush: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_LIST_FLUSH,
    performPaymentScheduleFilterPeriodSave: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SAVE,
    performPaymentScheduleFilterPeriodSetDefault: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_SET,
    performPaymentScheduleFilterOperationTypeSave: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_SAVE,
    performPaymentScheduleFilterStatusSave: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_SAVE,
    performPaymentScheduleLoadMore: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_LOAD_MORE,
    performPaymentScheduleAlertHide: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_HIDE,
    performPaymentScheduleAlertShow: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_SHOW,
    performPaymentScheduleFilterPeriodReset: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_PERIOD_RESET,
    performPaymentScheduleFilterOperationTypeReset: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_OPERATION_TYPE_RESET,
    performPaymentScheduleFilterStatusReset: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_FILTER_STATUS_RESET,

    covenantListFetching: boolean,
    covenantListFetchingError: Models.Error | null,
    navigateToCovenantListPage: ModelsProductCredit.PERFORM_NAVIGATE_TO_COVENANT_LIST_PAGE,
    performCallGetProductCovenantListCacheReset: ModelsProductCredit.PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET,
    productCovenantList: Models.ProductCovenantList,
    testID: string,
    paymentScheduleAlternativeScenariosTitle: string | null,
    paymentScheduleAlternativeScenariosMessage: string | null,
    paymentScheduleAlertViewIsVisible: boolean,
    performPaymentScheduleAlertViewHandleOk: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_OK,
    performPaymentScheduleAlertViewHandleCancel: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ALERT_VIEW_HANDLE_CANCEL,
    paymentScheduleAlternativeScenariosType: Enums.paymentScheduleAlternativeScenariosType | null,
    paymentScheduleErrorModalIsVisible:boolean,
    performPaymentScheduleErrorShow: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_SHOW,
    performPaymentScheduleErrorHide: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_HIDE,
    performPaymentScheduleErrorViewHandleRepeat: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_ERROR_VIEW_HANDLE_REPEAT,
    performPaymentScheduleListRefresh: ModelsProductCredit.PERFORM_PAYMENT_SCHEDULE_LIST_REFRESH,
}
const getPageProductCovenantList = (props: IProps):  React.ReactElement<Page> => (
    <Page testID="test-id-870d038c-195b-11e8-accf-0ed5f89f718b"
        content = {<ContainerProductCovenantList testID = 'testID-CustomerProductCreditCovenantList' />}>
        <LeftPageHeader testID='test-id-9030ca5c-1951-11e8-accf-0ed5f89f718b'>
            <NavigationBackButton
                testID='test-id-7e19ec54-195b-11e8-accf-0ed5f89f718b'
                title={false}
                onClick={() => props.navigateProductCreditBack()}
            />
            <View
                testID='test-id-69367a50-195b-11e8-accf-0ed5f89f718b'
                style={Styles.navigationBackButtonTextAdjustment} >
                <NavigationTextButton
                    testID='test-id-7a8bb5cc-195b-11e8-accf-0ed5f89f718b'
                    title={'Кредит'}
                    onExecute={() => props.navigateProductCreditBack()}
                />
            </View>
        </LeftPageHeader>
        <CenterPageHeader testID='test-id-75fec8a0-195b-11e8-accf-0ed5f89f718b'>
            <H2 testID='test-id-672590bc0-195b-11e8-accf-0ed5f89f718b'>
                {'Мониторинг исполнения ковенантов'}
            </H2>
        </CenterPageHeader>
    </Page>
)

const ViewProductCredit: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    const openedCredit = (
        <SplitPanel
            testID='test-id-892a3e4a-cb89-833d-a1c1-a427160c08ed'
            id={Utils.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)}>
            <ContentPanel
                testID='test-id-6ae991e8-ee21-de4d-bcfb-b5438452cd5e'
                style={ContentPanelBackgroundColorPureObject}>
                {
                    PageCreditProductInfo(props, 'Кредит')
                }
                {
                    PageCreditProductForecastEventList(props)
                }
                {
                    PageCreditProductForecastEventDetail(
                        props,
                        props.performForecastEventUpdate,
                        props.navigateProductCreditBack)
                }
                {
                    PageCreditProductForecastEventCreate(props)
                }
                {
                    PageCreditProductForecastEventUpdate(props)
                }
                {
                    PageCreditProductPaymentSchedule(props, 'График платежей')
                }
                {
                    getPageProductCovenantList(props)
                }
            </ContentPanel>
        </SplitPanel>
    )

    const prognosticCredit = (
        <SplitPanel
            testID='test-id-e5267041-1a60-485e-a484-cbbbbac0baca'
            id={Utils.getNavigationContentPrognosticCreditProduct(Enums.NavigationAppCRMPrognosticCreditProduct.AppCRM_PrognosticCreditProduct)} >
            <ContentPanel
                testID='test-id-54e831ce-0682-4527-adc1-0148c342078f'
                style={ContentPanelBackgroundColorPureObject}>
                {
                    PagePrognosticDealInfo(props, `${props.currentDeal && props.currentDeal.productType.value} (прогноз)`)
                }
                {
                    PageCreditProductForecastEventDetail(
                        props,
                        props.performPrognosticEventUpdate,
                        props.navigateProductCreditDealBack)
                }
                {
                    PageCreditProductForecastEventCreate(props)
                }
                {
                    PageCreditProductForecastEventUpdate(props)
                }
            </ContentPanel>
        </SplitPanel>
    )

    return (
        <View
            style={Styles.productCreditWrapper}
            testID={'test-id-0f91be91-2d2b-4801-ab54-ebd02df75c71'}>
            {props.productListAgreementStatus === Enums.ProductListAgreementStatus.Prognostic ? prognosticCredit : openedCredit}

        </View>
    )
}

export default ViewProductCredit

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
