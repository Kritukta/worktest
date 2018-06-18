/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductSalary from '../thunk/ThunkProductSalary'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductSalary from "../models/ModelsProductSalary"

import ViewProductSalary from '../components/Product/ViewProductSalary'
import * as ModelState from "../models/Models"


/*
 * Container "ProductSalary". Salary product detail information screen.
 */
class ContainerProductSalary extends React.Component<IProductSalaryProps, any> {

    constructor (props: IProductSalaryProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductSalary
                testID={ 'test-id-container-product-Salary' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentSalaryProduct={ this.props.currentSalaryProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }/>

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentSalaryProduct: Models.SalaryProduct,
    currentExchangePerson: ModelsScheduler.Person,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductSalaryProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentSalaryProduct: state.user.mrmkmcibCRM.reducerProduct.currentSalaryProduct,
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

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductSalary)
