/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductDeposit from '../components/Product/ViewProductDeposit';
/*
 * Container "ProductDeposit". Deposit product detail information screen.
 */
class ContainerProductDeposit extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductDeposit, { testID: 'test-id-container-product-Deposit', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentDepositProduct: this.props.currentDepositProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack, productContextMode: this.props.productContextMode }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentDepositProduct: state.user.mrmkmcibCRM.reducerProduct.currentDepositProduct,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateProductListBack: () => {
            dispatch(thunkProductList.navigateProductListBack());
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductDeposit);
//# sourceMappingURL=ContainerProductDeposit.js.map