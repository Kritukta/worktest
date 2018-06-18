/**
 * Actions of MemberList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-crm";
import Action from "../models/Action";
import Response from "../models/Response";
import Error from "../models/Error";
export declare const PERFORM_MEMBER_LIST_REFRESH = "MEMBER_LIST_CONTAINER_PERFORM_MEMBER_LIST_REFRESH";
export declare const SWAP_CONTEXT = "MEMBER_LIST_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_EDIT = "MEMBER_LIST_CONTAINER_PERFORM_EDIT";
export declare const PERFORM_CANCEL = "MEMBER_LIST_CONTAINER_PERFORM_CANCEL";
export declare const PERFORM_POPOVER_ADD_SHOW = "MEMBER_LIST_CONTAINER_PERFORM_POPOVER_ADD_SHOW";
export declare const PERFORM_POPOVER_ADD_HIDE = "MEMBER_LIST_CONTAINER_PERFORM_POPOVER_ADD_HIDE";
export declare const NAVIGATE_TO_MEMBER_SEARCH_SCREEN = "MEMBER_LIST_CONTAINER_NAVIGATE_TO_MEMBER_SEARCH_SCREEN";
export declare const PERFORM_INPUT_MEMBER_SEARCH = "MEMBER_LIST_CONTAINER_PERFORM_INPUT_MEMBER_SEARCH";
export declare const CALL_GET_MEMBER_SEARCH_LIST = "MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST";
export declare const CALL_GET_MEMBER_SEARCH_LIST_REQUEST = "MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST_REQUEST";
export declare const CALL_GET_MEMBER_SEARCH_LIST_SUCCESS = "MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST_SUCCESS";
export declare const CALL_GET_MEMBER_SEARCH_LIST_FAILURE = "MEMBER_LIST_CONTAINER_CALL_GET_MEMBER_SEARCH_LIST_FAILURE";
export declare const PERFORM_MEMBER_SEARCH_LIST_SELECT = "MEMBER_LIST_CONTAINER_PERFORM_MEMBER_SEARCH_LIST_SELECT";
export declare const NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN = "MEMBER_LIST_CONTAINER_NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN";
export declare const PERFORM_MEMBER_ROLE_SELECT = "MEMBER_LIST_CONTAINER_PERFORM_MEMBER_ROLE_SELECT";
export declare const NAVIGATE_TO_MEMBER_LIST_SCREEN = "MEMBER_LIST_CONTAINER_NAVIGATE_TO_MEMBER_LIST_SCREEN";
export declare const PERFORM_SAVE = "MEMBER_LIST_CONTAINER_PERFORM_SAVE";
export declare const PERFORM_MEMBER_DELETE = "MEMBER_LIST_CONTAINER_PERFORM_MEMBER_DELETE";
export declare const PERFORM_MEMBER_ACTION_MENU_SWITCH = "MEMBER_LIST_CONTAINER_PERFORM_MEMBER_ACTION_MENU_SWITCH";
export declare const NAVIGATE_BACK = "MEMBER_LIST_CONTAINER_NAVIGATE_BACK";
export declare const PERFORM_NAVIGATE_TO_MEMBER_SCREEN = "MEMBER_LIST_CONTAINER_PERFORM_NAVIGATE_TO_MEMBER_SCREEN";
export declare const PERFORM_CONTAINER_RESET = "MEMBER_LIST_CONTAINER_PERFORM_CONTAINER_RESET";
export declare const PERFORM_SAVE_EXECUTE = "MEMBER_LIST_CONTAINER_PERFORM_SAVE_EXECUTE";
export declare const CALL_PUT_MEMBER_LIST_UPDATE = "MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID = "MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = "MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = "MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS";
export declare const CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = "MEMBER_LIST_CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE";
export declare const PERFORM_SAVE_FAILURE = "MEMBER_LIST_PERFORM_SAVE_FAILURE";
export declare const PERFORM_SAVE_SUCCESS = "MEMBER_LIST_PERFORM_SAVE_SUCCESS";
export declare const CALL_PUT_MEMBER_LIST_UPDATE_REQUEST = "MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE_REQUEST";
export declare const CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS = "MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS";
export declare const CALL_PUT_MEMBER_LIST_UPDATE_FAILURE = "MEMBER_LIST_CALL_PUT_MEMBER_LIST_UPDATE_FAILURE";
export declare const NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK = "MEMBER_LIST_NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK";
export declare const NAVIGATE_MEMBER_LIST_SCREEN_BACK = "MEMBER_LIST_NAVIGATE_MEMBER_LIST_SCREEN_BACK";
export declare const PERFORM_INPUT_MEMBER_SEARCH_LOCAL = "MEMBER_LIST_PERFORM_INPUT_MEMBER_SEARCH_LOCAL";
export declare const FILTER_MEMBER_LIST_SEARCH_LOCAL = "MEMBER_LIST_FILTER_MEMBER_LIST_SEARCH_LOCAL";
export declare const NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN = "MEMBER_LIST_NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN";
export declare const PERFORM_INPUT_EMPLOYEE_SOURCE = "MEMBER_LIST_PERFORM_INPUT_EMPLOYEE_SOURCE";
export declare const PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY = "MEMBER_LIST_PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY";
export declare const PERFROM_SET_MEMBER_SEARCH_LIST = "MEMBER_LIST_PERFROM_SET_MEMBER_SEARCH_LIST";
export declare const PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY = "MEMBER_LIST_PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY";
export declare const PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH = "MEMBER_LIST_PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH";
export declare const NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN = "MEMBER_LIST_NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN";
export declare const PERFORM_GENERAL_MEMBER_SELECT = "MEMBER_LIST_PERFORM_GENERAL_MEMBER_SELECT";
export declare const PERFROM_SET_EDITOR_ENABLED = "MEMBER_LIST_PERFROM_SET_EDITOR_ENABLED";
export declare const CALL_GET_DEAL_MEMBER_LIST_REFRESH = "MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH";
export declare const CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST = "MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST";
export declare const CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS = "MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS";
export declare const CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE = "MEMBER_LIST_CONTAINER_CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE";
export declare const SET_EDITING_PERMISSION_MEMBER_LIST = "MEMBER_LIST_CONTAINER_SET_EDITING_PERMISSION_MEMBER_LIST";
export declare const SET_INFO_BUTTON_FLAG = "MEMBER_LIST_CONTAINER_SET_INFO_BUTTON_FLAG";
export declare const PERFORM_RESET_AND_RETURN = "MEMBER_LIST_CONTAINER_PERFORM_RESET_AND_RETURN";
export declare const GET_SUP_PARAMETERS = "MEMBER_LIST_CONTAINER_GET_SUP_PARAMETERS";
export declare const PERFORM_RESET_MEMBER_SEARCH_LIST = "MEMBER_LIST_CONTAINER_PERFORM_RESET_MEMBER_SEARCH_LIST";
export declare const PERFORM_SET_DEAL_CARD_OWNER = "MEMBER_LIST_CONTAINER_PERFORM_SET_DEAL_CARD_OWNER";
export declare const NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE = "MEMBER_LIST_CONTAINER_NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE";
export declare const SET_LOCAL_SEARCH_FLAG = "MEMBER_LIST_CONTAINER_SET_LOCAL_SEARCH_FLAG";
export declare const PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR = "MEMBER_LIST_CONTAINER_PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR";
export declare const CALL_PUT_ACTIVITY_MEMBER_LIST = "MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST";
export declare const CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST = "MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST";
export declare const CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS = "MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS";
export declare const CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE = "MEMBER_LIST_CONTAINER_CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE";
export declare const PERFORM_SAVE_ACTIVITY_MEMBER_LIST = "MEMBER_LIST_CONTAINER_PERFORM_SAVE_ACTIVITY_MEMBER_LIST";
export declare const PERFORM_SEARCH = "MEMBER_LIST_CONTAINER_PERFORM_SEARCH";
export declare const CALL_GET_CUSTOMER_FOR_ACTIVITY = "MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY";
export declare const CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST = "MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST";
export declare const CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS = "MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS";
export declare const CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE = "MEMBER_LIST_CONTAINER_CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE";
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
export declare type PERFORM_MEMBER_LIST_REFRESH = {
    currentActivity: ModelsScheduler.Activity;
    currentDeal: Models.Deal;
    currentCustomerManaged: Models.CustomerManaged;
    currentGsz: Models.Gsz;
    currentAgent: Models.Agent;
    isExpandedMode: boolean;
    currentMode: Enums.MemberListMode;
    inputEmployeeSource: Enums.MemberListEmployeeSource;
};
export declare const performMemberListRefresh: (currentActivity: ModelsScheduler.Activity, currentDeal: ModelsCrm.Deal, currentCustomerManaged: ModelsCrm.CustomerManaged, currentGsz: ModelsCrm.Gsz, currentAgent: ModelsCrm.Agent, isExpandedMode: boolean, currentMode: Enums.MemberListMode, inputEmployeeSource: Enums.MemberListEmployeeSource) => Action<PERFORM_MEMBER_LIST_REFRESH>;
/**
 * Internal thunk used in "MemberList" container.
 */
export declare type PERFROM_SET_EDITOR_ENABLED = {
    isEnabled: boolean;
};
export declare const performSetEditorEnabled: (isEnabled: boolean) => Action<PERFROM_SET_EDITOR_ENABLED>;
/**
 * Internal thunk used in "MemberList" container. Thunk chain dispatched to set context parameters.
 *
 * @param {Models.MemberList} memberList .
 */
export declare type SWAP_CONTEXT = {
    memberList: Models.MemberList;
};
export declare const swapContext: (memberList: ModelsCrm.MemberList) => Action<SWAP_CONTEXT>;
/**filterInputMemberSearchLocal
 * Internal thunk used in "MemberList" container. Thunk chain to set local search results.
 *
 * @param {Models.MemberList} memberList .
 */
export declare type FILTER_MEMBER_LIST_SEARCH_LOCAL = {
    memberList: Models.MemberList;
};
export declare const filterInputMemberSearchLocal: (memberList: ModelsCrm.MemberList) => Action<FILTER_MEMBER_LIST_SEARCH_LOCAL>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to enter editor mode.
 *
 */
export declare type PERFORM_EDIT = {};
export declare const performEdit: () => Action<PERFORM_EDIT>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to cancel changes.
 *
 */
export declare type PERFORM_CANCEL = {};
export declare const performCancel: () => Action<PERFORM_CANCEL>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show add menu.
 *
 */
export declare type PERFORM_POPOVER_ADD_SHOW = {};
export declare const performPopoverAddShow: () => Action<PERFORM_POPOVER_ADD_SHOW>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to hide add menu.
 *
 */
export declare type PERFORM_POPOVER_ADD_HIDE = {};
export declare const performPopoverAddHide: () => Action<PERFORM_POPOVER_ADD_HIDE>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to navigate to search for remote team members
 *
 */
export declare type NAVIGATE_TO_MEMBER_SEARCH_SCREEN = {};
export declare const navigateToMemberSearchScreen: () => Action<NAVIGATE_TO_MEMBER_SEARCH_SCREEN>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to navigate to search in list of local team members
 *
 */
export declare type NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN = {};
export declare const navigateToMemberSearchLocalScreen: () => Action<NAVIGATE_TO_MEMBER_SEARCH_LOCAL_SCREEN>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used navigate back from search screen
 *
 */
export declare type NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK = {};
export declare const navigateSearchMemberListScreenBack: () => Action<NAVIGATE_SEARCH_MEMBER_LIST_SCREEN_BACK>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_MEMBER_SEARCH = {
    value: string;
};
export declare const performInputMemberSearch: (value: string) => Action<PERFORM_INPUT_MEMBER_SEARCH>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk dispatched on member search input changed.
 *
 * @param {string} value .
 */
export declare type PERFORM_INPUT_MEMBER_SEARCH_LOCAL = {
    value: string;
};
export declare const performInputMemberSearchLocal: (value: string) => Action<PERFORM_INPUT_MEMBER_SEARCH_LOCAL>;
/**
 * Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 *
 */
export declare type CALL_GET_MEMBER_SEARCH_LIST = {};
export declare const callGetMemberSearchList: () => Action<CALL_GET_MEMBER_SEARCH_LIST>;
/**
 * Action dispatched on network thunk chain "callGetMemberSearchList" started. Thunk dispatched by "MemberList" screen. Fetch current customer member search list.
 */
export declare type CALL_GET_MEMBER_SEARCH_LIST_REQUEST = {};
export declare const callGetMemberSearchListRequest: () => Action<CALL_GET_MEMBER_SEARCH_LIST_REQUEST>;
export declare type CALL_GET_MEMBER_SEARCH_LIST_SUCCESS = {
    memberSearchList: Models.MemberList;
    cachedDate: Date | null;
};
export declare const callGetMemberSearchListSuccess: (memberSearchList: ModelsCrm.MemberList, cachedDate: Date | null) => Action<CALL_GET_MEMBER_SEARCH_LIST_SUCCESS>;
export declare type PERFORM_RESET_MEMBER_SEARCH_LIST = {};
export declare const performResetMemberSearchList: () => Action<PERFORM_RESET_MEMBER_SEARCH_LIST>;
export declare type PERFORM_SEARCH = {
    isValidSearchString: boolean;
};
export declare const performSearch: (isValidSearchString: boolean) => Action<PERFORM_SEARCH>;
export declare type PERFROM_SET_MEMBER_SEARCH_LIST = {
    data: Models.MemberList;
};
export declare const performSetMemberSearchList: (data: ModelsCrm.MemberList) => Action<PERFROM_SET_MEMBER_SEARCH_LIST>;
export declare type PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH = {
    employeeSource: Enums.MemberListEmployeeSource;
    isSelectEmployeeLocalSearch: boolean;
};
export declare const performSetSelectEmployeeLocalSearch: (employeeSource: Enums.MemberListEmployeeSource, isSelectEmployeeLocalSearch: boolean) => Action<PERFROM_SET_SELECT_EMPLOYEE_LOCAL_SEARCH>;
export declare type PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY = {};
export declare const performSetMemberSearchListEmpty: () => Action<PERFROM_SET_MEMBER_SEARCH_LIST_EMPTY>;
export declare type CALL_GET_MEMBER_SEARCH_LIST_FAILURE = {
    error: Error;
};
export declare const callGetMemberSearchListFailure: (error: Error) => Action<CALL_GET_MEMBER_SEARCH_LIST_FAILURE>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 *
 * @param {ModelsApp.Employee} member .
 */
export declare type PERFORM_MEMBER_SEARCH_LIST_SELECT = {
    member: ModelsApp.Employee;
};
export declare const performMemberSearchListSelect: (member: ModelsApp.Employee) => Action<PERFORM_MEMBER_SEARCH_LIST_SELECT>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 *
 * @param {ModelsApp.Employee} member .
 */
export declare type PERFORM_GENERAL_MEMBER_SELECT = {
    index: number;
};
export declare const performGeneralMemberSelect: (index: number) => Action<PERFORM_GENERAL_MEMBER_SELECT>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show member role picker screen.
 *
 */
export declare type NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN = {};
export declare const navigateToMemberRolePickerScreen: () => Action<NAVIGATE_TO_MEMBER_ROLE_PICKER_SCREEN>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show member general picker screen.
 *
 */
export declare type NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN = {};
export declare const navigateToSelectMemberIsGeneralScreen: () => Action<NAVIGATE_TO_SELECT_MEMBER_IS_GENERAL_SCREEN>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to select member from search list.
 *
 * @param {ModelsApp.Classifier} role .
 */
export declare type PERFORM_MEMBER_ROLE_SELECT = {
    role: ModelsApp.Classifier;
};
export declare const performMemberRoleSelect: (role: ModelsApp.Classifier) => Action<PERFORM_MEMBER_ROLE_SELECT>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to show member list.
 *
 */
export declare type NAVIGATE_TO_MEMBER_LIST_SCREEN = {};
export declare const navigateToMemberListScreen: () => Action<NAVIGATE_TO_MEMBER_LIST_SCREEN>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to confirm changes in member list.
 *
 */
export declare type PERFORM_SAVE = {};
export declare const performSave: () => Action<PERFORM_SAVE>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk used to delete Member.
 *
 * @param {number} index .
 */
export declare type PERFORM_MEMBER_DELETE = {
    index: number;
};
export declare const performMemberDelete: (index: number) => Action<PERFORM_MEMBER_DELETE>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to set item action menu state.
 *
 * @param {string} id .
 * @param {boolean} isLeftActionMenuOpen .
 * @param {boolean} isRightActionMenuOpen .
 */
export declare type PERFORM_MEMBER_ACTION_MENU_SWITCH = {
    id: string;
    isLeftActionMenuOpen: boolean;
    isRightActionMenuOpen: boolean;
};
export declare const performMemberActionMenuSwitch: (id: string, isLeftActionMenuOpen: boolean, isRightActionMenuOpen: boolean) => Action<PERFORM_MEMBER_ACTION_MENU_SWITCH>;
/**
 * Thunk dispatched by "MemberList" screen.
 *
 */
export declare type NAVIGATE_BACK = {};
export declare const navigateBack: () => Action<NAVIGATE_BACK>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show team member screen.
 *
 * @param {string} memberId .
 */
export declare type PERFORM_NAVIGATE_TO_MEMBER_SCREEN = {
    memberId: string;
    isExpandedMode: boolean;
};
export declare const performNavigateToMemberScreen: (memberId: string, isExpandedMode: boolean) => Action<PERFORM_NAVIGATE_TO_MEMBER_SCREEN>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show select search mode for employee
 *
 * @param {string} memberId .
 */
export declare type PERFORM_INPUT_EMPLOYEE_SOURCE = {
    employeeSource: Enums.MemberListEmployeeSource;
};
export declare const performInputEmployeeSource: (employeeSource: Enums.MemberListEmployeeSource) => Action<PERFORM_INPUT_EMPLOYEE_SOURCE>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk chain used to show select search mode for employee
 *
 * @param {string} memberId .
 */
export declare type PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY = {};
export declare const performInputEmployeeSourceActivity: () => Action<PERFORM_INPUT_EMPLOYEE_SOURCE_ACTIVITY>;
/**
 * Thunk dispatched by "MemberList" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
export declare type PERFORM_SAVE_EXECUTE = {};
export declare const performSaveExecute: () => Action<PERFORM_SAVE_EXECUTE>;
/**
 * Thunk dispatched by "MemberList" screen. Fetch put request.
 *
 */
export declare type CALL_PUT_MEMBER_LIST_UPDATE = {};
export declare const callPutMemberListUpdate: () => Action<CALL_PUT_MEMBER_LIST_UPDATE>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID = {};
export declare const callGetCustomerModifierId: () => Action<CALL_GET_CUSTOMER_MODIFIER_ID>;
/**
 * Action dispatched on network thunk chain "callGetCustomerModifierId" started. Internal thunk used in "MemberList" container. Fetch current customer modifier Id.
 */
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST = {};
export declare const callGetCustomerModifierIdRequest: () => Action<CALL_GET_CUSTOMER_MODIFIER_ID_REQUEST>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS = {
    response: Response<Models.CustomerManaged>;
};
export declare const callGetCustomerModifierIdSuccess: (response: Response<ModelsCrm.CustomerManaged>) => Action<CALL_GET_CUSTOMER_MODIFIER_ID_SUCCESS>;
export declare type CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE = {
    error: Error;
};
export declare const callGetCustomerModifierIdFailure: (error: Error) => Action<CALL_GET_CUSTOMER_MODIFIER_ID_FAILURE>;
export declare type PERFORM_SAVE_FAILURE = {
    error: Error;
};
export declare const performSaveFailure: (error: Error) => Action<PERFORM_SAVE_FAILURE>;
/**
 * Action dispatched on network thunk chain "callPutMemberListUpdate" started. Thunk dispatched by "MemberList" screen. Fetch put request.
 */
export declare type CALL_PUT_MEMBER_LIST_UPDATE_REQUEST = {};
export declare const callPutMemberListUpdateRequest: () => Action<CALL_PUT_MEMBER_LIST_UPDATE_REQUEST>;
export declare type CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPutMemberListUpdateSuccess: (response: Response<boolean>) => Action<CALL_PUT_MEMBER_LIST_UPDATE_SUCCESS>;
export declare type CALL_PUT_MEMBER_LIST_UPDATE_FAILURE = {
    error: Error;
};
export declare const callPutMemberListUpdateFailure: (error: Error) => Action<CALL_PUT_MEMBER_LIST_UPDATE_FAILURE>;
export declare type PERFORM_SAVE_SUCCESS = {
    data: boolean;
};
export declare const performSaveSuccess: (data: boolean) => Action<PERFORM_SAVE_SUCCESS>;
export declare type NAVIGATE_MEMBER_LIST_SCREEN_BACK = {};
export declare const navigateMemberListScreenBack: () => Action<NAVIGATE_MEMBER_LIST_SCREEN_BACK>;
export declare type CALL_GET_DEAL_MEMBER_LIST_REFRESH = {};
export declare const callGetDealMemberListRefresh: () => Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH>;
export declare type CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST = {};
export declare const callGetDealMemberListRefreshRequest: () => Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH_REQUEST>;
export declare type CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS = {
    response: Response<Models.Deal>;
};
export declare const callGetDealMemberListRefreshSuccess: (response: Response<ModelsCrm.Deal>) => Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH_SUCCESS>;
export declare type CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE = {
    error: Error;
};
export declare const callGetDealMemberListRefreshFailure: (error: Error) => Action<CALL_GET_DEAL_MEMBER_LIST_REFRESH_FAILURE>;
export declare type SET_EDITING_PERMISSION_MEMBER_LIST = {
    isEditingMemberList: boolean;
};
export declare const setEditingPermissionMemberList: (isEditingMemberList: boolean) => Action<SET_EDITING_PERMISSION_MEMBER_LIST>;
export declare type SET_INFO_BUTTON_FLAG = {
    flag: boolean;
};
export declare const setInfoButtonFlag: (flag: boolean) => Action<SET_INFO_BUTTON_FLAG>;
export declare type PERFORM_RESET_AND_RETURN = {};
export declare const performResetAndReturn: () => Action<PERFORM_RESET_AND_RETURN>;
export declare type GET_SUP_PARAMETERS = {
    value: string;
};
export declare const getSupParameters: (value: string) => Action<GET_SUP_PARAMETERS>;
export declare type PERFORM_SET_DEAL_CARD_OWNER = {
    isDealCardOwner: boolean;
};
export declare const performSetDealCardOwner: (isDealCardOwner: boolean) => Action<PERFORM_SET_DEAL_CARD_OWNER>;
export declare type SET_LOCAL_SEARCH_FLAG = {
    isLocalSearch: boolean;
};
export declare const setLocalSearchFlag: (isLocalSearch: boolean) => Action<SET_LOCAL_SEARCH_FLAG>;
export declare type PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR = {};
export declare const performCancelSaveMemberListError: () => Action<PERFORM_CANCEL_SAVE_MEMBER_LIST_ERROR>;
export declare type CALL_PUT_ACTIVITY_MEMBER_LIST = {};
export declare const callPutActivityMemberList: () => Action<CALL_PUT_ACTIVITY_MEMBER_LIST>;
export declare type CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST = {};
export declare const callPutActivityMemberListRequest: () => Action<CALL_PUT_ACTIVITY_MEMBER_LIST_REQUEST>;
export declare type CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS = {
    response: Response<boolean>;
};
export declare const callPutActivityMemberListSuccess: (response: Response<boolean>) => Action<CALL_PUT_ACTIVITY_MEMBER_LIST_SUCCESS>;
export declare type CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE = {
    error: Error;
};
export declare const callPutActivityMemberListFailure: (error: Error) => Action<CALL_PUT_ACTIVITY_MEMBER_LIST_FAILURE>;
export declare type PERFORM_SAVE_ACTIVITY_MEMBER_LIST = {};
export declare const performSaveActivityMemberList: () => Action<PERFORM_SAVE_ACTIVITY_MEMBER_LIST>;
export declare type CALL_GET_CUSTOMER_FOR_ACTIVITY = {};
export declare const callGetCustomerForActivity: () => Action<CALL_GET_CUSTOMER_FOR_ACTIVITY>;
export declare type CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST = {};
export declare const callGetCustomerForActivityRequest: () => Action<CALL_GET_CUSTOMER_FOR_ACTIVITY_REQUEST>;
export declare type CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS = {
    response: Response<Models.CustomerManaged>;
};
export declare const callGetCustomerForActivitySuccess: (response: Response<ModelsCrm.CustomerManaged>) => Action<CALL_GET_CUSTOMER_FOR_ACTIVITY_SUCCESS>;
export declare type CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE = {
    error: Error;
};
export declare const callGetCustomerForActivityFailure: (error: Error) => Action<CALL_GET_CUSTOMER_FOR_ACTIVITY_FAILURE>;
export declare type NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE = {};
export declare const navigateBackFromMembersSearchPage: () => Action<NAVIGATE_BACK_FROM_MEMBERS_SEARCH_PAGE>;
