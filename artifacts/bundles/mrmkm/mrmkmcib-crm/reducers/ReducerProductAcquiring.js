/*
 * Created by Voropaev D.N.
 */
import { handleActions } from 'redux-actions';
import * as actionsProductAcquiring from '../actions/ActionsProductAcquiring';
import * as ModelsProductAcquiring from "../models/ModelsProductAcquiring";
const reducerProductAcquiring = handleActions({
    // Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate to agreement list view.
    [actionsProductAcquiring.NAVIGATE_TO_AGREEMENT_LIST_VIEW]: (state, action) => {
        return Object.assign({}, state);
    },
    // Thunk dispatched by "ProductAcquiring" screen. Thunk dispatched to navigate back to acquiring product view.
    [actionsProductAcquiring.NAVIGATE_TO_VIEW_PRODUCT_ACQUIRING]: (state, action) => {
        return Object.assign({}, state);
    },
}, ModelsProductAcquiring.initialState.state);
export default reducerProductAcquiring;
//# sourceMappingURL=ReducerProductAcquiring.js.map