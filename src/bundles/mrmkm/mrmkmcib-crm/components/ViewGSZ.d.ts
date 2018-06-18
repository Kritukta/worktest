import React from 'react';
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import * as ModelsGSZ from "../models/ModelsGSZ";
import Error from "../models/Error";
export interface IProps {
    navigateToGszScreen: ModelsGSZ.NAVIGATE_TO_GSZ_SCREEN;
    performPopoverChiefShow: ModelsGSZ.PERFORM_POPOVER_CHIEF_SHOW;
    performPopoverChiefHide: ModelsGSZ.PERFORM_POPOVER_CHIEF_HIDE;
    performPopoverSortingShow: ModelsGSZ.PERFORM_POPOVER_SORTING_SHOW;
    performPopoverSortingHide: ModelsGSZ.PERFORM_POPOVER_SORTING_HIDE;
    navigateToGszActivityIncludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN;
    navigateToGszActivityExcludeScreen: ModelsGSZ.NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN;
    closeGszActivityPanel: ModelsGSZ.CLOSE_GSZ_ACTIVITY_PANEL;
    performPopoverLimitsShow: ModelsGSZ.PERFORM_POPOVER_LIMITS_SHOW;
    performPopoverLimitsHide: ModelsGSZ.PERFORM_POPOVER_LIMITS_HIDE;
    performPopoverCuratorShow: ModelsGSZ.PERFORM_POPOVER_CURATOR_SHOW;
    performPopoverCuratorHide: ModelsGSZ.PERFORM_POPOVER_CURATOR_HIDE;
    performInputSortingType: ModelsGSZ.PERFORM_INPUT_SORTING_TYPE;
    performRefresh: ModelsGSZ.PERFORM_REFRESH;
    performFlushLimits: ModelsGSZ.PERFORM_REFRESH;
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
    navigateBackFromGszScreen: ModelsGSZ.NAVIGATE_BACK_FROM_GSZ_SCREEN;
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
    gszLoadingErrorModalIsVisible: boolean;
    gszLoadingErrorModalHide: ModelsGSZ.GSZ_LOADING_ERROR_MODAL_HIDE;
    currentGszCachedDate: Date | null;
    gszLimit: Models.GszLimit;
    gszLimitFetching: boolean;
    gszLimitError: Error | null;
    gszLimitCachedDate: Date | null;
    performCustomerOpen: ModelsGSZ.PERFORM_CUSTOMER_OPEN;
    performFlush: ModelsGSZ.PERFORM_FLUSH;
    testID: string;
    organizationType: ModelsApp.Classifier;
    performPopoverBorrowerListCancel: ModelsGSZ.PERFORM_POPOVER_BORROWER_LIST_CANCEL;
}
declare const ViewGSZ: React.StatelessComponent<IProps>;
export default ViewGSZ;