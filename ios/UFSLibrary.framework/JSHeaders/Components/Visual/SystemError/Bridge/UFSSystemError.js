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
export default class UFSSystemErrorManager extends Component {
    render() {
        return (React.createElement(UFSSystemError, __assign({}, this.props)));
    }
}
const UFSSystemError = requireNativeComponent('UFSSystemErrorView');
//# sourceMappingURL=UFSSystemError.js.map