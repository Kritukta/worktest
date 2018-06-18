/**
 * Actions of DealAttachments container.
 *
 * @author Vladykin A. S.
 * @see
 */
import Action from '../models/Action'
import Response from '../models/Response'
import Error from '../models/Error'
import {Models} from 'mrmkmcib-crm'

export const SET_CURRENT_FILE_ID = 'DEAL_ATTACHMENTS_CONTAINER_SET_CURRENT_FILE_ID'
export const DOWNLOAD_ATTACHMENT_INIT = 'DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_INIT'
export const DOWNLOAD_ATTACHMENT_SUCCESS = 'DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_SUCCESS'
export const DOWNLOAD_ATTACHMENT_FAILURE = 'DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_FAILURE'
export const DECRYPT_ATTACHMENT_INIT = 'DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_INIT'
export const DECRYPT_ATTACHMENT_SUCCESS = 'DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_SUCCESS'
export const DECRYPT_ATTACHMENT_FAILURE = 'DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_FAILURE'
export const PERFORM_SEARCH_MODE_ENABLE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SEARCH_MODE_ENABLE'
export const PERFORM_SEARCH_MODE_DISABLE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SEARCH_MODE_DISABLE'

export const CALL_GET_DEAL_ATTACHMENTS_LIST = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST'
export const CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST'
export const CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS'
export const CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE'

export const PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH'
export const PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH'

export const PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW'
export const PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE'

export const PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST'

export const PERFORM_REFRESH_ATTACHMENTS_LIST = 'DEAL_ATTACHMENTS_CONTAINER_CALL_REFRESH_DEAL_ATTACHMENTS_LIST'

export const PERFORM_ATTACHMENT_RELOAD = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_ATTACHMENT_RELOAD'

export const NAVIGATE_TO_FILEVIEWER_SCREEN = 'DEAL_ATTACHMENTS_CONTAINER_NAVIGATE_TO_FILEVIEWER_SCREEN'

export const PERFORM_SHOW_MODAL_FILETYPE_ERROR = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SHOW_MODAL_FILETYPE_ERROR'
export const PERFORM_HIDE_MODAL_FILETYPE_ERROR = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_HIDE_MODAL_FILETYPE_ERROR'

export const PERFORM_SET_CURRENT_ATTACHMENT = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SET_CURRENT_ATTACHMENT'
export const PERFORM_RESET_CURRENT_ATTACHMENT = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_RESET_CURRENT_ATTACHMENT'

export const PERFORM_UNSUPPORTED_TYPE_BAR_HIDE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_UNSUPPORTED_TYPE_BAR_HIDE'
export const PERFORM_SHOW_AUTH_WARNING = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SHOW_AUTH_WARNING'
export const NAVIGATE_TO_AUTH_WARNING_SCREEN = 'DEAL_ATTACHMENTS_CONTAINER_NAVIGATE_TO_AUTH_WARNING_SCREEN'

/**
 * Action dispatched in thunks "downloadAttachment" and "navigateToAttachmentsFileViewerScreen".Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export type SET_CURRENT_FILE_ID = { file: Models.DealAttachment }
export const setCurrentFileId = (file: Models.DealAttachment): Action<SET_CURRENT_FILE_ID> => ({
    type: SET_CURRENT_FILE_ID,
    payload: {
        file,
    }
})

/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export type DOWNLOAD_ATTACHMENT_INIT = { file: Models.DealAttachment }
export const downloadAttachmentInit = (file: Models.DealAttachment): Action<DOWNLOAD_ATTACHMENT_INIT> => ({
    type: DOWNLOAD_ATTACHMENT_INIT,
    payload: {
        file,
    }
})

/**
 * Action dispatched on success in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export type DOWNLOAD_ATTACHMENT_SUCCESS = { file: Models.DealAttachment }
export const downloadAttachmentSuccess = (file: Models.DealAttachment): Action<DOWNLOAD_ATTACHMENT_SUCCESS> => ({
    type: DOWNLOAD_ATTACHMENT_SUCCESS,
    payload: {
        file,
    }
})

/**
 * Action dispatched on failure in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export type DOWNLOAD_ATTACHMENT_FAILURE = { file: Models.DealAttachment }
export const downloadAttachmentFailure = (file: Models.DealAttachment): Action<DOWNLOAD_ATTACHMENT_FAILURE> => ({
    type: DOWNLOAD_ATTACHMENT_FAILURE,
    payload: {
        file,
    }
})

/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 * @param {Models.DealAttachment} file .
 */
export type DECRYPT_ATTACHMENT_INIT = { file: Models.DealAttachment }
export const decryptAttachmentInit = (file: Models.DealAttachment): Action<DECRYPT_ATTACHMENT_INIT> => ({
    type: DECRYPT_ATTACHMENT_INIT,
    payload: {
        file,
    }
})

/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 */
export type DECRYPT_ATTACHMENT_SUCCESS = {}
export const decryptAttachmentSuccess = (): Action<DECRYPT_ATTACHMENT_SUCCESS> => ({
    type: DECRYPT_ATTACHMENT_SUCCESS,
    payload: {}
})

/**
 * Action dispatched in thunk "downloadAttachment". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.DealAttachment} file .
 */
export type DECRYPT_ATTACHMENT_FAILURE = { file: Models.DealAttachment }
export const decryptAttachmentFailure = (file: Models.DealAttachment): Action<DECRYPT_ATTACHMENT_FAILURE> => ({
    type: DECRYPT_ATTACHMENT_FAILURE,
    payload: {
        file,
    }
})

/**
 * Action dispatched in thunk "performSearchModeEnable". Thunk dispatched by "DealAttachments" screen.
 */
export type PERFORM_SEARCH_MODE_ENABLE = {}
export const performSearchModeEnable = (): Action<PERFORM_SEARCH_MODE_ENABLE> => ({
    type: PERFORM_SEARCH_MODE_ENABLE,
    payload: {}
})

/**
 * Action dispatched in thunk "performSearchModeDisable". Thunk dispatched by "DealAttachments" screen.
 */
export type PERFORM_SEARCH_MODE_DISABLE = {}
export const performSearchModeDisable = (): Action<PERFORM_SEARCH_MODE_DISABLE> => ({
    type: PERFORM_SEARCH_MODE_DISABLE,
    payload: {}
})

/**
 * Action dispatched in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 */
export type CALL_GET_DEAL_ATTACHMENTS_LIST = {}
export const callGetDealAttachments = (): Action<CALL_GET_DEAL_ATTACHMENTS_LIST> => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST,
    payload: {}
})

/**
 * Action dispatched in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 */
export type CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST = {}
export const callGetDealAttachmentsRequest = (): Action<CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST> => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST,
    payload: {}
})

/**
 * Action dispatched on success in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Models.IDealAttachmentList} response Data received by fetch.
 */
export type CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS = {response: Response<Models.IDealAttachmentList>}
export const callGetDealAttachmentsSuccess = (response: Response<Models.IDealAttachmentList>): Action<CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS> => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/**
 * Action dispatched on failure in thunk "callGetDealAttachments". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE = {error: Error}
export const callGetDealAttachmentsFailure = (error: Error): Action<CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE> => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Action dispatched in thunk "performInputDealAttachmentsSearch". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {string} value
 */
export type PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH = {value: string}
export const performInputDealAttachmentsSearch = (value: string): Action<PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH> => ({
    type: PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH,
    payload: {
        value: value
    }
})

/**
 * Action dispatched in thunk "performInputDealAttachmentsSearch". Thunk dispatched by "DealAttachments" screen.
 */
export type PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH = {}
export const performDealAttachmentsSearch = (): Action<PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH> => ({
    type: PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH,
    payload: {}
})

/**
 * Action dispatched in thunk "performPopoverDealAttachmentsShow". Thunk dispatched by "DealAttachments" screen. Thunk chain used to show popover.
 *
 * @param {Models.DealAttachment} dealCurrentAttachment Data received by fetch.
 */
export type PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW = { dealCurrentAttachment: Models.DealAttachment }
export const performPopoverDealAttachmentsShow = (dealCurrentAttachment: Models.DealAttachment): Action<PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW> => ({
    type: PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW,
    payload: {
        dealCurrentAttachment,
    }
})

/**
 * Action dispatched in thunk "performPopoverDealAttachmentsHide". Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide popover.
 */
export type PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE = {}
export const performPopoverDealAttachmentsHide = (): Action<PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE> => ({
    type: PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE,
    payload: {}
})

/**
 * Action dispatched in thunk "navigateBackToAttachments". Thunk dispatched by "DealAttachments" screen.
 */
export type PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST = {}
export const performNavigationBackToAttachmentsList = (): Action<PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST> => ({
    type: PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST,
    payload: {}
})

/**
 *  Thunk dispatched by "DealAttachments" screen. Thunk chain used to refresh DealAttachments list.
 */
export type PERFORM_REFRESH_ATTACHMENTS_LIST = {}
export const performRefreshAttachmentsList = (): Action<PERFORM_REFRESH_ATTACHMENTS_LIST> => ({
    type: PERFORM_REFRESH_ATTACHMENTS_LIST,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performAttachmentReload". Thunk dispatched by "DealAttachments" screen.
 */
export type PERFORM_ATTACHMENT_RELOAD = {}
export const performAttachmentReload = (): Action<PERFORM_ATTACHMENT_RELOAD> => ({
    type: PERFORM_ATTACHMENT_RELOAD,
    payload: {}
})

/*
 * Action dispatched on thunk chain "navigateToAttachmentsFileViewerScreen". Thunk dispatched by "DealAttachments" screen.
 */
export type NAVIGATE_TO_FILEVIEWER_SCREEN = {}
export const navigateToFileViewerScreen = (): Action<NAVIGATE_TO_FILEVIEWER_SCREEN> => ({
    type: NAVIGATE_TO_FILEVIEWER_SCREEN,
    payload: {}
})

/*
 * Action dispatched on failure in thunk "performShowModalFileTypeError". Thunk dispatched by "DealAttachments" screen.
 *
 * @param {string} fileType of the attachment file.
 */
export type PERFORM_SHOW_MODAL_FILETYPE_ERROR = { fileType: string }
export const performShowModalFileTypeError = (fileType: string): Action<PERFORM_SHOW_MODAL_FILETYPE_ERROR> => ({
    type: PERFORM_SHOW_MODAL_FILETYPE_ERROR,
    payload: {
        fileType: fileType,
    }
})

/*
 * Action dispatched on thunk chain "performHideModalFileTypeError". Thunk dispatched by "DealAttachments" screen.
 */
export type PERFORM_HIDE_MODAL_FILETYPE_ERROR = {}
export const performHideModalFileTypeError = (): Action<PERFORM_HIDE_MODAL_FILETYPE_ERROR> => ({
    type: PERFORM_HIDE_MODAL_FILETYPE_ERROR,
    payload: {}
})

/*
 * Action dispatched in thunk "performSetCurrentAttachment". Thunk dispatched by "DealAttachments" screen. Thunk chain used to set current deal attachment.
 *
 * @param {Models.DealAttachments} dealCurrentAttachment Data received by fetch.
 */
export type PERFORM_SET_CURRENT_ATTACHMENT = { dealCurrentAttachment: Models.DealAttachment }
export const performSetCurrentAttachment = (dealCurrentAttachment: Models.DealAttachment): Action<PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW> => ({
    type: PERFORM_SET_CURRENT_ATTACHMENT,
    payload: {
        dealCurrentAttachment,
    }
})

/*
 * Action dispatched in thunk "performSetCurrentAttachment". Thunk dispatched by "DealAttachments" screen. Thunk chain used to set current deal attachment to default.
 */
export type PERFORM_RESET_CURRENT_ATTACHMENT = {}
export const performResetCurrentAttachment = (): Action<PERFORM_RESET_CURRENT_ATTACHMENT> => ({
    type: PERFORM_RESET_CURRENT_ATTACHMENT,
    payload: {}
})

/*
 * Action dispatched in thunk "performUnsupportedTypeBarHide". Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide warning bar for unsupported formats.
 */
export type PERFORM_UNSUPPORTED_TYPE_BAR_HIDE = {}
export const performUnsupportedTypeBarHide = (): Action<PERFORM_UNSUPPORTED_TYPE_BAR_HIDE> => ({
    type: PERFORM_UNSUPPORTED_TYPE_BAR_HIDE,
    payload: {}
})

/*
 * Action dispatched in thunk "performUnsupportedTypeBarHide". Thunk dispatched by "DealAttachments" screen. Thunk chain used to show warning before ADFS authentication.
 */
export type PERFORM_SHOW_AUTH_WARNING = {}
export const performShowAuthWarning = (): Action<PERFORM_SHOW_AUTH_WARNING> => ({
    type: PERFORM_SHOW_AUTH_WARNING,
    payload: {}
})

/*
 * Action dispatched in thunk "performUnsupportedTypeBarHide". Thunk dispatched by "DealAttachments" screen. Thunk chain used to navigate to warning page.
 */
export type NAVIGATE_TO_AUTH_WARNING_SCREEN = {}
export const navigateToAuthWarningScreen = (): Action<NAVIGATE_TO_AUTH_WARNING_SCREEN> => ({
    type: NAVIGATE_TO_AUTH_WARNING_SCREEN,
    payload: {}
})
