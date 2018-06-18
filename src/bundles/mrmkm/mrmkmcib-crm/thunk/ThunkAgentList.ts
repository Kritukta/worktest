/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {defaultValues} from "../models/Models"
import {Models as ModelsApp, navigationExecutor, EnumsApp, HistoryMobileApp} from "mrmkmcib-app"
import { EnumsCrm, Models, navigateToAppCrmScreen } from 'mrmkmcib-crm';
import {Models as ModelsScheduler,
    swapContextAgentList as swapContextAgentListToActivity,
    navigateToActivityAgentScreen,
    performContainerScopeReset} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"
import * as Cache from '../modules/Cache'

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsAgentList from '../actions/ActionsAgentList'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import {SplitPanelActions} from 'ufs-mobile-platform'






export const performFlush = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    Cache.sessionResetTag({
        tag: util.getAgentListTagRequestString(reducerState.agentListContextMode),
        contextId: util.getAgentListContextRequestString(reducerState.agentListContextMode, reducerState)})

    dispatch(actionsAgentList.performFlush())

    if (reducerState.agentListContextMode == Enums.AgentListContextMode.Customer) {

        dispatch(thunkCustomer.performCustomerCacheReset())

    }


}

/*
 * Thunk dispatched by "AgentList" screen. Refresh current agent list.
 */
export const performOpenAgentListScreen = ( agentList: Models.AgentList,
                                            customerManaged: Models.CustomerManaged,
                                            currentDeal: Models.Deal | null,
                                            agentListContextMode: Enums.AgentListContextMode,
                                            agentListAccessLevel: Enums.AgentListAccessLevel) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    if (customerManaged.id) {
        dispatch(actionsAgentList.performOpenAgentListScreen(customerManaged, currentDeal, agentListContextMode, agentListAccessLevel))
    }
    
    if (
        reducerState.inputAgentList && reducerState.inputAgentList.data.length === 0
        && [
            Enums.AgentListContextMode.Activity,
            Enums.AgentListContextMode.Scheduler,
            Enums.AgentListContextMode.NewEditActivity,
            Enums.AgentListContextMode.Deal,
            Enums.AgentListContextMode.NewDeal,
            Enums.AgentListContextMode.EditDeal
        ].indexOf(agentListContextMode) !== -1
    ) {
        dispatch(performEdit());
    }

    switch(agentListContextMode){
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.Activity:
        case Enums.AgentListContextMode.NewEditActivity:
        {

            dispatch(performInputAgentList(agentList))

            dispatch(thunkAgentList.callGetAgentList(customerManaged.id))

            break;
        }
        case Enums.AgentListContextMode.Deal:
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal:{
            dispatch(performInputAgentList(agentList))

            break;
        }
        case Enums.AgentListContextMode.Customer:{
            // Dispatch thunk "callGetAgentList" synchronously.
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerAgentList

            dispatch(thunkAgentList.callGetAgentList(customerManaged.id))
            break;
        }
    }
}
export const performInputAgentList = (agentList: Models.AgentList) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    let currentUser = state.user.mrmkmcibCRM.reducerAppCRM.currentUser

    let updateAgentList =  {
            data: agentList.data.map((agent: Models.Agent) => {
                const teamPerson = util.getPersonInTeam(currentUser, agent.memberList)
                return {...agent,
                    accessLevel: util.setAccessLevelToAgent(teamPerson),
                    isPrincipal: util.isMainEmployee(agent, reducerState.currentCustomerManaged ? reducerState.currentCustomerManaged.id : ''),
                }
            })
            .sort((a: Models.Agent, b: Models.Agent) => {
                if (a.isPrincipal > b.isPrincipal) return -1
                if (a.isPrincipal < b.isPrincipal) return 1

                return 0
            })
    }

    dispatch(actionsAgentList.performInputAgentList(updateAgentList))

}
export const getAgentListContextRequestString = (agentListContext: Enums.AgentListContextMode, reducerState: ModelState.IRootState) => {

    let reducerAgentList = reducerState.user.mrmkmcibCRM.reducerAgentList
    switch (agentListContext){
        case Enums.AgentListContextMode.Customer:{
            return reducerAgentList.currentCustomerManaged && reducerAgentList.currentCustomerManaged.id || ''
        }
        case Enums.AgentListContextMode.Deal:{
            return reducerAgentList.currentDeal && reducerAgentList.currentDeal.id || ''
        }
        default: {
            return ''
        }
    }
}
/*
 * Thunk dispatched by "AgentList" screen. Fetch current customer or deal agent list.
 */
export const callGetAgentList = (id: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    if (reducerState.agentListFetching) {
        return
    }
    let operationId = state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id


    dispatch(actionsAgentList.callGetAgentList())

    if (!reducerState.agentListFetching && id) {

        dispatch(actionsAgentList.callGetAgentListRequest())

        util.call<Models.AgentList, void>(
            util.urlAgentList.callGetAgentList(state, id,
                [{tag: Enums.CachePolicy.Default},{
                tag: util.getAgentListTagRequestString(reducerState.agentListContextMode),
                contextId: util.getAgentListContextRequestString(reducerState.agentListContextMode, reducerState)
            }]),

            (response: Response<Models.AgentList>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerAgentList
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                if (reducerState.agentListContextMode === Enums.AgentListContextMode.Activity ||
                    reducerState.agentListContextMode === Enums.AgentListContextMode.Scheduler ||
                    reducerState.agentListContextMode === Enums.AgentListContextMode.NewEditActivity) {

                    dispatch(actionsAgentList.callGetAgentSearchListSuccess(response))

                } else {

                    dispatch(actionsAgentList.callGetAgentListSuccess(response))

                    dispatch(thunkAgentList.performInputAgentList(response.data))
                }



            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerAgentList
                if (state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged.id != operationId) return

                dispatch(actionsAgentList.callGetAgentListFailure(error))


            },

            Converters.RESPONSE_AGENT_LIST_CALL_GET_AGENT_LIST_TO_AGENT_LIST,

            'GET'
        )
    }
}


/*
 * Thunk dispatched by "AgentList" screen. Thunk used to remove agent from list.
 */
export const performAgentDelete = (agent: Models.Agent) => (dispatch: Function): void => {


    dispatch(actionsAgentList.performAgentDelete(agent))


}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to open delete panel of agent from list.
 */
export const performOpenAgentDeletePanel = (agent: Models.Agent) => (dispatch: Function): void => {
  

    dispatch(actionsAgentList.performOpenAgentDeletePanel(agent));

}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to close delete panel of agent from list.
 */
export const performCloseAgentDeletePanel = (agent: Models.Agent) => (dispatch: Function): void => {

    dispatch(actionsAgentList.performCloseAgentDeletePanel(agent));

}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to show principal picker screen.
 */
export const navigateToPrincipalPickerScreen = () => (dispatch: Function,): void => {
  
    dispatch(SplitPanelActions.pushContent(Enums.NavigationContentAgentList.AgentListPrincipalPicker,
        util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen)))


    dispatch(actionsAgentList.navigateToPrincipalPickerScreen())

}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to set agent list principal.
 */
export const performAgentListPrincipal = (agentId: string, isPrincipal: boolean,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performAgentListPrincipal(agentId, isPrincipal,))

    state = getState()

    dispatch(thunkAgentList.navigateBack());

}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent search screen.
 */
export const navigateToAgentSearchScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    if (reducerState.agentListContextMode == Enums.AgentListContextMode.Customer) {

        dispatch(thunkAgentList.performPopoverAddHide())

    }

    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMAgentList.AgentSearch,
        util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen)))

    dispatch(actionsAgentList.navigateToAgentSearchScreen())
}


/*
 * Thunk dispatched by "AgentList" screen. Thunk dispatched on agent search input changed.
 */
export const performInputAgentSearch = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performInputAgentSearch(value))

    if (reducerState.agentListContextMode == Enums.AgentListContextMode.Activity ||
        reducerState.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
        reducerState.agentListContextMode == Enums.AgentListContextMode.NewEditActivity) {

        dispatch(actionsAgentList.callGetAgentSearchList())

    }
}


export const parseInputString = (inputString: string): Models.AgentSearchListRequestPerson | null => {

    const parts: string[] = inputString.split(/\s+/).map( (element) => element.indexOf('*') === -1 ? element+'*' : element)
    if ( !parts || parts.length === 0) {
        return null
    }
    if ( parts && parts.length === 1) {
        return {lastName: parts[0], firstName: '*', middleName: '*'}
    }
    if ( parts && parts.length === 2) {
        return {lastName: parts[0], firstName: parts[1], middleName: '*'}
    }

    return {lastName: parts[0], firstName: parts[1], middleName: parts[2] }

}
/*
 * Thunk dispatched by "AgentList" screen. Fetch current customer agent search list.
 */
export const callGetAgentSearchList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList
    const reducerStateMode = reducerState.agentListContextMode

    if (reducerState.agentSearchListFetching) {
        return
    }

    dispatch(actionsAgentList.callGetAgentSearchList())

    if (reducerState.agentListContextMode == Enums.AgentListContextMode.Activity ||
        reducerState.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
        reducerState.agentListContextMode == Enums.AgentListContextMode.NewEditActivity) {

            return
    }

    const personSearchType = parseInputString(reducerState.inputAgentSearch)

    if (!reducerState.agentSearchListFetching && personSearchType) {

        dispatch(actionsAgentList.callGetAgentSearchListRequest())

        util.call<Models.AgentList, Models.AgentSearchListRequest>(
                util.urlAgentList.callGetAgentSearchList(state, reducerState, [
                    {tag: Enums.CachePolicy.Disabled}
                ]),

                (response: Response<Models.AgentList>) => {
                    state = getState()
                    reducerState = state.user.mrmkmcibCRM.reducerAgentList


                    dispatch(actionsAgentList.callGetAgentSearchListSuccess(response))


                },

                (error: Error) => {
                    state = getState()
                    reducerState = state.user.mrmkmcibCRM.reducerAgentList
                    //if (reducerState.currentCustomerManaged.id + reducerState.currentDeal.id + reducerState.currentActivity.id != operationId) return

                    dispatch(actionsAgentList.callGetAgentSearchListFailure(error))

                    dispatch(thunkAgentList.performChangeDisplayAgentListErrorModalWindow(true))

                },

                Converters.RESPONSE_AGENT_LIST_CALL_GET_AGENT_SEARCH_LIST_TO_AGENT_LIST,

                'POST',
                {'Content-type': 'application/json; charset=UTF-8', 'operUuid': reducerState.operationUuid},

                Converters.REQUEST_AGENT_LIST_CALL_GET_AGENT_SEARCH_LIST_FROM_AGENT_SEARCH_LIST_REQUEST,

                {agent: {personType: personSearchType }, page: 0}
        )
    }

}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to select agent from search list.
 */
export const performAgentSearchListSelect = (agent: Models.Agent) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    switch (reducerState.agentListContextMode) {
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.NewEditActivity:
        case Enums.AgentListContextMode.Activity: {

            dispatch(thunkAgentList.performUpdateAgentList(agent))

            dispatch(actionsAgentList.performEdit())

            dispatch(thunkAgentList.navigateBack())

            dispatch(actionsAgentList.performInputAgentSearch(""))
            break;
        }
        default: {

            dispatch(actionsAgentList.performAgentSearchListSelect(agent))

            dispatch(thunkAgentList.navigateToAgentPositionListScreen())
        }
    }
}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to show agent role picker screen.
 */
export const navigateToAgentPositionListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList


    dispatch(actionsAgentList.navigateToAgentPositionListScreen())

    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMAgentList.AgentPositionSelect,
        util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen)))

}
/*
 * Thunk dispatched by "AgentList" screen. Thunk used to search position of new agent.
 */
export const performInputAgentJobPosition = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList


    dispatch(actionsAgentList.performInputAgentJobPosition(value))


}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to set position new agent.
 */
export const performSelectAgentJobPosition = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performSelectAgentJobPosition(value))


    let newAgent = reducerState.inputAgentSearchSelected
    if (reducerState.agentListMode != Enums.AgentListMode.Edit){
        dispatch(thunkAgentList.performEdit())
    }
    state = getState()
    reducerState = {...state.user.mrmkmcibCRM.reducerAgentList}

    let relationType = reducerState.inputAgentRole

    let jobPosition = reducerState.selectedAgentJobPosition

    let customer = {...defaultValues.CustomerManaged,...reducerState.currentCustomerManaged}

    dispatch(actionsAgentList.performInputAgentSearch(""))

    dispatch(thunkAgentList.performUpdateAgentList({...newAgent, customerPositionList: {data: [
        {   customerId: customer.id,
            customerRelations: relationType || defaultValues.Classifier,
            position: jobPosition,
            company: customer.name || customer.shortName,
            legalFormClassifier: customer.legalForm,
            organizationType: customer.organizationType}
    ]}}))

    dispatch(actionsAgentList.performSelectAgentJobPosition(""))
    
    dispatch(SplitPanelActions.pushContent(Enums.NavigationAppCRMAgentList.AgentList,
        util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen)))
      
}


/*
 * Internal thunk used in "AgentList" container. Thunk used to add or update agent.
 */
export const performUpdateAgentList = (agent: Models.Agent, agentMode: Enums.AgentMode = Enums.AgentMode.None) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList.inputAgentList

    let agentList: Models.Agent[] = []

    switch (agentMode) {
        case Enums.AgentMode.Create: {

            agentList = [...reducerState.data, agent]
            break;
        }
        default: {
            agentList = [...reducerState.data.filter((agentState: Models.Agent): boolean => agentState.id != agent.id), agent]
            break;
        }
    }

    dispatch(actionsAgentList.performUpdateAgentList({data: [...agentList]}))


}
export const performCancelSearchAgent = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performCancelSearchAgent())

    if ((reducerState.agentListContextMode == Enums.AgentListContextMode.Scheduler ||
        reducerState.agentListContextMode == Enums.AgentListContextMode.Activity   ||
        reducerState.agentListContextMode == Enums.AgentListContextMode.NewEditActivity) &&
        Array.isArray(reducerState.inputAgentList.data) && reducerState.inputAgentList.data.length == 0) {

        dispatch(thunkAgentList.performCloseAgentListScreen())

    } if(   reducerState.agentListContextMode == Enums.AgentListContextMode.NewDeal ||
            reducerState.agentListContextMode == Enums.AgentListContextMode.EditDeal){
        dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)))
    } else {

        dispatch(thunkAgentList.navigateBack())

    }



}
/*
 * Thunk dispatched by "AgentList" screen. Thunk chain used to show popover.
 */
export const performMenuAgentAddShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performMenuAgentAddShow())

}

/*
 * Thunk dispatched by "AgentList" screen. Thunk chain used to hide popover.
 */
export const performMenuAgentAddHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList


    dispatch(actionsAgentList.performMenuAgentAddHide())

}
export const callCustomerAgentListUpdateRequest = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    let currentCustomer = state.user.mrmkmcibCRM.reducerAgentList.currentCustomerManaged || defaultValues.CustomerManaged

    let operationId = currentCustomer.id || util.getRandomOperationUuid()

    console.log(" STAS =>", reducerState.agentListSaveInProgress)
    if (reducerState.agentListSaveInProgress){
        return
    }

    dispatch(actionsAgentList.performSaveExecute())

    util.call<Models.ResponsePostPutRequest, Models.DataForCustomerAgentListUpdateRequest>(
        util.urlCustomerEditor.callPutCustomerUpdate(state, {...defaultValues.CustomerManaged, ...currentCustomer},
            [{tag: Enums.CachePolicy.Disabled}]),

        (response: Response<Models.ResponsePostPutRequest>) => {
            state = getState()
            reducerState = state.user.mrmkmcibCRM.reducerAgentList

            if (currentCustomer.id != operationId) return

            dispatch(thunkAgentList.performSaveSuccess(null))


        },

        (error: Error) => {
            // console.log('callPutCustomerUpdate - failure')
            state = getState()
            let currentCustomer = state.user.mrmkmcibCRM.reducerAgentList.currentCustomerManaged || defaultValues.CustomerManaged

            if (currentCustomer.id != operationId) return

            dispatch(thunkAgentList.performSaveFailure(error))

            dispatch(thunkAgentList.performChangeDisplayAgentListErrorModalWindow(true))

        },

        Converters.RESPONSE_CUSTOMER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST,

        'PUT',
        {'Content-type': 'application/json; charset=UTF-8', 'operuid': reducerState.operationUuid},

        Converters.REQUEST_CUSTOMER_CALL_PUT_CUSTOMER_AGENT_LIST_UPDATE_REQUEST,
        {
            id: currentCustomer && currentCustomer.id || "",
            name: currentCustomer ? currentCustomer.name || currentCustomer.shortName : '',
            modId: currentCustomer && currentCustomer.modId || 0,
            agentList: reducerState.inputAgentList,
        }
    )

}

export const callPutDealAgentListUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.callPutDealAgentListUpdate())

        util.call<boolean, Models.IDealAgentListUpdateRequest>(
            util.urlAgentList.callPutDealAgentListUpdate(
                state,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<boolean>) => {
                dispatch(thunkAgentList.callGetDealRefresh())
            },

            (error: Error) => {
                dispatch(thunkAgentList.performSaveFailure(error))
            },

            Converters.RESPONSE_CALL_PUT_DEAL_AGENT_LIST_UPDATE_TO_BOOLEAN,

            'PUT',

            {
                'Content-type': 'application/json; charset=UTF-8',
                'operUid': reducerState.operationUuid
            },

            Converters.REQUEST_CALL_PUT_DEAL_AGENT_LIST_UPDATE_FROM_CALL_PUT_DEAL_AGENT_LIST_REQUEST,

            {
                currentDeal: reducerState.currentDeal || defaultValues.Deal,
                agentList: reducerState.inputAgentList,
                operationUuid: reducerState.operationUuid,
                accountId: reducerState.currentCustomerManaged && reducerState.currentCustomerManaged.id ? reducerState.currentCustomerManaged.id : ''
            }
        )

}

export const callGetDealRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.callGetDealRefresh())

    util.call<Models.Deal, void>(
        util.urlAgentList.callGetDealRefresh(state, reducerState,
            [
                {tag: Enums.CachePolicy.Disabled},
            ]
        ),

        (response: Response<Models.Deal>) => {
            dispatch(thunkAgentList.performSaveSuccess(response.data))
        },

        (error: Error) => {
            dispatch(thunkAgentList.performSaveFailure(error))
        },

        Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(
            state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod,
            state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
            state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
            state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged),

        'GET'
    )
}

/*
 * Thunk dispatched by "AgentList" screen. Thunk used to confirm changes.
 */
export const performSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList


    if (reducerState.hasChangedAgentList === false){

        dispatch(actionsAgentList.performSave())
        return
    }
    if (reducerState.agentListSaveError){
        dispatch(thunkAgentList.performChangeDisplayAgentListErrorModalWindow(false))
    }
    
    switch  (reducerState.agentListContextMode) {
        case Enums.AgentListContextMode.Customer:{
           
            dispatch(callCustomerAgentListUpdateRequest())

            break;
        }
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal:{

            dispatch(thunkDealEditor.performSaveAgentList(reducerState.inputAgentList))
            dispatch(actionsAgentList.performSave())
            break;
        }
        case Enums.AgentListContextMode.Deal:{
            dispatch(actionsAgentList.performSave())
            dispatch(actionsAgentList.performSaveExecute())
            dispatch(thunkAgentList.callPutDealAgentListUpdate())
            break;
        }
        default: {
            dispatch(actionsAgentList.performSave())
        }
    }
    // switch  (reducerState.agentListContextMode) {
    //     case Enums.AgentListContextMode.Activity:{
    //
    //
    //
    //         break;
    //     }
    //     default: {
    //         if (reducerState.agentListSaveInProgress) {
    //             return
    //         }
    //
    //
    //         dispatch(actionsAgentList.performSave())
    //
    //         dispatch(thunkAgentList.navigateBack())
    //
    //         // dispatch(SplitPanelActions.popContent(util.getNavigationAgentListString(Enums.NavigationAppCRMAgentList.AppCRM_AgentList)))
    //         // Dispatch thunk "performAgentListRefresh" synchronously.
    //         dispatch(thunkAgentList.performAgentListRefresh(reducerState.currentActivity,
    //             reducerState.currentDeal,
    //             reducerState.currentCustomerManaged,
    //             reducerState.agentListContextMode))
    //
    //         if (!reducerState.agentListSaveInProgress) {
    //             dispatch(actionsAgentList.performSaveExecute())
    //
    //
    //             // Dispatch thunk "callGetCustomerModifierId" synchronously.
    //             state = getState()
    //             reducerState = state.user.mrmkmcibCRM.reducerAgentList
    //
    //             if (reducerState.agentListContextMode == Enums.AgentListContextMode.CustomerManaged) {
    //                 dispatch(thunkAgentList.callGetCustomerModifierId())
    //             }
    //
    //             // Dispatch thunk "performSaveSuccess" synchronously.
    //             state = getState()
    //             reducerState = state.user.mrmkmcibCRM.reducerAgentList
    //
    //             if (reducerState.agentListContextMode == Enums.AgentListContextMode.Activity) {
    //                 dispatch(thunkAgentList.performSaveSuccess(true))
    //             }
    //
    //
    //             /* TODO Perform JS Promise and handle success and failure or dispatch performSaveSuccess and performSaveFailure later in thunk chain.
    //
    //              // Success thunk chain resolve.
    //              dispatch(thunkAgentList.performSaveSuccess(null))
    //
    //              // Failure thunk chain resolve.
    //              dispatch(thunkAgentList.performSaveFailure(null)) */
    //
    //
    //         }
    //     }
    // }

}

export const performSaveSuccess = (dealResponse: Models.Deal | null) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    switch (reducerState.agentListContextMode) {
        case  Enums.AgentListContextMode.Customer: {
            dispatch(performFlush())
            dispatch(actionsAgentList.performSaveSuccess(true, null))
            break
        }
        case Enums.AgentListContextMode.Deal: {
            dispatch(actionsAgentList.performSaveSuccess(true, dealResponse))
            break
        }
    }

    dispatch(actionsAgentList.performSave())
}

export const performSaveFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performSaveFailure(error))


}


/*
 * Thunk dispatched by "AgentList" screen. Thunk used to enter editor mode.
 */
export const performEdit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList


    dispatch(actionsAgentList.performEdit())


}
/*
 * Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
 */
export const performPopoverAddHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsAgentList.performPopoverAddHide())
}
/*
 * Thunk dispatched by "MemberList" screen. Thunk used to hide show menu.
 */
export const performPopoverAddShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsAgentList.performPopoverAddShow())
}
/*
 * Thunk dispatched by "AgentList" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performCancel())

    // Dispatch thunk "performAgentListRefresh" synchronously. 

    if (reducerState.hasChangedAgentList == false) {
        dispatch(thunkAgentList.navigateBack())
    }
}

/*
 * Thunk dispatched by "AgentList" screen. 
 */
export const navigateBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList


    dispatch (SplitPanelActions.popContent (util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentListScreen)))

    dispatch ( actionsAgentList.navigateBack () )


}
/*
 * Thunk dispatched by "Deal" screen.
 */
export const performCloseAgentListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    switch (reducerState.agentListContextMode) {
        case  Enums.AgentListContextMode.Customer: {

            dispatch(thunkCustomer.performReturnToCustomerScreen(util.getNavigationString(Enums.Navigation.AppCRM)))

            break
        }
        case Enums.AgentListContextMode.Deal: {
            if(reducerState.isEditedDeal){
                dispatch(thunkDeal.performRefreshForce())
            }
            dispatch(thunkDeal.performCloseDealAgentListScreen())

            break
        }
        case Enums.AgentListContextMode.NewDeal:
        case Enums.AgentListContextMode.EditDeal:{
            dispatch(SplitPanelActions.popContent(util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)))

            break
        }
        case Enums.AgentListContextMode.Scheduler:
        case Enums.AgentListContextMode.Activity:
        case Enums.AgentListContextMode.NewEditActivity: {

            dispatch(swapContextAgentListToActivity(reducerState.inputAgentList, reducerState.hasChangedAgentList))

            break
        }
    }

    dispatch(actionsAgentList.performCloseAgentListScreen())

}
export const performChangeDisplayAgentListErrorModalWindow = (status: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    dispatch(actionsAgentList.performChangeDisplayAgentListErrorModalWindow(status))
}

/*
 * Thunk dispatched by "AgentList" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(actionsAgentList.performContainerReset())

}
export const performOpenAgentScreen = (agent: Models.Agent, agentMode: Enums.AgentMode, agentContextMode: Enums.AgentContextMode) => (dispatch: Function, getState: () => ModelState.IRootState): void => {

    let state = getState()

    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(thunkAgent.performOpenAgentScreen(agent,
        {...defaultValues.CustomerManaged,...reducerState.currentCustomerManaged},
        agentMode,
        agentContextMode))
        
    switch (agentContextMode){
        case Enums.AgentContextMode.Activity: { // activity is opened from customer, deal

            if (reducerState.currentCustomerManaged && reducerState.currentCustomerManaged.id) {
                dispatch(HistoryMobileApp.pushContent({
                    splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
                    index: Enums.NavigationContentAppCrm.AppCRM_Agent,
                    type: EnumsApp.HistoryMobileAppType.Agent,
                    data: {...defaultValues.HistoryMobileAppData, agent:
                        {data: agent,
                            customer: reducerState.currentCustomerManaged || defaultValues.Customer,
                            contextMode: agentContextMode}
                    }
                }))
            } else {
                dispatch(HistoryMobileApp.pushContent({
                    splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
                    index: Enums.NavigationContentAppCrm.AppCRM_Agent,
                    type: EnumsApp.HistoryMobileAppType.Deal,
                    data: {...defaultValues.HistoryMobileAppData, deal: reducerState.currentDeal}
                }))
            }
            break;
        }
        case Enums.AgentContextMode.Customer:{

            dispatch(thunkAgentList.performPopoverAddHide())

            dispatch(HistoryMobileApp.pushContent({
                splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
                index: Enums.NavigationContentAppCrm.AppCRM_Agent,
                type: EnumsApp.HistoryMobileAppType.AgentList,
                data: {...defaultValues.HistoryMobileAppData, agentList:
                        {data: reducerState.inputAgentList,
                         customer: reducerState.currentCustomerManaged || defaultValues.Customer,
                         contextMode: reducerState.agentListContextMode,
                         accessLevel: reducerState.agentListAccessLevel}
                    }
            }))
            break;
        }
        case Enums.AgentContextMode.Scheduler: { // activity is opened from scheduler

            dispatch(navigateToActivityAgentScreen())

            break;
        }
        case Enums.AgentContextMode.Deal: {
            if (reducerState.currentDeal) {
                dispatch(HistoryMobileApp.pushContent({
                    splitPanelName: util.getNavigationString(Enums.Navigation.AppCRM),
                    index: Enums.NavigationContentAppCrm.AppCRM_Agent,
                    type: EnumsApp.HistoryMobileAppType.AgentList,
                    data: {...defaultValues.HistoryMobileAppData, agentList:
                        {data: reducerState.inputAgentList,
                         deal: reducerState.currentDeal || defaultValues.Deal,
                         contextMode: reducerState.agentListContextMode,
                         accessLevel: reducerState.agentListAccessLevel}
                    }
                }))
            }
            break;
        }
    }


}

export const performInit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerAgentList

    dispatch(navigationExecutor(EnumsApp.NavigationStep.Agent_ListScreenMounted))

}