/// <reference types="react" />
import * as React from 'react';
export interface HistoryItem {
    title?: string;
    accessible?: boolean;
    data?: any;
    key?: string;
}
export interface BreadcrumbsEvent {
    nativeEvent: {
        value?: HistoryItem;
    };
}
export interface Props {
    selectedKey?: string;
    testID?: string;
}
export interface PublicProps extends Props {
    history?: HistoryItem[][];
    onNavigate?: (item: HistoryItem) => void;
}
export interface PrivateProps extends Props {
    history?: HistoryItem[];
    onNavigate?: (item: BreadcrumbsEvent) => void;
}
export default class UFSBreadcrumbsManager extends React.Component<PublicProps, {}> {
    onNavigate: (event: BreadcrumbsEvent) => void;
    lastHistory: () => HistoryItem[];
    render(): JSX.Element;
}
