/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
    /**
     * Set visibility of inter cells separator
     */
    underlined?: boolean;
    noPaddings?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export default class UFSTableManager extends Component<Props, {}> {
    static defaultProps: {
        underlined: boolean;
    };
    render(): JSX.Element;
}
