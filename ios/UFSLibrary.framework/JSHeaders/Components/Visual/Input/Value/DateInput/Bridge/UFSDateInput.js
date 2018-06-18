var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { LayoutAnimation, UIManager, requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
export const UFSDateInputType = UIManager.UFSDateInputView.Constants;
export default class UFSDateInputManager extends Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            if (event.nativeEvent.value) {
                this.props.onChange(new Date(event.nativeEvent.value));
            }
            else {
                this.props.onChange(null);
            }
        };
        this.onVisibilityChange = (event) => {
            if (!this.props.onVisibilityChange) {
                return;
            }
            this.props.onVisibilityChange(event.nativeEvent.calendarActive);
        };
    }
    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.easeInEaseOut();
    }
    render() {
        let props = Object.assign({}, this.props, {
            type: this.props.dateType || UFSDateInputType.DAY_PICKER,
            value: this.props.value ? this.props.value.toISOString() : ""
        });
        return (React.createElement(UFSDateInput, __assign({}, props, {onChange: this.onChange, onVisibilityChange: this.onVisibilityChange}), renderHintIcons(this.props.children, 'DateInput', 1)));
    }
}
const UFSDateInput = requireNativeComponent('UFSDateInputView');
//# sourceMappingURL=UFSDateInput.js.map