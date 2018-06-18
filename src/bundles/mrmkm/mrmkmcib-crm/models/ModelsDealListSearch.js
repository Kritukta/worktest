/**
 * Models for DealListSearch container.
 *
 * @author Vladykin A.S.
 * @see
 */
import { defaultValues } from './Models';
const defaultState = {
    get state() {
        return {
            dealSearchOpenedList: defaultValues.DealList,
            dealSearchClosedList: defaultValues.DealList,
            inputSearch: '',
            dealOpenedList: defaultValues.DealList,
            dealClosedList: defaultValues.DealList,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsDealListSearch.js.map