/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsGszActivityInclude from '../actions/ActionsGszActivityInclude'
import {defaultValues} from "../models/Models"
import * as ModelsGszActivityInclude from "../models/ModelsGszActivityInclude"
import Action from "../models/Action"

import * as util from '../common/Util'


const reducerGszActivityInclude = handleActions<ModelsGszActivityInclude.IGszActivityIncludeState>({

    // Thunk dispatched by "GszActivityInclude" screen. Thunk used to show customer picker screen.
    [actionsGszActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.NAVIGATE_TO_CUSTOMER_PICKER_SCREEN>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on search input switch changed.
    [actionsGszActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_INPUT_SEARCH_MANAGED_ONLY>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            inputSearchManagedOnly: action.payload.value,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on search input changed.
    [actionsGszActivityInclude.PERFORM_INPUT_SEARCH]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_INPUT_SEARCH>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            inputSearch: action.payload.value,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to reset search parameters.
    [actionsGszActivityInclude.PERFORM_SEARCH_RESET]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SEARCH_RESET>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            inputSearch: '',
            customerSearchList: defaultValues.CustomerList,
            customerSearchError: '',
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityInclude.PERFORM_SEARCH]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SEARCH>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            inputSearch: state.inputSearch.replace(/\s+/g," "),
        }
    },

    // Action dispatched on thunk chain "performSearch" started. Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityInclude.PERFORM_SEARCH_EXECUTE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<void>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            searchInProgress: true,
            searchError: null,
        }
    },
    // Action dispatched on success in thunk "performSearch". Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityInclude.PERFORM_SEARCH_SUCCESS]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SEARCH_SUCCESS>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            search: action.payload.data,
            searchInProgress: false,
            searchError: null,
        }
    },
    // Action dispatched on failure in thunk "performSearch". Thunk dispatched by "GszActivityInclude" screen. Thunk chain used to perform search query.
    [actionsGszActivityInclude.PERFORM_SEARCH_FAILURE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SEARCH_FAILURE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            searchInProgress: false,
            searchError: action.payload.error,
        }
    },

    // Internal thunk used in "GszActivityInclude" container. Thunk used to perform search query validation and search type determination.
    [actionsGszActivityInclude.SEARCH_VALIDATE_SEARCH]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.SEARCH_VALIDATE_SEARCH>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            isSearchError: state.inputSearch.length < 3,
            customerSearchError: state.inputSearch.length < 3 ? 'Введите не менее 3-х символов' : '',
        }
    },

    // Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "search_callGetCustomerSearchList" started. Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_REQUEST]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<void>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            customerSearchListFetching: true,
            customerSearchListError: null,
        }
    },
     // Action dispatched on change visible error modal
     [actionsGszActivityInclude.PERFORM_CHANGE_VISIBLE_ERROR_MODAL]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_CHANGE_VISIBLE_ERROR_MODAL>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            isVisibleModalActivityError: action.payload.status
        }
    },
    // Action dispatched on fetch succeeded in thunk "search_callGetCustomerSearchList". Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_SUCCESS>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            customerSearchList: action.payload.response.data,
            customerSearchListCachedDate: action.payload.response.cachedDate,
            customerSearchListFetching: false,
            customerSearchListError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "search_callGetCustomerSearchList". Internal thunk used in "GszActivityInclude" container. Fetch customer list current page with search parameters.
    [actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_FAILURE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            customerSearchListFetching: false,
            customerSearchListError: action.payload.error,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on user input Customer field.
    [actionsGszActivityInclude.PERFORM_INPUT_CUSTOMER]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_INPUT_CUSTOMER>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            inputCustomer: action.payload.customer,
            gszActivityIncludeValidationCustomer: util.gszActivityIncludeValidationCustomer(action.payload.customer, action.payload.currentUser),
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched on user input Comment field.
    [actionsGszActivityInclude.PERFORM_INPUT_COMMENT]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_INPUT_COMMENT>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            inputComment: action.payload.value,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk used to cancel changes.
    [actionsGszActivityInclude.PERFORM_CANCEL]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_CANCEL>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk used to confirm changes.
    [actionsGszActivityInclude.PERFORM_SAVE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SAVE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            operationUuid: util.getRandomOperationUuid(),
        }
    },

    // Action dispatched on thunk chain "performSave" started. Thunk dispatched by "GszActivityInclude" screen. Thunk used to confirm changes.
    [actionsGszActivityInclude.PERFORM_SAVE_EXECUTE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<void>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            activitySaveInProgress: true,
            activitySaveError: null,
        }
    },
    // Action dispatched on success in thunk "performSave". Thunk dispatched by "GszActivityInclude" screen. Thunk used to confirm changes.
    [actionsGszActivityInclude.PERFORM_SAVE_SUCCESS]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SAVE_SUCCESS>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            activitySave: action.payload.data,
            activitySaveInProgress: false,
            activitySaveError: null,
        }
    },
    // Action dispatched on failure in thunk "performSave". Thunk dispatched by "GszActivityInclude" screen. Thunk used to confirm changes.
    [actionsGszActivityInclude.PERFORM_SAVE_FAILURE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_SAVE_FAILURE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            activitySaveInProgress: false,
            activitySaveError: action.payload.error,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
    [actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
        }
    },
    // Action dispatched on network thunk chain "callPostGszActivityIncludeCreate" started. Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
    [actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_REQUEST]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<void>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            activityIncludeCreateFetching: true,
            activityIncludeCreateError: null,
        }
    },
    // Action dispatched on fetch succeeded in thunk "callPostGszActivityIncludeCreate". Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
    [actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_SUCCESS>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            activityIncludeCreate: action.payload.response.data,
            activityIncludeCreateCachedDate: action.payload.response.cachedDate,
            activityIncludeCreateFetching: false,
            activityIncludeCreateError: null,
        }
    },
    // Action dispatched on fetch failure in thunk "callPostGszActivityIncludeCreate". Thunk dispatched by "GszActivityInclude" screen. Fetch post request.
    [actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.CALL_POST_GSZ_ACTIVITY_INCLUDE_CREATE_FAILURE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            activityIncludeCreateFetching: false,
            activityIncludeCreateError: action.payload.error,
        }
    },

    // Internal thunk used in "GszActivityInclude" container. Thunk used to confirm changes.
    [actionsGszActivityInclude.PERFORM_VALIDATE]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_VALIDATE>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
            gszActivityIncludeValidationComment: util.gszActivityIncludeValidationComment(state.inputComment, action.payload.currentUser),
            gszActivityIncludeValidationCustomer: util.gszActivityIncludeValidationCustomer(state.inputCustomer, action.payload.currentUser),
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. 
    [actionsGszActivityInclude.NAVIGATE_BACK]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.NAVIGATE_BACK>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...state,
        }
    },

    // Thunk dispatched by "GszActivityInclude" screen. Thunk dispatched to reset container state to default values.
    [actionsGszActivityInclude.PERFORM_CONTAINER_RESET]: (state: ModelsGszActivityInclude.IGszActivityIncludeState, action: Action<actionsGszActivityInclude.PERFORM_CONTAINER_RESET>): ModelsGszActivityInclude.IGszActivityIncludeState => {
        return {
            ...ModelsGszActivityInclude.initialState.state,
        }
    },


}, ModelsGszActivityInclude.initialState.state)

export default reducerGszActivityInclude
