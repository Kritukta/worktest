/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    /**
    * Set title
    */
    title: string;
    /**
    * Set subtitle
    */
    subtitle?: string;
    /**
    * Limit title's number of lines
    */
    maxTitleLines?: number;
    /**
    * Limit subtitle's number of lines
    */
    maxSubtitleLines?: number;
    testID?: string;
}
export interface PrivateProps extends Props {
    hasIcon: boolean;
}
export default class UFSMainContainerManager extends Component<Props, {}> {
    render(): JSX.Element;
}
