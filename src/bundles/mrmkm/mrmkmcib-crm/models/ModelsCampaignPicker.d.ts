/**
 * Models for CampaignPicker container.
 *
 * @author Gladkov E.N.
 */
import { Models } from 'mrmkmcib-crm';
import Error from '../models/Error';
export interface ICampaignPickerState {
    currentDeal: Models.Deal;
    isCampaignSearchMode: boolean;
    isCampaignSearchInProgress: boolean;
    salesCampaign: Models.SalesCampaign;
    campaignSearchList: Models.SalesCampaignList;
    campaignInputSearch: string;
    isSalesCampaignListRefreshInProgress: boolean;
    salesCampaignList: Models.SalesCampaignList;
    salesCampaignListFetching: boolean;
    salesCampaignListError: Error | null;
    salesCampaignListCachedDate: Date | null;
}
export declare const initialState: {
    readonly state: ICampaignPickerState;
};
export interface NAVIGATE_BACK {
    (): void;
}
export interface NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN {
    (): void;
}
export interface PERFORM_SALES_CAMPAIGN_SELECT {
    (salesCampaign: Models.SalesCampaign): void;
}
export interface PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE {
    (): void;
}
export interface PERFORM_CAMPAIGN_LIST_REFRESH {
    (): void;
}
export interface PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE {
    (): void;
}
export interface PERFORM_CAMPAIGN_SEARCH {
    (): void;
}
export interface PERFORM_CAMPAIGN_INPUT_SEARCH {
    (campaignInputSearch: string): void;
}
