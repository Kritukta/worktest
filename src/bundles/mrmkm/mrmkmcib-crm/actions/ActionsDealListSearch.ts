/**
 * Actions of DealList container.
 *
 * @author Vladykin A.S.
 * @see
 */

import {Models} from 'mrmkmcib-crm'
import Action from '../models/Action'


export const SWAP_CONTEXT = 'DEAL_LIST_SEARCH_CONTAINER_SWAP_CONTEXT'
export const PERFORM_INPUT_SEARCH = 'DEAL_LIST_SEARCH_CONTAINER_PERFORM_INPUT_SEARCH'
export const PERFORM_INPUT_RESET = 'DEAL_LIST_SEARCH_CONTAINER_PERFORM_INPUT_RESET'

/**
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 * @param {Models.DealList} dealOpenedList
 * @param {Models.DealList} dealClosedList
 */
export type SWAP_CONTEXT = {dealOpenedList: Models.DealList, dealClosedList: Models.DealList}
export const swapContext = (
    dealOpenedList: Models.DealList,
    dealClosedList: Models.DealList
): Action<SWAP_CONTEXT> => ({
    type: SWAP_CONTEXT,
    payload: {
        dealOpenedList: dealOpenedList,
        dealClosedList: dealClosedList,
    }
})
/**
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 * @param {string} value
 */
export type PERFORM_INPUT_SEARCH = {value: string}
export const performInputSearch = (value: string): Action<PERFORM_INPUT_SEARCH> => ({
    type: PERFORM_INPUT_SEARCH,
    payload: {
        value: value,
    }
})

/**
 * Thunk dispatched by 'DealListSearch' screen. Thunk dispatched on search input changed.
 */
export type PERFORM_INPUT_RESET = {}
export const performInputReset = (): Action<PERFORM_INPUT_RESET> => ({
    type: PERFORM_INPUT_RESET,
    payload: {}
})
