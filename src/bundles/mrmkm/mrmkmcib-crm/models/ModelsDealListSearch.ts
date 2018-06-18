/**
 * Models for DealListSearch container.
 *
 * @author Vladykin A.S.
 * @see
 */

import {defaultValues} from './Models'
import {Models} from 'mrmkmcib-crm'

const defaultState = {
    get state(): IDealListSearchState {
        return {
            dealSearchOpenedList: defaultValues.DealList,
            dealSearchClosedList: defaultValues.DealList,
            inputSearch: '',
            dealOpenedList: defaultValues.DealList,
            dealClosedList: defaultValues.DealList,
        }
    }
}

export interface IDealListSearchState {
    dealSearchOpenedList: Models.DealList,
    dealSearchClosedList: Models.DealList,
    inputSearch: string,
    dealOpenedList: Models.DealList,
    dealClosedList: Models.DealList,
}

export const initialState = {
    get state(): IDealListSearchState {
        return defaultState.state
    }
}

export interface NAVIGATE_TO_DEAL_LIST_SEARCH_SCREEN {
    (): void;
}

export interface PERFORM_INPUT_SEARCH {
    (value: string): void;
}
