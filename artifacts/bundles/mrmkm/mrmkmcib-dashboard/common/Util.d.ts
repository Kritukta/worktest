import * as ModelState from "../models/Models";
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Enums } from '../Enums';
import { Models } from "mrmkmcib-dashboard";
import { Models as ModelsScheduler } from "mrmkmcib-scheduler";
import * as ModelsAppDashboard from "../models/ModelsAppDashboard";
import * as ModelsCustomerDashboard from "../models/ModelsCustomerDashboard";
import Response from "../models/Response";
import Error from "../models/Error";
import { CookieData } from 'ufs-mobile-platform';
export declare const QLIK_CERTIFICATE_VERIFICATION: boolean;
export declare const getUrlForRole: (role: number, supParams: Models.SupParams) => string;
export declare const urlAppDashboard: {
    callQlikAvailabilityCheck: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Models.CacheTag[]) => Models.Url;
    search_callGetCustomerSearchList: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Models.CacheTag[]) => Models.Url;
    searchAppend_callGetCustomerSearchListPage: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Models.CacheTag[]) => Models.Url;
    sendFile: (state: ModelState.IRootState, reducerState: ModelsAppDashboard.IAppDashboardState, tagList: Models.CacheTag[]) => Models.Url;
};
export declare const urlCustomerDashboard: {
    callQlikAvailabilityCheck: (state: ModelState.IRootState, reducerState: ModelsCustomerDashboard.ICustomerDashboardState, tagList: Models.CacheTag[]) => Models.Url;
    sendFile: (state: ModelState.IRootState, reducerState: ModelsCustomerDashboard.ICustomerDashboardState, tagList: Models.CacheTag[]) => Models.Url;
};
export declare const getFileFormatString: (key: Enums.FileFormat) => "" | "PDF" | "Excel" | "PowerPoint";
export declare const stringToFileFormat: (value: string) => Enums.FileFormat;
export declare const getRandomOperationUuid: () => string;
export declare const isValidDate: (data: string) => boolean;
export declare const call: <T, TB>(url: Models.Url, success: (response: Response<T>) => void, failure: (response: Error) => void, converter: (data: any) => T, method?: string, headers?: any, requestConverter?: (data: TB) => any, requestData?: TB) => void;
export declare const ping: (url: Models.Url, success: (response: Response<boolean>) => void, failure: (response: Error) => void, method?: string, headers?: any) => void;
export declare const guid: () => string;
/**
 * Функция парсит данные получаемые с клика
 * @param {any} event
 */
export declare const convertQlikMessage: (event: any) => Models.QlikMessage;
export declare const qlikErrorMessages: {
    QlikSenseUnavailable: string;
    QlikSenseServerError: string;
    QlikSenseMashupError: string;
    QlikSenseCertificateError: string;
    QlikSenseSessionExpired: string;
    QlikSenseTimeout: string;
};
export declare const recoverSearchHistoryListFromStorage: () => any;
export declare const persistSearchHistoryListToStorage: (list: Models.SearchHistoryList) => any;
export declare const recoverPeopleHistoryListFromStorage: () => any;
export declare const persistPeopleHistoryListToStorage: (list: ModelsScheduler.PersonList) => any;
export declare const chooseURL: (props: any) => string;
export declare const getErrorFromHeaderLDAP: (headers: any) => Error;
export declare const getLoginLDAP: (login: string) => string;
export declare const urlCustomerDashboardTail: (baseUri: string, customerManagedId: string, kpiId: string, isHolding: boolean, kpiForHolding: boolean) => string;
export declare const getRoleString: (key: string) => string;
export declare const personListAdd: (personList: ModelsScheduler.PersonList, person: ModelsScheduler.Person) => ModelsScheduler.PersonList;
export declare const personListRemove: (personList: ModelsScheduler.PersonList, person: ModelsScheduler.Person) => ModelsScheduler.PersonList;
export declare const getCustomerSearchType: (text: string) => any;
export declare const searchHistoryListAppend: (searchHistoryList: Models.SearchHistoryList, customer: ModelsCrm.Customer) => Models.SearchHistoryList;
export declare const getPersonName: (item: ModelsScheduler.Person) => string;
export declare const personHistoryListAppend: (currentList: ModelsScheduler.PersonList, appendList: ModelsScheduler.PersonList) => ModelsScheduler.PersonList;
export declare const getCookieString: (data: CookieData[]) => string;
