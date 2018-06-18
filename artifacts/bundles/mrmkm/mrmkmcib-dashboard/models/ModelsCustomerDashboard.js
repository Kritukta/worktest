/**
 * Models for CustomerDashboard container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in CustomerDashboard actions and thunks.
const defaultState = {
    get state() {
        return {
            currentRecipientList: defaultValues.PersonList,
            currentFileFormat: Enums.FileFormat.Excel,
            currentRepresentation: Enums.Representation.Slides,
            isVisiblePopoverShare: false,
            currentCustomerManaged: defaultValues.CustomerManaged,
            currentUser: defaultValues.Employee,
            currentQlikMessage: defaultValues.QlikMessage,
            qlikError: null,
            currentQlikUrl: null,
            qlikCookie: null,
            qlikAvailabilityCheck: defaultValues.boolean,
            qlikAvailabilityCheckFetching: false,
            qlikAvailabilityCheckError: null,
            qlikAvailabilityCheckCachedDate: null,
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
            isPopoverVisibleSearchScreen: false,
            isTrimmedTop: false,
            supParameters: defaultValues.SupParams,
            navigateBackData: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsCustomerDashboard.js.map