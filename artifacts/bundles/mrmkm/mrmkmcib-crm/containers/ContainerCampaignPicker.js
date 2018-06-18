/*
 * Created by Gladkov E.N.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkCampaignPicker from '../thunk/ThunkCampaignPicker';
import ViewCampaignPicker from '../components/ViewCampaignPicker';
/*
 * Container 'CampaignPickerCustomerList'.
 */
class ContainerCampaignPickerCustomerList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(ViewCampaignPicker, { testID: 'test-id-container-DealEditor', currentDeal: this.props.currentDeal, isCampaignSearchMode: this.props.isCampaignSearchMode, isCampaignSearchInProgress: this.props.isCampaignSearchInProgress, campaignSearchList: this.props.campaignSearchList, salesCampaignList: this.props.salesCampaignList, performSalesCampaignSelect: this.props.performSalesCampaignSelect, navigateToCampaignPickerScreen: this.props.navigateToCampaignPickerScreen, performCampaignSearch: this.props.performCampaignSearch, performCampaignInputSearch: this.props.performCampaignInputSearch, campaignInputSearch: this.props.campaignInputSearch, navigateBack: this.props.navigateBack, isSalesCampaignListRefreshInProgress: this.props.isSalesCampaignListRefreshInProgress, salesCampaignListError: this.props.salesCampaignListError, performCampaignSearchModeEnable: this.props.performCampaignSearchModeEnable, performCampaignSearchModeDisable: this.props.performCampaignSearchModeDisable, performSalesCampaignListRefresh: this.props.performSalesCampaignListRefresh }));
    }
}
function mapStateToProps(state, ownProps) {
    return {
        currentDeal: state.user.mrmkmcibCRM.reducerDealEditor.currentDeal,
        isCampaignSearchMode: state.user.mrmkmcibCRM.reducerCampaignPicker.isCampaignSearchMode,
        isCampaignSearchInProgress: state.user.mrmkmcibCRM.reducerCampaignPicker.isCampaignSearchInProgress,
        campaignInputSearch: state.user.mrmkmcibCRM.reducerCampaignPicker.campaignInputSearch,
        campaignSearchList: state.user.mrmkmcibCRM.reducerCampaignPicker.campaignSearchList,
        salesCampaignList: state.user.mrmkmcibCRM.reducerCampaignPicker.salesCampaignList,
        isSalesCampaignListRefreshInProgress: state.user.mrmkmcibCRM.reducerCampaignPicker.isSalesCampaignListRefreshInProgress,
        salesCampaignListError: state.user.mrmkmcibCRM.reducerCampaignPicker.salesCampaignListError,
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        performSalesCampaignSelect: (salesCampaign) => {
            dispatch(thunkCampaignPicker.performSalesCampaignSelect(salesCampaign));
        },
        navigateToCampaignPickerScreen: () => {
            dispatch(thunkCampaignPicker.navigateToCampaignPickerScreen());
        },
        performCampaignSearchModeEnable: () => {
            dispatch(thunkCampaignPicker.performCampaignSearchModeEnable());
        },
        performCampaignSearchModeDisable: () => {
            dispatch(thunkCampaignPicker.performCampaignSearchModeDisable());
        },
        performSalesCampaignListRefresh: () => {
            dispatch(thunkCampaignPicker.performSalesCampaignListRefresh());
        },
        performCampaignSearch: () => {
            dispatch(thunkCampaignPicker.performCampaignSearch());
        },
        performCampaignInputSearch: (CampaignInputSearch) => {
            dispatch(thunkCampaignPicker.performCampaignInputSearch(CampaignInputSearch));
        },
        navigateBack: () => {
            dispatch(thunkCampaignPicker.navigateBack());
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerCampaignPickerCustomerList);
//# sourceMappingURL=ContainerCampaignPicker.js.map