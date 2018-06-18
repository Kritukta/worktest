/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductContractNso from '../components/Product/ViewProductContractNso';
/*
 * Container "ProductContractNso". ContractNso product detail information screen.
 */
class ContainerProductContractNso extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductContractNso, { testID: 'test-id-container-product-ContractNso', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentContractNsoProduct: this.props.currentContractNsoProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack, productListAgreementStatus: this.props.productListAgreementStatus, productContextMode: this.props.productContextMode }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentContractNsoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractNsoProduct,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode,
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus
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
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductContractNso);
//# sourceMappingURL=ContainerProductContractNso.js.map