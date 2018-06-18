/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
    noPaddings?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export default class UFSTableCellManager extends Component<Props, {}> {
    render(): JSX.Element;
}
