import React from 'react';
import { Models } from 'mrmkmcib-crm';
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker';
import Error from '../models/Error';
export interface IStateProps {
    currentDeal: Models.Deal;
    isCampaignSearchMode: boolean;
    isCampaignSearchInProgress: boolean;
    campaignSearchList: Models.SalesCampaignList;
    salesCampaignList: Models.SalesCampaignList;
    campaignInputSearch: string;
    isSalesCampaignListRefreshInProgress: boolean;
    salesCampaignListError: Error | null;
}
export interface IDispatchProps {
    navigateBack: ModelsCampaignPicker.NAVIGATE_BACK;
    performSalesCampaignSelect: ModelsCampaignPicker.PERFORM_SALES_CAMPAIGN_SELECT;
    navigateToCampaignPickerScreen: ModelsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN;
    performCampaignSearchModeEnable: ModelsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE;
    performCampaignSearchModeDisable: ModelsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE;
    performSalesCampaignListRefresh: ModelsCampaignPicker.PERFORM_CAMPAIGN_LIST_REFRESH;
    performCampaignSearch: ModelsCampaignPicker.PERFORM_CAMPAIGN_SEARCH;
    performCampaignInputSearch: ModelsCampaignPicker.PERFORM_CAMPAIGN_INPUT_SEARCH;
}
export declare type IOwnProps = {
    testID: string;
} | undefined;
export declare type ICampaignPickerProps = IStateProps & IDispatchProps & IOwnProps;
declare const _default: React.ComponentClass<IOwnProps>;
export default _default;
