/*
 * Created by Vladukin A.S.
 */

import React from 'react'
import {connect} from 'react-redux'

import * as thunkDealListSearch from '../thunk/ThunkDealListSearch'
import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import {Models as ModelsApp} from 'mrmkmcib-app'
import {Enums} from '../Enums'
import {Models} from 'mrmkmcib-crm'
import * as ModelsDealListSearch from '../models/ModelsDealListSearch'
import * as ModelsAppCRM from '../models/ModelsAppCRM'

import ViewDealListSearch from '../components/ViewDealListSearch'
import * as ModelState from '../models/Models'


/*
 * Container 'DealListSearch'.
 */
class ContainerDealListSearch extends React.Component<IDealListSearchProps, any> {

    constructor(props: IDealListSearchProps, context: any) {
        super(props, context);
    }

    render() {
        return (
            <ViewDealListSearch
                testID={'test-id-container-DealListSearch'}
                navigateBackToDealListScreen={this.props.navigateBackToDealListScreen}
                dealSearchOpenedList={this.props.dealSearchOpenedList}
                dealSearchClosedList={this.props.dealSearchClosedList}
                currentTab={this.props.currentTab}
                inputSearch={this.props.inputSearch}
                performInputSearch={this.props.performInputSearch}
                currentCustomerManaged={this.props.currentCustomerManaged}
                currentUser={this.props.currentUser}
                dealOpenedList={this.props.dealOpenedList}
                dealClosedList={this.props.dealClosedList}
                performDealOpen={this.props.performDealOpen}
                isEditDealEnable={this.props.isEditDealEnable}
            >
            </ViewDealListSearch>
        )
    }
}

export interface IStateProps {
    dealSearchOpenedList: Models.DealList,
    dealSearchClosedList: Models.DealList,
    currentTab: Enums.DealListTab,
    inputSearch: string,
    currentCustomerManaged: Models.CustomerManaged,
    currentUser: ModelsApp.Employee,
    dealOpenedList: Models.DealList,
    dealClosedList: Models.DealList,
    isEditDealEnable: boolean,
}

export interface IDispatchProps {
    navigateBackToDealListScreen: ModelsDealListSearch.NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN,
    performInputSearch: ModelsDealListSearch.PERFORM_INPUT_SEARCH,
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN,
}

export type IDealListSearchProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        dealSearchOpenedList: state.user.mrmkmcibCRM.reducerDealListSearch.dealSearchOpenedList,
        dealSearchClosedList: state.user.mrmkmcibCRM.reducerDealListSearch.dealSearchClosedList,
        currentTab: state.user.mrmkmcibCRM.reducerDealList.currentTab,
        inputSearch: state.user.mrmkmcibCRM.reducerDealListSearch.inputSearch,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
        dealOpenedList: state.user.mrmkmcibCRM.reducerDealList.dealOpenedList,
        dealClosedList: state.user.mrmkmcibCRM.reducerDealList.dealClosedList,
        isEditDealEnable: state.user.mrmkmcibCRM.reducerDealList.isEditDealEnable,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        navigateBackToDealListScreen: () => {
            dispatch(thunkDealListSearch.navigateBackToDealListScreen())
        },
        performInputSearch: (value: string) => {
            dispatch(thunkDealListSearch.performInputSearch(value))
        },
        performDealOpen: (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean) => {
            dispatch(thunkAppCRM.performDealOpen(dealId, dealMode, isEditDealEnable))
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDealListSearch)
