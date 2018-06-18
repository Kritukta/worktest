/**
 * Models for DealAttachments container.
 *
 * @author Vladykin A. S.
 * @see
 */

import {defaultValues} from './Models'
import {Enums} from '../Enums'
import {Models} from 'mrmkmcib-crm'
import {Models as ModelsApp} from "mrmkmcib-app"
import Error from '../models/Error'


const defaultState = {
    get state(): IDealAttachmentsState {
        return {
            currentDownloadedFileId: '',
            currentFileId: '',
            fileHandlingStarted: false,
            isSearchMode: false,
            dealAttachments: defaultValues.DealAttachmentList,
            inputDealAttachmentsSearch: '',
            dealAttachmentsSearchList: defaultValues.DealAttachmentList,
            dealAttachmentsError: null,
            currentDealAttachmentError: null,
            isVisibleDealAttachmentsPopover: false,
            dealCurrentAttachment: defaultValues.DealAttachment,
            currentConfiguration: defaultValues.currentConfiguration, // App СУП parameters
            dealAttachmentFetching: false,
            dealAttachmentsFetching: false,
            fileViewerScreenOpened: false,
            isVisibleModalFileTypeError: false,
            modalErrorFileType: null,
            isVisibleUnsupportedTypeBar: true,
        }
    }
}

export interface IDealAttachmentsState {
    currentDownloadedFileId: string,
    currentFileId: string,
    fileHandlingStarted: boolean,
    isSearchMode: boolean,
    dealAttachments: Models.IDealAttachmentList,
    inputDealAttachmentsSearch: string,
    dealAttachmentsSearchList: Models.IDealAttachmentList,
    dealAttachmentsError: Models.Error | null,
    currentDealAttachmentError: Models.Error | null,
    isVisibleDealAttachmentsPopover: boolean,
    dealCurrentAttachment: Models.DealAttachment,
    dealAttachmentFetching: boolean,
    dealAttachmentsFetching: boolean,
    fileViewerScreenOpened: boolean,
    currentConfiguration: ModelsApp.Configuration, // App СУП parameters
    isVisibleModalFileTypeError: boolean,
    modalErrorFileType: string | null,
    isVisibleUnsupportedTypeBar: boolean,
}

export const initialState = {
    get state(): IDealAttachmentsState {
        return defaultState.state
    }
}

export interface PERFORM_APPLICATION_INIT {
    (): void;
}

export interface NAVIGATE_BACK {
    (): void;
}

export interface DOWNLOAD_ATTACHMENT {
    (id: string): void;
}

export interface NVIGATE_TO_ATTACHMENTS_FILEVIEWER_SCREEN {
    (fileId: string): void;
}

export interface NAVIGATE_BACK_TO_ATTACHMENTS {
    (): void;
}

export interface PERFORM_REFRESH_ATTACHMENTS_LIST {
    (): void;
}

export interface PERFORM_SEARCH_MODE_ENABLE {
    (): void;
}

export interface PERFORM_SEARCH_MODE_DISABLE {
    (): void;
}

export interface PERFORM_INPUT_DEAL_ATTACHMENTS_SEARCH {
    (value: string): void;
}

export interface PERFORM_VIEWATTACHMENTS_POPOVER_SHOW {
    (dealAttachment: Models.DealAttachment): void;
}

export interface PERFORM_VIEWATTACHMENTS_POPOVER_HIDE {
    (): void;
}

export interface PERFORM_ATTACHMENT_RELOAD {
    (id:string): void;
}

export interface PERFORM_SHOW_MODAL_FILETYPE_ERROR {
    (fileType: string): void;
}

export interface PERFORM_HIDE_MODAL_FILETYPE_ERROR {
    (): void;
}

export interface PERFORM_UNSUPPORTED_TYPE_BAR_HIDE {
    (): void;
}

export interface PERFORM_SHOW_AUTH_WARNING {
    (id: string): void;
}
