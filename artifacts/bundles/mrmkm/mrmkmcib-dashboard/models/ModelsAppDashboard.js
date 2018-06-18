/**
 * Models for AppDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in AppDashboard actions and thunks.
const defaultState = {
    get state() {
        return {
            qlikAvailabilityCheckFetching: true,
            currentRecipientList: defaultValues.PersonList,
            currentFileFormat: Enums.FileFormat.Excel,
            currentRepresentation: Enums.Representation.Slides,
            isVisiblePopoverShare: false,
            qlikError: null,
            currentUser: defaultValues.Employee,
            currentQlikMessage: defaultValues.QlikMessage,
            isSearchMode: false,
            inputSearch: '',
            customerSearchType: 0,
            customerSearchError: '',
            isSearchError: false,
            currentSearchPage: 0,
            customerSearchList: defaultValues.CustomerList,
            isSearchCustomerManaged: true,
            qlikAvailabilityCheck: defaultValues.boolean,
            qlikAvailabilityCheckError: null,
            qlikAvailabilityCheckCachedDate: null,
            search: defaultValues.boolean,
            searchInProgress: false,
            searchError: null,
            customerSearchListFetching: false,
            customerSearchListError: null,
            customerSearchListCachedDate: null,
            searchAppend: defaultValues.boolean,
            searchAppendInProgress: false,
            searchAppendError: null,
            customerSearchListPage: defaultValues.CustomerListPage,
            customerSearchListPageFetching: false,
            customerSearchListPageError: null,
            customerSearchListPageCachedDate: null,
            searchHistoryList: defaultValues.SearchHistoryList,
            searchHistoryListInProgress: false,
            searchHistoryListError: null,
            personHistoryList: defaultValues.PersonList,
            personHistoryListInProgress: false,
            personHistoryListError: null,
            foundPersonList: defaultValues.PersonList,
            foundPersonListInProgress: false,
            foundPersonListError: null,
            inputSharePopoverSearch: '',
            sendFetching: false,
            sendError: null,
            sendSuccess: false,
            currentQlikUrl: null,
            qlikCookie: null,
            isPopoverVisibleSearchScreen: false,
            supParameters: defaultValues.SupParams,
            appBuildVersion: null,
            appServerUrl: null,
            appServerPath: null,
            navigateBackData: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsAppDashboard.js.map