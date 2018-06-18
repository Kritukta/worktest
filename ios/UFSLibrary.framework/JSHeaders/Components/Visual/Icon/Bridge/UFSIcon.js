var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { requireNativeComponent, UIManager } from 'react-native';
export const UFSIconType = UIManager.UFSIconView.Constants;
export default class UFSIconManager extends Component {
    render() {
        return (React.createElement(UFSIcon, __assign({}, this.props)));
    }
}
const UFSIcon = requireNativeComponent('UFSIconView');
//# sourceMappingURL=UFSIcon.js.map