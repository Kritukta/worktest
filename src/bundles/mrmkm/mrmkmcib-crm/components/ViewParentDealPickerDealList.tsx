/*
 * Created by Gladkov E.N.
 */

import React from 'react'

const HEADER_TEXT: string = 'Выбор сделки'
const NAVIGATE_BACK_BUTTON_TEXT: string = 'Новая сделка'
const SHOW_CHECKED: boolean = true


import Styles from './styles/ViewParentDealPickerDealListStyles'
import {IParentDealPickerProps as IProps} from '../containers/ContainerParentDealPicker'

import {
    Button,
    ContentPanel,
    LeftPageHeader,
    NavigationBackButton,
    CenterPageHeader,
    H2,
    Icon,
    IconType,
    Loader,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    RightPageHeader,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableColumnAlignment,
    TableHead,
    TableRow,
    Text,
    View,
} from 'ufs-mobile-platform'
import { EnumsCrm, Models as ModelsCrm } from 'mrmkmcib-crm'
import Error from '../models/Error'

import * as Utils from '../common/Util'
import { IconView, KeyboardAvoidingView} from 'mrmkmcib-ui'

import { CONVERT_ERROR } from '../models/Converters'

const _tableColumns = (props: IProps) => ([
    `Суть`,
    `Стадия\nПлановое закрытие`,
    `Сумма в тысячах\nПродукт`
])

export const isCredit = (item: ModelsCrm.Deal): boolean => (
    item.type === EnumsCrm.DealType.Credit
)

const myRoleName = (deal: ModelsCrm.Deal): string => (
    (deal.myRole && deal.myRole.value) || ''
)

interface ListRowsData {
    id: string
    isAccessible: boolean
    first: { top: string, middle?: string, bottom: string }
    second: { top: string, bottom: string }
    third: { top: string, bottom: string }
    deal: ModelsCrm.Deal
}

const getErrorText = (props: IProps): Error => CONVERT_ERROR(props.parentDealDealListFetchError)

const getErrorPanel = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-702ea3b2-ad7d-c0a2-a144-2dec1ef2704e' style={Styles.ErrorWrapper}>
        <Panel testID='test-id-4f23e2b5-856b-7552-783e-8acc5e8a8fc4' type={PanelType.WARNING_BOX}
            header={'Данные о сделках не получены'}
            headerMedia={
                <Button testID='test-id-2c42d9cc-23d1-2001-e938-5dc9b7ef673a'
                    onExecute={props.performParentDealDealListRefresh.bind(null)}
                >
                    <Text testID='test-id-19446d19-83a3-2b4a-5a4d-3afd2f0f2bab'>Повторить запрос</Text>
                </Button>
            }
            hasIcon
        >
            <View testID='test-id-b69c4705-4949-cf66-e257-9e320ecdf24d' style={Styles.ErrorWrapper}>
                <Text testID='test-id-938004d6-b8ec-979c-77d2-5ef9236ec96b'>{getErrorText(props).comment}</Text>
                <Text testID='test-id-391449fa-83ff-26ee-b3d2-13c70d058f6f'>{getErrorText(props).message}</Text>
            </View>
        </Panel>
    </View>
)

const getTable = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.TableAreaContainer}>
        <View testID='test-id-db967c54-02e9-98e8-d4c2-d17c072643c9' style={Styles.TableContainer}>
            {props.parentDealDealListFetchError ?
                getErrorPanel(props)
                :
                props.isParentDealDealListRefreshInProgress ?
                    (<View testID='test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d' style={Styles.LoaderWrapper}>
                        <Loader testID='test-id-f02c8252-5b81-5ae5-48d5-cd7be630409d' />
                        <Text testID='test-id-544d3087b2183b0ade'>Загрузка списка сделок</Text>
                    </View>)
                    :
                    (<View testID='test-id-f02c825d7be630409d' style={Styles.TableWrapper}>
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
                    </View>)}
        </View>
    </View>
)

const rows = (props: IProps) => {
    const mappedData = {
        opened: (rows: Array<ModelsCrm.Deal>): Array<ListRowsData> => rows.map(item => ({
            id: item.id,
            isAccessible: new Boolean(item.roleClassifier && item.roleClassifier.value).valueOf(),
            first: { top: item.title, bottom: myRoleName(item) },
            second: { top: item.phaseClassifier.value, bottom: item.plannedFinishDate ? Utils.format.date(item.plannedFinishDate) : '-' },
            third: { top: item.sum ? Utils.format.sum(item.sum, 5, item.currency && item.currency.code) : '-', bottom: Utils.productLine(item) },
            deal: item,
        }))}
    return mappedData.opened(props.parentDealDealList.data)
}

const _renderTableRows = (items: Array<ListRowsData>, props: IProps, forSearch: boolean = false): Array<React.ReactElement<TableRow>> => {

    return items.map(( item: ListRowsData, i: number ) => (
                <TableRow
                    testID={`test-id-dealRow-${item.id}`}
                    key={`dealRow-${i}-${item.id}`}
                    onClick={props.performParentDealDealSelect.bind(null, item.deal)}
                >
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

                    {
                        SHOW_CHECKED && props.currentDeal.parentDeal && props.currentDeal.parentDeal.id === item.deal.id ?
                        <TableCell testID='test-id-7fce7-8cfde477fb5f'>
                            <View testID={`test-id-dealRow-clickable-Icon${item.id}`} style={Styles.RowLinkContainer}>
                            <Button testID='test-id-08e4caa-0f22edbfaa59ss'>
                                        <Icon testID='test-id-3f3e58f5-b2f755b5200b' type={IconType.MrmDone}/>
                                    </Button>
                            </View>
                        </TableCell>
                        : null
                    }
                </TableRow>
            )
    )

}

const getTableContent = (props: IProps): React.ReactElement<KeyboardAvoidingView> => (
    <KeyboardAvoidingView
        behavior={'padding'}
        contentContainerStyle={[Styles.flex, Styles.maxHeightFull]}
        keyboardVerticalOffset={0}
        style={Styles.flex}
        >
        {getTable(props)}
    </KeyboardAvoidingView>
)

const getLeftPageHeader = (props: IProps): React.ReactElement<LeftPageHeader> => {
    return (
        <LeftPageHeader testID='test-id-471537c6-88eb-e661-4bae-ad02466c93d9'>
            <NavigationBackButton
                testID='test-id-c4835204-55fd-87b4-e9fb-6d994a91bf13'
                title={false}
                onClick={props.navigateBack.bind(null)}
                />
                <View style={Styles.navigationBackButtonTextAdjustment}
                    testID={`test-id-ViewMemberList-3`}
                    >
                    <NavigationTextButton
                        testID={`test-id-ViewMemberList-4`}
                        title={NAVIGATE_BACK_BUTTON_TEXT}
                        onExecute={props.navigateBack.bind(null)}
                        />
                </View>
        </LeftPageHeader>
    )
}

const getRightPageHeader = (props: IProps): React.ReactElement<RightPageHeader> => {
    return (
        <RightPageHeader testID='test-id-3be30542-8248-232a-1609-1ac78298a970'>
        </RightPageHeader>
    )
}

const getCenterPageHeader = (props: IProps): React.ReactElement<CenterPageHeader> => {
    return (
        <CenterPageHeader testID='test-id-0f266ce2-cb18-312f-39d2-60d8487c74a6'>
            <H2 testID='test-id-d4334e92-1315-7e66-28cc-d651604fd80e'>{HEADER_TEXT}</H2>
        </CenterPageHeader>
    )
}

export const ViewParentDealPickerDealList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View
        testID='test-id-7e4091cf-e232-26e9-99de-65c5d91e771b'
        style={Styles.AppCRMLoaderWrapper}
        >
        <SplitPanel
            testID='test-id-fefefc4d-4ae6-904b-7205-79ff47de8227'
            id={Utils.getNavigationAppCrmDealEditorString(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_ParentDealPicker_DealList)}
            >
            <ContentPanel testID='test-id-ad7b37bf-81f9-f00e-1c0c-9351ce1de8f6'
                style={Styles.contentPanel}
                >
                <Page
                    testID='test-id-a85684e0-8aa7-1c73-0e4c-14fa8c75fa64'
                    scrollEnabled={true}
                    content={getTableContent(props)}
                    >
                    {getLeftPageHeader(props)}
                    {getCenterPageHeader(props)}
                    {getRightPageHeader(props)}
                </Page>
            </ContentPanel>
        </SplitPanel>
    </View>
)

export default ViewParentDealPickerDealList
