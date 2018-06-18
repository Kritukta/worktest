import React from 'react'

import {
    Button,
    Center,
    Icon,
    IconType,
    Loader,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    OptionItem,
    Panel,
    PanelType,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TabSelector,
    Text,
    TextInput,
    View,
} from 'ufs-mobile-platform'

import * as Utils from "../../common/Util"
import {Models} from "mrmkmcib-dashboard"
import {
    RNTableView,
    IconView,
    TouchableHighlight,
} from 'mrmkmcib-ui'
// import Styles from './styles/ViewAppDashboardStyles'
import {defaultValues} from "../../models/Models"
import * as ModelsAppDashboard from "../../models/ModelsAppDashboard"
import Error from "../../models/Error"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums as EnumsCrm, Models as ModelsCrm} from "mrmkmcib-crm"
import {Models as ModelsDashboard} from "mrmkmcib-dashboard"
import Styles from './styles/CustomerSearchListStyles'
import {Enums} from '../../Enums'

const searchCustomer = (props: any) => {

    if (props.isSearchMode) {
        props.performSearchModeDisable()
    } else {
        props.performSearchModeEnable()
    }

}

const _getRole = (role: string) => (
    <View testID='test-id-dee9bc65-8ecd-d2dd-1858-55d248137d23' style={Styles.OrangeLabel}>
        <Text testID='test-id-0cb383bd-a7b7-68a5-ae59-9392031adcb3'
              style={Styles.OrangeLabelText}>{Utils.getRoleString(role)}</Text>
    </View>
)

const _getLock = () => (
    <View testID='test-id-61447cf7-1ef2-4c06-6298-d61919f2b86d' style={Styles.Lock}>
        <IconView testID='test-id-454e85e0-a0dc-ba82-5724-c0bd4a3d5678' type={'lock'} disabled={false} />
    </View>
)

const renderRNTableRow = (props: IProps, item: any, sectionID: string | number, rowID: string | number) => {
    if (item.id === 'showMoreButton') {
        return (
            <Table testID='test-id-21ce01bc-870f-7ec8-5e04-3d315d22d747'>
                <TableBody testID='test-id-e29210eb-4115-b4b7-b817-116a010c3986'>
                    <TableRow testID='test-id-75a36e3f-6c71-0a94-2e9c-5d78bde47ee1' key={`ShowMoreButtonRow_${rowID}`}>
                        <TableCell testID='test-id-7b0fe4ae-288b-c25d-fd4d-392aa318185a'>
                            <View testID='test-id-40ea75f7-2edb-6aaf-1a8f-a7ec827b0edd' style={Styles.InlineWrapper}>
                                <View testID='test-id-715ee802-0b00-9b2b-d8ef-6de0189d364b' style={Styles.ShowMoreRow}>
                                    <Button testID='test-id-ba62a2fa-6c7f-8e21-e8c1-d4c6b90ebb95'
                                            onExecute={() => {
                                                if (props.isSearchMode) {
                                                    props.performCustomerSearchListAppend()
                                                }
                                            }}
                                    >
                                        <Text testID='test-id-179c9f53-34ac-fc01-520c-336cd04e576e'>Загрузить еще</Text>
                                    </Button>
                                </View>
                            </View>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }

    return (
        <Table testID='test-id-a9aece60-f120-2b69-556f-060558a68b64'>
            <TableBody testID='test-id-bbb0d76c-4489-eece-1a07-fdbd537a1e83'>
                <TableRow testID='test-id-bc35d4aa-81dd-1401-478d-f8f9a87dbbf5' key={item.id} onClick={() => {
                    props.performCustomerSelect(item)
                }}>
                    <TableCell testID='test-id-d1dd1e86-f413-a1d9-0193-a9862ce80b1e'>
                        <View testID='test-id-8b42d215-8298-7af0-f97f-93def70fa4fc' style={Styles.InlineWrapper}>
                            <View testID='test-id-9a62042a-dc24-2037-ae00-2b7c2fa5735c' style={Styles.flex}>
                                <View testID='test-id-de20e4d9-cccf-80ce-6f18-2904432ba553' style={Styles.TopRow}>
                                    {(item.myClient) ? null : _getLock()}
                                    {item.role.value ? _getRole(item.role.value) : null}
                                    <Text testID='test-id-bc5814c9-4dca-c36f-c8be-07d604bc0970'
                                          style={Styles.OrgType}>{item.organizationType.value}</Text>
                                </View>
                                <View testID='test-id-686e84d6-2cf3-f9ea-b816-a2ab8dba077e' style={Styles.BottomRow}>
                                    <Text testID='test-id-8cac358c-a7c2-2036-eb8d-c94dbef9f099'
                                          style={Styles.Name}>{item.name}</Text>
                                </View>
                            </View>
                            <Button testID='test-id-3b2014d2-ebdb-d07f-be23-244aacc27b54' onExecute={() => {
                                props.performCustomerSelect(item)
                            }}>
                                <Icon testID='test-id-2c9e8421-c7d7-dda1-bffe-d6ce6f5c5e23' type={IconType.MrmLink}/>
                            </Button>

                        </View>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}


const renderRNTable = (props: IProps) => {

    let customerList = props.inputSearch.length >= 3 ? props.customerSearchList : props.searchHistoryList // .slice() // вторым массивом будет вы недавно искали
    customerList.data = customerList.data.slice() // для добавления кнопки

    if (customerList.data.length > 0 && !customerList.data.find(item => item.id == 'showMoreButton')) {
        if (props.isSearchMode && !customerList.isCompleted) {
            customerList.data.push({
                ...defaultValues.CustomerUnknown,
                id: 'showMoreButton'
            })
        }
    }
    if (props.searchAppendInProgress) {
        customerList.data = customerList.data.filter((item: any) => item.id != 'showMoreButton')
    }
    return (
        <View testID='test-id-e35150d1-382c-c62a-871a-7b5739461088' style={{}}>
            <RNTableView testID='test-id-cfbe93a2-be4d-1abf-c18b-60a47cc01dbc'
                         items={customerList.data}
                         rowHasChanged={(r1: any, r2: any) => {
                             return r1 != r2
                         }}
                         renderRow={(item: any, sectionID: string | number, rowID: string | number) => renderRNTableRow(props, item, sectionID, rowID)}
            />
        </View>
    )
}
/**
 * FIXME когда платформенная таблица оживет, заменить RNTableView на вызов newsList
 * @param props
 */
const getTable = (props: IProps) => {
    if (props.isSearchMode) {
        if (props.searchInProgress) {
            return getLoader()
        }
        let error: string | null = null
        if(!props.customerSearchList.isCompleted && props.customerSearchList.data && props.customerSearchList.data.length > 0) {
            error = 'Найдено слишком много записей. Уточните поисковый запрос'
        }
        // UFS-25874
        return (
            <View testID='test-id-2ff6efdd-44e7-6d2b-4b04-bb512893f711' style={Styles.main}>
                {
                    error ?
                        <View style={Styles.longListErrorTextWrapper}>
                            <Text testID={'errorText'} style={Styles.longListErrorText}>{error}</Text>
                        </View> :
                        <View>
                            {(props.searchError || props.searchAppendError) ? getErrorPanel(props) : null}
                            {props.searchAppendInProgress ?
                                <Center testID='test-id-bf0a403c-e8f6-35a6-0c2a-098f1783edfd'><Loader
                                    testID='test-id-bf0a403c-e8f6-35a6-0c2a-098f1783edfd'/></Center> : null}
                            {renderRNTable(props)}
                        </View>
                }

                {/*<Table testID='test-id-a2456953-e497-642c-1dfe-2c5e76c5237d'>*/}
                {/*<TableBody testID='test-id-a8ecb728-0979-225f-fcba-faa9a85c0a89'>*/}
                {/*{_renderTableRows(props)}*/}
                {/*</TableBody>*/}
                {/*</Table>*/}
            </View>
        )
    }
    return (<View testID='test-id-727feb4a-5b48-385f-790f-107c58b77e7e'/>)
}
const getLoader = () => (
    <View testID='test-id-1f161468-00b4-33f7-a471-3ee79e1b01a8' style={Styles.LoaderWrapper}>
        <Loader testID='test-id-60736938-4413-ccc2-ded6-b98fbbdea5be'/>
    </View>

)

const getErrorText = (props: IProps) => {
    if (props.searchError) {
        return props.searchError
    }
    if (props.searchAppendError) {
        return props.searchAppendError
    }
    return {comment: 'комментарий', message: 'сообщение'}
}
const getErrorStyle = (props: IProps) => {
    if ((props.isSearchMode && props.customerSearchList.data.length == 0)) {
        return Styles.ErrorWrapperCenter
    }

    return Styles.ErrorWrapper

}

const getErrorPanel = (props: IProps) => (
    <View testID='test-id-771bbed4-8511-9bfc-3e27-a0602cf231c3' style={getErrorStyle(props)}>
        <Panel testID='test-id-b1d84034-ab7c-b4aa-981a-3546de845009' type={PanelType.WARNING_BOX}
               header={'Данные о клиентах не получены'}
               headerMedia={
                   <Button testID='test-id-af5763dd-0e95-f4c0-2c32-7b25da7d4853'
                           onExecute={() => {
                               props.performSearch()
                           }}
                   >
                       <Text testID='test-id-3feca7bf-2289-8d3f-0432-82123c48ff1d'>Повторить запрос</Text>
                   </Button>
               }
               hasIcon
        >
            <View testID='test-id-cd3c4474-2481-3e0f-e840-33e443e6641f' style={Styles.ErrorWrapper}>
                <Text testID='test-id-28947d92-18c8-f9c8-30d9-69ce391ade7b'>{getErrorText(props).comment}</Text>
                <Text testID='test-id-329e9f1e-9e60-f021-bc32-d33a3bbb3ab2'>{getErrorText(props).message}</Text>
            </View>
        </Panel>
    </View>
)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getSearchInput = (props: IProps) => {
    return (
        <View testID='test-id-b91df9c9-d695-0fa2-0c71-71fe25500c00' style={Styles.SearchInputView}>
            <NavigationIconButton testID='test-id-4c72195d-a768-9b82-7c05-30658da48892'
                                  type={NavigationIconButtonType.SEARCH}
                                  onExecute={() => {
                                      //searchCustomer(props)
                                  }}
            />
            <TextInput testID='test-id-cb1a195e-621b-e81b-a96c-84b21b53b823'
                       style={Styles.SearchInput}
                       placeholder={'Поиск по наименованию клиента, ИНН, КПП, ID: введите не менее трех символов'}
                       onChange={(value) => {
                           props.performInputSearch(value)
                       }}
                       onReturnKeyPressed={ props.performSearch }
                       value={props.inputSearch}
                       onBlur={() => {
                       }}
                       autoFocus
            />
            {
                props.inputSearch ?
                    <View style={ Styles.SearchInputClearButton }>
                        <Button
                            testID='test-id-SearchInput-MrmClear-Icon-Button-qlik'
                            onExecute={ props.performSearchReset } >
                            <Icon
                                testID='test-id-SearchInput-MrmClear-Icon-qlik'
                                type={ IconType.MrmClear }></Icon>
                        </Button>
                    </View>
                : null
            }

            <NavigationTextButton testID='test-id-8d499a8e-55c3-1d8f-b140-b163bb4d367a'
                                  title='Отмена'
                                  onExecute={() => {
                                      props.performSearchModeDisable()
                                  }}
            />
        </View>)
}
const getList = (props: IProps) => {
    return getTable(props)
}

const getFilter = (props: IProps) => {
    if (props.inputSearch.length >= 3) { // если пользователь ввел 3 и более букв, то выводим фильтр
        return (
            <View testID='test-id-1884f230-9ce4-db94-1f45-af851096a1d1' style={Styles.filterView}>
                <TabSelector style={Styles.tabSelector} testID={'test-id-79a1c4b3-5c09-4a39-bdb3-ed9b86a19178'}
                             value={props.isSearchCustomerManaged ? 'myCustomers' : 'allCustomers'}
                             onChange={() => {
                                 props.performInputSearchCustomerManaged(!props.isSearchCustomerManaged)
                             }}>
                    <OptionItem testID={'test-id-30650302-0e1c-4876-b234-fd8a22abed83'} value='myCustomers'
                                title='Мои клиенты'/>
                    <OptionItem testID={'test-id-e31e780d-2d3b-4f13-9a0d-4c132167b119'} value='allCustomers'
                                title='Все клиенты'/>
                </TabSelector>
            </View>
        )
    } else {
        if (props.searchHistoryList.data.length) { // если есть массив Вы недавно искали то выводим заголовок для него
            return (
                <View style={Styles.lastSearchRow}>
                    <Text testID='test-id-1e1c1791-bc58-404d-a432-d0b9551c482e' style={[Styles.lastSearchText]}>ВЫ
                        НЕДАВНО ИСКАЛИ</Text>
                    <View style={Styles.clearLastSearchBlock}>
                        <Text testID='test-id-1d2762c7-861b-4321-9c65-1b1d123933dd'
                              style={Styles.clearLastSearchText}
                              onPress={() => {
                                  props.performSearchHistoryListClear()
                              }}
                        >Очистить историю</Text>
                    </View>
                </View>
            )
        } else {
            return (<View testID='test-id-a6c0c248-c70d-4ee1-81ea-be14dc5321f3'/>)
        }
    }
}

const getSearchPanel = (props: IProps) => {
    return (
        <View testID='test-id-04e0a121-24b7-4f3e-44cf-e1b4616d983f' style={Styles.ModalForeground}>
            <View testID='test-id-b704de6c-569a-3b22-ebc7-aad1563849c2' style={Styles.roundBorderView}>
                {getSearchInput(props)}
                {getFilter(props)}
                {getList(props)}
            </View>
            {/* exit search by clicking TouchableHighlight */}
            <TouchableHighlight
                style={Styles.flex}
                onPress={props.performSearchModeDisable} />
        </View>
    )
}

export interface IProps {
    performApplicationInit: ModelsAppDashboard.PERFORM_APPLICATION_INIT,
    handleQlikError: ModelsAppDashboard.HANDLE_QLIK_ERROR,
    performInputSearchCustomerManaged: ModelsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED,
    performSearchModeEnable: ModelsAppDashboard.PERFORM_SEARCH_MODE_ENABLE,
    performSearchModeDisable: ModelsAppDashboard.PERFORM_SEARCH_MODE_DISABLE,
    performInputSearch: ModelsAppDashboard.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsAppDashboard.PERFORM_SEARCH_RESET,
    performSearch: ModelsAppDashboard.PERFORM_SEARCH,
    performCustomerSearchListAppend: ModelsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    performQlikEvent: ModelsAppDashboard.PERFORM_QLIK_EVENT,
    performCustomerSelect: ModelsAppDashboard.PERFORM_CUSTOMER_SELECT,
    performSearchHistoryListClear: ModelsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR,
    persistSearchHistoryList: ModelsAppDashboard.PERSIST_SEARCH_HISTORY_LIST,
    recoverSearchHistoryList: ModelsAppDashboard.RECOVER_SEARCH_HISTORY_LIST,
    performContainerReset: ModelsAppDashboard.PERFORM_CONTAINER_RESET,
    qlikError: Error | null,
    currentUser: ModelsApp.Employee,
    currentQlikMessage: Models.QlikMessage,
    isSearchMode: boolean,
    inputSearch: string,
    customerSearchType: EnumsCrm.CustomerSearchType,
    customerSearchError: string,
    isSearchError: boolean,
    currentSearchPage: number,
    customerSearchList: ModelsCrm.CustomerList,
    isSearchCustomerManaged: boolean,
    qlikAvailabilityCheck: boolean,
    qlikAvailabilityCheckFetching: boolean,
    qlikAvailabilityCheckError: Error | null,
    qlikAvailabilityCheckCachedDate: Date | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    searchAppend: boolean,
    searchAppendInProgress: boolean,
    searchAppendError: Error | null,
    searchHistoryList: ModelsDashboard.SearchHistoryList,
    searchHistoryListInProgress: boolean,
    searchHistoryListError: Error | null,
    testID: string
}

const CustomerSearchList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    getSearchPanel(props)


)
export default CustomerSearchList