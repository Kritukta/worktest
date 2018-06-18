/**
 * Actions of Employee container.
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


export const PERFORM_SEND_EMAIL = 'EMPLOYEE_CONTAINER_PERFORM_SEND_EMAIL'

export const PERFORM_SCHEDULER_OPEN = 'EMPLOYEE_CONTAINER_PERFORM_SCHEDULER_OPEN'

export const PERFORM_POPOVER_PERSON_LIST_SHOW = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_PERSON_LIST_SHOW'

export const PERFORM_POPOVER_PERSON_LIST_HIDE = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_PERSON_LIST_HIDE'

export const PERFORM_FIND_PEOPLE = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE'
export const PERFORM_FIND_PEOPLE_EXECUTE = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_EXECUTE'
export const PERFORM_FIND_PEOPLE_SUCCESS = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_SUCCESS'
export const PERFORM_FIND_PEOPLE_FAILURE = 'EMPLOYEE_CONTAINER_PERFORM_FIND_PEOPLE_FAILURE'

export const NAVIGATE_TO_EMPLOYEE_SCREEN = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_EMPLOYEE_SCREEN'

export const NAVIGATE_TO_CUSTOMER_LIST_SCREEN = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_CUSTOMER_LIST_SCREEN'

export const PERFORM_REFRESH = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH'
export const PERFORM_REFRESH_EXECUTE = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH_EXECUTE'
export const PERFORM_REFRESH_SUCCESS = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH_SUCCESS'
export const PERFORM_REFRESH_FAILURE = 'EMPLOYEE_CONTAINER_PERFORM_REFRESH_FAILURE'

export const REFRESH_CALL_GET_EMPLOYEE = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE'
export const REFRESH_CALL_GET_EMPLOYEE_REQUEST = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_REQUEST'
export const REFRESH_CALL_GET_EMPLOYEE_SUCCESS = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_SUCCESS'
export const REFRESH_CALL_GET_EMPLOYEE_FAILURE = 'EMPLOYEE_CONTAINER_REFRESH_CALL_GET_EMPLOYEE_FAILURE'

export const CALL_GET_CUSTOMER_LIST = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST'
export const CALL_GET_CUSTOMER_LIST_REQUEST = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_REQUEST'
export const CALL_GET_CUSTOMER_LIST_SUCCESS = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_SUCCESS'
export const CALL_GET_CUSTOMER_LIST_FAILURE = 'EMPLOYEE_CONTAINER_CALL_GET_CUSTOMER_LIST_FAILURE'

export const CALL_GET_SUBORDINATE_LIST = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST'
export const CALL_GET_SUBORDINATE_LIST_REQUEST = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_REQUEST'
export const CALL_GET_SUBORDINATE_LIST_SUCCESS = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_SUCCESS'
export const CALL_GET_SUBORDINATE_LIST_FAILURE = 'EMPLOYEE_CONTAINER_CALL_GET_SUBORDINATE_LIST_FAILURE'

export const NAVIGATE_BACK = 'EMPLOYEE_CONTAINER_NAVIGATE_BACK'

export const NAVIGATE_BACK_EMPLOYEE = 'EMPLOYEE_CONTAINER_NAVIGATE_BACK_EMPLOYEE'

export const PERFORM_POPOVER_SUBORDINATE_SHOW = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_SUBORDINATE_SHOW'

export const PERFORM_POPOVER_SUBORDINATE_HIDE = 'EMPLOYEE_CONTAINER_PERFORM_POPOVER_SUBORDINATE_HIDE'

export const PERFORM_CONTAINER_RESET = 'EMPLOYEE_CONTAINER_PERFORM_CONTAINER_RESET'

export const NAVIGATE_POPOVER_BACK = 'EMPLOYEE_CONTAINER_NAVIGATE_POPOVER_BACK'

export const NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER'

export const PERFORM_PERSON_SELECT = 'EMPLOYEE_CONTAINER_PERFORM_PERSON_SELECT'

export const NAVIGATE_EMPLOYEE_SCREEN_BACK = 'EMPLOYEE_CONTAINER_NAVIGATE_EMPLOYEE_SCREEN_BACK'

export const PERFORM_FLUSH = 'EMPLOYEE_CONTAINER_PERFORM_FLUSH'

export const PERFORM_POPOVER_SUBORDINATE_PHONES_HIDE = 'PERFORM_POPOVER_SUBORDINATE_PHONES_HIDE'

export const PERFORM_POPOVER_SUBORDINATE_PHONES_SHOW = 'PERFORM_POPOVER_SUBORDINATE_PHONES_SHOW'

export const PERFORM_ERROR_MODAL_SHOW = 'PERFORM_ERROR_MODAL_SHOW'

export const PERFORM_ERROR_MODAL_HIDE = 'PERFORM_ERROR_MODAL_HIDE'

export const SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE = 'SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE'

export const NAVIGATE_TO_EMAIL_SCREEN = 'EMPLOYEE_CONTAINER_NAVIGATE_TO_EMAIL_SCREEN'

export const PERFORM_CANCEL_REFRESH_ERROR = 'EMPLOYEE_CONTAINER_PERFORM_CANCEL_REFRESH_ERROR'
export const PERFORM_CANCEL_SUBORDINATE_LIST_ERROR = 'EMPLOYEE_CONTAINER_PERFORM_CANCEL_SUBORDINATE_LIST_ERROR'
export const PERFORM_CANCEL_CUSTOMER_LIST_ERROR = 'EMPLOYEE_CONTAINER_PERFORM_CANCEL_CUSTOMER_LIST_ERROR'
export const PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW = 'EMPLOYEE_CONTAINER_PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW'
export const PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE = 'EMPLOYEE_CONTAINER_PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE'

export const PERFORM_CHECK_CERTIFICATE = 'EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE'
export const PERFORM_CHECK_CERTIFICATE_SUCCESS = 'EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE_SUCCESS'
export const PERFORM_CHECK_CERTIFICATE_FAILED = 'EMPLOYEE_CONTAINER_PERFORM_CHECK_CERTIFICATE_FAILED'

export const CALL_GET_EMPLOYEE_HEAD = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD'
export const CALL_GET_EMPLOYEE_HEAD_REQUEST = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_REQUEST'
export const CALL_GET_EMPLOYEE_HEAD_SUCCESS = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_SUCCESS'
export const CALL_GET_EMPLOYEE_HEAD_FAILURE = 'EMPLOYEE_CONTAINER_CALL_GET_EMPLOYEE_HEAD_FAILURE'

/**
 * Thunk dispatched by "Employee" screen. Fetch current employee with cache flushed.
 *
 */
export type PERFORM_FLUSH = {}
export const performFlush = (): Action<PERFORM_FLUSH> => ({
    type: PERFORM_FLUSH,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk used to send Email to employee address.
 *
 */
export type PERFORM_SEND_EMAIL = {}
export const performSendEmail = (): Action<PERFORM_SEND_EMAIL> => ({
    type: PERFORM_SEND_EMAIL,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk used to show employee scheduler.
 *
 */
export type PERFORM_SCHEDULER_OPEN = {}
export const performSchedulerOpen = (): Action<PERFORM_SCHEDULER_OPEN> => ({
    type: PERFORM_SCHEDULER_OPEN,
    payload: {}
})

/**
 * Internal thunk used in "Employee" container. Thunk chain used to show popover.
 *
 */
export type PERFORM_POPOVER_PERSON_LIST_SHOW = {}
export const performPopoverPersonListShow = (): Action<PERFORM_POPOVER_PERSON_LIST_SHOW> => ({
    type: PERFORM_POPOVER_PERSON_LIST_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_PERSON_LIST_HIDE = {}
export const performPopoverPersonListHide = (): Action<PERFORM_POPOVER_PERSON_LIST_HIDE> => ({
    type: PERFORM_POPOVER_PERSON_LIST_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
 *
 */
export type PERFORM_FIND_PEOPLE = {}
export const performFindPeople = (): Action<PERFORM_FIND_PEOPLE> => ({
    type: PERFORM_FIND_PEOPLE,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performFindPeople" started. Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
 */
export type PERFORM_FIND_PEOPLE_EXECUTE = {}
export const performFindPeopleExecute = (): Action<PERFORM_FIND_PEOPLE_EXECUTE> => ({
    type: PERFORM_FIND_PEOPLE_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performFindPeople". Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
 *
 * @param {ModelsScheduler.PersonList} data Result data of thunk chain.
 */
export type PERFORM_FIND_PEOPLE_SUCCESS = { data: ModelsScheduler.PersonList }
export const performFindPeopleSuccess = (data: ModelsScheduler.PersonList): Action<PERFORM_FIND_PEOPLE_SUCCESS> => ({
    type: PERFORM_FIND_PEOPLE_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performFindPeople". Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_FIND_PEOPLE_FAILURE = { error: Error }
export const performFindPeopleFailure = (error: Error): Action<PERFORM_FIND_PEOPLE_FAILURE> => ({
    type: PERFORM_FIND_PEOPLE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Employee" screen. Thunk used to open Employee.
 *
 * @param {string} employeeId .
 * @param {boolean} isExtendedMode .
 */
export type NAVIGATE_TO_EMPLOYEE_SCREEN = { employeeId: string, isExtendedMode: boolean, currentMode: Enums.EmployeeMode, historyAction: Enums.EmployeeHistoryActions}
export const navigateToEmployeeScreen = (employeeId: string, isExtendedMode: boolean, currentMode: Enums.EmployeeMode, historyAction: Enums.EmployeeHistoryActions = Enums.EmployeeHistoryActions.Push): Action<NAVIGATE_TO_EMPLOYEE_SCREEN> => ({
    type: NAVIGATE_TO_EMPLOYEE_SCREEN,
    payload: {
        employeeId: employeeId,
        isExtendedMode: isExtendedMode,
        currentMode: currentMode,
        historyAction: historyAction
    }
})

/**
 * Thunk dispatched by "Employee" screen. Thunk used to open Employee customer list scnreen.
 *
 */
export type NAVIGATE_TO_CUSTOMER_LIST_SCREEN = {}
export const navigateToCustomerListScreen = (): Action<NAVIGATE_TO_CUSTOMER_LIST_SCREEN> => ({
    type: NAVIGATE_TO_CUSTOMER_LIST_SCREEN,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
 *
 */
export type PERFORM_REFRESH = {}
export const performRefresh = (): Action<PERFORM_REFRESH> => ({
    type: PERFORM_REFRESH,
    payload: {}
})

/*
 * Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
 */
export type PERFORM_REFRESH_EXECUTE = {}
export const performRefreshExecute = (): Action<PERFORM_REFRESH_EXECUTE> => ({
    type: PERFORM_REFRESH_EXECUTE,
    payload: {}
})

/*
 * Action dispatched on success in thunk "performRefresh". Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
 *
 * @param {boolean} data Result data of thunk chain.
 */
export type PERFORM_REFRESH_SUCCESS = { data: boolean }
export const performRefreshSuccess = (data: boolean): Action<PERFORM_REFRESH_SUCCESS> => ({
    type: PERFORM_REFRESH_SUCCESS,
    payload: {
        data: data
    }
})

/*
 * Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
 *
 * @param {Error} error Description of error while executing thunk chain.
 */
export type PERFORM_REFRESH_FAILURE = { error: Error }
export const performRefreshFailure = (error: Error): Action<PERFORM_REFRESH_FAILURE> => ({
    type: PERFORM_REFRESH_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 *
 */
export type REFRESH_CALL_GET_EMPLOYEE = {}
export const refresh_callGetEmployee = (): Action<REFRESH_CALL_GET_EMPLOYEE> => ({
    type: REFRESH_CALL_GET_EMPLOYEE,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "refresh_callGetEmployee" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 */
export type REFRESH_CALL_GET_EMPLOYEE_REQUEST = {}
export const refresh_callGetEmployeeRequest = (): Action<REFRESH_CALL_GET_EMPLOYEE_REQUEST> => ({
    type: REFRESH_CALL_GET_EMPLOYEE_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "refresh_callGetEmployee". Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 *
 * @param {ModelsApp.Employee} response Data received by fetch.
 */
export type REFRESH_CALL_GET_EMPLOYEE_SUCCESS = { response: Response<ModelsApp.Employee> }
export const refresh_callGetEmployeeSuccess = (response: Response<ModelsApp.Employee>): Action<REFRESH_CALL_GET_EMPLOYEE_SUCCESS> => ({
    type: REFRESH_CALL_GET_EMPLOYEE_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "refresh_callGetEmployee". Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type REFRESH_CALL_GET_EMPLOYEE_FAILURE = { error: Error }
export const refresh_callGetEmployeeFailure = (error: Error): Action<REFRESH_CALL_GET_EMPLOYEE_FAILURE> => ({
    type: REFRESH_CALL_GET_EMPLOYEE_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 *
 */
export type CALL_GET_CUSTOMER_LIST = {}
export const callGetCustomerList = (): Action<CALL_GET_CUSTOMER_LIST> => ({
    type: CALL_GET_CUSTOMER_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetCustomerList" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 */
export type CALL_GET_CUSTOMER_LIST_REQUEST = {}
export const callGetCustomerListRequest = (): Action<CALL_GET_CUSTOMER_LIST_REQUEST> => ({
    type: CALL_GET_CUSTOMER_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetCustomerList". Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 *
 * @param {Models.CustomerList} response Data received by fetch.
 */
export type CALL_GET_CUSTOMER_LIST_SUCCESS = { response: Response<Models.CustomerList> }
export const callGetCustomerListSuccess = (response: Response<Models.CustomerList>): Action<CALL_GET_CUSTOMER_LIST_SUCCESS> => ({
    type: CALL_GET_CUSTOMER_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetCustomerList". Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_CUSTOMER_LIST_FAILURE = { error: Error }
export const callGetCustomerListFailure = (error: Error): Action<CALL_GET_CUSTOMER_LIST_FAILURE> => ({
    type: CALL_GET_CUSTOMER_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 *
 */
export type CALL_GET_SUBORDINATE_LIST = {}
export const callGetSubordinateList = (): Action<CALL_GET_SUBORDINATE_LIST> => ({
    type: CALL_GET_SUBORDINATE_LIST,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetSubordinateList" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 */
export type CALL_GET_SUBORDINATE_LIST_REQUEST = {}
export const callGetSubordinateListRequest = (): Action<CALL_GET_SUBORDINATE_LIST_REQUEST> => ({
    type: CALL_GET_SUBORDINATE_LIST_REQUEST,
    payload: {}
})

/*
 * Action dispatched on fetch succeeded in thunk "callGetSubordinateList". Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 *
 * @param {Models.MemberList} response Data received by fetch.
 */
export type CALL_GET_SUBORDINATE_LIST_SUCCESS = { response: Response<Models.MemberList> }
export const callGetSubordinateListSuccess = (response: Response<Models.MemberList>): Action<CALL_GET_SUBORDINATE_LIST_SUCCESS> => ({
    type: CALL_GET_SUBORDINATE_LIST_SUCCESS,
    payload: {
        response: response
    }
})

/*
 * Action dispatched on fetch failure in thunk "callGetSubordinateList". Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_SUBORDINATE_LIST_FAILURE = { error: Error }
export const callGetSubordinateListFailure = (error: Error): Action<CALL_GET_SUBORDINATE_LIST_FAILURE> => ({
    type: CALL_GET_SUBORDINATE_LIST_FAILURE,
    payload: {
        error: error
    }
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type NAVIGATE_BACK = {}
export const navigateBack = (): Action<NAVIGATE_BACK> => ({
    type: NAVIGATE_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type NAVIGATE_BACK_EMPLOYEE = {}
export const navigateBackEmployee = (): Action<NAVIGATE_BACK_EMPLOYEE> => ({
    type: NAVIGATE_BACK_EMPLOYEE,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to show popover.
 *
 * @param {ModelsApp.Employee} subordinate .
 */
export type PERFORM_POPOVER_SUBORDINATE_SHOW = { subordinate: ModelsApp.Employee }
export const performPopoverSubordinateShow = (subordinate: ModelsApp.Employee): Action<PERFORM_POPOVER_SUBORDINATE_SHOW> => ({
    type: PERFORM_POPOVER_SUBORDINATE_SHOW,
    payload: {
        subordinate: subordinate,
    }
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
 *
 */
export type PERFORM_POPOVER_SUBORDINATE_HIDE = {}
export const performPopoverSubordinateHide = (): Action<PERFORM_POPOVER_SUBORDINATE_HIDE> => ({
    type: PERFORM_POPOVER_SUBORDINATE_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk dispatched to reset container state to default values.
 *
 */
export type PERFORM_CONTAINER_RESET = {}
export const performContainerReset = (): Action<PERFORM_CONTAINER_RESET> => ({
    type: PERFORM_CONTAINER_RESET,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type NAVIGATE_POPOVER_BACK = {}
export const navigatePopoverBack = (): Action<NAVIGATE_POPOVER_BACK> => ({
    type: NAVIGATE_POPOVER_BACK,
    payload: {}
})
/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type NAVIGATE_EMPLOYEE_SCREEN_BACK = {}
export const navigateEmployeeScreenBack = (): Action<NAVIGATE_EMPLOYEE_SCREEN_BACK> => ({
    type: NAVIGATE_EMPLOYEE_SCREEN_BACK,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER = {}
export const navigateToPersonContainerPopover = (): Action<NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER> => ({
    type: NAVIGATE_TO_EMPLOYEE_CONTAINER_POPOVER,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type PERFORM_PERSON_SELECT = { person: ModelsScheduler.Person }
export const performPersonSelect = (person: ModelsScheduler.Person): Action<PERFORM_PERSON_SELECT> => ({
    type: PERFORM_PERSON_SELECT,
    payload: {
        person:person
    }
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to show error modal.
 *
 */
export type PERFORM_ERROR_MODAL_SHOW = {}
export const performErrorModalShow = (): Action<PERFORM_ERROR_MODAL_SHOW> => ({
    type: PERFORM_ERROR_MODAL_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW = {}
export const performCertificateAlertPopoverShow = (): Action<PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW> => ({
    type: PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen.
 *
 */
export type PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE = {}
export const performCertificateAlertPopoverHide = (): Action<PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE> => ({
    type: PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to hide error modal.
 *
 */
export type PERFORM_ERROR_MODAL_HIDE = {}
export const performErrorModalHide = (): Action<PERFORM_ERROR_MODAL_HIDE> => ({
    type: PERFORM_ERROR_MODAL_HIDE,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to set isEmployeeShedulerAvailable to false.
 *
 */
export type SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE = {}
export const setEmployeeShedulerAvailabilityFalse = (): Action<SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE> => ({
    type: SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Thunk chain used to navigate to email screen.
 *
 */
export type NAVIGATE_TO_EMAIL_SCREEN = {}
export const navigateToEmailScreen = (): Action<NAVIGATE_TO_EMAIL_SCREEN> => ({
    type: NAVIGATE_TO_EMAIL_SCREEN,
    payload: {}
})

export type PERFORM_CANCEL_REFRESH_ERROR = {}
export const performCancelRefreshError = (): Action<PERFORM_CANCEL_REFRESH_ERROR> => ({
    type: PERFORM_CANCEL_REFRESH_ERROR,
    payload: {}
})

export type PERFORM_CANCEL_SUBORDINATE_LIST_ERROR = {}
export const performCancelSubordinateListError = (): Action<PERFORM_CANCEL_SUBORDINATE_LIST_ERROR> => ({
    type: PERFORM_CANCEL_SUBORDINATE_LIST_ERROR,
    payload: {}
})

export type PERFORM_CANCEL_CUSTOMER_LIST_ERROR = {}
export const performCancelCustomerListError = (): Action<PERFORM_CANCEL_CUSTOMER_LIST_ERROR> => ({
    type: PERFORM_CANCEL_CUSTOMER_LIST_ERROR,
    payload: {}
})


export type PERFORM_CHECK_CERTIFICATE = {  }
export const performCheckCertificate = (): Action<PERFORM_CHECK_CERTIFICATE> => ({
    type: PERFORM_CHECK_CERTIFICATE,
    payload: {}
})

export type PERFORM_CHECK_CERTIFICATE_SUCCESS = {  }
export const performCheckCertificateSuccess = (): Action<PERFORM_CHECK_CERTIFICATE_SUCCESS> => ({
    type: PERFORM_CHECK_CERTIFICATE_SUCCESS,
    payload: {}
})

export type PERFORM_CHECK_CERTIFICATE_FAILED = {  }
export const performCheckCertificateFailed = (): Action<PERFORM_CHECK_CERTIFICATE_FAILED> => ({
    type: PERFORM_CHECK_CERTIFICATE_FAILED,
    payload: {}
})

/**
 * Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 *
 */
export type CALL_GET_EMPLOYEE_HEAD = {}
export const callGetEmployeeHead = (): Action<CALL_GET_EMPLOYEE_HEAD> => ({
    type: CALL_GET_EMPLOYEE_HEAD,
    payload: {}
})

/**
 * Action dispatched on network thunk chain "callGetEmployeeHead" started. Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 */
export type CALL_GET_EMPLOYEE_HEAD_REQUEST = {}
export const callGetEmployeeHeadRequest = (): Action<CALL_GET_EMPLOYEE_HEAD_REQUEST> => ({
    type: CALL_GET_EMPLOYEE_HEAD_REQUEST,
    payload: {}
})

/**
 * Action dispatched on fetch succeeded in thunk "callGetEmployeeHead". Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 *
 * @param {ModelsApp.Employee} response Data received by fetch.
 */
export type CALL_GET_EMPLOYEE_HEAD_SUCCESS = { response: Response<ModelsApp.Employee> }
export const callGetEmployeeHeadSuccess = (response: Response<ModelsApp.Employee>): Action<CALL_GET_EMPLOYEE_HEAD_SUCCESS> => ({
    type: CALL_GET_EMPLOYEE_HEAD_SUCCESS,
    payload: {
        response,
    }
})

/**
 * Action dispatched on fetch failure in thunk "callGetEmployeeHead". Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
 *
 * @param {Error} error Description of error while receiving data by fetch.
 */
export type CALL_GET_EMPLOYEE_HEAD_FAILURE = { error: Error }
export const callGetEmployeeHeadFailure = (error: Error): Action<CALL_GET_EMPLOYEE_HEAD_FAILURE> => ({
    type: CALL_GET_EMPLOYEE_HEAD_FAILURE,
    payload: {
        error,
    }
})
