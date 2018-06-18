import { NativeModules } from 'react-native';
import * as actions from '../../../../JSCore/Actions//UFSWorkflowActionCreators';
import { WorkflowStatus } from '../../../../JSCore/Common/UFSInterfaces';
import { makeUFSErrorFromReactError, makeWorkflowErrorWithReactError } from '../../../../JSCore/Common/UFSError';
var Workflow = NativeModules.UFSWorkflowBridge;
var store;
export function setStore(applicationStore) {
    store = applicationStore;
}
export function setBaseUrl(baseUrl) {
    Workflow.setBaseUrl(baseUrl);
}
export function initFlow(options, data = {}) {
    store.dispatch(actions.init(options));
    const { processId, status } = store.getState().workflow;
    const url = options.url;
    const flowName = options.flowName;
    if (processId && status !== WorkflowStatus.END) {
        sendStateEvent(status === WorkflowStatus.EXTERNAL_RETURN ? 'on-return' : 'on-enter', data);
    }
    else {
        const dataString = JSON.stringify(data);
        store.dispatch(actions.sendCommand());
        Workflow.initFlow(flowName, url, dataString)
            .then((success) => {
            store.dispatch(actions.success(success));
        })
            .catch((error) => {
            const ufsError = makeUFSErrorFromReactError(error);
            const workflowError = makeWorkflowErrorWithReactError(error);
            store.dispatch(actions.error(ufsError, workflowError));
        });
    }
}
export function sendStateEvent(eventName, data = {}) {
    const state = store.getState();
    const processId = state.workflow.processId;
    const url = state.workflow.url;
    const dataString = JSON.stringify(data);
    store.dispatch(actions.sendCommand());
    Workflow.sendStateEvent(eventName, url, processId, dataString)
        .then((success) => {
        store.dispatch(actions.success(success));
    })
        .catch((error) => {
        const ufsError = makeUFSErrorFromReactError(error);
        const workflowError = makeWorkflowErrorWithReactError(error);
        store.dispatch(actions.error(ufsError, workflowError));
    });
}
export function rollbackState(stateId) {
    const state = store.getState();
    const processId = state.workflow.processId;
    const url = state.workflow.url;
    store.dispatch(actions.sendCommand());
    Workflow.rollbackState(stateId, url, processId)
        .then((success) => {
        store.dispatch(actions.success(success));
    })
        .catch((error) => {
        const ufsError = makeUFSErrorFromReactError(error);
        const workflowError = makeWorkflowErrorWithReactError(error);
        store.dispatch(actions.error(ufsError, workflowError));
    });
}
export function exitFlow() {
    const state = store.getState();
    const processId = state.workflow.processId;
    const url = state.workflow.url;
    store.dispatch(actions.sendCommand());
    Workflow.exitFlow(url, processId)
        .then((success) => {
        store.dispatch(actions.success(success));
    })
        .catch((error) => {
        const ufsError = makeUFSErrorFromReactError(error);
        const workflowError = makeWorkflowErrorWithReactError(error);
        store.dispatch(actions.error(ufsError, workflowError));
    });
}
export function abortProcess() {
    const state = store.getState();
    const processId = state.workflow.processId;
    const url = state.workflow.url;
    store.dispatch(actions.sendCommand());
    Workflow.abortProcess(url, processId)
        .then((success) => {
        store.dispatch(actions.success(success));
    })
        .catch((error) => {
        const ufsError = makeUFSErrorFromReactError(error);
        const workflowError = makeWorkflowErrorWithReactError(error);
        store.dispatch(actions.error(ufsError, workflowError));
    });
}
export function updateStateData(data) {
    store.dispatch(actions.updateStateDataAction(data));
}
export function submitStateEvent(eventName) {
    const state = store.getState();
    sendStateEvent(eventName, state.workflow.data);
}
export function updateHintSwitchEnabling(enabling) {
    store.dispatch(actions.updateHintSwitchEnabling(enabling));
}
export function updateHintsVisibility(visible) {
    store.dispatch(actions.updateHintsVisibility(visible));
}
//# sourceMappingURL=UFSWorkflow.js.map