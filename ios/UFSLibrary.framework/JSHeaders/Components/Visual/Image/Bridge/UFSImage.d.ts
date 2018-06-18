/// <reference types="react-native" />
/// <reference types="react" />
import { Component, ViewStyle } from 'react';
import { UFSError, ErrorUserInfo } from '../../../JSCore/Common/UFSError';
export interface CommonProps {
    /**
    *  Set name for image.
    */
    name?: string;
    /**
    *  Set fileId for image.
    */
    fileId?: string;
    /**
    *  Set url for image.
    */
    url?: string;
    style?: ViewStyle;
    testID?: string;
}
export interface Props extends CommonProps {
    /**
    *  Set error for load image.
    */
    onError?: (error: UFSError) => void;
}
export interface OnImageSizeCalculatedEvent {
    nativeEvent: {
        width: number;
        height: number;
    };
}
export interface PrivateProps extends CommonProps {
    onError?: (event: OnImageErrorEvent) => void;
    onCalculatedSize?: (event: OnImageSizeCalculatedEvent) => void;
    imageWidth: number;
    imageHeight: number;
}
export interface OnImageErrorEvent {
    nativeEvent: {
        error: ErrorUserInfo;
    };
}
export interface State {
    imageWidth: number;
    imageHeight: number;
}
export default class UFSImageManager extends Component<Props, State> {
    state: {
        imageWidth: number;
        imageHeight: number;
    };
    onError: (event: OnImageErrorEvent) => void;
    onImageSizeCalculated: (event: OnImageSizeCalculatedEvent) => void;
    render(): JSX.Element;
}
