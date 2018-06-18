var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { UIManager, requireNativeComponent } from 'react-native';
export const UFSTabSelectorAutoWidthType = UIManager.UFSTabSelectorView.Constants;
export default class UFSTabSelectorManager extends Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            this.props.onChange(event.nativeEvent.index, event.nativeEvent.value);
        };
    }
    render() {
        return (React.createElement(UFSTabSelector, __assign({}, this.props, {onChange: this.onChange})));
    }
}
UFSTabSelectorManager.defaultProps = {
    autoWidth: UFSTabSelectorAutoWidthType.NONE
};
const UFSTabSelector = requireNativeComponent('UFSTabSelectorView');
//# sourceMappingURL=UFSTabSelector.js.map