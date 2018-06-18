/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProduct from '../thunk/ThunkProduct';
import ViewProductList from '../components/ViewProductList';
/*
 * Container "ProductList". Product list screen.
 */
class ContainerProductList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewProductList, { testID: 'test-id-container-ProductList', performCallGetForceRequestProductList: this.props.performCallGetForceRequestProductList, performCallGetCachedRequestProductList: this.props.performCallGetCachedRequestProductList, performCallGetUncachedRequestProductList: this.props.performCallGetUncachedRequestProductList, performInputCurrency: this.props.performInputCurrency, performInputEncumbrance: this.props.performInputEncumbrance, performModalProductHide: this.props.performModalProductHide, navigateToProductListScreen: this.props.navigateToProductListScreen, navigateToProductForecastDealInfoScreen: this.props.navigateToProductForecastDealInfoScreen, navigateToProductForecastEventInfoScreen: this.props.navigateToProductForecastEventInfoScreen, performContainerReset: this.props.performContainerReset, navigateBack: this.props.navigateBack, performCreditProductShow: this.props.performCreditProductShow, performBankGuaranteeProductShow: this.props.performBankGuaranteeProductShow, performCashManagementProductShow: this.props.performCashManagementProductShow, performPaymentAccountProductShow: this.props.performPaymentAccountProductShow, performCustomsPaymentProductShow: this.props.performCustomsPaymentProductShow, performPackageProductShow: this.props.performPackageProductShow, performTariffPlanProductShow: this.props.performTariffPlanProductShow, performDepositProductShow: this.props.performDepositProductShow, performContractSdoProductShow: this.props.performContractSdoProductShow, performContractNsoProductShow: this.props.performContractNsoProductShow, performCorporateCardProductShow: this.props.performCorporateCardProductShow, performEncashmentProductShow: this.props.performEncashmentProductShow, performSelfEncashmentProductShow: this.props.performSelfEncashmentProductShow, performCurrencyControlProductShow: this.props.performCurrencyControlProductShow, performAcquiringProductShow: this.props.performAcquiringProductShow, performDboProductShow: this.props.performDboProductShow, performContractConstructorProductShow: this.props.performContractConstructorProductShow, performSalaryProductShow: this.props.performSalaryProductShow, performCallEksRequestProductList: this.props.performCallEksRequestProductList, pollingError: this.props.pollingError, bhCachedDate: this.props.bhCachedDate, currencyList: this.props.currencyList, encumbranceList: this.props.encumbranceList, inputCurrency: this.props.inputCurrency, inputEncumbranceList: this.props.inputEncumbranceList, isVisibleModalProduct: this.props.isVisibleModalProduct, currentProductListType: this.props.currentProductListType, currentCreditProductList: this.props.currentCreditProductList, currentBankGuaranteeProductList: this.props.currentBankGuaranteeProductList, currentCashManagementProductList: this.props.currentCashManagementProductList, currentPaymentAccountProductList: this.props.currentPaymentAccountProductList, currentCustomsPaymentProductList: this.props.currentCustomsPaymentProductList, currentPackageProductList: this.props.currentPackageProductList, currentTariffPlanProductList: this.props.currentTariffPlanProductList, currentDepositProductList: this.props.currentDepositProductList, currentContractSdoProductList: this.props.currentContractSdoProductList, currentContractNsoProductList: this.props.currentContractNsoProductList, currentCorporateCardProductList: this.props.currentCorporateCardProductList, currentEncashmentProductList: this.props.currentEncashmentProductList, currentSelfEncashmentProductList: this.props.currentSelfEncashmentProductList, currentCurrencyControlProductList: this.props.currentCurrencyControlProductList, currentAcquiringProductList: this.props.currentAcquiringProductList, currentDboProductList: this.props.currentDboProductList, currentContractConstructorProductList: this.props.currentContractConstructorProductList, currentSalaryProductList: this.props.currentSalaryProductList, currentCustomerManaged: this.props.currentCustomerManaged, creditActiveProductEksListFetching: this.props.creditActiveProductEksListFetching, creditCloseProductEksListFetching: this.props.creditCloseProductEksListFetching, settlementAgreementActiveProductEksListFetching: this.props.settlementAgreementActiveProductEksListFetching, settlementAgreementCloseProductEksListFetching: this.props.settlementAgreementCloseProductEksListFetching, depositActiveProductEksListFetching: this.props.depositActiveProductEksListFetching, depositCloseProductEksListFetching: this.props.depositCloseProductEksListFetching, corporateCardActiveProductEksListFetching: this.props.corporateCardActiveProductEksListFetching, corporateCardCloseProductEksListFetching: this.props.corporateCardCloseProductEksListFetching, encashmentContractActiveProductEksListFetching: this.props.encashmentContractActiveProductEksListFetching, encashmentContractCloseProductEksListFetching: this.props.encashmentContractCloseProductEksListFetching, acquiringActiveProductEksListFetching: this.props.acquiringActiveProductEksListFetching, acquiringCloseProductEksListFetching: this.props.acquiringCloseProductEksListFetching, dboActiveProductEksListFetching: this.props.dboActiveProductEksListFetching, dboCloseProductEksListFetching: this.props.dboCloseProductEksListFetching, udboActiveProductEksListFetching: this.props.udboActiveProductEksListFetching, udboCloseProductEksListFetching: this.props.udboCloseProductEksListFetching, salaryActiveProductEksListFetching: this.props.salaryActiveProductEksListFetching, salaryCloseProductEksListFetching: this.props.salaryCloseProductEksListFetching, legalInfoProductEksListFetching: this.props.legalInfoProductEksListFetching, creditActiveProductListFetching: this.props.creditActiveProductListFetching, creditActiveProductListError: this.props.creditActiveProductListError, creditCloseProductListError: this.props.creditCloseProductListError, creditCloseProductListFetching: this.props.creditCloseProductListFetching, depositActiveProductListFetching: this.props.depositActiveProductListFetching, depositActiveProductListError: this.props.depositActiveProductListError, depositCloseProductListError: this.props.depositCloseProductListError, depositCloseProductListFetching: this.props.depositCloseProductListFetching, settlementAgreementActiveProductListFetching: this.props.settlementAgreementActiveProductListFetching, settlementAgreementActiveProductListError: this.props.settlementAgreementActiveProductListError, settlementAgreementCloseProductListFetching: this.props.settlementAgreementCloseProductListFetching, settlementAgreementCloseProductListError: this.props.settlementAgreementCloseProductListError, encashmentContractActiveProductListFetching: this.props.encashmentContractActiveProductListFetching, encashmentContractActiveProductListError: this.props.encashmentContractActiveProductListError, encashmentContractCloseProductListFetching: this.props.encashmentContractCloseProductListFetching, encashmentContractCloseProductListError: this.props.encashmentContractCloseProductListError, corporateCardActiveProductListFetching: this.props.corporateCardActiveProductListFetching, corporateCardActiveProductListError: this.props.corporateCardActiveProductListError, corporateCardCloseProductListFetching: this.props.corporateCardCloseProductListFetching, corporateCardCloseProductListError: this.props.corporateCardCloseProductListError, acquiringActiveProductListFetching: this.props.acquiringActiveProductListFetching, acquiringActiveProductListError: this.props.acquiringActiveProductListError, acquiringCloseProductListFetching: this.props.acquiringCloseProductListFetching, acquiringCloseProductListError: this.props.acquiringCloseProductListError, dboActiveProductListFetching: this.props.dboActiveProductListFetching, dboActiveProductListError: this.props.dboActiveProductListError, dboCloseProductListFetching: this.props.dboCloseProductListFetching, dboCloseProductListError: this.props.dboCloseProductListError, salaryActiveProductListFetching: this.props.salaryActiveProductListFetching, salaryActiveProductListError: this.props.salaryActiveProductListError, salaryCloseProductListFetching: this.props.salaryCloseProductListFetching, salaryCloseProductListError: this.props.salaryCloseProductListError, udboActiveProductListFetching: this.props.udboActiveProductListFetching, udboActiveProductListError: this.props.udboActiveProductListError, udboCloseProductListFetching: this.props.udboCloseProductListFetching, udboCloseProductListError: this.props.udboCloseProductListError, legalInfoProductListFetching: this.props.legalInfoProductListFetching, legalInfoProductListError: this.props.legalInfoProductListError, productListAgreementStatus: this.props.productListAgreementStatus, performChangeDisplayRefreshBarProductList: this.props.performChangeDisplayRefreshBarProductList, isVisibleRefreshBar: this.props.isVisibleRefreshBar, isVisibleProductListModalAlert: this.props.isVisibleProductListModalAlert, performProductListModalAlertShow: this.props.performProductListModalAlertShow, performProductListModalAlertHide: this.props.performProductListModalAlertHide, currentDeal: this.props.currentDeal, currentEvent: this.props.currentEvent }));
    }
}
function mapStateToProps(state) {
    return {
        pollingError: state.user.mrmkmcibCRM.reducerProductList.pollingError,
        bhCachedDate: state.user.mrmkmcibCRM.reducerProductList.bhCachedDate,
        currencyList: state.user.mrmkmcibCRM.reducerProductList.currencyList,
        encumbranceList: state.user.mrmkmcibCRM.reducerProductList.encumbranceList,
        inputCurrency: state.user.mrmkmcibCRM.reducerProductList.inputCurrency,
        inputEncumbranceList: state.user.mrmkmcibCRM.reducerProductList.inputEncumbranceList,
        isVisibleModalProduct: state.user.mrmkmcibCRM.reducerProductList.isVisibleModalProduct,
        currentProductListType: state.user.mrmkmcibCRM.reducerProductList.currentProductListType,
        currentCreditProductList: state.user.mrmkmcibCRM.reducerProductList.currentCreditProductList,
        currentBankGuaranteeProductList: state.user.mrmkmcibCRM.reducerProductList.currentBankGuaranteeProductList,
        currentCashManagementProductList: state.user.mrmkmcibCRM.reducerProductList.currentCashManagementProductList,
        currentPaymentAccountProductList: state.user.mrmkmcibCRM.reducerProductList.currentPaymentAccountProductList,
        currentCustomsPaymentProductList: state.user.mrmkmcibCRM.reducerProductList.currentCustomsPaymentProductList,
        currentPackageProductList: state.user.mrmkmcibCRM.reducerProductList.currentPackageProductList,
        currentTariffPlanProductList: state.user.mrmkmcibCRM.reducerProductList.currentTariffPlanProductList,
        currentDepositProductList: state.user.mrmkmcibCRM.reducerProductList.currentDepositProductList,
        currentContractSdoProductList: state.user.mrmkmcibCRM.reducerProductList.currentContractSdoProductList,
        currentContractNsoProductList: state.user.mrmkmcibCRM.reducerProductList.currentContractNsoProductList,
        currentCorporateCardProductList: state.user.mrmkmcibCRM.reducerProductList.currentCorporateCardProductList,
        currentEncashmentProductList: state.user.mrmkmcibCRM.reducerProductList.currentEncashmentProductList,
        currentSelfEncashmentProductList: state.user.mrmkmcibCRM.reducerProductList.currentSelfEncashmentProductList,
        currentCurrencyControlProductList: state.user.mrmkmcibCRM.reducerProductList.currentCurrencyControlProductList,
        currentAcquiringProductList: state.user.mrmkmcibCRM.reducerProductList.currentAcquiringProductList,
        currentDboProductList: state.user.mrmkmcibCRM.reducerProductList.currentDboProductList,
        currentContractConstructorProductList: state.user.mrmkmcibCRM.reducerProductList.currentContractConstructorProductList,
        currentSalaryProductList: state.user.mrmkmcibCRM.reducerProductList.currentSalaryProductList,
        creditActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductEksListFetching,
        creditCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductEksListFetching,
        settlementAgreementActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductEksListFetching,
        settlementAgreementCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductEksListFetching,
        depositActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductEksListFetching,
        depositCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductEksListFetching,
        corporateCardActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductEksListFetching,
        corporateCardCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductEksListFetching,
        encashmentContractActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductEksListFetching,
        encashmentContractCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductEksListFetching,
        acquiringActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductEksListFetching,
        acquiringCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductEksListFetching,
        dboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductEksListFetching,
        dboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductEksListFetching,
        udboActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductEksListFetching,
        udboCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductEksListFetching,
        salaryActiveProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductEksListFetching,
        salaryCloseProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductEksListFetching,
        creditActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListFetching,
        creditActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductListError,
        creditCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListFetching,
        creditCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductListError,
        depositActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListFetching,
        depositActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductListError,
        depositCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListFetching,
        depositCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductListError,
        corporateCardCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListFetching,
        corporateCardCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductListError,
        corporateCardActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListFetching,
        corporateCardActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductListError,
        settlementAgreementCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListFetching,
        settlementAgreementCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductListError,
        settlementAgreementActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListFetching,
        settlementAgreementActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductListError,
        encashmentContractCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListFetching,
        encashmentContractCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductListError,
        encashmentContractActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListFetching,
        encashmentContractActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductListError,
        dboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListFetching,
        dboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductListError,
        dboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListFetching,
        dboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductListError,
        salaryCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListFetching,
        salaryCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductListError,
        salaryActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListFetching,
        salaryActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductListError,
        acquiringCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListFetching,
        acquiringCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductListError,
        acquiringActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListFetching,
        acquiringActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductListError,
        udboCloseProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListFetching,
        udboCloseProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductListError,
        udboActiveProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListFetching,
        udboActiveProductListError: state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductListError,
        legalInfoProductListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListFetching,
        legalInfoProductListError: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductListError,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        legalInfoProductEksListFetching: state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductEksListFetching,
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,
        isVisibleRefreshBar: state.user.mrmkmcibCRM.reducerProductList.isVisibleRefreshBar,
        isVisibleProductListModalAlert: state.user.mrmkmcibCRM.reducerProductList.isVisibleProductListModalAlert,
        currentDeal: state.user.mrmkmcibCRM.reducerProductList.currentDeal,
        currentEvent: state.user.mrmkmcibCRM.reducerProductList.currentEvent
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performCallEksRequestProductList: (productType, productListAgreementStatus) => {
            dispatch(thunkCustomer.performCallEksRequestProductList(productType, productListAgreementStatus));
        },
        performCallGetForceRequestProductList: (type) => {
            dispatch(thunkCustomer.performCallGetForceRequestProductList(type));
        },
        performCallGetCachedRequestProductList: (type) => {
            dispatch(thunkCustomer.performCallGetCachedRequestProductList(type));
        },
        performCallGetUncachedRequestProductList: (type) => {
            dispatch(thunkCustomer.performCallGetUncachedRequestProductList(type));
        },
        performInputCurrency: (value) => {
            dispatch(thunkProductList.performInputCurrency(value));
        },
        performInputEncumbrance: (value) => {
            dispatch(thunkProductList.performInputEncumbrance(value));
        },
        performModalProductHide: () => {
            dispatch(thunkProductList.performModalProductHide());
        },
        navigateToProductListScreen: (productType) => {
            dispatch(thunkProductList.navigateToProductListScreen(productType));
        },
        navigateToProductForecastDealInfoScreen: (deal) => {
            dispatch(thunkProductList.navigateToProductForecastDealInfoScreen(deal));
        },
        navigateToProductForecastEventInfoScreen: (event) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event));
        },
        performContainerReset: () => {
            dispatch(thunkProductList.performContainerReset());
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
        performCreditProductShow: (value) => {
            dispatch(thunkProduct.performCreditProductShow(value));
        },
        performBankGuaranteeProductShow: (value) => {
            dispatch(thunkProduct.performBankGuaranteeProductShow(value));
        },
        performCashManagementProductShow: (value) => {
            dispatch(thunkProduct.performCashManagementProductShow(value));
        },
        performPaymentAccountProductShow: (value) => {
            dispatch(thunkProduct.performPaymentAccountProductShow(value));
        },
        performCustomsPaymentProductShow: (value) => {
            dispatch(thunkProduct.performCustomsPaymentProductShow(value));
        },
        performPackageProductShow: (value) => {
            dispatch(thunkProduct.performPackageProductShow(value));
        },
        performTariffPlanProductShow: (value) => {
            dispatch(thunkProduct.performTariffPlanProductShow(value));
        },
        performDepositProductShow: (value) => {
            dispatch(thunkProduct.performDepositProductShow(value));
        },
        performContractSdoProductShow: (value) => {
            dispatch(thunkProduct.performContractSdoProductShow(value));
        },
        performContractNsoProductShow: (value) => {
            dispatch(thunkProduct.performContractNsoProductShow(value));
        },
        performCorporateCardProductShow: (value) => {
            dispatch(thunkProduct.performCorporateCardProductShow(value));
        },
        performEncashmentProductShow: (value) => {
            dispatch(thunkProduct.performEncashmentProductShow(value));
        },
        performSelfEncashmentProductShow: (value) => {
            dispatch(thunkProduct.performSelfEncashmentProductShow(value));
        },
        performCurrencyControlProductShow: (value) => {
            dispatch(thunkProduct.performCurrencyControlProductShow(value));
        },
        performAcquiringProductShow: (value) => {
            dispatch(thunkProduct.performAcquiringProductShow(value));
        },
        performDboProductShow: (value) => {
            dispatch(thunkProduct.performDboProductShow(value));
        },
        performContractConstructorProductShow: (value) => {
            dispatch(thunkProduct.performContractConstructorProductShow(value));
        },
        performSalaryProductShow: (value) => {
            dispatch(thunkProduct.performSalaryProductShow(value));
        },
        performChangeDisplayRefreshBarProductList: (value) => {
            dispatch(thunkProductList.performChangeDisplayRefreshBarProductList(value));
        },
        performProductListModalAlertShow: () => {
            dispatch(thunkProductList.performProductListModalAlertShow());
        },
        performProductListModalAlertHide: () => {
            dispatch(thunkProductList.performProductListModalAlertHide());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductList);
//# sourceMappingURL=ContainerProductList.js.map