/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"
import {
    EnumsApp,
    Models as ModelsApp,
    performNavigateToEntity,
    supParamNames,
    performNavigateBack,
} from 'mrmkmcib-app'
import {Models as ModelsCrm, EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-dashboard"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsCustomerDashboard from '../actions/ActionsCustomerDashboard'
import {
    SplitPanelActions,
    Cookie,
    CookieData,
    Settings,
} from 'ufs-mobile-platform'
import * as thunkCustomerDashboard from './ThunkCustomerDashboard'
import {OWAService} from 'mrmkmcib-ui'
import {Base64} from 'js-base64'

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update inputSharePopoverSearch prop.
 */
export const inputSharePopoverSearchRefresh = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.inputSharePopoverSearchRefresh(value))

    let lastInput = reducerState.inputSharePopoverSearch;
    setTimeout(() => {
        if (getState().user.mrmkmcibDashboard.reducerCustomerDashboard.inputSharePopoverSearch.length >= 3) {
            dispatch(thunkCustomerDashboard.performFindPeople())
        }
    }, 2000)



}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update recipients prop.
 */
export const inputCurrentRecipientListRefresh = (value: ModelsScheduler.Person, operation: Enums.Operation) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    let initialList = state.user.mrmkmcibDashboard.reducerCustomerDashboard.currentRecipientList

    if(operation == Enums.Operation.Add) {
        let resultList = util.personListAdd(initialList, value)
        dispatch(actionsCustomerDashboard.inputCurrentRecipientListRefresh(resultList, operation))
    }
    if(operation == Enums.Operation.Remove) {
        let resultList = util.personListRemove(initialList, value)
        dispatch(actionsCustomerDashboard.inputCurrentRecipientListRefresh(resultList, operation))
    }

}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to clear foundPersonList prop.
 */
export const foundPersonListClear = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.performFoundPeopleListClear())


}


/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update representation prop.
 */
export const inputCurrentRepresentationRefresh = (value: Enums.Representation) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.inputCurrentRepresentationRefresh(value))


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update fileFormat prop.
 */
export const inputCurrentFileFormatRefresh = (value: Enums.FileFormat) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.inputCurrentFormatRefresh(value))


}


/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update shareData prop.
 */
export const shareDataRefresh = (message: Models.QlikMessage) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.shareDataRefresh(message))


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate back in popover.
 */
export const navigateToPopoverShareBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(SplitPanelActions.popContent(Enums.SharePopoverNavigation.Main))

    dispatch(actionsCustomerDashboard.navigateToPopoverShareBack())

    dispatch(actionsCustomerDashboard.performPopoverSearchScreenHide())


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate recipients page in popover.
 */
export const navigateToPopoverShareRecipientsScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(SplitPanelActions.pushContent(
        Enums.SharePopoverNavigation.Recipients,
        Enums.SharePopoverNavigation.Main.toString())
    )

    dispatch(actionsCustomerDashboard.navigateToPopoverShareRecipientsScreen())

    dispatch(actionsCustomerDashboard.performPopoverSearchScreenShow())


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
 */
export const navigateToPopoverShareRepresentationScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(SplitPanelActions.pushContent(
        Enums.SharePopoverNavigation.Representation,
        Enums.SharePopoverNavigation.Main.toString())
    )

    dispatch(actionsCustomerDashboard.navigateToPopoverShareRepresentationScreen())


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate file format page in popover.
 */
export const navigateToPopoverShareFormatScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(SplitPanelActions.pushContent(
        Enums.SharePopoverNavigation.Format,
        Enums.SharePopoverNavigation.Main.toString())
    )

    dispatch(actionsCustomerDashboard.navigateToPopoverShareFormatScreen())


}
/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
 */
export const performPopoverShareShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.performPopoverShareShow())


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to hide popover.
 */
export const performPopoverShareHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.performPopoverShareHide())

    dispatch(actionsCustomerDashboard.performPopoverSearchScreenHide())


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on analytics tab open.
 */
export const performApplicationInit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.performApplicationInit())

    dispatch(setQlikCookie())

    dispatch( thunkCustomerDashboard.performUpdateSupParameters())

    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(thunkCustomerDashboard.swapContext(state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged, state.user.mrmkmcibApp.reducerAuthorization.currentUser))


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched to handle Qlik error.
 */
export const handleQlikError = (error: Error | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.handleQlikError(error))


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
 */
export const callQlikAvailabilityCheck = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    if (reducerState.qlikAvailabilityCheckFetching) {
        return
    }

    if (util.QLIK_CERTIFICATE_VERIFICATION) {
        dispatch(thunkCustomerDashboard.verifyCertificate())
    }


    dispatch(actionsCustomerDashboard.callQlikAvailabilityCheck())


    if (!reducerState.qlikAvailabilityCheckFetching) {
        dispatch(actionsCustomerDashboard.callQlikAvailabilityCheckRequest())

        util.ping(
            util.urlCustomerDashboard.callQlikAvailabilityCheck(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),
            (response: Response<boolean>) => {

                dispatch(actionsCustomerDashboard.callQlikAvailabilityCheckSuccess(response))


            },

            (error: Error) => {

                dispatch(actionsCustomerDashboard.callQlikAvailabilityCheckFailure(error))


            },

            'GET'
        )
    }
}

/*
 * Internal thunk used in "CustomerDashboard" container. Thunk chain dispatched to set context parameters.
 */
export const swapContext = (customerManaged: ModelsCrm.CustomerManaged, user: ModelsApp.Employee,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.swapContext(customerManaged, user,))


}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
 */
export const performQlikEvent = (message: Models.QlikMessage) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    if ( reducerState.currentRepresentation !== 0 ) {
        message.payload.defaultFileFormat = Enums.FileFormat.Excel
    }
    // логируем все пришедшие сообщения от клика
    dispatch(actionsCustomerDashboard.performQlikEvent(message))

    //let mess = JSON.parse(eventPayload)
    const navigateBackData: ModelsApp.NavigateToEntity = {
        ...defaultValues.NavigateToEntity,
        navigationType: EnumsApp.NavigationType.CustomerDashboard,
        customerId: state.user.mrmkmcibCRM.reducerCustomer.currentCustomerId,
        qlikUrl: message.payload.currentUrl
    }
    switch (message.type) {
        case  Enums.QlikEventType.GlobalClientSearch: {
            //alert( 'GlobalClientSearch  ')
            break
        }
        case Enums.QlikEventType.OpenDealCard: {
            // TODO убрать константы в id
            dispatch(performNavigateToEntity(
                {
                    ...defaultValues.NavigateToEntity,
                    navigationType: EnumsApp.NavigationType.CustomerDeal,
                    customer: {
                        ...defaultValues.CustomerUnknown,
                        id: message.payload.customerId || '',
                    },
                    deal: {
                        ...defaultValues.Deal,
                        id: message.payload.dealId || '',
                    },
                    dealMode: EnumsCrm.DealMode.NavigationBack
                },
                navigateBackData
            )) // '1-CHCFSE9' 100 KM
            break
        }
        case Enums.QlikEventType.OpenClientCardProductsTab: {
            dispatch(performNavigateToEntity(
                {
                    ...defaultValues.NavigateToEntity,
                    navigationType: EnumsApp.NavigationType.CustomerProducts,
                    customer: {
                        ...defaultValues.CustomerUnknown,
                        id: message.payload.customerId || '',
                    },
                    customerMode: EnumsCrm.CustomerMode.NavigationBack,
                },
                navigateBackData
            ))
            break
        }
        case Enums.QlikEventType.OpenClientCardAnalyticsTab: {
            dispatch(performNavigateToEntity(
                {
                    ...defaultValues.NavigateToEntity,
                    navigationType: EnumsApp.NavigationType.CustomerDashboard,
                    customer: {
                        ...defaultValues.CustomerUnknown,
                        id: message.payload.customerId || '',
                    },
                    customerMode: EnumsCrm.CustomerMode.SameType,
                    qlikUrl: message.payload.qlikUrl,
                },
                navigateBackData
            ))
           break
        }
        case Enums.QlikEventType.OpenClientCardActivity: {
            // TODO подставить id задачи
            dispatch(performNavigateToEntity({
                ...defaultValues.NavigateToEntity,
                navigationType: EnumsApp.NavigationType.Activity,
                customer: {
                    ...defaultValues.CustomerManaged,
                    id: message.payload.customerId || '',
                },
                activity: {
                    ...defaultValues.Activity,
                    id: message.payload.activityId,
                },
                isPrimary: false,
                customerMode: EnumsCrm.CustomerMode.NavigationBack,
            },
            navigateBackData
            )) // '1-CHCFSE9' 100 KM
            break
        }
        case Enums.QlikEventType.SearchLineOnFocus: {

            break
        }
        case Enums.QlikEventType.SearchLineOnBlur: {

            break
        }
        case Enums.QlikEventType.ThrowError: {

            dispatch(handleQlikError({
                type: Enums.ErrorType.QlikError,
                code: 'QlikSenseMashupError',
                message: util.qlikErrorMessages.QlikSenseMashupError,
                comment: util.getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters),
            }))

            break
        }
        case Enums.QlikEventType.Printing: {


            break
        }
        case  Enums.QlikEventType.OnLoad: {
            dispatch(shareDataRefresh(message))
            break
        }
        // открытие стартовой страницы Qlik на карточке клиента
        case Enums.QlikEventType.leKpi: {
            break
        }
        // открытие kpi холдинга
        case Enums.QlikEventType.holdingKpi: {
            break
        }
        default: {
            dispatch(actionsCustomerDashboard.unknownQlikEvent(message))

        }
    }




}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.performContainerReset())


}



export const performUpdateSupParameters = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    Settings
        .get([
            supParamNames().DashboardChiefURL,
            supParamNames().DashboardKmURL,
            supParamNames().dashboardExportAccessMode
        ])
        .then(
            (resolve: object) => {
                const params = Converters.CONVERT_SUP_PARAMETERS(resolve)

                dispatch(actionsCustomerDashboard.performUpdateSupParameters(params))
                // Dispatch thunk "callQlikAvailabilityCheck" synchronously.


                dispatch(thunkCustomerDashboard.callQlikAvailabilityCheck())
        })
        .catch(
            (error) => {
                dispatch(actionsCustomerDashboard.performUpdateSupParametersFailure({
                    ...defaultValues.Error
                }))
                // Dispatch thunk "callQlikAvailabilityCheck" synchronously.

                dispatch(thunkCustomerDashboard.callQlikAvailabilityCheck())
        })
}

/*
 * Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to set qlik url value.
 */
export const setCurrentCustomerDashboardQlikUrl = (url: string | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard


    dispatch(actionsCustomerDashboard.setCurrentCustomerDashboardQlikUrl(url))

}


/*
 * Thunk used to find people via OWA.
 */
export const performFindPeople = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    if (reducerState.foundPersonListInProgress) {
        return
    }

    dispatch(actionsCustomerDashboard.performFindPeople())


    if (!reducerState.foundPersonListInProgress) {
        dispatch(actionsCustomerDashboard.performFindPeopleExecute())
    }

    OWAService.findPeople(reducerState.inputSharePopoverSearch)
        .then((response: OWAService.FindPeopleResponse) => {

            const resp = {
                data: response.Items.map((item: OWAService.FindPeopleResponseItem) => {
                    return Converters.CONVERT_OWA_FOUND_PEOPLE_ITEM(item)
                })
            }
            dispatch(thunkCustomerDashboard.performFindPeopleSuccess(resp))
        })
        .catch((error) => {
            dispatch(thunkCustomerDashboard.performFindPeopleFailure({
                ...defaultValues.Error
            }))
        })

    // }


}

export const performFindPeopleSuccess = (data: ModelsScheduler.PersonList) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.performFindPeopleSuccess(data))


}

export const performFindPeopleFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.performFindPeopleFailure(error))


}

export const performPersistPeopleHistoryList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerCustomerDashboard


    util.persistPeopleHistoryListToStorage( reducerState.personHistoryList )

    dispatch(actionsCustomerDashboard.performPersistPeopleHistoryList())

}

export const performRecoverPeopleHistoryList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerCustomerDashboard


    if (reducerState.personHistoryListInProgress) {
        return
    }


    dispatch(actionsCustomerDashboard.performRecoverPeopleHistoryList())

    reducerState = getState().user.mrmkmcibDashboard.reducerCustomerDashboard

    if (!reducerState.personHistoryListInProgress) {
        dispatch(actionsCustomerDashboard.performRecoverPeopleHistoryListExecute())


        util.recoverPeopleHistoryListFromStorage()
            .then((data) => {
                // Success thunk chain resolve.
                dispatch(thunkCustomerDashboard.performRecoverPeopleHistoryListSuccess(data))
            })
            .catch((error) => {
                dispatch(thunkCustomerDashboard.performRecoverPeopleHistoryListFailure(error))
            })
    }


}

export const performRecoverPeopleHistoryListSuccess = (data: ModelsScheduler.PersonList) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.performRecoverPeopleHistoryListSuccess(data))


}

export const performRecoverPeopleHistoryListFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let reducerState = getState().user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.performRecoverPeopleHistoryListFailure(error))


}

/*
 * Thunk used to send file.
 */
export const performSend = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard
    const initiatorEmail = state.user.mrmkmcibScheduler.reducerAppScheduler.currentExchangePerson.email

    // Check Qlik service availability
    dispatch(actionsCustomerDashboard.callQlikAvailabilityCheck())

    if (getState().user.mrmkmcibDashboard.reducerCustomerDashboard.sendFetching) {
        return
    }
    if (reducerState.qlikAvailabilityCheckError != null) {
        return
    }

    dispatch(actionsCustomerDashboard.performSend())

    state = getState()
    reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard

    dispatch(actionsCustomerDashboard.performAddPeopleHistoryList(reducerState.currentRecipientList))

    dispatch(performPersistPeopleHistoryList())

    const emailList: string[] = []
    reducerState.currentRecipientList.data.map((item) => {emailList.push(item.email)})

    let body: Models.IPerformSend
    try {
        state = getState()
        reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard
        // парсим поле "generateFileParameters"
        const generateFileParameters: Models.GenerateFileParameters = Converters.CONVERT_QLICK_MESSAGE_TO_QLIK_PARAMETERS(reducerState.currentQlikMessage.payload.generateFileParameters)
        // записываем выбранный формат файла в поле "outputFormat"
        generateFileParameters.NPReportPOSTParameters.config.outputFormat = Converters.CONVERT_FILE_FORMAT_FROM_ENUM_TO_STRING(reducerState.currentFileFormat)
        generateFileParameters.NPReportPOSTParameters.initiatorEmail = initiatorEmail
        generateFileParameters.NPReportPOSTParameters.currentRepresentation = reducerState.currentRepresentation ? reducerState.currentRepresentation : Enums.Representation.Slides
        // переводим selectionsParsed в строку
        const selections = Base64.encode(JSON.stringify(generateFileParameters))

        body = {
            exportFilters: selections,
            emailList
        }

        dispatch(callSendFile(body))
    } catch (error) {
        dispatch(actionsCustomerDashboard.performSelectionsParseFailure(error))
    }

}

export const callSendFile = (body: Models.IPerformSend) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard

    dispatch(actionsCustomerDashboard.callSendFile())

    dispatch(actionsCustomerDashboard.callSendFileExecute())

    util.call<void, Models.IPerformSend>(
        util.urlAppDashboard.sendFile(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

        (response: Response<void>) => {

            dispatch(actionsCustomerDashboard.callSendFileSuccess())

        },

        (error: Error) => {

            dispatch(actionsCustomerDashboard.callSendFileFailure(error))

        },
        Converters.POST_PREFORM_SEND_TO_BOOLEAN,
        'POST',
        {'Content-type': 'application/json; charset=UTF-8'},
        Converters.REQUEST_DASHBOARD_CALL_POST_PERFORM_SEND,
        body,
    )

}

/*
 * Thunk used to cut top of QlikView.
 */
export const setTrimmedTop = (value: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsCustomerDashboard.setTrimmedTop(value))
}

declare var __DEV__: boolean

const getQlikCookieData = (cookies: Array<CookieData>): CookieData | null => {
    if (Array.isArray(cookies) && cookies.length) {
        return cookies.find(cookieObject => cookieObject.Name === 'X-Qlik-Session') || null
    } else {
        return null
    }
}

export const setQlikCookie = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerAppDashboard

    Cookie.get((cookies: Array<CookieData>) => {

        const data: CookieData | null = getQlikCookieData(cookies)

        if (data && data.Value) {
            dispatch (actionsCustomerDashboard.setQlikCookie (data.Value))
        } else if (__DEV__) {
            // console.log ('\n\n', 'WARNING!!! UFS Cookie interfase is ivalid', cookies, '\n\n')
        }
    })

}

export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(performNavigateBack())
}

export const verifyCertificate = () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibDashboard.reducerCustomerDashboard
    const isCertifacateImported = state.user.mrmkmcibScheduler.reducerAppScheduler.currentExchangePerson.id != ''

    if (!isCertifacateImported) {
        dispatch(handleQlikError({
            type: Enums.ErrorType.QlikSenseCertMobileAppError,
            code: 'QlikSenseCertMobileAppError',
            message: util.qlikErrorMessages.QlikSenseCertificateError,
            comment: util.getUrlForRole(reducerState.currentUser.roleAd, reducerState.supParameters),
        }))
    }
}
