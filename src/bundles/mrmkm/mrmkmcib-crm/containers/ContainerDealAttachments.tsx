/*
 * Created by Vladykin A. S.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import ViewDealAttachments from '../components/ViewDealAttachments'
import * as ModelState from '../models/Models'
import * as ModelsDealAttachments from '../models/ModelsDealAttachments'
import * as thunkDealAttachments from '../thunk/ThunkDealAttachments'
import {Models} from 'mrmkmcib-crm'
import {Enums} from "../../mrmkmcib-app/Enums";


/*
 * Container "DealAttachments". Deal editor screen.
 */
class ContainerDealAttachments extends React.Component<IDealAttachmentsProps, any> {

    constructor(props: IDealAttachmentsProps, context: any) {
        super(props, context);
    }

    componentDidMount() {
        this.props.performApplicationInit()
    }

    render() {
        return (
            <ViewDealAttachments
                testID={'test-id-container-deal-Attachments'}
                currentDownloadedFileId={this.props.currentDownloadedFileId}
                currentFileId={this.props.currentFileId}
                fileHandlingStarted={this.props.fileHandlingStarted}
                isSearchMode={this.props.isSearchMode}
                dealAttachments={this.props.dealAttachments}
                inputDealAttachmentsSearch={this.props.inputDealAttachmentsSearch}
                dealAttachmentsSearchList={this.props.dealAttachmentsSearchList}
                dealAttachmentsError={this.props.dealAttachmentsError}
                currentDealAttachmentError={this.props.currentDealAttachmentError}
                dealAttachmentFetching={this.props.dealAttachmentFetching}
                dealAttachmentsFetching={this.props.dealAttachmentsFetching}
                isVisibleModalFileTypeError={this.props.isVisibleModalFileTypeError}
                modalErrorFileType={this.props.modalErrorFileType}
                isVisibleUnsupportedTypeBar={this.props.isVisibleUnsupportedTypeBar}

                navigateBack={this.props.navigateBack}
                downloadAttachment={this.props.downloadAttachment}
                navigateToAttachmentsFileViewerScreen={this.props.navigateToAttachmentsFileViewerScreen}
                navigateBackToAttachments={this.props.navigateBackToAttachments}
                performRefresh={this.props.performRefreshAttachmentsList}
                performSearchModeEnable={this.props.performSearchModeEnable}
                performSearchModeDisable={this.props.performSearchModeDisable}
                performInputDealAttachmentsSearch={this.props.performInputDealAttachmentsSearch}
                performPopoverDealAttachmentsShow={this.props.performPopoverDealAttachmentsShow}
                performPopoverDealAttachmentsHide={this.props.performPopoverDealAttachmentsHide}
                isVisibleDealAttachmentsPopover={this.props.isVisibleDealAttachmentsPopover}
                dealCurrentAttachment={this.props.dealCurrentAttachment}
                performAttachmentReload={this.props.performAttachmentReload}
                performShowModalFileTypeError={this.props.performShowModalFileTypeError}
                performHideModalFileTypeError={this.props.performHideModalFileTypeError}
                performUnsupportedTypeBarHide={this.props.performUnsupportedTypeBarHide}
                performShowAuthWarning={this.props.performShowAuthWarning}
            >
            </ViewDealAttachments>
        )
    }
}

export interface IStateProps {
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
    dealCurrentAttachment: Models.DealAttachment
    dealAttachmentFetching: boolean,
    dealAttachmentsFetching: boolean,
    isVisibleModalFileTypeError: boolean,
    modalErrorFileType: string | null,
    isVisibleUnsupportedTypeBar: boolean,
}

export interface IDispatchProps {
    navigateBack: ModelsDealAttachments.NAVIGATE_BACK,
    performApplicationInit: ModelsDealAttachments.PERFORM_APPLICATION_INIT,
    downloadAttachment: ModelsDealAttachments.DOWNLOAD_ATTACHMENT,
    navigateToAttachmentsFileViewerScreen: ModelsDealAttachments.NVIGATE_TO_ATTACHMENTS_FILEVIEWER_SCREEN,
    navigateBackToAttachments: ModelsDealAttachments.NAVIGATE_BACK_TO_ATTACHMENTS,
    performRefreshAttachmentsList: ModelsDealAttachments.PERFORM_REFRESH_ATTACHMENTS_LIST,
    performSearchModeEnable: ModelsDealAttachments.PERFORM_SEARCH_MODE_ENABLE,
    performSearchModeDisable: ModelsDealAttachments.PERFORM_SEARCH_MODE_DISABLE,
    performInputDealAttachmentsSearch: ModelsDealAttachments.PERFORM_INPUT_DEAL_ATTACHMENTS_SEARCH,
    performPopoverDealAttachmentsShow: ModelsDealAttachments.PERFORM_VIEWATTACHMENTS_POPOVER_SHOW,
    performPopoverDealAttachmentsHide: ModelsDealAttachments.PERFORM_VIEWATTACHMENTS_POPOVER_HIDE,
    performAttachmentReload: ModelsDealAttachments.PERFORM_ATTACHMENT_RELOAD,
    performShowModalFileTypeError: ModelsDealAttachments.PERFORM_SHOW_MODAL_FILETYPE_ERROR,
    performHideModalFileTypeError: ModelsDealAttachments.PERFORM_HIDE_MODAL_FILETYPE_ERROR,
    performUnsupportedTypeBarHide: ModelsDealAttachments.PERFORM_UNSUPPORTED_TYPE_BAR_HIDE,
    performShowAuthWarning: ModelsDealAttachments.PERFORM_SHOW_AUTH_WARNING,

}

export type IDealAttachmentsProps = IStateProps & IDispatchProps & { testID: string }

function mapStateToProps(state: ModelState.IRootState) {
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
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        performApplicationInit: () => {
            dispatch(thunkDealAttachments.performApplicationInit())
        },
        navigateBack: () => {
            dispatch(thunkDealAttachments.navigateBack())
        },
        downloadAttachment: (id: string) => {
            dispatch(thunkDealAttachments.downloadAttachment(id))
        },
        navigateToAttachmentsFileViewerScreen: (fileId: string) => {
            dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(fileId))
        },
        navigateBackToAttachments: () => {
            dispatch(thunkDealAttachments.navigateBackToAttachments())
        },
        performRefreshAttachmentsList: () => {
            dispatch(thunkDealAttachments.performRefreshAttachmentsList())
        },
        performSearchModeEnable: () => {
            dispatch(thunkDealAttachments.performSearchModeEnable())
        },
        performSearchModeDisable: () => {
            dispatch(thunkDealAttachments.performSearchModeDisable())
        },
        performInputDealAttachmentsSearch: (value: string) => {
            dispatch(thunkDealAttachments.performInputDealAttachmentsSearch(value))
        },
        performPopoverDealAttachmentsShow: (dealCurrentAttachment: Models.DealAttachment) => {
            dispatch(thunkDealAttachments.performPopoverDealAttachmentsShow(dealCurrentAttachment))
        },
        performPopoverDealAttachmentsHide: () => {
            dispatch(thunkDealAttachments.performPopoverDealAttachmentsHide())
        },
        performAttachmentReload: (id: string) => {
            dispatch(thunkDealAttachments.performAttachmentReload(id))
        },
        performShowModalFileTypeError: (fileType: string) => {
            dispatch(thunkDealAttachments.performShowModalFileTypeError(fileType))
        },
        performHideModalFileTypeError: () => {
            dispatch(thunkDealAttachments.performHideModalFileTypeError())
        },
        performUnsupportedTypeBarHide: () => {
            dispatch(thunkDealAttachments.performUnsupportedTypeBarHide())
        },
        performShowAuthWarning: (id: string) => {
            dispatch(thunkDealAttachments.performShowAuthWarning(id))
        },
    }
}

export default connect<IStateProps, IDispatchProps, { testID: string }>(mapStateToProps, mapDispatchToProps)(ContainerDealAttachments)
