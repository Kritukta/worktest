/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import Styles from './styles/ViewGszActivityExcludeStyles'

import {
    AccessoryPanel,
    ContentPanel,
    Button,
    Center,
    CenterPageHeader,
    ComboBox,
    H2,
    Icon,
    IconType,
    Label,
    LeftPageHeader,
    Loader,
    NavigationBackButton,
    NavigationTextButton,
    Page,
    Panel,
    PanelType,
    RightPageHeader,
    SplitPanel,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Text,
    TextInput,
    Textarea,
    View,
} from 'ufs-mobile-platform'
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import Error from "../models/Error"
import ContainerMemberList from '../containers/ContainerMemberList';

import { SearchInput } from 'mrmkmcib-ui'

import { LoaderWithText, FullScreenError, Models as ModelsApp } from 'mrmkmcib-app'
import {IFullScreenErrorProps} from "mrmkmcib-app"
import {getFullScreenError} from './shared/ViewFullScreenError'

import * as Utils from "../common/Util"
import {_getLock} from './ViewAppCRM'

const getMainPage: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View | LoaderWithText | FullScreenError> => {
    if (props.activitySaveInProgress) {
        return <LoaderWithText
            testID = {"test-id-0dd22916-d4ff-11e7-9296-cec278b6b50a"}
            text = {"Создание задачи"} />
    }
    if (props.activitySaveError && props.activitySaveError.code){
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityExclude',
            title: props.activitySaveError.comment,
            description: props.activitySaveError.message,
            onRefresh: props.callPostGszActivityExcludeCreate
        })
    }
    return (
        <View testID='test-id-9e0f7946-f2d6-4b09-a750-622585ff8649' style={Styles.content}>
            <View testID='test-id-d1e2ea12-ce3b-4e6c-bc6a-1de60b6fa6d3' style={Styles.contentSection}>
                <View testID='test-id-dec19f1b-94c8-455e-a5f6-ee50c3c2cdca' style={Styles.selectCustomer}>
                    <Label testID='test-id-244e4e77-5286-4295-912d-a472d0339c95' header={''} text={'Компания'}
                           block={true}>
                        <Text
                            testID='test-id-891fc56c-783a-490f-8413-d5f11ddec52d'>{props.inputCustomer && (props.inputCustomer.id != null && props.inputCustomer.id != '') ?
                            props.inputCustomer.name || props.inputCustomer.shortName
                            : 'Выбрать'}
                        </Text>
                    </Label>
                    <Button testID='test-id-b2db8618-f6c2-4f5f-9499-4419b966aea4' onExecute={() => {
                        props.navigateToCustomerPickerScreen()
                    }}>
                        <Icon testID='test-id-9602903d-ae50-485e-a1a3-35523453ebfe' type={IconType.MrmLink}/>
                    </Button>
                </View>
            </View>


            {props.gszActivityExcludeValidationCustomer ? <Text testID='test-id-ebdb44cb-e1a6-415c-a4a4-bbe57675c703'
                                                                style={Styles.validationError}>{props.gszActivityExcludeValidationCustomer}</Text> : null}


            <View testID='test-id-a29602ed-0028-45c1-95d2-d30143faf99e' style={Styles.contentSection}>
                <Label testID='test-id-91376d1c-4ecd-462b-8f2f-a934ada20385' header={''} text={'ГСЗ'} block={true}>
                    <Text
                        testID='test-id-5831b51f-e988-4326-bdf2-977fb4eac771'>{props.currentGsz.name || 'Нет данных'}</Text>
                </Label>
            </View>

            <View testID='test-id-72d3b9f5-840b-4293-96c4-19314f50dca0' style={Styles.contentSection}>
                <Label testID='test-id-2b83ff6a-c8fb-477b-8458-45a8d119be4a' header={''} text={'Тип задачи'}
                       block={true}>
                    <Text
                        testID='test-id-f6553f4e-24ab-4f30-9cbd-f13e76ed444f'>{'Задача на исключение компании из состава ГСЗ'}</Text>
                </Label>
            </View>
            <View testID='test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1' style={Styles.contentSectionMeaning}>
                <TextInput testID='test-id-fb09dbda-80b7-11e7-bb31-be2e44b06b34'
                            value={props.inputComment || ""}
                            label="Cуть"
                            onChange={props.performInputComment}
                            placeholder="Введите суть"
                            maxLength = {1000}
                >
                </TextInput>
            </View>

            {props.gszActivityExcludeValidationComment ? <Text testID='test-id-669bcf04-c0f0-4d10-89cc-826d6a152eb0'
                                                               style={Styles.validationError}> {props.gszActivityExcludeValidationComment} </Text> : null}
            <View testID='test-id-1b9b5d39-409d-2181-5d4e-0d09f676e7e1' style={Styles.contentSectionTeam}>
            {
                renderActivityExecutor(props)
            }
            </View>
        </View>
    )
}

const renderCustomerSearchResults: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View | LoaderWithText | FullScreenError > => {
    if (props.searchError){
        return getFullScreenError({
            testID: 'Test-ID-ViewGszActivityWzcludeSearch',
            title: props.searchError.comment,
            description: props.searchError.message,
            onRefresh: props.performSearch
        })
    }
    if (props.searchInProgress) {
        return (
            <View testID='test-id-52763627-944d-d9d8-2995-05e655eae7d6' style={Styles.searchNotFoundTextWrapper}>
                <LoaderWithText  text = 'Поиск клиентов'
                                 testID='test-id-4b9e58ad-53f7-c97d-01e8-45b491b49bbc'/>
            </View>
        )
    }

    if (props.inputSearch == null || props.inputSearch === '') {
        return (
            <View
                testID='test-id-89b59ccd-6d17-40d9-8ec4-fbdd8a7b9434'
                style={Styles.searchNotFoundTextWrapper}
            >
                <Text
                    testID='test-id-e40eba01-dffe-441c-b4f4-5af614ac286a'
                    style={Styles.searchNotFoundText}
                >
                    {'Поиск компании'}
                </Text>
            </View>
        )
    }



    if (props.inputSearch != null &&
        props.inputSearch !== '' &&
        (props.customerSearchList == null ||
         props.customerSearchList.data == null ||
         props.inputSearch.length < 3 ||
         props.customerSearchList.data.length == 0)
        ) {
        return (
            <View
                testID='test-id-36485f3e-bbb7-4c4b-ab2b-f1b44faa91df'
                style={Styles.searchNotFoundTextWrapper}
            >
                <Text
                    testID='test-id-417c7cde-c151-4bda-8384-4519491e5d79'
                    style={Styles.searchNotFoundText}
                >
                    {'Результатов не найдено'}
                </Text>
            </View>
        )
    }

    return (
        <Table testID='test-id-ab909962-e051-4c2e-8205-ec8f2c2bec88'>
            <TableBody testID='test-id-664b0bda-5c06-47b3-a282-ed420428b777'>
                {props.customerSearchList.data.map((item: Models.Customer, index: number) => (
                    <TableRow
                        testID='test-id-df10b296-5267-4d33-8e1f-c41876205225'
                        key={`${index}-${item.id}`}
                        onClick={() => props.performInputCustomer(item)}
                    >
                        <TableCell testID='test-id-40652a9a-15b8-4d1a-9992-96f24e949653'>
                            <View
                                testID='test-id-f8f15624-a702-4346-871b-b26619150167'
                                style={Styles.UnderCellWrapper}
                            >
                                <View
                                    testID='test-id-9bc47e5b-8eb8-42b0-bdc6-569731ac8932'
                                    style={Styles.TopRow}
                                >
                                    {Utils.userInMemberTeam(props.currentUser, item) ? null : _getLock()}
                                    {item.role && item.role.value ?
                                        <View
                                            testID='test-id-a8c13dcc-d319-4e38-8c28-12d9a8d7f96e'
                                            style={Styles.OrangeLabel}
                                        >
                                            <Text
                                                testID='test-id-82e7a8ba-1434-4079-a4e6-ad90f8768b6e'
                                                style={Styles.OrangeLabelText}
                                            >
                                                {Utils.getRoleString(item.role.value)}
                                            </Text>
                                        </View> :
                                        null
                                    }
                                    <Text
                                        testID='test-id-9a8d0bbc-0e4d-45c3-a5b4-681f970bb717'
                                        style={Styles.OrgType}
                                    >
                                            {item.organizationType.value}
                                    </Text>
                                </View>
                                <Text
                                    testID='test-id-ddb25328-c0a6-4d1c-bf21-a8cdbb2a8acb'
                                    style={Styles.Name}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        </TableCell>
                    </TableRow>
                )
            )}
            </TableBody>
        </Table>
    )
}

const getActivityMemberList = (props:IProps):React.ReactElement<View> => (
    <View style={Styles.memberListContent}>
        <View testID={`test-id-d331abfa-a8f9-11e7-abc4-cec278b6b50a`}
    style={Styles.memberListViewTitle}>
            <Text testID={`test-id-c7e1e9e0-a8f9-11e7-abc4-cec278b6b50a`}
    style={Styles.memberListTextTitle}>
                Команда задачи
            </Text>
        </View>
        <View style = {Styles.memberListViewPerson}>
            <Text testID={`test-id-activity-deatails-people-row-Agent`}
    style={Styles.memberListTextPerson}>

    {Array.isArray(props.memberList.data) && props.memberList.data.length > 0 ?
        Utils.getActivityMemberListOutput(props.memberList) :
        Utils.getCustomerActivityExcludeExecutorName(props.currentCustomerManaged && props.currentCustomerManaged.id != '' ?
                                props.currentCustomerManaged : props.currentCustomerManaged, 'Нет')}

            </Text>
        </View>
        {props.currentGsz &&
                       props.currentGsz.curator &&
                       props.currentGsz.curator.id ?
        <View testID={`test-id-activity-deatails-people-row_6-Team`} style={Styles.memberListViewSpace}>
        </View>
                       :
        <View testID={`test-id-activity-deatails-people-row_6-Team`} style={Styles.memberListViewButton}>
        <Button testID={`test-id-activity-deatails-people-row_7-Team`}
        onExecute={()=>props.navigateToMemberListScreen()}
    >
        <Icon testID={`test-id-activity-deatails-people-row_8-Team`} type={IconType.MrmLink}/>
        </Button>
        </View>
        }
    </View>
    )


const renderActivityExecutor: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    let executorName = props.currentGsz &&
                       props.currentGsz.curator &&
                       props.currentGsz.curator.id ?
                        Utils.getFullNameRepresentation(props.currentGsz.curator) : null
    if(executorName == null && (props.memberList != null && props.memberList.data != null && props.memberList.data.length > 0)){

            return getActivityMemberList(props)

    }
    else
    {
    return (



                    <View style={Styles.memberListContent}>
        <View testID={`test-id-d331abfa-a8f9-11e7-abc4-cec278b6b50a`}
    style={Styles.memberListViewTitle}>
            <Text testID={`test-id-c7e1e9e0-a8f9-11e7-abc4-cec278b6b50a`}
    style={Styles.memberListTextTitle}>
                Команда задачи
            </Text>
        </View>
        <View style = {Styles.memberListViewPerson}>
            <Text testID={`test-id-activity-deatails-people-row-Agent`}
    style={Styles.memberListTextPerson}>
 {props.currentGsz &&
                       props.currentGsz.curator &&
                       props.currentGsz.curator.id ? `${executorName} - главный исполнитель` : 'Нет данных'


                    }

            </Text>
        </View>
        {props.currentGsz &&
                       props.currentGsz.curator &&
                       props.currentGsz.curator.id ?
         <View testID={`test-id-activity-deatails-people-row_6-Team`} style={Styles.memberListViewSpace}>
         </View>
                       :
        <View testID={`test-id-activity-deatails-people-row_6-Team`} style={Styles.memberListViewButton}>
        <Button testID={`test-id-activity-deatails-people-row_7-Team`}
        onExecute={()=>props.navigateToMemberListScreen()}
    >
        <Icon testID={`test-id-activity-deatails-people-row_8-Team`} type={IconType.MrmLink}/>
        </Button>
        </View>
        }
                    </View>
    )
}
}

const renderCustomerSearch: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => {
    return (
        <View testID='test-id-d33cd78c-848d-43ff-964b-b0053d03e736' style={Styles.content}>
            <View testID='test-id-e3b87cdf-5a29-47ef-bced-8b1364647934'
                  style = {props.inputSearch.length > 0 && props.inputSearch.length < 3
                      ? Styles.searchInputFilterFieldViewError
                      : Styles.searchInputFilterFieldView}>
                <SearchInput
                    value={props.inputSearch}
                    placeholder={'Введите название'}
                    autoFocus={ true}
                    onCancel={ props.performCancelSearchCustomer}
                    error = { props.inputSearch.length && props.inputSearch.length < 3 ? "Введите не менее 3-х символов" : ''}
                    onChange={props.performInputSearch}
                />
            </View>
            <View testID='test-id-4b9ed1c8-adc1-498d-a17d-4f0628df843c'>
                <Switch testID='test-id-cd576762-fc64-43cf-b108-15d50c399c15'
                        checked={props.inputSearchManagedOnly}
                        label='Только мои клиенты'
                        onChange={() => props.performInputSearchManagedOnly(!props.inputSearchManagedOnly)}
                />
            </View>
            <View style={Styles.SearchResultHeight}>
                {renderCustomerSearchResults(props)}
            </View>
        </View>
    )
}


/*
 * UI stateless functional component presenter for "GszActivityExclude" container.
 */

export interface IProps {
    searchInProgress: boolean,
    navigateToCustomerPickerScreen: ModelsGszActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN,
    performInputSearchManagedOnly: ModelsGszActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY,
    performInputSearch: ModelsGszActivityExclude.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsGszActivityExclude.PERFORM_SEARCH_RESET,
    performSearch: ModelsGszActivityExclude.PERFORM_SEARCH,
    performInputCustomer: ModelsGszActivityExclude.PERFORM_INPUT_CUSTOMER,
    performInputComment: ModelsGszActivityExclude.PERFORM_INPUT_COMMENT,
    performCancel: ModelsGszActivityExclude.PERFORM_CANCEL,
    performSave: ModelsGszActivityExclude.PERFORM_SAVE,
    callPostGszActivityExcludeCreate: ModelsGszActivityExclude.CALL_POST_GSZ_ACTIVITY_EXCLUDE_CREATE,
    navigateBack: ModelsGszActivityExclude.NAVIGATE_BACK,
    performContainerReset: ModelsGszActivityExclude.PERFORM_CONTAINER_RESET,
    inputSearch: string,
    customerSearchList: Models.CustomerList,
    inputSearchManagedOnly: boolean,
    inputCustomer: Models.Customer,
    inputComment: string,
    operationUuid: string,
    gszActivityExcludeValidationComment: string | null,
    gszActivityExcludeValidationCustomer: string | null,
    activitySave: boolean,
    currentUser: ModelsApp.Employee,
    activitySaveInProgress: boolean,
    activitySaveError: Error | null,
    activityExcludeCreate: boolean,
    activityExcludeCreateFetching: boolean,
    activityExcludeCreateError: Error | null,
    activityExcludeCreateCachedDate: Date | null,
    currentCustomerManaged: Models.CustomerManaged,
    currentGsz: Models.Gsz,
    navigateToMemberListScreen: ModelsGszActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    performCancelSearchCustomer: ModelsGszActivityExclude.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    memberList: Models.MemberList,
    testID: string,
    isVisibleModalActivityError: boolean,
    performChangeVisibleErrorModal: ModelsGszActivityExclude.PERFORM_CHAGNE_VISIBLE_ERROR_MODAL,
    searchError: Error | null,
}


const ViewGszActivityExclude: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (


    <View testID='test-id-8a7d8276-62be-40f4-a088-b9bf402278e2' style={Styles.main}>

        <SplitPanel testID='test-id-0964055e-34b3-45e4-8e34-5d4bebd1b791'
                    id={Utils.getNavigationGszEditInIncludeExcludeOrganizationString(Enums.NavigationGszEditInIncludeExcludeOrganization.Gsz_CustomerEditor_Exclude_View)}>
            <ContentPanel testID='test-id-b7956561-c4db-4b89-9fa0-32b935f535b0' style={{backgroundColor: '#fff'}}>
                <Page testID='test-id-ab7b0c3b-3508-4844-8f1a-8ee45965a715' scrollEnabled={true}
                      content={getMainPage(props)}>
                    <LeftPageHeader testID='test-id-c9536373-49f4-431a-88d2-9ce33f910727'>
                        {props.activitySaveInProgress == false ?
                            <NavigationTextButton testID='test-id-14b17069-af2d-4ebf-ad1a-6f7b4b80458c'
                                              title='Отмена'
                                              onExecute={props.performCancel}/> : null}
                    </LeftPageHeader>
                    <CenterPageHeader testID='test-id-e093e5fc-f0a6-4a3f-9394-1bc9592af301'>
                        <H2 testID='test-id-00be8293-3609-4c37-a480-2e4df1b6f8cc'>{'Новая задача'}</H2>
                    </CenterPageHeader>
                    <RightPageHeader testID='test-id-0d71504b-2389-4848-abe8-5cf920d2818a'>
                        {props.activitySaveInProgress == false ?
                            <NavigationTextButton testID='test-id-5ecdf34a-d6ff-494b-9001-e804c983d30f'
                                              title={'Добавить'}
                                              onExecute={props.performSave}/> : null}
                    </RightPageHeader>
                    }
                </Page>
                <Page testID='test-id-65806ee7-6b65-4ad6-99a6-bef9d87aec27' scrollEnabled={false}
                      content={renderCustomerSearch(props)}>
                    <LeftPageHeader testID='test-id-0ce1df85-8ad9-4551-b796-2f85d38d2c0c' />
                </Page>
                <Page testID='test-id-65806ee7-6b65-4ad6-99a6-bef9d87aec21' scrollEnabled={false}
                      content={<ContainerMemberList testID='test-id-65806ee7-6b65-4ad6-99a6-bef9d87bec21' />}>
                    <LeftPageHeader testID='test-id-0ce1df85-8ad9-4551-b796-2f85d38dgc0c'>
                    </LeftPageHeader>
                </Page>
            </ContentPanel>
        </SplitPanel>

    </View>


)

export default ViewGszActivityExclude