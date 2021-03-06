import * as ModelState from "../models/Models";
import { Enums } from '../Enums';
export declare const performChangeTab: (index: number, value: Enums.ProductPaymentAccountTab) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputSumMin: (value: number | null, applyFilter?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputSumMax: (value: number | null, applyFilter?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverFilterShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverFilterHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputOperationType: (value: Enums.OperationType, applyFilter?: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverPeriodTypeShow: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performPopoverPeriodTypeHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputPeriodType: (value: Enums.PeriodType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterPeriodStart: (value: Date | null) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterPeriodEnd: (value: Date | null) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterApply: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performFilterReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const operationListFilter: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToPeriodTypeCustomScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigatePeriodTypeCustomBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetOperationList: (isForceRequest: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const getPaymentAccountCardIndexList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performUpdateOperationListResetCache: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performUpdateCardIndexListResetCache: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetCardIndexList: (isForceRequest: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const clearOperationListCache: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const clearCardIndexListCache: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetProductVspInfo: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToRestrictionListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToCardIndexListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToTariffScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToVspInfoScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToOperationListScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateToDashboardScreen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateProductPaymentAccountBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performContainerReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
