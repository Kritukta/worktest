'use strict'
/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewEmployeeStyles'

import {
    Button,
    ButtonType,
    Center,
    CenterPageHeader,
    Col,
    ContentPanel,
    Grid,
    H1,
    H2,
    HorizontalRule,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationIconButton,
    NavigationIconButtonType,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    Popover,
    PopoverPosition,
    PopoverType,
    ProfileCell,
    RightPageHeader,
    Row,
    SplitPanel,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    View
} from 'ufs-mobile-platform'

import {Models as ModelsApp, ErrorModal, AlertView} from 'mrmkmcib-app'
import {
    AgentCircle,
    AgentInfoRow,
    ContainerEmployee,
    Models as ModelsCrm,
    Models,
    OneLineCell
} from 'mrmkmcib-crm'
import {
    ExtraStyles,
    InfoButton,
    PersonPhoto,
    PersonPhotoSize,
    ProfileRow,
    IconView
} from 'mrmkmcib-ui'

import {Models as ModelsScheduler} from 'mrmkmcib-scheduler'
import {LoaderWithText} from 'mrmkmcib-app'

import * as ModelsAppCRM from '../models/ModelsAppCRM'
import * as ModelsEmployee from '../models/ModelsEmployee'
import * as ModelsGsz from '../models/ModelsGSZ'
import * as Utils from '../common/Util'
import Error from '../models/Error'
import {Enums} from '../Enums'
import PopoverTarget from '../modules/PopoverTarget'
import ContainerPerson from '../../mrmkmcib-scheduler/containers/ContainerPerson'
import ContainerCustomer from '../containers/ContainerCustomer'


const smallLoader = (): React.ReactElement<View> => (
    <View
        style={Styles.smallLoader}
        testID='test-id-091942a2-35bf-df1e-8cb5-5223b404672f'>
        <Loader testID='test-id-091942a2-35bf-df1e-0cb5-5223b404672f'/>
    </View>
)


const getErrorPanel = (props: IProps): React.ReactElement<ErrorModal> | null => (

    props.subordinateListError || props.customerListError || !props.isEmployeeShedulerAvailable ? (
            <ErrorModal
                testID={ 'test-id-modal-error' }
                isVisible={props.isVisibleErrorModal}
                titleText={
                    props.subordinateListError ?
                        'Не удалось загрузить список подчиненных.' :
                        !props.isEmployeeShedulerAvailable ?
                            'Ошибка: почтовый сертификат не импортирован.' :
                            'Не удалось загрузить список клиентов сотрудника.'
                }
                messageText={
                    props.isEmployeeShedulerAvailable ?
                        'Попробуйте снова или обратитесь в службу поддержки.' :
                        'Обратитесь в службу поддержки.'
                }
                cancel={() => props.performErrorModalHide()}
                repeat={props.isEmployeeShedulerAvailable ? () => props.performFlush : null}
                isCacheDateMessageVisible={props.isEmployeeShedulerAvailable}
                cacheDate={ new Date() }/>
        ) : null

)

const EmailRow: React.StatelessComponent<IEmailRow> = (props: IEmailRow): React.ReactElement<View> => {
    const isUserHasEmail: boolean = (typeof props.email === 'string' && props.email !== 'Нет данных' && props.email !== '')

    return (
        <View
            testID='test-id-view-employee-email-row-container'
            style={[Styles.AgentInfoRowEmail, Styles.PaddingLeft]} >
            <Text
                testID='test-id-view-employee-email-row-title'
                style={isUserHasEmail ? Styles.AgentInfoRowLabelEmail : Styles.AgentInfoRowLabel}>
                {'Электронная почта'}
            </Text>
            {
                isUserHasEmail ?
                    (
                        <Button
                            testID='test-id-view-employee-email-row-email-button'
                            onExecute={props.onClick}
                            type={ButtonType.TEXT} >
                            <Text
                                testID='test-id-view-employee-email-row-email-text'
                                style={Styles.email} >
                                {props.email}
                            </Text>
                        </Button>
                    ) :
                    (
                        <Text testID='test-id-view-employee-email-row-no-data'>
                            {Utils.getPlaceholderStringRepresentation(Utils.UndefinedValuesPlaceholder.NO_DATA)}
                        </Text>
                    )
            }
        </View>
    )
}

const SplittedDataRow: React.StatelessComponent<ISplittedDataRow> = (props: ISplittedDataRow): React.ReactElement<View> => (
    <View
        testID='test-id-ViewEmployee-expanded-info-row'
        style={[Styles.DataLineWrapper, Styles.PaddingLeft]} >
        <View style={Styles.InlineWrapper}>
            <View style={Styles.flex}>
                <Text
                    testID='test-id-ViewEmployee-expanded-main_22'
                    style={Styles.AgentInfoRowLabel} >
                    { props.leftTitle }
                </Text>
                <Text numberOfLines={1} ellipsizeMode={'tail'} testID='test-id-ViewEmployee-expanded-main_22'>
                    { props.leftText }
                </Text>
            </View>
            <View style={Styles.flex}>
                <Text
                    testID='test-id-ViewEmployee-expanded-main_22'
                    style={Styles.AgentInfoRowLabel} >
                    { props.rightTitle }
                </Text>
                <Text numberOfLines={1} ellipsizeMode={'tail'} testID='test-id-ViewEmployee-expanded-main_24'>
                    { props.rightText }
                </Text>
            </View>
        </View>
    </View>
)

const ErrorPanel: React.StatelessComponent<IErrorPanel> = (props: IErrorPanel): React.ReactElement<View> => (
    <View
        testID='test-id-7fbe9b45-e0c6-ad74-8807-50ef2beae1dd'
        style={Styles.ErrorWrapper} >
        <Panel
            testID='test-id-2b93dd41-154b-07d2-f856-1eb0fe47c610'
            type={PanelType.WARNING_BOX}
            header={props.errorMessage}
            headerMedia={
                <Button
                    testID='test-id-cd32732c-350d-7a35-2e6d-139ce38e117b'
                    onExecute={ props.performRefresh } >
                    <Text
                        testID='test-id-8f492164-d55f-4d94-f583-2c6f0d870b87'>
                        {'Повторить запрос'}
                    </Text>
                </Button>
            }
            hasIcon >
            <View
                testID='test-id-0c773a81-dc65-061c-a280-51fd35921143'
                style={Styles.ErrorWrapperContent} >
                <Text testID='test-id-b61f627d-4a1a-02d8-d8c0-d22d2840fd21'>
                    { props.error ? props.error.comment : '' }
                </Text>
                <Text testID='test-id-3d49653d-b9d9-9580-19dd-98aad00da143'>
                    { props.error ? props.error.message : '' }
                </Text>
            </View>
        </Panel>
    </View>
)

const ClientsOfEmployeeRow: React.StatelessComponent<IClientsOfEmployeeRow> = (props: IClientsOfEmployeeRow): React.ReactElement<View | null> => {

    if (props.customerList && props.customerList.data && props.customerList.data.length > 0) {
        const customerCompanies = (list: Models.Customer[]): string => {
            const [first, ...rest] = list
            let subName = first && first.name && first.name.length > 30 ? first.name.substr(0, 30) + '...' : first.name
            return [
                subName && subName.length > 0 ? subName : '',
                (rest && rest.length) ? `(ещё ${rest.length})` : ''
            ].join(' ')
        }

        const numberedListOfCompanies: string = customerCompanies(props.customerList && props.customerList.data ? props.customerList.data : [])

        return (
            <View style={[ExtraStyles.TableWrapper.removeHorizontalPaddings, Styles.PaddingLeft]}>
                <Table testID='test-id-ViewEmployee-expanded-main_table'>
                    <TableBody testID='test-id-ViewEmployee-expanded-main_table_1'>
                        <TableRow
                            testID='test-id-98ec8265-bb37-e638-6554-c2367cd4f0fe'
                            onClick={ props.onClick }>
                            <TableCell
                                testID='test-id-7dd671d9-54c5-4a2c-043c-78068f7ead03'
                                style={[ExtraStyles.TableCell.removeVerticalExtraMargins, Styles.CustomersListTableCellWrapper]} >
                                <View style={Styles.ChevronWrapper}>
                                    <Button
                                        testID='test-id-c0cda02e-06f8-a2fc-1986-ec82f178478e'
                                        onExecute={ props.onClick }>
                                        <Icon
                                            testID='test-id-9d85dbc6-d217-320b-7d55-2c425e882681'
                                            disabled
                                            type={IconType.MrmLink} />
                                    </Button>
                                </View>
                                <Text
                                    testID='test-id-7dd671d9-54c5-452c-043c-78068f7ead03'
                                    style={Styles.CustomerCompaniesCounter} >
                                    { numberedListOfCompanies }
                                </Text>
                                <Text
                                    testID='test-id-7dd671d9-33c5-452c-043c-78068f7ead03'
                                    style={Styles.RegularText} >
                                    {'Список клиентов'}
                                </Text>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </View>
        )
    } else {
        if ( props.customerListError ) {
            return <View
                testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b2'
                style={Styles.clientListClickableRowWrapper} >
                <View style={Styles.clientListClickableButton}>
                    <NavigationIconButton
                        testID='test-id-4fa17fe7-3a12-0e93-0c79-c2a788dea5992'
                        type={NavigationIconButtonType.REFRESH}
                        onExecute={props.callGetCustomerList} />
                </View>
                <View
                    testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cf903e0b2'
                    style={[Styles.textWithErrorView, Styles.main]} >
                    <Text
                        testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b2'
                        style={Styles.baseText}>
                        {'Клиенты сотрудника'}
                    </Text>
                    <Text
                        testID='test-id-20fa97bb-44d8-0e19-ce7b-0751cfaabe0b2'
                        style={Styles.clientListErrorText}>
                        {'Не удалось загрузить данные. Попробуйте снова или обратитесь в службу поддержки.'}
                    </Text>
                </View>
            </View>
        } else {
            return <View/> // null можно возвращать начиная с tsc версии 2.3.4 (у нас 2.3.3)
        }
    }

}

const BackButtonHeader = (key:string,callback:()=>void,title:string) => <LeftPageHeader
    key={key}
    testID={`test-id-ViewEmployee-AgentMemberListexpanded-1-${key}`} >
    <NavigationBackButton
        testID={`test-id-ViewEmployee-AgentMemberListexpanded-2-${key}`}
        title={false}
        onClick={callback} />
    <View
        style={Styles.navigationBackButtonTextAdjustment}
        testID={`test-id-ViewEmployee-AgentMemberListexpanded-3-${key}`} >
        <NavigationTextButton
            testID={`test-id-ViewEmployee-AgentMemberListexpanded-4-${key}`}
            title={title}
            onExecute={callback} />
    </View>
</LeftPageHeader>


const getEmployeeScreenNavigation = (props: IProps) => {
    switch(props.currentMode) {
        case Enums.EmployeeMode.DealAgreement: {
            return [
                BackButtonHeader('LeftPageHeaderDealEmployee', props.navigateEmployeeScreenBackToDealAgreement, 'Сделка'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigationDeal'}
                    testID='test-id-05b278b6b50a' >
                    <H2 testID='test-id-0a438c278b6b50a'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
                <RightPageHeader
                    key={'test-id-00dfc78b6b50a222'}
                    testID='test-id-ViewEmployee-expanded-main_09_11' >
                </RightPageHeader>
            ]
        }
        case Enums.EmployeeMode.Deal: {
            return [
                BackButtonHeader('LeftPageHeaderDealEmployee', props.navigateEmployeeScreenBackToDeal, 'Сделка'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigationDeal'}
                    testID='test-id-05b278b6b50a' >
                    <H2 testID='test-id-0a438c278b6b50a'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
                <RightPageHeader
                    key={'test-id-00dfc78b6b50a222'}
                    testID='test-id-ViewEmployee-expanded-main_09_11' >
                </RightPageHeader>
            ]
        }
        case Enums.EmployeeMode.Activity: {
            return [
                BackButtonHeader('LeftPageHeaderActivityEmployee', props.navigateEmployeeScreenBack, 'Задача'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigation_4'}
                    testID='test-id-05b10dee-adca-11e7-abc4-cec278b6b50a' >
                    <H2 testID='test-id-0a4388e6-adca-11e7-abc4-cec278b6b50a'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>
            ]
        }
        case Enums.EmployeeMode.Activity_MemberList: {
            return [
                BackButtonHeader('LeftPageHeaderActivityEmployee', props.navigateEmployeeScreenBack, 'Задача'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigation_4'}
                    testID='test-id-05b10dee-adca-11e7-abc4-cec278b6b50a' >
                    <H2 testID='test-id-0a4388e6-adca-11e7-abc4-cec278b6b50a'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>
            ]
        }
        case Enums.EmployeeMode.Employee: {
            return [
                BackButtonHeader('LeftPageHeaderActivityEmployee', props.navigateEmployeeScreenBack, 'Сотрудник'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigation_5'}
                    testID='test-id-05b10dee-adca-11e7-abc4-cec278b6b50a5' >
                    <H2 testID='test-id-0a4388e6-adca-11e7-abc4-cec278b6b50a5'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>
            ]
        }
        case Enums.EmployeeMode.DealStages_CheckMainRoles: {
            return [
                BackButtonHeader('getEmployeeScreenNavigation-4fvevw-web34-ewg', props.navigateEmployeeScreenBack, 'Команда сделки'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigation-4fvevw-web34'}
                    testID='test-id-ViewEmployee-expanded-main_werb-4hw4' >
                    <H2 testID='test-id-ViewEmployee-expanded-main_29_3'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
            ]
        }
        case Enums.EmployeeMode.Deal_MemberList: {
            return [
                BackButtonHeader('getEmployeeScreenNavigation_001', props.navigateEmployeeScreenBack, 'Команда сделки'),
                <CenterPageHeader
                    key={'getEmployeeScreenNavigation_002'}
                    testID='test-id-ViewEmployee-expanded-main_29_2' >
                    <H2 testID='test-id-ViewEmployee-expanded-main_29_3'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
                <RightPageHeader
                    key={'getEmployeeScreenNavigation_003'}
                    testID='test-id-ViewEmployee-expanded-main_29_3' >
                    <NavigationIconButton
                        testID='test-id-ViewEmployee-expanded-main_29_4'
                        type={NavigationIconButtonType.REFRESH}
                        onExecute={props.performFlush} />
                </RightPageHeader>
            ]
        }
        case Enums.EmployeeMode.AgentMemberList: {
            return [
                BackButtonHeader('AML_1', props.navigateEmployeeScreenBack, 'Команда представителя'),
                <CenterPageHeader
                    key={'AML_4'}
                    testID='test-id-ViewEmployee-AgentMemberListexpanded-main_29_2'>
                    <H2 testID='test-id-ViewEmployee-AgentMemberListexpanded-main_29_3'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
                <RightPageHeader
                    key={'AML_5'}
                    testID='test-id-ViewEmployee-expanded-main_29_3' >
                    <NavigationIconButton
                        testID='test-id-ViewEmployee-expanded-main_29_4'
                        type={NavigationIconButtonType.REFRESH}
                        onExecute={props.performFlush} />
                </RightPageHeader>
            ]
        }
        case Enums.EmployeeMode.CustomerManaged_MemberList: {
            return [
                BackButtonHeader('CMML_1', props.navigateEmployeeScreenBack, 'Команда клиента '),
                <CenterPageHeader
                    key={'CMML_4'}
                    testID='test-id-ViewEmployee-AgentMemberListexpanded-main_29_2' >
                    <H2 testID='test-id-ViewEmployee-AgentMemberListexpanded-main_29_3'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
                <RightPageHeader
                    key={'CMML_5'}
                    testID='test-id-ViewEmployee-expanded-main_29_3' >
                    <NavigationIconButton
                        testID='test-id-ViewEmployee-expanded-main_29_4'
                        type={NavigationIconButtonType.REFRESH}
                        onExecute={props.performFlush} />
                </RightPageHeader>
            ]
        }
        case Enums.EmployeeMode.AppProfile: {
            // Вся навигация для моего профиля находится в ViewProfile: ViewProfile
            return null
        }
        case Enums.EmployeeMode.GszChief: {
        	return [
				<LeftPageHeader testID='test-id-ad593db0-7b86-43f1-9770-106c42232b8c'>
					<NavigationBackButton
						testID='test-id-b8d1aa5e-bf96-4d3d-977a-cf0ea13c84dc'
						title={false}
						onClick={props.performPopoverChiefHide}/>
				</LeftPageHeader>,
				<CenterPageHeader testID='test-id-bafa93e5-26af-4ec3-b8f2-511980397436'>
					<H2 testID='test-id-58537d82-b9c2-4b2a-8915-84759d086410'>ГКМ по ГСЗ</H2>
				</CenterPageHeader>,
			]
		}
        case Enums.EmployeeMode.GszCurator: {
            return [
				<LeftPageHeader testID='test-id-5f0a750d-ae26-446e-873d-925713f06dec'>
					<NavigationBackButton
						testID='test-id-2269e2cb-2b22-4630-b6db-a1afe63e8ea6'
						title={false}
						onClick={props.performPopoverCuratorHide}/>
				</LeftPageHeader>,
				<CenterPageHeader testID='test-id-5e4505ab-900b-45ca-8db7-fa9ef4814177'>
					<H2 testID='test-id-e2cc5730-9c0e-41a3-97a0-b69e6a059d69'>Куратор ГСЗ</H2>
				</CenterPageHeader>,
			]
        }
        default: {
            return [
                <LeftPageHeader
                    key={'default_1'}
                    testID='test-id-ViewEmployee-expanded-main_29' >
                    {
                        (props.employeeNavigationHistory.length === 0) ?
                            (
                                <NavigationBackButton
                                    testID='test-id-ViewEmployee-expanded-main_29'
                                    title={false}
                                    onClick={props.navigateEmployeeScreenBack} />
                            ) :
                            null
                    }
                </LeftPageHeader>,
                <CenterPageHeader
                    key={'getEmployeeScreenNavigation_4'}
                    testID='test-id-05b10dee-adca-11e7-abc4-cec278b6b50a' >
                    <H2 testID='test-id-0a4388e6-adca-11e7-abc4-cec278b6b50a'>
                        {'Сотрудник'}
                    </H2>
                </CenterPageHeader>,
                <RightPageHeader
                    key={'default_2'}
                    testID='test-id-ViewEmployee-expanded-main_29_31' >
                </RightPageHeader>
            ]
        }
    }
}

const getCompactContent: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
    <SplitPanel
        testID='test-id-f0f26833-dc43-7a6f-bcff-484b6f1230f3'
        id={Utils.getNavigationContentEmployee(Enums.NavigationContentEmployee.AppCRM_Employee)} >
        <ContentPanel
            testID='test-id-3e8bc472-baea-1390-c4b4-83d7e8b5746c'
            style={ExtraStyles.bgColorWhite} >
            <Page
                testID='test-id-c0bc8f08-257d-8c11-fd04-cb618d839d9d'
                scrollEnabled={true}
                content={getTable(props)} >
                <RightPageHeader testID='test-id-ViewEmployee-getCompactContent-main_29_1'>
                    <NavigationIconButton
                        testID='test-id-ViewEmployee-getCompactContent-main_29_2'
                        type={NavigationIconButtonType.REFRESH}
                        onExecute={props.performFlush} />
                </RightPageHeader>
            </Page>
            <Page
                testID='test-id-4ff82641-6126-b26f-4f9c-aea13d86f349'
                scrollEnabled={true}
                content={<EmployeeClientList {...props}/>} >
                <LeftPageHeader testID='test-id-1e0ab8c2-8b4d-912a-88b1-cb64bb4190cf'>
                    <NavigationBackButton
                        testID='test-id-e1adf80a-83d0-556f-2692-ce403724c5ab'
                        title={false}
                        onClick={props.navigateBack} />
                </LeftPageHeader>
                <CenterPageHeader testID='test-id-c2c6d559-6ed4-aaee-594a-dc14156d3443'>
                    <H2 testID='test-id-2beef6b2-6f27-a8db-c0b6-eae720950291'>
                        {'Клиенты сотрудника'}
                    </H2>
                </CenterPageHeader>
            </Page>
        </ContentPanel>
    </SplitPanel>
)



const getClientListRow = (props: IProps) => {

    switch (props.currentMode) {

        // Убираем строку Список клиентов в моем профиле (А. Голыбин)
        case Enums.EmployeeMode.AppProfile: {
            return null
        }

        default: {
            return (props.customerListFetching) ?
                (<View
                    testID='test-id-ViewEmployee-expanded-main-subord-rowInProcess'
                    style={[Styles.AgentInfoRowTableLoaderWrapper, Styles.PaddingLeft]} >
                    <Text
                        testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                        style={Styles.AgentInfoRowLabelWhenLoader} >
                        {' Загрузка...'}
                    </Text>
                    <Text
                        testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                        style={Styles.RegularTextWhenLoader} >
                        {'Клиенты сотрудника'}
                    </Text>
                </View>)
                : <ClientsOfEmployeeRow
                    testID='test-id-ViewEmployee-expanded-main_20'
                    onClick={props.navigateToCustomerListScreen}
                    customerList={props.customerList}
                    callGetCustomerList={props.callGetCustomerList}
                    customerListError={props.customerListError}
                />
        }

    }
}



const getEmployeeHeadContent = (props: IProps): (React.ReactElement<View> | null) => {
    return (props.currentEmployeeHeadFetching === false) ?
        (<View
            testID='test-id-ViewEmployee-expanded-main-head-row'
            style={[Styles.AgentInfoRowTable, Styles.PaddingLeft, Styles.employeeHeadContent]} >
            <Text
                testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                style={Styles.AgentInfoRowLabel} >
                {'Руководитель'}
            </Text>
            {
                props.currentEmployee.head ?
                    personRows(
                        [props.currentEmployee.head],
                        (employeeId, isExtendedMode, currentMode) => {
                            // Из Моего профиля делаем переход в Адресную книгу
                            if (props.currentMode === Enums.EmployeeMode.AppProfile) {
                                props.performNavigateToAddressBookEmployee(employeeId)
                            } else {
                                props.navigateToEmployeeScreen(employeeId, isExtendedMode, currentMode)
                            }
                        },
                        props,
                        false
                    ) :
                    <View testID='test-id-5d732636-3c42-4a87-b505-9b4f94369bbd'>
                        <Text testID='test-id-b60d1fc6-1c52-4ba3-be90-ff9d8895d3b7'
                              style={Styles.headNoData}
                        >
                            {'Нет данных'}
                        </Text>
                    </View>
            }
        </View>) :
        (<View
            testID='test-id-ViewEmployee-expanded-main-head-rowInProcess'
            style={[Styles.AgentInfoRowTableLoaderWrapper, Styles.PaddingLeft]} >
            <Text
                testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                style={Styles.AgentInfoRowLabelWhenLoader} >
                {'Загрузка...'}
            </Text>
            <Text
                testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                style={Styles.RegularTextWhenLoader} >
                {'Руководитель'}
            </Text>
        </View>)
}



const getExtendedContent = (props: IProps): React.ReactElement<View> => {
    if (props.refreshError || props.currentEmployeeError) {
        return (
            <ErrorModal     testID='test-id-2beef6b2-6f27-a8db-c0b6-eae720950291'
                            isVisible={!!props.refreshError}
                            titleText={(props.refreshError && props.refreshError.message) ||
                            " Техническая ошибка"}
                            messageText={(props.refreshError && props.refreshError.comment) ||
                            "Пожалуйста, обратитесь в службу сопровождения."}

                            cancel={props.performCancelRefreshError}

                            repeat={props.performRefresh}

                            cacheDate={new Date()}/>
        )
    } else if (props.refreshInProgress) {
        return <LoaderWithText testID={'test-id-2beef6b2-6f27-a8db-c0b6-eae720950291'} text={'Загрузка карточки сотрудника'} />
    }

    if (props.currentEmployee.id === '' ) {
        return (
            <View testID='test-id-79892f3e-0842-04e3-9c1e-fc31ngjff758'/>
        )
    }

    const currentEmployeeWorkPhone: string | null = props.currentEmployee.workPhone && Utils.format.phoneNumber(props.currentEmployee.workPhone)
    const currentEmployeeMobilePhone: string | null= props.currentEmployee.mobilePhone && Utils.format.phoneNumber(props.currentEmployee.mobilePhone)

    // Внимание! У корневого View для Page.content нельзя выставлять свойство flex!
    return (
        <View
            testID='test-id-8177320b-6747-ac51-4d74-4204697e639a'
            style={Styles.pageContentFlexDirection} >
            <View
                testID='test-id-ViewEmployee-expanded-main_11'
                style={Styles.HeaderWrapperFullScreen} >
                <AgentCircle
                    testID='test-id-ViewEmployee-expanded-main_12'
                    firstName={props.currentEmployee.firstName}
                    lastName={props.currentEmployee.lastName}
                    isExpandedMode={true} />
                <Center testID='test-id-ViewEmployee-expanded-main_1'>
                    <H2 testID='test-id-ViewEmployee-expanded-main_2'>
                        {
                            Utils.getLongestFullName(
                                props.currentEmployee.lastName,
                                props.currentEmployee.firstName,
                                props.currentEmployee.middleName,
                                props.currentEmployee.fullName,
                            )
                        }
                    </H2>
                </Center>
                <Center testID='test-id-ViewEmployee-expanded-main_3'>
                    <Text
                        testID='test-id-ViewEmployee-expanded-main_4'
                        style={[Styles.GreyLabel, Styles.fullScreenMargin]} >
                        {props.currentEmployee.jobTitle}
                    </Text>
                </Center>
                <View style={Styles.iconGroupContainer}>
                    <View style={Styles.iconContainer}>
                        <View style={Styles.iconCircleWrapperView}>
                            <View style={Styles.iconCircle} />
                        </View>
                        <Button
                            testID='test-id-ViewEmployee-expanded-main_5'
                            onExecute={props.performSchedulerOpen} >
                            <Icon
                                testID='test-id-ViewEmployee-expanded-main_6'
                                disabled
                                type={IconType.MrmCalendar} />
                        </Button>
                        <PopoverTarget
                            testID='test-id-ViewEmployee-expanded-main_13'
                            refName={`schedulerCurrentEmployee`} >
                            <Text
                                testID='test-id-ViewEmployee-expanded-main_7'
                                style={Styles.iconText} >
                                {'Планировщик'}
                            </Text>
                        </PopoverTarget>
                        <Popover
                            testID='test-id-ViewEmployee-expanded-main_7_popover'
                            target={PopoverTarget.getRef(`schedulerCurrentEmployee`)}
                            opened={props.isVisiblePopoverPersonList}
                            onOutsideTap={props.performPopoverPersonListHide}
                            type={PopoverType.WIDE}
                            style={ExtraStyles.popoverWideSize}
                            position={[PopoverPosition.BOTTOM]} >
                            <SplitPanel
                                testID='test-id-829318d6-2db7-3d81-9244-4bbf99d2aae2'
                                id={Utils.getNavigationPopoverContentEmployee(Enums.NavigationPopoverContentEmployee.EmployeePopoverScreen)}>
                                <ContentPanel
                                    testID='test-id-eda9c545-ab88-02a7-05ae-720e12df8000'
                                    style={ExtraStyles.bgColorWhite} >
                                    <Page
                                        testID='test-id-11ed0ee7-da38-79a6-b693-df83a3187f16'
                                        scrollEnabled={true}
                                        content={ <FoundPeopleList {...props} /> } >
                                        <CenterPageHeader testID='test-id-49c65f73-d4cb-2de9-96f1-81fd63369386'>
                                            <H2 testID='test-id-be30cbfa-2942-1936-5a94-fc1b30ece155'>
                                                {'Выберите календарь'}
                                            </H2>
                                        </CenterPageHeader>
                                    </Page>
                                    <Page
                                        testID='test-id-66ca2d0e-4546-b158-bcfb-9eda64cab195'
                                        scrollEnabled={true}
                                        content={<ContainerPerson testID='test-id-66ca2d0e-4546-b158-bcfb-9eda64cab195' />} >
                                        <LeftPageHeader testID='test-id-0922eb99-9b3b-3483-3b7d-2816267f9794' >
                                            <NavigationBackButton
                                                testID='test-id-72fc5680-4f5a-3a2d-b18e-99b9ba28813f'
                                                title={false}
                                                onClick={props.navigatePopoverBack} />
                                        </LeftPageHeader>
                                    </Page>
                                </ContentPanel>
                            </SplitPanel>
                        </Popover>
                    </View>
                    <View style={Styles.iconContainer}>
                        <View style={Styles.iconCircleWrapperView}>
                            <View style={Styles.iconCircle} />
                        </View>
                        <Button
                            testID='test-id-ViewEmployee-expanded-main_8'
                            onExecute={props.navigateToEmailScreen}>
                            <Icon
                                testID='test-id-ViewEmployee-expanded-main_9'
                                disabled
                                type={IconType.MrmMail} />
                        </Button>
                        <Text
                            testID='test-id-ViewEmployee-expanded-main_10'
                            style={Styles.iconText} >
                                {'Эл. Почта'}
                        </Text>
                    </View>
                </View>
            </View>

            <View
                testID='test-id-ViewEmployee-expanded-main_20'
                style={Styles.InfoTabWrapperPadding} >

                <SplittedDataRow
                    testID='test-id-ViewEmployee-expanded-main_20'
                    leftTitle={ 'Рабочий телефон' }
                    leftText={ currentEmployeeWorkPhone}
                    rightTitle={ 'Мобильный телефон' }
                    rightText={ currentEmployeeMobilePhone } />

                <EmailRow
                    testID='test-id-ViewEmployee-expanded-main_26'
                    email={ props.currentEmployee.email }
                    onClick={ props.navigateToEmailScreen } />

                <SplittedDataRow
                    testID='test-id-ViewEmployee-expanded-main_20'
                    leftTitle={ 'Функциональное подразделение' }
                    leftText={ props.currentEmployee.functionalDivisionName }
                    rightTitle={ 'Позиция' }
                    rightText={ props.currentEmployee.positionName } />

                { getClientListRow(props) }

                { getEmployeeHeadContent(props) }

                { props.currentMode !== Enums.EmployeeMode.AppProfile && props.subordinateListFetching &&
                    <View
                        testID='test-id-ViewEmployee-expanded-main-subord-rowInProcess'
                        style={[Styles.AgentInfoRowTableLoaderWrapper, Styles.PaddingLeft]} >
                        <Text
                            testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                            style={Styles.AgentInfoRowLabelWhenLoader} >
                            {' Загрузка...'}
                        </Text>
                        <Text
                            testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                            style={Styles.RegularTextWhenLoader} >
                            {'Подчиненные'}
                        </Text>
                    </View> || null
                }
                { props.currentMode !== Enums.EmployeeMode.AppProfile && !props.subordinateListFetching &&
                <View testID='test-id-c052db52-fe90-535a-e36a-e1db46f59091' style={[Styles.subordinatesWrapper, Styles.PaddingLeft]}>
                    <Text
                        testID='test-id-591942a2-35bf-df1e-8cb5-5223b404672f'
                        style={Styles.AgentInfoRowLabel} >
                        {'Подчиненные'}
                    </Text>
                    {
                        <ErrorModal     testID='test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'
                                        isVisible={!!(props.subordinateListError && props.subordinateListFetching)}
                                        titleText={(props.subordinateListError && props.subordinateListError.message) ||
                                        " Техническая ошибка"}
                                        messageText={(props.subordinateListError && props.subordinateListError.comment) ||
                                        "Пожалуйста, обратитесь в службу сопровождения."}

                                        cancel={props.performCancelSubordinateListError}

                                        repeat={props.callGetSubordinateList}

                                        cacheDate={new Date()}/>
                    }
                    {
                        !props.subordinateListFetching && !props.subordinateListError &&
                        <View testID='test-id-ab299493-f94d-0f31-5ce7-51ecc2985e8c' style={props.subordinateList.data.length && Styles.emptySubordinatesList}>
                            {getEmployeeSubordinatesList(props)}
                        </View>
                    }
                    <Popover
                        testID='test-id-ViewEmployee-expanded-PopoverPhones'
                        target={PopoverTarget.getRef(`popoverSubordinatePhones${props.currentSubordinate.id}`)}
                        opened={props.isVisiblePopoverSubordinate}
                        onOutsideTap={props.performPopoverSubordinateHide}
                        type={PopoverType.NARROW}
                        position={[PopoverPosition.LEFT]} >
                        <Table testID='subordinates-table'>
                            <TableBody testID='subordinates-table-body'>
                                <TableRow testID='subordinates-table-mobileRow'>
                                    <TableCell testID='subordinates-table-mobileCell'>
                                        <Label
                                            testID='subordinates-mobile-label'
                                            header={''}
                                            text={'Мобильный телефон'}
                                            block={false} />
                                        <Text
                                            style={Styles.phoneTextWrapper}
                                            testID='subordinates-mobile-phone'>
                                            {props.currentSubordinate.mobilePhone || 'Нет данных'}
                                        </Text>
                                    </TableCell>
                                </TableRow>
                                <TableRow testID='subordinates-table-workRow'>
                                    <TableCell testID='subordinates-table-workCell'>
                                        <Label
                                            testID='subordinates-work-label'
                                            header={''}
                                            text={'Рабочий телефон'}
                                            block={false} />
                                        <Text
                                            style={Styles.phoneTextWrapper}
                                            testID='subordinates-work-phone'>
                                            {(props.currentSubordinate.workPhone ?
                                                (props.currentSubordinate.workPhone + ( props.currentSubordinate.workPhoneExtension ? `, доб. ${props.currentSubordinate.workPhoneExtension}`: ''))
                                                : 'Нет данных' )}
                                        </Text>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Popover>
                </View>
                }
            </View>
        </View>
    )
}

const FoundPeopleList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Table> => (
    <Table testID='test-id-renderFoundPeopleList-2'>
        <TableBody testID='test-id-renderFoundPeopleList-6'>
            {
                (props.foundPeopleList && props.foundPeopleList.data) &&
                    props.foundPeopleList.data
                        .map((item: ModelsScheduler.Person) => {
                            return (
                                <FoundPeopleRow
                                    item={item}
                                    key={`foundPeopleList_key_${item.id}`}
                                    navigate={ props.navigateToPersonContainerPopover }
                                    performPersonSelect={ props.performPersonSelect } />
                            )
                        }) || null
            }
        </TableBody>
    </Table>
)

const FoundPeopleRow: React.StatelessComponent<IFoundPeopleRow> = (props: IFoundPeopleRow): React.ReactElement<TableRow> => {
    const email: string = props.item.email || ''
    const item:ModelsScheduler.Person = props.item

    return (
        <TableRow
            testID={`test-id-${email}`}
            key={'_renderFoundPeopleRow' + email}
            onClick={() => { props.performPersonSelect(item) }} >
            <TableCell
                testID={`test-id-1-${email}`}
                style={Styles.PersonRowContainer} >
                <View
                    testID={`test-id-5-${email}`}
                    style={Styles.PersonPhoto} >
                    <PersonPhoto
                        testID={`test-id-6-${email}`}
                        email={email}
                        firstName={item.firstName ? item.firstName : item.name + ''}
                        lastName={item.lastName ? item.lastName : item.name + ''}
                        size={PersonPhotoSize.SMALL} />
                </View>
                <View
                    testID={`test-id-7-${email}`}
                    style={Styles.PersonNameContainer} >
                    <Text
                        testID={`test-id-8-${email}`}
                        style={Styles.bold}
                        numberOfLines={2} >
                        {item.name || 'Нет данных'}
                    </Text>
                    <Text
                        testID={`test-id-8-1-${email}`}
                        style={Styles.participantSubtitle}
                        numberOfLines={1} >
                        { email || 'Нет данных' }
                    </Text>
                </View>

                <View
                    testID={`test-id-9-${item.email}`}
                    style={Styles.NavigateToDetailsButton} >
                    <Button
                        testID={`test-id-10-${item.email}`}
                        disabled={item.email == null || item.email === ''}
                        onExecute={() => props.navigate(item) } >
                        <Icon
                            testID={`test-id-11-${item.email}`}
                            disabled type={IconType.MrmInfo} />
                    </Button>
                </View>
            </TableCell>
        </TableRow>
    )
}

const generatePhonesData = (item: ModelsApp.Employee, props: IProps): React.ReactElement<View> => {

        return (
            <View
                style={Styles.phoneButtonWrapper}
                testID='test-id-ViewEmployee-expanded-PopoverPhones-content'>
                <PopoverTarget
                    testID='test-id-ViewEmployee-expanded-PopoverPhones-ref'
                    refName={`popoverSubordinatePhones${item.id}`} >
                    <Button
                        testID='test-id-ViewEmployee-expanded-PopoverPhones-button'
                        onExecute={() => props.performPopoverSubordinateShow(item)} >
                        <Icon
                            testID='test-id-ViewEmployee-expanded-main_6'
                            disabled
                            type={IconType.MrmPhone} />
                    </Button>
                </PopoverTarget>
            </View>
        )
}

const personRows = (memberList: ModelsApp.Employee[], onClick: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_SCREEN, props: IProps, isSubordinates: boolean): React.ReactElement<View> => {
    const memberListLength = memberList.length - 1
    return (
        <View style={Styles.personTableWrapper}>
            <Table
                testID='test-id-ViewEmployee-expanded-main_table'
                underlined={false} >
                <TableBody testID='test-id-ViewEmployee-expanded-main_table_1'>
                    {
                        memberList
                            .map((item: ModelsApp.Employee, i: number) => {
                                const boolToUnderline: boolean = i !== memberListLength
                                const jobOrPositionTitle = isSubordinates ?
                                    `${item.territorialDivisionName} ${item.jobTitle}` :
                                    item.jobTitle

                                return (
                                    <ProfileRow
                                        testID='test-id-332dcac5-dbc2-6e26-cce1-d314f890279d'
                                        personInitials={ Utils.getAgentInitials(item) }
                                        hasCrown={ item.isGeneral }
                                        key={ i.toString() }
                                        onRowPress={() => onClick(item.id, props.isExtendedMode, Enums.EmployeeMode.Employee)}
                                        onInfoPress={() => onClick(item.id, props.isExtendedMode, Enums.EmployeeMode.Employee)}
                                        fullName={ item.fullName }
                                        jobOrPositionTitle={ jobOrPositionTitle }
                                        underlined={ boolToUnderline }
                                        isBlocked={ item.isBlocked }
                                        isAccessDenied={ false }
                                        child={ isSubordinates ? generatePhonesData(item, props) : null }
                                    />
                                )
                        })
                    }
                </TableBody>
            </Table>
        </View>
    )
}

const PanelExtendedPageZeroEmployee: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Page> => (
    // здесь нужно отключить скролл при показе на странице Мой профиль
    // чтобы в модальном окне Моего профиля скролл работал корректно
    <Page
        testID='test-id-ViewEmployee-expanded-main_29'
        scrollEnabled={props.currentMode !== Enums.EmployeeMode.AppProfile}
        content={getExtendedContent(props)} >
        {getEmployeeScreenNavigation(props)}
    </Page>
)

const PanelExtendedPageOneEmployeeClientList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Page> => (
    <Page
        testID='test-id-ViewEmployee-expanded-main_29'
        scrollEnabled={true}
        content={ <EmployeeClientList {...props} /> } >
        <LeftPageHeader
            testID='test-id-ViewEmployee-expanded-main_29' >
            <NavigationBackButton
                testID='test-id-ViewEmployee-expanded-main_29'
                title={false}
                onClick={props.navigateBack} />
        </LeftPageHeader>
        <CenterPageHeader
            testID='test-id-ViewEmployee-expanded-main_29'>
            <H2 testID='test-id-ViewEmployee-expanded-main_29'>
                {'Список клиентов сотрудника'}
            </H2>
        </CenterPageHeader>
    </Page>
)
const PanelExtendedPageZeroContainerEmployee: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Page> => (
    <Page
        testID='test-id-page-related-employee-page-root'
        scrollEnabled={true}
        content={
            <ContainerEmployee testID='test-id-page-related-employee-container' />
        } >
        <LeftPageHeader testID='test-id-page-related-employee-container-left-header'>
            <NavigationBackButton
                testID='test-id-page-related-employee-container-back-button'
                title={false}
                onClick={props.navigateBack} />
        </LeftPageHeader>
    </Page>
)

const PanelExtendedPageContainerCustomer: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<Page> => (
    <Page testID='test-id-ViewEmployee-expanded-main_29'
          scrollEnabled={true}
          content={<ContainerCustomer testID='test-id-27f7b899-972b-0aef-091f-8271c27a0c0d' />}
    >
        <LeftPageHeader testID='test-id-page-related-employee-container-left-header'>
            <NavigationBackButton
                testID='test-id-page-related-employee-container-back-button'
                title={false}
                onClick={props.navigateBack} />
        </LeftPageHeader>
    </Page>
    )

const PanelExtended: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<SplitPanel> => (
    <SplitPanel
        testID='test-id-ViewEmployee-expanded-main_29'
        id={Utils.getNavigationContentEmployee(Enums.NavigationContentEmployee.AppCRM_Employee)} >
        <ContentPanel
            testID='test-id-ViewEmployee-expanded-main_29'
            style={ExtraStyles.bgColorWhite} >
            <PanelExtendedPageZeroEmployee {...props} />
            <PanelExtendedPageOneEmployeeClientList {...props} />
            <PanelExtendedPageZeroContainerEmployee {...props} />
            <PanelExtendedPageContainerCustomer {...props} />
        </ContentPanel>
    </SplitPanel>
)

const RoleOrangeLabel: React.StatelessComponent<IRoleOrangeLabelProps> = (props: IRoleOrangeLabelProps): React.ReactElement<View> => (
    <View
        testID='test-id-332dcac5-dbc2-6e26-cce1-d314f890279d'
        style={Styles.OrangeLabel} >
        <Text
            testID='test-id-e7ae871a-95b5-aaf5-5db3-d3b867a6b623'
            style={Styles.OrangeLabelText} >
            {Utils.getRoleByOrganizationTypeString(
                props.customer.role.value,
                props.customer.organizationType && props.customer.organizationType.code ? props.customer.organizationType.code : null
            )}
        </Text>
    </View>
)

const LockIcon: React.StatelessComponent<{}> = (): React.ReactElement<View> => (
    <View testID='test-id-4891fdbb-c491-b05b-1485-dd70ed87cef6' style={Styles.Lock}>
        <IconView testID='test-id-4891fdbb-c491-b05b-1485-dd70ed87cef6-icon' type={'lock'} disabled={false} />
    </View>
)

const EmployeeClientListRow: React.StatelessComponent<IEmployeeClientListRow> = (props: IEmployeeClientListRow): React.ReactElement<TableRow> => (
    <TableRow
        testID={`_EmployeeClientListRow_3${props.index}`}
        key={props.index}
        onClick={() => { props.performCustomerOpenWithResetPanel(props.customer.id, Enums.CustomerMode.CommonBack) }}
    >
        <TableCell testID={`_EmployeeClientListRow_4${props.index}`}>
            <View testID={`_EmployeeClientListRow_5${props.index}`} style={Styles.EmployeeClientRowWrapper}>
                <View testID={`_EmployeeClientListRow_6${props.index}`} >
                    <View testID={`_EmployeeClientListRow_7${props.index}`} style={Styles.TopRow}>
                        {props.isCurrentEmployeeInCustomerList ? null : <LockIcon />}
                        {props.customer.role.value ? <RoleOrangeLabel customer={props.customer} />: null}
                        <Text testID={`_EmployeeClientListRow_8${props.index}`}
                              style={Styles.EmployeeClientRowOrgType}
                        >
                            {props.customer.organizationType &&props.customer.organizationType.value}
                        </Text>
                    </View>
                    <View testID={`_EmployeeClientListRow_9${props.index}`}>
                        <Text testID={`_EmployeeClientListRow_10${props.index}`} style={Styles.EmployeeClientRowName}>{props.customer.name}</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.ClientListRowButtonContainer}>
                <Button
                    testID={`_EmployeeClientListRow_11${props.index}`}
                    onExecute={() => { props.performCustomerOpenWithResetPanel(props.customer.id, Enums.CustomerMode.CommonBack) }}
                >
                    <Icon testID={`_EmployeeClientListRow_12${props.index}`} type={IconType.MrmInfo} />
                </Button>
            </View>
        </TableCell>
    </TableRow>
)

const EmployeeClientList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {

    return (
        <View
            testID='test-id-0514547d-60b9-40df-7b75-006db23a5b9b'
            style={ExtraStyles.TableWrapper.removeRightPadding}>
            <Table testID='test-id-13521e0c-7275-9c04-4607-940c7fa67c39'>
                <TableBody testID='test-id-4b07b2e9-191b-4126-4a1a-3b5f4896f71c'>
                    {
                        props.customerList.data
                            .map((customer: Models.Customer, i: number): React.ReactElement<TableRow> => (
                                <EmployeeClientListRow
                                    key={ i }
                                    index={ i }
                                    currentEmployee={ props.currentEmployee }
                                    customer={ customer }
                                    isCurrentEmployeeInCustomerList={ Utils.userInMemberTeam(props.currentAuthCustomer, customer) }
                                    performCustomerOpenWithResetPanel={ props.performCustomerOpenWithResetPanel }
                                    performCustomerOpen={ props.navigateToCustomerScreen }
                                    selectedIndex={props.selectedIndex}
                                />
                            ))
                    }
                </TableBody>
            </Table>
        </View>
    )
}

const getClientListRows = (props: IProps) => {
    return props.currentEmployee.customerList
        .map((item: ModelsCrm.Customer, i: number) => {
            return (
                <Text
                    testID='test-id-7a8c5fdd-0994-dd71-53e4-be95685d624e'
                    key={`getClientListRows_${i}`} >
                    {item.name}
                </Text>
            )
        })
}
const getEmployeeCustomerList = (props: IProps): React.ReactElement<View> => {
    if (props.currentEmployee.customerList && props.currentEmployee.customerList.length > 0) {
        return (
            <View
                testID='test-id-46b4f0b5-b78c-8980-e377-991f2ab34655'
                style={Styles.InlineWrapper}>
                <View
                    testID='test-id-70843f12-ee8c-938e-6989-bc0d3a57893f'
                    style={Styles.employeeClients}>
                    {getClientListRows(props)}
                </View>
                <View
                    testID='test-id-0a88543b-3a51-66eb-33c3-db9a6f1f1770'
                    style={Styles.listDownIconContainer} >
                    <Button
                        testID='test-id-7b728da9-6665-abda-ca18-c8642c3f6700'
                        onExecute={() => {
                            props.navigateToCustomerListScreen()
                        }} >
                        <Icon
                            testID='test-id-afd11868-0c1b-43df-9704-e0004f822953'
                            type={IconType.MrmLink} />
                    </Button>
                </View>
            </View>
        )
    } else {
        return (
            <View testID='test-id-091236bc-c0cc-2418-c1b9-eeaee6e8fece'>
                <Text testID='test-id-091236bc-c0cc-2418-c1b9-eeaee6e8fece'>
                    {'Нет данных'}
                </Text>
            </View>
        )
    }
}

const getEmployeeClientListContent = (props: IProps): React.ReactElement<View> => (
    <View testID='test-id-0809ebef-2f67-a2bf-e792-609781c4b13e'>
        <Label
            testID='test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'
            header={''}
            text={'Клиенты сотрудника'}
            block={true} />
            {
                props.customerListFetching ?
                    <LoaderWithText testID={'test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'}
                                    text={'Загрузка клиентов сотрудника'}
                    /> :
                    props.customerListError ?
                        (
                            <ErrorModal     testID='test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'
                                            isVisible={!!props.customerListError}
                                            titleText={(props.customerListError && props.customerListError.message) ||
                                            " Техническая ошибка"}
                                            messageText={(props.customerListError && props.customerListError.comment) ||
                                            "Пожалуйста, обратитесь в службу сопровождения."}

                                            cancel={props.performCancelCustomerListError}

                                            repeat={props.callGetCustomerList}

                                            cacheDate={new Date()}/>
                        ) :
                        getEmployeeCustomerList(props)
            }
    </View>
)

const getEmployeeSubordinatesList = (props: IProps): React.ReactElement<View|Table> => {
    return props.subordinateList.data.length > 0 ?
        (
            <Table testID='test-id-8688986e-6b6a-cac2-a45e-9424d449e6ff'>
                <TableBody testID='test-id-47ec5676-4498-ba6a-6a99-5c79d9973500'>
                    {
                        props.subordinateList.data
                            .map((subordinate: ModelsApp.Employee, index: number) =>
                                <ProfileRow
                                    key={index}
                                    testID='test-id-6d4143ab-860a-3422-dfe4-b2b6134a5347'
                                    onRowPress={() => props.navigateToEmployeeScreen(subordinate.id, props.isExtendedMode, Enums.EmployeeMode.Employee)}
                                    personInitials={ Utils.getAgentInitials(subordinate) }
                                    hasCrown={ subordinate.isGeneral }
                                    onInfoPress={() => props.navigateToEmployeeScreen(subordinate.id, props.isExtendedMode, Enums.EmployeeMode.Employee)}
                                    fullName={ subordinate.fullName }
                                    jobOrPositionTitle={ subordinate.territorialDivisionName + ' ' + subordinate.positionName }
                                    underlined={ false }
                                    isBlocked={ subordinate.isBlocked }
                                    isAccessDenied={ false }
                                    child={generatePhonesData(subordinate, props)}
                                />
                            )
                    }
                </TableBody>
            </Table>
        ) :
        (
            <View testID='test-id-679b297e-b393-b3e8-9e08-abd4471d3490'>
                <Text testID='test-id-679b297e-b393-b3e8-9e08-abd4471d3490'>
                    {'Нет данных'}
                </Text>
            </View>
        )
}
const getTable = (props: IProps): React.ReactElement<View|Table> => {
    if (props.refreshError || props.currentEmployeeError) {
        return (
            <ErrorModal     testID='test-id-2beef6b2-6f27-a8db-c0b6-eae720950291'
                            isVisible={!!props.refreshError}
                            titleText={(props.refreshError && props.refreshError.message) ||
                            " Техническая ошибка"}
                            messageText={(props.refreshError && props.refreshError.comment) ||
                            "Пожалуйста, обратитесь в службу сопровождения."}

                            cancel={props.performCancelRefreshError}

                            repeat={props.performRefresh}

                            cacheDate={new Date()}/>
        )
    } else if (props.refreshInProgress) {
        return <LoaderWithText testID={'test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'}
                               text={'Загрузка карточки сотрудника'}
        />
    }

    const memberPhone: string = [
        props.currentEmployee.workPhone,
        props.currentEmployee.workPhoneExtension
    ]
    .filter((phone) => phone && phone !== '')
    .join(', доб. ')

    // Внимание! У корневого View для Page.content нельзя выставлять свойство flex!
    return (
        <View
            testID='test-id-8177320b-6747-ac51-4d74-4204697e639c'
            style={Styles.pageContentFlexDirection} >
            <View
                testID='test-id-5072ad70-522f-ab6d-9d3b-f8104f445377'
                style={Styles.avatarComponent} >
                <View
                    testID='test-id-8a0ee2a9-6e1b-16f2-906b-55fd733e2559'
                    style={Styles.avatar} >
                    <Text
                        testID='test-id-7013353e-75e2-d1f4-06ce-19adcbf3918b'
                        style={Styles.avatarLabel} >
                        { Utils.getAgentInitials(props.currentEmployee) }
                    </Text>
                </View>
                <View
                    testID='test-id-0a334541-a827-effe-5446-e45119ec25ee'
                    style={Styles.avatarSubtitle} >
                    <H1 testID='test-id-ff28f99c-c852-7184-e476-86c41228cc57'>
                        {props.currentEmployee.fullName}
                    </H1>
                    <Text
                        testID='test-id-11d58f0e-4c66-68a1-6d51-9d49b0367ba1'
                        style={Styles.avatarSubtitleLabel}>
                        {props.currentEmployee.jobTitle}
                    </Text>
                </View>
                {
                    props.isExtendedMode &&
                    (
                        <View
                            testID='test-id-9eb88ccd-1e14-2ef9-a097-dc79116c2949'
                            style={Styles.HeaderWrapper} >
                            <View
                                testID='test-id-5ee9b380-7e7d-0844-80be-dc25e221dc12'
                                style={Styles.HeaderWrapperNaviagation} >
                                <NavigationIconButton
                                    testID='test-id-61559aa0-d2af-0ebd-9831-3d32c5fbca96'
                                    type={NavigationIconButtonType.ADD}
                                    onExecute={() => {/*  */}} />
                                <Text testID='test-id-b0e25dbc-6101-37fa-02c3-87f621399b84'>
                                    {'Эл. почта'}
                                </Text>
                            </View>
                            <View
                                testID='test-id-438c92bf-ced1-2311-481a-77927008d11d'
                                style={Styles.HeaderWrapperNaviagation} >
                                <NavigationIconButton
                                    testID='test-id-6080405b-ca1e-811c-5664-88b2becd267e'
                                    type={NavigationIconButtonType.ADD}
                                    onExecute={() => {/*  */}} />
                                <Text testID='test-id-d8752831-21f3-0602-9418-3b31d67eb3af'>
                                    {'Планировщик'}
                                </Text>
                            </View>
                        </View>
                    ) || null
                }
            </View>
            <HorizontalRule testID='test-id-e40f3741-d181-086a-e1ca-2ecef92b76bf' />
            <View
                testID='test-id-54891326-db05-b02f-ba11-013e4c9dedad'
                style={Styles.employeeInformation} >
                <Label
                    testID='test-id-65d4e7e3-b94a-ed09-e01d-3b5038f85635'
                    header={''}
                    text={'Мобильный телефон'}
                    block={true} >
                    <Text testID='test-id-ac9fb495-656f-77a7-412e-666c81c6bdeb'>
                        {props.currentEmployee.mobilePhone}
                    </Text>
                </Label>
                <HorizontalRule testID='test-id-c3fc23e2-58c5-7a24-f579-34f01d0edf1e' />
                <Label
                    testID='test-id-77f909af-4dd2-b442-75bf-17c35604fe7c'
                    header={''}
                    text={'Рабочий телефон'}
                    block={true} >
                    <Text
                        testID='test-id-194d0812-b800-0f52-d9ab-f2793007ac92'>
                        {memberPhone}
                    </Text>
                </Label>
                <HorizontalRule testID='test-id-7af5aad4-7e54-e6df-69f3-ce0fff07b7ae' />
                <EmailRow
                    testID='test-id-2bb4a427-79b8-5c10-4f7f-e9ac3e601369'
                    email={props.currentEmployee.email}
                    onClick={props.performSendEmail} />
                <HorizontalRule testID='test-id-8047a11c-6417-70ca-dc1c-0f179a2596e6' />
                <Label
                    testID='test-id-442f5c5d-2f31-5dbd-c82b-e4b9ee8bad49'
                    header={''}
                    text={'Функциональное подразделение'}
                    block={true} >
                    <Text testID='test-id-ee00a881-320b-1205-df1c-3694fab5ee7e'>
                        {props.currentEmployee.functionalDivisionName}
                    </Text>
                </Label>
                <HorizontalRule testID='test-id-9396c0b1-6cf7-eb5f-b4b2-66684e296f5f' />
                <Label
                    testID='test-id-f0fae4a2-bdca-0176-e4d2-c08901aa4461'
                    header={''}
                    text={'Позиция'}
                    block={true} >
                    <Text testID='test-id-0e9e73d8-d954-82e1-6834-ca284e78882b'>
                        {props.currentEmployee.positionName}
                    </Text>
                </Label>

                {
                    (props.currentEmployee.customerList.length > 0 && props.isExtendedMode) ?
                        (
                            <View testID='test-id-8f783201-0e3c-a151-804b-1855c18405f2'>
                                <HorizontalRule testID='test-id-8f783201-0e3c-a151-804b-1855c18405f2' />
                                <Page
                                    testID='test-id-8f783201-0e3c-a151-804b-1855c18405f2'
                                    scrollEnabled={true}
                                    content={getEmployeeClientListContent(props)}>
                                </Page>
                            </View>
                        ) :
                        null
                }

                {
                    props.currentEmployeeHeadFetching === false && props.currentEmployee.head ?
                        <View testID='test-id-f3fba5eb-d696-0ccc-ebef-991c96ebebf8'>
                            <HorizontalRule testID='test-id-aeff9ba1-75e5-3cd8-0a41-3dc1cb7bed5a' />
                            <Label
                                testID='test-id-b1a9276f-58bb-63f3-c8cd-96c062af327c'
                                header={''}
                                text={'Руководитель'}
                                block={true} />
                            <Table
                                testID='test-id-34d09366-49b0-85f0-0cd6-5e18e53bb85f'
                                style={Styles.employeeHead} >
                                <TableBody testID='test-id-00a821f9-e86d-e2ae-2022-f46d28bbcef9'>
                                    <TableRow
                                        testID='test-id-34ed7b62-18ad-c4d3-90c1-27c5e59502b8'
                                        onClick={() => {
                                            const headId = props.currentEmployee && props.currentEmployee.head ? props.currentEmployee.head.id : ''
                                            props.navigateToEmployeeScreen(headId, props.isExtendedMode, props.currentMode)
                                        }} >
                                        <ProfileCell
                                            testID='test-id-d384f0bc-f0c2-81cf-735b-21121a3a3226'
                                            title={props.currentEmployee.head.fullName}
                                            subtitle={props.currentEmployee.head.jobTitle}
                                            hasArrow={true} />
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </View> :
                        null
                }

                {
                    props.isExtendedMode &&
                        (
                            <View testID='test-id-c052db52-fe90-535a-e36a-e1db46f59091'>
                                <HorizontalRule testID='test-id-43cb9b2a-9316-6d42-fc0c-3d19f6c2f5ad'/>
                                <Label
                                    testID='test-id-ab299493-f94d-0f31-5ce7-51ecc2985e8b'
                                    header={''}
                                    text={'Подчиненные'}
                                    block={false} />
                                { props.subordinateListFetching && <LoaderWithText testID={'test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'}
                                                                                   text={'Загрузка подчиненных'}
                                /> || null }
                                {
                                    !props.subordinateListFetching && props.subordinateListError &&
                                        (
                                            <ErrorModal     testID='test-id-b6b9242c-cccd-435d-9c67-d2f9015ade02'
                                                            isVisible={!!props.subordinateListError}
                                                            titleText={(props.subordinateListError && props.subordinateListError.message) ||
                                                            " Техническая ошибка"}
                                                            messageText={(props.subordinateListError && props.subordinateListError.comment) ||
                                                            "Пожалуйста, обратитесь в службу сопровождения."}

                                                            cancel={props.performCancelSubordinateListError}

                                                            repeat={props.callGetSubordinateList}

                                                            cacheDate={new Date()}/>
                                        )
                                }
                                {
                                    !props.subordinateListFetching && !props.subordinateListError &&
                                        getEmployeeSubordinatesList(props)
                                }
                            </View>
                        ) || null
                }
            </View>
        </View>
    )
}


/*
 * UI stateless functional component presenter for 'Employee' container.
 */

interface IEmailRow {
    email: string | null | undefined;
    testID: string;
    onClick(): void;
}

interface ISplittedDataRow {
    leftText: string;
    leftTitle: string;
    rightText: string;
    rightTitle: string;
    testID: string;
}

interface IErrorPanel {
    error: Error | null;
    errorMessage: string;
    testID: string;
    performRefresh(): void;
}

interface IClientsOfEmployeeRow {
    customerList: ModelsCrm.CustomerList;
    customerListError: Error | null;
    testID: string;
    onClick(): void;
    callGetCustomerList: ModelsEmployee.CALL_GET_CUSTOMER_LIST;
}

interface IFoundPeopleRow {
    item: ModelsScheduler.Person;
    navigate: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER;
    performPersonSelect:  ModelsEmployee.PERFORM_PERSON_SELECT;
}

interface IEmployeeClientListRow {
    currentEmployee: ModelsApp.Employee;
    customer: Models.Customer;
    isCurrentEmployeeInCustomerList: boolean;
    performCustomerOpenWithResetPanel(id: string, customerMode?: Enums.CustomerMode): void;
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    index: number;
    selectedIndex: number | null;
}

interface IRoleOrangeLabelProps {
    customer: Models.Customer
}

export interface IProps {
    callGetCustomerList: ModelsEmployee.CALL_GET_CUSTOMER_LIST;
    callGetSubordinateList: ModelsEmployee.CALL_GET_SUBORDINATE_LIST;
    currentEmployee: ModelsApp.Employee;
    currentEmployeeCachedDate: Date | null;
    currentEmployeeError: Error | null;
    currentEmployeeFetching: boolean;
    currentEmployeeId: string;
    currentAuthCustomer: ModelsApp.Employee;
    currentMode: Enums.EmployeeMode;
    currentSubordinate: ModelsApp.Employee;
    customerList: Models.CustomerList;
    customerListCachedDate: Date | null;
    customerListError: Error | null;
    customerListFetching: boolean;
    employeeNavigationHistory: ModelsApp.Employee[];
    foundPeopleList: ModelsScheduler.PersonList;
    foundPeopleListError: Error | null;
    foundPeopleListInProgress: boolean;
    isExtendedMode: boolean;
    isVisiblePopoverPersonList: boolean;
    navigateBack: ModelsEmployee.NAVIGATE_BACK;
    navigateEmployeeScreenBackToDeal: ModelsEmployee.NAVIGATE_BACK;
    navigateEmployeeScreenBackToDealAgreement: ModelsEmployee.NAVIGATE_BACK;
    navigateBackEmployee: ModelsEmployee.NAVIGATE_BACK_EMPLOYEE;
    navigateEmployeeScreenBack: ModelsEmployee.NAVIGATE_EMPLOYEE_SCREEN_BACK;
    navigatePopoverBack: ModelsEmployee.NAVIGATE_POPOVER_BACK;
    navigateToCustomerListScreen: ModelsEmployee.NAVIGATE_TO_CUSTOMER_LIST_SCREEN;
    navigateToEmailScreen: ModelsEmployee.NAVIGATE_TO_EMAIL_SCREEN;
    navigateToEmployeeScreen: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_SCREEN;
    navigateToPersonContainerPopover: ModelsEmployee.NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER;
    performContainerReset: ModelsEmployee.PERFORM_CONTAINER_RESET;
    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    performCustomerOpenWithResetPanel: ModelsAppCRM.PERFORM_CUSTOMER_OPEN;
    navigateToCustomerScreen: ModelsEmployee.NAVIGATE_TO_CUSTOMER_SCREEN,
    performFindPeople: ModelsEmployee.PERFORM_FIND_PEOPLE;
    performFlush: ModelsEmployee.PERFORM_FLUSH;
    performPersonSelect: ModelsEmployee.PERFORM_PERSON_SELECT;
    performPopoverPersonListHide: ModelsEmployee.PERFORM_POPOVER_PERSON_LIST_HIDE;
    performPopoverPersonListShow: ModelsEmployee.PERFORM_POPOVER_PERSON_LIST_SHOW;
    performPopoverSubordinateHide: ModelsEmployee.PERFORM_POPOVER_SUBORDINATE_HIDE;
    performPopoverSubordinateShow: ModelsEmployee.PERFORM_POPOVER_SUBORDINATE_SHOW;
    performNavigateToAddressBookEmployee: ModelsEmployee.NAVIGATE_TO_ADDRESS_BOOK_EMPLOYEE;
    performRefresh: ModelsEmployee.PERFORM_REFRESH;
    performSchedulerOpen: ModelsEmployee.PERFORM_SCHEDULER_OPEN;
    performSendEmail: ModelsEmployee.PERFORM_SEND_EMAIL;
    refresh_callGetEmployee: ModelsEmployee.REFRESH_CALL_GET_EMPLOYEE;
    performCancelRefreshError: ModelsEmployee.PERFORM_CANCEL_REFRESH_ERROR;
    performCancelSubordinateListError: ModelsEmployee.PERFORM_CANCEL_SUBORDINATE_LIST_ERROR;
    performCancelCustomerListError: ModelsEmployee.PERFORM_CANCEL_CUSTOMER_LIST_ERROR;
    performCertificateAlertPopoverHide: ModelsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE;
    refresh: boolean;
    refreshError: Error | null;
    refreshInProgress: boolean;
    subordinateList: Models.MemberList;
    subordinateListCachedDate: Date | null;
    subordinateListError: Error | null;
    subordinateListFetching: boolean;
    isVisiblePopoverSubordinate: boolean;
    isVisibleErrorModal: boolean;
    performErrorModalShow: ModelsEmployee.PERFORM_ERROR_MODAL_SHOW;
    performErrorModalHide: ModelsEmployee.PERFORM_ERROR_MODAL_HIDE;
    testID: string;
    isEmployeeShedulerAvailable: boolean;
    selectedIndex: number | null;
    isVisibleCertificateAlertPopover: boolean;
    currentEmployeeHead: ModelsApp.Employee,
    currentEmployeeHeadFetching: boolean,
    currentEmployeeHeadError: Error | null,
    currentEmployeeHeadCachedDate: Date | null,
	performPopoverChiefHide: ModelsGsz.PERFORM_POPOVER_CHIEF_HIDE,
	performPopoverCuratorHide: ModelsGsz.PERFORM_POPOVER_CURATOR_HIDE,
}

const ViewEmployee: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View
            testID='test-id-4c14add4-7280-da78-658c-2af9b40dd9c8'
            style={
                props.isExtendedMode
                    && props.currentMode !== Enums.EmployeeMode.AppProfile
                    && props.currentMode !== Enums.EmployeeMode.GszCurator ?
                        Styles.fixedHeightExpanded
                        :
                            props.isExtendedMode && props.currentMode === Enums.EmployeeMode.GszCurator ?
                                Styles.flex
                                :
                                    Styles.fixedHeight
            }
            >
            {
                props.isExtendedMode ?
                    <PanelExtended {...props} /> :
                    getCompactContent(props)
            }
            { getErrorPanel (props) }
            <AlertView  testID={'test-id-alert-view-certificate-not-imported'}
                        ok={props.performCertificateAlertPopoverHide}
                        cancel={null}
                        title={'Ошибка: почтовый сертификат не импортирован.'}
                        message={'Обратитесь в службу поддержки.'}
                        isVisible={props.isVisibleCertificateAlertPopover}
            />
        </View>
    )

}

export default ViewEmployee
