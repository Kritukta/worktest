/*
 * Created by Burnaev M.U.
 */
import React from 'react';
import { connect } from 'react-redux';
import * as thunkGSZ from '../thunk/ThunkGSZ';
import ViewGSZ from '../components/ViewGSZ';
/*
 * Container "GSZ". GSZ card screen.
 */
class ContainerGSZ extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(ViewGSZ, { testID: 'test-id-container-GSZ', navigateToGszScreen: this.props.navigateToGszScreen, performPopoverChiefShow: this.props.performPopoverChiefShow, performPopoverChiefHide: this.props.performPopoverChiefHide, performPopoverSortingShow: this.props.performPopoverSortingShow, performPopoverSortingHide: this.props.performPopoverSortingHide, gszLoadingErrorModalHide: this.props.gszLoadingErrorModalHide, navigateToGszActivityIncludeScreen: this.props.navigateToGszActivityIncludeScreen, navigateToGszActivityExcludeScreen: this.props.navigateToGszActivityExcludeScreen, closeGszActivityPanel: this.props.closeGszActivityPanel, performPopoverCuratorShow: this.props.performPopoverCuratorShow, performPopoverCuratorHide: this.props.performPopoverCuratorHide, performPopoverLimitsHide: this.props.performPopoverLimitsHide, performPopoverLimitsShow: this.props.performPopoverLimitsShow, performInputSortingType: this.props.performInputSortingType, performRefresh: this.props.performRefresh, performFlushLimits: this.props.performFlushLimits, refresh_callGetGsz: this.props.refresh_callGetGsz, refresh_callGetGszLimit: this.props.refresh_callGetGszLimit, performPopoverBorrowerListShow: this.props.performPopoverBorrowerListShow, performPopoverBorrowerListHide: this.props.performPopoverBorrowerListHide, performInputBorrowerListSearch: this.props.performInputBorrowerListSearch, navigateToBorrowerScreen: this.props.navigateToBorrowerScreen, navigateBorrowerListBack: this.props.navigateBorrowerListBack, performInputMemberListSearch: this.props.performInputMemberListSearch, performMemberListSearch: this.props.performMemberListSearch, performMemberListSearchModeEnable: this.props.performMemberListSearchModeEnable, performMemberListSearchModeDisable: this.props.performMemberListSearchModeDisable, performContainerReset: this.props.performContainerReset, navigateBackFromGszScreen: this.props.navigateBackFromGszScreen, gszLoadingErrorModalIsVisible: this.props.gszLoadingErrorModalIsVisible, currentGsz: this.props.currentGsz, performFlush: this.props.performFlush, currentGszId: this.props.currentGszId, currentGszMember: this.props.currentGszMember, isVisiblePopoverChief: this.props.isVisiblePopoverChief, isVisiblePopoverSorting: this.props.isVisiblePopoverSorting, isVisiblePopoverLimits: this.props.isVisiblePopoverLimits, isActivityCreateMode: this.props.isActivityCreateMode, isVisiblePopoverCurator: this.props.isVisiblePopoverCurator, inputSortingType: this.props.inputSortingType, isVisiblePopoverBorrowerList: this.props.isVisiblePopoverBorrowerList, isRefreshBarActive: this.props.isRefreshBarActive, isPopoverBorrowerListSearchActive: this.props.isPopoverBorrowerListSearchActive, performGszRefreshPanelHide: this.props.performGszRefreshPanelHide, performPopoverBorrowerListSearchModeEnable: this.props.performPopoverBorrowerListSearchModeEnable, performPopoverBorrowerListSearchModeDisable: this.props.performPopoverBorrowerListSearchModeDisable, borrowerFilteredList: this.props.borrowerFilteredList, inputBorrowerListSearch: this.props.inputBorrowerListSearch, currentBorrower: this.props.currentBorrower, memberSearchList: this.props.memberSearchList, isMemberListSearchMode: this.props.isMemberListSearchMode, inputMemberListSearch: this.props.inputMemberListSearch, refresh: this.props.refresh, refreshInProgress: this.props.refreshInProgress, refreshError: this.props.refreshError, currentGszFetching: this.props.currentGszFetching, currentGszError: this.props.currentGszError, currentGszCachedDate: this.props.currentGszCachedDate, gszLimit: this.props.gszLimit, gszLimitFetching: this.props.gszLimitFetching, gszLimitError: this.props.gszLimitError, gszLimitCachedDate: this.props.gszLimitCachedDate, performCustomerOpen: this.props.performCustomerOpen, organizationType: this.props.organizationType, performPopoverBorrowerListCancel: this.props.performPopoverBorrowerListCancel }));
    }
}
function mapStateToProps(state) {
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
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToGszScreen: (gszId) => {
            dispatch(thunkGSZ.navigateToGszScreen(gszId));
        },
        performPopoverChiefShow: () => {
            dispatch(thunkGSZ.performPopoverChiefShow());
        },
        performPopoverChiefHide: () => {
            dispatch(thunkGSZ.performPopoverChiefHide());
        },
        performPopoverLimitsShow: () => {
            dispatch(thunkGSZ.performPopoverLimitsShow());
        },
        performPopoverLimitsHide: () => {
            dispatch(thunkGSZ.performPopoverLimitsHide());
        },
        performPopoverSortingShow: () => {
            dispatch(thunkGSZ.performPopoverSortingShow());
        },
        performPopoverSortingHide: () => {
            dispatch(thunkGSZ.performPopoverSortingHide());
        },
        gszLoadingErrorModalHide: (withPopContent = false) => {
            dispatch(thunkGSZ.gszLoadingErrorModalHide(withPopContent));
        },
        navigateToGszActivityIncludeScreen: () => {
            dispatch(thunkGSZ.navigateToGszActivityIncludeScreen());
        },
        navigateToGszActivityExcludeScreen: () => {
            dispatch(thunkGSZ.navigateToGszActivityExcludeScreen());
        },
        closeGszActivityPanel: () => {
            dispatch(thunkGSZ.closeGszActivityPanel());
        },
        performPopoverCuratorShow: () => {
            dispatch(thunkGSZ.performPopoverCuratorShow());
        },
        performPopoverCuratorHide: () => {
            dispatch(thunkGSZ.performPopoverCuratorHide());
        },
        performInputSortingType: (value) => {
            dispatch(thunkGSZ.performInputSortingType(value));
        },
        performRefresh: () => {
            dispatch(thunkGSZ.performRefresh());
        },
        performFlushLimits: () => {
            dispatch(thunkGSZ.performFlushLimits());
        },
        refresh_callGetGsz: () => {
            dispatch(thunkGSZ.refresh_callGetGsz());
        },
        refresh_callGetGszLimit: () => {
            dispatch(thunkGSZ.refresh_callGetGszLimit());
        },
        performGszRefreshPanelHide: () => {
            dispatch(thunkGSZ.performGszRefreshPanelHide());
        },
        performPopoverBorrowerListSearchModeEnable: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListSearchModeEnable());
        },
        performPopoverBorrowerListSearchModeDisable: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListSearchModeDisable());
        },
        performPopoverBorrowerListShow: (value) => {
            dispatch(thunkGSZ.performPopoverBorrowerListShow(value));
        },
        performPopoverBorrowerListHide: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListHide());
        },
        performInputBorrowerListSearch: (value) => {
            dispatch(thunkGSZ.performInputBorrowerListSearch(value));
        },
        navigateToBorrowerScreen: (borrower) => {
            dispatch(thunkGSZ.navigateToBorrowerScreen(borrower));
        },
        navigateBorrowerListBack: () => {
            dispatch(thunkGSZ.navigateBorrowerListBack());
        },
        performFlush: () => {
            dispatch(thunkGSZ.performFlush());
        },
        performInputMemberListSearch: (value) => {
            dispatch(thunkGSZ.performInputMemberListSearch(value));
        },
        performMemberListSearch: () => {
            dispatch(thunkGSZ.performMemberListSearch());
        },
        performMemberListSearchModeEnable: () => {
            dispatch(thunkGSZ.performMemberListSearchModeEnable());
        },
        performMemberListSearchModeDisable: () => {
            dispatch(thunkGSZ.performMemberListSearchModeDisable());
        },
        performContainerReset: () => {
            dispatch(thunkGSZ.performContainerReset());
        },
        performCustomerOpen: (customerId) => {
            dispatch(thunkGSZ.performCustomerOpen(customerId));
        },
        navigateBackFromGszScreen: () => {
            dispatch(thunkGSZ.navigateBackFromGszScreen());
        },
        performPopoverBorrowerListCancel: () => {
            dispatch(thunkGSZ.performPopoverBorrowerListCancel());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerGSZ);
//# sourceMappingURL=ContainerGSZ.js.map