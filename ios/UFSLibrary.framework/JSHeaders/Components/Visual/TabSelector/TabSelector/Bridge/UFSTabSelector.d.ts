/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export declare const UFSTabSelectorAutoWidthType: any;
export interface TabSelectorEvent {
    nativeEvent: {
        value: string;
        index: number;
    };
}
export interface Props {
    /**
    *  Select item with value
    */
    value?: string;
    style?: ViewStyle;
    testID?: string;
    autoWidth?: number;
}
export interface PublicProps extends Props {
    /**
    *  It is called whenever the user selects item
    */
    onChange?: (index: number, value: string) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: TabSelectorEvent) => void;
}
export default class UFSTabSelectorManager extends Component<PublicProps, {}> {
    static defaultProps: {
        autoWidth: any;
    };
    onChange: (event: TabSelectorEvent) => void;
    render(): JSX.Element;
}
