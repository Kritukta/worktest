/*
 * Created by Gladkov E.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkParentDealPicker from '../thunk/ThunkParentDealPicker';
import ViewParentDealPicker from '../components/ViewParentDealPicker';
/*
 * Container 'ParentDealPickerCustomerList'.
 */
class ContainerParentDealPicker extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewParentDealPicker, { testID: 'test-id-container-ParentDealPicker', currentDeal: this.props.currentDeal, isParentDealCustomerSearchMode: this.props.isParentDealCustomerSearchMode, isParentDealCustomerRefreshInProgress: this.props.isParentDealCustomerRefreshInProgress, isParentDealCustomerAppendInProgress: this.props.isParentDealCustomerAppendInProgress, isParentDealCustomerSearchInProgress: this.props.isParentDealCustomerSearchInProgress, isParentDealCustomerSearchAppendInProgress: this.props.isParentDealCustomerSearchAppendInProgress, performCustomerListAppend: this.props.performCustomerListAppend, performFlush: this.props.performFlush, parentDealCustomerSearchList: this.props.parentDealCustomerSearchList, parentDealCustomerList: this.props.parentDealCustomerList, parentDealDealList: this.props.parentDealDealList, navigateToParentDealDealListScreen: this.props.navigateToParentDealDealListScreen, navigateToParentDealCustomerListScreen: this.props.navigateToParentDealCustomerListScreen, performParentDealDealSelect: this.props.performParentDealDealSelect, performParentDealCustomerSearch: this.props.performParentDealCustomerSearch, performParentDealCustomerInputSearch: this.props.performParentDealCustomerInputSearch, parentDealCustomerInputSearch: this.props.parentDealCustomerInputSearch, navigateBack: this.props.navigateBack, isParentDealDealListRefreshInProgress: this.props.isParentDealDealListRefreshInProgress, parentDealDealListFetchError: this.props.parentDealDealListFetchError, performParentDealCustomerSearchModeEnable: this.props.performParentDealCustomerSearchModeEnable, performParentDealCustomerSearchModeDisable: this.props.performParentDealCustomerSearchModeDisable, performParentDealCustomerListAppend: this.props.performParentDealCustomerListAppend, performParentDealCustomerListRefresh: this.props.performParentDealCustomerListRefresh, performParentDealDealListRefresh: this.props.performParentDealDealListRefresh, customerManagedListCachedDate: this.props.customerManagedListCachedDate, isRefreshBarVisible: this.props.isRefreshBarVisible, parentDealPickerMode: this.props.parentDealPickerMode, dealEditorMode: this.props.dealEditorMode }));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToParentDealDealListScreen: (parentDealCustomer) => {
            dispatch(thunkParentDealPicker.navigateToParentDealDealListScreen(parentDealCustomer));
        },
        navigateToParentDealCustomerListScreen: (mode) => {
            dispatch(thunkParentDealPicker.navigateToParentDealCustomerListScreen(mode));
        },
        performParentDealDealSelect: (parentDealDeal) => {
            dispatch(thunkParentDealPicker.performParentDealDealSelect(parentDealDeal));
        },
        performParentDealCustomerSearchModeEnable: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerSearchModeEnable());
        },
        performParentDealCustomerSearchModeDisable: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerSearchModeDisable());
        },
        performParentDealCustomerListRefresh: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerListRefresh());
        },
        performParentDealCustomerListAppend: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerListAppend());
        },
        performFlush: () => {
            dispatch(thunkParentDealPicker.performFlush());
        },
        performParentDealDealListRefresh: () => {
            dispatch(thunkParentDealPicker.performParentDealDealListRefresh());
        },
        performParentDealCustomerSearch: () => {
            dispatch(thunkParentDealPicker.performParentDealCustomerSearch());
        },
        performCustomerListAppend: () => {
            dispatch(thunkParentDealPicker.performCustomerListAppend());
        },
        performParentDealCustomerInputSearch: (parentDealCustomerInputSearch) => {
            dispatch(thunkParentDealPicker.performParentDealCustomerInputSearch(parentDealCustomerInputSearch));
        },
        navigateBack: () => {
            dispatch(thunkParentDealPicker.navigateBack());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerParentDealPicker);
//# sourceMappingURL=ContainerParentDealPicker.js.map