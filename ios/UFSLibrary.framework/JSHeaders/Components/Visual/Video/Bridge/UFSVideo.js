var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import { makeUFSErrorFromUserInfo } from '../../../JSCore/Common/UFSError';
export default class UFSVideoManager extends Component {
    constructor() {
        super(...arguments);
        this.onWaiting = (event) => {
            this.props.onWaiting(event.nativeEvent.value);
        };
        this.onError = (event) => {
            const userInfo = event.nativeEvent.value;
            this.props.onError(makeUFSErrorFromUserInfo(userInfo));
        };
    }
    render() {
        return (React.createElement(UFSVideo, __assign({}, this.props, {onWaiting: this.props.onWaiting ? this.onWaiting : null, onError: this.props.onError ? this.onError : null})));
    }
}
const UFSVideo = requireNativeComponent('UFSVideoView');
//# sourceMappingURL=UFSVideo.js.map