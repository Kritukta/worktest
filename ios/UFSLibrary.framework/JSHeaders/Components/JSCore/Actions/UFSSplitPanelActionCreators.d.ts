import { IPagePayload } from './../Common/UFSInterfaces';
import { Action } from 'redux-actions';
export interface IPopPayload {
    panelId: string;
}
export interface IPushPayload extends IPopPayload {
    id: number;
}
export interface IPopContentPayload extends IPopPayload {
}
export interface IPopAccessoryPayload extends IPopPayload {
}
export interface IPushContentPayload extends IPushPayload {
}
export interface IPushAccessoryPayload extends IPushPayload {
}
export interface IPopPayloadToPage extends IPopPayload {
    pageKey: string;
}
export declare const pushContent: (t1: number, t2: string, t3: IPagePayload) => Action<IPushContentPayload>;
export declare const pushAccessory: (t1: number, t2: string, t3: IPagePayload) => Action<IPushAccessoryPayload>;
export declare const popContent: (t1: string) => Action<IPopContentPayload>;
export declare const popAccessory: (t1: string) => Action<IPopAccessoryPayload>;
export declare const popContentToTop: (t1: string) => Action<IPopContentPayload>;
export declare const popAccessoryToTop: (t1: string) => Action<IPopAccessoryPayload>;
export declare const popContentToPage: (t1: string, t2: string) => Action<IPopPayloadToPage>;
export declare const popAccessoryToPage: (t1: string, t2: string) => Action<IPopPayloadToPage>;
