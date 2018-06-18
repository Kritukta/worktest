/// <reference types="react-redux" />
import React from 'react';
import { Models as ModelsApp } from "mrmkmcib-app";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import * as ModelsGSZ from "../models/ModelsGSZ";
import Error from "../models/Error";
export interface IStateProps {
    gszLoadingErrorModalIsVisible: boolean;
    currentGsz: Models.Gsz;
    currentGszId: string;
    currentGszMember: Models.GszMember;
    isVisiblePopoverChief: boolean;
    isVisiblePopoverSorting: boolean;
    isVisiblePopoverLimits: boolean;
    isActivityCreateMode: boolean;
    isVisiblePopoverCurator: boolean;
    isPopoverBorrowerListSearchActive: boolean;
    isRefreshBarActive: boolean;
    inputSortingType: Enums.GszMemberListSortingType;
    isVisiblePopoverBorrowerList: boolean;
    borrowerFilteredList: Models.BorrowerList;
    inputBorrowerListSearch: string;
    currentBorrower: Models.Borrower;
    memberSearchList: Models.GszMemberList;
    isMemberListSearchMode: boolean;
    inputMemberListSearch: string;
    refresh: boolean;
    refreshInProgress: boolean;
    refreshError: Error | null;
    currentGszFetching: boolean;
    currentGszError: Error | null;
    currentGszCachedDate: Date | null;
    gszLimit: Models.GszLimit;
    gszLimitFetching: boolean;
    gszLimitError: Error | null;
    gszLimitCachedDate: Date | null;
    organizationType: ModelsApp.Classifier;
    gszNavigationHistory: Models.GszHistory[];
}
export interface IDispatchProps {
    navigateToGszScreen: ModelsGSZ.NAVIGATE_TO_GSZ_SCREEN;
    performPopoverChiefShow: ModelsGSZ.PERFORM_POPOVER_CHIEF_SHOW;
    performPopoverChiefHide: ModelsGSZ.PERFORM_POPOVER_CHIEF_HIDE;
    performPopoverSortingShow: ModelsGSZ.PERFORM_POPOVER_SORTING_SHOW;
    performPopoverSortingHide: ModelsGSZ.PERFORM_POPOVER_SORTING_HIDE;
    navigateToGszActivityIncludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN;
    navigateToGszActivityExcludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN;
    closeGszActivityPanel: ModelsGSZ.CLOSE_GSZ_ACTIVITY_PANEL;
    performPopoverCuratorShow: ModelsGSZ.PERFORM_POPOVER_CURATOR_SHOW;
    performPopoverCuratorHide: ModelsGSZ.PERFORM_POPOVER_CURATOR_HIDE;
    performPopoverLimitsShow: ModelsGSZ.PERFORM_POPOVER_LIMITS_SHOW;
    performPopoverLimitsHide: ModelsGSZ.PERFORM_POPOVER_LIMITS_HIDE;
    performInputSortingType: ModelsGSZ.PERFORM_INPUT_SORTING_TYPE;
    performRefresh: ModelsGSZ.PERFORM_REFRESH;
    performFlushLimits: ModelsGSZ.PERFORM_FLUSH_LIMITS;
    performFlush: ModelsGSZ.PERFORM_FLUSH;
    refresh_callGetGsz: ModelsGSZ.REFRESH_CALL_GET_GSZ;
    refresh_callGetGszLimit: ModelsGSZ.REFRESH_CALL_GET_GSZ_LIMIT;
    performGszRefreshPanelHide: ModelsGSZ.PERFORM_GSZ_REFRESH_PANEL_HIDE;
    performPopoverBorrowerListSearchModeEnable: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE;
    performPopoverBorrowerListSearchModeDisable: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE;
    performPopoverBorrowerListShow: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_SHOW;
    performPopoverBorrowerListHide: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_HIDE;
    performInputBorrowerListSearch: ModelsGSZ.PERFORM_INPUT_BORROWER_LIST_SEARCH;
    navigateToBorrowerScreen: ModelsGSZ.NAVIGATE_TO_BORROWER_SCREEN;
    navigateBorrowerListBack: ModelsGSZ.NAVIGATE_BORROWER_LIST_BACK;
    performInputMemberListSearch: ModelsGSZ.PERFORM_INPUT_MEMBER_LIST_SEARCH;
    performMemberListSearch: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH;
    performMemberListSearchModeEnable: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE;
    performMemberListSearchModeDisable: ModelsGSZ.PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE;
    performContainerReset: ModelsGSZ.PERFORM_CONTAINER_RESET;
    performCustomerOpen: ModelsGSZ.PERFORM_CUSTOMER_OPEN;
    gszLoadingErrorModalHide: ModelsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE;
    performPopoverBorrowerListCancel: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_CANCEL;
    navigateBackFromGszScreen: ModelsGSZ.NAVIGATE_BACK_FROM_GSZ_SCREEN;
}
export declare type IGSZProps = IStateProps & IDispatchProps & {
    testID: string;
};
declare const _default: React.ComponentClass<Pick<IStateProps & IDispatchProps & {
    testID: string;
}, never> & {
    testID: string;
}> & {
    WrappedComponent: any;
};
export default _default;
