/// <reference types="react-redux" />
import React from 'react';
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsAppCRM from "../models/ModelsAppCRM";
import * as ModelsLimit from "../models/ModelsLimit";
import Error from "../models/Error";
export interface IStateProps {
    currentTab: Enums.LimitTab;
    currentTotalTab: Enums.LimitTotalTab;
    currentCustomerManaged: Models.CustomerManaged;
    limit: Models.Limit;
    limitFetching: boolean;
    limitError: Error | null;
    limitCachedDate: Date | null;
}
export interface IDispatchProps {
    performChangeTab: ModelsLimit.PERFORM_CHANGE_TAB;
    performChangeTotalTab: ModelsLimit.PERFORM_CHANGE_TOTAL_TAB;
    performContainerReset: ModelsLimit.PERFORM_CONTAINER_RESET;
    navigateBack: ModelsAppCRM.NAVIGATE_BACK;
}
export declare type ILimitProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
