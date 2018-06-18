import { Action } from 'redux-actions';
import { HistoryItem, WorkflowStatus, WorkflowError, Hints } from '../Common/UFSInterfaces';
import { UFSError } from '../Common/UFSError';
import { IWFSendCommandPayload } from '../Actions/UFSWorkflowActionCreators';
export interface IState {
    stateName?: string;
    flowName?: string;
    processId?: string;
    url?: string;
    isLoading?: boolean;
    error?: UFSError;
    workflowError?: WorkflowError;
    data?: Object;
    status?: WorkflowStatus;
    history?: HistoryItem[];
    hints?: Hints;
    hintsVisible?: boolean;
    hintSwitchEnabled?: boolean;
}
declare var _default: (state: IWFSendCommandPayload, action: Action<IWFSendCommandPayload>) => IWFSendCommandPayload;
export default _default;
