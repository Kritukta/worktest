/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    title?: string;
    onClick?: () => void;
    testID?: string;
}
export default class UFSNavigationBackButtonManager extends Component<Props, {}> {
    render(): JSX.Element;
}
