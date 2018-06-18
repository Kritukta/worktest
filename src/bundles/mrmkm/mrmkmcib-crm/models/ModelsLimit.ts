/**
 * Models for Limit container.
 *
 * @author Burnaev M.U.
 * @see
 */

import {Enums} from '../Enums'


// TODO Describe models used in Limit actions and thunks.


const defaultState = {
    get state(): ILimitState {
        return {

            currentTab: Enums.LimitTab.Total,  // State parameter displayed in "Limit" screen. 
            currentTotalTab: Enums.LimitTotalTab.Approved,  // State parameter displayed in "Limit" screen. 


            // TODO Describe Limit reducer state.


        }
    }
}

export interface ILimitState {

    currentTab: Enums.LimitTab,  // State parameter displayed in "Limit" screen. 
    currentTotalTab: Enums.LimitTotalTab,  // State parameter displayed in "Limit" screen. 


    // TODO Describe Limit reducer state.


}

export const initialState = {
    get state(): ILimitState {
        return defaultState.state
    }
}


export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.LimitTab,): void;
}

export interface PERFORM_CHANGE_TOTAL_TAB {
    (index: number, value: Enums.LimitTotalTab,): void;
}

export interface PERFORM_CONTAINER_RESET {
    (): void;
}