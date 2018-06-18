/*
 * Created by Burnaev M.U.
 */

import React from 'react'

import { View } from 'ufs-mobile-platform'
import { Enums } from '../Enums'
import { Models } from "mrmkmcib-crm"
import { LoaderWithText } from 'mrmkmcib-app'

import Styles from './styles/ViewProductStyles'

import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"

import ContainerProductAcquiring from '../containers/ContainerProductAcquiring'
import ContainerProductBankGuarantee from '../containers/ContainerProductBankGuarantee'
import ContainerProductCashManagement from '../containers/ContainerProductCashManagement'
import ContainerProductContractConstructor from '../containers/ContainerProductContractConstructor'
import ContainerProductContractNso from '../containers/ContainerProductContractNso'
import ContainerProductContractSdo from '../containers/ContainerProductContractSdo'
import ContainerProductCorporateCard from '../containers/ContainerProductCorporateCard'
import ContainerProductCredit from '../containers/ContainerProductCredit'
import ContainerProductDeposit from '../containers/ContainerProductDeposit'
import ContainerProductDbo from '../containers/ContainerProductDbo'
import ContainerProductEncashment from '../containers/ContainerProductEncashment'
import ContainerProductPackage from '../containers/ContainerProductPackage'
import ContainerProductPaymentAccount from '../containers/ContainerProductPaymentAccount'
import ContainerProductSalary from '../containers/ContainerProductSalary'
import ContainerProductSelfEncashment from '../containers/ContainerProductSelfEncashment'
import ContainerProductTariffPlan from '../containers/ContainerProductTariffPlan'

const getContent = (props: IProps) => {
    if (props.navigationInProgress) {
        return (
            <View
                testID='test-id-45b79a4d-56b4-4458-92b1-906d20123623'
                style={Styles.loaderWrapper}>
                <LoaderWithText
                    testID='test-id-05de89c8-49f7-4097-b7af-4d84947350e2'
                    text={'Загрузка данных'}
                />
            </View>
        )
    }

    switch (props.currentProductType) {

        case Enums.ProductType.AcquiringProduct: return (
            <ContainerProductAcquiring testID={ "ContainerProductAcquiring" }/>
        )

        case Enums.ProductType.BankGuaranteeProduct: return (
            <ContainerProductBankGuarantee testID={ "ContainerProductBankGuarantee" }/>
        )
        
        case Enums.ProductType.CashManagementProduct: return (
            <ContainerProductCashManagement testID={ "ContainerProductCashManagement" }/>
        )

        case Enums.ProductType.CreditProduct: return (
            <ContainerProductCredit testID={ "ContainerProductCredit" }/>
        )
        
        case Enums.ProductType.ContractConstructorProduct: return (
            <ContainerProductContractConstructor testID={ "ContainerProductContractConstructor" }/>
        )
        
        case Enums.ProductType.ContractNsoProduct: return (
            <ContainerProductContractNso testID={ "ContainerProductContractNso" }/>
        )
        
        case Enums.ProductType.ContractSdoProduct: return (
            <ContainerProductContractSdo testID={ "ContainerProductContractSdo" }/>
        )
        
        case Enums.ProductType.CorporateCardProduct: return (
            <ContainerProductCorporateCard testID={ "ContainerProductCorporateCard" }/>
        )
        
        case Enums.ProductType.DepositProduct: return (
            <ContainerProductDeposit testID={ "ContainerProductDeposit" }/>
        )

        case Enums.ProductType.DboProduct: return (
            <ContainerProductDbo testID={ "ContainerProductDbo" }/>
        )

        case Enums.ProductType.EncashmentProduct: return (
            <ContainerProductEncashment testID={ "ContainerProductEncashment" }/>
        )
        
        case Enums.ProductType.PackageProduct: return (
            <ContainerProductPackage testID={ "ContainerProductPackage" }/>
        )
        
        case Enums.ProductType.PaymentAccountProduct: return (
            <ContainerProductPaymentAccount testID={'ContainerProductPaymentAccount'}/>
        )

        case Enums.ProductType.SalaryProduct: return (
            <ContainerProductSalary testID={ "ContainerProductSalary" }/>
        )
        
        case Enums.ProductType.SelfEncashmentProduct: return (
            <ContainerProductSelfEncashment testID={ "ContainerProductSelfEncashment" }/>
        )

        case Enums.ProductType.TariffPlanProduct: return (
            <ContainerProductTariffPlan testID={ "ContainerProductTariffPlan" }/>
        )
              
        default: return (
            <View testID='test-id-undefined-product-view'/>
        )

    }
}


/*
 * UI stateless functional component presenter for "Product" container.
 */

export interface IProps {
    performHideProduct: ModelsProduct.PERFORM_HIDE_PRODUCT,
    performCreditProductShow: ModelsProduct.PERFORM_CREDIT_PRODUCT_SHOW,
    performBankGuaranteeProductShow: ModelsProduct.PERFORM_BANK_GUARANTEE_PRODUCT_SHOW,
    performCashManagementProductShow: ModelsProduct.PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW,
    performPaymentAccountProductShow: ModelsProduct.PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW,
    performCustomsPaymentProductShow: ModelsProduct.PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW,
    performPackageProductShow: ModelsProduct.PERFORM_PACKAGE_PRODUCT_SHOW,
    performTariffPlanProductShow: ModelsProduct.PERFORM_TARIFF_PLAN_PRODUCT_SHOW,
    performDepositProductShow: ModelsProduct.PERFORM_DEPOSIT_PRODUCT_SHOW,
    performContractSdoProductShow: ModelsProduct.PERFORM_CONTRACT_SDO_PRODUCT_SHOW,
    performContractNsoProductShow: ModelsProduct.PERFORM_CONTRACT_NSO_PRODUCT_SHOW,
    performCorporateCardProductShow: ModelsProduct.PERFORM_CORPORATE_CARD_PRODUCT_SHOW,
    performEncashmentProductShow: ModelsProduct.PERFORM_ENCASHMENT_PRODUCT_SHOW,
    performSelfEncashmentProductShow: ModelsProduct.PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW,
    performCurrencyControlProductShow: ModelsProduct.PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW,
    performAcquiringProductShow: ModelsProduct.PERFORM_ACQUIRING_PRODUCT_SHOW,
    performDboProductShow: ModelsProduct.PERFORM_DBO_PRODUCT_SHOW,
    performContractConstructorProductShow: ModelsProduct.PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW,
    performSalaryProductShow: ModelsProduct.PERFORM_SALARY_PRODUCT_SHOW,
    inputProductStatus: ModelsProduct.INPUT_PRODUCT_STATUS,
    inputCurrency: ModelsProduct.INPUT_CURRENCY,
    performContainerReset: ModelsProduct.PERFORM_CONTAINER_RESET,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    performModalProductHide: ModelsProductList.PERFORM_MODAL_PRODUCT_HIDE,
    currentProductType: Enums.ProductType,
    currentCreditProduct: Models.CreditProduct,
    currentBankGuaranteeProduct: Models.CreditProduct,
    currentCashManagementProduct: Models.SettlementAgreementProduct,
    currentPaymentAccountProduct: Models.SettlementAgreementProduct,
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct,
    currentPackageProduct: Models.SettlementAgreementProduct,
    currentTariffPlanProduct: Models.SettlementAgreementProduct,
    currentDepositProduct: Models.DepositProduct,
    currentContractSdoProduct: Models.DepositProduct,
    currentContractNsoProduct: Models.DepositProduct,
    currentCorporateCardProduct: Models.CorporateCardProduct,
    currentEncashmentProduct: Models.EncashmentContractProduct,
    currentSelfEncashmentProduct: Models.EncashmentContractProduct,
    currentCurrencyControlProduct: Models.LegalInfoProduct,
    currentAcquiringProduct: Models.AcquiringProduct,
    currentDboProduct: Models.DboProduct,
    currentContractConstructorProduct: Models.UdboProduct,
    currentSalaryProduct: Models.SalaryProduct,
    currentProductStatus: Enums.ProductStatus,
    currentCurrency: Enums.Currency,
    currentCustomerManaged: Models.CustomerManaged,
    navigationInProgress: boolean,
    testID: string
}

const ViewProduct: React.StatelessComponent<IProps> = (props: IProps): React.ReactElement<View> => (

    getContent(props)

)

export default ViewProduct
