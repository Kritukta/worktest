/*
 * Created by Vladukin A.S.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkDealListSearch from '../thunk/ThunkDealListSearch';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import ViewDealListSearch from '../components/ViewDealListSearch';
/*
 * Container 'DealListSearch'.
 */
class ContainerDealListSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewDealListSearch, { testID: 'test-id-container-DealListSearch', navigateBackToDealListScreen: this.props.navigateBackToDealListScreen, dealSearchOpenedList: this.props.dealSearchOpenedList, dealSearchClosedList: this.props.dealSearchClosedList, currentTab: this.props.currentTab, inputSearch: this.props.inputSearch, performInputSearch: this.props.performInputSearch, currentCustomerManaged: this.props.currentCustomerManaged, currentUser: this.props.currentUser, dealOpenedList: this.props.dealOpenedList, dealClosedList: this.props.dealClosedList, performDealOpen: this.props.performDealOpen, isEditDealEnable: this.props.isEditDealEnable }));
    }
}
function mapStateToProps(state) {
    return {
        dealSearchOpenedList: state.user.mrmkmcibCRM.reducerDealListSearch.dealSearchOpenedList,
        dealSearchClosedList: state.user.mrmkmcibCRM.reducerDealListSearch.dealSearchClosedList,
        currentTab: state.user.mrmkmcibCRM.reducerDealList.currentTab,
        inputSearch: state.user.mrmkmcibCRM.reducerDealListSearch.inputSearch,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
        dealOpenedList: state.user.mrmkmcibCRM.reducerDealList.dealOpenedList,
        dealClosedList: state.user.mrmkmcibCRM.reducerDealList.dealClosedList,
        isEditDealEnable: state.user.mrmkmcibCRM.reducerDealList.isEditDealEnable,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateBackToDealListScreen: () => {
            dispatch(thunkDealListSearch.navigateBackToDealListScreen());
        },
        performInputSearch: (value) => {
            dispatch(thunkDealListSearch.performInputSearch(value));
        },
        performDealOpen: (dealId, dealMode, isEditDealEnable) => {
            dispatch(thunkAppCRM.performDealOpen(dealId, dealMode, isEditDealEnable));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDealListSearch);
//# sourceMappingURL=ContainerDealListSearch.js.map