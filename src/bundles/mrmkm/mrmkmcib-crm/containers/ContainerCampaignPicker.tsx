/*
 * Created by Gladkov E.N.
 */

import React from 'react'
import {connect} from 'react-redux'

import * as thunkCampaignPicker from '../thunk/ThunkCampaignPicker'
import {Models} from 'mrmkmcib-crm'
import * as ModelsCampaignPicker from '../models/ModelsCampaignPicker'
import Error from '../models/Error'

import ViewCampaignPicker from '../components/ViewCampaignPicker'
import * as ModelState from '../models/Models'



export interface IStateProps {
    currentDeal: Models.Deal,
    isCampaignSearchMode: boolean,
    isCampaignSearchInProgress: boolean,
    campaignSearchList: Models.SalesCampaignList,
    salesCampaignList: Models.SalesCampaignList,
    campaignInputSearch: string,
    isSalesCampaignListRefreshInProgress: boolean,
    salesCampaignListError: Error | null,
}

export interface IDispatchProps {
    navigateBack: ModelsCampaignPicker.NAVIGATE_BACK,
    performSalesCampaignSelect: ModelsCampaignPicker.PERFORM_SALES_CAMPAIGN_SELECT,
    navigateToCampaignPickerScreen: ModelsCampaignPicker.NAVIGATE_TO_CAMPAIGN_PICKER_SCREEN,
    performCampaignSearchModeEnable: ModelsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_ENABLE,
    performCampaignSearchModeDisable: ModelsCampaignPicker.PERFORM_CAMPAIGN_SEARCH_MODE_DISABLE,
    performSalesCampaignListRefresh: ModelsCampaignPicker.PERFORM_CAMPAIGN_LIST_REFRESH,
    performCampaignSearch: ModelsCampaignPicker.PERFORM_CAMPAIGN_SEARCH,
    performCampaignInputSearch: ModelsCampaignPicker.PERFORM_CAMPAIGN_INPUT_SEARCH,
}

export type IOwnProps = { testID: string } | undefined;
export type ICampaignPickerProps = IStateProps & IDispatchProps & IOwnProps;


/*
 * Container 'CampaignPickerCustomerList'.
 */
class ContainerCampaignPickerCustomerList extends React.Component<ICampaignPickerProps, IStateProps> {

    constructor(props: ICampaignPickerProps, context: any) {
        super(props, context);
    }

    render() {

        return (
            <ViewCampaignPicker
                testID={'test-id-container-DealEditor'}
                currentDeal={this.props.currentDeal}
                isCampaignSearchMode={this.props.isCampaignSearchMode}
                isCampaignSearchInProgress={this.props.isCampaignSearchInProgress}
                campaignSearchList={this.props.campaignSearchList}
                salesCampaignList={this.props.salesCampaignList}
                performSalesCampaignSelect={this.props.performSalesCampaignSelect}
                navigateToCampaignPickerScreen={this.props.navigateToCampaignPickerScreen}
                performCampaignSearch={this.props.performCampaignSearch}
                performCampaignInputSearch={this.props.performCampaignInputSearch}
                campaignInputSearch={this.props.campaignInputSearch}
                navigateBack={this.props.navigateBack}
                isSalesCampaignListRefreshInProgress={this.props.isSalesCampaignListRefreshInProgress}
                salesCampaignListError={this.props.salesCampaignListError}
                performCampaignSearchModeEnable={this.props.performCampaignSearchModeEnable}
                performCampaignSearchModeDisable={this.props.performCampaignSearchModeDisable}
                performSalesCampaignListRefresh={this.props.performSalesCampaignListRefresh}
            />
        )
    }
}

function mapStateToProps(state: ModelState.IRootState, ownProps: IOwnProps): IStateProps {
    return {
        currentDeal: state.user.mrmkmcibCRM.reducerDealEditor.currentDeal,
        isCampaignSearchMode: state.user.mrmkmcibCRM.reducerCampaignPicker.isCampaignSearchMode,
        isCampaignSearchInProgress: state.user.mrmkmcibCRM.reducerCampaignPicker.isCampaignSearchInProgress,
        campaignInputSearch: state.user.mrmkmcibCRM.reducerCampaignPicker.campaignInputSearch,
        campaignSearchList: state.user.mrmkmcibCRM.reducerCampaignPicker.campaignSearchList,
        salesCampaignList: state.user.mrmkmcibCRM.reducerCampaignPicker.salesCampaignList,
        isSalesCampaignListRefreshInProgress: state.user.mrmkmcibCRM.reducerCampaignPicker.isSalesCampaignListRefreshInProgress,
        salesCampaignListError: state.user.mrmkmcibCRM.reducerCampaignPicker.salesCampaignListError,
    }
}

function mapDispatchToProps(dispatch: Function, ownProps: IOwnProps): IDispatchProps {
    return {
        performSalesCampaignSelect: (salesCampaign: Models.SalesCampaign) => {
            dispatch(thunkCampaignPicker.performSalesCampaignSelect(salesCampaign))
        },
        navigateToCampaignPickerScreen: () => {
            dispatch(thunkCampaignPicker.navigateToCampaignPickerScreen())
        },
        performCampaignSearchModeEnable: () => {
            dispatch(thunkCampaignPicker.performCampaignSearchModeEnable())
        },
        performCampaignSearchModeDisable: () => {
            dispatch(thunkCampaignPicker.performCampaignSearchModeDisable())
        },
        performSalesCampaignListRefresh: () => {
            dispatch(thunkCampaignPicker.performSalesCampaignListRefresh())
        },
        performCampaignSearch: () => {
            dispatch(thunkCampaignPicker.performCampaignSearch())
        },
        performCampaignInputSearch: (CampaignInputSearch: string) => {
            dispatch(thunkCampaignPicker.performCampaignInputSearch(CampaignInputSearch))
        },
        navigateBack: () => {
            dispatch(thunkCampaignPicker.navigateBack())
        },
    }
}

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(ContainerCampaignPickerCustomerList)
