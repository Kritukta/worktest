import { createAction } from 'redux-actions';
import { POP_ACCESSORY, PUSH_ACCESSORY, POP_CONTENT, PUSH_CONTENT, POP_CONTENT_TO_TOP, POP_ACCESSORY_TO_TOP, POP_CONTENT_TO_PAGE, POP_ACCESSORY_TO_PAGE } from '../Constants/ActionTypes';
export const pushContent = createAction(PUSH_CONTENT, (nextPageId, panelId, pagePayload) => {
    return ({
        id: nextPageId,
        panelId,
        pagePayload
    });
});
export const pushAccessory = createAction(PUSH_ACCESSORY, (nextPageId, panelId, pagePayload) => {
    return ({
        id: nextPageId,
        panelId,
        pagePayload
    });
});
export const popContent = createAction(POP_CONTENT, (panelId) => {
    return ({
        panelId
    });
});
export const popAccessory = createAction(POP_ACCESSORY, (panelId) => {
    return ({
        panelId
    });
});
export const popContentToTop = createAction(POP_CONTENT_TO_TOP, (panelId) => {
    return ({
        panelId
    });
});
export const popAccessoryToTop = createAction(POP_ACCESSORY_TO_TOP, (panelId) => {
    return ({
        panelId
    });
});
export const popContentToPage = createAction(POP_CONTENT_TO_PAGE, (panelId, pageKey) => {
    return ({
        panelId,
        pageKey
    });
});
export const popAccessoryToPage = createAction(POP_ACCESSORY_TO_PAGE, (panelId, pageKey) => {
    return ({
        panelId,
        pageKey
    });
});
//# sourceMappingURL=UFSSplitPanelActionCreators.js.map