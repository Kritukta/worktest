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
export default class UFSSwitchManager extends Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            this.props.onChange(event.nativeEvent.checked);
        };
    }
    render() {
        return (React.createElement(UFSSwitch, __assign({}, this.props, {onChange: this.onChange})));
    }
}
const UFSSwitch = requireNativeComponent('UFSSwitchView');
//# sourceMappingURL=UFSSwitch.js.map