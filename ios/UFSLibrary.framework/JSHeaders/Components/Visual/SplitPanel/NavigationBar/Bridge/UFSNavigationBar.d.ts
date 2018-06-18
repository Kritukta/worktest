/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    showBorder?: boolean;
    backgroundColor?: string;
    testID?: string;
}
export default class UFSNavigationBarManager extends Component<Props, {}> {
    render(): JSX.Element;
}
