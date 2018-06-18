/**
 * Models for Limit container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
export interface ILimitState {
    currentTab: Enums.LimitTab;
    currentTotalTab: Enums.LimitTotalTab;
}
export declare const initialState: {
    readonly state: ILimitState;
};
export interface PERFORM_CHANGE_TAB {
    (index: number, value: Enums.LimitTab): void;
}
export interface PERFORM_CHANGE_TOTAL_TAB {
    (index: number, value: Enums.LimitTotalTab): void;
}
export interface PERFORM_CONTAINER_RESET {
    (): void;
}
