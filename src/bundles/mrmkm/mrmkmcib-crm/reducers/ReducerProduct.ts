/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsProduct from '../actions/ActionsProduct'
import {Enums} from '../Enums'
import * as ModelsProduct from "../models/ModelsProduct"
import Action from "../models/Action"


const reducerProduct = handleActions<ModelsProduct.IProductState>({

    // Thunk dispatched by "Product" screen. Thunk dispatched to hide product details.
    [actionsProduct.PERFORM_HIDE_PRODUCT]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_HIDE_PRODUCT>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentProductType: Enums.ProductType.None,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CREDIT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CREDIT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCreditProduct: action.payload.value,
            currentProductType: Enums.ProductType.CreditProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to reset product details.
    [actionsProduct.PERFORM_CREDIT_PRODUCT_RESET]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CREDIT_PRODUCT_RESET>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCreditProduct: {
                ...state.currentCreditProduct,
                creditProduct: null
            }
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_BANK_GUARANTEE_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_BANK_GUARANTEE_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentBankGuaranteeProduct: action.payload.value,
            currentProductType: Enums.ProductType.BankGuaranteeProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCashManagementProduct: action.payload.value,
            currentProductType: Enums.ProductType.CashManagementProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentPaymentAccountProduct: action.payload.value,
            currentProductType: Enums.ProductType.PaymentAccountProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCustomsPaymentProduct: action.payload.value,
            currentProductType: Enums.ProductType.CustomsPaymentProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_PACKAGE_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_PACKAGE_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentPackageProduct: action.payload.value,
            currentProductType: Enums.ProductType.PackageProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_TARIFF_PLAN_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_TARIFF_PLAN_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentTariffPlanProduct: action.payload.value,
            currentProductType: Enums.ProductType.TariffPlanProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_DEPOSIT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_DEPOSIT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentDepositProduct: action.payload.value,
            currentProductType: Enums.ProductType.DepositProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CONTRACT_SDO_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CONTRACT_SDO_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentContractSdoProduct: action.payload.value,
            currentProductType: Enums.ProductType.ContractSdoProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CONTRACT_NSO_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CONTRACT_NSO_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentContractNsoProduct: action.payload.value,
            currentProductType: Enums.ProductType.ContractNsoProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CORPORATE_CARD_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CORPORATE_CARD_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCorporateCardProduct: action.payload.value,
            currentProductType: Enums.ProductType.CorporateCardProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_ENCASHMENT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_ENCASHMENT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentEncashmentProduct: action.payload.value,
            currentProductType: Enums.ProductType.EncashmentProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentSelfEncashmentProduct: action.payload.value,
            currentProductType: Enums.ProductType.SelfEncashmentProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCurrencyControlProduct: action.payload.value,
            currentProductType: Enums.ProductType.CurrencyControlProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_ACQUIRING_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_ACQUIRING_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentAcquiringProduct: action.payload.value,
            currentProductType: Enums.ProductType.AcquiringProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_DBO_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_DBO_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentDboProduct: action.payload.value,
            currentProductType: Enums.ProductType.DboProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentContractConstructorProduct: action.payload.value,
            currentProductType: Enums.ProductType.ContractConstructorProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to show product details.
    [actionsProduct.PERFORM_SALARY_PRODUCT_SHOW]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_SALARY_PRODUCT_SHOW>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentSalaryProduct: action.payload.value,
            currentProductType: Enums.ProductType.SalaryProduct,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched on change product status filter.
    [actionsProduct.INPUT_PRODUCT_STATUS]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.INPUT_PRODUCT_STATUS>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentProductStatus: action.payload.value,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched on change currency filter.
    [actionsProduct.INPUT_CURRENCY]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.INPUT_CURRENCY>): ModelsProduct.IProductState => {
        return {
            ...state,
            currentCurrency: action.payload.value,
        }
    },

    // Thunk dispatched by "Product" screen. Thunk dispatched to reset container state to default values.
    [actionsProduct.PERFORM_CONTAINER_RESET]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.PERFORM_CONTAINER_RESET>): ModelsProduct.IProductState => {
        return {
            ...ModelsProduct.initialState.state,
        }
    },

    [actionsProduct.NAVIGATE_TO_PRODUCT_FROM_PUSH]: (state: ModelsProduct.IProductState, action: Action<actionsProduct.NAVIGATE_TO_PRODUCT_FROM_PUSH>): ModelsProduct.IProductState => {
        return {
            ...state,
            productContextMode: Enums.ProductContextMode.Notice,
        }
    },


}, ModelsProduct.initialState.state)

export default reducerProduct
