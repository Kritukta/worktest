/**
 * Models for DealAttachments container.
 *
 * @author Vladykin A. S.
 * @see
 */
import { defaultValues } from './Models';
const defaultState = {
    get state() {
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
            currentConfiguration: defaultValues.currentConfiguration,
            dealAttachmentFetching: false,
            dealAttachmentsFetching: false,
            fileViewerScreenOpened: false,
            isVisibleModalFileTypeError: false,
            modalErrorFileType: null,
            isVisibleUnsupportedTypeBar: true,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsDealAttachments.js.map