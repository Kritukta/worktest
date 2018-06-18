/// <reference types="react-native" />
/// <reference types="react" />
import React, { Component } from 'react';
import { ViewStyle } from 'react-native';
export declare const UFSTableColumnAlignment: any;
export interface Props {
    width?: string;
    align?: number;
    noPaddings?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export interface PrivateProps extends Props {
    widthString?: string;
    title?: string;
    hasHintIcon: boolean;
}
export default class UFSTableColumnManager extends Component<Props, {}> {
    static defaultProps: {
        align: any;
    };
    findColumnTitle: (children: React.ReactElement<any>[]) => string;
    columnTitle: (entity: React.ReactElement<any>) => string | React.ReactElement<any>;
    hasHintIcon: (hintIcons: React.ReactElement<any>[]) => boolean;
    render(): JSX.Element;
}
