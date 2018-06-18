/**
 * Models for GSZ container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models} from "mrmkmcib-crm"
import {Enums} from '../Enums'
import Error from "../models/Error"


// TODO Describe models used in GSZ actions and thunks.


const defaultState = {
    get state(): IGSZState {
        return {
			gszActivityCreateMode: Enums.GSZActivityCreateMode.None,
            gszLoadingErrorModalIsVisible: false,  // State parameter displayed in "GSZ" screen.
            currentGsz: defaultValues.Gsz,  // State parameter displayed in "GSZ" screen.
            currentGszId: '',  // State parameter displayed in "GSZ" screen.
            currentGszMember: defaultValues.GszMember,  // State parameter displayed in "GSZ" screen.
            isVisiblePopoverChief: false,  // State parameter displayed in "GSZ" screen.
            isVisiblePopoverSorting: false,  // State parameter displayed in "GSZ" screen.
            isVisiblePopoverLimits: false,  // State parameter displayed in "GSZ" screen.
            isActivityCreateMode: false,  // State parameter displayed in "GSZ" screen.
            isVisiblePopoverCurator: false,  // State parameter displayed in "GSZ" screen.
            inputSortingType: Enums.GszMemberListSortingType.ByName,  // State parameter displayed in "GSZ" screen.
            isVisiblePopoverBorrowerList: false,  // State parameter displayed in "GSZ" screen.
            isPopoverBorrowerListSearchActive: false,  // State parameter displayed in "GSZ" screen.
            isRefreshBarActive: true,  // State parameter displayed in "GSZ" screen.
            borrowerFilteredList: defaultValues.BorrowerList,  // State parameter displayed in "GSZ" screen.
            inputBorrowerListSearch: '',  // State parameter displayed in "GSZ" screen.
            currentBorrower: defaultValues.Borrower,  // State parameter displayed in "GSZ" screen.
            memberSearchList: defaultValues.GszMemberList,  // State parameter displayed in "GSZ" screen. GSZ member list with applied search query and filters.
            isMemberListSearchMode: false,  // State parameter displayed in "GSZ" screen.
            inputMemberListSearch: '',  // State parameter displayed in "GSZ" screen.
            refresh: defaultValues.boolean,  // Result for "performRefresh" thunk.
            refreshInProgress: false,  // Progress indicator for thunk chain "performRefresh".
            refreshError: null,  // Error info for thunk chain "performRefresh".
            currentGszFetching: false,  // Fetching indicator for network thunk chain "refresh_callGetGsz".
            currentGszError: null,  // Network error info for thunk chain "refresh_callGetGsz".
            currentGszCachedDate: null,  // Response data cache date for network thunk chain "refresh_callGetGsz".
            gszLimit: defaultValues.GszLimit,  // Fetch result for "refresh_callGetGszLimit" thunk.
            gszLimitFetching: false,  // Fetching indicator for network thunk chain "refresh_callGetGszLimit".
            gszLimitError: null,  // Network error info for thunk chain "refresh_callGetGszLimit".
            gszLimitCachedDate: null,  // Response data cache date for network thunk chain "refresh_callGetGszLimit".
            gszNavigationHistory: [],


            // TODO Describe GSZ reducer state.


        }
    }
}

export interface IGSZState {

	gszActivityCreateMode: Enums.GSZActivityCreateMode; // State parameter displayed in "GSZ" screen.
    gszLoadingErrorModalIsVisible: boolean,  // State parameter displayed in "GSZ" screen.
    currentGsz: Models.Gsz,  // State parameter displayed in "GSZ" screen.
    currentGszId: string,  // State parameter displayed in "GSZ" screen.
    currentGszMember: Models.GszMember,  // State parameter displayed in "GSZ" screen.
    isVisiblePopoverChief: boolean,  // State parameter displayed in "GSZ" screen.
    isVisiblePopoverSorting: boolean,  // State parameter displayed in "GSZ" screen.
    isVisiblePopoverLimits: boolean,  // State parameter displayed in "GSZ" screen.
    isActivityCreateMode: boolean,  // State parameter displayed in "GSZ" screen.
    isVisiblePopoverCurator: boolean,  // State parameter displayed in "GSZ" screen.
    inputSortingType: Enums.GszMemberListSortingType,  // State parameter displayed in "GSZ" screen.
    isVisiblePopoverBorrowerList: boolean,  // State parameter displayed in "GSZ" screen.
    isPopoverBorrowerListSearchActive: boolean,  // State parameter displayed in "GSZ" screen.
    isRefreshBarActive: boolean,  // State parameter displayed in "GSZ" screen.
    borrowerFilteredList: Models.BorrowerList,  // State parameter displayed in "GSZ" screen.
    inputBorrowerListSearch: string,  // State parameter displayed in "GSZ" screen.
    currentBorrower: Models.Borrower,  // State parameter displayed in "GSZ" screen.
    memberSearchList: Models.GszMemberList,  // State parameter displayed in "GSZ" screen. GSZ member list with applied search query and filters.
    isMemberListSearchMode: boolean,  // State parameter displayed in "GSZ" screen.
    inputMemberListSearch: string,  // State parameter displayed in "GSZ" screen.
    refresh: boolean,  // Result for "performRefresh" thunk.
    refreshInProgress: boolean,  // Progress indicator for thunk chain "performRefresh".
    refreshError: Error | null,  // Error info for thunk chain "performRefresh".
    currentGszFetching: boolean,  // Fetching indicator for network thunk chain "refresh_callGetGsz".
    currentGszError: Error | null,  // Network error info for thunk chain "refresh_callGetGsz".
    currentGszCachedDate: Date | null,  // Response data cache date for network thunk chain "refresh_callGetGsz".
    gszLimit: Models.GszLimit,  // Fetch result for "refresh_callGetGszLimit" thunk.
    gszLimitFetching: boolean,  // Fetching indicator for network thunk chain "refresh_callGetGszLimit".
    gszLimitError: Error | null,  // Network error info for thunk chain "refresh_callGetGszLimit".
    gszLimitCachedDate: Date | null,  // Response data cache date for network thunk chain "refresh_callGetGszLimit".
    gszNavigationHistory: Models.GszHistory[],


    // TODO Describe GSZ reducer state.


}

export const initialState = {
    get state(): IGSZState {
        return defaultState.state
    }
}


export interface NAVIGATE_TO_GSZ_SCREEN {
    (gszId: string,): void;
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
    (value: Enums.GszMemberListSortingType,): void;
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
    (value: Models.GszMember,): void;
}

export interface PERFORM_POPOVER_BORROWER_LIST_HIDE {
    (): void;
}

export interface PERFORM_INPUT_BORROWER_LIST_SEARCH {
    (value: string,): void;
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
