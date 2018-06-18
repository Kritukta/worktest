import { handleActions, combineActions } from 'redux-actions';
import { POP_ACCESSORY, POP_CONTENT, PUSH_ACCESSORY, PUSH_CONTENT, POP_CONTENT_TO_TOP, POP_ACCESSORY_TO_TOP, POP_CONTENT_TO_PAGE, POP_ACCESSORY_TO_PAGE } from '../Constants/ActionTypes';
const handleSplitPanelAccessoryActions = handleActions({
    [POP_ACCESSORY_TO_TOP]: (state, action) => {
        return [];
    },
    [POP_ACCESSORY]: (state, action) => {
        const lastScene = state.length - 1;
        return lastScene < 0 ? [] : state.slice(0, lastScene);
    },
    [POP_ACCESSORY_TO_PAGE]: (state, action) => {
        for (var targetPageIndex = state.length - 1; targetPageIndex >= 0; targetPageIndex--) {
            if (state[targetPageIndex].pagePayload.key == action.payload.pageKey) {
                return state.slice(0, targetPageIndex + 1);
            }
        }
        return state;
    },
    [PUSH_ACCESSORY]: (state, action) => {
        return [...state, action.payload];
    }
}, []);
const handleSplitPanelContentActions = handleActions({
    [POP_CONTENT_TO_TOP]: (state, action) => {
        return [];
    },
    [POP_CONTENT]: (state, action) => {
        const lastScene = state.length - 1;
        return lastScene < 0 ? [] : state.slice(0, lastScene);
    },
    [POP_CONTENT_TO_PAGE]: (state, action) => {
        for (var targetPageIndex = state.length - 1; targetPageIndex >= 0; targetPageIndex--) {
            if (state[targetPageIndex].pagePayload.key == action.payload.pageKey) {
                return state.slice(0, targetPageIndex + 1);
            }
        }
        return state;
    },
    [PUSH_CONTENT]: (state, action) => {
        return [...state, action.payload];
    }
}, []);
const SPLIT_PANEL_INITIAL_STATE = {
    contentScenes: [],
    accessoryScenes: []
};
const handleSplitPanelActions = handleActions({
    [combineActions(POP_ACCESSORY, POP_ACCESSORY_TO_TOP, POP_ACCESSORY_TO_PAGE, PUSH_ACCESSORY)](state, action) {
        return Object.assign({}, state, {
            accessoryScenes: handleSplitPanelAccessoryActions(state.accessoryScenes, action)
        });
    },
    [combineActions(POP_CONTENT, POP_CONTENT_TO_TOP, POP_CONTENT_TO_PAGE, PUSH_CONTENT)](state, action) {
        return Object.assign({}, state, {
            contentScenes: handleSplitPanelContentActions(state.contentScenes, action)
        });
    },
}, SPLIT_PANEL_INITIAL_STATE);
const splitPanelActionGroup = combineActions(POP_CONTENT, PUSH_CONTENT, POP_ACCESSORY, PUSH_ACCESSORY, POP_ACCESSORY_TO_TOP, POP_ACCESSORY_TO_PAGE, POP_CONTENT_TO_TOP, POP_CONTENT_TO_PAGE);
export default handleActions({
    [splitPanelActionGroup]: (state, action) => {
        const panelId = action.payload.panelId;
        return Object.assign({}, state, {
            [panelId]: handleSplitPanelActions(state[panelId], action)
        });
    },
}, {});
//# sourceMappingURL=UFSSplitPanelReducer.js.map