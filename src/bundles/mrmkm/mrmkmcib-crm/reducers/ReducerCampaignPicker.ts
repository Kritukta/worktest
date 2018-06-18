/*
 * Created by Gladkov E.N.
 */

import {handleActions} from 'redux-actions';
import * as actionsCampaignPicker from '../actions/ActionsCampaignPicker'
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker'
import Action from '../models/Action'
import * as Utils from '../common/Util'


const reducerCampaignPicker = handleActions<ModelsCampaignPicker.ICampaignPickerState>({

    [actionsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
        }
    },

    [actionsCampaignPicker.PERFORM_SALES_CAMPAIGN_SELECT]: (state: ModelsCampaignPicker.ICampaignPickerState, action: Action<actionsCampaignPicker.PERFORM_SALES_CAMPAIGN_SELECT>): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            salesCampaign: action.payload.salesCampaign,
            isCampaignSearchMode: false,
        }
    },

    [actionsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            isCampaignSearchMode: true,
            campaignInputSearch: '',
            campaignSearchList: Utils.campaignPickerSearchListFilter(state.salesCampaignList, ''),
        }
    },

    [actionsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            isCampaignSearchMode: false,
        }
    },

    [actionsCampaignPicker.PERFORM_CAMPAIGN_SEARCH]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            campaignSearchList: Utils.campaignPickerSearchListFilter(state.salesCampaignList, state.campaignInputSearch),
        }
    },

    [actionsCampaignPicker.PERFORM_CAMPAIGN_INPUT_SEARCH]: (state: ModelsCampaignPicker.ICampaignPickerState, action: Action<actionsCampaignPicker.PERFORM_CAMPAIGN_INPUT_SEARCH>): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            campaignInputSearch: action.payload.campaignInputSearch,
        }
    },

    [actionsCampaignPicker.PERFORM_CAMPAIGN_LIST_REFRESH]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
        }
    },

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
        }
    },

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_CLEAN]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            salesCampaignList: { data: [], isCompleted: false, },
        }
    },

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_REQUEST]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            isSalesCampaignListRefreshInProgress: true,
            salesCampaignListError: null,
        }
    },

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_SUCCESS]: (state: ModelsCampaignPicker.ICampaignPickerState, action: Action<actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_SUCCESS>): ModelsCampaignPicker.ICampaignPickerState => ({
        ...state,
        salesCampaignList: action.payload.response && action.payload.response.data,
        isSalesCampaignListRefreshInProgress: false,
        salesCampaignListError: null,
    }),

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_FAILURE]: (state: ModelsCampaignPicker.ICampaignPickerState, action: Action<actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_FAILURE>): ModelsCampaignPicker.ICampaignPickerState => ({
        ...state,
        isSalesCampaignListRefreshInProgress: false,
        salesCampaignListError: action.payload.error,
    }),

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_IGNORE]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => ({
        ...state,
    }),

    [actionsCampaignPicker.CALL_GET_CAMPAIGN_LIST_BREAK]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            isSalesCampaignListRefreshInProgress: false,
            salesCampaignListError: null,
        }
    },

    [actionsCampaignPicker.NAVIGATE_BACK]: (state: ModelsCampaignPicker.ICampaignPickerState): ModelsCampaignPicker.ICampaignPickerState => {
        return {
            ...state,
            isCampaignSearchMode: false,
        }
    },

}, ModelsCampaignPicker.initialState.state)

export default reducerCampaignPicker
