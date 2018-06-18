export const SET_CURRENT_FILE_ID = 'DEAL_ATTACHMENTS_CONTAINER_SET_CURRENT_FILE_ID';
export const DOWNLOAD_ATTACHMENT_INIT = 'DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_INIT';
export const DOWNLOAD_ATTACHMENT_SUCCESS = 'DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_SUCCESS';
export const DOWNLOAD_ATTACHMENT_FAILURE = 'DEAL_ATTACHMENTS_CONTAINER_DOWNLOAD_ATTACHMENT_FAILURE';
export const DECRYPT_ATTACHMENT_INIT = 'DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_INIT';
export const DECRYPT_ATTACHMENT_SUCCESS = 'DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_SUCCESS';
export const DECRYPT_ATTACHMENT_FAILURE = 'DEAL_ATTACHMENTS_CONTAINER_DECRYPT_ATTACHMENT_FAILURE';
export const PERFORM_SEARCH_MODE_ENABLE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SEARCH_MODE_ENABLE';
export const PERFORM_SEARCH_MODE_DISABLE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SEARCH_MODE_DISABLE';
export const CALL_GET_DEAL_ATTACHMENTS_LIST = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST';
export const CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST';
export const CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS';
export const CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE = 'DEAL_ATTACHMENTS_CONTAINER_CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE';
export const PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH';
export const PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH';
export const PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW';
export const PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE';
export const PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST';
export const PERFORM_REFRESH_ATTACHMENTS_LIST = 'DEAL_ATTACHMENTS_CONTAINER_CALL_REFRESH_DEAL_ATTACHMENTS_LIST';
export const PERFORM_ATTACHMENT_RELOAD = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_ATTACHMENT_RELOAD';
export const NAVIGATE_TO_FILEVIEWER_SCREEN = 'DEAL_ATTACHMENTS_CONTAINER_NAVIGATE_TO_FILEVIEWER_SCREEN';
export const PERFORM_SHOW_MODAL_FILETYPE_ERROR = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SHOW_MODAL_FILETYPE_ERROR';
export const PERFORM_HIDE_MODAL_FILETYPE_ERROR = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_HIDE_MODAL_FILETYPE_ERROR';
export const PERFORM_SET_CURRENT_ATTACHMENT = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SET_CURRENT_ATTACHMENT';
export const PERFORM_RESET_CURRENT_ATTACHMENT = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_RESET_CURRENT_ATTACHMENT';
export const PERFORM_UNSUPPORTED_TYPE_BAR_HIDE = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_UNSUPPORTED_TYPE_BAR_HIDE';
export const PERFORM_SHOW_AUTH_WARNING = 'DEAL_ATTACHMENTS_CONTAINER_PERFORM_SHOW_AUTH_WARNING';
export const NAVIGATE_TO_AUTH_WARNING_SCREEN = 'DEAL_ATTACHMENTS_CONTAINER_NAVIGATE_TO_AUTH_WARNING_SCREEN';
export const setCurrentFileId = (file) => ({
    type: SET_CURRENT_FILE_ID,
    payload: {
        file,
    }
});
export const downloadAttachmentInit = (file) => ({
    type: DOWNLOAD_ATTACHMENT_INIT,
    payload: {
        file,
    }
});
export const downloadAttachmentSuccess = (file) => ({
    type: DOWNLOAD_ATTACHMENT_SUCCESS,
    payload: {
        file,
    }
});
export const downloadAttachmentFailure = (file) => ({
    type: DOWNLOAD_ATTACHMENT_FAILURE,
    payload: {
        file,
    }
});
export const decryptAttachmentInit = (file) => ({
    type: DECRYPT_ATTACHMENT_INIT,
    payload: {
        file,
    }
});
export const decryptAttachmentSuccess = () => ({
    type: DECRYPT_ATTACHMENT_SUCCESS,
    payload: {}
});
export const decryptAttachmentFailure = (file) => ({
    type: DECRYPT_ATTACHMENT_FAILURE,
    payload: {
        file,
    }
});
export const performSearchModeEnable = () => ({
    type: PERFORM_SEARCH_MODE_ENABLE,
    payload: {}
});
export const performSearchModeDisable = () => ({
    type: PERFORM_SEARCH_MODE_DISABLE,
    payload: {}
});
export const callGetDealAttachments = () => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST,
    payload: {}
});
export const callGetDealAttachmentsRequest = () => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST_REQUEST,
    payload: {}
});
export const callGetDealAttachmentsSuccess = (response) => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST_SUCCESS,
    payload: {
        response: response
    }
});
export const callGetDealAttachmentsFailure = (error) => ({
    type: CALL_GET_DEAL_ATTACHMENTS_LIST_FAILURE,
    payload: {
        error: error
    }
});
export const performInputDealAttachmentsSearch = (value) => ({
    type: PERFORM_INPUT_DEAL_ATTACHMENTS_LIST_SEARCH,
    payload: {
        value: value
    }
});
export const performDealAttachmentsSearch = () => ({
    type: PERFORM_DEAL_ATTACHMENTS_LIST_SEARCH,
    payload: {}
});
export const performPopoverDealAttachmentsShow = (dealCurrentAttachment) => ({
    type: PERFORM_POPOVER_DEAL_ATTACHMENT_SHOW,
    payload: {
        dealCurrentAttachment,
    }
});
export const performPopoverDealAttachmentsHide = () => ({
    type: PERFORM_POPOVER_DEAL_ATTACHMENT_HIDE,
    payload: {}
});
export const performNavigationBackToAttachmentsList = () => ({
    type: PERFORM_NAVIGATION_BACK_TO_ATTACHMENTS_LIST,
    payload: {}
});
export const performRefreshAttachmentsList = () => ({
    type: PERFORM_REFRESH_ATTACHMENTS_LIST,
    payload: {}
});
export const performAttachmentReload = () => ({
    type: PERFORM_ATTACHMENT_RELOAD,
    payload: {}
});
export const navigateToFileViewerScreen = () => ({
    type: NAVIGATE_TO_FILEVIEWER_SCREEN,
    payload: {}
});
export const performShowModalFileTypeError = (fileType) => ({
    type: PERFORM_SHOW_MODAL_FILETYPE_ERROR,
    payload: {
        fileType: fileType,
    }
});
export const performHideModalFileTypeError = () => ({
    type: PERFORM_HIDE_MODAL_FILETYPE_ERROR,
    payload: {}
});
export const performSetCurrentAttachment = (dealCurrentAttachment) => ({
    type: PERFORM_SET_CURRENT_ATTACHMENT,
    payload: {
        dealCurrentAttachment,
    }
});
export const performResetCurrentAttachment = () => ({
    type: PERFORM_RESET_CURRENT_ATTACHMENT,
    payload: {}
});
export const performUnsupportedTypeBarHide = () => ({
    type: PERFORM_UNSUPPORTED_TYPE_BAR_HIDE,
    payload: {}
});
export const performShowAuthWarning = () => ({
    type: PERFORM_SHOW_AUTH_WARNING,
    payload: {}
});
export const navigateToAuthWarningScreen = () => ({
    type: NAVIGATE_TO_AUTH_WARNING_SCREEN,
    payload: {}
});
//# sourceMappingURL=ActionsDealAttachments.js.map