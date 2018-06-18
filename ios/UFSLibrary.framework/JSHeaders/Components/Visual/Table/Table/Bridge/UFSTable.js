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
export default class UFSTableManager extends Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    noPaddings: this.props.noPaddings
                });
            }
            else {
                return child;
            }
        });
        return (React.createElement(UFSTable, __assign({}, this.props), childrenWithProps));
    }
}
UFSTableManager.defaultProps = {
    underlined: true
};
const UFSTable = requireNativeComponent('UFSTableView');
//# sourceMappingURL=UFSTable.js.map