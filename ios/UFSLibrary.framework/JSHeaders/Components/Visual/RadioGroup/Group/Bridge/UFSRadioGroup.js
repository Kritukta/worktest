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
export default class UFSRadioGroupManager extends React.Component {
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
        return (React.createElement(UFSRadioGroup, __assign({}, this.props, {onChange: this.onChange})));
    }
}
const UFSRadioGroup = requireNativeComponent('UFSRadioGroupView');
//# sourceMappingURL=UFSRadioGroup.js.map