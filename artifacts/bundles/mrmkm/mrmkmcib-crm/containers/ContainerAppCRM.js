/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkCustomer from '../thunk/ThunkCustomer';
import * as thunkProductList from '../thunk/ThunkProductList';
import * as thunkProductCredit from '../thunk/ThunkProductCredit';
import { Enums } from '../Enums';
import ViewAppCRM from '../components/ViewAppCRM';
/*
 * Container "AppCRM". CRM mobile application. Current user managed customer list and customer search screens.
 */
class ContainerAppCRM extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performApplicationInit();
    }
    render() {
        return (React.createElement(ViewAppCRM, { testID: 'test-id-container-AppCRM', performApplicationInit: this.props.performApplicationInit, performCustomerListRefresh: this.props.performCustomerListRefresh, performInputFilterOrganizationStructure: this.props.performInputFilterOrganizationStructure, performInputFilterMemberRole: this.props.performInputFilterMemberRole, performCustomerManagedListRefresh: this.props.performCustomerManagedListRefresh, performCustomerManagedListAppend: this.props.performCustomerManagedListAppend, append_callGetCustomerManagedList: this.props.append_callGetCustomerManagedList, performSearchModeEnable: this.props.performSearchModeEnable, performSearchModeDisable: this.props.performSearchModeDisable, performInputSearch: this.props.performInputSearch, performSearchReset: this.props.performSearchReset, performSearch: this.props.performSearch, performCustomerSearchListAppend: this.props.performCustomerSearchListAppend, performCustomerOpenExecute: this.props.performCustomerOpenExecute, performGszOpen: this.props.performGszOpen, performDealOpen: this.props.performDealOpen, navigateBack: this.props.navigateBack, performContainerReset: this.props.performContainerReset, performChangeDisplayErrorModalAppCRM: this.props.performChangeDisplayErrorModalAppCRM, navigateToProductForecastEventInfoScreen: this.props.navigateToProductForecastEventInfoScreen, currentUser: this.props.currentUser, classifierDictionary: this.props.classifierDictionary, currentPage: this.props.currentPage, customerManagedList: this.props.customerManagedList, inputFilterOrganizationStructure: this.props.inputFilterOrganizationStructure, inputFilterMemberRole: this.props.inputFilterMemberRole, disabledFilterOrganizationStructureList: this.props.disabledFilterOrganizationStructureList, disabledFilterMemberRoleList: this.props.disabledFilterMemberRoleList, isSearchMode: this.props.isSearchMode, inputSearch: this.props.inputSearch, customerSearchType: this.props.customerSearchType, customerSearchError: this.props.customerSearchError, isSearchError: this.props.isSearchError, currentSearchPage: this.props.currentSearchPage, customerSearchList: this.props.customerSearchList, refresh: this.props.refresh, refreshInProgress: this.props.refreshInProgress, refreshError: this.props.refreshError, append: this.props.append, appendInProgress: this.props.appendInProgress, appendError: this.props.appendError, customerManagedListPage: this.props.customerManagedListPage, customerManagedListPageFetching: this.props.customerManagedListPageFetching, customerManagedListPageError: this.props.customerManagedListPageError, customerManagedListPageCachedDate: this.props.customerManagedListPageCachedDate, search: this.props.search, searchInProgress: this.props.searchInProgress, searchError: this.props.searchError, searchAppend: this.props.searchAppend, searchAppendInProgress: this.props.searchAppendInProgress, searchAppendError: this.props.searchAppendError, performFlush: this.props.performFlush, customerManagedListCachedDate: this.props.customerManagedListCachedDate, isRefreshBarVisible: this.props.isRefreshBarVisible, performRefreshBarHide: this.props.performRefreshBarHide, currentCustomer: this.props.currentCustomer, currentCustomerManaged: this.props.currentCustomerManaged, performCustomerFlush: this.props.performCustomerFlush, refreshCustomerInProgress: this.props.refreshCustomerInProgress, isVisibleModalAppCRMError: this.props.isVisibleModalAppCRMError, navigationInProgress: this.props.navigationInProgress, performCustomerListAppend: this.props.performCustomerListAppend, currentDeal: this.props.currentDeal, performPrognosticEventEdit: this.props.performPrognosticEventEdit, performCustomerOpenOnce: this.props.performCustomerOpenOnce, navigationErrorMessage: this.props.navigationErrorMessage, navigateStartData: this.props.navigateStartData, isNavigation: this.props.isNavigation, performNavigateBack: this.props.performNavigateBack, performNavigationReload: this.props.performNavigationReload }));
    }
}
function mapStateToProps(state) {
    return {
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentPage: state.user.mrmkmcibCRM.reducerAppCRM.currentPage,
        customerManagedList: state.user.mrmkmcibCRM.reducerAppCRM.customerManagedList,
        inputFilterOrganizationStructure: state.user.mrmkmcibCRM.reducerAppCRM.inputFilterOrganizationStructure,
        inputFilterMemberRole: state.user.mrmkmcibCRM.reducerAppCRM.inputFilterMemberRole,
        disabledFilterOrganizationStructureList: state.user.mrmkmcibCRM.reducerAppCRM.disabledFilterOrganizationStructureList,
        disabledFilterMemberRoleList: state.user.mrmkmcibCRM.reducerAppCRM.disabledFilterMemberRoleList,
        isSearchMode: state.user.mrmkmcibCRM.reducerAppCRM.isSearchMode,
        inputSearch: state.user.mrmkmcibCRM.reducerAppCRM.inputSearch,
        customerSearchType: state.user.mrmkmcibCRM.reducerAppCRM.customerSearchType,
        customerSearchError: state.user.mrmkmcibCRM.reducerAppCRM.customerSearchError,
        isSearchError: state.user.mrmkmcibCRM.reducerAppCRM.isSearchError,
        currentSearchPage: state.user.mrmkmcibCRM.reducerAppCRM.currentSearchPage,
        customerSearchList: state.user.mrmkmcibCRM.reducerAppCRM.customerSearchList,
        refresh: state.user.mrmkmcibCRM.reducerAppCRM.refresh,
        refreshInProgress: state.user.mrmkmcibCRM.reducerAppCRM.refreshInProgress,
        refreshError: state.user.mrmkmcibCRM.reducerAppCRM.refreshError,
        append: state.user.mrmkmcibCRM.reducerAppCRM.append,
        appendInProgress: state.user.mrmkmcibCRM.reducerAppCRM.appendInProgress,
        appendError: state.user.mrmkmcibCRM.reducerAppCRM.appendError,
        customerManagedListPage: state.user.mrmkmcibCRM.reducerAppCRM.customerManagedListPage,
        customerManagedListPageFetching: state.user.mrmkmcibCRM.reducerAppCRM.customerManagedListPageFetching,
        customerManagedListPageError: state.user.mrmkmcibCRM.reducerAppCRM.customerManagedListPageError,
        customerManagedListPageCachedDate: state.user.mrmkmcibCRM.reducerAppCRM.customerManagedListPageCachedDate,
        search: state.user.mrmkmcibCRM.reducerAppCRM.search,
        searchInProgress: state.user.mrmkmcibCRM.reducerAppCRM.searchInProgress,
        searchError: state.user.mrmkmcibCRM.reducerAppCRM.searchError,
        searchAppend: state.user.mrmkmcibCRM.reducerAppCRM.searchAppend,
        searchAppendInProgress: state.user.mrmkmcibCRM.reducerAppCRM.searchAppendInProgress,
        searchAppendError: state.user.mrmkmcibCRM.reducerAppCRM.searchAppendError,
        customerManagedListCachedDate: state.user.mrmkmcibCRM.reducerAppCRM.customerManagedListCachedDate,
        isRefreshBarVisible: state.user.mrmkmcibCRM.reducerAppCRM.isRefreshBarVisible,
        currentCustomer: state.user.mrmkmcibCRM.reducerCustomer.currentCustomer,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        refreshCustomerInProgress: state.user.mrmkmcibCRM.reducerCustomer.refreshInProgress,
        isVisibleModalAppCRMError: state.user.mrmkmcibCRM.reducerAppCRM.isVisibleModalAppCRMError,
        navigationInProgress: state.user.mrmkmcibCRM.reducerAppCRM.navigationInProgress,
        currentDeal: state.user.mrmkmcibCRM.reducerProductList.currentDeal,
        navigationErrorMessage: state.user.mrmkmcibApp.reducerAuthorization.navigationErrorMessage,
        navigateStartData: state.user.mrmkmcibApp.reducerAuthorization.navigateStartData,
        isNavigation: state.user.mrmkmcibNotice.reducerAppNotice.isNavigation,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performApplicationInit: () => {
            dispatch(thunkAppCRM.performApplicationInit());
        },
        performCustomerListRefresh: () => {
            dispatch(thunkAppCRM.performCustomerListRefresh());
        },
        performInputFilterOrganizationStructure: (value) => {
            dispatch(thunkAppCRM.performInputFilterOrganizationStructure(value));
        },
        performInputFilterMemberRole: (value) => {
            dispatch(thunkAppCRM.performInputFilterMemberRole(value));
        },
        performCustomerManagedListRefresh: () => {
            dispatch(thunkAppCRM.performCustomerManagedListRefresh());
        },
        performCustomerManagedListAppend: () => {
            dispatch(thunkAppCRM.performCustomerManagedListAppend());
        },
        append_callGetCustomerManagedList: () => {
            dispatch(thunkAppCRM.append_callGetCustomerManagedList());
        },
        performSearchModeEnable: () => {
            dispatch(thunkAppCRM.performSearchModeEnable());
        },
        performSearchModeDisable: () => {
            dispatch(thunkAppCRM.performSearchModeDisable());
        },
        performInputSearch: (value) => {
            dispatch(thunkAppCRM.performInputSearch(value));
        },
        performSearchReset: () => {
            dispatch(thunkAppCRM.performSearchReset());
        },
        performChangeDisplayErrorModalAppCRM: () => {
            dispatch(thunkAppCRM.performChangeDisplayErrorModalAppCRM());
        },
        performFlush: () => {
            dispatch(thunkAppCRM.performFlush());
        },
        performRefreshBarHide: () => {
            dispatch(thunkAppCRM.performRefreshBarHide());
        },
        performSearch: () => {
            dispatch(thunkAppCRM.performSearch());
        },
        performCustomerSearchListAppend: () => {
            dispatch(thunkAppCRM.performCustomerSearchListAppend());
        },
        performCustomerOpenExecute: (customer) => {
            dispatch(thunkAppCRM.performCustomerOpenExecute(customer, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show));
        },
        performCustomerOpenOnce: (customer) => {
            dispatch(thunkAppCRM.performCustomerOpenOnce(customer, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show));
        },
        performGszOpen: () => {
            dispatch(thunkAppCRM.performGszOpen());
        },
        performDealOpen: (dealId) => {
            dispatch(thunkAppCRM.performDealOpen(dealId, Enums.DealMode.CommonBack, false));
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        },
        performContainerReset: () => {
            dispatch(thunkAppCRM.performContainerReset());
        },
        performCustomerFlush: () => {
            dispatch(thunkCustomer.performFlush());
        },
        performCustomerListAppend: () => {
            dispatch(thunkAppCRM.performCustomerListAppend());
        },
        navigateToProductForecastEventInfoScreen: (event) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event));
        },
        performPrognosticEventEdit: () => {
            dispatch(thunkProductCredit.performPrognosticEventCreate());
        },
        performNavigateBack: () => {
            dispatch(thunkAppCRM.performNavigateBackFromPush());
        },
        performNavigationReload: () => {
            dispatch(thunkAppCRM.performNavigationReloadPush());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerAppCRM);
//# sourceMappingURL=ContainerAppCRM.js.map