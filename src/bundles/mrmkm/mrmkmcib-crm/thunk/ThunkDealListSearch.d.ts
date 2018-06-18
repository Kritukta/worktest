import * as ModelState from '../models/Models';
import { Models } from 'mrmkmcib-crm';
export declare const navigateToDealListSearchScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const swapContext: (dealOpenedList: Models.DealList, dealClosedList: Models.DealList) => (dispatch: Function) => void;
export declare const navigateBackToDealListScreen: () => (dispatch: Function) => void;
export declare const performInputSearch: (value: string) => (dispatch: Function) => void;
export declare const performInputReset: () => (dispatch: Function) => void;
