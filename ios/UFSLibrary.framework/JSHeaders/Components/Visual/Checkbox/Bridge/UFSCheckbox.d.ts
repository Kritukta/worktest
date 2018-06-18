/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface CheckboxEvent {
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
    /**
    *  Set flag that indicate is underline invisible or not
    */
    underlined?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *	It is called whenever the user changes the value of 'checked' parameter
    */
    onChange?: (checked: boolean) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: CheckboxEvent) => void;
}
export default class UFSCheckboxManager extends React.Component<PublicProps, {}> {
    onChange: (event: CheckboxEvent) => void;
    render(): JSX.Element;
}
