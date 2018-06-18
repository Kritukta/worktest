/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsEmployee from '../actions/ActionsEmployee'
import {defaultValues} from "../models/Models"
import * as ModelsEmployee from "../models/ModelsEmployee"
import Action from "../models/Action"
import * as Utils from '../common/Util'

const reducerEmployee = handleActions<ModelsEmployee.IEmployeeState>({

    // Thunk dispatched by "Employee" screen. Thunk used to send Email to employee address.
    [actionsEmployee.PERFORM_SEND_EMAIL]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_SEND_EMAIL>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk used to show employee scheduler.
    [actionsEmployee.PERFORM_SCHEDULER_OPEN]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_SCHEDULER_OPEN>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Internal thunk used in "Employee" container. Thunk chain used to show popover.
    [actionsEmployee.PERFORM_POPOVER_PERSON_LIST_SHOW]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_POPOVER_PERSON_LIST_SHOW>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isVisiblePopoverPersonList: true,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
    [actionsEmployee.PERFORM_POPOVER_PERSON_LIST_HIDE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_POPOVER_PERSON_LIST_HIDE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isVisiblePopoverPersonList: false,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
    [actionsEmployee.PERFORM_FIND_PEOPLE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_FIND_PEOPLE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performFindPeople" started. Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
    [actionsEmployee.PERFORM_FIND_PEOPLE_EXECUTE]: (state: ModelsEmployee.IEmployeeState, action: Action<void>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            foundPeopleListInProgress: true,
            foundPeopleListError: null,
        }
    },
    // Action dispatched on success in thunk "performFindPeople". Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
    [actionsEmployee.PERFORM_FIND_PEOPLE_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_FIND_PEOPLE_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            foundPeopleList: action.payload.data,
            foundPeopleListInProgress: false,
            foundPeopleListError: null,
        }
    },
    // Action dispatched on failure in thunk "performFindPeople". Thunk dispatched by "Employee" screen. Thunk used to find people via OWA.
    [actionsEmployee.PERFORM_FIND_PEOPLE_FAILURE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_FIND_PEOPLE_FAILURE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            foundPeopleListInProgress: false,
            foundPeopleListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk used to open Employee.
    [actionsEmployee.NAVIGATE_TO_EMPLOYEE_SCREEN]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.NAVIGATE_TO_EMPLOYEE_SCREEN>): ModelsEmployee.IEmployeeState => {
        return {
            ...ModelsEmployee.initialState.state,
            currentEmployeeId: action.payload.employeeId,
            isExtendedMode: action.payload.isExtendedMode,
            currentMode: action.payload.currentMode,
            currentEmployee: defaultValues.Employee,
            employeeNavigationHistory: Utils.doEmployeeToHistoryAction({...defaultValues.Employee, id: state.currentEmployeeId},
                state.employeeNavigationHistory, action.payload.historyAction, action.payload.currentMode)
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk used to open Employee customer list scnreen.
    [actionsEmployee.NAVIGATE_TO_CUSTOMER_LIST_SCREEN]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.NAVIGATE_TO_CUSTOMER_LIST_SCREEN>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
    [actionsEmployee.PERFORM_REFRESH]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_REFRESH>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performRefresh" started. Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
    [actionsEmployee.PERFORM_REFRESH_EXECUTE]: (state: ModelsEmployee.IEmployeeState, action: Action<void>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            refreshInProgress: true,
            refreshError: null,
        }
    },
    // Action dispatched on success in thunk "performRefresh". Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
    [actionsEmployee.PERFORM_REFRESH_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_REFRESH_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            refresh: action.payload.data,
            refreshInProgress: false,
            refreshError: null,
        }
    },
    // Action dispatched on failure in thunk "performRefresh". Thunk dispatched by "Employee" screen. Thunk chain used to load Employee data.
    [actionsEmployee.PERFORM_REFRESH_FAILURE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_REFRESH_FAILURE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            refreshInProgress: false,
            refreshError: action.payload.error,
        }
    },

    // Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
    [actionsEmployee.REFRESH_CALL_GET_EMPLOYEE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.REFRESH_CALL_GET_EMPLOYEE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "refresh_callGetEmployee" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
    [actionsEmployee.REFRESH_CALL_GET_EMPLOYEE_REQUEST]: (state: ModelsEmployee.IEmployeeState, action: Action<void>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentEmployeeFetching: true,
            currentEmployeeError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "refresh_callGetEmployee". Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
    [actionsEmployee.REFRESH_CALL_GET_EMPLOYEE_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.REFRESH_CALL_GET_EMPLOYEE_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentEmployee: action.payload.response.data,
            currentEmployeeCachedDate: action.payload.response.cachedDate,
            currentEmployeeFetching: false,
            currentEmployeeError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "refresh_callGetEmployee". Thunk dispatched by "Employee" screen. Fetch currentEmployee with current Id.
    [actionsEmployee.REFRESH_CALL_GET_EMPLOYEE_FAILURE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.REFRESH_CALL_GET_EMPLOYEE_FAILURE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentEmployeeFetching: false,
            currentEmployeeError: action.payload.error,
        }
    },

    // Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
    [actionsEmployee.CALL_GET_CUSTOMER_LIST]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_CUSTOMER_LIST>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCustomerList" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
    [actionsEmployee.CALL_GET_CUSTOMER_LIST_REQUEST]: (state: ModelsEmployee.IEmployeeState, action: Action<void>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            customerListFetching: true,
            customerListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomerList". Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
    [actionsEmployee.CALL_GET_CUSTOMER_LIST_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_CUSTOMER_LIST_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            customerList: action.payload.response.data,
            customerListCachedDate: action.payload.response.cachedDate,
            customerListFetching: false,
            customerListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCustomerList". Thunk dispatched by "Employee" screen. Fetch currentEmployee customer list.
    [actionsEmployee.CALL_GET_CUSTOMER_LIST_FAILURE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_CUSTOMER_LIST_FAILURE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            customerListFetching: false,
            customerListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
    [actionsEmployee.CALL_GET_SUBORDINATE_LIST]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_SUBORDINATE_LIST>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetSubordinateList" started. Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
    [actionsEmployee.CALL_GET_SUBORDINATE_LIST_REQUEST]: (state: ModelsEmployee.IEmployeeState, action: Action<void>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            subordinateListFetching: true,
            subordinateListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetSubordinateList". Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
    [actionsEmployee.CALL_GET_SUBORDINATE_LIST_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_SUBORDINATE_LIST_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            subordinateList: action.payload.response.data,
            subordinateListCachedDate: action.payload.response.cachedDate,
            subordinateListFetching: false,
            subordinateListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetSubordinateList". Thunk dispatched by "Employee" screen. Fetch currentEmployee subordinate list.
    [actionsEmployee.CALL_GET_SUBORDINATE_LIST_FAILURE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_SUBORDINATE_LIST_FAILURE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            subordinateListFetching: false,
            subordinateListError: action.payload.error,
        }
    },

    // Thunk dispatched by "Employee" screen. 
    [actionsEmployee.NAVIGATE_BACK]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.NAVIGATE_BACK>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Employee" screen.
    [actionsEmployee.NAVIGATE_BACK_EMPLOYEE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.NAVIGATE_BACK_EMPLOYEE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to show popover.
    [actionsEmployee.PERFORM_POPOVER_SUBORDINATE_SHOW]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_POPOVER_SUBORDINATE_SHOW>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentSubordinate: action.payload.subordinate,
            isVisiblePopoverSubordinate: true,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to hide popover.
    [actionsEmployee.PERFORM_POPOVER_SUBORDINATE_HIDE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_POPOVER_SUBORDINATE_HIDE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentSubordinate: defaultValues.Employee,
            isVisiblePopoverSubordinate: false,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk dispatched to reset container state to default values.
    [actionsEmployee.PERFORM_CONTAINER_RESET]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CONTAINER_RESET>): ModelsEmployee.IEmployeeState => {
        return {
            ...ModelsEmployee.initialState.state,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to show error modal.
    [actionsEmployee.PERFORM_ERROR_MODAL_SHOW]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_ERROR_MODAL_SHOW>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isVisibleErrorModal: true,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to hide error modal.
    [actionsEmployee.PERFORM_ERROR_MODAL_HIDE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_ERROR_MODAL_HIDE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isVisibleErrorModal: false,
        }
    },

    [actionsEmployee.SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.SET_EMPLOYEE_SCHEDULER_AVAILABILITY_FALSE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isEmployeeShedulerAvailable: false,
        }
    },

    // Thunk dispatched by "Employee" screen. Thunk chain used to navigate to email screen.
    [actionsEmployee.NAVIGATE_TO_EMAIL_SCREEN]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.NAVIGATE_TO_EMAIL_SCREEN>): ModelsEmployee.IEmployeeState => {
        return {
            ...state
        }
    },

    [actionsEmployee.PERFORM_CANCEL_REFRESH_ERROR]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CANCEL_REFRESH_ERROR>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            refreshError: null,
            currentEmployeeError: null,
        }
    },

    [actionsEmployee.PERFORM_CANCEL_SUBORDINATE_LIST_ERROR]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CANCEL_SUBORDINATE_LIST_ERROR>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            subordinateListError: null,
        }
    },

    [actionsEmployee.PERFORM_CANCEL_CUSTOMER_LIST_ERROR]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CANCEL_CUSTOMER_LIST_ERROR>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            customerListError: null,
        }
    },

    [actionsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_SHOW>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isVisibleCertificateAlertPopover: true,
        }
    },

    [actionsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CERTIFICATE_ALERT_POPOVER_HIDE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isVisibleCertificateAlertPopover: false,
        }
    },

    [actionsEmployee.PERFORM_CHECK_CERTIFICATE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CHECK_CERTIFICATE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isValidMailCertificate: null,
        }
    },

    [actionsEmployee.PERFORM_CHECK_CERTIFICATE_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CHECK_CERTIFICATE_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isValidMailCertificate: true,
        }
    },

    [actionsEmployee.PERFORM_CHECK_CERTIFICATE_FAILED]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.PERFORM_CHECK_CERTIFICATE_FAILED>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            isValidMailCertificate: false,
        }
    },

    // Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
    [actionsEmployee.CALL_GET_EMPLOYEE_HEAD]: (state: ModelsEmployee.IEmployeeState): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
        }
    },

    // Action dispatched on network thunk chain "callGetEmployeeHead" started. Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
    [actionsEmployee.CALL_GET_EMPLOYEE_HEAD_REQUEST]: (state: ModelsEmployee.IEmployeeState): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentEmployeeHeadFetching: true,
            currentEmployeeHeadError: null,
        }
    },

    // Action dispatched on fetch succeeded in thunk "callGetEmployeeHead". Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
    [actionsEmployee.CALL_GET_EMPLOYEE_HEAD_SUCCESS]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_EMPLOYEE_HEAD_SUCCESS>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentEmployeeHead: action.payload.response.data,
            currentEmployeeHeadCachedDate: action.payload.response.cachedDate,
            currentEmployeeHeadFetching: false,
            currentEmployeeHeadError: null,
            currentEmployee: {
                ...state.currentEmployee,
                head: action.payload.response.data,
            },
        }
    },

    // Action dispatched on fetch failure in thunk "callGetEmployeeHead". Thunk dispatched by "Employee" screen. Fetch currentEmployeeHead with current headId.
    [actionsEmployee.CALL_GET_EMPLOYEE_HEAD_FAILURE]: (state: ModelsEmployee.IEmployeeState, action: Action<actionsEmployee.CALL_GET_EMPLOYEE_HEAD_FAILURE>): ModelsEmployee.IEmployeeState => {
        return {
            ...state,
            currentEmployeeHeadFetching: false,
            currentEmployeeHeadError: action.payload.error,
            currentEmployee: {
                ...state.currentEmployee,
                head: null,
            },
        }
    },

}, ModelsEmployee.initialState.state)

export default reducerEmployee
