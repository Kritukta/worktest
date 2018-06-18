/*
 * Created by Burnaev M.U.
 */

import {handleActions} from 'redux-actions';

import * as actionsOccasionList from '../actions/ActionsOccasionList'
import * as ModelsOccasionList from "../models/ModelsOccasionList"
import Action from "../models/Action"
import {Enums} from '../Enums'
import * as util from '../common/Util'

const reducerOccasionList = handleActions<ModelsOccasionList.IOccasionListState>({

    // Thunk dispatched by "OccasionList" screen. Thunk used to send request to update occasion list
    [actionsOccasionList.CALL_UPDATE_REQUEST_OCCASION_LIST]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.CALL_UPDATE_REQUEST_OCCASION_LIST>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListUpdateInProgress: true,
            occasionListUpdateError: null,
        }
    },

    // Thunk dispatched by "OccasionList" screen. Thunk used to change OccasionListMode after save
    [actionsOccasionList.PERFORM_UPDATE_CUSTOMER_OCCASION_LIST_SUCCESS]: (state: ModelsOccasionList.IOccasionListState): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListUpdateInProgress: false,
            occasionListMode: Enums.OccasionListMode.Watch,
        }
    },



    // Thunk dispatched by "OccasionList" screen. Thunk used to set success response for request to update occasion list
    [actionsOccasionList.CALL_UPDATE_FAILURE_OCCASION_LIST]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.CALL_UPDATE_FAILURE_OCCASION_LIST>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListUpdateInProgress: false,
            occasionListUpdateError: action.payload.error,
        }
    },

    // Thunk dispatched by "OccasionList" screen. Thunk used to enter editor mode.
    [actionsOccasionList.PERFORM_EDIT]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_EDIT>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListMode: Enums.OccasionListMode.Edit,

        }
    },

    // Thunk dispatched by "OccasionList" screen. Thunk used to cancel changes.
    [actionsOccasionList.PERFORM_CANCEL]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_CANCEL>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            inputOccasionList: state.occasionList,
            occasionListMode: Enums.OccasionListMode.Watch,
        }
    },

    // Thunk dispatched by "OccasionList" screen. 
    [actionsOccasionList.NAVIGATE_BACK]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.NAVIGATE_BACK>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk used to save changes of occasion list
    [actionsOccasionList.PERFORM_SAVE_OCCASION_LIST]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_SAVE_OCCASION_LIST>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListMode: Enums.OccasionListMode.Watch,
        }
    },

    // Thunk dispatched by "OccasionList" screen. Thunk used to delete Occasion.
    [actionsOccasionList.PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_UPDATE_OCCASION_LIST_WITH_MENU_OPTION>): ModelsOccasionList.IOccasionListState => {

        return {
            ...state,
            occasionListWithMenuOption: action.payload.occasionListWithMenuOption,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk used to hide error modal window Occasion List.
    [actionsOccasionList.PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW>): ModelsOccasionList.IOccasionListState => {

        return {
            ...state,
            isVisibleOccasionListErrorModalWindow: action.payload.value,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk used to delete Occasion.
    [actionsOccasionList.PERFORM_DELETE_OCCASION]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_DELETE_OCCASION>): ModelsOccasionList.IOccasionListState => {

        return {
            ...state,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk used to delete Occasion.
    [actionsOccasionList.CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.CHANGE_STATUS_NEED_UPDATE_OCCASION_LIST>): ModelsOccasionList.IOccasionListState => {

        return {
            ...state,
            hasChangedOccasionList: action.payload.value,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk used to show member list.
    [actionsOccasionList.PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_UPDATE_AGENT_OCCASION_LIST_SUCCESS>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            currentAgent: action.payload.agent,
            occasionListMode: Enums.OccasionListMode.Watch,
            occasionListUpdateInProgress: false,
            occasionListUpdateError: null,
        }
    },

    // Thunk dispatched by "OccasionList" screen. Thunk used to show member list.
    [actionsOccasionList.PERFORM_OPEN_OCCASION_LIST_SCREEN]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_OPEN_OCCASION_LIST_SCREEN>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListMode: Enums.OccasionListMode.Watch,
            operationUuid: util.getRandomOperationUuid(),
            occasionListContextMode: action.payload.occasionListContextMode,
            occasionListAccessLevel: action.payload.occasionListAccessLevel,
            currentAgent: action.payload.agent,
            currentCustomer: action.payload.customer,
        }
    },


    // Thunk dispatched by "OccasionList" screen. Thunk dispatched to reset container state to set occasion list values.
    [actionsOccasionList.PERFORM_INPUT_OCCASION_LIST]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_INPUT_OCCASION_LIST>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionList: action.payload.occasionList,
            inputOccasionList: action.payload.occasionList,
            hasChangedOccasionList: false,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk dispatched to reset container state to update occasion list values.
    [actionsOccasionList.PERFORM_UPDATE_OCCASION_LIST]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_INPUT_OCCASION_LIST>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            inputOccasionList: action.payload.occasionList,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk dispatched to reset container state to default values.
    [actionsOccasionList.PERFORM_CONTAINER_RESET]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_CONTAINER_RESET>): ModelsOccasionList.IOccasionListState => {
        return {
            ...ModelsOccasionList.initialState.state,
        }
    },
    // Thunk dispatched by "OccasionList" screen. Thunk dispatched to change Occasion List access level.
    [actionsOccasionList.PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL]: (state: ModelsOccasionList.IOccasionListState, action: Action<actionsOccasionList.PERFORM_SET_OCCASION_LIST_ACCESS_LEVEL>): ModelsOccasionList.IOccasionListState => {
        return {
            ...state,
            occasionListAccessLevel: action.payload.value,
        }
    },



}, ModelsOccasionList.initialState.state)

export default reducerOccasionList
