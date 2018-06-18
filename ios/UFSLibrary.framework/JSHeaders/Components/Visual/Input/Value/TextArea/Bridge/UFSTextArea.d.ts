/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface TextAreaEvent {
    nativeEvent: {
        value?: string;
    };
}
export interface Props {
    /**
    *  Set maximum number of input characters, should be > 0
    */
    maxLength?: number;
    /**
    *  Set text for text input
    */
    value?: string;
    /**
    *  Set string for title label
    */
    label?: string;
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
    *  It is called whenever text area is enter to focus state
    */
    onFocus?: () => void;
    /**
    *  It is called whenever text area is exit from focus state
    */
    onBlur?: () => void;
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
    onChange: (value: string) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: TextAreaEvent) => void;
}
export default class UFSTextAreaManager extends React.Component<PublicProps, {}> {
    componentWillUpdate(nextProps: Object, nextState: Object): void;
    onChange: (event: TextAreaEvent) => void;
    dismissKeyboard: () => void;
    render(): JSX.Element;
}
