/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewGSZStyles'

import {
    AccessoryPanel,
    Button,
    ButtonType,
    CenterPageHeader,
    Col,
    ContentPanel,
    Grid,
    H1,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    NavigationBackButton,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    Page,
    Popover,
    PopoverPosition,
    PopoverType,
    RadioButton,
    RadioGroup,
    RightPageHeader,
    Row,
    Section,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHead,
    TableRow,
    Text,
    View,
} from 'ufs-mobile-platform'

import {
    Models as ModelsApp,
    ErrorModal,
    RefreshBar,
    LoaderWithText,
} from 'mrmkmcib-app'

import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsGSZ from "../models/ModelsGSZ"
import Error from "../models/Error"

import * as Utils from "../common/Util"
import PopoverTarget from '../modules/PopoverTarget'
import PopoverSingle from '../modules/PopoverSingle'
import ContainerGszActivityExclude from '../containers/ContainerGszActivityExclude'
import ContainerGszActivityInclude from '../containers/ContainerGszActivityInclude'
import ContainerEmployee from "../containers/ContainerEmployee"
import {SearchInput, IconView} from 'mrmkmcib-ui'
import {TIMEOUT_STRING_CODE} from '../models/Converters'

const getFilteredBorrowerDetails: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    if (props.currentBorrower) {
        return (
            <Section testID='test-id-37136407-9fde-986a-331e-6e3b2e93dba4'>
                <View testID='test-id-d6744024-8e85-e721-c8e5-2e3366955d49' style={Styles.borrowerDetailsContent}>
                    <View testID='test-id-fa6d47df-c219-0968-6693-e49f2df7c48b' style={Styles.borrowerDetailsHeader}>
                        <View testID='test-id-c2ebca4b-4911-8dc1-b763-08f3c7b3456f' style={{flex: 1}}>
                            <Label testID='test-id-15b8a838-1f63-a62e-7669-c78bb25b5a2e'
                                   header={''}
                                   text={'Клиент'}
                                   block={true}>
                                <Text
                                    testID='test-id-b1500d97-2071-3154-4a1b-7a7c31e162e9'>{props.currentBorrower.fullName}</Text>
                            </Label>
                        </View>
                        <View testID='test-id-cc34bf80-9986-e6de-1992-b82c4f8cee80' style={Styles.popoverBorrowerListIconContainer}>
                           <Button
                                testID={'test-id-97bf7ea5-1595-85db-86cb-7b985e56382c'}
                                onExecute={() => {
                                    props.performCustomerOpen(props.currentBorrower.id)
                                }}>
                                <Icon
                                    testID={'test-id-97bf7ea5-1595-85db-86cb-7b985e56382d6'}
                                    type={IconType.MrmInfo}/>
                            </Button>
                        </View>
                    </View>
                    <View testID={'test-id-15b8a838-1f63-a62e-7669-c78bb25b5a2a'} style={Styles.borrowerListPopoverLableContainer}>
                        <Label testID='test-id-15b8a838-1f63-a62e-7669-c78bb25b5a2e' header={''} text={'Статус связанности'}
                               block={true}>
                            <Text
                                testID='test-id-b1500d97-2071-3154-4a1b-7a7c31e162e9'>{props.currentBorrower.status.value}</Text>
                        </Label>
                    </View>
                    <View testID={'test-id-15b8a838-1f63-a62e-7669-c78bb25b5a2c'} style={Styles.borrowerListPopoverLableContainer}>
                        <Label testID='test-id-af637146-e0ea-98dd-50c7-d77ae03b9f86' header={''}
                               text={'Критерий связанности'} block={true}>
                            <Text
                                testID='test-id-9ffb654f-21f9-74ad-089b-5aa9da5de861'>{props.currentBorrower.criteriaList[0] && props.currentBorrower.criteriaList[0].description || Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA)}</Text>
                        </Label>
                    </View>
                    <View
                        testID='test-id-819bacc6-88d8-480a-9e51-77808a743b1f'
                        style={Styles.borrowerListPopoverLableContainer} >
                        <Label
                            testID='test-id-2f54cf02-c6f2-4194-bb91-fca1c66c893a'
                            header={''}
                            text={'Тип карточки'}
                            block={true}>
                            <Text testID='test-id-3a3c499a-ebf6-45eb-a146-b41d2fccc107'>
                            {
                                props.organizationType.value ||
                                Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA)
                            }
                            </Text>
                        </Label>
                    </View>
                </View>
            </Section>
        )
    }
    return <View testID='test-id-654d3f8e-d223-c2a7-a532-e47be383da38'/>
}

const getBorrowerListComboboxContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    const tableRows = () => {
        return props.borrowerFilteredList.data.map((item: Models.Borrower, index) => {
            return (
                <TableRow
                    testID='test-id-febc94b8-bc76-66c2-ff84-db3ae41a31c3'
                    key={`${item.id}-${index}`}
                    onClick={() => {props.navigateToBorrowerScreen(item)}}>
                    <TableCell testID='test-id-1bbd3b93-34bf-e94c-5e54-6ffde139c2cb'>
                        <View
                            testID='test-id-cc783726-a02b-996b-1c8b-fc6809e1fb08'
                            style={Styles.flexRow}>
                            <View
                                testID='test-id-78ac0832-4e9b-482f-9b42-5b4aba157989'
                                style={Styles.flex}>
                                <View
                                    testID='test-id-bb4b8427-a2cb-8794-deec-5d8f1a9f3a91'
                                    style={Styles.memberAttributesRow}>
                                    {getMemberRoleLabel(item.role)}
                                    <Text
                                        testID='test-id-5934bbfc-262a-105a-1455-57094c2241f6'
                                        style={Styles.memberAttributeOrganizationType}>
                                        {item.organizationType.value}
                                    </Text>
                                </View>
                                <View testID='test-id-02d8e602-4a2d-fe94-2eba-94128ad61617'>
                                    <Text
                                        testID='test-id-4d1ce3da-1bd5-dfda-cdc5-231be8dcfdac'
                                        style={Styles.memberAttributeName}>
                                        {item.fullName}
                                    </Text>
                                </View>
                            </View>
                            <View
                                testID='test-id-7a77c71d-77c5-76a9-b306-54132e948241'
                                style={Styles.memberListItemArrowWrapper}>
                                <Button
                                    testID='test-id-7cd3681e-1d64-934d-adfa-f89a5d82b394'
                                    onExecute= {()=>{props.navigateToBorrowerScreen(item)}}>
                                    <Icon
                                        testID='test-id-7cd3681e-1d64-934d-adfa-f89a5d82b395'
                                        type={ IconType.MrmLink }/>
                                </Button>
                            </View>
                        </View>
                    </TableCell>
                </TableRow>
            )
        })
    }
    return props.borrowerFilteredList.data.length == 0 ?
        <View
            testID='test-id-34dd9629-b811-dcb8-5a1f-89a35dc33789'
            style={Styles.searchNotFoundTextWrapperCentered}>
            <Text
                testID='test-id-34dd9629-b811-dcb8-5a1f-89a35dc33789'
                style={Styles.searchNotFoundText}>
                {'Результатов не найдено'}
                </Text>
        </View> :
        <Table testID='test-id-34dd9629-b811-dcb8-5a1f-89a35dc33789'>
            <TableBody testID='test-id-34dd9629-b811-dcb8-5a1f-89a35dc33789'>
                {tableRows()}
            </TableBody>
        </Table>
}

const getBorrowersListPopoverContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <SplitPanel testID='test-id-a9dbe40c-ad3a-ad69-ab57-b36c12059f22'
                    id={Utils.getNavigationPopoverString(Enums.NavigationContentAppCrmGszBorrowers.AppCRM_GSZ_Borrowers)}>
            <ContentPanel testID='test-id-3a631d89-340c-a4a8-e11f-74147d678adb' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-0b6a5e36-8415-3247-d969-25268dfca9a9' scrollEnabled={true}
                      content={getFilteredBorrowerList(props)}>
                    <LeftPageHeader testID='test-id-ee12a962-d1f4-b571-36b5-0d4a3bcbc988'>
                        {props.isPopoverBorrowerListSearchActive ? <View testID='test-id-ee12a962-d1f4-b571-36b5-0d4a3bcbc987' style={Styles.searchInputContainer}>
                            <SearchInput
                                value={props.inputBorrowerListSearch}
                                placeholder={'Название клиента'}
                                onChange={props.performInputBorrowerListSearch}
                                onCancel={props.performPopoverBorrowerListCancel}
                                autoFocus={true}
                                drawBottomBorder={false}
                            />
                        </View> : null}
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-ee12a962-d1f4-b571-36b5-0d4a3bcbc989'>
                        {!props.isPopoverBorrowerListSearchActive ? <H2 testID='test-id-7fa1625c-3723-3b56-1c75-b99bf650fd0b'>Связанность</H2> : null}
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-3be30542-8248-232a-1609-1ac78298a970'>
                        {!props.isPopoverBorrowerListSearchActive ? <NavigationIconButton testID='test-id-52f37e6f-4140-3e16-0e49-f9a4f1129710'
                                              type={NavigationIconButtonType.SEARCH}
                                              onExecute={props.performPopoverBorrowerListSearchModeEnable}
                        /> : null}
                    </RightPageHeader>
                </Page>
                <Page testID='test-id-f77b803e-92db-7825-ffd3-65c2efb9fd29' scrollEnabled={true}
                      content={getFilteredBorrowerDetails(props)}>
                    <CenterPageHeader testID='test-id-e1bed1e7-07b5-a97f-30bf-3fad25e2cfff'>
                        <H2 testID='test-id-62764bef-84b4-3323-3f85-648a91d78ee4'>Связанность</H2>
                    </CenterPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
    )
}

const getFilteredBorrowerList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-7a5d3abe-4830-4a6a-b4d0-d92035fc109d' style={Styles.flex}>
            {getBorrowerListComboboxContent(props)}
        </View>
    )
}

const getSortFilterList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <RadioGroup testID='test-id-159ed1f5-f941-9e52-5380-4104e7f9e824'
                    value={`${props.inputSortingType}`}
                    onChange={props.performInputSortingType}
        >
            <RadioButton testID='test-id-e6591e36-0647-7d37-5ee0-9ac87f26faa4'
                         value={`${Enums.GszMemberListSortingType.ByName}`}
                         label='названию'
            />
            <RadioButton testID='test-id-f4f3064f-8692-e9db-7bf7-9d44769a131c'
                         value={`${Enums.GszMemberListSortingType.ByGroup}`}
                         label='группе проблемности'
            />
            <RadioButton testID='test-id-805e485c-c244-c5bb-1369-0c49bb1d8f5a'
                         value={`${Enums.GszMemberListSortingType.ByStatus}`}
                         label='статусу'
            />
        </RadioGroup>
    )
}

/**
 * Отображения индикации обновления ГСЗ и ошибок обновления
 *
 * @param {IProps} props
 * @returns {React.ReactElement<View>}
 */
const getGSZRefresh = (props: IProps): React.ReactElement<View> | null => {
    if (props.refreshInProgress && props.currentGsz == null) {
        return <LoaderWithText testID='test-id-04e5712c-f464-e707-2235-8acadba14ec3' text={'Загрузка карточки ГСЗ'} />
    }
    return null
}

const getSortNameByEnum = (value: Enums.GszMemberListSortingType): string => {
    switch (value) {
        case Enums.GszMemberListSortingType.ByName :
            return 'названию'
        case Enums.GszMemberListSortingType.ByGroup :
            return 'группе проблемности'
        case Enums.GszMemberListSortingType.ByStatus :
            return 'статусу'
        default:
            return ''
    }
}

const applyGreyColorOnLimitValue = (props: IProps): any => {
    if (!props.gszLimitFetching && !props.gszLimit.isLimitStructureValid) {
        return {color: 'rgb(125,125,125)'}
    }
    return null
}

const RenderSumRow = (value: string | null | undefined,
                      title: string | null = null,
                      props: IProps | null = null) => {


    return (<TableRow testID='test-id-cc446691-30bd-ad28-303d-8e813d45a5e2'>
        <TableCell testID='test-id-7452cf73-9847-a157-58cb-3796f2d6bf60'>
            <View testID='test-id-2cb693cd-445d-2c62-b562-67f987ee06bf' style={Styles.LimitColumn}>
                <View testID='test-id-f73b084f-9493-ddbb-a2c6-a0099d3956d5' style={Styles.LimitValue}>
                    <Text testID='test-id-59f56469-0e3f-47db-a6f7-befc33a2d0cd' style={Styles.LimitTitle}>
                        {title}
                    </Text>
                </View>
                <View testID='test-id-2cb693cd-445d-2c62-b562-67f987ee06bf' style={Styles.LimitPopoverValue}>
                    {value ? <Text testID='test-id-cf6f2999-9e37-e344-d29a-dc3237bae613'
                                   style={Styles.BlackLimitLabelValue}>{value}</Text> :
                        <Text testID='test-id-b0b46d50-51a6-547b-36dc-5c357fd64371'
                              style={Styles.LimitAmount}>{`0,00 RUB`}</Text>}
                </View>
            </View>
        </TableCell>
    </TableRow>)
}


const renderLimitRows = (props: IProps) => {

    let gszLimit = props.gszLimit

    return (
        <Table testID='test-id-d028c4f6-13f0-d07f-54a6-1d723ba39df6' key={`Limit rows`}>
            <TableBody testID='test-id-2acc8328-1f7e-ccf8-04f3-1e33b65df472'>
                {RenderSumRow(gszLimit.approvedAggregateLimitValue, 'Утвержденное значение совокупного лимита', props)}
                {RenderSumRow(gszLimit.cumulativeLimitEstimatedValue, 'Расчетное значение совокупного лимита', props)}
                {RenderSumRow(gszLimit.cumulativeLimitUseForecast, 'Прогнозное использование совокупного лимита', props)}
                {RenderSumRow(gszLimit.unusedAggregateLimit, 'Неиспользованный совокупный лимит', props)}
            </TableBody>
        </Table>
    )
}


const getLimitPopoverData: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    return (
        <SplitPanel testID='test-id-b67e75c5-4600-091d-a024-616eb3422617'
                    id={'GszLimitsPopover'}>
            <ContentPanel testID='test-id-f0634aca-17b7-01e2-57c2-0902ca8c422e' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-83d7d00b-b92d-709a-23a8-361d1685e87f' scrollEnabled={true}
                      content={renderLimitRows(props)}>
                    <CenterPageHeader testID='test-id-c8356437-19e6-5a68-ea64-ee12974b0814'><H2
                        testID='test-id-c8356437-19e6-5a68-ea64-ee12974b0814'>Лимиты по ГСЗ</H2></CenterPageHeader>
                    <RightPageHeader testID='test-id-d69c57fd-08ff-ecc1-5e6c-74135f1427ae'>
                        <NavigationTextButton testID='test-id-06fbfc84-db1f-eb08-abb3-78c5dc00b502' title={'Готово'}
                                              onExecute={props.performPopoverLimitsHide}/>
                    </RightPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>
    )
}

const getLimitPanel: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    return (
            <View testID='test-id-5bf07cd9-3466-2ac5-b1e2-ea248da90c6b' style={[Styles.gszBorrowersListActions, Styles.limitPanelWithoutBorderBottom, props.gszLimitFetching ? Styles.limitPanelLoadingBackground : null]} >
                <View testID='test-id-edab1fe3-7812-1aaa-d2e0-9099fdb98b61' style={[{flex: 0, flexDirection: 'column'}]}>
                    <View>
                            <View testID='test-id-093a3351-cb55-bab8-7ed8-b4713ff9d4b0'
                                  style={Styles.verticalCenteredText}>
                                <Text testID='test-id-cf6f2999-9e37-e344-d29a-dc3237bae613'
                                      style={Styles.LimitPanelTitle}>{`Лимит по ГСЗ`}</Text>
                            </View>
                            <PopoverSingle
                                 testID='test-id-b6d5b7d9-0070-e8fc-414b-770e13d26660'
                                 target={PopoverTarget.getRef('limitsPopoverButton')}
                                 popoverName={'limitsGszPopover'}
                                 opened={props.isVisiblePopoverLimits}
                                 onOutsideTap={props.performPopoverLimitsHide}
                                 type={PopoverType.WIDE}
                                 style={{height: 400}}
                                 position={[PopoverPosition.BOTTOM]}>
                                {getLimitPopoverData(props)}
                            </PopoverSingle>
                    </View>
                    <View testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e301' style={Styles.limitErrorPanel}>
                        {props.gszLimitError && !props.gszLimitFetching && <Text style={{fontSize: 12, color: 'rgb(249, 167, 41)', fontWeight: '400'}} testID={'test-id-093a3351-cb55-bab8-7ed8-b4713ff9d4b0'}>
                            {'Не удалось загрузить данные. '}
                            {props.gszLimitError.code === TIMEOUT_STRING_CODE ?
                                'Попробуйте снова или обратитесь в службу поддержки' :
                                'Обратитесь в службу поддержки'}
                        </Text>}
                    </View>
                </View>
                <View testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                    {props.gszLimitFetching && <View style={{marginRight: 20}} testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' >
                        <Text testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' style={Styles.LimitLoadingText}>{'Загрузка...'}</Text>
                    </View>}
                    {!props.gszLimitError && !props.gszLimitFetching && <View testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' style={{flex: 0, marginRight: 20, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <View testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' style={{flex: 0, marginRight: 10, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                            <Text testID='test-id-cf6f2999-9e37-e344-d29a-dc3237bae613'
                                  style={Styles.GreyLabelValue}>{props.gszLimit.cumulativeLimitEstimatedValue}</Text>
                        </View>
                        {props.gszLimit.isLimitStructureValid && <View testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' style={{marginRight: 0, justifyContent: 'flex-end'}}>
                            <PopoverTarget testID='test-id-87874406-0bc3-1201-2288-d19b23f5933a' refName={'limitsPopoverButton'}>
                                <Button
                                    testID='test-id-b6a14356-a5c5-8322-4305-e5cac3b26975'
                                    onExecute={props.performPopoverLimitsShow}>
                                    <Icon testID='test-id-c31545d9-e0fc-6d34-5f24-aaf247fc2190' type={IconType.MrmArrowDown}/>
                                </Button>
                            </PopoverTarget>
                        </View>}
                    </View>}
                    {!props.gszLimitFetching && props.gszLimitError && props.gszLimitError.code === TIMEOUT_STRING_CODE && <View style={[{ marginBottom: 10, marginRight: 20}]} testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3' >
                        <NavigationIconButton testID='test-id-583f7639-def2-363e-5fd3-9c5be85de38d'
                                              type={NavigationIconButtonType.REFRESH}
                                              onExecute={props.performFlushLimits}
                        />
                    </View>}
                </View>
            </View>
    )
}


/**
 * Чтобы корректно отобразить индикацию загрузки лимитов справа от уже загруженной информации по ГСЗ,
 * нужно разделить эти два случая и сверстать два разных Grid
 *
 * @param {IProps} props
 * @returns {React.ReactElement<View>}
 */
const getContentPanelGrid: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    return (
        <View testID='test-id-a4684f3f-140d-f9da-9fb0-269c7aafb191' style={Styles.content}>
            <Grid testID='test-id-d3ccbf64-8168-a086-a863-1cbf274056c5'>
                <Row testID='test-id-b25af5b6-96b5-c255-71fc-86b12f45c1c3'>
                    <Col testID='test-id-cd0a8f95-09b5-dbad-a619-de0a9f9e7e33' xs={6}>
                        <Label testID='test-id-f5af2674-a66c-e6f6-f2ed-3f9d5c931e9f' header={''} text={'Статус ГСЗ'}
                               block={true}>
                            <Text
                                testID='test-id-1c125b68-0c7d-90aa-2b5b-6428221ca0f7'>{props.currentGsz.status.value}</Text>
                        </Label>
                    </Col>
                    <Col testID='test-id-7fc4224c-2eea-e327-b5d0-fc7037d08840' xs={6}>
                        <View testID='test-id-136cc05d-3775-72c1-4a10-0c28f095fb6c'
                              style={Styles.panelGridLabelWrapper}>
                            <View testID='test-id-4fb5b576-9170-e81d-13a7-3f82793d8694' style={Styles.flex}>
                                <Label testID='test-id-452d7b67-a7a5-6fe4-4652-95ad8fe1404b' header={''}
                                       text={'ГКМ по ГСЗ'} block={true}>
                                    <Text testID='test-id-7e5b47bd-4671-ce5b-2c8e-27f45dfe0dd9'>
                                        {
                                            props.currentGsz.chief ?
                                                Utils.getOneLineFullNameRepresentation(props.currentGsz.chief) :
                                                'Нет данных'
                                        }
                                    </Text>
                                </Label>
                            </View>
                            {
                                (props.currentGsz.chief && props.currentGsz.chief.id) ?
                                <View testID='test-id-15b82b2c-5433-f012-fcf3-f7a7fa7192b1'>
                                    <Button
                                        testID={'test-id-51840451-2ca6-461a-8ddb-aa2036f16f08'}
                                        onExecute={props.performPopoverChiefShow}>
                                        <Icon
                                            testID={'test-id-955d55c2-9025-40ab-89ef-38599ffda781'}
                                            type={IconType.MrmInfo}/>
                                    </Button>
                                </View>
                                : null
                            }
                        </View>
                    </Col>
                </Row>
                <Row testID='test-id-a6ae8865-62f9-ff37-57fe-28cdbf9199b1'>
                    <Col testID='test-id-ffe4a043-baf4-b8ab-5b01-c98061d33c29' xs={6}>
                        <View
                            testID='test-id-cb63938a-4d15-ff3c-eb6f-5bb171039998'
                            style={Styles.panelGridLabelWrapper}>
                            <View
                                testID='test-id-99111b97-146f-3dba-b0c7-9eec3c641b65'
                                style={Styles.flex}>
                                <Label
                                    testID='test-id-53e44f0a-eb95-da1b-2ce0-74b36d97b612'
                                    header={''}
                                    text={'Куратор ГСЗ'}
                                    block={true}>
                                    <Text testID='test-id-6ee85203-c61a-f5da-3a95-0d4e9641e182'>
                                        {
                                            props.currentGsz.curator ?
                                                Utils.getOneLineFullNameRepresentation(props.currentGsz.curator) :
                                                'Нет данных'
                                        }
                                    </Text>
                                </Label>
                            </View>
                            {
                                (props.currentGsz.curator && props.currentGsz.curator.id) ?
                                <View testID='test-id-983ad345-4cac-9af6-8ddf-d2d2ce16f50e'>
                                    <Button
                                        testID={'test-id-c610ec42-c00b-4dd0-8e40-bc2ebceec107'}
                                        onExecute={props.performPopoverCuratorShow}>
                                        <Icon
                                            testID={'test-id-a9acf5be-f769-4de3-9992-749a99607351'}
                                            type={IconType.MrmInfo}/>
                                    </Button>
                                </View>
                                : null
                            }
                        </View>
                    </Col>
                    <Col testID='test-id-e86f96e8-4ed0-a1c2-cd26-4998ee97ac4e' xs={6}>
                        <Label testID='test-id-d4824c5e-be54-3bfe-1e66-43cedab77ac6' header={''}
                               text={'Перевод на новую структуру'} block={true}>
                            <Text testID='test-id-16e34c9e-35d9-9236-4395-e67628d77933'
                                  style={applyGreyColorOnLimitValue(props)}>{props.gszLimitFetching? 'Загружается..' :props.currentGsz.isNsl?'Переведена':'Не переведена'}</Text>
                        </Label>
                    </Col>
                </Row>
            </Grid>
        </View>
    )
}

const getInvalidLimitStructureNotification = (props: IProps): React.ReactElement<View> | null => {
    if (!props.gszLimitFetching && !props.gszLimit.isLimitStructureValid && !props.gszLimitError) {
        return (
            <View testID='test-id-619f4201-e58c-0166-0bec-443f69c5b51c' style={Styles.limitStructureInvalidMessage}>
                <Text
                    testID='test-id-d5730800-5232-735f-c86f-572779a20def'>{props.gszLimit.limitStructureInvalidMessage}</Text>
            </View>
        )
    }
    return null
}

const classifierSort = (arr: Array<any>, field: string, classifierOrder: any) => {
    const othersKey = '__others__'
    const putInMap = (map: Map<string, any>, key: string, item: any) => {
        if (map.has(key)) {
            map.get(key).push(item)
        } else {
            map.set(key, [item])
        }
    }

    /**
     * group by classifierType
     */
    const groupByClassifierMap = arr.reduce((res, item) => {
        const itemCV = item[field] || {}
        if (itemCV && classifierOrder[itemCV.code]) {
            putInMap(res, itemCV.code, item)
        } else {
            putInMap(res, othersKey, item)
        }
        return res
    }, new Map())

    let resArr: Array<any> = []
    const _keys = Array.from(groupByClassifierMap.keys()).sort((a: any, b: any): number => {
        return classifierOrder[a] - classifierOrder[b]
    })
    for (let key of _keys) {
        resArr = resArr.concat(groupByClassifierMap.get(key).sort((a: any, b: any) => lexComparator(a, b, (arg: Models.GszMember): string => {
            const name = arg.fullName
            return name.toLowerCase()
        })))
    }
    return resArr
}

/*
 * sorting functions
 */
const charGenerator = (start: string, stop: string) => {

    let a = [], i = start.charCodeAt(0), j = stop.charCodeAt(0)
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i))
    }
    return a

}

const enArr = charGenerator('a', 'z')

const ruArr = charGenerator('а', 'я')

const isNumeric = (n: any) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const numberComparator = (a: string | number, b: string | number): number => {
    if (isNumeric(a) && isNumeric(b)) {
        return a > b ? 1 : -1
    }
    if (isNumeric(a)) {
        return -1
    }
    if (isNumeric(b)) {
        return 1
    }
    return 0
}

/**
 * Function is used to compare two fields character by character.
 * The priority order is the following:
 * 1 - russian
 * 2 - english
 * 3 - numbers
 * 4 - other
 *
 * @param { T } a - first string to compare
 * @param { T } b - second string to compare
 * @param { (arg: T) => string } extractor - extractor function that returns needed string field to compare from an object <T>
 * @param { number } index - position of currently compared character
 * @returns { number }
 */
const lexComparator = function<T>(
    a: T,
    b: T,
    extractor: (arg: T) => string,
    index: number = 0,
): number {
    const aRW = extractor(a)
    const bRW = extractor(b)
    const charA = aRW.substring(index, index + 1)
    const charB = bRW.substring(index, index + 1)
    const aRuIndex = ruArr.indexOf(charA)
    const bRuIndex = ruArr.indexOf(charB)
    const aEnIndex = enArr.indexOf(charA)
    const bEnIndex = enArr.indexOf(charB)

    if (charA === charB) {
        if (aRW.length > index + 1 && bRW.length > index + 1) {
            return lexComparator(a, b, extractor, ++index)
        } else if (aRW.length === bRW.length) {
            return 1
        } else {
            return aRW.length > bRW.length ? 1 : -1
        }
    }

    if (aRuIndex >= 0 && bRuIndex >= 0) {
        return aRuIndex > bRuIndex ? 1 : -1
    }

    if (aRuIndex >= 0) {
        return -1
    }

    if (bRuIndex >= 0) {
        return 1
    }

    if (aEnIndex >= 0 && bEnIndex >= 0) {
        return aEnIndex > bEnIndex ? 1 : -1
    }

    if (aEnIndex >= 0) {
        return -1
    }

    if (bEnIndex >= 0) {
        return 1
    }

    return numberComparator(charA, charB)
}

/*
 * sorting functions end
 */

const sortGszMembersList = (props: IProps): Array<Models.GszMember> => {
    switch (props.inputSortingType) {
        case Enums.GszMemberListSortingType.ByName :
            return props.currentGsz.memberList.sort((a: Models.GszMember, b: Models.GszMember) =>
                lexComparator(a, b, (arg: Models.GszMember): string => {
                    const name = arg.fullName
                    return name.toLowerCase()
                })
            )
        case Enums.GszMemberListSortingType.ByGroup :
            return classifierSort(props.currentGsz.memberList, 'problemGroup', PROBLEM_GROUP_VALID_CODES_ORDER)
        case Enums.GszMemberListSortingType.ByStatus :
            return classifierSort(props.currentGsz.memberList, 'status', STATUS_ORDER)
    }
    return props.currentGsz.memberList
}

const STATUS_ORDER: any = {
    'Addition': 1,
    'Deletion': 2,
    'Approved': 3
}

const PROBLEM_GROUP_VALID_CODES_ORDER: any = {
    'Yellow Zone': 1,
    'Yellow': 1,
    'Желтая зона': 1,

    'Green Zone': 2,
    'Green': 2,
    'Зеленая зона': 2,

    'Red Zone': 3,
    'Red': 3,
    'Красная зона': 3,

    'Not defined': 4,
    'Not': 4,
    'Не определен': 4,
    '__others__': 4,

    'Late collection': 5,
    'Late': 5,
    'Поздний сбор': 5,

    'Early collection': 6,
    'Early': 6,
    'Ранний сбор': 6,

    'Black Zone': 7,
    'Black': 7,
    'Черная зона': 7
}

const getProblemGroupView: React.StatelessComponent<Models.GszMember> = (props: Models.GszMember): React.ReactElement<View> => {
    if (PROBLEM_GROUP_VALID_CODES_ORDER.hasOwnProperty(props.problemGroup.code)) {
        return (
            <View testID='test-id-5cc3ef5e-83e4-7e47-5f41-132f3202b37c'
                  style={[Styles.problemGroupCircle, { backgroundColor: Utils.getProblemGroupCircleColor(props.problemGroup.code)}]}>
            </View>
        )
    }
    return <Text testID='test-id-23d4fbed-5395-7294-f14e-9a090d73553d'>Не определена</Text>
}

const getMemberRoleLabel = (props: ModelsApp.Classifier): React.ReactElement<View> | null => {
    if (props && props.value) {
        return (
            <View testID='test-id-0668ae99-a810-ffbd-a193-3ef2349d4e8e' style={Styles.OrangeLabel}>
                <Text testID='test-id-07ba8a13-0a76-0686-cf3b-a1fec9b2d884'
                      style={Styles.OrangeLabelText}>{Utils.getRoleString(props.value)}</Text>
            </View>
        )
    }
    return null
}

const getMembersTableRowListRow = (
    item: Models.GszMember,
    performPopoverBorrowerListShow: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW,
    index : number
): React.ReactElement<View> => (
    <TableRow
        testID={`_MembersTableRowListRow_1${index}`}
        key={`${item.id}${index}`}
        onClick={() => {
            performPopoverBorrowerListShow(item)
        }}
    >
        <TableCell testID={`_MembersTableRowListRow_2${index}`}>
            <View
                testID={`_MembersTableRowListRow_3${index}`}
                style={Styles.BorrowerListOrganizationNameContainerColumn}
            >
                <View
                    testID={`_MembersTableRowListRow_4${index}`}
                    style={Styles.memberAttributesRow}
                >
                    {getMemberRoleLabel(item.role)}
                    <Text
                        testID={`_MembersTableRowListRow_5${index}`}
                        style={Styles.memberAttributeOrganizationType}
                    >
                        {item.organizationType.value || 'нет данных'}
                    </Text>
                </View>
                <Text
                    testID={`_MembersTableRowListRow_6${index}`}
                    style={Styles.memberAttributeName}
                >
                    {item.fullName}
                </Text>
            </View>
        </TableCell>
        <TableCell testID={`_MembersTableRowListRow_7${index}`} style={Styles.cellStatusAlign}>
            <Text testID={`_MembersTableRowListRow_8${index}`}>{item.status.value}</Text>
        </TableCell>
        <TableCell testID={`_MembersTableRowListRow_9${index}`} style={Styles.cellProblemGroupAlign}>
            <Text testID={`_MembersTableRowListRow_10${index}`}>{getProblemGroupView(item)}</Text>
        </TableCell>
        <TableCell testID={`_MembersTableRowListRow_11${index}`} style={Styles.cellGroupAlign}>
            <PopoverTarget testID={`_MembersTableRowListRow_12${index}`} refName={`member_${item.id}`}>
                <View
                    testID={`_MembersTableRowListRow_13${index}`}
                    style={Styles.cellGroupArrow}
                >
                    <Button
                        testID={`_MembersTableRowListRow_14${index}`}
                        onExecute={() => performPopoverBorrowerListShow(item)}>
                        <Icon testID={`_MembersTableRowListRow_15${index}`} type={IconType.MrmArrowDown}/>
                    </Button>
                </View>
            </PopoverTarget>
        </TableCell>
    </TableRow>
)

const getMembersTableRowList = (props: IProps): Array<React.ReactElement<View>> => {
    return sortGszMembersList(props).map((item: Models.GszMember, index): React.ReactElement<View> => {
        return getMembersTableRowListRow(item, props.performPopoverBorrowerListShow, index)
    })
}

const getMemberListSearchContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-2ea92f3e-735e-b07d-1430-781960ef1f51'>
            <View
                testID='test-id-2ea92f3e-735e-b07d-1430-781960ef2f42'
                style={Styles.searchNotFoundTextWrapper}>
                <Text
                    testID='test-id-7c659e7a-5d9e-9bdc-d458-79d521cb76fd'
                    style={Styles.searchNotFoundText}>
                    {'Поиск клиента по наименованию в группе связанных заемщиков'}
                </Text>
                <Text
                    testID='test-id-4a4b534f-c947-f01d-1e07-79079f5e2bb2'
                    style={Styles.searchNotFoundTextBold}>
                    {props.currentGsz.name}
                </Text>
            </View>
        {
            (props.inputMemberListSearch != '' && props.memberSearchList.data.length == 0) ?
                <View
                    testID='test-id-8faaa8e9-4933-bf38-b8d5-7db68de85074'
                    style={Styles.searchNotFoundTextWrapper}>
                    <Text
                        testID='test-id-ff48eefc-3d70-6761-b5b6-0271a351308d'
                        style={Styles.searchNotFoundText}>
                        {'Результатов не найдено'}
                    </Text>
                </View> :
                null
        }
        {
            (props.inputMemberListSearch != '' && props.memberSearchList.data.length) ?
                <View
                    testID='test-id-dfb9107e-5719-8122-1416-2dcec9595c91'
                    style={Styles.tableComponent}>
                    <Table testID='test-id-0e2243ea-3560-c4e8-4765-af86a0dd404b' style={Styles.searchGszTableStyles}>
                        <TableHead testID='test-id-2a95062e-09b9-2157-3900-a4b57675e142' style={Styles.noHeight}>
                            <TableColumn testID='test-id-cdf0ca7f-17da-154b-a1b5-4ef10c52413f' width='60%' />
                            <TableColumn testID='test-id-005ac7a4-bb60-d61e-f2c0-eecd141de067' width='18%' />
                            <TableColumn testID='test-id-578dee02-2f2c-6fa2-d775-60399800cb48' width='15%' />
                            <TableColumn testID='test-id-578dee02-2f2c-6fa2-d775-60399800cb47d' width={'7%'} />
                        </TableHead>
                        <TableBody testID='test-id-26071163-6ed9-fc53-c448-20bfd5ea1c0d'>
                            {
                                props.memberSearchList.data.map((item,index) => {
                                    return getMembersTableRowListRow(item, props.performPopoverBorrowerListShow, index)
                                })
                            }
                        </TableBody>
                    </Table>
                </View> :
                null
        }
        </View>
    )
}

const getLoadingErrorModal: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    let isNetworkError: boolean = props.currentGszError != null && props.currentGszError.type === Enums.ErrorType.NetworkError ||
        props.currentGszError != null && props.currentGszError.code == 'TIMEOUT'

    return (
        <ErrorModal
            testID={'test-id-0e2243ea-3560-c4e8-4765-af86a0dd404bac341'}
            isVisible={props.gszLoadingErrorModalIsVisible}
            repeat={isNetworkError ? props.performFlush : null}
            cancel={() => {
                props.gszLoadingErrorModalHide(props.currentGszCachedDate === null)
            }}
            titleText={'Не удалось загрузить данные по ГСЗ'}
            cacheDate={props.currentGszCachedDate}
            messageText={
                isNetworkError ?
                    'Попробуйте снова или обратитесь в службу поддержки.' :
                    'Обратитесь в службу поддержки.'
            }
        />
    )
}

/**
 * Отображение таблицы заемщиков
 *
 * @param {IProps} props
 * @returns {React.ReactElement<Table>}
 */
const renderGSZMemberTable: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Table> => (
    <Table testID='test-id-ab1a309f-821c-3554-4141-75ee68d1bb39' style={Styles.gszTableStyles}>
        <TableHead testID='test-id-2a95062e-09b9-2157-3900-a4b57675e142'>
            <TableColumn testID='test-id-cdf0ca7f-17da-154b-a1b5-4ef10c52413d' width='60%'>
                <Text testID='test-id-ed3bb5c7-682d-f584-8fcc-16d461bc3d19'>Наименование участника ГСЗ</Text>
            </TableColumn>
            <TableColumn testID='test-id-005ac7a4-bb60-d61e-f2c0-eecd141de066' width='16%'>
                <Text testID='test-id-9653c166-6255-68a9-b7ca-a1f2dd16cc10'>Статус</Text>
            </TableColumn>
            <TableColumn testID='test-id-578dee02-2f2c-6fa2-d775-60399800cb47' width='17%'>
                <Text testID='test-id-08cce07b-27f4-3bd6-f119-1e33305dea8d'>Утв. гр. пробл.</Text>
            </TableColumn>
            <TableColumn testID='test-id-578dee02-2f2c-6fa2-d775-60399800cb47f' width={'7%'}>
                <Text testID='test-id-08cce07b-27f4-3bd6-f119-1e33305dea8df'/>
            </TableColumn>
        </TableHead>
        <TableBody testID='test-id-46bd9c74-fec0-3673-0238-4b73f61d8b98'>
            {getMembersTableRowList(props)}
        </TableBody>
    </Table>
);

/**
 * Отображение информации о ГСЗ и ее Лимитах
 *
 * @param {IProps} props
 * @returns {React.ReactElement<View>}
 */
const getContentPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-168cffa0-22e6-19d2-e712-895034944d1c' style={Styles.main}>
        {props.isMemberListSearchMode && getMemberListSearchContent(props)}
        {props.currentGszFetching &&
            <View
                testID='test-id-13e8b819-df14-1911-737f-83f0e0bc5930'
                style={Styles.currentGszFetching}
            >
                <LoaderWithText
                    testID='test-id-f215fff5-da81-cfba-d7d0-2b9a99bee5a3'
                    text={'Загрузка карточки ГСЗ'}
                />
            </View>
        }
        {props.currentGszError && !props.currentGsz.id &&
            <View testID='test-id-168cffa0-22e6-19d2-e712-895034944d1c' style={Styles.main}>
                {getLoadingErrorModal(props)}
            </View>
        }
        {!props.isMemberListSearchMode &&
         !props.currentGszFetching &&
         !props.currentGszError &&
          props.currentGsz.id &&
            <View testID='test-id-168cffa0-22e6-19d2-e712-89503494423c' style={Styles.mainContainer}>
                {/* Тут мы показываем модал с ошибкой в случае данные по карточке ГСЗ были загружены ранее,
                    но при обновлении получилась ошибка */}
                {getLoadingErrorModal(props)}
                <View testID='test-id-ab924ad2-ba81-d570-755a-7ab52597acd2' style={Styles.header}>
                    <H1 testID='test-id-e60eec9b-ce18-f074-1132-157807ba6177'>{props.currentGsz.name}</H1>
                </View>
                {getInvalidLimitStructureNotification(props)}
                {getGSZRefresh(props)}
                {getContentPanelGrid(props)}
                {getLimitPanel(props)}
                <View testID='test-id-5bf07cd9-3466-2ac5-b1e2-ea248da90c6b' style={Styles.gszBorrowersListActions}>
                    <View
                        testID='test-id-edab1fe3-7812-1aaa-d2e0-9099fdb98b61'
                        style={Styles.gszBorrowersListActionsButtonSort}
                    >
                        <Text
                            style={Styles.gszBorrowersListActionsButtonDescription}
                            testID='test-id-87874406-0b03-1211-2188-d19b23f5933a'
                        >
                            Сортировать по:
                        </Text>
                        <PopoverTarget testID='test-id-87874406-0bc3-1201-2288-d19b23f5933a' refName={'sortButton'}>
                            <NavigationTextButton
                                testID='test-id-b25cf6dc-ffb7-ce7d-128d-136c6bba2cc6'
                                title={getSortNameByEnum(props.inputSortingType)}
                                onExecute={props.performPopoverSortingShow}
                            />
                            <Popover
                                testID='test-id-b6d5b7d9-0070-e8fc-414b-770e13d26660'
                                target={PopoverTarget.getRef('sortButton')}
                                opened={props.isVisiblePopoverSorting}
                                onOutsideTap={props.performPopoverSortingHide}
                                type={PopoverType.WIDE}
                                style={{height: 140}}
                                position={[PopoverPosition.BOTTOM]}
                            >
                                {getSortFilterList(props)}
                            </Popover>
                        </PopoverTarget>
                    </View>
                    <View
                        testID='test-id-d029e26e-f1fe-2b17-b568-d1e12101a3e3'
                        style={Styles.gszBorrowersListActionsButtonSearch}
                    >
                        <NavigationIconButton
                            testID='test-id-48e4fadb-2fda-3129-5e2f-7f24b80e375c'
                            type={NavigationIconButtonType.SEARCH}
                            onExecute={props.performMemberListSearchModeEnable}
                        />
                    </View>
                </View>
                <View
                    testID='test-id-22c9e49e-dc16-3cf7-d063-70a756912182'
                    style={Styles.tableComponent}
                >
                    {renderGSZMemberTable(props)}
                </View>
                {props.isRefreshBarActive && <View style={Styles.refreshBarContainer}>
                    <RefreshBar
                        testID='test-id-fef51446s'
                        date={props.currentGszCachedDate}
                        performRefresh={props.performFlush}
                    />
                </View>}
            </View>
        }
        {props.isVisiblePopoverBorrowerList &&
            <PopoverSingle
                testID='test-id-f864404c-e26a-19f5-e756-1dd11166356a'
                target={PopoverTarget.getRef(`member_${props.currentGszMember.id}`)}
                popoverName={'memberPopover'}
                opened={props.isVisiblePopoverBorrowerList}
                onOutsideTap={props.performPopoverBorrowerListHide}
                type={PopoverType.WIDE}
                style={{width: 375, height: 320}}
                position={[PopoverPosition.LEFT]}
            >
                {getBorrowersListPopoverContent(props)}
            </PopoverSingle>
        }
    </View>
)

const getAccessoryPanelContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-cd7144b0-bb61-b6da-ca22-de5fe440fdbe' style={Styles.accessoryPanelContent}>
            <View testID='test-id-9f21a6db-fe99-1a2d-fc9a-017a9c1cd058' style={Styles.accessoryPanelContentButton}>
                <Button testID='test-id-44193207-a4b2-8957-19a6-a6d068eb6dbc'
                        onExecute={props.navigateToGszActivityIncludeScreen}
                        type={ButtonType.DEFAULT}
                >
                    <Text testID='test-id-87ec7131-6a0c-5360-d610-17a05c992215'> Включить компанию в ГСЗ </Text>
                </Button>
            </View>
            <View testID='test-id-00357765-cb11-b61c-ffd5-2bc921df3d71' style={Styles.accessoryPanelContentButton}>
                <Button testID='test-id-b73af25d-cbab-4877-4404-c5e2f22a2b80'
                        onExecute={props.navigateToGszActivityExcludeScreen}
                        type={ButtonType.DEFAULT}
                >
                    <Text testID='test-id-5211acdb-055b-64d9-f050-6d054849fa1c'>Исключить компанию из ГСЗ</Text>
                </Button>
            </View>
        </View>
    )
}

const getLeftPageHeader = (props: IProps) => {
    if (props.isMemberListSearchMode) {
        return (
            <LeftPageHeader testID='test-id-68da025c-557a-0a1a-8408-0b7600ca435812143123'>
                <View
                    testID='test-id-42b4854c-0f54-49a8-b183-c724a1d9eb05'
                    style={Styles.LeftPageHeaderContainer}>
                    <SearchInput
                        value={props.inputMemberListSearch}
                        placeholder={'Введите текст для поиска'}
                        onChange={props.performInputMemberListSearch}
                        onCancel={props.performMemberListSearchModeDisable}
                        autoFocus={true}
                        drawBottomBorder={ true } />
                </View>
            </LeftPageHeader>
        )
    } else {
        return (
            <LeftPageHeader testID='test-id-3593a890-333e-9c08-b6b3-68c5a6c877e1'>
                <NavigationBackButton
                    testID='test-id-654fdc77-61ce-a470-4297-352126d6296f'
                    title={false}
                    onClick={props.navigateBackFromGszScreen} />
            </LeftPageHeader>
        )
    }
}

const getCenterPageHeader = (props: any) => {
    if (props.isMemberListSearchMode) {
        return (
            <CenterPageHeader testID='test-id-f0b5ad2b-f9bd-6a7d-e305-9008abeca790' />
        )
    } else {
        return (
            <CenterPageHeader testID='test-id-b3560243-b921-e9a5-e9c7-eaaafa72536d'>
                <H2 testID='test-id-651ae369-24f4-1ac8-9aca-92fd12bda422'>
                    Группа связанных заемщиков(ГСЗ)
                </H2>
            </CenterPageHeader>
        )
    }
}

/*
 * UI stateless functional component presenter for "GSZ" container.
 */

export interface IProps {
    navigateToGszScreen: ModelsGSZ.NAVIGATE_TO_GSZ_SCREEN,
    performPopoverChiefShow: ModelsGSZ.PERFORM_POPOVER_CHIEF_SHOW,
    performPopoverChiefHide: ModelsGSZ.PERFORM_POPOVER_CHIEF_HIDE,
    performPopoverSortingShow: ModelsGSZ.PERFORM_POPOVER_SORTING_SHOW,
    performPopoverSortingHide: ModelsGSZ.PERFORM_POPOVER_SORTING_HIDE,
    navigateToGszActivityIncludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN,
    navigateToGszActivityExcludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN,
    closeGszActivityPanel: ModelsGSZ.CLOSE_GSZ_ACTIVITY_PANEL,
    performPopoverLimitsShow: ModelsGSZ.PERFORM_POPOVER_LIMITS_SHOW,
    performPopoverLimitsHide: ModelsGSZ.PERFORM_POPOVER_LIMITS_HIDE,
    performPopoverCuratorShow: ModelsGSZ.PERFORM_POPOVER_CURATOR_SHOW,
    performPopoverCuratorHide: ModelsGSZ.PERFORM_POPOVER_CURATOR_HIDE,
    performInputSortingType: ModelsGSZ.PERFORM_INPUT_SORTING_TYPE,
    performRefresh: ModelsGSZ.PERFORM_REFRESH,
    performFlushLimits: ModelsGSZ.PERFORM_REFRESH,
    refresh_callGetGsz: ModelsGSZ.REFRESH_CALL_GET_GSZ,
    refresh_callGetGszLimit: ModelsGSZ.REFRESH_CALL_GET_GSZ_LIMIT,
    performGszRefreshPanelHide: ModelsGSZ.PERFORM_GSZ_REFRESH_PANEL_HIDE,
    performPopoverBorrowerListSearchModeEnable: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE,
    performPopoverBorrowerListSearchModeDisable: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE,
    performPopoverBorrowerListShow: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW,
    performPopoverBorrowerListHide: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_HIDE,
    performInputBorrowerListSearch: ModelsGSZ.PERFORM_INPUT_BORROWER_LIST_SEARCH,
    navigateToBorrowerScreen: ModelsGSZ.NAVIGATE_TO_BORROWER_SCREEN,
    navigateBorrowerListBack: ModelsGSZ.NAVIGATE_BORROWER_LIST_BACK,
    performInputMemberListSearch: ModelsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH,
    performMemberListSearch: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH,
    performMemberListSearchModeEnable: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE,
    performMemberListSearchModeDisable: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE,
    performContainerReset: ModelsGSZ.PERFORM_CONTAINER_RESET,
    navigateBackFromGszScreen: ModelsGSZ.NAVIGATE_BACK_FROM_GSZ_SCREEN,
    currentGsz: Models.Gsz,
    currentGszId: string,
    currentGszMember: Models.GszMember,
    isVisiblePopoverChief: boolean,
    isVisiblePopoverSorting: boolean,
    isVisiblePopoverLimits: boolean,
    isActivityCreateMode: boolean,
    isVisiblePopoverCurator: boolean,
    isPopoverBorrowerListSearchActive: boolean,
    isRefreshBarActive: boolean,
    inputSortingType: Enums.GszMemberListSortingType,
    isVisiblePopoverBorrowerList: boolean,
    borrowerFilteredList: Models.BorrowerList,
    inputBorrowerListSearch: string,
    currentBorrower: Models.Borrower,
    memberSearchList: Models.GszMemberList,
    isMemberListSearchMode: boolean,
    inputMemberListSearch: string,
    refresh: boolean,
    refreshInProgress: boolean,
    refreshError: Error | null,
    currentGszFetching: boolean,
    currentGszError: Error | null,
    gszLoadingErrorModalIsVisible: boolean,
    gszLoadingErrorModalHide: ModelsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE,
    currentGszCachedDate: Date | null,
    gszLimit: Models.GszLimit,
    gszLimitFetching: boolean,
    gszLimitError: Error | null,
    gszLimitCachedDate: Date | null,
    performCustomerOpen: ModelsGSZ.PERFORM_CUSTOMER_OPEN,
    performFlush: ModelsGSZ.PERFORM_FLUSH,
    testID: string,
    organizationType: ModelsApp.Classifier,
    performPopoverBorrowerListCancel: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_CANCEL
}

const ViewGSZ: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (

    <View testID='test-id-a5fdf89e-8c7e-e5ad-870c-69294177b5fd' style={Styles.main}>
        <SplitPanel testID='test-id-66d1755a-1c89-cd8a-9309-6448155ffb0f'
                    id={Utils.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_GSZ)}>
            <ContentPanel testID='test-id-43c5290c-7ff9-eac5-b60e-1847adaa81db' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-41b7c348-2d1f-f8cf-a396-9af2a7cf0e9b' scrollEnabled={false}
                    content={getContentPanelContent(props)}
                >
                    {getLeftPageHeader(props)}
                    {getCenterPageHeader(props)}
                </Page>
                <Page
                    testID='test-id-969e5114-074d-4cc3-b978-eebadf1961ee'
                    scrollEnabled={false}
                    content={<ContainerEmployee testID={'test-id-33bc5f31-d5bb-4d77-85fb-e9d0c5c65852'} />}
				>
					<LeftPageHeader testID={'test-id-29e43376-8a35-46c0-bf1f-17e5efb22452'}/>
				</Page>
                <Page
                    testID='test-id-1cc099e8-3b7a-499b-ab2d-c88a4026b07d'
                    scrollEnabled={false}
                    content={<ContainerEmployee testID={'test-id-e1dde9d5-0b9d-421d-b62d-59e6ee878b73'} />}
                >
					<LeftPageHeader testID={'test-id-bc121677-5961-4e1c-abb6-3d7fe0f415d0'}/>
                </Page>
                <Page testID='test-id-c9b03939-052e-4ca1-3714-11a7e183fde2'
                      content={<ContainerGszActivityInclude testID='test-id-cmm03xx9-052e-4ca1-3714-11a7e183fde2'/>}>
                    <LeftPageHeader testID='test-id-c9b03939-052e-4cdd-3714-11a7e183fde2'/>
                </Page>
                <Page testID='test-id-c9b03939-052e-4ca1-3714-11a7e183fde2'
                      content={<ContainerGszActivityExclude testID='test-id-cmm03939-052e-4ca1-3714-11a7e183fde2'/>}>
                    <LeftPageHeader testID='test-id-c9b03939-052e-4aa1-3714-11a7e183fde2'/>
                </Page>
            </ContentPanel>
            <AccessoryPanel testID='test-id-518f4088-913e-6ab5-e81c-c9e850f41e57'>
                <Page testID='test-id-c9b03939-052e-4ca1-3714-11a7e183fde2' content={getAccessoryPanelContent(props)}>
                </Page>


            </AccessoryPanel>
        </SplitPanel>
    </View>


)

export default ViewGSZ
