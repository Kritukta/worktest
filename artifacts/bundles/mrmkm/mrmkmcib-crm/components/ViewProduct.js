/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { View } from 'ufs-mobile-platform';
import { Enums } from '../Enums';
import { LoaderWithText } from 'mrmkmcib-app';
import Styles from './styles/ViewProductStyles';
import ContainerProductAcquiring from '../containers/ContainerProductAcquiring';
import ContainerProductBankGuarantee from '../containers/ContainerProductBankGuarantee';
import ContainerProductCashManagement from '../containers/ContainerProductCashManagement';
import ContainerProductContractConstructor from '../containers/ContainerProductContractConstructor';
import ContainerProductContractNso from '../containers/ContainerProductContractNso';
import ContainerProductContractSdo from '../containers/ContainerProductContractSdo';
import ContainerProductCorporateCard from '../containers/ContainerProductCorporateCard';
import ContainerProductCredit from '../containers/ContainerProductCredit';
import ContainerProductDeposit from '../containers/ContainerProductDeposit';
import ContainerProductDbo from '../containers/ContainerProductDbo';
import ContainerProductEncashment from '../containers/ContainerProductEncashment';
import ContainerProductPackage from '../containers/ContainerProductPackage';
import ContainerProductPaymentAccount from '../containers/ContainerProductPaymentAccount';
import ContainerProductSalary from '../containers/ContainerProductSalary';
import ContainerProductSelfEncashment from '../containers/ContainerProductSelfEncashment';
import ContainerProductTariffPlan from '../containers/ContainerProductTariffPlan';
const getContent = (props) => {
    if (props.navigationInProgress) {
        return (React.createElement(View, { testID: 'test-id-45b79a4d-56b4-4458-92b1-906d20123623', style: Styles.loaderWrapper },
            React.createElement(LoaderWithText, { testID: 'test-id-05de89c8-49f7-4097-b7af-4d84947350e2', text: 'Загрузка данных' })));
    }
    switch (props.currentProductType) {
        case Enums.ProductType.AcquiringProduct: return (React.createElement(ContainerProductAcquiring, { testID: "ContainerProductAcquiring" }));
        case Enums.ProductType.BankGuaranteeProduct: return (React.createElement(ContainerProductBankGuarantee, { testID: "ContainerProductBankGuarantee" }));
        case Enums.ProductType.CashManagementProduct: return (React.createElement(ContainerProductCashManagement, { testID: "ContainerProductCashManagement" }));
        case Enums.ProductType.CreditProduct: return (React.createElement(ContainerProductCredit, { testID: "ContainerProductCredit" }));
        case Enums.ProductType.ContractConstructorProduct: return (React.createElement(ContainerProductContractConstructor, { testID: "ContainerProductContractConstructor" }));
        case Enums.ProductType.ContractNsoProduct: return (React.createElement(ContainerProductContractNso, { testID: "ContainerProductContractNso" }));
        case Enums.ProductType.ContractSdoProduct: return (React.createElement(ContainerProductContractSdo, { testID: "ContainerProductContractSdo" }));
        case Enums.ProductType.CorporateCardProduct: return (React.createElement(ContainerProductCorporateCard, { testID: "ContainerProductCorporateCard" }));
        case Enums.ProductType.DepositProduct: return (React.createElement(ContainerProductDeposit, { testID: "ContainerProductDeposit" }));
        case Enums.ProductType.DboProduct: return (React.createElement(ContainerProductDbo, { testID: "ContainerProductDbo" }));
        case Enums.ProductType.EncashmentProduct: return (React.createElement(ContainerProductEncashment, { testID: "ContainerProductEncashment" }));
        case Enums.ProductType.PackageProduct: return (React.createElement(ContainerProductPackage, { testID: "ContainerProductPackage" }));
        case Enums.ProductType.PaymentAccountProduct: return (React.createElement(ContainerProductPaymentAccount, { testID: 'ContainerProductPaymentAccount' }));
        case Enums.ProductType.SalaryProduct: return (React.createElement(ContainerProductSalary, { testID: "ContainerProductSalary" }));
        case Enums.ProductType.SelfEncashmentProduct: return (React.createElement(ContainerProductSelfEncashment, { testID: "ContainerProductSelfEncashment" }));
        case Enums.ProductType.TariffPlanProduct: return (React.createElement(ContainerProductTariffPlan, { testID: "ContainerProductTariffPlan" }));
        default: return (React.createElement(View, { testID: 'test-id-undefined-product-view' }));
    }
};
const ViewProduct = (props) => (getContent(props));
export default ViewProduct;
//# sourceMappingURL=ViewProduct.js.map