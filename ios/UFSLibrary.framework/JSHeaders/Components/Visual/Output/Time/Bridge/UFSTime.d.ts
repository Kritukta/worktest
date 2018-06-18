/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    value: Date;
    label?: string;
    block?: boolean;
    oneline?: boolean;
    showSeconds?: boolean;
    testID?: string;
}
export interface PrivateProps extends Props {
    hasLabelHintIcon: boolean;
    hasTitleHintIcon: boolean;
}
export default class UFSTimeManager extends Component<Props, {}> {
    static defaultProps: {
        label: string;
        block: boolean;
        oneline: boolean;
        showSeconds: boolean;
    };
    render(): JSX.Element;
}
