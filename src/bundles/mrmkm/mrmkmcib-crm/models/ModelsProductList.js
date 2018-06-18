/**
 * Models for ProductList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            pollingError: null,
            bhCachedDate: null,
            currencyList: defaultValues.ClassifierList,
            encumbranceList: defaultValues.EncumbranceList,
            inputCurrency: defaultValues.Classifier,
            inputEncumbranceList: defaultValues.EncumbranceList,
            isVisibleModalProduct: false,
            currentProductListType: Enums.ProductType.None,
            currentCreditProductList: defaultValues.CreditProductList,
            currentBankGuaranteeProductList: defaultValues.CreditProductList,
            currentCashManagementProductList: defaultValues.SettlementAgreementProductList,
            currentPaymentAccountProductList: defaultValues.SettlementAgreementProductList,
            currentCustomsPaymentProductList: defaultValues.SettlementAgreementProductList,
            currentPackageProductList: defaultValues.SettlementAgreementProductList,
            currentTariffPlanProductList: defaultValues.SettlementAgreementProductList,
            currentDepositProductList: defaultValues.DepositProductList,
            currentContractSdoProductList: defaultValues.DepositProductList,
            currentContractNsoProductList: defaultValues.DepositProductList,
            currentCorporateCardProductList: defaultValues.CorporateCardProductList,
            currentEncashmentProductList: defaultValues.EncashmentContractProductList,
            currentSelfEncashmentProductList: defaultValues.EncashmentContractProductList,
            currentCurrencyControlProductList: defaultValues.LegalInfoProductList,
            currentAcquiringProductList: defaultValues.AcquiringProductList,
            currentDboProductList: defaultValues.DboProductList,
            currentContractConstructorProductList: defaultValues.UdboProductList,
            currentSalaryProductList: defaultValues.SalaryProductList,
            creditActiveProductListFetching: false,
            creditActiveProductListError: null,
            creditCloseProductListFetching: false,
            creditCloseProductListError: null,
            isVisibleRefreshBar: true,
            isVisibleProductListModalAlert: false,
            // TODO Describe ProductList reducer state.
            currentDeal: defaultValues.ForecastDeal,
            currentEvent: defaultValues.ForecastEvent
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsProductList.js.map