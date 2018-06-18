/*
 * Created by Gladkov E.N.
 */

import * as ModelState from '../models/Models'
import {EnumsCrm, Models} from 'mrmkmcib-crm'
import Response from '../models/Response'
import Error from '../models/Error'
import * as Converters from '../models/Converters'
import * as Utils from '../common/Util'
import * as actionsCampaignPicker from '../actions/ActionsCampaignPicker'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkCampaignPicker from '../thunk/ThunkCampaignPicker'
import {SplitPanelActions} from 'ufs-mobile-platform'


export const navigateToCampaignPickerScreen = ()=> (dispatch: Function): void => {

    dispatch(actionsCampaignPicker.navigateToCampaignPickerScreen())

    dispatch(thunkCampaignPicker.performSalesCampaignListRefresh())

    // Navigate to CampaignPicker
    dispatch(SplitPanelActions.pushContent(
        EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_CampaignPicker,
        Utils.getNavigationContentString(EnumsCrm.NavigationContentAppCrm.AppCRM_DealEditor)
    ))

}

export const performCampaignSearch = () => (dispatch: Function): void => {
    dispatch(actionsCampaignPicker.performCampaignSearch())
}

export const performCampaignInputSearch = (CampaignInputSearch: string) => (dispatch: Function): void => {
    dispatch(actionsCampaignPicker.performCampaignInputSearch(CampaignInputSearch))
}

export const performCampaignSearchModeDisable = () => (dispatch: Function): void => {
    dispatch(actionsCampaignPicker.performCampaignSearchModeDisable())
}

export const performCampaignSearchModeEnable = () => (dispatch: Function): void => {
    dispatch(actionsCampaignPicker.performCampaignSearchModeEnable())
}


export const performSalesCampaignListRefresh = ()=> (dispatch: Function): void => {

    dispatch(actionsCampaignPicker.performSalesCampaignListRefresh())

    dispatch(thunkCampaignPicker.callGetSalesCampaignList())

}

export const callGetSalesCampaignListClean = ()=> (dispatch: Function): void => {
    dispatch(actionsCampaignPicker.callGetSalesCampaignListClean())
}

export const callGetSalesCampaignList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const reducerCampaignPicker = getState().user.mrmkmcibCRM.reducerCampaignPicker

    dispatch(actionsCampaignPicker.callGetSalesCampaignList())

    if (!reducerCampaignPicker.isSalesCampaignListRefreshInProgress) {

        dispatch(thunkCampaignPicker.callGetSalesCampaignListClean())

        dispatch(actionsCampaignPicker.callGetSalesCampaignListRequest())

        Utils.call<Models.SalesCampaignList, any>(
            Utils.urlDealEditor.callGetSalesCampaignList(getState(), reducerCampaignPicker,
                [
                    {tag: EnumsCrm.CachePolicy.Disabled},
                ]
            ),

            (response: Response<Models.SalesCampaignList>) => {

                dispatch(actionsCampaignPicker.callGetSalesCampaignListSuccess(response))

            },

            (error: Error) => {

                dispatch(actionsCampaignPicker.callGetSalesCampaignListFailure(error))

            },

            Converters.RESPONSE_CALL_GET_CAMPAIGN_LIST,

            'GET'
        )
    }
}

export const performSalesCampaignSelect = (salesCampaign: Models.SalesCampaign) => (dispatch: Function): void => {

    dispatch(actionsCampaignPicker.performSalesCampaignSelect(salesCampaign))

    dispatch(thunkDealEditor.performSalesCampaignSet(salesCampaign))

    dispatch(thunkCampaignPicker.navigateBack())

}

export const navigateBack = () => (dispatch: Function): void => {

    dispatch(actionsCampaignPicker.navigateBack())

    // Return back to DealEditor
    dispatch(thunkDealEditor.navigateBack())

}
