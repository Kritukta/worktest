/*
 *@author Voronov S.I.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkProductCredit from '../thunk/ThunkProductCredit';
import ViewProductCovenantList from '../components/ViewProductCovenantList';
/*
 * Container "ProductCovenantList". ProductCovenantList detail information screen.
 */
class ContainerProductCovenantList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductCovenantList, { testID: 'testID-ViewProductCovenantList-testID', classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentCreditProduct: this.props.currentCreditProduct, productCachedDateCovenantList: this.props.productCachedDateCovenantList, filteredProductCovenantList: this.props.filteredProductCovenantList, productCovenantList: this.props.productCovenantList, performCallGetProductCovenantListCacheReset: this.props.performCallGetProductCovenantListCacheReset, covenantListFetching: this.props.covenantListFetching, covenantListFetchingError: this.props.covenantListFetchingError, isVisiblePopoverCovenantPeriodFilter: this.props.isVisiblePopoverCovenantPeriodFilter, isVisiblePopoverCovenantStatusFilter: this.props.isVisiblePopoverCovenantStatusFilter, performChangeVisiblePopoverCovenantStatusFilter: this.props.performChangeVisiblePopoverCovenantStatusFilter, performChangeVisiblePopoverCovenantPeriodFilter: this.props.performChangeVisiblePopoverCovenantPeriodFilter, performChangeCheckStatusCreditCovenantPeriodFilterValueList: this.props.performChangeCheckStatusCreditCovenantPeriodFilterValueList, performChangeCheckStatusCreditCovenantStatusFilterValueList: this.props.performChangeCheckStatusCreditCovenantStatusFilterValueList, performChangeCovenantDateFilterValue: this.props.performChangeCovenantDateFilterValue, covenantPeriodFilterValueList: this.props.covenantPeriodFilterValueList, covenantStatusFilterValueList: this.props.covenantStatusFilterValueList, covenantAppliedPeriodFilterValueList: this.props.covenantAppliedPeriodFilterValueList, covenantAppliedStatusFilterValueList: this.props.covenantAppliedStatusFilterValueList, performApplyCovenantPeriodFilter: this.props.performApplyCovenantPeriodFilter, performApplyCovenantStatusFilter: this.props.performApplyCovenantStatusFilter, covenantDateFilterValue: this.props.covenantDateFilterValue, navigateToCustomerScreen: this.props.navigateToCustomerScreen }));
    }
}
function mapDispatchToProps(dispatch) {
    return {
        performChangeVisiblePopoverCovenantStatusFilter: (value) => {
            dispatch(thunkProductCredit.performChangeVisiblePopoverCovenantStatusFilter(value));
        },
        performChangeVisiblePopoverCovenantPeriodFilter: (value) => {
            dispatch(thunkProductCredit.performChangeVisiblePopoverCovenantPeriodFilter(value));
        },
        performChangeCovenantDateFilterValue: (value) => {
            dispatch(thunkProductCredit.performChangeCovenantDateFilterValue(value));
        },
        performChangeCheckStatusCreditCovenantPeriodFilterValueList: (filterValue) => {
            dispatch(thunkProductCredit.performChangeCheckStatusCreditCovenantPeriodFilterValueList(filterValue));
        },
        performChangeCheckStatusCreditCovenantStatusFilterValueList: (filterValue) => {
            dispatch(thunkProductCredit.performChangeCheckStatusCreditCovenantStatusFilterValueList(filterValue));
        },
        performApplyCovenantPeriodFilter: () => {
            dispatch(thunkProductCredit.performApplyCovenantPeriodFilter());
        },
        performApplyCovenantStatusFilter: () => {
            dispatch(thunkProductCredit.performApplyCovenantStatusFilter());
        },
        performCallGetProductCovenantListCacheReset: () => {
            dispatch(thunkProductCredit.performCallGetProductCovenantListCacheReset());
        },
        navigateToCustomerScreen: () => {
            dispatch(thunkProductCredit.navigateToCustomerScreen());
        }
    };
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCreditProduct: state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        isVisiblePopoverCovenantPeriodFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverCovenantPeriodFilter,
        isVisiblePopoverCovenantStatusFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverCovenantStatusFilter,
        covenantPeriodFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantPeriodFilterValueList,
        covenantStatusFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantStatusFilterValueList,
        covenantAppliedPeriodFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantAppliedPeriodFilterValueList,
        covenantAppliedStatusFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantAppliedStatusFilterValueList,
        covenantDateFilterValue: state.user.mrmkmcibCRM.reducerProductCredit.covenantDateFilterValue,
        productCachedDateCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.productCachedDateCovenantList,
        filteredProductCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.filteredProductCovenantList,
        productCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.productCovenantList,
        covenantListFetching: state.user.mrmkmcibCRM.reducerProductCredit.covenantListFetching,
        covenantListFetchingError: state.user.mrmkmcibCRM.reducerProductCredit.covenantListFetchingError,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductCovenantList);
//# sourceMappingURL=ContainerProductCovenantList.js.map