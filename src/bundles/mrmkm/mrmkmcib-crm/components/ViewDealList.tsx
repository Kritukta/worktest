/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewDealListStyles'

import {
    Button,
    Center,
    Checkbox,
    ContentPanel,
    LeftPageHeader,
    NavigationBackButton,
    CenterPageHeader,
    H2,
    NumberInput,
    Icon,
    IconType,
    Loader,
    NavigationIconButton,
    NavigationIconButtonType,
    Popover,
    PopoverPosition,
    PopoverType,
    NavigationFilterButton,
    NavigationTextButton,
    OptionItem,
    Page,
    RightPageHeader,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableColumnAlignment,
    TableHead,
    TableRow,
    TabSelector,
    Text,
    View,
} from 'ufs-mobile-platform'

import { Models as ModelsCrm, Models, SelectClassifier } from 'mrmkmcib-crm'
import { Models as ModelsApp, RefreshBar, FullScreenError } from 'mrmkmcib-app'
import { Enums } from '../Enums'
import * as ModelsAppCRM from '../models/ModelsAppCRM'
import * as ModelsDealEditor from '../models/ModelsDealEditor'
import * as ModelsDealList from '../models/ModelsDealList'
import {defaultValues} from '../models/Models'
import Error from '../models/Error'

import * as utils from '../common/Util'
import { CONVERT_ERROR } from '../models/Converters'
import PopoverTarget from '../modules/PopoverTarget'
import {
    IconView,
    NavigationTextButtonDisabled,
    SelectDate,
    SelectDateRow,
    OpacityAnimatedView,
} from 'mrmkmcib-ui'

const _tableColumns = (props: IProps): string[] => ([
    props.currentCustomerManaged.isHolding ? `Предприятие\nСуть` : `Суть\nМоя роль`,
    props.currentTab === Enums.DealListTab.DealOpenedList ? `Стадия\nПлановое закрытие` : `Стадия\nФактическое закрытие`,
    `Сумма в тысячах\nПродукт`
])

export const isCredit = (item: ModelsCrm.Deal): boolean => (
    item.type === Enums.DealType.Credit
)

const myRoleName = (deal: Models.Deal): string => (
    (deal.myRole && deal.myRole.value) || ''
)

const rowsMapper = (user: ModelsApp.Employee) => ({
    search: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map((item:ModelsCrm.Deal) => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: (item.roleClassifier ? utils.getRoleString(item.roleClassifier.value) : ' ') },
        second: { top: item.phaseClassifier.value, bottom: '' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    opened: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? utils.format.date(item.plannedFinishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    closed: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.finishDate ? utils.format.date(item.finishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    holdingSearch: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: (item.roleClassifier ? utils.getRoleString(item.roleClassifier.value) : ' ') },
        second: { top: item.phaseClassifier.value, bottom: '' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    holdingOpened: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? utils.format.date(item.plannedFinishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    })),
    holdingClosed: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map(item => ({
        id: item.id,
        isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
        first: { top: item.customer.name, middle: item.title, bottom: myRoleName(item) },
        second: { top: item.phaseClassifier.value, bottom: item.finishDate ? utils.format.date(item.finishDate) : '-' },
        third: { top: utils.formatDealListSum(item), bottom: utils.productLine(item) },
    }))
})

interface ListRowsData {
    id: string
    isAccessible: boolean
    first: { top: string, middle?: string, bottom: string }
    second: { top: string, bottom: string }
    third: { top: string, bottom: string }
}

const getErrorText = (props: IProps): Error => CONVERT_ERROR(props.refreshError)

const getErrorPanel = (props: IProps): React.ReactElement<View> => (
    <View
        testID='test-id-702ea3b2-ad7d-c0a2-a144-2dec1ef2704e'
        style={Styles.ErrorWrapperCenter}>
        <FullScreenError testID={'test-id-q3ergaeths-aht66-3hsd-wrths-43fqg'}
                         title={
                             getErrorText(props).comment
                         }
                         description={
                             getErrorText(props).message
                         }
                         onRefresh={props.performDealListRefresh}
        />
    </View>
)

const TABS: any = { 0: 'Открытые', 1: 'Закрытые' }

const getFiltersEditorObject = (props: IProps): Models.DealListFilter => (
    props.currentTab === Enums.DealListTab.DealClosedList ?
    props.filtersEditorClosed || {...defaultValues.DealListFilter} :
    props.filtersEditorOpened || {...defaultValues.DealListFilter}
)

interface ISelectClassifierMultiplyProps {
    performSelect: (value: ModelsApp.Classifier, )=>void,
    performUnSelect: (value: ModelsApp.Classifier, )=>void,
    classifierList: ModelsApp.ClassifierList
    selected: ModelsApp.ClassifierList | null | undefined,
    testID: string,
    navigateBack?: ()=>void,
}

const SelectClassifierMultiply = (props: ISelectClassifierMultiplyProps): React.ReactElement<Page> => (
    <Page testID='test-id-bec3186f36f0b' scrollEnabled={true}
        content={<View testID='test-id-bec3824186f0b'
            style={{ marginTop: 20, marginBottom: 20 }}>

            {
                props.classifierList && props.classifierList.data ? props.classifierList.data.map(
                    (element: ModelsApp.Classifier,index: number) => <Checkbox
                        key={`select-multi-classifier-${element.code}-${index}`}
                        testID={'test-id-bec382186f36f0b'}
                        checked={props.selected && props.selected.data.findIndex(selectedElement => selectedElement.code === element.code) >= 0 || false}
                        label={element.value}
                        onChange={
                            (checked: boolean) => checked ? props.performSelect(element) : props.performUnSelect(element)}
                    />) : <Text testID={'test-id-bec382186f3346f0b'}>Отсутствуют значения для выбора</Text>}
        </View>}>
        {props.navigateBack ? [
            <LeftPageHeader testID='test-id-b2503f' key={'left-header-1'}>
                <NavigationBackButton testID='test-id-bec4abbec3e09' title={false}
                    onClick={props.navigateBack} />
            </LeftPageHeader>,
            <CenterPageHeader testID='test-id-0517c9af4e' key={'center-header-3'}>
                <H2 testID='test-id-dfa88e6aa6'>Выбор значения классификатора</H2>
            </CenterPageHeader>] : <LeftPageHeader testID='test-id-b25d3ed9703f1' key={'left-header-2'} />}
    </Page>
)

const BackButtonHeader = (key: string, callback:() => void, title: string): React.ReactElement<LeftPageHeader> => (
    <LeftPageHeader
        key={key}
        testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-1-${key}`} >
        <NavigationBackButton
            testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-2-${key}`}
            title={false}
            onClick={callback} />
        <View
            style={Styles.navigationBackButtonTextAdjustment}
            testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-3-${key}`} >
            <NavigationTextButton
                testID={`test-id-52d35a1a-9fc7-aa3a-1c39-2db47398babe-4-${key}`}
                title={title}
                onExecute={callback} />
        </View>
    </LeftPageHeader>
)


const getFilterPopoverContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    const stage = getFiltersEditorObject(props).stage
    const role = getFiltersEditorObject(props).role

    return (
        <View testID='test-id-33fe61cb-6bb3-4430-5343-ad43655e761a' style={Styles.main}>
            <SplitPanel testID='test-id-a5c9b50c-0009-e862-1d6c-b082e51eddd4'
                id={utils.getNavigationDealListFiltersString(Enums.NavigationPopoverContentDealListFilters.DealListFilters_Main)}>
                <ContentPanel testID='test-id-edfc37ed-e4c7-0f3f-dfd6-5cd986f1d65f' style={{ backgroundColor: '#fff' }}>
                    <Page testID='test-id-b1dc19ae-def0-d965-4220-85fe93ddb750' scrollEnabled={true}
                        content={getFilterPopoverMainPage(props)}>
                        <LeftPageHeader testID='test-id-ee37c5e47'>
                            <NavigationTextButton testID='test-id-b867f8d92183'
                                title={'Сбросить'}
                                onExecute={() => props.performFilterReset(props.currentTab)}
                            />
                        </LeftPageHeader>
                        <RightPageHeader testID='test-id-e0e37c5e47'>
                            <NavigationTextButton testID='test-id-10731c5b7b45'
                                title={'Применить'}
                                onExecute={() => props.performFilterApply(props.currentTab)}
                            />
                        </RightPageHeader>
                        <CenterPageHeader testID='test-id-9ee54834d034ac'>
                            <H2 testID='test-id-57d12478cfb227959'>Фильтры сделок</H2>
                        </CenterPageHeader>
                    </Page>

                <Page testID='test-id-b1dc15fe93ddb750' scrollEnabled={true}
                      content={<SelectClassifier testID={ 'test-id-b1dc15fe93ddb751'}
                                                 selectedCode={( getFiltersEditorObject(props).stage|| {code:''}).code }
                                                 performSelect={(value: ModelsApp.Classifier) => props.performFilterSelectStage(props.currentTab, getFiltersEditorObject(props), value)}
                                                 classifierList={props.filteredStagesList}/>} >
                                                 />} >

                    <CenterPageHeader testID='test-id-05e1fbbd-650817c9af4e' key={'center-header-33'}>
                    <H2 testID='test-id-dcf9baaa-d6e3-dfa88e6aa6'>Выбор стадии</H2>
                </CenterPageHeader>
                </Page>
                <Page testID='test-id-b1dc19ae-def0-d965-4220-85fe93ddb750' scrollEnabled={true}
                      content={<SelectClassifier testID={ 'test-id-b1dc15fe93ddb751'}
                                                 selectedCode={(getFiltersEditorObject(props).role|| {code:''}).code}
                                                 performSelect={(value: ModelsApp.Classifier) => props.performFilterSelectRole(props.currentTab, getFiltersEditorObject(props), value)}
                                                 classifierList={props.classifierDictionary.SALES_TEAM_ROLE} />} >
                    <CenterPageHeader testID='test-id-05e1fbbd-650817c9af4e' key={'center-header-34'}>
                        <H2 testID='test-id-dcf9baaa-d6e3-dfa88e6aa6'>Выбор роли</H2>
                    </CenterPageHeader>
                </Page>
                <Page testID='test-id-b1dc19ae-def0-d965-4220-85fe93ddb750' scrollEnabled={true}
                      content={<SelectClassifierMultiply testID={ 'test-id-b1dc15fe93ddb751'}
                                                 selected={getFiltersEditorObject(props).products}
                                                 performSelect={(value: ModelsApp.Classifier) => {
                                                     props.performFilterSelectProduct(props.currentTab, getFiltersEditorObject(props), value)
                                                 }}
                                                 performUnSelect={(value: ModelsApp.Classifier) => {
                                                     props.performFilterUnSelectProduct(props.currentTab, getFiltersEditorObject(props), value)
                                                 }}
                                                 classifierList={props.classifierDictionary.DEAL_PRODUCT_SALE_METHOD}
                                                 /> }
                >
                    <LeftPageHeader testID='test-id-b2503f' key={'left-header-1'}>
                        <NavigationBackButton testID='test-id-bec4abbec3e09' title={false}
                                              onClick={props.filterPopoverNavigateBack}/>
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-05e1fbbd-650817c9af4e' key={'center-header-35'}>
                        <H2 testID='test-id-dcf9baaa-d6e3-dfa88e6aa6'>Выбор продуктов</H2>
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-e0e37c547'>
                        <NavigationTextButton testID='test-id-10731c7b45'
                                              title={'Готово'}
                                              onExecute={props.filterPopoverNavigateBack}
                        />
                    </RightPageHeader>
                </Page>
                <Page testID='test-id-b1dc19ae-def0-d965-4220-85fe93ddb750' scrollEnabled={true}
                      content={<SelectClassifier testID={ 'test-id-b1dc15fe93ddb751'}
                                                 selectedCode={(getFiltersEditorObject(props).currency || {name:''}).name}
                                                 performSelect={(value: ModelsApp.Classifier) => props.performFilterSelectCurrency(props.currentTab, getFiltersEditorObject(props), value)}
                                                 renderMode={Enums.ClassifierRenderMode.CodeWithValue}
                                                 classifierList={props.filteredCurrencyList}/>} >
                    {BackButtonHeader('filterBack', props.filterPopoverNavigateBack, 'Фильтры')}
                    <CenterPageHeader testID='test-id-05e1fbbd-650817c9af4e' key={'center-header-3'}>
                        <H2 testID='test-id-dcf9baaa-d6e3-dfa88e6aa6'>Выбор валюты</H2>
                    </CenterPageHeader>
                </Page>

                    <Page testID='test-id-b1dc19ae-def0-d965-4220-85fe93ddb750' scrollEnabled={true}
                        content={<SelectDate onChange={(value: Date) => props.performFilterSelectDateFrom(props.currentTab, getFiltersEditorObject(props), value)}
                            value={getFiltersEditorObject(props).dateFrom || null} />}>
                        <LeftPageHeader testID='test-id-ee37c5e47'>
                            {BackButtonHeader('filterDateFromLBack', props.filterPopoverNavigateBack, 'Фильтры')}
                        </LeftPageHeader>
                        <RightPageHeader testID='test-id-e0e37c5e47'>
                            <NavigationTextButton testID='test-id-10731c5b7b45'
                                title={'Готово'}
                                onExecute={props.filterPopoverNavigateBack}
                            />
                        </RightPageHeader>
                        <CenterPageHeader testID='test-id-9ee54834d034ac'>
                            <H2 testID='test-id-57d12478cfb227959'>Выбор даты от</H2>
                        </CenterPageHeader>
                    </Page>
                    <Page testID='test-id-b1dc19ae-def0-d965-4220-85fe93ddb750' scrollEnabled={true}
                        content={<SelectDate onChange={(value: Date) => props.performFilterSelectDateTo(props.currentTab, getFiltersEditorObject(props), value)}
                            value={getFiltersEditorObject(props).dateTo || null} />}>
                        <LeftPageHeader testID='test-id-ee37c5e47'>
                            {BackButtonHeader('filterDateToLBack', props.filterPopoverNavigateBack, 'Фильтры')}
                        </LeftPageHeader>
                        <RightPageHeader testID='test-id-e0e37c5e47'>
                            <NavigationTextButton testID='test-id-10731c5b7b45'
                                title={'Готово'}
                                onExecute={props.filterPopoverNavigateBack}
                            />
                        </RightPageHeader>
                        <CenterPageHeader testID='test-id-9ee54834d034ac'>
                            <H2 testID='test-id-57d12478cfb227959'>Выбор даты до</H2>
                        </CenterPageHeader>
                    </Page>
                </ContentPanel>
            </SplitPanel>
        </View>
    )
}

const SelectorRow = (props: { label: string, value?: string | null, onSelect: { (): void } }): React.ReactElement<View> => (
    <View testID='test-id-182095a51' style={Styles.SelectorRowContainer}>
        <View style={Styles.SelectorRowLeft}>
            <Text style={Styles.CellTop} testID='test-id-2c3f5f2669'>{props.label}</Text>
        </View>
        <View style={Styles.SelectorRowRight}>
            {props.value ? <Text style={Styles.SelectorValText} testID='test-id-2c3f5f2669'>{props.value}</Text> : null}
            <Button testID='test-id-6bb005-33391d' onExecute={props.onSelect}>
                <Icon testID='test-id-776c6059d30' disabled type={IconType.MrmLink} />
            </Button>
        </View>
    </View>
)

const getFilterPopoverMainPage = (props: IProps): React.ReactElement<View> => (

    <View testID='test-id-5b6cca7b-a7c8-4e54-c232-58fa142ee7ad' style={ Styles.main }>

        {
            props.currentTab !== Enums.DealListTab.DealClosedList ? (
                <SelectorRow
                    label={'Стадия'}
                    value={ utils.format.truncate((getFiltersEditorObject(props).stage|| {value:''}).value, 30) }
                    onSelect={props.filterPopoverNavigateToStage}/>
            ) : null
        }

        <SelectorRow label={'Роль'} value={ (getFiltersEditorObject(props).role || {value:''}).value }
            onSelect={props.filterPopoverNavigateToRole}/>

        <SelectorRow label={'Продукты'} value={`${(getFiltersEditorObject(props).products||{data:[]}).data.length || ''}`}
            onSelect={props.filterPopoverNavigateToProduct}/>

        <SelectorRow label={'Валюта'} value={(getFiltersEditorObject(props).currency || {code:''}).code }
            onSelect={props.filterPopoverNavigateToCurrency}/>

        <NumberInput testID='test-id-182095a51'
            fractionalDigitsCount={ 5 }
            value={ getFiltersEditorObject(props).sumFrom || ''}
            maxLength={ 15 }
            currency={ ' ' }
            label={'Сумма сделки от, тыс.'}
            onChange={ (value: string) => (
                props.performInputFilterValue ({ ...getFiltersEditorObject (props),
                    sumFrom: value
                }, props.currentTab)
            ) }/>

        <NumberInput testID='test-id-182095a51'
            fractionalDigitsCount={ 5 }
            value={ getFiltersEditorObject(props).sumTo || ''}
            maxLength={15}
            currency={ ' ' }
            label={'Сумма сделки до, тыс.'}
            onChange={ (value: string) => (
                props.performInputFilterValue ({ ...getFiltersEditorObject (props),
                    sumTo: value
                }, props.currentTab)
            ) }/>

        <SelectDateRow onPress={props.filterPopoverNavigateToDateFrom}
                       value={getFiltersEditorObject(props).dateFrom}
                       label={`${props.currentTab === Enums.DealListTab.DealOpenedList ? 'Плановая' : 'Фактическая'} дата от`}
                       undefinedPlaceholder='Нет'/>

        <SelectDateRow onPress={props.filterPopoverNavigateToDateTo}
                       value={getFiltersEditorObject(props).dateTo}
                       label={`${props.currentTab === Enums.DealListTab.DealOpenedList ? 'Плановая' : 'Фактическая'} дата до`}
                       undefinedPlaceholder='Нет'/>

    </View>
)


const renderFilterButton = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-41dfb85e-13c8-73a8-6a9d-aa936ad22aeb' style={Styles.filterValueView}>
        <PopoverTarget testID='test-id-464a7268-5245-be7d-72f0-c03401938235' refName={'dealListFilterButton'}>
            <NavigationFilterButton
                testID='test-id-operation-list-filter-button'
                onExecute={() => props.performPopoverFilterShow(props.currentTab)}
                count={getActiveFiltersCount(props)}
            />
        </PopoverTarget>
        <Popover testID='test-id-13466acf-filterPopover'
            target={PopoverTarget.getRef('dealListFilterButton')}
            opened={props.isVisiblePopoverFilter}
            onOutsideTap={props.performPopoverFilterHide}
            type={PopoverType.WIDE}
            style={{ height: 550, width: 375 }}
            position={[PopoverPosition.LEFT]} >
            {
                getFilterPopoverContent(props)
            }
        </Popover>
    </View>
)

const getTable = (props: IProps): React.ReactElement<View> => (
    <View
        testID={'test-id-3e95b12e-d2e8-4af3-9a8a-73812fe5bcc5'}
        style={Styles.TableAreaContainer}>
        <View testID='test-id-db967c54-02e9-98e8-d4c2-d17c072643c9' style={Styles.TableContainer}>

        <Center testID='test-id-3e367a58-f39c-c961-8896-bea1f7fd4da0'>
            <View testID='test-id-3d60b9bb-a479-8709-7c78-d5802dbf9ce2' style={Styles.CreateDealContainer}>
                <View testID='test-id-608f9043-e8f8-f9ce-ea64-cfc81cc35e68' style={Styles.CreateDealLinkContainer}>
                    { props.isButtonCreateVisible ? (
                            props.isCreateDealEnable ? <NavigationTextButton testID='test-id-39e5b6eb-35c4-6468-b099-bac4c797eb1b' title={'Создать сделку'}
                                          onExecute={() => {
                                              props.navigateToDealEditor(defaultValues.Deal, Enums.DealEditorMode.CreateMode, null)
                                          }}
                                          /> : <NavigationTextButtonDisabled title={'Создать сделку'} />
                            ) : null }
                </View>

                <View testID='test-id-ae2f494d-314c-98e5-e00e-b2c59404f121' style={Styles.TabSelectorWrapper}>
                    <TabSelector testID='test-id-f71c6858-da8c-b1f0-eecc-a1f4af28d214'
                        style={[Styles.TabSelector]}
                        value={TABS[props.currentTab || 0]}
                        onChange={(index: number) => {
                            props.performChangeTab(index, index)
                        }}
                    >
                        {Object.keys(TABS).map(k => <OptionItem testID='test-id-dafa9a03-2ae0-ce11-7073-d7924d0c17e0'
                            key={`tab-${k}`} value={TABS[k]}
                            title={TABS[k]} />)}
                    </TabSelector>
                </View>

                <View
                    testID='test-id-323c88cf-479a-c59f-bd97-32d4e399cf5e'
                    style={Styles.CreateDealSearchContainer}>
                    <View
                        testID='test-id-124bf2a9-c9a5-a7c6-8138-72b78e96ce5a'
                        style={Styles.flexRow}>
                        <NavigationIconButton testID='test-id-9c76ae59-a7d5-41db-3156-90685fd4cbd1'
                            type={NavigationIconButtonType.SEARCH}
                            onExecute={props.navigateToDealListSearchScreen}
                        />
                        {renderFilterButton(props)}
                    </View>
                </View>
            </View>
        </Center>
        {props.refreshInProgress || props.refreshError || !props.infoMessage ? null : <View style={Styles.messageDealContainer}>
            <Text testID='test-id-View-Deal-List'>{props.infoMessage}</Text>
        </View>}
        {props.refreshInProgress ?
            <View testID='test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d' style={Styles.LoaderWrapper}>
                <Loader testID='test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d' />
                <Text testID='test-id-544d3087b2183b0ade'>Загрузка списка сделок</Text>
            </View> : (
                <View testID='test-id-f02c825d7be630409d' style={Styles.TableWrapper}>
                    <Table testID='test-id-fef887b7-8ca1-b57e-9e51-0ac5b2bbf409' style={Styles.TableCollapsedFix}>
                        <TableHead testID='test-id-75635324-3667-0601-408a-5d5d93bfb8ab'>
                            <TableColumn testID='test-id-25b8b2bf-0d0c-9d0e-c69c-ae70d4986321' key={`col-0`} width='255'>
                                <Text testID='test-id-e40a586f-40cf-eae5-a739-64895253353b'>{_tableColumns(props)[0]}</Text>
                            </TableColumn>
                            <TableColumn testID='test-id-95b9a7a1-6bea-f82a-97a9-9d021ec7c742' key={`col-1`} width='160'>
                                <Text testID='test-id-a21fd416-1a88-b0cd-f14f-8141a6189b24'>{_tableColumns(props)[1]}</Text>
                            </TableColumn>
                            <TableColumn testID='test-id-2a94a8f0a98338' align={ TableColumnAlignment.RIGHT } key={`col-2`} width='150'>
                                <Text testID='test-id-55c5387aac602'>{_tableColumns(props)[2]}</Text>
                            </TableColumn>
                            <TableColumn testID='test-id-b2a2154d-dbca-394f-c89f-7fef98f78e1f' key={`col-3`} width='70' />
                        </TableHead>
                        <TableBody testID='test-id-3f58460f-5ed0-90e7-ed5d-ef9569bbc4ff'>
                            {_renderTableRows(rows(props), props)}
                        </TableBody>
                    </Table>
                    {
                        props.startAnimation ? _renderAnimatedRow(props) : null
                    }
                </View>)}
        </View>
        {
            props.refreshError ? getErrorPanel(props) : (
                <RefreshBar
                    testID='test-id-fef45946'
                    performRefresh={props.performDealListFlush}
                    date={props.dealListPageCachedDate}
                />
            )
        }
    </View>
)

const _renderAnimatedRow = (props: IProps): React.ReactElement<View> => (
    <OpacityAnimatedView testID='test-id-d2094a49-5efe-38df-9eb0-d0b168d241d5'
                         style={Styles.animatedRow}
                         value={1}
                         toValue={0}
                         delay={8000}
                         duration={1000}>
        <Text   testID='test-id-d2094a49-5efe-38df-9eb0-43frqrf'
                style={Styles.animatedRowText}>
            {'Сделка создана!'}
        </Text>
    </OpacityAnimatedView>
)

const rows = (props: IProps) => {
    const mappedData = rowsMapper(props.currentUser)
    if (props.currentCustomerManaged.isHolding) {
        return props.currentTab === Enums.DealListTab.DealOpenedList ?
            mappedData.holdingOpened(props.dealOpenedList.data) :
            mappedData.holdingClosed(props.dealClosedList.data)
    }
    return props.currentTab === Enums.DealListTab.DealOpenedList ?
        mappedData.opened(props.dealOpenedList.data) :
        mappedData.closed(props.dealClosedList.data)
}


const _renderTableRows = (items: Array<ListRowsData>, props: IProps, forSearch: boolean = false):Array<React.ReactElement<TableRow>> => {

    return items.map(( item: ListRowsData, i: number ) => (
        <TableRow
            testID={`test-id-dealRow-${item.id}`}
            key={`dealRow-${i}-${item.id}`}
            onClick={() => {
                props.performDealOpen ( item.id, Enums.DealMode.CommonBack, props.isEditDealEnable )
            }}>
                    <TableCell testID='test-id-7f47b1bf-a832-8f23-4760-06d0c8267adf'>
                        <View style={Styles.CellContainer}>
                            <View testID='test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb' style={Styles.CellTopContainer}>
                                <Text testID='test-id-eb76dd52-90e2-adcb'
                                      numberOfLines={3}
                                      ellipsizeMode={'tail'}
                                      style={Styles.CellTop}>{item.first.top}</Text>
                            </View>
                            {item.first.middle ? <View testID='test-id-dcbf2a-df57719d0cb' style={Styles.CellBottomContainer}>
                                <Text testID='test-id-eb76dd52-90e2-adcb'
                                      style={Styles.CellBottom}>{item.first.middle}</Text>
                            </View> : null}
                            <View style={Styles.CellBottomContainer}>
                                {item.isAccessible ? null : <View style={Styles.LockContainer}>
                                    <IconView type={'lock'} testID='test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb345435345'/>
                                </View>}
                                {item.first.bottom ? <View style={Styles.CellOrangeLabelContainer}>
                                    <Text testID='test-id-eb76dd52-90e2-adcb1'
                                          style={Styles.CellOrangeLabelText}>{item.first.bottom}</Text>
                                </View> : null}
                            </View>
                        </View>
                    </TableCell>
                    <TableCell testID='test-id-91c77eca-162d-1faf-aef6-9880a87ce0a3'>
                        <View style={Styles.CellContainer}>
                            <View testID='test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb' style={Styles.CellTopContainer}>
                                <Text testID='test-id-eb76dd52-90e2-adcb'
                                      style={Styles.CellTop}>{item.second.top}</Text>
                            </View>
                            <View style={Styles.CellBottomContainer}>
                                <Text testID='test-id-eb76dd52-90e2-adcb1'
                                      style={Styles.CellBottom}>{item.second.bottom}</Text>
                            </View>
                        </View>
                    </TableCell>
                    <TableCell testID='test-id-7fce741d-31ca-09fd-cde7-8cfde477fb5f'>

                        <View style={Styles.CellContainerLast}>
                            <View testID='test-id-dcbd8547-bf2a-df40-91ae-5f457719d0cb' style={Styles.CellTopContainer}>
                                <Text testID='test-id-eb76dd52-90e2-adcb'
                                      style={Styles.CellTop}>{item.third.top}</Text>
                            </View>
                            <View style={Styles.CellBottomContainer}>
                                <Text testID='test-id-eb76dd52-90e2-adcb1'
                                      style={Styles.CellBottom}>{item.third.bottom}</Text>
                            </View>
                        </View>

                    </TableCell>
                    <TableCell testID='test-id-7fce7-8cfde477fb5f'>
                        <View testID={`test-id-dealRow-clickable-Icon${item.id}`} style={Styles.RowLinkContainer}>
                            <Button
                                testID='test-id-08e4caa-0f22edbfaa59ss'
                                onExecute={() => {
                                    props.performDealOpen ( item.id, Enums.DealMode.CommonBack, props.isEditDealEnable )
                                }}
                            >
                                <Icon testID='test-id-3f3e58f5-b2f755b5200b' type={IconType.MrmLink}/>
                            </Button>
                        </View>
                    </TableCell>
                </TableRow>
            )
    )

}

const getActiveFiltersCount = (props: IProps): number => {
    let count = 0
    const filter = ( props.currentTab === Enums.DealListTab.DealClosedList ?
        props.filtersActiveClosed || props.filtersEditorClosed || {...defaultValues.DealListFilter} :
        props.filtersActiveOpened || props.filtersEditorOpened || {...defaultValues.DealListFilter})
    if ( filter ) {

        if ( filter.sumFrom || filter.sumTo) {
            ++count
        }
        if ( filter.dateFrom || filter.dateTo) {
            ++count
        }
        if ( filter.stage ) {
            ++count
        }
        if ( filter.products && filter.products.data && filter.products.data.length) {
            ++count
        }
        if ( filter.currency) {
            ++count
        }
        if ( filter.role) {
            ++count
        }
    }
    return count

}

/*
 * UI stateless functional component presenter for "DealList" container.
 */

export interface IProps {
    performChangeTab: ModelsDealList.PERFORM_CHANGE_TAB,
    infoMessage: string | null,
    isCreateDealEnable: boolean,
    isButtonCreateVisible: boolean,
    isEditDealEnable: boolean,
    performDealListRefresh: ModelsDealList.PERFORM_DEAL_LIST_REFRESH,
    performDealListFlush: ModelsDealList.PERFORM_DEAL_LIST_REFRESH,
    performDealCreate: ModelsDealList.PERFORM_DEAL_CREATE,
    performContainerReset: ModelsDealList.PERFORM_CONTAINER_RESET,
    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR,
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    currentTab: Enums.DealListTab,
    currentUser: ModelsApp.Employee,

    performPopoverFilterShow: ModelsDealList.PERFORM_POPOVER_FILTER_SHOW,
    performPopoverFilterHide: ModelsDealList.PERFORM_POPOVER_FILTER_HIDE,
    performFilterApply: ModelsDealList.PERFORM_FILTER_APPLY,
    performFilterReset: ModelsDealList.PERFORM_FILTER_RESET,
    performInputFilterValue: ModelsDealList.PERFORM_INPUT_FILTER_VALUE,
    performFilterUnSelectProduct: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectProduct: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectStage: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectRole: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectCurrency: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectDateFrom: ModelsDealList.PERFORM_DATE_SELECTION,
    performFilterSelectDateTo: ModelsDealList.PERFORM_DATE_SELECTION,
    filterPopoverNavigateBack: ModelsDealList.NAVIGATE_POPOVER_BACK,
    filtersEditorOpened: Models.DealListFilter | null,
    filtersEditorClosed: Models.DealListFilter | null,
    filtersActiveOpened: Models.DealListFilter | null,
    filtersActiveClosed: Models.DealListFilter | null,
    filteredStagesList: ModelsApp.ClassifierList,
    filteredCurrencyList: ModelsApp.ClassifierList,
    filterPopoverNavigateToStage: ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToRole: ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToProduct: ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToCurrency: ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToDateFrom: ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToDateTo: ModelsDealList.NAVIGATE_IN_POPOVER,
    dealListPageCachedDate: Date | null,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    isVisiblePopoverFilter: boolean,
    dealOpenedList: Models.DealList,
    dealClosedList: Models.DealList,
    refresh: boolean,
    refreshInProgress: boolean,
    refreshError: Error | null,
    currentCustomerManaged: Models.CustomerManaged,
    testID: string
    startAnimation: boolean,
    navigateToDealListSearchScreen: ModelsDealList.NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN,
}

const ViewDealList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (

    <View testID='test-id-View-Deal-List' style={Styles.main}>
        {getTable(props)}
    </View>

)

export default ViewDealList
