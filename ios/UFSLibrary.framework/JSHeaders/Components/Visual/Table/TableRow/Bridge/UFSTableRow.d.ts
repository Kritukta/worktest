/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export declare const UnderlineType: any;
export interface Props {
    onClick?: () => void;
    selectable?: boolean;
    noPaddings?: boolean;
    style?: ViewStyle;
    testID?: string;
    disabled?: boolean;
    selected?: boolean;
    underlineType?: number;
}
export default class UFSTableRowManager extends Component<Props, {}> {
    hasBaseCellInChildren: () => boolean;
    tableRowPadding(): ViewStyle;
    render(): JSX.Element;
}
