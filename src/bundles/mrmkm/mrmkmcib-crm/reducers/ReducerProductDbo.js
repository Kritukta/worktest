/*
 * Created by Voropaev D.N.
 */
import { handleActions } from 'redux-actions';
import * as ModelsProductDbo from "../models/ModelsProductDbo";
const reducerProductDbo = handleActions({}, ModelsProductDbo.initialState.state);
export default reducerProductDbo;
//# sourceMappingURL=ReducerProductDbo.js.map