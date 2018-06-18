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
export default class UFSRadioButtonManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            this.props.onChange();
        };
    }
    render() {
        return (React.createElement(UFSRadioButton, __assign({}, this.props, {onRadioButtonChange: this.onChange})));
    }
}
UFSRadioButtonManager.defaultProps = {
    label: "Заголовок"
};
const UFSRadioButton = requireNativeComponent('UFSRadioButtonView');
//# sourceMappingURL=UFSRadioButton.js.map