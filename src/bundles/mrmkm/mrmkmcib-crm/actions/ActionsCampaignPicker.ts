/**
 * Actions of CampaignPicker container.
 *
 * @author Gladkov E.N.
 */

import {Models} from 'mrmkmcib-crm'
import Action from '../models/Action'
import Response from '../models/Response'


export const NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN = 'CAMPAIGN_CONTAINER_NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN'
export const PREPARE_CAMPAIGN_LIST = 'CAMPAIGN_CONTAINER_PREPARE_CAMPAIGN_LIST'
export const PERFORM_SALES_CAMPAIGN_SELECT = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SELECT'
export const PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE'
export const PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE'
export const PERFORM_CAMPAIGN_SEARCH = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_SEARCH'
export const PERFORM_CAMPAIGN_INPUT_SEARCH = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_INPUT_SEARCH'

export const PERFORM_CAMPAIGN_LIST_REFRESH = 'CAMPAIGN_CONTAINER_PERFORM_CAMPAIGN_LIST_REFRESH'
export const CALL_GET_CAMPAIGN_LIST = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST'
export const CALL_GET_CAMPAIGN_LIST_CLEAN = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_CLEAN'
export const CALL_GET_CAMPAIGN_LIST_REQUEST = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_REQUEST'
export const CALL_GET_CAMPAIGN_LIST_SUCCESS = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_SUCCESS'
export const CALL_GET_CAMPAIGN_LIST_FAILURE = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_FAILURE'
export const CALL_GET_CAMPAIGN_LIST_IGNORE = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_IGNORE'
export const CALL_GET_CAMPAIGN_LIST_BREAK = 'CAMPAIGN_CONTAINER_CALL_GET_CAMPAIGN_LIST_BREAK'

export const NAVIGATE_BACK = 'CAMPAIGN_CONTAINER_NAVIGATE_BACK'


export type NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN = {}
export const navigateToCampaignPickerScreen = (): Action<NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN,
    payload: {}
})

export type PERFORM_SALES_CAMPAIGN_SELECT = {salesCampaign: Models.SalesCampaign}
export const performSalesCampaignSelect = (salesCampaign: Models.SalesCampaign): Action<PERFORM_SALES_CAMPAIGN_SELECT> => ({
    type: PERFORM_SALES_CAMPAIGN_SELECT,
    payload: {
        salesCampaign
    }
})

export type PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE = {}
export const performCampaignSearchModeDisable = (): Action<PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE,
    payload: {}
})

export type PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE = {}
export const performCampaignSearchModeEnable = (): Action<PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE,
    payload: {}
})

export type PERFORM_CAMPAIGN_SEARCH = {}
export const performCampaignSearch = (): Action<PERFORM_CAMPAIGN_SEARCH> => ({
    type: PERFORM_CAMPAIGN_SEARCH,
    payload: {}
})

export type PERFORM_CAMPAIGN_INPUT_SEARCH = {campaignInputSearch: string}
export const performCampaignInputSearch = (campaignInputSearch: string): Action<PERFORM_CAMPAIGN_INPUT_SEARCH> => ({
    type: PERFORM_CAMPAIGN_INPUT_SEARCH,
    payload: {
        campaignInputSearch
    }
})

export type PERFORM_CAMPAIGN_LIST_REFRESH = {}
export const performSalesCampaignListRefresh = (): Action<PERFORM_CAMPAIGN_LIST_REFRESH> => ({
    type: PERFORM_CAMPAIGN_LIST_REFRESH,
    payload: {}
})

export type CALL_GET_CAMPAIGN_LIST = {}
export const callGetSalesCampaignList = (): Action<CALL_GET_CAMPAIGN_LIST> => ({
    type: CALL_GET_CAMPAIGN_LIST,
    payload: {}
})

export type CALL_GET_CAMPAIGN_LIST_CLEAN = {}
export const callGetSalesCampaignListClean = (): Action<CALL_GET_CAMPAIGN_LIST_CLEAN> => ({
    type: CALL_GET_CAMPAIGN_LIST_CLEAN,
    payload: {}
})

export type CALL_GET_CAMPAIGN_LIST_REQUEST = {}
export const callGetSalesCampaignListRequest = (): Action<CALL_GET_CAMPAIGN_LIST_REQUEST> => ({
    type: CALL_GET_CAMPAIGN_LIST_REQUEST,
    payload: {}
})

export type CALL_GET_CAMPAIGN_LIST_SUCCESS = {response: Response<Models.SalesCampaignList>}
export const callGetSalesCampaignListSuccess = (response: Response<Models.SalesCampaignList>): Action<CALL_GET_CAMPAIGN_LIST_SUCCESS> => ({
        type: CALL_GET_CAMPAIGN_LIST_SUCCESS,
        payload: {
            response,
        }
})

export type CALL_GET_CAMPAIGN_LIST_FAILURE = {error: Models.Error}
export const callGetSalesCampaignListFailure = (error: Models.Error): Action<CALL_GET_CAMPAIGN_LIST_FAILURE> => ({
    type: CALL_GET_CAMPAIGN_LIST_FAILURE,
    payload: {
        error,
    }
})

export type CALL_GET_CAMPAIGN_LIST_IGNORE = {}
export const callGetSalesCampaignListIgnore = (): Action<CALL_GET_CAMPAIGN_LIST_IGNORE> => ({
    type: CALL_GET_CAMPAIGN_LIST_IGNORE,
    payload: {}
})

export type CALL_GET_CAMPAIGN_LIST_BREAK = {}
export const callGetSalesCampaignListBreak = (): Action<CALL_GET_CAMPAIGN_LIST_BREAK> => ({
    type: CALL_GET_CAMPAIGN_LIST_BREAK,
    payload: {}
})

export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})
