/**
 * Models for OccasionList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models } from "mrmkmcib-crm";
import { Enums } from "../Enums";
export interface IOccasionListState {
    operationUuid: string;
    occasionListMode: Enums.OccasionListMode;
    occasionListContextMode: Enums.OccasionListContextMode;
    occasionListAccessLevel: Enums.OccasionListAccessLevel;
    occasionListWithMenuOption: string[];
    hasChangedOccasionList: boolean;
    isVisibleOccasionListErrorModalWindow: boolean;
    occasionList: Models.OccasionList;
    inputOccasionList: Models.OccasionList;
    occasionListUpdateInProgress: boolean;
    occasionListUpdateError: Models.Error | null;
    currentAgent: Models.Agent | null;
    currentCustomer: Models.CustomerManaged | null;
}
export declare const initialState: {
    readonly state: IOccasionListState;
};
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
    (occasion: Models.Occasion): void;
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
export interface PERFORM_DELETE_OCCASION {
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
