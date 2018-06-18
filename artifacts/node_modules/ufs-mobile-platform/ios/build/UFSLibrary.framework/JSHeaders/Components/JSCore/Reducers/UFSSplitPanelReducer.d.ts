import { ISplitPanelChildState } from '../Common/UFSInterfaces';
import { Action } from 'redux-actions';
export declare type ISplitPanelState = {
    contentScenes: ISplitPanelChildState[];
    accessoryScenes: ISplitPanelChildState[];
};
export declare type IState = {
    [index: string]: ISplitPanelState;
};
declare var _default: (state: {}, action: Action<{}>) => {};
export default _default;
