import { Action } from 'redux-actions';
import { WorkflowOptions, WorkflowData, WorkflowError } from '../Common/UFSInterfaces';
import { UFSError } from '../Common/UFSError';
export interface IWFInitPayload {
    options: WorkflowOptions;
}
export interface IWFSendCommandPayload {
}
export interface IWFSuccessPayload {
    body: WorkflowData;
}
export interface IWFErrorPayload {
    error: UFSError;
    workflowError: WorkflowError;
}
export interface IWFUpdateStateDataAction {
    data: Object;
}
export interface IWFUpdateHintSwitchEnabling {
    enabled: boolean;
}
export interface IWFUpdateHintsVisibility {
    visible: boolean;
}
export declare const init: (t1: WorkflowOptions) => Action<IWFInitPayload>;
export declare const sendCommand: () => Action<void>;
export declare const success: (t1: WorkflowData) => Action<IWFSuccessPayload>;
export declare const error: (t1: UFSError, t2: WorkflowError) => Action<IWFErrorPayload>;
export declare const updateStateDataAction: (t1: Object) => Action<IWFUpdateStateDataAction>;
export declare const updateHintSwitchEnabling: (t1: boolean) => Action<IWFUpdateHintSwitchEnabling>;
export declare const updateHintsVisibility: (t1: boolean) => Action<IWFUpdateHintsVisibility>;
