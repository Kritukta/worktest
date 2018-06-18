/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppCRM from '../thunk/ThunkAppCRM';
import * as thunkDealEditor from '../thunk/ThunkDealEditor';
import * as thunkDealList from '../thunk/ThunkDealList';
import * as thunkDealListSearch from '../thunk/ThunkDealListSearch';
import ViewDealList from '../components/ViewDealList';
/*
 * Container "DealList". Inner deal list container for Customer container.
 */
class ContainerDealList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewDealList, { testID: 'test-id-container-DealList', performChangeTab: this.props.performChangeTab, performPopoverFilterShow: this.props.performPopoverFilterShow, performPopoverFilterHide: this.props.performPopoverFilterHide, performFilterApply: this.props.performFilterApply, performFilterReset: this.props.performFilterReset, performInputFilterValue: this.props.performInputFilterValue, performFilterUnSelectProduct: this.props.performFilterUnSelectProduct, performFilterSelectProduct: this.props.performFilterSelectProduct, performFilterSelectStage: this.props.performFilterSelectStage, performFilterSelectRole: this.props.performFilterSelectRole, performFilterSelectCurrency: this.props.performFilterSelectCurrency, performFilterSelectDateFrom: this.props.performFilterSelectDateFrom, performFilterSelectDateTo: this.props.performFilterSelectDateTo, performDealListRefresh: this.props.performDealListRefresh, performDealListFlush: this.props.performDealListFlush, performDealCreate: this.props.performDealCreate, performContainerReset: this.props.performContainerReset, navigateToDealListSearchScreen: this.props.navigateToDealListSearchScreen, navigateToDealEditor: this.props.navigateToDealEditor, performDealOpen: this.props.performDealOpen, navigateBack: this.props.navigateBack, dealListPageCachedDate: this.props.dealListPageCachedDate, infoMessage: this.props.infoMessage, isButtonCreateVisible: this.props.isButtonCreateVisible, isCreateDealEnable: this.props.isCreateDealEnable, isEditDealEnable: this.props.isEditDealEnable, filterPopoverNavigateToStage: this.props.filterPopoverNavigateToStage, filterPopoverNavigateToRole: this.props.filterPopoverNavigateToRole, filterPopoverNavigateToProduct: this.props.filterPopoverNavigateToProduct, filterPopoverNavigateToCurrency: this.props.filterPopoverNavigateToCurrency, filterPopoverNavigateToDateFrom: this.props.filterPopoverNavigateToDateFrom, filterPopoverNavigateToDateTo: this.props.filterPopoverNavigateToDateTo, filterPopoverNavigateBack: this.props.filterPopoverNavigateBack, classifierDictionary: this.props.classifierDictionary, filtersEditorOpened: this.props.filtersEditorOpened, filtersEditorClosed: this.props.filtersEditorClosed, filtersActiveOpened: this.props.filtersActiveOpened, filtersActiveClosed: this.props.filtersActiveClosed, filteredStagesList: this.props.filteredStagesList, filteredCurrencyList: this.props.filteredCurrencyList, currentTab: this.props.currentTab, isVisiblePopoverFilter: this.props.isVisiblePopoverFilter, dealOpenedList: this.props.dealOpenedList, dealClosedList: this.props.dealClosedList, refresh: this.props.refresh, refreshInProgress: this.props.refreshInProgress, refreshError: this.props.refreshError, currentUser: this.props.currentUser, startAnimation: this.props.startAnimation, currentCustomerManaged: this.props.currentCustomerManaged }));
    }
}
function mapStateToProps(state) {
    return {
        currentTab: state.user.mrmkmcibCRM.reducerDealList.currentTab,
        currentUser: state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
        infoMessage: state.user.mrmkmcibCRM.reducerDealList.infoMessage,
        isButtonCreateVisible: state.user.mrmkmcibCRM.reducerDealList.isButtonCreateVisible,
        isCreateDealEnable: state.user.mrmkmcibCRM.reducerDealList.isCreateDealEnable,
        isEditDealEnable: state.user.mrmkmcibCRM.reducerDealList.isEditDealEnable,
        filtersEditorOpened: state.user.mrmkmcibCRM.reducerDealList.filtersEditorOpened,
        filtersActiveOpened: state.user.mrmkmcibCRM.reducerDealList.filtersActiveOpened,
        filtersEditorClosed: state.user.mrmkmcibCRM.reducerDealList.filtersEditorClosed,
        filtersActiveClosed: state.user.mrmkmcibCRM.reducerDealList.filtersActiveClosed,
        filteredStagesList: state.user.mrmkmcibCRM.reducerDealList.filteredStagesList,
        filteredCurrencyList: state.user.mrmkmcibCRM.reducerDealList.filteredCurrencyList,
        dealListPageCachedDate: state.user.mrmkmcibCRM.reducerDealList.dealListPageCachedDate,
        isVisiblePopoverFilter: state.user.mrmkmcibCRM.reducerDealList.isVisiblePopoverFilter,
        dealOpenedList: state.user.mrmkmcibCRM.reducerDealList.dealOpenedList,
        dealClosedList: state.user.mrmkmcibCRM.reducerDealList.dealClosedList,
        refresh: state.user.mrmkmcibCRM.reducerDealList.refresh,
        refreshInProgress: state.user.mrmkmcibCRM.reducerDealList.refreshInProgress,
        refreshError: state.user.mrmkmcibCRM.reducerDealList.refreshError,
        classifierDictionary: state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
        currentCustomerManaged: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged,
        startAnimation: state.user.mrmkmcibCRM.reducerDealList.startAnimation,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToDealListSearchScreen: () => {
            dispatch(thunkDealListSearch.navigateToDealListSearchScreen());
        },
        performChangeTab: (index, value) => {
            dispatch(thunkDealList.performChangeTab(index, value));
        },
        performPopoverFilterShow: (currentTab) => {
            dispatch(thunkDealList.performPopoverFilterShow(currentTab));
        },
        performPopoverFilterHide: () => {
            dispatch(thunkDealList.performPopoverFilterHide());
        },
        performFilterApply: (currentTab) => {
            dispatch(thunkDealList.performFilterApply(currentTab));
        },
        performFilterReset: (currentTab) => {
            dispatch(thunkDealList.performFilterReset(currentTab));
        },
        performDealListRefresh: () => {
            dispatch(thunkDealList.performDealListRefresh());
        },
        performDealListFlush: () => {
            dispatch(thunkDealList.performFlush());
        },
        performDealCreate: () => {
            dispatch(thunkDealList.performDealCreate());
        },
        performContainerReset: () => {
            dispatch(thunkDealList.performContainerReset());
        },
        performFilterUnSelectProduct: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterUnSelectProduct(currentTab, filterData, value));
        },
        performFilterSelectProduct: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterSelectProduct(currentTab, filterData, value));
        },
        performFilterSelectStage: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterSelectStage(currentTab, filterData, value));
            dispatch(thunkDealList.filterPopoverNavigateBack());
        },
        performFilterSelectRole: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterSelectRole(currentTab, filterData, value));
            dispatch(thunkDealList.filterPopoverNavigateBack());
        },
        performFilterSelectCurrency: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterSelectCurrency(currentTab, filterData, value));
            dispatch(thunkDealList.filterPopoverNavigateBack());
        },
        performFilterSelectDateFrom: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterSelectDateFrom(currentTab, filterData, value));
        },
        performFilterSelectDateTo: (currentTab, filterData, value) => {
            dispatch(thunkDealList.performFilterSelectDateTo(currentTab, filterData, value));
        },
        performInputFilterValue: (value, currentTab) => {
            dispatch(thunkDealList.performInputFilterValue(value, currentTab));
        },
        filterPopoverNavigateToStage: () => {
            dispatch(thunkDealList.filterPopoverNavigateToStage());
        },
        filterPopoverNavigateToRole: () => {
            dispatch(thunkDealList.filterPopoverNavigateToRole());
        },
        filterPopoverNavigateToProduct: () => {
            dispatch(thunkDealList.filterPopoverNavigateToProduct());
        },
        filterPopoverNavigateToCurrency: () => {
            dispatch(thunkDealList.filterPopoverNavigateToCurrency());
        },
        filterPopoverNavigateToDateFrom: () => {
            dispatch(thunkDealList.filterPopoverNavigateToDateFrom());
        },
        filterPopoverNavigateToDateTo: () => {
            dispatch(thunkDealList.filterPopoverNavigateToDateTo());
        },
        filterPopoverNavigateBack: () => {
            dispatch(thunkDealList.filterPopoverNavigateBack());
        },
        navigateToDealEditor: (deal, mode, agentList) => {
            dispatch(thunkDealEditor.navigateToDealEditor(deal, mode, agentList));
        },
        performDealOpen: (dealId, dealMode, isEditDealEnable) => {
            dispatch(thunkAppCRM.performDealOpen(dealId, dealMode, isEditDealEnable));
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDealList);
//# sourceMappingURL=ContainerDealList.js.map