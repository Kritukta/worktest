/**
 * Models for GSZ container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Error from "../models/Error";
export interface IGSZState {
    gszActivityCreateMode: Enums.GSZActivityCreateMode;
    gszLoadingErrorModalIsVisible: boolean;
    currentGsz: Models.Gsz;
    currentGszId: string;
    currentGszMember: Models.GszMember;
    isVisiblePopoverChief: boolean;
    isVisiblePopoverSorting: boolean;
    isVisiblePopoverLimits: boolean;
    isActivityCreateMode: boolean;
    isVisiblePopoverCurator: boolean;
    inputSortingType: Enums.GszMemberListSortingType;
    isVisiblePopoverBorrowerList: boolean;
    isPopoverBorrowerListSearchActive: boolean;
    isRefreshBarActive: boolean;
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
    gszNavigationHistory: Models.GszHistory[];
}
export declare const initialState: {
    readonly state: IGSZState;
};
export interface NAVIGATE_TO_GSZ_SCREEN {
    (gszId: string): void;
}
export interface PERFORM_POPOVER_CHIEF_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_CHIEF_HIDE {
    (): void;
}
export interface PERFORM_FLUSH {
    (): void;
}
export interface PERFORM_POPOVER_SORTING_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_SORTING_HIDE {
    (): void;
}
export interface NAVIGATE_TO_GSZ_ACTIVITY_INCLUDE_SCREEN {
    (): void;
}
export interface NAVIGATE_TO_GSZ_ACTIVITY_EXCLUDE_SCREEN {
    (): void;
}
export interface CLOSE_GSZ_ACTIVITY_PANEL {
    (): void;
}
export interface PERFORM_POPOVER_CURATOR_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_CURATOR_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_LIMITS_SHOW {
    (): void;
}
export interface PERFORM_POPOVER_LIMITS_HIDE {
    (): void;
}
export interface PERFORM_INPUT_SORTING_TYPE {
    (value: Enums.GszMemberListSortingType): void;
}
export interface PERFORM_REFRESH {
    (): void;
}
export interface PERFORM_FLUSH_LIMITS {
    (): void;
}
export interface REFRESH_CALL_GET_GSZ {
    (): void;
}
export interface REFRESH_CALL_GET_GSZ_LIMIT {
    (): void;
}
export interface PERFORM_GSZ_REFRESH_PANEL_HIDE {
    (): void;
}
export interface PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_ENABLE {
    (): void;
}
export interface PERFORM_POPOVER_BORROWER_LIST_SEARCH_MODE_DISABLE {
    (): void;
}
export interface PERFORM_POPOVER_BORROWER_LIST_SHOW {
    (value: Models.GszMember): void;
}
export interface PERFORM_POPOVER_BORROWER_LIST_HIDE {
    (): void;
}
export interface PERFORM_INPUT_BORROWER_LIST_SEARCH {
    (value: string): void;
}
export interface NAVIGATE_TO_BORROWER_SCREEN {
    (borrower: Models.Borrower): void;
}
export interface NAVIGATE_BORROWER_LIST_BACK {
    (): void;
}
export interface PERFORM_INPUT_MEMBER_LIST_SEARCH {
    (value: string): void;
}
export interface PERFORM_MEMBER_LIST_SEARCH {
    (): void;
}
export interface PERFORM_MEMBER_LIST_SEARCH_MODE_ENABLE {
    (): void;
}
export interface PERFORM_MEMBER_LIST_SEARCH_MODE_DISABLE {
    (): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
export interface PERFORM_CUSTOMER_OPEN {
    (customerId: string): void;
}
export interface GSZ_LOADING_ERROR_MODAL_HIDE {
    (withPopContent: boolean): void;
}
export interface PERFORM_POPOVER_BORROWER_LIST_CANCEL {
    (): void;
}
export interface NAVIGATE_BACK_FROM_GSZ_SCREEN {
    (): void;
}
