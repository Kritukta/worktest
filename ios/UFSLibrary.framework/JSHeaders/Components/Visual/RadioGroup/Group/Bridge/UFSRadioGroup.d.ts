/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface RadioGroupEvent {
    nativeEvent: {
        index: number;
        value: string;
    };
}
export interface Props {
    /**
    *  Set string for value.
    */
    value?: string;
    /**
    *  Set string for title label.
    */
    label?: string;
    /**
    *  When this property is set to 'true' then this component is not active
    */
    disabled?: boolean;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *  The function is executed by pressing the component button.
    *  return {index, value} json.
    */
    onChange?: (index: number, value: string) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: RadioGroupEvent) => void;
}
export default class UFSRadioGroupManager extends React.Component<PublicProps, {}> {
    onChange: (event: RadioGroupEvent) => void;
    render(): JSX.Element;
}
