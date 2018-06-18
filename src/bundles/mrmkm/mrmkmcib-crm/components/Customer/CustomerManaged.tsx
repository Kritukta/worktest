/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import {
    H1,
    Icon,
    IconType,
    Button,
    NavigationIconButton,
    NavigationIconButtonType,
    OptionItem,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TabSelector,
    Text,
    View,
} from 'ufs-mobile-platform'

import {Models} from "mrmkmcib-crm"

import {
    Models as ModelsApp,
    LoaderWithText,
    RefreshBar,
    AlertView,
    ErrorModal,
    EnumsApp
} from 'mrmkmcib-app'

import {Enums} from '../../Enums'



import * as ModelsAppCRM from "../../models/ModelsAppCRM"
import * as ModelsCustomer from "../../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../../models/ModelsCustomerEditor"
import * as ModelsProductList from "../../models/ModelsProductList"
import * as ModelsAgentList from "../../models/ModelsAgentList"

import Error from "../../models/Error"

import Styles from './styles/CustomerManagedStyles'

import * as Utils from "../../common/Util"
import CustomerManagedTabMain from './CustomerManagedTabMain'
import CustomerManagedTabOwnerList from './CustomerManagedTabOwnerList'
import ContainerDealList from '../../containers/ContainerDealList'
import {ContainerCustomerDashboard} from "mrmkmcib-dashboard"

import {Breadcrumbs} from 'mrmkmcib-ui'
// import {AlertView, ErrorModal, EnumsApp} from 'mrmkmcib-app'

const getMappedHistory = (hierarchy: any) => {

    const history = hierarchy.map((item: any, i: number) => {
        return {title: item.name, key: item.id, accessible: true, testID: `test-id-getMappedHistory-${item.id}`}
    })

    return history
}

const ENUM_PRODUCT_LIST = [

    /**
     * Product types should be ordered according the business requirements
     */

    Enums.ProductType.PaymentAccountProduct,
    Enums.ProductType.CreditProduct,
    Enums.ProductType.DepositProduct,
    Enums.ProductType.ContractConstructorProduct,
    Enums.ProductType.PackageProduct,
    Enums.ProductType.TariffPlanProduct,
    Enums.ProductType.CustomsPaymentProduct,
    Enums.ProductType.CurrencyControlProduct,
    Enums.ProductType.EncashmentProduct,
    Enums.ProductType.SelfEncashmentProduct,
    Enums.ProductType.CorporateCardProduct,
    Enums.ProductType.AcquiringProduct,
    Enums.ProductType.BankGuaranteeProduct,
    Enums.ProductType.ContractNsoProduct,
    Enums.ProductType.ContractSdoProduct,
    Enums.ProductType.DboProduct,
    Enums.ProductType.CashManagementProduct,
    Enums.ProductType.SalaryProduct,

]

const getBreadCrumbs = (props: IProps) => {
    if (props.customerManaged.hierarchy && props.customerManaged.hierarchy.length === 0) {
        return null
    } else {

        return (
            <View testID='test-id-42db2728-8226-40b1-8423-8c1a2ef37191' style={Styles.Breadcrumbs}>
               <Breadcrumbs onTap={(id)=>{
                   props.performCustomerOpen(id, Enums.CustomerMode.SameType)
               }} items={getMappedHistory(props.customerManaged.hierarchy || [])}/>
            </View>
        )
    }
}

const getTabSelectorValue = (value: number) => {
    switch (value) {
        case 0:
            return 'General'
        case 1:
            return 'Deals'
        case 2:
            return 'Products'
        case 3:
            return 'Owners'
        case 4:
            return 'Dashboard'
        default:
            return 'General'
    }
}

const getTabSelector = (props: IProps) => {
    return (
        <TabSelector testID='test-id-Customer-Managed-Tab-Selector'
                     style={Styles.TabSelector}
                     value={getTabSelectorValue(props.currentTab)}
                     onChange={(index: number) => {

                         props.performChangeTab(index, index)
                     }}
        >
            <OptionItem testID='test-id-4ac266c6-a204-2fa2-4c84-10abe7b5b716' value='General' title='Основное'/>
            <OptionItem testID='customer-managed-tab-main-deals-switch' value='Deals' title='Сделки'/>
            <OptionItem testID='test-id-662b7e95-9d4f-2489-f6ed-3a6845ab6059' value='Products' title='Продукты'/>
            <OptionItem testID='test-id-f7a498ae-1ccd-2692-431e-117010df9d31' value='Owners' title='Владельцы'/>
            {
            // Для руководителя с функцией КМ и для типа организации "Филиал" не отображать вкладку Аналитика
            (props.currentUserAd.role != EnumsApp.RoleAd.ChiefCM)     &&
            (props.customerManaged.organizationType.code != 'Branch') ?
                <OptionItem testID='test-id-2e99e52a-39cd-415b-5553-db231ebb9bef' value='Dashboard' title='Аналитика'/> :
                null
            }
        </TabSelector>
    )
}

const getTabContent = (props: IProps) => {

    const currentTab = props.currentTab

    switch (currentTab) {
        case 0:
            return (
                <View testID='test-id-abdccdca-cf31-0462-2a3a-ec4a1bc215ad' style={Styles.TabContentWrapper}>
                    <CustomerManagedTabMain testID='test-id-f98e762a-5c5b-2fc8-e818-05ec31c50c5b'  {...props}/>
                </View>
            )
        case 1:
            return (
                <View testID='test-id-77e6d053-ef8f-9084-9bc0-bb558ad341ca' style={Styles.TabContentWrapper}>
                    <ContainerDealList testID='test-id-bf3de0d3-6d3e-09ea-2d1f-f6b751c97827'/>
                </View>
            )
        case 2:
            return (
                <View testID='test-id-fe234e6e-d52b-b2b5-5c27-c842fd130329' style={Styles.TabContentWrapper}>
                    {getProductTypeList(props)}
                </View>
            )
        case 3:
            return (
                <View testID='test-id-cd638830-25f2-c717-d764-8f535dda1f55' style={Styles.TabContentWrapper}>
                    <CustomerManagedTabOwnerList testID='test-id-fbc789c7-5ea9-8299-c95c-5075d8d8be63'  {...props}/>
                </View>
            )
        case 4:
            return (
                <View testID='test-id-94add4c4-62a2-daaf-51ba-5e7846da76db' style={Styles.TabContentWrapper}>
                    <View testID='test-id-80276320-4b0f-14ef-2f9b-6bc2ea8704a1'
                          style={[Styles.dashboardContainer]}>
                        <ContainerCustomerDashboard testID='test-id-0f3b173a-7b7e-192f-fbae-71499bc803f9'/>
                    </View>
                </View>
            )
        default:
            return (
                <View testID='test-id-fab68bff-a1e3-5342-b811-44de370cb674' style={Styles.TabContentWrapper}>
                    <CustomerManagedTabMain testID='test-id-31da3cb8-9504-1509-378c-6ac3da33d428'  {...props}/>
                </View>
            )
    }
}

interface ProductTypeRowData {
    type: Enums.ProductType;
    isActiveProductList: boolean,
    name: string;
    key: string;
    pollingStatus: Enums.ProductPollingStatus | null;
    list: Array<Models.SubProduct> | null;
    onClick: (row: ProductTypeRowData) => void;
    error: Models.Error | null;
    eksErrorList: Models.EksError[] | null;
    isFetching: boolean,
    isUpdating: boolean;
    listCacheDate: Date | null;
}

const getProductTypeRowList = (props: IProps): Array<ProductTypeRowData> => {
    return ENUM_PRODUCT_LIST.map((type: Enums.ProductType): ProductTypeRowData => getSubProductList(props, type))
}


const getDateInCacheProductList = (props:IProps, productType: Enums.ProductType): Date | null => {
    switch (productType) {

        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct:
            return props.creditActiveProductList.bhCachedDate

        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct:
            return props.depositActiveProductList.bhCachedDate

        case Enums.ProductType.CorporateCardProduct:
            return props.corporateCardActiveProductList.bhCachedDate

        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct:
            return props.encashmentContractActiveProductList.bhCachedDate

        case Enums.ProductType.CurrencyControlProduct:
            return props.legalInfoProductList.bhCachedDate

        case Enums.ProductType.AcquiringProduct:
            return props.acquiringActiveProductList.bhCachedDate

        case Enums.ProductType.DboProduct:
            return props.dboActiveProductList.bhCachedDate

        case Enums.ProductType.ContractConstructorProduct:
            return props.udboActiveProductList.bhCachedDate

        case Enums.ProductType.SalaryProduct:
            return props.salaryActiveProductList.bhCachedDate

        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct:
        case Enums.ProductType.CustomsPaymentProduct:
            return props.settlementAgreementActiveProductList.bhCachedDate

        default: return null
    }
}

const getProductTypeFetchingError = (props:IProps, productType: Enums.ProductType): Error | null => {

    const isActiveProductList = Utils.isActiveProductList(props.productListAgreementStatus)

    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct: return (
            isActiveProductList ? props.creditActiveProductListError
                                : props.creditCloseProductListError
        )

        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct: return (
            isActiveProductList ? props.depositActiveProductListError
                                : props.depositCloseProductListError
        )

        case Enums.ProductType.CorporateCardProduct : return (
            isActiveProductList ? props.corporateCardActiveProductListError
                                : props.corporateCardCloseProductListError
        )

        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct: return (
            isActiveProductList ? props.encashmentContractActiveProductListError
                                : props.encashmentContractCloseProductListError
        )

        case Enums.ProductType.CurrencyControlProduct: return (
            props.legalInfoProductListError
        )

        case Enums.ProductType.AcquiringProduct: return (
            isActiveProductList ? props.acquiringActiveProductListError
                                : props.acquiringCloseProductListError
        )

        case Enums.ProductType.DboProduct: return (
            isActiveProductList ? props.dboActiveProductListError
                                : props.dboCloseProductListError
        )

        case Enums.ProductType.ContractConstructorProduct: return (
            isActiveProductList ? props.udboActiveProductListError
                                : props.udboCloseProductListError
        )

        case Enums.ProductType.SalaryProduct: return (
            isActiveProductList ? props.salaryActiveProductListError
                                : props.salaryCloseProductListError
        )

        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct:
        case Enums.ProductType.CustomsPaymentProduct: return (
            isActiveProductList ? props.settlementAgreementActiveProductListError
                                : props.settlementAgreementCloseProductListError
        )

        default: return (
            null
        )

    }
}
const getPollingStatusProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): Enums.ProductPollingStatus | null => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
        Enums.ProductType.BankGuaranteeProduct === productType)  : {
            return isActiveProductList ? props.creditActiveProductList.pollingStatus
                                       : props.creditCloseProductList.pollingStatus
        }
        case (Enums.ProductType.DepositProduct === productType ||
        Enums.ProductType.ContractNsoProduct === productType ||
        Enums.ProductType.ContractSdoProduct === productType)  : {
            return isActiveProductList ? props.depositActiveProductList.pollingStatus
                                       : props.depositCloseProductList.pollingStatus
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
            return isActiveProductList ? props.corporateCardActiveProductList.pollingStatus
                                       : props.corporateCardCloseProductList.pollingStatus
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
        Enums.ProductType.SelfEncashmentProduct === productType)  : {
            return isActiveProductList ? props.encashmentContractActiveProductList.pollingStatus
                                       : props.encashmentContractCloseProductList.pollingStatus
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return props.legalInfoProductList.pollingStatus
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return isActiveProductList ? props.acquiringActiveProductList.pollingStatus
                                       : props.acquiringCloseProductList.pollingStatus
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductList.pollingStatus
                                       : props.dboCloseProductList.pollingStatus
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductList.pollingStatus
                                       : props.udboCloseProductList.pollingStatus
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductList.pollingStatus
                                       : props.salaryCloseProductList.pollingStatus
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
        Enums.ProductType.PaymentAccountProduct === productType ||
        Enums.ProductType.PackageProduct === productType ||
        Enums.ProductType.TariffPlanProduct === productType ||
        Enums.ProductType.CustomsPaymentProduct === productType)  : {
            return isActiveProductList ? props.settlementAgreementActiveProductList.pollingStatus
                                       : props.settlementAgreementCloseProductList.pollingStatus
        }
        default: return Enums.ProductPollingStatus.Success
    }
}

const getUpdatingProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): boolean => {
    switch (true) {
        case Enums.ProductType.CreditProduct === productType:
        case Enums.ProductType.BankGuaranteeProduct === productType  : {
                return isActiveProductList ? props.creditActiveProductListUpdating ||
                                             props.creditActiveProductEksListFetching
                                           : props.creditActiveProductListUpdating ||
                                             props.creditCloseProductEksListFetching
        }
        case Enums.ProductType.DepositProduct === productType:
        case Enums.ProductType.ContractNsoProduct === productType:
        case Enums.ProductType.ContractSdoProduct === productType: {
                return isActiveProductList ? props.depositActiveProductListUpdating ||
                                             props.depositActiveProductEksListFetching
                                           : props.depositCloseProductListUpdating  ||
                                             props.depositCloseProductEksListFetching
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
                return isActiveProductList ? props.corporateCardActiveProductListUpdating ||
                                             props.corporateCardActiveProductEksListFetching
                                           : props.corporateCardCloseProductListUpdating  ||
                                             props.corporateCardCloseProductEksListFetching
        }
        case Enums.ProductType.EncashmentProduct === productType:
        case Enums.ProductType.SelfEncashmentProduct === productType: {
                return isActiveProductList ? props.encashmentContractActiveProductListUpdating ||
                                         props.encashmentContractActiveProductEksListFetching
                                       : props.encashmentContractCloseProductListUpdating  ||
                                         props.encashmentContractCloseProductEksListFetching
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
                return props.legalInfoProductListUpdating || props.legalInfoProductEksListFetching
        }
        case Enums.ProductType.AcquiringProduct === productType : {
                return isActiveProductList ? props.acquiringActiveProductListUpdating ||
                                            props.acquiringActiveProductEksListFetching
                                           : props.acquiringCloseProductListUpdating ||
                                             props.acquiringCloseProductEksListFetching
        }
        case Enums.ProductType.DboProduct === productType: {
                return isActiveProductList ? props.dboActiveProductListUpdating ||
                                         props.dboActiveProductEksListFetching
                                       : props.dboCloseProductListUpdating ||
                                         props.dboCloseProductEksListFetching
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
                return isActiveProductList ? props.udboActiveProductListUpdating ||
                                         props.udboActiveProductEksListFetching
                                       : props.udboCloseProductListUpdating ||
                                         props.udboCloseProductEksListFetching
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListUpdating ||
                                         props.salaryActiveProductEksListFetching
                                       : props.salaryCloseProductListUpdating ||
                                         props.salaryCloseProductEksListFetching
        }
        case Enums.ProductType.CashManagementProduct === productType:
        case Enums.ProductType.PaymentAccountProduct === productType:
        case Enums.ProductType.PackageProduct === productType:
        case Enums.ProductType.TariffPlanProduct === productType:
        case Enums.ProductType.CustomsPaymentProduct === productType: {
            return isActiveProductList ? props.settlementAgreementActiveProductListUpdating ||
                                         props.settlementAgreementActiveProductEksListFetching
                                       : props.settlementAgreementCloseProductListUpdating ||
                                         props.settlementAgreementCloseProductEksListFetching
        }
        default: return false
    }
}
const getFetchingProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): boolean =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
        Enums.ProductType.BankGuaranteeProduct === productType)  : {
            return isActiveProductList ? props.creditActiveProductListFetching
                                       : props.creditCloseProductListFetching
        }
        case (Enums.ProductType.DepositProduct === productType ||
        Enums.ProductType.ContractNsoProduct === productType ||
        Enums.ProductType.ContractSdoProduct === productType)  : {
            return isActiveProductList ? props.depositActiveProductListFetching
                                       : props.depositCloseProductListFetching
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
            return isActiveProductList ? props.corporateCardActiveProductListFetching
                                       : props.corporateCardCloseProductListFetching
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
        Enums.ProductType.SelfEncashmentProduct === productType)  : {
            return isActiveProductList ? props.encashmentContractActiveProductListFetching
                                       : props.encashmentContractCloseProductListFetching
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return props.legalInfoProductListFetching
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return isActiveProductList ? props.acquiringActiveProductListFetching
                                       : props.acquiringCloseProductListFetching
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListFetching
                                       : props.dboCloseProductListFetching
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListFetching
                                       : props.udboCloseProductListFetching
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListFetching
                                       : props.salaryCloseProductListFetching
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
        Enums.ProductType.PaymentAccountProduct       === productType ||
        Enums.ProductType.PackageProduct              === productType ||
        Enums.ProductType.TariffPlanProduct           === productType ||
        Enums.ProductType.CustomsPaymentProduct       === productType)  : {
            return isActiveProductList ? props.settlementAgreementActiveProductListFetching
                                       : props.settlementAgreementCloseProductListFetching
        }
        default: return false
    }
}
const getCachedDateProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): Date | null =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
        Enums.ProductType.BankGuaranteeProduct === productType)  : {
            return isActiveProductList ? props.creditActiveProductListCachedDate
                                       : props.creditActiveProductListCachedDate
        }
        case (Enums.ProductType.DepositProduct === productType ||
        Enums.ProductType.ContractNsoProduct === productType ||
        Enums.ProductType.ContractSdoProduct === productType)  : {
            return isActiveProductList ? props.depositActiveProductListCachedDate
                                       : props.depositCloseProductListCachedDate
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
            return isActiveProductList ? props.corporateCardActiveProductListCachedDate
                                       :  props.corporateCardCloseProductListCachedDate
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
        Enums.ProductType.SelfEncashmentProduct === productType)  : {
            return isActiveProductList ? props.encashmentContractActiveProductListCachedDate
                                       : props.encashmentContractCloseProductListCachedDate
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            return props.legalInfoProductListCachedDate
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            return isActiveProductList ? props.acquiringActiveProductListCachedDate
                                       : props.acquiringCloseProductListCachedDate
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListCachedDate
                                       : props.dboCloseProductListCachedDate
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListCachedDate
                                       : props.udboCloseProductListCachedDate
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListCachedDate
                                       : props.salaryCloseProductListCachedDate
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
        Enums.ProductType.PaymentAccountProduct       === productType ||
        Enums.ProductType.PackageProduct              === productType ||
        Enums.ProductType.TariffPlanProduct           === productType ||
        Enums.ProductType.CustomsPaymentProduct       === productType)  : {
            return isActiveProductList ? props.settlementAgreementActiveProductListCachedDate
                : props.settlementAgreementCloseProductListCachedDate
        }
        default: return new Date()
    }
}
const getTypeProductList = (props:IProps, productType: Enums.ProductType, isActiveProductList: boolean): Array<Models.SubProduct> | null =>
{
    switch (true) {
        case Enums.ProductType.CreditProduct === productType : {
            const creditProductList = isActiveProductList ? props.creditActiveProductList
                                                          : props.creditCloseProductList
            return creditProductList &&
                   creditProductList.data.length ? creditProductList.data.filter(
                            (product: Models.CreditProduct): boolean => product.productType == productType && product.creditProduct != null).map(
                            (product: Models.CreditProduct): Models.SubCreditProduct => product.creditProduct as Models.SubCreditProduct) // null are filtered above
                                                  : null
        }
        case Enums.ProductType.BankGuaranteeProduct === productType: {
            const bankGuaranteeProductList = isActiveProductList ? props.creditActiveProductList
                                                             : props.creditCloseProductList
            return bankGuaranteeProductList &&
                   bankGuaranteeProductList.data.length ? bankGuaranteeProductList.data.filter(
                            (product: Models.CreditProduct): boolean => product.productType == productType && product.bankGuaranteeProduct != null).map(
                            (product: Models.CreditProduct): Models.SubBankGuaranteeProduct => product.bankGuaranteeProduct as Models.SubBankGuaranteeProduct) // null are filtered above
                                                        : null
        }
        case Enums.ProductType.DepositProduct === productType :{
            const productDepositList = isActiveProductList ? props.depositActiveProductList
                                                           : props.depositCloseProductList
            return productDepositList &&
                   productDepositList.data.length ? productDepositList.data.filter(
                (product: Models.DepositProduct): boolean => product.productType === productType && product.depositProduct != null).map(
                (product: Models.DepositProduct): Models.SubDepositProduct => product.depositProduct as Models.SubDepositProduct // null are filtered above
            ) : null
        }

        case Enums.ProductType.ContractSdoProduct === productType:{
            const productContractSdoList = isActiveProductList ? props.depositActiveProductList
                                                               : props.depositCloseProductList
            return productContractSdoList &&
                   productContractSdoList.data.length ? productContractSdoList.data.filter(
                            (product: Models.DepositProduct): boolean => product.productType === productType && product.contractSDO != null).map(
                            (product: Models.DepositProduct): Models.SubContractSDOProduct => product.contractSDO as Models.SubContractSDOProduct // null are filtered above
                        ) : null
        }

        case Enums.ProductType.ContractNsoProduct === productType: {
            const productContractNsoList = isActiveProductList ? props.depositActiveProductList
                                                               : props.depositCloseProductList
            return productContractNsoList &&
                   productContractNsoList.data.length ? productContractNsoList.data.filter(
                            (product: Models.DepositProduct): boolean => product.productType === productType && product.contractNSO != null).map(
                            (product: Models.DepositProduct): Models.SubContractNSOProduct => product.contractNSO as Models.SubContractNSOProduct // null are filtered above
                        ) : null
        }
        case Enums.ProductType.CashManagementProduct === productType:{
            const cashManagementProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                                                              : props.settlementAgreementCloseProductList
            return cashManagementProductList &&
                   cashManagementProductList.data.length ? cashManagementProductList.data.filter(
                            (product: Models.SettlementAgreementProduct): boolean => product.productType === productType && product.cashManagementProduct != null).map(
                            (product: Models.SettlementAgreementProduct): Models.SubCashManagementProduct => product.cashManagementProduct as Models.SubCashManagementProduct) // null are filtered above
                                                         : null
        }

        case Enums.ProductType.PaymentAccountProduct === productType: {
            const paymentAccountProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                                                              : props.settlementAgreementCloseProductList
            return paymentAccountProductList &&
                   paymentAccountProductList.data.length ? paymentAccountProductList.data.filter(
                            (product: Models.SettlementAgreementProduct): boolean => product.paymentAccountProduct != null).map(
                            (product: Models.SettlementAgreementProduct): Models.SubPaymentAccountProduct => product.paymentAccountProduct as Models.SubPaymentAccountProduct) // null are filtered above
                                                         : null
        }

        case Enums.ProductType.TariffPlanProduct === productType: {
            const tariffPlanProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                                                          : props.settlementAgreementCloseProductList
            return tariffPlanProductList &&
                   tariffPlanProductList.data.length ? tariffPlanProductList.data.filter(
                            (product: Models.SettlementAgreementProduct): boolean => product.tariffPlanProduct != null).map(
                            (product: Models.SettlementAgreementProduct): Models.SubTariffPlanProduct => product.tariffPlanProduct as Models.SubTariffPlanProduct) // null are filtered above
                                                     : null
        }

        case Enums.ProductType.CustomsPaymentProduct === productType: {
            const customsPaymentProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                                                              : props.settlementAgreementCloseProductList
            return customsPaymentProductList &&
                   customsPaymentProductList.data.length ? customsPaymentProductList.data.filter(
                            (product: Models.SettlementAgreementProduct): boolean => product.customsPaymentProduct != null).map(
                            (product: Models.SettlementAgreementProduct): Models.SubCustomsPaymentProduct => product.customsPaymentProduct as Models.SubCustomsPaymentProduct) // null are filtered above
                                                         : null
        }

        case Enums.ProductType.PackageProduct === productType: {
            const packageProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                                                       : props.settlementAgreementCloseProductList
            return packageProductList &&
                   packageProductList.data.length ? packageProductList.data.filter(
                            (product: Models.SettlementAgreementProduct): boolean => product.packageProduct != null).map(
                            (product: Models.SettlementAgreementProduct): Models.SubPackageProduct => product.packageProduct as Models.SubPackageProduct) // null are filtered above)
                                                   : null
        }

        case Enums.ProductType.CorporateCardProduct === productType : {
            const corporateCardProductList = isActiveProductList ? props.corporateCardActiveProductList
                                                                 : props.corporateCardCloseProductList
            return corporateCardProductList &&
                   corporateCardProductList.data.length ? corporateCardProductList.data.filter(
                            (product: Models.CorporateCardProduct): boolean => product.corporateCardProduct != null).map(
                            (product: Models.CorporateCardProduct): Models.SubCorporateCardProduct => product.corporateCardProduct as Models.SubCorporateCardProduct) // null are filtered above
                                                        : null
        }
        case Enums.ProductType.SelfEncashmentProduct === productType: {
            const selfEncashmentProductList = isActiveProductList ? props.encashmentContractActiveProductList
                                                                 : props.encashmentContractCloseProductList
            return selfEncashmentProductList &&
                   selfEncashmentProductList.data.length ? selfEncashmentProductList.data.filter(
                            (product: Models.EncashmentContractProduct): boolean => product.selfEncashmentContractProduct != null).map(
                            (product: Models.EncashmentContractProduct): Models.SubSelfEncashmentContractProduct => product.selfEncashmentContractProduct as Models.SubSelfEncashmentContractProduct) // null are filtered above
                                                         : null
        }
        case Enums.ProductType.EncashmentProduct === productType: {
            const encashmentProductList = isActiveProductList ? props.encashmentContractActiveProductList
                                                              : props.encashmentContractCloseProductList
            return encashmentProductList &&
                   encashmentProductList.data.length ? encashmentProductList.data.filter(
                            (product: Models.EncashmentContractProduct): boolean => product.encashmentContractProduct != null).map(
                            (product: Models.EncashmentContractProduct): Models.SubEncashmentContractProduct => product.encashmentContractProduct as Models.SubEncashmentContractProduct) // null are filtered above
                                                     : null
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
            const currencyControlProductList = isActiveProductList ? props.legalInfoProductList
                                                                   : null
            return currencyControlProductList && currencyControlProductList.data.length ? currencyControlProductList.data.filter(
                            (product: Models.LegalInfoProduct): boolean => product.legalInfoProduct != null).map(
                            (product: Models.LegalInfoProduct): Models.SubLegalInfoProduct => product.legalInfoProduct as Models.SubLegalInfoProduct) // null are filtered above
                                                                                        : null
        }
        case Enums.ProductType.AcquiringProduct === productType : {
            const acquiringProductList = isActiveProductList ? props.acquiringActiveProductList
                                                             : props.acquiringCloseProductList
            return acquiringProductList &&
                   acquiringProductList.data.length ? acquiringProductList.data.filter(
                            (product: Models.AcquiringProduct): boolean => product.acquiringProduct != null).map(
                            (product: Models.AcquiringProduct): Models.SubAcquiringProduct => product.acquiringProduct as Models.SubAcquiringProduct) // null are filtered above
                                                    : null
        }
        case Enums.ProductType.DboProduct === productType: {
            const dboProductList = isActiveProductList ? props.dboActiveProductList
                                                       : props.dboCloseProductList
            return dboProductList &&
                   dboProductList.data.length ? dboProductList.data.filter(
                            (product: Models.DboProduct): boolean => product.dboProduct != null).map(
                            (product: Models.DboProduct): Models.SubDboProduct => product.dboProduct as Models.SubDboProduct) // null are filtered above
                                                    : null
        }


        case Enums.ProductType.ContractConstructorProduct === productType: {
            const contractConstructorProductList = isActiveProductList ? props.udboActiveProductList
                                                                       : props.udboCloseProductList
            return contractConstructorProductList &&
                   contractConstructorProductList.data.length ? contractConstructorProductList.data.filter(
                            (product: Models.UdboProduct): boolean => product.udboProduct != null).map(
                            (product: Models.UdboProduct): Models.SubUdboProduct => product.udboProduct as Models.SubUdboProduct) // null are filtered above
                                                              : null
        }
        case Enums.ProductType.SalaryProduct === productType: {
            const salaryProductList = isActiveProductList ? props.salaryActiveProductList
                                                          : props.salaryCloseProductList
            return salaryProductList &&
                   salaryProductList.data.length ? salaryProductList.data.filter(
                            (product: Models.SalaryProduct): boolean => product.salaryProduct != null).map(
                            (product: Models.SalaryProduct): Models.SubSalaryProduct => product.salaryProduct as Models.SubSalaryProduct) // null are filtered above
                                                 : null
        }
        default: return []
    }
}
const getSubProductList = (props: IProps, type: Enums.ProductType): ProductTypeRowData => {

    const  isActiveProductList: boolean = isActiveAgreementStatusProductList (props)

    return {
        type,
        isActiveProductList: isActiveAgreementStatusProductList (props),
        key: getProductTypeKey (props, type),
        list: getTypeProductList (props, type, isActiveProductList),
        name: Utils.getProductListTypeName (type),
        onClick: (row: ProductTypeRowData) => onClickProductListRow (row, props),
        error: productListError(props, type),
        eksErrorList: productListEksListError(props, type),
        isUpdating: getUpdatingProductList (props, type, isActiveProductList),
        isFetching: getFetchingProductList (props, type, isActiveProductList ),
        pollingStatus: getPollingStatusProductList (props, type, isActiveProductList),
        listCacheDate: getCachedDateProductList (props, type, isActiveProductList),

    }
}

const getLegalInfo: (props: IProps) => string = (props: IProps): string => {
    const product: Models.LegalInfoProduct | null = props.legalInfoProductList.data && props.legalInfoProductList.data[0] || null
    const info: boolean | null = product && product.legalInfoProduct && product.legalInfoProduct.type || null
    return props.legalInfoProductListError == null
            ? (info ? 'Есть' : 'Нет')
            : ''
}

const isActiveAgreementStatusProductList = (props: IProps): boolean => (
    props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened
)

const onClickProductListRow = (row: ProductTypeRowData, props: IProps): void => {

    const isCurrencyControlProduct = row.type == Enums.ProductType.CurrencyControlProduct

    if (row.isUpdating || row.isFetching || isCurrencyControlProduct) {
        return
    }

    if (row.error && row.isActiveProductList) {

        props.performCallGetUncachedRequestProductList (row.type)
        return
    }

    if (row.eksErrorList && row.isActiveProductList) {
        props.performCallEksRequestProductList (row.type, props.productListAgreementStatus)
        return
    }

    if (row.pollingStatus == Enums.ProductPollingStatus.Success ||
        row.isActiveProductList == false) {

        props.navigateToProductListScreen (row.type)
        return
    }




}

const getProductTypeKey = (props: IProps, type: Enums.ProductType): string => (
    `${ props.productListAgreementStatus }-${ type }`
)

const getProductTypeEksErrorList = (props: IProps, type: Enums.ProductType): Array<Models.EksError> => {
    const isActiveProductList = Utils.isActiveProductList(props.productListAgreementStatus)
    switch (type) {

        case Enums.ProductType.AcquiringProduct: return isActiveProductList
             ? props.acquiringActiveProductList.eksErrorList
             : props.acquiringCloseProductList.eksErrorList

        case Enums.ProductType.BankGuaranteeProduct: return isActiveProductList
            ? props.creditActiveProductList.eksErrorList
            : props.creditCloseProductList.eksErrorList
        case Enums.ProductType.CashManagementProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList
        case Enums.ProductType.ContractConstructorProduct: return isActiveProductList
            ? props.udboActiveProductList.eksErrorList
            : props.udboCloseProductList.eksErrorList
        case Enums.ProductType.ContractNsoProduct: return isActiveProductList
            ? props.depositActiveProductList.eksErrorList
            : props.depositCloseProductList.eksErrorList
        case Enums.ProductType.ContractSdoProduct: return isActiveProductList
            ? props.depositActiveProductList.eksErrorList
            : props.depositCloseProductList.eksErrorList
        case Enums.ProductType.CorporateCardProduct: return isActiveProductList
            ? props.corporateCardActiveProductList.eksErrorList
            : props.corporateCardCloseProductList.eksErrorList
        case Enums.ProductType.CreditProduct: return isActiveProductList
            ? props.creditActiveProductList.eksErrorList
            : props.creditCloseProductList.eksErrorList
        case Enums.ProductType.CurrencyControlProduct: return isActiveProductList
            ? props.legalInfoProductList.eksErrorList
            : []
        case Enums.ProductType.CustomsPaymentProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList
        case Enums.ProductType.DepositProduct: return isActiveProductList
            ? props.depositActiveProductList.eksErrorList
            : props.depositCloseProductList.eksErrorList
        case Enums.ProductType.DboProduct: return isActiveProductList
            ? props.dboActiveProductList.eksErrorList
            : props.dboCloseProductList.eksErrorList
        case Enums.ProductType.EncashmentProduct: return isActiveProductList
            ? props.encashmentContractActiveProductList.eksErrorList
            : props.encashmentContractCloseProductList.eksErrorList
        case Enums.ProductType.PackageProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList
        case Enums.ProductType.PaymentAccountProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList
        case Enums.ProductType.SalaryProduct: return isActiveProductList
            ? props.salaryActiveProductList.eksErrorList
            : props.salaryCloseProductList.eksErrorList
        case Enums.ProductType.SelfEncashmentProduct: return isActiveProductList
            ? props.encashmentContractActiveProductList.eksErrorList
            : props.encashmentContractCloseProductList.eksErrorList
        case Enums.ProductType.TariffPlanProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList
        case Enums.ProductType.None: default: return []

    }
}

const productListError = (props: IProps, type: Enums.ProductType): Models.Error | null => {
    const fetchingError = getProductTypeFetchingError (props, type)

    if (fetchingError != null) {
        return fetchingError
    }

    return null
}
const productListEksListError = (props: IProps, type: Enums.ProductType): Models.EksError[] | null => {

    const eksErrorList = getProductTypeEksErrorList (props, type)

    if (Array.isArray (eksErrorList) && (eksErrorList.length > 0)) {
        return eksErrorList
    }

    return null

}

const getProductTypeErrorText = (props: IProps, row: ProductTypeRowData): React.ReactElement<Text> | null => (

    row.error || row.eksErrorList ? (

        <Text
            testID={ `test-id-${ row.key }-error-text` }
            key={ `${ row.key }-error-text` }
            style={ Styles.productTypeFetchError }
            numberOfLines={ 1 }
            ellipsizeMode={ 'tail' }>

            { row.eksErrorList ? Utils.getProductListItemErrorText(null)
                               : Utils.getProductListItemErrorText(row.error) }
        </Text>

    ) : null

)

const getProductTypeRowDetails = (props: IProps, row: ProductTypeRowData, index: number): React.ReactElement<View> | null=> (
    row.isUpdating ? ( // if (row.isUpdating) { return

        <Text
            testID={ `test-id-${ row.key }-is-fetching` }
            key={ `${ row.key }-is-fetching` }
            style={ Styles.productTypeLoadingText }>

            { Utils.productListItemFetching }
        </Text>

    ) : (row.isActiveProductList && (row.error || row.eksErrorList)) ? ( // } else if (row.hasFailed) { return

        Utils.isClientNotFoundInEksSystem(row.error) == false ? <NavigationIconButton
            testID={ `test-id-${ row.key }-refresh-button` }
            key={ `${ row.key }-refresh-button` }
            type={ NavigationIconButtonType.REFRESH }
            onExecute={() =>  row.onClick(row) }/> : null

    ) : (row.type == Enums.ProductType.CurrencyControlProduct) ? ( // } else if (...) { return

        <Text
            testID={ `test-id-${ row.key }-details` }
            key={ `${ row.key }-details` }
            style={Styles.productTypeDetailsText}>

            { getLegalInfo (props) }
        </Text>

    ) : ( // } else { return

        <View
            testID={ `test-id-${ row.key }-details-view` }
            key={ `${ row.key }-details-view` }
            style={ Styles.productListViewMrmLink }>
            {
                (props.productListAgreementStatus ==
                    Enums.ProductListAgreementStatus.Opened) && (

                    <Text
                        style={ Styles.productListItemValueText }
                        key={ `${ row.key }-product-list-length` }
                        testID={ `test-id-${ row.key }-product-list-length` }>

                        {`${row.list ? row.list.length : 0 }`}
                    </Text>

                )
            }
            <Button
                testID={ `test-id-${ row.key }-chevron-button` }
                key={ `${ row.key }-chevron-button` }
                onExecute={ () => row.onClick(row) }>

                <Icon
                    testID={ `test-id-${ row.key }-chevron` }
                    key={ `${ row.key }-chevron` }
                    disabled
                    type={ IconType.MrmLink }/>
            </Button>
        </View>

    )
)

const getProductTypeRow = (props: IProps, row: ProductTypeRowData, index: number): React.ReactElement<TableRow> | null => (

    <TableRow
        testID={ `test-id-${ row.key }-row` }
        key={ `${ index }-${ row.key }-row` }
        onClick={ ()=> row.onClick(row) }>

        <TableCell
            testID={ `test-id-${ row.key }-cell` }
            key={ `${ index }-${ row.key }-cell` }
            style={[
                Styles.productTypeCell,
                row.isUpdating ? Styles.productTypeCellFetching : {}
            ]}>
             <View
                testID={ `test-id-${ row.key }-cell-view` }
                key={ `${ index }-${ row.key }-cell-view` }
                style={[
                    Styles.productTypeCellView,
                    row.isUpdating ? Styles.productTypeCellViewFetching : {},
                ]}>
                <View
                    testID={ `test-id-${ row.key }-title-view` }
                    key={ `${ index }-title-view` }
                    style={ Styles.productTypeTitleView }>

                    <Text
                        testID={ `test-id-${ row.key }-title` }
                        key={ `${ index }-${ row.key }-title` }
                        style={ Styles.productTypeTitle }
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>
                        { row.name }
                    </Text>
                    { row.isUpdating == false && getProductTypeErrorText (props, row) }
                </View>
                <View
                    testID={ `test-id-${ row.key }-details-view-container` }
                    key={ `${ index }-${ row.key }-details-view-container` }
                    style={ Styles.productTypeDetailView }>
                    { getProductTypeRowDetails (props, row, index) }
                </View>
             </View>
        </TableCell>
    </TableRow>

)

const getLoader = (): React.ReactElement<LoaderWithText> => (
    <View style = {Styles.wrapperLoader}
          testID="test-id-1953e0ea-d5b8-11e7-9296-cec278b6b50a">
        <LoaderWithText text = {"Загрузка данных..."}
                    testID="test-id-5b0e0c6e-d5b7-11e7-9296-cec278b6b50a" />
    </View>
)

const isProductListLoading = (props:IProps): boolean => {
    return props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened && (

            (props.settlementAgreementActiveProductListFetching && !props.settlementAgreementActiveProductListUpdating) ||

            (props.corporateCardActiveProductListFetching && !props.corporateCardActiveProductListUpdating) ||

            (props.depositActiveProductListFetching && !props.depositActiveProductListUpdating) ||

            (props.encashmentContractActiveProductListFetching && !props.encashmentContractActiveProductListUpdating) ||

            (props.salaryActiveProductListFetching && !props.salaryActiveProductListUpdating) ||

            (props.dboActiveProductListFetching && !props.dboActiveProductListUpdating) ||

            (props.creditActiveProductListFetching && !props.creditActiveProductListUpdating) ||

            (props.udboActiveProductListFetching && !props.udboActiveProductListUpdating) ||

            (props.acquiringActiveProductListFetching && !props.acquiringActiveProductListUpdating) ||

            (props.legalInfoProductListFetching && !props.legalInfoProductListUpdating)
    )
}

const isProductListServiceLoaded = (props:IProps, row: ProductTypeRowData): boolean =>{
    switch (props.productListAgreementStatus) {

        case Enums.ProductListAgreementStatus.Opened: {
            return row.error != null ||
                row.eksErrorList != null ||
                row.isUpdating || (
                Array.isArray (row.list) && (row.list.length > 0) || false
            )
        }

        case Enums.ProductListAgreementStatus.Closed: {
            return true
        }

        default: return false
    }
}

const getProductTypeList = (props: IProps) => (
    <View style={ Styles.productTypeListContainer } testID="test-id-b549f050-96f9-11e7-abc4-cec278b6b50a">
        <View testID="test-id-bea36622-96f9-11e7-abc4-cec278b6b50a"
            style={ Styles.productTypeTabSelector }>

            <TabSelector
                style={Styles.tabSelectorProductListAgreementStatus}
                testID="test-id-a4df1740-96f9-11e7-abc4-cec278b6b50a"
                value={`${Utils.getAgreementStatusProductList(props.productListAgreementStatus)}`}
                onChange={(value: number): void => {
                   switch (value){
                   case Enums.ProductListAgreementStatus.Opened:
                       props.performInputProductListAgreementStatus(Enums.ProductListAgreementStatus.Opened)
                       break
                   case Enums.ProductListAgreementStatus.Closed:
                       props.performInputProductListAgreementStatus(Enums.ProductListAgreementStatus.Closed)
                       break
                   /* Перенос функционала в релиз 2018-3
                                      case Enums.ProductListAgreementStatus.Prognostic:
                       props.callGetForecastPrognosticDealList()
                       props.performInputProductListAgreementStatus(Enums.ProductListAgreementStatus.Prognostic)
                       break */
                   }
                   }}>

                <OptionItem
                    value={`${Utils.getAgreementStatusProductList(Enums.ProductListAgreementStatus.Opened)}`}
                    title={`${Utils.getAgreementStatusNameProductList(Enums.ProductListAgreementStatus.Opened)}`}
                    testID="test-id-aaa1ae9a-96f9-11e7-abc4-cec278b6b50a"/>

                <OptionItem
                    value={`${Utils.getAgreementStatusProductList(Enums.ProductListAgreementStatus.Closed)}`}
                    title={`${Utils.getAgreementStatusNameProductList(Enums.ProductListAgreementStatus.Closed)}`}
                    testID="test-id-c6b78c80-96f9-11e7-abc4-cec278b6b50a"/>

                {/* Перенос функционала в релиз 2018-3
                <OptionItem
                    value={`${Utils.getAgreementStatusProductList(Enums.ProductListAgreementStatus.Prognostic)}`}
                    title={`${Utils.getAgreementStatusNameProductList(Enums.ProductListAgreementStatus.Prognostic)}`}
                    testID="test-id-c6b78c80-96f9-11e7-abc4-cec27ab6b50a"/> */}

            </TabSelector>
        </View>
        { isProductListLoading (props) ? getLoader () : null }
        <View testID={ 'test-id-product-type-list-container' } style={ Styles.productTypeListTableContainer }>
            { (props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened ||
            props.productListAgreementStatus == Enums.ProductListAgreementStatus.Closed) ?
                <Table testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f19'>
                    <TableBody testID='test-id-b097154c-7226-7def-f6f9-77bdabbc6ec7'>
                    {
                        getProductTypeRowList(props)
                            .filter((product: ProductTypeRowData) => {
                                const isNotFetching: boolean = product.isFetching === false
                                const isUpdating: boolean = product.isUpdating
                                const hasProductList: boolean = Array.isArray(product.list) ? product.list.length > 0 : false
                                const hasError: boolean  =  product.error || product.eksErrorList ? true : false
                                const isCloseProductList: boolean =  isActiveAgreementStatusProductList (props) === false
                                const isCurrencyControl: boolean = product.type === Enums.ProductType.CurrencyControlProduct
                                return isCloseProductList && isCurrencyControl ? false :
                                    (isUpdating || isCloseProductList || (isNotFetching && (hasProductList || hasError)))
                            })
                            .map ((row: ProductTypeRowData, index: number): React.ReactElement<TableRow> | null => (
                                getProductTypeRow (props, row, index)
                            ))
                    }
                    </TableBody>
                </Table> :
                renderPrognosticProducts(props) }
        </View>
        { getCacheInfoView (props) }
        { alertView (props) }
    </View>
)

const renderPrognosticProducts = (props: IProps): React.ReactElement<View> => {
    const dealListRendered: Array<React.ReactElement<TableCell>> = []
    props.prognosticProductList.data.map((item: Models.ForecastDeal) => {
        dealListRendered.push(productTableCell(item, props))
    })

    return(
        <View testID='test-id-render-prognosic-list-view'>
            {props.prognosticProductListFetching ? getLoader () : null }
            {props.prognosticProductList.data.length === 0 &&
             !props.prognosticProductListError &&
             !props.prognosticProductListFetching &&
                <View testID='test-id-render-prognosic-list-view-no-data'
                    style={{alignSelf: 'center'}}>
                    <Text testID='test-id-5500da0f-71b8-ac55-234f-d1c66706849'>Нет прогнозных продуктов</Text>
                </View>
            }
            {props.prognosticProductListError &&
                <ErrorModal
                    testID={ 'test-id-prognostic-product-list-alert-view' }
                    repeat={ props.prognosticProductListError.code == 'TIMEOUT' ? props.callGetForecastPrognosticDealList : null }
                    cancel={ props.performPrognosticProductListModalAlertHide }
                    titleText={ 'Внимание' }
                    messageText={ 'Не удалось загрузить данные.' }
                    isVisible={ props.isVisiblePrognosticProductListModalAlert }
                    cacheDate={ new Date()}
                />
            }
            {
                !props.prognosticProductListError && props.prognosticProductList.data.length > 0 &&
                props.productListAgreementStatus == Enums.ProductListAgreementStatus.Prognostic &&
                    <View testID='table'>
                        <View testID='header' style={Styles.PrognosticDealsTableHeader}>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a21qaf093ae'
                                style={[Styles.PrognosticCellFirstCol, {marginLeft: 20}]}>
                                <Text
                                    testID='test-id-1a9a0066-eaf2-11e0-80c1-9q214af093a0'
                                    style={Styles.PrognosticCellFirstColText}>Вид продукта</Text>
                            </View>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a21waf093ae'
                                style={Styles.PrognosticCellSecondCol}>
                                <Text
                                    testID='test-id-1a9a9066-eaf2-11e0-80c1-9a214rf093ae'
                                    style={Styles.PrognosticCellSecondColText}>Валюта</Text>
                            </View>
                            <View
                                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe'
                                style={Styles.PrognosticCellThirdCol}>
                                <Text
                                    testID='test-id-1a9a1066-eaf2-11e0-80c1-9a214ag093ae'
                                    style={Styles.PrognosticCellThirdColText}>Дата начала действия</Text>
                            </View>
                            <View testID='flex1' style={Styles.content}/>
                        </View>
                <Table testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f19'>
                    <TableHead testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f19' style={Styles.HideDefaultHeader} />
                    <TableBody testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f00'>
                        {dealListRendered}
                    </TableBody>
                </Table>
                    </View>
            }
        </View>
    )
}
const productTableCell = (item: Models.ForecastDeal, props: IProps):  React.ReactElement<TableCell> => {
    const placeholder = 'Нет данных'
    return(
        <TableRow
            key={item.id}
            testID='test-id-5500da0f-70b8-ac55-234f-d1c667068f50'
            onClick={() => props.navigateToProductForecastDealInfoScreen(item)}>
            <TableCell
                testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214cf013ae'
                style={Styles.PrognosticTableCell}>

                <View
                    testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae'
                    style={Styles.PrognosticCellFirstCol}>
                    <Text
                        testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093a0'
                        style={Styles.PrognosticCellText}>
                        {item.productType.value}
                    </Text>
                </View>
                <View
                    testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae'
                    style={Styles.PrognosticCellSecondCol}>
                    <Text
                        testID='test-id-1a9a9066-eaf2-11e0-80c1-9a214af093ae'
                        style={Styles.PrognosticCellText}>
                        {item.currency.value}
                    </Text>
                </View>
                <View
                    testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae'
                    style={Styles.PrognosticCellThirdCol}>
                    <Text
                        testID='test-id-1a9a1066-eaf2-11e0-80c1-9a214af093ae'
                        style={Styles.PrognosticCellThirdText}>
                        {item.dateBegin ? Utils.format.date(new Date(item.dateBegin)) : placeholder}
                    </Text>
                </View>
                <View
                    testID='test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae'
                    style={Styles.Chevron}>
                    <Button
                        testID={ `test-id-${ item.id }-chevron-button` }
                        key={ `${ item.id }-chevron-button` }
                        onExecute={ () => props.navigateToProductForecastDealInfoScreen(item) }>
                        <Icon
                            testID={ `test-id-${ item.id }-chevron` }
                            key={ `${ item.id }-chevron` }
                            disabled
                            type={ IconType.MrmLink }/>
                    </Button>
                </View>
            </TableCell>
        </TableRow>
    )
}
const promptForceCacheRefresh = (props: IProps): void => (
    props.performProductListModalAlertShow ()
)

const getCacheInfoView = (props: IProps): React.ReactElement<RefreshBar> | null => (
    props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened ? (
    <RefreshBar key = {'refreshBarCustomerProductList'}
                testID='test-id-1a9a0066-eaf2-11e7-80c1-9a214cf093ae'
                title = 'Обновить'
                performRefresh={props.performProductListModalAlertShow}
                date={ getProductTyleListCacheDate (props)}/>
    ) : null
)

const getProductTyleListCacheDate = (props: IProps): Date => {

    const dates: Array<number | null> = ([

        props.creditActiveProductListCachedDate,
        props.depositActiveProductListCachedDate,
        props.settlementAgreementActiveProductListCachedDate,
        props.corporateCardActiveProductListCachedDate,
        props.encashmentContractActiveProductListCachedDate,
        props.acquiringActiveProductListCachedDate,
        props.dboActiveProductListCachedDate,
        props.salaryActiveProductListCachedDate,
        props.udboActiveProductListCachedDate,
        props.legalInfoProductListCachedDate,

    ]).filter ((date: Date | null): boolean => (

        date != null

    )).map ((date: Date): number => (

       typeof date === 'object' && date instanceof Date
           ? date.getTime()
           : 0

    )).sort (($1: number, $2: number): number => ($2 - $1))

    const minDate: number | null = dates.pop () || null

    return minDate ? new Date(minDate) : new Date()
}

const showProps = (props: IProps) => {

}

const getContent = (props: IProps) => {
    if (!props.isDashboardExpandedMode) {
        return (
            <View
                testID='test-id-781710a2-d203-e41e-8b48-e4c341b8574d'
                key="productListContent">
                {getBreadCrumbs(props)}

                <View
                    testID='test-id-8d6e212c-abc6-4588-ef35-f6d666eeaf7b'
                    style={Styles.Header}>
                    {
                        props.customerManaged.legalForm && props.customerManaged.legalForm.value ?
                            <H1
                                testID='test-id-e5bb7370-26bd-d7c0-51e1-83268565fb33'
                                numberOfLines={3}>
                                {props.customerManaged.legalForm.value + ' ' + props.customerManaged.name}
                            </H1> :
                            <H1
                                testID='test-id-cf4e165e-873c-4049-8275-7f0d72f6ba04'
                                numberOfLines={3}>
                                {props.customerManaged.name}
                            </H1>
                    }
                    <Text
                        testID='test-id-a3a5136b-a49f-5461-11fb-e879a489be1f'
                        style={Styles.OrganizationType}>
                        {props.customerManaged.organizationType.value}
                        </Text>
                </View>

                <View
                    testID='test-id-Customer-Managed-Tab-Selector-View'
                    style={Styles.TabWrapper}>
                    {getTabSelector(props)}
                </View>
            </View>
        )
    }
    return null
}


/*
 * UI stateless functional component "CustomerManaged" used in "Customer" screen. Component render customer managed to current user info.
 */

export interface IProps {
    productListAgreementStatus: Enums.ProductListAgreementStatus,
    performInputProductListAgreementStatus:  ModelsCustomer.PERFORM_INPUT_PRODUCT_LIST_AGREEMENT_STATUS,
    navigateToCustomerActivityIncludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_INCLUDE_SCREEN,
    navigateToCustomerActivityExcludeScreen: ModelsCustomer.NAVIGATE_TO_CUSTOMER_ACTIVITY_EXCLUDE_SCREEN,
    navigateToOccasionListScreen: ModelsCustomer.NAVIGATE_TO_OCCASION_LIST_SCREEN,
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
    performProductTypeListForceRefresh: ModelsCustomer.PERFORM_PRODUCT_TYPE_LIST_FORCE_REFRESH,

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
    performCallEksRequestProductList: ModelsCustomer.PERFORM_CALL_EKS_REQUEST_PRODUCT_LIST,
    performCallGetForceRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetCachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
    performCallGetUncachedRequestProductList: ModelsCustomer.PERFORM_CALL_GET_REQUEST_PRODUCT_LIST,
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
    depositCloseProductListUpdating: boolean,
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
    legalInfoProductListUpdating: boolean,
    legalInfoProductListError: Error | null,
    legalInfoProductListCachedDate: Date | null,


    creditActiveProductEksList: Models.CreditProductList,
    creditActiveProductEksListFetching: boolean,
    creditActiveProductEksListError: Error | null,
    creditActiveProductEksListCachedDate: Date | null,

    creditCloseProductEksList: Models.CreditProductList,
    creditCloseProductEksListFetching: boolean,
    creditCloseProductEksListError: Error | null,
    creditCloseProductEksListCachedDate: Date | null,

    settlementAgreementActiveProductEksList: Models.SettlementAgreementProductList,
    settlementAgreementActiveProductEksListFetching: boolean,
    settlementAgreementActiveProductEksListError: Error | null,
    settlementAgreementActiveProductEksListCachedDate: Date | null,

    settlementAgreementCloseProductEksList: Models.SettlementAgreementProductList,
    settlementAgreementCloseProductEksListFetching: boolean,
    settlementAgreementCloseProductEksListError: Error | null,
    settlementAgreementCloseProductEksListCachedDate: Date | null,


    depositActiveProductEksList: Models.DepositProductList,
    depositActiveProductEksListFetching: boolean,
    depositActiveProductEksListError: Error | null,
    depositActiveProductEksListCachedDate: Date | null,

    depositCloseProductEksList: Models.DepositProductList,
    depositCloseProductEksListFetching: boolean,
    depositCloseProductEksListError: Error | null,
    depositCloseProductEksListCachedDate: Date | null,

    corporateCardActiveProductEksList: Models.CorporateCardProductList,
    corporateCardActiveProductEksListFetching: boolean,
    corporateCardActiveProductEksListError: Error | null,
    corporateCardActiveProductEksListCachedDate: Date | null,

    corporateCardCloseProductEksList: Models.CorporateCardProductList,
    corporateCardCloseProductEksListFetching: boolean,
    corporateCardCloseProductEksListError: Error | null,
    corporateCardCloseProductEksListCachedDate: Date | null,

    encashmentContractActiveProductEksList: Models.EncashmentContractProductList,
    encashmentContractActiveProductEksListFetching: boolean,
    encashmentContractActiveProductEksListError: Error | null,
    encashmentContractActiveProductEksListCachedDate: Date | null,

    encashmentContractCloseProductEksList: Models.EncashmentContractProductList,
    encashmentContractCloseProductEksListFetching: boolean,
    encashmentContractCloseProductEksListError: Error | null,
    encashmentContractCloseProductEksListCachedDate: Date | null,

    acquiringActiveProductEksList: Models.AcquiringProductList,
    acquiringActiveProductEksListFetching: boolean,
    acquiringActiveProductEksListError: Error | null,
    acquiringActiveProductEksListCachedDate: Date | null,

    acquiringCloseProductEksList: Models.AcquiringProductList,
    acquiringCloseProductEksListFetching: boolean,
    acquiringCloseProductEksListError: Error | null,
    acquiringCloseProductEksListCachedDate: Date | null,

    dboActiveProductEksList: Models.DboProductList,
    dboActiveProductEksListFetching: boolean,
    dboActiveProductEksListError: Error | null,
    dboActiveProductEksListCachedDate: Date | null,

    dboCloseProductEksList: Models.DboProductList,
    dboCloseProductEksListFetching: boolean,
    dboCloseProductEksListError: Error | null,
    dboCloseProductEksListCachedDate: Date | null,

    udboActiveProductEksList: Models.UdboProductList,
    udboActiveProductEksListFetching: boolean,
    udboActiveProductEksListError: Error | null,
    udboActiveProductEksListCachedDate: Date | null,

    udboCloseProductEksList: Models.UdboProductList,
    udboCloseProductEksListFetching: boolean,
    udboCloseProductEksListError: Error | null,
    udboCloseProductEksListCachedDate: Date | null,

    salaryActiveProductEksList: Models.SalaryProductList,
    salaryActiveProductEksListFetching: boolean,
    salaryActiveProductEksListError: Error | null,
    salaryActiveProductEksListCachedDate: Date | null,

    salaryCloseProductEksList: Models.SalaryProductList,
    salaryCloseProductEksListFetching: boolean,
    salaryCloseProductEksListError: Error | null,
    salaryCloseProductEksListCachedDate: Date | null,

    legalInfoProductEksList: Models.LegalInfoProductList,
    legalInfoProductEksListFetching: boolean,
    legalInfoProductEksListError: Error | null,
    legalInfoProductEksListCachedDate: Date | null,

    performProductListModalAlertShow: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW
    performProductListModalAlertHide: ModelsCustomer.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,
    isVisibleProductListModalAlert: boolean,

    agentList: Models.AgentList,
    agentListFetching: boolean,
    agentListError: Error | null,
    currentOwner: Models.Owner,
    performAgentListCurrentModeRefresh: ModelsAgentList.PERFORM_AGENT_LIST_CURRENT_MODE_REFRESH,
    testID: string,
    performFlush: ModelsCustomer.PERFORM_FLUSH,
    performAgentListFlush: ModelsAgentList.PERFORM_FLUSH,
    navigateToProductListScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    navigateToProductForecastDealInfoScreen: ModelsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    navigateToMemberListScreen: ModelsCustomer.NAVIGATE_TO_MEMBER_LIST_SCREEN,
    navigateToAgentListScreen: ModelsCustomer.NAVIGATE_TO_AGENT_LIST_SCREEN,
    currentUserAd: ModelsApp.UserAd,
    callGetAgentList: ModelsAgentList.CALL_GET_AGENT_LIST,

    // Prognostic products
    prognosticProductList: Models.ForecastDealList,
    prognosticProductListFetching: boolean,
    prognosticProductListError: Error | null,
    isVisiblePrognosticProductListModalAlert: boolean,
    performPrognosticProductListModalAlertHide: ModelsCustomer.PERFORM_PROGNOSTIC_PRODUCT_LIST_MODAL_HIDE,
    callGetForecastPrognosticDealList: ModelsCustomer.CALL_GET_FORECAST_PROGNOSTIC_DEAL_LIST

}

const alertView = (props: IProps): React.ReactElement<View> => (
    <AlertView
        testID={ 'test-id-product-list-alert-view' }
        ok={ props.performProductTypeListForceRefresh }
        cancel={ props.performProductListModalAlertHide }
        title={ 'Внимание' }
        message={ Utils.productListAlertViewMessage }
        isVisible={ props.isVisibleProductListModalAlert }
        />
)

const CustomerManaged: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (
    <View style={Styles.main} testID={'test-id-component-CustomerManaged'}>
        {getContent(props)}
        {getTabContent(props)}
    </View>
)

export default CustomerManaged
