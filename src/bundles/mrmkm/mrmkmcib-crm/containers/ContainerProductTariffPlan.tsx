/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductTariffPlan from '../thunk/ThunkProductTariffPlan'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductTariffPlan from "../models/ModelsProductTariffPlan"

import ViewProductTariffPlan from '../components/Product/ViewProductTariffPlan'
import * as ModelState from "../models/Models"


/*
 * Container "ProductTariffPlan". TariffPlan product detail information screen.
 */
class ContainerProductTariffPlan extends React.Component<IProductTariffPlanProps, any> {

    constructor (props: IProductTariffPlanProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductTariffPlan
                testID={ 'test-id-container-product-TariffPlan' }
                productListAgreementStatus = {this.props.productListAgreementStatus}
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentTariffPlanProduct={ this.props.currentTariffPlanProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }/>

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentTariffPlanProduct: Models.SettlementAgreementProduct,
    currentExchangePerson: ModelsScheduler.Person,
    productListAgreementStatus: Enums.ProductListAgreementStatus,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductTariffPlanProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentTariffPlanProduct: state.user.mrmkmcibCRM.reducerProduct.currentTariffPlanProduct,

        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,

        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus,

    }
}

function mapDispatchToProps (dispatch: Function) {
    return {

        navigateProductListBack: () => {
            dispatch (thunkProductList.navigateProductListBack ())
        },
        
        navigateBack: () => {
            dispatch (thunkAppCRM.navigateBack ())
        },

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductTariffPlan)
