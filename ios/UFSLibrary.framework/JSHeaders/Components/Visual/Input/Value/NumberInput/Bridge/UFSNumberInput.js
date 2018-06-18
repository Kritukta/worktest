var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import ReactNative, { LayoutAnimation, UIManager, requireNativeComponent } from 'react-native';
import { renderHintIcons } from '../../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
export default class UFSNumberInputManager extends React.Component {
    constructor() {
        super(...arguments);
        this.value = null;
        this.stringValue = "";
        this.onChange = (event) => {
            this.stringValue = event.nativeEvent.value;
            var stringValue = this.stringValue.replace(',', '.');
            stringValue = stringValue.replace(' ', '');
            if (stringValue.length > 1) {
                if (stringValue[stringValue.length - 1] == '.') {
                    stringValue = stringValue.replace('.', '.0');
                }
            }
            const number = parseFloat(stringValue) || null;
            this.value = number;
            this.props.onChange(number);
        };
        this.dismissKeyboard = () => {
            UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(this), UIManager.UFSNumberInputView.Commands.dismissKeyboard, []);
        };
    }
    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.easeInEaseOut();
    }
    render() {
        const props = Object.assign({}, this.props);
        delete props.value;
        if (this.value != this.props.value) {
            this.stringValue = this.props.value.toString().replace('.', ',');
        }
        return (React.createElement(UFSNumberInput, __assign({}, props, {value: this.stringValue, onChange: this.props.onChange ? this.onChange : undefined}), renderHintIcons(this.props.children, 'NumberInput', 1)));
    }
}
UFSNumberInputManager.defaultProps = {
    value: null,
    fractionalDigitsCount: 2,
    currency: ""
};
const UFSNumberInput = requireNativeComponent('UFSNumberInputView');
//# sourceMappingURL=UFSNumberInput.js.map