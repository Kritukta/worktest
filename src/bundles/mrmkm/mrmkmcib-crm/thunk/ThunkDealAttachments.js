/*
 * Created by Vladykin A. S.
 */
import { Enums } from '../Enums';
import { defaultValues } from '../models/Models';
import * as Converters from '../models/Converters';
import * as util from '../common/Util';
import * as thunkDealAttachments from '../thunk/ThunkDealAttachments';
import * as actionsDeal from '../actions/ActionsDeal';
import * as actionsDealAttachments from '../actions/ActionsDealAttachments';
import { SplitPanelActions } from 'ufs-mobile-platform';
import { RMSForUFS } from 'mrmkmcib-ui';
export const performApplicationInit = () => (dispatch) => {
    dispatch(actionsDeal.navigateToDealAttachmentsScreen());
};
const DOWNLOAD_ATTACHMENT_FAILURE_CODE = '4152314';
/*
 * Thunk dispatched by "DealAttachments" screen. Thunk dispatched on user tap navigate back.
 */
export const navigateBack = () => (dispatch) => {
    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRM)));
    dispatch(actionsDeal.navigateBackFromDealAttachmentsScreen());
};
export const downloadAttachment = (id) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealAttachments;
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)));
    if (util.isAttachmentLoading(id, reducerState.dealAttachments)) {
        return;
    }
    dispatch(actionsDealAttachments.downloadAttachmentInit(Object.assign({}, defaultValues.DealAttachment, { id })));
    util.downloadAndSaveInCahce(id, state)
        .then((fileId) => {
        dispatch(actionsDealAttachments.downloadAttachmentSuccess(Object.assign({}, defaultValues.DealAttachment, { id,
            fileId })));
        state = getState();
        reducerState = state.user.mrmkmcibCRM.reducerDealAttachments;
        if (!reducerState.fileHandlingStarted) {
            dispatch(actionsDealAttachments.decryptAttachmentInit(Object.assign({}, defaultValues.DealAttachment, { id })));
            RMSForUFS
                .decryptFile(fileId)
                .then((fileId) => {
                dispatch(actionsDealAttachments.decryptAttachmentSuccess());
                dispatch(actionsDealAttachments.setCurrentFileId(Object.assign({}, defaultValues.DealAttachment, { fileId })));
                dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(fileId));
            })
                .catch((error) => {
                dispatch(actionsDealAttachments.decryptAttachmentFailure(Object.assign({}, defaultValues.DealAttachment, { id, error: Object.assign({}, defaultValues.Error, { message: error.message, code: String(error.code) }) })));
                dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(''));
            });
        }
    })
        .catch((error) => {
        dispatch(actionsDealAttachments.downloadAttachmentFailure(Object.assign({}, defaultValues.DealAttachment, { id, error: Object.assign({}, defaultValues.Error, { message: `${error.message}. Код ошибки: ${String(error.code)}`, code: DOWNLOAD_ATTACHMENT_FAILURE_CODE }) })));
        dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(''));
    });
};
export const performShowAuthWarning = (id) => (dispatch) => {
    dispatch(actionsDealAttachments.performShowAuthWarning());
    // set dealCurrentAttachment
    dispatch(thunkDealAttachments.performSetCurrentAttachment(Object.assign({}, defaultValues.DealAttachment, { id })));
    dispatch(thunkDealAttachments.navigateToAuthWarningScreen());
};
export const navigateToAuthWarningScreen = () => (dispatch) => {
    dispatch(actionsDealAttachments.navigateToAuthWarningScreen());
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealAttachmentsScreen.DealAttachments_AuthWarningPage, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)));
};
export const navigateToAttachmentsFileViewerScreen = (fileId) => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealAttachments;
    dispatch(actionsDealAttachments.setCurrentFileId(Object.assign({}, defaultValues.DealAttachment, { fileId })));
    if (!reducerState.fileViewerScreenOpened) {
        dispatch(actionsDealAttachments.navigateToFileViewerScreen());
        dispatch(SplitPanelActions.pushContent(Enums.NavigationContentDealAttachmentsScreen.DealAttachments_ViewerPage, util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)));
    }
};
export const navigateBackToAttachments = () => (dispatch) => {
    dispatch(thunkDealAttachments.performResetCurrentAttachment());
    dispatch(actionsDealAttachments.performNavigationBackToAttachmentsList());
    dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)));
};
/*
 * Thunk dispatched by "DealAttachments" screen. Thunk chain used to load DealAttachments data.
 */
export const performRefreshAttachmentsList = () => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealAttachments;
    if (reducerState.dealAttachmentsFetching) {
        return;
    }
    dispatch(actionsDealAttachments.performRefreshAttachmentsList());
    if (!reducerState.dealAttachmentsFetching) {
        dispatch(callGetDealAttachments());
    }
};
export const performAttachmentReload = (id) => (dispatch) => {
    dispatch(actionsDealAttachments.performAttachmentReload());
    dispatch(thunkDealAttachments.downloadAttachment(id));
};
export const performSearchModeEnable = () => (dispatch) => {
    dispatch(actionsDealAttachments.performSearchModeEnable());
};
export const performSearchModeDisable = () => (dispatch) => {
    dispatch(actionsDealAttachments.performSearchModeDisable());
};
export const callGetDealAttachments = () => (dispatch, getState) => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerDealAttachments;
    if (reducerState.dealAttachmentsFetching) {
        return;
    }
    dispatch(actionsDealAttachments.callGetDealAttachments());
    if (!reducerState.dealAttachmentsFetching) {
        dispatch(actionsDealAttachments.callGetDealAttachmentsRequest());
        util.call(util.urlDealAttachments.callGetDealAttachments(state, [{ tag: Enums.CachePolicy.Disabled }]), (response) => {
            dispatch(actionsDealAttachments.callGetDealAttachmentsSuccess(response));
        }, (error) => {
            dispatch(actionsDealAttachments.callGetDealAttachmentsFailure(error));
        }, Converters.RESPONSE_CALL_GET_DEAL_ATTACHMENTS_TO_DEAL_ATTACHMENTS, 'GET');
    }
};
export const performInputDealAttachmentsSearch = (value) => (dispatch) => {
    dispatch(actionsDealAttachments.performInputDealAttachmentsSearch(value));
    dispatch(thunkDealAttachments.performDealAttachmentsSearch());
};
export const performDealAttachmentsSearch = () => (dispatch) => {
    dispatch(actionsDealAttachments.performDealAttachmentsSearch());
};
/*
 * Thunk dispatched by "DealAttachments" screen. Thunk chain used to show popover.
 */
export const performPopoverDealAttachmentsShow = (dealCurrentAttachment) => (dispatch) => {
    dispatch(actionsDealAttachments.performPopoverDealAttachmentsShow(dealCurrentAttachment));
};
/*
 * Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide popover.
 */
export const performPopoverDealAttachmentsHide = () => (dispatch) => {
    dispatch(actionsDealAttachments.performPopoverDealAttachmentsHide());
};
export const performShowModalFileTypeError = (fileType) => (dispatch) => {
    dispatch(actionsDealAttachments.performShowModalFileTypeError(fileType));
};
export const performHideModalFileTypeError = () => (dispatch) => {
    dispatch(actionsDealAttachments.performHideModalFileTypeError());
};
export const performSetCurrentAttachment = (dealCurrentAttachment) => (dispatch, getState) => {
    const state = getState();
    const reducerState = state.user.mrmkmcibCRM.reducerDealAttachments;
    const attachment = util.findAttachmentById(dealCurrentAttachment.id, reducerState.dealAttachments);
    dispatch(actionsDealAttachments.performSetCurrentAttachment(attachment));
};
export const performResetCurrentAttachment = () => (dispatch) => {
    dispatch(actionsDealAttachments.performResetCurrentAttachment());
};
export const performUnsupportedTypeBarHide = () => (dispatch) => {
    dispatch(actionsDealAttachments.performUnsupportedTypeBarHide());
};
//# sourceMappingURL=ThunkDealAttachments.js.map