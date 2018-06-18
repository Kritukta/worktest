/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkAppCRM from '../thunk/ThunkAppCRM'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkCustomerEditor from '../thunk/ThunkCustomerEditor'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductPaymentAccount from '../thunk/ThunkProductPaymentAccount'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'
import * as thunkGSZ from '../thunk/ThunkGSZ'
import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkOccasion from '../thunk/ThunkOccasion'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import * as ModelsAppProductList from "../models/ModelsProductList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"

import ViewAppCRM from '../components/ViewAppCRM'
import * as ModelState from "../models/Models"


/*
 * Container "AppCRM". CRM mobile application. Current user managed customer list and customer search screens.
 */
class ContainerAppCRM extends React.Component<IAppCRMProps, any> {

    constructor(props: IAppCRMProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


        this.props.performApplicationInit()


    }

    render() {
        return (
            <ViewAppCRM testID={'test-id-container-AppCRM'}

                        performApplicationInit={this.props.performApplicationInit}
                        performCustomerListRefresh={this.props.performCustomerListRefresh}
                        performInputFilterOrganizationStructure={this.props.performInputFilterOrganizationStructure}
                        performInputFilterMemberRole={this.props.performInputFilterMemberRole}
                        performCustomerManagedListRefresh={this.props.performCustomerManagedListRefresh}
                        performCustomerManagedListAppend={this.props.performCustomerManagedListAppend}
                        append_callGetCustomerManagedList={this.props.append_callGetCustomerManagedList}
                        performSearchModeEnable={this.props.performSearchModeEnable}
                        performSearchModeDisable={this.props.performSearchModeDisable}
                        performInputSearch={this.props.performInputSearch}
                        performSearchReset={this.props.performSearchReset}
                        performSearch={this.props.performSearch}
                        performCustomerSearchListAppend={this.props.performCustomerSearchListAppend}
                        performCustomerOpenExecute={this.props.performCustomerOpenExecute}
                        performGszOpen={this.props.performGszOpen}
                        performDealOpen={this.props.performDealOpen}
                        navigateBack={this.props.navigateBack}
                        performContainerReset={this.props.performContainerReset}
                        performChangeDisplayErrorModalAppCRM={this.props.performChangeDisplayErrorModalAppCRM}
                        navigateToProductForecastEventInfoScreen={this.props.navigateToProductForecastEventInfoScreen}

                        currentUser={this.props.currentUser}
                        classifierDictionary={this.props.classifierDictionary}
                        currentPage={this.props.currentPage}
                        customerManagedList={this.props.customerManagedList}
                        inputFilterOrganizationStructure={this.props.inputFilterOrganizationStructure}
                        inputFilterMemberRole={this.props.inputFilterMemberRole}
                        disabledFilterOrganizationStructureList={this.props.disabledFilterOrganizationStructureList}
                        disabledFilterMemberRoleList={this.props.disabledFilterMemberRoleList}
                        isSearchMode={this.props.isSearchMode}
                        inputSearch={this.props.inputSearch}
                        customerSearchType={this.props.customerSearchType}
                        customerSearchError={this.props.customerSearchError}
                        isSearchError={this.props.isSearchError}
                        currentSearchPage={this.props.currentSearchPage}
                        customerSearchList={this.props.customerSearchList}
                        refresh={this.props.refresh}
                        refreshInProgress={this.props.refreshInProgress}
                        refreshError={this.props.refreshError}
                        append={this.props.append}
                        appendInProgress={this.props.appendInProgress}
                        appendError={this.props.appendError}
                        customerManagedListPage={this.props.customerManagedListPage}
                        customerManagedListPageFetching={this.props.customerManagedListPageFetching}
                        customerManagedListPageError={this.props.customerManagedListPageError}
                        customerManagedListPageCachedDate={this.props.customerManagedListPageCachedDate}
                        search={this.props.search}
                        searchInProgress={this.props.searchInProgress}
                        searchError={this.props.searchError}
                        searchAppend={this.props.searchAppend}
                        searchAppendInProgress={this.props.searchAppendInProgress}
                        searchAppendError={this.props.searchAppendError}
                        performFlush={this.props.performFlush}
                        customerManagedListCachedDate={this.props.customerManagedListCachedDate}
                        isRefreshBarVisible={this.props.isRefreshBarVisible}
                        performRefreshBarHide={this.props.performRefreshBarHide}
                        currentCustomer={this.props.currentCustomer}
                        currentCustomerManaged={this.props.currentCustomerManaged}
                        performCustomerFlush={this.props.performCustomerFlush}
                        refreshCustomerInProgress={this.props.refreshCustomerInProgress}
                        isVisibleModalAppCRMError={this.props.isVisibleModalAppCRMError}
                        navigationInProgress={this.props.navigationInProgress}
                        performCustomerListAppend={this.props.performCustomerListAppend}
                        currentDeal={this.props.currentDeal}
                        performPrognosticEventEdit={this.props.performPrognosticEventEdit}
                        performCustomerOpenOnce={this.props.performCustomerOpenOnce}
                        navigationErrorMessage={this.props.navigationErrorMessage}
                        navigateStartData={this.props.navigateStartData}
                        isNavigation={this.props.isNavigation}
                        performNavigateBack={this.props.performNavigateBack}
                        performNavigationReload={this.props.performNavigationReload}
            >
            </ViewAppCRM>
        )
    }
}

export interface IStateProps {

    currentUser: ModelsApp.Employee,
    classifierDictionary: ModelsApp.ClassifierDictionary,
    currentPage: number,
    customerManagedList: Models.CustomerManagedList,
    inputFilterOrganizationStructure: Enums.FilterOrganizationStructure,
    inputFilterMemberRole: Enums.FilterMemberRole,
    disabledFilterOrganizationStructureList: Models.FilterOrganizationStructureList,
    disabledFilterMemberRoleList: Models.FilterMemberRoleList,
    isSearchMode: boolean,
    inputSearch: string,
    customerSearchType: Enums.CustomerSearchType,
    customerSearchError: string,
    isSearchError: boolean,
    currentSearchPage: number,
    customerSearchList: Models.CustomerList,
    refresh: boolean,
    refreshInProgress: boolean,
    refreshError: Error | null,
    append: boolean,
    appendInProgress: boolean,
    appendError: Error | null,
    customerManagedListPage: Models.CustomerManagedListPage,
    customerManagedListPageFetching: boolean,
    customerManagedListPageError: Error | null,
    customerManagedListPageCachedDate: Date | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    searchAppend: boolean,
    searchAppendInProgress: boolean,
    searchAppendError: Error | null,
    customerManagedListCachedDate: Date | null,
    isRefreshBarVisible: boolean,
    currentCustomer: Models.Customer,
    currentCustomerManaged: Models.CustomerManaged,
    refreshCustomerInProgress: boolean,
    isVisibleModalAppCRMError: boolean,
    navigationInProgress: boolean,
    currentDeal: Models.ForecastDeal,
    navigationErrorMessage: string | null,
    navigateStartData: ModelsApp.NavigateToEntity,
    isNavigation: boolean,
}

export interface IDispatchProps {

    performApplicationInit: ModelsAppCRM.PERFORM_APPLICATION_INIT,
    performCustomerListRefresh: ModelsAppCRM.PERFORM_CUSTOMER_LIST_REFRESH,
    performInputFilterOrganizationStructure: ModelsAppCRM.PERFORM_INPUT_FILTER_ORGANIZATION_STRUCTURE,
    performInputFilterMemberRole: ModelsAppCRM.PERFORM_INPUT_FILTER_MEMBER_ROLE,
    performCustomerManagedListRefresh: ModelsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_REFRESH,
    performCustomerManagedListAppend: ModelsAppCRM.PERFORM_CUSTOMER_MANAGED_LIST_APPEND,
    append_callGetCustomerManagedList: ModelsAppCRM.APPEND_CALL_GET_CUSTOMER_MANAGED_LIST,
    performSearchModeEnable: ModelsAppCRM.PERFORM_SEARCH_MODE_ENABLE,
    performSearchModeDisable: ModelsAppCRM.PERFORM_SEARCH_MODE_DISABLE,
    performInputSearch: ModelsAppCRM.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsAppCRM.PERFORM_SEARCH_RESET,
    performSearch: ModelsAppCRM.PERFORM_SEARCH,
    performCustomerSearchListAppend: ModelsAppCRM.PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    performCustomerOpenExecute: ModelsAppCRM.PERFORM_CUSTOMER_OPEN_EXECUTE,
    performGszOpen: ModelsAppCRM.PERFORM_GSZ_OPEN,
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN,
    navigateBack: ModelsAppCRM.NAVIGATE_BACK,
    performContainerReset: ModelsAppCRM.PERFORM_CONTAINER_RESET,
    performFlush: ModelsAppCRM.PERFORM_FLUSH,
    performRefreshBarHide: ModelsAppCRM.PERFORM_REFRESH_BAR_HIDE,
    performCustomerFlush:  ModelsAppCRM.PERFORM_FLUSH
    performChangeDisplayErrorModalAppCRM:  ModelsAppCRM.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_APP_CRM,
    performCustomerListAppend: ModelsAppCRM.PERFORM_CUSTOMER_LIST_APPEND,
    navigateToProductForecastEventInfoScreen: ModelsAppProductList.NAVIGATE_TO_PRODUCT_LIST_FORECAST_PRODUCT_INFO_SCREEN,
    performPrognosticEventEdit: ModelsProductCredit.PERFORM_PROGNOSTIC_EVENT_CREATE
    performCustomerOpenOnce: ModelsAppCRM.PERFORM_CUSTOMER_OPEN_ONCE,
    performNavigateBack: ModelsAppCRM.PERFORM_NAVIGATE_BACK,
    performNavigationReload: ModelsAppCRM.PERFORM_NAVIGATION_RELOAD,

}

export type IAppCRMProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
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
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        performApplicationInit: () => {
            dispatch(thunkAppCRM.performApplicationInit())
        },
        performCustomerListRefresh: () => {
            dispatch(thunkAppCRM.performCustomerListRefresh())
        },
        performInputFilterOrganizationStructure: (value: Enums.FilterOrganizationStructure) => {
            dispatch(thunkAppCRM.performInputFilterOrganizationStructure(value))
        },
        performInputFilterMemberRole: (value: Enums.FilterMemberRole) => {
            dispatch(thunkAppCRM.performInputFilterMemberRole(value))
        },
        performCustomerManagedListRefresh: () => {
            dispatch(thunkAppCRM.performCustomerManagedListRefresh())
        },
        performCustomerManagedListAppend: () => {
            dispatch(thunkAppCRM.performCustomerManagedListAppend())
        },
        append_callGetCustomerManagedList: () => {
            dispatch(thunkAppCRM.append_callGetCustomerManagedList())
        },
        performSearchModeEnable: () => {
            dispatch(thunkAppCRM.performSearchModeEnable())
        },
        performSearchModeDisable: () => {
            dispatch(thunkAppCRM.performSearchModeDisable())
        },
        performInputSearch: (value: string) => {
            dispatch(thunkAppCRM.performInputSearch(value))
        },
        performSearchReset: () => {
            dispatch(thunkAppCRM.performSearchReset())
        },
        performChangeDisplayErrorModalAppCRM: () => {
            dispatch(thunkAppCRM.performChangeDisplayErrorModalAppCRM())
        },
        performFlush: () => {
            dispatch(thunkAppCRM.performFlush())
        },
        performRefreshBarHide: () => {
            dispatch(thunkAppCRM.performRefreshBarHide())
        },
        performSearch: () => {
            dispatch(thunkAppCRM.performSearch())
        },
        performCustomerSearchListAppend: () => {
            dispatch(thunkAppCRM.performCustomerSearchListAppend())
        },
        performCustomerOpenExecute: (customer: Models.Customer) => {
            dispatch(thunkAppCRM.performCustomerOpenExecute(customer, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
        },

        performCustomerOpenOnce: (customer: Models.Customer) => {
            dispatch(thunkAppCRM.performCustomerOpenOnce(customer, Enums.CustomerMode.CommonBack, Enums.ShowCustomer.Show))
        },


        performGszOpen: () => {
            dispatch(thunkAppCRM.performGszOpen())
        },
        performDealOpen: (dealId: string) => {
            dispatch(thunkAppCRM.performDealOpen(dealId, Enums.DealMode.CommonBack, false))
        },
        navigateBack: () => {
            dispatch(thunkAppCRM.navigateBack())
        },
        performContainerReset: () => {
            dispatch(thunkAppCRM.performContainerReset())
        },
        performCustomerFlush: () => {
            dispatch(thunkCustomer.performFlush())
        },
        performCustomerListAppend: () => {
            dispatch(thunkAppCRM.performCustomerListAppend())
        },
        navigateToProductForecastEventInfoScreen: (event: Models.ForecastEvent) => {
            dispatch(thunkProductList.navigateToProductForecastEventInfoScreen(event))
        },
        performPrognosticEventEdit: () => {
            dispatch(thunkProductCredit.performPrognosticEventCreate())
        },
        performNavigateBack: () => {
            dispatch(thunkAppCRM.performNavigateBackFromPush())
        },
        performNavigationReload: () => {
            dispatch(thunkAppCRM.performNavigationReloadPush())
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerAppCRM)
