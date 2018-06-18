/**
 * Models for Employee container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in Employee actions and thunks.
const defaultState = {
    get state() {
        return {
            isExtendedMode: false,
            currentEmployeeId: '',
            currentEmployee: defaultValues.Employee,
            isVisiblePopoverPersonList: false,
            currentSubordinate: defaultValues.Employee,
            foundPeopleList: defaultValues.PersonList,
            foundPeopleListInProgress: false,
            foundPeopleListError: null,
            refresh: defaultValues.boolean,
            refreshInProgress: false,
            refreshError: null,
            currentEmployeeFetching: false,
            currentEmployeeError: null,
            currentEmployeeCachedDate: null,
            customerList: defaultValues.CustomerList,
            customerListFetching: false,
            customerListError: null,
            customerListCachedDate: null,
            subordinateList: defaultValues.MemberList,
            subordinateListFetching: false,
            subordinateListError: null,
            subordinateListCachedDate: null,
            currentMode: Enums.EmployeeMode.CustomerManaged,
            employeeNavigationHistory: [],
            isVisiblePopoverSubordinate: false,
            isVisibleErrorModal: defaultValues.boolean,
            isEmployeeShedulerAvailable: true,
            isVisibleCertificateAlertPopover: false,
            isValidMailCertificate: null,
            currentEmployeeHead: defaultValues.Employee,
            currentEmployeeHeadFetching: false,
            currentEmployeeHeadError: null,
            currentEmployeeHeadCachedDate: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsEmployee.js.map