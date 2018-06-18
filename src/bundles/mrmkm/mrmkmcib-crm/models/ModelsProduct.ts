/**
 * Models for Product container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"

// TODO Describe models used in Product actions and thunks.


const defaultState = {
    get state(): IProductState {
        return {

            currentProductType: Enums.ProductType.None,  // State parameter displayed in "Product" screen. 
            currentCreditProduct: defaultValues.CreditProduct,  // State parameter displayed in "Product" screen. 
            currentBankGuaranteeProduct: defaultValues.CreditProduct,  // State parameter displayed in "Product" screen. 
            currentCashManagementProduct: defaultValues.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
            currentPaymentAccountProduct: defaultValues.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
            currentCustomsPaymentProduct: defaultValues.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
            currentPackageProduct: defaultValues.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
            currentTariffPlanProduct: defaultValues.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
            currentDepositProduct: defaultValues.DepositProduct,  // State parameter displayed in "Product" screen. 
            currentContractSdoProduct: defaultValues.DepositProduct,  // State parameter displayed in "Product" screen. 
            currentContractNsoProduct: defaultValues.DepositProduct,  // State parameter displayed in "Product" screen. 
            currentCorporateCardProduct: defaultValues.CorporateCardProduct,  // State parameter displayed in "Product" screen. 
            currentEncashmentProduct: defaultValues.EncashmentContractProduct,  // State parameter displayed in "Product" screen. 
            currentSelfEncashmentProduct: defaultValues.EncashmentContractProduct,  // State parameter displayed in "Product" screen. 
            currentCurrencyControlProduct: defaultValues.LegalInfoProduct,  // State parameter displayed in "Product" screen. 
            currentAcquiringProduct: defaultValues.AcquiringProduct,  // State parameter displayed in "Product" screen. 
            currentDboProduct: defaultValues.DboProduct,  // State parameter displayed in "Product" screen. 
            currentContractConstructorProduct: defaultValues.UdboProduct,  // State parameter displayed in "Product" screen. 
            currentSalaryProduct: defaultValues.SalaryProduct,  // State parameter displayed in "Product" screen. 
            currentProductStatus: Enums.ProductStatus.None,  // State parameter displayed in "Product" screen. 
            currentCurrency: Enums.Currency.None,  // State parameter displayed in "Product" screen.
            navigationInProgress: false,

            productContextMode: Enums.ProductContextMode.None,

            // TODO Describe Product reducer state.


        }
    }
}

export interface IProductState {

    currentProductType: Enums.ProductType,  // State parameter displayed in "Product" screen. 
    currentCreditProduct: Models.CreditProduct,  // State parameter displayed in "Product" screen. 
    currentBankGuaranteeProduct: Models.CreditProduct,  // State parameter displayed in "Product" screen. 
    currentCashManagementProduct: Models.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
    currentPaymentAccountProduct: Models.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
    currentPackageProduct: Models.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
    currentTariffPlanProduct: Models.SettlementAgreementProduct,  // State parameter displayed in "Product" screen. 
    currentDepositProduct: Models.DepositProduct,  // State parameter displayed in "Product" screen. 
    currentContractSdoProduct: Models.DepositProduct,  // State parameter displayed in "Product" screen. 
    currentContractNsoProduct: Models.DepositProduct,  // State parameter displayed in "Product" screen. 
    currentCorporateCardProduct: Models.CorporateCardProduct,  // State parameter displayed in "Product" screen. 
    currentEncashmentProduct: Models.EncashmentContractProduct,  // State parameter displayed in "Product" screen. 
    currentSelfEncashmentProduct: Models.EncashmentContractProduct,  // State parameter displayed in "Product" screen. 
    currentCurrencyControlProduct: Models.LegalInfoProduct,  // State parameter displayed in "Product" screen. 
    currentAcquiringProduct: Models.AcquiringProduct,  // State parameter displayed in "Product" screen. 
    currentDboProduct: Models.DboProduct,  // State parameter displayed in "Product" screen. 
    currentContractConstructorProduct: Models.UdboProduct,  // State parameter displayed in "Product" screen. 
    currentSalaryProduct: Models.SalaryProduct,  // State parameter displayed in "Product" screen. 
    currentProductStatus: Enums.ProductStatus,  // State parameter displayed in "Product" screen. 
    currentCurrency: Enums.Currency,  // State parameter displayed in "Product" screen.
    navigationInProgress: boolean,
    productContextMode: Enums.ProductContextMode,



    // TODO Describe Product reducer state.


}

export const initialState = {
    get state(): IProductState {
        return defaultState.state
    }
}


export interface PERFORM_HIDE_PRODUCT {
    (): void;
}

export interface PERFORM_CREDIT_PRODUCT_SHOW {
    (value: Models.CreditProduct,): void;
}

export interface PERFORM_BANK_GUARANTEE_PRODUCT_SHOW {
    (value: Models.CreditProduct,): void;
}

export interface PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct,): void;
}

export interface PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct,): void;
}

export interface PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct,): void;
}

export interface PERFORM_PACKAGE_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct,): void;
}

export interface PERFORM_TARIFF_PLAN_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct,): void;
}

export interface PERFORM_DEPOSIT_PRODUCT_SHOW {
    (value: Models.DepositProduct,): void;
}

export interface PERFORM_CONTRACT_SDO_PRODUCT_SHOW {
    (value: Models.DepositProduct,): void;
}

export interface PERFORM_CONTRACT_NSO_PRODUCT_SHOW {
    (value: Models.DepositProduct,): void;
}

export interface PERFORM_CORPORATE_CARD_PRODUCT_SHOW {
    (value: Models.CorporateCardProduct,): void;
}

export interface PERFORM_ENCASHMENT_PRODUCT_SHOW {
    (value: Models.EncashmentContractProduct,): void;
}

export interface PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW {
    (value: Models.EncashmentContractProduct,): void;
}

export interface PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW {
    (value: Models.LegalInfoProduct,): void;
}

export interface PERFORM_ACQUIRING_PRODUCT_SHOW {
    (value: Models.AcquiringProduct,): void;
}

export interface PERFORM_DBO_PRODUCT_SHOW {
    (value: Models.DboProduct,): void;
}

export interface PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW {
    (value: Models.UdboProduct,): void;
}

export interface PERFORM_SALARY_PRODUCT_SHOW {
    (value: Models.SalaryProduct,): void;
}

export interface INPUT_PRODUCT_STATUS {
    (value: Enums.ProductStatus): void;
}

export interface INPUT_CURRENCY {
    (value: Enums.Currency): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}