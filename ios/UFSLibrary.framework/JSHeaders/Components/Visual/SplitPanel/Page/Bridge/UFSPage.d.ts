/// <reference types="react-native" />
/// <reference types="react" />
import React, { Component } from 'react';
import { ViewStyle } from 'react-native';
export interface Props extends React.Props<UFSPageManager> {
    hasPrev?: boolean;
    showAutoBackButton?: boolean;
    barColor?: string;
    onBackButtonClick?: () => void;
    showBorder?: boolean;
    scrollEnabled?: boolean;
    style?: ViewStyle;
    content?: JSX.Element;
    testID?: string;
}
export default class UFSPageManager extends Component<Props, {}> {
    private leftPageContent;
    private centerPageContent;
    private rightPageContent;
    private scrollViewRef;
    componentWillMount(): void;
    onScrollViewRef: (ref: any) => void;
    scrollTo(y: number, animated: boolean): void;
    scrollToEnd(animated: Boolean): void;
    componentWillReceiveProps(nextProps: Object): void;
    handlePropsUpdate: (props: Props) => void;
    renderHeaderContent: () => JSX.Element;
    render(): JSX.Element;
}
