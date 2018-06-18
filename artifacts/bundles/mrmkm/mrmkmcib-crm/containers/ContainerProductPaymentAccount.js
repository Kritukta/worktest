/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount';
import ViewProductPaymentAccount from '../components/ViewProductPaymentAccount';
/*
 * Container "ProductPaymentAccount". Account product detail information screen.
 */
class ContainerProductPaymentAccount extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewProductPaymentAccount, { testID: 'test-id-container-ProductPaymentAccount', performChangeTab: this.props.performChangeTab, productListAgreementStatus: this.props.productListAgreementStatus, performInputSumMin: this.props.performInputSumMin, performInputSumMax: this.props.performInputSumMax, performPopoverFilterShow: this.props.performPopoverFilterShow, performPopoverFilterHide: this.props.performPopoverFilterHide, performInputOperationType: this.props.performInputOperationType, performPopoverPeriodTypeShow: this.props.performPopoverPeriodTypeShow, performPopoverPeriodTypeHide: this.props.performPopoverPeriodTypeHide, performInputPeriodType: this.props.performInputPeriodType, performInputFilterPeriodStart: this.props.performInputFilterPeriodStart, performInputFilterPeriodEnd: this.props.performInputFilterPeriodEnd, performFilterApply: this.props.performFilterApply, performFilterReset: this.props.performFilterReset, callGetOperationList: this.props.callGetOperationList, getPaymentAccountCardIndexList: this.props.getPaymentAccountCardIndexList, callGetProductVspInfo: this.props.callGetProductVspInfo, navigateToRestrictionListScreen: this.props.navigateToRestrictionListScreen, navigateToCardIndexListScreen: this.props.navigateToCardIndexListScreen, navigateToTariffScreen: this.props.navigateToTariffScreen, navigateToVspInfoScreen: this.props.navigateToVspInfoScreen, navigateToOperationListScreen: this.props.navigateToOperationListScreen, navigateToDashboardScreen: this.props.navigateToDashboardScreen, navigateProductPaymentAccountBack: this.props.navigateProductPaymentAccountBack, performContainerReset: this.props.performContainerReset, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack, currentTab: this.props.currentTab, inputSumMin: this.props.inputSumMin, inputSumMax: this.props.inputSumMax, isVisiblePopoverFilter: this.props.isVisiblePopoverFilter, inputOperationType: this.props.inputOperationType, isVisiblePopoverPeriodType: this.props.isVisiblePopoverPeriodType, inputPeriodType: this.props.inputPeriodType, inputFilterPeriodStart: this.props.inputFilterPeriodStart, inputFilterPeriodEnd: this.props.inputFilterPeriodEnd, filterSumMin: this.props.filterSumMin, filterSumMax: this.props.filterSumMax, filterOperationType: this.props.filterOperationType, operationFilteredList: this.props.operationFilteredList, operationList: this.props.operationList, operationListFetching: this.props.operationListFetching, operationListError: this.props.operationListError, operationListCachedDate: this.props.operationListCachedDate, cardIndexList: this.props.cardIndexList, cardIndexListFetching: this.props.cardIndexListFetching, cardIndexListError: this.props.cardIndexListError, cardIndexListCachedDate: this.props.cardIndexListCachedDate, currentCustomerManaged: this.props.currentCustomerManaged, currentPaymentAccountProduct: this.props.currentPaymentAccountProduct, productVspInfoFetching: this.props.productVspInfoFetching, productVspInfo: this.props.productVspInfo, productVspInfoFetchingError: this.props.productVspInfoFetchingError, performUpdateCardIndexListResetCache: this.props.performUpdateCardIndexListResetCache, performUpdateOperationListResetCache: this.props.performUpdateOperationListResetCache, productContextMode: this.props.productContextMode }));
    }
}
function mapStateToProps(state) {
    return {
        currentTab: state.user.mrmkmcibCRM.reducerProductPaymentAccount.currentTab,
        inputSumMin: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputSumMin,
        inputSumMax: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputSumMax,
        isVisiblePopoverFilter: state.user.mrmkmcibCRM.reducerProductPaymentAccount.isVisiblePopoverFilter,
        inputOperationType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputOperationType,
        isVisiblePopoverPeriodType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.isVisiblePopoverPeriodType,
        inputPeriodType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputPeriodType,
        inputFilterPeriodStart: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputFilterPeriodStart,
        inputFilterPeriodEnd: state.user.mrmkmcibCRM.reducerProductPaymentAccount.inputFilterPeriodEnd,
        filterSumMin: state.user.mrmkmcibCRM.reducerProductPaymentAccount.filterSumMin,
        filterSumMax: state.user.mrmkmcibCRM.reducerProductPaymentAccount.filterSumMax,
        filterOperationType: state.user.mrmkmcibCRM.reducerProductPaymentAccount.filterOperationType,
        operationFilteredList: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationFilteredList,
        operationList: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationList,
        operationListFetching: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationListFetching,
        operationListError: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationListError,
        operationListCachedDate: state.user.mrmkmcibCRM.reducerProductPaymentAccount.operationListCachedDate,
        cardIndexList: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexList,
        cardIndexListFetching: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexListFetching,
        cardIndexListError: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexListError,
        cardIndexListCachedDate: state.user.mrmkmcibCRM.reducerProductPaymentAccount.cardIndexListCachedDate,
        productVspInfo: state.user.mrmkmcibCRM.reducerProductPaymentAccount.productVspInfo,
        productVspInfoFetching: state.user.mrmkmcibCRM.reducerProductPaymentAccount.productVspInfoFetching,
        productVspInfoFetchingError: state.user.mrmkmcibCRM.reducerProductPaymentAccount.productVspInfoFetchingError,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentPaymentAccountProduct: state.user.mrmkmcibCRM.reducerProduct.currentPaymentAccountProduct,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode,
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performChangeTab: (index, value) => {
            dispatch(thunkProductPaymentAccount.performChangeTab(index, value));
        },
        performInputSumMin: (value, applyFilter) => {
            dispatch(thunkProductPaymentAccount.performInputSumMin(value, applyFilter));
        },
        performInputSumMax: (value, applyFilter) => {
            dispatch(thunkProductPaymentAccount.performInputSumMax(value, applyFilter));
        },
        performPopoverFilterShow: () => {
            dispatch(thunkProductPaymentAccount.performPopoverFilterShow());
        },
        performPopoverFilterHide: () => {
            dispatch(thunkProductPaymentAccount.performPopoverFilterHide());
        },
        performInputOperationType: (value, applyFilter) => {
            dispatch(thunkProductPaymentAccount.performInputOperationType(value, applyFilter));
        },
        performPopoverPeriodTypeShow: () => {
            dispatch(thunkProductPaymentAccount.performPopoverPeriodTypeShow());
        },
        performPopoverPeriodTypeHide: () => {
            dispatch(thunkProductPaymentAccount.performPopoverPeriodTypeHide());
        },
        performInputPeriodType: (value) => {
            dispatch(thunkProductPaymentAccount.performInputPeriodType(value));
        },
        performInputFilterPeriodStart: (value) => {
            dispatch(thunkProductPaymentAccount.performInputFilterPeriodStart(value));
        },
        performInputFilterPeriodEnd: (value) => {
            dispatch(thunkProductPaymentAccount.performInputFilterPeriodEnd(value));
        },
        performFilterApply: () => {
            dispatch(thunkProductPaymentAccount.performFilterApply());
        },
        performFilterReset: () => {
            dispatch(thunkProductPaymentAccount.performFilterReset());
        },
        callGetOperationList: (isForceRequest) => {
            dispatch(thunkProductPaymentAccount.callGetOperationList(isForceRequest));
        },
        getPaymentAccountCardIndexList: () => {
            dispatch(thunkProductPaymentAccount.getPaymentAccountCardIndexList());
        },
        callGetProductVspInfo: () => {
            dispatch(thunkProductPaymentAccount.callGetProductVspInfo());
        },
        navigateToRestrictionListScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToRestrictionListScreen());
        },
        navigateToCardIndexListScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToCardIndexListScreen());
        },
        navigateToTariffScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToTariffScreen());
        },
        navigateToVspInfoScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToVspInfoScreen());
        },
        navigateToOperationListScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToOperationListScreen());
        },
        navigateToDashboardScreen: () => {
            dispatch(thunkProductPaymentAccount.navigateToDashboardScreen());
        },
        navigateProductPaymentAccountBack: () => {
            dispatch(thunkProductPaymentAccount.navigateProductPaymentAccountBack());
        },
        performContainerReset: () => {
            dispatch(thunkProductPaymentAccount.performContainerReset());
        },
        navigateProductListBack: () => {
            dispatch(thunkProductList.navigateProductListBack());
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
        performUpdateOperationListResetCache: () => {
            dispatch(thunkProductPaymentAccount.performUpdateOperationListResetCache());
        },
        performUpdateCardIndexListResetCache: () => {
            dispatch(thunkProductPaymentAccount.performUpdateCardIndexListResetCache());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductPaymentAccount);
//# sourceMappingURL=ContainerProductPaymentAccount.js.map