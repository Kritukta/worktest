/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductContractConstructor from '../components/Product/ViewProductContractConstructor';
/*
 * Container "ProductContractConstructor". ContractConstructor product detail information screen.
 */
class ContainerProductContractConstructor extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductContractConstructor, { testID: 'test-id-container-product-ContractConstructor', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentContractConstructorProduct: this.props.currentContractConstructorProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentContractConstructorProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractConstructorProduct,
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
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductContractConstructor);
//# sourceMappingURL=ContainerProductContractConstructor.js.map