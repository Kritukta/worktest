import React from 'react';
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsProductList from "../models/ModelsProductList";
import * as ModelsProduct from "../models/ModelsProduct";
export interface IStateProps {
    currentProductType: Enums.ProductType;
    currentCreditProduct: Models.CreditProduct;
    currentBankGuaranteeProduct: Models.CreditProduct;
    currentCashManagementProduct: Models.SettlementAgreementProduct;
    currentPaymentAccountProduct: Models.SettlementAgreementProduct;
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct;
    currentPackageProduct: Models.SettlementAgreementProduct;
    currentTariffPlanProduct: Models.SettlementAgreementProduct;
    currentDepositProduct: Models.DepositProduct;
    currentContractSdoProduct: Models.DepositProduct;
    currentContractNsoProduct: Models.DepositProduct;
    currentCorporateCardProduct: Models.CorporateCardProduct;
    currentEncashmentProduct: Models.EncashmentContractProduct;
    currentSelfEncashmentProduct: Models.EncashmentContractProduct;
    currentCurrencyControlProduct: Models.LegalInfoProduct;
    currentAcquiringProduct: Models.AcquiringProduct;
    currentDboProduct: Models.DboProduct;
    currentContractConstructorProduct: Models.UdboProduct;
    currentSalaryProduct: Models.SalaryProduct;
    currentProductStatus: Enums.ProductStatus;
    currentCurrency: Enums.Currency;
    navigationInProgress: boolean;
    currentCustomerManaged: Models.CustomerManaged;
}
export interface IDispatchProps {
    performHideProduct: ModelsProduct.PERFORM_HIDE_PRODUCT;
    performCreditProductShow: ModelsProduct.PERFORM_CREDIT_PRODUCT_SHOW;
    performBankGuaranteeProductShow: ModelsProduct.PERFORM_BANK_GUARANTEE_PRODUCT_SHOW;
    performCashManagementProductShow: ModelsProduct.PERFORM_CASH_MANAGEMENT_PRODUCT_SHOW;
    performPaymentAccountProductShow: ModelsProduct.PERFORM_PAYMENT_ACCOUNT_PRODUCT_SHOW;
    performCustomsPaymentProductShow: ModelsProduct.PERFORM_CUSTOMS_PAYMENT_PRODUCT_SHOW;
    performPackageProductShow: ModelsProduct.PERFORM_PACKAGE_PRODUCT_SHOW;
    performTariffPlanProductShow: ModelsProduct.PERFORM_TARIFF_PLAN_PRODUCT_SHOW;
    performDepositProductShow: ModelsProduct.PERFORM_DEPOSIT_PRODUCT_SHOW;
    performContractSdoProductShow: ModelsProduct.PERFORM_CONTRACT_SDO_PRODUCT_SHOW;
    performContractNsoProductShow: ModelsProduct.PERFORM_CONTRACT_NSO_PRODUCT_SHOW;
    performCorporateCardProductShow: ModelsProduct.PERFORM_CORPORATE_CARD_PRODUCT_SHOW;
    performEncashmentProductShow: ModelsProduct.PERFORM_ENCASHMENT_PRODUCT_SHOW;
    performSelfEncashmentProductShow: ModelsProduct.PERFORM_SELF_ENCASHMENT_PRODUCT_SHOW;
    performCurrencyControlProductShow: ModelsProduct.PERFORM_CURRENCY_CONTROL_PRODUCT_SHOW;
    performAcquiringProductShow: ModelsProduct.PERFORM_ACQUIRING_PRODUCT_SHOW;
    performDboProductShow: ModelsProduct.PERFORM_DBO_PRODUCT_SHOW;
    performContractConstructorProductShow: ModelsProduct.PERFORM_CONTRACT_CONSTRUCTOR_PRODUCT_SHOW;
    performSalaryProductShow: ModelsProduct.PERFORM_SALARY_PRODUCT_SHOW;
    inputProductStatus: ModelsProduct.INPUT_PRODUCT_STATUS;
    inputCurrency: ModelsProduct.INPUT_CURRENCY;
    performContainerReset: ModelsProduct.PERFORM_CONTAINER_RESET;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    performModalProductHide: ModelsProductList.PERFORM_MODAL_PRODUCT_HIDE;
}
export declare type IProductProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
