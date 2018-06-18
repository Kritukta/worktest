/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkCustomerDashboard from '../thunk/ThunkCustomerDashboard';
import ViewCustomerDashboard from '../components/ViewCustomerDashboard';
/*
 * Container "CustomerDashboard". Customer dashboard container.
 */
class ContainerCustomerDashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performApplicationInit();
    }
    render() {
        return (React.createElement(ViewCustomerDashboard, { testID: 'test-id-container-CustomerDashboard', inputSharePopoverSearchRefresh: this.props.inputSharePopoverSearchRefresh, inputCurrentRecipientListRefresh: this.props.inputCurrentRecipientListRefresh, inputCurrentFileFormatRefresh: this.props.inputCurrentFileFormatRefresh, inputCurrentRepresentationRefresh: this.props.inputCurrentRepresentationRefresh, navigateToPopoverShareBack: this.props.navigateToPopoverShareBack, navigateToPopoverShareRecipientsScreen: this.props.navigateToPopoverShareRecipientsScreen, navigateToPopoverShareRepresentationScreen: this.props.navigateToPopoverShareRepresentationScreen, navigateToPopoverShareFormatScreen: this.props.navigateToPopoverShareFormatScreen, performPopoverShareShow: this.props.performPopoverShareShow, performPopoverShareHide: this.props.performPopoverShareHide, performApplicationInit: this.props.performApplicationInit, handleQlikError: this.props.handleQlikError, callQlikAvailabilityCheck: this.props.callQlikAvailabilityCheck, performQlikEvent: this.props.performQlikEvent, performContainerReset: this.props.performContainerReset, performSend: this.props.performSend, currentRecipientList: this.props.currentRecipientList, currentFileFormat: this.props.currentFileFormat, currentRepresentation: this.props.currentRepresentation, isVisiblePopoverShare: this.props.isVisiblePopoverShare, currentCustomerManaged: this.props.currentCustomerManaged, currentUser: this.props.currentUser, currentQlikUrl: this.props.currentQlikUrl, qlikCookie: this.props.qlikCookie, currentQlikMessage: this.props.currentQlikMessage, isPopoverVisibleSearchScreen: this.props.isPopoverVisibleSearchScreen, qlikError: this.props.qlikError, qlikAvailabilityCheck: this.props.qlikAvailabilityCheck, qlikAvailabilityCheckFetching: this.props.qlikAvailabilityCheckFetching, qlikAvailabilityCheckError: this.props.qlikAvailabilityCheckError, qlikAvailabilityCheckCachedDate: this.props.qlikAvailabilityCheckCachedDate, personHistoryList: this.props.personHistoryList, foundPersonList: this.props.foundPersonList, foundPersonListInProgress: this.props.foundPersonListInProgress, foundPersonListError: this.props.foundPersonListError, inputSharePopoverSearch: this.props.inputSharePopoverSearch, foundPersonListClear: this.props.foundPersonListClear, sendFetching: this.props.sendFetching, sendError: this.props.sendError, sendSuccess: this.props.sendSuccess, isDashboardExpandedMode: this.props.isDashboardExpandedMode, isTrimmedTop: this.props.isTrimmedTop, supParameters: this.props.supParameters, navigateBack: this.props.navigateBack, navigateBackData: this.props.navigateBackData }));
    }
}
function mapStateToProps(state) {
    return {
        currentRecipientList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRecipientList,
        currentFileFormat: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentFileFormat,
        currentRepresentation: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRepresentation,
        isVisiblePopoverShare: state.user.mrmkmcibDashboard.reducerCustomerDashboard.isVisiblePopoverShare,
        currentCustomerManaged: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentCustomerManaged,
        currentUser: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentUser,
        currentQlikUrl: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentQlikUrl,
        qlikCookie: state.user.mrmkmcibDashboard.reducerCustomerDashboard.qlikCookie,
        currentQlikMessage: state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentQlikMessage,
        qlikError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.qlikError,
        qlikAvailabilityCheck: state.user.mrmkmcibDashboard.reducerCustomerDashboard.qlikAvailabilityCheck,
        qlikAvailabilityCheckFetching: state.user.mrmkmcibDashboard.reducerCustomerDashboard.qlikAvailabilityCheckFetching,
        qlikAvailabilityCheckError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.qlikAvailabilityCheckError,
        qlikAvailabilityCheckCachedDate: state.user.mrmkmcibDashboard.reducerCustomerDashboard.qlikAvailabilityCheckCachedDate,
        personHistoryList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.personHistoryList,
        foundPersonList: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonList,
        foundPersonListInProgress: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonListInProgress,
        foundPersonListError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.foundPersonListError,
        inputSharePopoverSearch: state.user.mrmkmcibDashboard.reducerCustomerDashboard.inputSharePopoverSearch,
        sendFetching: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendFetching,
        sendError: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendError,
        sendSuccess: state.user.mrmkmcibDashboard.reducerCustomerDashboard.sendSuccess,
        isDashboardExpandedMode: state.user.mrmkmcibCRM.reducerCustomer.isDashboardExpandedMode,
        isPopoverVisibleSearchScreen: state.user.mrmkmcibDashboard.reducerCustomerDashboard.isPopoverVisibleSearchScreen,
        isTrimmedTop: state.user.mrmkmcibDashboard.reducerCustomerDashboard.isTrimmedTop,
        supParameters: state.user.mrmkmcibDashboard.reducerCustomerDashboard.supParameters,
        navigateBackData: state.user.mrmkmcibApp.reducerAuthorization.navigateBackData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        inputSharePopoverSearchRefresh: (value) => {
            dispatch(thunkCustomerDashboard.inputSharePopoverSearchRefresh(value));
        },
        inputCurrentRecipientListRefresh: (value, operation) => {
            dispatch(thunkCustomerDashboard.inputCurrentRecipientListRefresh(value, operation));
        },
        inputCurrentFileFormatRefresh: (value) => {
            dispatch(thunkCustomerDashboard.inputCurrentFileFormatRefresh(value));
        },
        inputCurrentRepresentationRefresh: (value) => {
            dispatch(thunkCustomerDashboard.inputCurrentRepresentationRefresh(value));
        },
        foundPersonListClear: () => {
            dispatch(thunkCustomerDashboard.foundPersonListClear());
        },
        navigateToPopoverShareBack: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareBack());
        },
        navigateToPopoverShareRecipientsScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareRecipientsScreen());
        },
        navigateToPopoverShareRepresentationScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareRepresentationScreen());
        },
        navigateToPopoverShareFormatScreen: () => {
            dispatch(thunkCustomerDashboard.navigateToPopoverShareFormatScreen());
        },
        performPopoverShareShow: () => {
            dispatch(thunkCustomerDashboard.performPopoverShareShow());
        },
        performPopoverShareHide: () => {
            dispatch(thunkCustomerDashboard.performPopoverShareHide());
        },
        performApplicationInit: () => {
            dispatch(thunkCustomerDashboard.performApplicationInit());
        },
        handleQlikError: (error) => {
            dispatch(thunkCustomerDashboard.handleQlikError(error));
        },
        callQlikAvailabilityCheck: () => {
            dispatch(thunkCustomerDashboard.callQlikAvailabilityCheck());
        },
        performQlikEvent: (message) => {
            dispatch(thunkCustomerDashboard.performQlikEvent(message));
        },
        performContainerReset: () => {
            dispatch(thunkCustomerDashboard.performContainerReset());
        },
        performSend: () => {
            dispatch(thunkCustomerDashboard.performSend());
        },
        navigateBack: () => {
            dispatch(thunkCustomerDashboard.navigateBack());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCustomerDashboard);
//# sourceMappingURL=ContainerCustomerDashboard.js.map