/*
 * Created by Voropaev D.N.
 */
import { handleActions } from 'redux-actions';
import * as ModelsProductTariffPlan from "../models/ModelsProductTariffPlan";
const reducerProductTariffPlan = handleActions({}, ModelsProductTariffPlan.initialState.state);
export default reducerProductTariffPlan;
//# sourceMappingURL=ReducerProductTariffPlan.js.map