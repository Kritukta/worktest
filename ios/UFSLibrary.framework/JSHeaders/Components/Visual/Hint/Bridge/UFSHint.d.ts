/// <reference types="react-native" />
/// <reference types="react" />
import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface StateProps {
    text?: string;
    visible?: boolean;
}
export interface OwnProps {
    type: number;
    code: string;
    style?: ViewStyle;
    testID?: string;
}
export interface Props extends StateProps, OwnProps {
}
export declare const UFSHintType: any;
declare var _default: React.ComponentClass<any>;
export default _default;
