/**
 * Actions of Product container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
export declare const PERFORM_HIDE_PRODUCT = "PRODUCT_CONTAINER_PERFORM_HIDE_PRODUCT";
export declare const PERFORM_CREDIT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CREDIT_PRODUCT_SHOW";
export declare const PERFORM_BANK_GUARANTEE_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_BANK_GUARANTEE_PRODUCT_SHOW";
export declare const PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW";
export declare const PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW";
export declare const PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW";
export declare const PERFORM_PACKAGE_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_PACKAGE_PRODUCT_SHOW";
export declare const PERFORM_TARIFF_PLAN_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_TARIFF_PLAN_PRODUCT_SHOW";
export declare const PERFORM_DEPOSIT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_DEPOSIT_PRODUCT_SHOW";
export declare const PERFORM_CONTRACT_SDO_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CONTRACT_SDO_PRODUCT_SHOW";
export declare const PERFORM_CONTRACT_NSO_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CONTRACT_NSO_PRODUCT_SHOW";
export declare const PERFORM_CORPORATE_CARD_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CORPORATE_CARD_PRODUCT_SHOW";
export declare const PERFORM_ENCASHMENT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_ENCASHMENT_PRODUCT_SHOW";
export declare const PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW";
export declare const PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW";
export declare const PERFORM_ACQUIRING_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_ACQUIRING_PRODUCT_SHOW";
export declare const PERFORM_DBO_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_DBO_PRODUCT_SHOW";
export declare const PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW";
export declare const PERFORM_SALARY_PRODUCT_SHOW = "PRODUCT_CONTAINER_PERFORM_SALARY_PRODUCT_SHOW";
export declare const INPUT_PRODUCT_STATUS = "PRODUCT_CONTAINER_INPUT_PRODUCT_STATUS";
export declare const INPUT_CURRENCY = "PRODUCT_CONTAINER_INPUT_CURRENCY";
export declare const PERFORM_CONTAINER_RESET = "PRODUCT_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_CREDIT_PRODUCT_RESET = "PRODUCT_CONTAINER_PERFORM_CREDIT_PRODUCT_RESET";
export declare const NAVIGATE_TO_PRODUCT_FROM_PUSH = "PRODUCT_CONTAINER_NAVIGATE_TO_PRODUCT_FROM_PUSH";
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to hide product details.
 *
 */
export declare type PERFORM_HIDE_PRODUCT = {};
export declare const performHideProduct: () => Action<PERFORM_HIDE_PRODUCT>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.CreditProduct} value .
 */
export declare type PERFORM_CREDIT_PRODUCT_SHOW = {
    value: Models.CreditProduct;
};
export declare const performCreditProductShow: (value: ModelsCrm.CreditProduct) => Action<PERFORM_CREDIT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to reset product details.
 *
 * @param {Models.CreditProduct} value .
 */
export declare type PERFORM_CREDIT_PRODUCT_RESET = {};
export declare const performCreditProductReset: () => Action<PERFORM_CREDIT_PRODUCT_RESET>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.CreditProduct} value .
 */
export declare type PERFORM_BANK_GUARANTEE_PRODUCT_SHOW = {
    value: Models.CreditProduct;
};
export declare const performBankGuaranteeProductShow: (value: ModelsCrm.CreditProduct) => Action<PERFORM_BANK_GUARANTEE_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export declare type PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW = {
    value: Models.SettlementAgreementProduct;
};
export declare const performCashManagementProductShow: (value: ModelsCrm.SettlementAgreementProduct) => Action<PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export declare type PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW = {
    value: Models.SettlementAgreementProduct;
};
export declare const performPaymentAccountProductShow: (value: ModelsCrm.SettlementAgreementProduct) => Action<PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export declare type PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW = {
    value: Models.SettlementAgreementProduct;
};
export declare const performCustomsPaymentProductShow: (value: ModelsCrm.SettlementAgreementProduct) => Action<PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export declare type PERFORM_PACKAGE_PRODUCT_SHOW = {
    value: Models.SettlementAgreementProduct;
};
export declare const performPackageProductShow: (value: ModelsCrm.SettlementAgreementProduct) => Action<PERFORM_PACKAGE_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export declare type PERFORM_TARIFF_PLAN_PRODUCT_SHOW = {
    value: Models.SettlementAgreementProduct;
};
export declare const performTariffPlanProductShow: (value: ModelsCrm.SettlementAgreementProduct) => Action<PERFORM_TARIFF_PLAN_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DepositProduct} value .
 */
export declare type PERFORM_DEPOSIT_PRODUCT_SHOW = {
    value: Models.DepositProduct;
};
export declare const performDepositProductShow: (value: ModelsCrm.DepositProduct) => Action<PERFORM_DEPOSIT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DepositProduct} value .
 */
export declare type PERFORM_CONTRACT_SDO_PRODUCT_SHOW = {
    value: Models.DepositProduct;
};
export declare const performContractSdoProductShow: (value: ModelsCrm.DepositProduct) => Action<PERFORM_CONTRACT_SDO_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DepositProduct} value .
 */
export declare type PERFORM_CONTRACT_NSO_PRODUCT_SHOW = {
    value: Models.DepositProduct;
};
export declare const performContractNsoProductShow: (value: ModelsCrm.DepositProduct) => Action<PERFORM_CONTRACT_NSO_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.CorporateCardProduct} value .
 */
export declare type PERFORM_CORPORATE_CARD_PRODUCT_SHOW = {
    value: Models.CorporateCardProduct;
};
export declare const performCorporateCardProductShow: (value: ModelsCrm.CorporateCardProduct) => Action<PERFORM_CORPORATE_CARD_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.EncashmentContractProduct} value .
 */
export declare type PERFORM_ENCASHMENT_PRODUCT_SHOW = {
    value: Models.EncashmentContractProduct;
};
export declare const performEncashmentProductShow: (value: ModelsCrm.EncashmentContractProduct) => Action<PERFORM_ENCASHMENT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.EncashmentContractProduct} value .
 */
export declare type PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW = {
    value: Models.EncashmentContractProduct;
};
export declare const performSelfEncashmentProductShow: (value: ModelsCrm.EncashmentContractProduct) => Action<PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.LegalInfoProduct} value .
 */
export declare type PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW = {
    value: Models.LegalInfoProduct;
};
export declare const performCurrencyControlProductShow: (value: ModelsCrm.LegalInfoProduct) => Action<PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.AcquiringProduct} value .
 */
export declare type PERFORM_ACQUIRING_PRODUCT_SHOW = {
    value: Models.AcquiringProduct;
};
export declare const performAcquiringProductShow: (value: ModelsCrm.AcquiringProduct) => Action<PERFORM_ACQUIRING_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DboProduct} value .
 */
export declare type PERFORM_DBO_PRODUCT_SHOW = {
    value: Models.DboProduct;
};
export declare const performDboProductShow: (value: ModelsCrm.DboProduct) => Action<PERFORM_DBO_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.UdboProduct} value .
 */
export declare type PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW = {
    value: Models.UdboProduct;
};
export declare const performContractConstructorProductShow: (value: ModelsCrm.UdboProduct) => Action<PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SalaryProduct} value .
 */
export declare type PERFORM_SALARY_PRODUCT_SHOW = {
    value: Models.SalaryProduct;
};
export declare const performSalaryProductShow: (value: ModelsCrm.SalaryProduct) => Action<PERFORM_SALARY_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched on change product status filter.
 *
 * @param {Enums.ProductStatus} value .
 */
export declare type INPUT_PRODUCT_STATUS = {
    value: Enums.ProductStatus;
};
export declare const inputProductStatus: (value: Enums.ProductStatus) => Action<INPUT_PRODUCT_STATUS>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched on change currency filter.
 *
 * @param {Enums.Currency} value .
 */
export declare type INPUT_CURRENCY = {
    value: Enums.Currency;
};
export declare const inputCurrency: (value: Enums.Currency) => Action<INPUT_CURRENCY>;
/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
export declare type NAVIGATE_TO_PRODUCT_FROM_PUSH = {};
export declare const navigateToProductFromPush: () => Action<NAVIGATE_TO_PRODUCT_FROM_PUSH>;
