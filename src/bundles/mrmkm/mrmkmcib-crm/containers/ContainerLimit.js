/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkLimit from '../thunk/ThunkLimit';
import ViewLimit from '../components/ViewLimit';
/*
 * Container "Limit". Customer limit screen.
 */
class ContainerLimit extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewLimit, { testID: 'test-id-container-Limit', performChangeTab: this.props.performChangeTab, performChangeTotalTab: this.props.performChangeTotalTab, performContainerReset: this.props.performContainerReset, navigateBack: this.props.navigateBack, currentTab: this.props.currentTab, currentTotalTab: this.props.currentTotalTab, currentCustomerManaged: this.props.currentCustomerManaged, limit: this.props.limit, limitFetching: this.props.limitFetching, limitError: this.props.limitError, limitCachedDate: this.props.limitCachedDate }));
    }
}
function mapStateToProps(state) {
    return {
        currentTab: state.user.mrmkmcibCRM.reducerLimit.currentTab,
        currentTotalTab: state.user.mrmkmcibCRM.reducerLimit.currentTotalTab,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        limit: state.user.mrmkmcibCRM.reducerCustomer.limit,
        limitFetching: state.user.mrmkmcibCRM.reducerCustomer.limitFetching,
        limitError: state.user.mrmkmcibCRM.reducerCustomer.limitError,
        limitCachedDate: state.user.mrmkmcibCRM.reducerCustomer.limitCachedDate,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performChangeTab: (index, value) => {
            dispatch(thunkLimit.performChangeTab(index, value));
        },
        performChangeTotalTab: (index, value) => {
            dispatch(thunkLimit.performChangeTotalTab(index, value));
        },
        performContainerReset: () => {
            dispatch(thunkLimit.performContainerReset());
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerLimit);
//# sourceMappingURL=ContainerLimit.js.map