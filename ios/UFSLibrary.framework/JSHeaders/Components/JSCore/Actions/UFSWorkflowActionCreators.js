import { createAction } from 'redux-actions';
import { WF_INIT, WF_SUCCESS, WF_SEND_COMMAND, WF_ERROR, WF_UPDATE_DATA, WF_HINT_VISIBILITY, WF_HINT_SWITCH_ENABLING } from '../Constants/ActionTypes';
export const init = createAction(WF_INIT, (options) => {
    return ({
        options
    });
});
export const sendCommand = createAction(WF_SEND_COMMAND);
export const success = createAction(WF_SUCCESS, (body) => {
    return ({
        body
    });
});
export const error = createAction(WF_ERROR, (error, workflowError) => {
    return ({
        workflowError,
        error
    });
});
export const updateStateDataAction = createAction(WF_UPDATE_DATA, (data) => {
    return ({
        data
    });
});
export const updateHintSwitchEnabling = createAction(WF_HINT_SWITCH_ENABLING, (enabled) => {
    return ({
        enabled
    });
});
export const updateHintsVisibility = createAction(WF_HINT_VISIBILITY, (visible) => {
    return ({
        visible
    });
});
//# sourceMappingURL=UFSWorkflowActionCreators.js.map