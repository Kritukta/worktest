/**
 * Converters for network response and request data.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE, RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST } from "mrmkmcib-crm";
import { supParamNames } from 'mrmkmcib-app';
import { Enums } from '../Enums';
export const RESPONSE_APP_DASHBOARD_CALL_QLIK_AVAILABILITY_CHECK_TO_BOOLEAN = (data) => {
    // TODO Convert response data to corresponding model.
    return defaultValues.boolean;
};
export const RESPONSE_APP_DASHBOARD_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST = (data) => {
    return RESPONSE_APP_CRM_SEARCH_CALL_GET_CUSTOMER_SEARCH_LIST_TO_CUSTOMER_LIST(data);
};
export const RESPONSE_APP_DASHBOARD_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE = (data) => {
    return RESPONSE_APP_CRM_SEARCH_APPEND_CALL_GET_CUSTOMER_SEARCH_LIST_PAGE_TO_CUSTOMER_LIST_PAGE(data);
};
export const RESPONSE_CUSTOMER_DASHBOARD_CALL_QLIK_AVAILABILITY_CHECK_TO_BOOLEAN = (data) => {
    // TODO Convert response data to corresponding model.
    return defaultValues.boolean;
};
export const REQUEST_DASHBOARD_CALL_POST_PERFORM_SEND = (data) => {
    return { exportFilters: data.exportFilters, emailList: data.emailList };
};
export const POST_PREFORM_SEND_TO_BOOLEAN = (data) => {
    return defaultValues.boolean;
};
export const CONVERT_OWA_FOUND_PEOPLE_ITEM = (item) => {
    return {
        email: item.email.EmailAddress ? item.email.EmailAddress : '',
        name: item.name ? item.name : '',
        firstName: item.name.split(' ')[1] ? item.name.split(' ')[1] : '',
        lastName: item.name.split(' ')[1] ? item.name.split(' ')[0] : '',
        middleName: item.name.split(' ')[1] ? item.name.split(' ')[2] : '',
        division: item.name.split(' ')[1] ? (item.name.split(' ')[3] ? item.name.split(' ')[3].replace(/[{}]/g, "") : '') : '',
        city: item.city ? item.city : '',
        position: null,
        companyName: null,
        workPhone: null
    };
};
export const CONVERT_ERROR = (data) => {
    // TODO Convert response data to corresponding model.
    return {
        // type: (data == '' || data == null || data == {}) ? Enums.ErrorType.None : Enums.ErrorType.Unknown,
        type: data.type ? data.type : Enums.ErrorType.Unknown,
        code: (data.code && typeof data.code == "string") ? data.code : '',
        message: (data.message && typeof data.message == "string") ? data.message : '',
        comment: (data.comment && typeof data.comment == "string") ? data.comment : '',
    };
};
export const CONVERT_FILE_FORMAT_FROM_ENUM_TO_STRING = (fileFormat) => {
    switch (fileFormat) {
        case Enums.FileFormat.Excel:
            return 'xlsx';
        case Enums.FileFormat.PowerPoint:
            return 'pptx';
        case Enums.FileFormat.PDF:
            return 'pdf';
        default:
            return '';
    }
};
export const CONVERT_NUM_OF_ADDRESSAT_TO_PHRASE = (quantity) => {
    switch (quantity) {
        case 1:
            return 'ВЫБРАН 1 АДРЕСАТ';
        case 2:
        case 3:
        case 4:
            return `ВЫБРАНО ${quantity} АДРЕСАТА`;
        case 5:
            return 'ВЫБРАНО 5 АДРЕСАТОВ';
        default:
            return '';
    }
};
export const CONVERT_QLICK_MESSAGE_TO_QLIK_PARAMETERS = (parameters) => {
    let selectionsParsed = JSON.parse(parameters);
    return selectionsParsed;
};
export const CONVERT_SUP_PARAMETERS = (response) => {
    return {
        kmUrl: 'http://sbt-ouiefs-0105.sigma.sbrf.ru/extensions/sberdashboard2/index.html',
        chiefUrl: (typeof response) === 'object' &&
            (supParamNames().DashboardChiefURL in response) &&
            Array.isArray(response[supParamNames().DashboardChiefURL]) ?
            response[supParamNames().DashboardChiefURL][0] :
            '',
        accessMode: (typeof response) == 'object' &&
            (supParamNames().dashboardExportAccessMode in response) &&
            Array.isArray(response[supParamNames().dashboardExportAccessMode]) ?
            response[supParamNames().dashboardExportAccessMode][0] === 'true' :
            true,
    };
};
//# sourceMappingURL=Converters.js.map