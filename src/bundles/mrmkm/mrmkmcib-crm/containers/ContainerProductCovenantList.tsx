/*
 *@author Voronov S.I.
 */

import React from 'react'
import {connect} from 'react-redux'


import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"

import {Models} from "mrmkmcib-crm"

import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProductCredit from "../models/ModelsProductCredit"

import ViewProductCovenantList from '../components/ViewProductCovenantList'
import * as ModelState from "../models/Models"
/*
 * Container "ProductCovenantList". ProductCovenantList detail information screen.
 */
class ContainerProductCovenantList extends React.Component<IProductCovenantListProps, any> {

    constructor(props: IProductCovenantListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (

            <ViewProductCovenantList 
                    testID = 'testID-ViewProductCovenantList-testID'
                    classifierDictionary={this.props.classifierDictionary}
                    currentCustomerManaged = {this.props.currentCustomerManaged}
                    currentCreditProduct = {this.props.currentCreditProduct}
                    productCachedDateCovenantList = {this.props.productCachedDateCovenantList}
                    filteredProductCovenantList = {this.props.filteredProductCovenantList}
                    
                    productCovenantList = {this.props.productCovenantList}
                    performCallGetProductCovenantListCacheReset = {this.props.performCallGetProductCovenantListCacheReset}
                  
                    covenantListFetching = {this.props.covenantListFetching}
                    covenantListFetchingError = {this.props.covenantListFetchingError}
                    isVisiblePopoverCovenantPeriodFilter = {this.props.isVisiblePopoverCovenantPeriodFilter}
                    isVisiblePopoverCovenantStatusFilter = {this.props.isVisiblePopoverCovenantStatusFilter}
                    performChangeVisiblePopoverCovenantStatusFilter = {this.props.performChangeVisiblePopoverCovenantStatusFilter}
                    performChangeVisiblePopoverCovenantPeriodFilter = {this.props.performChangeVisiblePopoverCovenantPeriodFilter}
                    performChangeCheckStatusCreditCovenantPeriodFilterValueList = {this.props.performChangeCheckStatusCreditCovenantPeriodFilterValueList}
                    performChangeCheckStatusCreditCovenantStatusFilterValueList = {this.props.performChangeCheckStatusCreditCovenantStatusFilterValueList}
                    performChangeCovenantDateFilterValue = {this.props.performChangeCovenantDateFilterValue}
                    covenantPeriodFilterValueList = {this.props.covenantPeriodFilterValueList}
                    covenantStatusFilterValueList = {this.props.covenantStatusFilterValueList}
                    covenantAppliedPeriodFilterValueList = {this.props.covenantAppliedPeriodFilterValueList}
                    covenantAppliedStatusFilterValueList = {this.props.covenantAppliedStatusFilterValueList}
                    performApplyCovenantPeriodFilter = {this.props.performApplyCovenantPeriodFilter}
                    performApplyCovenantStatusFilter = {this.props.performApplyCovenantStatusFilter}
                    covenantDateFilterValue = {this.props.covenantDateFilterValue}
                    navigateToCustomerScreen = {this.props.navigateToCustomerScreen}


                    >
            </ViewProductCovenantList>
        )
    }
}
export type IProductCovenantListProps = IStateProps & IDispatchProps & { testID: string };

export interface IStateProps {
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCreditProduct: Models.CreditProduct,
    currentCustomerManaged: Models.CustomerManaged,
    isVisiblePopoverCovenantPeriodFilter: boolean,
    isVisiblePopoverCovenantStatusFilter: boolean,
    covenantPeriodFilterValueList: ModelsApp.ClassifierList,
    covenantStatusFilterValueList: ModelsApp.ClassifierList,
    covenantAppliedPeriodFilterValueList: ModelsApp.ClassifierList,
    covenantAppliedStatusFilterValueList: ModelsApp.ClassifierList,
    covenantDateFilterValue: Date | null,
    productCachedDateCovenantList: Date | null,
 
    filteredProductCovenantList: Models.ProductCovenantList,
    productCovenantList: Models.ProductCovenantList,

    covenantListFetching: boolean,
    covenantListFetchingError: Models.Error | null,
}
export interface IDispatchProps {
    performCallGetProductCovenantListCacheReset: ModelsProductCredit.PERFORM_CALL_GET_PRODUCT_COVENANT_LIST_CACHE_RESET,
    performChangeVisiblePopoverCovenantPeriodFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_PERIOD_FILTER,
    performChangeVisiblePopoverCovenantStatusFilter: ModelsProductCredit.PERFORM_CHANGE_VISIBLE_POPOVER_COVENANT_STATUS_FILTER,
    performChangeCheckStatusCreditCovenantPeriodFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_PERIOD_FILTER,
    performChangeCheckStatusCreditCovenantStatusFilterValueList: ModelsProductCredit.PERFORM_CHANGE_CHECK_STATUS_CREDIT_COVENANT_STATUS_FILTER,

    performApplyCovenantPeriodFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_PERIOD_FILTER,
    performApplyCovenantStatusFilter: ModelsProductCredit.PERFORM_APPLY_COVENANT_STATUS_FILTER,
    performChangeCovenantDateFilterValue: ModelsProductCredit.PERFORM_CHANGE_COVENANT_DATE_FILTER_VALUE,
    navigateToCustomerScreen: ModelsProductCredit.NAVIGATE_TO_CUSTOMER_SCREEN,
  
}
function mapDispatchToProps(dispatch: Function) {
    return {
        performChangeVisiblePopoverCovenantStatusFilter: (value: boolean) => {
            dispatch(thunkProductCredit.performChangeVisiblePopoverCovenantStatusFilter(value))
        },
        performChangeVisiblePopoverCovenantPeriodFilter: (value: boolean) => {
            dispatch(thunkProductCredit.performChangeVisiblePopoverCovenantPeriodFilter(value))
        },
        performChangeCovenantDateFilterValue: (value: Date | null) => {
            dispatch(thunkProductCredit.performChangeCovenantDateFilterValue(value))
        },
        performChangeCheckStatusCreditCovenantPeriodFilterValueList: (filterValue: ModelsApp.Classifier) =>{
            dispatch(thunkProductCredit.performChangeCheckStatusCreditCovenantPeriodFilterValueList(filterValue))
        },
        performChangeCheckStatusCreditCovenantStatusFilterValueList: (filterValue: ModelsApp.Classifier) =>{
            dispatch(thunkProductCredit.performChangeCheckStatusCreditCovenantStatusFilterValueList(filterValue))
        },
        performApplyCovenantPeriodFilter: () => {
            dispatch(thunkProductCredit.performApplyCovenantPeriodFilter())
        },
        performApplyCovenantStatusFilter: () => {
            dispatch(thunkProductCredit.performApplyCovenantStatusFilter())
        },
        performCallGetProductCovenantListCacheReset: () => {
            dispatch(thunkProductCredit.performCallGetProductCovenantListCacheReset())
        }, 
        navigateToCustomerScreen: () => {
            dispatch(thunkProductCredit.navigateToCustomerScreen())
        }
    }

}
function mapStateToProps(state: ModelState.IRootState) {
    return {
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCreditProduct: state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        isVisiblePopoverCovenantPeriodFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverCovenantPeriodFilter,
        isVisiblePopoverCovenantStatusFilter: state.user.mrmkmcibCRM.reducerProductCredit.isVisiblePopoverCovenantStatusFilter,
        covenantPeriodFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantPeriodFilterValueList,
        covenantStatusFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantStatusFilterValueList,
        covenantAppliedPeriodFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantAppliedPeriodFilterValueList,
        covenantAppliedStatusFilterValueList: state.user.mrmkmcibCRM.reducerProductCredit.covenantAppliedStatusFilterValueList,
        covenantDateFilterValue: state.user.mrmkmcibCRM.reducerProductCredit.covenantDateFilterValue,
        productCachedDateCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.productCachedDateCovenantList,
        filteredProductCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.filteredProductCovenantList,
        productCovenantList: state.user.mrmkmcibCRM.reducerProductCredit.productCovenantList,
        covenantListFetching: state.user.mrmkmcibCRM.reducerProductCredit.covenantListFetching,
        covenantListFetchingError: state.user.mrmkmcibCRM.reducerProductCredit.covenantListFetchingError,
    }
}
export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerProductCovenantList)