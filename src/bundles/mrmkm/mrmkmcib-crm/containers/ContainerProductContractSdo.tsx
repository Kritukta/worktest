/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductContractSdo from '../thunk/ThunkProductContractSdo'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductContractSdo from "../models/ModelsProductContractSdo"

import ViewProductContractSdo from '../components/Product/ViewProductContractSdo'
import * as ModelState from "../models/Models"


/*
 * Container "ProductContractSdo". ContractSdo product detail information screen.
 */
class ContainerProductContractSdo extends React.Component<IProductContractSdoProps, any> {

    constructor (props: IProductContractSdoProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductContractSdo
                testID={ 'test-id-container-product-ContractSdo' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentContractSdoProduct={ this.props.currentContractSdoProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }
                productContextMode={this.props.productContextMode} />

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentContractSdoProduct: Models.DepositProduct,
    currentExchangePerson: ModelsScheduler.Person,
    productContextMode: Enums.ProductContextMode,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductContractSdoProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentContractSdoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractSdoProduct,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode

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

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductContractSdo)
