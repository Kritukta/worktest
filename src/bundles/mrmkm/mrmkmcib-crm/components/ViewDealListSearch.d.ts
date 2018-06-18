import React from 'react';
import { Models } from 'mrmkmcib-crm';
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Enums } from '../Enums';
import * as ModelsDealListSearch from '../models/ModelsDealListSearch';
import * as ModelsAppCRM from '../models/ModelsAppCRM';
export interface IProps {
    testID: string;
    navigateBackToDealListScreen: ModelsDealListSearch.NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN;
    dealSearchOpenedList: Models.DealList;
    dealSearchClosedList: Models.DealList;
    currentTab: Enums.DealListTab;
    inputSearch: string;
    performInputSearch: ModelsDealListSearch.PERFORM_INPUT_SEARCH;
    currentCustomerManaged: Models.CustomerManaged;
    currentUser: ModelsApp.Employee;
    dealOpenedList: Models.DealList;
    dealClosedList: Models.DealList;
    performDealOpen: ModelsAppCRM.PERFORM_DEAL_OPEN;
    isEditDealEnable: boolean;
}
declare const ViewDealListSearch: React.StatelessComponent<IProps>;
export default ViewDealListSearch;
