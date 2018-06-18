/*
 * Created by Gladkov E.N.
 */
import { handleActions } from 'redux-actions';
import * as actionsCampaignPicker from '../actions/ActionsCampaignPicker';
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker';
import * as Utils from '../common/Util';
const reducerCampaignPicker = handleActions({
    [actionsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN]: (state) => {
        return Object.assign({}, state);
    },
    [actionsCampaignPicker.PERFORM_SALES_CAMPAIGN_SELECT]: (state, action) => {
        return Object.assign({}, state, { salesCampaign: action.payload.salesCampaign, isCampaignSearchMode: false });
    },
    [actionsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE]: (state) => {
        return Object.assign({}, state, { isCampaignSearchMode: true, campaignInputSearch: '', campaignSearchList: Utils.campaignPickerSearchListFilter(state.salesCampaignList, '') });
    },
    [actionsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE]: (state) => {
        return Object.assign({}, state, { isCampaignSearchMode: false });
    },
    [actionsCampaignPicker.PERFORM_CAMPAIGN_SEARCH]: (state) => {
        return Object.assign({}, state, { campaignSearchList: Utils.campaignPickerSearchListFilter(state.salesCampaignList, state.campaignInputSearch) });
    },
    [actionsCampaignPicker.PERFORM_CAMPAIGN_INPUT_SEARCH]: (state, action) => {
        return Object.assign({}, state, { campaignInputSearch: action.payload.campaignInputSearch });
    },
    [actionsCampaignPicker.PERFORM_CAMPAIGN_LIST_REFRESH]: (state) => {
        return Object.assign({}, state);
    },
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST]: (state) => {
        return Object.assign({}, state);
    },
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_CLEAN]: (state) => {
        return Object.assign({}, state, { salesCampaignList: { data: [], isCompleted: false, } });
    },
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_REQUEST]: (state) => {
        return Object.assign({}, state, { isSalesCampaignListRefreshInProgress: true, salesCampaignListError: null });
    },
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_SUCCESS]: (state, action) => (Object.assign({}, state, { salesCampaignList: action.payload.response && action.payload.response.data, isSalesCampaignListRefreshInProgress: false, salesCampaignListError: null })),
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_FAILURE]: (state, action) => (Object.assign({}, state, { isSalesCampaignListRefreshInProgress: false, salesCampaignListError: action.payload.error })),
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_IGNORE]: (state) => (Object.assign({}, state)),
    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_BREAK]: (state) => {
        return Object.assign({}, state, { isSalesCampaignListRefreshInProgress: false, salesCampaignListError: null });
    },
    [actionsCampaignPicker.NAVIGATE_BACK]: (state) => {
        return Object.assign({}, state, { isCampaignSearchMode: false });
    },
}, ModelsCampaignPicker.initialState.state);
export default reducerCampaignPicker;
//# sourceMappingURL=ReducerCampaignPicker.js.map