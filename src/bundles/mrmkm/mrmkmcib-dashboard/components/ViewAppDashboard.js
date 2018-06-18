/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewAppDashboardStyles';
import { View, } from 'ufs-mobile-platform';
import { LoaderWithText } from "mrmkmcib-app";
import CustomerSearchList from "./AppDashboard/CustomerSearchList";
import ShareDataView from "./AppDashboard/ShareDataView";
import QlikView from "./shared/QlikView";
import * as util from '../common/Util';
const getSearchPanel = (props) => {
    if (props.isSearchMode)
        return (React.createElement(CustomerSearchList, Object.assign({ testID: 'test-id-c331d384-366c-f1df-fb71-75256c290518' }, props)));
    else {
        return (React.createElement(View, { testID: 'test-id-de335c91-a511-82de-3da0-1aea99473dd9' }));
    }
};
const getShareDataView = (props) => {
    /// let isExtended = (props.currentQlikEventPayload ? JSON.parse(props.currentQlikEventPayload).payload.flag : 0) == 1
    let isExtended = props.currentQlikMessage.payload.flag == 1;
    return (React.createElement(ShareDataView, Object.assign({ testID: 'test-id-c331d384-886c-f1df-fb71-75256c290518', isDashboardExpandedMode: true, fromOutside: false, isRepresentationVisible: isExtended }, props)));
};
const getUri = (props) => {
    let baseUri = util.chooseURL(props);
    if (props.currentQlikUrl != null) {
        return baseUri + props.currentQlikUrl;
    }
    else {
        return baseUri;
    }
};
const ViewAppDashboard = (props) => (React.createElement(View, { testID: 'test-id-9f33e4b8-9144-0f96-18ac-c9868c1f734a', style: Styles.main },
    React.createElement(View, { style: Styles.main },
        getSearchPanel(props),
        getShareDataView(props),
        props.qlikAvailabilityCheckFetching ? React.createElement(LoaderWithText, { testID: 'test-id-callDashboardAuthorizationWithCookieFetching_view-0' }) : React.createElement(QlikView, { testID: 'test-id-customer_dashboard-qlik_view-0', uri: getUri(props), qlikCookie: props.qlikCookie, onInternalEvent: props.performQlikEvent, qlikError: props.qlikError, handleQlikError: props.handleQlikError, navigateBack: props.navigateBack, isNavigation: props.navigateBackData != null }))));
export default ViewAppDashboard;
//# sourceMappingURL=ViewAppDashboard.js.map