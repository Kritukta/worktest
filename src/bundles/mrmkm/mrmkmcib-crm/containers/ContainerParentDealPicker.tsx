/*
 * Created by Gladkov E.N.
 */

import React from 'react'
import {connect} from 'react-redux'

import * as thunkParentDealPicker from '../thunk/ThunkParentDealPicker'
import {Models} from 'mrmkmcib-crm'
import * as ModelsParentDealPicker from '../models/ModelsParentDealPicker'
import Error from '../models/Error'

import ViewParentDealPicker from '../components/ViewParentDealPicker'
import * as ModelState from '../models/Models'
import {Enums} from '../Enums'


/*
 * Container 'ParentDealPickerCustomerList'.
 */
class ContainerParentDealPicker extends React.Component<IParentDealPickerProps, any> {

    constructor(props: IParentDealPickerProps, context: any) {
        super(props, context);
    }

    render() {
        return (
            <ViewParentDealPicker
                testID={'test-id-container-ParentDealPicker'}
                currentDeal={this.props.currentDeal}
                isParentDealCustomerSearchMode={this.props.isParentDealCustomerSearchMode}
                isParentDealCustomerRefreshInProgress={this.props.isParentDealCustomerRefreshInProgress}
                isParentDealCustomerAppendInProgress={this.props.isParentDealCustomerAppendInProgress}
                isParentDealCustomerSearchInProgress={this.props.isParentDealCustomerSearchInProgress}
                isParentDealCustomerSearchAppendInProgress={this.props.isParentDealCustomerSearchAppendInProgress}

                performCustomerListAppend={this.props.performCustomerListAppend}
                performFlush={this.props.performFlush}

                parentDealCustomerSearchList={this.props.parentDealCustomerSearchList}
                parentDealCustomerList={this.props.parentDealCustomerList}
                parentDealDealList={this.props.parentDealDealList}
                navigateToParentDealDealListScreen={this.props.navigateToParentDealDealListScreen}
                navigateToParentDealCustomerListScreen={this.props.navigateToParentDealCustomerListScreen}
                performParentDealDealSelect={this.props.performParentDealDealSelect}
                performParentDealCustomerSearch={this.props.performParentDealCustomerSearch}
                performParentDealCustomerInputSearch={this.props.performParentDealCustomerInputSearch}
                parentDealCustomerInputSearch={this.props.parentDealCustomerInputSearch}
                navigateBack={this.props.navigateBack}
                isParentDealDealListRefreshInProgress={this.props.isParentDealDealListRefreshInProgress}
                parentDealDealListFetchError={this.props.parentDealDealListFetchError}
                performParentDealCustomerSearchModeEnable={this.props.performParentDealCustomerSearchModeEnable}
                performParentDealCustomerSearchModeDisable={this.props.performParentDealCustomerSearchModeDisable}
                performParentDealCustomerListAppend={this.props.performParentDealCustomerListAppend}
                performParentDealCustomerListRefresh={this.props.performParentDealCustomerListRefresh}
                performParentDealDealListRefresh={this.props.performParentDealDealListRefresh}
                customerManagedListCachedDate={this.props.customerManagedListCachedDate}
                isRefreshBarVisible={this.props.isRefreshBarVisible}
                parentDealPickerMode={this.props.parentDealPickerMode}
				dealEditorMode={this.props.dealEditorMode}
                />
        )
    }
}

export interface IStateProps {
    currentDeal: Models.Deal,
    isParentDealCustomerSearchMode: boolean,
    isParentDealCustomerRefreshInProgress: boolean,
    isParentDealCustomerAppendInProgress: boolean,
    isParentDealCustomerSearchInProgress: boolean,
    isParentDealCustomerSearchAppendInProgress: boolean,

    parentDealCustomerSearchList: Models.CustomerManagedList,
    parentDealCustomerList: Models.CustomerManagedList,
    parentDealDealList: Models.DealList,
    parentDealCustomerInputSearch: string,
    isParentDealDealListRefreshInProgress: boolean,
    parentDealDealListFetchError: Error | null,
    customerManagedListCachedDate: Date | null,
    isRefreshBarVisible: boolean,
	parentDealPickerMode: Enums.ParentDealPickerMode,
	dealEditorMode: Enums.DealEditorMode | null,
}

export interface IDispatchProps {
    navigateBack: ModelsParentDealPicker.NAVIGATE_BACK,
    navigateToParentDealDealListScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_DEAL_LIST_SCREEN,
    navigateToParentDealCustomerListScreen: ModelsParentDealPicker.NAVIGATE_TO_PARENT_DEAL_CUSTOMER_LIST_SCREEN,
    performParentDealDealSelect: ModelsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_SELECT,
    performParentDealCustomerSearchModeEnable: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_ENABLE,
    performParentDealCustomerSearchModeDisable: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH_MODE_DISABLE,
    performParentDealCustomerListAppend: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_APPEND,
    performParentDealCustomerListRefresh: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_LIST_REFRESH,
    performParentDealDealListRefresh: ModelsParentDealPicker.PERFORM_PARENT_DEAL_DEAL_LIST_REFRESH,
    performParentDealCustomerSearch: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_SEARCH,
    performParentDealCustomerInputSearch: ModelsParentDealPicker.PERFORM_PARENT_DEAL_CUSTOMER_INPUT_SEARCH,
    performCustomerListAppend: ModelsParentDealPicker.PERFORM_CUSTOMER_LIST_APPEND,
    performFlush: ModelsParentDealPicker.PERFORM_FLUSH,
}

export type IParentDealPickerProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {
        currentDeal: state.user.mrmkmcibCRM.reducerParentDealPicker.currentDeal,
        isParentDealCustomerSearchMode: state.user.mrmkmcibCRM.reducerParentDealPicker.isParentDealCustomerSearchMode,
        isParentDealCustomerRefreshInProgress: state.user.mrmkmcibCRM.reducerParentDealPicker.isParentDealCustomerRefreshInProgress,
        isParentDealCustomerAppendInProgress: state.user.mrmkmcibCRM.reducerParentDealPicker.isParentDealCustomerAppendInProgress,
        isParentDealCustomerSearchInProgress: state.user.mrmkmcibCRM.reducerParentDealPicker.isParentDealCustomerSearchInProgress,
        isParentDealCustomerSearchAppendInProgress: state.user.mrmkmcibCRM.reducerParentDealPicker.isParentDealCustomerSearchAppendInProgress,

        parentDealCustomerInputSearch: state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealCustomerInputSearch,
        parentDealCustomerSearchList: state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealCustomerSearchList,
        parentDealCustomerList: state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealCustomerList,
        parentDealDealList: state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealDealList,
        isParentDealDealListRefreshInProgress: state.user.mrmkmcibCRM.reducerParentDealPicker.isParentDealDealListRefreshInProgress,
        parentDealDealListFetchError: state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealDealListFetchError,
        customerManagedListCachedDate: state.user.mrmkmcibCRM.reducerParentDealPicker.customerManagedListCachedDate,
        isRefreshBarVisible: state.user.mrmkmcibCRM.reducerParentDealPicker.isRefreshBarVisible,
		parentDealPickerMode: state.user.mrmkmcibCRM.reducerParentDealPicker.parentDealPickerMode,
        dealEditorMode: state.user.mrmkmcibCRM.reducerDealEditor.dealEditorMode,
        }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        navigateToParentDealDealListScreen: (parentDealCustomer: Models.CustomerManaged) => {
            dispatch(thunkParentDealPicker.navigateToParentDealDealListScreen(parentDealCustomer))
        },
        navigateToParentDealCustomerListScreen: (mode: Enums.ParentDealPickerMode) => {
            dispatch(thunkParentDealPicker.navigateToParentDealCustomerListScreen(mode))
        },
        performParentDealDealSelect: (parentDealDeal: Models.Deal) => {
            dispatch(thunkParentDealPicker.performParentDealDealSelect(parentDealDeal))
        },
        performParentDealCustomerSearchModeEnable: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerSearchModeEnable())
        },
        performParentDealCustomerSearchModeDisable: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerSearchModeDisable())
        },
        performParentDealCustomerListRefresh: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerListRefresh())
        },
        performParentDealCustomerListAppend: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerListAppend())
        },

        performFlush: () => {
            dispatch(thunkParentDealPicker.performFlush())
        },
        performParentDealDealListRefresh: () => {
            dispatch(thunkParentDealPicker.performParentDealDealListRefresh())
        },
        performParentDealCustomerSearch: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerSearch())
        },
        performCustomerListAppend: () => {
            dispatch(thunkParentDealPicker.performCustomerListAppend())
        },
        performParentDealCustomerInputSearch: (parentDealCustomerInputSearch: string) => {
            dispatch(thunkParentDealPicker.performParentDealCustomerInputSearch(parentDealCustomerInputSearch))
        },
        navigateBack: () => {
            dispatch(thunkParentDealPicker.navigateBack())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerParentDealPicker)
