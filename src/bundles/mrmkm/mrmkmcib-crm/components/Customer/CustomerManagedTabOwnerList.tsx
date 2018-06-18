/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    Button,
    ContentPanel,
    Icon,
    IconType,
    Page,
    Popover,
    PopoverPosition,
    PopoverType,
    SplitPanel,
    Text,
    View,
} from 'ufs-mobile-platform'

import { defaultValues } from "../../models/Models"
import { Models } from "mrmkmcib-crm"
import { Enums } from '../../Enums'

import * as ModelsAppCRM from "../../models/ModelsAppCRM"

import * as ModelsCustomer from "../../models/ModelsCustomer"

import * as ModelsCustomerEditor from "../../models/ModelsCustomerEditor"

import * as ModelsProductList from "../../models/ModelsProductList"

import * as ModelsAgentList from "../../models/ModelsAgentList"
import Error from "../../models/Error"

import Styles from './styles/CustomerManagedTabOwnerListStyles'


import * as Utils from "../../common/Util"
import moment from 'moment'

import PopoverTarget from '../../modules/PopoverTarget'
import ContainerAgent from '../../containers/ContainerAgent'

const getRefName = (owner: Models.Owner) => {
    switch (owner.ownerType) {
        case Enums.OwnerType.Shareholder:
            return 'ownerRef_shareholder_' + owner.organizationId

        case Enums.OwnerType.Beneficiary:
            return 'ownerRef_beneficiary_' + owner.contactId

        case Enums.OwnerType.Unknown:
            return 'ownerRef_unknown'

        default:
            return 'no_ref_name'
    }
}

const customerOwnerRow = (customerOwner: Models.Owner, key: string, props: IProps) => {

    return (
        <View testID='test-id-65d77cf1-98d3-b72a-1061-d7fb613eff90' style={Styles.listRowContainer} key={key}>
            <View testID='test-id-250b111d-20c6-c582-e99e-ddf6a0b29cca' style={Styles.listLeftTablePart}>
                <View testID='test-id-42c08adb-01f8-ffcb-49eb-a840c2b30609'>
                    <Text testID='test-id-0a23e562-f855-bcc0-9643-139112119040'
                        style={Styles.listRowTitleText}>{customerOwner.name.trim()}</Text>
                </View>
                <View testID='test-id-d1a66acc-11e6-8705-43ad-d810d1df7488'>
                    <Text testID='test-id-d0984ec6-47f9-92dd-454a-8d50f21967e9'
                        style={Styles.listRowTitleDescription}>{customerOwner.ownerType === Enums.OwnerType.Shareholder ? 'Юридическое лицо' : 'Физическое лицо'}</Text>
                </View>
            </View>
            <View testID='test-id-671f2912-e006-5935-9760-18801bad6c53' style={Styles.listRightTablePart}>
                <View testID='test-id-0b642225-205f-e7b2-5a33-06cc0b200fe2' style={Styles.percentContainer}>
                    <Text testID='test-id-82f627e9-25de-99b3-2e7d-51cbe05e6aec'
                        style={Styles.listPercentText}>{customerOwner.percent ? customerOwner.percent + '%' : 'Нет данных'}</Text>
                </View>
                <View testID='test-id-505e72f2-0380-eb45-7ccf-f35c66f013a7' style={Styles.listDownIconContainer}>
                    <PopoverTarget testID='test-id-e519a484-a0f8-7bc3-c530-07af2a2ed464'
                        refName={getRefName(customerOwner) || ''}>
                        <View testID='test-id-b31e4158-c1d9-4b1a-5b5f-962025aef0ae' style={Styles.rotateRowIcon}>
                            <Button testID='test-id-46216259-fefa-41db-94ed-60a6c1087d72'
                                onExecute={() => {
                                    props.performPopoverOwnerShow(customerOwner)
                                }}
                            >
                                <Icon testID='test-id-a70c9620-9bf2-d548-0fde-98017ca32004' type={IconType.MrmLink} />
                            </Button>
                        </View>
                    </PopoverTarget>
                </View>
            </View>
        </View>)
}


const ShowOwnersList = (ownerList: Array<Models.Owner>, props: IProps) => {

    let ownerRender = []
    let shareholderList = ownerList.filter((owner) => owner.ownerType === Enums.OwnerType.Shareholder).sort((a: Models.Owner, b: Models.Owner) => b.percent - a.percent)

    if (shareholderList.length) {
        ownerRender.push(
            <View testID='test-id-fd417dd9-4f52-4ce2-a511-d4e9dde6bf33' style={Styles.ListTitleContainer}
                key={'shareHoldersTitleKey'}>
                <Text testID='test-id-80ce7116-a469-6af0-dd0d-a07cd44fe2ed'
                    style={Styles.ListTitleText}>{'Акционеры'}</Text>
            </View>
        )

        let counter = 1
        for (let shareHolder of shareholderList) {
            ownerRender.push(customerOwnerRow(shareHolder, 'shareHolderContainer' + counter++, props))
        }
    }

    let beneficiarsList = ownerList.filter((owner) => owner.ownerType === Enums.OwnerType.Beneficiary).sort((a: Models.Owner, b: Models.Owner) => b.percent - a.percent)
    if (beneficiarsList.length) {
        ownerRender.push(
            <View testID='test-id-bbdcad35-47bd-3453-a988-0ddf1e505c4e' style={Styles.ListTitleContainer}
                key={'beneficiarTitleKey'}>
                <Text testID='test-id-963de012-9a9e-150e-50ce-3367060e117e'
                    style={Styles.ListTitleText}>{'Бенефициары'}</Text>
            </View>
        )

        let counter = 1
        for (let beneficiar of beneficiarsList) {
            ownerRender.push(customerOwnerRow(beneficiar, 'beneficiarContainer' + counter++, props))
        }
    }

    if (!ownerRender.length) {
        ownerRender.push(<View testID='test-id-0bd21be8-8ea1-54c7-4d76-2a99d893cad0' key={'notFoundOwnersKey'}
            style={Styles.notFoundOwnersContainer}><Text
                testID='test-id-0bd21be8-8ea1-54c7-4d76-2a99d893cad0'>{'Нет данных по владельцам'}</Text></View>)
    }

    return (
        <View testID='test-id-12baefeb-5c42-dd93-8ed7-810b8a962b0d' style={Styles.ownerContainer}>
            {ownerRender}
            <Popover testID='test-id-f88427dd-5349-e1a7-b633-a4cdd034fae8'
                target={PopoverTarget.getRef(getRefName(props.currentOwner))}
                opened={props.isVisiblePopoverOwner}
                onOutsideTap={props.performPopoverOwnerHide}
                type={PopoverType.WIDE}
                style={{ height: 400 }}
                position={[PopoverPosition.LEFT]}
            >
                {props.currentOwner ? getOwnerViewSplitPanel(props) : null}
            </Popover>
        </View>
    )
}

const getOwnerTypeValue = (ownerType: number) => {
    switch (ownerType) {
        case Enums.OwnerType.Shareholder:
            return "Юридическое лицо"
        case Enums.OwnerType.Beneficiary:
            return "Физическое лицо"
        default:
            return "Неизвестный владелец"
    }
}

const getEmployeeDetailContentView = (owner: Models.Owner, props: IProps): React.ReactElement<View> => {

    return (
        <View testID='test-id-9920b76a-2e32-833f-15b9-82984a71e6cc' style={Styles.PopupContainer}>
            {owner.organizationId &&
                <View testID='test-id-852ce172-9cf5-8399-79dd-131428fc1789' style={Styles.popupIconContainer}>
                    <Button
                        testID={'test-id-82167f7f-8333-4362-b89b-78b2d5538a30'}
                        onExecute={() => {
                            props.performNavigateToOwnerScreen(owner, Enums.CustomerMode.SameType)
                        }}>
                        <Icon
                            testID={'test-id-58735e4d-8900-4ebd-8f3c-6a123581985a'}
                            type={IconType.MrmInfo}/>
                    </Button>
                </View>}
            {owner.contactId &&
                <View testID='test-id-dbc58a2c-49ec-147f-56ad-ab887ba74a8a' style={Styles.popupIconContainer}>
                    <Button
                        testID={'test-id-8a38a2a8-9b7c-4e81-95b3-66845f8b7a07'}
                        onExecute={() => {
                            props.navigateToOwnerAgentScreen(
                                {
                                    ...defaultValues.Agent,
                                    id: owner.contactId
                                },
                                Enums.AgentContextMode.OwnerAgent
                            )
                        }}>
                        <Icon
                            testID={'test-id-0e3520b6-0923-4587-b4c5-8e0c75714a81'}
                            type={IconType.MrmInfo}/>
                    </Button>
                </View>}
            <View testID='test-id-a54ecf17-5de3-ef99-e4bd-8fa97dcbfbae' style={Styles.PopupHeaderContainer}>
                <Text testID='test-id-d29987f0-1eca-bb69-f5a9-a66aeabe5c30' style={Styles.listRowTitleText}>
                    {owner.name}
                </Text>
                <Text testID='test-id-4c30d859-4738-ff17-1c40-e8260c7282b5' style={Styles.listRowTitleDescription}>
                    {getOwnerTypeValue(owner.ownerType)}
                </Text>
            </View>
            <View testID='test-id-4d94ed02-0db7-69b7-e14c-7d71732fc86d' style={Styles.popupDataContainer}>
                {owner.inn &&
                    <View testID='test-id-8bbec165-8991-b477-2c14-7e82a260fbbe' style={Styles.popupDataRowContainer}>
                        <View testID='test-id-ba6ddea4-7607-f737-de4c-5f064fb20b0d'
                            style={Styles.popupDataLeftPartContainer}>
                            <Text testID='test-id-44b69072-9e59-a48b-1ac2-538d82a058ea'
                                style={Styles.popupDataBigTextGrey}>{'ИНН'}</Text>
                        </View>
                        <View testID='test-id-8b588fc3-6ce1-be99-eb25-060d3c089b87' style={Styles.popupDataRightContainer}>
                            <Text testID='test-id-c93321f0-5a1c-4ac4-1abf-698aa533a2be'
                                style={Styles.popupDataTextBlack}>{owner.inn}</Text>
                        </View>
                    </View>}
                {owner.kpp &&
                    <View testID='test-id-de29bd81-7e4b-1f99-de49-304a001420c4' style={Styles.popupDataRowContainer}>
                        <View testID='test-id-47dff978-636c-580f-50dd-a1164f530911'
                            style={Styles.popupDataLeftPartContainer}>
                            <Text testID='test-id-b57698f7-aa92-7e61-2751-6f9bb7ac18d5'
                                style={Styles.popupDataBigTextGrey}>{'КПП'}</Text>
                        </View>
                        <View testID='test-id-ed2871ae-e215-91d2-1055-f470a30240f2' style={Styles.popupDataRightContainer}>
                            <Text testID='test-id-cff23d16-9d56-e00a-0cda-6a6e4c94762e'
                                style={Styles.popupDataTextBlack}>{owner.kpp}</Text>
                        </View>
                    </View>}
                {owner.ownerType == Enums.OwnerType.Beneficiary &&
                    <View testID='test-id-796f00d1-33d0-6a2c-ec69-561101a5c2eb' style={Styles.popupDataRowContainer}>
                        <View testID='test-id-782249a9-ef6f-807c-4623-bf5d7abfba90'
                            style={Styles.popupDataLeftPartContainer}>
                            <Text testID='test-id-ae543c0a-3b5e-75b6-5c61-51e6bbbff723'
                                style={Styles.popupDataBigTextGrey}>{'День рождения'}</Text>
                        </View>
                        <View testID='test-id-5aa6eab7-087e-fad5-acff-e3473a6bf980' style={Styles.popupDataRightContainer}>
                            <Text testID='test-id-49f12430-8809-2137-7c13-7ea135b9a797'
                                style={Styles.popupDataTextBlack}>{owner.birthdayDate ? moment(owner.birthdayDate).format('MM.DD.YYYY') : 'Нет данных'}</Text>
                        </View>
                    </View>}
                {owner.ownerType == Enums.OwnerType.Shareholder && owner.registrationInfo &&
                    <View testID='test-id-7a44ada5-f235-e1b4-9208-3158a10a9413' style={Styles.popupDataColumnContainer}>
                        <Text testID='test-id-a53d7931-0411-4046-5c24-65d742a44be5' style={Styles.listRowTitleDescription}>
                            {'Дата и номер регистрации, рег. орган'}
                        </Text>
                        <Text testID='test-id-e7657a8d-d998-cf48-7b8a-b15c5dc42b24' style={Styles.popupDataTextBlack}>
                            {owner.registrationInfo}
                        </Text>
                    </View>}
                {owner.ownerType == Enums.OwnerType.Shareholder && owner.address &&
                    <View testID='test-id-60ee0222-7a0f-d145-d288-8b33d70a0d1e' style={Styles.popupDataColumnContainer}>
                        <Text testID='test-id-495ff0e1-69e3-20c6-99c3-b029cd4027da' style={Styles.listRowTitleDescription}>
                            {'Фактический адрес'}
                        </Text>
                        <Text testID='test-id-41b3e956-a2e7-f14e-65f7-8bc05eab60a4' style={Styles.popupDataTextBlack}>
                            {owner.address}
                        </Text>
                    </View>}
                <View testID='test-id-0318a5f8-e13b-9c92-657f-69c3245d55ce' style={Styles.popupDataRowContainer}>
                    <View testID='test-id-ea1365e5-fcb4-3480-4dd5-35bed0ee4e1e'
                        style={Styles.popupDataLeftPartContainer}>
                        <Text testID='test-id-209a7c5b-d6bf-ac91-1fc8-e7a823e3377b'
                            style={Styles.popupDataBigTextGrey}>{'Доля'}</Text>
                    </View>
                    <View testID='test-id-74512994-69d6-cb50-5827-6ee7ec14db1a' style={Styles.popupDataRightContainer}>
                        <Text testID='test-id-561ff639-a98c-6545-c642-5693fffe9571'
                            style={Styles.popupDataTextBlack}>{owner.percent ? owner.percent + '%' : 'Нет данных'}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const getOwnerViewSplitPanel = (props: IProps): React.ReactElement<View> => {
    return (
        <SplitPanel testID='test-id-ee7ad6c0-ee95-f542-9dd7-3ddcb481ed13'
            id={Utils.getNavigationPopoverCustomerString(Enums.NavigationContentAppCrm_Customer_Owners.AppCRM_Customer_OwnerList)}>
            <ContentPanel testID='test-id-bcfb6ecd-4774-432a-f964-fc03daa0843b' style={{ backgroundColor: '#fff' }}>
                <Page testID='test-id-79354afb-351b-1cce-760b-9530aa8b7326' scrollEnabled={false}
                    content={getEmployeeDetailContentView(props.currentOwner, props)}>
                </Page>
                <Page testID='test-id-cb38d869-2727-021f-b692-d5606eed3080' scrollEnabled={true}
                    content={<ContainerAgent testID='test-id-cb38d869-2727-021f-b692-d5606eed3080' />}>
                </Page>
            </ContentPanel>
        </SplitPanel>
    )
}


/*
 * UI stateless functional component "CustomerManagedTabOwnerList" used in "Customer" screen. Component render owners tab for customer managed to current user.
 */

export interface IProps {

    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    closeCustomerActivityPanel: ModelsCustomer.CLOSE_CUSTOMER_ACTIVITY_PANEL,
    customerManaged: Models.CustomerManaged,
    isDashboardExpandedMode: boolean,
    navigateToOwnerAgentScreen: ModelsCustomer.NAVIGATE_TO_OWNER_AGENT_SCREEN,
    currentPopoverLimitItem: Enums.OldLimitItem,
    navigateToPopoverLimitItemScreen: ModelsCustomer.NAVIGATE_TO_POPOVER_LIMIT_ITEM_SCREEN,
    navigatePopoverLimitBack: ModelsCustomer.NAVIGATE_POPOVER_LIMIT_BACK,
    isVisibleModalCustomerEditor: boolean,
    performCustomerEditorShow: ModelsCustomerEditor.PERFORM_CUSTOMER_EDITOR_SHOW,
    isVisiblePopoverLimit: boolean,
    performLimitShow: ModelsCustomer.PERFORM_LIMIT_SHOW,
    performPopoverLimitHide: ModelsCustomer.PERFORM_POPOVER_LIMIT_HIDE,
    performChangeTab: ModelsCustomer.PERFORM_CHANGE_TAB,
    performPopoverHolderShow: ModelsCustomer.PERFORM_POPOVER_HOLDER_SHOW,
    performPopoverHolderHide: ModelsCustomer.PERFORM_POPOVER_HOLDER_HIDE,
    performPopoverCuratorShow: ModelsCustomer.PERFORM_POPOVER_CURATOR_SHOW,
    performPopoverCuratorHide: ModelsCustomer.PERFORM_POPOVER_CURATOR_HIDE,
    performPopoverOccasionListShow: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_SHOW,
    performPopoverOccasionListHide: ModelsCustomer.PERFORM_POPOVER_OCCASION_LIST_HIDE,
    performPopoverNoteListShow: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_SHOW,
    performPopoverNoteListHide: ModelsCustomer.PERFORM_POPOVER_NOTE_LIST_HIDE,
    performPopoverProblemListShow: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_SHOW,
    performPopoverProblemListHide: ModelsCustomer.PERFORM_POPOVER_PROBLEM_LIST_HIDE,
    performPopoverOwnerShow: ModelsCustomer.PERFORM_POPOVER_OWNER_SHOW,
    performPopoverOwnerHide: ModelsCustomer.PERFORM_POPOVER_OWNER_HIDE,
    performNavigateToOwnerScreen: ModelsCustomer.PERFORM_NAVIGATE_TO_OWNER_SCREEN,
    navigateToCustomerScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_SCREEN,
    callGetLimitNew: ModelsCustomer.CALL_GET_LIMIT_NEW,
    callGetLimitOld: ModelsCustomer.CALL_GET_LIMIT_OLD,
    performProductTypeListRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_REFRESH,

    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,

    performCustomerOpen: ModelsAppCRM.PERFORM_CUSTOMER_OPEN,
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    currentCustomerId: string,
    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    isVisiblePopoverHolder: boolean,
    isVisiblePopoverCurator: boolean,
    isVisiblePopoverOccasionList: boolean,
    isVisiblePopoverNoteList: boolean,
    isVisiblePopoverProblemList: boolean,
    isVisiblePopoverOwner: boolean,
    isVisibleModalActivityEditor: boolean,
    isVisibleModalPlanner: boolean,
    isVisibleModalEmailSend: boolean,
    isVisibleModalAssociateSearch: boolean,
    inputSearchAffiliateList: string,
    isSearchModeAffiliateList: boolean,
    affiliateSearchList: Models.CustomerList,
    performInputSearchAffiliateList: ModelsCustomer.PERFORM_INPUT_SEARCH_AFFILIATE_LIST,
    performAffiliateListSearch: ModelsCustomer.PERFORM_AFFILIATE_LIST_SEARCH,
    performSearchAffiliateListEnable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_ENABLE,
    performSearchAffiliateListDisable: ModelsCustomer.PERFORM_SEARCH_AFFILIATE_LIST_DISABLE,
    currentTab: Enums.CustomerManagedTab,
    customerFetching: boolean,
    customerError: Error | null,
    limitOld: Models.LimitOld,
    limitOldFetching: boolean,
    limitOldError: Error | null,
    limitOldCachedDate: Date | null,
    limit: Models.Limit,
    limitFetching: boolean,
    limitError: Error | null,
    limitCachedDate: Date | null,
    productListAgreementStatus: Enums.ProductListAgreementStatus,

    // START CREDIT model product list
    creditActiveProductList: Models.CreditProductList,
    creditActiveProductListFetching: boolean,
    creditActiveProductListUpdating: boolean,
    creditActiveProductListError: Error | null,
    creditActiveProductListCachedDate: Date | null,

    creditCloseProductList: Models.CreditProductList,
    creditCloseProductListFetching: boolean,
    creditCloseProductListError: Error | null,
    creditCloseProductListCachedDate: Date | null,
    //END CREDIT model product list

    // START DEPOSIT model product list
    depositActiveProductList: Models.DepositProductList,
    depositActiveProductListFetching: boolean,
    depositActiveProductListUpdating: boolean,
    depositActiveProductListError: Error | null,
    depositActiveProductListCachedDate: Date | null,

    depositCloseProductList: Models.DepositProductList,
    depositCloseProductListFetching: boolean,
    depositCloseProductListError: Error | null,
    depositCloseProductListCachedDate: Date | null,
    //END DEPOSIT model product list

    // START SETTLEMENT_AGREEMENT model product list
    settlementAgreementActiveProductList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductListFetching: boolean,
    settlementAgreementActiveProductListUpdating: boolean,
    settlementAgreementActiveProductListError: Error | null,
    settlementAgreementActiveProductListCachedDate: Date | null,

    settlementAgreementCloseProductList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductListFetching: boolean,
    settlementAgreementCloseProductListUpdating: boolean,
    settlementAgreementCloseProductListError: Error | null,
    settlementAgreementCloseProductListCachedDate: Date | null,
    // END SETTLEMENT_AGREEMENT model product list

    // START CORPORATE_CARD model product list
    corporateCardActiveProductList: Models.CorporateCardProductList,
    corporateCardActiveProductListFetching: boolean,
    corporateCardActiveProductListUpdating: boolean,
    corporateCardActiveProductListError: Error | null,
    corporateCardActiveProductListCachedDate: Date | null,

    corporateCardCloseProductList: Models.CorporateCardProductList,
    corporateCardCloseProductListFetching: boolean,
    corporateCardCloseProductListUpdating: boolean,
    corporateCardCloseProductListError: Error | null,
    corporateCardCloseProductListCachedDate: Date | null,
    // END CORPORATE_CARD model product list

    // START ENCASHMENT_CONTRACT model product list
    encashmentContractActiveProductList: Models.EncashmentContractProductList,
    encashmentContractActiveProductListFetching: boolean,
    encashmentContractActiveProductListUpdating: boolean,
    encashmentContractActiveProductListError: Error | null,
    encashmentContractActiveProductListCachedDate: Date | null,

    encashmentContractCloseProductList: Models.EncashmentContractProductList,
    encashmentContractCloseProductListFetching: boolean,
    encashmentContractCloseProductListUpdating: boolean,
    encashmentContractCloseProductListError: Error | null,
    encashmentContractCloseProductListCachedDate: Date | null,
    // END ENCASHMENT_CONTRACT model product list

    // START ACQUIRING model product list
    acquiringActiveProductList: Models.AcquiringProductList,
    acquiringActiveProductListFetching: boolean,
    acquiringActiveProductListUpdating: boolean,
    acquiringActiveProductListError: Error | null,
    acquiringActiveProductListCachedDate: Date | null,

    acquiringCloseProductList: Models.AcquiringProductList,
    acquiringCloseProductListFetching: boolean,
    acquiringCloseProductListUpdating: boolean,
    acquiringCloseProductListError: Error | null,
    acquiringCloseProductListCachedDate: Date | null,
    // END ACQUIRING model product list

    // START DBO model product list
    dboActiveProductList: Models.DboProductList,
    dboActiveProductListFetching: boolean,
    dboActiveProductListUpdating: boolean,
    dboActiveProductListError: Error | null,
    dboActiveProductListCachedDate: Date | null,

    dboCloseProductList: Models.DboProductList,
    dboCloseProductListFetching: boolean,
    dboCloseProductListUpdating: boolean,
    dboCloseProductListError: Error | null,
    dboCloseProductListCachedDate: Date | null,
    // END DBO model product list

    // START SALARY model product list
    salaryActiveProductList: Models.SalaryProductList,
    salaryActiveProductListFetching: boolean,
    salaryActiveProductListUpdating: boolean,
    salaryActiveProductListError: Error | null,
    salaryActiveProductListCachedDate: Date | null,

    salaryCloseProductList: Models.SalaryProductList,
    salaryCloseProductListFetching: boolean,
    salaryCloseProductListUpdating: boolean,
    salaryCloseProductListError: Error | null,
    salaryCloseProductListCachedDate: Date | null,
    // END SALARY model product list

    // START SALARY model product list
    udboActiveProductList: Models.UdboProductList,
    udboActiveProductListFetching: boolean,
    udboActiveProductListUpdating: boolean,
    udboActiveProductListError: Error | null,
    udboActiveProductListCachedDate: Date | null,

    udboCloseProductList: Models.UdboProductList,
    udboCloseProductListFetching: boolean,
    udboCloseProductListUpdating: boolean,
    udboCloseProductListError: Error | null,
    udboCloseProductListCachedDate: Date | null,
    // END SALARY model product list

    legalInfoProductList: Models.LegalInfoProductList,
    legalInfoProductListFetching: boolean,
    legalInfoProductListError: Error | null,
    legalInfoProductListCachedDate: Date | null,

    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    currentOwner: Models.Owner,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN,
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    testID: string,
    callGetAgentList: ModelsAgentList.CALL_GET_AGENT_LIST,
}

const CustomerManagedTabOwnerList: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-CustomerManagedTabOwnerList'}>
        {}

        <Page testID='test-id-6b9bae89-47a6-3632-897b-e5bad8bd53bd' scrollEnabled={true}
            content={ShowOwnersList(props.currentCustomerManaged.ownerList, props)}>
        </Page>

        {}
    </View>
)

export default CustomerManagedTabOwnerList
