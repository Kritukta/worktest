import * as ModelState from "../models/Models";
import { Models } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import Error from "../models/Error";
export declare const navigateToGszScreen: (gszId: string) => (dispatch: Function) => void;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to navigate back from GSZ screen
 */
export declare const navigateBackFromGszScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to set currentGszId
 * @param {string} gszId
 */
export declare const setCurrentGszId: (gszId: string) => (dispatch: Function) => void;
/**
 * Thunk dispatched by "GSZ" screen. Thunk used to reset gszNavigationHistory
 */
export declare const resetGszNavigationHistory: () => (dispatch: Function) => void;
export declare const performPopoverChiefShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerOpen: (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverChiefHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverSortingShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverSortingHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const gszLoadingErrorModalHide: (withPopContent?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverLimitsShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverLimitsHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToGszActivityIncludeScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToGszActivityExcludeScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const resetGszActivityCreateMode: () => (dispatch: Function) => void;
export declare const closeGszActivityPanel: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverCuratorShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverCuratorHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputSortingType: (value: Enums.GszMemberListSortingType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFlush: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFlushLimits: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_callGetGsz: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_callGetGszLimit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverBorrowerListShow: (value: Models.GszMember) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performGszRefreshPanelHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performGszRefreshPanelShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverBorrowerListSearchModeEnable: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverBorrowerListSearchModeDisable: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverBorrowerListHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputBorrowerListSearch: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToBorrowerScreen: (borrower: Models.Borrower) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBorrowerListBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputMemberListSearch: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performMemberListSearch: () => (dispatch: Function) => void;
export declare const performMemberListSearchModeEnable: () => (dispatch: Function) => void;
export declare const performMemberListSearchModeDisable: () => (dispatch: Function) => void;
export declare const performContainerReset: () => (dispatch: Function) => void;
export declare const performPopoverBorrowerListCancel: () => (dispatch: Function) => void;
export declare const performInputMemberListSearchReset: () => (dispatch: Function) => void;
