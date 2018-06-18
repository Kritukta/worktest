/*
 * Created by Gladkov E.N.
 */
import { EnumsCrm } from 'mrmkmcib-crm';
import * as Converters from '../models/Converters';
import * as Utils from '../common/Util';
import * as actionsCampaignPicker from '../actions/ActionsCampaignPicker';
import * as thunkDealEditor from '../thunk/ThunkDealEditor';
import * as thunkCampaignPicker from '../thunk/ThunkCampaignPicker';
import { SplitPanelActions } from 'ufs-mobile-platform';
export const navigateToCampaignPickerScreen = () => (dispatch) => {
    dispatch(actionsCampaignPicker.navigateToCampaignPickerScreen());
    dispatch(thunkCampaignPicker.performSalesCampaignListRefresh());
    // Navigate to CampaignPicker
    dispatch(SplitPanelActions.pushContent(EnumsCrm.NavigationContentDealEditor.AppCRM_DealEditor_CampaignPicker, Utils.getNavigationContentString(EnumsCrm.NavigationContentAppCrm.AppCRM_DealEditor)));
};
export const performCampaignSearch = () => (dispatch) => {
    dispatch(actionsCampaignPicker.performCampaignSearch());
};
export const performCampaignInputSearch = (CampaignInputSearch) => (dispatch) => {
    dispatch(actionsCampaignPicker.performCampaignInputSearch(CampaignInputSearch));
};
export const performCampaignSearchModeDisable = () => (dispatch) => {
    dispatch(actionsCampaignPicker.performCampaignSearchModeDisable());
};
export const performCampaignSearchModeEnable = () => (dispatch) => {
    dispatch(actionsCampaignPicker.performCampaignSearchModeEnable());
};
export const performSalesCampaignListRefresh = () => (dispatch) => {
    dispatch(actionsCampaignPicker.performSalesCampaignListRefresh());
    dispatch(thunkCampaignPicker.callGetSalesCampaignList());
};
export const callGetSalesCampaignListClean = () => (dispatch) => {
    dispatch(actionsCampaignPicker.callGetSalesCampaignListClean());
};
export const callGetSalesCampaignList = () => (dispatch, getState) => {
    const reducerCampaignPicker = getState().user.mrmkmcibCRM.reducerCampaignPicker;
    dispatch(actionsCampaignPicker.callGetSalesCampaignList());
    if (!reducerCampaignPicker.isSalesCampaignListRefreshInProgress) {
        dispatch(thunkCampaignPicker.callGetSalesCampaignListClean());
        dispatch(actionsCampaignPicker.callGetSalesCampaignListRequest());
        Utils.call(Utils.urlDealEditor.callGetSalesCampaignList(getState(), reducerCampaignPicker, [
            { tag: EnumsCrm.CachePolicy.Disabled },
        ]), (response) => {
            dispatch(actionsCampaignPicker.callGetSalesCampaignListSuccess(response));
        }, (error) => {
            dispatch(actionsCampaignPicker.callGetSalesCampaignListFailure(error));
        }, Converters.RESPONSE_CALL_GET_CAMPAIGN_LIST, 'GET');
    }
};
export const performSalesCampaignSelect = (salesCampaign) => (dispatch) => {
    dispatch(actionsCampaignPicker.performSalesCampaignSelect(salesCampaign));
    dispatch(thunkDealEditor.performSalesCampaignSet(salesCampaign));
    dispatch(thunkCampaignPicker.navigateBack());
};
export const navigateBack = () => (dispatch) => {
    dispatch(actionsCampaignPicker.navigateBack());
    // Return back to DealEditor
    dispatch(thunkDealEditor.navigateBack());
};
//# sourceMappingURL=ThunkCampaignPicker.js.map