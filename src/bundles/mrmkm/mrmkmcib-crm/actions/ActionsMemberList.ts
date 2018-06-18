/**
 * Actions of MemberList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "../models/Models"
import {EnumsApp} from "mrmkmcib-app"
import {Models as ModelsApp} from "mrmkmcib-app"
import {EnumsCrm} from "mrmkmcib-crm"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {EnumsDirectory} from "mrmkmcib-directory"
import {Models as ModelsDirectory} from "mrmkmcib-directory"
import {EnumsKnowledgebase} from "mrmkmcib-knowledgebase"
import {Models as ModelsKnowledgebase} from "mrmkmcib-knowledgebase"
import {EnumsNews} from "mrmkmcib-news"
import {Models as ModelsNews} from "mrmkmcib-news"
import {EnumsNotice} from "mrmkmcib-notice"
import {Models as ModelsNotice} from "mrmkmcib-notice"
import {EnumsScheduler} from "mrmkmcib-scheduler"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Enums} from '../Enums'
import {Models} from "mrmkmcib-crm"
import * as ModelsAppCRM from "../models/ModelsAppCRM"
import * as ModelsCustomer from "../models/ModelsCustomer"
import * as ModelsCustomerEditor from "../models/ModelsCustomerEditor"
import * as ModelsDealEditor from "../models/ModelsDealEditor"
import * as ModelsDealList from "../models/ModelsDealList"
import * as ModelsProductList from "../models/ModelsProductList"
import * as ModelsProduct from "../models/ModelsProduct"
import * as ModelsProductPaymentAccount from "../models/ModelsProductPaymentAccount"
import * as ModelsProductCredit from "../models/ModelsProductCredit"
import * as ModelsGSZ from "../models/ModelsGSZ"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import * as ModelsGszActivityExclude from "../models/ModelsGszActivityExclude"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import * as ModelsLimit from "../models/ModelsLimit"
import * as ModelsDeal from "../models/ModelsDeal"
import * as ModelsEmployee from "../models/ModelsEmployee"
import * as ModelsAgent from "../models/ModelsAgent"
import * as ModelsAgentList from "../models/ModelsAgentList"
import * as ModelsMemberList from "../models/ModelsMemberList"
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import * as ModelsOccasion from "../models/ModelsOccasion"
import * as ModelsNoteList from "../models/ModelsNoteList"
import Action from "../models/Action"
import Response from "../models/Response"
import Error from "../models/Error"


export const PERFORM_MEMBER_LIST_REFRESH = 'MEMBER_LIST_CONTAINER_PERFORM_MEMBER_LIST_REFRESH'

export const SWAP_CONTEXT = 'MEMBER_LIST_CONTAINER_SWAP_CONTEXT'

export const PERFORM_EDIT = 'MEMBER_LIST_CONTAINER_PERFORM_EDIT'

export const PERFORM_CANCEL = 'MEMBER_LIST_CONTAINER_PERFORM_CANCEL'

export const PERFORM_POPOVER_ADD_SHOW = 'MEMBER_LIST_CONTAINER_PERFORM_POPOVER_ADD_SHOW'

export const PERFORM_POPOVER_ADD_HIDE = 'MEMBER_LIST_CONTAINER_PERFORM_POPOVER_ADD_HIDE'

export const NAVIGATE_TO_MEMBER_SEARCH_SCREEN = 'MEMBER_LIST_CONTAINER_NAVIGATE_TO_MEMBER_SEARCH_SCREEN'

export const PERFORM_INPUT_MEMBER_SEARCH = 'MEMBER_LIST_CONTAINER_PERFORM_INPUT_MEMBER_SEARCH'

export const CALL_GET_MEMBER_SEARCH_LIST = 'MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST'
export const CALL_GET_MEMBER_SEARCH_LIST_REQUEST = 'MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST_REQUEST'
export const CALL_GET_MEMBER_SEARCH_LIST_SUCCESS = 'MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST_SUCCESS'
export const CALL_GET_MEMBER_SEARCH_LIST_FAILURE = 'MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST_FAILURE'

export const PERFORM_MEMBER_SEARCH_LIST_SELECT = 'MEMBER_LIST_CONTAINER_PERFORM_MEMBER_SEARCH_LIST_SELECT'

export const NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN = 'MEMBER_LIST_CONTAINER_NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN'

export const PERFORM_MEMBER_ROLE_SELECT = 'MEMBER_LIST_CONTAINER_PERFORM_MEMBER_ROLE_SELECT'

export const NAVIGATE_TO_MEMBER_LIST_SCREEN = 'MEMBER_LIST_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN'

export const PERFORM_SAVE = 'MEMBER_LIST_CONTAINER_PERFORM_SAVE'

export const PERFORM_MEMBER_DELETE = 'MEMBER_LIST_CONTAINER_PERFORM_MEMBER_DELETE'

export const PERFORM_MEMBER_ACTION_MENU_SWITCH = 'MEMBER_LIST_CONTAINER_PERFORM_MEMBER_ACTION_MENU_SWITCH'

export const NAVIGATE_BACK = 'MEMBER_LIST_CONTAINER_NAVIGATE_BACK'

export const PERFORM_NAVIGATE_TO_MEMBER_SCREEN = 'MEMBER_LIST_CONTAINER_PERFORM_NAVIGATE_TO_MEMBER_SCREEN'

export const PERFORM_CONTAINER_RESET = 'MEMBER_LIST_CONTAINER_PERFORM_CONTAINER_RESET'

export const PERFORM_SAVE_EXECUTE = 'MEMBER_LIST_CONTAINER_PERFORM_SAVE_EXECUTE'

export const CALL_PUT_MEMBER_LIST_UPDATE = 'MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE'

export const CALL_GET_CUSTOMER_MODIFIER_ID = 'MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID'

export const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = 'MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST'

export const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = 'MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS'

export const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = 'MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE'

export const PERFORM_SAVE_FAILURE = 'MEMBER_LIST_PERFORM_SAVE_FAILURE'

export const PERFORM_SAVE_SUCCESS = 'MEMBER_LIST_PERFORM_SAVE_SUCCESS'

export const CALL_PUT_MEMBER_LIST_UPDATE_REQUEST = 'MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE_REQUEST'

export const CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS = 'MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS'

export const CALL_PUT_MEMBER_LIST_UPDATE_FAILURE = 'MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE_FAILURE'

export const NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK = 'MEMBER_LIST_NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK'

export const NAVIGATE_MEMBER_LIST_SCREEN_BACK = 'MEMBER_LIST_NAVIGATE_MEMBER_LIST_SCREEN_BACK'

export const PERFORM_INPUT_MEMBER_SEARCH_LOCAL = 'MEMBER_LIST_PERFORM_INPUT_MEMBER_SEARCH_LOCAL'

export const FILTER_MEMBER_LIST_SEARCH_LOCAL = 'MEMBER_LIST_FILTER_MEMBER_LIST_SEARCH_LOCAL'

export const NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN = 'MEMBER_LIST_NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN'

export const PERFORM_INPUT_EMPLOYEE_SOURCE = 'MEMBER_LIST_PERFORM_INPUT_EMPLOYEE_SOURCE'

export const PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY = 'MEMBER_LIST_PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY'

export const PERFROM_SET_MEMBER_SEARCH_LIST = 'MEMBER_LIST_PERFROM_SET_MEMBER_SEARCH_LIST'

export const PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY = 'MEMBER_LIST_PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY'

export const PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH = 'MEMBER_LIST_PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH'

export const NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN = 'MEMBER_LIST_NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN'

export const PERFORM_GENERAL_MEMBER_SELECT = 'MEMBER_LIST_PERFORM_GENERAL_MEMBER_SELECT'

export const PERFROM_SET_EDITOR_ENABLED = 'MEMBER_LIST_PERFROM_SET_EDITOR_ENABLED'

export const CALL_GET_DEAL_MEMBER_LIST_REFRESH = 'MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH'
export const CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST = 'MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST'
export const CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS = 'MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS'
export const CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE = 'MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE'
export const SET_EDITING_PERMISSION_MEMBER_LIST = 'MEMBER_LIST_CONTAINER_SET_EDITING_PERMISSION_MEMBER_LIST'
export const SET_INFO_BUTTON_FLAG = 'MEMBER_LIST_CONTAINER_SET_INFO_BUTTON_FLAG'
export const PERFORM_RESET_AND_RETURN = 'MEMBER_LIST_CONTAINER_PERFORM_RESET_AND_RETURN'
export const GET_SUP_PARAMETERS = 'MEMBER_LIST_CONTAINER_GET_SUP_PARAMETERS'
export const PERFORM_RESET_MEMBER_SEARCH_LIST = 'MEMBER_LIST_CONTAINER_PERFORM_RESET_MEMBER_SEARCH_LIST'
export const PERFORM_SET_DEAL_CARD_OWNER = 'MEMBER_LIST_CONTAINER_PERFORM_SET_DEAL_CARD_OWNER'
export const NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE = 'MEMBER_LIST_CONTAINER_NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE'
export const SET_LOCAL_SEARCH_FLAG = 'MEMBER_LIST_CONTAINER_SET_LOCAL_SEARCH_FLAG'
export const PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR = 'MEMBER_LIST_CONTAINER_PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR'
export const CALL_PUT_ACTIVITY_MEMBER_LIST = 'MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST'
export const CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST = 'MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST'
export const CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS = 'MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS'
export const CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE = 'MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE'
export const PERFORM_SAVE_ACTIVITY_MEMBER_LIST = 'MEMBER_LIST_CONTAINER_PERFORM_SAVE_ACTIVITY_MEMBER_LIST'
export const PERFORM_SEARCH = 'MEMBER_LIST_CONTAINER_PERFORM_SEARCH'

export const CALL_GET_CUSTOMER_FOR_ACTIVITY = 'MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY'
export const CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST = 'MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST'
export const CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS = 'MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS'
export const CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE = 'MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE'

/**
 * Thunk dispatched by "MemberList" screen. Refresh current member list.
 *
 * @param {ModelsScheduler.Activity} currentActivity .
 * @param {Models.Deal} currentDeal .
 * @param {Models.CustomerManaged} currentCustomerManaged .
 * @param {ModelsScheduler.Activity} currentActivity .
 * @param {Models.Deal} currentDeal .
 * @param {Models.CustomerManaged}  currentCustomerManaged .
 * @param {Models.Gsz}  currentGsz .
 * @param {Models.Agent}  currentAgent .
 * @param {boolean}  isExpandedMode .
 * @param {Enums.MemberListMode}  currentMode .
 * @param {Enums.MemberListEmployeeSource}  inputEmployeeSource .
 */
export type PERFORM_MEMBER_LIST_REFRESH = {
    currentActivity: ModelsScheduler.Activity,
    currentDeal: Models.Deal,
    currentCustomerManaged: Models.CustomerManaged,
    currentGsz: Models.Gsz,
    currentAgent: Models.Agent,
    isExpandedMode : boolean,
    currentMode: Enums.MemberListMode,
    inputEmployeeSource: Enums.MemberListEmployeeSource
}
export const performMemberListRefresh = (currentActivity: ModelsScheduler.Activity, currentDeal: Models.Deal, currentCustomerManaged: Models.CustomerManaged, currentGsz: Models.Gsz,currentAgent: Models.Agent,
     isExpandedMode: boolean, currentMode: Enums.MemberListMode,inputEmployeeSource: Enums.MemberListEmployeeSource): Action<PERFORM_MEMBER_LIST_REFRESH> => ({
    type: PERFORM_MEMBER_LIST_REFRESH,
    payload: {
        currentActivity: currentActivity,
        currentDeal: currentDeal,
        currentCustomerManaged: currentCustomerManaged,
        isExpandedMode: isExpandedMode,
        currentGsz:  currentGsz,
        currentAgent: currentAgent,
        currentMode: currentMode,
        inputEmployeeSource : inputEmployeeSource
    }
})

/**
 * Internal thunk used in "MemberList" container.
 */
export type PERFROM_SET_EDITOR_ENABLED = { isEnabled:boolean, }
export const performSetEditorEnabled = (isEnabled:boolean): Action<PERFROM_SET_EDITOR_ENABLED> => ({
    type: PERFROM_SET_EDITOR_ENABLED,
    payload: {
        isEnabled: isEnabled,
    }
})

/**
 * Internal thunk used in "MemberList" container. Thunk chain dispatched to set context parameters.
 *
 * @param {Models.MemberList} memberList .
 */
export type SWAP_CONTEXT = { memberList: Models.MemberList, }
export const swapContext = (memberList: Models.MemberList,): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        memberList: memberList,
    }
})
/**filterInputMemberSearchLocal
 * Internal thunk used in "MemberList" container. Thunk chain to set local search results.
 *
 * @param {Models.MemberList} memberList .
 */
export type FILTER_MEMBER_LIST_SEARCH_LOCAL = { memberList: Models.MemberList, }
export const filterInputMemberSearchLocal = (memberList: Models.MemberList,): Action<FILTER_MEMBER_LIST_SEARCH_LOCAL> => ({
    type: FILTER_MEMBER_LIST_SEARCH_LOCAL,
    payload: {
        memberList: memberList,
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to enter editor mode.
 *
 */
export type PERFORM_EDIT = {}
export const performEdit = (): Action<PERFORM_EDIT> => ({
    type: PERFORM_EDIT,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to cancel changes.
 *
 */
export type PERFORM_CANCEL = {}
export const performCancel = (): Action<PERFORM_CANCEL> => ({
    type: PERFORM_CANCEL,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show add menu.
 *
 */
export type PERFORM_POPOVER_ADD_SHOW = {}
export const performPopoverAddShow = (): Action<PERFORM_POPOVER_ADD_SHOW> => ({
    type: PERFORM_POPOVER_ADD_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
 *
 */
export type PERFORM_POPOVER_ADD_HIDE = {}
export const performPopoverAddHide = (): Action<PERFORM_POPOVER_ADD_HIDE> => ({
    type: PERFORM_POPOVER_ADD_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to navigate to search for remote team members
 *
 */
export type NAVIGATE_TO_MEMBER_SEARCH_SCREEN = {}
export const navigateToMemberSearchScreen = (): Action<NAVIGATE_TO_MEMBER_SEARCH_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_SEARCH_SCREEN,
    payload: {}
})
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to navigate to search in list of local team members
 *
 */
export type NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN = {}
export const navigateToMemberSearchLocalScreen = (): Action<NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN,
    payload: {}
})


/**
 * Thunk dispatched by "MemberList" screen. Thunk used navigate back from search screen
 *
 */
export type NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK = {}
export const navigateSearchMemberListScreenBack = (): Action<NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK> => ({
    type: NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_MEMBER_SEARCH = { value: string }
export const performInputMemberSearch = (value: string): Action<PERFORM_INPUT_MEMBER_SEARCH> => ({
    type: PERFORM_INPUT_MEMBER_SEARCH,
    payload: {
        value: value,
    }
})
/**
 * Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
 *
 * @param {string} value .
 */
export type PERFORM_INPUT_MEMBER_SEARCH_LOCAL = { value: string }
export const performInputMemberSearchLocal = (value: string): Action<PERFORM_INPUT_MEMBER_SEARCH_LOCAL> => ({
    type: PERFORM_INPUT_MEMBER_SEARCH_LOCAL,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 *
 */
export type CALL_GET_MEMBER_SEARCH_LIST = {}
export const callGetMemberSearchList = (): Action<CALL_GET_MEMBER_SEARCH_LIST> => ({
    type: CALL_GET_MEMBER_SEARCH_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetMemberSearchList" started. Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 */
export type CALL_GET_MEMBER_SEARCH_LIST_REQUEST = {}
export const callGetMemberSearchListRequest = (): Action<CALL_GET_MEMBER_SEARCH_LIST_REQUEST> => ({
    type: CALL_GET_MEMBER_SEARCH_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetMemberSearchList". Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 *
 * @param {Models.MemberList} memberSearchList Data received by fetch.
 * @param { Date | null } cachedDate
 */
export type CALL_GET_MEMBER_SEARCH_LIST_SUCCESS = { memberSearchList: Models.MemberList, cachedDate: Date | null }
export const callGetMemberSearchListSuccess = (memberSearchList: Models.MemberList,cachedDate: Date | null): Action<CALL_GET_MEMBER_SEARCH_LIST_SUCCESS> => ({
    type: CALL_GET_MEMBER_SEARCH_LIST_SUCCESS,
    payload: {
        memberSearchList: memberSearchList,
        cachedDate: cachedDate
    }
})

export type PERFORM_RESET_MEMBER_SEARCH_LIST = {}
export const performResetMemberSearchList = (): Action<PERFORM_RESET_MEMBER_SEARCH_LIST> => ({
    type: PERFORM_RESET_MEMBER_SEARCH_LIST,
    payload: {}
})

export type PERFORM_SEARCH = {isValidSearchString: boolean}
export const performSearch = (isValidSearchString: boolean): Action<PERFORM_SEARCH> => ({
    type: PERFORM_SEARCH,
    payload: {
        isValidSearchString:isValidSearchString
    }
})

export type PERFROM_SET_MEMBER_SEARCH_LIST = { data: Models.MemberList }
export const performSetMemberSearchList = (data: Models.MemberList): Action<PERFROM_SET_MEMBER_SEARCH_LIST> => ({
    type: PERFROM_SET_MEMBER_SEARCH_LIST,
    payload: {
        data: data
    }
})

export type PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH = { employeeSource: Enums.MemberListEmployeeSource, isSelectEmployeeLocalSearch: boolean }
export const performSetSelectEmployeeLocalSearch = (employeeSource: Enums.MemberListEmployeeSource, isSelectEmployeeLocalSearch: boolean): Action<PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH> => ({
    type: PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH,
    payload: {
        isSelectEmployeeLocalSearch: isSelectEmployeeLocalSearch,
        employeeSource:employeeSource
    }
})
export type PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY = { }
export const performSetMemberSearchListEmpty = (): Action<PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY> => ({
    type: PERFROM_SET_MEMBER_SEARCH_LIST,
    payload:{}
})

/*
 * Action dispatched on fetch failure in thunk "callGetMemberSearchList". Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_MEMBER_SEARCH_LIST_FAILURE = { error: Error }
export const callGetMemberSearchListFailure = (error: Error): Action<CALL_GET_MEMBER_SEARCH_LIST_FAILURE> => ({
    type: CALL_GET_MEMBER_SEARCH_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 *
 * @param {ModelsApp.Employee} member .
 */
export type PERFORM_MEMBER_SEARCH_LIST_SELECT = { member: ModelsApp.Employee }
export const performMemberSearchListSelect = (member: ModelsApp.Employee): Action<PERFORM_MEMBER_SEARCH_LIST_SELECT> => ({
    type: PERFORM_MEMBER_SEARCH_LIST_SELECT,
    payload: {
        member: member,
    }
})
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 *
 * @param {ModelsApp.Employee} member .
 */
export type PERFORM_GENERAL_MEMBER_SELECT = { index: number }
export const performGeneralMemberSelect = (index: number): Action<PERFORM_GENERAL_MEMBER_SELECT> => ({
    type: PERFORM_GENERAL_MEMBER_SELECT,
    payload: {
        index: index,
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show member role picker screen.
 *
 */
export type NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN = {}
export const navigateToMemberRolePickerScreen = (): Action<NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN,
    payload: {}
})
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show member general picker screen.
 *
 */
export type NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN = {}
export const navigateToSelectMemberIsGeneralScreen = (): Action<NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN> => ({
    type: NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 *
 * @param {ModelsApp.Classifier} role .
 */
export type PERFORM_MEMBER_ROLE_SELECT = { role: ModelsApp.Classifier, }
export const performMemberRoleSelect = (role: ModelsApp.Classifier,): Action<PERFORM_MEMBER_ROLE_SELECT> => ({
    type: PERFORM_MEMBER_ROLE_SELECT,
    payload: {
        role: role,
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show member list.
 *
 */
export type NAVIGATE_TO_MEMBER_LIST_SCREEN = {}
export const navigateToMemberListScreen = (): Action<NAVIGATE_TO_MEMBER_LIST_SCREEN> => ({
    type: NAVIGATE_TO_MEMBER_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to confirm changes in member list.
 *
 */
export type PERFORM_SAVE = {}
export const performSave = (): Action<PERFORM_SAVE> => ({
    type: PERFORM_SAVE,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk used to delete Member.
 *
 * @param {number} index .
 */
export type PERFORM_MEMBER_DELETE = { index: number, }
export const performMemberDelete = (index: number,): Action<PERFORM_MEMBER_DELETE> => ({
    type: PERFORM_MEMBER_DELETE,
    payload: {
        index: index,
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to set item action menu state.
 *
 * @param {string} id .
 * @param {boolean} isLeftActionMenuOpen .
 * @param {boolean} isRightActionMenuOpen .
 */
export type PERFORM_MEMBER_ACTION_MENU_SWITCH = { id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean, }
export const performMemberActionMenuSwitch = (id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean,): Action<PERFORM_MEMBER_ACTION_MENU_SWITCH> => ({
    type: PERFORM_MEMBER_ACTION_MENU_SWITCH,
    payload: {
        id: id,
        isLeftActionMenuOpen: isLeftActionMenuOpen,
        isRightActionMenuOpen: isRightActionMenuOpen,
    }
})

/**
 * Thunk dispatched by "MemberList" screen.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show team member screen.
 *
 * @param {string} memberId .
 */
export type PERFORM_NAVIGATE_TO_MEMBER_SCREEN = { memberId: string, isExpandedMode: boolean }
export const performNavigateToMemberScreen = (memberId: string, isExpandedMode: boolean): Action<PERFORM_NAVIGATE_TO_MEMBER_SCREEN> => ({
    type: PERFORM_NAVIGATE_TO_MEMBER_SCREEN,
    payload: {
        memberId: memberId,
        isExpandedMode: isExpandedMode
    }
})
/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show select search mode for employee
 *
 * @param {string} memberId .
 */
export type PERFORM_INPUT_EMPLOYEE_SOURCE = { employeeSource: Enums.MemberListEmployeeSource }
export const performInputEmployeeSource = (employeeSource: Enums.MemberListEmployeeSource): Action<PERFORM_INPUT_EMPLOYEE_SOURCE> => ({
    type: PERFORM_INPUT_EMPLOYEE_SOURCE,
    payload: {
        employeeSource: employeeSource
    }
})

/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show select search mode for employee
 *
 * @param {string} memberId .
 */
export type PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY = {}
export const performInputEmployeeSourceActivity = (): Action<PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY> => ({
    type: PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY,
    payload: {}
})



/**
 * Thunk dispatched by "MemberList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performSave" started. Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
 */
export type PERFORM_SAVE_EXECUTE = {}
export const performSaveExecute = (): Action<PERFORM_SAVE_EXECUTE> => ({
    type: PERFORM_SAVE_EXECUTE,
    payload: {}
})

/**
 * Thunk dispatched by "MemberList" screen. Fetch put request.
 *
 */
export type CALL_PUT_MEMBER_LIST_UPDATE = {}
export const callPutMemberListUpdate = (): Action<CALL_PUT_MEMBER_LIST_UPDATE> => ({
    type: CALL_PUT_MEMBER_LIST_UPDATE,
    payload: {}
})

export type CALL_GET_CUSTOMER_MODIFIER_ID = {}
export const callGetCustomerModifierId = (): Action<CALL_GET_CUSTOMER_MODIFIER_ID> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = {}
export const callGetCustomerModifierIdRequest = (): Action<CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
 *
 * @param {Models.CustomerManaged} response Data received by fetch.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = { response: Response<Models.CustomerManaged> }
export const callGetCustomerModifierIdSuccess = (response: Response<Models.CustomerManaged>): Action<CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS,
    payload: {
        response: response
    }
})
/*
 * Action dispatched on fetch failure in thunk "callGetCustomerModifierId". Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = { error: Error }
export const callGetCustomerModifierIdFailure = (error: Error): Action<CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE> => ({
    type: CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE,
    payload: {
        error: error
    }
})

/*
 * Action dispatched on failure in thunk "performSave". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_SAVE_FAILURE = { error: Error }
export const performSaveFailure = (error: Error): Action<PERFORM_SAVE_FAILURE> => ({
    type: PERFORM_SAVE_FAILURE,
    payload: {
        error: error
    }
})


/**
 * Action dispatched on network thunk chain "callPutMemberListUpdate" started. Thunk dispatched by "MemberList" screen. Fetch put request.
 */
export type CALL_PUT_MEMBER_LIST_UPDATE_REQUEST = {}
export const callPutMemberListUpdateRequest = (): Action<CALL_PUT_MEMBER_LIST_UPDATE_REQUEST> => ({
    type: CALL_PUT_MEMBER_LIST_UPDATE_REQUEST,
    payload: {}
})
/*
 * Action dispatched on fetch succeeded in thunk "callPutMemberListUpdate". Thunk dispatched by "MemberList" screen. Fetch put request.
 *
 * @param {boolean} response Data received by fetch.
 */
export type CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS = { response: Response<boolean> }
export const callPutMemberListUpdateSuccess = (response: Response<boolean>): Action<CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS> => ({
    type: CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callPutMemberListUpdate". Thunk dispatched by "MemberList" screen. Fetch put request.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_PUT_MEMBER_LIST_UPDATE_FAILURE = { error: Error }
export const callPutMemberListUpdateFailure = (error: Error): Action<CALL_PUT_MEMBER_LIST_UPDATE_FAILURE> => ({
    type: CALL_PUT_MEMBER_LIST_UPDATE_FAILURE,
    payload: {
        error: error
    }
})
/*
 * Action dispatched on success in thunk "performSave". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to next step.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_SAVE_SUCCESS = { data: boolean }
export const performSaveSuccess = (data: boolean): Action<PERFORM_SAVE_SUCCESS> => ({
    type: PERFORM_SAVE_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on success in thunk "navigateMemberListScreenBack". Thunk dispatched by "MemberList" screen. Thunk dispatched to go to back from first screen
 *
 */
export type NAVIGATE_MEMBER_LIST_SCREEN_BACK = {  }
export const navigateMemberListScreenBack = (): Action<NAVIGATE_MEMBER_LIST_SCREEN_BACK> => ({
    type: NAVIGATE_MEMBER_LIST_SCREEN_BACK,
    payload: {
    }
})

export type CALL_GET_DEAL_MEMBER_LIST_REFRESH = {}
export const callGetDealMemberListRefresh = (): Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH> => ({
    type: CALL_GET_DEAL_MEMBER_LIST_REFRESH,
    payload: {}
})

export type CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST = {}
export const callGetDealMemberListRefreshRequest = (): Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST> => ({
    type: CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST,
    payload: {}
})

export type CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS = { response: Response<Models.Deal> }
export const callGetDealMemberListRefreshSuccess = (response: Response<Models.Deal>): Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS> => ({
    type: CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS,
    payload: {
        response: response
    }
})

export type CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE = { error: Error }
export const callGetDealMemberListRefreshFailure = (error: Error): Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE> => ({
    type: CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

export type SET_EDITING_PERMISSION_MEMBER_LIST = { isEditingMemberList: boolean }
export const setEditingPermissionMemberList = (isEditingMemberList: boolean): Action<SET_EDITING_PERMISSION_MEMBER_LIST> => ({
    type: SET_EDITING_PERMISSION_MEMBER_LIST,
    payload: {
        isEditingMemberList: isEditingMemberList
    }
})

export type SET_INFO_BUTTON_FLAG = { flag: boolean }
export const setInfoButtonFlag = (flag: boolean): Action<SET_INFO_BUTTON_FLAG> => ({
    type: SET_INFO_BUTTON_FLAG,
    payload: {
        flag: flag
    }
})

export type PERFORM_RESET_AND_RETURN = {}
export const performResetAndReturn = (): Action<PERFORM_RESET_AND_RETURN> => ({
    type: PERFORM_RESET_AND_RETURN,
    payload: {}
})

export type GET_SUP_PARAMETERS = {value: string}
export const getSupParameters = (value: string): Action<GET_SUP_PARAMETERS> => ({
    type: GET_SUP_PARAMETERS,
    payload: {
        value: value,
    }
})

export type PERFORM_SET_DEAL_CARD_OWNER = {isDealCardOwner: boolean}
export const performSetDealCardOwner = (isDealCardOwner: boolean): Action<PERFORM_SET_DEAL_CARD_OWNER> => ({
    type: PERFORM_SET_DEAL_CARD_OWNER,
    payload: {
        isDealCardOwner: isDealCardOwner,
    }
})


export type SET_LOCAL_SEARCH_FLAG = {isLocalSearch: boolean}
export const setLocalSearchFlag = (isLocalSearch: boolean): Action<SET_LOCAL_SEARCH_FLAG> => ({
    type: SET_LOCAL_SEARCH_FLAG,
    payload: {
        isLocalSearch:isLocalSearch,
    }
})

export type PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR = {}
export const performCancelSaveMemberListError = (): Action<PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR> => ({
    type: PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR,
    payload: {}
})



export type CALL_PUT_ACTIVITY_MEMBER_LIST = {}
export const callPutActivityMemberList = (): Action<CALL_PUT_ACTIVITY_MEMBER_LIST> => ({
    type: CALL_PUT_ACTIVITY_MEMBER_LIST,
    payload: {}
})

export type CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST = {}
export const callPutActivityMemberListRequest = (): Action<CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST> => ({
    type: CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST,
    payload: {}
})

export type CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS = { response: Response<boolean> }
export const callPutActivityMemberListSuccess = (response: Response<boolean>): Action<CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS> => ({
    type: CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS,
    payload: {
        response: response
    }
})

export type CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE = { error: Error }
export const callPutActivityMemberListFailure = (error: Error): Action<CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE> => ({
    type: CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE,
    payload: {
        error: error
    }
})

export type PERFORM_SAVE_ACTIVITY_MEMBER_LIST = {}
export const performSaveActivityMemberList = (): Action<PERFORM_SAVE_ACTIVITY_MEMBER_LIST> => ({
    type: PERFORM_SAVE_ACTIVITY_MEMBER_LIST,
    payload: {}
})

export type CALL_GET_CUSTOMER_FOR_ACTIVITY = {}
export const callGetCustomerForActivity = (): Action<CALL_GET_CUSTOMER_FOR_ACTIVITY> => ({
    type: CALL_GET_CUSTOMER_FOR_ACTIVITY,
    payload: {}
})

export type CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST = {}
export const callGetCustomerForActivityRequest = (): Action<CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST> => ({
    type: CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST,
    payload: {}
})

export type CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS = {response : Response<Models.CustomerManaged>}
export const callGetCustomerForActivitySuccess = (response : Response<Models.CustomerManaged>): Action<CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS> => ({
    type: CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS,
    payload: {
        response: response
}
})

export type CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE = {error: Error}
export const callGetCustomerForActivityFailure = (error: Error): Action<CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE> => ({
    type: CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE,
    payload: {
        error: error
    }
})

export type NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE = {}
export const navigateBackFromMembersSearchPage = (): Action<NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE> => ({
    type: NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE,
    payload: {}
})





