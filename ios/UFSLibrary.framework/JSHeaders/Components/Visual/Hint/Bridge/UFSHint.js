var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { connect } from 'react-redux';
import { requireNativeComponent, UIManager } from 'react-native';
export const UFSHintType = UIManager.UFSHintView.Constants;
class UFSHintManager extends React.Component {
    render() {
        if (this.props.visible) {
            return (React.createElement(UFSHint, __assign({}, this.props)));
        }
        else {
            return null;
        }
    }
}
const getHintText = (hints, code, textType) => {
    if (hints === undefined) {
        return;
    }
    const hint = hints.hints.find((hint) => hint.elementCode === code);
    if (hint === undefined) {
        return;
    }
    const t = hint.hintTexts.find((text) => text.hintTextType === textType);
    return t.text;
};
const mapStateToProps = (state, ownProps) => {
    const stateText = getHintText(state.workflow.hints, ownProps.code, 'FIELD');
    return {
        text: stateText ? stateText : ownProps.text,
        visible: state.workflow.hintsVisible
    };
};
export default connect(mapStateToProps)(UFSHintManager);
const UFSHint = requireNativeComponent('UFSHintView');
//# sourceMappingURL=UFSHint.js.map