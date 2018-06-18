/**
 * Models for DealList container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
// TODO Describe models used in DealList actions and thunks.
const defaultState = {
    get state() {
        return {
            supParameters: {
                DealSalesMethod: '',
                DealApprovedStatusList: '',
                DealSalesMethodRoadMapStandard: '',
                DealSalesMethodRoadMapCredit: '',
            },
            currentTab: Enums.DealListTab.DealOpenedList,
            filtersEditorOpened: null,
            filtersEditorClosed: null,
            filtersActiveOpened: null,
            filtersActiveClosed: null,
            filteredStagesList: defaultValues.ClassifierList,
            filteredCurrencyList: defaultValues.ClassifierList,
            infoMessage: '',
            isButtonCreateVisible: true,
            isCreateDealEnable: false,
            isEditDealEnable: false,
            isVisiblePopoverFilter: false,
            currentPage: 0,
            dealList: defaultValues.DealList,
            dealOpenedList: defaultValues.DealList,
            dealClosedList: defaultValues.DealList,
            refresh: defaultValues.boolean,
            refreshInProgress: false,
            refreshError: null,
            dealListPage: defaultValues.DealListPage,
            dealListPageFetching: false,
            dealListPageError: null,
            dealListPageCachedDate: null,
            currentCustomerManaged: defaultValues.CustomerManaged,
            startAnimation: false,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsDealList.js.map