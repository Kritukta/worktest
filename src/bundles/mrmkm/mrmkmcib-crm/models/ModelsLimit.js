/**
 * Models for Limit container.
 *
 * @author Burnaev M.U.
 * @see
 */
import { Enums } from '../Enums';
// TODO Describe models used in Limit actions and thunks.
const defaultState = {
    get state() {
        return {
            currentTab: Enums.LimitTab.Total,
            currentTotalTab: Enums.LimitTotalTab.Approved,
        };
    }
};
export const initialState = {
    get state() {
        return defaultState.state;
    }
};
//# sourceMappingURL=ModelsLimit.js.map