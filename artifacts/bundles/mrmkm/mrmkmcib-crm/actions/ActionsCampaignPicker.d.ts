/**
 * Actions of CampaignPicker container.
 *
 * @author Gladkov E.N.
 */
import { Models } from 'mrmkmcib-crm';
import Action from '../models/Action';
import Response from '../models/Response';
export declare const NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN = "CAMPAIGN_CONTAINER_NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN";
export declare const PREPARE_CAMPAIGN_LIST = "CAMPAIGN_CONTAINER_PREPARE_CAMPAIGN_LIST";
export declare const PERFORM_SALES_CAMPAIGN_SELECT = "CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SELECT";
export declare const PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE = "CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE";
export declare const PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE = "CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE";
export declare const PERFORM_CAMPAIGN_SEARCH = "CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH";
export declare const PERFORM_CAMPAIGN_INPUT_SEARCH = "CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_INPUT_SEARCH";
export declare const PERFORM_CAMPAIGN_LIST_REFRESH = "CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_LIST_REFRESH";
export declare const CALL_GET_CAMPAIGN_LIST = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST";
export declare const CALL_GET_CAMPAIGN_LIST_CLEAN = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_CLEAN";
export declare const CALL_GET_CAMPAIGN_LIST_REQUEST = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_REQUEST";
export declare const CALL_GET_CAMPAIGN_LIST_SUCCESS = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_SUCCESS";
export declare const CALL_GET_CAMPAIGN_LIST_FAILURE = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_FAILURE";
export declare const CALL_GET_CAMPAIGN_LIST_IGNORE = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_IGNORE";
export declare const CALL_GET_CAMPAIGN_LIST_BREAK = "CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_BREAK";
export declare const NAVIGATE_BACK = "CAMPAIGN_CONTAINER_NAVIGATE_BACK";
export declare type NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN = {};
export declare const navigateToCampaignPickerScreen: () => Action<NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN>;
export declare type PERFORM_SALES_CAMPAIGN_SELECT = {
    salesCampaign: Models.SalesCampaign;
};
export declare const performSalesCampaignSelect: (salesCampaign: Models.SalesCampaign) => Action<PERFORM_SALES_CAMPAIGN_SELECT>;
export declare type PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE = {};
export declare const performCampaignSearchModeDisable: () => Action<PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE>;
export declare type PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE = {};
export declare const performCampaignSearchModeEnable: () => Action<PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE>;
export declare type PERFORM_CAMPAIGN_SEARCH = {};
export declare const performCampaignSearch: () => Action<PERFORM_CAMPAIGN_SEARCH>;
export declare type PERFORM_CAMPAIGN_INPUT_SEARCH = {
    campaignInputSearch: string;
};
export declare const performCampaignInputSearch: (campaignInputSearch: string) => Action<PERFORM_CAMPAIGN_INPUT_SEARCH>;
export declare type PERFORM_CAMPAIGN_LIST_REFRESH = {};
export declare const performSalesCampaignListRefresh: () => Action<PERFORM_CAMPAIGN_LIST_REFRESH>;
export declare type CALL_GET_CAMPAIGN_LIST = {};
export declare const callGetSalesCampaignList: () => Action<CALL_GET_CAMPAIGN_LIST>;
export declare type CALL_GET_CAMPAIGN_LIST_CLEAN = {};
export declare const callGetSalesCampaignListClean: () => Action<CALL_GET_CAMPAIGN_LIST_CLEAN>;
export declare type CALL_GET_CAMPAIGN_LIST_REQUEST = {};
export declare const callGetSalesCampaignListRequest: () => Action<CALL_GET_CAMPAIGN_LIST_REQUEST>;
export declare type CALL_GET_CAMPAIGN_LIST_SUCCESS = {
    response: Response<Models.SalesCampaignList>;
};
export declare const callGetSalesCampaignListSuccess: (response: Response<Models.SalesCampaignList>) => Action<CALL_GET_CAMPAIGN_LIST_SUCCESS>;
export declare type CALL_GET_CAMPAIGN_LIST_FAILURE = {
    error: Models.Error;
};
export declare const callGetSalesCampaignListFailure: (error: Models.Error) => Action<CALL_GET_CAMPAIGN_LIST_FAILURE>;
export declare type CALL_GET_CAMPAIGN_LIST_IGNORE = {};
export declare const callGetSalesCampaignListIgnore: () => Action<CALL_GET_CAMPAIGN_LIST_IGNORE>;
export declare type CALL_GET_CAMPAIGN_LIST_BREAK = {};
export declare const callGetSalesCampaignListBreak: () => Action<CALL_GET_CAMPAIGN_LIST_BREAK>;
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
