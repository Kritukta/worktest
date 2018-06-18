var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { UIManager, requireNativeComponent, StyleSheet } from 'react-native';
import { Text } from '../../Text';
import { Icon } from '../../Icon/';
export const UFSButtonType = UIManager.UFSButtonView.Constants;
export default class UFSButtonManager extends Component {
    constructor() {
        super(...arguments);
        this.findButtonText = (children) => {
            let text = children
                .filter(child => child.type == Text)
                .map(child => this.buttonTitle(child.props.children))
                .join(' ');
            return text;
        };
        this.buttonTitle = (entity) => {
            return (entity instanceof Array) ? entity.join("") : entity;
        };
        this.findIcon = (children) => {
            let icons = children.filter(child => child.type == Icon);
            return icons.length > 0 ? icons[0] : undefined;
        };
    }
    render() {
        const children = React.Children.toArray(this.props.children);
        let props = Object.assign({}, this.props, {
            type: this.props.type || UFSButtonType.DEFAULT
        });
        delete props.children;
        const text = this.findButtonText(children);
        const icon = this.findIcon(children);
        if (icon != undefined) {
            var iconButtonProps = {
                onExecute: this.props.onExecute,
                disabled: this.props.disabled,
                testID: this.props.testID
            };
            if (!text || !text.length) {
                iconButtonProps.type = UFSButtonType.ICON;
            }
            else {
                iconButtonProps.type = UFSButtonType.TEXT_ICON;
                iconButtonProps.style = styles.textIconButton;
                iconButtonProps.title = text;
            }
            return (React.createElement(UFSButton, __assign({}, iconButtonProps), icon));
        }
        return (React.createElement(UFSButton, __assign({title: text, testID: this.props.testID}, props)));
    }
}
const styles = StyleSheet.create({
    textIconButton: {
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});
const UFSButton = requireNativeComponent('UFSButtonView');
//# sourceMappingURL=UFSButton.js.map