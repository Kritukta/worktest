/**
 * Actions of Product container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_HIDE_PRODUCT = 'PRODUCT_CONTAINER_PERFORM_HIDE_PRODUCT';
export const PERFORM_CREDIT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CREDIT_PRODUCT_SHOW';
export const PERFORM_BANK_GUARANTEE_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_BANK_GUARANTEE_PRODUCT_SHOW';
export const PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW';
export const PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW';
export const PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW';
export const PERFORM_PACKAGE_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_PACKAGE_PRODUCT_SHOW';
export const PERFORM_TARIFF_PLAN_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_TARIFF_PLAN_PRODUCT_SHOW';
export const PERFORM_DEPOSIT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_DEPOSIT_PRODUCT_SHOW';
export const PERFORM_CONTRACT_SDO_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CONTRACT_SDO_PRODUCT_SHOW';
export const PERFORM_CONTRACT_NSO_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CONTRACT_NSO_PRODUCT_SHOW';
export const PERFORM_CORPORATE_CARD_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CORPORATE_CARD_PRODUCT_SHOW';
export const PERFORM_ENCASHMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_ENCASHMENT_PRODUCT_SHOW';
export const PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW';
export const PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW';
export const PERFORM_ACQUIRING_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_ACQUIRING_PRODUCT_SHOW';
export const PERFORM_DBO_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_DBO_PRODUCT_SHOW';
export const PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW';
export const PERFORM_SALARY_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_SALARY_PRODUCT_SHOW';
export const INPUT_PRODUCT_STATUS = 'PRODUCT_CONTAINER_INPUT_PRODUCT_STATUS';
export const INPUT_CURRENCY = 'PRODUCT_CONTAINER_INPUT_CURRENCY';
export const PERFORM_CONTAINER_RESET = 'PRODUCT_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_CREDIT_PRODUCT_RESET = 'PRODUCT_CONTAINER_PERFORM_CREDIT_PRODUCT_RESET';
export const NAVIGATE_TO_PRODUCT_FROM_PUSH = 'PRODUCT_CONTAINER_NAVIGATE_TO_PRODUCT_FROM_PUSH';
export const performHideProduct = () => ({
    type: PERFORM_HIDE_PRODUCT,
    payload: {}
});
export const performCreditProductShow = (value) => ({
    type: PERFORM_CREDIT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performCreditProductReset = () => ({
    type: PERFORM_CREDIT_PRODUCT_RESET,
    payload: {}
});
export const performBankGuaranteeProductShow = (value) => ({
    type: PERFORM_BANK_GUARANTEE_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performCashManagementProductShow = (value) => ({
    type: PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performPaymentAccountProductShow = (value) => ({
    type: PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performCustomsPaymentProductShow = (value) => ({
    type: PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performPackageProductShow = (value) => ({
    type: PERFORM_PACKAGE_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performTariffPlanProductShow = (value) => ({
    type: PERFORM_TARIFF_PLAN_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performDepositProductShow = (value) => ({
    type: PERFORM_DEPOSIT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performContractSdoProductShow = (value) => ({
    type: PERFORM_CONTRACT_SDO_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performContractNsoProductShow = (value) => ({
    type: PERFORM_CONTRACT_NSO_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performCorporateCardProductShow = (value) => ({
    type: PERFORM_CORPORATE_CARD_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performEncashmentProductShow = (value) => ({
    type: PERFORM_ENCASHMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performSelfEncashmentProductShow = (value) => ({
    type: PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performCurrencyControlProductShow = (value) => ({
    type: PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performAcquiringProductShow = (value) => ({
    type: PERFORM_ACQUIRING_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performDboProductShow = (value) => ({
    type: PERFORM_DBO_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performContractConstructorProductShow = (value) => ({
    type: PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const performSalaryProductShow = (value) => ({
    type: PERFORM_SALARY_PRODUCT_SHOW,
    payload: {
        value: value,
    }
});
export const inputProductStatus = (value) => ({
    type: INPUT_PRODUCT_STATUS,
    payload: {
        value: value,
    }
});
export const inputCurrency = (value) => ({
    type: INPUT_CURRENCY,
    payload: {
        value: value,
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const navigateToProductFromPush = () => ({
    type: NAVIGATE_TO_PRODUCT_FROM_PUSH,
    payload: {}
});
//# sourceMappingURL=ActionsProduct.js.map