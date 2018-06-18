/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface NumberInputEvent {
    nativeEvent: {
        value?: string;
    };
}
export interface Props {
    /**
    *  Set return key type.
    */
    returnKeyType?: number;
    /**
    *  Flag define automatic hiding keyboard when RETURN button pressed
    */
    autoDismissKeyboard?: boolean;
    /**
    *  Set maximum number of input characters, should be > 0
    */
    maxLength?: number;
    /**
    *  Set currency title
    */
    currency?: string;
    /**
     *  Set number of fractional digits
     */
    fractionalDigitsCount?: number;
    /**
    *  Set string for header label
    */
    label?: string;
    /**
    *  Set string for title label
    */
    title?: string;
    /**
    *  When this property is set to 'true' then the text input is not active
    */
    disabled?: boolean;
    /**
    *  It is called whenever the user changes the value in the field
    */
    underlined?: boolean;
    /**
    *  It is called whenever text input is enter to focus state
    */
    onFocus?: () => void;
    /**
    *  It is called whenever text input is exit from focus state
    */
    onBlur?: () => void;
    /**
    *  It is called when return key pressed
    */
    onReturnKeyPressed?: () => void;
    /**
    *  Set warning state for text input
    */
    hasWarning?: boolean;
    /**
    *  Set warning text for text input
    */
    warningText?: string;
    /**
    *  Set error state for text input
    */
    hasError?: boolean;
    /**
    *  Set error text for text input
    */
    errorText?: string;
    /**
    * Set focused state for text input
    */
    autoFocus?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *  Set text for text input
    */
    value?: number;
    /**
    *  It is called whenever the user changes the value in the field
    */
    onChange?: (value: number) => void;
}
export interface PrivateProps extends Props {
    value?: string;
    onChange?: (event: NumberInputEvent) => void;
}
export default class UFSNumberInputManager extends React.Component<PublicProps, {}> {
    static defaultProps: {
        value: number;
        fractionalDigitsCount: number;
        currency: string;
    };
    value: number;
    stringValue: string;
    componentWillUpdate(nextProps: Object, nextState: Object): void;
    onChange: (event: NumberInputEvent) => void;
    dismissKeyboard: () => void;
    render(): JSX.Element;
}
