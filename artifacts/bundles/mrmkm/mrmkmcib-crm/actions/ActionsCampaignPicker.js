/**
 * Actions of CampaignPicker container.
 *
 * @author Gladkov E.N.
 */
export const NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN = 'CAMPAIGN_CONTAINER_NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN';
export const PREPARE_CAMPAIGN_LIST = 'CAMPAIGN_CONTAINER_PREPARE_CAMPAIGN_LIST';
export const PERFORM_SALES_CAMPAIGN_SELECT = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SELECT';
export const PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE';
export const PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE';
export const PERFORM_CAMPAIGN_SEARCH = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH';
export const PERFORM_CAMPAIGN_INPUT_SEARCH = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_INPUT_SEARCH';
export const PERFORM_CAMPAIGN_LIST_REFRESH = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_LIST_REFRESH';
export const CALL_GET_CAMPAIGN_LIST = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST';
export const CALL_GET_CAMPAIGN_LIST_CLEAN = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_CLEAN';
export const CALL_GET_CAMPAIGN_LIST_REQUEST = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_REQUEST';
export const CALL_GET_CAMPAIGN_LIST_SUCCESS = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_SUCCESS';
export const CALL_GET_CAMPAIGN_LIST_FAILURE = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_FAILURE';
export const CALL_GET_CAMPAIGN_LIST_IGNORE = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_IGNORE';
export const CALL_GET_CAMPAIGN_LIST_BREAK = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_BREAK';
export const NAVIGATE_BACK = 'CAMPAIGN_CONTAINER_NAVIGATE_BACK';
export const navigateToCampaignPickerScreen = () => ({
    type: NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN,
    payload: {}
});
export const performSalesCampaignSelect = (salesCampaign) => ({
    type: PERFORM_SALES_CAMPAIGN_SELECT,
    payload: {
        salesCampaign
    }
});
export const performCampaignSearchModeDisable = () => ({
    type: PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE,
    payload: {}
});
export const performCampaignSearchModeEnable = () => ({
    type: PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE,
    payload: {}
});
export const performCampaignSearch = () => ({
    type: PERFORM_CAMPAIGN_SEARCH,
    payload: {}
});
export const performCampaignInputSearch = (campaignInputSearch) => ({
    type: PERFORM_CAMPAIGN_INPUT_SEARCH,
    payload: {
        campaignInputSearch
    }
});
export const performSalesCampaignListRefresh = () => ({
    type: PERFORM_CAMPAIGN_LIST_REFRESH,
    payload: {}
});
export const callGetSalesCampaignList = () => ({
    type: CALL_GET_CAMPAIGN_LIST,
    payload: {}
});
export const callGetSalesCampaignListClean = () => ({
    type: CALL_GET_CAMPAIGN_LIST_CLEAN,
    payload: {}
});
export const callGetSalesCampaignListRequest = () => ({
    type: CALL_GET_CAMPAIGN_LIST_REQUEST,
    payload: {}
});
export const callGetSalesCampaignListSuccess = (response) => ({
    type: CALL_GET_CAMPAIGN_LIST_SUCCESS,
    payload: {
        response,
    }
});
export const callGetSalesCampaignListFailure = (error) => ({
    type: CALL_GET_CAMPAIGN_LIST_FAILURE,
    payload: {
        error,
    }
});
export const callGetSalesCampaignListIgnore = () => ({
    type: CALL_GET_CAMPAIGN_LIST_IGNORE,
    payload: {}
});
export const callGetSalesCampaignListBreak = () => ({
    type: CALL_GET_CAMPAIGN_LIST_BREAK,
    payload: {}
});
export const navigateBack = () => ({
    type: NAVIGATE_BACK,
    payload: {}
});
//# sourceMappingURL=ActionsCampaignPicker.js.map