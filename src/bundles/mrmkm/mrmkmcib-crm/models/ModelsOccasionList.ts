/**
 * Models for OccasionList container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models} from "mrmkmcib-crm"
import Error from "../models/Error"

import {Enums} from "../Enums"

// TODO Describe models used in OccasionList actions and thunks.


const defaultState = {
    get state(): IOccasionListState {
        return {

            occasionListMode: Enums.OccasionListMode.Watch,
            occasionListContextMode: Enums.OccasionListContextMode.None,
            occasionListAccessLevel: Enums.OccasionListAccessLevel.Read,
            hasChangedOccasionList: false,
            occasionListWithMenuOption: [],
            isVisibleOccasionListErrorModalWindow: false,
            occasionList: defaultValues.OccasionList,
            inputOccasionList: defaultValues.OccasionList,
            occasionListUpdateInProgress: false,
            occasionListUpdateError: null,
            currentAgent: null,
            currentCustomer: null,
            operationUuid: '',
        }
    }
}

export interface IOccasionListState {

    operationUuid: string,
    occasionListMode: Enums.OccasionListMode,
    occasionListContextMode: Enums.OccasionListContextMode,
    occasionListAccessLevel: Enums.OccasionListAccessLevel,
    occasionListWithMenuOption: string[],
    hasChangedOccasionList: boolean,
    isVisibleOccasionListErrorModalWindow: boolean,
    occasionList: Models.OccasionList,
    inputOccasionList: Models.OccasionList,

    occasionListUpdateInProgress: boolean,
    occasionListUpdateError: Models.Error | null,
    currentAgent: Models.Agent | null,
    currentCustomer: Models.CustomerManaged | null,
}

export const initialState = {
    get state(): IOccasionListState {
        return defaultState.state
    }
}

export interface PERFORM_INIT {
    (): void;
}

export interface PERFORM_SAVE {
    (): void;
}

export interface CALL_GET_CUSTOMER_MODIFIER_ID {
    (): void;
}

export interface CALL_PUT_CUSTOMER_OCCASION_LIST_UPDATE {
    (): void;
}

export interface MERGE_OCCASION {
    (occasion: Models.Occasion,): void;
}

export interface PERFORM_EDIT {
    (): void;
}

export interface PERFORM_CANCEL {
    (): void;
}

export interface NAVIGATE_BACK {
    (): void;
}

export interface NAVIGATE_BACK_TO_AGENT {
    (): void;
}

export interface PERFORM_ADD_OCCASION_WITH_MENU_OPTION {
    (occasion: Models.Occasion): void;
}

export interface PERFORM_DELETE_OCCASION_WITH_MENU_OPTION {
    (occasion: Models.Occasion): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface PERFORM_PRESS_OCCASION_DELETE {
    (id: string | Enums.SwipeableRowEmptyId): void;
}

export interface RETURN_TO_PREVIOUS_NAVIGATION_AREA {
    (): void;
}

export interface PERFORM_INIT {
    (): void;
}

export interface  PERFORM_DELETE_OCCASION {
    (occasion: Models.Occasion): void;
}

export interface PERFORM_OPEN_OCCASION_SCREEN {
    (occasion: Models.Occasion, occasionMode: Enums.OccasionMode): void;
}
export interface PERFORM_CHANGE_DISPLAY_OCCASION_LIST_ERROR_MODAL_WINDOW {
    (): void;
}

export interface PERFORM_CALL_OCCASION_LIST_UPDATE {
    (): void;
}