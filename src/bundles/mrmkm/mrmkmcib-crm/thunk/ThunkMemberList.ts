/*
 * Created by Burnaev M.U.
 */

import * as ModelState from "../models/Models"
import {Models as ModelsApp, showAlert, supParamNames} from "mrmkmcib-app"
import {Models} from "mrmkmcib-crm"
import {Models as ModelsScheduler, performReturnToActivityScreen, swapContextMemberList, EnumsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import Response from "../models/Response"
import Error from "../models/Error"

import * as Converters from "../models/Converters"

import * as util from '../common/Util'

import * as actionsMemberList from '../actions/ActionsMemberList'
import * as thunkEmployee from '../thunk/ThunkEmployee'
import * as thunkMemberList from '../thunk/ThunkMemberList'
import * as thunkCustomer from '../thunk/ThunkCustomer'
import * as thunkAgentList from '../thunk/ThunkAgentList'
import * as thunkGszActivityExclude from '../thunk/ThunkGszActivityExclude'
import * as thunkDeal from '../thunk/ThunkDeal'
import * as thunkDealEditor from '../thunk/ThunkDealEditor'
import * as thunkAgent from '../thunk/ThunkAgent'
import * as thunkCustomerActivityExclude from '../thunk/ThunkCustomerActivityExclude'
import * as thunkCustomerActivityInclude from '../thunk/ThunkCustomerActivityInclude'
import * as thunkDealStage from  '../thunk/ThunkDealStages'

import * as thunkGszActivityInclude from '../thunk/ThunkGszActivityInclude'
import {SplitPanelActions} from 'ufs-mobile-platform'


/*
 * Thunk dispatched by "MemberList" screen. Refresh current member list.
 */
export const performMemberListRefresh = (currentActivity: ModelsScheduler.Activity, currentDeal: Models.Deal, currentCustomerManaged: Models.CustomerManaged,
    currentGsz: Models.Gsz, currentAgent: Models.Agent, isExpandedMode: boolean, currentMode: Enums.MemberListMode, inputEmployeeSource?: Enums.MemberListEmployeeSource) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performMemberListRefresh(currentActivity, currentDeal, currentCustomerManaged, currentGsz, currentAgent, isExpandedMode, currentMode, inputEmployeeSource || Enums.MemberListEmployeeSource.Employee))

    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.CustomerManaged) {
        dispatch(thunkMemberList.swapContext(reducerState.currentCustomerManaged.memberList))
    }

    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.Deal) {
        dispatch(actionsMemberList.performSetEditorEnabled(reducerState.isEditingMemberList))
        dispatch(thunkMemberList.swapContext(reducerState.currentDeal.memberList))
        const isEditorEnabled = reducerState.memberList.data.find((item: ModelsApp.Employee)=>{
            return (item.id == state.user.mrmkmcibCRM.reducerAppCRM.currentUser.id) && item.isGeneral
        })
        dispatch(actionsMemberList.performSetEditorEnabled(!!isEditorEnabled))
    }
    if (reducerState.currentMode ==  Enums.MemberListMode.DealEditor) {
        dispatch(actionsMemberList.performSetEditorEnabled(reducerState.isEditingMemberList))
        dispatch(thunkMemberList.swapContext(reducerState.currentDeal.memberList))
        dispatch(thunkMemberList.performSetEditorEnabled(true))
    }
    if(
        reducerState.currentMode ==  Enums.MemberListMode.DealStageMainClientManager ||
        reducerState.currentMode ==  Enums.MemberListMode.DealStageMainCreditOfficer ||
        reducerState.currentMode ==  Enums.MemberListMode.DealStageMemberMonitoring
    ){
        dispatch(actionsMemberList.performSetEditorEnabled(reducerState.isEditingMemberList))
        dispatch(thunkMemberList.swapContext(reducerState.currentDeal.memberList))
        dispatch(thunkMemberList.performSetEditorEnabled(true))
        dispatch(thunkMemberList.performInputEmployeeSource(reducerState.inputEmployeeSource))
    }

    if (reducerState.currentMode ==  Enums.MemberListMode.CustomerActivityRemoveOrganization) {
        dispatch(thunkMemberList.swapContext(reducerState.currentActivity.memberList))
        dispatch(actionsMemberList.performSetEditorEnabled(true))
    }
    if (reducerState.currentMode ==  Enums.MemberListMode.CustomerActivityAddOrganization) {
        dispatch(thunkMemberList.swapContext(reducerState.currentActivity.memberList))
        dispatch(thunkMemberList.performSetEditorEnabled(true))
    }
    if (reducerState.currentMode ==  Enums.MemberListMode.CustomerActivityAddGSZ) {
        dispatch(thunkMemberList.swapContext(reducerState.currentActivity.memberList))
        dispatch(actionsMemberList.performSetEditorEnabled(true))
    }
    if (reducerState.currentMode ==  Enums.MemberListMode.CustomerActivityRemoveGSZ) {
        dispatch(thunkMemberList.swapContext(reducerState.currentActivity.memberList))
        dispatch(actionsMemberList.performSetEditorEnabled(true))
    }
    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.Activity) {
        dispatch(thunkMemberList.swapContext(reducerState.currentActivity.memberList))
        dispatch(actionsMemberList.performSetEditorEnabled(!(reducerState.currentActivity.status && reducerState.currentActivity.status.code === 'Done')))
    }
    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.Agent) {
        dispatch(thunkMemberList.swapContext(reducerState.currentAgent.memberList))
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerMemberList
        const isEditorEnabled = reducerState.memberList.data.find((item: ModelsApp.Employee)=>{
            return item.id == state.user.mrmkmcibCRM.reducerAppCRM.currentUser.id && item.isGeneral
        })
        dispatch(actionsMemberList.performSetEditorEnabled(isEditorEnabled != null))
    }
    if (reducerState.currentMode == Enums.MemberListMode.CustomerManaged) {
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerMemberList
        const isEditorEnabled = reducerState.memberList.data.find((item: ModelsApp.Employee)=>{
            return item.id == state.user.mrmkmcibCRM.reducerAppCRM.currentUser.id && item.isGeneral
        })
        dispatch(actionsMemberList.performSetEditorEnabled(isEditorEnabled != null))
    }
    // Dispatch thunk "navigateToMemberListScreen" synchronously.




}

export const setEditingPermissionMemberList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerDeal

    let isEditingMemberList = reducerState.isEditDealEnable && reducerState.currentDeal.isEditable

    dispatch(actionsMemberList.setEditingPermissionMemberList(isEditingMemberList))
}

export const navigateBackFromMembersSearchPage = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if(reducerState.isDealCardOwner == false){
        dispatch(thunkMemberList.performSetDealCardOwner(true))
    }
    if( reducerState.currentMode == Enums.MemberListMode.DealStageMemberMonitoring ||
        reducerState.currentMode == Enums.MemberListMode.DealStageMainCreditOfficer ||
        reducerState.currentMode == Enums.MemberListMode.DealStageMainClientManager
    ){
        dispatch ( SplitPanelActions.popContent ( util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealStage) ) )
    } else {
        dispatch(thunkMemberList.navigateBack())
    }
    dispatch(actionsMemberList.navigateBackFromMembersSearchPage())
}

export const navigateSearchMemberListScreenBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.navigateSearchMemberListScreenBack())
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    switch(reducerState.currentMode){
        case Enums.MemberListMode.Activity: {
            dispatch(thunkMemberList.swapContextMemberListToActivity(reducerState.memberList))
            break;
        }
        default:{
            dispatch(thunkMemberList.navigateBack())
            break;
        }
    }
}

/*
 * Internal thunk used in "MemberList" container. Thunk chain dispatched to set context parameters.
 */
export const swapContext = (memberList: Models.MemberList,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.swapContext(memberList,))


}

export const performSetEditorEnabled = (isEnabled:boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performSetEditorEnabled(isEnabled))
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to enter editor mode.
 */
export const performEdit = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performEdit())


}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to cancel changes.
 */
export const performCancel = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(thunkMemberList.performCancelSaveMemberListError())
    dispatch(actionsMemberList.performCancel())


    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.CustomerManaged) {
        dispatch(thunkMemberList.swapContext(reducerState.currentCustomerManaged.memberList))
    }

    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.Deal || reducerState.currentMode ==  Enums.MemberListMode.DealEditor) {
        dispatch(thunkMemberList.swapContext(reducerState.currentDeal.memberList))
    }

    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.Activity) {
        dispatch(thunkMemberList.swapContext(reducerState.currentActivity.memberList))
    }
    // Dispatch thunk "swapContext" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.currentMode == Enums.MemberListMode.Agent) {
        dispatch(thunkMemberList.swapContext(reducerState.currentAgent.memberList))
    }
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to show add menu.
 */
export const performPopoverAddShow = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performPopoverAddShow())


}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
 */
export const performPopoverAddHide = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performPopoverAddHide())


}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to navigate to remote search team member screen
 */
export const navigateToMemberSearchScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(SplitPanelActions.pushContent(
        Enums.MemberList.AppCRM_MemberList_Search,
        util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_Search))
    )


    dispatch(actionsMemberList.navigateToMemberSearchScreen())


}
/*
 * Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
 */
export const navigateToMemberSearchLocalScreen = (employeeSource: Enums.MemberListEmployeeSource, isSelectEmployeeLocalSearch: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(actionsMemberList.performSetSelectEmployeeLocalSearch(employeeSource, isSelectEmployeeLocalSearch))
    dispatch(SplitPanelActions.pushContent(
        Enums.MemberList.AppCRM_MemberList_Search_Local,
        util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_Search))
    )


    dispatch(actionsMemberList.navigateToMemberSearchLocalScreen())


}

export const navigateMemberListScreenBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    switch(reducerState.currentMode){
        case Enums.MemberListMode.Activity : {
            dispatch(swapContextMemberListToActivity(reducerState.memberList))
            break;
        }
        case Enums.MemberListMode.DealEditor:{
            dispatch(thunkDealEditor.navigateBack())
            break;
        }
        case Enums.MemberListMode.Deal: {
            if(reducerState.isMemberListEdited){
                dispatch(thunkDeal.performRefreshDealAfterMemberListUpdate())
            }
            dispatch(thunkDeal.navigateDealBack())
            break;
        }
        case Enums.MemberListMode.CustomerManaged: {
            dispatch(thunkCustomer.navigateBack())
        }
        case Enums.MemberListMode.CustomerActivityAddGSZ:
        case Enums.MemberListMode.CustomerActivityRemoveGSZ:
        case Enums.MemberListMode.Gsz: {
            dispatch(navigateGszActivityIncludeExcludeBack())
            break;
        }
        case Enums.MemberListMode.Agent: {
            dispatch(thunkAgent.navigateBack())
            break;
        }
        case Enums.MemberListMode.CustomerActivityAddOrganization: {
            dispatch(thunkCustomerActivityExclude.swapMemberList())
            break;
        }
        case Enums.MemberListMode.CustomerActivityRemoveOrganization: {
            dispatch(thunkCustomerActivityInclude.swapMemberList())
            break;
        }
        default:{
            dispatch(thunkMemberList.navigateBack())
            break;
        }
    }
    dispatch(actionsMemberList.navigateMemberListScreenBack())
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
 */
export const performInputMemberSearch = (value: string) => (dispatch: Function): void => {
    dispatch(actionsMemberList.performInputMemberSearch(value))
}

export const performSearch = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if(reducerState.inputMemberSearch.length > 2){
        dispatch(actionsMemberList.performSearch(true))
        dispatch(thunkMemberList.callGetMemberSearchList())
    } else {
        dispatch(actionsMemberList.performSearch(false))
    }

}

export const performResetMemberSearchList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performResetMemberSearchList())
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk dispatched on member local search input changed.
 */
export const performInputMemberSearchLocal = (value: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performInputMemberSearchLocal(value))


    // Dispatch thunk "callGetMemberSearchList" synchronously.
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    let lastInput = reducerState.inputMemberSearchLocal;
    if (lastInput == getState().user.mrmkmcibCRM.reducerMemberList.inputMemberSearchLocal) {
        dispatch(thunkMemberList.filterMemberSearchListLocal())
    }
}

const getEmployeeMode = (currentMode: Enums.MemberListMode) : Enums.EmployeeMode => {
    switch (currentMode) {
        case Enums.MemberListMode.CustomerManaged :{
            return Enums.EmployeeMode.CustomerManaged_MemberList
        }
        case Enums.MemberListMode.DealEditor:{
            return Enums.EmployeeMode.DealEditor_MemberList
        }
        case Enums.MemberListMode.Deal :{
            return Enums.EmployeeMode.Deal_MemberList
        }
        case Enums.MemberListMode.Activity :{
            return Enums.EmployeeMode.Activity_MemberList
        }
        case Enums.MemberListMode.Gsz :{
            return Enums.EmployeeMode.Gsz_MemberList
        }
        case Enums.MemberListMode.Agent :{
            return Enums.EmployeeMode.AgentMemberList
        }
        case Enums.MemberListMode.DealStageMainCreditOfficer :
        case Enums.MemberListMode.DealStageMemberMonitoring :
        case Enums.MemberListMode.DealStageMainClientManager :{
            return Enums.EmployeeMode.DealStages_CheckMainRoles
        }
        default : {
            return Enums.EmployeeMode.MemberList
        }
    }
}

export const filterMemberSearchListLocal = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    let lastInput = reducerState.inputMemberSearchLocal
    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    switch(reducerState.currentMode){
        default:{

            switch(reducerState.inputEmployeeSource){

                case Enums.MemberListEmployeeSource.CustomerManaged: {

                    if (lastInput && lastInput.trim().length > 0) {
                        const result = reducerCustomer.currentCustomerManaged.memberList.data.filter((item: ModelsApp.Employee) => {
                            return util.filterMemberList(
                                item.firstName,
                                item.lastName,
                                item.middleName,
                                item.positionName,
                                item.role.value,
                                item.isGeneral,
                                lastInput,
                            )
                        })
                        dispatch(actionsMemberList.filterInputMemberSearchLocal({data: result}))
                    } else {
                        dispatch(actionsMemberList.filterInputMemberSearchLocal({data: []}))
                    }
                    break
                }

                default: {
                    if (lastInput && lastInput.trim().length > 0) {
                        const result = reducerState.memberList.data.filter((item: ModelsApp.Employee) => {
                            return util.filterMemberList(
                                item.firstName,
                                item.lastName,
                                item.middleName,
                                item.positionName,
                                item.role.value,
                                item.isGeneral,
                                lastInput,
                            )
                        })
                        dispatch(actionsMemberList.filterInputMemberSearchLocal({data: result}))
                    } else {
                        dispatch(actionsMemberList.filterInputMemberSearchLocal({data: []}))
                    }
                    break
                }

            }

            break
        }
    }
}

/*
 * Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 */
export const callGetMemberSearchList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    if (reducerState.memberSearchListFetching) {
        return
    }

    dispatch(actionsMemberList.callGetMemberSearchList())

    const personSearchType = thunkAgentList.parseInputString(reducerState.inputMemberSearch)
    const isEmployeeRequest: boolean =  reducerState.currentMode == Enums.MemberListMode.Gsz ||
                                        reducerState.currentMode == Enums.MemberListMode.CustomerActivityAddGSZ ||
                                        reducerState.currentMode == Enums.MemberListMode.CustomerActivityRemoveGSZ ||
                                        reducerState.currentMode == Enums.MemberListMode.CustomerActivityAddOrganization ||
                                        reducerState.currentMode == Enums.MemberListMode.CustomerActivityRemoveOrganization ||
                                        reducerState.currentMode == Enums.MemberListMode.Activity ||
                                        reducerState.currentMode == Enums.MemberListMode.CustomerManaged ||
                                        reducerState.currentMode == Enums.MemberListMode.Deal ||
                                        reducerState.currentMode == Enums.MemberListMode.DealEditor ||
                                        reducerState.currentMode == Enums.MemberListMode.Agent ||
                                        reducerState.currentMode == Enums.MemberListMode.DealStageMainClientManager ||
                                        reducerState.currentMode == Enums.MemberListMode.DealStageMainCreditOfficer ||
                                        reducerState.currentMode == Enums.MemberListMode.DealStageMemberMonitoring
    const getUrl = isEmployeeRequest
        ?   util.urlMemberList.callGetMemberSearchList
        :   util.urlMemberList.callGetAgentSearchList

    if (!reducerState.memberSearchListFetching && personSearchType) {
        dispatch(actionsMemberList.callGetMemberSearchListRequest())

        util.call<Models.MemberList, Models.MemberSearchListRequest>(
            getUrl(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<Models.MemberList>) => {

                let existingPositionsList: Models.MemberList = {data:[]}

                switch (reducerState.currentMode){
                    case Enums.MemberListMode.Deal:
                    case Enums.MemberListMode.DealEditor:
                    case Enums.MemberListMode.DealStageMainClientManager:
                    case Enums.MemberListMode.DealStageMainCreditOfficer:
                    case Enums.MemberListMode.DealStageMemberMonitoring:{
                        existingPositionsList = reducerState.currentDeal.memberList
                        break
                    }
                }
                dispatch(actionsMemberList.callGetMemberSearchListSuccess(util.getFilteredExistingPositionsList(response.data,existingPositionsList),response.cachedDate))
            },

            (error: Error) => {

                dispatch(actionsMemberList.callGetMemberSearchListFailure(error))
            },

            isEmployeeRequest
                ?   Converters.RESPONSE_MEMBER_LIST_CALL_GET_MEMBER_SEARCH_LIST_EMPLOYEE_TO_MEMBER_LIST
                :   Converters.RESPONSE_MEMBER_LIST_CALL_GET_MEMBER_SEARCH_LIST_TO_MEMBER_LIST,

            'POST',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.REQUEST_MEMBER_LIST_CALL_GET_MEMBER_SEARCH_LIST_FROM_AGENT_SEARCH_LIST_REQUEST,

            {
                requestType:    isEmployeeRequest
                                ?   Enums.memberSearchType.Employee
                                :   Enums.memberSearchType.Agent,
                personSearchType: personSearchType
            }
        )
    }
}
/*
 * Thunk dispatched by "MemberList" screen. Thunk used to show member role picker screen.
 */
export const navigateToMemberRolePickerScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(SplitPanelActions.pushContent(
        Enums.MemberList.AppCRM_MemberList_SelectRole,
        util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_List)
    ))

    dispatch(actionsMemberList.navigateToMemberRolePickerScreen())
}
/*
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 */
export const performMemberSearchListSelect = (member: ModelsApp.Employee) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    let classifierDictionary = state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary
    if(reducerState.isProfile){
        dispatch(thunkMemberList.setInfoButtonFlag(false))
        return
    }
    let selectedMemeber = {...member}

    //TODO игнорировать ли  isGeneral при добавлении нового, ведь его isGeneral может иметь другую смысловую нагрузку?
    switch (reducerState.currentMode) {
        case Enums.MemberListMode.CustomerActivityAddOrganization:
        case Enums.MemberListMode.CustomerActivityAddGSZ:
        case Enums.MemberListMode.CustomerActivityRemoveGSZ:
        case Enums.MemberListMode.CustomerActivityRemoveOrganization:
        case Enums.MemberListMode.Activity: {
            if (Array.isArray(reducerState.memberList.data) && reducerState.memberList.data.length == 0 ) {
                selectedMemeber.isGeneral = true
                break;
            }
        }
        case Enums.MemberListMode.DealStageMainClientManager: {
            selectedMemeber.isGeneral = false
            selectedMemeber.role = classifierDictionary.SALES_TEAM_ROLE.data.find((element: ModelsApp.Classifier)=>{
                return element.code == 'Primary KM'
            }) || { code:'', value:'', name:'', parentId:''}
            dispatch(thunkDealStage.performInputMainClientManager(selectedMemeber))
            dispatch(thunkMemberList.performInputMemberSearch(''))
            break;
        }
        case Enums.MemberListMode.DealStageMainCreditOfficer: {
            selectedMemeber.isGeneral = false
            selectedMemeber.role = classifierDictionary.SALES_TEAM_ROLE.data.find((element: ModelsApp.Classifier)=>{
                return element.code == 'Primary Credit Spec'
            }) || { code:'', value:'', name:'', parentId:''}
            dispatch(thunkDealStage.performInputMainCreditOfficer(selectedMemeber))
            dispatch(thunkMemberList.performInputMemberSearch(''))
            break;
        }
        case Enums.MemberListMode.DealStageMemberMonitoring: {
            selectedMemeber.isGeneral = false
            selectedMemeber.role = classifierDictionary.SALES_TEAM_ROLE.data.find((element: ModelsApp.Classifier)=>{
                return element.code == 'Monitoring Member'
            }) || { code:'', value:'', name:'', parentId:''}
            dispatch(thunkDealStage.performInputMemberMonitoring(selectedMemeber))
            dispatch(thunkMemberList.performInputMemberSearch(''))
            break;
        }
        default: {
            selectedMemeber.isGeneral = false
        }
    }

    dispatch(actionsMemberList.performMemberSearchListSelect(selectedMemeber))


    // Dispatch thunk "navigateToMemberRolePickerScreen" synchronously.
    if( reducerState.currentMode !== Enums.MemberListMode.DealStageMainClientManager &&
        reducerState.currentMode !== Enums.MemberListMode.DealStageMainCreditOfficer &&
        reducerState.currentMode !== Enums.MemberListMode.DealStageMemberMonitoring
    ){
        dispatch(thunkMemberList.navigateToMemberRolePickerScreen())
    }

}

export const performSelectGeneralMember = (index: number) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performGeneralMemberSelect(index))
    dispatch(SplitPanelActions.popContent(
        util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_SelectRole)
    ))
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to navigate to general member picker screen
 */
export const navigateToSelectMemberIsGeneralScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.navigateToSelectMemberIsGeneralScreen())

    dispatch(SplitPanelActions.pushContent(
        Enums.MemberList.AppCRM_MemberList_Select_IsGeneral,
        util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_SelectRole)
    ))
}



export const getSupParameters = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    let param = state.user.mrmkmcibApp.reducerAuthorization.currentConfiguration

    if(param && param[supParamNames().UniversalSaleTeamRoles]){
        dispatch(actionsMemberList.getSupParameters(param[supParamNames().UniversalSaleTeamRoles]))
    } else {
        dispatch(actionsMemberList.getSupParameters(''))
    }
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 */
export const performMemberRoleSelect = (role: ModelsApp.Classifier,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    dispatch(thunkMemberList.setLocalSearchFlag(true))
    dispatch(thunkMemberList.getSupParameters())

    const defaultBehaviour = () => {
        // Dispatch thunk "navigateToMemberListScreen" synchronously.
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerMemberList
        dispatch(actionsMemberList.performMemberRoleSelect(role,))

        // К сожалению resetSplitPanel приводит к непредсказуемому результату - отображается не та страница, которую указывают и навигация назад переставет работать
        /*
        * Открываем команду сделки
        * Нажимаем ИЗМЕНИТЬ
        * Нажимаем на + и на Добавить из списка клиента
        * Выбираем сотрудника и выбираем его роль
        * При этом происходит заполнение стека экранов (0, 2, 3)
        * После выбора роли, происходит resetSplitPanel и pushContent с индексом 0
        * Навигация осуществляется на экран с индексом 2
        *
        * Есть много других кейсов (включая оборачивание в setTimeout) с resetSplitPanel, но как и прокомментировано выше resetSplitPanel приводит к непредсказуемому результату,        *
        * поэтому исключаем resetSplitPanel и делаем только pushContent первого экрана
        * при этом стек экранов постоянно увеличивается, но при уходе с данной навигационной области и последующем возврате
        * в неё, стек экранов обнуляется.
        *
        * */
      /*  state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerMemberList

        dispatch(SplitPanelActions.resetSplitPanel(util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_List)))
*/
        state = getState()
        reducerState = state.user.mrmkmcibCRM.reducerMemberList

        dispatch(SplitPanelActions.pushContent(
            Enums.MemberList.AppCRM_MemberList_List,
            util.getNavigationPopoverMembersString(Enums.MemberList.AppCRM_MemberList_List)

        ))

    }
    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    switch(reducerState.currentMode){
        case Enums.MemberListMode.CustomerManaged:
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.Deal: {
            if(reducerState.isDealCardOwner === false){
                dispatch(thunkMemberList.performSetDealCardOwner(true))
            }
            const inUnicRoleList = util.DealMemberListUniqueRoles.find((element) => element === role.value)
            const isRoleUnique = util.DealMemberListUniqueRolesCode(role.code, reducerState.supParameters)
            if( reducerState.currentDeal.requestTypeClassifier &&
                reducerState.currentDeal.requestTypeClassifier.code == 'KK' &&
                reducerState.memberList.data.some((element: ModelsApp.Employee): boolean => {
                    return element.role.code == role.code
                })
            ){
                dispatch(showAlert('В сделке уже присутствует специалист с данной ролью. Выберите только одного сотрудника для этой роли'))
                break;
            } else if(((inUnicRoleList) !== undefined) || isRoleUnique) {
                const isMemberWithRolePresent = reducerState.memberList.data.find((item: ModelsApp.Employee) => item.role && item.role.value === role.value)
                if(isMemberWithRolePresent && reducerState.inputMemberSearchSelected != null && isMemberWithRolePresent.id !== reducerState.inputMemberSearchSelected.id){
                    dispatch(showAlert('В сделке уже присутствует специалист с данной ролью. Выберите только одного сотрудника для этой роли'))
                    break;
                }
            }
            defaultBehaviour()
            break;
        }
        default: {
            defaultBehaviour()
            break;
        }
    }
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to show member list.
 */
export const navigateToMemberListScreen = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    if(reducerState.currentMode != Enums.MemberListMode.Deal){
        if(reducerState.currentMode != Enums.MemberListMode.DealEditor){
            dispatch ( SplitPanelActions.pushContent (
                Enums.MemberList.AppCRM_MemberList_List,
                util.getNavigationPopoverMembersString ( Enums.MemberList.AppCRM_MemberList_List )
            ) )
        }

    }


    dispatch(actionsMemberList.navigateToMemberListScreen())


}

/**
 * Вычисляет - нужно ли отправлять запрос на обновление команды или просто сохранить изменения в стэйт
 * для команды по задаче
 * @param {IRootState} state
 * @returns {boolean}
 */
const activityJustStoreInStateNecessary = (state: ModelState.IRootState) => (
    state.user.mrmkmcibScheduler.reducerActivity.activityMode === EnumsScheduler.ActivityMode.Create
)

/*
 * Thunk dispatched by "MemberList" screen. Thunk used to confirm changes in member list.
 */
export const performSave = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performSave())

    if (!reducerState.memberListSaveInProgress) {
        if(reducerState.currentMode == Enums.MemberListMode.Activity && !activityJustStoreInStateNecessary(state)){
            dispatch(actionsMemberList.performSaveExecute())
            dispatch(thunkMemberList.callPutActivityMemberListUpdate())
        }
        if(reducerState.currentMode == Enums.MemberListMode.Deal){
            dispatch(actionsMemberList.performSaveExecute())
            dispatch(thunkMemberList.callPutDealMemberListUpdate())
        }
        if(reducerState.currentMode == Enums.MemberListMode.DealEditor){
            dispatch(thunkDealEditor.performSaveMemberListInNewDeal(reducerState.memberList))
        }
        if(reducerState.currentMode == Enums.MemberListMode.Agent){
            dispatch(actionsMemberList.performSaveExecute())
            dispatch(thunkMemberList.callPutAgentMemberListUpdate())
        }
        //Сохранение запускать только в режиме карточки клиента
        if(reducerState.currentMode == Enums.MemberListMode.CustomerManaged){
            dispatch(actionsMemberList.performSaveExecute())

            // Dispatch thunk "callGetCustomerModifierId" synchronously.

            dispatch(thunkMemberList.callGetCustomerModifierId())
        }
    }

}

export const callPutActivityMemberListUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    if (reducerState.activityMemberListFetching) {
        return
    }
    dispatch(actionsMemberList.callPutActivityMemberList())

    if (!reducerState.activityMemberListFetching) {
        dispatch(actionsMemberList.callPutActivityMemberListRequest())

        util.call<boolean, Models.ActivityMemberListUpdateRequest>(
            util.urlMemberList.callPutActivityMemberListUpdate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                dispatch(actionsMemberList.callPutActivityMemberListSuccess(response))
                dispatch(thunkMemberList.performSaveActivityMemberList())
                dispatch(thunkMemberList.performCancel())
                dispatch(thunkMemberList.performSaveSuccess(true))
            },

            (error: Error) => {
                dispatch(actionsMemberList.callPutActivityMemberListFailure(error))
                dispatch(thunkMemberList.performSaveFailure(error))
            },

            Converters.RESPONSE_MEMBER_LIST_CALL_PUT_ACTIVITY_MEMBER_LIST_TO_BOOLEAN,

            'PUT',

            {
                'Content-type': 'application/json; charset=UTF-8'
            },

            Converters.REQUEST_MEMBER_LIST_CALL_PUT_ACTIVITY_MEMBER_LIST_FROM_ACTIVITY_MEMBER_LIST_REQUEST,

            {
                activity: reducerState.currentActivity,
                memberList: reducerState.memberList,
            }
        )
    }
}

export const performSaveActivityMemberList = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performSaveActivityMemberList())
}

/*
 * Thunk dispatched by "MemberList" screen. Fetch put request.
 */
export const callPutDealMemberListUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    if (reducerState.memberListUpdateFetching) {
        return
    }
    let operationId = reducerState.currentDeal.id


    dispatch(actionsMemberList.callPutMemberListUpdate())


    if (!reducerState.memberListUpdateFetching) {
        dispatch(actionsMemberList.callPutMemberListUpdateRequest())

        util.call<boolean, Models.DealMemberListUpdateRequest>(
            util.urlMemberList.callPutDealMemberListUpdate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentDeal.id != operationId) return

                dispatch(actionsMemberList.callPutMemberListUpdateSuccess(response))

                dispatch(thunkMemberList.callGetDealMemberListRefresh())
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentDeal.id != operationId) return

                dispatch(actionsMemberList.callPutMemberListUpdateFailure(error))


                // Dispatch thunk "performSaveFailure" on fetch failure.


                dispatch(thunkMemberList.performSaveFailure(error))


            },

            Converters.RESPONSE_MEMBER_LIST_CALL_PUT_DEAL_MEMBERL_LIST_UPDATE_TO_BOOLEAN,

            'PUT',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.REQUEST_MEMBER_LIST_CALL_PUT_DEAL_MEMBERL_LIST_UPDATE_FROM_DEAL_UPDATE_REQUEST,

            {
                accountId: reducerState.currentCustomerManaged.id,
                operationUuid: reducerState.operationUuid,
                currentDeal: reducerState.currentDeal,
                memberList: reducerState.memberList
            }
        )
    }
}

export const callGetDealMemberListRefresh = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    if (reducerState.currentDealMemberListFetching) {
        return
    }

    dispatch(actionsMemberList.callGetDealMemberListRefresh())


    if (!reducerState.currentDealMemberListFetching) {
        dispatch(actionsMemberList.callGetDealMemberListRefreshRequest())
        util.call<Models.Deal, void>(
            util.urlMemberList.callGetDealMemberListRefresh(state, reducerState,
                [
                    {tag: Enums.CachePolicy.Disabled},
                ]
            ),
            (response: Response<Models.Deal>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList

                dispatch(actionsMemberList.callGetDealMemberListRefreshSuccess(response))
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList

                dispatch(thunkMemberList.swapContext(reducerState.currentDeal.memberList))
                dispatch(thunkMemberList.performSaveSuccess(true))
            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                dispatch(actionsMemberList.callGetDealMemberListRefreshFailure(error))
                dispatch(thunkMemberList.performSaveFailure(error))
            },

            Converters.RESPONSE_DEAL_REFRESH_CALL_GET_DEAL_TO_DEAL(
                state.user.mrmkmcibCRM.reducerDealList.supParameters.DealSalesMethod,
                state.user.mrmkmcibCRM.reducerAppCRM.classifierDictionary,
                state.user.mrmkmcibCRM.reducerAppCRM.currentUser,
                state.user.mrmkmcibCRM.reducerCustomer.currentCustomerManaged),

            'GET'
        )
    }
}
/*
 * Thunk dispatched by "MemberList" screen. Fetch put request.
 */
export const callPutAgentMemberListUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    if (reducerState.memberListUpdateFetching) {
        return
    }
    let operationId = reducerState.currentDeal.id


    dispatch(actionsMemberList.callPutMemberListUpdate())


    if (!reducerState.memberListUpdateFetching) {
        dispatch(actionsMemberList.callPutMemberListUpdateRequest())

        util.call<boolean, Models.AgentMemberListUpdateRequest>(
            util.urlMemberList.callPutAgentMemberListUpdate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentDeal.id != operationId) return

                dispatch(actionsMemberList.callPutMemberListUpdateSuccess(response))

                // Dispatch thunk "performSaveSuccess" on fetch succeeded.

                dispatch(thunkMemberList.performSaveSuccess(true))

            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentDeal.id != operationId) return

                dispatch(actionsMemberList.callPutMemberListUpdateFailure(error))


                // Dispatch thunk "performSaveFailure" on fetch failure.

                dispatch(thunkMemberList.performSaveFailure(error))


            },

            Converters.RESPONSE_MEMBER_LIST_CALL_PUT_AGENT_MEMBERL_LIST_UPDATE_TO_BOOLEAN,

            'PUT',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.REQUEST_MEMBER_LIST_CALL_PUT_AGENT_MEMBERL_LIST_UPDATE_FROM_AGENT_UPDATE_REQUEST,

            {
                operationUuid: reducerState.operationUuid,
                currentAgent: reducerState.currentAgent,
                memberList: reducerState.memberList
            }
        )
    }
}


export const performSaveSuccess = (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    dispatch(actionsMemberList.performSaveSuccess(data))
    switch (reducerState.currentMode){
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.Deal: {
            dispatch(thunkDeal.performRefreshDealAfterMemberListUpdate())
            break;
        }
        case Enums.MemberListMode.Agent: {
			dispatch(thunkAgent.performGetUncachedAgent())
            dispatch(thunkAgent.performAgentCurrentModeRefresh())
            break;
        }
    }
}
/*
 * Thunk dispatched by "MemberList" screen. Fetch put request.
 */
export const callPutMemberListUpdate = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    if (reducerState.memberListUpdateFetching) {
        return
    }
    let operationId = reducerState.currentCustomerManaged.id


    dispatch(actionsMemberList.callPutMemberListUpdate())


    if (!reducerState.memberListUpdateFetching) {
        dispatch(actionsMemberList.callPutMemberListUpdateRequest())

        util.call<boolean, Models.MemberListUpdateRequest>(
            util.urlMemberList.callPutMemberListUpdate(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<boolean>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentCustomerManaged.id != operationId) return

                dispatch(actionsMemberList.callPutMemberListUpdateSuccess(response))


                // Dispatch thunk "performSaveSuccess" on fetch succeeded.


                dispatch(actionsMemberList.performSaveSuccess(true))


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentCustomerManaged.id != operationId) return

                dispatch(actionsMemberList.callPutMemberListUpdateFailure(error))


                // Dispatch thunk "performSaveFailure" on fetch failure.


                dispatch(thunkMemberList.performSaveFailure(error))


            },

            Converters.RESPONSE_MEMBER_LIST_CALL_PUT_CUSTOMER_UPDATE_TO_BOOLEAN,

            'PUT',
            {'Content-type': 'application/json; charset=UTF-8'},

            Converters.REQUEST_MEMBER_LIST_CALL_PUT_CUSTOMER_UPDATE_FROM_CUSTOMER_UPDATE_REQUEST,

            {
                operationUuid: reducerState.operationUuid,
                modId: reducerState.customerModifierId.modId,
                name: reducerState.customerModifierId.name,
                id: reducerState.customerModifierId.id,
                memberList: reducerState.memberList
            }
        )
    }
}

export const callGetCustomerModifierId = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    if (reducerState.customerModifierIdFetching) {
        return
    }
    let operationId = reducerState.currentCustomerManaged.id


    dispatch(actionsMemberList.callGetCustomerModifierId())


    if (!reducerState.customerModifierIdFetching) {
        dispatch(actionsMemberList.callGetCustomerModifierIdRequest())

        util.call<Models.CustomerManaged, void>(
            util.urlMemberList.callGetCustomerModifierId(state, reducerState, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<Models.CustomerManaged>) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentCustomerManaged.id != operationId) return

                dispatch(actionsMemberList.callGetCustomerModifierIdSuccess(response))


                // Dispatch thunk "callPutCustomerUpdate" on fetch succeeded.


                dispatch(thunkMemberList.callPutMemberListUpdate())


            },

            (error: Error) => {
                state = getState()
                reducerState = state.user.mrmkmcibCRM.reducerMemberList
                if (reducerState.currentCustomerManaged.id != operationId) return

                dispatch(actionsMemberList.callGetCustomerModifierIdFailure(error))


                // Dispatch thunk "performSaveFailure" on fetch failure.


                dispatch(thunkMemberList.performSaveFailure(error))


            },

            Converters.RESPONSE_CUSTOMER_EDITOR_CALL_GET_CUSTOMER_MODIFIER_ID_TO_CUSTOMER_MANAGED,

            'GET'
        )
    }
}
export const performSaveFailure = (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performSaveFailure(error))
}
/*
 * Thunk dispatched by "MemberList" screen. Thunk used to delete Member.
 */
export const performMemberDelete = (index: number,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performMemberDelete(index,))


}

/*
 * Thunk dispatched by "MemberList" screen. Thunk chain used to set item action menu state.
 */
export const performMemberActionMenuSwitch = (id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean,) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performMemberActionMenuSwitch(id, isLeftActionMenuOpen, isRightActionMenuOpen,))


}

/*
 * Thunk dispatched by "MemberList" screen.
 */
export const navigateBack = () => (dispatch: Function): void => {
    dispatch ( SplitPanelActions.popContent ( util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_MemberList) ) )
    dispatch(actionsMemberList.navigateBack())
}

export const performResetAndReturn = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    const state = getState()
    const reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(thunkMemberList.performInputMemberSearch(''))

    dispatch(thunkMemberList.setLocalSearchFlag(true))
    dispatch(actionsMemberList.performResetAndReturn())
    dispatch(thunkMemberList.navigateBack())
}

/*
 * Thunk dispatched by "MemberList" screen.
 */
export const navigateGszActivityIncludeExcludeBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    if(reducerState.currentMode == Enums.MemberListMode.CustomerActivityAddGSZ){
        dispatch(thunkGszActivityInclude.navigateBack())
    }
    if(reducerState.currentMode == Enums.MemberListMode.CustomerActivityRemoveGSZ){
        dispatch(thunkGszActivityExclude.navigateBack())
    }


}

export const setInfoButtonFlag = (flag: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(actionsMemberList.setInfoButtonFlag(flag))
}

/*
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show team member screen.
 */
export const performNavigateToMemberScreen = (memberId: string) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(thunkMemberList.setInfoButtonFlag(true))

    // deal stack of screens
    switch(reducerState.currentMode ){
        case Enums.MemberListMode.DealEditor:{
            dispatch(SplitPanelActions.pushContent(
                Enums.NavigationContentDealEditor.DealEditorEmploee,
                util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_DealEditor)
            ))
            break;
        }
        case Enums.MemberListMode.Deal: {
            dispatch(SplitPanelActions.pushContent(
                Enums.NavigationContentAppCrmDealScreen.AppCRM_DealScreen_Employee,
                util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_Deal)
            ))
            break;
        }
        case Enums.MemberListMode.Agent: {
            dispatch(SplitPanelActions.pushContent(
                Enums.NavigationContentAgentCard.AgentEmployee,
                util.getNavigationAppCrmString(Enums.NavigationAppCRM.AgentScreen)
            ))
            break;
        }
        case Enums.MemberListMode.DealStageMainCreditOfficer:
        case Enums.MemberListMode.DealStageMemberMonitoring:
        case Enums.MemberListMode.DealStageMainClientManager: {
            dispatch(SplitPanelActions.pushContent(
                Enums.MemberList.AppCRM_MemberList_Member,
                util.getNavigationContentString(Enums.NavigationContentAppCrm.AppCRM_MemberList)
            ))
            break;
        }
        default: {
            dispatch ( SplitPanelActions.pushContent (
                Enums.MemberList.AppCRM_MemberList_Member,
                util.getNavigationPopoverMembersString ( Enums.MemberList.AppCRM_MemberList_Member )
            ) )
        }
    }

    dispatch(actionsMemberList.performNavigateToMemberScreen(memberId, reducerState.isExpandedMode))

    // Dispatch thunk "navigateToEmployeeScreen" synchronously.
    dispatch(thunkEmployee.navigateToEmployeeScreen(memberId, reducerState.isExpandedMode, getEmployeeMode(reducerState.currentMode)))
}

export const performSetMemberSearchList = (data: Models.MemberList) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performSetMemberSearchList(data))
}
export const performSetMemberSearchListEmpty = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performSetMemberSearchListEmpty())
}

export const setLocalSearchFlag = (isLocalSearch: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.setLocalSearchFlag(isLocalSearch))
}

export const performInputEmployeeSourceActivity = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList
    dispatch(thunkMemberList.performPopoverAddHide())
    dispatch(thunkMemberList.callGetCustomerForActivity())
    dispatch(actionsMemberList.performInputEmployeeSourceActivity())
}



export const callGetCustomerForActivity = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    if (reducerState.customerForActivityFetching) {
        return
    }
    let customerId = reducerState.currentCustomerManaged.id

    dispatch(actionsMemberList.callGetCustomerForActivity())

    if (!reducerState.customerForActivityFetching) {
        dispatch(actionsMemberList.callGetCustomerForActivityRequest())

        util.call<Models.CustomerManaged, void>(
            util.urlMemberList.callGetCustomerForActivity(state, customerId, [{tag: Enums.CachePolicy.Disabled}]),

            (response: Response<Models.CustomerManaged>) => {
                dispatch(actionsMemberList.callGetCustomerForActivitySuccess(response))
                state = getState()
                dispatch(thunkMemberList.performInputEmployeeSource(Enums.MemberListEmployeeSource.CustomerManaged))
            },

            (error: Error) => {
                dispatch(actionsMemberList.callGetCustomerForActivityFailure(error))
            },

            Converters.RESPONSE_CUSTOMER_EDITOR_CALL_GET_CUSTOMER_MODIFIER_ID_TO_CUSTOMER_MANAGED,

            'GET'
        )
    }
}



export const performInputEmployeeSource = (inputEmployeeSource: Enums.MemberListEmployeeSource) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(thunkMemberList.performPopoverAddHide())
    dispatch(actionsMemberList.performInputEmployeeSource(inputEmployeeSource))
    dispatch(thunkMemberList.performSetDealCardOwner(false))
    let existingPositionsList: Models.MemberList = {data:[]}

    switch (reducerState.currentMode){
        case Enums.MemberListMode.Deal:
        case Enums.MemberListMode.DealEditor:
        case Enums.MemberListMode.DealStageMainClientManager:
        case Enums.MemberListMode.DealStageMainCreditOfficer:
        case Enums.MemberListMode.DealStageMemberMonitoring:{
            existingPositionsList = reducerState.currentDeal.memberList
            break
        }
    }

    state = getState()
    reducerState = state.user.mrmkmcibCRM.reducerMemberList
    let reducerCustomer = state.user.mrmkmcibCRM.reducerCustomer

    if (reducerState.inputEmployeeSource == Enums.MemberListEmployeeSource.CustomerManaged) {
        if (reducerCustomer.currentCustomerManaged != null &&
            reducerCustomer.currentCustomerManaged.memberList != null &&
            reducerCustomer.currentCustomerManaged.memberList.data != null
        ) {
            if(reducerState.currentMode == Enums.MemberListMode.Activity){
                dispatch(thunkMemberList.performSetMemberSearchList(util.getFilteredExistingPositionsList(reducerState.currentCustomerManaged.memberList,existingPositionsList)))
            } else {
                dispatch(thunkMemberList.performSetMemberSearchList(util.getFilteredExistingPositionsList(reducerCustomer.currentCustomerManaged.memberList,existingPositionsList)))
            }
        }
    } else {
        dispatch(thunkMemberList.setLocalSearchFlag(false))
        dispatch(thunkMemberList.performSetMemberSearchListEmpty())
    }
    if(
        reducerState.currentMode !==  Enums.MemberListMode.DealStageMainClientManager &&
        reducerState.currentMode !==  Enums.MemberListMode.DealStageMainCreditOfficer &&
        reducerState.currentMode !==  Enums.MemberListMode.DealStageMemberMonitoring
    ){
        dispatch(thunkMemberList.navigateToMemberSearchScreen())
    }


}

/*
 * Thunk dispatched by "MemberList" screen. Thunk dispatched to return to activity card.
 */
export const navigateToActivityBack = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(performReturnToActivityScreen());

}
/*
 * Thunk dispatched by "MemberList" screen. Thunk dispatched to save memberList to activity card.
 */
export const swapContextMemberListToActivity = (memberList: Models.MemberList) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList

    dispatch(swapContextMemberList(memberList));

}
/*
 * Thunk dispatched by "MemberList" screen. Thunk dispatched to reset container state to default values.
 */
export const performContainerReset = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    let state = getState()
    let reducerState = state.user.mrmkmcibCRM.reducerMemberList


    dispatch(actionsMemberList.performContainerReset())


}

export const performCancelSaveMemberListError = () => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performCancelSaveMemberListError())
}

export const performSetDealCardOwner = (isDealCardOwner: boolean) => (dispatch: Function, getState: () => ModelState.IRootState): void => {
    dispatch(actionsMemberList.performSetDealCardOwner(isDealCardOwner))
}
