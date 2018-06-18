/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductAcquiring from '../thunk/ThunkProductAcquiring'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductAcquiring from "../models/ModelsProductAcquiring"

import ViewProductAcquiring from '../components/Product/ViewProductAcquiring'
import * as ModelState from "../models/Models"


/*
 * Container "ProductAcquiring". Acquiring product detail information screen.
 */
class ContainerProductAcquiring extends React.Component<IProductAcquiringProps, any> {

    constructor (props: IProductAcquiringProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductAcquiring
                testID={ 'test-id-container-product-Acquiring' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentAcquiringProduct={ this.props.currentAcquiringProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }
                navigateToAgreementListView={ this.props.navigateToAgreementListView }
                navigateBackToViewProductAcquiring={ this.props.navigateBackToViewProductAcquiring }
                />

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentAcquiringProduct: Models.AcquiringProduct,
    currentExchangePerson: ModelsScheduler.Person,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    navigateToAgreementListView: ModelsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW,
    navigateBackToViewProductAcquiring: ModelsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING,

}

export type IProductAcquiringProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentAcquiringProduct: state.user.mrmkmcibCRM.reducerProduct.currentAcquiringProduct,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,

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

        navigateToAgreementListView: () => {
            dispatch (thunkProductAcquiring.navigateToAgreementListView ())
        },

        navigateBackToViewProductAcquiring: () => {
            dispatch (thunkProductAcquiring.navigateBackToViewProductAcquiring ())
        }

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductAcquiring)
