/**
 * Actions of Limit container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
import Action from "../models/Action";
export declare const PERFORM_CHANGE_TAB = "LIMIT_CONTAINER_PERFORM_CHANGE_TAB";
export declare const PERFORM_CHANGE_TOTAL_TAB = "LIMIT_CONTAINER_PERFORM_CHANGE_TOTAL_TAB";
export declare const PERFORM_CONTAINER_RESET = "LIMIT_CONTAINER_PERFORM_CONTAINER_RESET";
/**
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.LimitTab} value .
 */
export declare type PERFORM_CHANGE_TAB = {
    index: number;
    value: Enums.LimitTab;
};
export declare const performChangeTab: (index: number, value: Enums.LimitTab) => Action<PERFORM_CHANGE_TAB>;
/**
 * Thunk dispatched by "Limit" screen. Thunk chain dispatched on tab selector change current tab.
 *
 * @param {number} index .
 * @param {Enums.LimitTotalTab} value .
 */
export declare type PERFORM_CHANGE_TOTAL_TAB = {
    index: number;
    value: Enums.LimitTotalTab;
};
export declare const performChangeTotalTab: (index: number, value: Enums.LimitTotalTab) => Action<PERFORM_CHANGE_TOTAL_TAB>;
/**
 * Thunk dispatched by "Limit" screen. Thunk dispatched to reset container state to default values.
 *
 */
export declare type PERFORM_CONTAINER_RESET = {};
export declare const performContainerReset: () => Action<PERFORM_CONTAINER_RESET>;
