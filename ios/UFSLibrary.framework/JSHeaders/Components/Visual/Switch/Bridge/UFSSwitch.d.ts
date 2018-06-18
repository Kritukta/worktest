/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface SwitchEvent {
    nativeEvent: {
        checked?: boolean;
    };
}
export interface Props {
    /**
    *	Set string for title label
    */
    label?: string;
    /**
    *	Set flag that indicate is checkbox checked or not
    */
    checked?: boolean;
    /**
    *	Set flag that indicate is checkbox disabled or not
    */
    disabled?: boolean;
    style?: ViewStyle;
    /**
    *  Set flag that indicate is underline invisible or not
    */
    underlined?: boolean;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *	It is called whenever the user changes the value of 'checked' parameter
    */
    onChange?: (checked: boolean) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: SwitchEvent) => void;
}
export default class UFSSwitchManager extends Component<PublicProps, {}> {
    onChange: (event: SwitchEvent) => void;
    render(): JSX.Element;
}
