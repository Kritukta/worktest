/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductCustomsPayment from '../thunk/ThunkProductCustomsPayment'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductCustomsPayment from "../models/ModelsProductCustomsPayment"

import ViewProductCustomsPayment from '../components/Product/ViewProductCustomsPayment'
import * as ModelState from "../models/Models"


/*
 * Container "ProductCustomsPayment". CustomsPayment product detail information screen.
 */
class ContainerProductCustomsPayment extends React.Component<IProductCustomsPaymentProps, any> {

    constructor (props: IProductCustomsPaymentProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductCustomsPayment
                testID={ 'test-id-container-product-CustomsPayment' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentCustomsPaymentProduct={ this.props.currentCustomsPaymentProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }/>

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentCustomsPaymentProduct: Models.SettlementAgreementProduct,
    currentExchangePerson: ModelsScheduler.Person,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductCustomsPaymentProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentCustomsPaymentProduct: state.user.mrmkmcibCRM.reducerProduct.currentCustomsPaymentProduct,
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

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductCustomsPayment)
