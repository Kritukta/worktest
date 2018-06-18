/**
 * Models for Product container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in Product actions and thunks.
const defaultState = {
    get state() {
        return {
            currentProductType: Enums.ProductType.None,
            currentCreditProduct: defaultValues.CreditProduct,
            currentBankGuaranteeProduct: defaultValues.CreditProduct,
            currentCashManagementProduct: defaultValues.SettlementAgreementProduct,
            currentPaymentAccountProduct: defaultValues.SettlementAgreementProduct,
            currentCustomsPaymentProduct: defaultValues.SettlementAgreementProduct,
            currentPackageProduct: defaultValues.SettlementAgreementProduct,
            currentTariffPlanProduct: defaultValues.SettlementAgreementProduct,
            currentDepositProduct: defaultValues.DepositProduct,
            currentContractSdoProduct: defaultValues.DepositProduct,
            currentContractNsoProduct: defaultValues.DepositProduct,
            currentCorporateCardProduct: defaultValues.CorporateCardProduct,
            currentEncashmentProduct: defaultValues.EncashmentContractProduct,
            currentSelfEncashmentProduct: defaultValues.EncashmentContractProduct,
            currentCurrencyControlProduct: defaultValues.LegalInfoProduct,
            currentAcquiringProduct: defaultValues.AcquiringProduct,
            currentDboProduct: defaultValues.DboProduct,
            currentContractConstructorProduct: defaultValues.UdboProduct,
            currentSalaryProduct: defaultValues.SalaryProduct,
            currentProductStatus: Enums.ProductStatus.None,
            currentCurrency: Enums.Currency.None,
            navigationInProgress: false,
            productContextMode: Enums.ProductContextMode.None,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsProduct.js.map