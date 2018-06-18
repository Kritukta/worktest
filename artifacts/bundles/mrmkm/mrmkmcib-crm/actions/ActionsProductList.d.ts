/**
 * Actions of ProductList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
export declare const PERFORM_INPUT_CURRENCY = "PRODUCT_LIST_CONTAINER_PERFORM_INPUT_CURRENCY";
export declare const PERFORM_INPUT_ENCUMBRANCE = "PRODUCT_LIST_CONTAINER_PERFORM_INPUT_ENCUMBRANCE";
export declare const PERFORM_MODAL_PRODUCT_SHOW = "PRODUCT_LIST_CONTAINER_PERFORM_MODAL_PRODUCT_SHOW";
export declare const PERFORM_MODAL_PRODUCT_HIDE = "PRODUCT_LIST_CONTAINER_PERFORM_MODAL_PRODUCT_HIDE";
export declare const NAVIGATE_TO_PRODUCT = "PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT";
export declare const PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST";
export declare const NAVIGATE_PRODUCT_LIST_BACK = "PRODUCT_LIST_CONTAINER_NAVIGATE_PRODUCT_LIST_BACK";
export declare const NAVIGATE_TO_PRODUCT_LIST_SCREEN = "PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_SCREEN";
export declare const NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN = "PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN";
export declare const NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN = "PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN";
export declare const NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK = "PRODUCT_LIST_CONTAINER_NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK";
export declare const FILTER_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_PRODUCT_LIST";
export declare const FILTER_CREDIT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CREDIT_PRODUCT_LIST";
export declare const FILTER_BANK_GUARANTEE_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_BANK_GUARANTEE_PRODUCT_LIST";
export declare const FILTER_CASH_MANAGEMENT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CASH_MANAGEMENT_PRODUCT_LIST";
export declare const FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST";
export declare const FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST";
export declare const FILTER_PACKAGE_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_PACKAGE_PRODUCT_LIST";
export declare const FILTER_TARIFF_PLAN_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_TARIFF_PLAN_PRODUCT_LIST";
export declare const FILTER_DEPOSIT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_DEPOSIT_PRODUCT_LIST";
export declare const FILTER_CONTRACT_SDO_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_SDO_PRODUCT_LIST";
export declare const FILTER_CONTRACT_NSO_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_NSO_PRODUCT_LIST";
export declare const FILTER_CORPORATE_CARD_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CORPORATE_CARD_PRODUCT_LIST";
export declare const FILTER_ENCASHMENT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_ENCASHMENT_PRODUCT_LIST";
export declare const FILTER_SELF_ENCASHMENT_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_SELF_ENCASHMENT_PRODUCT_LIST";
export declare const FILTER_CURRENCY_CONTROL_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CURRENCY_CONTROL_PRODUCT_LIST";
export declare const FILTER_ACQUIRING_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_ACQUIRING_PRODUCT_LIST";
export declare const FILTER_DBO_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_DBO_PRODUCT_LIST";
export declare const FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST";
export declare const FILTER_SALARY_PRODUCT_LIST = "PRODUCT_LIST_CONTAINER_FILTER_SALARY_PRODUCT_LIST";
export declare const PERFORM_CONTAINER_RESET = "PRODUCT_LIST_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS = "PRODUCT_LIST_CONTAINER_PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS";
export declare const PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW = "PRODUCT_LIST_CONTAINER_PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW";
export declare const PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE = "PRODUCT_LIST_CONTAINER_PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE";
/**
 * Internal thunk used in "ProductList" container to show product list modal alert
 */
export declare type PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW = {};
export declare const performProductListModalAlertShow: () => Action<PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW>;
/**
 * Internal thunk used in "ProductList" container to hide product list modal alert
 */
export declare type PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE = {};
export declare const performProductListModalAlertHide: () => Action<PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched on user input Currency field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export declare type PERFORM_INPUT_CURRENCY = {
    value: ModelsApp.Classifier;
};
export declare const performInputCurrency: (value: ModelsApp.Classifier) => Action<PERFORM_INPUT_CURRENCY>;
export declare type PERFORM_INPUT_ENCUMBRANCE = {
    value: Models.ProductEncumbrance;
};
export declare const performInputEncumbrance: (value: ModelsCrm.ProductEncumbrance) => Action<PERFORM_INPUT_ENCUMBRANCE>;
/**
 * Internal thunk used in "ProductList" container. Thunk chain used to show modal.
 *
 */
export declare type PERFORM_MODAL_PRODUCT_SHOW = {};
export declare const performModalProductShow: () => Action<PERFORM_MODAL_PRODUCT_SHOW>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk chain used to hide modal.
 *
 */
export declare type PERFORM_MODAL_PRODUCT_HIDE = {};
export declare const performModalProductHide: () => Action<PERFORM_MODAL_PRODUCT_HIDE>;
/**
 * Internal thunk used in "ProductList" container. Thunk chain used to navigate to product details screen.
 *
 */
export declare type NAVIGATE_TO_PRODUCT = {};
export declare const navigateToProduct: () => Action<NAVIGATE_TO_PRODUCT>;
/**
 * Internal thunk used in "ProductList" container. Thunk chain used to navigate back from product.
 *
 */
export declare type NAVIGATE_PRODUCT_LIST_BACK = {};
export declare const navigateProductListBack: () => Action<NAVIGATE_PRODUCT_LIST_BACK>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
 *
 * @param {Enums.ProductType} productType .
 */
export declare type NAVIGATE_TO_PRODUCT_LIST_SCREEN = {
    productType: Enums.ProductType;
};
export declare const navigateToProductListScreen: (productType: Enums.ProductType) => Action<NAVIGATE_TO_PRODUCT_LIST_SCREEN>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk used to open credit product screen.
 *
 * @param {Models.ForecastEvent} event.
 */
export declare type NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN = {
    event: Models.ForecastEvent;
};
export declare const navigateToForecastProductInfoScreen: (event: ModelsCrm.ForecastEvent) => Action<NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk used to open product deal screen.
 *
 * @param {Models.ForecastDeal} deal.
 */
export declare type NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN = {
    deal: Models.ForecastDeal;
};
export declare const navigateToProductForecastDealInfoScreen: (deal: ModelsCrm.ForecastDeal) => Action<NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk used to navigate to product deal screen.
 *
 */
export declare type NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK = {};
export declare const navigateProductForecastDealInfoScreenBack: () => Action<NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk used to filter product list screen.
 *
 */
export declare type FILTER_PRODUCT_LIST = {};
export declare const filterProductList: () => Action<FILTER_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.CreditProductList} productList .
 */
export declare type FILTER_CREDIT_PRODUCT_LIST = {
    productList: Models.CreditProductList;
};
export declare const filterCreditProductList: (productList: ModelsCrm.CreditProductList) => Action<FILTER_CREDIT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.CreditProductList} productList .
 */
export declare type FILTER_BANK_GUARANTEE_PRODUCT_LIST = {
    productList: Models.CreditProductList;
};
export declare const filterBankGuaranteeProductList: (productList: ModelsCrm.CreditProductList) => Action<FILTER_BANK_GUARANTEE_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export declare type FILTER_CASH_MANAGEMENT_PRODUCT_LIST = {
    productList: Models.SettlementAgreementProductList;
};
export declare const filterCashManagementProductList: (productList: ModelsCrm.SettlementAgreementProductList) => Action<FILTER_CASH_MANAGEMENT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export declare type FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST = {
    productList: Models.SettlementAgreementProductList;
};
export declare const filterPaymentAccountProductList: (productList: ModelsCrm.SettlementAgreementProductList) => Action<FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export declare type FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST = {
    productList: Models.SettlementAgreementProductList;
};
export declare const filterCustomsPaymentProductList: (productList: ModelsCrm.SettlementAgreementProductList) => Action<FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export declare type FILTER_PACKAGE_PRODUCT_LIST = {
    productList: Models.SettlementAgreementProductList;
};
export declare const filterPackageProductList: (productList: ModelsCrm.SettlementAgreementProductList) => Action<FILTER_PACKAGE_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export declare type FILTER_TARIFF_PLAN_PRODUCT_LIST = {
    productList: Models.SettlementAgreementProductList;
};
export declare const filterTariffPlanProductList: (productList: ModelsCrm.SettlementAgreementProductList) => Action<FILTER_TARIFF_PLAN_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DepositProductList} productList .
 */
export declare type FILTER_DEPOSIT_PRODUCT_LIST = {
    productList: Models.DepositProductList;
};
export declare const filterDepositProductList: (productList: ModelsCrm.DepositProductList) => Action<FILTER_DEPOSIT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DepositProductList} productList .
 */
export declare type FILTER_CONTRACT_SDO_PRODUCT_LIST = {
    productList: Models.DepositProductList;
};
export declare const filterContractSdoProductList: (productList: ModelsCrm.DepositProductList) => Action<FILTER_CONTRACT_SDO_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DepositProductList} productList .
 */
export declare type FILTER_CONTRACT_NSO_PRODUCT_LIST = {
    productList: Models.DepositProductList;
};
export declare const filterContractNsoProductList: (productList: ModelsCrm.DepositProductList) => Action<FILTER_CONTRACT_NSO_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.CorporateCardProductList} productList .
 */
export declare type FILTER_CORPORATE_CARD_PRODUCT_LIST = {
    productList: Models.CorporateCardProductList;
};
export declare const filterCorporateCardProductList: (productList: ModelsCrm.CorporateCardProductList) => Action<FILTER_CORPORATE_CARD_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.EncashmentContractProductList} productList .
 */
export declare type FILTER_ENCASHMENT_PRODUCT_LIST = {
    productList: Models.EncashmentContractProductList;
};
export declare const filterEncashmentProductList: (productList: ModelsCrm.EncashmentContractProductList) => Action<FILTER_ENCASHMENT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.EncashmentContractProductList} productList .
 */
export declare type FILTER_SELF_ENCASHMENT_PRODUCT_LIST = {
    productList: Models.EncashmentContractProductList;
};
export declare const filterSelfEncashmentProductList: (productList: ModelsCrm.EncashmentContractProductList) => Action<FILTER_SELF_ENCASHMENT_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.LegalInfoProductList} productList .
 */
export declare type FILTER_CURRENCY_CONTROL_PRODUCT_LIST = {
    productList: Models.LegalInfoProductList;
};
export declare const filterCurrencyControlProductList: (productList: ModelsCrm.LegalInfoProductList) => Action<FILTER_CURRENCY_CONTROL_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.AcquiringProductList} productList .
 */
export declare type FILTER_ACQUIRING_PRODUCT_LIST = {
    productList: Models.AcquiringProductList;
};
export declare const filterAcquiringProductList: (productList: ModelsCrm.AcquiringProductList) => Action<FILTER_ACQUIRING_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DboProductList} productList .
 */
export declare type FILTER_DBO_PRODUCT_LIST = {
    productList: Models.DboProductList;
};
export declare const filterDboProductList: (productList: ModelsCrm.DboProductList) => Action<FILTER_DBO_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.UdboProductList} productList .
 */
export declare type FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST = {
    productList: Models.UdboProductList;
};
export declare const filterContractConstructorProductList: (productList: ModelsCrm.UdboProductList) => Action<FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST>;
/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SalaryProductList} productList .
 */
export declare type FILTER_SALARY_PRODUCT_LIST = {
    productList: Models.SalaryProductList;
};
export declare const filterSalaryProductList: (productList: ModelsCrm.SalaryProductList) => Action<FILTER_SALARY_PRODUCT_LIST>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS = {
    dealList: Models.ForecastDealList;
};
export declare const performSetForecastDealsToCreditProducts: (dealList: ModelsCrm.ForecastDealList) => Action<PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS>;
/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to hide refresh bar of product list.
 *
 */
export declare type PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST = {
    value: boolean;
};
export declare const performChangeDisplayRefreshBarProductList: (value: boolean) => Action<PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST>;
