/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductBankGuarantee from '../thunk/ThunkProductBankGuarantee'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductBankGuarantee from "../models/ModelsProductBankGuarantee"

import ViewProductBankGuarantee from '../components/Product/ViewProductBankGuarantee'
import * as ModelState from "../models/Models"


/*
 * Container "ProductBankGuarantee". BankGuarantee product detail information screen.
 */
class ContainerProductBankGuarantee extends React.Component<IProductBankGuaranteeProps, any> {

    constructor (props: IProductBankGuaranteeProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductBankGuarantee
                testID={ 'test-id-container-product-BankGuarantee' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentBankGuaranteeProduct={ this.props.currentBankGuaranteeProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }
                productContextMode={this.props.productContextMode}/>

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentBankGuaranteeProduct: Models.CreditProduct,
    currentExchangePerson: ModelsScheduler.Person,
    productContextMode: Enums.ProductContextMode,

}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductBankGuaranteeProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentBankGuaranteeProduct: state.user.mrmkmcibCRM.reducerProduct.currentBankGuaranteeProduct,
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

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductBankGuarantee)
