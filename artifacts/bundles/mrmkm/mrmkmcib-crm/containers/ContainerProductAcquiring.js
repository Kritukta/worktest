/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProductAcquiring from '../thunk/ThunkProductAcquiring';
import ViewProductAcquiring from '../components/Product/ViewProductAcquiring';
/*
 * Container "ProductAcquiring". Acquiring product detail information screen.
 */
class ContainerProductAcquiring extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductAcquiring, { testID: 'test-id-container-product-Acquiring', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentAcquiringProduct: this.props.currentAcquiringProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack, navigateToAgreementListView: this.props.navigateToAgreementListView, navigateBackToViewProductAcquiring: this.props.navigateBackToViewProductAcquiring }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentAcquiringProduct: state.user.mrmkmcibCRM.reducerProduct.currentAcquiringProduct,
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
        navigateToAgreementListView: () => {
            dispatch(thunkProductAcquiring.navigateToAgreementListView());
        },
        navigateBackToViewProductAcquiring: () => {
            dispatch(thunkProductAcquiring.navigateBackToViewProductAcquiring());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductAcquiring);
//# sourceMappingURL=ContainerProductAcquiring.js.map