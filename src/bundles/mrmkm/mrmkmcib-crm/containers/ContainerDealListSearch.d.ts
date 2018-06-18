import React from 'react';
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Enums } from '../Enums';
import { Models } from 'mrmkmcib-crm';
import * as ModelsDealListSearch from '../models/ModelsDealListSearch';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
export interface IStateProps {
    dealSearchOpenedList: Models.DealList;
    dealSearchClosedList: Models.DealList;
    currentTab: Enums.DealListTab;
    inputSearch: string;
    currentCustomerManaged: Models.CustomerManaged;
    currentUser: ModelsApp.Employee;
    dealOpenedList: Models.DealList;
    dealClosedList: Models.DealList;
    isEditDealEnable: boolean;
}
export interface IDispatchProps {
    navigateBackToDealListScreen: ModelsDealListSearch.NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN;
    performInputSearch: ModelsDealListSearch.PERFORM_INPUT_SEARCH;
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN;
}
export declare type IDealListSearchProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<{
    testID: string;
}>;
export default _default;
