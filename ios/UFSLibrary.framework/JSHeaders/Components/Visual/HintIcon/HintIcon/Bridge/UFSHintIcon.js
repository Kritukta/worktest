var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requireNativeComponent } from 'react-native';
class UFSHintIconManager extends Component {
    render() {
        return (React.createElement(UFSHintIcon, __assign({}, this.props)));
    }
}
const getHintText = (hints, code, text, textType) => {
    if (!code) {
        return text;
    }
    if (hints === undefined) {
        return;
    }
    const hint = hints.hints.find(hint => hint.elementCode === code);
    if (hint === undefined) {
        return;
    }
    const t = hint.hintTexts.find(text => text.hintTextType === textType);
    return t.text;
};
const mapStateToProps = (state, ownProps) => {
    return {
        text: getHintText(state.workflow.hints, ownProps.code, ownProps.text, 'FIELD')
    };
};
const HintIcon = connect(mapStateToProps)(UFSHintIconManager);
export default HintIcon;
const UFSHintIcon = requireNativeComponent('UFSHintIconView');
export const renderHintIcons = (children, componentName, maximumIcons = 1, allowHintIconsWithoutAutoPosition = false) => {
    if (!children) {
        return;
    }
    const childrenArray = React.Children.toArray(children);
    var numberOfHintIconsWithAutoPosition = 0;
    const hintIcons = childrenArray.filter(child => {
        if (child.type === HintIcon) {
            if (child.props.autoPosition) {
                numberOfHintIconsWithAutoPosition++;
            }
            return true;
        }
        else {
            return false;
        }
    });
    if (numberOfHintIconsWithAutoPosition > maximumIcons) {
        console.warn(componentName + ': maximum HintIcon count is ' + maximumIcons + ', but received ' + hintIcons.length + ' HintIcons. Check and remove extra HintIcon');
    }
    return React.Children.map(hintIcons, (hintIcon) => {
        if (!allowHintIconsWithoutAutoPosition) {
            const updatedProps = Object.assign({}, hintIcon.props, {
                autoPosition: true
            });
            return React.cloneElement(hintIcon, updatedProps);
        }
        else {
            return hintIcon;
        }
    });
};
//# sourceMappingURL=UFSHintIcon.js.map