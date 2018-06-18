/**
 * Actions of ProductList container.
 *
 * @author Burnaev M.U.
 * @see
 */
export const PERFORM_INPUT_CURRENCY = 'PRODUCT_LIST_CONTAINER_PERFORM_INPUT_CURRENCY';
export const PERFORM_INPUT_ENCUMBRANCE = 'PRODUCT_LIST_CONTAINER_PERFORM_INPUT_ENCUMBRANCE';
export const PERFORM_MODAL_PRODUCT_SHOW = 'PRODUCT_LIST_CONTAINER_PERFORM_MODAL_PRODUCT_SHOW';
export const PERFORM_MODAL_PRODUCT_HIDE = 'PRODUCT_LIST_CONTAINER_PERFORM_MODAL_PRODUCT_HIDE';
export const NAVIGATE_TO_PRODUCT = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT';
export const PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST';
export const NAVIGATE_PRODUCT_LIST_BACK = 'PRODUCT_LIST_CONTAINER_NAVIGATE_PRODUCT_LIST_BACK';
export const NAVIGATE_TO_PRODUCT_LIST_SCREEN = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_SCREEN';
export const NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN';
export const NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN';
export const NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK = 'PRODUCT_LIST_CONTAINER_NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK';
export const FILTER_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_PRODUCT_LIST';
export const FILTER_CREDIT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CREDIT_PRODUCT_LIST';
export const FILTER_BANK_GUARANTEE_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_BANK_GUARANTEE_PRODUCT_LIST';
export const FILTER_CASH_MANAGEMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CASH_MANAGEMENT_PRODUCT_LIST';
export const FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST';
export const FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST';
export const FILTER_PACKAGE_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_PACKAGE_PRODUCT_LIST';
export const FILTER_TARIFF_PLAN_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_TARIFF_PLAN_PRODUCT_LIST';
export const FILTER_DEPOSIT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_DEPOSIT_PRODUCT_LIST';
export const FILTER_CONTRACT_SDO_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_SDO_PRODUCT_LIST';
export const FILTER_CONTRACT_NSO_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_NSO_PRODUCT_LIST';
export const FILTER_CORPORATE_CARD_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CORPORATE_CARD_PRODUCT_LIST';
export const FILTER_ENCASHMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_ENCASHMENT_PRODUCT_LIST';
export const FILTER_SELF_ENCASHMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_SELF_ENCASHMENT_PRODUCT_LIST';
export const FILTER_CURRENCY_CONTROL_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CURRENCY_CONTROL_PRODUCT_LIST';
export const FILTER_ACQUIRING_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_ACQUIRING_PRODUCT_LIST';
export const FILTER_DBO_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_DBO_PRODUCT_LIST';
export const FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST';
export const FILTER_SALARY_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_SALARY_PRODUCT_LIST';
export const PERFORM_CONTAINER_RESET = 'PRODUCT_LIST_CONTAINER_PERFORM_CONTAINER_RESET';
export const PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS = 'PRODUCT_LIST_CONTAINER_PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS';
export const PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW = 'PRODUCT_LIST_CONTAINER_PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW';
export const PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE = 'PRODUCT_LIST_CONTAINER_PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE';
export const performProductListModalAlertShow = () => ({
    type: PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW,
    payload: {}
});
export const performProductListModalAlertHide = () => ({
    type: PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,
    payload: {}
});
export const performInputCurrency = (value) => ({
    type: PERFORM_INPUT_CURRENCY,
    payload: {
        value: value,
    }
});
export const performInputEncumbrance = (value) => ({
    type: PERFORM_INPUT_ENCUMBRANCE,
    payload: {
        value: value,
    }
});
export const performModalProductShow = () => ({
    type: PERFORM_MODAL_PRODUCT_SHOW,
    payload: {}
});
export const performModalProductHide = () => ({
    type: PERFORM_MODAL_PRODUCT_HIDE,
    payload: {}
});
export const navigateToProduct = () => ({
    type: NAVIGATE_TO_PRODUCT,
    payload: {}
});
export const navigateProductListBack = () => ({
    type: NAVIGATE_PRODUCT_LIST_BACK,
    payload: {}
});
export const navigateToProductListScreen = (productType) => ({
    type: NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    payload: {
        productType: productType,
    }
});
export const navigateToForecastProductInfoScreen = (event) => ({
    type: NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    payload: {
        event: event
    }
});
export const navigateToProductForecastDealInfoScreen = (deal) => ({
    type: NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    payload: {
        deal: deal
    }
});
export const navigateProductForecastDealInfoScreenBack = () => ({
    type: NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK,
    payload: {}
});
export const filterProductList = () => ({
    type: FILTER_PRODUCT_LIST,
    payload: {}
});
export const filterCreditProductList = (productList) => ({
    type: FILTER_CREDIT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterBankGuaranteeProductList = (productList) => ({
    type: FILTER_BANK_GUARANTEE_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterCashManagementProductList = (productList) => ({
    type: FILTER_CASH_MANAGEMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterPaymentAccountProductList = (productList) => ({
    type: FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterCustomsPaymentProductList = (productList) => ({
    type: FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterPackageProductList = (productList) => ({
    type: FILTER_PACKAGE_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterTariffPlanProductList = (productList) => ({
    type: FILTER_TARIFF_PLAN_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterDepositProductList = (productList) => ({
    type: FILTER_DEPOSIT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterContractSdoProductList = (productList) => ({
    type: FILTER_CONTRACT_SDO_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterContractNsoProductList = (productList) => ({
    type: FILTER_CONTRACT_NSO_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterCorporateCardProductList = (productList) => ({
    type: FILTER_CORPORATE_CARD_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterEncashmentProductList = (productList) => ({
    type: FILTER_ENCASHMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterSelfEncashmentProductList = (productList) => ({
    type: FILTER_SELF_ENCASHMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterCurrencyControlProductList = (productList) => ({
    type: FILTER_CURRENCY_CONTROL_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterAcquiringProductList = (productList) => ({
    type: FILTER_ACQUIRING_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterDboProductList = (productList) => ({
    type: FILTER_DBO_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterContractConstructorProductList = (productList) => ({
    type: FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const filterSalaryProductList = (productList) => ({
    type: FILTER_SALARY_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
});
export const performContainerReset = () => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
});
export const performSetForecastDealsToCreditProducts = (dealList) => ({
    type: PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS,
    payload: {
        dealList: dealList
    }
});
export const performChangeDisplayRefreshBarProductList = (value) => ({
    type: PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST,
    payload: { value }
});
//# sourceMappingURL=ActionsProductList.js.map