/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsCustomerActivityInclude from '../actions/ActionsCustomerActivityInclude'
import {defaultValues} from "../models/Models"
import * as ModelsCustomerActivityInclude from "../models/ModelsCustomerActivityInclude"
import Action from "../models/Action"

import * as util from '../common/Util'


const reducerCustomerActivityInclude = handleActions<ModelsCustomerActivityInclude.ICustomerActivityIncludeState>({

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to show customer picker screen.
    [actionsCustomerActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input switch changed.
    [actionsCustomerActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputSearchManagedOnly: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on search input changed.
    [actionsCustomerActivityInclude.PERFORM_INPUT_SEARCH]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_INPUT_SEARCH>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to reset search parameters.
    [actionsCustomerActivityInclude.PERFORM_SEARCH_RESET]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SEARCH_RESET>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputSearch: '',
            customerSearchList: defaultValues.CustomerList,
            customerSearchError: '',
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityInclude.PERFORM_SEARCH]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SEARCH>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputSearch: state.inputSearch.replace(/\s+/g," "),
        }
    },

    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityInclude.PERFORM_SEARCH_EXECUTE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<void>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            searchInProgress: true,
            searchError: null,
        }
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityInclude.PERFORM_SEARCH_SUCCESS]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SEARCH_SUCCESS>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            search: action.payload.data,
            searchInProgress: false,
            searchError: null,
        }
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "CustomerActivityInclude" screen. Thunk chain used to perform search query.
    [actionsCustomerActivityInclude.PERFORM_SEARCH_FAILURE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SEARCH_FAILURE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            searchInProgress: false,
            searchError: action.payload.error,
        }
    },

    // Internal thunk used in "CustomerActivityInclude" container. Thunk used to perform search query validation and search type determination.
    [actionsCustomerActivityInclude.SEARCH_VALIDATE_SEARCH]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.SEARCH_VALIDATE_SEARCH>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            isSearchError: state.inputSearch.length < 3,
            customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '',
        }
    },

    // Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<void>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            customerSearchListFetching: true,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            customerSearchList: action.payload.response.data,
            customerSearchListCachedDate: action.payload.response.cachedDate,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "CustomerActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: action.payload.error,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Customer field.
    [actionsCustomerActivityInclude.PERFORM_INPUT_CUSTOMER]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_INPUT_CUSTOMER>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputCustomer: action.payload.customer,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
    [actionsCustomerActivityInclude.CALL_GET_CUSTOMER]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.CALL_GET_CUSTOMER>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callGetCustomer" started. Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
    [actionsCustomerActivityInclude.CALL_GET_CUSTOMER_REQUEST]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<void>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputCustomerFetching: true,
            inputCustomerError: null,
        }
    },
    // Thunk dispatched by "Activity" screen. Thunk used to change display error model activity.
    [actionsCustomerActivityInclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_CHANGE_DISPLAY_ERROR_MODAL_WINDOW>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            isVisibleErrorModalWindow: action.payload.value,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
    [actionsCustomerActivityInclude.CALL_GET_CUSTOMER_SUCCESS]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.CALL_GET_CUSTOMER_SUCCESS>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputCustomer: action.payload.response.data,
            inputCustomerCachedDate: action.payload.response.cachedDate,
            inputCustomerFetching: false,
            inputCustomerError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callGetCustomer". Thunk dispatched by "CustomerActivityInclude" screen. Fetch selected customer data.
    [actionsCustomerActivityInclude.CALL_GET_CUSTOMER_FAILURE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.CALL_GET_CUSTOMER_FAILURE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputCustomerFetching: false,
            inputCustomerError: action.payload.error,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched on user input Comment field.
    [actionsCustomerActivityInclude.PERFORM_INPUT_COMMENT]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_INPUT_COMMENT>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            inputComment: action.payload.value,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to cancel changes.
    [actionsCustomerActivityInclude.PERFORM_CANCEL]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_CANCEL>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityInclude.PERFORM_SAVE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SAVE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
        }
    },

    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityInclude.PERFORM_SAVE_EXECUTE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<void>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            activitySaveInProgress: true,
            activitySaveError: null,
        }
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityInclude.PERFORM_SAVE_SUCCESS]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SAVE_SUCCESS>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            activitySave: action.payload.data,
            activitySaveInProgress: false,
            activitySaveError: null,
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "CustomerActivityInclude" screen. Thunk used to confirm changes.
    [actionsCustomerActivityInclude.PERFORM_SAVE_FAILURE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_SAVE_FAILURE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            activitySaveInProgress: false,
            activitySaveError: action.payload.error,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
    [actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPostCustomerActivityIncludeCreate" started. Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
    [actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_REQUEST]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<void>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            activityIncludeCreateFetching: true,
            activityIncludeCreateError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPostCustomerActivityIncludeCreate". Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
    [actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_SUCCESS>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            activityIncludeCreate: action.payload.response.data,
            activityIncludeCreateCachedDate: action.payload.response.cachedDate,
            activityIncludeCreateFetching: false,
            activityIncludeCreateError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPostCustomerActivityIncludeCreate". Thunk dispatched by "CustomerActivityInclude" screen. Fetch post request.
    [actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.CALL_POST_CUSTOMER_ACTIVITY_INCLUDE_CREATE_FAILURE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            activityIncludeCreateFetching: false,
            activityIncludeCreateError: action.payload.error,
        }
    },

    // Internal thunk used in "CustomerActivityInclude" container. Thunk used to confirm changes.
    [actionsCustomerActivityInclude.PERFORM_VALIDATE]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_VALIDATE>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
            customerActivityIncludeValidationComment: util.customerActivityIncludeValidationComment(state.inputComment, action.payload.currentUser),
            customerActivityIncludeValidationCustomer: util.customerActivityIncludeValidationCustomer(state.inputCustomer, action.payload.currentUser, action.payload.currentCustomerManaged, action.payload.currentCustomer),
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. 
    [actionsCustomerActivityInclude.NAVIGATE_BACK]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.NAVIGATE_BACK>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "CustomerActivityInclude" screen. Thunk dispatched to reset container state to default values.
    [actionsCustomerActivityInclude.PERFORM_CONTAINER_RESET]: (state: ModelsCustomerActivityInclude.ICustomerActivityIncludeState, action: Action<actionsCustomerActivityInclude.PERFORM_CONTAINER_RESET>): ModelsCustomerActivityInclude.ICustomerActivityIncludeState => {
        return {
            ...ModelsCustomerActivityInclude.initialState.state,
        }
    },


}, ModelsCustomerActivityInclude.initialState.state)

export default reducerCustomerActivityInclude