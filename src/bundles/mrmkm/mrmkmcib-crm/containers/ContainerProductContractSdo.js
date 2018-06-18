/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductContractSdo from '../components/Product/ViewProductContractSdo';
/*
 * Container "ProductContractSdo". ContractSdo product detail information screen.
 */
class ContainerProductContractSdo extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductContractSdo, { testID: 'test-id-container-product-ContractSdo', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentContractSdoProduct: this.props.currentContractSdoProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack, productContextMode: this.props.productContextMode }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentContractSdoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractSdoProduct,
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
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductContractSdo);
//# sourceMappingURL=ContainerProductContractSdo.js.map