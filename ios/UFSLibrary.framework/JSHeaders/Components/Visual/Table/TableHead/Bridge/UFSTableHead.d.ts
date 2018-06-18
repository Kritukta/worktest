/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
export interface Props {
    noPaddings?: boolean;
    testID?: string;
    style?: ViewStyle;
}
export default class UFSTableHeadManager extends React.Component<Props, {}> {
    render(): JSX.Element;
}
