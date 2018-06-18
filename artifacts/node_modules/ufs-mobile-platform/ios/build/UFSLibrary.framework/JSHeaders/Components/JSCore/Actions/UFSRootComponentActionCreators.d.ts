import { Action } from 'redux-actions';
export interface ISelectPayload {
    item: number;
}
export declare const select: (t1: number) => Action<ISelectPayload>;
