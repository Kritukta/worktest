/**
 * Models for ProductList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"


const defaultState = {
    get state(): IProductListState {
        return {

            pollingError: null,  // State parameter displayed in "ProductList" screen.
            bhCachedDate: null,  // State parameter displayed in "ProductList" screen.
            currencyList: defaultValues.ClassifierList,  // State parameter displayed in "ProductList" screen.
            encumbranceList: defaultValues.EncumbranceList,  // State parameter displayed in "ProductList" screen.
            inputCurrency: defaultValues.Classifier,  // State parameter displayed in "ProductList" screen.
            inputEncumbranceList: defaultValues.EncumbranceList,  // State parameter displayed in "ProductList" screen.
            isVisibleModalProduct: false,  // State parameter displayed in "ProductList" screen.
            currentProductListType: Enums.ProductType.None,  // State parameter displayed in "ProductList" screen.
            currentCreditProductList: defaultValues.CreditProductList,  // State parameter displayed in "ProductList" screen.
            currentBankGuaranteeProductList: defaultValues.CreditProductList,  // State parameter displayed in "ProductList" screen.
            currentCashManagementProductList: defaultValues.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
            currentPaymentAccountProductList: defaultValues.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
            currentCustomsPaymentProductList: defaultValues.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
            currentPackageProductList: defaultValues.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
            currentTariffPlanProductList: defaultValues.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
            currentDepositProductList: defaultValues.DepositProductList,  // State parameter displayed in "ProductList" screen.
            currentContractSdoProductList: defaultValues.DepositProductList,  // State parameter displayed in "ProductList" screen.
            currentContractNsoProductList: defaultValues.DepositProductList,  // State parameter displayed in "ProductList" screen.
            currentCorporateCardProductList: defaultValues.CorporateCardProductList,  // State parameter displayed in "ProductList" screen.
            currentEncashmentProductList: defaultValues.EncashmentContractProductList,  // State parameter displayed in "ProductList" screen.
            currentSelfEncashmentProductList: defaultValues.EncashmentContractProductList,  // State parameter displayed in "ProductList" screen.
            currentCurrencyControlProductList: defaultValues.LegalInfoProductList,  // State parameter displayed in "ProductList" screen.
            currentAcquiringProductList: defaultValues.AcquiringProductList,  // State parameter displayed in "ProductList" screen.
            currentDboProductList: defaultValues.DboProductList,  // State parameter displayed in "ProductList" screen.
            currentContractConstructorProductList: defaultValues.UdboProductList,  // State parameter displayed in "ProductList" screen.
            currentSalaryProductList: defaultValues.SalaryProductList,  // State parameter displayed in "ProductList" screen.

            creditActiveProductListFetching: false,
            creditActiveProductListError: null,
            creditCloseProductListFetching: false,
            creditCloseProductListError: null,
            isVisibleRefreshBar: true,
            isVisibleProductListModalAlert: false,
            // TODO Describe ProductList reducer state.
            currentDeal: defaultValues.ForecastDeal,
            currentEvent: defaultValues.ForecastEvent

        }
    }
}

export interface IProductListState {

    creditActiveProductListFetching: boolean,
    creditActiveProductListError: Error | null,
    creditCloseProductListFetching: boolean,
    creditCloseProductListError: Error | null,

    pollingError: Error | null,  // State parameter displayed in "ProductList" screen.
    bhCachedDate: Date | null,  // State parameter displayed in "ProductList" screen.
    currencyList: ModelsApp.ClassifierList,  // State parameter displayed in "ProductList" screen.
    encumbranceList: Models.ProductEncumbranceList, // State parameter displayed in "ProductList" screen.
    inputCurrency: ModelsApp.Classifier,  // State parameter displayed in "ProductList" screen.
    inputEncumbranceList: Models.ProductEncumbranceList,  // State parameter displayed in "ProductList" screen.
    isVisibleModalProduct: boolean,  // State parameter displayed in "ProductList" screen.
    currentProductListType: Enums.ProductType,  // State parameter displayed in "ProductList" screen.
    currentCreditProductList: Models.CreditProductList,  // State parameter displayed in "ProductList" screen.
    currentBankGuaranteeProductList: Models.CreditProductList,  // State parameter displayed in "ProductList" screen.
    currentCashManagementProductList: Models.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
    currentPaymentAccountProductList: Models.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
    currentCustomsPaymentProductList: Models.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
    currentPackageProductList: Models.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
    currentTariffPlanProductList: Models.SettlementAgreementProductList,  // State parameter displayed in "ProductList" screen.
    currentDepositProductList: Models.DepositProductList,  // State parameter displayed in "ProductList" screen.
    currentContractSdoProductList: Models.DepositProductList,  // State parameter displayed in "ProductList" screen.
    currentContractNsoProductList: Models.DepositProductList,  // State parameter displayed in "ProductList" screen.
    currentCorporateCardProductList: Models.CorporateCardProductList,  // State parameter displayed in "ProductList" screen.
    currentEncashmentProductList: Models.EncashmentContractProductList,  // State parameter displayed in "ProductList" screen.
    currentSelfEncashmentProductList: Models.EncashmentContractProductList,  // State parameter displayed in "ProductList" screen.
    currentCurrencyControlProductList: Models.LegalInfoProductList,  // State parameter displayed in "ProductList" screen.
    currentAcquiringProductList: Models.AcquiringProductList,  // State parameter displayed in "ProductList" screen.
    currentDboProductList: Models.DboProductList,  // State parameter displayed in "ProductList" screen.
    currentContractConstructorProductList: Models.UdboProductList,  // State parameter displayed in "ProductList" screen.
    currentSalaryProductList: Models.SalaryProductList,  // State parameter displayed in "ProductList" screen.
    isVisibleRefreshBar: boolean, // Flag that manages "ProductList" cache info bar visibility
    isVisibleProductListModalAlert: boolean, // Flag that manages "ProductList" force update alert visibility
    currentDeal: Models.ForecastDeal,
    currentEvent: Models.ForecastEvent
    // TODO Describe ProductList reducer state.


}

export const initialState = {
    get state(): IProductListState {
        return defaultState.state
    }
}


export interface PERFORM_INPUT_CURRENCY {
    (value: ModelsApp.Classifier): void;
}

export interface PERFORM_INPUT_ENCUMBRANCE {
    (value: Models.ProductEncumbrance): void;
}

export interface PERFORM_MODAL_PRODUCT_SHOW {
    (): void;
}

export interface PERFORM_MODAL_PRODUCT_HIDE {
    (): void;
}

export interface NAVIGATE_TO_PRODUCT {
    (): void;
}

export interface NAVIGATE_PRODUCT_LIST_BACK {
    (): void;
}

export interface NAVIGATE_TO_PRODUCT_LIST_SCREEN {
    (productType: Enums.ProductType,): void;
}

export interface NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN {
    (deal: Models.ForecastDeal): void;
}

export interface NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN {
    (event: Models.ForecastEvent): void;
}


export interface FILTER_PRODUCT_LIST {
    (): void;
}

export interface FILTER_CREDIT_PRODUCT_LIST {
    (productList: Models.CreditProductList,): void;
}

export interface FILTER_BANK_GUARANTEE_PRODUCT_LIST {
    (productList: Models.CreditProductList,): void;
}

export interface FILTER_CASH_MANAGEMENT_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList,): void;
}

export interface FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList,): void;
}

export interface FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList,): void;
}

export interface FILTER_PACKAGE_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList,): void;
}

export interface FILTER_TARIFF_PLAN_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList,): void;
}

export interface FILTER_DEPOSIT_PRODUCT_LIST {
    (productList: Models.DepositProductList,): void;
}

export interface FILTER_CONTRACT_SDO_PRODUCT_LIST {
    (productList: Models.DepositProductList,): void;
}

export interface FILTER_CONTRACT_NSO_PRODUCT_LIST {
    (productList: Models.DepositProductList,): void;
}

export interface FILTER_CORPORATE_CARD_PRODUCT_LIST {
    (productList: Models.CorporateCardProductList,): void;
}

export interface FILTER_ENCASHMENT_PRODUCT_LIST {
    (productList: Models.EncashmentContractProductList,): void;
}

export interface FILTER_SELF_ENCASHMENT_PRODUCT_LIST {
    (productList: Models.EncashmentContractProductList,): void;
}

export interface FILTER_CURRENCY_CONTROL_PRODUCT_LIST {
    (productList: Models.LegalInfoProductList,): void;
}

export interface FILTER_ACQUIRING_PRODUCT_LIST {
    (productList: Models.AcquiringProductList,): void;
}

export interface FILTER_DBO_PRODUCT_LIST {
    (productList: Models.DboProductList,): void;
}

export interface FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST {
    (productList: Models.UdboProductList,): void;
}

export interface FILTER_SALARY_PRODUCT_LIST {
    (productList: Models.SalaryProductList,): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST {
    (value: boolean): void
}

export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW {
    (): void;
}

export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE {
    (): void;
}