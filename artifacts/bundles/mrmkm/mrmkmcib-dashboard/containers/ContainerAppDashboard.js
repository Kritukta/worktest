/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkAppDashboard from '../thunk/ThunkAppDashboard';
import ViewAppDashboard from '../components/ViewAppDashboard';
/*
 * Container "AppDashboard". Dashboard mobile application.
 */
class ContainerAppDashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        console.log('componentDidMount container App Dashboard');
        this.props.performApplicationInit();
    }
    render() {
        console.log('render container App Dashboard');
        return (React.createElement(ViewAppDashboard, { testID: 'test-id-container-AppDashboard', inputSharePopoverSearchRefresh: this.props.inputSharePopoverSearchRefresh, inputCurrentRecipientListRefresh: this.props.inputCurrentRecipientListRefresh, inputCurrentFileFormatRefresh: this.props.inputCurrentFileFormatRefresh, inputCurrentRepresentationRefresh: this.props.inputCurrentRepresentationRefresh, navigateToPopoverShareBack: this.props.navigateToPopoverShareBack, navigateToPopoverShareRecipientsScreen: this.props.navigateToPopoverShareRecipientsScreen, navigateToPopoverShareRepresentationScreen: this.props.navigateToPopoverShareRepresentationScreen, navigateToPopoverShareFormatScreen: this.props.navigateToPopoverShareFormatScreen, performPopoverShareShow: this.props.performPopoverShareShow, performPopoverShareHide: this.props.performPopoverShareHide, performApplicationInit: this.props.performApplicationInit, handleQlikError: this.props.handleQlikError, performInputSearchCustomerManaged: this.props.performInputSearchCustomerManaged, performSearchModeEnable: this.props.performSearchModeEnable, performSearchModeDisable: this.props.performSearchModeDisable, performInputSearch: this.props.performInputSearch, performSearchReset: this.props.performSearchReset, performSearch: this.props.performSearch, performCustomerSearchListAppend: this.props.performCustomerSearchListAppend, performQlikEvent: this.props.performQlikEvent, performCustomerSelect: this.props.performCustomerSelect, performSearchHistoryListClear: this.props.performSearchHistoryListClear, persistSearchHistoryList: this.props.persistSearchHistoryList, recoverSearchHistoryList: this.props.recoverSearchHistoryList, performContainerReset: this.props.performContainerReset, performSend: this.props.performSend, currentCustomerManaged: this.props.currentCustomerManaged, currentRecipientList: this.props.currentRecipientList, currentFileFormat: this.props.currentFileFormat, currentRepresentation: this.props.currentRepresentation, isVisiblePopoverShare: this.props.isVisiblePopoverShare, qlikError: this.props.qlikError, currentUser: this.props.currentUser, currentQlikUrl: this.props.currentQlikUrl, qlikCookie: this.props.qlikCookie, isPopoverVisibleSearchScreen: this.props.isPopoverVisibleSearchScreen, currentQlikMessage: this.props.currentQlikMessage, isSearchMode: this.props.isSearchMode, inputSearch: this.props.inputSearch, customerSearchType: this.props.customerSearchType, customerSearchError: this.props.customerSearchError, isSearchError: this.props.isSearchError, currentSearchPage: this.props.currentSearchPage, customerSearchList: this.props.customerSearchList, isSearchCustomerManaged: this.props.isSearchCustomerManaged, qlikAvailabilityCheck: this.props.qlikAvailabilityCheck, qlikAvailabilityCheckFetching: this.props.qlikAvailabilityCheckFetching, qlikAvailabilityCheckError: this.props.qlikAvailabilityCheckError, qlikAvailabilityCheckCachedDate: this.props.qlikAvailabilityCheckCachedDate, search: this.props.search, searchInProgress: this.props.searchInProgress, searchError: this.props.searchError, searchAppend: this.props.searchAppend, searchAppendInProgress: this.props.searchAppendInProgress, searchAppendError: this.props.searchAppendError, searchHistoryList: this.props.searchHistoryList, searchHistoryListInProgress: this.props.searchHistoryListInProgress, searchHistoryListError: this.props.searchHistoryListError, personHistoryList: this.props.personHistoryList, foundPersonList: this.props.foundPersonList, foundPersonListInProgress: this.props.foundPersonListInProgress, foundPersonListError: this.props.foundPersonListError, inputSharePopoverSearch: this.props.inputSharePopoverSearch, foundPersonListClear: this.props.foundPersonListClear, sendFetching: this.props.sendFetching, sendError: this.props.sendError, sendSuccess: this.props.sendSuccess, supParameters: this.props.supParameters, navigateBack: this.props.navigateBack, navigateBackData: this.props.navigateBackData }));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        inputSharePopoverSearchRefresh: (value) => {
            dispatch(thunkAppDashboard.inputSharePopoverSearchRefresh(value));
        },
        inputCurrentRecipientListRefresh: (value, operation) => {
            dispatch(thunkAppDashboard.inputCurrentRecipientListRefresh(value, operation));
        },
        inputCurrentFileFormatRefresh: (value) => {
            dispatch(thunkAppDashboard.inputCurrentFileFormatRefresh(value));
        },
        inputCurrentRepresentationRefresh: (value) => {
            dispatch(thunkAppDashboard.inputCurrentRepresentationRefresh(value));
        },
        foundPersonListClear: () => {
            dispatch(thunkAppDashboard.foundPersonListClear());
        },
        navigateToPopoverShareBack: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareBack());
        },
        navigateToPopoverShareRecipientsScreen: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareRecipientsScreen());
        },
        navigateToPopoverShareRepresentationScreen: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareRepresentationScreen());
        },
        navigateToPopoverShareFormatScreen: () => {
            dispatch(thunkAppDashboard.navigateToPopoverShareFormatScreen());
        },
        performPopoverShareShow: () => {
            dispatch(thunkAppDashboard.performPopoverShareShow());
        },
        performPopoverShareHide: () => {
            dispatch(thunkAppDashboard.performPopoverShareHide());
        },
        performApplicationInit: () => {
            dispatch(thunkAppDashboard.performApplicationInit());
        },
        handleQlikError: (error) => {
            dispatch(thunkAppDashboard.handleQlikError(error));
        },
        performInputSearchCustomerManaged: (value) => {
            dispatch(thunkAppDashboard.performInputSearchCustomerManaged(value));
        },
        performSearchModeEnable: () => {
            dispatch(thunkAppDashboard.performSearchModeEnable());
        },
        performSearchModeDisable: () => {
            dispatch(thunkAppDashboard.performSearchModeDisable());
        },
        performInputSearch: (value) => {
            dispatch(thunkAppDashboard.performInputSearch(value));
        },
        performSearchReset: () => {
            dispatch(thunkAppDashboard.performSearchReset());
        },
        performSearch: () => {
            dispatch(thunkAppDashboard.performSearch());
        },
        performCustomerSearchListAppend: () => {
            dispatch(thunkAppDashboard.performCustomerSearchListAppend());
        },
        performQlikEvent: (message) => {
            dispatch(thunkAppDashboard.performQlikEvent(message));
        },
        performCustomerSelect: (customer) => {
            dispatch(thunkAppDashboard.performCustomerSelect(customer));
        },
        performSearchHistoryListClear: () => {
            dispatch(thunkAppDashboard.performSearchHistoryListClear());
        },
        persistSearchHistoryList: () => {
            dispatch(thunkAppDashboard.persistSearchHistoryList());
        },
        recoverSearchHistoryList: () => {
            dispatch(thunkAppDashboard.recoverSearchHistoryList());
        },
        performContainerReset: () => {
            dispatch(thunkAppDashboard.performContainerReset());
        },
        performSend: () => {
            dispatch(thunkAppDashboard.performSend());
        },
        navigateBack: () => {
            dispatch(thunkAppDashboard.navigateBack());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerAppDashboard);
//# sourceMappingURL=ContainerAppDashboard.js.map