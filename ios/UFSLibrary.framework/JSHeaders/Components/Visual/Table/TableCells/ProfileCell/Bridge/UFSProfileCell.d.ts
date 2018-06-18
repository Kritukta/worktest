/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
    /**
     * Set title
     */
    title?: string;
    /**
     * Set subtitle
     */
    subtitle?: string;
    /**
     * Set visibility of small arrow image in the right upper corner
     */
    hasArrow?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export default class UFSProfileCellManager extends Component<Props, {}> {
    static defaultProps: {
        hasArrow: boolean;
    };
    render(): JSX.Element;
}
