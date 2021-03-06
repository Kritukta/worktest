/// <reference types="react-redux" />
import React from 'react';
import * as ModelsDealAttachments from '../models/ModelsDealAttachments';
import { Models } from 'mrmkmcib-crm';
export interface IStateProps {
    currentDownloadedFileId: string;
    currentFileId: string;
    fileHandlingStarted: boolean;
    isSearchMode: boolean;
    dealAttachments: Models.IDealAttachmentList;
    inputDealAttachmentsSearch: string;
    dealAttachmentsSearchList: Models.IDealAttachmentList;
    dealAttachmentsError: Models.Error | null;
    currentDealAttachmentError: Models.Error | null;
    isVisibleDealAttachmentsPopover: boolean;
    dealCurrentAttachment: Models.DealAttachment;
    dealAttachmentFetching: boolean;
    dealAttachmentsFetching: boolean;
    isVisibleModalFileTypeError: boolean;
    modalErrorFileType: string | null;
    isVisibleUnsupportedTypeBar: boolean;
}
export interface IDispatchProps {
    navigateBack: ModelsDealAttachments.NAVIGATE_BACK;
    performApplicationInit: ModelsDealAttachments.PERFORM_APPLICATION_INIT;
    downloadAttachment: ModelsDealAttachments.DOWNLOAD_ATTACHMENT;
    navigateToAttachmentsFileViewerScreen: ModelsDealAttachments.NVIGATE_TO_ATTACHMENTS_FILEVIEWER_SCREEN;
    navigateBackToAttachments: ModelsDealAttachments.NAVIGATE_BACK_TO_ATTACHMENTS;
    performRefreshAttachmentsList: ModelsDealAttachments.PERFORM_REFRESH_ATTACHMENTS_LIST;
    performSearchModeEnable: ModelsDealAttachments.PERFORM_SEARCH_MODE_ENABLE;
    performSearchModeDisable: ModelsDealAttachments.PERFORM_SEARCH_MODE_DISABLE;
    performInputDealAttachmentsSearch: ModelsDealAttachments.PERFORM_INPUT_DEAL_ATTACHMENTS_SEARCH;
    performPopoverDealAttachmentsShow: ModelsDealAttachments.PERFORM_VIEWATTACHMENTS_POPOVER_SHOW;
    performPopoverDealAttachmentsHide: ModelsDealAttachments.PERFORM_VIEWATTACHMENTS_POPOVER_HIDE;
    performAttachmentReload: ModelsDealAttachments.PERFORM_ATTACHMENT_RELOAD;
    performShowModalFileTypeError: ModelsDealAttachments.PERFORM_SHOW_MODAL_FILETYPE_ERROR;
    performHideModalFileTypeError: ModelsDealAttachments.PERFORM_HIDE_MODAL_FILETYPE_ERROR;
    performUnsupportedTypeBarHide: ModelsDealAttachments.PERFORM_UNSUPPORTED_TYPE_BAR_HIDE;
    performShowAuthWarning: ModelsDealAttachments.PERFORM_SHOW_AUTH_WARNING;
}
export declare type IDealAttachmentsProps = IStateProps & IDispatchProps & {
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
