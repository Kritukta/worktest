/**
 * Models for CustomerDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {defaultValues} from "./Models"
import {Models as ModelsApp} from "mrmkmcib-app"
import {Models as ModelsCrm} from "mrmkmcib-crm"
import {Models as ModelsScheduler} from "mrmkmcib-scheduler"
import {Models} from "mrmkmcib-dashboard"
import {Enums} from '../Enums'
import Error from "../models/Error"


// TODO Describe models used in CustomerDashboard actions and thunks.


const defaultState = {
    get state(): ICustomerDashboardState {
        return {
            currentRecipientList: defaultValues.PersonList, // State parameter displayed in "CustomerDashboard" screen.
            currentFileFormat: Enums.FileFormat.Excel, // State parameter displayed in "CustomerDashboard" screen.
            currentRepresentation: Enums.Representation.Slides,  // State parameter displayed in "CustomerDashboard" screen.
            isVisiblePopoverShare: false,  // State parameter displayed in "CustomerDashboard" screen.
            currentCustomerManaged: defaultValues.CustomerManaged,  // State parameter displayed in "CustomerDashboard" screen. 
            currentUser: defaultValues.Employee,  // State parameter displayed in "CustomerDashboard" screen. 
            currentQlikMessage: defaultValues.QlikMessage,  // State parameter displayed in "CustomerDashboard" screen.
            qlikError: null,  // State parameter displayed in "CustomerDashboard" screen.
            currentQlikUrl: null,
            qlikCookie: null, // Cookie to header qlik.
            qlikAvailabilityCheck: defaultValues.boolean,  // Fetch result for "callQlikAvailabilityCheck" thunk.
            qlikAvailabilityCheckFetching: false,  // Fetching indicator for network thunk chain "callQlikAvailabilityCheck".
            qlikAvailabilityCheckError: null,  // Network error info for thunk chain "callQlikAvailabilityCheck".
            qlikAvailabilityCheckCachedDate: null,  // Response data cache date for network thunk chain "callQlikAvailabilityCheck".
            personHistoryList: defaultValues.PersonList,
            personHistoryListInProgress: false,
            personHistoryListError: null,
            foundPersonList: defaultValues.PersonList,  // Result for "performFindPeople" thunk.
            foundPersonListInProgress: false,  // Progress indicator for thunk chain "performFindPeople".
            foundPersonListError: null,  // Error info for thunk chain "performFindPeople".
            inputSharePopoverSearch: '', // State parameter displayed in "CustomerDashboard" screen.
            sendFetching: false, // State parameter displayed in "CustomerDashboard" screen.
            sendError: null,// State parameter displayed in "CustomerDashboard" screen.
            sendSuccess: false,// State parameter displayed in "CustomerDashboard" screen.
            isPopoverVisibleSearchScreen: false,// State parameter. true when current screen of Popover is Search
            isTrimmedTop: false, // State parameter to cut top of QlikView
            supParameters: defaultValues.SupParams,
            navigateBackData: null,
            // TODO Describe CustomerDashboard reducer state.


        }
    }
}

export interface ICustomerDashboardState {
    currentRecipientList: ModelsScheduler.PersonList, //State parameter displayed in "CustomerDashboard" screen.
    currentFileFormat: Enums.FileFormat, //State parameter displayed in "CustomerDashboard" screen.
    currentRepresentation: Enums.Representation, // State parameter displayed in "CustomerDashboard" screen.
    isVisiblePopoverShare: boolean,  // State parameter displayed in "CustomerDashboard" screen. 
    currentCustomerManaged: ModelsCrm.CustomerManaged,  // State parameter displayed in "CustomerDashboard" screen. 
    currentUser: ModelsApp.Employee,  // State parameter displayed in "CustomerDashboard" screen. 
    currentQlikMessage: Models.QlikMessage,  // State parameter displayed in "CustomerDashboard" screen.
    qlikError: Error | null,  // State parameter displayed in "CustomerDashboard" screen.
    currentQlikUrl: string | null,
    qlikCookie: string | null,
    qlikAvailabilityCheck: boolean,  // Fetch result for "callQlikAvailabilityCheck" thunk.
    qlikAvailabilityCheckFetching: boolean,  // Fetching indicator for network thunk chain "callQlikAvailabilityCheck".
    qlikAvailabilityCheckError: Error | null,  // Network error info for thunk chain "callQlikAvailabilityCheck".
    qlikAvailabilityCheckCachedDate: Date | null,  // Response data cache date for network thunk chain "callQlikAvailabilityCheck".
    personHistoryList: ModelsScheduler.PersonList,
    personHistoryListInProgress: boolean,
    personHistoryListError: Error | null,
    foundPersonList: ModelsScheduler.PersonList,  // Result for "performFindPeople" thunk.
    foundPersonListInProgress: boolean,  // Progress indicator for thunk chain "performFindPeople".
    foundPersonListError: Error | null,  // Error info for thunk chain "performFindPeople".
    inputSharePopoverSearch: string, // State parameter displayed in "CustomerDashboard" screen.
    sendFetching: boolean, // State parameter displayed in "CustomerDashboard" screen.
    sendError: Error | null, // State parameter displayed in "CustomerDashboard" screen.
    sendSuccess: boolean, // State parameter displayed in "CustomerDashboard" screen.
    isPopoverVisibleSearchScreen: boolean,// State parameter. true when current screen of Popover is Search
    isTrimmedTop: boolean, // State parameter to cut top of QlikView
    supParameters: Models.SupParams,
    navigateBackData: ModelsApp.NavigateToEntity | null,
    // TODO Describe CustomerDashboard reducer state.


}

export const initialState = {
    get state(): ICustomerDashboardState {
        return defaultState.state
    }
}

export interface PERFORM_SEND {
    (): void;
}

export interface INPUT_SHARE_POPOVER_SEARCH_REFRESH {
    (value: string): void;
}

export interface INPUT_CURRENT_RECIPIENT_LIST_REFRESH {
    (value: ModelsScheduler.Person, operation: Enums.Operation): void;
}

export interface INPUT_CURRENT_REPRESENTATION_REFRESH {
    (value: Enums.Representation): void;
}

export interface INPUT_CURRENT_FILE_FORMAT_REFRESH {
    (value: Enums.FileFormat): void;
}

export interface FOUND_PERSON_LIST_CLEAR {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_NAVIGATE_BACK {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT {
    (): void;
}

export interface PERFORM_SEND {
    (): void;
}

export interface INPUT_SHARE_POPOVER_SEARCH_REFRESH {
    (value: string): void;
}

export interface INPUT_CURRENT_RECIPIENT_LIST_REFRESH {
    (value: ModelsScheduler.Person, operation: Enums.Operation): void;
}

export interface INPUT_CURRENT_REPRESENTATION_REFRESH {
    (value: Enums.Representation): void;
}

export interface INPUT_CURRENT_FILE_FORMAT_REFRESH {
    (value: Enums.FileFormat): void;
}

export interface FOUND_PERSON_LIST_CLEAR {
    (): void;
}
export interface PERFORM_POPOVER_SHARE_NAVIGATE_BACK {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_NAVIGATE_RECIPIENTS {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_NAVIGATE_REPRESENTATION {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_NAVIGATE_FORMAT {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_SHOW {
    (): void;
}

export interface PERFORM_POPOVER_SHARE_HIDE {
    (): void;
}


export interface PERFORM_APPLICATION_INIT {
    (): void;
}

export interface HANDLE_QLIK_ERROR {
    (error: Error | null): void;
}

export interface CALL_QLIK_AVAILABILITY_CHECK {
    (): void;
}

export interface SWAP_CONTEXT {
    (customerManaged: ModelsCrm.CustomerManaged, user: ModelsApp.Employee,): void;
}

export interface PERFORM_QLIK_EVENT {
    (message: Models.QlikMessage): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}

export interface SHARE_DATA_REFRESH {
    (message: Models.QlikMessage): void;
}

export interface NAVIGATE_BACK {
    (): void;
}
