/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsAppDashboard from '../actions/ActionsAppDashboard'
import {defaultValues} from "../models/Models"
import {EnumsCrm} from "mrmkmcib-crm"
import * as ModelsAppDashboard from "../models/ModelsAppDashboard"
import Action from "../models/Action"

import * as util from '../common/Util'


const reducerAppDashboard = handleActions<ModelsAppDashboard.IAppDashboardState>({

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear foundPersonList prop.
    [actionsAppDashboard.FOUND_PERSON_LIST_CLEAR]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.FOUND_PERSON_LIST_CLEAR>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            foundPersonList: {data: []},
        }
    },


    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update recipients prop.
    [actionsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.INPUT_SHARE_POPOVER_SEARCH_REFRESH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            inputSharePopoverSearch: action.payload.value,
        }
    },


    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update recipients prop.
    [actionsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.INPUT_CURRENT_RECIPIENT_LIST_REFRESH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentRecipientList: action.payload.value,
        }
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update representation prop.
    [actionsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.INPUT_CURRENT_REPRESENTATION_REFRESH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentRepresentation: action.payload.value,
            currentFileFormat: action.payload.fileFormat
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to update fileFormat prop.
    [actionsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.INPUT_CURRENT_FILE_FORMAT_REFRESH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentFileFormat: action.payload.value,
        }
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_BACK]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_BACK>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate recipients page in popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_RECIPIENTS_SCREEN>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate representation page in popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_REPRESENTATION_SCREEN>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to navigate format file page in popover.
    [actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.NAVIGATE_TO_POPOVER_SHARE_FORMAT_SCREEN>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to show popover.
    [actionsAppDashboard.PERFORM_POPOVER_SHARE_SHOW]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_POPOVER_SHARE_SHOW>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isVisiblePopoverShare: true,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to hide popover.
    [actionsAppDashboard.PERFORM_POPOVER_SHARE_HIDE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_POPOVER_SHARE_HIDE>): ModelsAppDashboard.IAppDashboardState => {
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

    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to init Dashboard mobile application.
    [actionsAppDashboard.PERFORM_APPLICATION_INIT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_APPLICATION_INIT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentRecipientList: { data: [] },
            inputSharePopoverSearch: ''
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched to handle Qlik error.
    [actionsAppDashboard.HANDLE_QLIK_ERROR]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.HANDLE_QLIK_ERROR>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            qlikError: action.payload.error,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callQlikAvailabilityCheck" started. Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_REQUEST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            qlikAvailabilityCheckFetching: true,
            qlikAvailabilityCheckError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callQlikAvailabilityCheck". Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            qlikAvailabilityCheck: true,
            qlikAvailabilityCheckCachedDate: new Date(),
            qlikAvailabilityCheckFetching: false,
            qlikAvailabilityCheckError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callQlikAvailabilityCheck". Thunk dispatched by "AppDashboard" screen. Check Qlik service availability.
    [actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.CALL_QLIK_AVAILABILITY_CHECK_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            qlikAvailabilityCheckFetching: false,
            qlikAvailabilityCheckError: action.payload.error,
            qlikError: action.payload.error,
        }
    },

    // Internal thunk used in "AppDashboard" container. Thunk chain dispatched to set context parameters.
    [actionsAppDashboard.SWAP_CONTEXT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SWAP_CONTEXT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentUser: {...action.payload.user},
            appBuildVersion: action.payload.appBuildVersion,
            appServerUrl: action.payload.appServerUrl,
            appServerPath: action.payload.appServerPath,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search mode changed.
    [actionsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_INPUT_SEARCH_CUSTOMER_MANAGED>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isSearchCustomerManaged: action.payload.value,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to enter search mode
    [actionsAppDashboard.PERFORM_SEARCH_MODE_ENABLE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_MODE_ENABLE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isSearchMode: true,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to exit search mode
    [actionsAppDashboard.PERFORM_SEARCH_MODE_DISABLE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_MODE_DISABLE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isSearchMode: false,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched on search input changed.
    [actionsAppDashboard.PERFORM_INPUT_SEARCH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_INPUT_SEARCH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            inputSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to reset search parameters.
    [actionsAppDashboard.PERFORM_SEARCH_RESET]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_RESET>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            inputSearch: '',
            customerSearchType: EnumsCrm.CustomerSearchType.Name,
        }
    },

    // Internal thunk used in "AppDashboard" container. Thunk chain used to reset search parameters.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_RESET]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_RESET>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentSearchPage: 0,
            customerSearchList: defaultValues.CustomerList,
            customerSearchError: '',
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            inputSearch: state.inputSearch.trim(),
        }
    },

    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH_EXECUTE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchInProgress: true,
            searchError: null,
        }
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            search: action.payload.data,
            searchInProgress: false,
            searchError: null,
        }
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform search query.
    [actionsAppDashboard.PERFORM_SEARCH_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchInProgress: false,
            searchError: action.payload.error,
        }
    },

    // Action dispatched on abort search. Thunk dispatched by "AppDashboard" screen. Thunk chain used to perform abort search.
    [actionsAppDashboard.PERFORM_SEARCH_ABORT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_ABORT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchInProgress: false,
            searchError: null,
        }
    },

    // Internal thunk used in "AppDashboard" container. Thunk used to perform search query validation and search type determination.
    [actionsAppDashboard.SEARCH_VALIDATE_SEARCH]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_VALIDATE_SEARCH>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isSearchError: state.inputSearch.length < 3,
            customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '',
            customerSearchType: util.getCustomerSearchType(state.inputSearch),
        }
    },

    // Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchListFetching: true,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchList: action.payload.response.data,
            customerSearchListCachedDate: action.payload.response.cachedDate,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: action.payload.error,
        }
    },

    // Action dispatched on abort search in thunk "search_callGetCustomerSearchList". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_ABORT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentSearchPage: state.currentSearchPage + 1,
        }
    },

    // Action dispatched on thunk chain "performCustomerSearchListAppend" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_EXECUTE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchAppendInProgress: true,
            searchAppendError: null,
        }
    },
    // Action dispatched on success in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchAppend: action.payload.data,
            searchAppendInProgress: false,
            searchAppendError: null,
        }
    },
    // Action dispatched on failure in thunk "performCustomerSearchListAppend". Thunk dispatched by "AppDashboard" screen. Thunk chain used to load next page and append customer search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CUSTOMER_SEARCH_LIST_APPEND_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchAppendInProgress: false,
            searchAppendError: action.payload.error,
        }
    },

    // Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "searchAppend_callGetCustomerSearchListPage" started. Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_REQUEST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchListPageFetching: true,
            customerSearchListPageError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchListPage: action.payload.response.data,
            customerSearchListPageCachedDate: action.payload.response.cachedDate,
            customerSearchListPageFetching: false,
            customerSearchListPageError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "searchAppend_callGetCustomerSearchListPage". Internal thunk used in "AppDashboard" container. Fetch customer list current page with search parameters.
    [actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchListPageFetching: false,
            customerSearchListPageError: action.payload.error,
        }
    },

    // Internal thunk used in "AppDashboard" container. Thunk chain used to concat next page and append customer search list.
    [actionsAppDashboard.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SEARCH_APPEND_CUSTOMER_SEARCH_LIST_CONCAT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            customerSearchList: {
                ...state.customerSearchList,
                data: state.customerSearchList.data.concat(state.customerSearchListPage.data),
                isCompleted: state.customerSearchListPage.isLast == true
            },
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain dispatched on QlikView event.
    [actionsAppDashboard.PERFORM_QLIK_EVENT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_QLIK_EVENT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentQlikMessage: action.payload.message,
            currentFileFormat: action.payload.message.payload.defaultFileFormat
        }
    },

    [actionsAppDashboard.UNKNOWN_QLIK_EVENT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.UNKNOWN_QLIK_EVENT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },


    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to open customer from search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_SELECT]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CUSTOMER_SELECT>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchHistoryList: util.searchHistoryListAppend(state.searchHistoryList, action.payload.customer),
        }
    },

    [actionsAppDashboard.PERFORM_ADD_PERSON_HISTORY_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_ADD_PERSON_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            personHistoryList: util.personHistoryListAppend(state.personHistoryList, action.payload.data),

        }
    },

    [actionsAppDashboard.PERFORM_CLEAR_PERSON_HISTORY_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CLEAR_PERSON_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            personHistoryList: defaultValues.personHistoryList,
        }
    },

    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            //personHistoryList: action.payload.data,
        }
    },

    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_EXECUTE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            personHistoryListInProgress: true,
            personHistoryListError: null,
        }
    },

    // Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            personHistoryList: action.payload.data,
            personHistoryListInProgress: false,
            personHistoryListError: null,
        }
    },
    // Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_RECOVER_PERSON_HISTORY_LIST_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            personHistoryListInProgress: false,
            personHistoryListError: action.payload.error,
        }
    },

    [actionsAppDashboard.PERFORM_PERSIST_PERSON_HISTORY_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_PERSIST_PERSON_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Internal thunk used in "AppDashboard" container. Thunk chain used to open customer from search list.
    [actionsAppDashboard.PERFORM_CUSTOMER_OPEN]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CUSTOMER_OPEN>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to clear customer search history list.
    [actionsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEARCH_HISTORY_LIST_CLEAR>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchHistoryList: defaultValues.SearchHistoryList,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to persist search history list data.
    [actionsAppDashboard.PERSIST_SEARCH_HISTORY_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERSIST_SEARCH_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "recoverSearchHistoryList" started. Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_EXECUTE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchHistoryListInProgress: true,
            searchHistoryListError: null,
        }
    },
    // Action dispatched on success in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_SUCCESS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchHistoryList: action.payload.data,
            searchHistoryListInProgress: false,
            searchHistoryListError: null,
        }
    },
    // Action dispatched on failure in thunk "recoverSearchHistoryList". Thunk dispatched by "AppDashboard" screen. Thunk chain used to recover search history list data.
    [actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.RECOVER_SEARCH_HISTORY_LIST_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            searchHistoryListInProgress: false,
            searchHistoryListError: action.payload.error,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to reset container state to default values.
    [actionsAppDashboard.PERFORM_CONTAINER_RESET]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_CONTAINER_RESET>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...ModelsAppDashboard.initialState.state,
        }
    },

    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set sup parametersto state .
    [actionsAppDashboard.PERFORM_UPDATE_SUP_PARAMETERS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_UPDATE_SUP_PARAMETERS>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            supParameters: action.payload.params
        }
    },



    // Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_FIND_PERSON_LIST>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performFindPeople" started. Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST_EXECUTE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            foundPersonListInProgress: true,
            foundPersonListError: null,
        }
    },
    // Action dispatched on success in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_FIND_PERSON_LIST_SUCCESS>) => {
    return {
        ...state,
        foundPersonList: action.payload.data,
        foundPersonListInProgress: false,
        foundPersonListError: null,
    }
},
    // Action dispatched on failure in thunk "performFindPeople". Thunk used to find people via OWA.
    [actionsAppDashboard.PERFORM_FIND_PERSON_LIST_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_FIND_PERSON_LIST_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            foundPersonListInProgress: false,
            foundPersonListError: action.payload.error,
        }
    },

    // Thunk used to send data to nprinting.
    [actionsAppDashboard.PERFORM_SEND]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.PERFORM_SEND>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    [actionsAppDashboard.CALL_SEND_FILE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.CALL_SEND_FILE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
        }
    },

    // Action dispatched on thunk chain "performSend" started.
    [actionsAppDashboard.CALL_SEND_FILE_EXECUTE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<void>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            sendSuccess: false,
            sendFetching: true,
            sendError: null,
        }
    },
    // Action dispatched on success in thunk "performSend".
    [actionsAppDashboard.CALL_SEND_FILE_SUCCESS]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.CALL_SEND_FILE_SUCCESS>) => {
        return {
            ...state,
            sendSuccess: true,
            sendFetching: false,
            sendError: null,
        }
    },
    // Action dispatched on failure in thunk "performSend".
    [actionsAppDashboard.CALL_SEND_FILE_FAILURE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.CALL_SEND_FILE_FAILURE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            sendSuccess: false,
            sendFetching: false,
            sendError: action.payload.error,
        }
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik url value.
    [actionsAppDashboard.SET_CURRENT_QLIK_URL]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SET_CURRENT_QLIK_URL>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            currentQlikUrl: action.payload.url,
        }
    },
    // Action dispatched by "AppDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to true.
    [actionsAppDashboard.SET_POPOVER_SEARCH_SCREEN_SHOW]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SET_POPOVER_SEARCH_SCREEN_SHOW>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isPopoverVisibleSearchScreen: true,
        }
    },
    // Action dispatched by "AppDashboard" screen. Thunk dispatched to set isPopoverVisibleSearchScreen to false.
    [actionsAppDashboard.SET_POPOVER_SEARCH_SCREEN_HIDE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SET_POPOVER_SEARCH_SCREEN_HIDE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            isPopoverVisibleSearchScreen: false,
        }
    },
    // Thunk dispatched by "AppDashboard" screen. Thunk dispatched to set qlik cookie value.
    [actionsAppDashboard.SET_QLIK_COOKIE]: (state: ModelsAppDashboard.IAppDashboardState, action: Action<actionsAppDashboard.SET_QLIK_COOKIE>): ModelsAppDashboard.IAppDashboardState => {
        return {
            ...state,
            qlikCookie: action.payload.cookie,
        }
    },



}, ModelsAppDashboard.initialState.state)

export default reducerAppDashboard
