/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface ComboBoxEvent {
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
    *  Set loading state for content
    */
    loading?: boolean;
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
    onChange?: (event: ComboBoxEvent) => void;
}
export default class UFSComboBoxManager extends Component<PublicProps, {}> {
    onChange: (event: ComboBoxEvent) => void;
    private contentProps(filterOutHintIcons);
    dismissKeyboard: () => void;
    render(): JSX.Element;
}
