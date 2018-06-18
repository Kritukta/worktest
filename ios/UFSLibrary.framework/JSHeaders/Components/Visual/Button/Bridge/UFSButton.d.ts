/// <reference types="react-native" />
/// <reference types="react" />
import React, { Component } from 'react';
import { ViewStyle } from 'react-native';
export declare const UFSButtonType: any;
export interface Props extends React.Props<UFSButtonManager> {
    /**
    *  Set function for executing.
    */
    onExecute?: () => void;
    /**
     *  Set type for button.
     */
    type?: number;
    /**
     *  Set disabled state for button..
     */
    disabled?: boolean;
    /**
     *	Set title for button.
     */
    title?: string;
    style?: ViewStyle;
    testID?: string;
}
export default class UFSButtonManager extends Component<Props, {}> {
    private findButtonText;
    private buttonTitle;
    private findIcon;
    render(): React.ReactElement<UFSButtonManager>;
}
