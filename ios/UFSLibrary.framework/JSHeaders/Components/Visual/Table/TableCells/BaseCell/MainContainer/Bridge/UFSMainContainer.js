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
import { Icon } from '../../../../../';
export default class UFSMainContainerManager extends Component {
    render() {
        let hasIcon = false;
        React.Children.map(this.props.children, (child) => {
            if (child.type === Icon) {
                hasIcon = true;
            }
            return child;
        });
        return (React.createElement(UFSMainContainer, __assign({}, this.props, {hasIcon: hasIcon, testID: this.props.testID})));
    }
}
const UFSMainContainer = requireNativeComponent('UFSMainContainerView');
//# sourceMappingURL=UFSMainContainer.js.map