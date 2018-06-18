/**
 * Models for Product container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
export interface IProductState {
    currentProductType: Enums.ProductType;
    currentCreditProduct: Models.CreditProduct;
    currentBankGuaranteeProduct: Models.CreditProduct;
    currentCashManagementProduct: Models.SettlementAgreementProduct;
    currentPaymentAccountProduct: Models.SettlementAgreementProduct;
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct;
    currentPackageProduct: Models.SettlementAgreementProduct;
    currentTariffPlanProduct: Models.SettlementAgreementProduct;
    currentDepositProduct: Models.DepositProduct;
    currentContractSdoProduct: Models.DepositProduct;
    currentContractNsoProduct: Models.DepositProduct;
    currentCorporateCardProduct: Models.CorporateCardProduct;
    currentEncashmentProduct: Models.EncashmentContractProduct;
    currentSelfEncashmentProduct: Models.EncashmentContractProduct;
    currentCurrencyControlProduct: Models.LegalInfoProduct;
    currentAcquiringProduct: Models.AcquiringProduct;
    currentDboProduct: Models.DboProduct;
    currentContractConstructorProduct: Models.UdboProduct;
    currentSalaryProduct: Models.SalaryProduct;
    currentProductStatus: Enums.ProductStatus;
    currentCurrency: Enums.Currency;
    navigationInProgress: boolean;
    productContextMode: Enums.ProductContextMode;
}
export declare const initialState: {
    readonly state: IProductState;
};
export interface PERFORM_HIDE_PRODUCT {
    (): void;
}
export interface PERFORM_CREDIT_PRODUCT_SHOW {
    (value: Models.CreditProduct): void;
}
export interface PERFORM_BANK_GUARANTEE_PRODUCT_SHOW {
    (value: Models.CreditProduct): void;
}
export interface PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct): void;
}
export interface PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct): void;
}
export interface PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct): void;
}
export interface PERFORM_PACKAGE_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct): void;
}
export interface PERFORM_TARIFF_PLAN_PRODUCT_SHOW {
    (value: Models.SettlementAgreementProduct): void;
}
export interface PERFORM_DEPOSIT_PRODUCT_SHOW {
    (value: Models.DepositProduct): void;
}
export interface PERFORM_CONTRACT_SDO_PRODUCT_SHOW {
    (value: Models.DepositProduct): void;
}
export interface PERFORM_CONTRACT_NSO_PRODUCT_SHOW {
    (value: Models.DepositProduct): void;
}
export interface PERFORM_CORPORATE_CARD_PRODUCT_SHOW {
    (value: Models.CorporateCardProduct): void;
}
export interface PERFORM_ENCASHMENT_PRODUCT_SHOW {
    (value: Models.EncashmentContractProduct): void;
}
export interface PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW {
    (value: Models.EncashmentContractProduct): void;
}
export interface PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW {
    (value: Models.LegalInfoProduct): void;
}
export interface PERFORM_ACQUIRING_PRODUCT_SHOW {
    (value: Models.AcquiringProduct): void;
}
export interface PERFORM_DBO_PRODUCT_SHOW {
    (value: Models.DboProduct): void;
}
export interface PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW {
    (value: Models.UdboProduct): void;
}
export interface PERFORM_SALARY_PRODUCT_SHOW {
    (value: Models.SalaryProduct): void;
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
