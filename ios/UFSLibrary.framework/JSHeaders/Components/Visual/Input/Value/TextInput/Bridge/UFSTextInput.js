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
export default class UFSTextInputManager extends React.Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            this.props.onChange(event.nativeEvent.value);
        };
        this.dismissKeyboard = () => {
            UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(this), UIManager.UFSTextInputView.Commands.dismissKeyboard, []);
        };
    }
    componentWillUpdate(nextProps, nextState) {
        LayoutAnimation.easeInEaseOut();
    }
    render() {
        return (React.createElement(UFSTextInput, __assign({}, this.props, {onChange: this.onChange}), renderHintIcons(this.props.children, 'TextInput', 1)));
    }
}
export const UFSKeyboardType = UIManager.UFSTextInputView.Constants.KeyboardType;
export const UFSReturnKeyType = UIManager.UFSTextInputView.Constants.ReturnKeyType;
const UFSTextInput = requireNativeComponent('UFSTextInputView');
//# sourceMappingURL=UFSTextInput.js.map