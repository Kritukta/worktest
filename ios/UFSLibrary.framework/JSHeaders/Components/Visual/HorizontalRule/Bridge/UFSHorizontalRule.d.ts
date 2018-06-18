/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
    style?: ViewStyle;
    testID?: string;
}
export default class UFSHorizontalRuleManager extends Component<Props, {}> {
    render(): JSX.Element;
}
