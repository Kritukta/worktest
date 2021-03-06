import * as ModelState from '../models/Models';
import { Models } from 'mrmkmcib-crm';
import Error from '../models/Error';
import { Enums } from '../Enums';
export declare const navigateToParentDealCustomerListScreen: (mode: Enums.ParentDealPickerMode) => (dispatch: Function) => void;
export declare const setParentDealPickerMode: (mode: Enums.ParentDealPickerMode) => (dispatch: Function) => void;
export declare const callGetParentDealDealListBreak: () => (dispatch: Function) => void;
export declare const performParentDealCustomerListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performParentDealCustomerListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performParentDealCustomerSearch: () => (dispatch: Function) => void;
export declare const performParentDealCustomerInputSearch: (parentDealCustomerInputSearch: string) => (dispatch: Function) => void;
export declare const performParentDealCustomerSearchModeDisable: () => (dispatch: Function) => void;
export declare const performParentDealCustomerSearchModeEnable: () => (dispatch: Function) => void;
export declare const performParentDealCustomerSelect: (parentDealCustomer: Models.CustomerManaged) => (dispatch: Function) => void;
export declare const navigateToParentDealDealListScreen: (parentDealCustomer: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performParentDealDealListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetParentDealDealListClean: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetParentDealDealListIgnore: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const callGetParentDealDealList: (parentDealCustomer: Models.CustomerManaged) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performParentDealDealSelect: (parentDealDeal: Models.Deal) => (dispatch: Function) => void;
export declare const navigateBack: () => (dispatch: Function) => void;
export declare const performCustomerListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListRefreshExecute: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListRefreshSuccess: (data: boolean) => (dispatch: Function) => void;
export declare const performCustomerManagedListRefreshFailure: (error: Error) => (dispatch: Function) => void;
export declare const refresh_callGetCustomerManagedList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListAppendExecute: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListAppendSuccess: (data: boolean) => (dispatch: Function) => void;
export declare const performCustomerManagedListAppendFailure: (error: Error) => (dispatch: Function) => void;
export declare const append_callGetCustomerManagedList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const append_customerManagedListConcat: () => (dispatch: Function) => void;
export declare const performSearchModeEnable: () => (dispatch: Function) => void;
export declare const performSearchModeDisable: () => (dispatch: Function) => void;
export declare const performInputSearch: (value: string) => (dispatch: Function) => void;
export declare const performSearchReset: () => (dispatch: Function) => void;
export declare const performCustomerSearchListReset: () => (dispatch: Function) => void;
export declare const performSearchExecute: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearch: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchSuccess: (data: boolean) => (dispatch: Function) => void;
export declare const performSearchFailure: (error: Error) => (dispatch: Function) => void;
export declare const search_validateSearch: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const search_callGetCustomerSearchList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListAppendExecute: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListAppendSuccess: (data: boolean) => (dispatch: Function) => void;
export declare const performCustomerSearchListAppendFailure: (error: Error) => (dispatch: Function) => void;
export declare const searchAppend_callGetCustomerSearchListPage: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const searchAppend_customerSearchListConcat: () => (dispatch: Function) => void;
export declare const performContainerReset: () => (dispatch: Function) => void;
export declare const navigationLoaderAppCRMShow: () => (dispatch: Function) => void;
export declare const navigationLoaderAppCRMHide: () => (dispatch: Function) => void;
export declare const performCustomerListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshBarHide: () => (dispatch: Function) => void;
export declare const performRefreshBarShow: () => (dispatch: Function) => void;
export declare const performFlush: () => (dispatch: Function) => void;
