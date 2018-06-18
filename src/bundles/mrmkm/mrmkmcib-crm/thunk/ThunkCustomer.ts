/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"
import {
    Models,
    isCustomerHolder,
} from "mrmkmcib-crm"

import {
    setTrimmedTop as setCustomerDashboardTrimmedTop,
    setCurrentCustomerDashboardQlikUrl,
} from 'mrmkmcib-dashboard'

import {navigateBackFromCustomerScreen} from "mrmkmcib-directory"
import {
    EnumsScheduler,
    performActivityListRefresh,
    performInputActivity
} from 'mrmkmcib-scheduler';

import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"
import * as ModelsCustomer from "../models/ModelsCustomer"

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsCustomer from '../actions/ActionsCustomer'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkDealList from '../thunk/ThunkDealList'
import * as thunkDealListSearch from '../thunk/ThunkDealListSearch'
import * as thunkProduct from '../thunk/ThunkProduct'
import * as thunkProductList from '../thunk/ThunkProductList'
import * as thunkProductCredit from '../thunk/ThunkProductCredit'

import * as thunkLimit from '../thunk/ThunkLimit'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkOccasionList from '../thunk/ThunkOccasionList'
import * as thunkNoteList from '../thunk/ThunkNoteList'
import * as thunkAppCrm from '../thunk/ThunkAppCRM'


import * as ModelsSheduler from '../models/Models'
import {
    supParamNames,
    HistoryMobileApp,
    Models as ModelsApp,
    navigationExecutor,
    EnumsApp,
    performNavigateBack,
    performNavigateToEntity,
} from 'mrmkmcib-app'

import {defaultValues as ModelsAppDefault} from '../models/Models'

import {SplitPanelActions} from 'ufs-mobile-platform'


import * as _ from 'lodash'
import * as shedulerUtil from 'mrmkmcib-scheduler/common/Util'


import * as Cache from "../modules/Cache"
import * as thunkProductPaymentAccount from "./ThunkProductPaymentAccount";
import * as actionsProductList from "../actions/ActionsProductList";

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to toggle DashboardExpandedMode.
 */
export const performDashboardExpandedModeToggle = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    // Обрежем верх дашборда в расширенном виде вкладки Аналитика
    dispatch(setCustomerDashboardTrimmedTop(!reducerState.isDashboardExpandedMode))

    dispatch(actionsCustomer.performDashboardExpandedModeToggle())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to input search text.
 */
export const performInputSearchAffiliateList = (search: string) => (dispatch: Function): void => {


    dispatch(actionsCustomer.performInputSearchAffiliateList(search))
    dispatch(thunkCustomer.performAffiliateListSearch())

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to perform search query.
 */
export const performAffiliateListSearch = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performAffiliateListSearch())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to enable search mode.
 */
export const performSearchAffiliateListEnable = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performSearchAffiliateListEnable())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to enable search mode.
 */
export const performSearchAffiliateListDisable = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performSearchAffiliateListDisable())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain dispatched on tab selector change current tab.
 */
export const performChangeTab = (index: number, value: Enums.CustomerManagedTab,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    let reducerStateAppCRM = state.user.mrmkmcibCRM.reducerAppCRM
    let currentUser = reducerStateAppCRM.currentUser


    dispatch(actionsCustomer.performChangeTab(index, value,))


    // Dispatch thunk "performProductTypeListRefresh" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentTab == Enums.CustomerManagedTab.ProductTypeList) {
        dispatch(thunkCustomer.performProductTypeListRefresh())

        dispatch(thunkProductPaymentAccount.performContainerReset())
    }

    // Dispatch thunk "performContainerReset" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentTab == Enums.CustomerManagedTab.DealList) {
        dispatch(thunkDealList.performContainerReset())
    }

    // Dispatch thunk "performContainerReset" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer

    const isHolderForCustomer = isCustomerHolder(reducerState.currentCustomerManaged, currentUser)
    const agentListAccessLevel = isHolderForCustomer ?
        Enums.AgentListAccessLevel.Write :
        Enums.AgentListAccessLevel.Read

    if (reducerState.currentTab == Enums.CustomerManagedTab.Main) {
        dispatch(thunkAgentList.performContainerReset())
        dispatch(thunkAgentList.performOpenAgentListScreen(
            reducerState.currentCustomerManaged.agentList,
            reducerState.currentCustomerManaged,
            null,
            Enums.AgentListContextMode.Customer,
            agentListAccessLevel))
    }

    // Dispatch thunk "performDealListRefresh" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentTab == Enums.CustomerManagedTab.DealList) {
        dispatch(thunkDealList.performDealListRefresh())
    }

    if (reducerState.currentTab == Enums.CustomerManagedTab.Dashboard) {
    }
}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const performPopoverHolderShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(thunkCustomer.navigateToEmployeeViewScreen())
    // Dispatch thunk "navigateToEmployeeScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.holder != null) {
        dispatch(thunkEmployee.navigateToEmployeeScreen(reducerState.currentCustomerManaged.holder.id, true, Enums.EmployeeMode.CustomerManaged))
    } else
    if (reducerState.currentCustomer.id != '' && reducerState.currentCustomer.holder != null) {
        dispatch(thunkEmployee.navigateToEmployeeScreen(reducerState.currentCustomer.holder.id, true, Enums.EmployeeMode.Customer))
    }

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverHolderHide = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performPopoverHolderHide())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const performPopoverCuratorShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(thunkCustomer.navigateToEmployeeViewScreen())
    // Dispatch thunk "navigateToEmployeeScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.id != '' && reducerState.currentCustomerManaged.curator != null) {
        dispatch(thunkEmployee.navigateToEmployeeScreen(reducerState.currentCustomerManaged.curator.id, true, Enums.EmployeeMode.CustomerManaged, Enums.EmployeeHistoryActions.Reset))
    } else
    if (reducerState.currentCustomer.id != '' && reducerState.currentCustomer.curator != null) {
        dispatch(thunkEmployee.navigateToEmployeeScreen(reducerState.currentCustomer.curator.id, true, Enums.EmployeeMode.Customer, Enums.EmployeeHistoryActions.Reset))
    }
}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverCuratorHide = () => (dispatch: Function): void => {

    dispatch(actionsCustomer.performPopoverCuratorHide())
}


export const navigateBackHistoryMobileApp =  () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    const popContentCustomer = reducerState.currentMode != Enums.CustomerMode.SameType
    const popContentAppCRM = reducerState.customerNavigationHistory.length === 1

    dispatch(HistoryMobileApp.popContent(
        popContentCustomer ?
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer):
        ''
    ))
        .then((content: ModelsApp.HistoryMobileAppContent) => {
        if (content) {
            switch (content.type) {
                case EnumsApp.HistoryMobileAppType.Activity: {
                    if (content && content.payload &&
                        content.payload.activity &&
                        content.payload.activity.data) {

                        if (content.payload.activity.data.customer &&
                            (content.payload.activity.activityContextMode == EnumsScheduler.ActivityContextMode.Customer)) {

                            dispatch(navigateToCustomerScreen(content.payload.activity.data.customer,
                                Enums.CustomerMode.SameType,
                                Enums.ShowCustomer.Show))
                        }

                        let state = getState()
                        dispatch(performInputActivity(content.payload.activity.activityListContextMode,
                            content.payload.activity.data,
                            content.payload.activity.activityMode,
                            content.payload.activity.activityContextMode))

                    }
                    return;
                }
            }
        }

        dispatch(HistoryMobileApp.popContent(
            popContentAppCRM ?
                util.getNavigationString(Enums.Navigation.AppCRM):
                ''
        ))
        .then((content: ModelsApp.HistoryMobileAppContent) => {
                if (content) {

                    switch (content.type) {
                        case EnumsApp.HistoryMobileAppType.None: {
                            // Open Qlik
                            const qlikUrl = content.payload ? content.payload.qlikUrl : null
                            if (qlikUrl) {
                                dispatch(performNavigateToEntity({...defaultValues.NavigateToEntity, navigationType: EnumsApp.NavigationType.AppDashboard, qlikUrl}))
                                return
                            }
                        }
                        case EnumsApp.HistoryMobileAppType.Customer: {
                            if (content &&
                                content.payload &&
                                content.payload.customer) {

                                dispatch(thunkCustomer.callGetCustomerActivityList({...defaultValues.CustomerManaged, ...content.payload.customer}))

                            }
                            break
                        }
                        case EnumsApp.HistoryMobileAppType.Agent: {
                            if (content.payload && content.payload.agent) {

                                dispatch(thunkAgent.performOpenAgentScreen(content.payload.agent.data,
                                    {...defaultValues.CustomerManaged, ...content.payload.agent.customer},
                                    Enums.AgentMode.Watch,
                                    content.payload.agent.contextMode))
                            }
                            return
                        }
                }
            }
            dispatch(customerNavigateBack())
        })


    })
}
/**
 * Thunk dispatched by "Customer" screen.
 * Thunk used to navigate back from "Customer" page rendered in AppCRM container.
 */
export const customerNavigateBack = () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerCustomer
    const navigationHistory: Models.CustomerHistory[] = reducerState.customerNavigationHistory
    const navigationHistoryLength: number = navigationHistory.length

    if (navigationHistoryLength > 1) {
        const lastNavigationStep: Models.CustomerHistory = navigationHistory[navigationHistory.length - 1]
        const { currentTab, customer, customerManaged, navigationMode, currentAgreementStatus, currentDealForecast, currentDeal } = lastNavigationStep
        const customerId = customer.id !== '' ? customer.id : null
        const customerManagedId = customerManaged.id !== '' ? customerManaged.id : null
        const currentCustomerId = customerId || customerManagedId
        const previousCustomerId = navigationHistoryLength > 1 ? navigationHistory[navigationHistory.length - 2].customerManaged.id : currentCustomerId
        const previousCustomerMode = navigationHistoryLength > 1 ? navigationHistory[navigationHistory.length - 2].navigationMode : Enums.CustomerMode.CommonBack

        const qlikUrl = state.user.mrmkmcibApp.reducerAuthorization.navigateBackData != null ?
            state.user.mrmkmcibApp.reducerAuthorization.navigateBackData.qlikUrl :
            null

        switch(reducerState.currentMode) {
            case Enums.CustomerMode.NavigationBack: {
                dispatch(performNavigateBack())
                break
            }
            case Enums.CustomerMode.AppDirectoryBack: {
                dispatch(thunkAppCrm.navigateBack())
                dispatch(navigateBackFromCustomerScreen())
                break
            }
            case Enums.CustomerMode.SameType: {
                if (previousCustomerId) {
                    dispatch(getCustomerDataById(previousCustomerId))
                }
                break
            }
            case Enums.CustomerMode.CommonBack:
            default: {
                dispatch(thunkAppCrm.navigateBack())
            }
        }
        /*
        Удалил второе условие из этой строчки (UFO-26770), т.к. нарушалась логика работы других проверок
        if (currentCustomerId && (reducerState.currentMode !== Enums.CustomerMode.CommonBack)) {
         */
        if (currentCustomerId) {
            if (reducerState.currentMode != Enums.CustomerMode.SameType) {
                dispatch(actionsCustomer.navigateBack())
                dispatch(thunkCustomer.callGetCustomerActivityList(
                    {
                        ...defaultValues.CustomerManaged,
                        id: currentCustomerId,
                        organizationType: customerManaged.organizationType,
                    }
                ))
            } else {
                if (previousCustomerId) {
                    dispatch(thunkCustomer.callGetCustomerActivityList(
                        {
                            ...defaultValues.CustomerManaged,
                            id: previousCustomerId,
                            organizationType: customerManaged.organizationType,
                        }
                    ))
                }
            }
            if (currentDealForecast.id && currentDealForecast.id !== '') {
                dispatch (actionsProductList.navigateToProductForecastDealInfoScreen (currentDealForecast))
            }

            if (currentDeal.id !== '') {
                dispatch(thunkDeal.performSetDeal(currentDeal))
                dispatch (thunkDeal.performRefresh ())
            }

            if (currentTab) {
                switch(currentTab) {
                    case Enums.CustomerManagedTab.Dashboard: {
                        dispatch(setCurrentCustomerDashboardQlikUrl(qlikUrl))
                        dispatch(thunkCustomer.performChangeTab(currentTab, currentTab))
                        break
                    }
                    default: {
                        dispatch(thunkCustomer.performChangeTab(currentTab, currentTab))
                    }
                }
            }
            if (currentAgreementStatus && currentAgreementStatus !== 0) {
                dispatch(thunkCustomer.performInputProductAgreementStatus(currentAgreementStatus))
            }
        }

        dispatch(actionsCustomer.navigationHistoryPop(previousCustomerMode))
    } else {

        let navigateBackData = state.user.mrmkmcibApp.reducerAuthorization.navigateBackData != null ?
            state.user.mrmkmcibApp.reducerAuthorization.navigateBackData.navigationType :
            null

        if (navigateBackData === EnumsApp.NavigationType.AppNotice) {
            dispatch(SplitPanelActions.resetAllSplitPanels())
            dispatch(performNavigateBack())
        } else {
            switch(reducerState.currentMode) {
                case Enums.CustomerMode.NavigationBack: {
                    dispatch(actionsCustomer.navigationHistoryPop(Enums.CustomerMode.CommonBack))
                    dispatch(performNavigateBack())
                    break
                }
                default: {
                    dispatch(setCurrentCustomerDashboardQlikUrl(null))
                    dispatch(actionsCustomer.navigationHistoryPop(Enums.CustomerMode.CommonBack))
                    dispatch(thunkAppCrm.navigateBack())
                }
            }
        }

    }
}

/**
 * Thunk dispatched by "Customer" screen.
 * Thunk used to navigate back from page rendered in "Customer" container.
 */
export const navigateBack = () => (
    dispatch: Function,
    getState: () => ModelState.IRootState
): void => {

    dispatch(SplitPanelActions.popContent(
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)
    ))
}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const navigateToAgentListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerCustomer
	const reducerStateAppCRM = state.user.mrmkmcibCRM.reducerAppCRM
	const currentUser = reducerStateAppCRM.currentUser

    const currentCustomer: Models.Customer =
        reducerState.currentCustomerManaged != null &&
        reducerState.currentCustomerManaged.id != '' ?
            reducerState.currentCustomerManaged :
            reducerState.currentCustomer

    const isHolderForCustomer = isCustomerHolder(currentCustomer, currentUser)
    const agentListAccessLevel = isHolderForCustomer ?
        Enums.AgentListAccessLevel.Write :
        Enums.AgentListAccessLevel.Read

    dispatch(actionsCustomer.navigateToAgentListScreen())

    dispatch(thunkAgentList.performOpenAgentListScreen(
        reducerState.currentCustomerManaged.agentList,
        reducerState.currentCustomerManaged,
        null,
        Enums.AgentListContextMode.Customer,
        agentListAccessLevel))

    dispatch(HistoryMobileApp.pushContent({
        type: EnumsApp.HistoryMobileAppType.Customer,
        splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
        index: Enums.NavigationContentAppCrm.AppCRM_AgentList,
        data: {...defaultValues.HistoryMobileAppData, customer: reducerState.currentCustomerManaged}
    }))

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const navigateToMemberListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(actionsCustomer.navigateToMemberListScreen())

    // Dispatch thunk "performMemberListRefresh" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(thunkMemberList.performMemberListRefresh(defaultValues.Activity, defaultValues.Deal, reducerState.currentCustomerManaged, defaultValues.Gsz, defaultValues.Agent, true, Enums.MemberListMode.CustomerManaged))

    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentCustomer.MemberList,util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)))

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to navigate to employee screen.
 */
export const navigateToEmployeeViewScreen = () => (dispatch: Function): void => {

    dispatch(actionsCustomer.navigateToEmployeeViewScreen())

    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentCustomer.EmployeeView,
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)))
}


export const performReturnToCustomerScreen = (splitPanelName: string) =>
    (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(HistoryMobileApp.popContent(splitPanelName))
        .then((content: ModelsApp.HistoryMobileAppContent)=> {
            if (content && (content.type == EnumsApp.HistoryMobileAppType.Customer) &&
                content.payload && content.payload.customer) {

                dispatch(thunkCustomer.customer_callGetCustomer({...defaultValues.CustomerManaged,
                                                                 ...content.payload.customer}))
                dispatch(thunkCustomer.callGetCustomerActivityList({...defaultValues.CustomerManaged,
                    ...content.payload.customer}))
            }
        })
}


export const performAddCustomerToHistoryMobileApp = (index: number, splitPanelName: string, customer: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(HistoryMobileApp.pushContent({
        splitPanelName,
        index,
        type: EnumsApp.HistoryMobileAppType.Customer,
        data: {
            ...defaultValues.HistoryMobileAppData,
            customer,
        },
    }))
}
/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to navigate to occasion list screen.
 */
export const navigateToOccasionListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let occasionListAccessLevel: Enums.OccasionListAccessLevel = reducerState.currentCustomerManaged.id != '' ?
        Enums.OccasionListAccessLevel.Write :
        Enums.OccasionListAccessLevel.Read

    dispatch(actionsCustomer.navigateToOccasionListScreen())

    dispatch(thunkOccasionList.performSetOccasionListAccessLevel(occasionListAccessLevel))


    // Dispatch thunk "navigateToOccasionListScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    occasionListAccessLevel = state.user.mrmkmcibCRM.reducerOccasionList.occasionListAccessLevel
    if (reducerState.currentCustomerManaged.id != '') {

        dispatch(performAddCustomerToHistoryMobileApp(Enums.NavigationContentCustomer.OccasionList,
            util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer),
            reducerState.currentCustomerManaged))

        dispatch(thunkOccasionList.performOpenOccasionListScreen(
            reducerState.currentCustomerManaged.occasionList,
            {contextMode: Enums.OccasionListContextMode.CustomerManaged,
            accessLevel: occasionListAccessLevel,
            currentAgent: null,
            currentCustomer: reducerState.currentCustomerManaged},
        ))
        // вызываем степ - Occasion_PerformRefreshOccasionSuccess
        dispatch(navigationExecutor(EnumsApp.NavigationStep.Occasion_PerformRefreshOccasionSuccess))
    } else {
        dispatch(navigationExecutor(
            EnumsApp.NavigationStep.Navigation_ErrorStep,
            'Ошибка при загрузке важных дат клиента: не найден id currentCustomerManaged'
        ))
    }

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const performPopoverOccasionListShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    dispatch(actionsCustomer.performPopoverOccasionListShow())


    // Dispatch thunk "navigateToOccasionListScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.id != '') {
        dispatch(thunkOccasionList.performOpenOccasionListScreen(
            reducerState.currentCustomerManaged.occasionList,
            {...defaultValues.OccasionListConfig,
                currentCustomer: reducerState.currentCustomerManaged,
                contextMode: Enums.OccasionListContextMode.CustomerManaged}))
    }

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverOccasionListHide = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performPopoverOccasionListHide())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const performPopoverNoteListShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    dispatch(actionsCustomer.performPopoverNoteListShow())


    // Dispatch thunk "navigateToNoteListScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentCard.AgentNoteList,
        util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)))

    if (reducerState.currentCustomerManaged.id != '') {
        dispatch(thunkNoteList.navigateToNoteListScreen(reducerState.currentCustomerManaged.noteList,
            defaultValues.Agent,
            reducerState.currentCustomerManaged,
            Enums.NoteListContextMode.Customer,
            Enums.NoteListAccessLevel.Write))
    }
}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverNoteListHide = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performPopoverNoteListHide())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const performPopoverProblemListShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    let troubleCriteriaList = reducerState.currentCustomerManaged.troubleCriteriaList

    if (
        troubleCriteriaList &&
        troubleCriteriaList.data &&
        troubleCriteriaList.data.length
    ) {
        dispatch(actionsCustomer.performPopoverProblemListShow())
    }


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverProblemListHide = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performPopoverProblemListHide())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to navigate to owner screen.
 */
export const performNavigateToOwnerScreen = (
    owner: Models.Owner,
    customerMode: Enums.CustomerMode
) => (dispatch: Function): void => {

    dispatch(thunkCustomer.performPopoverOwnerHide())
    if (typeof owner.organizationId === 'string') {
        dispatch(thunkAppCrm.performCustomerOpen(owner.organizationId, customerMode))
    }

}
/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to show popover.
 */
export const performPopoverOwnerShow = (owner: Models.Owner) => (dispatch: Function): void => {

    dispatch(actionsCustomer.performPopoverOwnerShow(owner))

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverOwnerHide = () => (dispatch: Function): void => {

    dispatch(actionsCustomer.performPopoverOwnerHide())

}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to open owner agent screen.
 */
export const navigateToOwnerAgentScreen = (agent: Models.Agent,
                                           agentContextMode: Enums.AgentContextMode = Enums.AgentContextMode.None) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(thunkCustomer.performPopoverOwnerHide())

    if (agentContextMode == Enums.AgentContextMode.None) {
        dispatch(HistoryMobileApp.pushContent({
            type: EnumsApp.HistoryMobileAppType.Customer,
            splitPanelName: util.getNavigationPopoverCustomerString(Enums.NavigationContentAppCrm_Customer_Owners.AppCRM_Customer_OwnerList),
            index: Enums.NavigationContentAppCrm_Customer_Owners.AppCRM_Customer_OwnerList_Agents,
            data: {...defaultValues.HistoryMobileAppData, customer: reducerState.currentCustomerManaged}
        }))
    }
    if (agentContextMode == Enums.AgentContextMode.OwnerAgent) {
        dispatch(HistoryMobileApp.pushContent({
            type: EnumsApp.HistoryMobileAppType.Customer,
            splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
            index: Enums.NavigationContentAppCrm.AppCRM_Agent,
            data: {...defaultValues.HistoryMobileAppData, customer: reducerState.currentCustomerManaged}
        }))
    }

    dispatch(actionsCustomer.navigateToOwnerAgentScreen(agent, agentContextMode))


    // Dispatch thunk "navigateToAgentScreen" synchronously.

    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    dispatch(thunkAgent.performOpenAgentScreen(agent,
        reducerState.currentCustomerManaged,
        Enums.AgentMode.Watch,
        agentContextMode))


}

export const callGetCustomerActivityList = (
    customerActivityList: Models.CustomerManaged | null,
) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let contextMode = EnumsScheduler.SchedulerMode.Customer

    if (customerActivityList && util.isCustomerCategoryConglomerate(customerActivityList.category))
    {
        contextMode = EnumsScheduler.SchedulerMode.Conglomerate

    } else if (customerActivityList && util.isTypeOrganizationHolding(customerActivityList.organizationType)){

        contextMode = EnumsScheduler.SchedulerMode.Holding
    }

    if (customerActivityList && customerActivityList.id) { //клиент не определен, поэтому запрос на получении списка задач не отправляется
        dispatch(performActivityListRefresh(
            contextMode,
            state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
            defaultValues.Deal,
            {...customerActivityList},
            defaultValues.Agent,
        ))
    }
}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to open customer screen.
 */
export const navigateAppDirectoryToCustomerScreen = (customerId: string) =>
    (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(thunkCustomer.navigateToCustomerScreen({...defaultValues.Customer, id: customerId}, Enums.CustomerMode.AppDirectoryBack, Enums.ShowCustomer.Show))
}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to open customer screen.
 */
export const navigateToCustomerScreen = (
    customer: Models.Customer,
    customerMode: Enums.CustomerMode,
    showCustomer: Enums.ShowCustomer,
) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    dispatch(actionsCustomer.performRefresh())
	const currentDealForecast = state.user.mrmkmcibCRM.reducerProductList.currentDeal
    const currentDeal = state.user.mrmkmcibCRM.reducerDeal.currentDeal
    if (state.splitPanels.AppCRM_Customer && state.splitPanels.AppCRM_Customer.contentScenes[0] === Enums.NavigationContentCustomer.DealListSearch) {
        dispatch(thunkDealListSearch.navigateBackToDealListScreen())
    }

	dispatch (SplitPanelActions.resetSplitPanel(
		util.getNavigationContentCreditProduct(Enums.NavigationAppCRMCreditProduct.AppCRM_CreditProduct)))

    if (showCustomer && (customerMode !== Enums.CustomerMode.SameType && customerMode !== Enums.CustomerMode.AppScheduler)) {
        const qlikUrl = state.user.mrmkmcibApp.reducerAuthorization.navigateBackData ? state.user.mrmkmcibApp.reducerAuthorization.navigateBackData.qlikUrl : null
        dispatch(HistoryMobileApp.pushContent({
            type: qlikUrl ?
                EnumsApp.HistoryMobileAppType.None :
                currentDeal.id !== '' ?
                    EnumsApp.HistoryMobileAppType.Deal :
                    EnumsApp.HistoryMobileAppType.Customer,
            splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
            index: Enums.NavigationContentAppCrm.AppCRM_Customer,
            data: {...defaultValues.HistoryMobileAppData, customer, qlikUrl, deal: { ...defaultValues.Deal, ...currentDeal }}
        }))
    }
    const previousCustomer = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged;
    dispatch(actionsCustomer.navigateToCustomerScreen(
        {...defaultValues.CustomerManaged, ...customer},
        previousCustomer,
        customerMode,
        Enums.HistoryActions.Push,
        currentDealForecast,
        currentDeal,
    ))
    dispatch(thunkDeal.performDealClose())
    // Dispatch thunk "performContainerReset" synchronously.
    dispatch(thunkDealList.performContainerReset())
    // Dispatch thunk "performContainerReset" synchronously.
    dispatch(thunkAgentList.performContainerReset())
    // Dispatch thunk "performContainerReset" synchronously.
    dispatch(thunkDealEditor.performContainerReset())
    // Dispatch thunk "performContainerReset" synchronously.
    dispatch(thunkProductList.performContainerReset())
    // Dispatch thunk "performContainerReset" synchronously.
    dispatch(thunkLimit.performContainerReset())

    dispatch(thunkCustomer.customer_callGetCustomer({...defaultValues.CustomerManaged, ...customer}))

}

export const navigateToCustomerScreenFromPush = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(SplitPanelActions.pushContent(
        Enums.NavigationContentAppCrm.AppCRM_Customer,
        util.getNavigationString(Enums.Navigation.AppCRM),
    ))
}

export const getCustomerDataById = (id: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(customer_callGetCustomerById(id))
}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to load any kind customer data.
 */
export const performRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerCustomer
    const customer = reducerState.currentCustomerManaged.id != '' ?
        reducerState.currentCustomerManaged :
        reducerState.currentCustomer.id != '' ?
            reducerState.currentCustomer :
            {
                ...defaultValues.CustomerManaged,
                id: reducerState.currentCustomerId
            }

    if (!reducerState.customerFetching) {

        dispatch(thunkCustomer.customer_callGetCustomer({
            ...defaultValues.CustomerManaged,
            ...customer
        }))
    }
}

export const performFlush = () => (dispatch: Function): void => {

    dispatch(actionsCustomer.performFlush())

    dispatch(thunkCustomer.performCustomerCacheReset())
    dispatch(thunkCustomer.performAgentListCacheReset())

    dispatch(thunkCustomer.performRefresh())
}

export const performAgentListCacheReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    Cache.sessionResetTag({
        tag: util.getAgentListTagRequestString(reducerState.agentListContextMode),
        contextId: util.getAgentListContextRequestString(reducerState.agentListContextMode, state.user.mrmkmcibCRM.reducerAgentList)
    })
}

export const performCustomerCacheReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let customerContextMode = reducerState.currentCustomerManaged.id != '' ?
        Enums.CustomerContextMode.CustomerManaged :
        reducerState.currentCustomer.id != '' ?
            Enums.CustomerContextMode.Customer :
            Enums.CustomerContextMode.None

    Cache.sessionResetUrl(
        util.urlCustomer.callGetCustomer(
            state,
            util.getCustomerContextRequestString(customerContextMode, reducerState),
            [
                {tag: Enums.CachePolicy.Default},
                {tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestRefreshEnabled)}
            ]
        )
    )
}


/*
 * Internal thunk used in "Customer" container. Fetch current customer data.
 */
export const customer_callGetCustomer = (customer: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    if (reducerState.customerFetching) {
        return
    }
    let operationId = customer.id


    dispatch(actionsCustomer.customer_callGetCustomer())


    if (!reducerState.customerFetching) {
        dispatch(actionsCustomer.customer_callGetCustomerRequest())

        util.call<Models.CustomerUnknown, void>(
            util.urlCustomer.callGetCustomer(state, customer.id, [{tag: Enums.CachePolicy.Default},{tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestRefreshEnabled)}]),

            (response: Response<Models.CustomerUnknown>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (reducerState.customer.id != operationId) return

                dispatch(thunkAppCrm.resetCustomerOpenInProgress())

                dispatch(actionsCustomer.customer_callGetCustomerSuccess(response))

                // Dispatch thunk "customer_openCustomer" on fetch succeeded.
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer

                if (!util.isCustomerManaged(reducerState.customer, state.user.mrmkmcibCRM.reducerAppCRM.currentUser)) {

                    dispatch(thunkCustomer.customer_openCustomer(util.getCustomer(reducerState.customer, state.user.mrmkmcibCRM.reducerAppCRM.currentUser)))

                } else {

                    dispatch(thunkCustomer.customer_openCustomerManaged({...defaultValues.CustomerManaged, ...response.data}))

                }

                dispatch(navigationExecutor(EnumsApp.NavigationStep.Customer_PerformRefreshSuccess))

            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (reducerState.currentCustomerId != operationId) return

                dispatch(thunkAppCrm.resetCustomerOpenInProgress())

                dispatch(actionsCustomer.customer_callGetCustomerFailure(error))

                dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке клиента'))


                // Dispatch thunk "performRefreshFailure" on fetch failure.
            },

            Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN,

            'GET'
        )
    }
}


/*
 * Internal thunk used in "Customer" container. Fetch current customer data by id.
 */
export const customer_callGetCustomerById = (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    if (!reducerState.customerFetching) {
        dispatch(actionsCustomer.customer_callGetCustomerRequest())

        util.call<Models.CustomerUnknown, void>(
            util.urlCustomer.callGetCustomer(state, customerId, [{tag: Enums.CachePolicy.Default},{tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestRefreshEnabled)}]),

            (response: Response<Models.CustomerUnknown>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer

                dispatch(actionsCustomer.customer_callGetCustomerSuccess(response))

                // Dispatch thunk "customer_openCustomer" on fetch succeeded.
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (util.isCustomerManaged(reducerState.customer, state.user.mrmkmcibCRM.reducerAppCRM.currentUser)) {
                    dispatch(thunkCustomer.customer_openCustomerManaged(util.getCustomerManaged(reducerState.customer, state.user.mrmkmcibCRM.reducerAppCRM.currentUser)))
                } else {
                    dispatch(thunkCustomer.customer_openCustomer(util.getCustomer(reducerState.customer, state.user.mrmkmcibCRM.reducerAppCRM.currentUser)))
                }
                dispatch(navigationExecutor(EnumsApp.NavigationStep.Customer_GetInfoSuccess))
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer

                dispatch(actionsCustomer.customer_callGetCustomerFailure(error))

                dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке клиента'))

            },

            Converters.RESPONSE_CUSTOMER_CUSTOMER_CALL_GET_CUSTOMER_TO_CUSTOMER_UNKNOWN,

            'GET'
        )
    }
}

/*
 * Internal thunk used in "Customer" container. Open not managed customer.
 */
export const customer_openCustomer = (customer: Models.Customer,) => (dispatch: Function): void => {

    dispatch(actionsCustomer.customer_openCustomer(customer,))

    // Dispatch thunk "performRefreshSuccess" synchronously.

}

/*
 * Internal thunk used in "Customer" container. Open managed customer.
 */
export const customer_openCustomerManaged = (customerManaged: Models.CustomerManaged,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    let reducerStateAppCRM = state.user.mrmkmcibCRM.reducerAppCRM
    let currentUser = reducerStateAppCRM.currentUser


    dispatch(actionsCustomer.customer_openCustomerManaged(customerManaged,))


    // Dispatch thunk "callGetLimitNew" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.isNSL == true && !reducerState.currentCustomerManaged.isHolding) {
        dispatch(thunkCustomer.callGetLimitNew(false))
    }

    // Dispatch thunk "callGetLimitOld" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.isNSL == false && !reducerState.currentCustomerManaged.isHolding) {
        dispatch(thunkCustomer.callGetLimitOld(false))
    }

    // Dispatch thunk "navigateToAgentListScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer


    // Dispatch thunk "performAgentListRefresh" synchronously.

    const isHolderForCustomer = isCustomerHolder(reducerState.currentCustomerManaged, currentUser)
    const agentListAccessLevel = isHolderForCustomer ?
        Enums.AgentListAccessLevel.Write :
        Enums.AgentListAccessLevel.Read

    dispatch(thunkAgentList.performOpenAgentListScreen(
        reducerState.currentCustomerManaged.agentList,
        reducerState.currentCustomerManaged,
        null,
        Enums.AgentListContextMode.Customer,
        agentListAccessLevel))


    // Dispatch thunk "performRefreshSuccess" synchronously.

    dispatch(thunkCustomer.callGetCustomerActivityList(customerManaged))

}

/*
 * Internal thunk used in "Customer" container. Thunk chain used to show popover.
 */
export const performPopoverLimitShow = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performPopoverLimitShow())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to hide popover.
 */
export const performPopoverLimitHide = () => (dispatch: Function): void => {


    dispatch(actionsCustomer.performPopoverLimitHide())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to open limit item details screen.
 */
export const navigateToPopoverLimitItemScreen = (item: Enums.OldLimitItem) => (dispatch: Function): void => {


    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppOldLimits.AppCRM_Old_LimitDetails, util.getNavigationString(Enums.Navigation.AppCRMLimitOld)))


    dispatch(actionsCustomer.navigateToPopoverLimitItemScreen(item))


}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to navigate back limit popover.
 */
export const navigatePopoverLimitBack = () => (dispatch: Function): void => {


    dispatch(SplitPanelActions.popContent(util.getNavigationString(Enums.Navigation.AppCRMLimitOld)))


    dispatch(actionsCustomer.navigatePopoverLimitBack())


}

/*
 * Internal thunk used in "Customer" container. Thunk used to open customer limit screen.
 */
export const navigateToLimitScreen = () => (dispatch: Function): void => {


    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAppCrm.AppCRM_LimitDetails, util.getNavigationString(Enums.Navigation.AppCRM)))


    dispatch(actionsCustomer.navigateToLimitScreen())


}

/*
 * Thunk dispatched by "Customer" screen. Fetch current customer new limits.
 */
export const callGetLimitNew = (refresh: boolean = false) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    if (reducerState.limitFetching) {
        return
    }
    let operationId = reducerState.currentCustomerId

    if (refresh) {
        Cache.sessionResetTag({tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestLimitRefreshEnabled)})
    }

    dispatch(actionsCustomer.callGetLimitNew())


    if (!reducerState.limitFetching) {
        dispatch(actionsCustomer.callGetLimitNewRequest())

        util.call<Models.Limit, void>(
            util.urlCustomer.callGetLimitNew(state, reducerState, [{tag: Enums.CachePolicy.Default},
                {tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestLimitRefreshEnabled)}]),

            (response: Response<Models.Limit>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (reducerState.currentCustomerId != operationId) return

                dispatch(actionsCustomer.callGetLimitNewSuccess(response))


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (reducerState.currentCustomerId != operationId) return

                dispatch(actionsCustomer.callGetLimitNewFailure(error))


            },

            Converters.RESPONSE_CUSTOMER_CALL_GET_LIMIT_NEW_TO_LIMIT,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "Customer" screen. Fetch current customer old limits.
 */
export const callGetLimitOld = (refresh: boolean = false) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    if (reducerState.limitOldFetching) {
        return
    }
    let operationId = reducerState.currentCustomerId

    if (refresh) {
        Cache.sessionResetTag({tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestLimitRefreshEnabled)})
    }


    dispatch(actionsCustomer.callGetLimitOld())


    if (!reducerState.limitOldFetching) {
        dispatch(actionsCustomer.callGetLimitOldRequest())

        util.call<Models.LimitOld, void>(
            util.urlCustomer.callGetLimitOld(state, reducerState, [{tag: Enums.CachePolicy.Default},
                {tag: util.getCustomerRequestRefreshString(Enums.CustomerRequestRefresh.CustomerRequestLimitRefreshEnabled)}]),

            (response: Response<Models.LimitOld>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (reducerState.currentCustomerId != operationId) return

                dispatch(actionsCustomer.callGetLimitOldSuccess(response))


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer
                if (reducerState.currentCustomerId != operationId) return

                dispatch(actionsCustomer.callGetLimitOldFailure(error))


            },

            Converters.RESPONSE_CUSTOMER_CALL_GET_LIMIT_OLD_TO_LIMIT_OLD,

            'GET'
        )
    }
}

/*
 * Thunk dispatched by "Customer" screen. Thunk used to open customer new limit screen or old limit popover.
 */
export const performLimitShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer


    dispatch(actionsCustomer.performLimitShow())


    // Dispatch thunk "navigateToLimitScreen" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.isNSL == true) {
        dispatch(thunkCustomer.navigateToLimitScreen())
    }

    // Dispatch thunk "performPopoverLimitShow" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerCustomer
    if (reducerState.currentCustomerManaged.isNSL == false) {
        dispatch(thunkCustomer.performPopoverLimitShow())
    }

}

/*
 * Thunk dispatched by "Customer" screen. Thunk dispatched on user input Active field.
 */
export const performInputProductAgreementStatus = (
    agreementStatus: Enums.ProductListAgreementStatus
) => (dispatch: Function): void => {


    dispatch(actionsCustomer.performInputProductListAgreementStatus(agreementStatus))

}

/*
 * Thunk dispatched by "Customer" screen. Fetch all product types data.
 */
export const performProductTypeListRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch (actionsCustomer.performProductTypeListRefresh())

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let isActiveProductList = util.isActiveProductList(reducerState.productListAgreementStatus)


    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.AcquiringProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.AcquiringProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.BankGuaranteeProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.BankGuaranteeProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.CashManagementProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.CashManagementProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.ContractConstructorProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.ContractConstructorProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.ContractNsoProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.ContractNsoProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.ContractSdoProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.ContractSdoProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.CorporateCardProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.CorporateCardProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.CreditProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.CreditProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.CurrencyControlProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.CurrencyControlProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.CustomsPaymentProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.CustomsPaymentProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.DepositProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.DepositProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.DboProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.DboProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.EncashmentProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.EncashmentProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.PackageProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.PackageProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.PaymentAccountProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.PaymentAccountProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.SalaryProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.SalaryProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.SelfEncashmentProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.SelfEncashmentProduct))

    dispatch(thunkCustomer.updateProductListOperationUuid(Enums.ProductType.TariffPlanProduct, isActiveProductList)())
    dispatch (thunkCustomer.performCallGetCachedRequestProductList (Enums.ProductType.TariffPlanProduct))

}


/*
 * Thunk dispatched by "Customer" screen. Fetch all product types data.
 */
export const performProductTypeListForceRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState ()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch (thunkCustomer.performProductListModalAlertHide ())
    dispatch (actionsCustomer.performProductTypeListRefresh ())

    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.AcquiringProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.BankGuaranteeProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.CashManagementProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.ContractConstructorProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.ContractNsoProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.ContractSdoProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.CorporateCardProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.CreditProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.CurrencyControlProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.CustomsPaymentProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.DepositProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.DboProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.EncashmentProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.PackageProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.PaymentAccountProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.SalaryProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.SelfEncashmentProduct))
    dispatch (thunkCustomer.performCallGetForceRequestProductList (Enums.ProductType.TariffPlanProduct))

}

/*
 * Internal thunk used in "Customer" container. Clear all network cache for product list if pollign status is not success or eksErrorList is not empty.
 */
export const clearProductListCache = (productType: Enums.ProductType, isActiveProductList: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    dispatch(actionsCustomer.performFlush())

    Cache.sessionResetTag({
        tag: util.getTagCallGetRequestProductList (productType, isActiveProductList),
        contextId: reducerState.currentCustomerManaged.id
    })

    dispatch(actionsCustomer.clearProductListCache())

}

// Thunk to get status of fetching for GET network request of product list
const getFetchingCallGetRequestProductList = (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean): boolean => {

        switch (true) {
            case (Enums.ProductType.CreditProduct ===  productType        ||
                  Enums.ProductType.BankGuaranteeProduct ===  productType) : {
                    return isActiveProductList ? reducerState.creditActiveProductListFetching
                                               : reducerState.creditCloseProductListFetching
            }
            case (Enums.ProductType.DepositProduct     ===  productType  ||
                  Enums.ProductType.ContractNsoProduct ===  productType  ||
                  Enums.ProductType.ContractSdoProduct ===  productType)  : {
                    return isActiveProductList ? reducerState.depositActiveProductListFetching
                                               : reducerState.depositCloseProductListFetching
            }
            case Enums.ProductType.CorporateCardProduct ===  productType: {
                    return isActiveProductList ? reducerState.corporateCardActiveProductListFetching
                                               : reducerState.corporateCardCloseProductListFetching
            }
            case (Enums.ProductType.EncashmentProduct     ===  productType ||
                  Enums.ProductType.SelfEncashmentProduct ===  productType) : {
                    return isActiveProductList ? reducerState.encashmentContractActiveProductListFetching
                                               : reducerState.encashmentContractCloseProductListFetching
            }
            case Enums.ProductType.CurrencyControlProduct ===  productType: {
                    return isActiveProductList ? reducerState.legalInfoProductListFetching
                                               : reducerState.legalInfoProductListFetching
            }
            case Enums.ProductType.AcquiringProduct ===  productType: {
                    return isActiveProductList ? reducerState.acquiringActiveProductListFetching
                                               : reducerState.acquiringCloseProductListFetching
            }
            case Enums.ProductType.DboProduct ===  productType: {
                    return isActiveProductList ? reducerState.dboActiveProductListFetching
                                               : reducerState.dboCloseProductListFetching
            }
            case Enums.ProductType.ContractConstructorProduct ===  productType: {
                    return isActiveProductList ? reducerState.udboActiveProductListFetching
                                               : reducerState.udboCloseProductListFetching
            }
            case Enums.ProductType.SalaryProduct ===  productType: {
                    return isActiveProductList ? reducerState.salaryActiveProductListFetching
                                               : reducerState.salaryCloseProductListFetching
            }
            case (Enums.ProductType.CashManagementProduct ===  productType  ||
                  Enums.ProductType.PaymentAccountProduct ===  productType  ||
                  Enums.ProductType.PackageProduct        ===  productType  ||
                  Enums.ProductType.TariffPlanProduct     ===  productType  ||
                  Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
                    return isActiveProductList ? reducerState.settlementAgreementActiveProductListFetching
                                               : reducerState.settlementAgreementCloseProductListFetching
            }
            default: return false
        }
}

//Thunk dispatch to hide refresh bar
export const performRefreshBarHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsCustomer.performRefreshBarHide())
}
//Thunk dispatch on action perform to get product list
const getActionPerformCallGetRequestProductList = (productType: Enums.ProductType, isActiveProductList: boolean): Function =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct ===  productType         ||
              Enums.ProductType.BankGuaranteeProduct ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetCreditActiveProductListPerform
                                           : actionsCustomer.callGetCreditCloseProductListPerform
        }
        case (Enums.ProductType.DepositProduct     ===  productType ||
             Enums.ProductType.ContractNsoProduct ===  productType  ||
             Enums.ProductType.ContractSdoProduct ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetDepositActiveProductListPerform
                                           : actionsCustomer.callGetDepositCloseProductListPerform
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductListPerform
                                           : actionsCustomer.callGetCorporateCardCloseProductListPerform
        }
        case (Enums.ProductType.EncashmentProduct ===  productType  ||
              Enums.ProductType.SelfEncashmentProduct   ===  productType): {
                return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductListPerform
                                           : actionsCustomer.callGetEncashmentContractCloseProductListPerform
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
                return actionsCustomer.callGetLegalInfoProductList

        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductListPerform
                                           : actionsCustomer.callGetAcquiringCloseProductListPerform
        }
        case Enums.ProductType.DboProduct ===  productType : {
                return isActiveProductList ? actionsCustomer.callGetDboActiveProductListPerform
                                           : actionsCustomer.callGetDboCloseProductListPerform
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetUdboActiveProductListPerform
                                           : actionsCustomer.callGetUdboCloseProductListPerform
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductListPerform
                                           : actionsCustomer.callGetSalaryCloseProductListPerform
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
              Enums.ProductType.PaymentAccountProduct ===  productType  ||
              Enums.ProductType.PackageProduct        ===  productType  ||
              Enums.ProductType.TariffPlanProduct     ===  productType  ||
              Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductListPerform
                                           : actionsCustomer.callGetSettlementAgreementCloseProductListPerform
        }
        default: return ()=> ({type: "NO_ACTION_DEFINED", payload: {}})
    }
}

// Thunk dispatch on action request to call GET network request of product list
const getActionRequestCallGetRequestProductList = (reducerState: ModelState.IRootState, productType: Enums.ProductType, isActiveProductList: boolean): Function =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct ===  productType         ||
        Enums.ProductType.BankGuaranteeProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetCreditActiveProductListRequest
                                       : actionsCustomer.callGetCreditCloseProductListRequest
        }
        case (Enums.ProductType.DepositProduct ===  productType  ||
        Enums.ProductType.ContractNsoProduct   ===  productType  ||
        Enums.ProductType.ContractSdoProduct   ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetDepositActiveProductListRequest
                                       : actionsCustomer.callGetDepositCloseProductListRequest
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductListRequest
                                       : actionsCustomer.callGetCorporateCardCloseProductListRequest
        }
        case (Enums.ProductType.EncashmentProduct ===  productType  ||
        Enums.ProductType.SelfEncashmentProduct   ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductListRequest
                                       : actionsCustomer.callGetEncashmentContractCloseProductListRequest
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetLegalInfoProductListRequest
                                       : actionsCustomer.callGetLegalInfoProductListRequest
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductListRequest
                                      : actionsCustomer.callGetAcquiringCloseProductListRequest
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetDboActiveProductListRequest
                                       : actionsCustomer.callGetDboCloseProductListRequest
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetUdboActiveProductListRequest
                                       : actionsCustomer.callGetUdboCloseProductListRequest
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductListRequest
                                       : actionsCustomer.callGetSalaryCloseProductListRequest
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return isActiveProductList  ? actionsCustomer.callGetSettlementAgreementActiveProductListRequest
                                        : actionsCustomer.callGetSettlementAgreementCloseProductListRequest
        }
        default: return ()=> ({type: "NO_ACTION_DEFINED", payload: {}})
    }
}


//Thunk dispatch on request of GET network request of product list
const getConverterCallGetProductListResponse = (productType: Enums.ProductType): any => {
    switch (true) {
        case (Enums.ProductType.CreditProduct        ===  productType  ||
              Enums.ProductType.BankGuaranteeProduct ===  productType)  : {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_CREDIT_PRODUCT_LIST_TO_CREDIT_PRODUCT_LIST
        }
        case (Enums.ProductType.DepositProduct      ===  productType  ||
              Enums.ProductType.ContractNsoProduct  ===  productType  ||
              Enums.ProductType.ContractSdoProduct  ===  productType)  : {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_DEPOSIT_PRODUCT_LIST_TO_DEPOSIT_PRODUCT_LIST
        }
        case Enums.ProductType.CorporateCardProduct ===  productType : {
            return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_CORPORATE_CARD_PRODUCT_LIST_TO_CORPORATE_CARD_PRODUCT_LIST
        }
        case (Enums.ProductType.EncashmentProduct       ===  productType  ||
              Enums.ProductType.SelfEncashmentProduct   ===  productType)  : {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_ENCASHMENT_CONTRACT_PRODUCT_LIST_TO_ENCASHMENT_CONTRACT_PRODUCT_LIST
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType : {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_LEGAL_INFO_PRODUCT_LIST_TO_LEGAL_INFO_PRODUCT_LIST
        }
        case Enums.ProductType.AcquiringProduct ===  productType : {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_ACQUIRING_PRODUCT_LIST_TO_ACQUIRING_PRODUCT_LIST
        }
        case Enums.ProductType.DboProduct ===  productType: {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_DBO_PRODUCT_LIST_TO_DBO_PRODUCT_LIST
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_UDBO_PRODUCT_LIST_TO_UDBO_PRODUCT_LIST
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_SALARY_PRODUCT_LIST_TO_SALARY_PRODUCT_LIST
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
              Enums.ProductType.PaymentAccountProduct       ===  productType  ||
              Enums.ProductType.PackageProduct              ===  productType  ||
              Enums.ProductType.TariffPlanProduct           ===  productType  ||
              Enums.ProductType.CustomsPaymentProduct       ===  productType)  : {
                return Converters.RESPONSE_CUSTOMER_CALL_GET_REQUEST_SETTLEMENT_AGREEMENT_PRODUCT_LIST_TO_SETTLEMENT_AGREEMENT_PRODUCT_LIST
        }
        default: return ()=>{}
    }
}

//Thunk dispatch on success of GET network request of product list
export const getActionSuccessCallGetRequestProductList = (productType: Enums.ProductType, isActiveProductList: boolean): Function =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct        ===  productType  ||
        Enums.ProductType.BankGuaranteeProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetCreditActiveProductListSuccess
                                       : actionsCustomer.callGetCreditCloseProductListSuccess
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct  ===  productType  ||
        Enums.ProductType.ContractSdoProduct  ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetDepositActiveProductListSuccess
                                       : actionsCustomer.callGetDepositCloseProductListSuccess
        }
        case Enums.ProductType.CorporateCardProduct ===  productType : {
            return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductListSuccess
                                       : actionsCustomer.callGetCorporateCardCloseProductListSuccess
        }
        case (Enums.ProductType.EncashmentProduct ===  productType  ||
        Enums.ProductType.SelfEncashmentProduct   ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductListSuccess
                                       : actionsCustomer.callGetEncashmentContractCloseProductListSuccess
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType : {
            return isActiveProductList ? actionsCustomer.callGetLegalInfoProductListSuccess
                                       : actionsCustomer.callGetLegalInfoProductListSuccess
        }
        case Enums.ProductType.AcquiringProduct ===  productType : {
            return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductListSuccess
                                       : actionsCustomer.callGetAcquiringCloseProductListSuccess
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetDboActiveProductListSuccess
                                       : actionsCustomer.callGetDboCloseProductListSuccess
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetUdboActiveProductListSuccess
                                       : actionsCustomer.callGetUdboCloseProductListSuccess
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
        Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductListSuccess
                                       : actionsCustomer.callGetEncashmentContractCloseProductListSuccess
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductListSuccess
                                       : actionsCustomer.callGetSalaryCloseProductListSuccess
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct       ===  productType  ||
        Enums.ProductType.PackageProduct              ===  productType  ||
        Enums.ProductType.TariffPlanProduct           ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct       ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductListSuccess
                                       : actionsCustomer.callGetSettlementAgreementCloseProductListSuccess
        }
        default: return ()=>{}
    }
}

//Thunk dispatch on error of GET network request of product list
const getActionFailureCallGetRequestProductList = (productType: Enums.ProductType, isActiveProductList: boolean): Function =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct        ===  productType  ||
              Enums.ProductType.BankGuaranteeProduct ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetCreditActiveProductListFailure
                                           : actionsCustomer.callGetCreditCloseProductListFailure
        }
        case (Enums.ProductType.DepositProduct     ===  productType   ||
              Enums.ProductType.ContractNsoProduct  ===  productType  ||
              Enums.ProductType.ContractSdoProduct  ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetDepositActiveProductListFailure
                                           : actionsCustomer.callGetDepositCloseProductListFailure
        }
        case Enums.ProductType.CorporateCardProduct ===  productType : {
                return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductListFailure
                                           : actionsCustomer.callGetCorporateCardCloseProductListFailure
        }
        case (Enums.ProductType.EncashmentProduct       ===  productType  ||
              Enums.ProductType.SelfEncashmentProduct   ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductListFailure
                                           : actionsCustomer.callGetEncashmentContractCloseProductListFailure
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType : {
                return isActiveProductList ? actionsCustomer.callGetLegalInfoProductListFailure
                                           : actionsCustomer.callGetLegalInfoProductListFailure
        }
        case Enums.ProductType.AcquiringProduct ===  productType : {
                return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductListFailure
                                           : actionsCustomer.callGetAcquiringCloseProductListFailure
        }
        case Enums.ProductType.DboProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetDboActiveProductListFailure
                                           : actionsCustomer.callGetDboCloseProductListFailure
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetUdboActiveProductListFailure
                                           : actionsCustomer.callGetUdboCloseProductListFailure
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
                return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductListFailure
                                           : actionsCustomer.callGetSalaryCloseProductListFailure
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
              Enums.ProductType.PaymentAccountProduct       ===  productType  ||
              Enums.ProductType.PackageProduct              ===  productType  ||
              Enums.ProductType.TariffPlanProduct           ===  productType  ||
              Enums.ProductType.CustomsPaymentProduct       ===  productType)  : {
                return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductListFailure
                                           : actionsCustomer.callGetSettlementAgreementCloseProductListFailure
        }
        default: return ()=>{}
    }
}
// Thunk to get status of polling status of product list network get request
const getPollingStatusCallGetRequestProductList = (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean): Enums.ProductPollingStatus | null => {
    switch (true) {
        case (Enums.ProductType.CreditProduct === productType ||
              Enums.ProductType.BankGuaranteeProduct === productType)  : {
                return isActiveProductList ? reducerState.creditActiveProductList.pollingStatus
                                           : reducerState.creditCloseProductList.pollingStatus
        }
        case (Enums.ProductType.DepositProduct === productType ||
              Enums.ProductType.ContractNsoProduct === productType ||
              Enums.ProductType.ContractSdoProduct === productType)  : {
                return isActiveProductList ? reducerState.depositActiveProductList.pollingStatus
                                           : reducerState.depositCloseProductList.pollingStatus
        }
        case Enums.ProductType.CorporateCardProduct === productType : {
                return isActiveProductList ? reducerState.corporateCardActiveProductList.pollingStatus
                                           : reducerState.corporateCardCloseProductList.pollingStatus
        }
        case (Enums.ProductType.EncashmentProduct === productType ||
              Enums.ProductType.SelfEncashmentProduct === productType)  : {
                return isActiveProductList ? reducerState.encashmentContractActiveProductList.pollingStatus
                                           : reducerState.encashmentContractCloseProductList.pollingStatus
        }
        case Enums.ProductType.CurrencyControlProduct === productType : {
                return isActiveProductList ? reducerState.legalInfoProductList.pollingStatus
                                           : reducerState.legalInfoProductList.pollingStatus
        }
        case Enums.ProductType.AcquiringProduct === productType : {
                return isActiveProductList ? reducerState.acquiringActiveProductList.pollingStatus
                                           : reducerState.acquiringCloseProductList.pollingStatus
        }
        case Enums.ProductType.DboProduct === productType: {
                return isActiveProductList ? reducerState.dboActiveProductList.pollingStatus
                                           : reducerState.dboCloseProductList.pollingStatus
        }
        case Enums.ProductType.ContractConstructorProduct === productType: {
                return isActiveProductList ? reducerState.udboActiveProductList.pollingStatus
                                           : reducerState.udboCloseProductList.pollingStatus
        }
        case Enums.ProductType.SalaryProduct === productType: {
                return isActiveProductList ? reducerState.salaryActiveProductList.pollingStatus
                                           : reducerState.salaryCloseProductList.pollingStatus
        }
        case (Enums.ProductType.CashManagementProduct === productType ||
              Enums.ProductType.PaymentAccountProduct === productType ||
              Enums.ProductType.PackageProduct === productType ||
              Enums.ProductType.TariffPlanProduct === productType ||
              Enums.ProductType.CustomsPaymentProduct === productType)  : {
                return isActiveProductList ? reducerState.settlementAgreementActiveProductList.pollingStatus
                                           : reducerState.settlementAgreementCloseProductList.pollingStatus
        }
        default: return null
    }
}

type ModelProductList = Models.CreditProductList | Models.SettlementAgreementProductList | Models.SalaryProduct | Models.DepositProduct | Models.AcquiringProduct


// Thunk dispatch in "Customer" screen to perform getting product list'
export const performCallGetRequestProductList = (type: Enums.ProductType, force: boolean, update: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    const active = util.isActiveProductList (reducerState.productListAgreementStatus)

    const ttl = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().CacheEksPolicyMaxTTL]

    dispatch (getActionPerformCallGetRequestProductList (type, active) ())

    dispatch (callGetRequestProductList ({ type, ttl, active, force, update }))

}

// Thunk dispatch in "Customer" screen to show product list modal alert
export const performProductListModalAlertShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch (actionsCustomer.performProductListModalAlertShow ())
}

// Thunk dispatch in "Customer" screen to hide product list modal alert
export const performProductListModalAlertHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch (actionsCustomer.performProductListModalAlertHide ())
}

// Thunk dispatch in "Customer" screen to perform getting product list'
export const performCallGetForceRequestProductList = (type: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let isActiveProductList = util.isActiveProductList(reducerState.productListAgreementStatus)

    dispatch (thunkProductList.performProductListModalAlertHide ())

    dispatch(thunkCustomer.clearProductListCache(type, isActiveProductList))

    dispatch(thunkCustomer.updateProductListOperationUuid(type, isActiveProductList)())

    dispatch (performCallGetRequestProductList (type, true, false))
}

export const performCallGetCachedRequestProductList = (type: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch (performCallGetRequestProductList (type, false, false))

}

export const performCallGetUncachedRequestProductList = (type: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let isActiveProductList = util.isActiveProductList(reducerState.productListAgreementStatus)

    dispatch(thunkCustomer.clearProductListCache(type, isActiveProductList))

    dispatch (performCallGetRequestProductList (type, false, true))

}

const getProductListPollingStatusEnum = (reducerState: ModelsCustomer.ICustomerState, service: Enums.ClientProductServiceList, isActiveProductList: boolean): Enums.ProductPollingStatus => {
    switch (service) {
        case Enums.ClientProductServiceList.AppCRM_Credit:
            return isActiveProductList ? reducerState.creditActiveProductList.pollingStatus
                : reducerState.creditCloseProductList.pollingStatus

        case Enums.ClientProductServiceList.AppCRM_Acquiring:
            return isActiveProductList ? reducerState.acquiringActiveProductList.pollingStatus
                : reducerState.acquiringCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_CorporateCard:
            return isActiveProductList ? reducerState.corporateCardActiveProductList.pollingStatus
                : reducerState.corporateCardCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_DBO:
            return isActiveProductList ? reducerState.dboActiveProductList.pollingStatus
                : reducerState.dboCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_Deposit:
            return isActiveProductList ? reducerState.depositActiveProductList.pollingStatus
                : reducerState.depositCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_EncashmentContract:
            return isActiveProductList ? reducerState.encashmentContractActiveProductList.pollingStatus
                : reducerState.encashmentContractCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_Salary:
            return isActiveProductList ? reducerState.salaryActiveProductList.pollingStatus
                : reducerState.salaryCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_SettlementAgreement:
            return isActiveProductList ? reducerState.settlementAgreementActiveProductList.pollingStatus
                : reducerState.settlementAgreementCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_UDBO:
            return isActiveProductList ? reducerState.udboActiveProductList.pollingStatus
                : reducerState.udboCloseProductList.pollingStatus
        case Enums.ClientProductServiceList.AppCRM_LegalInfo:
            return reducerState.legalInfoProductList.pollingStatus
        default:
            return Enums.ProductPollingStatus.None
    }
}
export const updateProductListOperationUuid = (productType: Enums.ProductType, isActiveProductList: boolean): Function => {
    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct:{
            return isActiveProductList ? actionsCustomer.updateCreditActiveProductListOperationUuid
                : actionsCustomer.updateCreditCloseProductListOperationUuid
        }
        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct: {
            return isActiveProductList ? actionsCustomer.updateDepositActiveProductListOperationUuid
                : actionsCustomer.updateDepositCloseProductListOperationUuid
        }

        case  Enums.ProductType.CashManagementProduct:
        case  Enums.ProductType.PaymentAccountProduct:
        case  Enums.ProductType.PackageProduct:
        case  Enums.ProductType.TariffPlanProduct:
        case  Enums.ProductType.CustomsPaymentProduct: {
            return isActiveProductList ? actionsCustomer.updateSettementAgreementActiveProductListOperationUuid
                                       : actionsCustomer.updateSettementAgreementCloseProductListOperationUuid
        }

        case Enums.ProductType.CorporateCardProduct: {
            return isActiveProductList ? actionsCustomer.updateCorporateCardActiveProductListOperationUuid
                : actionsCustomer.updateCorporateCardCloseProductListOperationUuid
        }

        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct: {
            return isActiveProductList ? actionsCustomer.updateEncashmentContractActiveProductListOperationUuid
                : actionsCustomer.updateEncashmentContractCloseProductListOperationUuid
        }

        case Enums.ProductType.AcquiringProduct: {
            return isActiveProductList ? actionsCustomer.updateAcquiringActiveProductListOperationUuid
                                       : actionsCustomer.updateAcquiringCloseProductListOperationUuid
        }

        case Enums.ProductType.DboProduct: {
            return isActiveProductList ? actionsCustomer.updateDboActiveProductListOperationUuid
                : actionsCustomer.updateDboCloseProductListOperationUuid
        }

        case Enums.ProductType.SalaryProduct: {
            return isActiveProductList ? actionsCustomer.updateSalaryActiveProductListOperationUuid
                : actionsCustomer.updateSalaryCloseProductListOperationUuid
        }

        case Enums.ProductType.ContractConstructorProduct: {
            return isActiveProductList ? actionsCustomer.updateUdboActiveProductListOperationUuid
                : actionsCustomer.updateUdboCloseProductListOperationUuid
        }

        case Enums.ProductType.CurrencyControlProduct: {
            return actionsCustomer.updateLegalInfoProductListOperationUuid
        }
        default: return ()=>{}
    }
}


const getProductListPollingOperationUuid = (reducerState: ModelsCustomer.ICustomerState, service: Enums.ClientProductServiceList, isActiveProductList: boolean): string | null => {
    switch (service) {
        case Enums.ClientProductServiceList.AppCRM_Credit:
            return isActiveProductList ? reducerState.creditActiveProductList.operationUuid
                : reducerState.creditCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_Acquiring:
            return isActiveProductList ? reducerState.acquiringActiveProductList.operationUuid
                : reducerState.acquiringCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_CorporateCard:
            return isActiveProductList ? reducerState.corporateCardActiveProductList.operationUuid
                : reducerState.corporateCardCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_DBO:
            return isActiveProductList ? reducerState.dboActiveProductList.operationUuid
                : reducerState.dboCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_Deposit:
            return isActiveProductList ? reducerState.depositActiveProductList.operationUuid
                : reducerState.depositCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_EncashmentContract:
            return isActiveProductList ? reducerState.encashmentContractActiveProductList.operationUuid
                : reducerState.encashmentContractCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_Salary:
            return isActiveProductList ? reducerState.salaryActiveProductList.operationUuid
                : reducerState.salaryCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_SettlementAgreement:
            return isActiveProductList ? reducerState.settlementAgreementActiveProductList.operationUuid
                : reducerState.settlementAgreementCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_UDBO:
            return isActiveProductList ? reducerState.udboActiveProductList.operationUuid
                : reducerState.udboCloseProductList.operationUuid
        case Enums.ClientProductServiceList.AppCRM_LegalInfo:
            return reducerState.legalInfoProductList.operationUuid
        default:
            return null
    }
}

// Thunk to call GET network request to get certain product list
const callGetRequestProductList = (request: Models.IGetProductListRequest) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    const { ttl, type, force, active, cachePolicy = Enums.CachePolicy.Default, update } = request

    let state = getState()

    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let statusRequestMaxPeriod = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().StatusRequestMaxPeriod])

    if (getPollingStatusCallGetRequestProductList (
            reducerState, type, active) != Enums.ProductPollingStatus.InProgress &&
        getFetchingCallGetRequestProductList (reducerState, type, active)) {
        return
    } else {
        dispatch (getActionRequestCallGetRequestProductList (state, type, active, ) (update))
    }


    let operationId = reducerState.currentCustomerId

    util.call<ModelProductList, void> (
        util.urlCustomer.callGetRequestProductList(
            state,
            active,
            getProductListPollingStatusEnum(reducerState, util.getProductListService(type), active),
            getProductListPollingOperationUuid(reducerState, util.getProductListService(type), active),
            util.getProductListPath(util.getProductListService(type)),
            reducerState.currentCustomerId,
            force,
            ttl,
            [
                { tag: cachePolicy },
                {
                    tag: util.getTagCallGetRequestProductList (type, active),
                    contextId: reducerState.currentCustomerManaged.id
                },
            ]
        ),

        (response: Response<ModelProductList>) => {


            state = getState()

            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (reducerState.currentCustomerId != operationId) return

            dispatch (getActionSuccessCallGetRequestProductList (type, active) (response))

            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (getPollingStatusCallGetRequestProductList (
                    reducerState, type, active) == Enums.ProductPollingStatus.InProgress) {

                setTimeout((request: Models.IGetProductListRequest)=> {
                    state = getState()

                    reducerState = state.user.mrmkmcibCRM.reducerCustomer

                    if (reducerState.currentCustomerId != operationId) return

                    dispatch (callGetRequestProductList (request))
                }, statusRequestMaxPeriod, request)

            } else {

                dispatch (thunkProductList.filterProductList (active))

            }
        },

        (error: Error) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (reducerState.currentCustomerId != operationId) return

            dispatch (getActionFailureCallGetRequestProductList (type, active) (error))

            dispatch (navigationExecutor (
                EnumsApp.NavigationStep.Navigation_ErrorStep,
                'Ошибка при загрузке продуктов'
            ))

        },

        (data: any): ModelProductList=> {
            state = getState()

            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (reducerState.currentCustomerId == operationId) {

                dispatch(thunkCustomer.clearProductListCache(type, active))

                if (util.getProductListPollingStatus(data.status) == Enums.ProductPollingStatus.Success &&
                    (data && (Array.isArray(data.errors) && data.errors.length == 0))) {
                    Cache.responsePersist(util.urlCustomer.callGetRequestProductList(
                        state,
                        active,
                        Enums.ProductPollingStatus.Success,
                        getProductListPollingOperationUuid(reducerState, util.getProductListService(type), active),
                        util.getProductListPath(util.getProductListService(type)),
                        reducerState.currentCustomerId,
                        false,
                        ttl,
                        [
                            {tag: Enums.CachePolicy.Default},
                            {
                                tag: util.getTagCallGetRequestProductList(type, active),
                                contextId: reducerState.currentCustomerManaged.id
                            },
                        ]
                    ), data, {})
                }
            }

            return getConverterCallGetProductListResponse (type)(data)
        },
        'GET'
    )
}

const getEksProductListFetching = (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean):boolean => {
    switch (true) {
        case (Enums.ProductType.CreditProduct       ===  productType        ||
              Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  isActiveProductList ? reducerState.creditActiveProductEksListFetching
                                        : reducerState.creditCloseProductEksListFetching
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
              Enums.ProductType.ContractNsoProduct ===  productType  ||
              Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return isActiveProductList ? reducerState.depositActiveProductEksListFetching
                                       : reducerState.depositCloseProductEksListFetching
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return isActiveProductList ? reducerState.corporateCardActiveProductEksListFetching
                                       : reducerState.corporateCardCloseProductEksListFetching
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
              Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return isActiveProductList ? reducerState.encashmentContractActiveProductEksListFetching
                                       : reducerState.encashmentContractCloseProductEksListFetching
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return isActiveProductList ? reducerState.legalInfoProductEksListFetching
                                       : reducerState.legalInfoProductEksListFetching
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return isActiveProductList ? reducerState.acquiringActiveProductListFetching
                                       : reducerState.acquiringCloseProductListFetching
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? reducerState.dboActiveProductEksListFetching
                                       : reducerState.dboCloseProductEksListFetching
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? reducerState.udboActiveProductEksListFetching
                                       : reducerState.udboCloseProductEksListFetching
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? reducerState.salaryActiveProductEksListFetching
                                       : reducerState.salaryCloseProductEksListFetching
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return isActiveProductList ? reducerState.settlementAgreementActiveProductEksListFetching
                                       : reducerState.settlementAgreementCloseProductEksListFetching
        }
        default: return false
    }
}
const getCallGetEksProductListAction = (productType: Enums.ProductType, isActiveProductList: boolean): Function =>
{
    switch (true) {
        case (Enums.ProductType.CreditProduct       ===  productType        ||
        Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  isActiveProductList ? actionsCustomer.callGetCreditActiveProductEksList
                                        : actionsCustomer.callGetCreditCloseProductEksList
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct ===  productType  ||
        Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetDepositActiveProductEksList
                                       : actionsCustomer.callGetDepositCloseProductEksList
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductEksList
                                       : actionsCustomer.callGetCorporateCardActiveProductEksList
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
        Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductEksList
                                       : actionsCustomer.callGetEncashmentContractCloseProductEksList
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return actionsCustomer.callGetLegalInfoProductEksList
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductEksList
                                       : actionsCustomer.callGetAcquiringCloseProductEksList
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetDboActiveProductEksList
                                       : actionsCustomer.callGetDboCloseProductEksList
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetUdboActiveProductEksList
                                       : actionsCustomer.callGetUdboCloseProductEksList
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductEksList
                                       : actionsCustomer.callGetSalaryCloseProductEksList
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductEksList
                                       : actionsCustomer.callGetSettlementAgreementCloseProductEksList
        }
        default: return ()=>{}
    }
}
const getCallGetEksProductListRequest = (productType: Enums.ProductType, isActiveProductList: boolean): Function => {
    switch (true) {
        case (Enums.ProductType.CreditProduct       ===  productType        ||
        Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  isActiveProductList ? actionsCustomer.callGetCreditActiveProductEksListRequest
                                        : actionsCustomer.callGetCreditCloseProductEksListRequest
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct ===  productType  ||
        Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetDepositActiveProductEksListRequest
                                       : actionsCustomer.callGetDepositCloseProductEksListRequest
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductEksListRequest
                                       : actionsCustomer.callGetCorporateCardCloseProductEksListRequest
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
        Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductEksListRequest
                                       : actionsCustomer.callGetEncashmentContractCloseProductEksListRequest
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return actionsCustomer.callGetLegalInfoProductEksList
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductEksListRequest
                                       : actionsCustomer.callGetAcquiringCloseProductEksListRequest
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetDboActiveProductEksListRequest
                : actionsCustomer.callGetDboCloseProductEksListRequest
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetUdboActiveProductEksListRequest
                                       : actionsCustomer.callGetUdboCloseProductEksListRequest
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductEksListRequest
                                       : actionsCustomer.callGetSalaryCloseProductEksListRequest
        }
        case Enums.ProductType.CashManagementProduct ===  productType:
        case Enums.ProductType.PaymentAccountProduct ===  productType:
        case Enums.ProductType.PackageProduct        ===  productType:
        case Enums.ProductType.TariffPlanProduct     ===  productType:
        case Enums.ProductType.CustomsPaymentProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductEksListRequest
                                       : actionsCustomer.callGetSettlementAgreementCloseProductEksListRequest
        }
        default: return ()=>{}
    }
}
const getCallGetEksProductListUrl = (productType: Enums.ProductType): Function => {
    switch (true) {
        case Enums.ProductType.CreditProduct  ===  productType:
        case Enums.ProductType.BankGuaranteeProduct ===  productType: {
            return  util.urlCustomer.callGetCreditProductEksList
        }
        case Enums.ProductType.DepositProduct     ===  productType:
        case Enums.ProductType.ContractNsoProduct ===  productType:
        case Enums.ProductType.ContractSdoProduct ===  productType: {
            return util.urlCustomer.callGetDepositProductEksList
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return util.urlCustomer.callGetCorporateCardProductEksList
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
        Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return util.urlCustomer.callGetEncashmentContractProductEksList
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return util.urlCustomer.callGetLegalInfoProductEksList
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return util.urlCustomer.callGetAcquiringProductEksList
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return util.urlCustomer.callGetDboProductEksList
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return util.urlCustomer.callGetUdboProductEksList
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return util.urlCustomer.callGetSalaryProductEksList
        }
        case Enums.ProductType.CashManagementProduct ===  productType:
        case Enums.ProductType.PaymentAccountProduct ===  productType:
        case Enums.ProductType.PackageProduct        ===  productType:
        case Enums.ProductType.TariffPlanProduct     ===  productType:
        case Enums.ProductType.CustomsPaymentProduct ===  productType: {
            return util.urlCustomer.callGetSettlementAgreementProductEksList
        }
        default: return ()=>{}
    }
}

const getCallGerEksProductListSuccess = (productType: Enums.ProductType,  isActiveProductList: boolean): Function => {
    switch (true) {
        case (Enums.ProductType.CreditProduct       ===  productType        ||
        Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  isActiveProductList ? actionsCustomer.callGetCreditActiveProductEksListSuccess
                                        : actionsCustomer.callGetCreditCloseProductEksListSuccess
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct ===  productType  ||
        Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetDepositActiveProductEksListSuccess
                                       : actionsCustomer.callGetDepositCloseProductEksListSuccess
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductEksListSuccess
                                       : actionsCustomer.callGetCorporateCardCloseProductEksListSuccess
        }
        case (Enums.ProductType.EncashmentProduct  ===  productType ||
        Enums.ProductType.SelfEncashmentProduct    ===  productType) : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductEksListSuccess
                                       : actionsCustomer.callGetEncashmentContractCloseProductEksListSuccess
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return actionsCustomer.callGetLegalInfoProductEksList
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductEksListSuccess
                                       : actionsCustomer.callGetAcquiringCloseProductEksListSuccess
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetDboActiveProductEksListSuccess
                                       : actionsCustomer.callGetDboCloseProductEksListSuccess
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetUdboActiveProductEksListSuccess
                                       : actionsCustomer.callGetUdboCloseProductEksListSuccess
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductEksListSuccess
                                       : actionsCustomer.callGetSalaryCloseProductEksListSuccess
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductEksListSuccess
                                       : actionsCustomer.callGetSettlementAgreementCloseProductEksListSuccess
        }
        default: return ()=>{}
    }
}
const getCallGerEksProductListFailure = (productType: Enums.ProductType,  isActiveProductList: boolean): Function => {
    switch (true) {
        case (Enums.ProductType.CreditProduct       ===  productType        ||
        Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  isActiveProductList ? actionsCustomer.callGetCreditActiveProductListFailure
                                        : actionsCustomer.callGetCreditCloseProductEksListFailure
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct ===  productType  ||
        Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetDepositActiveProductEksListFailure
                                       : actionsCustomer.callGetDepositCloseProductEksListFailure
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetCorporateCardActiveProductEksListFailure
                                       : actionsCustomer.callGetCorporateCardCloseProductEksListFailure
        }
        case (Enums.ProductType.EncashmentProduct  ===  productType ||
        Enums.ProductType.SelfEncashmentProduct    ===  productType) : {
            return isActiveProductList ? actionsCustomer.callGetEncashmentContractActiveProductEksListFailure
                                       : actionsCustomer.callGetEncashmentContractCloseProductEksListFailure
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return actionsCustomer.callGetLegalInfoProductEksList
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetAcquiringActiveProductEksListFailure
                                       : actionsCustomer.callGetAcquiringCloseProductEksListFailure
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetDboActiveProductEksListFailure
                                       : actionsCustomer.callGetDboCloseProductEksListFailure
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetUdboActiveProductEksListFailure
                                       : actionsCustomer.callGetUdboCloseProductEksListFailure
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return isActiveProductList ? actionsCustomer.callGetSalaryActiveProductEksListFailure
                                       : actionsCustomer.callGetSalaryCloseProductEksListFailure
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return isActiveProductList ? actionsCustomer.callGetSettlementAgreementActiveProductEksListFailure
                                       : actionsCustomer.callGetSettlementAgreementCloseProductEksListFailure
        }
        default: return ()=>{}
    }
}
const getCallGetEksProductListPollingStatus = (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean): Enums.ProductPollingStatus | null=> {
    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct: return (
            isActiveProductList ? reducerState.creditActiveProductEksList.pollingStatus :
                reducerState.creditCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct: return (
            isActiveProductList ? reducerState.depositActiveProductEksList.pollingStatus :
               reducerState.depositCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.CorporateCardProduct: return (
            isActiveProductList ? reducerState.corporateCardActiveProductEksList.pollingStatus :
                reducerState.corporateCardCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct: return (
            isActiveProductList ? reducerState.encashmentContractActiveProductEksList.pollingStatus :
                reducerState.encashmentContractCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.CurrencyControlProduct: return (
            reducerState.legalInfoProductEksList.pollingStatus
        )

        case Enums.ProductType.AcquiringProduct: return (
            isActiveProductList ? reducerState.acquiringActiveProductEksList.pollingStatus :
                reducerState.acquiringCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.DboProduct: return (
            isActiveProductList ? reducerState.dboActiveProductEksList.pollingStatus :
                reducerState.dboCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.ContractConstructorProduct: return (
            isActiveProductList ? reducerState.udboActiveProductEksList.pollingStatus :
                reducerState.udboActiveProductEksList.pollingStatus
        )

        case Enums.ProductType.SalaryProduct: return (
            isActiveProductList ? reducerState.salaryActiveProductEksList.pollingStatus :
                reducerState.salaryCloseProductEksList.pollingStatus
        )

        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct:
        case Enums.ProductType.CustomsPaymentProduct: return (
            isActiveProductList ? reducerState.settlementAgreementActiveProductEksList.pollingStatus :
                reducerState.settlementAgreementCloseProductEksList.pollingStatus
        )

        default: return Enums.ProductPollingStatus.None
    }
}
const getCallGetEksProductListConverterResponse = (productType:  Enums.ProductType): any  => {
    switch (true) {
        case (Enums.ProductType.CreditProduct  ===  productType        ||
        Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_CREDIT_PRODUCT_EKS_LIST_TO_CREDIT_PRODUCT_LIST
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct ===  productType  ||
        Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return Converters.RESPONSE_CUSTOMER_CALL_GET_DEPOSIT_PRODUCT_EKS_LIST_TO_DEPOSIT_PRODUCT_LIST
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_CORPORATE_CARD_PRODUCT_EKS_LIST_TO_CORPORATE_CARD_PRODUCT_LIST
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
        Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_ENCASHMENT_CONTRACT_PRODUCT_EKS_LIST_TO_ENCASHMENT_CONTRACT_PRODUCT_LIST
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_TO_LEGAL_INFO_PRODUCT_LIST
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_ACQUIRING_PRODUCT_EKS_LIST_TO_ACQUIRING_PRODUCT_LIST
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_DBO_PRODUCT_EKS_LIST_TO_DBO_PRODUCT_LIST
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_UDBO_PRODUCT_EKS_LIST_TO_UDBO_PRODUCT_LIST
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_SALARY_PRODUCT_EKS_LIST_TO_SALARY_PRODUCT_LIST
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return  Converters.RESPONSE_CUSTOMER_CALL_GET_SETTLEMENT_AGREEMENT_PRODUCT_EKS_LIST_TO_SETTLEMENT_AGREEMENT_PRODUCT_LIST
        }
        default: () => {}
    }
}
const getCallGetEksProductListConverterRequest = (productType:  Enums.ProductType): any => {
    switch (true) {
        case (Enums.ProductType.CreditProduct  ===  productType        ||
        Enums.ProductType.BankGuaranteeProduct ===  productType) : {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_CREDIT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case (Enums.ProductType.DepositProduct     ===  productType  ||
        Enums.ProductType.ContractNsoProduct ===  productType  ||
        Enums.ProductType.ContractSdoProduct ===  productType)  : {
            return Converters.REQUEST_CUSTOMER_CALL_GET_DEPOSIT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case Enums.ProductType.CorporateCardProduct ===  productType: {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_CORPORATE_CARD_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case (Enums.ProductType.EncashmentProduct     ===  productType ||
        Enums.ProductType.SelfEncashmentProduct ===  productType) : {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_ENCASHMENT_CONTRACT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case Enums.ProductType.CurrencyControlProduct ===  productType: {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_LEGAL_INFO_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case Enums.ProductType.AcquiringProduct ===  productType: {
        return  Converters.REQUEST_CUSTOMER_CALL_GET_ACQUIRING_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case Enums.ProductType.DboProduct ===  productType: {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_DBO_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case Enums.ProductType.ContractConstructorProduct ===  productType: {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_UDBO_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case Enums.ProductType.SalaryProduct ===  productType: {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_SALARY_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        case (Enums.ProductType.CashManagementProduct ===  productType  ||
        Enums.ProductType.PaymentAccountProduct ===  productType  ||
        Enums.ProductType.PackageProduct        ===  productType  ||
        Enums.ProductType.TariffPlanProduct     ===  productType  ||
        Enums.ProductType.CustomsPaymentProduct ===  productType)  : {
            return  Converters.REQUEST_CUSTOMER_CALL_GET_SETTLEMENT_AGREEMENT_PRODUCT_EKS_LIST_FROM_EKS_ERROR_LIST
        }
        default: return ()=>{}
    }
}


export const performUpdateProductList = (isActiveProductList: boolean, productType: Enums.ProductType) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerProductList

    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct:{
            const updatedProductList = isActiveProductList ?
                {...state.user.mrmkmcibCRM.reducerCustomer.creditActiveProductList,
                    eksErrorList: reducerCustomer.creditActiveProductEksList.eksErrorList,
                    data: [...reducerCustomer.creditActiveProductList.data,
                        ...reducerCustomer.creditActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.creditCloseProductList,
                    eksErrorList: reducerCustomer.creditCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.creditCloseProductList.data,
                        ...reducerCustomer.creditCloseProductEksList.data],}
            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ( {
                cachedDate: isActiveProductList ? reducerCustomer.creditActiveProductEksList.bhCachedDate
                                                : reducerCustomer.creditCloseProductEksList.bhCachedDate,
                data: updatedProductList}))

            break;
        }
        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.CustomsPaymentProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct: {
            const updatedProductList = isActiveProductList ?
                {...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementActiveProductList,
                    eksErrorList: reducerCustomer.settlementAgreementActiveProductEksList.eksErrorList,
                    data: [...reducerCustomer.settlementAgreementActiveProductList.data,
                           ...reducerCustomer.settlementAgreementActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.settlementAgreementCloseProductList,
                    eksErrorList: reducerCustomer.settlementAgreementCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.settlementAgreementCloseProductList.data,
                           ...reducerCustomer.settlementAgreementCloseProductEksList.data],}


            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.settlementAgreementActiveProductEksList.bhCachedDate
                                                : reducerCustomer.settlementAgreementCloseProductEksList.bhCachedDate,
                data: updatedProductList
            }))

            break;
        }
        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractSdoProduct:
        case Enums.ProductType.ContractNsoProduct: {

            const updatedProductList = isActiveProductList ? {...state.user.mrmkmcibCRM.reducerCustomer.depositActiveProductList,
                                            eksErrorList: reducerCustomer.depositActiveProductEksList.eksErrorList,
                                            data: [...reducerCustomer.depositActiveProductList.data,
                                            ...reducerCustomer.depositActiveProductEksList.data],} :
                                            {...state.user.mrmkmcibCRM.reducerCustomer.depositCloseProductList,
                                            eksErrorList: reducerCustomer.depositCloseProductEksList.eksErrorList,
                                            data: [...reducerCustomer.depositCloseProductList.data,
                                                   ...reducerCustomer.depositCloseProductEksList.data],}

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.depositActiveProductEksList.bhCachedDate
                                                : reducerCustomer.depositCloseProductEksList.bhCachedDate,
                data: updatedProductList,
            }))
            break;
        }
        case Enums.ProductType.CorporateCardProduct: {
            const updatedProductList = isActiveProductList ? {
                ...state.user.mrmkmcibCRM.reducerCustomer.corporateCardActiveProductList,
                eksErrorList: reducerCustomer.corporateCardActiveProductEksList.eksErrorList,
                data: [...reducerCustomer.corporateCardActiveProductList.data,
                       ...reducerCustomer.corporateCardActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.corporateCardCloseProductList,
                eksErrorList: reducerCustomer.corporateCardCloseProductEksList.eksErrorList,
                data: [...reducerCustomer.corporateCardCloseProductList.data,
                       ...reducerCustomer.corporateCardCloseProductEksList.data],}

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.corporateCardActiveProductEksList.bhCachedDate
                                                : reducerCustomer.corporateCardCloseProductEksList.bhCachedDate,
                data: updatedProductList
            }))

            break;
        }
        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct:  {
            const updatedProductList = isActiveProductList ? {
                ...state.user.mrmkmcibCRM.reducerCustomer.encashmentContractActiveProductList,
                eksErrorList: reducerCustomer.encashmentContractActiveProductEksList.eksErrorList,
                data: [...reducerCustomer.encashmentContractActiveProductList.data,
                       ...reducerCustomer.encashmentContractActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.encashmentContractCloseProductList,
                    eksErrorList: reducerCustomer.encashmentContractCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.encashmentContractCloseProductList.data,
                           ...reducerCustomer.encashmentContractCloseProductEksList.data],}

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.encashmentContractActiveProductEksList.bhCachedDate
                                                : reducerCustomer.encashmentContractCloseProductEksList.bhCachedDate,
               data: updatedProductList,
            }))

            break;
        }

        case Enums.ProductType.CurrencyControlProduct: {

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate:reducerCustomer.legalInfoProductList.bhCachedDate,
                data: { ...state.user.mrmkmcibCRM.reducerCustomer.legalInfoProductList,
                        eksErrorList: reducerCustomer.legalInfoProductList.eksErrorList,
                        data: [...reducerCustomer.legalInfoProductList.data,
                               ...reducerCustomer.legalInfoProductEksList.data],}
            }))

            break;
        }
        case Enums.ProductType.AcquiringProduct: {

            const updatedProductList = isActiveProductList ? {
                ...state.user.mrmkmcibCRM.reducerCustomer.acquiringActiveProductList,
                eksErrorList: reducerCustomer.acquiringActiveProductEksList.eksErrorList,
                data: [...reducerCustomer.acquiringActiveProductList.data,
                    ...reducerCustomer.acquiringActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.acquiringCloseProductList,
                    eksErrorList: reducerCustomer.acquiringCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.acquiringCloseProductList.data,
                        ...reducerCustomer.acquiringCloseProductEksList.data],}

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.acquiringActiveProductEksList.bhCachedDate
                                                : reducerCustomer.acquiringCloseProductEksList.bhCachedDate,
                data: updatedProductList,
            }))

            break;
        }
        case Enums.ProductType.DboProduct: {
            const updatedProductList = isActiveProductList ? {
                ...state.user.mrmkmcibCRM.reducerCustomer.dboActiveProductList,
                eksErrorList: reducerCustomer.dboActiveProductEksList.eksErrorList,
                data: [...reducerCustomer.dboActiveProductList.data,
                    ...reducerCustomer.dboActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.dboCloseProductList,
                    eksErrorList: reducerCustomer.dboCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.dboCloseProductList.data,
                        ...reducerCustomer.dboCloseProductEksList.data],}

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.dboActiveProductEksList.bhCachedDate
                                                : reducerCustomer.dboCloseProductEksList.bhCachedDate,
                data: updatedProductList,
            }))

            break;
        }
        case Enums.ProductType.ContractConstructorProduct: {

            const updatedProductList = isActiveProductList ? {
                ...state.user.mrmkmcibCRM.reducerCustomer.udboActiveProductList,
                eksErrorList: reducerCustomer.udboActiveProductEksList.eksErrorList,
                data: [...reducerCustomer.udboActiveProductList.data,
                    ...reducerCustomer.udboActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.udboCloseProductList,
                    eksErrorList: reducerCustomer.udboCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.udboCloseProductList.data,
                        ...reducerCustomer.udboCloseProductEksList.data],}

            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.udboActiveProductEksList.bhCachedDate
                                                : reducerCustomer.udboCloseProductEksList.bhCachedDate,
                data: updatedProductList
            }))

            break
        }

        case Enums.ProductType.SalaryProduct: {
            const updatedProductList = isActiveProductList ? {
                ...state.user.mrmkmcibCRM.reducerCustomer.salaryActiveProductList,
                eksErrorList: reducerCustomer.salaryActiveProductEksList.eksErrorList,
                data: [...reducerCustomer.salaryActiveProductList.data,
                    ...reducerCustomer.salaryActiveProductEksList.data],} :
                {...state.user.mrmkmcibCRM.reducerCustomer.salaryCloseProductList,
                    eksErrorList: reducerCustomer.salaryCloseProductEksList.eksErrorList,
                    data: [...reducerCustomer.salaryCloseProductList.data,
                        ...reducerCustomer.salaryCloseProductEksList.data],}


            dispatch (getActionSuccessCallGetRequestProductList (productType, isActiveProductList) ({
                cachedDate: isActiveProductList ? reducerCustomer.salaryActiveProductEksList.bhCachedDate
                                                : reducerCustomer.salaryCloseProductEksList.bhCachedDate,
                data: updatedProductList
            }))

            break;
        }
    }
}

const getProductListOperationUuid = (reducerState: ModelsCustomer.ICustomerState, productType: Enums.ProductType, isActiveProductList: boolean): string=> {
    switch (productType) {
        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct: return (
            isActiveProductList ? reducerState.creditActiveProductListOperationUuid
                                : reducerState.creditCloseProductListOperationUuid
        )

        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct: return (
            isActiveProductList ? reducerState.depositActiveProductListOperationUuid
                                : reducerState.depositCloseProductListOperationUuid
        )

        case Enums.ProductType.CorporateCardProduct: return (
            isActiveProductList ? reducerState.corporateCardActiveProductListOperationUuid
                                : reducerState.corporateCardCloseProductListOperationUuid
        )

        case Enums.ProductType.EncashmentProduct:
        case Enums.ProductType.SelfEncashmentProduct: return (
            isActiveProductList ? reducerState.encashmentContractActiveProductListOperationUuid
                                : reducerState.encashmentContractCloseProductListOperationUuid
        )

        case Enums.ProductType.CurrencyControlProduct: return (
            reducerState.legalInfoProductListOperationUuid
        )

        case Enums.ProductType.AcquiringProduct: return (
            isActiveProductList ? reducerState.acquiringActiveProductListOperationUuid
                                : reducerState.acquiringCloseProductListOperationUuid
        )

        case Enums.ProductType.DboProduct: return (
            isActiveProductList ? reducerState.dboActiveProductListOperationUuid
                                : reducerState.dboCloseProductListOperationUuid
        )

        case Enums.ProductType.ContractConstructorProduct: return (
            isActiveProductList ? reducerState.udboActiveProductListOperationUuid
                                : reducerState.udboCloseProductListOperationUuid
        )

        case Enums.ProductType.SalaryProduct: return (
            isActiveProductList ? reducerState.salaryActiveProductListOperationUuid
                                : reducerState.salaryCloseProductListOperationUuid
        )

        case Enums.ProductType.CashManagementProduct:
        case Enums.ProductType.PaymentAccountProduct:
        case Enums.ProductType.PackageProduct:
        case Enums.ProductType.TariffPlanProduct:
        case Enums.ProductType.CustomsPaymentProduct: return (
            isActiveProductList ? reducerState.settlementAgreementActiveProductListOperationUuid
                                : reducerState.settlementAgreementCloseProductListOperationUuid
        )

        default: return ""
    }
}
export const performCallEksRequestProductList = (productType: Enums.ProductType, productListStatus: Enums.ProductListAgreementStatus) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    const isActiveProductList= util.isActiveProductList(productListStatus)

    let operationId = reducerState.currentCustomerId

    let statusRequestMaxPeriod = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().StatusRequestMaxPeriod])

    dispatch (getCallGetEksProductListAction(productType, isActiveProductList)())

    if (getEksProductListFetching(reducerState, productType, isActiveProductList) &&
        getCallGetEksProductListPollingStatus (reducerState, productType, isActiveProductList) !=
        Enums.ProductPollingStatus.InProgress) {
        return
    } else {

        dispatch(getCallGetEksProductListRequest(productType, isActiveProductList)())

    }

    reducerState = state.user.mrmkmcibCRM.reducerCustomer

    util.call<ModelProductList, Models.EksErrorList>(

        getCallGetEksProductListUrl(productType)(state, reducerState, [{tag: Enums.CachePolicy.Disabled}], productListStatus),

        (response: Response<ModelProductList>) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (reducerState.currentCustomerId != operationId) return

            // Dispatch thunk "callGetProductEksList" on fetch succeeded.
            dispatch (getCallGerEksProductListSuccess (productType, isActiveProductList) (response))

            state = getState ()
            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (getCallGetEksProductListPollingStatus (reducerState, productType, isActiveProductList) ==
                Enums.ProductPollingStatus.InProgress) {

                setTimeout((productType: Enums.ProductType, productListStatus: Enums.ProductListAgreementStatus) =>{
                    state = getState()

                    reducerState = state.user.mrmkmcibCRM.reducerCustomer

                    if (reducerState.currentCustomerId != operationId) return

                    dispatch (performCallEksRequestProductList(productType, productListStatus))

                    }, statusRequestMaxPeriod, productType, productListStatus)
            } else {
                // Dispatch thunk "callGetProductListSuccess".
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer

                dispatch(performUpdateProductList(isActiveProductList, productType))

                dispatch(thunkCustomer.updateProductListOperationUuid(productType, isActiveProductList)())

                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerCustomer

                dispatch (thunkProductList.filterProductList(isActiveProductList))

            }
        },

        (error: Error) => {

            state = getState ()
            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (reducerState.currentCustomerId != operationId) return

            dispatch(getCallGerEksProductListFailure(productType, isActiveProductList)(error))

            dispatch(getActionFailureCallGetRequestProductList(productType, isActiveProductList)(error))


        },

        getCallGetEksProductListConverterResponse(productType),
        getCallGetEksProductListPollingStatus(reducerState,productType,
            isActiveProductList) == Enums.ProductPollingStatus.InProgress ?
            'GET' :
            'POST',

        {'Content-type': 'application/json; charset=UTF-8',
            'operUid': getProductListOperationUuid(reducerState, productType, isActiveProductList)},

        getCallGetEksProductListConverterRequest(productType),

        {data: util.getEksErrorProductList(reducerState, productType, isActiveProductList)}
    )

}



/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to include company to Customer.
 */
export const navigateToCustomerActivityIncludeScreen = () => (dispatch: Function): void => {

    dispatch(SplitPanelActions.pushContent(Enums.NavigationCustomerAccessory.AppCRM_CustomerEditor_Include,
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)))

    dispatch(actionsCustomer.navigateToCustomerActivityIncludeScreen())

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to exclude company from Customer.
 */
export const navigateToCustomerActivityExcludeScreen = () => (dispatch: Function): void => {

    dispatch(SplitPanelActions.pushContent(Enums.NavigationCustomerAccessory.AppCRM_CustomerEditor_Exclude,
        util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)))

    dispatch(actionsCustomer.navigateToCustomerActivityExcludeScreen())

}

export const navigateToCustomerActivityAccessScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let classifiers = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary

    const priority: ModelsApp.Classifier = _.find(classifiers.ACTIVITY_PRIORITY.data, item => item.code == "1-ASAP") || ModelsAppDefault.Classifier

    const activityType = _.find(shedulerUtil.getActivityAvailableTypeList().data, item => item.code == "Task") || ModelsAppDefault.Classifier

    dispatch(performInputActivity(
        EnumsScheduler.SchedulerMode.Customer,
        {...ModelsSheduler.defaultValues.Activity,
        customer: reducerState.currentCustomer,
        description: 'Задача на предоставление доступа',
        priority: priority,
        type: activityType,
        memberList: {data: reducerState.currentCustomer.holder ?
                                [{...reducerState.currentCustomer.holder, isGeneral: true}] : []},
    }, EnumsScheduler.ActivityMode.Create, EnumsScheduler.ActivityContextMode.CustomerAccess))

    // dispatch(SplitPanelActions.pushAccessory(Enums.NavigationCustomerAccessory.AppCRM_CustomerEditor_Access,
    //     util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Customer)))

    dispatch(actionsCustomer.navigateToCustomerActivityAccessScreen())

}

/*
 * Thunk dispatched by "Customer" screen. Thunk chain used to close Gsz activity.
 */
export const closeCustomerActivityPanel = () => (dispatch: Function): void => {





    dispatch(actionsCustomer.closeCustomerActivityPanel())


}

/*
 * Thunk dispatched by "Customer" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function): void => {





    dispatch(actionsCustomer.performContainerReset())


}

/*
 * Thunk dispatched by "Customer" screen.
 */
export const callGetForecastDealList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let currentCustomerId = reducerState.currentCustomerId

    if (reducerState.forecastDealListFetching) {
        return
    }

    const operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id

    dispatch(actionsCustomer.callGetForecastDealList())

    dispatch(actionsCustomer.callGetForecastDealListRequest())

    util.call<Models.ForecastDealList, Models.EksErrorList>(
        util.urlProductCredit.callGetForecastDealList(state, reducerState, [{tag: Enums.CachePolicy.Disabled}], false, 600),

        (response: Response<Models.ForecastDealList>) => {
            state = getState()
            const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct

            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) {
                return
            }

            dispatch(actionsCustomer.callGetForecastDealListSuccess(response))
            dispatch(thunkProductList.performSetForecastDealsToCreditProducts())

            if (currentCreditProduct) {
                // Update current credit with new forecastDealId value
                dispatch(thunkProduct.performCurrentCreditProductRefresh())

                // Call refresh forecast events if credit view is open
				dispatch(thunkProductCredit.callGetForecastEventList())
            }
        },

        (error: Error) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerCustomer

            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) {
                return
            }

            dispatch(actionsCustomer.callGetForecastDealListFailure(error))
            // делаем forecastFetching: false
            dispatch(thunkProductCredit.performRefreshForecastFailure())

        },

        Converters.RESPONSE_CREDIT_CALL_GET_FORECAST_DEAL_LIST_TO_FORECAST_DEAL_LIST,

        'GET'
    )

}

export const navigateToCurrentCustomerAgentScreen = (agentId:string | null | undefined) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM;

    let currentCustomerManaged = reducerState.reducerCustomer.currentCustomerManaged;
    let agentList = reducerState.reducerAgentList.agentList.data;
    let currentAgent = _.find(agentList, agent => agent.id == agentId);

    currentAgent ?
        dispatch(thunkAgent.performOpenAgentScreen(currentAgent, currentCustomerManaged, Enums.AgentMode.Watch, Enums.AgentContextMode.Customer)) :
        dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке представителя'))


}


export const performInit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState();
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer;
    dispatch(navigationExecutor(EnumsApp.NavigationStep.Customer_ScreenMounted))
}


export const performCustomerActivityListRefresh = (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    let customerManagedList = state.user.mrmkmcibCRM.reducerAppCRM.customerManagedList

    let customerSearchList = state.user.mrmkmcibCRM.reducerAppCRM.customerSearchList

    let isCompleted = state.user.mrmkmcibCRM.reducerAppCRM.customerManagedList.isCompleted

    let customerForActivityList: Models.Customer | Models.CustomerManaged | undefined = customerSearchList && Array.isArray(customerSearchList.data) &&
         customerSearchList.data.length>0
         ? customerSearchList
            .data.find((customerManaged: Models.Customer): boolean => customerManaged.id == customerId)
         : undefined

    if (customerForActivityList == undefined) {
        customerForActivityList = customerManagedList && Array.isArray(customerManagedList.data)
            ? customerManagedList.data.find((customerManaged: Models.CustomerManaged): boolean => customerManaged.id == customerId) || { ...defaultValues.Customer, id: customerId}
            : undefined
    }

    if (!customerForActivityList && !isCompleted) {
        dispatch(thunkAppCrm.performCustomerManagedListAppend())
    } else if (!customerForActivityList && isCompleted) {
        dispatch(navigationExecutor(
            EnumsApp.NavigationStep.Navigation_ErrorStep,
            'Ошибка при загрузке клиента'
        ))
    }

    dispatch(thunkCustomer.callGetCustomerActivityList({...defaultValues.CustomerManaged, ...customerForActivityList}))
}

export const fillOccasionListContent = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer

    if (reducerState.currentCustomerManaged.id != '') {
        dispatch(thunkOccasionList.performOpenOccasionListScreen(
            reducerState.currentCustomerManaged.occasionList,
            {...defaultValues.OccasionListConfig,contextMode:Enums.OccasionListContextMode.Notice,
                currentCustomer: reducerState.currentCustomerManaged}))

        dispatch(navigationExecutor(EnumsApp.NavigationStep.Occasion_PerformRefreshOccasionSuccess))
    } else {
        dispatch(navigationExecutor(
            EnumsApp.NavigationStep.Navigation_ErrorStep,
            'Ошибка при загрузке важных дат клиента: не найден id currentCustomerManaged'
        ))
    }
}


export const performRefreshCustomerActivitylist = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    let currentCustomerManager = reducerState.currentCustomerManaged

    dispatch(callGetCustomerActivityList(currentCustomerManager))

}

type ModelPushProductList = Models.CreditProductList | Models.SettlementAgreementProductList |   Models.DepositProductList



export const performGetProductFromPush = (getProductFromPushData: Models.GetProductFromPushData) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()

    const {productId, productType, customerId, eksId, isActive, isLast} = getProductFromPushData

    if(!isLast) {
        dispatch(thunkProduct.navigateToProductFromPush())
    }

    let statusRequestMaxPeriod = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().StatusRequestMaxPeriod])

    util.call<ModelPushProductList, Models.ProductPostRequest>(
        util.productPostUrl.callGetProductList(state, util.getProductListService(productType), customerId, [{tag: Enums.CachePolicy.Disabled}]),



        (response: Response<ModelPushProductList>) => {
            switch(response.data.pollingStatus) {
                case Enums.ProductPollingStatus.InProgress: {
                    const oid = response.data.operationUuid
                    if(oid) {
                        setTimeout(() => {

                            dispatch(thunkCustomer.checkProductStatus(getProductFromPushData, oid))

                        }, statusRequestMaxPeriod)
                    }
                    break
                }
                case Enums.ProductPollingStatus.Error:
                case Enums.ProductPollingStatus.None: {
                    dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке продукта'))
                    break
                }

                default: {
                    dispatch (getActionSuccessCallGetRequestProductList (productType, isActive) (response))
                    dispatch(thunkCustomer.findProductFromList(getProductFromPushData))
                }
            }
        },

        (error: Error) => {
            dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке продукта'))
        },

        (data: any): ModelPushProductList=> {
            return getConverterCallGetProductListResponse (productType)(data)
        },

        'POST',

        {'Content-type': 'application/json; charset=UTF-8'},

        Converters.REQUEST_PRODUCTS_CALL_POST_REQUEST,

        {
            ids:[ {id: eksId, isActive, reason: 'push'} ]
        }
    )
}


export const checkProductStatus = (getProductFromPushData: Models.GetProductFromPushData,  oid: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()

    const {productId, productType, customerId, eksId, isActive, isLast} = getProductFromPushData

    let statusRequestMaxPeriod = Number(state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration[supParamNames().StatusRequestMaxPeriod])

    util.call<ModelPushProductList, void>(
        util.productPostUrl.getProductStatus(state, util.getProductListService(productType), oid, [{tag: Enums.CachePolicy.Disabled}]),

        (response: Response<ModelPushProductList>) => {

            switch(response.data.pollingStatus) {
                case Enums.ProductPollingStatus.InProgress: {
                    setTimeout(() => dispatch(thunkCustomer.checkProductStatus(getProductFromPushData, oid)), statusRequestMaxPeriod)
                    break
                }
                case Enums.ProductPollingStatus.Error:
                case Enums.ProductPollingStatus.None: {
                    dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке продукта'))
                    break
                }
                default: {
                    dispatch (getActionSuccessCallGetRequestProductList (productType, isActive) (response))
                    dispatch(thunkCustomer.findProductFromList(getProductFromPushData))
                }
            }
        },

        (error: Error) => {
            dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке продукта'))
        },

        (data: any): ModelPushProductList=> {
            return getConverterCallGetProductListResponse (productType)(data)
        },

        'GET',
    )
}


export const findProductFromList = (getProductFromPushData: Models.GetProductFromPushData) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    let productList, product

    const {productId, productType, customerId, eksId, isActive, isLast} = getProductFromPushData


    switch (productType) {

        case Enums.ProductType.DepositProduct:
        case Enums.ProductType.ContractNsoProduct:
        case Enums.ProductType.ContractSdoProduct: {

            isActive ? productList = reducerState.depositActiveProductList.data : productList = reducerState.depositCloseProductList.data

            if ( productList.length > 0 ) {
                product = _.find(productList, product => {

                    switch(productType) {
                        case Enums.ProductType.DepositProduct: {
                            return product.depositProduct != null && product.depositProduct.acctId != null && product.depositProduct.acctId == productId
                        }
                        case Enums.ProductType.ContractNsoProduct: {
                            return product.contractNSO != null && product.contractNSO.acctId != null && product.contractNSO.acctId == productId
                        }
                        case Enums.ProductType.ContractSdoProduct: {
                            return product.contractSDO != null && product.contractSDO.acctId != null && product.contractSDO.acctId == productId
                        }
                    }

                })

               if ( product ) {
                    switch(productType) {
                        case Enums.ProductType.DepositProduct: {
                            dispatch(thunkProduct.performDepositProductShow(product))
                            dispatch(navigationExecutor(EnumsApp.NavigationStep.Product_NavigationSuccess))
                            break
                        }
                        case Enums.ProductType.ContractNsoProduct: {
                            dispatch(thunkProduct.performContractNsoProductShow(product))
                            dispatch(navigationExecutor(EnumsApp.NavigationStep.Product_NavigationSuccess))
                            break
                        }
                        case Enums.ProductType.ContractSdoProduct: {
                            dispatch(thunkProduct.performContractSdoProductShow(product))
                            dispatch(navigationExecutor(EnumsApp.NavigationStep.Product_NavigationSuccess))
                            break
                        }
                    }
                } else {
                    dispatch(thunkCustomer.checkIsLastCall(getProductFromPushData))
                }

            } else {
                dispatch(thunkCustomer.checkIsLastCall(getProductFromPushData))
            }
            break
        }


        case Enums.ProductType.CreditProduct:
        case Enums.ProductType.BankGuaranteeProduct: {

            isActive ? productList = reducerState.creditActiveProductList.data : productList = reducerState.creditCloseProductList.data

            if ( productList.length > 0 ) {
                product = _.find(productList, product => {

                    switch(productType) {
                        case Enums.ProductType.CreditProduct: {
                            return product.creditProduct != null && product.creditProduct.contractId != null && product.creditProduct.contractId == productId
                        }
                        case Enums.ProductType.BankGuaranteeProduct: {
                            return product.bankGuaranteeProduct != null && product.bankGuaranteeProduct.contractId != null && product.bankGuaranteeProduct.contractId == productId
                        }
                    }
                })

                if ( product ) {
                    switch(productType) {
                        case Enums.ProductType.CreditProduct: {
                            dispatch(thunkProduct.performCreditProductShow(product))
                            dispatch(navigationExecutor(EnumsApp.NavigationStep.Product_NavigationSuccess))
                            break
                        }
                        case Enums.ProductType.BankGuaranteeProduct: {
                            dispatch(thunkProduct.performBankGuaranteeProductShow(product))
                            dispatch(navigationExecutor(EnumsApp.NavigationStep.Product_NavigationSuccess))
                            break
                        }
                    }
                } else {
                    dispatch(thunkCustomer.checkIsLastCall(getProductFromPushData))
                }

            } else {
                dispatch(thunkCustomer.checkIsLastCall(getProductFromPushData))
            }

            break
        }

        case Enums.ProductType.PaymentAccountProduct: {
            isActive ? productList = reducerState.settlementAgreementActiveProductList.data : productList = reducerState.settlementAgreementCloseProductList.data

            if ( productList.length > 0 ) {
                product = productList.find(product => {
                    return (
                        product.paymentAccountProduct != null &&
                        product.paymentAccountProduct.accountNumber != null &&
                        product.paymentAccountProduct.accountNumber == productId
                    )
                })

                if ( product ) {
                    dispatch(thunkProduct.performPaymentAccountProductShow(product))
                    dispatch(thunkProductPaymentAccount.callGetCardIndexList(false))
                    dispatch(thunkProductPaymentAccount.callGetProductVspInfo())
                    if (isActive) {
                        dispatch(thunkProductPaymentAccount.callGetOperationList(false))
                    }
                    dispatch(navigationExecutor(EnumsApp.NavigationStep.Product_NavigationSuccess))
                } else {
                    dispatch(thunkCustomer.checkIsLastCall(getProductFromPushData))
                }
            } else {
                dispatch(thunkCustomer.checkIsLastCall(getProductFromPushData))
            }
            break
        }
    }
}

export const checkIsLastCall = (getProductFromPushData: Models.GetProductFromPushData) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    const { isLast } =  getProductFromPushData

    if (!isLast) {
        dispatch(thunkCustomer.performGetProductFromPush({
            ...getProductFromPushData,
            isActive: false,
            isLast: true,
        }))
    } else {
        dispatch(navigationExecutor(EnumsApp.NavigationStep.Navigation_ErrorStep, 'Ошибка при загрузке продукта'))
    }
}

export const performPrognosticProductListModalAlertHide = () => (dispatch: Function): void => {

    dispatch(actionsCustomer.performPrognosticProductListModalAlertHide())
}

export const performPrognosticProductListModalAlertShow = () => (dispatch: Function): void => {

    dispatch(actionsCustomer.performPrognosticProductListModalAlertShow())
}

/*
 * Thunk dispatched by "Customer" screen.
 */
export const callGetForecastPrognosticDealList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerCustomer
    const operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id
    if (reducerState.forecastDealListFetching) {
        return
    }


    dispatch(actionsCustomer.callGetForecastPrognosticDealList())
    dispatch(actionsCustomer.callGetForecastPrognosticDealListRequest())

    util.call<Models.ForecastDealList, Models.EksErrorList>(

        util.urlProductCredit.callGetPrognosticForecastDealList(
            state,
            reducerState,
            [
                {tag: Enums.CachePolicy.Disabled}
            ],
            false,
            600
        ),

        (response: Response<Models.ForecastDealList>) => {
            state = getState()
            const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct

            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) {
                return
            }
            dispatch(actionsCustomer.callGetForecastPrognosticDealListSuccess(response))
            dispatch(thunkProductList.performSetForecastDealsToCreditProducts())
        },

        (error: Error) => {
            state = getState()
            const currentCreditProduct = state.user.mrmkmcibCRM.reducerProduct.currentCreditProduct.creditProduct

            if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) {
                return
            }
            dispatch(actionsCustomer.callGetForecastPrognosticDealListFailure(error))
        },

        Converters.RESPONSE_CREDIT_CALL_GET_FORECAST_DEAL_LIST_TO_FORECAST_DEAL_LIST,

        'GET'
    )

}

export const setActivityAccessError = (isActivityAccessError: boolean) => (dispatch: Function): void => {
    dispatch(actionsCustomer.performSetActivityAccessError(isActivityAccessError))

}