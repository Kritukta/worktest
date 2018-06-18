import { SELECT_MENU_ITEM } from '../Constants/ActionTypes';
import { createAction } from 'redux-actions';
export const select = createAction(SELECT_MENU_ITEM, (item) => {
    return ({ item: item });
});
//# sourceMappingURL=UFSRootComponentActionCreators.js.map