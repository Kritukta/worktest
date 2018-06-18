/// <reference types="react-native" />
/// <reference types="react" />
import React from 'react';
import { ViewStyle } from 'react-native';
import { UFSError, ErrorUserInfo } from '../../../JSCore/Common/UFSError';
export interface FileViewerError {
    nativeEvent: {
        error: ErrorUserInfo;
    };
}
export interface Props {
    /**
    *  Set file's id for open.
    */
    fileId?: string;
    /**
    *  Set function for success opening file.
    */
    onOpen?: () => void;
    style?: ViewStyle;
}
export interface PublicProps extends Props {
    /**
    *  Set function for failure opening file.
    */
    onError?: (error: UFSError) => void;
    /**
    *  Set zooming option enabled.
    */
    zoomEnabled?: boolean;
    testID?: string;
}
export interface PrivateProps extends Props {
    /**
    *  Set function for failure opening file.
    */
    onError?: (event: FileViewerError) => void;
}
export default class UFSFileViewerManager extends React.Component<PublicProps, {}> {
    onError: (event: FileViewerError) => void;
    render(): JSX.Element;
}
