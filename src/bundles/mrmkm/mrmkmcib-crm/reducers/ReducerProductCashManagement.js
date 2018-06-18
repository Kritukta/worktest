/*
 * Created by Voropaev D.N.
 */
import { handleActions } from 'redux-actions';
import * as ModelsProductCashManagement from "../models/ModelsProductCashManagement";
const reducerProductCashManagement = handleActions({}, ModelsProductCashManagement.initialState.state);
export default reducerProductCashManagement;
//# sourceMappingURL=ReducerProductCashManagement.js.map