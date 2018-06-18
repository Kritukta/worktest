/*
 * Created by Vladykin A. S.
 */
import React from 'react';
import { connect } from 'react-redux';
import ViewDealAttachments from '../components/ViewDealAttachments';
import * as thunkDealAttachments from '../thunk/ThunkDealAttachments';
/*
 * Container "DealAttachments". Deal editor screen.
 */
class ContainerDealAttachments extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        this.props.performApplicationInit();
    }
    render() {
        return (React.createElement(ViewDealAttachments, { testID: 'test-id-container-deal-Attachments', currentDownloadedFileId: this.props.currentDownloadedFileId, currentFileId: this.props.currentFileId, fileHandlingStarted: this.props.fileHandlingStarted, isSearchMode: this.props.isSearchMode, dealAttachments: this.props.dealAttachments, inputDealAttachmentsSearch: this.props.inputDealAttachmentsSearch, dealAttachmentsSearchList: this.props.dealAttachmentsSearchList, dealAttachmentsError: this.props.dealAttachmentsError, currentDealAttachmentError: this.props.currentDealAttachmentError, dealAttachmentFetching: this.props.dealAttachmentFetching, dealAttachmentsFetching: this.props.dealAttachmentsFetching, isVisibleModalFileTypeError: this.props.isVisibleModalFileTypeError, modalErrorFileType: this.props.modalErrorFileType, isVisibleUnsupportedTypeBar: this.props.isVisibleUnsupportedTypeBar, navigateBack: this.props.navigateBack, downloadAttachment: this.props.downloadAttachment, navigateToAttachmentsFileViewerScreen: this.props.navigateToAttachmentsFileViewerScreen, navigateBackToAttachments: this.props.navigateBackToAttachments, performRefresh: this.props.performRefreshAttachmentsList, performSearchModeEnable: this.props.performSearchModeEnable, performSearchModeDisable: this.props.performSearchModeDisable, performInputDealAttachmentsSearch: this.props.performInputDealAttachmentsSearch, performPopoverDealAttachmentsShow: this.props.performPopoverDealAttachmentsShow, performPopoverDealAttachmentsHide: this.props.performPopoverDealAttachmentsHide, isVisibleDealAttachmentsPopover: this.props.isVisibleDealAttachmentsPopover, dealCurrentAttachment: this.props.dealCurrentAttachment, performAttachmentReload: this.props.performAttachmentReload, performShowModalFileTypeError: this.props.performShowModalFileTypeError, performHideModalFileTypeError: this.props.performHideModalFileTypeError, performUnsupportedTypeBarHide: this.props.performUnsupportedTypeBarHide, performShowAuthWarning: this.props.performShowAuthWarning }));
    }
}
function mapStateToProps(state) {
    return {
        currentDownloadedFileId: state.user.mrmkmcibCRM.reducerDealAttachments.currentDownloadedFileId,
        currentFileId: state.user.mrmkmcibCRM.reducerDealAttachments.currentFileId,
        fileHandlingStarted: state.user.mrmkmcibCRM.reducerDealAttachments.fileHandlingStarted,
        isSearchMode: state.user.mrmkmcibCRM.reducerDealAttachments.isSearchMode,
        dealAttachments: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachments,
        inputDealAttachmentsSearch: state.user.mrmkmcibCRM.reducerDealAttachments.inputDealAttachmentsSearch,
        dealAttachmentsSearchList: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachmentsSearchList,
        dealAttachmentsError: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachmentsError,
        currentDealAttachmentError: state.user.mrmkmcibCRM.reducerDealAttachments.currentDealAttachmentError,
        isVisibleDealAttachmentsPopover: state.user.mrmkmcibCRM.reducerDealAttachments.isVisibleDealAttachmentsPopover,
        dealCurrentAttachment: state.user.mrmkmcibCRM.reducerDealAttachments.dealCurrentAttachment,
        dealAttachmentFetching: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachmentFetching,
        dealAttachmentsFetching: state.user.mrmkmcibCRM.reducerDealAttachments.dealAttachmentsFetching,
        isVisibleModalFileTypeError: state.user.mrmkmcibCRM.reducerDealAttachments.isVisibleModalFileTypeError,
        modalErrorFileType: state.user.mrmkmcibCRM.reducerDealAttachments.modalErrorFileType,
        isVisibleUnsupportedTypeBar: state.user.mrmkmcibCRM.reducerDealAttachments.isVisibleUnsupportedTypeBar,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        performApplicationInit: () => {
            dispatch(thunkDealAttachments.performApplicationInit());
        },
        navigateBack: () => {
            dispatch(thunkDealAttachments.navigateBack());
        },
        downloadAttachment: (id) => {
            dispatch(thunkDealAttachments.downloadAttachment(id));
        },
        navigateToAttachmentsFileViewerScreen: (fileId) => {
            dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(fileId));
        },
        navigateBackToAttachments: () => {
            dispatch(thunkDealAttachments.navigateBackToAttachments());
        },
        performRefreshAttachmentsList: () => {
            dispatch(thunkDealAttachments.performRefreshAttachmentsList());
        },
        performSearchModeEnable: () => {
            dispatch(thunkDealAttachments.performSearchModeEnable());
        },
        performSearchModeDisable: () => {
            dispatch(thunkDealAttachments.performSearchModeDisable());
        },
        performInputDealAttachmentsSearch: (value) => {
            dispatch(thunkDealAttachments.performInputDealAttachmentsSearch(value));
        },
        performPopoverDealAttachmentsShow: (dealCurrentAttachment) => {
            dispatch(thunkDealAttachments.performPopoverDealAttachmentsShow(dealCurrentAttachment));
        },
        performPopoverDealAttachmentsHide: () => {
            dispatch(thunkDealAttachments.performPopoverDealAttachmentsHide());
        },
        performAttachmentReload: (id) => {
            dispatch(thunkDealAttachments.performAttachmentReload(id));
        },
        performShowModalFileTypeError: (fileType) => {
            dispatch(thunkDealAttachments.performShowModalFileTypeError(fileType));
        },
        performHideModalFileTypeError: () => {
            dispatch(thunkDealAttachments.performHideModalFileTypeError());
        },
        performUnsupportedTypeBarHide: () => {
            dispatch(thunkDealAttachments.performUnsupportedTypeBarHide());
        },
        performShowAuthWarning: (id) => {
            dispatch(thunkDealAttachments.performShowAuthWarning(id));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerDealAttachments);
//# sourceMappingURL=ContainerDealAttachments.js.map