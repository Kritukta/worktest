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
export default class UFSMaskedInputManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            this.props.onChange(event.nativeEvent.value);
        };
        this.dismissKeyboard = () => {
            UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(this), UIManager.UFSMaskedInputView.Commands.dismissKeyboard, []);
        };
    }
    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.easeInEaseOut();
    }
    render() {
        return (React.createElement(UFSMaskedInput, __assign({}, this.props, {onChange: this.onChange}), renderHintIcons(this.props.children, 'MaskedInput', 1)));
    }
}
const UFSKeyboardType = UIManager.UFSMaskedInputView.Constants;
const UFSMaskedInput = requireNativeComponent('UFSMaskedInputView');
export { UFSKeyboardType as UFSKeyboardType };
//# sourceMappingURL=UFSMaskedInput.js.map