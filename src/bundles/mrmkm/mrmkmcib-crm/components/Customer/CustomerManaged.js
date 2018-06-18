/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { H1, Icon, IconType, Button, NavigationIconButton, NavigationIconButtonType, OptionItem, Table, TableHead, TableBody, TableCell, TableRow, TabSelector, Text, View, } from 'ufs-mobile-platform';
import { LoaderWithText, RefreshBar, AlertView, ErrorModal, EnumsApp } from 'mrmkmcib-app';
import { Enums } from '../../Enums';
import Styles from './styles/CustomerManagedStyles';
import * as Utils from "../../common/Util";
import CustomerManagedTabMain from './CustomerManagedTabMain';
import CustomerManagedTabOwnerList from './CustomerManagedTabOwnerList';
import ContainerDealList from '../../containers/ContainerDealList';
import { ContainerCustomerDashboard } from "mrmkmcib-dashboard";
import { Breadcrumbs } from 'mrmkmcib-ui';
// import {AlertView, ErrorModal, EnumsApp} from 'mrmkmcib-app'
const getMappedHistory = (hierarchy) => {
    const history = hierarchy.map((item, i) => {
        return { title: item.name, key: item.id, accessible: true, testID: `test-id-getMappedHistory-${item.id}` };
    });
    return history;
};
const ENUM_PRODUCT_LIST = [
    /**
     * Product types should be ordered according the business requirements
     */
    Enums.ProductType.PaymentAccountProduct,
    Enums.ProductType.CreditProduct,
    Enums.ProductType.DepositProduct,
    Enums.ProductType.ContractConstructorProduct,
    Enums.ProductType.PackageProduct,
    Enums.ProductType.TariffPlanProduct,
    Enums.ProductType.CustomsPaymentProduct,
    Enums.ProductType.CurrencyControlProduct,
    Enums.ProductType.EncashmentProduct,
    Enums.ProductType.SelfEncashmentProduct,
    Enums.ProductType.CorporateCardProduct,
    Enums.ProductType.AcquiringProduct,
    Enums.ProductType.BankGuaranteeProduct,
    Enums.ProductType.ContractNsoProduct,
    Enums.ProductType.ContractSdoProduct,
    Enums.ProductType.DboProduct,
    Enums.ProductType.CashManagementProduct,
    Enums.ProductType.SalaryProduct,
];
const getBreadCrumbs = (props) => {
    if (props.customerManaged.hierarchy && props.customerManaged.hierarchy.length === 0) {
        return null;
    }
    else {
        return (React.createElement(View, { testID: 'test-id-42db2728-8226-40b1-8423-8c1a2ef37191', style: Styles.Breadcrumbs },
            React.createElement(Breadcrumbs, { onTap: (id) => {
                    props.performCustomerOpen(id, Enums.CustomerMode.SameType);
                }, items: getMappedHistory(props.customerManaged.hierarchy || []) })));
    }
};
const getTabSelectorValue = (value) => {
    switch (value) {
        case 0:
            return 'General';
        case 1:
            return 'Deals';
        case 2:
            return 'Products';
        case 3:
            return 'Owners';
        case 4:
            return 'Dashboard';
        default:
            return 'General';
    }
};
const getTabSelector = (props) => {
    return (React.createElement(TabSelector, { testID: 'test-id-Customer-Managed-Tab-Selector', style: Styles.TabSelector, value: getTabSelectorValue(props.currentTab), onChange: (index) => {
            props.performChangeTab(index, index);
        } },
        React.createElement(OptionItem, { testID: 'test-id-4ac266c6-a204-2fa2-4c84-10abe7b5b716', value: 'General', title: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435' }),
        React.createElement(OptionItem, { testID: 'customer-managed-tab-main-deals-switch', value: 'Deals', title: '\u0421\u0434\u0435\u043B\u043A\u0438' }),
        React.createElement(OptionItem, { testID: 'test-id-662b7e95-9d4f-2489-f6ed-3a6845ab6059', value: 'Products', title: '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B' }),
        React.createElement(OptionItem, { testID: 'test-id-f7a498ae-1ccd-2692-431e-117010df9d31', value: 'Owners', title: '\u0412\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B' }),
        // Для руководителя с функцией КМ и для типа организации "Филиал" не отображать вкладку Аналитика
        (props.currentUserAd.role != EnumsApp.RoleAd.ChiefCM) &&
            (props.customerManaged.organizationType.code != 'Branch') ?
            React.createElement(OptionItem, { testID: 'test-id-2e99e52a-39cd-415b-5553-db231ebb9bef', value: 'Dashboard', title: '\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430' }) :
            null));
};
const getTabContent = (props) => {
    const currentTab = props.currentTab;
    switch (currentTab) {
        case 0:
            return (React.createElement(View, { testID: 'test-id-abdccdca-cf31-0462-2a3a-ec4a1bc215ad', style: Styles.TabContentWrapper },
                React.createElement(CustomerManagedTabMain, Object.assign({ testID: 'test-id-f98e762a-5c5b-2fc8-e818-05ec31c50c5b' }, props))));
        case 1:
            return (React.createElement(View, { testID: 'test-id-77e6d053-ef8f-9084-9bc0-bb558ad341ca', style: Styles.TabContentWrapper },
                React.createElement(ContainerDealList, { testID: 'test-id-bf3de0d3-6d3e-09ea-2d1f-f6b751c97827' })));
        case 2:
            return (React.createElement(View, { testID: 'test-id-fe234e6e-d52b-b2b5-5c27-c842fd130329', style: Styles.TabContentWrapper }, getProductTypeList(props)));
        case 3:
            return (React.createElement(View, { testID: 'test-id-cd638830-25f2-c717-d764-8f535dda1f55', style: Styles.TabContentWrapper },
                React.createElement(CustomerManagedTabOwnerList, Object.assign({ testID: 'test-id-fbc789c7-5ea9-8299-c95c-5075d8d8be63' }, props))));
        case 4:
            return (React.createElement(View, { testID: 'test-id-94add4c4-62a2-daaf-51ba-5e7846da76db', style: Styles.TabContentWrapper },
                React.createElement(View, { testID: 'test-id-80276320-4b0f-14ef-2f9b-6bc2ea8704a1', style: [Styles.dashboardContainer] },
                    React.createElement(ContainerCustomerDashboard, { testID: 'test-id-0f3b173a-7b7e-192f-fbae-71499bc803f9' }))));
        default:
            return (React.createElement(View, { testID: 'test-id-fab68bff-a1e3-5342-b811-44de370cb674', style: Styles.TabContentWrapper },
                React.createElement(CustomerManagedTabMain, Object.assign({ testID: 'test-id-31da3cb8-9504-1509-378c-6ac3da33d428' }, props))));
    }
};
const getProductTypeRowList = (props) => {
    return ENUM_PRODUCT_LIST.map((type) => getSubProductList(props, type));
};
const getDateInCacheProductList = (props, productType) => {
    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct:
            return props.creditActiveProductList.bhCachedDate;
        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct:
            return props.depositActiveProductList.bhCachedDate;
        case Enums.ProductType.CorporateCardProduct:
            return props.corporateCardActiveProductList.bhCachedDate;
        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct:
            return props.encashmentContractActiveProductList.bhCachedDate;
        case Enums.ProductType.CurrencyControlProduct:
            return props.legalInfoProductList.bhCachedDate;
        case Enums.ProductType.AcquiringProduct:
            return props.acquiringActiveProductList.bhCachedDate;
        case Enums.ProductType.DboProduct:
            return props.dboActiveProductList.bhCachedDate;
        case Enums.ProductType.ContractConstructorProduct:
            return props.udboActiveProductList.bhCachedDate;
        case Enums.ProductType.SalaryProduct:
            return props.salaryActiveProductList.bhCachedDate;
        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct:
        case Enums.ProductType.CustomsPaymentProduct:
            return props.settlementAgreementActiveProductList.bhCachedDate;
        default: return null;
    }
};
const getProductTypeFetchingError = (props, productType) => {
    const isActiveProductList = Utils.isActiveProductList(props.productListAgreementStatus);
    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct: return (isActiveProductList ? props.creditActiveProductListError
            : props.creditCloseProductListError);
        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct: return (isActiveProductList ? props.depositActiveProductListError
            : props.depositCloseProductListError);
        case Enums.ProductType.CorporateCardProduct: return (isActiveProductList ? props.corporateCardActiveProductListError
            : props.corporateCardCloseProductListError);
        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct: return (isActiveProductList ? props.encashmentContractActiveProductListError
            : props.encashmentContractCloseProductListError);
        case Enums.ProductType.CurrencyControlProduct: return (props.legalInfoProductListError);
        case Enums.ProductType.AcquiringProduct: return (isActiveProductList ? props.acquiringActiveProductListError
            : props.acquiringCloseProductListError);
        case Enums.ProductType.DboProduct: return (isActiveProductList ? props.dboActiveProductListError
            : props.dboCloseProductListError);
        case Enums.ProductType.ContractConstructorProduct: return (isActiveProductList ? props.udboActiveProductListError
            : props.udboCloseProductListError);
        case Enums.ProductType.SalaryProduct: return (isActiveProductList ? props.salaryActiveProductListError
            : props.salaryCloseProductListError);
        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct:
        case Enums.ProductType.CustomsPaymentProduct: return (isActiveProductList ? props.settlementAgreementActiveProductListError
            : props.settlementAgreementCloseProductListError);
        default: return (null);
    }
};
const getPollingStatusProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? props.creditActiveProductList.pollingStatus
                    : props.creditCloseProductList.pollingStatus;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? props.depositActiveProductList.pollingStatus
                    : props.depositCloseProductList.pollingStatus;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductList.pollingStatus
                : props.corporateCardCloseProductList.pollingStatus;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? props.encashmentContractActiveProductList.pollingStatus
                    : props.encashmentContractCloseProductList.pollingStatus;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductList.pollingStatus;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductList.pollingStatus
                : props.acquiringCloseProductList.pollingStatus;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductList.pollingStatus
                : props.dboCloseProductList.pollingStatus;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductList.pollingStatus
                : props.udboCloseProductList.pollingStatus;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductList.pollingStatus
                : props.salaryCloseProductList.pollingStatus;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? props.settlementAgreementActiveProductList.pollingStatus
                    : props.settlementAgreementCloseProductList.pollingStatus;
            }
        default: return Enums.ProductPollingStatus.Success;
    }
};
const getUpdatingProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case Enums.ProductType.CreditProduct === productType:
        case Enums.ProductType.BankGuaranteeProduct === productType: {
            return isActiveProductList ? props.creditActiveProductListUpdating ||
                props.creditActiveProductEksListFetching
                : props.creditActiveProductListUpdating ||
                    props.creditCloseProductEksListFetching;
        }
        case Enums.ProductType.DepositProduct === productType:
        case Enums.ProductType.ContractNsoProduct === productType:
        case Enums.ProductType.ContractSdoProduct === productType: {
            return isActiveProductList ? props.depositActiveProductListUpdating ||
                props.depositActiveProductEksListFetching
                : props.depositCloseProductListUpdating ||
                    props.depositCloseProductEksListFetching;
        }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductListUpdating ||
                props.corporateCardActiveProductEksListFetching
                : props.corporateCardCloseProductListUpdating ||
                    props.corporateCardCloseProductEksListFetching;
        }
        case Enums.ProductType.EncashmentProduct === productType:
        case Enums.ProductType.SelfEncashmentProduct === productType: {
            return isActiveProductList ? props.encashmentContractActiveProductListUpdating ||
                props.encashmentContractActiveProductEksListFetching
                : props.encashmentContractCloseProductListUpdating ||
                    props.encashmentContractCloseProductEksListFetching;
        }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductListUpdating || props.legalInfoProductEksListFetching;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductListUpdating ||
                props.acquiringActiveProductEksListFetching
                : props.acquiringCloseProductListUpdating ||
                    props.acquiringCloseProductEksListFetching;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListUpdating ||
                props.dboActiveProductEksListFetching
                : props.dboCloseProductListUpdating ||
                    props.dboCloseProductEksListFetching;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListUpdating ||
                props.udboActiveProductEksListFetching
                : props.udboCloseProductListUpdating ||
                    props.udboCloseProductEksListFetching;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListUpdating ||
                props.salaryActiveProductEksListFetching
                : props.salaryCloseProductListUpdating ||
                    props.salaryCloseProductEksListFetching;
        }
        case Enums.ProductType.CashManagementProduct === productType:
        case Enums.ProductType.PaymentAccountProduct === productType:
        case Enums.ProductType.PackageProduct === productType:
        case Enums.ProductType.TariffPlanProduct === productType:
        case Enums.ProductType.CustomsPaymentProduct === productType: {
            return isActiveProductList ? props.settlementAgreementActiveProductListUpdating ||
                props.settlementAgreementActiveProductEksListFetching
                : props.settlementAgreementCloseProductListUpdating ||
                    props.settlementAgreementCloseProductEksListFetching;
        }
        default: return false;
    }
};
const getFetchingProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? props.creditActiveProductListFetching
                    : props.creditCloseProductListFetching;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? props.depositActiveProductListFetching
                    : props.depositCloseProductListFetching;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductListFetching
                : props.corporateCardCloseProductListFetching;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? props.encashmentContractActiveProductListFetching
                    : props.encashmentContractCloseProductListFetching;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductListFetching;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductListFetching
                : props.acquiringCloseProductListFetching;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListFetching
                : props.dboCloseProductListFetching;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListFetching
                : props.udboCloseProductListFetching;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListFetching
                : props.salaryCloseProductListFetching;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? props.settlementAgreementActiveProductListFetching
                    : props.settlementAgreementCloseProductListFetching;
            }
        default: return false;
    }
};
const getCachedDateProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
            Enums.ProductType.BankGuaranteeProduct === productType):
            {
                return isActiveProductList ? props.creditActiveProductListCachedDate
                    : props.creditActiveProductListCachedDate;
            }
        case (Enums.ProductType.DepositProduct === productType ||
            Enums.ProductType.ContractNsoProduct === productType ||
            Enums.ProductType.ContractSdoProduct === productType):
            {
                return isActiveProductList ? props.depositActiveProductListCachedDate
                    : props.depositCloseProductListCachedDate;
            }
        case Enums.ProductType.CorporateCardProduct === productType: {
            return isActiveProductList ? props.corporateCardActiveProductListCachedDate
                : props.corporateCardCloseProductListCachedDate;
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
            Enums.ProductType.SelfEncashmentProduct === productType):
            {
                return isActiveProductList ? props.encashmentContractActiveProductListCachedDate
                    : props.encashmentContractCloseProductListCachedDate;
            }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            return props.legalInfoProductListCachedDate;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            return isActiveProductList ? props.acquiringActiveProductListCachedDate
                : props.acquiringCloseProductListCachedDate;
        }
        case Enums.ProductType.DboProduct === productType: {
            return isActiveProductList ? props.dboActiveProductListCachedDate
                : props.dboCloseProductListCachedDate;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            return isActiveProductList ? props.udboActiveProductListCachedDate
                : props.udboCloseProductListCachedDate;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            return isActiveProductList ? props.salaryActiveProductListCachedDate
                : props.salaryCloseProductListCachedDate;
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
            Enums.ProductType.PaymentAccountProduct === productType ||
            Enums.ProductType.PackageProduct === productType ||
            Enums.ProductType.TariffPlanProduct === productType ||
            Enums.ProductType.CustomsPaymentProduct === productType):
            {
                return isActiveProductList ? props.settlementAgreementActiveProductListCachedDate
                    : props.settlementAgreementCloseProductListCachedDate;
            }
        default: return new Date();
    }
};
const getTypeProductList = (props, productType, isActiveProductList) => {
    switch (true) {
        case Enums.ProductType.CreditProduct === productType: {
            const creditProductList = isActiveProductList ? props.creditActiveProductList
                : props.creditCloseProductList;
            return creditProductList &&
                creditProductList.data.length ? creditProductList.data.filter((product) => product.productType == productType && product.creditProduct != null).map((product) => product.creditProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.BankGuaranteeProduct === productType: {
            const bankGuaranteeProductList = isActiveProductList ? props.creditActiveProductList
                : props.creditCloseProductList;
            return bankGuaranteeProductList &&
                bankGuaranteeProductList.data.length ? bankGuaranteeProductList.data.filter((product) => product.productType == productType && product.bankGuaranteeProduct != null).map((product) => product.bankGuaranteeProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.DepositProduct === productType: {
            const productDepositList = isActiveProductList ? props.depositActiveProductList
                : props.depositCloseProductList;
            return productDepositList &&
                productDepositList.data.length ? productDepositList.data.filter((product) => product.productType === productType && product.depositProduct != null).map((product) => product.depositProduct // null are filtered above
            ) : null;
        }
        case Enums.ProductType.ContractSdoProduct === productType: {
            const productContractSdoList = isActiveProductList ? props.depositActiveProductList
                : props.depositCloseProductList;
            return productContractSdoList &&
                productContractSdoList.data.length ? productContractSdoList.data.filter((product) => product.productType === productType && product.contractSDO != null).map((product) => product.contractSDO // null are filtered above
            ) : null;
        }
        case Enums.ProductType.ContractNsoProduct === productType: {
            const productContractNsoList = isActiveProductList ? props.depositActiveProductList
                : props.depositCloseProductList;
            return productContractNsoList &&
                productContractNsoList.data.length ? productContractNsoList.data.filter((product) => product.productType === productType && product.contractNSO != null).map((product) => product.contractNSO // null are filtered above
            ) : null;
        }
        case Enums.ProductType.CashManagementProduct === productType: {
            const cashManagementProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                : props.settlementAgreementCloseProductList;
            return cashManagementProductList &&
                cashManagementProductList.data.length ? cashManagementProductList.data.filter((product) => product.productType === productType && product.cashManagementProduct != null).map((product) => product.cashManagementProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.PaymentAccountProduct === productType: {
            const paymentAccountProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                : props.settlementAgreementCloseProductList;
            return paymentAccountProductList &&
                paymentAccountProductList.data.length ? paymentAccountProductList.data.filter((product) => product.paymentAccountProduct != null).map((product) => product.paymentAccountProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.TariffPlanProduct === productType: {
            const tariffPlanProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                : props.settlementAgreementCloseProductList;
            return tariffPlanProductList &&
                tariffPlanProductList.data.length ? tariffPlanProductList.data.filter((product) => product.tariffPlanProduct != null).map((product) => product.tariffPlanProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.CustomsPaymentProduct === productType: {
            const customsPaymentProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                : props.settlementAgreementCloseProductList;
            return customsPaymentProductList &&
                customsPaymentProductList.data.length ? customsPaymentProductList.data.filter((product) => product.customsPaymentProduct != null).map((product) => product.customsPaymentProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.PackageProduct === productType: {
            const packageProductList = isActiveProductList ? props.settlementAgreementActiveProductList
                : props.settlementAgreementCloseProductList;
            return packageProductList &&
                packageProductList.data.length ? packageProductList.data.filter((product) => product.packageProduct != null).map((product) => product.packageProduct) // null are filtered above)
                : null;
        }
        case Enums.ProductType.CorporateCardProduct === productType: {
            const corporateCardProductList = isActiveProductList ? props.corporateCardActiveProductList
                : props.corporateCardCloseProductList;
            return corporateCardProductList &&
                corporateCardProductList.data.length ? corporateCardProductList.data.filter((product) => product.corporateCardProduct != null).map((product) => product.corporateCardProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.SelfEncashmentProduct === productType: {
            const selfEncashmentProductList = isActiveProductList ? props.encashmentContractActiveProductList
                : props.encashmentContractCloseProductList;
            return selfEncashmentProductList &&
                selfEncashmentProductList.data.length ? selfEncashmentProductList.data.filter((product) => product.selfEncashmentContractProduct != null).map((product) => product.selfEncashmentContractProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.EncashmentProduct === productType: {
            const encashmentProductList = isActiveProductList ? props.encashmentContractActiveProductList
                : props.encashmentContractCloseProductList;
            return encashmentProductList &&
                encashmentProductList.data.length ? encashmentProductList.data.filter((product) => product.encashmentContractProduct != null).map((product) => product.encashmentContractProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.CurrencyControlProduct === productType: {
            const currencyControlProductList = isActiveProductList ? props.legalInfoProductList
                : null;
            return currencyControlProductList && currencyControlProductList.data.length ? currencyControlProductList.data.filter((product) => product.legalInfoProduct != null).map((product) => product.legalInfoProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.AcquiringProduct === productType: {
            const acquiringProductList = isActiveProductList ? props.acquiringActiveProductList
                : props.acquiringCloseProductList;
            return acquiringProductList &&
                acquiringProductList.data.length ? acquiringProductList.data.filter((product) => product.acquiringProduct != null).map((product) => product.acquiringProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.DboProduct === productType: {
            const dboProductList = isActiveProductList ? props.dboActiveProductList
                : props.dboCloseProductList;
            return dboProductList &&
                dboProductList.data.length ? dboProductList.data.filter((product) => product.dboProduct != null).map((product) => product.dboProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
            const contractConstructorProductList = isActiveProductList ? props.udboActiveProductList
                : props.udboCloseProductList;
            return contractConstructorProductList &&
                contractConstructorProductList.data.length ? contractConstructorProductList.data.filter((product) => product.udboProduct != null).map((product) => product.udboProduct) // null are filtered above
                : null;
        }
        case Enums.ProductType.SalaryProduct === productType: {
            const salaryProductList = isActiveProductList ? props.salaryActiveProductList
                : props.salaryCloseProductList;
            return salaryProductList &&
                salaryProductList.data.length ? salaryProductList.data.filter((product) => product.salaryProduct != null).map((product) => product.salaryProduct) // null are filtered above
                : null;
        }
        default: return [];
    }
};
const getSubProductList = (props, type) => {
    const isActiveProductList = isActiveAgreementStatusProductList(props);
    return {
        type,
        isActiveProductList: isActiveAgreementStatusProductList(props),
        key: getProductTypeKey(props, type),
        list: getTypeProductList(props, type, isActiveProductList),
        name: Utils.getProductListTypeName(type),
        onClick: (row) => onClickProductListRow(row, props),
        error: productListError(props, type),
        eksErrorList: productListEksListError(props, type),
        isUpdating: getUpdatingProductList(props, type, isActiveProductList),
        isFetching: getFetchingProductList(props, type, isActiveProductList),
        pollingStatus: getPollingStatusProductList(props, type, isActiveProductList),
        listCacheDate: getCachedDateProductList(props, type, isActiveProductList),
    };
};
const getLegalInfo = (props) => {
    const product = props.legalInfoProductList.data && props.legalInfoProductList.data[0] || null;
    const info = product && product.legalInfoProduct && product.legalInfoProduct.type || null;
    return props.legalInfoProductListError == null
        ? (info ? 'Есть' : 'Нет')
        : '';
};
const isActiveAgreementStatusProductList = (props) => (props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened);
const onClickProductListRow = (row, props) => {
    const isCurrencyControlProduct = row.type == Enums.ProductType.CurrencyControlProduct;
    if (row.isUpdating || row.isFetching || isCurrencyControlProduct) {
        return;
    }
    if (row.error && row.isActiveProductList) {
        props.performCallGetUncachedRequestProductList(row.type);
        return;
    }
    if (row.eksErrorList && row.isActiveProductList) {
        props.performCallEksRequestProductList(row.type, props.productListAgreementStatus);
        return;
    }
    if (row.pollingStatus == Enums.ProductPollingStatus.Success ||
        row.isActiveProductList == false) {
        props.navigateToProductListScreen(row.type);
        return;
    }
};
const getProductTypeKey = (props, type) => (`${props.productListAgreementStatus}-${type}`);
const getProductTypeEksErrorList = (props, type) => {
    const isActiveProductList = Utils.isActiveProductList(props.productListAgreementStatus);
    switch (type) {
        case Enums.ProductType.AcquiringProduct: return isActiveProductList
            ? props.acquiringActiveProductList.eksErrorList
            : props.acquiringCloseProductList.eksErrorList;
        case Enums.ProductType.BankGuaranteeProduct: return isActiveProductList
            ? props.creditActiveProductList.eksErrorList
            : props.creditCloseProductList.eksErrorList;
        case Enums.ProductType.CashManagementProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList;
        case Enums.ProductType.ContractConstructorProduct: return isActiveProductList
            ? props.udboActiveProductList.eksErrorList
            : props.udboCloseProductList.eksErrorList;
        case Enums.ProductType.ContractNsoProduct: return isActiveProductList
            ? props.depositActiveProductList.eksErrorList
            : props.depositCloseProductList.eksErrorList;
        case Enums.ProductType.ContractSdoProduct: return isActiveProductList
            ? props.depositActiveProductList.eksErrorList
            : props.depositCloseProductList.eksErrorList;
        case Enums.ProductType.CorporateCardProduct: return isActiveProductList
            ? props.corporateCardActiveProductList.eksErrorList
            : props.corporateCardCloseProductList.eksErrorList;
        case Enums.ProductType.CreditProduct: return isActiveProductList
            ? props.creditActiveProductList.eksErrorList
            : props.creditCloseProductList.eksErrorList;
        case Enums.ProductType.CurrencyControlProduct: return isActiveProductList
            ? props.legalInfoProductList.eksErrorList
            : [];
        case Enums.ProductType.CustomsPaymentProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList;
        case Enums.ProductType.DepositProduct: return isActiveProductList
            ? props.depositActiveProductList.eksErrorList
            : props.depositCloseProductList.eksErrorList;
        case Enums.ProductType.DboProduct: return isActiveProductList
            ? props.dboActiveProductList.eksErrorList
            : props.dboCloseProductList.eksErrorList;
        case Enums.ProductType.EncashmentProduct: return isActiveProductList
            ? props.encashmentContractActiveProductList.eksErrorList
            : props.encashmentContractCloseProductList.eksErrorList;
        case Enums.ProductType.PackageProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList;
        case Enums.ProductType.PaymentAccountProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList;
        case Enums.ProductType.SalaryProduct: return isActiveProductList
            ? props.salaryActiveProductList.eksErrorList
            : props.salaryCloseProductList.eksErrorList;
        case Enums.ProductType.SelfEncashmentProduct: return isActiveProductList
            ? props.encashmentContractActiveProductList.eksErrorList
            : props.encashmentContractCloseProductList.eksErrorList;
        case Enums.ProductType.TariffPlanProduct: return isActiveProductList
            ? props.settlementAgreementActiveProductList.eksErrorList
            : props.settlementAgreementCloseProductList.eksErrorList;
        case Enums.ProductType.None:
        default: return [];
    }
};
const productListError = (props, type) => {
    const fetchingError = getProductTypeFetchingError(props, type);
    if (fetchingError != null) {
        return fetchingError;
    }
    return null;
};
const productListEksListError = (props, type) => {
    const eksErrorList = getProductTypeEksErrorList(props, type);
    if (Array.isArray(eksErrorList) && (eksErrorList.length > 0)) {
        return eksErrorList;
    }
    return null;
};
const getProductTypeErrorText = (props, row) => (row.error || row.eksErrorList ? (React.createElement(Text, { testID: `test-id-${row.key}-error-text`, key: `${row.key}-error-text`, style: Styles.productTypeFetchError, numberOfLines: 1, ellipsizeMode: 'tail' }, row.eksErrorList ? Utils.getProductListItemErrorText(null)
    : Utils.getProductListItemErrorText(row.error))) : null);
const getProductTypeRowDetails = (props, row, index) => (row.isUpdating ? ( // if (row.isUpdating) { return
React.createElement(Text, { testID: `test-id-${row.key}-is-fetching`, key: `${row.key}-is-fetching`, style: Styles.productTypeLoadingText }, Utils.productListItemFetching)) : (row.isActiveProductList && (row.error || row.eksErrorList)) ? ( // } else if (row.hasFailed) { return
Utils.isClientNotFoundInEksSystem(row.error) == false ? React.createElement(NavigationIconButton, { testID: `test-id-${row.key}-refresh-button`, key: `${row.key}-refresh-button`, type: NavigationIconButtonType.REFRESH, onExecute: () => row.onClick(row) }) : null) : (row.type == Enums.ProductType.CurrencyControlProduct) ? ( // } else if (...) { return
React.createElement(Text, { testID: `test-id-${row.key}-details`, key: `${row.key}-details`, style: Styles.productTypeDetailsText }, getLegalInfo(props))) : ( // } else { return
React.createElement(View, { testID: `test-id-${row.key}-details-view`, key: `${row.key}-details-view`, style: Styles.productListViewMrmLink },
    (props.productListAgreementStatus ==
        Enums.ProductListAgreementStatus.Opened) && (React.createElement(Text, { style: Styles.productListItemValueText, key: `${row.key}-product-list-length`, testID: `test-id-${row.key}-product-list-length` }, `${row.list ? row.list.length : 0}`)),
    React.createElement(Button, { testID: `test-id-${row.key}-chevron-button`, key: `${row.key}-chevron-button`, onExecute: () => row.onClick(row) },
        React.createElement(Icon, { testID: `test-id-${row.key}-chevron`, key: `${row.key}-chevron`, disabled: true, type: IconType.MrmLink })))));
const getProductTypeRow = (props, row, index) => (React.createElement(TableRow, { testID: `test-id-${row.key}-row`, key: `${index}-${row.key}-row`, onClick: () => row.onClick(row) },
    React.createElement(TableCell, { testID: `test-id-${row.key}-cell`, key: `${index}-${row.key}-cell`, style: [
            Styles.productTypeCell,
            row.isUpdating ? Styles.productTypeCellFetching : {}
        ] },
        React.createElement(View, { testID: `test-id-${row.key}-cell-view`, key: `${index}-${row.key}-cell-view`, style: [
                Styles.productTypeCellView,
                row.isUpdating ? Styles.productTypeCellViewFetching : {},
            ] },
            React.createElement(View, { testID: `test-id-${row.key}-title-view`, key: `${index}-title-view`, style: Styles.productTypeTitleView },
                React.createElement(Text, { testID: `test-id-${row.key}-title`, key: `${index}-${row.key}-title`, style: Styles.productTypeTitle, numberOfLines: 1, ellipsizeMode: 'tail' }, row.name),
                row.isUpdating == false && getProductTypeErrorText(props, row)),
            React.createElement(View, { testID: `test-id-${row.key}-details-view-container`, key: `${index}-${row.key}-details-view-container`, style: Styles.productTypeDetailView }, getProductTypeRowDetails(props, row, index))))));
const getLoader = () => (React.createElement(View, { style: Styles.wrapperLoader, testID: "test-id-1953e0ea-d5b8-11e7-9296-cec278b6b50a" },
    React.createElement(LoaderWithText, { text: "Загрузка данных...", testID: "test-id-5b0e0c6e-d5b7-11e7-9296-cec278b6b50a" })));
const isProductListLoading = (props) => {
    return props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened && ((props.settlementAgreementActiveProductListFetching && !props.settlementAgreementActiveProductListUpdating) ||
        (props.corporateCardActiveProductListFetching && !props.corporateCardActiveProductListUpdating) ||
        (props.depositActiveProductListFetching && !props.depositActiveProductListUpdating) ||
        (props.encashmentContractActiveProductListFetching && !props.encashmentContractActiveProductListUpdating) ||
        (props.salaryActiveProductListFetching && !props.salaryActiveProductListUpdating) ||
        (props.dboActiveProductListFetching && !props.dboActiveProductListUpdating) ||
        (props.creditActiveProductListFetching && !props.creditActiveProductListUpdating) ||
        (props.udboActiveProductListFetching && !props.udboActiveProductListUpdating) ||
        (props.acquiringActiveProductListFetching && !props.acquiringActiveProductListUpdating) ||
        (props.legalInfoProductListFetching && !props.legalInfoProductListUpdating));
};
const isProductListServiceLoaded = (props, row) => {
    switch (props.productListAgreementStatus) {
        case Enums.ProductListAgreementStatus.Opened: {
            return row.error != null ||
                row.eksErrorList != null ||
                row.isUpdating || (Array.isArray(row.list) && (row.list.length > 0) || false);
        }
        case Enums.ProductListAgreementStatus.Closed: {
            return true;
        }
        default: return false;
    }
};
const getProductTypeList = (props) => (React.createElement(View, { style: Styles.productTypeListContainer, testID: "test-id-b549f050-96f9-11e7-abc4-cec278b6b50a" },
    React.createElement(View, { testID: "test-id-bea36622-96f9-11e7-abc4-cec278b6b50a", style: Styles.productTypeTabSelector },
        React.createElement(TabSelector, { style: Styles.tabSelectorProductListAgreementStatus, testID: "test-id-a4df1740-96f9-11e7-abc4-cec278b6b50a", value: `${Utils.getAgreementStatusProductList(props.productListAgreementStatus)}`, onChange: (value) => {
                switch (value) {
                    case Enums.ProductListAgreementStatus.Opened:
                        props.performInputProductListAgreementStatus(Enums.ProductListAgreementStatus.Opened);
                        break;
                    case Enums.ProductListAgreementStatus.Closed:
                        props.performInputProductListAgreementStatus(Enums.ProductListAgreementStatus.Closed);
                        break;
                    /* Перенос функционала в релиз 2018-3
                                       case Enums.ProductListAgreementStatus.Prognostic:
                        props.callGetForecastPrognosticDealList()
                        props.performInputProductListAgreementStatus(Enums.ProductListAgreementStatus.Prognostic)
                        break */
                }
            } },
            React.createElement(OptionItem, { value: `${Utils.getAgreementStatusProductList(Enums.ProductListAgreementStatus.Opened)}`, title: `${Utils.getAgreementStatusNameProductList(Enums.ProductListAgreementStatus.Opened)}`, testID: "test-id-aaa1ae9a-96f9-11e7-abc4-cec278b6b50a" }),
            React.createElement(OptionItem, { value: `${Utils.getAgreementStatusProductList(Enums.ProductListAgreementStatus.Closed)}`, title: `${Utils.getAgreementStatusNameProductList(Enums.ProductListAgreementStatus.Closed)}`, testID: "test-id-c6b78c80-96f9-11e7-abc4-cec278b6b50a" }))),
    isProductListLoading(props) ? getLoader() : null,
    React.createElement(View, { testID: 'test-id-product-type-list-container', style: Styles.productTypeListTableContainer }, (props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened ||
        props.productListAgreementStatus == Enums.ProductListAgreementStatus.Closed) ?
        React.createElement(Table, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f19' },
            React.createElement(TableBody, { testID: 'test-id-b097154c-7226-7def-f6f9-77bdabbc6ec7' }, getProductTypeRowList(props)
                .filter((product) => {
                const isNotFetching = product.isFetching === false;
                const isUpdating = product.isUpdating;
                const hasProductList = Array.isArray(product.list) ? product.list.length > 0 : false;
                const hasError = product.error || product.eksErrorList ? true : false;
                const isCloseProductList = isActiveAgreementStatusProductList(props) === false;
                const isCurrencyControl = product.type === Enums.ProductType.CurrencyControlProduct;
                return isCloseProductList && isCurrencyControl ? false :
                    (isUpdating || isCloseProductList || (isNotFetching && (hasProductList || hasError)));
            })
                .map((row, index) => (getProductTypeRow(props, row, index))))) :
        renderPrognosticProducts(props)),
    getCacheInfoView(props),
    alertView(props)));
const renderPrognosticProducts = (props) => {
    const dealListRendered = [];
    props.prognosticProductList.data.map((item) => {
        dealListRendered.push(productTableCell(item, props));
    });
    return (React.createElement(View, { testID: 'test-id-render-prognosic-list-view' },
        props.prognosticProductListFetching ? getLoader() : null,
        props.prognosticProductList.data.length === 0 &&
            !props.prognosticProductListError &&
            !props.prognosticProductListFetching &&
            React.createElement(View, { testID: 'test-id-render-prognosic-list-view-no-data', style: { alignSelf: 'center' } },
                React.createElement(Text, { testID: 'test-id-5500da0f-71b8-ac55-234f-d1c66706849' }, "\u041D\u0435\u0442 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432")),
        props.prognosticProductListError &&
            React.createElement(ErrorModal, { testID: 'test-id-prognostic-product-list-alert-view', repeat: props.prognosticProductListError.code == 'TIMEOUT' ? props.callGetForecastPrognosticDealList : null, cancel: props.performPrognosticProductListModalAlertHide, titleText: 'Внимание', messageText: 'Не удалось загрузить данные.', isVisible: props.isVisiblePrognosticProductListModalAlert, cacheDate: new Date() }),
        !props.prognosticProductListError && props.prognosticProductList.data.length > 0 &&
            props.productListAgreementStatus == Enums.ProductListAgreementStatus.Prognostic &&
            React.createElement(View, { testID: 'table' },
                React.createElement(View, { testID: 'header', style: Styles.PrognosticDealsTableHeader },
                    React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a21qaf093ae', style: [Styles.PrognosticCellFirstCol, { marginLeft: 20 }] },
                        React.createElement(Text, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9q214af093a0', style: Styles.PrognosticCellFirstColText }, "\u0412\u0438\u0434 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430")),
                    React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a21waf093ae', style: Styles.PrognosticCellSecondCol },
                        React.createElement(Text, { testID: 'test-id-1a9a9066-eaf2-11e0-80c1-9a214rf093ae', style: Styles.PrognosticCellSecondColText }, "\u0412\u0430\u043B\u044E\u0442\u0430")),
                    React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093qe', style: Styles.PrognosticCellThirdCol },
                        React.createElement(Text, { testID: 'test-id-1a9a1066-eaf2-11e0-80c1-9a214ag093ae', style: Styles.PrognosticCellThirdColText }, "\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F")),
                    React.createElement(View, { testID: 'flex1', style: Styles.content })),
                React.createElement(Table, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f19' },
                    React.createElement(TableHead, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f19', style: Styles.HideDefaultHeader }),
                    React.createElement(TableBody, { testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f00' }, dealListRendered)))));
};
const productTableCell = (item, props) => {
    const placeholder = 'Нет данных';
    return (React.createElement(TableRow, { key: item.id, testID: 'test-id-5500da0f-70b8-ac55-234f-d1c667068f50', onClick: () => props.navigateToProductForecastDealInfoScreen(item) },
        React.createElement(TableCell, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214cf013ae', style: Styles.PrognosticTableCell },
            React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae', style: Styles.PrognosticCellFirstCol },
                React.createElement(Text, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093a0', style: Styles.PrognosticCellText }, item.productType.value)),
            React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae', style: Styles.PrognosticCellSecondCol },
                React.createElement(Text, { testID: 'test-id-1a9a9066-eaf2-11e0-80c1-9a214af093ae', style: Styles.PrognosticCellText }, item.currency.value)),
            React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae', style: Styles.PrognosticCellThirdCol },
                React.createElement(Text, { testID: 'test-id-1a9a1066-eaf2-11e0-80c1-9a214af093ae', style: Styles.PrognosticCellThirdText }, item.dateBegin ? Utils.format.date(new Date(item.dateBegin)) : placeholder)),
            React.createElement(View, { testID: 'test-id-1a9a0066-eaf2-11e0-80c1-9a214af093ae', style: Styles.Chevron },
                React.createElement(Button, { testID: `test-id-${item.id}-chevron-button`, key: `${item.id}-chevron-button`, onExecute: () => props.navigateToProductForecastDealInfoScreen(item) },
                    React.createElement(Icon, { testID: `test-id-${item.id}-chevron`, key: `${item.id}-chevron`, disabled: true, type: IconType.MrmLink }))))));
};
const promptForceCacheRefresh = (props) => (props.performProductListModalAlertShow());
const getCacheInfoView = (props) => (props.productListAgreementStatus == Enums.ProductListAgreementStatus.Opened ? (React.createElement(RefreshBar, { key: 'refreshBarCustomerProductList', testID: 'test-id-1a9a0066-eaf2-11e7-80c1-9a214cf093ae', title: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C', performRefresh: props.performProductListModalAlertShow, date: getProductTyleListCacheDate(props) })) : null);
const getProductTyleListCacheDate = (props) => {
    const dates = ([
        props.creditActiveProductListCachedDate,
        props.depositActiveProductListCachedDate,
        props.settlementAgreementActiveProductListCachedDate,
        props.corporateCardActiveProductListCachedDate,
        props.encashmentContractActiveProductListCachedDate,
        props.acquiringActiveProductListCachedDate,
        props.dboActiveProductListCachedDate,
        props.salaryActiveProductListCachedDate,
        props.udboActiveProductListCachedDate,
        props.legalInfoProductListCachedDate,
    ]).filter((date) => (date != null)).map((date) => (typeof date === 'object' && date instanceof Date
        ? date.getTime()
        : 0)).sort(($1, $2) => ($2 - $1));
    const minDate = dates.pop() || null;
    return minDate ? new Date(minDate) : new Date();
};
const showProps = (props) => {
};
const getContent = (props) => {
    if (!props.isDashboardExpandedMode) {
        return (React.createElement(View, { testID: 'test-id-781710a2-d203-e41e-8b48-e4c341b8574d', key: "productListContent" },
            getBreadCrumbs(props),
            React.createElement(View, { testID: 'test-id-8d6e212c-abc6-4588-ef35-f6d666eeaf7b', style: Styles.Header },
                props.customerManaged.legalForm && props.customerManaged.legalForm.value ?
                    React.createElement(H1, { testID: 'test-id-e5bb7370-26bd-d7c0-51e1-83268565fb33', numberOfLines: 3 }, props.customerManaged.legalForm.value + ' ' + props.customerManaged.name) :
                    React.createElement(H1, { testID: 'test-id-cf4e165e-873c-4049-8275-7f0d72f6ba04', numberOfLines: 3 }, props.customerManaged.name),
                React.createElement(Text, { testID: 'test-id-a3a5136b-a49f-5461-11fb-e879a489be1f', style: Styles.OrganizationType }, props.customerManaged.organizationType.value)),
            React.createElement(View, { testID: 'test-id-Customer-Managed-Tab-Selector-View', style: Styles.TabWrapper }, getTabSelector(props))));
    }
    return null;
};
const alertView = (props) => (React.createElement(AlertView, { testID: 'test-id-product-list-alert-view', ok: props.performProductTypeListForceRefresh, cancel: props.performProductListModalAlertHide, title: 'Внимание', message: Utils.productListAlertViewMessage, isVisible: props.isVisibleProductListModalAlert }));
const CustomerManaged = (props) => (React.createElement(View, { style: Styles.main, testID: 'test-id-component-CustomerManaged' },
    getContent(props),
    getTabContent(props)));
export default CustomerManaged;
//# sourceMappingURL=CustomerManaged.js.map