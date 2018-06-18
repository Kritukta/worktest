/**
 * Models for ProductPaymentAccount container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { defaultValues } from "./Models";
import { Enums } from '../Enums';
const defaultState = {
    get state() {
        return {
            currentTab: Enums.ProductPaymentAccountTab.Main,
            inputSumMin: null,
            inputSumMax: null,
            isVisiblePopoverFilter: false,
            inputOperationType: Enums.OperationType.DebtAndCredit,
            isVisiblePopoverPeriodType: false,
            inputPeriodType: Enums.PeriodType.Last5Days,
            inputFilterPeriodStart: null,
            inputFilterPeriodEnd: null,
            filterSumMin: null,
            filterSumMax: null,
            filterOperationType: Enums.OperationType.DebtAndCredit,
            operationFilteredList: defaultValues.PaymentAccountProductOperationList,
            operationList: defaultValues.PaymentAccountProductOperationList,
            operationListFetching: false,
            operationListError: null,
            operationListCachedDate: null,
            cardIndexList: defaultValues.PaymentAccountProductCardIndexList,
            cardIndexListFetching: false,
            cardIndexListError: null,
            cardIndexListCachedDate: null,
            productVspInfoFetching: false,
            productVspInfoFetchingError: null,
            productVspInfo: null,
            operationEksList: defaultValues.PaymentAccountProductOperationList,
            operationEksListFetching: false,
            operationEksListError: null,
            operationEksListCachedDate: null,
            cardIndexEksList: defaultValues.PaymentAccountProductCardIndexList,
            cardIndexEksListFetching: false,
            cardIndexEksListError: null,
            cardIndexEksListCachedDate: null,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsProductPaymentAccount.js.map