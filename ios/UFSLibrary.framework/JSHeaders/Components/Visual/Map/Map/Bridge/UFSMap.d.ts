/// <reference types="react-native" />
/// <reference types="react" />
import React, { Component } from 'react';
import { ViewStyle } from 'react-native';
import { Coordinate } from '../../../../JSCore/Common/UFSInterfaces';
import { UFSError, ErrorUserInfo } from '../../../../JSCore/Common/UFSError';
export declare const UFSMapSource: any;
export declare const UFSRouteType: any;
export interface ChangeEvent {
    nativeEvent: {
        center: Coordinate;
        zoom: number;
    };
}
export interface OnMapErrorEvent {
    nativeEvent: {
        error: ErrorUserInfo;
    };
}
export interface Props extends React.Props<UFSMapManager> {
    source?: number;
    apiKey?: string;
    traffic?: boolean;
    userLocation?: boolean;
    zoom?: number;
    center?: Coordinate;
    route?: Array<Coordinate | MapAddress | MapMarkerId>;
    routeType?: number;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    onChange?: (coordinate: Coordinate, zoom?: number) => void;
    onError?: (error: UFSError) => void;
}
export interface PrivateProps extends Props {
    onChange?: (event: ChangeEvent) => void;
    onError?: (event: OnMapErrorEvent) => void;
}
export interface MapAddress {
    address: string;
}
export interface MapMarkerId {
    markerId: string;
}
export default class UFSMapManager extends Component<PublicProps, {}> {
    static defaultProps: {
        apiKey: string;
        center: {
            lat: number;
            lng: number;
        };
    };
    private mapContent;
    private mapControls;
    private trafficButton;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    onChange: (event: ChangeEvent) => void;
    onError: (event: OnMapErrorEvent) => void;
    handlePropsUpdate: (props: Props) => void;
    traverseMapControls: (mapControls: React.ReactChildren) => void;
    render(): JSX.Element;
}
