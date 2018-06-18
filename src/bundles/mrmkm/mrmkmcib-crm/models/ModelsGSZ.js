/**
 * Models for GSZ container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in GSZ actions and thunks.
const defaultState = {
    get state() {
        return {
            gszActivityCreateMode: Enums.GSZActivityCreateMode.None,
            gszLoadingErrorModalIsVisible: false,
            currentGsz: defaultValues.Gsz,
            currentGszId: '',
            currentGszMember: defaultValues.GszMember,
            isVisiblePopoverChief: false,
            isVisiblePopoverSorting: false,
            isVisiblePopoverLimits: false,
            isActivityCreateMode: false,
            isVisiblePopoverCurator: false,
            inputSortingType: Enums.GszMemberListSortingType.ByName,
            isVisiblePopoverBorrowerList: false,
            isPopoverBorrowerListSearchActive: false,
            isRefreshBarActive: true,
            borrowerFilteredList: defaultValues.BorrowerList,
            inputBorrowerListSearch: '',
            currentBorrower: defaultValues.Borrower,
            memberSearchList: defaultValues.GszMemberList,
            isMemberListSearchMode: false,
            inputMemberListSearch: '',
            refresh: defaultValues.boolean,
            refreshInProgress: false,
            refreshError: null,
            currentGszFetching: false,
            currentGszError: null,
            currentGszCachedDate: null,
            gszLimit: defaultValues.GszLimit,
            gszLimitFetching: false,
            gszLimitError: null,
            gszLimitCachedDate: null,
            gszNavigationHistory: [],
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsGSZ.js.map