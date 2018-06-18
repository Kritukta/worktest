/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export declare const UFSIconType: any;
export interface Props {
    /**
    *  Set type for icon.
    */
    type: number;
    /**
*  Set disabled state for icon.
*/
    disabled?: boolean;
    color?: string;
    style?: ViewStyle;
    testID?: string;
}
export default class UFSIconManager extends Component<Props, {}> {
    render(): JSX.Element;
}
