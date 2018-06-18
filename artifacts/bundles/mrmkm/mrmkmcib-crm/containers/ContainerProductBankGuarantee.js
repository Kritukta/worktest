/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductBankGuarantee from '../components/Product/ViewProductBankGuarantee';
/*
 * Container "ProductBankGuarantee". BankGuarantee product detail information screen.
 */
class ContainerProductBankGuarantee extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductBankGuarantee, { testID: 'test-id-container-product-BankGuarantee', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentBankGuaranteeProduct: this.props.currentBankGuaranteeProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack, productContextMode: this.props.productContextMode }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentBankGuaranteeProduct: state.user.mrmkmcibCRM.reducerProduct.currentBankGuaranteeProduct,
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
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductBankGuarantee);
//# sourceMappingURL=ContainerProductBankGuarantee.js.map