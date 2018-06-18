import React from 'react';
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsLimit from "../models/ModelsLimit";
import Error from "../models/Error";
export interface IProps {
    performChangeTab: ModelsLimit.PERFORM_CHANGE_TAB;
    performChangeTotalTab: ModelsLimit.PERFORM_CHANGE_TOTAL_TAB;
    performContainerReset: ModelsLimit.PERFORM_CONTAINER_RESET;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
    currentTab: Enums.LimitTab;
    currentTotalTab: Enums.LimitTotalTab;
    currentCustomerManaged: Models.CustomerManaged;
    limit: Models.Limit;
    limitFetching: boolean;
    limitError: Error | null;
    limitCachedDate: Date | null;
    testID: string;
}
declare const ViewLimit: React.StatelessComponent<IProps>;
export default ViewLimit;
