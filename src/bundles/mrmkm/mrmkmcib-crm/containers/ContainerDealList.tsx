/*
 * Created by Burnaev M.U.
 */

import React from 'react'
import {connect} from 'react-redux'

import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkDealListSearch from '../thunk/ThunkDealListSearch'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import {Models} from 'mrmkmcib-crm'
import * as ModelsAppCRM from '../models/ModelsAppCRM'
import * as ModelsDealEditor from '../models/ModelsDealEditor'
import * as ModelsDealList from '../models/ModelsDealList'
import Error from '../models/Error'

import ViewDealList from '../components/ViewDealList'
import * as ModelState from '../models/Models'


/*
 * Container "DealList". Inner deal list container for Customer container.
 */
class ContainerDealList extends React.Component<IDealListProps, any> {

    constructor(props: IDealListProps, context: any) {
        super(props, context);
    }

    render() {
        return (
            <ViewDealList
                testID={'test-id-container-DealList'}

                performChangeTab={this.props.performChangeTab}
                performPopoverFilterShow={this.props.performPopoverFilterShow}
                performPopoverFilterHide={this.props.performPopoverFilterHide}
                performFilterApply={this.props.performFilterApply}
                performFilterReset={this.props.performFilterReset}
                performInputFilterValue={this.props.performInputFilterValue}
                performFilterUnSelectProduct={this.props.performFilterUnSelectProduct}
                performFilterSelectProduct={this.props.performFilterSelectProduct}
                performFilterSelectStage={this.props.performFilterSelectStage}
                performFilterSelectRole={this.props.performFilterSelectRole}
                performFilterSelectCurrency={this.props.performFilterSelectCurrency}
                performFilterSelectDateFrom={this.props.performFilterSelectDateFrom}
                performFilterSelectDateTo={this.props.performFilterSelectDateTo}
                performDealListRefresh={this.props.performDealListRefresh}
                performDealListFlush={this.props.performDealListFlush}
                performDealCreate={this.props.performDealCreate}
                performContainerReset={this.props.performContainerReset}

                navigateToDealListSearchScreen={this.props.navigateToDealListSearchScreen}
                navigateToDealEditor={this.props.navigateToDealEditor}
                performDealOpen={this.props.performDealOpen}
                navigateBack={this.props.navigateBack}

                dealListPageCachedDate={this.props.dealListPageCachedDate}
                infoMessage={this.props.infoMessage}
                isButtonCreateVisible={this.props.isButtonCreateVisible}
                isCreateDealEnable={this.props.isCreateDealEnable}
                isEditDealEnable={this.props.isEditDealEnable}

                filterPopoverNavigateToStage={this.props.filterPopoverNavigateToStage}
                filterPopoverNavigateToRole={this.props.filterPopoverNavigateToRole}
                filterPopoverNavigateToProduct={this.props.filterPopoverNavigateToProduct}
                filterPopoverNavigateToCurrency={this.props.filterPopoverNavigateToCurrency}
                filterPopoverNavigateToDateFrom={this.props.filterPopoverNavigateToDateFrom}
                filterPopoverNavigateToDateTo={this.props.filterPopoverNavigateToDateTo}
                filterPopoverNavigateBack={this.props.filterPopoverNavigateBack}

                classifierDictionary={this.props.classifierDictionary}
                filtersEditorOpened={this.props.filtersEditorOpened}
                filtersEditorClosed={this.props.filtersEditorClosed}
                filtersActiveOpened={this.props.filtersActiveOpened}
                filtersActiveClosed={this.props.filtersActiveClosed}
                filteredStagesList={this.props.filteredStagesList}
                filteredCurrencyList={this.props.filteredCurrencyList}
                currentTab={this.props.currentTab}
                isVisiblePopoverFilter={this.props.isVisiblePopoverFilter}
                dealOpenedList={this.props.dealOpenedList}
                dealClosedList={this.props.dealClosedList}
                refresh={this.props.refresh}
                refreshInProgress={this.props.refreshInProgress}
                refreshError={this.props.refreshError}
                currentUser={this.props.currentUser}
                startAnimation={this.props.startAnimation}
                currentCustomerManaged={this.props.currentCustomerManaged}
            >
            </ViewDealList>
        )
    }
}

export interface IStateProps {

    currentTab: Enums.DealListTab,
    currentUser: ModelsApp.Employee,
    isVisiblePopoverFilter: boolean,
    dealOpenedList: Models.DealList,
    dealClosedList: Models.DealList,
    refresh: boolean,
    refreshInProgress: boolean,
    refreshError: Error | null,
    infoMessage: string | null,
    isCreateDealEnable: boolean,
    isButtonCreateVisible: boolean,
    isEditDealEnable: boolean,
    filtersEditorOpened: Models.DealListFilter | null,
    filtersEditorClosed: Models.DealListFilter | null,
    filtersActiveOpened: Models.DealListFilter | null,
    filtersActiveClosed: Models.DealListFilter | null,
    filteredStagesList: ModelsApp.ClassifierList,
    filteredCurrencyList: ModelsApp.ClassifierList,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentCustomerManaged: Models.CustomerManaged,
    dealListPageCachedDate: Date | null,
    startAnimation: boolean,
}

export interface IDispatchProps {

    performChangeTab: ModelsDealList.PERFORM_CHANGE_TAB,

    performInputFilterValue: ModelsDealList.PERFORM_INPUT_FILTER_VALUE,
    filterPopoverNavigateToStage : ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToRole : ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToProduct : ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToCurrency : ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToDateFrom : ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateToDateTo : ModelsDealList.NAVIGATE_IN_POPOVER,
    filterPopoverNavigateBack: ModelsDealList.NAVIGATE_POPOVER_BACK,
    performFilterUnSelectProduct: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectProduct: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectStage: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectRole: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectCurrency: ModelsDealList.PERFORM_CLASSIFIER_SELECTION,
    performFilterSelectDateFrom: ModelsDealList.PERFORM_DATE_SELECTION,
    performFilterSelectDateTo: ModelsDealList.PERFORM_DATE_SELECTION,
    performPopoverFilterShow: ModelsDealList.PERFORM_POPOVER_FILTER_SHOW,
    performPopoverFilterHide: ModelsDealList.PERFORM_POPOVER_FILTER_HIDE,
    performFilterApply: ModelsDealList.PERFORM_FILTER_APPLY,
    performFilterReset: ModelsDealList.PERFORM_FILTER_RESET,

    performDealListRefresh: ModelsDealList.PERFORM_DEAL_LIST_REFRESH,
    performDealListFlush: ModelsDealList.PERFORM_DEAL_LIST_REFRESH,
    performDealCreate: ModelsDealList.PERFORM_DEAL_CREATE,
    performContainerReset: ModelsDealList.PERFORM_CONTAINER_RESET,

    navigateToDealEditor: ModelsDealEditor.NAVIGATE_TO_DEAL_EDITOR,
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    navigateToDealListSearchScreen: ModelsDealList.NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN,
}

export type IDealListProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
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

    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateToDealListSearchScreen: () => {
            dispatch(thunkDealListSearch.navigateToDealListSearchScreen())
        },
        performChangeTab: (index: number, value: Enums.DealListTab,) => {
            dispatch(thunkDealList.performChangeTab(index, value,))
        },
        performPopoverFilterShow: ( currentTab:Enums.DealListTab) => {
            dispatch(thunkDealList.performPopoverFilterShow(currentTab))
        },
        performPopoverFilterHide: () => {
            dispatch(thunkDealList.performPopoverFilterHide())
        },
        performFilterApply: ( currentTab:Enums.DealListTab) => {
            dispatch(thunkDealList.performFilterApply(currentTab))
        },
        performFilterReset: ( currentTab:Enums.DealListTab) => {
            dispatch(thunkDealList.performFilterReset(currentTab))
        },
        performDealListRefresh: () => {
            dispatch(thunkDealList.performDealListRefresh())
        },
        performDealListFlush: () => {
            dispatch(thunkDealList.performFlush())
        },
        performDealCreate: () => {
            dispatch(thunkDealList.performDealCreate())
        },
        performContainerReset: () => {
            dispatch(thunkDealList.performContainerReset())
        },
        performFilterUnSelectProduct: (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => {
            dispatch(thunkDealList.performFilterUnSelectProduct(currentTab, filterData, value))
        },
        performFilterSelectProduct : (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => {
            dispatch(thunkDealList.performFilterSelectProduct(currentTab, filterData, value))
        },
        performFilterSelectStage : (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => {
            dispatch(thunkDealList.performFilterSelectStage(currentTab, filterData, value))
            dispatch(thunkDealList.filterPopoverNavigateBack())
        },
        performFilterSelectRole : (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => {
            dispatch(thunkDealList.performFilterSelectRole(currentTab, filterData, value))
            dispatch(thunkDealList.filterPopoverNavigateBack())
        },
        performFilterSelectCurrency : (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: ModelsApp.Classifier) => {
            dispatch(thunkDealList.performFilterSelectCurrency(currentTab, filterData, value))
            dispatch(thunkDealList.filterPopoverNavigateBack())
        },
        performFilterSelectDateFrom : (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: Date) => {
            dispatch(thunkDealList.performFilterSelectDateFrom(currentTab, filterData, value))
        },
        performFilterSelectDateTo : (currentTab:Enums.DealListTab, filterData: Models.DealListFilter, value: Date) => {
            dispatch(thunkDealList.performFilterSelectDateTo(currentTab, filterData, value))
        },
        performInputFilterValue: (value: Models.DealListFilter, currentTab:Enums.DealListTab) => {
            dispatch(thunkDealList.performInputFilterValue(value, currentTab))
        },
        filterPopoverNavigateToStage: () => {
            dispatch(thunkDealList.filterPopoverNavigateToStage())
        },
        filterPopoverNavigateToRole: () => {
            dispatch(thunkDealList.filterPopoverNavigateToRole())
        },
        filterPopoverNavigateToProduct: () => {
            dispatch(thunkDealList.filterPopoverNavigateToProduct())
        },
        filterPopoverNavigateToCurrency: () => {
            dispatch(thunkDealList.filterPopoverNavigateToCurrency())
        },
        filterPopoverNavigateToDateFrom: () => {
            dispatch(thunkDealList.filterPopoverNavigateToDateFrom())
        },
        filterPopoverNavigateToDateTo: () => {
            dispatch(thunkDealList.filterPopoverNavigateToDateTo())
        },
        filterPopoverNavigateBack: () => {
            dispatch(thunkDealList.filterPopoverNavigateBack())
        },
        navigateToDealEditor: (deal: Models.Deal, mode: Enums.DealEditorMode, agentList: Models.AgentList | null) => {
            dispatch(thunkDealEditor.navigateToDealEditor(deal,mode, agentList))
        },
        performDealOpen: (dealId: string, dealMode: Enums.DealMode, isEditDealEnable: boolean) => {
            dispatch(thunkAppCRM.performDealOpen(dealId, dealMode, isEditDealEnable))
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDealList)
