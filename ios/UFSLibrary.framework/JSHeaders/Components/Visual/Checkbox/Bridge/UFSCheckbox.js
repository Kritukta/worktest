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
import { renderHintIcons } from '../../HintIcon/HintIcon/Bridge/UFSHintIcon';
export default class UFSCheckboxManager extends React.Component {
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
        return (React.createElement(UFSCheckbox, __assign({}, this.props, {onChange: this.onChange}), renderHintIcons(this.props.children, 'Checkbox', 1)));
    }
}
const UFSCheckbox = requireNativeComponent('UFSCheckboxView');
//# sourceMappingURL=UFSCheckbox.js.map