/**
 * ForecastEventEditor component.
 */
'use strict'

import React from 'react';

import Styles, {
    ContentPanelBackgroundColorPureObject,
    StylesUFSPir28
} from './styles/ViewForecastEventEditorStyles';

import {
    Button,
    ButtonType,
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
    Modal,
    NavigationBackButton,
    NavigationFilterButton,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    NumberInput,
    OptionItem,
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
    TabSelector,
    Text,
    Textarea,
    TextInput,
    View,
} from 'ufs-mobile-platform';

import {DatePicker, TouchableOpacity, KeyboardAvoidingView} from 'mrmkmcib-ui';
import {defaultValues} from '../models/Models';
import {Enums} from '../Enums';
import {
    ExtendedTable,
    ExtendedTableCell,
    LoaderWithText,
    Models as ModelsApp,
    RefreshBar,
} from 'mrmkmcib-app';
import {Models as ModelsScheduler} from 'mrmkmcib-scheduler';
import {Models, SelectClassifier as SelectClassifierCrm} from 'mrmkmcib-crm';
import * as ModelsForecastEventEditor from '../models/ModelsForecastEventEditor';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
import * as ModelsProductCredit from '../models/ModelsProductCredit';
import * as ModelsProductList from '../models/ModelsProductList';
import * as ModelsAppProductList from "../models/ModelsProductList";
import * as Utils from '../common/Util';
import PopoverTarget from '../modules/PopoverTarget';
import { classifierFilterInterface } from '../common/Util';

export interface IForecastEventTypeFiltered {
    code: string
}

const creatableCreditTypes: Array<classifierFilterInterface> = [
    {code: 'ВЫДАЧА_K_Т'},
    {code: 'ГАШЕНИЕ_K_T'}
]

const editableCreditTypes: Array<classifierFilterInterface> = [
    {code: 'ВЫДАЧА_K_Т'},
    {code: 'ГАШЕНИЕ_K_T'},
    {code: 'ГАШЕНИЕ_П_K_T'}
]

const getEventTypeChoiceData = (props:IProps, filteredTypes: Array<classifierFilterInterface>): ModelsApp.ClassifierList => {
    return {
        data: Utils.filterClassifierData(props.classifierDictionary.UFS_FC_EVENT_TYPE.data, filteredTypes)
    }
}

export interface ISelectorProps {
    errorText?: string,
    hasError?: boolean,
    icon: number,
    label: string,
    onExecute: () => void,
    popover?: JSX.Element,
    value: string,
}

const Selector = (props: ISelectorProps) => {
    return (
        <View
            testID='test-id-1'
            style={Styles.selectorWrap}>
            <TouchableOpacity
                onPress={() => props.onExecute()}
                activeOpacity={1}>
                <TextInput
                    testID='test-id-2'
                    label={props.label}
                    hasError={props.hasError || false}
                    errorText={props.errorText || ''}
                />
                <View
                    testID='test-id-3'
                    style={Styles.selectorView}>
                    <Text
                        testID={'test-id-4'}
                        style={Styles.selectorViewText}>
                        {props.value}
                    </Text>
                </View>
                <View
                    testID='test-id-5'
                    style={Styles.selectorIcon}>
                    <Button
                        testID='test-id-6'
                        onExecute={() => {}}>
                        <Icon
                            testID='test-id-7'
                            disabled
                            type={props.icon}
                        />
                    </Button>
                    {props.popover ? props.popover : null}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const forecastEventForm = (props: IProps) => {

    const rowForecastEventFullRepaymentNotice = (
        <Row testID='test-id-1'>
            <Col
                testID='test-id-2'
                xs={12}>
                <View
                    testID='test-id-3'
                    style={Styles.fullRepaymentNoticeContainer}>
                        <Text
                            testID='test-id-4'
                            style={Styles.fullRepaymentText} >
                            {'При полном досрочном погашении сумма рассчитывается автоматически.'}
                        </Text>
                        <Text
                            style={Styles.fullRepaymentTextPaddingTop}
                            testID='test-id-5' >
                            {'Прогнозные события по договору будут пересчитаны.'}
                        </Text>
                </View>
            </Col>
        </Row>
    )

    const typeEvent = (
        <Selector label={'Тип события'}
            value={props.inputForecastEventType && props.inputForecastEventType.value || 'Нет'}
            onExecute={() => props.navigateToForecastTypeSelection()}
            icon={IconType.MrmLink}
            hasError={!!props.inputValidationForecastEventType}
            errorText={props.inputValidationForecastEventType || ''}
        />
    )

    const isRepayment: boolean = !!(props.inputForecastEventType && props.inputForecastEventType.code === 'ГАШЕНИЕ_K_T')
    const isFullRepayment: boolean = (isRepayment && props.inputForecastEventFullRepayment)
    const fullRepayment = (
        <View testID='test-id-1'>
            <View
                testID='test-id-2'
                style={Styles.fullRepaymentWrapper} >
                <Checkbox
                    testID='test-id-3'
                    checked={props.inputForecastEventFullRepayment}
                    label={'Полное погашение'}
                    onChange={props.performForecastEventFormUpdateFullRepayment}
                />
            </View>
        </View>
    )

    const rowForecastSumAndCurrency = (
        <Row testID='test-id-11'>
            <Col
                testID='test-id-12'
                xs={6}>
                <View
                    testID='test-id-1'
                    style={Styles.forecastEventFieldWrapper}>
                    <NumberInput
                        testID='test-id-2'
                        label='Прогнозная сумма'
                        value={props.inputForecastEventSum}
                        hasError={!!props.inputValidationForecastEventSum}
                        errorText={props.inputValidationForecastEventSum || ''}
                        onChange={(value) => {props.performForecastEventFormUpdateSum(value)}}
                    />
                </View>
            </Col>
            {isRepayment ?
                <Col
                    testID='test-id-f04fa9e0-00b7-4716-b39e-a1a15c75ff1b'
                    xs={6}>
                </Col> :
                <Col
                    testID='test-id-6a723cdb-ea29-4ba5-a491-c536731f3b38'
                    xs={6}>
                    <Selector label={'Валюта'}
                        value={props.inputForecastEventCurrency && props.inputForecastEventCurrency.value || 'RUB'}
                        onExecute={() => props.navigateToForecastCurrencySelection()}
                        icon={IconType.MrmLink}
                    />
                </Col>
            }
        </Row>
    )

    const possibilityPopover = (
        <View testID='test-id-74j12cfd-gh65-a905-4444-dc2123ft4fec'>
            <Popover
                testID='test-id-141962be-2298-b155-5b7f-c45c92f93b12'
                target={PopoverTarget.getRef('editForecastEventPossibilitySelection')}
                opened={props.isVisibleForecastEventPossibilityPopover}
                onOutsideTap={props.performPopoverForecastEventFormPossibilitySelectionHide}
                type={PopoverType.NARROW}
                style={{height: 200}}
                position={[PopoverPosition.BOTTOM]} >
                <SplitPanel testID='test-id-c6c86340-a0ef-a345-45e1-6f6db2b47924'
                            id={'forecastEventEditPage'}>
                    <ContentPanel testID='test-id-c2acf614-0097-d72f-73c3-9d6836a90252'
                                  style={{ backgroundColor: '#fff' }}>
                        <Page testID='test-id-60952d58-85dc-6ae8-e81b-1029d939ffa4' scrollEnabled={true}
                              content={
                                  <RadioGroup
                                      testID='test-id-43754701-34f0-b5ce-2185-71f2867a299f'
                                      value={String(props.inputForecastEventPossibility)}
                                      onChange={(index: number, value: string) => {
                                          const possibility = Number(value)
                                          props.performForecastEventFormUpdatePossibility(possibility)
                                      }}>
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.1'}
                                          label={'10%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.2'}
                                          label={'20%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.3'}
                                          label={'30%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.4'}
                                          label={'40%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.5'}
                                          label={'50%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.6'}
                                          label={'60%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.7'}
                                          label={'70%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.8'}
                                          label={'80%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'0.9'}
                                          label={'90%'}
                                      />
                                      <RadioButton
                                          testID='test-id-567db75b-5b58-0afb-63f3-2bb6efcf0358'
                                          value={'1'}
                                          label={'100%'}
                                      />
                                  </RadioGroup>
                              }>
                        </Page>
                    </ContentPanel>
                </SplitPanel>
            </Popover>
            <PopoverTarget testID='test-id-515ab097-750e-80bb-cf24-8619f9dc0b0e'
                           refName={'editForecastEventPossibilitySelection'} />
        </View>
    )

    return (
        <View testID='test-id-1'>
            <KeyboardAvoidingView
                behavior={'position'}
                contentContainerStyle={null}
                keyboardVerticalOffset={50}
                style={null}
                >
                {
                    props.savingForecastEventInProgress ?
                        <View testID='test-id-2-wrapper' style={Styles.loaderWrapper}>
                            <LoaderWithText
                                testID='test-id-f8f9bc1f-b0b0-0d1f-4a6c-b65cdb714e7c'
                                text={'Создание прогнозного события'}/>
                        </View> :
                        <Grid testID='test-id-2'>

                            {/*Информация для случая полного погашения кредита*/}
                            {isFullRepayment ? rowForecastEventFullRepaymentNotice : null}

                            <Row testID='test-id-3'>
                                <Col
                                    testID='test-id-4'
                                    xs={0}>
                                    <View testID='test-id-5'>
                                        <Label
                                            testID='test-id-5'
                                            text={'Клиент'}
                                            header={''}
                                            block={true}>
                                            <Text testID='test-id-5'>{props.currentCustomerManaged.name}</Text>
                                        </Label>
                                    </View>
                                </Col>
                            </Row>

                            <Row testID='test-id-6'>
                                <Col
                                    testID='test-id-7'
                                    xs={6}>
                                    {/*Тип события*/}
                                    {typeEvent}
                                </Col>
                                <Col
                                    testID='test-id-7'
                                    xs={6}>
                                    {/*Полное гашение*/}
                                    {isRepayment ? fullRepayment : null}
                                </Col>
                            </Row>

                            <Row testID='test-id-8'>
                                <Col
                                    testID='test-id-74j2331d-2vv4-a905-4444-dc2a3fet4fec'
                                    xs={6}>
                                    <View
                                        testID='test-id-20'
                                        style={Styles.forecastEventFieldWrapper}>
                                        {/*Дата события*/}
                                        <DateInput
                                            dateType={DateInputTypes.DAY_TIME_PICKER}
                                            format='dd.MM.yyyy'
                                            label={'Дата события'}
                                            locale='ru'
                                            onChange={props.performForecastEventFormUpdateDate}
                                            testID='test-id-1'
                                            value={props.inputForecastEventDate || new Date()}
                                        />
                                    </View>
                                </Col>
                                <Col
                                    testID='test-id-10'
                                    xs={6}>
                                    {/*Вероятность*/}
                                    <Selector label={'Вероятность'}
                                              value={props.inputForecastEventPossibility ? `${(Number(props.inputForecastEventPossibility) * 100).toFixed(0)}%` : 'Нет'}
                                              onExecute={() => props.performPopoverForecastEventFormPossibilitySelectionShow()}
                                              icon={IconType.MrmArrowDown}
                                              popover={possibilityPopover}
                                    />
                                </Col>
                            </Row>

                            {/*Прогнозная сумма и Валюта*/}
                            {!props.inputForecastEventFullRepayment ? rowForecastSumAndCurrency : null}

                            <Row testID='test-id-19'>
                                <Col
                                    testID='test-id-20'
                                    xs={0}>
                                    <View
                                        testID='test-id-20'
                                        style={Styles.forecastEventFieldWrapper}>
                                        <TextInput
                                            testID='test-id-21'
                                            value={props.inputForecastEventEmail}
                                            keyboardType={KeyboardType.Email}
                                            label='E-Mail для отправки уведомлений'
                                            placeholder='Укажите e-mail'
                                            hasError={!!props.inputValidationForecastEventEmail}
                                            errorText={props.inputValidationForecastEventEmail || ''}
                                            onChange={(email) => props.performForecastEventFormUpdateEmail(email)}
                                        />
                                    </View>
                                </Col>
                            </Row>

                            <Row testID='test-id-22'>
                                <Col
                                    testID='test-id-23'
                                    xs={0}>
                                    <View
                                        testID='test-id-25'
                                        style={Styles.forecastEventFieldWrapper}>
                                <Textarea
                                    testID='test-id-26'
                                    value={props.inputForecastEventComment}
                                    label='Примечание'
                                    placeholder='Введите примечание'
                                    onChange={(comment: string) => props.performForecastEventFormUpdateComment(comment)}
                                />
                                    </View>
                                </Col>
                            </Row>

                        </Grid>
                }
            </KeyboardAvoidingView>
        </View>
    )
}

const contentForecastEventForm = (props: IProps) => {

    const confirmDeletePopover = (
        <View testID={`confirmDeletePopover`}>
            <Popover testID='test-id-1'
                target={PopoverTarget.getRef('confirmDeletePopoverRef')}
                opened={props.isVisibleForecastEventDeletePopover}
                onOutsideTap={props.performPopoverForecastEventDeleteHide}
                type={PopoverType.WIDE}
                style={{height: 160, width: 500}}
                position={[PopoverPosition.TOP]}>
                <View testID={`refresh-bar-1-`} style={Styles.deletePopoverTextWrapper}>
                    <Text testID='test-id-1' style={Styles.deletePopoverText}>Вы уверены, что хотите удалить прогнозное событие?</Text>
                </View>
                <View testID={`refresh-bar-4-`} style={Styles.deletePopoverItemWrapper}>
                    <Button
                        testID='qweqweqw'
                        type={ButtonType.TEXT_RED}
                        onExecute={props.performForecastEventDelete}>
                        <Text testID={`refresh-bar-5-`}>
                            {'Да'}
                        </Text>
                    </Button>
                </View>
                <View testID={`refresh-bar-4-`} style={Styles.deletePopoverItemWrapper}>
                    <Button
                        testID='qweqweqw'
                        type={ButtonType.TEXT}
                        onExecute={props.performPopoverForecastEventDeleteHide}>
                        <Text testID={`refresh-bar-5-`}>
                            {'Нет'}
                        </Text>
                    </Button>
                </View>
            </Popover>
        </View>
    )

    const deleteButton = (
        <View testID={`refresh-bar-1-`} style={Styles.deleteButton}>
            <View testID={`refresh-bar-4-`} style={Styles.deleteButtonWrapper}>
                <PopoverTarget testID='test-id-515ab097-750e-80bb-cf24-8619f9dc0b0e'
                refName={'confirmDeletePopoverRef'} />
                <Button
                    testID='qweqweqw'
                    type={ButtonType.TEXT_RED}
                    onExecute={props.performPopoverForecastEventDeleteShow}>
                    <Text testID={`refresh-bar-5-`}>
                        {'Удалить событие'}
                    </Text>
                </Button>
            </View>
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
                    {props.savingForecastEventError && Utils.getForecastEventSaveErrorComment(props.savingForecastEventError)}
                </Text>
            </View>
            <View style={Styles.createForecastEventButtonWrapper}>
                <View style={Styles.createForecastEventButton}>
                    <Button testID='test-id-26eabd79-0001-60f7-cf41-627f500e7550'
                            onExecute={props.performModalForecastEventSaveErrorHide}
                            type={ButtonType.TEXT}>
                        <Text testID='test-id-26eabd79-0001-10f7-c141-627f501e7550'>OK</Text>
                    </Button>

                </View>
                <View style={[Styles.createForecastEventButton, Styles.createForecastEventButtonBorder]}>
                    <Button testID='test-id-26eabd39-0001-6047-cf41-627f500e5940'
                            onExecute={props.performForecastEventSaveRepeat}
                            type={ButtonType.TEXT}>
                        <Text testID='test-id-26eabd79-0001-61f7-cf41-6271500a7550'>Повторить</Text>
                    </Button>
                </View>
            </View>
        </View>
    )

    return (
        <View
            testID='test-id-1'
            style={Styles.forecastEventEditorFormWrapper}>
            <View
                testID='test-id-2'
                style={Styles.forecastEventEditorFormContainer}>
                {forecastEventForm(props)}
            </View>
            <Modal
                animationType={'slide'}
                visible={props.isVisibleForecastEventModalSaveError}
                transparent={true}
                supportedOrientations={['landscape']}
                onOrientationChange={() => {/*  */}}>
                <View style={Styles.createForecastEventPopoverWrapper}>
                    {errorView}
                </View>
            </Modal>
            {confirmDeletePopover}
            {props.isEditableMode ? deleteButton : null}
        </View>
    )
}

// Страница: Создание прогнозного события
const PageForecastEventForm = (props: IProps) => {

    return (
        <Page
            testID='test-id-0ec19627-1974-48ef-9f39-f865498a3d6c'
            scrollEnabled={true}
            content={contentForecastEventForm(props)}
        >
            <LeftPageHeader testID='test-id-9bcc8278-d093-4501-b2b5-7930bb352155'>
                {
                    props.savingForecastEventInProgress ? <View/> :
                        <NavigationTextButton
                            testID='test-id-8cfcc42a-bc51-4219-aaa3-3c1479d12b72'
                            title={'Отмена'}
                            onExecute={props.performForecastEventFormCancel}
                        />
                }
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-94cdc37f-9303-4b46-a831-f7adf7f6a03f'>
                <H2 testID='test-id-fea04b84-19fe-4f6f-8a76-3ad2eff41c96'>
                    {props.isEditableMode ? 'Изменение прогнозного события' : 'Новое прогнозное событие'}
                </H2>
            </CenterPageHeader>
            <RightPageHeader testID='test-id-a021f6d8-85b4-4667-809b-865c6f986a5d'>
                {
                    props.savingForecastEventInProgress ? <View/> :
                        <NavigationTextButton
                            testID='test-id-692f35ff-7762-4c15-8bfb-ee70081dbfb8'
                            title={props.isEditableMode ? 'Сохранить' : 'Создать'}
                            onExecute={props.performForecastEventSave}
                        />
                }
            </RightPageHeader>
        </Page>
    )
}

const contentForecastEventTypeSelection = (props: IProps) => {
    return (
        <View testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
              style={Styles.forecastEventEditorTypeSelectionWrapper}>
            <View testID='test-id-6720011e-927d-0000-167a-0ca21ea40300'
                  style={Styles.forecastEventEditorTypeSelectionContainer}>
                <SelectClassifierCrm
                    testID='test-id-320b0a2e-c433-0409-51f4-29cbf00b3b8d'
                    classifierList={props.isEditableMode ?
                        getEventTypeChoiceData(props, editableCreditTypes) :
                        getEventTypeChoiceData(props, creatableCreditTypes)}
                    performSelect={props.performForecastEventFormUpdateType}
                    selectedCode={props.inputForecastEventType && props.inputForecastEventType.code}
                />
            </View>
        </View>
    )
}

// Страница: Выбор типа события
const PageForecastEventTypeSelection = (props: IProps) => {
    return (
        <Page
            testID='test-id-9c5aaadb-4729-4182-6b5f-4c42777dbcec'
            scrollEnabled={false}
            content={contentForecastEventTypeSelection(props)}>
            <LeftPageHeader testID='test-id-672b006e-927d-da8c-167a-0ca21ea4b300'>
                <NavigationBackButton
                    testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                    title={false}
                    onClick={() => props.navigateBack()}
                />
                <View testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                    style={Styles.navigationBackButtonTextAdjustment}>
                    <NavigationTextButton
                        testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                        title={props.isEditableMode ? 'Изменение события' : 'Создание события'}
                        onExecute={() => props.navigateBack()}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec'>
                <H2 testID='test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82'>
                    {'Выбор типа события'}
                </H2>
            </CenterPageHeader>
        </Page>
    )
}

const contentForecastEventCurrencySelection = (props: IProps) => {
    return (
        <View testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
              style={Styles.forecastEventEditorCurrencySelectionWrapper}>
            <View testID='test-id-6720011e-927d-0000-167a-0ca21ea40300'
                  style={Styles.forecastEventEditorCurrencySelectionContainer}>
                <SelectClassifier
                    testID='test-id-49bff0c1-fa34-2ea0-26c9-e3a48d2d5c45'
                    classifierList={props.classifierDictionary.CURRENCY}
                    performSelect={props.performForecastEventFormUpdateCurrency}
                    selectedCode={props.inputForecastEventCurrency && props.inputForecastEventCurrency.code || props.currentDeal.currency.code} />
            </View>
        </View>
    )
}

// Страница: Редактирование прогнозного события
const PageCreditProductEditForecastEventCurrencySelection = (props: IProps) => {
    return (
        <Page
            testID='test-id-9c5aaadb-4729-4182-6b5f-4c42777dbcec'
            scrollEnabled={true}
            content={contentForecastEventCurrencySelection(props)}>
            <LeftPageHeader testID='test-id-672b006e-927d-da8c-167a-0ca21ea4b300'>
                <NavigationBackButton
                    testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                    title={false}
                    onClick={() => props.navigateBack()}
                />
                <View testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                    style={Styles.navigationBackButtonTextAdjustment}>
                    <NavigationTextButton
                        testID='test-id-6720011e-927d-0000-167a-0ca21ea4b300'
                        title={props.isEditableMode ? 'Изменение события' : 'Создание события'}
                        onExecute={() => props.navigateBack()}
                    />
                </View>
            </LeftPageHeader>
            <CenterPageHeader testID='test-id-9c59c4db-4729-4182-6b5f-4c42777dbcec'>
                <H2 testID='test-id-e0372a07-3f60-4abc-9f1d-2e6330124e82'>
                    {'Выбор валюты'}
                </H2>
            </CenterPageHeader>
        </Page>
    )
}

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

/*
 * UI stateless functional component presenter for 'ForecastEventEditor' container.
 */
export interface IProps {
    classifierDictionary: ModelsApp.ClassifierDictionary,
    contextMode: Enums.ForecastEventEditorContextMode,
    currentCustomerManaged: Models.CustomerManaged,
    currentDeal: Models.ForecastDeal,
    currentExchangePerson: ModelsScheduler.Person,
    currentForecastEvent: Models.ForecastEvent,
    inputForecastEventComment: string,
    inputForecastEventCurrency: ModelsApp.Classifier,
    inputForecastEventDate: Date,
    inputForecastEventEmail: string,
    inputForecastEventFullRepayment: boolean,
    inputForecastEventPossibility: number,
    inputForecastEventSum: string,
    inputForecastEventType: ModelsApp.Classifier | null,
    inputValidationForecastEventComment: string | null,
    inputValidationForecastEventCurrency: string | null,
    inputValidationForecastEventEmail: string | null,
    inputValidationForecastEventPossibility: number | null,
    inputValidationForecastEventSum: string | null,
    inputValidationForecastEventType: string | null,
    isEditableMode: boolean,
    isValidForecastEventForm: boolean,
    isVisibleForecastEventDeletePopover: boolean,
    isVisibleForecastEventPossibilityPopover: boolean,
    isVisibleForecastEventModalSaveError: boolean,
    navigateBack: ModelsForecastEventEditor.NAVIGATE_BACK,
    navigateBackToProductCredit: ModelsForecastEventEditor.NAVIGATE_BACK,
    navigateToForecastCurrencySelection: ModelsForecastEventEditor.NAVIGATE_TO_FORECAST_CURRENCY_SELECTION,
    navigateToForecastTypeSelection: ModelsForecastEventEditor.NAVIGATE_TO_FORECAST_TYPE_SELECTION,
    performForecastEventDelete: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_DELETE,
    performForecastEventFormCancel: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_CANCEL,
    performForecastEventFormInit: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_INIT,
    performForecastEventFormLoad: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_LOAD,
    performForecastEventFormReset: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_RESET,
    performForecastEventFormUpdateComment: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_COMMENT,
    performForecastEventFormUpdateCurrency: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_CURRENCY,
    performForecastEventFormUpdateDate: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_DATE,
    performForecastEventFormUpdateEmail: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_EMAIL,
    performForecastEventFormUpdateFullRepayment: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_FULL_REPAYMENT,
    performForecastEventFormUpdatePossibility: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_POSSIBILITY,
    performForecastEventFormUpdateSum: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_SUM,
    performForecastEventFormUpdateType: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_UPDATE_TYPE,
    performForecastEventFormValidate: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_FORM_VALIDATE,
    performForecastEventSave: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_SAVE,
    performForecastEventSaveRepeat: ModelsForecastEventEditor.PERFORM_FORECAST_EVENT_SAVE_REPEAT,
    performModalForecastEventSaveErrorHide:ModelsForecastEventEditor.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_HIDE,
    performModalForecastEventSaveErrorShow: ModelsForecastEventEditor.PERFORM_MODAL_FORECAST_EVENT_SAVE_ERROR_SHOW,
    performPopoverForecastEventDeleteHide: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_DELETE_HIDE,
    performPopoverForecastEventDeleteShow: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_DELETE_SHOW,
    performPopoverForecastEventFormPossibilitySelectionHide: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_HIDE,
    performPopoverForecastEventFormPossibilitySelectionShow: ModelsForecastEventEditor.PERFORM_POPOVER_FORECAST_EVENT_FORM_POSSIBILITY_SELECTION_SHOW,
    savingForecastEventError: Models.Error | null,
    savingForecastEventInProgress: boolean,
    testID: string,
}

const ViewForecastEventEditor: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View
            testID={'test-id-component-ForecastEventEditor'}
            style={Styles.forecastEventEditorWrapper}>
            <SplitPanel
                testID='test-id-1'
                id={Utils.getNavigationAppCRMForecastEventEditor(
                    Enums.NavigationAppCRMForecastEventEditor.AppCRM_ForecastEventEditorForm)
                }>
                <ContentPanel
                    testID='test-id-2'
                    style={ContentPanelBackgroundColorPureObject}>
                    {
                        PageForecastEventForm(props)
                    }
                    {
                        PageForecastEventTypeSelection(props)
                    }
                    {
                        PageCreditProductEditForecastEventCurrencySelection(props)
                    }
                </ContentPanel>
            </SplitPanel>
        </View>
    )
}

export default ViewForecastEventEditor
