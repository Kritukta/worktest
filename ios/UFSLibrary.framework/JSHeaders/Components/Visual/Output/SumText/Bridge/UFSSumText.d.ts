/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    value: number;
    label?: string;
    currency?: string;
    block?: boolean;
    small?: boolean;
    testID?: string;
}
export interface PrivateProps extends Props {
    hasLabelHintIcon: boolean;
    hasTitleHintIcon: boolean;
}
export default class UFSSumTextManager extends Component<Props, {}> {
    static defaultProps: {
        label: string;
        currency: string;
        block: boolean;
        small: boolean;
    };
    render(): JSX.Element;
}
