/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductCustomsPayment from '../components/Product/ViewProductCustomsPayment';
/*
 * Container "ProductCustomsPayment". CustomsPayment product detail information screen.
 */
class ContainerProductCustomsPayment extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductCustomsPayment, { testID: 'test-id-container-product-CustomsPayment', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentCustomsPaymentProduct: this.props.currentCustomsPaymentProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCustomsPaymentProduct: state.user.mrmkmcibCRM.reducerProduct.currentCustomsPaymentProduct,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
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
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductCustomsPayment);
//# sourceMappingURL=ContainerProductCustomsPayment.js.map