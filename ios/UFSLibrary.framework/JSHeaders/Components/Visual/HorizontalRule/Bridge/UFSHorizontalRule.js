var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { requireNativeComponent, StyleSheet } from 'react-native';
export default class UFSHorizontalRuleManager extends Component {
    render() {
        let props = Object.assign({}, this.props, {
            style: [styles.horizontalRule, this.props.style]
        });
        return (React.createElement(UFSHorizontalRule, __assign({}, props)));
    }
}
const styles = StyleSheet.create({
    horizontalRule: {
        height: 51
    }
});
const UFSHorizontalRule = requireNativeComponent('UFSHorizontalRuleView');
//# sourceMappingURL=UFSHorizontalRule.js.map