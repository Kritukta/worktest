import * as ModelState from "../models/Models";
import { Enums } from '../Enums';
export declare const performChangeTab: (index: number, value: Enums.LimitTab) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performChangeTotalTab: (index: number, value: Enums.LimitTotalTab) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performContainerReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
