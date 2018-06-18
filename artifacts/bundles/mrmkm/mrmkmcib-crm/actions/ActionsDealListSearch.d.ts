/**
 * Actions of DealList container.
 *
 * @author Vladykin A.S.
 * @see
 */
import { Models } from 'mrmkmcib-crm';
import Action from '../models/Action';
export declare const SWAP_CONTEXT = "DEAL_LIST_SEARCH_CONTAINER_SWAP_CONTEXT";
export declare const PERFORM_INPUT_SEARCH = "DEAL_LIST_SEARCH_CONTAINER_PERFORM_INPUT_SEARCH";
export declare const PERFORM_INPUT_RESET = "DEAL_LIST_SEARCH_CONTAINER_PERFORM_INPUT_RESET";
/**
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 * @param {Models.DealList} dealOpenedList
 * @param {Models.DealList} dealClosedList
 */
export declare type SWAP_CONTEXT = {
    dealOpenedList: Models.DealList;
    dealClosedList: Models.DealList;
};
export declare const swapContext: (dealOpenedList: Models.DealList, dealClosedList: Models.DealList) => Action<SWAP_CONTEXT>;
/**
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 * @param {string} value
 */
export declare type PERFORM_INPUT_SEARCH = {
    value: string;
};
export declare const performInputSearch: (value: string) => Action<PERFORM_INPUT_SEARCH>;
/**
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 */
export declare type PERFORM_INPUT_RESET = {};
export declare const performInputReset: () => Action<PERFORM_INPUT_RESET>;
