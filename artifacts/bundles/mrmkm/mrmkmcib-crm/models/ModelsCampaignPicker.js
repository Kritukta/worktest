/**
 * Models for CampaignPicker container.
 *
 * @author Gladkov E.N.
 */
import { defaultValues } from './Models';
const defaultState = {
    get state() {
        return {
            currentDeal: defaultValues.Deal,
            isCampaignSearchMode: false,
            isCampaignSearchInProgress: false,
            salesCampaign: defaultValues.SalesCampaign,
            campaignSearchList: defaultValues.SalesCampaignList,
            campaignInputSearch: '',
            isSalesCampaignListRefreshInProgress: false,
            salesCampaignList: defaultValues.SalesCampaignList,
            salesCampaignListFetching: false,
            salesCampaignListError: null,
            salesCampaignListCachedDate: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsCampaignPicker.js.map