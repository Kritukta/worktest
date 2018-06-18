/*
 * Created by Burnaev M.U.
 */
import { handleActions } from 'redux-actions';
import * as actionsProductList from '../actions/ActionsProductList';
import { defaultValues } from "../models/Models";
import { Enums } from '../Enums';
import * as ModelsProductList from "../models/ModelsProductList";
import * as util from '../common/Util';
const reducerProductList = handleActions({
    // Thunk dispatched by "ProductList" screen. Thunk dispatched on user input Currency field.
    [actionsProductList.PERFORM_INPUT_CURRENCY]: (state, action) => {
        return Object.assign({}, state, { inputCurrency: action.payload.value });
    },
    // Thunk dispatched by "ProductList" screen. Thunk dispatched to hide refresh bar of product list.
    [actionsProductList.PERFORM_CHANGE_DISPLAY_REFRESH_BAR_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { isVisibleRefreshBar: action.payload.value });
    },
    // Thunk dispatched by "ProductList" screen. Thunk dispatched on user input Encumbrance field.
    [actionsProductList.PERFORM_INPUT_ENCUMBRANCE]: (state, action) => {
        return Object.assign({}, state, { inputEncumbranceList: util.toggleEncumbranceFilter(state.inputEncumbranceList, action.payload.value) });
    },
    // Internal thunk used in "ProductList" container. Thunk chain used to show modal.
    [actionsProductList.PERFORM_MODAL_PRODUCT_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalProduct: true });
    },
    // Thunk dispatched by "ProductList" screen. Thunk chain used to hide modal.
    [actionsProductList.PERFORM_MODAL_PRODUCT_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleModalProduct: false });
    },
    // Internal thunk used in "ProductList" container. Thunk chain used to navigate to product details screen.
    [actionsProductList.NAVIGATE_TO_PRODUCT]: (state, action) => {
        return Object.assign({}, state);
    },
    // Internal thunk used in "ProductList" container. Thunk chain used to navigate back from product.
    [actionsProductList.NAVIGATE_PRODUCT_LIST_BACK]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
    [actionsProductList.NAVIGATE_TO_PRODUCT_LIST_SCREEN]: (state, action) => {
        return Object.assign({}, ModelsProductList.initialState.state, { currentProductListType: action.payload.productType, inputCurrency: defaultValues.Classifier });
    },
    // Thunk dispatched by "ProductList" screen. Thunk used to open product list screen.
    [actionsProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_DEAL_INFO_SCREEN]: (state, action) => {
        return Object.assign({}, state, { currentDeal: action.payload.deal });
    },
    // Thunk dispatched by "ProductList" screen. Thunk used to filter product list screen.
    [actionsProductList.FILTER_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state);
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CREDIT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.CreditProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.CreditProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.CreditProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentCreditProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.CreditProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_BANK_GUARANTEE_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.BankGuaranteeProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.BankGuaranteeProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.BankGuaranteeProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentBankGuaranteeProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.BankGuaranteeProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CASH_MANAGEMENT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.CashManagementProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.CashManagementProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.CashManagementProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentCashManagementProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.CashManagementProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_PAYMENT_ACCOUNT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.PaymentAccountProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.PaymentAccountProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.PaymentAccountProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentPaymentAccountProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.PaymentAccountProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CUSTOMS_PAYMENT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.CustomsPaymentProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.CustomsPaymentProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.CustomsPaymentProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentCustomsPaymentProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.CustomsPaymentProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_PACKAGE_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.PackageProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.PackageProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.PackageProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentPackageProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.PackageProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_TARIFF_PLAN_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.TariffPlanProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.TariffPlanProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.TariffPlanProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentTariffPlanProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.TariffPlanProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_DEPOSIT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.DepositProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.DepositProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.DepositProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentDepositProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.DepositProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CONTRACT_SDO_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.ContractSdoProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.ContractSdoProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.ContractSdoProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentContractSdoProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.ContractSdoProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CONTRACT_NSO_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.ContractNsoProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.ContractNsoProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.ContractNsoProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentContractNsoProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.ContractNsoProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CORPORATE_CARD_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.CorporateCardProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.CorporateCardProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.CorporateCardProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentCorporateCardProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.CorporateCardProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_ENCASHMENT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.EncashmentProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.EncashmentProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.EncashmentProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentEncashmentProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.EncashmentProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_SELF_ENCASHMENT_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.SelfEncashmentProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.SelfEncashmentProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.SelfEncashmentProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentSelfEncashmentProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.SelfEncashmentProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CURRENCY_CONTROL_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.CurrencyControlProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.CurrencyControlProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.CurrencyControlProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentCurrencyControlProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.CurrencyControlProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_ACQUIRING_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.AcquiringProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.AcquiringProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.AcquiringProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentAcquiringProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.AcquiringProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_DBO_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.DboProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.DboProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.DboProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentDboProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.DboProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_CONTRACT_CONSTRUCTOR_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.ContractConstructorProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.ContractConstructorProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.ContractConstructorProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentContractConstructorProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.ContractConstructorProduct;
                }) }) });
    },
    // Internal thunk used in "ProductList" container. Thunk dispatched to filter products for current type.
    [actionsProductList.FILTER_SALARY_PRODUCT_LIST]: (state, action) => {
        return Object.assign({}, state, { currentProductListType: Enums.ProductType.SalaryProduct, currencyList: util.extractCurrencyList(action.payload.productList, Enums.ProductType.SalaryProduct), encumbranceList: util.extractEncumbranceList(action.payload.productList, Enums.ProductType.SalaryProduct), pollingError: action.payload.productList.pollingError, bhCachedDate: action.payload.productList.bhCachedDate, currentSalaryProductList: Object.assign({}, action.payload.productList, { data: action.payload.productList.data.filter((item) => {
                    return item.productType == Enums.ProductType.SalaryProduct;
                }) }) });
    },
    // Thunk dispatched by "ProductList" screen. Thunk dispatched to reset container state to default values.
    [actionsProductList.PERFORM_CONTAINER_RESET]: (state, action) => {
        return Object.assign({}, ModelsProductList.initialState.state);
    },
    // Thunk dispatched by "ProductList" screen.
    [actionsProductList.PERFORM_SET_FORECAST_DEALS_TO_CREDIT_PRODUCTS]: (state, action) => {
        return Object.assign({}, state, { currentCreditProductList: Object.assign({}, state.currentCreditProductList, { data: util.setForecastDealsToCreditProducts(action.payload.dealList, state.currentCreditProductList.data) }) });
    },
    // Thunk dispatched by "Customer" screen. Thunk used to show product list cache force update modal alert
    [actionsProductList.PERFORM_PRODUCT_LIST_MODAL_ALERT_SHOW]: (state, action) => {
        return Object.assign({}, state, { isVisibleProductListModalAlert: true });
    },
    // Thunk dispatched by "Customer" screen. Thunk used to show product list cache force update modal alert
    [actionsProductList.PERFORM_PRODUCT_LIST_MODAL_ALERT_HIDE]: (state, action) => {
        return Object.assign({}, state, { isVisibleProductListModalAlert: false });
    },
}, ModelsProductList.initialState.state);
export default reducerProductList;
//# sourceMappingURL=ReducerProductList.js.map