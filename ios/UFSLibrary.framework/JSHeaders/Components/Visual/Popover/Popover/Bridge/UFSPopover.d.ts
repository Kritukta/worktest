/// <reference types="react" />
/// <reference types="react-native" />
import React, { Component } from 'react';
import { ViewStyle } from 'react-native';
export declare const UFSPopoverType: any;
export declare const UFSPopoverPosition: any;
export interface Props extends React.Props<UFSPopoverManager> {
    opened?: boolean;
    onOutsideTap?: () => void;
    type?: number;
    target: React.Ref<any>;
    position?: number[];
    style?: ViewStyle;
    testID?: string;
}
export interface PrivateProps extends Props {
    popoverHeight?: number;
    popoverPosition?: number[];
}
export default class UFSPopoverManager extends Component<Props, {}> {
    private target;
    componentWillReceiveProps(nextProps: Props): void;
    renderPopoverContentIfNeeded: () => JSX.Element;
    render(): JSX.Element;
}
