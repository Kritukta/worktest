/// <reference types="react" />
import * as React from 'react';
import { Coordinate } from '../../../../JSCore';
import { UFSError, ErrorUserInfo } from '../../../../JSCore/Common/UFSError';
export interface MarkerEvent {
    nativeEvent: {
        error: ErrorUserInfo;
    };
}
export interface Props {
    location: Coordinate | string;
    title?: string;
    selected?: boolean;
    id?: string;
    onClick?: () => void;
    onClose?: () => void;
    testID?: string;
}
export interface PublicProps extends Props {
    onError?: (error: UFSError) => void;
}
export interface PrivateProps extends Props {
    onError?: (event: MarkerEvent) => void;
}
export default class UFSMarkerManager extends React.Component<PublicProps, {}> {
    onError: (event: MarkerEvent) => void;
    render(): JSX.Element;
}
