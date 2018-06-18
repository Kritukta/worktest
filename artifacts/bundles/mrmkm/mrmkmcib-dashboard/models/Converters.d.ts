/**
 * Converters for network response and request data.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Models as ModelsCrm } from "mrmkmcib-crm";
import { Models } from 'mrmkmcib-dashboard';
import Error from "../models/Error";
export declare const RESPONSE_APP_DASHBOARD_CALL_QLIK_AVAILABILITY_CHECK_TO_BOOLEAN: (data: any) => boolean;
export declare const RESPONSE_APP_DASHBOARD_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST: (data: any) => ModelsCrm.CustomerList;
export declare const RESPONSE_APP_DASHBOARD_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE: (data: any) => ModelsCrm.CustomerListPage;
export declare const RESPONSE_CUSTOMER_DASHBOARD_CALL_QLIK_AVAILABILITY_CHECK_TO_BOOLEAN: (data: any) => boolean;
export declare const REQUEST_DASHBOARD_CALL_POST_PERFORM_SEND: (data: Models.IPerformSend) => {
    exportFilters: string;
    emailList: string[];
};
export declare const POST_PREFORM_SEND_TO_BOOLEAN: (data: any) => boolean;
export declare const CONVERT_OWA_FOUND_PEOPLE_ITEM: (item: any) => {
    email: any;
    name: any;
    firstName: any;
    lastName: any;
    middleName: any;
    division: any;
    city: any;
    position: any;
    companyName: any;
    workPhone: any;
};
export declare const CONVERT_ERROR: (data: any) => Error;
export declare const CONVERT_FILE_FORMAT_FROM_ENUM_TO_STRING: (fileFormat: number) => string;
export declare const CONVERT_NUM_OF_ADDRESSAT_TO_PHRASE: (quantity: number) => string;
export declare const CONVERT_QLICK_MESSAGE_TO_QLIK_PARAMETERS: (parameters: string) => Models.GenerateFileParameters;
export declare const CONVERT_SUP_PARAMETERS: (response: any) => Models.SupParams;
