/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface TextInputEvent {
    nativeEvent: {
        value: string;
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
    *  Set keyboard type. Default keyboard type is ASCII
    */
    keyboardType?: number;
    /**
    *  Set maximum number of input characters, should be > 0
    */
    maxLength?: number;
    /**
    *  Set text for text input
    */
    value?: string;
    /**
    *  Set string for header label
    */
    label?: string;
    /**
    *  Set string for title label
    */
    title?: string;
    /**
    *  Set string for placeholder
    */
    placeholder?: string;
    /**
    *  When this property is set to 'true' then the text input is not active
    */
    disabled?: boolean;
    /**
    *  When this property is set to 'true' then the underline is visible
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
    *  When this property is set to 'true' then the text input is secure representation
    */
    secure?: boolean;
    /**
    * Set focused state for text input
    */
    autoFocus?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *  It is called whenever the user changes the value in the field
    */
    onChange?: (value: string) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: TextInputEvent) => void;
}
export default class UFSTextInputManager extends React.Component<PublicProps, {}> {
    componentWillUpdate(nextProps: Object, nextState: Object): void;
    onChange: (event: TextInputEvent) => void;
    dismissKeyboard: () => void;
    render(): JSX.Element;
}
export declare const UFSKeyboardType: any;
export declare const UFSReturnKeyType: any;
