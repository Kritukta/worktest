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
export default class UFSComboBoxContentManager extends Component {
    render() {
        return React.createElement(UFSComboBoxContent, __assign({}, this.props));
    }
}
const UFSComboBoxContent = requireNativeComponent('UFSComboBoxContentView');
//# sourceMappingURL=UFSComboBoxContent.js.map