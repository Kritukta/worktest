/// <reference types="react" />
import { Component } from 'react';
export interface Props {
    label?: string;
    block?: boolean;
    from?: Date;
    to?: Date;
    oneline?: boolean;
    testID?: string;
}
export interface PrivateProps extends Props {
    hasLabelHintIcon: boolean;
    hasTitleHintIcon: boolean;
}
export default class UFSDatePeriodManager extends Component<Props, {}> {
    static defaultProps: {
        from: Date;
        to: Date;
        label: string;
        block: boolean;
        oneline: boolean;
    };
    render(): JSX.Element;
}
