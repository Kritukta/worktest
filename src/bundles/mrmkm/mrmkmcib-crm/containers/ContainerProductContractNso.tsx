/*
 * Created by Voropaev D.N.
 */

import React from 'react'
import { connect } from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductContractNso from '../thunk/ThunkProductContractNso'
import { Models as ModelsApp } from "mrmkmcib-app"
import { Models as ModelsScheduler } from "mrmkmcib-scheduler"
import { Enums } from '../Enums'
import { Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductContractNso from "../models/ModelsProductContractNso"

import ViewProductContractNso from '../components/Product/ViewProductContractNso'
import * as ModelState from "../models/Models"


/*
 * Container "ProductContractNso". ContractNso product detail information screen.
 */
class ContainerProductContractNso extends React.Component<IProductContractNsoProps, any> {

    constructor (props: IProductContractNsoProps, context: any) {
        
        super(props, context)
    
    }

    render () {
        return (

            <ViewProductContractNso
                testID={ 'test-id-container-product-ContractNso' }
                currentExchangePerson={ this.props.currentExchangePerson }
                classifierDictionary={ this.props.classifierDictionary }
                currentCustomerManaged={ this.props.currentCustomerManaged }
                currentContractNsoProduct={ this.props.currentContractNsoProduct }
                navigateProductListBack={ this.props.navigateProductListBack }
                navigateBack={ this.props.navigateBack }
                productListAgreementStatus = {this.props.productListAgreementStatus}
                productContextMode={this.props.productContextMode} />

        )
    }
}

export interface IStateProps {

    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    currentContractNsoProduct: Models.DepositProduct,
    currentExchangePerson: ModelsScheduler.Person,
    productContextMode: Enums.ProductContextMode,
    productListAgreementStatus: Enums.ProductListAgreementStatus,
}

export interface IDispatchProps {

    navigateProductListBack: ModelsProductList.NAVIGATE_PRODUCT_LIST_BACK,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,

}

export type IProductContractNsoProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentContractNsoProduct: state.user.mrmkmcibCRM.reducerProduct.currentContractNsoProduct,
        currentExchangePerson: state.user.mrmkmcibCRM.reducerAppCRM.currentExchangePerson,
        productContextMode: state.user.mrmkmcibCRM.reducerProduct.productContextMode,
        productListAgreementStatus: state.user.mrmkmcibCRM.reducerCustomer.productListAgreementStatus
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

export default connect<IStateProps, IDispatchProps, { testID: string }> (mapStateToProps, mapDispatchToProps) (ContainerProductContractNso)
