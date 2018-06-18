import React from 'react';
import * as ModelsCustomerDashboard from "../../models/ModelsCustomerDashboard";
import * as ModelsAppDashboard from "../../models/ModelsAppDashboard";
import Error from "../../models/Error";
export interface IProps {
    uri: string;
    onInternalEvent: ModelsCustomerDashboard.PERFORM_QLIK_EVENT;
    qlikError: Error | null;
    handleQlikError: ModelsAppDashboard.HANDLE_QLIK_ERROR | ModelsCustomerDashboard.HANDLE_QLIK_ERROR;
    isTrimmedTop?: boolean;
    qlikCookie: string | null;
    navigateBack: ModelsAppDashboard.NAVIGATE_BACK;
    isNavigation: boolean;
    testID: string;
}
declare const QlikView: React.StatelessComponent<IProps>;
export default QlikView;
