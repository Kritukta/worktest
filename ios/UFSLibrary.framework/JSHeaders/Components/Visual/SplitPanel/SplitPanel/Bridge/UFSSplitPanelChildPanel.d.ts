/// <reference types="react" />
/// <reference types="react-native" />
import { Component, ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { UFSSplitPanelNavigationWrappedComponent } from './UFSSplitPanelNavigationWrapper';
export interface Props {
    id: number;
    panelId: string;
    children: ReactNode;
    showAutoBackButton?: boolean;
    style?: ViewStyle;
    registerChildComponent: (childComponent: UFSSplitPanelNavigationWrappedComponent) => void;
    unregisterChildComponent: () => void;
}
export interface State {
    children: ReactNode;
}
export default class UFSSplitPanelChildPanel<ChildPanelProps extends Props> extends Component<ChildPanelProps, State> implements UFSSplitPanelNavigationWrappedComponent {
    state: State;
    constructor(props: ChildPanelProps);
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    onNavigationPropsUpdate: (children?: ReactNode) => void;
}
