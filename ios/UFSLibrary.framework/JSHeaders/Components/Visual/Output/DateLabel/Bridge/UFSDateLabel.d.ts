/// <reference types="react" />
import { Component } from 'react';
export declare const UFSDateFormat: any;
export interface Props {
    date: Date;
    label?: string;
    block?: boolean;
    oneline?: boolean;
    format?: number;
    testID?: string;
}
export interface PrivateProps extends Props {
    hasLabelHintIcon: boolean;
    hasTitleHintIcon: boolean;
}
export default class UFSDateLabelManager extends Component<Props, {}> {
    static defaultProps: {
        label: string;
        block: boolean;
        oneline: boolean;
        format: any;
    };
    render(): JSX.Element;
}
