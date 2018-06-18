/**
 * Actions of DealAttachments container.
 *
 * @author Vladykin A. S.
 * @see
 */
import Action from '../models/Action';
import Response from '../models/Response';
import Error from '../models/Error';
import { Models } from 'mrmkmcib-crm';
export declare const SET_CURRENT_FILE_ID = "DEAL_ATTACHMENTS_CONTAINER_SET_CURRENT_FILE_ID";
export declare const DOWNLOAD_ATTACHMENT_INIT = "DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_INIT";
export declare const DOWNLOAD_ATTACHMENT_SUCCESS = "DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_SUCCESS";
export declare const DOWNLOAD_ATTACHMENT_FAILURE = "DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_FAILURE";
export declare const DECRYPT_ATTACHMENT_INIT = "DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_INIT";
export declare const DECRYPT_ATTACHMENT_SUCCESS = "DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_SUCCESS";
export declare const DECRYPT_ATTACHMENT_FAILURE = "DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_FAILURE";
export declare const PERFORM_SEARCH_MODE_ENABLE = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_SEARCH_MODE_ENABLE";
export declare const PERFORM_SEARCH_MODE_DISABLE = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_SEARCH_MODE_DISABLE";
export declare const CALL_GET_DEAL_ATTACHMENTS_LIST = "DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST";
export declare const CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST = "DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST";
export declare const CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS = "DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS";
export declare const CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE = "DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE";
export declare const PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH";
export declare const PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH";
export declare const PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW";
export declare const PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE";
export declare const PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST";
export declare const PERFORM_REFRESH_ATTACHMENTS_LIST = "DEAL_ATTACHMENTS_CONTAINER_CALL_REFRESH_DEAL_ATTACHMENTS_LIST";
export declare const PERFORM_ATTACHMENT_RELOAD = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_ATTACHMENT_RELOAD";
export declare const NAVIGATE_TO_FILEVIEWER_SCREEN = "DEAL_ATTACHMENTS_CONTAINER_NAVIGATE_TO_FILEVIEWER_SCREEN";
export declare const PERFORM_SHOW_MODAL_FILETYPE_ERROR = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_SHOW_MODAL_FILETYPE_ERROR";
export declare const PERFORM_HIDE_MODAL_FILETYPE_ERROR = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_HIDE_MODAL_FILETYPE_ERROR";
export declare const PERFORM_SET_CURRENT_ATTACHMENT = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_SET_CURRENT_ATTACHMENT";
export declare const PERFORM_RESET_CURRENT_ATTACHMENT = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_RESET_CURRENT_ATTACHMENT";
export declare const PERFORM_UNSUPPORTED_TYPE_BAR_HIDE = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_UNSUPPORTED_TYPE_BAR_HIDE";
export declare const PERFORM_SHOW_AUTH_WARNING = "DEAL_ATTACHMENTS_CONTAINER_PERFORM_SHOW_AUTH_WARNING";
export declare const NAVIGATE_TO_AUTH_WARNING_SCREEN = "DEAL_ATTACHMENTS_CONTAINER_NAVIGATE_TO_AUTH_WARNING_SCREEN";
/**
 * Action dispatched in thunks "downloadAttachment" and "navigateToAttachmentsFileViewerScreen".Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export declare type SET_CURRENT_FILE_ID = {
    file: Models.DealAttachment;
};
export declare const setCurrentFileId: (file: Models.DealAttachment) => Action<SET_CURRENT_FILE_ID>;
/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export declare type DOWNLOAD_ATTACHMENT_INIT = {
    file: Models.DealAttachment;
};
export declare const downloadAttachmentInit: (file: Models.DealAttachment) => Action<DOWNLOAD_ATTACHMENT_INIT>;
/**
 * Action dispatched on success in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export declare type DOWNLOAD_ATTACHMENT_SUCCESS = {
    file: Models.DealAttachment;
};
export declare const downloadAttachmentSuccess: (file: Models.DealAttachment) => Action<DOWNLOAD_ATTACHMENT_SUCCESS>;
/**
 * Action dispatched on failure in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export declare type DOWNLOAD_ATTACHMENT_FAILURE = {
    file: Models.DealAttachment;
};
export declare const downloadAttachmentFailure: (file: Models.DealAttachment) => Action<DOWNLOAD_ATTACHMENT_FAILURE>;
/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 * @param {Models.DealAttachment} file .
 */
export declare type DECRYPT_ATTACHMENT_INIT = {
    file: Models.DealAttachment;
};
export declare const decryptAttachmentInit: (file: Models.DealAttachment) => Action<DECRYPT_ATTACHMENT_INIT>;
/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 */
export declare type DECRYPT_ATTACHMENT_SUCCESS = {};
export declare const decryptAttachmentSuccess: () => Action<DECRYPT_ATTACHMENT_SUCCESS>;
/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export declare type DECRYPT_ATTACHMENT_FAILURE = {
    file: Models.DealAttachment;
};
export declare const decryptAttachmentFailure: (file: Models.DealAttachment) => Action<DECRYPT_ATTACHMENT_FAILURE>;
/**
 * Action dispatched in thunk "performSearchModeEnable". Thunk dispatched by "DealAttachments" screen.
 */
export declare type PERFORM_SEARCH_MODE_ENABLE = {};
export declare const performSearchModeEnable: () => Action<PERFORM_SEARCH_MODE_ENABLE>;
/**
 * Action dispatched in thunk "performSearchModeDisable". Thunk dispatched by "DealAttachments" screen.
 */
export declare type PERFORM_SEARCH_MODE_DISABLE = {};
export declare const performSearchModeDisable: () => Action<PERFORM_SEARCH_MODE_DISABLE>;
/**
 * Action dispatched in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 */
export declare type CALL_GET_DEAL_ATTACHMENTS_LIST = {};
export declare const callGetDealAttachments: () => Action<CALL_GET_DEAL_ATTACHMENTS_LIST>;
/**
 * Action dispatched in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 */
export declare type CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST = {};
export declare const callGetDealAttachmentsRequest: () => Action<CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST>;
/**
 * Action dispatched on success in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.IDealAttachmentList} response Data received by fetch.
 */
export declare type CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS = {
    response: Response<Models.IDealAttachmentList>;
};
export declare const callGetDealAttachmentsSuccess: (response: Response<Models.IDealAttachmentList>) => Action<CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS>;
/**
 * Action dispatched on failure in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export declare type CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE = {
    error: Error;
};
export declare const callGetDealAttachmentsFailure: (error: Error) => Action<CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE>;
/**
 * Action dispatched in thunk "performInputDealAttachmentsSearch". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {string} value
 */
export declare type PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH = {
    value: string;
};
export declare const performInputDealAttachmentsSearch: (value: string) => Action<PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH>;
/**
 * Action dispatched in thunk "performInputDealAttachmentsSearch". Thunk dispatched by "DealAttachments" screen.
 */
export declare type PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH = {};
export declare const performDealAttachmentsSearch: () => Action<PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH>;
/**
 * Action dispatched in thunk "performPopoverDealAttachmentsShow". Thunk dispatched by "DealAttachments" screen. Thunk chain used to show popover.
 *
 * @param {Models.DealAttachment} dealCurrentAttachment Data received by fetch.
 */
export declare type PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW = {
    dealCurrentAttachment: Models.DealAttachment;
};
export declare const performPopoverDealAttachmentsShow: (dealCurrentAttachment: Models.DealAttachment) => Action<PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW>;
/**
 * Action dispatched in thunk "performPopoverDealAttachmentsHide". Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide popover.
 */
export declare type PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE = {};
export declare const performPopoverDealAttachmentsHide: () => Action<PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE>;
/**
 * Action dispatched in thunk "navigateBackToAttachments". Thunk dispatched by "DealAttachments" screen.
 */
export declare type PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST = {};
export declare const performNavigationBackToAttachmentsList: () => Action<PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST>;
/**
 *  Thunk dispatched by "DealAttachments" screen. Thunk chain used to refresh DealAttachments list.
 */
export declare type PERFORM_REFRESH_ATTACHMENTS_LIST = {};
export declare const performRefreshAttachmentsList: () => Action<PERFORM_REFRESH_ATTACHMENTS_LIST>;
export declare type PERFORM_ATTACHMENT_RELOAD = {};
export declare const performAttachmentReload: () => Action<PERFORM_ATTACHMENT_RELOAD>;
export declare type NAVIGATE_TO_FILEVIEWER_SCREEN = {};
export declare const navigateToFileViewerScreen: () => Action<NAVIGATE_TO_FILEVIEWER_SCREEN>;
export declare type PERFORM_SHOW_MODAL_FILETYPE_ERROR = {
    fileType: string;
};
export declare const performShowModalFileTypeError: (fileType: string) => Action<PERFORM_SHOW_MODAL_FILETYPE_ERROR>;
export declare type PERFORM_HIDE_MODAL_FILETYPE_ERROR = {};
export declare const performHideModalFileTypeError: () => Action<PERFORM_HIDE_MODAL_FILETYPE_ERROR>;
export declare type PERFORM_SET_CURRENT_ATTACHMENT = {
    dealCurrentAttachment: Models.DealAttachment;
};
export declare const performSetCurrentAttachment: (dealCurrentAttachment: Models.DealAttachment) => Action<PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW>;
export declare type PERFORM_RESET_CURRENT_ATTACHMENT = {};
export declare const performResetCurrentAttachment: () => Action<PERFORM_RESET_CURRENT_ATTACHMENT>;
export declare type PERFORM_UNSUPPORTED_TYPE_BAR_HIDE = {};
export declare const performUnsupportedTypeBarHide: () => Action<PERFORM_UNSUPPORTED_TYPE_BAR_HIDE>;
export declare type PERFORM_SHOW_AUTH_WARNING = {};
export declare const performShowAuthWarning: () => Action<PERFORM_SHOW_AUTH_WARNING>;
export declare type NAVIGATE_TO_AUTH_WARNING_SCREEN = {};
export declare const navigateToAuthWarningScreen: () => Action<NAVIGATE_TO_AUTH_WARNING_SCREEN>;
