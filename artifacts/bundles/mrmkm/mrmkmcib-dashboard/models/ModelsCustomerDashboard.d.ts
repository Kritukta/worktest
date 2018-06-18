/**
 * Models for CustomerDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsApp } from "mrmkmcib-app";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import { Models } from "mrmkmcib-dashboard";
import { Enums } from '../Enums';
import Error from "../models/Error";
export interface ICustomerDashboardState {
    currentRecipientList: ModelsScheduler.PersonList;
    currentFileFormat: Enums.FileFormat;
    currentRepresentation: Enums.Representation;
    isVisiblePopoverShare: boolean;
    currentCustomerManaged: ModelsCrm.CustomerManaged;
    currentUser: ModelsApp.Employee;
    currentQlikMessage: Models.QlikMessage;
    qlikError: Error | null;
    currentQlikUrl: string | null;
    qlikCookie: string | null;
    qlikAvailabilityCheck: boolean;
    qlikAvailabilityCheckFetching: boolean;
    qlikAvailabilityCheckError: Error | null;
    qlikAvailabilityCheckCachedDate: Date | null;
    personHistoryList: ModelsScheduler.PersonList;
    personHistoryListInProgress: boolean;
    personHistoryListError: Error | null;
    foundPersonList: ModelsScheduler.PersonList;
    foundPersonListInProgress: boolean;
    foundPersonListError: Error | null;
    inputSharePopoverSearch: string;
    sendFetching: boolean;
    sendError: Error | null;
    sendSuccess: boolean;
    isPopoverVisibleSearchScreen: boolean;
    isTrimmedTop: boolean;
    supParameters: Models.SupParams;
    navigateBackData: ModelsApp.NavigateToEntity | null;
}
export declare const initialState: {
    readonly state: ICustomerDashboardState;
};
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
    (customerManaged: ModelsCrm.CustomerManaged, user: ModelsApp.Employee): void;
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
