/**
 * Actions of ProductList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"


export const PERFORM_INPUT_CURRENCY = 'PRODUCT_LIST_CONTAINER_PERFORM_INPUT_CURRENCY'

export const PERFORM_INPUT_ENCUMBRANCE =  'PRODUCT_LIST_CONTAINER_PERFORM_INPUT_ENCUMBRANCE'

export const PERFORM_MODAL_PRODUCT_SHOW = 'PRODUCT_LIST_CONTAINER_PERFORM_MODAL_PRODUCT_SHOW'

export const PERFORM_MODAL_PRODUCT_HIDE = 'PRODUCT_LIST_CONTAINER_PERFORM_MODAL_PRODUCT_HIDE'

export const NAVIGATE_TO_PRODUCT = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT'

export const PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST'

export const NAVIGATE_PRODUCT_LIST_BACK = 'PRODUCT_LIST_CONTAINER_NAVIGATE_PRODUCT_LIST_BACK'

export const NAVIGATE_TO_PRODUCT_LIST_SCREEN = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_SCREEN'

export const NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN'

export const NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN = 'PRODUCT_LIST_CONTAINER_NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN'

export const NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK = 'PRODUCT_LIST_CONTAINER_NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK'

export const FILTER_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_PRODUCT_LIST'

export const FILTER_CREDIT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CREDIT_PRODUCT_LIST'

export const FILTER_BANK_GUARANTEE_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_BANK_GUARANTEE_PRODUCT_LIST'

export const FILTER_CASH_MANAGEMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CASH_MANAGEMENT_PRODUCT_LIST'

export const FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST'

export const FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST'

export const FILTER_PACKAGE_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_PACKAGE_PRODUCT_LIST'

export const FILTER_TARIFF_PLAN_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_TARIFF_PLAN_PRODUCT_LIST'

export const FILTER_DEPOSIT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_DEPOSIT_PRODUCT_LIST'

export const FILTER_CONTRACT_SDO_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_SDO_PRODUCT_LIST'

export const FILTER_CONTRACT_NSO_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_NSO_PRODUCT_LIST'

export const FILTER_CORPORATE_CARD_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CORPORATE_CARD_PRODUCT_LIST'

export const FILTER_ENCASHMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_ENCASHMENT_PRODUCT_LIST'

export const FILTER_SELF_ENCASHMENT_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_SELF_ENCASHMENT_PRODUCT_LIST'

export const FILTER_CURRENCY_CONTROL_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CURRENCY_CONTROL_PRODUCT_LIST'

export const FILTER_ACQUIRING_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_ACQUIRING_PRODUCT_LIST'

export const FILTER_DBO_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_DBO_PRODUCT_LIST'

export const FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST'

export const FILTER_SALARY_PRODUCT_LIST = 'PRODUCT_LIST_CONTAINER_FILTER_SALARY_PRODUCT_LIST'

export const PERFORM_CONTAINER_RESET = 'PRODUCT_LIST_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS = 'PRODUCT_LIST_CONTAINER_PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS'

export const PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW = 'PRODUCT_LIST_CONTAINER_PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW'

export const PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE = 'PRODUCT_LIST_CONTAINER_PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE'

/**
 * Internal thunk used in "ProductList" container to show product list modal alert
 */
export type PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW = {}
export const performProductListModalAlertShow = (): Action<PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW> => ({
    type: PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW,
    payload: {}
})

/**
 * Internal thunk used in "ProductList" container to hide product list modal alert
 */
export type PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE = {}
export const performProductListModalAlertHide = (): Action<PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE> => ({
    type: PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched on user input Currency field.
 *
 * @param {ModelsApp.Classifier} value .
 */
export type PERFORM_INPUT_CURRENCY = { value: ModelsApp.Classifier }
export const performInputCurrency = (value: ModelsApp.Classifier): Action<PERFORM_INPUT_CURRENCY> => ({
    type: PERFORM_INPUT_CURRENCY,
    payload: {
        value: value,
    }
})

export type PERFORM_INPUT_ENCUMBRANCE = { value: Models.ProductEncumbrance }
export const performInputEncumbrance = (value: Models.ProductEncumbrance): Action<PERFORM_INPUT_ENCUMBRANCE> => ({
    type: PERFORM_INPUT_ENCUMBRANCE,
    payload: {
        value: value,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk chain used to show modal.
 *
 */
export type PERFORM_MODAL_PRODUCT_SHOW = {}
export const performModalProductShow = (): Action<PERFORM_MODAL_PRODUCT_SHOW> => ({
    type: PERFORM_MODAL_PRODUCT_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk chain used to hide modal.
 *
 */
export type PERFORM_MODAL_PRODUCT_HIDE = {}
export const performModalProductHide = (): Action<PERFORM_MODAL_PRODUCT_HIDE> => ({
    type: PERFORM_MODAL_PRODUCT_HIDE,
    payload: {}
})

/**
 * Internal thunk used in "ProductList" container. Thunk chain used to navigate to product details screen.
 *
 */
export type NAVIGATE_TO_PRODUCT = {}
export const navigateToProduct = (): Action<NAVIGATE_TO_PRODUCT> => ({
    type: NAVIGATE_TO_PRODUCT,
    payload: {}
})

/**
 * Internal thunk used in "ProductList" container. Thunk chain used to navigate back from product.
 *
 */
export type NAVIGATE_PRODUCT_LIST_BACK = {}
export const navigateProductListBack = (): Action<NAVIGATE_PRODUCT_LIST_BACK> => ({
    type: NAVIGATE_PRODUCT_LIST_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
 *
 * @param {Enums.ProductType} productType .
 */
export type NAVIGATE_TO_PRODUCT_LIST_SCREEN = { productType: Enums.ProductType, }
export const navigateToProductListScreen = (productType: Enums.ProductType,): Action<NAVIGATE_TO_PRODUCT_LIST_SCREEN> => ({
    type: NAVIGATE_TO_PRODUCT_LIST_SCREEN,
    payload: {
        productType: productType,
    }
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk used to open credit product screen.
 *
 * @param {Models.ForecastEvent} event.
 */
export type NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN = {event: Models.ForecastEvent}
export const navigateToForecastProductInfoScreen = (event: Models.ForecastEvent): Action<NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN> => ({
    type: NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    payload: {
        event: event
    }
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk used to open product deal screen.
 *
 * @param {Models.ForecastDeal} deal.
 */
export type NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN = {deal: Models.ForecastDeal}
export const navigateToProductForecastDealInfoScreen = (deal: Models.ForecastDeal): Action<NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN> => ({
    type: NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN,
    payload: {
        deal: deal
    }
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk used to navigate to product deal screen.
 *
 */
export type NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK = {}
export const navigateProductForecastDealInfoScreenBack = (): Action<NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK> => ({
    type: NAVIGATE_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN_BACK,
    payload: {}
})


/**
 * Thunk dispatched by "ProductList" screen. Thunk used to filter product list screen.
 *
 */
export type FILTER_PRODUCT_LIST = {}
export const filterProductList = (): Action<FILTER_PRODUCT_LIST> => ({
    type: FILTER_PRODUCT_LIST,
    payload: {}
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.CreditProductList} productList .
 */
export type FILTER_CREDIT_PRODUCT_LIST = { productList: Models.CreditProductList, }
export const filterCreditProductList = (productList: Models.CreditProductList,): Action<FILTER_CREDIT_PRODUCT_LIST> => ({
    type: FILTER_CREDIT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.CreditProductList} productList .
 */
export type FILTER_BANK_GUARANTEE_PRODUCT_LIST = { productList: Models.CreditProductList, }
export const filterBankGuaranteeProductList = (productList: Models.CreditProductList,): Action<FILTER_BANK_GUARANTEE_PRODUCT_LIST> => ({
    type: FILTER_BANK_GUARANTEE_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export type FILTER_CASH_MANAGEMENT_PRODUCT_LIST = { productList: Models.SettlementAgreementProductList, }
export const filterCashManagementProductList = (productList: Models.SettlementAgreementProductList,): Action<FILTER_CASH_MANAGEMENT_PRODUCT_LIST> => ({
    type: FILTER_CASH_MANAGEMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export type FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST = { productList: Models.SettlementAgreementProductList, }
export const filterPaymentAccountProductList = (productList: Models.SettlementAgreementProductList,): Action<FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST> => ({
    type: FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export type FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST = { productList: Models.SettlementAgreementProductList, }
export const filterCustomsPaymentProductList = (productList: Models.SettlementAgreementProductList,): Action<FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST> => ({
    type: FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export type FILTER_PACKAGE_PRODUCT_LIST = { productList: Models.SettlementAgreementProductList, }
export const filterPackageProductList = (productList: Models.SettlementAgreementProductList,): Action<FILTER_PACKAGE_PRODUCT_LIST> => ({
    type: FILTER_PACKAGE_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SettlementAgreementProductList} productList .
 */
export type FILTER_TARIFF_PLAN_PRODUCT_LIST = { productList: Models.SettlementAgreementProductList, }
export const filterTariffPlanProductList = (productList: Models.SettlementAgreementProductList,): Action<FILTER_TARIFF_PLAN_PRODUCT_LIST> => ({
    type: FILTER_TARIFF_PLAN_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DepositProductList} productList .
 */
export type FILTER_DEPOSIT_PRODUCT_LIST = { productList: Models.DepositProductList, }
export const filterDepositProductList = (productList: Models.DepositProductList,): Action<FILTER_DEPOSIT_PRODUCT_LIST> => ({
    type: FILTER_DEPOSIT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DepositProductList} productList .
 */
export type FILTER_CONTRACT_SDO_PRODUCT_LIST = { productList: Models.DepositProductList, }
export const filterContractSdoProductList = (productList: Models.DepositProductList,): Action<FILTER_CONTRACT_SDO_PRODUCT_LIST> => ({
    type: FILTER_CONTRACT_SDO_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DepositProductList} productList .
 */
export type FILTER_CONTRACT_NSO_PRODUCT_LIST = { productList: Models.DepositProductList, }
export const filterContractNsoProductList = (productList: Models.DepositProductList,): Action<FILTER_CONTRACT_NSO_PRODUCT_LIST> => ({
    type: FILTER_CONTRACT_NSO_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.CorporateCardProductList} productList .
 */
export type FILTER_CORPORATE_CARD_PRODUCT_LIST = { productList: Models.CorporateCardProductList, }
export const filterCorporateCardProductList = (productList: Models.CorporateCardProductList,): Action<FILTER_CORPORATE_CARD_PRODUCT_LIST> => ({
    type: FILTER_CORPORATE_CARD_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.EncashmentContractProductList} productList .
 */
export type FILTER_ENCASHMENT_PRODUCT_LIST = { productList: Models.EncashmentContractProductList, }
export const filterEncashmentProductList = (productList: Models.EncashmentContractProductList,): Action<FILTER_ENCASHMENT_PRODUCT_LIST> => ({
    type: FILTER_ENCASHMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.EncashmentContractProductList} productList .
 */
export type FILTER_SELF_ENCASHMENT_PRODUCT_LIST = { productList: Models.EncashmentContractProductList, }
export const filterSelfEncashmentProductList = (productList: Models.EncashmentContractProductList,): Action<FILTER_SELF_ENCASHMENT_PRODUCT_LIST> => ({
    type: FILTER_SELF_ENCASHMENT_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.LegalInfoProductList} productList .
 */
export type FILTER_CURRENCY_CONTROL_PRODUCT_LIST = { productList: Models.LegalInfoProductList, }
export const filterCurrencyControlProductList = (productList: Models.LegalInfoProductList,): Action<FILTER_CURRENCY_CONTROL_PRODUCT_LIST> => ({
    type: FILTER_CURRENCY_CONTROL_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.AcquiringProductList} productList .
 */
export type FILTER_ACQUIRING_PRODUCT_LIST = { productList: Models.AcquiringProductList, }
export const filterAcquiringProductList = (productList: Models.AcquiringProductList,): Action<FILTER_ACQUIRING_PRODUCT_LIST> => ({
    type: FILTER_ACQUIRING_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.DboProductList} productList .
 */
export type FILTER_DBO_PRODUCT_LIST = { productList: Models.DboProductList, }
export const filterDboProductList = (productList: Models.DboProductList,): Action<FILTER_DBO_PRODUCT_LIST> => ({
    type: FILTER_DBO_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.UdboProductList} productList .
 */
export type FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST = { productList: Models.UdboProductList, }
export const filterContractConstructorProductList = (productList: Models.UdboProductList,): Action<FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST> => ({
    type: FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
 *
 * @param {Models.SalaryProductList} productList .
 */
export type FILTER_SALARY_PRODUCT_LIST = { productList: Models.SalaryProductList, }
export const filterSalaryProductList = (productList: Models.SalaryProductList,): Action<FILTER_SALARY_PRODUCT_LIST> => ({
    type: FILTER_SALARY_PRODUCT_LIST,
    payload: {
        productList: productList,
    }
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS = { dealList: Models.ForecastDealList }
export const performSetForecastDealsToCreditProducts = (dealList: Models.ForecastDealList): Action<PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS> => ({
    type: PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS,
    payload: {
        dealList: dealList
    }
})

/**
 * Thunk dispatched by "ProductList" screen. Thunk dispatched to hide refresh bar of product list.
 *
 */
export type PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST = {value: boolean}
export const performChangeDisplayRefreshBarProductList = (value: boolean): Action<PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST> => ({
    type: PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST,
    payload: {value}
})