import { handleActions } from 'redux-actions';
import { SELECT_MENU_ITEM } from '../Constants/ActionTypes';
const INITIAL_STATE = 0;
export default handleActions({
    [SELECT_MENU_ITEM]: (state, action) => {
        return action.payload.item;
    }
}, INITIAL_STATE);
//# sourceMappingURL=UFSRootComponentReducer.js.map