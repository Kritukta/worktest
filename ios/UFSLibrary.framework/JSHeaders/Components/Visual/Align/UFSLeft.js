var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { View } from 'react-native';
export default class UFSLeft extends Component {
    render() {
        return (React.createElement(View, __assign({}, this.props, {style: style})));
    }
}
const style = {
    flexDirection: 'row',
    justifyContent: 'flex-start'
};
//# sourceMappingURL=UFSLeft.js.map