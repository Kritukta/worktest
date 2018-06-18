var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { requireNativeComponent } from 'react-native';
import { makeUFSErrorFromUserInfo } from '../../../JSCore/Common/UFSError';
export default class UFSFileViewerManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onError = (event) => {
            this.props.onError(makeUFSErrorFromUserInfo(event.nativeEvent.error));
        };
    }
    render() {
        return (React.createElement(UFSFileViewer, __assign({}, this.props, {onError: this.props.onError ? this.onError : null})));
    }
}
const UFSFileViewer = requireNativeComponent('UFSFileViewerView');
//# sourceMappingURL=UFSFileViewer.js.map