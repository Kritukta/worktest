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
export default class UFSImageManager extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            imageWidth: 0,
            imageHeight: 0
        };
        this.onError = (event) => {
            this.props.onError(makeUFSErrorFromUserInfo(event.nativeEvent.error));
        };
        this.onImageSizeCalculated = (event) => {
            let width = event.nativeEvent.width;
            let height = event.nativeEvent.height;
            this.setState({
                imageWidth: width,
                imageHeight: height
            });
        };
    }
    render() {
        return (React.createElement(UFSImage, __assign({}, this.props, {onError: this.props.onError ? this.onError : null, onCalculatedSize: this.onImageSizeCalculated, imageHeight: this.state.imageHeight, imageWidth: this.state.imageWidth})));
    }
    ;
}
const UFSImage = requireNativeComponent('UFSImageView');
//# sourceMappingURL=UFSImage.js.map