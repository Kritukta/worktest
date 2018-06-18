/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProduct from '../thunk/ThunkProduct';
import ViewProduct from '../components/ViewProduct';
/*
 * Container "Product". Product screen.
 */
class ContainerProduct extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewProduct, { testID: 'test-id-container-Product', performHideProduct: this.props.performHideProduct, performCreditProductShow: this.props.performCreditProductShow, performBankGuaranteeProductShow: this.props.performBankGuaranteeProductShow, performCashManagementProductShow: this.props.performCashManagementProductShow, performPaymentAccountProductShow: this.props.performPaymentAccountProductShow, performCustomsPaymentProductShow: this.props.performCustomsPaymentProductShow, performPackageProductShow: this.props.performPackageProductShow, performTariffPlanProductShow: this.props.performTariffPlanProductShow, performDepositProductShow: this.props.performDepositProductShow, performContractSdoProductShow: this.props.performContractSdoProductShow, performContractNsoProductShow: this.props.performContractNsoProductShow, performCorporateCardProductShow: this.props.performCorporateCardProductShow, performEncashmentProductShow: this.props.performEncashmentProductShow, performSelfEncashmentProductShow: this.props.performSelfEncashmentProductShow, performCurrencyControlProductShow: this.props.performCurrencyControlProductShow, performAcquiringProductShow: this.props.performAcquiringProductShow, performDboProductShow: this.props.performDboProductShow, performContractConstructorProductShow: this.props.performContractConstructorProductShow, performSalaryProductShow: this.props.performSalaryProductShow, inputProductStatus: this.props.inputProductStatus, inputCurrency: this.props.inputCurrency, performContainerReset: this.props.performContainerReset, navigateBack: this.props.navigateBack, performModalProductHide: this.props.performModalProductHide, currentProductType: this.props.currentProductType, currentCreditProduct: this.props.currentCreditProduct, currentBankGuaranteeProduct: this.props.currentBankGuaranteeProduct, currentCashManagementProduct: this.props.currentCashManagementProduct, currentPaymentAccountProduct: this.props.currentPaymentAccountProduct, currentCustomsPaymentProduct: this.props.currentCustomsPaymentProduct, currentPackageProduct: this.props.currentPackageProduct, currentTariffPlanProduct: this.props.currentTariffPlanProduct, currentDepositProduct: this.props.currentDepositProduct, currentContractSdoProduct: this.props.currentContractSdoProduct, currentContractNsoProduct: this.props.currentContractNsoProduct, currentCorporateCardProduct: this.props.currentCorporateCardProduct, currentEncashmentProduct: this.props.currentEncashmentProduct, currentSelfEncashmentProduct: this.props.currentSelfEncashmentProduct, currentCurrencyControlProduct: this.props.currentCurrencyControlProduct, currentAcquiringProduct: this.props.currentAcquiringProduct, currentDboProduct: this.props.currentDboProduct, currentContractConstructorProduct: this.props.currentContractConstructorProduct, currentSalaryProduct: this.props.currentSalaryProduct, currentProductStatus: this.props.currentProductStatus, currentCurrency: this.props.currentCurrency, navigationInProgress: this.props.navigationInProgress, currentCustomerManaged: this.props.currentCustomerManaged }));
    }
}
function mapStateToProps(state) {
    return {
        currentProductType: state.user.mrmkmcibCRM.reducerProduct.currentProductType,
        currentCreditProduct: state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct,
        currentBankGuaranteeProduct: state.user.mrmkmcibCRM.reducerProduct.currentBankGuaranteeProduct,
        currentCashManagementProduct: state.user.mrmkmcibCRM.reducerProduct.currentCashManagementProduct,
        currentPaymentAccountProduct: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct,
        currentCustomsPaymentProduct: state.user.mrmkmcibCRM.reducerProduct.currentCustomsPaymentProduct,
        currentPackageProduct: state.user.mrmkmcibCRM.reducerProduct.currentPackageProduct,
        currentTariffPlanProduct: state.user.mrmkmcibCRM.reducerProduct.currentTariffPlanProduct,
        currentDepositProduct: state.user.mrmkmcibCRM.reducerProduct.currentDepositProduct,
        currentContractSdoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractSdoProduct,
        currentContractNsoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractNsoProduct,
        currentCorporateCardProduct: state.user.mrmkmcibCRM.reducerProduct.currentCorporateCardProduct,
        currentEncashmentProduct: state.user.mrmkmcibCRM.reducerProduct.currentEncashmentProduct,
        currentSelfEncashmentProduct: state.user.mrmkmcibCRM.reducerProduct.currentSelfEncashmentProduct,
        currentCurrencyControlProduct: state.user.mrmkmcibCRM.reducerProduct.currentCurrencyControlProduct,
        currentAcquiringProduct: state.user.mrmkmcibCRM.reducerProduct.currentAcquiringProduct,
        currentDboProduct: state.user.mrmkmcibCRM.reducerProduct.currentDboProduct,
        currentContractConstructorProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractConstructorProduct,
        currentSalaryProduct: state.user.mrmkmcibCRM.reducerProduct.currentSalaryProduct,
        currentProductStatus: state.user.mrmkmcibCRM.reducerProduct.currentProductStatus,
        currentCurrency: state.user.mrmkmcibCRM.reducerProduct.currentCurrency,
        navigationInProgress: state.user.mrmkmcibApp.reducerAuthorization.navigationInProgress,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performHideProduct: () => {
            dispatch(thunkProduct.performHideProduct());
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
        inputProductStatus: (value) => {
            dispatch(thunkProduct.inputProductStatus(value));
        },
        inputCurrency: (value) => {
            dispatch(thunkProduct.inputCurrency(value));
        },
        performContainerReset: () => {
            dispatch(thunkProduct.performContainerReset());
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
        performModalProductHide: () => {
            dispatch(thunkProductList.performModalProductHide());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProduct);
//# sourceMappingURL=ContainerProduct.js.map