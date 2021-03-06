import { handleActions } from 'redux-actions';
import { WorkflowStatus } from '../Common/UFSInterfaces';
import { WF_INIT, WF_SUCCESS, WF_SEND_COMMAND, WF_ERROR, WF_UPDATE_DATA, WF_HINT_VISIBILITY, WF_HINT_SWITCH_ENABLING } from '../Constants/ActionTypes';
const INITIAL_STATE = {
    isLoading: false,
    hintsVisible: true,
    hintSwitchEnabled: true
};
export default handleActions({
    [WF_INIT]: (state, action) => {
        return Object.assign({}, state, {
            url: action.payload.options.url,
            flowName: action.payload.options.flowName
        });
    },
    [WF_SEND_COMMAND]: (state, action) => {
        return Object.assign({}, state, {
            isLoading: true
        });
    },
    [WF_SUCCESS]: (state, action) => {
        const { body } = action.payload;
        return Object.assign({}, state, {
            isLoading: false,
            status: WorkflowStatus[body.result],
            stateName: body.state || state.stateName,
            flowName: body.flow || state.flowName,
            processId: body.pid || state.processId,
            url: body.url || state.url,
            data: body.output,
            history: body.history || state.history,
            hints: body.hints || state.hints
        });
    },
    [WF_ERROR]: (state, action) => {
        return Object.assign({}, state, {
            isLoading: false,
            error: action.error,
            workflowError: action.payload.workflowError
        });
    },
    [WF_UPDATE_DATA]: (state, action) => {
        return Object.assign({}, state, {
            data: Object.assign({}, state.data, action.payload.data)
        });
    },
    [WF_HINT_SWITCH_ENABLING]: (state, action) => {
        return Object.assign({}, state, {
            hintSwitchEnabled: action.payload.enabled
        });
    },
    [WF_HINT_VISIBILITY]: (state, action) => {
        return Object.assign({}, state, {
            hintsVisible: action.payload.visible
        });
    }
}, INITIAL_STATE);
//# sourceMappingURL=UFSWorkflowReducer.js.map