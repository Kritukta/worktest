/// <reference types="react" />
import { Component } from 'react';
import { Reducer } from 'redux-actions';
export interface Props {
    reducer?: Reducer<any, any>;
    middleware?: any[];
}
export default class UFSProvider extends Component<Props, {}> {
    render(): JSX.Element;
}
