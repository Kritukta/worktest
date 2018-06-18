/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import {defaultValues} from "../models/Models"
import * as actionsCustomerDashboard from '../actions/ActionsCustomerDashboard'
import * as ModelsCustomerDashboard from "../models/ModelsCustomerDashboard"
import Action from "../models/Action"

import * as util from '../common/Util'


const reducerCustomerDashboard = handleActions<ModelsCustomerDashboard.ICustomerDashboardState>({
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to clear foundPersonList prop.
    [actionsCustomerDashboard.FOUND_PERSON_LIST_CLEAR]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.FOUND_PERSON_LIST_CLEAR>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            foundPersonList: {data: []},
        }
    },


    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update shareData prop.
    [actionsCustomerDashboard.SHARE_DATA_REFRESH]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SHARE_DATA_REFRESH>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentQlikMessage: action.payload.message,
        }
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update recipients prop.
    [actionsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            inputSharePopoverSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update recipients prop.
    [actionsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentRecipientList: action.payload.value,
        }
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update representation prop.
    [actionsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentRepresentation: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to update fileFormat prop.
    [actionsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentFileFormat: action.payload.value,
        }
    },
    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_BACK]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_BACK>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate recipients page in popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate representation page in popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to navigate format file page in popover.
    [actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to show popover.
    [actionsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_POPOVER_SHARE_SHOW>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            isVisiblePopoverShare: true,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to hide popover.
    [actionsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_POPOVER_SHARE_HIDE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            isVisiblePopoverShare: false,
            sendSuccess: false,
            sendFetching: false,
            sendError: null,
            currentRecipientList: { data: [] },
            foundPersonList: { data: [] },
            inputSharePopoverSearch: ''
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on analytics tab open.
    [actionsCustomerDashboard.PERFORM_APPLICATION_INIT]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_APPLICATION_INIT>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentRecipientList: { data: [] },
            inputSharePopoverSearch: ''
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched to handle Qlik error.
    [actionsCustomerDashboard.HANDLE_QLIK_ERROR]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.HANDLE_QLIK_ERROR>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            qlikError: action.payload.error,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_REQUEST]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<void>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            qlikAvailabilityCheckFetching: true,
            qlikAvailabilityCheckError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callQlikAvailabilityCheck". Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_SUCCESS]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_SUCCESS>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            qlikAvailabilityCheck: action.payload.response.data,
            qlikAvailabilityCheckCachedDate: action.payload.response.cachedDate,
            qlikAvailabilityCheckFetching: false,
            qlikAvailabilityCheckError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callQlikAvailabilityCheck". Thunk dispatched by "CustomerDashboard" screen. Check Qlik service availability.
    [actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_FAILURE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.CALL_QLIK_AVAILABILITY_CHECK_FAILURE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            qlikAvailabilityCheckFetching: false,
            qlikAvailabilityCheckError: action.payload.error,
            qlikError: action.payload.error,
        }
    },

    // Internal thunk used in "CustomerDashboard" container. Thunk chain dispatched to set context parameters.
    [actionsCustomerDashboard.SWAP_CONTEXT]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SWAP_CONTEXT>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentCustomerManaged: {...action.payload.customerManaged},
            currentUser: {...action.payload.user},
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
    [actionsCustomerDashboard.PERFORM_QLIK_EVENT]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_QLIK_EVENT>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentQlikMessage: action.payload.message,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk chain dispatched on QlikView event.
    [actionsCustomerDashboard.UNKNOWN_QLIK_EVENT]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.UNKNOWN_QLIK_EVENT>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomerDashboard.PERFORM_CONTAINER_RESET]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_CONTAINER_RESET>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...ModelsCustomerDashboard.initialState.state,
        }
    },


    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set sup parametersto state .
    [actionsCustomerDashboard.PERFORM_UPDATE_SUP_PARAMETERS]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_UPDATE_SUP_PARAMETERS>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            supParameters: action.payload.params
        }
    },

    // Thunk dispatched by "CustomerDashboard" screen. Thunk dispatched to set qlik url value.
    [actionsCustomerDashboard.SET_CURRENT_QLIK_URL]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SET_CURRENT_QLIK_URL>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            currentQlikUrl: action.payload.url
        }
    },
    [actionsCustomerDashboard.PERFORM_ADD_PERSON_HISTORY_LIST]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_ADD_PERSON_HISTORY_LIST>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            personHistoryList: util.personHistoryListAppend(state.personHistoryList, action.payload.data),

        }
    },

    [actionsCustomerDashboard.PERFORM_CLEAR_PERSON_HISTORY_LIST]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_CLEAR_PERSON_HISTORY_LIST>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            personHistoryList: defaultValues.personHistoryList,
        }
    },

    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            //personHistoryList: action.payload.data,
        }
    },

    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            personHistoryListInProgress: true,
            personHistoryListError: null,
        }
    },

    // Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to recover search history list data.
    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            personHistoryList: action.payload.data,
            personHistoryListInProgress: false,
            personHistoryListError: null,
        }
    },
    // Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "CustomerDashboard" screen. Thunk chain used to recover search history list data.
    [actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            personHistoryListInProgress: false,
            personHistoryListError: action.payload.error,
        }
    },

    [actionsCustomerDashboard.PERFORM_PERSIST_PERSON_HISTORY_LIST]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_PERSIST_PERSON_HISTORY_LIST>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },
    // Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performFindPeople" started. Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_EXECUTE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<void>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            foundPersonListInProgress: true,
            foundPersonListError: null,
        }
    },
    // Action dispatched on success in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_SUCCESS]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_SUCCESS>) => {
        return {
            ...state,
            foundPersonList: action.payload.data,
            foundPersonListInProgress: false,
            foundPersonListError: null,
        }
    },
    // Action dispatched on failure in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_FAILURE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_FIND_PERSON_LIST_FAILURE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            foundPersonListInProgress: false,
            foundPersonListError: action.payload.error,
        }
    },

    // Thunk used to send data to nprinting.
    [actionsCustomerDashboard.PERFORM_SEND]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.PERFORM_SEND>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    [actionsCustomerDashboard.CALL_SEND_FILE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.CALL_SEND_FILE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performSend" started.
    [actionsCustomerDashboard.CALL_SEND_FILE_EXECUTE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<void>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            sendSuccess: false,
            sendFetching: true,
            sendError: null,
        }
    },
    // Action dispatched on success in thunk "performSend".
    [actionsCustomerDashboard.CALL_SEND_FILE_SUCCESS]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.CALL_SEND_FILE_SUCCESS>) => {
        return {
            ...state,
            sendSuccess: true,
            sendFetching: false,
            sendError: null,
        }
    },
    // Action dispatched on failure in thunk "performSend".
    [actionsCustomerDashboard.CALL_SEND_FILE_FAILURE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.CALL_SEND_FILE_FAILURE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            sendSuccess: false,
            sendFetching: false,
            sendError: action.payload.error,
        }
    },
    // Action dispatched by "CustomerDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to true.
    [actionsCustomerDashboard.SET_POPOVER_SEARCH_SCREEN_SHOW]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SET_POPOVER_SEARCH_SCREEN_SHOW>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            isPopoverVisibleSearchScreen: true,
        }
    },
    // Action dispatched by "CustomerDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to false.
    [actionsCustomerDashboard.SET_POPOVER_SEARCH_SCREEN_HIDE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SET_POPOVER_SEARCH_SCREEN_HIDE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            isPopoverVisibleSearchScreen: false,
        }
    },
    // Action dispatched to cut top on QlikView.
    [actionsCustomerDashboard.SET_TRIMMED_TOP]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SET_TRIMMED_TOP>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            isTrimmedTop: action.payload.value,
        }
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik cookie value.
    [actionsCustomerDashboard.SET_QLIK_COOKIE]: (state: ModelsCustomerDashboard.ICustomerDashboardState, action: Action<actionsCustomerDashboard.SET_QLIK_COOKIE>): ModelsCustomerDashboard.ICustomerDashboardState => {
        return {
            ...state,
            qlikCookie: action.payload.cookie,
        }
    },


}, ModelsCustomerDashboard.initialState.state)

export default reducerCustomerDashboard
