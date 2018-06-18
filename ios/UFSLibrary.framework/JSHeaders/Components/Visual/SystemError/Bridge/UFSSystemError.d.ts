/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    errorMessage?: string;
    testID?: string;
}
export default class UFSSystemErrorManager extends Component<Props, {}> {
    render(): JSX.Element;
}
