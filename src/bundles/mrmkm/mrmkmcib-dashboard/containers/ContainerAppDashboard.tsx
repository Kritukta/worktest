/*
 * Created by Burnaev M.U.
 */

import React from 'react'
import {connect} from 'react-redux'


import * as thunkAppDashboard from '../thunk/ThunkAppDashboard'
import * as ModelState from "../models/Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-dashboard"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import * as ModelsAppDashboard from "../models/ModelsAppDashboard"
import Error from "../models/Error"

import ViewAppDashboard from '../components/ViewAppDashboard'


/*
 * Container "AppDashboard". Dashboard mobile application.
 */

class ContainerAppDashboard extends React.Component<IAppDashboardProps, any> {

    constructor(props: IAppDashboardProps, context: any) {
        super(props, context);
       
    }

    componentDidMount() {
        console.log('componentDidMount container App Dashboard');
        this.props.performApplicationInit()
    }

    render() {
        console.log('render container App Dashboard');
        return (
            <ViewAppDashboard testID={'test-id-container-AppDashboard'} 
                              inputSharePopoverSearchRefresh={this.props.inputSharePopoverSearchRefresh}
                              inputCurrentRecipientListRefresh={this.props.inputCurrentRecipientListRefresh}
                              inputCurrentFileFormatRefresh={this.props.inputCurrentFileFormatRefresh}
                              inputCurrentRepresentationRefresh={this.props.inputCurrentRepresentationRefresh}
                              navigateToPopoverShareBack={this.props.navigateToPopoverShareBack}
                              navigateToPopoverShareRecipientsScreen={this.props.navigateToPopoverShareRecipientsScreen}
                              navigateToPopoverShareRepresentationScreen={this.props.navigateToPopoverShareRepresentationScreen}
                              navigateToPopoverShareFormatScreen={this.props.navigateToPopoverShareFormatScreen}
                              performPopoverShareShow={this.props.performPopoverShareShow}
                              performPopoverShareHide={this.props.performPopoverShareHide}
                              performApplicationInit={this.props.performApplicationInit}
                              handleQlikError={this.props.handleQlikError}
                              performInputSearchCustomerManaged={this.props.performInputSearchCustomerManaged}
                              performSearchModeEnable={this.props.performSearchModeEnable}
                              performSearchModeDisable={this.props.performSearchModeDisable}
                              performInputSearch={this.props.performInputSearch}
                              performSearchReset={this.props.performSearchReset}
                              performSearch={this.props.performSearch}
                              performCustomerSearchListAppend={this.props.performCustomerSearchListAppend}
                              performQlikEvent={this.props.performQlikEvent}
                              performCustomerSelect={this.props.performCustomerSelect}
                              performSearchHistoryListClear={this.props.performSearchHistoryListClear}
                              persistSearchHistoryList={this.props.persistSearchHistoryList}
                              recoverSearchHistoryList={this.props.recoverSearchHistoryList}
                              performContainerReset={this.props.performContainerReset}
                              performSend={this.props.performSend}
                              currentCustomerManaged = {this.props.currentCustomerManaged}
                              currentRecipientList={this.props.currentRecipientList}
                              currentFileFormat={this.props.currentFileFormat}
                              currentRepresentation={this.props.currentRepresentation}
                              isVisiblePopoverShare={this.props.isVisiblePopoverShare}
                              qlikError={this.props.qlikError}
                              currentUser={this.props.currentUser}
                              currentQlikUrl={this.props.currentQlikUrl}
                              qlikCookie={this.props.qlikCookie}
                              isPopoverVisibleSearchScreen={this.props.isPopoverVisibleSearchScreen}
                              currentQlikMessage={this.props.currentQlikMessage}
                              isSearchMode={this.props.isSearchMode}
                              inputSearch={this.props.inputSearch}
                              customerSearchType={this.props.customerSearchType}
                              customerSearchError={this.props.customerSearchError}
                              isSearchError={this.props.isSearchError}
                              currentSearchPage={this.props.currentSearchPage}
                              customerSearchList={this.props.customerSearchList}
                              isSearchCustomerManaged={this.props.isSearchCustomerManaged}
                              qlikAvailabilityCheck={this.props.qlikAvailabilityCheck}
                              qlikAvailabilityCheckFetching={this.props.qlikAvailabilityCheckFetching}
                              qlikAvailabilityCheckError={this.props.qlikAvailabilityCheckError}
                              qlikAvailabilityCheckCachedDate={this.props.qlikAvailabilityCheckCachedDate}
                              search={this.props.search}
                              searchInProgress={this.props.searchInProgress}
                              searchError={this.props.searchError}
                              searchAppend={this.props.searchAppend}
                              searchAppendInProgress={this.props.searchAppendInProgress}
                              searchAppendError={this.props.searchAppendError}
                              searchHistoryList={this.props.searchHistoryList}
                              searchHistoryListInProgress={this.props.searchHistoryListInProgress}
                              searchHistoryListError={this.props.searchHistoryListError}
                              personHistoryList={this.props.personHistoryList}
                              foundPersonList={this.props.foundPersonList}
                              foundPersonListInProgress={this.props.foundPersonListInProgress}
                              foundPersonListError={this.props.foundPersonListError}
                              inputSharePopoverSearch={this.props.inputSharePopoverSearch}
                              foundPersonListClear={this.props.foundPersonListClear}
                              sendFetching={this.props.sendFetching}
                              sendError={this.props.sendError}
                              sendSuccess={this.props.sendSuccess}
                              supParameters={this.props.supParameters}
                              navigateBack={this.props.navigateBack}
                              navigateBackData={this.props.navigateBackData}
            >
            </ViewAppDashboard>
        )
    }
}

export interface IStateProps {
    currentRecipientList: ModelsScheduler.PersonList,
    currentFileFormat: Enums.FileFormat,
    currentRepresentation: Enums.Representation,
    currentCustomerManaged:ModelsCrm.CustomerManaged,
    isVisiblePopoverShare: boolean,
    qlikError: Error | null,
   currentUser: ModelsApp.Employee,
    currentQlikMessage: Models.QlikMessage,
    isSearchMode: boolean,
    inputSearch: string,
    customerSearchType: Enums.CustomerSearchType,
    customerSearchError: string,
    isSearchError: boolean,
    currentSearchPage: number,
    customerSearchList: ModelsCrm.CustomerList,
    isSearchCustomerManaged: boolean,
    qlikAvailabilityCheck: boolean,
    qlikAvailabilityCheckFetching: boolean,
    qlikAvailabilityCheckError: Error | null,
    qlikAvailabilityCheckCachedDate: Date | null,
    search: boolean,
    searchInProgress: boolean,
    searchError: Error | null,
    searchAppend: boolean,
    searchAppendInProgress: boolean,
    searchAppendError: Error | null,
    searchHistoryList: Models.SearchHistoryList,
    searchHistoryListInProgress: boolean,
    searchHistoryListError: Error | null,
    personHistoryList: ModelsScheduler.PersonList,
    foundPersonList: ModelsScheduler.PersonList,
    foundPersonListInProgress: boolean,
    foundPersonListError: Error | null,
    inputSharePopoverSearch: string,
    sendFetching: boolean,
    sendError: Error | null,
    sendSuccess: boolean,
    currentQlikUrl: string | null,
    qlikCookie: string | null,
    isPopoverVisibleSearchScreen: boolean,
    supParameters: Models.SupParams,
    navigateBackData: ModelsApp.NavigateToEntity | null,
}

export interface IDispatchProps {
    inputSharePopoverSearchRefresh: ModelsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH,
    inputCurrentRecipientListRefresh: ModelsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH,
    inputCurrentFileFormatRefresh: ModelsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH,
    inputCurrentRepresentationRefresh: ModelsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH,
    foundPersonListClear: ModelsAppDashboard.FOUND_PERSON_LIST_CLEAR,
    navigateToPopoverShareBack: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_BACK,
    navigateToPopoverShareRecipientsScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS,
    navigateToPopoverShareRepresentationScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION,
    navigateToPopoverShareFormatScreen: ModelsAppDashboard.PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT,
    performPopoverShareShow: ModelsAppDashboard.PERFORM_POPOVER_SHARE_SHOW,
    performPopoverShareHide: ModelsAppDashboard.PERFORM_POPOVER_SHARE_HIDE,
    performApplicationInit: ModelsAppDashboard.PERFORM_APPLICATION_INIT,
    handleQlikError: ModelsAppDashboard.HANDLE_QLIK_ERROR,
    performInputSearchCustomerManaged: ModelsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED,
    performSearchModeEnable: ModelsAppDashboard.PERFORM_SEARCH_MODE_ENABLE,
    performSearchModeDisable: ModelsAppDashboard.PERFORM_SEARCH_MODE_DISABLE,
    performInputSearch: ModelsAppDashboard.PERFORM_INPUT_SEARCH,
    performSearchReset: ModelsAppDashboard.PERFORM_SEARCH_RESET,
    performSearch: ModelsAppDashboard.PERFORM_SEARCH,
    performCustomerSearchListAppend: ModelsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND,
    performQlikEvent: ModelsAppDashboard.PERFORM_QLIK_EVENT,
    performCustomerSelect: ModelsAppDashboard.PERFORM_CUSTOMER_SELECT,
    performSearchHistoryListClear: ModelsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR,
    persistSearchHistoryList: ModelsAppDashboard.PERSIST_SEARCH_HISTORY_LIST,
    recoverSearchHistoryList: ModelsAppDashboard.RECOVER_SEARCH_HISTORY_LIST,
    performContainerReset: ModelsAppDashboard.PERFORM_CONTAINER_RESET,
    performSend: ModelsAppDashboard.PERFORM_SEND,
    navigateBack: ModelsAppDashboard.NAVIGATE_BACK,

}

export type IAppDashboardProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) :IStateProps{
    return {
        currentRecipientList: state.user.mrmkmcibDashboard.reducerAppDashboard.currentRecipientList,
        currentFileFormat: state.user.mrmkmcibDashboard.reducerAppDashboard.currentFileFormat,
        currentRepresentation: state.user.mrmkmcibDashboard.reducerAppDashboard.currentRepresentation,
        currentCustomerManaged: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentCustomerManaged,
        isVisiblePopoverShare: state.user.mrmkmcibDashboard.reducerAppDashboard.isVisiblePopoverShare,
        qlikError: state.user.mrmkmcibDashboard.reducerAppDashboard.qlikError,
        currentUser: state.user.mrmkmcibDashboard.reducerAppDashboard.currentUser,
        currentQlikMessage: state.user.mrmkmcibDashboard.reducerAppDashboard.currentQlikMessage,
        isSearchMode: state.user.mrmkmcibDashboard.reducerAppDashboard.isSearchMode,
        inputSearch: state.user.mrmkmcibDashboard.reducerAppDashboard.inputSearch,
        customerSearchType: state.user.mrmkmcibDashboard.reducerAppDashboard.customerSearchType,
        customerSearchError: state.user.mrmkmcibDashboard.reducerAppDashboard.customerSearchError,
        isSearchError: state.user.mrmkmcibDashboard.reducerAppDashboard.isSearchError,
        currentSearchPage: state.user.mrmkmcibDashboard.reducerAppDashboard.currentSearchPage,
        customerSearchList: state.user.mrmkmcibDashboard.reducerAppDashboard.customerSearchList,
        currentQlikUrl: state.user.mrmkmcibDashboard.reducerAppDashboard.currentQlikUrl,
        qlikCookie: state.user.mrmkmcibDashboard.reducerAppDashboard.qlikCookie,
        isSearchCustomerManaged: state.user.mrmkmcibDashboard.reducerAppDashboard.isSearchCustomerManaged,
        qlikAvailabilityCheck: state.user.mrmkmcibDashboard.reducerAppDashboard.qlikAvailabilityCheck,
        qlikAvailabilityCheckFetching: state.user.mrmkmcibDashboard.reducerAppDashboard.qlikAvailabilityCheckFetching,
        qlikAvailabilityCheckError: state.user.mrmkmcibDashboard.reducerAppDashboard.qlikAvailabilityCheckError,
        qlikAvailabilityCheckCachedDate: state.user.mrmkmcibDashboard.reducerAppDashboard.qlikAvailabilityCheckCachedDate,
        search: state.user.mrmkmcibDashboard.reducerAppDashboard.search,
        searchInProgress: state.user.mrmkmcibDashboard.reducerAppDashboard.searchInProgress,
        searchError: state.user.mrmkmcibDashboard.reducerAppDashboard.searchError,
        searchAppend: state.user.mrmkmcibDashboard.reducerAppDashboard.searchAppend,
        searchAppendInProgress: state.user.mrmkmcibDashboard.reducerAppDashboard.searchAppendInProgress,
        searchAppendError: state.user.mrmkmcibDashboard.reducerAppDashboard.searchAppendError,
        searchHistoryList: state.user.mrmkmcibDashboard.reducerAppDashboard.searchHistoryList,
        searchHistoryListInProgress: state.user.mrmkmcibDashboard.reducerAppDashboard.searchHistoryListInProgress,
        searchHistoryListError: state.user.mrmkmcibDashboard.reducerAppDashboard.searchHistoryListError,
        personHistoryList: state.user.mrmkmcibDashboard.reducerAppDashboard.personHistoryList,
        foundPersonList: state.user.mrmkmcibDashboard.reducerAppDashboard.foundPersonList,
        foundPersonListInProgress: state.user.mrmkmcibDashboard.reducerAppDashboard.foundPersonListInProgress,
        foundPersonListError: state.user.mrmkmcibDashboard.reducerAppDashboard.foundPersonListError,
        inputSharePopoverSearch: state.user.mrmkmcibDashboard.reducerAppDashboard.inputSharePopoverSearch,
        sendFetching: state.user.mrmkmcibDashboard.reducerAppDashboard.sendFetching,
        sendError: state.user.mrmkmcibDashboard.reducerAppDashboard.sendError,
        sendSuccess: state.user.mrmkmcibDashboard.reducerAppDashboard.sendSuccess,
        isPopoverVisibleSearchScreen: state.user.mrmkmcibDashboard.reducerAppDashboard.isPopoverVisibleSearchScreen,
        supParameters: state.user.mrmkmcibDashboard.reducerAppDashboard.supParameters,
        navigateBackData: state.user.mrmkmcibApp.reducerAuthorization.navigateBackData,
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        inputSharePopoverSearchRefresh: (value: string) => {
            dispatch(thunkAppDashboard.inputSharePopoverSearchRefresh(value))
        },
        inputCurrentRecipientListRefresh: (value: ModelsScheduler.Person, operation: Enums.Operation) => {
            dispatch(thunkAppDashboard.inputCurrentRecipientListRefresh(value, operation))
        },
        inputCurrentFileFormatRefresh: (value: Enums.FileFormat) => {
            dispatch(thunkAppDashboard.inputCurrentFileFormatRefresh(value))
        },
        inputCurrentRepresentationRefresh: (value: Enums.Representation) => {
            dispatch(thunkAppDashboard.inputCurrentRepresentationRefresh(value))
        },
        foundPersonListClear: () => {
            dispatch(thunkAppDashboard.foundPersonListClear())
        },
        navigateToPopoverShareBack: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareBack())
        },
        navigateToPopoverShareRecipientsScreen: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareRecipientsScreen())
        },
        navigateToPopoverShareRepresentationScreen: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareRepresentationScreen())
        },
        navigateToPopoverShareFormatScreen: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareFormatScreen())
        },
        performPopoverShareShow: () => {
            dispatch(thunkAppDashboard.performPopoverShareShow())
        },
        performPopoverShareHide: () => {
            dispatch(thunkAppDashboard.performPopoverShareHide())
        },
        performApplicationInit: () => {
            dispatch(thunkAppDashboard.performApplicationInit())
        },
        handleQlikError: (error: Error | null) => {
            dispatch(thunkAppDashboard.handleQlikError(error))
        },
      
        performInputSearchCustomerManaged: (value: boolean) => {
            dispatch(thunkAppDashboard.performInputSearchCustomerManaged(value))
        },
        performSearchModeEnable: () => {
            dispatch(thunkAppDashboard.performSearchModeEnable())
        },
        performSearchModeDisable: () => {
            dispatch(thunkAppDashboard.performSearchModeDisable())
        },
        performInputSearch: (value: string) => {
            dispatch(thunkAppDashboard.performInputSearch(value))
        },
        performSearchReset: () => {
            dispatch(thunkAppDashboard.performSearchReset())
        },
        performSearch: () => {
            dispatch(thunkAppDashboard.performSearch())
        },
        performCustomerSearchListAppend: () => {
            dispatch(thunkAppDashboard.performCustomerSearchListAppend())
        },
        performQlikEvent: (message: Models.QlikMessage) => {
            dispatch(thunkAppDashboard.performQlikEvent(message))
        },
        performCustomerSelect: (customer: ModelsCrm.Customer,) => {
            dispatch(thunkAppDashboard.performCustomerSelect(customer,))
        },
        performSearchHistoryListClear: () => {
            dispatch(thunkAppDashboard.performSearchHistoryListClear())
        },
        persistSearchHistoryList: () => {
            dispatch(thunkAppDashboard.persistSearchHistoryList())
        },
        recoverSearchHistoryList: () => {
            dispatch(thunkAppDashboard.recoverSearchHistoryList())
        },
        performContainerReset: () => {
            dispatch(thunkAppDashboard.performContainerReset())
        },
        performSend: () => {
            dispatch(thunkAppDashboard.performSend())
        },
        navigateBack: () => {
            dispatch(thunkAppDashboard.navigateBack())
        },

    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerAppDashboard)
