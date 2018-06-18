/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import Styles from './styles/ViewCustomerDashboardStyles';
import QlikView from './shared/QlikView';
import { View, } from 'ufs-mobile-platform';
import ShareDataView from "./AppDashboard/ShareDataView";
import * as util from '../common/Util';
const getUri = (props) => {
    let baseUri = util.chooseURL(props);
    if (props.currentQlikUrl != null && props.currentQlikUrl != '') {
        return baseUri + props.currentQlikUrl;
    }
    //const {kpiId = '', kpiForHolding = false} = props
    // FIXME получать из currentQlikEventPayload
    const kpiId = '';
    const kpiForHolding = false;
    const { id, isHolding } = props.currentCustomerManaged;
    return util.urlCustomerDashboardTail(baseUri, id, kpiId, isHolding, kpiForHolding);
};
/**
 * kpiId {[string]} Номер отображаемого показателя (пустой для отображения всех kpi).
 * kpiForHolding {[boolean]} Отображать показатели для всего холдинга, в который входит ю/л.
 */
const getShareDataView = (props) => {
    let isExtended = props.currentQlikMessage.payload.flag == 1;
    return (React.createElement(ShareDataView, Object.assign({ testID: 'test-id-c331d384-886c-f1df-fb71-75256c290518', isDashboardExpandedMode: props.isDashboardExpandedMode, fromOutside: true, isRepresentationVisible: isExtended }, props)));
};
const ViewCustomerDashboard = (props) => (React.createElement(View, { testID: 'test-id-2ac6c686-b5d7-be01-f5c7-c12af4bafde8', style: Styles.main },
    React.createElement(View, { style: Styles.main },
        getShareDataView(props),
        React.createElement(QlikView, { testID: 'test-id-customer_dashboard-qlik_view-1', uri: getUri(props), qlikCookie: props.qlikCookie, onInternalEvent: props.performQlikEvent, qlikError: props.qlikError, handleQlikError: props.handleQlikError, isTrimmedTop: props.isTrimmedTop, navigateBack: props.navigateBack, isNavigation: props.navigateBackData != null }))));
export default ViewCustomerDashboard;
//# sourceMappingURL=ViewCustomerDashboard.js.map