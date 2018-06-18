/**
 * Actions of Product container.
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




export const PERFORM_HIDE_PRODUCT = 'PRODUCT_CONTAINER_PERFORM_HIDE_PRODUCT'

export const PERFORM_CREDIT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CREDIT_PRODUCT_SHOW'

export const PERFORM_BANK_GUARANTEE_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_BANK_GUARANTEE_PRODUCT_SHOW'

export const PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW'

export const PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW'

export const PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW'

export const PERFORM_PACKAGE_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_PACKAGE_PRODUCT_SHOW'

export const PERFORM_TARIFF_PLAN_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_TARIFF_PLAN_PRODUCT_SHOW'

export const PERFORM_DEPOSIT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_DEPOSIT_PRODUCT_SHOW'

export const PERFORM_CONTRACT_SDO_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CONTRACT_SDO_PRODUCT_SHOW'

export const PERFORM_CONTRACT_NSO_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CONTRACT_NSO_PRODUCT_SHOW'

export const PERFORM_CORPORATE_CARD_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CORPORATE_CARD_PRODUCT_SHOW'

export const PERFORM_ENCASHMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_ENCASHMENT_PRODUCT_SHOW'

export const PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW'

export const PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW'

export const PERFORM_ACQUIRING_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_ACQUIRING_PRODUCT_SHOW'

export const PERFORM_DBO_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_DBO_PRODUCT_SHOW'

export const PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW'

export const PERFORM_SALARY_PRODUCT_SHOW = 'PRODUCT_CONTAINER_PERFORM_SALARY_PRODUCT_SHOW'

export const INPUT_PRODUCT_STATUS = 'PRODUCT_CONTAINER_INPUT_PRODUCT_STATUS'

export const INPUT_CURRENCY = 'PRODUCT_CONTAINER_INPUT_CURRENCY'

export const PERFORM_CONTAINER_RESET = 'PRODUCT_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_CREDIT_PRODUCT_RESET = 'PRODUCT_CONTAINER_PERFORM_CREDIT_PRODUCT_RESET'

export const NAVIGATE_TO_PRODUCT_FROM_PUSH = 'PRODUCT_CONTAINER_NAVIGATE_TO_PRODUCT_FROM_PUSH'

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to hide product details.
 *
 */
export type PERFORM_HIDE_PRODUCT = {}
export const performHideProduct = (): Action<PERFORM_HIDE_PRODUCT> => ({
    type: PERFORM_HIDE_PRODUCT,
    payload: {}
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.CreditProduct} value .
 */
export type PERFORM_CREDIT_PRODUCT_SHOW = { value: Models.CreditProduct, }
export const performCreditProductShow = (value: Models.CreditProduct,): Action<PERFORM_CREDIT_PRODUCT_SHOW> => ({
    type: PERFORM_CREDIT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to reset product details.
 *
 * @param {Models.CreditProduct} value .
 */
export type PERFORM_CREDIT_PRODUCT_RESET = {}
export const performCreditProductReset = (): Action<PERFORM_CREDIT_PRODUCT_RESET> => ({
    type: PERFORM_CREDIT_PRODUCT_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.CreditProduct} value .
 */
export type PERFORM_BANK_GUARANTEE_PRODUCT_SHOW = { value: Models.CreditProduct, }
export const performBankGuaranteeProductShow = (value: Models.CreditProduct,): Action<PERFORM_BANK_GUARANTEE_PRODUCT_SHOW> => ({
    type: PERFORM_BANK_GUARANTEE_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export type PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW = { value: Models.SettlementAgreementProduct, }
export const performCashManagementProductShow = (value: Models.SettlementAgreementProduct,): Action<PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW> => ({
    type: PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export type PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW = { value: Models.SettlementAgreementProduct, }
export const performPaymentAccountProductShow = (value: Models.SettlementAgreementProduct,): Action<PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW> => ({
    type: PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export type PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW = { value: Models.SettlementAgreementProduct, }
export const performCustomsPaymentProductShow = (value: Models.SettlementAgreementProduct,): Action<PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW> => ({
    type: PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export type PERFORM_PACKAGE_PRODUCT_SHOW = { value: Models.SettlementAgreementProduct, }
export const performPackageProductShow = (value: Models.SettlementAgreementProduct,): Action<PERFORM_PACKAGE_PRODUCT_SHOW> => ({
    type: PERFORM_PACKAGE_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SettlementAgreementProduct} value .
 */
export type PERFORM_TARIFF_PLAN_PRODUCT_SHOW = { value: Models.SettlementAgreementProduct, }
export const performTariffPlanProductShow = (value: Models.SettlementAgreementProduct,): Action<PERFORM_TARIFF_PLAN_PRODUCT_SHOW> => ({
    type: PERFORM_TARIFF_PLAN_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DepositProduct} value .
 */
export type PERFORM_DEPOSIT_PRODUCT_SHOW = { value: Models.DepositProduct, }
export const performDepositProductShow = (value: Models.DepositProduct,): Action<PERFORM_DEPOSIT_PRODUCT_SHOW> => ({
    type: PERFORM_DEPOSIT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DepositProduct} value .
 */
export type PERFORM_CONTRACT_SDO_PRODUCT_SHOW = { value: Models.DepositProduct, }
export const performContractSdoProductShow = (value: Models.DepositProduct,): Action<PERFORM_CONTRACT_SDO_PRODUCT_SHOW> => ({
    type: PERFORM_CONTRACT_SDO_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DepositProduct} value .
 */
export type PERFORM_CONTRACT_NSO_PRODUCT_SHOW = { value: Models.DepositProduct, }
export const performContractNsoProductShow = (value: Models.DepositProduct,): Action<PERFORM_CONTRACT_NSO_PRODUCT_SHOW> => ({
    type: PERFORM_CONTRACT_NSO_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.CorporateCardProduct} value .
 */
export type PERFORM_CORPORATE_CARD_PRODUCT_SHOW = { value: Models.CorporateCardProduct, }
export const performCorporateCardProductShow = (value: Models.CorporateCardProduct,): Action<PERFORM_CORPORATE_CARD_PRODUCT_SHOW> => ({
    type: PERFORM_CORPORATE_CARD_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.EncashmentContractProduct} value .
 */
export type PERFORM_ENCASHMENT_PRODUCT_SHOW = { value: Models.EncashmentContractProduct, }
export const performEncashmentProductShow = (value: Models.EncashmentContractProduct,): Action<PERFORM_ENCASHMENT_PRODUCT_SHOW> => ({
    type: PERFORM_ENCASHMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.EncashmentContractProduct} value .
 */
export type PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW = { value: Models.EncashmentContractProduct, }
export const performSelfEncashmentProductShow = (value: Models.EncashmentContractProduct,): Action<PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW> => ({
    type: PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.LegalInfoProduct} value .
 */
export type PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW = { value: Models.LegalInfoProduct, }
export const performCurrencyControlProductShow = (value: Models.LegalInfoProduct,): Action<PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW> => ({
    type: PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.AcquiringProduct} value .
 */
export type PERFORM_ACQUIRING_PRODUCT_SHOW = { value: Models.AcquiringProduct, }
export const performAcquiringProductShow = (value: Models.AcquiringProduct,): Action<PERFORM_ACQUIRING_PRODUCT_SHOW> => ({
    type: PERFORM_ACQUIRING_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.DboProduct} value .
 */
export type PERFORM_DBO_PRODUCT_SHOW = { value: Models.DboProduct, }
export const performDboProductShow = (value: Models.DboProduct,): Action<PERFORM_DBO_PRODUCT_SHOW> => ({
    type: PERFORM_DBO_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.UdboProduct} value .
 */
export type PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW = { value: Models.UdboProduct, }
export const performContractConstructorProductShow = (value: Models.UdboProduct,): Action<PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW> => ({
    type: PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
 *
 * @param {Models.SalaryProduct} value .
 */
export type PERFORM_SALARY_PRODUCT_SHOW = { value: Models.SalaryProduct, }
export const performSalaryProductShow = (value: Models.SalaryProduct,): Action<PERFORM_SALARY_PRODUCT_SHOW> => ({
    type: PERFORM_SALARY_PRODUCT_SHOW,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched on change product status filter.
 *
 * @param {Enums.ProductStatus} value .
 */
export type INPUT_PRODUCT_STATUS = { value: Enums.ProductStatus }
export const inputProductStatus = (value: Enums.ProductStatus): Action<INPUT_PRODUCT_STATUS> => ({
    type: INPUT_PRODUCT_STATUS,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched on change currency filter.
 *
 * @param {Enums.Currency} value .
 */
export type INPUT_CURRENCY = { value: Enums.Currency }
export const inputCurrency = (value: Enums.Currency): Action<INPUT_CURRENCY> => ({
    type: INPUT_CURRENCY,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "Product" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

export type NAVIGATE_TO_PRODUCT_FROM_PUSH = {}
export const navigateToProductFromPush = (): Action<NAVIGATE_TO_PRODUCT_FROM_PUSH> => ({
    type: NAVIGATE_TO_PRODUCT_FROM_PUSH,
    payload: {}
})
