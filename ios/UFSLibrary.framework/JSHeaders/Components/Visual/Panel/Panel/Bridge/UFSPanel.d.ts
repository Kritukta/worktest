/// <reference types="react" />
/// <reference types="react-native" />
import * as React from 'react';
import { ViewStyle } from 'react-native';
export declare const UFSPanelType: any;
export interface Props extends React.Props<UFSPanelManager> {
    /**
    *	Set type of panel
    */
    type: number;
    /**
    *	Set text in header of panel
    */
    header?: string;
    /**
    *	Set flag that indicate is panel has icon in header
    */
    hasIcon?: boolean;
    /**
    *  Set button in header
    */
    headerMedia?: JSX.Element;
    style?: ViewStyle;
    testID?: string;
}
export default class UFSPanelManager extends React.Component<Props, {}> {
    render(): JSX.Element;
}
