/*
 * Created by Burnaev M.U.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"


import * as thunkGSZ from '../thunk/ThunkGSZ'
import {Models as ModelsApp} from "mrmkmcib-app"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsGSZ from "../models/ModelsGSZ"
import Error from "../models/Error"

import ViewGSZ from '../components/ViewGSZ'
import * as ModelState from "../models/Models"


/*
 * Container "GSZ". GSZ card screen.
 */
class ContainerGSZ extends React.Component<IGSZProps, any> {

    constructor(props: IGSZProps, context: any) {
        super(props, context);
    }

    componentDidMount() {


    }

    render() {
        return (
            <ViewGSZ testID={'test-id-container-GSZ'}

                     navigateToGszScreen={this.props.navigateToGszScreen}
                     performPopoverChiefShow={this.props.performPopoverChiefShow}
                     performPopoverChiefHide={this.props.performPopoverChiefHide}
                     performPopoverSortingShow={this.props.performPopoverSortingShow}
                     performPopoverSortingHide={this.props.performPopoverSortingHide}
                     gszLoadingErrorModalHide={this.props.gszLoadingErrorModalHide}
                     navigateToGszActivityIncludeScreen={this.props.navigateToGszActivityIncludeScreen}
                     navigateToGszActivityExcludeScreen={this.props.navigateToGszActivityExcludeScreen}
                     closeGszActivityPanel={this.props.closeGszActivityPanel}
                     performPopoverCuratorShow={this.props.performPopoverCuratorShow}
                     performPopoverCuratorHide={this.props.performPopoverCuratorHide}
                     performPopoverLimitsHide={this.props.performPopoverLimitsHide}
                     performPopoverLimitsShow={this.props.performPopoverLimitsShow}
                     performInputSortingType={this.props.performInputSortingType}
                     performRefresh={this.props.performRefresh}
                     performFlushLimits={this.props.performFlushLimits}
                     refresh_callGetGsz={this.props.refresh_callGetGsz}
                     refresh_callGetGszLimit={this.props.refresh_callGetGszLimit}
                     performPopoverBorrowerListShow={this.props.performPopoverBorrowerListShow}
                     performPopoverBorrowerListHide={this.props.performPopoverBorrowerListHide}
                     performInputBorrowerListSearch={this.props.performInputBorrowerListSearch}
                     navigateToBorrowerScreen={this.props.navigateToBorrowerScreen}
                     navigateBorrowerListBack={this.props.navigateBorrowerListBack}
                     performInputMemberListSearch={this.props.performInputMemberListSearch}
                     performMemberListSearch={this.props.performMemberListSearch}
                     performMemberListSearchModeEnable={this.props.performMemberListSearchModeEnable}
                     performMemberListSearchModeDisable={this.props.performMemberListSearchModeDisable}
                     performContainerReset={this.props.performContainerReset}

                     navigateBackFromGszScreen={this.props.navigateBackFromGszScreen}

                     gszLoadingErrorModalIsVisible={this.props.gszLoadingErrorModalIsVisible}
                     currentGsz={this.props.currentGsz}
                     performFlush={this.props.performFlush}
                     currentGszId={this.props.currentGszId}
                     currentGszMember={this.props.currentGszMember}
                     isVisiblePopoverChief={this.props.isVisiblePopoverChief}
                     isVisiblePopoverSorting={this.props.isVisiblePopoverSorting}
                     isVisiblePopoverLimits={this.props.isVisiblePopoverLimits}
                     isActivityCreateMode={this.props.isActivityCreateMode}
                     isVisiblePopoverCurator={this.props.isVisiblePopoverCurator}
                     inputSortingType={this.props.inputSortingType}
                     isVisiblePopoverBorrowerList={this.props.isVisiblePopoverBorrowerList}
                     isRefreshBarActive={this.props.isRefreshBarActive}
                     isPopoverBorrowerListSearchActive={this.props.isPopoverBorrowerListSearchActive}
                     performGszRefreshPanelHide={this.props.performGszRefreshPanelHide}
                     performPopoverBorrowerListSearchModeEnable={this.props.performPopoverBorrowerListSearchModeEnable}
                     performPopoverBorrowerListSearchModeDisable={this.props.performPopoverBorrowerListSearchModeDisable}
                     borrowerFilteredList={this.props.borrowerFilteredList}
                     inputBorrowerListSearch={this.props.inputBorrowerListSearch}
                     currentBorrower={this.props.currentBorrower}
                     memberSearchList={this.props.memberSearchList}
                     isMemberListSearchMode={this.props.isMemberListSearchMode}
                     inputMemberListSearch={this.props.inputMemberListSearch}
                     refresh={this.props.refresh}
                     refreshInProgress={this.props.refreshInProgress}
                     refreshError={this.props.refreshError}
                     currentGszFetching={this.props.currentGszFetching}
                     currentGszError={this.props.currentGszError}
                     currentGszCachedDate={this.props.currentGszCachedDate}
                     gszLimit={this.props.gszLimit}
                     gszLimitFetching={this.props.gszLimitFetching}
                     gszLimitError={this.props.gszLimitError}
                     gszLimitCachedDate={this.props.gszLimitCachedDate}
                     performCustomerOpen={this.props.performCustomerOpen}
                     organizationType={this.props.organizationType}
                     performPopoverBorrowerListCancel={this.props.performPopoverBorrowerListCancel}
            >
            </ViewGSZ>
        )
    }
}

export interface IStateProps {

    gszLoadingErrorModalIsVisible: boolean,
    currentGsz: Models.Gsz,
    currentGszId: string,
    currentGszMember: Models.GszMember,
    isVisiblePopoverChief: boolean,
    isVisiblePopoverSorting: boolean,
    isVisiblePopoverLimits: boolean,
    isActivityCreateMode: boolean,
    isVisiblePopoverCurator: boolean,
    isPopoverBorrowerListSearchActive: boolean,
    isRefreshBarActive: boolean,
    inputSortingType: Enums.GszMemberListSortingType,
    isVisiblePopoverBorrowerList: boolean,
    borrowerFilteredList: Models.BorrowerList,
    inputBorrowerListSearch: string,
    currentBorrower: Models.Borrower,
    memberSearchList: Models.GszMemberList,
    isMemberListSearchMode: boolean,
    inputMemberListSearch: string,
    refresh: boolean,
    refreshInProgress: boolean,
    refreshError: Error | null,
    currentGszFetching: boolean,
    currentGszError: Error | null,
    currentGszCachedDate: Date | null,
    gszLimit: Models.GszLimit,
    gszLimitFetching: boolean,
    gszLimitError: Error | null,
    gszLimitCachedDate: Date | null,
    organizationType: ModelsApp.Classifier,
    gszNavigationHistory: Models.GszHistory[],


}

export interface IDispatchProps {

    navigateToGszScreen: ModelsGSZ.NAVIGATE_TO_GSZ_SCREEN,
    performPopoverChiefShow: ModelsGSZ.PERFORM_POPOVER_CHIEF_SHOW,
    performPopoverChiefHide: ModelsGSZ.PERFORM_POPOVER_CHIEF_HIDE,
    performPopoverSortingShow: ModelsGSZ.PERFORM_POPOVER_SORTING_SHOW,
    performPopoverSortingHide: ModelsGSZ.PERFORM_POPOVER_SORTING_HIDE,
    navigateToGszActivityIncludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN,
    navigateToGszActivityExcludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN,
    closeGszActivityPanel: ModelsGSZ.CLOSE_GSZ_ACTIVITY_PANEL,
    performPopoverCuratorShow: ModelsGSZ.PERFORM_POPOVER_CURATOR_SHOW,
    performPopoverCuratorHide: ModelsGSZ.PERFORM_POPOVER_CURATOR_HIDE,
    performPopoverLimitsShow: ModelsGSZ.PERFORM_POPOVER_LIMITS_SHOW,
    performPopoverLimitsHide: ModelsGSZ.PERFORM_POPOVER_LIMITS_HIDE,
    performInputSortingType: ModelsGSZ.PERFORM_INPUT_SORTING_TYPE,
    performRefresh: ModelsGSZ.PERFORM_REFRESH,
    performFlushLimits: ModelsGSZ.PERFORM_FLUSH_LIMITS,
    performFlush: ModelsGSZ.PERFORM_FLUSH,
    refresh_callGetGsz: ModelsGSZ.REFRESH_CALL_GET_GSZ,
    refresh_callGetGszLimit: ModelsGSZ.REFRESH_CALL_GET_GSZ_LIMIT,
    performGszRefreshPanelHide: ModelsGSZ.PERFORM_GSZ_REFRESH_PANEL_HIDE,
    performPopoverBorrowerListSearchModeEnable: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE,
    performPopoverBorrowerListSearchModeDisable: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE,
    performPopoverBorrowerListShow: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW,
    performPopoverBorrowerListHide: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_HIDE,
    performInputBorrowerListSearch: ModelsGSZ.PERFORM_INPUT_BORROWER_LIST_SEARCH,
    navigateToBorrowerScreen: ModelsGSZ.NAVIGATE_TO_BORROWER_SCREEN,
    navigateBorrowerListBack: ModelsGSZ.NAVIGATE_BORROWER_LIST_BACK,
    performInputMemberListSearch: ModelsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH,
    performMemberListSearch: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH,
    performMemberListSearchModeEnable: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE,
    performMemberListSearchModeDisable: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE,
    performContainerReset: ModelsGSZ.PERFORM_CONTAINER_RESET,
    performCustomerOpen: ModelsGSZ.PERFORM_CUSTOMER_OPEN,
    gszLoadingErrorModalHide: ModelsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE,
    performPopoverBorrowerListCancel: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_CANCEL,

    navigateBackFromGszScreen: ModelsGSZ.NAVIGATE_BACK_FROM_GSZ_SCREEN,
}

export type IGSZProps = IStateProps & IDispatchProps & { testID: string };

function mapStateToProps(state: ModelState.IRootState) {
    return {

        gszLoadingErrorModalIsVisible: state.user.mrmkmcibCRM.reducerGSZ.gszLoadingErrorModalIsVisible,
        currentGsz: state.user.mrmkmcibCRM.reducerGSZ.currentGsz,
        currentGszId: state.user.mrmkmcibCRM.reducerGSZ.currentGszId,
        currentGszMember: state.user.mrmkmcibCRM.reducerGSZ.currentGszMember,
        isVisiblePopoverChief: state.user.mrmkmcibCRM.reducerGSZ.isVisiblePopoverChief,
        isVisiblePopoverSorting: state.user.mrmkmcibCRM.reducerGSZ.isVisiblePopoverSorting,
        isVisiblePopoverLimits: state.user.mrmkmcibCRM.reducerGSZ.isVisiblePopoverLimits,
        isActivityCreateMode: state.user.mrmkmcibCRM.reducerGSZ.isActivityCreateMode,
        isVisiblePopoverCurator: state.user.mrmkmcibCRM.reducerGSZ.isVisiblePopoverCurator,
        inputSortingType: state.user.mrmkmcibCRM.reducerGSZ.inputSortingType,
        isVisiblePopoverBorrowerList: state.user.mrmkmcibCRM.reducerGSZ.isVisiblePopoverBorrowerList,
        isPopoverBorrowerListSearchActive: state.user.mrmkmcibCRM.reducerGSZ.isPopoverBorrowerListSearchActive,
        isRefreshBarActive: state.user.mrmkmcibCRM.reducerGSZ.isRefreshBarActive,
        borrowerFilteredList: state.user.mrmkmcibCRM.reducerGSZ.borrowerFilteredList,
        inputBorrowerListSearch: state.user.mrmkmcibCRM.reducerGSZ.inputBorrowerListSearch,
        currentBorrower: state.user.mrmkmcibCRM.reducerGSZ.currentBorrower,
        memberSearchList: state.user.mrmkmcibCRM.reducerGSZ.memberSearchList,
        isMemberListSearchMode: state.user.mrmkmcibCRM.reducerGSZ.isMemberListSearchMode,
        inputMemberListSearch: state.user.mrmkmcibCRM.reducerGSZ.inputMemberListSearch,
        refresh: state.user.mrmkmcibCRM.reducerGSZ.refresh,
        refreshInProgress: state.user.mrmkmcibCRM.reducerGSZ.refreshInProgress,
        refreshError: state.user.mrmkmcibCRM.reducerGSZ.refreshError,
        currentGszFetching: state.user.mrmkmcibCRM.reducerGSZ.currentGszFetching,
        currentGszError: state.user.mrmkmcibCRM.reducerGSZ.currentGszError,
        currentGszCachedDate: state.user.mrmkmcibCRM.reducerGSZ.currentGszCachedDate,
        gszLimit: state.user.mrmkmcibCRM.reducerGSZ.gszLimit,
        gszLimitFetching: state.user.mrmkmcibCRM.reducerGSZ.gszLimitFetching,
        gszLimitError: state.user.mrmkmcibCRM.reducerGSZ.gszLimitError,
        gszLimitCachedDate: state.user.mrmkmcibCRM.reducerGSZ.gszLimitCachedDate,
        organizationType: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.organizationType,
        gszNavigationHistory: state.user.mrmkmcibCRM.reducerGSZ.gszNavigationHistory,


    }
}

function mapDispatchToProps(dispatch: Function) {
    return {

        navigateToGszScreen: (gszId: string,) => {
            dispatch(thunkGSZ.navigateToGszScreen(gszId,))
        },
        performPopoverChiefShow: () => {
            dispatch(thunkGSZ.performPopoverChiefShow())
        },
        performPopoverChiefHide: () => {
            dispatch(thunkGSZ.performPopoverChiefHide())
        },
        performPopoverLimitsShow: () => {
            dispatch(thunkGSZ.performPopoverLimitsShow())
        },
        performPopoverLimitsHide: () => {
            dispatch(thunkGSZ.performPopoverLimitsHide())
        },
        performPopoverSortingShow: () => {
            dispatch(thunkGSZ.performPopoverSortingShow())
        },
        performPopoverSortingHide: () => {
            dispatch(thunkGSZ.performPopoverSortingHide())
        },
        gszLoadingErrorModalHide: (withPopContent: boolean = false) => {
            dispatch(thunkGSZ.gszLoadingErrorModalHide(withPopContent))
        },
        navigateToGszActivityIncludeScreen: () => {
            dispatch(thunkGSZ.navigateToGszActivityIncludeScreen())
        },
        navigateToGszActivityExcludeScreen: () => {
            dispatch(thunkGSZ.navigateToGszActivityExcludeScreen())
        },
        closeGszActivityPanel: () => {
            dispatch(thunkGSZ.closeGszActivityPanel())
        },
        performPopoverCuratorShow: () => {
            dispatch(thunkGSZ.performPopoverCuratorShow())
        },
        performPopoverCuratorHide: () => {
            dispatch(thunkGSZ.performPopoverCuratorHide())
        },
        performInputSortingType: (value: Enums.GszMemberListSortingType,) => {
            dispatch(thunkGSZ.performInputSortingType(value,))
        },
        performRefresh: () => {
            dispatch(thunkGSZ.performRefresh())
        },
        performFlushLimits: () => {
            dispatch(thunkGSZ.performFlushLimits())
        },
        refresh_callGetGsz: () => {
            dispatch(thunkGSZ.refresh_callGetGsz())
        },
        refresh_callGetGszLimit: () => {
            dispatch(thunkGSZ.refresh_callGetGszLimit())
        },
        performGszRefreshPanelHide: () => {
            dispatch(thunkGSZ.performGszRefreshPanelHide())
        },
        performPopoverBorrowerListSearchModeEnable: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListSearchModeEnable())
        },
        performPopoverBorrowerListSearchModeDisable: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListSearchModeDisable())
        },
        performPopoverBorrowerListShow: (value: Models.GszMember,) => {
            dispatch(thunkGSZ.performPopoverBorrowerListShow(value,))
        },
        performPopoverBorrowerListHide: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListHide())
        },
        performInputBorrowerListSearch: (value: string,) => {
            dispatch(thunkGSZ.performInputBorrowerListSearch(value,))
        },
        navigateToBorrowerScreen: (borrower: Models.Borrower) => {
            dispatch(thunkGSZ.navigateToBorrowerScreen(borrower))
        },
        navigateBorrowerListBack: () => {
            dispatch(thunkGSZ.navigateBorrowerListBack())
        },
        performFlush: () => {
            dispatch(thunkGSZ.performFlush())
        },
        performInputMemberListSearch: (value: string) => {
            dispatch(thunkGSZ.performInputMemberListSearch(value))
        },
        performMemberListSearch: () => {
            dispatch(thunkGSZ.performMemberListSearch())
        },
        performMemberListSearchModeEnable: () => {
            dispatch(thunkGSZ.performMemberListSearchModeEnable())
        },
        performMemberListSearchModeDisable: () => {
            dispatch(thunkGSZ.performMemberListSearchModeDisable())
        },
        performContainerReset: () => {
            dispatch(thunkGSZ.performContainerReset())
        },
        performCustomerOpen: (customerId: string) => {
            dispatch(thunkGSZ.performCustomerOpen(customerId))
        },
        navigateBackFromGszScreen: () => {
            dispatch(thunkGSZ.navigateBackFromGszScreen())
        },
        performPopoverBorrowerListCancel: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListCancel())
        }
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerGSZ)
