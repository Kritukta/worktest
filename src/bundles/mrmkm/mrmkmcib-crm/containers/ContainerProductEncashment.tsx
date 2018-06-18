/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductEncashment from '../thunk/ThunkProductEncashment'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductEncashment from "../models/ModelsProductEncashment"

import ViewProductEncashment from '../components/Product/ViewProductEncashment'
import * as ModelState from "../models/Models"


/*
 * Container "ProductEncashment". Encashment product detail information screen.
 */
class ContainerProductEncashment extends React.Component<IProductEncashmentProps, any> {

    constructor (props: IProductEncashmentProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductEncashment
                testID={ 'test-id-container-product-Encashment' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentEncashmentProduct={ this.props.currentEncashmentProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }/>

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentEncashmentProduct: Models.EncashmentContractProduct,
    currentExchangePerson: ModelsScheduler.Person,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductEncashmentProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentEncashmentProduct: state.user.mrmkmcibCRM.reducerProduct.currentEncashmentProduct,
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

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductEncashment)
