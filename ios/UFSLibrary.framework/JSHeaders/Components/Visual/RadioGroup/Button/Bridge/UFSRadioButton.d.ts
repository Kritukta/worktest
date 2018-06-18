/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
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
    *  When this property is set to 'true' this component is not active
    */
    disabled?: boolean;
    style?: ViewStyle;
    /**
    *  The function is executed by selecting component.
    */
    onChange?: () => void;
    /**
    *  Set flag that indicate is underline invisible or not
    */
    underlined?: boolean;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *  The function is executed by selecting component.
    */
    onChange?: () => void;
}
export interface PrivateProps extends Props {
    /**
    *  The function is executed by selecting component.
    */
    onRadioButtonChange?: (event: React.ReactElement<any>) => void;
}
export default class UFSRadioButtonManager extends React.Component<PublicProps, {}> {
    static defaultProps: {
        label: string;
    };
    onChange: (event: React.ReactElement<any>) => void;
    render(): JSX.Element;
}
