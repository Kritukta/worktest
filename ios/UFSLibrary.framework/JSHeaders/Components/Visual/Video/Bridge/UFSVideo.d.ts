/// <reference types="react-native" />
/// <reference types="react" />
import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { UFSError } from '../../../JSCore/Common/UFSError';
export interface PlayerEvent {
    nativeEvent: {
        value?: any;
    };
}
export interface Props {
    /**
    *  Set fileId of video file placed in local storage
    */
    fileId?: string;
    /**
    *  Set url of video file that will be played
    */
    url?: string;
    /**
    *  Set flag that indicate is video playing or not
    */
    playing?: boolean;
    /**
    *  Set flag that indicate is video player in fullscreem mode or not
    */
    fullscreen?: boolean;
    /**
    *  Function is called when video started
    */
    onStart?: () => void;
    /**
    *  Function is called when video finished
    */
    onEnd?: () => void;
    /**
    *  Function is called when play button clicked
    */
    onPlayClick?: () => void;
    /**
    *  Function is called when fullscreen button clicked
    */
    onFullscreenClick?: () => void;
    style?: ViewStyle;
    testID?: string;
}
export interface PublicProps extends Props {
    /**
    *  Function is called when video update buffering
    */
    onWaiting?: (isWaiting: boolean) => void;
    /**
    *  Function is called when error has occure
    */
    onError?: (error: UFSError) => void;
}
export interface PrivateProps extends Props {
    /**
    *  Function is called when video update buffering
    */
    onWaiting?: (event: PlayerEvent) => void;
    /**
    *  Function is called when error has occure
    */
    onError?: (event: PlayerEvent) => void;
}
export default class UFSVideoManager extends Component<PublicProps, {}> {
    private onWaiting;
    private onError;
    render(): JSX.Element;
}
