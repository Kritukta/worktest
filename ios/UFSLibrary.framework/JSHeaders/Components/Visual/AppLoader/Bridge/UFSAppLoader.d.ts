/// <reference types="react-native" />
/// <reference types="react" />
import { Component, ViewStyle } from 'react';
export interface Props {
    bundleName: string;
    fileId?: string;
    url?: string;
    initialProps?: Object;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    onAppLoad?: (identifier: string) => void;
    onError?: (error: Error) => void;
}
export interface PrivateProps extends Props {
    onAppLoad?: (event: OnAppLoadEvent) => void;
    onAppLoaderError?: (error: OnAppLoaderError) => void;
}
export interface OnAppLoaderError {
    nativeEvent: {
        error: string;
    };
}
export interface OnAppLoadEvent {
    nativeEvent: {
        appId: string;
    };
}
export default class UFSAppLoaderManager extends Component<PublicProps, {}> {
    onAppLoad: (event: OnAppLoadEvent) => void;
    onError: (event: OnAppLoaderError) => void;
    render(): JSX.Element;
}
