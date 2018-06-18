/*
 * Created by Vladykin A. S.
 */

import * as ModelState from '../models/Models'
import {Models} from 'mrmkmcib-crm'
import {Enums} from '../Enums'
import Response from '../models/Response'
import Error from '../models/Error'
import {defaultValues} from '../models/Models'
import * as Converters from '../models/Converters'

import * as util from '../common/Util'

import * as thunkDealAttachments from '../thunk/ThunkDealAttachments'
import * as actionsDeal from '../actions/ActionsDeal'
import * as actionsDealAttachments from '../actions/ActionsDealAttachments'

import {SplitPanelActions} from 'ufs-mobile-platform'

import { RMSForUFS } from 'mrmkmcib-ui'

export const performApplicationInit = () => (dispatch: Function): void => {

    dispatch(actionsDeal.navigateToDealAttachmentsScreen())

}

const DOWNLOAD_ATTACHMENT_FAILURE_CODE: string = '4152314'

/*
 * Thunk dispatched by "DealAttachments" screen. Thunk dispatched on user tap navigate back.
 */
export const navigateBack = () => (dispatch: Function): void => {

    dispatch(SplitPanelActions.popContent(
        util.getNavigationString(Enums.Navigation.AppCRM)
    ))

    dispatch(actionsDeal.navigateBackFromDealAttachmentsScreen())
}

export const downloadAttachment = (id: string) => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealAttachments

    dispatch(SplitPanelActions.popContent(
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)
    ))

    if (util.isAttachmentLoading(id, reducerState.dealAttachments)) {
        return
    }

    dispatch(actionsDealAttachments.downloadAttachmentInit({
        ...defaultValues.DealAttachment,
        id,
    }))

    util.downloadAndSaveInCahce(id, state)
        .then((fileId: string) => {

            dispatch(actionsDealAttachments.downloadAttachmentSuccess({
                ...defaultValues.DealAttachment,
                id,
                fileId
            }))

            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerDealAttachments

            if (!reducerState.fileHandlingStarted) {
                dispatch(actionsDealAttachments.decryptAttachmentInit({
                    ...defaultValues.DealAttachment,
                    id,
                }))

                RMSForUFS
                    .decryptFile(fileId)
                    .then((fileId: string) => {
                        dispatch(actionsDealAttachments.decryptAttachmentSuccess())
                        dispatch(actionsDealAttachments.setCurrentFileId({
                            ...defaultValues.DealAttachment,
                            fileId,
                        }))
                        dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(fileId))
                    })
                    .catch((error: Error) => {
                        dispatch(actionsDealAttachments.decryptAttachmentFailure({
                            ...defaultValues.DealAttachment,
                            id,
                            error: {
                                ...defaultValues.Error,
                                message: error.message,
                                code: String(error.code)
                            }
                        }))
                        dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(''))
                    })
            }
        })
        .catch((error: Error) => {
            dispatch(actionsDealAttachments.downloadAttachmentFailure({
                ...defaultValues.DealAttachment,
                id,
                error: {
                    ...defaultValues.Error,
                    message: `${error.message}. Код ошибки: ${String(error.code)}`,
                    code: DOWNLOAD_ATTACHMENT_FAILURE_CODE
                }
            }))
            dispatch(thunkDealAttachments.navigateToAttachmentsFileViewerScreen(''))
        })
}

export const performShowAuthWarning = (id: string) => (dispatch: Function): void => {

    dispatch(actionsDealAttachments.performShowAuthWarning())

    // set dealCurrentAttachment
    dispatch(thunkDealAttachments.performSetCurrentAttachment({
        ...defaultValues.DealAttachment,
        id,
    }))

    dispatch(thunkDealAttachments.navigateToAuthWarningScreen())
}

export const navigateToAuthWarningScreen = () => (dispatch: Function): void => {

    dispatch(actionsDealAttachments.navigateToAuthWarningScreen())

    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationContentDealAttachmentsScreen.DealAttachments_AuthWarningPage,
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)
    ))
}

export const navigateToAttachmentsFileViewerScreen = (fileId: string) => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealAttachments

    dispatch(actionsDealAttachments.setCurrentFileId({
        ...defaultValues.DealAttachment,
        fileId,
    }))

    if (!reducerState.fileViewerScreenOpened) {
        dispatch(actionsDealAttachments.navigateToFileViewerScreen())

        dispatch(SplitPanelActions.pushContent(
            Enums.NavigationContentDealAttachmentsScreen.DealAttachments_ViewerPage,
            util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)
        ))
    }
}

export const navigateBackToAttachments = () => (dispatch: Function): void => {

    dispatch(thunkDealAttachments.performResetCurrentAttachment())

    dispatch(actionsDealAttachments.performNavigationBackToAttachmentsList())
    dispatch(SplitPanelActions.popContent(
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealScreen_Attachments)
    ))

}

/*
 * Thunk dispatched by "DealAttachments" screen. Thunk chain used to load DealAttachments data.
 */
export const performRefreshAttachmentsList = () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerDealAttachments

    if (reducerState.dealAttachmentsFetching) {
        return
    }

    dispatch(actionsDealAttachments.performRefreshAttachmentsList())

    if (!reducerState.dealAttachmentsFetching) {
        dispatch(callGetDealAttachments())
    }
}

export const performAttachmentReload = (id: string) => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performAttachmentReload())
    dispatch(thunkDealAttachments.downloadAttachment(id))
}

export const performSearchModeEnable = () => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performSearchModeEnable())
}

export const performSearchModeDisable = () => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performSearchModeDisable())
}

export const callGetDealAttachments = () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDealAttachments

    if (reducerState.dealAttachmentsFetching) {
        return
    }

    dispatch(actionsDealAttachments.callGetDealAttachments())

    if (!reducerState.dealAttachmentsFetching) {

        dispatch(actionsDealAttachments.callGetDealAttachmentsRequest())

        util.call<Models.IDealAttachmentList, void>(
            util.urlDealAttachments.callGetDealAttachments(state, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<Models.IDealAttachmentList>) => {
                dispatch(actionsDealAttachments.callGetDealAttachmentsSuccess(response))
            },

            (error: Error) => {
                dispatch(actionsDealAttachments.callGetDealAttachmentsFailure(error))
            },

            Converters.RESPONSE_CALL_GET_DEAL_ATTACHMENTS_TO_DEAL_ATTACHMENTS,

            'GET'
        )
    }
}

export const performInputDealAttachmentsSearch = (value: string) => (dispatch: Function): void => {

    dispatch(actionsDealAttachments.performInputDealAttachmentsSearch(value))

    dispatch(thunkDealAttachments.performDealAttachmentsSearch())

}

export const performDealAttachmentsSearch = () => (dispatch: Function): void => {

    dispatch(actionsDealAttachments.performDealAttachmentsSearch())

}

/*
 * Thunk dispatched by "DealAttachments" screen. Thunk chain used to show popover.
 */
export const performPopoverDealAttachmentsShow = (dealCurrentAttachment: Models.DealAttachment) => (
    dispatch: Function
): void => {

    dispatch(actionsDealAttachments.performPopoverDealAttachmentsShow(dealCurrentAttachment))

}

/*
 * Thunk dispatched by "DealAttachments" screen. Thunk chain used to hide popover.
 */
export const performPopoverDealAttachmentsHide = () => (dispatch: Function): void => {

    dispatch(actionsDealAttachments.performPopoverDealAttachmentsHide())

}

export const performShowModalFileTypeError = (fileType: string) => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performShowModalFileTypeError(fileType))
}

export const performHideModalFileTypeError = () => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performHideModalFileTypeError())
}

export const performSetCurrentAttachment = (dealCurrentAttachment: Models.DealAttachment) => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerDealAttachments

    const attachment = util.findAttachmentById(dealCurrentAttachment.id, reducerState.dealAttachments)
    dispatch(actionsDealAttachments.performSetCurrentAttachment(attachment))
}

export const performResetCurrentAttachment = () => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performResetCurrentAttachment())
}

export const performUnsupportedTypeBarHide = () => (dispatch: Function): void => {
    dispatch(actionsDealAttachments.performUnsupportedTypeBarHide())
}
