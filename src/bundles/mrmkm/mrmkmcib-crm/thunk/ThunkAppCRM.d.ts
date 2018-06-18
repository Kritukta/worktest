import * as ModelState from "../models/Models";
import { Models as ModelsApp } from 'mrmkmcib-app';
import { Models, Enums as EnumsCrmAll } from "mrmkmcib-crm";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import Error from "../models/Error";
export declare const performFlush: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performRefreshBarHide: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const swapContext: (user: ModelsApp.Employee, classifierDictionary: ModelsApp.ClassifierDictionary, currentExchangePerson: ModelsScheduler.Person, appBuildVersion: string, appServerUrl: string, appServerPath: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performApplicationInit: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterOrganizationStructure: (value: EnumsCrmAll.FilterOrganizationStructure) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputFilterMemberRole: (value: EnumsCrmAll.FilterMemberRole) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const validateFilterList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListRefresh: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListRefreshSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListRefreshFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const refresh_callGetCustomerManagedList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListAppendSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerManagedListAppendFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const append_callGetCustomerManagedList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const append_customerManagedListConcat: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchModeEnable: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchModeDisable: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performInputSearch: (value: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearch: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const search_validateSearch: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const search_callGetCustomerSearchList: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListAppendSuccess: (data: boolean) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerSearchListAppendFailure: (error: Error) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const searchAppend_callGetCustomerSearchListPage: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const searchAppend_customerSearchListConcat: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerOpenExecute: (customer: Models.Customer, customerMode: EnumsCrmAll.CustomerMode, showCustomer?: EnumsCrmAll.ShowCustomer | undefined) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerOpenOnce: (customer: Models.Customer, customerMode: EnumsCrmAll.CustomerMode, showCustomer: EnumsCrmAll.ShowCustomer) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const customerOpenInProgress: () => (dispatch: Function) => void;
export declare const resetCustomerOpenInProgress: () => (dispatch: Function) => void;
export declare const performCustomerOpen: (customerId: string, customerMode?: EnumsCrmAll.CustomerMode | undefined) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerPassBy: (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerInnerOpen: (customerId: string, customerMode?: EnumsCrmAll.CustomerMode | undefined) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerInnerPassBy: (customerId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerOpenWithResetPanel: (customerId: string, customerMode?: EnumsCrmAll.CustomerMode | undefined) => (dispatch: Function) => void;
export declare const performChangeDisplayErrorModalAppCRM: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performGszOpen: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performDealOpen: (dealId: string, dealMode: EnumsCrmAll.DealMode, isEditDealEnable: boolean, customerId?: string | null | undefined) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performProductOpen: (productId: string, productType: EnumsCrmAll.ProductType, customer: Models.Customer, eksId: string) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const navigateBack: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performContainerReset: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performSearchTypeChange: (customerSearchType: EnumsCrmAll.CustomerSearchType) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performCustomerOpenFromPush: (customerId: string, customerMode?: EnumsCrmAll.CustomerMode | undefined) => (dispatch: Function, getState: () => ModelState.IRootState) => void;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to show loader on CRM page.
 *
 */
export declare const navigationLoaderAppCRMShow: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk dispatched to hide loader on CRM page.
 *
 */
export declare const navigationLoaderAppCRMHide: () => (dispatch: Function) => void;
/**
 * Thunk dispatched by "AppCRM" screen. Thunk chain used to load next page and append customer list.
 *
 */
export declare const performCustomerListAppend: () => (dispatch: Function, getState: () => ModelState.IRootState) => void;
export declare const performNavigateBackFromPush: () => (dispatch: Function) => void;
export declare const performNavigationReloadPush: () => (dispatch: Function) => void;
export declare const performNavigateToCustomerScreen: (customer: Models.Customer, customerMode: EnumsCrmAll.CustomerMode, showCustomer: EnumsCrmAll.ShowCustomer) => (dispatch: Function) => void;
