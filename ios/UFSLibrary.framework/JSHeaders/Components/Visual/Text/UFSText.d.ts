/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { TextStyle, TextProperties } from 'react-native';
export interface Props extends TextProperties {
    preset?: TextStyle;
    numberOfLines?: number;
}
export default class UFSText extends Component<Props, {}> {
    private childrenWithoutHintIcons;
    private hintIconsWithAdditionalLayout;
    private renderText;
    render(): JSX.Element;
}
