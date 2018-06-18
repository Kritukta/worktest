/**
 * Models for ProductList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Error from "../models/Error";
export interface IProductListState {
    creditActiveProductListFetching: boolean;
    creditActiveProductListError: Error | null;
    creditCloseProductListFetching: boolean;
    creditCloseProductListError: Error | null;
    pollingError: Error | null;
    bhCachedDate: Date | null;
    currencyList: ModelsApp.ClassifierList;
    encumbranceList: Models.ProductEncumbranceList;
    inputCurrency: ModelsApp.Classifier;
    inputEncumbranceList: Models.ProductEncumbranceList;
    isVisibleModalProduct: boolean;
    currentProductListType: Enums.ProductType;
    currentCreditProductList: Models.CreditProductList;
    currentBankGuaranteeProductList: Models.CreditProductList;
    currentCashManagementProductList: Models.SettlementAgreementProductList;
    currentPaymentAccountProductList: Models.SettlementAgreementProductList;
    currentCustomsPaymentProductList: Models.SettlementAgreementProductList;
    currentPackageProductList: Models.SettlementAgreementProductList;
    currentTariffPlanProductList: Models.SettlementAgreementProductList;
    currentDepositProductList: Models.DepositProductList;
    currentContractSdoProductList: Models.DepositProductList;
    currentContractNsoProductList: Models.DepositProductList;
    currentCorporateCardProductList: Models.CorporateCardProductList;
    currentEncashmentProductList: Models.EncashmentContractProductList;
    currentSelfEncashmentProductList: Models.EncashmentContractProductList;
    currentCurrencyControlProductList: Models.LegalInfoProductList;
    currentAcquiringProductList: Models.AcquiringProductList;
    currentDboProductList: Models.DboProductList;
    currentContractConstructorProductList: Models.UdboProductList;
    currentSalaryProductList: Models.SalaryProductList;
    isVisibleRefreshBar: boolean;
    isVisibleProductListModalAlert: boolean;
    currentDeal: Models.ForecastDeal;
    currentEvent: Models.ForecastEvent;
}
export declare const initialState: {
    readonly state: IProductListState;
};
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
    (productType: Enums.ProductType): void;
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
    (productList: Models.CreditProductList): void;
}
export interface FILTER_BANK_GUARANTEE_PRODUCT_LIST {
    (productList: Models.CreditProductList): void;
}
export interface FILTER_CASH_MANAGEMENT_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList): void;
}
export interface FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList): void;
}
export interface FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList): void;
}
export interface FILTER_PACKAGE_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList): void;
}
export interface FILTER_TARIFF_PLAN_PRODUCT_LIST {
    (productList: Models.SettlementAgreementProductList): void;
}
export interface FILTER_DEPOSIT_PRODUCT_LIST {
    (productList: Models.DepositProductList): void;
}
export interface FILTER_CONTRACT_SDO_PRODUCT_LIST {
    (productList: Models.DepositProductList): void;
}
export interface FILTER_CONTRACT_NSO_PRODUCT_LIST {
    (productList: Models.DepositProductList): void;
}
export interface FILTER_CORPORATE_CARD_PRODUCT_LIST {
    (productList: Models.CorporateCardProductList): void;
}
export interface FILTER_ENCASHMENT_PRODUCT_LIST {
    (productList: Models.EncashmentContractProductList): void;
}
export interface FILTER_SELF_ENCASHMENT_PRODUCT_LIST {
    (productList: Models.EncashmentContractProductList): void;
}
export interface FILTER_CURRENCY_CONTROL_PRODUCT_LIST {
    (productList: Models.LegalInfoProductList): void;
}
export interface FILTER_ACQUIRING_PRODUCT_LIST {
    (productList: Models.AcquiringProductList): void;
}
export interface FILTER_DBO_PRODUCT_LIST {
    (productList: Models.DboProductList): void;
}
export interface FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST {
    (productList: Models.UdboProductList): void;
}
export interface FILTER_SALARY_PRODUCT_LIST {
    (productList: Models.SalaryProductList): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST {
    (value: boolean): void;
}
export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW {
    (): void;
}
export interface PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE {
    (): void;
}
