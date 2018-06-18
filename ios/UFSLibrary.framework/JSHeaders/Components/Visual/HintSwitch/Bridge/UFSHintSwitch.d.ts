/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface HintSwitchEvent {
    nativeEvent: {
        value: boolean;
    };
}
export interface Props {
    /**
    *	Set flag that indicate is checkbox checked or not
    */
    checked?: boolean;
    /**
    *	Set flag that indicate is checkbox disabled or not
    */
    disabled?: boolean;
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
    onChange?: (event: HintSwitchEvent) => void;
}
declare var _default: React.ComponentClass<any>;
export default _default;
