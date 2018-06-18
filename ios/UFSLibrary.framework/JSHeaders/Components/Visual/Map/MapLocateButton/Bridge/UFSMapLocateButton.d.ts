/// <reference types="react" />
import * as React from 'react';
import { Coordinate } from '../../../../JSCore/Common/UFSInterfaces';
export interface MapLocaleButtonEvent {
    nativeEvent: {
        coordinate: Coordinate;
        recommendedZoom: number;
    };
}
export interface Props {
    testID?: string;
}
export interface PublicProps extends Props {
    onClick?: (coordinate: Coordinate, zoom: number) => void;
}
export interface PrivateProps extends Props {
    onClick?: (event: MapLocaleButtonEvent) => void;
}
export default class UFSMapLocateButtonManager extends React.Component<PublicProps, {}> {
    onClick: (event: MapLocaleButtonEvent) => void;
    render(): JSX.Element;
}
