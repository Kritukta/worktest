/*
 * Created by Voropaev D.N.
 */
import { handleActions } from 'redux-actions';
import * as ModelsProductPackage from "../models/ModelsProductPackage";
const reducerProductPackage = handleActions({}, ModelsProductPackage.initialState.state);
export default reducerProductPackage;
//# sourceMappingURL=ReducerProductPackage.js.map