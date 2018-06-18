/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsCustomerActivityExclude from '../actions/ActionsCustomerActivityExclude'
import {defaultValues} from "../models/Models"
import * as ModelsCustomerActivityExclude from "../models/ModelsCustomerActivityExclude"
import Action from "../models/Action"

import * as util from '../common/Util'


const reducerCustomerActivityExclude = handleActions<ModelsCustomerActivityExclude.ICustomerActivityExcludeState>({

    // Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
        }
    },
    
    // Thunk dispatched by "Activity" screen. Thunk used to change display error model activity.
    [actionsCustomerActivityExclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            isVisibleErrorModalWindow: action.payload.value,
        }
    },
    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityExclude.PERFORM_SEARCH_EXECUTE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<void>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            searchInProgress: true,
            searchError: null,
        }
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityExclude.PERFORM_SEARCH_FAILURE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_SEARCH_FAILURE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            searchInProgress: false,
            searchError: action.payload.error,
        }
    },

    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<void>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            customerSearchListFetching: true,
            customerSearchListError: null,
            searchError: null
        }
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            customerSearchList: action.payload.response.data,
            customerSearchListCachedDate: action.payload.response.cachedDate,
            customerSearchListFetching: false,
            customerSearchListError: null,
            searchError: null
        }
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: action.payload.error,
        }
    },
    // Internal thunk used in "CustomerActivityInclude" container. Thunk used to perform search query validation and search type determination.
    [actionsCustomerActivityExclude.SEARCH_VALIDATE_SEARCH]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.SEARCH_VALIDATE_SEARCH>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            isSearchError: state.inputSearch.length < 3,
            customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '',
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to show customer picker screen.
    [actionsCustomerActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on search input switch changed.
    [actionsCustomerActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputSearchManagedOnly: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on search input changed.
    [actionsCustomerActivityExclude.PERFORM_INPUT_SEARCH]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_INPUT_SEARCH>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to reset search parameters.
    [actionsCustomerActivityExclude.PERFORM_SEARCH_RESET]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_SEARCH_RESET>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputSearch: '',
            customerSearchList: defaultValues.CustomerList,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk chain used to perform search.
    [actionsCustomerActivityExclude.PERFORM_SEARCH]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_SEARCH>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputSearch: state.inputSearch.replace(/\s+/g," "),
            customerSearchList: defaultValues.CustomerList,
        }
    },

    // Internal thunk used in "CustomerActivityExclude" container. Thunk chain used to perform search.
    [actionsCustomerActivityExclude.FILTER_CUSTOMER_LIST]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.FILTER_CUSTOMER_LIST>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            customerSearchList: util.customerActivityExcludeFilterCustomerList(action.payload.inputSearch, action.payload.inputSearchManagedOnly, action.payload.currentCustomerManaged, action.payload.currentCustomer),
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on user input Customer field.
    [actionsCustomerActivityExclude.PERFORM_INPUT_CUSTOMER]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_INPUT_CUSTOMER>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputCustomer: action.payload.customer,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.CALL_GET_CUSTOMER>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCustomer" started. Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER_REQUEST]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<void>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputCustomerFetching: true,
            inputCustomerError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER_SUCCESS]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.CALL_GET_CUSTOMER_SUCCESS>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputCustomer: action.payload.response.data,
            inputCustomerCachedDate: action.payload.response.cachedDate,
            inputCustomerFetching: false,
            inputCustomerError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityExclude" screen. Fetch selected customer data.
    [actionsCustomerActivityExclude.CALL_GET_CUSTOMER_FAILURE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.CALL_GET_CUSTOMER_FAILURE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputCustomerFetching: false,
            inputCustomerError: action.payload.error,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched on user input Comment field.
    [actionsCustomerActivityExclude.PERFORM_INPUT_COMMENT]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_INPUT_COMMENT>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            inputComment: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to cancel changes.
    [actionsCustomerActivityExclude.PERFORM_CANCEL]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_CANCEL>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_SAVE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
        }
    },

    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE_EXECUTE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<void>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            activitySaveInProgress: true,
            activitySaveError: null,
        }
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE_SUCCESS]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_SAVE_SUCCESS>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            activitySave: action.payload.data,
            activitySaveInProgress: false,
            activitySaveError: null,
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "CustomerActivityExclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_SAVE_FAILURE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_SAVE_FAILURE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            activitySaveInProgress: false,
            activitySaveError: action.payload.error,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPostCustomerActivityExcludeCreate" started. Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_REQUEST]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<void>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            activityExcludeCreateFetching: true,
            activityExcludeCreateError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPostCustomerActivityExcludeCreate". Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_SUCCESS]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_SUCCESS>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            activityExcludeCreate: action.payload.response.data,
            activityExcludeCreateCachedDate: action.payload.response.cachedDate,
            activityExcludeCreateFetching: false,
            activityExcludeCreateError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPostCustomerActivityExcludeCreate". Thunk dispatched by "CustomerActivityExclude" screen. Fetch post request.
    [actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_FAILURE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.CALL_POST_CUSTOMER_ACTIVITY_EXCLUDE_CREATE_FAILURE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            activityExcludeCreateFetching: false,
            activityExcludeCreateError: action.payload.error,
        }
    },

    // Internal thunk used in "CustomerActivityExclude" container. Thunk used to confirm changes.
    [actionsCustomerActivityExclude.PERFORM_VALIDATE]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_VALIDATE>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
            customerActivityExcludeValidationComment: util.customerActivityExcludeValidationComment(state.inputComment, action.payload.currentUser),
            customerActivityExcludeValidationCustomer: util.customerActivityExcludeValidationCustomer(state.inputCustomer, action.payload.currentUser, action.payload.currentCustomerManaged, action.payload.currentCustomer),
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. 
    [actionsCustomerActivityExclude.NAVIGATE_BACK]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.NAVIGATE_BACK>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerActivityExclude" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomerActivityExclude.PERFORM_CONTAINER_RESET]: (state: ModelsCustomerActivityExclude.ICustomerActivityExcludeState, action: Action<actionsCustomerActivityExclude.PERFORM_CONTAINER_RESET>): ModelsCustomerActivityExclude.ICustomerActivityExcludeState => {
        return {
            ...ModelsCustomerActivityExclude.initialState.state,
        }
    },


}, ModelsCustomerActivityExclude.initialState.state)

export default reducerCustomerActivityExclude
