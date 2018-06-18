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
export default class UFSBaseCellManager extends Component {
    render() {
        return (React.createElement(UFSBaseCell, __assign({}, this.props, {testID: this.props.testID}), this.props.children));
    }
}
const UFSBaseCell = requireNativeComponent('UFSBaseCellView');
//# sourceMappingURL=UFSBaseCell.js.map