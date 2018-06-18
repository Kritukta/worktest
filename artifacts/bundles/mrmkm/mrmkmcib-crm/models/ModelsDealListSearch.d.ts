/**
 * Models for DealListSearch container.
 *
 * @author Vladykin A.S.
 * @see
 */
import { Models } from 'mrmkmcib-crm';
export interface IDealListSearchState {
    dealSearchOpenedList: Models.DealList;
    dealSearchClosedList: Models.DealList;
    inputSearch: string;
    dealOpenedList: Models.DealList;
    dealClosedList: Models.DealList;
}
export declare const initialState: {
    readonly state: IDealListSearchState;
};
export interface NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN {
    (): void;
}
export interface PERFORM_INPUT_SEARCH {
    (value: string): void;
}
