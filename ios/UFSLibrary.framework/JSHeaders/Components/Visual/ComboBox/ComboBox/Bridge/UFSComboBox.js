var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import ReactNative, { UIManager, requireNativeComponent } from 'react-native';
import UFSComboBoxContent from '../../ComboBoxContent/Bridge/UFSComboBoxContent';
import { renderHintIcons } from '../../../HintIcon/HintIcon/Bridge/UFSHintIcon';
import { HintIcon } from '../../../HintIcon/';
export default class UFSComboBoxManager extends Component {
    constructor() {
        super(...arguments);
        this.onChange = (event) => {
            if (!this.props.onChange) {
                return;
            }
            this.props.onChange(event.nativeEvent.value);
        };
        this.dismissKeyboard = () => {
            UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(this), UIManager.UFSComboBoxView.Commands.dismissKeyboard, []);
        };
    }
    contentProps(filterOutHintIcons) {
        if (filterOutHintIcons) {
            const childrenArray = React.Children.toArray(this.props.children);
            const childrenWithoutHintIcons = childrenArray.filter(child => child.type !== HintIcon);
            return Object.assign({}, this.props, {
                children: childrenWithoutHintIcons
            });
        }
        else {
            return Object.assign({}, this.props);
        }
    }
    render() {
        let hintIcons = renderHintIcons(this.props.children, 'ComboBox', 1);
        let contentProps = this.contentProps(hintIcons && hintIcons.length > 0);
        return (React.createElement(UFSComboBox, __assign({}, this.props, {onChange: this.onChange}), 
            hintIcons, 
            React.createElement(UFSComboBoxContent, __assign({}, contentProps))));
    }
}
const UFSComboBox = requireNativeComponent('UFSComboBoxView');
//# sourceMappingURL=UFSComboBox.js.map