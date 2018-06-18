/*
 * Created by Voropaev D.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkProductList from '../thunk/ThunkProductList';
import ViewProductCorporateCard from '../components/Product/ViewProductCorporateCard';
/*
 * Container "ProductCorporateCard". CorporateCard product detail information screen.
 */
class ContainerProductCorporateCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewProductCorporateCard, { testID: 'test-id-container-product-CorporateCard', currentExchangePerson: this.props.currentExchangePerson, classifierDictionary: this.props.classifierDictionary, currentCustomerManaged: this.props.currentCustomerManaged, currentCorporateCardProduct: this.props.currentCorporateCardProduct, navigateProductListBack: this.props.navigateProductListBack, navigateBack: this.props.navigateBack }));
    }
}
function mapStateToProps(state) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCorporateCardProduct: state.user.mrmkmcibCRM.reducerProduct.currentCorporateCardProduct,
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
export default connect(mapStateToProps, mapDispatchToProps)(ContainerProductCorporateCard);
//# sourceMappingURL=ContainerProductCorporateCard.js.map