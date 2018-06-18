/*
 * Created by Vladykin A. S.
 */

import {handleActions} from 'redux-actions'

import * as actionsDealAttachments from '../actions/ActionsDealAttachments'
import {defaultValues} from '../models/Models'
import * as ModelsDealAttachments from '../models/ModelsDealAttachments'
import Action from '../models/Action'
import * as util from '../common/Util'


const reducerDealAttachments = handleActions<ModelsDealAttachments.IDealAttachmentsState>({

    [actionsDealAttachments.SET_CURRENT_FILE_ID]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.SET_CURRENT_FILE_ID>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            currentFileId: action.payload.file.fileId,
        }
    },

    [actionsDealAttachments.DOWNLOAD_ATTACHMENT_INIT]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.DOWNLOAD_ATTACHMENT_INIT>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealAttachments: util.downloadAttachmentInit(action.payload.file, state.dealAttachments)
        }
    },

    [actionsDealAttachments.DOWNLOAD_ATTACHMENT_SUCCESS]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.DOWNLOAD_ATTACHMENT_SUCCESS>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealAttachmentFetching: false,
            dealAttachments: util.downloadAttachmentSuccess(action.payload.file, state.dealAttachments)
        }
    },

    [actionsDealAttachments.DOWNLOAD_ATTACHMENT_FAILURE]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.DOWNLOAD_ATTACHMENT_FAILURE>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            currentDealAttachmentError: action.payload.file.error,
            dealAttachmentFetching: false,
            dealAttachments: util.downloadAttachmentFailure(action.payload.file, state.dealAttachments)
        }
    },

    [actionsDealAttachments.DECRYPT_ATTACHMENT_INIT]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.DECRYPT_ATTACHMENT_INIT>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            currentDownloadedFileId: action.payload.file.id,
            fileHandlingStarted: true
        }
    },

    [actionsDealAttachments.DECRYPT_ATTACHMENT_SUCCESS]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state
        }
    },

    [actionsDealAttachments.DECRYPT_ATTACHMENT_FAILURE]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.DECRYPT_ATTACHMENT_FAILURE>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            currentDealAttachmentError: action.payload.file.error
        }
    },

    [actionsDealAttachments.PERFORM_SEARCH_MODE_ENABLE]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            isSearchMode: true,
        }
    },

    [actionsDealAttachments.PERFORM_SEARCH_MODE_DISABLE]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            isSearchMode: false,
        }
    },

    [actionsDealAttachments.CALL_GET_DEAL_ATTACHMENTS_LIST]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
        }
    },
    [actionsDealAttachments.CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealAttachmentsFetching: true,
            dealAttachmentsError: null,
        }
    },
    [actionsDealAttachments.CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealAttachments: action.payload.response.data,
            dealAttachmentsFetching: false,
            dealAttachmentsError: null,
        }
    },
    [actionsDealAttachments.CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealAttachmentsFetching: false,
            dealAttachmentsError: action.payload.error,
        }
    },

    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to load DealAttachments data.
    [actionsDealAttachments.PERFORM_REFRESH_ATTACHMENTS_LIST]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
        }
    },

    [actionsDealAttachments.PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            inputDealAttachmentsSearch: action.payload.value,
        }
    },

    [actionsDealAttachments.PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealAttachmentsSearchList: {
                data: util.searchDealAttachmentsList(state.dealAttachments.data, state.inputDealAttachmentsSearch)
            },
        }
    },



    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to show popover.
    [actionsDealAttachments.PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealCurrentAttachment: action.payload.dealCurrentAttachment,
            isVisibleDealAttachmentsPopover: true,
        }
    },

    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide popover.
    [actionsDealAttachments.PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealCurrentAttachment: defaultValues.DealAttachment,
            isVisibleDealAttachmentsPopover: false,
        }
    },

    [actionsDealAttachments.PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            currentDealAttachmentError: null,
            fileHandlingStarted: false,
            fileViewerScreenOpened: false,
        }
    },

    [actionsDealAttachments.PERFORM_ATTACHMENT_RELOAD]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            currentDealAttachmentError: null,
            dealAttachmentFetching: true,
            fileHandlingStarted: false
        }
    },

    [actionsDealAttachments.NAVIGATE_TO_FILEVIEWER_SCREEN]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            fileViewerScreenOpened: true,
            isVisibleUnsupportedTypeBar: true,
        }
    },

    [actionsDealAttachments.PERFORM_SHOW_MODAL_FILETYPE_ERROR]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.PERFORM_SHOW_MODAL_FILETYPE_ERROR>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            isVisibleModalFileTypeError: true,
            modalErrorFileType: action.payload.fileType,
        }
    },

    [actionsDealAttachments.PERFORM_HIDE_MODAL_FILETYPE_ERROR]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            isVisibleModalFileTypeError: false,
            modalErrorFileType: null,
        }
    },

    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to set current deal attachment.
    [actionsDealAttachments.PERFORM_SET_CURRENT_ATTACHMENT]: (
        state: ModelsDealAttachments.IDealAttachmentsState,
        action: Action<actionsDealAttachments.PERFORM_SET_CURRENT_ATTACHMENT>
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealCurrentAttachment: action.payload.dealCurrentAttachment,
        }
    },
    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to set current deal attachment to default.
    [actionsDealAttachments.PERFORM_RESET_CURRENT_ATTACHMENT]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            dealCurrentAttachment: defaultValues.DealAttachment,
        }
    },

    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide warning bar for unsupported formats.
    [actionsDealAttachments.PERFORM_UNSUPPORTED_TYPE_BAR_HIDE]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
            isVisibleUnsupportedTypeBar: false,
        }
    },

    // Thunk dispatched by "DealAttachments" screen. Thunk chain used to show warning before ADFS authentication.
    [actionsDealAttachments.PERFORM_SHOW_AUTH_WARNING]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "DealAttachments" screen. Thunk dispatched by "DealAttachments" screen. Thunk chain used to navigate to warning page.
    [actionsDealAttachments.NAVIGATE_TO_AUTH_WARNING_SCREEN]: (
        state: ModelsDealAttachments.IDealAttachmentsState
    ): ModelsDealAttachments.IDealAttachmentsState => {
        return {
            ...state,
        }
    },

}, ModelsDealAttachments.initialState.state)

export default reducerDealAttachments
