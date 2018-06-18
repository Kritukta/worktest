/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    count?: number;
    onExecute?: () => void;
    testID?: string;
}
export default class UFSNavigationFilterButtonManager extends Component<Props, {}> {
    render(): JSX.Element;
}
