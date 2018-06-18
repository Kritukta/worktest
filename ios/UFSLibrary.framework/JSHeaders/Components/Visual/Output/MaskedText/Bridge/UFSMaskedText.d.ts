/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    value: string;
    mask: string;
    block?: boolean;
    testID?: string;
}
export interface PrivateProps extends Props {
    label: string;
    hasLabelHintIcon: boolean;
    hasTitleHintIcon: boolean;
}
export default class UFSMaskedTextManager extends Component<Props, {}> {
    static defaultProps: {
        block: boolean;
    };
    render(): JSX.Element;
}
