/// <reference types="react" />
import { Component } from 'react';
export declare const UFSDateInputType: any;
export interface Props {
    /**
    *  Set string for placeholder
    */
    placeholder?: string;
    /**
    *  Set maximum number of input characters, should be > 0
    */
    maxLength?: number;
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
    *  When this property is set to 'true' then the underline is visible
    */
    underlined?: boolean;
    /**
    *  Sets the format with which the value will be formatted
    */
    format?: string;
    /**
    *  Sets the locale of picker
    */
    locale?: string;
    /**
    *  Sets type of formatting for value
    */
    dateType?: number;
    /**
    *  Sets min date that can be chosen
    */
    min?: Date;
    /**
    *  Sets max date that can be chosen
    */
    max?: Date;
    /**
    *  It is called whenever text input is enter to focus state
    */
    onFocus?: () => void;
    /**
    *  It is called whenever text input is exit from focus state
    */
    onBlur?: () => void;
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
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *  Set text for text input
    */
    value?: Date;
    /**
    *  It is called whenever the user changes the value in the field
    */
    onChange?: (value: Date) => void;
    /**
    *  It is called whenever tapped calendar icon
    */
    onVisibilityChange?: (calendarActive: boolean) => void;
}
export interface PrivateProps extends Props {
    value?: string;
    onChange?: (event: DateInputNativeEvents) => void;
    onVisibilityChange?: (event: DateInputNativeEvents) => void;
}
export interface DateInputNativeEvents {
    nativeEvent: {
        calendarActive: boolean;
        value: string;
    };
}
export default class UFSDateInputManager extends Component<PublicProps, {}> {
    componentWillUpdate(nextProps: Object, nextState: Object): void;
    onChange: (event: DateInputNativeEvents) => void;
    onVisibilityChange: (event: DateInputNativeEvents) => void;
    render(): JSX.Element;
}
