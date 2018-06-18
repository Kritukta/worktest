/// <reference types="react-native" />
/// <reference types="react" />
import React, { Component, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
export interface Props extends React.Props<UFSSplitPanelNavigationWrapper> {
    /**
     *  it's a required property, but parent component(UFSSplitPanel) will pass it.
     *  Therefore marked as optional so that developer dont need to specify it by himself.
     */
    panelId?: string;
    showAutoBackButton?: boolean;
    style?: ViewStyle;
}
export interface UFSSplitPanelNavigationWrappedComponent {
    onNavigationPropsUpdate: (children?: ReactNode) => void;
    onNavigationReady?: (navigatorRef: React.ReactInstance) => void;
}
export default class UFSSplitPanelNavigationWrapper extends Component<Props, {}> {
    childComponents: UFSSplitPanelNavigationWrappedComponent[];
    static defaultProps: {
        showAutoBackButton: boolean;
    };
    constructor(props: Props);
    registerChildComponent: (childComponent: UFSSplitPanelNavigationWrappedComponent) => void;
    unregisterChildComponent: () => void;
    componentWillReceiveProps(nextProps: Props): void;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: Props, nextState: Object): boolean;
    defaultNavigatorProps(): {
        title: string;
        translucent: boolean;
        interactivePopGestureEnabled: boolean;
        navigationBarHidden: boolean;
        passProps: {
            children: ReactNode;
            registerChildComponent: (childComponent: UFSSplitPanelNavigationWrappedComponent) => void;
            unregisterChildComponent: () => void;
            panelId: string;
            showAutoBackButton: boolean;
            style: ViewStyle;
        };
    };
}
