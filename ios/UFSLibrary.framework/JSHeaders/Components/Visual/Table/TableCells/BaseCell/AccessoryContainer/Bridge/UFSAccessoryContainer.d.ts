/// <reference types="react-native" />
/// <reference types="react" />
import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
}
export interface PrivateProps extends Props {
    style?: ViewStyle;
}
export default class UFSAccessoryContainerManager extends React.Component<Props, {}> {
    private childWithDefaultMargins(child);
    private childrenWithFixedLinkMargins(children);
    render(): JSX.Element;
}
